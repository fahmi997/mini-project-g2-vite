const eventData = [
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231005034459.jpg",
      eventName: "THE LEGENDS 9",
      eventDate: "04 Oct 2023",
      eventPrice: "Rp 250.000",
      creatorEvent: "Prestige",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230927232153_651456a165823.jpg",
      eventName: "OMO! MARKET",
      eventDate: "11 Nov 2023",
      eventPrice: "Rp 55.000",
      creatorEvent: "OMO MARKET",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210713121124.jpg",
      eventName: "GONDOLA ANCOL",
      eventDate: "31 Dec 2023",
      eventPrice: "Rp 55.000",
      creatorEvent: "PT Karsa Surya Indonusa",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20211029070059.jpg",
      eventName: "Ice Skating @BX Rink",
      eventDate: "31 Dec 2023",
      eventPrice: "Rp 85.000",
      creatorEvent: "Powered by Loket.com",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230809074656.jpg",
      eventName: "DUFAN ANCOL",
      eventDate: "31 Dec 2023",
      eventPrice: "Rp 225.000",
      creatorEvent: "Ancol Taman Impian",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230809120014.jpg",
      eventName: "SAMUDRA ANCOL",
      eventDate: "31 Dec 2023",
      eventPrice: "Rp 70.000",
      creatorEvent: "Ancol Taman Impian",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231018134035_652f7de317be5.jpg",
      eventName: "Breaking Down Scholarship Essay!",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 99.000",
      creatorEvent: "TransforMe",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231013111104_6528c358c8929.jpg",
      eventName: "Webinar Branding 101",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 200.000",
      creatorEvent: "SP Creative House",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231018164418_652fa8f289f46.jpg",
      eventName: "Tips dan Trik Membuat Line Art and Coloring",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 97.000",
      creatorEvent: "LPK GETI",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230929171615_6516a3eff09f9.jpg",
      eventName: "Pentingnya Tetap Waras, Biarpun Mental Terus Diperas",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 50.000",
      creatorEvent: "Ibunda.id",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231021102813_6533454dbfb24.jpg",
      eventName: "ASPEK HUKUM DAN IMPEMENTASI PENDAFTARAN TANAH BEKAS HAK ADAT DI INDONESIA",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 100.000",
      creatorEvent: "BERANDA HUKUM INDONESIA",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231025064851_653857e318e91.jpg",
      eventName: "Trip Sana Sini : 28 Oktiber 2023 - 13.30",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 20.000",
      creatorEvent: "Antropologi.com",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230807125828.jpg",
      eventName: "CERITA SEBELKU oleh Raditya Dika - BATAM",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 275.000",
      creatorEvent: "ekresa",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231004115832_651cf0f8de70c.jpg",
      eventName: "Strategi Ekspor : Cara Mudah Ekspor dengan Digimal Marketing di UMKM",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 69.000",
      creatorEvent: "Skill Bridge",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231001113914.jpg",
      eventName: "ALL YOU CAN FUN - 3 November 2023",
      eventDate: "03 Nov 2023",
      eventPrice: "Rp 150.000",
      creatorEvent: "G-town x Rimago live ",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231001010917_6518644d96145.jpg",
      eventName: "METAMORPHOSIS FEXTIVAL IN JEMBER",
      eventDate: "01 Oct - 31 Oct 2023",
      eventPrice: "Rp 160.000",
      creatorEvent: "PT METAMORPHOSIS PRIMA SEJAHTERA",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230911212227_64ff22a3ef353.jpg",
      eventName: "AN INTIMATE CONCERT WITH GIGI",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 750.000",
      creatorEvent: "TITAN CENTER DAN KYUPRO",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231019011430.jpg",
      eventName: "Pengabdi Pesta Vol.3",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 325.000",
      creatorEvent: "New Live Entertaiment",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230901124356_64f17a1c3e9cd.jpg",
      eventName: "INDONESIA UNITED IN WORSHIP",
      eventDate: "28 Oct 2023",
      eventPrice: "Rp 164.000",
      creatorEvent: "PRESTIGE PROMOTIONS",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922190505_650d82f14946c.jpg",
      eventName: "VOL 05 SEWAKTU BERMUSIK DI TAMAN",
      eventDate: "28 Oct - 29 Oct 2023",
      eventPrice: "Rp 149.000",
      creatorEvent: "Katarsis",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230714105207.png",
      eventName: "ROCK IN CELEBES",
      eventDate: "28 Oct - 29 Oct 2023",
      eventPrice: "Rp 265.000",
      creatorEvent: "ROCK IN CELEBES",
    },
    {
      image: "https://bbo.co.id/images/modules/bigbang/event/226/261222-tulus-bbo-slider-02.jpg",
      eventName: "TULUS tur Manusia 2023",
      eventDate: "29 Dec 2023",
      eventPrice: "Rp 300.000",
      creatorEvent: "TEMAN GAJAH",
    },
    {
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F547315799%2F143238831910%2F1%2Foriginal.20230626-143409?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1536%2C768&s=a16fa66be6cf33186a13edc7cffe5623",
      eventName: "Begin Edu Fair Surabaya (Indonesia)",
      eventDate: "19 Nov 2023",
      eventPrice: "Free",
      creatorEvent: "JM Marriott Hotel surabaya",
    },
    {
      image: "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231011041833.png",
      eventName: "PAMERAN IFBC 2023 ICE BSD - Tangerang",
      eventDate: "03 Nov - 05 Nov 2023",
      eventPrice: "Rp 50.000",
      creatorEvent: "Neo Expo Promotion",
    },
    
  ];

  export default eventData;