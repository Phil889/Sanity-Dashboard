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
    console.log('Updating Basel III Gap-Analyse & Umsetzungsfahrplan page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-gap-analyse-umsetzungsfahrplan' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-gap-analyse-umsetzungsfahrplan" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie berücksichtigt ADVISORI bei der Gap-Analyse und Umsetzungsplanung die spezifischen Herausforderungen für unterschiedliche Bankgrößen und -typen?",
        answer: "Die Basel III-Anforderungen stellen je nach Bankengröße und -typus unterschiedliche Herausforderungen dar, die eine differenzierte Herangehensweise bei der Gap-Analyse und Umsetzungsplanung erfordern. ADVISORI's Methodik berücksichtigt diese institutsspezifischen Unterschiede konsequent, um maßgeschneiderte und proportionale Lösungsansätze zu entwickeln, die sowohl regulatorische Anforderungen erfüllen als auch die Geschäftsrealität reflektieren.\n\n🏦 Spezifische Berücksichtigung nach Institutsgröße:\n• Großbanken mit internationaler Präsenz: Fokus auf die komplexen Wechselwirkungen zwischen verschiedenen Jurisdiktionen und regulatorischen Regimes sowie Optimierungspotenziale in der gruppenweiten Kapital- und Liquiditätsallokation.\n• Mittelgroße Regionalbanken: Balanced-Scorecard-Ansatz zur Priorisierung von Anforderungen unter Berücksichtigung begrenzter Ressourcen und Expertise; Identifikation von Quick Wins mit hohem Compliance-Nutzen bei moderaten Implementierungskosten.\n• Kleine Institute und Spezialanbieter: Entwicklung von schlanken, kosteneffizienten Compliance-Lösungen mit Fokus auf Proportionalitätsprinzipien und regulatorische Erleichterungen; pragmatische Umsetzungsstrategien mit Betonung auf Outsourcing-Optionen für spezialisierte Funktionen.\n\n🎯 Berücksichtigung geschäftsmodellspezifischer Faktoren:\n• Universalbanken: Integrierte Analyse der diversen Geschäftsfelder mit unterschiedlichen regulatorischen Implikationen; Entwicklung einer kohärenten, aber flexiblen Implementierungsstrategie.\n• Retail-fokussierte Institute: Spezifische Berücksichtigung der Kapitalanforderungen für Privatkunden- und Immobilienportfolios; Optimierung der operativen Prozesse zur effizienten Anwendung von Retailportfolio-spezifischen Regelungen.\n• Investment Banking & Capital Markets: Fokus auf die komplexen Anforderungen für Marktrisiken, Gegenparteirisiken und Handelsbuchaktivitäten; detaillierte Gap-Analyse der Risikomanagement- und Pricing-Modelle.\n\n📊 ADVISORI's maßgeschneiderte Methodik:\n• Modularer Assessment-Ansatz: Flexibler Analyserahmen, der an die spezifischen Anforderungen und Komplexität des Instituts angepasst wird.\n• Proportionalitätsbasierte Bewertung: Systematische Berücksichtigung von regulatorischen Erleichterungen und verhältnismäßigen Implementierungsoptionen.\n• Peer-Group-Benchmarking: Einbindung von relevanten Vergleichsinstituten zur Kontextualisierung der Ergebnisse und Identifikation branchenspezifischer Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt die Datenverfügbarkeit und -qualität bei der Basel III Gap-Analyse, und wie unterstützt ADVISORI bei der Identifikation und Behebung von Datenlücken?",
        answer: "Datenqualität und -verfügbarkeit sind fundamentale Erfolgsfaktoren für die Basel III-Compliance, da sie nicht nur die Zuverlässigkeit der Gap-Analyse beeinflussen, sondern auch die Grundlage für nachhaltige Implementierungslösungen bilden. ADVISORI's umfassender Ansatz zur Datenanalyse stellt sicher, dass Datenlücken systematisch identifiziert und mit geeigneten Lösungsstrategien adressiert werden.\n\n🔍 Datenherausforderungen im Basel III-Kontext:\n• Granularitätsanforderungen: Basel III erfordert deutlich detailliertere Daten auf Einzelgeschäftsebene für präzise Risikobewertungen und regulatorische Berechnungen – dies überschreitet oft die Kapazitäten bestehender Datensysteme.\n• Cross-funktionale Datenkonsistenz: Kohärente Datenanalysen über Abteilungsgrenzen hinweg (Risiko, Finanzen, Treasury, Compliance) sind essentiell, werden aber häufig durch Datensilos und inkonsistente Definitionen erschwert.\n• Historische Datenlimitationen: Für fortgeschrittene Risikomodelle und Validierungen werden oft lange Zeitreihen benötigt, die in bestehenden Systemen nicht in ausreichender Qualität verfügbar sind.\n• Zunehmende externe Berichtsanforderungen: Aufsichtsbehörden fordern immer granularere, häufigere und konsistentere Datenlieferungen, was die Dateninfrastruktur vor neue Herausforderungen stellt.\n\n📈 ADVISORI's systematische Datenbewertungsmethodik:\n• Multi-Layer Data Assessment: Strukturierte Analyse der Datenverfügbarkeit und -qualität auf verschiedenen Ebenen – von Einzeldatenfeldern über Datenobjekte bis hin zu End-to-End-Datenprozessen.\n• Regulatorisch-getriebenes Data Mapping: Präzise Kartierung der regulatorischen Datenanforderungen gegen vorhandene Datenquellen und -strukturen zur systematischen Identifikation von Lücken.\n• Data Lineage & Process Analysis: Transparente Nachverfolgung der Datenflüsse von der Quelle bis zur regulatorischen Berichterstattung zur Identifikation von Bruchstellen und Qualitätsproblemen.\n• Priorisierte Datenlückenanalyse: Bewertung identifizierter Datenlücken nach regulatorischer Kritikalität, Implementierungsaufwand und potenziellen Geschäftsauswirkungen.\n\n🛠️ Strategische Lösungsansätze für Datenlücken:\n• Data Remediation Roadmap: Entwicklung eines strukturierten Plans zur systematischen Schließung von Datenlücken, integriert in den Gesamtumsetzungsfahrplan.\n• Data Governance Enhancement: Stärkung der Daten-Governance-Strukturen und -Prozesse zur nachhaltigen Sicherung der Datenqualität über den regulatorischen Compliance-Kontext hinaus.\n• Strategische Datenlösungsarchitektur: Konzeption einer zukunftsfähigen Datenarchitektur, die sowohl regulatorische Anforderungen erfüllt als auch geschäftliche Mehrwerte generiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir sicherstellen, dass unser Basel III Umsetzungsfahrplan robust gegenüber regulatorischen Änderungen und Marktentwicklungen bleibt?",
        answer: "Die Entwicklung eines Basel III Umsetzungsfahrplans erfolgt in einem dynamischen regulatorischen Umfeld, das kontinuierliche Anpassungen und Präzisierungen erfährt. Ein resilientes Implementierungskonzept muss daher Flexibilität und Adaptivität als Kernprinzipien verankern, um auf regulatorische Änderungen, Marktentwicklungen und institutsspezifische Veränderungen reagieren zu können, ohne die grundlegende Implementierungsstrategie zu gefährden.\n\n🔄 Kernprinzipien für einen adaptiven Umsetzungsfahrplan:\n• Modularer Implementierungsansatz: Strukturierung des Gesamtplans in eigenständige, aber miteinander verbundene Module, die bei regulatorischen Änderungen isoliert angepasst werden können, ohne den gesamten Plan zu destabilisieren.\n• Regulatorisches Frühwarnsystem: Etablierung eines systematischen Prozesses zur Überwachung und Bewertung regulatorischer Entwicklungen, der frühzeitig potenzielle Auswirkungen auf den Implementierungsplan identifiziert.\n• Szenariobasierte Planung: Integration von alternativen Implementierungsszenarien für Bereiche mit hoher regulatorischer Unsicherheit, um schnelle Anpassungen bei Konkretisierung oder Änderung der Anforderungen zu ermöglichen.\n• Agile Governance-Strukturen: Implementierung eines Steuerungsmodells mit klaren Entscheidungsprozessen für plan- und priorisierungsrelevante Anpassungen, das schnelle und fundierte Reaktionen ermöglicht.\n\n⚙️ ADVISORI's Methodik für dynamische Implementierungsplanung:\n• Continuous Regulatory Monitoring: Systematische Überwachung und Analyse regulatorischer Entwicklungen auf nationaler und internationaler Ebene, unterstützt durch ADVISORI's Regulierungsexperten und institutionalisierte Beziehungen zu Aufsichtsbehörden.\n• Impact Assessment Framework: Strukturierte Methodik zur schnellen Bewertung der Auswirkungen regulatorischer Änderungen auf bestehende Implementierungspläne, mit klarer Kategorisierung nach Kritikalität und Anpassungsbedarf.\n• Dynamic Roadmap Management: Regelmäßige, formalisierte Überprüfung und Aktualisierung des Umsetzungsfahrplans, die sowohl regulatorische Entwicklungen als auch Projekterfahrungen und Fortschritte berücksichtigt.\n• Stakeholder Communication Strategy: Entwicklung eines transparenten Kommunikationskonzepts für die Vermittlung von planbezogenen Änderungen an alle relevanten Stakeholder, um Akzeptanz und kontinuierliches Engagement sicherzustellen.\n\n🔍 Präventive Maßnahmen zur Risikominimierung:\n• Fokus auf stabile regulatorische Kernelemente: Priorisierung von Implementierungsaktivitäten in Bereichen mit geringer Wahrscheinlichkeit substanzieller regulatorischer Änderungen.\n• Flexible Ressourcenallokation: Etablierung von Ressourcenpuffern und flexiblen Kapazitätsmodellen, die schnelle Reaktionen auf unerwartete regulatorische Anforderungen ermöglichen.\n• Regulatorischer Dialog: Proaktiver Austausch mit Aufsichtsbehörden zu Implementierungsansätzen und -herausforderungen, um frühzeitig Feedback zu erhalten und potenzielle Fehlinterpretationen zu vermeiden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche methodischen Ansätze verwendet ADVISORI, um die Auswirkungen der Basel III-Anforderungen auf unser Geschäftsmodell und unsere Profitabilität zu bewerten?",
        answer: "Die Basel III-Anforderungen können signifikante Auswirkungen auf Geschäftsmodelle und Profitabilität von Finanzinstituten haben, die über die reine Compliance-Dimension hinausgehen. ADVISORI setzt differenzierte quantitative und qualitative Analysemethoden ein, um diese Auswirkungen präzise zu bewerten und strategische Handlungsoptionen zu identifizieren, die sowohl regulatorische Compliance als auch wirtschaftliche Nachhaltigkeit sicherstellen.\n\n📊 Quantitative Analysemethoden für präzise Impact-Bewertung:\n• Multi-Szenario-Kapitalmodellierung: Entwicklung detaillierter Simulationsmodelle zur Quantifizierung der Auswirkungen auf Kapitalquoten unter verschiedenen Geschäfts- und Marktszenarien, mit besonderem Fokus auf RWA-Optimierungspotenziale.\n• Geschäftsfeldspezifische Profitabilitätsanalyse: Granulare Bewertung der Auswirkungen auf Rentabilitätskennzahlen (RoE, RoRWA, RoA) auf Geschäftsfeld- und Produktebene zur Identifikation besonders betroffener Bereiche.\n• Liquiditätskostenallokation und -bewertung: Analyse der Auswirkungen verschärfter Liquiditätsanforderungen (LCR, NSFR) auf die Refinanzierungskosten und daraus resultierende Produktprofitabilität.\n• Integrierte Bilanz- und GuV-Projektion: Entwicklung mehrjähriger Finanzprojektionen unter Berücksichtigung der phasenweisen Basel III-Implementierung und instituts-spezifischer Geschäftsstrategien.\n\n🔍 Qualitative Bewertungsdimensionen für ganzheitliche Betrachtung:\n• Strategische Positionierungsanalyse: Bewertung der Auswirkungen auf die Wettbewerbsposition und strategische Differenzierungsfaktoren im relevanten Marktumfeld.\n• Geschäftsmodell-Resilienz-Assessment: Strukturierte Analyse der Robustheit des Geschäftsmodells gegenüber regulatorischen Veränderungen und identifizierten Kapital- und Liquiditätsanforderungen.\n• Produktlebenszyklus-Bewertung: Evaluation bestehender und geplanter Produkte hinsichtlich ihrer langfristigen Tragfähigkeit unter verschärften regulatorischen Bedingungen.\n• Kompetenz- und Organisationsanalyse: Bewertung der notwendigen Anpassungen in Organisationsstruktur, Governance und Kompetenzprofilen zur Unterstützung eines Basel III-konformen Geschäftsmodells.\n\n💡 Strategische Handlungsoptionen auf Basis der Analyseergebnisse:\n• Portfolio-Optimierungsstrategien: Identifikation spezifischer Maßnahmen zur Neuausrichtung von Geschäftsfeldern und Produktportfolios, die unter Basel III besonders ineffizient oder kapitalintensiv sind.\n• Pricing- und Konditionenanpassungen: Entwicklung risikoadjustierter Pricing-Strategien, die regulatorische Kapital- und Liquiditätskosten adäquat reflektieren und Profitabilitätsmargen sichern.\n• Alternative Geschäftsmodell-Szenarien: Ausarbeitung strategischer Optionen für eine fundamentalere Neuausrichtung besonders betroffener Geschäftsbereiche, einschließlich Kooperations- und Outsourcing-Modellen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
