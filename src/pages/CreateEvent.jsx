import { Box, Button, Flex, Text, HStack, Image, FormLabel, Textarea, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, VStack, useToast } from "@chakra-ui/react";
import { primary } from "../assets/color";
import CreateEvent from "../components/CreateEventPage/CreateEventCard";
import { AiOutlinePlus } from "react-icons/ai";
import Ticket from "../components/CreateEventPage/Ticket";
import { useDisclosure } from "@chakra-ui/react";
import TicketModal from "../components/CreateEventPage/TicketModal";
import { useEffect, useState } from "react";
import API_CALL from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteTicket } from "../redux/action/createEvent";
import { useNavigate } from "react-router";

// import { deleteTicket } from "../redux/action/createEvent";

const CreateEventPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addTicket = useDisclosure();
    const toast = useToast();
    const [file, setFile] = useState();
    const [categories, setCategories] = useState([]);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [provinceId, setProvinceId] = useState(null);
    const [inTicket, setInTicket] = useState();
    const tickets = useSelector((state) => state.createEvent.ticket);
    const eventData = useSelector((state) => state.createEvent);
    const [description, setDescription] = useState({});

    useEffect(() => {
        setInTicket(tickets)
    }, [tickets])
    
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
    // console.log("File from create event:", file);
    const createEvent = async () => {
        try {
            const formData = new FormData();
            if (eventData.location.method === 'online') {
                formData.append('url', eventData.location.url);
            } else {
                formData.append('venue', eventData.location.venue);
                formData.append('address', eventData.location.address);
                formData.append('cityId', eventData.location.city);
            }
            formData.append('userId', 3);
            formData.append('categoryId', eventData.event.category);
            formData.append('name', eventData.event.eventName);
            formData.append('image', file);
            formData.append('startDate', eventData.event.startEvent);
            formData.append('endDate', eventData.event.endEvent);
            formData.append('description', description.description);
            formData.append('tnc', description.tnc);
            formData.append('method', eventData.location.method);

            const event = await API_CALL.post('/event/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const createTicket = tickets.map((t) => {
                if (t.type.type === 'free') {
                    return {
                        eventId: event.data.id,
                        ticketTypeId: t.type.id,
                        startSale: t.startSale,
                        endSale: t.endSale,
                        stock: t.stock,
                        price: 0
                    }
                }

                return {
                    eventId: event.data.id,
                    ticketTypeId: t.type.id,
                    startSale: t.startSale,
                    endSale: t.endSale,
                    stock: t.stock,
                    price: t.price
                }
            })

            await API_CALL.post('/ticket/create', createTicket);
            console.log("Ticketing:", createTicket);
        } catch (error) {
            console.log(error);
        }
    };

    const onCreate = async () => {
        console.log(eventData);
        console.log(description);
        if (!eventData.ticket.length) {
            return toast({
                title: 'You should add at least one ticket!',
                status: 'error',
                isClosable: true
            })
        }
        createEvent();
        navigate('/my-event');
    };
    // console.log(tickets);
    return <>
        <Flex shadow={'xl'} w={'100%'} h={'125px'} p={'25px 0'} justify={'center'} align={'center'}>
            <Image src="./logoblack1.svg" objectFit={"contain"} alt="logo" w={"100%"} h={"100%"} />
        </Flex>

        <CreateEvent
            categories={categories}
            provinces={provinces}
            cities={cities}
            getProvinceId={(e) => setProvinceId(e)}
            file={(file) => setFile(file)}
        />
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
                            <Button colorScheme="yellow" leftIcon={<AiOutlinePlus />} onClick={addTicket.onOpen} isDisabled={false}>Add</Button>
                            <TicketModal isOpen={addTicket.isOpen} onClose={addTicket.onClose} ticketTypes={ticketTypes} />
                        </Flex>
                        <VStack gap={'8'}>
                            {tickets.length && inTicket.map((data, index) => {
                                if (data.type.type === 'free') return <Ticket key={index} type={data.type.type.toUpperCase()} stock={data.stock} startSale={data.startSale.split('T').join(' ')} endSale={data.endSale.split('T').join(' ')} onDelete={() => dispatch(deleteTicket(index))} />
                                return <Ticket key={index} type={data.type.type.toUpperCase()} price={parseInt(data.price).toLocaleString('ID', { style: "currency", currency: "IDR", maximumFractionDigits: 0 })} stock={data.stock} startSale={data.startSale.split('T').join(' ')} endSale={data.endSale.split('T').join(' ')} onDelete={() => dispatch(deleteTicket(index))} />
                            })}
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <FormControl>
                            <FormLabel>Event Description</FormLabel>
                            <Textarea placeholder="Description" resize={'none'} h={'250px'} onChange={(e) => setDescription({ ...description, description: e.target.value })} />
                        </FormControl>
                        <FormControl mt={'15px'}>
                            <FormLabel>Terms and Condition</FormLabel>
                            <Textarea placeholder="Terms and Condition" resize={'none'} h={'250px'} onChange={(e) => setDescription({ ...description, tnc: e.target.value })} />
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
                    onClick={() => navigate('/my-event')}
                >Cancel</Button>
                <Button
                    bg={primary}
                    colorScheme={"yellow"}
                    onClick={onCreate}
                >
                    Create</Button>
            </HStack>
        </Flex>
    </>
};

export default CreateEventPage;