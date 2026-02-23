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
    console.log('Updating Banklizenz Aufsichtsrat & Vorstandsrollen page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-aufsichtsrat-vorstandsrollen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-aufsichtsrat-vorstandsrollen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie gewährleistet ADVISORI durch strategische Nachfolgeplanung und Leadership Development die langfristige Stabilität von Aufsichtsrat und Vorstand über die Lizenzierung hinaus?",
        answer: "Nachhaltige Banking-Excellence erfordert nicht nur die initiale Besetzung erstklassiger Führungsgremien, sondern auch strategische Nachfolgeplanung und kontinuierliche Leadership Development. ADVISORI entwickelt comprehensive Talent Pipelines und Development-Programme, die langfristige Governance-Stabilität, Kompetenz-Evolution und Leadership-Kontinuität sicherstellen.\n\n🌱 Strategic Succession Excellence:\n• Leadership Pipeline Development: Aufbau systematischer Talentidentifikation und -entwicklung für zukünftige Aufsichtsrats- und Vorstandspositionen mit Banking-spezifischer Expertise.\n• Competency Evolution Planning: Vorausschauende Skill-Entwicklung aktueller Führungskräfte für emerging Banking-Trends, regulatory Changes und Geschäftsmodell-Innovationen.\n• Knowledge Transfer Architecture: Strukturierte Wissensübertragung zwischen erfahrenen und nachfolgenden Führungskräften zur Sicherung institutioneller Intelligenz.\n• Cultural Continuity Management: Bewahrung und Evolution der Unternehmenskultur und -werte durch strategische Leadership-Transition.\n\n🎓 ADVISORI's Leadership Excellence Framework:\n• Talent Assessment and Development: Systematische Identifikation High-Potential-Kandidaten mit Banking-Affinität und strategische Kompetenz-Entwicklung durch Executive Education und Mentoring.\n• Board Readiness Programs: Spezialisierte Development-Programme zur Vorbereitung zukünftiger Board-Members auf Governance-Responsibilities und Banking-spezifische Challenges.\n• Cross-Functional Exposure: Rotations- und Exposure-Programme, die zukünftige Führungskräfte mit verschiedenen Banking-Bereichen und Governance-Funktionen vertraut machen.\n• External Network Integration: Aufbau von Industry Networks und Professional Relationships zur Erweiterung des verfügbaren Talent Pools und Knowledge Base.\n• Performance-Based Progression: Merit-based Advancement-Systeme, die kontinuierliche Excellence belohnen und Top-Talente langfristig binden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "In welcher Weise optimiert ADVISORI die Kommunikation und Stakeholder-Relations von Aufsichtsrat und Vorstand, um Investor Confidence und Regulatory Approval zu maximieren?",
        answer: "Exzellente Kommunikation und Stakeholder-Management sind essentiell für Banking-Success und regulatorische Akzeptanz. ADVISORI entwickelt comprehensive Communication-Strategien, die nicht nur BaFin-Requirements erfüllen, sondern auch Investor Relations optimieren, Customer Trust aufbauen und Market Positioning stärken.\n\n📢 Strategic Communication Excellence:\n• Investor Relations Optimization: Professionelle Gestaltung von Investor Communications, Quarterly Updates und Strategic Narratives, die Confidence aufbauen und Valuation-Support bieten.\n• Regulatory Interface Management: Strategische BaFin-Kommunikation durch experienced Führungskräfte, die Vertrauen aufbauen und Cooperative Relationships ermöglichen.\n• Media and Public Relations: Aufbau positiver Public Perception durch Strategic Communications, Thought Leadership und Industry Engagement von Board-Members.\n• Crisis Communication Readiness: Vorbereitung auf Communication-Challenges durch Media Training, Message Development und Rapid Response-Capabilities.\n\n🎯 ADVISORI's Stakeholder Excellence Strategy:\n• Multi-Channel Communication Design: Integrierte Kommunikationsstrategien, die verschiedene Stakeholder-Gruppen mit maßgeschneiderten Messages und Channels erreichen.\n• Thought Leadership Development: Positionierung von Board-Members als Industry Experts durch Speaking Engagements, Publications und Conference Participation.\n• Transparency and Disclosure Excellence: Proaktive Information-Sharing, die über regulatorische Mindestanforderungen hinausgeht und Stakeholder-Trust maximiert.\n• Feedback Integration Systems: Strukturierte Stakeholder-Feedback-Prozesse zur kontinuierlichen Verbesserung von Communication-Effectiveness und Relationship-Quality.\n• Digital Communication Integration: Nutzung digitaler Platforms und Tools für Enhanced Stakeholder-Engagement und Real-time Communication-Capabilities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie strukturiert ADVISORI die Integration von Risk Management und Compliance in die Aufsichtsrats- und Vorstandsarbeit, um präventive Governance und proaktive Risikokontrolle zu gewährleisten?",
        answer: "Moderne Banking-Governance erfordert die nahtlose Integration von Risk Management und Compliance in alle Board-Aktivitäten. ADVISORI entwickelt innovative Governance-Frameworks, die Risk Oversight nicht als separate Funktion, sondern als integralen Bestandteil aller strategischen Entscheidungen und operativen Oversight-Aktivitäten positionieren.\n\n🛡️ Integrated Risk Governance Architecture:\n• Risk-Informed Decision Making: Governance-Prozesse, die Risk Assessment und Mitigation-Strategien systematisch in alle Board-Entscheidungen integrieren.\n• Predictive Risk Intelligence: Advanced Analytics und Early Warning Systems, die Board-Members proaktive Risk Identification und Prevention ermöglichen.\n• Compliance-by-Design: Governance-Strukturen, die Compliance-Considerations automatisch in Entscheidungsprozesse einbetten und Regulatory Violations verhindern.\n• Cross-Functional Risk Integration: Board-Committees und Executive Teams mit integrierten Risk-Responsibilities quer durch alle Geschäftsbereiche.\n\n⚖️ ADVISORI's Proactive Risk Excellence:\n• Risk Appetite Framework: Entwicklung klarer Risk Tolerance-Parameter, die strategische Flexibilität ermöglichen, während sie prudential Boundaries aufrechterhalten.\n• Real-Time Risk Monitoring: Digital Dashboards und Alert-Systeme, die Board-Members kontinuierlich über Risk Status und emerging Threats informieren.\n• Scenario Planning Integration: Systematische Integration von Stress-Testing und Scenario Analysis in Strategic Planning und Board-Deliberations.\n• Cultural Risk Management: Embedding einer Risk-Aware-Kultur durch Leadership Example, Training-Programme und Incentive-Alignment.\n• Regulatory Relationship Management: Aufbau constructive Relationships mit Aufsichtsbehörden durch proaktive Kommunikation und Collaborative Approach zu Risk Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie maximiert ADVISORI die internationale Skalierbarkeit und Cross-Border-Expertise von Aufsichtsrat und Vorstand für globale Expansion und EU-Passport-Nutzung?",
        answer: "In einer zunehmend vernetzten Finanzwelt ist internationale Skalierbarkeit ein strategischer Imperative. ADVISORI entwickelt global-ready Governance-Strukturen mit internationaler Expertise, Cross-Border-Kompetenz und EU-weiter Regulatory Intelligence, die nahtlose Expansion und Passport-Nutzung ermöglichen.\n\n🌍 Global Governance Excellence Framework:\n• Multi-Jurisdictional Expertise: Board-Members mit nachgewiesener Erfahrung in verschiedenen EU-Märkten, Regulatory Regimes und Cross-Border-Banking-Operations.\n• EU Passport Optimization: Governance-Strukturen, die für Banking-License-Passporting optimiert sind und regulatorische Arbitrage-Opportunities nutzen.\n• Cultural Intelligence Integration: International diverse Board-Composition mit Deep Understanding verschiedener Market Cultures und Customer Behaviors.\n• Global Network Access: Board-Members mit Premium-Networks in Key European Markets für Business Development und Strategic Partnerships.\n\n🚀 ADVISORI's International Excellence Strategy:\n• Regulatory Arbitrage Intelligence: Strategic Understanding verschiedener EU-Regulatory-Environments zur Optimierung von Licensing-Strategies und Operational Efficiency.\n• Cross-Border Risk Management: International Risk Framework, die Currency-, Political- und Regulatory-Risks sophisticated managen und mitigieren.\n• Market Entry Excellence: Board-Expertise in Market Entry-Strategien, Local Partnership-Development und Regulatory Approval-Processes in Target Markets.\n• Global Talent Pipeline: International Talent-Networks für rapid scaling von Operations und Management-Capabilities in new Markets.\n• Technology and Infrastructure Scalability: Global-ready Technology-Platforms und Operational Infrastructure, die international expansion unterstützen ohne regulatory Compliance zu kompromittieren."
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
