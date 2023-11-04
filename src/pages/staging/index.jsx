import { Box, Button, Image, Input, InputGroup, InputRightAddon, Stack } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"
import { primary } from "../../assets/color";
import Navbar from "../../components/Navbar";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";
import LandingPage from "../LandingPage";
import DetailEventPage from "../DetailEventPage";
import DetailEv from "../DetailEv";


const StagingPage = () => {
    return <>
    {/* <Navbar/> */}
    <Box h={'384px'}>
        {/* <DetailEv/> */}
        <DetailEventPage/>
        {/* <LandingPage/> */}
        
    </Box>
    {/* <FooterMain/>
    <FooterBottom/> */}
    </>
};

export default StagingPage;