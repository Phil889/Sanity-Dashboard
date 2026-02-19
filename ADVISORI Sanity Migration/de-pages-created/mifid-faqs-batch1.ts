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
    console.log('Updating MiFID page with strategic FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute MiFID II-Compliance als strategischen Vorteil nutzen und welchen Ansatz verfolgt ADVISORI hierbei?",
        answer: "MiFID II wird oft als regulatorische Last wahrgenommen, doch vorausschauende Finanzinstitute transformieren diese Anforderungen in strategische Vorteile. Die Regulierung zielt letztendlich auf mehr Transparenz, besseren Anlegerschutz und effizientere Märkte ab – Werte, die auch den Kern eines kundenorientierten Geschäftsmodells bilden sollten. ADVISORI unterstützt Sie dabei, Compliance nicht als bloße Pflichtübung, sondern als Katalysator für nachhaltiges Wachstum zu nutzen.\n\n🔍 Strategische Hebel von MiFID II für Ihr Institut:\n• Differenzierung durch Transparenz: Nutzen Sie die Transparenzanforderungen als Wettbewerbsvorteil durch Schaffung eines überlegenen Kundenerlebnisses mit vollständiger Kostentransparenz und verständlicher Produktinformation.\n• Optimierung der Produktpalette: Die Product Governance-Anforderungen bieten einen strukturierten Rahmen, um Ihr Produktangebot zu rationalisieren, unrentable oder unpassende Produkte zu eliminieren und Ressourcen auf Ihre Kernkompetenzen zu konzentrieren.\n• Datengetriebene Kundenbetreuung: Die umfangreichen Daten aus MiFID II-Prozessen (Eignungsprüfungen, Zielmarktdefinitionen, Transaktionsreporting) können in wertvolle Kundeneinblicke transformiert werden, die Ihre Beratungsqualität und Cross-Selling-Möglichkeiten verbessern.\n• Technologische Modernisierung: Die Komplexität der Anforderungen kann als Katalysator für überfällige IT-Modernisierungen dienen, die langfristig Effizienzgewinne und Kosteneinsparungen bringen.\n\n🛠️ Der ADVISORI-Ansatz für strategische MiFID II-Implementation:\n• Integrierte Geschäfts- und Compliance-Strategie: Wir entwickeln Lösungen, die regulatorische Anforderungen mit Ihren Geschäftszielen in Einklang bringen, statt sie als separate Workstreams zu behandeln.\n• Customer Journey Mapping: Analyse und Neugestaltung der Kundeninteraktionen unter Berücksichtigung der MiFID II-Anforderungen, um Reibungsverluste zu minimieren und Kundenerlebnisse zu verbessern.\n• Datenökosystem-Optimierung: Schaffung eines integrierten Datenmanagement-Frameworks, das sowohl Compliance-Anforderungen erfüllt als auch wertvolle Geschäftseinblicke liefert.\n• Change Management mit Fokus auf Kundennutzen: Schulung Ihrer Teams nicht nur in technischen Compliance-Aspekten, sondern auch darin, wie sie MiFID II-Prozesse als Instrument zur Stärkung der Kundenbeziehung nutzen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen stellt die Best-Execution-Anforderung unter MiFID II dar und wie unterstützt ADVISORI bei deren Bewältigung?",
        answer: "Die Best-Execution-Verpflichtung unter MiFID II geht weit über die bloße Suche nach dem besten Preis hinaus. Sie erfordert eine holistische Betrachtung multipler Faktoren und eine nachweisbare, konsistente Prozesssteuerung, die für viele Institute eine komplexe Herausforderung darstellt. Die Anforderungen umfassen kontinuierliche Marktanalysen, umfassendes Reporting und eine regelmäßige Neubewertung der Ausführungspolitik, was signifikante operative und technologische Anpassungen erfordert.\n\n📊 Kernherausforderungen der Best-Execution-Compliance:\n• Multidimensionale Bewertungskriterien: Berücksichtigung zahlreicher Faktoren wie Preis, Kosten, Geschwindigkeit, Wahrscheinlichkeit der Ausführung, Abwicklung, Umfang und Art der Order bei jeder Transaktionsentscheidung.\n• Datenerfassung und -analyse: Sammlung, Verarbeitung und Analyse großer Datenmengen aus verschiedenen Quellen zur kontinuierlichen Bewertung der Ausführungsqualität.\n• Dokumentationspflichten: Erstellung umfassender Nachweise für die Einhaltung der Best-Execution-Politik bei jeder einzelnen Transaktion.\n• Dynamische Marktüberwachung: Kontinuierliche Beobachtung der Marktbedingungen und Anpassung der Ausführungsstrategien bei Veränderungen.\n• Governance und Kontrollen: Etablierung robuster Governance-Strukturen, Kontrollen und Eskalationswege für Best-Execution-Entscheidungen.\n\n🔧 ADVISORI's umfassender Unterstützungsansatz:\n• Ganzheitliche Best-Execution-Framework-Entwicklung: Wir konzipieren ein maßgeschneidertes Framework, das sowohl regulatorische Anforderungen erfüllt als auch operativ effizient umsetzbar ist.\n• Daten- und Technologielösungen: Implementierung von Tools und Systemen zur automatisierten Erfassung, Analyse und Reporting von Ausführungsdaten, inklusive TCA (Transaction Cost Analysis).\n• Prozessoptimierung und -automatisierung: Identifikation von Effizienzpotentialen in Ihren Handelsprozessen und Integration von Best-Execution-Prüfungen in bestehende Workflows.\n• Order Execution Management: Entwicklung von Strategien zur optimalen Auftragsplatzierung unter Berücksichtigung aller relevanten Best-Execution-Faktoren.\n• Compliance-Monitoring und Reporting: Aufbau eines kontinuierlichen Überwachungssystems für Best-Execution-Faktoren mit automatisierten Alerts bei Abweichungen und regulatorischem Reporting."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute die Produktgovernance-Anforderungen von MiFID II effizient umsetzen und welche Methodik empfiehlt ADVISORI?",
        answer: "Die Produktgovernance-Regelungen von MiFID II haben die Produktentwicklung und -überwachung im Finanzsektor grundlegend verändert. Sie verlangen einen strukturierten Produktlebenszyklus mit klarer Zielmarktdefinition, kontinuierlicher Überwachung und robuster Governance – ein Paradigmenwechsel, der strategische und operative Herausforderungen mit sich bringt. ADVISORI unterstützt Sie bei der Entwicklung eines effizienten und compliant Produktgovernance-Frameworks.\n\n🔄 Schlüsselelemente effektiver MiFID II-Produktgovernance:\n• End-to-End Produktlebenszyklusmanagement: Etablierung eines strukturierten Prozesses von der Produktidee über Entwicklung, Genehmigung, Vertrieb bis hin zur regelmäßigen Überprüfung und ggf. Produkteinstellung.\n• Präzise Zielmarktdefinition: Entwicklung eines methodischen Ansatzes zur Definition, Dokumentation und Aktualisierung von Zielmärkten auf Basis von Kundenbedürfnissen und Risikoprofilen.\n• Szenarioanalyse und Stresstests: Durchführung aussagekräftiger Produkttests unter verschiedenen Marktbedingungen zur Bewertung der Produktperformance und potenzieller Risiken für Anleger.\n• Vertriebsstrategie-Alignment: Sicherstellung, dass Vertriebswege und -strategien mit den definierten Zielmärkten und Produkteigenschaften kompatibel sind.\n• Post-Sale-Monitoring: Implementation eines robusten Überwachungssystems zur kontinuierlichen Bewertung der Produktperformance und Zielmarkteignung.\n\n🛠️ ADVISORI's Methodik für effiziente Produktgovernance:\n• Produktgovernance-Capability Assessment: Analyse Ihrer bestehenden Prozesse, Identifikation von Gaps und Entwicklung einer priorisierten Roadmap zur Compliance-Erreichung.\n• Target Market Framework: Erstellung eines maßgeschneiderten Frameworks für die Zielmarktdefinition und -überprüfung, das sowohl regulatorisch robust als auch praktisch anwendbar ist.\n• Governance-Struktur-Optimierung: Entwicklung oder Anpassung von Entscheidungsgremien, Verantwortlichkeiten und Eskalationswegen für eine effektive Produktgovernance.\n• Digitalisierung und Automatisierung: Identifikation von Möglichkeiten zur Prozessautomatisierung, insbesondere bei Datenaggregation, Zielmarktabgleich und Monitoring-Aktivitäten.\n• Integrierte IT-Lösungen: Implementation oder Anpassung von Systemen zur Unterstützung des gesamten Produktgovernance-Prozesses mit minimalen manuellen Eingriffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Kostentransparenz- und Aufzeichnungspflichten stellt MiFID II an Finanzinstitute und wie kann ADVISORI bei deren effizienten Umsetzung helfen?",
        answer: "Die umfangreichen Kostentransparenz- und Aufzeichnungspflichten unter MiFID II stellen viele Finanzinstitute vor erhebliche Herausforderungen. Die Regulierung verlangt eine detaillierte Offenlegung aller Kosten und Gebühren, umfassende Kommunikationsaufzeichnungen und eine lückenlose Dokumentation des Beratungsprozesses. Die Komplexität dieser Anforderungen wird durch die Vielzahl betroffener Geschäftsbereiche und IT-Systeme zusätzlich erhöht.\n\n📝 Zentrale Anforderungen an Transparenz und Dokumentation:\n• Ex-ante und Ex-post Kostenoffenlegung: Umfassende Darstellung aller direkten und indirekten Kosten, Gebühren und Zuwendungen vor einer Anlageentscheidung (ex-ante) sowie regelmäßige nachträgliche Kostenübersichten (ex-post).\n• Kommunikationsaufzeichnung: Pflicht zur Aufzeichnung aller kundenbezogenen Telefongespräche, elektronischen Kommunikationen und persönlichen Beratungsgespräche, die zu Transaktionen führen können.\n• Beratungsdokumentation: Detaillierte Aufzeichnung des gesamten Beratungsprozesses, einschließlich Eignungsprüfung, Anlageempfehlungen und Begründungen.\n• Aufbewahrungspflichten: Sichere Speicherung aller relevanten Aufzeichnungen für mindestens fünf Jahre bei gleichzeitiger Gewährleistung der Datenintegrität und des Datenschutzes.\n• Transaktionsreporting: Umfassendes Reporting von Transaktionsdetails an Aufsichtsbehörden mit zahlreichen Datenfeldern und strengen Zeitvorgaben.\n\n🔧 ADVISORI's Lösungsansatz für effiziente Compliance:\n• Integrierte Kosten- und Gebührenarchitektur: Entwicklung eines zentralen Frameworks zur Erfassung, Berechnung und Darstellung aller relevanten Kosten über verschiedene Produkte und Dienstleistungen hinweg.\n• Aufzeichnungssystem-Optimierung: Analyse und Optimierung der Aufzeichnungssysteme für verschiedene Kommunikationskanäle mit Fokus auf Compliance, Datenschutz und Betriebseffizienz.\n• Dokumentations-Workflow-Redesign: Neugestaltung und Digitalisierung der Beratungs- und Dokumentationsprozesse, um sowohl regulatorische Anforderungen zu erfüllen als auch die Beraterproduktivität zu steigern.\n• Datenmanagement-Strategie: Entwicklung einer ganzheitlichen Strategie zum Management, zur Speicherung und zum Retrieval großer Datenmengen aus verschiedenen Quellen unter Einhaltung der Aufbewahrungsfristen.\n• Automatisierte Reporting-Lösungen: Implementation von Lösungen zur automatisierten Aggregation, Validierung und Übermittlung von Transaktionsdaten an die zuständigen Behörden."
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
