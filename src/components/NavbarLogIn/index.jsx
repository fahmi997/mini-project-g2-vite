import { Box, Button, Image, Input, InputGroup, InputRightAddon, Stack, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { primary, primaryBgColor } from "../../assets/color";

const NavbarLogIn = () => {
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

                
            <Box height={'40px'} width={'40px'} borderRadius={'full'} alignContent={'center'} mr={'0'} ml={'auto'}>
                <Image src="https://tse3.mm.bing.net/th?id=OIP.0fRNzG8iXEQE4ZerH-2U-AHaHa&pid=Api&P=0&h=220"
                        height={'37px'} width={'37px'} borderRadius={'full'} />
            </Box>

    
            </Stack>
        </Box>
    </>
};

export default NavbarLogIn;