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
    console.log('Updating CRR/CRD Ongoing Compliance page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Best Practices gibt es für Finanzinstitute, um eine dynamische CRR/CRD-Compliance-Kultur zu etablieren?",
        answer: "Eine dynamische Compliance-Kultur ist der Schlüssel zur nachhaltigen Einhaltung der CRR/CRD-Anforderungen, da sie Compliance von einer reinen Pflichtübung zu einem integrierten Bestandteil der Unternehmens-DNA transformiert. ADVISORI unterstützt Finanzinstitute dabei, eine lebendige Compliance-Kultur zu entwickeln, die nicht nur Risiken minimiert, sondern auch Innovation und Wachstum fördert.\n\n🌱 Kernelemente einer dynamischen CRR/CRD-Compliance-Kultur:\n• Tone from the Top: Vorbildfunktion der Führungsebene durch konsequentes Vorleben von Compliance-Prinzipien und Integration regulatorischer Überlegungen in strategische Entscheidungen.\n• Klare Verantwortlichkeiten: Etablierung eines Three-Lines-of-Defense-Modells mit klar definierten Rollen und Rechenschaftspflichten für Compliance-Aspekte auf allen Organisationsebenen.\n• Transparente Kommunikation: Offener Dialog über regulatorische Anforderungen, Compliance-Herausforderungen und Erfolge, um Bewusstsein und Engagement zu fördern.\n• Kontinuierliches Lernen: Aufbau einer Lernkultur, die regulatorische Entwicklungen aktiv verfolgt und Erkenntnisse aus Prüfungen und Incidents systematisch in Verbesserungen umsetzt.\n\n🔄 ADVISORI's Ansatz zur Kulturentwicklung:\n• Cultural Assessment: Analyse der bestehenden Compliance-Kultur durch Befragungen, Workshops und Beobachtungen, um Stärken, Schwächen und kulturelle Barrieren zu identifizieren.\n• Change Management: Entwicklung und Umsetzung eines maßgeschneiderten Kulturwandel-Programms mit klaren Meilensteinen, Kommunikationsstrategien und Erfolgsmessungen.\n• Experiential Learning: Konzeption interaktiver Schulungs- und Sensibilisierungsformate, die regulatorische Anforderungen praxisnah vermitteln und die persönliche Relevanz für jeden Mitarbeiter verdeutlichen.\n• Recognition & Incentives: Implementierung von Anreiz- und Anerkennungssystemen, die compliance-konformes Verhalten belohnen und in Leistungsbeurteilungen integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute ein effektives Regulatory Change Management für die kontinuierliche CRR/CRD-Compliance etablieren?",
        answer: "Die stetige Evolution des regulatorischen Rahmens stellt Finanzinstitute vor die Herausforderung, regulatorische Änderungen frühzeitig zu erkennen, ihre Auswirkungen zu bewerten und effizient in bestehende Strukturen zu integrieren. Ein systematisches Regulatory Change Management ist daher unverzichtbar für eine nachhaltige CRR/CRD-Compliance. ADVISORI unterstützt Finanzinstitute bei der Etablierung eines strukturierten und agilen Ansatzes zur Bewältigung des regulatorischen Wandels.\n\n📋 Schlüsselkomponenten eines effektiven Regulatory Change Managements:\n• Regulatory Monitoring: Systematische Überwachung regulatorischer Entwicklungen auf nationaler und internationaler Ebene, einschließlich Konsultationen, Diskussionspapieren und finaler Regelwerke.\n• Impact Assessment: Strukturierte Bewertung der Auswirkungen neuer Anforderungen auf Geschäftsmodelle, Prozesse, Systeme und Kontrollen, mit klarer Priorisierung basierend auf Risiko und Komplexität.\n• Implementation Planning: Entwicklung detaillierter Umsetzungspläne mit klaren Verantwortlichkeiten, Ressourcenzuweisungen, Meilensteinen und Abhängigkeiten zwischen verschiedenen Initiativen.\n• Stakeholder Management: Frühzeitige Einbindung aller relevanten internen und externen Stakeholder, um Widerstände zu minimieren und die erforderliche Unterstützung sicherzustellen.\n\n🔄 ADVISORI's Framework für agiles Regulatory Change Management:\n• Integrierte Governance-Struktur: Etablierung eines cross-funktionalen Regulatory Change Committees, das regulatorische Entwicklungen bewertet, Prioritäten setzt und Ressourcen zuweist.\n• Stage-Gate-Prozess: Implementierung eines strukturierten Prozesses für die Bewertung und Umsetzung regulatorischer Änderungen, der eine systematische Qualitätssicherung und Risikominimierung gewährleistet.\n• Technologische Unterstützung: Einsatz spezialisierter Tools für das Monitoring regulatorischer Entwicklungen, die Verwaltung von Compliance-Anforderungen und das Tracking von Umsetzungsaktivitäten.\n• Knowledge Management: Aufbau einer zentralen Wissensdatenbank für regulatorische Interpretationen, Umsetzungsleitfäden und Best Practices, die kontinuierliches Lernen und Konsistenz fördert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Rolle spielt Data Governance bei der nachhaltigen Einhaltung der CRR/CRD-Anforderungen?",
        answer: "Datenqualität und -integrität sind fundamentale Voraussetzungen für eine nachhaltige CRR/CRD-Compliance, da regulatorische Berechnungen, Risikoanalysen und Meldewesen direkt von der Verfügbarkeit, Genauigkeit und Konsistenz der zugrundeliegenden Daten abhängen. Eine robuste Data Governance bildet daher das Fundament für eine zuverlässige und effiziente Ongoing Compliance. ADVISORI unterstützt Finanzinstitute bei der Entwicklung und Implementierung umfassender Data-Governance-Frameworks, die speziell auf die Anforderungen der regulatorischen Compliance zugeschnitten sind.\n\n🔍 Kernaspekte der Data Governance für CRR/CRD-Compliance:\n• Datenqualitätsmanagement: Etablierung systematischer Prozesse zur Sicherstellung und kontinuierlichen Verbesserung der Datenqualität entlang der gesamten Datenlieferkette, von der Erfassung bis zur regulatorischen Berichterstattung.\n• Datenarchitektur und -modellierung: Entwicklung einer konsistenten Datenarchitektur, die regulatorische Anforderungen mit internen Steuerungsbedürfnissen in Einklang bringt und redundante Datenströme minimiert.\n• Metadata Management: Implementierung eines umfassenden Metadaten-Repositories, das die Herkunft, Definition, Transformation und Verwendung regulatorisch relevanter Daten dokumentiert und nachvollziehbar macht.\n• Data Lineage und Traceability: Etablierung von Mechanismen zur durchgängigen Nachverfolgung von Daten von ihrer Quelle bis zur regulatorischen Verwendung, um Prüfbarkeit und Nachvollziehbarkeit sicherzustellen.\n\n🏗️ ADVISORI's Data Governance Ansatz für regulatorische Zwecke:\n• Regulatory Data Dictionary: Entwicklung eines zentralen Verzeichnisses regulatorischer Datenpunkte mit klaren Definitionen, Berechnungslogiken, Datenquellen und Verwendungszwecken.\n• Data Quality Framework: Implementierung eines mehrstufigen Kontrollrahmens für regulatorische Daten mit automatisierten Validierungen, Plausibilitätsprüfungen und Abweichungsanalysen.\n• Data Ownership Model: Etablierung klarer Verantwortlichkeiten für Datenqualität und -integrität entlang der gesamten Wertschöpfungskette, vom Business bis zur IT.\n• Regulatory Data Integration: Konzeption einer integrierten Datenbasis für regulatorische Zwecke, die Konsistenz zwischen verschiedenen regulatorischen Anforderungen (CRR/CRD, BCBS 239, AnaCredit etc.) sicherstellt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute den Reifegrad ihrer CRR/CRD-Compliance messen und kontinuierlich verbessern?",
        answer: "Die systematische Bewertung und kontinuierliche Verbesserung des CRR/CRD-Compliance-Reifegrads ist essentiell, um nicht nur regulatorische Anforderungen zu erfüllen, sondern auch operationelle Exzellenz und strategische Vorteile zu erzielen. ADVISORI hat ein umfassendes Reifegradmodell entwickelt, das Finanzinstituten ermöglicht, ihren aktuellen Stand objektiv zu bewerten und gezielte Maßnahmen zur Weiterentwicklung zu identifizieren.\n\n📊 Dimensionen des CRR/CRD-Compliance-Reifegradmodells:\n• Governance und Organisation: Bewertung der Effektivität von Compliance-Strukturen, Verantwortlichkeiten, Eskalationswegen und der Integration in die Gesamtgovernance des Instituts.\n• Prozesse und Kontrollen: Analyse der Reife von Compliance-Prozessen, von reaktiven Ad-hoc-Maßnahmen bis hin zu proaktiven, automatisierten und kontinuierlich optimierten Verfahren.\n• Systeme und Daten: Evaluation der technologischen Unterstützung und Datenqualität, von manuellen, fragmentierten Lösungen bis zu integrierten, automatisierten Plattformen mit hoher Datenintegrität.\n• Kultur und Kompetenzen: Beurteilung des Compliance-Bewusstseins und der Fähigkeiten auf allen Organisationsebenen, von oberflächlichem Regelwissen bis zu tiefgreifendem Verständnis und proaktivem Engagement.\n\n🔄 ADVISORI's Ansatz zur kontinuierlichen Reifegradsteigerung:\n• Maturity Assessment: Durchführung einer umfassenden Ist-Analyse des Compliance-Reifegrads mittels strukturierter Interviews, Dokumentenanalysen und Prozessbeobachtungen.\n• Benchmark-Analyse: Vergleich des ermittelten Reifegrads mit Best Practices und Branchenstandards, um Stärken, Schwächen und Verbesserungspotenziale zu identifizieren.\n• Priorisierte Roadmap: Entwicklung eines mehrstufigen Entwicklungsplans mit kurz-, mittel- und langfristigen Maßnahmen, die auf die spezifischen Herausforderungen und strategischen Ziele des Instituts zugeschnitten sind.\n• Capability Building: Unterstützung bei der Implementierung ausgewählter Verbesserungsmaßnahmen, von der Konzeption über die Pilotierung bis zur vollständigen Integration in den Regelbetrieb."
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
