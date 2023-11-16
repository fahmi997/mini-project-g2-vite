/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Flex, Switch, Text, FormControl, Input, Select, Box, UnorderedList, ListItem } from "@chakra-ui/react";
// import { useState } from "react";

const LocationModal = (props) => {

    const provinces = props.provinces;
    const cities = props.cities;
    
    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* SWITCH */}
                    <Flex bg={'whitesmoke'} p={'5px'} align={'center'} gap={'3'} mb={'15px'} borderRadius={'5px'} border={'1px'} borderColor={'#DEDEDE'}>
                        <Switch size={'lg'} colorScheme="yellow" onChange={props.switchVal} isChecked={props.isOnline}/>  
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
                            <FormControl mt={'15px'}>
                                <Text as={'b'}>URL Streaming</Text>
                                <Input variant={'flushed'} type="text" placeholder="https://" />
                            </FormControl>
                        </>

                        :
                        
                        <>
                            <FormControl>
                                <Text as={'b'}>Venue Name</Text>
                                <Input variant={'flushed'} type="text" />
                            </FormControl>
                            <Flex gap={'10'} mt={'25px'}>
                                <FormControl>
                                    <Text as={'b'}>Province</Text>
                                    <Select variant={'flushed'} onChange={(e) => {props.provinceId(e.target.value)}}>
                                        <option style={{ display: 'none' }}>Select Province</option>
                                        {provinces.map(({ id, name }) => {
                                            return <option key={id} value={id}>{name}</option>
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <Text as={'b'}>City</Text>
                                    <Select variant={'flushed'}>
                                        <option style={{ display: 'none' }}>Select City</option>
                                        {cities.map(({ id, city }) => {
                                            return <option key={id} value={id}>{city}</option>
                                        })}
                                    </Select>
                                </FormControl>
                            </Flex>
                            <FormControl mt={'25px'}>
                                <Text as={'b'}>Address</Text>
                                <Input variant={'flushed'} type="text" />
                            </FormControl>
                        </>
                    }
                </ModalBody>

                <ModalFooter gap={'4'}>
                    <Button onClick={props.onSave} colorScheme="yellow">Save</Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
};

export default LocationModal;