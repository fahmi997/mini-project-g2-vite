import { Card, Image, Box, Text } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import API_CALL from "../../helper";

const CardEventExplorePage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [eventData, setEventData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [columnCount, setColumnCount] = useState(4);

    const handleClick = () => {
        navigate(`/event/${props.id}`);
    };

    const handleCardClick = async () => {
        try {
            const response = await API_CALL.get(`/event`);
            setEventData(response.data);
            setIsModalOpen(true);
            navigate(`/event/${props.id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const formatDateToIndonesian = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const fullDate = new Date(dateString).toLocaleDateString('id-ID', options);
        const threeLetterMonth = getThreeLetterMonth(dateString);

        return `${fullDate.slice(0, 2)} ${threeLetterMonth} ${fullDate.slice(-4)}`;
    };

    const getThreeLetterMonth = (dateString) => {
        const options = { month: 'long' };
        const fullMonth = new Date(dateString).toLocaleDateString('id-ID', options);
        return fullMonth.slice(0, 3);
    };

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
            if (window.innerWidth < 480) {
                setColumnCount(1);
            } else if (window.innerWidth >= 480 && window.innerWidth <= 768){
                setColumnCount(2);
            }else {
                setColumnCount(4);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (eventData) {
            setEventData({
                ...eventData,
                startDate: formatDateToIndonesian(eventData.startDate),
                endDate: formatDateToIndonesian(eventData.endDate),
            });
        }
    }, [eventData]);

    // Set lebar kartu sesuai jumlah kolom
    const cardWidth = `${(containerWidth / columnCount) - 10}px`;

    return (
        <Card
            width={{base : 'auto', md: 'cardWidth'}}
            key={props.index}
            height={"270px"}
            boxShadow={"md"}
            bgColor={"white"}
            _hover={{ boxShadow: "xl" }}
            onClick={handleCardClick}
            cursor={'pointer'}
            mb={'4'}
            ml={'2'}
            flex={`0 0 calc(${100 / columnCount}% - 10px)`} // Flex basis set to 25%, margin included
        >
            <Image height={'115px'} objectFit={'cover'} src={props.image} />

            <Box ml={"3"}>
                <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' mt={"5"} mr={'4'}>{props.name}</Text>

                {props.startDate === props.endDate ? (
                    <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' fontWeight={'light'} mt={"1"} mr={'4'}>
                        {formatDateToIndonesian(props.startDate)}
                    </Text>
                ) : (
                    <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' fontWeight={'light'} mt={"1"} mr={'4'}>
                        {formatDateToIndonesian(props.startDate)} - {formatDateToIndonesian(props.endDate)}
                    </Text>
                )}

                <Text fontWeight={'bold'} mt={"1"} mr={'4'}>{props.eventPrice}</Text>

                <Box mt={"3"} bgColor={"black"} width={"auto"} border={"1px #DCDCDC solid"} mr={"3"} />

                <Text textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow='hidden' ml={"1"} mt={"2"} mr={'4'}>{props.creatorEvent}</Text>
            </Box>
        </Card>
    );
};

export default CardEventExplorePage;
