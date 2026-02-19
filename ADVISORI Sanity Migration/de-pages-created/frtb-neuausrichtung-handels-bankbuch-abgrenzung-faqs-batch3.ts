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
    console.log('Updating FRTB Neuausrichtung Handels-Bankbuch-Abgrenzung page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-neuausrichtung-handels-bankbuch-abgrenzung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-neuausrichtung-handels-bankbuch-abgrenzung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie wirkt sich die FRTB-Abgrenzung auf die Schnittstellen zwischen Handels- und Bankbuch aus, insbesondere bei internen Risikotransfers und Hedging-Strategien?",
        answer: "Die FRTB-Regularien führen zu einer fundamentalen Neugestaltung der Schnittstellen zwischen Handels- und Bankbuch, insbesondere bei internen Risikotransfers (IRTs) und übergreifenden Hedging-Strategien. Diese Veränderungen erfordern eine strategische Neukonzeption Ihrer internen Risikomanagementprozesse und können weitreichende Auswirkungen auf Ihre Kapitaleffizienz und Geschäftsmodelle haben.\n\n🔄 Neuregulierung interner Risikotransfers unter FRTB:\n• Strikte Anerkennung von IRTs: FRTB definiert präzise Kriterien für die aufsichtsrechtliche Anerkennung interner Risikotransfers, mit unterschiedlichen Anforderungen je nach Risikotyp (Zins-, Aktien-, Kredit-, Rohstoff- und FX-Risiko).\n• Zinsrisiko-Transfers: Interne Transfers von Zinsrisiken vom Bankbuch ins Handelsbuch werden anerkannt, sofern sie wirtschaftlich begründet sind und externen Dritten gegenüber abgesichert werden.\n• Kreditrisiko-Transfers: Bei Kreditrisiken gelten besonders strenge Anforderungen – interne Transfers vom Bankbuch ins Handelsbuch werden nur anerkannt, wenn das Handelsbuch das Risiko an eine unabhängige Drittpartei transferiert.\n• Equity- und Commodity-Risiko: Interne Transfers dieser Risikotypen vom Bankbuch ins Handelsbuch werden regulatorisch grundsätzlich nicht anerkannt.\n\n🛡️ Strategische Implikationen für Hedging-Strategien:\n• Neuausrichtung der Absicherungsstrategien: Die restriktiveren Anerkennungskriterien für IRTs erfordern eine grundlegende Überprüfung und Anpassung bestehender Absicherungsstrategien, insbesondere für Bankbuchpositionen.\n• Zentralisiertes Risikomanagement: Traditionelle Modelle des zentralisierten Risikomanagements, bei denen ein zentrales Trading Desk alle Risiken der Bank konsolidiert und absichert, müssen unter FRTB neu bewertet und potenziell restrukturiert werden.\n• Externe vs. interne Absicherung: Die Notwendigkeit externer Absicherungen für die Anerkennung bestimmter IRTs führt zu einer strategischen Neubewertung interner vs. externer Hedging-Ansätze unter Berücksichtigung von Kosten, Kapitaleffizienz und operativer Komplexität.\n\n📊 ADVISORI's Ansatz zur Optimierung der Schnittstellen:\n• End-to-End-Prozessanalyse: Detaillierte Analyse Ihrer bestehenden Prozesse für interne Risikotransfers und übergreifende Hedging-Strategien im Kontext der FRTB-Anforderungen.\n• Strategische Neukonzeption: Entwicklung optimierter Prozesse und Strukturen für das Management von Risikotransfers zwischen Handels- und Bankbuch unter Berücksichtigung regulatorischer, ökonomischer und operativer Faktoren.\n• Quantitative Impact-Analyse: Präzise Quantifizierung der Kapitalauswirkungen verschiedener Hedging- und IRT-Strategien als Grundlage für strategische Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen Datenqualität und Datenverfügbarkeit bei der FRTB-konformen Neuausrichtung der Handels- und Bankbuchabgrenzung?",
        answer: "Datenqualität und -verfügbarkeit sind fundamentale Erfolgsfaktoren für die FRTB-konforme Neuausrichtung der Handels- und Bankbuchabgrenzung. Die strengen Abgrenzungskriterien und die umfassenden Dokumentationsanforderungen setzen eine solide Datenbasis voraus, die viele Institute vor erhebliche Herausforderungen stellt und strategische Investitionen in die Dateninfrastruktur erfordert.\n\n🔍 Kritische Datenanforderungen für die FRTB-konforme Abgrenzung:\n• Granulare Positionsdaten: Die präzise Klassifikation von Instrumenten gemäß FRTB-Kriterien erfordert detaillierte Attributdaten auf Einzelpositionsebene, die in vielen bestehenden Systemen nicht ausreichend verfügbar sind.\n• Historische Handelsdaten: Für die Nachweisführung der Handelsabsicht und der Erfüllung der Handelbarkeitsanforderungen sind umfangreiche historische Handelsdaten erforderlich, inklusive Handelsfrequenz, Volumen und Preisstellung.\n• Marktdaten zur Bewertung: Die Bewertbarkeit von Instrumenten nach Marktpreisen ist ein zentrales Kriterium für die Handelsbuchzuordnung und erfordert umfassende, qualitativ hochwertige Marktdaten.\n• Prozessdokumentation: Die FRTB verlangt eine lückenlose Dokumentation aller Entscheidungen zur Buchzuordnung, einschließlich der zugrundeliegenden Daten und Analysen.\n\n⚠️ Typische Datenherausforderungen und ihre strategischen Implikationen:\n• Datenfragmentierung: Relevante Daten sind oft über verschiedene Systeme und Abteilungen verteilt, was eine konsistente Klassifikation und Dokumentation erschwert.\n• Inkonsistente Datenformate: Unterschiedliche Systeme und Geschäftsbereiche verwenden oft abweichende Datenformate und -definitionen, was die einheitliche Anwendung der FRTB-Kriterien behindert.\n• Historische Datenlücken: Besonders bei der retrospektiven Anwendung der FRTB-Kriterien auf bestehende Positionen fehlen oft kritische historische Daten.\n• Manuelle Datenprozesse: Viele Institute verlassen sich auf manuelle Prozesse für die Klassifikation und Dokumentation, was zu Ineffizienzen und Inkonsistenzen führt.\n\n🛠️ ADVISORI's Ansatz zum strategischen Datenmanagement für FRTB:\n• Umfassendes Daten-Mapping: Systematische Identifikation aller für die FRTB-Abgrenzung relevanten Datenquellen und -attribute sowie Analyse von Datenlücken.\n• Datenarchitektur-Optimierung: Entwicklung einer integrierten Datenarchitektur, die alle relevanten Daten konsistent zusammenführt und für die FRTB-Abgrenzung nutzbar macht.\n• Automatisierte Datenqualitätskontrollen: Implementierung automatisierter Kontrollen zur kontinuierlichen Überwachung und Sicherstellung der Datenqualität für die FRTB-Abgrenzung.\n• Governance-Framework: Etablierung klarer Verantwortlichkeiten und Prozesse für das Management und die Pflege der für die FRTB-Abgrenzung relevanten Daten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Institute den Übergang zu den neuen FRTB-Abgrenzungsregeln effektiv managen und welche Best Practices empfiehlt ADVISORI für die Transitionsphase?",
        answer: "Der Übergang zu den neuen FRTB-Abgrenzungsregeln stellt eine komplexe Transformationsaufgabe dar, die weit über technische Anpassungen hinausgeht und ein strukturiertes Change Management erfordert. Eine strategisch durchdachte Transitionsstrategie ist entscheidend, um regulatorische Risiken zu minimieren und gleichzeitig die geschäftlichen Auswirkungen zu optimieren.\n\n🔄 Strategische Dimensionen der FRTB-Transition:\n• Regulatorische Timeline: Die Implementierung der FRTB-Abgrenzung muss im Kontext der Gesamtimplementierung der FRTB-Anforderungen und anderer regulatorischer Initiativen betrachtet werden, um Synergien zu nutzen und Ressourcenkonflikte zu vermeiden.\n• Parallellauf-Anforderungen: Während der Transitionsphase müssen oft parallele Strukturen aufrechterhalten werden, was erhebliche operationelle Herausforderungen mit sich bringt.\n• Stakeholder-Management: Die Neuausrichtung betrifft zahlreiche Stakeholder aus verschiedenen Geschäftsbereichen und Funktionen, deren Interessen und Bedenken aktiv gemanagt werden müssen.\n• Überwachung der Kapitalauswirkungen: Die schrittweise Umstellung muss kontinuierlich hinsichtlich ihrer Kapitalauswirkungen überwacht werden, um unerwartete Kapitalsprünge zu vermeiden.\n\n🛣️ ADVISORI's bewährte Transitionsstrategie:\n• Phased Approach mit klarer Roadmap: Wir empfehlen einen stufenweisen Implementierungsansatz mit klar definierten Meilensteinen, der eine kontrollierte Umstellung ermöglicht und Risiken minimiert.\n  - Phase 1: Gap-Analyse und strategische Planung\n  - Phase 2: Pilotimplementierung für ausgewählte Portfolios/Desks\n  - Phase 3: Schrittweise Ausweitung auf weitere Portfolios\n  - Phase 4: Vollständige Implementation und Optimierung\n• Portfoliopriorisierung: Identifikation von Portfolios und Trading Desks, die besonders stark von den neuen Abgrenzungsregeln betroffen sind, und priorisierte Umstellung dieser Bereiche.\n• Stakeholder-Engagement-Strategie: Entwicklung einer umfassenden Kommunikations- und Engagement-Strategie, die alle relevanten Stakeholder einbezieht und für die notwendige Akzeptanz und Unterstützung sorgt.\n• Agiles Projektmanagement: Anwendung agiler Projektmanagement-Methoden für eine flexible Anpassung an sich ändernde regulatorische Interpretationen und interne Rahmenbedingungen.\n\n⚡ Best Practices für eine erfolgreiche Transition:\n• Executive Sponsorship: Sicherstellung einer starken Unterstützung durch die Geschäftsleitung, um die notwendige Priorisierung und Ressourcenallokation zu gewährleisten.\n• Cross-funktionale Task Force: Etablierung eines interdisziplinären Teams mit Vertretern aus allen relevanten Bereichen (Handel, Risikomanagement, Finanzen, IT, Compliance) für eine koordinierte Umsetzung.\n• Frühzeitige Einbindung der Aufsicht: Proaktiver Dialog mit Aufsichtsbehörden über Interpretationsfragen und Implementierungsherausforderungen.\n• Umfassendes Testing: Gründliche Validierung aller Prozess- und Systemänderungen vor der vollständigen Implementierung, um unerwartete Auswirkungen zu vermeiden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche langfristigen strategischen Auswirkungen hat die FRTB-Neuausrichtung der Handels- und Bankbuchabgrenzung auf Geschäftsmodelle und Wettbewerbsposition von Finanzinstituten?",
        answer: "Die FRTB-Neuausrichtung der Handels- und Bankbuchabgrenzung ist mehr als eine regulatorische Compliance-Übung – sie katalysiert fundamentale Veränderungen in den Geschäftsmodellen, Produktstrategien und Wettbewerbslandschaften der Finanzindustrie. Institute, die diese strategischen Dimensionen frühzeitig erkennen und proaktiv gestalten, können signifikante Wettbewerbsvorteile erzielen.\n\n🔮 Langfristige strategische Implikationen für Geschäftsmodelle:\n• Neuausrichtung von Handelsaktivitäten: Die restriktiveren Abgrenzungskriterien und die erhöhten Kapitalkosten für bestimmte Handelsbuchaktivitäten führen zu einer strategischen Neubewertung und Fokussierung des Handelsgeschäfts.\n• Evolution der Produktpalette: Finanzinstitute werden ihre Produktangebote neu gestalten, mit stärkerem Fokus auf kapitaleffiziente Produkte und Dienstleistungen, die unter den neuen Abgrenzungsregeln vorteilhaft positioniert sind.\n• Veränderung der Kundenbeziehungen: Die veränderte Produktstrategie und Preisgestaltung wird die Kundenbeziehungen und -segmentierung beeinflussen, wobei bestimmte Kundengruppen und Transaktionstypen möglicherweise nicht mehr wirtschaftlich bedient werden können.\n• Organisatorische Transformation: Die strengere Trennung zwischen Handels- und Bankbuch erfordert klare organisatorische Grenzen und Verantwortlichkeiten, was zu strukturellen Veränderungen in der Aufbauorganisation führen kann.\n\n⚖️ Auswirkungen auf die Wettbewerbsdynamik in der Finanzindustrie:\n• Konsolidierung in bestimmten Marktsegmenten: Die erhöhten Kapitalkosten und Komplexitätsanforderungen können zu einer Konsolidierung in bestimmten Handelssegmenten führen, insbesondere in komplexen, kapitalintensiven Produktbereichen.\n• Spezialisierung vs. Universalbankenmodell: Die differenzierte Kapitalwirkung für verschiedene Geschäftsaktivitäten kann die relative Attraktivität spezialisierter Geschäftsmodelle gegenüber dem Universalbankenansatz verschieben.\n• Regionale Wettbewerbsverschiebungen: Unterschiedliche regionale Implementierungen der FRTB können zu Wettbewerbsverschiebungen zwischen verschiedenen Finanzzentren führen.\n• Neue Markteintrittschancen: Die Neuordnung der Märkte kann Nischen für innovative Fintech-Unternehmen oder spezialisierte Anbieter schaffen, die agiler auf die veränderten Rahmenbedingungen reagieren können.\n\n🧠 Strategische Handlungsoptionen für zukunftsorientierte Institute:\n• Strategische Portfolio-Optimierung: Proaktive Neuausrichtung des Produkt- und Kundenportfolios basierend auf einer detaillierten Analyse der FRTB-Auswirkungen auf die Rentabilität verschiedener Geschäftsaktivitäten.\n• Investition in Daten und Technologie: Strategische Investitionen in fortschrittliche Daten- und Analysefähigkeiten, die eine präzise Steuerung der Handels- und Bankbuchabgrenzung und damit Wettbewerbsvorteile ermöglichen.\n• Innovative Geschäftsmodelle: Entwicklung innovativer Geschäftsmodelle, die die regulatorischen Veränderungen als Chance nutzen, beispielsweise durch neue Formen der Risikoteilung oder alternative Finanzierungsstrukturen.\n• Strategische Partnerschaften: Aufbau strategischer Partnerschaften oder Allianzen, um Kompetenzen zu bündeln und die Herausforderungen der FRTB-Implementierung gemeinsam zu bewältigen."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
