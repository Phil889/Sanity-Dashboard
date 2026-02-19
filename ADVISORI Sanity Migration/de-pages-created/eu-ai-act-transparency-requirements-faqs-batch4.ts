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
    console.log('Updating EU AI Act Transparency Requirements page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-transparency-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-transparency-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie transformiert ADVISORI EU AI Act Transparenzanforderungen in ESG-Reporting-Vorteile und Sustainability-Narrative für ESG-bewusste C-Suite-Entscheidungsträger?",
        answer: "Für ESG-fokussierte C-Level-Führungskräfte stellen EU AI Act Transparenzanforderungen eine einmalige Opportunity dar, AI-Governance in übergeordnete Sustainability-Strategien zu integrieren und messbare ESG-Performance-Improvements zu demonstrieren. ADVISORI entwickelt Frameworks, die Transparenz-Compliance in strategic ESG-Assets transformieren, die Investor-Relations verbessern und Sustainable-Finance-Opportunities erschließen.\n\n🌱 ESG-Integrated Transparency Excellence:\n• Responsible-AI-Governance-Integration: Positionierung von EU AI Act Transparenz als core component responsible AI-Development, die ESG-Scores verbessert und Sustainable-Investment-Criteria erfüllt.\n• Social-Impact-Measurement: Entwicklung von Metrics und KPIs, die demonstrieren, wie AI-Transparenz zu better societal outcomes, fairness und stakeholder trust beiträgt.\n• Environmental-Efficiency-Correlation: Aufbau von Transparenz-Systemen, die environmental impact von AI-Systems tracken und reporting für Carbon-Footprint-Reduction und Energy-Efficiency unterstützen.\n• Governance-Excellence-Demonstration: Nutzung von Transparenz-Compliance als demonstration superior corporate governance practices für Rating-Agencies und ESG-Investors.\n\n🎯 Der ADVISORI Sustainability-Integration-Ansatz:\n• ESG-Reporting-Automation: Integration von AI-Transparenz-Metrics in automated ESG-Reporting-Systems für consistent, auditable sustainability performance documentation.\n• Stakeholder-Capitalism-Alignment: Entwicklung von Transparency-Frameworks, die explicitly stakeholder value creation demonstrieren und multi-stakeholder capitalism principles unterstützen.\n• UN-SDG-Alignment: Mapping von AI-Transparency-Initiatives zu UN Sustainable Development Goals für comprehensive sustainability narrative development.\n• Green-Finance-Readiness: Strukturierung von Transparency-Documentation zur Unterstützung von Green-Bond-Issuances, Sustainability-Linked-Loans und ESG-Compliance für Capital-Markets-Access."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie entwickelt ADVISORI Crisis-Management- und Incident-Response-Strategien für EU AI Act Transparenz-Compliance-Failures und Reputational-Risks für die C-Suite?",
        answer: "Selbst bei bester Vorbereitung können Transparenz-Compliance-Gaps oder AI-System-Incidents auftreten, die immediate C-Suite-Attention und sophisticated Crisis-Management erfordern. ADVISORI entwickelt comprehensive Incident-Response-Frameworks, die nicht nur regulatory damage control gewährleisten, sondern auch reputational recovery ermöglichen und stakeholder trust rebuilding unterstützen.\n\n🚨 Crisis-Ready Transparency-Management:\n• Incident-Classification-Frameworks: Entwicklung strukturierter Systeme zur rapid assessment von Transparency-Compliance-Incidents nach severity, regulatory impact und reputational risk für appropriate response-level determination.\n• Stakeholder-Communication-Protocols: Aufbau pre-approved communication templates und escalation procedures für verschiedene Incident-Types und Stakeholder-Categories (regulators, customers, media, investors).\n• Regulatory-Remediation-Playbooks: Entwicklung detailed action plans für verschiedene Compliance-Failure-Scenarios, including timeline für regulatory notification, corrective actions und documentation requirements.\n• Reputation-Recovery-Strategies: Aufbau comprehensive plans für brand-recovery nach Transparency-related incidents, including thought leadership repositioning und stakeholder trust rebuilding initiatives.\n\n⚡ Der ADVISORI Crisis-Excellence-Ansatz:\n• Pre-Incident-Preparation: Proactive development von Crisis-Response-Capabilities, including war-room setup, spokesperson training und legal-coordination protocols für maximum response speed.\n• Real-Time Incident-Monitoring: Implementation von Alert-Systems und Monitoring-Tools, die potential Transparency-Issues detect bevor sie zu full-scale crises escalate.\n• Post-Incident-Learning: Strukturierte Post-Mortem-Processes, die jedes Incident in Learning-Opportunity transformieren für continuous improvement von Transparency-Systems und Crisis-Response-Capabilities.\n• Insurance-Integration: Coordination mit Cyber-Liability und Professional-Indemnity-Insurance für optimal coverage von Transparency-related risks und claims management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Board-Level-Governance-Strukturen entwickelt ADVISORI für effektive C-Suite-Oversight von EU AI Act Transparenzanforderungen und AI-Ethics-Compliance?",
        answer: "Für Boards of Directors und C-Suite-Teams erfordert effective oversight von EU AI Act Transparenz sophisticated governance structures, die technical complexity mit strategic oversight balancieren. ADVISORI entwickelt Board-ready governance frameworks, die non-technical directors befähigen, informed decisions über AI-Transparency zu treffen und appropriate oversight auszuüben.\n\n🏛️ Board-Excellence in AI-Transparency-Governance:\n• Executive-Dashboard-Development: Aufbau intuitive, real-time dashboards, die complex AI-Transparency-Metrics in actionable insights für Board-Level decision-making transformieren.\n• Non-Technical-Director-Education: Entwicklung comprehensive training programs, die Board-Members befähigen, AI-Transparency-Risks und -Opportunities zu verstehen ohne technical expertise requirement.\n• Committee-Structure-Optimization: Design spezialisierter Board-Committee-Structures (AI-Ethics-Committee, Technology-Oversight-Committee) mit clear mandates für AI-Transparency-Oversight.\n• External-Expert-Integration: Aufbau advisory structures mit independent AI-Ethics-Experts und Transparency-Specialists für objective Board-Guidance.\n\n⚖️ Der ADVISORI Governance-Excellence-Ansatz:\n• Fiduciary-Duty-Frameworks: Klarstellung von Director-Responsibilities bezüglich AI-Transparency-Oversight unter corporate law und entwicklung appropriate discharge-of-duty protocols.\n• Risk-Appetite-Definition: Unterstützung bei Definition appropriate risk tolerance levels für AI-Transparency-Issues und development entsprechender risk management policies.\n• Performance-Measurement-Systems: Aufbau objective metrics für assessment von management performance in AI-Transparency-Compliance für Board compensation und evaluation decisions.\n• Stakeholder-Reporting-Protocols: Entwicklung structured approaches für Board-Level communication mit stakeholders über AI-Transparency-Governance und performance für transparency und accountability."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie positioniert ADVISORI EU AI Act Transparenz-Leadership als Platform für International-Expansion und Cross-Border-AI-Deployment-Strategien für global-ambitionierte C-Suite-Teams?",
        answer: "Für international expandierende Unternehmen bietet EU AI Act Transparenz-Excellence eine unique opportunity, global leadership in responsible AI zu etablieren und international expansion zu beschleunigen. ADVISORI entwickelt Transparency-as-Competitive-Advantage-Strategien, die EU-Compliance als launching pad für global AI-Deployment und market leadership nutzen.\n\n🌍 Global AI-Leadership durch EU-Transparency-Excellence:\n• International-Standard-Setting: Nutzung von EU AI Act Transparency-Excellence zur establishment proprietärer AI-Governance-Standards, die global als best practices adoptiert werden können.\n• Cross-Border-Regulatory-Arbitrage: Strategic positioning für regulatory arbitrage opportunities in jurisdictions mit weniger stringenten AI-Governance-Requirements durch demonstrated transparency excellence.\n• Global-Partnership-Development: Leveraging transparency credentials für strategic partnerships mit international corporations, die proven AI-Governance-Capabilities suchen.\n• Export-Market-Advantages: Transformation von EU-Compliance in marketing advantage für AI-Products und -Services in international markets mit growing AI-Governance-Awareness.\n\n🚀 Der ADVISORI Global-Expansion-Ansatz:\n• Multi-Jurisdictional-Compliance-Strategies: Entwicklung von Transparency-Frameworks, die EU AI Act-Excellence als foundation für compliance mit emerging AI-Regulations in US, UK, APAC und anderen key markets nutzen.\n• International-Thought-Leadership: Positioning als global experts in AI-Transparency durch strategic participation in international standard-setting bodies, industry conferences und regulatory consultations.\n• Scalable-Global-Architecture: Aufbau von transparency systems mit built-in capabilities für expansion in neue markets ohne fundamental restructuring requirements.\n• Cultural-Adaptation-Frameworks: Development culturally-sensitive approaches für transparency communication in verschiedenen international markets while maintaining core compliance standards."
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
