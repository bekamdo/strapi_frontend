"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    " https://images.pexels.com/photos/50676/coffee-mugs-t-brown-drink-50676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="px-5 py-10 flex gap-10 h-[80vh]">
      {/* left */}
      <div className=" h-full flex-1 flex gap-3 w-full">
        <div className="h-full w-full flex-1 flex flex-col gap-2">
          <div className="relative h-[150px] w-full">
            <Image
              src={images[0]}
              fill={true}
              alt=""
              className="object-cover cursor-pointer"
              onClick={(e) => setSelectedImage(0)}
            />
          </div>
          <div className="relative h-[150px] w-full">
            <Image
              src={images[1]}
              fill={true}
              alt=""
              className="object-cover cursor-pointer"
              onClick={(e) => setSelectedImage(1)}
            />
          </div>
        </div>
        <div className="flex-[5] max-h-800px w-full ">
          <div className="relative h-full w-full">
            <Image
              src={images[selectedImg]}
              fill={true}
              alt=""
              className="object-cover cursor-pointer"
              onClick={(e) => setSelectedImage(0)}
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1  flex flex-col gap-5 ">
        <h1 className="text-gray-500 text-xl font-medium capitalize">Title</h1>
        <span className="text-2xl text-blue-700 font-medium">$ 199</span>
        <p className="text-lg font-light text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut delectus
          quod, adipisci non magnam doloremque provident repellat. Ad dolorum,
          velit ex expedita quo saepe reprehenderit quos ducimus excepturi ipsa
          ea, incidunt veritatis nam explicabo accusamus, ut qui delectus
          numquam suscipit?
        </p>
        {/* quantity */}
        <div className="flex items-center gap-2">
          <button
            className="h-[50px] w-[50px] border-none flex items-center justify-center cursor-pointer bg-gray-200 "
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="h-[50px] w-[50px] border-none flex items-center justify-center cursor-pointer bg-gray-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        {/* add to cart button */}
        <button
          className="w-[250px] p-2 bg-blue-700 text-white flex items-center justify-center gap-5
        cursor-pointer border-none font-medium"
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        {/* links */}
        <div className="flex gap-5">
          {/* Items */}
          <div className="text-blue-700 bg-gray-200 text-sm p-2 cursor-pointer">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="text-blue-700 bg-gray-200 text-sm p-2 cursor-pointer">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        {/* Info */}
        <div className="flex flex-col gap-2 text-gray-400 text-sm mt-8">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr className=" border-gray-300" />
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
          <span>DESCRIPTION</span>
          <hr className="w-[200px] border-gray-300" />
          <span>ADDITIONAL INFORMATION</span>
          <hr className=" w-[200px] border-gray-300" />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
