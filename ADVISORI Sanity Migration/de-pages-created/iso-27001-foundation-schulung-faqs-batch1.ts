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
    console.log('Updating ISO 27001 Foundation Schulung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-schulung" not found')
    }
    
    // Create new FAQs for ISO 27001 Foundation training fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was macht eine ISO 27001 Foundation Schulung so wertvoll für Organisationen ohne Vorkenntnisse?',
        answer: "Eine ISO 27001 Foundation Schulung bildet das unverzichtbare Fundament für jede erfolgreiche Informationssicherheitsstrategie und schafft die notwendige Basis für eine nachhaltige Sicherheitskultur. Sie geht weit über die reine Wissensvermittlung hinaus und entwickelt das grundlegende Verständnis und Bewusstsein, das für eine effektive Umsetzung von Informationssicherheit erforderlich ist.\n\n🎯 Strategische Grundlagenvermittlung:\n• Systematische Einführung in die Kernprinzipien der Informationssicherheit ohne Voraussetzung von Fachkenntnissen\n• Entwicklung eines einheitlichen Verständnisses für die Bedeutung und den Wert von Informationssicherheit im Unternehmenskontext\n• Schaffung einer gemeinsamen Terminologie und Kommunikationsbasis für alle Organisationsebenen\n• Aufbau des Bewusstseins für die Rolle jedes Einzelnen im Gesamtsystem der Informationssicherheit\n• Vermittlung der Business-Relevanz und des strategischen Werts von ISO 27001 für die Organisation\n\n📚 Umfassende Kompetenzentwicklung:\n• Grundlegendes Verständnis für Risikomanagement und dessen praktische Anwendung im Arbeitsalltag\n• Einführung in die Struktur und Logik von Managementsystemen am Beispiel von ISO 27001\n• Entwicklung der Fähigkeit, Sicherheitsrisiken zu erkennen und angemessen darauf zu reagieren\n• Verständnis für die Zusammenhänge zwischen verschiedenen Sicherheitsmaßnahmen und deren Wirksamkeit\n• Aufbau von Grundkompetenzen für die Teilnahme an Sicherheitsprozessen und deren kontinuierlicher Verbesserung\n\n🛡️ Praktische Anwendungsorientierung:\n• Vermittlung konkreter Handlungskompetenzen für den sicheren Umgang mit Informationen und IT-Systemen\n• Entwicklung des Bewusstseins für alltägliche Sicherheitsbedrohungen und deren Vermeidung\n• Training in der Erkennung und Meldung von Sicherheitsvorfällen und verdächtigen Aktivitäten\n• Aufbau von Routinen für sicherheitsbewusstes Verhalten in verschiedenen Arbeitssituationen\n• Praktische Übungen zur Anwendung von Sicherheitsrichtlinien und Verfahren\n\n💡 Kultureller Wandel und Nachhaltigkeit:\n• Schaffung einer sicherheitsbewussten Unternehmenskultur, die über technische Maßnahmen hinausgeht\n• Entwicklung von Multiplikatoren, die Sicherheitsbewusstsein in ihre Teams und Bereiche tragen\n• Aufbau einer lernenden Organisation, die sich kontinuierlich an neue Bedrohungen anpassen kann\n• Stärkung des Vertrauens und der Kompetenz im Umgang mit Informationssicherheitsthemen\n• Vorbereitung der Organisation auf weiterführende Implementierungsschritte und Zertifizierungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Lernziele und Kompetenzen werden in einer Foundation Schulung entwickelt?',
        answer: "Eine strukturierte ISO 27001 Foundation Schulung entwickelt systematisch die Grundkompetenzen, die für ein effektives Verständnis und die praktische Anwendung von Informationssicherheit erforderlich sind. Die Lernziele sind dabei so gestaltet, dass sie eine solide Basis für alle weiteren Schritte in der Informationssicherheits-Journey schaffen.\n\n🎓 Grundlegendes Verständnis und Wissen:\n• Umfassendes Verständnis der Grundprinzipien der Informationssicherheit und deren Bedeutung für moderne Organisationen\n• Kenntnisse über die Struktur, den Aufbau und die Anforderungen des ISO 27001 Standards\n• Verständnis für die Konzepte von Vertraulichkeit, Integrität und Verfügbarkeit als Grundpfeiler der Informationssicherheit\n• Einblick in die rechtlichen und regulatorischen Rahmenbedingungen der Informationssicherheit\n• Grundlegendes Wissen über verschiedene Arten von Sicherheitsbedrohungen und deren potenzielle Auswirkungen\n\n🔍 Analytische und Bewertungskompetenzen:\n• Fähigkeit zur Identifikation und Bewertung von Informationssicherheitsrisiken im eigenen Arbeitsbereich\n• Kompetenz in der Anwendung grundlegender Risikobewertungsmethoden und deren praktischer Umsetzung\n• Verständnis für die Wirksamkeit verschiedener Sicherheitsmaßnahmen und deren angemessene Auswahl\n• Fähigkeit zur Bewertung der Angemessenheit von Sicherheitskontrollen in verschiedenen Kontexten\n• Entwicklung eines kritischen Bewusstseins für Sicherheitslücken und Verbesserungsmöglichkeiten\n\n🛠️ Praktische Anwendungskompetenzen:\n• Sichere Handhabung von Informationen und IT-Systemen entsprechend organisatorischer Richtlinien\n• Kompetenz in der Erkennung und angemessenen Reaktion auf Sicherheitsvorfälle und verdächtige Aktivitäten\n• Fähigkeit zur Umsetzung von Sicherheitsmaßnahmen und Verfahren im täglichen Arbeitsablauf\n• Praktische Fertigkeiten in der Dokumentation und Berichterstattung von sicherheitsrelevanten Ereignissen\n• Kompetenz in der Zusammenarbeit mit Sicherheitsverantwortlichen und anderen Stakeholdern\n\n📢 Kommunikations- und Führungskompetenzen:\n• Fähigkeit zur verständlichen Kommunikation von Sicherheitsthemen an verschiedene Zielgruppen\n• Kompetenz in der Sensibilisierung von Kollegen und Mitarbeitern für Informationssicherheitsthemen\n• Entwicklung von Argumentationsfähigkeiten für die Bedeutung und den Nutzen von Sicherheitsmaßnahmen\n• Fähigkeit zur konstruktiven Teilnahme an Sicherheitsdiskussionen und Verbesserungsprozessen\n• Aufbau von Multiplikator-Kompetenzen für die Weitergabe von Sicherheitswissen in der Organisation\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Verständnis für die Prinzipien der kontinuierlichen Verbesserung in Managementsystemen\n• Fähigkeit zur Identifikation von Verbesserungsmöglichkeiten in bestehenden Sicherheitsprozessen\n• Kompetenz in der Anpassung an neue Bedrohungen und veränderte Rahmenbedingungen\n• Entwicklung einer lernorientierten Haltung gegenüber Informationssicherheitsthemen\n• Aufbau der Bereitschaft zur kontinuierlichen Weiterbildung und Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie unterscheidet sich eine Foundation Schulung von anderen ISO 27001 Trainingsformaten?',
        answer: "Eine ISO 27001 Foundation Schulung nimmt eine einzigartige Position im Spektrum der verfügbaren Trainingsformate ein und ist speziell darauf ausgelegt, eine solide Basis für alle weiteren Lernschritte zu schaffen. Sie unterscheidet sich fundamental von anderen Schulungsformaten durch ihren systematischen Aufbau und ihre umfassende Zugänglichkeit.\n\n🎯 Zielgruppe und Zugänglichkeit:\n• Foundation Schulungen sind explizit für Teilnehmer ohne Vorkenntnisse konzipiert und erfordern keine fachlichen Voraussetzungen\n• Sie richten sich an alle Organisationsebenen und Funktionsbereiche, nicht nur an Sicherheitsexperten\n• Der Fokus liegt auf der Schaffung eines gemeinsamen Verständnisses und einer einheitlichen Wissensbasis\n• Komplexe Fachthemen werden verständlich und praxisnah aufbereitet, ohne die Tiefe zu verlieren\n• Die Schulung ist als Einstiegspunkt für eine systematische Kompetenzentwicklung konzipiert\n\n📚 Inhaltliche Ausrichtung und Tiefe:\n• Systematische Einführung in Grundprinzipien statt Vertiefung spezieller Fachbereiche\n• Breite Abdeckung aller relevanten Themenbereiche mit angemessener Detailtiefe für Einsteiger\n• Fokus auf Verständnis und Bewusstsein statt auf technische Implementierungsdetails\n• Integration von theoretischem Wissen mit praktischen Anwendungsbeispielen aus dem Arbeitsalltag\n• Aufbau einer soliden Basis für weiterführende Spezialisierungen und Vertiefungen\n\n🎓 Didaktischer Ansatz und Methodik:\n• Verwendung interaktiver und engaging Lernmethoden, die für verschiedene Lerntypen geeignet sind\n• Schritt-für-Schritt Aufbau des Wissens ohne Überforderung durch zu komplexe Konzepte\n• Verwendung von Analogien und praktischen Beispielen zur Veranschaulichung abstrakter Konzepte\n• Regelmäßige Verständniskontrollen und Feedback-Schleifen zur Sicherstellung des Lernerfolgs\n• Kombination verschiedener Lernformate für optimale Wissensvermittlung und Retention\n\n🔄 Abgrenzung zu anderen Trainingsformaten:\n• Implementation Trainings fokussieren auf praktische Umsetzungsschritte und setzen Grundkenntnisse voraus\n• Auditor Schulungen entwickeln spezialisierte Bewertungs- und Prüfungskompetenzen für Experten\n• Management Briefings konzentrieren sich auf strategische Aspekte und Entscheidungsgrundlagen\n• Spezialist Trainings vertiefen einzelne Fachbereiche wie Risikomanagement oder Incident Response\n• Foundation Schulungen schaffen die notwendige Basis für alle diese weiterführenden Formate\n\n💡 Langfristige Lernstrategie und Entwicklungspfade:\n• Foundation Schulungen sind als erster Schritt in einem strukturierten Lernpfad konzipiert\n• Sie bereiten optimal auf weiterführende Zertifizierungen und Spezialisierungen vor\n• Der modulare Aufbau ermöglicht eine bedarfsgerechte Fortsetzung der Kompetenzentwicklung\n• Sie schaffen die Voraussetzungen für eine erfolgreiche Teilnahme an komplexeren Trainingsformaten\n• Die erworbenen Grundkompetenzen bilden das Fundament für eine lebenslange Lernreise in der Informationssicherheit\n\n🌟 Nachhaltigkeit und Anwendbarkeit:\n• Sofortige Anwendbarkeit des Gelernten im täglichen Arbeitskontext ohne zusätzliche Voraussetzungen\n• Aufbau einer nachhaltigen Sicherheitskultur durch breite Wissensvermittlung in der Organisation\n• Schaffung von Multiplikatoren, die ihr Wissen an andere weitergeben können\n• Entwicklung einer gemeinsamen Sprache und eines einheitlichen Verständnisses für Sicherheitsthemen\n• Vorbereitung der Organisation auf komplexere Implementierungs- und Zertifizierungsprojekte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche praktischen Vorteile bringt eine Foundation Schulung für die tägliche Arbeit?',
        answer: "Eine ISO 27001 Foundation Schulung transformiert die tägliche Arbeitsweise und schafft konkrete, messbare Verbesserungen in der Art und Weise, wie Mitarbeiter mit Informationen und Sicherheitsthemen umgehen. Die praktischen Vorteile manifestieren sich unmittelbar im Arbeitsalltag und tragen zu einer spürbar sichereren und effizienteren Arbeitsumgebung bei.\n\n💼 Verbesserte Arbeitseffizienz und Sicherheit:\n• Entwicklung von Routinen für den sicheren Umgang mit sensiblen Informationen und Daten\n• Reduzierung von Sicherheitsvorfällen durch erhöhtes Bewusstsein und präventive Maßnahmen\n• Effizientere Entscheidungsfindung bei sicherheitsrelevanten Fragestellungen im Arbeitsalltag\n• Verbesserte Zusammenarbeit durch gemeinsames Verständnis von Sicherheitsanforderungen und Prozessen\n• Reduzierung von Unsicherheiten und Stress im Umgang mit Compliance-Anforderungen\n\n🔍 Erhöhte Problemlösungskompetenz:\n• Fähigkeit zur schnellen Identifikation und Bewertung von Sicherheitsrisiken in verschiedenen Arbeitssituationen\n• Kompetenz in der Entwicklung angemessener Lösungsansätze für alltägliche Sicherheitsherausforderungen\n• Verbessertes Verständnis für die Auswirkungen eigener Handlungen auf die Gesamtsicherheit der Organisation\n• Erhöhte Selbstständigkeit bei der Bewältigung sicherheitsrelevanter Aufgaben und Entscheidungen\n• Entwicklung eines proaktiven Ansatzes zur Vermeidung von Sicherheitsproblemen\n\n📱 Praktische Anwendung im digitalen Arbeitsalltag:\n• Sicherer Umgang mit E-Mails, Cloud-Services und anderen digitalen Arbeitstools\n• Kompetenz in der Erkennung und Vermeidung von Phishing-Angriffen und anderen Cyber-Bedrohungen\n• Verständnis für angemessene Passwort-Strategien und Authentifizierungsverfahren\n• Sichere Nutzung von mobilen Geräten und Remote-Arbeitsplätzen\n• Bewusstsein für Datenschutz und angemessene Informationshandhabung in verschiedenen Kontexten\n\n🤝 Verbesserte Kommunikation und Zusammenarbeit:\n• Fähigkeit zur verständlichen Kommunikation von Sicherheitsbedenken und Verbesserungsvorschlägen\n• Kompetenz in der konstruktiven Zusammenarbeit mit IT-Sicherheitsverantwortlichen und anderen Stakeholdern\n• Entwicklung einer gemeinsamen Sprache für Sicherheitsthemen innerhalb der Organisation\n• Erhöhte Bereitschaft zur Meldung von Sicherheitsvorfällen und zur Teilnahme an Verbesserungsprozessen\n• Stärkung des Vertrauens in die eigenen Fähigkeiten im Umgang mit Sicherheitsthemen\n\n🎯 Karriereentwicklung und persönliche Weiterbildung:\n• Aufbau einer wertvollen Zusatzqualifikation, die in allen Branchen und Funktionen relevant ist\n• Vorbereitung auf weiterführende Zertifizierungen und Spezialisierungen im Bereich Informationssicherheit\n• Erhöhung der eigenen Marktfähigkeit durch gefragte Kompetenzen in einem wachsenden Fachbereich\n• Entwicklung von Führungskompetenzen durch die Fähigkeit zur Sensibilisierung und Schulung anderer\n• Aufbau eines Netzwerks von Fachkollegen und Experten im Bereich Informationssicherheit\n\n🌟 Organisatorische und kulturelle Vorteile:\n• Beitrag zur Entwicklung einer sicherheitsbewussten Unternehmenskultur\n• Reduzierung von Compliance-Risiken und potentiellen Sanktionen durch verbessertes Sicherheitsverhalten\n• Stärkung des Vertrauens von Kunden und Partnern durch demonstrierte Sicherheitskompetenz\n• Verbesserung der Reputation der Organisation als verantwortungsvoller Umgang mit Informationen\n• Schaffung einer Basis für erfolgreiche Zertifizierungsprojekte und Compliance-Initiativen"
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
