import { Box, Button, Icon, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
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

const ContentTransactionActive = () =>{
    return <>
        <Box display={"flex"} width={"100%"} backgroundColor={"rgb(251, 251, 251)"} height={"445px"} alignItems={"center"} justifyContent={"center"} >
            <Box width={"83%"} height={"85%"} marginBottom={"10px"}>
                <Box display={"flex"} justifyContent={"flex-start"} height={"25px"} alignItems={"center"} fontSize={"14px"} gap={"15px"}>
                    <a href="" style={{color:"blue"}}>Home</a>
                    <Icon marginTop={"4px"} height={"20px"}><FiChevronRight size={"sm"}/></Icon>
                    <a href="" style={{color:"blue"}}>Konser</a>
                    <Icon marginTop={"0px"} color={"rgb(178, 183, 192)"} height={"20px"}><BsDot size={"30"}/></Icon>
                    <a href="" style={{color:"blue"}}>Musik</a>
                    <Icon marginTop={"4px"} height={"20px"}><FiChevronRight size={"sm"}/></Icon>
                    <Text cursor={"default"}>Denny Caknan @ Ngopibareng Pintulangit</Text>
                </Box>
                <Box height={"88%"} marginTop={"22px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} width={"63%"} height={"100%"} alignItems={"center"} borderRadius={"20px"} justifyContent={"center"}><Img borderRadius={"8px"} src="contoh.jpg"/></Box>
                    <Box className="boxShadow" display={"flex"} flexDirection={"column"} width={"33%"} height={"100%"} alignItems={"center"} borderRadius={"20px"}>
                        <Text className="judul" width={"86%"} marginTop={"25px"} fontSize={"20px"} fontWeight={"500"} height={"64px"}>Denny Caknan @ Ngopibareng Pintulangit</Text>
                        <Box width={"86%"} marginTop={"15px"} height={"24%"}>
                            <Box display={"flex"} height={"23px"} width={"90%"} gap={"10px"}>
                                <Icon height={"6"}><IoCalendar color="blue" size={"sm"}/></Icon>
                                <Text cursor={"default"}>23 Aug 2023</Text>
                            </Box>
                            <Box marginTop={"5px"} display={"flex"} height={"23px"} width={"90%"} gap={"10px"}>
                                <Icon height={"6"}><AiFillClockCircle color="blue" size={"sm"}/></Icon>
                                <Text cursor={"default"}>19:00 - 22:00 WIB</Text>
                            </Box>
                            <Box marginTop={"5px"} display={"flex"} height={"23px"} width={"100%"} gap={"10px"}>
                                <Icon height={"6"}><FaLocationDot color="blue" size={"sm"}/></Icon>
                                <a href="">Ngopibareng Pintulangit, Jawa Timur</a>
                            </Box>
                        </Box>
                        <Box width={"86%"} marginTop={"55px"} height={"20%"} >
                            <Box height={"15px"} width={"100%"} borderTop={"1px dashed rgb(220, 224, 232)"}/>
                            <Box display={"flex"} gap={"15px"}>
                                <Box ><Img backgroundSize={"cover"} height={"50px"} borderRadius={"100px"} width={"50px"} src="contohFounder.jpg"/></Box>
                                <Box>
                                    <Text display={"flex"} alignItems={"center"} height={"50%"} fontSize={"14px"} color={"grey"} fontWeight={"600"}>Diselenggarakan oleh</Text>
                                    <a style={{display:"flex", alignItems:"center", height:"50%", fontSize:"16px", fontWeight:"500"}} href="">Pintu Langit</a>
                                </Box>
                            </Box>
                       </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box display={"flex"} backgroundColor={"rgb(251, 251, 251)"} width={"100%"} height={"2000px"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"space-between"} backgroundColor={"rgb(251, 251, 251)"} width={"83%"} height={"80%"} marginTop={"20px"}>
                <Tabs justifyContent={"center"} width={"63%"} height={"50px"}>
                    
                    <TabList display={"flex"} justifyContent={"center"} width={"100%"}>
                        <Tab _selected={{color:"black", borderBottom:"4px solid blue", bg:"white"}} color={"rgb(167, 167, 167)"} padding={"15px"} fontSize={"14px"} fontWeight={"500"} display={"flex"} width={"50%"}>DESKRIPSI</Tab>
                        <Tab _selected={{color:"black", borderBottom:"4px solid blue", bg:"white"}} color={"rgb(167, 167, 167)"} padding={"15px"} fontSize={"14px"} fontWeight={"500"} display={"flex"} alignItems={"center"} width={"50%"}>TIKET</Tab>
                    </TabList>
                
                    <TabPanels>
                        <Box display={"flex"} flexDirection={"column"} marginTop={"40px"} backgroundColor={"rgb(251, 251, 251)"} height={"auto"}>
                        <TabPanel gap={"10px"}>
                            <Text height={"auto"}><strong>Ngopibareng Pintulangit</strong> mempersembahkan konser musik kemerdekaan 'Denny Caknan' di Prigen, Pasuruan.</Text>
                            <br />
                            <Text height={"auto"}><strong>Hari/tanggal : Rabu,</strong> 23 Agustus 2023</Text>
                            <br />
                            <Text height={"auto"}><strong>Jam</strong> : 19.00 - selesai</Text>
                            <br />
                            <Text height={"auto"}><strong>TIKET ANAK-ANAK (1-10 TAHUN) </strong>: Dikenakan biaya Rp 25.000/tiket di semua kategori</Text>
                            <br />
                            <Img src="contohDeskripsi.jpg"/>
                            <br/>
                            <Box height={"auto"} display={"flex"} justifyContent={"flex-start"} gap={"8px"}><Box width={"4px"} borderRadius={"100px"} backgroundColor={"blue"} height={"auto"}/><Text fontWeight={"600"}>Syarat & Ketentuan</Text></Box>
                            <br/>
                            <Text height={"auto"}>1. Harap <strong>PRINT</strong> tiket.</Text>
                            <br/>
                            <Text height={"auto"}>2. Dilarang membawa kamera profesional, makanan dan minuman dari luar.</Text>
                            <br/>
                            <Text height={"auto"}>3. Tiket tidak dapat di <strong className="textCreation">refund</strong> ataupun tukar tambah.</Text>
                            <br/>
                            <Text height={"auto"}>4. Untuk masalah yang ditemukan saat proses pembelian dan pembayaran tiket dapat langsung menghubungi pihak loket.com.</Text>
                            <br/>
                            <Text height={"auto"}>5. Follow Instagram @ngopibarengpintulangit untuk info konser terbaru.</Text>
                            <br/>
                            <Text height={"auto"}>6. Jika kapasitas parkir Ngopibareng Pintulangit telah mencapai batas maksimum, maka akan dilayani oleh warga sekitar yang bekerja sama dengan petugas parkir Ngopibareng Pintulangit.
                                - Mobil 20.000<br/>
                                - Motor 5.000</Text>
                            <br/>
                            <Box height={"auto"} display={"flex"} justifyContent={"flex-start"} gap={"8px"}><Box width={"4px"} borderRadius={"100px"} backgroundColor={"blue"} height={"auto"}/><Text fontWeight={"600"}>Label</Text></Box>
                            <br/>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} height={"35px"}>
                                <Label judul={"dangdut"}/>
                                <Label judul={"Pasuruan"}/>
                                <Label judul={"ambyar"}/>
                                <Label judul={"dennycaknan"}/>
                                <Label judul={"konser"}/>
                            </Box>
                        </TabPanel>
                        </Box>

                        <Box>
                            <TiketActiveSold judulKeterangan={"VIP Denny Caknan @ Pintulangit (Berdiri)"} waktu={"03:00 WIB"} harga={"Rp 100.000"} status={"SOLD OUT"}/>
                            <TiketActive judulKeterangan={"Festival Denny Caknan @ Pintulangit"} waktu={"03:00 WIB"} harga={"Rp 50.000"}/>
                            <TiketActive judulKeterangan={"Tribun Denny Caknan @ Pintulangit (Duduk)"} waktu={"19:00 WIB"} harga={"Rp 75.000"}/>
                            <TiketActive judulKeterangan={"Tiket anak-anak (1-10 tahun) ALL CATEGORY"} waktu={"15:00 WIB"} harga={"Rp 25.000"}/>
                        </Box>
                    </TabPanels>
                </Tabs>
                <Box width={"33%"} height={"auto"}>
                    <Box className="stickyy" backgroundColor={"rgb(251, 251, 251)"} width={"100%"} height={"auto"}>
                        <Box className="boxShadow" display={"flex"} flexDirection={"column"} width={"100%"} height={"215px"} alignItems={"center"} borderRadius={"8px"}>
                            <Box width={"86%"} marginTop={"20px"} height={"175px"}>
                                <Box display={"flex"} borderBottom={"1px solid rgb(219, 223, 231)"} justifyContent={"space-between"} color={"grey"} width={"100%"} height={"30%"} fontSize={"15px"}>
                                    <Icon color={"rgb(102, 206, 230)"} height={"40px"} width={"40px"}><IoTicket size={"20"}/></Icon>
                                    <Text fontSize={"15px"} height={"45px"} width={"80%"}>Kamu belum memilih tiket. Silakan <br/> pilih lebih dulu di tab menu TIKET.</Text>
                                </Box>
                                <Box className="judul" display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"} bottom={"0px"} marginTop={"30px"} height={"30px"} fontSize={"16px"}>
                                    <Text color={"grey"}>Harga mulai dari</Text>
                                    <Text fontWeight={"bold"}>Rp 25.000</Text>
                                </Box>
                                <Button onClick={""} _hover={{backgroundColor:"blue"}} fontWeight={"400"} className="button"color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"40px"} borderRadius={"10px"} backgroundColor={"blue"}>Beli Tiket</Button>
                            </Box>
                        </Box>
                        <Text marginTop={"20px"} fontSize={"16px"} color={"grey"}>Bagikan Event</Text>
                        <Box display={"flex"} marginTop={"5px"} gap={"10px"} >
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2"} borderRadius={"100px"}><BiLogoFacebook size={"sm"}/></Icon>
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2.5"} borderRadius={"100px"}><FaWhatsapp size={"sm"}/></Icon>
                            <Icon cursor={"pointer"} href="" height={"40px"} width={"40px"} border={"1px solid grey"} padding={"2.5"} borderRadius={"100px"}><GiShare size={"sm"}/></Icon>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default ContentTransactionActive 