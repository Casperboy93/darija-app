"use client";

import React from 'react';

export default function CulturalLandmarks() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cultural Landmarks & Heritage Sites</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">UNESCO World Heritage Sites</h3>
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-amber-800">مدينة فاس العتيقة</h4>
                <span className="text-amber-600 text-xs bg-amber-100 px-2 py-1 rounded">UNESCO 1981</span>
              </div>
              <p className="text-amber-700 text-sm mb-2">Medina of Fez</p>
              <p className="text-gray-600 text-sm">The world's largest car-free urban area and one of the best-preserved historic cities in the Arab-Muslim world.</p>
              <div className="mt-2 text-xs text-amber-600">
                <strong>Famous for:</strong> جامعة القرويين (Al-Qarawiyyin University), دباغة الجلود (Leather tanneries)
              </div>
            </div>
            
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-red-800">مدينة مراكش العتيقة</h4>
                <span className="text-red-600 text-xs bg-red-100 px-2 py-1 rounded">UNESCO 1985</span>
              </div>
              <p className="text-red-700 text-sm mb-2">Medina of Marrakech</p>
              <p className="text-gray-600 text-sm">The "Red City" with its famous Jemaa el-Fnaa square and vibrant souks.</p>
              <div className="mt-2 text-xs text-red-600">
                <strong>Famous for:</strong> ساحة جامع الفنا (Jemaa el-Fnaa), مسجد الكتبية (Kutubiyya Mosque)
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-blue-800">آيت بن حدو</h4>
                <span className="text-blue-600 text-xs bg-blue-100 px-2 py-1 rounded">UNESCO 1987</span>
              </div>
              <p className="text-blue-700 text-sm mb-2">Aït Benhaddou</p>
              <p className="text-gray-600 text-sm">A fortified village (ksar) along the former caravan route between the Sahara and Marrakech.</p>
              <div className="mt-2 text-xs text-blue-600">
                <strong>Famous for:</strong> قصر (Ksar architecture), أفلام هوليوود (Hollywood movies)
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-green-800">مدينة مكناس التاريخية</h4>
                <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">UNESCO 1996</span>
              </div>
              <p className="text-green-700 text-sm mb-2">Historic City of Meknes</p>
              <p className="text-gray-600 text-sm">The "Versailles of Morocco" built by Sultan Moulay Ismail in the 17th century.</p>
              <div className="mt-2 text-xs text-green-600">
                <strong>Famous for:</strong> باب المنصور (Bab Mansour), إسطبلات الخيل (Royal Stables)
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-purple-800">موقع وليلي الأثري</h4>
                <span className="text-purple-600 text-xs bg-purple-100 px-2 py-1 rounded">UNESCO 1997</span>
              </div>
              <p className="text-purple-700 text-sm mb-2">Archaeological Site of Volubilis</p>
              <p className="text-gray-600 text-sm">The best-preserved Roman ruins in Morocco, dating back to the 3rd century BC.</p>
              <div className="mt-2 text-xs text-purple-600">
                <strong>Famous for:</strong> فسيفساء رومانية (Roman mosaics), معبد كابيتول (Capitol Temple)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Famous Monuments & Architecture</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                <h4 className="font-medium text-orange-800 mb-1">مسجد الحسن الثاني</h4>
                <p className="text-orange-700 text-sm mb-1">Hassan II Mosque</p>
                <p className="text-gray-600 text-xs">Casablanca - One of the largest mosques in the world</p>
              </div>
              
              <div className="p-3 bg-teal-50 border border-teal-200 rounded">
                <h4 className="font-medium text-teal-800 mb-1">صومعة حسان</h4>
                <p className="text-teal-700 text-sm mb-1">Hassan Tower</p>
                <p className="text-gray-600 text-xs">Rabat - Minaret of an incomplete mosque from the 12th century</p>
              </div>
              
              <div className="p-3 bg-pink-50 border border-pink-200 rounded">
                <h4 className="font-medium text-pink-800 mb-1">قصر البديع</h4>
                <p className="text-pink-700 text-sm mb-1">El Badi Palace</p>
                <p className="text-gray-600 text-xs">Marrakech - Ruins of a 16th-century Saadian palace</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded">
                <h4 className="font-medium text-indigo-800 mb-1">قصبة الأوداية</h4>
                <p className="text-indigo-700 text-sm mb-1">Kasbah of the Udayas</p>
                <p className="text-gray-600 text-xs">Rabat - 12th-century fortified complex</p>
              </div>
              
              <div className="p-3 bg-cyan-50 border border-cyan-200 rounded">
                <h4 className="font-medium text-cyan-800 mb-1">مدرسة بن يوسف</h4>
                <p className="text-cyan-700 text-sm mb-1">Ben Youssef Madrasa</p>
                <p className="text-gray-600 text-xs">Marrakech - Historic Islamic college with stunning architecture</p>
              </div>
              
              <div className="p-3 bg-lime-50 border border-lime-200 rounded">
                <h4 className="font-medium text-lime-800 mb-1">مقابر السعديين</h4>
                <p className="text-lime-700 text-sm mb-1">Saadian Tombs</p>
                <p className="text-gray-600 text-xs">Marrakech - 16th-century royal necropolis</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Architectural Vocabulary</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Religious Architecture</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">مسجد</div>
                  <div className="text-gray-600">Mosque</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">صومعة</div>
                  <div className="text-gray-600">Minaret</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">مدرسة</div>
                  <div className="text-gray-600">Madrasa</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">محراب</div>
                  <div className="text-gray-600">Mihrab</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Palace Architecture</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">قصر</div>
                  <div className="text-gray-600">Palace</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">رياض</div>
                  <div className="text-gray-600">Riad</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">صحن</div>
                  <div className="text-gray-600">Courtyard</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">نافورة</div>
                  <div className="text-gray-600">Fountain</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Defensive Architecture</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">قصبة</div>
                  <div className="text-gray-600">Kasbah</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">باب</div>
                  <div className="text-gray-600">Gate</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">سور</div>
                  <div className="text-gray-600">Wall</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">برج</div>
                  <div className="text-gray-600">Tower</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded">
        <h3 className="font-semibold text-amber-800 mb-2">🏛️ Visiting Landmarks in Darija:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-amber-700 space-y-1">
              <li>• <strong>بغيت نزور...</strong> - I want to visit...</li>
              <li>• <strong>فين كاين...؟</strong> - Where is...?</li>
              <li>• <strong>شحال الدخلة؟</strong> - How much is the entrance?</li>
              <li>• <strong>واش مفتوح اليوم؟</strong> - Is it open today?</li>
            </ul>
          </div>
          <div>
            <ul className="text-amber-700 space-y-1">
              <li>• <strong>هاد المكان زوين بزاف</strong> - This place is very beautiful</li>
              <li>• <strong>تاريخ عريق</strong> - Rich history</li>
              <li>• <strong>معمار تقليدي</strong> - Traditional architecture</li>
              <li>• <strong>تراث ثقافي</strong> - Cultural heritage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}