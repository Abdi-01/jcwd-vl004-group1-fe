import React, { useState, useCallback, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();

  const TableHead = () => {
    return (
      <thead>
        <tr className=" text-sm text-gray-500 h-14 bg-slate-100 ">
          <th className="text-left w-5/12 rounded-l-md pl-2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th className="rounded-r-md">Action</th>
        </tr>
      </thead>
    );
  };

  // CART COMPONENT
  const cartList = () => {
    return cartItems?.map((val) => {
      return (
        <CartItems
          key={val.id}
          val={val}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      );
    });
  };

  return (
    <>
      <div className="w-1/2">
        <div className=" w-full rounded-xl shadow-sm">
          <div className="p-3 rounded-t-xl">
            <h2 className="font-bold">
              Cart{" "}
              <span className="text-gray-400">({cartItems?.length} Items)</span>
            </h2>
          </div>
          <div className="h-3/5 flex space-x-5 w-full px-2">
            <table className="w-full my-2">
              {TableHead()}
              <tbody className="text-sm">{cartList()}</tbody>
            </table>
          </div>
        </div>
        <div>
          <Link to="/">
            <div className="text-gray-600 hover:text-gray-500 text-sm space-x-2 my-6 flex group">
              <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
              <h2 className="font-bold">Continue Shopping</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
