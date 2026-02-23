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
    console.log('Updating CRA Cyber Resilience Act Self-Assessment page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-self-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-self-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI CRA Self-Assessment-Capabilities als Foundation für Digital-Trust-Ecosystem-Building und Platform-Economy-Leadership, um C-Level-Führungskräften Multi-Stakeholder-Value-Creation zu ermöglichen?",
        answer: "Die Platform-Economy erfordert Digital-Trust-Ecosystems, die auf verifizierbarer Security-Excellence basieren. ADVISORI entwickelt Assessment-driven Trust-Frameworks, die CRA-Compliance als Foundation für Ecosystem-Leadership und Multi-Party-Collaboration nutzen. Unser Ansatz transformiert Self-Assessment-Capabilities in Trust-as-a-Service-Offerings für Ecosystem-Value-Creation.\n\n🌐 Digital-Trust-Ecosystem-Excellence:\n• Trust-as-a-Service-Platform: Development von Assessment-basierten Trust-Verification-Services für Ecosystem-Partners und Multi-Party-Collaboration-Enablement.\n• Ecosystem-Security-Orchestration: Comprehensive Security-Coordination across Digital-Ecosystems mit Standardized-Assessment-Frameworks für Consistent-Trust-Levels.\n• Multi-Party-Risk-Management: Advanced Risk-Sharing und -Mitigation-Strategies für Complex-Ecosystem-Relationships basierend auf Assessment-Intelligence.\n• Value-Network-Optimization: Assessment-driven Optimization von Partner-Selection, Collaboration-Models und Value-Distribution für Enhanced-Ecosystem-Performance.\n\n🔗 ADVISORI's Ecosystem-Leadership-Framework:\n• Platform-Trust-Infrastructure: Aufbau zentraler Trust-Infrastructure für Digital-Platforms mit Assessment-based Verification und Continuous-Monitoring-Capabilities.\n• Cross-Industry-Standards-Development: Leadership in Development industry-übergreifender Trust-Standards und Assessment-Protocols für Ecosystem-Interoperability.\n• Network-Effect-Maximization: Strategic Utilization von Assessment-Excellence für Network-Effect-Creation und Ecosystem-Growth-Acceleration.\n• Trust-Economy-Innovation: Development neuer Business-Models basierend auf Trust-Verification und Assessment-as-a-Service für Revenue-Diversification.\n• Global-Ecosystem-Expansion: International-Scaling von Trust-Ecosystems mit Cross-Border-Assessment-Standards für Global-Market-Leadership."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "In welcher Weise integriert ADVISORI CRA Self-Assessment-Excellence in Talent-Acquisition und Human-Capital-Development-Strategien, um C-Level-Führungskräften Cybersecurity-Talent-Magnetism und Team-Excellence zu verschaffen?",
        answer: "Top-Cybersecurity-Talent wird zunehmend zu einem entscheidenden Competitive-Advantage-Factor. ADVISORI entwickelt Assessment-driven Talent-Strategies, die Security-Excellence als Employer-Brand-Differentiator nutzen und High-Performance-Security-Teams aufbauen. Unser Ansatz transformiert CRA-Assessment-Capabilities in Talent-Attraction und -Development-Assets.\n\n👥 Talent-Excellence-Ecosystem:\n• Security-Talent-Magnetism: Utilization von Assessment-Leadership für Attraction von Top-Tier-Security-Professionals und High-Potential-Candidates.\n• Excellence-driven Employer-Branding: Development von Security-Excellence-basierten Employer-Value-Propositions für Enhanced-Talent-Attraction.\n• Assessment-based Skill-Development: Professional Development-Programs basierend auf Assessment-Methodologies für Continuous-Team-Excellence-Enhancement.\n• Innovation-Culture-Building: Cultivation einer Innovation-orientierten Security-Culture durch Assessment-driven Learning und Experimentation-Encouragement.\n\n🎯 ADVISORI's Human-Capital-Strategy:\n• Competency-Framework-Development: Comprehensive Security-Competency-Frameworks basierend auf Assessment-Best-Practices für Structured-Talent-Development.\n• Performance-Excellence-Systems: Assessment-integrated Performance-Management-Systems für Objective-Evaluation und Merit-based Career-Advancement.\n• Knowledge-Sharing-Platforms: Internal Knowledge-Sharing-Systems für Assessment-Expertise-Distribution und Collective-Intelligence-Building.\n• Leadership-Pipeline-Development: Strategic Development von Security-Leadership-Capabilities durch Assessment-Excellence-Training und Mentoring-Programs.\n• Industry-Recognition-Programs: Professional Recognition-Programs für Team-Members basierend auf Assessment-Excellence und Industry-Contribution."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie strukturiert ADVISORI CRA Self-Assessment-Investment-Strategies für maximale Capital-Efficiency und Technology-ROI, um C-Level-Führungskräften Cybersecurity-Budget-Optimization und Strategic-Investment-Guidance zu ermöglichen?",
        answer: "Cybersecurity-Investments erfordern sophisticated ROI-Modeling und Strategic-Allocation für maximale Business-Value-Creation. ADVISORI entwickelt Assessment-driven Investment-Frameworks, die Security-Spending in measurable Business-Returns transformieren. Unser Ansatz optimiert Capital-Efficiency durch Data-driven Investment-Decisions und Strategic-Technology-Selection.\n\n💰 Investment-Excellence-Optimization:\n• ROI-driven Assessment-Investments: Systematic ROI-Evaluation aller Assessment-Related-Investments mit Quantifiable-Business-Impact-Measurement.\n• Technology-Stack-Optimization: Assessment-based Evaluation und Selection von Security-Technologies für Optimal-Cost-Benefit-Ratios und Integration-Efficiency.\n• Budget-Allocation-Intelligence: Data-driven Budget-Allocation-Strategies basierend auf Assessment-Insights und Business-Priority-Alignment.\n• Investment-Portfolio-Diversification: Strategic Diversification von Security-Investments across Different-Risk-Categories und Technology-Areas für Balanced-Portfolio-Performance.\n\n📈 ADVISORI's Capital-Efficiency-Framework:\n• Investment-Impact-Analytics: Advanced Analytics für Measurement von Security-Investment-Impact auf Business-Performance und Risk-Reduction.\n• Technology-Lifecycle-Management: Comprehensive Lifecycle-Management von Security-Technologies mit Assessment-driven Upgrade-Planning und Deprecation-Strategies.\n• Vendor-Relationship-Optimization: Strategic Vendor-Management basierend auf Assessment-Performance und Value-Delivery für Enhanced-Partnership-ROI.\n• Innovation-Investment-Balance: Optimal Balance zwischen Operational-Security-Investments und Innovation-oriented R&D-Spending für Sustainable-Competitive-Advantage.\n• Financial-Risk-Mitigation: Assessment-driven Financial-Risk-Management für Security-Investment-Protection und Downside-Risk-Minimization."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie positioniert ADVISORI CRA Self-Assessment-Excellence als Catalyst für Digital-Sovereignty und Cyber-Independence-Strategies, um C-Level-Führungskräften Strategic-Autonomy und National-Security-Alignment zu ermöglichen?",
        answer: "Digital-Sovereignty wird zunehmend zu einem strategischen Imperative für Unternehmen und Nationen. ADVISORI entwickelt Assessment-Frameworks, die nicht nur CRA-Compliance sicherstellen, sondern auch Strategic-Independence und Cyber-Sovereignty unterstützen. Unser Ansatz balanciert Global-Connectivity mit Strategic-Autonomy für Sustainable-Competitive-Advantage.\n\n🛡️ Digital-Sovereignty-Excellence-Framework:\n• Independence-oriented Assessment: Assessment-Methodologies, die Technology-Dependencies evaluieren und Strategic-Independence-Opportunities identifizieren.\n• Supply-Chain-Sovereignty: Comprehensive Assessment von Technology-Supply-Chains für Reduced-Foreign-Dependencies und Enhanced-Strategic-Control.\n• Critical-Infrastructure-Protection: Specialized Assessment-Frameworks für Critical-Infrastructure-Components mit National-Security-Implications.\n• Data-Sovereignty-Integration: Assessment-driven Data-Localization und -Protection-Strategies für Enhanced-Information-Sovereignty.\n\n🏛️ ADVISORI's Strategic-Autonomy-Methodology:\n• Technology-Independence-Roadmap: Strategic Planning für Technology-Independence-Achievement mit Phased-Approach und Risk-Mitigation-Strategies.\n• Domestic-Capability-Building: Assessment-based Development von Domestic-Security-Capabilities und Local-Technology-Ecosystems.\n• International-Cooperation-Balance: Strategic Balance zwischen International-Collaboration und National-Security-Requirements für Optimal-Global-Integration.\n• Resilience-Architecture-Design: Design von Self-Reliant-Security-Architectures mit Minimal-External-Dependencies für Enhanced-Strategic-Resilience.\n• Policy-Alignment-Excellence: Assessment-Framework-Alignment mit National-Cybersecurity-Policies und Strategic-Government-Initiatives für Synchronized-Development."
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
