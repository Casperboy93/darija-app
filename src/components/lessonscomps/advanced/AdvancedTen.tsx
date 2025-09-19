'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaBook, FaBullseye, FaUsers, FaTrophy, FaStar, FaCheckCircle, FaAward, FaCrown, FaBolt, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const AdvancedTen = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [masteryScore, setMasteryScore] = useState(0);

  const toggleChallenge = (index: number) => {
    setCompletedChallenges(prev => {
      const newCompleted = prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index];
      
      // Update mastery score based on completed challenges
      setMasteryScore(Math.round((newCompleted.length / 15) * 100));
      return newCompleted;
    });
  };

  const sections = [
    {
      title: "Mastery Overview",
      icon: <FaCrown className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">Darija Mastery Assessment</h3>
            <p className="text-yellow-700 leading-relaxed">
              Congratulations on reaching the final advanced lesson! This comprehensive assessment will test your mastery 
              of Moroccan Arabic across all levels - from basic conversations to complex philosophical discussions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaTrophy className="w-8 h-8 text-yellow-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Final Assessment</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive evaluation</li>
                <li>• All skill areas covered</li>
                <li>• Real-world scenarios</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaStar className="w-8 h-8 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Mastery Levels</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Beginner (0-40%)</li>
                <li>• Intermediate (41-70%)</li>
                <li>• Advanced (71-100%)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaAward className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Certification</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital certificate</li>
                <li>• Skill verification</li>
                <li>• Portfolio ready</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">Your Current Progress</h4>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-700">Mastery Score</span>
                  <span className="text-sm font-medium text-blue-700">{masteryScore}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${masteryScore}%` }}
                  ></div>
                </div>
              </div>
              <FaUsers className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Conversational Mastery",
      icon: <FaUsers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Real-World Conversation Challenges</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-3">Challenge 1: Job Interview</h4>
                <p className="text-gray-700 mb-3">Conduct a complete job interview in Darija, including:</p>
                <div className="space-y-3">
                  {[
                    "Introduce yourself professionally",
                    "Discuss your qualifications and experience",
                    "Ask thoughtful questions about the position",
                    "Negotiate salary and benefits",
                    "Express enthusiasm for the role"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index) 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-3">Challenge 2: Cultural Exchange</h4>
                <p className="text-gray-700 mb-3">Host a cultural exchange conversation:</p>
                <div className="space-y-3">
                  {[
                    "Explain Moroccan traditions to a foreigner",
                    "Discuss cultural differences respectfully",
                    "Share personal cultural experiences",
                    "Answer complex cultural questions",
                    "Bridge cultural misunderstandings"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index + 5)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index + 5) 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index + 5) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Global Communication",
      icon: <FaGlobe className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">International Darija Usage</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-700 mb-3">Challenge 3: Business Presentation</h4>
                <p className="text-gray-700 mb-3">Deliver a professional presentation in Darija:</p>
                <div className="space-y-3">
                  {[
                    "Present a business proposal clearly",
                    "Handle questions and objections",
                    "Use persuasive language effectively",
                    "Incorporate data and statistics",
                    "Close with a compelling call to action"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index + 10)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index + 10) 
                            ? 'bg-blue-500 border-blue-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index + 10) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Literary Expression",
      icon: <FaBook className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Creative and Literary Mastery</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-700 mb-3">Challenge 4: Creative Writing</h4>
                <p className="text-gray-700 mb-3">Demonstrate literary skills in Darija:</p>
                <div className="space-y-3">
                  {[
                    "Write a short story with dialogue",
                    "Compose poetry using traditional forms",
                    "Create descriptive narratives",
                    "Use metaphors and literary devices",
                    "Express complex emotions through writing"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index + 15)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index + 15) 
                            ? 'bg-purple-500 border-purple-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index + 15) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-700 mb-3">Sample Literary Expressions</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">الحب كالورد، زين ولكن عندو شوك</p>
                    <p className="text-sm text-gray-600 italic">L-hub kal-ward, zin walakin 3andu shuk</p>
                    <p className="text-sm text-gray-500">(Love is like a rose, beautiful but has thorns)</p>
                  </div>
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">الصبر مفتاح الفرج، والعجلة من الشيطان</p>
                    <p className="text-sm text-gray-600 italic">S-sabr miftah l-faraj, w l-3ajla mn sh-shitan</p>
                    <p className="text-sm text-gray-500">(Patience is the key to relief, and haste is from the devil)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Philosophical Discourse",
      icon: <FaStar className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Advanced Philosophical Expression</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-indigo-700 mb-3">Challenge 5: Philosophical Debate</h4>
                <p className="text-gray-700 mb-3">Engage in sophisticated philosophical discussions:</p>
                <div className="space-y-3">
                  {[
                    "Debate the nature of consciousness",
                    "Discuss ethical dilemmas in modern society",
                    "Explore concepts of justice and fairness",
                    "Analyze the relationship between freedom and responsibility",
                    "Examine the meaning of existence and purpose"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index + 20)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index + 20) 
                            ? 'bg-indigo-500 border-indigo-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index + 20) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-indigo-700 mb-3">Advanced Philosophical Vocabulary</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">الوجودية</span> - l-wujudiya (existentialism)</p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">الجدلية</span> - l-jadaliya (dialectics)</p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">الميتافيزيقا</span> - l-mitafizika (metaphysics)</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">الأخلاق</span> - l-akhlaq (ethics)</p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">المنطق</span> - l-mantiq (logic)</p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded border">
                      <p><span className="font-medium">الجمالية</span> - l-jamaliya (aesthetics)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Final Assessment",
      icon: <FaTrophy className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Comprehensive Mastery Test</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-yellow-700 mb-3">Final Challenge: Complete Scenario</h4>
                <p className="text-gray-700 mb-3">Demonstrate mastery across all areas in one comprehensive scenario:</p>
                <div className="space-y-3">
                  {[
                    "Lead a multicultural team meeting in Darija",
                    "Present a complex project with philosophical implications",
                    "Handle conflicts and negotiations diplomatically",
                    "Inspire and motivate team members",
                    "Reflect on the experience with deep insight"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleChallenge(index + 25)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedChallenges.includes(index + 25) 
                            ? 'bg-yellow-500 border-yellow-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedChallenges.includes(index + 25) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center space-x-4 mb-4">
                  <FaCrown className="w-8 h-8 text-yellow-600" />
                  <h4 className="text-xl font-bold text-gray-800">Mastery Levels</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <FaStar className="w-8 h-8 text-bronze-500 mx-auto mb-2" />
                    <h5 className="font-semibold text-gray-800">Bronze</h5>
                    <p className="text-sm text-gray-600">0-40% Complete</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <FaBullseye className="w-8 h-8 text-silver-500 mx-auto mb-2" />
                    <h5 className="font-semibold text-gray-800">Silver</h5>
                    <p className="text-sm text-gray-600">41-70% Complete</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <FaBolt className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h5 className="font-semibold text-gray-800">Gold</h5>
                    <p className="text-sm text-gray-600">71-100% Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Certification",
      icon: <FaAward className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Your Darija Mastery Certificate</h3>
            
            <div className="bg-white p-6 rounded-lg border-2 border-purple-300 shadow-lg">
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-2">
                  <FaTrophy className="w-8 h-8 text-yellow-500" />
                  <FaStar className="w-8 h-8 text-purple-500" />
                  <FaAward className="w-8 h-8 text-blue-500" />
                </div>
                
                <h4 className="text-2xl font-bold text-gray-800">Certificate of Mastery</h4>
                <p className="text-lg text-gray-700">Moroccan Arabic (Darija)</p>
                
                <div className="border-t border-b border-gray-200 py-4 my-4">
                  <p className="text-gray-600">This certifies that you have successfully completed</p>
                  <p className="text-gray-600">the comprehensive Darija language program</p>
                  <p className="text-gray-600">and demonstrated mastery across all skill levels</p>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Mastery Score: {masteryScore}%</span>
                  <span>Date: {new Date().toLocaleDateString()}</span>
                </div>
                
                <div className="mt-6">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors">
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-700 mb-3">What's Next?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Continue practicing with native speakers</li>
                <li>• Explore Moroccan literature and media</li>
                <li>• Join Darija-speaking communities</li>
                <li>• Consider teaching others what you've learned</li>
                <li>• Keep expanding your vocabulary and cultural knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Advanced Lesson 10</h1>
        <p className="text-xl text-gray-600">Mastery & Fluency Assessment</p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{currentSection + 1} / {sections.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                currentSection === index
                  ? 'bg-yellow-500 text-white border-yellow-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-300'
              }`}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Current Section Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="text-yellow-500">
            {sections[currentSection].icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{sections[currentSection].title}</h2>
        </div>
        {sections[currentSection].content}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSection}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-4">
          <Link href="/lessons/advanced-nine">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              <FaChevronLeft className="w-4 h-4" />
              <span>Lesson 9</span>
            </button>
          </Link>
          <Link href="/lessons">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              <span>All Lessons</span>
              <FaGlobe className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <button
          onClick={nextSection}
          className="flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          <span>Next</span>
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AdvancedTen;