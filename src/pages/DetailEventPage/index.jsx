import {
    Flex,
    Box,
    Image,
    Text,
    Button,
    Card,
    UnorderedList,
    ListItem,
  } from "@chakra-ui/react";
  import FooterBottom from "../../components/FooterBottom";
  import FooterMain from "../../components/FooterMain";
  import Navbar from "../../components/Navbar";
  import {
    AiOutlineHeart
  } from "react-icons/ai";
  import { BiSolidShareAlt } from "react-icons/bi";
  import { MdDateRange } from "react-icons/md";
  
  const DetailEv = () => {
    return (
      <>
  
        <Flex
          flexDirection={"column"}
          px={4} // Add horizontal padding for better mobile layout
        >
          <Flex flexDirection={'column'} className="banner dan hari tanggal">
          <Box mt={16} bg={"#DCDCDC"} borderRadius={"lg"}>
            <Image
              m={"auto"}
              maxW={"100%"}
              src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231005034459.jpg"
            />
          </Box>
          
  
          {/* Hari dan Tanggal */}
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            p={4}
          >
            <Text fontWeight={"bold"} fontSize={"20px"}>
              Saturday, November 4
            </Text>
            <Flex width={'50px'} justifyContent={'space-between'} mt={'2'} ml={'4'}>
              <AiOutlineHeart fontSize={"20px"} />
              <BiSolidShareAlt fontSize={"20px"} />
            </Flex>
          </Flex>
          </Flex>
  
          <Flex className="wadah-tulisan-button" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
            
              <Flex
                flexDirection={"column"}
                p={4} // Add padding
                maxWidth={'900px'}
                mb={'8'}
              >
                <Text fontSize={"40px"} fontWeight={"bold"}>
                  The Legends 9 - Adventures from Disney-Pixar
                </Text>
                <Text fontSize={"15px"} mt={4}>
                  Do you want to study abroad or participate in a student exchange?
                </Text>
  
                <Card border={"1px solid black"} mt={6} p={4} maxW={'600px'}>
                  <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Box display={"flex"} flexDirection={"row"}>
                      <Box
                        height={"62px"}
                        width={"62px"}
                        borderRadius={"full"}
                        border={"1px solid #DCDCDC"}
                        mr={4}
                        mt={2}
                      >
                        <Image
                          src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20160811024040.PNG"
                          height={"60px"}
                          width={"60px"}
                          borderRadius={"full"}
                        />
                      </Box>
                      <Box display={"flex"} mt={2} flexDirection={"column"}>
                        <Text>By Ciputra Artpreneur</Text>
                        <Text mt={2}>1k followers</Text>
                      </Box>
                    </Box>
                    <Button bg={"#202020"} color={"white"} mt={4}>
                      Follow
                    </Button>
                  </Flex>
                </Card>
  
                <Flex flexDirection={"column"} mt={4}>
                  <Text fontSize={"25px"} fontWeight={"bold"}>
                    Date and Time
                  </Text>
                  <Flex flexDirection={"row"} alignItems="center" mt={2}>
                    <MdDateRange fontSize={"26px"} />
                    <Text fontSize={"15px"} mt={1} ml={2} fontWeight={"semibold"}>
                      Saturday, November 4
                    </Text>
                  </Flex>
                  <Text mt={1} fontSize={"15px"}>11.00 A.M. - 06.00 P.M.</Text>
                </Flex>
  
                {/* Add more sections as needed and make them responsive */}
  
                {/* Taruh sini */}
                <Text fontSize={'25px'} mt={'8'} fontWeight={'bold'}>About This Event</Text>
  
                <Text fontSize={'17px'} mt={'2'} fontWeight={'bold'}>Tickets</Text>
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
  
            <Box
              p={4}
              top={'4'} 
              boxShadow={"lg"}
              position={'sticky'}
              zIndex={'999'}
              height={'120px'}
              borderRadius={'lg'}
              border={'1px solid black'}
              width={{ base:"100%", sm:"100%", md:"100%", lg:"400px", xl:"400px" }} 
              h={'130px'}
              mt={'2'}
              mb={'4'}
            >
              <Box>
                <Text textAlign={'center'}>Free</Text>
              </Box>
              <Button w={"100%"} mt={4} bg={"#202020"} color={"white"} size={'lg'}>
                BUY
              </Button>
            </Box>
          </Flex>
  
        </Flex>
      </>
    );
  };
  
  export default DetailEv;
  