"use client";

import React from 'react';

export default function TraditionalCrafts() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Traditional Crafts & Handicrafts</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Famous Moroccan Crafts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h4 className="font-medium text-blue-800 mb-2">الزليج</h4>
              <p className="text-blue-700 text-sm mb-2">Zellige (Mosaic Tilework)</p>
              <p className="text-gray-600 text-sm mb-3">Intricate geometric mosaic tilework using hand-cut glazed terra cotta tiles.</p>
              <div className="text-xs text-blue-600">
                <strong>Famous in:</strong> فاس (Fez), مكناس (Meknes)<br/>
                <strong>Colors:</strong> أبيض (White), أزرق (Blue), أخضر (Green), أصفر (Yellow)
              </div>
            </div>
            
            <div className="p-4 bg-brown-50 border border-amber-200 rounded">
              <h4 className="font-medium text-amber-800 mb-2">الجلد</h4>
              <p className="text-amber-700 text-sm mb-2">Leather Goods</p>
              <p className="text-gray-600 text-sm mb-3">High-quality leather products including bags, shoes, and traditional babouches.</p>
              <div className="text-xs text-amber-600">
                <strong>Famous in:</strong> فاس (Fez), مراكش (Marrakech)<br/>
                <strong>Products:</strong> بلغة (Babouches), حقائب (Bags), أحزمة (Belts)
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h4 className="font-medium text-green-800 mb-2">السجاد</h4>
              <p className="text-green-700 text-sm mb-2">Carpets & Rugs</p>
              <p className="text-gray-600 text-sm mb-3">Hand-woven carpets with traditional Berber and Arab patterns.</p>
              <div className="text-xs text-green-600">
                <strong>Types:</strong> بربري (Berber), عربي (Arab), بوشاروية (Boucherouite)<br/>
                <strong>Famous in:</strong> الأطلس المتوسط (Middle Atlas), الرباط (Rabat)
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <h4 className="font-medium text-purple-800 mb-2">الفخار</h4>
              <p className="text-purple-700 text-sm mb-2">Pottery & Ceramics</p>
              <p className="text-gray-600 text-sm mb-3">Beautiful hand-painted ceramics and traditional pottery.</p>
              <div className="text-xs text-purple-600">
                <strong>Famous in:</strong> سلا (Salé), صافي (Safi), فاس (Fez)<br/>
                <strong>Items:</strong> طاجين (Tagine), أطباق (Plates), جرار (Jars)
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
              <h4 className="font-medium text-yellow-800 mb-2">النحاس</h4>
              <p className="text-yellow-700 text-sm mb-2">Brass & Copperwork</p>
              <p className="text-gray-600 text-sm mb-3">Intricate metalwork including trays, lamps, and decorative items.</p>
              <div className="text-xs text-yellow-600">
                <strong>Famous in:</strong> فاس (Fez), تطوان (Tetouan)<br/>
                <strong>Items:</strong> صينية (Tray), فانوس (Lantern), إبريق (Teapot)
              </div>
            </div>
            
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <h4 className="font-medium text-red-800 mb-2">النسيج</h4>
              <p className="text-red-700 text-sm mb-2">Textiles & Weaving</p>
              <p className="text-gray-600 text-sm mb-3">Traditional fabrics, including silk, cotton, and wool textiles.</p>
              <div className="text-xs text-red-600">
                <strong>Famous in:</strong> فاس (Fez), شفشاون (Chefchaouen)<br/>
                <strong>Items:</strong> قفطان (Caftan), حايك (Haik), برنوس (Burnous)
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Artisan Vocabulary</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Craftspeople</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">صانع</div>
                  <div className="text-gray-600">Craftsman/Artisan</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">معلم</div>
                  <div className="text-gray-600">Master Craftsman</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">متدرب</div>
                  <div className="text-gray-600">Apprentice</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">نساج</div>
                  <div className="text-gray-600">Weaver</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Tools & Materials</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">أدوات</div>
                  <div className="text-gray-600">Tools</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">مواد خام</div>
                  <div className="text-gray-600">Raw Materials</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">طين</div>
                  <div className="text-gray-600">Clay</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">صوف</div>
                  <div className="text-gray-600">Wool</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 text-sm">Techniques</h4>
              <div className="space-y-1">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">نسج</div>
                  <div className="text-gray-600">Weaving</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">نقش</div>
                  <div className="text-gray-600">Engraving</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">تطريز</div>
                  <div className="text-gray-600">Embroidery</div>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <div className="font-medium">صباغة</div>
                  <div className="text-gray-600">Dyeing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Shopping for Crafts</h3>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded">
            <h4 className="font-medium text-orange-800 mb-3">Useful Shopping Phrases:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">هاد الصنعة تقليدية؟</div>
                  <div className="text-orange-600 text-sm">Is this traditional craftsmanship?</div>
                </div>
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">مصنوع باليد؟</div>
                  <div className="text-orange-600 text-sm">Is it handmade?</div>
                </div>
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">شحال هاد السجادة؟</div>
                  <div className="text-orange-600 text-sm">How much is this carpet?</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">عندك ألوان أخرى؟</div>
                  <div className="text-orange-600 text-sm">Do you have other colors?</div>
                </div>
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">واش يمكن التفاوض؟</div>
                  <div className="text-orange-600 text-sm">Can we negotiate?</div>
                </div>
                <div className="p-2 bg-white rounded border border-orange-100">
                  <div className="font-medium text-orange-800">هاد الجودة ممتازة</div>
                  <div className="text-orange-600 text-sm">This quality is excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Craft Centers & Cooperatives</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded">
              <h4 className="font-medium text-teal-800 mb-2">تعاونيات النساء</h4>
              <p className="text-teal-700 text-sm mb-2">Women's Cooperatives</p>
              <p className="text-gray-600 text-sm">Community-based organizations where women create traditional crafts and earn income.</p>
              <div className="mt-2 text-xs text-teal-600">
                <strong>Famous for:</strong> زيت الأركان (Argan oil), السجاد (Carpets), التطريز (Embroidery)
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded">
              <h4 className="font-medium text-indigo-800 mb-2">دار الصناع</h4>
              <p className="text-indigo-700 text-sm mb-2">Artisan Houses</p>
              <p className="text-gray-600 text-sm">Government-supported centers promoting traditional crafts and providing training.</p>
              <div className="mt-2 text-xs text-indigo-600">
                <strong>Found in:</strong> Most major cities<br/>
                <strong>Purpose:</strong> تدريب (Training), تسويق (Marketing), حفظ التراث (Heritage preservation)
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded">
        <h3 className="font-semibold text-amber-800 mb-2">🎨 Appreciating Crafts in Darija:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="text-amber-700 space-y-1">
              <li>• <strong>صنعة راقية</strong> - Fine craftsmanship</li>
              <li>• <strong>تراث أصيل</strong> - Authentic heritage</li>
              <li>• <strong>شغل يدوي</strong> - Handwork</li>
              <li>• <strong>فن تقليدي</strong> - Traditional art</li>
            </ul>
          </div>
          <div>
            <ul className="text-amber-700 space-y-1">
              <li>• <strong>جودة عالية</strong> - High quality</li>
              <li>• <strong>تصميم جميل</strong> - Beautiful design</li>
              <li>• <strong>ألوان زاهية</strong> - Vibrant colors</li>
              <li>• <strong>إبداع مغربي</strong> - Moroccan creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}