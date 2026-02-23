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
    console.log('Updating EBA FinRep COREP Anpassungen page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-finrep-corep-anpassungen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-finrep-corep-anpassungen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Vorteile bietet eine proaktive Anpassung an neue FinRep- und COREP-Anforderungen für die Unternehmensführung von Finanzinstituten?",
        answer: "Eine proaktive Anpassung an FinRep- und COREP-Anforderungen geht weit über die bloße Erfüllung regulatorischer Pflichten hinaus und bietet strategische Chancen für zukunftsorientierte Finanzinstitute. Die Implementierung dieser Meldeanforderungen kann als strategischer Hebel zur Optimierung von Datenmanagement, Prozesseffizienz und Risikotransparenz genutzt werden.\n\n🔍 Strategische Mehrwerte jenseits der Compliance:\n• Datengetriebene Entscheidungsfindung: Durch die systematische Erfassung, Validierung und Aufbereitung von Daten für regulatorische Meldungen entsteht ein hochqualitativer Datenfundus, der für strategische Entscheidungen und Geschäftsanalysen genutzt werden kann.\n• Beschleunigte Erkenntnisgewinnung: Optimierte Meldeprozesse ermöglichen schnellere Reporting-Zyklen, wodurch die Unternehmensführung früher Einblicke in Risiko- und Performance-Kennzahlen erhält und agiler auf Marktveränderungen reagieren kann.\n• Wettbewerbsvorteile durch analytische Exzellenz: Institute, die regulatorische Daten systematisch für Geschäftsanalysen nutzen, können Markttrends und Risiken früher erkennen und entsprechende Wettbewerbsvorteile realisieren.\n• Kosteneffizienz durch integrierte Datenarchitekturen: Eine strategisch konzipierte Meldewesenarchitektur reduziert Redundanzen, automatisiert manuelle Prozesse und senkt langfristig die Total Cost of Ownership für Reporting-Lösungen.\n\n🛡️ Risikominimierung durch vorausschauende Implementierung:\n• Regulatorisches Risiko: Frühzeitige Anpassungen minimieren das Risiko von Compliance-Verstößen und daraus resultierenden Sanktionen oder Reputationsschäden.\n• Datenqualitätsrisiko: Systematische Implementierungsprozesse fördern konsistente Datenqualität und reduzieren das Risiko fehlerhafter Geschäftsentscheidungen aufgrund mangelhafter Informationen.\n• Operative Risiken: Durch geplante statt reaktive Anpassungen werden Ressourcenengpässe vermieden und betriebliche Störungen minimiert.\n• Implementierungsrisiko: Ein strategischer Ansatz ermöglicht die Priorisierung von Änderungen nach Geschäftsrelevanz und regulatorischer Dringlichkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die umfangreichen Datenanforderungen der aktualisierten FinRep- und COREP-Frameworks effizient in unsere bestehende Datenarchitektur integrieren?",
        answer: "Die effiziente Integration erweiterter FinRep- und COREP-Datenanforderungen in bestehende Architekturen erfordert einen strategischen Ansatz, der sowohl kurzfristige Compliance als auch langfristige Datenexzellenz sicherstellt. Die Herausforderung liegt nicht nur in der technischen Umsetzung, sondern auch in der Schaffung nachhaltiger Datenstrukturen, die regulatorische Agilität mit operativer Effizienz verbinden.\n\n🔄 Strategische Integrationsansätze:\n• Data-Lineage-orientierte Implementierung: Statt isolierter Punkt-zu-Punkt-Lösungen empfiehlt sich ein End-to-End-Ansatz, der den gesamten Datenlebenszyklus von der Quelle bis zur finalen Meldung transparent abbildet und dokumentiert.\n• Granularitätsprinzip: Speichern Sie Daten auf der granularsten verfügbaren Ebene und aggregieren Sie diese bedarfsgerecht für verschiedene Meldezwecke, um Flexibilität bei zukünftigen Anforderungsänderungen zu gewährleisten.\n• Semantische Datenmodellierung: Entwickeln Sie ein übergreifendes semantisches Modell, das regulatorische Konzepte mit internen Geschäftsbegriffen verknüpft und als zentrale Referenz für alle Reporting-Prozesse dient.\n• Governance-integrierte Architektur: Verankern Sie Datenqualitätskontrollen, Validierungsregeln und Verantwortlichkeiten direkt in der Datenarchitektur, statt diese nachgelagert zu implementieren.\n\n🛠️ Technische Implementierungsstrategien:\n• Data-Virtualization-Technologien: Nutzen Sie virtuelle Datenschichten, um verschiedene Datenquellen zu integrieren, ohne physische Data Marts für jede Meldeanforderung erstellen zu müssen.\n• Metadata-Management-Systeme: Implementieren Sie zentrale Metadaten-Repositories, die regulatorische Anforderungen, Datentransformationen und Berechnungslogiken dokumentieren und versionieren.\n• API-basierte Datenextraktion: Entwickeln Sie standardisierte APIs für den Zugriff auf Quelldaten, um die Abhängigkeit von proprietären ETL-Prozessen zu reduzieren und die Integration neuer Datenquellen zu vereinfachen.\n• Flexible Reporting-Engines: Setzen Sie auf konfigurierbare Reporting-Lösungen, die neue Taxonomie-Versionen ohne umfangreiche Programmieranpassungen integrieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche methodischen Ansätze empfehlen Sie für die Validierung und Qualitätssicherung der angepassten FinRep- und COREP-Meldungen?",
        answer: "Die Validierung und Qualitätssicherung von FinRep- und COREP-Meldungen erfordert ein mehrstufiges, systematisches Vorgehen, das über die reine Erfüllung technischer Validierungsregeln hinausgeht. Ein robuster Validierungsansatz kombiniert technische, fachliche und betriebswirtschaftliche Perspektiven, um sowohl formale Korrektheit als auch inhaltliche Plausibilität sicherzustellen.\n\n🔍 Mehrdimensionale Validierungsarchitektur:\n• Syntaktische Validierung: Überprüfung der technischen Korrektheit gemäß XBRL-Taxonomie, Datenformaten und strukturellen Anforderungen als Basisabsicherung.\n• Semantische Validierung: Prüfung der inhaltlichen Korrektheit durch Abgleich mit definierten Business Rules, regulatorischen Berechnungsvorschriften und Konsistenzregeln.\n• Kontextuelle Validierung: Bewertung der Plausibilität im Geschäftskontext durch Zeitreihenanalysen, Peer-Group-Vergleiche und Abgleich mit internen Management-Informationen.\n• Ganzheitliche Validierung: Übergreifende Prüfung der Konsistenz zwischen verschiedenen regulatorischen Berichten (z.B. zwischen FinRep und COREP oder zu anderen aufsichtsrechtlichen Meldungen).\n\n🛠️ Methodische Best Practices für effektive Qualitätssicherung:\n• Automatisierte Regel-Engines: Implementierung umfassender Validierungsregeln in automatisierten Systemen, die sowohl EBA-definierte als auch institutsspezifische Prüfungen durchführen.\n• Vieraugenprinzip mit Rollenkonzept: Etablierung klar definierter Verantwortlichkeiten für Datenerzeugung, Validierung und Freigabe mit systemgestützten Workflow-Prozessen.\n• Threshold-basierte Validierung: Definition von Schwellenwerten für signifikante Abweichungen, die tiefergehende Analysen und Dokumentation erfordern.\n• Audit Trails und Nachvollziehbarkeit: Lückenlose Dokumentation aller Validierungsergebnisse, Anpassungen und Freigabeentscheidungen für Prüfungs- und Nachweiszwecke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Implementierung neuer FinRep- und COREP-Anforderungen nutzen, um unsere gesamte Meldewesen-Architektur zukunftssicher zu gestalten?",
        answer: "Die Implementierung neuer FinRep- und COREP-Anforderungen bietet eine strategische Gelegenheit, die gesamte Meldewesen-Architektur zu modernisieren und für künftige regulatorische Entwicklungen zu wappnen. Eine zukunftssichere Architektur geht über punktuelle Anpassungen hinaus und schafft flexible, skalierbare Strukturen, die regulatorische Agilität mit operativer Effizienz verbinden.\n\n🏗️ Architektonische Grundprinzipien für Zukunftsfähigkeit:\n• Modulare Systemarchitektur: Entwicklung einer komponenten-basierten Architektur mit klar definierten Schnittstellen, die einzelne Funktionsblöcke unabhängig voneinander aktualisieren lässt.\n• Datenzentrierter Ansatz: Etablierung eines zentralen Datenhubs als Single Point of Truth, der verschiedene regulatorische und interne Reporting-Anforderungen aus einem konsistenten Datenbestand bedient.\n• Metadaten-getriebene Prozesse: Nutzung von Metadaten zur Steuerung von Datenflüssen, Transformationen und Validierungen, um Anpassungen an neue Anforderungen durch Konfiguration statt Programmierung zu ermöglichen.\n• Cloud-native Architektur: Evaluation cloud-basierter Lösungen für verbesserte Skalierbarkeit, Kosteneffizienz und Zugriff auf innovative Technologien wie KI-gestützte Datenvalidierung.\n\n🔄 Implementierungsstrategien für kontinuierliche Evolution:\n• Agile Delivery-Modelle: Einführung agiler Entwicklungsmethoden für Meldewesen-Anpassungen, um schneller auf regulatorische Änderungen reagieren zu können.\n• API-First-Strategie: Entwicklung standardisierter APIs für Datenextraktion, -transformation und -validierung, die eine flexible Integration neuer Datenanforderungen ermöglichen.\n• DevOps für Regulatory Reporting: Implementierung automatisierter Testing- und Deployment-Prozesse speziell für regulatorische Anpassungen.\n• Regulatory Change Management: Etablierung eines strukturierten Prozesses zur frühzeitigen Erkennung, Bewertung und Implementierung regulatorischer Änderungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA FinRep COREP Anpassungen C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
