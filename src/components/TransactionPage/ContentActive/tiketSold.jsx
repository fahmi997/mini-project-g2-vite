import { Box, Icon, TabPanel, Text } from "@chakra-ui/react";
import {AiFillClockCircle} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import "./index.css"

const TiketActiveSold = (props) => {
  return (
    <>
        <TabPanel className="boxShadow" backgroundColor={"rgb(245, 247, 250)"} position={"relative"} border={"1px solid rgb(219, 223, 231)"} marginBottom={"-35px"} borderRadius={"8px"} height={"190px"}>
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
                borderTop={"1px dashed rgb(219, 223, 231)"}
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
                <Text
                  fontWeight={"500"}
                  fontSize={"16px"}
                  marginBottom={"10px"}
                  color={"red"}
                >
                    {props.status}
                </Text>
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
          borderRight={"1px solid rgb(219, 223, 231)"}
          borderTop={"1px solid rgb(219, 223, 231)"}
          borderBottom={"1px solid rgb(219, 223, 231)"}
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
          borderLeft={"1px solid rgb(219, 223, 231)"}
          borderTop={"1px solid rgb(219, 223, 231)"}
          borderBottom={"1px solid rgb(219, 223, 231)"}
        />
    
    </>
  );
};

export default TiketActiveSold