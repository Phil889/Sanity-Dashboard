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
    console.log('Updating CRR/CRD Readiness page with FAQs batch 3...')
    
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
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Vorbereitung auf SREP-Prüfungen im Rahmen des CRR/CRD-Compliance-Prozesses?",
        answer: "Der Supervisory Review and Evaluation Process (SREP) stellt als zentrales Element der aufsichtlichen Überprüfung besondere Anforderungen an die Vorbereitung von Finanzinstituten. Eine erfolgreiche SREP-Vorbereitung geht weit über die formale Einhaltung regulatorischer Anforderungen hinaus und erfordert ein tiefes Verständnis der aufsichtlichen Erwartungen sowie eine proaktive Kommunikationsstrategie. ADVISORI verfolgt einen ganzheitlichen Ansatz zur SREP-Vorbereitung, der die spezifischen Herausforderungen und Prioritäten des jeweiligen Instituts berücksichtigt.\n\n📋 Methodische SREP-Vorbereitung:\n• Aufsichtliche Perspektivübernahme: Systematische Analyse des eigenen Instituts aus der Perspektive der Aufsicht, mit besonderem Fokus auf kritische Bereiche wie Governance, Risikomanagement und Kapitalplanung, um potenzielle Schwachstellen frühzeitig zu identifizieren.\n• Lückenanalyse und Priorisierung: Detaillierte Bewertung der aktuellen Compliance-Situation im Vergleich zu aufsichtlichen Erwartungen, mit priorisierter Ableitung von Handlungsmaßnahmen auf Basis der potenziellen Auswirkungen auf SREP-Scores und Kapitalzuschläge.\n• Dokumentationsqualität: Optimierung der regulatorischen Dokumentation hinsichtlich Vollständigkeit, Konsistenz und Nachvollziehbarkeit, mit besonderem Augenmerk auf die Nachweisbarkeit der Umsetzung von Policies und die Wirksamkeit von Kontrollen.\n• Dialog-Vorbereitung: Training von Führungskräften und Fachexperten für den direkten Dialog mit der Aufsicht, einschließlich Simulation von kritischen Fragestellungen und Entwicklung überzeugender Argumentationslinien.\n\n🔄 Integrierter Implementierungsansatz:\n• SREP-Readiness-Assessment: Durchführung eines umfassenden Assessments, das alle relevanten SREP-Dimensionen (Geschäftsmodell, Governance, Kapital- und Liquiditätsrisiken) abdeckt und konkrete Verbesserungspotenziale identifiziert.\n• Koordiniertes Maßnahmenmanagement: Etablierung eines strukturierten Prozesses zur Umsetzung von Verbesserungsmaßnahmen mit klarer Verantwortungszuordnung, Meilensteinplanung und Fortschrittskontrolle.\n• Simulierte SREP-Dialoge: Durchführung von Mock-Interviews und Workshops, die realistische Prüfungssituationen simulieren und die Dialogfähigkeit des Managements und der Fachbereiche stärken.\n• Kontinuierliches Monitoring: Implementierung eines laufenden Überwachungssystems für SREP-relevante Indikatoren, das frühzeitig auf Entwicklungen hinweist, die zu einer Verschlechterung der aufsichtlichen Bewertung führen könnten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen müssen mittelgroße und kleinere Finanzinstitute bei der CRR/CRD-Readiness bewältigen und wie kann ADVISORI dabei unterstützen?",
        answer: "Mittelgroße und kleinere Finanzinstitute stehen bei der Umsetzung der CRR/CRD-Anforderungen vor besonderen Herausforderungen. Sie müssen mit begrenzten Ressourcen ein komplexes Regelwerk implementieren, das primär für große, international tätige Banken konzipiert wurde. ADVISORI hat einen spezialisierten Ansatz entwickelt, der die spezifischen Bedürfnisse und Rahmenbedingungen dieser Institute berücksichtigt und pragmatische, proportionale Lösungen bietet.\n\n⚖️ Spezifische Herausforderungen für mittelgroße und kleinere Institute:\n• Ressourcen- und Expertise-Limitationen: Begrenzte personelle Kapazitäten und Spezialisten für die Interpretation und Umsetzung komplexer regulatorischer Anforderungen, insbesondere in Bereichen wie Modellentwicklung und Validierung.\n• Proportionalitätsprinzip in der Praxis: Schwierigkeiten bei der Auslegung des Proportionalitätsprinzips und der Identifikation angemessener Vereinfachungen, die mit den aufsichtlichen Erwartungen vereinbar sind.\n• Systemische Einschränkungen: Oftmals ältere oder weniger flexible IT-Systeme, die nicht für die granularen Datenanforderungen und komplexen Berechnungen der CRR/CRD konzipiert sind.\n• Wettbewerbsdruck: Notwendigkeit, die Compliance-Kosten zu kontrollieren, um die Rentabilität zu erhalten und wettbewerbsfähig zu bleiben, trotz des relativen Kostennachteils durch fehlende Skaleneffekte.\n\n🔍 ADVISORIs maßgeschneiderter Lösungsansatz:\n• Proportionalitätsoptimierte Compliance-Frameworks: Entwicklung schlanker, aber robuster Compliance-Architekturen, die die spezifischen Risiken und Geschäftsmodelle kleinerer Institute berücksichtigen und regulatorische Anforderungen effizient erfüllen.\n• Ressourcenoptimierte Implementierung: Fokussierung auf die wesentlichen Compliance-Elemente mit größtem Impact bei gleichzeitiger Nutzung von Standardisierungs- und Automatisierungspotenzialen zur Ressourcenschonung.\n• Kollaborative Lösungsansätze: Identifikation von Möglichkeiten für Kooperationen zwischen Instituten, gemeinsame Nutzung von Ressourcen oder Outsourcing-Optionen für spezifische Compliance-Funktionen.\n• Technologie als Enabler: Einsatz kosteneffizienter, modularer Technologielösungen, die speziell auf die Bedürfnisse kleinerer Institute zugeschnitten sind und schrittweise implementiert werden können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute ihre CRR/CRD-Berichterstattung optimieren und automatisieren, um operative Effizienz zu steigern und Compliance-Risiken zu minimieren?",
        answer: "Die regulatorische Berichterstattung unter CRR/CRD hat sich zu einem komplexen, ressourcenintensiven Prozess entwickelt, der tiefgreifende Auswirkungen auf die operative Effizienz von Finanzinstituten hat. Eine optimierte und automatisierte Reporting-Architektur ist nicht nur ein Kostenfaktor, sondern ein strategischer Wettbewerbsvorteil, der Risiken reduziert und wertvolle Ressourcen für strategische Initiativen freisetzt. ADVISORI verfolgt einen ganzheitlichen Transformationsansatz, der Prozesse, Daten und Technologie integriert.\n\n📊 Schlüsselelemente eines optimierten Reporting-Frameworks:\n• End-to-End-Prozessoptimierung: Umfassende Analyse und Neugestaltung des gesamten Reporting-Prozesses von der Datenerhebung bis zur Einreichung, mit besonderem Fokus auf die Eliminierung von Redundanzen, manuellen Eingriffen und Validierungsschleifen.\n• Datenarchitektur-Transformation: Implementierung einer integrierten, regulatorisch ausgerichteten Datenarchitektur, die sämtliche Reporting-Anforderungen aus einer konsistenten, granularen Datenbasis bedient und die regulatorische mit der internen Berichterstattung harmonisiert.\n• Automatisierungspotenziale: Systematische Identifikation und Realisierung von Automatisierungsmöglichkeiten entlang der gesamten Reporting-Wertschöpfungskette, von der Datenextraktion über Transformationen bis hin zu Validierungen und Einreichungsprozessen.\n• Governance und Kontrollen: Etablierung eines robusten Governance-Frameworks mit klaren Verantwortlichkeiten, dokumentierten Prozessen und wirksamen Kontrollen, die die Qualität, Vollständigkeit und Pünktlichkeit der regulatorischen Berichterstattung sicherstellen.\n\n🔄 Implementierungsansatz für nachhaltige Optimierung:\n• Regulatory Reporting Factory: Konzeption und Umsetzung einer Reporting-Factory, die auf industrialisierten, standardisierten Prozessen und einer hohen Automatisierung basiert und als Service für die Organisation fungiert.\n• Data Lineage und Audit Trail: Implementation einer durchgängigen Datenlinien-Dokumentation und Audit-Trail-Funktionalität, die die Nachvollziehbarkeit jeder regulatorischen Kennzahl bis zur Quelle ermöglicht und aufsichtlichen Anforderungen entspricht.\n• Flexibles Reporting-Betriebsmodell: Gestaltung eines zukunftsfähigen Betriebsmodells, das agil auf regulatorische Änderungen reagieren kann und eine optimale Balance zwischen Zentralisierung und dezentraler Fachexpertise schafft.\n• Continuous Improvement Cycle: Etablierung eines kontinuierlichen Verbesserungsprozesses mit regelmäßiger Performance-Analyse, Benchmarking und Anpassung an regulatorische Entwicklungen und technologische Innovationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI Finanzinstitute dabei, sich auf die neuen Anforderungen zur Operational Resilience im Rahmen von CRR/CRD vorzubereiten?",
        answer: "Die zunehmende Fokussierung der Aufsicht auf Operational Resilience repräsentiert einen Paradigmenwechsel in der regulatorischen Landschaft. Anders als traditionelle Ansätze zur operationellen Risikominderung, die auf die Prävention von Störungen abzielen, konzentriert sich Operational Resilience auf die Fähigkeit, kritische Geschäftsfunktionen auch bei schwerwiegenden Störungen aufrechtzuerhalten. ADVISORI begleitet Finanzinstitute mit einem ganzheitlichen Ansatz bei der Integration dieser neuen Dimension in ihren CRR/CRD-Compliance-Rahmen.\n\n🔄 Kernelemente eines effektiven Operational Resilience Frameworks:\n• Identifikation kritischer Geschäftsprozesse: Systematische Bestimmung und Priorisierung der wesentlichen Geschäftsfunktionen, die für die Finanzstabilität, den Kundenschutz und die Fortführung des Instituts entscheidend sind, unter Berücksichtigung interner und externer Abhängigkeiten.\n• Impact-Toleranz-Definition: Entwicklung klarer, quantitativer Toleranzgrenzen für die maximale Unterbrechungsdauer kritischer Funktionen, die sowohl geschäftliche als auch aufsichtliche Perspektiven berücksichtigen.\n• End-to-End-Prozessanalyse: Kartierung der vollständigen Wertschöpfungskette kritischer Prozesse mit allen beteiligten Systemen, Daten, Personal und externen Dienstleistern, um Vulnerabilitäten und Single Points of Failure zu identifizieren.\n• Resilience-Testing: Etablierung eines umfassenden Testprogramms, das über traditionelle BCP-Tests hinausgeht und realistische, schwerwiegende Szenarien simuliert, einschließlich Cyber-Angriffe, Technologieausfälle und Pandemien.\n\n🛠️ Integrierter Implementierungsansatz:\n• Operational Resilience Gap-Analyse: Durchführung einer umfassenden Bestandsaufnahme bestehender Resilience-Kapazitäten und Identifikation konkreter Lücken zu den aufsichtlichen Erwartungen und Best Practices.\n• Governance-Enhancement: Anpassung der Governance-Strukturen zur Verankerung von Operational Resilience als strategische Priorität mit klaren Verantwortlichkeiten auf Vorstands- und Senior-Management-Ebene.\n• Resilience-by-Design-Prinzip: Integration von Resilience-Anforderungen in Prozess- und Systemdesigns, Changemanagement und Lieferantenmanagement, um Widerstandsfähigkeit als integralen Bestandteil der Unternehmensarchitektur zu etablieren.\n• MI und Berichtswesen: Implementierung eines umfassenden Management-Informationssystems für Operational Resilience, das den Überblick über den Resilience-Status ermöglicht und die Einhaltung von Impact-Toleranzen überwacht."
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
