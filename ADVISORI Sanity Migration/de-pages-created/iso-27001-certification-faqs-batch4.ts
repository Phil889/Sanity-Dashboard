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
    console.log('Updating ISO 27001 Certification page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-certification" not found')
    }
    
    // Create new FAQs for ISO 27001 certification advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Rolle spielen Cloud-Services bei der ISO 27001 Zertifizierung und wie werden sie bewertet?',
        answer: "Cloud-Services sind heute integraler Bestandteil moderner IT-Landschaften und erfordern besondere Aufmerksamkeit bei der ISO 27001 Zertifizierung. Eine systematische Bewertung und Integration von Cloud-Services in das ISMS gewährleistet umfassende Sicherheit und Compliance.\n\n☁️ Cloud-Service-Kategorisierung:\n• Infrastructure as a Service erfordert umfassende Sicherheitskontrollen auf allen Ebenen der Infrastruktur\n• Platform as a Service benötigt fokussierte Bewertung der Entwicklungs- und Deployment-Sicherheit\n• Software as a Service erfordert detaillierte Analyse der Datenverarbeitung und Zugangskontrollen\n• Hybrid-Cloud-Umgebungen benötigen integrierte Sicherheitsarchitekturen über alle Umgebungen hinweg\n• Multi-Cloud-Strategien erfordern einheitliche Governance und Überwachung verschiedener Anbieter\n\n🔍 Due-Diligence-Prozesse:\n• Umfassende Bewertung der Sicherheitszertifizierungen und Compliance-Nachweise der Cloud-Anbieter\n• Detaillierte Analyse der Shared-Responsibility-Modelle und klare Abgrenzung der Verantwortlichkeiten\n• Bewertung der Datenverarbeitungsstandorte und regulatorischen Compliance-Anforderungen\n• Prüfung der Verfügbarkeits- und Disaster-Recovery-Kapazitäten der Cloud-Services\n• Analyse der Transparenz und Auditierbarkeit der Cloud-Service-Anbieter\n\n📋 Vertragliche Sicherheitsanforderungen:\n• Integration spezifischer Sicherheitsanforderungen in Cloud-Service-Verträge\n• Definition klarer Service-Level-Agreements für Sicherheit und Verfügbarkeit\n• Vereinbarung von Audit-Rechten und Transparenzanforderungen\n• Festlegung von Incident-Response-Prozessen und Benachrichtigungspflichten\n• Regelung von Datenportabilität und sicherer Datenrückgabe bei Vertragsende\n\n🛡️ Kontinuierliche Überwachung:\n• Implementierung von Cloud-Security-Monitoring-Tools für kontinuierliche Überwachung\n• Regelmäßige Bewertung der Cloud-Service-Performance und Sicherheitslage\n• Integration von Cloud-Services in interne Audit-Zyklen und Risikobewertungen\n• Aufbau von Cloud-spezifischen Incident-Response-Kapazitäten\n• Kontinuierliche Anpassung an neue Cloud-Technologien und Sicherheitsstandards\n\n🔗 ISMS-Integration:\n• Nahtlose Integration von Cloud-Services in die bestehende ISMS-Architektur\n• Entwicklung cloud-spezifischer Richtlinien und Verfahren\n• Aufbau von Cloud-Governance-Strukturen mit klaren Verantwortlichkeiten\n• Schulung von Mitarbeitern zu Cloud-Sicherheit und Best Practices\n• Etablierung von Cloud-Security-Metriken und KPIs für kontinuierliche Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie behandelt man Lieferanten und Drittanbieter im Rahmen der ISO 27001 Zertifizierung?',
        answer: "Lieferanten und Drittanbieter stellen kritische Komponenten der Informationssicherheits-Lieferkette dar und erfordern systematische Integration in das ISMS. Eine umfassende Supplier-Security-Governance gewährleistet End-to-End-Sicherheit über alle Geschäftsbeziehungen hinweg.\n\n🔍 Lieferantenbewertung und Klassifizierung:\n• Systematische Kategorisierung von Lieferanten nach Kritikalität und Risikopotenzial\n• Umfassende Sicherheitsbewertung vor Vertragsabschluss durch strukturierte Assessments\n• Bewertung der Informationssicherheitsreife und Zertifizierungsstatus der Lieferanten\n• Analyse der Datenverarbeitungsaktivitäten und Zugriffserfordernisse\n• Regelmäßige Neubewertung bestehender Lieferantenbeziehungen und deren Risikoprofil\n\n📋 Vertragliche Sicherheitsanforderungen:\n• Integration spezifischer Informationssicherheitsklauseln in alle Lieferantenverträge\n• Definition klarer Sicherheitsstandards und Compliance-Anforderungen\n• Vereinbarung von Audit-Rechten und regelmäßigen Sicherheitsüberprüfungen\n• Festlegung von Incident-Response-Prozessen und Benachrichtigungspflichten\n• Regelung der sicheren Datenübertragung und Datenvernichtung\n\n🛡️ Ongoing-Monitoring und Governance:\n• Implementierung kontinuierlicher Überwachungsprozesse für kritische Lieferanten\n• Regelmäßige Sicherheitsaudits und Compliance-Überprüfungen\n• Integration von Lieferanten in interne Risikomanagement-Prozesse\n• Aufbau von Lieferanten-spezifischen KPIs und Performance-Metriken\n• Etablierung von Eskalationsprozessen bei Sicherheitsvorfällen oder Non-Compliance\n\n🔄 Lifecycle-Management:\n• Strukturierte Onboarding-Prozesse für neue Lieferanten mit Sicherheitsfokus\n• Regelmäßige Reviews und Updates der Lieferantenbeziehungen\n• Systematische Offboarding-Prozesse bei Vertragsende mit sicherer Datenrückgabe\n• Kontinuierliche Anpassung der Sicherheitsanforderungen an veränderte Bedrohungslagen\n• Integration von Lieferanten in Business-Continuity-Planungen\n\n🎯 Supply-Chain-Security:\n• Aufbau einer umfassenden Supply-Chain-Visibility für alle kritischen Abhängigkeiten\n• Implementierung von Fourth-Party-Risk-Management für Sub-Lieferanten\n• Entwicklung von Supply-Chain-spezifischen Incident-Response-Plänen\n• Aufbau von Redundanzen und Alternativen für kritische Lieferanten\n• Kontinuierliche Bewertung und Verbesserung der Supply-Chain-Resilienz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Bedeutung haben interne Audits für die ISO 27001 Zertifizierung und wie werden sie effektiv durchgeführt?',
        answer: "Interne Audits sind ein zentraler Baustein des ISO 27001 ISMS und entscheidend für den Zertifizierungserfolg. Sie gewährleisten kontinuierliche Qualitätssicherung, Compliance-Überwachung und systematische Verbesserung der Informationssicherheitsorganisation.\n\n📅 Audit-Planung und Programmgestaltung:\n• Entwicklung eines risikobasierten internen Audit-Programms mit angemessener Abdeckung aller ISMS-Bereiche\n• Strategische Terminplanung zur optimalen Vorbereitung auf externe Zertifizierungsaudits\n• Berücksichtigung von Geschäftszyklen und kritischen Prozessen bei der Audit-Planung\n• Integration verschiedener Audit-Typen von Compliance-Checks bis zu Performance-Audits\n• Aufbau flexibler Audit-Programme, die sich an verändernde Risiken anpassen können\n\n👥 Auditor-Kompetenz und Unabhängigkeit:\n• Aufbau interner Audit-Kompetenzen durch systematische Schulung und Zertifizierung\n• Sicherstellung der Unabhängigkeit durch organisatorische Trennung von operativen Verantwortlichkeiten\n• Entwicklung von Audit-Teams mit komplementären Fähigkeiten und Erfahrungen\n• Kontinuierliche Weiterbildung der Auditoren zu neuen Standards und Best Practices\n• Aufbau von Backup-Kapazitäten zur Sicherstellung der Audit-Kontinuität\n\n🔍 Audit-Durchführung und Methodik:\n• Anwendung strukturierter Audit-Methoden mit klaren Checklisten und Bewertungskriterien\n• Fokussierung auf Wirksamkeit und kontinuierliche Verbesserung statt reine Compliance-Prüfung\n• Integration verschiedener Audit-Techniken von Dokumentenprüfung bis zu praktischen Tests\n• Aufbau konstruktiver Audit-Beziehungen mit den auditierten Bereichen\n• Dokumentation von Audit-Ergebnissen in strukturierter und nachvollziehbarer Form\n\n📊 Follow-up und Verbesserungsmanagement:\n• Systematische Verfolgung von Audit-Findings bis zur vollständigen Behebung\n• Integration von Audit-Ergebnissen in kontinuierliche Verbesserungsprozesse\n• Regelmäßige Analyse von Audit-Trends und systematischen Verbesserungspotenzialen\n• Kommunikation von Audit-Ergebnissen an relevante Stakeholder und Management\n• Nutzung von Audit-Erkenntnissen für strategische ISMS-Weiterentwicklung\n\n🎯 Audit-Qualität und Wertschöpfung:\n• Kontinuierliche Verbesserung der Audit-Qualität durch Feedback und Lessons Learned\n• Messung der Audit-Effektivität durch KPIs und Stakeholder-Feedback\n• Aufbau einer Audit-Kultur, die Verbesserung und Innovation fördert\n• Integration von Audit-Aktivitäten in strategische Geschäftsprozesse\n• Entwicklung von Audit-Programmen, die echten Geschäftswert schaffen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie entwickelt man eine effektive Incident-Response-Strategie für ISO 27001 Compliance?',
        answer: "Eine robuste Incident-Response-Strategie ist essentiell für ISO 27001 Compliance und operative Sicherheitsexzellenz. Sie gewährleistet schnelle Reaktion auf Sicherheitsvorfälle, minimiert Schäden und ermöglicht systematisches Lernen aus Vorfällen.\n\n🚨 Incident-Response-Framework:\n• Entwicklung einer umfassenden Incident-Response-Policy mit klaren Definitionen und Eskalationswegen\n• Aufbau strukturierter Incident-Kategorisierung nach Schweregrad und Auswirkungen\n• Etablierung klarer Rollen und Verantwortlichkeiten für alle Incident-Response-Aktivitäten\n• Integration von Incident-Response in übergeordnete Business-Continuity-Strategien\n• Aufbau von Incident-Response-Teams mit komplementären Fähigkeiten und Expertise\n\n⏱️ Incident-Detection und Alerting:\n• Implementierung umfassender Monitoring-Systeme für frühzeitige Incident-Erkennung\n• Aufbau automatisierter Alerting-Mechanismen mit intelligenter Priorisierung\n• Integration verschiedener Datenquellen von SIEM-Systemen bis zu Mitarbeiter-Meldungen\n• Entwicklung von Threat-Intelligence-Kapazitäten für proaktive Bedrohungserkennung\n• Etablierung von Incident-Reporting-Kanälen für alle Organisationsebenen\n\n🔧 Response und Containment:\n• Entwicklung standardisierter Response-Playbooks für verschiedene Incident-Typen\n• Aufbau schneller Containment-Kapazitäten zur Schadensbegrenzung\n• Implementierung forensischer Untersuchungsverfahren für Incident-Analyse\n• Etablierung von Kommunikationsprotokollen für interne und externe Stakeholder\n• Aufbau von Recovery-Prozessen für schnelle Wiederherstellung normaler Operationen\n\n📋 Dokumentation und Compliance:\n• Systematische Dokumentation aller Incident-Response-Aktivitäten für Compliance-Nachweis\n• Aufbau von Incident-Datenbanken für Trend-Analyse und Verbesserungsidentifikation\n• Integration regulatorischer Meldepflichten in Incident-Response-Prozesse\n• Entwicklung von Incident-Reporting für Management und Aufsichtsbehörden\n• Sicherstellung der Nachvollziehbarkeit aller Response-Entscheidungen und Maßnahmen\n\n🔄 Lessons Learned und Verbesserung:\n• Systematische Post-Incident-Reviews zur Identifikation von Verbesserungspotenzialen\n• Integration von Incident-Erkenntnissen in kontinuierliche ISMS-Verbesserung\n• Regelmäßige Aktualisierung von Response-Playbooks basierend auf neuen Erfahrungen\n• Aufbau einer lernenden Organisation, die aus jedem Incident Wert schöpft\n• Kontinuierliche Verbesserung der Incident-Response-Kapazitäten durch Training und Simulation"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
