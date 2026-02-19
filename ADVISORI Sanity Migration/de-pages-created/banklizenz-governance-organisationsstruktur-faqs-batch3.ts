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
    console.log('Updating Banklizenz Governance & Organisationsstruktur page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-governance-organisationsstruktur' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-governance-organisationsstruktur" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI Governance-Strukturen, die optimale Board-Dynamics fördern und sicherstellen, dass Aufsichtsrat und Geschäftsleitung produktiv zusammenarbeiten, während regulatorische Independence gewährleistet wird?",
        answer: "Effektive Board-Governance ist das Herzstück erfolgreicher Banking-Institutionen und eine Schlüsselanforderung der BaFin. ADVISORI entwickelt Governance-Architekturen, die nicht nur formale Independence-Requirements erfüllen, sondern auch produktive Collaboration zwischen Aufsichtsrat und Management fördern und damit operative Excellence bei regulatorischer Compliance schaffen.\n\n🎯 Optimierte Board-Management-Dynamik:\n• Constructive Tension Design: Governance-Strukturen, die gesunde Herausforderung und kritische Oversight fördern, während sie Collaboration und Strategic Alignment unterstützen.\n• Information Flow Optimization: Systematische Information-Architectures, die Board-Members mit relevanten, zeitnahen und actionable Insights versorgen für informierte Decision-Making.\n• Expertise-Based Committee Structure: Strategic Committee-Design basierend auf Member-Expertise und Bank-Priorities für maximale Value-Add und Compliance-Coverage.\n• Decision Rights Clarity: Präzise Definition von Board vs. Management-Authorities zur Vermeidung von Overlap, Delays oder Accountability-Gaps.\n\n🏛️ ADVISORI's Board Excellence Framework:\n• Dynamic Board Composition: Strategische Board-Member-Selection und -Development-Pläne, die Expertise-Gaps addressieren und Diversity-of-Thought fördern.\n• Performance-Driven Board Processes: Governance-Prozesse mit klaren Performance-Metrics, Regular Board-Evaluations und Continuous-Improvement-Mechanismen.\n• Technology-Enhanced Board Engagement: Digital Board-Portals und -Analytics, die Remote-Participation, Real-time-Information-Access und Data-Driven-Oversight ermöglichen.\n• Stakeholder-Aligned Board Accountability: Governance-Frameworks, die Board-Performance mit Stakeholder-Value-Creation verbinden und Multi-Stakeholder-Interests balancieren.\n• Crisis-Ready Board Governance: Board-Protocols für Crisis-Decision-Making, Emergency-Authorities und Rapid-Response-Capabilities bei External-Shocks oder Regulatory-Interventions."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "In welcher Weise strukturiert ADVISORI Internal Audit und Compliance-Funktionen innerhalb der Governance-Architektur, um Three-Lines-of-Defense optimal zu implementieren und regulatorische Excellence zu gewährleisten?",
        answer: "Das Three-Lines-of-Defense-Modell ist fundamental für robuste Banking-Governance und eine explizite BaFin-Anforderung. ADVISORI entwickelt präzise strukturierte Defense-Lines, die nicht nur regulatorische Compliance sicherstellen, sondern auch als Strategic-Intelligence-System für Risk-Management und Operational-Excellence fungieren.\n\n🛡️ Strategic Three-Lines Implementation:\n• First Line Empowerment: Stärkung der operativen Business-Lines durch Risk-Ownership, Embedded-Controls und Accountability-Frameworks, die Ownership und Performance fördern.\n• Second Line Intelligence: Compliance- und Risk-Management-Funktionen als Strategic-Partners, die nicht nur Monitoring betreiben, sondern auch Advisory-Services und Forward-Looking-Risk-Intelligence bereitstellen.\n• Third Line Value-Add: Internal-Audit als Independent-Assurance-Provider und Organizational-Effectiveness-Consultant, der über Compliance hinaus Process-Optimization und Governance-Enhancement treibt.\n• Cross-Line Coordination: Sophisticated-Coordination-Mechanisms zwischen den Lines für Information-Sharing, Collaborative-Planning und Integrated-Risk-Assessment.\n\n🎯 ADVISORI's Defense-Excellence-Architektur:\n• Risk-Integrated Business Processes: Embedding von Risk-Controls direkt in Business-Workflows für Real-time-Risk-Management ohne Operational-Friction.\n• Technology-Enabled Defense: Integration von RegTech, AI-Based-Monitoring und Automated-Control-Testing für Enhanced-Detection-Capabilities und Efficiency-Gains.\n• Dynamic Defense Calibration: Adaptive Defense-Intensity basierend auf Risk-Appetite, Business-Growth und Regulatory-Environment für optimale Resource-Allocation.\n• Performance-Driven Defense Metrics: KPIs und Dashboards, die Defense-Effectiveness messen und Continuous-Improvement in Risk-Management und Compliance-Quality treiben.\n• Board-Level Defense Oversight: Governance-Strukturen für Board-Level-Oversight der Three-Lines, einschließlich Independent-Reporting-Lines und Executive-Session-Protocols."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI Cybersecurity-Governance und Digital-Risk-Management in die Banking-Organisationsstruktur und stellt sicher, dass Cyber-Resilience auf C-Level-Priorität behandelt wird?",
        answer: "Cybersecurity ist von einer IT-Funktion zu einem strategischen Business-Risk geworden, der Board-Level-Attention und C-Suite-Leadership erfordert. ADVISORI entwickelt Cyber-Governance-Strukturen, die Cybersecurity als strategische Capability positionieren und Enterprise-wide Cyber-Resilience durch integrierte Governance-Prozesse schaffen.\n\n🔒 Strategic Cyber-Governance Integration:\n• C-Level Cyber Leadership: Etablierung von Chief Information Security Officer (CISO)-Rollen mit direktem Board-Access und C-Suite-Integration für Strategic-Cyber-Decision-Making.\n• Board-Level Cyber Oversight: Cyber-Committee-Strukturen oder Integration in Risk-Committees mit spezialisierten Cyber-Expertise und Regular-Threat-Intelligence-Briefings.\n• Business-Integrated Cyber Risk Management: Integration von Cyber-Risk-Assessments in Business-Planning, Investment-Decisions und Strategic-Initiatives für Holistic-Risk-Consideration.\n• Stakeholder Cyber Communication: Governance-Frameworks für Cyber-Incident-Communication mit Regulators, Customers, Partners und Public-Stakeholders.\n\n🛡️ ADVISORI's Cyber-Resilient Governance Design:\n• Threat-Intelligence-Driven Governance: Integration von Real-time-Threat-Intelligence in Executive-Dashboards und Board-Reports für Proactive-Cyber-Response-Planning.\n• Incident-Response Governance: Pre-Established Incident-Response-Governance mit Clear-Authorities, Communication-Protocols und Decision-Escalation-Paths für Rapid-Crisis-Response.\n• Third-Party Cyber Risk Integration: Governance-Prozesse für Vendor-Cyber-Risk-Assessment, Supply-Chain-Security-Monitoring und Partner-Cyber-Due-Diligence.\n• Regulatory Cyber Compliance: Governance-Strukturen für Compliance mit DORA, NIS2 und anderen Cyber-Regulations, einschließlich Required-Reporting und Audit-Readiness.\n• Cyber-Investment Governance: Strategic-Frameworks für Cyber-Security-Investment-Decisions, Technology-Vendor-Selection und Cyber-Capability-Development basierend auf Risk-Appetite und Business-Strategy."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie strukturiert ADVISORI Data-Governance und Information-Management innerhalb der Banking-Organisationsstruktur, um sowohl BCBS 239-Compliance als auch Data-Driven-Business-Strategy zu ermöglichen?",
        answer: "Data ist das strategische Asset moderner Banking-Institutionen und erfordert Enterprise-Level-Governance, die sowohl regulatorische Compliance (BCBS 239, GDPR) als auch Business-Value-Creation unterstützt. ADVISORI entwickelt Data-Governance-Architekturen, die Data-Quality, Data-Privacy und Data-Analytics in einer integrierten Organizational-Structure vereinen.\n\n📊 Strategic Data Governance Architecture:\n• Chief Data Officer Leadership: Etablierung von CDO-Rollen mit Enterprise-Responsibility für Data-Strategy, Data-Quality und Data-Monetization sowie direkter C-Suite-Integration.\n• Data-Stewardship Network: Distributed-Data-Stewardship-Model mit Business-Domain-Experts als Data-Owners und Clear-Accountability für Data-Quality und Data-Lifecycle-Management.\n• Cross-Functional Data Committees: Data-Governance-Committees mit Representatives aus Risk, Compliance, IT, Business-Lines und Legal für Holistic-Data-Decision-Making.\n• Data-Ethics and Privacy Governance: Specialized-Governance für Ethical-Data-Use, Customer-Privacy-Protection und Regulatory-Data-Compliance.\n\n🎯 ADVISORI's Data-Excellence Framework:\n• Business-Aligned Data Strategy: Data-Governance-Strukturen, die Data-Initiatives direkt mit Business-Objectives verbinden und Data-ROI maximieren.\n• Automated Data Governance: Technology-Enabled Data-Lineage-Tracking, Data-Quality-Monitoring und Policy-Enforcement für Scalable-Data-Management.\n• Risk-Integrated Data Management: Integration von Data-Risk-Assessment in Enterprise-Risk-Management und Data-Incident-Response-Capabilities.\n• Innovation-Enabling Data Governance: Governance-Frameworks, die Data-Innovation und Advanced-Analytics ermöglichen, während Regulatory-Boundaries und Privacy-Requirements respektiert werden.\n• Stakeholder Data Transparency: Governance-Prozesse für Data-Transparency gegenüber Regulators, Audit-Readiness und Customer-Data-Rights-Management gemäß GDPR und anderen Privacy-Regulations."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
