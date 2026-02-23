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
    console.log('Updating Banklizenz Kapitalbedarf Budgetierung page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-kapitalbedarf-budgetierung' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-kapitalbedarf-budgetierung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie navigiert ADVISORI die komplexen Interdependenzen zwischen Kapitalanforderungen, Geschäftsmodell-Skalierung und Investor-Erwartungen für optimale C-Suite-Entscheidungsfindung?",
        answer: "Die moderne Kapitalbedarf-Budgetierung erfordert eine hochsophistizierte Balance zwischen regulatorischen Anforderungen, Business Growth-Ambitionen und Investor Value Creation. ADVISORI meistert diese komplexe Multi-Stakeholder-Optimierung durch ein integriertes Strategic Framework, das simultane Maximierung von Regulatory Compliance, Business Scalability und Shareholder Value ermöglicht, ohne Kompromisse bei der strategischen Flexibilität zu machen.\n\n⚖️ Multi-Dimensional Optimization Framework:\n• Stakeholder Value Alignment: Entwicklung von Kapitalstrategien, die gleichzeitig Regulatory Compliance, Business Growth und Investor Returns optimieren durch intelligente Trade-Off-Analyse und Win-Win-Strukturierung.\n• Dynamic Scalability Modeling: Erstellung adaptiver Kapitalmodelle, die Business Growth in verschiedenen Szenarien unterstützen ohne Regulatory Buffers zu gefährden oder Investor Confidence zu schwächen.\n• Risk-Adjusted Value Creation: Systematische Optimierung des Risk-Return-Profils zur Maximierung von Economic Value Added (EVA) und Return on Regulatory Capital (RORC) bei minimalen Compliance-Risiken.\n• Strategic Optionality Preservation: Strukturierung von Kapitalplanungen, die zukünftige Business Pivots, M&A-Opportunities und Market Expansion ermöglichen ohne kostspelige Rekapitalisierung.\n\n🎯 Der ADVISORI Integrated Excellence-Ansatz:\n• Holistic Stakeholder Mapping: Umfassende Analyse aller Stakeholder-Interessen (Regulators, Investors, Management, Customers) zur Entwicklung ausbalancierter Kapitalstrategien, die Conflicts of Interest minimieren.\n• Scenario-Based Value Engineering: Multi-Szenario-Analyse verschiedener Geschäftsentwicklungen und deren Auswirkungen auf Capital Requirements, um optimale Strategic Paths zu identifizieren.\n• Real Options Valuation: Quantifizierung des Optionswerts verschiedener Kapitalstrukturen für zukünftige Business Opportunities und strategische Flexibility.\n• Performance Attribution Framework: Entwicklung von KPI-Systemen, die Capital Efficiency, Business Performance und Stakeholder Value transparent messbar machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In einer Zeit von ESG-Integration, Climate Risk und nachhaltiger Finanzierung - wie integriert ADVISORI diese emerging Trends in die Kapitalbedarf-Budgetierung für zukunftsorientierte Banking-Strategien?",
        answer: "Die moderne Banklizenz-Kapitalplanung muss ESG-Faktoren, Climate Risk Capital Requirements und Sustainable Finance-Trends antizipieren, die zunehmend die regulatorische Landschaft und Investor-Präferenzen prägen. ADVISORI entwickelt ESG-Forward Capital Strategies, die nicht nur kommende regulatorische ESG-Kapitalanforderungen erfüllen, sondern auch First-Mover-Vorteile in der nachhaltigen Finanzierung captured und Enhanced ESG-Ratings für bessere Finanzierungskonditionen nutzen.\n\n🌱 ESG-Integrated Capital Strategy Architecture:\n• Climate Risk Capital Planning: Antizipation kommender Climate Risk Capital Requirements (Physical Risk, Transition Risk) und Integration in die langfristige Kapitalplanung zur Vermeidung kostspieliger Last-Minute-Anpassungen.\n• Sustainable Finance Opportunity Mapping: Identifikation von Capital-Efficient Sustainable Finance-Geschäftsmodellen, die Premium-Margins generieren und gleichzeitig ESG-Compliance stärken.\n• ESG Rating Optimization: Strukturierung von Kapitalplanungen zur Maximierung von ESG-Scores, was zu niedrigeren Finanzierungskosten und besseren Investor-Valuations führt.\n• Green Capital Innovation: Entwicklung innovativer Green Capital-Instrumente und ESG-linked Financing-Strukturen für Competitive Advantage und Cost of Capital-Optimization.\n\n♻️ ADVISORI's Sustainable Capital Excellence:\n• Future-Proof ESG Compliance: Proaktive Integration emerging ESG-Regulierungen (EU Taxonomy, SFDR, Climate Stress Testing) in Capital Planning zur Vermeidung Regulatory Surprises.\n• Sustainable Business Model Integration: Alignment von Capital Strategy mit Sustainable Business Models zur Maximierung von ESG-Premium und Stakeholder Value.\n• Impact Investment Readiness: Strukturierung von Capital Strategies, die Impact Investment-Zuflüsse attracted und Social Impact mit Financial Returns balanciert.\n• ESG-Enhanced Investor Relations: Entwicklung ESG-fokussierter Capital Story für Enhanced Investor Appeal und Premium-Valuations bei nachhaltigen Investoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass unsere Kapitalbudgetierung nicht nur regulatorische Box-Ticking ist, sondern ein echter Value-Driver für langfristige Unternehmensentwicklung und strategische Positionierung wird?",
        answer: "ADVISORI transformiert die traditionelle Kapitalbudgetierung von einer reaktiven Compliance-Übung zu einem proaktiven Strategic Value Engine, der nachhaltige Competitive Advantages schafft und Long-Term Value Creation antreibt. Unser Value-Centric Capital Planning-Ansatz integriert Capital Strategy nahtlos in die übergeordnete Corporate Strategy und macht Capital Management zu einem differenzierenden Erfolgsfaktor.\n\n💎 Value-Driven Capital Strategy Transformation:\n• Strategic Capital Architecture: Entwicklung von Capital Frameworks, die Business Strategy enablen und verstärken, anstatt sie zu beschränken, durch intelligente Alignment von Capital Allocation und Strategic Priorities.\n• Long-Term Value Creation: Fokus auf Sustainable Value Generation über kurzfristige Compliance hinaus durch Capital Strategies, die Compound Returns und Market Leadership fördern.\n• Competitive Moat Building: Nutzung überlegener Capital Management als Basis für defensible Competitive Advantages, die schwer zu replizieren sind und Premium-Positioning ermöglichen.\n• Innovation Catalyst Function: Strukturierung von Capital Planning als Innovation-Enabler, der neue Business Models, Technology Adoption und Market Expansion acceleriert.\n\n🚀 Der ADVISORI Strategic Value Multiplier:\n• Business Model Evolution Support: Capital Strategies, die Business Model-Innovation und Adaptation unterstützen ohne Regulatory Constraints oder Capital Inefficiencies zu schaffen.\n• Market Leadership Positioning: Nutzung von Capital Strength als Basis für Market Leadership, Premium-Partnerships und Strategic Alliance-Building mit anderen Marktführern.\n• Organizational Capability Building: Integration von Capital Management-Excellence in die Organizational DNA zur Schaffung dauerhafter Strategic Capabilities.\n• Stakeholder Ecosystem Enhancement: Capital Strategies, die positive Stakeholder-Dynamics fördern und Win-Win-Relationships mit Regulators, Investors, Partners und Customers schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche spezifischen Metrics und KPIs entwickelt ADVISORI für C-Level-Dashboards, um Capital Efficiency und Strategic Value Creation kontinuierlich zu monitoren und zu optimieren?",
        answer: "ADVISORI entwickelt hochsophistizierte Executive-Level Capital Performance Management-Systeme, die über traditionelle Capital Ratios hinausgehen und Strategic Value Creation in Real-Time messbar machen. Unsere proprietären C-Suite Capital Intelligence-Dashboards kombinieren Regulatory Metrics, Business Performance-Indikatoren und Strategic Value-Messungen zu einem integrierten Performance Management-System für datengesteuerte Capital Strategy-Optimierung.\n\n📊 Advanced Capital Performance Metrics Suite:\n• Return on Regulatory Capital (RORC): Sophisticated Measurement des Risk-Adjusted Returns pro eingesetzte Einheit Regulatory Capital zur Optimierung der Capital Efficiency und Business Model-Performance.\n• Capital Velocity Index: Proprietary Metric zur Messung der Geschwindigkeit, mit der Capital in Value-Creating Activities deployed wird, und Identifikation von Capital Deployment-Ineffizienzen.\n• Strategic Optionality Value: Quantifizierung des Present Value von Future Business Options, die durch Current Capital Strategy erhalten oder geschaffen werden, für Long-Term Strategic Planning.\n• Regulatory Capital Arbitrage Score: Measurement der Effectiveness in der Nutzung von Regulatory Capital-Arbitrage-Opportunities zur Cost of Capital-Minimierung.\n\n⚡ Real-Time Strategic Intelligence Framework:\n• Dynamic Capital Allocation Tracking: Continuous Monitoring der Capital Allocation-Effectiveness across verschiedene Business Lines und Strategic Initiatives mit Automated Alert-Systemen für Suboptimal Performance.\n• Competitive Capital Benchmarking: Real-Time Comparison der Capital Metrics gegen Industry Leaders und Identification von Competitive Gaps oder Advantages.\n• Scenario Impact Modeling: Automated Stress-Testing der Capital Position gegen Various Business und Regulatory Scenarios mit Executive Alert-Systems für Critical Thresholds.\n• Stakeholder Value Creation Tracking: Integrated Measurement von Shareholder Value, Regulatory Compliance-Scores und Strategic Goal Achievement für Holistic Performance Management."
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
