import { Card, Flex, Image, Stack, CardBody, Heading, Text, Divider, Icon, Box } from "@chakra-ui/react";
import { MdOutlineCalendarMonth, MdAccessTime, MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const EventCard = (props) => {
    return <>
        <Card
            direction={'column'}
            overflow='hidden'
            variant='outline'
            maxW={'md'}
            maxH={'xl'}
        >

            <Image
                // objectFit='cover'
                fit={'fill'}
                // maxW={'100%'}
                w={'450px'}
                h={'250px'}
                // maxH={'100%'}
                // src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                src={`${import.meta.env.VITE_API_URL}/${props.image}`}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Stack>
                        <Heading size='md'>{props.name}</Heading>
                        <Text color={'orange.600'}>{props.category}</Text>
                    </Stack>
                    <Divider border={'1px'} borderColor={'#DEDEDE'} m={'5px 0px'} />
                    <Stack>
                        <Text as={'b'} >Date & Time</Text>
                        <Flex direction={'column'} gap={'1'}>
                            <Flex>
                                <Icon as={MdOutlineCalendarMonth} boxSize={'5%'} />
                                <Text ml={'10px'}>{props.date}</Text>
                            </Flex>
                            <Flex>
                                <Icon as={MdAccessTime} boxSize={'5%'} />
                                <Text ml={'10px'}>{props.time}</Text>
                            </Flex>
                        </Flex>
                    </Stack>
                    <Stack mt={'10px'}>
                        <Text as={'b'} >Venue & Location</Text>
                        <Flex>
                            <Icon as={IoLocationOutline} boxSize={'5%'} />
                            <Text ml={'10px'}>{props.location}</Text>
                        </Flex>
                    </Stack>
                    <Flex mt={'10px'} justify={'end'} gap={'2'}>
                        <Icon as={MdModeEditOutline} boxSize={'6%'} cursor={'pointer'} onClick={() => console.log('Edit Clicked', props.image)} />
                        <Icon as={MdDelete} boxSize={'6%'} color={'red'} cursor={'pointer'} onClick={props.onDelete}/>
                    </Flex>
                </CardBody>
            </Stack>
        </Card>
    </>
}

export default EventCard;