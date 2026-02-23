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
    console.log('Updating Basel III Readiness page with FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-readiness" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann die Basel III-Readiness-Bewertung genutzt werden, um bestehende Datenmanagement- und Governance-Schwächen zu adressieren?",
        answer: "Eine strategisch durchgeführte Basel III-Readiness-Bewertung bietet eine außergewöhnliche Gelegenheit, fundamentale Datenmanagement- und Governance-Herausforderungen zu identifizieren und systematisch zu adressieren. Da Basel III umfassende Anforderungen an Datenqualität, -aggregation und -governance stellt, kann die Readiness-Bewertung als Katalysator für eine umfassende Datenstrategieoptimierung dienen.\n\n🔍 Identifikation systemischer Datenmanagement-Herausforderungen:\n• Datenqualitätsdefizite: Die Readiness-Bewertung deckt systematisch Probleme mit Datenvollständigkeit, -konsistenz, -genauigkeit und -aktualität auf, die weit über regulatorische Berichterstattung hinaus Auswirkungen haben.\n• Fragmentierte Datenarchitektur: Identifikation von Datensilos, redundanten Datenhaltungen und inkonsistenten Datenmodellen, die sowohl regulatorische Compliance als auch operative Effizienz behindern.\n• Governance-Lücken: Aufdeckung von unklaren Dateneigentümerschaften, mangelhaften Datenqualitätskontrollen und unzureichenden Datenmanagementprozessen als Grundursachen für Compliance-Probleme.\n• Unzureichende Datenlineage: Erkennung fehlender Transparenz über Datenherkunft, -transformation und -verwendung, die sowohl regulatorische als auch Management-Reporting-Probleme verursacht.\n\n🛠️ Strategische Hebelung der Readiness-Erkenntnisse:\n• Enterprise Data Strategy: Nutzung der regulatorischen Anforderungen als Treiber für die Entwicklung einer umfassenden Unternehmensdatenstrategie, die sowohl Compliance als auch Geschäftsinnovation unterstützt.\n• Data Governance Framework: Implementierung eines robusten Data-Governance-Frameworks mit klaren Rollen, Verantwortlichkeiten und Prozessen für kontinuierliche Datenqualitätssicherung.\n• Metadaten-Management: Aufbau eines zentralen Business Glossary und Data Dictionary, das konsistente Datendefinitionen, Berechnungsmethoden und Verwendungszwecke dokumentiert.\n• Datenqualitätsmanagement: Etablierung systematischer Datenqualitätskontrollen, -metriken und -verbesserungsprozesse, die auch über regulatorische Anforderungen hinaus Mehrwert schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen fortschrittliche Technologien und Automatisierung bei einer erfolgreichen Basel III-Readiness-Bewertung und -Implementation?",
        answer: "Fortschrittliche Technologien und Automatisierung sind entscheidende Enabler für eine effektive Basel III-Readiness-Bewertung und -Implementation. Der strategische Einsatz moderner Technologielösungen kann nicht nur die Effizienz und Genauigkeit der Compliance-Prozesse erheblich verbessern, sondern auch transformative Geschäftsvorteile generieren.\n\n💻 Schlüsseltechnologien für die Basel III-Readiness und -Implementation:\n• Advanced Analytics und KI: Einsatz von Machine Learning zur Identifikation von Datenqualitätsproblemen, Erkennung von Mustern in regulatorischen Daten und Optimierung von Kapital- und Liquiditätsallokation.\n• Process Mining und Automation: Nutzung von Process-Mining-Technologien zur Analyse bestehender regulatorischer Prozesse und gezielte Automatisierung manueller, fehleranfälliger Tätigkeiten.\n• Integrierte Governance, Risk & Compliance (GRC) Plattformen: Implementation spezialisierter GRC-Lösungen, die regulatorische Anforderungen, Kontrollen und Nachweise in einem integrierten Framework verwalten.\n• Cloud-basierte Lösungen: Nutzung skalierbarer Cloud-Infrastrukturen für rechenintensive regulatorische Berechnungen, Stresstests und Szenarioanalysen mit flexiblen Ressourcen.\n\n🚀 Strategischer Technologieeinsatz für maximalen Mehrwert:\n• Technologie-Roadmap: Entwicklung einer priorisierten Technologie-Implementierungsroadmap, die sowohl Quick Wins als auch strategische langfristige Lösungen umfasst.\n• Integrationsarchitektur: Gestaltung einer flexiblen Integrationsarchitektur, die bestehende Systeme mit neuen regulatorischen Lösungen verbindet und Datensilos überwindet.\n• Daten-Hub-Strategie: Implementierung eines zentralen Regulatory Data Hub als Single Point of Truth für regulatorische Berechnungen, Reporting und Analysen.\n• Self-Service-Analysekapazitäten: Bereitstellung von Self-Service-Analytics-Tools für Risiko- und Compliance-Teams, um ad-hoc Analysen ohne IT-Abhängigkeit durchführen zu können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann die Basel III-Readiness-Bewertung mit anderen regulatorischen Anforderungen (z.B. DORA, ESG) harmonisiert werden, um Synergien zu maximieren?",
        answer: "In der zunehmend komplexen Regulierungslandschaft ist eine isolierte Betrachtung einzelner regulatorischer Anforderungen weder effizient noch strategisch sinnvoll. Eine vorausschauende Basel III-Readiness-Bewertung sollte bewusst Schnittstellen zu anderen relevanten Regulierungen wie DORA (Digital Operational Resilience Act), ESG (Environmental, Social, Governance) und weiteren Anforderungen identifizieren und gezielt Synergien erschließen.\n\n🔄 Systematische Synergieidentifikation zwischen Regulierungen:\n• Gemeinsame Datenanforderungen: Identifikation überlappender Datenanforderungen zwischen Basel III, DORA, ESG und anderen Regulierungen, um redundante Datenerhebungen zu vermeiden und konsistente Datendefinitionen zu etablieren.\n• Prozesskonvergenz: Analyse von Prozessüberschneidungen in Bereichen wie Risikomanagement, Governance und Reporting, die über verschiedene Regulierungen hinweg harmonisiert werden können.\n• Kontrollinventar-Mapping: Entwicklung eines integrierten Kontrollrahmens, der Kontrollen verschiedenen regulatorischen Anforderungen zuordnet und Mehrfachabdeckungen transparent macht.\n• Technologische Synergien: Identifikation gemeinsamer technologischer Anforderungen und Lösungsansätze, die mehrere regulatorische Vorgaben gleichzeitig adressieren können.\n\n🧩 Integrierter Compliance-Ansatz für multiple Regulierungen:\n• Regulatorische Taxonomie: Entwicklung einer umfassenden regulatorischen Taxonomie, die Anforderungen aus verschiedenen Regulierungen systematisch klassifiziert und Interdependenzen aufzeigt.\n• Harmonisierte Gap-Analyse: Durchführung einer ganzheitlichen Gap-Analyse, die gleichzeitig Lücken bezüglich mehrerer regulatorischer Frameworks identifiziert und priorisiert.\n• Konsolidierte Implementierungsroadmap: Erstellung einer integrierten Implementierungsroadmap, die Maßnahmen zur Erfüllung verschiedener Regulierungen koordiniert und sequenziert.\n• Cross-Regulatory Governance: Etablierung eines übergreifenden Governance-Modells, das die konsistente Umsetzung und kontinuierliche Überwachung verschiedener regulatorischer Anforderungen sicherstellt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI die Integration der Basel III-Readiness-Erkenntnisse in bestehende Transformationsprogramme und Change-Management-Initiativen?",
        answer: "Die Integration von Basel III-Readiness-Erkenntnissen in laufende Transformationsprogramme und Change-Management-Initiativen ist entscheidend für eine effiziente und nachhaltige Implementierung. ADVISORI verfolgt einen systematischen Ansatz, der regulatorische Compliance nahtlos mit strategischen Transformationszielen verbindet und bestehende Change-Dynamiken nutzt statt zusätzliche zu schaffen.\n\n🔗 Strategische Integration in Transformationsprogramme:\n• Transformations-Mapping: Systematische Analyse bestehender Transformationsinitiativen (z.B. Digitalisierung, Prozessoptimierung, IT-Modernisierung) und Identifikation von Schnittstellen zu Basel III-Anforderungen.\n• Gemeinsame Zielarchitektur: Entwicklung einer integrierten Zielarchitektur, die sowohl transformative Geschäftsziele als auch regulatorische Anforderungen berücksichtigt.\n• Konsolidierte Roadmap: Harmonisierung und Priorisierung von Transformations- und Compliance-Initiativen in einer konsolidierten Roadmap mit klaren Abhängigkeiten und Synergien.\n• Integrierte Ressourcenplanung: Optimierung der Ressourcenallokation durch Identifikation von Initiativen, die sowohl transformative als auch regulatorische Ziele unterstützen.\n\n🔄 Effektives Change Management für nachhaltige Implementation:\n• Stakeholder-zentrierter Ansatz: Identifikation und gezielte Ansprache aller von Basel III-Änderungen betroffenen Stakeholder, unter Berücksichtigung ihrer spezifischen Interessen und Bedenken.\n• Kommunikationsstrategie: Entwicklung einer differenzierten Kommunikationsstrategie, die Basel III-Anforderungen in den breiteren Kontext der Unternehmensstrategie und -transformation einbettet.\n• Capability Building: Systematischer Aufbau der erforderlichen Kompetenzen und Fähigkeiten durch gezielte Schulungen, Workshops und Wissenstransfer-Formate.\n• Kulturelle Dimension: Berücksichtigung kultureller Aspekte und bestehender Change-Dynamiken, um Widerstände zu minimieren und nachhaltige Verhaltensänderungen zu fördern."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
