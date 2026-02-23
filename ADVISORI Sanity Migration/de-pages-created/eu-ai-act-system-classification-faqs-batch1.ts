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
    console.log('Updating EU AI Act System Classification page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-system-classification' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-system-classification" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine präzise KI-System Klassifizierung für C-Level-Führungskräfte strategisch entscheidend und wie minimiert ADVISORI regulatorische und finanzielle Risiken?",
        answer: "Für die C-Suite ist die KI-System Klassifizierung nach EU AI Act weit mehr als eine technische Compliance-Übung - sie ist ein fundamentaler strategischer Hebel, der direkten Einfluss auf Investitionsallokation, Marktpositionierung und Unternehmensbewertung hat. Eine präzise Klassifizierung optimiert nicht nur Compliance-Kosten, sondern schafft auch strategische Optionalität für AI-Innovation und Marktexpansion.\n\n🎯 Strategische Business Impact der System-Klassifizierung:\n• Kostenoptimierte Compliance-Strategien: Unterschiedliche AI-Risikokategorien erfordern verschiedene Compliance-Investments. Eine strategische Klassifizierung kann Compliance-Kosten um bis zu 60% reduzieren, indem unnötige High-Risk-Kategorisierungen vermieden werden.\n• Investitionssicherheit und ROI-Optimierung: Klare Klassifizierung ermöglicht präzise Budgetplanung für AI-Projekte und schützt vor unerwarteten Compliance-Kosten, die AI-ROI dramatisch beeinträchtigen können.\n• Marktpositionierung und Competitive Advantage: Unternehmen mit nachweisbar präziser Klassifizierung können als vertrauenswürdige AI-Partner positioniert werden, was zu Premium-Pricing und bevorzugten Partnerschaften führt.\n• M&A und Investment Readiness: Professionelle System-Klassifizierung erhöht Unternehmensbewertungen bei Transaktionen, da Due Diligence-Risiken minimiert und Integration-Komplexität reduziert wird.\n\n🛡️ Der ADVISORI-Ansatz für strategische Classification Excellence:\n• Business-First Klassifizierung: Wir entwickeln Klassifizierungsstrategien, die primär Ihre Geschäftsziele optimieren und sekundär regulatorische Compliance erfüllen, nicht umgekehrt.\n• Dynamic Classification Framework: Unser Ansatz ermöglicht adaptive Klassifizierung basierend auf Use-Case-Evolution und regulatorischen Updates, um langfristige Flexibilität zu gewährleisten.\n• Cross-jurisdictional Expertise: Wir berücksichtigen nicht nur EU AI Act, sondern auch parallele Entwicklungen in USA, UK und Asien für global konsistente Klassifizierung.\n• Executive Decision Support: Transformation komplexer Klassifizierungsdaten in actionable C-Level Insights für schnelle, informierte strategische Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie beeinflusst die KI-System Klassifizierung unsere Kapitalallokation und welche quantifizierbaren Auswirkungen hat dies auf CAPEX und OPEX Budgets?",
        answer: "Die KI-System Klassifizierung nach EU AI Act hat direkte, messbare Auswirkungen auf Ihre Kapitalallokation und operative Budgets. Verschiedene Risikokategorien erfordern unterschiedliche Compliance-Investments, die sich erheblich auf CAPEX und OPEX auswirken. ADVISORI's strategische Klassifizierung optimiert diese Budgetallokation für maximale Effizienz.\n\n💰 Direkte Budgetauswirkungen nach Risikokategorien:\n• Minimal Risk AI Systems: Nahezu keine zusätzlichen Compliance-Kosten, ermöglichen maximale Innovationsgeschwindigkeit und ROI-Optimierung bei geringsten regulatorischen Overhead.\n• Limited Risk AI Systems: Moderate Transparenz-Anforderungen mit CAPEX von etwa 50.000-200.000€ für Initial Setup und 20.000-50.000€ jährlichen OPEX für Compliance-Maintenance.\n• High Risk AI Systems: Erhebliche Compliance-Investments von 500.000-2.000.000€ CAPEX für umfassende Dokumentation, Testing und Zertifizierung, plus 200.000-500.000€ jährliche OPEX für kontinuierliche Überwachung.\n• Prohibited AI Systems: Komplette Investitionsverluste plus potenzielle Strafen von bis zu 7% des Jahresumsatzes, was Millionen-Schäden verursachen kann.\n\n📈 Strategic Capital Allocation Optimization:\n• Portfolio-basierte Klassifizierung: ADVISORI entwickelt Klassifizierungsstrategien, die Ihr gesamtes AI-Portfolio optimieren, nicht einzelne Systeme isoliert betrachten.\n• Investment Staging Strategien: Strukturierung von AI-Entwicklung in Phasen, die schrittweise Klassifizierung ermöglichen und Kapitalrisiken minimieren.\n• Cost-Benefit Trade-off Analysis: Quantitative Bewertung verschiedener Klassifizierungsoptionen mit präzisen ROI-Berechnungen für jede Compliance-Strategie.\n• Budget Predictability: Entwicklung mehrjähriger Compliance-Budget-Prognosen basierend auf Klassifizierung, die CFO-level Planungssicherheit schaffen.\n\n🔄 Adaptive Budget Management:\n• Dynamic Re-classification Impact: Proaktive Budgetplanung für mögliche Klassifizierungsänderungen bei System-Evolution oder regulatorischen Updates.\n• Scenario-based Planning: Entwicklung von Budget-Szenarien für verschiedene Klassifizierungspfade, um finanzielle Flexibilität zu maximieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie positioniert eine strategische KI-System Klassifizierung unser Unternehmen für internationale Expansion und globale AI-Partnerschaften?",
        answer: "Eine strategische KI-System Klassifizierung nach EU AI Act Standards positioniert Ihr Unternehmen optimal für globale Expansion und internationale AI-Partnerschaften. Der EU AI Act wird zum de-facto Global Standard, ähnlich wie GDPR, was bedeutet, dass EU-konforme Klassifizierung internationale Marktführerschaft ermöglicht.\n\n🌍 Globale Marktpositionierung durch EU AI Act Leadership:\n• International Standard Setting: EU AI Act Classification wird zur globalen Benchmark. Unternehmen mit exemplarischer EU-Klassifizierung werden zu bevorzugten Partnern für multinationale Konzerne und Regierungsprojekte.\n• Regulatory Arbitrage Opportunities: Präzise EU-Klassifizierung ermöglicht schnellere Markteintritte in anderen Jurisdiktionen, da EU-Standards oft als Goldstandard für AI-Governance anerkannt werden.\n• Cross-border Deal Enablement: Internationale M&A und Joint Ventures werden durch nachweisbare Classification Excellence beschleunigt, da Due Diligence-Risiken minimiert werden.\n• Global Supply Chain Integration: Multinational agierende Unternehmen bevorzugen AI-Partner mit robusten Klassifizierungssystemen für Supply Chain Risk Management.\n\n🤝 Strategic Partnership Acceleration:\n• Enterprise Customer Trust: Fortune 500-Unternehmen fordern zunehmend AI-Partner mit nachweisbar präziser Risikokategorisierung, um eigene Compliance-Risiken zu minimieren.\n• Technology Alliance Opportunities: Leading Tech-Unternehmen (Microsoft, Google, AWS) bevorzugen Partner mit sophistizierten Classification Frameworks für gemeinsame AI-Entwicklungen.\n• Ecosystem Leadership Position: Unternehmen mit exemplarischer Klassifizierung werden oft zu Standard-Settern in ihren Industrien und können profitable Platform-Strategien entwickeln.\n• Investment Community Confidence: Institutional Investors und Private Equity Firms bewerten AI-Unternehmen mit robusten Klassifizierungssystemen höher aufgrund reduzierter regulatorischer Risiken.\n\n🚀 International Expansion Enablement:\n• Regulatory Fast-track Access: EU AI Act-konforme Klassifizierung kann als Basis für beschleunigte Zulassungen in anderen Märkten dienen.\n• Global Customer Acquisition: Internationale Enterprise-Kunden können EU-konforme AI-Systeme ohne zusätzliche lokale Compliance-Prüfungen implementieren.\n• Cross-jurisdictional Efficiency: Einheitliche Klassifizierungsstandards reduzieren Komplexität und Kosten bei multinationaler AI-Deployment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI's System-Klassifizierung unsere AI Governance in einen strategischen Wettbewerbsvorteil und Business Enabler?",
        answer: "ADVISORI transformiert KI-System Klassifizierung von einer reaktiven Compliance-Funktion zu einem proaktiven strategischen Instrument, das AI Governance als Wettbewerbsvorteil und Innovation Enabler positioniert. Unsere business-first Klassifizierung schafft strategische Optionalität und maximiert das Verhältnis von Innovation zu Compliance-Kosten.\n\n🎯 Transformation von Compliance zu Strategic Advantage:\n• Innovation Acceleration Framework: Unsere Klassifizierung identifiziert Bereiche minimaler regulatorischer Constraints, wo Ihr Unternehmen maximale Innovationsgeschwindigkeit erreichen kann.\n• Risk-adjusted Innovation Portfolio: Strategische Allokation von AI-Entwicklungsressourcen basierend auf Klassifizierungs-optimierten Risk-Return-Profilen verschiedener AI-Anwendungen.\n• Competitive Moat Development: Präzise Klassifizierung ermöglicht die Entwicklung von AI-Capabilities, die für Wettbewerber aufgrund unklarer Compliance-Situationen unzugänglich sind.\n• Market Timing Optimization: Klassifizierungs-basierte Go-to-Market-Strategien, die regulatorische Entwicklungen als competitive Timing-Vorteile nutzen.\n\n🏆 Business Enablement durch Classification Excellence:\n• Product Development Acceleration: Klassifizierungs-informierte Produktentscheidungen reduzieren Development-to-Market Zyklen um bis zu 40% durch eliminierte Compliance-Redesigns.\n• Customer Confidence Multiplication: Transparente Klassifizierung wird zum Verkaufsargument bei risikoaversen Enterprise-Kunden und ermöglicht Premium-Pricing.\n• Operational Excellence: Klassifizierungs-basierte Prozessoptimierung reduziert operative Komplexität und erhöht Team-Produktivität durch klare Compliance-Frameworks.\n• Strategic Optionality: Flexible Klassifizierungsarchitekturen ermöglichen schnelle Pivot-Strategien bei sich ändernden Marktbedingungen oder regulatorischen Landschaften.\n\n🔮 Future-proofing durch Dynamic Classification:\n• Regulatory Anticipation: Proaktive Klassifizierung basierend auf anticipated regulatorischen Entwicklungen schafft First-Mover-Advantages bei neuen Compliance-Anforderungen.\n• Technology Evolution Readiness: Adaptive Klassifizierungsframeworks, die mit emerging AI-Technologies (Quantum ML, Neuromorphic Computing) skalieren können.\n• Ecosystem Integration: Klassifizierung als Basis für Industry Standard Setting und Platform Strategy Development in AI-Ecosystems."
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
