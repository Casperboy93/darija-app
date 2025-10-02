"use client";

import React from 'react';

export default function ReservationsDiningEtiquette() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Reservations & Dining Etiquette</h2>
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
              <td className="px-4 py-2">I have a reservation at 7</td>
              <td className="px-4 py-2">عندي ريزيرفاسيون ف السبعة</td>
              <td className="px-4 py-2">3ndi rezervasyon f s-sb3a</td>
              <td className="px-4 py-2">Use with time; adjust as needed.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">For two people</td>
              <td className="px-4 py-2">ديال جوج ديال الناس</td>
              <td className="px-4 py-2">dyal juj dyal nnas</td>
              <td className="px-4 py-2">Specify party size.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Table by the window</td>
              <td className="px-4 py-2">طبلة حد الشرجم</td>
              <td className="px-4 py-2">tabla 7d sh-shrjm</td>
              <td className="px-4 py-2">"شرجم" means window.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Can we change the table?</td>
              <td className="px-4 py-2">واش ممكن نبدلو الطبلة؟</td>
              <td className="px-4 py-2">wash momkin nbddlo ttabla?</td>
              <td className="px-4 py-2">Polite request to move.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Please bring water</td>
              <td className="px-4 py-2">جيب لْمَا عفاك</td>
              <td className="px-4 py-2">jib lma 3afak</td>
              <td className="px-4 py-2">"عفاك" is polite "please".</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Thank you, the food is delicious</td>
              <td className="px-4 py-2">شكرا، الماكلة بنينة</td>
              <td className="px-4 py-2">shukran, lmakla bnina</td>
              <td className="px-4 py-2">Positive feedback to staff.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I want to cancel the reservation</td>
              <td className="px-4 py-2">بغيت نلغى ريزيرفاسيون</td>
              <td className="px-4 py-2">bghit nlgha rezervasyon</td>
              <td className="px-4 py-2">Use by phone or in person.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}