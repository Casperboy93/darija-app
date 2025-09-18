"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateThree() {
  return (
    <LessonLayout 
      title="Conditional Forms" 
      level="intermediate" 
      lessonNumber={3}
      nextLesson="intermediate-four"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master conditional forms in Darija to express hypothetical situations, possibilities, and cause-and-effect relationships. Learn to communicate about what might happen under different circumstances.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master real and unreal conditional structures</li>
            <li>Learn to express hypothetical situations</li>
            <li>Practice making suggestions and giving advice</li>
            <li>Understand different types of conditional sentences</li>
          </ul>
        </div>
      </div>
      
      {/* Types of Conditionals */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Types of Conditionals
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Real Conditions (Likely to happen)
            </h3>
            
            <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Structure:</p>
              <p><span className="font-mono">ila + present tense → future tense</span></p>
              <p className="mt-1 text-gray-600">Used for situations that are possible or likely to occur</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Ila jiti ghedda, gha nmshiw l-suq</p>
                <p className="text-gray-600 italic">If you come tomorrow, we will go to the market</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Ila kan l-jaw zwin, gha nkhrju</p>
                <p className="text-gray-600 italic">If the weather is nice, we will go out</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Unreal Conditions (Hypothetical)
            </h3>
            
            <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Structure:</p>
              <p><span className="font-mono">kun + past tense → kun + past tense</span></p>
              <p className="mt-1 text-gray-600">Used for imaginary or impossible situations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Kun jiti l-bareh, kun mshina l-suq</p>
                <p className="text-gray-600 italic">If you had come yesterday, we would have gone to the market</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Kun kan 3ndi flus, kun shrit sayara</p>
                <p className="text-gray-600 italic">If I had money, I would have bought a car</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Present Unreal Conditions
            </h3>
            
            <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Structure:</p>
              <p><span className="font-mono">ila kunt + present → kun + past</span></p>
              <p className="mt-1 text-gray-600">Used for present situations that are contrary to reality</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Ila kunt ghani, kun shrit dar kbira</p>
                <p className="text-gray-600 italic">If I were rich, I would buy a big house</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Ila kunt f blasti, kun ma drt hada</p>
                <p className="text-gray-600 italic">If I were in your place, I wouldn't do this</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Conditional Expressions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Common Conditional Expressions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ila kan 3ndek wqt</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Time</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">If you have time</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ila kan 3ndek wqt, ajini l-dar</span></p>
              <p className="text-gray-600 italic">(If you have time, come to my house)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ila bghiti</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Desire</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">If you want</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ila bghiti, gha nmshiw l-cinema</span></p>
              <p className="text-gray-600 italic">(If you want, we will go to the cinema)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ila ma jitish</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Negative</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">If you don't come</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ila ma jitish, gha nmshiw bla bik</span></p>
              <p className="text-gray-600 italic">(If you don't come, we will go without you)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ila kan mumkin</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Possibility</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">If it's possible</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ila kan mumkin, gha n3awnk</span></p>
              <p className="text-gray-600 italic">(If it's possible, I will help you)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Giving Advice with Conditionals */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Giving Advice with Conditionals
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Health Advice</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila kunt mrid, sir l-tbeeb</p>
                <p className="text-gray-600 italic">If you are sick, go to the doctor</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti tkhss, kul qall</p>
                <p className="text-gray-600 italic">If you want to lose weight, eat less</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila kan 3ndek suda3, shreb ma</p>
                <p className="text-gray-600 italic">If you have a headache, drink water</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila ma nmsitish mzyan, ma tsuqsh</p>
                <p className="text-gray-600 italic">If you didn't sleep well, don't drive</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Study Advice</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti tnj7, qra mzyan</p>
                <p className="text-gray-600 italic">If you want to succeed, study well</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila ma fhmtish, sul l-ustad</p>
                <p className="text-gray-600 italic">If you don't understand, ask the teacher</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila kan 3ndek imtihan, qra mn qbl</p>
                <p className="text-gray-600 italic">If you have an exam, study beforehand</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti tkhdem mzyan, nsa l-tilifun</p>
                <p className="text-gray-600 italic">If you want to work well, forget the phone</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Life Advice</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti s7ab, kun zwina</p>
                <p className="text-gray-600 italic">If you want friends, be nice</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti flus, khdm bzaf</p>
                <p className="text-gray-600 italic">If you want money, work hard</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti tkon s3id, kun shaker</p>
                <p className="text-gray-600 italic">If you want to be happy, be grateful</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ila bghiti tnsa l-mushkil, hdr m3a shi 7d</p>
                <p className="text-gray-600 italic">If you want to forget problems, talk to someone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conditional Questions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Conditional Questions
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
          <p className="mb-3">Conditional questions are used to ask about hypothetical situations or to make polite requests.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Direct Questions:</p>
              <div className="mt-2 space-y-1">
                <p className="text-gray-700">Ash gha tdir ila kan 3ndek flus bzaf?</p>
                <p className="text-gray-600 italic">(What would you do if you had a lot of money?)</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Polite Requests:</p>
              <div className="mt-2 space-y-1">
                <p className="text-gray-700">Ila ma kan 3ndek mushkil, waqila t3awnni?</p>
                <p className="text-gray-600 italic">(If you don't mind, could you help me?)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Fin gha tmshi ila kan 3ndek 3utla?</p>
              <p className="text-gray-600 italic">Where would you go if you had a vacation?</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ash gha tqul ila shfti hada?</p>
              <p className="text-gray-600 italic">What would you say if you saw this?</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ila kunt f blasti, ash gha tdir?</p>
              <p className="text-gray-600 italic">If you were in my place, what would you do?</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Practice Conversation
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-blue-700 mb-2">Topic: Making hypothetical plans</p>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-blue-800">Karim:</p>
                <p className="pl-2 text-gray-800">Ash gha tdir ila kan 3ndek million dirham?</p>
                <p className="pl-2 text-gray-600 italic">(What would you do if you had a million dirhams?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-pink-800">Salma:</p>
                <p className="pl-2 text-gray-800">Ila kan 3ndi million, kun shrit dar kbira u safrt l-kull blasa!</p>
                <p className="pl-2 text-gray-600 italic">(If I had a million, I would buy a big house and travel everywhere!)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-blue-800">Karim:</p>
                <p className="pl-2 text-gray-800">Zwin! U ila kunt tqdr tkhtar ay blasa f l-3alam, fin gha tmshi?</p>
                <p className="pl-2 text-gray-600 italic">(Nice! And if you could choose any place in the world, where would you go?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-pink-800">Salma:</p>
                <p className="pl-2 text-gray-800">Ila kunt nqdr, kun mshit l-Japan. Sma3t blli zwina bzaf!</p>
                <p className="pl-2 text-gray-600 italic">(If I could, I would go to Japan. I heard it's very beautiful!)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p className="font-medium text-yellow-800">Practice Tip:</p>
          <p className="text-gray-700">Practice creating your own conditional sentences by thinking about different "what if" scenarios. Start with simple conditions and gradually add more complex situations.</p>
        </div>
      </div>
      
      {/* Common Mistakes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Common Mistakes to Avoid
        </h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Incorrect Tense Mixing</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">Ila ghadi nji, ghadi nmshiw</p>
                <p className="text-gray-600 italic">(Mixing future with conditional)</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">Ila jit, ghadi nmshiw</p>
                <p className="text-gray-600 italic">(Present condition + future result)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Forgetting "kun" in Unreal Conditions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">Ila kan 3ndi flus, shrit sayara</p>
                <p className="text-gray-600 italic">(Missing "kun" in result clause)</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">Ila kan 3ndi flus, kun shrit sayara</p>
                <p className="text-gray-600 italic">(Both clauses have proper markers)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Using Wrong Conditional Marker</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">Kun jiti, ghadi nmshiw</p>
                <p className="text-gray-600 italic">(Using "kun" for real condition)</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">Ila jiti, ghadi nmshiw</p>
                <p className="text-gray-600 italic">(Using "ila" for real condition)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Moroccans often use conditionals to give polite advice rather than direct commands</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Hypothetical questions are common in social conversations to learn about people's dreams and aspirations</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">When giving advice, it's common to use "ila kunt f blask" (if I were in your place) to show empathy</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Conditional forms are often used in storytelling and sharing life experiences</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}