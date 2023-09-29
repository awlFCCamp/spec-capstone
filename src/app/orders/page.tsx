"use client";
import { useSession } from "next-auth/react";
import { orderType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const OrdersPage = () => {
  //check auth status
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState([]);
  const ORDERS_URL = "http://localhost:3000/api/orders";
  const router = useRouter();

  const fetchData = async () => {
    try {
      const res = await axios.get(ORDERS_URL);
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      setError(err as Error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    } else {
      router.push("/");
    }
  }, [router, status]);

  if (isLoading || status === "loading") return "Loading...";
  if (error) {
    return "Error:${error.message}";
  }
  return (
    <div className="p-4 lg:px-20 xl:px-40 bg-lime-800 text-white">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: orderType) => (
            <tr className="text-sm md:text-base bg-slate-900" key={item.id}>
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">{item.price}</td>
              <td className="hidden md:block py-6 px-1">
                {item.products[0].title}
              </td>
              <td className="py-6 px-1">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
