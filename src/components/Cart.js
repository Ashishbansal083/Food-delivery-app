import React from "react";
import { CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems?.map((item) => (
    <div className="border-b-2  p-4 m-auto flex justify-between h-32 w-6/12 ">
      <div className="flex flex-col items-start">
        <span className="font-semibold text-lg">{item?.name}</span>
        <span className="text-lg">₹{item?.price / 100}</span>
      </div>
      <div className="w-2/12 h-full relative">
        <img
          src={CDN_URL + item?.imageId}
          className="h-full w-full rounded-lg"
          alt="image N/A"
        ></img>
        <button className="absolute bottom-0 left-0 bg-black text-white rounded-sm text-sm font-semibold">
          ADD+
        </button>
      </div>
    </div>
  ));
};

export default Cart;
