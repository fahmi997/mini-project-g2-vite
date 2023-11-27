import { Box, Button, Icon, Img, Input, InputGroup, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import {FiChevronRight} from "react-icons/fi"
import {BsDot} from "react-icons/bs"
import {IoCalendar, IoTicket} from "react-icons/io5"
import {AiFillClockCircle} from "react-icons/ai"
import {FaLocationDot} from "react-icons/fa6"
import {BiLogoFacebook} from "react-icons/bi"
import {FaWhatsapp} from "react-icons/fa"
import {GiShare} from "react-icons/gi"
import "./index.css"
import Label from "./Label"
import TiketActiveSold from "./tiketSold"
import TiketActive from "./tiketActive"
import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { update_inventories } from "../../../redux/slice/checkoutSlice"
import NavbarLogIn from "../../NavbarLogIn"
import { useNavigate } from "react-router"
import { HiSelector } from "react-icons/hi"
import FooterBottom from "../../FooterBottom"
import FooterMain from "../../FooterMain"

const BoxCheckout = () =>{
    const dataAccount = useSelector((state) => {
        return state.accountSlice;
      });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialTime = 900; // 15 menit dalam detik
    const [time, setTime] = React.useState(initialTime);
    const [isActive, setIsActive] = React.useState(true);
  
    useEffect(() => {
      let interval;
  
      if (isActive) {
        interval = setInterval(() => {
          setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, []);

  
    useEffect(() => {
        console.log(time);
      if (time === 0) {
        setIsActive(false);
        navigate("/checkoutTiketActive")
      }
    }, [time]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${(minutes < 10 ? '0' : '') + minutes}:${(remainingSeconds < 10 ? '0' : '') + remainingSeconds}`;
    };


    const [inTiket, setInTiket] = React.useState([
        {
            id: 1,
            nama: "VIP Denny Caknan @ Pintulangit (Berdiri)",
            waktu: "03:00 WIB",
            harga: "Rp. 100.000",
            status: "ACTIVE",
        },
        {
            id: 2,
            nama: "DUDUK GANN",
            waktu: "19:00 WIB",
            harga: "Rp. 75.000",
            status: "SOLD OUT",
        },
        {
            id: 3,
            nama: "Festival Denny Caknan @ Pintulangit",
            waktu: "03:00 WIB",
            harga: "Rp. 50.000",
            status: "ACTIVE",
        },
        {
            id: 4,
            nama: "Tiket anak-anak (1-10 tahun) ALL CATEGORY",
            waktu: "03:00 WIB",
            harga: "Rp. 25.000",
            status: "ACTIVE",
        },
    ])
    dispatch(update_inventories([
        {
            id: 1,
            nama: "VIP Denny Caknan @ Pintulangit (Berdiri)",
            waktu: "03:00 WIB",
            harga: "Rp. 100.000",
            status: "ACTIVE",
        },
        {
            id: 2,
            nama: "DUDUK GANN",
            waktu: "19:00 WIB",
            harga: "Rp. 75.000",
            status: "SOLD OUT",
        },
        {
            id: 3,
            nama: "Festival Denny Caknan @ Pintulangit",
            waktu: "03:00 WIB",
            harga: "Rp. 50.000",
            status: "ACTIVE",
        },
        {
            id: 4,
            nama: "Tiket anak-anak (1-10 tahun) ALL CATEGORY",
            waktu: "03:00 WIB",
            harga: "Rp. 25.000",
            status: "ACTIVE",
        },
    ]))
    
    console.log("INI DATA ACCOUNT BOX CHECKOUT", dataAccount);

    return <>
        <NavbarLogIn/>
        <Box display={"flex"} width={"100%"} backgroundColor={"red"} height={"auto"} alignItems={"center"} justifyContent={"center"} >
            <Box width={"83%"} height={"85%"} marginBottom={"10px"}>
                <Box display={"flex"} justifyContent={"flex-start"} flexDirection={"column"} height={"25px"} fontSize={"14px"} gap={"15px"}>
                    <Text fontSize={"20px"} color={"rgb(21, 41, 85)"} fontWeight={"700"} marginTop={"20px"}>Detail Pemesanan</Text>
                </Box>
                <Box display={"flex"} height={"1000px"} width={"100%"} marginTop={"40px"} backgroundColor={"yellow"} justifyContent={"space-between"}>
                    <Box display={"flex"} width={"63%"} flexDirection={"column"}>
                        <Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"} height={"260px"} borderRadius={"10px"} border={"1px solid grey"} backgroundColor={"blue"}>
                            <Box display={"flex"} width={"95%"} height={"90%"} backgroundColor={"orange"} flexDirection={"column"}>
                                <Box display={"flex"} height={"50%"} alignItems={"center"} justifyContent={"space-between"} backgroundColor={"green"} width={"100%"}>
                                    <Box display={"flex"} backgroundImage={"contoh.jpg"} backgroundSize={"cover"} borderRadius={"10px"} width={"39%"} height={"100%"}/>
                                    <Box display={"flex"} flexDirection={"column"} backgroundColor={"red"} width={"58%"} height={"100%"}>
                                        <Text display={"flex"} className="judul" width={"100%"} fontSize={"16px"} fontWeight={"600"} height={"45px"}>Denny Caknan @ Ngopibareng Pintulangit </Text>
                                        <Box display={"flex"} width={"100%"} flexDirection={"column"} backgroundColor={"aqua"} height={"auto"} gap={"5px"}>
                                            <Box display={"flex"} height={"20px"} width={"90%"}>
                                                <Icon height={"6"}><IoCalendar color="grey" size={"sm"}/></Icon>
                                                <Text fontSize={"15px"} cursor={"default"}>23 Aug 2023</Text>
                                            </Box>
                                            <Box display={"flex"} height={"20px"} width={"90%"}>
                                                <Icon height={"6"}><AiFillClockCircle color="grey" size={"sm"}/></Icon>
                                                <Text fontSize={"15px"} cursor={"default"}>19:00 - 22:00 WIB</Text>
                                            </Box>
                                            <Box display={"flex"} height={"20px"} width={"100%"}>
                                                <Icon height={"6"}><FaLocationDot color="grey" size={"sm"}/></Icon>
                                                <Text fontSize={"15px"} cursor={"default"}>Ngopibareng Pintulangit, Jawa Timur</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display={"flex"} height={"20%"} width={"100%"} backgroundColor={"yellowgreen"} borderTop={"1px solid grey"} borderBottom={"1px solid grey"} marginTop={"10px"} alignItems={"center"} justifyContent={"space-between"} fontWeight={"600"} fontSize={"16px"}>
                                    <Box display={"flex"} width={"85%"} justifyContent={"space-between"}>
                                        <Text>Jenis Tiket</Text>
                                        <Text>Harga</Text>
                                    </Box>
                                        <Text>Jumlah</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} width={"100%"} justifyContent={"flex-start"} flexDirection={"column"} height={"70px"} fontSize={"14px"} gap={"15px"}>
                            <Text fontSize={"20px"} color={"rgb(21, 41, 85)"} fontWeight={"700"} marginTop={"20px"}>Detail Pemesan</Text>
                        </Box>
                        
                        <Box display={"flex"} width={"100%"} height={"auto"} border={"1px solid grey"} borderRadius={"10px"} backgroundColor={"blue"} justifyContent={"center"}>
                            <Box width={"90%"} height={"auto"} display={"grid"}>
                                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Email</Text>
                                <Input isReadOnly cursor={"default"} marginTop={"5px"} focusBorderColor="rgb(226, 232, 240)" variant='outline' placeholder={`${dataAccount.email}`} />
                                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>No. Ponsel</Text>
                                <InputGroup marginTop={"5px"} className="tulisan">
                                    <Select width={"15%"} variant='outline' placeholder='+62' focusBorderColor="rgb(226, 232, 240)" icon={<HiSelector size={"10px"}/>} />
                                    <Input isReadOnly cursor={"default"} marginLeft={"15px"} focusBorderColor="rgb(226, 232, 240)" variant='outline' type="number" value={`${dataAccount.phone}`}/>
                                </InputGroup>
                                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Nama Lengkap</Text>
                                <Input isReadOnly cursor={"default"} className="tulisan" focusBorderColor="rgb(226, 232, 240)" variant='outline' value={dataAccount.name} type="text" />
                                <Text height={"20px"} className="judulProfile" marginTop={"35px"}>Alamat</Text>
                                <Input isReadOnly cursor={"default"} className="tulisan" focusBorderColor="rgb(226, 232, 240)" variant='outline' value={dataAccount.address} type="text" />
                                <Box style={{height:"50px"}}/>
                            </Box>
                        </Box>
                    </Box>

                    <Box width={"33%"} backgroundColor={"green"} height={"105%"} top={"-50px"} position={"relative"}>
                    <Box className="stickyy" width={"100%"} height={"auto"}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} borderRadius={"5px"} backgroundColor={"rgb(255, 204, 0)"} width={"100%"} height={"50px"}>
                            <Box display={"flex"} marginLeft={"20px"} alignItems={"center"} justifyContent={"space-between"} width={"75%"} height={"auto"} >
                                <Text fontWeight={"500"}>{formatTime(time)}</Text>
                                <Text borderLeft={"1px solid grey"} padding={"0px 10px"}>Segera selesaikan pesananmu</Text>
                            </Box>
                        </Box>
                        <Box className="boxShadow" display={"flex"} backgroundColor={"aqua"} flexDirection={"column"} width={"100%"} height={"auto"} alignItems={"center"} borderRadius={"8px"} marginTop={"40px"}>
                            <Box width={"86%"} marginTop={"15px"} height={"auto"} paddingBottom={"5%"}>
                                <Box display={"flex"} padding={"10px"} borderBottom={"1px solid rgb(219, 223, 231)"} justifyContent={"space-between"} color={"grey"} width={"100%"} height={"40%"} fontSize={"15px"}>
                                    <Icon color={"rgb(102, 206, 230)"} height={"50px"} width={"55px"}><IoTicket size={"20"}/></Icon>
                                    <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                                        <Text fontSize={"15px"} height={"45px"} width={"100%"}>VIP Denny Caknan @ Pintulangit (Berdiri) </Text>
                                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                            <Text color={"rgb(155, 158, 166)"} fontSize={"13px"} fontWeight={"500"}>1 Tiket</Text>
                                            <Text color={"black"} fontSize={"16px"} fontWeight={"700"}>Rp. 25.000</Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="judul" display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} bottom={"0px"} marginTop={"30px"} height={"30px"} fontSize={"17px"}>
                                    <Text color={"grey"}>Total 1 tiket</Text>
                                    <Text fontWeight={"bold"}>Rp 25.000</Text>
                                </Box>
                                <Button _hover={{backgroundColor:"blue"}} fontWeight={"400"} className="button"color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"40px"} borderRadius={"10px"} backgroundColor={"blue"}>Bayar Tiket</Button>
                            </Box>
                        </Box>
                        {/* <Text marginTop={"20px"} fontSize={"16px"} color={"grey"}>Bagikan Event</Text>
                        <Box display={"flex"} marginTop={"5px"} gap={"10px"} >
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2"} borderRadius={"100px"}><BiLogoFacebook size={"sm"}/></Icon>
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2.5"} borderRadius={"100px"}><FaWhatsapp size={"sm"}/></Icon>
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2.5"} borderRadius={"100px"}><GiShare size={"sm"}/></Icon>
                        </Box> */}
                    </Box>
                    
                </Box>
                    
                </Box>
                
            </Box>
        </Box>
        <FooterMain/>
        <FooterBottom/>
    </>
}

export default BoxCheckout 