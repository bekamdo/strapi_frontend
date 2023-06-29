import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { DataProps } from "../FeaturedProducts/FeaturedProducts";

const Card: FC<DataProps> = ({ ...item }) => {
  // const imageUrl = `http://localhost:1337${item.attributes.img?.data.attributes.url}`;
  // const imageUrl2 = `http://localhost:1337${item.attributes.img2?.data.attributes.url}`;

  return (
    <>
      <Link href={`/product/${item.id}`}>
        <div className="w-[280px] flex flex-col gap-2 mb-12">
          <div className=" w-full overflow-hidden h-[400px] relative [&>*:first-child]:hover:z-20">
            <Image
              src={item.img}
              alt=""
              fill={true}
              className="object-cover absolute "
            />

            <Image
              src={item.img2}
              alt=""
              fill={true}
              className="object-cover absolute z-10"
            />
            {item.isNew && (
              <span className="absolute top-1 font-bold text-sm left-1 bg-white text-teal-400 py-1 px-2 z-30">
                New Collections
              </span>
            )}
          </div>

          <h2 className="text-sm font-light">{item.title}</h2>
          {/* prices */}
          <div className="flex gap-5 [&>*:first-child]:line-through">
            <h3 className="text-lg font-bold text-gray-400">
              ${item.oldPrice}
            </h3>
            <h3 className="text-lg font-bold text-gray-700">${item.price}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
