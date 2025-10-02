"use client";

import React from 'react';

export default function RestaurantVocabulary() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Restaurant Vocabulary</h2>
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
              <td className="px-4 py-2">Restaurant</td>
              <td className="px-4 py-2">مطعم / ريستو</td>
              <td className="px-4 py-2">mat3am / resto</td>
              <td className="px-4 py-2">Both are common; French loan "resto" widely used.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Menu</td>
              <td className="px-4 py-2">منيو</td>
              <td className="px-4 py-2">menyu</td>
              <td className="px-4 py-2">Borrowed from French/English.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Waiter/Server</td>
              <td className="px-4 py-2">كَرصون</td>
              <td className="px-4 py-2">garson</td>
              <td className="px-4 py-2">Common loan; neutral usage.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Table</td>
              <td className="px-4 py-2">طبلة</td>
              <td className="px-4 py-2">tabla</td>
              <td className="px-4 py-2">Restaurant table.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Bill / Check</td>
              <td className="px-4 py-2">الحساب</td>
              <td className="px-4 py-2">l7sab</td>
              <td className="px-4 py-2">Used to settle payment.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Reservation</td>
              <td className="px-4 py-2">ريزيرفاسيون</td>
              <td className="px-4 py-2">rezervasyon</td>
              <td className="px-4 py-2">Loanword; widely understood.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Water</td>
              <td className="px-4 py-2">لمّا</td>
              <td className="px-4 py-2">lma</td>
              <td className="px-4 py-2">Tap water is rarely served by default.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}