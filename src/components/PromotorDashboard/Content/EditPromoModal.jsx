/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, Text, Select, Input, ModalFooter, HStack, Button, InputRightAddon, InputGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import API_CALL from "../../../helper";

const EditPromoModal = (props) => {
    const [data, setData] = useState([]);
    const [dataPromo, setDataPromo] = useState({});
    const [isError, setIsError] = useState({name: false, eventId: false, ticketTypeId: false, code: false, stock: false, discount: false, startDate: false, endDate: false });
    const currentData = props.data;

    useEffect(() => {
        // console.log(currentData);
        if(currentData) {
            const start = currentData.startDate.substring(0, 16)
            const end = currentData.endDate.substring(0, 16)
            console.log("START DATE: ",typeof start);
            setDataPromo({...currentData, startDate: start, endDate: end, discount: parseFloat(currentData.discount)})
        }
        getEvent();
    }, [currentData])

    const getEvent = async () => {
        const result = await API_CALL.post('/promo/event', { userId: 3 })
        const dataEvent = result.data.map((val) => {
            return {
                eventId: val.eventId,
                eventName: val.event.name,
                ticketTypeId: val.ticketTypeId,
                ticketTypeName: val.ticket_type.type,
            }
        })
        setData(dataEvent)
    }

    const eventOptions = () => {
        const result = data.filter((obj, index) => {
            return index === data.findIndex((obj2) => obj.eventId === obj2.eventId)
        })
        return result.map((val) => {
            return <option key={val.eventId} value={val.eventId}>{val.eventName.toUpperCase()}</option>
        })
    }

    const ticketTypeOptions = () => {
        return data.map((val) => {
            if(val.eventId == dataPromo.eventId){
                return <option key={val.ticketTypeId} value={val.ticketTypeId}>{val.ticketTypeName.toUpperCase()}</option>
            }
        })
    }

    const onSave = () => {
        for(const key in isError){
            if(!Object.hasOwn(dataPromo, `${key}`)){
                return setIsError({...isError, [key]: true });
            }
            if(!dataPromo[key]){
                return setIsError({...isError, [key]: true });
            }
        }

        API_CALL.patch(`/promo/update/${dataPromo.id}`, dataPromo)
        props.onSuccess()
        props.onClose()
    }

    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Promo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack gap={'3'}>
                        <FormControl isInvalid={isError.name}>
                            <Text as={'b'}>Name</Text>
                            <Input value={dataPromo.name} type={'text'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, name: e.target.value}); setIsError({...isError, name: false}) }}/>
                            {isError.name && <FormErrorMessage>Name is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.eventId}>
                            <Text as={'b'}>Event</Text>
                            <Select value={dataPromo.eventId} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, eventId: e.target.value}); setIsError({...isError, eventId: false}) }}>
                                <option style={{ display: 'none' }}>Select Event</option>
                                {eventOptions()}
                            </Select>
                            {isError.eventId && <FormErrorMessage>Event is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.ticketTypeId}>
                            <Text as={'b'}>Ticket</Text>
                            <Select value={dataPromo.ticketTypeId} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, ticketTypeId: e.target.value}); setIsError({...isError, ticketTypeId: false}) }}>
                                <option style={{ display: 'none' }}>Select Ticket</option>
                                {ticketTypeOptions()}
                            </Select>
                            {isError.ticketTypeId && <FormErrorMessage>Ticket is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.code}>
                            <Text as={'b'}>Promo Code</Text>
                            <Input value={dataPromo.code} type={'text'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, code: e.target.value}); setIsError({...isError, code: false}) }}/>
                            {isError.code && <FormErrorMessage>Promo Code is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.stock}>
                            <Text as={'b'}>Stock</Text>
                            <Input value={dataPromo.stock} type={'text'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, stock: e.target.value});  setIsError({...isError, stock: false}) }}/>
                            {isError.stock && <FormErrorMessage>Stock is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.discount}>
                            <Text as={'b'}>Discount</Text>
                            <InputGroup>
                                <Input value={dataPromo.discount*100} type={'number'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, discount: parseFloat(e.target.value)/100}); setIsError({...isError, discount: false}) }}/>
                                <InputRightAddon>%</InputRightAddon>
                            </InputGroup>
                            {isError.discount && <FormErrorMessage>Discount is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.startDate}>
                            <Text as={'b'}>Start</Text>
                            <Input value={dataPromo.startDate} type={'datetime-local'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, startDate: e.target.value}); setIsError({...isError, startDate: false}) }}/>
                            {isError.startDate && <FormErrorMessage>Start Date is required!</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={isError.endDate}>
                            <Text as={'b'}>End</Text>
                            <Input value={dataPromo.endDate} type={'datetime-local'} variant={'flushed'} onChange={(e) => {setDataPromo({...dataPromo, endDate: e.target.value}); setIsError({...isError, endDate: false}) }}/>
                            {isError.endDate && <FormErrorMessage>End Date is required!</FormErrorMessage>}
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <HStack gap={'3'}>
                        <Button onClick={props.onClose}>Cancel</Button>
                        <Button colorScheme={'yellow'} onClick={onSave}>Save</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>

};

export default EditPromoModal;