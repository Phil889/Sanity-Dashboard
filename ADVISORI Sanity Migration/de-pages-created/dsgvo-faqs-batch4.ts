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
    console.log('Updating DSGVO page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie positioniert ADVISORI DSGVO-Compliance als strategischen Vorteil bei der Erschließung neuer Märkte und internationaler Expansion?",
        answer: "In einer zunehmend regulierten globalen Wirtschaft wird DSGVO-Compliance zum strategischen Türöffner für internationale Märkte. ADVISORI transformiert Datenschutz-Excellence von einer Compliance-Anforderung zu einem Markterschließungs-Katalysator, der Unternehmen Wettbewerbsvorteile in globalen Expansionsstrategien verschafft.\n\n🌍 Global Market Access durch Privacy Excellence:\n• Regulatory-Arbitrage-Strategies: Nutzung überlegener DSGVO-Compliance als Wettbewerbsvorteil in Märkten mit strengeren Datenschutzanforderungen (EU, Kanada, Brasilien).\n• Cross-Border-Partnership-Enablement: DSGVO-Compliance als Voraussetzung für strategische Partnerschaften mit europäischen und internationalen Unternehmen.\n• Global-Tender-Advantage: Demonstrierte Datenschutz-Excellence als entscheidender Faktor bei internationalen Ausschreibungen und B2B-Verträgen.\n• Market-Entry-Acceleration: Beschleunigte Markteintritte durch bereits etablierte Datenschutz-Infrastrukturen statt nachträglicher Compliance-Anpassungen.\n\n🏆 Competitive Differentiation und Market Leadership:\n• Privacy-as-Brand-Differentiator: Aufbau von Datenschutz als Markenkern und USP für internationale Marktpositionierung.\n• Customer-Trust-Premium: Monetarisierung von Kundenvertrauen durch Premium-Pricing in datenschutzsensitiven Märkten.\n• Industry-Leadership-Positioning: Etablierung als Thought Leader in Privacy-Excellence für Branchenführerschaft und Meinungsführerschaft.\n• Innovation-Hub-Development: Nutzung von Privacy-by-Design-Expertise für Entwicklung neuer, datenschutzkonformer Produkte und Services für globale Märkte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt ADVISORI bei der Integration von DSGVO-Prinzipien in Corporate Sustainability und ESG-Strategien?",
        answer: "Environmental, Social, and Governance (ESG) Kriterien werden zunehmend wichtiger für Investoren und Stakeholder. ADVISORI integriert DSGVO-Compliance in umfassende ESG-Strategien und demonstriert, wie Datenschutz-Excellence zu nachhaltiger Wertschöpfung und verbesserter ESG-Performance beiträgt.\n\n🌱 ESG-Integration und Sustainability-Datenschutz:\n• Privacy-as-Social-Responsibility: Positionierung von Datenschutz als gesellschaftliche Verantwortung und Beitrag zu sozialer Nachhaltigkeit.\n• Stakeholder-Capitalism-Alignment: Integration von Datenschutz-Interessen verschiedener Stakeholder-Gruppen in Corporate Governance-Strukturen.\n• Digital-Rights-Advocacy: Entwicklung von Unternehmensstrategien, die digitale Rechte und Datenschutz als fundamentale Menschenrechte respektieren.\n• Ethical-AI-Development: Integration ethischer KI-Entwicklung in Nachhaltigkeitsstrategien für verantwortungsvolle Innovation.\n\n📊 ESG-Reporting und Investor-Relations-Excellence:\n• ESG-Compliance-Metrics: Entwicklung spezifischer KPIs, die DSGVO-Compliance-Performance für ESG-Investoren messbar machen.\n• Sustainability-Report-Integration: Integration von Datenschutz-Metriken in Nachhaltigkeitsberichte und ESG-Disclosure-Frameworks.\n• Investor-Education-Programs: Aufklärung von Investoren über den strategischen Wert von Datenschutz-Investments für langfristige Wertschöpfung.\n• Rating-Agency-Engagement: Proaktive Kommunikation mit ESG-Rating-Agenturen zur optimalen Bewertung von Privacy-Excellence-Initiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer zukunftsfähigen Privacy-Tech-Stack-Architektur für skalierbare DSGVO-Compliance?",
        answer: "Eine zukunftsfähige Privacy-Tech-Architektur ist essentiell für skalierbare, effiziente DSGVO-Compliance. ADVISORI entwickelt integrierte Technology-Stacks, die aktuelle Compliance-Anforderungen erfüllen, aber auch flexibel für zukünftige regulatorische Entwicklungen und Geschäftswachstum anpassbar sind.\n\n🏗️ Future-Ready Privacy Technology Architecture:\n• Modular-Privacy-Platform-Design: Entwicklung modularer, API-basierter Privacy-Plattformen, die sich flexibel an veränderte Geschäftsanforderungen anpassen lassen.\n• Cloud-Native-Privacy-Stack: Implementation cloud-nativer Datenschutz-Architekturen mit Auto-Scaling, High-Availability und Global-Distribution-Capabilities.\n• Privacy-Mesh-Architecture: Aufbau von Privacy-Mesh-Architekturen für dezentralisierte, aber koordinierte Datenschutz-Governance in komplexen Unternehmenslandschaften.\n• Edge-Privacy-Computing: Integration von Edge-Computing-Prinzipien für privacy-preserving Data Processing näher am Datenursprung.\n\n⚙️ Integration und Interoperability Excellence:\n• Legacy-System-Integration: Nahtlose Integration moderner Privacy-Tools mit bestehenden Legacy-Systemen ohne Disruption kritischer Geschäftsprozesse.\n• Vendor-Agnostic-Architecture: Entwicklung herstellerunabhängiger Architekturen, die Lock-in-Effekte vermeiden und Best-of-Breed-Tool-Selection ermöglichen.\n• Standards-Based-Interoperability: Nutzung offener Standards und Protokolle für maximale Interoperabilität zwischen verschiedenen Privacy-Tools und -Systemen.\n• Continuous-Integration-Privacy: Integration von Privacy-Controls in CI/CD-Pipelines für Continuous Compliance in agilen Entwicklungsumgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche strategischen Partnerschaften und Thought Leadership-Initiativen nutzt ADVISORI, um Kunden Zugang zu cutting-edge DSGVO-Innovation zu verschaffen?",
        answer: "ADVISORI pflegt strategische Partnerschaften mit führenden Technologie-Anbietern, Forschungseinrichtungen und Privacy-Organisationen, um Kunden Zugang zu den neuesten DSGVO-Innovationen und Best Practices zu bieten. Durch aktive Thought Leadership gestalten wir die Zukunft des Datenschutzes mit.\n\n🤝 Strategic Ecosystem und Innovation-Access:\n• Privacy-Tech-Vendor-Partnerships: Strategische Allianzen mit führenden Privacy-Technology-Anbietern für frühen Zugang zu innovativen Tools und Beta-Programmen.\n• Academic-Research-Collaboration: Enge Zusammenarbeit mit Universitäten und Forschungseinrichtungen für Zugang zu cutting-edge Privacy-Research und -Innovation.\n• Industry-Consortium-Leadership: Führende Rolle in Branchen-Konsortien und Standards-Organisationen für aktive Mitgestaltung zukünftiger Datenschutz-Standards.\n• Regulatory-Sandboxes-Participation: Teilnahme an regulatorischen Sandboxes für Testing innovativer Privacy-Technologien in kontrollierten Umgebungen.\n\n🎯 Thought Leadership und Knowledge Sharing:\n• Privacy-Innovation-Lab: Eigene Forschungs- und Entwicklungskapazitäten für Evaluation und Integration neuester Privacy-Technologien.\n• Industry-Conference-Speaking: Regelmäßige Präsentation von Privacy-Innovationen und Best Practices auf führenden Industrie-Konferenzen.\n• White-Paper-Publication: Veröffentlichung von Thought-Leadership-Content zu emerging Privacy-Trends und -Technologien.\n• Open-Source-Contribution: Aktive Beiträge zu Open-Source-Privacy-Projekten für Community-weite Innovation und Knowledge Sharing."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
