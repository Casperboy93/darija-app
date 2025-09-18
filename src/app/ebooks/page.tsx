import React from 'react';

export default function EbooksPage() {
  const ebooks = [
    {
      id: 1,
      title: "Beginner's Guide to Darija",
      cover: "/images/ebook-beginner.jpg",
      description: "Start your journey with essential phrases and vocabulary for everyday situations.",
      price: "Free",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Moroccan Conversations",
      cover: "/images/ebook-conversations.jpg",
      description: "Practice dialogues for common scenarios like shopping, dining, and transportation.",
      price: "$4.99",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Darija Idioms and Expressions",
      cover: "/images/ebook-idioms.jpg",
      description: "Understand cultural expressions and sayings used by native speakers.",
      price: "$6.99",
      level: "Advanced"
    }
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Darija E-Books</h1>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Enhance your learning with our collection of e-books designed to help you master Moroccan Arabic at your own pace.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{book.title}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-primary bg-opacity-10 text-primary text-sm px-3 py-1 rounded-full">
                    {book.level}
                  </span>
                  <span className="font-bold text-gray-900">{book.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  {book.price === "Free" ? "Download Now" : "Purchase"}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Request Custom E-Books</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Looking for specific topics or specialized vocabulary? Let us know what you're interested in learning.
          </p>
          <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}