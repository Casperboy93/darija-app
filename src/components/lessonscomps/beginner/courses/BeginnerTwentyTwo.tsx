"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentytwo/LessonOverview';
import TravelVocabulary from '../coursecomps/twentytwo/TravelVocabulary';
import HotelAccommodation from '../coursecomps/twentytwo/HotelAccommodation';
import TouristAttractions from '../coursecomps/twentytwo/TouristAttractions';
import TravelDialogue from '../coursecomps/twentytwo/TravelDialogue';
import TransportationTravel from '../coursecomps/twentytwo/TransportationTravel';
import TravelPhrases from '../coursecomps/twentytwo/TravelPhrases';

export default function BeginnerTwentyTwo() {
  return (
    <LessonLayout 
      title="Travel and Tourism" 
      level="beginner" 
      lessonNumber={22}
      previousLesson="beginner-twenty-one"
      nextLesson="beginner-twenty-three"
    >
      <LessonOverview />
      <TravelVocabulary />
      <HotelAccommodation />
      <TouristAttractions />
      <TransportationTravel />
      <TravelPhrases />
      <TravelDialogue />
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Essential vocabulary for traveling in Morocco, booking hotels, and tourist activities.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master travel and tourism vocabulary</li>
            <li>Learn hotel and accommodation phrases</li>
            <li>Practice tourist activity expressions</li>
            <li>Understand travel-related conversations</li>
          </ul>
        </div>
      </div>

      {/* Hotel and Accommodation */}
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Hotel and Accommodation - الفندق والإقامة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-indigo-100">
            <h3 className="font-semibold text-indigo-700 mb-3">Hotel Vocabulary</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hotel</span>
                <span className="font-medium text-indigo-600">فندق - Funduq</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Room</span>
                <span className="font-medium text-indigo-600">بيت - Bit</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Reservation</span>
                <span className="font-medium text-indigo-600">حجز - Hajz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Reception</span>
                <span className="font-medium text-indigo-600">استقبال - Istiqbal</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-indigo-100">
            <h3 className="font-semibold text-indigo-700 mb-3">Useful Phrases</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <p className="text-gray-700">I have a reservation</p>
                <p className="font-medium text-indigo-600">عندي حجز - 3andi hajz</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-700">How much per night?</p>
                <p className="font-medium text-indigo-600">بشحال الليلة؟ - Bshhal l-lila?</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-700">Do you have WiFi?</p>
                <p className="font-medium text-indigo-600">واش عندكم واي فاي؟ - Wash 3andkum WiFi?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tourist Attractions */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tourist Attractions - المعالم السياحية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-green-100">
            <h3 className="font-semibold text-green-700 mb-3">Famous Places</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Medina</span>
                <span className="font-medium text-green-600">مدينة قديمة - Mdina qdima</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Mosque</span>
                <span className="font-medium text-green-600">جامع - Jama3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Palace</span>
                <span className="font-medium text-green-600">قصر - Qasr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Museum</span>
                <span className="font-medium text-green-600">متحف - Mathaf</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-green-100">
            <h3 className="font-semibold text-green-700 mb-3">Activities</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Sightseeing</span>
                <span className="font-medium text-green-600">زيارة المعالم - Ziyara l-ma3alim</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Shopping</span>
                <span className="font-medium text-green-600">تسوق - Tasawwuq</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Photography</span>
                <span className="font-medium text-green-600">تصوير - Taswir</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tour guide</span>
                <span className="font-medium text-green-600">مرشد سياحي - Murshid siyahi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation for Tourists */}
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Tourist Transportation - النقل السياحي
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <h3 className="font-semibold text-yellow-700 mb-3">Transport Options</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tourist bus</span>
                <span className="font-medium text-yellow-600">طوبيس سياحي - Tobis siyahi</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Taxi</span>
                <span className="font-medium text-yellow-600">طاكسي - Taksi</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Train</span>
                <span className="font-medium text-yellow-600">قطار - Qitar</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Rental car</span>
                <span className="font-medium text-yellow-600">طوموبيل بالكرا - Tomobil bil kira</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <h3 className="font-semibold text-yellow-700 mb-3">Travel Phrases</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <p className="text-gray-700">Where is the station?</p>
                <p className="font-medium text-yellow-600">فين المحطة؟ - Fin l-mahatta?</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-700">How long does it take?</p>
                <p className="font-medium text-yellow-600">شحال كيدوز الوقت؟ - Shhal kiduz l-waqt?</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-700">I want to go to...</p>
                <p className="font-medium text-yellow-600">بغيت نمشي ل... - Bghit nmshi l...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Practice Dialogue - محادثة تطبيقية
        </h2>
        
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">At the Hotel Reception</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-400 pl-4">
              <p className="font-medium text-purple-700">Tourist:</p>
              <p className="text-gray-700">السلام عليكم، عندي حجز</p>
              <p className="text-sm text-gray-600">As-salamu alaykum, 3andi hajz</p>
              <p className="text-sm italic">Hello, I have a reservation</p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-medium text-blue-700">Receptionist:</p>
              <p className="text-gray-700">وعليكم السلام، أهلا وسهلا. شنو سميتك؟</p>
              <p className="text-sm text-gray-600">Wa alaykum as-salam, ahlan wa sahlan. Shnu smitk?</p>
              <p className="text-sm italic">Hello, welcome. What's your name?</p>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <p className="font-medium text-purple-700">Tourist:</p>
              <p className="text-gray-700">سميتي أحمد. واش عندكم واي فاي؟</p>
              <p className="text-sm text-gray-600">Smiti Ahmed. Wash 3andkum WiFi?</p>
              <p className="text-sm italic">My name is Ahmed. Do you have WiFi?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Tips */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Travel Tips for Morocco
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>• Morocco is a very tourist-friendly country with many English and French speakers in tourist areas</p>
          <p>• Bargaining is expected in markets (souks) but not in fixed-price shops</p>
          <p>• Tipping (called "baksheesh") is customary for services</p>
          <p>• Friday is the holy day, so some attractions may have limited hours</p>
          <p>• Dress modestly, especially when visiting religious sites</p>
        </div>
      </div>
    </LessonLayout>
  );
}