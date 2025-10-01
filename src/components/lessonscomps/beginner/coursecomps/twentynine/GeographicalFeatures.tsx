"use client";

import React from 'react';

export default function GeographicalFeatures() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Geographical Features of Morocco</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Mountain Ranges</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h4 className="font-medium text-green-800 mb-2">جبال الأطلس</h4>
              <p className="text-green-700 text-sm mb-2">Atlas Mountains</p>
              <p className="text-gray-600 text-sm">The major mountain system extending across Morocco, Algeria, and Tunisia.</p>
              <div className="mt-2 text-xs text-green-600">
                <strong>Highest Peak:</strong> جبل توبقال (Jebel Toubkal) - 4,167m
              </div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800 mb-2">جبال الريف</h4>
              <p className="text-blue-700 text-sm mb-2">Rif Mountains</p>
              <p className="text-gray-600 text-sm">Mountain range in northern Morocco, parallel to the Mediterranean coast.</p>
              <div className="mt-2 text-xs text-blue-600">
                <strong>Highest Peak:</strong> جبل تيديغين (Jebel Tidirhine) - 2,456m
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Deserts</h3>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <h4 className="font-medium text-yellow-800 mb-2">الصحراء الكبرى</h4>
            <p className="text-yellow-700 text-sm mb-2">Sahara Desert</p>
            <p className="text-gray-600 text-sm mb-3">The world's largest hot desert, covering much of southern Morocco.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-yellow-700 mb-2">Desert Features:</h5>
                <ul className="text-yellow-600 text-sm space-y-1">
                  <li>• <strong>عرق الشبي</strong> - Erg Chebbi (sand dunes)</li>
                  <li>• <strong>عرق الشيقاقة</strong> - Erg Chigaga (sand dunes)</li>
                  <li>• <strong>واحة</strong> - Oasis</li>
                  <li>• <strong>قافلة</strong> - Caravan</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-yellow-700 mb-2">Desert Cities:</h5>
                <ul className="text-yellow-600 text-sm space-y-1">
                  <li>• <strong>مرزوقة</strong> - Merzouga</li>
                  <li>• <strong>زاكورة</strong> - Zagora</li>
                  <li>• <strong>ورزازات</strong> - Ouarzazate</li>
                  <li>• <strong>الراشيدية</strong> - Errachidia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Coastlines</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800 mb-2">البحر الأبيض المتوسط</h4>
              <p className="text-blue-700 text-sm mb-2">Mediterranean Sea</p>
              <p className="text-gray-600 text-sm">Northern coastline with beautiful beaches and historic ports.</p>
              <div className="mt-2 text-xs text-blue-600">
                <strong>Major Cities:</strong> طنجة (Tangier), تطوان (Tetouan), الحسيمة (Al Hoceima)
              </div>
            </div>
            <div className="p-4 bg-teal-50 border border-teal-200 rounded">
              <h4 className="font-medium text-teal-800 mb-2">المحيط الأطلسي</h4>
              <p className="text-teal-700 text-sm mb-2">Atlantic Ocean</p>
              <p className="text-gray-600 text-sm">Western coastline stretching from Tangier to the Sahara.</p>
              <div className="mt-2 text-xs text-teal-600">
                <strong>Major Cities:</strong> الدار البيضاء (Casablanca), الرباط (Rabat), أكادير (Agadir)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Rivers & Valleys</h3>
          <div className="space-y-3">
            <div className="p-4 bg-cyan-50 border border-cyan-200 rounded">
              <h4 className="font-medium text-cyan-800 mb-2">نهر سبو</h4>
              <p className="text-cyan-700 text-sm mb-2">Sebou River</p>
              <p className="text-gray-600 text-sm">Morocco's longest river, flowing through the fertile plains near Fez and Meknes.</p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded">
              <h4 className="font-medium text-emerald-800 mb-2">وادي درعة</h4>
              <p className="text-emerald-700 text-sm mb-2">Draa Valley</p>
              <p className="text-gray-600 text-sm">Morocco's longest river valley, extending from the Atlas Mountains to the Atlantic.</p>
            </div>
            <div className="p-4 bg-lime-50 border border-lime-200 rounded">
              <h4 className="font-medium text-lime-800 mb-2">وادي سوس</h4>
              <p className="text-lime-700 text-sm mb-2">Souss Valley</p>
              <p className="text-gray-600 text-sm">Fertile valley in southern Morocco, known for agriculture and argan trees.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Geographical Vocabulary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Landforms</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">جبل</div>
                <div className="text-gray-600">Mountain</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">تل</div>
                <div className="text-gray-600">Hill</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">وادي</div>
                <div className="text-gray-600">Valley</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Water Bodies</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">نهر</div>
                <div className="text-gray-600">River</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">بحر</div>
                <div className="text-gray-600">Sea</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">محيط</div>
                <div className="text-gray-600">Ocean</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Climate Zones</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">صحراء</div>
                <div className="text-gray-600">Desert</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">ساحل</div>
                <div className="text-gray-600">Coast</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">غابة</div>
                <div className="text-gray-600">Forest</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Directions</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">شمال</div>
                <div className="text-gray-600">North</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">جنوب</div>
                <div className="text-gray-600">South</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">شرق/غرب</div>
                <div className="text-gray-600">East/West</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-semibold text-green-800 mb-2">🗺️ Describing Location in Darija:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-green-700 space-y-1">
              <li>• <strong>فين كاين...؟</strong> - Where is...?</li>
              <li>• <strong>...كاين في الشمال</strong> - ...is in the north</li>
              <li>• <strong>قريب من البحر</strong> - Close to the sea</li>
              <li>• <strong>بعيد على الصحراء</strong> - Far from the desert</li>
            </ul>
          </div>
          <div>
            <ul className="text-green-700 space-y-1">
              <li>• <strong>في الجبال</strong> - In the mountains</li>
              <li>• <strong>على الساحل</strong> - On the coast</li>
              <li>• <strong>في الوسط</strong> - In the center</li>
              <li>• <strong>بين...و...</strong> - Between...and...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}