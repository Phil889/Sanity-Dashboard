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
    console.log('Updating CRA Security-by-Design page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-design' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-design" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir Security-by-Design als strategisches Tool für Talentakquisition und -retention in einem umkämpften Technologiemarkt nutzen?",
        answer: "Security-by-Design-Expertise entwickelt sich zum entscheidenden Differentiator für Employer Branding und Talentmanagement in der Tech-Industrie. Für die C-Suite eröffnet sich die Möglichkeit, CRA-konforme Entwicklungspraktiken als Magnet für Top-Talente zu nutzen und gleichzeitig die Mitarbeiterbindung durch anspruchsvolle, zukunftsorientierte Projekte zu stärken. Security-by-Design-Kompetenz wird zur gefragten Skill und positioniert Ihr Unternehmen als innovativen, verantwortungsbewussten Arbeitgeber.\n\n🎯 Strategische Talent-Attraktivitätsfaktoren:\n• Cutting-Edge Technology Exposure: Security-by-Design erfordert moderne Technologien, DevSecOps-Toolchains und Cloud-native Architekturen, die technikaffine Talente anziehen.\n• Professional Development Opportunities: CRA-Compliance-Projekte bieten Entwicklern die Chance, gefragte Security-Expertise aufzubauen und ihre Karriereprofile zu schärfen.\n• Purpose-Driven Work: Entwicklung sicherer, gesellschaftlich verantwortlicher Produkte spricht besonders Millennials und Gen-Z-Talente an, die Sinnhaftigkeit in ihrer Arbeit suchen.\n• Industry Leadership Position: Pionierstellung bei CRA-Compliance signalisiert Innovation und Zukunftsorientierung, was Top-Performer anzieht.\n\n💼 Retention und Engagement durch Security Excellence:\n• Skill Premium und Karrierepfade: Security-by-Design-Expertise wird am Markt mit 15-25% Gehaltspremium bewertet, was interne Karriereentwicklung attraktiv macht.\n• Cross-Functional Collaboration: Security-by-Design fördert interdisziplinäre Zusammenarbeit zwischen Development, Security und Business Teams, was Arbeitsplätze abwechslungsreicher und erfüllender macht.\n• Innovation und Autonomie: Moderne Security-Architekturen geben Entwicklern mehr Gestaltungsspielraum und technische Herausforderungen.\n• Conference und Community Engagement: Security-by-Design-Expertise eröffnet Speaking Opportunities und Community Leadership, was für viele Tech-Professionals attraktiv ist.\n\n🚀 ADVISORI's Talent-Enablement-Strategien:\n• Security Champion Programs: Entwicklung interner Security-Expert-Netzwerke, die sowohl fachliche Exzellenz als auch Karriereentwicklung fördern.\n• Learning & Development Roadmaps: Strukturierte Weiterbildungsprogramme für Security-by-Design-Kompetenzen mit Zertifizierungen und Industry Recognition.\n• Employer Branding Strategy: Positionierung Ihres Unternehmens als Security-by-Design-Leader durch Case Studies, Tech Talks und Open Source Contributions."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche strategischen Partnerschaften und Ökosystem-Allianzen sollten wir eingehen, um unsere Security-by-Design-Capabilities zu maximieren?",
        answer: "Strategische Partnerschaften und Ökosystem-Allianzen sind entscheidend für die Beschleunigung von Security-by-Design-Implementierungen und die Maximierung von CRA-Compliance-Erfolgen. Für die C-Suite bieten intelligente Kooperationen die Möglichkeit, Expertise zu akquirieren, Kosten zu optimieren und Marktposition zu stärken, ohne alle Capabilities intern aufbauen zu müssen. Das richtige Partner-Ökosystem kann den Unterschied zwischen erfolgreicher und kostenintensiver CRA-Transformation ausmachen.\n\n🤝 Strategische Partnership-Kategorien:\n• Technology Platform Partners: Kooperationen mit Cloud-Providern (AWS, Azure, GCP) für sichere, CRA-konforme Infrastrukturen und managed Security Services.\n• Security Toolchain Vendors: Partnerschaften mit führenden DevSecOps-Tool-Anbietern für automatisierte Security Testing, Vulnerability Management und Compliance Monitoring.\n• Industry Consortiums: Teilnahme an CRA-Compliance-Initiativen und Security-Standards-Entwicklung für Early-Access zu Best Practices und Regulatory Insights.\n• Academic Research Partnerships: Kooperationen mit Universitäten und Forschungseinrichtungen für Zugang zu neuesten Security-by-Design-Methodologies und Talent Pipeline.\n\n💡 Ecosystem-Value-Creation-Strategien:\n• Joint Innovation Labs: Gemeinsame Entwicklung von Security-by-Design-Solutions mit Technologiepartnern für Marktdifferenzierung und shared IP.\n• Customer Co-Creation: Partnerschaften mit Lead-Customers für Real-World-Testing von Security-by-Design-Implementierungen und Reference Case Development.\n• Supplier Security Programs: Integration von CRA-Requirements in Ihre Supplier-Qualification-Prozesse für durchgängige Supply Chain Security.\n• Industry Cross-Pollination: Lernen von Security-by-Design-Best-Practices aus anderen Industrien (Automotive, Healthcare, Finance) für Innovation Transfer.\n\n🎯 ADVISORI's Partnership-Orchestration:\n• Partnership Strategy Development: Identifikation optimaler Partner-Portfolios basierend auf Ihren spezifischen CRA-Compliance-Zielen und Geschäftsanforderungen.\n• Due Diligence und Partner Assessment: Umfassende Bewertung potenzieller Partner hinsichtlich Security-Capabilities, Compliance-Track-Record und strategischem Fit.\n• Joint Go-to-Market Development: Entwicklung gemeinsamer Marktstrategien mit Partnern für beschleunigte CRA-Solution-Adoption.\n• Ecosystem Governance: Etablierung von Governance-Strukturen für effektive Partner-Koordination und Value-Creation-Maximierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir Security-by-Design-Prinzipien nutzen, um neue Geschäftsmodelle und Revenue Streams zu entwickeln?",
        answer: "Security-by-Design eröffnet innovative Geschäftsmodelle und erschließt neue Revenue Streams, die über traditionelle Produktverkäufe hinausgehen. Für die C-Suite bedeutet dies die Transformation von Compliance-Investitionen in profitable Geschäftschancen und die Monetarisierung von Security-Expertise als eigenständigen Wertschöpfungsbereich. CRA-konforme Security-by-Design-Capabilities werden zur Grundlage für neue Service-Kategorien und Platform-Economies.\n\n💰 Innovative Revenue Model Opportunities:\n• Security-as-a-Service (SECaaS): Monetarisierung Ihrer Security-by-Design-Expertise durch Consulting, Managed Security Services und Compliance-Support für andere Unternehmen.\n• Secure Platform Ecosystems: Entwicklung von Security-zertifizierten Entwicklerplattformen und App Stores mit Premium-Gebühren für CRA-konforme Application Hosting.\n• Security Intelligence Products: Transformation von Security-Monitoring-Daten in verkaufbare Threat Intelligence und Industry Security Reports.\n• Compliance-Automation-Tools: Produktisierung Ihrer internen CRA-Compliance-Tools als SaaS-Lösungen für andere Unternehmen mit ähnlichen Anforderungen.\n\n🚀 Business Model Innovation Strategies:\n• Subscription-Based Security: Entwicklung von Security-by-Design-as-a-Subscription-Modellen mit kontinuierlichen Updates, Monitoring und Compliance-Support.\n• Value-Based Pricing: Premium-Pricing für nachweislich sichere Produkte basierend auf quantifizierbarem Risikoreduktions-Value für Kunden.\n• Partnership Revenue Sharing: Monetarisierung von Security-by-Design-Expertise durch Revenue-Sharing-Modelle mit Technology-Partnern und System Integrators.\n• Data Monetization: Ethical monetization von anonymisierten Security-Insights für Industry Benchmarking und Threat Research.\n\n🎯 ADVISORI's Business Model Innovation Support:\n• Revenue Stream Analysis: Identifikation und Quantifizierung aller potenziellen Revenue Opportunities aus Ihren Security-by-Design-Investitionen.\n• Go-to-Market Strategy: Entwicklung von Launch-Strategien für neue Security-basierte Geschäftsmodelle und Service-Kategorien.\n• Pricing Strategy Optimization: Datengetriebene Entwicklung von Pricing-Modellen für Security-Premium-Produkte und Services.\n• Platform Strategy Development: Beratung zur Entwicklung von Security-zentrierten Platform-Ecosystems und Multi-Sided-Markets."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Governance-Strukturen und Entscheidungsprozesse müssen wir etablieren, um Security-by-Design erfolgreich zu institutionalisieren?",
        answer: "Die erfolgreiche Institutionalisierung von Security-by-Design erfordert robuste Governance-Strukturen und klare Entscheidungsprozesse, die Security in die DNA der Organisation einbetten. Für die C-Suite ist entscheidend, dass Security-by-Design nicht als isolierte IT-Initiative behandelt wird, sondern als integraler Bestandteil der Unternehmensführung und strategischen Planung. Effektive Governance sorgt für nachhaltige CRA-Compliance und kontinuierliche Security-Excellence.\n\n🏛️ Executive-Level Governance-Architektur:\n• Chief Security Officer (CSO) Establishment: Schaffung einer C-Level-Position mit direkter Board-Berichtslinie und Budget-Verantwortung für Security-by-Design-Initiativen.\n• Security Steering Committee: Interdisziplinäres C-Level-Gremium zur strategischen Steuerung von Security-by-Design-Transformationen mit quartalsweisen Strategic Reviews.\n• Security Investment Board: Dedicated Decision-Body für Security-by-Design-Investitionen mit klaren ROI-Kriterien und Approval-Prozessen.\n• Risk and Compliance Committee: Integration von CRA-Compliance-Oversight in bestehende Risk-Management-Strukturen mit regelmäßiger Board-Berichterstattung.\n\n📋 Operative Governance und Entscheidungsstrukturen:\n• Security Champions Network: Etablierung von Security-Advocates in allen Geschäftsbereichen für dezentrale Security-by-Design-Implementation.\n• Architecture Review Boards: Integration von Security-by-Design-Kriterien in alle Technology-Architektur-Entscheidungen und System-Design-Reviews.\n• Security-First Development Gates: Implementation von Security-Checkpoints in allen Entwicklungsphasen mit klaren Go/No-Go-Kriterien.\n• Incident Response Governance: Etablierung von Eskalationspfaden und Entscheidungskompetenzen für Security-Incident-Management.\n\n🎯 ADVISORI's Governance-Implementation:\n• Governance Framework Design: Entwicklung maßgeschneiderter Governance-Strukturen, die zu Ihrer Organisationskultur und Entscheidungsprozessen passen.\n• Role and Responsibility Definition: Klare Abgrenzung von Rollen, Verantwortlichkeiten und Entscheidungskompetenzen für alle Security-by-Design-Stakeholder.\n• Process Integration: Nahtlose Integration von Security-by-Design-Governance in bestehende Business-Prozesse und Decision-Making-Frameworks.\n• Performance Management: Entwicklung von KPIs und Incentive-Systemen zur Förderung von Security-by-Design-Excellence auf allen Organisationsebenen."
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
