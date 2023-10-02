import Image from "next/image";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import axios from "axios";

const PRODUCTS_URL = "http://localhost:3000/api/products";

const getData = async (id: string) => {
  try {
    const res = await axios.get(`${PRODUCTS_URL}/${id}`, {
      headers: { "Cache-Control": "no-store" },
    });
    if (res.status !== 200) {
      throw new Error("Failed");
    }
    return res.data;
  } catch (error) {
    throw new Error("Failed");
  }
};

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen bg-slate-900 flex flex-col justify-around text-green-500 md:flex-row md:gap-2 md:items-cener">
      {singleProduct.img && (
        <div className="relative w-1/2 h-1/2 md:h-[70%]">
          <Image src={singleProduct.img} alt="" className="oject-cover" fill />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProduct;
