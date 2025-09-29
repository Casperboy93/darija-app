import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4">Talking About the Weather</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">Kīf l-jaww l-yūm? Ḥārr bazzāf!</p>
              <p className="text-gray-600 text-sm">How's the weather today? It's very hot!</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
              <p className="font-medium text-gray-800">Īh, ṣaḥīḥ. F ṣ-ṣayf dāyman hākka.</p>
              <p className="text-gray-600 text-sm">Yes, that's right. In summer it's always like this.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">Wāsh ghādī tshti l-yūm?</p>
              <p className="text-gray-600 text-sm">Is it going to rain today?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
              <p className="font-medium text-gray-800">Lā, mā bānsh. Shūf s-smā ṣāfya.</p>
              <p className="text-gray-600 text-sm">No, it doesn't look like it. Look, the sky is clear.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">Zīn, ghādī nkhruj l-l-baḥr.</p>
              <p className="text-gray-600 text-sm">Good, I'm going to go to the beach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}