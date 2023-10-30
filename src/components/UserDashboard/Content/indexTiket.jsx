import {
  Box,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import {BiDotsVerticalRounded} from "react-icons/bi"
import "./index.css"
import {IoCalendar} from "react-icons/io5"
import {RxDividerVertical} from "react-icons/rx"
import {HiMiniTicket} from "react-icons/hi2"
import Posisi from "./posisi";
import React from "react";

const ContentDashTiket = () => {
  // const [data, setData] = React.useState[{
  //   id:1,
  //   status: "belum dibayar",
  //   namaEvent: "DENNY CAKNAN ROCK LURR" ,
    

  // }]
  return (
    <>
      <Posisi berada={"Tiket Saya"}/>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Tabs width={"92%"} height={"40px"}>
          <TabList>
            <Tab
              height={"60px"}
              _selected={{
                color: "black",
                borderBottom: "4px solid blue",
                bg: "white",
              }}
              fontWeight={"500"}
              fontSize={"17px"}
              padding={"0px 9%"}
              color={"rgb(167, 167, 167)"}
            >
              Event Aktif
            </Tab>
            <Tab
              height={"60px"}
              _selected={{
                color: "black",
                borderBottom: "4px solid blue",
                bg: "white",
              }}
              fontWeight={"500"}
              padding={"0px 9%"}
              color={"rgb(167, 167, 167)"}
            >
              Event Lalu
            </Tab>
          </TabList>
          <TabPanels>
        <div>
            <TabPanel marginTop={"30px"} boxShadow={"rgba(17, 12, 46, 0.15) 2px 1px 100px 0px"} borderRadius={"10px 10px 0px 0px"} borderBottom={"1px solid grey"} height={"60px"} width={"100%"} justifyContent={"center"} display={"flex"}>
              <div style={{ justifyContent:"center", width:"98%", height:"200px"}}>
                <div>
                 <Box width={"100%"} alignItems={"center"} height={"30px"} display={"flex"} justifyContent={"space-between"}>
                    <Box backgroundColor={"rgb(255, 226, 224)"} color={"red"} fontWeight={"400"} height={"100%"} width={"auto"} borderRadius={"5px"} border={"1px solid red"} padding={"12px"} display={"flex"} alignItems={"center"} justifyContent={"center"} fontSize={"12px"}>Pesanan Kadaluarsa</Box>
                    <Box width={"30px"} height={"30px"}  display={"flex"} justifyContent={"center"} alignItems={"center"}><BiDotsVerticalRounded size={"25"} color={"rgb(102, 102, 102)"}/></Box>
                 </Box>
                </div>
                <div style={{display:"flex", height:"135px", justifyContent:"space-between", marginTop:"35px", alignItems:"center"}}>
                <Box justifyContent={"flex-start"} width={"68%"} height={"100%"} >
                    <Text className="tittleEvent" fontSize={"22px"} fontWeight={"500"}>DENNY CAKNAN ROCK LURR</Text>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} gap={"10px"}>
                            <Icon><IoCalendar size={"sm"}/></Icon>
                            <Text>28 Oct - 29 Oct 2023</Text>
                        </Box>
                        <RxDividerVertical color="grey" size={"15px"}/>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"10px"}>
                            <Icon><HiMiniTicket size={"sm"}/></Icon>
                            <Text>3 Tiket</Text>
                        </Box>
                    </Box>
                    <Box>Pembelian pada 10 Oct 2023, 10:38</Box>
                    
                </Box>
                <Box display={"flex"} justifyContent={"center"} width={"32%"} height={"100%"} alignItems={"center"} backgroundSize={"cover"} borderRadius={"10px"} border={"1px solid rgb(238, 239, 244)"}><Image width={"100%"} height={"100%"} borderRadius={"10px"} src="contoh.jpg"/></Box>
                </div>
              </div>
            </TabPanel>
            <TabPanel style={{ height:"180px", borderRadius:"0px 0px 10px 10px", boxShadow:"rgba(17, 12, 46, 0.15) 0px 20px 90px 0px"}}/>
            <TabPanel marginTop={"30px"} boxShadow={"rgba(17, 12, 46, 0.15) 2px 1px 100px 0px"} borderRadius={"10px 10px 0px 0px"} borderBottom={"1px solid grey"} height={"60px"} width={"100%"} justifyContent={"center"} display={"flex"}>
              <div style={{ justifyContent:"center", width:"98%", height:"200px"}}>
                <div>
                 <Box width={"100%"} alignItems={"center"} height={"30px"} display={"flex"} justifyContent={"space-between"}>
                    <Box backgroundColor={"rgb(255, 226, 224)"} color={"red"} fontWeight={"400"} height={"100%"} width={"auto"} borderRadius={"5px"} border={"1px solid red"} padding={"12px"} display={"flex"} alignItems={"center"} justifyContent={"center"} fontSize={"12px"}>Pesanan Kadaluarsa</Box>
                    <Box width={"30px"} height={"30px"}  display={"flex"} justifyContent={"center"} alignItems={"center"}><BiDotsVerticalRounded size={"25"} color={"rgb(102, 102, 102)"}/></Box>
                 </Box>
                </div>
                <div style={{display:"flex", height:"135px", justifyContent:"space-between", marginTop:"35px", alignItems:"center"}}>
                <Box justifyContent={"flex-start"} width={"68%"} height={"100%"} >
                    <Text className="tittleEvent" fontSize={"22px"} fontWeight={"500"}>DENNY CAKNAN ROCK LURR</Text>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} gap={"10px"}>
                            <Icon><IoCalendar size={"sm"}/></Icon>
                            <Text>28 Oct - 29 Oct 2023</Text>
                        </Box>
                        <RxDividerVertical color="grey" size={"15px"}/>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"10px"}>
                            <Icon><HiMiniTicket size={"sm"}/></Icon>
                            <Text>3 Tiket</Text>
                        </Box>
                    </Box>
                    <Box>Pembelian pada 10 Oct 2023, 10:38</Box>
                    
                </Box>
                <Box display={"flex"} justifyContent={"center"} width={"32%"} height={"100%"} alignItems={"center"} backgroundSize={"cover"} borderRadius={"10px"} border={"1px solid rgb(238, 239, 244)"}><Image width={"100%"} height={"100%"} borderRadius={"10px"} src="contoh.jpg"/></Box>
                </div>
              </div>
            </TabPanel>
            <TabPanel style={{ height:"180px", borderRadius:"0px 0px 10px 10px", boxShadow:"rgba(17, 12, 46, 0.15) 0px 20px 90px 0px"}}/>
        </div>
            
            <TabPanel>hi</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default ContentDashTiket;
