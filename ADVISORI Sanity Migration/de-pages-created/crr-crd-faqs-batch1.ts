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
    console.log('Updating CRR/CRD page with FAQs batch 1...')
    
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
        question: "Wie unterstützt ADVISORI bei der strategischen Implementierung der CRR/CRD-Anforderungen, um nicht nur Compliance zu erreichen, sondern auch Wettbewerbsvorteile zu erzielen?",
        answer: "Die Implementierung der CRR/CRD-Vorschriften ist mehr als eine regulatorische Pflichtübung – sie bietet strategische Chancen zur Neuausrichtung von Geschäftsmodellen und zur Optimierung der Kapitalallokation. ADVISORI nutzt einen integrierten Ansatz, der über bloße Compliance hinausgeht und die regulatorischen Anforderungen als Katalysator für nachhaltige Wertschöpfung betrachtet.\n\n🔍 Strategische Dimensionen unseres Ansatzes:\n• Geschäftsmodell-Integration: Wir analysieren die Auswirkungen der CRR/CRD auf Ihr spezifisches Geschäftsmodell und identifizieren Bereiche, in denen regulatorische Optimierungen zu direkten Wettbewerbsvorteilen führen können.\n• Kapitaloptimierung: Durch präzise Modellierung und Analyse der RWA (Risk Weighted Assets) identifizieren wir Bereiche mit ineffizienter Kapitalallokation und entwickeln Strategien zur Optimierung Ihrer Kapitalstrukturen.\n• Risikosensitive Preisgestaltung: Implementierung von risikobasierten Pricing-Modellen, die regulatorische Kapitalkosten transparent in die Produktkalkulation einbeziehen und so Profitabilitätssteigerungen ermöglichen.\n• Datenstrategische Vorteile: Transformation der regulatorischen Datenanforderungen in einen strategischen Asset durch Integration in das unternehmensweite Datenmanagement und Analytics-Framework.\n\n💡 Mehrwertschaffung durch intelligente Compliance:\n• Wettbewerbsdifferenzierung: Entwicklung von regulatorisch optimierten Produktangeboten, die im Markt klare Wettbewerbsvorteile bieten.\n• Kosteneffizienz: Durch integrierte Systeme und automatisierte Prozesse reduzieren wir den operativen Aufwand für Compliance signifikant und steigern die Kosteneffizienz.\n• Schnellere Time-to-Market: Unsere vorausschauenden Compliance-Frameworks ermöglichen eine schnellere Markteinführung neuer Produkte durch frühzeitige Berücksichtigung regulatorischer Anforderungen.\n• Aufbau von Vertrauen: Eine nachweisbar robuste Compliance-Infrastruktur stärkt das Vertrauen von Kunden, Investoren und Aufsichtsbehörden und schafft so langfristige Beziehungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen bringen die aktuellen CRR III/CRD VI-Änderungen mit sich und wie können Banken diese effektiv bewältigen?",
        answer: "Die Einführung von CRR III und CRD VI markiert einen bedeutenden Meilenstein in der Weiterentwicklung des europäischen Bankenregulierungsrahmens. Diese Reformen bringen weitreichende Änderungen mit sich, die strategische Anpassungen und operative Umstellungen erfordern. ADVISORI bietet einen strukturierten Ansatz, um diese Herausforderungen erfolgreich zu meistern.\n\n📊 Kernherausforderungen der CRR III/CRD VI:\n• Neuausrichtung der Kreditrisikomessung: Die Fundamental Review of the Trading Book (FRTB) und die Überarbeitung der Standardansätze für Kreditrisiko erfordern umfassende Anpassungen der Risikomessmethoden und -modelle.\n• Erweiterte Output-Floors: Die Einführung von Output-Floors begrenzt den Nutzen interner Modelle und erfordert neue Strategien zur Kapitaloptimierung sowie parallele Berechnungsmethoden.\n• ESG-Risiko-Integration: Die neue Anforderung zur Integration von Umwelt-, Sozial- und Governance-Risiken (ESG) in die Kapitalplanung verlangt neue Datenquellen, Bewertungsmethoden und Reporting-Prozesse.\n• Operative Komplexität: Die parallele Anwendung verschiedener Berechnungsmethoden und gestiegene Offenlegungsanforderungen erhöhen die operative Komplexität signifikant.\n\n🛠️ ADVISORIs integrierter Lösungsansatz:\n• Gap-Analyse und Roadmap-Entwicklung: Systematische Identifikation aller betroffenen Bereiche und Entwicklung einer priorisierten Implementierungsroadmap mit klaren Meilensteinen.\n• Modellierungsoptimierung: Überprüfung und Anpassung der internen Modelle für Kredit-, Markt- und operationelle Risiken unter Berücksichtigung der neuen Anforderungen und Output-Floor-Beschränkungen.\n• Technologische Transformation: Implementierung flexibler Datenarchitekturen und Berechnungsengines, die parallele Berechnungsmethoden unterstützen und regulatorische Änderungen agil integrieren können.\n• Strategische Geschäftsanpassung: Analyse der Auswirkungen auf Geschäftsbereiche und Produkte, mit Empfehlungen zur strategischen Neuausrichtung des Portfolios zur Optimierung der Kapitaleffizienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie hilft ADVISORI Finanzinstituten, die Anforderungen an die Liquiditätssteuerung (LCR und NSFR) effektiv zu implementieren und zu optimieren?",
        answer: "Die Liquiditätsanforderungen – Liquidity Coverage Ratio (LCR) und Net Stable Funding Ratio (NSFR) – stellen zentrale Säulen des Basel-Rahmenwerks dar und erfordern eine durchdachte Balance zwischen regulatorischer Compliance und Rentabilität. ADVISORI unterstützt Finanzinstitute mit einem ganzheitlichen Ansatz zur Optimierung dieser Kennzahlen, der sowohl technische als auch strategische Dimensionen abdeckt.\n\n💧 Integrierter Ansatz zur Liquiditätsoptimierung:\n• Ganzheitliche Liquiditätsanalyse: Wir führen eine detaillierte Bestandsaufnahme der aktuellen Liquiditätsstrukturen durch, identifizieren Ineffizienzen und quantifizieren deren Auswirkungen auf LCR, NSFR und die Gesamtprofitabilität.\n• Bilanz- und Geschäftsmodellanalyse: Bewertung der Auswirkungen verschiedener Bilanzposten und Geschäftsaktivitäten auf die Liquiditätskennzahlen mit Fokus auf der Identifikation von Optimierungspotenzialen.\n• Dynamische Liquiditätsmodellierung: Entwicklung fortschrittlicher Modelle zur Prognose von Liquiditätsanforderungen unter verschiedenen Stress-Szenarien, die eine vorausschauende Steuerung ermöglichen.\n• Produktdesign und Pricing: Beratung bei der Gestaltung von Produkten, die günstige Liquiditätseigenschaften aufweisen und gleichzeitig attraktive Konditionen für Kunden bieten.\n\n🔄 Operative und strategische Optimierung:\n• Asset-Liability-Management Integration: Implementierung eines integrierten ALM-Frameworks, das Liquiditätsanforderungen direkt in die strategische Bilanzsteuerung einbezieht.\n• Liquiditätspuffer-Optimierung: Strategien zur Strukturierung des HQLA-Portfolios (High Quality Liquid Assets), die die Opportunitätskosten minimieren und gleichzeitig alle regulatorischen Anforderungen erfüllen.\n• Funding-Mix-Optimierung: Entwicklung eines diversifizierten Funding-Ansatzes, der stabile Finanzierungsquellen erschließt und gleichzeitig Kosteneffizienz sicherstellt.\n• Treasury-Transformation: Modernisierung der Treasury-Funktionen durch fortschrittliche Technologien und Prozesse, die eine integrierte Steuerung von Liquidität, Zinsrisiken und Kapitalanforderungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Technologielösungen empfiehlt ADVISORI zur effizienten Umsetzung und kontinuierlichen Einhaltung der CRR/CRD-Anforderungen?",
        answer: "Die zunehmende Komplexität und der Detaillierungsgrad der CRR/CRD-Anforderungen stellen erhebliche Herausforderungen an die technologische Infrastruktur von Finanzinstituten. ADVISORI verfolgt einen technologieorientierten Lösungsansatz, der modernste Systeme und fortschrittliche Analysemethoden einsetzt, um Compliance-Prozesse zu automatisieren, zu optimieren und zukunftssicher zu gestalten.\n\n💻 Technologische Grundpfeiler für effiziente CRR/CRD-Compliance:\n• Integrierte Datenarchitektur: Wir konzipieren und implementieren eine einheitliche Datenarchitektur, die regulatorische Anforderungen mit internen Steuerungsbedürfnissen harmonisiert und eine konsistente, hochqualitative Datenbasis schafft.\n• Automatisierte Berechnungsengines: Entwicklung und Implementierung von spezialisierten Berechnungssystemen, die die komplexen Kapital- und Risikoberechnungen nach CRR/CRD effizient durchführen und dokumentieren.\n• Regulatorische Reporting-Plattformen: Integration moderner Reporting-Lösungen, die den gesamten Prozess von der Datenerfassung bis zur Einreichung bei den Aufsichtsbehörden automatisieren und validieren.\n• Echtzeit-Überwachungssysteme: Implementierung von Monitoring-Tools, die kontinuierlich die Einhaltung regulatorischer Kennzahlen überwachen und frühzeitig auf potenzielle Grenzwertverletzungen hinweisen.\n\n🔧 Fortschrittliche Technologien für strategischen Mehrwert:\n• KI und Machine Learning: Einsatz von künstlicher Intelligenz zur Identifikation von Optimierungspotenzialen in der Kapitalallokation und zur Prognose der Auswirkungen von Geschäftsentscheidungen auf regulatorische Kennzahlen.\n• Regulatory Sandboxes: Bereitstellung von Simulationsumgebungen, in denen neue Produkte und Geschäftsstrategien auf ihre regulatorischen Auswirkungen getestet werden können, bevor sie implementiert werden.\n• API-basierte Microservices: Entwicklung flexibler, modularer Lösungen, die sich leicht an regulatorische Änderungen anpassen lassen und nahtlos in bestehende IT-Landschaften integrieren.\n• Blockchain für Compliance-Nachweise: Nutzung von Distributed-Ledger-Technologien zur manipulationssicheren Dokumentation von Compliance-Prozessen und zur Verbesserung der Prüfbarkeit regulatorischer Entscheidungen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
