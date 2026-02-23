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
    console.log('Updating ISO 27001 Kaufen page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-kaufen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-kaufen" not found')
    }
    
    // Create new FAQs for ISO 27001 procurement fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Faktoren sind bei der Beschaffung von ISO 27001 Services entscheidend?',
        answer: "Die strategische Beschaffung von ISO 27001 Services erfordert eine ganzheitliche Betrachtung, die weit über reine Kostenvergleiche hinausgeht. Erfolgreiche Procurement-Entscheidungen basieren auf einer systematischen Bewertung von Anbieterkompetenzen, Servicequalität und langfristigem Wertbeitrag für die Unternehmensstrategie.\n\n🎯 Strategische Anbieteranalyse:\n• Bewertung der fachlichen Tiefe und Breite der Anbieterexpertise in verschiedenen Branchen und Compliance-Frameworks\n• Analyse der Implementierungsmethodik und bewährten Praktiken des Service-Providers\n• Prüfung von Referenzen und Erfolgsraten bei vergleichbaren Projekten in ähnlichen Unternehmensgrößen\n• Bewertung der Innovationsfähigkeit und Zukunftsorientierung des Anbieters\n• Einschätzung der kulturellen Passung und Kommunikationsfähigkeit für erfolgreiche Zusammenarbeit\n\n💼 Geschäftsausrichtung und Wertbeitrag:\n• Alignment der Service-Angebote mit Ihren strategischen Geschäftszielen und Compliance-Anforderungen\n• Bewertung des Beitrags zur Wettbewerbsfähigkeit und Marktpositionierung Ihres Unternehmens\n• Analyse der Integration in bestehende Managementsysteme und Geschäftsprozesse\n• Prüfung der Skalierbarkeit und Anpassungsfähigkeit an zukünftige Geschäftsentwicklungen\n• Bewertung des Potenzials für Synergieeffekte mit anderen Compliance-Initiativen\n\n🔍 Qualitäts- und Kompetenzkriterien:\n• Zertifizierungen und Qualifikationen der Beraterteams sowie deren kontinuierliche Weiterbildung\n• Methodische Ansätze und Tools für Projektmanagement und Qualitätssicherung\n• Verfügbarkeit spezialisierter Expertise für branchenspezifische Anforderungen\n• Track Record bei der Bewältigung komplexer Implementierungsherausforderungen\n• Fähigkeit zur Wissenstransfer und Kompetenzentwicklung in Ihrem Unternehmen\n\n⚖️ Risikobewertung und Stabilität:\n• Finanzielle Stabilität und Marktposition des Service-Providers\n• Bewertung von Projektrisiken und Mitigation-Strategien\n• Analyse der Ressourcenverfügbarkeit und Kapazitätsplanung\n• Prüfung von Backup-Szenarien und Kontinuitätsplänen\n• Bewertung der Compliance-Historie und regulatorischen Expertise des Anbieters\n\n🤝 Partnerschaftspotenzial und Langfristigkeit:\n• Bewertung der Bereitschaft zu langfristigen Partnerschaften und strategischer Zusammenarbeit\n• Flexibilität bei Vertragsgestaltung und Anpassung an veränderte Anforderungen\n• Potenzial für Weiterentwicklung der Zusammenarbeit über die initiale Implementierung hinaus\n• Verfügbarkeit von Wartungs- und Optimierungsservices für kontinuierliche ISMS-Verbesserung\n• Möglichkeiten für gemeinsame Innovation und Entwicklung zukunftsorientierter Lösungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine effektive RFP-Strategie für ISO 27001 Implementierungsservices?',
        answer: "Eine effektive RFP-Strategie für ISO 27001 Services bildet das Fundament für erfolgreiche Vendor-Auswahl und optimale Projektergebnisse. Durch strukturierte Anforderungsdefinition und strategische Ausschreibungsgestaltung schaffen Sie die Basis für objektive Anbietervergleiche und fundierte Entscheidungsfindung.\n\n📋 Strategische Anforderungsanalyse:\n• Umfassende Stakeholder-Befragung zur Identifikation aller funktionalen und nicht-funktionalen Anforderungen\n• Priorisierung der Anforderungen nach Kritikalität und Geschäftswert für fokussierte Bewertung\n• Definition messbarer Erfolgskriterien und KPIs für objektive Leistungsbewertung\n• Berücksichtigung zukünftiger Entwicklungen und Skalierungsanforderungen\n• Integration branchenspezifischer und regulatorischer Besonderheiten in die Anforderungsmatrix\n\n🎯 RFP-Strukturierung und Inhaltsgestaltung:\n• Entwicklung einer klaren, strukturierten RFP-Architektur mit logischen Bewertungskategorien\n• Formulierung präziser, eindeutiger Fragen, die vergleichbare Antworten ermöglichen\n• Integration von Szenario-basierten Fragen zur Bewertung der Problemlösungskompetenz\n• Einbindung von Referenzprojekt-Anfragen mit spezifischen Erfolgsmetriken\n• Berücksichtigung von Innovation und Mehrwertpotenzialen in der Fragestellung\n\n💡 Bewertungsframework und Scoring-Modell:\n• Entwicklung gewichteter Bewertungskriterien basierend auf strategischen Prioritäten\n• Definition objektiver Scoring-Mechanismen für qualitative und quantitative Faktoren\n• Einrichtung strukturierter Bewertungsprozesse mit mehreren Evaluatoren\n• Integration von Risikobewertung und Compliance-Faktoren in das Scoring-System\n• Berücksichtigung von Total Cost of Ownership und langfristigem Wertbeitrag\n\n🔄 Ausschreibungsprozess und Vendor-Engagement:\n• Strategische Vendor-Vorauswahl basierend auf Marktanalyse und Kompetenzprofilen\n• Gestaltung eines transparenten, fairen Ausschreibungsprozesses mit klaren Timelines\n• Organisation von Vendor-Präsentationen und interaktiven Q&A-Sessions\n• Durchführung von Proof-of-Concept-Evaluationen für kritische Servicebereiche\n• Implementierung strukturierter Referenz-Checks und Due-Diligence-Prozesse\n\n📊 Vergleichsanalyse und Entscheidungsfindung:\n• Entwicklung standardisierter Vergleichsmatrizen für objektive Anbietergegenüberstellung\n• Durchführung detaillierter Kosten-Nutzen-Analysen mit verschiedenen Szenarien\n• Integration qualitativer Faktoren wie kulturelle Passung und Kommunikationsstil\n• Bewertung von Implementierungsrisiken und Mitigation-Strategien der Anbieter\n• Erstellung fundierter Entscheidungsempfehlungen mit klarer Begründung und Risikoanalyse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Kostenmodelle und Preisstrukturen sind bei ISO 27001 Service-Beschaffung optimal?',
        answer: "Die Wahl des optimalen Kostenmodells für ISO 27001 Services hat erheblichen Einfluss auf Projektkosten, Risikomanagement und langfristige Wertschöpfung. Verschiedene Preisstrukturen bieten unterschiedliche Vorteile und erfordern strategische Bewertung basierend auf Projektcharakteristika und Unternehmenszielen.\n\n💰 Festpreis-Modelle und deren Optimierung:\n• Vorteile der Kostensicherheit und Budgetplanbarkeit für klar definierte Projektumfänge\n• Risikotransfer an den Service-Provider bei Scope-Änderungen und unvorhergesehenen Herausforderungen\n• Notwendigkeit präziser Anforderungsdefinition und umfassender Scope-Dokumentation\n• Integration von Change-Request-Mechanismen für Flexibilität bei Anpassungen\n• Bewertung von Anreizstrukturen für Qualität und Termingerechte Lieferung\n\n⏱️ Time-and-Material-Ansätze:\n• Flexibilität bei sich entwickelnden Anforderungen und iterativen Implementierungsansätzen\n• Transparenz über tatsächlich erbrachte Leistungen und Ressourceneinsatz\n• Notwendigkeit robuster Projektsteuerung und kontinuierlicher Kostenkontrolle\n• Potenzial für Kostenoptimierung durch effiziente Ressourcennutzung\n• Risikomanagement durch Budgetobergrenzen und regelmäßige Reviews\n\n🎯 Erfolgsbasierte Vergütungsmodelle:\n• Alignment der Anbieterinteressen mit Ihren Geschäftszielen und Erfolgskriterien\n• Definition messbarer Erfolgsmetriken wie Zertifizierungserfolg oder Compliance-Level\n• Kombination von Basis- und Performance-Komponenten für ausgewogene Risikoverteilung\n• Integration langfristiger Wertschöpfungsindikatoren in die Vergütungsstruktur\n• Berücksichtigung von Faktoren außerhalb der Anbieterverantwortung\n\n🔄 Hybride und modulare Preismodelle:\n• Kombination verschiedener Preisstrukturen für unterschiedliche Projektphasen\n• Modulare Servicepaket-Gestaltung für bedarfsgerechte Konfiguration\n• Skalierbare Preisstrukturen für verschiedene Unternehmensgrößen und Komplexitätsgrade\n• Integration von Wartungs- und Support-Komponenten in langfristige Preismodelle\n• Flexibilität für Scope-Erweiterungen und zusätzliche Compliance-Anforderungen\n\n📈 Total Cost of Ownership Optimierung:\n• Berücksichtigung aller direkten und indirekten Kosten über den gesamten Lebenszyklus\n• Bewertung von Opportunitätskosten und Ressourcenbindung in verschiedenen Modellen\n• Analyse von Risikokostenfaktoren und deren Auswirkung auf die Gesamtkosten\n• Integration von Wertschöpfungspotenzialen und ROI-Faktoren in die Kostenbewertung\n• Langfristige Kostenplanung für kontinuierliche ISMS-Optimierung und Compliance-Sicherung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet man effektive SLAs und Performance-Metriken für ISO 27001 Service-Verträge?',
        answer: "Effektive SLAs und Performance-Metriken bilden das Rückgrat erfolgreicher ISO 27001 Service-Partnerschaften und gewährleisten messbare Qualität, Transparenz und kontinuierliche Verbesserung. Durch strategische SLA-Gestaltung schaffen Sie klare Erwartungen und Anreize für optimale Serviceleistung.\n\n🎯 Strategische SLA-Architektur:\n• Definition hierarchischer SLA-Strukturen mit Service-, Prozess- und Outcome-Level-Metriken\n• Alignment der SLAs mit Ihren Geschäftszielen und kritischen Erfolgsfaktoren\n• Berücksichtigung verschiedener Servicekategorien mit angemessenen Leistungsstandards\n• Integration von Flexibilität für sich ändernde Anforderungen und Geschäftsprioritäten\n• Entwicklung ausgewogener Metrik-Portfolios für umfassende Leistungsbewertung\n\n📊 Messbare Performance-Indikatoren:\n• Qualitätsmetriken wie Deliverable-Qualität, Compliance-Grad und Audit-Erfolgsraten\n• Zeitbasierte Metriken für Projektmeilensteine, Response-Zeiten und Implementierungsgeschwindigkeit\n• Effizienzindikatoren für Ressourcennutzung, Kosteneffizienz und Produktivitätskennzahlen\n• Kundenzufriedenheitsmetriken durch regelmäßige Stakeholder-Bewertungen und Feedback-Mechanismen\n• Innovationsmetriken für kontinuierliche Verbesserung und Mehrwertgenerierung\n\n⚖️ Anreiz- und Penalty-Strukturen:\n• Entwicklung ausgewogener Bonus-Malus-Systeme für Performance-orientierte Vergütung\n• Definition fairer Penalty-Strukturen, die Verbesserung fördern statt nur bestrafen\n• Integration von Eskalationsmechanismen für systematische Problemlösung\n• Berücksichtigung von Faktoren außerhalb der Anbieterverantwortung\n• Schaffung von Anreizen für proaktive Verbesserungsvorschläge und Innovation\n\n🔄 Monitoring und Reporting-Mechanismen:\n• Etablierung automatisierter Datenerfassung und Real-time-Monitoring-Systeme\n• Entwicklung standardisierter Reporting-Formate für transparente Leistungsdarstellung\n• Implementation regelmäßiger Service-Reviews und Performance-Diskussionen\n• Integration von Trend-Analysen und Predictive-Analytics für proaktives Management\n• Schaffung von Dashboards für kontinuierliche Sichtbarkeit der Service-Performance\n\n🚀 Kontinuierliche Optimierung und Evolution:\n• Etablierung regelmäßiger SLA-Reviews und Anpassungsmechanismen\n• Integration von Lessons-Learned und Best-Practice-Sharing in die SLA-Evolution\n• Entwicklung von Benchmarking-Prozessen für kontinuierliche Leistungssteigerung\n• Schaffung von Feedback-Loops für bidirektionale Verbesserung\n• Berücksichtigung sich ändernder Compliance-Anforderungen und Marktstandards in der SLA-Weiterentwicklung"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
