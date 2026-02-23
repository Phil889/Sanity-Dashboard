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
    console.log('Updating ISO 27001 Foundation Zertifizierung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-zertifizierung" not found')
    }
    
    // Create new FAQs for ISO 27001 Foundation certification practical aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Voraussetzungen und Vorkenntnisse sind für die ISO 27001 Foundation Zertifizierung erforderlich?',
        answer: "Die ISO 27001 Foundation Zertifizierung ist bewusst als Einstiegszertifizierung konzipiert und erfordert keine spezifischen Vorkenntnisse oder formalen Qualifikationen im Bereich Informationssicherheit. Diese Zugänglichkeit macht sie zum idealen Startpunkt für Karrierewechsler, Berufseinsteiger und Fachkräfte aus anderen Bereichen, die sich in der Informationssicherheit etablieren möchten.\n\n🎓 Bildungshintergrund und Erfahrung:\n• Keine spezifische Ausbildung oder Studienrichtung erforderlich, da das Programm alle notwendigen Grundlagen systematisch vermittelt\n• Berufserfahrung in verwandten Bereichen wie IT, Compliance oder Projektmanagement ist hilfreich, aber nicht zwingend notwendig\n• Grundlegendes Verständnis für Geschäftsprozesse und organisatorische Strukturen erleichtert das Lernen\n• Offenheit für analytisches Denken und systematische Herangehensweisen an komplexe Problemstellungen\n• Interesse an der Schnittstelle zwischen Technologie, Recht und Geschäftsstrategie\n\n💻 Technische Grundkenntnisse:\n• Grundlegende Computerkenntnisse und Vertrautheit mit gängigen Office-Anwendungen für die Bearbeitung von Übungen und Dokumentationen\n• Verständnis für grundlegende IT-Konzepte wie Netzwerke, Datenbanken und Systemarchitekturen ist vorteilhaft\n• Keine Programmierkenntnisse oder tiefgreifende technische Expertise erforderlich\n• Bereitschaft, sich mit neuen Technologien und digitalen Lernplattformen auseinanderzusetzen\n• Grundlegendes Verständnis für Datenschutz und Informationsverarbeitung im Geschäftskontext\n\n🧠 Persönliche Eigenschaften und Fähigkeiten:\n• Analytisches Denkvermögen und die Fähigkeit, komplexe Zusammenhänge zu verstehen und zu strukturieren\n• Kommunikationsfähigkeiten für die Interaktion mit verschiedenen Stakeholdern und Organisationsebenen\n• Detailorientierung und systematische Arbeitsweise für die Bearbeitung von Compliance-Anforderungen\n• Lernbereitschaft und Motivation für kontinuierliche Weiterbildung in einem sich schnell entwickelnden Feld\n• Teamfähigkeit und Kooperationsbereitschaft für Gruppenarbeiten und Projektübungen\n\n📚 Sprachliche Anforderungen:\n• Gute Deutschkenntnisse für die Teilnahme an deutschsprachigen Kursen und die Bearbeitung von Materialien\n• Grundlegende Englischkenntnisse sind vorteilhaft, da viele Standards und Fachbegriffe international verwendet werden\n• Bereitschaft, sich mit Fachterminologie und spezifischen Begriffen der Informationssicherheit vertraut zu machen\n• Fähigkeit zur schriftlichen Kommunikation für Dokumentationsaufgaben und Prüfungsvorbereitung\n• Verständnis für rechtliche und regulatorische Sprache im Compliance-Kontext\n\n⏰ Zeitliche Verfügbarkeit und Engagement:\n• Bereitschaft zur regelmäßigen Teilnahme an Schulungen und zur kontinuierlichen Nachbereitung\n• Zeitliche Flexibilität für Selbststudium und Prüfungsvorbereitung neben beruflichen Verpflichtungen\n• Engagement für praktische Übungen und die Anwendung erlernter Konzepte in realen Szenarien\n• Motivation für langfristige Karriereentwicklung und kontinuierliche Kompetenzentwicklung\n• Bereitschaft zur Teilnahme an Netzwerkaktivitäten und zum Aufbau professioneller Beziehungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie ist die ISO 27001 Foundation Prüfung strukturiert und welche Prüfungsformate werden verwendet?',
        answer: "Die ISO 27001 Foundation Prüfung folgt einem standardisierten, international anerkannten Format, das darauf ausgelegt ist, sowohl theoretisches Verständnis als auch praktische Anwendungsfähigkeiten zu bewerten. Die Prüfungsstruktur ist sorgfältig konzipiert, um eine faire und umfassende Bewertung der erworbenen Kompetenzen zu gewährleisten.\n\n📋 Prüfungsformat und Struktur:\n• Multiple-Choice-Format mit sechzig Fragen, die verschiedene Aspekte der ISO 27001 und des ISMS abdecken\n• Prüfungsdauer von neunzig Minuten, die ausreichend Zeit für sorgfältige Bearbeitung und Überprüfung bietet\n• Geschlossenes Buch Format ohne Hilfsmittel, um das verinnerlichte Wissen zu testen\n• Computerbasierte Prüfung mit sofortiger Ergebnisanzeige nach Abschluss\n• Internationale Standardisierung gewährleistet Vergleichbarkeit und Anerkennung weltweit\n\n🎯 Inhaltliche Schwerpunkte und Gewichtung:\n• Grundlagen der Informationssicherheit und ISMS-Prinzipien mit etwa dreißig Prozent der Fragen\n• ISO 27001 Standard-Anforderungen und Implementierungsaspekte mit circa fünfundzwanzig Prozent\n• Risikomanagement-Konzepte und Bewertungsmethoden mit ungefähr zwanzig Prozent\n• Kontrollmaßnahmen und Sicherheitskontrollen mit etwa fünfzehn Prozent der Prüfungsfragen\n• Compliance, Audit und kontinuierliche Verbesserung mit den verbleibenden zehn Prozent\n\n📊 Bewertungskriterien und Bestehensgrenze:\n• Mindestpunktzahl von fünfundsechzig Prozent für das Bestehen der Prüfung\n• Punktevergabe erfolgt ausschließlich für vollständig korrekte Antworten ohne Teilpunkte\n• Keine negativen Punkte für falsche Antworten, wodurch strategisches Raten möglich ist\n• Detailliertes Ergebnisprotokoll zeigt Leistung in verschiedenen Themenbereichen\n• Sofortige Benachrichtigung über Bestehen oder Nichtbestehen mit Empfehlungen für weitere Schritte\n\n🔍 Fragetypen und Schwierigkeitsgrade:\n• Faktenwissen-Fragen zu grundlegenden Konzepten und Definitionen der Informationssicherheit\n• Verständnisfragen zur Anwendung von ISMS-Prinzipien in verschiedenen Organisationskontexten\n• Szenario-basierte Fragen, die praktische Problemlösungsfähigkeiten in realistischen Situationen testen\n• Analysefragen zur Bewertung von Risiken und zur Auswahl angemessener Kontrollmaßnahmen\n• Synthesefragen zur Integration verschiedener ISMS-Komponenten in ganzheitliche Lösungsansätze\n\n📅 Prüfungsorganisation und Durchführung:\n• Flexible Terminplanung mit regelmäßigen Prüfungsterminen an autorisierten Prüfungszentren\n• Online-Proctoring-Optionen für ortsunabhängige Prüfungsteilnahme unter kontrollierten Bedingungen\n• Mehrsprachige Prüfungsoptionen je nach Verfügbarkeit und Zertifizierungsstelle\n• Wiederholungsmöglichkeiten bei Nichtbestehen mit angemessenen Wartezeiten zwischen Versuchen\n• Barrierefreie Prüfungsoptionen für Teilnehmer mit besonderen Bedürfnissen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche praktischen Übungen und Fallstudien sind Teil des ISO 27001 Foundation Programms?',
        answer: "Das ISO 27001 Foundation Programm bei ADVISORI zeichnet sich durch einen stark praxisorientierten Ansatz aus, der theoretisches Wissen durch realitätsnahe Übungen und authentische Fallstudien vertieft. Diese praktischen Elemente sind sorgfältig darauf abgestimmt, Teilnehmer auf die Herausforderungen der realen Arbeitswelt vorzubereiten und nachhaltiges Lernen zu fördern.\n\n🏢 Branchenspezifische Fallstudien:\n• Finanzdienstleistungsunternehmen mit komplexen regulatorischen Anforderungen und hohen Sicherheitsstandards\n• Technologieunternehmen mit agilen Entwicklungsprozessen und Cloud-basierten Infrastrukturen\n• Gesundheitswesen mit besonderen Datenschutzanforderungen und kritischen Systemverfügbarkeiten\n• Produktionsunternehmen mit industriellen Steuerungssystemen und Supply Chain Sicherheit\n• Öffentliche Verwaltung mit Bürgerdatenschutz und kritischen Infrastrukturanforderungen\n\n🔍 Risikobewertungs-Workshops:\n• Systematische Durchführung von Risikoidentifikation in verschiedenen Organisationsszenarien\n• Anwendung unterschiedlicher Risikobewertungsmethoden und Vergleich ihrer Ergebnisse\n• Entwicklung von Risk Treatment Plans mit Priorisierung und Ressourcenallokation\n• Simulation von Risikokommunikation mit verschiedenen Stakeholder-Gruppen\n• Übungen zur Dokumentation und Nachverfolgung von Risikomanagement-Entscheidungen\n\n📋 ISMS-Implementierungs-Simulationen:\n• Schritt-für-Schritt Durchführung einer ISMS-Implementierung in einem fiktiven Unternehmen\n• Entwicklung von Sicherheitsrichtlinien und Verfahren für spezifische Organisationskontexte\n• Simulation von Stakeholder-Workshops und Change Management Prozessen\n• Übungen zur Integration von ISMS in bestehende Geschäftsprozesse und Managementsysteme\n• Praktische Anwendung von Projektmanagement-Prinzipien in ISMS-Projekten\n\n🎭 Rollenspiele und Kommunikationsübungen:\n• Simulation von Management-Präsentationen zur ISMS-Einführung mit Budgetrechtfertigung\n• Übungen zur Mitarbeiterschulung und Awareness-Kampagnen-Entwicklung\n• Rollenspiele für Incident Response und Krisenmanagement-Situationen\n• Simulation von Audit-Gesprächen und Zertifizierungsvorbereitungen\n• Übungen zur interdisziplinären Zusammenarbeit zwischen IT, Legal und Business-Bereichen\n\n🔧 Tool-basierte Praktische Anwendungen:\n• Verwendung von Risikomanagement-Software für systematische Risikobewertungen\n• Anwendung von Dokumentenmanagement-Systemen für ISMS-Dokumentation\n• Übungen mit Compliance-Management-Tools für Anforderungsverfolgung\n• Simulation von Monitoring und Reporting-Dashboards für ISMS-Kennzahlen\n• Praktische Anwendung von Audit-Management-Software für interne Bewertungen\n\n📊 Analyse und Bewertungsübungen:\n• Bewertung bestehender Sicherheitsmaßnahmen in realen Organisationsszenarien\n• Gap-Analyse-Übungen zur Identifikation von Verbesserungspotenzialen\n• Benchmarking-Aktivitäten zum Vergleich verschiedener ISMS-Ansätze\n• Kosten-Nutzen-Analysen für Sicherheitsinvestitionen und Kontrollmaßnahmen\n• Übungen zur Messung und Bewertung von ISMS-Effektivität und Reifegrad"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie unterstützt ADVISORI Absolventen bei der weiteren Karriereentwicklung nach der Foundation Zertifizierung?',
        answer: "ADVISORI versteht die ISO 27001 Foundation Zertifizierung als ersten Schritt einer langfristigen Karriereentwicklung und bietet umfassende Unterstützung, die weit über die reine Zertifizierung hinausgeht. Unser ganzheitlicher Ansatz zur Karriereförderung kombiniert strukturierte Weiterbildungspfade mit praktischen Karriereservices und langfristigem Mentoring.\n\n🎯 Strukturierte Weiterbildungspfade:\n• Klare Roadmaps für die Entwicklung von Foundation zu Practitioner und Lead Auditor Zertifizierungen\n• Spezialisierungsoptionen in Bereichen wie Cyber Security, Data Protection und Risk Management\n• Integration mit anderen Standards wie ISO 22301, ISO 20000 und NIST Framework\n• Branchenspezifische Vertiefungsprogramme für Finanzdienstleistungen, Gesundheitswesen und Technologie\n• Kontinuierliche Aktualisierung der Lernpfade basierend auf Marktentwicklungen und Branchentrends\n\n💼 Praktische Karriereservices:\n• Professionelle Überarbeitung von Lebensläufen mit Fokus auf Informationssicherheits-Kompetenzen\n• Vorbereitung auf Vorstellungsgespräche mit branchenspezifischen Fragen und Szenarien\n• Networking-Events und Branchentreffen für den Aufbau professioneller Kontakte\n• Job-Matching-Services mit Partnern aus der Industrie und Vermittlung qualifizierter Positionen\n• Gehaltsberatung und Verhandlungsstrategien für Positionen im Informationssicherheitsbereich\n\n🤝 Alumni-Netzwerk und Community:\n• Zugang zu einem aktiven Alumni-Netzwerk mit regelmäßigen Treffen und Erfahrungsaustausch\n• Online-Community-Plattform für kontinuierliche Diskussionen und Wissensaustausch\n• Mentoring-Programme mit erfahrenen Praktikern aus verschiedenen Branchen und Karrierestufen\n• Peer-Learning-Gruppen für gemeinsame Projektarbeit und Problemlösung\n• Exklusive Einladungen zu Fachkonferenzen, Workshops und Branchenveranstaltungen\n\n📈 Kontinuierliche Kompetenzentwicklung:\n• Regelmäßige Webinare und Updates zu aktuellen Entwicklungen in der Informationssicherheit\n• Zugang zu aktuellen Forschungsergebnissen und Best Practice Dokumentationen\n• Möglichkeiten zur Teilnahme an Forschungsprojekten und Fallstudienentwicklung\n• Gastvorträge von Branchenexperten und Thought Leaders\n• Zugang zu Online-Lernplattformen mit erweiterten Kursen und Spezialisierungen\n\n🏆 Anerkennung und Zertifizierung:\n• Unterstützung bei der Beantragung und Aufrechterhaltung professioneller Mitgliedschaften\n• Hilfe bei der Dokumentation von Continuing Professional Education Credits\n• Empfehlungsschreiben und Referenzen für Karrierefortschritte und Bewerbungen\n• Anerkennung herausragender Leistungen durch Awards und Auszeichnungen\n• Möglichkeiten zur Mitwirkung als Gastdozent oder Mentor für nachfolgende Kohorten\n\n🌐 Internationale Karrieremöglichkeiten:\n• Unterstützung bei der Anerkennung von Zertifizierungen in verschiedenen Ländern\n• Informationen über internationale Karrieremöglichkeiten und Marktbedingungen\n• Kontakte zu internationalen Partnern und Schwesterorganisationen\n• Unterstützung bei der Vorbereitung auf internationale Standards und Regulierungen\n• Möglichkeiten für Auslandseinsätze und internationale Projektmitarbeit"
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
