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
    console.log('Updating NIS2 Important Entities page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-important-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-important-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche spezifischen Supply Chain Security-Herausforderungen entstehen für Important Entities unter NIS2 und wie entwickelt ADVISORI umfassende Lieferkettenresilienz-Strategien?",
        answer: "Important Entities sind oft stark in komplexe Lieferketten eingebunden, was unter NIS2 besondere Herausforderungen für Cybersicherheit und Risikomanagement schafft. ADVISORI entwickelt ganzheitliche Supply Chain Security-Strategien, die sowohl direkte als auch indirekte Cyber-Risiken adressieren und dabei operative Effizienz und Kostenoptimierung berücksichtigen.\n\n🔗 Komplexe Supply Chain Security-Herausforderungen:\n• Third-Party Risk Assessment: Bewertung und kontinuierliche Überwachung der Cybersicherheits-Posture von Lieferanten, Dienstleistern und Partnern, ohne deren Geschäftsbeziehungen zu belasten oder operative Flexibilität zu reduzieren.\n• Cascading Risk Management: Identifikation und Mitigation von Kaskadeffekten, bei denen Cybersicherheitsvorfälle bei einem Lieferanten kritische Geschäftsprozesse beeinträchtigen können.\n• Digital Supply Chain Visibility: Aufbau umfassender Transparenz über digitale Verbindungen, Datenflüsse und Systemintegrationen mit externen Partnern.\n• Contractual Security Requirements: Entwicklung und Durchsetzung angemessener Cybersicherheitsanforderungen in Lieferantenverträgen ohne unrealistische Belastungen für kleinere Partner.\n\n🛡️ ADVISORI's ganzheitliche Lieferkettenresilienz-Strategie:\n• Risk-Based Supplier Segmentation: Klassifikation von Lieferanten basierend auf Kritikalität, Risikoprofil und Cybersicherheits-Maturity, um proportionale Sicherheitsanforderungen zu entwickeln.\n• Collaborative Security Programs: Aufbau gemeinsamer Cybersicherheitsinitiativen mit Schlüsselpartnern, die gegenseitigen Nutzen schaffen und Kosten teilen.\n• Supply Chain Threat Intelligence: Implementierung spezialisierter Threat Intelligence-Systeme, die Bedrohungen gegen die gesamte Lieferkette erkennen und präventive Maßnahmen ermöglichen.\n• Incident Response Coordination: Entwicklung koordinierter Incident Response-Prozesse, die schnelle Kommunikation und gemeinsame Reaktionen bei supply chain-bezogenen Cybersicherheitsvorfällen ermöglichen.\n• Continuous Monitoring Integration: Aufbau von Überwachungssystemen, die Cybersicherheits-Kennzahlen der kritischsten Lieferanten kontinuierlich verfolgen und bei Abweichungen automatisch alarmieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie unterstützt ADVISORI Important Entities bei der Entwicklung einer kosteneffizienten 24/7-Cybersicherheits-Überwachung ohne den Aufbau eigener Security Operations Centers?",
        answer: "ADVISORI erkennt, dass Important Entities die Vorteile kontinuierlicher Cybersicherheits-Überwachung benötigen, aber nicht die Ressourcen für eigene SOCs haben. Wir entwickeln hybride Überwachungsmodelle, die Enterprise-Grade-Sicherheit durch intelligente Kombination von Automatisierung, Cloud-Services und strategischen Partnerschaften liefern.\n\n🕐 Innovative 24/7-Überwachung ohne interne SOCs:\n• Hybrid Monitoring Models: Kombination von automatisierten Erkennungssystemen mit externen Managed Security Services, die kontinuierliche Überwachung zu Bruchteilskosten eigener SOCs ermöglichen.\n• Cloud-Native SIEM Solutions: Nutzung skalierbare Cloud-basierter Security Information and Event Management-Plattformen, die Enterprise-Funktionalität ohne hohe Infrastrukturinvestitionen bieten.\n• AI-Powered Threat Detection: Implementierung künstlicher Intelligenz-gestützter Erkennungssysteme, die kritische Bedrohungen automatisch identifizieren und nur echte Alarmierungen an menschliche Analysten weiterleiten.\n• Follow-the-Sun Monitoring: Nutzung globaler Managed Security Service Provider, die rund-um-die-Uhr-Überwachung durch verteilte Teams in verschiedenen Zeitzonen gewährleisten.\n\n⚡ Kostenoptimierte Security Operations:\n• Tiered Response Architecture: Entwicklung gestufter Reaktionsmodelle, bei denen automatisierte Systeme routine incidents behandeln und menschliche Experten nur bei kritischen oder komplexen Ereignissen eingreifen.\n• Shared Threat Intelligence: Teilnahme an Threat Intelligence-Sharing-Plattformen, die Zugang zu aktuellsten Bedrohungsinformationen ohne eigene Research-Teams ermöglichen.\n• Elastic Scaling Models: Implementierung flexibler Überwachungslösungen, die sich automatisch an wechselnde Bedrohungslagen und Geschäftsanforderungen anpassen können.\n• Performance-Based Service Models: Strukturierung von Monitoring-Services mit outcome-basierten SLAs, die Qualität sicherstellen und Kosten kontrollieren.\n• Integrated Incident Escalation: Aufbau nahtloser Eskalationsprozesse, die bei kritischen Ereignissen sofort interne Teams und Entscheidungsträger informieren und koordinierte Reaktionen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche innovativen Ansätze empfiehlt ADVISORI für Important Entities, um Cybersicherheits-Compliance zu einem Wettbewerbsvorteil zu entwickeln und neue Geschäftsmöglichkeiten zu erschließen?",
        answer: "ADVISORI unterstützt Important Entities dabei, ihre NIS2-Compliance von einer regulatorischen Notwendigkeit zu einem strategischen Differenzierungsmerkmal zu transformieren. Unser Ansatz fokussiert darauf, Cybersicherheits-Exzellenz als Grundlage für Vertrauensbildung, Marktexpansion und innovative Geschäftsmodelle zu nutzen.\n\n🚀 Strategische Transformation zu Wettbewerbsvorteilen:\n• Security-as-a-Differentiator Positioning: Entwicklung von Marketing- und Vertriebsstrategien, die robuste Cybersicherheit als Kern-Wertversprechen positionieren und dabei Vertrauen bei sicherheitsbewussten Kunden aufbauen.\n• Compliance-Driven Market Access: Nutzung nachgewiesener NIS2-Compliance als Türöffner für neue Marktsegmente, öffentliche Ausschreibungen und Partnerschaften mit sicherheitskritischen Organisationen.\n• Premium Service Models: Entwicklung von Premiumdiensten, die überlegene Cybersicherheit und Datenprotection als Mehrwert anbieten und dabei höhere Margen rechtfertigen.\n• Trust-Based Partnership Strategy: Aufbau strategischer Allianzen mit anderen compliance-starken Unternehmen zur Schaffung vertrauensvoller Geschäfts-Ökosysteme.\n\n💡 Innovative Geschäftsmodell-Entwicklung:\n• Security-Enhanced Product Development: Integration von Cybersicherheits-Features in bestehende Produkte und Services, um neue Mehrwerte zu schaffen und Kundenbindung zu stärken.\n• Compliance-as-a-Service Opportunities: Entwicklung von Dienstleistungen, die anderen Unternehmen bei ihrer NIS2-Compliance helfen, wodurch neue Revenue-Streams entstehen.\n• Data-Driven Business Intelligence: Nutzung der durch Cybersicherheits-Monitoring gewonnenen Dateneinblicke zur Entwicklung neuer datengestützter Services und Optimierung bestehender Prozesse.\n• Innovation Sandbox Creation: Aufbau sicherer Umgebungen für das Testen neuer Technologien und Geschäftsmodelle, wodurch Innovation gefördert wird ohne Compliance-Risiken einzugehen.\n• Strategic Advisory Positioning: Positionierung als thought leader in Cybersicherheit innerhalb der Branche, um beratende Rollen, Speaking-Opportunitäten und Branchenpartnerschaften zu gewinnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie bereitet ADVISORI Important Entities auf die Integration von Emerging Technologies wie KI, IoT und Edge Computing vor, während gleichzeitig NIS2-Compliance und Cybersicherheit gewährleistet bleiben?",
        answer: "ADVISORI unterstützt Important Entities dabei, innovative Technologien sicher zu adoptieren und dabei sowohl NIS2-Compliance als auch Wettbewerbsvorteile zu erhalten. Unser Ansatz kombiniert Technology Readiness mit Security-by-Design-Prinzipien, um zukunftssichere, compliance-konforme Innovation zu ermöglichen.\n\n🔮 Sichere Integration von Emerging Technologies:\n• AI/ML Security Framework: Entwicklung spezifischer Sicherheitsrahmen für KI-Systeme, die sowohl Datenintegrität als auch Algorithmus-Sicherheit gewährleisten und dabei NIS2-Anforderungen erfüllen.\n• IoT Device Management: Implementierung umfassender IoT-Sicherheitsstrategien, die Device-Lifecycle-Management, Netzwerksegmentierung und kontinuierliche Vulnerability-Assessments umfassen.\n• Edge Computing Security: Aufbau sicherer Edge-Computing-Architekturen, die dezentrale Datenverarbeitung ermöglichen ohne zentrale Sicherheitskontrollen zu kompromittieren.\n• Zero Trust Integration: Implementierung von Zero Trust-Architekturen, die sich nahtlos an neue Technologien anpassen und dabei granulare Sicherheitskontrolle ermöglichen.\n\n⚡ Innovation-Enablement durch sichere Adoption:\n• Secure Innovation Labs: Aufbau isolierter Testumgebungen, die es ermöglichen, neue Technologien sicher zu evaluieren und zu testen, ohne Produktionssysteme oder Compliance zu gefährden.\n• Technology Risk Assessment Frameworks: Entwicklung systematischer Bewertungsverfahren für neue Technologien, die sowohl Innovationspotenzial als auch Cybersicherheitsrisiken quantifizieren.\n• Adaptive Security Controls: Implementierung flexibler Sicherheitskontrollen, die sich automatisch an neue Technologien und Anwendungsszenarien anpassen können.\n• Compliance-Forward Technology Planning: Entwicklung von Technologie-Roadmaps, die zukünftige regulatorische Entwicklungen antizipieren und dabei Innovation ermöglichen.\n• Cross-Functional Innovation Teams: Aufbau interdisziplinärer Teams, die Cybersicherheits-, Compliance- und Innovationsexpertise kombinieren, um sichere und compliant technology adoption zu gewährleisten."
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
