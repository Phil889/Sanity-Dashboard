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
    console.log('Updating CRA Security by Default page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gestaltet ADVISORI die organisatorische Transformation hin zu einer Security by Default Kultur und welche Change Management Strategien sind für die erfolgreiche C-Level Adoption entscheidend?",
        answer: "Die Transformation zu einer Security by Default Kultur erfordert einen tiefgreifenden organisatorischen Wandel, der weit über technische Implementierungen hinausgeht. Für die C-Suite bedeutet dies eine strategische Neuausrichtung der Unternehmenskultur, Prozesse und Verantwortlichkeiten. ADVISORI entwickelt maßgeschneiderte Change Management Strategien, die eine nachhaltige Verankerung von Security by Default Prinzipien in der DNA Ihres Unternehmens gewährleisten.\n\n🔄 Strategische Change Management Dimensionen:\n• Leadership Alignment und Executive Sponsorship: Aufbau einer starken C-Level Allianz, die Security by Default als strategische Priorität kommuniziert und durch konsistente Entscheidungen und Ressourcenallokation unterstützt.\n• Cultural Transformation Roadmap: Entwicklung einer systematischen Roadmap zur schrittweisen Einführung von Security by Default Denkweisen und Praktiken in alle Unternehmensbereiche.\n• Cross-functional Collaboration Framework: Etablierung neuer Arbeitsweisen zwischen IT, Produktentwicklung, Legal, Compliance und Business Units zur integrierten Security by Default Umsetzung.\n• Performance Management Integration: Anpassung von KPIs, Incentive-Systemen und Bewertungskriterien zur Förderung sicherheitsbewussten Verhaltens auf allen Organisationsebenen.\n\n🎯 ADVISORI Change Enablement Ansatz:\n• Executive Education Programme: Speziell entwickelte C-Level Schulungsprogramme zu CRA-Anforderungen, Security by Default Prinzipien und deren strategischen Auswirkungen.\n• Security Champions Network: Aufbau eines organisationsweiten Netzwerks von Security Advocates, die als Multiplikatoren und Change Agents fungieren.\n• Communication und Storytelling Strategien: Entwicklung überzeugender Narrative, die Security by Default als Enabler für Innovation und Wettbewerbsvorteile positionieren.\n• Quick Wins und Momentum Building: Identifikation und Umsetzung schnell realisierbarer Security by Default Erfolge zur Demonstration des Wertes und Aufbau von Unterstützung.\n\n📊 Messung und Optimierung der Cultural Transformation:\n• Security Culture Maturity Assessments mit regelmäßigen Fortschrittsmessungen\n• Employee Engagement Tracking zur Bewertung der Akzeptanz und des Verständnisses\n• Behavioral Analytics zur Identifikation von Adoption Patterns und Verbesserungspotenzialen\n• Continuous Feedback Loops zwischen Leadership und operativen Teams zur Feinjustierung der Change Strategie"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Security by Default bei der digitalen Transformation und wie positioniert ADVISORI dies als strategischen Enabler für neue Geschäftsmodelle?",
        answer: "Security by Default ist nicht nur ein regulatorisches Erfordernis, sondern ein fundamentaler Baustein erfolgreicher digitaler Transformation. Für C-Level-Entscheider eröffnet eine proaktive Security by Default Strategie neue Möglichkeiten für innovative Geschäftsmodelle, sichere Digitalisierung und nachhaltiges Wachstum. ADVISORI positioniert Security by Default als strategischen Katalysator für digitale Excellence und Marktführerschaft.\n\n🚀 Security by Default als Digital Transformation Accelerator:\n• Vertrauensbasierte Geschäftsmodelle: Sichere Standardkonfigurationen ermöglichen neue digitale Services und Plattformen, die auf dem Vertrauen der Nutzer in die inhärente Sicherheit aufbauen.\n• IoT und Edge Computing Enablement: Security by Default schafft die Grundlage für sichere IoT-Deployments und Edge-Computing-Szenarien, die ohne robuste Grundsicherheit nicht umsetzbar wären.\n• API Economy und Ecosystem Integration: Sichere Default-Konfigurationen für APIs und Integrationsschnittstellen ermöglichen den Aufbau vertrauensvoller digitaler Ökosysteme.\n• Data Monetization Opportunities: Security by Default schafft die Vertrauensbasis für datengetriebene Geschäftsmodelle und ermöglicht neue Formen der Datenmonetarisierung.\n\n💡 Innovation und Wettbewerbsvorteile durch Security Excellence:\n• First-Mover Advantage in regulierten Märkten: Frühe CRA-Compliance durch Security by Default verschafft Wettbewerbsvorteile beim Marktzugang und bei Kundenakquisition.\n• Premium Positioning und Value Creation: Security by Default wird zum Qualitätsmerkmal und ermöglicht Premium-Pricing-Strategien für sichere Produkte und Services.\n• Partnership und M&A Opportunities: Starke Security by Default Capabilities machen Unternehmen zu attraktiven Partnern und Akquisitionszielen.\n• Regulatory Sandbox Zugang: Nachweisbare Security by Default Fähigkeiten können den Zugang zu regulatorischen Sandboxes und Pilotprogrammen erleichtern.\n\n🔧 ADVISORI Digital Transformation Integration:\n• Security-First Architecture Design für neue digitale Produkte und Services\n• DevSecOps Integration zur nahtlosen Einbindung von Security by Default in Entwicklungsprozesse\n• Cloud Security by Default Strategien für sichere Cloud-native Transformationen\n• Zero Trust Architecture Implementation als Basis für moderne, sichere Unternehmensarchitekturen\n\n📈 Business Case Development für Security-enabled Innovation:\n• ROI-Modellierung für Security by Default Investitionen in digitale Transformationsprojekte\n• Risk-adjusted Businessplanung mit Security als strategischem Differentiator\n• Market Opportunity Assessment für Security-focused Geschäftsmodelle\n• Investor Relations Support zur Kommunikation des strategischen Wertes von Security by Default"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert ADVISORI die Supply Chain Security Aspekte von Security by Default und welche strategischen Implikationen hat dies für die C-Suite in globalen Wertschöpfungsketten?",
        answer: "Supply Chain Security ist eine kritische Dimension von Security by Default, die für C-Level-Entscheider komplexe strategische Herausforderungen in globalen Wertschöpfungsketten mit sich bringt. Die CRA-Anforderungen erstrecken sich über die gesamte Lieferkette und erfordern ein fundamentales Umdenken in der Lieferantenbeziehung und Risikomanagement. ADVISORI entwickelt ganzheitliche Supply Chain Security Strategien, die sowohl Compliance als auch operative Exzellenz gewährleisten.\n\n🌐 Strategische Supply Chain Transformation:\n• Vendor Security Assessment und Due Diligence: Etablierung umfassender Bewertungsprozesse für Lieferanten hinsichtlich ihrer Security by Default Fähigkeiten und CRA-Compliance.\n• Contractual Security Requirements: Entwicklung rechtlich bindender Vertragsklauseln, die Security by Default Standards entlang der gesamten Lieferkette durchsetzen.\n• Supply Chain Visibility und Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung der Sicherheitsperformance und Compliance-Status von Lieferanten.\n• Geopolitical Risk Management: Bewertung und Mitigation von geopolitischen Risiken, die sich auf die Supply Chain Security auswirken können.\n\n🔗 ADVISORI Supply Chain Security Framework:\n• Third-Party Risk Assessment Methodologies mit speziellem Fokus auf CRA-relevante Security by Default Kriterien\n• Supplier Security Maturity Modeling zur Bewertung und Entwicklung von Lieferantenfähigkeiten\n• Incident Response Coordination für supply chain-weite Sicherheitsvorfälle\n• Threat Intelligence Sharing zwischen Unternehmen und kritischen Lieferanten\n\n⚡ Operative Excellence und Resilience Building:\n• Supplier Diversification Strategien zur Reduktion von Single Points of Failure in der Sicherheitsarchitektur\n• Security by Default Capability Building Programme für strategische Lieferanten\n• Emergency Response und Business Continuity Planning für Supply Chain Security Vorfälle\n• Performance Benchmarking und Continuous Improvement Prozesse für Lieferantensicherheit\n\n📊 C-Level Governance und Strategic Decision Making:\n• Board-Level Supply Chain Security Reporting mit KPIs und Risikometriken\n• Strategic Sourcing Decision Support basierend auf Security by Default Bewertungen\n• Investment Planning für Supply Chain Security Capabilities und Infrastruktur\n• Stakeholder Communication Strategien für transparente Supply Chain Security Governance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI zukunftssichere Security by Default Architekturen, die sowohl heutige CRA-Anforderungen erfüllen als auch für emerging Technologies wie KI, Quantum Computing und Web3 gerüstet sind?",
        answer: "Die Entwicklung zukunftssicherer Security by Default Architekturen erfordert eine vorausschauende Strategie, die nicht nur aktuelle CRA-Compliance gewährleistet, sondern auch die Sicherheitsherausforderungen emergierender Technologien antizipiert. ADVISORI entwickelt adaptive Sicherheitsarchitekturen, die resilient gegenüber technologischen Disruptions sind und gleichzeitig Innovation ermöglichen.\n\n🔮 Future-Proof Architecture Principles:\n• Quantum-Resistant Security Design: Implementierung von Post-Quantum-Kryptographie und quantum-sicheren Protokollen als Security by Default Standard.\n• AI-Secure Development Frameworks: Integration von KI-spezifischen Sicherheitskontrollen und Bias-Prevention-Mechanismen in die Standard-Sicherheitsarchitektur.\n• Decentralized Security Models: Vorbereitung auf Web3 und Blockchain-basierte Systeme durch dezentrale Sicherheitsansätze und Zero-Trust-Prinzipien.\n• Adaptive Authentication Systems: Entwicklung von Authentifizierungssystemen, die sich dynamisch an neue Bedrohungen und Technologien anpassen können.\n\n🛡️ Technology-Agnostic Security Foundations:\n• Modular Security Architecture: Aufbau flexibler Sicherheitskomponenten, die sich schnell an neue Technologien und Bedrohungslagen anpassen lassen.\n• API-First Security Design: Entwicklung von API-zentrierten Sicherheitsmodellen, die unabhängig von spezifischen Technologie-Stacks funktionieren.\n• Container und Cloud-Native Security: Implementation nativer Sicherheitskontrollen für containerisierte und cloud-native Umgebungen.\n• Edge Security Optimization: Security by Default Strategien für Edge Computing und IoT-Umgebungen mit minimalen Ressourcen.\n\n⚡ Emerging Technology Integration:\n• AI-Powered Security Automation: Nutzung von Machine Learning für proaktive Bedrohungserkennung und automatische Security-Anpassungen.\n• Behavioral Analytics und User Experience Intelligence: Integration von Verhaltensanalysen für bessere Security by Default User Experiences.\n• Privacy-Preserving Technologies: Implementierung von Technologien wie Homomorphic Encryption und Secure Multi-Party Computation.\n• Immutable Security Logging: Blockchain-basierte Audit-Trails für unveränderliche Sicherheitsdokumentation.\n\n🔬 ADVISORI Innovation Laboratory Approach:\n• Technology Scouting und Early Adoption Programme für emerging Security Technologies\n• Proof of Concept Development für innovative Security by Default Implementierungen\n• Partnership Ecosystem mit Forschungseinrichtungen und Technology Vendors\n• Continuous Learning und Skill Development für zukunftsorientierte Sicherheitskompetenzen"
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
