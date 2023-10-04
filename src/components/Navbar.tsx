"use client";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";
import Lottie from "lottie-react";
import coffeeData from "../../assets/coffee.json";
import styled from "styled-components";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 bg-lime-600 text-slate-900 p-2 flex items-center justify-between uppercase md:h-16 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1 items-center">
        <Lottie animationData={coffeeData} className="w-24 h-24" />
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Coffee and Pastries</Link>
      </div>
      <div className="md: hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
