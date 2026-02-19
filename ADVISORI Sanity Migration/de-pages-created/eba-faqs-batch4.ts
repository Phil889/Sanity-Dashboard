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
    console.log('Updating EBA page with C-Level FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba' })
    
    if (!existingDoc) {
      throw new Error('Document "eba" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie wirken sich die EBA-Vorgaben zur Kreditrisikosteuerung auf die strategische Kreditportfoliosteuerung und Geschäftsmodelle von Finanzinstituten aus?",
        answer: "Die EBA-Anforderungen an die Kreditrisikosteuerung haben sich in den letzten Jahren deutlich verschärft und beeinflussen zunehmend nicht nur operative Prozesse, sondern auch strategische Entscheidungen zur Portfolioallokation und Geschäftsmodellentwicklung. Für die C-Suite bietet eine strategische Herangehensweise an diese Anforderungen die Chance, Kreditrisiken präziser zu steuern und gleichzeitig die Profitabilität zu optimieren.\n\n💼 Strategische Implikationen der EBA-Kreditrisikoregulierung:\n• Neuausrichtung der Kreditportfoliostrategie: Die differenzierten Kapitalanforderungen für verschiedene Assetklassen und Risikokonzentrationen erfordern eine strategische Neubewertung der optimalen Portfoliozusammensetzung unter Berücksichtigung von Risiko-Rendite-Profilen.\n• Transformation der Kreditprozesse: Die hohen Anforderungen an Kreditrisikomodelle, Datenqualität und Monitoring erfordern eine grundlegende Modernisierung der Kreditprozesse, die nicht nur Compliance sicherstellt, sondern auch operationelle Effizienz steigert.\n• Strategische Implikationen für Pricing und Produktgestaltung: Die differenzierten Kapitalkosten verschiedener Kreditarten beeinflussen direkt die Profitabilität einzelner Produkte und erfordern eine risikoadjustierte Preisgestaltung und Produktentwicklung.\n• Geschäftsmodellimplikationen für spezialisierte Kreditinstitute: Institute mit hohen Konzentrationen in bestimmten Segmenten müssen ihre Geschäftsmodelle möglicherweise grundlegend überdenken, um den erhöhten Kapitalanforderungen für Konzentrationsrisiken gerecht zu werden.\n\n📝 ADVISORI's ganzheitlicher Ansatz zur strategischen Kreditrisikosteuerung:\n• Strategic Credit Portfolio Optimization: Wir entwickeln datengetriebene Portfoliostrategien, die regulatorische Anforderungen, Risikopräferenzen und Profitabilitätsziele in Einklang bringen und Kapitaleffizienz maximieren.\n• Credit Process Transformation: Unsere End-to-End-Transformation des Kreditprozesses integriert regulatorische Anforderungen, modernste Technologien und Best Practices, um sowohl Compliance als auch operationelle Exzellenz zu gewährleisten.\n• Advanced Risk Analytics & Monitoring: Wir implementieren fortschrittliche Analyse- und Monitoringlösungen, die über die regulatorischen Mindestanforderungen hinausgehen und tiefere Einblicke in Portfoliorisiken und -chancen ermöglichen.\n• Strategic Impact Assessment & Adaptation: Wir analysieren die Auswirkungen regulatorischer Änderungen auf Ihr Geschäftsmodell und entwickeln Strategien zur Anpassung und Optimierung, die Compliance-Risiken minimieren und strategische Chancen maximieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie können Finanzinstitute die EBA-Anforderungen an Liquiditätsmanagement und Funding nutzen, um ihre Treasury-Funktion strategisch weiterzuentwickeln?",
        answer: "Die umfassenden EBA-Anforderungen an Liquiditätsmanagement und Funding (LCR, NSFR, ILAAP) werden häufig primär als regulatorische Hürde betrachtet. Für weitsichtige C-Level-Executives bieten sie jedoch einen Rahmen und Katalysator für die strategische Transformation der Treasury-Funktion von einer operativen zu einer strategischen Unternehmensfunktion, die aktiv zur Wertschöpfung und Geschäftsstrategie beiträgt.\n\n💧 Strategische Dimensionen des Liquiditäts- und Fundingmanagements:\n• Treasury als strategischer Partner: Die regulatorischen Anforderungen erfordern eine engere Integration des Treasury in strategische Entscheidungsprozesse und bieten die Chance, Treasury von einer primär operativen zu einer strategischen Funktion weiterzuentwickeln.\n• Optimierung der Finanzierungsstruktur: Die differenzierten regulatorischen Bewertungen verschiedener Finanzierungsquellen schaffen den Anreiz für eine diversifizierte, stabile und kosteneffiziente Finanzierungsstruktur, die Refinanzierungsrisiken minimiert und Margenspielräume erhöht.\n• Strategisches Liquiditätsmanagement: Die Anforderungen an Liquiditätspuffer und -management bieten die Chance, eine präzisere und strategischere Steuerung der Liquidität zu entwickeln, die Liquiditätskosten senkt und gleichzeitig die regulatorische Compliance sicherstellt.\n• Integrierte Bilanzsteuerung: Die regulatorischen Anforderungen fördern einen holistischen Ansatz zur Bilanzsteuerung, der Kapital-, Liquiditäts- und Ertragsperspektiven integriert und zu einer optimierten Ressourcenallokation führt.\n\n🏦 ADVISORI's Treasury Transformation Ansatz:\n• Strategic Treasury Operating Model: Wir entwickeln ein Treasury-Betriebsmodell, das regulatorische Anforderungen erfüllt und gleichzeitig die strategische Rolle des Treasury in der Organisation stärkt und klar definiert.\n• Integrated Balance Sheet Management: Unser ganzheitlicher Ansatz zur Bilanzsteuerung integriert Kapital-, Liquiditäts- und Ertragsaspekte und ermöglicht eine optimierte, risikoadjustierte Ressourcenallokation.\n• Advanced Liquidity Analytics & Stress Testing: Wir implementieren fortschrittliche Analyse- und Stresstestmethoden, die über regulatorische Mindestanforderungen hinausgehen und tiefere Einblicke in Liquiditätsrisiken und -optimierungspotenziale bieten.\n• Treasury Technology Enablement: Wir identifizieren und implementieren moderne Treasury-Technologielösungen, die sowohl regulatorische Compliance als auch strategische Steuerungsfähigkeiten verbessern und operative Effizienz steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können Finanzinstitute die aufsichtsrechtlichen Vorgaben der EBA zur Governance und zum internen Kontrollsystem strategisch nutzen, um die organisatorische Effektivität zu steigern?",
        answer: "Die EBA-Anforderungen an Governance und interne Kontrollsysteme werden oft als bürokratische Vorgaben wahrgenommen, die primär Compliance-Zwecken dienen. Für die weitsichtige C-Suite bieten diese Vorgaben jedoch einen strukturierten Rahmen für organisatorische Exzellenz, der weit über die reine Compliance hinaus Wettbewerbsvorteile schaffen und die Effektivität der Organisation signifikant steigern kann.\n\n🔄 Von regulatorischer Compliance zu organisatorischer Exzellenz:\n• Governance als strategischer Enabler: Eine gut gestaltete Governance-Struktur schafft nicht nur regulatorische Compliance, sondern auch klare Entscheidungswege, effektive Eskalationsmechanismen und eine transparente Verantwortungskultur, die Agilität und strategische Umsetzungskraft fördern.\n• Risikomanagement als Wertschöpfungsfaktor: Ein fortschrittliches Risikomanagement, das über regulatorische Mindestanforderungen hinausgeht, ermöglicht eine präzisere Risikosteuerung, fundiertere strategische Entscheidungen und eine optimierte Ressourcenallokation.\n• Interne Kontrollen als Effizienzfaktor: Gut gestaltete Kontrollsysteme sind nicht nur Schutzmaßnahmen, sondern können auch Prozesseffizienz steigern, Fehlerquoten senken und wertvolle Erkenntnisse für kontinuierliche Verbesserungen liefern.\n• Transparenz und Accountability als Kulturelemente: Die regulatorischen Anforderungen an Transparenz und Verantwortlichkeit können als Katalysator für eine leistungsorientierte Unternehmenskultur dienen, die Eigenverantwortung, Innovation und kontinuierliche Verbesserung fördert.\n\n🏛️ ADVISORI's integrativer Governance-Ansatz:\n• Strategic Governance Framework: Wir entwickeln eine Governance-Struktur, die regulatorische Anforderungen erfüllt und gleichzeitig auf Ihre spezifischen strategischen Ziele, Organisationskultur und Geschäftsmodell zugeschnitten ist.\n• Intelligent Control System Design: Unser Ansatz für interne Kontrollsysteme fokussiert auf Wirksamkeit und Effizienz, minimiert unnötige Kontrollen und konzentriert Ressourcen auf die Bereiche mit dem höchsten Risiko und strategischer Relevanz.\n• Risk Appetite Framework Integration: Wir integrieren die Risikostrategie und -appetiterklärung in Ihre Geschäftsstrategie und Entscheidungsprozesse, um eine konsistente, risikobewusste Entscheidungsfindung auf allen Ebenen zu fördern.\n• Governance Technology & Analytics: Wir identifizieren und implementieren moderne Technologielösungen, die Governance-Prozesse automatisieren, Transparenz erhöhen und datengetriebene Erkenntnisse für kontinuierliche Verbesserung liefern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie unterstützt ADVISORI Finanzinstitute dabei, die grenzüberschreitenden Komplexitäten der EBA-Regulierung in multinationalen Gruppen effektiv zu bewältigen?",
        answer: "Für multinationale Finanzgruppen schafft die EBA-Regulierung eine besondere Komplexitätsebene durch die Interaktion mit nationalen Aufsichtsbehörden, unterschiedlichen Implementierungsgeschwindigkeiten und nationalen Diskretionen. Die C-Suite steht vor der Herausforderung, eine kohärente gruppenweite Compliance-Strategie zu entwickeln, die lokale Besonderheiten berücksichtigt und gleichzeitig Synergien maximiert und Redundanzen minimiert.\n\n🌍 Strategische Herausforderungen in multinationalen Finanzgruppen:\n• Regulatorische Fragmentierung: Unterschiedliche nationale Interpretationen und Implementierungsgeschwindigkeiten von EBA-Vorgaben erfordern eine differenzierte, aber kohärente Umsetzungsstrategie, die lokale Compliance sicherstellt, ohne die gruppenweite Konsistenz zu gefährden.\n• Komplexe Aufsichtsarchitektur: Die Interaktion mit multiplen Aufsichtsbehörden und Colleges erfordert eine koordinierte Kommunikationsstrategie und ein effektives Management aufsichtlicher Beziehungen auf verschiedenen Ebenen.\n• Balancierung zentral vs. dezentral: Die optimale Balance zwischen zentraler Steuerung und lokaler Autonomie in der Compliance-Umsetzung ist entscheidend für Effektivität, Effizienz und regulatorische Akzeptanz.\n• Daten- und Systemintegration: Die Aggregation und Analyse regulatorischer Daten über verschiedene Jurisdiktionen, Entitäten und Systeme hinweg stellt eine besondere technologische und organisatorische Herausforderung dar.\n\n🧩 ADVISORI's Ansatz für multinationale Compliance-Excellence:\n• Group Regulatory Strategy: Wir entwickeln eine gruppenweite regulatorische Strategie, die einen konsistenten Rahmen mit der notwendigen Flexibilität für lokale Besonderheiten verbindet und regulatorische Synergien maximiert.\n• Supervisory Relationship Management: Unser strukturierter Ansatz für das Management aufsichtlicher Beziehungen optimiert die Interaktion mit verschiedenen Aufsichtsbehörden und fördert einen konstruktiven, proaktiven Dialog.\n• Target Operating Model for Multinational Compliance: Wir konzipieren ein optimales Betriebsmodell für die gruppenweite Compliance-Funktion, das klare Verantwortlichkeiten, effiziente Prozesse und angemessene Kontrollen über Entitäten und Jurisdiktionen hinweg definiert.\n• Integrated Regulatory Reporting & Analytics: Unsere Lösungen für gruppenweites regulatorisches Reporting integrieren Daten aus verschiedenen Quellen und schaffen eine einheitliche, konsistente Basis für regulatorische und geschäftliche Analysen."
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
    console.log('✅ C-Level FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
