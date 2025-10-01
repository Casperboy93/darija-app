"use client";

import React from 'react';

export default function HistoricalPeriods() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Historical Periods & Dynasties</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Ancient Period</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded">
              <h4 className="font-medium text-amber-800 mb-2">البربر الأمازيغ</h4>
              <p className="text-amber-700 text-sm mb-2">Berber Amazigh People</p>
              <p className="text-gray-600 text-sm">The indigenous people of North Africa, with a rich culture and language that predates Arab conquest.</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800 mb-2">الرومان</h4>
              <p className="text-blue-700 text-sm mb-2">Romans</p>
              <p className="text-gray-600 text-sm">Roman influence in Morocco, particularly visible in the ruins of Volubilis near Meknes.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Islamic Dynasties</h3>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-green-800">الأدارسة</h4>
                <span className="text-green-600 text-sm">788-974 AD</span>
              </div>
              <p className="text-green-700 text-sm mb-1">Idrisid Dynasty</p>
              <p className="text-gray-600 text-sm">Founded the first Islamic state in Morocco and established Fez as the capital.</p>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-purple-800">المرابطون</h4>
                <span className="text-purple-600 text-sm">1040-1147 AD</span>
              </div>
              <p className="text-purple-700 text-sm mb-1">Almoravid Dynasty</p>
              <p className="text-gray-600 text-sm">Established Marrakech and controlled trade routes across the Sahara.</p>
            </div>
            
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-red-800">الموحدون</h4>
                <span className="text-red-600 text-sm">1121-1269 AD</span>
              </div>
              <p className="text-red-700 text-sm mb-1">Almohad Dynasty</p>
              <p className="text-gray-600 text-sm">Built many of Morocco's most famous monuments, including the Kutubiyya Mosque.</p>
            </div>
            
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-orange-800">المرينيون</h4>
                <span className="text-orange-600 text-sm">1244-1465 AD</span>
              </div>
              <p className="text-orange-700 text-sm mb-1">Marinid Dynasty</p>
              <p className="text-gray-600 text-sm">Known for their architectural achievements and the development of Islamic education.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Modern Dynasties</h3>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-yellow-800">السعديون</h4>
                <span className="text-yellow-600 text-sm">1549-1659 AD</span>
              </div>
              <p className="text-yellow-700 text-sm mb-1">Saadian Dynasty</p>
              <p className="text-gray-600 text-sm">Famous for the Saadian Tombs and El Badi Palace in Marrakech.</p>
            </div>
            
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-indigo-800">العلويون</h4>
                <span className="text-indigo-600 text-sm">1666-Present</span>
              </div>
              <p className="text-indigo-700 text-sm mb-1">Alaouite Dynasty</p>
              <p className="text-gray-600 text-sm">The current ruling dynasty, established by Moulay Ali Cherif.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Historical Vocabulary</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">تاريخ</div>
              <div className="text-gray-600 text-sm">History</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">سلالة</div>
              <div className="text-gray-600 text-sm">Dynasty</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">ملك</div>
              <div className="text-gray-600 text-sm">King</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">سلطان</div>
              <div className="text-gray-600 text-sm">Sultan</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">قصر</div>
              <div className="text-gray-600 text-sm">Palace</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">مسجد</div>
              <div className="text-gray-600 text-sm">Mosque</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">قلعة</div>
              <div className="text-gray-600 text-sm">Fortress</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">آثار</div>
              <div className="text-gray-600 text-sm">Ruins/Monuments</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="font-medium text-gray-800">حضارة</div>
              <div className="text-gray-600 text-sm">Civilization</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold text-blue-800 mb-2">👑 Royal Titles in Darija:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>الملك</strong> - The King (current title)</li>
              <li>• <strong>أمير المؤمنين</strong> - Commander of the Faithful</li>
              <li>• <strong>مولاي</strong> - My Lord (royal prefix)</li>
            </ul>
          </div>
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>السلطان</strong> - Sultan (historical title)</li>
              <li>• <strong>الخليفة</strong> - Caliph</li>
              <li>• <strong>الأمير</strong> - Prince/Emir</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}