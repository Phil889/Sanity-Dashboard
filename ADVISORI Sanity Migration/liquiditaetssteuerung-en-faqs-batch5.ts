import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const timestamp = Date.now()

// Liquiditätssteuerung English FAQs - Batch 5 (FAQs 8-9)
// Source: liquiditaetssteuerung-source.json

const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'What regulatory requirements exist for liquidity management?',
    answer: `The regulatory requirements for liquidity management are extensive and vary by industry:

🏦 Banks and Financial Institutions
• Basel III/IV: International standards for liquidity risk management
  - LCR (Liquidity Coverage Ratio): Short-term liquidity resilience (30 days)
  - NSFR (Net Stable Funding Ratio): Structural liquidity (1 year)
  - ILAAP (Internal Liquidity Adequacy Assessment Process): Internal assessment process
• MaRisk: Minimum requirements for risk management in Germany
  - BTR 3: Specific requirements for liquidity risk management
  - AT 7.2: Requirements for contingency plans (Contingency Funding Plan)
• EBA Guidelines: European requirements for liquidity risk management
  - Stress tests, early warning indicators, intraday liquidity management

📈 Investment Funds
• KAGB (Capital Investment Code): Regulation of investment funds in Germany
  - § 30: Liquidity management for open-ended investment funds
  - § 216: Redemption suspension and swing pricing
• AIFMD/UCITS Directive: European regulation for investment funds
  - Liquidity stress tests and reporting
  - Liquidity Management Tools (LMTs)
• BaFin Circulars: Specific requirements for liquidity management

🏭 Non-Financial Companies
• IDW PS 340: Audit standard for risk early detection systems
  - Identification of existence-threatening risks, including liquidity risks
• KonTraG: Law on Control and Transparency in Business
  - Obligation to establish a risk early detection system
• IFRS 7: International Financial Reporting Standards
  - Disclosure requirements for liquidity risks
  - Maturity analysis of financial liabilities

📋 Cross-Industry Requirements
• Corporate Governance Code: Recommendations for corporate management
  - Board responsibility for appropriate risk management
• ESG Regulation: Increasing requirements for sustainability risks
  - Integration of climate risks into liquidity planning`
  },
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'What trends are shaping the future of liquidity management?',
    answer: `The future of liquidity management is shaped by several innovative trends:

🤖 Technological Innovation
• Predictive Analytics: AI-powered forecasting models with 90%+ accuracy
• Blockchain and DLT: Decentralized payment systems and smart contracts
• APIs and Open Banking: Real-time data exchange with banks and financial partners
• Robotic Process Automation: Automation of repetitive treasury processes
• Cloud-based Treasury Platforms: Scalable and flexible solutions

💰 New Financial Instruments and Structures
• Virtual Accounts: Simplification of cash pooling and payment transactions
• Dynamic Discounting: Flexible payment terms for suppliers
• Supply Chain Finance: Integration of suppliers into liquidity planning
• Digital Currencies: CBDCs (Central Bank Digital Currencies) and stablecoins
• Programmable Money: Automated payment flows through smart contracts

🌱 ESG Integration
• Green Treasury: Sustainable investment of liquidity reserves
• ESG Risk Assessment: Integration of sustainability risks into liquidity models
• Sustainable Supply Chain Finance: Promotion of sustainable supply chains
• Impact Investing: Liquidity investment with positive social and environmental impact
• Transparency and Reporting: Extended disclosure on ESG aspects

🔄 Organizational Transformation
• Treasury as a Service: Outsourcing of treasury functions
• Agile Treasury: Flexible and adaptable organizational structures
• Shared Service Centers: Centralization of treasury activities
• Business Partnering: Strategic role of treasury in the organization
• Skill Transformation: New competency requirements (data science, digitalization)

🌐 Globalization and Geopolitics
• Fragmentation of Global Markets: Regional treasury structures
• Sanctions Risks: More complex compliance requirements
• Currency Volatility: Increasing hedging necessity
• Cyber Risks: Increased security requirements`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQs batch 5 to Liquidity Management EN...')
  
  try {
    const result = await client
      .patch('liquiditaetssteuerung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('Added FAQs batch 5:', faqsBatch5.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 5:', error)
    throw error
  }
}

export { faqsBatch5 }
