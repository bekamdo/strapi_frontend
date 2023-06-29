"use client";
import React, { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
export interface DataProps {
  id: number;
  img: string;
  img2: string;
  title: string;
  oldPrice: number;
  price: number;
  isNew: boolean;
}
const data: DataProps[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/12446372/pexels-photo-12446372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: true,
    title: "t-shirt long sleeved",
    oldPrice: 19,
    price: 40,
  },
  {
    id: 2,
    img: " https://images.pexels.com/photos/50676/coffee-mugs-t-brown-drink-50676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: " https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lovely cups",
    isNew: false,
    oldPrice: 19,
    price: 40,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nice stethoscopes",
    isNew: true,
    oldPrice: 19,
    price: 40,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "latest trousers",
    isNew: true,
    oldPrice: 19,
    price: 40,
  },
];

interface FeaturedProductsProps {
  type: string;
}

// // @flow
// export type IDataItem = {
//   id: number;
//   attributes: IAttributes;
// };
// export type IAttributes = {
//   title?: string;
//   desc?: string;
//   price?: number;
//   isNew?: boolean;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt?: string;
//   type?: string;
//   img?: IImg;
//   img2?: IImg2;
//   categories?: ICategories;
//   sub_categories?: ISub_categories;
//   name?: string;
//   alternativeText?: null;
//   caption?: null;
//   width?: number;
//   height?: number;
//   formats?: null | IFormats;
//   hash?: string;
//   ext?: string;
//   mime?: string;
//   size?: number;
//   url?: string;
//   previewUrl?: null;
//   provider?: string;
//   provider_metadata?: null;
// };
// export type IImg = {
//   data: IData;
// };
// export type IData = {
//   id: number;
//   attributes: IAttributes;
// };
// export type IImg2 = {
//   data: IData;
// };
// export type IFormats = {
//   thumbnail: IThumbnail;
// };
// export type IThumbnail = {
//   ext: string;
//   url: string;
//   hash: string;
//   mime: string;
//   name: string;
//   path: null;
//   size: number;
//   width: number;
//   height: number;
// };
// export type ICategories = {
//   data: IDataItem[];
// };
// export type ISub_categories = {
//   data: any[];
// };

const FeaturedProducts: FC<FeaturedProductsProps> = ({ type }) => {
  // const [data, setData] = useState<IDataItem[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.NEXT_PUBLIC_API_URL + "/products?populate=*",
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //     } catch (e: any) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="my-24 mx-48">
      <div className="flex items-center justify-between mb-12">
        <h1 className=" flex-[2] capitalize text-lg font-semibold">
          {type} Products
        </h1>
        <p className="flex-[3] text-gray-500">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore
          fugit nam cupiditate modi velit asperiores nulla esse quidem, eum
          eveniet! Tempore illo blanditiis, delectus consequatur nemo velit
          repellendus ex.
        </p>
      </div>
      <div className="flex justify-center gap-12">
        {data.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
