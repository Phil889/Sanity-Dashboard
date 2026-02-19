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
    console.log('Updating KI-Bilderkennung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-bilderkennung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-bilderkennung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist KI-Bilderkennung für die C-Suite mehr als nur eine technische Innovation und wie positioniert ADVISORI Computer Vision als strategischen Wettbewerbsvorteil?',
        answer: "KI-Bilderkennung und Computer Vision repräsentieren für Führungskräfte einen fundamentalen Paradigmenwechsel in der Art, wie Unternehmen visuelle Informationen verarbeiten, Entscheidungen treffen und operative Exzellenz erreichen. Diese Technologien ermöglichen es, aus unstrukturierten visuellen Daten wertvolle Geschäftserkenntnisse zu gewinnen und Prozesse zu automatisieren, die bisher menschliche Expertise erforderten. ADVISORI versteht Computer Vision als strategischen Enabler für Geschäftstransformation mit höchsten Datenschutzstandards.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Operative Effizienzsteigerung: Computer Vision automatisiert komplexe visuelle Inspektions- und Analyseprozesse, die traditionell zeitaufwändig und fehleranfällig waren, und ermöglicht dadurch erhebliche Kosteneinsparungen und Qualitätsverbesserungen.\n• Neue Geschäftsmodelle und Umsatzströme: Intelligente Bildverarbeitung eröffnet völlig neue Möglichkeiten für datengetriebene Services, personalisierte Kundenerlebnisse und innovative Produktangebote.\n• Risikominimierung und Compliance: Automatisierte visuelle Überwachung und Analyse reduzieren menschliche Fehler und gewährleisten konsistente Qualitäts- und Sicherheitsstandards.\n• Wettbewerbsdifferenzierung: Unternehmen mit fortschrittlichen Computer Vision Fähigkeiten können sich deutlich von Konkurrenten abheben und Marktführerschaft etablieren.\n\n🛡️ ADVISORI's DSGVO-First Computer Vision Ansatz:\n• Privacy-by-Design Architekturen: Wir entwickeln Bilderkennungssysteme, die von Grund auf datenschutzkonform sind und biometrische Daten durch fortschrittliche Anonymisierungstechniken schützen.\n• Edge-Computing-Strategien: Implementierung lokaler Bildverarbeitungslösungen, die sensible visuelle Daten nicht in die Cloud übertragen müssen und damit höchste Datensicherheit gewährleisten.\n• Branchenspezifische Compliance: Tiefes Verständnis für sektorspezifische Anforderungen in Medizin, Automobilindustrie, Finanzwesen und anderen regulierten Branchen.\n• Strategische Governance-Integration: Einbettung von Computer Vision Governance in bestehende Unternehmensstrukturen für nachhaltige und verantwortungsvolle Technologienutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir den ROI einer KI-Bilderkennungs-Investition und welchen direkten Einfluss hat ADVISORI\'s Computer Vision Implementierung auf operative Kennzahlen und Unternehmenswert?',
        answer: "Die Investition in strategische Computer Vision Lösungen von ADVISORI ist ein messbarer Wertschöpfungshebel, der sowohl operative Effizienz als auch strategische Marktpositionierung stärkt. Der Return on Investment manifestiert sich in quantifizierbaren Produktivitätssteigerungen, Qualitätsverbesserungen und der Erschließung neuer Geschäftsmöglichkeiten, während gleichzeitig Compliance-Risiken minimiert werden.\n\n💰 Direkter Einfluss auf operative Kennzahlen und Performance:\n• Automatisierung visueller Inspektionsprozesse: Computer Vision kann manuelle Qualitätskontrollprozesse um erhebliche Faktoren beschleunigen, während gleichzeitig die Erkennungsgenauigkeit von Defekten und Anomalien deutlich verbessert wird.\n• Reduzierung von Ausschuss und Nacharbeit: Präzise Bildanalyse identifiziert Qualitätsprobleme in Echtzeit, was zu signifikanten Einsparungen bei Materialkosten und Produktionsausfällen führt.\n• Personalproduktivität und Ressourcenoptimierung: Mitarbeiter können sich auf wertschöpfende Tätigkeiten konzentrieren, während repetitive visuelle Aufgaben automatisiert werden.\n• Predictive Maintenance und Anlagenverfügbarkeit: Visuelle Überwachung von Maschinen und Anlagen ermöglicht proaktive Wartung und reduziert ungeplante Ausfallzeiten erheblich.\n\n📈 Strategische Werttreiber und Marktvorteile:\n• Neue Service-Angebote und Umsatzquellen: Computer Vision ermöglicht die Entwicklung innovativer datengetriebener Services, die zusätzliche Einnahmequellen erschließen.\n• Kundenzufriedenheit und Qualitätsverbesserung: Konsistent hohe Produktqualität durch automatisierte Inspektion stärkt Markenreputation und Kundenloyalität.\n• Compliance-Kostenreduzierung: Automatisierte Dokumentation und Überwachung reduzieren regulatorische Risiken und vermeiden kostspielige Compliance-Verstöße.\n• Skalierbarkeit und Marktexpansion: Computer Vision Systeme ermöglichen es, Qualitäts- und Inspektionsstandards konsistent über verschiedene Standorte und Märkte hinweg zu implementieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Biometrische Daten und Gesichtserkennung unterliegen besonderen DSGVO-Bestimmungen. Wie stellt ADVISORI sicher, dass unsere Computer Vision Systeme höchste Datenschutzstandards erfüllen?',
        answer: "Biometrische Datenverarbeitung durch Computer Vision Systeme erfordert besondere Sorgfalt und Expertise im Datenschutzrecht, da diese Daten als besonders schützenswerte Kategorien unter der DSGVO gelten. ADVISORI hat spezialisierte Verfahren und Technologien entwickelt, die es ermöglichen, die Vorteile der Bilderkennungstechnologie zu nutzen, während gleichzeitig höchste Datenschutzstandards gewährleistet werden.\n\n🔒 Technische Datenschutzmaßnahmen für biometrische Verarbeitung:\n• Privacy-by-Design Architekturen: Unsere Computer Vision Systeme sind von Grund auf so konzipiert, dass sie biometrische Merkmale verarbeiten können, ohne identifizierbare biometrische Templates zu speichern oder zu übertragen.\n• Fortschrittliche Anonymisierungstechniken: Implementierung von Differential Privacy, Homomorphic Encryption und anderen kryptographischen Verfahren, die Bildanalyse ermöglichen, ohne Rohdaten preiszugeben.\n• Edge-Computing und lokale Verarbeitung: Sensible biometrische Daten verlassen niemals das lokale System, wodurch Übertragungsrisiken eliminiert und Datensouveränität gewährleistet wird.\n• Temporäre Verarbeitung und automatische Löschung: Biometrische Merkmale werden nur für die Dauer der Analyse im Arbeitsspeicher gehalten und automatisch gelöscht, ohne persistente Speicherung.\n\n⚖️ Rechtliche Compliance und Governance-Framework:\n• Umfassende Datenschutz-Folgenabschätzung: Detaillierte DPIA für alle Computer Vision Anwendungen mit biometrischen Komponenten, einschließlich Risikobewertung und Schutzmaßnahmen.\n• Rechtsgrundlagen-Analyse: Sorgfältige Prüfung und Dokumentation der rechtlichen Grundlagen für biometrische Datenverarbeitung, einschließlich Einwilligungsmanagement wo erforderlich.\n• Transparenz und Betroffenenrechte: Implementierung von Systemen zur Information der Betroffenen und zur Gewährleistung ihrer Rechte auf Auskunft, Berichtigung und Löschung.\n• Kontinuierliche Compliance-Überwachung: Regelmäßige Audits und Updates der Datenschutzmaßnahmen entsprechend der sich entwickelnden Rechtsprechung und regulatorischen Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI Computer Vision von einem Kostenfaktor zu einem strategischen Wachstumstreiber und welche konkreten Geschäftsmodell-Innovationen ermöglicht unsere Bilderkennung-Implementierung?',
        answer: "ADVISORI positioniert Computer Vision nicht als isolierte Technologie-Initiative, sondern als fundamentalen Geschäftstransformations-Katalysator. Unser Ansatz verwandelt Bilderkennungs-Investitionen in strategische Wachstumsmotoren, die neue Geschäftsmodelle ermöglichen, operative Exzellenz schaffen und nachhaltige Wettbewerbsvorteile generieren, während gleichzeitig höchste Datenschutzstandards gewährleistet werden.\n\n🚀 Von Technologie zu Geschäftsinnovation:\n• Datengetriebene Service-Ökosysteme: Computer Vision ermöglicht die Entwicklung völlig neuer Service-Angebote, von intelligenter Qualitätsanalyse bis hin zu prädiktiven Wartungsservices, die ohne Bilderkennungstechnologie nicht realisierbar wären.\n• Automatisierte Wertschöpfungsketten: Intelligente visuelle Systeme optimieren gesamte Produktions- und Logistikprozesse, von der Eingangskontrolle bis zur finalen Qualitätssicherung.\n• Personalisierte Kundenerlebnisse: Bildanalyse ermöglicht hyperpersonalisierte Produktempfehlungen und Services, die Kundenzufriedenheit und Umsatz steigern.\n• Neue Markterschließung: Computer Vision Fähigkeiten eröffnen Zugang zu Märkten und Kundensegmenten, die zuvor aufgrund von Komplexität oder Kosten unzugänglich waren.\n\n💡 ADVISORI's Geschäftsmodell-Innovation Framework:\n• Visuelle Datenmonetarisierung: Entwicklung von Strategien zur Monetarisierung visueller Datenbestände durch intelligente Analyse und Erkenntnisgewinnung, unter strikter Einhaltung von Datenschutzbestimmungen.\n• Platform-as-a-Service Modelle: Aufbau von Computer Vision Plattformen, die als Service angeboten werden können und kontinuierliche Umsatzströme generieren.\n• Predictive Analytics Integration: Kombination von Bilderkennungsdaten mit anderen Datenquellen für umfassende prädiktive Modelle, die strategische Geschäftsentscheidungen unterstützen.\n• Partnerschafts-Ökosysteme: Entwicklung strategischer Allianzen und Partnerschaften, die durch Computer Vision Fähigkeiten ermöglicht werden und Synergien für alle Beteiligten schaffen."
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
