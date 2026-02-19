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
    console.log('Updating ISO 27001 Kaufen page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-kaufen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-kaufen" not found')
    }
    
    // Create new FAQs for market analysis and service packages
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie führt man eine effektive Marktanalyse für ISO 27001 Service-Provider durch?',
        answer: "Eine systematische Marktanalyse für ISO 27001 Service-Provider schafft die Grundlage für fundierte Beschaffungsentscheidungen und optimale Vendor-Auswahl. Durch strukturierte Marktbewertung identifizieren Sie die besten verfügbaren Optionen und entwickeln realistische Erwartungen für Ihre Implementierungsstrategie.\n\n🔍 Umfassende Vendor-Landscape-Analyse:\n• Systematische Identifikation aller relevanten Service-Provider im Markt durch Multi-Channel-Research\n• Kategorisierung der Anbieter nach Größe, Spezialisierung, geografischer Abdeckung und Zielgruppen\n• Bewertung der Marktpositionierung und Unique Value Propositions verschiedener Anbieter\n• Analyse von Markttrends, Konsolidierungstendenzen und emerging Players\n• Mapping der Competitive Landscape und Identifikation von Marktführern und Nischenspezialistern\n\n📊 Kompetenz- und Capability-Assessment:\n• Detaillierte Bewertung der fachlichen Expertise und Zertifizierungslandschaft der Anbieter\n• Analyse der Methodiken, Tools und proprietären Frameworks verschiedener Service-Provider\n• Bewertung der Branchenerfahrung und Spezialisierung auf spezifische Compliance-Anforderungen\n• Prüfung der Innovationsfähigkeit und Anpassung an neue regulatorische Entwicklungen\n• Assessment der technischen Capabilities und digitalen Transformation-Kompetenzen\n\n💰 Preis- und Kostenstruktur-Analyse:\n• Systematische Bewertung der Preismodelle und Kostenstrukturen verschiedener Anbieter\n• Benchmarking von Marktpreisen für verschiedene Service-Kategorien und Projektgrößen\n• Analyse von Total Cost of Ownership und versteckten Kostenfaktoren\n• Bewertung von Value-for-Money-Verhältnissen und Preis-Leistungs-Optimierung\n• Identifikation von Kostenoptimierungspotenzialen durch strategische Vendor-Auswahl\n\n🎯 Service-Portfolio und Differenzierung:\n• Umfassende Analyse der Service-Portfolios und Leistungsumfänge verschiedener Anbieter\n• Bewertung von Spezialisierungen, Nischenkompetenz und einzigartigen Service-Angeboten\n• Analyse von End-to-End-Capabilities versus spezialisierte Punkt-Lösungen\n• Prüfung von Skalierbarkeit und Anpassungsfähigkeit der Service-Angebote\n• Bewertung von Zusatzservices und Mehrwert-Komponenten\n\n📈 Marktdynamik und Zukunftstrends:\n• Analyse von Marktentwicklungen, Wachstumstrends und Zukunftsprognosen\n• Bewertung von Technologie-Trends und deren Auswirkungen auf Service-Angebote\n• Identifikation von regulatorischen Entwicklungen und deren Marktimpact\n• Prüfung von Konsolidierungstendenzen und strategischen Partnerschaften\n• Assessment von Disruptionspotenzialen und emerging Business Models"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Servicepaket-Konfigurationen bieten das beste Preis-Leistungs-Verhältnis?',
        answer: "Die optimale Servicepaket-Konfiguration balanciert Leistungsumfang, Qualität und Kosten für maximalen Wertbeitrag. Strategische Paket-Gestaltung berücksichtigt spezifische Unternehmensanforderungen, Reifegrad und langfristige Ziele für eine maßgeschneiderte und kosteneffiziente Lösung.\n\n🎯 Bedarfsgerechte Paket-Architektur:\n• Modulare Service-Strukturen, die exakt auf Ihre spezifischen Anforderungen und Reifegrad abgestimmt sind\n• Flexible Kombinationsmöglichkeiten von Basis-Services und optionalen Zusatzkomponenten\n• Skalierbare Pakete, die mit Ihrem Unternehmenswachstum und sich ändernden Anforderungen mitwachsen\n• Phasenorientierte Implementierungsansätze für optimale Ressourcenverteilung\n• Berücksichtigung bestehender Capabilities und Vermeidung von Doppelstrukturen\n\n💡 Value-Engineering und Kostenoptimierung:\n• Systematische Analyse des Wertbeitrags jeder Service-Komponente für Ihre spezifischen Ziele\n• Identifikation von High-Impact-Services mit optimalem Return on Investment\n• Eliminierung von Nice-to-Have-Komponenten zugunsten kritischer Must-Have-Services\n• Optimierung der Service-Mix für maximale Effizienz und minimale Redundanzen\n• Berücksichtigung von Synergieeffekten zwischen verschiedenen Service-Komponenten\n\n🔄 Hybride Service-Modelle:\n• Kombination von internen Ressourcen und externen Services für optimale Kosteneffizienz\n• Selective Outsourcing kritischer Komponenten bei Beibehaltung strategischer Kontrolle\n• Flexible Staffing-Modelle mit variablen Ressourcen-Allokationen\n• Integration von Remote- und On-Site-Services für geografische Optimierung\n• Nutzung von Offshore-Komponenten für kosteneffiziente Standardprozesse\n\n📊 Performance-basierte Paket-Strukturen:\n• Erfolgsabhängige Vergütungskomponenten für Alignment der Anbieterinteressen\n• Outcome-orientierte Service-Definitionen mit messbaren Erfolgskriterien\n• Risk-Sharing-Modelle für ausgewogene Risikoverteilung\n• Bonus-Malus-Systeme für Performance-Optimierung\n• Langfristige Partnerschaftsmodelle mit kontinuierlichen Verbesserungsanreizen\n\n🚀 Zukunftsorientierte Paket-Gestaltung:\n• Integration von Emerging Technologies und innovativen Ansätzen\n• Berücksichtigung zukünftiger Compliance-Anforderungen und regulatorischer Entwicklungen\n• Aufbau von Adaptionsfähigkeit für sich ändernde Geschäftsanforderungen\n• Investment in nachhaltige Capabilities und Wissenstransfer\n• Entwicklung von Upgrade-Pfaden und Erweiterungsmöglichkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie bewertet man die Qualität und Zuverlässigkeit von ISO 27001 Service-Anbietern objektiv?',
        answer: "Die objektive Bewertung von Service-Anbieter-Qualität erfordert systematische Evaluation-Frameworks, die über subjektive Eindrücke hinausgehen und messbare Kriterien für fundierte Entscheidungen liefern. Strukturierte Qualitätsbewertung minimiert Auswahlrisiken und gewährleistet optimale Anbieter-Performance.\n\n📋 Systematische Qualitäts-Assessment-Frameworks:\n• Entwicklung gewichteter Bewertungsmatrizen mit objektiven Qualitätskriterien und Leistungsindikatoren\n• Multi-dimensionale Evaluation covering technische Kompetenz, Prozessqualität, Kundenservice und Innovation\n• Standardisierte Scoring-Mechanismen für vergleichbare Anbieter-Bewertungen\n• Integration quantitativer Metriken und qualitativer Bewertungsfaktoren\n• Berücksichtigung branchenspezifischer Qualitätsstandards und Best Practices\n\n🔍 Evidence-basierte Performance-Validierung:\n• Detaillierte Analyse von Projekt-Portfolios, Erfolgsraten und Delivery-Performance\n• Systematische Auswertung von Kundenfeedback, Testimonials und Referenz-Interviews\n• Bewertung von Compliance-Track-Records und Zertifizierungserfolgen\n• Analyse von Problem-Resolution-Capabilities und Krisenmanagement-Kompetenzen\n• Prüfung von Innovation-Beiträgen und kontinuierlichen Verbesserungsleistungen\n\n🏆 Zertifizierungs- und Akkreditierungs-Analyse:\n• Bewertung relevanter Zertifizierungen, Akkreditierungen und Branchenmitgliedschaften\n• Prüfung der Gültigkeit und Aktualität von Qualifikationen und Standards-Compliance\n• Analyse der Weiterbildungs- und Kompetenzentwicklungs-Programme\n• Bewertung von Peer-Recognition und Industry-Awards\n• Assessment von Thought Leadership und Marktreputation\n\n⚖️ Risiko- und Stabilitäts-Assessment:\n• Umfassende Bewertung der finanziellen Stabilität und Geschäftskontinuität\n• Analyse von Risikomanagement-Praktiken und Business-Continuity-Plänen\n• Prüfung von Versicherungsdeckung, Haftungsabsicherung und Legal-Compliance\n• Bewertung von Cyber-Security-Maßnahmen und Datenschutz-Praktiken\n• Assessment von Vendor-Diversifikation und Abhängigkeits-Risiken\n\n🔄 Kontinuierliche Monitoring- und Feedback-Systeme:\n• Etablierung regelmäßiger Performance-Reviews und Qualitäts-Audits\n• Implementation von Real-time-Feedback-Mechanismen und Satisfaction-Surveys\n• Entwicklung von Trend-Analysen und Predictive-Quality-Indicators\n• Integration von Benchmarking-Prozessen und Competitive-Assessments\n• Aufbau von Continuous-Improvement-Partnerships mit Top-Performern"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielen Referenzen und Proof-of-Concepts bei der Vendor-Auswahl?',
        answer: "Referenzen und Proof-of-Concepts sind kritische Validierungs-Instrumente, die theoretische Anbieter-Claims in praktische Evidenz überführen und Implementierungsrisiken signifikant reduzieren. Strategisch eingesetzte Validierungs-Prozesse schaffen Vertrauen und gewährleisten optimale Anbieter-Performance.\n\n🎯 Strategische Referenz-Analyse und Validierung:\n• Systematische Auswahl relevanter Referenzkunden mit vergleichbaren Unternehmensgrößen, Branchen und Komplexitätsgraden\n• Strukturierte Referenz-Interviews mit standardisierten Fragenkatalogen für objektive Bewertungen\n• Tiefgreifende Analyse von Projekterfolgen, Herausforderungen und Lessons Learned\n• Bewertung der langfristigen Partnerschaftsqualität und Post-Implementation-Support\n• Validierung von Compliance-Erfolgen, Zertifizierungsraten und Audit-Ergebnissen\n\n🔬 Proof-of-Concept-Design und Durchführung:\n• Entwicklung repräsentativer PoC-Szenarien, die kritische Aspekte Ihrer spezifischen Anforderungen abbilden\n• Definition messbarer Erfolgskriterien und objektiver Bewertungsmetriken für PoC-Evaluation\n• Strukturierte PoC-Durchführung mit standardisierten Test-Protokollen und Dokumentation\n• Vergleichende PoC-Bewertung mehrerer Anbieter unter identischen Bedingungen\n• Integration von Stakeholder-Feedback und User-Experience-Bewertungen in die PoC-Analyse\n\n📊 Evidenz-basierte Entscheidungsfindung:\n• Systematische Dokumentation und Analyse aller Referenz- und PoC-Ergebnisse\n• Gewichtete Bewertung verschiedener Validierungs-Aspekte basierend auf strategischen Prioritäten\n• Cross-Referenzierung von Anbieter-Claims mit tatsächlichen Referenz-Erfahrungen\n• Identifikation von Patterns, Stärken und potenziellen Risikobereichen\n• Integration von Validierungs-Ergebnissen in die finale Vendor-Selection-Matrix\n\n🤝 Referenz-Relationship-Management:\n• Aufbau langfristiger Beziehungen zu Referenzkunden für kontinuierliche Insights\n• Entwicklung von Peer-Networks und Best-Practice-Sharing-Communities\n• Nutzung von Referenz-Beziehungen für Post-Implementation-Benchmarking\n• Schaffung von Feedback-Loops zwischen Referenzen und Service-Providern\n• Integration von Referenz-Learnings in die eigene Implementierungsstrategie\n\n🚀 Innovation und Future-Readiness-Validation:\n• Bewertung der Anbieter-Innovationsfähigkeit durch PoC-Ergebnisse\n• Prüfung der Adaptionsfähigkeit an neue Technologien und Compliance-Anforderungen\n• Assessment von Thought Leadership und Markt-Anticipation-Capabilities\n• Validierung von Continuous-Improvement-Ansätzen und Learning-Agility\n• Bewertung von Partnership-Potential und strategischer Alignment-Fähigkeit"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
