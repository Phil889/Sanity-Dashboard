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
    console.log('Updating MiFID Produkt Anlegerschutz page with strategic FAQs batch 2...')
    
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
        question: "Welche technologischen Ansätze empfiehlt ADVISORI zur Automatisierung und Digitalisierung von MiFID II-Anlegerschutzprozessen?",
        answer: "Die technologische Unterstützung ist ein entscheidender Erfolgsfaktor für die effiziente Implementierung und nachhaltige Einhaltung der MiFID II-Anlegerschutzanforderungen. Eine durchdachte Digitalisierungsstrategie ermöglicht nicht nur regulatorische Compliance mit reduziertem operativem Aufwand, sondern kann auch das Kundenerlebnis signifikant verbessern und wertvolle Geschäftseinblicke generieren.\n\n💻 Schlüsseltechnologien für die MiFID II-Digitalisierung:\n• Regelbasierte Entscheidungssysteme: Implementierung intelligenter Algorithmen zur automatisierten Bewertung der Produkteignung für spezifische Kundenprofile auf Basis klar definierter Regeln und Kriterien.\n• Digitale Kundenprofilierung: Einsatz interaktiver, nutzerfreundlicher Tools zur umfassenden Erfassung relevanter Kundeninformationen mit automatischer Vollständigkeits- und Plausibilitätsprüfung.\n• Workflow-Automatisierung: Durchgängige Digitalisierung des Beratungs- und Dokumentationsprozesses mit automatisierten Workflows, Freigabestufen und Eskalationswegen.\n• Integrierte Datenarchitektur: Schaffung einer konsolidierten Datenbasis, die Produkt-, Kunden- und Transaktionsdaten verknüpft und für Compliance-Zwecke und Geschäftsanalysen nutzbar macht.\n\n🚀 Der ADVISORI-Digitalisierungsansatz:\n• Technologie-Strategie: Entwicklung einer maßgeschneiderten Digitalisierungsstrategie, die Ihre bestehende IT-Landschaft, Geschäftsprozesse und langfristigen Digitalziele berücksichtigt.\n• Modularer Lösungsansatz: Design modularer Technologiekomponenten, die schrittweise implementiert werden können und maximale Flexibilität bei minimalen Implementierungsrisiken bieten.\n• Systemintegration: Nahtlose Integration der neuen Lösungen in Ihre bestehende IT-Infrastruktur, CRM-Systeme und Beratungstools mit Fokus auf konsistente Datenflüsse.\n• User Experience Design: Gestaltung intuitiver Benutzeroberflächen, die sowohl für Ihre Berater als auch für Kunden eine positive Erfahrung schaffen und die Akzeptanz der neuen Prozesse fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute den kulturellen Wandel zu mehr Anlegerschutz effektiv gestalten und welche Unterstützung bietet ADVISORI in diesem Transformationsprozess?",
        answer: "Die erfolgreiche Implementierung der MiFID II-Anlegerschutzanforderungen erfordert weit mehr als technische und prozessuale Anpassungen – sie bedingt einen fundamentalen kulturellen Wandel innerhalb der Organisation. Dieser Kulturwandel betrifft insbesondere die Kundenberatung, wo eine echte Kundenzentrierung und höchste ethische Standards zur gelebten Praxis werden müssen.\n\n🔄 Dimensionen des kulturellen Wandels im MiFID II-Kontext:\n• Paradigmenwechsel in der Beratungsphilosophie: Transformation von einem produktorientierten zu einem kundenorientierten Beratungsansatz mit ehrlicher Bedarfsermittlung und individueller Lösungsfindung.\n• Neues Rollenverständnis der Berater: Entwicklung eines Selbstverständnisses als unabhängiger Finanzberater und vertrauenswürdiger Partner des Kunden anstelle eines reinen Produktverkäufers.\n• Compliance als Wertschöpfung: Verankerung des Verständnisses, dass regulatorische Anforderungen nicht nur eine Pflicht, sondern eine Chance für bessere Kundenbeziehungen und nachhaltigen Geschäftserfolg darstellen.\n• Transparenzkultur: Etablierung einer Kultur der Offenheit und Transparenz in allen Aspekten der Kundeninteraktion, von Produktrisiken über Kosten bis hin zu potenziellen Interessenkonflikten.\n\n👥 Der ADVISORI-Change-Management-Ansatz:\n• Ganzheitliche Transformationsstrategie: Entwicklung einer umfassenden Change-Strategie, die auf drei Ebenen ansetzt – individuelle Mitarbeiter, Teams und Gesamtorganisation.\n• Führungskräfte als Change Champions: Gezielte Einbindung und Befähigung von Führungskräften als Vorbilder und Treiber des kulturellen Wandels mit klaren Botschaften und konsequentem Handeln.\n• Mitarbeiteraktivierung: Implementierung interaktiver Schulungs- und Kommunikationsformate, die nicht nur Wissen vermitteln, sondern auch Einstellungen und Verhaltensweisen positiv beeinflussen.\n• Nachhaltiges Anreizsystem: Neugestaltung von Anreiz- und Vergütungssystemen, die kundenorientiertes Verhalten und Anlegerschutz aktiv fördern und belohnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche besonderen Herausforderungen ergeben sich bei der MiFID II-konformen Beratung zu komplexen Finanzprodukten und wie unterstützt ADVISORI bei deren Bewältigung?",
        answer: "Die MiFID II-Anforderungen stellen besonders hohe Ansprüche an die Beratung zu komplexen Finanzprodukten, die durch ihre Strukturierung, Risikocharakteristika oder eingebettete Derivate eine erhöhte Komplexität aufweisen. Diese Produkte erfordern einen speziell angepassten Ansatz sowohl in der Produktgovernance als auch in der Geeignetheitsprüfung und Kundenaufklärung.\n\n🧩 Spezifische Herausforderungen bei komplexen Produkten:\n• Umfassende Risikotransparenz: Notwendigkeit, komplexe Risikostrukturen und potenzielle Verlustszenarien vollständig, aber dennoch verständlich für unterschiedliche Kundengruppen darzustellen.\n• Erweiterte Geeignetheitsprüfung: Erfordernis besonders tiefgehender Prüfungen der Kenntnisse, Erfahrungen und finanziellen Tragfähigkeit des Kunden mit strengeren Nachweispflichten.\n• Restriktive Zielmarktdefinition: Notwendigkeit einer besonders präzisen und in der Regel engeren Zielmarktdefinition mit robusten Vertriebsbeschränkungen für ungeeignete Kundengruppen.\n• Erhöhte Dokumentationsanforderungen: Bedarf an besonders umfassender und detaillierter Dokumentation aller Beratungs- und Entscheidungsprozesse zum Nachweis der regulatorischen Compliance.\n\n📊 Der ADVISORI-Ansatz für komplexe Produkte:\n• Produktkomplexitäts-Framework: Entwicklung eines strukturierten Frameworks zur objektiven Bewertung und Klassifizierung der Produktkomplexität als Basis für alle weiteren Maßnahmen.\n• Kundenverständnis-Validierung: Konzeption spezifischer Methoden und Tools zur fundierten Überprüfung des tatsächlichen Kundenwissens über komplexe Produktmerkmale und -risiken.\n• Erweiterte Zielmarktmethodik: Implementierung einer verfeinerten Zielmarktmethodik für komplexe Produkte mit mehrdimensionalen Eignungskriterien und klaren Vertriebsleitplanken.\n• Verstärkte Beraterschulung: Durchführung spezialisierter Schulungsprogramme, die Berater befähigen, komplexe Produkte korrekt zu erklären und deren Eignung fundiert zu beurteilen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute die MiFID II-Anforderungen an Kostentransparenz erfolgreich umsetzen und welche Methodik empfiehlt ADVISORI?",
        answer: "Die MiFID II-Anforderungen an Kostentransparenz stellen einen Paradigmenwechsel dar, der von Finanzinstituten eine vollständige, verständliche Offenlegung aller direkten und indirekten Kosten über die gesamte Anlagedauer hinweg verlangt. Diese Transparenz ist ein Schlüsselelement des Anlegerschutzes und erfordert sowohl methodische als auch technische Innovationen.\n\n💰 Kernherausforderungen bei der Umsetzung der Kostentransparenz:\n• Vollständige Kostenerfassung: Identifikation und Aggregation aller relevanten Kostenkomponenten über die gesamte Wertschöpfungskette – von Produktkosten über Transaktionskosten bis hin zu Beratungs- und Servicegebühren.\n• Ex-ante und Ex-post Darstellung: Entwicklung konsistenter Methoden zur vorherigen (ex-ante) Kostenschätzung und nachträglichen (ex-post) Kostenberichterstattung mit nachvollziehbarer Berechnungslogik.\n• Kundenverständliche Kommunikation: Transformation komplexer Kosteninformationen in verständliche, aussagekräftige Darstellungen, die Kunden eine fundierte Entscheidungsfindung ermöglichen.\n• Kosteneffiziente Implementation: Etablierung von Prozessen und Systemen, die die regulatorischen Anforderungen erfüllen, ohne unverhältnismäßigen operativen Aufwand zu verursachen.\n\n📈 Der ADVISORI-Methodikansatz für Kostentransparenz:\n• Integriertes Kostenmodell: Entwicklung eines umfassenden Kostenmodells, das alle relevanten Kostenkomponenten systematisch erfasst und nach MiFID II-konformen Kategorien strukturiert.\n• Standardisierte Berechnungsmethodik: Implementierung einer konsistenten, dokumentierten Methodik zur Kostenberechnung und -prognose, die sowohl regulatorisch robust als auch praktisch umsetzbar ist.\n• Visualisierungskonzept: Gestaltung intuitiver Visualisierungen und Kennzahlen, die Kosteninformationen für unterschiedliche Kundengruppen verständlich und vergleichbar machen.\n• Systemintegration: Konzeption und Implementierung einer IT-Lösung, die Kostendaten aus verschiedenen Quellsystemen konsolidiert und automatisierte Kostenberichte generiert."
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
    console.log('✅ Strategic FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
