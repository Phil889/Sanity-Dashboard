import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
})

// FAQ Batch 1 (FAQs 1-4) for Employee Training EN
// Source: mitarbeiterschulungen
// Target: employee-training-en

const faqsBatch1 = [
  {
    _key: `faq_${Date.now()}_1`,
    _type: 'object',
    question: 'What makes effective employee training in information security?',
    answer: `🎯 Target Group-Specific Orientation:
• Individualization of training content for different departments and hierarchy levels.
• Consideration of existing knowledge and specific threat scenarios of the target group.
• Adaptation to industry-specific requirements and compliance regulations.
• Aligned learning objectives and competency requirements for each target group.
• Integration into existing training plans and development paths of employees.

🧠 Didactic Quality:
• Use of modern learning methods and concepts such as microlearning, gamification, and scenario-based learning.
• Practical examples and realistic exercise scenarios from everyday work.
• Multimedia preparation with videos, infographics, and interactive elements.
• Varied formats to support different learning types.
• Balance between theoretical foundations and practical applications.

📊 Measurability & Tracking:
• Defined KPIs for capturing training success and behavioral change.
• Regular tests and assessments to verify learning success.
• Systematic collection of feedback for continuous improvement.
• Use of learning management systems to track participation and progress.
• Correlation of training success with reduction of security incidents.

🔄 Continuous Learning Cycle:
• Regular refresher courses and updates on new threats.
• Integration into the onboarding process for new employees.
• Systematic expansion of training content according to new requirements.
• Combined training formats for sustainable knowledge building.
• Promotion of a continuous learning culture in the organization.

💡 Expert Tip:
Successful employee training goes beyond pure knowledge transfer – it promotes a positive security culture where every employee actively contributes to information security. Focus on practical, interactive formats and integrate training into your employees' daily work routine.`
  },
  {
    _key: `faq_${Date.now()}_2`,
    _type: 'object',
    question: 'Which training formats are particularly effective and how are they successfully implemented?',
    answer: `🎓 In-Person Training & Workshops:
• Interactive training with group work, discussions, and practical exercises.
• Live demonstrations of security threats and defense measures.
• Simulation of attack scenarios and joint development of solution strategies.
• Integration of role-playing and realistic scenarios from everyday work.
• Direct answering of questions and addressing specific challenges.

💻 E-Learning & Online Formats:
• Modular online courses with flexible completion according to individual schedule.
• Interactive learning units with quizzes, videos, and animated explanations.
• Microlearning formats for regular, short knowledge updates.
• Webinars and virtual classrooms for cross-location training.
• Automated progress tracking and certification processes.

🎮 Gamification & Simulation Approaches:
• Security challenges and competitions to increase motivation.
• Role-play-based scenarios for learning correct responses.
• Escape room concepts and puzzle games on security topics.
• Reward systems and leaderboards to promote engagement.
• Simulation of phishing attacks with direct feedback and learning effect.

📱 Blended Learning & Hybrid Approaches:
• Combination of in-person events and digital self-learning phases.
• Integration of mobile learning and apps for continuous learning.
• Microlearning as refresher after more intensive in-person training.
• Flipped classroom concepts with self-study and subsequent deepening.
• Adaptive learning paths with individual adaptation to knowledge level.

💡 Expert Tip:
The most effective training programs combine different formats and adapt them to the specific needs, roles, and prior knowledge of employees. Interactive, practical elements and regular repetition of important content are crucial for long-term learning success and sustainable behavioral changes.`
  },
  {
    _key: `faq_${Date.now()}_3`,
    _type: 'object',
    question: 'How is the success of employee training measured and sustainably secured?',
    answer: `📊 Metrics & Analytics:
• Use of participation and completion rates as basic KPIs.
• Measurement of knowledge increase through pre- and post-tests.
• Analysis of behavioral data in simulated phishing attacks and security exercises.
• Correlation with frequency and severity of security incidents.
• Use of learning analytics to identify optimization potential.

🔍 Audits & Assessments:
• Regular knowledge checks through quizzes and assessments.
• Mystery shopping approaches to test security practices in daily work.
• Simulation of security incidents to test response capability.
• Observation and evaluation of actual behavior in the workplace.
• Conducting security audits with focus on employee behavior.

📈 Long-term Success Assurance:
• Regular refresher courses and continuous learning programs.
• Integration of training content into performance reviews and development plans.
• Establishment of security champions and multipliers in departments.
• Continuous adaptation of training content to new threats and feedback.
• Creation of a positive error culture that learns from incidents and near-misses.

👥 Culture Development & Integration:
• Promotion of a positive security culture through role model function of managers.
• Integration of security topics into regular team meetings and communication.
• Recognition and reward of security-conscious behavior.
• Establishment of a continuous improvement process for security topics.
• Development of security competencies as part of personnel development strategy.

💡 Expert Tip:
The true success of employee training is shown in the daily behavior of employees, not just in training certificates. Combine quantitative metrics with qualitative observations and create a corporate culture where security awareness is valued and rewarded.`
  },
  {
    _key: `faq_${Date.now()}_4`,
    _type: 'object',
    question: 'How are employee training programs designed for specific threat scenarios and compliance requirements?',
    answer: `🎯 Threat-Specific Training:
• Customized modules on relevant topics such as phishing, social engineering, ransomware, or data theft.
• Focus on current and industry-relevant threat scenarios and attack methods.
• Practical examples and case studies from the respective industry or organization.
• Teaching concrete action strategies for recognizing and defending against specific threats.
• Regular content updates based on the current threat landscape.

📜 Compliance-Oriented Training:
• Integration of relevant legal requirements (GDPR, IT Security Act, industry-specific regulations).
• Teaching compliance basics in an understandable, practical form.
• Training on company-specific policies, processes, and responsibilities.
• Clearly defined reporting channels and escalation processes for security incidents.
• Documentation of training participation for audit and verification purposes.

🧪 Scenarios & Simulations:
• Development of realistic exercise scenarios based on typical threats and incidents.
• Conducting phishing simulations and social engineering tests with learning feedback.
• Tabletop exercises for incident response for managers and key personnel.
• Role-playing and interactive scenarios for practicing correct behaviors.
• Practical workshops for applying security policies in daily work.

🔄 Continuous Adaptation:
• Regular monitoring of new threats and compliance requirements.
• Quick integration of current incidents and learnings into training content.
• Feedback loops for continuous improvement of training content.
• Adaptation of depth and complexity to the respective target group.
• Development of modular content for flexible adaptation to new requirements.

💡 Expert Tip:
Effective training always links compliance requirements with practical relevance for employees. Instead of abstract rules, concrete action instructions and the protective value of measures should be in the foreground. A balance between 'must' (compliance) and 'want' (protection of the organization and one's own work) is crucial for sustainable behavioral changes.`
  }
]

async function addFaqsBatch1() {
  console.log('Adding FAQ Batch 1 to Employee Training EN...')
  
  try {
    const result = await client
      .patch('employee-training-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log('Successfully added FAQ Batch 1:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQ Batch 1:', error)
    throw error
  }
}

addFaqsBatch1()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
