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
    console.log('Updating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Welche Best Practices haben sich für die Performance-Messung und kontinuierliche Verbesserung der Zusammenarbeit zwischen Datenschutzkoordinator und DPO bewährt?",
        answer: "Die Performance-Messung und kontinuierliche Verbesserung der Zusammenarbeit zwischen Datenschutzkoordinator und DPO erfordert strukturierte Ansätze, die sowohl individuelle Leistung als auch Synergie-Effekte erfassen. Erfolgreiche Organisationen implementieren umfassende Bewertungs- und Optimierungssysteme.\n\n📈 Bewährte Performance-Messung-Frameworks:\n• Balanced Scorecard-Ansätze: Integration quantitativer Metriken (Compliance-Scores, Durchlaufzeiten, Kosteneinsparungen) mit qualitativen Bewertungen (Stakeholder-Zufriedenheit, Zusammenarbeitsqualität).\n• 360-Grad-Feedback-Systeme: Umfassende Bewertung beider Rollen durch Geschäftsleitung, Fachbereiche, externe Partner und gegenseitige Einschätzung.\n• Outcome-basierte KPIs: Fokus auf Endergebnisse wie Compliance-Niveau, Risikoreduzierung und organisatorische Datenschutzreife statt nur Aktivitätsmessungen.\n• Benchmark-Vergleiche: Regelmäßiger Abgleich mit Industry Standards und Best Practice-Organisationen zur kontinuierlichen Leistungsoptimierung.\n\n🔄 Kontinuierliche Verbesserungsstrukturen:\n• Agile Review-Zyklen: Quartalsweise Retrospektiven mit strukturierter Analyse von Erfolgen, Herausforderungen und Optimierungspotenzialen.\n• Experimenteller Ansatz: Systematisches Testen neuer Kooperationsformate und Arbeitsweisen mit messbarer Erfolgsbewertung.\n• Learning Communities: Aufbau interner und externer Netzwerke zum kontinuierlichen Erfahrungsaustausch und Best Practice-Sharing.\n• Feedback-Loops: Etablierung systematischer Rückkopplungsmechanismen zwischen operativen Ergebnissen und strategischen Anpassungen der Rollengestaltung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie bereiten sich Datenschutzkoordinatoren und DPOs auf zukünftige regulatorische Entwicklungen vor und wie koordinieren sie ihre Weiterbildung?",
        answer: "Die Vorbereitung auf zukünftige regulatorische Entwicklungen erfordert proaktive Weiterbildungsstrategien und koordinierte Kompetenzentwicklung zwischen Datenschutzkoordinator und DPO. Beide Rollen müssen ihre Expertise kontinuierlich an sich wandelnde Rechtslage und technologische Entwicklungen anpassen.\n\n🔮 Antizipative Kompetenzentwicklung-Strategien:\n• Regulatory Intelligence: Systematische Beobachtung regulatorischer Trends, Gesetzgebungsverfahren und aufsichtsbehördlicher Entwicklungen mit rollenspezifischer Relevanz-Bewertung.\n• Technologie-Trendanalyse: Kontinuierliche Analyse emergierender Technologien und deren potenzielle datenschutzrechtliche Implikationen für beide Rollenprofile.\n• Szenario-Planning: Entwicklung verschiedener Zukunftsszenarien und entsprechender Kompetenzanforderungen für strategische Weiterbildungsplanung.\n• Expert-Netzwerke: Aufbau und Pflege von Verbindungen zu Regulatoren, Wissenschaft und Branchenexperten für frühzeitige Insights.\n\n📚 Koordinierte Weiterbildungs-Architekturen:\n• Komplementäre Lernpfade: Abstimmung der Weiterbildungsaktivitäten beider Rollen zur Maximierung des gemeinsamen Wissenspools ohne Redundanzen.\n• Shared Learning-Programme: Gemeinsame Teilnahme an Konferenzen, Seminaren und Zertifizierungsprogrammen mit anschließendem Wissenstransfer.\n• Internal Knowledge Sharing: Regelmäßige interne Wissenssessions, bei denen beide Rollen ihre spezialisierten Erkenntnisse teilen und diskutieren.\n• Professional Development Planning: Strukturierte Karriereentwicklungspläne, die individuelle Stärken mit organisatorischen Anforderungen und zukünftigen Herausforderungen verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche Herausforderungen entstehen beim Übergang von einer Ein-Personen-Datenschutzfunktion zu einer dualen Organisation und wie wird dieser Change-Prozess optimal gestaltet?",
        answer: "Der Übergang von einer Ein-Personen-Datenschutzfunktion zu einer dualen Organisation mit Koordinator und DPO ist ein komplexer Change-Prozess, der strukturiertes Management und sensible Kommunikation erfordert. Erfolgreiche Transformationen berücksichtigen sowohl organisatorische als auch menschliche Faktoren.\n\n🔄 Typische Transformations-Herausforderungen:\n• Rollenredefinition: Umstellung von Allround-Datenschutzfunktion auf spezialisierte Rollen erfordert Neuorientierung und möglicherweise Kompetenzentwicklung.\n• Akzeptanz-Management: Überwindung von Widerständen gegen Strukturänderungen und Befürchtungen über Machtverlust oder Kompetenzeinschränkungen.\n• Kulturelle Anpassung: Entwicklung einer Kooperationskultur in einem Bereich, der traditionell von Einzelpersonen dominiert wurde.\n• Ressourcen-Reallokation: Neuverteilung von Budgets, Technologien und Zugriffsrechten entsprechend der neuen Organisationsstruktur.\n\n🌟 Bewährte Change-Management-Strategien:\n• Partizipativer Ansatz: Einbindung der bestehenden Datenschutzfunktion in die Planung und Gestaltung der neuen Struktur für erhöhte Akzeptanz.\n• Stufenweise Implementierung: Gradueller Übergang mit Pilot-Phasen und kontinuierlicher Anpassung basierend auf Erfahrungen und Feedback.\n• Kompetenz-Bridging: Systematische Analyse vorhandener Fähigkeiten und gezielte Weiterbildung zur Vorbereitung auf die neue Rollenaufteilung.\n• Kommunikations-Intensive Begleitung: Regelmäßige Information aller Stakeholder über Fortschritte, Herausforderungen und Erfolge des Transformationsprozesses.\n• Success Story Development: Frühzeitige Identifikation und Kommunikation von Quick Wins zur Motivation und Glaubwürdigkeit der neuen Struktur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie entwickeln Unternehmen eine zukunftssichere Datenschutzorganisation, die flexibel auf sich ändernde Rollen von Koordinator und DPO reagieren kann?",
        answer: "Die Entwicklung einer zukunftssicheren Datenschutzorganisation erfordert adaptive Strukturen, die sich an verändernde regulatorische, technologische und geschäftliche Anforderungen anpassen können. Erfolgreiche Organisationen bauen Flexibilität und Lernfähigkeit in ihre Datenschutzarchitektur ein.\n\n🏗️ Prinzipien zukunftssicherer Datenschutzorganisation:\n• Modulare Strukturen: Entwicklung flexibler Organisationseinheiten, die je nach Anforderungen erweitert, reduziert oder umkonfiguriert werden können.\n• Skill-basierte Flexibilität: Aufbau breiter Kompetenzportfolios in beiden Rollen, die schnelle Anpassung an neue Herausforderungen ermöglichen.\n• Technology-enabled Adaptability: Implementierung skalierbarer Technologie-Plattformen, die verschiedene Organisationsmodelle unterstützen können.\n• Cross-functional Integration: Enge Verzahnung der Datenschutzorganisation mit anderen Unternehmensfunktionen für erhöhte Anpassungsfähigkeit.\n\n🚀 Strategische Zukunfts-Readiness-Ansätze:\n• Scenario-based Planning: Entwicklung multipler Zukunftsszenarien und entsprechender Organisationsmodelle für verschiedene regulatorische und technologische Entwicklungen.\n• Continuous Learning Architecture: Etablierung systematischer Lern- und Anpassungsmechanismen, die organisatorische Evolution ermöglichen.\n• Innovation Lab-Konzepte: Schaffung experimenteller Bereiche zur Erprobung neuer Kooperationsformen und Arbeitsweisen zwischen Koordinator und DPO.\n• Partner Ecosystem Development: Aufbau flexibler Netzwerke externer Partner und Experten zur Ergänzung interner Kapazitäten bei Bedarf.\n• Resilience Building: Entwicklung redundanter Strukturen und Backup-Systeme, die organisatorische Kontinuität auch bei grundlegenden Änderungen gewährleisten."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
