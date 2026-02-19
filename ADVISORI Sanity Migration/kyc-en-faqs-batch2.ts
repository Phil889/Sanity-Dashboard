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

const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'What technological solutions can optimize KYC processes?',
    answer: `🤖 AI and Machine Learning
• Automated document analysis using OCR (Optical Character Recognition)
• Pattern recognition algorithms for identifying suspicious transactions
• Predictive analytics for risk assessment and fraud detection

🔗 API Integrations
• Real-time access to public registers (commercial register, transparency register)
• Automated queries of sanctions lists and PEP databases
• Seamless integration with existing CRM and banking systems

📱 Digital Identity Verification
• Biometric authentication (facial recognition, fingerprint)
• VideoIdent procedures for legally compliant remote identification
• Blockchain-based identity solutions for enhanced security and data protection`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'How can the balance between compliance and customer experience be maintained?',
    answer: `🔄 Process Optimization
• Streamlining KYC processes by eliminating redundant steps
• Implementation of a staged onboarding approach
• Use of straight-through processing for low-risk cases

📱 Digital Customer Interfaces
• User-friendly mobile apps and web portals for data collection
• Clear communication of requirements and process progress
• Self-service options for updating customer data

🔄 Continuous Improvement
• Regular analysis of abandonment rates and customer feedback
• A/B testing of different onboarding flows
• Benchmarking against industry standards and best practices`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'What are the most common challenges in implementing KYC processes?',
    answer: `🧩 Complexity of Requirements
• Constantly evolving regulatory landscape
• Different requirements in various jurisdictions
• Interpretation of unclear regulatory guidelines

💾 Data Quality and Management
• Fragmented customer data in different systems
• Difficulties in verifying data from various sources
• Data protection concerns and GDPR compliance

⚙️ Operational Challenges
• High manual effort for complex cases
• Training and awareness of employees
• Integration of new technologies into existing legacy systems`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How can KYC processes be adapted for different customer types?',
    answer: `👤 Private Customers
• Simplified procedures for standard risk cases
• Digital identification methods for remote onboarding
• Use of existing customer data for existing customers

🏢 Corporate Customers
• More complex due diligence for corporate structures
• Identification of Ultimate Beneficial Owners (UBO analysis)
• Industry-specific risk assessment and monitoring

🌐 International Customers
• Consideration of country-specific risks and documents
• Multilingual communication and support
• Compliance with international standards (FATF recommendations)`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQ batch 2 to KYC English page...')
  
  const result = await client
    .patch('kyc-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch2)
    .commit()
  
  console.log(`Added ${faqsBatch2.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch2().catch(console.error)
