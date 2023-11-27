/* eslint-disable react/prop-types */
import { Flex, Text, Image, Heading, Button, useDisclosure, Icon } from "@chakra-ui/react";
import { MdOutlineDeleteOutline, MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import TicketModal from "./TicketModal";

const Ticket = ({ type, price, stock, startSale, endSale , onEdit, onDelete}) => {
    const { isOpen, onOpen, onClose} = useDisclosure();
    return <>
        <Flex h={'200px'} w={'80%'} m={'auto'} position={'relative'}>
            <Flex borderLeft={'1px'} borderTop={'1px'} borderBottom={'1px'} w={'20%'} justify={'center'} align={'center'} borderRadius={'8px'}>
                <Flex w={'30%'} h={'70%'}>
                    <Image src="./barcodev.png" h={'100%'} w={'100%'} />
                </Flex>
            </Flex>
            <Flex borderLeft={'2px'} borderTop={'1px'} borderBottom={'1px'} borderRight={'1px'} borderLeftStyle={'dashed'} flex={'1'} borderRadius={'8px'} p={'25px 25px 25px 40px'} flexDirection={'column'}>
                <Flex flex={'1'} flexDirection={'column'} justify={'space-between'}>
                    <Flex flexDirection={'column'} flex={'1'} justify={'space-around'}>
                        <Flex flex={'1'}>
                            <Flex flexDirection={'column'} justify={'space-around'}>
                                <Heading>{type}</Heading>
                                <Flex gap={'5'}>
                                    <Text>Start: {startSale}</Text>
                                    <Text>End: {endSale}</Text>
                                </Flex>
                            </Flex>
                            <Flex flex={'1'} justify={'end'} align={'center'} gap={'3'}>
                                {/* <Button border={'1px'} boxSize={'40px'} display={'grid'} justifyContent={'center'} alignContent={'center'} fontSize={'20px'} borderRadius={'999px'} cursor={'pointer'} colorScheme={"blue"} onClick={onEdit}>
                                    <FiEdit2 />
                                </Button> */}
                                {/* <TicketModal/> */}
                                <Icon as={MdDelete} color={'red'} fontSize={'25px'} onClick={onDelete} cursor={'pointer'} />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex align={'end'} justify={'space-between'} fontSize={'28px'}>
                        <Text>{price}</Text>
                        <Text>{stock}{stock ? ' pcs' : ''}</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex w={'25px'} h={'50px'} border={'1px'} position={'absolute'} borderRadius={'0 50px 50px 0'} borderLeftColor={'white'} m={'auto 0'} top={'0'} bottom={'0'} />
            <Flex h={'100%'} w={'50px'} position={'absolute'} flexDirection={'column'} justify={'space-between'} ml={'20%'} transform={'auto'} translateX={'-50%'} >
                <Flex w={'50px'} h={'25px'} border={'1px'} borderRadius={'0 0 50px 50px'} borderTopColor={'white'} bg={'white'} />
                <Flex w={'50px'} h={'25px'} border={'1px'} borderRadius={'50px 50px 0 0'} borderBottomColor={'white'} bg={'white'} />
            </Flex>
        </Flex>
    </>
};

export default Ticket;