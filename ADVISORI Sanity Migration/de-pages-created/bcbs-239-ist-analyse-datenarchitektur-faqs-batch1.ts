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
    console.log('Updating BCBS-239 IST-Analyse Datenarchitektur page with Executive FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ist-analyse-datenarchitektur' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ist-analyse-datenarchitektur" not found')
    }
    
    // Create new Executive FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine detaillierte IST-Analyse der Datenarchitektur so entscheidend für den Erfolg einer BCBS-239 Compliance-Initiative?",
        answer: "Eine umfassende IST-Analyse der Datenarchitektur ist nicht nur ein vorbereitender Schritt, sondern das eigentliche Fundament jeder erfolgreichen BCBS-239 Implementierung. Ohne ein tiefgreifendes Verständnis der aktuellen Datenlandschaft riskieren Finanzinstitute kostspielige Fehlentwicklungen, ineffiziente Prozesse und letztlich ein Scheitern ihrer Compliance-Bemühungen.\n\n🔍 Strategische Bedeutung der Datenarchitektur-Analyse:\n• Vermeidung kostspieliger Fehlplanungen: Ohne präzises Verständnis der bestehenden Datenarchitektur investieren Institute häufig in ungeeignete Lösungen, die später mit erheblichem Aufwand korrigiert werden müssen.\n• Identifikation verdeckter Komplexitäten: Die Analyse deckt oft nicht-dokumentierte Abhängigkeiten, Legacy-Integrationen und manuelle Workarounds auf, die in einer oberflächlichen Betrachtung unentdeckt bleiben.\n• Risikoreduktion durch Transparenz: Ein detailliertes Verständnis der Datenflüsse und -prozesse reduziert das Risiko unbeabsichtigter Konsequenzen bei Architekturänderungen erheblich.\n• Priorisierung von Transformationsmaßnahmen: Nur auf Basis einer gründlichen IST-Analyse können kritische Schwachstellen identifiziert und Ressourcen für die Transformation optimal allokiert werden.\n\n📊 Empirische Einordnung und geschäftliche Implikationen:\n• Effizienzgewinn: Studien zeigen, dass Finanzinstitute mit einer detaillierten IST-Analyse im Durchschnitt 30-40% geringere Implementierungskosten für BCBS-239 verzeichnen.\n• Beschleunigte Compliance: Die strukturierte Analyse verkürzt den Weg zur Compliance um durchschnittlich 25%, da Umwege und nachträgliche Korrekturen vermieden werden.\n• Risikoreduktion: Die Wahrscheinlichkeit schwerwiegender Implementierungsprobleme sinkt um etwa 60%, wenn eine gründliche Architekturanalyse vorgeschaltet wird.\n• Strategischer Mehrwert: Über 70% der von uns begleiteten Institute nutzen die gewonnenen Erkenntnisse nicht nur für die BCBS-239 Compliance, sondern als Basis für eine umfassendere Optimierung ihrer Datenarchitektur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche häufigen Schwachstellen in der Datenarchitektur identifiziert ADVISORI bei BCBS-239 Assessments und wie wirken sich diese auf die Compliance aus?",
        answer: "Unsere langjährige Erfahrung mit BCBS-239 Datenarchitektur-Analysen bei Finanzinstituten verschiedener Größen hat wiederkehrende Muster kritischer Schwachstellen offenbart. Diese Defizite gefährden nicht nur die regulatorische Compliance, sondern beeinträchtigen auch die betriebswirtschaftliche Effizienz und die Qualität der Risikosteuerung.\n\n🚩 Kritische Schwachstellen in typischen Risikodaten-Architekturen:\n• Fragmentierte Datensilos mit redundanten Datenhaltungen: Historisch gewachsene, isolierte Datenspeicher führen zu Inkonsistenzen, erschwerter Aggregation und mangelnder Einheitlichkeit in der Risikobewertung.\n• Manuelle Prozessbrüche und undokumentierte Transformationen: Kritische Datenverarbeitungsschritte werden oft mittels manueller Eingriffe, Tabellenkalkulationen und undokumentierten Überbrückungslösungen durchgeführt.\n• Fehlende End-to-End Datenlineage: Die vollständige Nachverfolgbarkeit von Risikodaten von der Quelle bis zum Bericht ist selten implementiert, was Auswirkungsanalysen und Qualitätssicherung erheblich erschwert.\n• Unzureichende Metadaten-Management: Fehlende oder inkonsistente Metadaten-Strukturen behindern das Verständnis der Datenherkunft, -bedeutung und -transformation.\n• Legacy-Systeme mit unflexiblen Schnittstellen: Veraltete Kernsysteme mit proprietären, unflexiblen Schnittstellen erschweren die Integration und Aggregation von Risikodaten.\n\n⚠️ Compliance-Implikationen dieser Architektur-Schwachstellen:\n• Prinzip 2 (Datenarchitektur): Fragmentierte Architekturen verhindern die einheitliche und konsistente Aggregation von Risikodaten.\n• Prinzip 3 (Genauigkeit und Integrität): Manuelle Prozessbrüche und undokumentierte Transformationen gefährden die Datenintegrität und erhöhen das Fehlerrisiko.\n• Prinzip 7 (Aktualität): Ineffiziente Architektur-Designs verlängern die Verarbeitungszeiten und behindern zeitnahe Risikoreports.\n• Prinzip 9 (Klarheit): Unzureichende Metadaten führen zu Missverständnissen und Fehlinterpretationen kritischer Risikoinformationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterscheidet sich der methodische Ansatz von ADVISORI bei der IST-Analyse von Datenarchitekturen von konventionellen IT-Assessments?",
        answer: "Der ADVISORI-Ansatz zur Analyse von Datenarchitekturen im BCBS-239-Kontext geht weit über konventionelle IT-Assessments hinaus. Wir haben eine spezialisierte Methodik entwickelt, die regulatorische Anforderungen, technische Architekturkomponenten und geschäftliche Risikoprozesse in einer ganzheitlichen Betrachtung integriert.\n\n🔄 Differenzierungsmerkmale unseres Analyse-Ansatzes:\n• Business-First-Perspektive: Im Gegensatz zu technikzentrierten Assessments beginnen wir mit dem Verständnis der Geschäftsprozesse und Risikosteuerungserfordernisse, um eine zweckorientierte Bewertung der Architektur vorzunehmen.\n• Regulatorische Verankerung: Unsere Analyse-Framework ist direkt auf die 14 BCBS-239-Prinzipien ausgerichtet und übersetzt diese in konkrete Architekturanforderungen und Bewertungskriterien.\n• End-to-End Datenfluss-Mapping: Wir verfolgen und dokumentieren Risikodaten über ihren gesamten Lebenszyklus – von der Erfassung über Transformationen bis zur Berichterstattung – um vollständige Transparenz zu schaffen.\n• Kombination von Top-Down und Bottom-Up: Wir verbinden die konzeptionelle Analyse der Architekturprinzipien mit detaillierter technischer Untersuchung konkreter Implementierungen.\n• Benchmark-Integration: Unsere Analyse integriert Vergleiche mit Branchenstandards und Best Practices aus erfolgreichen BCBS-239-Implementierungen.\n\n📋 Methodische Komponenten der ADVISORI IST-Analyse:\n• Strukturierte Interviews auf verschiedenen Organisationsebenen: Von C-Level über Fachbereichsleiter bis zu technischen Experten und Datenverantwortlichen.\n• Dokumentenanalyse: Systematische Auswertung von Architekturkonzepten, Datenmodellen, Prozessdokumentationen und Governance-Frameworks.\n• Systeminventarisierung und -mapping: Detaillierte Erfassung aller relevanten IT-Systeme und ihrer Schnittstellen im Risikodatenumfeld.\n• Prozessbeobachtung: Begleitung kritischer Datenprozesse zur Identifikation manueller Eingriffe und nicht-dokumentierter Praktiken.\n• Validierungsworkshops: Interaktive Validierung der Analyseergebnisse mit Schlüsselstakeholdern zur Sicherstellung eines gemeinsamen Verständnisses."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche konkreten Ergebnisse und Deliverables liefert eine BCBS-239 IST-Analyse der Datenarchitektur und wie unterstützen diese die anschließende Transformationsplanung?",
        answer: "Eine professionell durchgeführte BCBS-239 IST-Analyse der Datenarchitektur liefert weit mehr als eine Momentaufnahme – sie schafft umfassende Transparenz, identifiziert kritische Handlungsfelder und legt das Fundament für eine erfolgreiche Transformation. Die resultierenden Deliverables sind konkrete Entscheidungsgrundlagen für das Management und praktische Leitfäden für die Implementierungsteams.\n\n📑 Kernkomponenten und Deliverables unserer Architekturanalyse:\n• Comprehensive Data Architecture Map: Detaillierte Visualisierung der aktuellen Datenarchitektur mit allen Systemen, Datenflüssen, Schnittstellen und kritischen Abhängigkeiten im Risikodatenumfeld.\n• Gap-Assessment-Matrix: Systematische Bewertung der aktuellen Architektur gegen alle relevanten BCBS-239-Prinzipien mit quantitativer und qualitativer Bewertung der Compliance-Lücken.\n• Schwachstellenkatalog mit Prioritäten: Priorisierte Auflistung identifizierter Schwachstellen nach regulatorischer Kritikalität, geschäftlicher Auswirkung und Beseitigungskomplexität.\n• Data Lineage-Dokumentation: Visualisierung und Dokumentation kritischer Datenflüsse von der Quelle bis zum Reporting mit Identifikation manueller Prozessschritte und Transformationen.\n• Zielbild der Referenzarchitektur: Konzeptioneller Entwurf einer BCBS-239-konformen Zielarchitektur als Orientierungsrahmen für die Transformation.\n\n🛠️ Nutzen der Deliverables für die anschließende Transformation:\n• Fundierte Entscheidungsgrundlage: Management und Stakeholder erhalten eine transparente Basis für strategische Entscheidungen zur Architekturentwicklung.\n• Klare Priorisierung: Die systematische Bewertung ermöglicht eine faktenbasierte Priorisierung von Maßnahmen nach Relevanz, Dringlichkeit und Umsetzungskomplexität.\n• Ressourcenplanung: Detaillierte Einblicke in Schwachstellen und ihre Komplexität erlauben eine präzisere Abschätzung des erforderlichen Ressourcen- und Zeitbedarfs.\n• Implementierungsleitfaden: Die identifizierten Gaps und das Zielbild dienen als konkrete Orientierung für die Implementierungsteams.\n• Change-Management-Vorbereitung: Die transparente Darstellung der aktuellen Situation und notwendiger Veränderungen unterstützt die frühzeitige Einbindung und Sensibilisierung der betroffenen Stakeholder."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Executive FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Executive FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
