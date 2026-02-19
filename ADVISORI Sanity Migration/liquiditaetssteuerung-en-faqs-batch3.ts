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

// Liquiditätssteuerung English FAQs - Batch 3 (FAQs 5-6)
// Source: liquiditaetssteuerung-source.json

const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'What is a Contingency Funding Plan and how do you develop one?',
    answer: `A Contingency Funding Plan (CFP) is an essential component of liquidity risk management:

🔍 Definition and Purpose
• Emergency plan to ensure solvency in stress situations
• Proactive identification of action options during liquidity shortfalls
• Clear governance structures and decision processes in crisis situations
• Fulfillment of regulatory requirements (e.g., MaRisk AT 7.2)
• Minimization of reputational risks through proactive crisis management

⚠️ Key Components of a CFP
• Early Warning Indicators: Quantitative and qualitative trigger events
• Escalation Levels: Graduated measures depending on crisis severity
• Action Options: Concrete measures for liquidity procurement
• Communication Plan: Internal and external communication strategy
• Responsibilities: Clear assignment of roles and authorities

📋 Development Process
• Risk Analysis: Identification of potential liquidity risks and stress scenarios
• Scenario Development: Definition of idiosyncratic and market-wide stress scenarios
• Action Planning: Development of countermeasures for each scenario
• Governance Design: Definition of decision processes and responsibilities
• Implementation and Training: Training of involved employees
• Regular Tests: Conducting simulations and planning exercises

🛠️ Best Practices
• Diversification of Liquidity Sources: Avoiding dependencies
• Predefined Credit Lines: Committed facilities with clear drawdown conditions
• Liquidity Reserves: Highly liquid assets as buffer (min. 5% of balance sheet total)
• Regular Review: At least annual update of the CFP
• Integration into Overall Risk Management: Coordination with other risk areas`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'How do you integrate Treasury Management Systems into the existing IT landscape?',
    answer: `The integration of Treasury Management Systems (TMS) into the existing IT landscape requires a structured approach:

🔄 Integration Architecture
• API-based Integration: REST/SOAP interfaces to ERP, accounting, CRM
• Real-time Data Flow: Event-driven architecture for timely updates
• Middleware Solutions: Enterprise Service Bus for complex system landscapes
• Cloud Connectors: Secure connections between on-premise and cloud systems
• Microservices: Modular integration of individual treasury functions

📊 Data Synchronization
• Master Data Management: Central management of master data
• Bidirectional Data Exchange: Synchronization in both directions
• Data Validation: Automatic checking for consistency and completeness
• Historization: Versioning of data changes
• Conflict Management: Rule-based resolution of data inconsistencies

🔐 Security Aspects
• Identity and Access Management: Role-based access rights
• Encryption: End-to-end encryption of sensitive financial data
• Audit Trail: Complete documentation of all transactions
• Compliance Monitoring: Automatic checking for rule violations
• Penetration Tests: Regular security reviews

⚙️ Implementation Approach
• Phased Migration: Step-by-step integration of individual modules
• Parallel Operation: Temporary dual operation of critical processes
• Agile Methodology: Iterative development and continuous feedback
• DevOps Principles: Automated tests and deployments
• Change Management: Comprehensive training and support for users

🛠️ Technological Trends
• Open Banking APIs: Standardized bank interfaces (PSD2)
• Blockchain: Distributed ledger for transaction security
• AI/ML: Intelligent data analysis and process automation
• RPA: Robotic process automation for manual activities
• Low-Code Platforms: Rapid customization and extension`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQs batch 3 to Liquidity Management EN...')
  
  try {
    const result = await client
      .patch('liquiditaetssteuerung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log('Added FAQs batch 3:', faqsBatch3.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 3:', error)
    throw error
  }
}

export { faqsBatch3 }
