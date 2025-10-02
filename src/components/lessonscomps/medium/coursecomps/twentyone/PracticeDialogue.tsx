"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 1: Meeting Someone New</h3>
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
              <td className="px-4 py-2">Hi, nice to meet you.</td>
              <td className="px-4 py-2">السلام، تشرفنا.</td>
              <td className="px-4 py-2">salam, tshrafna.</td>
              <td className="px-4 py-2">Polite opener.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">What’s your name?</td>
              <td className="px-4 py-2">شنو سميتك؟</td>
              <td className="px-4 py-2">shnu smitk?</td>
              <td className="px-4 py-2">Basic introduction.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">I’m Alex, pleased to meet you.</td>
              <td className="px-4 py-2">أنا أليكس، فرحت بلقياك.</td>
              <td className="px-4 py-2">ana Alex, frht blqyak.</td>
              <td className="px-4 py-2">Friendly tone.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 2: Clarifying Information</h3>
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
              <td className="px-4 py-2">I didn’t understand, can you repeat?</td>
              <td className="px-4 py-2">ما فهمتش، تقدر تعاود؟</td>
              <td className="px-4 py-2">ma fhmtsh, tqdr t3awd?</td>
              <td className="px-4 py-2">Polite clarification.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">What do you mean exactly?</td>
              <td className="px-4 py-2">شنو كتقصد بالضبط؟</td>
              <td className="px-4 py-2">shnu k tqsd b ddabt?</td>
              <td className="px-4 py-2">Seek precision.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">I agree, that makes sense.</td>
              <td className="px-4 py-2">متافق، معقولة.</td>
              <td className="px-4 py-2">mtafq, m3qula.</td>
              <td className="px-4 py-2">Confirming understanding.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 3: Making a Polite Request</h3>
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
              <td className="px-4 py-2">Excuse me, can you help me?</td>
              <td className="px-4 py-2">سمح ليا، تقدر تعاونّي؟</td>
              <td className="px-4 py-2">smeh lia, tqdr tawnni?</td>
              <td className="px-4 py-2">Polite opener.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Of course, what do you need?</td>
              <td className="px-4 py-2">بطبيعة الحال، شنو خاصك؟</td>
              <td className="px-4 py-2">b tbi3t l7al, shnu khasak?</td>
              <td className="px-4 py-2">Helpful response.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thank you, I appreciate it.</td>
              <td className="px-4 py-2">شكرا، كنقدر الخدمة ديالك.</td>
              <td className="px-4 py-2">shukran, knqdr l khdma dyalk.</td>
              <td className="px-4 py-2">Polite closing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}