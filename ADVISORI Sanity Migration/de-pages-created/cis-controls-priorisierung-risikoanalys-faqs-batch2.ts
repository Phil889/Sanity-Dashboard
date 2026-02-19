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
    console.log('Updating CIS Controls Priorisierung & Risikoanalyse page with C-Level FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-priorisierung-risikoanalys' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-priorisierung-risikoanalys" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir die CIS Controls Priorisierung nutzen, um unsere Cyber-Versicherungskonditionen zu optimieren und gleichzeitig Board-Level-Reporting zu verbessern?",
        answer: "Die strategische CIS Controls Priorisierung bietet Ihnen einen doppelten Vorteil: Sie optimiert nicht nur Ihre Cyber-Versicherungskonditionen erheblich, sondern schafft auch die Grundlage für ein professionelles, datengetriebenes Board-Level-Reporting. Dieser integrierte Ansatz positioniert Cyber-Security als strategischen Enabler statt als Kostenfaktor.\n\n🛡️ Optimierung der Cyber-Versicherungskonditionen:\n• Dokumentierte Risikoreduzierung: Versicherer bewerten nachweislich implementierte CIS Controls als signifikante Risikominderung und gewähren entsprechende Prämienreduktionen von 20-40%.\n• Höhere Deckungssummen: Strukturierte Controls-Implementierung ermöglicht Zugang zu höheren Deckungssummen bei gleichzeitig niedrigeren Selbstbehalten.\n• Erweiterte Deckungsschutz: Prioritäre Controls können Zugang zu spezialisierten Versicherungsprodukten wie Business Interruption Coverage und Reputationsschadensversicherung eröffnen.\n• Claim-Vorteil: Im Schadensfall beschleunigt dokumentierte Controls-Compliance die Schadenregulierung und reduziert Dispute-Risiken.\n\n📊 Board-Level-Reporting und Governance-Exzellenz:\n• Quantifizierte Risikometriken: Transformation technischer CIS Controls in geschäftsrelevante KPIs wie Cyber Value at Risk, Expected Annual Loss und Risk Appetite Alignment.\n• Benchmark-Positionierung: Vergleichende Darstellung Ihrer Cyber-Resilienz gegen Branchenstandards und Peer-Groups für strategische Entscheidungsfindung.\n• Investment-Rechtfertigung: Klare ROI-Nachweise für Security-Investitionen mit direkter Verknüpfung zu Geschäftszielen und Shareholder Value.\n• Predictive Analytics: Zukunftsorientierte Risikomodelle, die dem Board ermöglichen, proaktive strategische Entscheidungen zu treffen statt nur auf Incidents zu reagieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt die CIS Controls Priorisierung bei der Unterstützung unserer Digital-Transformation-Initiativen und wie können wir Synergien schaffen?",
        answer: "CIS Controls Priorisierung und Digital Transformation sind nicht separate Initiativen, sondern synergistische Prozesse, die sich gegenseitig verstärken können. Eine strategische Herangehensweise ermöglicht es, Security-by-Design in Ihre Digitalisierungsstrategie zu integrieren und gleichzeitig die Transformationsgeschwindigkeit zu beschleunigen statt zu hemmen.\n\n🚀 Strategische Synergien zwischen CIS Controls und Digital Transformation:\n• Security-as-Enabler: Priorisierte Controls schaffen das Vertrauensfundament für aggressive Digitalisierungsstrategien wie Cloud-First-Ansätze, IoT-Implementierungen und KI-Integration.\n• Data-Driven-Transformation: Die für CIS Controls erforderliche Datenqualität und -governance bildet das Fundament für Data Analytics, Machine Learning und Business Intelligence Initiativen.\n• API-Security-Framework: Strategische Implementierung von CIS Controls schafft robuste API-Security-Grundlagen für Ecosystem-Partnerschaften und Platform-Business-Models.\n• Agile-Security-Integration: DevSecOps-Prinzipien werden durch priorisierte Controls systematisch in agile Entwicklungsprozesse integriert.\n\n⚡ Beschleunigte Transformation durch strategische Security:\n• Risk-Informed-Innovation: Klare Security-Leitplanken ermöglichen schnellere Entscheidungen bei neuen Technologien und Geschäftsmodellen.\n• Compliance-Automatisierung: Einmal implementierte Controls reduzieren Compliance-Aufwände bei neuen digitalen Services und schaffen Kapazitäten für Innovation.\n• Vendor-Management-Exzellenz: Systematische Controls-Bewertung beschleunigt Due-Diligence-Prozesse bei Technology-Partnerschaften und M&A-Aktivitäten.\n• Competitive-Advantage: Während Wettbewerber zwischen Security und Innovation abwägen müssen, ermöglicht integrierte Controls-Priorisierung parallele Optimierung beider Dimensionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie kann ADVISORI uns dabei unterstützen, eine dynamische CIS Controls Priorisierung zu entwickeln, die sich an veränderte Bedrohungslandschaften anpasst?",
        answer: "Die Bedrohungslandschaft im Cyber-Security-Bereich verändert sich kontinuierlich und exponentiell. Statische Controls-Implementierungen werden schnell obsolet und können sogar kontraproduktiv werden. ADVISORI entwickelt mit Ihnen dynamische, adaptive Priorisierungsframeworks, die Ihre Security-Strategie kontinuierlich an neue Bedrohungen anpassen und Ihnen dauerhaften Wettbewerbsvorsprung sichern.\n\n🔄 Dynamische Anpassungsmechanismen für CIS Controls:\n• Threat-Intelligence-Integration: Automatische Einspeisung aktueller Bedrohungsdaten aus multiple Quellen (Dark Web Monitoring, Government Feeds, Industry Intelligence) in Priorisierungsalgorithmen.\n• Machine-Learning-Optimierung: Selbstlernende Systeme, die basierend auf Incident-Patterns und Attack-Trends die Controls-Gewichtung kontinuierlich optimieren.\n• Business-Context-Adaptation: Dynamische Anpassung der Priorisierung an veränderte Geschäftsmodelle, neue Märkte oder M&A-Aktivitäten.\n• Regulatory-Change-Management: Automatische Integration neuer Compliance-Anforderungen in die Controls-Priorisierung.\n\n🎯 ADVISORIs Adaptive-Security-Framework:\n• Continuous-Risk-Assessment: Implementierung von Real-Time-Risk-Monitoring-Systemen, die Veränderungen in der Bedrohungslandschaft sofort in Controls-Anpassungen übersetzen.\n• Scenario-Planning-Engines: Entwicklung multipler Zukunftsszenarien mit entsprechenden Controls-Strategien für verschiedene Threat-Evolution-Pfade.\n• Automated-Rebalancing: KI-gestützte Systeme, die Controls-Portfolios automatisch rebalancieren, wenn sich Risk-Return-Profile ändern.\n• Predictive-Threat-Modeling: Nutzung fortschrittlicher Analytics zur Vorhersage zukünftiger Bedrohungstrends und proaktiven Controls-Positionierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche kritischen Erfolgsfaktoren müssen C-Level-Führungskräfte bei der Implementierung einer risikobasierten CIS Controls Priorisierung beachten?",
        answer: "Der Erfolg einer risikobasierten CIS Controls Priorisierung hängt von strategischen Entscheidungen ab, die weit über die technische Implementierung hinausgehen. Als C-Level-Führungskraft müssen Sie ein Ökosystem schaffen, das nicht nur Security-Exzellenz fördert, sondern auch langfristige Geschäftswertsteigerung ermöglicht. Die richtige Balance zwischen Risikoappetit, Investitionseffizienz und strategischer Flexibilität ist entscheidend.\n\n🎯 Strategische Erfolgsfaktoren für C-Level-Führung:\n• Executive-Sponsorship: Aktive, sichtbare Unterstützung der Initiative durch CEO/CRO mit klarer Kommunikation der strategischen Bedeutung an alle Stakeholder.\n• Cross-Functional-Governance: Etablierung eines multidisziplinären Steering Committees mit Vertretern aus Risk, IT, Business Units und Legal für holistische Entscheidungsfindung.\n• Budget-Allocation-Strategy: Strategische Budgetierung, die sowohl Sofortmaßnahmen als auch langfristige Capability-Building berücksichtigt und Flexibilität für Anpassungen bietet.\n• Success-Metrics-Definition: Entwicklung aussagekräftiger KPIs, die sowohl Security-Outcomes als auch Business-Value messen und Board-Level-Reporting ermöglichen.\n\n⚙️ Operative Exzellenz-Faktoren:\n• Change-Management-Exzellenz: Strukturierte Begleitung der kulturellen Transformation mit gezielten Schulungen, Incentive-Anpassungen und Performance-Management-Integration.\n• Vendor-Partnership-Strategy: Strategische Auswahl von Technology-Partnern und Service-Providern, die nicht nur aktuelle Anforderungen erfüllen, sondern auch Future-Readiness unterstützen.\n• Continuous-Improvement-Culture: Etablierung einer Lernkultur, die aus Security-Incidents, Near-Misses und Threat-Intelligence kontinuierlich Optimierungen ableitet.\n• Stakeholder-Communication: Entwicklung differenzierter Kommunikationsstrategien für verschiedene Zielgruppen (Board, Mitarbeiter, Kunden, Regulatoren) zur Maximierung des Reputation-Benefits."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
