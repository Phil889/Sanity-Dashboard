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
    console.log('Updating ESG page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-esg' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-esg" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG für die C-Suite mehr als nur Compliance und wie kann ADVISORI ESG als strategischen Wettbewerbsvorteil positionieren?",
        answer: "Für die C-Suite repräsentiert ESG heute einen fundamentalen Paradigmenwechsel von reaktiver Compliance zu proaktiver strategischer Wertschöpfung. Environmental, Social and Governance Faktoren sind nicht länger nur regulatorische Hürden, sondern zentrale Treiber für langfristige Unternehmensresilienz, Kapitalzugang und Marktpositionierung. ADVISORI versteht ESG als integralen Bestandteil der Unternehmensstrategie.\n\n🎯 Strategische Werttreiber für die Führungsebene:\n• Kapitalmarktzugang und -kosten: ESG-konforme Unternehmen profitieren von günstigeren Finanzierungskonditionen und erweiterten Investorenbasis, da nachhaltige Investitionen zunehmend bevorzugt werden.\n• Risikominimierung und Resilienz: Proaktives ESG-Management identifiziert und mitigiert regulatorische, operative und reputative Risiken bevor sie zu kostspieligen Problemen werden.\n• Talentgewinnung und -bindung: ESG-starke Unternehmen ziehen Top-Talente an und reduzieren Fluktuation, was direkt die Produktivität und Innovationskraft steigert.\n• Marktdifferenzierung: ESG wird zum entscheidenden Faktor bei Ausschreibungen, Partnerschaften und Kundenentscheidungen in B2B-Märkten.\n\n🚀 Der ADVISORI-Ansatz für strategisches ESG:\n• Business Case Development: Wir quantifizieren den ROI von ESG-Investitionen und zeigen konkrete Auswirkungen auf EBITDA, Unternehmenswert und Kapitalkosten auf.\n• Integrierte Strategieentwicklung: ESG wird nicht als separate Initiative behandelt, sondern nahtlos in bestehende Geschäftsstrategien, Operational Excellence Programme und Digitalisierungsvorhaben integriert.\n• Stakeholder Capitalism: Wir helfen dabei, ESG-Performance als zentrales Element der Stakeholder-Kommunikation und des Reputation Managements zu etablieren.\n• Innovation und Geschäftsmodelle: ESG-Überlegungen werden als Katalysator für neue Produkte, Services und Geschäftsmodelle genutzt, die nachhaltige Wertschöpfung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie navigiert ADVISORI die komplexe regulatorische Landschaft von CSRD, EU-Taxonomie und anderen ESG-Anforderungen für maximale Compliance-Effizienz?",
        answer: "Die ESG-Regulatorik entwickelt sich mit beispielloser Geschwindigkeit und Komplexität. Für die C-Suite bedeutet dies nicht nur Compliance-Herausforderungen, sondern auch strategische Chancen zur Marktdifferenzierung. ADVISORI verfügt über tiefe Expertise in der gesamten ESG-Regulatorik und entwickelt integrierte Compliance-Strategien, die Effizienz maximieren und regulatorische Arbitrage vermeiden.\n\n🏛️ Regulatory Landscape Navigation:\n• CSRD (Corporate Sustainability Reporting Directive): Umfassende Unterstützung bei der Implementierung der neuen Berichtspflichten, einschließlich doppelter Materialitätsanalyse und ESRS-Standards.\n• EU-Taxonomie: Strategische Beratung zur Taxonomie-Konformität, Green Revenue Classification und Alignment mit nachhaltigen Finanzierungsinstrumenten.\n• SFDR (Sustainable Finance Disclosure Regulation): Integration von ESG-Faktoren in Investitionsentscheidungen und Produktentwicklung für Finanzdienstleister.\n• Supply Chain Due Diligence: Vorbereitung auf kommende Lieferketten-Sorgfaltspflichten und Menschenrechts-Due-Diligence-Gesetze.\n\n⚙️ ADVISORI's Compliance Excellence Framework:\n• Regulatory Intelligence: Kontinuierliches Monitoring der ESG-Regulatorik und proaktive Anpassung der Compliance-Strategie an neue Anforderungen.\n• Integrierte Datenarchitektur: Aufbau skalierbarer ESG-Datenmanagement-Systeme, die multiple Reporting-Anforderungen gleichzeitig erfüllen und Redundanzen eliminieren.\n• Assurance-Ready Processes: Entwicklung von internen Kontrollsystemen und Prozessen, die externe Prüfungsanforderungen antizipieren und Assurance-Kosten minimieren.\n• Technology-Enabled Solutions: Einsatz von ESG-Tech-Lösungen für automatisierte Datensammlung, -validierung und -berichterstattung zur Reduzierung manueller Compliance-Aufwände.\n• Cross-Jurisdictional Alignment: Harmonisierung von ESG-Compliance über verschiedene Rechtsräume hinweg für international tätige Unternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie quantifiziert ADVISORI den Business Case für ESG-Investitionen und welche konkreten Auswirkungen haben diese auf Unternehmensbewertung und Kapitalkosten?",
        answer: "Für die C-Suite ist die Quantifizierung des ESG-Business Case entscheidend für strategische Investitionsentscheidungen und Stakeholder-Kommunikation. ADVISORI entwickelt datengetriebene Modelle, die die direkten und indirekten finanziellen Auswirkungen von ESG-Performance präzise messen und prognostizieren, um fundierte Entscheidungen zu ermöglichen.\n\n💰 Direkte finanzielle Werttreiber:\n• Kapitalkosten-Optimierung: ESG-starke Unternehmen weisen nachweislich 0,5-1,5% niedrigere Fremdkapitalkosten und höhere Eigenkapital-Multiples auf, was bei Großunternehmen Millioneneinsparungen bedeutet.\n• Operational Excellence: ESG-Programme führen zu measurabaren Effizienzsteigerungen - Energieeffizienz reduziert Betriebskosten um 10-30%, während Diversity & Inclusion Programme die Produktivität um 5-15% steigern.\n• Risk-Adjusted Returns: Proaktives ESG-Management reduziert regulatorische Strafen, Litigation-Risiken und operative Störungen, was zu stabileren und vorhersagbareren Cash Flows führt.\n• Revenue Premium: ESG-konforme Produkte und Services erzielen oft 10-20% Preisprämien und höhere Kundenloyalität in B2B- und B2C-Märkten.\n\n📈 Strategische Bewertungseffekte:\n• ESG-Rating Correlation: Verbesserung der ESG-Ratings (MSCI, Sustainalytics) korreliert direkt mit höheren Unternehmensbewertungen und institutioneller Investorennachfrage.\n• Future-Proofing Valuation: ESG-resiliente Geschäftsmodelle werden von Investoren mit höheren Terminal Values bewertet, da sie besser für regulatorische und gesellschaftliche Trends positioniert sind.\n• M&A Premium: ESG-starke Unternehmen erzielen bei Transaktionen 10-25% höhere Multiples, da sie für strategische Käufer attraktiver sind.\n\n🔬 ADVISORI's Quantification Methodology:\n• Scenario-based Financial Modeling: Entwicklung von Monte-Carlo-Simulationen, die ESG-Faktoren in traditionelle DCF-Modelle integrieren.\n• Materiality-weighted Impact Assessment: Fokussierung auf die finanziell relevantesten ESG-Faktoren für spezifische Branchen und Geschäftsmodelle.\n• Peer Benchmarking: Vergleichsanalysen mit Best-in-Class ESG-Performern zur Identifikation von Value Creation Opportunities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI sicher, dass ESG-Initiativen nicht nur Greenwashing sind, sondern echte operative und kulturelle Transformation bewirken?",
        answer: "Authentizität und Substanz sind für die C-Suite entscheidend, um ESG-bedingte Reputationsrisiken zu vermeiden und langfristige Wertschöpfung sicherzustellen. ADVISORI implementiert wissenschaftsbasierte, messbare ESG-Programme, die operative Exzellenz fördern und echte kulturelle Transformation bewirken, anstatt oberflächliche Kommunikationsstrategien zu verfolgen.\n\n🔍 Authenticity Framework von ADVISORI:\n• Science-Based Targets: Entwicklung von ESG-Zielen, die auf wissenschaftlichen Standards basieren (z.B. SBTi für Klimaziele) und externen Validierung standhalten.\n• Materiality-First Approach: Fokussierung auf die ESG-Themen, die tatsächlich geschäftskritisch sind und wo das Unternehmen den größten Impact erzielen kann.\n• Stakeholder-Driven Priorities: Integration echter Stakeholder-Bedürfnisse und -Erwartungen in die ESG-Strategie, basierend auf systematischem Engagement und Feedback.\n• Outcome-Based Measurement: Messung von tatsächlichen Auswirkungen (Outcomes) statt nur Aktivitäten (Outputs) für nachweisbare Fortschritte.\n\n⚡ Operative Integration und Transformation:\n• Core Business Integration: ESG-Faktoren werden direkt in operative KPIs, Budgetierungsprozesse und strategische Planungszyklen integriert.\n• Leadership Accountability: Etablierung von ESG-basierten Incentivierung in Vergütungssystemen der Führungsebene für echte Commitment-Demonstration.\n• Cultural Change Management: Systematische Transformation der Unternehmenskultur durch Training, Communication und Behavioral Change Programme.\n• Supply Chain Integration: Extension der ESG-Standards entlang der gesamten Wertschöpfungskette für systemische Impact-Maximierung.\n\n🛡️ Anti-Greenwashing Safeguards:\n• Third-Party Verification: Implementierung unabhängiger Validierung und Assurance-Prozesse für alle wesentlichen ESG-Aussagen.\n• Transparent Reporting: Entwicklung ehrlicher, ausgewogener Berichterstattung, die sowohl Fortschritte als auch Herausforderungen kommuniziert.\n• Continuous Improvement: Etablierung systematischer Review-Zyklen und Adaptive Management für kontinuierliche Verbesserung der ESG-Performance.\n• Regulatory Compliance Plus: Übertreffen von Mindestanforderungen durch proaktive Standards, die zukünftige Regulatorik antizipieren."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
