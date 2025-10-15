"use client";

import React from 'react';

export default function CommonOpinionTopics() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        Common Opinion Topics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Food & Restaurants</h4>
          <div className="text-sm space-y-1">
            <p>- Shnu ra'yak f had l-mat3am?</p>
            <p>- L-makla zwina wlla la?</p>
            <p>- Kanfaddel l-makla l-maghribiya</p>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Movies & Entertainment</h4>
          <div className="text-sm space-y-1">
            <p>- Had l-film zwin bzzaf</p>
            <p>- Ma kan3jebnish l-musique</p>
            <p>- Kanshuf belli comedy afdal</p>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Weather & Seasons</h4>
          <div className="text-sm space-y-1">
            <p>- Kanbghi l-sayf ktar men sh-shita</p>
            <p>- L-waqt zwin l-yum</p>
            <p>- Ma kan3jebnish l-brd</p>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Work & Studies</h4>
          <div className="text-sm space-y-1">
            <p>- L-khdma s3iba shwiya</p>
            <p>- Kanshuf belli l-ta3lim muhim</p>
            <p>- Ma kanbghish l-imtihanat</p>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Travel & Places</h4>
          <div className="text-sm space-y-1">
            <p>- Marrakech zwina bzzaf</p>
            <p>- Kanfaddel l-bahr 3la l-jabal</p>
            <p>- Had l-blasa ma kan3jebnish</p>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Technology & Social Media</h4>
          <div className="text-sm space-y-1">
            <p>- L-internet mufid bzzaf</p>
            <p>- Ma kanbghish Facebook ktar</p>
            <p>- Kanshuf belli WhatsApp afdal</p>
          </div>
        </div>
      </div>
    </div>
  );
}