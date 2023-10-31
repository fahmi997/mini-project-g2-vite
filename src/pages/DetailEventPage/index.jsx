import { Flex, Box, Image, Text, Button, Card, UnorderedList, ListItem } from "@chakra-ui/react";
import FooterBottom from "../../components/FooterBottom";
import FooterMain from "../../components/FooterMain";
import Navbar from "../../components/Navbar";
import { AiOutlineHeart, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { BiSolidShareAlt } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';

const DetailEventPage = () => {
    return(
    <>
        <Navbar/>

        <Flex display={'flex'} flexDirection={'column'} 
        >
            {/* Poster */}
            <Box  mt={'16'} mr={'auto'} ml={'auto'} mb={'16'} bg={'#DCDCDC'} width={'1200px'} borderRadius={'lg'}>
                <Image m={'auto'} width={'940px'} maxWidth={'940px'} height={'470px'} src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231005034459.jpg"/>

            </Box>

            {/* Hari dan Tanggal */}
            <Flex mr={'auto'} ml={'auto'} width={'1200px'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'20px'} >Saturday, November 4</Text>
                <Flex display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'70px'} >
                    <AiOutlineHeart fontSize={'20px'}/>
                   <BiSolidShareAlt fontSize={'20px'}/> 
                </Flex>
            </Flex>

               
            <Flex display={'flex'} flexDirection={'row'} width={'1200px'} ml={'auto'} mr={'auto'} mt={'8'} mb={'16'} justifyContent={'space-between'}>

                <Flex display={'flex'} flexDirection={'column'} width={'700px'} mr={'16'}>
                    <Text fontSize={'40px'} fontWeight={'bold'}>
                        The Legends 9 - Adventures from Disney-Pixar
                    </Text>

                    <Text fontSize={'15px'} mt={'4'}>Do you want to study abroad or participate in a student exchange?</Text>

                    <Card width={'inherit'} border={'1px solid black'} h={'100px'} mt={'6'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >

                        <Flex display={'flex'} flexDirection={'row'} mt={'2'} mr={'4'} ml={'4'} mb={'2'} justifyContent={'space-between'} width={'inherit'} height={'90px'}>
                            <Box display={'flex'} flexDirection={'row'}>
                                <Box height={'62px'} width={'62px'} borderRadius={'full'} border={'1px solid #DCDCDC'} mr={'4'} mt={'2'}>
                                    <Image src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20160811024040.PNG" height={'60px'} width={'60px'} borderRadius={'full'}/>
                                </Box>

                                <Box display={'flex'} mt={'2'} flexDirection={'column'}>
                                    <Text>By Ciputra Artpreneur</Text>
                                    <Text mt={'2'}>1k followers</Text>
                                </Box>

                            </Box>

                            <Button bg={'#202020'} color={'white'} mt={'4'} >Follow</Button>
                            
                        </Flex>

                    </Card>

                    
                    <Flex mt={'8'} flexDirection={'column'} display={'flex'}>
                        <Text fontSize={'25px'} fontWeight={'bold'}>Date and Time</Text>
                        <Flex flexDirection={'row'} width={'inherit'} mt={'2'} display={'inline-flex'}>
                            <MdDateRange fontSize={'26px'}/>
                            <Text fontSize={'15px'} mt={'1'} ml={'2'} fontWeight={'semibold'}>Saturday, November 4</Text>
                        </Flex>
                        <Box>
                            <Text mt={'1'} ml={'8'} fontSize={'15px'}> 11.00 A.M. - 06.00 P.M.</Text>
                        </Box>
                    </Flex>

                    <Flex mt={'8'}  flexDirection={'column'} display={'flex'}>
                        <Text fontSize={'25px'} fontWeight={'bold'}>Location</Text>
                        <Flex flexDirection={'row'} h={'auto'} width={'inherit'} display={'inline-flex'}>
                            <Text mt={'2'}>CIPUTRA ARTPRENEUR, DKI Jakarta</Text>
                            
                        </Flex>

                    </Flex>

                    <Flex mt={'8'} flexDirection={'column'} display={'flex'}>
                        <Text fontSize={'25px'} fontWeight={'bold'}>About This Event</Text>

                            <Text fontSize={'17px'} mt={'6'} fontWeight={'bold'}>Tickets</Text>
                            <UnorderedList ml={'6'} mt={'2'}>
                                <ListItem>The ticket is non-refundable</ListItem>
                                <ListItem>Maximum purchase: 4 tickets/transaction</ListItem>
                                <ListItem>You are required to bring the original ID (KTP, SIM, Passport, KTA, Kartu Pelajar) matching the original purchaser's name on the booking confirmation for verification on the day of the concert.</ListItem>
                                <ListItem>Handing over your ticket is doable at your own risk. The committee is not responsible for any email or e-ticket duplicates. </ListItem>
                            </UnorderedList>

                            <Text fontSize={'17px'} mt={'8'} fontWeight={'bold'}>Seating</Text>
                            <UnorderedList ml={'6'} mt={'2'}>
                                <ListItem>Audiences are only able to choose their preferred category. Seat number allocation will be done by system. Audiences who purchase more than one ticket in one transaction (one booking code) will be seated close or next to each other.</ListItem>
                                <ListItem>Each seat is allocated to one person/child.</ListItem>
                                <ListItem>Children 2 years old and above must purchase their own ticket if they are to be brought to the concert. However, we do not recommend bringing children under 2 years old. </ListItem>
                                <ListItem>Wheelchair users are recommended to purchase a Forky or HeiHei ticket(s) and contact us before 15 October 2023 after purchasing to reserve the seats in the wheelchair accessible area (please refer to the seat map). These tickets are based on availability. </ListItem>
                            </UnorderedList>

                            <Text fontSize={'17px'} mt={'8'} fontWeight={'bold'}>Concert</Text>
                            <UnorderedList ml={'6'} mt={'2'}>
                                <ListItem>Open Gate 30 minutes before the Show Time</ListItem>
                                <ListItem>Concert programmes for Show I, II, III, IV are the same </ListItem>
                                <ListItem>There will be no intermission; please expect 120 mins running time</ListItem>
                                <ListItem>Strictly no food and drinks are allowed inside the theater</ListItem>
                                <ListItem>You may take pictures and videos. Please always credit and tag @trustorchestra & @artpreneur</ListItem>
                                <ListItem>Please ALWAYS be seated and be considerate to other audiences including keeping your voice & hand low. </ListItem>
                                <ListItem>The committee has the right to remove any audiences that disturb the flow of the event and/or audiences around them. </ListItem>
                                <ListItem>Audience are expected to demonstrate respectful behavior to everyone else including to the ushers, venue's staff & other audience</ListItem>
                            </UnorderedList>

                            <Text fontSize={'17px'} mt={'6'} fontWeight={'bold'}>Dresscode</Text>
                            
                                <Text>Disney or Pixar Theme or Smart Casual</Text>
                            
                            <Text fontSize={'17px'} mt={'6'} fontWeight={'bold'}>Ticket Price</Text>
                            <Text>Including Indonesian government tax & Loket.com admin fee. Excluding transaction fee</Text>
                            <UnorderedList ml={'6'} mt={'2'}>
                                <ListItem>Olaf (VIP) - Rp 1.125.000 with exclusive merchandise</ListItem>
                                <ListItem>Dug (DIAMOND)  - Rp 600.000</ListItem>
                                <ListItem>Forky (GOLD) - Rp 400.000</ListItem>
                                <ListItem>HeiHei (SILVER) - Rp 250.000</ListItem>
                            </UnorderedList>



  
                    </Flex>
                        
                </Flex>

                <Box  height={'212px'} width={'360px'} mr={'0'} borderRadius={'lg'} position={'sticky'} top={'2'}  boxShadow={'lg'} >
                    
                        <Box border={'1px solid black'} borderRadius={'lg'} height={'120px'} mt={'4'} mr={'auto'} ml={'auto'} w={'324px'}>
                            <Box mt={'4'} ml={'4'} mr={'4'} h={'50px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Text mt={'2'}>General Admission</Text>
                                <Box display={'flex'} flexDirection={'row'}>
                                    <AiFillMinusSquare fontSize={'40px'} />
                                    <Text ml={'2'} mr={'2'} mt={'1'} fontSize={'20px'}>1</Text>
                                    <AiFillPlusSquare fontSize={'40px'} />
                                </Box>
                                
                            </Box>
                            <Box ml={'4'} mr={'4'} h={'30px'}>
                                <Text>Free</Text>
                            </Box>
                            
                            
                        </Box>
                        <Button w={'324px'} mt={'4'} mr={'4'} ml={'4'} bg={'#202020'} color={'white'}>BUY</Button>
                    
                    

                </Box>
            </Flex>



        </Flex>

        <FooterMain/>
        <FooterBottom/>
        
    </>
)}
export default DetailEventPage;