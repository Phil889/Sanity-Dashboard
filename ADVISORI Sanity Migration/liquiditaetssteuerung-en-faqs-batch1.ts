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

// Liquiditätssteuerung English FAQs - Batch 1 (FAQs 1-2)
// Source: liquiditaetssteuerung-source.json

const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'What are the core components of effective liquidity management?',
    answer: `Effective liquidity management comprises four core components that function as an integrated system:

🔍 Dispositive Liquidity Planning
• Rolling cash flow forecasts (short-, medium-, and long-term)
• Scenario analyses and sensitivity calculations
• Integration of business planning and liquidity planning
• Consideration of seasonal effects and special influences

💰 Operational Cash Management
• Daily disposition and balance management
• Cash pooling and group financing
• Investment and financing management
• Payment transaction optimization and bank relationship management

⚠️ Liquidity Risk Controlling
• Definition and monitoring of liquidity metrics
• Early warning systems and trigger events
• Stress tests and scenario analyses
• Contingency Funding Plan (emergency plan)

📊 Reporting and Governance
• Management reporting and decision support
• Regulatory reporting (e.g., LCR, NSFR)
• Limit monitoring and escalation processes
• Treasury policies and governance structures`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'Which liquidity metrics are particularly relevant?',
    answer: `For comprehensive liquidity management, various metrics are relevant that capture different aspects of liquidity:

📊 Regulatory Metrics
• Liquidity Coverage Ratio (LCR): Ratio of high-quality liquid assets to net liquidity outflows in a 30-day stress scenario (minimum requirement: ≥ 100%)
• Net Stable Funding Ratio (NSFR): Ratio of available stable funding to required stable funding (minimum requirement: ≥ 100%)
• Liquidity Monitoring Tools: Additional metrics such as concentration risks, unencumbered assets, etc.

💼 Business Metrics
• Cash Ratio: Ratio of cash and cash equivalents to current liabilities
• Quick Ratio: Ratio of cash plus short-term receivables to current liabilities
• Current Ratio: Ratio of current assets to current liabilities
• Cash Conversion Cycle: Period between payment for inputs and receipt from customer receivables

⚙️ Operational Metrics
• Days Sales Outstanding (DSO): Average receivables collection period
• Days Payable Outstanding (DPO): Average payables payment period
• Days Inventory Outstanding (DIO): Average inventory holding period
• Free Cash Flow: Operating cash flow minus investments

🔄 Dynamic Metrics
• Forecast Accuracy: Deviation between forecasted and actual cash flow
• Liquidity Buffer Ratio: Ratio of liquidity buffer to potential stress outflows
• Funding Concentration: Dependence on individual funding sources
• Intraday Liquidity Usage: Maximum utilization of intraday liquidity`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQs batch 1 to Liquidity Management EN...')
  
  try {
    const result = await client
      .patch('liquiditaetssteuerung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log('Added FAQs batch 1:', faqsBatch1.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 1:', error)
    throw error
  }
}

export { faqsBatch1 }
