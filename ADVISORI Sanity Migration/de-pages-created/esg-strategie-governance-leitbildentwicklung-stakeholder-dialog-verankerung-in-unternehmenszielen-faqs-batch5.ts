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
    console.log('Updating ESG Strategie & Governance page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir ESG-Transformation in Post-Merger-Integration und Unternehmenskäufen erfolgreich berücksichtigen und als Wertschöpfungsmotor nutzen?",
        answer: "ESG-Integration in M&A-Prozessen wird zunehmend zu einem kritischen Erfolgsfaktor für nachhaltige Wertschöpfung und Risikomanagement. ESG-Aspekte können sowohl in der Due Diligence als auch in der Post-Merger-Integration erhebliche Synergien schaffen oder versteckte Risiken aufdecken, die traditionelle Financial Due Diligence übersieht.\n\n🔍 ESG in M&A-Wertschöpfung:\n• ESG-Due-Diligence: Systematische Bewertung von ESG-Risiken und -Chancen als integraler Bestandteil der Unternehmensbewertung und Kaufentscheidung.\n• Cultural-Integration: ESG-Werte als Klammer für erfolgreiche Kulturintegration und Mitarbeiterretention in Fusionen.\n• Synergy-Enhancement: Identifikation von ESG-basierten Synergien, die über traditionelle operative und finanzielle Synergien hinausgehen.\n• Stakeholder-Value-Creation: Nutzung kombinierter ESG-Stärken zur Schaffung neuer Stakeholder-Werte und Marktpositionen.\n\n🎯 ADVISORIs M&A-ESG-Integration-Framework:\n• Pre-Transaction-ESG-Assessment: Umfassende ESG-Bewertung von Target-Unternehmen mit Quantifizierung von Risiken und Chancen.\n• Integration-Planning: Entwicklung detaillierter ESG-Integrationspläne mit klaren Meilensteinen und Verantwortlichkeiten.\n• Cultural-Alignment-Process: Strukturierte Prozesse zur Harmonisierung von ESG-Kulturen und -Praktiken.\n• Post-Merger-ESG-Optimization: Kontinuierliche Optimierung der kombinierten ESG-Performance mit Fokus auf Synergieerschließung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Bedeutung hat ESG für die Zukunft der Unternehmensfinanzierung, und wie können wir uns optimal auf veränderte Kapitalmarktanforderungen vorbereiten?",
        answer: "ESG-Kriterien transformieren fundamentale Mechanismen der Unternehmensfinanzierung, von Kreditkonditionen über Investor Relations bis hin zu neuen Finanzierungsinstrumenten. Unternehmen mit starker ESG-Performance profitieren von besseren Finanzierungskonditionen, während ESG-Nachzügler mit höheren Kapitalkosten und eingeschränktem Kapitalmarktzugang rechnen müssen.\n\n💰 ESG-Transformation der Unternehmensfinanzierung:\n• ESG-linked Financing: Wachsende Verbreitung von nachhaltigkeitsgebundenen Krediten und Anleihen mit variablen Konditionen basierend auf ESG-Performance.\n• Investor-Screening: Zunehmende ESG-basierte Investorenauswahl und -bewertung durch institutionelle Investoren und Asset Manager.\n• Green-Finance-Instruments: Expansion von Green Bonds, Social Bonds und Sustainability-linked Bonds als neue Finanzierungsquellen.\n• Risk-Premium-Differentiation: Wachsende Spreads zwischen ESG-starken und ESG-schwachen Unternehmen bei Finanzierungskosten.\n\n📊 ADVISORIs Capital-Market-Readiness-Strategie:\n• ESG-Investor-Mapping: Systematische Analyse und Segmentierung des Investorenuniversums nach ESG-Prioritäten und -Kriterien.\n• ESG-Financing-Strategy: Entwicklung optimaler Finanzierungsstrategien unter Nutzung ESG-basierter Instrumente und Konditionen.\n• Capital-Market-Communication: Aufbau überzeugender ESG-Narratives für verschiedene Kapitalmarktteilnehmer.\n• Performance-Optimization: Kontinuierliche Verbesserung der ESG-Performance zur Optimierung von Finanzierungskonditionen und Investor Relations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir ESG-Transformation als Instrument für Krisenresilienz und Business Continuity nutzen und dabei gleichzeitig Wettbewerbsvorteile sichern?",
        answer: "ESG-Transformation stärkt fundamentale Unternehmensresilienz durch Diversifikation von Risiken, Stärkung von Stakeholder-Beziehungen und Aufbau adaptiver Kapazitäten. Unternehmen mit robusten ESG-Fundamenten zeigen erwiesenermaßen bessere Performance in Krisenzeiten und können Disruption als Wachstumschance nutzen.\n\n🛡️ ESG als Resilienz-Multiplikator:\n• Risk-Diversification: ESG-orientierte Geschäftsmodelle reduzieren Abhängigkeiten von volatilen Ressourcen und schaffen stabilere Revenue Streams.\n• Stakeholder-Capital: Starke ESG-Performance baut Stakeholder-Vertrauen auf, das in Krisenzeiten als Puffer und Unterstützungssystem wirkt.\n• Adaptive-Capacity: ESG-fokussierte Organisationen entwickeln bessere Fähigkeiten zur Antizipation und Anpassung an externe Veränderungen.\n• Supply-Chain-Resilience: Nachhaltige Lieferketten sind oft diversifizierter und weniger anfällig für Disruption.\n\n⚡ ADVISORIs Crisis-Resilience-durch-ESG-Framework:\n• Resilience-Assessment: Systematische Bewertung der aktuellen Unternehmensresilienz mit Identifikation von ESG-basierten Stärkungspotenzialen.\n• Scenario-Planning: Entwicklung von Krisenszenarien mit ESG-Integration zur Vorbereitung auf verschiedene Disruption-Typen.\n• Stakeholder-Network-Building: Aufbau robuster Stakeholder-Netzwerke als Grundlage für Krisenunterstützung und gemeinsame Problemlösung.\n• Agile-ESG-Implementation: Design adaptiver ESG-Systeme, die auch unter Krisenbedingungen funktionsfähig bleiben und schnelle Pivoting ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche langfristigen Trends werden die Zukunft der ESG-Governance prägen, und wie können wir unser Unternehmen strategisch für diese Entwicklungen positionieren?",
        answer: "Die Zukunft der ESG-Governance wird von mehreren transformativen Trends geprägt, die fundamentale Änderungen in Geschäftsmodellen, Stakeholder-Erwartungen und regulatorischen Rahmen mit sich bringen. Unternehmen müssen diese Trends antizipieren und proaktiv ihre ESG-Strategien entsprechend ausrichten, um Wettbewerbsvorteile zu sichern.\n\n🔮 Zukunftstrends in ESG-Governance:\n• Regulatory-Convergence: Harmonisierung globaler ESG-Standards und -Berichtspflichten mit einheitlicheren Anforderungen weltweit.\n• Technology-Integration: AI, Blockchain und IoT werden ESG-Monitoring, -Reporting und -Steuerung revolutionieren und neue Transparenzstandards schaffen.\n• Stakeholder-Capitalism-Evolution: Weiterentwicklung von Stakeholder-Kapitalismus mit formalisierteren Governance-Strukturen für Multi-Stakeholder-Interessen.\n• Nature-positive Business Models: Transition von 'weniger schädlich' zu 'aktiv regenerativ' in Umwelt- und Klimastrategien.\n\n🚀 ADVISORIs Future-Ready-ESG-Positionierung:\n• Trend-Monitoring-System: Aufbau systematischer Trend-Intelligence für ESG-Entwicklungen mit kontinuierlicher Strategieanpassung.\n• Future-Scenario-Planning: Entwicklung multipler Zukunftsszenarien für ESG-Landschaft mit entsprechenden Strategieoptionen.\n• Innovation-Pipeline: Etablierung kontinuierlicher ESG-Innovation zur Antizipation und Gestaltung zukünftiger Standards.\n• Ecosystem-Leadership: Strategische Positionierung als Thought Leader und Ecosystem-Builder in emerging ESG-Bereichen zur Beeinflussung zukünftiger Entwicklungen."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
