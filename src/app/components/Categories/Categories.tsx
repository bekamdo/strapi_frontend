import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="grid h-[80vh] gap-2 m-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative w-full h-full">
        <Image
          src="https://images.pexels.com/photos/8327056/pexels-photo-8327056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="lab coats"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/5">Lab Coats</Link>
        </button>
      </div>
      <div className="row-span-2 relative w-full  h-full">
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
      <div className=" relative w-full  h-full">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681415164668-1b756bc4c9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/3">Bags </Link>
        </button>
      </div>
      <div className=" relative w-full  h-full">
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
          <Link href="/products/2"> Men</Link>
        </button>
      </div>
      <div className=" relative w-full  h-full">
        <Image
          src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/4">Stethoscopes </Link>
        </button>
      </div>
      <div className="relative col-span-2  md:col-span-3  lg:col-span-2 w-fill  h-fill">
        <Image
          src="https://images.pexels.com/photos/5721676/pexels-photo-5721676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="scrubs"
          className="object-cover"
        />
        <button
          className="absolute min-w-[100px] w-fit p-4 top-0 bottom-0 left-0 right-0 m-auto
        cursor-pointer border-none bg-white uppercase font-normal h-[50px]"
        >
          <Link href="/products/6">Medical Devices </Link>
        </button>
      </div>
    </div>
  );
};

export default Categories;
