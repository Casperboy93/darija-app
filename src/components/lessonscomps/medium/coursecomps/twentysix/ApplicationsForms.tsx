"use client";

import React from 'react';

export default function ApplicationsForms() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Applications & Forms</h3>
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
            <td className="px-4 py-2">I need to fill a form</td>
            <td className="px-4 py-2">خاصني نعمر واحد الفورم</td>
            <td className="px-4 py-2">khasni n3ammar wa7d l form</td>
            <td className="px-4 py-2">Form filling.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Where do I submit it?</td>
            <td className="px-4 py-2">فين نقدمّو؟</td>
            <td className="px-4 py-2">fin nqddmo?</td>
            <td className="px-4 py-2">Submission place.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is a copy required?</td>
            <td className="px-4 py-2">واش خاص نسخة؟</td>
            <td className="px-4 py-2">wash khas nskha?</td>
            <td className="px-4 py-2">Document copy.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need help with this section</td>
            <td className="px-4 py-2">بغيت مساعدة فهاذ الخانة</td>
            <td className="px-4 py-2">bghit msa3da f had l khana</td>
            <td className="px-4 py-2">Assistance request.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Is the application fee required?</td>
            <td className="px-4 py-2">واش كاين واجب الطلب؟</td>
            <td className="px-4 py-2">wash kayn wajib t talab?</td>
            <td className="px-4 py-2">Payment info.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}