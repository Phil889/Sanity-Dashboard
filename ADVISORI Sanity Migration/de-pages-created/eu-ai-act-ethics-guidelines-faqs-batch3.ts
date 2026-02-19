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
    console.log('Updating EU AI Act Ethics Guidelines page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ethics-guidelines' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ethics-guidelines" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI Bias und Fairness-Herausforderungen im Rahmen der EU AI Act Ethik-Richtlinien und welche proaktiven Strategien werden für die C-Suite entwickelt?",
        answer: "Bias und Fairness stellen für C-Level-Führungskräfte zentrale ethische Herausforderungen dar, die direkte Auswirkungen auf Geschäftsrisiken, Marktreputation und regulatorische Compliance haben. ADVISORI entwickelt comprehensive Anti-Bias-Strategien, die nicht nur EU AI Act-Anforderungen erfüllen, sondern auch Fairness als strategischen Wettbewerbsvorteil und Vertrauensbildner etablieren.\n\n🎯 Strategic Bias-Mitigation Excellence:\n• Systematic Bias-Detection: Implementierung fortschrittlicher Bias-Detection-Systeme, die sowohl offensichtliche als auch subtile Formen von Diskriminierung in KI-Systemen identifizieren und kontinuierlich überwachen.\n• Proactive Fairness-Design: Entwicklung von Fairness-by-Design-Ansätzen, die ethische Prinzipien von Beginn der KI-Entwicklung integrieren und dabei Business-Objectives optimal unterstützen.\n• Multi-Dimensional Fairness-Assessment: Aufbau umfassender Bewertungsframeworks, die verschiedene Fairness-Dimensionen (demografische Parität, Chancengleichheit, individuelle Fairness) systematisch evaluieren und optimieren.\n• Stakeholder-Inclusive Fairness-Definition: Entwicklung partizipativer Prozesse zur Definition von Fairness-Standards, die verschiedene Stakeholder-Perspektiven einbeziehen und gesellschaftliche Akzeptanz maximieren.\n\n⚖️ Der ADVISORI Fairness-Excellence-Ansatz:\n• Data-Quality-for-Fairness: Implementierung von Data-Governance-Strategien, die Datenqualität und -repräsentativität sicherstellen und systematische Verzerrungen in Trainingsdaten eliminieren.\n• Algorithmic-Transparency-for-Trust: Aufbau von Erklärbarkeits- und Transparenz-Mechanismen, die Fairness-Entscheidungen nachvollziehbar machen und Stakeholder-Vertrauen aufbauen.\n• Continuous Fairness-Monitoring: Etablierung von Real-Time-Monitoring-Systemen, die Fairness-Performance kontinuierlich überwachen und automatische Anpassungen bei Bias-Detection auslösen.\n• Business-Value-through-Fairness: Transformation von Fairness-Investitionen in messbare Business-Returns durch verbesserte Kundenbeziehungen, reduzierte regulatorische Risiken und Premium-Market-Positioning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt Privacy-by-Design in ADVISORI's EU AI Act Ethik-Implementierung und wie wird Datenschutz als strategischer Enabler für die C-Suite positioniert?",
        answer: "Privacy-by-Design ist für C-Level-Führungskräfte ein kritischer Erfolgsfaktor, der Datenschutz-Compliance mit strategischen Geschäftszielen verbindet. ADVISORI entwickelt Privacy-Frameworks, die nicht nur EU AI Act und DSGVO-Anforderungen erfüllen, sondern Datenschutz als Vertrauensbildner und Competitive-Advantage etablieren und dabei Innovation beschleunigen statt behindern.\n\n🔒 Strategic Privacy Excellence:\n• Privacy-as-Innovation-Enabler: Entwicklung von Privacy-Frameworks, die KI-Innovation durch strukturierte Datenschutz-Governance beschleunigen und dabei höchste Compliance-Standards aufrechterhalten.\n• Data-Minimization-for-Efficiency: Implementierung von Data-Minimization-Strategien, die nicht nur Privacy-Risiken reduzieren, sondern auch operative Effizienz durch fokussierte Datennutzung steigern.\n• Consent-Management-Excellence: Aufbau sophistizierter Consent-Management-Systeme, die Nutzer-Autonomie respektieren und gleichzeitig Business-Value durch transparente Datennutzung maximieren.\n• Technical Privacy-Measures: Integration fortschrittlicher Technologien wie Differential Privacy, Federated Learning und Homomorphic Encryption zur Realisierung von Privacy-preserving AI-Innovation.\n\n🛡️ Der ADVISORI Privacy-Strategy-Ansatz:\n• Risk-Based Privacy-Engineering: Entwicklung risikobasierter Privacy-Engineering-Prozesse, die Datenschutz-Maßnahmen an Business-Kritikalität und Risiko-Exposition anpassen.\n• Privacy-ROI-Optimization: Transformation von Privacy-Investitionen in quantifizierbare Business-Returns durch verbesserte Customer-Trust, reduzierte Compliance-Kosten und Premium-Positioning.\n• Cross-Border Privacy-Harmonization: Aufbau globaler Privacy-Frameworks, die internationale Datenschutz-Standards harmonisieren und globale Business-Expansion ermöglichen.\n• Privacy-Culture-Integration: Etablierung von Privacy-aware Unternehmenskulturen, die Datenschutz als natürlichen Bestandteil aller Geschäftsprozesse und Entscheidungen verankern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie implementiert ADVISORI Explainability und Interpretability-Anforderungen des EU AI Acts und welche strategischen Vorteile entstehen für die C-Suite durch transparente KI-Systeme?",
        answer: "Explainability und Interpretability sind für C-Level-Entscheidungsträger zentrale Faktoren für Stakeholder-Vertrauen und regulatorische Compliance. ADVISORI entwickelt comprehensive Explainability-Frameworks, die nicht nur EU AI Act-Anforderungen erfüllen, sondern transparente KI als strategischen Differenzierungsfaktor und Vertrauensbildner etablieren und dabei operative Exzellenz steigern.\n\n🔍 Strategic Explainability Excellence:\n• Business-Relevant Explanations: Entwicklung von Erklärungsansätzen, die technische Komplexität in geschäftsrelevante Insights transformieren und C-Level-Entscheidungsfindung durch verständliche KI-Outputs unterstützen.\n• Stakeholder-Specific Transparency: Aufbau adaptiver Erklärungssysteme, die verschiedenen Stakeholder-Gruppen (Kunden, Regulatoren, Mitarbeiter) angemessene Transparenz-Level bieten ohne sensible Informationen preiszugeben.\n• Real-Time Explainability: Implementierung von Echtzeit-Erklärungssystemen, die KI-Entscheidungen unmittelbar nachvollziehbar machen und dabei Entscheidungsgeschwindigkeit aufrechterhalten.\n• Predictive Explanation-Quality: Entwicklung von Metriken zur Bewertung von Erklärungsqualität und kontinuierliche Optimierung von Explainability-Performance für maximale Stakeholder-Acceptance.\n\n💡 Der ADVISORI Transparency-Value-Ansatz:\n• Trust-through-Transparency: Transformation von Explainability-Investitionen in messbare Vertrauensgewinne bei Kunden, Partnern und Investoren, die sich in verbesserten Geschäftsbeziehungen manifestieren.\n• Regulatory-Confidence-Building: Nutzung überlegener Explainability zur Etablierung von Thought Leadership bei Regulatoren und Aufbau bevorzugter Stakeholder-Beziehungen.\n• Decision-Quality-Enhancement: Leveraging von KI-Erklärungen zur Verbesserung menschlicher Entscheidungsfindung und Steigerung operativer Exzellenz durch bessere Human-AI-Collaboration.\n• Innovation-Acceleration-through-Understanding: Nutzung von Explainability-Insights zur Beschleunigung KI-Innovation durch besseres Verständnis von System-Performance und Optimierungspotenzialen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Change-Management-Strategien entwickelt ADVISORI für die erfolgreiche Transformation zu ethischer KI-Governance und wie wird Organisationskultur als strategischer Erfolgsfaktor aktiviert?",
        answer: "Erfolgreiche ethische KI-Transformation erfordert für C-Level-Führungskräfte sophisticated Change-Management-Strategien, die technische Implementierung mit kultureller Transformation verbinden. ADVISORI entwickelt holistische Transformations-Frameworks, die nicht nur EU AI Act-Compliance sicherstellen, sondern ethische Excellence als nachhaltigen Competitive-Advantage in der Organisationskultur verankern.\n\n🔄 Strategic Change-Management Excellence:\n• Culture-First Ethics-Implementation: Entwicklung von Change-Strategien, die ethische Prinzipien zunächst in der Unternehmenskultur verankern und dann in Prozesse und Systeme überführen für nachhaltige Transformation.\n• Leadership-Driven Ethics-Transformation: Aufbau von Leadership-Programmen, die C-Level- und Senior-Management als Ethics-Champions etablieren und Top-Down-Commitment für ethische Excellence schaffen.\n• Employee-Engagement-for-Ethics: Implementierung partizipativer Ansätze, die Mitarbeiter aktiv in ethische Transformation einbeziehen und Bottom-Up-Innovation für ethische Lösungen fördern.\n• Cross-Functional Ethics-Integration: Entwicklung von Change-Prozessen, die ethische Prinzipien nahtlos in alle Geschäftsfunktionen integrieren ohne Disruption bestehender Arbeitsabläufe.\n\n🚀 Der ADVISORI Transformation-Acceleration-Ansatz:\n• Behavioral-Economics-for-Ethics: Nutzung verhaltensökonomischer Insights zur Gestaltung von Incentive-Strukturen, die ethisches Verhalten natürlich fördern und dabei Business-Performance steigern.\n• Success-Story-Amplification: Aufbau von internen Kommunikationsstrategien, die ethische Erfolgsgeschichten sichtbar machen und Momentum für weitere Transformation schaffen.\n• Continuous-Learning-Culture: Etablierung von Learning-Ecosystems, die kontinuierliche ethische Weiterentwicklung fördern und Anpassungsfähigkeit an evolvierende ethische Standards gewährleisten.\n• Performance-Integration-for-Sustainability: Integration ethischer Performance in Bewertungs- und Incentivierungs-Systeme zur nachhaltigen Verankerung ethischer Excellence in der Organisationsperformance."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
