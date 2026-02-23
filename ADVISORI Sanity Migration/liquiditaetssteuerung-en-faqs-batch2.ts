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

// Liquiditätssteuerung English FAQs - Batch 2 (FAQs 3-4)
// Source: liquiditaetssteuerung-source.json

const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'How does cash pooling work and what benefits does it offer?',
    answer: `Cash pooling is a central instrument of group-wide liquidity management and works in various ways:

🔍 Basic Principle and Types
• Physical Cash Pooling (Zero Balancing): Daily physical transfer of all balances to a master account
• Notional Pooling: Virtual consolidation of balances without physical transfer
• Hybrid Pooling: Combination of physical and notional pooling
• Multi-Currency Pooling: Consolidation of balances in different currencies

💰 How Physical Cash Pooling Works
• Automatic transfers (sweeps) from subsidiary accounts to the master account
• Target balancing or complete balance clearing (zero balancing)
• Internal current account relationships between master and subsidiaries
• Automated interest calculation for intercompany loans

📊 Benefits of Cash Pooling
• Reduction of external financing costs through netting effects
• Optimization of interest margins through volume bundling
• Improvement of liquidity transparency and management
• More efficient use of internal group liquidity
• Reduction of bank fees and transaction costs

⚠️ Legal and Tax Aspects
• Transfer pricing documentation according to § 90 para. 3 AO
• Arm's length principle for interest rates
• Corporate law capital maintenance provisions (§§ 30, 31 GmbHG)
• Compliance with local foreign exchange regulations for cross-border pooling
• Avoidance of liability risks through appropriate contract design`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How can AI improve liquidity forecasting?',
    answer: `Artificial intelligence is transforming liquidity forecasting through several innovative approaches:

🤖 AI Technologies for Cash Flow Forecasting
• Machine Learning Algorithms: Random Forest, XGBoost, Support Vector Machines
• Neural Networks: LSTM (Long Short-Term Memory) for time series analysis
• Natural Language Processing: Analysis of contract clauses and payment terms
• Computer Vision: Automatic extraction of payment information from invoices
• Ensemble Methods: Combination of different forecasting models for higher accuracy

📊 Data Integration and Analysis
• Multi-source data integration: ERP, CRM, bank data, market data
• Automatic anomaly detection in historical cash flows
• Identification of hidden patterns and correlations
• Real-time processing of transaction data
• Consideration of external factors (economic indicators, seasonality)

🎯 Concrete Improvements
• Increase in forecast accuracy from 78% to 92% for 90-day forecasts
• Reduction of Mean Absolute Percentage Error (MAPE) by 40-60%
• Automatic adaptation to changed business conditions
• Early detection of liquidity bottlenecks
• Granular forecasts at customer and transaction level

⚙️ Implementation Approaches
• Cloud-based solutions with API integration to financial systems
• Hybrid models with human expertise and AI support
• Continuous learning through feedback loops
• Explainable AI for traceability of forecasts
• Scalable architectures for growing data volumes`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQs batch 2 to Liquidity Management EN...')
  
  try {
    const result = await client
      .patch('liquiditaetssteuerung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('Added FAQs batch 2:', faqsBatch2.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 2:', error)
    throw error
  }
}

export { faqsBatch2 }
