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
    console.log('Updating Datenschutzkoordinator Schulung page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI Schulungskonzepte, die Datenschutzkoordinatoren zu strategischen Change Agents für organisationale Datenschutz-Kultur und Mitarbeiter-Awareness transformieren?",
        answer: "Datenschutz-Excellence erfordert eine fundamentale Kultur-Transformation, die über reine Compliance hinausgeht und Privacy-Mindset in die DNA der Organisation einbettet. ADVISORI entwickelt Schulungsprogramme, die Datenschutzkoordinatoren zu Cultural Change Leaders ausbilden, die organisation-wide Privacy-Excellence implementieren und nachhaltige Verhaltensänderungen bewirken.\n\n🎭 Cultural Transformation Leadership:\n• Psychology-Based Change Management: Training in Behavioral Science-Prinzipien für effektive Privacy-Awareness-Kampagnen, die intrinsische Motivation für Datenschutz-Compliance schaffen und von Fear-Based zu Value-Based Approaches transformieren.\n• Executive Influence Strategies: Entwicklung von Koordinatoren zu C-Level Privacy Advisors, die Board-Level Buy-in für Datenschutz-Investitionen sichern und Privacy als Strategic Priority etablieren.\n• Cross-Functional Leadership Excellence: Schulung in Department-übergreifender Zusammenarbeit mit IT, Legal, Marketing und Operations für holistische Privacy-by-Design-Implementation.\n• Communication Excellence Framework: Training in zielgruppenspezifischer Kommunikation von Complex Privacy Concepts für verschiedene Stakeholder-Ebenen und Fachbereiche.\n\n🏗️ Sustainable Privacy Culture Building:\n• Gamification und Engagement Strategies: Entwicklung innovativer Schulungsformate mit Privacy Champions Programs, Interactive Learning Modules und Recognition Systems für nachhaltige Mitarbeiter-Motivation.\n• Micro-Learning Architecture: Implementation von Just-in-Time Privacy Training durch Mobile Learning, Contextual Nudges und Workflow-integrierte Datenschutz-Guidance.\n• Feedback Loop Optimization: Schulung in Continuous Improvement-Prozessen für Privacy Training-Effectiveness mit Data-driven Optimization und Behavioral Analytics.\n• Crisis-to-Opportunity Transformation: Training in der Nutzung von Privacy Incidents als Learning Opportunities und Culture Strengthening Moments.\n• Future-Proofing Mindset Development: Aufbau von Change-Ready Privacy Teams, die proaktiv auf regulatorische Evolution und Technology Shifts reagieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welcher Weise strukturiert ADVISORI Advanced Training-Module für Datenschutzkoordinatoren, um komplexe Banking-Technologien wie AI, Blockchain und Open Banking privacy-compliant zu integrieren?",
        answer: "Die Integration emerging Technologies in Banking-Services erfordert sophisticated Privacy-Governance, die traditionelle DSGVO-Ansätze überschreitet. ADVISORI entwickelt cutting-edge Schulungsmodule, die Datenschutzkoordinatoren zu Technology Privacy Specialists ausbilden, die Innovation enablen while regulatory excellence maintainen.\n\n🤖 AI & Machine Learning Privacy Mastery:\n• Algorithmic Transparency Requirements: Advanced Training in AI-Explainability, Algorithm Auditing und Machine Learning-Bias Detection für DSGVO-konforme AI-Services wie Credit Scoring und Fraud Detection.\n• Automated Decision-Making Compliance: Spezialisierte Schulung in Article 22 GDPR-Implementation für AI-driven Banking-Services mit Human-in-the-Loop-Prozessen und Right-to-Explanation-Frameworks.\n• Privacy-Preserving AI Techniques: Training in Differential Privacy, Federated Learning und Homomorphic Encryption für AI-Innovation ohne Privacy-Compromise.\n• AI Ethics Integration: Entwicklung von Koordinatoren zu AI Ethics Officers, die Algorithmic Fairness, Discrimination Prevention und Responsible AI-Governance implementieren.\n\n⛓️ Blockchain & DLT Privacy Excellence:\n• Pseudonymization vs. Anonymization: Advanced Training in Blockchain-Privacy-Techniques, Zero-Knowledge Proofs und Privacy Coins für DSGVO-compliant DLT-Implementation.\n• Smart Contract Privacy Design: Schulung in Privacy-by-Design für Smart Contracts, Immutability vs. Right-to-Erasure-Conflicts und GDPR-Blockchain-Reconciliation.\n• Cross-Border DLT Compliance: Training in international Blockchain-Governance, Jurisdiction-Shopping-Prevention und Global DLT-Privacy-Standards.\n• Decentralized Identity Management: Entwicklung von Expertise in Self-Sovereign Identity, Verifiable Credentials und Decentralized Privacy-Preservation für Next-Generation Banking-Identity.\n• Crypto-Asset Privacy Governance: Spezialisierte Schulung in Cryptocurrency-Privacy, AML-Privacy-Balance und Digital Asset-Compliance für Banking-Crypto-Services."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie optimiert ADVISORI die Schulung von Datenschutzkoordinatoren für internationale Banking-Operationen und Cross-Border Data Governance in Multi-Jurisdictional Environments?",
        answer: "Globale Banking-Operationen erfordern sophisticated Cross-Border Privacy-Governance, die verschiedene Rechtssysteme harmonisiert und internationale Compliance sicherstellt. ADVISORI entwickelt Global Privacy Leadership-Programme, die Datenschutzkoordinatoren zu International Compliance Experts ausbilden, die Multi-Jurisdictional Banking erfolgreich navigieren.\n\n🌍 Global Privacy Architecture Mastery:\n• Multi-Jurisdictional Compliance Frameworks: Advanced Training in GDPR-CCPA-LGPD-Harmonization, Adequacy Decision-Navigation und Global Privacy-Standards für internationale Banking-Expansion.\n• Cross-Border Data Transfer Excellence: Spezialisierte Schulung in Standard Contractual Clauses, Binding Corporate Rules und Transfer Impact Assessments für komplexe Banking-Data-Flows.\n• Regulatory Arbitrage Prevention: Training in Global Compliance-Strategies, die Jurisdiction-Shopping verhindern und consistent Privacy-Standards across geographies sicherstellen.\n• Cultural Adaptation Strategies: Entwicklung von Koordinatoren, die Privacy-Governance an lokale Cultural Contexts anpassen while maintaining global consistency.\n\n🏛️ International Regulatory Interface Excellence:\n• Multi-Regulator Relationship Management: Schulung in simultaner Kommunikation mit BaFin, ICO, CNIL und anderen Global Privacy Authorities für streamlined regulatory interactions.\n• Global Incident Response Coordination: Training in Cross-Border Breach Notification-Prozessen, Time Zone-Management und Multi-Jurisdiction Crisis Communication.\n• International Privacy Diplomacy: Entwicklung von Koordinatoren zu Privacy Diplomats, die internationale Banking-Partnerships facilitaten und Cross-Border Privacy-Agreements negotiaten.\n• Emerging Market Privacy Navigation: Spezialisierte Schulung für Privacy-Compliance in developing regulatory frameworks und Early-Stage Privacy Jurisdictions.\n• Global Privacy Trend Monitoring: Training in International Privacy-Evolution-Tracking, Regulatory Forecasting und Proactive Compliance-Positioning für Global Market Leadership."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI Incident Response und Crisis Management-Kompetenzen bei Datenschutzkoordinatoren, um C-Level-Reputationsrisiken zu minimieren und Recovery-Strategien zu optimieren?",
        answer: "Privacy Incidents können innerhalb von Stunden Unternehmenswerte in Milliardenhöhe vernichten und dauerhafte Reputationsschäden verursachen. ADVISORI entwickelt Crisis Management Excellence-Programme, die Datenschutzkoordinatoren zu Crisis Response Leaders ausbilden, die nicht nur Damage Control betreiben, sondern Incidents in Trust-Building Opportunities transformieren.\n\n🚨 Advanced Crisis Response Leadership:\n• Golden Hour Crisis Management: Training in den ersten kritischen Stunden nach einem Privacy Incident mit Stakeholder-Triage, Communication-Strategies und Decision-Making under extreme pressure.\n• C-Level Crisis Communication: Entwicklung von Koordinatoren zu Crisis Advisors, die Board-Level Briefings durchführen, Executive Decision-Support leisten und Strategic Crisis-Navigation ermöglichen.\n• Media Relations Excellence: Spezialisierte Schulung in Privacy-Crisis-Communications, Message Control und Narrative Management für Reputation Protection und Recovery.\n• Legal-Regulatory Interface Optimization: Training in Crisis-Situation Legal Coordination, Regulatory Notification-Strategies und Investigation-Support für minimized legal exposure.\n\n🛡️ Proactive Crisis Prevention & Recovery:\n• Predictive Risk Intelligence: Schulung in Early Warning Systems, Risk Pattern Recognition und Proactive Threat Detection für Crisis Prevention und Mitigation.\n• Stakeholder Confidence Rebuilding: Training in Post-Crisis Trust Restoration-Strategies, Transparency Initiatives und Long-term Reputation Recovery für sustainable stakeholder relationships.\n• Crisis-to-Competitive-Advantage Transformation: Entwicklung von Koordinatoren, die Privacy Incidents als Opportunities für demonstrating superior crisis response und establishing market leadership nutzen.\n• Business Continuity Integration: Schulung in Privacy-Crisis-Business-Impact-Minimization, Operations Continuity und Revenue Protection during crisis situations.\n• Post-Crisis Excellence Implementation: Training in Post-Incident Process Optimization, Culture Strengthening und Resilience Building für Future Crisis Prevention und Organizational Learning."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
