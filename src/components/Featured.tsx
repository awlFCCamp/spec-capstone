import Image from "next/image";
import { featuredProducts } from "@/data";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-green-400">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xL:h-[90vh]"
          >
            {item.img && (
              <div className="relative flex-1 w-full my-3">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain w-1/2"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-6 bg-slate-900 w-1/2">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-green-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
