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
    console.log('Updating CRR/CRD page with FAQs batch 2...')
    
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
        question: "Welche Vorteile bietet die Implementierung fortschrittlicher interner Modelle (IRBA, IMA, AMA) unter CRR/CRD und wie unterstützt ADVISORI bei deren Entwicklung und Validierung?",
        answer: "Die fortschrittlichen internen Risikomessverfahren nach CRR/CRD ermöglichen eine risikosensitivere Kapitalberechnung und bieten substanzielle strategische Vorteile gegenüber den Standardansätzen. Trotz der Einführung von Output-Floors bleiben sie ein wichtiges Instrument zur Optimierung der Kapitaleffizienz. ADVISORI unterstützt Finanzinstitute entlang des gesamten Lebenszyklus interner Modelle – von der initialen Entwicklung bis zur kontinuierlichen Validierung und Weiterentwicklung.\n\n📐 Strategische Vorteile fortschrittlicher interner Modelle:\n• Präzisere Risikodifferenzierung: Interne Modelle ermöglichen eine deutlich granularere Abbildung von Risikoprofilen als Standardansätze und führen zu einer risikoadäquateren Kapitalallokation.\n• Geschäftsstrategische Einblicke: Die für interne Modelle entwickelten Risikoparameter (PD, LGD, EAD) liefern wertvolle Erkenntnisse für die Portfoliosteuerung und Geschäftsstrategie.\n• Wettbewerbsvorteile: Trotz Output-Floors bieten interne Modelle in vielen Portfoliosegmenten weiterhin signifikante Kapitalentlastungen gegenüber Standardansätzen.\n• Kulturelle Transformation: Die Implementierung fortschrittlicher Modelle fördert eine risikobewusste Unternehmenskultur und stärkt die Risikomanagement-Fähigkeiten.\n\n🧪 ADVISORIs End-to-End Unterstützung bei internen Modellen:\n• Modellentwurf und -entwicklung: Konzeption und Erstellung statistisch robuster und aufsichtsrechtlich konformer Modelle unter Berücksichtigung der spezifischen Portfoliomerkmale und Datenverfügbarkeit.\n• Technische Implementierung: Unterstützung bei der Integration der Modelle in die IT-Landschaft, Entwicklung effizienter Berechnungsengines und Sicherstellung der Datenkonsistenz.\n• Validierungsframework: Aufbau eines umfassenden Validierungsrahmens mit quantitativen und qualitativen Validierungstechniken, Backtesting-Methoden und Benchmarking-Ansätzen.\n• Aufsichtsrechtlicher Dialog: Begleitung des gesamten Genehmigungsprozesses von der Vorbereitung der Antragsunterlagen bis zum direkten Dialog mit den Aufsichtsbehörden während der On-Site-Prüfungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie kann der SREP-Prozess (Supervisory Review and Evaluation Process) effektiv vorbereitet und optimiert werden, um aufsichtsrechtliche Kapitalzuschläge zu minimieren?",
        answer: "Der Supervisory Review and Evaluation Process (SREP) entwickelt sich zunehmend zu einem zentralen Element der Bankenaufsicht mit direkten Auswirkungen auf die Kapitalanforderungen und den strategischen Handlungsspielraum von Finanzinstituten. Eine proaktive und strukturierte Vorbereitung auf den SREP kann aufsichtsrechtliche Kapitalzuschläge signifikant reduzieren und die Beziehung zur Aufsicht positiv gestalten. ADVISORI bietet einen ganzheitlichen Ansatz zur SREP-Optimierung.\n\n🔍 Schlüsselelemente einer effektiven SREP-Vorbereitung:\n• Ganzheitliche Selbsteinschätzung: Durchführung einer detaillierten Selbstbeurteilung anhand der SREP-Methodik der EBA/EZB vor dem eigentlichen Aufsichtsprozess, um Schwachstellen frühzeitig zu identifizieren und proaktiv zu adressieren.\n• Risikotreiber-Analyse: Identifikation und Quantifizierung der spezifischen Risikotreiber in Ihrem Geschäftsmodell, die potenziell zu höheren SREP-Zuschlägen führen könnten, und Entwicklung gezielter Maßnahmen zu deren Adressierung.\n• Dokumentationsexzellenz: Erstellung einer überzeugenden und konsistenten Dokumentation, die die Robustheit der Risikomanagement-Prozesse, Governance-Strukturen und Kapitalplanungsmethoden nachweislich belegt.\n• Kommunikationsstrategie: Entwicklung einer klaren und konsistenten Kommunikationslinie für den Dialog mit der Aufsicht, die Ihre strategischen Prioritäten und Risikomanagement-Kapazitäten überzeugend vermittelt.\n\n⚙️ ADVISORI-Methodik zur SREP-Optimierung:\n• Gap-Analyse und Benchmark: Systematischer Vergleich Ihrer aktuellen Risikomanagement-Praktiken mit regulatorischen Erwartungen und Best Practices vergleichbarer Institute, um Optimierungspotenziale zu identifizieren.\n• Risikoinventur und -quantifizierung: Umfassende Bewertung aller materiellen Risiken unter Berücksichtigung der SREP-Bewertungskategorien und Entwicklung robuster Quantifizierungsmethoden für schwer messbare Risiken.\n• Governance-Optimierung: Überprüfung und Stärkung der Risikomanagement- und Governance-Strukturen mit besonderem Fokus auf die Aspekte, die im SREP typischerweise kritisch bewertet werden.\n• Simulationsbasierte Vorbereitung: Durchführung von SREP-Simulationen und Mock-Interviews, um das Management auf den direkten Dialog mit der Aufsicht vorzubereiten und die Argumentationslinien zu schärfen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Was sind die wichtigsten Auswirkungen der CRR/CRD-Anforderungen auf die Offenlegungspflichten (Pillar 3) und wie unterstützt ADVISORI bei deren effizienten Umsetzung?",
        answer: "Die Offenlegungsanforderungen nach Säule 3 (Pillar 3) haben sich unter den CRR/CRD-Regelungen erheblich intensiviert und stellen Finanzinstitute vor komplexe operative und strategische Herausforderungen. Die gestiegene Granularität, Frequenz und öffentliche Sichtbarkeit dieser Offenlegungen machen sie zu einem wichtigen Element nicht nur der regulatorischen Compliance, sondern auch der Markt- und Stakeholder-Kommunikation. ADVISORI bietet einen integrierten Ansatz zur effizienten und strategischen Umsetzung dieser Anforderungen.\n\n📊 Zentrale Entwicklungen bei Pillar 3-Anforderungen:\n• Erhöhte Granularität: Die neuen Offenlegungsanforderungen verlangen detailliertere Informationen zu Kapital, Risikopositionen und Risikomanagement-Praktiken auf einer Institution-spezifischen Ebene.\n• Erweiterte Themenbereiche: Neben traditionellen Risikokategorien müssen nun auch Informationen zu ESG-Risiken, Vergütungspraktiken und neuen Kennzahlen wie TLAC/MREL offengelegt werden.\n• Standardisierte Formate: Die Einführung verbindlicher Offenlegungsformate und -tabellen erhöht die Vergleichbarkeit, stellt aber auch höhere Anforderungen an die Datenaufbereitung.\n• Beschleunigter Zeitplan: Die Verkürzung der Offenlegungsfristen und die teilweise quartalsweise Offenlegungspflicht intensivieren den operativen Druck auf die berichtenden Institute.\n\n🛠️ ADVISORIs Lösungsansatz für effiziente Pillar 3-Compliance:\n• Integrierte Daten- und Reporting-Architektur: Entwicklung einer konsistenten Dateninfrastruktur, die regulatorisches Reporting und Offenlegungspflichten harmonisiert und Redundanzen eliminiert.\n• Automatisierungsstrategie: Implementierung von Automatisierungslösungen für Datenextraktion, Validierung, Berechnung und Berichterstellung, die den manuellen Aufwand minimieren und die Fehleranfälligkeit reduzieren.\n• Narrative Optimierung: Unterstützung bei der Entwicklung präziser und konsistenter Erläuterungen und Kommentare, die regulatorische Anforderungen erfüllen und gleichzeitig die strategische Positionierung des Instituts unterstützen.\n• Marktvergleich und Best Practices: Analyse der Offenlegungspraktiken von Peer-Instituten und Identifikation von Best Practices zur kontinuierlichen Verbesserung der eigenen Offenlegungsstrategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie lassen sich die CRR/CRD-Anforderungen mit anderen regulatorischen Initiativen wie BCBS 239, DORA oder ESG-Regularien harmonisieren, um Synergien zu nutzen und doppelte Implementierungsaufwände zu vermeiden?",
        answer: "Die zunehmende Komplexität des regulatorischen Umfelds mit sich überschneidenden Anforderungen aus verschiedenen Regulierungsinitiativen stellt Finanzinstitute vor erhebliche Herausforderungen. Eine isolierte Betrachtung und Implementierung jeder einzelnen Regulierung führt unweigerlich zu Ineffizienzen, Inkonsistenzen und unnötigen Kosten. ADVISORI verfolgt einen integrierten Compliance-Ansatz, der Synergien zwischen verschiedenen Regulierungen identifiziert und nutzbar macht.\n\n🔄 Schlüsselbereiche regulatorischer Konvergenz und Synergien:\n• Datenmanagement und -governance: Die Datenanforderungen von CRR/CRD überschneiden sich signifikant mit den Prinzipien von BCBS 239, den Ausfallsicherheitsanforderungen von DORA und den Datennachweispflichten der ESG-Regularien.\n• Risikomanagement-Framework: Ein harmonisiertes Risikomanagement-System kann gleichzeitig die CRR/CRD-Anforderungen an interne Modelle, die BCBS 239-Anforderungen an Risikodatenaggregation und die Klimarisikobewertungen nach ESG-Regularien abdecken.\n• IT-Infrastruktur und Operational Resilience: Die technologischen Anforderungen von DORA an die operative Resilienz lassen sich mit den operationellen Risikomanagement-Anforderungen der CRR/CRD und den Datenarchitekturprinzipien von BCBS 239 in Einklang bringen.\n• Governance und Kontrollumfeld: Ein integriertes Governance-Framework kann simultan die Anforderungen der verschiedenen Regulierungsinitiativen an Verantwortlichkeiten, Kontrollen und Nachweispflichten erfüllen.\n\n🧩 ADVISORIs integrierter Implementierungsansatz:\n• Regulatory Mapping: Systematische Analyse der verschiedenen regulatorischen Anforderungen, Identifikation von Überschneidungen und Entwicklung einer konsolidierten Anforderungslandkarte.\n• Priorisierte Implementierungsroadmap: Entwicklung einer Implementierungsstrategie, die die zeitlichen Vorgaben verschiedener Regulierungen berücksichtigt und gemeinsame Grundlagenprojekte priorisiert.\n• Integrierte Datenstrategie: Konzeption einer Datenarchitektur, die konsistente Datengrundlagen für alle regulatorischen Anforderungen schafft und eine einheitliche Datengovernance implementiert.\n• Technologie-Konsolidierung: Empfehlung und Implementierung von Technologielösungen, die flexibel genug sind, die Anforderungen verschiedener Regulierungsinitiativen zu erfüllen, und unnötige Systemredundanzen vermeiden."
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
