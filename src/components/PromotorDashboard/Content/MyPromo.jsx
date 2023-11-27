import { Button, Flex, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure, Td, VStack } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CreatePromoModal from "./CreatePromoModal";
import API_CALL from "../../../helper";
import { useEffect, useState } from "react";
import EditPromoModal from "./EditPromoModal";

const MyPromo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onEdit = useDisclosure();
    const [ dataPromo, setDataPromo ] = useState([]);
    const [ trigger, setTrigger ] = useState(false);
    const [ editData, setEditData ] = useState(null);

    useEffect(() => {
        getPromo();
    }, [trigger]);

    const getPromo = async () => {
        const res = await API_CALL.get('/promo/all')

        if(!dataPromo.length) setDataPromo(res.data)
        
        if(trigger){
            setDataPromo(res.data)
            setTrigger(false)
        }
    }

    const onTrigger = () => {
        setTrigger(true)
    }

    const handleDataPromo = () => {
        const result = dataPromo.map((val) => {
            return (
                <Tr key={val.id}>
                    <Td>{val.name}</Td>
                    <Td>{val.event.name}</Td>
                    <Td>{val.ticket_type.type}</Td>
                    <Td>{val.code}</Td>
                    <Td>{val.stock}</Td>
                    <Td>{val.discount.substring(2)} %</Td>
                    <Td>{new Date(val.startDate).toLocaleString() }</Td>
                    <Td>{new Date(val.endDate).toLocaleString() }</Td>
                    <Td>
                        <VStack gap={'3'}>
                        <Button w={'80px'} colorScheme="yellow" onClick={() => {
                            onEdit.onOpen()
                            setEditData(val)
                            console.log("clicked",onEdit.isOpen);
                            // API_CALL.post(`/promo/edit/${val.id}`, val) //!
                            // getPromo() //!
                        }}>Edit</Button>
                        
                        <Button w={'80px'} colorScheme="red" onClick={() => {
                            API_CALL.delete(`/promo/delete/${val.id}`, val)
                            onTrigger()
                            getPromo()
                        }}>Delete</Button>
                        </VStack>
                    </Td>
                </Tr>
            )
        })

        return result;
    }
    
    return <>
        <Flex p={'35px 50px'} flexDirection={'column'}>
            <Flex justify={'end'} flex={'1'} pr={'15px'} mb={'15px'}>
                {/* <Button onClick={tes}>TEST</Button> */}
                <Button colorScheme="yellow" leftIcon={<AiOutlinePlus />} onClick={onOpen}>Add</Button>
                <CreatePromoModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onSuccess={onTrigger}/>
                <EditPromoModal isOpen={onEdit.isOpen} onOpen={onEdit.onOpen} onClose={onEdit.onClose} onSuccess={onTrigger} data={editData}/>
            </Flex>
            <Flex p={'15px'}>
                <TableContainer border={'1px'} borderRadius={'6px'} borderColor={'#DEDEDE'} w={'100%'} overflowWrap={'break-word'}>
                    <Table variant={'striped'} colorScheme={"yellow"}>
                        <Thead>
                            <Tr>
                                <Th>Promo Name</Th>
                                <Th>Event Name</Th>
                                <Th>Ticket Type</Th>
                                <Th>Promo Code</Th>
                                <Th>Stock</Th>
                                <Th>Discount</Th>
                                <Th>Start Date</Th>
                                <Th>End Date</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody >
                            {handleDataPromo()}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </Flex>
    </>
}

export default MyPromo;