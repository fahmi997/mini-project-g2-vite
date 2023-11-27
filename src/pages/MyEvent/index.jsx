import { Flex } from "@chakra-ui/react";
import LayoutPageDashboard from "../../components/PromotorDashboard/LayoutPage";
import NavbarDash from "../../components/PromotorDashboard/Navbar";
import ContentDashProfile from "../../components/UserDashboard/Content/indexProfile";
import MyEvent from "../../components/PromotorDashboard/Content/MyEvent";
// import MyEvent from "../../components/PromotorDashboard/Content/MyEvent";


const DashboardPromotorEvent = () => {
    return (
        <>
            <Flex width={"100%"} height={"100vh"}>
                <LayoutPageDashboard>
                    <NavbarDash halaman={"My Event"}>
                        <MyEvent/>
                        {/* <MyPromo/> */}
                    </NavbarDash>
                </LayoutPageDashboard>
            </Flex>
        </>
    );
};

export default DashboardPromotorEvent
