"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      {/* Dialogue 1: Buying a Bus Ticket */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Buying a Bus Ticket</h3>
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
              <td className="px-4 py-2">I want a ticket to Rabat.</td>
              <td className="px-4 py-2">بغيت تيكي لرباط.</td>
              <td className="px-4 py-2">bghit tiki l Rbat.</td>
              <td className="px-4 py-2">Destination.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">One-way or round-trip?</td>
              <td className="px-4 py-2">اتجاه واحد ولا ذهاب وإياب؟</td>
              <td className="px-4 py-2">itti jah wa7ed wla dhhab w iyaab?</td>
              <td className="px-4 py-2">Options.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Round-trip, please.</td>
              <td className="px-4 py-2">ذهاب وإياب عفاك.</td>
              <td className="px-4 py-2">dhhab w iyaab afak.</td>
              <td className="px-4 py-2">Preference.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Departure time?</td>
              <td className="px-4 py-2">وقت الانطلاق؟</td>
              <td className="px-4 py-2">wqt l intilaq?</td>
              <td className="px-4 py-2">Schedule.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">At 3 PM.</td>
              <td className="px-4 py-2">مع الثلاثة دالعشية.</td>
              <td className="px-4 py-2">m3a tlata d l 3shiya.</td>
              <td className="px-4 py-2">Time.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 2: Asking for Directions */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Asking for Directions</h3>
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
              <td className="px-4 py-2">Excuse me, where is the tram stop?</td>
              <td className="px-4 py-2">سمح ليا، فين الوقفة ديال الترام؟</td>
              <td className="px-4 py-2">sm7 liya, fin l wqfa dyal tram?</td>
              <td className="px-4 py-2">Polite opener.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Go straight, then turn right.</td>
              <td className="px-4 py-2">سير نيشان ومن بعد دور على ليمن.</td>
              <td className="px-4 py-2">sir nishan w mn b3d dour 3la l ymen.</td>
              <td className="px-4 py-2">Directions.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thank you very much.</td>
              <td className="px-4 py-2">شكراً بزاف.</td>
              <td className="px-4 py-2">shukran bzzaf.</td>
              <td className="px-4 py-2">Polite close.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 3: Train Delay */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Train Delay</h3>
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
              <td className="px-4 py-2">Is the train delayed?</td>
              <td className="px-4 py-2">واش التران متأخر؟</td>
              <td className="px-4 py-2">wash tran mt'akhr?</td>
              <td className="px-4 py-2">Status.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, about 20 minutes.</td>
              <td className="px-4 py-2">إيه، شي عشرين دقيقة.</td>
              <td className="px-4 py-2">ih, shi 3shrin dqiqa.</td>
              <td className="px-4 py-2">Duration.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, thank you.</td>
              <td className="px-4 py-2">واخا، شكراً.</td>
              <td className="px-4 py-2">wakha, shukran.</td>
              <td className="px-4 py-2">Close.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}