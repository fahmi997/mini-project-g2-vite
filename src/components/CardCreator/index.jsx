import { Image, Box, Text } from "@chakra-ui/react"

const CardCreator = () => {

    return (
        <Box  height={'120px'} width={'120px'} mr={'2'} >
            <Box height={'92px'} width={'92px'} borderRadius={'full'} alignContent={'center'} mr={'auto'} ml={'auto'}>
                <Image src="https://tse3.mm.bing.net/th?id=OIP.0fRNzG8iXEQE4ZerH-2U-AHaHa&pid=Api&P=0&h=220"
                        height={'90px'} width={'90px'} borderRadius={'full'} />
            </Box>

            <Text mt={'2'} flexWrap={'wrap'} align={'center'}>Purwadhika</Text>
        </Box>

    )
};

export default CardCreator