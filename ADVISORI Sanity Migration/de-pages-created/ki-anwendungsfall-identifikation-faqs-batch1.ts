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
    console.log('Updating KI-Anwendungsfall-Identifikation page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-anwendungsfall-identifikation' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-anwendungsfall-identifikation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die strategische Identifikation von KI-Anwendungsfällen der kritische Erfolgsfaktor für AI-Transformation und wie unterscheidet sich ADVISORIs Ansatz von herkömmlichen Beratungsansätzen?',
        answer: "Die Identifikation der richtigen KI-Anwendungsfälle ist der fundamentale Baustein erfolgreicher AI-Transformation, da sie über Erfolg oder Scheitern von Millionen-Investitionen entscheidet. Viele Unternehmen scheitern bei KI-Projekten nicht an der Technologie, sondern an der falschen Auswahl der Use Cases. ADVISORI verfolgt einen systematischen, datengetriebenen Ansatz, der Geschäftsstrategie mit technischer Machbarkeit und regulatorischer Compliance vereint.\n\n🎯 Strategische Dimension der Use Case Identifikation:\n• Geschäftswert-Orientierung: Wir analysieren nicht nur technische Möglichkeiten, sondern identifizieren Use Cases mit dem höchsten strategischen Wertpotenzial für Ihr Unternehmen.\n• Risiko-Nutzen-Bewertung: Systematische Bewertung von Implementierungsrisiken, Compliance-Anforderungen und erwarteten Geschäftsvorteilen für jeden identifizierten Use Case.\n• Skalierbarkeits-Assessment: Bewertung der langfristigen Skalierbarkeit und Erweiterungsmöglichkeiten identifizierter Anwendungsfälle.\n• Stakeholder-Alignment: Sicherstellung, dass identifizierte Use Cases mit den strategischen Zielen aller relevanten Geschäftsbereiche harmonieren.\n\n🔍 ADVISORIs Differenzierungsmerkmale:\n• DSGVO-First-Ansatz: Jeder Use Case wird von Anfang an auf DSGVO-Konformität und Datenschutz-Compliance geprüft, um spätere kostspielige Anpassungen zu vermeiden.\n• Branchenspezifische Expertise: Tiefes Verständnis für regulatorische Anforderungen und branchenspezifische Herausforderungen in verschiedenen Sektoren.\n• Technologie-agnostischer Ansatz: Fokus auf Geschäftswert statt auf spezifische Technologien, um die optimale Lösung für jeden Use Case zu finden.\n• Kontinuierliche Bewertung: Etablierung von Prozessen zur regelmäßigen Neubewertung und Anpassung der Use Case Roadmap basierend auf sich ändernden Geschäftsanforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert ADVISORI den ROI von KI-Anwendungsfällen und welche Methodik wird verwendet, um Business Cases zu entwickeln, die C-Level-Entscheidungsträger überzeugen?',
        answer: "Die ROI-Quantifizierung von KI-Anwendungsfällen erfordert eine mehrdimensionale Bewertung, die sowohl quantifizierbare als auch strategische Wertfaktoren berücksichtigt. ADVISORI entwickelt fundierte Business Cases, die nicht nur finanzielle Kennzahlen, sondern auch strategische Vorteile und Risikominimierung transparent darstellen, um C-Level-Entscheidungsträger von KI-Investitionen zu überzeugen.\n\n💰 Umfassende ROI-Bewertungsmethodik:\n• Direkte Kosteneinsparungen: Quantifizierung von Effizienzsteigerungen, Automatisierungsvorteilen und Personalproduktivitätssteigerungen durch KI-Implementation.\n• Umsatzgenerierung: Bewertung neuer Geschäftsmöglichkeiten, verbesserter Kundenerfahrungen und zusätzlicher Einnahmequellen durch KI-gestützte Services.\n• Risikominimierung: Monetäre Bewertung vermiedener Compliance-Verstöße, reduzierter operationeller Risiken und verbesserter Entscheidungsqualität.\n• Strategische Wertfaktoren: Bewertung von Wettbewerbsvorteilen, Marktpositionierung und langfristigen strategischen Optionen.\n\n📊 Business Case Entwicklung für C-Level:\n• Szenario-basierte Modellierung: Entwicklung von Best-Case-, Realistic- und Worst-Case-Szenarien mit entsprechenden ROI-Projektionen und Risikobewertungen.\n• Zeitbasierte Wertentwicklung: Darstellung der Wertentwicklung über verschiedene Zeiträume, einschließlich Break-Even-Analyse und langfristiger Wertpotenziale.\n• Vergleichsanalyse: Benchmarking gegen alternative Investitionsmöglichkeiten und Bewertung der Opportunitätskosten bei Nicht-Investment.\n• Implementierungsroadmap: Detaillierte Darstellung der Investitionsphasen, Meilensteine und erwarteten Wertrealisierung zu verschiedenen Zeitpunkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche spezifischen Herausforderungen entstehen bei der DSGVO-konformen Gestaltung von KI-Anwendungsfällen und wie stellt ADVISORI sicher, dass Datenschutz von Anfang an mitgedacht wird?',
        answer: "Die DSGVO-konforme Gestaltung von KI-Anwendungsfällen ist eine der komplexesten Herausforderungen bei der AI-Implementation, da sie technische Innovation mit strengen Datenschutzanforderungen in Einklang bringen muss. ADVISORI integriert Privacy-by-Design-Prinzipien bereits in die Use Case Identifikationsphase, um spätere kostspielige Compliance-Anpassungen zu vermeiden und rechtliche Risiken zu minimieren.\n\n🛡️ DSGVO-spezifische Herausforderungen bei KI-Use Cases:\n• Datenminimierung vs. KI-Performance: Balance zwischen der DSGVO-Anforderung der Datenminimierung und dem KI-Bedarf nach umfangreichen Trainingsdaten für optimale Performance.\n• Transparenz und Erklärbarkeit: Sicherstellung, dass KI-Entscheidungen nachvollziehbar und erklärbar sind, um den DSGVO-Anforderungen zur Transparenz zu entsprechen.\n• Zweckbindung und Weiterverwendung: Gestaltung von Use Cases, die die strikte Zweckbindung der DSGVO respektieren und gleichzeitig Flexibilität für zukünftige Anwendungen ermöglichen.\n• Betroffenenrechte: Integration von Mechanismen zur Wahrung der Betroffenenrechte wie Auskunft, Berichtigung und Löschung in KI-Systeme.\n\n🔒 ADVISORIs Privacy-by-Design-Ansatz:\n• Datenschutz-Folgenabschätzung: Systematische DSFA für jeden identifizierten Use Case bereits in der Konzeptionsphase, um Datenschutzrisiken frühzeitig zu identifizieren.\n• Technische Schutzmaßnahmen: Integration von Anonymisierung, Pseudonymisierung und Differential Privacy in die Use Case Architektur.\n• Governance-Integration: Entwicklung von Compliance-Frameworks, die Datenschutz-Governance nahtlos in KI-Entwicklungsprozesse integrieren.\n• Kontinuierliche Compliance-Überwachung: Etablierung von Monitoring-Systemen zur kontinuierlichen Überwachung der DSGVO-Konformität während des gesamten KI-Lebenszyklus."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie priorisiert ADVISORI identifizierte KI-Anwendungsfälle und welche Kriterien fließen in die Entwicklung einer strategischen Implementierungs-Roadmap ein?',
        answer: "Die strategische Priorisierung von KI-Anwendungsfällen ist ein komplexer Entscheidungsprozess, der multiple Dimensionen berücksichtigen muss, um maximalen Geschäftswert bei minimiertem Risiko zu erzielen. ADVISORI verwendet eine mehrstufige Bewertungsmatrix, die sowohl quantitative als auch qualitative Faktoren integriert, um eine datengetriebene Priorisierung und Roadmap-Entwicklung zu ermöglichen.\n\n⚖️ Multi-Kriterien-Bewertungsframework:\n• Geschäftswert-Potenzial: Bewertung des erwarteten ROI, strategischen Werts und Wettbewerbsvorteils jedes Use Cases basierend auf quantitativen und qualitativen Metriken.\n• Implementierungskomplexität: Analyse der technischen Machbarkeit, Datenqualität, Infrastruktur-Anforderungen und organisatorischen Veränderungen.\n• Risikobewertung: Umfassende Bewertung von technischen, regulatorischen, operationellen und Reputationsrisiken für jeden Use Case.\n• Zeitfaktor und Abhängigkeiten: Berücksichtigung von Implementierungszeiten, Ressourcenverfügbarkeit und Interdependenzen zwischen verschiedenen Use Cases.\n\n🗺️ Strategische Roadmap-Entwicklung:\n• Quick Wins Identifikation: Priorisierung von Use Cases mit hohem Wert und geringer Komplexität für schnelle Erfolge und Momentum-Aufbau.\n• Strategische Meilensteine: Definition von Implementierungsphasen, die aufeinander aufbauen und kontinuierlichen Wertaufbau ermöglichen.\n• Ressourcenplanung: Detaillierte Planung von Personal-, Budget- und Technologie-Ressourcen für jede Implementierungsphase.\n• Flexibilitäts-Integration: Entwicklung einer adaptiven Roadmap, die Anpassungen basierend auf Lernerfahrungen und sich ändernden Geschäftsanforderungen ermöglicht."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
