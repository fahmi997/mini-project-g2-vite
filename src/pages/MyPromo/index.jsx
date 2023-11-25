import { Flex } from "@chakra-ui/react";
import LayoutPageDashboard from "../../components/PromotorDashboard/LayoutPage";
import NavbarDash from "../../components/PromotorDashboard/Navbar";
import ContentDashProfile from "../../components/UserDashboard/Content/indexProfile";
import MyPromo from "../../components/PromotorDashboard/Content/MyPromo";


const DashboardPromotor = () => {
    return (
        <>
            <Flex width={"100%"} height={"100vh"}>
                <LayoutPageDashboard>
                    <p>Dashboard promotor</p>
                    <NavbarDash halaman={"My Promo"}>
                        <MyPromo/>
                        {/* <ContentDashProfile /> */}
                    </NavbarDash>
                </LayoutPageDashboard>
            </Flex>
        </>
    );
};

export default DashboardPromotor
