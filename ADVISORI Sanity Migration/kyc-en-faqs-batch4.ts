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

const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'What role does Enhanced Due Diligence (EDD) play in the KYC process?',
    answer: `🔍 Definition and Application Areas
• In-depth review for high-risk customers and transactions
• Legal obligation under §13 GwG for certain scenarios
• Supplement to Standard Due Diligence (SDD) in the risk-based approach

📋 EDD Measures
• Obtaining additional information about customers and business relationships
• Enhanced monitoring of transactions and activities
• Obtaining approval from senior management for business relationships

⚠️ Triggers for EDD
• Politically Exposed Persons (PEPs) and their associates
• Customers from high-risk countries according to FATF list
• Complex corporate structures and unusual transaction patterns`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'How can companies handle international KYC requirements?',
    answer: `🌐 Global Compliance Strategy
• Development of a global KYC framework with local adaptations
• Implementation of the highest common standard as baseline
• Flexible architecture for country-specific extensions

📜 Regulatory Mapping
• Systematic capture and comparison of international requirements
• Identification of commonalities and differences
• Regular updates for regulatory changes

🤝 International Cooperation
• Use of global identity verification networks
• Collaboration with local compliance experts
• Participation in international standards initiatives`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'What data protection aspects must be considered in KYC processes?',
    answer: `⚖️ Legal Foundations
• GDPR compliance in processing personal data
• Lawfulness of data processing according to Art. 6 GDPR
• Balance between KYC requirements and data protection principles

🔒 Data Security
• Implementation of appropriate technical and organizational measures
• Encryption of sensitive customer data
• Access controls and audit trails for KYC systems

📝 Transparency and Data Subject Rights
• Clear information about data processing in the KYC context
• Processes for access, rectification, and deletion requests
• Documentation of data processing activities`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'How can KYC processes be adapted for different industries?',
    answer: `🏦 Banks and Financial Service Providers
• Comprehensive KYC processes according to BaFin requirements
• Integration with payment and account systems
• Special requirements for private banking and wealth management

💼 Insurance Companies
• Adaptation to insurance-specific risks and products
• Consideration of policyholders, insured persons, and beneficiaries
• Integration with underwriting and claims management processes

🏛️ FinTechs and Payment Service Providers
• Lean, digital KYC processes for optimal user experience
• Special requirements for innovative payment methods
• Scalable solutions for rapid growth`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQ batch 4 to KYC English page...')
  
  const result = await client
    .patch('kyc-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch4)
    .commit()
  
  console.log(`Added ${faqsBatch4.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch4().catch(console.error)
