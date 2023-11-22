/* eslint-disable react/prop-types */
import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Ticket = ({ type, price, stock, startSale, endSale }) => {
    return <>
        <Flex h={'200px'} w={'80%'} m={'auto'} position={'relative'}>
            <Flex borderLeft={'1px'} borderTop={'1px'} borderBottom={'1px'} w={'20%'} justify={'center'} align={'center'} borderRadius={'8px'}>
                <Flex w={'30%'} h={'70%'}>
                    <Image src="./barcodev.png" h={'100%'} w={'100%'} />
                </Flex>
            </Flex>
            <Flex borderLeft={'2px'} borderTop={'1px'} borderBottom={'1px'} borderRight={'1px'} borderLeftStyle={'dashed'} flex={'1'} borderRadius={'8px'} p={'25px 25px 25px 40px'} flexDirection={'column'}>
                <Flex flex={'1'} flexDirection={'column'} justify={'space-between'}>
                    <Heading>{type}</Heading>
                    <Flex gap={'9'}>
                        <Text>Start: {startSale}</Text>
                        <Text>End: {endSale}</Text>
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