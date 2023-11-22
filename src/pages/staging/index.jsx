import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";
import LandingPage from "../LandingPage";
import DetailEvent from "../DetailEventPage/index.jsx";
import ExplorePage from "../ExplorePage.jsx";
import NavbarLogIn from "../../components/NavbarLogIn/index.jsx";
import BottomBox from "../../components/BottomBox/index.jsx";


const StagingPage = () => {
    return <>
        
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/explore" element={<ExplorePage/>} />
                <Route path="/events/:id" element={<DetailEvent />} />
            </Routes>
        
    <Navbar/>
    <Box h={'384px'}></Box>
    <Box h={'434px'}>
        <Image src="./logoblack1.svg"/>
    </Box>
    <FooterMain/>
    <FooterBottom/>
    </>
};

export default StagingPage;