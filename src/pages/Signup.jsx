import { Flex, Image } from "@chakra-ui/react"
import img from "../assets/Signup-bro.svg"
import BannerSmall from "../components/LoginSignupPage/BannerSmall";
import LoginCard from "../components/LoginSignupPage/LoginCard";
import SignupCard from "../components/LoginSignupPage/SignupCard";
import { useState } from "react";

const SignupPage = () =>{
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

    return <>
        <Flex h={"100px"} mt={"60px"}>
            <Image src="./logoblack1.svg" objectFit={"contain"} alt="logo" w={"100%"} h={"100%"} />
        </Flex>
        <Flex h={"75vh"} mt={"45px"} justify={"space-between"}>
            <Flex w={"45vw"} justify={"flex-end"}>
                <BannerSmall img={img} alt="Login Image" heading="Never miss your favorite events again" text="Join us and experience the ease of transacting and managing events on Ticketo" />
            </Flex>
            <Flex w={"45vw"}>
                <Flex w={"45%"} flexDirection={"column"} justify={"center"}>
                    <SignupCard isVisible={isVisible} onClick={() => setIsVisible(!isVisible)} isVisibleConfirm={isVisibleConfirm} onClickConfirm={() => setIsVisibleConfirm(!isVisibleConfirm)}/>
                </Flex>
            </Flex>
        </Flex>
    </>
};

export default SignupPage;