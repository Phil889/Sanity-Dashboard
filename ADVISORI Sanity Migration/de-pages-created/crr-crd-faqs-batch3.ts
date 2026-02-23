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
    console.log('Updating CRR/CRD page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die Kapitalplanung und -steuerung unter CRR/CRD optimieren, um trotz regulatorischer Anforderungen strategische Flexibilität zu bewahren?",
        answer: "Eine effektive Kapitalplanung und -steuerung unter den CRR/CRD-Regelungen erfordert die Balance zwischen der Erfüllung regulatorischer Anforderungen und der Wahrung strategischer Handlungsspielräume. ADVISORI unterstützt Finanzinstitute bei der Entwicklung eines integrierten Kapitalmanagement-Ansatzes, der Compliance sicherstellt und gleichzeitig die Grundlage für nachhaltiges Wachstum bildet.\n\n🧭 Kernelemente eines strategisch ausgerichteten Kapitalmanagements:\n• Integrierte Kapitalplanung: Entwicklung eines ganzheitlichen Planungsprozesses, der regulatorische Anforderungen mit Geschäftszielen und Wachstumsstrategien in Einklang bringt und multiple Szenarien berücksichtigt.\n• Risikobasierte Kapitalallokation: Implementierung eines Allokationsmodells, das Kapital gezielt den ertragreichsten Geschäftsbereichen unter Berücksichtigung ihres Risikoprofils und regulatorischer Kapitalanforderungen zuweist.\n• Aktives Buffer-Management: Etablierung einer differenzierten Pufferstrategie, die Mindestanforderungen, Pillar 2-Zuschläge und kombinierte Pufferanforderungen berücksichtigt und gleichzeitig operative Flexibilität gewährleistet.\n• Kapitaleffizienz-Optimierung: Identifikation und Umsetzung von Maßnahmen zur Reduktion von RWA und Verbesserung der Kapitaleffizienz ohne strategische Geschäftsziele zu kompromittieren.\n\n📈 ADVISORIs Ansatz für nachhaltige Kapitaloptimierung:\n• Multi-Dimensionale Kapitalplanungsmodelle: Entwicklung fortschrittlicher Planungsmodelle, die CRR/CRD-Anforderungen, IFRS 9-Auswirkungen, ICAAP-Prozesse und Stress-Szenarien integrieren.\n• Portfoliooptimierung: Analyse der bestehenden Portfoliostruktur und Identifikation von Restrukturierungsmöglichkeiten zur Verbesserung der Kapitaleffizienz und Rentabilität.\n• Strategische Bilanzsteuerung: Beratung bei der optimalen Gestaltung der Bilanzstruktur unter Berücksichtigung von Kapital-, Liquiditäts- und Rentabilitätszielen.\n• M&A und strukturelle Optionen: Bewertung von Akquisitions-, Desinvestitions- und strukturellen Optionen (wie Verbriefungen, Garantien oder Risikoübertragungen) zur Optimierung der Kapitalstruktur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche speziellen Herausforderungen stellen die CRR/CRD-Anforderungen an kleine und mittlere Banken, und wie unterstützt ADVISORI bei der Umsetzung eines proportionalen Ansatzes?",
        answer: "Kleine und mittlere Banken sehen sich bei der Umsetzung der CRR/CRD-Anforderungen mit besonderen Herausforderungen konfrontiert. Während das Proportionalitätsprinzip in der Regulierung verankert ist, bleibt die praktische Anwendung oft komplex. ADVISORI hat einen spezialisierten Ansatz entwickelt, der kleineren Instituten hilft, einen angemessenen, kosteneffizienten Compliance-Rahmen zu etablieren, ohne die regulatorischen Anforderungen zu kompromittieren.\n\n⚖️ Spezifische Herausforderungen für kleinere Institute:\n• Ressourcenlimitierung: Begrenzte personelle, technische und finanzielle Ressourcen bei gleichzeitig hoher regulatorischer Komplexität stellen eine fundamentale Herausforderung dar.\n• Kostenintensive Compliance-Infrastruktur: Die Implementierung spezialisierter Systeme und Prozesse für regulatorische Anforderungen bindet einen überproportional hohen Anteil des Budgets kleinerer Institute.\n• Kompetenzaufbau: Die Schwierigkeit, spezialisiertes Know-how für komplexe regulatorische Themen aufzubauen und zu halten, insbesondere in Bereichen wie fortgeschrittene Risikomodellierung oder ICAAP.\n• Wettbewerbsnachteil: Das Risiko, dass höhere relative Compliance-Kosten zu Wettbewerbsnachteilen gegenüber größeren Instituten führen, die von Skaleneffekten profitieren.\n\n🔍 ADVISORIs proportionaler Implementierungsansatz:\n• Regulatorische Essentials-Analyse: Identifikation der wirklich notwendigen Compliance-Maßnahmen unter Berücksichtigung der spezifischen Geschäftsmodelle und Risikoprofile kleinerer Institute.\n• Vereinfachte Methoden-Toolkit: Entwicklung und Implementierung vereinfachter, aber aufsichtsrechtlich robuster Methoden für Risikobewertung, Kapitalplanung und Stress-Testing, die den Proportionalitätsanforderungen entsprechen.\n• Kollaborative Compliance-Modelle: Beratung zu Möglichkeiten der institutsübergreifenden Zusammenarbeit bei Compliance-Aufgaben oder zum Outsourcing bestimmter regulatorischer Funktionen.\n• Technologische Effizienzlösungen: Implementierung kosteneffizienter Technologielösungen, die speziell auf die Bedürfnisse kleinerer Institute zugeschnitten sind und einen hohen Automatisierungsgrad bei minimalen Implementierungskosten bieten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI bei der Vorbereitung und Durchführung von internen Stresstests (ICAAP/ILAAP) im Rahmen der CRR/CRD-Anforderungen?",
        answer: "Interne Stresstests im Rahmen von ICAAP (Internal Capital Adequacy Assessment Process) und ILAAP (Internal Liquidity Adequacy Assessment Process) haben sich zu kritischen Instrumenten des Risikomanagements und der aufsichtsrechtlichen Compliance entwickelt. ADVISORI unterstützt Finanzinstitute bei der Entwicklung und Implementierung robuster, geschäftsrelevanter Stresstestverfahren, die sowohl regulatorische Anforderungen erfüllen als auch wertvolle strategische Erkenntnisse liefern.\n\n🔬 Zentrale Komponenten eines effektiven Stresstestframeworks:\n• Integrierte Szenarioentwicklung: Konzeption konsistenter, plausibel schwerer, aber nicht unrealistischer Stress-Szenarien, die makroökonomische Faktoren mit institutsspezifischen Vulnerabilitäten verbinden.\n• Ganzheitliche Risikoerfassung: Entwicklung von Methoden zur umfassenden Berücksichtigung aller materiellen Risiken im Stresstest, einschließlich schwer quantifizierbarer Risikokategorien wie strategische und Reputationsrisiken.\n• Vorwärtsgerichtete Analyse: Implementierung vorausschauender, mehrjähriger Projektionen, die dynamische Bilanzentwicklungen und Management-Aktionen unter Stressbedingungen realistisch abbilden.\n• Management-Integration: Verankerung der Stresstestergebnisse in strategischen Entscheidungsprozessen, der Risikoappetitformulierung und der Kapital- und Liquiditätsplanung.\n\n📊 ADVISORIs spezialisierter Stresstestansatz:\n• Methodische Exzellenz: Entwicklung statistisch robuster und ökonomisch plausibler Modelle zur Übersetzung makroökonomischer Szenarien in institutsrelevante Risikotreiber und finanzielle Auswirkungen.\n• Regulatorische Alignment: Sicherstellung der vollständigen Erfüllung aufsichtsrechtlicher Erwartungen aus EBA-Leitlinien, SSM-Manualen und nationalen Anforderungen ohne Übererfüllung.\n• IT-Implementierung: Unterstützung bei der technischen Umsetzung eines effizienten Stresstest-Systems, das flexible Szenariosimulationen und transparente Ergebnisdarstellungen ermöglicht.\n• Strategische Interpretation: Beratung zur sinnvollen Interpretation von Stresstestergebnissen und deren Übersetzung in konkrete Management-Maßnahmen und Kapitalplanungsaktivitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielen ESG-Faktoren in den aktuellen CRR/CRD-Anforderungen und wie unterstützt ADVISORI Banken bei der Integration von Nachhaltigkeitsrisiken?",
        answer: "Die Integration von Umwelt-, Sozial- und Governance-Faktoren (ESG) in den CRR/CRD-Rahmen markiert einen Paradigmenwechsel in der Bankenregulierung. Nachhaltigkeitsrisiken werden zunehmend als materielle finanzielle Risikotreiber anerkannt, die explizite Berücksichtigung in Risikomanagement, Kapitalplanung und Offenlegungspraktiken erfordern. ADVISORI unterstützt Finanzinstitute mit einem ganzheitlichen Ansatz bei dieser komplexen Transformation.\n\n🌱 ESG-Integration in den CRR/CRD-Rahmen:\n• Risikomanagement-Erweiterung: ESG-Risiken müssen in bestehende Risikomanagement-Frameworks integriert werden, insbesondere bei Kredit-, Markt- und operationellen Risiken sowie bei der Identifikation und Bewertung emergenter Risiken.\n• Kapitalplanung und ICAAP: Nachhaltigkeitsrisiken sind in den ICAAP zu integrieren, einschließlich Stress-Tests für Klimarisiken mit verschiedenen Zeithorizonten (kurz-, mittel- und langfristig).\n• Erweiterte Offenlegungspflichten: ESG-bezogene Risiken und deren Management müssen in den Pillar 3-Offenlegungen transparent dargestellt werden, einschließlich quantitativer Metriken und qualitativer Strategiebeschreibungen.\n• Governance und Aufsicht: Etablierung klarer Verantwortlichkeiten für ESG-Risiken in Governance-Strukturen und Entscheidungsprozessen der Institute.\n\n🛠️ ADVISORIs integrierter ESG-Compliance-Ansatz:\n• ESG-Risikoinventur: Systematische Identifikation und Bewertung von Nachhaltigkeitsrisiken im spezifischen Geschäftsmodell und Portfolio des Instituts, mit besonderem Fokus auf Transitionsrisiken und physische Risiken.\n• Methodenentwicklung: Konzeption und Implementierung robuster Methoden zur Quantifizierung von ESG-Risiken, einschließlich Szenarioanalysen und Stresstests für verschiedene Klimawandel-Szenarien.\n• Strategische ESG-Integration: Beratung zur strategischen Positionierung im ESG-Kontext, einschließlich der Integration von Nachhaltigkeitsaspekten in Kreditvergabeprozesse und Portfoliomanagement.\n• Daten- und Reportingstruktur: Aufbau einer zukunftssicheren Dateninfrastruktur zur Erfassung, Analyse und Berichterstattung von ESG-bezogenen Informationen, die regulatorische Anforderungen erfüllt und strategische Einblicke ermöglicht."
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
