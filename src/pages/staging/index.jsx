import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";
import LandingPage from "../LandingPage";
import DetailEventPage from "../DetailEventPage";
import ExplorePage from "../ExplorePage.jsx";


const StagingPage = () => {
    return <>
        
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/explore" element={<ExplorePage/>} />
            </Routes>
            <FooterMain/>
            <FooterBottom/>
        
    </>
};

export default StagingPage;