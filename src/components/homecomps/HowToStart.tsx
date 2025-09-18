import React from 'react';
import { FaUserPlus, FaRoute, FaPlay, FaTrophy } from 'react-icons/fa';

const HowToStart: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Account',
      description: 'Sign up for free and set up your personalized learning profile to get started.',
      icon: FaUserPlus,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      title: 'Choose Your Path',
      description: 'Select your current level and learning goals to get a customized curriculum.',
      icon: FaRoute,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 3,
      title: 'Start Learning',
      description: 'Begin with interactive lessons, practice pronunciation, and build your vocabulary.',
      icon: FaPlay,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 4,
      title: 'Track Progress',
      description: 'Monitor your achievements, earn badges, and celebrate your milestones.',
      icon: FaTrophy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Getting Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Start
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Learning Darija
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to begin your journey to fluency in Moroccan Arabic. 
            Our structured approach makes learning easy and enjoyable.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              {/* Step card */}
              <div className={`relative ${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 z-10`}>
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:border-blue-300 group-hover:text-blue-600 transition-colors duration-300">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-4 mt-2">
                  <step.icon className={`text-3xl ${step.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who have successfully mastered Darija with our proven method.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;