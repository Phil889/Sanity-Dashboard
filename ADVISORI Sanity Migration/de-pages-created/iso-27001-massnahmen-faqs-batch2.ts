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
    console.log('Updating ISO 27001 Maßnahmen page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-massnahmen" not found')
    }
    
    // Create new FAQs for ISO 27001 Maßnahmen implementation strategies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Implementierungsstrategien haben sich für ISO 27001 Maßnahmen als besonders erfolgreich erwiesen?',
        answer: "Erfolgreiche ISO 27001 Maßnahmen-Implementierung erfordert eine durchdachte Strategie, die technische Exzellenz mit organisatorischer Verankerung und kulturellem Wandel verbindet. Bewährte Implementierungsansätze berücksichtigen sowohl die spezifischen Anforderungen der Organisation als auch die praktischen Herausforderungen der Umsetzung.\n\n🎯 Phasenorientierte Implementierung:\n• Beginn mit einer umfassenden Gap-Analyse zur Identifikation bestehender Kontrollen und Schutzlücken\n• Priorisierung der Maßnahmen basierend auf Risikobewertung und Geschäftskritikalität\n• Schrittweise Umsetzung in überschaubaren Phasen mit klaren Meilensteinen und Erfolgskriterien\n• Parallele Implementierung unabhängiger Kontrollen zur Beschleunigung des Gesamtfortschritts\n• Kontinuierliche Validierung und Anpassung der Implementierungsstrategie basierend auf Lessons Learned\n\n🏗️ Architekturorientierter Ansatz:\n• Entwicklung einer kohärenten Sicherheitsarchitektur als Grundlage für alle Kontrollmaßnahmen\n• Integration von Defense-in-Depth Prinzipien für mehrschichtige Sicherheit\n• Berücksichtigung von Interoperabilität und Skalierbarkeit bei der Kontrollauswahl\n• Aufbau modularer Sicherheitslösungen, die flexibel erweitert und angepasst werden können\n• Etablierung von Standards und Frameworks für konsistente Implementierung\n\n👥 Change Management und Kulturwandel:\n• Frühe Einbindung aller relevanten Stakeholder in Planung und Umsetzung\n• Entwicklung einer umfassenden Kommunikationsstrategie für alle Organisationsebenen\n• Aufbau von Sicherheitsbewusstsein durch gezielte Schulungen und Awareness-Programme\n• Schaffung von Anreizsystemen für sicherheitskonformes Verhalten\n• Etablierung von Sicherheitschampions als Multiplikatoren in den Fachbereichen\n\n📊 Datengetriebene Implementierung:\n• Etablierung von Baseline-Messungen vor Beginn der Implementierung\n• Kontinuierliches Monitoring der Implementierungsfortschritte mit aussagekräftigen KPIs\n• Regelmäßige Wirksamkeitsmessungen implementierter Kontrollen\n• Nutzung von Datenanalysen zur Identifikation von Optimierungspotenzialen\n• Evidenzbasierte Entscheidungsfindung für Anpassungen der Implementierungsstrategie\n\n🔄 Agile und iterative Umsetzung:\n• Anwendung agiler Methoden für flexible und responsive Implementierung\n• Kurze Iterationszyklen mit regelmäßigen Reviews und Anpassungen\n• Prototyping und Pilotprojekte zur Validierung von Kontrollansätzen\n• Kontinuierliche Verbesserung basierend auf Feedback und Erfahrungen\n• Schnelle Reaktion auf veränderte Anforderungen und neue Bedrohungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie können personelle Kontrollen effektiv implementiert und nachhaltig verankert werden?',
        answer: "Personelle Kontrollen sind oft die kritischsten und gleichzeitig herausforderndsten Aspekte der ISO 27001 Implementierung, da sie direkt das Verhalten und die Einstellungen der Mitarbeiter beeinflussen. Erfolgreiche Umsetzung erfordert einen ganzheitlichen Ansatz, der Bewusstseinsbildung, Kompetenzentwicklung und kulturelle Verankerung miteinander verbindet.\n\n🎓 Umfassende Sicherheitsschulungen:\n• Entwicklung rollenspezifischer Schulungsprogramme, die auf die jeweiligen Verantwortlichkeiten und Risiken zugeschnitten sind\n• Kombination verschiedener Lernformate wie E-Learning, Präsenzschulungen, Workshops und praktische Übungen\n• Regelmäßige Auffrischungsschulungen zur Aufrechterhaltung des Sicherheitsbewusstseins\n• Integration aktueller Bedrohungsszenarien und realer Sicherheitsvorfälle in die Schulungsinhalte\n• Messung der Schulungseffektivität durch Tests, Simulationen und Verhaltensbeobachtungen\n\n🧠 Bewusstseinsbildung und Kulturwandel:\n• Entwicklung einer positiven Sicherheitskultur, die Sicherheit als gemeinsame Verantwortung versteht\n• Regelmäßige Kommunikation über Sicherheitsthemen durch verschiedene Kanäle und Formate\n• Schaffung von Anreizsystemen für sicherheitskonformes Verhalten und proaktive Sicherheitsbeiträge\n• Etablierung von Feedback-Mechanismen für kontinuierliche Verbesserung der Sicherheitsmaßnahmen\n• Integration von Sicherheitszielen in Mitarbeiterbeurteilungen und Leistungsbewertungen\n\n🔍 Personalsicherheit und Hintergrundprüfungen:\n• Implementierung risikobasierter Hintergrundprüfungen entsprechend der Sensitivität der Positionen\n• Entwicklung klarer Kriterien und Prozesse für Personalauswahl und Sicherheitsfreigaben\n• Regelmäßige Überprüfung und Aktualisierung von Sicherheitsfreigaben\n• Etablierung von Verfahren für den Umgang mit Sicherheitsverstößen und Disziplinarmaßnahmen\n• Aufbau von Whistleblowing-Mechanismen für die Meldung von Sicherheitsproblemen\n\n📱 Remote Work und Mobile Device Management:\n• Entwicklung umfassender Richtlinien für sicheres Arbeiten von zu Hause und unterwegs\n• Implementierung technischer Kontrollen für mobile Geräte und Remote-Zugriffe\n• Schulung der Mitarbeiter zu spezifischen Risiken und Sicherheitsmaßnahmen im Remote Work\n• Etablierung von Support-Strukturen für technische und sicherheitsbezogene Fragen\n• Regelmäßige Überprüfung und Anpassung der Remote Work Policies\n\n🎯 Kontinuierliche Kompetenzentwicklung:\n• Aufbau interner Sicherheitsexpertise durch gezielte Weiterbildung und Zertifizierungen\n• Etablierung von Mentoring-Programmen und Wissenstransfer-Initiativen\n• Schaffung von Karrierewegen im Bereich Informationssicherheit\n• Förderung der Teilnahme an externen Konferenzen und Fachveranstaltungen\n• Aufbau von Communities of Practice für den Austausch von Erfahrungen und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche physischen und umgebungsbezogenen Kontrollen sind in modernen Arbeitsumgebungen besonders relevant?',
        answer: "Physische und umgebungsbezogene Kontrollen haben sich durch die Digitalisierung und neue Arbeitsmodelle grundlegend gewandelt und erfordern heute einen hybriden Ansatz, der traditionelle Büroumgebungen, Remote Work und Cloud-basierte Infrastrukturen gleichermaßen berücksichtigt. Moderne Implementierung muss flexibel und skalierbar sein.\n\n🏢 Sichere Bereiche und Zugangskontrollen:\n• Implementierung mehrstufiger Zugangskontrollen mit biometrischen und kartenbasierten Systemen\n• Etablierung verschiedener Sicherheitszonen basierend auf der Sensitivität der verarbeiteten Informationen\n• Integration von Besuchermanagement-Systemen mit automatisierter Registrierung und Überwachung\n• Aufbau von Mantrap-Systemen und Anti-Tailgating-Maßnahmen für kritische Bereiche\n• Implementierung von Videoüberwachung mit intelligenter Analyse und Anomalieerkennung\n\n💻 Geräteschutz und Asset Management:\n• Entwicklung umfassender Asset-Inventare mit automatisierter Erkennung und Klassifizierung\n• Implementierung von Device Encryption und Remote Wipe Funktionalitäten für mobile Geräte\n• Etablierung sicherer Aufbewahrungslösungen für sensitive Hardware und Datenträger\n• Aufbau von Wartungs- und Lifecycle-Management-Prozessen für alle IT-Assets\n• Integration von IoT-Geräten und Smart Building Technologien in die Sicherheitsarchitektur\n\n🗑️ Sichere Entsorgung und Datenträgervernichtung:\n• Implementierung zertifizierter Datenvernichtungsverfahren für verschiedene Medientypen\n• Etablierung von Chain-of-Custody-Prozessen für die sichere Entsorgung\n• Aufbau von Partnerschaften mit spezialisierten Entsorgungsdienstleistern\n• Entwicklung von Verfahren für die sichere Wiederverwendung und Remarketing von Hardware\n• Integration von Umweltaspekten in die Entsorgungsstrategie\n\n🌡️ Umgebungsüberwachung und Schutzmaßnahmen:\n• Implementierung von Umweltmonitoring-Systemen für Temperatur, Feuchtigkeit und Luftqualität\n• Aufbau redundanter Stromversorgung und unterbrechungsfreier Stromversorgung\n• Etablierung von Brandschutz- und Löschsystemen speziell für IT-Umgebungen\n• Integration von Wasserschutz- und Leckageerkennungssystemen\n• Implementierung von Notfallbeleuchtung und Evakuierungssystemen\n\n🏠 Hybrid Work und dezentrale Sicherheit:\n• Entwicklung von Sicherheitsstandards für Home Office und Co-Working Spaces\n• Implementierung von VPN und Zero Trust Network Access für sichere Remote-Verbindungen\n• Etablierung von Richtlinien für die sichere Nutzung privater Geräte und Netzwerke\n• Aufbau von Support-Strukturen für die Sicherheit dezentraler Arbeitsplätze\n• Integration von Cloud-basierten Sicherheitslösungen für ortsunabhängigen Schutz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie kann die Wirksamkeit implementierter ISO 27001 Maßnahmen kontinuierlich überwacht und gemessen werden?',
        answer: "Die kontinuierliche Überwachung und Messung der Wirksamkeit von ISO 27001 Maßnahmen ist entscheidend für den nachhaltigen Erfolg des ISMS und erfordert einen systematischen Ansatz mit aussagekräftigen Metriken, automatisierten Monitoring-Tools und regelmäßigen Bewertungszyklen. Effektive Überwachung ermöglicht proaktive Optimierung und evidenzbasierte Entscheidungen.\n\n📊 KPI-Framework und Metriken:\n• Entwicklung eines umfassenden KPI-Frameworks mit Leading und Lagging Indicators für alle Kontrollkategorien\n• Definition quantitativer Metriken wie Incident Response Zeiten, Patch Management Compliance und Zugangsreview-Zyklen\n• Etablierung qualitativer Bewertungskriterien für kulturelle und organisatorische Aspekte\n• Implementierung von Benchmark-Vergleichen mit Branchenstandards und Best Practices\n• Aufbau von Trend-Analysen zur Identifikation von Verbesserungs- und Verschlechterungstendenzen\n\n🔍 Automatisierte Monitoring-Systeme:\n• Implementierung von SIEM-Lösungen für kontinuierliche Überwachung sicherheitsrelevanter Ereignisse\n• Aufbau von Compliance-Dashboards mit Echtzeit-Visualisierung des Kontrollstatus\n• Integration von Vulnerability Scanning und Penetration Testing in regelmäßige Überwachungszyklen\n• Etablierung automatisierter Alerting-Mechanismen für kritische Kontrollabweichungen\n• Nutzung von Machine Learning und AI für Anomalieerkennung und prädiktive Analysen\n\n🎯 Interne Audits und Assessments:\n• Entwicklung risikobasierter Audit-Programme mit variierenden Prüfungsintensitäten\n• Implementierung kontinuierlicher Audit-Ansätze anstelle punktueller Jahresaudits\n• Aufbau qualifizierter interner Audit-Teams mit entsprechenden Zertifizierungen\n• Etablierung von Self-Assessment-Prozessen für operative Bereiche\n• Integration von Audit-Findings in kontinuierliche Verbesserungsprozesse\n\n📈 Management Reviews und Reporting:\n• Implementierung regelmäßiger Management Review Meetings mit strukturierten Agenden\n• Entwicklung aussagekräftiger Management-Dashboards mit Executive-Summary-Formaten\n• Etablierung von Eskalationsmechanismen für kritische Sicherheitsprobleme\n• Aufbau von Trend-Reporting für strategische Entscheidungsunterstützung\n• Integration von Sicherheitsmetriken in allgemeine Unternehmens-KPIs\n\n🔄 Kontinuierliche Verbesserung:\n• Implementierung strukturierter Lessons Learned Prozesse nach Sicherheitsvorfällen\n• Etablierung von Feedback-Schleifen zwischen Monitoring-Ergebnissen und Kontrolloptimierung\n• Aufbau von Benchmarking-Programmen mit anderen Organisationen und Branchenstandards\n• Integration neuer Bedrohungen und Technologien in die Überwachungsstrategie\n• Regelmäßige Überprüfung und Anpassung der Monitoring-Ansätze und Metriken"
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
