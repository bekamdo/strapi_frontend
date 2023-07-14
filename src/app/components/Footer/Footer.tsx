import Image from "next/image";
import React from "react";
import Logo from "/public/images/payment.png";

const Footer = () => {
  return (
    <footer className="mt-[100px] mr-[200px] mb-5 ml-[200px]">
      <div className="flex gap-12">
        <div className="hidden md:flex-1 md:flex md:flex-col md:gap-2 md:text-justify md:text-sm">
          <h1 className="text-lg font-bold text-gray-700">Categories</h1>
          <span className="text-gray-500">Women</span>
          <span className="text-gray-500">Men</span>
          <span className="text-gray-500">Shoes</span>
          <span className="text-gray-500">Accessories</span>
          <span className="text-gray-500">New Arrivals</span>
        </div>
        <div className="hidden md:flex-1 md:flex md:flex-col md:gap-2 md:text-justify md:text-sm">
          <h1 className="text-lg font-bold gray-700">Links</h1>
          <span className="text-gray-500">FAQ</span>
          <span className="text-gray-500">Pages</span>
          <span className="text-gray-500">Stores</span>
          <span className="text-gray-500">Compare</span>
          <span className="text-gray-500">Cookies</span>
        </div>
        <div className="hidden md:flex-1 md:flex md:flex-col  md:gap-2 md:text-justify md:text-sm">
          <h1 className="text-lg font-bold gray-700">About</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </span>
        </div>
        <div className="hidden md:flex-1 md:flex md:flex-col md:gap-2 md:text-justify md:text-sm">
          <h1 className="text-lg font-bold gray-700">Contact</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </span>
        </div>
      </div>
      <div className="hidden md:flex  md:justify-between md:mt-10">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-blue-700  font-bold text-md">Ben's store</span>

          <span className="text-xs font-light text-gray-400 ">
            ©Copyright 2023.All Rights Reserved
          </span>
        </div>
        <div className="hidden md:inline-block">
          <Image
            src={Logo}
            alt="payment logo"
            className="h-10 object-contain"
          />
        </div>
      </div>
      <div className=" w-full md:hidden">
        <span className="text-xs  w-full font-light text-gray-400 ">
          ©Copyright 2023.All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
