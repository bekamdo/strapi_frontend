"use client";

import React from "react";
import type { RootState } from "./../../redux/store";
import { removeItem, resetCart } from "@/app/redux/Features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "@/app/makeRequests";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.product);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51JycYZKo6GLhBxYUTcNA7XsPB7q2TMbF8dkmo2ne3YusJP4SGgrLJPCswKmrUSPnKqV61CqLilQ3gV57tLoPffE700Vo3M6IrT"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute right-[20px] top-[80px] z-50 bg-white p-5 shadow-lg">
      <h1 className="mb-5 text-gray-400 font-normal text-lg">
        Products in your Cart
      </h1>
      {products?.map((item) => (
        <div className="flex items-center mb-5 gap-5" key={item.id}>
          {/* Image Wrapper */}
          <div className="relative h-[100px] w-[80px]">
            <img
              src={process.env.NEXT_PUBLIC_API_UPLOAD_URL + item.img}
              className="object-cover h-full w-full"
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
            <div className="text-blue-700 font-medium">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="text-red-500 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      {/* Total */}
      <div className="flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>$ {totalPrice()}</span>
      </div>
      <button
        onClick={handlePayment}
        className="w-[250px] p-2 bg-blue-700 text-white flex items-center justify-center gap-5
        cursor-pointer border-none font-medium mb-2"
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className="text-xs text-red-500 cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        RESET CART
      </span>
    </div>
  );
};

export default Cart;
