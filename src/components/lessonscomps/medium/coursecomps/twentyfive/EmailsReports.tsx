"use client";

import React from 'react';

export default function EmailsReports() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Emails & Reports</h3>
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
            <td className="px-4 py-2">I will send an email</td>
            <td className="px-4 py-2">غادي نرسل إيميل</td>
            <td className="px-4 py-2">ghadi nrsal email</td>
            <td className="px-4 py-2">Common office action.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Please find attached</td>
            <td className="px-4 py-2">ستيلو المرفقات</td>
            <td className="px-4 py-2">stiilu l marfqat</td>
            <td className="px-4 py-2">Attachment phrase.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I’ll prepare the report</td>
            <td className="px-4 py-2">غادي نوجد التقرير</td>
            <td className="px-4 py-2">ghadi nwjjd ttaqrir</td>
            <td className="px-4 py-2">Report writing.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Could you review it?</td>
            <td className="px-4 py-2">تقدر تراجعو؟</td>
            <td className="px-4 py-2">tqdr traj3o?</td>
            <td className="px-4 py-2">Request review.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Thanks for your feedback</td>
            <td className="px-4 py-2">شكرا على الملاحظات</td>
            <td className="px-4 py-2">shukran 3la l mllahadhat</td>
            <td className="px-4 py-2">Acknowledgement.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}