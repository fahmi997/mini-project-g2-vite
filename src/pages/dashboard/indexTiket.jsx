import { Flex } from "@chakra-ui/react";
import SideNav from "../../components/UserDashboard/SideNav";
import NavbarDash from "../../components/UserDashboard/Navbar";
import ContentDash from "../../components/UserDashboard/Content/indexTiket";
import LayoutPageDashboard from "../../components/UserDashboard/LayoutPage";
import ContentDashTiket from "../../components/UserDashboard/Content/indexTiket";

const DashboardTiket = () => {
  return (
    <>
      <Flex width={"100%"} height={"100vh"}>
        <LayoutPageDashboard>
          <NavbarDash halaman={"Tiket Saya"}>
            <ContentDashTiket />
          </NavbarDash>
        </LayoutPageDashboard>
      </Flex>
    </>
  );
};

export default DashboardTiket;
