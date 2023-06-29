"use client";

import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data: string[] = [
    "https://images.pexels.com/photos/4068320/pexels-photo-4068320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11560984/pexels-photo-11560984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-[calc(100vh_-_80px)] w-screen overflow-x-hidden relative">
      <div
        className="w-[300vw] flex flex-row  h-full transition-all duration-[1s] ease-in"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="w-screen relative ">
          <Image
            src={data[0]}
            alt="data-1"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="w-screen h-full relative">
          <Image
            src={data[1]}
            alt="data-2"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="w-screen h-full relative">
          <Image
            src={data[2]}
            alt="data-3"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute flex w-fit gap-2 cursor-pointer left-0 right-0 mx-auto bottom-24">
        <div
          className="w-12 h-12 ring-1 ring-gray-100 flex items-center justify-center"
          onClick={prevSlide}
        >
          <WestOutlinedIcon className="text-gray-100" />
        </div>
        <div
          className="w-12 h-12 ring-1 ring-gray-100 flex items-center justify-center"
          onClick={nextSlide}
        >
          <EastOutlinedIcon className="text-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
