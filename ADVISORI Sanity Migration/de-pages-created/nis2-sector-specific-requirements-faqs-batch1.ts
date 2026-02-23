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
    console.log('Updating NIS2 Sector-Specific Requirements page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-sector-specific-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-sector-specific-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum erfordern verschiedene Sektoren der NIS2-Richtlinie differenzierte Compliance-Strategien und wie positioniert ADVISORI sektorspezifische Expertise als strategischen Wettbewerbsvorteil für die C-Suite?",
        answer: "Die NIS2-Richtlinie anerkennt explizit, dass verschiedene Sektoren unterschiedliche Risikoprofile, operative Komplexitäten und regulatorische Herausforderungen haben. Für C-Level-Führungskräfte bedeutet dies, dass Generic One-Size-Fits-All-Ansätze nicht nur ineffizient sind, sondern auch regulatorische Risiken schaffen. ADVISORI transformiert sektorspezifische Compliance-Strategien in messbare Competitive Advantages und operative Excellence-Initiativen.\n\n🎯 Sektorspezifische Strategic Imperatives für die Führungsebene:\n• Risk-Proportionate Resource Allocation: Präzise Allokation von Cybersecurity-Budgets basierend auf sektorspezifischen Bedrohungslandschaften und regulatorischen Prioritäten für maximalen ROI.\n• Competitive Differentiation: Überlegene sektorspezifische Compliance-Kapazitäten als Differentiator in Tender-Prozessen, Partnerschaften und Marktpositionierung.\n• Regulatory Capital Efficiency: Sektorspezifische Expertise reduziert Compliance-Overhead und ermöglicht fokussierte Investitionen in geschäftskritische Sicherheitsmaßnahmen.\n• Stakeholder Confidence Building: Demonstrierte Deep Domain Knowledge schafft Vertrauen bei Aufsichtsbehörden, Kunden und Investoren für nachhaltige Geschäftsbeziehungen.\n\n🏢 Der ADVISORI Sector Excellence-Ansatz:\n• Critical Sectors Mastery: Spezialisierte Frameworks für Hochrisiko-Sektoren wie Energie, Transport und Bankwesen mit verschärften Sicherheitsanforderungen und intensiver Aufsicht.\n• Important Sectors Optimization: Effiziente Compliance-Strategien für wichtige Sektoren mit optimiertem Kosten-Nutzen-Verhältnis und fokussierter Implementierung.\n• Cross-Sector Innovation Transfer: Best Practice-Transfer zwischen Sektoren zur Maximierung von Effizienzgewinnen und Innovations-Opportunities.\n• Regulatory Intelligence Integration: Kontinuierliche Überwachung sektorspezifischer regulatorischer Entwicklungen für proaktive Compliance-Anpassung und Strategic Planning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie strukturiert ADVISORI sektorspezifische Risikobewertungen für kritische Infrastrukturen, um C-Level-Entscheidungen über Cybersecurity-Investitionen zu optimieren und gleichzeitig operative Exzellenz zu gewährleisten?",
        answer: "Kritische Infrastrukturen erfordern hochgradig differenzierte Risikobewertungsansätze, die nicht nur technische Vulnerabilities berücksichtigen, sondern auch sektorspezifische Business Dependencies, Interdependenzen und Cascade-Effekte. ADVISORI entwickelt innovative Risk Assessment-Frameworks, die C-Level-Führungskräften datengestützte Entscheidungsgrundlagen für strategische Cybersecurity-Investitionen liefern.\n\n⚡ Advanced Sector-Specific Risk Assessment Excellence:\n• Critical Dependencies Mapping: Umfassende Analyse von sektorspezifischen kritischen Assets, Prozessen und Abhängigkeiten zur Priorisierung von Schutzmaßnahmen nach Business Impact.\n• Threat Landscape Intelligence: Sektor-fokussierte Threat Intelligence Integration mit Real-time-Monitoring von branchenspezifischen Cyber-Bedrohungen und Attack Patterns.\n• Cascade Impact Analysis: Bewertung von Cross-Sector-Auswirkungen und Domino-Effekten zur strategischen Risikominimierung auf Ecosystem-Ebene.\n• Regulatory Risk Quantification: Quantifizierung von Compliance-Risiken und potentiellen Sanktionskosten für fundierte Risk-Return-Kalkulationen bei Cybersecurity-Investitionen.\n\n🎯 ADVISORI's Strategic Risk Assessment-Methodology:\n• Business-Centric Risk Prioritization: Risikobewertung basierend auf Business Criticality, Revenue Impact und Strategic Importance statt technischer Severity allein.\n• Investment-Grade Risk Metrics: Entwicklung quantifizierbarer Risk Indicators und KPIs für C-Level-Dashboard-Integration und Performance-Monitoring.\n• Cross-Sector Benchmark Analysis: Vergleichsanalysen mit Peer-Organisationen und Sector Leaders für Strategic Risk Positioning und Best Practice-Identifikation.\n• ROI-Optimized Mitigation Strategies: Maßgeschneiderte Risikominderungsstrategien mit kalkulierbarem ROI und messbaren Business Impact-Verbesserungen.\n• Continuous Risk Intelligence: Adaptive Risk Assessment-Prozesse, die sich dynamisch an neue Bedrohungen und veränderte Geschäftsanforderungen anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise entwickelt ADVISORI branchenspezifische Cybersecurity-Frameworks, die nicht nur NIS2-Compliance gewährleisten, sondern auch operative Effizienz steigern und Innovationskapazitäten für die C-Suite freisetzen?",
        answer: "Moderne sektorspezifische Cybersecurity-Frameworks müssen über reine Compliance hinausgehen und als Business Enabler fungieren, die operative Exzellenz fördern und Innovations-Opportunities erschließen. ADVISORI entwickelt hochinnovative Frameworks, die Cybersecurity nahtlos in Geschäftsprozesse integrieren und C-Level-Führungskräften messbare Business Value liefern.\n\n🚀 Innovative Sector-Specific Framework Excellence:\n• Business-Integrated Security Architecture: Cybersecurity-Frameworks, die nativ in Geschäftsprozesse integriert sind und operative Effizienz steigern statt behindern.\n• Automation-First Approach: Maximale Automatisierung von Compliance-Prozessen zur Freisetzung von Human Capital für strategische Initiativen und Innovation.\n• Performance Optimization Integration: Security Controls, die gleichzeitig System-Performance und User Experience verbessern durch intelligente Optimierung.\n• Innovation Enablement: Cybersecurity-Architekturen, die sichere Innovation ermöglichen und neue Geschäftsmodelle unterstützen statt blockieren.\n\n💎 Der ADVISORI Business Value-Creation-Ansatz:\n• Operational Excellence Integration: Cybersecurity-Frameworks, die operative KPIs verbessern und Process Optimization vorantreiben für messbare Effizienzgewinne.\n• Customer Experience Enhancement: Security-Maßnahmen, die Customer Trust stärken und User Experience verbessern für Competitive Advantage-Generierung.\n• Data-Driven Decision Support: Cybersecurity-Analytics, die Business Intelligence liefern und Strategic Decision-Making unterstützen.\n• Cost Optimization Synergies: Framework-Design, das Cybersecurity-Investitionen mit IT-Modernisierung und Digital Transformation-Initiativen synergetisch verbindet.\n• Innovation Pipeline Protection: Comprehensive IP Protection und R&D Security für sichere Innovation und Competitive Advantage-Preservation.\n• Scalability-by-Design: Cybersecurity-Architekturen, die mit Geschäftswachstum skalieren und M&A-Integration unterstützen ohne Security-Kompromisse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Cross-Sector-Expertise als strategischen Asset für C-Level-Führungskräfte, um Best Practices zu transferieren und sektorübergreifende Synergien für Competitive Advantage zu nutzen?",
        answer: "Cross-Sector-Expertise ermöglicht es, Innovation und Best Practices zwischen verschiedenen Branchen zu transferieren und dabei einzigartige Competitive Advantages zu schaffen. ADVISORI nutzt Deep Domain Knowledge aus verschiedenen Sektoren, um C-Level-Führungskräften überlegene Strategien zu liefern, die branchenspezifische Excellence mit Cross-Industry-Innovation verbinden.\n\n🌟 Cross-Sector Strategic Value Creation:\n• Innovation Transfer Excellence: Systematischer Transfer von Leading Practices zwischen Sektoren zur Erschließung unerkannter Optimization-Opportunities und Competitive Advantages.\n• Benchmark-Superior Performance: Cross-Sector-Vergleichsanalysen zur Identifikation von Performance Gaps und Entwicklung überdurchschnittlicher Cybersecurity-Kapazitäten.\n• Ecosystem Partnership Opportunities: Cross-Sector-Expertise eröffnet strategische Partnership-Opportunities und Business Development-Synergien zwischen komplementären Branchen.\n• Regulatory Arbitrage Advantages: Nutzung unterschiedlicher regulatorischer Anforderungen zwischen Sektoren für Strategic Positioning und Operational Efficiency-Optimierung.\n\n🎯 Der ADVISORI Cross-Industry Excellence-Ansatz:\n• Sector Fusion Strategies: Innovative Kombinationen von Security Controls und Prozessen aus verschiedenen Branchen für überlegene Cybersecurity-Performance.\n• Multi-Sector Risk Modeling: Sophisticated Risikomodelle, die Cross-Sector-Abhängigkeiten und Supply Chain-Komplexitäten berücksichtigen für ganzheitliche Risikominimierung.\n• Innovation Acceleration: Cross-Sector-Insights zur Beschleunigung von Digital Transformation und Cybersecurity-Innovation durch bewährte Ansätze aus führenden Branchen.\n• Strategic Ecosystem Design: Development of Strategic Ecosystem-Partnerships basierend auf Cross-Sector-Synergien für nachhaltige Competitive Advantages.\n• Future-Ready Architecture: Cross-Sector-Trends-Analyse zur Entwicklung zukunftsfähiger Cybersecurity-Strategien, die Multiple Sector-Evolution antizipieren und Strategic Flexibility ermöglichen."
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
