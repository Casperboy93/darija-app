"use client";

import React from 'react';

export default function DescriptiveLanguage() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Rich Descriptive Language
      </h2>
      
      <p className="text-gray-700 mb-6">Master vivid descriptions that bring your stories to life:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Physical Descriptions</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">طويل كالنخلة</span> - Tawil ka-n-nakhla (Tall as a palm tree)</p>
            <p><span className="font-medium">عيونه كالنجوم</span> - 3uyunuh ka-n-nujum (His eyes like stars)</p>
            <p><span className="font-medium">شعرها كالحرير</span> - Sha3ruha ka-l-harir (Her hair like silk)</p>
            <p><span className="font-medium">صوته كالرعد</span> - Sawtuh ka-r-ra3d (His voice like thunder)</p>
            <p><span className="font-medium">وجهها كالقمر</span> - Wajhuha ka-l-qamar (Her face like the moon)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Setting Descriptions</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">قصر فخم</span> - Qasr fakham (Magnificent palace)</p>
            <p><span className="font-medium">غابة مظلمة</span> - Ghaba muzlima (Dark forest)</p>
            <p><span className="font-medium">صحراء واسعة</span> - Sahra2 wasi3a (Vast desert)</p>
            <p><span className="font-medium">بحر هائج</span> - Bahr ha2ij (Raging sea)</p>
            <p><span className="font-medium">جبل شاهق</span> - Jabal shahiq (Towering mountain)</p>
          </div>
        </div>
      </div>
    </div>
  );
}