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
    console.log('Updating MaRisk Überwachung & Reporting page with FAQs batch 5...')
    
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
        question: "Wie können Finanzinstitute ihre MaRisk-Überwachung und -Reporting auf zukünftige regulatorische Anforderungen vorbereiten?",
        answer: "Angesichts der kontinuierlichen Weiterentwicklung des regulatorischen Umfelds ist es für Finanzinstitute essentiell, ihre MaRisk-Überwachungs- und Reportingsysteme zukunftsfähig zu gestalten. Eine vorausschauende Architektur ermöglicht es, auf neue Anforderungen flexibel zu reagieren und regulatorische Änderungen effizient zu implementieren, ohne grundlegende Systemanpassungen vornehmen zu müssen.\n\n🔮 Strategien zur Zukunftssicherung von Compliance-Systemen:\n• Regulatory Horizon Scanning: Etablierung systematischer Prozesse zur frühzeitigen Identifikation und Analyse regulatorischer Trends und Entwicklungen durch aktives Monitoring von Konsultationspapieren, Fachkonferenzen und Aufsichtsdialogen.\n• Szenariobasierte Systemplanung: Entwicklung von Monitoring- und Reportingsystemen unter Berücksichtigung verschiedener regulatorischer Szenarien, um Flexibilität für unterschiedliche Entwicklungsrichtungen zu gewährleisten.\n• Prinzipienorientierter Ansatz: Fokussierung auf die zugrundeliegenden regulatorischen Prinzipien und Zielsetzungen anstatt auf spezifische Anforderungsdetails, um langfristig gültige Systeme zu schaffen.\n• Übererfüllung in strategischen Bereichen: Gezielte Implementierung von Überwachungsmechanismen, die über aktuelle Mindestanforderungen hinausgehen, in Bereichen mit hoher Wahrscheinlichkeit für künftige regulatorische Verschärfungen.\n\n⚙️ Technische und organisatorische Implementierungsansätze:\n• Modulare Systemarchitektur: Aufbau flexibler, komponenten-basierter Lösungen, bei denen einzelne Module bei regulatorischen Änderungen ausgetauscht oder angepasst werden können, ohne das Gesamtsystem zu beeinträchtigen.\n• Abstrakte Datenmodelle: Implementierung von Datenstrukturen, die über die aktuellen spezifischen Anforderungen hinausgehen und zusätzliche Attribute oder Dimensionen erfassen, die für künftige Analysen relevant werden könnten.\n• Standardisierte Schnittstellen: Entwicklung flexibler APIs und Integrationsschichten, die eine einfache Anbindung neuer Datenquellen oder Reporting-Outputs ermöglichen.\n• Kontinuierliche Weiterbildung: Aufbau eines spezialisierten Teams mit tiefem Verständnis regulatorischer Mechanismen, das regulatorische Entwicklungen nicht nur verfolgt, sondern auch deren potenzielle Auswirkungen auf bestehende Systeme vorausschauend analysieren kann."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Best Practices existieren für die Integration von MaRisk-Überwachungsprozessen in das tägliche Geschäft von Finanzinstituten?",
        answer: "Die erfolgreiche Integration von MaRisk-Überwachungsprozessen in das Tagesgeschäft ist entscheidend für eine lebendige Compliance-Kultur, die über bloße Pflichterfüllung hinausgeht. Wenn Compliance-Aktivitäten als integraler Bestandteil der Geschäftsprozesse etabliert werden, statt als isolierte Zusatzaufgaben, erhöht sich sowohl die Effizienz als auch die Wirksamkeit des Compliance-Managements signifikant.\n\n🔄 Kernprinzipien erfolgreicher Geschäftsintegration:\n• Prozessintegrierte Kontrollen: Verankerung von Compliance-Prüfpunkten direkt in operativen Geschäftsprozessen an strategisch sinnvollen Stellen, anstatt nachgelagerter Überwachung durch separate Compliance-Teams.\n• Dual-Use-Datenerfassung: Harmonisierung von Datenerhebungen, sodass betrieblich notwendige Informationen gleichzeitig für Compliance-Zwecke genutzt werden können, ohne redundante Erfassungsprozesse.\n• Risikobasierte Kontrollintensität: Anpassung des Überwachungsumfangs an das tatsächliche Compliance-Risiko verschiedener Geschäftsprozesse, um Ressourcen effektiv zu allokieren und Überregulierung zu vermeiden.\n• Ownership-Prinzip: Übertragung klarer Verantwortung für MaRisk-Compliance auf Fachbereichsebene, wodurch Compliance nicht als externe Anforderung, sondern als integraler Bestandteil der Fachverantwortung wahrgenommen wird.\n\n🛠️ Praktische Implementierungsansätze:\n• Compliance-by-Design in Prozessdefinitionen: Berücksichtigung von MaRisk-Anforderungen bereits bei der Konzeption und Dokumentation von Geschäftsprozessen, wodurch Compliance von Anfang an mitgedacht wird.\n• Integrierte Workflow-Management-Systeme: Implementierung von Geschäftsprozess-Management-Tools, die Compliance-Aspekte nahtlos in operative Workflows integrieren und automatische Compliance-Checks ermöglichen.\n• Self-Assessment-Mechanismen: Etablierung regelmäßiger, strukturierter Selbstbeurteilungen der Fachbereiche zu ihrem Compliance-Status, die sowohl das Bewusstsein schärfen als auch wertvolle Informationen für das Compliance-Monitoring liefern.\n• Collaborative Compliance-Ansatz: Förderung einer partnerschaftlichen Zusammenarbeit zwischen Compliance-Funktion und Fachbereichen durch gemeinsame Workshops, gegenseitige Hospitationen und regelmäßigen Austausch zur kontinuierlichen Verbesserung der integrierten Überwachungsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ein Institut sicherstellen, dass sein MaRisk-Überwachungs- und Reportingsystem bei aufsichtlichen Prüfungen bestehen kann?",
        answer: "Die Prüfungsfestigkeit eines MaRisk-Überwachungs- und Reportingsystems ist für Finanzinstitute von enormer Bedeutung, da aufsichtliche Prüfungen nicht nur formale Anforderungen validieren, sondern zunehmend die tatsächliche Wirksamkeit der implementierten Systeme bewerten. Ein robustes, nachvollziehbares und effektives System bietet Schutz vor aufsichtlichen Maßnahmen und stärkt das Vertrauen in die Compliance-Fähigkeiten des Instituts.\n\n✅ Strategische Erfolgsfaktoren für Prüfungsfestigkeit:\n• Dokumentierte Methodik und Nachvollziehbarkeit: Entwicklung und Dokumentation klarer methodischer Grundlagen für alle Überwachungs- und Reportingprozesse, die den Prüfern die Nachvollziehbarkeit und Angemessenheit der gewählten Ansätze verdeutlichen.\n• Lückenlose Kontrollnachweise: Implementierung eines durchgängigen Audit Trails, der alle Überwachungsaktivitäten, identifizierten Abweichungen, eingeleiteten Maßnahmen und deren Ergebnisse lückenlos dokumentiert und für Prüfungszwecke verfügbar macht.\n• Konsistente Datenbasis: Sicherstellung der Konsistenz zwischen internen Managementberichten, aufsichtlichen Reports und Überwachungssystemen, um Diskrepanzen zu vermeiden, die in Prüfungen kritisch hinterfragt werden könnten.\n• Selbstkritische Wirksamkeitsbewertung: Etablierung eigener kritischer Wirksamkeitsüberprüfungen der Überwachungs- und Reportingsysteme, um Schwachstellen vor den Prüfern zu identifizieren und proaktiv zu adressieren.\n\n🛡️ Praktische Vorbereitungs- und Umsetzungsmaßnahmen:\n• Mock Audits und Probeprüfungen: Durchführung interner Simulationen aufsichtlicher Prüfungen, idealerweise unter Einbeziehung externer Experten, um Schwachstellen zu identifizieren und Verbesserungspotenziale zu erkennen.\n• Prüfungsinfrastruktur: Vorbereitung spezieller Präsentationen, Systemnachweise und Beispieldokumentationen, die die Funktionsfähigkeit und Angemessenheit des Überwachungssystems effizient demonstrieren können.\n• Geschulte Ansprechpartner: Identifikation und gezielte Vorbereitung von Fachexperten, die in Prüfungssituationen als kompetente Ansprechpartner fungieren und das System überzeugend erläutern können.\n• Kontinuierliche Auswertung von Prüfungserfahrungen: Systematische Analyse von Erkenntnissen aus vergangenen eigenen Prüfungen sowie Prüfungserfahrungen anderer Institute, um das eigene System kontinuierlich an aktuelle aufsichtliche Erwartungen anzupassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie entwickelt sich die Interaktion zwischen Human Judgment und automatisierten Prozessen in modernen MaRisk-Überwachungssystemen?",
        answer: "Die Balance zwischen menschlichem Urteilsvermögen und automatisierten Prozessen ist ein zentraler Erfolgsfaktor für moderne MaRisk-Überwachungssysteme. Während Automatisierung Effizienz, Konsistenz und Skalierbarkeit bietet, bleiben menschliche Expertise, Kontextverständnis und kritisches Denken unverzichtbar für ein wirksames Compliance-Monitoring. Die Herausforderung besteht darin, beide Elemente optimal zu kombinieren.\n\n🧠 Komplementäre Stärken von Mensch und Maschine:\n• Automatisierte Prozesse: Exzellieren bei repetitiven Datenerfassungen, Standardprüfungen, Mustererkennungen und der Verarbeitung großer Datenmengen mit hoher Geschwindigkeit, Genauigkeit und Konsistenz.\n• Menschliches Urteilsvermögen: Unverzichtbar für die Interpretation komplexer regulatorischer Anforderungen, die Bewertung von Grenzfällen, das Erkennen neuer Risiken sowie die Einordnung von Befunden in den Gesamtkontext des Institutsgeschäfts.\n• Synergiepotenzial: Durch intelligente Kombination können automatisierte Systeme Routineaufgaben übernehmen und Auffälligkeiten identifizieren, während menschliche Experten sich auf wertschöpfende Analysen, Risikobewertungen und Entscheidungen konzentrieren.\n• Evolutionäre Entwicklung: Mit fortschreitender KI-Technologie können zunehmend auch komplexere Interpretations- und Bewertungsaufgaben automatisiert werden, während sich die Rolle der menschlichen Experten in Richtung Überwachung, Steuerung und strategische Entscheidung entwickelt.\n\n⚙️ Gestaltungsprinzipien für effektive Mensch-Maschine-Kollaboration:\n• Intelligente Arbeitsteilung: Definition sinnvoller Schnittstellen zwischen automatisierten Prozessen und menschlicher Intervention, basierend auf Komplexität, Risikogehalt und Interpretationsbedarf.\n• Progressive Automatisierung: Schrittweise Ausweitung der Automatisierung, beginnend mit einfachen, regelbasierten Kontrollen und gradueller Erweiterung auf komplexere Beurteilungen, begleitet von kontinuierlicher Validierung.\n• Augmented Intelligence: Nutzung von KI nicht als Ersatz, sondern als Unterstützungsinstrument für menschliche Compliance-Experten, z.B. durch automatisierte Voranalysen und Entscheidungsvorschläge mit transparenter Begründung.\n• Kontinuierliches Lernen: Implementation von Feedback-Schleifen, durch die menschliche Experten die Ergebnisse automatisierter Prozesse validieren und korrigieren, wodurch die Systeme kontinuierlich verbessert werden."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
