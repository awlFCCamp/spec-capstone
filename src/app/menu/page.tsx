import Link from "next/link";
import React from "react";
import { MenuType } from "@/types/types";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("http://localhost:3000/api/categories", {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-green-500 text-5xl font-bold">Menu</h1>
      <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full h-full bg-cover p-8 md:h-2/3"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`text-${category.color} w-2/3 bg-lime-700 p-4`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button
                className={`hidden 2xl:block bg-${category.color} text-${
                  category.color === "black" ? "white" : "red-500"
                } py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
