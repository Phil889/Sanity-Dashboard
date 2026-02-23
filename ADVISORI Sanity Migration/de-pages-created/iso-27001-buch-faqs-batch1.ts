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
    console.log('Updating ISO 27001 Buch page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-buch' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-buch" not found')
    }
    
    // Create new FAQs for ISO 27001 book fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist fundierte Fachliteratur entscheidend für eine erfolgreiche ISO 27001 Implementierung?',
        answer: "Fundierte Fachliteratur bildet das intellektuelle Fundament jeder erfolgreichen ISO 27001 Implementierung und transformiert komplexe Standardanforderungen in verständliche, umsetzbare Konzepte. Sie ermöglicht es Organisationen, über oberflächliche Compliance hinaus echte Sicherheitsexzellenz zu entwickeln und nachhaltigen Wert zu schaffen.\n\n📚 Systematischer Wissensaufbau und Kompetenzentwicklung:\n• Strukturierte Vermittlung der ISO 27001 Grundlagen, Prinzipien und Philosophie für tiefgreifendes Verständnis\n• Aufbau einer soliden theoretischen Basis, die praktische Entscheidungen fundiert und nachvollziehbar macht\n• Entwicklung kritischen Denkens über Informationssicherheit, das über mechanische Regelanwendung hinausgeht\n• Befähigung zur eigenständigen Problemlösung und kreativen Anpassung an spezifische Organisationsanforderungen\n• Schaffung einer gemeinsamen Wissensbasis im Team für effektive Kommunikation und Zusammenarbeit\n\n🎯 Strategische Implementierungsqualität:\n• Vermeidung kostspieliger Implementierungsfehler durch fundiertes Verständnis der Standardlogik\n• Entwicklung maßgeschneiderter Lösungen statt generischer Ansätze durch tiefes Konzeptverständnis\n• Optimierung von Ressourceneinsatz durch strategische Priorisierung basierend auf Fachwissen\n• Antizipation zukünftiger Anforderungen und Trends für zukunftsfähige ISMS-Architektur\n• Integration von Best Practices und Lessons Learned aus der globalen Fachgemeinschaft\n\n💡 Innovationsfähigkeit und Anpassungsvermögen:\n• Entwicklung der Fähigkeit zur kreativen Problemlösung bei unvorhergesehenen Herausforderungen\n• Verständnis der Standardintention ermöglicht flexible Interpretation bei sich ändernden Geschäftsanforderungen\n• Aufbau von Expertise für die Integration neuer Technologien und Geschäftsmodelle\n• Befähigung zur kontinuierlichen Verbesserung und Evolution des ISMS\n• Entwicklung von Thought Leadership und Innovationskraft in der Organisation\n\n🔄 Nachhaltige Organisationsentwicklung:\n• Aufbau einer lernenden Organisation, die sich kontinuierlich weiterentwickelt\n• Schaffung einer Kultur der Informationssicherheit, die über Compliance hinausgeht\n• Entwicklung interner Expertise reduziert langfristige Abhängigkeit von externen Beratern\n• Befähigung zur Mentoring und Wissensweitergabe an neue Teammitglieder\n• Etablierung einer soliden Basis für Multi-Standard-Compliance und integrierte Managementsysteme\n\n🌟 Strategische Wettbewerbsvorteile:\n• Positionierung als Thought Leader und vertrauenswürdiger Partner im Markt\n• Entwicklung einzigartiger Sicherheitslösungen, die Wettbewerbsvorteile schaffen\n• Aufbau von Reputation und Glaubwürdigkeit bei Stakeholdern und Kunden\n• Befähigung zur proaktiven Gestaltung regulatorischer Entwicklungen\n• Schaffung einer nachhaltigen Grundlage für Geschäftswachstum und Innovation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Arten von ISO 27001 Büchern und Fachliteratur sind für verschiedene Implementierungsphasen am wertvollsten?',
        answer: "Die Auswahl der optimalen Fachliteratur sollte strategisch an die jeweilige Implementierungsphase und die spezifischen Lernziele angepasst werden. Verschiedene Literaturtypen erfüllen unterschiedliche Funktionen und unterstützen verschiedene Aspekte der ISMS-Entwicklung.\n\n📖 Grundlagenliteratur und Einführungswerke:\n• Umfassende Einführungen in die Informationssicherheit und ISMS-Konzepte für Neueinsteiger\n• Detaillierte Erläuterungen der ISO 27001 Struktur, Philosophie und Anforderungen\n• Konzeptuelle Grundlagen für Risikomanagement, Governance und Sicherheitssteuerung\n• Historische Entwicklung und Kontext der Informationssicherheitsstandards\n• Vergleichende Analysen verschiedener Sicherheitsframeworks und deren Anwendungsbereiche\n\n🛠️ Praktische Implementierungsleitfäden:\n• Schritt-für-Schritt-Anleitungen für systematischen ISMS-Aufbau und strukturierte Umsetzung\n• Projektmanagement-Handbücher speziell für ISO 27001 Implementierungsprojekte\n• Checklisten, Templates und praktische Arbeitsvorlagen für effiziente Projektdurchführung\n• Change-Management-Leitfäden für organisatorische Transformation und Kulturwandel\n• Fallstudien und Erfahrungsberichte aus realen Implementierungsprojekten verschiedener Branchen\n\n🎯 Spezialisierte Fachbücher für Vertiefung:\n• Detaillierte Risikomanagement-Methodiken und fortgeschrittene Bewertungsverfahren\n• Compliance-Monitoring und kontinuierliche Überwachungsstrategien für nachhaltige Wirksamkeit\n• Incident Management, Business Continuity und Krisenmanagement-Konzepte\n• Technische Sicherheitsmaßnahmen und deren Integration in ISMS-Strukturen\n• Governance-Frameworks und Management-Systeme für strategische Sicherheitssteuerung\n\n📋 Audit und Zertifizierungsliteratur:\n• Umfassende Audit-Vorbereitung und Zertifizierungsstrategien für erfolgreiche Zertifizierung\n• Interne Audit-Methoden und Selbstbewertungsansätze für kontinuierliche Verbesserung\n• Evidence-Sammlung und Dokumentationsstrategien für effektive Nachweisführung\n• Kommunikation mit Zertifizierungsstellen und Audit-Management\n• Surveillance-Audits und Re-Zertifizierungsprozesse für langfristige Compliance\n\n🏭 Branchenspezifische und anwendungsorientierte Literatur:\n• Finanzdienstleister-spezifische ISMS-Implementierung unter Berücksichtigung regulatorischer Besonderheiten\n• Gesundheitswesen und medizinische Einrichtungen mit besonderen Datenschutzanforderungen\n• Industrielle Produktionsumgebungen und Kritische Infrastrukturen mit OT-Security-Fokus\n• Cloud-Services und digitale Geschäftsmodelle mit modernen Technologieherausforderungen\n• Kleine und mittlere Unternehmen mit ressourcenoptimierten Implementierungsansätzen\n\n🚀 Aktuelle Trends und Zukunftsliteratur:\n• Emerging Technologies und deren Sicherheitsimplikationen für zukunftsfähige ISMS\n• Cybersecurity und moderne Bedrohungslandschaften mit aktuellen Threat-Intelligence\n• KI-Sicherheit und automatisierte Sicherheitssysteme für innovative Schutzkonzepte\n• Regulatorische Entwicklungen und Multi-Standard-Compliance für integrierte Ansätze\n• Digitale Transformation und agile Sicherheitskonzepte für moderne Arbeitsweisen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie unterscheiden sich ADVISORI Buchempfehlungen von generischen Literaturlisten?',
        answer: "ADVISORI Buchempfehlungen basieren auf jahrelanger praktischer Implementierungserfahrung und kontinuierlicher Evaluation der verfügbaren Fachliteratur. Unsere Auswahl erfolgt nach strengen Qualitätskriterien und berücksichtigt sowohl theoretische Fundierung als auch praktische Anwendbarkeit in realen Projektkontexten.\n\n🔬 Praxisvalidierte Bewertungskriterien:\n• Systematische Evaluation jeder Publikation basierend auf Erfahrungen aus über 500 Implementierungsprojekten\n• Bewertung der praktischen Anwendbarkeit und Umsetzbarkeit der beschriebenen Konzepte\n• Analyse der Aktualität und Relevanz für moderne Geschäftsumgebungen und Technologien\n• Prüfung der Konsistenz mit aktuellen Standardversionen und regulatorischen Entwicklungen\n• Berücksichtigung der Verständlichkeit und didaktischen Qualität für verschiedene Zielgruppen\n\n🎯 Zielgruppenspezifische Differenzierung:\n• Maßgeschneiderte Empfehlungen basierend auf Rolle, Erfahrungslevel und spezifischen Verantwortlichkeiten\n• Berücksichtigung von Branchenbesonderheiten und sektoralen Compliance-Anforderungen\n• Anpassung an Organisationsgröße und verfügbare Ressourcen für realistische Umsetzung\n• Integration von Lernzielen und Kompetenzentwicklungspfaden für systematischen Wissensaufbau\n• Abstimmung auf spezifische Projektphasen und Implementierungsherausforderungen\n\n💡 Innovative Bewertungsansätze:\n• Integration von Feedback aus realen Implementierungsprojekten und Kundenerfahrungen\n• Kontinuierliche Aktualisierung basierend auf sich entwickelnden Best Practices\n• Berücksichtigung von Synergieeffekten zwischen verschiedenen Publikationen\n• Bewertung der Komplementarität zu praktischen Tools und Implementierungsressourcen\n• Analyse der Langzeitwirkung und nachhaltigen Relevanz der vermittelten Konzepte\n\n🌐 Ganzheitliche Perspektive:\n• Integration von Multi-Standard-Compliance und übergreifenden Governance-Ansätzen\n• Berücksichtigung von Emerging Technologies und zukünftigen Entwicklungen\n• Einbeziehung von Change Management und organisatorischen Transformationsaspekten\n• Fokus auf nachhaltige Wertschöpfung und strategische Geschäftsvorteile\n• Beachtung von kulturellen und regionalen Besonderheiten bei internationalen Implementierungen\n\n🔄 Kontinuierliche Qualitätssicherung:\n• Regelmäßige Überprüfung und Aktualisierung der Empfehlungen basierend auf neuen Publikationen\n• Feedback-Integration von Kunden und Implementierungspartnern für kontinuierliche Verbesserung\n• Monitoring von Marktentwicklungen und emerging Best Practices\n• Qualitätsbewertung neuer Autoren und Publikationsquellen\n• Berücksichtigung von Peer-Reviews und Fachgemeinschafts-Feedback\n\n🎓 Pädagogische Exzellenz:\n• Bewertung der didaktischen Qualität und Lerneffektivität verschiedener Publikationen\n• Berücksichtigung verschiedener Lernstile und Präferenzen für optimale Wissensvermittlung\n• Integration von praktischen Übungen und Anwendungsbeispielen\n• Aufbau strukturierter Lernpfade für systematische Kompetenzentwicklung\n• Unterstützung bei der Integration von Literaturstudium in praktische Implementierungsprojekte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche konkreten Vorteile bietet eine strukturierte Herangehensweise an ISO 27001 Fachliteratur?',
        answer: "Eine strukturierte Herangehensweise an ISO 27001 Fachliteratur maximiert den Lerneffekt, optimiert den Zeitaufwand und gewährleistet eine systematische Kompetenzentwicklung. Sie transformiert passives Lesen in aktiven Wissensaufbau und praktische Anwendungsfähigkeit.\n\n📈 Optimierte Lerneffizienz und Wissensretention:\n• Systematischer Aufbau von Grundlagen zu fortgeschrittenen Konzepten für nachhaltiges Verständnis\n• Vermeidung von Wissenslücken durch strukturierte Abfolge und logische Progression\n• Verstärkung des Lerneffekts durch gezielte Wiederholung und Vertiefung wichtiger Konzepte\n• Integration verschiedener Perspektiven und Ansätze für umfassendes Verständnis\n• Entwicklung kritischen Denkens durch vergleichende Analyse verschiedener Quellen\n\n🎯 Praxisorientierte Anwendungsfähigkeit:\n• Direkte Verknüpfung theoretischer Konzepte mit praktischen Implementierungsherausforderungen\n• Aufbau von Problemlösungskompetenz durch strukturierte Fallstudien und Anwendungsbeispiele\n• Entwicklung der Fähigkeit zur Adaption von Konzepten an spezifische Organisationsanforderungen\n• Befähigung zur eigenständigen Bewertung und Auswahl geeigneter Implementierungsansätze\n• Aufbau von Expertise für die Kommunikation komplexer Sicherheitskonzepte an verschiedene Stakeholder\n\n⏰ Zeitoptimierung und Ressourceneffizienz:\n• Fokussierung auf relevante und hochwertige Inhalte statt ungezielter Literatursuche\n• Vermeidung redundanter oder veralteter Informationen durch kuratierte Auswahl\n• Optimale Sequenzierung für maximalen Lernfortschritt in minimaler Zeit\n• Integration von Literaturstudium in praktische Projektarbeit für doppelten Nutzen\n• Entwicklung effizienter Lese- und Lernstrategien für kontinuierliche Weiterbildung\n\n🔗 Systematische Kompetenzentwicklung:\n• Aufbau einer kohärenten Wissensbasis, die verschiedene Aspekte der Informationssicherheit integriert\n• Entwicklung von Expertise in spezifischen Bereichen durch gezielte Vertiefung\n• Schaffung von Verbindungen zwischen verschiedenen Fachbereichen und Disziplinen\n• Aufbau von Mentoring-Fähigkeiten für Wissensweitergabe an Kollegen und Teams\n• Entwicklung von Thought Leadership und Innovationskraft in der Organisation\n\n🌟 Strategische Karriereentwicklung:\n• Aufbau anerkannter Expertise und Reputation in der Fachgemeinschaft\n• Entwicklung von Alleinstellungsmerkmalen und spezialisierten Kompetenzen\n• Vorbereitung auf Führungsrollen und strategische Verantwortung\n• Netzwerkaufbau durch Teilnahme an Fachgemeinschaften und Diskussionen\n• Positionierung als Subject Matter Expert und vertrauenswürdiger Berater\n\n🔄 Kontinuierliche Weiterentwicklung:\n• Aufbau einer nachhaltigen Lernroutine für lebenslanges Lernen\n• Entwicklung der Fähigkeit zur kritischen Bewertung neuer Publikationen und Trends\n• Schaffung einer persönlichen Wissensbasis für zukünftige Herausforderungen\n• Integration von Feedback und Erfahrungen für kontinuierliche Verbesserung\n• Aufbau von Resilienz und Anpassungsfähigkeit in einer sich schnell verändernden Fachdomäne"
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
