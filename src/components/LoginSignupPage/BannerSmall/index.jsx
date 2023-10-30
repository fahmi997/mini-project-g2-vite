import { Flex, Image, Heading, Text } from "@chakra-ui/react"
import { textColor } from "../../../assets/color";

const BannerSmall = (props) => {
    return <>
        <Flex w={"25vw"} flexDirection={"column"} justify={"center"} gap={"20px"}>
            <Flex h={"45%"} justify={"center"}>
                <Image src={props.img} objectFit={"contain"} alt={props.alt} />
            </Flex>
            <Flex h={"25%"} flexDirection={"column"} justify={"start"} align={"center"}>
                <Heading fontSize={"20px"} align={"center"}>{props.heading}</Heading> <br />
                <Text fontSize={"16px"} align={"center"} color={textColor}>{props.text}</Text>
            </Flex>
        </Flex>
    </>
};

export default BannerSmall;