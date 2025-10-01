"use client";

import React from 'react';

export default function TechTrends() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Trends & Future Tech</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Emerging Technologies</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 border border-purple-200 rounded">
              <div className="font-medium text-purple-800">ذكاء اصطناعي</div>
              <div className="text-purple-600 text-sm">Artificial Intelligence (AI)</div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="font-medium text-blue-800">واقع افتراضي</div>
              <div className="text-blue-600 text-sm">Virtual Reality (VR)</div>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <div className="font-medium text-green-800">واقع معزز</div>
              <div className="text-green-600 text-sm">Augmented Reality (AR)</div>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded">
              <div className="font-medium text-orange-800">بلوك تشين</div>
              <div className="text-orange-600 text-sm">Blockchain</div>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <div className="font-medium text-red-800">إنترنت الأشياء</div>
              <div className="text-red-600 text-sm">Internet of Things (IoT)</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Digital Services</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">خدمات سحابية</span>
              <span className="text-gray-600">Cloud services</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">تطبيقات ذكية</span>
              <span className="text-gray-600">Smart apps</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">منزل ذكي</span>
              <span className="text-gray-600">Smart home</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">سيارة ذكية</span>
              <span className="text-gray-600">Smart car</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">مساعد صوتي</span>
              <span className="text-gray-600">Voice assistant</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">روبوت</span>
              <span className="text-gray-600">Robot</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Tech Trend Phrases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">التكنولوجيا كتطور بزربة</div>
              <div className="text-gray-600 text-sm">Technology is developing rapidly</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">المستقبل غيكون رقمي</div>
              <div className="text-gray-600 text-sm">The future will be digital</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">الذكاء الاصطناعي غيغير العالم</div>
              <div className="text-gray-600 text-sm">AI will change the world</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">كلشي ولا متصل</div>
              <div className="text-gray-600 text-sm">Everything has become connected</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">خاصنا نتعلمو التكنولوجيا الجديدة</div>
              <div className="text-gray-600 text-sm">We need to learn new technology</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">هاد التطبيق عندو ميزات جديدة</div>
              <div className="text-gray-600 text-sm">This app has new features</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">الأمن السيبراني مهم بزاف</div>
              <div className="text-gray-600 text-sm">Cybersecurity is very important</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">البيانات هي النفط الجديد</div>
              <div className="text-gray-600 text-sm">Data is the new oil</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Morocco's Digital Transformation</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="font-medium text-green-800 mb-2">Government Services</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• خدمات إلكترونية (E-services)</li>
              <li>• حكومة رقمية (Digital government)</li>
              <li>• هوية رقمية (Digital ID)</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-medium text-blue-800 mb-2">Education Tech</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• تعليم عن بعد (Distance learning)</li>
              <li>• منصات تعليمية (Learning platforms)</li>
              <li>• فصول افتراضية (Virtual classrooms)</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded">
            <h4 className="font-medium text-purple-800 mb-2">Fintech</h4>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• بنوك رقمية (Digital banks)</li>
              <li>• دفع إلكتروني (Electronic payment)</li>
              <li>• محافظ رقمية (Digital wallets)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Tech Discussion</h3>
        <div className="bg-gray-50 p-4 rounded border">
          <div className="space-y-3">
            <div>
              <div className="font-medium text-gray-800">Ahmed:</div>
              <div className="text-gray-700 ml-4">شفتي هاد التطبيق الجديد؟ كيستعمل الذكاء الاصطناعي</div>
              <div className="text-gray-600 ml-4 text-sm">Did you see this new app? It uses artificial intelligence</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Fatima:</div>
              <div className="text-gray-700 ml-4">واو، التكنولوجيا كتطور بزربة! شنو كيدير؟</div>
              <div className="text-gray-600 ml-4 text-sm">Wow, technology is developing rapidly! What does it do?</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Ahmed:</div>
              <div className="text-gray-700 ml-4">كيترجم الكلام مباشرة، ومفيد بزاف للسياح</div>
              <div className="text-gray-600 ml-4 text-sm">It translates speech directly, and it's very useful for tourists</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Fatima:</div>
              <div className="text-gray-700 ml-4">هادشي زوين، المغرب كيستثمر في التكنولوجيا</div>
              <div className="text-gray-600 ml-4 text-sm">That's great, Morocco is investing in technology</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold text-blue-800 mb-2">🚀 Future Tech Vocabulary:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>حوسبة كمية</strong> - Quantum computing</li>
              <li>• <strong>طباعة ثلاثية الأبعاد</strong> - 3D printing</li>
              <li>• <strong>طائرة بدون طيار</strong> - Drone</li>
            </ul>
          </div>
          <div>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>عملة رقمية</strong> - Cryptocurrency</li>
              <li>• <strong>تعلم آلي</strong> - Machine learning</li>
              <li>• <strong>أتمتة</strong> - Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}