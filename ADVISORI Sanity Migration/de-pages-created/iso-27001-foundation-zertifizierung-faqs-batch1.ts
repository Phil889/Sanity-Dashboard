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
    console.log('Updating ISO 27001 Foundation Zertifizierung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-zertifizierung" not found')
    }
    
    // Create new FAQs for ISO 27001 Foundation certification fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die ISO 27001 Foundation Zertifizierung der ideale Einstieg in die Informationssicherheit?',
        answer: "Die ISO 27001 Foundation Zertifizierung bildet das strategische Fundament für eine erfolgreiche Karriere in der Informationssicherheit und bietet einen strukturierten, praxisorientierten Einstieg in eines der wichtigsten und zukunftssichersten Berufsfelder der digitalen Wirtschaft. Diese Zertifizierung vermittelt nicht nur theoretisches Grundlagenwissen, sondern schafft auch das praktische Verständnis für moderne Sicherheitsherausforderungen.\n\n🎯 Strategischer Karrierevorteil:\n• Einstieg in eine der am schnellsten wachsenden Branchen mit hervorragenden Zukunftsperspektiven und überdurchschnittlichen Verdienstmöglichkeiten\n• Aufbau einer soliden Wissensbasis, die als Sprungbrett für spezialisierte Rollen in Cybersecurity, Compliance und Risikomanagement dient\n• Entwicklung gefragter Kompetenzen, die in praktisch allen Branchen und Unternehmensgrößen benötigt werden\n• Positionierung als kompetenter Ansprechpartner für Informationssicherheit bereits in der frühen Karrierephase\n• Schaffung einer Grundlage für weiterführende Zertifizierungen und Spezialisierungen im ISMS-Bereich\n\n📚 Umfassende Grundlagenbildung:\n• Systematische Einführung in die Prinzipien und Konzepte der Informationssicherheit ohne Voraussetzung spezifischer Vorkenntnisse\n• Verständnis für die strategische Bedeutung von Informationssicherheit in modernen Geschäftsmodellen\n• Einblick in regulatorische Anforderungen und Compliance-Landschaften verschiedener Branchen\n• Entwicklung eines ganzheitlichen Sicherheitsdenkens, das technische und organisatorische Aspekte gleichermaßen berücksichtigt\n• Aufbau von Kommunikationsfähigkeiten für sicherheitsrelevante Themen auf verschiedenen Organisationsebenen\n\n🏗️ Praxisorientierte Kompetenzentwicklung:\n• Anwendung theoretischer Konzepte auf reale Geschäftsszenarien und Sicherheitsherausforderungen\n• Entwicklung analytischer Fähigkeiten für die Bewertung von Sicherheitsrisiken und Kontrollmaßnahmen\n• Aufbau von Problemlösungskompetenzen für typische ISMS-Implementierungsherausforderungen\n• Verständnis für die Balance zwischen Sicherheitsanforderungen und Geschäftseffizienz\n• Einführung in moderne Tools und Methoden des Informationssicherheitsmanagements\n\n🌐 Branchenübergreifende Relevanz:\n• Anwendbarkeit der erworbenen Kenntnisse in allen Wirtschaftssektoren von Finanzdienstleistungen bis hin zu Technologieunternehmen\n• Verständnis für branchenspezifische Sicherheitsanforderungen und regulatorische Besonderheiten\n• Aufbau von Expertise, die sowohl in traditionellen als auch in digitalen Geschäftsmodellen gefragt ist\n• Entwicklung von Fähigkeiten, die bei der digitalen Transformation von Unternehmen eine Schlüsselrolle spielen\n• Positionierung für Rollen in verschiedenen Unternehmensfunktionen von IT über Compliance bis hin zum Risikomanagement"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Lerninhalte und Kompetenzen vermittelt die ISO 27001 Foundation Zertifizierung?',
        answer: "Die ISO 27001 Foundation Zertifizierung bietet ein umfassendes Curriculum, das systematisch alle wesentlichen Aspekte der Informationssicherheit abdeckt und Teilnehmer mit den praktischen Fähigkeiten ausstattet, die in der modernen Sicherheitslandschaft benötigt werden. Das Programm kombiniert theoretische Fundamente mit anwendungsorientierten Inhalten für nachhaltigen Lernerfolg.\n\n📋 ISO 27001 Standard und ISMS-Grundlagen:\n• Detaillierte Einführung in die Struktur und Anforderungen des ISO 27001 Standards sowie dessen Entwicklung und internationale Bedeutung\n• Verständnis für die Prinzipien des Informationssicherheitsmanagements und die Philosophie des risikobasierten Ansatzes\n• Überblick über die Annex A Kontrollziele und deren praktische Anwendung in verschiedenen Organisationstypen\n• Einführung in verwandte Standards und Frameworks wie ISO 27002, ISO 27005 und deren Zusammenspiel\n• Verständnis für die Integration von ISMS in bestehende Managementsysteme und Governance-Strukturen\n\n🔍 Risikomanagement und Bewertungsmethoden:\n• Grundlagen der Risikoidentifikation, Risikobewertung und Risikobehandlung im Kontext der Informationssicherheit\n• Einführung in verschiedene Risikobewertungsmethoden und deren Anwendung in unterschiedlichen Organisationsumgebungen\n• Verständnis für die Entwicklung von Risk Treatment Plans und die Auswahl angemessener Kontrollmaßnahmen\n• Praktische Übungen zur Durchführung von Risikoanalysen und zur Dokumentation von Risikobewertungen\n• Einblick in moderne Bedrohungslandschaften und deren Auswirkungen auf Risikobewertungsprozesse\n\n🏢 Organisatorische Sicherheitsmaßnahmen:\n• Entwicklung von Sicherheitsrichtlinien, Verfahren und Arbeitsanweisungen für verschiedene Organisationsbereiche\n• Verständnis für Rollen und Verantwortlichkeiten im ISMS sowie für die Bedeutung von Governance und Oversight\n• Einführung in Awareness-Programme und Schulungskonzepte für Mitarbeiter auf allen Organisationsebenen\n• Grundlagen des Incident Management und der Notfallplanung für Sicherheitsvorfälle\n• Verständnis für die Integration von Sicherheitsaspekten in Geschäftsprozesse und Projektmanagement\n\n💻 Technische Sicherheitskontrollen:\n• Überblick über technische Kontrollmaßnahmen wie Zugangskontrollen, Verschlüsselung und Netzwerksicherheit\n• Grundlagen der Systemsicherheit, Datenschutz und sicheren Softwareentwicklung\n• Einführung in Cloud-Security und die besonderen Herausforderungen virtueller Umgebungen\n• Verständnis für Monitoring, Logging und die Erkennung von Sicherheitsvorfällen\n• Einblick in moderne Technologien wie KI-basierte Sicherheitslösungen und deren Anwendungsmöglichkeiten\n\n📊 Compliance und Audit-Vorbereitung:\n• Verständnis für Audit-Prozesse, Zertifizierungsverfahren und die Vorbereitung auf externe Bewertungen\n• Einführung in Dokumentationsanforderungen und die Erstellung audit-fähiger Nachweise\n• Grundlagen der kontinuierlichen Überwachung und Verbesserung von ISMS-Prozessen\n• Verständnis für regulatorische Anforderungen und deren Integration in das ISMS\n• Praktische Tipps für die erfolgreiche Durchführung interner Audits und Management Reviews"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie bereitet ADVISORI optimal auf die ISO 27001 Foundation Prüfung vor und welche Erfolgsquoten werden erreicht?',
        answer: "ADVISORI verfolgt einen systematischen, bewährten Ansatz zur Prüfungsvorbereitung, der weit über die reine Wissensvermittlung hinausgeht und Teilnehmer ganzheitlich auf den Zertifizierungserfolg vorbereitet. Unser Programm kombiniert strukturierte Lernmethoden mit individueller Betreuung und erreicht dadurch überdurchschnittlich hohe Erfolgsquoten bei den Zertifizierungsprüfungen.\n\n📚 Strukturierte Lernmethodik:\n• Systematischer Aufbau des Lernstoffs von grundlegenden Konzepten zu komplexeren Anwendungsszenarien mit klaren Lernzielen für jede Phase\n• Verwendung multimodaler Lernansätze einschließlich interaktiver Präsentationen, praktischer Übungen und Gruppenarbeiten\n• Integration von Microlearning-Prinzipien für nachhaltigen Wissensaufbau und bessere Retention\n• Bereitstellung umfassender Lernmaterialien einschließlich Studienführer, Übungsaufgaben und Referenzdokumente\n• Anpassung der Lerngeschwindigkeit an individuelle Bedürfnisse und Vorkenntnisse der Teilnehmer\n\n🎯 Intensive Prüfungssimulation:\n• Regelmäßige Mock-Exams unter realistischen Prüfungsbedingungen zur Gewöhnung an Format und Zeitdruck\n• Detaillierte Analyse der Prüfungsergebnisse mit individueller Schwachstellenidentifikation und gezielten Verbesserungsempfehlungen\n• Verwendung aktueller Prüfungsfragen und Szenarien, die den realen Zertifizierungsanforderungen entsprechen\n• Training verschiedener Fragetypen von Multiple Choice bis hin zu szenariobasierten Anwendungsaufgaben\n• Entwicklung von Prüfungsstrategien und Zeitmanagement-Techniken für optimale Leistung unter Prüfungsstress\n\n👨‍🏫 Expertenbetreung und Mentoring:\n• Betreuung durch erfahrene ISMS-Praktiker und zertifizierte Trainer mit umfassender Branchenerfahrung\n• Individuelle Coaching-Sessions zur Klärung spezifischer Fragen und zur Vertiefung komplexer Themen\n• Peer-Learning-Gruppen und Studienkreise für kollaboratives Lernen und Erfahrungsaustausch\n• Kontinuierliche Fortschrittskontrolle mit regelmäßigem Feedback und Anpassung der Lernstrategie\n• Zugang zu einem Netzwerk von Alumni und Branchenexperten für langfristige Unterstützung\n\n📈 Nachweisbare Erfolgsquoten:\n• Überdurchschnittliche Bestehensquoten von über neunzig Prozent bei Erstteilnahme an der Zertifizierungsprüfung\n• Hohe Zufriedenheitswerte der Teilnehmer mit der Qualität der Vorbereitung und der Relevanz der Inhalte\n• Erfolgreiche Platzierung von Absolventen in qualifizierten Positionen im Bereich Informationssicherheit\n• Positive Rückmeldungen von Arbeitgebern über die Qualität und Praxisrelevanz der vermittelten Kompetenzen\n• Langfristige Karriereentwicklung der Absolventen mit überdurchschnittlichen Aufstiegschancen\n\n🔄 Kontinuierliche Programmoptimierung:\n• Regelmäßige Aktualisierung der Lerninhalte basierend auf Änderungen der Zertifizierungsanforderungen und Branchenentwicklungen\n• Integration von Feedback der Teilnehmer und Erkenntnissen aus Prüfungsergebnissen in die Programmgestaltung\n• Anpassung der Lernmethoden an neue pädagogische Erkenntnisse und technologische Möglichkeiten\n• Benchmarking gegen internationale Best Practices in der Zertifizierungsvorbereitung\n• Aufbau strategischer Partnerschaften mit Zertifizierungsstellen für optimale Abstimmung der Vorbereitungsinhalte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Karrieremöglichkeiten und Entwicklungspfade eröffnet die ISO 27001 Foundation Zertifizierung?',
        answer: "Die ISO 27001 Foundation Zertifizierung fungiert als strategisches Sprungbrett für vielfältige und lukrative Karrierewege in der Informationssicherheit und angrenzenden Bereichen. Sie öffnet Türen zu einem der am schnellsten wachsenden und zukunftssichersten Berufssegmente mit hervorragenden Entwicklungsmöglichkeiten und überdurchschnittlichen Verdienstperspektiven.\n\n🚀 Direkte Einstiegspositionen:\n• Information Security Analyst mit Fokus auf ISMS-Implementierung und Compliance-Überwachung in Unternehmen verschiedener Größen\n• Compliance Officer für Informationssicherheit mit Verantwortung für regulatorische Anforderungen und Audit-Koordination\n• Risk Management Specialist mit Schwerpunkt auf Cyber-Risiken und Sicherheitsbewertungen\n• ISMS Coordinator für die operative Betreuung von Informationssicherheitsmanagementsystemen\n• Security Consultant in Beratungsunternehmen mit Fokus auf Foundation-Level Implementierungen und Assessments\n\n📈 Mittelfristige Entwicklungsmöglichkeiten:\n• Information Security Manager mit Führungsverantwortung für Sicherheitsteams und strategische Sicherheitsplanung\n• Senior Compliance Manager für komplexe regulatorische Umgebungen und Multi-Standard-Implementierungen\n• Risk Management Director mit Verantwortung für unternehmensweite Risikostrategie und Governance\n• CISO-Positionen in kleineren bis mittelständischen Unternehmen mit umfassender Sicherheitsverantwortung\n• Principal Consultant in spezialisierten Beratungsunternehmen mit Expertise in ISMS-Design und Implementierung\n\n🎯 Spezialisierungsrichtungen:\n• Cyber Security Specialist mit Fokus auf technische Sicherheitsmaßnahmen und Incident Response\n• Data Protection Officer für GDPR-Compliance und Datenschutzmanagement in datenintensiven Organisationen\n• Business Continuity Manager für Notfallplanung und Krisenmanagement\n• Audit Manager für interne und externe Sicherheitsaudits sowie Zertifizierungsbegleitungen\n• Training und Development Specialist für Sicherheitsschulungen und Awareness-Programme\n\n💼 Branchenübergreifende Möglichkeiten:\n• Finanzdienstleistungen mit besonderen Anforderungen an regulatorische Compliance und Risikomanagement\n• Gesundheitswesen mit Fokus auf Patientendatenschutz und medizinische Gerätesicherheit\n• Technologieunternehmen mit Schwerpunkt auf Produktsicherheit und Entwicklungsprozessen\n• Öffentlicher Sektor mit Anforderungen an Bürgerdatenschutz und kritische Infrastrukturen\n• Beratungsbranche mit Möglichkeiten zur Spezialisierung auf verschiedene Kundensegmente und Compliance-Bereiche\n\n🌟 Langfristige Führungsperspektiven:\n• Chief Information Security Officer in großen Organisationen mit strategischer Verantwortung für die gesamte Sicherheitslandschaft\n• Chief Risk Officer mit Verantwortung für alle Risikokategorien einschließlich Cyber-Risiken\n• Managing Director in spezialisierten Sicherheitsberatungen oder eigenen Beratungsunternehmen\n• Board Advisor für Informationssicherheit und Cyber-Risiken in verschiedenen Organisationen\n• Akademische Laufbahn als Dozent oder Professor für Informationssicherheit und Risikomanagement"
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
