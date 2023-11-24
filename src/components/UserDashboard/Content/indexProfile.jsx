import { Box, Button, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Radio, RadioGroup, Select, Stack, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import Posisi from "./posisi"
import "./index.css"
import {FaPen} from "react-icons/fa"
import { HiSelector } from "react-icons/hi";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { checkDataAccount } from "../../../redux/slice/accountSlice";


const ContentDashProfile = () =>{
  const dataAccount = useSelector((state) => {
    return state.accountSlice;
  });
  const [inInputNama, setInInputNama] = React.useState("Bree")
  const [inInputTanggal, setInInputTanggal] = React.useState("1990-01-01")
  const [inInputAlamat, setInInputAlamat] = React.useState("Jl.")
  const [inPhone, setInPhone] = React.useState(dataAccount.phone)
  const [inProfile, setInProfile] = React.useState()
  const [inProfileView, setInProfileView] = React.useState(`${dataAccount.avatar}`)
  const dispatch = useDispatch()
  
  console.log("check reducer penting", dataAccount.avatar);
  const onPhoto = () => {
    const file = inProfile;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setInProfileView(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("fileupload", inProfile)

    const result = await axios.patch('http://localhost:2099/account/update',  formData)
  }

  useEffect (() => {
    onPhoto()
  }, [inProfile])

  console.log("INI PROFILE LOH GUYS", inProfile);
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
              <Box display={"flex"} width={"88%"} height={"auto"} justifyContent={"center"}>
                <Box width={"90%"} height={"auto"} display={"grid"}>
                  <Text height={"20px"} className="judulProfile">Gambar Profil</Text>
                  <Text height={"20px"} className="tulisan" marginTop={"5px"}>Avatar dan foto sampul adalah gambar pertama yang akan dilihat di akun profilmu.</Text>
                  <Box display={"flex"} height={"120px"} marginTop={"20px"}>
                    <Box width={"20%"}>
                      <Box display={"flex"} height={"120px"} width={"120px"} borderRadius={"100px"} border={"1px solid grey"} backgroundSize={"cover"} justifyContent={"center"} alignItems={"center"} backgroundImage={inProfileView} cursor={"pointer"}>
                        <label htmlFor="input" style={{ display:"flex", height:"120px", width:"120px", borderRadius:"100px", border:"1px solid grey", backgroundSize:"cover", justifyContent:"center", alignItems:"center", cursor:"pointer"}} >
                          <Icon position={"absolute"} zIndex={"2px"}><FaPen style={{color:"rgb(138, 169, 195)"}} size={"25px"}/></Icon>
                        </label>
                      <Input onChange={e => setInProfile(e.target.files[0])} display={"none"} id="input" type="file"></Input>
                      </Box>
                    </Box>
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
                    <Select width={"15%"} variant='flushed' placeholder='+62' icon={<HiSelector size={"10px"}/>} />
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
                  <Box style={{height:"120px"}}/>
                  {/* <Text height={"200px"} className="judulProfile"></Text> */}
                </Box>
              </Box>
            </div>
        </Tabs>
      </div>
        <Box position={"fixed"} alignItems={"center"} justifyContent={"flex-end"} bottom={"0px"} display={"flex"} width={"80%"} height={"13%"} backgroundColor={"rgb(237, 237, 237)"}>
          <Button colorScheme="blue" marginRight={"5%"} size={"lg"}>Simpan perubahan</Button>
        </Box>
        </>
    )
}

export default ContentDashProfile