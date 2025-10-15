"use client";

import React from 'react';

export default function OpeningBankAccount() {
  return (
    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Opening a Bank Account</h3>
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
            <td className="px-4 py-2">I'd like to open an account</td>
            <td className="px-4 py-2">بغيت نفتح حساب</td>
            <td className="px-4 py-2">bghit nftah hesab</td>
            <td className="px-4 py-2">Start of the request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What documents do I need?</td>
            <td className="px-4 py-2">شنو الوراق اللي خصني؟</td>
            <td className="px-4 py-2">shnu lwraq lli khasni</td>
            <td className="px-4 py-2">Ask for requirements.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Are there monthly fees?</td>
            <td className="px-4 py-2">كاين شي رسوم شهرية؟</td>
            <td className="px-4 py-2">kayn shi rusum shahriya</td>
            <td className="px-4 py-2">Confirm ongoing costs.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I prefer an account with no fees</td>
            <td className="px-4 py-2">كنفضل حساب بلا رسوم</td>
            <td className="px-4 py-2">kanfaddel hesab bla rusum</td>
            <td className="px-4 py-2">State preference.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What accounts do you offer?</td>
            <td className="px-4 py-2">شنو كاين من حسابات؟</td>
            <td className="px-4 py-2">shnu kayn mn hesabat</td>
            <td className="px-4 py-2">Types: savings, current, business.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need proof of address</td>
            <td className="px-4 py-2">بغيت إثبات العنوان</td>
            <td className="px-4 py-2">bghit ithbat l unwan</td>
            <td className="px-4 py-2">For documentation.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I will bring ID</td>
            <td className="px-4 py-2">نجيب بطاقة التعريف</td>
            <td className="px-4 py-2">njib bitaqat ttaarif</td>
            <td className="px-4 py-2">National ID card.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can you explain the steps?</td>
            <td className="px-4 py-2">تقدر تشرح الخطوات؟</td>
            <td className="px-4 py-2">tqdr tshrah l khatwaat</td>
            <td className="px-4 py-2">Process walkthrough.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}