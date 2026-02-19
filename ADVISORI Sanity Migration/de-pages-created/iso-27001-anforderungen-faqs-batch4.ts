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
    console.log('Updating ISO 27001 Anforderungen page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-anforderungen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-anforderungen" not found')
    }
    
    // Create new FAQs for ISO 27001 business continuity and vendor management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Business Continuity Anforderungen definiert ISO 27001 und wie werden diese strategisch umgesetzt?',
        answer: "Die Business Continuity Anforderungen der ISO 27001 sind essentiell für die Aufrechterhaltung kritischer Geschäftsprozesse bei Störungen und bilden einen integralen Bestandteil des ISMS. Eine strategische Umsetzung gewährleistet organisationale Resilienz und minimiert Geschäftsunterbrechungen.\n\n🎯 Strategische Business Impact Analyse:\n• Durchführung systematischer Business Impact Analysen zur Identifikation kritischer Geschäftsprozesse und deren Abhängigkeiten\n• Bewertung der maximalen tolerierbaren Ausfallzeiten und Recovery-Ziele für verschiedene Geschäftsfunktionen\n• Analyse von Upstream- und Downstream-Abhängigkeiten zwischen verschiedenen Geschäftsprozessen\n• Quantifizierung finanzieller und operativer Auswirkungen von Geschäftsunterbrechungen\n• Integration von Reputations- und Compliance-Risiken in die Impact-Bewertung\n\n📋 Umfassende Continuity-Planung:\n• Entwicklung detaillierter Business Continuity Pläne für alle kritischen Geschäftsprozesse mit klaren Aktivierungskriterien\n• Aufbau alternativer Betriebsverfahren und Workaround-Lösungen für verschiedene Störungsszenarien\n• Etablierung von Backup-Standorten und alternativen Arbeitsplätzen für kritische Funktionen\n• Integration von Lieferanten- und Partnerorganisationen in die Continuity-Planung\n• Berücksichtigung verschiedener Störungstypen von lokalen Ausfällen bis zu großflächigen Katastrophen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie werden Lieferanten- und Drittanbieter-Anforderungen nach ISO 27001 systematisch verwaltet?',
        answer: "Das Management von Lieferanten und Drittanbietern ist ein kritischer Aspekt der ISO 27001 Anforderungen, da externe Partner oft Zugang zu sensiblen Informationen haben oder kritische Services bereitstellen. Ein systematischer Ansatz minimiert Risiken und gewährleistet durchgängige Sicherheitsstandards.\n\n🔍 Systematische Lieferantenbewertung:\n• Entwicklung umfassender Due Diligence Prozesse für die Bewertung von Sicherheitsstandards und Compliance-Status potenzieller Lieferanten\n• Implementierung risikobasierter Kategorisierung von Lieferanten basierend auf Zugangsebene und Kritikalität der bereitgestellten Services\n• Durchführung regelmäßiger Sicherheitsassessments und Audits bei kritischen Lieferanten\n• Bewertung der Cyber-Resilienz und Incident Response Capabilities von Drittanbietern\n• Integration von Lieferanten-Risikobewertungen in das Enterprise Risk Management\n\n📄 Vertragliche Sicherheitsanforderungen:\n• Entwicklung standardisierter Sicherheitsklauseln und Service Level Agreements für verschiedene Lieferantenkategorien\n• Integration spezifischer ISO 27001 Anforderungen in Lieferantenverträge einschließlich Audit-Rechten und Compliance-Verpflichtungen\n• Etablierung klarer Incident Notification und Response Anforderungen für Sicherheitsvorfälle\n• Definition von Datenverarbeitungs- und Datenschutzanforderungen entsprechend GDPR und anderen Regulierungen\n• Implementierung von Right-to-Audit Klauseln und regelmäßigen Compliance-Reviews"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Anforderungen stellt ISO 27001 an das Management von Informationsklassifizierung und Datenhandling?',
        answer: "Die Informationsklassifizierung und das Datenhandling sind fundamentale Anforderungen der ISO 27001, die eine systematische und konsistente Behandlung von Informationen entsprechend ihrer Sensitivität und Kritikalität gewährleisten. Ein strukturierter Ansatz schützt Informationswerte und unterstützt Compliance-Ziele.\n\n📊 Systematische Klassifizierungsframework:\n• Entwicklung einer umfassenden Informationsklassifizierungsrichtlinie mit klaren Kategorien und Kriterien für verschiedene Informationstypen\n• Etablierung konsistenter Klassifizierungslabels und Markierungsstandards für physische und digitale Informationen\n• Integration von regulatorischen und vertraglichen Anforderungen in das Klassifizierungsschema\n• Berücksichtigung des gesamten Informationslebenszyklus von der Erstellung bis zur sicheren Vernichtung\n• Aufbau automatisierter Klassifizierungstools für große Datenmengen und strukturierte Datenbanken\n\n🔒 Schutzmaßnahmen nach Klassifizierung:\n• Implementierung differenzierter Schutzmaßnahmen basierend auf der Informationsklassifizierung\n• Aufbau rollenbasierter Zugriffskontrolle entsprechend der Klassifizierungsebenen\n• Etablierung spezifischer Handling-, Speicher- und Übertragungsanforderungen für verschiedene Klassifizierungsstufen\n• Integration von Data Loss Prevention Technologien zur automatischen Durchsetzung von Handling-Richtlinien\n• Entwicklung sicherer Vernichtungs- und Archivierungsprozesse für klassifizierte Informationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie werden die Anforderungen für Incident Response und Forensik nach ISO 27001 professionell implementiert?',
        answer: "Die Incident Response und Forensik Anforderungen der ISO 27001 sind kritisch für die schnelle und effektive Behandlung von Sicherheitsvorfällen. Eine professionelle Implementierung minimiert Schäden, erhält Beweise und ermöglicht schnelle Wiederherstellung der normalen Geschäftstätigkeit.\n\n🚨 Strukturierte Incident Response Organisation:\n• Aufbau eines dedizierten Computer Security Incident Response Teams mit klaren Rollen, Verantwortlichkeiten und Eskalationswegen\n• Entwicklung detaillierter Incident Response Playbooks für verschiedene Vorfallstypen von Malware bis zu Datenschutzverletzungen\n• Etablierung von 24/7 Incident Detection und Response Capabilities für kritische Systeme\n• Integration mit externen Incident Response Services und Forensik-Spezialisten für komplexe Vorfälle\n• Aufbau von Kommunikationsplänen für interne und externe Stakeholder einschließlich Regulierungsbehörden\n\n🔍 Forensische Capabilities:\n• Implementierung forensisch sauberer Beweissicherungsverfahren zur Erhaltung der Beweisintegrität\n• Aufbau spezialisierter Forensik-Tools und Technologien für verschiedene Systemtypen und Datenquellen\n• Entwicklung von Chain of Custody Verfahren für die rechtssichere Handhabung digitaler Beweise\n• Etablierung von Forensik-Laboren oder Partnerschaften für detaillierte Malware-Analyse\n• Integration von Threat Intelligence für die Zuordnung von Angreifern und Angriffsmethoden"
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
