import React from "react";
import { DataInterface } from "../FeaturedProducts/FeaturedProducts";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Image from "next/image";

const data: DataInterface[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1382907/pexels-photo-1382907.jpeg?auto=compress&cs=tinysrgb&w=400",
    img2: "https://images.pexels.com/photos/2417857/pexels-photo-2417857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Top Quality Mugs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae soluta perspiciatis pariatur tempora voluptate numquam illum incidunt saepe quam.",
    isNew: true,
    oldPrice: 10,
    price: 5,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tshirts",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae soluta perspiciatis pariatur tempora voluptate numquam illum incidunt saepe quam.",
    isNew: true,
    oldPrice: 13,
    price: 8,
  },
];

const Cart = () => {
  return (
    <div className="absolute right-[20px] top-[80px] z-50 bg-white p-5 shadow-lg">
      <h1 className="mb-5 text-gray-400 font-normal text-lg">
        Products in your Cart
      </h1>
      {data?.map((item) => (
        <div className="flex items-center mb-5 gap-5" key={item.id}>
          {/* Image Wrapper */}
          <div className="relative h-[100px] w-[80px]">
            <Image
              src={item.img}
              fill={true}
              className="object-cover"
              alt="cart Image"
            />
          </div>

          {/* details Wrapper */}
          <div>
            <h1 className="mb-5 text-gray-800 font-medium text-lg">
              {item.title}
            </h1>
            <p className="mb-2 text-xs text-gray-400 ">
              {item.desc?.substring(0, 50)}
            </p>
            <div className="text-blue-700 font-medium">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="text-red-500 cursor-pointer" />
        </div>
      ))}
      {/* Total */}
      <div className="flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>$ 123</span>
      </div>
      <button
        className="w-[250px] p-2 bg-blue-700 text-white flex items-center justify-center gap-5
        cursor-pointer border-none font-medium mb-2"
      >
        PROCEED TO CHECKOUT
      </button>
      <span className="text-xs text-red-500 cursor-pointer">RESET CART</span>
    </div>
  );
};

export default Cart;
