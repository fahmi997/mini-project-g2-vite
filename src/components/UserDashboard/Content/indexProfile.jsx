import { Box, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Radio, RadioGroup, Select, Stack, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import Posisi from "./posisi"
import "./index.css"
import { FaPen } from "react-icons/fa"
import { HiSelector } from "react-icons/hi";
import React from "react";


const ContentDashProfile = () => {
  const [inInputNama, setInInputNama] = React.useState("Bree")
  const [inInputTanggal, setInInputTanggal] = React.useState("1990-01-01")
  const [inInputAlamat, setInInputAlamat] = React.useState("Jl.")
  const [inPhone, setInPhone] = React.useState(0)

  return (
    <>
      <Posisi berada={"Informasi Dasar"} />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Tabs width={"92%"} height={"40px"}>
          <TabList>
            <Tab
              _selected={{
                borderBottom: "2px solid rgb(226, 232, 240)"
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
          <div style={{ display: "flex", width: "100%", height: "auto", marginTop: "15px", justifyContent: "center" }}>
            <Box display={"flex"} width={"88%"} height={"auto"} justifyContent={"center"}>
              <Box width={"90%"} height={"auto"} display={"grid"}>
                <Text height={"20px"} className="judulProfile">Gambar Profil</Text>
                <Text height={"20px"} className="tulisan" marginTop={"5px"}>Avatar dan foto sampul adalah gambar pertama yang akan dilihat di akun profilmu.</Text>
                <Box display={"flex"} height={"120px"} marginTop={"20px"}>
                  <Box width={"20%"}><Box className="editPhotoProfile" border={"1px solid grey"} backgroundImage={"contoh.jpg"} backgroundSize={"cover"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"120px"} width={"120px"} borderRadius={"100px"}><Icon><FaPen style={{ color: "rgb(138, 169, 195)" }} size={"25px"} /></Icon></Box></Box>
                  <Box display={"flex"} alignItems={"center"} width={"100%"} >
                    <Box width={"auto"} height={"33%"} marginLeft={"20px"}>
                      <Text height={"20px"} className="judulProfile">Avatar</Text>
                      <Text height={"20px"} className="tulisan">Gunakan gambar persegi beresolusi tinggi maksimal 1MB</Text>
                    </Box>
                  </Box>
                </Box>
                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Email</Text>
                <Input isReadOnly cursor={"default"} marginTop={"5px"} focusBorderColor="rgb(226, 232, 240)" variant='flushed' placeholder='www@gmail.com' />
                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>No. Ponsel</Text>
                <InputGroup marginTop={"5px"} className="tulisan">
                  <Select width={"15%"} variant='flushed' placeholder='+62' icon={<HiSelector size={"10px"} />} />
                  <Input marginLeft={"15px"} variant='flushed' type="number" onChange={() => setInPhone()} value={inPhone} />
                </InputGroup>
                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Nama Lengkap</Text>
                <Input className="tulisan" variant='flushed' onChange={() => setInInputNama()} value={inInputNama} type="text" />
                {/* <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Tanggal Lahir</Text>
                  <InputGroup>
                    <Input className="tulisan" variant='flushed' onChange={() => setInInputTanggal()} value={inInputTanggal} type="text"/>
                    <InputRightElement />
                  </InputGroup> */}
                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Alamat</Text>
                <Input className="tulisan" variant='flushed' onChange={() => setInInputAlamat()} value={inInputAlamat} type="text" />
                <Box style={{ height: "100px" }} />
                {/* <Text height={"200px"} className="judulProfile"></Text> */}
              </Box>
            </Box>
          </div>
        </Tabs>
      </div>
      <Box position={"fixed"} alignItems={"center"} bottom={"0px"} display={"flex"} width={"100%"} height={"10%"} backgroundColor={"red"}></Box>
    </>
  )
}

export default ContentDashProfile