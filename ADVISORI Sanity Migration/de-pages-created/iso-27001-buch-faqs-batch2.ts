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
    console.log('Updating ISO 27001 Buch page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-buch' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-buch" not found')
    }
    
    // Create new FAQs for ISO 27001 book implementation and practical application
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie kann ISO 27001 Fachliteratur effektiv in praktische Implementierungsprojekte integriert werden?',
        answer: "Die Integration von ISO 27001 Fachliteratur in praktische Implementierungsprojekte erfordert einen systematischen Ansatz, der theoretisches Wissen mit praktischer Anwendung verknüpft. Erfolgreiche Integration transformiert passives Lesen in aktive Problemlösung und nachhaltige Kompetenzentwicklung.\n\n📋 Projektphasenorientierte Literaturintegration:\n• Projektinitiierung: Grundlagenliteratur für Stakeholder-Alignment und gemeinsames Verständnis der ISMS-Ziele\n• Planungsphase: Implementierungsleitfäden und Projektmanagement-Handbücher für strukturierte Herangehensweise\n• Umsetzungsphase: Spezialisierte Fachbücher und technische Dokumentation für detaillierte Implementierung\n• Testphase: Audit-Literatur und Bewertungsmethoden für Qualitätssicherung und Validierung\n• Optimierungsphase: Best-Practice-Sammlungen und Verbesserungsansätze für kontinuierliche Entwicklung\n\n🎯 Praxisorientierte Anwendungsmethoden:\n• Entwicklung von Lesegruppen und Diskussionsrunden für kollektiven Wissensaufbau im Projektteam\n• Erstellung von Zusammenfassungen und Handlungsableitungen für direkte Projektanwendung\n• Integration von Literaturkonzepten in Projektdokumentation und Arbeitsanweisungen\n• Verwendung von Fallstudien und Beispielen als Referenz für projektspezifische Herausforderungen\n• Aufbau einer projektinternen Wissensbasis mit relevanten Literaturzitaten und Konzepten\n\n💡 Adaptive Lernstrategien für Projektkontext:\n• Just-in-Time-Learning: Gezielte Literaturrecherche bei spezifischen Implementierungsherausforderungen\n• Peer-Learning: Wissensaustausch zwischen Teammitgliedern basierend auf verschiedenen Literaturquellen\n• Mentoring-Ansätze: Erfahrene Teammitglieder leiten Literaturstudium und praktische Anwendung an\n• Reflexive Praxis: Regelmäßige Bewertung der Anwendbarkeit gelesener Konzepte im Projektkontext\n• Experimenteller Ansatz: Pilotierung von Literaturkonzepten in kontrollierten Projektbereichen\n\n🔄 Kontinuierliche Verbesserung durch Literaturintegration:\n• Dokumentation von Lessons Learned aus der Anwendung verschiedener Literaturansätze\n• Aufbau einer projektspezifischen Best-Practice-Sammlung basierend auf Literaturstudium\n• Integration von Feedback-Schleifen zur Bewertung der Effektivität verschiedener Literaturquellen\n• Entwicklung von Templates und Checklisten basierend auf bewährten Literaturkonzepten\n• Schaffung einer nachhaltigen Wissensbasis für zukünftige Projekte und Implementierungen\n\n🌟 Strategische Wertschöpfung:\n• Transformation von Literaturwissen in organisationsspezifische Methodiken und Frameworks\n• Entwicklung einzigartiger Implementierungsansätze durch kreative Literaturanwendung\n• Aufbau von Expertise und Reputation durch fundierte, literaturbasierte Implementierungen\n• Schaffung von Wettbewerbsvorteilen durch innovative Anwendung etablierter Konzepte\n• Etablierung einer lernenden Organisation, die kontinuierlich von Fachliteratur profitiert"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielen aktuelle Trends und emerging Technologies in der ISO 27001 Fachliteratur?',
        answer: "Aktuelle Trends und emerging Technologies prägen die Evolution der ISO 27001 Fachliteratur maßgeblich und erweitern traditionelle Sicherheitskonzepte um zukunftsorientierte Perspektiven. Diese Entwicklung ist entscheidend für die Relevanz und Anwendbarkeit von ISMS in modernen, sich schnell verändernden Geschäftsumgebungen.\n\n🚀 Digitale Transformation und Cloud-Security:\n• Umfassende Behandlung von Cloud-first-Strategien und deren Auswirkungen auf traditionelle ISMS-Ansätze\n• Integration von DevSecOps-Konzepten und agilen Sicherheitsmethoden in etablierte ISMS-Frameworks\n• Behandlung hybrider und Multi-Cloud-Umgebungen mit komplexen Sicherheitsanforderungen\n• Berücksichtigung von Container-Sicherheit und Microservices-Architekturen in modernen Anwendungslandschaften\n• Entwicklung neuer Governance-Modelle für dezentrale und verteilte IT-Infrastrukturen\n\n🤖 Künstliche Intelligenz und Automatisierung:\n• Exploration von KI-gestützten Sicherheitslösungen und deren Integration in ISMS-Strukturen\n• Behandlung von Machine Learning für Threat Detection und automatisierte Incident Response\n• Berücksichtigung ethischer Aspekte und Bias-Management bei KI-basierten Sicherheitsentscheidungen\n• Integration von Robotic Process Automation in Compliance-Überwachung und Audit-Prozesse\n• Entwicklung neuer Risikobewertungsmodelle für KI-Systeme und algorithmische Entscheidungsfindung\n\n🔐 Zero Trust und moderne Sicherheitsarchitekturen:\n• Umfassende Behandlung von Zero Trust-Prinzipien und deren Implementierung in ISMS-Kontexten\n• Integration von Identity-Centric Security und kontinuierlicher Authentifizierung\n• Berücksichtigung von Software-Defined Perimeters und dynamischen Sicherheitsgrenzen\n• Entwicklung neuer Monitoring- und Überwachungsstrategien für vertrauenslose Umgebungen\n• Anpassung traditioneller Netzwerksicherheitskonzepte an moderne, grenzenlose Arbeitsumgebungen\n\n📱 IoT und Edge Computing Sicherheit:\n• Behandlung der besonderen Herausforderungen von Internet of Things-Implementierungen\n• Integration von Edge Computing-Sicherheit in zentrale ISMS-Governance\n• Berücksichtigung von Operational Technology-Sicherheit und IT-OT-Konvergenz\n• Entwicklung neuer Risikobewertungsmodelle für verteilte und autonome Systeme\n• Anpassung von Incident Response-Strategien an hochverteilte und heterogene Umgebungen\n\n🌐 Regulatorische Evolution und Compliance-Integration:\n• Integration neuer regulatorischer Anforderungen wie DORA, NIS2 und AI Act in ISMS-Frameworks\n• Behandlung von Cross-Border-Compliance und internationalen Datenschutzanforderungen\n• Berücksichtigung von ESG-Kriterien und Nachhaltigkeitsaspekten in Sicherheitsstrategien\n• Entwicklung integrierter Compliance-Ansätze für Multi-Standard-Umgebungen\n• Anpassung an sich schnell ändernde regulatorische Landschaften und Anforderungen\n\n🔄 Agile und adaptive Sicherheitskonzepte:\n• Integration agiler Methoden und kontinuierlicher Verbesserung in traditionelle ISMS-Strukturen\n• Entwicklung adaptiver Sicherheitsframeworks für sich schnell ändernde Geschäftsanforderungen\n• Berücksichtigung von Lean Security und Minimum Viable Security-Konzepten\n• Integration von Continuous Security Monitoring und Real-Time Risk Assessment\n• Entwicklung flexibler Governance-Modelle für dynamische Organisationsstrukturen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie können Organisationen eine nachhaltige Literatur-Lernkultur für ISO 27001 etablieren?',
        answer: "Die Etablierung einer nachhaltigen Literatur-Lernkultur für ISO 27001 erfordert strategische Planung, systematische Umsetzung und kontinuierliche Pflege. Eine erfolgreiche Lernkultur transformiert Wissensaufbau von einer individuellen Aktivität zu einem organisationsweiten Wettbewerbsvorteil.\n\n📚 Strukturierte Lerninfrastruktur aufbauen:\n• Entwicklung einer kuratierten digitalen Bibliothek mit aktueller ISO 27001 Fachliteratur und Zugriffsmöglichkeiten\n• Etablierung von Lerngruppen und Communities of Practice für kollektiven Wissensaustausch\n• Schaffung dedizierter Lernzeiten und Ressourcen für kontinuierliche Weiterbildung\n• Integration von Literaturstudium in Arbeitsplatzbeschreibungen und Leistungsbewertungen\n• Aufbau von Mentoring-Programmen für systematische Wissensweitergabe zwischen Erfahrungsebenen\n\n🎯 Motivations- und Anreizsysteme entwickeln:\n• Anerkennung und Belohnung von Literaturstudium und Wissensanwendung in praktischen Projekten\n• Integration von Lernzielen in individuelle Entwicklungspläne und Karrierewege\n• Schaffung von Möglichkeiten zur Präsentation und zum Teilen von Literaturerkenntnissen\n• Entwicklung von Zertifizierungs- und Kompetenzanerkennungsprogrammen\n• Förderung von Konferenzbesuchen und Fachveranstaltungen für erweiterte Perspektiven\n\n💡 Innovative Lernformate und Methoden:\n• Implementierung von Book Clubs und Diskussionsrunden für kollektive Literaturbearbeitung\n• Entwicklung von Lunch-and-Learn-Sessions und Mikrolearning-Formaten\n• Integration von Gamification-Elementen und Wettbewerbsaspekten in Lernprozesse\n• Nutzung von Peer-Teaching und Reverse-Mentoring für vielfältige Wissensperspektiven\n• Schaffung von Innovation Labs und Experimentierräumen für Literaturanwendung\n\n🔄 Kontinuierliche Evaluation und Anpassung:\n• Regelmäßige Bewertung der Effektivität verschiedener Lernformate und Literaturquellen\n• Sammlung von Feedback und Verbesserungsvorschlägen von Lernenden und Anwendern\n• Anpassung der Literaturauswahl an sich ändernde Geschäftsanforderungen und Technologien\n• Monitoring von Lernfortschritten und praktischer Anwendung erworbenen Wissens\n• Integration von Lessons Learned in die kontinuierliche Verbesserung der Lernkultur\n\n🌟 Strategische Integration und Governance:\n• Verankerung der Lernkultur in Unternehmensstrategie und Governance-Strukturen\n• Entwicklung von Lernzielen und KPIs für organisationsweite Kompetenzentwicklung\n• Integration von Wissensmanagement in Risikomanagement und Compliance-Strategien\n• Schaffung von Verbindungen zwischen Literaturstudium und Geschäftsergebnissen\n• Aufbau einer nachhaltigen Wissensbasis für langfristige Organisationsentwicklung\n\n🤝 Externe Vernetzung und Wissensaustausch:\n• Aufbau von Beziehungen zu Fachgemeinschaften und Expertennetzen\n• Teilnahme an Branchenveranstaltungen und Fachkonferenzen für erweiterte Perspektiven\n• Kooperationen mit Bildungseinrichtungen und Forschungsinstitutionen\n• Engagement in Standardisierungsgremien und Facharbeitsgruppen\n• Entwicklung von Thought Leadership durch Beiträge zur Fachgemeinschaft"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche spezifischen Herausforderungen ergeben sich bei der Auswahl und Bewertung von ISO 27001 Fachliteratur?',
        answer: "Die Auswahl und Bewertung von ISO 27001 Fachliteratur bringt vielfältige Herausforderungen mit sich, die sowohl die Qualität als auch die Anwendbarkeit der gewählten Ressourcen beeinflussen. Eine systematische Herangehensweise ist entscheidend für die Identifikation wertvoller und relevanter Literaturquellen.\n\n🔍 Qualitätsbewertung und Glaubwürdigkeit:\n• Bewertung der Autorenkompetenz und praktischen Erfahrung in ISO 27001 Implementierungen\n• Prüfung der Aktualität und Konsistenz mit aktuellen Standardversionen und Best Practices\n• Analyse der methodischen Fundierung und wissenschaftlichen Rigorosität der Publikationen\n• Berücksichtigung von Peer-Reviews und Fachgemeinschafts-Feedback bei der Qualitätsbewertung\n• Unterscheidung zwischen theoretischen Abhandlungen und praxisorientierten Implementierungsleitfäden\n\n📊 Relevanz und Anwendbarkeit bewerten:\n• Abstimmung der Literaturauswahl auf spezifische Organisationsanforderungen und Branchenkontexte\n• Berücksichtigung von Unternehmensgröße und verfügbaren Ressourcen bei der Literaturauswahl\n• Bewertung der Übertragbarkeit von Konzepten auf verschiedene Technologie- und Geschäftsumgebungen\n• Analyse der Kompatibilität mit bestehenden Managementsystemen und Governance-Strukturen\n• Prüfung der praktischen Umsetzbarkeit beschriebener Methoden und Frameworks\n\n🌐 Vielfalt und Perspektivenbreite sicherstellen:\n• Balance zwischen etablierten Standardwerken und innovativen, zukunftsorientierten Ansätzen\n• Integration verschiedener kultureller und regionaler Perspektiven auf Informationssicherheit\n• Berücksichtigung unterschiedlicher Implementierungsphilosophien und methodischer Ansätze\n• Einbeziehung von Stimmen aus verschiedenen Branchen und Anwendungskontexten\n• Ausgewogenheit zwischen technischen und managementorientierten Publikationen\n\n⏰ Aktualität und Zukunftsorientierung:\n• Herausforderung der schnellen Veralterung technischer Inhalte in dynamischen IT-Umgebungen\n• Balance zwischen bewährten Grundlagen und aktuellen Entwicklungen in der Informationssicherheit\n• Antizipation zukünftiger Trends und deren Berücksichtigung in der Literaturauswahl\n• Integration von Emerging Technologies und deren Sicherheitsimplikationen\n• Berücksichtigung sich entwickelnder regulatorischer Anforderungen und Compliance-Standards\n\n💰 Kosten-Nutzen-Optimierung:\n• Bewertung des Preis-Leistungs-Verhältnisses verschiedener Literaturquellen und Publikationsformate\n• Berücksichtigung von Lizenzkosten und Zugriffsbeschränkungen bei digitalen Ressourcen\n• Optimierung zwischen umfassenden Standardwerken und spezialisierten Fachpublikationen\n• Integration kostenfreier und Open-Source-Ressourcen in die Literaturstrategie\n• Langfristige Budgetplanung für kontinuierliche Literaturaktualisierung und Erweiterung\n\n🔄 Kontinuierliche Evaluation und Anpassung:\n• Entwicklung von Bewertungskriterien und Feedback-Mechanismen für Literaturqualität\n• Regelmäßige Überprüfung und Aktualisierung der Literatursammlung\n• Integration von Nutzerfeedback und praktischen Anwendungserfahrungen\n• Monitoring von Marktentwicklungen und neuen Publikationen\n• Anpassung der Auswahlkriterien an sich ändernde Organisationsanforderungen"
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
