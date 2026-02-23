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
    console.log('Updating ISMS ISO 27001 page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'isms-iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "isms-iso-27001" not found')
    }
    
    // Create new FAQs for ISMS fundamentals and architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist ein ISMS nach ISO 27001 und wie unterscheidet es sich von herkömmlichen Sicherheitsansätzen?',
        answer: "Ein Informationssicherheitsmanagementsystem (ISMS) nach ISO 27001 ist ein systematischer, prozessorientierter Ansatz zur Verwaltung und zum Schutz von Informationsassets, der weit über traditionelle technische Sicherheitsmaßnahmen hinausgeht. Das ISMS etabliert einen ganzheitlichen Rahmen für die strategische Steuerung der Informationssicherheit und integriert diese nahtlos in die Geschäftsprozesse der Organisation.\n\n🏗️ Systematischer Managementansatz:\n• Das ISMS folgt einem strukturierten Managementsystem-Ansatz, der alle Aspekte der Informationssicherheit systematisch adressiert\n• Integration von Informationssicherheit in die Unternehmensführung und strategische Entscheidungsprozesse\n• Etablierung klarer Governance-Strukturen mit definierten Rollen, Verantwortlichkeiten und Entscheidungswegen\n• Aufbau einer nachhaltigen Sicherheitskultur, die alle Organisationsebenen durchdringt\n• Kontinuierliche Ausrichtung der Informationssicherheit an den Geschäftszielen und strategischen Prioritäten\n\n🔄 PDCA-Zyklus und kontinuierliche Verbesserung:\n• Das ISMS basiert auf dem Plan-Do-Check-Act-Modell für kontinuierliche Verbesserung und Anpassung\n• Systematische Planung von Sicherheitsmaßnahmen basierend auf Risikobewertungen und Geschäftsanforderungen\n• Strukturierte Implementierung und operative Umsetzung der geplanten Sicherheitskontrollen\n• Regelmäßige Überwachung, Messung und Bewertung der ISMS-Performance\n• Kontinuierliche Anpassung und Verbesserung basierend auf Erkenntnissen und veränderten Anforderungen\n\n🎯 Risikobasierte Methodik:\n• Systematische Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken\n• Maßgeschneiderte Sicherheitskontrollen basierend auf der individuellen Risikolandschaft\n• Kontinuierliche Risikoüberwachung und Anpassung der Behandlungsstrategien\n• Integration von Risikomanagement in alle Geschäftsentscheidungen\n• Aufbau von Risikobewusstsein und Risikokompetenz in der gesamten Organisation\n\n📋 Prozessorientierte Integration:\n• Nahtlose Integration der Informationssicherheit in bestehende Geschäftsprozesse\n• Entwicklung spezifischer ISMS-Prozesse für alle Aspekte des Informationssicherheitsmanagements\n• Klare Schnittstellen und Abhängigkeiten zwischen ISMS und anderen Managementsystemen\n• Standardisierte Verfahren für Incident Management, Change Management und Business Continuity\n• Aufbau von Prozessreife und kontinuierlicher Prozessoptimierung\n\n🌟 Strategische Differenzierung:\n• Das ISMS geht über reaktive Sicherheitsmaßnahmen hinaus und etabliert proaktive Sicherheitssteuerung\n• Fokus auf nachhaltige Sicherheitsarchitektur statt punktueller technischer Lösungen\n• Integration von Compliance-Anforderungen in ein kohärentes Managementsystem\n• Aufbau von Sicherheitskompetenz als strategischen Wettbewerbsvorteil\n• Schaffung von Vertrauen und Glaubwürdigkeit bei Stakeholdern durch systematische Herangehensweise"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Kernkomponenten umfasst die ISMS-Architektur und wie arbeiten sie zusammen?',
        answer: "Die ISMS-Architektur nach ISO 27001 besteht aus mehreren integrierten Kernkomponenten, die systematisch zusammenwirken, um eine umfassende und nachhaltige Informationssicherheitssteuerung zu gewährleisten. Diese Architektur bildet das strukturelle Fundament für alle Informationssicherheitsaktivitäten und deren strategische Ausrichtung.\n\n🎯 Kontext der Organisation und Stakeholder-Management:\n• Systematische Analyse des organisatorischen Kontexts, einschließlich interner und externer Faktoren\n• Identifikation und Bewertung aller relevanten Stakeholder und deren Anforderungen\n• Bestimmung des ISMS-Anwendungsbereichs basierend auf Geschäftsanforderungen und Risikoprofil\n• Kontinuierliche Überwachung von Kontextveränderungen und deren Auswirkungen auf das ISMS\n• Integration von Stakeholder-Erwartungen in die ISMS-Strategie und operative Umsetzung\n\n🏛️ Führung und Governance-Strukturen:\n• Etablierung klarer Führungsverantwortung und Commitment für Informationssicherheit\n• Definition der Informationssicherheitspolitik als strategisches Fundament\n• Aufbau von Governance-Strukturen mit definierten Rollen und Verantwortlichkeiten\n• Implementierung von Entscheidungsprozessen und Eskalationswegen\n• Sicherstellung angemessener Ressourcenallokation für ISMS-Aktivitäten\n\n📊 Risikomanagement-Framework:\n• Entwicklung einer umfassenden Risikomanagement-Methodik für Informationssicherheit\n• Systematische Risikoidentifikation, Bewertung und Priorisierung\n• Definition von Risikobehandlungsstrategien und Implementierung entsprechender Kontrollen\n• Kontinuierliche Risikoüberwachung und regelmäßige Neubewertung\n• Integration von Risikomanagement in alle Geschäftsentscheidungen und Prozesse\n\n🔧 Operative Prozesse und Kontrollen:\n• Design und Implementierung spezifischer ISMS-Prozesse für alle Sicherheitsaspekte\n• Auswahl und Implementierung angemessener Sicherheitskontrollen aus Anhang A\n• Entwicklung operativer Verfahren für Incident Management und Business Continuity\n• Etablierung von Change Management Prozessen für ISMS-Änderungen\n• Aufbau von Kompetenz und Bewusstsein in der gesamten Organisation\n\n📈 Performance-Monitoring und Messung:\n• Entwicklung von KPIs und Metriken zur ISMS-Performance-Bewertung\n• Implementierung systematischer Überwachungs- und Messverfahren\n• Durchführung regelmäßiger interner Audits zur Bewertung der ISMS-Wirksamkeit\n• Management Review Prozesse für strategische ISMS-Steuerung\n• Kontinuierliche Analyse von Performance-Daten für Verbesserungsmaßnahmen\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Systematische Identifikation von Verbesserungsmöglichkeiten basierend auf Performance-Daten\n• Implementierung von Korrektur- und Vorbeugungsmaßnahmen\n• Regelmäßige Überprüfung und Aktualisierung der ISMS-Komponenten\n• Integration von Lessons Learned und Best Practices\n• Anpassung des ISMS an veränderte Geschäftsanforderungen und Bedrohungslandschaften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie erfolgt die praktische Implementierung eines ISMS und welche Phasen sind dabei zu durchlaufen?',
        answer: "Die praktische ISMS-Implementierung nach ISO 27001 folgt einem strukturierten, phasenorientierten Ansatz, der systematische Planung mit operativer Umsetzung verbindet. Dieser Implementierungsweg gewährleistet nachhaltige Verankerung und kontinuierliche Verbesserung des Informationssicherheitsmanagementsystems.\n\n🔍 Vorbereitungsphase und strategische Planung:\n• Durchführung einer umfassenden Gap-Analyse zur Bewertung des aktuellen Reifegrads\n• Definition des ISMS-Anwendungsbereichs basierend auf Geschäftsanforderungen und Risikoprofil\n• Entwicklung der ISMS-Strategie und Ausrichtung an den Unternehmenszielen\n• Aufbau des Projektteams mit klaren Rollen und Verantwortlichkeiten\n• Erstellung eines detaillierten Implementierungsplans mit Meilensteinen und Ressourcenplanung\n\n🏗️ ISMS-Design und Architekturentwicklung:\n• Entwicklung der Informationssicherheitspolitik als strategisches Fundament\n• Design der ISMS-Prozessarchitektur und Integration in bestehende Managementsysteme\n• Etablierung von Governance-Strukturen und Entscheidungsprozessen\n• Definition von Rollen, Verantwortlichkeiten und Kompetenzen\n• Entwicklung der Risikomanagement-Methodik und Bewertungskriterien\n\n⚖️ Risikobewertung und Kontrollauswahl:\n• Systematische Identifikation und Inventarisierung aller Informationsassets\n• Durchführung umfassender Risikoanalysen für alle identifizierten Assets\n• Bewertung und Priorisierung der Risiken basierend auf definierten Kriterien\n• Entwicklung von Risikobehandlungsstrategien und Auswahl angemessener Kontrollen\n• Erstellung des Statement of Applicability mit Begründung für Kontrollauswahl\n\n🔧 Operative Implementierung und Umsetzung:\n• Schrittweise Implementierung der ausgewählten Sicherheitskontrollen\n• Entwicklung und Dokumentation operativer Verfahren und Arbeitsanweisungen\n• Durchführung umfassender Schulungs- und Awareness-Programme\n• Implementierung von Monitoring- und Messverfahren\n• Aufbau von Incident Response und Business Continuity Fähigkeiten\n\n📊 Monitoring und Performance-Bewertung:\n• Etablierung systematischer Überwachungs- und Messverfahren\n• Durchführung regelmäßiger interner Audits zur Bewertung der ISMS-Wirksamkeit\n• Sammlung und Analyse von Performance-Daten und KPIs\n• Identifikation von Abweichungen und Verbesserungsmöglichkeiten\n• Vorbereitung auf Management Review und externe Zertifizierungsaudits\n\n🔄 Kontinuierliche Verbesserung und Optimierung:\n• Systematische Analyse von Audit-Ergebnissen und Performance-Daten\n• Implementierung von Korrektur- und Vorbeugungsmaßnahmen\n• Regelmäßige Überprüfung und Aktualisierung der ISMS-Komponenten\n• Integration von Lessons Learned und Best Practices\n• Kontinuierliche Anpassung an veränderte Geschäftsanforderungen und Bedrohungslandschaften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt das Risikomanagement im ISMS und wie wird es systematisch umgesetzt?',
        answer: "Das Risikomanagement bildet das strategische Herzstück des ISMS nach ISO 27001 und fungiert als zentraler Steuerungsmechanismus für alle Informationssicherheitsentscheidungen. Es etabliert einen systematischen, evidenzbasierten Ansatz zur Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken und gewährleistet die optimale Allokation von Sicherheitsressourcen.\n\n🎯 Strategische Rolle des Risikomanagements:\n• Das Risikomanagement fungiert als Bindeglied zwischen Geschäftszielen und Sicherheitsmaßnahmen\n• Systematische Priorisierung von Sicherheitsinvestitionen basierend auf Risikobewertungen\n• Integration von Risikobewusstsein in alle Geschäftsentscheidungen und strategischen Planungen\n• Aufbau einer risikobasierten Sicherheitskultur in der gesamten Organisation\n• Kontinuierliche Ausrichtung der Informationssicherheit an der Risikobereitschaft der Organisation\n\n📋 Systematische Risikoidentifikation:\n• Umfassende Inventarisierung aller Informationsassets und deren Klassifikation\n• Systematische Identifikation von Bedrohungen für alle Asset-Kategorien\n• Analyse von Schwachstellen in Systemen, Prozessen und organisatorischen Strukturen\n• Bewertung bestehender Sicherheitskontrollen und deren Wirksamkeit\n• Berücksichtigung externer Faktoren wie regulatorische Änderungen und Marktentwicklungen\n\n⚖️ Strukturierte Risikobewertung und Priorisierung:\n• Entwicklung konsistenter Bewertungskriterien für Eintrittswahrscheinlichkeit und Auswirkungen\n• Quantitative oder qualitative Risikobewertung basierend auf organisatorischen Anforderungen\n• Systematische Priorisierung der Risiken entsprechend ihrer Bedeutung für die Organisation\n• Berücksichtigung von Interdependenzen und kumulativen Risikofaktoren\n• Regelmäßige Neubewertung zur Berücksichtigung veränderter Umstände\n\n🛡️ Risikobehandlung und Kontrollimplementierung:\n• Entwicklung maßgeschneiderter Risikobehandlungsstrategien für jedes identifizierte Risiko\n• Systematische Auswahl angemessener Sicherheitskontrollen basierend auf Kosten-Nutzen-Analysen\n• Implementierung von Kontrollen unter Berücksichtigung organisatorischer Gegebenheiten\n• Kontinuierliche Überwachung der Kontrollwirksamkeit und Anpassung bei Bedarf\n• Integration von Risikobehandlung in operative Geschäftsprozesse\n\n📊 Kontinuierliche Risikoüberwachung:\n• Etablierung systematischer Monitoring-Verfahren für alle identifizierten Risiken\n• Implementierung von Frühwarnsystemen für kritische Risikoindikatoren\n• Regelmäßige Bewertung der Wirksamkeit implementierter Sicherheitskontrollen\n• Kontinuierliche Anpassung der Risikobewertung an veränderte Umstände\n• Integration von Risikoinformationen in Management-Reporting und Entscheidungsprozesse\n\n🔄 Integration in ISMS-Prozesse:\n• Nahtlose Integration des Risikomanagements in alle ISMS-Aktivitäten und Entscheidungsprozesse\n• Verwendung von Risikoinformationen für strategische ISMS-Planung und Ressourcenallokation\n• Integration in Change Management Prozesse zur Bewertung sicherheitsrelevanter Änderungen\n• Berücksichtigung in Incident Management für verbesserte Response-Strategien\n• Kontinuierliche Verbesserung der Risikomanagement-Prozesse basierend auf Erfahrungen und Best Practices"
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
