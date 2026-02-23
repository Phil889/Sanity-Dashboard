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
    console.log('Updating ESG-Kennzahlen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-kennzahlen' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-kennzahlen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind ESG-Kennzahlen für die C-Suite mehr als nur Reporting-Instrumente und wie transformiert ADVISORI diese zu strategischen Steuerungsinstrumenten?",
        answer: "Für die Unternehmensführung repräsentieren ESG-Kennzahlen das fundamentale Nervensystem einer zukunftsorientierten Unternehmenssteuerung. Sie transzendieren die reine Compliance-Berichterstattung und werden zu strategischen Performance-Indikatoren, die direkt mit Unternehmenswert, Risikominimierung und Wachstumschancen korrelieren. ADVISORI transformiert ESG-Metriken zu actionable Intelligence für datengetriebene Leadership-Entscheidungen.\n\n📊 Strategische Transformation von ESG-Metriken:\n• Performance-driven Decision Making: ESG-KPIs werden zu integralen Bestandteilen der Balanced Scorecard und Executive Dashboards, die operative Exzellenz mit Nachhaltigkeitszielen verknüpfen und Synergien zwischen profitablem Wachstum und ESG-Impact schaffen.\n• Risk Management Integration: Proaktive Identifikation von Climate-, Social- und Governance-Risiken durch Forward-looking Indikatoren, die regulatorische, operative und reputationelle Risiken antizipieren und präventive Maßnahmen ermöglichen.\n• Value Creation Tracking: Quantifizierung der Wertschöpfung aus ESG-Initiativen durch KPIs wie Carbon ROI, Employee Engagement Index und Governance Quality Scores, die direkten Business Impact demonstrieren.\n• Investor Relations Excellence: Bereitstellung institutioneller Qualität ESG-Daten, die Kapitalkosten reduzieren, Investorenzugang erweitern und Premium-Bewertungen rechtfertigen.\n\n🎯 ADVISORI's Strategic KPI Framework:\n• Materiality-driven Selection: Entwicklung von ESG-KPIs basierend auf branchenspezifischer Materialitätsanalyse und Stakeholder-Impact-Bewertung, die sowohl externe Reporting-Standards als auch interne Steuerungsrelevanz maximieren.\n• Predictive Analytics Integration: Implementation von Leading Indicators und Trend-Analysen, die nicht nur Status Quo messen, sondern Future Performance und Risiko-Entwicklungen antizipieren.\n• Cross-functional Integration: Verknüpfung von ESG-Metriken mit operativen KPIs (Operational Excellence, Customer Satisfaction, Innovation Index) für ganzheitliche Performance-Steuerung.\n• Real-time Monitoring: Aufbau von ESG-Dashboards mit Echtzeit-Datenintegration, die sofortige Interventionen bei Performance-Abweichungen ermöglichen und kontinuierliche Optimierung unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir ESG-Kennzahlen strategisch nutzen, um Kapitalkosten zu reduzieren und den Unternehmenswert zu steigern, und welche konkreten Metriken liefern den höchsten ROI?",
        answer: "ESG-Kennzahlen fungieren als direkter Werttreiber für Kapitalkosten-Optimierung und Unternehmensbewertung. Institutionelle Investoren mit über 100 Billionen USD Assets under Management integrieren ESG-Metriken systematisch in ihre Bewertungsmodelle, was direkten Impact auf Cost of Capital und Valuation Multiples hat. ADVISORI identifiziert und implementiert High-Impact ESG-KPIs, die maximale finanzielle Returns generieren.\n\n💰 Capital Cost Reduction durch strategische ESG-KPIs:\n• Credit Rating Enhancement: Spezifische ESG-Metriken wie Carbon Intensity Reduction, Board Diversity Index und Supply Chain Sustainability Score verbessern Credit Ratings um durchschnittlich 1-2 Notches, was Fremdkapitalkosten um 20-50 Basispunkte reduziert.\n• ESG-linked Financing: Sustainability-linked Bonds und ESG-linked Loans bieten Zinsvorteile von 10-25 Basispunkten bei Erreichen definierter ESG-KPI-Targets, wobei ADVISORI optimale Benchmark-Strukturen entwickelt.\n• Cost of Equity Optimization: Systematisches ESG-Reporting reduziert Informationsasymmetrien und senkt die Equity Risk Premium um durchschnittlich 50-100 Basispunkte durch verbesserte Transparenz und Predictability.\n• Insurance Premium Reduction: ESG-Risikometriken (Climate Resilience Score, Cyber Security Index) können Versicherungskosten um 15-30% reduzieren durch demonstrierte Risikominimierung.\n\n📈 Value Creation durch High-ROI ESG-Metriken:\n• Carbon Efficiency ROI: Implementierung von Scope 1+2+3 Carbon Tracking mit ROI-Messung zeigt durchschnittlich 300-500% Returns durch Energiekosteneinsparungen und Carbon Credit Monetarisierung.\n• Employee Engagement Multiplier: ESG-basierte HR-Metriken (Diversity Index, Well-being Score, Development Investment Ratio) korrelieren mit 20-25% höherer Produktivität und 40% niedrigerer Turnover-Rate.\n• Customer Loyalty Premium: Brand Sustainability Metrics und Customer ESG-Satisfaction Scores ermöglichen Premium Pricing von 5-15% und erhöhen Customer Lifetime Value um 25-35%.\n• Innovation Pipeline Strength: R&D Sustainability Focus Ratio und Green Innovation Index korrelieren mit 30-50% höheren Patent-Bewertungen und First-Mover-Advantages in Sustainable Markets.\n\n🎯 ADVISORI's Value Maximization Approach:\n• ROI-prioritized KPI Selection: Quantitative Bewertung aller potenziellen ESG-KPIs nach Expected Financial Return und Implementation Effort für optimale Resource Allocation.\n• Dynamic Benchmarking: Kontinuierliche Anpassung der KPI-Targets basierend auf Industry Best Practices und Capital Market Expectations für maximale Valuation Impact.\n• Investor-optimized Reporting: Maßgeschneiderte ESG-Dashboards für verschiedene Investor-Typen (Growth, Value, ESG-focused) mit spezifischen Metriken, die deren Bewertungsmodelle optimal bedienen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die ESG-Reporting-Landschaft wird zunehmend komplex mit CSRD, EU-Taxonomie und ISSB-Standards. Wie stellt ADVISORI sicher, dass unsere Kennzahlensysteme alle aktuellen und zukünftigen Anforderungen erfüllen?",
        answer: "Die Konvergenz globaler ESG-Reporting-Standards erfordert eine strategische, zukunftsorientierte Kennzahlen-Architektur, die sowohl aktuelle Compliance als auch Adaptabilität für emerging Standards gewährleistet. ADVISORI entwickelt resiliente ESG-KPI-Frameworks, die Multi-Standard-Compliance ermöglichen und gleichzeitig operational efficiency maximieren durch Smart Data Integration und Automated Reporting Capabilities.\n\n📋 Multi-Standard Compliance Architecture:\n• CSRD-ESRS Integration: Vollständige Abdeckung der European Sustainability Reporting Standards mit 1,100+ Datenpunkten durch modulares KPI-Design, das sowohl quantitative Metriken als auch qualitative Disclosures systematisch erfasst und Double Materiality Assessment integriert.\n• EU-Taxonomie Alignment: Implementierung von Taxonomy-eligible und Taxonomy-aligned Activity Tracking mit automatisierter Revenue-, CapEx- und OpEx-Allokation, die real-time Taxonomie-Compliance und Green Investment Qualification ermöglicht.\n• ISSB-SASB Harmonization: Integration von ISSB S1/S2 Climate- und Sustainability-Standards mit SASB Industry-specific Metrics für globale Investor-Kommunikation und Cross-border Capital Market Access.\n• TCFD Enhancement: Advanced Climate Risk Metrics mit Scenario-based Forward-looking Indicators, die nicht nur Disclosure Requirements erfüllen, sondern Strategic Climate Planning unterstützen.\n\n🔮 Future-proof Framework Design:\n• Modular Data Architecture: Aufbau flexibler Datenstrukturen, die neue KPI-Anforderungen ohne System-Redesign integrieren können und Backward-Compatibility für Trend-Analysen gewährleisten.\n• API-first Integration: Implementation von Standard-agnostic Data Models mit RESTful APIs, die nahtlose Integration neuer Reporting Frameworks ermöglichen und Multi-platform Data Exchange unterstützen.\n• Regulatory Monitoring System: Automated Scanning von Regulatory Updates und Standard-Entwicklungen mit Impact-Assessment für bestehende KPI-Systeme und proaktive Anpassungsempfehlungen.\n• Stakeholder-centric Customization: Flexible Output-Generation für verschiedene Stakeholder-Anforderungen (Regulatoren, Investoren, Kunden, NGOs) aus einheitlicher Datenbasis.\n\n⚡ ADVISORI's Adaptive Excellence Methodology:\n• Living Standards Integration: Kontinuierliche Integration emerging Standards durch Agile KPI Development und Rapid Prototyping für neue Metric Requirements.\n• Cross-Standard Synergy Optimization: Identifikation von Data Overlaps und Synergien zwischen verschiedenen Standards zur Minimierung von Reporting Burden bei maximaler Compliance Coverage.\n• Automated Compliance Monitoring: Implementation von Rule-based Validation Engines, die automatisch Compliance-Gaps identifizieren und Corrective Actions vorschlagen.\n• Predictive Compliance Planning: Forward-looking Analysis kommender Regulatory Requirements und proaktive KPI-System-Anpassungen für Competitive Advantage durch Early Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir ESG-Kennzahlen als Katalysator für operative Exzellenz und Innovation nutzen, statt sie nur als Compliance-Overhead zu betrachten?",
        answer: "ESG-Kennzahlen repräsentieren ein einzigartiges Optimierungsinstrument für operative Exzellenz, das systematisch Ineffizienzen aufdeckt, Innovationspotenziale identifiziert und Performance-Verbesserungen quantifiziert. ADVISORI transformiert ESG-Metriken zu Business Intelligence Tools, die nicht nur Nachhaltigkeitsziele messen, sondern operative Performance, Cost Optimization und Innovation Acceleration direkt antreiben.\n\n🚀 Operational Excellence durch ESG-KPI Integration:\n• Resource Efficiency Optimization: Energie-, Wasser- und Material-Intensitäts-KPIs decken systematisch Verschwendung auf und generieren durchschnittlich 15-25% Kosteneinsparungen durch Process Optimization und Technology Upgrades, die sich direkt in EBITDA-Verbesserung niederschlagen.\n• Quality Enhancement Metrics: ESG-basierte Qualitätsindikatoren (Supplier ESG Score, Product Lifecycle Assessment, Customer Satisfaction with Sustainability) korrelieren mit 20-30% Reduktion von Defect Rates und Warranty Claims.\n• Supply Chain Resilience KPIs: Supplier Diversity Index, Regional Sourcing Ratio und Supply Chain ESG Risk Score verbessern Supply Chain Stability um 40-60% und reduzieren Disruption-Risiken erheblich.\n• Employee Productivity Amplification: Well-being Index, Skills Development Ratio und Inclusion Metrics korrelieren mit 25-35% höherer Employee Productivity und 50% niedrigerer Absenteeism Rate.\n\n💡 Innovation Acceleration durch ESG-Metriken:\n• Sustainable Innovation Pipeline: R&D Sustainability Focus Ratio und Green Patent Index treiben systematisch Innovation in zukunftsorientierten Märkten und erschließen First-Mover-Advantages in Billion-Dollar Sustainable Markets.\n• Circular Economy Opportunities: Waste-to-Value Ratio und Material Circularity Index identifizieren neue Revenue Streams durch Byproduct Monetization und Resource Recovery, die zusätzliche 5-15% Umsatz generieren können.\n• Digital Transformation Synergies: ESG-Datenmanagement-Anforderungen beschleunigen Digital Transformation und schaffen Data-driven Decision Making Capabilities, die über Sustainability hinaus Business Value generieren.\n• Customer Co-Innovation: Customer ESG Engagement Score und Sustainability Co-creation Index erschließen Joint Innovation Opportunities und verstärken Customer Loyalty durch Shared Value Creation.\n\n🎯 ADVISORI's Performance Integration Approach:\n• OKR-ESG Integration: Systematische Verknüpfung von ESG-KPIs mit Objectives and Key Results (OKRs) für Performance-driven Sustainability und Alignment zwischen Financial und ESG Goals.\n• Continuous Improvement Loops: Implementation von Lean Six Sigma Methodologies in ESG-Performance-Management für systematische Process Optimization und Waste Elimination.\n• Cross-functional Innovation Workshops: Strukturierte Ideation-Prozesse, die ESG-Herausforderungen als Innovation Trigger nutzen und Breakthrough Solutions für Operational Challenges entwickeln.\n• Performance Gamification: Design von ESG-Performance-Dashboards mit Gamification-Elementen, die Employee Engagement für Sustainability Goals erhöhen und Innovation Culture fördern."
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
