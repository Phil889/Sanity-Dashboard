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
    console.log('Updating ESG Assessment page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein strategisches ESG Assessment für die C-Suite mehr als nur eine Compliance-Übung und wie positioniert ADVISORI ESG als Werttreiber für nachhaltiges Geschäftswachstum?",
        answer: "Ein professionelles ESG Assessment transzendiert traditionelle Compliance-Ansätze und fungiert als strategisches Instrument zur Identifikation von Wertschöpfungspotenzialen, Risikominimierung und Marktdifferenzierung. Für die C-Suite bedeutet dies eine fundamentale Neuausrichtung von ESG als reinen Kostenfaktor hin zu einem zentralen Enabler für nachhaltige Profitabilität und Stakeholder-Value-Creation. ADVISORI entwickelt ESG Assessments, die direkt in strategische Geschäftsentscheidungen integriert werden und messbare Geschäftsergebnisse liefern.\n\n🎯 Strategische Werttreiber für die Unternehmensführung:\n• Capital Allocation Excellence: ESG-basierte Investitionsentscheidungen führen zu 15-25% besseren risikoadjustierten Renditen durch frühzeitige Identifikation von Zukunftstrends und regulatorischen Entwicklungen.\n• Market Premium Realisierung: Unternehmen mit excellenten ESG-Ratings erzielen durchschnittlich 10-20% höhere Bewertungsmultiples bei M&A-Transaktionen und IPOs.\n• Cost of Capital Optimization: ESG-führende Unternehmen profitieren von 20-50 Basispunkten niedrigeren Finanzierungskosten bei Green Bonds und nachhaltigkeitsorientierten Krediten.\n• Revenue Growth Acceleration: Zugang zu ESG-fokussierten Kundensegmenten und Märkten kann Umsatzwachstum um 5-15% beschleunigen.\n\n📊 ADVISORI's Strategic ESG Assessment Framework:\n• Business Model Integration: Wir analysieren, wie ESG-Faktoren Ihr Geschäftsmodell verstärken und neue Wertschöpfungslogiken ermöglichen können.\n• Competitive Intelligence: Benchmark-Analysen identifizieren ESG-basierte Wettbewerbsvorteile und Differenzierungsmöglichkeiten in Ihrem Marktumfeld.\n• Stakeholder Value Optimization: Systematische Bewertung, wie ESG-Excellence das Vertrauen und die Loyalität von Investoren, Kunden, Mitarbeitern und Regulatoren stärkt.\n• Future-Proofing Strategy: Antizipation kommender ESG-Anforderungen und Marktentwicklungen zur proaktiven Positionierung als Marktführer.\n\n🚀 Transformative Business Impact:\n• Innovation Catalyst: ESG Assessments identifizieren oft unentdeckte Innovationspotenziale in nachhaltigen Produkten, Services und Geschäftsmodellen.\n• Talent Magnetism: Authentische ESG-Leadership stärkt die Arbeitgeberattraktivität und reduziert Recruiting- sowie Retention-Kosten erheblich.\n• Operational Excellence: ESG-orientierte Prozessoptimierungen führen zu signifikanten Effizienzsteigerungen und Kosteneinsparungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den Return on Investment eines ADVISORI ESG Assessments und welche konkreten finanziellen Auswirkungen können C-Level-Führungskräfte erwarten?",
        answer: "Der ROI eines strategischen ESG Assessments von ADVISORI manifestiert sich in vier wesentlichen Werttreibern: Risikominimierung, Kapitalkosten-Optimierung, Revenue-Enhancement und operationeller Effizienz. Unsere Erfahrung zeigt, dass Unternehmen, die ESG strategisch implementieren, binnen 18-24 Monaten messbare finanzielle Verbesserungen in mehreren Dimensionen realisieren. ADVISORI's Assessment-Methodik ist darauf ausgelegt, diese Wertpotenziale präzise zu identifizieren und in konkrete Umsetzungsroadmaps zu überführen.\n\n💰 Quantifizierbare finanzielle Werttreiber:\n• Risiko-adjustierte Renditeoptimierung: ESG-exzellente Unternehmen weisen 20-30% niedrigere Volatilität in ihren Aktienkursen auf, was zu stabileren Bewertungen und verbessertem Zugang zu institutionellem Kapital führt.\n• Finanzierungskosten-Reduktion: Green und Sustainability-linked Finanzierungen bieten typischerweise 25-75 Basispunkte günstigere Konditionen, was bei einem Finanzierungsvolumen von 500 Mio. EUR jährliche Einsparungen von 1,25-3,75 Mio. EUR bedeutet.\n• Revenue Premium durch ESG-Differentiation: B2B-Kunden sind bereit, 5-15% Premiums für nachweislich nachhaltige Produkte und Services zu zahlen.\n• Operational Cost Reduction: ESG-orientierte Effizienzmaßnahmen (Energie, Waste Reduction, Supply Chain Optimization) führen zu 3-8% Kosteneinsparungen in den operativen Bereichen.\n\n📈 Strategic Value Creation Metriken:\n• ESG Rating Improvement Impact: Eine Verbesserung des MSCI ESG Ratings um eine Stufe korreliert mit einer durchschnittlichen Marktkapitalisierungs-Steigerung von 3-7%.\n• Institutional Investor Access: ESG-führende Unternehmen haben Zugang zu einem 40% größeren Pool institutioneller Investoren, was Kapitalkosten nachhaltig senkt.\n• M&A Valuation Premium: Bei Exit-Szenarien erzielen ESG-exzellente Unternehmen 15-25% höhere Bewertungsmultiples.\n• Employee Value Proposition: Starke ESG-Performance reduziert Turnover-Kosten um 25-40% und steigert Produktivität um 5-12%.\n\n🎯 ADVISORI's ROI-Maximierung:\n• Precision Targeting: Unser Assessment identifiziert die 3-5 ESG-Hebel mit dem höchsten finanziellen Impact für Ihr spezifisches Geschäftsmodell.\n• Implementation Roadmap: Priorisierte Umsetzungsplanung, die Quick Wins mit langfristigen Werttreibern optimal balanciert.\n• Performance Tracking: Etablierung von ESG-KPIs, die direkt mit finanziellen Metriken korrelieren und kontinuierliche Optimierung ermöglichen.\n• Stakeholder Communication: Professionelle ESG-Kommunikation, die das Assessment in verbessertes Investor Relations und Customer Engagement übersetzt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unser ESG Assessment nicht nur aktuellen Standards entspricht, sondern uns auch auf zukünftige ESG-Regulierungen und Marktanforderungen vorbereitet?",
        answer: "ADVISORI's ESG Assessment-Methodik basiert auf einem zukunftsorientierten Framework, das aktuelle Best Practices mit antizipierten regulatorischen Entwicklungen und emerging Market Trends integriert. Wir verstehen ESG nicht als statisches Compliance-Thema, sondern als dynamisches strategisches Feld, das kontinuierliche Anpassungen und proaktive Positionierung erfordert. Unser Assessment ist darauf ausgelegt, Sie nicht nur für heute, sondern für die ESG-Landschaft der nächsten 5-10 Jahre optimal zu positionieren.\n\n🔮 Future-Proofing durch Regulatory Intelligence:\n• EU Taxonomy Alignment: Vollständige Integration kommender EU Taxonomy-Anforderungen und deren Auswirkungen auf Ihre Geschäftstätigkeiten und Finanzierungsmöglichkeiten.\n• CSRD Implementation Readiness: Vorbereitung auf die Corporate Sustainability Reporting Directive mit detaillierten Double Materiality Assessments und ESRS-konformen Reportingstrukturen.\n• Global Regulatory Harmonization: Antizipation der Konvergenz verschiedener nationaler ESG-Regulierungen (EU, UK, US, APAC) für eine global konsistente Strategie.\n• Science-Based Targets Evolution: Integration der neuesten SBTi-Entwicklungen und Vorbereitung auf verschärfte Klimaziele und Scope 3-Anforderungen.\n\n🌍 Market Evolution Antizipation:\n• Investor Expectation Shifts: Kontinuierliches Monitoring der sich wandelnden Anforderungen institutioneller Investoren und ESG-Rating-Agenturen.\n• Customer Demand Trends: Analyse kommender B2B- und B2C-Nachhaltigkeitsanforderungen in verschiedenen Märkten und Branchen.\n• Supply Chain Transparency: Vorbereitung auf erhöhte Lieferketten-Transparenz-Anforderungen und Digital Product Passports.\n• Technology Integration: Bewertung emerging Technologies (AI, Blockchain, IoT) für ESG-Monitoring und -Reporting.\n\n🎯 ADVISORI's Adaptive Assessment Framework:\n• Scenario Planning Excellence: Entwicklung verschiedener ESG-Zukunftsszenarien und entsprechender strategischer Optionen für Ihr Unternehmen.\n• Modular System Architecture: Aufbau flexibler ESG-Management-Systeme, die sich schnell an neue Anforderungen anpassen lassen.\n• Continuous Learning Integration: Etablierung von Monitoring- und Update-Prozessen, die sicherstellen, dass Ihre ESG-Strategie immer state-of-the-art bleibt.\n• Innovation Pipeline Management: Identifikation und Integration von ESG-Innovationen, die Wettbewerbsvorteile in der Zukunft sichern.\n\n🚀 Strategic First-Mover Advantages:\n• Regulatory Head Start: Proaktive Implementierung kommender Standards verschafft Ihnen 12-24 Monate Vorsprung gegenüber reaktiven Wettbewerbern.\n• Technology Leadership: Frühe Adoption fortgeschrittener ESG-Technologies positioniert Sie als Innovationsführer in Ihrer Branche.\n• Stakeholder Trust Building: Antizipative ESG-Excellence baut langfristiges Vertrauen bei allen Stakeholder-Gruppen auf."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie differenziert sich ADVISORI's ESG Assessment-Ansatz von standardisierten Beratungsangeboten und welche spezifischen Vorteile bietet dies für unsere C-Suite-Entscheidungsfindung?",
        answer: "ADVISORI's ESG Assessment unterscheidet sich fundamental von commoditisierten Beratungsansätzen durch unsere proprietäre Methodik, die ESG-Excellence mit strategischer Geschäftsentwicklung und C-Suite-spezifischer Entscheidungsunterstützung verbindet. Während standardisierte Assessments oft generische Checklisten abarbeiten, entwickeln wir maßgeschneiderte ESG-Strategien, die präzise auf Ihre Geschäftslogik, Marktposition und strategischen Ziele zugeschnitten sind. Unser Assessment ist ein strategisches Instrument zur Unternehmenswertsteigerung, nicht nur ein Compliance-Tool.\n\n🎯 Proprietäre ADVISORI Assessment Methodology:\n• CEO Dashboard Integration: Entwicklung von Executive-level ESG KPIs, die direkten Bezug zu Ihren strategischen Geschäftszielen haben und in bestehende Management-Dashboards integriert werden.\n• Industry-Specific Deep Dive: Branchenspezifische ESG-Analyse, die Peer-Benchmarking, Regulatory-Mapping und Competitive Intelligence in einem integrierten Framework vereint.\n• Business Model Optimization: Assessment der ESG-Auswirkungen auf alle Elemente Ihres Geschäftsmodells – von Value Proposition über Revenue Streams bis hin zu Cost Structure.\n• Stakeholder Ecosystem Mapping: 360°-Analyse aller relevanten Stakeholder-Beziehungen und deren ESG-Erwartungen für strategische Relationship Management-Optimierung.\n\n💡 C-Suite Decision Enhancement:\n• Risk-Adjusted ROI Modeling: Quantitative Modellierung der finanziellen Auswirkungen verschiedener ESG-Strategien auf Unternehmensbewertung, Cash Flow und Risikoprofil.\n• Strategic Option Valuation: Bewertung von ESG-Investitionen als strategische Optionen mit Berücksichtigung von Flexibilität, Timing und Skalierbarkeit.\n• Competitive Positioning Analysis: Detaillierte Analyse, wie ESG-Excellence Ihre Wettbewerbsposition in verschiedenen Markt- und Kundenszenarien beeinflusst.\n• M&A Integration Framework: ESG-Assessment-Ergebnisse werden in M&A-Screening, Due Diligence und Post-Merger Integration-Strategien integriert.\n\n🔬 Advanced Analytics & Intelligence:\n• Predictive ESG Modeling: Einsatz von Machine Learning zur Vorhersage von ESG-Rating-Änderungen und deren Auswirkungen auf Kapitalkosten und Bewertungen.\n• Materiality Heat Mapping: Dynamische Visualisierung der wichtigsten ESG-Risiken und -Chancen mit direkter Verknüpfung zu Geschäftsauswirkungen.\n• Scenario Stress Testing: Bewertung der ESG-Resilienz Ihres Unternehmens unter verschiedenen Markt-, Regulierungs- und Klimaszenarien.\n• Real-Time Monitoring Setup: Implementierung kontinuierlicher ESG-Performance-Überwachung mit automatisierten Alerts für kritische Entwicklungen.\n\n🚀 Transformative Business Integration:\n• Innovation Pipeline Enhancement: Integration von ESG-Kriterien in Ihre Innovationsstrategie zur Identifikation nachhaltiger Wachstumschancen.\n• Talent Strategy Alignment: Verknüpfung von ESG-Zielen mit Executive Compensation, Leadership Development und Succession Planning.\n• Capital Allocation Optimization: ESG-informierte Investitionsentscheidungen, die sowohl finanzielle als auch nachhaltige Renditen maximieren."
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
