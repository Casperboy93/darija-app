"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedEighteen() {
  return (
    <LessonLayout 
      title="Healthcare and Medical Research" 
      level="advanced" 
      lessonNumber={18}
      previousLesson="advanced-seventeen"
      nextLesson="advanced-nineteen"
    >
      {/* Lesson Overview */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master advanced healthcare and medical research vocabulary in Darija. Learn to discuss medical procedures, research methodologies, pharmaceutical development, and healthcare systems with professional precision.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
          <p className="font-medium text-red-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master medical and healthcare terminology</li>
            <li>Learn research methodology vocabulary</li>
            <li>Practice discussing pharmaceutical development</li>
            <li>Understand healthcare systems and policies</li>
          </ul>
        </div>
      </div>
      
      {/* Medical Specialties */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Medical Specialties and Procedures
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for medical specialties and advanced procedures.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Surgical Specialties</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Surgery</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Jirāḥa qalb:</span> Cardiac surgery</p>
              <p className="text-sm"><span className="font-semibold">Jirāḥa ʿaṣabiyya:</span> Neurosurgery</p>
              <p className="text-sm"><span className="font-semibold">Jirāḥa tajmīliyya:</span> Plastic surgery</p>
              <p className="text-sm"><span className="font-semibold">Jirāḥa ʿiẓām:</span> Orthopedic surgery</p>
              <p className="text-sm"><span className="font-semibold">Jirāḥa ṣadr:</span> Thoracic surgery</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Internal Medicine</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Ṭibb bāṭinī:</span> Internal medicine</p>
              <p className="text-sm"><span className="font-semibold">Amrāḍ qalb:</span> Cardiology</p>
              <p className="text-sm"><span className="font-semibold">Amrāḍ ʿaṣabiyya:</span> Neurology</p>
              <p className="text-sm"><span className="font-semibold">Amrāḍ ghudad:</span> Endocrinology</p>
              <p className="text-sm"><span className="font-semibold">Amrāḍ dam:</span> Hematology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Research */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Medical Research and Clinical Trials
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Research Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Study Types</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Dirāsa ʿashwāʾiyya:</span> Randomized study</p>
                <p><span className="font-semibold">Tajriba sarīriyya:</span> Clinical trial</p>
                <p><span className="font-semibold">Dirāsa waṣfiyya:</span> Descriptive study</p>
                <p><span className="font-semibold">Dirāsa muqārana:</span> Comparative study</p>
                <p><span className="font-semibold">Dirāsa mustaqbaliyya:</span> Prospective study</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Research Ethics</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Muwāfaqa mūʿlama:</span> Informed consent</p>
                <p><span className="font-semibold">Akhlāqiyyāt baḥth:</span> Research ethics</p>
                <p><span className="font-semibold">Lajna akhlāqiyya:</span> Ethics committee</p>
                <p><span className="font-semibold">Sirriyya marīḍ:</span> Patient confidentiality</p>
                <p><span className="font-semibold">Ḥuqūq marīḍ:</span> Patient rights</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Data Analysis</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Taḥlīl iḥṣāʾī:</span> Statistical analysis</p>
                <p><span className="font-semibold">Bayānāt sarīriyya:</span> Clinical data</p>
                <p><span className="font-semibold">Natāʾij muhimma:</span> Significant results</p>
                <p><span className="font-semibold">Muʿāyir jūda:</span> Quality standards</p>
                <p><span className="font-semibold">Taqyīm natāʾij:</span> Results evaluation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pharmaceutical Development */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Pharmaceutical Development and Drug Discovery
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Drug Development Process</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Discovery and Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Iktishāf dawāʾ</p>
                  <p className="text-xs text-gray-600">Drug discovery</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṭwīr dawāʾ</p>
                  <p className="text-xs text-gray-600">Drug development</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tajārib mukhtabara</p>
                  <p className="text-xs text-gray-600">Laboratory trials</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tajārib ḥayawānāt</p>
                  <p className="text-xs text-gray-600">Animal trials</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Marāḥil sarīriyya</p>
                  <p className="text-xs text-gray-600">Clinical phases</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Muwāfaqa tanẓīmiyya</p>
                  <p className="text-xs text-gray-600">Regulatory approval</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Pharmaceutical Manufacturing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Ṣināʿa dawāʾiyya</p>
                  <p className="text-xs text-gray-600">Pharmaceutical manufacturing</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Raqāba jūda</p>
                  <p className="text-xs text-gray-600">Quality control</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mamārasāt ṣināʿiyya</p>
                  <p className="text-xs text-gray-600">Manufacturing practices</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Takhzīn wa tawzīʿ</p>
                  <p className="text-xs text-gray-600">Storage and distribution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Systems */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Healthcare Systems and Policy
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Healthcare Organization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Healthcare Delivery</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Niẓām ṣiḥḥī:</span> Healthcare system</p>
                <p><span className="font-semibold">Riʿāya awwaliyya:</span> Primary care</p>
                <p><span className="font-semibold">Riʿāya thānawiyya:</span> Secondary care</p>
                <p><span className="font-semibold">Riʿāya mutakhaṣṣiṣa:</span> Specialized care</p>
                <p><span className="font-semibold">Ṭibb ṭawāriʾ:</span> Emergency medicine</p>
                <p><span className="font-semibold">Riʿāya munziliyya:</span> Home care</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Healthcare Policy</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Siyāsa ṣiḥḥiyya:</span> Health policy</p>
                <p><span className="font-semibold">Taʾmīn ṣiḥḥī:</span> Health insurance</p>
                <p><span className="font-semibold">Tanẓīm ṣiḥḥī:</span> Health regulation</p>
                <p><span className="font-semibold">Mīzāniyya ṣiḥḥa:</span> Health budget</p>
                <p><span className="font-semibold">Iṣlāḥ ṣiḥḥī:</span> Health reform</p>
                <p><span className="font-semibold">Jūdat riʿāya:</span> Quality of care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Technology */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Medical Technology and Innovation
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-4">Advanced Medical Technologies</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Diagnostic Technologies</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Taṣwīr ṭibbī</p>
                  <p className="text-xs text-gray-600">Medical imaging</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Raṇīn maghnaṭīsī</p>
                  <p className="text-xs text-gray-600">MRI</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṣwīr ṭabaqī</p>
                  <p className="text-xs text-gray-600">CT scan</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Fawq ṣawtī</p>
                  <p className="text-xs text-gray-600">Ultrasound</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Treatment Technologies</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Jirāḥa rūbūtiyya</p>
                  <p className="text-xs text-gray-600">Robotic surgery</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ʿIlāj ishʿāʿī</p>
                  <p className="text-xs text-gray-600">Radiation therapy</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ʿIlāj jīnī</p>
                  <p className="text-xs text-gray-600">Gene therapy</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Zirāʿa aʿḍāʾ</p>
                  <p className="text-xs text-gray-600">Organ transplant</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Digital Health</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ṭibb raqamī</p>
                  <p className="text-xs text-gray-600">Digital medicine</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ṭibb ʿan buʿd</p>
                  <p className="text-xs text-gray-600">Telemedicine</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Dhakāʾ iṣṭināʿī</p>
                  <p className="text-xs text-gray-600">Artificial intelligence</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Sijillāt iliktrūniyya</p>
                  <p className="text-xs text-gray-600">Electronic records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Public Health */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
          Public Health and Epidemiology
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-pink-800 mb-3">Disease Prevention</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-pink-700">Wiqāya awwaliyya</p>
                <p className="text-gray-600 text-sm">Primary prevention</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Wiqāya thānawiyya</p>
                <p className="text-gray-600 text-sm">Secondary prevention</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Taṭʿīm</p>
                <p className="text-gray-600 text-sm">Vaccination</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Faḥṣ dūrī</p>
                <p className="text-gray-600 text-sm">Screening</p>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-pink-800 mb-3">Epidemiology</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-pink-700">ʿIlm al-awbiʾa</p>
                <p className="text-gray-600 text-sm">Epidemiology</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Intishār maraḍ</p>
                <p className="text-gray-600 text-sm">Disease spread</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Jāʾiḥa</p>
                <p className="text-gray-600 text-sm">Pandemic</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Murāqaba ṣiḥḥiyya</p>
                <p className="text-gray-600 text-sm">Health surveillance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Medical Research Conference
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Amina:</p>
              <p className="text-gray-700">Natāʾij at-tajriba as-sarīriyya tuẓhir taḥassunan kabīran fī ʿilāj as-saraṭān.</p>
              <p className="text-sm text-gray-500 mt-1">The clinical trial results show significant improvement in cancer treatment.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Khalid:</p>
              <p className="text-gray-700">Hādhā mumtāz! Hal kānat al-ʿayyina kabīra wa mutanawwiʿa bi-mā yakfī?</p>
              <p className="text-sm text-gray-500 mt-1">That's excellent! Was the sample large and diverse enough?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Amina:</p>
              <p className="text-gray-700">Naʿam, shamalat 500 marīḍ min mukhtalf al-aʿmār wa al-khalfiyyāt.</p>
              <p className="text-sm text-gray-500 mt-1">Yes, it included 500 patients from different ages and backgrounds.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Khalid:</p>
              <p className="text-gray-700">Wa mā hiya al-khuṭuwāt at-tāliya li-l-ḥuṣūl ʿalā al-muwāfaqa at-tanẓīmiyya?</p>
              <p className="text-sm text-gray-500 mt-1">And what are the next steps to obtain regulatory approval?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Medical Excellence!
        </h2>
        <p className="text-lg">You've mastered healthcare and medical research vocabulary in Darija! Morocco has made significant advances in healthcare with modern medical facilities and research institutions. This knowledge connects you to the global medical community and Morocco's healthcare developments.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🏥 Fun fact: Morocco has established world-class medical facilities and is becoming a destination for medical tourism in Africa!</p>
        </div>
      </div>
    </LessonLayout>
  );
}