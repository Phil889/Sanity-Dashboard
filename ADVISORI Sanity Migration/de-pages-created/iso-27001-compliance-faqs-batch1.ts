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
    console.log('Updating ISO 27001 Compliance page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-compliance" not found')
    }
    
    // Create new FAQs for ISO 27001 Compliance fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was bedeutet ISO 27001 Compliance und warum ist sie für moderne Unternehmen unverzichtbar?',
        answer: "ISO 27001 Compliance bezeichnet die kontinuierliche Erfüllung aller Anforderungen des internationalen Standards für Informationssicherheitsmanagementsysteme und geht weit über die einmalige Zertifizierung hinaus. Es umfasst die systematische Aufrechterhaltung, Überwachung und kontinuierliche Verbesserung der Compliance-Position durch strukturierte Prozesse, proaktive Risikoidentifikation und nachweisbare Dokumentation.\n\n🎯 Systematische Compliance-Architektur:\n• ISO 27001 Compliance erfordert die Etablierung einer robusten Governance-Struktur, die alle Aspekte des Informationssicherheitsmanagements abdeckt\n• Kontinuierliche Überwachung aller Kontrollmaßnahmen und Prozesse zur Sicherstellung der dauerhaften Wirksamkeit\n• Proaktive Identifikation von Compliance-Risiken und Implementierung präventiver Maßnahmen\n• Systematische Dokumentation aller Compliance-Aktivitäten für Audit-Zwecke und Stakeholder-Kommunikation\n• Integration von Compliance-Anforderungen in alle Geschäftsprozesse und strategischen Entscheidungen\n\n🔍 Kontinuierliche Compliance-Überwachung:\n• Implementierung automatisierter Monitoring-Systeme zur Echtzeit-Überwachung der Compliance-Position\n• Regelmäßige interne Audits und Assessments zur Bewertung der Wirksamkeit von Kontrollmaßnahmen\n• Trend-Analyse und Früherkennung potenzieller Compliance-Abweichungen\n• Kontinuierliche Anpassung an veränderte regulatorische Anforderungen und Bedrohungslandschaften\n• Etablierung von Key Performance Indicators zur Messung der Compliance-Effektivität\n\n📋 Nachweisbare Compliance-Exzellenz:\n• Strukturierte Dokumentation aller Compliance-Aktivitäten und Nachweise für externe Audits\n• Transparente Berichterstattung an Stakeholder über die Compliance-Position und Verbesserungsmaßnahmen\n• Aufbau einer Audit-Trail für alle sicherheitsrelevanten Entscheidungen und Maßnahmen\n• Demonstration von Due Diligence gegenüber Regulatoren und Geschäftspartnern\n• Kontinuierliche Verbesserung der Compliance-Prozesse basierend auf Lessons Learned\n\n🚀 Strategische Geschäftsvorteile:\n• Aufbau von Vertrauen bei Kunden, Partnern und Investoren durch demonstrierte Compliance-Exzellenz\n• Wettbewerbsdifferenzierung durch nachweisbare Informationssicherheitsstandards\n• Risikominimierung und Schutz vor regulatorischen Sanktionen\n• Optimierung von Versicherungskonditionen durch reduzierte Risikoprofile\n• Schaffung einer soliden Basis für digitale Transformation und Innovation\n\n🔗 Integration und Skalierbarkeit:\n• Nahtlose Integration mit anderen Compliance-Frameworks wie DORA, NIS2, GDPR\n• Skalierbare Compliance-Architektur für wachsende Organisationen\n• Harmonisierung verschiedener regulatorischer Anforderungen in einem einheitlichen Framework\n• Aufbau von Synergien zwischen verschiedenen Compliance-Bereichen\n• Etablierung einer lernenden Organisation im Bereich Compliance Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich kontinuierliche ISO 27001 Compliance von der einmaligen Zertifizierung?',
        answer: "Kontinuierliche ISO 27001 Compliance geht weit über die einmalige Zertifizierung hinaus und etabliert eine dauerhafte Compliance-Kultur, die sich an verändernde Anforderungen anpasst und kontinuierliche Verbesserungen vorantreibt. Während die Zertifizierung einen Meilenstein darstellt, ist kontinuierliche Compliance ein fortlaufender strategischer Prozess.\n\n📊 Unterschiede im Ansatz:\n• Einmalige Zertifizierung fokussiert auf die Erfüllung von Mindestanforderungen zu einem bestimmten Zeitpunkt\n• Kontinuierliche Compliance etabliert dynamische Prozesse, die sich an verändernde Bedrohungen und Anforderungen anpassen\n• Proaktive statt reaktive Herangehensweise an Compliance-Herausforderungen\n• Integration von Compliance in die DNA der Organisation statt isolierter Compliance-Projekte\n• Aufbau einer lernenden Organisation, die kontinuierlich ihre Compliance-Reife verbessert\n\n🔄 Kontinuierliche Verbesserung:\n• Systematische Analyse von Compliance-Performance und Identifikation von Optimierungspotenzialen\n• Regelmäßige Anpassung von Kontrollmaßnahmen basierend auf neuen Erkenntnissen und Bedrohungen\n• Kontinuierliche Schulung und Sensibilisierung aller Mitarbeiter für Compliance-Themen\n• Aufbau einer Feedback-Kultur, die Verbesserungsvorschläge aus allen Organisationsebenen integriert\n• Implementierung von Lessons Learned aus internen und externen Audits\n\n⚡ Proaktive Risikominimierung:\n• Frühzeitige Identifikation potenzieller Compliance-Risiken durch kontinuierliches Monitoring\n• Präventive Maßnahmen zur Vermeidung von Compliance-Abweichungen\n• Szenario-Planung für verschiedene Compliance-Herausforderungen\n• Aufbau von Resilienz gegenüber unvorhergesehenen regulatorischen Änderungen\n• Etablierung von Frühwarnsystemen für kritische Compliance-Parameter\n\n📈 Messbare Compliance-Excellence:\n• Entwicklung und Überwachung von Compliance-KPIs zur kontinuierlichen Leistungsmessung\n• Benchmarking gegen Branchenstandards und Best Practices\n• Regelmäßige Maturity-Assessments zur Bewertung der Compliance-Entwicklung\n• Transparente Berichterstattung über Compliance-Performance an alle Stakeholder\n• Aufbau einer datengetriebenen Compliance-Kultur\n\n🌐 Anpassungsfähigkeit und Innovation:\n• Flexible Compliance-Architektur, die sich an neue regulatorische Anforderungen anpassen kann\n• Integration neuer Technologien und Methoden in bestehende Compliance-Prozesse\n• Aufbau von Partnerschaften mit Regulatoren und Branchenexperten\n• Kontinuierliche Weiterentwicklung der Compliance-Strategie basierend auf Marktentwicklungen\n• Schaffung einer Innovationskultur, die Compliance als Enabler für Geschäftserfolg versteht"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen automatisierte Compliance-Monitoring-Systeme bei der ISO 27001 Compliance?',
        answer: "Automatisierte Compliance-Monitoring-Systeme sind das Rückgrat moderner ISO 27001 Compliance und ermöglichen eine kontinuierliche, effiziente und präzise Überwachung aller Compliance-Parameter. Sie transformieren traditionelle manuelle Compliance-Prozesse in intelligente, datengetriebene Systeme, die proaktive Entscheidungen ermöglichen und die Compliance-Effizienz erheblich steigern.\n\n🤖 Intelligente Automatisierung:\n• Kontinuierliche Überwachung aller ISO 27001 Kontrollmaßnahmen in Echtzeit ohne manuelle Intervention\n• Automatisierte Datensammlung aus verschiedenen Systemen und Quellen für umfassende Compliance-Sicht\n• Intelligente Analyse von Compliance-Daten zur Identifikation von Mustern und Trends\n• Automatische Generierung von Compliance-Reports und Dashboards für verschiedene Stakeholder\n• Reduzierung manueller Fehler und Erhöhung der Datenqualität durch systematische Automatisierung\n\n📊 Echtzeit-Compliance-Dashboards:\n• Visualisierung der aktuellen Compliance-Position durch intuitive Dashboards und Metriken\n• Sofortige Erkennung von Compliance-Abweichungen und kritischen Trends\n• Drill-Down-Funktionalität für detaillierte Analyse spezifischer Compliance-Bereiche\n• Anpassbare Ansichten für verschiedene Rollen und Verantwortlichkeiten\n• Integration verschiedener Datenquellen in einer einheitlichen Compliance-Sicht\n\n🚨 Proaktive Alerting-Systeme:\n• Intelligente Benachrichtigungen bei Überschreitung definierter Compliance-Schwellenwerte\n• Eskalationsmechanismen für kritische Compliance-Vorfälle\n• Präventive Warnungen vor potenziellen Compliance-Risiken\n• Automatische Benachrichtigung relevanter Stakeholder bei Compliance-Ereignissen\n• Konfigurierbare Alert-Regeln basierend auf organisationsspezifischen Anforderungen\n\n📈 Predictive Compliance Analytics:\n• Nutzung von Machine Learning zur Vorhersage potenzieller Compliance-Probleme\n• Trend-Analyse zur Identifikation langfristiger Compliance-Entwicklungen\n• Risiko-Scoring für verschiedene Compliance-Bereiche und Geschäftsprozesse\n• Automatische Empfehlungen für Compliance-Verbesserungsmaßnahmen\n• Integration externer Threat Intelligence für proaktive Risikobewertung\n\n🔗 Integration und Orchestrierung:\n• Nahtlose Integration mit bestehenden IT-Systemen und Sicherheitstools\n• Automatisierte Workflows für Compliance-Prozesse und Incident Response\n• API-basierte Konnektivität für flexible System-Integration\n• Orchestrierung verschiedener Compliance-Tools in einer einheitlichen Plattform\n• Aufbau einer integrierten Compliance-Architektur für maximale Effizienz\n\n💡 Kontinuierliche Optimierung:\n• Selbstlernende Systeme, die sich an verändernde Compliance-Anforderungen anpassen\n• Automatische Kalibrierung von Monitoring-Parametern basierend auf historischen Daten\n• Kontinuierliche Verbesserung der Erkennungsgenauigkeit durch Feedback-Schleifen\n• Optimierung von Compliance-Prozessen durch datengetriebene Insights\n• Aufbau einer adaptiven Compliance-Infrastruktur für zukünftige Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie kann ISO 27001 Compliance mit anderen regulatorischen Frameworks integriert werden?',
        answer: "Die Integration von ISO 27001 Compliance mit anderen regulatorischen Frameworks schafft Synergien, reduziert Komplexität und maximiert die Effizienz des gesamten Compliance-Managements. Eine harmonisierte Compliance-Architektur ermöglicht es Organisationen, verschiedene regulatorische Anforderungen kohärent zu erfüllen und dabei Ressourcen optimal zu nutzen.\n\n🔗 Multi-Framework Integration:\n• Systematische Mapping-Analyse zwischen ISO 27001 und anderen Standards wie DORA, NIS2, GDPR, SOC 2\n• Identifikation von Überschneidungen und Synergien zwischen verschiedenen Compliance-Anforderungen\n• Entwicklung einer einheitlichen Kontroll-Matrix, die mehrere Frameworks gleichzeitig adressiert\n• Harmonisierung von Dokumentationsanforderungen zur Vermeidung von Redundanzen\n• Aufbau einer integrierten Governance-Struktur für alle Compliance-Bereiche\n\n📋 Unified Compliance Architecture:\n• Design einer übergreifenden Compliance-Architektur, die verschiedene regulatorische Anforderungen abdeckt\n• Etablierung gemeinsamer Kontrollmaßnahmen, die mehrere Standards gleichzeitig erfüllen\n• Integration verschiedener Audit-Zyklen in einen koordinierten Compliance-Kalender\n• Entwicklung einheitlicher Policies und Procedures für alle relevanten Frameworks\n• Schaffung einer zentralen Compliance-Funktion mit Framework-übergreifender Verantwortung\n\n⚙️ Prozess-Harmonisierung:\n• Standardisierung von Compliance-Prozessen über alle Frameworks hinweg\n• Entwicklung gemeinsamer Workflows für Risk Assessment, Incident Management und Audit-Vorbereitung\n• Integration verschiedener Reporting-Zyklen in einen einheitlichen Compliance-Kalender\n• Harmonisierung von Change Management Prozessen für alle Compliance-Bereiche\n• Etablierung einheitlicher Metriken und KPIs für Framework-übergreifende Performance-Messung\n\n🛠️ Technologische Integration:\n• Implementierung integrierter GRC-Plattformen, die mehrere Frameworks unterstützen\n• Aufbau einer einheitlichen Datenarchitektur für alle Compliance-Bereiche\n• Entwicklung automatisierter Workflows, die verschiedene regulatorische Anforderungen abdecken\n• Integration verschiedener Monitoring-Tools in eine zentrale Compliance-Plattform\n• Schaffung einheitlicher Dashboards für Framework-übergreifende Compliance-Sicht\n\n📊 Cross-Framework Reporting:\n• Entwicklung integrierter Reporting-Strukturen, die mehrere Stakeholder-Gruppen bedienen\n• Automatisierte Generierung von Framework-spezifischen Reports aus einer zentralen Datenquelle\n• Aufbau einer einheitlichen Evidence-Sammlung für verschiedene Audit-Anforderungen\n• Harmonisierung von Compliance-Metriken über alle Frameworks hinweg\n• Schaffung transparenter Kommunikationsstrukturen für alle Compliance-Bereiche\n\n🎯 Strategische Optimierung:\n• Entwicklung einer übergreifenden Compliance-Strategie, die alle regulatorischen Anforderungen berücksichtigt\n• Optimierung von Ressourcenallokation durch Framework-übergreifende Planung\n• Aufbau von Expertise-Zentren für verschiedene Compliance-Bereiche\n• Etablierung von Best Practice Sharing zwischen verschiedenen Compliance-Teams\n• Kontinuierliche Optimierung der integrierten Compliance-Architektur basierend auf Lessons Learned"
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
