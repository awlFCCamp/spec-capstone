"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Daily fresh made pastry",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver coffee, tea and pastry",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Our pumkin spice lattee is to die for",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      10000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-slate-900">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-green-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-500 text-white uppercase py-4 px-8">
          Order Now
        </button>
      </div>
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
