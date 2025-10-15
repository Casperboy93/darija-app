"use client";

import React from 'react';

export default function MeetingsTasks() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Meetings & Task Delegation</h3>
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
            <td className="px-4 py-2">Let’s start the meeting</td>
            <td className="px-4 py-2">نبدأو الاجتماع</td>
            <td className="px-4 py-2">nbdaou l ijtima3</td>
            <td className="px-4 py-2">Kickoff.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What are today’s priorities?</td>
            <td className="px-4 py-2">شنو الأولويات ديال اليوم؟</td>
            <td className="px-4 py-2">shnu l awlawiyat dyal lyum?</td>
            <td className="px-4 py-2">Agenda setting.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can you take this task?</td>
            <td className="px-4 py-2">تقدر تتكلف بهاذ المهمة؟</td>
            <td className="px-4 py-2">tqdr ttkllaf b had l mohima?</td>
            <td className="px-4 py-2">Delegation.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Deadline is Friday</td>
            <td className="px-4 py-2">الحد الأقصى نهار الجمعة</td>
            <td className="px-4 py-2">l 7ad l a9sa nhar jjm3a</td>
            <td className="px-4 py-2">Due date.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Let’s review next week</td>
            <td className="px-4 py-2">نراجعو الأسبوع الجاي</td>
            <td className="px-4 py-2">nraj3u l usbou3 l jai</td>
            <td className="px-4 py-2">Follow-up.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}