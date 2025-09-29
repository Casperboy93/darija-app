"use client";

import React from 'react';

export default function CommonExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Common Family Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Kifash l3a'ila? (How is the family?)</p>
          <p className="text-gray-600 mb-1">A common greeting asking about family</p>
          <p className="text-sm italic text-gray-500">Pronounced: kee-fash l-ah-ee-la</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">3andi khamsa f l3a'ila (I have five in the family)</p>
          <p className="text-gray-600 mb-1">Describing family size</p>
          <p className="text-sm italic text-gray-500">Pronounced: an-dee kham-sa f l-ah-ee-la</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Ana l kbir / Ana s-sghir (I'm the oldest / I'm the youngest)</p>
          <p className="text-gray-600 mb-1">Describing birth order</p>
          <p className="text-sm italic text-gray-500">Pronounced: ah-na l k-beer / ah-na s-sgheer</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Hada khay / Hadi khti (This is my brother / This is my sister)</p>
          <p className="text-gray-600 mb-1">Introducing family members</p>
          <p className="text-sm italic text-gray-500">Pronounced: ha-da kh-eye / ha-dee kh-tee</p>
        </div>
      </div>
    </div>
  );
}