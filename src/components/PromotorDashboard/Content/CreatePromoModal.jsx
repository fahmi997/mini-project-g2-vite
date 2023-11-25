import { FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, Text, Select, Input, ModalFooter, HStack, Button, InputRightAddon, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

const CreatePromoModal = (props) => {
    const [ data, setData ] = useState({});

    // const getEvent = async () => {
        
    // }

    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Promo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack gap={'3'}>
                        <FormControl>
                            <Text as={'b'}>Name</Text>
                            <Input type={'text'} variant={'flushed'} />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Event</Text>
                            <Select variant={'flushed'}></Select>
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Ticket</Text>
                            <Select variant={'flushed'}></Select>
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Promo Code</Text>
                            <Input type={'text'} variant={'flushed'} />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Stock</Text>
                            <Input type={'text'} variant={'flushed'} />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Discount</Text>
                            <InputGroup>
                                <Input type={'number'} variant={'flushed'} />
                                <InputRightAddon>%</InputRightAddon>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Start</Text>
                            <Input type={'datetime-local'} variant={'flushed'} />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>End</Text>
                            <Input type={'datetime-local'} variant={'flushed'} />
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <HStack gap={'3'}>
                        <Button onClick={props.onClose}>Cancel</Button>
                        <Button colorScheme={'yellow'} onClick={props.onSave}>Save</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>

};

export default CreatePromoModal;