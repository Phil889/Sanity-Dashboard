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
    console.log('Updating Banklizenz Feasibility Businessplan page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-feasibility-businessplan' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-feasibility-businessplan" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie integriert ADVISORI Innovation Management und Disruptive Technology Adoption in unseren Banking-Businessplan für Future Market Leadership?",
        answer: "Innovation ist der Schlüssel zu nachhaltiger Marktführerschaft in der sich schnell entwickelnden Banking-Landschaft. ADVISORI entwickelt Innovation-Driven Businesspläne, die Emerging Technologies mit Strategic Innovation Management kombinieren für Sustainable Competitive Advantage und Market Disruption Leadership.\n\n🚀 Innovation Excellence Framework:\n• Innovation Pipeline Management: Systematic Innovation Portfolio mit Stage-Gate Process für Continuous Technology Innovation und Product Development Excellence.\n• Emerging Technology Integration: Strategic Evaluation und Implementation von AI, Blockchain, Quantum Computing und IoT für Next-Generation Banking Services.\n• Innovation Culture Development: Cultural Transformation Programme für Innovation Mindset, Experimentation Excellence und Failure-Tolerant Learning Environment.\n• External Innovation Ecosystem: Strategic Partnerships mit Universities, Research Institutes und Innovation Labs für Access to Cutting-Edge Research.\n\n💡 Disruptive Technology Strategy:\n• Technology Roadmap Excellence: Long-Term Technology Planning mit Emerging Technology Assessment und Strategic Technology Investment für Future Readiness.\n• Digital Twin und Simulation: Advanced Modeling Capabilities für Product Testing, Risk Simulation und Customer Experience Optimization.\n• Advanced Analytics Integration: Implementation von Predictive Analytics, Machine Learning und Real-Time Decision Making für Intelligent Banking Operations.\n• Innovation Metrics und KPIs: Comprehensive Innovation Measurement Framework für ROI Tracking und Innovation Performance Optimization."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt Corporate Governance und Board Excellence in unserem Banking-Businessplan für Regulatory Confidence und Investor Trust?",
        answer: "Corporate Governance Excellence ist das Fundament für Regulatory Approval und Investor Confidence in Banking-Businessplänen. ADVISORI entwickelt Governance-Excellence Frameworks, die Best-Practice Governance mit Strategic Leadership kombinieren für Maximum Stakeholder Trust und Regulatory Compliance.\n\n🏛️ Governance Excellence Architecture:\n• Board Composition Optimization: Strategic Board Design mit Independent Directors, Industry Expertise und Diverse Perspectives für Optimal Board Effectiveness.\n• Committee Structure Excellence: Specialized Committee Design (Audit, Risk, Compensation, Nomination) mit Clear Mandates und Performance Measurement.\n• Governance Technology Integration: Digital Board Platforms mit Real-Time Information Access und Advanced Board Analytics für Enhanced Decision Making.\n• Stakeholder Engagement Excellence: Comprehensive Stakeholder Communication Strategy mit Transparency und Accountability for All Stakeholder Groups.\n\n⚡ Leadership und Oversight Framework:\n• Executive Leadership Excellence: CEO und C-Suite Performance Management mit Clear Accountability und Strategic Performance Metrics.\n• Risk Governance Integration: Board-Level Risk Oversight mit Risk Appetite Framework und Three Lines of Defense Governance Integration.\n• Compliance Governance Excellence: Board-Level Compliance Oversight mit Regulatory Relationship Management und Compliance Culture Development.\n• ESG Governance Leadership: Environmental, Social und Governance Integration in Board Decision Making für Sustainable Value Creation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie optimiert ADVISORI Partnership Strategy und Ecosystem Development in unserem Banking-Businessplan für Accelerated Growth und Market Expansion?",
        answer: "Strategic Partnerships sind Force Multipliers für Banking Success und ermöglichen Accelerated Market Entry, Enhanced Capabilities und Ecosystem Value Creation. ADVISORI entwickelt Partnership-Centric Businesspläne, die Strategic Alliance Management mit Ecosystem Development kombinieren für Exponential Growth und Market Leadership.\n\n🤝 Strategic Partnership Framework:\n• Partnership Portfolio Management: Diversified Partnership Strategy mit Technology Partners, Distribution Partners und Strategic Alliances für Comprehensive Market Coverage.\n• Partnership Value Creation: Win-Win Partnership Design mit Clear Value Proposition für alle Partners und Mutual Benefit Optimization.\n• Partnership Integration Excellence: Seamless Partner Integration mit Technology Integration, Process Alignment und Cultural Harmony für Maximum Partnership Effectiveness.\n• Partnership Performance Management: KPI-Driven Partnership Monitoring mit Regular Performance Reviews und Continuous Partnership Optimization.\n\n🌐 Ecosystem Development Strategy:\n• Platform Business Model: Development von Multi-Sided Platform Strategy mit Network Effects und Ecosystem Value Creation für Exponential Growth.\n• API Economy Integration: Open Banking API Strategy mit Third-Party Developer Ecosystem und Platform Revenue Generation.\n• Fintech Collaboration Excellence: Strategic Fintech Partnerships mit Innovation Acceleration und Market Entry Speed Enhancement.\n• Cross-Industry Partnerships: Strategic Alliances mit Non-Financial Industries für Customer Base Expansion und Service Diversification."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie stellt ADVISORI sicher, dass unser Banking-Businessplan optimal für Post-Lizenzierung Success und Sustainable Growth positioniert ist?",
        answer: "Post-Lizenzierung Execution ist oft der entscheidende Faktor zwischen Banking License Success und Business Failure. ADVISORI entwickelt Execution-Ready Businesspläne mit detaillierter Implementation Roadmap und Success Metrics für Seamless Transition von License Approval zu Market Success.\n\n📈 Post-License Success Framework:\n• Implementation Roadmap Excellence: Detailed 100-Day, 1-Year und 3-Year Implementation Plans mit Critical Milestones und Success Metrics für Systematic Business Launch.\n• Operational Readiness Assessment: Comprehensive Readiness Evaluation mit System Testing, Process Validation und Team Preparation für Smooth Operations Launch.\n• Market Entry Strategy: Strategic Market Launch mit Customer Acquisition Strategy, Brand Building und Market Positioning für Rapid Market Penetration.\n• Performance Monitoring Excellence: Real-Time Business Performance Monitoring mit KPI Dashboards und Corrective Action Triggers für Continuous Success Optimization.\n\n🎯 Sustainable Growth Architecture:\n• Scalability Planning: Business Model Design mit Scalable Infrastructure, Variable Cost Structure und Growth Accommodation für Sustainable Expansion.\n• Continuous Innovation Pipeline: Post-Launch Innovation Strategy mit Product Development Pipeline und Market Opportunity Exploration für Long-Term Competitiveness.\n• Stakeholder Relationship Management: Ongoing Relationship Management mit Regulators, Investors und Partners für Sustained Support und Growth Facilitation.\n• Long-Term Strategic Planning: Multi-Year Strategic Planning mit Scenario Planning und Strategic Option Development für Sustainable Market Leadership."
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
