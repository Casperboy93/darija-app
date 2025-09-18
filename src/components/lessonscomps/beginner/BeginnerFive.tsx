"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerFive() {
  return (
    <LessonLayout 
      title="Food and Dining" 
      level="beginner" 
      lessonNumber={5}
      nextLesson="intermediate-one"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential vocabulary and phrases related to food, ordering meals, and dining experiences in Morocco. Master the art of navigating restaurants and markets like a local.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master common Moroccan food vocabulary</li>
            <li>Learn restaurant ordering phrases</li>
            <li>Understand dining etiquette and customs</li>
            <li>Practice market shopping conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Traditional Moroccan Dishes */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Traditional Moroccan Dishes
        </h2>
        
        <p className="text-gray-700 mb-6">These are the iconic dishes you'll encounter throughout Morocco, each with its own cultural significance and regional variations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Tajine</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
            </div>
            <p className="text-gray-600">Traditional slow-cooked stew</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ta-jeen</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Varieties:</span> Chicken, lamb, vegetable, fish</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Couscous</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Staple</span>
            </div>
            <p className="text-gray-600">Steamed semolina grain dish</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: koos-koos</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Tradition:</span> Served on Fridays after prayer</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Pastilla</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Specialty</span>
            </div>
            <p className="text-gray-600">Sweet and savory pastry</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: pas-tee-ya</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Filling:</span> Usually pigeon, chicken, or seafood</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Harira</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Soup</span>
            </div>
            <p className="text-gray-600">Traditional tomato-based soup</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ha-ree-ra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">When:</span> Popular during Ramadan for iftar</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kefta</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Meat</span>
            </div>
            <p className="text-gray-600">Spiced meatballs or kebabs</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kef-ta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Style:</span> Grilled, in tajine, or with eggs</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Khobz</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Bread</span>
            </div>
            <p className="text-gray-600">Traditional round flatbread</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-obz</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Eaten with every meal</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Beverages & Drinks */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Beverages & Drinks
        </h2>
        
        <p className="text-gray-700 mb-6">Essential drinks you'll encounter in Moroccan cafes, restaurants, and homes.</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Atay (أتاي)</p>
                <p className="text-gray-600 mb-1">Moroccan mint tea</p>
                <p className="text-sm italic text-gray-500">Pronounced: ah-tie</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">Qahwa</p>
                <p className="text-gray-600 mb-1">Coffee</p>
                <p className="text-sm italic text-gray-500">Pronounced: qah-wa</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Ma</p>
                <p className="text-gray-600 mb-1">Water</p>
                <p className="text-sm italic text-gray-500">Pronounced: mah</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">3asir</p>
                <p className="text-gray-600 mb-1">Fresh juice</p>
                <p className="text-sm italic text-gray-500">Pronounced: ah-seer</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Lben</p>
                <p className="text-gray-600 mb-1">Buttermilk</p>
                <p className="text-sm italic text-gray-500">Pronounced: l-ben</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">Coca</p>
                <p className="text-gray-600 mb-1">Coca-Cola / Soda</p>
                <p className="text-sm italic text-gray-500">Pronounced: ko-ka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restaurant Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Restaurant Phrases
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Bghit nshuf l-menu (I want to see the menu)</p>
            <p className="text-gray-600 mb-1">Asking for the menu</p>
            <p className="text-sm italic text-gray-500">Pronounced: bghit n-shoof l-me-noo</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Ash katnsah? (What do you recommend?)</p>
            <p className="text-gray-600 mb-1">Asking for recommendations</p>
            <p className="text-sm italic text-gray-500">Pronounced: ash kat-n-sah</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Bghit tajine djaj (I want chicken tajine)</p>
            <p className="text-gray-600 mb-1">Ordering a specific dish</p>
            <p className="text-sm italic text-gray-500">Pronounced: bghit ta-jeen d-jaj</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Bla harr, afak (Not spicy, please)</p>
            <p className="text-gray-600 mb-1">Requesting no spice</p>
            <p className="text-sm italic text-gray-500">Pronounced: bla har, ah-fak</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">L-7sab, afak (The bill, please)</p>
            <p className="text-gray-600 mb-1">Asking for the check</p>
            <p className="text-sm italic text-gray-500">Pronounced: l-h-sab, ah-fak</p>
          </div>
        </div>
      </div>
      
      {/* Market Shopping */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Market Shopping
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Essential Market Phrases:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Bsh7al hada?</p>
              <p className="text-gray-700 text-sm">How much is this?</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Ghali bzaf</p>
              <p className="text-gray-700 text-sm">Too expensive</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">3tini kilo</p>
              <p className="text-gray-700 text-sm">Give me a kilo</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Wash 3andek...?</p>
              <p className="text-gray-700 text-sm">Do you have...?</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Ingredients */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Common Ingredients
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <h4 className="font-medium text-gray-800 mb-3">Vegetables (Khodar)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div><span className="font-medium">Basal</span> - Onions</div>
              <div><span className="font-medium">Matisha</span> - Tomatoes</div>
              <div><span className="font-medium">Khizzu</span> - Carrots</div>
              <div><span className="font-medium">Batata</span> - Potatoes</div>
              <div><span className="font-medium">Felfel</span> - Peppers</div>
              <div><span className="font-medium">Khass</span> - Lettuce</div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <h4 className="font-medium text-gray-800 mb-3">Fruits (Fawakeh)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div><span className="font-medium">Tuffah</span> - Apples</div>
              <div><span className="font-medium">Moz</span> - Bananas</div>
              <div><span className="font-medium">Burtuqal</span> - Oranges</div>
              <div><span className="font-medium">Inab</span> - Grapes</div>
              <div><span className="font-medium">Tin</span> - Figs</div>
              <div><span className="font-medium">Dellah</span> - Watermelon</div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <h4 className="font-medium text-gray-800 mb-3">Spices (Tawabel)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div><span className="font-medium">Kamun</span> - Cumin</div>
              <div><span className="font-medium">Qirfa</span> - Cinnamon</div>
              <div><span className="font-medium">Zanjabil</span> - Ginger</div>
              <div><span className="font-medium">Ras el hanout</span> - Spice mix</div>
              <div><span className="font-medium">Harissa</span> - Hot sauce</div>
              <div><span className="font-medium">Za3tar</span> - Herb mix</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dining Conversations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Dining Conversations
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Restaurant Scenarios:</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Ordering at a Restaurant</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Waiter:</span> "Ahlan wa sahlan! Ash bghiti?" (Welcome! What would you like?)</p>
                <p><span className="font-medium">You:</span> "Bghit tajine kefta, afak" (I want kefta tajine, please)</p>
                <p><span className="font-medium">Waiter:</span> "Wash bghiti atay?" (Would you like tea?)</p>
                <p><span className="font-medium">You:</span> "Ah, atay bi na3na3" (Yes, mint tea)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">At the Market</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Vendor:</span> "Ash bghiti, a lalla?" (What do you want, madam?)</p>
                <p><span className="font-medium">You:</span> "3tini kilo matisha" (Give me a kilo of tomatoes)</p>
                <p><span className="font-medium">Vendor:</span> "Hadi zina bzaf!" (These are very good!)</p>
                <p><span className="font-medium">You:</span> "Bsh7al?" (How much?)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Complimenting Food</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Host:</span> "Kifash l-makla?" (How is the food?)</p>
                <p><span className="font-medium">You:</span> "Bnina bzaf! Shukran" (Very delicious! Thank you)</p>
                <p><span className="font-medium">Host:</span> "Kul aktar!" (Eat more!)</p>
                <p><span className="font-medium">You:</span> "Shb3t, shukran" (I'm full, thank you)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Bread is sacred in Moroccan culture - never throw it away or let it touch the ground</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Mint tea is offered as a sign of hospitality - it's polite to accept at least one glass</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Bargaining is expected in markets - start at about half the asking price and negotiate respectfully</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Eating with your right hand is traditional - the left hand is considered unclean</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}