import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { LuCalendarClock } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const NavbarDash = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dataAccount = useSelector((state) => {
    return state.accountSlice;
  });
  const [defaultProfile, setDefaultProfile] = React.useState();
  const [inMenu, setInMenu] = React.useState(false);
  const checkLocal = localStorage.getItem("token")
console.log("INI LOG NAVBAR DASH", dataAccount.email);

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

useEffect(() => {
  if(window.location.pathname != ("/login" && "/signup" && "/" && `/event/${props.id}`) ||  !dataAccount || !checkLocal ){
    alert("Otorisasi gagal. Login lagi")
    navigate("/login")
  }
}, [checkLocal, location])

const onLogout = async () => {
  await navigate("/login")
  localStorage.removeItem('token')
  alert("Succes logout")
};

useEffect(() => {
  setDefaultProfile(`${import.meta.env.VITE_API_URL}/assets/profile/${dataAccount.avatar}`)
}, [dataAccount])


  return (
    <div style={{width:"79.8%", flexDirection:"column", position:"absolute", right:"0px"}}>
      <Box
        width={"100%"}
        height={"80px"}
        display={"flex"}
        justifyContent={"center"}
        // backgroundColor={"green"}
        gridTemplateColumns={"auto"}
        borderBottom={"2px solid rgb(225, 225, 225)"}
      >
        <Box
          height={"80px"}
          position={"relative"}
          display={"flex"}
          width={"92%"}
          color={"rgb(89, 89, 94)"}
          fontSize={"23px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          // backgroundColor={"red"}
        >
          <Box fontWeight={"500"}>{props.halaman}</Box>
          <Box
            display={"flex"}
            // backgroundColor={"aqua"}
            width={"330px"}
            marginRight={"18px"}
            justifyContent={"space-between"}
          >
            <Box
              cursor={"not-allowed"}
              display={"flex"}
              backgroundColor={"rgb(173, 182, 201)"}
              color={"white"}
              width={"145px"}
              borderRadius={"8px"}
              height={"40px"}
              fontWeight={"650"}
              fontSize={"16px"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Box paddingLeft={"5px"}>
                <LuCalendarClock />
              </Box>
              <Box paddingRight={"5px"}>Buat Event</Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              fontSize={"16px"}
              justifyContent={"flex-end"}
              width={"60%"}
              height={"40px"}
              // backgroundColor={"red"}
              color={"white"}
            >
              <Box
                display={"flex"}
                cursor={"pointer"}
                backgroundColor={"rgb(245, 247, 250)"}
                onMouseEnter={onHover}
                onMouseLeave={offHover}
                onClick={() => setInMenu(!inMenu)}
                color={"black"}
                fontSize={"15px"}
                alignItems={"center"}
                height={"35px"}
                borderRadius={"100px"}
                justifyContent={"space-around"}
                width={"90%"}
              > 
                <Box display={inMenu? "flex" : "none"} onMouseEnter={onHover} onMouseLeave={offHover} flexDirection={"column"} alignItems={"center"} top={"65px"} cursor={"default"} borderRadius={"10px"} marginRight={"100px"} height={"auto"} zIndex={"10"} width={"270px"} backgroundColor={"white"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} position={"absolute"}>
                  <Text display={"flex"} justifyContent={"center"} fontSize={"16px"} fontWeight={"700"} height={"auto"} width={"100%"} marginTop={"10px"}>Menu</Text>
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
                  <Box onClick={() => navigate('/dashTiket')} cursor={"pointer"} borderRadius={"5px"} padding={"20px"} display={"flex"} alignItems={"center"} color={"grey"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(67, 67, 71)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text fontWeight={"500"} width={"auto"}>Tiket Saya</Text>
                    <Icon><MdOutlineKeyboardArrowRight size={"26px"}/></Icon>
                  </Box>
                  <Box onClick={onLogout} cursor={"pointer"} display={"flex"} borderRadius={"5px"} padding={"20px"} alignItems={"center"} color={"rgb(252, 60, 60)"} justifyContent={"space-between"} width={"85%"} height={"30px"} marginBottom={"20px"} marginTop={"10px"} fontWeight={"500"} _hover={{color:"rgb(255, 0, 0)", marginLeft:"8px", transition:"all 0.3s ease", backgroundColor:"rgb(238, 238, 238)"}}>
                    <Text fontWeight={"500"} width={"auto"}>Keluar</Text>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  backgroundSize={"cover"}
                  height={"30px"}
                  width={"30px"}
                  borderRadius={"100px"}
                  backgroundImage={defaultProfile}
                />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"76%"}
                  marginRight={"0px"}
                  // backgroundColor={"red"}
                >
                  <Box fontWeight={"700"} color={"rgb(132, 129, 129)"}>{dataAccount.name && dataAccount.name.length > 14? `${dataAccount.name.slice(0,14)}...` : dataAccount.name}</Box>
                  <Box
                    display={"flex"}
                    width={"15px"}
                    justifyContent={"center"}
                    // backgroundColor={"blue"}
                    alignItems={"center"}
                  >
                    <GoChevronDown size={"18"} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {props.children}
    </div>
    
  );
};

export default NavbarDash;
