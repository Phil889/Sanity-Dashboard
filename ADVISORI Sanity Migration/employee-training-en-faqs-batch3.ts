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

// FAQ Batch 3 (FAQs 9-12) for Employee Training EN
// Source: mitarbeiterschulungen
// Target: employee-training-en

const faqsBatch3 = [
  {
    _key: `faq_${Date.now()}_9`,
    _type: 'object',
    question: 'What technologies and tools support modern employee training?',
    answer: `🎬 E-Learning & LMS Platforms:
• Modern Learning Management Systems (LMS) with comprehensive tracking and reporting functions.
• Responsive learning platforms for flexible learning on various devices.
• Integrated authoring tools for interactive course design and quick content updates.
• Automated assignment and reminder functions for systematic training.
• AI-powered learning paths with adaptive adjustment to individual progress.

🎮 Simulation & Gamification:
• Phishing simulation tools with configurable scenarios and learning feedback.
• Gamified learning platforms with point systems, badges, and leaderboards.
• Interactive scenarios with decision simulations and feedback.
• Virtual and augmented reality for immersive security exercises.
• Micro-challenges and quiz apps for continuous learning in daily work.

📱 Mobile & Microlearning:
• Dedicated security apps with push notifications for current threats.
• Mobile learning formats for just-in-time learning and knowledge retrieval.
• Microlearning units for short, focused learning moments in daily work.
• Mobile-first content with optimized display on smartphones and tablets.
• Integration into enterprise apps and communication platforms.

📊 Analytics & Reporting:
• Learning analytics for detailed evaluation of learning progress and gaps.
• AI-powered prediction models for risk groups and training needs.
• Dashboards for visualization of security metrics and training successes.
• Integration with security tools for correlation of training and actual behavior.
• Automated reporting functions for compliance evidence and audits.

💡 Expert Tip:
Technology should never be an end in itself, but support didactic goals and learning needs. Focus on an integrated tool landscape with open interfaces to avoid isolated solutions and enable continuous, context-related learning.`
  },
  {
    _key: `faq_${Date.now()}_10`,
    _type: 'object',
    question: 'How do organizations integrate information security training into their personnel development strategy?',
    answer: `📋 Strategic Anchoring:
• Integration of security competencies into competency models and job descriptions.
• Anchoring of security goals in target agreements and performance management.
• Integration of security topics into career paths and development plans.
• Establishment of security career paths and specialization opportunities.
• Alignment of security training strategy with corporate strategy.

🔄 Process Integration:
• Systematic integration of security training into the onboarding process.
• Linking with existing training and development processes.
• Establishment of a continuous learning cycle with regular refreshers.
• Integration into change management and transformation processes.
• Systematic career and succession planning with security competencies.

💼 Personnel Development Instruments:
• Integration of security competencies into employee reviews and feedback processes.
• Linking with talent management and high-potential programs.
• Use of mentoring and coaching for security competencies.
• Development of job rotation and cross-training for holistic security understanding.
• Integration into knowledge management systems and communities of practice.

🏆 Incentive and Recognition Systems:
• Development of incentive systems for security-conscious behavior.
• Integration of security competencies into promotion and development decisions.
• Recognition and awards for exemplary security behavior.
• Creation of security champions programs and multiplier networks.
• Linking of security goals with compensation and bonus systems.

💡 Expert Tip:
Successful integration of security training into personnel development strategy requires a rethinking from classic 'compliance training' to developing valuable future competencies. Security competencies should be positioned as career and success factors, not as a tedious obligation.`
  },
  {
    _key: `faq_${Date.now()}_11`,
    _type: 'object',
    question: 'How do employee training programs support compliance with data protection and compliance requirements?',
    answer: `📜 Legal Foundations:
• Fulfillment of training and awareness obligations under GDPR, IT Security Act, and other regulations.
• Building data protection know-how for legally compliant processing of personal data.
• Proof of fulfillment of due diligence obligations in audits and controls.
• Teaching legal consequences of violations of data protection and security regulations.
• Creating legal certainty through documented training measures.

📋 Documentation & Evidence:
• Systematic recording and documentation of all training activities for compliance evidence.
• Compliance with retention periods and documentation standards.
• Development of standardized reporting formats for authorities and supervisory bodies.
• Complete evidence through automated LMS functions.
• Integration with GRC tools for holistic compliance management.

🛡️ Risk Minimization:
• Reduction of compliance risks through targeted employee training.
• Reduction of probability of data protection violations and security incidents.
• Mitigation of damage extent through faster detection and correct response.
• Reduction of liability risks for organizations and managers.
• Protection against reputational damage through compliance-compliant behavior.

🔄 Continuous Improvement:
• Integration of current legal developments into training content.
• Evaluation of compliance incidents for targeted follow-up training.
• Regular gap analyses to identify training needs.
• Continuous adaptation to new compliance requirements and best practices.
• Feedback loop between compliance, security, and training teams.

💡 Expert Tip:
Successful compliance training conveys not only rules and obligations, but promotes a deep understanding of the value and benefit of data protection and information security. Instead of abstract paragraphs, practical action instructions and concrete examples should be in the foreground.`
  },
  {
    _key: `faq_${Date.now()}_12`,
    _type: 'object',
    question: 'How are employee training programs adapted for remote and hybrid work environments?',
    answer: `🏠 Remote-Specific Content:
• Focus on special risks in home office and public places.
• Training on secure use of WiFi, VPN, and remote access technologies.
• Awareness of physical security and clean desk policy in home office.
• Teaching data protection aspects when working with private and business devices.
• Training on secure communication and collaboration tools in distributed teams.

💻 Digital Learning Formats:
• Development of fully digital training formats for location-independent learning.
• Use of video conferencing tools for live training and workshops.
• Use of asynchronous learning formats for flexible time management.
• Mobile-optimized content for learning on various devices.
• Microlearning formats for integration into remote work routine.

👥 Social Learning Components:
• Promotion of peer learning and virtual communities of practice.
• Creation of virtual collaboration spaces for joint learning.
• Integration of social learning elements such as discussion forums and knowledge exchange.
• Virtual team exercises and group work on security topics.
• Mentoring and buddy programs for mutual support.

📈 Adapted Success Measurement:
• Development of suitable KPIs for remote training and learning formats.
• Use of digital assessment tools for continuous learning progress monitoring.
• Integration of self- and peer assessments into the learning process.
• Automated behavioral analyses in the digital work environment.
• Correlation with security incidents in remote context for targeted follow-up training.

💡 Expert Tip:
Remote and hybrid work models require a fundamentally new approach to security training that considers the changed risks, learning contexts, and work realities. Particularly important is the balance between technical security and practical applicability to not impair productivity.`
  }
]

async function addFaqsBatch3() {
  console.log('Adding FAQ Batch 3 to Employee Training EN...')
  
  try {
    const result = await client
      .patch('employee-training-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log('Successfully added FAQ Batch 3:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQ Batch 3:', error)
    throw error
  }
}

addFaqsBatch3()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
