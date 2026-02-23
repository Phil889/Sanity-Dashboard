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
    console.log('Updating ESG Rating page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-rating' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-rating" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie positioniert ADVISORI unser Unternehmen strategisch gegenüber ESG-fokussierten Investoren und welche konkreten Vorteile ergeben sich für unsere Kapitalmarktpositioning?",
        answer: "ESG-fokussierte Investoren verwalten mittlerweile über 30 Billionen USD und stellen eine der wachstumsstärksten Kapitalquellen dar. Eine strategische Positionierung gegenüber diesen Investoren erfordert jedoch mehr als oberflächliche ESG-Kommunikation. ADVISORI entwickelt authentische ESG-Narrative und belastbare Performance-Metriken, die Ihr Unternehmen als attraktives Investment für nachhaltigkeitsorientierte Kapitalgeber positionieren.\n\n🎯 Investor-Relations-Optimierung durch ESG-Exzellenz:\n• Premium Valuation Access: ESG-Leader erzielen im Durchschnitt 10-15% höhere Bewertungsmultiples, da sie als zukunftsfähiger und risikoärmer wahrgenommen werden.\n• Institutional Capital Magnetism: Zugang zu ESG-mandatierten Investmentfonds, Pensionsfonds und Sovereign Wealth Funds, die traditionelle Investments zunehmend meiden.\n• Cost of Capital Optimization: Systematische Reduktion der Eigenkapitalkosten durch Lower Risk Perception und Premium-Positioning bei ESG-fokussierten Investoren.\n• Market Access Enhancement: Qualifikation für ESG-Indizes (DJSI, FTSE4Good, MSCI ESG) mit automatischem Zugang zu Milliarden von indexgebundenen Investments.\n\n🚀 ADVISORI's Capital Market Excellence Strategy:\n• Investor-Grade ESG Storytelling: Entwicklung einer kohärenten ESG-Value-Proposition, die klar artikuliert, wie Nachhaltigkeit Ihr Geschäftsmodell stärkt und Wettbewerbsvorteile schafft.\n• Data-Driven Performance Communication: Aufbau robuster ESG-KPI-Frameworks mit transparenter, investorgrade Berichterstattung, die Glaubwürdigkeit und Vertrauen schafft.\n• Proactive Engagement Programs: Strukturierte Investor-Outreach-Programme, die ESG-Performance proaktiv kommunizieren und Ihr Unternehmen als Thought Leader positionieren.\n• ESG Risk Mitigation Narrative: Klare Darstellung, wie ESG-Maßnahmen operative, regulatorische und reputative Risiken minimieren und langfristige Wertstabilität sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Regulatory ESG-Anforderungen entwickeln sich rasant weiter. Wie stellt ADVISORI sicher, dass unsere ESG Rating-Strategie auch zukünftigen regulatorischen Entwicklungen voraus ist?",
        answer: "Die regulatorische ESG-Landschaft durchläuft eine fundamentale Transformation mit weitreichenden Implikationen für Unternehmen aller Größen. Von der EU-Taxonomie über CSRD bis hin zu SEC Climate Rules - regulatorische Anforderungen werden schnell von optionalen Guidelines zu mandatory Compliance-Anforderungen. ADVISORI antizipiert diese Entwicklungen und baut ESG-Systeme auf, die nicht nur heutige Anforderungen erfüllen, sondern auch für kommende Regulierung gerüstet sind.\n\n🔍 Regulatory Foresight und Compliance-Excellence:\n• Future-Proof Compliance Design: Aufbau von ESG-Management-Systemen, die nicht nur aktuelle Anforderungen erfüllen, sondern auch für absehbare regulatorische Entwicklungen (CSRD, EU-Taxonomie, SEC Climate Rules) vorbereitet sind.\n• Global Regulatory Intelligence: Kontinuierliches Monitoring internationaler ESG-Regulierung und proaktive Anpassung Ihrer ESG-Strategie an sich entwickelnde Anforderungen.\n• Multi-Jurisdiction Readiness: Entwicklung von ESG-Frameworks, die verschiedene regulatorische Anforderungen (EU, US, APAC) gleichzeitig erfüllen und globale Geschäftstätigkeit unterstützen.\n• Materiality Assessment Evolution: Aufbau dynamischer Materialitäts-Bewertungen, die sich an verändernde regulatorische Prioritäten anpassen und Compliance-Lücken vermeiden.\n\n⚡ ADVISORI's Regulatory Excellence Approach:\n• Early Compliance Advantage: Proactive Implementierung von Best Practices, bevor sie zu mandatory Requirements werden, um First-Mover-Advantages zu sichern.\n• Regulatory Risk Mitigation: Systematische Bewertung und Minimierung von Compliance-Risiken durch robuste ESG-Governance und -Reporting-Systeme.\n• Stakeholder Communication Strategy: Klare Kommunikation Ihrer Regulatory Readiness an Investoren, Kunden und Aufsichtsbehörden zur Stärkung des Vertrauens.\n• Continuous Adaptation Framework: Etablierung von Prozessen für kontinuierliche Anpassung an neue regulatorische Anforderungen ohne Disruption bestehender Geschäftsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Unsere Stakeholder haben unterschiedliche ESG-Prioritäten und -Erwartungen. Wie harmonisiert ADVISORI diese verschiedenen Anforderungen in eine kohärente ESG Rating-Strategie?",
        answer: "Moderne Unternehmen navigieren ein komplexes Stakeholder-Ökosystem mit oft divergierenden ESG-Prioritäten. Investoren fokussieren auf finanzielle Materialität, Kunden verlangen authentische Nachhaltigkeit, Mitarbeiter erwarten Purpose-driven Leadership, und Regulatoren setzen auf Compliance. ADVISORI entwickelt Multi-Stakeholder-ESG-Strategien, die diese verschiedenen Anforderungen intelligent balancieren und Win-Win-Outcomes schaffen.\n\n🔄 Stakeholder-Alignment für ESG-Excellence:\n• Materiality Matrix Optimization: Entwicklung einer wissenschaftlich fundierten Materialitäts-Matrix, die sowohl Business Impact als auch Stakeholder-Priorities berücksichtigt und Prioritäten klar definiert.\n• Stakeholder-Specific Value Propositions: Maßgeschneiderte ESG-Kommunikation für verschiedene Stakeholder-Gruppen, die deren spezifische Interessen und Sprache adressiert.\n• Cross-Stakeholder Synergy Identification: Identifikation von ESG-Maßnahmen, die Multiple Stakeholder-Needs gleichzeitig erfüllen und Effizienz maximieren.\n• Balanced Scorecard Development: Aufbau eines ausgewogenen ESG-KPI-Systems, das verschiedene Stakeholder-Perspectives integriert und transparente Performance-Messung ermöglicht.\n\n🎯 ADVISORI's Integrated Stakeholder Strategy:\n• Dynamic Engagement Platform: Aufbau systematischer Stakeholder-Engagement-Prozesse zur kontinuierlichen Abstimmung von ESG-Prioritäten und -Erwartungen.\n• Conflict Resolution Framework: Entwicklung von Mechanismen zur konstruktiven Behandlung von Stakeholder-Konflikten und zur Findung optimaler Kompromisse.\n• Value Creation Orchestration: Gestaltung von ESG-Initiativen, die shared value für alle Stakeholder-Gruppen schaffen und langfristige Relationships stärken.\n• Transparent Communication Strategy: Aufbau einer kohärenten Kommunikationsstrategie, die ESG-Performance authentisch und glaubwürdig an alle Stakeholder-Gruppen vermittelt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie integriert ADVISORI ESG Rating-Verbesserungen in unsere bestehende Unternehmensstrategie, ohne operative Disruption oder Kulturwiderstand zu erzeugen?",
        answer: "Erfolgreiche ESG-Transformation erfordert mehr als neue Policies und Reporting-Systeme. Sie verlangt Cultural Change, Process Integration und Strategic Alignment. ADVISORI versteht, dass ESG-Exzellenz nur durch nahtlose Integration in bestehende Geschäftsprozesse und Unternehmenskultur nachhaltig erreicht werden kann. Unser Ansatz minimiert Disruption und maximiert Acceptance durch systematisches Change Management.\n\n🔄 Seamless ESG Integration Strategy:\n• Business-Process-Embedding: Integration von ESG-Considerations in bestehende Entscheidungsprozesse, Performance-Management und Strategic Planning, ohne separate Governance-Structures zu schaffen.\n• Cultural Evolution Management: Schrittweise Entwicklung einer ESG-bewussten Unternehmenskultur durch Leadership-Modeling, Incentive-Alignment und Employee-Engagement-Programme.\n• Operational Excellence Enhancement: Positionierung von ESG-Maßnahmen als Operational Excellence-Initiativen, die gleichzeitig Effizienz steigern und Nachhaltigkeitsziele erreichen.\n• Quick Wins Identification: Systematische Identifikation von ESG-Verbesserungen, die kurzfristige Business Benefits liefern und interne Unterstützung für weitere Maßnahmen schaffen.\n\n⚡ ADVISORI's Change Management Excellence:\n• Leadership Enablement: Befähigung der Führungsebene zur authentischen ESG-Kommunikation und -Modellierung, um Glaubwürdigkeit und Buy-in zu schaffen.\n• Incentive System Integration: Einbindung von ESG-KPIs in bestehende Performance-Management und Compensation-Systeme zur Sicherstellung nachhaltiger Behavior Change.\n• Cross-Functional Collaboration: Aufbau von ESG-Champions-Netzwerken über alle Unternehmensbereiche hinweg zur Förderung organischer ESG-Integration.\n• Continuous Improvement Culture: Etablierung von Feedback-Loops und Continuous Learning-Mechanismen, die ESG-Integration als natürlichen Teil der Unternehmensentwicklung verankern."
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
