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
    console.log('Updating ISO 27001 Software page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-software' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-software" not found')
    }
    
    // Create new FAQs for ISO 27001 software fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche kritischen Faktoren sollten bei der Auswahl von ISO 27001 Software berücksichtigt werden?',
        answer: "Die Auswahl der richtigen ISO 27001 Software ist eine strategische Entscheidung, die den Erfolg Ihres gesamten Informationssicherheits-Managementsystems maßgeblich beeinflusst. Eine durchdachte Evaluierung verschiedener Faktoren stellt sicher, dass die gewählte Lösung nicht nur aktuelle Anforderungen erfüllt, sondern auch zukünftige Entwicklungen und Wachstum unterstützt.\n\n🎯 Funktionale Anforderungen und ISMS-Alignment:\n• Vollständige Abdeckung aller ISO 27001 Kontrollen und Anforderungen mit nativer Unterstützung für Risikobewertung, Kontrollimplementierung und Compliance-Monitoring\n• Flexible Anpassungsmöglichkeiten an organisationsspezifische Prozesse und bestehende Governance-Strukturen\n• Integrierte Workflow-Funktionen für Incident Management, Change Management und kontinuierliche Verbesserungsprozesse\n• Umfassende Reporting-Capabilities für Management-Reviews, Audit-Vorbereitung und regulatorische Berichterstattung\n• Automatisierte Erinnerungen und Eskalationsmechanismen für zeitkritische Sicherheitsaktivitäten\n\n🔧 Technische Integration und Architektur:\n• Nahtlose Integration mit bestehenden IT-Systemen, Sicherheitstools und Unternehmensanwendungen über standardisierte APIs\n• Skalierbare Architektur, die mit dem Unternehmenswachstum und sich ändernden Anforderungen mitwachsen kann\n• Cloud-native oder Hybrid-Deployment-Optionen je nach Sicherheitsanforderungen und Compliance-Vorgaben\n• Robuste Datensicherheit und Verschlüsselung sowohl für Daten in Ruhe als auch in Bewegung\n• Performance-Optimierung für große Datenmengen und komplexe Organisationsstrukturen\n\n💰 Total Cost of Ownership und ROI-Betrachtung:\n• Transparente Lizenzmodelle mit klarer Kostenstruktur für verschiedene Nutzergruppen und Funktionalitäten\n• Implementierungskosten einschließlich Anpassung, Datenmigration, Training und Change Management\n• Laufende Betriebskosten für Support, Wartung, Updates und potenzielle Erweiterungen\n• Quantifizierbare Effizienzgewinne durch Automatisierung und verbesserte Prozesse\n• Risikominderung und potenzielle Kosteneinsparungen durch verbesserte Compliance und reduzierte Sicherheitsvorfälle\n\n🏢 Vendor-Bewertung und strategische Partnerschaft:\n• Finanzielle Stabilität und langfristige Marktpräsenz des Anbieters für nachhaltige Produktentwicklung\n• Qualität und Verfügbarkeit des technischen Supports sowie Service Level Agreements\n• Roadmap für Produktentwicklung und Alignment mit zukünftigen Compliance-Anforderungen\n• Referenzen und Erfolgsgeschichten in vergleichbaren Branchen und Organisationsgrößen\n• Compliance des Anbieters selbst mit relevanten Sicherheitsstandards und Zertifizierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie kann Software die Automatisierung von ISO 27001 Compliance-Prozessen unterstützen?',
        answer: "Moderne ISO 27001 Software transformiert traditionell manuelle und zeitaufwändige Compliance-Prozesse in effiziente, automatisierte Workflows, die nicht nur die Arbeitsbelastung reduzieren, sondern auch die Genauigkeit und Konsistenz der Sicherheitsmaßnahmen erheblich verbessern. Diese Automatisierung ermöglicht es Organisationen, sich auf strategische Sicherheitsinitiativen zu konzentrieren, anstatt administrative Aufgaben zu bewältigen.\n\n⚡ Automatisierte Risikobewertung und Monitoring:\n• Kontinuierliche Überwachung von Sicherheitskontrollen mit automatischer Bewertung der Kontrolleffektivität basierend auf definierten Metriken und Schwellenwerten\n• Dynamische Risikobewertung, die sich automatisch an Änderungen in der IT-Infrastruktur, Bedrohungslandschaft oder Geschäftsprozessen anpasst\n• Intelligente Korrelation von Sicherheitsereignissen zur Identifikation von Mustern und potenziellen Schwachstellen\n• Automatische Generierung von Risikoheatmaps und Dashboards für verschiedene Managementebenen\n• Proaktive Benachrichtigungen bei Abweichungen von definierten Sicherheitsstandards oder Compliance-Anforderungen\n\n📊 Intelligente Berichterstattung und Dokumentation:\n• Automatische Generierung von Compliance-Berichten für verschiedene Stakeholder mit anpassbaren Templates und Formaten\n• Real-time Dashboards mit Key Performance Indicators für Informationssicherheit und Compliance-Status\n• Automatische Sammlung und Konsolidierung von Audit-Evidenzen aus verschiedenen Systemen und Datenquellen\n• Zeitgesteuerte Berichte für reguläre Management-Reviews und Board-Präsentationen\n• Automatische Archivierung und Versionskontrolle für Compliance-Dokumentation und Audit-Trails\n\n🔄 Workflow-Automatisierung und Prozessoptimierung:\n• Automatisierte Incident Response Workflows mit definierten Eskalationspfaden und Verantwortlichkeiten\n• Intelligente Aufgabenzuweisung basierend auf Rollen, Verfügbarkeit und Expertise der Mitarbeiter\n• Automatische Verfolgung von Korrekturmaßnahmen mit Erinnerungen und Eskalationen bei Verzögerungen\n• Integrierte Genehmigungsprozesse für Änderungen an Sicherheitskontrollen oder Richtlinien\n• Automatisierte Compliance-Checks bei Systemänderungen oder neuen Implementierungen\n\n🔍 Kontinuierliche Überwachung und Verbesserung:\n• Automatische Analyse von Sicherheitsmetriken zur Identifikation von Trends und Verbesserungsmöglichkeiten\n• Machine Learning-basierte Anomalieerkennung für ungewöhnliche Aktivitäten oder Abweichungen\n• Automatische Benchmarking gegen Industriestandards und Best Practices\n• Intelligente Empfehlungen für Prozessverbesserungen basierend auf historischen Daten und Leistungsindikatoren\n• Automatisierte Wirksamkeitsmessungen für implementierte Sicherheitsmaßnahmen und deren kontinuierliche Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Herausforderungen entstehen bei der Integration von ISO 27001 Software in bestehende IT-Landschaften?',
        answer: "Die Integration von ISO 27001 Software in komplexe, gewachsene IT-Landschaften stellt eine der größten Herausforderungen bei der Implementierung dar. Erfolgreiche Integration erfordert nicht nur technisches Know-how, sondern auch strategische Planung, Change Management und ein tiefes Verständnis sowohl der bestehenden Systemarchitektur als auch der Sicherheitsanforderungen.\n\n🏗️ Architektonische Komplexität und Legacy-Systeme:\n• Integration mit veralteten Systemen, die möglicherweise keine modernen APIs oder Schnittstellen unterstützen, erfordert oft maßgeschneiderte Middleware-Lösungen\n• Heterogene Systemlandschaften mit verschiedenen Betriebssystemen, Datenbanken und Anwendungsarchitekturen erschweren einheitliche Integrationsansätze\n• Unterschiedliche Datenformate und Protokolle zwischen Systemen erfordern komplexe Datenkonvertierung und Mapping-Prozesse\n• Sicherheitsanforderungen für Systemzugriffe und Datenübertragung müssen bei jeder Integration berücksichtigt werden\n• Performance-Auswirkungen auf bestehende Systeme durch zusätzliche Monitoring- und Reporting-Anforderungen\n\n🔐 Datensicherheit und Compliance-Herausforderungen:\n• Sichere Übertragung sensibler Sicherheitsdaten zwischen verschiedenen Systemen ohne Kompromittierung der Vertraulichkeit\n• Einhaltung verschiedener Compliance-Anforderungen wie GDPR, DORA oder branchenspezifische Regulierungen bei der Datenverarbeitung\n• Implementierung angemessener Zugriffskontrolle und Berechtigungsmanagement für integrierte Systeme\n• Gewährleistung der Datenintegrität und Nachvollziehbarkeit bei systemübergreifenden Prozessen\n• Berücksichtigung von Datenlokalisierungsanforderungen und grenzüberschreitenden Datenübertragungen\n\n👥 Organisatorische und Change Management Aspekte:\n• Widerstand gegen Veränderungen bei etablierten Arbeitsabläufen und gewohnten Systeminteraktionen\n• Schulungsbedarf für IT-Teams und Endnutzer bei neuen integrierten Prozessen und Benutzeroberflächen\n• Koordination zwischen verschiedenen Abteilungen und Stakeholdern während der Integrationsphase\n• Aufrechterhaltung der Geschäftskontinuität während kritischer Integrationsphasen\n• Anpassung bestehender Governance-Strukturen und Verantwortlichkeiten an neue integrierte Prozesse\n\n⚙️ Technische Implementierungsherausforderungen:\n• Entwicklung robuster Fehlerbehandlung und Fallback-Mechanismen für Systemausfälle oder Verbindungsprobleme\n• Synchronisation von Daten zwischen verschiedenen Systemen ohne Inkonsistenzen oder Duplikate\n• Skalierbarkeit der Integrationslösungen für zukünftiges Wachstum und zusätzliche Systemanbindungen\n• Monitoring und Troubleshooting komplexer, verteilter Integrationsarchitekturen\n• Versionskontrolle und Deployment-Management für integrierte Systemkomponenten und deren Abhängigkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie unterstützt spezialisierte Software das Management von Software-Lieferanten im Kontext von ISO 27001?',
        answer: "Das Management von Software-Lieferanten stellt einen kritischen Aspekt der ISO 27001 Compliance dar, da Third-Party-Software erhebliche Sicherheitsrisiken bergen kann. Spezialisierte Software-Lösungen bieten umfassende Funktionalitäten zur systematischen Bewertung, Überwachung und Verwaltung der gesamten Software-Lieferkette, um Compliance-Anforderungen zu erfüllen und Sicherheitsrisiken zu minimieren.\n\n🔍 Umfassende Lieferantenbewertung und Due Diligence:\n• Strukturierte Bewertungsframeworks für die systematische Analyse von Lieferanten-Sicherheitspraktiken, Zertifizierungen und Compliance-Status\n• Automatisierte Sammlung und Bewertung von Sicherheitsdokumentationen, Audit-Berichten und Zertifizierungen von Lieferanten\n• Risikobewertungsmatrizen, die finanzielle Stabilität, technische Kompetenz und Sicherheitsreife der Lieferanten berücksichtigen\n• Kontinuierliche Überwachung von Lieferanten-Reputation und Sicherheitsvorfällen durch Integration mit Threat Intelligence Feeds\n• Standardisierte Bewertungsprozesse für verschiedene Lieferantenkategorien und Risikoprofile\n\n📋 Vertragsmanagement und Compliance-Überwachung:\n• Zentrale Verwaltung aller lieferantenbezogenen Verträge mit automatischen Erinnerungen für Verlängerungen und Compliance-Reviews\n• Template-basierte Sicherheitsklauseln und Service Level Agreements für konsistente Vertragsgestaltung\n• Automatische Überwachung der Einhaltung vertraglicher Sicherheitsanforderungen und SLAs\n• Eskalationsmechanismen bei Vertragsverletzungen oder Compliance-Abweichungen\n• Integration mit Legal- und Procurement-Systemen für nahtlose Vertragsabwicklung\n\n🛡️ Kontinuierliche Risikobewertung und Monitoring:\n• Real-time Monitoring von Lieferanten-Sicherheitsstatus durch Integration mit externen Risikodatenbanken und Threat Intelligence\n• Automatische Benachrichtigungen bei Sicherheitsvorfällen, Datenschutzverletzungen oder Compliance-Problemen bei Lieferanten\n• Regelmäßige Neubewertung von Lieferantenrisiken basierend auf sich ändernden Bedrohungslandschaften und Geschäftsanforderungen\n• Korrelationsanalyse zwischen verschiedenen Lieferantenrisiken und deren Auswirkungen auf die Gesamtsicherheit\n• Entwicklung von Risikominderungsstrategien und Contingency-Plänen für kritische Lieferanten\n\n📊 Performance Management und Berichterstattung:\n• Umfassende Dashboards zur Visualisierung der Lieferanten-Performance und Compliance-Status\n• Automatisierte Generierung von Lieferanten-Scorecards und Performance-Berichten für verschiedene Stakeholder\n• Trend-Analysen zur Identifikation von Verbesserungs- oder Verschlechterungsmustern bei Lieferanten\n• Benchmarking von Lieferanten-Performance gegen Industriestandards und Best Practices\n• Integration mit Business Intelligence Systemen für erweiterte Analysen und strategische Entscheidungsunterstützung\n\n🔄 Lifecycle Management und strategische Planung:\n• Systematische Planung für Lieferanten-Onboarding, Performance-Reviews und potenzielle Beendigung von Partnerschaften\n• Entwicklung von Lieferanten-Entwicklungsprogrammen zur Verbesserung der Sicherheitsreife\n• Strategische Diversifikation der Lieferantenbasis zur Reduzierung von Konzentrationsrisiken\n• Exit-Strategien und Datenrückgabeprozesse für das Ende von Lieferantenbeziehungen\n• Kontinuierliche Marktanalyse zur Identifikation neuer, sichererer Lieferantenoptionen"
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
