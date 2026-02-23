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

// FAQ Batch 4 (FAQs 13-16) for Employee Training EN
// Source: mitarbeiterschulungen
// Target: employee-training-en

const faqsBatch4 = [
  {
    _key: `faq_${Date.now()}_13`,
    _type: 'object',
    question: 'How is the effectiveness of employee training ensured in the long term?',
    answer: `🔄 Continuous Learning:
• Establishment of a cyclical training concept instead of one-time measures.
• Regular refresher courses with adapted content and formats.
• Integration of just-in-time learning and situational learning in daily work.
• Development of a microlearning concept for continuous awareness.
• Interlocking of different learning formats for sustainable knowledge building.

📊 Metrics & Success Measurement:
• Development of meaningful KPIs for short-, medium-, and long-term effectiveness.
• Regular measurement of knowledge, attitude, and actual behavior.
• Conducting pre- and post-assessments as well as follow-up measurements.
• Correlation with security incidents and compliance with security policies.
• Establishment of a continuous improvement process based on measurement results.

🛠️ Practical Transfer & Application:
• Focus on practical applicability and transfer to daily work.
• Integration of practice phases and realistic scenarios in training.
• Accompaniment and coaching in applying new security practices.
• Regular simulations and tests in the real work environment.
• Development of job aids and tools for practical implementation.

👥 Cultural Anchoring:
• Integration of security topics into leadership development and communication.
• Promotion of security champions and multipliers in all departments.
• Recognition and reward of exemplary security behavior.
• Integration of security topics into regular team meetings and communication.
• Development of a positive error culture and continuous learning process.

💡 Expert Tip:
The long-term effectiveness of employee training is achieved less through isolated training measures than through a holistic learning ecosystem. Combine formal training with continuous communication, practical exercises, leadership role models, and a supportive security culture.`
  },
  {
    _key: `faq_${Date.now()}_14`,
    _type: 'object',
    question: 'How do organizations overcome typical challenges in conducting employee training?',
    answer: `⏱️ Time and Resource Constraints:
• Development of efficient training formats such as microlearning and integrated learning.
• Use of synergy effects through integration into existing training processes.
• Prioritization of training content based on risk analysis and relevance.
• Use of automation and scalable training concepts.
• Development of an ROI model to demonstrate cost-benefit ratio.

🙄 Motivation & Engagement:
• Focus on practical relevance and personal benefit for employees.
• Use of gamification, storytelling, and interactive elements.
• Development of a positive learning culture instead of coercion and control.
• Regular feedback and recognition of learning successes.
• Involvement of managers as role models and promoters.

🌐 Heterogeneous Target Groups:
• Development of target group-specific training concepts and learning paths.
• Consideration of different prior knowledge, roles, and learning types.
• Multilingual and culturally adapted training materials.
• Flexible learning formats for different work contexts and availabilities.
• Accessible design for inclusive training concepts.

📊 Success Measurement & Evidence:
• Development of meaningful KPIs beyond participation rates.
• Combination of different measurement approaches for holistic evaluation.
• Integration of behavioral observations and practical assessments.
• Correlation with security incidents and compliance with policies.
• Systematic documentation for compliance evidence and audits.

💡 Expert Tip:
Successful training programs address challenges proactively and integrate solution approaches directly into the training concept. View resistance not as obstacles, but as valuable hints for improvement potential and continuously develop your training further.`
  },
  {
    _key: `faq_${Date.now()}_15`,
    _type: 'object',
    question: 'How are employee training programs integrated into a holistic security strategy?',
    answer: `🧩 Strategic Embedding:
• Integration of training as a core component of security strategy, not as an add-on measure.
• Alignment of training content with risk assessment and security policies.
• Linking with other security measures such as technical controls and processes.
• Development of a coherent overall strategy with clear roles and responsibilities.
• Regular review and adaptation in the context of overall strategy.

🔄 Cycle-Based Approach:
• Integration into the security lifecycle with planning, implementation, review, and improvement.
• Alignment of training intervals with risk assessment and audit cycles.
• Coordination with patch management, vulnerability management, and incident response processes.
• Development of escalation and communication paths for security incidents.
• Continuous improvement based on feedback and incident analyses.

👥 Governance & Responsibilities:
• Clear definition of roles and responsibilities for training programs.
• Involvement of all relevant stakeholders (Security, HR, Compliance, Business Departments).
• Establishment of steering committees and decision processes.
• Regular reporting to management level and supervisory bodies.
• Integration into enterprise-wide risk management.

📊 Holistic Success Measurement:
• Development of a holistic metric for security culture and maturity.
• Combination of training success with technical security metrics.
• Correlation of various security indicators for an overall picture.
• Integration into enterprise-wide compliance and audit reporting.
• Benchmarking with industry standards and best practices.

💡 Expert Tip:
The true strength of employee training unfolds only through strategic integration into a holistic security concept. An isolated view of training measures falls short - only in the interplay with technical, procedural, and organizational measures does an effective security system emerge.`
  },
  {
    _key: `faq_${Date.now()}_16`,
    _type: 'object',
    question: 'How are training contents adapted to different company sizes and industries?',
    answer: `🏢 Size-Specific Adaptation:
• Customized solutions for SMEs with limited resources and flat hierarchies.
• Scalable enterprise concepts for large organizations with complex structures.
• Consideration of different governance structures and decision processes.
• Adaptation of training formats to available infrastructure and resources.
• Development of concepts for internal trainers and multipliers depending on company size.

🏭 Industry-Specific Orientation:
• Integration of industry-specific compliance requirements and regulations.
• Focus on typical threat scenarios and attack vectors of the respective industry.
• Adaptation to industry-specific IT landscapes and processes.
• Development of practical examples and case studies from the relevant industry.
• Consideration of industry-specific security standards and best practices.

📊 Maturity-Based Design:
• Analysis of the organization's maturity level regarding security culture and awareness.
• Gradual development from basic to expert training.
• Consideration of existing security measures and processes.
• Development of development paths for gradual maturity level increase.
• Adaptation of training goals to the respective maturity level.

🛠️ Modularization & Flexibility:
• Development of modular training concepts for flexible adaptation to different contexts.
• Combination of standard modules with customizable components.
• Scalable formats for different group sizes and training intensities.
• Flexible implementation models (internal, external, hybrid) depending on resource availability.
• Development of adaptive learning paths based on prior knowledge and learning progress.

💡 Expert Tip:
Successful training concepts combine standardization with targeted individualization. Use a modular approach with a solid framework of proven content, supplemented by specific adaptations to company size, industry, maturity level, and individual requirements.`
  }
]

async function addFaqsBatch4() {
  console.log('Adding FAQ Batch 4 to Employee Training EN...')
  
  try {
    const result = await client
      .patch('employee-training-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('Successfully added FAQ Batch 4:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQ Batch 4:', error)
    throw error
  }
}

addFaqsBatch4()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
