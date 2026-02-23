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
    console.log('Updating MiFID Regelmäßige Kontrollen & Audits page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-regelmaessige-kontrollen-audits' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-regelmaessige-kontrollen-audits" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollte ein optimales Governance-Modell für MiFID-Kontrollen und Audits strukturiert sein, und welche Best Practices empfiehlt ADVISORI für effektive Aufsicht und Berichterstattung?",
        answer: "Ein optimales Governance-Modell für MiFID-Kontrollen und Audits transzendiert traditionelle Compliance-Strukturen und etabliert eine integrative, mehrschichtige Architektur, die strategische Aufsicht mit operativer Exzellenz verbindet. ADVISORI hat ein Advanced MiFID Control Governance Framework entwickelt, das auf unseren umfangreichen Erfahrungen mit führenden Finanzinstituten basiert und Best Practices für nachhaltige Compliance-Sicherheit definiert.\n\n🏛️ Architektur eines optimalen MiFID-Kontroll-Governance-Modells:\n• Three-tiered Governance Structure: Etablierung einer dreistufigen Governance-Architektur mit klaren Verantwortlichkeiten und Eskalationswegen: (1) Board-Level Oversight für strategische Aufsicht und Risikotoleranz-Definition, (2) Executive Management für operative Steuerung und Ressourcenallokation, und (3) Operational Control Management für die tägliche Umsetzung und Kontrolldurchführung.\n• Integrated Control Committees: Implementation eines vernetzten Committee-Systems, das dedizierte Gremien für MiFID-Kontrollen mit übergreifenden Risiko- und Compliance-Committees verbindet – diese Matrix-Struktur ermöglicht sowohl spezialisierte MiFID-Expertise als auch konsistente Compliance-Governance über verschiedene Regulierungsbereiche hinweg.\n• Balanced Independence Model: Etablierung einer ausbalancierten Unabhängigkeitsstruktur mit klarer Trennung zwischen operativer Durchführung und unabhängiger Kontrolle bei gleichzeitiger Förderung konstruktiver Zusammenarbeit – dieses Modell vermeidet sowohl Unabhängigkeitsdefizite als auch destruktive Silobildung.\n• Dynamic Escalation Framework: Entwicklung eines differenzierten Eskalationsrahmens mit klaren Triggern, Verantwortlichkeiten und Zeitlinien für verschiedene Risikokategorien – dieser Mechanismus gewährleistet die rechtzeitige Adressierung kritischer Compliance-Risiken auf der angemessenen Hierarchieebene."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute den ROI ihrer MiFID-Kontroll- und Audit-Aktivitäten quantifizieren und Compliance von einem Kostenfaktor zu einem strategischen Werttreiber transformieren?",
        answer: "Die Transformation von MiFID-Kontrollen und Audits von reinen Kostenfaktoren zu strategischen Werttreibern erfordert einen fundamentalen Perspektivwechsel und eine systematische Quantifizierung ihres Geschäftswerts. ADVISORI hat ein umfassendes MiFID Control Value Framework entwickelt, das den tatsächlichen ROI von Compliance-Aktivitäten präzise bemisst und deren strategischen Beitrag für das Gesamtunternehmen transparent macht.\n\n💰 Mehrdimensionale ROI-Quantifizierung für MiFID-Kontrollen:\n• Comprehensive Value Assessment: Entwicklung eines ganzheitlichen Bewertungsmodells, das den Gesamtwert von MiFID-Kontrollen über fünf Dimensionen erfasst: (1) Risikoreduktion, (2) Effizienzsteigerung, (3) Kosteneinsparung, (4) Reputationsschutz und (5) strategische Optionalität – mit spezifischen monetären und nicht-monetären Metriken für jede Dimension.\n• Total Cost of Compliance Analysis: Durchführung einer umfassenden Kostenanalyse, die nicht nur direkte Kontrollkosten, sondern auch indirekte Kosten wie Prozessineffizienzen, Opportunitätskosten und Hidden Compliance Costs erfasst – unsere Analysen identifizieren typischerweise 25-40% versteckte Kosten, die in konventionellen Berechnungen übersehen werden.\n• Risk-adjusted Value Calculation: Anwendung risikobasierter Bewertungsmethoden, die den Wert von Kontrollen basierend auf der tatsächlichen Risikoreduktion und potenziellen Schadensverhinderung bemessen – dieser Ansatz quantifiziert den präventiven Wert von Kontrollen und überwindet die typische Herausforderung, den Wert vermiedener Probleme zu bemessen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute ihre MiFID-Audit-Prozesse optimieren, um nicht nur Compliance-Sicherheit zu gewährleisten, sondern auch wertvolle Geschäftserkenntnisse zu generieren?",
        answer: "Die Evolution von MiFID-Audits von reinen Compliance-Prüfungen zu strategischen Erkenntnisgeneratoren repräsentiert einen fundamentalen Paradigmenwechsel in der regulatorischen Governance. ADVISORI hat einen innovativen Insight-driven MiFID Audit Approach entwickelt, der nicht nur robuste Compliance-Sicherheit gewährleistet, sondern systematisch wertvolle Geschäftserkenntnisse generiert und strategischen Mehrwert für das gesamte Unternehmen schafft.\n\n🔄 Transformation von traditionellen zu erkenntnis-getriebenen Audit-Prozessen:\n• Purpose-Shift von Compliance-Validation zu Value Creation: Fundamentale Neuausrichtung der Audit-Zielsetzung von reiner Compliance-Validierung zu einem dualen Fokus auf Compliance-Sicherheit und strategische Wertsteigerung – dieser Perspektivwechsel erweitert den Audit-Scope systematisch um Aspekte wie Prozesseffizienz, Kundenexzellenz und Geschäftspotenziale.\n• Evolution von Stichproben zu Vollanalysen: Überwindung traditioneller stichprobenbasierter Prüfansätze durch datengestützte Vollanalysen, die nicht nur Compliance-Verstöße identifizieren, sondern auch Muster, Trends und Optimierungspotenziale in Geschäftsprozessen aufdecken – diese umfassende Perspektive transformiert punktuelle Prüfpunkte in ganzheitliche Prozesseinsichten.\n• Transition von reaktiven zu präventiven Ansätzen: Verschiebung des Audit-Fokus von der retrospektiven Prüfung vergangener Aktivitäten zur präventiven Identifikation zukünftiger Optimierungspotenziale und emergenter Risiken – dieser zukunftsorientierte Ansatz maximiert den strategischen Wert von Audit-Aktivitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche spezifischen MiFID-Kontrollen und Prüfungsansätze sollten für verschiedene Geschäftsbereiche und Produktkategorien priorisiert werden?",
        answer: "Die effektive Priorisierung von MiFID-Kontrollen und Prüfungsansätzen erfordert eine differenzierte Betrachtung, die geschäftsbereichs- und produktspezifische Risikoprofile präzise adressiert. ADVISORI hat einen nuancierten Business-aligned MiFID Control Framework entwickelt, der spezifische Kontrollprioritäten für verschiedene Geschäftsbereiche und Produktkategorien definiert und maximale Compliance-Sicherheit bei optimalem Ressourceneinsatz gewährleistet.\n\n🏦 Differenzierte MiFID-Kontrollansätze für zentrale Geschäftsbereiche:\n• Retail Brokerage & Vermögensverwaltung: Priorisierung von Kontrollen für Geeignetheitsbeurteilung, Zielmarktabgleich und Kostentransparenz – mit besonderem Fokus auf automatisierte Dokumentationskontrollen, systematische Portfolioüberwachung und Ex-post-Kostenanalysen, die typische Risiken im Massenkundensegment adressieren.\n• Private Banking & Wealth Management: Fokussierung auf Kontrollen für komplexe Produkte, Cross-Border-Compliance und individuelle Eignungsprüfung – mit Schwerpunkt auf qualitativen Assessments, spezialisierten Produkteignungskontrollen und intensivierter Dokumentationsprüfung für maßgeschneiderte Beratungsleistungen.\n• Institutional Banking & Markets: Priorisierung von Kontrollen für Best Execution, Handelsüberwachung und Research-Unbundling – mit Fokus auf datengestützter Ausführungsanalyse und systematischen Transaktionskosten-Analysen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
