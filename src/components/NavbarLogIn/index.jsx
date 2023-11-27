import { Box, Button, Icon, Image, Input, InputGroup, InputRightAddon, Stack, Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { primary, primaryBgColor } from "../../assets/color";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";

const NavbarLogIn = () => {
    const navigate = useNavigate()
    const dataAccount = useSelector((state) => {
        return state.accountSlice;
      });
    const [defaultProfile, setDefaultProfile] = React.useState();
    const [inMenu, setInMenu] = React.useState(false);

    console.log("INI DATA ACCOUNT NAVBAR LOGIN",dataAccount.role);

    let waktu
    const onHover = () => {
      setInMenu(true)
      clearTimeout(waktu)
    }
    const offHover = () => {
      waktu = setTimeout(() => {
        setInMenu(false);
      }, 1200);
    }

    const onLogout = async () => {
        await navigate("/login")
        localStorage.removeItem('token')
        alert("Succes logout")
      };


    useEffect(() => {
        setDefaultProfile(`${import.meta.env.VITE_API_URL}/assets/profile/${dataAccount.avatar}`)
    }, [dataAccount])

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
                    w={'110px'}
                    color={dataAccount.role === "eo" ? primary : "white"}
                    border={'1px'} borderColor={dataAccount.role === "eo" ? primary : "grey"}
                    bg={dataAccount.role === "eo" ? 'none' : "grey"}
                    _hover={{}}
                    _active={dataAccount.role === "eo" ? { bg: primary, color: 'black'} : {bg: "grey", color: "white"}}
                    cursor={dataAccount.role === "eo" ? "pointer" : "not-allowed"}
                    onClick={() => navigate(dataAccount.role === "eo" ? '/create-event' : "")}
                >
                    Create Event
                </Button>

                
            <Box height={'40px'} width={'40px'} borderRadius={'full'} alignContent={'center'} mr={'0'} ml={'auto'} cursor={'pointer'} onMouseEnter={onHover} onMouseLeave={offHover} onClick={() => setInMenu(!inMenu)}>
                <Image src={defaultProfile}
                        height={'37px'} width={'37px'} borderRadius={'full'} />
            </Box>
            <Box display={inMenu? "flex" : "none"} onMouseEnter={onHover} onMouseLeave={offHover} flexDirection={"column"} alignItems={"center"} top={"80px"} cursor={"default"} right={"35px"} borderRadius={"10px"} height={"auto"} zIndex={"10"} width={"270px"} backgroundColor={"white"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"absolute"}>
                <Text display={"flex"} justifyContent={"center"} fontSize={"16px"} fontWeight={"700"} color={"black"} height={"auto"} width={"100%"} marginTop={"10px"}>Menu</Text>
                <Box display={"flex"} justifyContent={"center"} width={"100%"} marginTop={"10px"}>
                    <hr style={{width:"85%"}}/>
                </Box>
                <Box onClick={() => navigate('/')} cursor={"pointer"} borderRadius={"5px"} padding={"20px"} display={"flex"} alignItems={"center"} color={"grey"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(67, 67, 71)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text width={"auto"}>Jelajah Event</Text>
                    <Icon><MdOutlineKeyboardArrowRight size={"26px"}/></Icon>
                </Box>
                <Box onClick={() => navigate('/dashProfile')} cursor={"pointer"} borderRadius={"5px"} padding={"20px"} display={"flex"} alignItems={"center"} color={"grey"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(67, 67, 71)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text fontWeight={"500"} width={"auto"}>Informasi Dasar</Text>
                    <Icon><MdOutlineKeyboardArrowRight size={"26px"}/></Icon>
                </Box>
                <Box onClick={() => navigate(dataAccount.role === "eo" ? '/my-event':'/dashTiket')} cursor={"pointer"} borderRadius={"5px"} padding={"20px"} display={"flex"} alignItems={"center"} color={"grey"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(67, 67, 71)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text fontWeight={"500"} width={"auto"}>{dataAccount.role === "eo" ? "Event Saya" : "Tiket Saya"}</Text>
                    <Icon><MdOutlineKeyboardArrowRight size={"26px"}/></Icon>
                </Box>
                <Box onClick={onLogout} cursor={"pointer"} display={"flex"} borderRadius={"5px"} padding={"20px"} alignItems={"center"} color={"rgb(252, 60, 60)"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginBottom={"20px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(255, 0, 0)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text fontWeight={"500"} width={"auto"}>Keluar</Text>
                </Box>
            </Box>

    
            </Stack>
        </Box>
    </>
};

export default NavbarLogIn;