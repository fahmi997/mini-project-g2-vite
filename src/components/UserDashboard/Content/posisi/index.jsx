import { Box, Text } from "@chakra-ui/react"

const Posisi = (props)=>{
    return <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          borderRadius={"5px"}
          marginTop={"20px"}
          height={"30px"}
          border={"1px solid rgb(247, 247, 247)"}
          width={"92%"}
        >
          <Text
            display={"flex"}
            cursor={"pointer"}
            fontSize={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"0px"}
            backgroundColor={"rgb(247, 247, 247)"}
            height={"100%"}
            width={"90px"}
          >
            Kamu di sini
          </Text>
          <Text
            display={"flex"}
            cursor={"pointer"}
            fontSize={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"0px"}
            height={"100%"}
            width={"auto"}
            marginLeft={"10px"}
            color={"rgb(167, 167, 167)"}
          >
            {props.berada}
          </Text>
        </Box>
      </div>
}

export default Posisi