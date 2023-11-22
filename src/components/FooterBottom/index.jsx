import { Box, Flex, Text } from "@chakra-ui/react";
import { secondaryBgColor } from "../../assets/color";

const FooterBottom = () => {
    return <>
        <Flex h={'60px'} bg={secondaryBgColor} color={'white'} textTransform={'uppercase'}>
            <Flex h={'60px'} w={'60rem'} m={'auto'} align={'center'} justify={'center'}>
                <Text textAlign={'center'}>2023 ticketo - PT Ticket Mandiri Utama. All Right Reserved.</Text>
            </Flex>
        </Flex>
    </>
};

export default FooterBottom;