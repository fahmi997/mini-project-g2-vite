import { Image, Box, Text } from "@chakra-ui/react";
import creatorData from "../../data/creatorData";

const CardCreator = ({ creatorIndex }) => {
    const { creator_image, name } = creatorData[creatorIndex];

    return (
        <Box width={'120px'} mr={'4'} cursor={'pointer'} >
            <Box height={'92px'} width={'92px'} borderRadius={'full'} alignContent={'center'} mr={'auto'} ml={'auto'}>
                <Image src={creator_image} height={'90px'} width={'90px'} borderRadius={'full'} />
            </Box>
            <Box mt={'2'} align={'center'} overflow={'hidden'} textOverflow={'ellipsis'} h={'50px'} whiteSpace={'nowrap'} >{name}</Box>
        </Box>
    );
};

export default CardCreator;
