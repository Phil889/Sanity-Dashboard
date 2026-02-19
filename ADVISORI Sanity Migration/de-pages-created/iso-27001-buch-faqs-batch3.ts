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
    console.log('Updating ISO 27001 Buch page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-buch' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-buch" not found')
    }
    
    // Create new FAQs for ISO 27001 book advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie können digitale und interaktive Lernformate die traditionelle ISO 27001 Buchliteratur ergänzen?',
        answer: "Digitale und interaktive Lernformate revolutionieren die Art, wie ISO 27001 Wissen vermittelt und angewendet wird. Sie ergänzen traditionelle Buchliteratur durch immersive Erfahrungen, personalisierte Lernpfade und praktische Anwendungsmöglichkeiten, die das Verständnis vertiefen und die Retention verbessern.\n\n💻 Interaktive E-Learning-Plattformen:\n• Adaptive Lernpfade, die sich an individuelle Wissensstände und Lerngeschwindigkeiten anpassen\n• Gamification-Elemente mit Punktesystemen, Badges und Leaderboards für erhöhte Motivation\n• Interaktive Simulationen von ISMS-Implementierungsszenarien für praktische Erfahrungen\n• Virtual Reality-Umgebungen für immersive Audit-Trainings und Sicherheitsbewertungen\n• Kollaborative Online-Workshops und virtuelle Diskussionsrunden mit Experten\n\n📱 Mobile Learning und Mikrolearning:\n• Bite-sized Learning-Module für kontinuierliche Weiterbildung in kurzen Zeitfenstern\n• Podcast-Serien und Audiobooks für flexibles Lernen während Pendelzeiten oder Pausen\n• Mobile Apps mit Flashcards, Quizzes und Selbsttests für spielerisches Wissensmanagement\n• Push-Benachrichtigungen mit täglichen ISO 27001 Tipps und Best Practices\n• Offline-Verfügbarkeit für ortsunabhängiges Lernen ohne Internetverbindung\n\n🎥 Multimediale Inhalte und Visualisierung:\n• Erklärvideos und Animationen für komplexe ISMS-Konzepte und Prozessabläufe\n• Interaktive Infografiken und Mind Maps für visuelle Lerntypen\n• Webinar-Aufzeichnungen und Live-Sessions mit Branchenexperten\n• Case Study-Videos mit realen Implementierungsbeispielen und Lessons Learned\n• 3D-Modelle und Visualisierungen von Sicherheitsarchitekturen und Netzwerktopologien\n\n🔄 Personalisierte und adaptive Lernsysteme:\n• KI-gestützte Empfehlungssysteme für optimale Literaturauswahl basierend auf Lernzielen\n• Adaptive Assessments, die Wissenslücken identifizieren und gezielte Lernempfehlungen geben\n• Personalisierte Dashboards mit Lernfortschritt und Kompetenzentwicklung\n• Intelligente Chatbots für sofortige Antworten auf fachspezifische Fragen\n• Machine Learning-Algorithmen zur Optimierung von Lernpfaden basierend auf Erfolgsmustern\n\n🤝 Soziales und kollaboratives Lernen:\n• Online-Communities und Foren für Erfahrungsaustausch zwischen Praktikern\n• Peer-to-Peer-Learning-Plattformen mit Mentoring-Funktionen\n• Virtuelle Studiengruppen und Book Clubs für gemeinsame Literaturbearbeitung\n• Crowdsourced Knowledge Bases mit Beiträgen von Experten und Praktikern\n• Social Learning-Features mit Kommentaren, Bewertungen und Diskussionen zu Inhalten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Bedeutung haben internationale und kulturelle Perspektiven in der ISO 27001 Fachliteratur?',
        answer: "Internationale und kulturelle Perspektiven bereichern die ISO 27001 Fachliteratur erheblich und sind entscheidend für globale Implementierungen. Sie bieten vielfältige Ansätze, berücksichtigen regionale Besonderheiten und ermöglichen ein umfassenderes Verständnis der Informationssicherheit in verschiedenen Kontexten.\n\n🌍 Globale Implementierungsansätze:\n• Vergleichende Analysen verschiedener nationaler Interpretationen und Umsetzungsstrategien des ISO 27001 Standards\n• Berücksichtigung regionaler regulatorischer Unterschiede und deren Auswirkungen auf ISMS-Design\n• Integration verschiedener Rechtsrahmen und Compliance-Anforderungen in multinationalen Organisationen\n• Anpassung von Sicherheitskonzepten an unterschiedliche Geschäftskulturen und Arbeitsweisen\n• Harmonisierung globaler Sicherheitsstandards mit lokalen Anforderungen und Traditionen\n\n🏛️ Kulturelle Einflüsse auf Sicherheitsverhalten:\n• Analyse kultureller Dimensionen wie Machtdistanz, Individualismus und Unsicherheitsvermeidung in Sicherheitskontexten\n• Berücksichtigung unterschiedlicher Kommunikationsstile und Hierarchiestrukturen bei ISMS-Implementierung\n• Anpassung von Awareness-Programmen und Schulungskonzepten an kulturelle Präferenzen\n• Integration traditioneller Sicherheitskonzepte und Weisheiten in moderne ISMS-Frameworks\n• Entwicklung kultursensibler Change-Management-Strategien für globale Sicherheitstransformationen\n\n📚 Vielfältige Autorenperspektiven:\n• Integration von Stimmen aus verschiedenen Kontinenten und Entwicklungsstufen\n• Berücksichtigung unterschiedlicher Bildungstraditionen und Lernkulturen\n• Einbeziehung von Perspektiven aus verschiedenen Wirtschaftssystemen und Governance-Modellen\n• Aufnahme indigener und traditioneller Sicherheitskonzepte in moderne Frameworks\n• Förderung von Diversität in Autorenschaft und Fallstudienauswahl\n\n🔄 Cross-Cultural Learning und Wissenstransfer:\n• Entwicklung interkultureller Kompetenz für globale Sicherheitsverantwortliche\n• Aufbau von Brücken zwischen verschiedenen Sicherheitstraditionen und Philosophien\n• Förderung des Austauschs zwischen entwickelten und aufstrebenden Märkten\n• Integration von Süd-Süd-Kooperationen und horizontalem Wissenstransfer\n• Schaffung globaler Lerngemeinschaften für kontinuierlichen kulturellen Austausch\n\n🌐 Regionale Spezialisierung und Expertise:\n• Berücksichtigung spezifischer Bedrohungslandschaften in verschiedenen Regionen\n• Integration regionaler Technologietrends und Innovationen\n• Anpassung an unterschiedliche Infrastrukturen und Entwicklungsstände\n• Berücksichtigung regionaler Partnerschaften und Kooperationsmodelle\n• Entwicklung regionsspezifischer Best Practices und Erfolgsmodelle"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie kann die Qualität und Relevanz von ISO 27001 Fachliteratur kontinuierlich bewertet und verbessert werden?',
        answer: "Die kontinuierliche Bewertung und Verbesserung der Qualität von ISO 27001 Fachliteratur erfordert systematische Ansätze, die sowohl quantitative als auch qualitative Metriken einbeziehen. Ein robustes Bewertungssystem gewährleistet, dass Literaturressourcen aktuell, relevant und praktisch anwendbar bleiben.\n\n📊 Systematische Qualitätsbewertung:\n• Entwicklung standardisierter Bewertungskriterien für Aktualität, Genauigkeit und praktische Anwendbarkeit\n• Implementierung von Peer-Review-Prozessen durch anerkannte ISO 27001 Experten und Praktiker\n• Regelmäßige Überprüfung der Konsistenz mit aktuellen Standardversionen und regulatorischen Entwicklungen\n• Bewertung der didaktischen Qualität und Lerneffektivität verschiedener Publikationen\n• Integration von Feedback-Mechanismen für kontinuierliche Qualitätsverbesserung\n\n🔍 Praxisrelevanz und Anwendbarkeit:\n• Bewertung der Übertragbarkeit beschriebener Konzepte auf reale Implementierungsszenarien\n• Analyse der Erfolgsquote von Implementierungen basierend auf spezifischen Literaturquellen\n• Sammlung von Fallstudien und Erfahrungsberichten zur Validierung theoretischer Konzepte\n• Monitoring der praktischen Anwendung empfohlener Methoden und Frameworks\n• Integration von Lessons Learned aus gescheiterten oder problematischen Implementierungen\n\n📈 Kontinuierliche Marktbeobachtung:\n• Systematisches Monitoring neuer Publikationen und aufkommender Trends\n• Bewertung der Reputation und Glaubwürdigkeit neuer Autoren und Publikationsquellen\n• Analyse von Zitationshäufigkeiten und akademischer Anerkennung\n• Tracking von Diskussionen in Fachgemeinschaften und sozialen Medien\n• Integration von Feedback aus Konferenzen und Fachveranstaltungen\n\n🤝 Community-basierte Bewertung:\n• Aufbau von Bewertungsgemeinschaften mit Praktikern aus verschiedenen Branchen\n• Implementierung von Crowdsourcing-Ansätzen für Literaturrezensionen\n• Entwicklung von Rating-Systemen und Empfehlungsplattformen\n• Förderung von Diskussionen und Debatten über Literaturqualität\n• Integration von Nutzerfeedback in Auswahlentscheidungen\n\n🔄 Adaptive Verbesserungszyklen:\n• Regelmäßige Überarbeitung und Aktualisierung von Bewertungskriterien\n• Integration neuer Bewertungsmethoden und Technologien\n• Anpassung an sich ändernde Marktanforderungen und Technologietrends\n• Entwicklung prädiktiver Modelle für Literaturrelevanz und Langzeitwert\n• Kontinuierliche Optimierung von Auswahlprozessen basierend auf Erfolgsmessungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielt Open Source und frei verfügbare Literatur in der ISO 27001 Wissensvermittlung?',
        answer: "Open Source und frei verfügbare Literatur spielen eine zunehmend wichtige Rolle in der ISO 27001 Wissensvermittlung und demokratisieren den Zugang zu hochwertigen Informationssicherheitsressourcen. Sie fördern Innovation, Kollaboration und globale Wissensverteilung, während sie gleichzeitig neue Herausforderungen für Qualitätssicherung schaffen.\n\n🌐 Demokratisierung des Wissens:\n• Abbau finanzieller Barrieren für den Zugang zu hochwertiger ISO 27001 Fachliteratur\n• Ermöglichung globaler Teilhabe an Wissensressourcen unabhängig von geografischer Lage oder wirtschaftlicher Situation\n• Förderung von Bildungsgerechtigkeit und Chancengleichheit in der Informationssicherheit\n• Unterstützung von Entwicklungsländern und kleineren Organisationen beim Aufbau von Sicherheitskompetenzen\n• Schaffung einer globalen Wissensbasis, die kontinuierlich wächst und sich verbessert\n\n📚 Kollaborative Wissensentwicklung:\n• Crowdsourced Entwicklung von Leitfäden und Best-Practice-Sammlungen durch die Fachgemeinschaft\n• Peer-Review-Prozesse in offenen Plattformen für kontinuierliche Qualitätsverbesserung\n• Versionskontrolle und transparente Entwicklungshistorie für nachvollziehbare Wissensentwicklung\n• Integration verschiedener Perspektiven und Erfahrungen in gemeinsame Ressourcen\n• Aufbau von Wissensgemeinschaften rund um spezifische ISO 27001 Themen\n\n🔄 Agilität und Aktualität:\n• Schnelle Anpassung an neue Entwicklungen und sich ändernde Anforderungen\n• Kontinuierliche Updates und Verbesserungen durch Community-Beiträge\n• Echtzeit-Integration neuer Erkenntnisse und Erfahrungen\n• Flexible Anpassung an verschiedene Implementierungskontexte und Anforderungen\n• Rapid Prototyping neuer Konzepte und Methoden\n\n💡 Innovation und Experimentierung:\n• Förderung kreativer Ansätze und experimenteller Methoden\n• Plattform für neue Ideen und unkonventionelle Lösungsansätze\n• Unterstützung von Forschung und Entwicklung durch offene Datenverfügbarkeit\n• Ermöglichung von Mashups und Kombinationen verschiedener Ressourcen\n• Katalysator für technologische Innovation in der Informationssicherheit\n\n⚖️ Qualitätssicherung und Governance:\n• Entwicklung von Community-Standards und Qualitätskriterien\n• Implementierung von Moderations- und Kuratierungsprozessen\n• Balance zwischen Offenheit und Qualitätskontrolle\n• Aufbau von Reputation-Systemen für Autoren und Beiträge\n• Integration professioneller Standards in Open-Source-Entwicklung\n\n🔗 Integration und Komplementarität:\n• Ergänzung kommerzieller Literatur durch spezialisierte Open-Source-Ressourcen\n• Aufbau von Brücken zwischen akademischer Forschung und praktischer Anwendung\n• Integration in formale Bildungsprogramme und Zertifizierungskurse\n• Schaffung von Referenzimplementierungen und Beispielkonfigurationen\n• Entwicklung von Tools und Automatisierungsskripten für praktische Anwendung"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
