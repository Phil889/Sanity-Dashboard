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
    console.log('Updating MiFID II Readiness page with strategic FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-ii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-ii-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute eine nachhaltige MiFID II-Compliance-Kultur etablieren und welche Change-Management-Ansätze empfiehlt ADVISORI?",
        answer: "Die nachhaltige Verankerung von MiFID II-Compliance erfordert mehr als nur technische Lösungen und Prozessanpassungen – sie verlangt einen tiefgreifenden kulturellen Wandel. Ohne eine etablierte Compliance-Kultur bleibt die Einhaltung der komplexen MiFID II-Anforderungen fragil und abhängig von einzelnen Kontrollen. Die Schaffung einer solchen Kultur ist eine langfristige Führungsaufgabe, die systematisches Change Management und kontinuierliche Aufmerksamkeit erfordert.\n\n🌱 Schlüsselelemente einer nachhaltigen MiFID II-Compliance-Kultur:\n• Führungsverantwortung: Aktive Vorbildfunktion und klares Commitment der Führungsebene zu MiFID II-Prinzipien, nicht nur als regulatorische Pflicht, sondern als fundamentaler Bestandteil der Geschäftsstrategie.\n• Werteverankerung: Integration von Transparenz, Fairness und Kundenfokus als Kernwerte der Organisation, die die MiFID II-Philosophie widerspiegeln und in Leitbildern, Zielsystemen und Entscheidungsprozessen verankert sind.\n• Befähigung und Ownership: Systematische Befähigung aller Mitarbeiter, MiFID II-Anforderungen zu verstehen und umzusetzen, mit klarer Verantwortungszuweisung und Ownership in allen betroffenen Funktionen.\n• Kontinuierliches Lernen: Etablierung einer Lernkultur, die kontinuierliche Verbesserung fördert, aus Fehlern lernt und Best Practices über Abteilungsgrenzen hinweg teilt.\n\n🔄 Der ADVISORI-Ansatz zum MiFID II-Change-Management:\n• Cultural Readiness Assessment: Durchführung einer umfassenden Kulturanalyse zur Identifikation von Stärken, Schwächen und Barrieren für die Etablierung einer MiFID II-konformen Arbeitsweise.\n• Leadership Alignment Program: Entwicklung und Durchführung eines strukturierten Programms zur Alignment der Führungskräfte über alle Ebenen hinweg, mit klaren Verhaltenserwartungen und Kommunikationsbotschaften.\n• Integrated Communication Strategy: Konzeption einer mehrstufigen, zielgruppenspezifischen Kommunikationsstrategie, die den Sinn und Nutzen der MiFID II-Anforderungen vermittelt und zum kontinuierlichen Dialog einlädt.\n• Behavior-Change Framework: Implementation eines systematischen Frameworks zur nachhaltigen Verhaltensänderung, das Bewusstsein, Motivation, Fähigkeiten und Routinen adressiert und durch gezielte Interventionen unterstützt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen RegTech-Lösungen bei der MiFID II-Compliance und wie unterstützt ADVISORI bei deren Auswahl und Implementation?",
        answer: "RegTech-Lösungen haben sich zu einem unverzichtbaren Enabler für die effiziente und nachhaltige Einhaltung von MiFID II entwickelt. Die Komplexität und der Datenumfang der Anforderungen machen manuelle Prozesse oder generische IT-Lösungen in vielen Bereichen unpraktikabel. Spezialisierte RegTech-Tools bieten durch Automatisierung, fortschrittliche Analytik und regulatorisches Fachwissen signifikante Vorteile, müssen jedoch sorgfältig ausgewählt und implementiert werden, um ihren vollen Wert zu entfalten.\n\n💻 Schlüsselbereiche für RegTech-Einsatz bei MiFID II:\n• Transaktionsreporting: Automatisierte Lösungen zur Datenextraktion, -validierung und -übermittlung an ARMs mit integrierten Regelwerken zur korrekten Felderbefüllung und kontinuierlichem Regulatory-Update-Management.\n• Aufzeichnungspflichten: Moderne Kommunikationsaufzeichnungssysteme mit automatisierter Verschlagwortung, intelligenter Suche und compliant Archivierung für Telefongespräche, E-Mails und andere elektronische Kommunikation.\n• Kostentransparenz: Spezialisierte Tools zur automatisierten Berechnung, Aggregation und Darstellung aller direkten und indirekten Kosten für ex-ante und ex-post Offenlegungen über verschiedene Produkte und Dienstleistungen hinweg.\n• Best Execution: Fortschrittliche Analysetools zur kontinuierlichen Überwachung der Ausführungsqualität mit automatisierten Vergleichen, Ausnahmereporting und Dokumentationsfunktionen.\n\n⚙️ Der ADVISORI-Ansatz zur RegTech-Selektion und -Implementation:\n• Anforderungsbasierte Evaluationsmethodik: Entwicklung eines strukturierten, anforderungsbasierten Frameworks zur objektiven Bewertung und Auswahl von RegTech-Lösungen, das sowohl funktionale als auch nicht-funktionale Kriterien berücksichtigt.\n• Vendor Due Diligence: Durchführung einer umfassenden Due-Diligence-Prüfung potenzieller RegTech-Anbieter hinsichtlich Marktposition, Innovationskraft, Supportmodell und regulatorischer Expertise.\n• Integrationsarchitektur: Konzeption einer zukunftssicheren Integrationsarchitektur, die RegTech-Lösungen nahtlos in Ihre bestehende IT-Landschaft einbettet und Datenflüsse über Systemgrenzen hinweg optimiert.\n• Agiles Implementierungsmodell: Umsetzung eines agilen, iterativen Implementierungsansatzes, der schnelle Wertbeiträge sicherstellt und kontinuierliche Anpassungen an regulatorische Änderungen ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute die MiFID II-Anforderungen in ihre Digitalisierungsstrategie integrieren und welche Synergien identifiziert ADVISORI?",
        answer: "Die Integration von MiFID II-Anforderungen in die Digitalisierungsstrategie bietet Finanzinstituten die Chance, regulatorische Investitionen als Katalysator für die digitale Transformation zu nutzen. Anstatt MiFID II als isolierte Compliance-Initiative zu behandeln, können zukunftsorientierte Institute signifikante Synergien erschließen, indem sie regulatorische und strategische Digitalisierungsinitiativen zusammenführen. Dieser integrierte Ansatz maximiert den Return on Investment und schafft nachhaltige Wettbewerbsvorteile.\n\n🔄 Schlüsselsynergien zwischen MiFID II und Digitalisierung:\n• Kundeninteraktions-Digitalisierung: Die MiFID II-Anforderungen an Beratungsdokumentation, Eignungsprüfung und Kostentransparenz können als Treiber für die Einführung digitaler Kundeninteraktionsplattformen dienen, die sowohl Compliance als auch Kundenerlebnis verbessern.\n• Datengetriebene Organisation: Die umfangreichen Datenanforderungen von MiFID II können als Anlass genutzt werden, eine unternehmensweite Datenstrategie zu entwickeln, die regulatorische Anforderungen mit analytischen und geschäftlichen Anwendungsfällen verbindet.\n• Prozessautomatisierung: Die Notwendigkeit, manuelle Prozesse aufgrund von MiFID II zu überarbeiten, bietet die Gelegenheit, fortschrittliche Automatisierungstechnologien wie RPA, Workflow-Management und KI einzuführen, die über reine Compliance hinaus Effizienz schaffen.\n• API-Ökosystem: Die Anforderungen an Datenaustausch und -integration für MiFID II können als Grundlage für ein modernes API-Ökosystem dienen, das die Basis für zukünftige digitale Innovationen und Partnerschaften bildet.\n\n🚀 Der ADVISORI-Ansatz zur integrierten Transformation:\n• Digitale Synergiekartierung: Systematische Identifikation und Priorisierung von Synergiepotenzialen zwischen MiFID II-Anforderungen und Digitalisierungsvorhaben mit quantitativer Bewertung des Wertbeitrags.\n• Integrierte Roadmap-Entwicklung: Erstellung einer konsolidierten Transformationsroadmap, die regulatorische Meilensteine mit digitalen Innovationsinitiativen verbindet und Abhängigkeiten transparent macht.\n• Technologiearchitektur-Evolution: Konzeption einer zukunftsfähigen Technologiearchitektur, die sowohl MiFID II-Anforderungen erfüllt als auch die Basis für weitere digitale Innovationen legt.\n• Digital-Regulatory Innovation Lab: Etablierung eines dedizierten Innovation Labs, das regulatorische Expertise mit digitaler Innovationskompetenz verbindet, um neuartige Lösungen an der Schnittstelle von Compliance und Digitalisierung zu entwickeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Best Practices empfiehlt ADVISORI für eine kosteneffiziente und nachhaltige MiFID II-Implementation?",
        answer: "Die Implementierung von MiFID II stellt Finanzinstitute vor erhebliche Herausforderungen hinsichtlich Kosten, Ressourceneinsatz und Nachhaltigkeit. Ohne einen strategischen, gut durchdachten Ansatz drohen Budgetüberschreitungen, ineffiziente Ressourcenallokation und suboptimale Lösungen, die langfristig hohe Betriebskosten verursachen. Basierend auf unseren Erfahrungen aus zahlreichen erfolgreichen Implementierungsprojekten haben wir Best Practices identifiziert, die eine kosteneffiziente und zukunftssichere Umsetzung ermöglichen.\n\n💰 Best Practices für kosteneffiziente MiFID II-Implementation:\n• Priorisierungsbasierter Implementierungsansatz: Entwicklung einer risikobasierten Priorisierung, die Compliance-Anforderungen nach regulatorischer Dringlichkeit, Geschäftsrelevanz und Implementierungskomplexität bewertet und Ressourcen gezielt zuweist.\n• Wiederverwendung bestehender Lösungen: Systematische Identifikation von Möglichkeiten zur Nutzung und Erweiterung bestehender Systeme und Prozesse anstelle der Implementierung komplett neuer Lösungen, wo immer sinnvoll möglich.\n• Industriestandards und Shared Services: Nutzung von Industriestandards, Branchenlösungen und Shared-Service-Ansätzen für nicht-differenzierende Compliance-Funktionen, um Entwicklungskosten zu reduzieren und von Skaleneffekten zu profitieren.\n• Phasenweise Implementation mit Quick Wins: Gestaltung eines phasenweisen Implementierungsansatzes, der frühe Quick Wins identifiziert, schnell Wert schafft und gleichzeitig das Risiko großer Big-Bang-Einführungen minimiert.\n\n🛠️ ADVISORI's empfohlener Implementierungsansatz:\n• Modulare Compliance-Architektur: Entwicklung einer modularen, flexiblen Compliance-Architektur, die inkrementelle Implementierung ermöglicht, zukünftige regulatorische Änderungen kostengünstig integrieren kann und unnötige Redundanzen vermeidet.\n• Agiles Delivery-Modell: Einsatz agiler Implementierungsmethoden mit kurzen Iterationszyklen, kontinuierlichem Feedback und flexibler Anpassung an sich ändernde regulatorische Interpretationen und Geschäftsanforderungen.\n• Total Cost of Ownership-Optimierung: Konsequente Berücksichtigung nicht nur der initialen Implementierungskosten, sondern auch der langfristigen Betriebs-, Wartungs- und Weiterentwicklungskosten bei allen Designentscheidungen.\n• Capability Building und Wissenstransfer: Aufbau interner Kompetenzen und systematischer Wissenstransfer während der Implementierung, um langfristige externe Abhängigkeiten zu reduzieren und nachhaltige, eigenständige Compliance-Fähigkeiten zu schaffen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
