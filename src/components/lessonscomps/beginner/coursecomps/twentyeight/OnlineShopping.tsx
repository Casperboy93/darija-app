"use client";

import React from 'react';

export default function OnlineShopping() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Online Shopping & E-commerce</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Shopping Vocabulary</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">متجر إلكتروني</span>
              <span className="text-gray-600">Online store</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">سلة التسوق</span>
              <span className="text-gray-600">Shopping cart</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">طلبية</span>
              <span className="text-gray-600">Order</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">توصيل</span>
              <span className="text-gray-600">Delivery</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">دفع</span>
              <span className="text-gray-600">Payment</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">خصم</span>
              <span className="text-gray-600">Discount</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Payment Methods</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">كارت بنكي</span>
              <span className="text-gray-600">Bank card</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">دفع عند التسليم</span>
              <span className="text-gray-600">Cash on delivery</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">تحويل بنكي</span>
              <span className="text-gray-600">Bank transfer</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">محفظة إلكترونية</span>
              <span className="text-gray-600">Digital wallet</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">فيزا</span>
              <span className="text-gray-600">Visa</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">ماستركارد</span>
              <span className="text-gray-600">Mastercard</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Shopping Phrases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">بغيت نشري هاد الشي</div>
              <div className="text-blue-600 text-sm">I want to buy this thing</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">شحال الثمن؟</div>
              <div className="text-blue-600 text-sm">How much is the price?</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">واش كاين خصم؟</div>
              <div className="text-blue-600 text-sm">Is there a discount?</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">زيد للسلة</div>
              <div className="text-blue-600 text-sm">Add to cart</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">إمتى غيوصل؟</div>
              <div className="text-blue-600 text-sm">When will it arrive?</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">بغيت نرجع هاد المنتج</div>
              <div className="text-blue-600 text-sm">I want to return this product</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">واش التوصيل مجاني؟</div>
              <div className="text-blue-600 text-sm">Is delivery free?</div>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-medium text-blue-800 mb-1">كمّل الطلبية</div>
              <div className="text-blue-600 text-sm">Complete the order</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Popular Moroccan E-commerce Sites</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-orange-50 border border-orange-200 rounded text-center">
            <div className="font-medium text-orange-800">جوميا</div>
            <div className="text-orange-600 text-sm">Jumia</div>
          </div>
          <div className="p-3 bg-red-50 border border-red-200 rounded text-center">
            <div className="font-medium text-red-800">أفيتو</div>
            <div className="text-red-600 text-sm">Avito</div>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-center">
            <div className="font-medium text-blue-800">مارجان</div>
            <div className="text-blue-600 text-sm">Marjane</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Sample Shopping Dialogue</h3>
        <div className="bg-gray-50 p-4 rounded border">
          <div className="space-y-3">
            <div>
              <div className="font-medium text-gray-800">Customer:</div>
              <div className="text-gray-700 ml-4">سلام، بغيت نشري هاد الجاكيطة</div>
              <div className="text-gray-600 ml-4 text-sm">Hello, I want to buy this jacket</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Seller:</div>
              <div className="text-gray-700 ml-4">أهلا وسهلا، الثمن 350 درهم</div>
              <div className="text-gray-600 ml-4 text-sm">Welcome, the price is 350 dirhams</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Customer:</div>
              <div className="text-gray-700 ml-4">واش كاين خصم؟ وشحال التوصيل؟</div>
              <div className="text-gray-600 ml-4 text-sm">Is there a discount? And how much is delivery?</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Seller:</div>
              <div className="text-gray-700 ml-4">التوصيل مجاني، والخصم 10%</div>
              <div className="text-gray-600 ml-4 text-sm">Delivery is free, and there's a 10% discount</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold text-yellow-800 mb-2">💳 Shopping Tips:</h3>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Cash on delivery (COD) is very popular in Morocco</li>
          <li>• Always check return policies before purchasing</li>
          <li>• Compare prices across different platforms</li>
          <li>• Look for "توصيل مجاني" (free delivery) offers</li>
        </ul>
      </div>
    </div>
  );
}