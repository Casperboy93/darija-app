"use client";

import React from 'react';

export default function OfficeCommunication() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Communication</h3>
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
            <td className="px-4 py-2">Good morning team</td>
            <td className="px-4 py-2">صباح الخير الفريق</td>
            <td className="px-4 py-2">sabah lkhir l fariq</td>
            <td className="px-4 py-2">Daily greeting.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Can we discuss this?</td>
            <td className="px-4 py-2">نقدرو نهضرو فهاذ الموضوع؟</td>
            <td className="px-4 py-2">nqdro nhdro f had lmawdu3?</td>
            <td className="px-4 py-2">Initiate discussion.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I’ll send you the file</td>
            <td className="px-4 py-2">غادي نرسل ليك الملف</td>
            <td className="px-4 py-2">ghadi nrsal lik l mlaf</td>
            <td className="px-4 py-2">Sharing documents.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Please keep me updated</td>
            <td className="px-4 py-2">عفاك عيط ليا بالتحديثات</td>
            <td className="px-4 py-2">afak 3yit lia b t7dithat</td>
            <td className="px-4 py-2">Asking for updates.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Let’s follow up later</td>
            <td className="px-4 py-2">نتبعو من بعد</td>
            <td className="px-4 py-2">ntab3u mn b3d</td>
            <td className="px-4 py-2">Follow-up.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}