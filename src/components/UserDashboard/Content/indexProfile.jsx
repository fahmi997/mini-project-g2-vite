import { Box, Icon, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import Posisi from "./posisi"
import "./index.css"
import {FaPen} from "react-icons/fa"


const ContentDashProfile = () =>{
    return(
        <>
       <Posisi berada={"Informasi Dasar"}/>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Tabs width={"92%"} height={"40px"}>
            <TabList>
            <Tab
            _selected={{
                borderBottom:"2px solid rgb(226, 232, 240)"
            }}
              height={"50px"}
              color={"rgb(89, 89, 99)"}
              fontWeight={"600"}
              fontSize={"19px"}
              padding={"0px 4%"}
              bgColor={"white"}
              
            >
              Informasi Dasar
            </Tab>
            </TabList>
            <div style={{ display:"flex", width:"100%", height:"auto", marginTop:"15px", justifyContent:"center"}}>
              <Box display={"flex"} width={"88%"} height={"auto"} backgroundColor={"blue"} justifyContent={"center"}>
                <Box width={"90%"} height={"auto"} backgroundColor={"white"} display={"grid"}>
                  <Text height={"20px"} className="judulProfile">Gambar Profil</Text>
                  <Text height={"20px"} className="tulisan">Avatar dan foto sampul adalah gambar pertama yang akan dilihat di akun profilmu.</Text>
                  <Box display={"flex"} backgroundColor={"red"} height={"120px"}>
                    <Box width={"20%"} backgroundColor={"green"}><Box className="editPhotoProfile" backgroundColor={"red"} border={"1px solid grey"} backgroundImage={"contoh.jpg"} backgroundSize={"cover"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"120px"} width={"120px"} borderRadius={"100px"}><Icon><FaPen style={{color:"rgb(138, 169, 195)"}} size={"25px"}/></Icon></Box></Box>
                    <Box>

                    </Box>
                  </Box>
                </Box>
              </Box>
            </div>
        </Tabs>
       </div>
        </>
    )
}

export default ContentDashProfile