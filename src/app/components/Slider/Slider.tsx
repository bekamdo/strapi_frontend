"use client";

import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data: string[] = [
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1637841930768-91940cb7e479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-[calc(100vh_-_80px)] w-screen overflow-x-hidden">
      <div
        className="w-[300vw] flex  h-full transition-all duration-[1s] ease-in"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="w-screen relative h-full ">
          <Image
            src={data[0]}
            alt="data-1"
            fill={true}
            className="object-cover object-center"
          />
        </div>
        <div className="w-screen relative h-full">
          <Image
            src={data[1]}
            alt="data-2"
            fill={true}
            className="object-cover object-center"
          />
        </div>
        <div className="w-screen relative h-full">
          <Image
            src={data[2]}
            alt="data-3"
            fill={true}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute flex  w-fit gap-3 cursor-pointer left-0 right-0 mx-auto bottom-24">
        <div
          className="w-12 h-12 rounded-[50%]  ring-1 ring-gray-100 flex items-center justify-center"
          onClick={prevSlide}
        >
          <WestOutlinedIcon className="text-gray-100" />
        </div>
        <div
          className="w-12 h-12 ring-1 rounded-[50%]  ring-gray-100 flex items-center justify-center"
          onClick={nextSlide}
        >
          <EastOutlinedIcon className="text-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
