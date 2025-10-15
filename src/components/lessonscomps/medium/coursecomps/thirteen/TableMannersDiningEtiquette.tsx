"use client";

import React from 'react';

export default function TableMannersDiningEtiquette() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Table Manners and Dining Etiquette
      </h2>
      
      <p className="text-gray-700 mb-6">Proper behavior during meals and dining situations.</p>
      
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">Before Eating</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Bismillah</span>
              <span className="text-gray-600">In the name of God (before eating)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Ghsil al-yadayn</span>
              <span className="text-gray-600">Wash hands (before and after)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">During the Meal</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Kul bi-yaminak</span>
              <span className="text-gray-600">Eat with your right hand</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Kul min quddamak</span>
              <span className="text-gray-600">Eat from in front of you</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">La tushrib waqifan</span>
              <span className="text-gray-600">Don't drink while standing</span>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">After Eating</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Al-hamdu lillah</span>
              <span className="text-gray-600">Praise be to God (after eating)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-orange-200 rounded-lg">
              <span className="font-medium text-gray-800">Shukran lil-mudif</span>
              <span className="text-gray-600">Thank the host</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}