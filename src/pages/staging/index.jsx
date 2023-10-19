import { Box, Button, Image, Input, InputGroup, InputRightAddon, Stack } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { primary } from "../../assets/color";
import Navbar from "../../components/Navbar";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";

const StagingPage = () => {
    return <>
    <Navbar/>
    <Box h={'434px'}>
        <Image src="./logoblack1.svg"/>
    </Box>
    <FooterMain/>
    <FooterBottom/>
    </>
};

export default StagingPage;