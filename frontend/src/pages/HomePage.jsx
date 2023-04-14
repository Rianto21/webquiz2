import React, { useEffect, useState } from 'react';
import LeaderboardBar from '../components/LeaderboardBar';
import NavigationBar from '../components/NavigationBar';
import { Navigation, Pagination } from 'swiper';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SelectLanguange from '../components/Popup/SelectLanguange';
import About from '../components/About/About';

export default function HomePage() {
  const [Languange, setLanguange] = useState(false);
  const [Scoreboard, setScoreboard] = useState([]);
  const [Showabout, setShowabout] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/score').then((res) => {
      setScoreboard(res.data.data);
    });
  });

  return (
    <div className="w-full bg-neutral-200 bg-cover min-h-full  ">
      <div className=" absolute h-full w-full bg-teal-700 overflow-y-scroll">
        <NavigationBar Score={Scoreboard} />
        <div className="flex w-[90%] mx-auto justify-between items-center flex-col-reverse md:flex-row">
          <div className="my-8 md:w-[50%] w-[90%] flex flex-col md:items-start items-center">
            <h1 className="text-white 2xl:text-7xl xl:text-5xl text-3xl my-4 font-bebasneue md:text-left text-center">
              THIS IS QUIZ WEBSITE FOR LEARNING BOTH ENGLISH AND INDONESIAN LANGUAGES AT THE SAME
              TIME
            </h1>
            <div className="flex my-8 gap-x-4">
              <div
                onClick={() => setLanguange(true)}
                className="2xl:w-[15rem] xl:w-[12rem] w-[10rem] 2xl:py-2 py-1 px-2 shadow-md bg-amber-400 cursor-pointer duration-200 ease-in-out hover:bg-white hover:text-amber-400 rounded-full text-center text-white font-medium text-2xl">
                Start Quiz
              </div>
              <div
                onClick={() => {
                  setShowabout(true);
                }}
                className="2xl:w-[15rem] xl:w-[12rem] w-[10rem] 2xl:py-2 py-1 px-2 shadow-md bg-neutral-800 cursor-pointer duration-200 ease-in-out hover:bg-white hover:text-neutral-800  rounded-full text-center text-white font-medium text-2xl">
                About
              </div>
            </div>
          </div>
          <div className="my-8 md:w-[50%] w-[90%]">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-[70vh] rounded-xl overflow-hidden my-4">
              <SwiperSlide className="w-full bg-neutral-500 bg-center bg-cover bg-[url('/swiper1.jpg')]" />
              <SwiperSlide className="w-full bg-neutral-500 bg-center bg-cover bg-[url('/swiper2.jpg')]" />
              <SwiperSlide className="w-full bg-neutral-500 bg-center bg-cover bg-[url('/swiper3.jpg')]" />
            </Swiper>
          </div>
        </div>
        <div className="hidden md:block absolute bg-[url('cloud.png')] bg-cover w-[32rem] opacity-70 h-[18rem] right-0 bottom-0 z-10"></div>
        <div className="hidden md:block absolute bottom-0 right-2 bg-[url('/study.png')] bg-cover min-w-[24rem] min-h-[19rem] z-10"></div>
      </div>
      {Languange ? <SelectLanguange controller={setLanguange} /> : null}
      {Showabout ? <About controller={setShowabout} /> : null}
    </div>
  );
}
