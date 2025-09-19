"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateTen() {
  return (
    <LessonLayout 
      title="Advanced Conversation Skills" 
      level="intermediate" 
      lessonNumber={10}
      previousLesson="intermediate-nine"
      nextLesson="advanced-one"
    >
      {/* Lesson Overview */}
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master advanced conversation techniques in Darija. Learn to express complex ideas, engage in debates, tell stories, and handle sophisticated social interactions with confidence and fluency.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
          <p className="font-medium text-indigo-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master advanced conversational techniques</li>
            <li>Learn to express complex opinions and emotions</li>
            <li>Understand storytelling and narrative skills</li>
            <li>Practice debate and persuasion techniques</li>
          </ul>
        </div>
      </div>
      
      {/* Advanced Expression Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Advanced Expression Techniques
        </h2>
        
        <p className="text-gray-700 mb-6">Learn sophisticated ways to express your thoughts and feelings in Darija.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Expressing Certainty</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Akīd:</span> Certainly</p>
              <p className="text-sm"><span className="font-semibold">Bla shak:</span> Without doubt</p>
              <p className="text-sm"><span className="font-semibold">Mā fīh shak:</span> There's no doubt</p>
              <p className="text-sm"><span className="font-semibold">Mutaʾakkid:</span> I'm sure</p>
            </div>
          </div>

          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Expressing Uncertainty</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Yumkin:</span> Maybe/Possibly</p>
              <p className="text-sm"><span className="font-semibold">Mā n3rafsh:</span> I don't know</p>
              <p className="text-sm"><span className="font-semibold">Mushakkik:</span> I doubt it</p>
              <p className="text-sm"><span className="font-semibold">Ghīr Allah ya3lam:</span> Only God knows</p>
            </div>
          </div>

          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Expressing Emotions</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Farḥān bezzāf:</span> Very happy</p>
              <p className="text-sm"><span className="font-semibold">Ḥazīn:</span> Sad</p>
              <p className="text-sm"><span className="font-semibold">Mugh3ab:</span> Angry</p>
              <p className="text-sm"><span className="font-semibold">Khāyif:</span> Afraid</p>
            </div>
          </div>

          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Making Suggestions</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Āsh rāyak f...?:</span> What do you think about...?</p>
              <p className="text-sm"><span className="font-semibold">Yallāh ndīru...:</span> Let's do...</p>
              <p className="text-sm"><span className="font-semibold">Aḥsan ḥāja:</span> The best thing</p>
              <p className="text-sm"><span className="font-semibold">Lāzim ndīru:</span> We must do</p>
            </div>
          </div>
        </div>
      </div>

      {/* Storytelling Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Storytelling Techniques
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-green-800 mb-4">Narrative Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md border border-green-100">
              <h4 className="font-semibold text-green-700 mb-2">Opening</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Kān yā mā kān:</span> Once upon a time</p>
                <p><span className="font-semibold">F wāḥid l waqt:</span> At one time</p>
                <p><span className="font-semibold">Qadīman:</span> Long ago</p>
                <p><span className="font-semibold">Ḥkāya ṭawīla:</span> A long story</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <h4 className="font-semibold text-green-700 mb-2">Development</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">U ba3d hākka:</span> And after that</p>
                <p><span className="font-semibold">Faj'a:</span> Suddenly</p>
                <p><span className="font-semibold">F nafs l waqt:</span> At the same time</p>
                <p><span className="font-semibold">Lākin:</span> But</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <h4 className="font-semibold text-green-700 mb-2">Conclusion</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">F l ākhir:</span> In the end</p>
                <p><span className="font-semibold">U hākka:</span> And so</p>
                <p><span className="font-semibold">Khalāṣ l ḥkāya:</span> End of story</p>
                <p><span className="font-semibold">U 3āshu bi khayr:</span> And they lived happily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Debate and Persuasion */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Debate and Persuasion
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-red-800 mb-4">Argumentative Language</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-red-100">
              <h4 className="font-semibold text-red-700 mb-2">Agreeing</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">3andak l ḥaqq:</span> You're right</p>
                <p><span className="font-semibold">Muttafiq m3āk:</span> I agree with you</p>
                <p><span className="font-semibold">Ṣaḥīḥ:</span> That's correct</p>
                <p><span className="font-semibold">Bi ḍ ḍabṭ:</span> Exactly</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border border-red-100">
              <h4 className="font-semibold text-red-700 mb-2">Disagreeing</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Mā muttafiqsh:</span> I don't agree</p>
                <p><span className="font-semibold">Ghalaṭ:</span> Wrong</p>
                <p><span className="font-semibold">Mush ṣaḥīḥ:</span> Not correct</p>
                <p><span className="font-semibold">Lā, hāda mush ṣaḥ:</span> No, this isn't right</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border border-red-100">
              <h4 className="font-semibold text-red-700 mb-2">Presenting Evidence</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">L dalīl huwa:</span> The evidence is</p>
                <p><span className="font-semibold">Matalan:</span> For example</p>
                <p><span className="font-semibold">Hāda yubayyin:</span> This shows</p>
                <p><span className="font-semibold">Wāḍiḥ anna:</span> It's clear that</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border border-red-100">
              <h4 className="font-semibold text-red-700 mb-2">Concluding</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Idhān:</span> Therefore</p>
                <p><span className="font-semibold">Bi t tālī:</span> Consequently</p>
                <p><span className="font-semibold">L khulāṣa:</span> In conclusion</p>
                <p><span className="font-semibold">Hāda ya3nī:</span> This means</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complex Conversation Example */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Complex Conversation Example
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Debate: Traditional vs Modern Education</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">A: Āsh rāyak f t ta3līm l 3aṣrī?</p>
              <p className="text-gray-600 italic">What do you think about modern education?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Akīd anna t ta3līm l 3aṣrī muhimm, lākin mā ykhallīnāsh nansāw t turāth</p>
              <p className="text-gray-600 italic">Certainly modern education is important, but it shouldn't make us forget our heritage</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">A: 3andak l ḥaqq, lākin l 3ālam ghādi l quddum u lāzim nwākbu</p>
              <p className="text-gray-600 italic">You're right, but the world is moving forward and we must keep up</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Muttafiq m3āk, lākin yumkin ndīru tawāzun bayn l qadīm u l jadīd</p>
              <p className="text-gray-600 italic">I agree with you, but we can create balance between old and new</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">A: Hāda fikra zayina. Kīfāsh yumkin ndīru hād t tawāzun?</p>
              <p className="text-gray-600 italic">That's a good idea. How can we create this balance?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Matalan, n3allmu t teknolojiya u f nafs l waqt n3allmu l lugha l 3arabiyya u t tārīkh</p>
              <p className="text-gray-600 italic">For example, we teach technology and at the same time teach Arabic language and history</p>
            </div>
          </div>
        </div>
      </div>

      {/* Idiomatic Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Advanced Idiomatic Expressions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-orange-800 mb-3">Wisdom Sayings</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-orange-700">Ṣabr miftāḥ l faraj</p>
                <p className="text-gray-600 text-sm">Patience is the key to relief</p>
              </div>
              <div>
                <p className="font-semibold text-orange-700">L 3ilm nūr</p>
                <p className="text-gray-600 text-sm">Knowledge is light</p>
              </div>
              <div>
                <p className="font-semibold text-orange-700">Man ṣabar ẓafar</p>
                <p className="text-gray-600 text-sm">Who perseveres, wins</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-orange-800 mb-3">Conversational Idioms</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-orange-700">Dāq l ḥāl</p>
                <p className="text-gray-600 text-sm">The situation became difficult</p>
              </div>
              <div>
                <p className="font-semibold text-orange-700">Ṭāḥ f bālu</p>
                <p className="text-gray-600 text-sm">He lost his mind</p>
              </div>
              <div>
                <p className="font-semibold text-orange-700">Khraja 3la ṭarīqu</p>
                <p className="text-gray-600 text-sm">He went off track</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Social Interactions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Advanced Social Interactions
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-4">Sophisticated Social Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Giving Compliments</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Mashkūr 3la...</span> Thank you for...</p>
                <p><span className="font-semibold">3ajbatnī ṭarīqtak f...</span> I liked your way of...</p>
                <p><span className="font-semibold">Nta/Nti māhir/māhra f...</span> You're skilled at...</p>
                <p><span className="font-semibold">Hāda 3amal rāʾi3</span> This is excellent work</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Handling Criticism</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Shukran 3la n naṣīḥa</span> Thanks for the advice</p>
                <p><span className="font-semibold">Ghādi nākhud hāda bi 3ayn l i3tibār</span> I'll take this into consideration</p>
                <p><span className="font-semibold">3andak ḥaqq f ba3ḍ n nuqaṭ</span> You're right about some points</p>
                <p><span className="font-semibold">Hāda yusā3idnī nataḥassan</span> This helps me improve</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Scenarios */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Advanced Practice Scenarios
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-4">Complex Conversation Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 1: Job Interview</p>
              <p className="text-sm text-gray-700 mb-2">You're interviewing for a management position. Discuss your leadership philosophy and vision for the company.</p>
              <p className="text-xs text-gray-500">Use: persuasion, complex opinions, future plans</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 2: Family Discussion</p>
              <p className="text-sm text-gray-700 mb-2">Discuss a major family decision like moving to another city or changing careers.</p>
              <p className="text-xs text-gray-500">Use: emotions, pros/cons, family dynamics</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 3: Academic Debate</p>
              <p className="text-sm text-gray-700 mb-2">Participate in a university debate about social media's impact on society.</p>
              <p className="text-xs text-gray-500">Use: evidence, counterarguments, formal language</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 4: Storytelling Evening</p>
              <p className="text-sm text-gray-700 mb-2">Tell a captivating story about a life-changing experience to friends.</p>
              <p className="text-xs text-gray-500">Use: narrative techniques, emotions, descriptive language</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Nuances */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Cultural Conversation Nuances
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-teal-800 mb-2">Formal vs Informal</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use "Ḥaḍritak" for very formal address</li>
                <li>• Switch to "nta/nti" with friends</li>
                <li>• Adjust vocabulary based on age/status</li>
                <li>• Use religious expressions appropriately</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-teal-800 mb-2">Regional Variations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Northern Morocco: more Spanish influence</li>
                <li>• Casablanca: more French terms</li>
                <li>• Rural areas: more traditional expressions</li>
                <li>• Adapt to your conversation partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final Challenge */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
          Final Mastery Challenge
        </h2>
        
        <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-pink-800 mb-4">The Ultimate Conversation Test</h3>
          <p className="text-gray-700 mb-4">Choose one topic and prepare a 10-minute presentation that includes:</p>
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-pink-800 mb-2">Required Elements:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Personal story or anecdote</li>
                  <li>• Complex opinion with reasoning</li>
                  <li>• Cultural reference or comparison</li>
                  <li>• Interactive Q&A session</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-pink-800 mb-2">Suggested Topics:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• "The Future of Morocco"</li>
                  <li>• "Technology and Tradition"</li>
                  <li>• "My Life Philosophy"</li>
                  <li>• "Education and Society"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Conversation Master!
        </h2>
        <p className="text-lg">Congratulations! You've reached an advanced level of conversational Darija! You can now engage in sophisticated discussions, express complex ideas, tell compelling stories, and navigate any social situation with confidence. You're ready to connect deeply with Moroccan culture and people. Bravo!</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🎓 You've completed the Intermediate Level! Ready for Advanced Lessons?</p>
        </div>
      </div>
    </LessonLayout>
  );
}