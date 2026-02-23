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
    console.log('Updating CRR/CRD Readiness page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Herausforderungen bringen die Output-Floor-Bestimmungen für Banken mit internen Modellen mit sich und wie können diese effektiv bewältigt werden?",
        answer: "Die Output-Floor-Bestimmungen markieren einen Paradigmenwechsel in der regulatorischen Architektur des Baseler Rahmenwerks. Sie begrenzen den Kapitalvorteil, den Banken durch interne Modelle erzielen können, auf 72,5% der Standardansatz-Ergebnisse. Diese fundamentale Änderung erfordert eine strategische Neuausrichtung der Modelllandschaft und Kapitaloptimierung von Instituten mit fortgeschrittenen internen Modellen.\n\n📉 Kernherausforderungen der Output-Floor-Implementierung:\n• Kapitalkostenanstieg: Für viele Banken mit hochentwickelten internen Modellen führt der Output Floor zu signifikanten Kapitalerhöhungen, die das Geschäftsmodell und die Wettbewerbsfähigkeit beeinträchtigen können.\n• Parallele Berechnungssysteme: Die Notwendigkeit, sowohl interne Modelle als auch Standardansätze parallel zu betreiben und zu überwachen, erhöht die operative Komplexität und die IT-Kosten erheblich.\n• Portfolioumstrukturierung: Geschäftsfelder und Produkte, die unter internen Modellen kapitaleffizient waren, können unter dem Output Floor unrentabel werden und erfordern strategische Anpassungen.\n• Governance-Komplexität: Die parallele Steuerung nach mehreren Kapitalmetriken (interne Modelle, Standardansatz, Output Floor) erfordert eine komplexere Governance- und Entscheidungsstruktur.\n\n🛡️ Strategische Lösungsansätze:\n• Modelloptimierung und -konsolidierung: Systematische Überprüfung und Neuausrichtung der internen Modelle mit Fokus auf Bereiche, wo sie trotz Output Floor noch signifikante Vorteile bieten können, sowie Identifikation von Modellen, die aufgegeben werden sollten.\n• Standardansatz-Optimierung: Während traditionell der Fokus auf der Optimierung interner Modelle lag, gewinnt nun die Optimierung der Standardansatz-Berechnungen durch präzise Datenklassifikation und Sicherheitenbewertung an Bedeutung.\n• Strategische Risikoallokation: Entwicklung von Algorithmen zur Optimierung der Portfolioallokation unter Berücksichtigung der Output-Floor-Auswirkungen, die die Kapitaleffizienz bei gegebener Risikotoleranz maximieren.\n• Integrierte IT-Architektur: Implementierung einer integrierten Berechnungsplattform, die interne Modelle und Standardansätze konsistent verarbeitet und die Auswirkungen des Output Floors in Echtzeit sichtbar macht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Institute eine robuste CRR/CRD-Stresstesting-Methodik entwickeln, die sowohl regulatorischen Anforderungen genügt als auch strategischen Mehrwert bietet?",
        answer: "Stress-Testing hat sich von einer reinen Compliance-Übung zu einem strategischen Instrument entwickelt, das tiefe Einblicke in die Widerstandsfähigkeit des Geschäftsmodells unter adversen Bedingungen bietet. Eine gut konzipierte CRR/CRD-Stresstesting-Methodik erfüllt nicht nur aufsichtsrechtliche Anforderungen, sondern generiert wertvolle Erkenntnisse für die Geschäfts- und Kapitalplanung sowie das Risikomanagement.\n\n🔬 Architektur einer fortschrittlichen Stresstesting-Methodik:\n• Multi-Layer-Stress-Szenarien: Entwicklung einer Szenario-Hierarchie von einfachen Sensitivitätsanalysen über historische Szenarien bis hin zu komplexen hypothetischen Szenarien, die spezifische Vulnerabilitäten des Geschäftsmodells adressieren.\n• Integrierte Risikofaktormodellierung: Implementierung fortschrittlicher statistischer Modelle, die Korrelationen und Abhängigkeiten zwischen verschiedenen Risikofaktoren unter Stressbedingungen korrekt abbilden und Zweitrundeneffekte berücksichtigen.\n• Granulare Auswirkungsanalyse: Stress-Impact-Analyse auf granularer Ebene (Einzelposition, Portfoliosegment, Geschäftsbereich) und über verschiedene Zeithorizonte für differenzierte Einblicke in Vulnerabilitäten.\n• Reverse-Stress-Testing: Identifikation von Szenarien, die vorgegebene kritische Schwellenwerte für Kapital- oder Liquiditätskennzahlen verletzen würden, um blinde Flecken im Risikomanagement aufzudecken.\n\n📊 Vom regulatorischen Erfordernis zum strategischen Mehrwert:\n• Strategische Frühindikatoren: Ableitung von Key Risk Indicators (KRIs) aus Stressergebnissen, die als Frühwarnsignale in das laufende Risikomanagement integriert werden und strategische Anpassungen auslösen können.\n• Kapitalallokation und Pricing: Nutzung von Stressergebnissen für die risikoadjustierte Kapitalallokation und Produktpreisgestaltung, die die Widerstandsfähigkeit unter adversen Bedingungen berücksichtigt.\n• Limitmanagement: Etablierung eines Limit-Frameworks, das Stressergebnisse explizit in die Festlegung von Risikolimits einbezieht und so einen direkten Link zwischen Stressszenarien und dem operativen Risikomanagement schafft.\n• Geschäftsmodell-Resilienztests: Systematische Nutzung von Stresstests zur Evaluation der Nachhaltigkeit strategischer Geschäftspläne unter verschiedenen makroökonomischen und regulatorischen Bedingungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Integration von ESG-Risiken in ihren CRR/CRD-Compliance-Rahmen?",
        answer: "Die Integration von Umwelt-, Sozial- und Governance-Risiken (ESG) in das regulatorische Rahmenwerk stellt eine der bedeutendsten Erweiterungen der CRR/CRD-Anforderungen dar. Diese Entwicklung erfordert eine grundlegende Neukonzeption von Risikomanagement-Prozessen, Datenarchitekturen und Strategien. ADVISORI begleitet Institute durch diesen Transformationsprozess mit einem ganzheitlichen Ansatz, der sowohl compliance-technische als auch strategische Dimensionen berücksichtigt.\n\n🌍 Kerndimensionen der ESG-Integration in den CRR/CRD-Rahmen:\n• Risikotaxonomie und -identifikation: Entwicklung einer granularen ESG-Risikotaxonomie, die physische und transitorische Klimarisiken sowie weitere Umwelt-, Sozial- und Governance-Risiken systematisch erfasst und mit traditionellen Risikokategorien verknüpft.\n• Datenarchitektur und Sourcing: Aufbau einer robusten ESG-Dateninfrastruktur, die interne und externe Datenquellen integriert und die notwendige Granularität für regulatorische Analysen bietet, unter Berücksichtigung der besonderen Herausforderungen bei ESG-Daten (Lücken, Inkonsistenzen, fehlende Standards).\n• Risikomessungsmethodik: Implementierung quantitativer und qualitativer Methoden zur Bewertung von ESG-Risiken, einschließlich spezifischer Klimastresstest-Szenarien, Sensitivitätsanalysen und Portfolioscreening-Ansätze.\n• Regulatorisches Reporting und Disclosure: Etablierung effizienter Prozesse für die Erfüllung der erweiterten Offenlegungsanforderungen gemäß Pillar 3 und der EU-Taxonomie-Verordnung, mit Fokus auf Datenqualität und Konsistenz.\n\n🔄 Strategischer Implementierungsansatz:\n• ESG-CRR/CRD-Gap-Analyse: Durchführung einer umfassenden Lückenanalyse, die bestehende ESG-Risikomanagementpraktiken mit den neuen regulatorischen Anforderungen abgleicht und konkrete Handlungsfelder identifiziert.\n• ESG-Integration in ICAAP/ILAAP: Systematische Einbindung von Klimarisiken und anderen ESG-Faktoren in den internen Kapitaladäquanzprozess (ICAAP) und den internen Liquiditätsadäquanzprozess (ILAAP).\n• Governance-Anpassung: Aktualisierung von Rollen, Verantwortlichkeiten und Entscheidungsprozessen, um ESG-Risiken angemessen zu berücksichtigen, einschließlich Board-Level-Ownership und klarer Accountability-Strukturen.\n• ESG-Strategie-Alignment: Harmonisierung der ESG-Risikomanagementpraktiken mit der übergreifenden Nachhaltigkeitsstrategie des Instituts, um regulatorische Compliance mit strategischen Zielen zu vereinbaren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Maßnahmen empfiehlt ADVISORI zur Optimierung der Kapitaleffizienz unter den aktuellen CRR/CRD-Anforderungen?",
        answer: "In einem Umfeld zunehmender regulatorischer Anforderungen und steigender Kapitalkosten wird die Optimierung der Kapitaleffizienz zu einem entscheidenden Wettbewerbsfaktor für Finanzinstitute. Eine strategische Kapitaloptimierung unter CRR/CRD erfordert einen ganzheitlichen Ansatz, der sowohl technische als auch geschäftsstrategische Dimensionen berücksichtigt. ADVISORI bietet einen strukturierten Rahmen zur Identifikation und Realisierung von Optimierungspotenzialen.\n\n💰 Strategische Hebel zur Kapitaloptimierung:\n• Bilanzstrukturoptimierung: Systematische Analyse und Anpassung der Bilanzstruktur mit Fokus auf RWA-Dichte und Kapitaleffizienz, einschließlich gezielter Portfolioumschichtungen und Risikotransferinstrumente.\n• Sicherheitenmanagement und Kreditrisikominderung: Implementierung fortschrittlicher Sicherheitenmanagement-Systeme, die die regulatorische Anerkennung von Kreditrisikominderungstechniken maximieren und Haircuts optimieren.\n• Modelloptimierung im Standardansatz: Nutzung aller Freiheitsgrade innerhalb der Standardansätze, insbesondere durch präzise Risikoklassifikation, granulare Segmentierung und optimale Nutzung externer Ratings.\n• Kapitalstrukturoptimierung: Feinabstimmung der Kapitalinstrumentenstruktur unter Berücksichtigung regulatorischer Anforderungen (MREL, TLAC, Puffer), Kosten und Flexibilität in Stressszenarien.\n\n🔄 Operative Optimierungsansätze:\n• Data Enhancement und Qualitätsmanagement: Verbesserung der Datenqualität und -granularität, um die Risikoparameter präziser zu erfassen und 'konservative Aufschläge' aufgrund von Datenunsicherheiten zu reduzieren.\n• Process Mining für RWA-Optimierung: Systematische Analyse des End-to-End-RWA-Berechnungsprozesses zur Identifikation von Ineffizienzen, manuellen Workarounds und Qualitätslücken, die zu überhöhten RWA führen.\n• Transaktionsstrukturierung: Entwicklung von Frameworks zur Optimierung der regulatorischen Behandlung von Transaktionen bereits in der Strukturierungsphase, insbesondere für komplexe oder großvolumige Geschäfte.\n• Automatisierte Optimierungstools: Implementierung von Algorithmen und Simulationsmodellen, die Optimierungspotenziale auf Einzeltransaktions- und Portfolioebene identifizieren und quantifizieren."
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
