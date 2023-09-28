"use client";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { orderType } from "@/types/types";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return "Loading...";
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
              <td className="hidden md:block py-6 px-1">1234567890</td>
              <td className="py-6 px-1">01.10.2023</td>
              <td className="py-6 px-1">15.00</td>
              <td className="hidden md:block py-6 px-1">
                Coffee (1) Bagle(1){" "}
              </td>
              <td className="py-6 px-1">On the way</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
