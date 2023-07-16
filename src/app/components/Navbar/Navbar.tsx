"use client";
import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import type { RootState } from "./../../redux/store";
import En from "/public/images/en.png";
import Image from "next/image";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const products = useSelector((state: RootState) => state.cart.product);
  return (
    <>
      <nav className="h-20 relative">
        <div className="py-2 px-8 flex items-center justify-between">
          {/* firstItem */}
          <div className="hidden md:flex item-center gap-4">
            <div className="hidden lg:flex items-center">
              <Image src={En} alt="flag" width={30} height={30} />
              <KeyboardArrowDownIcon />
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>

            <div className="flex items-center text-lg">
              <Link href="/products/5">Lab Coats</Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/products/6">Medical Devices </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/products/4">Stethoscopes </Link>
            </div>
          </div>
          {/* secondItem */}
          <div className="flex justify-between md:flex  items-center  text-xl">
            <Link href="/">BENS STORE</Link>
          </div>
          <div className="flex gap-10">
            <div
              className="md:hidden cursor-pointer  relative"
              onClick={() => setOpen(!open)}
            >
              <ShoppingCartOutlinedIcon />
              <span className="text-[12px] w-5 h-5 rounded-[50%] bg-blue-700 text-white absolute right-[-10px] top-[-10px] flex items-center justify-center">
                {products.length}
              </span>
            </div>
            <div
              className="md:hidden items-center cursor-pointer"
              onClick={() => setOpenModal(!openModal)}
            >
              {openModal ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>

          {/* ThirdItem */}

          <div className="hidden md:flex item-center gap-6">
            <div className="flex items-center text-lg">
              <Link href="/products/1">Women </Link>
            </div>
            <div className="flex items-center text-lg">
              <Link href="/products/2">Men </Link>
            </div>
            <div className="flex items-center text-lg ">
              <Link href="/products/3">Bags </Link>
            </div>
            <div className="flex items-center  gap-4 text-gray-500 cursor-pointer">
              <div className="hidden lg:flex gap-4 items-center">
                <SearchIcon />
                <PersonOutlineOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className=" relative" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className="text-[12px] w-5 h-5 rounded-[50%] bg-blue-700 text-white absolute right-[-10px] top-[-10px] flex items-center justify-center">
                  {products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart />}
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={`absolute z-[999] ${
              !openModal ? "hidden" : "flex"
            } flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md transition-all duration-200 ease-in-out`}
          >
            <Link href="/products/1">Women </Link>
            <Link href="/products/2">Men </Link>
            <Link href="/products/3">Bags </Link>
            <Link href="/products/5">Lab Coats</Link>
            <Link href="/products/6">Medical Devices </Link>
            <Link href="/products/4">Stethoscopes </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
