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
    console.log('Updating ISO 27001 Schulung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-schulung" not found')
    }
    
    // Create new FAQs for ISO 27001 implementation and management training
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie bereitet ADVISORI Teilnehmer optimal auf die praktische ISO 27001 Implementierung vor?',
        answer: "ADVISORI verfolgt einen praxisorientierten Ansatz, der Teilnehmer systematisch auf die realen Herausforderungen einer ISO 27001 Implementierung vorbereitet. Unsere Schulungen kombinieren theoretisches Fundament mit praktischen Übungen und realen Implementierungsszenarien.\n\n🔧 Hands-on Implementation Workshops:\n• Praktische Durchführung einer kompletten ISMS-Implementierung anhand realer Unternehmensszenarien\n• Schritt-für-Schritt Anleitung durch alle Phasen der Implementierung von der Planung bis zur Zertifizierung\n• Verwendung echter Dokumentationsvorlagen und Tools, die direkt im Unternehmen eingesetzt werden können\n• Simulation typischer Implementierungsherausforderungen und Entwicklung von Lösungsstrategien\n• Praktische Übungen zur Stakeholder-Kommunikation und Change Management\n\n📋 Strukturierte Projektmethodik:\n• Vermittlung bewährter Projektmanagement-Ansätze speziell für ISO 27001 Implementierungen\n• Entwicklung realistischer Projektpläne mit Meilensteinen, Ressourcenplanung und Risikomanagement\n• Training in der Anwendung von ISMS-spezifischen Tools und Methoden\n• Praktische Übungen zur Projektsteuerung und Fortschrittskontrolle\n• Integration von Lessons Learned aus realen Implementierungsprojekten\n\n🎯 Rollenspezifische Vorbereitung:\n• Maßgeschneiderte Schulungsinhalte für verschiedene Rollen im Implementierungsteam\n• ISMS-Manager Training mit Fokus auf strategische Planung und Governance\n• Technische Workshops für IT-Teams zur Implementierung von Sicherheitskontrollen\n• Management Briefings zur Vorbereitung auf Führungsverantwortlichkeiten\n• Schulung von internen Multiplikatoren für die organisationsweite Kommunikation\n\n💡 Praxistransfer und Anwendung:\n• Entwicklung konkreter Implementierungspläne für das eigene Unternehmen während der Schulung\n• Mentoring und Coaching bei der Anwendung des Gelernten im realen Arbeitsumfeld\n• Follow-up Sessions zur Unterstützung bei auftretenden Implementierungsherausforderungen\n• Bereitstellung von Checklisten, Templates und Best Practice Guides\n• Aufbau eines Netzwerks mit anderen Implementierungsverantwortlichen für kontinuierlichen Erfahrungsaustausch\n\n🔍 Qualitätssicherung und Erfolgsmessung:\n• Kontinuierliche Bewertung des Lernfortschritts durch praktische Übungen und Simulationen\n• Feedback-Schleifen zur Anpassung der Schulungsinhalte an individuelle Bedürfnisse\n• Zertifizierung der erworbenen Kompetenzen durch praktische Prüfungen\n• Langfristige Begleitung zur Sicherstellung des Implementierungserfolgs\n• Messung der Schulungseffektivität anhand realer Implementierungsergebnisse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Kompetenzen entwickeln Teilnehmer in ADVISORI ISO 27001 Management-Schulungen?',
        answer: "ADVISORI ISO 27001 Management-Schulungen entwickeln umfassende Führungskompetenzen, die für die strategische Steuerung und operative Exzellenz eines Informationssicherheits-Managementsystems erforderlich sind. Unsere Programme schaffen sowohl fachliche Expertise als auch praktische Managementfähigkeiten.\n\n🎯 Strategische Führungskompetenzen:\n• Entwicklung einer umfassenden ISMS-Vision und deren Integration in die Unternehmensstrategie\n• Fähigkeit zur Bewertung und Kommunikation des Business Case für Informationssicherheit\n• Kompetenz in der strategischen Risikobewertung und der Entwicklung angemessener Behandlungsstrategien\n• Leadership-Fähigkeiten für die Führung von ISMS-Teams und die Motivation von Stakeholdern\n• Expertise in der Integration von ISO 27001 mit anderen Managementsystemen und Compliance-Anforderungen\n\n📊 Operative Managementfähigkeiten:\n• Kompetenz in der Planung, Steuerung und Überwachung von ISMS-Prozessen\n• Fähigkeit zur Entwicklung und Implementierung effektiver Governance-Strukturen\n• Expertise in der Gestaltung von Berichts- und Kommunikationssystemen\n• Kompetenz im Management von Sicherheitsvorfällen und Krisenmanagement\n• Fähigkeit zur kontinuierlichen Verbesserung und Optimierung des ISMS\n\n🔄 Change Management und Organisationsentwicklung:\n• Kompetenz in der Gestaltung und Steuerung von Veränderungsprozessen\n• Fähigkeit zur Entwicklung einer sicherheitsbewussten Unternehmenskultur\n• Expertise in der Stakeholder-Kommunikation und im Erwartungsmanagement\n• Kompetenz in der Schulung und Entwicklung von Mitarbeitern\n• Fähigkeit zur Integration von Informationssicherheit in bestehende Geschäftsprozesse\n\n⚖️ Compliance und Governance-Expertise:\n• Tiefgreifendes Verständnis regulatorischer Anforderungen und deren praktischer Umsetzung\n• Kompetenz in der Entwicklung und Implementierung von Compliance-Programmen\n• Fähigkeit zur Vorbereitung und Durchführung von internen und externen Audits\n• Expertise in der Kommunikation mit Aufsichtsbehörden und externen Stakeholdern\n• Kompetenz in der Integration von DORA, NIS2 und anderen regulatorischen Anforderungen\n\n💼 Business-orientierte Fähigkeiten:\n• Kompetenz in der Bewertung und Kommunikation von Sicherheitsinvestitionen und deren ROI\n• Fähigkeit zur Integration von Informationssicherheit in Geschäftsentscheidungen\n• Expertise in der Entwicklung von Sicherheitsstrategien, die Geschäftsziele unterstützen\n• Kompetenz im Management von Drittanbieter-Beziehungen und Supply Chain Security\n• Fähigkeit zur Bewertung und Steuerung von Cyber-Risiken aus Geschäftsperspektive"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie integriert ADVISORI aktuelle regulatorische Entwicklungen in die ISO 27001 Schulungen?',
        answer: "ADVISORI gewährleistet die kontinuierliche Integration aktueller regulatorischer Entwicklungen in unsere ISO 27001 Schulungen durch einen systematischen Ansatz zur Überwachung, Bewertung und Einarbeitung neuer Anforderungen. Unsere Teilnehmer erhalten stets aktuelle und praxisrelevante Informationen.\n\n🔄 Kontinuierliche Regulatorische Überwachung:\n• Systematische Beobachtung und Analyse neuer Gesetze, Verordnungen und Standards\n• Bewertung der Auswirkungen auf bestehende ISO 27001 Implementierungen\n• Frühzeitige Identifikation von Trends und Entwicklungen in der Regulatorik\n• Regelmäßige Teilnahme an Fachkonferenzen und Austausch mit Regulierungsbehörden\n• Aufbau und Pflege eines Netzwerks von Experten und Branchenvertretern\n\n📋 DORA Integration und Mapping:\n• Detaillierte Analyse der Überschneidungen zwischen DORA und ISO 27001 Anforderungen\n• Entwicklung praktischer Lösungsansätze für die Integration beider Frameworks\n• Schulung in der Nutzung bestehender ISO 27001 Controls für DORA-Compliance\n• Vermittlung spezifischer DORA-Anforderungen, die über ISO 27001 hinausgehen\n• Praktische Übungen zur Entwicklung integrierter Compliance-Strategien\n\n🛡️ NIS2 und Cybersecurity-Anforderungen:\n• Integration der erweiterten NIS2-Anforderungen in bestehende ISMS-Strukturen\n• Schulung in der Anwendung des NIS2-Risikomanagement-Ansatzes\n• Vermittlung spezifischer Incident-Reporting-Anforderungen\n• Training in der Implementierung erweiterter Cybersecurity-Maßnahmen\n• Praktische Übungen zur Erfüllung von NIS2-Compliance-Verpflichtungen\n\n🌍 EU-weite Regulatorische Harmonisierung:\n• Integration der EU-Cybersecurity-Strategie in Schulungsinhalte\n• Berücksichtigung der Cyber Resilience Act Anforderungen\n• Einarbeitung von GDPR-Aspekten in Informationssicherheits-Schulungen\n• Vermittlung grenzüberschreitender Compliance-Anforderungen\n• Training in der Anwendung europäischer Standards und Best Practices\n\n🔧 Praktische Umsetzungsunterstützung:\n• Entwicklung konkreter Implementierungsleitfäden für neue regulatorische Anforderungen\n• Bereitstellung von Templates und Checklisten für erweiterte Compliance-Verpflichtungen\n• Schulung in der Anpassung bestehender ISMS-Dokumentation an neue Anforderungen\n• Training in der Kommunikation regulatorischer Änderungen an Stakeholder\n• Unterstützung bei der Entwicklung von Übergangsstrategien und Implementierungsplänen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Nachbetreuung und kontinuierliche Unterstützung bietet ADVISORI nach den Schulungen?',
        answer: "ADVISORI versteht, dass nachhaltiger Lernerfolg über die eigentliche Schulung hinausgeht. Deshalb bieten wir umfassende Nachbetreuung und kontinuierliche Unterstützung, um sicherzustellen, dass das erworbene Wissen erfolgreich in die Praxis umgesetzt wird.\n\n🤝 Persönliches Mentoring und Coaching:\n• Individuelle Betreuung durch erfahrene ISO 27001 Experten über einen definierten Zeitraum\n• Regelmäßige Check-ins zur Bewertung des Implementierungsfortschritts\n• Unterstützung bei spezifischen Herausforderungen und Problemlösungen\n• Strategische Beratung bei wichtigen ISMS-Entscheidungen\n• Feedback und Empfehlungen zur kontinuierlichen Verbesserung\n\n📞 Helpdesk und Expert Support:\n• Direkter Zugang zu ADVISORI Experten für fachliche Fragen und Unterstützung\n• Schnelle Antworten auf praktische Implementierungsfragen\n• Unterstützung bei der Interpretation von Standards und Anforderungen\n• Hilfe bei der Lösung technischer und organisatorischer Herausforderungen\n• Beratung bei der Anpassung an veränderte Geschäftsanforderungen\n\n🔄 Follow-up Workshops und Refresher-Trainings:\n• Regelmäßige Auffrischungsschulungen zu neuen Entwicklungen und Best Practices\n• Spezialisierte Workshops zu aktuellen Themen und Herausforderungen\n• Peer-Learning Sessions mit anderen Schulungsteilnehmern\n• Praktische Übungen zur Vertiefung und Anwendung des Gelernten\n• Updates zu regulatorischen Änderungen und deren Auswirkungen\n\n📚 Kontinuierliche Ressourcen und Updates:\n• Zugang zu einer umfangreichen Bibliothek von Templates, Checklisten und Best Practice Guides\n• Regelmäßige Newsletter mit aktuellen Informationen und Trends\n• Einladungen zu Webinaren und Fachveranstaltungen\n• Zugang zu Online-Lernplattformen mit zusätzlichen Materialien\n• Bereitstellung von Tools und Software für die praktische Anwendung\n\n🌐 Community und Netzwerk:\n• Zugang zu einem exklusiven Netzwerk von ISO 27001 Praktikern\n• Teilnahme an regelmäßigen Erfahrungsaustausch-Runden\n• Möglichkeit zur Vernetzung mit anderen Fachexperten und Implementierungsverantwortlichen\n• Einladungen zu ADVISORI User Groups und Fachveranstaltungen\n• Plattform für den Austausch von Erfahrungen und Lessons Learned"
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
