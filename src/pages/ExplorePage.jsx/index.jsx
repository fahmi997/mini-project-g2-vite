import React, { useState } from 'react';
import { useDisclosure, Select, Text, Flex, Button, Input, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import CardEvent from '../../components/CardEvent';
import eventData from '../../data/eventData';
import { primary } from "../../assets/color";

const itemsPerPageOptions = [20, 15, 10];

const ExplorePage = () => {
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [sortingOption, setSortingOption] = useState('startTimeAsc'); // Opsi pengurutan

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  // Fungsi untuk mengurutkan event data berdasarkan opsi pengurutan
  const sortEventData = (data, sortingOption) => {
    if (sortingOption === 'startTimeAsc') {
      return data.slice().sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
    } else if (sortingOption === 'startTimeDesc') {
      return data.slice().sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
    } else if (sortingOption === 'nameAsc') {
      return data.slice().sort((a, b) => a.eventName.localeCompare(b.eventName));
    } else if (sortingOption === 'nameDesc') {
      return data.slice().sort((a, b) => b.eventName.localeCompare(a.eventName));
    } else {
      return data;
    }
  };

  const totalPages = Math.ceil(eventData.length / itemsPerPage);
  const calculateDataIndex = (page) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return [startIndex, endIndex];
  };

  const [startIndex, endIndex] = calculateDataIndex(activePage);
  const sortedEventData = sortEventData(eventData, sortingOption); // Mengurutkan event data

  const prevPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const nextPage = () => {
    if (activePage < totalPages - 1) {
      setActivePage(activePage + 1);
    }
  };

  // Mengambil data yang sesuai dengan indeks yang dihitung
  const paginatedData = sortedEventData.slice(startIndex, endIndex);

  return (
    <div>
      <Flex direction="column" ml="auto" mr="auto" width="100%" px={'4'}>
        <Text fontWeight='bold' mt='16' ml='5%' mr='5%' w='90%' fontSize='25px' textAlign={'center'}>Explore✨</Text>
        <Flex ml={'5%'} mr={'5%'} mb={'2'} mt={'8'} flexDirection={'column'} width={'auto'}>
          <Button ref={btnRef} bg={primary} onClick={onOpen} width={'50px'} h={'30px'} mb={'2'}>
            Filter
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Filter Berdasarkan</DrawerHeader>
              <DrawerBody>
                <Input placeholder='Type here...' />
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg={primary}>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Flex width={'270px'}>
            <Text fontWeight='bold' mr='2'>Urutkan:</Text>
            <Select size='sm' value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
              <option value='startTimeAsc'>Waktu Mulai (Terdekat)</option>
              <option value='startTimeDesc'>Waktu Mulai (Terjauh)</option>
              <option value='nameAsc'>Nama Event (A-Z)</option>
              <option value='nameDesc'>Nama Event (Z-A)</option>
            </Select>
          </Flex>
        </Flex>
        <Flex ml='5%' mr='5%' mb={'16'} h='330px' width='90%' height='auto' flexWrap='wrap'>
          {paginatedData.map((event, index) => (
            <CardEvent key={index} {...event} />
          ))}
        </Flex>
        <Flex justifyContent="center" alignItems="center" ml="5%" mr="5%" mb="6" flexDirection={'column'} gap={'8'}>
          <Flex>
            <Button onClick={prevPage} disabled={activePage === 0} bg={primary} w={'auto'} mr={'2'}>
              Previous
            </Button>
            <Text mt={'2'}>{`${activePage + 1} dari ${Math.ceil(eventData.length / itemsPerPage)}`}</Text>
            <Button ml={'2'} onClick={nextPage} disabled={activePage === Math.ceil(eventData.length / itemsPerPage) - 1} bg={primary}>
              Next
            </Button>
          </Flex>
        </Flex>
        <Select
          m={'auto'}
          w={'70px'}
          mb={'8'}
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))
          }>
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
    </div>
  );
}

export default ExplorePage;
