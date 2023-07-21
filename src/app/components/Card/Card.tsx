"use client";
import Link from "next/link";
import React, { FC } from "react";
import { IDataItem } from "../FeaturedProducts/FeaturedProducts";

const Card: FC<IDataItem> = ({ ...item }) => {
  const imageUrl = `process.env.NEXT_PUBLIC_API_UPLOAD_URL${item.attributes.img?.data.attributes.url}`;
  const imageUrl2 = `process.env.NEXT_PUBLIC_API_UPLOAD_URL${item.attributes.img2?.data.attributes.url}`;

  return (
    <>
      <Link href={`/product/${item.id}`}>
        <div className="min-w-[365px] p-4 flex-col cursor-pointer justify-center md:min-w-[280px] flex md:flex-row gap-4 mb-12 overflow-hidden h-[400px] relative [&>*:first-child]:hover:z-20 ease-in-out duration-300 ">
          <img
            src={
              process.env.NEXT_PUBLIC_API_UPLOAD_URL +
              item.attributes.img?.data.attributes.url
            }
            alt=""
            className="object-cover absolute  w-full h-full "
          />

          <img
            src={
              process.env.NEXT_PUBLIC_API_UPLOAD_URL +
              item.attributes.img2?.data.attributes.url
            }
            alt=""
            className="object-cover absolute z-10 w-full h-full"
          />
          {item.attributes.isNew && (
            <span className="absolute top-1 font-bold text-sm left-1 bg-white text-teal-400 py-1 px-2 z-30">
              New Collections
            </span>
          )}
        </div>

        <h2 className="px-4  text-sm font-light">{item.attributes.title}</h2>
        {/* prices */}
        <div className="flex  px-4 gap-5 [&>*:first-child]:line-through">
          <h3 className="text-lg font-bold text-gray-400">
            ${item?.attributes?.oldPrice}
          </h3>
          <h3 className="text-lg font-bold mb-6 text-gray-700">
            ${item.attributes.price}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Card;
