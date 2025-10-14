import React from 'react';

export default function EbooksPage() {
  const ebooks = [
    {
      id: 1,
      title: "Beginner's Guide to Darija",
      cover: "/images/ebook-beginner.jpg",
      description: "Start your journey with essential phrases and vocabulary for everyday situations.",
      price: "Free",
      level: "Beginner",
      pages: "120 pages"
    },
    {
      id: 2,
      title: "Moroccan Conversations",
      cover: "/images/ebook-conversations.jpg",
      description: "Practice dialogues for common scenarios like shopping, dining, and transportation.",
      price: "$4.99",
      level: "Intermediate",
      pages: "85 pages"
    },
    {
      id: 3,
      title: "Darija Idioms and Expressions",
      cover: "/images/ebook-idioms.jpg",
      description: "Understand cultural expressions and sayings used by native speakers.",
      price: "$6.99",
      level: "Advanced",
      pages: "95 pages"
    },
    {
      id: 4,
      title: "Darija Grammar Essentials",
      cover: "/images/ebook-grammar.jpg",
      description: "Master the fundamental grammar rules and sentence structures of Moroccan Arabic.",
      price: "$5.99",
      level: "Intermediate",
      pages: "110 pages"
    },
    {
      id: 5,
      title: "Street Darija Slang",
      cover: "/images/ebook-slang.jpg",
      description: "Learn contemporary slang and informal expressions used by young Moroccans.",
      price: "$3.99",
      level: "Advanced",
      pages: "75 pages"
    },
    {
      id: 6,
      title: "Business Darija",
      cover: "/images/ebook-business.jpg",
      description: "Professional vocabulary and phrases for business contexts and formal situations.",
      price: "$7.99",
      level: "Advanced",
      pages: "130 pages"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Darija E-Books
          </h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Curated collection of digital books to accelerate your Moroccan Arabic learning journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ebooks.map((book) => (
            <div 
              key={book.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Book Cover */}
              <div className="h-64 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{book.pages}</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {book.level}
                  </span>
                  <span className="text-xl font-bold text-black">{book.price}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {book.description}
                </p>
                
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-sm tracking-wide">
                  {book.price === "Free" ? "Download Free" : "Purchase Book"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-6 tracking-wide">
              Need Something Specific?
            </h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We create custom e-books tailored to your learning goals and interests. 
              From specialized vocabulary to cultural insights, let us know what you need.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 tracking-wide">
              Request Custom Book
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">6</span>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">E-Books Available</h3>
            <p className="text-gray-600 text-sm">Comprehensive learning materials</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">3</span>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Skill Levels</h3>
            <p className="text-gray-600 text-sm">From beginner to advanced</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">∞</span>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Lifetime Access</h3>
            <p className="text-gray-600 text-sm">Download and keep forever</p>
          </div>
        </div>
      </div>
    </div>
  );
}