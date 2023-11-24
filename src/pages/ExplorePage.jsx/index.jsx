import React, { useState, useEffect } from 'react';
import { useDisclosure, Select, Text, Flex, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import CardEventExplorePage from '../../components/CardEventExplorePage';
import { primary } from "../../assets/color";
import BottomBox from '../../components/BottomBox';
import FooterBottom from '../../components/FooterBottom';
import FooterMain from '../../components/FooterMain';
import Pagination from '../../components/Pagination';
import API_CALL from '../../helper';

const itemsPerPageOptions = [4, 8, 12];

const ExplorePage = () => {
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [sortingOption, setSortingOption] = useState('startTimeAsc');
  const [eventData, setEventData] = useState([]);
  const [cities, setCities] = useState([]);
  const [method, setMethod] = useState([]);
  const [type, setType] = useState([]);
  const [categories, setCategories] = useState([]);
  const [province, setProvince] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCities, setSelectedCities] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  useEffect(() => {
    API_CALL
      .get(`/event`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    API_CALL
      .get(`/event/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    API_CALL
      .get(`/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    API_CALL
      .get(`/event/provinces`)
      .then((response) => {
        setProvince(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(province);

  const sortEventData = (data, sortingOption) => {
    if (sortingOption === 'startTimeAsc') {
      return data.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    } else if (sortingOption === 'startTimeDesc') {
      return data.slice().sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (sortingOption === 'nameAsc') {
      return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === 'nameDesc') {
      return data.slice().sort((a, b) => b.name.localeCompare(a.name));
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
  const sortedEventData = sortEventData(eventData, sortingOption);

  const applyFilters = (event) => {
    // Pastikan selectedProvince adalah string
    const selectedProvinceId = Number(selectedProvince);

    // Dapatkan ID kota dari kolom cityId dalam tabel events
    const cityId = event.cityId;

    // Gunakan ID kota untuk mencari baris terkait dalam tabel cities
    const city = cities.find((city) => city.id === cityId);

    // Jika city tidak ditemukan, kembalikan false
    if (!city) {
      return false;
    }

    // Dapatkan nilai provId dari baris cities
    const provId = city.provId;

    // Gunakan nilai provId untuk mencari baris terkait dalam tabel provinces
    const provinceInArray = province.find((prov) => prov.id === provId);

    // Jika provinsi tidak ditemukan, kembalikan false
    if (!provinceInArray) {
      return false;
    }

    // Dapatkan ID provinsi
    const provinceId = provinceInArray.id;

    console.log('Event:', event);
    console.log('Selected Type:', selectedType);

    // Gunakan ID provinsi untuk memfilter event
    if (
      (!selectedCategory || event.categoryId === Number(selectedCategory)) &&
      (!selectedProvince || provinceId === selectedProvinceId) &&
      (!selectedCities || event.cityId === Number(selectedCities)) &&
      (!selectedMethod || event.method.toLowerCase() === selectedMethod.toLowerCase()) &&
      (!selectedType || event.type.toLowerCase() === selectedType.toLowerCase())

    ) {
      return true;
    }

    // Jika tidak ada filter yang dipilih, tampilkan semua event
    return !selectedCategory && !selectedProvince && !selectedCities && !selectedMethod && !selectedType;
  };


  const paginatedFilteredData = sortedEventData
    .slice(startIndex, endIndex)
  const prevPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
      window.scrollTo(0, 0);

      // Sembunyikan tombol "Previous" jika kembali ke halaman pertama
      if (activePage - 1 === 0) {
        setHideLeft(true);
        console.log('Hide Left:', true);
      } else {
        // Pastikan tombol "Next" selalu tampil setelah kembali ke halaman apapun
        setHideLeft(false);
        console.log('Hide Right:', false);
      }
    }
  };


  const nextPage = () => {
    if (activePage < totalPages - 1) {
      setActivePage(activePage + 1);
      window.scrollTo(0, 0);

      // Sembunyikan tombol "Next" jika mencapai halaman terakhir
      if (activePage + 1 === totalPages - 1) {
        setHideRight(true);
        console.log('Hide Right:', true);
      }

      // Pastikan tombol "Previous" selalu tampil setelah pindah ke halaman apapun
      setHideLeft(false);
      console.log('Hide Left:', false);
    }
  };





  return (
    <div>
      <Flex direction="column" ml="auto" mr="auto" width="100%" >
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
                <Select
                  variant="flushed"
                  placeholder="Kategori"
                  size="md"
                  mb={'4'}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>

                <Select
                  variant="flushed"
                  placeholder="Provinsi"
                  size="md"
                  mb={'4'}
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  {province.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </Select>

                <Select
                  variant="flushed"
                  placeholder="Kota"
                  size="md"
                  mb={'4'}
                  value={selectedCities}
                  onChange={(e) => setSelectedCities(e.target.value)}
                >
                  {cities.map((cities) => (
                    <option key={cities.id} value={cities.id}>
                      {cities.name}
                    </option>
                  ))}
                </Select>

                <Select
                  variant="flushed"
                  placeholder="Metode"
                  size="md"
                  mb={'4'}
                  value={selectedMethod}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                >
                  <option >Online</option>
                  <option >Offline</option>
                </Select>

                <Select
                  variant="flushed"
                  placeholder="Tipe"
                  size="md"
                  mb={'4'}
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>Gratis</option>
                  <option >Berbayar</option>
                </Select>

              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg={primary} onClick={() => { onClose(); }} >
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Flex width={'270px'}>
            <Text fontWeight='bold' mr='2'mb={'4'}>Urutkan:</Text>
            <Select size='sm' value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
              <option value='startTimeAsc'>Waktu Mulai (Terdekat)</option>
              <option value='startTimeDesc'>Waktu Mulai (Terjauh)</option>
              <option value='nameAsc'>Nama Event (A-Z)</option>
              <option value='nameDesc'>Nama Event (Z-A)</option>
            </Select>
          </Flex>
        </Flex>
        <Flex ml='5%' mr='5%' mb={'16'} h='330px' width='90%' height='auto' flexWrap='wrap'>
          {paginatedFilteredData.map((event, index) => (
            <CardEventExplorePage key={index} {...event} isExplorePage={true} />
          ))}
        </Flex>
        <Flex justifyContent="center" alignItems="center" ml="5%" mr="5%" mb="6" flexDirection={'column'} gap={'8'}>
          <Flex>
            <Button onClick={prevPage} disabled={hideLeft} bg={primary} w={'auto'} mr={'2'}>
              Previous
            </Button>
            <Text mt={'2'}>{`${activePage + 1} dari ${Math.ceil(eventData.length / itemsPerPage)}`}</Text>
            <Button ml={'2'} onClick={nextPage} disabled={hideRight} bg={primary}>
              Next
            </Button>
          </Flex>
        </Flex>
        <Select
          ml={'0'}
          width={'65px'}
          m={'auto'}
          mb={'16'}
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
      <FooterMain />
      <FooterBottom />
      <BottomBox />
    </div>
  );
}

export default ExplorePage;
