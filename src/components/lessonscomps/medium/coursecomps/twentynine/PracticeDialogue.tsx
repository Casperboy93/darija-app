"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Practice Dialogue</h2>

      {/* Dialogue 1: Making a reservation */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Dialogue 1: Making a Reservation</h3>
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
                <td className="px-4 py-2">Hello, I want to make a reservation</td>
                <td className="px-4 py-2">سلام، بغيت ندير ريزيرفاسيون</td>
                <td className="px-4 py-2">salam, bghit ndir rezervasyon</td>
                <td className="px-4 py-2">Start the call politely.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">For two people at 7 pm</td>
                <td className="px-4 py-2">ديال جوج فالسبعة د لعشية</td>
                <td className="px-4 py-2">dyal juj f s-sb3a d l3shiya</td>
                <td className="px-4 py-2">Specify time and party size.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Okay, what's your name?</td>
                <td className="px-4 py-2">واخّا، شنو سميتك؟</td>
                <td className="px-4 py-2">wakhkha, shnu smitk?</td>
                <td className="px-4 py-2">Server confirming details.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">My name is Adam</td>
                <td className="px-4 py-2">سميتي آدم</td>
                <td className="px-4 py-2">smiti Adam</td>
                <td className="px-4 py-2">Provide the booking name.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dialogue 2: Ordering at the restaurant */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Dialogue 2: Ordering at the Restaurant</h3>
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
                <td className="px-4 py-2">We are ready to order</td>
                <td className="px-4 py-2">حنا واجدين باش نطلبو</td>
                <td className="px-4 py-2">7na wajdin bash ntlbo</td>
                <td className="px-4 py-2">Let the server know.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">I want the chicken tagine</td>
                <td className="px-4 py-2">بغيت طاجين ديال الدجاج</td>
                <td className="px-4 py-2">bghit tajin dyal ddjaj</td>
                <td className="px-4 py-2">Common Moroccan dish.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Is it spicy?</td>
                <td className="px-4 py-2">حار؟</td>
                <td className="px-4 py-2">7ar?</td>
                <td className="px-4 py-2">Ask about heat level.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">The bill please</td>
                <td className="px-4 py-2">الحساب عفاك</td>
                <td className="px-4 py-2">l7sab 3afak</td>
                <td className="px-4 py-2">Wrap up the meal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dialogue 3: Allergy or wrong order */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Dialogue 3: Allergy / Wrong Order</h3>
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
                <td className="px-4 py-2">Sorry, I have an allergy to nuts</td>
                <td className="px-4 py-2">سمح ليا، عندي حساسية من الكاوكاو</td>
                <td className="px-4 py-2">smah lia, 3ndi 7sasya mn lkawkaw</td>
                <td className="px-4 py-2">Inform staff clearly.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Can you change it, please?</td>
                <td className="px-4 py-2">واش ممكن تبدلوه، عفاك؟</td>
                <td className="px-4 py-2">wash momkin tbddluh, 3afak?</td>
                <td className="px-4 py-2">Polite request for change.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Thank you for understanding</td>
                <td className="px-4 py-2">شكرا على التفهّم</td>
                <td className="px-4 py-2">shukran 3la ttfhhem</td>
                <td className="px-4 py-2">End with gratitude.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}