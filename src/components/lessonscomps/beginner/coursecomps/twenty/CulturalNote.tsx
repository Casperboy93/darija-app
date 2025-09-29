"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <div className="flex items-start space-x-3">
          <div className="text-amber-600 text-2xl">🎉</div>
          <div>
            <h3 className="font-semibold text-amber-800 mb-3">Moroccan Celebrations</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Celebrations in Morocco are deeply rooted in Islamic traditions and Berber heritage. 
                Religious holidays like Eid al-Fitr and Eid al-Adha are the most important celebrations, 
                bringing families together for special meals and prayers.
              </p>
              <p>
                National holidays celebrate Morocco's independence and monarchy. These occasions often 
                feature traditional music, dancing, and communal gatherings in public spaces.
              </p>
              <p>
                Food plays a central role in all celebrations. Families prepare elaborate meals, 
                and sharing food with neighbors and the less fortunate is considered a blessing. 
                Traditional sweets and mint tea are essential parts of any celebration.
              </p>
              <p>
                The concept of "baraka" (blessing) is important in Moroccan celebrations. 
                People believe that celebrating together brings good fortune and strengthens 
                community bonds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}