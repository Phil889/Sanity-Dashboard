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
    console.log('Updating KRITIS Regelmäßige Tests & Audits page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-regelmaessige-tests-audits' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-regelmaessige-tests-audits" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann ADVISORI dabei helfen, KRITIS-Test- und Audit-Programme als Treiber für digitale Transformation und Technologie-Modernisierung zu nutzen?",
        answer: "ADVISORI positioniert KRITIS-Tests als strategische Katalysatoren für digitale Transformation, die gleichzeitig Compliance-Anforderungen erfüllen und Modernisierungsinitiativen vorantreiben. Unser Ansatz nutzt regulatorische Notwendigkeiten als Hebel für umfassende technologische und organisatorische Evolution.\n\n🚀 Digital Transformation durch Compliance:\n• Legacy System Modernization: KRITIS-Tests identifizieren systematisch veraltete Systeme und schaffen Business Cases für strategische IT-Modernisierung mit Cloud-First-Ansätzen.\n• API-First Security Architecture: Entwicklung moderner, API-basierter Sicherheitsarchitekturen, die sowohl Compliance erfüllen als auch neue digitale Geschäftsmodelle ermöglichen.\n• Zero-Trust Implementation: Nutzung von KRITIS-Anforderungen zur Implementierung fortschrittlicher Zero-Trust-Architekturen, die höchste Sicherheit mit maximaler Flexibilität verbinden.\n• DevSecOps Integration: Einbettung von Compliance-Tests in moderne Entwicklungsprozesse für kontinuierliche Sicherheit und beschleunigte Innovation.\n\n🔧 Technology Modernization Enablement:\n• Cloud Security Validation: Entwicklung Cloud-nativer Test-Strategien, die sichere Migration kritischer Workloads ermöglichen und regulatorische Compliance gewährleisten.\n• AI/ML Security Testing: Spezielle Test-Protokolle für KI-gestützte Systeme, die Innovation fördern und gleichzeitig kritische Infrastrukturen schützen.\n• IoT/OT Integration Testing: Sichere Integration von Internet-of-Things und Operational Technology in kritische Infrastrukturen durch spezialisierte Test-Verfahren.\n• Blockchain Compliance Validation: Bewertung und Validierung von Blockchain-basierten Lösungen für kritische Infrastrukturen unter KRITIS-Gesichtspunkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Vorteile bietet ADVISORI bei der Koordination internationaler KRITIS-Test- und Audit-Anforderungen für global agierende Unternehmen?",
        answer: "ADVISORI bietet spezialisierte Expertise für die Koordination komplexer, internationaler KRITIS-Anforderungen und ermöglicht global agierenden Unternehmen eine einheitliche, effiziente Compliance-Strategie. Unser internationales Netzwerk und tiefe Regulierungsexpertise schaffen Synergien zwischen verschiedenen nationalen Anforderungen.\n\n🌍 Global Compliance Orchestration:\n• Cross-Border Regulatory Mapping: Systematische Analyse und Harmonisierung von KRITIS-ähnlichen Anforderungen verschiedener Jurisdiktionen (EU NIS2, US CISA, UK NCSC, etc.).\n• Unified Test Framework Development: Entwicklung einheitlicher Test-Methodologien, die multiple nationale Standards erfüllen und operative Effizienz maximieren.\n• Regulatory Arbitrage Optimization: Identifikation von Synergien zwischen verschiedenen Regulierungsrahmen zur Kostenoptimierung und Effizienzsteigerung.\n• International Incident Coordination: Vorbereitung auf grenzüberschreitende Cyber-Incidents mit koordinierten Response-Strategien und regulatorischen Meldeprozessen.\n\n🎯 Multi-Jurisdictional Excellence:\n• Regional Expertise Integration: Kombination lokaler Regulierungsexpertise mit globalen Best Practices für optimal angepasste Compliance-Strategien.\n• Scalable Compliance Architecture: Entwicklung skalierbarer Compliance-Architekturen, die einfache Expansion in neue Märkte und Jurisdiktionen ermöglichen.\n• Cross-Cultural Risk Management: Berücksichtigung kultureller und regulatorischer Unterschiede bei der Entwicklung globaler Sicherheitsstrategien.\n• International Partnership Facilitation: Unterstützung bei der Etablierung vertrauensvoller Partnerschaften mit internationalen Regulatoren und Aufsichtsbehörden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie gewährleistet ADVISORI die kontinuierliche Verbesserung und Evolution von KRITIS-Test- und Audit-Programmen in einer sich schnell verändernden Bedrohungslandschaft?",
        answer: "ADVISORI implementiert adaptive, selbstlernende Test- und Audit-Systeme, die kontinuierlich mit der sich entwickelnden Bedrohungslandschaft evolvieren und dabei immer einen Schritt voraus bleiben. Unser Ansatz kombiniert Threat Intelligence, maschinelles Lernen und proaktive Szenarioplanung für zukunftssichere Compliance.\n\n🔮 Adaptive Threat Intelligence Integration:\n• Real-Time Threat Monitoring: Integration globaler Threat Intelligence Feeds in Test-Programme für kontinuierliche Anpassung an neue Angriffsvektoren und Bedrohungen.\n• Predictive Risk Modeling: Entwicklung vorausschauender Risikomodelle, die potenzielle zukünftige Bedrohungen antizipieren und präventive Test-Strategien ermöglichen.\n• Attack Surface Evolution Analysis: Kontinuierliche Bewertung der sich verändernden Angriffsfläche durch Digitalisierung und Technologie-Integration.\n• Adversarial Capability Assessment: Regelmäßige Bewertung und Simulation fortgeschrittener Angreifer-Kapazitäten für realistische Test-Szenarien.\n\n⚡ Continuous Improvement Mechanisms:\n• Machine Learning-Enhanced Testing: Einsatz von ML-Algorithmen zur automatischen Identifikation neuer Test-Parameter und Optimierung bestehender Verfahren.\n• Feedback Loop Optimization: Systematische Analyse von Test-Ergebnissen zur kontinuierlichen Verfeinerung und Verbesserung der Test-Methodologien.\n• Community Intelligence Sharing: Partizipation in Industrie-Netzwerken für kollektive Bedrohungsintelligenz und Best Practice Sharing.\n• Regulatory Anticipation: Proaktive Analyse regulatorischer Trends zur frühzeitigen Anpassung von Test-Programmen an kommende Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung branchenspezifischer KRITIS-Test-Standards und der Förderung von Industry Best Practices?",
        answer: "ADVISORI nimmt eine führende Rolle bei der Entwicklung und Standardisierung branchenspezifischer KRITIS-Test-Verfahren ein und trägt aktiv zur Evolution der Industrie-Standards bei. Durch unsere tiefe Sektorexpertise und regulatorische Zusammenarbeit gestalten wir die Zukunft der kritischen Infrastruktursicherheit mit.\n\n🏛️ Standards Development Leadership:\n• Industry Working Group Participation: Aktive Mitarbeit in nationalen und internationalen Standardisierungsgremien für die Entwicklung zukunftsweisender KRITIS-Standards.\n• Sector-Specific Framework Development: Entwicklung maßgeschneiderter Test-Frameworks für verschiedene kritische Sektoren (Energie, Finanz, Gesundheit, Transport).\n• Best Practice Documentation: Systematische Dokumentation und Verbreitung bewährter Praktiken durch Whitepapers, Konferenzen und Industrie-Publikationen.\n• Regulatory Consultation: Beratung von Regulatoren bei der Entwicklung neuer KRITIS-Anforderungen basierend auf praktischer Implementierungserfahrung.\n\n🤝 Industry Ecosystem Facilitation:\n• Cross-Sector Knowledge Transfer: Ermöglichung von Wissenstransfer zwischen verschiedenen kritischen Sektoren zur gegenseitigen Stärkung der Resilienz.\n• Public-Private Partnership Development: Unterstützung bei der Entwicklung effektiver Public-Private Partnerships für kritische Infrastruktursicherheit.\n• Academic Research Collaboration: Zusammenarbeit mit Forschungseinrichtungen zur Entwicklung innovativer Test-Methodologien und Sicherheitstechnologien.\n• International Standards Harmonization: Förderung der Harmonisierung internationaler Standards für globale Interoperabilität und Effizienz."
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
