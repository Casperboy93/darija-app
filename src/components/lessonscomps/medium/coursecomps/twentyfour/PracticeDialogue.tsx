"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 1: At the Clinic</h3>
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
              <td className="px-4 py-2">Hello doctor, I’m not feeling well.</td>
              <td className="px-4 py-2">سلام دكتور، ما حسيتش مزيان.</td>
              <td className="px-4 py-2">salam doktur, ma 7sitsh mzian.</td>
              <td className="px-4 py-2">Patient opening.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">What are your symptoms?</td>
              <td className="px-4 py-2">شنو الأعراض اللي عندك؟</td>
              <td className="px-4 py-2">shnu l a3rad lli 3ndk?</td>
              <td className="px-4 py-2">Doctor question.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Fever and headache.</td>
              <td className="px-4 py-2">السخانة وصداع.</td>
              <td className="px-4 py-2">sskhana u sda3.</td>
              <td className="px-4 py-2">Symptom list.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 2: Booking an Appointment</h3>
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
              <td className="px-4 py-2">I’d like an appointment for tomorrow morning.</td>
              <td className="px-4 py-2">بغيت موعد لغدا فالصباح.</td>
              <td className="px-4 py-2">bghit maw3id l ghda f ssbah.</td>
              <td className="px-4 py-2">Request slot.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">We have 10:00 AM available.</td>
              <td className="px-4 py-2">كاين عشرة دالصباح متاحة.</td>
              <td className="px-4 py-2">kayn 3shra d ssbah mtaha.</td>
              <td className="px-4 py-2">Offer time.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Perfect, thank you.</td>
              <td className="px-4 py-2">زوين، شكرا.</td>
              <td className="px-4 py-2">zwin, shukran.</td>
              <td className="px-4 py-2">Confirm booking.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 3: At the Pharmacy</h3>
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
              <td className="px-4 py-2">Excuse me, how do I take this?</td>
              <td className="px-4 py-2">سمح ليا، كيفاش ناخد هاد الدواء؟</td>
              <td className="px-4 py-2">smeh lia, kifash nakhod had dwa?</td>
              <td className="px-4 py-2">Usage instructions.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Take one pill twice a day.</td>
              <td className="px-4 py-2">خد قرص واحد جوج مرات فالنهار.</td>
              <td className="px-4 py-2">khod qors wa7ed juj mrat f nnhar.</td>
              <td className="px-4 py-2">Pharmacist response.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thanks, have a nice day.</td>
              <td className="px-4 py-2">شكرا، نهاركم مبروك.</td>
              <td className="px-4 py-2">shukran, nharkom mbruk.</td>
              <td className="px-4 py-2">Polite closing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}