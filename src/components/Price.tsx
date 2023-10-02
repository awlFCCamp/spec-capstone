"use client";

import { useCartStore } from "@/util/store";
import { useState, useEffect } from "react";
import { ProductType } from "@/types/types";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      quantity: quantity,
    });
  };

  useEffect(() => {
    setTotal(quantity * product.price);
  }, [quantity, product]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl ffont-bold">${total}</h2>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"-"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {"+"}
            </button>
          </div>
        </div>
        <button
          className="uppercase w-56 bg-green-500 text-white p-3 "
          onClick={handleAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
