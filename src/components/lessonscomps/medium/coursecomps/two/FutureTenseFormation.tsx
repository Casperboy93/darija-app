"use client";

import React from 'react';

export default function FutureTenseFormation() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Future Tense Formation</h2>
      
      <p className="text-gray-700 mb-4">
        In Darija, the future tense is formed by adding <strong>"ghadi"</strong> or <strong>"gha"</strong> before the present tense verb.
      </p>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="font-medium text-blue-800">Formula:</p>
        <p className="text-gray-700 mt-1">
          <strong>ghadi/gha + present tense verb</strong>
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Subject</th>
              <th className="border border-gray-300 p-3 text-left">Future Form</th>
              <th className="border border-gray-300 p-3 text-left">English</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Ana (I)</td>
              <td className="border border-gray-300 p-3">Gha nmshi</td>
              <td className="border border-gray-300 p-3">I will go</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">Nta (You - m)</td>
              <td className="border border-gray-300 p-3">Gha tmshi</td>
              <td className="border border-gray-300 p-3">You will go</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Nti (You - f)</td>
              <td className="border border-gray-300 p-3">Gha tmshiy</td>
              <td className="border border-gray-300 p-3">You will go</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">Huwa (He)</td>
              <td className="border border-gray-300 p-3">Gha ymshi</td>
              <td className="border border-gray-300 p-3">He will go</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Hiya (She)</td>
              <td className="border border-gray-300 p-3">Gha tmshi</td>
              <td className="border border-gray-300 p-3">She will go</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">Hna (We)</td>
              <td className="border border-gray-300 p-3">Gha nmshiw</td>
              <td className="border border-gray-300 p-3">We will go</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Ntuma (You - pl)</td>
              <td className="border border-gray-300 p-3">Gha tmshiw</td>
              <td className="border border-gray-300 p-3">You will go</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">Huma (They)</td>
              <td className="border border-gray-300 p-3">Gha ymshiw</td>
              <td className="border border-gray-300 p-3">They will go</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <p className="font-medium text-yellow-800">Pronunciation Tip:</p>
        <p className="text-gray-700 mt-1">
          "Gha" is often used in casual speech, while "ghadi" is more formal. Both are pronounced with a soft "gh" sound.
        </p>
      </div>
    </div>
  );
}