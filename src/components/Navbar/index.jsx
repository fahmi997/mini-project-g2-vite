import { Box, Button, Image, Input, InputGroup, InputRightAddon, Stack, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { primary, primaryBgColor } from "../../assets/color";

const Navbar = () => {
    return <>
        <Box
            h={'100px'}
            w={'100%'}
            bg={primaryBgColor}
            color={'white'}
            p={'0px 40px'}
            display={'grid'}
            gridColumn={'repeat(5, 1fr)'}
            gridTemplateAreas={`"logo search search button button"`}
            alignItems={'center'}
        >
            <Image src="./logowhite.svg" alt="logo" h={'50px'} gridArea={'logo'}/>
            <InputGroup gridArea={'search'} justifyContent={'center'}>
                <Input
                    w={'60%'}
                    bg={'white'}
                    color={'black'}
                    placeholder="Search an event"
                />
                <InputRightAddon color={'black'}><BiSearch /></InputRightAddon>
            </InputGroup>
            <Stack gridArea={'button'} direction={'row'} spacing={'25px'} justify={'center'} >
                <Box w={'7rem'} display={'inline-flex'} alignItems={'center'} gap={'5px'} cursor={'pointer'}>
                    <FiCompass fontSize={'30px'} color={primary} />
                    <Text fontSize={'16px'}> Explore</Text>
                </Box>
                <Button
                    w={'20%'}
                    color={primary}
                    border={'1px'} borderColor={primary}
                    bg={'none'}
                    _hover={{}}
                    _active={{ bg: primary, color: 'black'}}
                >
                    Log In
                </Button>
                <Button
                    w={'20%'}
                    bg={primary}
                    color={'black'}
                    _hover={{}}
                    _active={{ bg: 'black', color: primary, border: '1px', borderColor: primary }}
                >
                    Sign Up
                </Button>
            </Stack>
        </Box>
    </>
};

export default Navbar;