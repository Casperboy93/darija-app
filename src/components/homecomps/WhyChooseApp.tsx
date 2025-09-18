import React from 'react';
import { FaFlag, FaGamepad, FaUniversity, FaChartLine, FaComments, FaClock } from 'react-icons/fa';

const WhyChooseApp: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Authentic Moroccan Content',
      description: 'Learn real Darija as spoken by locals, not textbook Arabic. Our content is created by native speakers.',
      icon: FaFlag,
      color: 'text-green-600'
    },
    {
      id: 2,
      title: 'Interactive Learning',
      description: 'Practice with audio, quizzes, and conversation exercises designed to make learning engaging and effective.',
      icon: FaGamepad,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Cultural Context',
      description: 'Understand the cultural nuances behind the language and learn when and how to use different expressions.',
      icon: FaUniversity,
      color: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Progressive Learning',
      description: 'Start from basics and gradually build your skills with our structured curriculum designed for all levels.',
      icon: FaChartLine,
      color: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Real-time Translation',
      description: 'Practice with our built-in translator tool to form sentences and get instant feedback on your progress.',
      icon: FaComments,
      color: 'text-teal-600'
    },
    {
      id: 6,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with lessons that fit your schedule. No pressure, just consistent progress.',
      icon: FaClock,
      color: 'text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-800 mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Darija App
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The fastest and most effective way to learn Moroccan Arabic with a structured approach 
            designed for real conversations and cultural understanding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-gray-200"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <feature.icon className={`text-4xl ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:border-blue-300 group-hover:text-blue-600 transition-colors duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful learners who have mastered Darija with our proven method.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-gray-500 space-x-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free to start
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No downloads
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Learn your way
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApp;