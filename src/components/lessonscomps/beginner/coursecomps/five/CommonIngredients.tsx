"use client";

import React from 'react';

export default function CommonIngredients() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Common Ingredients
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <h4 className="font-medium text-gray-800 mb-3">Vegetables (Khodar)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <div><span className="font-medium">Basal</span> - Onions</div>
            <div><span className="font-medium">Matisha</span> - Tomatoes</div>
            <div><span className="font-medium">Khizzu</span> - Carrots</div>
            <div><span className="font-medium">Batata</span> - Potatoes</div>
            <div><span className="font-medium">Felfel</span> - Peppers</div>
            <div><span className="font-medium">Khass</span> - Lettuce</div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <h4 className="font-medium text-gray-800 mb-3">Fruits (Fawakeh)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <div><span className="font-medium">Tuffah</span> - Apples</div>
            <div><span className="font-medium">Moz</span> - Bananas</div>
            <div><span className="font-medium">Burtuqal</span> - Oranges</div>
            <div><span className="font-medium">Inab</span> - Grapes</div>
            <div><span className="font-medium">Tin</span> - Figs</div>
            <div><span className="font-medium">Dellah</span> - Watermelon</div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <h4 className="font-medium text-gray-800 mb-3">Spices (Tawabel)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <div><span className="font-medium">Kamun</span> - Cumin</div>
            <div><span className="font-medium">Qirfa</span> - Cinnamon</div>
            <div><span className="font-medium">Zanjabil</span> - Ginger</div>
            <div><span className="font-medium">Ras el hanout</span> - Spice mix</div>
            <div><span className="font-medium">Harissa</span> - Hot sauce</div>
            <div><span className="font-medium">Za3tar</span> - Herb mix</div>
          </div>
        </div>
      </div>
    </div>
  );
}