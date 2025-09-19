"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedEight() {
  return (
    <LessonLayout 
      title="Storytelling & Narrative Mastery" 
      level="advanced" 
      lessonNumber={8}
      previousLesson="advanced-seven"
      nextLesson="advanced-nine"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the art of storytelling in Darija, from traditional folktales to modern narratives. Learn to captivate audiences with rich descriptions, emotional depth, and cultural authenticity in your storytelling.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master narrative structures and storytelling techniques</li>
            <li>Learn descriptive language and emotional expression</li>
            <li>Understand traditional Moroccan storytelling elements</li>
            <li>Practice creating engaging and authentic narratives</li>
          </ul>
        </div>
      </div>
      
      {/* Narrative Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Narrative Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for rich storytelling and narrative construction:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Story Elements</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Story</span>
                <span className="font-medium">حكاية - Hikaya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Character</span>
                <span className="font-medium">شخصية - Shakhsiyya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plot</span>
                <span className="font-medium">حبكة - Habka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Beginning</span>
                <span className="font-medium">بداية - Bidaya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ending</span>
                <span className="font-medium">نهاية - Nihaya</span>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Emotions & Descriptions</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Beautiful</span>
                <span className="font-medium">زوين - Zwin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mysterious</span>
                <span className="font-medium">غامض - Ghamid</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exciting</span>
                <span className="font-medium">مثير - Muthir</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sad</span>
                <span className="font-medium">حزين - Hazin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Magical</span>
                <span className="font-medium">سحري - Sihri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Story Openings */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Traditional Story Openings
        </h2>
        
        <p className="text-gray-700 mb-6">Learn classic Moroccan storytelling formulas and opening phrases:</p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Classic Openings</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-lg">كان ياما كان في قديم الزمان</p>
                <p className="text-gray-600 text-sm">Kan yama kan fi qadim az-zaman</p>
                <p className="text-gray-700 italic">Once upon a time, long ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium text-lg">حكايتي حكاية، وما فيها كذبة</p>
                <p className="text-gray-600 text-sm">Hikayti hikaya, wa ma fiha kidhba</p>
                <p className="text-gray-700 italic">My story is a story, and there's no lie in it</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-medium text-lg">في بلاد بعيدة، وراء الجبال السبعة</p>
                <p className="text-gray-600 text-sm">Fi bilad ba3ida, wara2 al-jibal as-sab3a</p>
                <p className="text-gray-700 italic">In distant lands, beyond the seven mountains</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptive Language */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Rich Descriptive Language
        </h2>
        
        <p className="text-gray-700 mb-6">Master vivid descriptions that bring your stories to life:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Physical Descriptions</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">طويل كالنخلة</span> - Tawil ka-n-nakhla (Tall as a palm tree)</p>
              <p><span className="font-medium">عيونه كالنجوم</span> - 3uyunuh ka-n-nujum (His eyes like stars)</p>
              <p><span className="font-medium">شعرها كالحرير</span> - Sha3ruha ka-l-harir (Her hair like silk)</p>
              <p><span className="font-medium">صوته كالرعد</span> - Sawtuh ka-r-ra3d (His voice like thunder)</p>
              <p><span className="font-medium">وجهها كالقمر</span> - Wajhuha ka-l-qamar (Her face like the moon)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Setting Descriptions</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">قصر فخم</span> - Qasr fakham (Magnificent palace)</p>
              <p><span className="font-medium">غابة مظلمة</span> - Ghaba muzlima (Dark forest)</p>
              <p><span className="font-medium">صحراء واسعة</span> - Sahra2 wasi3a (Vast desert)</p>
              <p><span className="font-medium">بحر هائج</span> - Bahr ha2ij (Raging sea)</p>
              <p><span className="font-medium">جبل شاهق</span> - Jabal shahiq (Towering mountain)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Examples */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Complete Story Examples
        </h2>
        
        <p className="text-gray-700 mb-6">Study complete narrative examples with traditional and modern elements:</p>
        
        <div className="space-y-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Traditional Folktale</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="space-y-3">
                <p className="text-gray-700">كان ياما كان في قديم الزمان، كان واحد الراعي صغير سميته يوسف. كان كيرعى الغنم ديالو في الجبال البعيدة. واحد النهار، شاف نور غريب كيطلع من واحد الكهف.</p>
                
                <p className="text-gray-700">دخل يوسف للكهف، ولقى فيه واحد الصندوق القديم مليان بالذهب والجواهر. ولكن كان عندو حارس - واحد الجني كبير وقوي.</p>
                
                <p className="text-gray-700">قال ليه الجني: "واش جيتي تسرق الكنز ديالي؟" جاوب يوسف بشجاعة: "أنا ما جيت نسرق، جيت نبحث على شي حاجة باش نساعد عائلتي الفقيرة."</p>
                
                <p className="text-gray-700">تأثر الجني بصدق يوسف وعطاه واحد الكيس صغير من الذهب. من ديك الساعة، ولا يوسف وعائلتو عايشين في سعادة وراحة.</p>
              </div>
              
              <div className="mt-4 text-sm text-gray-600 italic border-t pt-3">
                <p>Once upon a time, there was a young shepherd named Youssef. He used to graze his sheep in the distant mountains. One day, he saw a strange light coming from a cave.</p>
                <p>Youssef entered the cave and found an old chest full of gold and jewels. But it had a guardian - a large and powerful genie.</p>
                <p>The genie said to him: "Did you come to steal my treasure?" Youssef answered bravely: "I didn't come to steal, I came looking for something to help my poor family."</p>
                <p>The genie was moved by Youssef's honesty and gave him a small bag of gold. From that moment, Youssef and his family lived in happiness and comfort.</p>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Modern Urban Story</h3>
            <div className="bg-green-50 p-4 rounded-md">
              <div className="space-y-3">
                <p className="text-gray-700">في واحد الحي شعبي في الدار البيضاء، كانت عايشة فاطمة مع ولدها الصغير. كانت كتخدم في واحد المقهى الصغير باش تقدر تعيش.</p>
                
                <p className="text-gray-700">واحد النهار، جا واحد الرجل غني للمقهى وشاف كيفاش فاطمة كتعامل الناس بلطف ومحبة. عجبو الطريقة ديالها وقرر يساعدها.</p>
                
                <p className="text-gray-700">عرض عليها خدمة في شركتو الكبيرة. فاطمة ترددت في البداية، ولكن قبلت في الأخير. اليوم، ولات مديرة قسم وولدها كيقرا في أحسن مدرسة.</p>
              </div>
              
              <div className="mt-4 text-sm text-gray-600 italic border-t pt-3">
                <p>In a popular neighborhood in Casablanca, Fatima lived with her young son. She worked in a small café to make a living.</p>
                <p>One day, a wealthy man came to the café and saw how Fatima treated people with kindness and love. He liked her approach and decided to help her.</p>
                <p>He offered her a job in his big company. Fatima hesitated at first, but finally accepted. Today, she became a department manager and her son studies in the best school.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Advanced Narrative Techniques
        </h2>
        
        <p className="text-gray-700 mb-6">Master sophisticated storytelling techniques:</p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Building Suspense</h3>
            <div className="space-y-2">
              <p><span className="font-medium">فجأة...</span> - Fuj2atan... (Suddenly...)</p>
              <p><span className="font-medium">في تلك اللحظة</span> - Fi tilka l-lahza (At that moment)</p>
              <p><span className="font-medium">لم يكن يعلم أن</span> - Lam yakun ya3lam anna (He didn't know that)</p>
              <p><span className="font-medium">كان الخطر يقترب</span> - Kan al-khatar yaqtarib (Danger was approaching)</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Emotional Transitions</h3>
            <div className="space-y-2">
              <p><span className="font-medium">بعد كل هذا العذاب</span> - Ba3da kull hadha l-3adhab (After all this suffering)</p>
              <p><span className="font-medium">أخيرا وجد السعادة</span> - Akhiran wajada s-sa3ada (Finally he found happiness)</p>
              <p><span className="font-medium">تغيرت حياته تماما</span> - Taghayyarat hayatuh tamaman (His life changed completely)</p>
              <p><span className="font-medium">من ذلك اليوم</span> - Min dhalik al-yawm (From that day)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Storytelling */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Interactive Storytelling Elements
        </h2>
        
        <p className="text-gray-700 mb-6">Learn to engage your audience with interactive elements:</p>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-800">Audience Engagement</h3>
              <p className="text-gray-700">Use phrases like "واش كتعرفو شنو وقع بعد؟" (Do you know what happened next?) to involve listeners.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Moral Lessons</h3>
              <p className="text-gray-700">Traditional Moroccan stories often end with "والحكمة من الحكاية" (And the wisdom from the story) followed by a life lesson.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Cultural References</h3>
              <p className="text-gray-700">Incorporate Moroccan proverbs, cultural practices, and familiar settings to make stories more relatable and authentic.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercises */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Exercises
        </h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Exercise 1: Traditional Tale</h3>
            <p className="text-gray-700">Create a traditional folktale using classic opening formulas and incorporating moral lessons with Moroccan cultural elements.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Exercise 2: Modern Story</h3>
            <p className="text-gray-700">Write a contemporary story set in modern Morocco, using current vocabulary while maintaining narrative authenticity.</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Exercise 3: Interactive Performance</h3>
            <p className="text-gray-700">Practice telling a story aloud with audience engagement techniques, voice modulation, and dramatic pauses.</p>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}