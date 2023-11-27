import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardEvent from "../../components/CardEvent";
import Carousel from "../../components/Carousel";
import { useState, useRef, useEffect } from 'react';
import ButtonScroll from "../../components/ButtonScroll";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEventData } from "../../redux/slices/eventSlice";
import BottomBox from "../../components/BottomBox";
import FooterMain from "../../components/FooterMain";
import FooterBottom from "../../components/FooterBottom";
import API_CALL from "../../helper";

const LandingPage = () => {

  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrollableGridRef = useRef(null);

  const [hideLeft1, setHideLeft1] = useState(false);
  const [hideRight1, setHideRight1] = useState(false);
  const [scrollX1, setScrollX1] = useState(0);
  const scrollableGridRef1 = useRef(null);

  const [hideLeft2, setHideLeft2] = useState(false);
  const [hideRight2, setHideRight2] = useState(false);
  const [scrollX2, setScrollX2] = useState(0);
  const scrollableGridRef2 = useRef(null);

  const [hideLeft3, setHideLeft3] = useState(false);
  const [hideRight3, setHideRight3] = useState(false);
  const [scrollX3, setScrollX3] = useState(0);
  const scrollableGridRef3 = useRef(null);

  const [hideLeft4, setHideLeft4] = useState(false);
  const [hideRight4, setHideRight4] = useState(false);
  const [scrollX4, setScrollX4] = useState(0);
  const scrollableGridRef4 = useRef(null);

  const [hideLeft5, setHideLeft5] = useState(false);
  const [hideRight5, setHideRight5] = useState(false);
  const [scrollX5, setScrollX5] = useState(0);
  const scrollableGridRef5 = useRef(null);


  const eventData = useSelector((state) => {
    return state.eventSlice.eventData
  });

  console.log(eventData);

  const dispatch = useDispatch();

  const scrollRight = (index) => {
    const newScrollX = getNewScrollX(index, 'right');
    const maxScroll = 230 * (eventData.length - 1);

    updateStateAndTransform(index, newScrollX, maxScroll);
  };

  const scrollLeft = (index) => {
    const newScrollX = getNewScrollX(index, 'left');

    updateStateAndTransform(index, newScrollX);
  };
  const getNewScrollX = (index, direction) => {
    const currentScrollState = getScrollState(index);
    const scrollIncrement = 230;

    if (direction === 'right') {
      return currentScrollState - scrollIncrement;
    } else if (direction === 'left') {
      return currentScrollState + scrollIncrement;
    }

    return currentScrollState;
  };

  const getScrollState = (index) => {
    switch (index) {
      case 1:
        return scrollX1;
      case 2:
        return scrollX2;
      case 3:
        return scrollX3;
      case 4:
        return scrollX4;
      case 5:
        return scrollX5;
      default:
        return scrollX;
    }
  };


  const getSetHideLeftFunc = (index) => {
    switch (index) {
      case 1:
        return setHideLeft1;
      case 2:
        return setHideLeft2;
      case 3:
        return setHideLeft3;
      case 4:
        return setHideLeft4;
      case 5:
        return setHideLeft5;
      default:
        return setHideLeft;
    }
  };

  const getSetHideRightFunc = (index) => {
    switch (index) {
      case 1:
        return setHideRight1;
      case 2:
        return setHideRight2;
      case 3:
        return setHideRight3;
      case 4:
        return setHideRight4;
      case 5:
        return setHideRight5;
      default:
        return setHideRight;
    }
  };

  const updateState = (index, newScrollX) => {
    switch (index) {
      case 1:
        setScrollX1(newScrollX);
        break;
      case 2:
        setScrollX2(newScrollX);
        break;
      case 3:
        setScrollX3(newScrollX);
        break;
      case 4:
        setScrollX4(newScrollX);
        break;
      case 5:
        setScrollX5(newScrollX);
        break;
      default:
        setScrollX(newScrollX);
    }
  };

  const updateStateAndTransform = (index, newScrollX, maxScroll) => {
    const setHideLeftFunc = getSetHideLeftFunc(index);
    const setHideRightFunc = getSetHideRightFunc(index);

    if (newScrollX <= -maxScroll) {
      setHideRightFunc(true);
      setHideLeftFunc(false);
    } else if (newScrollX >= 0) {
      setHideRightFunc(false);
      setHideLeftFunc(true);
    } else {
      setHideRightFunc(false);
      setHideLeftFunc(false);
    }

    updateState(index, newScrollX);
    updateTransform(index, newScrollX);
  };

  const updateTransform = (index, newScrollX) => {
    const gridRef = getScrollableGridRef(index);
    if (gridRef && gridRef.current) {
      const transformValue = `translateX(${newScrollX}px)`;
      gridRef.current.style.transform = transformValue;
    }
  };

  const getScrollableGridRef = (index) => {
    switch (index) {
      case 1:
        return scrollableGridRef1;
      case 2:
        return scrollableGridRef2;
      case 3:
        return scrollableGridRef3;
      case 4:
        return scrollableGridRef4;
      case 5:
        return scrollableGridRef5;
      default:
        return scrollableGridRef;
    }
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
      .then((response) => {
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
            ref={scrollableGridRef1}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX1}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft1} hideRight={hideRight1} />
        </Flex>

        <Box mt={'16'} backgroundColor={'#202020'} height={'200px'} width={'100%'} >
        </Box>

        <Box>
          <Text fontWeight={'bold'} mt={'16'} ml={'5%'} mr={'5%'} w={'90%'} fontSize={'25px'}>Healing Dulu Yuk!</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef2}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX2}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft2} hideRight={hideRight2} />
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
            ref={scrollableGridRef3}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX3}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft3} hideRight={hideRight3} />
        </Flex>

        <Box mt={'16'} ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} w={'90%'} fontSize={'25px'}>Nikmati Keseruan di Minggu Ini</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX4}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft4} hideRight={hideRight4} />
        </Flex>

        <Box mt={'16'} ml={'5%'} mr={'5%'} >
          <Text fontWeight={'bold'} w={'90%'} fontSize={'25px'}>Festival Fair</Text>
        </Box>

        <Flex ml="5%" mr="5%" mb="6" h="330px" position="relative" overflow="hidden">
          <div
            ref={scrollableGridRef5}
            style={{
              display: 'flex',
              flexDirection: 'row',
              transform: `translateX(${scrollX5}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {eventData.map((event, index) => (
              <CardEvent key={index} {...event} />
            ))}
          </div>

          <ButtonScroll scrollLeft={scrollLeft} scrollRight={scrollRight} hideLeft={hideLeft5} hideRight={hideRight5} />
        </Flex>

      </Flex>
      <FooterMain />
      <FooterBottom />
      <BottomBox />

    </>
  );
}

export default LandingPage;
