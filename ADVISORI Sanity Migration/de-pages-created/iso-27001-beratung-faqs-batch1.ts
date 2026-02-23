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
    console.log('Updating ISO 27001 Beratung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-beratung" not found')
    }
    
    // Create new FAQs for ISO 27001 consulting fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist strategische ISO 27001 Beratung entscheidend für den nachhaltigen Implementierungserfolg?',
        answer: "Strategische ISO 27001 Beratung geht weit über die reine Compliance-Erfüllung hinaus und positioniert Informationssicherheit als strategischen Enabler für Geschäftserfolg. Eine professionelle Beratung transformiert ISO 27001 von einer regulatorischen Anforderung zu einem Wettbewerbsvorteil, der Vertrauen schafft, Risiken minimiert und operative Exzellenz fördert.\n\n🎯 Strategische Geschäftsausrichtung:\n• Entwicklung einer ISMS-Strategie, die nahtlos in die übergeordneten Unternehmensziele integriert ist und diese unterstützt\n• Schaffung eines Business Case, der den konkreten Mehrwert von Informationssicherheitsinvestitionen quantifiziert\n• Positionierung von ISO 27001 als Vertrauensbildner gegenüber Kunden, Partnern und Stakeholdern\n• Integration in bestehende Governance-Strukturen und Entscheidungsprozesse für nachhaltige Verankerung\n• Entwicklung einer langfristigen Roadmap, die zukünftige Geschäftsentwicklungen und regulatorische Änderungen antizipiert\n\n🏗️ Methodische Implementierungsexzellenz:\n• Anwendung bewährter Projektmanagement-Methoden und Change-Management-Prinzipien für strukturierte Umsetzung\n• Risikominimierung durch systematische Planung und kontinuierliche Qualitätssicherung\n• Optimierung von Ressourceneinsatz und Zeitplänen durch erfahrungsbasierte Best Practices\n• Vermeidung kostspieliger Implementierungsfehler durch professionelle Begleitung und Qualitätskontrolle\n• Sicherstellung der Nachhaltigkeit durch Aufbau interner Kompetenzen und Verantwortlichkeiten\n\n🔄 Ganzheitliche Systemintegration:\n• Nahtlose Integration des ISMS in bestehende Managementsysteme und Geschäftsprozesse\n• Harmonisierung mit anderen Compliance-Frameworks wie DORA, NIS2, GDPR für Synergieeffekte\n• Entwicklung effizienter Prozesse, die operative Exzellenz fördern statt behindern\n• Schaffung einer einheitlichen Sicherheitskultur, die alle Organisationsebenen durchdringt\n• Etablierung von Monitoring- und Verbesserungsmechanismen für kontinuierliche Optimierung\n\n💡 Zukunftsorientierte Wertschöpfung:\n• Aufbau einer adaptiven Sicherheitsarchitektur, die sich an verändernde Bedrohungslandschaften anpassen kann\n• Entwicklung von Kompetenzen und Strukturen, die über die initiale Zertifizierung hinaus Mehrwert schaffen\n• Positionierung als vertrauenswürdiger Partner in der digitalen Wirtschaft\n• Schaffung von Grundlagen für weitere Zertifizierungen und Compliance-Anforderungen\n• Etablierung einer lernenden Organisation, die proaktiv auf neue Herausforderungen reagieren kann"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich ADVISORI Beratungsansatz von standardisierten ISO 27001 Implementierungen?',
        answer: "ADVISORI verfolgt einen differenzierten Beratungsansatz, der über standardisierte Implementierungsschablonen hinausgeht und maßgeschneiderte Lösungen entwickelt, die optimal auf die spezifischen Bedürfnisse, Herausforderungen und strategischen Ziele jedes Unternehmens abgestimmt sind. Unser Ansatz kombiniert tiefgreifende Fachexpertise mit innovativen Methoden und bewährten Praktiken.\n\n🔬 Tiefgreifende Kontextanalyse:\n• Umfassende Analyse der Unternehmenskultur, Geschäftsmodelle und strategischen Ausrichtung als Grundlage für die ISMS-Konzeption\n• Detaillierte Bewertung der bestehenden IT-Landschaft, Prozessarchitektur und Organisationsstrukturen\n• Identifikation branchenspezifischer Risiken, regulatorischer Anforderungen und Compliance-Herausforderungen\n• Analyse der Stakeholder-Landschaft und deren spezifische Erwartungen an Informationssicherheit\n• Bewertung der organisatorischen Reife und Change-Bereitschaft für optimale Implementierungsstrategien\n\n🎨 Maßgeschneiderte Lösungsarchitektur:\n• Entwicklung individueller ISMS-Architekturen, die perfekt zu Ihrer Organisationsstruktur und Ihren Geschäftsprozessen passen\n• Anpassung von Kontrollmaßnahmen an spezifische Risikoprofile und operative Anforderungen\n• Integration innovativer Technologien und Automatisierungsansätze für effiziente Sicherheitsprozesse\n• Berücksichtigung zukünftiger Wachstumspläne und strategischer Initiativen in der ISMS-Planung\n• Entwicklung flexibler Frameworks, die sich an verändernde Geschäftsanforderungen anpassen können\n\n🚀 Innovative Methodiken und Tools:\n• Einsatz modernster Risikobewertungstools und datengetriebener Analysemethoden\n• Anwendung agiler Projektmanagement-Prinzipien für flexible und responsive Implementierung\n• Nutzung von Automatisierungstools für effiziente Dokumentation und Prozessmanagement\n• Integration von KI-gestützten Monitoring- und Analysesystemen für proaktive Sicherheitsüberwachung\n• Verwendung interaktiver Workshops und Gamification-Ansätze für effektives Change Management\n\n🌐 Ganzheitliche Compliance-Integration:\n• Simultane Berücksichtigung multipler Compliance-Frameworks für maximale Synergieeffekte\n• Proaktive Integration zukünftiger regulatorischer Entwicklungen in die ISMS-Architektur\n• Entwicklung einheitlicher Governance-Strukturen für alle Compliance-Bereiche\n• Schaffung effizienter Audit- und Reporting-Prozesse für multiple Standards\n• Aufbau einer zukunftsfähigen Compliance-Infrastruktur, die sich an neue Anforderungen anpassen kann\n\n🎯 Ergebnisorientierte Erfolgsmessung:\n• Definition klarer, messbarer Erfolgskriterien und KPIs für alle Implementierungsphasen\n• Kontinuierliches Monitoring und Anpassung der Implementierungsstrategie basierend auf Zwischenergebnissen\n• Regelmäßige Stakeholder-Kommunikation und Transparenz über Fortschritte und Herausforderungen\n• Aufbau nachhaltiger Verbesserungsmechanismen für kontinuierliche ISMS-Optimierung\n• Sicherstellung langfristiger Wertschöpfung durch strategische Erfolgsmessung und -steuerung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche konkreten Vorteile bietet eine professionelle Gap-Analyse vor der ISO 27001 Implementierung?',
        answer: "Eine professionelle Gap-Analyse bildet das strategische Fundament für eine erfolgreiche ISO 27001 Implementierung und bietet weit mehr als eine einfache Checklisten-Abarbeitung. Sie schafft Transparenz, minimiert Risiken und optimiert Ressourceneinsatz durch systematische Bewertung des aktuellen Zustands und strategische Roadmap-Entwicklung.\n\n📊 Strategische Transparenz und Risikominimierung:\n• Vollständige Transparenz über den aktuellen Reifegrad Ihrer Informationssicherheit und bestehende Sicherheitslücken\n• Identifikation kritischer Schwachstellen und Prioritätensetzung basierend auf Risikobewertung und Business Impact\n• Realistische Einschätzung des Implementierungsaufwands und der erforderlichen Ressourcen\n• Frühzeitige Erkennung potenzieller Implementierungshindernisse und Entwicklung von Lösungsstrategien\n• Schaffung einer soliden Datenbasis für fundierte Entscheidungen und Budgetplanung\n\n🎯 Optimierte Ressourcenallokation:\n• Präzise Kostenschätzung für alle Implementierungsphasen basierend auf dem identifizierten Handlungsbedarf\n• Priorisierung von Maßnahmen nach Risiko, Aufwand und strategischer Bedeutung für maximale Effizienz\n• Identifikation von Quick Wins und kurzfristigen Verbesserungsmöglichkeiten für sofortige Sicherheitssteigerung\n• Optimierung der Projektlaufzeit durch parallele Umsetzung unabhängiger Maßnahmen\n• Vermeidung von Doppelarbeiten durch systematische Analyse bestehender Sicherheitsmaßnahmen\n\n🔄 Strategische Roadmap-Entwicklung:\n• Entwicklung einer detaillierten, phasenorientierten Implementierungsroadmap mit klaren Meilensteinen\n• Integration in bestehende Unternehmensprojekte und strategische Initiativen für Synergieeffekte\n• Berücksichtigung von Geschäftszyklen und operativen Anforderungen bei der Zeitplanung\n• Flexible Anpassungsmöglichkeiten für veränderte Geschäftsanforderungen oder Prioritäten\n• Aufbau einer nachhaltigen Verbesserungskultur durch kontinuierliche Gap-Bewertung\n\n💼 Business-orientierte Nutzenmaximierung:\n• Identifikation von Bereichen, in denen ISO 27001 Implementierung direkten Business Value schaffen kann\n• Analyse von Synergiepotenzialen mit anderen Managementsystemen und Compliance-Anforderungen\n• Bewertung der Auswirkungen auf Kundenvertrauen, Marktpositionierung und Wettbewerbsfähigkeit\n• Entwicklung von Kommunikationsstrategien für interne und externe Stakeholder\n• Schaffung von Grundlagen für zukünftige Zertifizierungen und Compliance-Erweiterungen\n\n🛡️ Proaktive Compliance-Vorbereitung:\n• Frühzeitige Identifikation regulatorischer Anforderungen und deren Integration in die Implementierungsplanung\n• Vorbereitung auf zukünftige Compliance-Entwicklungen wie DORA, NIS2 und EU-Cybersecurity-Strategien\n• Entwicklung einer robusten Dokumentationsstruktur, die Audit-Anforderungen optimal unterstützt\n• Aufbau von Monitoring- und Reporting-Mechanismen für kontinuierliche Compliance-Überwachung\n• Schaffung einer soliden Basis für erfolgreiche Zertifizierungsaudits und langfristige Compliance-Sicherung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet ADVISORI die nachhaltige Verankerung von ISO 27001 in der Unternehmenskultur?',
        answer: "Die nachhaltige Verankerung von ISO 27001 in der Unternehmenskultur ist entscheidend für den langfristigen Erfolg und geht weit über die reine Zertifizierung hinaus. ADVISORI entwickelt ganzheitliche Change-Management-Strategien, die Informationssicherheit zu einem natürlichen Bestandteil der täglichen Arbeitsweise machen und eine selbsttragende Sicherheitskultur schaffen.\n\n🌱 Kultureller Wandel und Bewusstseinsbildung:\n• Entwicklung einer umfassenden Change-Management-Strategie, die alle Organisationsebenen einbezieht und kulturelle Veränderungen systematisch fördert\n• Schaffung von Sicherheitsbewusstsein durch zielgruppenspezifische Kommunikation und Sensibilisierungsmaßnahmen\n• Integration von Informationssicherheit in bestehende Unternehmenswerte und Verhaltenskodizes\n• Aufbau von Sicherheitsbotschaftern und Multiplikatoren in allen Unternehmensbereichen\n• Entwicklung einer positiven Sicherheitskultur, die Sicherheit als Enabler statt als Hindernis positioniert\n\n👥 Kompetenzentwicklung und Empowerment:\n• Systematischer Aufbau interner Kompetenzen durch rollenspezifische Schulungs- und Entwicklungsprogramme\n• Qualifizierung interner ISMS-Verantwortlicher und Sicherheitsexperten für eigenständige Systembetreuung\n• Entwicklung von Mentoring-Programmen und Wissenstransfer-Mechanismen\n• Schaffung klarer Karrierepfade und Entwicklungsmöglichkeiten im Bereich Informationssicherheit\n• Aufbau einer lernenden Organisation, die kontinuierlich ihre Sicherheitskompetenzen erweitert\n\n🔄 Prozessintegration und Operationalisierung:\n• Nahtlose Integration von Sicherheitsprozessen in bestehende Geschäftsabläufe ohne operative Behinderung\n• Entwicklung effizienter und benutzerfreundlicher Sicherheitsverfahren, die natürlich in den Arbeitsalltag integriert sind\n• Automatisierung wiederkehrender Sicherheitsaufgaben zur Reduzierung des manuellen Aufwands\n• Schaffung von Feedback-Mechanismen für kontinuierliche Prozessverbesserung\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und Innovation im Sicherheitsbereich\n\n📈 Kontinuierliche Motivation und Engagement:\n• Entwicklung von Anreizsystemen und Anerkennungsprogrammen für sicherheitsbewusstes Verhalten\n• Regelmäßige Kommunikation von Sicherheitserfolgen und deren Beitrag zum Unternehmenserfolg\n• Schaffung von Partizipationsmöglichkeiten für Mitarbeiter bei der Weiterentwicklung des ISMS\n• Integration von Sicherheitszielen in Mitarbeiterbeurteilungen und Zielvereinbarungen\n• Aufbau einer Community of Practice für Informationssicherheit mit regelmäßigem Austausch\n\n🎯 Nachhaltige Governance und Steuerung:\n• Etablierung robuster Governance-Strukturen mit klaren Verantwortlichkeiten und Entscheidungswegen\n• Entwicklung von KPIs und Metriken zur kontinuierlichen Überwachung der Kulturentwicklung\n• Regelmäßige Bewertung und Anpassung der Sicherheitskultur basierend auf Feedback und Erfahrungen\n• Integration von Sicherheitsaspekten in strategische Planungs- und Entscheidungsprozesse\n• Aufbau einer zukunftsfähigen Sicherheitsorganisation, die sich an verändernde Anforderungen anpassen kann"
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
