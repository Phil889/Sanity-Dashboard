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
    console.log('Updating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-vertriebssteuerung-prozessablaeufe" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Digitalisierungsmaßnahmen empfiehlt ADVISORI, um die MiFID-Compliance im Vertrieb zu optimieren und gleichzeitig die Beraterproduktivität zu steigern?",
        answer: "Die Digitalisierung bietet erhebliches Potenzial, MiFID-Compliance effizienter zu gestalten und gleichzeitig die Produktivität Ihrer Berater zu steigern. Ein strategischer Digitalisierungsansatz kann regulatorische Anforderungen von einem Hindernis in einen Enabler für bessere Kundenberatung transformieren und messbare Produktivitätsgewinne erzielen.\n\n🖥️ Strategische Digitalisierungsansätze für MiFID-Compliance:\n• Integrierte Beratungsplattformen: Implementieren Sie ganzheitliche Beraterplattformen, die den gesamten MiFID-konformen Beratungsprozess digital abbilden und Compliance-Anforderungen direkt in den Beratungsflow integrieren. Dies reduziert manuelle Dokumentationsarbeiten um bis zu 70% und schafft mehr Raum für wertschöpfende Kundeninteraktion.\n• Workflow-Automatisierung: Identifizieren Sie repetitive Compliance-Aufgaben und automatisieren Sie diese durch intelligente Prozesssteuerung. Besonders in Bereichen wie Zielmarktprüfung, Geeignetheitsbeurteilung und Risikoeinstufung lassen sich erhebliche Zeitgewinne realisieren.\n• Omnichannel-Compliance-Architektur: Entwickeln Sie eine kanalübergreifende Compliance-Infrastruktur, die konsistente regulatorische Prozesse über alle Vertriebskanäle (Filiale, Online, Telefon, Mobile) sicherstellt und gleichzeitig kanalspezifische Optimierungen ermöglicht.\n• Digitale Kundensignatur und -legitimation: Implementieren Sie digitale Signatur- und Legitimationsverfahren, die den MiFID-Anforderungen entsprechen und gleichzeitig den Abschlussprozess beschleunigen und papierbasierte Workflows eliminieren.\n\n📱 Technologische Lösungsansätze mit Produktivitätseffekt:\n• KI-gestützte Beratungsassistenten: Setzen Sie künstliche Intelligenz ein, um Beratern in Echtzeit kontextbezogene Compliance-Hinweise zu geben, relevante Produktinformationen anzuzeigen und automatisch regulatorisch konforme Dokumentation zu generieren.\n• Predictive Analytics für Kundenbedürfnisse: Nutzen Sie fortschrittliche Analyseverfahren, um auf Basis historischer Daten und aktueller Marktentwicklungen personalisierte, MiFID-konforme Anlagevorschläge zu generieren, die genau auf das Kundenprofil zugeschnitten sind.\n• Digitale Kundenprofilierung: Implementieren Sie interaktive Tools zur kontinuierlichen digitalen Aktualisierung von Kundenprofilen, die sowohl die regulatorischen Anforderungen erfüllen als auch wertvolle Insights für eine bedarfsgerechtere Beratung liefern.\n• Mobile Compliance-Lösungen: Entwickeln Sie mobile Anwendungen, die es Beratern ermöglichen, MiFID-konforme Beratungsgespräche ortsunabhängig durchzuführen und alle notwendigen Dokumente und Nachweise digital zu erfassen und zu verarbeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir unsere Vertriebssteuerung und Incentivierungssysteme MiFID-konform gestalten, ohne die Motivation unserer Vertriebsmitarbeiter zu beeinträchtigen?",
        answer: "Die MiFID-konformen Anpassungen von Vertriebssteuerung und Anreizsystemen stellen viele Finanzinstitute vor die Herausforderung, regulatorische Anforderungen mit effektiver Mitarbeitermotivation in Einklang zu bringen. Ein strategischer Ansatz kann jedoch beide Ziele vereinen und sogar zu einer nachhaltigeren und kundenorientierten Vertriebskultur führen.\n\n🎯 Strategische Neuausrichtung der Vertriebssteuerung:\n• Kundenzentrierte KPIs: Entwickeln Sie ein ausbalanciertes Kennzahlensystem, das neben quantitativen Vertriebszielen verstärkt qualitative Aspekte wie Kundenberatungsqualität, Kundenzufriedenheit und langfristige Kundenbeziehungen honoriert. Dies entspricht nicht nur den MiFID-Anforderungen, sondern fördert auch nachhaltigere Kundenbeziehungen.\n• Teambasierte Incentivierungsmodelle: Implementieren Sie kollaborative Anreizsysteme, die nicht nur individuelle Leistungen, sondern auch Team- und Bereichserfolge belohnen. Dies reduziert produktgetriebene Verkaufsanreize und fördert eine ganzheitliche Kundenbetreuung im Einklang mit MiFID-Prinzipien.\n• Langfristige Performance-Betrachtung: Gestalten Sie Ihre Vergütungssysteme so, dass sie die langfristige Performance von Beratungsergebnissen und Kundenbeziehungen berücksichtigen, beispielsweise durch mehrjährige Betrachtungszeiträume oder nachgelagerte Bonuskomponenten.\n• Qualitative Führungsinstrumente: Ergänzen Sie monetäre Anreize durch nicht-monetäre Motivationsfaktoren wie Karrierepfade, Weiterbildungsmöglichkeiten und Expertenrollen, die an MiFID-konforme Beratungsexzellenz gekoppelt sind.\n\n💼 Praktische Implementierungsansätze:\n• Transparente Leistungsbewertung: Entwickeln Sie transparente, nachvollziehbare Bewertungssysteme, die den Beratern klare Orientierung geben, wie sie trotz MiFID-Anforderungen erfolgreich sein können. Schaffen Sie Klarheit über die Gewichtung qualitativer und quantitativer Faktoren.\n• Rollenspezifische Anreizsysteme: Differenzieren Sie Ihre Incentivierungssysteme nach unterschiedlichen Vertriebsrollen und -funktionen, um den spezifischen Anforderungen und Einflussmöglichkeiten jeder Position gerecht zu werden.\n• Flexibles Belohnungssystem: Implementieren Sie ein Cafeteria-System mit verschiedenen Belohnungsoptionen, das individuellen Präferenzen der Mitarbeiter Rechnung trägt und gleichzeitig MiFID-Konformität sicherstellt.\n• Change Management: Begleiten Sie die Umstellung mit einem strukturierten Change-Management-Prozess, der den Wertbeitrag der neuen Steuerungssysteme für Berater, Kunden und Institut transparent macht und die Akzeptanz durch partizipative Elemente erhöht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Produkt-Governance-Prozesse gemäß MiFID II effizient in unsere bestehenden Vertriebsabläufe integrieren?",
        answer: "Die MiFID II-Anforderungen an die Produkt-Governance stellen einen fundamentalen Paradigmenwechsel dar, der die gesamte Wertschöpfungskette von der Produktentwicklung bis zum Vertrieb betrifft. Eine strategische Integration dieser Anforderungen kann nicht nur die Compliance sicherstellen, sondern auch zu einer höheren Produktqualität und gezielteren Marktbearbeitung führen.\n\n🔄 Strategische Integration der Produkt-Governance:\n• End-to-End Prozessdesign: Entwickeln Sie einen integrierten Produkt-Governance-Prozess, der alle Phasen vom Produktdesign über die Zielmarktdefinition bis zur Vertriebssteuerung und dem Post-Sale-Monitoring umfasst. Stellen Sie sicher, dass Vertriebsperspektiven bereits in der Produktentwicklung berücksichtigt werden.\n• Dynamisches Zielmarktmanagement: Implementieren Sie ein flexibles System zur Zielmarktdefinition und -pflege, das einerseits regulatorische Anforderungen erfüllt, andererseits aber genügend Spielraum für beraterisches Ermessen lässt und nicht zu einer übermäßigen Einschränkung des Produktangebots führt.\n• Integrierte Produktfreigabeprozesse: Gestalten Sie Produktfreigabeprozesse (PAP), die effizient in bestehende Produktentwicklungs- und Vertriebsplanungsprozesse integriert sind und eine zeitnahe Markteinführung ermöglichen, ohne Compliance-Risiken einzugehen.\n• Zielgruppenspezifische Vertriebssteuerung: Nutzen Sie Zielmarktdefinitionen als strategisches Instrument zur präziseren Ausrichtung Ihrer Vertriebsaktivitäten und zur Optimierung von Marketing- und Vertriebsressourcen.\n\n📈 Praktische Umsetzungsmaßnahmen:\n• Digitalisierte Zielmarktabgleiche: Implementieren Sie automatisierte Systeme, die Kundenprofile in Echtzeit mit Produktzielmarktdefinitionen abgleichen und Beratern klare Handlungsempfehlungen geben, ohne den Beratungsprozess zu verlangsamen.\n• Produktrisiko-Dashboards: Entwickeln Sie intuitive Visualisierungen von Produktrisiken und Zielmarkteignung, die Beratern auf einen Blick relevante Informationen liefern und die Beratungsdokumentation erleichtern.\n• Feedback-Loops zwischen Vertrieb und Produktmanagement: Etablieren Sie strukturierte Prozesse für kontinuierliches Feedback aus dem Vertrieb zur tatsächlichen Zielmarkterreichung und zu Kundenerfahrungen, um Produktanpassungen und Zielmarktneudefinitionen zu initiieren.\n• Training und Enablement: Schulen Sie Ihre Vertriebsmitarbeiter nicht nur in den formalen Aspekten der Produkt-Governance, sondern vermitteln Sie vor allem, wie sie diese Anforderungen als Instrument für eine bedarfsgerechtere Beratung nutzen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Best Practices empfiehlt ADVISORI für ein effektives Management des Interessenkonflikts zwischen provisionsbasiertem Vertrieb und MiFID-Anforderungen?",
        answer: "Das Management von Interessenkonflikten zwischen provisionsbasiertem Vertrieb und den MiFID-Anforderungen erfordert einen differenzierten Ansatz, der über die bloße Einhaltung regulatorischer Mindestanforderungen hinausgeht. Eine strategische Herangehensweise kann diesen vermeintlichen Widerspruch in ein Modell transformieren, das sowohl wirtschaftlich tragfähig ist als auch höchste Standards im Kundeninteresse sicherstellt.\n\n⚖️ Strategische Ansätze zum Interessenkonfliktmanagement:\n• Transparenzorientierte Vergütungsmodelle: Entwickeln Sie Vergütungsstrukturen, die eine klare Trennung zwischen Beratungsleistung und Produktvermittlung schaffen und diese Differenzierung auch für Kunden transparent machen. Integrieren Sie Service-Fee-Komponenten, die unabhängig von spezifischen Produktabschlüssen vergütet werden.\n• Produktneutrale Beratungsprozesse: Implementieren Sie mehrstufige Beratungsprozesse, bei denen die Bedarfsanalyse und Strategieentwicklung vollständig von der Produktauswahl getrennt sind. Stellen Sie sicher, dass die Beratungsdokumentation diese Trennung nachvollziehbar abbildet.\n• Governance durch unabhängige Kontrollinstanzen: Etablieren Sie eine robuste Governance-Struktur mit unabhängigen Kontrollfunktionen, die Vergütungssysteme, Vertriebsprozesse und Produktempfehlungen kontinuierlich auf potenzielle Interessenkonflikte überprüfen und proaktive Anpassungen initiieren.\n• Ethikbasierte Unternehmenskultur: Fördern Sie eine Unternehmenskultur, die ethisches Handeln und Kundenorientierung als zentrale Werte verankert und diese Werte in Rekrutierung, Training und Führungsinstrumenten konsequent umsetzt.\n\n🛠️ Praktische Implementierungsmaßnahmen:\n• Konfliktmatrix mit Eskalationsstufen: Entwickeln Sie eine umfassende Matrix potenzieller Interessenkonflikte mit definierten Eskalationsstufen und klaren Handlungsanweisungen für jeden Konflikttyp. Stellen Sie sicher, dass diese Matrix regelmäßig aktualisiert und an neue Geschäftsmodelle und Produkte angepasst wird.\n• Systematisches Monitoring von Beratungsqualität: Implementieren Sie ein mehrdimensionales Monitoring-System, das neben quantitativen Vertriebskennzahlen auch qualitative Aspekte wie Beratungsqualität, Produkt-Mix-Neutralität und langfristige Kundenbeziehungen misst und in die Leistungsbewertung einfließen lässt.\n• Kundenzentrierte Produktklassifizierung: Entwickeln Sie ein Klassifizierungssystem für Ihre Produkte, das nicht primär nach Provisionsstrukturen, sondern nach Kundennutzen, Risikoprofilen und Bedarfssituationen differenziert und diese Klassifizierung als Grundlage für die Vertriebssteuerung nutzt.\n• Transparente Kommunikation von Interessenkonflikten: Gestalten Sie die obligatorische Offenlegung von Interessenkonflikten nicht als minimalistischen Compliance-Akt, sondern als vertrauensbildende Maßnahme mit klar verständlichen Erläuterungen und konkreten Beispielen für getroffene Mitigationsmaßnahmen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
