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
    console.log('Updating BSI Standards Kompendium page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-standards-kompendium' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-standards-kompendium" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI die Herausforderungen der digitalen Transformation bei gleichzeitiger BSI Standards Kompendium-Konformität und welche Innovationsstrategien werden verfolgt?",
        answer: "Die digitale Transformation erfordert einen Balanceakt zwischen Innovation und Sicherheit. ADVISORI hat spezialisierte Ansätze entwickelt, um die BSI Standards Kompendium-Implementierung als Enabler für digitale Innovation zu positionieren, anstatt sie als Hemmnis zu betrachten. Unser Ansatz ermöglicht es Organisationen, sicher und BSI-konform zu innovieren.\n\n🚀 Digital Transformation Excellence mit BSI-Konformität:\n• Innovation-Security Integration: Nahtlose Integration von BSI-Standards in agile Entwicklungsprozesse und DevSecOps-Pipelines.\n• Secure-by-Design Transformation: Einbettung von BSI-Prinzipien in die DNA neuer digitaler Geschäftsmodelle und Technologieplattformen.\n• Cloud-Native Security: BSI-konforme Implementation von Cloud-nativen Architekturen, Microservices und Container-Technologien.\n• Digital Platform Security: Aufbau sicherer, skalierbarer digitaler Plattformen unter strikter Einhaltung aller BSI-Standards.\n\n💡 Innovation Enablement Strategy:\n• Regulatory Innovation Sandbox: Schaffung kontrollierter Umgebungen für sichere Innovation unter BSI-Standards-Überwachung.\n• Agile Security Framework: Entwicklung agiler Sicherheitsprozesse, die Innovationsgeschwindigkeit mit BSI-Compliance vereinen.\n• Technology Experimentation: Sichere Evaluation und Pilotierung neuer Technologien unter BSI-Standards-Konformität.\n• Innovation Risk Management: Strukturierte Risikobewertung für innovative Technologien und Geschäftsmodelle.\n\n🔄 Continuous Innovation mit Compliance:\n• Adaptive Standards Implementation: Flexible BSI-Standards-Anwendung, die sich an neue Technologien und Geschäftsanforderungen anpasst.\n• Innovation Governance: Etablierung von Governance-Strukturen, die Innovation fördern und gleichzeitig BSI-Compliance gewährleisten.\n• Digital Ecosystem Security: Sicherung komplexer digitaler Ökosysteme mit Partnern, APIs und Third-Party-Integrationen.\n• Future-Proof Architecture: Design von Sicherheitsarchitekturen, die zukünftige Innovationen nahtlos integrieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Ansätze verfolgt ADVISORI bei der BSI Standards Kompendium-Implementierung für Merger & Acquisitions und wie wird Security Due Diligence optimiert?",
        answer: "Merger & Acquisitions-Aktivitäten stellen einzigartige Herausforderungen für die IT-Sicherheit dar. Die Integration verschiedener Sicherheitsarchitekturen, Standards und Kulturen erfordert spezialisierte Expertise. ADVISORI hat bewährte Methoden für BSI Standards Kompendium-konforme M&A-Integration entwickelt.\n\n🔍 Security Due Diligence Excellence:\n• Comprehensive Security Assessment: Vollständige Bewertung der Zielorganisation gegen alle BSI-Standards-Anforderungen.\n• Risk Quantification: Präzise Quantifizierung von Cyber-Risiken und deren Auswirkungen auf den Transaktionswert.\n• Integration Complexity Analysis: Detaillierte Analyse der Integrationskomplexität verschiedener Sicherheitsarchitekturen.\n• Compliance Gap Assessment: Identifikation und Bewertung von Compliance-Lücken in der Zielorganisation.\n\n🏗️ Post-Merger Integration Strategy:\n• Unified Security Architecture: Entwicklung einer einheitlichen BSI-konformen Sicherheitsarchitektur für die kombinierte Organisation.\n• Cultural Integration: Harmonisierung verschiedener Sicherheitskulturen und -praktiken unter BSI-Standards-Führung.\n• Phased Integration Roadmap: Strukturierte Integration der Sicherheitssysteme ohne Disruption laufender Geschäftsprozesse.\n• Stakeholder Alignment: Abstimmung aller Stakeholder auf gemeinsame BSI-Standards-Ziele und -Verfahren.\n\n⚡ Accelerated Value Realization:\n• Synergy Optimization: Identifikation und Realisierung von Sicherheits-Synergien durch BSI-Standards-Harmonisierung.\n• Cost Optimization: Eliminierung redundanter Sicherheitssysteme und -prozesse durch einheitliche BSI-Implementation.\n• Risk Mitigation: Schnelle Identifikation und Adressierung kritischer Sicherheitsrisiken in der Post-Merger-Phase.\n• Competitive Advantage: Nutzung überlegener BSI-Standards-Konformität als Differenzierungsmerkmal im Markt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie gewährleistet ADVISORI Business Resilience und Continuity während kritischer BSI Standards Kompendium-Implementierungsphasen in hochverfügbaren Umgebungen?",
        answer: "Hochverfügbare Umgebungen können sich keine Ausfallzeiten oder Leistungseinbußen während der BSI Standards Kompendium-Implementierung leisten. ADVISORI hat spezialisierte Ansätze entwickelt, um selbst die komplexesten Sicherheitstransformationen ohne Beeinträchtigung kritischer Geschäftsprozesse durchzuführen.\n\n🔒 Zero-Disruption Implementation Excellence:\n• Live System Migration: Nahtlose Migration kritischer Systeme zu BSI-konformen Architekturen ohne Ausfallzeiten.\n• Parallel Implementation: Parallele Implementierung neuer Sicherheitsarchitekturen mit graduellem Übergang.\n• Fallback Strategy: Umfassende Fallback-Strategien für jeden Implementierungsschritt zur Risikominimierung.\n• Real-Time Monitoring: Kontinuierliche Überwachung aller Systeme während der Implementierung für sofortige Reaktion auf Anomalien.\n\n⚡ Business Continuity Assurance:\n• Critical Process Mapping: Detaillierte Kartierung aller kritischen Geschäftsprozesse und deren Sicherheitsanforderungen.\n• Service Level Maintenance: Aufrechterhaltung aller Service Level Agreements während der gesamten Implementierungsphase.\n• Incident Response Readiness: Enhanced Incident Response-Kapazitäten während kritischer Implementierungsphasen.\n• Stakeholder Communication: Proaktive Kommunikation mit allen Stakeholdern über Implementierungsfortschritte und potentielle Auswirkungen.\n\n🛡️ Risk-Minimized Transformation:\n• Phased Rollback Capability: Möglichkeit zur schrittweisen Rücknahme von Implementierungsschritten bei unvorhergesehenen Problemen.\n• Redundancy Maintenance: Aufrechterhaltung aller Redundanzsysteme während der Transformation.\n• Performance Optimization: Kontinuierliche Optimierung der Systemleistung während der BSI-Standards-Implementation.\n• Quality Gates: Strukturierte Qualitätsprüfungen vor jedem kritischen Implementierungsschritt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielen ESG-Kriterien (Environmental, Social, Governance) bei der ADVISORI BSI Standards Kompendium-Implementierung und wie wird nachhaltige IT-Sicherheit gewährleistet?",
        answer: "ESG-Kriterien gewinnen in der modernen Unternehmensführung zunehmend an Bedeutung. ADVISORI integriert Nachhaltigkeitsaspekte systematisch in die BSI Standards Kompendium-Implementierung und schafft dabei eine IT-Sicherheitsarchitektur, die nicht nur technisch exzellent, sondern auch ökologisch und sozial verantwortlich ist.\n\n🌱 Environmental Excellence in IT Security:\n• Green Security Architecture: Entwicklung energieeffizienter Sicherheitsarchitekturen, die CO2-Fußabdruck minimieren ohne Kompromisse bei der BSI-Konformität.\n• Sustainable Technology Choices: Bevorzugung umweltfreundlicher Technologien und Anbieter bei der BSI-Standards-Implementation.\n• Carbon-Neutral Operations: Strategien zur Erreichung CO2-neutraler IT-Sicherheitsoperationen durch optimierte Prozesse und Technologien.\n• Circular Economy Integration: Implementierung von Kreislaufwirtschaftsprinzipien in der IT-Sicherheitsarchitektur.\n\n👥 Social Responsibility in Cybersecurity:\n• Inclusive Security Design: Entwicklung BSI-konformer Sicherheitslösungen, die Barrierefreiheit und Inklusion fördern.\n• Digital Divide Mitigation: Beitrag zur Reduzierung digitaler Ungleichheit durch zugängliche und sichere IT-Lösungen.\n• Community Impact: Positive Auswirkungen der BSI-Standards-Implementation auf lokale Gemeinschaften und Stakeholder.\n• Ethical Technology Use: Sicherstellung ethischer Technologienutzung in allen BSI-konformen Implementierungen.\n\n🏛️ Governance Excellence mit Nachhaltigkeitsfokus:\n• ESG-Integrated Risk Management: Integration von ESG-Risiken in die BSI-Standards-konforme Risikomanagement-Strategie.\n• Sustainable Supplier Management: Bevorzugung nachhaltiger und verantwortlicher Technologieanbieter für BSI-Implementierungen.\n• Transparency and Reporting: Umfassende Berichterstattung über Nachhaltigkeitsaspekte der IT-Sicherheitsarchitektur.\n• Long-term Value Creation: Fokus auf langfristige Wertschöpfung durch nachhaltige und BSI-konforme Sicherheitslösungen."
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
