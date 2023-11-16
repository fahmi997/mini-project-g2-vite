/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, Text, Input, Stack, Select } from "@chakra-ui/react";

const TicketModal = (props) => {
    const ticketTypes = props.ticketTypes;

    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ticket</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack gap={'5'}>
                        <FormControl>
                            <Text as={'b'}>Ticket Type</Text>
                            <Select variant={'flushed'}>
                                <option style={{ display: 'none' }}>Select Type</option>
                                {ticketTypes.map((ticketType) => {
                                    return <option key={ticketType.id} value={ticketType.id}>{ticketType.type.toUpperCase()}</option>
                                }
                                )}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Price</Text>
                            <Input variant={'flushed'} type="number" />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Stock</Text>
                            <Input variant={'flushed'} type="number" />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>Start Sale</Text>
                            <Input variant={'flushed'} type="datetime-local" />
                        </FormControl>
                        <FormControl>
                            <Text as={'b'}>End Sale</Text>
                            <Input variant={'flushed'} type="datetime-local" />
                        </FormControl>
                    </Stack>
                </ModalBody>

                <ModalFooter gap={'4'}>
                    <Button onClick={props.onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default TicketModal;