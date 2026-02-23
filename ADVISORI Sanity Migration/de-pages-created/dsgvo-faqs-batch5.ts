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
    console.log('Updating DSGVO page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Zukunftssicherheit unserer DSGVO-Compliance-Strategie bei wachsender Datenkomplexität und sich entwickelnden Geschäftsmodellen?",
        answer: "Moderne Unternehmen stehen vor exponentiell wachsender Datenkomplexität und sich schnell entwickelnden Geschäftsmodellen. ADVISORI entwickelt adaptive, skalierbare DSGVO-Compliance-Strategien, die automatisch mit Ihrem Unternehmenswachstum mitwachsen und sich kontinuierlich an neue Herausforderungen anpassen.\n\n🔄 Adaptive Compliance-Architekturen für dynamisches Wachstum:\n• Auto-Scaling-Privacy-Infrastructure: Implementierung von Cloud-nativen Privacy-Systemen, die automatisch mit Datenvolumen und -komplexität skalieren.\n• AI-Driven-Compliance-Evolution: Nutzung von Machine Learning für kontinuierliche Anpassung von Compliance-Prozessen an sich verändernde Geschäftsanforderungen.\n• Modular-Governance-Framework: Aufbau modularer Governance-Strukturen, die flexibel neue Geschäftsbereiche und Datenquellen integrieren können.\n• Predictive-Compliance-Planning: Entwicklung prädiktiver Modelle für antizipative Anpassung von Datenschutzmaßnahmen an geplante Geschäftsentwicklungen.\n\n🚀 Future-Ready Business Model Innovation:\n• Business-Model-Privacy-Integration: Beratung bei der datenschutzkonformen Gestaltung innovativer Geschäftsmodelle wie Platform Economy, Subscription Models und Data-as-a-Service.\n• Ecosystem-Privacy-Orchestration: Koordination von Datenschutz über komplexe Partner-Ökosysteme und Value-Chain-Netzwerke hinweg.\n• Innovation-Lab-Privacy-Testing: Etablierung von Privacy-Testing-Umgebungen für sichere Evaluation neuer Geschäftsideen ohne Compliance-Risiken.\n• Continuous-Learning-Compliance: Integration von kontinuierlichen Lernprozessen in Compliance-Systeme für automatische Anpassung an neue Herausforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung einer organisationsweiten Privacy-Culture und dem Change Management für nachhaltige DSGVO-Compliance?",
        answer: "Nachhaltige DSGVO-Compliance erfordert eine tiefgreifende Privacy-Culture, die über reine Prozess-Compliance hinausgeht. ADVISORI entwickelt umfassende Change-Management-Strategien, die Datenschutz als organisationale DNA etablieren und eine selbstregulierte, proaktive Privacy-Mentalität schaffen.\n\n🏢 Organizational Privacy Transformation:\n• Privacy-Culture-Assessment: Umfassende Bewertung der aktuellen Datenschutz-Kultur und Identifikation von Change-Management-Hebeln für kulturelle Transformation.\n• Leadership-Privacy-Champions: Entwicklung von Privacy-Leadership-Programmen zur Befähigung von Führungskräften als authentische Datenschutz-Vorbilder.\n• Cross-Functional-Privacy-Integration: Integration von Privacy-Awareness in alle Unternehmensfunktionen und -ebenen für ganzheitliche Kultur-Transformation.\n• Employee-Empowerment-Programs: Befähigung aller Mitarbeiter zu proaktiven Privacy-Entscheidungen durch Schulung, Tools und Entscheidungsframeworks.\n\n🎯 Behavioral Change und Sustainable Adoption:\n• Gamification-Privacy-Learning: Entwicklung interaktiver, gamifizierter Lernprogramme für nachhaltige Verankerung von Privacy-Prinzipien.\n• Privacy-Ambassador-Networks: Aufbau dezentraler Privacy-Ambassador-Netzwerke für peer-to-peer Knowledge Transfer und kulturelle Verstärkung.\n• Continuous-Feedback-Loops: Etablierung kontinuierlicher Feedback-Mechanismen für iterative Verbesserung der Privacy-Culture-Initiativen.\n• Success-Story-Amplification: Systematische Identifikation und Verstärkung von Privacy-Success-Stories für positive Kulturverstärkung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer robusten Crisis Communication und Incident Response-Strategie für DSGVO-relevante Datenschutzvorfälle?",
        answer: "Datenschutzvorfälle können verheerende Auswirkungen auf Reputation und Geschäft haben, wenn sie nicht professionell gemanagt werden. ADVISORI entwickelt umfassende Crisis Communication-Strategien, die nicht nur regulatorische Compliance sicherstellen, sondern auch Vertrauen schützen und sogar stärken können.\n\n🚨 Comprehensive Crisis Preparedness und Response Excellence:\n• Incident-Response-Playbooks: Entwicklung detaillierter, stakeholder-spezifischer Playbooks für verschiedene Datenschutz-Incident-Szenarien mit klaren Eskalationspfaden.\n• Crisis-Communication-Training: Spezialisierte Schulung der C-Suite und Kommunikationsteams in effektiver Krisenkommunikation für Datenschutzvorfälle.\n• Stakeholder-Mapping-Strategies: Umfassende Identifikation und Priorisierung aller relevanten Stakeholder mit maßgeschneiderten Kommunikationsstrategien.\n• Legal-PR-Coordination: Koordination zwischen Legal Counsel und PR-Teams für rechtskonforme aber effektive externe Kommunikation.\n\n⚡ Rapid Response und Trust Recovery:\n• 24/7-Crisis-Response-Capability: Sofortige Aktivierung von Crisis-Response-Teams mit direktem C-Level-Access für schnelle Entscheidungsfindung.\n• Transparent-Communication-Frameworks: Entwicklung von Transparenz-Strategien, die regulatorische Anforderungen erfüllen und Stakeholder-Vertrauen aufbauen.\n• Proactive-Stakeholder-Engagement: Proaktive Kommunikation mit Schlüssel-Stakeholdern vor öffentlicher Berichterstattung für Vertrauen und Kontrolle.\n• Post-Crisis-Trust-Rebuilding: Systematische Strategien für langfristige Vertrauenswiederherstellung und Reputations-Recovery nach Datenschutzvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristige Strategic Advisory-Partnerschaft bietet ADVISORI für kontinuierliche DSGVO-Excellence und wie wird die C-Suite als Privacy Leader positioniert?",
        answer: "ADVISORI etabliert langfristige strategische Partnerschaften, die über traditionelle Beratung hinausgehen und die C-Suite als Thought Leader in Privacy Excellence positionieren. Wir begleiten Sie dabei, Datenschutz von einer Compliance-Funktion zu einem strategischen Differenzierungsfaktor zu transformieren.\n\n🤝 Strategic C-Level Privacy Leadership Development:\n• Executive-Privacy-Advisory-Board: Etablierung regelmäßiger Strategic Advisory-Sessions mit der C-Suite für kontinuierliche Privacy-Strategy-Evolution.\n• Industry-Thought-Leadership-Development: Positionierung Ihrer Führungskräfte als Privacy-Thought-Leaders durch Speaking Opportunities, Publikationen und Brancheninitiativen.\n• Peer-CEO-Privacy-Networks: Zugang zu exklusiven CEO-Netzwerken für Privacy-Best-Practice-Sharing und strategischen Erfahrungsaustausch.\n• Innovation-Privacy-Roadmap-Planning: Langfristige Roadmap-Entwicklung für Integration von Privacy-Innovation in Ihre Unternehmensstrategie.\n\n🔮 Future-Oriented Strategic Partnership:\n• Emerging-Regulation-Advisory: Proaktive Beratung zu sich entwickelnden Datenschutzregulierungen und deren strategischen Implikationen für Ihr Unternehmen.\n• Privacy-Tech-Innovation-Access: Früher Zugang zu cutting-edge Privacy-Technologien und -Innovationen durch strategische Vendor-Beziehungen.\n• Global-Privacy-Trend-Intelligence: Kontinuierliche Überwachung globaler Privacy-Trends und deren Integration in Ihre strategische Planung.\n• M&A-Privacy-Strategy-Support: Strategische Unterstützung bei Akquisitionen und Fusionen mit Fokus auf Privacy-Value-Creation und -Protection."
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
