/* eslint-disable react/prop-types */
import { Avatar, Box, Flex, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import bannerImg from "../../assets/banner-event.jpg";
import { BsPlusCircle } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import LocationModal from "./LocationModal";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../../redux/action/createEvent";
import API_CALL from "../../helper";

const CreateEvent = (props) => {
    const addLocation = useDisclosure();
    const [isOnline, setIsOnline] = useState(false);
    const [value, setValue] = useState({});
    const [banner, setBanner] = useState();
    const [bannerPreview, setBannerPreview] = useState();
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const [loginUser, setLoginUser] = useState(null);

    const categories = props.categories;
    const provinces = props.provinces;
    const cities = props.cities;
    const locationDetails = useSelector((state) => state.createEvent.location);

    useEffect(() => {
        getLoginUser();
    },[setLoginUser])

    useEffect(() => {
        dispatch(setEvent(value));
    },[value, setValue])

    useEffect(() => {
        if(banner){
            const reader = new FileReader();
            reader.onload = () => setBannerPreview(reader.result);
            reader.readAsDataURL(banner)
        }else{
            setBannerPreview(null);
        }
    },[banner])

    const getLoginUser = async () => {
        const token = localStorage.getItem("token")
        const response = await API_CALL.get(`/accounts/keeplogin`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        setLoginUser({name: response.data.result.name, avatar: response.data.result.avatar});
    }

    const handleLocationDetails = (data) => {
        if (data.method === 'online') {
            return <>
                <Text as={'b'}>Online Event</Text>
                <Text>{data.url}</Text>
            </>
        } else if (data.method === 'offline') {
            return <>
                <Text as={'b'}>{data.venue}</Text>
                <Text>{data.address}, {data.detail.city}, {data.detail.province.name}</Text>
            </>
        } else {
            return <Text fontSize={'16px'} color={'#888296'}>Add location</Text>
        }
    };
console.log("Login Uset", loginUser);
    return <>

        <Flex
            border={'1px'}
            borderColor={'gray.200'}
            boxShadow={'md'}
            flexDirection={'column'}
            mt={'3%'}
            ml={'auto'}
            mr={'auto'}
            mb={{ base: '75px' }}
            borderRadius={'10px'}
            // p={'20px 15px'}
            w={{ base: '80%', md: '70%', xl: '50%' }}
            h={'65vh'}
        >
            <Flex flex={'1'} minH={'300px'} bgSize={'cover'} bgImage={bannerPreview ? bannerPreview : bannerImg} borderTopRadius={'10px'} justify={'center'} align={'center'} cursor={'pointer'} onClick={() => fileInputRef.current.click()}>
                <Input display='none' type="file" ref={fileInputRef}
                    onChange={(e) => {
                        const fileImage = e.target.files[0];
                        
                        if(fileImage && fileImage.type.substring(0, 5) === 'image'){
                            props.file(fileImage)
                            setBanner(fileImage)
                        } else {
                            props.file(null)
                            setBanner(null)
                        }
                    }}
                /> {/*Upload File*/}
                <Flex flexDirection={'column'} justify={'center'} align={'center'} color={'white'} gap={'3'} display={bannerPreview ? 'none' : 'flex'}>
                    <BsPlusCircle size={'60px'} />
                    <Box textAlign={'center'}>
                        <Text fontSize={'24px'} as={'b'}>Upload an image/banner/poster</Text>
                        <Text fontSize={'16px'}>Recommended 724 x 340px</Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex flex={'1'} p={'15px 40px 40px 40px'} flexDirection={'column'}>
                <Flex flexDirection={'column'} gap={'2'} borderBottom={'1px'} borderColor={'#D8D8D8'} mb={'15px'}>
                    <Input variant={'unstyled'} placeholder="event name" fontSize={'24px'} onChange={(e) => setValue({ ...value, eventName: e.target.value })} />
                    <Select variant={'unstyled'} w={'25%'} mb={'15px'} onChange={(e) => setValue({ ...value, category: e.target.value })}>
                        <option style={{ display: 'none' }}>Select Category</option>
                        {categories.map(({ id, name }) => {
                            return <option key={id} value={id}>{name}</option>
                        })}
                    </Select>
                </Flex>
                <Flex flex={'1'} gap={'5'}>
                    <Flex flex={'1'} flexDirection={'column'}>
                        <Text as={'b'}>Event Organizer</Text>
                        <Flex justify={'start'} align={'center'} gap={'5'} mt={'10px'} p={'0 10px'} >
                            <Avatar size={'lg'} src={loginUser ? `${import.meta.env.VITE_API_URL}/assets/profile/${loginUser.avatar}` : `${import.meta.env.VITE_API_URL}/assets/profile/avatar.png`} />
                            <Text>{loginUser && loginUser.name}</Text>
                        </Flex>
                    </Flex>
                    <Flex flex={'1'} flexDirection={'column'}>
                        <Text as={'b'}>Date and Time</Text>
                        <Flex mt={'10px'} flexDirection={'column'} gap={'2'}>
                            <FormControl>
                                <FormLabel>Start</FormLabel>
                                <Input type="datetime-local" onChange={(e) => setValue({ ...value, startEvent: e.target.value })} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>End</FormLabel>
                                <Input type="datetime-local" onChange={(e) => setValue({ ...value, endEvent: e.target.value })} />
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Flex flex={'1'} flexDirection={'column'}>
                        <Text as={'b'}>Location</Text>
                        <Flex mt={'10px'} gap={'2'} cursor={'pointer'} onClick={addLocation.onOpen} >
                            <IoLocationSharp size={'28px'} color="#ADB6C9" fontSize={'16px'} />
                            <Flex flexDirection={'column'} justify={'center'} flex={'1'}>
                                {handleLocationDetails(locationDetails)}
                                <LocationModal
                                    isOpen={addLocation.isOpen}
                                    onClose={addLocation.onClose}
                                    isOnline={isOnline}
                                    switchVal={() => setIsOnline(!isOnline)}
                                    provinces={provinces}
                                    provinceId={props.getProvinceId}
                                    cities={cities}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </>
};

export default CreateEvent;