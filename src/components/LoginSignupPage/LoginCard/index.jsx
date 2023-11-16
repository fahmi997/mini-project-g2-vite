import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Checkbox,
  Button,
  HStack,
  InputGroup,
  InputRightElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { checkDataAccount, login } from "../../../redux/slice/accountSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_CALL } from "../../../helper";
import React from "react";

const LoginCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataAccount = useSelector((state) => {
    console.log(state.accountSlice);
    return state.accountSlice;
  });
  const [inEmail, setInEmail] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [inRole, setInRole] = React.useState("user");

  const onLogin = async () => {
    // console.log("tes");
    const response = await axios.post(`http://localhost:2099/account/login`, {
      email: inEmail,
      password: inPassword
      // role: inRole
    });
    console.log("INI RESPON",response.data.result.token);
    localStorage.setItem("login", response.data.result.token)
    dispatch(login(response.data.result))
    if(response){
        navigate("*")
    }
  };

//   console.log("BRE BRE DATA ACCOUNT",dataAccount);

  return (
    <>
      <Box
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        p={"35px 15px"}
        borderRadius={"25px"}
        borderColor={"gray.100"}
      >
        <Box
          lineHeight={"2"}
          display={"grid"}
          justifyContent={"center"}
          alignContent={"center"}
          textAlign={"center"}
        >
          <Heading fontSize={"28px"}>Log In</Heading>
          <Text fontSize={"14px"} color={"gray.700"}>
            Enter your credentials to access your account
          </Text>
        </Box>
        <Box display={"grid"} gap={"15px"} mt={"25px"}>
          <Input
            onChange={(e) => setInEmail(e.target.value)}
            height={"60px"}
            placeholder="Email"
            type="text"
          />
          <InputGroup>
            <Input
              onChange={(e) => setInPassword(e.target.value)}
              height={"60px"}
              placeholder="Password"
              type={props.isVisible ? "text" : "password"}
            />
            <InputRightElement height={"60px"} onClick={props.onClick}>
              {props.isVisible ? (
                <AiFillEyeInvisible color="grey" size={"20px"} />
              ) : (
                <AiFillEye color="grey" size={"20px"} />
              )}
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex fontSize={"sm"} justify={"space-between"} m={"5px 0"}>
          <Checkbox size={"sm"} variant={Checkbox}>
            Remember me
          </Checkbox>
          <Text cursor={"pointer"}>Forgot password?</Text>
        </Flex>
        <Flex mt={"15px"}>
          <Button
            onClick={onLogin}
            w={"100%"}
            height={"60px"}
            colorScheme="yellow"
          >
            Log In
          </Button>
        </Flex>
        <Flex
          m={"15px 0"}
          align={"Center"}
          fontSize={"16px"}
          justify={"center"}
          gap={"5px"}
        >
          <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
          <Text>or</Text>
          <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
        </Flex>
        <Flex
          borderColor={"gray"}
          justify={"space-around"}
          p={"5px 0"}
          borderRadius={"6px"}
        >
          <Flex
            cursor={"not-allowed"}
            justify={"center"}
            backgroundColor={"grey"}
            color={"white"}
            p={"2% 10%"}
            borderRadius={"6px"}
          >
            <HStack>
              <FaFacebook size={"20px"} />
              <Text>Facebook</Text>
            </HStack>
          </Flex>
          <Flex
            cursor={"pointer"}
            border={"1px"}
            borderColor={"gray"}
            justify={"center"}
            p={"2% 10%"}
            borderRadius={"6px"}
          >
            <HStack>
              <FcGoogle size={"20px"} />
              <Text>Google</Text>
            </HStack>
          </Flex>
        </Flex>
        <Flex justify={"center"} mt={"12px"}>
          <Text cursor={"default"}>
            Don't have an account?{" "}
            <a style={{ color: "blue", fontWeight: "700" }} href="/">
              Sign Up
            </a>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default LoginCard;
