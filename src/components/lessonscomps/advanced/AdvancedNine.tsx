'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaBook, FaBullseye, FaUsers, FaLightbulb, FaBrain, FaComments, FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const AdvancedNine = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const toggleExercise = (index: number) => {
    setCompletedExercises(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "Lesson Overview",
      icon: <FaBook className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-3">Philosophy and Abstract Thinking</h3>
            <p className="text-purple-700 leading-relaxed">
              Master the art of philosophical discourse and abstract thinking in Darija. Learn to express complex ideas, 
              engage in deep conversations about life, existence, and meaning while using sophisticated Moroccan Arabic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaBullseye className="w-8 h-8 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Learning Goals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Express abstract concepts</li>
                <li>• Engage in philosophical debates</li>
                <li>• Discuss existential questions</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaUsers className="w-8 h-8 text-indigo-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Key Skills</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Abstract reasoning</li>
                <li>• Philosophical vocabulary</li>
                <li>• Deep conversations</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <FaLightbulb className="w-8 h-8 text-yellow-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-2">Applications</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Academic discussions</li>
                <li>• Intellectual debates</li>
                <li>• Personal reflection</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Philosophical Vocabulary",
      icon: <FaBrain className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Essential Philosophical Terms</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-700 mb-3">Existence & Being</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">الوجود</span> - l-wujud (existence)</p>
                    <p className="text-sm text-gray-600">The fundamental concept of being</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">الحقيقة</span> - l-haqiqa (truth/reality)</p>
                    <p className="text-sm text-gray-600">Ultimate truth or reality</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">الجوهر</span> - l-jawhar (essence)</p>
                    <p className="text-sm text-gray-600">The essential nature of things</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-700 mb-3">Knowledge & Wisdom</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">المعرفة</span> - l-ma3rifa (knowledge)</p>
                    <p className="text-sm text-gray-600">Deep understanding and wisdom</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">الحكمة</span> - l-hikma (wisdom)</p>
                    <p className="text-sm text-gray-600">Practical wisdom and insight</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p><span className="font-medium">الفهم</span> - l-fahm (understanding)</p>
                    <p className="text-sm text-gray-600">Comprehension and insight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-3">Abstract Concepts</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border">
                <p><span className="font-medium">العدالة</span> - l-3adala (justice)</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p><span className="font-medium">الحرية</span> - l-hurriya (freedom)</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p><span className="font-medium">المسؤولية</span> - l-mas'uliya (responsibility)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Existential Questions",
      icon: <FaComments className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Deep Questions in Darija</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-700 mb-3">Purpose and Meaning</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">أشنو هو المعنى ديال الحياة؟</p>
                    <p className="text-sm text-gray-600 italic">Ashnu huwa l-ma3na dyal l-hayat?</p>
                    <p className="text-sm text-gray-500">(What is the meaning of life?)</p>
                  </div>
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">علاش احنا هنا؟</p>
                    <p className="text-sm text-gray-600 italic">3lash hna hna?</p>
                    <p className="text-sm text-gray-500">(Why are we here?)</p>
                  </div>
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">أشنو هو الهدف ديالنا؟</p>
                    <p className="text-sm text-gray-600 italic">Ashnu huwa l-hadaf dyalna?</p>
                    <p className="text-sm text-gray-500">(What is our purpose?)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-purple-700 mb-3">Ethics and Morality</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">أشنو هو الصح والخطأ؟</p>
                    <p className="text-sm text-gray-600 italic">Ashnu huwa s-sah w l-khata'?</p>
                    <p className="text-sm text-gray-500">(What is right and wrong?)</p>
                  </div>
                  <div className="border-l-4 border-purple-300 pl-4">
                    <p className="font-medium">كيفاش نعرفو أشنو عدل؟</p>
                    <p className="text-sm text-gray-600 italic">Kifash n3arfu ashnu 3adl?</p>
                    <p className="text-sm text-gray-500">(How do we know what is just?)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Philosophical Dialogue",
      icon: <FaUsers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Engaging in Deep Conversations</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-indigo-700 mb-3">Sample Philosophical Discussion</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium text-blue-800">Person A:</p>
                    <p className="text-blue-700">أنا كانفكر بلي الحياة ماعندهاش معنى بلا هدف واضح.</p>
                    <p className="text-sm text-blue-600 italic">Ana kanfakkar blli l-hayat ma3andhash ma3na bla hadaf wadih.</p>
                    <p className="text-xs text-blue-500">(I think life has no meaning without a clear purpose.)</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-medium text-green-800">Person B:</p>
                    <p className="text-green-700">ولكن، واش ماكانش المعنى كايتخلق من التجارب ديالنا؟</p>
                    <p className="text-sm text-green-600 italic">Walakin, wash makansh l-ma3na kayitkhallaq mn t-tajarib dyalna?</p>
                    <p className="text-xs text-green-500">(But, doesn't meaning get created from our experiences?)</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-medium text-purple-800">Person A:</p>
                    <p className="text-purple-700">هادي نقطة مهمة. يمكن المعنى مايكونش شي حاجة كاينة من قبل، ولكن شي حاجة كانبنيوها.</p>
                    <p className="text-sm text-purple-600 italic">Hadi nuqta muhimma. Yimkin l-ma3na maykunsh shi haja kayna mn qabl, walakin shi haja kanbniwha.</p>
                    <p className="text-xs text-purple-500">(That's an important point. Maybe meaning isn't something that exists beforehand, but something we build.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Abstract Reasoning",
      icon: <FaLightbulb className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Expressing Complex Ideas</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-yellow-700 mb-3">Logical Reasoning Phrases</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">من جهة...</span> - mn jiha... (on one hand...)</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">من جهة أخرى...</span> - mn jiha ukhra... (on the other hand...)</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">بالتالي...</span> - bit-tali... (therefore...)</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">إذن...</span> - idhan... (thus...)</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">لكن...</span> - lakin... (however...)</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border">
                      <p><span className="font-medium">رغم ذلك...</span> - raghm dhalik... (nevertheless...)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-yellow-700 mb-3">Abstract Concepts</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-300 pl-4">
                    <p className="font-medium">هاد الفكرة معقدة ولكن مهمة.</p>
                    <p className="text-sm text-gray-600 italic">Had l-fikra mu3aqqada walakin muhimma.</p>
                    <p className="text-sm text-gray-500">(This idea is complex but important.)</p>
                  </div>
                  <div className="border-l-4 border-yellow-300 pl-4">
                    <p className="font-medium">كانشوف الموضوع من زاوية مختلفة.</p>
                    <p className="text-sm text-gray-600 italic">Kanshuf l-mawdu3 mn zawiya mukhtalifa.</p>
                    <p className="text-sm text-gray-500">(I see the topic from a different angle.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Practice Exercises",
      icon: <FaCheckCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Philosophical Discussion Practice</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-3">Exercise 1: Express Your Philosophy</h4>
                <p className="text-gray-700 mb-3">Translate these philosophical statements into Darija:</p>
                <div className="space-y-3">
                  {[
                    "Life is what we make of it",
                    "Knowledge is power",
                    "We are responsible for our choices"
                  ].map((statement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleExercise(index)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedExercises.includes(index) 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedExercises.includes(index) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{statement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-3">Exercise 2: Philosophical Questions</h4>
                <p className="text-gray-700 mb-3">Practice asking deep questions in Darija:</p>
                <div className="space-y-3">
                  {[
                    "What defines a good life?",
                    "Is happiness the ultimate goal?",
                    "How do we find meaning in suffering?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleExercise(index + 3)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedExercises.includes(index + 3) 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedExercises.includes(index + 3) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{question}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-green-700 mb-3">Exercise 3: Abstract Reasoning</h4>
                <p className="text-gray-700 mb-3">Practice expressing complex ideas:</p>
                <div className="space-y-3">
                  {[
                    "Explain the concept of justice",
                    "Discuss the nature of consciousness",
                    "Analyze the relationship between freedom and responsibility"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                      <button
                        onClick={() => toggleExercise(index + 6)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedExercises.includes(index + 6) 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedExercises.includes(index + 6) && <FaCheckCircle className="w-3 h-3" />}
                      </button>
                      <span className="text-gray-700">{topic}</span>
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
      title: "Advanced Tips",
      icon: <FaStar className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Mastering Philosophical Discourse</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-700 mb-2">🎯 Key Strategies</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Start with "من جهة..." (on one hand)</li>
                  <li>• Use "ولكن" (but) to present counterarguments</li>
                  <li>• End with "بالتالي" (therefore) for conclusions</li>
                  <li>• Practice active listening in philosophical discussions</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-700 mb-2">💡 Cultural Context</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respect different philosophical traditions</li>
                  <li>• Incorporate Islamic philosophical concepts when appropriate</li>
                  <li>• Be mindful of cultural sensitivities in abstract discussions</li>
                  <li>• Use metaphors and analogies familiar to Moroccan culture</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-700 mb-2">🚀 Advanced Techniques</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Master the art of Socratic questioning in Darija</li>
                  <li>• Learn to express paradoxes and contradictions</li>
                  <li>• Practice philosophical storytelling</li>
                  <li>• Develop your own philosophical voice in Darija</li>
                </ul>
              </div>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Advanced Lesson 9</h1>
        <p className="text-xl text-gray-600">Philosophy and Abstract Thinking</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{currentSection + 1} / {sections.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
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
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
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
          <div className="text-purple-500">
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
          <Link href="/lessons/advanced-eight">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              <FaChevronLeft className="w-4 h-4" />
              <span>Lesson 8</span>
            </button>
          </Link>
          <Link href="/lessons/advanced-ten">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              <span>Lesson 10</span>
              <FaChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <button
          onClick={nextSection}
          className="flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          <span>Next</span>
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AdvancedNine;