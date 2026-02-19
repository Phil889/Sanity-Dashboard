import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

const timestamp = Date.now()

const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'What role does KYC play in the broader context of risk management?',
    answer: `🛡️ Integrated Risk Management Approach
• KYC as the foundation for customer risk management
• Connection to other risk areas such as credit, market, and operational risks
• Contribution to the overall risk position of the company

🔄 Synergies with Other Compliance Functions
• Overlaps with anti-money laundering (AML) and fraud prevention
• Shared use of data and analysis tools
• Coordinated monitoring and reporting processes

📊 Strategic Significance
• Influence on business decisions and market expansion
• Protection of corporate reputation and brand value
• Foundation for sustainable customer relationships and trust`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'How can the effectiveness of KYC measures be measured?',
    answer: `📊 Key Performance Indicators (KPIs)
• Turnaround times for customer onboarding and reviews
• False positive rate in screening procedures
• Cost per KYC review

🔍 Qualitative Assessments
• Completeness and accuracy of customer data
• Consistency of risk assessments
• Effectiveness of training programs

🔄 Continuous Improvement
• Regular internal and external audits
• Benchmarking against industry standards
• Feedback loops for process optimizations`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'What best practices exist for training employees on KYC topics?',
    answer: `📚 Training Content
• Basic regulatory requirements and their significance
• Practical application of KYC processes and tools
• Recognition of warning signs and suspicious activities

🎓 Training Methods
• Combination of e-learning and in-person training
• Case studies and role-playing for practical experience
• Regular refresher courses and updates on regulatory changes

📈 Success Measurement
• Knowledge tests and certifications
• Monitoring of practical application in daily work
• Employee feedback for improving training programs`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'How can KYC processes be optimized for digital products and services?',
    answer: `📱 Mobile-First Approach
• Optimized user interfaces for smartphones and tablets
• Staged onboarding with minimal data entry
• Use of device cameras for document scans

🤖 Automation and AI
• Real-time verification of identity documents
• Biometric authentication with liveness detection
• Automated risk assessment and decision-making

🔄 Continuous KYC
• Seamless integration of KYC into the customer journey
• Regular, non-intrusive updating of customer data
• Use of behavioral analytics for anomaly-based monitoring`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQ batch 3 to KYC English page...')
  
  const result = await client
    .patch('kyc-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch3)
    .commit()
  
  console.log(`Added ${faqsBatch3.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch3().catch(console.error)
