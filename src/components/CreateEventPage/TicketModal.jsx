/* eslint-disable react/prop-types */
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, Text, Input, Stack, Select, Flex, Switch, FormErrorMessage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTicket } from "../../redux/action/createEvent";

const TicketModal = (props) => {
    const dispatch = useDispatch();

    const ticketTypes = props.ticketTypes;
    const tickets = useSelector((state) => state.createEvent.ticket)

    const [freeTicket, setFreeTicket] = useState({});
    const [paidTicket, setPaidTicket] = useState({});
    const [isFree, setIsFree] = useState(false);
    const [isErrorFree, setIsErrorFree] = useState({ stock: false, startSale: false, endSale: false });
    const [isErrorPaid, setIsErrorPaid] = useState({ type: false, price: false, stock: false, startSale: false, endSale: false });

    useEffect(() => {
        // console.log(ticketTypes.find((t) => t.type === 'free'));
        const type = ticketTypes.find((t) => t.type === 'free')
        if (isFree) setFreeTicket({ ...freeTicket, type })
    }, [isFree, setIsFree]);

    const handleOnSave = () => {
        if (isFree) {
            for(const key in isErrorFree){
                let obj = {...isErrorFree}
                if (!Object.hasOwn(freeTicket, `${key}`)) {
                    obj[key] = true
                    return setIsErrorFree(obj)
                }
                if(!freeTicket[key]) {
                    obj[key] = true
                    return setIsErrorFree(obj)
                }
            }
            dispatch(setTicket([...tickets, freeTicket]));
            setFreeTicket({})
            // props.onClose();
        } else {
            for(const key in isErrorPaid){
                let obj = {...isErrorPaid}
                if (!Object.hasOwn(paidTicket, `${key}`)) {
                    obj[key] = true
                    return setIsErrorPaid(obj)
                }
                
                if(!paidTicket[key]) {
                    obj[key] = true
                    return setIsErrorPaid(obj)
                }
            }
            delete paidTicket.typeId;
            dispatch(setTicket([...tickets, paidTicket]));
            setPaidTicket({})
        }
    
        props.onClose();
    };
    
    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ticket</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* SWITCH */}
                    <Flex bg={'whitesmoke'} p={'5px'} align={'center'} gap={'3'} mb={'15px'} borderRadius={'5px'} border={'1px'} borderColor={'#DEDEDE'}>
                        <Switch size={'lg'} colorScheme="yellow" onChange={() => setIsFree(!isFree)} isChecked={isFree} />
                        <Text fontSize={'16px'} color={'#888296'} as={'b'}>Free Event</Text>
                    </Flex>

                    {isFree ?
                        <Stack gap={'5'}>

                            <FormControl isInvalid={isErrorFree.stock}>
                                <Text as={'b'}>Stock</Text>
                                <Input variant={'flushed'} type="number" value={freeTicket.stock} onChange={(e) => { setFreeTicket({ ...freeTicket, stock: e.target.value }); setIsErrorFree({ ...isErrorFree, stock: false }) }} />
                                {isErrorFree.stock && <FormErrorMessage>Stock is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorFree.startSale}>
                                <Text as={'b'}>Start Sale</Text>
                                <Input variant={'flushed'} type="datetime-local" value={freeTicket.startSale} onChange={(e) => {setFreeTicket({ ...freeTicket, startSale: e.target.value }); setIsErrorFree({ ...isErrorFree, startSale: false }) }} />
                                {isErrorFree.startSale && <FormErrorMessage>Date is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorFree.endSale}>
                                <Text as={'b'}>End Sale</Text>
                                <Input variant={'flushed'} type="datetime-local" value={freeTicket.endSale} onChange={(e) => {setFreeTicket({ ...freeTicket, endSale: e.target.value }); setIsErrorFree({ ...isErrorFree, endSale: false }) }} />
                                {isErrorFree.endSale && <FormErrorMessage>Date is required!</FormErrorMessage>}
                            </FormControl>
                        </Stack>
                        :
                        <Stack gap={'5'}>
                            <FormControl isInvalid={isErrorPaid.type}>
                                <Text as={'b'}>Ticket Type</Text>
                                <Select variant={'flushed'} value={paidTicket.typeId} onChange={(e) => {setPaidTicket({ ...paidTicket,typeId: e.target.value, type: ticketTypes.find(({ id }) => id == e.target.value) }); setIsErrorPaid({...isErrorPaid, type:false}) }}>
                                    <option style={{ display: 'none' }}>Select Type</option>
                                    {ticketTypes.map((ticketType) => {
                                        if (ticketType.type != 'free') {
                                            return <option key={ticketType.id} value={ticketType.id}>{ticketType.type.toUpperCase()}</option>
                                        }
                                    }
                                    )}
                                </Select>
                                {isErrorPaid.type && <FormErrorMessage>Ticket type is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorPaid.price}>
                                <Text as={'b'}>Price</Text>
                                <Input variant={'flushed'} type={'number'} value={paidTicket.price} onChange={(e) => {setPaidTicket({ ...paidTicket, price: e.target.value }); setIsErrorPaid({...isErrorPaid, price:false}) }} />
                                {isErrorPaid.price && <FormErrorMessage>Price is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorPaid.stock}>
                                <Text as={'b'}>Stock</Text>
                                <Input variant={'flushed'} type="number" value={paidTicket.stock} onChange={(e) => {setPaidTicket({ ...paidTicket, stock: e.target.value }); setIsErrorPaid({...isErrorPaid, stock:false}) }} />
                                {isErrorPaid.stock && <FormErrorMessage>Stock is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorPaid.startSale}>
                                <Text as={'b'}>Start Sale</Text>
                                <Input variant={'flushed'} type="datetime-local" value={paidTicket.startSale} onChange={(e) => {setPaidTicket({ ...paidTicket, startSale: e.target.value }); setIsErrorPaid({...isErrorPaid, startSale:false}) }} />
                                {isErrorPaid.startSale && <FormErrorMessage>Date is required!</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={isErrorPaid.endSale}>
                                <Text as={'b'}>End Sale</Text>
                                <Input variant={'flushed'} type="datetime-local" value={paidTicket.endSale} onChange={(e) => {setPaidTicket({ ...paidTicket, endSale: e.target.value }); setIsErrorPaid({...isErrorPaid, endSale:false}) }} />
                                {isErrorPaid.endSale && <FormErrorMessage>Date is required!</FormErrorMessage>}
                            </FormControl>
                        </Stack>
                    }
                </ModalBody>

                <ModalFooter gap={'4'}>
                    <Button onClick={props.onClose}>Close</Button>
                    <Button onClick={handleOnSave} colorScheme={"yellow"}>Add</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default TicketModal;