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
    console.log('Updating ISO 27001 Risikoanalyse page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikoanalyse' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikoanalyse" not found')
    }
    
    // Create new FAQs for risk treatment and control selection
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie werden Risikobehandlungsstrategien in der ISO 27001 Risikoanalyse entwickelt und implementiert?',
        answer: "Die Entwicklung und Implementierung von Risikobehandlungsstrategien ist der entscheidende Schritt, der aus der Risikoanalyse konkrete Schutzmaßnahmen ableitet. Dieser Prozess erfordert eine strategische Herangehensweise, die Geschäftsziele, verfügbare Ressourcen und Risikotoleranz optimal ausbalanciert.\n\n🎯 Strategische Risikobehandlungsoptionen:\n• Risikominderung durch Implementierung von Sicherheitskontrollen zur Reduzierung von Wahrscheinlichkeit oder Auswirkung\n• Risikovermeidung durch Eliminierung der Risikoquelle oder Änderung von Geschäftsprozessen\n• Risikotransfer durch Versicherungen, Outsourcing oder vertragliche Risikoübertragung\n• Risikoakzeptanz für Risiken innerhalb der definierten Toleranzgrenzen\n• Risikoteilung durch Partnerschaften oder gemeinsame Verantwortlichkeiten\n\n📋 Systematische Kontrollauswahl:\n• Mapping identifizierter Risiken zu geeigneten Kontrollen aus ISO 27001 Annex A\n• Berücksichtigung bestehender Kontrollmaßnahmen und deren Wirksamkeit\n• Gap-Analyse zur Identifikation zusätzlicher Kontrollbedarfe\n• Bewertung der Kosten-Nutzen-Relation verschiedener Kontrolloptionen\n• Priorisierung basierend auf Risikobewertung und verfügbaren Ressourcen\n\n💰 Kosten-Nutzen-Optimierung:\n• Quantitative Bewertung der Implementierungskosten versus Risikoreduktion\n• Berücksichtigung von Total Cost of Ownership einschließlich Betrieb und Wartung\n• Analyse von Synergieeffekten zwischen verschiedenen Kontrollmaßnahmen\n• Bewertung des Return on Security Investment für verschiedene Optionen\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Kosten\n\n🚀 Implementierungsplanung:\n• Entwicklung detaillierter Implementierungspläne mit Zeitrahmen und Meilensteinen\n• Ressourcenplanung und Budgetierung für Personal, Technologie und externe Dienstleister\n• Change Management Strategien für organisatorische und kulturelle Anpassungen\n• Risikobewertung der Implementierung selbst und Entwicklung von Fallback-Plänen\n• Definition von Erfolgskriterien und Key Performance Indicators\n\n🔄 Kontinuierliche Überwachung und Anpassung:\n• Etablierung von Monitoring-Prozessen zur Bewertung der Kontrollwirksamkeit\n• Regelmäßige Reviews und Updates der Risikobehandlungsstrategien\n• Integration von Lessons Learned aus Sicherheitsvorfällen\n• Anpassung an veränderte Bedrohungslandschaften und Geschäftsanforderungen\n• Dokumentation und Kommunikation von Änderungen an alle Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielt die kontinuierliche Überwachung in der ISO 27001 Risikoanalyse?',
        answer: "Die kontinuierliche Überwachung ist ein kritischer Erfolgsfaktor für eine lebendige und effektive ISO 27001 Risikoanalyse, der sicherstellt, dass das Risikomanagement mit der dynamischen Natur von Bedrohungen und Geschäftsumgebungen Schritt hält. Sie transformiert die Risikoanalyse von einem statischen Dokument zu einem aktiven Managementinstrument.\n\n📊 Risiko-Monitoring-Framework:\n• Etablierung von Key Risk Indicators zur Echtzeit-Überwachung kritischer Risikofaktoren\n• Implementation automatisierter Monitoring-Tools für technische Risiken und Schwachstellen\n• Entwicklung von Dashboards für Management-Reporting und Risiko-Visualisierung\n• Integration mit bestehenden Monitoring-Systemen wie SIEM, Vulnerability Management und GRC-Plattformen\n• Definition von Eskalationsprozessen bei Überschreitung definierter Risikoschwellenwerte\n\n🔄 Kontinuierliche Risikobewertung:\n• Regelmäßige Neubewertung von Assets, Bedrohungen und Schwachstellen\n• Trigger-basierte Risiko-Updates bei signifikanten Änderungen in der IT-Landschaft oder Geschäftsprozessen\n• Integration neuer Threat Intelligence und Vulnerability-Informationen\n• Bewertung der Wirksamkeit implementierter Kontrollmaßnahmen\n• Anpassung der Risikobewertung basierend auf Incident Response Erkenntnissen\n\n📈 Performance-Messung und KPIs:\n• Messung der Risikoreduktion durch implementierte Kontrollmaßnahmen\n• Tracking von Compliance-Levels und Kontrollwirksamkeit\n• Bewertung der Mean Time to Detection und Response für Sicherheitsvorfälle\n• Analyse von Trends in der Risikolandschaft und Bedrohungsentwicklung\n• Benchmarking gegen Branchenstandards und Best Practices\n\n🎯 Adaptive Risikomanagement-Prozesse:\n• Flexible Anpassung der Risikoanalyse-Methodik basierend auf Erfahrungen und Lessons Learned\n• Integration von Feedback aus internen und externen Audits\n• Berücksichtigung neuer regulatorischer Anforderungen und Standards\n• Anpassung an veränderte Geschäftsmodelle und Technologietrends\n• Kontinuierliche Verbesserung der Risikokommunikation und Stakeholder-Engagement\n\n🚨 Incident-basierte Risikoanpassung:\n• Systematische Analyse von Sicherheitsvorfällen zur Identifikation von Risikobewertungsfehlern\n• Post-Incident Reviews zur Bewertung der Wirksamkeit von Kontrollmaßnahmen\n• Integration von Threat Hunting Erkenntnissen in die Risikobewertung\n• Anpassung der Risikomodelle basierend auf tatsächlichen Angriffsvektoren und Schadensereignissen\n• Entwicklung von Lessons Learned Prozessen für kontinuierliche Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie wird die ISO 27001 Risikoanalyse in bestehende Governance und Compliance-Frameworks integriert?',
        answer: "Die Integration der ISO 27001 Risikoanalyse in bestehende Governance und Compliance-Frameworks ist entscheidend für eine kohärente und effiziente Risikomanagement-Strategie. Diese Integration vermeidet Redundanzen, schafft Synergien und gewährleistet eine ganzheitliche Sicht auf organisatorische Risiken.\n\n🏛️ Enterprise Risk Management Integration:\n• Alignment der ISO 27001 Risikoanalyse mit übergeordneten ERM-Frameworks wie COSO oder ISO 31000\n• Integration von Informationssicherheitsrisiken in das Corporate Risk Register\n• Harmonisierung von Risikokategorien, Bewertungsskalen und Reporting-Strukturen\n• Etablierung gemeinsamer Governance-Strukturen und Entscheidungsprozesse\n• Koordination zwischen IT-Risikomanagement und anderen Risikodisziplinen\n\n📋 Multi-Framework Compliance:\n• Mapping von ISO 27001 Kontrollen zu anderen Standards wie NIST, SOX, GDPR oder branchenspezifischen Regulations\n• Entwicklung integrierter Compliance-Matrizen zur Vermeidung von Doppelarbeit\n• Koordinierte Audit-Planung und gemeinsame Evidence-Sammlung\n• Harmonisierung von Policies und Procedures über verschiedene Compliance-Anforderungen hinweg\n• Etablierung einheitlicher Dokumentations- und Reporting-Standards\n\n🔗 GRC-Plattform Integration:\n• Technische Integration der Risikoanalyse in bestehende GRC-Tools und -Plattformen\n• Automatisierte Datenflüsse zwischen verschiedenen Risiko- und Compliance-Modulen\n• Einheitliche Dashboards für integriertes Risiko- und Compliance-Reporting\n• Workflow-Integration für koordinierte Risikobewertung und -behandlung\n• Zentrale Dokumentenverwaltung für alle Compliance-relevanten Artefakte\n\n👥 Organisatorische Integration:\n• Etablierung von Cross-funktionalen Risk Committees mit Vertretern verschiedener Compliance-Bereiche\n• Definition klarer Rollen und Verantwortlichkeiten für integriertes Risikomanagement\n• Koordinierte Schulungs- und Awareness-Programme\n• Gemeinsame Incident Response und Crisis Management Prozesse\n• Integrierte Kommunikationsstrategien für Stakeholder und Regulatoren\n\n📊 Integriertes Reporting und Monitoring:\n• Entwicklung konsolidierter Risk und Compliance Dashboards für das Management\n• Koordinierte Berichterstattung an Aufsichtsbehörden und externe Stakeholder\n• Integrierte KPI-Frameworks für ganzheitliche Performance-Messung\n• Gemeinsame Trend-Analyse und Forecasting für verschiedene Risikokategorien\n• Koordinierte Kommunikation von Risikopositionen und Behandlungsstrategien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Best Practices gibt es für die Dokumentation und Kommunikation der ISO 27001 Risikoanalyse?',
        answer: "Eine professionelle Dokumentation und effektive Kommunikation der ISO 27001 Risikoanalyse sind entscheidend für deren Akzeptanz, Nachvollziehbarkeit und praktische Umsetzung. Sie schaffen Transparenz, ermöglichen fundierte Entscheidungen und gewährleisten Compliance mit Audit-Anforderungen.\n\n📝 Strukturierte Dokumentationsstandards:\n• Verwendung standardisierter Templates und Dokumentationsframeworks für konsistente Darstellung\n• Klare Gliederung mit Executive Summary, Methodik, Ergebnissen und Empfehlungen\n• Detaillierte Dokumentation der verwendeten Bewertungskriterien und Annahmen\n• Nachvollziehbare Begründung für Risikobewertungen und Behandlungsentscheidungen\n• Versionskontrolle und Change Management für alle Risikodokumente\n\n🎯 Zielgruppenspezifische Kommunikation:\n• Executive Summaries mit High-Level Risikobewertung und strategischen Empfehlungen für das Management\n• Technische Details und Implementierungsanleitungen für IT- und Security-Teams\n• Compliance-fokussierte Darstellung für Auditoren und Regulatoren\n• Vereinfachte Risikokommunikation für allgemeine Mitarbeiter und Stakeholder\n• Angepasste Kommunikationsformate je nach Organisationskultur und Hierarchieebene\n\n📊 Visuelle Risikokommunikation:\n• Risiko-Heatmaps und Dashboards für intuitive Darstellung der Risikolandschaft\n• Infografiken und Diagramme zur Veranschaulichung komplexer Risikozusammenhänge\n• Trend-Analysen und Zeitreihen für die Entwicklung von Risikoprofilen\n• Interactive Dashboards für Self-Service Risiko-Reporting\n• Scenario-basierte Visualisierungen für What-If-Analysen\n\n🔄 Kontinuierliche Kommunikationsprozesse:\n• Regelmäßige Risiko-Reviews und Updates mit definierten Kommunikationszyklen\n• Etablierung von Risiko-Kommunikationskanälen und Eskalationspfaden\n• Integration in bestehende Management-Reporting und Governance-Strukturen\n• Proaktive Kommunikation bei signifikanten Risikoveränderungen\n• Feedback-Mechanismen für kontinuierliche Verbesserung der Risikokommunikation\n\n🎓 Schulung und Awareness:\n• Entwicklung von Schulungsprogrammen für verschiedene Zielgruppen\n• Workshops und Training Sessions zur Risikobewertung und -behandlung\n• Awareness-Kampagnen für allgemeine Risikosensibilisierung\n• Mentoring und Coaching für Risikomanagement-Verantwortliche\n• Aufbau interner Risikomanagement-Expertise und Communities of Practice"
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
