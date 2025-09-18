"use client";

import React from 'react';
import Link from 'next/link';

export default function AdvancedFive() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/lessons" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Lessons
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Advanced Lesson 5: Media & Technology</h1>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Master modern Darija vocabulary related to technology, social media, and contemporary communication, and learn how Moroccan Arabic adapts to express new concepts.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technology Vocabulary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Computing & Internet</h3>
            <ul className="space-y-2">
              <li><span className="font-medium">Computer:</span> l-ordinatir / l-PC</li>
              <li><span className="font-medium">Internet:</span> l-internet / l-net</li>
              <li><span className="font-medium">Website:</span> l-mawqi3 / site web</li>
              <li><span className="font-medium">Download:</span> telecharji / nzzel</li>
              <li><span className="font-medium">Upload:</span> uploadi / tla3</li>
              <li><span className="font-medium">Password:</span> l-mot de pass / l-code</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Mobile Devices</h3>
            <ul className="space-y-2">
              <li><span className="font-medium">Smartphone:</span> l-portable / l-tilifun</li>
              <li><span className="font-medium">App:</span> tatbiq / application</li>
              <li><span className="font-medium">Selfie:</span> selfie</li>
              <li><span className="font-medium">Charger:</span> l-chargeur</li>
              <li><span className="font-medium">Battery:</span> l-batri</li>
              <li><span className="font-medium">Screen:</span> l-ecran</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <h3 className="font-bold text-lg mb-3">Social Media Terms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Facebook</p>
              <ul className="text-sm space-y-1">
                <li>Profile: l-profil</li>
                <li>Like: like / 3jebni</li>
                <li>Share: partaji</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Instagram</p>
              <ul className="text-sm space-y-1">
                <li>Post: post / mnshur</li>
                <li>Story: story</li>
                <li>Follow: tabi3</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Twitter/X</p>
              <ul className="text-sm space-y-1">
                <li>Tweet: tweet / tghrida</li>
                <li>Retweet: retweet</li>
                <li>Hashtag: hashtag</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Digital Communication</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <h3 className="font-bold text-lg mb-3">Texting Abbreviations in Darija</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Abbreviation</th>
                  <th className="py-2 px-4 text-left">Full Darija</th>
                  <th className="py-2 px-4 text-left">English Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">wlh</td>
                  <td className="py-2 px-4 border-b">wallah</td>
                  <td className="py-2 px-4 border-b">I swear to God</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">iwa</td>
                  <td className="py-2 px-4 border-b">iwa</td>
                  <td className="py-2 px-4 border-b">Well/So</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">slt</td>
                  <td className="py-2 px-4 border-b">salut</td>
                  <td className="py-2 px-4 border-b">Hi</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">cv</td>
                  <td className="py-2 px-4 border-b">ça va</td>
                  <td className="py-2 px-4 border-b">How are you</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">mrc</td>
                  <td className="py-2 px-4 border-b">merci</td>
                  <td className="py-2 px-4 border-b">Thank you</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">Darija in Digital Writing</h3>
          <p className="mb-4">Darija is often written using Latin script with numbers representing Arabic sounds:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3">
              <p className="font-medium">Numbers as Letters</p>
              <ul className="text-sm space-y-1 mt-2">
                <li><span className="font-bold">2</span> - glottal stop (ء)</li>
                <li><span className="font-bold">3</span> - ayn (ع)</li>
                <li><span className="font-bold">5</span> - kha (خ)</li>
                <li><span className="font-bold">7</span> - ha (ح)</li>
                <li><span className="font-bold">9</span> - qaf (ق)</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-3">
              <p className="font-medium">Example Text</p>
              <p className="text-sm mt-2">
                <span className="font-bold">Latin with numbers:</span> Salam, kifash nta? Ana ghadi n3ayek ghda inshallah.
              </p>
              <p className="text-sm mt-1">
                <span className="font-bold">Arabic script:</span> سلام، كيفاش نتا؟ أنا غادي نعيط ليك غدا إن شاء الله.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Media & Entertainment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Streaming & Entertainment</h3>
            <ul className="space-y-2">
              <li><span className="font-medium">Watch online:</span> tferrej online</li>
              <li><span className="font-medium">Subscribe:</span> abonni</li>
              <li><span className="font-medium">Streaming:</span> streaming</li>
              <li><span className="font-medium">Series:</span> musalsal</li>
              <li><span className="font-medium">Movie:</span> film</li>
              <li><span className="font-medium">Playlist:</span> playlist</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">News & Information</h3>
            <ul className="space-y-2">
              <li><span className="font-medium">Breaking news:</span> 3ajil</li>
              <li><span className="font-medium">Headline:</span> l-3onwan r-ra2isi</li>
              <li><span className="font-medium">Fake news:</span> l-akhbar l-kadhiba</li>
              <li><span className="font-medium">Share news:</span> partaji l-khabar</li>
              <li><span className="font-medium">Source:</span> l-masdar</li>
              <li><span className="font-medium">Fact-check:</span> t2akkad men l-ma3luma</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Karim:</p>
            <p className="pl-4">Salam Leila! Shfti dak l-post lli 3melto l-bareh? (Hi Leila! Did you see the post I made yesterday?)</p>
          </div>
          <div>
            <p className="font-medium">Leila:</p>
            <p className="pl-4">Ah shefto u 3melto like. 3jebni bezzaf! Shkun sawwer lik hadok s-selfies? (Yes, I saw it and liked it. I really liked it! Who took those selfies for you?)</p>
          </div>
          <div>
            <p className="font-medium">Karim:</p>
            <p className="pl-4">Ana b rassi, dert l-camera 3la timer. Ghadi n-uploadi kter d-swar f weekend. Nta 3endek Netflix? Bghit n-shouf dak l-musalsal l-jdid. (I took them myself with the camera timer. I'll upload more pictures on the weekend. Do you have Netflix? I want to watch that new series.)</p>
          </div>
          <div>
            <p className="font-medium">Leila:</p>
            <p className="pl-4">Iyeh 3endi. Ghadi n-sharji likom l-password f WhatsApp. Walakin khassek VPN bash tconnecta m3ah hna f l-Maghrib. (Yes, I have it. I'll share the password with you on WhatsApp. But you need a VPN to connect to it here in Morocco.)</p>
          </div>
          <div>
            <p className="font-medium">Karim:</p>
            <p className="pl-4">Mrc bzzaf! Ghadi n-downloadi shi VPN men Play Store. Nshoufou f weekend inshallah. (Thanks a lot! I'll download a VPN from the Play Store. Let's watch it on the weekend, God willing.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/advanced-four" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Back to All Lessons
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}