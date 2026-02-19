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
    console.log('Updating EU AI Act Risk Assessment page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine systematische AI Risk Assessment für C-Level-Führungskräfte strategisch unverzichtbar und wie positioniert ADVISORI dies als Wettbewerbsvorteil?",
        answer: "Für die C-Suite repräsentiert ein professionelles AI Risk Assessment nicht nur regulatorische Compliance, sondern einen fundamentalen strategischen Baustein für nachhaltige KI-Innovation und Marktführerschaft. Der EU AI Act fordert eine systematische Risikobewertung, die weit über technische Aspekte hinausgeht und direkte Auswirkungen auf Geschäftsstrategie, Investitionsentscheidungen und Stakeholder-Vertrauen hat.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Investitionsschutz und ROI-Optimierung: Systematische Risikobewertung schützt KI-Investitionen vor regulatorischen Risiken und optimiert die Allokation von Innovationsbudgets durch evidenzbasierte Priorisierung.\n• Marktpositionierung und Competitive Advantage: Unternehmen mit nachweisbar robusten AI Risk Management Systemen genießen Vertrauensvorsprünge bei Kunden, Partnern und Investoren, was zu besseren Marktpositionen führt.\n• Haftungsminimierung und Executive Protection: Eine dokumentierte, systematische Risikobewertung reduziert persönliche Haftungsrisiken der Geschäftsleitung und demonstriert Due Diligence gegenüber Aufsichtsbehörden.\n• Skalierbarkeit von AI-Initiativen: Ein etabliertes Risk Assessment Framework ermöglicht die sichere und schnelle Skalierung von KI-Anwendungen ohne regulatorische Verzögerungen.\n\n🛡️ Der ADVISORI-Ansatz für strategisches AI Risk Management:\n• Business-aligned Risk Framework: Wir entwickeln Risk Assessment Methodologien, die technische Risiken direkt zu Geschäftsauswirkungen und strategischen Zielen in Bezug setzen.\n• Proaktive Regulatory Intelligence: Unser Ansatz antizipiert zukünftige regulatorische Entwicklungen und positioniert Ihr Unternehmen als Early Adopter, nicht als Nachzügler.\n• Cross-functional Integration: Wir schaffen Brücken zwischen technischen Teams, Rechtsabteilungen und der Geschäftsführung für ein holistisches Risikoverständnis.\n• Kontinuierliche Wertsteigerung: Unser Risk Assessment wird zum strategischen Instrument für die kontinuierliche Optimierung und Innovation Ihrer KI-Landschaft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert ein systematisches AI Risk Assessment die Kostenbasis und welchen quantifizierbaren Impact hat dies auf EBITDA und Unternehmensbewertung?",
        answer: "Ein professionelles AI Risk Assessment ist keine Kostenstelle, sondern ein strategischer Value Driver, der sich messbar in EBITDA-Verbesserung und Unternehmensbewertung niederschlägt. Die Investition in systematische Risikobewertung generiert sowohl defensive Werterhaltung als auch offensive Wertschöpfung durch optimierte KI-Governance und beschleunigte Innovation.\n\n💰 Direkte finanzielle Wertschöpfung:\n• Vermeidung regulatorischer Strafen: EU AI Act Violations können Geldstrafen von bis zu 7% des weltweiten Jahresumsatzes bedeuten. Ein robustes Risk Assessment reduziert dieses Risiko dramatisch.\n• Optimierung von Compliance-Kosten: Systematische Risikobewertung vermeidet Ad-hoc-Compliance-Maßnahmen und reduziert die Gesamtkosten für AI Governance um bis zu 40%.\n• Beschleunigte Time-to-Market: Etablierte Risk Assessment Prozesse verkürzen die Compliance-Validierung neuer KI-Anwendungen erheblich und reduzieren Go-to-Market-Zyklen.\n• Versicherungsoptimierung: Nachweisbare AI Risk Management Kapazitäten führen zu günstigeren Prämien bei Cyber- und Professional Liability-Versicherungen.\n\n📈 Strategische Werttreiber und Bewertungseffekte:\n• Enhanced Due Diligence Readiness: Bei M&A-Transaktionen oder Kapitalrunden demonstriert ein professionelles AI Risk Assessment institutional-grade Governance und kann Bewertungsabschläge vermeiden.\n• ESG-Compliance und Sustainable Finance: Systematisches AI Risk Management erfüllt zunehmende ESG-Anforderungen und ermöglicht Zugang zu ESG-fokussierten Investoren und günstigeren Finanzierungskonditionen.\n• Customer Trust und Premium Pricing: Transparente Risikobewertung ermöglicht Premium-Positionierung bei risikoaversen Enterprise-Kunden und rechtfertigt höhere Preismodelle.\n• Intellectual Property Protection: Systematische Risikodokumentation stärkt IP-Positionen und kann die Bewertung von AI-Assets bei Lizenzierungen oder Verkäufen erhöhen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unser AI Risk Assessment Framework mit der dynamischen Regulierungslandschaft und technologischen Innovation Schritt hält?",
        answer: "Die Herausforderung für C-Level-Führungskräfte liegt in der Balance zwischen regulatorischer Compliance und innovativer Agilität. ADVISORI's AI Risk Assessment Framework ist darauf ausgelegt, diese Spannung aufzulösen durch adaptive Methodologien, die sowohl robuste Compliance als auch beschleunigte Innovation ermöglichen.\n\n🔄 Adaptive Risk Assessment Architektur:\n• Dynamic Regulatory Monitoring: Wir implementieren kontinuierliche Überwachungssysteme für regulatorische Entwicklungen nicht nur in der EU, sondern auch in anderen relevanten Jurisdiktionen (US, UK, Singapur), um globale AI-Strategien abzusichern.\n• Technology-agnostic Frameworks: Unsere Risk Assessment Methodologien sind technologieneutral konzipiert und können mit neuen AI-Paradigmen (Generative AI, Quantum ML, Edge AI) skalieren, ohne komplette Neugestaltung zu erfordern.\n• Scenario-based Forward Planning: Wir entwickeln Risk Assessment Szenarien für verschiedene regulatorische und technologische Entwicklungspfade, um strategische Optionalität zu schaffen.\n• Continuous Learning Integration: Das Framework integriert Learnings aus jeder Risk Assessment Iteration und verbessert kontinuierlich Präzision und Effizienz der Bewertungsprozesse.\n\n🔍 Proaktive Innovation Enablement:\n• Innovation Sandbox Konzepte: Wir etablieren kontrollierte Umgebungen für das Testing neuer AI-Anwendungen mit reduziertem Compliance-Overhead, um Innovation nicht zu bremsen.\n• Risk-adjusted Go-to-Market Strategies: Entwicklung von gestaffelten Markteinführungsstrategien, die Risikobewertung als Input für Rollout-Geschwindigkeit und Marktabdeckung nutzen.\n• Stakeholder Ecosystem Integration: Aufbau von Beziehungen zu Regulatoren, Standardisierungsorganisationen und Industry Bodies, um Early Access zu regulatorischen Entwicklungen zu sichern.\n• Executive Decision Support: Transformation komplexer Risk Assessment Daten in actionable C-Level Insights für schnelle, informierte strategische Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ein systematisches AI Risk Assessment unser Unternehmen für M&A-Opportunities und strategische Partnerschaften in der AI-Wirtschaft?",
        answer: "Ein professionelles AI Risk Assessment Framework wird zunehmend zu einem kritischen Asset für strategische Transaktionen und Partnerschaften. Für die C-Suite bedeutet dies, dass Risikomanagement-Kapazitäten direkt zu Deal-Value und strategischen Optionen beitragen. ADVISORI positioniert AI Risk Assessment als Deal Enabler, nicht als Deal Killer.\n\n🚀 M&A Value Creation durch Risk Excellence:\n• Enhanced Due Diligence Capability: Buyers zahlen Premiums für Targets mit nachweisbar robusten AI Risk Management Systemen, da dies Post-Merger Integration Risiken reduziert und Synergy Realization beschleunigt.\n• Reverse Due Diligence Advantage: Als Acquirer ermöglicht ein etabliertes Risk Assessment Framework die schnelle und genaue Bewertung von AI-Assets bei Targets, was zu besseren Deal Terms und reduziertem Post-Transaction Risk führt.\n• Regulatory Clean Room Status: Unternehmen mit exemplarischen Risk Assessment Praktiken können als 'Regulatory Safe Harbors' für internationale Expansionen oder Joint Ventures fungieren.\n• IP Valuation Enhancement: Systematische Risikodokumentation stärkt die Bewertbarkeit und Handelbarkeit von AI-Intellectual Property bei Asset Deals oder Lizenzierungen.\n\n💡 Strategic Partnership Enablement:\n• Trust-based Partnership Acceleration: Transparente Risk Assessment Prozesse verkürzen Partner Due Diligence Zyklen erheblich und ermöglichen schnellere Partnerschaften mit Enterprise-Kunden oder Strategic Investors.\n• Risk Sharing Frameworks: Etablierte Risk Assessment Methodologien ermöglichen sophisticated Risk Sharing Arrangements in Joint Ventures oder Co-Development Agreements.\n• Ecosystem Leadership Position: Unternehmen mit führenden Risk Assessment Kapazitäten werden oft zu Standard-Settern in ihren Industrien und können profitable Platform-Strategien entwickeln.\n• Regulatory Arbitrage Opportunities: Superior Risk Management kann Zugang zu regulatorisch privilegierten Märkten oder Anwendungsbereichen schaffen, wo Wettbewerber aufgrund unzureichender Risk Practices ausgeschlossen sind."
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
