/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Flex, Switch, Text, FormControl, Input, Select, Box, UnorderedList, ListItem, FormErrorMessage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/action/createEvent";

const LocationModal = (props) => {
    const [locationVal, setLocationVal] = useState({});
    const dispatch = useDispatch();
    const [isError, setIsError] = useState({ url: false, isUrlEmpty: false, link: false, venue: false, province: false, city: false, address: false });

    const provinces = props.provinces;
    const cities = props.cities;

    useEffect(() => {
        props.isOnline ? setLocationVal({ ...locationVal, method: 'online' }) : setLocationVal({ ...locationVal, method: 'offline' });
    }, [props.isOnline])

    const handleClick = () => {

        if (locationVal.method === 'online') {
            if (!Object.hasOwn(locationVal, 'url')) {
                return setIsError({ ...isError, url: true, isUrlEmpty: true });
            }
            if (Object.hasOwn(locationVal, 'url')) {
                if (!locationVal.url.length) return setIsError({ ...isError, url: true, isUrlEmpty: true });
                if (!locationVal.url.includes('https://') && !locationVal.url.includes('http://')) return setIsError({ ...isError, url: true, link: true });
            }
        }
        if (locationVal.method === 'offline') {
            let value = { ...isError }
            delete value.isUrlEmpty;
            delete value.url;
            delete value.link;
            // console.log(value);
            for (const key in value) {
                if (!Object.hasOwn(locationVal, `${key}`)) {
                    value[key] = true;
                    return setIsError(value);
                }
                if (!locationVal[key]) {
                    value[key] = true;
                    return setIsError(value);
                }
            }
        }

        dispatch(setLocation(locationVal));
        props.onClose();
    };
    // console.log(isError)
    // console.log(locationVal)
    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* SWITCH */}
                    <Flex bg={'whitesmoke'} p={'5px'} align={'center'} gap={'3'} mb={'15px'} borderRadius={'5px'} border={'1px'} borderColor={'#DEDEDE'}>
                        <Switch size={'lg'} colorScheme="yellow" onChange={props.switchVal} isChecked={props.isOnline} />
                        <Text fontSize={'16px'} color={'#888296'} as={'b'}>Online Event</Text>
                    </Flex>

                    {props.isOnline ?
                        <>
                            <Box bg={'whitesmoke'} borderRadius={'5px'} border={'1px'} borderColor={'#DEDEDE'} p={'10px'}>
                                <UnorderedList>
                                    <ListItem>Please enter the Streaming URL correctly because this Streaming URL will received by your ticket buyer after the transaction has been paid.</ListItem>
                                    <ListItem>Errors in entering the Streaming URL are not the responsibility of TICKETO.</ListItem>
                                </UnorderedList>
                            </Box>
                            <FormControl mt={'15px'} isInvalid={isError.url}>
                                <Text as={'b'}>URL Streaming</Text>
                                <Input variant={'flushed'} type="url" placeholder="https://" onChange={(e) => { setLocationVal({ ...locationVal, url: e.target.value }); setIsError({ ...isError, url: false, isUrlEmpty: false }); if (e.target.value.includes('https://') || e.target.value.includes('http://')) setIsError({ ...isError, url: false, link: false }) }} value={locationVal.url} />
                                {isError.isUrlEmpty && <FormErrorMessage>URL is required!</FormErrorMessage>}
                                {isError.link && <FormErrorMessage>Invalid URL!</FormErrorMessage>}
                            </FormControl>
                        </>

                        :

                        <>
                            <FormControl isInvalid={isError.venue}>
                                <Text as={'b'}>Venue Name</Text>
                                <Input variant={'flushed'} type={"text"} onChange={(e) => { setLocationVal({ ...locationVal, venue: e.target.value }); setIsError({ ...isError, venue: false }) }} value={locationVal.venue} />
                                {isError.venue && <FormErrorMessage>Venue name is required!</FormErrorMessage>}
                            </FormControl>
                            <Flex gap={'10'} mt={'25px'}>
                                <FormControl isInvalid={isError.province}>
                                    <Text as={'b'}>Province</Text>
                                    <Select variant={'flushed'} onChange={(e) => { props.provinceId(e.target.value); setLocationVal({ ...locationVal, province: e.target.value }); setIsError({ ...isError, province: false }) }} value={locationVal.province}>
                                        <option style={{ display: 'none' }}>Select Province</option>
                                        {provinces.map(({ id, name }) => {
                                            return <option key={id} value={id}>{name}</option>
                                        })}
                                    </Select>
                                    {isError.province && <FormErrorMessage>Province is required!</FormErrorMessage>}
                                </FormControl>
                                <FormControl isInvalid={isError.city}>
                                    <Text as={'b'}>City</Text>
                                    <Select variant={'flushed'} onChange={(e) => { setLocationVal({ ...locationVal, city: e.target.value, detail: cities.find((data) => data.id == e.target.value) }); setIsError({ ...isError, city: false }) }} value={locationVal.city}>
                                        <option style={{ display: 'none' }}>Select City</option>
                                        {cities.map(({ id, city }) => {
                                            return <option key={id} value={id}>{city}</option>
                                        })}
                                    </Select>
                                    {isError.city && <FormErrorMessage>City is required!</FormErrorMessage>}
                                </FormControl>
                            </Flex>
                            <FormControl mt={'25px'} isInvalid={isError.address}>
                                <Text as={'b'}>Address</Text>
                                <Input variant={'flushed'} type="text" onChange={(e) => { setLocationVal({ ...locationVal, address: e.target.value }); setIsError({ ...isError, address: false }) }} value={locationVal.address} />
                                {isError.address && <FormErrorMessage>Address is required!</FormErrorMessage>}
                            </FormControl>
                        </>
                    }
                </ModalBody>

                <ModalFooter gap={'4'}>
                    <Button onClick={() => handleClick()} colorScheme="yellow">Save</Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
};

export default LocationModal;