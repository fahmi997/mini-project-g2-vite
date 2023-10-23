import { Box, Flex, Heading, Text, Input, Checkbox, Button, HStack, InputGroup, InputRightElement, InputRightAddon } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const LoginCard = (props) => {
    return <>
        <Box boxShadow={"2xl"} p={"35px 15px"} borderRadius={"8px"} border={"1px"} borderColor={"gray.100"}>
            <Box lineHeight={"2"} display={"grid"} justifyContent={"center"} alignContent={"center"} textAlign={"center"}>
                <Heading fontSize={"28px"}>Log In</Heading>
                <Text fontSize={"14px"} color={"gray.700"}>Enter your credentials to access your account</Text>
            </Box>
            <Box display={"grid"} gap={"15px"} mt={"25px"}>
                <Input placeholder="Username or Email" type="text" />
                <InputGroup>
                    <Input placeholder="Password"  type={props.isVisible ? "text" : "password"}/>
                    <InputRightAddon onClick={props.onClick}>
                        {props.isVisible ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                    </InputRightAddon>
                </InputGroup>
            </Box>
            <Flex fontSize={"sm"} justify={"space-between"} m={"5px 0"}>
                <Checkbox size={"sm"} variant={Checkbox}>Remember me</Checkbox>
                <Text cursor={"pointer"}>Forgot password?</Text>
            </Flex>
            <Flex mt={"15px"}>
                <Button w={"100%"} colorScheme="yellow">Log In</Button>
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
                <Text>Don't have an account? Sign Up</Text>
            </Flex>
        </Box>
    </>
};

export default LoginCard;