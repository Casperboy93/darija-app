"use client";

import React from 'react';

export default function FutureTenseVariations() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Future Tense Variations</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3 text-blue-700">Immediate Future</h3>
          <p className="text-gray-700 mb-3">
            Used for actions that will happen very soon or are already planned.
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="space-y-2">
              <div>
                <span className="font-medium">Gha nmshi daba</span> - I'm going to go now
              </div>
              <div>
                <span className="font-medium">Gha nakul f had l-weqt</span> - I'm going to eat right now
              </div>
              <div>
                <span className="font-medium">Gha nsali qrib</span> - I'm going to pray soon
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3 text-green-700">Distant Future</h3>
          <p className="text-gray-700 mb-3">
            Used for actions that will happen later or are less certain.
          </p>
          <div className="bg-green-50 p-4 rounded-md">
            <div className="space-y-2">
              <div>
                <span className="font-medium">Ghadi nsafr l-am jaya</span> - I will travel next year
              </div>
              <div>
                <span className="font-medium">Ghadi nkhdm f had sh-sharika</span> - I will work at this company
              </div>
              <div>
                <span className="font-medium">Ghadi ntzwj f l-mustaqbal</span> - I will get married in the future
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-md mt-6">
        <p className="font-medium text-orange-800">Usage Note:</p>
        <p className="text-gray-700 mt-1">
          <strong>"Gha"</strong> is more common in everyday speech, while <strong>"Ghadi"</strong> is used in more formal contexts or when emphasizing certainty.
        </p>
      </div>
    </div>
  );
}