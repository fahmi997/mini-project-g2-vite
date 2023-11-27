import { Box, Button, Image, Input, InputGroup, InputRightAddon, Flex, Stack, Text, Popover, PopoverTrigger, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverContent, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { IoMenuOutline } from "react-icons/io5"
import { primary, primaryBgColor } from "../../assets/color";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/react";
import { TbCalendarPlus } from "react-icons/tb";
import { CiLogout, CiLogin  } from "react-icons/ci";

const Navbar = () => {

    const navigate = useNavigate();

    const navigateToExplorePage = () => {
        navigate('/');
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateSignUp = () => {
        navigate('/sign-up');
    };

    return <>
        <Flex
            h={'120px'}
            w={'100%'}
            bg={primaryBgColor}
            color={'white'}
            p={'0px 20px'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Image src="./logowhite.svg" alt="logo" h={'50px'} mb={'3'} />

            <InputGroup justifyContent={'center'} mt={'3'} alignItems={'center'}>
                <Input
                    w={'60%'}
                    bg={'white'}
                    color={'black'}
                    placeholder="Search an event"
                    display={{ base: 'none', md: 'block' }}

                />
                <InputRightAddon color={'black'} display={{ base: 'none', md: 'center' }}>
                    <BiSearch />
                </InputRightAddon>
            </InputGroup>

            <Stack direction={'row'} justify={'flex-end'} mt={'2'}>
                <Box w={'7rem'} display={{ base: "none", md: "inline-flex" }} alignItems={'center'} gap={'5px'} cursor={'pointer'}
                >
                    <TbCalendarPlus fontSize={'25px'} color={primary} />
                    <Text fontSize={'14px'}  > Buat Event</Text>
                </Box>

                <Link to="/explore" onClick={navigateToExplorePage} >
                    <Box w={'7rem'} display={{ base: "none", md: "inline-flex" }} alignItems={'center'} gap={'5px'} cursor={'pointer'} mt={'2'}
                    >
                        <FiCompass fontSize={'25px'} color={primary} />
                        <Text fontSize={'14px'}  > Explore</Text>
                    </Box>
                </Link>


                <Link to="/login" onClick={navigateToLogin} >
                    <Button
                        color={primary}
                        border={'1px'} borderColor={primary}
                        bg={'none'}
                        _hover={{}}
                        _active={{ bg: primary, color: 'black' }}
                        display={{ base: "none", md: "block" }}
                    >
                        Log In
                    </Button>
                </Link>

                <Link to="/sign-up" onClick={navigateSignUp} >
                    <Button
                        bg={primary}
                        color={'black'}
                        _hover={{}}
                        _active={{ bg: 'black', color: primary, border: '1px', borderColor: primary }}
                        display={{ base: "none", md: "block" }}
                    >
                        Sign Up
                    </Button>
                </Link>

                {/* <Avatar size='sm' src='https://bit.ly/tioluwani-kolawole' display={{ base: "block", md: "none" }} onClick={onOpen} mt={'1'} /> */}

                <Box display={{ base: "block", md: "none" }}>
                    <Menu >
                        <MenuButton>
                            <IoMenuOutline size='35px' />
                        </MenuButton>
                        <MenuList>
                            <Link to="/login" onClick={navigateToLogin} >
                                <MenuItem  textColor={'black'} >
                                    Log In
                                </MenuItem>
                            </Link>

                            <Link to="/sign-up" onClick={navigateSignUp} >
                            <MenuItem  textColor={'black'} >
                                Sign Up
                            </MenuItem>
                            </Link>

                        </MenuList>
                    </Menu>
                </Box>
            </Stack>
        </Flex>
    </>
};

export default Navbar;