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
    console.log('Updating MiFID Produkt Anlegerschutz page with strategic FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche fundamentalen Veränderungen bringt die MiFID II-Produktgovernance für Finanzinstitute mit sich und wie unterstützt ADVISORI bei der strategischen Transformation?",
        answer: "Die MiFID II-Produktgovernance-Anforderungen stellen einen Paradigmenwechsel dar, der weit über technische Compliance-Maßnahmen hinausgeht. Sie erfordern eine grundlegende Neuausrichtung der Produktentwicklungs- und Vertriebsprozesse mit dem expliziten Ziel, Kundeninteressen in den Mittelpunkt zu stellen. Diese Transformation bietet strategische Chancen für Finanzinstitute, die einen proaktiven Ansatz verfolgen.\n\n🔄 Fundamentale Veränderungen durch MiFID II-Produktgovernance:\n• Produkt-Lebenszyklus-Verantwortung: Hersteller und Vertreiber von Finanzprodukten tragen nun gemeinsam die Verantwortung für die Eignung der Produkte – von der Konzeption über den Vertrieb bis zur regelmäßigen Überprüfung.\n• Zielmarkt-Zentrierung: Produkte müssen für einen spezifischen, positiv definierten Zielmarkt entwickelt werden, wobei auch negative Zielmärkte explizit zu identifizieren sind.\n• Verteilte Verantwortlichkeiten: Klare Aufgabenteilung zwischen Produktherstellern und -vertreibern mit umfassenden Informationsflüssen und systematischer Rückkopplung.\n• Kontinuierliche Überwachung: Verpflichtung zur laufenden Bewertung und Anpassung von Produkten und Vertriebsstrategien auf Basis von Marktentwicklungen und tatsächlicher Kundennutzung.\n\n🛠️ Der ADVISORI-Transformationsansatz:\n• Strategische Positionierung: Wir helfen Ihnen, Produktgovernance nicht als regulatorische Bürde, sondern als Katalysator für Produktinnovation und verbesserte Kundenfokussierung zu nutzen.\n• Integriertes Governance-Modell: Entwicklung einer maßgeschneiderten Governance-Struktur, die regulatorische Anforderungen mit Ihren spezifischen Geschäftsmodellen und Produktportfolios in Einklang bringt.\n• Digitale Transformation: Nutzung innovativer Technologien zur Automatisierung und Skalierung der Produktgovernance-Prozesse, von der Zielmarktdefinition bis zur kontinuierlichen Überwachung.\n• Change Management: Begleitung des kulturellen Wandels in Ihrer Organisation, um die neuen Denkweisen und Verantwortlichkeiten erfolgreich zu verankern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute ein effektives Zielmarktkonzept entwickeln, das sowohl regulatorisch robust als auch geschäftlich wertvoll ist?",
        answer: "Ein strategisches Zielmarktkonzept bildet das Herzstück der MiFID II-Produktgovernance und ist entscheidend für die Erfüllung der regulatorischen Anforderungen sowie die Optimierung Ihrer Geschäftsprozesse. Die Herausforderung besteht darin, ein Konzept zu entwickeln, das sowohl die Compliance-Anforderungen erfüllt als auch einen echten geschäftlichen Mehrwert bietet.\n\n🎯 Kernelemente eines effektiven Zielmarktkonzepts:\n• Mehrdimensionales Kriterienraster: Entwicklung eines strukturierten Frameworks zur Zielmarktdefinition, das alle relevanten ESMA-Kriterien umfasst – Kundenkategorie, Kenntnisse und Erfahrungen, finanzielle Situation, Risikotoleranz, Anlageziele und -bedürfnisse.\n• Granularität und Flexibilität: Balance zwischen ausreichender Detailtiefe für regulatorische Konformität und angemessener Flexibilität für die praktische Anwendbarkeit im Vertriebsprozess.\n• Negative Zielmarktdefinition: Klare Identifikation von Kundengruppen, für die ein Produkt nicht geeignet ist, mit besonderem Fokus auf Schutz vulnerabler Kundengruppen.\n• Distributionsstrategie-Integration: Systematische Verknüpfung von Zielmarktdefinitionen mit konkreten Vertriebsstrategien und -kanälen.\n\n💡 Der ADVISORI-Ansatz für wertschöpfende Zielmarktkonzepte:\n• Datengetriebene Methodik: Nutzung vorhandener Kundendaten und Marktanalysen zur empirisch fundierten Definition von Zielmärkten, die echte Kundenbedürfnisse widerspiegeln.\n• Geschäftsmodell-Integration: Entwicklung eines Zielmarktansatzes, der Ihre spezifische Produktpalette, Kundensegmentierung und Vertriebsstruktur berücksichtigt.\n• Digitalisiertes Toolkit: Bereitstellung digitaler Tools zur effizienten Zielmarktdefinition, -validierung und -überprüfung, die in Ihre bestehenden Systeme integriert werden können.\n• Vertriebsermächtigung: Befähigung Ihres Vertriebs, das Zielmarktkonzept als wertvolles Instrument für bessere Kundenberatung und zielgerichteten Vertrieb zu nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Methodik sollte bei der Implementierung robuster Geeignetheits- und Angemessenheitsprüfungen angewandt werden und wie unterstützt ADVISORI diesen Prozess?",
        answer: "Die Geeignetheits- und Angemessenheitsprüfungen sind zentrale Mechanismen im MiFID II-Anlegerschutzkonzept und entscheidend für die Verhinderung von Fehlverkäufen. Eine methodisch fundierte Implementierung dieser Prüfungen ist essenziell für die regulatorische Compliance, aber auch für die Verbesserung der Beratungsqualität und Kundenzufriedenheit.\n\n📋 Methodische Grundlagen für robuste Eignungsprüfungen:\n• Umfassende Kundenprofilierung: Entwicklung eines strukturierten Ansatzes zur vollständigen Erfassung aller relevanten Kundenmerkmale – Kenntnisse und Erfahrungen, finanzielle Situation und Verlusttragfähigkeit, Anlageziele und Risikotoleranz.\n• Objektiviertes Bewertungssystem: Etablierung eines konsistenten, regelbasierten Systems zur Bewertung der Geeignetheit von Produkten für individuelle Kundenprofile, das subjektive Beurteilungsspielräume minimiert.\n• Gesamtvermögensbetrachtung: Integration einer ganzheitlichen Vermögensbetrachtung in die Eignungsprüfung, die bestehende Anlagen, Verbindlichkeiten und andere relevante finanzielle Aspekte berücksichtigt.\n• Dynamische Aktualisierung: Implementation eines systematischen Prozesses zur regelmäßigen Aktualisierung und Überprüfung der Kundenprofile und Eignungsbewertungen.\n\n🔍 Der ADVISORI-Implementierungsansatz:\n• End-to-End-Prozessdesign: Entwicklung eines nahtlosen Prozesses von der Kundendatenerfassung über die Eignungsbewertung bis zur Dokumentation und regelmäßigen Überprüfung.\n• Digitale Transformation: Konzeption und Implementierung digitaler Lösungen für effiziente Eignungsprüfungen mit minimalem Verwaltungsaufwand und optimierter Kundenerfahrung.\n• Regulatorisch robuste Dokumentation: Aufbau eines umfassenden Dokumentationssystems, das alle regulatorischen Anforderungen erfüllt und gleichzeitig als wertvolle Informationsquelle für die Kundenberatung dient.\n• Berater-Enablement: Schulung und Unterstützung Ihrer Berater in der effektiven Durchführung und Kommunikation von Eignungsprüfungen als Mehrwert für den Kunden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann ein effektives Produktüberwachungssystem gestaltet werden, das sowohl regulatorische Anforderungen erfüllt als auch wertvolle Geschäftseinblicke liefert?",
        answer: "Ein strategisches Produktüberwachungssystem ist mehr als eine regulatorische Pflichtübung – es ist ein wertvolles Instrument für kontinuierliche Produktoptimierung und vorausschauendes Risikomanagement. Die Herausforderung besteht darin, ein System zu etablieren, das regulatorische Anforderungen effizient erfüllt und gleichzeitig wertvolle Erkenntnisse für Ihre Geschäftsentwicklung liefert.\n\n🔄 Schlüsselkomponenten eines strategischen Produktüberwachungssystems:\n• Ganzheitliches Monitoring-Framework: Entwicklung eines umfassenden Rahmenwerks zur Überwachung aller relevanten Produkt- und Vertriebsaspekte – von der Zielmarktkonformität über die Produktperformance bis hin zu Kundenbeschwerden und Marktentwicklungen.\n• Kennzahlen-basierte Steuerung: Definition aussagekräftiger KPIs und Schwellenwerte, die frühzeitig auf potenzielle Probleme oder Optimierungsbedarf hinweisen.\n• Informationsfluss-Architektur: Etablierung effizienter Informationskanäle zwischen Produktherstellern, Vertrieb und Kunden, die einen kontinuierlichen Feedback-Loop gewährleisten.\n• Eskalations- und Anpassungsprozesse: Implementierung klarer Verfahren für die Eskalation kritischer Erkenntnisse und die systematische Anpassung von Produkten oder Vertriebsstrategien.\n\n📈 Der ADVISORI-Mehrwert bei der Produktüberwachung:\n• Datengetriebener Analyseansatz: Nutzung fortschrittlicher Datenanalysetechniken zur Identifikation von Mustern, Trends und Abweichungen in der Produktnutzung und -performance.\n• Integrierte Systemarchitektur: Entwicklung einer Überwachungslösung, die sich nahtlos in Ihre bestehenden IT-Systeme integriert und Datensilos überwindet.\n• Automatisiertes Reporting: Implementierung automatisierter Berichtssysteme, die den regulatorischen Dokumentationspflichten entsprechen und gleichzeitig Management-relevante Insights liefern.\n• Continuous Improvement Loop: Etablierung eines strukturierten Prozesses zur systematischen Nutzung von Überwachungsergebnissen für die kontinuierliche Verbesserung Ihrer Produkte und Prozesse."
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
    console.log('✅ Strategic FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
