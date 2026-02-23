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
    console.log('Updating Deployment von KI-Modellen page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'deployment-von-ki-modellen' })
    
    if (!existingDoc) {
      throw new Error('Document "deployment-von-ki-modellen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie stellt ADVISORI sicher, dass KI-Model-Deployments vollständig DSGVO-konform sind und welche spezifischen Compliance-Herausforderungen adressieren wir?',
        answer: "DSGVO-Compliance bei KI-Model-Deployments ist eine komplexe Herausforderung, die technische, rechtliche und organisatorische Aspekte umfasst. ADVISORI entwickelt umfassende Compliance-Strategien, die nicht nur aktuelle DSGVO-Anforderungen erfüllen, sondern auch für zukünftige regulatorische Entwicklungen wie die EU-KI-Verordnung vorbereitet sind.\n\n⚖️ Fundamentale DSGVO-Compliance-Prinzipien:\n• Privacy-by-Design und Privacy-by-Default: Integration von Datenschutzprinzipien in alle Phasen des Deployment-Prozesses, von der Architektur-Planung bis zur operativen Umsetzung.\n• Rechtmäßigkeit der Verarbeitung: Sicherstellung einer validen Rechtsgrundlage für alle Datenverarbeitungsaktivitäten in deployed KI-Systemen mit klarer Dokumentation und Zweckbindung.\n• Datenminimierung und Zweckbindung: Implementierung technischer Maßnahmen, die gewährleisten, dass nur minimal notwendige Daten verarbeitet und ausschließlich für definierte Zwecke verwendet werden.\n• Transparenz und Nachvollziehbarkeit: Schaffung vollständiger Transparenz über Datenverarbeitungsprozesse mit umfassender Dokumentation und Audit-Trails.\n\n🔒 Technische DSGVO-Implementierung:\n• Datenschutz-Folgenabschätzungen für AI-Deployments: Systematische Bewertung aller Datenschutzrisiken vor jedem Deployment mit entsprechenden Risikominderungsmaßnahmen und kontinuierlicher Überwachung.\n• Betroffenenrechte-Management: Implementierung technischer Lösungen zur Gewährleistung von Auskunfts-, Berichtigungs-, Löschungs- und Portabilitätsrechten auch in komplexen AI-Systemen.\n• Pseudonymisierung und Anonymisierung: Einsatz fortschrittlicher Techniken zur Pseudonymisierung und Anonymisierung von Daten ohne Beeinträchtigung der Modell-Performance.\n• Internationale Datenübertragungen: Sicherstellung rechtmäßiger Datenübertragungen bei Cloud-Deployments durch angemessene Garantien, Standardvertragsklauseln und Schutzmaßnahmen.\n\n📋 Kontinuierliche Compliance-Überwachung:\n• Automatisierte Compliance-Monitoring: Implementierung von Systemen, die kontinuierlich die Einhaltung von DSGVO-Anforderungen überwachen und bei Abweichungen automatisch alarmieren.\n• Regelmäßige Compliance-Audits: Durchführung systematischer Überprüfungen aller Deployment-Komponenten auf DSGVO-Konformität mit externen Validierungen.\n• Incident-Response und Meldepflichten: Etablierung klarer Prozesse für die Erkennung, Bewertung und Meldung von Datenschutzverletzungen gemäß DSGVO-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Audit-Trails und Dokumentationsanforderungen sind für KI-Model-Deployments erforderlich und wie gewährleistet ADVISORI vollständige Nachvollziehbarkeit?',
        answer: "Umfassende Audit-Trails und Dokumentation sind essentiell für die Compliance, Governance und operative Exzellenz von KI-Model-Deployments. ADVISORI implementiert systematische Dokumentations- und Protokollierungsframeworks, die vollständige Nachvollziehbarkeit aller Deployment-Aktivitäten gewährleisten.\n\n📝 Umfassende Dokumentationsanforderungen:\n• Model-Lifecycle-Dokumentation: Vollständige Dokumentation des gesamten Modell-Lebenszyklus von der Entwicklung über das Deployment bis zur Außerbetriebnahme mit allen Entscheidungspunkten und Genehmigungen.\n• Deployment-Architektur und Konfiguration: Detaillierte Dokumentation aller technischen Komponenten, Konfigurationen, Abhängigkeiten und Sicherheitsmaßnahmen der Deployment-Infrastruktur.\n• Datenschutz- und Compliance-Dokumentation: Umfassende Dokumentation aller datenschutzrelevanten Aspekte, Rechtsgrundlagen, Datenschutz-Folgenabschätzungen und Compliance-Maßnahmen.\n• Change-Management und Versionskontrolle: Lückenlose Dokumentation aller Änderungen, Updates und Modifikationen mit Begründungen, Genehmigungen und Auswirkungsanalysen.\n\n🔍 Detaillierte Audit-Trail-Implementierung:\n• Granulare Aktivitäts-Protokollierung: Aufzeichnung aller Deployment-Aktivitäten, Zugriffe, Konfigurationsänderungen und Systemereignisse mit Zeitstempeln und Benutzeridentifikation.\n• Model-Inferenz-Logging: Protokollierung aller Modell-Vorhersagen, Input-Daten, Output-Ergebnisse und Performance-Metriken für Nachvollziehbarkeit und Qualitätssicherung.\n• Security-Event-Logging: Umfassende Protokollierung aller sicherheitsrelevanten Ereignisse, Anomalien, Zugriffsverletzungen und Incident-Response-Aktivitäten.\n• Compliance-Audit-Trails: Spezielle Protokollierung compliance-relevanter Aktivitäten für regulatorische Audits und Nachweise der Regelkonformität.\n\n🛡️ Sicherheit und Integrität der Audit-Daten:\n• Tamper-Proof-Logging: Implementierung unveränderlicher Logging-Systeme mit kryptographischen Signaturen und Blockchain-Technologien für Manipulationsschutz.\n• Langzeit-Archivierung: Sichere Langzeitarchivierung von Audit-Daten mit definierten Aufbewahrungsfristen und Zugriffskontrolle für regulatorische Anforderungen.\n• Audit-Daten-Analyse: Implementierung von Analytics-Tools für die systematische Auswertung von Audit-Trails zur Identifikation von Mustern, Anomalien und Verbesserungsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie adressiert ADVISORI die besonderen Herausforderungen der EU-KI-Verordnung bei Model-Deployments und welche Vorbereitungen sind erforderlich?',
        answer: "Die EU-KI-Verordnung stellt neue und spezifische Anforderungen an KI-Systeme, die über traditionelle Datenschutzbestimmungen hinausgehen. ADVISORI entwickelt proaktive Compliance-Strategien, die Unternehmen auf die Anforderungen der EU-KI-Verordnung vorbereiten und gleichzeitig operative Exzellenz gewährleisten.\n\n🎯 Kernprinzipien der EU-KI-Verordnung für Deployments:\n• Risiko-basierte Klassifizierung: Systematische Bewertung und Klassifizierung von KI-Systemen nach Risikokategorien mit entsprechenden Compliance-Anforderungen und Governance-Maßnahmen.\n• Transparenz und Erklärbarkeit: Implementierung von Mechanismen für die Nachvollziehbarkeit und Erklärbarkeit von KI-Entscheidungen, insbesondere bei Hochrisiko-Anwendungen.\n• Menschliche Aufsicht und Kontrolle: Sicherstellung angemessener menschlicher Überwachung und Interventionsmöglichkeiten bei automatisierten Entscheidungsprozessen.\n• Robustheit und Genauigkeit: Gewährleistung der technischen Robustheit, Genauigkeit und Cybersicherheit von deployed KI-Systemen.\n\n📋 Spezifische Compliance-Anforderungen:\n• CE-Kennzeichnung und Konformitätsbewertung: Vorbereitung auf Konformitätsbewertungsverfahren für Hochrisiko-KI-Systeme mit entsprechender Dokumentation und Zertifizierung.\n• Qualitätsmanagementsysteme: Implementierung umfassender Qualitätsmanagementsysteme für die Entwicklung, das Deployment und die Überwachung von KI-Systemen.\n• Risikomanagement-Systeme: Etablierung systematischer Risikomanagement-Prozesse für die Identifikation, Bewertung und Minderung von KI-spezifischen Risiken.\n• Post-Market-Monitoring: Implementierung kontinuierlicher Überwachungssysteme für deployed KI-Systeme mit systematischer Erfassung und Analyse von Performance-Daten.\n\n🔮 Zukunftssichere Deployment-Strategien:\n• Adaptive Compliance-Architekturen: Entwicklung flexibler Deployment-Architekturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen.\n• Proaktive Governance-Integration: Integration von EU-KI-Verordnungs-Anforderungen in bestehende Governance-Strukturen und Entscheidungsprozesse.\n• Stakeholder-Engagement und Training: Schulung von Teams und Stakeholdern zu EU-KI-Verordnungs-Anforderungen und deren praktischer Umsetzung.\n• Kontinuierliche Regulierungs-Überwachung: Systematische Verfolgung regulatorischer Entwicklungen und proaktive Anpassung von Deployment-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche internationalen Compliance-Herausforderungen entstehen bei globalen KI-Model-Deployments und wie navigiert ADVISORI komplexe regulatorische Landschaften?',
        answer: "Globale KI-Model-Deployments müssen eine Vielzahl unterschiedlicher regulatorischer Anforderungen erfüllen, die von Land zu Land variieren. ADVISORI entwickelt umfassende internationale Compliance-Strategien, die es Unternehmen ermöglichen, KI-Systeme global zu deployen, während sie alle relevanten regulatorischen Anforderungen erfüllen.\n\n🌍 Komplexe internationale Regulierungslandschaft:\n• Jurisdiktions-spezifische Anforderungen: Navigation unterschiedlicher Datenschutz-, KI- und Technologie-Regulierungen in verschiedenen Ländern und Regionen mit maßgeschneiderten Compliance-Strategien.\n• Grenzüberschreitende Datenübertragungen: Sicherstellung rechtmäßiger internationaler Datenübertragungen durch angemessene Schutzmaßnahmen, Standardvertragsklauseln und Adequacy-Decisions.\n• Sektorspezifische Regulierungen: Berücksichtigung branchenspezifischer Anforderungen in regulierten Sektoren wie Finanzdienstleistungen, Gesundheitswesen und Telekommunikation.\n• Emerging-Regulations-Monitoring: Proaktive Überwachung sich entwickelnder KI-Regulierungen in verschiedenen Jurisdiktionen für frühzeitige Compliance-Vorbereitung.\n\n🏛️ Strategische Compliance-Koordination:\n• Multi-Jurisdiktional-Frameworks: Entwicklung einheitlicher Compliance-Frameworks, die gleichzeitig die Anforderungen verschiedener Jurisdiktionen erfüllen.\n• Lokalisierungs-Strategien: Implementierung von Deployment-Architekturen, die lokale Datenresidenz-Anforderungen und regulatorische Präferenzen berücksichtigen.\n• Regulatory-Sandboxes und Pilotprogramme: Nutzung regulatorischer Sandboxes und Pilotprogramme für die sichere Erprobung neuer KI-Deployments in verschiedenen Märkten.\n• Cross-Border-Incident-Response: Etablierung koordinierter Incident-Response-Prozesse für grenzüberschreitende Compliance-Vorfälle und regulatorische Meldepflichten.\n\n🤝 Stakeholder-Management und Behörden-Engagement:\n• Regulatory-Affairs-Management: Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden in verschiedenen Jurisdiktionen für frühzeitige Einblicke und Guidance.\n• Legal-Technology-Integration: Enge Zusammenarbeit zwischen technischen Teams und Rechtsexperten für die praktische Umsetzung komplexer regulatorischer Anforderungen.\n• Compliance-Harmonisierung: Entwicklung harmonisierter Compliance-Prozesse, die Effizienz maximieren und gleichzeitig alle relevanten regulatorischen Anforderungen erfüllen."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
