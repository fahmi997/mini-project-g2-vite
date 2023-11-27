import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { primary, primaryBgColor, secondaryBgColor } from "../../../assets/color";
import { FaCompass } from "react-icons/fa";
import {ImTicket} from "react-icons/im"
import {CgProfile} from "react-icons/cg"
import { useNavigate } from "react-router-dom";
import React from "react";

const SideNav = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box
        display={"flex"}
        position={"fixed"}
        flexDirection={"column"}
        // top={"20px"}
        width={"20vw"}
        height={"100%"}
        justifyContent={"flex-start"}
        backgroundColor={secondaryBgColor}
      >
        <Box cursor={"pointer"} backgroundColor={primaryBgColor} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"60px"} width={"100%"}>
          <Image src="logowhite1.svg" width={"100%"} height={"50px"} marginBottom={"10px"}/>
        </Box>
        <Box onClick={() => navigate("/")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"} cursor={"pointer"} color={"grey"} marginTop={"12px"} >
            <Icon fontSize={"20px"} marginLeft={"20px"}><FaCompass/></Icon>
            <Text marginLeft={"10px"}>Jelajah Event</Text>
        </Box>
        <Box onClick={() => navigate("/dashProfile")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"} cursor={"pointer"} color={"grey"} >
            <Icon fontSize={"20px"} marginLeft={"20px"}><CgProfile/></Icon>
            <Text marginLeft={"10px"}>Informasi Dasar</Text>
        </Box>
        <Box onClick={() => navigate("/dashTiket")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"}  cursor={"pointer"} color={"grey"}>
            <Icon fontSize={"20px"} marginLeft={"20px"}><ImTicket/></Icon>
            <Text marginLeft={"10px"}>Tiket saya</Text>
        </Box>
      </Box>
    </>
  );
};

export default SideNav;
