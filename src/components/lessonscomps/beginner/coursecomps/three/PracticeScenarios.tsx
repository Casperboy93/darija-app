import React from 'react';

export default function PracticeScenarios() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Scenarios
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Real-life Situations:</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">At a Shop</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">You:</span> "Salam! Bsh7al hada?" (Hello! How much is this?)</p>
              <p><span className="font-medium">Shopkeeper:</span> "3ashrin dirham" (Twenty dirhams)</p>
              <p><span className="font-medium">You:</span> "Shukran!" (Thank you!)</p>
              <p><span className="font-medium">Shopkeeper:</span> "3afwan" (You're welcome)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">Asking for Directions</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">You:</span> "Smeh liya, fin kayn l'bank?" (Excuse me, where is the bank?)</p>
              <p><span className="font-medium">Local:</span> "Ghadi nimen, tema ghadi liser" (Go right, then go left)</p>
              <p><span className="font-medium">You:</span> "Shukran bzaf!" (Thank you very much!)</p>
              <p><span className="font-medium">Local:</span> "La bas" (No problem)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">In a Restaurant</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Waiter:</span> "Ash bghiti?" (What do you want?)</p>
              <p><span className="font-medium">You:</span> "Afak, bghit tagine" (Please, I want tagine)</p>
              <p><span className="font-medium">Waiter:</span> "Wakha" (Okay)</p>
              <p><span className="font-medium">You:</span> "Shukran" (Thank you)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}