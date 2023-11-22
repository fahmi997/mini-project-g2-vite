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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../helper/helper";



const DetailEvent = () => {

  const { id } = useParams();
  const [eventData, setEventData] = useState(null);

  console.log("ID EVENT", id);
  console.log(eventData);

  useEffect(() => {
    axios.get(API_URL + `/events/${id}`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching event data:", error);
      });
  }, [id]);

  console.log("idevent:", id);

  return (
    <>
      {eventData && (
        <Flex
          flexDirection={"column"}
          px={4} // Add horizontal padding for better mobile layout
        >
          <Flex flexDirection={'column'} className="banner dan hari tanggal">
            <Box mt={16} bg={"#DCDCDC"} borderRadius={"lg"}>
              <Image
                m={"auto"}
                maxW={"100%"}
                src={eventData.image}
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
              maxWidth={{base : "100%", lg: '600px'}}
              mb={'8'}
            >
              <Text fontSize={"40px"} fontWeight={"bold"}>
                {eventData.name}
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

              <Text fontSize={'17px'} mt={'2'} >{eventData.description}</Text>
              <Text fontSize={'17px'} mt={'2'} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ea nulla eveniet est iste! Maiores incidunt quasi fugit molestiae cupiditate voluptate adipisci consequatur quos, qui, eos delectus ad voluptas dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid ipsam minima corrupti obcaecati neque iure, eos molestias ipsum est dolores quis accusamus consectetur laborum optio maxime? Molestiae, pariatur consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos blanditiis, ad minus nobis perferendis error vero enim id veritatis vel similique cupiditate, molestiae dicta placeat perspiciatis aperiam deserunt suscipit temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum accusamus nisi aliquid, nulla illo porro voluptatibus neque alias aliquam vel sequi accusantium saepe vero harum beatae. Tenetur, delectus atque?</Text>
              


            </Flex>


            <Box
              display={{ base: 'none', lg: "block" }}
              bg={'white'}
              p={4}
              top={{ xl: '4' }}
              boxShadow={"lg"}
              position={{ xl: "sticky" }}
              zIndex={'999'}
              height={'120px'}
              borderRadius={'lg'}
              border={'1px solid black'}
              // width={{ lg: "400px" }}
              minWidth={'300px'}
              h={'130px'}
              mt={'2'}
            // bottom={{ base: '0' }}
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
      )}

      <Box
        display={{ base: 'block', lg: "none" }}
        bg={'white'}
        p={4}
        bottom={0}
        boxShadow={"lg"}
        position={{ base: "sticky" }}
        zIndex={'999'}
        height={'120px'}
        borderRadius={'lg'}
        width={{ base: "100%", xl: "400px" }}
        h={'130px'}
        mt={'2'}
      // bottom={{ base: '0' }}
      >
        <Box>
          <Text textAlign={'center'}>Free</Text>
        </Box>
        <Button w={"100%"} mt={4} bg={"#202020"} color={"white"} size={'lg'}>
          BUY
        </Button>
      </Box>
    </>
  );
};

export default DetailEvent;
