"use client";

import React from 'react';

export default function DietaryPreferences() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Dietary Preferences</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">English</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-2">I'm vegetarian</td>
              <td className="px-4 py-2">أنا نباتي</td>
              <td className="px-4 py-2">ana nebati</td>
              <td className="px-4 py-2">For female, use "نباتية" (nebatia).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I'm vegan</td>
              <td className="px-4 py-2">أنا فيغان</td>
              <td className="px-4 py-2">ana vegan</td>
              <td className="px-4 py-2">Loanword; most servers understand it.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Halal</td>
              <td className="px-4 py-2">حلال</td>
              <td className="px-4 py-2">halal</td>
              <td className="px-4 py-2">Most Moroccan meat is halal by default.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">I have an allergy to ...</td>
              <td className="px-4 py-2">عندي حساسية من ...</td>
              <td className="px-4 py-2">3ndi 7sasya mn ...</td>
              <td className="px-4 py-2">Specify ingredient, e.g., peanuts.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Gluten-free</td>
              <td className="px-4 py-2">بلا جلوتين</td>
              <td className="px-4 py-2">bla gluten</td>
              <td className="px-4 py-2">Useful for bread/pastry items.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">No sugar</td>
              <td className="px-4 py-2">بلا سكر</td>
              <td className="px-4 py-2">bla skkar</td>
              <td className="px-4 py-2">Common request for tea/juice.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Lactose intolerant</td>
              <td className="px-4 py-2">عندي عدم تحمل اللاكتوز</td>
              <td className="px-4 py-2">3ndi 3adam ta7ammol laktoz</td>
              <td className="px-4 py-2">Ask for dairy-free alternatives.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}