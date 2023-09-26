import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ProductType } from "@/types/types";

type paramsProps = {
  params: { category: string };
};

async function getData(category: string) {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/products?cat=${category}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const CategoryPage = async ({ params }: paramsProps) => {
  const products: ProductType[] = await getData(params.category);
  return (
    <div className="flex flex-wrap text-green-500">
      {products.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full h-[60vh] border-r-2 border-green-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between"
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="text-xl">${item.price}</h2>
            <button className="uppercase bg-green-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
