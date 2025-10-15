"use client";

import React from 'react';

export default function JobTitles() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Job Titles and Professions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-3">Professional Services</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Muhasib:</span> Accountant</p>
            <p><span className="font-semibold">Muhami:</span> Lawyer</p>
            <p><span className="font-semibold">Muhandis:</span> Engineer</p>
            <p><span className="font-semibold">Tabib:</span> Doctor</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-3">Business Roles</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Bayi3:</span> Salesperson</p>
            <p><span className="font-semibold">Kātib:</span> Secretary</p>
            <p><span className="font-semibold">Muwazzaf:</span> Employee</p>
            <p><span className="font-semibold">Ra'is:</span> Boss/Chief</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-3">Technical Fields</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Mubaramij:</span> Programmer</p>
            <p><span className="font-semibold">Musammim:</span> Designer</p>
            <p><span className="font-semibold">Mudarris:</span> Teacher</p>
            <p><span className="font-semibold">Sahafi:</span> Journalist</p>
          </div>
        </div>
      </div>
    </div>
  );
}