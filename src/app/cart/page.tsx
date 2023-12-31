"use client";
import Image from "next/image";
import { useCartStore } from "@/util/store";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const { products, totalItems, totalPrice, removeFromCart, emptyCart } =
    useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const handleClick = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        console.log(data);
        emptyCart();
        router.push("/orders");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-green-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 bg-slate-900">
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            <Image src={item.img} alt="" width={100} height={100} />
            <div>
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
            </div>
            <h2 className="font-bold">{item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="h-1/2 p-4 bg-slate-800 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal </span>
          <span className="">{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">{totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="bg-green-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={handleClick}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
