"use client";

import React from 'react';

export default function MakingPlansAndPredictions() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Making Plans and Predictions</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3 text-blue-700">Personal Plans</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="space-y-2">
              <div>
                <span className="font-medium">Gha nkhdm f had sh-sharika ba3d ma nkml drasty</span>
                <div className="text-sm text-gray-600">I will work at this company after I finish my studies</div>
              </div>
              <div>
                <span className="font-medium">Gha nsafr l-Fransa s-sif jaya</span>
                <div className="text-sm text-gray-600">I will travel to France next summer</div>
              </div>
              <div>
                <span className="font-medium">Gha nshri dar jdida l-3am jaya</span>
                <div className="text-sm text-gray-600">I will buy a new house next year</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3 text-green-700">Weather Predictions</h3>
          <div className="bg-green-50 p-4 rounded-md">
            <div className="space-y-2">
              <div>
                <span className="font-medium">Gha tkun l-jw bard ghedda</span>
                <div className="text-sm text-gray-600">The weather will be cold tomorrow</div>
              </div>
              <div>
                <span className="font-medium">Gha tshta s-simana jaya</span>
                <div className="text-sm text-gray-600">It will rain next week</div>
              </div>
              <div>
                <span className="font-medium">Gha tkun sh-shms qwiya f s-sif</span>
                <div className="text-sm text-gray-600">The sun will be strong in summer</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3 text-purple-700">Social Predictions</h3>
          <div className="bg-purple-50 p-4 rounded-md">
            <div className="space-y-2">
              <div>
                <span className="font-medium">Gha yji bzaf d-nas l-hafla</span>
                <div className="text-sm text-gray-600">Many people will come to the party</div>
              </div>
              <div>
                <span className="font-medium">Gha tkun l-hafla zwina bzaf</span>
                <div className="text-sm text-gray-600">The party will be very nice</div>
              </div>
              <div>
                <span className="font-medium">Gha nkunu sa3da f l-3rs</span>
                <div className="text-sm text-gray-600">We will be happy at the wedding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}