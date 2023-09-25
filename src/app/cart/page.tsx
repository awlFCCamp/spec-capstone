import Image from "next/image";

const Cartpage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-green-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 bg-slate-900">
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Coffee</h1>
          </div>
          <h2 className="font-bold">$25.55</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p2.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Tea</h1>
          </div>
          <h2 className="font-bold">$15.55</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p3.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Pastry</h1>
          </div>
          <h2 className="font-bold">$9.55</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      <div className="h-1/2 p-4 bg-slate-800 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-green-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
