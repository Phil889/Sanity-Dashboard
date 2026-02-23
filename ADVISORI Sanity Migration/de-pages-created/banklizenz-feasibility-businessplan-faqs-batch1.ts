import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Banklizenz Feasibility Businessplan page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-feasibility-businessplan' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-feasibility-businessplan" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein professioneller Feasibility-Businessplan für die C-Suite mehr als nur eine BaFin-Anforderung und wie kann er zum strategischen Differentiator werden?",
        answer: "Für visionäre C-Level-Führungskräfte transzendiert ein Feasibility-Businessplan die regulatorische Pflichterfüllung und wird zur strategischen Waffe für Marktpositionierung, Investor Relations und operationale Exzellenz. ADVISORI entwickelt Businesspläne, die nicht nur Aufsichtsbehörden zufriedenstellen, sondern als umfassende Strategiedokumente dienen, die Ihr Unternehmen für Jahre hinweg navigieren und differentieren.\n\n🎯 Strategische Dimensionen des Feasibility-Businessplans:\n• Investor Magnetism und Valuation Optimization: Ein Investment-Grade-Businessplan kann Ihre Unternehmensbewertung um 20-40% steigern, indem er sophisticated Financial Engineering und robuste Marktpositionierung demonstriert.\n• Competitive Intelligence und Market Penetration: Detaillierte Wettbewerbsanalyse identifiziert Blue Ocean-Opportunities und ermöglicht strategische Positionierung vor Markteintritt der Konkurrenz.\n• Risk-Adjusted ROI Maximization: Präzise Risikobewertung und Szenarioplanung ermöglichen optimierte Kapitalallokation und reduzieren Downside-Risiken um bis zu 60%.\n• Strategic Partnership Facilitation: Professioneller Businessplan wird zum Door-Opener für Tier-1-Partnerschaften und strategische Allianzen im Banking-Ökosystem.\n\n🚀 Der ADVISORI Strategic Excellence-Ansatz:\n• Multi-Scenario Financial Engineering: Entwicklung von Base-Case, Upside- und Stress-Szenarien mit detaillierter Sensitivitätsanalyse für robuste Entscheidungsfindung.\n• Market Dynamics Deep-Dive: Analyse von Markttrends, regulatorischen Shifts und technologischen Disruptionen zur Zukunftssicherung Ihres Geschäftsmodells.\n• Value Creation Architecture: Design von Geschäftsmodellen, die multiple Revenue Streams und Defense-Mechanismen gegen Disruption integrieren.\n• Exit Strategy Integration: Berücksichtigung von M&A-Potenzial und IPO-Readiness in der Businessplan-Architektur für maximale strategische Flexibilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie gewährleistet ADVISORI, dass unser Feasibility-Businessplan nicht nur die BaFin überzeugt, sondern auch Tier-1-Investoren für Premium-Bewertungen begeistert?",
        answer: "Die Balance zwischen regulatorischer Compliance und Investor Appeal erfordert sophisticated Financial Storytelling und Technical Excellence. ADVISORI meistert diese Dualität durch Investment-Banking-Grade-Methodik kombiniert mit Deep Regulatory Expertise, um Businesspläne zu schaffen, die sowohl Conservative Regulators als auch Growth-Oriented Investors überzeugen.\n\n💎 Investment-Grade Financial Architecture:\n• Institutional-Quality Financial Modeling: Entwicklung von DCF-Modellen, Comparable Company Analysis und Precedent Transactions Analysis, die Investment Banking-Standards entsprechen.\n• Advanced Risk Metrics Integration: Implementation von Value-at-Risk, Economic Capital und RAROC-Berechnungen für sophisticated Risk-Return-Optimization.\n• Market Sizing und TAM Analysis: Präzise Marktpotenzial-Quantifizierung mit Bottom-Up- und Top-Down-Ansätzen für glaubwürdige Growth Projections.\n• Unit Economics Excellence: Detaillierte Customer Acquisition Cost, Lifetime Value und Churn-Rate-Modellierung für sustainable Business Model Validation.\n\n🏆 Regulatory-Investor Harmony Strategy:\n• Dual-Audience Communication: Crafting von Businessplan-Narratives, die regulatorische Stabilität UND disruptive Innovation kommunizieren.\n• Conservative Base Case mit Upside Optionality: Entwicklung konservativer Grundszenarien für BaFin-Approval mit klar artikulierten Upside-Cases für Investor Excitement.\n• ESG und Sustainability Integration: Einbettung von Environmental, Social und Governance-Faktoren für NextGen-Investor Appeal und regulatorische Future-Proofing.\n• Technology und Innovation Roadmap: Balance zwischen Proven Technology für regulatorische Sicherheit und Innovation Pipeline für Investor Differentiation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer volatilen Finanzmarktlandschaft - wie macht ADVISORI unseren Feasibility-Businessplan resilient gegen makroökonomische Schocks und Marktverwerfungen?",
        answer: "Makroökonomische Volatilität und Marktdisruptionen sind die größten Threats für Banking-Businesspläne, aber auch Opportunities für differenzierte Positionierung. ADVISORI entwickelt Anti-Fragile Businesspläne, die nicht nur Krisen überstehen, sondern in turbulenten Zeiten prosperieren, indem sie Built-in-Hedges und Counter-Cyclical Elements integrieren.\n\n🛡️ Macro-Resilience Engineering:\n• Stress Testing Excellence: Implementation von Bank-of-England- und EZB-Level Stress Tests mit Multiple Economic Scenarios (Recession, Stagflation, Hyperinflation, Deflation).\n• Interest Rate Sensitivity Analysis: Detaillierte Modellierung von Net Interest Margin Impacts unter verschiedenen Zinszyklen für robuste Profitability Projections.\n• Credit Risk Scenario Planning: Entwicklung von Expected Loss-Modellen unter verschiedenen Credit Cycle-Phasen mit Provision for Credit Losses-Optimization.\n• Liquidity Fortress Strategy: Design von Liquidity Buffers und Funding Diversification für Resilience gegen Funding Market Disruptions.\n\n⚡ Anti-Fragility Integration:\n• Counter-Cyclical Business Model Elements: Integration von Revenue Streams, die in Economic Downturns wachsen (Distressed Asset Services, Financial Advisory during Crisis).\n• Optionality und Pivoting Capability: Businessplan-Design mit Built-in-Flexibilität für Rapid Business Model Adaptation bei Marktveränderungen.\n• Diversification Excellence: Geographic, Product und Customer Diversification für Reduced Concentration Risk und Enhanced Stability.\n• Technology-Enabled Scalability: Investition in Digital Infrastructure, die Variable Cost Structures ermöglicht und Fixed Cost Leverage optimiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI unseren Banking-Businessplan als Future-Ready für die Disruption durch DeFi, CBDCs und die evolvierende Digital Asset-Landschaft?",
        answer: "Die traditionelle Banking-Landschaft erlebt eine fundamentale Transformation durch Blockchain-Technologie, Central Bank Digital Currencies und Decentralized Finance. ADVISORI entwickelt Future-Ready Businesspläne, die diese Disruption nicht als Threat, sondern als Strategic Opportunity positionieren und Ihr Institut als NextGen Banking Leader etablieren.\n\n🔮 Digital Asset Integration Strategy:\n• Crypto Custody und Digital Asset Services: Integration von Institutional-Grade Crypto Services als neue Revenue Streams mit detaillierter Risk-Return-Modellierung.\n• CBDC Readiness und Infrastructure Planning: Vorbereitung auf Central Bank Digital Currency-Integration mit Technology Roadmap und Compliance Framework.\n• DeFi Bridge-Building: Entwicklung von Traditional-DeFi-Hybrid-Produkten, die Regulatory Compliance mit DeFi Innovation verbinden.\n• Stablecoin und Digital Payment Innovation: Exploration von Stablecoin-Issuance und Digital Payment Solutions für Enhanced Customer Experience.\n\n🚀 NextGen Banking Architecture:\n• API-First Banking Design: Entwicklung von Open Banking-Geschäftsmodellen mit Platform Economics und Ecosystem Revenue Streams.\n• AI und Machine Learning Integration: Implementation von Robo-Advisory, Algorithmic Trading und AI-Driven Risk Management für Operational Excellence.\n• Embedded Finance Opportunities: Design von Banking-as-a-Service-Modellen für Fintech-Partnerships und White-Label-Solutions.\n• Regulatory Sandbox Strategy: Nutzung von Innovation-Friendly Regulatory Frameworks für Safe-to-Fail Experimentation mit neuen Technologies."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
