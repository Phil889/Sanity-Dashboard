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
    console.log('Updating DORA Compliance Checkliste page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-checkliste" not found')
    }
    
    // Create new FAQs for governance structures and organizational requirements
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Governance-Strukturen und organisatorischen Anforderungen sollten in DORA-Compliance-Checklisten berücksichtigt werden?',
        answer: "Effektive DORA-Governance erfordert klare organisatorische Strukturen und Verantwortlichkeiten, die in umfassenden Checklisten systematisch erfasst und bewertet werden müssen. Die Governance-Komponenten bilden das Fundament für alle anderen Compliance-Aktivitäten.\n\n🏛️ Vorstandsebene und Senior Management:\n• Etablierung klarer Verantwortlichkeiten des Vorstands für IKT-Risiko-Oversight und strategische Entscheidungen\n• Definition spezifischer IKT-Expertise-Anforderungen für Vorstandsmitglieder und deren kontinuierliche Weiterbildung\n• Implementierung regelmäßiger IKT-Risiko-Berichterstattung an den Vorstand mit definierten Eskalationskriterien\n• Sicherstellung angemessener Ressourcenallokation für IKT-Risikomanagement und Compliance-Aktivitäten\n• Entwicklung von IKT-Risiko-Appetit-Statements und deren Integration in die Gesamtrisikostrategie\n\n👥 Organisatorische Rollen und Verantwortlichkeiten:\n• Definition und Dokumentation aller IKT-relevanten Rollen mit klaren Stellenbeschreibungen und Kompetenzanforderungen\n• Etablierung von Three Lines of Defense-Strukturen für IKT-Risikomanagement mit klarer Abgrenzung\n• Implementierung von Chief Information Security Officer oder äquivalenten Rollen mit direktem Zugang zur Geschäftsleitung\n• Entwicklung von Kompetenz- und Qualifikationsmatrizen für alle IKT-relevanten Positionen\n• Sicherstellung angemessener Segregation of Duties und Vermeidung von Interessenkonflikten\n\n📋 Governance-Komitees und Entscheidungsstrukturen:\n• Etablierung spezialisierter IKT-Risiko-Komitees mit definierten Mandaten und Berichtswegen\n• Implementation regelmäßiger Governance-Meetings mit strukturierten Agenden und Dokumentation\n• Entwicklung klarer Entscheidungsprozesse für IKT-Investitionen und Risikomanagement-Maßnahmen\n• Sicherstellung angemessener Stakeholder-Repräsentation in Governance-Gremien\n• Integration von IKT-Governance in bestehende Unternehmensführungsstrukturen\n\n🔄 Richtlinien und Verfahrensdokumentation:\n• Entwicklung umfassender IKT-Governance-Richtlinien mit regelmäßigen Review-Zyklen\n• Implementierung standardisierter Verfahren für alle kritischen IKT-Prozesse\n• Sicherstellung konsistenter Dokumentationsstandards und Versionskontrolle\n• Etablierung von Genehmigungsprozessen für Richtlinienänderungen und -ausnahmen\n• Integration von Compliance-Anforderungen in alle relevanten Organisationsrichtlinien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie gestalte ich Checklisten für die Bewertung und Implementierung von Incident-Management-Prozessen unter DORA?',
        answer: "Incident-Management ist eine zentrale Säule der DORA-Compliance und erfordert detaillierte, strukturierte Checklisten, die alle Phasen von der Vorbereitung bis zur Nachbereitung abdecken. Die Checklisten müssen sowohl technische als auch organisatorische Aspekte berücksichtigen.\n\n🚨 Incident-Response-Vorbereitung:\n• Entwicklung umfassender Incident-Response-Pläne für verschiedene Arten von IKT-Incidents mit spezifischen Handlungsanweisungen\n• Etablierung von Incident-Response-Teams mit klar definierten Rollen und Verantwortlichkeiten\n• Implementation von Kommunikationsplänen für interne und externe Stakeholder während Incidents\n• Sicherstellung verfügbarer Ressourcen und Tools für effektive Incident-Response\n• Regelmäßige Schulungen und Übungen zur Aufrechterhaltung der Incident-Response-Fähigkeiten\n\n⏱️ Incident-Erkennung und -Klassifizierung:\n• Implementation automatisierter Monitoring- und Alerting-Systeme für frühzeitige Incident-Erkennung\n• Entwicklung klarer Klassifizierungskriterien für verschiedene Incident-Typen und Schweregrade\n• Etablierung von Eskalationsprozessen basierend auf Incident-Klassifizierung und Business Impact\n• Sicherstellung konsistenter Incident-Dokumentation von der ersten Erkennung an\n• Integration von Threat-Intelligence für verbesserte Incident-Erkennung und -Bewertung\n\n📞 Incident-Response und -Management:\n• Implementierung strukturierter Response-Prozesse mit definierten Zeitvorgaben für verschiedene Incident-Kategorien\n• Sicherstellung effektiver Koordination zwischen verschiedenen Response-Teams und externen Partnern\n• Entwicklung von Containment- und Eradication-Strategien für verschiedene Incident-Szenarien\n• Implementation von Forensik- und Evidence-Preservation-Verfahren für kritische Incidents\n• Etablierung von Business-Continuity-Maßnahmen zur Minimierung von Service-Unterbrechungen\n\n📊 Incident-Reporting und Compliance:\n• Entwicklung automatisierter Reporting-Mechanismen für regulatorische Meldepflichten\n• Sicherstellung zeitgerechter Meldungen an Aufsichtsbehörden gemäß DORA-Anforderungen\n• Implementation von internen Reporting-Strukturen für Management und Governance-Gremien\n• Entwicklung von Metriken und KPIs zur Bewertung der Incident-Management-Effektivität\n• Etablierung von Lessons-Learned-Prozessen zur kontinuierlichen Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche spezifischen Checklisten-Komponenten sind für das Drittanbieter-Risikomanagement unter DORA erforderlich?',
        answer: "Das Drittanbieter-Risikomanagement unter DORA erfordert umfassende, mehrdimensionale Checklisten, die den gesamten Lebenszyklus der Drittanbieter-Beziehung abdecken. Die Komplexität der DORA-Anforderungen macht eine systematische, strukturierte Herangehensweise unerlässlich.\n\n🔍 Due Diligence und Anbieter-Assessment:\n• Entwicklung umfassender Due-Diligence-Checklisten für die Bewertung potenzieller IKT-Drittanbieter\n• Implementation von Risikobewertungsframeworks zur Klassifizierung von Drittanbietern nach Kritikalität\n• Sicherstellung angemessener Bewertung der finanziellen Stabilität und Geschäftskontinuität von Anbietern\n• Evaluation der Cybersecurity-Posture und Compliance-Status potenzieller Drittanbieter\n• Bewertung der geografischen und regulatorischen Risiken bei der Anbieterauswahl\n\n📋 Vertragsgestaltung und rechtliche Anforderungen:\n• Integration spezifischer DORA-Compliance-Klauseln in alle IKT-Drittanbieter-Verträge\n• Sicherstellung angemessener Service-Level-Agreements mit messbaren Performance-Indikatoren\n• Implementation von Audit-Rechten und Transparenz-Anforderungen in Vertragsstrukturen\n• Entwicklung von Exit-Klauseln und Transition-Plänen für kritische Services\n• Etablierung klarer Haftungs- und Versicherungsanforderungen für Drittanbieter\n\n📊 Kontinuierliche Überwachung und Performance-Management:\n• Implementation kontinuierlicher Monitoring-Prozesse für alle kritischen IKT-Drittanbieter\n• Entwicklung von KPIs und Metriken zur Bewertung der Drittanbieter-Performance\n• Etablierung regelmäßiger Review-Zyklen und Reassessment-Prozesse\n• Sicherstellung effektiver Incident-Management-Koordination mit Drittanbietern\n• Integration von Drittanbieter-Risiken in die Gesamtrisikoberichterstattung\n\n🔄 Konzentrations- und Systemrisiko-Management:\n• Bewertung und Management von Konzentrationsrisiken bei kritischen IKT-Services\n• Implementation von Diversifikationsstrategien zur Reduzierung von Single-Point-of-Failure-Risiken\n• Entwicklung von Substitutions- und Backup-Strategien für kritische Drittanbieter\n• Koordination mit anderen Finanzinstituten zur Bewertung systemischer Risiken\n• Etablierung von Notfallplänen für den Ausfall kritischer Drittanbieter"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickle ich Checklisten für die Bewertung der organisatorischen Resilienz und Business Continuity unter DORA?',
        answer: "Organisatorische Resilienz und Business Continuity sind fundamentale Aspekte der DORA-Compliance, die umfassende, integrierte Checklisten erfordern. Diese müssen sowohl präventive Maßnahmen als auch reaktive Fähigkeiten systematisch bewerten.\n\n🏢 Organisatorische Resilienz-Frameworks:\n• Entwicklung umfassender Business Impact Analysen für alle kritischen Geschäftsprozesse und IKT-Services\n• Implementation von Resilienz-Metriken und -Indikatoren zur kontinuierlichen Bewertung der organisatorischen Widerstandsfähigkeit\n• Etablierung von Recovery Time Objectives und Recovery Point Objectives für alle kritischen Systeme\n• Sicherstellung angemessener Redundanz und Diversifikation in kritischen Geschäftsprozessen\n• Integration von Resilienz-Überlegungen in strategische Geschäftsentscheidungen und Investitionsplanungen\n\n🔄 Business Continuity Planning und Management:\n• Entwicklung detaillierter Business Continuity Pläne für verschiedene Disruption-Szenarien\n• Implementation von Crisis Management-Strukturen mit klaren Rollen und Entscheidungsbefugnissen\n• Sicherstellung effektiver Kommunikationsstrategien für Krisensituationen\n• Etablierung alternativer Arbeitsplätze und Remote-Work-Fähigkeiten für kritische Funktionen\n• Integration von Supplier- und Partner-Continuity-Plänen in die Gesamtstrategie\n\n🧪 Testing und Validierung von Continuity-Fähigkeiten:\n• Implementation regelmäßiger Business Continuity-Tests mit verschiedenen Szenarien und Komplexitätsgraden\n• Entwicklung von Tabletop-Übungen und Simulation-Programmen für Crisis Management-Teams\n• Sicherstellung realistischer Testing-Szenarien basierend auf aktuellen Bedrohungslandschaften\n• Etablierung von Lessons-Learned-Prozessen zur kontinuierlichen Verbesserung der Continuity-Pläne\n• Integration von Testing-Ergebnissen in die Risikobewertung und strategische Planung\n\n📈 Kontinuierliche Verbesserung und Anpassung:\n• Entwicklung von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Resilienz-Fähigkeiten\n• Implementation von Post-Incident-Reviews zur Identifikation von Verbesserungsmöglichkeiten\n• Sicherstellung regelmäßiger Updates der Continuity-Pläne basierend auf sich ändernden Geschäftsanforderungen\n• Integration von externen Threat-Intelligence und Industry Best Practices\n• Etablierung von Benchmarking-Prozessen zur Bewertung der Resilienz-Performance gegen Industry Standards"
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
