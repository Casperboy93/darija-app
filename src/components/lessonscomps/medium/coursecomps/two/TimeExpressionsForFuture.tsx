"use client";

import React from 'react';

export default function TimeExpressionsForFuture() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Time Expressions for Future</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-medium text-blue-800 mb-3">Near Future</h4>
            <div className="space-y-3">
              <div>
                <div className="font-medium">Ghedda</div>
                <div className="text-sm text-gray-600">Tomorrow</div>
                <div className="text-sm italic">Gha nmshi ghedda - I will go tomorrow</div>
              </div>
              <div>
                <div className="font-medium">Ba3d shwiya</div>
                <div className="text-sm text-gray-600">In a little while</div>
                <div className="text-sm italic">Gha nji ba3d shwiya - I will come in a little while</div>
              </div>
              <div>
                <div className="font-medium">F had l-3shiya</div>
                <div className="text-sm text-gray-600">This evening</div>
                <div className="text-sm italic">Gha nshuf film f had l-3shiya - I will watch a movie this evening</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-md">
            <h4 className="font-medium text-green-800 mb-3">This Week/Month</h4>
            <div className="space-y-3">
              <div>
                <div className="font-medium">S-simana jaya</div>
                <div className="text-sm text-gray-600">Next week</div>
                <div className="text-sm italic">Gha nsafr s-simana jaya - I will travel next week</div>
              </div>
              <div>
                <div className="font-medium">Sh-shhr jaya</div>
                <div className="text-sm text-gray-600">Next month</div>
                <div className="text-sm italic">Gha nbda khdma jdida sh-shhr jaya - I will start a new job next month</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-md">
            <h4 className="font-medium text-purple-800 mb-3">Distant Future</h4>
            <div className="space-y-3">
              <div>
                <div className="font-medium">L-3am jaya</div>
                <div className="text-sm text-gray-600">Next year</div>
                <div className="text-sm italic">Gha ntzwj l-3am jaya - I will get married next year</div>
              </div>
              <div>
                <div className="font-medium">F l-mustaqbal</div>
                <div className="text-sm text-gray-600">In the future</div>
                <div className="text-sm italic">Gha nkun tbyb f l-mustaqbal - I will be a doctor in the future</div>
              </div>
              <div>
                <div className="font-medium">Ba3d snin</div>
                <div className="text-sm text-gray-600">After years</div>
                <div className="text-sm italic">Gha nrj3 l-Maghrib ba3d snin - I will return to Morocco after years</div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-md">
            <h4 className="font-medium text-orange-800 mb-3">Conditional Time</h4>
            <div className="space-y-3">
              <div>
                <div className="font-medium">Ila kan</div>
                <div className="text-sm text-gray-600">If there is</div>
                <div className="text-sm italic">Gha nmshi ila kan l-weqt - I will go if there is time</div>
              </div>
              <div>
                <div className="font-medium">Mn ba3d</div>
                <div className="text-sm text-gray-600">Later</div>
                <div className="text-sm italic">Gha nshuf mn ba3d - I will see later</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}