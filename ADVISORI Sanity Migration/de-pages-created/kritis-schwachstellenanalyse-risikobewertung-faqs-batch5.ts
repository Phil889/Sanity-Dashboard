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
    console.log('Updating KRITIS Schwachstellenanalyse & Risikobewertung page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schwachstellenanalyse-risikobewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schwachstellenanalyse-risikobewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Zukunftssicherheit unserer Schwachstellenanalyse-Prozesse bei wachsender Infrastruktur und sich entwickelnden Bedrohungen?",
        answer: "Zukunftssichere Schwachstellenanalyse muss mit dem Wachstum Ihrer Organisation und der Evolution der Bedrohungslandschaft Schritt halten. ADVISORI entwickelt skalierbare, adaptive Frameworks, die automatisch mit Ihrer Infrastruktur mitwachsen und sich kontinuierlich an neue Herausforderungen anpassen.\n\n🔄 Skalierbare Sicherheitsarchitektur und Prozess-Evolution:\n• Automated-Scaling-Framework: Implementierung von Systemen, die automatisch neue Assets und Systeme in Schwachstellenanalyse-Prozesse integrieren, ohne manuelle Intervention.\n• AI-Driven-Process-Optimization: Nutzung künstlicher Intelligenz zur kontinuierlichen Optimierung von Analyse-Prozessen basierend auf historischen Daten und emerging Patterns.\n• Elastic-Compliance-Architecture: Entwicklung flexibler Compliance-Frameworks, die sich automatisch an neue regulatorische Anforderungen anpassen können.\n• Future-Threat-Preparedness: Proaktive Integration von Bedrohungsmodellen für noch nicht existierende, aber wahrscheinliche zukünftige Angriffsvektoren.\n\n🚀 Innovation-Ready-Security-Ecosystem:\n• Technology-Agnostic-Frameworks: Entwicklung von Sicherheitsframeworks, die unabhängig von spezifischen Technologien funktionieren und nahtlos neue Innovationen integrieren können.\n• Continuous-Learning-Systems: Implementierung von Machine-Learning-Systemen, die aus jeder Analyse lernen und sich kontinuierlich verbessern.\n• Predictive-Vulnerability-Modeling: Entwicklung prädiktiver Modelle, die potenzielle Schwachstellen identifizieren, bevor sie ausgenutzt werden können.\n• Ecosystem-Integration-Capabilities: Aufbau von APIs und Integrationsmöglichkeiten, die nahtlose Verbindungen zu neuen Sicherheitstools und Plattformen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Expertise bietet ADVISORI bei der Integration von ESG-Kriterien in die Schwachstellenanalyse und wie unterstützt dies unsere Nachhaltigkeits- und Governance-Ziele?",
        answer: "Environmental, Social, and Governance (ESG) Kriterien werden zunehmend wichtiger für kritische Infrastrukturen. ADVISORI integriert ESG-Aspekte in Schwachstellenanalysen und zeigt auf, wie Cyber-Sicherheit zur Erfüllung von Nachhaltigkeits- und Governance-Zielen beiträgt.\n\n🌱 ESG-Integration und Nachhaltigkeits-Cybersicherheit:\n• Environmental-Impact-Assessment: Bewertung der Umweltauswirkungen von Cyber-Angriffen auf kritische Infrastrukturen und Entwicklung umweltschonender Sicherheitsmaßnahmen.\n• Social-Responsibility-Security: Integration sozialer Verantwortung in Cyber-Sicherheitsstrategien, einschließlich Schutz von Bürgerdaten und kritischen Dienstleistungen.\n• Governance-Excellence-Framework: Entwicklung von Cyber-Governance-Strukturen, die höchste Standards für Transparenz, Accountability und ethische Führung setzen.\n• Sustainable-Security-Operations: Optimierung von Sicherheitsoperationen für minimalen Umwelt-Footprint bei maximaler Effektivität.\n\n📊 ESG-Reporting und Stakeholder-Communication:\n• ESG-Compliance-Metrics: Entwicklung spezifischer KPIs, die den Beitrag von Cyber-Sicherheit zu ESG-Zielen messbar machen.\n• Stakeholder-Impact-Analysis: Bewertung der Auswirkungen von Cyber-Risiken auf verschiedene Stakeholder-Gruppen und Entwicklung entsprechender Schutzmaßnahmen.\n• Regulatory-ESG-Alignment: Integration entstehender ESG-Regulierungen in Cyber-Sicherheitsstrategien und Compliance-Frameworks.\n• Investor-Ready-ESG-Reporting: Aufbereitung von Cyber-Sicherheitsdaten für ESG-Investoren und Rating-Agenturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie unterstützt ADVISORI bei der Vorbereitung auf und dem Management von Cyber-Krisen, die aus identifizierten Schwachstellen resultieren könnten?",
        answer: "Die beste Schwachstellenanalyse kann nicht alle Risiken eliminieren – deshalb ist professionelle Krisenvorsorge essentiell. ADVISORI unterstützt Sie dabei, aus Schwachstellenanalyse-Ergebnissen realistische Krisenszenarien zu entwickeln und entsprechende Reaktionspläne zu etablieren.\n\n🚨 Crisis-Preparedness und Incident-Response-Excellence:\n• Scenario-Based-Crisis-Planning: Entwicklung spezifischer Krisenpläne basierend auf identifizierten Schwachstellen und wahrscheinlichen Ausnutzungsszenarien.\n• Executive-Crisis-Communication: Training der C-Suite in effektiver Krisenkommunikation mit Stakeholdern, Medien und Aufsichtsbehörden.\n• Business-Continuity-Integration: Nahtlose Integration von Cyber-Krisenmanagement in bestehende Business-Continuity-Pläne.\n• Legal-and-Regulatory-Crisis-Support: Vorbereitung auf regulatorische Meldepflichten und rechtliche Herausforderungen im Krisenfall.\n\n⚡ Rapid-Response und Recovery-Excellence:\n• 24/7-Crisis-Response-Capability: Bereitstellung sofortiger Expertenunterstützung bei kritischen Sicherheitsvorfällen.\n• Forensic-Investigation-Support: Spezialisierte forensische Analyse zur schnellen Identifikation von Angriffsvektoren und Schadensbegrenzung.\n• Stakeholder-Crisis-Communication: Professionelle Unterstützung bei der Kommunikation mit Kunden, Partnern, Behörden und der Öffentlichkeit.\n• Post-Incident-Learning-Integration: Systematische Integration von Krisenlernerfahrungen in zukünftige Schwachstellenanalyse-Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche strategischen Partnerschaften und Technologie-Allianzen nutzt ADVISORI, um cutting-edge Schwachstellenanalyse-Capabilities bereitzustellen?",
        answer: "ADVISORI pflegt strategische Partnerschaften mit führenden Technologie-Anbietern, Forschungseinrichtungen und Sicherheitsorganisationen, um Ihnen Zugang zu den neuesten Schwachstellenanalyse-Technologien und -Methoden zu bieten.\n\n🤝 Strategic Technology Partnerships und Innovation-Access:\n• Vendor-Agnostic-Best-of-Breed: Partnerships mit führenden Sicherheitstool-Herstellern ermöglichen objektive Technologieempfehlungen basierend auf Ihren spezifischen Anforderungen.\n• Research-Institution-Collaboration: Enge Zusammenarbeit mit führenden Universitäten und Forschungseinrichtungen für Zugang zu cutting-edge Forschungsergebnissen.\n• Industry-Consortium-Participation: Aktive Teilnahme an Branchen-Konsortien und Standards-Organisationen für frühen Zugang zu emerging Standards und Best Practices.\n• Government-Security-Agency-Liaison: Kooperation mit nationalen Cyber-Sicherheitsbehörden für Zugang zu aktuellen Threat-Intelligence und Sicherheitsleitlinien.\n\n🔬 Innovation-Lab und Emerging-Technology-Access:\n• Technology-Innovation-Lab: Eigene Forschungs- und Entwicklungskapazitäten für die Evaluation und Integration neuer Sicherheitstechnologien.\n• Startup-Ecosystem-Integration: Partnerships mit innovativen Security-Startups für frühen Zugang zu disruptiven Sicherheitstechnologien.\n• Open-Source-Community-Engagement: Aktive Beteiligung an Open-Source-Sicherheitsprojekten und -Communities für kontinuierliche Innovation.\n• Cross-Industry-Knowledge-Exchange: Branchen übergreifender Wissensaustausch für Transfer bewährter Praktiken zwischen verschiedenen kritischen Infrastruktursektoren."
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
