import { Box, Flex, Image, Heading, Text, Input, Checkbox, Button, Divider, AbsoluteCenter, Center, HStack } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import img from "../assets/Login-rafiki.svg"
import BannerSmall from "../components/LoginSignupPage/BannerSmall";



const LoginPage = () => {
    return <>
        <Flex h={"100px"} mt={"60px"}>
            <Image src="./logoblack1.svg" objectFit={"contain"} alt="logo" w={"100%"} h={"100%"} />
        </Flex>
        <Flex h={"60vh"} mt={"45px"} justify={"space-between"}>
            <Flex w={"45vw"} justify={"flex-end"}>
                {/* <Flex w={"25vw"} flexDirection={"column"} justify={"center"} gap={"20px"}>
                    <Flex h={"45%"} justify={"center"}>
                        <Image src={img} objectFit={"contain"} alt="login image" />
                    </Flex>
                    <Flex h={"25%"} flexDirection={"column"} justify={"start"} align={"center"}>
                        <Heading fontSize={"20px"} align={"center"}>Never miss your favorite events again</Heading> <br />
                        <Text fontSize={"16px"} align={"center"} color={textColor}>Join us and experience the ease of transacting and managing events on Ticketo</Text>
                    </Flex>
                </Flex> */}
                <BannerSmall img={img} alt="Login Image" heading="Never miss your favorite events again" text="Join us and experience the ease of transacting and managing events on Ticketo"/>
            </Flex>
            <Flex w={"45vw"}>
                <Flex w={"45%"} flexDirection={"column"} justify={"center"}>
                    <Box boxShadow={"2xl"} p={"35px 15px"} borderRadius={"8px"} border={"1px"} borderColor={"gray.100"}>
                        <Box lineHeight={"2"} display={"grid"} justifyContent={"center"} alignContent={"center"} textAlign={"center"}>
                            <Heading fontSize={"28px"}>Login</Heading>
                            <Text fontSize={"14px"} color={"gray.700"}>Enter your credentials to access your account</Text>
                        </Box>
                        <Box display={"grid"} gap={"15px"} mt={"25px"}>
                            <Input placeholder="Username or Email" />
                            <Input placeholder="Password" />
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
                                <FcGoogle size={"20px"}/>
                                <Text>Google</Text>
                            </HStack>
                        </Flex>
                        <Flex justify={"center"} mt={"12px"}>
                            <Text>Don't have an account? Sign Up</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    </>
};

export default LoginPage;