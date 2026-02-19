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
    console.log('Updating ESG Transformation page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-transformation' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-transformation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie unterstützt ADVISORI bei der Integration von ESG-Kriterien in unsere Geschäftsstrategie und welche Auswirkungen hat dies auf unsere Investitionsentscheidungen?",
        answer: "Die Integration von ESG-Kriterien in die Geschäftsstrategie erfordert einen systematischen Ansatz, der ESG-Überlegungen in alle strategischen Entscheidungsprozesse einbettet. ADVISORI unterstützt die C-Suite dabei, ESG nicht als Add-on, sondern als integralen Bestandteil der Unternehmensstrategie zu verstehen und zu implementieren, was zu fundierteren und zukunftsfähigeren Investitionsentscheidungen führt.\n\n🎯 Strategische ESG-Integration durch ADVISORI:\n• ESG-Materiality-Assessment: Identifikation der ESG-Faktoren, die den größten Einfluss auf Ihre Geschäftstätigkeit und Stakeholder haben\n• Strategy-ESG-Alignment: Verknüpfung von ESG-Zielen mit Ihren Kerngeschäftszielen und Wertschöpfungsmodellen\n• Risk-Return-Optimization: Integration von ESG-Risiken und -Chancen in Ihr Risikomanagement und Ihre Investitionsbewertung\n• Stakeholder-Value-Creation: Entwicklung von Strategien, die gleichzeitig Shareholder- und Stakeholder-Value maximieren\n\n💼 Auswirkungen auf Investitionsentscheidungen:\n• Enhanced Due Diligence: ESG-Faktoren werden systematisch in M&A-Bewertungen und Investitionsentscheidungen einbezogen\n• Long-term Value Creation: Fokus auf nachhaltige Wertschöpfung anstatt kurzfristige Gewinne\n• Risk Mitigation: Frühe Identifikation und Minderung von ESG-bedingten Risiken in Investitionsprojekten\n• Innovation Investment: Priorisierung von Investitionen in nachhaltige Technologien und Geschäftsmodelle\n• Portfolio Optimization: Systematische Bewertung des ESG-Profils bestehender und geplanter Investitionen zur Portfoliooptimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche regulatorischen Herausforderungen kommen auf uns zu und wie bereitet ADVISORI unser Unternehmen proaktiv auf die sich verschärfende ESG-Regulierung vor?",
        answer: "Die regulatorische Landschaft im ESG-Bereich entwickelt sich rasant, mit neuen Gesetzen und Standards, die erhebliche Auswirkungen auf Geschäftstätigkeit und Berichtspflichten haben. ADVISORI hilft Unternehmen dabei, sich proaktiv auf diese Veränderungen vorzubereiten und Compliance als Wettbewerbsvorteil zu nutzen, anstatt sie nur als Kostenfaktor zu betrachten.\n\n📋 Wesentliche regulatorische Entwicklungen:\n• EU-Taxonomie und CSRD (Corporate Sustainability Reporting Directive): Erweiterte Offenlegungspflichten für nachhaltigkeitsbezogene Informationen\n• SFDR (Sustainable Finance Disclosure Regulation): Anforderungen an die ESG-Berichterstattung für Finanzprodukte\n• Deutsche und europäische Lieferkettengesetze: Sorgfaltspflichten für Menschenrechte und Umweltschutz in globalen Lieferketten\n• SEC Climate Disclosure Rules: Neue Anforderungen für börsennotierte Unternehmen in den USA\n\n🛡️ ADVISORI's Proactive Compliance-Strategie:\n• Regulatory Monitoring und Early Warning: Kontinuierliche Überwachung regulatorischer Entwicklungen und frühzeitige Identifikation relevanter Änderungen\n• Gap-Analysis und Readiness-Assessment: Bewertung der aktuellen Compliance-Position und Identifikation von Handlungsbedarfen\n• Implementation Roadmaps: Entwicklung strukturierter Umsetzungspläne mit klaren Meilensteinen und Verantwortlichkeiten\n• Data Infrastructure Development: Aufbau der notwendigen Daten- und Berichtssysteme für effiziente Compliance\n• Training und Change Management: Befähigung Ihrer Teams zur erfolgreichen Umsetzung neuer regulatorischer Anforderungen\n• Competitive Advantage durch Excellence: Positionierung als Branchenführer durch überlegene ESG-Compliance und -Performance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir durch ESG-Transformation unsere Mitarbeitergewinnung und -bindung verbessern, und welche Rolle spielt dies für unsere Talentstrategiebewertung?",
        answer: "ESG-Transformation ist heute ein kritischer Faktor für Talent Acquisition und Retention, insbesondere bei Millennials und Gen Z, die zunehmend wertorientierte Arbeitgeber bevorzugen. ADVISORI unterstützt Unternehmen dabei, ihre ESG-Transformation als strategisches Talent-Differenzierungsmerkmal zu positionieren und dabei sowohl Mitarbeiterengagement als auch Geschäftsergebnisse zu verbessern.\n\n🌟 ESG als Talent-Magnet:\n• Purpose-driven Employer Branding: Entwicklung einer authentischen ESG-basierten Arbeitgebermarke, die Top-Talente anzieht\n• Values-based Recruitment: Integration von ESG-Werten in Rekrutierungsprozesse zur Anziehung gleichgesinnter Kandidaten\n• Employee Value Proposition Enhancement: Stärkung des Mitarbeiterwerteversprechens durch sinnstiftende Arbeit und Impact\n• Career Development through ESG: Schaffung von Karrierewegen und Entwicklungsmöglichkeiten im Nachhaltigkeitsbereich\n\n💪 Mitarbeiterbindung durch ESG-Engagement:\n• ESG-Integration in Performance Management: Verknüpfung von ESG-Zielen mit individuellen und Team-Zielen\n• Employee Resource Groups: Etablierung von Mitarbeitergruppen für verschiedene ESG-Initiativen und -Projekte\n• Continuous Learning und Development: Bereitstellung von ESG-bezogenen Weiterbildungs- und Entwicklungsmöglichkeiten\n• Recognition und Rewards: Anerkennung und Belohnung von Mitarbeitern für ESG-bezogene Beiträge und Innovationen\n\n📊 Impact auf Talent-Strategiebewertung:\n• Reduced Turnover Costs: Niedrigere Fluktuationsraten durch höhere Mitarbeiterzufriedenheit und -engagement\n• Enhanced Productivity: Motivierte Mitarbeiter, die sich mit den Unternehmenswerten identifizieren, zeigen höhere Produktivität\n• Innovation Catalyst: ESG-engagierte Teams treiben oft innovative Lösungen und Verbesserungen voran\n• Competitive Talent Advantage: Bessere Positionierung gegenüber Wettbewerbern bei der Gewinnung von Spitzenkräften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie gestaltet ADVISORI den Change Management-Prozess für ESG-Transformation und stellt sicher, dass alle Organisationsebenen erfolgreich mitgenommen werden?",
        answer: "Erfolgreiche ESG-Transformation erfordert einen ganzheitlichen Change Management-Ansatz, der kulturelle, strukturelle und prozessuale Veränderungen koordiniert. ADVISORI entwickelt maßgeschneiderte Change-Strategien, die alle Organisationsebenen einbeziehen und nachhaltigen Wandel sicherstellen, anstatt nur oberflächliche Anpassungen vorzunehmen.\n\n🔄 ADVISORI's Holistic Change Management-Framework:\n• Leadership Alignment und Sponsorship: Sicherstellung starker C-Level-Unterstützung und Vorbildfunktion für ESG-Transformation\n• Vision und Communication Strategy: Entwicklung einer klaren ESG-Vision und konsistenter Kommunikation über alle Kanäle\n• Cultural Assessment und Design: Analyse der bestehenden Unternehmenskultur und Design einer ESG-kompatiblen Zielkultur\n• Multi-level Engagement: Spezifische Change-Strategien für verschiedene Organisationsebenen und Stakeholder-Gruppen\n\n🎯 Ebenen-spezifische Change-Ansätze:\n• C-Suite und Senior Leadership: Strategic ESG Leadership Development und Executive Coaching für authentische ESG-Führung\n• Middle Management: Training zur ESG-Integration in tägliche Führungsaufgaben und Performance Management\n• Frontline Employees: Praxisorientierte ESG-Schulungen und Einbindung in ESG-Initiativen\n• Specialist Functions: Fachspezifische ESG-Qualifizierung in Bereichen wie Procurement, HR, Finance und Operations\n\n📈 Nachhaltige Verankerung und Monitoring:\n• Governance Integration: Einbettung von ESG-Verantwortlichkeiten in Organisationsstrukturen und Rollen\n• Incentive Alignment: Anpassung von Vergütungs- und Anreizsystemen zur Unterstützung der ESG-Transformation\n• Progress Tracking und Feedback: Kontinuierliches Monitoring des Change-Fortschritts und regelmäßige Anpassungen\n• Success Stories und Best Practices: Dokumentation und Kommunikation von Erfolgen zur Motivation und Inspiration\n• Continuous Improvement: Etablierung von Mechanismen für kontinuierliche Verbesserung und Anpassung der ESG-Praktiken"
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
