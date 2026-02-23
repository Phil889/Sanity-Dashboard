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
    console.log('Updating Business Continuity Management page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-business-continuity-management" not found')
    }
    
    // Create new FAQs for Business Continuity Management fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist Business Continuity Management und warum ist es für moderne Unternehmen unverzichtbar?',
        answer: "Business Continuity Management ist ein strategischer Managementansatz, der Organisationen befähigt, kritische Geschäftsfunktionen auch während und nach disruptiven Ereignissen aufrechtzuerhalten. BCM geht weit über traditionelle Notfallplanung hinaus und etabliert eine ganzheitliche Resilienz-Kultur, die operative Exzellenz mit strategischer Vorausschau verbindet.\n\n🏗️ Systematischer Managementansatz:\n• BCM etabliert einen strukturierten Rahmen für die Identifikation, Bewertung und das Management von Geschäftskontinuitätsrisiken\n• Der Ansatz basiert auf einem kontinuierlichen Lifecycle-Prozess mit Policy-Entwicklung, Risikoanalyse, Strategieentwicklung und kontinuierlicher Verbesserung\n• Integration von Risikomanagement, Krisenmanagement und operativer Kontinuität in einem kohärenten System\n• Aufbau einer resilienten Organisationskultur, die proaktiv auf Störungen vorbereitet ist\n• Systematische Dokumentation und Kommunikation von Kontinuitätsverfahren auf allen Organisationsebenen\n\n🌐 Strategische Geschäftsrelevanz:\n• Schutz kritischer Geschäftsprozesse vor internen und externen Störungen verschiedenster Art\n• Minimierung von Ausfallzeiten und deren Auswirkungen auf Umsatz, Reputation und Stakeholder-Vertrauen\n• Erfüllung regulatorischer Anforderungen und Compliance-Vorgaben in verschiedenen Branchen\n• Wettbewerbsvorteil durch demonstrierte Resilienz und Zuverlässigkeit gegenüber Kunden und Partnern\n• Grundlage für nachhaltiges Wachstum und strategische Entscheidungsfindung in volatilen Märkten\n\n📊 Operative Vorteile und Effizienz:\n• Systematische Identifikation und Priorisierung kritischer Geschäftsprozesse und deren Abhängigkeiten\n• Entwicklung maßgeschneiderter Kontinuitätsstrategien für verschiedene Störungsszenarien\n• Optimierung von Ressourceneinsatz und Investitionen in Resilienz-Maßnahmen\n• Verbesserung der organisationalen Lernfähigkeit durch regelmäßige Tests und Übungen\n• Aufbau von Kompetenzen für adaptives Management in Krisensituationen\n\n🔗 Integration und Skalierbarkeit:\n• Nahtlose Integration mit bestehenden Managementsystemen wie ISO 9001, ISO 27001 oder ISO 14001\n• Kompatibilität mit modernen Compliance-Frameworks wie DORA, NIS2, KRITIS oder Solvency II\n• Skalierbare Implementierung von kleinen Unternehmen bis zu multinationalen Konzernen\n• Flexibilität zur Anpassung an veränderte Geschäftsmodelle und Marktbedingungen\n• Grundlage für weitere Spezialisierungen wie Cyber-Resilienz oder Supply Chain Continuity\n\n🚀 Zukunftsorientierung und Innovation:\n• Aufbau von Antizipationsfähigkeiten für emerging risks und Black Swan Events\n• Integration moderner Technologien für Monitoring, Früherkennung und automatisierte Response\n• Entwicklung einer lernenden Organisation, die aus Störungen gestärkt hervorgeht\n• Schaffung einer Basis für digitale Transformation und innovative Geschäftsmodelle\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und Anpassungsfähigkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Vorteile bietet eine professionelle BCM-Implementierung für Unternehmen?',
        answer: "Eine professionelle BCM-Implementierung bietet Unternehmen weit mehr als nur Schutz vor Störungen - sie schafft strategische Wettbewerbsvorteile, operative Effizienz und nachhaltigen Geschäftswert. Die Implementierung demonstriert nach außen Zuverlässigkeit und optimiert intern die Resilienz-Fähigkeiten der Organisation.\n\n💼 Strategische Geschäftsvorteile:\n• Signifikante Steigerung der Glaubwürdigkeit und des Vertrauens bei Kunden, Partnern und Investoren\n• Wettbewerbsdifferenzierung durch nachweisbare Resilienz und Zuverlässigkeit\n• Zugang zu neuen Märkten und Geschäftsmöglichkeiten, die BCM-Nachweis voraussetzen\n• Erfüllung von Ausschreibungsanforderungen und Compliance-Vorgaben in regulierten Branchen\n• Stärkung der Marktposition als vertrauenswürdiger und stabiler Geschäftspartner\n\n🛡️ Operative Resilienz-Verbesserungen:\n• Systematische Reduzierung von Geschäftskontinuitätsrisiken durch strukturierte Analyse und Planung\n• Verbesserung der Incident Response Fähigkeiten und Minimierung von Recovery-Zeiten\n• Optimierung der Investitionen in Resilienz-Maßnahmen durch risikobasierte Priorisierung\n• Aufbau robuster Kontinuitätsprozesse, die auch bei Personalwechsel oder Organisationsänderungen Bestand haben\n• Kontinuierliche Verbesserung der Resilienz-Fähigkeiten durch regelmäßige Tests und Lessons Learned\n\n📈 Finanzielle und operative Effizienz:\n• Reduzierung von Versicherungsprämien durch nachweisbare Risikominimierung und Präventionsmaßnahmen\n• Vermeidung kostspieliger Geschäftsunterbrechungen und deren direkte sowie indirekte Folgekosten\n• Optimierung von Ressourceneinsatz durch strukturierte Kontinuitätsplanung und -prozesse\n• Verbesserung der operativen Effizienz durch klare Verantwortlichkeiten und dokumentierte Verfahren\n• Langfristige Kosteneinsparungen durch präventive Maßnahmen und verbesserte Störungsantizipation\n\n🤝 Stakeholder-Vertrauen und Compliance:\n• Erfüllung regulatorischer Anforderungen und Vermeidung von Compliance-Strafen oder Sanktionen\n• Demonstration von Due Diligence gegenüber Aufsichtsbehörden und Regulatoren\n• Stärkung des Vertrauens von Kunden in die Zuverlässigkeit und Kontinuität der Leistungserbringung\n• Verbesserung der Beziehungen zu Geschäftspartnern durch transparente Kontinuitätsstandards\n• Positive Auswirkungen auf Kreditwürdigkeit und Bewertungen durch Rating-Agenturen\n\n🚀 Innovation und Zukunftsfähigkeit:\n• Schaffung einer soliden Basis für digitale Transformation und innovative Geschäftsmodelle\n• Aufbau von Kompetenzen für zukünftige Resilienz-Herausforderungen und emerging risks\n• Integration mit modernen Technologien und Cloud-basierten Geschäftsmodellen\n• Vorbereitung auf zukünftige regulatorische Entwicklungen und Marktanforderungen\n• Etablierung einer lernenden Organisation mit hoher Anpassungsfähigkeit an Veränderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie unterscheidet sich Business Continuity Management von traditioneller Notfallplanung und Disaster Recovery?',
        answer: "Business Continuity Management unterscheidet sich fundamental von traditioneller Notfallplanung und Disaster Recovery durch seinen ganzheitlichen, strategischen Ansatz und die Integration in alle Geschäftsprozesse. Während traditionelle Ansätze oft reaktiv und technologiezentriert sind, verfolgt BCM einen proaktiven, geschäftszentrierten Ansatz.\n\n🎯 Strategischer vs. taktischer Fokus:\n• BCM integriert Kontinuitätsplanung in die strategische Unternehmensplanung und Governance-Strukturen\n• Traditionelle Notfallplanung konzentriert sich oft auf spezifische Szenarien oder technische Ausfälle\n• BCM berücksichtigt alle Arten von Störungen und deren Auswirkungen auf kritische Geschäftsfunktionen\n• Der Ansatz umfasst präventive Maßnahmen, Response-Fähigkeiten und Recovery-Strategien in einem integrierten System\n• Kontinuierliche Verbesserung und Anpassung an veränderte Geschäfts- und Risikolandschaften\n\n🏢 Geschäftszentriert vs. technologiezentriert:\n• BCM stellt kritische Geschäftsprozesse und deren Kontinuität in den Mittelpunkt der Betrachtung\n• Disaster Recovery fokussiert primär auf die Wiederherstellung von IT-Systemen und technischer Infrastruktur\n• BCM berücksichtigt Menschen, Prozesse, Technologie und externe Abhängigkeiten gleichermaßen\n• Der Ansatz umfasst auch nicht-technische Aspekte wie Kommunikation, Lieferanten und regulatorische Anforderungen\n• Integration von operativen, finanziellen und reputationsbezogenen Auswirkungen in die Planung\n\n📊 Umfassende vs. begrenzte Risikobetrachtung:\n• BCM betrachtet das gesamte Spektrum möglicher Störungen von lokalen Ausfällen bis zu systemischen Krisen\n• Traditionelle Ansätze konzentrieren sich oft auf spezifische, bekannte Risiken oder Worst-Case-Szenarien\n• BCM entwickelt flexible Strategien, die auf verschiedene Störungsarten und -intensitäten anwendbar sind\n• Der Ansatz berücksichtigt auch emerging risks und unvorhergesehene Ereignisse\n• Systematische Analyse von Abhängigkeiten und Interdependenzen zwischen verschiedenen Geschäftsbereichen\n\n🔄 Kontinuierlicher vs. projektbasierter Ansatz:\n• BCM etabliert einen kontinuierlichen Lifecycle-Prozess mit regelmäßiger Überprüfung und Anpassung\n• Traditionelle Notfallplanung wird oft als einmaliges Projekt oder sporadische Aktivität behandelt\n• BCM integriert Testing, Übungen und kontinuierliche Verbesserung als feste Bestandteile\n• Der Ansatz umfasst Change Management und Anpassung an organisatorische Veränderungen\n• Aufbau einer Resilienz-Kultur, die über einzelne Pläne oder Verfahren hinausgeht\n\n🌐 Integrativ vs. isoliert:\n• BCM integriert sich nahtlos in bestehende Managementsysteme und Governance-Strukturen\n• Traditionelle Ansätze werden oft als separate, isolierte Aktivitäten oder Abteilungen behandelt\n• BCM schafft Synergien mit Risikomanagement, Qualitätsmanagement und anderen Disziplinen\n• Der Ansatz berücksichtigt regulatorische Anforderungen und Compliance-Verpflichtungen\n• Integration mit strategischer Planung, Budgetierung und Performance Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt die Business Impact Analysis im BCM und wie wird sie durchgeführt?',
        answer: "Die Business Impact Analysis ist das Herzstück jeder BCM-Implementierung und bildet die analytische Grundlage für alle weiteren Kontinuitätsentscheidungen. Sie identifiziert und quantifiziert systematisch die Auswirkungen von Geschäftsunterbrechungen und ermöglicht eine risikobasierte Priorisierung von Kontinuitätsmaßnahmen.\n\n🎯 Zentrale Bedeutung der BIA:\n• Die BIA identifiziert kritische Geschäftsprozesse und deren Abhängigkeiten von Ressourcen, Systemen und externen Faktoren\n• Sie quantifiziert die finanziellen, operativen und reputationsbezogenen Auswirkungen von Geschäftsunterbrechungen\n• Die Analyse bestimmt Recovery Time Objectives und Recovery Point Objectives für kritische Funktionen\n• Sie bildet die Grundlage für die Entwicklung angemessener Kontinuitätsstrategien und Investitionsentscheidungen\n• Die BIA ermöglicht eine objektive Priorisierung von Kontinuitätsmaßnahmen basierend auf Geschäftskritikalität\n\n📋 Systematische Durchführung der BIA:\n• Identifikation und Inventarisierung aller Geschäftsprozesse und deren hierarchische Strukturierung\n• Bewertung der Kritikalität jedes Prozesses basierend auf verschiedenen Auswirkungskategorien\n• Analyse von Abhängigkeiten zwischen Prozessen sowie von externen Ressourcen und Dienstleistern\n• Quantifizierung von direkten und indirekten Kosten bei Ausfall über verschiedene Zeiträume\n• Bestimmung von Maximum Tolerable Period of Disruption für jeden kritischen Prozess\n\n💰 Auswirkungsanalyse und Quantifizierung:\n• Finanzielle Auswirkungen umfassen direkte Umsatzverluste, zusätzliche Kosten und Opportunitätskosten\n• Operative Auswirkungen betreffen Produktivitätsverluste, Qualitätseinbußen und Kapazitätsreduzierungen\n• Reputationsbezogene Auswirkungen umfassen Kundenverluste, Marktanteilseinbußen und Vertrauensverluste\n• Regulatorische Auswirkungen beinhalten mögliche Strafen, Sanktionen oder Lizenzrisiken\n• Berücksichtigung von kumulativen Effekten und Eskalationsszenarien bei längeren Ausfällen\n\n🔗 Abhängigkeitsanalyse und Mapping:\n• Systematische Identifikation von internen Abhängigkeiten zwischen verschiedenen Geschäftsprozessen\n• Analyse von Abhängigkeiten von IT-Systemen, Infrastruktur und technischen Ressourcen\n• Bewertung von Personalabhängigkeiten und kritischen Kompetenzen oder Schlüsselpersonen\n• Identifikation von externen Abhängigkeiten wie Lieferanten, Dienstleistern oder Infrastrukturanbietern\n• Mapping von geografischen Abhängigkeiten und Standortrisiken\n\n📊 Ergebnisse und Handlungsableitung:\n• Erstellung einer priorisierten Liste kritischer Geschäftsprozesse mit definierten Recovery-Zielen\n• Entwicklung von Kontinuitätsstrategien basierend auf Kritikalität und verfügbaren Ressourcen\n• Bestimmung von Mindestanforderungen für die Aufrechterhaltung kritischer Funktionen\n• Identifikation von Single Points of Failure und Bereichen mit erhöhtem Kontinuitätsrisiko\n• Grundlage für Budgetplanung und Investitionsentscheidungen im Bereich Business Continuity"
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
