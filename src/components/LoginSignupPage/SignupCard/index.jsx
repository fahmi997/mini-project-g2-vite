/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Text, Input, Button, HStack, InputGroup, InputRightAddon, Select, InputRightElement } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import API_CALL from "../../../helper";


const SignupCard = (props) => {
    const generateRefferal = (kode) => kode[Math.floor(Math.random() * kode.length)];
    const kapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const angka = '0123456789';
    let kodeRefferal = '';
    for (let i = 0; i < 3; i++) {
        kodeRefferal += generateRefferal(kapital)
    }
    for (let i = 0; i < 3; i++) {
        kodeRefferal += generateRefferal(angka)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [inNamaLengkap, setInNamaLengkap] = React.useState("")
    const [inEmail, setInEmail] = React.useState("")
    const [inPassword, setInPassword] = React.useState("")
    const [inConfirmPassword, setInConfirmPassword] = React.useState("")
    const [inRole, setInRole] = React.useState("")
    const [inCode, setInCode] = React.useState("")

    const signUp = async () =>{
        // console.log("tessss");
        try {
            if(inNamaLengkap === '' || inEmail === '' || inRole === '' || inPassword === '' || inConfirmPassword===''){
                alert('Mohon di isi')
            }else{
                let response = await API_CALL.post(`/account/register`,
                {
                    name: inNamaLengkap,
                    email: inEmail,
                    password: inPassword,
                    role: inRole,
                    refCode: kodeRefferal
                })
                console.log("bree ini response signup",response);
                alert('Register is SUCCES')
                navigate("/login")
            }
            
        } 
        catch (error) {
            if(error.response.status === 400){
                alert('Account is exist')
            }else{
                alert('Is error!')
            }
        }        
    }


    return <>
        <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} p={"35px 15px"} borderRadius={"25px"} borderColor={"gray.100"}>
            <Box lineHeight={"2"} display={"grid"} justifyContent={"center"} alignContent={"center"} textAlign={"center"}>
                <Heading fontSize={"28px"}>Sign Up</Heading>
                {/* <Text fontSize={"14px"} color={"gray.700"}>Create an account</Text> */}
            </Box>
            <Box display={"grid"} gap={"15px"} mt={"25px"}>
                <InputGroup gap={"10px"}>
                    <Input onChange={(e) => setInNamaLengkap(e.target.value)} placeholder="Full Name" type="text" />
                </InputGroup>
                <Input onChange={(e) => setInEmail(e.target.value)} placeholder="Email" type="email" />
                <InputGroup>
                    <Input onChange={(e) => setInPassword(e.target.value)} placeholder="Password" type={props.isVisible ? "text" : "password"} />
                    <InputRightElement onClick={props.onClick}>
                        {props.isVisible ? <AiFillEyeInvisible color="grey" size={"16px"}/> : <AiFillEye color="grey" size={"16px"}/>}
                    </InputRightElement>
                </InputGroup>
                <InputGroup>
                    <Input onChange={(e) => setInConfirmPassword(e.target.value)} placeholder="Confirm Password" type={props.isVisibleConfirm ? "text" : "password"} />
                    <InputRightElement onClick={props.onClickConfirm}>
                        {props.isVisibleConfirm ? <AiFillEyeInvisible color="grey" size={"16px"}/> : <AiFillEye color="grey" size={"16px"}/>}
                    </InputRightElement>
                </InputGroup>
                <Select onChange={(e) => setInRole(e.target.value)} color="gray.500">
                    <option style={{display:"none"}}>Select your role</option>
                    <option value={`user`}>Attendee</option>
                    <option value={`eo`}>Event Organizer</option>
                </Select>
            </Box>
            
            <Flex mt={"15px"}>
                <Button onClick={signUp} w={"100%"} colorScheme="yellow">Sign Up</Button>
            </Flex>
            <Flex m={"15px 0"} align={"Center"} fontSize={"16px"} justify={"center"} gap={"5px"}>
                <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
                <Text>or</Text>
                <Box border={"1px"} borderColor={"gray.300"} w={"100px"} h={"0"} />
            </Flex>
            <Flex  borderColor={"gray"} justify={"space-around"} p={"5px 0"} borderRadius={"6px"}>
                <Flex cursor={"not-allowed"} justify={"center"} backgroundColor={"grey"} color={"white"} p={"2% 10%"} borderRadius={"6px"}>
                    <HStack>
                        <FaFacebook size={"20px"}/>
                        <Text>Facebook</Text>
                    </HStack>
                </Flex>
                <Flex cursor={"pointer"} border={"1px"} borderColor={"gray"} justify={"center"} p={"2% 10%"} borderRadius={"6px"}>
                <HStack>
                    <FcGoogle size={"20px"} />
                    <Text>Google</Text>
                </HStack>
                </Flex>
            </Flex>
            <Flex justify={"center"} mt={"12px"}>
                <Text>Already have an account? <a style={{color:"blue", fontWeight:"700"}} href="/login">Log In</a></Text>
            </Flex>
        </Box>
    </>
};

export default SignupCard;