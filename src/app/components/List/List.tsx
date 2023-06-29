import React, { FC } from "react";
import { DataProps } from "../FeaturedProducts/FeaturedProducts";
import Card from "../Card/Card";

export interface ListProps2 {
  id: number;
  img: string;
  img2: string;
  title: string;
  desc?: string;
  oldPrice: number;
  price: number;
  isNew: boolean;
}
const data: ListProps2[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/593332/pexels-photo-593332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Top Quality Mugs",
    isNew: true,
    oldPrice: 10,
    price: 5,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/13952577/pexels-photo-13952577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tshirts",
    isNew: true,
    oldPrice: 13,
    price: 8,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1724181/pexels-photo-1724181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Stethoscope",
    isNew: false,
    oldPrice: 130,
    price: 80,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/6786706/pexels-photo-6786706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Totte Bags",
    isNew: false,
    oldPrice: 3,
    price: 2,
  },
];

interface ListProps {
  catId: number;
  maxPrice: number;
  sort: string | null;
}

const List: FC<ListProps> = ({ catId, maxPrice, sort }) => {
  return (
    <div className="flex justify-between flex-wrap">
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
