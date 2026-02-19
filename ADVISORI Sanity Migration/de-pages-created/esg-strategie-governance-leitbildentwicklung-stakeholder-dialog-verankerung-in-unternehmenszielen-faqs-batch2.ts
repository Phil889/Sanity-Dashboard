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
    console.log('Updating ESG Strategie & Governance page with C-Level FAQs batch 2 (German)...')
    
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
        question: "Wie können wir ein wirksames ESG-Leitbild entwickeln, das nicht nur Compliance erfüllt, sondern auch Mitarbeiterengagement und Kundenvertrauen nachhaltig stärkt?",
        answer: "Ein authentisches ESG-Leitbild fungiert als strategischer Kompass, der über bloße Compliance-Statements hinausgeht und zum Kern der Unternehmensidentität wird. Es muss sowohl nach innen als auch nach außen überzeugen und als Grundlage für konkrete Entscheidungen und Handlungen dienen. Die Entwicklung erfordert einen partizipativen Ansatz, der verschiedene Stakeholder-Perspektiven integriert.\n\n🎯 Schlüsselelemente eines wirkungsvollen ESG-Leitbilds:\n• Authentizität und Glaubwürdigkeit: Das Leitbild muss die tatsächlichen Werte und Praktiken des Unternehmens widerspiegeln und nicht nur aspirative Statements enthalten.\n• Strategische Relevanz: Direkte Verbindung zu Geschäftsmodell, Wertschöpfungskette und langfristigen Unternehmenszielen.\n• Stakeholder-Zentrierung: Berücksichtigung der Erwartungen und Bedürfnisse aller relevanten Anspruchsgruppen, von Mitarbeitern über Kunden bis zu Investoren.\n• Messbarkeit und Konkretheit: Übersetzung abstrakter Werte in konkrete, messbare Ziele und Handlungsfelder.\n\n🛠️ ADVISORIs systematischer Leitbildentwicklungsprozess:\n• Stakeholder-Journey-Mapping: Systematische Analyse der ESG-Erwartungen verschiedener Stakeholder-Gruppen durch Surveys, Interviews und Workshops.\n• Werte-Alignment-Assessment: Bewertung der Übereinstimmung zwischen bestehenden Unternehmenswerten und ESG-Anforderungen zur Identifikation von Synergien und Spannungsfeldern.\n• Co-Creation-Workshops: Moderierte Sessions mit Führungskräften, Mitarbeitern und externen Stakeholdern zur gemeinsamen Entwicklung authentischer ESG-Werte.\n• Implementation Roadmap: Entwicklung konkreter Aktionspläne zur Verankerung des Leitbilds in Organisationsstrukturen, Prozesse und Entscheidungskriterien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche digitalen Tools und Technologien sollten wir für effektives ESG-Management implementieren, und wie können wir dabei Kosten-Nutzen-Verhältnis optimieren?",
        answer: "Die Digitalisierung des ESG-Managements ist entscheidend für Skalierbarkeit, Transparenz und Effizienz. Moderne ESG-Technology-Stacks ermöglichen nicht nur bessere Datenqualität und -geschwindigkeit, sondern schaffen auch neue Möglichkeiten für vorausschauende Analyse und automatisierte Steuerung. Die Technologie-Investition sollte strategisch geplant und stufenweise implementiert werden.\n\n💻 Kern-Technologien für ESG-Excellence:\n• ESG-Data-Management-Plattformen: Zentrale Systeme zur Sammlung, Validierung und Aggregation von ESG-Daten aus verschiedenen Quellen mit automatisierten Qualitätskontrollen.\n• Real-time-Monitoring-Dashboards: Interaktive Visualisierungen für kontinuierliche Überwachung von ESG-KPIs mit Alarmfunktionen bei Zielabweichungen.\n• AI-powered Analytics: Machine Learning Algorithmen zur Mustererkennung, Trend-Prognose und automatisierten Risiko-Identifikation in ESG-Daten.\n• Blockchain für Supply Chain Transparency: Unveränderliche Dokumentation von Nachhaltigkeits-Credentials entlang der Wertschöpfungskette.\n\n🚀 ADVISORIs Technology-Implementation-Strategie:\n• Technology Readiness Assessment: Bewertung der bestehenden IT-Infrastruktur und Identifikation von Integrationsmöglichkeiten für ESG-Tools.\n• ROI-basierte Tool-Auswahl: Systematische Evaluierung verfügbarer ESG-Technologien nach Funktionalität, Kosten und Integrationsfähigkeit.\n• Agile Implementation: Schrittweise Einführung beginnend mit Quick Wins und gradueller Ausweitung auf komplexere Anwendungsfälle.\n• Change Management und Training: Umfassende Schulungsprogramme zur Sicherstellung effektiver Tool-Adoption und Nutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir ESG-Risiken proaktiv identifizieren und in unser Enterprise Risk Management integrieren, ohne bestehende Risikoprozesse zu überkomplizieren?",
        answer: "ESG-Risiken unterscheiden sich fundamental von traditionellen Geschäftsrisiken durch ihre oft nicht-linearen Auswirkungen, längeren Zeithorizonte und komplexen Interdependenzen. Eine effektive Integration in bestehende Risk-Management-Frameworks erfordert sowohl methodische Anpassungen als auch kulturelle Veränderungen in der Risikowahrnehmung und -bewertung.\n\n⚠️ Charakteristika von ESG-Risiken:\n• Non-lineare Auswirkungen: ESG-Risiken können abrupt und disproportional auftreten, wie bei Klimaereignissen oder sozialen Bewegungen.\n• Langfristige Zeithorizonte: Viele ESG-Risiken entwickeln sich über Jahre oder Jahrzehnte, was traditionelle Risikobewertungsmethoden herausfordert.\n• Systemische Vernetzung: ESG-Risiken sind oft miteinander und mit anderen Risikokategorien verflochten und können Kaskadeneffekte auslösen.\n• Stakeholder-Sentiment-Abhängigkeit: Die Materialisierung von ESG-Risiken hängt stark von sich ändernden gesellschaftlichen Erwartungen ab.\n\n🔍 ADVISORIs Framework für ESG-Risk-Integration:\n• Extended Risk Universe Mapping: Systematische Erweiterung bestehender Risikokataloge um ESG-spezifische Risikokategorien mit klaren Definitionen und Abgrenzungen.\n• Scenario-based Risk Assessment: Entwicklung von ESG-Stress-Szenarien, die extreme aber plausible Ereignisse modellieren und deren Auswirkungen quantifizieren.\n• Dynamic Risk Monitoring: Implementierung von Frühwarnsystemen, die ESG-relevante Signale aus verschiedenen Datenquellen kontinuierlich überwachen.\n• Integrated Risk Reporting: Anpassung bestehender Risk-Reports zur einheitlichen Darstellung traditioneller und ESG-Risiken mit konsistenten Bewertungsskalen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt ESG in unserer Kapitalallokation und Investitionsentscheidungen, und wie können wir dies systematisch operationalisieren?",
        answer: "ESG-Integration in Kapitalallokation und Investitionsentscheidungen transformiert diese von rein finanziellen zu ganzheitlichen Bewertungsprozessen, die langfristige Wertschöpfung und Risikominimierung optimieren. Dies erfordert neue Bewertungsmethoden, angepasste Entscheidungskriterien und veränderte Governance-Prozesse für Investitionen.\n\n📊 ESG-Dimensionen in der Kapitalallokation:\n• ESG-adjusted ROI Calculations: Integration von ESG-Faktoren in traditionelle Renditeberechnungen durch Adjustierung für Nachhaltigkeitsrisiken und -chancen.\n• Future-proofing Investments: Bewertung von Investitionen hinsichtlich ihrer Resilienz gegenüber klimatischen, sozialen und regulatorischen Veränderungen.\n• Stakeholder Value Creation: Erweiterung der Wertschöpfungsmessung über Shareholder Value hinaus auf Auswirkungen auf Kunden, Mitarbeiter und Gesellschaft.\n• Portfolio-level ESG Optimization: Betrachtung des Gesamtportfolios hinsichtlich ESG-Performance und strategischer Ausrichtung.\n\n⚙️ ADVISORIs Operationalisierungs-Framework:\n• ESG-Investment-Criteria-Integration: Entwicklung spezifischer ESG-Bewertungskriterien für verschiedene Investitionskategorien mit gewichteten Scoring-Modellen.\n• Decision-Gate-Enhancement: Ergänzung bestehender Investment-Committee-Prozesse um systematische ESG-Reviews mit definierten Mindeststandards.\n• ESG-Due-Diligence-Checklists: Strukturierte Prüflisten für systematische ESG-Bewertung von Investitionsmöglichkeiten und -partnern.\n• Performance-Tracking-Integration: Erweiterung von Investment-Monitoring um ESG-KPIs mit regelmäßiger Berichterstattung an Management und Board."
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
