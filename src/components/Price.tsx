"use client";

import { useState, useEffect } from "react";

type propsType = {
  price: number;
  id: number;
};

const Price = ({ price, id }: propsType) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl ffont-bold">${total.toFixed(2)}</h2>
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
        <button className="uppercase w-56 bg-green-500 text-white p-3 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
