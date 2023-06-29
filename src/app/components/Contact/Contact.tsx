"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="bg-blue-700 text-white p-4 flex  justify-center">
      <div className="w-[70%] flex items-center justify-between">
        <span>BE IN TOUCH WITH US</span>

        <div>
          <input
            className="p-2 border-none outline-none rounded-l-lg"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="p-2 rounded-r-lg text-white bg-gray-700 border-none">
            JOIN US
          </button>
        </div>
        <div className=" flex gap-2">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
