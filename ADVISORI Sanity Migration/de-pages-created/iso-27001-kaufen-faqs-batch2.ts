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
    console.log('Updating ISO 27001 Kaufen page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-kaufen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-kaufen" not found')
    }
    
    // Create new FAQs for vendor evaluation and due diligence
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Due-Diligence-Prozesse sind bei der Auswahl von ISO 27001 Service-Providern kritisch?',
        answer: "Due-Diligence-Prozesse bilden das Fundament für fundierte Vendor-Entscheidungen und minimieren Implementierungsrisiken durch systematische Bewertung der Anbieterqualifikation. Umfassende Due-Diligence geht über oberflächliche Referenz-Checks hinaus und analysiert tiefgreifend die Fähigkeiten, Stabilität und Eignung des Service-Providers.\n\n🔍 Technische und fachliche Kompetenzprüfung:\n• Detaillierte Analyse der Beraterqualifikationen, Zertifizierungen und kontinuierlichen Weiterbildungsmaßnahmen\n• Bewertung der methodischen Ansätze und proprietären Tools für ISO 27001 Implementierung\n• Prüfung der Branchenerfahrung und Spezialisierung auf ähnliche Unternehmensprofile\n• Analyse der Innovationsfähigkeit und Anpassung an neue Compliance-Anforderungen\n• Bewertung der technischen Infrastruktur und digitalen Capabilities des Anbieters\n\n💼 Finanzielle Stabilität und Geschäftsrisiken:\n• Umfassende Finanzanalyse einschließlich Bonität, Liquidität und Profitabilitätstrends\n• Bewertung der Marktposition und Wettbewerbsfähigkeit des Service-Providers\n• Analyse der Kundenstruktur und Abhängigkeiten von Großkunden\n• Prüfung der Versicherungsdeckung und Haftungsabsicherung\n• Bewertung der strategischen Ausrichtung und langfristigen Geschäftspläne\n\n📊 Referenz-Analyse und Performance-Validierung:\n• Strukturierte Referenz-Interviews mit vergleichbaren Kunden und Projekttypen\n• Analyse von Projekterfolgsraten, Zeitplänen und Budgeteinhaltung\n• Bewertung der Kundenzufriedenheit und langfristigen Partnerschaftsqualität\n• Prüfung von Problemlösungsfähigkeiten und Krisenmanagement-Kompetenzen\n• Validierung von Compliance-Erfolgen und Zertifizierungsraten\n\n🛡️ Compliance und Sicherheitsbewertung:\n• Prüfung der eigenen ISO 27001 Zertifizierung und anderer relevanter Standards\n• Bewertung der Datenschutz- und Sicherheitsmaßnahmen des Anbieters\n• Analyse der Compliance-Historie und regulatorischen Expertise\n• Prüfung der Subunternehmer und Lieferantenkette des Service-Providers\n• Bewertung der Dokumentations- und Audit-Praktiken\n\n🤝 Kulturelle Passung und Zusammenarbeitsqualität:\n• Assessment der Kommunikationsstile und kulturellen Kompatibilität\n• Bewertung der Projektmanagement-Ansätze und Kollaborationsmethoden\n• Analyse der Flexibilität und Anpassungsfähigkeit an Ihre Arbeitsweise\n• Prüfung der Eskalations- und Konfliktlösungsmechanismen\n• Bewertung der Bereitschaft zu transparenter und partnerschaftlicher Zusammenarbeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie bewertet man die ROI-Potenziale verschiedener ISO 27001 Service-Angebote objektiv?',
        answer: "Die objektive ROI-Bewertung von ISO 27001 Services erfordert eine systematische Analyse direkter und indirekter Wertbeiträge sowie eine realistische Einschätzung der Implementierungskosten und langfristigen Nutzeneffekte. Erfolgreiche ROI-Bewertung kombiniert quantitative Metriken mit qualitativen Wertfaktoren für eine ganzheitliche Investitionsentscheidung.\n\n💰 Direkte Kosteneinsparungen und Effizienzgewinne:\n• Quantifizierung von Prozessoptimierungen und Automatisierungspotenzialen durch ISMS-Implementierung\n• Bewertung von Ressourceneinsparungen durch standardisierte Sicherheitsprozesse\n• Analyse von Compliance-Effizienzsteigerungen und reduzierten Audit-Kosten\n• Berechnung von Zeitersparnissen durch verbesserte Incident-Response-Prozesse\n• Bewertung von Skaleneffekten bei Multi-Standard-Implementierungen\n\n🛡️ Risikominimierung und Schadensvermeidung:\n• Quantifizierung potenzieller Schäden durch Sicherheitsvorfälle und deren Wahrscheinlichkeitsreduktion\n• Bewertung von Compliance-Risiken und Vermeidung regulatorischer Strafen\n• Analyse von Reputationsschutz und Vertrauensgewinn bei Stakeholdern\n• Berechnung von Versicherungsprämien-Reduktionen durch verbesserte Sicherheitslage\n• Bewertung von Business-Continuity-Verbesserungen und Ausfallkostenreduktion\n\n📈 Geschäftswert und Wettbewerbsvorteile:\n• Quantifizierung von Umsatzpotenzialen durch verbesserte Marktpositionierung\n• Bewertung von Kundengewinnungs- und Kundenbindungseffekten\n• Analyse von Markterschließungspotenzialen durch Compliance-Nachweis\n• Berechnung von Verhandlungsvorteilen bei Geschäftspartnerschaften\n• Bewertung von Innovationspotenzialen durch strukturierte Sicherheitsprozesse\n\n⏱️ Zeitwert und Implementierungsgeschwindigkeit:\n• Bewertung der Time-to-Market-Vorteile durch beschleunigte Zertifizierung\n• Analyse von Opportunitätskosten bei verzögerter Implementierung\n• Berechnung von First-Mover-Advantages in compliance-sensitiven Märkten\n• Bewertung von Lernkurveneffekten und Kompetenzaufbau-Geschwindigkeit\n• Analyse von Synergiepotenzialen mit anderen strategischen Initiativen\n\n🔄 Langfristige Wertschöpfung und Nachhaltigkeit:\n• Bewertung der Skalierbarkeit und Anpassungsfähigkeit der implementierten Lösung\n• Analyse von kontinuierlichen Verbesserungspotenzialen und Optimierungszyklen\n• Berechnung von Wartungs- und Betriebskosten über den gesamten Lebenszyklus\n• Bewertung von Technologie-Evolution und Future-Proofing der Investition\n• Analyse von Wissenstransfer und interner Kompetenzentwicklung als langfristige Assets"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Vertragsstrukturen und Risikoteilung sind bei ISO 27001 Service-Beschaffung optimal?',
        answer: "Optimale Vertragsstrukturen für ISO 27001 Services balancieren Risikoteilung, Performance-Anreize und Flexibilität für eine erfolgreiche Partnerschaft. Strategische Vertragsgestaltung schafft Win-Win-Situationen, die sowohl Anbieter als auch Auftraggeber motivieren und gleichzeitig Risiken angemessen verteilen.\n\n⚖️ Ausgewogene Risikoteilung und Verantwortlichkeiten:\n• Klare Abgrenzung der Verantwortlichkeiten zwischen Auftraggeber und Service-Provider\n• Angemessene Risikoallokation basierend auf Kontrollierbarkeit und Expertise\n• Definition von Force-Majeure-Klauseln und unvorhersehbaren Ereignissen\n• Berücksichtigung regulatorischer Änderungen und deren Auswirkungen auf den Projektumfang\n• Etablierung von Eskalationsmechanismen für Risikomanagement und Problemlösung\n\n🎯 Performance-orientierte Vergütungsstrukturen:\n• Kombination von Basis-Vergütung und erfolgsabhängigen Komponenten\n• Definition messbarer Meilensteine und Qualitätskriterien für Performance-Bewertung\n• Integration von Bonus-Malus-Systemen für Termingerechte und qualitätsgerechte Lieferung\n• Berücksichtigung von Kundenzufriedenheit und langfristigem Projekterfolg\n• Schaffung von Anreizen für Innovation und kontinuierliche Verbesserung\n\n🔄 Flexibilität und Anpassungsfähigkeit:\n• Modulare Vertragsstrukturen für phasenweise Implementierung und Scope-Anpassungen\n• Change-Request-Mechanismen für Anforderungsänderungen und Scope-Erweiterungen\n• Optionale Service-Komponenten für bedarfsgerechte Konfiguration\n• Skalierungsklauseln für Unternehmensgrößen-Änderungen und Wachstum\n• Exit-Strategien und Transition-Pläne für verschiedene Szenarien\n\n📋 Qualitätssicherung und Compliance-Garantien:\n• Definition von Service Level Agreements mit messbaren Qualitätsindikatoren\n• Compliance-Garantien und Haftungsregelungen für regulatorische Anforderungen\n• Audit-Rechte und Transparenz-Verpflichtungen für kontinuierliche Qualitätskontrolle\n• Dokumentations- und Reporting-Standards für Nachvollziehbarkeit\n• Zertifizierungs-Garantien und Erfolgs-Kriterien für ISO 27001 Compliance\n\n🤝 Partnerschaftliche Zusammenarbeit und Governance:\n• Etablierung gemeinsamer Governance-Strukturen und Entscheidungsgremien\n• Definition von Kommunikations- und Reporting-Rhythmen\n• Schaffung von Feedback-Mechanismen und kontinuierlichen Verbesserungsprozessen\n• Integration von Wissenstransfer und Kompetenzentwicklung in die Vertragsgestaltung\n• Berücksichtigung langfristiger Partnerschaftspotenziale und strategischer Zusammenarbeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie gestaltet man effektive Vendor-Management-Prozesse für langfristige ISO 27001 Partnerschaften?',
        answer: "Effektives Vendor-Management für ISO 27001 Partnerschaften erfordert strukturierte Prozesse, die über die initiale Implementierung hinaus nachhaltigen Wert schaffen und kontinuierliche Optimierung ermöglichen. Strategisches Vendor-Management transformiert Service-Provider-Beziehungen zu strategischen Partnerschaften mit messbarem Mehrwert.\n\n📊 Performance-Monitoring und KPI-Management:\n• Etablierung umfassender KPI-Dashboards für Real-time-Sichtbarkeit der Service-Performance\n• Definition ausgewogener Scorecard-Systeme mit Qualitäts-, Zeit-, Kosten- und Innovationsmetriken\n• Implementation automatisierter Datenerfassung und Trend-Analysen\n• Regelmäßige Performance-Reviews mit strukturierten Bewertungs- und Verbesserungsprozessen\n• Benchmarking gegen Marktstandards und Best-Practice-Vergleiche\n\n🔄 Kontinuierliche Verbesserung und Innovation:\n• Etablierung regelmäßiger Innovation-Workshops und Verbesserungs-Initiativen\n• Schaffung von Anreizsystemen für proaktive Optimierungsvorschläge\n• Integration von Lessons-Learned und Best-Practice-Sharing in die Partnerschaft\n• Entwicklung gemeinsamer Roadmaps für Service-Evolution und Capability-Erweiterung\n• Förderung von experimentellen Ansätzen und Pilot-Projekten für neue Methoden\n\n🤝 Relationship-Management und Stakeholder-Engagement:\n• Strukturierte Stakeholder-Mapping und Engagement-Strategien auf verschiedenen Organisationsebenen\n• Regelmäßige Executive-Reviews und strategische Alignment-Gespräche\n• Entwicklung gemeinsamer Governance-Strukturen und Entscheidungsprozesse\n• Schaffung von Cross-funktionalen Teams für operative Zusammenarbeit\n• Integration von Feedback-Mechanismen und Kommunikations-Rhythmen\n\n📈 Strategische Partnerschaftsentwicklung:\n• Bewertung von Erweiterungs- und Cross-Selling-Potenzialen für zusätzliche Services\n• Entwicklung langfristiger Partnerschafts-Roadmaps und gemeinsamer Ziele\n• Integration in strategische Planungsprozesse und Geschäftsentwicklung\n• Schaffung von Synergiepotenzialen mit anderen Vendor-Beziehungen\n• Bewertung von Joint-Venture und strategischen Allianz-Möglichkeiten\n\n🛡️ Risikomanagement und Compliance-Überwachung:\n• Kontinuierliche Überwachung der Vendor-Stabilität und Marktposition\n• Regelmäßige Compliance-Audits und Zertifizierungs-Status-Reviews\n• Bewertung von Cyber-Security-Risiken und Datenschutz-Compliance\n• Entwicklung von Contingency-Plänen und Backup-Strategien\n• Integration von regulatorischen Änderungen und deren Auswirkungen auf die Partnerschaft"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
