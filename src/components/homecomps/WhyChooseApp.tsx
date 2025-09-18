import React from 'react';

const WhyChooseApp: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Authentic Moroccan Content',
      description: 'Learn real Darija as spoken by locals, not textbook Arabic',
      icon: '🇲🇦'
    },
    {
      id: 2,
      title: 'Interactive Learning',
      description: 'Practice with audio, quizzes, and conversation exercises',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Cultural Context',
      description: 'Understand the cultural nuances behind the language',
      icon: '🏺'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Level',
      description: 'Start with beginner lessons or jump ahead if you have experience'
    },
    {
      number: '02',
      title: 'Daily Practice',
      description: 'Spend just 15 minutes a day to build your skills consistently'
    },
    {
      number: '03',
      title: 'Apply What You Learn',
      description: 'Use the translator tool to practice forming your own sentences'
    },
    {
      number: '04',
      title: 'Track Progress',
      description: 'Complete lessons and watch your fluency grow over time'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our App</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The fastest way to learn Moroccan Arabic with a structured approach designed for real conversations
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How to Start */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-center mb-8">How to Start Learning</h3>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div className={`md:ml-6 ${index < steps.length - 1 ? 'md:border-l-4 md:border-dashed md:border-gray-200 md:pb-12 md:-mb-12 md:pl-6' : ''} pt-4 md:pt-0`}>
                  <h4 className="text-xl font-semibold text-primary">{step.title}</h4>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApp;