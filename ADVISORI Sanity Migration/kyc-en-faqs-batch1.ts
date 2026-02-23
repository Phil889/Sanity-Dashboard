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

const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'What is KYC (Know Your Customer) and why is it important?',
    answer: `🔍 KYC Fundamentals
• KYC (Know Your Customer) is a process for identifying and verifying customer identity
• It includes collecting and analyzing customer data for risk assessment
• KYC is a central component of anti-money laundering and counter-terrorism financing

⚖️ Legal Significance
• In Germany, regulated by the Anti-Money Laundering Act (GwG) and BaFin guidelines
• Compliance with EU Anti-Money Laundering Directives (AMLD6)
• Avoiding fines and reputational damage from non-compliance

💼 Business Benefits
• Protection against fraud and financial losses
• Improvement of data quality and customer relationships
• Foundation for informed business decisions and risk management`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'What regulatory requirements apply to KYC in Germany?',
    answer: `📜 Legal Foundations
• Anti-Money Laundering Act (GwG) as the primary legal basis
• §11 GwG defines general due diligence obligations for customer identification
• §12 GwG regulates the retention of documents and evidence
• §13 GwG describes enhanced due diligence for high-risk cases

🏛️ Supervisory Authorities
• BaFin as the central supervisory authority for the financial sector
• BaFin interpretation and application guidance on the GwG
• Sector-specific requirements for banks, insurers, and payment service providers

🇪🇺 EU Directives
• Implementation of the 6th EU Anti-Money Laundering Directive (AMLD6)
• Harmonization of KYC requirements in the European Economic Area
• Stricter requirements for cross-border business relationships`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'What components make up an effective KYC system?',
    answer: `🔎 Customer Identification Program (CIP)
• Collection and verification of basic customer identity data
• Use of official identity documents and electronic identification procedures
• Matching against sanctions lists and PEP screening (Politically Exposed Persons)

📊 Customer Due Diligence (CDD)
• Risk classification of customers based on various factors
• Determination of the Ultimate Beneficial Owner (UBO)
• Establishing the purpose and intended nature of the business relationship

🔄 Ongoing Monitoring
• Continuous monitoring of transactions and business relationships
• Regular updating of customer data and risk assessments
• Detection and reporting of suspicious activities`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How can a risk-based approach to KYC be implemented?',
    answer: `🎯 Basic Principles
• Adapting verification intensity to the individual customer risk profile
• Efficient resource allocation by focusing on high-risk areas
• Balance between compliance requirements and customer experience

📈 Risk Assessment Model
• Development of a multi-dimensional risk matrix with weighted factors
• Consideration of customer type, industry, geographic location, and transaction behavior
• Dynamic adjustment of risk assessment based on new information

🔄 Implementation Process
• Definition of risk categories and corresponding due diligence measures
• Training employees for consistent application of the risk-based approach
• Regular review and optimization of the risk assessment model`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQ batch 1 to KYC English page...')
  
  const result = await client
    .patch('kyc-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch1)
    .commit()
  
  console.log(`Added ${faqsBatch1.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch1().catch(console.error)
