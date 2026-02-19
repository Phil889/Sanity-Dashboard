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
    console.log('Updating KRITIS Regelmäßige Tests & Audits page with C-Level FAQs batch 2 (German)...')
    
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
        question: "Wie gewährleistet ADVISORI, dass KRITIS-Tests und Audits nicht nur Compliance erfüllen, sondern auch operative Exzellenz und Geschäftsinnovation fördern?",
        answer: "ADVISORI transformiert traditionelle KRITIS-Tests von reinen Compliance-Übungen zu strategischen Business-Enablers, die operative Exzellenz fördern und Innovationsmöglichkeiten erschließen. Unser Ansatz integriert Sicherheitsvalidierung nahtlos in Geschäftsprozesse und schafft dabei Mehrwerte, die weit über regulatorische Anforderungen hinausgehen.\n\n🎯 Strategische Integration von Tests und Business Excellence:\n• Performance-orientierte Testgestaltung: Unsere Tests validieren nicht nur Sicherheit, sondern messen gleichzeitig Systemperformance, Verfügbarkeit und Nutzerexperience, um operative Optimierungspotenziale zu identifizieren.\n• Business Process Enhancement: Test-Erkenntnisse fließen direkt in die Optimierung von Geschäftsprozessen ein, identifizieren Effizienzpotenziale und reduzieren operative Reibungsverluste.\n• Innovation-Safe Environment: Etablierung sicherer Test-Umgebungen, die es ermöglichen, neue Technologien und Geschäftsmodelle risikofrei zu erproben und zu validieren.\n• Customer Experience Integration: Tests berücksichtigen Auswirkungen auf Kundenerfahrung und identifizieren Möglichkeiten zur Serviceverbesserung.\n\n🚀 Innovation durch intelligente Testansätze:\n• Digital Twin Testing: Verwendung digitaler Zwillinge kritischer Systeme für umfassende Tests ohne Produktionsbeeinträchtigung und gleichzeitige Simulation von Geschäftsszenarien.\n• AI-gestützte Anomalieerkennung: Einsatz künstlicher Intelligenz zur Identifikation subtiler Muster, die sowohl Sicherheitsrisiken als auch Geschäftsoptimierungsmöglichkeiten aufzeigen.\n• Predictive Testing: Entwicklung vorausschauender Test-Modelle, die potenzielle Probleme antizipieren und präventive Maßnahmen ermöglichen.\n• Cross-System Intelligence: Verknüpfung von Test-Erkenntnissen verschiedener Systeme zur Schaffung ganzheitlicher Geschäftsintelligenz und Optimierungsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Metriken und KPIs verwendet ADVISORI zur Messung des Geschäftswerts von KRITIS-Test- und Audit-Programmen?",
        answer: "ADVISORI etabliert umfassende Metrik-Frameworks, die den Geschäftswert von KRITIS-Tests quantifizieren und kontinuierliche Optimierung ermöglichen. Unsere KPI-Systeme verbinden traditionelle Sicherheitsmetriken mit Geschäftsindikatoren und schaffen damit eine datenbasierte Grundlage für strategische Entscheidungen und Investitionsoptimierung.\n\n📊 Geschäftswert-orientierte KPI-Kategorien:\n• Financial Impact Metrics: Quantifizierung von Kosteneinsparungen durch vermiedene Incidents, reduzierte Ausfallzeiten und optimierte Versicherungsprämien, sowie ROI-Berechnung für Sicherheitsinvestitionen.\n• Operational Excellence Indicators: Messung von Systemverfügbarkeit, Performance-Verbesserungen, Prozesseffizienz und Automatisierungsgrad, die direkt die operative Leistungsfähigkeit beeinflussen.\n• Strategic Enablement Metrics: Bewertung der Geschwindigkeitssteigerung bei Innovation, Time-to-Market für neue Services und Capability-Erweiterung durch verbesserte Sicherheitsarchitektur.\n• Stakeholder Confidence Index: Messung von Vertrauensindikatoren wie Kundenzufriedenheit, Investorenvertrauen, regulatorische Anerkennung und Partnerschaftsqualität.\n\n🎯 ADVISORI-spezifische Messmethoden:\n• Business Continuity Value Score: Quantifizierung des Geschäftswerts kontinuierlicher Verfügbarkeit durch Analyse von Umsatzverlusten bei verschiedenen Ausfallszenarien.\n• Innovation Velocity Measurement: Messung der Beschleunigung von Innovationsprojekten durch robuste Sicherheitsgrundlagen und reduzierte Compliance-Hindernisse.\n• Risk-Adjusted Performance Indicators: Entwicklung risikoadjustierter Leistungskennzahlen, die sowohl Sicherheit als auch Geschäftsperformance in einer integrierten Sichtweise darstellen.\n• Competitive Advantage Analytics: Bewertung der Wettbewerbsvorteile durch überlegene Sicherheitskapazitäten bei Ausschreibungen und Kundenakquisition."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie adressiert ADVISORI die Herausforderung, KRITIS-Tests durchzuführen, ohne kritische Geschäftsprozesse zu beeinträchtigen oder zu unterbrechen?",
        answer: "ADVISORI hat spezialisierte Methoden entwickelt, um umfassende KRITIS-Tests durchzuführen, ohne kritische Geschäftsprozesse zu gefährden. Unser Ansatz kombiniert innovative Test-Technologien mit ausgereiften Risikomanagement-Strategien, um maximale Sicherheitsvalidierung bei minimaler Geschäftsbeeinträchtigung zu erreichen.\n\n🛡️ Non-Disruptive Testing Strategien:\n• Digital Twin Architecture: Erstellung präziser digitaler Zwillinge kritischer Systeme, die umfassende Tests in isolierten Umgebungen ermöglichen, ohne Produktionssysteme zu berühren.\n• Micro-Testing Approaches: Entwicklung granularer Test-Methoden, die einzelne Komponenten validieren, ohne ganze Systeme zu belasten oder zu unterbrechen.\n• Shadow System Testing: Parallele Test-Umgebungen, die Live-Traffic spiegeln und realistische Lastszenarien simulieren, ohne Produktionsservices zu beeinträchtigen.\n• Time-Boxed Production Testing: Präzise geplante, minimal-invasive Tests in Produktionsumgebungen während wartungsarmer Zeiten mit sofortigen Rollback-Kapazitäten.\n\n⚡ Innovative Test-Technologien:\n• AI-simulierte Penetrationstests: Einsatz künstlicher Intelligenz für kontinuierliche, automatisierte Sicherheitstests, die menschliche Angreifer simulieren, ohne System-Performance zu beeinträchtigen.\n• Network Emulation Testing: Hochentwickelte Netzwerk-Simulationen, die komplexe Angriffszenarien in kontrollierten Umgebungen nachstellen.\n• Behavioral Analysis ohne Systemlast: Passive Überwachung und Analyse von Systemverhalten zur Sicherheitsvalidierung ohne aktive Eingriffe.\n• Gradual Stress Testing: Stufenweise Belastungstests mit intelligenten Abbruchkriterien, die maximale Erkenntnisse bei minimalen Risiken generieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welchen strategischen Vorteil bietet die Partnerschaft mit ADVISORI bei der Entwicklung zukunftssicherer KRITIS-Test- und Audit-Programme?",
        answer: "Die Partnerschaft mit ADVISORI bietet strategische Vorteile durch unsere einzigartige Kombination aus regulatorischer Expertise, technologischer Innovation und geschäftsstrategischem Verständnis. Wir entwickeln nicht nur compliant Tests, sondern zukunftssichere Programme, die sich dynamisch an evolvierende Bedrohungslandschaften und Geschäftsanforderungen anpassen.\n\n🎯 Strategische Differenzierungsmerkmale:\n• Anticipatory Compliance: Entwicklung von Test-Programmen, die nicht nur aktuelle Anforderungen erfüllen, sondern auch zukünftige regulatorische Entwicklungen antizipieren und vorbereiten.\n• Technology Convergence Expertise: Tiefes Verständnis für die Konvergenz von OT/IT-Systemen, Cloud-Computing und industrieller Digitalisierung in kritischen Infrastrukturen.\n• Sector-Spanning Intelligence: Branchenübergreifende Expertise ermöglicht Best-Practice-Transfer und innovative Lösungsansätze aus verschiedenen kritischen Sektoren.\n• Regulatory Relationship Management: Etablierte Beziehungen zu Regulatoren und Standardisierungsorganisationen schaffen Vorsprung bei regulatorischen Entwicklungen.\n\n🚀 Zukunftssichere Programmgestaltung:\n• Adaptive Test Frameworks: Entwicklung selbstlernender Test-Systeme, die sich automatisch an neue Bedrohungen und Technologien anpassen, ohne manuelle Neukonfiguration.\n• Scalable Architecture Design: Test-Programme werden von Beginn an für Skalierung und Evolution konzipiert, um mit Geschäftswachstum und technologischen Veränderungen Schritt zu halten.\n• Continuous Innovation Integration: Systematische Integration neuer Test-Technologien und -Methoden in bestehende Programme ohne Unterbrechung der Compliance-Kontinuität.\n• Strategic Roadmap Alignment: Langfristige Ausrichtung der Test-Programme an Geschäftsstrategie und digitaler Transformation für maximale Zukunftssicherheit."
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
