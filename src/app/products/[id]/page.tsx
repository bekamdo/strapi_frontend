"use client";
import List from "@/app/components/List/List";
import Image from "next/image";
import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import useFetch from "./../../hooks/useFetch";
import IDataItem from "./../../components/FeaturedProducts/FeaturedProducts";

const page = ({ params }: { params: { id: string } }) => {
  const catId = parseInt(params.id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState<string>("asc");
  const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);

  const { data, loading, error } = useFetch<IDataItem[]>(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    console.log(value);
  };

  return (
    <div className="flex flex-col px-4 md:flex-row gap-20">
      {/* left */}
      <div className="flex-2 justify-start sticky h-full top-12">
        {/* filterItems */}
        <div className="hidden md:block mb-8">
          <h2 className="font-normal text-lg mb-5">Product Categories</h2>
          <div className="flex flex-col  gap-2 md:justify-start">
            {data?.map((item) => (
              <div className="flex gap-1" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id.toString()}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id.toString()}>
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* filter by price section */}
        <div className="px-4 mb-8 md:px-0">
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
        <div className="px-4 mb-8 md:px-0">
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
        <div className=" relative hidden  mb-12  md:block md:h-[150px] lg:h-[200px]   ">
          <Image
            src="https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="banner"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex justify-center">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
