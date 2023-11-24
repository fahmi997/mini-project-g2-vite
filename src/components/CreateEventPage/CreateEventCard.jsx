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

const CreateEvent = (props) => {
    const addLocation = useDisclosure();
    const [isOnline, setIsOnline] = useState(false);
    const [value, setValue] = useState({});
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const categories = props.categories;
    const provinces = props.provinces;
    const cities = props.cities;
    const locationDetails = useSelector((state) => state.createEvent.location);

    useEffect(() => {
        dispatch(setEvent(value));
    })

    // useEffect(() => {
    //     fileInputRef.current.addEventListener('change', (e) => {
    //         const file = e.target.files[0];
    //         if (file) {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(file);
    //             reader.onload = (e) => {
    //                 setValue({...value, banner: e.target.result });
    //             };
    //         }
    //     });
    // })

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
            <Flex flex={'1'} bgImage={bannerImg} borderTopRadius={'10px'} justify={'center'} align={'center'} cursor={'pointer'} onClick={() => fileInputRef.current.click()}>
                <Input display='none' type="file" ref={fileInputRef} onChange={(e) => props.file(e.target.files[0]) }></Input> {/*Upload File*/}
                <Flex flexDirection={'column'} justify={'center'} align={'center'} color={'white'} gap={'3'}>
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
                            <Avatar name='Segun Adebayo' size={'lg'} src='https://bit.ly/sage-adebayo' />
                            <Text>Segun Adebayo</Text>
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