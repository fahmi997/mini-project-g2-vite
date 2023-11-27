import { Flex } from "@chakra-ui/react";
import LayoutPageDashboard from "../../components/PromotorDashboard/LayoutPage";
import NavbarDash from "../../components/PromotorDashboard/Navbar";
import MyPromo from "../../components/PromotorDashboard/Content/MyPromo";


const DashboardPromotorPromo = () => {
    return (
        <>
            <Flex width={"100%"} height={"100vh"}>
                <LayoutPageDashboard>
                    <NavbarDash halaman={"My Promo"}>
                        <MyPromo/>
                    </NavbarDash>
                </LayoutPageDashboard>
            </Flex>
        </>
    );
};

export default DashboardPromotorPromo
