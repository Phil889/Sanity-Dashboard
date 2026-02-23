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
    console.log('Updating CRR/CRD page with FAQs batch 4...')
    
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
        question: "Wie entwickelt sich die Bankenaufsicht in Europa, und welche zukünftigen Anforderungen an das Risikomanagement und die Kapitalausstattung sind zu erwarten?",
        answer: "Die europäische Bankenaufsicht befindet sich in einem kontinuierlichen Transformationsprozess, der durch regulatorische Weiterentwicklungen, Marktdynamiken und neue Risikodimensionen geprägt ist. ADVISORI verfolgt aufmerksam diese Entwicklungen und unterstützt Finanzinstitute dabei, sich frühzeitig auf kommende Anforderungen einzustellen und strategische Wettbewerbsvorteile zu sichern.\n\n🔮 Zentrale Entwicklungslinien der europäischen Bankenregulierung:\n• Basel IV Finalisierung: Die vollständige Implementierung der Basel IV-Standards mit strengeren Output-Floors und überarbeiteten Standardansätzen für verschiedene Risikokategorien wird die Kapitalanforderungen und Risikomodellierung grundlegend verändern.\n• Digitale Transformation der Aufsicht: Der Trend zu datengetriebener Aufsicht mit direktem Zugriff auf granulare Bankdaten (Supervisory Technology) wird die Transparenzanforderungen und Datenmanagementsysteme signifikant beeinflussen.\n• Klimarisiko-Integration: Die systematische Einbindung von Klimarisiken in alle Säulen der Bankenregulierung, einschließlich spezifischer Kapitalanforderungen für klimabezogene Risiken, wird zunehmend konkreter.\n• Konsolidierung des einheitlichen Regelwerks: Die weitere Harmonisierung der europäischen Bankenregulierung mit dem Ziel einer echten Bankenunion und einheitlicher Aufsichtspraktiken bleibt ein zentrales Leitmotiv.\n\n🧠 ADVISORIs Ansatz zur Vorbereitung auf zukünftige Anforderungen:\n• Regulatorisches Frühwarnsystem: Aktives Monitoring von regulatorischen Entwicklungen und frühzeitige Analyse ihrer geschäftlichen Auswirkungen auf Ihr spezifisches Instituts- und Portfolioprofil.\n• Szenariobasierte Strategieentwicklung: Erarbeitung verschiedener regulatorischer Szenarien und Entwicklung flexibler strategischer Anpassungspfade, die eine schnelle Reaktion auf veränderte Anforderungen ermöglichen.\n• Zukunftssichere Architektur: Konzeption und Implementierung von Daten- und IT-Architekturen, die agil genug sind, um mit zukünftigen regulatorischen Anforderungen Schritt zu halten, ohne grundlegende Restrukturierungen zu erfordern.\n• Proaktiver Aufsichtsdialog: Unterstützung bei der frühzeitigen Kommunikation mit Aufsichtsbehörden zu geplanten Anpassungen und strategischen Positionierungen im Kontext sich entwickelnder regulatorischer Erwartungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute die Anforderungen an das Kontrahentenrisikomanagement nach CRR/CRD effektiv umsetzen und optimieren?",
        answer: "Das Management von Kontrahentenrisiken hat unter den CRR/CRD-Regelungen erheblich an Komplexität und strategischer Bedeutung gewonnen. Mit der Einführung der Standardized Approach for Counterparty Credit Risk (SA-CCR) und strengeren Anforderungen an CVA-Risiken stehen Finanzinstitute vor der Herausforderung, ihre Ansätze grundlegend zu überarbeiten. ADVISORI unterstützt bei der Implementation eines effektiven und kapitaleffizienten Kontrahentenrisikomanagements.\n\n⚖️ Kernelemente eines fortschrittlichen Kontrahentenrisikomanagements:\n• Integrierte Risikomessung: Entwicklung eines konsistenten Messansatzes für Kontrahentenrisiken, der regulatorische Anforderungen (SA-CCR, CVA) mit internen ökonomischen Betrachtungen verbindet und eine Grundlage für strategische Geschäftsentscheidungen bildet.\n• Kollateral-Management-Optimierung: Implementierung fortschrittlicher Kollateralisierungsstrategien und -prozesse, die regulatorische Kapitalentlastungen maximieren und gleichzeitig operationelle Effizienz sicherstellen.\n• Risikominderungstechniken: Systematische Bewertung und Implementierung von regulatorisch anerkannten Risikominderungstechniken wie Netting, Hedging und zentrales Clearing unter Berücksichtigung ihrer Kosten-Nutzen-Profile.\n• Prä-Trade-Analyse: Etablierung von Prozessen zur Bewertung der regulatorischen Kapitalwirkung neuer Transaktionen vor Abschluss, um eine kapitaleffiziente Deal-Strukturierung zu ermöglichen.\n\n🔄 ADVISORIs ganzheitlicher Implementierungsansatz:\n• Methodische Implementierung: Unterstützung bei der korrekten Implementierung der regulatorischen Vorgaben für SA-CCR und CVA, einschließlich der Validierung von Berechnungsalgorithmen und Datenflüssen.\n• Systemintegration: Beratung bei der Auswahl und Implementierung geeigneter IT-Lösungen für Kontrahentenrisikomanagement, die sich nahtlos in die bestehende Risikomanagement-Infrastruktur integrieren lassen.\n• Prozessoptimierung: Neugestaltung und Effizienzsteigerung von Prozessen im Kontrahentenrisikomanagement, von der Datenerfassung über die Berechnung bis zum Reporting und strategischen Entscheidungen.\n• Strategische Portfolioberatung: Analyse des bestehenden Derivate- und Wertpapierfinanzierungsportfolios und Entwicklung von Optimierungsstrategien, die Kapitaleffizienz und Geschäftsziele in Einklang bringen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche organisatorischen Strukturen und Governance-Modelle empfiehlt ADVISORI für eine effektive CRR/CRD-Compliance?",
        answer: "Eine effektive Governance-Struktur ist fundamental für die nachhaltige Einhaltung der CRR/CRD-Anforderungen und die strategische Integration regulatorischer Überlegungen in Geschäftsentscheidungen. ADVISORI unterstützt Finanzinstitute bei der Entwicklung und Implementierung optimaler Organisations- und Governance-Modelle, die sowohl regulatorische Anforderungen erfüllen als auch operationelle Effizienz gewährleisten.\n\n🏛️ Erfolgskritische Elemente effektiver Compliance-Governance:\n• Klare Verantwortlichkeiten: Etablierung eindeutiger Zuständigkeiten und Eskalationswege für alle CRR/CRD-relevanten Prozesse, von der Kapitalplanung über das Risikomanagement bis zur regulatorischen Berichterstattung.\n• Three Lines of Defense: Konsequente Umsetzung des Three-Lines-of-Defense-Modells mit klarer Trennung zwischen operativen Funktionen, unabhängiger Risikokontrolle und interner Revision, aber gleichzeitiger Gewährleistung effizienter Zusammenarbeit.\n• Management-Information-System: Implementierung eines umfassenden Berichtswesens, das Entscheidungsträgern zeitnahe, präzise und handlungsrelevante Informationen zu regulatorischen Kennzahlen und deren Implikationen liefert.\n• Qualifikation und Bewusstsein: Sicherstellung angemessener Expertise auf allen Ebenen der Organisation, vom Vorstand und Aufsichtsrat bis zu den operativen Einheiten, durch gezielte Schulungs- und Sensibilisierungsmaßnahmen.\n\n🔄 ADVISORIs praxisorientierter Governance-Ansatz:\n• Governance-Assessment: Umfassende Analyse bestehender Organisations- und Governance-Strukturen auf ihre Eignung für effektive CRR/CRD-Compliance und Identifikation von Optimierungspotenzialen.\n• Target Operating Model: Entwicklung eines maßgeschneiderten Zielmodells für die regulatorische Governance, das sowohl aufsichtsrechtliche Anforderungen als auch institutsspezifische Gegebenheiten berücksichtigt.\n• Prozess- und Komiteestruktur: Gestaltung effizienter Entscheidungs- und Eskalationsprozesse sowie optimaler Komiteestrukturen für die Steuerung regulatorischer Themen.\n• Implementierungsbegleitung: Unterstützung bei der praktischen Umsetzung neuer Governance-Strukturen, einschließlich Veränderungsmanagement, Schulungen und Prozessdetaillierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Vorbereitung auf und dem Management von aufsichtlichen Prüfungen im Rahmen der CRR/CRD-Compliance?",
        answer: "Aufsichtliche Prüfungen im Rahmen der CRR/CRD-Compliance haben in den letzten Jahren erheblich an Intensität, Tiefe und technischer Komplexität zugenommen. Eine professionelle Vorbereitung und ein strukturiertes Management dieser Prüfungen sind entscheidend, um regulatorische Maßnahmen zu vermeiden und ein positives Verhältnis zur Aufsicht zu etablieren. ADVISORI unterstützt Finanzinstitute mit einem ganzheitlichen Ansatz für das Management aufsichtlicher Prüfungen.\n\n🔍 Schlüsselelemente einer erfolgreichen Prüfungsvorbereitung:\n• Proaktive Self-Assessment: Durchführung detaillierter Vorab-Analysen zu prüfungsrelevanten Themen, um potenzielle Schwachstellen frühzeitig zu identifizieren und zu adressieren, bevor sie von der Aufsicht festgestellt werden.\n• Dokumentationsexzellenz: Sicherstellung einer vollständigen, konsistenten und überzeugenden Dokumentation aller relevanten Prozesse, Methoden und Entscheidungen, die den regulatorischen Anforderungen entspricht und die Nachvollziehbarkeit gewährleistet.\n• Datenqualitätsmanagement: Implementierung robuster Datenqualitätsprüfungen und -prozesse, um sicherzustellen, dass alle der Aufsicht vorgelegten Informationen korrekt, konsistent und nachvollziehbar sind.\n• Kommunikationsstrategie: Entwicklung einer klaren und konsistenten Kommunikationslinie für den Dialog mit der Aufsicht, die komplexe technische Aspekte verständlich darstellt und die strategische Ausrichtung des Instituts unterstützt.\n\n🛡️ ADVISORIs umfassender Unterstützungsansatz:\n• Pre-Inspection Review: Durchführung einer gründlichen Vorprüfung der relevanten Themenbereiche aus Aufsichtsperspektive, um kritische Punkte zu identifizieren und zu adressieren, bevor die eigentliche Prüfung beginnt.\n• Mock-Interviews und Simulationen: Vorbereitung von Führungskräften und Fachexperten auf prüfungsrelevante Gespräche und Szenarien durch realistische Simulationen und strukturiertes Feedback.\n• Findings-Management: Unterstützung bei der systematischen Analyse, Priorisierung und Adressierung von Prüfungsfeststellungen, einschließlich der Entwicklung überzeugender Maßnahmenpläne und Argumentationslinien.\n• Regulatory Relationship Management: Beratung zur strategischen Gestaltung und kontinuierlichen Verbesserung der Beziehung zu relevanten Aufsichtsbehörden, um ein konstruktives Verhältnis aufzubauen und zu pflegen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
