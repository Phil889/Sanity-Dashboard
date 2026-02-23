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
    console.log('Updating MaRisk Überwachung & Reporting page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-ueberwachung-reporting' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-ueberwachung-reporting" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die Qualität und Zuverlässigkeit ihrer MaRisk-Überwachungssysteme sicherstellen und nachweisen?",
        answer: "Die Qualität und Zuverlässigkeit von MaRisk-Überwachungssystemen ist entscheidend für eine effektive regulatorische Compliance. Die Herausforderung besteht darin, nicht nur robuste Monitoring-Prozesse zu implementieren, sondern auch deren Wirksamkeit nachvollziehbar zu dokumentieren und kontinuierlich zu verbessern, um sowohl interne als auch externe Prüfungen zu bestehen.\n\n🛡️ Etablierung belastbarer Qualitätssicherungsmaßnahmen:\n• Prozessdokumentation und Methodentransparenz: Umfassende Dokumentation der Überwachungsprozesse, Kontrolllogiken und Eskalationswege mit klarer Nachvollziehbarkeit von Entscheidungen und Bewertungen.\n• Data Governance Framework: Implementierung robuster Datenqualitätsstandards mit automatisierten Validierungsregeln und Plausibilitätsprüfungen für alle compliance-relevanten Daten.\n• Vier-Augen-Prinzip und Segregation of Duties: Etablierung klarer Kontrollen durch Funktionstrennung bei der Erfassung, Prüfung und Freigabe von Compliance-Informationen und -Berichten.\n• Regelmäßige Selbstbeurteilungen und interne Audits: Durchführung strukturierter Selbstassessments und unabhängiger Überprüfungen des Monitoring-Systems durch die Interne Revision oder spezialisierte Teams.\n\n📝 Nachweisführung und Prüfungsbereitschaft:\n• Audit Trails und Versionierung: Lückenlose Protokollierung aller Änderungen an Überwachungsparametern, Schwellenwerten und Bewertungen mit vollständiger Nachverfolgbarkeit.\n• Systematische Dokumentation von Testverfahren: Nachweis der Systemzuverlässigkeit durch dokumentierte Testfälle, Stresstests und Validierungsszenarien, die regelmäßig durchgeführt werden.\n• Ergebnisdokumentation und Maßnahmenverfolgung: Strukturierte Erfassung identifizierter Abweichungen, eingeleiteter Maßnahmen und deren Wirksamkeitsüberprüfung in einem geschlossenen Kontrollkreislauf.\n• Proaktive Kommunikation mit Prüfern: Vorbereitung klarer Nachweise und Erläuterungen zur Funktionsweise und Wirksamkeit des Überwachungssystems für interne und externe Prüfungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen KPIs und Metriken sind für ein effektives MaRisk-Compliance-Monitoring besonders aussagekräftig?",
        answer: "Die Auswahl geeigneter KPIs und Metriken ist entscheidend für ein wirksames MaRisk-Compliance-Monitoring. Effektive Kennzahlen müssen nicht nur den aktuellen Compliance-Status abbilden, sondern auch präventiv auf potenzielle Risikobereiche hinweisen und ein ausgewogenes Bild der Gesamtcompliance vermitteln.\n\n📊 Kernkategorien essentieller MaRisk-Compliance-KPIs:\n• Strukturbezogene Kennzahlen: Messung der Governance- und Organisationsanforderungen der MaRisk wie Aktualität des Organisationshandbuchs, Vollständigkeit der Stellvertretungsregelungen oder Einhaltung des Funktionstrennungsprinzips in kritischen Prozessen.\n• Prozessbezogene Kennzahlen: Überwachung der Effektivität von Schlüsselprozessen wie Termintreue bei Risikoberichten, Durchlaufzeiten bei Limitänderungen oder Vollständigkeit der Neuproduktprozesse bei Produkteinführungen.\n• Risikobezogene Metriken: Erfassung von Indikatoren für spezifische Risikoarten wie Überschreitungen von Adressenausfallrisiko-Limiten, Einhaltung der Liquiditätsreserven oder Abdeckungsquoten im operationellen Risikomanagement.\n• Kontrollbezogene Indikatoren: Bewertung der Kontrolleffektivität durch Kennzahlen wie Anzahl offener Feststellungen aus Prüfungen, durchschnittliche Behebungsdauer von Schwachstellen oder Quote der termingerecht umgesetzten Maßnahmen.\n\n🔍 Gestaltungsprinzipien für aussagekräftige Metriken:\n• Kombination von Leading und Lagging Indicators: Ergänzung rückblickender Kennzahlen (wie festgestellte Compliance-Verstöße) durch vorausschauende Indikatoren (wie Personalfluktuation in Schlüsselfunktionen oder Komplexitätszunahme bei Produkten).\n• Mehrstufige Schwellenwerte und Toleranzbereiche: Definition differenzierter Ampelsysteme mit Früh- und Spätwarnstufen zur präzisen Risikoeinschätzung und angemessenen Eskalation.\n• Aggregation und Drill-Down-Fähigkeit: Entwicklung von Metriken, die sowohl eine Gesamtsicht ermöglichen (Compliance-Gesamt-Score) als auch eine Detailanalyse einzelner Bereiche zulassen.\n• Zeitliche Dimension und Trendbetrachtung: Integration von Trendanalysen und saisonalen Vergleichen, um langfristige Entwicklungen zu erkennen und kurzfristige Schwankungen korrekt einzuordnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich ein MaRisk-Reporting optimal in die bestehende Management-Berichterstattung integrieren?",
        answer: "Die Integration des MaRisk-Reportings in die bestehende Management-Berichterstattung stellt Finanzinstitute vor die Herausforderung, regulatorische Compliance-Informationen so aufzubereiten und einzubinden, dass sie nicht als isolierter Pflichtbestandteil, sondern als wertvoller Input für strategische Entscheidungen wahrgenommen werden. Eine gelungene Integration verbessert nicht nur die Qualität der Entscheidungsfindung, sondern stärkt auch die Compliance-Kultur im gesamten Institut.\n\n🔄 Strategien zur nahtlosen Integration:\n• Alignment mit bestehenden Berichtszyklen und -formaten: Harmonisierung der Reporting-Zeitpunkte und -formate, um Redundanzen zu vermeiden und die konsistente Nutzung von Daten über verschiedene Berichtsebenen hinweg zu gewährleisten.\n• Geschäftsorientierte Kontextualisierung: Darstellung von Compliance-Informationen im direkten Kontext geschäftsrelevanter KPIs, um deren strategische Relevanz hervorzuheben (z.B. Verknüpfung von Kreditrisiko-Compliance-Metriken mit Portfoliokennzahlen).\n• Integrierte Gesamtrisikobetrachtung: Einbettung von MaRisk-Compliance-Risiken in die unternehmensweite Risikobewertung und -aggregation, um ein ganzheitliches Bild der Risikolage zu vermitteln.\n• Establishment eines 'Single Point of Truth': Implementierung einer zentralen Datenquelle, die sowohl für regulatorische als auch für Management-Berichtszwecke genutzt wird, um Konsistenz zu gewährleisten.\n\n📈 Praktische Implementierungsansätze:\n• Mehrdimensionale Berichtsarchitektur: Entwicklung eines geschichteten Reporting-Modells mit verschiedenen Detaillierungsgraden – von Executive Summaries für die Vorstandsebene bis hin zu detaillierten Fachbereichsberichten.\n• Visuelle Integration und einheitliche Informationsgestaltung: Anwendung konsistenter Visualisierungsprinzipien und Dashboards für Geschäfts- und Compliance-Kennzahlen zur Förderung der ganzheitlichen Betrachtung.\n• Harmonisierung der Terminologie und Bewertungsmaßstäbe: Etablierung eines einheitlichen Vokabulars und abgestimmter Bewertungsskalen über verschiedene Berichtsarten hinweg, um Missverständnisse zu vermeiden.\n• Geschäftsfokussierte Implikationsanalyse: Ergänzung jedes wesentlichen Compliance-Findings durch klare Aussagen zu potenziellen Geschäftsauswirkungen und erforderlichen Handlungsoptionen für das Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute ein MaRisk-Überwachungssystem implementieren, das auch bei organisatorischen und regulatorischen Veränderungen anpassungsfähig bleibt?",
        answer: "Die Implementierung eines zukunftsfähigen MaRisk-Überwachungssystems erfordert einen Ansatz, der Anpassungsfähigkeit und Flexibilität als Kernprinzipien verankert. In einem dynamischen regulatorischen Umfeld mit ständigen organisatorischen Veränderungen ist die Fähigkeit zur schnellen und effizienten Anpassung nicht nur ein Wettbewerbsvorteil, sondern eine grundlegende Notwendigkeit für nachhaltige Compliance.\n\n🔄 Architekturprinzipien für adaptive Überwachungssysteme:\n• Modularer Aufbau und Plattformansatz: Strukturierung des Monitoring-Systems in flexible, unabhängig aktualisierbare Module, die bei Änderungen einzelner MaRisk-Anforderungen gezielt angepasst werden können, ohne das Gesamtsystem zu beeinträchtigen.\n• Metadatengesteuerte Konfiguration: Implementierung einer regelbasierten Architektur, bei der Überwachungsparameter, Schwellenwerte und Workflows durch Konfiguration statt durch Programmierung angepasst werden können.\n• API-First-Strategie: Entwicklung offener Schnittstellen, die eine flexible Integration mit anderen Systemen ermöglichen und die Anpassung an neue Datenquellen oder Reporting-Anforderungen erleichtern.\n• Skalierbare Datenarchitektur: Etablierung eines Data-Lake/Data-Warehouse-Konzepts, das die Aufnahme und Analyse neuer Datentypen und -mengen ohne strukturelle Änderungen ermöglicht.\n\n🛠️ Prozessuale Maßnahmen für kontinuierliche Anpassungsfähigkeit:\n• Regulatory Change Management Prozess: Etablierung eines strukturierten Prozesses zur frühzeitigen Identifikation, Bewertung und Umsetzung regulatorischer Änderungen mit klaren Verantwortlichkeiten und Zeitplänen.\n• Agile Implementierungsmethodik: Anwendung agiler Prinzipien bei der Anpassung von Überwachungsprozessen, um iterativ vorzugehen und Feedback frühzeitig zu integrieren.\n• Regelmäßige Resilienz- und Flexibilitätstests: Durchführung von Simulationen und Stresstests, um die Anpassungsfähigkeit des Systems unter verschiedenen Veränderungsszenarien zu evaluieren.\n• Capability Building und Wissensnetzwerke: Förderung einer kontinuierlichen Lernkultur durch Aufbau interner Expertise und Vernetzung mit Fachexperten, Verbänden und Regulatoren zur frühzeitigen Antizipation von Veränderungen."
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
