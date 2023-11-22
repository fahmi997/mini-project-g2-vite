import { Flex } from "@chakra-ui/react";
import LayoutPageDashboard from "../../components/UserDashboard/LayoutPage";
import NavbarDash from "../../components/UserDashboard/Navbar";
import ContentDashProfile from "../../components/UserDashboard/Content/indexProfile";


const DashboardProfile = () => {
  return (
    <>
      <Flex width={"100%"} height={"100vh"}>
        <LayoutPageDashboard>
          <NavbarDash halaman={"Profil Kamu"}>
            <ContentDashProfile/>
          </NavbarDash>
        </LayoutPageDashboard>
      </Flex>
    </>
  );
};

export default DashboardProfile
