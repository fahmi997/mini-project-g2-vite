import { Box, Button, Flex, Text, HStack, Image, Input, FormLabel, Select, Textarea, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react";
import { primary, primaryActive } from "../assets/color";

const CreateEventPage = () => {


    return <>
        <Flex shadow={'xl'} w={'100%'} h={'125px'} p={'25px 0'} justify={'center'} align={'center'}>
            <Image src="./logoblack1.svg" objectFit={"contain"} alt="logo" w={"100%"} h={"100%"} />
        </Flex>

        {/* STEPPER */}
        <Flex
            border={'1px'}
            borderColor={'gray.200'}
            boxShadow={'md'}
            flexDirection={'column'}
            mt={'10%'}
            ml={'auto'}
            mr={'auto'}
            mb={{ base: '150px' }}
            borderRadius={'10px'}
            p={'20px 15px'}
            w={{ base: '80%', md: '70%', xl: '60%' }}
        >
            <Text as='b' textAlign={'center'} fontSize={{base: '18px',lg:'26px'}} mb={'20px'}> CREATE AN EVENT</Text>

            <Accordion allowToggle>
                {/* EVENT INFORMATION */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Event Information
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <FormLabel>Event Name</FormLabel>
                        <Input type="text" />
                        <FormLabel>Category</FormLabel>
                        <Select>
                            <option style={{ display: 'none' }}>Select Category</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                            <option value="4">Category 4</option>
                            <option value="5">Category 5</option>
                        </Select>
                        <FormLabel>Event Organizer</FormLabel>
                        <Input type="text" />
                        <FormLabel>Date & Time</FormLabel>
                        <Input type="datetime-local" />
                        <FormLabel>Province</FormLabel>
                        <Input type="text" />
                        <FormLabel>City</FormLabel>
                        <Input type="text" />
                        <FormLabel>Address</FormLabel>
                        <Input type="text" />
                        <FormLabel>Venue</FormLabel>
                        <Input type="text" />
                        <FormLabel>Event Method</FormLabel>
                        <Select>
                            <option style={{ display: 'none' }}>Select Method</option>
                            <option value="2">Online</option>
                            <option value="3">Offline</option>
                            <option value="4">Hybrid</option>
                        </Select>
                    </AccordionPanel>
                </AccordionItem>

                {/* EVENT DESCRIPTION */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Descriptions
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <FormLabel>Event Descriptions</FormLabel>
                        <Textarea />
                        <FormLabel>Terms and Conditions</FormLabel>
                        <Textarea />
                    </AccordionPanel>
                </AccordionItem>

                {/* TICKETING */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Ticketing
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

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