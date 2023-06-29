"use client";
import List from "@/app/components/List/List";
import Image from "next/image";
import React, { useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const catId = parseInt(params.id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState<string | null>(null);
  return (
    <div className=" flex gap-20">
      {/* left */}
      <div className="flex-2 justify-start sticky h-full top-12">
        {/* filterItems */}
        <div className="mb-8">
          <h2 className="font-normal text-lg mb-5">Product Categories</h2>
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex gap-1">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" id="2" value={1} />
              <label htmlFor="2">Skirts</label>
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" id="3" value={3} className="mb-2" />
              <label htmlFor="3">Shirts</label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-normal text-lg mb-5">Filter By Price</h2>
          <div className="flex gap-1">
            <span className="text-xs">0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
            <span className="text-xs">{maxPrice}</span>
          </div>
        </div>
        <div>
          <h2 className="font-normal text-lg mb-5">Sort By</h2>
          <div>
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-4 w-full">
        <div className=" relative h-[300px] mb-12 ">
          <Image
            src="https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="banner"
            fill={true}
            className="object-cover"
          />
        </div>

        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default page;
