import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { primary, primaryBgColor, secondaryBgColor } from "../../../assets/color";
import {ImTicket} from "react-icons/im"
import {CgProfile} from "react-icons/cg"
import { useNavigate } from "react-router-dom";
import { MdEvent, MdDiscount } from "react-icons/md";

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
          <Image src="logowhite.svg" width={"160px"} height={"65px"} marginBottom={"10px"}/>
        </Box>
        <Box onClick={() => navigate("/dashProfile")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"} cursor={"pointer"} color={"grey"} marginTop={"12px"} >
            <Icon fontSize={"20px"} marginLeft={"20px"}><CgProfile/></Icon>
            <Text marginLeft={"10px"}>Informasi Dasar</Text>
        </Box>
        <Box onClick={() => navigate("/my-event")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"}  cursor={"pointer"} color={"grey"}>
            <Icon fontSize={"20px"} marginLeft={"20px"}><MdEvent /></Icon>
            <Text marginLeft={"10px"}>My Event</Text>
        </Box>
        <Box onClick={() => navigate("/my-promo")} _hover={{color:"white", marginLeft:"10px", transition:"all 0.5s ease"}} display={"flex"} height={"40px"} width={"100%"} alignItems={"center"} justifyContent={"flex-start"}  cursor={"pointer"} color={"grey"}>
            <Icon fontSize={"20px"} marginLeft={"20px"}><MdDiscount /></Icon>
            <Text marginLeft={"10px"}>My Promo</Text>
        </Box>
      </Box>
    </>
  );
};

export default SideNav;
