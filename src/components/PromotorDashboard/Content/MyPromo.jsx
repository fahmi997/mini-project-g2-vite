import { Button, Flex, Table, TableContainer, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import CreatePromoModal from "./CreatePromoModal";

const MyPromo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <>
        <Flex border={'1px'} p={'35px 50px'} flexDirection={'column'}>
            <Flex border={'1px'} justify={'end'} flex={'1'}>
                <Button colorScheme="yellow" leftIcon={<AiOutlinePlus />} onClick={onOpen}>Add</Button>
                <CreatePromoModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Flex>
            <Flex border={'1px'} p={'15px'}>
                <TableContainer border={'1px'} w={'100%'}>
                    <Table variant={'striped'}>
                        <Thead>
                            <Tr>
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
                    </Table>
                </TableContainer>
            </Flex>
        </Flex>
    </>
}

export default MyPromo;