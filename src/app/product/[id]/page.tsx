"use client";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "@/app/hooks/useFetch";
import { Alert, CircularProgress } from "@mui/material";
import IDataItem from "./../../components/FeaturedProducts/FeaturedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/Features/cart/cartSlice";
const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const [selectedImg, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch<IDataItem>(
    `/products/${id}?populate=*`
  );

  const imageUrl = `http://localhost:1337${data?.attributes?.img?.data?.attributes.url}`;

  const imageUrl2 = `http://localhost:1337${data?.attributes?.img2?.data?.attributes.url}`;

  const imageUrl3 = `http://localhost:1337${data?.attributes?.[selectedImg]?.data?.attributes.url}`;

  return (
    <div className="flex justify-center h-full md:h-[80vh] flex-col   items-center md:flex-row gap-10 px-4 mt-1  py-6 ">
      {error ? (
        <Alert severity="error">Something went wrong</Alert>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <>
          {/* left */}
          <div className=" h-full flex-1 flex gap-2 md:gap-3 w-full">
            <div className="h-full w-full flex-1 flex flex-col gap-1 md:gap-2">
              <div className="relative h-[150px] w-full">
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes.url
                  }
                  alt=""
                  className="object-cover absolute cursor-pointer w-full h-full"
                  onClick={(e) => setSelectedImage("img")}
                />
              </div>
              <div className="relative h-[150px] w-full">
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes.url
                  }
                  alt=""
                  className="object-cover absolute cursor-pointer w-full h-full"
                  onClick={(e) => setSelectedImage("img2")}
                />
              </div>
            </div>
            <div className="flex-[5] max-h-800px w-full ">
              <div className="relative h-full w-full">
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_UPLOAD_URL +
                    data?.attributes?.[selectedImg]?.data?.attributes.url
                  }
                  alt=""
                  className="object-cover absolute cursor-pointer w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex-1 flex flex-col gap-5 items-center md:items-start ">
            <h1 className="text-gray-500 text-xl font-medium capitalize ">
              {data?.attributes?.title}
            </h1>
            <span className="text-2xl text-blue-700 font-medium">
              $ {data?.attributes?.price}
            </span>
            <p className="text-lg font-light text-justify">
              {data?.attributes?.desc}
            </p>
            {/* quantity */}
            <div className="flex items-center gap-2">
              <button
                className="h-[50px] w-[50px] border-none flex items-center justify-center cursor-pointer bg-gray-200 "
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
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
        </>
      )}
    </div>
  );
};

export default Product;
