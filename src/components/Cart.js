import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto bg-gray-100 p-4 mt-4 rounded-lg">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="bg-black text-white font-semibold rounded-lg p-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center ">
          <p>
            Cart is Empty!
            <Link to="/" className="underline">
              Add items to cart
            </Link>{" "}
          </p>
        </div>
      ) : (
        cartItems?.map((item) => (
          <div className="">
            <ItemList data={item} />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
