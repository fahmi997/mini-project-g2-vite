import { Box, Flex, Text } from "@chakra-ui/react"
import { FiCompass } from "react-icons/fi";
import { primary, primaryBgColor } from "../../assets/color";
import { TbCalendarPlus } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BottomBox = () => {

  const navigateToExplorePage = () => {
    navigate('/');
};

  return <>
    <Flex
      flexDirection={'row'}
      h={'50px'}
      zIndex={'999'}
      position={'sticky'}
      bottom={0}
      bg={primaryBgColor}
      display={{ base: "flex", md: "none" }}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box textAlign="center">
          <FiCompass fontSize="25px" color={primary} />
        </Box>
        <Text fontSize="10px" color="white" align="center">
          Explore
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box textAlign="center">
          <TbCalendarPlus fontSize="25px" color={primary} />
        </Box>
        <Text fontSize="10px" color="white" align="center">
          Buat Event
        </Text>
      </Box>
      
      <Link to="/explore" onClick={navigateToExplorePage}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box textAlign="center">
          < AiOutlineSearch fontSize="25px" color={primary} />
        </Box>
        <Text fontSize="10px" color="white" align="center">
          Cari
        </Text>
      </Box>
      </Link>



    </Flex>
  </>
}

export default BottomBox;