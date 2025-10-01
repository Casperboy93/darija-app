"use client";

import React from 'react';

export default function ResearchMethodology() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Research Methodology
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Research Process Vocabulary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Research Design</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Baḥth:</span> Research</p>
              <p><span className="font-semibold">Dirāsa:</span> Study</p>
              <p><span className="font-semibold">Manhaj:</span> Methodology</p>
              <p><span className="font-semibold">Farḍiyya:</span> Hypothesis</p>
              <p><span className="font-semibold">Tajriba:</span> Experiment</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Data Collection</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Bayānāt:</span> Data</p>
              <p><span className="font-semibold">Iḥṣāʾiyyāt:</span> Statistics</p>
              <p><span className="font-semibold">ʿAyyna:</span> Sample</p>
              <p><span className="font-semibold">Istibiyān:</span> Survey</p>
              <p><span className="font-semibold">Muqābala:</span> Interview</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Analysis</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Taḥlīl:</span> Analysis</p>
              <p><span className="font-semibold">Natāʾij:</span> Results</p>
              <p><span className="font-semibold">Istintāj:</span> Conclusion</p>
              <p><span className="font-semibold">Taqyīm:</span> Evaluation</p>
              <p><span className="font-semibold">Tafسīr:</span> Interpretation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}