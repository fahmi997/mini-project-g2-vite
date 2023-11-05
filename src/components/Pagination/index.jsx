import React, { useState } from 'react';
import { useDisclosure } from "@chakra-ui/react";
import { Flex, Text, Select, Button, Input, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import CardEvent from '../CardEvent';
import eventData from '../../data/eventData';
import { primary, primaryBgColor } from "../../assets/color";

const itemsPerPageOptions = [4, 8, 12, 16];

const Pagination = () => {
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  // Menghitung total halaman berdasarkan jumlah item per halaman
  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  // Fungsi untuk menghitung indeks data yang akan ditampilkan di halaman aktif
  const calculateDataIndex = (page) => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return [startIndex, endIndex];
  };

  const [startIndex, endIndex] = calculateDataIndex(activePage);

  // Mengambil data yang sesuai dengan indeks yang dihitung
  const paginatedData = eventData.slice(startIndex, endIndex);
  console.log(paginatedData);

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

  return (
    <div>
      <Text fontWeight='bold' mt='16' ml='5%' mr='5%' w='90%' fontSize='25px'>Explore</Text>

      <Flex ml='5%' mr='5%' mb='2' mt='2' h='50px' width='90%' justifyContent='space-between'>
        <Button ref={btnRef} bg={primary} onClick={onOpen} >
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

        <Flex>
          <Text fontWeight='bold' mr='2'>Urutkan:</Text>
          <Select size='sm'>
          <option value='startTimeAsc'>Waktu Mulai (Terdekat)</option>
          <option value='startTimeDesc'>Waktu Mulai (Terjauh)</option>
          <option value='nameAsc'>Nama Event (A-Z)</option>
          <option value='nameDesc'>Nama Event (Z-A)</option>
        </Select>
        </Flex>
      </Flex>

      <Flex ml='5%' mr='5%' mb='6' h='330px' width='90%' height='auto' flexWrap='wrap'>
        {paginatedData.map((event, index) => (
          <CardEvent key={index} {...event} />
        ))}
      </Flex>

      <Flex justifyContent="center" alignItems="center" ml="5%" mr="5%" mb="6" gap={'12'}>
        <Select
          ml={'0'}
          width={'auto'}
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        
        <Button onClick={prevPage} disabled={activePage === 0} bg={primary}>
          Previous
        </Button>
        <Text>{`${activePage + 1} dari ${Math.ceil(eventData.length / itemsPerPage)}`}</Text>
        <Button onClick={nextPage} disabled={activePage === Math.ceil(eventData.length / itemsPerPage) - 1} bg={primary}>
          Next
        </Button>
      </Flex>
    </div>
  );
}

export default Pagination;
