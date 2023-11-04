import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { primary, primaryBgColor, secondaryBgColor } from "../../assets/color";
import { BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const FooterM = () => {
  return (
    <>
      <Box h={"auto"} bg={primaryBgColor} color={"white"} py={8}>
        <Flex
          direction={["column", "row"]} // Menggunakan perubahan tata letak berdasarkan breakpoint
          maxW={"80rem"}
          m={"auto"}
          justify={"center"}
          alignItems={["center", "flex-start"]} // Mengatur perataan elemen di tengah pada perangkat seluler
        >
          <Box
            w={["100%", "300px"]} // Mengatur lebar elemen untuk perangkat seluler
            p={4} // Tambahkan padding
            textTransform={"capitalize"}
          >
            <Box mb={4}>
              <Image src="/logowhite.svg" h={["40px", "65px"]} />
            </Box>
            <Box>
              Best app for ticketing management system in Indonesia! Ticketo.
              Ticketing platform that eases your event.
            </Box>
          </Box>
          <Flex
            w={["100%", "300px"]} // Mengatur lebar elemen untuk perangkat seluler
            p={4} // Tambahkan padding
            textTransform={"capitalize"}
            fontSize={["16px", "20px"]} // Sesuaikan ukuran teks
            fontWeight="bold"
            align={["center", "start"]} // Mengatur perataan elemen di tengah pada perangkat seluler
          >
            <List spacing={2}>
              <ListItem>Upcoming Event</ListItem>
              <ListItem>Spotlight</ListItem>
              <ListItem>Promos</ListItem>
              <ListItem>Pricing</ListItem>
            </List>
          </Flex>
          <Flex
            w={["100%", "300px"]} // Mengatur lebar elemen untuk perangkat seluler
            p={4} // Tambahkan padding
            textTransform={"capitalize"}
            fontSize={["16px", "20px"]} // Sesuaikan ukuran teks
            fontWeight="bold"
            align={["center", "start"]} // Mengatur perataan elemen di tengah pada perangkat seluler
          >
            <List spacing={2}>
              <ListItem>Careers</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms & Conditions</ListItem>
            </List>
          </Flex>
          <Box w={["100%", "300px"]} p={4} as="b">
            <Text fontSize={["16px", "20px"]} fontWeight="bold">
              Ticketo. Support
            </Text>
            <Text fontSize={["14px", "15px"]}>E-Mail: help@ticketo.id</Text>
            <Text fontSize={["14px", "15px"]}>Contact Center: +62 21 1234 1234</Text>
            <br />
            <Text fontSize={["16px", "20px"]} fontWeight="bold">
              Follow Us
            </Text>
            <Flex h={"45px"} justify={["space-between", "center"]} fontSize={"26px"} mt={4}>
              <Box
                boxSize={"45px"}
                bg={"white"}
                rounded={"8px"}
                display={"grid"}
                justifyContent={"center"}
                alignContent={"center"}
                _hover={{ bg: primary }}
              >
                <BiLogoYoutube />
              </Box>
              <Box
                boxSize={"45px"}
                bg={"white"}
                rounded={"8px"}
                display={"grid"}
                justifyContent={"center"}
                alignContent={"center"}
                _hover={{ bg: primary }}
              >
                <BiLogoInstagramAlt />
              </Box>
              <Box
                boxSize={"45px"}
                bg={"white"}
                rounded={"8px"}
                display={"grid"}
                justifyContent={"center"}
                alignContent={"center"}
                _hover={{ bg: primary }}
              >
                <BiLogoLinkedin />
              </Box>
              <Box
                boxSize={"45px"}
                bg={"white"}
                rounded={"8px"}
                display={"grid"}
                justifyContent={"center"}
                alignContent={"center"}
                _hover={{ bg: primary }}
              >
                <BiLogoTwitter />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FooterM;

