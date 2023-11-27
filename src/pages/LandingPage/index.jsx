import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardEvent from "../../components/CardEvent";
import Carousel from "../../components/Carousel";
import { useState, useRef, useEffect } from 'react';
import ButtonScroll from "../../components/ButtonScroll";
import { useSelector } from "react-redux";
// import { selectEventData } from "../../redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { setEventData } from "../../redux/slices/eventSlice";
import BottomBox from "../../components/BottomBox";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";
import API_CALL from "../../helper";

const LandingPage = () => {
  const [scrollX, setScrollX] = useState(0);
  const scrollableGridRef = useRef(null);
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);

  const dataAccount = useSelector((state) => {
    return state.accountSlice;
  });

  const eventData = useSelector( (state) => {
    return state.eventSlice.eventData
  });

  console.log(eventData);

  const dispatch = useDispatch ();  

  const scrollRight = (index) => {
    const newScrollX = scrollX - 230;
    const maxScroll = 230 * (eventData.length - 1);

    if (newScrollX < -maxScroll) {
      setHideRight(true);
      setHideLeft(false);
    } else {
      setScrollX(newScrollX);
      setHideRight(true);
      setHideLeft(false);
    }
    scrollableGridRef.current.style.transform = `translateX(${newScrollX}px)`;
  };

  const scrollLeft = (index) => {
    const newScrollX = scrollX + 230;

    if (newScrollX > 0) {
      setHideLeft(true);
    } else {
      setScrollX(newScrollX);
      setHideLeft(true);
      setHideRight(false);
    }
    scrollableGridRef.current.style.transform = `translateX(${newScrollX}px)`;
  };

  useEffect(() => {
    if (scrollX === 0) {
      setHideLeft(true);
    } else {
      setHideLeft(false);
    }

    const maxScroll = 230 * (eventData.length - 1);

    if (scrollX === maxScroll) {
      setHideRight(true);
    } else {
      setHideRight(false);
    }
  }, [scrollX]);

  useEffect(() => {
    // Lakukan permintaan ke API untuk mengambil data acara
    API_CALL.get(`/event`)
    .then ((response) => { 
      dispatch(setEventData(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
    
  }, [dispatch]); 
  // console.log(eventData);

  return (
    <>
      <Flex display={'flex'} flexDirection={'column'} height={'auto'} >

        <Carousel />

        

        <Text fontWeight={'bold'} mt={'16'} ml={'5%'} mr={'5%'} w={'90%'} fontSize={'25px'}>Event Pilihan</Text>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft} hideRight={hideRight} />
        </Flex>

        <Box mt={'16'} backgroundColor={'#202020'} height={'200px'} width={'100%'} >
        </Box>

        <Box>
          <Text fontWeight={'bold'} mt={'16'} ml={'5%'} mr={'5%'} w={'90%'} fontSize={'25px'}>Healing Dulu Yuk!</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft} hideRight={hideRight} />
        </Flex>

        <Box mt={'16'} ml={'6%'} mr={'6%'} height={'auto'}  >
          <Image w={'100%'} height={'150px'} borderRadius={'lg'} objectFit={'cover'} src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20230916/1694851228_wsZ3Xw.jpg" />

        </Box>
        <Box mt={'16'} ml={'6%'} mr={'6%'} height={'auto'}  >
          <Image w={'100%'} height={'150px'} borderRadius={'lg'} objectFit={'cover'} src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231102/1698912373_uLDpoU.jpg" />

        </Box>

        <Box ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} mt={'16'} w={'92%'} fontSize={'25px'}>Creator Favorit</Text>

          {/* <Flex display={'flex'} overflowX={'auto'} flexDirection={'row'} mt={'4'}>
            {creatorData.map((creator, index) => (
              <CardCreatorList key={index} creatorIndex={index} />
            ))}
          </Flex> */}
        </Box>

        <Box mt={'16'} ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} w={'90%'} fontSize={'25px'}>Populer di Surabaya</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={() => scrollLeft(scrollableGridRef)} scrollRight={() => scrollRight(scrollableGridRef)} hideLeft={hideLeft} hideRight={hideRight} />
        </Flex>

        <Box mt={'16'} ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} w={'90%'} fontSize={'25px'}>Nikmati Keseruan di Minggu Ini</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft} hideRight={hideRight} />
        </Flex>

        <Box mt={'16'} ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} w={'90%'} fontSize={'25px'}>Festival Fair</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft} hideRight={hideRight} />
        </Flex>

      </Flex>
      <FooterMain/>
      <FooterBottom/>
      <BottomBox/>

    </>
  );
}

export default LandingPage;