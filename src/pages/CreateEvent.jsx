import { Box, Button, Flex, Text, HStack, Image, FormLabel, Textarea, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, VStack } from "@chakra-ui/react";
import { primary, primaryActive } from "../assets/color";
import CreateEvent from "../components/CreateEventPage/CreateEventCard";
import { AiOutlinePlus } from "react-icons/ai";
import Ticket from "../components/CreateEventPage/Ticket";
import { useDisclosure } from "@chakra-ui/react";
import TicketModal from "../components/CreateEventPage/TicketModal";
import { useEffect, useState } from "react";
import API_CALL from "../helper";

const CreateEventPage = () => {
    const addTicket = useDisclosure();
    const [categories, setCategories] = useState([]);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [provinceId, setProvinceId] = useState(null);

    useEffect(() => {
        getCategories();
        getTicketTypes();
        getProvinces();
    }, []);

    useEffect(() => {
        if (provinceId) {
            getCities(provinceId);
        }
    }, [provinceId, setProvinceId])

    const getCategories = async () => {
        try {
            const res = await API_CALL.get('/event/categories');
            setCategories(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getTicketTypes = async () => {
        try {
            const res = await API_CALL.get('/event/ticket-types');
            setTicketTypes(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getProvinces = async () => {
        try {
            const res = await API_CALL.get('/event/provinces');
            setProvinces(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getCities = async (id) => {
        try {
            const res = await API_CALL.get(`/event/cities/${id}`);
            setCities(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return <>
        <Flex shadow={'xl'} w={'100%'} h={'125px'} p={'25px 0'} justify={'center'} align={'center'}>
            <Image src="./logoblack1.svg" objectFit={"contain"} alt="logo" w={"100%"} h={"100%"} />
        </Flex>

        <CreateEvent categories={categories} provinces={provinces} cities={cities} getProvinceId={(e) => setProvinceId(e)} getVal={(val) => console.log(val)}/>
        <Flex
            w={{ base: '80%', md: '70%', xl: '50%' }}
            m={'0 auto'}
            border={'1px'}
            borderColor={'#DEDEDE'}
            mb={'150px'}
            borderRadius={'8px'}
        >
            <Tabs w={'100%'} colorScheme="yellow" isFitted>
                <TabList>
                    <Tab _selected={{ fontWeight: 'bold', bg: primary }} borderTopLeftRadius={'8px'}>TICKETING</Tab>
                    <Tab _selected={{ fontWeight: 'bold', bg: primary }} borderTopRightRadius={'8px'}>DESCRIPTION</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex justify={'end'} align={'center'} mb={'24px'}>
                            <Button colorScheme="yellow" leftIcon={<AiOutlinePlus />} onClick={addTicket.onOpen}>Add</Button>
                            <TicketModal isOpen={addTicket.isOpen} onClose={addTicket.onClose} ticketTypes={ticketTypes} />
                        </Flex>
                        <VStack gap={'8'}>
                            <Ticket type={'REGULAR'} price={'RP.250.000'} stock={'100'} />
                            <Ticket type={'VIP'} price={'RP.250.000'} stock={'100'} />
                            <Ticket type={'VVIP'} price={'RP.250.000'} stock={'100'} />
                            <Ticket type={'FREE'} stock={'100'} />
                        </VStack>
                        {/* <Text>Ticketing</Text> */}
                    </TabPanel>
                    <TabPanel>
                        <FormControl>
                            <FormLabel>Event Description</FormLabel>
                            <Textarea placeholder="Description" resize={'none'} h={'250px'} />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>Terms and Condition</FormLabel>
                            <Textarea placeholder="Terms and Condition" resize={'none'} h={'250px'} />
                        </FormControl>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>


        {/* FOOTER SECTION */}
        <Flex position={'fixed'} bg={'whitesmoke'} border={'1px'} borderColor={'gray.200'} w={'100%'} h={'100px'} p={'25px 0'} bottom={'0%'} justify={{ base: 'end', md: 'space-between' }} align={'center'}>
            <Box gap={'2'} display={{ base: 'none', md: 'flex' }} ml={{ md: '6em', lg: '15em' }} fontSize={'18px'}>
                <Text as={'b'}>Yeay!</Text>
                <Text>One step away and your event is created</Text>
            </Box>
            <HStack gap={'5'} mr={{ base: '15px', md: '40px' }}>
                <Button
                    border={'1px'}
                    borderColor={'blackAlpha.200'}
                    bg={'whiteAlpha.500'}
                    _hover={{}}
                >Cancel</Button>
                <Button
                    bg={primary}
                    _hover={{}}
                    _active={{ bg: primaryActive }}
                >
                    Create</Button>
            </HStack>
        </Flex>
    </>
};

export default CreateEventPage;