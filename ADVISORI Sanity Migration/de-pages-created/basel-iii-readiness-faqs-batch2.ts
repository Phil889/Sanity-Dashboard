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
    console.log('Updating Basel III Readiness page with FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-readiness" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir unsere Basel III-Readiness-Bewertung nutzen, um strategische Wettbewerbsvorteile zu generieren?",
        answer: "Eine strategisch konzipierte Basel III-Readiness-Bewertung kann weit über die bloße Identifikation von Compliance-Lücken hinausgehen und als Katalysator für die Entwicklung nachhaltiger Wettbewerbsvorteile dienen. Die dabei gewonnenen Erkenntnisse ermöglichen eine fundamentale Neuausrichtung Ihrer Geschäftsstrategie und Kapitalallokation für maximale Effizienz unter dem neuen regulatorischen Rahmen.\n\n🏆 Strategische Wettbewerbsvorteile durch eine umfassende Readiness-Bewertung:\n• First-Mover-Advantage: Frühzeitige Anpassung Ihres Geschäftsmodells an Basel III-Anforderungen ermöglicht die Erschließung neuer Marktchancen, bevor Wettbewerber reagieren können.\n• Präzisere Preismodelle: Entwicklung risikoadjustierter Preismodelle auf Basis detaillierter RWA-Analysen, die eine profitable Kundensegmentierung bei gleichzeitiger Wettbewerbsfähigkeit ermöglichen.\n• Kapitaloptimierte Produktpalette: Redesign Ihrer Produktpalette mit Fokus auf kapitaleffiziente Angebote, die bei gleichen Kundennutzen weniger regulatorisches Kapital binden.\n• Effizientere Risikotransfer-Strategien: Identifikation innovativer Absicherungs- und Risikotransferstrategien, die Kapital freisetzen und Ertragspotenziale steigern.\n\n🔄 Transformation von Erkenntnissen in konkrete Wettbewerbsvorteile:\n• Strategische Portfoliooptimierung: Entwicklung einer datengetriebenen Strategie zur Umschichtung des Geschäftsportfolios hin zu Bereichen mit optimaler Kapitalrendite unter Basel III.\n• Kundensegment-spezifische Strategien: Identifikation von Kundensegmenten, die unter Basel III besonders profitabel sind, und Entwicklung gezielter Akquisitions- und Bindungsstrategien.\n• Optimierte Bilanzstruktur: Neugestaltung Ihrer Bilanzstruktur zur Minimierung der Kapitalanforderungen bei gleichzeitiger Maximierung der Ertragsquellen.\n• Integrierte Steuerungssysteme: Implementierung fortschrittlicher Managementinformationssysteme, die regulatorische Kennzahlen mit Geschäftssteuerungsinformationen verbinden und schnellere Entscheidungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterscheidet sich ADVISORIs Basel III-Readiness-Ansatz von anderen Beratungsangeboten und welche konkreten Mehrwerte bietet er für unsere Bank?",
        answer: "ADVISORIs Basel III-Readiness-Ansatz differenziert sich fundamental von konventionellen Beratungsangeboten durch seine strategische Ausrichtung, methodische Tiefe und den Fokus auf nachhaltige Wertschöpfung statt reiner Compliance. Wir betrachten regulatorische Anforderungen nicht isoliert, sondern als integralen Bestandteil Ihrer Geschäftsstrategie und Transformationsagenda.\n\n💡 Differenzierungsmerkmale des ADVISORI-Ansatzes:\n• Business-First-Perspektive: Wir beginnen nicht mit regulatorischen Anforderungen, sondern mit Ihren strategischen Geschäftszielen und entwickeln Compliance-Lösungen, die diese optimal unterstützen.\n• Quantitative Impact-Analyse: Präzise Quantifizierung der Auswirkungen von Basel III auf Ihre Geschäftsbereiche durch fortschrittliche Modellierung und Szenariosimulationen statt qualitativer Einschätzungen.\n• End-to-End-Transformation: Betrachtung der gesamten Wertschöpfungskette von Strategie über Prozesse und Systeme bis hin zu Organisationsstrukturen und Kultur statt isolierter Teilaspekte.\n• Synergetische Implementierung: Integration der Basel III-Implementierung mit anderen strategischen Initiativen wie Digitalisierung, Datenmanagement und Prozessoptimierung für maximale Effizienz.\n\n🚀 Konkrete Mehrwerte für Ihre Bank:\n• Beschleunigte Time-to-Compliance: Unsere bewährten Methoden und Tools ermöglichen eine signifikant schnellere Identifikation und Schließung von Compliance-Lücken als herkömmliche Ansätze.\n• Höhere Kapitaleffizienz: Durch präzise Analyse und Optimierung Ihrer RWA und Kapitalallokation können wir typischerweise eine Verbesserung der Kapitaleffizienz um 10-15% erreichen.\n• Reduzierte Implementierungskosten: Unser synergetischer Ansatz und die priorisierte Roadmap können die Gesamtimplementierungskosten im Vergleich zu isolierten Projekten um bis zu 30% senken.\n• Nachhaltige Wettbewerbsvorteile: Identifikation und Umsetzung von strategischen Differenzierungsmöglichkeiten, die auch nach vollständiger Basel III-Implementierung Bestand haben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie integrieren wir die Erkenntnisse aus der Basel III-Readiness-Bewertung optimal in unsere langfristige Strategie- und Budgetplanung?",
        answer: "Die Integration der Erkenntnisse aus einer Basel III-Readiness-Bewertung in Ihre strategische und finanzielle Planung ist ein kritischer Erfolgsfaktor, um regulatorische Compliance und geschäftliche Wertschöpfung zu harmonisieren. Ein strukturierter Integrationsprozess ermöglicht die Nutzung dieser Erkenntnisse als strategischen Input für alle relevanten Planungsprozesse.\n\n🔄 Framework für die strategische Integration:\n• Strategie-Alignment-Workshops: Durchführung dedizierter Workshops mit dem Führungsteam, um die Implikationen der Readiness-Bewertung für die Unternehmensstrategie zu analysieren und strategische Anpassungen zu definieren.\n• Kapitalallokations-Neuausrichtung: Revision Ihres Kapitalallokationsprozesses unter Berücksichtigung der Basel III-Anforderungen, um Kapital optimal auf strategische Initiativen und Geschäftsbereiche zu verteilen.\n• Integrierte Planungszyklen: Synchronisierung Ihrer regulatorischen Planungsprozesse mit den strategischen und finanziellen Planungszyklen für konsistente Entscheidungsfindung.\n• Kennzahlen-Integration: Entwicklung eines integrierten Performance-Management-Frameworks, das regulatorische KPIs mit geschäftlichen Leistungsindikatoren verbindet.\n\n📊 Konkrete Integrationsschritte für die Budgetplanung:\n• Mehrdimensionale Budgetierung: Erweiterung Ihres Budgetierungsprozesses um regulatorische Dimensionen wie RWA, Kapitalquoten und Liquiditätskennzahlen neben traditionellen finanziellen Metriken.\n• Priorisierte Investitionsallokation: Entwicklung eines Scoring-Modells für Investitionsentscheidungen, das regulatorische Impacts und Compliance-Beiträge als Bewertungskriterien integriert.\n• Szenariobasierte Finanzplanung: Implementation einer szenariobasierten Finanzplanung, die verschiedene regulatorische Entwicklungsszenarien berücksichtigt und deren Auswirkungen quantifiziert.\n• Rolling Forecast mit regulatorischer Perspektive: Erweiterung Ihres Rolling-Forecast-Prozesses um regulatorische Prognosen, um frühzeitig auf Veränderungen reagieren zu können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir sicherstellen, dass unsere Basel III-Readiness-Bewertung auch die neuesten regulatorischen Entwicklungen und zukünftige Anforderungen berücksichtigt?",
        answer: "Eine zukunftssichere Basel III-Readiness-Bewertung muss über die aktuellen Anforderungen hinausblicken und kommende regulatorische Entwicklungen antizipieren. ADVISORI verfolgt einen mehrdimensionalen Ansatz, der sowohl die bereits finalisierten als auch die sich abzeichnenden Regulierungskomponenten systematisch erfasst und in die Analyse integriert.\n\n🔮 Methodische Ansätze zur Zukunftssicherung:\n• Regulatorisches Radar-System: Wir implementieren ein strukturiertes Monitoring-System für regulatorische Entwicklungen auf globaler, europäischer und nationaler Ebene, das frühzeitig Veränderungen identifiziert.\n• Szenariobasierte Readiness-Bewertung: Durchführung der Readiness-Analyse unter verschiedenen regulatorischen Szenarien, die potenzielle zukünftige Anforderungen mit unterschiedlichen Wahrscheinlichkeiten abbilden.\n• Evolutionäre Roadmap-Entwicklung: Gestaltung einer adaptiven Implementierungsroadmap mit definierten Entscheidungs- und Anpassungspunkten basierend auf regulatorischen Entwicklungen.\n• Regulatorischer Dialog: Aktive Einbindung von Erkenntnissen aus dem Dialog mit Aufsichtsbehörden und Regulierungsgremien in die Readiness-Bewertung.\n\n🛡️ Berücksichtigung spezifischer regulatorischer Trends:\n• Finalisierung von Basel III (\"Basel IV\"): Integration der finalen Basel III-Anforderungen mit Fokus auf Output Floor, überarbeitete Standardansätze und Einschränkungen interner Modelle.\n• ESG-Integration: Berücksichtigung der zunehmenden Verflechtung von Nachhaltigkeitsanforderungen mit traditionellen Risiko- und Kapitalregulierungen.\n• Digitale Risiken: Einbeziehung neuer regulatorischer Anforderungen im Bereich IT-Risiken, Cyber-Sicherheit und digitale Resilienz (DORA).\n• Aufkommende Risikokategorien: Antizipation neuer aufsichtsrechtlicher Fokusthemen wie Klimarisiken, geopolitische Risiken und Pandemieresilienz.\n\n⚙️ Technologische Zukunftssicherung:\n• Flexible Datenarchitektur: Entwicklung einer adaptiven Datenarchitektur, die neue regulatorische Anforderungen mit minimalen Anpassungen aufnehmen kann.\n• Skalierbare Berichtsstrukturen: Implementierung flexibler Reporting-Frameworks, die leicht um neue regulatorische Kennzahlen erweiterbar sind.\n• Modulare Systemlandschaft: Gestaltung einer modularen IT-Architektur, die agile Anpassungen an neue Anforderungen ermöglicht."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
