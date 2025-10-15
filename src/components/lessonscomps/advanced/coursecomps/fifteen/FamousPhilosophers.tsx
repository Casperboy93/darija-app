"use client";

import React from 'react';

export default function FamousPhilosophers() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Famous Philosophers and Their Ideas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Islamic Philosophers</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Ibn Sina (Avicenna)</p>
              <p className="text-gray-600 text-sm">Metaphysics and medicine</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Ibn Rushd (Averroes)</p>
              <p className="text-gray-600 text-sm">Aristotelian philosophy</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Al-Ghazali</p>
              <p className="text-gray-600 text-sm">Theology and mysticism</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Ibn Khaldun</p>
              <p className="text-gray-600 text-sm">Social philosophy</p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Western Philosophers</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Aristu (Aristotle)</p>
              <p className="text-gray-600 text-sm">Logic and ethics</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Kant</p>
              <p className="text-gray-600 text-sm">Moral philosophy</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Nietzsche</p>
              <p className="text-gray-600 text-sm">Existentialism</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Sartre</p>
              <p className="text-gray-600 text-sm">Freedom and existence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}