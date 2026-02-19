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
    console.log('Updating Banklizenz Kontroll- & Steuerungsprozesse page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-kontroll-steuerungsprozesse' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-kontroll-steuerungsprozesse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie implementiert ADVISORI Cost-Effective Control-Solutions und ROI-optimierte Control-Investments, um C-Level-Führungskräften maximale Control-Excellence bei optimaler Resource-Allocation zu ermöglichen?",
        answer: "Control-Excellence erfordert strategische Investment-Decisions, die maximale Regulatory-Compliance und Business-Value bei optimaler Cost-Efficiency erzielen. ADVISORI entwickelt ROI-optimierte Control-Solutions, die C-Level-Führungskräften demonstrierbare Value-Creation durch intelligente Resource-Allocation und Cost-Benefit-Optimization ermöglichen.\n\n💰 Strategic Control-Investment für Maximum-ROI:\n• Value-Based Control-Prioritization: Entwicklung von Control-Investment-Frameworks, die Controls nach Risk-Impact, Regulatory-Importance und Business-Value priorisieren für optimale Resource-Allocation.\n• Cost-Benefit-Optimization: Comprehensive Cost-Benefit-Analysis für alle Control-Investments mit Clear-ROI-Metrics und Business-Case-Development für C-Level-Decision-Support.\n• Automation-First-Strategies: Priorisierung von Technology-Enabled Controls und Automation-Solutions, die Long-term-Cost-Reduction bei Enhanced-Control-Quality ermöglichen.\n• Shared-Service-Optimization: Development von Shared-Control-Services und Center-of-Excellence-Models für Economies-of-Scale und Cost-Efficiency.\n\n🎯 ADVISORI's Cost-Intelligent Control-Architecture:\n• Lean Control-Design: Implementation von Lean-Control-Principles, die Waste eliminieren, Process-Efficiency maximieren und Value-Adding-Activities fokussieren.\n• Technology-Leverage-Strategies: Strategic-Use von RegTech, AI und Automation für Cost-Reduction, Efficiency-Gains und Accuracy-Improvement in Control-Processes.\n• Outsourcing-Optimization: Strategic-Analysis von Control-Outsourcing-Opportunities für Non-Core-Functions bei Retention von Strategic-Control-Capabilities.\n• Performance-Based-Contracts: Development von Performance-Based-Service-Agreements mit Control-Providers für Risk-Sharing und Outcome-Based-Pricing.\n• Continuous-Cost-Optimization: Establishment von Ongoing-Cost-Monitoring und Optimization-Programs für Sustainable-Cost-Control und Performance-Improvement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "In welcher Weise entwickelt ADVISORI ESG-integrierte Control-Frameworks und Sustainability-Controls, um C-Level-Führungskräften Competitive-Advantage durch ESG-Excellence und Stakeholder-Value-Creation zu verschaffen?",
        answer: "ESG-Integration in Banking-Controls ist nicht nur Regulatory-Requirement, sondern strategischer Competitive-Advantage und Stakeholder-Value-Driver. ADVISORI entwickelt ESG-integrierte Control-Frameworks, die C-Level-Führungskräften ESG-Excellence ermöglichen und Sustainability als Business-Enabler und Market-Differentiator positionieren.\n\n🌱 ESG-Control-Integration für Sustainable-Competitive-Advantage:\n• Environmental-Risk-Controls: Implementation von Climate-Risk-Controls, Carbon-Footprint-Monitoring und Green-Finance-Compliance für Environmental-Leadership und Regulatory-Preparedness.\n• Social-Impact-Measurement: Development von Social-Impact-Controls, Community-Investment-Tracking und Stakeholder-Engagement-Metrics für Social-License-to-Operate.\n• Governance-Excellence-Enhancement: Integration von ESG-Governance-Requirements in Traditional-Governance-Frameworks für Holistic-Governance-Excellence.\n• Sustainability-Reporting-Controls: Implementation von Automated-ESG-Reporting-Controls und Real-time-Sustainability-Dashboards für Transparency und Stakeholder-Communication.\n\n🏆 ADVISORI's ESG-Excellence Control-Framework:\n• Impact-Measurement-Systems: Development von Comprehensive-Impact-Measurement-Systems, die Environmental-, Social- und Economic-Impact quantifizieren und Strategic-Decision-Support liefern.\n• Stakeholder-Value-Optimization: Creation von Stakeholder-Value-Creation-Metrics und Multi-Stakeholder-Reporting für Enhanced-Stakeholder-Relations und Trust-Building.\n• ESG-Risk-Integration: Seamless-Integration von ESG-Risks in Traditional-Risk-Frameworks für Holistic-Risk-Management und Long-term-Sustainability.\n• Innovation-for-Sustainability: Establishment von Innovation-Controls für Sustainable-Product-Development, Green-Innovation und Circular-Economy-Initiatives.\n• ESG-Performance-Incentives: Development von ESG-Performance-Incentive-Systems für Management und Staff zur Cultural-Transformation und Behavioral-Change."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie etabliert ADVISORI Cyber-Resilience-Controls und Digital-Risk-Management-Frameworks, um C-Level-Führungskräften Confidence in der Digital-Transformation bei gleichzeitiger Cyber-Security-Excellence zu geben?",
        answer: "Digital-Transformation in Banking erfordert sophisticated Cyber-Resilience-Controls, die Innovation ermöglichen ohne Security zu kompromittieren. ADVISORI entwickelt Cyber-Resilience-Frameworks, die C-Level-Führungskräften Confidence in Digital-Initiatives geben und gleichzeitig robuste Cyber-Defense und Incident-Response-Capabilities sicherstellen.\n\n🔒 Cyber-Resilience für Secure Digital-Transformation:\n• Zero-Trust-Control-Architecture: Implementation von Zero-Trust-Security-Models in Control-Systems für Enhanced-Security bei Digital-Banking-Services und API-Based-Architectures.\n• Real-time-Threat-Detection: Development von AI-Powered-Threat-Detection und Real-time-Cyber-Monitoring für Proactive-Threat-Identification und Rapid-Response.\n• Incident-Response-Integration: Seamless-Integration von Cyber-Incident-Response in Business-Continuity-Controls für Minimized-Disruption und Fast-Recovery.\n• Third-Party-Cyber-Risk-Controls: Comprehensive-Third-Party-Cyber-Risk-Assessment und Vendor-Security-Controls für Supply-Chain-Cyber-Security.\n\n🛡️ ADVISORI's Digital-Resilience Control-Framework:\n• Digital-Asset-Protection: Implementation von Advanced-Digital-Asset-Protection-Controls für Customer-Data, Transaction-Systems und Intellectual-Property.\n• Automated-Security-Controls: Development von Automated-Security-Controls und Self-Healing-Systems für Reduced-Human-Error und Enhanced-Response-Speed.\n• Privacy-by-Design-Controls: Integration von Privacy-by-Design-Principles in alle Digital-Controls für GDPR-Compliance und Customer-Trust.\n• Continuous-Security-Testing: Establishment von Continuous-Security-Testing, Penetration-Testing und Vulnerability-Assessment für Ongoing-Security-Assurance.\n• Cyber-Skills-Development: Development von Cyber-Security-Capabilities in Control-Teams und Cross-Functional-Cyber-Awareness für Organization-Wide-Resilience."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie optimiert ADVISORI Regulatory-Change-Management und Adaptive-Compliance-Frameworks, um C-Level-Führungskräften Agilität bei regulatorischen Änderungen und Future-Readiness zu gewährleisten?",
        answer: "Regulatory-Landscape-Changes erfordern adaptive Control-Systems, die schnell auf neue Requirements reagieren können ohne Business-Disruption. ADVISORI entwickelt Regulatory-Change-Management-Frameworks, die C-Level-Führungskräften Confidence in Regulatory-Adaptability geben und gleichzeitig Business-Continuity und Competitive-Advantage sichern.\n\n📈 Adaptive-Compliance für Regulatory-Agility:\n• Regulatory-Horizon-Scanning: Implementation von Systematic-Regulatory-Monitoring und Early-Warning-Systems für Proactive-Identification von Regulatory-Changes und Impact-Assessment.\n• Modular-Control-Architecture: Development von Modular-Control-Systems, die Quick-Adaptation an New-Regulatory-Requirements ermöglichen ohne Core-System-Disruption.\n• Change-Impact-Assessment: Comprehensive-Change-Impact-Analysis-Frameworks für Rapid-Assessment von Regulatory-Changes auf Business-Operations und Control-Systems.\n• Agile-Implementation-Processes: Establishment von Agile-Implementation-Methodologies für Fast-Deployment von New-Controls und Regulatory-Requirements.\n\n🚀 ADVISORI's Future-Ready Compliance-Framework:\n• Predictive-Compliance-Analytics: Use von AI und Machine-Learning für Predictive-Analysis von Regulatory-Trends und Proactive-Compliance-Preparation.\n• Regulatory-Relationship-Management: Strategic-Regulatory-Relationship-Building für Early-Access zu Regulatory-Information und Influence on Regulatory-Development.\n• Cross-Jurisdictional-Coordination: Development von Cross-Border-Regulatory-Coordination-Mechanisms für Multi-Jurisdictional-Banking-Operations.\n• Innovation-Compliance-Balance: Creation von Innovation-Friendly-Compliance-Frameworks, die New-Business-Models und Digital-Innovation ermöglichen within Regulatory-Boundaries.\n• Continuous-Regulatory-Learning: Establishment von Learning-Organizations für Regulatory-Expertise-Development und Best-Practice-Sharing across the Industry."
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
