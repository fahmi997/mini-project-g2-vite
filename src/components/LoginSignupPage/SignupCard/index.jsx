import { Box, Flex, Heading, Text, Input, Button, HStack, InputGroup, InputRightAddon, Select } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import "./styles.css"

const SignupCard = (props) => {
    return <>
        <Box boxShadow={"2xl"} p={"35px 15px"} borderRadius={"8px"} border={"1px"} borderColor={"gray.100"}>
            <Box lineHeight={"2"} display={"grid"} justifyContent={"center"} alignContent={"center"} textAlign={"center"}>
                <Heading fontSize={"28px"}>Sign Up</Heading>
                {/* <Text fontSize={"14px"} color={"gray.700"}>Create an account</Text> */}
            </Box>
            <Box display={"grid"} gap={"15px"} mt={"25px"}>
                <InputGroup gap={"10px"}>
                    <Input placeholder="Fist Name" type="text" />
                    <Input placeholder="Last Name" type="text" />
                </InputGroup>
                <Input placeholder="Email" type="text" />
                <InputGroup>
                    <Input placeholder="Password" type={props.isVisible ? "text" : "password"} />
                    <InputRightAddon onClick={props.onClick}>
                        {props.isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </InputRightAddon>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Confirm Password" type={props.isVisibleConfirm ? "text" : "password"} />
                    <InputRightAddon onClick={props.onClickConfirm}>
                        {props.isVisibleConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </InputRightAddon>
                </InputGroup>
                <Select color="gray.500">
                    <option style={{display:"none"}}>Select your role</option>
                    <option>Attendee</option>
                    <option>Event Organizer</option>
                </Select>
            </Box>
            
            <Flex mt={"15px"}>
                <Button w={"100%"} colorScheme="yellow">Sign Up</Button>
            </Flex>
            <Flex m={"15px 0"} align={"Center"} fontSize={"16px"} justify={"center"} gap={"5px"}>
                <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
                <Text>or</Text>
                <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
            </Flex>
            <Flex border={"1px"} borderColor={"gray"} justify={"center"} p={"5px 0"} borderRadius={"6px"}>
                <HStack>
                    <FcGoogle size={"20px"} />
                    <Text>Google</Text>
                </HStack>
            </Flex>
            <Flex justify={"center"} mt={"12px"}>
                <Text>Already have an account? Log In</Text>
            </Flex>
        </Box>
    </>
};

export default SignupCard;