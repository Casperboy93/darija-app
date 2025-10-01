"use client";

import React from 'react';

export default function ModernMorocco() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Modern Morocco</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Economic Development</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800 mb-2">الاقتصاد المغربي</h4>
              <p className="text-blue-700 text-sm mb-2">Moroccan Economy</p>
              <p className="text-gray-600 text-sm mb-3">Morocco has diversified its economy beyond traditional agriculture and mining.</p>
              <div className="text-xs text-blue-600">
                <strong>Key Sectors:</strong><br/>
                • السياحة (Tourism)<br/>
                • الفلاحة (Agriculture)<br/>
                • الصناعة (Manufacturing)<br/>
                • الخدمات المالية (Financial services)
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h4 className="font-medium text-green-800 mb-2">الطاقة المتجددة</h4>
              <p className="text-green-700 text-sm mb-2">Renewable Energy</p>
              <p className="text-gray-600 text-sm mb-3">Morocco is a leader in renewable energy in Africa.</p>
              <div className="text-xs text-green-600">
                <strong>Projects:</strong><br/>
                • محطة نور ورزازات (Noor Ouarzazate Solar Complex)<br/>
                • طاقة الرياح (Wind energy)<br/>
                • الطاقة الشمسية (Solar energy)<br/>
                • الهيدروجين الأخضر (Green hydrogen)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Infrastructure & Transportation</h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <h4 className="font-medium text-red-800 mb-2">القطار فائق السرعة</h4>
              <p className="text-red-700 text-sm mb-2">High-Speed Rail (TGV)</p>
              <p className="text-gray-600 text-sm">The Al Boraq high-speed train connecting Tangier and Casablanca, the first in Africa.</p>
              <div className="mt-2 text-xs text-red-600">
                <strong>Route:</strong> طنجة - الرباط - الدار البيضاء (Tangier - Rabat - Casablanca)
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <h4 className="font-medium text-purple-800 mb-2">الموانئ الحديثة</h4>
              <p className="text-purple-700 text-sm mb-2">Modern Ports</p>
              <p className="text-gray-600 text-sm">Morocco has invested heavily in port infrastructure to become a logistics hub.</p>
              <div className="mt-2 text-xs text-purple-600">
                <strong>Major Ports:</strong> ميناء طنجة المتوسط (Tanger Med), ميناء الدار البيضاء (Casablanca Port)
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <h4 className="font-medium text-orange-800 mb-2">الطرق السيارة</h4>
              <p className="text-orange-700 text-sm mb-2">Highway Network</p>
              <p className="text-gray-600 text-sm">Extensive highway system connecting major cities across the country.</p>
              <div className="mt-2 text-xs text-orange-600">
                <strong>Major Routes:</strong> A1, A3, A4, A7 connecting all regions
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Technology & Innovation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 border border-cyan-200 rounded">
              <h4 className="font-medium text-cyan-800 mb-2">التكنولوجيا المالية</h4>
              <p className="text-cyan-700 text-sm mb-2">Fintech</p>
              <p className="text-gray-600 text-sm mb-3">Growing fintech sector with mobile banking and digital payments.</p>
              <div className="text-xs text-cyan-600">
                <strong>Examples:</strong><br/>
                • الدفع الإلكتروني (Electronic payment)<br/>
                • البنوك الرقمية (Digital banking)<br/>
                • محافظ إلكترونية (Digital wallets)
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded">
              <h4 className="font-medium text-indigo-800 mb-2">المدن الذكية</h4>
              <p className="text-indigo-700 text-sm mb-2">Smart Cities</p>
              <p className="text-gray-600 text-sm mb-3">Development of smart city initiatives in major urban centers.</p>
              <div className="text-xs text-indigo-600">
                <strong>Features:</strong><br/>
                • إنترنت الأشياء (IoT)<br/>
                • النقل الذكي (Smart transport)<br/>
                • الإدارة الرقمية (Digital governance)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Education & Healthcare</h3>
          <div className="space-y-3">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded">
              <h4 className="font-medium text-teal-800 mb-2">التعليم العالي</h4>
              <p className="text-teal-700 text-sm mb-2">Higher Education</p>
              <p className="text-gray-600 text-sm">Expansion of universities and technical institutes across the country.</p>
              <div className="mt-2 text-xs text-teal-600">
                <strong>Notable:</strong> جامعة محمد السادس للعلوم والتقنية (UM6P), الأكاديمية الدولية للطيران المدني (AIAC)
              </div>
            </div>
            
            <div className="p-4 bg-pink-50 border border-pink-200 rounded">
              <h4 className="font-medium text-pink-800 mb-2">الصحة العمومية</h4>
              <p className="text-pink-700 text-sm mb-2">Public Healthcare</p>
              <p className="text-gray-600 text-sm">Improvements in healthcare infrastructure and universal health coverage.</p>
              <div className="mt-2 text-xs text-pink-600">
                <strong>Initiatives:</strong> التأمين الصحي الإجباري (Mandatory health insurance), مستشفيات جديدة (New hospitals)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Social Development</h3>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <h4 className="font-medium text-yellow-800 mb-3">المبادرة الوطنية للتنمية البشرية</h4>
            <p className="text-yellow-700 text-sm mb-2">National Human Development Initiative (INDH)</p>
            <p className="text-gray-600 text-sm mb-3">Comprehensive program to reduce poverty and improve living conditions.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-yellow-700 mb-2">Focus Areas:</h5>
                <ul className="text-yellow-600 text-sm space-y-1">
                  <li>• محاربة الفقر (Poverty reduction)</li>
                  <li>• التعليم (Education)</li>
                  <li>• الصحة (Healthcare)</li>
                  <li>• البنية التحتية (Infrastructure)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-yellow-700 mb-2">Target Groups:</h5>
                <ul className="text-yellow-600 text-sm space-y-1">
                  <li>• المناطق القروية (Rural areas)</li>
                  <li>• الأحياء الحضرية الفقيرة (Urban slums)</li>
                  <li>• النساء (Women)</li>
                  <li>• الشباب (Youth)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Modern Morocco Vocabulary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Development</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">تنمية</div>
                <div className="text-gray-600">Development</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">تقدم</div>
                <div className="text-gray-600">Progress</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">حداثة</div>
                <div className="text-gray-600">Modernity</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Technology</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">تكنولوجيا</div>
                <div className="text-gray-600">Technology</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">ابتكار</div>
                <div className="text-gray-600">Innovation</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">رقمنة</div>
                <div className="text-gray-600">Digitalization</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Economy</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">اقتصاد</div>
                <div className="text-gray-600">Economy</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">استثمار</div>
                <div className="text-gray-600">Investment</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">تجارة</div>
                <div className="text-gray-600">Trade</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700 text-sm">Infrastructure</h4>
            <div className="space-y-1">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">بنية تحتية</div>
                <div className="text-gray-600">Infrastructure</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">مواصلات</div>
                <div className="text-gray-600">Transportation</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">اتصالات</div>
                <div className="text-gray-600">Communications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold text-blue-800 mb-2">🏗️ Discussing Modern Morocco in Darija:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>المغرب تطور بزاف</strong> - Morocco has developed a lot</li>
              <li>• <strong>مشاريع كبيرة</strong> - Big projects</li>
              <li>• <strong>تقنيات حديثة</strong> - Modern technologies</li>
              <li>• <strong>استثمارات ضخمة</strong> - Huge investments</li>
            </ul>
          </div>
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>مستقبل واعد</strong> - Promising future</li>
              <li>• <strong>تحديات جديدة</strong> - New challenges</li>
              <li>• <strong>فرص شغل</strong> - Job opportunities</li>
              <li>• <strong>جودة الحياة</strong> - Quality of life</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}