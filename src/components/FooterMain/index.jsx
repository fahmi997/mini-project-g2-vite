import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { primary, primaryBgColor, secondaryBgColor } from "../../assets/color";
import { BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const FooterMain = () => {
    return <>
        <Box h={'350px'} bg={primaryBgColor} pt={'25px'} color={'white'}>
            <Flex h={'300px'} w={'100%'} m={'auto'} justify={'center'}>
                <Box w={'300px'} p={'30px'} h={'100%'} textTransform={'capitalize'}>
                    <Box mb={'25px'} ><Image src="/logowhite.svg" h={'65px'} /></Box>
                    <Box >best app for ticketing management system in indonesia! ticketo. ticketing platform that ease your event.</Box>
                </Box>
                <Flex w={'300px'} p={'30px'} h={'100%'} textTransform={'capitalize'} fontSize={'20px'} as={'b'} align={'center'}>
                    {/* <Text textDecoration={'underline'} lineHeight={'2'}>Our Services</Text> */}
                    <List spacing={'1.5'}>
                        <ListItem>upcoming event</ListItem>
                        <ListItem>spotlight</ListItem>
                        <ListItem>promos</ListItem>
                        <ListItem>pricing</ListItem>
                    </List>
                </Flex>
                <Flex w={'300px'} p={'30px'} h={'100%'} textTransform={'capitalize'} fontSize={'20px'} as={'b'} align={'center'}>
                    {/* <Text textDecoration={'underline'} lineHeight={'2'}>About us</Text> */}
                    <List spacing={'1.5'}>
                        <ListItem>careers</ListItem>
                        <ListItem>contact us</ListItem>
                        <ListItem>privacy policy</ListItem>
                        <ListItem>terms & conditions</ListItem>
                    </List>
                </Flex>
                <Box w={'300px'} p={'30px'} h={'100%'} as={'b'}>
                    <Text lineHeight={'2'} fontSize={'20px'}>Ticketo. Support</Text>
                    <Text fontSize={'15px'}>E-Mail: help@ticketo.id</Text>
                    <Text fontSize={'15px'}>Contact Center: +62 21 1234 1234</Text>
                    <br />
                    <Text lineHeight={'2'} fontSize={'20px'}>Follow Us</Text>
                    <Flex h={'45px'} justify={'space-between'} color={primaryBgColor} fontSize={'26px'} mt={'5px'}>
                        <Box boxSize={'45px'} bg={'white'} rounded={'8px'} display={'grid'} justifyContent={'center'} alignContent={'center'} _hover={{bg:primary}}>
                            <BiLogoYoutube />
                        </Box>
                        <Box boxSize={'45px'} bg={'white'} rounded={'8px'} display={'grid'} justifyContent={'center'} alignContent={'center'} _hover={{bg:primary}}>
                            <BiLogoInstagramAlt />
                        </Box>
                        <Box boxSize={'45px'} bg={'white'} rounded={'8px'} display={'grid'} justifyContent={'center'} alignContent={'center'} _hover={{bg:primary}}>
                            <BiLogoLinkedin />
                        </Box>
                        <Box boxSize={'45px'} bg={'white'} rounded={'8px'} display={'grid'} justifyContent={'center'} alignContent={'center'} _hover={{bg:primary}}>
                            <BiLogoTwitter />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </>
};

export default FooterMain;