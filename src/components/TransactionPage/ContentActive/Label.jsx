import { Text } from "@chakra-ui/react"

const Label = (props) =>{
    return <Text display={"flex"} backgroundColor={"rgb(237, 239, 242)"} alignItems={"center"} borderRadius={"30px"} padding={"15px"} height={"100%"}>{props.judul}</Text>
}

export default Label