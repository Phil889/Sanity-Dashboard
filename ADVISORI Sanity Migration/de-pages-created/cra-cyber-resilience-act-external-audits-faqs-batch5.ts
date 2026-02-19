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
    console.log('Updating CRA Cyber Resilience Act External Audits page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-external-audits' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-external-audits" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie transformiert ADVISORI externe CRA-Audit-Expertise zu einem Strategic-Catalyst für AI-Integration-Excellence und zur Optimierung von C-Level-AI-Governance in Security-kritischen Machine-Learning-Environments?",
        answer: "External-Audit-Excellence in CRA-Contexts schafft einzigartige Foundations für AI-Integration-Excellence und Machine-Learning-Security-Governance. ADVISORI nutzt Audit-Intelligence zur Development sophisticierter AI-Security-Frameworks, die C-Level-AI-Governance-Objectives optimal unterstützen und Secure-AI-Implementation für Competitive-Advantage und Innovation-Leadership ermöglichen.\n\n🤖 AI-Security-Excellence durch CRA-Audit-Intelligence:\n• AI-Security-by-Design-Frameworks: Development von comprehensive AI-Security-Architectures, die Machine-Learning-Systems mit CRA-Audit-Standards und Security-Excellence integrieren.\n• ML-Model-Security-Validation: Systematic Validation von Machine-Learning-Models und AI-Systems basierend auf External-Audit-Methodologies für Risk-mitigated AI-Deployment.\n• AI-Governance-Security-Integration: Seamless Integration von AI-Governance-Principles mit Security-Audit-Standards für Ethical-AI-Implementation und Regulatory-Compliance.\n• Automated-Security-AI-Monitoring: Implementation von AI-powered Security-Monitoring-Systems, die External-Audit-Intelligence für Predictive-Security-Management nutzen.\n\n💡 ADVISORI's AI-Security-Excellence-Framework:\n• Executive-AI-Security-Strategy: Development von C-Level-AI-Security-Strategies, die Business-Innovation mit Security-Excellence und Audit-Compliance optimal balancieren.\n• AI-Risk-Assessment-Methodologies: Creation von specialized Risk-Assessment-Approaches für AI-Systems, die External-Audit-Standards mit AI-specific Security-Requirements verbinden.\n• Cross-functional-AI-Security-Teams: Establishment von interdisciplinary Teams, die AI-Expertise mit Security-Excellence und Audit-Knowledge für Holistic-AI-Security integrieren.\n• AI-Security-Innovation-Labs: Development von Innovation-Environments, die AI-Experimentation mit Security-Excellence und Audit-Readiness für Safe-Innovation ermöglichen.\n• Scalable-AI-Security-Infrastructure: Creation von Scalable-Infrastructure-Approaches für Enterprise-AI-Deployment mit maintained Security-Excellence und Audit-Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "In welcher Weise nutzt ADVISORI externe CRA-Audit-Success zur Entwicklung von Future-proof-Technology-Strategies und zur Stärkung von C-Level-Digital-Transformation-Leadership in emerging Technology-Landscapes?",
        answer: "External-Audit-Success schafft wertvolle Foundations für Future-Technology-Adoption und Digital-Transformation-Leadership in rapidly-evolving Technology-Landscapes. ADVISORI transformiert Audit-Excellence in comprehensive Future-Technology-Strategies, die C-Level-Digital-Transformation-Objectives optimal unterstützen und Emerging-Technology-Leadership für Long-term-Competitive-Advantage ermöglichen.\n\n🔮 Future-Technology-Leadership durch Audit-Excellence:\n• Emerging-Technology-Security-Frameworks: Development von Security-Frameworks für Emerging-Technologies wie Quantum-Computing, Blockchain und IoT-Integration mit CRA-Audit-Standards.\n• Technology-Trend-Security-Analysis: Systematic Analysis von Technology-Trends und Future-Security-Requirements für Proactive-Technology-Strategy und Investment-Planning.\n• Innovation-Security-Integration: Seamless Integration von Security-Excellence in Innovation-Processes für Risk-mitigated Technology-Experimentation und Future-Technology-Adoption.\n• Digital-Transformation-Security-Roadmaps: Development von comprehensive Roadmaps, die Digital-Transformation-Objectives mit Security-Excellence und Audit-Readiness verbinden.\n\n🚀 ADVISORI's Future-Technology-Excellence-Framework:\n• Technology-Portfolio-Security-Optimization: Strategic Optimization von Technology-Portfolios für Future-Readiness mit maintained Security-Excellence und Audit-Compliance.\n• Cross-Industry-Technology-Intelligence: Utilization von Cross-Industry-Insights und Technology-Intelligence für Competitive-Advantage-Identification und Innovation-Opportunity-Assessment.\n• Future-Skills-Security-Development: Development von Future-Skills-Training-Programs, die Technology-Evolution mit Security-Excellence und Audit-Knowledge integrieren.\n• Technology-Partnership-Security-Evaluation: Assessment von Technology-Partnership-Opportunities basierend auf Security-Excellence und Future-Technology-Potential für Strategic-Alliance-Development.\n• Digital-Legacy-Security-Management: Strategic Management von Legacy-Technology-Integration mit Future-Technology-Adoption für Seamless-Digital-Transformation ohne Security-Compromises."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie orchestriert ADVISORI externe CRA-Audit-Excellence zur Entwicklung von Crisis-Management-Leadership und zur Optimierung von C-Level-Business-Continuity-Strategies in High-Stakes-Security-Incident-Scenarios?",
        answer: "External-Audit-Excellence schafft einzigartige Crisis-Management-Capabilities und Business-Continuity-Leadership-Competencies für High-Stakes-Security-Incident-Management. ADVISORI transformiert Audit-Experience in comprehensive Crisis-Leadership-Frameworks, die C-Level-Crisis-Management-Objectives optimal unterstützen und Business-Continuity-Excellence in Critical-Security-Scenarios sichern.\n\n⚡ Crisis-Leadership-Excellence durch Audit-Intelligence:\n• Crisis-Response-Security-Protocols: Development von sophisticated Crisis-Response-Protocols, die External-Audit-Standards mit Real-time-Security-Incident-Management integrieren.\n• Executive-Crisis-Communication: Creation von Executive-Level-Crisis-Communication-Strategies für Stakeholder-Management während Security-Incidents mit maintained Credibility und Trust.\n• Business-Continuity-Security-Integration: Seamless Integration von Security-Excellence in Business-Continuity-Planning für Comprehensive-Resilience während Crisis-Scenarios.\n• Incident-Response-Audit-Readiness: Development von Incident-Response-Capabilities, die Crisis-Management mit ongoing Audit-Compliance und Security-Excellence verbinden.\n\n🛡️ ADVISORI's Crisis-Excellence-Framework:\n• Crisis-Simulation-Security-Training: Implementation von realistic Crisis-Simulation-Programs, die Leadership-Teams für Security-Incident-Management mit Audit-Standards vorbereiten.\n• Stakeholder-Crisis-Confidence-Management: Development von Stakeholder-Confidence-Maintenance-Strategies während Crisis-Events mit demonstrated Security-Excellence und Professional-Crisis-Handling.\n• Post-Crisis-Security-Learning: Systematic Post-Crisis-Analysis und Learning-Integration für ongoing Security-Excellence-Improvement und Future-Crisis-Preparedness.\n• Crisis-Recovery-Audit-Integration: Integration von Crisis-Recovery-Processes mit External-Audit-Requirements für Maintained-Compliance während Recovery-Phases.\n• Crisis-Leadership-Security-Development: Development von Crisis-Leadership-Capabilities, die Security-Excellence mit Executive-Crisis-Management für Effective-Leadership in High-Pressure-Scenarios integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie etabliert ADVISORI externe CRA-Audit-Success als Foundation für Legacy-Modernization-Excellence und zur Optimierung von C-Level-Technology-Debt-Management in komplexen Enterprise-Architecture-Transformations?",
        answer: "External-Audit-Success schafft wertvolle Intelligence für Legacy-System-Modernization und Technology-Debt-Management in komplexen Enterprise-Environments. ADVISORI nutzt Audit-Excellence zur Development sophisticierter Modernization-Strategies, die C-Level-Technology-Debt-Management-Objectives optimal unterstützen und Legacy-Transformation für Future-Readiness mit maintained Security-Excellence ermöglichen.\n\n🔧 Legacy-Modernization-Excellence durch Audit-Intelligence:\n• Legacy-Security-Assessment: Comprehensive Assessment von Legacy-Systems basierend auf CRA-Audit-Standards für Risk-informed Modernization-Planning und Security-Gap-Identification.\n• Modernization-Security-Roadmaps: Development von Strategic-Modernization-Roadmaps, die Legacy-Transformation mit Security-Excellence und Audit-Compliance optimal balancieren.\n• Technology-Debt-Security-Prioritization: Systematic Prioritization von Technology-Debt-Reduction basierend auf Security-Risk-Assessment und Business-Value-Analysis.\n• Legacy-Integration-Security-Management: Sophisticated Management von Legacy-Modern-System-Integration für Maintained-Security-Excellence während Transformation-Phases.\n\n⚡ ADVISORI's Modernization-Excellence-Framework:\n• Executive-Modernization-Strategy: Development von C-Level-Modernization-Strategies, die Technology-Debt-Reduction mit Business-Continuity und Security-Excellence optimal integrieren.\n• Phased-Modernization-Security-Implementation: Implementation von Phased-Modernization-Approaches, die Risk-Mitigation mit Operational-Continuity und Audit-Compliance verbinden.\n• Modernization-ROI-Security-Optimization: Optimization von Modernization-Investment-ROI durch Security-Excellence-Integration und Risk-adjusted Value-Analysis.\n• Cross-functional-Modernization-Teams: Establishment von interdisciplinary Modernization-Teams, die Technical-Expertise mit Security-Knowledge und Business-Understanding integrieren.\n• Modernization-Success-Measurement: Development von sophisticated Success-Measurement-Frameworks für Modernization-Projects mit Security-Excellence-KPIs und Business-Value-Metrics."
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
