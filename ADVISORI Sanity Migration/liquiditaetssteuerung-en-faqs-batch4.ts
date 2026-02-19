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

// Liquiditätssteuerung English FAQs - Batch 4 (FAQ 7)
// Source: liquiditaetssteuerung-source.json

const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'How do you conduct effective liquidity stress tests?',
    answer: `Effective liquidity stress tests are a central element of liquidity risk management:

🎯 Basic Principles and Methodology
• Proportionality Principle: Appropriateness of tests to company size and complexity
• Reverse Stress Tests: Identification of scenarios that would lead to insolvency
• Combined Scenarios: Consideration of multiple, correlated risk factors
• Dynamic Simulation: Multi-period analysis with feedback effects
• Sensitivity Analyses: Variation of individual parameters to identify critical factors

📊 Scenario Development
• Idiosyncratic Scenarios: Company-specific stress events
  - Rating downgrade by 2-3 notches
  - Default of a major customer (>10% of revenue)
  - Product recall or reputational damage
• Market-wide Scenarios: Systemic stress events
  - Severe recession (GDP decline >3%)
  - Liquidity crisis in the banking sector
  - Extreme market volatility (VIX >40)
• Combined Scenarios: Simultaneous occurrence of multiple stress factors

⚙️ Implementation Steps
• Definition of stress scenarios and parameters
• Modeling of cash flow impacts
• Calculation of liquidity metrics under stress
• Analysis of results and identification of weaknesses
• Derivation of recommendations and measures
• Documentation and reporting to management and supervisory bodies

📈 Advanced Techniques
• Monte Carlo Simulation: Stochastic modeling with probability distributions
• Machine Learning: Identification of complex risk relationships
• Bayesian Networks: Modeling of dependencies between risk factors
• Copula Models: Representation of non-linear correlations
• Agent-Based Modeling: Simulation of market dynamics and contagion effects`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQs batch 4 to Liquidity Management EN...')
  
  try {
    const result = await client
      .patch('liquiditaetssteuerung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('Added FAQs batch 4:', faqsBatch4.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 4:', error)
    throw error
  }
}

export { faqsBatch4 }
