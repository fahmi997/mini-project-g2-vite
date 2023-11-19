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
                <Route path="/event/:id" element={<DetailEvent />} />
            </Routes>
        
    </>
};

export default StagingPage;