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
    console.log('Updating FRTB Risikodatenerhebung Datenqualität page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-risikodatenerhebung-datenqualitaet' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-risikodatenerhebung-datenqualitaet" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Data-Governance-Strukturen sind für eine erfolgreiche FRTB-Implementierung erforderlich und wie sollten diese mit bestehenden Strukturen harmonisiert werden?",
        answer: "Eine robuste Data Governance bildet das organisatorische Rückgrat einer erfolgreichen FRTB-Implementierung. Die komplexen Datenanforderungen des FRTB-Regelwerks erfordern klare Verantwortlichkeiten, durchgängige Prozesse und eine konsistente Datenkultur, die über Abteilungsgrenzen hinweg harmonisiert sein muss.\n\n🏛️ Kernelemente einer FRTB-fokussierten Data Governance:\n• Mehrstufige Governance-Struktur: Etablierung einer klaren Hierarchie von der exekutiven Ebene (Data Governance Board) über die taktische Steuerung (Data Stewardship Committee) bis zur operativen Umsetzung (Data Custodians), mit präzise definierten Eskalationswegen und Entscheidungsbefugnissen.\n• Dedicated FRTB Data Office: Einrichtung einer zentralen Koordinationsstelle, die FRTB-spezifische Datenanforderungen übersetzt, priorisiert und deren konsistente Umsetzung über alle beteiligten Geschäftsbereiche und IT-Funktionen sicherstellt.\n• Rollenbasiertes Verantwortungsmodell: Definition komplementärer Rollen wie FRTB Data Owner (geschäftliche Verantwortung), Data Stewards (fachliche Qualitätssicherung) und Data Custodians (technische Datenbereitstellung) mit klaren Zuständigkeiten.\n• End-to-End Data Lifecycle Management: Implementierung durchgängiger Governance-Prozesse, die den gesamten Datenlebenszyklus von der Erhebung über Transformation, Speicherung, Nutzung bis zur Archivierung umfassen.\n\n🔄 ADVISORIs Harmonisierungsansatz für Governance-Strukturen:\n• Integriertes Governance-Modell: Wir entwickeln ein maßgeschneidertes Modell, das FRTB-Anforderungen in bestehende Data-Governance-Strukturen integriert, statt isolierte Parallelstrukturen zu schaffen, wodurch Redundanzen vermieden und Synergien genutzt werden.\n• Taxonomie-basierte Harmonisierung: Entwicklung einer einheitlichen Datentaxonomie, die FRTB-spezifische Begriffe mit existierenden Business-Glossaren und Datenkatalogen abgleicht und harmonisiert.\n• Regulatory Lineage Integration: Nahtlose Einbindung regulatorischer Anforderungen in bestehende Data-Lineage-Prozesse, sodass FRTB-Reportinganforderungen bis zu Quellsystemen zurückverfolgt werden können.\n• Governance Technology Enablement: Implementierung oder Erweiterung von Governance-Tools (Metadaten-Repositories, Lineage-Tools, Data Quality Dashboards), die sowohl FRTB-spezifische als auch andere regulatorische Anforderungen unterstützen.\n• Change Management und Kulturwandel: Begleitung des organisatorischen Wandels durch zielgerichtete Schulungen, klare Kommunikation und schrittweise Implementation, um eine nachhaltige Datenkultur zu etablieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Technologien und Automatisierungslösungen empfiehlt ADVISORI für effiziente FRTB-Datenprozesse, und wie können diese die Compliance-Kosten reduzieren?",
        answer: "Die Implementierung von FRTB stellt ohne geeignete Technologien und Automatisierungslösungen einen enormen operativen Aufwand dar. Strategisch eingesetzte Technologie kann nicht nur die Compliance-Kosten signifikant reduzieren, sondern auch die Datenqualität verbessern und wertvolle Business Insights liefern.\n\n💻 Schlüsseltechnologien für effiziente FRTB-Datenprozesse:\n• Automatisierte Data Pipeline Orchestration: Implementation moderner ETL/ELT-Plattformen mit erweiterten Scheduling-, Monitoring- und Fehlerbehandlungsfunktionen, die komplexe Datenflüsse für FRTB-Anforderungen orchestrieren und überwachen.\n• KI-gestützte Datenqualitätssicherung: Einsatz maschineller Lernverfahren zur automatischen Erkennung von Anomalien, Ausreißern und Datenqualitätsproblemen, bevor diese die Risikoberechnung beeinflussen können.\n• Cloud-basierte Datenintegration: Nutzung flexibler Cloud-Infrastrukturen für die Integration heterogener Datenquellen, die skalierbare Verarbeitung großer Datenmengen und die kosteneffiziente Speicherung historischer Marktdaten.\n• Real-time Data Validation Framework: Implementierung von Echtzeit-Validierungsregeln entlang der gesamten Datenpipeline, die Qualitätsprobleme unmittelbar bei der Datenerfassung identifizieren und beheben.\n• Metadata-driven Automation: Nutzung von Business- und technischen Metadaten zur automatisierten Generierung von Datenqualitätsregeln, Transformationslogik und Dokumentation.\n\n💰 ADVISORIs Ansatz zur Kostenreduktion durch Technologie:\n• Modulare Architektur statt Monolith: Wir entwickeln flexible, komponentenbasierte Lösungen, die gezielt dort ansetzen, wo Ihr Institut den größten Nutzen erzielt, statt kostspielige Komplettsysteme zu implementieren.\n• Automatisierung repetitiver Prozesse: Identifikation und Priorisierung manueller, fehleranfälliger Prozesse (Datenextraktion, Qualitätschecks, Reportgenerierung), die durch Automatisierung signifikante Effizienzgewinne versprechen.\n• Intelligente Make-or-Buy-Strategie: Entwicklung einer ausgewogenen Strategie, die bestimmt, welche Komponenten intern entwickelt und welche als Standardlösungen beschafft werden sollten, basierend auf Kosten-Nutzen-Analyse und strategischer Bedeutung.\n• Legacy-System-Integration: Maximierung des Wertes bestehender Systeme durch intelligente Schnittstellen und Middleware, statt kostspielige Komplettablösungen durchzuführen.\n• Stufenweise Implementation mit Quick Wins: Priorisierung von Maßnahmen mit hohem ROI und schneller Implementierbarkeit, um frühzeitig Kosten zu sparen und Akzeptanz für weitere Investitionen zu schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können FRTB-Datenanforderungen effektiv in bestehende Risikodateninfrastrukturen integriert werden, ohne umfangreiche Systemtransformationen zu erfordern?",
        answer: "Die Integration von FRTB-Datenanforderungen in bestehende Risikodateninfrastrukturen stellt eine komplexe Herausforderung dar, die mit einem strategischen Ansatz gelöst werden muss. Die Kunst liegt darin, regulatorische Compliance zu erreichen, ohne übermäßige Systemtransformationen durchführen zu müssen, die hohe Kosten und Risiken mit sich bringen.\n\n🔄 Herausforderungen bei der Integration von FRTB-Datenanforderungen:\n• Heterogene Systemlandschaften: Die meisten Finanzinstitute verfügen über gewachsene Risikosysteme verschiedener Generationen und Technologien, die nicht für die granularen FRTB-Anforderungen konzipiert wurden.\n• Datenmodell-Diskrepanzen: FRTB erfordert risikofaktorbasierte Datenmodelle, während viele Legacy-Systeme produkt- oder portfoliobasierte Strukturen verwenden.\n• Datenlatenz vs. Zeitnähe: Die FRTB-Anforderungen an zeitnahe Marktdaten kollidieren oft mit bestehenden Batch-orientierten Prozessen und Data-Warehouse-Strukturen.\n• Governance-Überschneidungen: Neue FRTB-spezifische Datenprozesse müssen mit existierenden Governance-Frameworks koexistieren, ohne Konflikte oder Redundanzen zu erzeugen.\n\n🛠️ ADVISORIs pragmatischer Integrationsansatz:\n• Layered Data Architecture: Entwicklung einer mehrschichtigen Datenarchitektur, die FRTB-spezifische Komponenten als ergänzende Layer zu bestehenden Systemen implementiert, statt diese zu ersetzen – mit klaren Schnittstellen und Verantwortlichkeiten.\n• Data Virtualization und Abstraktionsschicht: Implementierung einer logischen Datenabstraktionsschicht, die heterogene physische Datenquellen integriert und eine einheitliche Sicht für FRTB-Zwecke bereitstellt, ohne physische Datenreplikation.\n• Targeted Data Marts: Etablierung spezialisierter, FRTB-spezifischer Data Marts, die gezielt die für FRTB relevanten Daten aus bestehenden Systemen extrahieren, transformieren und für Reporting- und Analysezwecke bereitstellen.\n• Metadata-driven Integration: Nutzung eines zentralen Metadaten-Repositories, das Datendefinitionen, Transformationsregeln und Lineage sowohl für bestehende als auch für FRTB-spezifische Prozesse dokumentiert und harmonisiert.\n• Inkrementeller Verbesserungsansatz: Implementierung eines mehrstufigen Vorgehens, das mit pragmatischen Übergangslösungen beginnt und schrittweise zu einer optimierten Zielarchitektur übergeht, während kontinuierlich Business Value geliefert wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Ansätze zur Validierung und zum Testing von Risikodaten empfiehlt ADVISORI für FRTB, und wie können diese in den regulären Betrieb integriert werden?",
        answer: "Die systematische Validierung und das umfassende Testing von Risikodaten sind kritische Erfolgsfaktoren für FRTB-Implementierungen. Eine durchdachte Test- und Validierungsstrategie sichert nicht nur die regulatorische Compliance, sondern reduziert auch operationelle Risiken und schafft Vertrauen in die Risikoberichterstattung.\n\n🔍 Mehrdimensionale Validierungs- und Testansätze für FRTB:\n• Hierarchisches Validierungsframework: Implementierung eines mehrschichtigen Validierungsansatzes, der von grundlegenden technischen Checks (Format, Vollständigkeit) über fachliche Validierungen (Plausibilität, Konsistenz) bis zu komplexen Cross-Validierungen zwischen verschiedenen Datensätzen und Systemen reicht.\n• Comparative Testing mit parallelen Berechnungen: Durchführung von Parallelberechnungen in unterschiedlichen Systemen oder mit verschiedenen Methoden, um Ergebnisse zu vergleichen und Abweichungen systematisch zu analysieren.\n• Historische Backtesting-Verfahren: Validierung neuer FRTB-Datenprozesse gegen historische Ergebnisse, um unerwartete Muster, Ausreißer oder systematische Verschiebungen zu identifizieren.\n• Adversarial Testing: Gezielte Simulation von Stressszenarien, Marktschocks und extremen Bedingungen, um die Robustheit der Datenprozesse unter außergewöhnlichen Umständen zu prüfen.\n• Continuous Integration/Continuous Validation: Etablierung automatisierter Validierungsprozesse, die bei jeder Datenlieferung oder Systemänderung ausgeführt werden und Abweichungen frühzeitig erkennen.\n\n⚙️ ADVISORIs Ansatz zur betrieblichen Integration:\n• Validierungsautomatisierung mit Exception-Handling: Wir implementieren vollautomatisierte Validierungsprozesse mit intelligenten Ausnahmebehandlungsroutinen, die nur bei relevanten Abweichungen menschliche Intervention erfordern.\n• Integrierte Validierungsdokumentation: Entwicklung eines durchgängigen Dokumentationssystems, das Validierungsergebnisse automatisch erfasst, kategorisiert und für Audit- und Governance-Zwecke aufbereitet.\n• Risk-based Testing Approach: Priorisierung von Validierungsmaßnahmen basierend auf dem geschäftlichen Risiko und der regulatorischen Relevanz, um Ressourcen effizient einzusetzen.\n• Continuous Monitoring Dashboard: Implementierung von Echtzeit-Überwachungstools, die den Status der Datenqualität visualisieren und frühzeitige Warnungen bei Qualitätsproblemen ausgeben.\n• Feedback Loop Integration: Etablierung strukturierter Prozesse, die Erkenntnisse aus Validierungs- und Testaktivitäten in die kontinuierliche Verbesserung von Datenprozessen und -definitionen einfließen lassen."
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
