"use client";

import React from 'react';

export default function TraditionalCustoms() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Traditional Customs
      </h2>
      
      <p className="text-gray-700 mb-6">Explore the rich customs and traditions that define Moroccan culture.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">Wedding Traditions</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">3urs:</span> Wedding</p>
            <p><span className="font-semibold">Ḥenna:</span> Henna ceremony</p>
            <p><span className="font-semibold">Takhrīja:</span> Bridal procession</p>
            <p><span className="font-semibold">Negāfa:</span> Wedding planner</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">Birth Traditions</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Sbu3:</span> Naming ceremony (7th day)</p>
            <p><span className="font-semibold">3aqīqa:</span> Birth celebration</p>
            <p><span className="font-semibold">Khitān:</span> Circumcision</p>
            <p><span className="font-semibold">Tamr u lben:</span> Dates and milk</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">Hospitality</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Ḍiyāfa:</span> Hospitality</p>
            <p><span className="font-semibold">Atāy:</span> Tea ceremony</p>
            <p><span className="font-semibold">Kuskus l jum3a:</span> Friday couscous</p>
            <p><span className="font-semibold">Baraka:</span> Blessing</p>
          </div>
        </div>
      </div>
    </div>
  );
}