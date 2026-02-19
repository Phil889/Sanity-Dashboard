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
    console.log('Updating Business Continuity Management page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-business-continuity-management" not found')
    }
    
    // Create new FAQs for risk assessment and business impact analysis
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie führt man eine umfassende Risikobeurteilung für Business Continuity Management durch?',
        answer: "Eine umfassende Risikobeurteilung ist das Fundament für effektives Business Continuity Management und erfordert einen systematischen, methodischen Ansatz zur Identifikation, Analyse und Bewertung aller Risiken, die die Geschäftskontinuität beeinträchtigen könnten. Die Risikobeurteilung muss regelmäßig aktualisiert werden, um emerging risks und veränderte Bedrohungslandschaften zu berücksichtigen.\n\n🔍 Systematische Risikoidentifikation:\n• Durchführung strukturierter Workshops mit Stakeholdern aus allen Geschäftsbereichen zur Identifikation potenzieller Bedrohungen\n• Analyse historischer Störungen und Incidents sowohl intern als auch in der Branche\n• Bewertung externer Bedrohungsquellen wie Naturkatastrophen, Cyber-Angriffe, geopolitische Risiken und Pandemien\n• Identifikation interner Risiken wie Personalausfall, Systemausfälle, Prozessfehler und Lieferantenabhängigkeiten\n• Berücksichtigung von emerging risks und Black Swan Events durch Szenario-Planung und Trend-Analyse\n\n📊 Quantitative und qualitative Risikobewertung:\n• Bewertung der Eintrittswahrscheinlichkeit von Risiken basierend auf historischen Daten und Expertenschätzungen\n• Quantifizierung der potenziellen Auswirkungen auf Geschäftsprozesse, Finanzen und Reputation\n• Entwicklung von Risikomatrizen zur Visualisierung und Priorisierung von Risiken\n• Berücksichtigung von Interdependenzen und Kaskadeneffekten zwischen verschiedenen Risiken\n• Integration von Monte-Carlo-Simulationen und anderen statistischen Methoden für komplexe Risikoanalysen\n\n🌐 Ganzheitliche Betrachtung von Abhängigkeiten:\n• Mapping kritischer Abhängigkeiten von IT-Systemen, Infrastruktur und externen Dienstleistern\n• Analyse von geografischen Konzentrationen und Single Points of Failure\n• Bewertung von Lieferkettenrisiken und Abhängigkeiten von kritischen Lieferanten\n• Identifikation von Personalrisiken und kritischen Kompetenzen oder Schlüsselpersonen\n• Berücksichtigung regulatorischer und Compliance-Risiken in verschiedenen Jurisdiktionen\n\n🔄 Dynamische Risikobewertung und Monitoring:\n• Etablierung kontinuierlicher Monitoring-Prozesse für die Früherkennung sich verändernder Risiken\n• Integration von Real-time-Datenquellen und Frühwarnindikatoren in die Risikobewertung\n• Regelmäßige Überprüfung und Aktualisierung der Risikobeurteilung basierend auf neuen Erkenntnissen\n• Entwicklung von Trigger-Mechanismen für die Neubewertung von Risiken bei signifikanten Veränderungen\n• Aufbau einer Risiko-Intelligence-Funktion für die systematische Sammlung und Analyse von Risikoinformationen\n\n📋 Integration in BCM-Entscheidungsprozesse:\n• Verwendung der Risikobeurteilung als Grundlage für die Priorisierung von BCM-Investitionen\n• Integration von Risikoinformationen in die Entwicklung von Kontinuitätsstrategien und Recovery-Plänen\n• Berücksichtigung von Risikotoleranz und Risikoappetit bei BCM-Entscheidungen\n• Kommunikation von Risikoinformationen an relevante Stakeholder und Entscheidungsträger\n• Dokumentation und Nachverfolgung von Risikominderungsmaßnahmen und deren Wirksamkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Methoden gibt es für die Bestimmung von Recovery Time Objectives und Recovery Point Objectives?',
        answer: "Die Bestimmung von Recovery Time Objectives und Recovery Point Objectives ist ein kritischer Aspekt der Business Impact Analysis und erfordert eine sorgfältige Balance zwischen Geschäftsanforderungen, technischen Möglichkeiten und verfügbaren Ressourcen. RTOs und RPOs bilden die Grundlage für alle BCM-Entscheidungen und Investitionen.\n\n⏱️ Recovery Time Objective Bestimmung:\n• Systematische Analyse der maximalen tolerierbaren Ausfallzeit für jeden kritischen Geschäftsprozess\n• Berücksichtigung verschiedener Ausfallszenarien und deren unterschiedliche Auswirkungen auf Recovery-Zeiten\n• Bewertung der kumulativen Auswirkungen längerer Ausfälle auf Umsatz, Kosten und Reputation\n• Integration von Stakeholder-Anforderungen und regulatorischen Vorgaben in die RTO-Bestimmung\n• Entwicklung gestaffelter RTOs für verschiedene Service-Level und Kritikalitätsstufen\n\n💾 Recovery Point Objective Festlegung:\n• Bestimmung des maximalen tolerierbaren Datenverlusts für verschiedene Systeme und Anwendungen\n• Analyse der Geschäftskritikalität verschiedener Datentypen und deren Aktualisierungsfrequenz\n• Berücksichtigung von Compliance-Anforderungen und regulatorischen Vorgaben für Datenintegrität\n• Bewertung der Kosten verschiedener Backup- und Replikationsstrategien im Verhältnis zu RPO-Anforderungen\n• Integration von Datenabhängigkeiten und Konsistenzanforderungen zwischen verschiedenen Systemen\n\n📈 Kosten-Nutzen-Analyse für RTO/RPO:\n• Quantifizierung der Kosten für die Erreichung verschiedener RTO/RPO-Ziele\n• Bewertung der Geschäftsauswirkungen bei Nichterreichung der definierten Ziele\n• Entwicklung von Optimierungsmodellen für die Balance zwischen Kosten und Resilienz\n• Berücksichtigung von Opportunitätskosten und strategischen Vorteilen verbesserter RTOs/RPOs\n• Integration von Total Cost of Ownership Betrachtungen für verschiedene BCM-Lösungen\n\n🎯 Differenzierte Zielsetzung nach Kritikalität:\n• Entwicklung verschiedener RTO/RPO-Kategorien basierend auf Geschäftskritikalität\n• Berücksichtigung von Abhängigkeiten zwischen verschiedenen Prozessen und Systemen\n• Definition von Mindest-, Standard- und optimalen RTO/RPO-Zielen für verschiedene Szenarien\n• Integration von Service-Level-Agreements und externen Verpflichtungen\n• Entwicklung von Eskalationsmechanismen für Situationen, in denen Ziele nicht erreicht werden können\n\n🔄 Kontinuierliche Validierung und Anpassung:\n• Regelmäßige Überprüfung der RTO/RPO-Ziele durch Tests und Übungen\n• Anpassung der Ziele basierend auf veränderten Geschäftsanforderungen und technischen Möglichkeiten\n• Integration von Lessons Learned aus realen Störungen in die RTO/RPO-Bestimmung\n• Benchmarking mit Branchenstandards und Best Practices\n• Dokumentation und Kommunikation von RTO/RPO-Änderungen an alle relevanten Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie integriert man Business Continuity Management in bestehende Managementsysteme?',
        answer: "Die Integration von Business Continuity Management in bestehende Managementsysteme ist entscheidend für die Effizienz, Konsistenz und nachhaltige Wirksamkeit von BCM-Initiativen. Eine erfolgreiche Integration vermeidet Redundanzen, schafft Synergien und gewährleistet eine ganzheitliche Betrachtung von Geschäftsrisiken und -chancen.\n\n🔗 Integration mit Risikomanagement:\n• Harmonisierung von BCM-Risikobeurteilungen mit bestehenden Enterprise Risk Management Prozessen\n• Gemeinsame Nutzung von Risikodatenbanken und Bewertungsmethoden zwischen BCM und ERM\n• Integration von BCM-Metriken in bestehende Risiko-Dashboards und Reporting-Strukturen\n• Koordination zwischen BCM-Teams und Risikomanagement-Funktionen für konsistente Risikobehandlung\n• Entwicklung integrierter Governance-Strukturen für übergreifende Risiko- und Kontinuitätsentscheidungen\n\n📋 Qualitätsmanagement und ISO-Standards:\n• Alignment von BCM-Prozessen mit ISO 9001 Qualitätsmanagementsystemen\n• Integration von BCM-Dokumentation in bestehende QM-Dokumentationsstrukturen\n• Nutzung gemeinsamer Audit- und Review-Prozesse für BCM und Qualitätsmanagement\n• Harmonisierung von Verbesserungsprozessen und Corrective Action Procedures\n• Entwicklung integrierter Management Reviews für alle Managementsysteme\n\n🔒 Informationssicherheit und ISO 27001:\n• Koordination zwischen BCM und Information Security Management Systemen\n• Integration von IT-Disaster Recovery Plänen in umfassende BCM-Strategien\n• Gemeinsame Nutzung von Incident Response Prozessen und Eskalationsverfahren\n• Harmonisierung von Security- und Continuity-Awareness-Programmen\n• Integration von Cyber-Resilienz-Anforderungen in BCM-Planung und Testing\n\n🏢 Operative Managementsysteme:\n• Integration von BCM-Anforderungen in bestehende Operational Excellence Programme\n• Koordination mit Lean Management und Continuous Improvement Initiativen\n• Integration von BCM-Überlegungen in Change Management und Projektmanagement-Prozesse\n• Harmonisierung von BCM mit Supply Chain Management und Vendor Management\n• Entwicklung integrierter Performance Management Systeme mit BCM-KPIs\n\n🎯 Governance und Compliance Integration:\n• Einbettung von BCM in bestehende Corporate Governance Strukturen\n• Integration von BCM-Anforderungen in Compliance Management Systeme\n• Koordination mit regulatorischen Reporting-Anforderungen und Aufsichtsprozessen\n• Harmonisierung von BCM mit anderen Compliance-Frameworks wie DORA, NIS2 oder Solvency II\n• Entwicklung integrierter Assurance-Prozesse für alle Managementsysteme"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielen Lieferanten und externe Dienstleister im Business Continuity Management?',
        answer: "Lieferanten und externe Dienstleister spielen eine kritische Rolle im modernen Business Continuity Management, da Organisationen zunehmend von komplexen Lieferketten und externen Services abhängig sind. Ein effektives Supplier BCM erfordert proaktive Zusammenarbeit, transparente Kommunikation und integrierte Kontinuitätsplanung entlang der gesamten Wertschöpfungskette.\n\n🔍 Lieferanten-Risikobewertung und Due Diligence:\n• Systematische Bewertung der BCM-Reife und Resilienz-Fähigkeiten kritischer Lieferanten\n• Durchführung von BCM-Assessments und Audits bei strategischen Partnern und Dienstleistern\n• Analyse der geografischen Verteilung und Konzentration von Lieferanten-Standorten\n• Bewertung der finanziellen Stabilität und Geschäftskontinuität von Lieferanten\n• Identifikation von Single Points of Failure und kritischen Abhängigkeiten in der Lieferkette\n\n📋 Vertragliche BCM-Anforderungen:\n• Integration spezifischer BCM-Klauseln und Service Level Agreements in Lieferantenverträge\n• Definition von Mindestanforderungen für Lieferanten-BCM-Pläne und Recovery-Fähigkeiten\n• Etablierung von Transparenz- und Reporting-Verpflichtungen für Kontinuitätsrisiken\n• Vereinbarung von Eskalations- und Kommunikationsprozessen für Störungssituationen\n• Definition von Konsequenzen und Remediation-Maßnahmen bei BCM-Compliance-Verstößen\n\n🤝 Kollaborative Kontinuitätsplanung:\n• Entwicklung integrierter Kontinuitätspläne mit kritischen Lieferanten und Partnern\n• Koordination von Recovery-Strategien und gegenseitige Unterstützung bei Störungen\n• Gemeinsame Durchführung von BCM-Tests und Übungen mit Lieferanten\n• Aufbau von Kommunikationskanälen und Koordinationsmechanismen für Krisensituationen\n• Entwicklung von Backup-Strategien und alternativen Lieferanten für kritische Services\n\n📊 Lieferanten-BCM-Monitoring und Performance:\n• Etablierung kontinuierlicher Monitoring-Prozesse für Lieferanten-Resilienz\n• Entwicklung von BCM-KPIs und Metriken für Lieferanten-Performance\n• Regelmäßige Überprüfung und Bewertung der Lieferanten-BCM-Fähigkeiten\n• Integration von BCM-Kriterien in Lieferanten-Scorecards und Performance Reviews\n• Aufbau von Frühwarnsystemen für potenzielle Lieferanten-Störungen\n\n🔄 Supply Chain Resilienz und Diversifikation:\n• Entwicklung diversifizierter Lieferantenportfolios zur Reduzierung von Konzentrationsrisiken\n• Aufbau regionaler und globaler Backup-Lieferanten für kritische Komponenten und Services\n• Implementation von Dual-Sourcing und Multi-Sourcing-Strategien für kritische Abhängigkeiten\n• Entwicklung flexibler Lieferketten mit schneller Umschaltfähigkeit zwischen Lieferanten\n• Integration von Nearshoring und Reshoring-Strategien zur Reduzierung von Lieferkettenrisiken"
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
