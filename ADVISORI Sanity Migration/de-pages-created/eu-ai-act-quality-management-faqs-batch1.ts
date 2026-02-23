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
    console.log('Updating EU AI Act Quality Management page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-quality-management' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-quality-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist AI Quality Management für die C-Suite unter der EU AI Act mehr als nur technische Kontrolle und wie transformiert ADVISORI QM zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellt AI Quality Management unter der EU AI Act eine fundamentale Neuausrichtung der Qualitätsphilosophie dar – es transcendiert traditionelle QM-Ansätze und wird zum strategischen Enabler für vertrauensvolle AI-Innovation. ADVISORI positioniert AI Quality Management als zentralen Baustein für nachhaltige Wettbewerbsfähigkeit und Marktdifferenzierung durch exzellente AI-Systeme.\n\n🎯 Strategische Dimensionen für die Führungsebene:\n• Vertrauensbildung durch Quality Excellence: Systematische AI-Qualitätssicherung schafft Vertrauen bei Stakeholdern und ermöglicht Premium-Positionierung im Markt.\n• Risikominimierung und Compliance Assurance: Strukturierte QM-Prozesse reduzieren operationelle Risiken und gewährleisten nachhaltige EU AI Act Compliance.\n• Innovation Velocity durch Quality Gates: Definierte Qualitätsstandards beschleunigen AI-Entwicklung durch klare Approval-Prozesse und reduzierte Iterationszyklen.\n• Competitive Differentiation: Nachweisbare AI-Qualität wird zum USP gegenüber Wettbewerbern mit weniger strukturierten QM-Ansätzen.\n\n🛡️ Der ADVISORI-Ansatz für strategisches AI Quality Management:\n• Business-Value-orientierte QM-Architektur: Wir entwickeln Quality Management Systeme, die nicht nur Compliance sicherstellen, sondern auch Geschäftswert maximieren und Innovationsgeschwindigkeit fördern.\n• Risk-informed Quality Frameworks: Unser Ansatz integriert Risikobewertung in QM-Prozesse und ermöglicht risikobasierte Priorisierung von Quality-Initiativen.\n• Stakeholder-zentrierte Quality Governance: Wir etablieren QM-Strukturen, die verschiedene Stakeholder-Bedürfnisse (Kunden, Regulatoren, Investoren) systematisch adressieren.\n• Continuous Quality Innovation: Entwicklung adaptiver QM-Systeme, die sich dynamisch an neue AI-Technologien und regulatorische Anforderungen anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert und kommuniziert die C-Suite den ROI von AI Quality Management Investitionen und welche Business-Metriken bietet ADVISORI für Quality-Excellence-Reporting?",
        answer: "Der Return on Investment von AI Quality Management manifestiert sich in messbaren Qualitätsverbesserungen, Kostenreduktionen und strategischen Wertschöpfungspotenzialen. ADVISORI entwickelt umfassende ROI-Frameworks, die sowohl quantitative Qualitätsmetriken als auch qualitative Business-Benefits transparent darstellen und C-Suite-gerechte Kommunikation ermöglichen.\n\n💰 Quantifizierbare Quality-Werttreiber:\n• Reduzierte AI-System Downtime: Systematische Qualitätssicherung reduziert ungeplante Ausfälle und damit verbundene Geschäftsverluste um 60-80%.\n• Verringerte Compliance-Kosten: Strukturierte QM-Prozesse senken Aufwände für regulatorische Audits und Nachbesserungen um 40-60%.\n• Beschleunigte Time-to-Market: Quality Gates und standardisierte Testing-Prozesse verkürzen AI-Produktentwicklungszyklen um 25-40%.\n• Reduzierte Technical Debt: Präventive Qualitätssicherung minimiert nachgelagerte Korrekturaufwände und Refactoring-Kosten erheblich.\n\n📊 ADVISORI's Quality Excellence Metrics Framework:\n• AI Quality Scorecard Development: Entwicklung CEO-Dashboard mit KPIs für AI-System Performance, Compliance Status und Quality Trends.\n• Business Impact Quantification: Messung der Auswirkungen von Quality-Initiativen auf Kundenzufriedenheit, Marktanteil und Revenue-Generierung.\n• Quality Cost Analysis: Systematische Erfassung von Quality-Kosten (Prevention, Appraisal, Failure) für optimierte QM-Investitionsentscheidungen.\n• Competitive Quality Benchmarking: Vergleichsanalysen zur Positionierung der eigenen AI-Quality-Performance im Marktumfeld.\n• Stakeholder Confidence Metrics: Tracking von Vertrauensindikatoren bei Kunden, Partnern und Investoren als Resultat verbesserter AI-Qualität.\n• Regulatory Readiness Index: Kontinuierliches Monitoring der Compliance-Performance und proaktive Identifikation von Quality-Gaps."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "AI-Systeme operieren in komplexen, dynamischen Umgebungen mit kontinuierlich evolving Data und Modellen. Wie stellt ADVISORI sicher, dass Quality Management adaptiv und zukunftssicher bleibt?",
        answer: "In der hochdynamischen AI-Landschaft erfordert effektives Quality Management adaptive und selbstlernende Systeme, die kontinuierlich auf Veränderungen reagieren können. ADVISORI entwickelt next-generation Quality Management Frameworks, die Machine Learning und automatisierte Quality Assessment nutzen, um proaktiv auf Quality-Risiken zu reagieren und kontinuierliche Verbesserung zu gewährleisten.\n\n🔄 Adaptive Quality Management Architektur:\n• Self-Monitoring AI Quality Systems: Implementierung intelligenter QM-Systeme, die automatisch Quality-Degradation erkennen und Corrective Actions initiieren.\n• Continuous Quality Learning: Integration von ML-basierten Quality-Prediction-Modellen, die aus historischen Quality-Daten lernen und zukünftige Risiken antizipieren.\n• Dynamic Quality Thresholds: Entwicklung adaptiver Quality-Standards, die sich automatisch an veränderte Betriebsbedingungen und Performance-Anforderungen anpassen.\n• Real-time Quality Dashboards: Live-Monitoring von AI-System Quality mit sofortigen Alerts bei Quality-Anomalien oder Compliance-Abweichungen.\n\n🚀 ADVISORI's Future-Ready Quality Framework:\n• AI-powered Quality Automation: Nutzung von AI-Tools zur Automatisierung repetitiver Quality-Tasks und Freisetzung menschlicher Expertise für strategische Quality-Initiativen.\n• Predictive Quality Analytics: Entwicklung von Prognosesystemen, die Quality-Issues vor ihrem Auftreten identifizieren und präventive Maßnahmen ermöglichen.\n• Ecosystem Quality Integration: Aufbau von Quality-Netzwerken mit Technologiepartnern, Datenlieferanten und Regulatoren für kollektive Quality-Standards.\n• Quality Innovation Labs: Etablierung von Test-Environments für experimentelle Quality-Ansätze und kontinuierliche QM-Methodologie-Weiterentwicklung.\n• Cross-Domain Quality Transfer: Anwendung bewährter Quality-Praktiken aus anderen Industrien auf AI-spezifische Herausforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI AI Quality Management von einer reaktiven Fehlerkorrektur zu einem proaktiven Business-Enabler, der Innovation beschleunigt und Marktchancen schafft?",
        answer: "ADVISORI revolutioniert traditionelle Quality Management Ansätze, indem wir Quality von einem nachgelagerten Kontrollmechanismus zu einem strategischen Innovation-Katalysator transformieren. Unser Ansatz integriert Quality-Überlegungen nahtlos in den gesamten AI-Entwicklungslebenszyklus und schafft eine Kultur, in der Qualitätsexzellenz zum Wettbewerbsvorteil und Marktdifferenzierer wird.\n\n🚀 Von Reaktiv zu Proaktiv – Quality als Innovation Driver:\n• Quality-by-Design Philosophy: Integration von Quality-Anforderungen bereits in die frühesten AI-Designphasen, um nachgelagerte Korrekturen zu vermeiden und Entwicklungsgeschwindigkeit zu maximieren.\n• Intelligent Quality Automation: Entwicklung selbstoptimierender Quality-Systeme, die kontinuierlich lernen und sich an neue Quality-Herausforderungen anpassen.\n• Quality-driven Market Positioning: Nutzung nachweisbarer AI-Quality-Excellence als Premium-Differenzierungsmerkmal für neue Marktsegmente und Preismodelle.\n• Proactive Quality Intelligence: Implementierung von Predictive Quality Analytics, die Quality-Trends antizipieren und strategische Quality-Investitionen optimal lenken.\n\n💡 ADVISORI's Innovation-Enablement durch Quality Excellence:\n• Quality Innovation Acceleration: Entwicklung von Quality-Frameworks, die Innovation beschleunigen, indem sie Entwicklern sofortiges Quality-Feedback und Best-Practice-Guidance bieten.\n• Market-Responsive Quality Standards: Etablierung dynamischer Quality-Kriterien, die sich an Marktanforderungen und Kundenbedürfnisse anpassen.\n• Quality Ecosystem Orchestration: Aufbau von Quality-Partnerschaften mit Technologieanbietern, Forschungseinrichtungen und Branchenorganisationen für kollektive Quality-Innovation.\n• Customer-Centric Quality Design: Entwicklung von Quality-Metriken, die direkt Kundenwert und Geschäftsergebnisse reflektieren, nicht nur technische Performance.\n• Quality Talent Development: Transformation von Quality-Teams zu strategischen Business-Partnern mit erweiterten Kompetenzen in AI, Business und Innovation."
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
