import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Buch page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-buch' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-buch" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie können Organisationen eine nachhaltige Literatur-Bibliothek für langfristige ISO 27001 Exzellenz aufbauen?',
        answer: "Der Aufbau einer nachhaltigen ISO 27001 Literatur-Bibliothek erfordert strategische Planung, systematische Kuratierung und kontinuierliche Pflege. Eine gut strukturierte Bibliothek wird zum strategischen Asset für langfristige Sicherheitsexzellenz und organisationales Lernen.\n\n📚 Strategische Bibliotheksarchitektur:\n• Entwicklung einer taxonomischen Struktur, die verschiedene Themenbereiche und Kompetenzstufen abdeckt\n• Integration physischer und digitaler Ressourcen für optimale Zugänglichkeit und Nutzung\n• Aufbau von Sammlungen für verschiedene Rollen und Verantwortlichkeiten in der Organisation\n• Berücksichtigung verschiedener Lernstile und Präferenzen bei der Ressourcenauswahl\n• Schaffung spezialisierter Bereiche für emerging Technologies und Zukunftstrends\n\n🔄 Dynamische Kuratierung und Aktualisierung:\n• Regelmäßige Bewertung und Aktualisierung der Sammlung basierend auf sich ändernden Anforderungen\n• Integration neuer Publikationen und Entfernung veralteter oder irrelevanter Ressourcen\n• Aufbau von Partnerschaften mit Verlagen und Autoren für frühzeitigen Zugang zu neuen Werken\n• Entwicklung von Feedback-Mechanismen für kontinuierliche Verbesserung der Sammlung\n• Monitoring von Nutzungsstatistiken und Präferenzen für datengetriebene Entscheidungen\n\n🌐 Zugänglichkeit und Nutzererfahrung:\n• Implementierung benutzerfreundlicher Katalog- und Suchsysteme für einfache Navigation\n• Entwicklung von Empfehlungsalgorithmen basierend auf Nutzerprofilen und Lernzielen\n• Schaffung von Lernpfaden und kuratierten Sammlungen für verschiedene Anwendungsfälle\n• Integration von Social Features für Bewertungen, Kommentare und Wissensaustausch\n• Bereitstellung multimodaler Zugriffsmöglichkeiten für verschiedene Arbeitsumgebungen\n\n💡 Wissensmanagement und Integration:\n• Verknüpfung der Bibliothek mit praktischen Implementierungsprojekten und Arbeitsabläufen\n• Entwicklung von Annotationssystemen und Wissensdatenbanken für erweiterte Nutzung\n• Integration mit Lernmanagementsystemen und Kompetenzentwicklungsprogrammen\n• Aufbau von Verbindungen zu externen Ressourcen und Fachgemeinschaften\n• Schaffung von Mechanismen für organisationsinternes Wissenssharing und Kollaboration"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Rolle spielen Mentoring und Wissenstransfer bei der optimalen Nutzung von ISO 27001 Fachliteratur?',
        answer: "Mentoring und systematischer Wissenstransfer sind entscheidende Erfolgsfaktoren für die optimale Nutzung von ISO 27001 Fachliteratur. Sie überbrücken die Lücke zwischen theoretischem Wissen und praktischer Anwendung und beschleunigen den Lernprozess erheblich.\n\n👥 Strukturierte Mentoring-Programme:\n• Entwicklung formaler Mentoring-Beziehungen zwischen erfahrenen Praktikern und Lernenden\n• Aufbau von Peer-to-Peer-Learning-Netzwerken für horizontalen Wissensaustausch\n• Integration von Reverse-Mentoring für bidirektionales Lernen und frische Perspektiven\n• Schaffung von Mentoring-Circles und Lerngruppen für kollektive Wissensentwicklung\n• Etablierung von Cross-Functional-Mentoring für interdisziplinäre Kompetenzentwicklung\n\n📖 Literatur-basierte Lernmethoden:\n• Gemeinsame Literaturstudien und Book Clubs für kollektive Reflexion und Diskussion\n• Entwicklung von Reading Assignments mit praktischen Anwendungsübungen\n• Integration von Case Study-Diskussionen basierend auf Literaturkonzepten\n• Aufbau von Literatur-Review-Sessions für kritische Analyse und Bewertung\n• Schaffung von Storytelling-Formaten für erfahrungsbasierte Wissensvermittlung\n\n🔄 Systematischer Wissenstransfer:\n• Entwicklung strukturierter Onboarding-Programme für neue Teammitglieder\n• Aufbau von Knowledge Repositories mit kuratierten Literaturempfehlungen\n• Integration von Lessons Learned und Best Practices in Literaturempfehlungen\n• Schaffung von Wissenslandkarten für systematische Kompetenzentwicklung\n• Etablierung von Communities of Practice für kontinuierlichen Austausch\n\n💡 Innovative Transfermethoden:\n• Nutzung von Microlearning und Just-in-Time-Delivery für bedarfsgerechte Wissensvermittlung\n• Integration von Gamification-Elementen für erhöhte Motivation und Engagement\n• Entwicklung von Simulation und Role-Playing-Übungen basierend auf Literaturkonzepten\n• Aufbau von Peer-Teaching-Programmen für aktive Wissensvermittlung\n• Schaffung von Innovation Labs für experimentelle Anwendung neuer Konzepte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie können kleine und mittlere Unternehmen trotz begrenzter Ressourcen von hochwertiger ISO 27001 Fachliteratur profitieren?',
        answer: "Kleine und mittlere Unternehmen können durch strategische Ansätze und kreative Ressourcennutzung erheblich von hochwertiger ISO 27001 Fachliteratur profitieren. Der Schlüssel liegt in der Optimierung von Kosten-Nutzen-Verhältnissen und der Nutzung kollaborativer Modelle.\n\n💰 Kostenoptimierte Beschaffungsstrategien:\n• Nutzung von Open-Source-Ressourcen und frei verfügbaren Publikationen als Grundlage\n• Aufbau von Kooperationen mit anderen KMU für gemeinsame Literaturanschaffungen\n• Nutzung von Bibliotheksdiensten und akademischen Partnerschaften für erweiterten Zugang\n• Integration von digitalen Abonnements und Pay-per-Use-Modellen für flexible Kostenstrukturen\n• Fokussierung auf hochwertige Kernressourcen statt umfangreicher Sammlungen\n\n🤝 Kollaborative Lernmodelle:\n• Aufbau von Branchennetzwerken für gemeinsame Literaturstudien und Wissensaustausch\n• Teilnahme an Fachgemeinschaften und User Groups für kostenlosen Zugang zu Expertise\n• Entwicklung von Mentoring-Partnerschaften mit größeren Organisationen\n• Nutzung von Online-Communities und Foren für praktische Unterstützung\n• Integration in regionale Sicherheitsinitiativen und Kooperationsprogramme\n\n📱 Technologie-gestützte Effizienz:\n• Nutzung von KI-Tools für automatisierte Literaturzusammenfassungen und Kernpunkt-Extraktion\n• Integration von Mobile Learning für flexibles Lernen ohne zusätzliche Infrastruktur\n• Aufbau digitaler Wissensdatenbanken für effiziente Speicherung und Abruf\n• Nutzung von Cloud-basierten Kollaborationstools für teamweites Lernen\n• Integration von Automatisierung für Routine-Aufgaben und Prozessoptimierung\n\n🎯 Fokussierte Implementierungsansätze:\n• Priorisierung kritischer Sicherheitsbereiche für gezielten Literatureinsatz\n• Entwicklung phasenweiser Implementierungsstrategien für manageable Schritte\n• Integration von Risk-based Approaches für optimale Ressourcenallokation\n• Nutzung von Templates und Frameworks für beschleunigte Umsetzung\n• Aufbau von Minimum Viable Security-Konzepten für schnelle Erfolge"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche langfristigen strategischen Vorteile entstehen durch systematische Investitionen in ISO 27001 Fachliteratur?',
        answer: "Systematische Investitionen in ISO 27001 Fachliteratur generieren nachhaltige strategische Vorteile, die weit über unmittelbare Compliance-Anforderungen hinausgehen. Sie schaffen fundamentale Wettbewerbsvorteile und organisationale Resilienz für die digitale Zukunft.\n\n🏆 Strategische Wettbewerbsvorteile:\n• Entwicklung einzigartiger Sicherheitskompetenzen, die schwer zu replizieren sind\n• Aufbau von Thought Leadership und Marktreputation als vertrauenswürdiger Partner\n• Schaffung von Innovationsfähigkeit durch Zugang zu cutting-edge Sicherheitskonzepten\n• Entwicklung von Alleinstellungsmerkmalen in umkämpften Märkten\n• Positionierung als bevorzugter Partner für sicherheitsbewusste Kunden und Stakeholder\n\n💡 Organisationale Intelligenz und Lernfähigkeit:\n• Aufbau einer lernenden Organisation mit kontinuierlicher Anpassungsfähigkeit\n• Entwicklung kritischen Denkens und Problemlösungskompetenz auf allen Ebenen\n• Schaffung einer Kultur der kontinuierlichen Verbesserung und Innovation\n• Aufbau von Resilienz gegenüber sich ändernden Bedrohungslandschaften\n• Entwicklung von Antizipationsfähigkeit für zukünftige Sicherheitsherausforderungen\n\n🌱 Nachhaltige Kompetenzentwicklung:\n• Reduzierung langfristiger Abhängigkeit von externen Beratern und Dienstleistern\n• Aufbau interner Expertise für eigenständige Problemlösung und Innovation\n• Entwicklung von Mentoring-Fähigkeiten für nachhaltige Wissensweitergabe\n• Schaffung von Karriereentwicklungsmöglichkeiten für Mitarbeiterretention\n• Aufbau einer nachhaltigen Pipeline von Sicherheitsexperten\n\n🔮 Zukunftsfähigkeit und Adaptabilität:\n• Vorbereitung auf emerging Technologies und deren Sicherheitsimplikationen\n• Entwicklung von Frameworks für schnelle Anpassung an neue regulatorische Anforderungen\n• Aufbau von Kapazitäten für proaktive Risikoidentifikation und -management\n• Schaffung von Grundlagen für Multi-Standard-Compliance und integrierte Ansätze\n• Entwicklung von Innovationsfähigkeit für zukünftige Geschäftsmodelle und Technologien\n\n📈 Messbare Geschäftsergebnisse:\n• Reduzierung von Sicherheitsvorfällen und damit verbundenen Kosten\n• Verbesserung der Operational Efficiency durch optimierte Sicherheitsprozesse\n• Erhöhung der Kundenzufriedenheit und -loyalität durch vertrauensvolle Beziehungen\n• Steigerung der Mitarbeiterproduktivität durch klare Sicherheitsrichtlinien\n• Verbesserung der Unternehmensreputation und des Markenwerts"
      }
    ]
    
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
