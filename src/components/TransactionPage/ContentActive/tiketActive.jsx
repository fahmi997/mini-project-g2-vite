import { Box, Icon, TabPanel, Text } from "@chakra-ui/react";
import {AiFillClockCircle, AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import "./index.css"
import React from "react";

const TiketActive = (props) => {
    const [tambah, setTambah] = React.useState(0)

    const plus = () =>{
        if(tambah === 5){
            setTambah(tambah + 0)
            alert("BANG UDAH BANG")
        }else{
            setTambah(tambah + 1)
        }
    }

    const minus = () =>{
        if(tambah === 0){
            setTambah(tambah - 0)
        }else{
            setTambah(tambah - 1)
        }
    }
  return (
    <>
        <TabPanel className="boxShadow" backgroundColor={"rgb(245, 247, 250)"} position={"relative"} border={"1px solid rgb(0, 73, 204)"} marginBottom={"-35px"} borderRadius={"8px"} height={"190px"}>
          <Box display={"flex"} width={"100%"} justifyContent={"center"}>
            <Box height={"155px"} width={"95%"}>
              <Box height={"60%"}>
                <Text
                  className="judul"
                  fontSize={"17px"}
                  height={"40px"}
                >
                    {props.judulKeterangan}
                </Text>
                <Box
                  marginTop={"15px"}
                  gap={"5px"}
                  display={"flex"}
                  color={"blue"}
                >
                  <Icon marginTop={"4px"}>
                    <AiFillClockCircle size={"sm"} />
                  </Icon>
                  <Text>Berakhir 23 August 2023</Text>
                  <Icon marginTop={"4px"}>
                    <BsDot size={"xl"} />
                  </Icon>
                  <Text>{props.waktu}</Text>
                </Box>
              </Box>
              <Box
                height={"40%"}
                justifyContent={"space-between"}
                borderTop={"1px dashed rgb(0, 73, 204)"}
                alignItems={"flex-end"}
                display={"flex"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={"18px"}
                  marginBottom={"10px"}
                >
                    {props.harga}
                </Text>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"80px"}
                  height={"30px"}
                  marginBottom={"10px"}
                  
                >
                    <Icon onClick={minus} cursor={"pointer"} borderRadius={"100px"} border={"2px solid rgb(0, 73, 204)"} width={"20px"} height={"20px"} padding={"3px"}><AiOutlineMinus size={"sm"}/></Icon>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"40px"}>{tambah}</Box>
                    <Icon onClick={plus} cursor={"pointer"} borderRadius={"100px"} border={"2px solid rgb(0, 73, 204)"} width={"20px"} height={"20px"} padding={"3px"}><AiOutlinePlus size={"sm"}/></Icon>
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel
          height={"30px"}
          width={"0px"}
          position={"relative"}
          borderRightRadius={"60px"}
          left={"0px"}
          top={"-62px"}
          backgroundColor={"rgb(245, 247, 250)"}
          borderRight={"1px solid rgb(0, 73, 204)"}
          borderTop={"1px solid rgb(0, 73, 204)"}
          borderBottom={"1px solid rgb(0, 73, 204)"}
        />
        <TabPanel
          height={"30px"}
          width={"0px"}
          position={"relative"}
          marginLeft={"95.4%"}
          borderLeftRadius={"60px"}
          right={"0px"}
          top={"-95px"}
          backgroundColor={"rgb(245, 247, 250)"}
          borderLeft={"1px solid rgb(0, 73, 204)"}
          borderTop={"1px solid rgb(0, 73, 204)"}
          borderBottom={"1px solid rgb(0, 73, 204)"}
        />
    
    </>
  );
};

export default TiketActive