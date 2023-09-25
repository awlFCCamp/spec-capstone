import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-slate-900 h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png)] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="uppercase text-green-500 font-bold text-1xl">
          the best coffee in town
        </h1>
        <p className="text-white font-bold  w-3/4 xl:text-3xl">
          A cozy deal that delivers, give a pumpkiny present. Share all the fall
          feels by treating someone you love. All giftcard purchase is 20% off
        </p>
        <button className="bg-green-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
