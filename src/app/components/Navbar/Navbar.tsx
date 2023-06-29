"use client";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import En from "/public/images/en.png";
import Image from "next/image";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="h-20">
        <div className="py-2 px-8 flex justify-between">
          <div className="flex item-center gap-6">
            <div className="flex items-center">
              <Image src={En} alt="flag" width={30} height={30} />
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex items-center">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex items-center text-lg">
              <Link href="/product/1">Women </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/product/2">Men </Link>
            </div>
            <div className="flex items-center text-lg ">
              <Link href="/product/3">Children </Link>
            </div>
          </div>
          <div className="flex items-center text-xl">
            <Link href="/">BENS STORE</Link>
          </div>
          <div className="flex item-center gap-6">
            <div className="flex items-center text-lg">
              <Link href="/">HomePage </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/product/3">About </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/product/3">Children </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/product/3">Stores </Link>
            </div>
            <div className="flex items-center  gap-4 text-gray-500 cursor-pointer">
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <div className="relative" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className="text-[12px] w-5 h-5 rounded-[50%] bg-blue-700 text-white absolute right-[-10px] top-[-10px] flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart />}
      </nav>
    </>
  );
};

export default Navbar;
