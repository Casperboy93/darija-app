import React from 'react';

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Darija App</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Darija App is dedicated to making Moroccan Arabic (Darija) accessible to everyone. 
            Our mission is to bridge cultural gaps through language learning, helping people 
            connect with Morocco's rich culture and heritage.
          </p>
          <p className="text-gray-700">
            Whether you're planning to visit Morocco, connect with Moroccan friends and family, 
            or simply expand your linguistic horizons, our app provides the tools and resources 
            you need to learn Darija effectively.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Learn Darija?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Cultural Connection</h3>
              <p className="text-gray-700">
                Learning Darija opens doors to authentic connections with Moroccan people, 
                allowing you to experience the culture beyond the tourist perspective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Travel Enhancement</h3>
              <p className="text-gray-700">
                Navigate Morocco with confidence, from haggling in markets to ordering in 
                restaurants and making friends with locals.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-6">
            Learning a language is more enjoyable when you're part of a community. Connect with 
            fellow learners, practice with native speakers, and share your progress on our platform.
          </p>
          <div className="text-center">
            <a href="/lessons" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 font-medium">
              Start Learning Today
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}