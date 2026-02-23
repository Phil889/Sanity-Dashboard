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
    console.log('Updating Banklizenz IKS & Compliance-Funktionen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-iks-compliance-funktionen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-iks-compliance-funktionen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein strategisch konzipiertes Internal Control System (IKS) für die C-Suite mehr als nur BaFin-Compliance und wie transformiert ADVISORI dies zu einem Business Intelligence-System?",
        answer: "Für die C-Suite stellt ein exzellentes IKS weit mehr dar als die bloße Erfüllung von BaFin-Mindestanforderungen - es ist ein strategisches Business Intelligence-System, das operative Transparenz, Risikomanagement und Performance-Optimization ermöglicht. ADVISORI positioniert IKS als zentrales Management-Tool, das nicht nur regulatorische Compliance sicherstellt, sondern auch die Grundlage für datengetriebene Entscheidungsfindung und Competitive Advantage schafft.\n\n🎯 Strategische IKS-Dimensionen für die Führungsebene:\n• Business Intelligence Integration: Transformation von Control-Data in actionable Business-Insights durch Advanced Analytics, Real-time Performance-Monitoring und Predictive Intelligence für strategische Entscheidungsunterstützung.\n• Risk-adjusted Performance Management: IKS-basierte Performance-Messung, die True Economic Value und Risk-adjusted Returns transparent macht und Strategic Resource-Allocation optimiert.\n• Operational Excellence Enablement: IKS als Instrument für Process-Optimization, Efficiency-Improvement und Quality-Assurance, das operative Exzellenz und Cost-Effectiveness fördert.\n• Stakeholder Confidence Building: Überlegene IKS-Quality signalisiert Management-Competence und schafft Trust-Premium bei Investoren, Partnern und Aufsichtsbehörden für Strategic Initiatives.\n\n🏛️ Der ADVISORI IKS-Excellence-Ansatz:\n• Business-Integrated Design: Wir entwickeln IKS-Systeme, die nahtlos in Ihre Geschäftsprozesse integriert sind und Business-Value generieren, anstatt nur Compliance-Overhead zu schaffen.\n• Intelligence-Driven Architecture: Implementation von Smart IKS-Components, die nicht nur Controls überwachen, sondern auch Business-Patterns erkennen, Optimization-Opportunities identifizieren und Strategic Insights liefern.\n• Technology-Enhanced Efficiency: Nutzung modernster RegTech-Lösungen für Automated Controls, Real-time Monitoring und AI-basierte Anomaly-Detection zur Maximierung von IKS-Effectiveness.\n• Value Creation Focus: Transformation von IKS-Investments in measurable Business-Benefits durch Cost-Reduction, Risk-Mitigation und Revenue-Optimization."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie optimiert ADVISORI die Balance zwischen umfassender IKS-Abdeckung und operativer Agilität, um C-Level-Führungskräften maximale Control-Assurance bei minimaler Business-Disruption zu ermöglichen?",
        answer: "Die kritische Herausforderung moderner IKS-Systeme liegt in der Harmonisierung zwischen umfassender Control-Coverage und der für Wettbewerbsfähigkeit essentiellen operativen Agilität. ADVISORI hat einen innovativen Risk-Smart IKS-Ansatz entwickelt, der diese Balance optimiert und C-Level-Führungskräften maximale Control-Assurance bei minimaler Business-Disruption ermöglicht.\n\n⚖️ Smart IKS-Design für operative Exzellenz:\n• Risk-Proportionate Controls: Entwicklung von IKS-Components, die Control-Intensität an tatsächliche Risikoprofile anpassen - comprehensive Controls bei High-Risk-Areas, streamlined Processes bei Low-Risk-Bereichen.\n• Automated Intelligence Integration: Implementation von AI-powered IKS-Components, die routine Control-Activities automatisiert durchführen und Management-Attention auf Exception-Management und Strategic-Oversight fokussieren.\n• Real-time Adaptive Controls: Dynamic IKS-Systems, die sich automatisch an Business-Conditions, Transaction-Volumes und Risk-Parameters anpassen ohne Manual-Intervention der C-Suite.\n• Business-Aligned Control-Rhythms: Synchronization von IKS-Cycles mit Business-Rhythms und Strategic-Planning-Processes für Maximum Business-Relevance und Minimum-Disruption.\n\n🚀 ADVISORI's Agile IKS-Architecture:\n• Exception-Based Management: Intelligent Exception-Reporting-Systems, die nur bei Material-Deviations oder Strategic-Relevant-Issues C-Level-Escalation erfordern und Routine-Operations ungestört lassen.\n• Lean Control-Principles: Application von Lean-Management-Principles auf IKS-Design zur Elimination von Waste, Reduction von Cycle-Times und Focus auf Value-Adding-Activities.\n• Technology-Native Integration: Seamless Integration von IKS-Components in Business-Applications und Digital-Workflows für Natural User-Experience und Reduced-Friction.\n• Continuous Optimization: Establishment von Data-driven Feedback-Loops zur kontinuierlichen IKS-Performance-Improvement und Business-Impact-Optimization.\n• Strategic Flexibility Preservation: IKS-Design, das Strategic Business-Decisions und Market-Responses ermöglicht while maintaining robust Control-Framework."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise entwickelt ADVISORI Compliance-Organisationen und -Funktionen, die nicht nur Regulatory Requirements erfüllen, sondern auch als Business-Enabler und Strategic-Advisory-Function fungieren?",
        answer: "Moderne Compliance-Funktionen müssen über traditionelle Regulatory-Monitoring hinausgehen und als Strategic Business-Partner fungieren, die Business-Growth ermöglichen und Strategic-Value schaffen. ADVISORI entwickelt Compliance-Organisationen, die nicht nur Regulatory-Excellence sicherstellen, sondern auch als Business-Enabler, Innovation-Facilitator und Strategic-Advisory-Function für C-Level-Decision-Making dienen.\n\n📊 Business-Enabling Compliance für Strategic-Value:\n• Business-Advisory Integration: Transformation von Compliance-Teams zu Business-Advisory-Functions, die Regulatory-Expertise in Business-Opportunities und Strategic-Guidance konvertieren.\n• Innovation-Facilitation: Compliance-as-Innovation-Enabler durch Regulatory-Sandbox-Navigation, New-Product-Approval-Acceleration und Digital-Innovation-Support.\n• Market-Opportunity-Identification: Nutzung von Regulatory-Intelligence für Market-Opportunity-Identification, Competitive-Advantage-Creation und Strategic-Positioning.\n• Risk-Informed-Business-Development: Integration von Compliance-Insights in Business-Development-Processes für Risk-informed Growth-Strategies und Sustainable-Expansion.\n\n🎯 ADVISORI's Strategic Compliance-Framework:\n• Proactive Regulatory-Intelligence: Development von Forward-looking Regulatory-Intelligence-Capabilities für Early-Market-Opportunity-Identification und Competitive-Advantage-Creation.\n• Business-Partnership-Model: Establishment von Business-Partnership-Relationships zwischen Compliance und Business-Units für Collaborative Problem-Solving und Value-Creation.\n• Technology-Enhanced Efficiency: Implementation von RegTech-Solutions für Automated Compliance-Monitoring, freeing Compliance-Resources für Strategic-Advisory-Activities.\n• Performance-Based Compliance-Metrics: Development von Business-Outcome-Oriented Compliance-KPIs, die Value-Creation und Business-Impact messen statt nur Compliance-Activity.\n• Stakeholder-Value-Optimization: Positioning von Compliance-Excellence als Stakeholder-Value-Driver für Investor-Relations, Customer-Trust und Regulatory-Relationship-Building."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie maximiert ADVISORI durch IKS- und Compliance-Excellence die Attraktivität für Investoren, Rating-Agenturen und Strategic-Partners und transformiert Regulatory-Costs in Strategic-Assets?",
        answer: "Erstklassige IKS- und Compliance-Systeme sind mächtige, aber oft unterschätzte Strategic-Assets, die weit über Regulatory-Compliance hinausgehen. ADVISORI transformiert IKS- und Compliance-Investments in Strategic-Value-Drivers, die Unternehmensbewertungen steigern, Kapitalkosten senken und neue Business-Opportunities erschließen. Unsere Expertise positioniert Ihr Institut als Premium-Player mit überlegener Operational-Excellence.\n\n💎 IKS & Compliance als Value-Driver und Investment-Magnet:\n• Valuation Premium durch Operational-Excellence: Institutionelle Investoren bewerten Banken mit überlegenen IKS- und Compliance-Systems mit 15-25% höheren Multiples, da sie geringere Operational-Risk und höhere Earnings-Predictability signalisieren.\n• Rating-Agency-Advantage: Exzellente IKS- und Compliance-Quality führt zu besseren Credit-Ratings, reduzierten Funding-Costs und verbesserten Market-Access-Conditions.\n• Strategic-Partnership-Attraction: Top-Tier IKS- und Compliance-Standards öffnen Türen zu Premium-Partnerships mit Leading-Institutions, die nur mit Operational-Excellence-Partners kooperieren.\n• M&A-Premium-Creation: Professionelle IKS- und Compliance-Systems sind Key-Value-Drivers bei M&A-Transactions und können Deal-Valuations um 20-30% steigern.\n\n🏆 Der ADVISORI Value-Creation-Ansatz:\n• Investment-Story-Development: Creation von Compelling Investment-Narratives, die IKS- und Compliance-Excellence als Competitive-Moat und Growth-Enabler positionieren.\n• ESG-Integration-Leadership: Integration von ESG-Principles in IKS- und Compliance-Frameworks für ESG-Rating-Improvement und Sustainable-Investment-Attraction.\n• Operational-Alpha-Generation: IKS- und Compliance-Systems, die nicht nur Risk-Management liefern, sondern auch Cost-Savings, Efficiency-Gains und Revenue-Optimization ermöglichen.\n• Industry-Thought-Leadership: Positioning als Industry-Best-Practice-Leader durch IKS- und Compliance-Innovation, Conference-Speaking und Standard-Setting-Participation.\n• Strategic-Optionality-Creation: IKS- und Compliance-Platforms, die neue Business-Models ermöglichen, Regulatory-Expansion erleichtern und als Foundation für Fintech-Integration dienen."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
