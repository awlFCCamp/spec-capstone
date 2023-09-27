import React from "react";

const OrdersPage = () => {
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
          <tr className="text-sm md:text-base bg-slate-900">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">01.10.2023</td>
            <td className="py-6 px-1">15.00</td>
            <td className="hidden md:block py-6 px-1">Coffee (1) Bagle(1) </td>
            <td className="py-6 px-1">On the way</td>
          </tr>
          <tr className="text-sm md:text-base bg-slate-900">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">01.20.2023</td>
            <td className="py-6 px-1">25.00</td>
            <td className="hidden md:block py-6 px-1">Dozen Cup cakes (1)</td>
            <td className="py-6 px-1">On the way</td>
          </tr>
          <tr className="text-sm md:text-base bg-slate-900">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">09.23.23</td>
            <td className="py-6 px-1">26.00</td>
            <td className="hidden md:block py-6 px-1">
              Coffee(1) Tea(2) Muffin (12)
            </td>
            <td className="py-6 px-1">On the way</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
