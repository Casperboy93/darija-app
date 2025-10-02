"use client";

import React from 'react';

export default function OrderingFood() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Ordering Food</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">English</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2">I'd like to order</td>
              <td className="px-4 py-2">بغيت نطلب</td>
              <td className="px-4 py-2">bghit ntlob</td>
              <td className="px-4 py-2">Polite opener for ordering.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Can I see the menu?</td>
              <td className="px-4 py-2">نقدر نشوف المنيو؟</td>
              <td className="px-4 py-2">n9dar nshof lmenyu?</td>
              <td className="px-4 py-2">Use with a polite tone.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I want ...</td>
              <td className="px-4 py-2">بغيت ...</td>
              <td className="px-4 py-2">bghit ...</td>
              <td className="px-4 py-2">Follow with dish or drink name.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">What do you recommend?</td>
              <td className="px-4 py-2">شنو كتقترح؟</td>
              <td className="px-4 py-2">shnu katqtr7?</td>
              <td className="px-4 py-2">Ask the server for suggestions.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Is it spicy?</td>
              <td className="px-4 py-2">حار؟</td>
              <td className="px-4 py-2">7ar?</td>
              <td className="px-4 py-2">Useful for chili-based dishes.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I'd like it without ...</td>
              <td className="px-4 py-2">بغيت بلا ...</td>
              <td className="px-4 py-2">bghit bla ...</td>
              <td className="px-4 py-2">E.g., "بلا سكر" (no sugar).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">We are ready to order</td>
              <td className="px-4 py-2">حنا واجدين باش نطلبو</td>
              <td className="px-4 py-2">7na wajdin bash ntlbo</td>
              <td className="px-4 py-2">Let the server know you're ready.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">The bill, please</td>
              <td className="px-4 py-2">الحساب عفاك</td>
              <td className="px-4 py-2">l7sab 3afak</td>
              <td className="px-4 py-2">Standard phrase to request payment.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}