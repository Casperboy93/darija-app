"use client";

import React from 'react';

export default function WorkplaceVocabulary() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Workplace Vocabulary</h3>
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
            <td className="px-4 py-2">Office</td>
            <td className="px-4 py-2">المكتب</td>
            <td className="px-4 py-2">l mktab</td>
            <td className="px-4 py-2">Workplace location.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Meeting</td>
            <td className="px-4 py-2">اجتماع</td>
            <td className="px-4 py-2">ijtima3</td>
            <td className="px-4 py-2">Team discussion.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Manager</td>
            <td className="px-4 py-2">المسؤول</td>
            <td className="px-4 py-2">l ms2ul</td>
            <td className="px-4 py-2">Supervisor role.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Deadline</td>
            <td className="px-4 py-2">آخر أجل</td>
            <td className="px-4 py-2">akhr ajal</td>
            <td className="px-4 py-2">Due date.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Task</td>
            <td className="px-4 py-2">مهمة</td>
            <td className="px-4 py-2">mohima</td>
            <td className="px-4 py-2">Assigned work item.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}