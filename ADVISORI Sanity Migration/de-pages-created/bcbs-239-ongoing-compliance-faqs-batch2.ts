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
    console.log('Updating BCBS-239 Ongoing Compliance page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute BCBS-239 Compliance in die breitere Risikomanagement-Strategie integrieren und welche Synergien ergeben sich mit anderen regulatorischen Anforderungen?",
        answer: "Die wahre Stärke einer nachhaltigen BCBS-239 Compliance liegt in ihrer strategischen Integration in das gesamte Risikomanagement-Framework und der gezielten Nutzung von Synergien mit komplementären regulatorischen Anforderungen. Anstatt Compliance als isolierte Pflichtaufgabe zu behandeln, sollten Finanzinstitute einen ganzheitlichen Ansatz verfolgen, der regulatorische Anforderungen als Katalysatoren für operative Exzellenz nutzt.\n\n🔄 Integration in die Risikomanagement-Strategie:\n• Data-centric Risk Management: Nutzung der BCBS-239 Compliance als Grundlage für ein datengetriebenes Risikomanagement, das fundierte und zeitnahe Entscheidungen ermöglicht.\n• Integrierte Risikoinformationsarchitektur: Schaffung einer einheitlichen Informationsbasis für alle Risikotypen, die konsistente Risikobetrachtungen über alle Geschäftsbereiche hinweg gewährleistet.\n• Risk Appetite Framework: Verknüpfung der BCBS-239 Datenqualitätsstandards mit dem Risk Appetite Framework, um die Aussagekraft von Risikokonzentrations- und Limit-Monitoring zu erhöhen.\n• Stress Testing & Scenario Analysis: Nutzung der verbesserten Risikodatenaggregation für aussagekräftigere Stresstests und Szenarioanalysen, die die Widerstandsfähigkeit des Instituts realistischer abbilden.\n• New Product Approval: Integration von BCBS-239 Datenstandards in Prozesse zur Einführung neuer Produkte, um Risikomanagement von Anfang an mitzudenken.\n\n🔗 Synergien mit anderen regulatorischen Anforderungen:\n• BCBS-239 & DSGVO/GDPR: Gemeinsame Datengovernance-Strukturen für Risikosteuerung und Datenschutz, die sowohl aufsichtsrechtliche als auch datenschutzrechtliche Anforderungen erfüllen.\n• BCBS-239 & BAIT/VAIT: Gezielte Abstimmung der IT-Anforderungen für Risikodatenaggregation mit den allgemeinen IT-Governance-Anforderungen nach BAIT/VAIT.\n• BCBS-239 & SREP: Nutzung der verbesserten Risikodatenaggregation zur Optimierung der internen Kapitaladäquanzbeurteilung (ICAAP) und Liquiditätsadäquanzbeurteilung (ILAAP).\n• BCBS-239 & Recovery & Resolution Planning: Einsatz der BCBS-239-konformen Datenaggregation für zeitnahe und präzise Informationen in Krisensituationen.\n• BCBS-239 & MaRisk: Harmonisierung der Datenmanagement-Anforderungen mit den generellen Risikomanagement-Anforderungen nach MaRisk, insbesondere AT 4.3.4."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie entwickelt man effektive Change-Management-Strategien für BCBS-239 Ongoing Compliance, die sowohl technische als auch kulturelle Aspekte berücksichtigen?",
        answer: "Nachhaltige BCBS-239 Compliance erfordert mehr als die Implementierung technischer Lösungen – sie verlangt einen tiefgreifenden Kulturwandel und effektives Change Management, das Menschen, Prozesse und Technologien gleichermaßen berücksichtigt. Der Erfolg hängt maßgeblich davon ab, wie Veränderungen kommuniziert, umgesetzt und verankert werden.\n\n🔄 Integrierter Change-Management-Ansatz für nachhaltige Compliance:\n• Top-down und Bottom-up Alignment: Synchronisation strategischer Führungsvorgaben mit operativen Anwendererfahrungen, um einen kohärenten Change-Prozess zu gewährleisten.\n• Stakeholder-spezifische Change-Narrative: Entwicklung maßgeschneiderter Botschaften, die den spezifischen Nutzen der BCBS-239 Compliance für unterschiedliche Stakeholder-Gruppen hervorheben.\n• Mehrstufiger Transformationsplan: Gestaffelte Implementierung von Veränderungen mit erreichbaren Meilensteinen, um Change-Fatigue zu vermeiden und kontinuierliche Motivation zu sichern.\n• Agile Change-Methodik: Flexible Anpassung der Change-Strategie basierend auf kontinuierlichem Feedback und veränderten Rahmenbedingungen.\n• Multidisziplinäre Change-Teams: Zusammenstellung von Teams aus IT-, Fach- und Change-Experten, die alle relevanten Perspektiven in den Transformationsprozess einbringen.\n\n🧠 Strategien zur Förderung einer nachhaltigen Compliance-Kultur:\n• Data Literacy Programme: Schulungen und Workshops zur Stärkung des Verständnisses für Datenqualität und deren Bedeutung für Risikomanagement-Entscheidungen.\n• Ambassadoren-Netzwerk: Identifikation und Förderung von Multiplikatoren in verschiedenen Geschäftsbereichen, die als Vorbilder für datengestützte Compliance-Kultur fungieren.\n• Gamification von Compliance: Einführung spielerischer Elemente wie Compliance-Dashboards mit Abteilungs-Rankings oder Challenge-basierte Schulungen.\n• Integrierte Leistungsindikatoren: Verankerung von Datenqualitäts- und Compliance-Metriken in Zielvereinbarungen und Leistungsbeurteilungen.\n• Sichtbare Erfolgsgeschichten: Regelmäßige Kommunikation von Erfolgen und Best Practices, um den Mehrwert der BCBS-239 Compliance zu demonstrieren und Motivation zu steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices empfiehlt ADVISORI für die Implementierung automatisierter Datenqualitätskontrollen in BCBS-239 relevanten Datenpipelines?",
        answer: "Die Implementierung automatisierter Datenqualitätskontrollen ist ein Schlüsselelement für nachhaltige BCBS-239 Compliance. Effektive Kontrollen müssen strategisch in Datenpipelines integriert werden, um Qualitätsprobleme frühzeitig zu erkennen und zu beheben, bevor sie Risikobewertungen und Entscheidungsprozesse beeinflussen können.\n\n⚙️ Architekturprinzipien für wirksame Datenqualitätskontrollen:\n• Shift-Left Prinzip: Integration von Datenqualitätskontrollen möglichst nah an der Datenquelle, um Fehlerfortpflanzungen durch die gesamte Pipeline zu vermeiden.\n• Kontrollen auf mehreren Ebenen: Implementierung komplementärer Kontrollen auf verschiedenen Stufen der Datenpipeline (Eingabe, Verarbeitung, Aggregation, Reporting).\n• Metadatengesteuerte Validierung: Nutzung von Metadaten und Business Rules Repositories für flexible, konfigurierbare Qualitätskontrollen ohne Programmieränderungen.\n• Exception-basierter Ansatz: Fokussierung auf Anomalien und Abweichungen anstelle vollständiger Datenvalidierung für bessere Performance und Benutzerakzeptanz.\n• Design für Skalierbarkeit: Architektur, die mit wachsendem Datenvolumen, zusätzlichen Datenquellen und verschärften regulatorischen Anforderungen Schritt halten kann.\n\n🔍 Technische Implementierungsstrategien:\n• Regelbasierte Validierungsframeworks: Implementierung flexibler Regelwerke zur Prüfung von Vollständigkeit, Konsistenz, Genauigkeit und Aktualität mit konfigurierbaren Schwellenwerten.\n• Data Profiling Tools: Automatische Analyse von Datenverteilungen und -mustern zur Erkennung von Anomalien und unerwarteten Veränderungen in Datencharakteristiken.\n• Referenzdaten-Management: Zentrale Verwaltung und Versionierung von Referenzdaten zur Sicherstellung konsistenter Validierung über alle Systeme hinweg.\n• Temporale Validierung: Berücksichtigung zeitlicher Dimensionen bei der Datenvalidierung, insbesondere für Zeitreihenanalysen und Trendbetrachtungen.\n• ML-gestützte Datenqualitätsmessung: Einsatz von Machine Learning zur Erkennung subtiler Datenqualitätsprobleme, die regelbasierte Ansätze möglicherweise übersehen würden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute sicherstellen, dass ihre BCBS-239 Compliance auch in Stresssituationen funktioniert und welche Stresstestmethoden empfiehlt ADVISORI?",
        answer: "Die robuste Funktionsfähigkeit von Risikodaten-Aggregation und Reporting in Stresssituationen ist ein Kernziel der BCBS-239 Regulierung. Gerade wenn Märkte volatil sind, Liquidität knapp wird oder operationelle Risiken eintreten, ist die Fähigkeit, schnell präzise Risikoinformationen zu aggregieren, entscheidend für fundierte Entscheidungen und die Stabilität des Finanzinstituts.\n\n🔥 Stressteststrategien für BCBS-239 Compliance-Robustheit:\n• Multi-Dimensionales Stresstesting: Kombination von technischen, prozessualen und organisatorischen Stresstests, um die Widerstandsfähigkeit des gesamten Risikodaten-Ökosystems zu prüfen.\n• Reverse Stress Testing: Identifikation von Szenarien, die zum Zusammenbruch der Risikodaten-Aggregation führen könnten, um kritische Schwachstellen proaktiv zu adressieren.\n• Progressive Komplexitätssteigerung: Beginn mit einfachen Testszenarien und schrittweise Erhöhung der Komplexität, um Schwachstellen systematisch zu identifizieren.\n• Unangekündigte Stresstests: Durchführung spontaner Tests ohne Vorankündigung, um die reale Reaktionsfähigkeit unter Stressbedingungen zu evaluieren.\n• Cross-Functional Testing: Einbeziehung aller relevanten Abteilungen (IT, Risikomanagement, Fachbereiche, Compliance) in die Stresstests, um Silodenken zu überwinden.\n\n🛠️ Spezifische Testmethoden für kritische BCBS-239 Komponenten:\n• Datenvolumen-Stresstests: Simulation extremer Datenvolumina (z.B. 10-faches Normalvolumen) zur Prüfung der Skalierbarkeit von Aggregationssystemen.\n• Zeitdruck-Simulationen: Tests zur Validierung der Fähigkeit, komplexe Risikoberichte unter extremem Zeitdruck (z.B. intraday statt end-of-day) zu erstellen.\n• Ressourcen-Limitierung: Durchführung von Stresstests mit bewusst eingeschränkten Ressourcen (z.B. reduzierte Rechenkapazität, Ausfall von Personal).\n• Dateninkonsistenz-Szenarien: Simulation von Datenqualitätsproblemen, um die Robustheit von Datenqualitätskontrollen und Eskalationsmechanismen zu testen.\n• Recovery-Tests: Überprüfung der Wiederherstellungszeiten und -fähigkeiten nach simulierten System- oder Prozessausfällen."
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
