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
    console.log('Updating ISO 27001 page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001" not found')
    }
    
    // Create new FAQs for ISO 27001 implementation and technical aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Schritte sind für eine erfolgreiche ISO 27001 Implementierung erforderlich?',
        answer: "Eine erfolgreiche ISO 27001 Implementierung folgt einem strukturierten, phasenorientierten Ansatz, der sowohl technische als auch organisatorische Aspekte berücksichtigt. Der Implementierungsprozess erfordert systematische Planung, kontinuierliche Überwachung und die aktive Einbindung aller Organisationsebenen für nachhaltigen Erfolg.\n\n📋 Vorbereitungsphase und Projektinitiierung:\n• Durchführung einer umfassenden Gap-Analyse zur Bewertung des aktuellen Sicherheitsstatus\n• Definition des ISMS-Anwendungsbereichs und Identifikation kritischer Informationsassets\n• Aufbau eines kompetenten Projektteams mit klaren Rollen und Verantwortlichkeiten\n• Entwicklung einer detaillierten Projektplanung mit realistischen Zeitplänen und Meilensteinen\n• Sicherstellung der Führungsunterstützung und Bereitstellung ausreichender Ressourcen\n\n🎯 ISMS-Design und Risikomanagement:\n• Entwicklung einer maßgeschneiderten Informationssicherheitspolitik und strategischen Ausrichtung\n• Systematische Risikoidentifikation und -bewertung für alle relevanten Informationsassets\n• Auswahl und Anpassung geeigneter Kontrollmaßnahmen aus Anhang A der ISO 27001\n• Design effizienter Sicherheitsprozesse, die in bestehende Geschäftsabläufe integriert werden\n• Entwicklung einer robusten Governance-Struktur mit klaren Entscheidungswegen\n\n🔧 Implementierung und operative Umsetzung:\n• Schrittweise Einführung der definierten Kontrollmaßnahmen und Sicherheitsprozesse\n• Aufbau oder Anpassung der technischen Infrastruktur entsprechend den Sicherheitsanforderungen\n• Entwicklung umfassender Dokumentation einschließlich Richtlinien, Verfahren und Arbeitsanweisungen\n• Durchführung gezielter Schulungs- und Awareness-Programme für alle Mitarbeiter\n• Etablierung von Monitoring- und Messsystemen zur kontinuierlichen Überwachung der ISMS-Effektivität\n\n✅ Validierung und kontinuierliche Verbesserung:\n• Durchführung interner Audits zur Überprüfung der ISMS-Konformität und Wirksamkeit\n• Management Review zur strategischen Bewertung und Weiterentwicklung des ISMS\n• Behandlung von Nonkonformitäten und Implementierung von Korrekturmaßnahmen\n• Vorbereitung auf das externe Zertifizierungsaudit durch akkreditierte Zertifizierungsstellen\n• Etablierung eines kontinuierlichen Verbesserungsprozesses für nachhaltige ISMS-Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt Risikomanagement in ISO 27001 und wie wird es praktisch umgesetzt?',
        answer: "Risikomanagement bildet das Herzstück von ISO 27001 und ist der zentrale Mechanismus für die Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken. Der risikobasierte Ansatz ermöglicht es Organisationen, ihre Sicherheitsmaßnahmen gezielt auf die wichtigsten Bedrohungen auszurichten und Ressourcen optimal zu allokieren.\n\n🎯 Risikobasierter Ansatz als Grundprinzip:\n• ISO 27001 verlangt einen systematischen, risikobasierten Ansatz für alle ISMS-Entscheidungen\n• Risikomanagement durchdringt alle Phasen des ISMS-Lebenszyklus von der Planung bis zur kontinuierlichen Verbesserung\n• Individuelle Risikobewertung ermöglicht maßgeschneiderte Sicherheitsmaßnahmen statt standardisierter Lösungen\n• Kontinuierliche Risikobewertung gewährleistet Anpassung an veränderte Bedrohungslandschaften\n• Integration von Geschäftskontext und strategischen Zielen in die Risikobewertung\n\n📊 Systematische Risikoidentifikation und -bewertung:\n• Umfassende Inventarisierung aller Informationsassets und deren Klassifizierung nach Kritikalität\n• Identifikation relevanter Bedrohungen unter Berücksichtigung interner und externer Faktoren\n• Bewertung bestehender Schwachstellen und deren Ausnutzbarkeit durch identifizierte Bedrohungen\n• Quantitative oder qualitative Risikobewertung basierend auf Eintrittswahrscheinlichkeit und Auswirkungen\n• Dokumentation aller Risikobewertungen mit nachvollziehbaren Begründungen und Annahmen\n\n🛡️ Strategische Risikobehandlung:\n• Entwicklung von Risikobehandlungsplänen mit klaren Prioritäten und Verantwortlichkeiten\n• Auswahl geeigneter Risikobehandlungsoptionen: Vermeidung, Reduzierung, Übertragung oder Akzeptanz\n• Implementierung von Kontrollmaßnahmen basierend auf Kosten-Nutzen-Analysen\n• Definition von Restrisiken und deren formale Akzeptanz durch die Geschäftsleitung\n• Regelmäßige Überprüfung und Anpassung der Risikobehandlungsstrategien\n\n🔄 Kontinuierliches Risikomanagement:\n• Etablierung regelmäßiger Risikobewertungszyklen entsprechend der Geschäftsdynamik\n• Integration von Risikomanagement in Change Management Prozesse\n• Monitoring von Risikoindikatoren und Frühwarnsystemen\n• Incident Management als Input für die kontinuierliche Risikobewertung\n• Anpassung der Risikomanagement-Methodik basierend auf Erfahrungen und Best Practices\n\n📈 Praktische Umsetzungstools:\n• Verwendung strukturierter Risikobewertungsmatrizen und standardisierter Bewertungskriterien\n• Einsatz von Risikomanagement-Software für effiziente Dokumentation und Nachverfolgung\n• Entwicklung von Risiko-Dashboards für Management-Reporting und Entscheidungsunterstützung\n• Integration mit anderen Managementsystemen für ganzheitliche Risikosicht\n• Aufbau interner Risikomanagement-Kompetenzen durch Schulungen und Zertifizierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie unterscheidet sich ISO 27001 von anderen Sicherheitsstandards und Frameworks?',
        answer: "ISO 27001 unterscheidet sich von anderen Sicherheitsstandards durch seinen ganzheitlichen Managementsystem-Ansatz, seine internationale Zertifizierbarkeit und die systematische Integration von Informationssicherheit in alle Geschäftsprozesse. Diese Charakteristika machen ihn zu einem einzigartigen Standard im Bereich der Informationssicherheit.\n\n🏆 Managementsystem-Ansatz vs. technische Standards:\n• ISO 27001 ist ein Managementsystem-Standard, der organisatorische, technische und physische Sicherheitsaspekte integriert\n• Fokus auf kontinuierliche Verbesserung durch den Plan-Do-Check-Act-Zyklus\n• Systematische Integration von Informationssicherheit in Geschäftsstrategie und operative Prozesse\n• Ganzheitlicher Ansatz, der Menschen, Prozesse und Technologie gleichermaßen berücksichtigt\n• Langfristige Perspektive auf Informationssicherheit als strategischen Geschäftsfaktor\n\n🌐 Internationale Zertifizierbarkeit und Anerkennung:\n• Einziger international zertifizierbarer Standard für Informationssicherheitsmanagementsysteme\n• Weltweite Anerkennung und Akzeptanz in über 160 Ländern\n• Akkreditierte Zertifizierungsstellen gewährleisten einheitliche Bewertungsstandards\n• Gegenseitige Anerkennung von Zertifikaten zwischen verschiedenen Ländern\n• Vergleichbarkeit und Transparenz für internationale Geschäftsbeziehungen\n\n🔄 Flexibilität vs. prescriptive Ansätze:\n• Risikobasierter Ansatz ermöglicht maßgeschneiderte Lösungen statt starrer Vorgaben\n• Anpassungsfähigkeit an verschiedene Branchen, Unternehmensgrößen und Geschäftsmodelle\n• Technologieneutralität gewährleistet Zukunftsfähigkeit und Innovation\n• Skalierbarkeit von kleinen Unternehmen bis zu multinationalen Konzernen\n• Integration mit bestehenden Managementsystemen und Compliance-Frameworks\n\n📋 Vergleich mit anderen Standards:\n• NIST Cybersecurity Framework: Fokus auf kritische Infrastrukturen, weniger formalisiert\n• COBIT: IT-Governance-orientiert, weniger spezifisch für Informationssicherheit\n• PCI DSS: Branchenspezifisch für Zahlungskartenindustrie, technisch fokussiert\n• SOC 2: Audit-Standard für Service-Organisationen, weniger umfassend\n• GDPR: Datenschutz-fokussiert, ergänzt aber nicht ersetzt umfassende Informationssicherheit\n\n🎯 Strategische Positionierung:\n• ISO 27001 als Basis-Standard, der mit anderen Frameworks kombiniert werden kann\n• Komplementäre Nutzung mit branchenspezifischen Standards und Regulierungen\n• Fundament für weitere ISO 27000-Familie Standards wie ISO 27002, ISO 27005\n• Integration mit modernen Compliance-Anforderungen wie DORA, NIS2, EU Cybersecurity Act\n• Grundlage für spezialisierte Zertifizierungen und Branchenlösungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche häufigen Herausforderungen treten bei der ISO 27001 Implementierung auf und wie können sie bewältigt werden?',
        answer: "Die ISO 27001 Implementierung bringt verschiedene Herausforderungen mit sich, die von organisatorischen Widerständen bis hin zu technischen Komplexitäten reichen. Ein proaktiver Umgang mit diesen Herausforderungen und bewährte Lösungsansätze sind entscheidend für den Implementierungserfolg und die nachhaltige ISMS-Etablierung.\n\n👥 Organisatorische und kulturelle Herausforderungen:\n• Widerstand gegen Veränderungen und neue Sicherheitsprozesse in der Organisation\n• Mangelnde Führungsunterstützung und unzureichende Ressourcenbereitstellung\n• Fehlende Sicherheitskultur und ungenügendes Bewusstsein für Informationssicherheit\n• Konkurrierende Prioritäten und Zeitdruck bei der Projektdurchführung\n• Schwierigkeiten bei der Integration von Sicherheitsanforderungen in bestehende Geschäftsprozesse\n\n🔧 Technische und operative Komplexitäten:\n• Komplexe IT-Landschaften mit Legacy-Systemen und heterogenen Technologien\n• Schwierigkeiten bei der Risikoidentifikation und -bewertung in dynamischen Umgebungen\n• Herausforderungen bei der Implementierung technischer Kontrollmaßnahmen\n• Integration verschiedener Sicherheitstools und -systeme\n• Balancing zwischen Sicherheitsanforderungen und operativer Effizienz\n\n📚 Dokumentations- und Compliance-Herausforderungen:\n• Übermäßige Dokumentation, die operative Effizienz beeinträchtigt\n• Schwierigkeiten bei der Aufrechterhaltung aktueller und relevanter Dokumentation\n• Komplexität bei der Nachweisführung für Audit-Zwecke\n• Herausforderungen bei der Interpretation von Standard-Anforderungen\n• Integration mit anderen Compliance-Frameworks und regulatorischen Anforderungen\n\n💡 Bewährte Lösungsansätze:\n• Entwicklung einer umfassenden Change Management Strategie mit klarer Kommunikation\n• Aufbau von Sicherheitsbotschaftern und Multiplikatoren in allen Unternehmensbereichen\n• Schrittweise Implementierung mit Quick Wins zur Demonstration des Mehrwerts\n• Investition in Schulungen und Kompetenzentwicklung für interne Teams\n• Nutzung externer Expertise und bewährter Implementierungsmethoden\n\n🚀 Erfolgsfaktoren für nachhaltige Implementierung:\n• Klare Definition von Zielen, Erfolgskriterien und Messgrößen\n• Regelmäßige Kommunikation von Fortschritten und Erfolgen\n• Kontinuierliche Anpassung der Implementierungsstrategie basierend auf Erfahrungen\n• Aufbau einer lernenden Organisation mit kontinuierlicher Verbesserungskultur\n• Integration von ISMS-Zielen in Mitarbeiterbeurteilungen und Anreizsysteme"
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
