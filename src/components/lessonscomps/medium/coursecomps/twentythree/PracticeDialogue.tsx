"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 1: Asking About an Apartment</h3>
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
              <td className="px-4 py-2">Hello, I'm looking for an apartment.</td>
              <td className="px-4 py-2">سلام، كنقلب على شقة.</td>
              <td className="px-4 py-2">salam, k nqleb ala shqa.</td>
              <td className="px-4 py-2">Initial inquiry.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">What is the monthly rent?</td>
              <td className="px-4 py-2">بشحال الكراء الشهري؟</td>
              <td className="px-4 py-2">b shhal l kra shhri?</td>
              <td className="px-4 py-2">Ask for price.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Can I visit it today?</td>
              <td className="px-4 py-2">نقدر نزورها اليوم؟</td>
              <td className="px-4 py-2">nqdr nzurha lyum?</td>
              <td className="px-4 py-2">Viewing request.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 2: Lease Details</h3>
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
              <td className="px-4 py-2">When does the lease start?</td>
              <td className="px-4 py-2">فاش كيبدأ العقد؟</td>
              <td className="px-4 py-2">fash kaybda l aqd?</td>
              <td className="px-4 py-2">Lease timing.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Is the deposit required?</td>
              <td className="px-4 py-2">واش كاينة ضمانة؟</td>
              <td className="px-4 py-2">wash kayna dmanah?</td>
              <td className="px-4 py-2">Security deposit.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Are utilities included?</td>
              <td className="px-4 py-2">واش الخدمات داخلة؟</td>
              <td className="px-4 py-2">wash l khadmat dakhla?</td>
              <td className="px-4 py-2">Water/electricity/internet.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 3: Maintenance Request</h3>
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
              <td className="px-4 py-2">Excuse me, there's a problem with water.</td>
              <td className="px-4 py-2">سمح ليا، كاين مشكل ف الماء.</td>
              <td className="px-4 py-2">smeh lia, kayn mshkil f l ma.</td>
              <td className="px-4 py-2">Report issue.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, we'll fix it today.</td>
              <td className="px-4 py-2">مزيان، غادي نصلحو اليوم.</td>
              <td className="px-4 py-2">mzian, ghadi nslhu lyum.</td>
              <td className="px-4 py-2">Response from landlord.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thank you, I appreciate it.</td>
              <td className="px-4 py-2">شكرا، كنقدر هاد الخدمة.</td>
              <td className="px-4 py-2">shukran, knqdr had l khdma.</td>
              <td className="px-4 py-2">Polite closing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}