"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Slider = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/menu");
  };
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-slate-900">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-green-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          We deliver, or order now and pickup in store
        </h1>
        <button
          className="bg-green-500 text-white uppercase py-4 px-8"
          onClick={handleButtonClick}
        >
          Order Now
        </button>
      </div>
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/slide3.jpg" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
