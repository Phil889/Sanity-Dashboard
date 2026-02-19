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
    console.log('Updating ESG Rating page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-rating' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-rating" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI branchenspezifische ESG-Herausforderungen und welche sektoralen Best Practices nutzen wir für maximale Rating-Performance?",
        answer: "Jede Branche steht vor einzigartigen ESG-Herausforderungen und -Opportunities. Während Finanzdienstleister auf Governance und Climate Risk fokussieren müssen, stehen bei Industrieunternehmen Environmental Impact und Supply Chain-Themen im Vordergrund. ADVISORI bringt tiefgreifende Sector-Expertise mit, um branchenspezifische ESG-Strategien zu entwickeln, die sowohl Rating-Excellence als auch Business-Performance maximieren.\n\n🏭 Sector-Specific ESG Excellence Strategies:\n• Industry Materiality Mapping: Detaillierte Analyse der ESG-Themen mit der höchsten Relevanz und Impact für Ihre spezifische Branche und Geschäftsmodell.\n• Peer Benchmarking Intelligence: Systematischer Vergleich mit Branchenführern zur Identifikation von Performance-Gaps und Best Practice-Opportunities.\n• Regulatory Landscape Navigation: Expertise in branchenspezifischen ESG-Regulierungen und Compliance-Anforderungen für proaktive Risikominimierung.\n• Sector-Leading Innovation: Entwicklung innovativer ESG-Ansätze, die Branchenstandards setzen und Competitive Advantages schaffen.\n\n🎯 ADVISORI's Industry-Focused Approach:\n• Financial Services Excellence: Spezialisierung auf Climate Risk Disclosure, Sustainable Finance Integration und Enhanced Corporate Governance für Banken und Versicherungen.\n• Manufacturing Sustainability: Fokus auf Circular Economy, Carbon Footprint Reduction und Supply Chain Transparency für Industrieunternehmen.\n• Technology Sector Leadership: Expertise in Data Privacy, Digital Inclusion und Responsible AI für Tech-Unternehmen.\n• Healthcare & Life Sciences: Konzentration auf Patient Safety, Access to Healthcare und Ethical Research Practices für Pharma und Medizintechnik."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Supply Chain ESG in unseren Ratings und wie hilft ADVISORI bei der Optimierung unserer Lieferkettenperformance?",
        answer: "Supply Chain ESG ist einer der am schnellsten wachsenden Bewertungsfaktoren in modernen ESG Ratings. Rating-Agenturen erkennen zunehmend, dass Scope 3-Emissionen und Lieferketten-Risiken oft 70-90% der gesamten ESG-Impacts ausmachen. ADVISORI entwickelt umfassende Supply Chain ESG-Strategien, die nicht nur Rating-Verbesserungen erzielen, sondern auch operative Effizienz und Risikomanagement stärken.\n\n🔗 Supply Chain ESG Transformation Excellence:\n• End-to-End Visibility Creation: Aufbau transparenter Supply Chain-Mapping-Systeme für vollständige Sichtbarkeit Ihrer ESG-Impacts über alle Tier-Levels hinweg.\n• Supplier ESG Assessment & Development: Implementierung systematischer Supplier-Bewertungs- und -Entwicklungsprogramme für kontinuierliche Performance-Verbesserung.\n• Risk Mitigation & Compliance: Identifikation und Minimierung von ESG-Risiken in der Lieferkette durch proaktive Due Diligence und Monitoring-Systeme.\n• Circular Economy Integration: Entwicklung von Closed-Loop Supply Chain-Modellen für Enhanced Resource Efficiency und Waste Reduction.\n\n⚡ ADVISORI's Supply Chain Excellence Platform:\n• Technology-Enabled Transparency: Nutzung von Blockchain, IoT und AI für Real-Time Supply Chain Monitoring und Automated ESG-Compliance-Tracking.\n• Collaborative Improvement Programs: Aufbau von Partnership-Programmen mit Key Suppliers für Shared ESG-Goals und Mutual Performance Enhancement.\n• Scope 3 Emission Management: Systematische Erfassung, Reduction und Reporting von indirekten Emissionen über die gesamte Wertschöpfungskette.\n• Supply Chain Innovation Catalyst: Entwicklung innovativer Supplier-Partnerships für Breakthrough ESG-Solutions und Competitive Differentiation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie bereitet ADVISORI unser Unternehmen auf ESG-bezogene M&A-Aktivitäten vor und welche Due Diligence-Prozesse sind erforderlich?",
        answer: "ESG-Faktoren werden zunehmend zu kritischen Werttreibern in M&A-Transaktionen. ESG-Risiken können Deal-Values erheblich beeinflussen, während ESG-Opportunities neue Synergien schaffen. ADVISORI entwickelt comprehensive ESG M&A-Strategien, die sowohl bei Akquisitionen als auch bei Verkaufsprozessen Value Creation maximieren und Risiken minimieren.\n\n💼 ESG-Driven M&A Excellence Strategy:\n• Pre-Transaction ESG Readiness: Optimierung Ihrer ESG-Performance vor Verkaufsprozessen für maximale Valuation und Buyer-Appeal.\n• Comprehensive ESG Due Diligence: Entwicklung rigoroser ESG-Assessment-Frameworks für Target-Evaluation und Risk-Identification in Akquisitionsprozessen.\n• Post-Merger ESG Integration: Systematische Integration von ESG-Standards und -Prozessen bei Post-Merger-Integration für Enhanced Combined Entity Performance.\n• ESG Synergy Identification: Identifikation und Realisierung von ESG-basierten Synergien, die zusätzliche Value Creation ermöglichen.\n\n🎯 ADVISORI's M&A ESG Integration Framework:\n• Value-Destructive Risk Mitigation: Frühe Identifikation von ESG-Risiken, die Transaktions-Values bedrohen oder Deal-Completion gefährden könnten.\n• Strategic ESG Opportunity Assessment: Bewertung von ESG-Opportunities im Target-Unternehmen für Enhanced Business Case Development.\n• Cultural Integration Planning: Entwicklung von Change Management-Strategien für harmonische ESG-Culture-Integration bei M&A-Aktivitäten.\n• Stakeholder Communication Strategy: Proactive Communication-Planning für ESG-Aspekte der Transaktion an alle relevanten Stakeholder-Gruppen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer ESG-Governance-Struktur, die sowohl Rating-Agenturen als auch institutionelle Investoren überzeugt?",
        answer: "ESG Governance ist das Fundament glaubwürdiger ESG-Performance und ein kritischer Bewertungsfaktor für Rating-Agenturen und Investoren. Schwache Governance-Strukturen können selbst exzellente Environmental und Social Performance untergraben. ADVISORI entwickelt robuste ESG-Governance-Frameworks, die Accountability, Transparency und Strategic Integration gewährleisten.\n\n🏛️ World-Class ESG Governance Architecture:\n• Board-Level ESG Integration: Etablierung effektiver Board-Oversight für ESG-Themen durch Specialized Committees, Expert Directors und Regular ESG-Reporting.\n• Executive Accountability Systems: Entwicklung von ESG-KPI-Integration in Executive Compensation und Performance Management für authentische Leadership-Commitment.\n• Risk Management Integration: Einbindung von ESG-Risiken in Enterprise Risk Management-Systeme für comprehensive Risk Assessment und Mitigation.\n• Stakeholder Engagement Governance: Aufbau systematischer Stakeholder-Consultation-Prozesse für Enhanced Legitimacy und Informed Decision-Making.\n\n⚡ ADVISORI's Governance Excellence Framework:\n• Institutional-Grade Transparency: Entwicklung von Governance-Disclosure-Standards, die institutionelle Investor-Erwartungen übertreffen und Vertrauen schaffen.\n• Continuous Improvement Mechanisms: Etablierung von Regular Governance-Reviews und Improvement-Processes für Dynamic Adaptation an Best Practices.\n• Cross-Functional Integration: Aufbau von ESG-Governance-Strukturen, die nahtlos mit bestehenden Corporate Governance-Frameworks integriert sind.\n• Performance Monitoring & Reporting: Implementation von Real-Time ESG-Governance-Dashboards für Enhanced Visibility und Proactive Management."
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
