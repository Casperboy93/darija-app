"use client";

import React from 'react';

export default function BankingVocabulary() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Banking & Finance Vocabulary</h3>
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
            <td className="px-4 py-2">Bank</td>
            <td className="px-4 py-2">بنك</td>
            <td className="px-4 py-2">bank</td>
            <td className="px-4 py-2">General term for a bank.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Account</td>
            <td className="px-4 py-2">حساب</td>
            <td className="px-4 py-2">hesab</td>
            <td className="px-4 py-2">Bank account; personal or business.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Card</td>
            <td className="px-4 py-2">بطاقة</td>
            <td className="px-4 py-2">bitaqa</td>
            <td className="px-4 py-2">Debit or credit card.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">ATM</td>
            <td className="px-4 py-2">صراف آلي</td>
            <td className="px-4 py-2">sarraaf ali</td>
            <td className="px-4 py-2">Cash machine.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Fee</td>
            <td className="px-4 py-2">رسوم</td>
            <td className="px-4 py-2">rusum</td>
            <td className="px-4 py-2">Service charges.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Interest</td>
            <td className="px-4 py-2">فائدة</td>
            <td className="px-4 py-2">faida</td>
            <td className="px-4 py-2">Applied to loans and savings.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Transfer</td>
            <td className="px-4 py-2">تحويل</td>
            <td className="px-4 py-2">tahwil</td>
            <td className="px-4 py-2">Send money to another account.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Deposit</td>
            <td className="px-4 py-2">إيداع</td>
            <td className="px-4 py-2">idaa</td>
            <td className="px-4 py-2">Put money into your account.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Withdrawal</td>
            <td className="px-4 py-2">سحب</td>
            <td className="px-4 py-2">sahb</td>
            <td className="px-4 py-2">Take money out of your account.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Balance</td>
            <td className="px-4 py-2">رصيد</td>
            <td className="px-4 py-2">rasid</td>
            <td className="px-4 py-2">Amount available in the account.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Statement</td>
            <td className="px-4 py-2">كشف حساب</td>
            <td className="px-4 py-2">kashf hesab</td>
            <td className="px-4 py-2">Monthly account summary.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}