"use client";

import React from 'react';

export default function InsuranceBilling() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Insurance & Billing</h3>
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
            <td className="px-4 py-2">Do you accept insurance?</td>
            <td className="px-4 py-2">واش كتقبلو التأمين؟</td>
            <td className="px-4 py-2">wash katqblou t2min?</td>
            <td className="px-4 py-2">Insurance acceptance.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">How much is the consultation?</td>
            <td className="px-4 py-2">بشحال الثمن ديال الكشف؟</td>
            <td className="px-4 py-2">b shhal tman dyal l kchf?</td>
            <td className="px-4 py-2">Consultation fee.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can I pay by card?</td>
            <td className="px-4 py-2">نقدر نخلص بلكارت؟</td>
            <td className="px-4 py-2">nqdr nkhlss b l kart?</td>
            <td className="px-4 py-2">Payment method.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need the receipt</td>
            <td className="px-4 py-2">بغيت الوصل</td>
            <td className="px-4 py-2">bghit l wsl</td>
            <td className="px-4 py-2">Request receipt.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is the follow-up included?</td>
            <td className="px-4 py-2">واش المتابعة داخلة؟</td>
            <td className="px-4 py-2">wash l mtab3a dakhla?</td>
            <td className="px-4 py-2">Coverage clarification.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}