import { Card, Image, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_CALL from "../../helper";
import React, { useState, useEffect } from 'react';

const CardEvent = (props) => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [columnCount, setColumnCount] = useState(4);

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
    // Lakukan pengonversian tanggal saat eventData berubah
    if (eventData) {
      setEventData({
        ...eventData,
        startDate: formatDateToIndonesian(eventData.startDate),
        endDate: formatDateToIndonesian(eventData.endDate),
        // Tambahan pengonversian tanggal lainnya sesuai kebutuhan
      }, [props.startDate, props.endDate]);
    }
  }, [eventData]);


  return (
    <>
      <Card
        key={props.index}
        minWidth={"230px"}
        maxWidth={"230px"}
        height={"270px"}
        boxShadow={"md"}
        bgColor={"white"}
        _hover={{ boxShadow: "xl" }}
        mr={"4"}
        mt={"5"}
        onClick={handleCardClick}
        cursor={'pointer'}
      >
        <Image height={'115px'} width={'230px'} objectFit={'cover'} src={props.image} />

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
    </>
  );
};

export default CardEvent;
