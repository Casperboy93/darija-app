"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';

export default function AdvancedNineteen() {

  return (
    <LessonLayout
      title="Artificial Intelligence and Technology"
      level="advanced"
      lessonNumber={19}
      previousLesson="advanced-eighteen"
      nextLesson="advanced-twenty"
    >
      {/* Lesson Overview */}
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master artificial intelligence and advanced technology vocabulary in Darija. Learn to discuss machine learning, robotics, data science, and emerging technologies with technical precision.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
          <p className="font-medium text-indigo-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master AI and machine learning terminology</li>
            <li>Learn robotics and automation vocabulary</li>
            <li>Practice discussing data science concepts</li>
            <li>Understand emerging technology trends</li>
          </ul>
        </div>
      </div>
      
      {/* Artificial Intelligence */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Artificial Intelligence and Machine Learning
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for AI and machine learning concepts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">AI Fundamentals</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Core AI</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Dhakāʾ iṣṭināʿī:</span> Artificial intelligence</p>
              <p className="text-sm"><span className="font-semibold">Taʿallum ālī:</span> Machine learning</p>
              <p className="text-sm"><span className="font-semibold">Taʿallum ʿamīq:</span> Deep learning</p>
              <p className="text-sm"><span className="font-semibold">Shabakāt ʿaṣabiyya:</span> Neural networks</p>
              <p className="text-sm"><span className="font-semibold">Khuwarizmiyyāt:</span> Algorithms</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">ML Applications</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Applications</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Ruʾya ḥāsūbiyya:</span> Computer vision</p>
              <p className="text-sm"><span className="font-semibold">Maʿālajat lughawiyya:</span> Natural language processing</p>
              <p className="text-sm"><span className="font-semibold">Tanabbuʾ:</span> Prediction</p>
              <p className="text-sm"><span className="font-semibold">Taṣnīf:</span> Classification</p>
              <p className="text-sm"><span className="font-semibold">Tanqīb bayānāt:</span> Data mining</p>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics and Automation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Robotics and Automation
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Robotics Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Robot Types</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Rūbūt ṣināʿī:</span> Industrial robot</p>
                <p><span className="font-semibold">Rūbūt khidmī:</span> Service robot</p>
                <p><span className="font-semibold">Rūbūt ṭibbī:</span> Medical robot</p>
                <p><span className="font-semibold">Rūbūt dhākī:</span> Smart robot</p>
                <p><span className="font-semibold">Rūbūt mutaḥarrik:</span> Mobile robot</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Automation Systems</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Atamata ṣināʿiyya:</span> Industrial automation</p>
                <p><span className="font-semibold">Raqāba āliyya:</span> Automated control</p>
                <p><span className="font-semibold">Niẓām dhākī:</span> Smart system</p>
                <p><span className="font-semibold">Ḥassāsāt:</span> Sensors</p>
                <p><span className="font-semibold">Muḥarrikāt:</span> Actuators</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Human-Robot Interaction</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Tafāʿul insān-rūbūt:</span> Human-robot interaction</p>
                <p><span className="font-semibold">Wājha mustakhdim:</span> User interface</p>
                <p><span className="font-semibold">Amān rūbūtī:</span> Robot safety</p>
                <p><span className="font-semibold">Taʿāwun rūbūtī:</span> Robot collaboration</p>
                <p><span className="font-semibold">Dhakāʾ ijtimāʿī:</span> Social intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Science */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Data Science and Big Data
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Data Analytics</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Data Processing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">ʿIlm bayānāt</p>
                  <p className="text-xs text-gray-600">Data science</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Bayānāt ḍakhma</p>
                  <p className="text-xs text-gray-600">Big data</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taḥlīl bayānāt</p>
                  <p className="text-xs text-gray-600">Data analysis</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tanẓīf bayānāt</p>
                  <p className="text-xs text-gray-600">Data cleaning</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Takhzīn bayānāt</p>
                  <p className="text-xs text-gray-600">Data storage</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Qawāʿid bayānāt</p>
                  <p className="text-xs text-gray-600">Databases</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Analytics Tools</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Taṣwīr bayānāt</p>
                  <p className="text-xs text-gray-600">Data visualization</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Iḥṣāʾiyyāt</p>
                  <p className="text-xs text-gray-600">Statistics</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Namādhij riyāḍiyya</p>
                  <p className="text-xs text-gray-600">Mathematical models</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Khuwarizmiyyāt taḥlīl</p>
                  <p className="text-xs text-gray-600">Analytics algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emerging Technologies */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Emerging Technologies
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Next-Generation Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Quantum Computing</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ḥāsūb kwāntī:</span> Quantum computer</p>
                <p><span className="font-semibold">Fīziyāʾ kwāntiyya:</span> Quantum physics</p>
                <p><span className="font-semibold">Khuwarizmiyyāt kwāntiyya:</span> Quantum algorithms</p>
                <p><span className="font-semibold">Tashābuk kwāntī:</span> Quantum entanglement</p>
                <p><span className="font-semibold">Fawqiyya kwāntiyya:</span> Quantum supremacy</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Blockchain Technology</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Silsilat kutla:</span> Blockchain</p>
                <p><span className="font-semibold">ʿUmla raqamiyya:</span> Cryptocurrency</p>
                <p><span className="font-semibold">ʿUqūd dhakiyya:</span> Smart contracts</p>
                <p><span className="font-semibold">Tashfīr:</span> Encryption</p>
                <p><span className="font-semibold">Lāmarkaziyya:</span> Decentralization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internet of Things */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Internet of Things and Smart Systems
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-4">Connected Devices</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">IoT Components</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Internet al-ashyāʾ</p>
                  <p className="text-xs text-gray-600">Internet of Things</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ajhiza mutaṣṣila</p>
                  <p className="text-xs text-gray-600">Connected devices</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ḥassāsāt dhakiyya</p>
                  <p className="text-xs text-gray-600">Smart sensors</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Shabakat lāsilkiyya</p>
                  <p className="text-xs text-gray-600">Wireless network</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Smart Applications</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Bayt dhākī</p>
                  <p className="text-xs text-gray-600">Smart home</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Madīna dhakiyya</p>
                  <p className="text-xs text-gray-600">Smart city</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Zirāʿa dhakiyya</p>
                  <p className="text-xs text-gray-600">Smart agriculture</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Naql dhākī</p>
                  <p className="text-xs text-gray-600">Smart transportation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cybersecurity */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Cybersecurity and Digital Privacy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-red-800 mb-3">Security Threats</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-red-700">Amn sībrānī</p>
                <p className="text-gray-600 text-sm">Cybersecurity</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Hujūm sībrānī</p>
                <p className="text-gray-600 text-sm">Cyber attack</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Fīrūs ḥāsūbī</p>
                <p className="text-gray-600 text-sm">Computer virus</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Takhrīb bayānāt</p>
                <p className="text-gray-600 text-sm">Data breach</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-red-800 mb-3">Protection Methods</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-red-700">Ḥimāya bayānāt</p>
                <p className="text-gray-600 text-sm">Data protection</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Tashfīr</p>
                <p className="text-gray-600 text-sm">Encryption</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Jidār nārī</p>
                <p className="text-gray-600 text-sm">Firewall</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">Khuṣūṣiyya raqamiyya</p>
                <p className="text-gray-600 text-sm">Digital privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Computing */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
          Cloud Computing and Distributed Systems
        </h2>
        
        <div className="bg-sky-50 border border-sky-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-sky-800 mb-4">Cloud Technologies</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-sky-200">
              <h4 className="font-semibold text-sky-700 mb-2">Cloud Services</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ḥāsūb saḥābī</p>
                  <p className="text-xs text-gray-600">Cloud computing</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Takhzīn saḥābī</p>
                  <p className="text-xs text-gray-600">Cloud storage</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Khidmāt saḥābiyya</p>
                  <p className="text-xs text-gray-600">Cloud services</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Niẓām muwazzaʿ</p>
                  <p className="text-xs text-gray-600">Distributed system</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-sky-200">
              <h4 className="font-semibold text-sky-700 mb-2">Virtualization</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Iftirāḍiyya</p>
                  <p className="text-xs text-gray-600">Virtualization</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ḥāwiya</p>
                  <p className="text-xs text-gray-600">Container</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Khādim iftirāḍī</p>
                  <p className="text-xs text-gray-600">Virtual server</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mawārid mushtaraka</p>
                  <p className="text-xs text-gray-600">Shared resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Tech Innovation Conference
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Layla:</p>
              <p className="text-gray-700">Al-dhakāʾ al-iṣṭināʿī sayughayyir jamīʿ al-ṣināʿāt fī al-ʿuqūd al-qādima.</p>
              <p className="text-sm text-gray-500 mt-1">Artificial intelligence will transform all industries in the coming decades.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Omar:</p>
              <p className="text-gray-700">Naʿam, wa lākin yajibu an naḍaʿ qawānīn li-ḍamān al-amn wa al-khuṣūṣiyya.</p>
              <p className="text-sm text-gray-500 mt-1">Yes, but we must establish laws to ensure security and privacy.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Layla:</p>
              <p className="text-gray-700">Al-ḥāsūb al-kwāntī sayaḥull mushkilāt maʿqada lam nakun nataṣawwar ḥallahā.</p>
              <p className="text-sm text-gray-500 mt-1">Quantum computing will solve complex problems we couldn't imagine solving.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Omar:</p>
              <p className="text-gray-700">Hādhā yataṭallab istithmārāt kabīra fī at-taʿlīm wa at-tadrīb at-tiqnī.</p>
              <p className="text-sm text-gray-500 mt-1">This requires major investments in education and technical training.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Tech Innovation!
        </h2>
        <p className="text-lg">You've mastered AI and technology vocabulary in Darija! Morocco is investing heavily in digital transformation and emerging technologies. This knowledge connects you to the global tech community and Morocco's digital initiatives.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🤖 Fun fact: Morocco is developing AI strategies and smart city projects as part of its digital transformation vision!</p>
        </div>
      </div>
    </LessonLayout>
  );
}