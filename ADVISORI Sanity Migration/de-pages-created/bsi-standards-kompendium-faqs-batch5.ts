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
    console.log('Updating BSI Standards Kompendium page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-standards-kompendium' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-standards-kompendium" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie positioniert ADVISORI das BSI Standards Kompendium als strategisches Instrument für internationale Marktexpansion und grenzüberschreitende Compliance?",
        answer: "Internationale Marktexpansion erfordert nicht nur lokale Compliance, sondern auch die Fähigkeit, höchste Sicherheitsstandards als Wettbewerbsvorteil zu nutzen. ADVISORI positioniert das BSI Standards Kompendium als Goldstandard für internationale IT-Sicherheit und ermöglicht Organisationen, ihre deutsche Sicherheitsexzellenz global zu monetarisieren.\n\n🌍 Global Market Access durch BSI Excellence:\n• International Standards Leadership: Positionierung der BSI-Standards-Konformität als Qualitätsmerkmal für internationale Märkte und Premium-Kundensegmente.\n• Cross-Border Compliance Strategy: Entwicklung von Compliance-Strategien, die BSI-Standards als Basis für internationale Regulatory-Anforderungen nutzen.\n• Global Trust Building: Nutzung der deutschen IT-Sicherheitsreputation für Vertrauensbildung bei internationalen Stakeholdern.\n• Competitive Differentiation: Etablierung der BSI-Konformität als einzigartigen Wettbewerbsvorteil in internationalen Ausschreibungen.\n\n🔐 International Regulatory Harmonization:\n• Multi-Jurisdictional Compliance: Integration von BSI-Standards mit internationalen Frameworks wie SOC 2, ISO 27001, und regionalen Anforderungen.\n• Regulatory Arbitrage: Strategische Nutzung der BSI-Standards-Führung für optimale Compliance-Positionierung in verschiedenen Märkten.\n• Cross-Border Data Protection: BSI-konforme Lösungen für internationale Datenübertragung und grenzüberschreitende Geschäftsprozesse.\n• Global Audit Efficiency: Entwicklung einheitlicher Audit-Ansätze, die BSI-Standards als Basis für internationale Zertifizierungen nutzen.\n\n🚀 Market Expansion Enablement:\n• International Partnership Qualification: BSI-Standards-Konformität als Qualifikationsmerkmal für strategische internationale Partnerschaften.\n• Global Customer Acquisition: Systematische Nutzung der BSI-Exzellenz für internationale Kundengewinnung und Marktpenetration.\n• Export Excellence: Positionierung BSI-konformer Produkte und Services als Premium-Angebote für internationale Märkte.\n• Innovation Leadership: Nutzung der BSI-Standards-Führung für Thought Leadership in internationalen Sicherheitsdiskussionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche spezifischen Herausforderungen adressiert ADVISORI bei der BSI Standards Kompendium-Implementierung für Familienunternehmen und Mittelstand?",
        answer: "Familienunternehmen und mittelständische Organisationen stehen vor einzigartigen Herausforderungen bei der BSI Standards Kompendium-Implementierung. Begrenzte Ressourcen, gewachsene Strukturen und spezifische Governance-Anforderungen erfordern maßgeschneiderte Ansätze. ADVISORI hat spezialisierte Lösungen für diese wichtige Unternehmensgruppe entwickelt.\n\n🏠 Familienunternehmen-spezifische Herausforderungen:\n• Resource Optimization: Effiziente Implementierung des BSI Standards Kompendiums mit begrenzten personellen und finanziellen Ressourcen.\n• Generational Integration: Harmonisierung verschiedener Generationen-Perspektiven auf IT-Sicherheit und Technologie-Adoption.\n• Governance Adaptation: Anpassung traditioneller Familienunternehmen-Governance an moderne BSI-Standards-Anforderungen.\n• Cultural Preservation: Bewahrung der Unternehmenskultur bei gleichzeitiger Modernisierung der Sicherheitsarchitektur.\n\n🎯 Mittelstand-optimierte Implementation Strategy:\n• Scalable Implementation: Entwicklung skalierbarer BSI-Standards-Ansätze, die mit dem Unternehmenswachstum mitwachsen.\n• Cost-Effective Excellence: Maximierung der BSI-Compliance bei optimaler Kosten-Nutzen-Relation für mittelständische Budgets.\n• Pragmatic Approach: Fokus auf praktische, umsetzbare Lösungen ohne unnötige Komplexität oder Bürokratie.\n• Regional Ecosystem Integration: Integration in regionale Wirtschaftsökosysteme und Netzwerke für optimale Synergien.\n\n💪 Competitive Advantage für KMU:\n• David vs. Goliath Strategy: Nutzung überlegener BSI-Standards-Konformität für Wettbewerb mit Großunternehmen.\n• Niche Market Leadership: Positionierung als Sicherheitsführer in spezialisierten Marktnischen durch BSI-Exzellenz.\n• Customer Trust Premium: Monetarisierung der BSI-Konformität für Premium-Pricing und Kundenbindung.\n• Partnership Qualification: BSI-Standards als Qualifikation für strategische Partnerschaften mit Großunternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie integriert ADVISORI Behavioral Security und Human Factors in die BSI Standards Kompendium-Implementierung für maximale organisatorische Resilienz?",
        answer: "Die beste technische BSI-Standards-Implementierung ist nur so stark wie ihr schwächstes Glied - der Mensch. ADVISORI verfolgt einen ganzheitlichen Ansatz, der menschliche Faktoren, Verhaltenspsychologie und organisatorische Kultur systematisch in die BSI Standards Kompendium-Implementierung integriert.\n\n🧠 Human-Centric Security Excellence:\n• Behavioral Risk Assessment: Umfassende Analyse menschlicher Risikofaktoren und deren Integration in die BSI-Standards-konforme Risikobewertung.\n• Security Culture Transformation: Systematische Entwicklung einer Sicherheitskultur, die BSI-Prinzipien in der DNA der Organisation verankert.\n• Cognitive Security Training: Psychologisch fundierte Schulungsprogramme, die nachhaltige Verhaltensänderungen bewirken.\n• Human Firewall Development: Aufbau der Mitarbeiter als aktive Komponente der BSI-konformen Sicherheitsarchitektur.\n\n🎯 Organizational Resilience Building:\n• Cultural Change Management: Professionelle Begleitung des kulturellen Wandels hin zu einer BSI-Standards-orientierten Organisation.\n• Leadership Engagement: Strategien zur nachhaltigen Einbindung der Führungsebene in die Sicherheitstransformation.\n• Employee Empowerment: Befähigung aller Mitarbeiter zur aktiven Teilnahme an der BSI-konformen Sicherheitsarchitektur.\n• Continuous Reinforcement: Entwicklung von Verstärkungsmechanismen für nachhaltiges sicherheitsbewusstes Verhalten.\n\n🔄 Adaptive Security Behavior:\n• Incident Learning Integration: Systematische Integration von Lessons Learned aus Sicherheitsvorfällen in Verhaltenstraining.\n• Threat Awareness Programs: Kontinuierliche Sensibilisierung für aktuelle Bedrohungen und entsprechende Verhaltensanpassungen.\n• Social Engineering Defense: Spezialisierte Programme zur Abwehr von Social Engineering-Angriffen durch Verhaltensschulung.\n• Security Champion Networks: Aufbau interner Netzwerke von Sicherheitsbotschaftern für peer-to-peer Reinforcement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Zukunftsvision verfolgt ADVISORI für die Evolution des BSI Standards Kompendiums und wie bereiten wir Organisationen auf die nächste Generation der IT-Sicherheit vor?",
        answer: "Die IT-Sicherheitslandschaft entwickelt sich exponentiell weiter, und das BSI Standards Kompendium muss sich kontinuierlich anpassen. ADVISORI entwickelt zukunftsorientierte Strategien, die Organisationen nicht nur für heutige BSI-Standards optimieren, sondern auch für die nächste Generation der Cybersicherheit vorbereiten.\n\n🔮 Future-Ready BSI Standards Evolution:\n• Next-Generation Standards Anticipation: Proaktive Analyse und Vorbereitung auf zukünftige BSI-Standards-Entwicklungen und deren Implementierung.\n• Emerging Technology Integration: Systematische Integration von Zukunftstechnologien wie Quantum Computing, AI/ML, und Metaverse in BSI-konforme Architekturen.\n• Adaptive Architecture Design: Entwicklung flexibler Sicherheitsarchitekturen, die sich schnell an neue BSI-Standards anpassen können.\n• Innovation Leadership: Positionierung als Thought Leader für die Evolution der deutschen und europäischen IT-Sicherheitsstandards.\n\n🚀 Organizational Future-Proofing:\n• Dynamic Capability Building: Aufbau organisatorischer Fähigkeiten für kontinuierliche Anpassung an sich entwickelnde BSI-Standards.\n• Predictive Security Management: Implementierung vorausschauender Sicherheitsmanagement-Ansätze basierend auf BSI-Prinzipien.\n• Ecosystem Evolution: Vorbereitung auf die Evolution des gesamten Cybersecurity-Ökosystems und dessen Auswirkungen auf BSI-Standards.\n• Strategic Foresight: Entwicklung strategischer Vorausschau-Kapazitäten für langfristige BSI-Compliance-Planung.\n\n🌟 Vision 2030+ für BSI Excellence:\n• Autonomous Security Operations: Vision selbstständiger, BSI-konformer Sicherheitsoperationen durch fortgeschrittene Automatisierung.\n• Quantum-Safe BSI Implementation: Vollständige Vorbereitung auf quantum-sichere BSI-Standards der Zukunft.\n• Global Standards Leadership: Positionierung deutscher BSI-Standards als globaler Referenzpunkt für IT-Sicherheitsexzellenz.\n• Sustainable Security Excellence: Integration von Nachhaltigkeitsprinzipien in zukünftige BSI-Standards-Entwicklungen."
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
