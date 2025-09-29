"use client";

import React from 'react';

export default function TraditionalDishes() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Traditional Moroccan Dishes
      </h2>
      
      <p className="text-gray-700 mb-6">These are the iconic dishes you'll encounter throughout Morocco, each with its own cultural significance and regional variations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Tajine</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
          </div>
          <p className="text-gray-600">Traditional slow-cooked stew</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ta-jeen</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Varieties:</span> Chicken, lamb, vegetable, fish</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Couscous</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Staple</span>
          </div>
          <p className="text-gray-600">Steamed semolina grain dish</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: koos-koos</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Tradition:</span> Served on Fridays after prayer</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Pastilla</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Specialty</span>
          </div>
          <p className="text-gray-600">Sweet and savory pastry</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: pas-tee-ya</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Filling:</span> Usually pigeon, chicken, or seafood</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Harira</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Soup</span>
          </div>
          <p className="text-gray-600">Traditional tomato-based soup</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ha-ree-ra</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">When:</span> Popular during Ramadan for iftar</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kefta</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Meat</span>
          </div>
          <p className="text-gray-600">Spiced meatballs or kebabs</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kef-ta</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Style:</span> Grilled, in tajine, or with eggs</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Khobz</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Bread</span>
          </div>
          <p className="text-gray-600">Traditional round flatbread</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-obz</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Eaten with every meal</p>
          </div>
        </div>
      </div>
    </div>
  );
}