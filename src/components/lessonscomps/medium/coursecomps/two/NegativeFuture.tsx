"use client";

import React from 'react';

export default function NegativeFuture() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Negative Future</h2>
      
      <p className="text-gray-700 mb-4">
        To form negative future tense, use <strong>"ma gha...sh"</strong> or <strong>"ma ghadi...sh"</strong> around the verb.
      </p>
      
      <div className="bg-red-50 p-4 rounded-md mb-4">
        <p className="font-medium text-red-800">Formula:</p>
        <p className="text-gray-700 mt-1">
          <strong>ma + gha/ghadi + verb + sh</strong>
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">Positive vs Negative</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-3 rounded-md">
              <div className="font-medium text-green-800">Positive:</div>
              <div>Gha nmshi - I will go</div>
            </div>
            <div className="bg-red-50 p-3 rounded-md">
              <div className="font-medium text-red-800">Negative:</div>
              <div>Ma gha nmshish - I will not go</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">More Examples</h3>
          <div className="space-y-3">
            <div>
              <div className="font-medium">Ma gha nakulsh</div>
              <div className="text-sm text-gray-600">I will not eat</div>
            </div>
            <div>
              <div className="font-medium">Ma gha yjish</div>
              <div className="text-sm text-gray-600">He will not come</div>
            </div>
            <div>
              <div className="font-medium">Ma gha nsafrsh</div>
              <div className="text-sm text-gray-600">I will not travel</div>
            </div>
            <div>
              <div className="font-medium">Ma gha tkhdmsh</div>
              <div className="text-sm text-gray-600">She will not work</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mt-6">
        <p className="font-medium text-blue-800">Usage Note:</p>
        <p className="text-gray-700 mt-1">
          The negative future is commonly used to express refusal, inability, or certainty that something won't happen.
        </p>
      </div>
    </div>
  );
}