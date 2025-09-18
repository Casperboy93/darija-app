"use client";

import React from 'react';
import Link from 'next/link';

export default function IntermediateFive() {
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
      
      <h1 className="text-3xl font-bold mb-6">Intermediate Lesson 5: Expressing Opinions</h1>
      
      <div className="bg-indigo-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn how to express your opinions, preferences, and thoughts in Darija.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Expressing Likes and Dislikes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kan3jebni... (I like...)</p>
            <p className="text-gray-600">Used to express things you like</p>
            <p className="text-sm italic mt-2">Example: Kan3jebni l-atay b n3na3. (I like mint tea.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ma kan3jebnish... (I don't like...)</p>
            <p className="text-gray-600">Used to express things you don't like</p>
            <p className="text-sm italic mt-2">Example: Ma kan3jebnish l-hlib. (I don't like milk.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kanbghi... (I love...)</p>
            <p className="text-gray-600">Used to express things you love</p>
            <p className="text-sm italic mt-2">Example: Kanbghi l-Maghrib bzzaf. (I love Morocco a lot.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ma kanbghish... (I don't love...)</p>
            <p className="text-gray-600">Used to express things you don't love</p>
            <p className="text-sm italic mt-2">Example: Ma kanbghish l-brd. (I don't love the cold.)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Expressing Thoughts and Opinions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kanfkr... (I think...)</p>
            <p className="text-gray-600">Used to express thoughts</p>
            <p className="text-sm italic mt-2">Example: Kanfkr blli ghadi tmtr ghedda. (I think it will rain tomorrow.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">F rayyi... (In my opinion...)</p>
            <p className="text-gray-600">Used to express opinions</p>
            <p className="text-sm italic mt-2">Example: F rayyi, had l-film zwin. (In my opinion, this movie is good.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kandunn... (I believe...)</p>
            <p className="text-gray-600">Used to express beliefs</p>
            <p className="text-sm italic mt-2">Example: Kandunn blli ghadi nji ghedda. (I believe I will come tomorrow.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ma mtakdsh... (I'm not sure...)</p>
            <p className="text-gray-600">Used to express uncertainty</p>
            <p className="text-sm italic mt-2">Example: Ma mtakdsh wesh ghadi nji. (I'm not sure if I will come.)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agreeing and Disagreeing</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Mttafq m3ak. (I agree with you.)</p>
          <p className="text-gray-600">Used to express agreement</p>
          <p className="text-sm italic mt-2">Pronounced: m-ta-feq m3ak</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Ma mttafqsh m3ak. (I don't agree with you.)</p>
          <p className="text-gray-600">Used to express disagreement</p>
          <p className="text-sm italic mt-2">Pronounced: ma m-ta-feq-sh m3ak</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">3ndek l-haq. (You're right.)</p>
          <p className="text-gray-600">Used to acknowledge someone is correct</p>
          <p className="text-sm italic mt-2">Pronounced: 3n-dek l-haq</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Rachid:</p>
            <p className="pl-4">Shnu rayyek f had l-film? (What do you think of this movie?)</p>
          </div>
          <div>
            <p className="font-medium">Leila:</p>
            <p className="pl-4">F rayyi, had l-film zwin bzzaf. Kan3jebni l-mumtillin. U nta? (In my opinion, this movie is very good. I like the actors. And you?)</p>
          </div>
          <div>
            <p className="font-medium">Rachid:</p>
            <p className="pl-4">Ana ma mttafqsh m3ak. Kanfkr blli l-film ma zwinsh. (I don't agree with you. I think the movie is not good.)</p>
          </div>
          <div>
            <p className="font-medium">Leila:</p>
            <p className="pl-4">3lash ma kan3jbeksh? (Why don't you like it?)</p>
          </div>
          <div>
            <p className="font-medium">Rachid:</p>
            <p className="pl-4">Ma kan3jebnish l-qissa. Kandunn blli kayna aflam khrin zwinin ktr. (I don't like the story. I believe there are other movies that are better.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/intermediate-four" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Back to All Lessons
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}