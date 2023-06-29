import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="grid h-[80vh] gap-2 m-2 grid-cols-4 grid-rows-2">
      <div className="relative w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/15272226/pexels-photo-15272226/free-photo-of-black-and-white-photo-of-a-woman-walking-down-the-street-in-misty-weather.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1"> Sale</Link>
        </button>
      </div>
      <div className="row-span-2 relative w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/12301327/pexels-photo-12301327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1">Women </Link>
        </button>
      </div>
      <div className=" relative w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1">New Products </Link>
        </button>
      </div>
      <div className=" relative w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/15679513/pexels-photo-15679513/free-photo-of-light-fashion-man-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="men"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1"> Men</Link>
        </button>
      </div>
      <div className=" relative w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1">Accessories </Link>
        </button>
      </div>
      <div className="relative col-span-2 w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/1">Shoes </Link>
        </button>
      </div>
    </div>
  );
};

export default Categories;
