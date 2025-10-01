import React from 'react';

const FinalAssessment: React.FC = () => {
  return (
    <div className="final-assessment">
      <h2>📝 Final Assessment</h2>
      
      <div className="assessment-intro">
        <p>
          This comprehensive final assessment evaluates your Darija proficiency across 
          all four language skills: speaking, listening, reading, and writing. Complete 
          all sections to demonstrate your mastery of Moroccan Arabic.
        </p>
        
        <div className="assessment-info">
          <div className="info-item">
            <strong>Total Time:</strong> 2 hours 15 minutes
          </div>
          <div className="info-item">
            <strong>Passing Score:</strong> 70% overall
          </div>
          <div className="info-item">
            <strong>Format:</strong> Mixed (multiple choice, short answer, essay, oral)
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>🗣️ Speaking Assessment (25 points)</h3>
        <div className="speaking-test">
          <div className="test-instructions">
            <p><strong>Instructions:</strong> You will have a 15-minute conversation with an examiner covering the following topics:</p>
          </div>
          
          <div className="speaking-tasks">
            <div className="task-card">
              <h4>Task 1: Personal Introduction (5 minutes)</h4>
              <div className="task-content">
                <p><strong>Topics to cover:</strong></p>
                <ul>
                  <li>Your name, age, and where you're from</li>
                  <li>Your family and occupation</li>
                  <li>Your hobbies and interests</li>
                  <li>Why you learned Darija</li>
                </ul>
                
                <div className="sample-questions">
                  <p><strong>Sample Questions:</strong></p>
                  <ul>
                    <li>قول ليا على راسك</li>
                    <li>منين نتا؟</li>
                    <li>أش كاتدير فالحياة؟</li>
                    <li>عندك خوت؟</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 2: Describing Experiences (5 minutes)</h4>
              <div className="task-content">
                <p><strong>Choose one topic to discuss:</strong></p>
                <ul>
                  <li>Describe a memorable trip you took</li>
                  <li>Talk about a traditional celebration in your culture</li>
                  <li>Explain a typical day in your life</li>
                  <li>Describe your favorite Moroccan dish</li>
                </ul>
                
                <div className="evaluation-criteria">
                  <p><strong>Evaluation Criteria:</strong></p>
                  <ul>
                    <li>Fluency and pronunciation</li>
                    <li>Vocabulary range and accuracy</li>
                    <li>Grammar and sentence structure</li>
                    <li>Cultural appropriateness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 3: Role-Play Scenario (5 minutes)</h4>
              <div className="task-content">
                <p><strong>Scenario:</strong> You are at a Moroccan souk buying gifts for your family</p>
                <p><strong>Your role:</strong> Tourist/Customer</p>
                <p><strong>Examiner's role:</strong> Shop owner</p>
                
                <div className="scenario-objectives">
                  <p><strong>You should:</strong></p>
                  <ul>
                    <li>Greet the shop owner appropriately</li>
                    <li>Ask about different products</li>
                    <li>Negotiate prices</li>
                    <li>Make a purchase decision</li>
                    <li>Thank the owner and say goodbye</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>👂 Listening Comprehension (25 points)</h3>
        <div className="listening-test">
          <div className="test-instructions">
            <p><strong>Instructions:</strong> Listen to each audio clip and answer the questions. You will hear each clip twice.</p>
          </div>
          
          <div className="listening-tasks">
            <div className="task-card">
              <h4>Task 1: Short Conversations (10 points)</h4>
              <div className="task-content">
                <p><strong>Listen to 5 short conversations and choose the correct answer:</strong></p>
                
                <div className="sample-question">
                  <p><strong>Example:</strong></p>
                  <div className="audio-text">
                    <p><em>Audio:</em> "فين غادي؟" - "غادي للجامعة باش نقرا"</p>
                  </div>
                  <p><strong>Question:</strong> Where is the person going?</p>
                  <div className="options">
                    <label><input type="radio" name="q1" value="a"/> a) To work</label>
                    <label><input type="radio" name="q1" value="b"/> b) To university</label>
                    <label><input type="radio" name="q1" value="c"/> c) To the market</label>
                    <label><input type="radio" name="q1" value="d"/> d) To home</label>
                  </div>
                  <p><em>Correct answer: b) To university</em></p>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 2: Announcement Comprehension (8 points)</h4>
              <div className="task-content">
                <p><strong>Listen to this train station announcement:</strong></p>
                
                <div className="audio-text">
                  <p><em>انتباه المسافرين، القطار رقم 205 المتوجه إلى الدار البيضاء سيصل إلى الرصيف رقم 3 في الساعة الثالثة والنصف. يرجى من المسافرين التوجه إلى الرصيف والاستعداد للصعود.</em></p>
                </div>
                
                <div className="questions">
                  <p><strong>Answer these questions:</strong></p>
                  <ol>
                    <li>What is the train number? ___________</li>
                    <li>Where is the train going? ___________</li>
                    <li>Which platform? ___________</li>
                    <li>What time will it arrive? ___________</li>
                  </ol>
                  
                  <div className="answers">
                    <p><em>Answers: 1) 205, 2) Casablanca, 3) Platform 3, 4) 3:30</em></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 3: Extended Dialogue (7 points)</h4>
              <div className="task-content">
                <p><strong>Listen to this conversation between friends planning a trip:</strong></p>
                
                <div className="comprehension-questions">
                  <ol>
                    <li>Where do they want to go for vacation?</li>
                    <li>How long will they stay?</li>
                    <li>What activities do they plan to do?</li>
                    <li>Who will book the hotel?</li>
                    <li>When will they leave?</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>📖 Reading Comprehension (25 points)</h3>
        <div className="reading-test">
          <div className="test-instructions">
            <p><strong>Instructions:</strong> Read each text carefully and answer the questions that follow.</p>
          </div>
          
          <div className="reading-tasks">
            <div className="task-card">
              <h4>Task 1: Personal Message (8 points)</h4>
              <div className="task-content">
                <div className="reading-text">
                  <p><strong>Read this WhatsApp message:</strong></p>
                  <div className="message-text">
                    <p>السلام عليكم يا أختي! كيف راك؟ أنا دابا فمراكش مع العائلة. الجو زوين بزاف والمدينة حلوة. زرنا جامع الفنا البارح وشفنا عروض حلوة. غدا غانمشيو لحدائق الماجوريل. بغيت نشري هدايا للأصدقاء. أش كاتنصحيني نشري؟ رد عليا بزربة. بوسة كبيرة!</p>
                  </div>
                </div>
                
                <div className="questions">
                  <ol>
                    <li>Where is the person writing from?</li>
                    <li>Who is traveling with them?</li>
                    <li>What did they visit yesterday?</li>
                    <li>Where are they going tomorrow?</li>
                    <li>What does the person want to buy?</li>
                    <li>What are they asking for advice about?</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 2: News Article (10 points)</h4>
              <div className="task-content">
                <div className="reading-text">
                  <p><strong>Read this news article:</strong></p>
                  <div className="article-text">
                    <h5>مهرجان فاس للموسيقى الروحية يستقبل فنانين من العالم</h5>
                    <p>تستعد مدينة فاس لاستقبال الدورة الخامسة والعشرين من مهرجان الموسيقى الروحية الذي سيقام من 15 إلى 23 أبريل. هذا المهرجان الذي يعتبر من أهم الأحداث الثقافية في المغرب، سيستقبل أكثر من 50 فنان من 20 دولة مختلفة. البرنامج يتضمن حفلات في أماكن تاريخية مثل باب المكينة وحدائق جنان السبيل. تذاكر الدخول متوفرة بأسعار تبدأ من 100 درهم للطلاب و200 درهم للعموم.</p>
                  </div>
                </div>
                
                <div className="questions">
                  <ol>
                    <li>Which edition of the festival is this?</li>
                    <li>When will the festival take place?</li>
                    <li>How many artists will participate?</li>
                    <li>From how many countries?</li>
                    <li>Name two venues mentioned.</li>
                    <li>What is the ticket price for students?</li>
                    <li>What is the ticket price for general public?</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 3: Advertisement (7 points)</h4>
              <div className="task-content">
                <div className="reading-text">
                  <p><strong>Read this restaurant advertisement:</strong></p>
                  <div className="ad-text">
                    <h5>مطعم الأندلس - أصالة المذاق المغربي</h5>
                    <p>اكتشف أشهى الأطباق المغربية التقليدية في قلب الرباط. نقدم لكم الطاجين، الكسكس، والمشاوي في جو أصيل ومريح. مفتوح يوميا من الساعة 12 ظهرا حتى منتصف الليل. أسعار معقولة تبدأ من 80 درهم للوجبة. خدمة التوصيل متوفرة. للحجز اتصل على: 0537-123456</p>
                  </div>
                </div>
                
                <div className="questions">
                  <ol>
                    <li>What type of cuisine does the restaurant serve?</li>
                    <li>Where is the restaurant located?</li>
                    <li>What are the opening hours?</li>
                    <li>What is the starting price for a meal?</li>
                    <li>Do they offer delivery service?</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>✍️ Writing Assessment (25 points)</h3>
        <div className="writing-test">
          <div className="test-instructions">
            <p><strong>Instructions:</strong> Complete both writing tasks. Pay attention to grammar, vocabulary, and cultural appropriateness.</p>
          </div>
          
          <div className="writing-tasks">
            <div className="task-card">
              <h4>Task 1: Personal Email (10 points)</h4>
              <div className="task-content">
                <p><strong>Write an email (100-120 words) to a Moroccan friend about your recent vacation.</strong></p>
                
                <div className="writing-prompt">
                  <p><strong>Include:</strong></p>
                  <ul>
                    <li>Appropriate greeting</li>
                    <li>Where you went and when</li>
                    <li>What you did and saw</li>
                    <li>Your favorite part of the trip</li>
                    <li>An invitation for them to visit you</li>
                    <li>Appropriate closing</li>
                  </ul>
                </div>
                
                <div className="writing-area">
                  <p><strong>Write your email here:</strong></p>
                  <div className="text-box">
                    [Writing space - 100-120 words]
                  </div>
                </div>
              </div>
            </div>

            <div className="task-card">
              <h4>Task 2: Opinion Essay (15 points)</h4>
              <div className="task-content">
                <p><strong>Write an essay (150-180 words) expressing your opinion on the following topic:</strong></p>
                
                <div className="essay-prompt">
                  <p><em>"Learning foreign languages is essential in today's globalized world."</em></p>
                  <p><strong>Do you agree or disagree? Support your opinion with examples and reasons.</strong></p>
                </div>
                
                <div className="essay-structure">
                  <p><strong>Your essay should include:</strong></p>
                  <ul>
                    <li>Clear introduction with your opinion</li>
                    <li>2-3 supporting arguments with examples</li>
                    <li>Reference to language learning in Morocco</li>
                    <li>Conclusion that restates your position</li>
                  </ul>
                </div>
                
                <div className="writing-area">
                  <p><strong>Write your essay here:</strong></p>
                  <div className="text-box">
                    [Writing space - 150-180 words]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>📊 Scoring Rubric</h3>
        
        <div className="rubric-grid">
          <div className="rubric-card">
            <h4>Speaking (25 points)</h4>
            <div className="rubric-content">
              <ul>
                <li><strong>Excellent (23-25):</strong> Fluent, accurate, culturally appropriate</li>
                <li><strong>Good (18-22):</strong> Generally fluent with minor errors</li>
                <li><strong>Satisfactory (13-17):</strong> Communicates effectively despite some errors</li>
                <li><strong>Needs Improvement (0-12):</strong> Limited communication ability</li>
              </ul>
            </div>
          </div>

          <div className="rubric-card">
            <h4>Listening (25 points)</h4>
            <div className="rubric-content">
              <ul>
                <li><strong>Excellent (23-25):</strong> Understands all main ideas and details</li>
                <li><strong>Good (18-22):</strong> Understands most content with minor gaps</li>
                <li><strong>Satisfactory (13-17):</strong> Understands general meaning</li>
                <li><strong>Needs Improvement (0-12):</strong> Limited comprehension</li>
              </ul>
            </div>
          </div>

          <div className="rubric-card">
            <h4>Reading (25 points)</h4>
            <div className="rubric-content">
              <ul>
                <li><strong>Excellent (23-25):</strong> Comprehends all texts accurately</li>
                <li><strong>Good (18-22):</strong> Good comprehension with minor errors</li>
                <li><strong>Satisfactory (13-17):</strong> Basic comprehension of main ideas</li>
                <li><strong>Needs Improvement (0-12):</strong> Limited reading comprehension</li>
              </ul>
            </div>
          </div>

          <div className="rubric-card">
            <h4>Writing (25 points)</h4>
            <div className="rubric-content">
              <ul>
                <li><strong>Excellent (23-25):</strong> Clear, accurate, well-organized</li>
                <li><strong>Good (18-22):</strong> Generally clear with minor errors</li>
                <li><strong>Satisfactory (13-17):</strong> Communicates ideas despite errors</li>
                <li><strong>Needs Improvement (0-12):</strong> Limited writing ability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>🎯 Performance Levels</h3>
        
        <div className="performance-levels">
          <div className="level-card excellent">
            <h4>🏆 Excellent (90-100 points)</h4>
            <p>Demonstrates mastery of Darija with excellent communication skills across all areas. Ready for advanced study and professional use.</p>
          </div>
          
          <div className="level-card good">
            <h4>✅ Good (80-89 points)</h4>
            <p>Shows strong proficiency in Darija with good communication abilities. Minor areas for improvement identified.</p>
          </div>
          
          <div className="level-card satisfactory">
            <h4>📈 Satisfactory (70-79 points)</h4>
            <p>Meets basic proficiency requirements. Can communicate effectively in most situations with continued practice recommended.</p>
          </div>
          
          <div className="level-card needs-improvement">
            <h4>📚 Needs Improvement (Below 70)</h4>
            <p>Additional study and practice required. Review specific areas of weakness and retake assessment when ready.</p>
          </div>
        </div>
      </div>

      <div className="assessment-tips">
        <h3>💡 Assessment Tips</h3>
        <div className="tips-grid">
          <div className="tip-item">
            <span className="tip-icon">📝</span>
            <p><strong>Read Instructions Carefully:</strong> Make sure you understand each task</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">⏰</span>
            <p><strong>Manage Your Time:</strong> Don't spend too long on any one section</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">🎯</span>
            <p><strong>Answer All Questions:</strong> Even if unsure, make your best attempt</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">✅</span>
            <p><strong>Review Your Work:</strong> Check for errors before submitting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalAssessment;