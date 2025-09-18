"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedFive() {
  return (
    <LessonLayout 
      title="Media & Technology" 
      level="advanced" 
      lessonNumber={5}
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master modern Darija vocabulary for technology, social media, and digital communication while understanding how Moroccan Arabic adapts to express contemporary concepts.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Learn essential technology and digital vocabulary</li>
            <li>Master social media expressions and internet slang</li>
            <li>Understand how Darija adapts to modern concepts</li>
            <li>Practice contemporary communication patterns</li>
          </ul>
        </div>
      </div>
      
      {/* Technology Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Technology Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for navigating the digital world in Darija:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Computing & Internet</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Computer</span>
                <span className="text-gray-800 font-medium">L-ordinatir / L-PC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Internet</span>
                <span className="text-gray-800 font-medium">L-internet / L-net</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Website</span>
                <span className="text-gray-800 font-medium">L-mawqi3 / Site web</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Download</span>
                <span className="text-gray-800 font-medium">Telecharji / Nzzel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Upload</span>
                <span className="text-gray-800 font-medium">Uploadi / Tla3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Password</span>
                <span className="text-gray-800 font-medium">L-mot de pass / L-code</span>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Mobile Devices</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Daily Use</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Smartphone</span>
                <span className="text-gray-800 font-medium">L-portable / L-tilifun</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">App</span>
                <span className="text-gray-800 font-medium">Tatbiq / Application</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Selfie</span>
                <span className="text-gray-800 font-medium">Selfie / Sura dyali</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Charger</span>
                <span className="text-gray-800 font-medium">L-chargeur</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Battery</span>
                <span className="text-gray-800 font-medium">L-batri</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Screen</span>
                <span className="text-gray-800 font-medium">L-ecran / Sh-shasha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Social Media Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">Navigate social media platforms and digital communication with confidence:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Platform-Specific Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Facebook & Instagram</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Post</span>
                    <span className="text-gray-800 font-medium">Post / Manshur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Like</span>
                    <span className="text-gray-800 font-medium">Like / I3jab</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Share</span>
                    <span className="text-gray-800 font-medium">Share / Sharek</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Story</span>
                    <span className="text-gray-800 font-medium">Story / Hikaya</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Follow</span>
                    <span className="text-gray-800 font-medium">Follow / Tabe3</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">WhatsApp & Messaging</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Message</span>
                    <span className="text-gray-800 font-medium">Message / Risala</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Voice note</span>
                    <span className="text-gray-800 font-medium">Voice / Sawt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Video call</span>
                    <span className="text-gray-800 font-medium">Video call / Mukhalama</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group chat</span>
                    <span className="text-gray-800 font-medium">Groupe / Majmu3a</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="text-gray-800 font-medium">Status / Hal</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">YouTube & TikTok</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Video</span>
                    <span className="text-gray-800 font-medium">Video / Film</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subscribe</span>
                    <span className="text-gray-800 font-medium">Subscribe / Ishtarak</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Channel</span>
                    <span className="text-gray-800 font-medium">Channel / Qanah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Viral</span>
                    <span className="text-gray-800 font-medium">Viral / Intashar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Trending</span>
                    <span className="text-gray-800 font-medium">Trending / Rawa2ij</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Gaming & Entertainment</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Game</span>
                    <span className="text-gray-800 font-medium">Jeu / Lu3ba</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="text-gray-800 font-medium">Level / Mustawa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stream</span>
                    <span className="text-gray-800 font-medium">Live / Mubashir</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Playlist</span>
                    <span className="text-gray-800 font-medium">Playlist / Qa2ima</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Podcast</span>
                    <span className="text-gray-800 font-medium">Podcast / Barnamaj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Internet Slang & Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Internet Slang & Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">Modern expressions and slang used in digital communication:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Common Internet Expressions</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">LOL / Laughing</p>
                <p className="text-gray-600 text-sm">Darija: Hahaha / Dahk / MDR (Mort De Rire)</p>
                <p className="text-gray-500 text-xs italic">Used when something is funny</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">OMG / Surprise</p>
                <p className="text-gray-600 text-sm">Darija: Ya Allah / Wallah / OMG</p>
                <p className="text-gray-500 text-xs italic">Expressing shock or surprise</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">ASAP / Urgency</p>
                <p className="text-gray-600 text-sm">Darija: Dghya / B sur3a / Urgent</p>
                <p className="text-gray-500 text-xs italic">When something needs to be done quickly</p>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Moroccan Digital Slang</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Cool / Awesome</p>
                <p className="text-gray-600 text-sm">Darija: Top / Zwina / Fire / Nadi</p>
                <p className="text-gray-500 text-xs italic">Something impressive or cool</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Boring / Lame</p>
                <p className="text-gray-600 text-sm">Darija: Mmel / Khayb / Dead</p>
                <p className="text-gray-500 text-xs italic">Something uninteresting</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Crazy / Unbelievable</p>
                <p className="text-gray-600 text-sm">Darija: Hbel / Mahbul / Crazy</p>
                <p className="text-gray-500 text-xs italic">Something shocking or amazing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Digital Communication Patterns */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Digital Communication Patterns
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Text Messaging Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Abbreviations & Shortcuts</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">• "Salam" → "Slm" (Hello)</p>
                  <p className="text-gray-700">• "Labas" → "Lbs" (How are you?)</p>
                  <p className="text-gray-700">• "Inshallah" → "Insh" (God willing)</p>
                  <p className="text-gray-700">• "Bezaf" → "Bzf" (A lot)</p>
                  <p className="text-gray-700">• "Wakha" → "Wkh" (Okay)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Emoji Usage</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">😂 → Very funny / Dahk bzzaf</p>
                  <p className="text-gray-700">🤲 → Dua / Prayer</p>
                  <p className="text-gray-700">❤️ → Love / Hobb</p>
                  <p className="text-gray-700">🔥 → Amazing / Nadi</p>
                  <p className="text-gray-700">👍 → Good / Mzyan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Online Shopping & E-commerce</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Shopping Terms</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">• Online shopping: Shopping online</p>
                  <p className="text-gray-700">• Cart: Panier / Salla</p>
                  <p className="text-gray-700">• Checkout: Khlas / Daf3</p>
                  <p className="text-gray-700">• Delivery: Livraison / Tawsil</p>
                  <p className="text-gray-700">• Return: Raj3 / Return</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Payment Methods</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">• Credit card: Carte bancaire</p>
                  <p className="text-gray-700">• Cash on delivery: Khlas 3nd l-istilam</p>
                  <p className="text-gray-700">• Bank transfer: Virement</p>
                  <p className="text-gray-700">• Mobile payment: Daf3 b l-portable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech Troubleshooting */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Tech Troubleshooting Vocabulary
        </h2>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Common Problems</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Not working</span>
                  <span className="text-gray-800 font-medium">Ma-khdamsh / Khrab</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Slow internet</span>
                  <span className="text-gray-800 font-medium">L-net bati2 / Lent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frozen/Crashed</span>
                  <span className="text-gray-800 font-medium">Wqef / Bloque</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">No signal</span>
                  <span className="text-gray-800 font-medium">Ma-kayensh réseau</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Battery dead</span>
                  <span className="text-gray-800 font-medium">L-batri khlasa</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Solutions</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Restart</span>
                  <span className="text-gray-800 font-medium">Redémarre / I3awad shel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Update</span>
                  <span className="text-gray-800 font-medium">Update / Mise à jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reset</span>
                  <span className="text-gray-800 font-medium">Reset / Remise à zéro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check connection</span>
                  <span className="text-gray-800 font-medium">Shuf l-connexion</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Call support</span>
                  <span className="text-gray-800 font-medium">Itel l-support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Conversation: Tech Support
        </h2>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5">
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Customer:</p>
                <p className="text-gray-700">Salam, 3andi mushkil m3a l-wifi dyali. Ma-kayconnectish.</p>
                <p className="text-gray-500 italic text-sm">(Hello, I have a problem with my wifi. It won't connect.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Tech Support:</p>
                <p className="text-gray-700">Ahlan, ana ghadi n3awnek. Wash drti restart l l-router?</p>
                <p className="text-gray-500 italic text-sm">(Hello, I'll help you. Did you restart the router?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Customer:</p>
                <p className="text-gray-700">La, ma-drtsh. Kifash ndir restart?</p>
                <p className="text-gray-500 italic text-sm">(No, I didn't. How do I restart it?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Tech Support:</p>
                <p className="text-gray-700">Sahel. Shuf l-router, kayen button sghir f l-wra. Ghez 3lih 10 secondes, then shel sbaa3k.</p>
                <p className="text-gray-500 italic text-sm">(Easy. Look at the router, there's a small button in the back. Press it for 10 seconds, then release your finger.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Customer:</p>
                <p className="text-gray-700">Drt hakkak, u daba l-lights kay-clignoti. Shhal mn wqt khassni ntsenna?</p>
                <p className="text-gray-500 italic text-sm">(I did that, and now the lights are blinking. How long should I wait?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Tech Support:</p>
                <p className="text-gray-700">Mzyan! Tsenna 2-3 dqa2iq. Ila bqaw kay-clignoti, jreb t-connecti mn l-portable dyalk.</p>
                <p className="text-gray-500 italic text-sm">(Good! Wait 2-3 minutes. If they keep blinking, try to connect from your phone.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Usage Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Modern Usage Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Mix French, Arabic, and English terms naturally - this reflects real Moroccan digital communication</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Use abbreviations and shortcuts in casual texting, but full words in formal digital communication</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Stay updated with new slang and expressions - digital language evolves rapidly</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Adapt your language level to your audience - younger people use more English/internet slang</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}