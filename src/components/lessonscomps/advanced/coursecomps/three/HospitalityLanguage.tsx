"use client";

import React from 'react';

export default function HospitalityLanguage() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Hospitality Language
      </h2>
      
      <p className="text-gray-700 mb-6">Moroccan hospitality is legendary, and specific phrases accompany these customs:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Welcoming Guests</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Ahlan wa sahlan</p>
              <p className="text-gray-600">Welcome (formal greeting)</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Dar dyalkum</p>
              <p className="text-gray-600">"This is your house" - making guests feel at home</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Tfeddel/Tfeddli</p>
              <p className="text-gray-600">Please come in/sit down (m/f)</p>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Food & Drink Etiquette</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Bismillah</p>
              <p className="text-gray-600">Invitation to start eating</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Bshha</p>
              <p className="text-gray-600">Enjoy your meal/drink (literally "with health")</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Kul/Kuli</p>
              <p className="text-gray-600">Eat! (encouraging guests to eat more)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-purple-200 rounded-lg p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-3">Typical Hospitality Exchange</h3>
        <div className="space-y-3">
          <div className="flex">
            <div className="bg-purple-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Host:</p>
              <p className="text-gray-700">Ahlan wa sahlan! Dar dyalkum. Tfeddel.</p>
              <p className="text-gray-500 italic text-sm">(Welcome! This is your house. Please come in.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Guest:</p>
              <p className="text-gray-700">Llah y3tik sshha. Baraka llahu fik.</p>
              <p className="text-gray-500 italic text-sm">(May God give you health. God bless you.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-purple-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Host (offering tea):</p>
              <p className="text-gray-700">Bismillah, shreb atay. Bshha.</p>
              <p className="text-gray-500 italic text-sm">(In God's name, drink tea. Enjoy it with health.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}