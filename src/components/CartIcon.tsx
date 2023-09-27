"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import cartData from "../../assets/cart.json";

const CartIcon = () => {
  return (
    <Link
      href="/cart"
      className="ml-12 flex h-100 justify-self-center item-center gap-6 border-red-300"
    >
      <div className="flex h-full item-center gap-4 justify-center ">
        <Lottie animationData={cartData} className="w-12 h-12" />

        <p className="m-3">Cart (3)</p>
      </div>
    </Link>
  );
};

export default CartIcon;
