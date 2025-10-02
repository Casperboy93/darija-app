"use client";

import React from 'react';

export default function OnlineShoppingDelivery() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Online Shopping & Delivery</h3>
      <table className="min-w-full table-auto border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="px-4 py-2 text-left">English</th>
            <th className="px-4 py-2 text-left">Darija (Arabic)</th>
            <th className="px-4 py-2 text-left">Darija (ASCII)</th>
            <th className="px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="px-4 py-2">Order</td>
            <td className="px-4 py-2">طلب</td>
            <td className="px-4 py-2">talab</td>
            <td className="px-4 py-2">Online order.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Delivery</td>
            <td className="px-4 py-2">توصيل</td>
            <td className="px-4 py-2">tawssil</td>
            <td className="px-4 py-2">Shipping.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Tracking number</td>
            <td className="px-4 py-2">رقم التتبع</td>
            <td className="px-4 py-2">rqm tttab3</td>
            <td className="px-4 py-2">Package tracking.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Out for delivery</td>
            <td className="px-4 py-2">خارج للتوصيل</td>
            <td className="px-4 py-2">kharej ltawssil</td>
            <td className="px-4 py-2">Status.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Delivery address</td>
            <td className="px-4 py-2">عنوان التوصيل</td>
            <td className="px-4 py-2">3nwan t tawssil</td>
            <td className="px-4 py-2">Where to ship.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}