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

// FAQ Batch 5 (FAQs 17-20) for Employee Training EN
// Source: mitarbeiterschulungen
// Target: employee-training-en

const faqsBatch5 = [
  {
    _key: `faq_${Date.now()}_17`,
    _type: 'object',
    question: 'What innovations and trends are shaping the future of employee training?',
    answer: `🤖 Artificial Intelligence & Automation:
• Use of AI for personalized learning paths and adaptive training content.
• Automated creation and updating of training materials based on current threats.
• Intelligent analysis of learning progress and predictive models for training needs.
• AI-powered simulations and realistic exercise scenarios.
• Automated decision support for training managers and compliance teams.

🥽 Immersive Technologies:
• Virtual Reality (VR) for realistic exercise scenarios and simulations.
• Augmented Reality (AR) for integrating security information into work context.
• Mixed Reality for interactive, location-independent training and collaboration.
• Immersive simulations of security incidents and crisis scenarios.
• Use of 3D visualizations for complex security concepts and technologies.

📱 Mobile & Ubiquitous Learning:
• Seamless learning across different devices and contexts.
• Integration of learning moments into daily work and workflows.
• Context-sensitive security hints and just-in-time learning.
• Micro-learning units for continuous awareness in daily life.
• Use of wearables and IoT devices for situational learning.

🧠 Neuroscientific Insights:
• Application of neuroscientific research to optimize learning processes.
• Use of insights on attention, memory, and decision-making.
• Development of training formats based on cognitive psychology models.
• Consideration of emotional factors for sustainable learning and behavioral change.
• Integration of stress management and resilience training into security training.

💡 Expert Tip:
Future-oriented employee training should strategically use technological innovations to make learning experiences more personal, context-related, and sustainable. Technology should never be an end in itself, but always serve the didactic goals and the learners.`
  },
  {
    _key: `faq_${Date.now()}_18`,
    _type: 'object',
    question: 'How are employee training programs implemented in international and multicultural organizations?',
    answer: `🌍 Cultural Adaptation:
• Adaptation of training content to cultural contexts and local conditions.
• Consideration of cultural differences in risk perception and security behavior.
• Development of culturally sensitive examples, case studies, and scenarios.
• Integration of cultural dimensions such as power distance, uncertainty avoidance, or collectivism.
• Avoidance of cultural stereotypes and promotion of intercultural competence.

🗣️ Linguistic Diversity:
• Provision of training materials in different languages with professional translation.
• Use of clear, simple language for non-native speakers.
• Consideration of culture-specific communication styles and metaphors.
• Use of visual and interactive elements to overcome language barriers.
• Multilingual support and feedback channels for questions and assistance.

🔄 Global Consistency & Local Adaptation:
• Development of a globally uniform core concept with local adaptation options.
• Balance between global standards and local requirements and characteristics.
• Consideration of different regulatory requirements in different countries.
• Coordination between global and local security and training teams.
• Establishment of global communities of practice for knowledge exchange and best practices.

👥 Inclusion & Diversity:
• Development of inclusive training concepts that consider different perspectives.
• Accessible design for employees with different abilities and needs.
• Consideration of different learning styles and preferences in multicultural teams.
• Promotion of respect and appreciation for diversity in security matters.
• Involvement of local experts and stakeholders in training development.

💡 Expert Tip:
Successful international training programs find the right balance between global consistency and local relevance. Focus on a flexible framework with clearly defined global standards and targeted adaptation options for local contexts, languages, and cultural characteristics.`
  },
  {
    _key: `faq_${Date.now()}_19`,
    _type: 'object',
    question: 'How do employee training programs support response to new threats and security incidents?',
    answer: `🚨 Incident Response Training:
• Training of all employees on basic incident response processes and responsibilities.
• Teaching clear escalation paths and reporting procedures for security incidents.
• Role-specific training for members of incident response teams.
• Conducting regular exercises and simulations on various attack scenarios.
• Follow-up and lessons learned from real incidents and exercises.

⚡ Rapid Response Learning:
• Development of rapid response training modules for acute threats.
• Building processes for quick creation and distribution of security alerts.
• Integration of alert systems with just-in-time learning content.
• Use of micro-learning content for time-critical security information.
• Building a rapid response learning team for acute threat situations.

🔄 Continuous Threat Analysis:
• Integration of current threat intelligence into training content and priorities.
• Regular updates on new attack patterns and defense strategies.
• Systematic evaluation of security incidents for targeted follow-up training.
• Cooperation with security experts and CERTs for current threat information.
• Early warning systems and monitoring for new threats and vulnerabilities.

📊 Adaptive Risk Management:
• Quick adaptation of training priorities based on changing risk profiles.
• Dynamic risk assessment and needs-based training planning.
• Integration of feedback loops between incident response and training.
• Use of incident data for continuous improvement of training content.
• Development of resilience and adaptability to security threats.

💡 Expert Tip:
The ability to respond quickly and appropriately to new threats is crucial for an organization's security resilience. Develop a responsive training system with clear processes for integrating new threat information and establish a close connection between your Security Operations Center and the training team.`
  },
  {
    _key: `faq_${Date.now()}_20`,
    _type: 'object',
    question: 'How are employee training programs positioned as a competitive advantage and value creation factor?',
    answer: `💼 Economic Added Value:
• Quantification of cost savings through reduction of security incidents.
• Calculation of Return on Investment (ROI) of training measures.
• Avoidance of direct costs through data loss, business interruption, or ransomware.
• Reduction of indirect costs such as reputational damage or loss of trust.
• Development of business cases for decision-makers and budget managers.

🤝 Trust Building & Reputation:
• Use of security competencies as a trust factor with customers and partners.
• Communication of training measures in marketing materials and sales conversations.
• Integration into CSR reports and sustainability strategies.
• Positioning as a trustworthy partner and pioneer in security matters.
• Differentiation in competition through demonstrable security competencies.

✅ Compliance & Certifications:
• Use of training programs to fulfill compliance requirements.
• Support in obtaining security certifications (ISO 27001, TISAX, etc.).
• Demonstrability of due diligence to authorities and supervisory bodies.
• Avoidance of fines and regulatory problems.
• Facilitated access to certification-required markets and customer groups.

🧠 Talent Acquisition & Retention:
• Positioning as a security-conscious organization in employer branding.
• Offering high-quality training as part of employee benefits package.
• Development of valuable future competencies for employees.
• Promotion of employee satisfaction through investment in personal development.
• Creation of career and development perspectives in information security.

💡 Expert Tip:
Successful organizations view security training not as a necessary evil or cost factor, but as a strategic investment and competitive advantage. Communicate the added value both internally and externally and integrate security competencies into your brand and corporate strategy.`
  }
]

async function addFaqsBatch5() {
  console.log('Adding FAQ Batch 5 to Employee Training EN...')
  
  try {
    const result = await client
      .patch('employee-training-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('Successfully added FAQ Batch 5:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQ Batch 5:', error)
    throw error
  }
}

addFaqsBatch5()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
