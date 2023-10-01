"use client";
import { useSession } from "next-auth/react";
import { orderType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const OrdersPage = () => {
  //check auth status
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<orderType[]>([]);
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

  {
    /*const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const newStatus = inputVal;

    try {
      const res = await axios.put(`${ORDERS_URL}/${id}`, {
        status: { set: newStatus },
      });
      if (res.status === 200) {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, status } : item
        );
        setData(updatedData);
      } else {
        setError(new Error(`Request failed with status ${res.status}`));
      }
    } catch (error) {
      setError(error as Error);
    }
  };*/
  }
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return fetch(`${ORDERS_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
  };

  if (isLoading || status === "loading") return "Loading...";
  if (error) {
    return `Error:${error.message}`;
  }

  return (
    <div className="h-4/5 p-4 lg:px-20 xl:px-40 bg-lime-800 text-white">
      <table className="h-fulll w-full border-separate border-spacing-3">
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
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleSubmit(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="ml-4 py-6 px-20 ring-1 ring-green-500 rounded-md text-black w-100 h-full"
                    />
                    <button className="bg-green-700 p-2 rounded-full">
                      <Image src="/edit.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
