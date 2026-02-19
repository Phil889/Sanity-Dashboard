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
    console.log('Updating Banklizenz IKS & Compliance-Funktionen page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-iks-compliance-funktionen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-iks-compliance-funktionen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie implementiert ADVISORI Cost-Effective IKS-Solutions und ROI-optimierte Compliance-Investments, um C-Level-Führungskräften maximale Regulatory-Excellence bei optimaler Resource-Utilization zu ermöglichen?",
        answer: "IKS- und Compliance-Excellence erfordert strategische Investment-Decisions, die maximale Regulatory-Assurance und Business-Value bei optimaler Cost-Efficiency erzielen. ADVISORI entwickelt ROI-optimierte IKS- und Compliance-Solutions, die C-Level-Führungskräften demonstrierbare Value-Creation durch intelligente Resource-Allocation und Cost-Benefit-Optimization ermöglichen.\n\n💰 Strategic IKS-Investment für Maximum-Value:\n• Value-Based Control-Prioritization: Entwicklung von IKS-Investment-Frameworks, die Controls nach Risk-Impact, Regulatory-Criticality und Business-Benefit priorisieren für optimale Resource-Deployment.\n• Cost-Benefit-Optimization: Comprehensive Cost-Benefit-Analysis für alle IKS-Investments mit Clear-ROI-Metrics und Business-Case-Validation für Strategic-Decision-Support.\n• Automation-First-Strategies: Priorisierung von Technology-enabled IKS-Components und RegTech-Solutions, die Long-term Cost-Reduction bei Enhanced-Control-Quality ermöglichen.\n• Shared-Service-Excellence: Development von Shared-IKS-Services und Center-of-Excellence-Models für Economies-of-Scale und Cross-Business-Line-Efficiency.\n\n🎯 ADVISORI's Cost-Intelligent IKS-Architecture:\n• Lean IKS-Design: Implementation von Lean-Principles in IKS-Design zur Elimination von Redundancy, Process-Optimization und Focus auf Value-Adding-Control-Activities.\n• Technology-Leverage-Strategies: Strategic-Use von AI, Machine-Learning und Automation für Cost-Reduction, Accuracy-Improvement und Efficiency-Gains in IKS-Operations.\n• Outsourcing-Optimization: Strategic-Analysis von IKS-Outsourcing-Opportunities für Non-Core-Functions bei Retention von Strategic-Control-Capabilities.\n• Performance-Contracting: Development von Performance-Based-Contracts mit IKS-Service-Providers für Risk-Sharing und Outcome-Based-Pricing.\n• Continuous-Cost-Management: Establishment von Ongoing-Cost-Monitoring und Optimization-Programs für Sustainable Cost-Control und Performance-Enhancement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "In welcher Weise entwickelt ADVISORI ESG-integrierte IKS-Frameworks und Sustainability-Compliance, um C-Level-Führungskräften Competitive-Advantage durch ESG-Leadership und Stakeholder-Value-Creation zu verschaffen?",
        answer: "ESG-Integration in IKS- und Compliance-Systems ist nicht nur Regulatory-Requirement, sondern strategischer Competitive-Advantage und Stakeholder-Value-Driver. ADVISORI entwickelt ESG-integrierte IKS-Frameworks, die C-Level-Führungskräften ESG-Leadership ermöglichen und Sustainability als Business-Enabler und Market-Differentiator positionieren.\n\n🌱 ESG-IKS-Integration für Sustainable-Excellence:\n• Environmental-Control-Integration: Implementation von Climate-Risk-Controls, Carbon-Footprint-Monitoring und Green-Finance-Compliance in Core-IKS-Frameworks für Environmental-Leadership.\n• Social-Impact-Controls: Development von Social-Impact-Measurement-Systems, Community-Investment-Tracking und Stakeholder-Engagement-Controls für Social-License-to-Operate.\n• Governance-ESG-Alignment: Integration von ESG-Governance-Requirements in Traditional-IKS-Structures für Holistic-Governance-Excellence und Stakeholder-Alignment.\n• Sustainability-Reporting-Excellence: Implementation von Automated-ESG-Reporting-Controls und Real-time-Sustainability-Dashboards für Transparency und External-Communication.\n\n🏆 ADVISORI's ESG-Excellence Control-Framework:\n• Impact-Measurement-Intelligence: Development von Comprehensive-Impact-Measurement-Systems, die Environmental-, Social- und Economic-Impact quantifizieren und Strategic-ESG-Decision-Support liefern.\n• Stakeholder-Value-Creation: Creation von Multi-Stakeholder-Value-Metrics und ESG-Performance-Indicators für Enhanced-Stakeholder-Relations und Trust-Building.\n• ESG-Risk-Integration: Seamless-Integration von ESG-Risks in Traditional-Risk-Frameworks für Holistic-Risk-Management und Long-term-Value-Creation.\n• Innovation-for-Sustainability: Establishment von Innovation-Controls für Sustainable-Product-Development, Green-Finance-Innovation und Circular-Economy-Initiatives.\n• ESG-Culture-Development: Development von ESG-Culture-Programs und Sustainability-Incentive-Systems für Cultural-Transformation und Behavioral-Change."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie etabliert ADVISORI Cyber-Security-integrierte IKS und Digital-Compliance-Frameworks, um C-Level-Führungskräften Confidence in Digital-Transformation bei gleichzeitiger Cyber-Resilience zu geben?",
        answer: "Digital-Transformation in Banking erfordert sophisticated Cyber-Security-Integration in IKS- und Compliance-Systems, die Innovation ermöglichen ohne Security zu kompromittieren. ADVISORI entwickelt Cyber-Resilient IKS-Frameworks, die C-Level-Führungskräften Confidence in Digital-Initiatives geben und gleichzeitig robuste Cyber-Defense und Data-Protection sicherstellen.\n\n🔒 Cyber-Resilient IKS für Digital-Banking-Excellence:\n• Zero-Trust-IKS-Architecture: Implementation von Zero-Trust-Security-Models in IKS-Designs für Enhanced-Security bei Digital-Banking-Services und Cloud-Native-Architectures.\n• Real-time-Cyber-Monitoring: Development von AI-Powered-Cyber-Threat-Detection und Real-time-Security-Monitoring für Proactive-Threat-Identification und Rapid-Response.\n• Digital-Identity-Controls: Implementation von Advanced-Digital-Identity-Management und Multi-Factor-Authentication-Controls für Secure-Digital-Customer-Interactions.\n• Data-Privacy-by-Design: Integration von Privacy-by-Design-Principles in alle Digital-IKS-Components für GDPR-Compliance und Customer-Trust.\n\n🛡️ ADVISORI's Digital-Security Control-Framework:\n• API-Security-Excellence: Development von API-Security-Controls und Third-Party-Integration-Security für Secure-Fintech-Partnerships und Open-Banking-Compliance.\n• Automated-Security-Response: Implementation von Automated-Security-Incident-Response und Self-Healing-Systems für Minimized-Human-Error und Enhanced-Response-Speed.\n• Cyber-Risk-Integration: Seamless-Integration von Cyber-Risks in Traditional-Risk-Frameworks für Holistic-Digital-Risk-Management und Business-Continuity.\n• Digital-Audit-Trails: Implementation von Immutable-Digital-Audit-Trails und Blockchain-Enhanced-Security für Regulatory-Grade-Evidence und Cyber-Forensics.\n• Continuous-Security-Validation: Establishment von Continuous-Security-Testing, Penetration-Testing und Vulnerability-Assessment für Ongoing-Cyber-Assurance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie optimiert ADVISORI Change-Management und Adaptive-IKS-Evolution für C-Level-Führungskräfte zur Sicherstellung von IKS-Agility bei regulatorischen Änderungen und Business-Model-Innovation?",
        answer: "Dynamic Business-Environments erfordern adaptive IKS-Systems, die schnell auf Regulatory-Changes und Business-Model-Evolution reagieren können ohne Control-Quality zu kompromittieren. ADVISORI entwickelt Change-Management-Frameworks für IKS-Evolution, die C-Level-Führungskräften Confidence in IKS-Adaptability geben und gleichzeitig Business-Continuity und Regulatory-Compliance sichern.\n\n📈 Adaptive IKS für Dynamic-Business-Success:\n• Change-Impact-Assessment: Comprehensive-Change-Impact-Analysis-Frameworks für Rapid-Assessment von Regulatory-Changes und Business-Model-Changes auf IKS-Systems.\n• Modular-IKS-Architecture: Development von Modular-IKS-Designs, die Quick-Adaptation an New-Requirements ermöglichen ohne Core-System-Disruption oder Control-Quality-Compromise.\n• Agile-Implementation-Processes: Establishment von Agile-Implementation-Methodologies für Fast-Deployment von IKS-Changes und Regulatory-Updates.\n• Future-Proofing-Design: Creation von Future-Ready IKS-Architectures, die Emerging-Technologies und Regulatory-Trends antizipieren für Proactive-Adaptation.\n\n🚀 ADVISORI's Adaptive-Excellence Framework:\n• Predictive-Change-Analytics: Use von AI und Predictive-Analytics für Regulatory-Trend-Analysis und Proactive-IKS-Preparation für Future-Requirements.\n• Business-Model-Integration: Development von Business-Model-Agnostic IKS-Components, die verschiedene Business-Strategies und Innovation-Initiatives unterstützen.\n• Regulatory-Horizon-Scanning: Implementation von Systematic-Regulatory-Monitoring und Early-Warning-Systems für Proactive-Identification von IKS-Impact-Changes.\n• Innovation-IKS-Balance: Creation von Innovation-Friendly IKS-Frameworks, die New-Business-Models und Digital-Innovation ermöglichen within Robust-Control-Boundaries.\n• Continuous-Evolution-Capabilities: Establishment von Learning-Organizations für IKS-Evolution-Expertise und Adaptive-Change-Management across all Business-Dimensions."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
