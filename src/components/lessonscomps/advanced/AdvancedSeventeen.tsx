"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedSeventeen() {
  return (
    <LessonLayout 
      title="Environmental Science and Sustainability" 
      level="advanced" 
      lessonNumber={17}
      previousLesson="advanced-sixteen"
      nextLesson="advanced-eighteen"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master environmental science and sustainability vocabulary in Darija. Learn to discuss climate change, conservation, renewable energy, and environmental policies with scientific precision.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master environmental science terminology</li>
            <li>Learn climate change and sustainability vocabulary</li>
            <li>Practice discussing environmental policies</li>
            <li>Understand conservation and renewable energy concepts</li>
          </ul>
        </div>
      </div>
      
      {/* Climate Change */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Climate Change and Global Warming
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for discussing climate change and its impacts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Climate Phenomena</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Climate</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Taghyīr munākhī:</span> Climate change</p>
              <p className="text-sm"><span className="font-semibold">Iḥtibās ḥarārī:</span> Global warming</p>
              <p className="text-sm"><span className="font-semibold">Ghāzāt dafīʾa:</span> Greenhouse gases</p>
              <p className="text-sm"><span className="font-semibold">Ṭabaqa ūzūn:</span> Ozone layer</p>
              <p className="text-sm"><span className="font-semibold">Taṣaḥḥur:</span> Desertification</p>
            </div>
          </div>
          
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Environmental Impacts</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Effects</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Irtifāʿ mustawa al-biḥār:</span> Sea level rise</p>
              <p className="text-sm"><span className="font-semibold">Dhawabān jalīd:</span> Ice melting</p>
              <p className="text-sm"><span className="font-semibold">Ẓawāhir jawwiyya mutaṭarrifa:</span> Extreme weather</p>
              <p className="text-sm"><span className="font-semibold">Jafāf:</span> Drought</p>
              <p className="text-sm"><span className="font-semibold">Fayaḍānāt:</span> Floods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Renewable Energy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Renewable Energy and Clean Technology
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-4">Energy Sources and Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-700 mb-2">Solar Energy</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ṭāqa shamsiyya:</span> Solar energy</p>
                <p><span className="font-semibold">Alwāḥ shamsiyya:</span> Solar panels</p>
                <p><span className="font-semibold">Khaḷāyā ḍawʾiyya:</span> Photovoltaic cells</p>
                <p><span className="font-semibold">Maḥaṭṭa shamsiyya:</span> Solar power plant</p>
                <p><span className="font-semibold">Takhzīn ṭāqa:</span> Energy storage</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-700 mb-2">Wind Energy</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ṭāqa riyāḥ:</span> Wind energy</p>
                <p><span className="font-semibold">Ṭawāḥīn hawāʾ:</span> Wind turbines</p>
                <p><span className="font-semibold">Ḥaql riyāḥ:</span> Wind farm</p>
                <p><span className="font-semibold">Riyāḥ baḥriyya:</span> Offshore wind</p>
                <p><span className="font-semibold">Kahraba riyāḥ:</span> Wind electricity</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-700 mb-2">Other Sources</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ṭāqa māʾiyya:</span> Hydroelectric</p>
                <p><span className="font-semibold">Ṭāqa jawfiyya:</span> Geothermal</p>
                <p><span className="font-semibold">Ṭāqa ḥayawiyya:</span> Biomass</p>
                <p><span className="font-semibold">Waqūd ḥayawī:</span> Biofuel</p>
                <p><span className="font-semibold">Hidrūjīn:</span> Hydrogen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conservation and Biodiversity */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Conservation and Biodiversity
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Ecosystem Protection</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Biodiversity Terms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Tanawwuʿ ḥayawī</p>
                  <p className="text-xs text-gray-600">Biodiversity</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Niẓām bīʾī</p>
                  <p className="text-xs text-gray-600">Ecosystem</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Anwāʿ muhdadda</p>
                  <p className="text-xs text-gray-600">Endangered species</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Inqirāḍ</p>
                  <p className="text-xs text-gray-600">Extinction</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mawṭin ṭabīʿī</p>
                  <p className="text-xs text-gray-600">Natural habitat</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Maḥmiyya ṭabīʿiyya</p>
                  <p className="text-xs text-gray-600">Nature reserve</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Conservation Strategies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Ḥimāya bīʾiyya</p>
                  <p className="text-xs text-gray-600">Environmental protection</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Iʿādat taʾhīl</p>
                  <p className="text-xs text-gray-600">Restoration</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Idāra mustadāma</p>
                  <p className="text-xs text-gray-600">Sustainable management</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Takthīr fī al-asir</p>
                  <p className="text-xs text-gray-600">Captive breeding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pollution and Waste */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Pollution and Waste Management
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Types of Pollution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Air and Water Pollution</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Talawwuth hawāʾ:</span> Air pollution</p>
                <p><span className="font-semibold">Talawwuth māʾ:</span> Water pollution</p>
                <p><span className="font-semibold">Anbiʿāthāt:</span> Emissions</p>
                <p><span className="font-semibold">Miyyāh ṣarf:</span> Wastewater</p>
                <p><span className="font-semibold">Mawādd sāmma:</span> Toxic substances</p>
                <p><span className="font-semibold">Tanẓīf hawāʾ:</span> Air purification</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Waste Management</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Idārat nufa̧yāt:</span> Waste management</p>
                <p><span className="font-semibold">Iʿādat tadwīr:</span> Recycling</p>
                <p><span className="font-semibold">Taqlīl nufāyāt:</span> Waste reduction</p>
                <p><span className="font-semibold">Nufāyāt ṣulba:</span> Solid waste</p>
                <p><span className="font-semibold">Nufāyāt khāṭira:</span> Hazardous waste</p>
                <p><span className="font-semibold">Samād ʿuḍwī:</span> Composting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Development */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Sustainable Development
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-4">Sustainability Principles</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Three Pillars of Sustainability</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-green-600 font-bold">🌱</span>
                  </div>
                  <p className="text-sm font-medium">Bīʾī</p>
                  <p className="text-xs text-gray-600">Environmental</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">💰</span>
                  </div>
                  <p className="text-sm font-medium">Iqtiṣādī</p>
                  <p className="text-xs text-gray-600">Economic</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">👥</span>
                  </div>
                  <p className="text-sm font-medium">Ijtimāʿī</p>
                  <p className="text-xs text-gray-600">Social</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Sustainable Practices</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Zirāʿa ʿuḍwiyya</p>
                  <p className="text-xs text-gray-600">Organic farming</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Binā akhḍar</p>
                  <p className="text-xs text-gray-600">Green building</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Naql mustadām</p>
                  <p className="text-xs text-gray-600">Sustainable transport</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Iqtiṣād akhḍar</p>
                  <p className="text-xs text-gray-600">Green economy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Policies */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Environmental Policies and Agreements
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">International Environmental Law</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Global Agreements</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ittifāqiyyat Bārīs</p>
                  <p className="text-xs text-gray-600">Paris Agreement</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Brūtūkūl Kyōtō</p>
                  <p className="text-xs text-gray-600">Kyoto Protocol</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ittifāqiyyat Munākh</p>
                  <p className="text-xs text-gray-600">Climate Convention</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ahdāf Tanmiya</p>
                  <p className="text-xs text-gray-600">SDGs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Policy Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ḍarāʾib karbūn</p>
                  <p className="text-xs text-gray-600">Carbon tax</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tijārat anbiʿāthāt</p>
                  <p className="text-xs text-gray-600">Emissions trading</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Daʿm ṭāqa naẓīfa</p>
                  <p className="text-xs text-gray-600">Clean energy subsidies</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Lawāʾiḥ bīʾiyya</p>
                  <p className="text-xs text-gray-600">Environmental regulations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Green Technology */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Green Technology and Innovation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Clean Technologies</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Sayyārāt kahraba̧ʾiyya</p>
                <p className="text-gray-600 text-sm">Electric vehicles</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Shabakat dhakiyya</p>
                <p className="text-gray-600 text-sm">Smart grid</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Mabānī dhakiyya</p>
                <p className="text-gray-600 text-sm">Smart buildings</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Takhnūlūjiyā naẓīfa</p>
                <p className="text-gray-600 text-sm">Clean technology</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Environmental Monitoring</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Murāqaba bīʾiyya</p>
                <p className="text-gray-600 text-sm">Environmental monitoring</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Aqmār ṣināʿiyya</p>
                <p className="text-gray-600 text-sm">Satellites</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Ḥassāsāt bīʾiyya</p>
                <p className="text-gray-600 text-sm">Environmental sensors</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Bayānāt munākhiyya</p>
                <p className="text-gray-600 text-sm">Climate data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Environmental Conference
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
              <p className="text-gray-700">Al-Maghrib yaqūm bi-istithmārāt kabīra fī majāl aṭ-ṭāqa ash-shamsiyya wa ar-riyāḥ.</p>
              <p className="text-sm text-gray-500 mt-1">Morocco is making large investments in solar and wind energy.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Yūsuf:</p>
              <p className="text-gray-700">Hādhā muhimm jiddan li-taḥqīq ahdāf at-tanmiya al-mustadāma wa taqlīl al-anbiʿāthāt.</p>
              <p className="text-sm text-gray-500 mt-1">This is very important for achieving sustainable development goals and reducing emissions.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
              <p className="text-gray-700">Naʿam, wa lākin yajibu an nuʿṭī ahamiyya akthar li-ḥimāyat at-tanawwuʿ al-ḥayawī ayḍan.</p>
              <p className="text-sm text-gray-500 mt-1">Yes, but we must also give more importance to protecting biodiversity.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Yūsuf:</p>
              <p className="text-gray-700">Muṭlaqan. Al-ḥulūl yajibu an takūn shāmila wa tataḍamman jamīʿ jawānib al-bīʾa.</p>
              <p className="text-sm text-gray-500 mt-1">Absolutely. Solutions must be comprehensive and include all environmental aspects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Environmental Leadership!
        </h2>
        <p className="text-lg">You've mastered environmental science and sustainability vocabulary in Darija! Morocco is a leader in renewable energy with projects like Noor Ouarzazate Solar Complex and ambitious climate goals. This knowledge connects you to global environmental discussions and Morocco's green initiatives.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🌞 Fun fact: Morocco's Noor Ouarzazate is one of the world's largest concentrated solar power complexes!</p>
        </div>
      </div>
    </LessonLayout>
  );
}