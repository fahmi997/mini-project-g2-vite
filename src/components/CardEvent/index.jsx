import { Card, Image, Box, Text, Flex } from "@chakra-ui/react"
import eventData from "../../data/eventData";

const CardEvent = (props) => {


  return (
    <>
      <Card
        key={props.index}
        minWidth={"230px"}
        maxWidth={"230px"}
        height={"270px"}
        boxShadow={"md"}
        bgColor={"white"}
        _hover={{ boxShadow: "xl" }}
        mr={"4"}
        mt={"5"}
      >
        <Image height={'115px'} width={'230px'} objectFit={'cover'} src={props.image} />

        <Box ml={"3"}>
          <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' mt={"5"} mr={'4'}>{props.eventName}</Text>
          <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' fontWeight={'light'} mt={"1"} mr={'4'}>{props.eventDate}</Text>
          <Text fontWeight={'bold'} mt={"1"} mr={'4'}>{props.eventPrice}</Text>
          <Box mt={"3"} bgColor={"black"} width={"auto"} border={"1px #DCDCDC solid"} mr={"3"} />
          <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' ml={"1"} mt={"2"} mr={'4'}>{props.creatorEvent}</Text>
        </Box>
      </Card>
    </>
  );
};

export default CardEvent