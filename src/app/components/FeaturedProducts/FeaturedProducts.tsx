"use client";
import React, { FC } from "react";
import Card from "../Card/Card";

import useFetch from "@/app/hooks/useFetch";
import { Alert, CircularProgress } from "@mui/material";

interface FeaturedProductsProps {
  type: string;
}

// @flow
export type IDataItem = {
  id: number;
  attributes: IAttributes;
};
export type IAttributes = {
  title?: string;
  desc?: string;
  price?: number;
  oldPrice?: number;
  isNew?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  type?: string;
  img?: IImg;
  img2?: IImg2;
  categories?: ICategories;
  sub_categories?: ISub_categories;
  name?: string;
  alternativeText?: null;
  caption?: null;
  width?: number;
  height?: number;
  formats?: null | IFormats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: null;
  provider?: string;
  provider_metadata?: null;
};
export type IImg = {
  data: IData;
};
export type IData = {
  id: number;
  attributes: IAttributes;
};
export type IImg2 = {
  data: IData;
};
export type IFormats = {
  thumbnail: IThumbnail;
};
export type IThumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};
export type ICategories = {
  data: IDataItem[];
};
export type ISub_categories = {
  data: any[];
};

const FeaturedProducts: FC<FeaturedProductsProps> = ({ type }) => {
  const { data, loading, error } = useFetch<IDataItem[]>(
    `/products?populate=*&[filters][type][$eq] =${type}`
  );

  return (
    <div className="my-24 mx-0 p-3  md:mx-48 relative">
      <div className="flex flex-col justify-center space-y-2  gap-2 lg:flex-row items-center md:justify-between mb-12">
        <h1 className="md:flex-[2] text-center capitalize text-lg font-semibold">
          {type} Products
        </h1>

        <p className="md:flex-[3] text-gray-500">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore
          fugit nam cupiditate modi velit asperiores nulla esse quidem, eum
          eveniet! Tempore illo blanditiis, delectus consequatur nemo velit
          repellendus ex.
        </p>
      </div>

      <div className="flex flex-col md:flex-row scrollbar-thin  scrollbar-thumb-blue-700 cursor-pointer scrollbar-track-gray-300 gap-4  lg:scrollbar-hidden justify-center md:gap-12">
        {error ? (
          <Alert severity="error">Something went wrong</Alert>
        ) : loading ? (
          <CircularProgress />
        ) : (
          data?.map((item) => <Card {...item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
