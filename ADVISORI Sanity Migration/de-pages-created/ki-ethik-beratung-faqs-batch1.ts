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
    console.log('Updating KI-Ethik-Beratung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-ethik-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-ethik-beratung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist KI-Ethik für die C-Suite mehr als nur Compliance und wie positioniert ADVISORI ethische KI als strategischen Wettbewerbsvorteil?',
        answer: "Für die Unternehmensführung ist KI-Ethik weit mehr als eine regulatorische Pflichtübung. Sie ist ein fundamentaler Baustein für nachhaltigen Geschäftserfolg und gesellschaftliche Akzeptanz in einer zunehmend KI-getriebenen Wirtschaft. ADVISORI versteht ethische KI als strategischen Enabler, der nicht nur Risiken minimiert, sondern aktiv Vertrauen schafft, Innovation fördert und langfristige Wettbewerbsvorteile generiert.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Vertrauensbildung bei Stakeholdern: Ethische KI-Systeme schaffen Vertrauen bei Kunden, Investoren, Partnern und der Gesellschaft, was sich direkt in besserer Marktakzeptanz und höherer Unternehmensbewertung niederschlägt.\n• Risikominimierung und Compliance-Sicherheit: Proaktive ethische Frameworks reduzieren regulatorische Risiken, Haftungsansprüche und potenzielle Reputationsschäden erheblich.\n• Innovation durch Verantwortung: Ethische Prinzipien fördern nachhaltige Innovation, die gesellschaftlichen Nutzen schafft und langfristig tragfähige Geschäftsmodelle ermöglicht.\n• Talentgewinnung und Mitarbeiterbindung: Unternehmen mit klaren ethischen Standards ziehen Top-Talente an und fördern eine Kultur der Verantwortung und Innovation.\n\n🏆 Der ADVISORI-Ansatz für strategische KI-Ethik:\n• Geschäftswert-orientierte Ethik-Frameworks: Wir entwickeln ethische Prinzipien, die nicht nur moralisch richtig sind, sondern auch messbare Geschäftsvorteile generieren und strategische Ziele unterstützen.\n• Proaktive Governance-Strukturen: Implementierung von AI-Ethics-Committees und Entscheidungsprozessen, die ethische Überlegungen von Anfang an in die Geschäftsstrategie integrieren.\n• Stakeholder-zentrierte Kommunikation: Entwicklung transparenter Kommunikationsstrategien, die das ethische Engagement des Unternehmens glaubwürdig nach außen tragen.\n• Kontinuierliche Wertschöpfung: Ethische KI-Systeme als Grundlage für nachhaltige Geschäftsmodelle, die gesellschaftlichen Nutzen mit wirtschaftlichem Erfolg verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert ADVISORI den ROI ethischer KI-Investitionen und welchen direkten Einfluss haben diese auf die Unternehmensbewertung und Marktposition?',
        answer: "Die Investition in ethische KI-Systeme ist eine strategische Entscheidung mit messbaren finanziellen Auswirkungen. ADVISORI entwickelt umfassende ROI-Modelle, die sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen durch ethische KI-Praktiken quantifizieren und für die C-Suite transparent machen.\n\n💰 Direkte finanzielle Auswirkungen ethischer KI:\n• Reduktion von Compliance-Kosten: Proaktive ethische Frameworks reduzieren Kosten für nachträgliche Compliance-Anpassungen, Audits und regulatorische Strafen erheblich.\n• Vermeidung von Reputationsschäden: Ethische KI-Systeme minimieren das Risiko kostspieliger PR-Krisen, Boykotte oder Vertrauensverluste, die Millionen kosten können.\n• Effizienzsteigerung durch Vertrauen: Transparente und faire KI-Systeme reduzieren Widerstand bei der Implementierung und beschleunigen die Adoption neuer Technologien.\n• Versicherungsvorteile: Nachweisbare ethische Standards können zu günstigeren Cyber-Versicherungsprämien und besseren Konditionen führen.\n\n📈 Indirekte Wertsteigerung und Marktvorteile:\n• Premium-Positionierung: Ethische KI ermöglicht Premium-Pricing für vertrauenswürdige Produkte und Services, die gesellschaftlichen Mehrwert schaffen.\n• Marktdifferenzierung: In einem zunehmend regulierten Umfeld werden ethische Standards zum entscheidenden Differenzierungsfaktor gegenüber Wettbewerbern.\n• Investoren-Attraktivität: ESG-konforme KI-Praktiken steigern die Attraktivität für nachhaltigkeitsorientierte Investoren und können die Unternehmensbewertung positiv beeinflussen.\n• Partnerschaften und Kooperationen: Ethische Standards öffnen Türen zu strategischen Partnerschaften mit anderen verantwortungsbewussten Unternehmen und Organisationen.\n\n🔍 ADVISORI ROI-Quantifizierung:\n• Entwicklung maßgeschneiderter KPI-Dashboards zur Messung ethischer Performance und deren Geschäftsauswirkungen.\n• Benchmarking gegen Branchenstandards und Best Practices zur Identifikation von Verbesserungspotenzialen.\n• Langfristige Wertmodellierung, die sowohl kurzfristige Kosten als auch langfristige Wertsteigerungen berücksichtigt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'In einer Zeit rasanter KI-Entwicklung und sich ständig ändernder ethischer Standards – wie stellt ADVISORI sicher, dass unsere Ethik-Frameworks zukunftssicher und anpassungsfähig bleiben?',
        answer: "Die Dynamik der KI-Entwicklung erfordert ethische Frameworks, die nicht nur aktuelle Standards erfüllen, sondern auch flexibel genug sind, um sich an zukünftige Entwicklungen anzupassen. ADVISORI entwickelt adaptive Ethik-Systeme, die mit der technologischen Evolution Schritt halten und gleichzeitig zeitlose ethische Prinzipien bewahren.\n\n🔄 Adaptive Ethik-Architektur als Grundprinzip:\n• Modulare Framework-Struktur: Entwicklung von Ethik-Frameworks mit modularen Komponenten, die einzeln aktualisiert werden können, ohne das gesamte System zu destabilisieren.\n• Kontinuierliches Monitoring und Assessment: Implementierung von Systemen zur laufenden Überwachung ethischer Performance und frühzeitigen Erkennung von Anpassungsbedarfen.\n• Stakeholder-Feedback-Schleifen: Etablierung regelmäßiger Konsultationen mit internen und externen Stakeholdern zur Identifikation neuer ethischer Herausforderungen.\n• Technologie-Scouting: Proaktive Beobachtung technologischer Entwicklungen und deren potenzielle ethische Implikationen für rechtzeitige Framework-Anpassungen.\n\n🌐 Zukunftsorientierte Governance-Strukturen:\n• Flexible Entscheidungsprozesse: Aufbau von AI-Ethics-Committees mit der Befugnis und den Ressourcen, schnell auf neue ethische Herausforderungen zu reagieren.\n• Szenario-basierte Planung: Entwicklung von Ethik-Szenarien für verschiedene technologische Entwicklungspfade und deren präventive Bewertung.\n• Cross-industrielle Vernetzung: Aufbau von Netzwerken mit anderen Unternehmen, Forschungseinrichtungen und Regulierungsbehörden für gemeinsames Lernen.\n• Regulatorische Antizipation: Proaktive Analyse regulatorischer Trends und frühzeitige Anpassung der Frameworks an erwartete Gesetzesänderungen.\n\n🛡️ ADVISORI Zukunftssicherung:\n• Entwicklung von Ethik-Roadmaps, die technologische und gesellschaftliche Trends berücksichtigen und präventive Anpassungsstrategien definieren.\n• Implementierung von Learning-Systemen, die aus ethischen Entscheidungen und deren Auswirkungen lernen und das Framework kontinuierlich verbessern.\n• Aufbau interner Ethik-Kompetenzen durch Schulungen und Weiterbildungen, die Ihre Teams befähigen, ethische Herausforderungen selbstständig zu bewältigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI KI-Ethik von einem potenziellen Innovationshemmnis zu einem aktiven Katalysator für Geschäftswachstum und technologische Durchbrüche?',
        answer: "Traditionell wird Ethik oft als Bremse für Innovation wahrgenommen. ADVISORI verfolgt einen revolutionären Ansatz, der ethische Prinzipien als Innovationstreiber positioniert. Für die C-Suite bedeutet dies, dass ethische KI nicht nur Risiken minimiert, sondern aktiv neue Geschäftsmöglichkeiten schafft und technologische Durchbrüche ermöglicht.\n\n🚀 Ethik als Innovationskatalysator:\n• Kreative Problemlösung durch ethische Constraints: Ethische Beschränkungen fördern kreative Lösungsansätze und führen oft zu innovativeren und nachhaltigeren Technologien.\n• Neue Marktchancen durch Vertrauen: Ethische KI-Systeme erschließen Märkte und Kundensegmente, die bei weniger vertrauenswürdigen Lösungen zurückhaltend wären.\n• Differenzierung durch Werte: Ethische Standards werden zum Alleinstellungsmerkmal in einem zunehmend homogenen Technologiemarkt.\n• Langfristige Nachhaltigkeit: Ethische Ansätze fördern nachhaltige Geschäftsmodelle, die weniger anfällig für regulatorische Eingriffe oder gesellschaftliche Ablehnung sind.\n\n💡 Strategische Innovation durch ethische Prinzipien:\n• Human-Centered Design: Ethische Überlegungen führen zu benutzerfreundlicheren und wertvolleren Produkten, die echte menschliche Bedürfnisse adressieren.\n• Inclusive Innovation: Berücksichtigung ethischer Vielfalt und Fairness führt zu Produkten, die breitere Zielgruppen ansprechen und neue Märkte erschließen.\n• Transparenz als Wettbewerbsvorteil: Offene und nachvollziehbare KI-Systeme schaffen Vertrauen und ermöglichen neue Formen der Zusammenarbeit mit Kunden und Partnern.\n• Präventive Risikominimierung: Ethische Frameworks identifizieren potenzielle Probleme frühzeitig und ermöglichen proaktive Lösungen statt reaktive Schadensbegrenzung.\n\n🎯 ADVISORI Innovation-Enablement:\n• Entwicklung von Ethics-by-Design-Methodologien, die ethische Überlegungen von Anfang an in den Innovationsprozess integrieren.\n• Aufbau von Innovation Labs, die gezielt ethische KI-Lösungen entwickeln und deren Marktpotenzial erkunden.\n• Schaffung von Ethik-Innovation-Partnerschaften mit Forschungseinrichtungen, Start-ups und anderen Unternehmen für gemeinsame Durchbrüche.\n• Implementierung von Ethik-KPIs, die Innovation und ethische Performance gleichermaßen messen und belohnen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
