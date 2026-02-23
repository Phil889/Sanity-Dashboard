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

const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_17`,
    _type: 'object',
    question: 'What trends and developments are shaping the future of KYC?',
    answer: `🔗 Blockchain and Decentralized Identity
• Self-Sovereign Identity (SSI) for user-controlled identity data
• Blockchain-based verification networks for secure data exchange
• Zero-knowledge proofs for privacy-friendly verification

🤖 Advanced AI and Automation
• Natural language processing for document analysis
• Behavioral biometrics for continuous authentication
• Predictive analytics for proactive risk management

🌐 Regulatory Developments
• Harmonization of international KYC standards
• Regulatory Technology (RegTech) for compliance automation
• Increased requirements for transparency and traceability`
  },
  {
    _key: `faq_${timestamp}_18`,
    _type: 'object',
    question: 'How can a KYC refresh program be effectively implemented?',
    answer: `📋 Strategic Planning
• Risk-oriented prioritization of the customer base
• Definition of clear goals and success criteria
• Resource planning and timeframe for implementation

🔄 Operational Implementation
• Automated identification of data gaps and inconsistencies
• Staged approach with focus on high-risk segments
• Efficient communication with customers for data updates

📊 Monitoring and Reporting
• Tracking of progress and success rate
• Escalation processes for non-responsive customers
• Documentation for audit and compliance purposes`
  },
  {
    _key: `faq_${timestamp}_19`,
    _type: 'object',
    question: 'What cost-benefit considerations are relevant for KYC investments?',
    answer: `💰 Cost Components
• Direct implementation costs for technology and consulting
• Ongoing operating costs for systems and personnel
• Training and change management costs

📈 Quantifiable Benefits
• Reduction of fines and regulatory penalties
• Efficiency gains through automation and process optimization
• Reduction of fraud losses through improved risk detection

🔄 ROI Consideration
• Typical payback period of 14-18 months for larger investments
• Long-term strategic benefits through improved data quality
• Competitive advantages through optimized customer experience`
  },
  {
    _key: `faq_${timestamp}_20`,
    _type: 'object',
    question: 'How can ADVISORI support the optimization of KYC processes?',
    answer: `🔍 Analysis and Consulting
• Comprehensive assessment of existing KYC processes and systems
• Gap analysis against regulatory requirements and best practices
• Development of customized KYC strategies and roadmaps

⚙️ Implementation and Optimization
• Process design and optimization for efficient KYC workflows
• Selection and implementation of suitable KYC technologies
• Integration of KYC solutions into existing system landscapes

🎓 Training and Change Management
• Development of comprehensive training programs for employees
• Support for organizational change
• Knowledge transfer and empowerment of internal teams`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQ batch 5 to KYC English page...')
  
  const result = await client
    .patch('kyc-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch5)
    .commit()
  
  console.log(`Added ${faqsBatch5.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch5().catch(console.error)
