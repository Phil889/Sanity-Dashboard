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
    console.log('Updating ISO 27001 Schulung page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-schulung" not found')
    }
    
    // Create new FAQs for ROI, success measurement and future trends
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie messen und bewerten Organisationen den ROI ihrer ISO 27001 Schulungsinvestitionen?',
        answer: "Die Messung des Return on Investment von ISO 27001 Schulungen erfordert einen strukturierten Ansatz, der sowohl quantitative als auch qualitative Faktoren berücksichtigt. ADVISORI unterstützt Organisationen bei der Entwicklung umfassender Bewertungsframeworks für ihre Schulungsinvestitionen.\n\n📊 Quantitative Erfolgsmessung:\n• Reduzierung von Sicherheitsvorfällen und deren Kosten nach Schulungsmaßnahmen\n• Verkürzung der Implementierungszeiten für ISMS-Projekte durch qualifizierte Teams\n• Reduzierung externer Beratungskosten durch Aufbau interner Expertise\n• Verbesserung der Audit-Ergebnisse und Reduzierung von Nonkonformitäten\n• Messbare Steigerung der Compliance-Quote und Reduzierung regulatorischer Risiken\n\n🎯 Qualitative Leistungsindikatoren:\n• Verbesserung der Sicherheitskultur und des Bewusstseins in der Organisation\n• Erhöhung der Mitarbeiterzufriedenheit und Retention in sicherheitsrelevanten Rollen\n• Stärkung der Reputation und des Vertrauens bei Kunden und Partnern\n• Verbesserung der internen Kommunikation und Zusammenarbeit bei Sicherheitsthemen\n• Erhöhung der Innovationsfähigkeit durch sicherheitsbewusste Entwicklungsprozesse\n\n💰 Business Impact Assessment:\n• Bewertung der Auswirkungen auf Geschäftskontinuität und Verfügbarkeit\n• Analyse der Verbesserungen in Kundenvertrauen und Marktpositionierung\n• Messung der Effizienzsteigerungen in sicherheitsrelevanten Prozessen\n• Bewertung der Risikoreduktion und deren monetärer Auswirkungen\n• Analyse der Wettbewerbsvorteile durch demonstrierte Sicherheitskompetenz\n\n📈 Langfristige Wertschöpfung:\n• Aufbau nachhaltiger interner Kompetenzen und Unabhängigkeit von externen Beratern\n• Entwicklung von Multiplikatoren und internen Trainingskapazitäten\n• Schaffung einer lernenden Organisation mit kontinuierlicher Verbesserungsfähigkeit\n• Etablierung von Best Practices und organisationalem Wissen\n• Vorbereitung auf zukünftige regulatorische Anforderungen und Marktentwicklungen\n\n🔍 Kontinuierliches Monitoring und Optimierung:\n• Etablierung von KPIs und regelmäßigen Bewertungszyklen\n• Integration von Feedback-Mechanismen und kontinuierlicher Verbesserung\n• Benchmarking mit Branchenstandards und Best Practices\n• Anpassung der Schulungsstrategien basierend auf Erfolgsmessungen\n• Dokumentation von Lessons Learned und Success Stories für zukünftige Investitionsentscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Trends und Zukunftsentwicklungen prägen die ISO 27001 Schulungslandschaft?',
        answer: "Die ISO 27001 Schulungslandschaft entwickelt sich kontinuierlich weiter, getrieben von technologischen Innovationen, veränderten Arbeitsmodellen und neuen regulatorischen Anforderungen. ADVISORI bleibt an der Spitze dieser Entwicklungen und integriert zukunftsweisende Ansätze in unsere Schulungsprogramme.\n\n🤖 Künstliche Intelligenz und Automatisierung:\n• Integration von AI-gestützten Lernplattformen für personalisierte Schulungserfahrungen\n• Entwicklung intelligenter Tutoring-Systeme für kontinuierliche Kompetenzentwicklung\n• Einsatz von Machine Learning für adaptive Bewertungen und Lernpfad-Optimierung\n• Automatisierte Generierung von Schulungsinhalten basierend auf aktuellen Bedrohungslagen\n• KI-unterstützte Simulation komplexer Sicherheitsszenarien für realitätsnahes Training\n\n🌐 Remote und Hybrid Learning Evolution:\n• Entwicklung immersiver virtueller Klassenzimmer mit erweiterten Interaktionsmöglichkeiten\n• Integration von Augmented Reality für praktische Übungen in virtuellen Umgebungen\n• Aufbau globaler Lerngemeinschaften und grenzüberschreitender Expertise-Netzwerke\n• Flexible Mikrolearning-Ansätze für kontinuierliche Kompetenzentwicklung\n• Synchrone und asynchrone Lernformate für maximale Flexibilität\n\n🔒 Emerging Security Challenges:\n• Integration von Quantum Computing Sicherheitsaspekten in Schulungscurricula\n• Schulung in Zero Trust Architekturen und deren Implementierung\n• Training für Cloud-native Sicherheit und Container-Orchestrierung\n• Entwicklung von Kompetenzen für IoT und Edge Computing Sicherheit\n• Vorbereitung auf Post-Quantum Kryptographie und deren Auswirkungen\n\n📋 Regulatorische Konvergenz:\n• Integration multipler Compliance-Frameworks in einheitliche Schulungsansätze\n• Entwicklung von Cross-Standard-Kompetenzen für effiziente Compliance-Strategien\n• Training in der Navigation komplexer regulatorischer Landschaften\n• Vorbereitung auf kommende EU-Regulierungen und globale Standards\n• Schulung in der Bewertung und Integration neuer regulatorischer Anforderungen\n\n🎓 Kompetenz-basierte Zertifizierung:\n• Übergang von wissensbasierten zu kompetenzbasierten Bewertungsansätzen\n• Entwicklung praktischer Assessments und Real-World-Evaluierungen\n• Integration von Peer-Review und Community-basierter Qualitätssicherung\n• Aufbau kontinuierlicher Lernpfade mit modularen Zertifizierungsoptionen\n• Etablierung branchenweiter Kompetenzstandards und Anerkennungsverfahren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie unterstützt ADVISORI Organisationen bei der strategischen Planung ihrer ISO 27001 Schulungsroadmap?',
        answer: "ADVISORI entwickelt mit Organisationen maßgeschneiderte Schulungsroadmaps, die strategisch auf ihre Geschäftsziele, Reifegrad und Zukunftsvision abgestimmt sind. Unser systematischer Ansatz gewährleistet eine optimale Allokation von Ressourcen und maximale Wirkung der Schulungsinvestitionen.\n\n🎯 Strategische Bedarfsanalyse:\n• Umfassende Bewertung der aktuellen Sicherheitskompetenz und Organisationsreife\n• Analyse der Geschäftsstrategie und deren Auswirkungen auf Sicherheitsanforderungen\n• Identifikation kritischer Kompetenzlücken und Prioritätsbereiche\n• Bewertung regulatorischer Anforderungen und deren zeitliche Entwicklung\n• Assessment der verfügbaren Ressourcen und organisatorischen Rahmenbedingungen\n\n📅 Phasenweise Implementierungsplanung:\n• Entwicklung einer strukturierten Roadmap mit klaren Meilensteinen und Zielen\n• Priorisierung von Schulungsmaßnahmen basierend auf Risiko und Business Impact\n• Integration mit bestehenden Implementierungsprojekten und Compliance-Initiativen\n• Berücksichtigung von Abhängigkeiten und kritischen Pfaden\n• Flexible Anpassungsmöglichkeiten für veränderte Anforderungen\n\n👥 Rollenbasierte Kompetenzentwicklung:\n• Mapping von Rollen und Verantwortlichkeiten auf spezifische Schulungsbedarfe\n• Entwicklung individueller Lernpfade für verschiedene Karrierestufen\n• Integration von Succession Planning und Talent Development\n• Berücksichtigung von Organisationsveränderungen und Wachstumsplänen\n• Aufbau von Mentoring-Programmen und internen Expertise-Netzwerken\n\n💡 Innovation und Zukunftsorientierung:\n• Integration emerging Technologies und zukünftiger Sicherheitsherausforderungen\n• Vorbereitung auf regulatorische Entwicklungen und Markttrends\n• Aufbau adaptiver Lernfähigkeiten für kontinuierliche Weiterentwicklung\n• Entwicklung von Innovationskompetenzen und Experimentierräumen\n• Schaffung einer lernenden Organisation mit kontinuierlicher Verbesserungskultur\n\n📊 Monitoring und Optimierung:\n• Etablierung von Erfolgsmessungen und KPIs für die Roadmap-Umsetzung\n• Regelmäßige Reviews und Anpassungen basierend auf Lernerfahrungen\n• Integration von Feedback-Schleifen und kontinuierlicher Verbesserung\n• Benchmarking mit Branchenstandards und Best Practices\n• Dokumentation von Lessons Learned und Success Factors für zukünftige Planungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Erfolgsfaktoren sind entscheidend für nachhaltige ISO 27001 Schulungsprogramme?',
        answer: "Nachhaltige ISO 27001 Schulungsprogramme erfordern mehr als nur einmalige Trainingsmaßnahmen. ADVISORI identifiziert und implementiert die kritischen Erfolgsfaktoren, die langfristige Kompetenzentwicklung und kontinuierliche Verbesserung gewährleisten.\n\n🎯 Leadership Commitment und Sponsorship:\n• Sichtbare Unterstützung und aktive Teilnahme des Top-Managements an Schulungsinitiativen\n• Integration von Sicherheitskompetenzen in Performance-Management und Karriereentwicklung\n• Bereitstellung ausreichender Ressourcen und Budgets für kontinuierliche Weiterbildung\n• Kommunikation der strategischen Bedeutung von Informationssicherheit\n• Schaffung einer Kultur, die Lernen und kontinuierliche Verbesserung wertschätzt\n\n🔄 Kontinuierliche Lernkultur:\n• Etablierung von Lernroutinen und regelmäßigen Weiterbildungszyklen\n• Integration von Peer-Learning und Wissensaustausch in den Arbeitsalltag\n• Schaffung von Experimentierräumen und Safe-to-Fail-Umgebungen\n• Förderung von Neugier und proaktiver Kompetenzentwicklung\n• Anerkennung und Belohnung von Lernleistungen und Wissenstransfer\n\n📚 Praxisrelevanz und Anwendungsorientierung:\n• Direkte Verknüpfung von Schulungsinhalten mit realen Arbeitsaufgaben\n• Integration von aktuellen Herausforderungen und Projekten in Lernprozesse\n• Verwendung organisationsspezifischer Fallstudien und Beispiele\n• Möglichkeiten zur sofortigen Anwendung des Gelernten im Arbeitskontext\n• Regelmäßige Aktualisierung der Inhalte basierend auf neuen Entwicklungen\n\n🤝 Community Building und Netzwerkeffekte:\n• Aufbau interner Communities of Practice für kontinuierlichen Austausch\n• Vernetzung mit externen Fachexperten und Branchennetzwerken\n• Schaffung von Mentoring-Beziehungen und Wissenstransfer-Partnerschaften\n• Organisation regelmäßiger Fachveranstaltungen und Erfahrungsaustausch\n• Nutzung sozialer Lernplattformen für kollaborative Kompetenzentwicklung\n\n📈 Messbarkeit und kontinuierliche Verbesserung:\n• Etablierung klarer Lernziele und messbarer Erfolgskriterien\n• Regelmäßige Bewertung der Schulungseffektivität und des Kompetenztransfers\n• Integration von Feedback-Mechanismen und Verbesserungszyklen\n• Anpassung der Programme basierend auf Lernerfahrungen und veränderten Anforderungen\n• Dokumentation und Sharing von Best Practices und Lessons Learned"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
