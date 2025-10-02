"use client";

import React from 'react';

export default function ShoppingVocabulary() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Shopping Vocabulary</h3>
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
            <td className="px-4 py-2">Store</td>
            <td className="px-4 py-2">محل</td>
            <td className="px-4 py-2">ma7al</td>
            <td className="px-4 py-2">General shop.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Price</td>
            <td className="px-4 py-2">ثمن</td>
            <td className="px-4 py-2">thaman</td>
            <td className="px-4 py-2">Cost of item.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Discount</td>
            <td className="px-4 py-2">تنقيص</td>
            <td className="px-4 py-2">tnaqis</td>
            <td className="px-4 py-2">Reduced price.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Receipt</td>
            <td className="px-4 py-2">وصلة</td>
            <td className="px-4 py-2">wasla</td>
            <td className="px-4 py-2">Proof of purchase.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Size</td>
            <td className="px-4 py-2">مقاس</td>
            <td className="px-4 py-2">mqas</td>
            <td className="px-4 py-2">Clothing size.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}