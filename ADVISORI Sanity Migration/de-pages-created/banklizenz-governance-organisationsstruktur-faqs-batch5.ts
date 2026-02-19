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
    console.log('Updating Banklizenz Governance & Organisationsstruktur page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-governance-organisationsstruktur' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-governance-organisationsstruktur" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI Governance-Strukturen für Digital-Transformation und Technology-Integration, die regulatory Requirements mit Innovation-Speed und Competitive-Advantage harmonisieren?",
        answer: "Die digitale Transformation des Banking-Sektors erfordert Governance-Strukturen, die sowohl regulatorische Compliance als auch Innovation-Geschwindigkeit ermöglichen. ADVISORI entwickelt Technology-Governance-Frameworks, die Digital-Innovation vorantreiben, während sie Risk-Management und Regulatory-Oversight aufrechterhalten.\n\n💻 Digital-First Governance Architecture:\n• Technology Risk Management Integration: Governance-Strukturen für Cyber-Security, Data-Privacy, Operational-Technology-Risk und Digital-Resilience als integrierte Komponenten der Organizational-Architecture.\n• Agile-Regulatory Compliance: Governance-Prozesse, die DevOps-Methodologies, Continuous-Integration und Rapid-Deployment unterstützen, während Regulatory-Controls und Audit-Trails aufrechterhalten werden.\n• Innovation Sandbox Governance: Strukturierte Frameworks für Technology-Experimentation, Pilot-Programs und Proof-of-Concept-Development innerhalb kontrollierter Risk-Boundaries.\n• Digital Customer Experience Governance: Governance für Customer-Journey-Optimization, Digital-Channel-Management und Omni-Channel-Strategy unter Berücksichtigung von Consumer-Protection und Privacy-Regulations.\n\n🚀 ADVISORI's Digital Excellence Framework:\n• Cloud-Native Governance: Governance-Strukturen für Cloud-Migration, Multi-Cloud-Strategy und Cloud-Service-Provider-Management mit entsprechenden Security- und Compliance-Kontrollen.\n• AI and Machine Learning Governance: Governance-Frameworks für AI-Model-Development, Algorithm-Transparency, Bias-Detection und Ethical-AI-Implementation in Banking-Processes.\n• API and Platform Governance: Governance für API-Economy-Participation, Platform-Business-Models und Ecosystem-Integration mit Third-Party-Developers und Fintech-Partners.\n• Digital Workforce Integration: Governance für Robotic-Process-Automation, AI-Assisted-Decision-Making und Human-Machine-Collaboration in Banking-Operations.\n• Regulatory Technology Integration: Governance für RegTech-Implementation, Automated-Compliance-Monitoring und Technology-Enabled-Regulatory-Reporting."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "In welcher Weise strukturiert ADVISORI Crisis-Communication und Reputation-Management innerhalb der Governance-Architektur, um Brand-Value und Stakeholder-Confidence zu schützen?",
        answer: "Reputation ist ein kritischer Asset für Banking-Institutionen, das durch Crisis-Events schnell beschädigt werden kann. ADVISORI entwickelt Governance-Frameworks für Reputation-Management und Crisis-Communication, die proaktive Reputation-Protection und effektive Crisis-Response ermöglichen.\n\n📢 Strategic Communication Governance:\n• Integrated Crisis Communication: Governance-Strukturen für koordinierte Communication mit Regulators, Media, Customers, Investors und Employees während Crisis-Events oder Reputation-Threatening-Situations.\n• Proactive Reputation Monitoring: Governance-Systeme für kontinuierliches Reputation-Tracking, Social-Media-Monitoring und Stakeholder-Sentiment-Analysis für Early-Warning-Capabilities.\n• Stakeholder-Specific Communication Strategies: Governance-Frameworks für Tailored-Communication mit verschiedenen Stakeholder-Groups basierend auf deren spezifischen Concerns und Information-Needs.\n• Regulatory Communication Coordination: Governance-Prozesse für professionelle Communication mit BaFin und anderen Authorities während Crisis-Events oder Regulatory-Investigations.\n\n🛡️ ADVISORI's Reputation Excellence Framework:\n• Pre-Authorized Communication Protocols: Governance-Strukturen mit Pre-Approved-Messaging, Spokesperson-Authorities und Communication-Channels für Rapid-Response-Capabilities.\n• Brand-Value Protection: Governance-Systeme, die Brand-Values, Corporate-Identity und Customer-Trust auch während Crisis-Periods schützen und strengthenen.\n• Social Impact and ESG Communication: Governance für CSR-Communication, ESG-Reporting und Social-Impact-Messaging, die Reputation als Responsible-Corporate-Citizen stärken.\n• Digital Reputation Management: Governance für Online-Reputation-Management, Social-Media-Crisis-Response und Digital-Brand-Protection.\n• Learning and Recovery Integration: Governance-Prozesse für Post-Crisis-Analysis, Reputation-Recovery-Strategies und Organizational-Learning zur Stärkung zukünftiger Reputation-Resilience."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie etabliert ADVISORI Governance-Strukturen für Strategic-Planning und Long-Term-Vision-Development, die regulatory Constraints mit ambitious Growth-Targets und Market-Leadership-Aspirations verbinden?",
        answer: "Strategic-Planning in regulierten Banking-Environments erfordert sophisticated Governance-Prozesse, die Long-term-Vision-Development mit Regulatory-Constraints und Market-Opportunities balancieren. ADVISORI entwickelt Strategic-Governance-Frameworks, die ambitious Growth-Targets mit prudent Risk-Management und Regulatory-Compliance verbinden.\n\n🎯 Strategic Vision Governance:\n• Long-Term Strategic Planning: Governance-Prozesse für 3-5-Jahr-Strategic-Planning, die Market-Opportunities, Regulatory-Trends und Competitive-Landscape integrieren.\n• Scenario-Based Strategy Development: Governance-Frameworks für Multiple-Scenario-Planning, Stress-Testing von Strategic-Plans und Contingency-Strategy-Development.\n• Stakeholder-Aligned Strategic Objectives: Strategic-Planning-Governance, die Shareholder-Value, Customer-Value, Employee-Value und Societal-Value in Balance bringt.\n• Innovation-Strategy Integration: Governance für Innovation-Roadmaps, Technology-Investment-Planning und Disruptive-Strategy-Development innerhalb Regulatory-Boundaries.\n\n🏆 ADVISORI's Strategic Excellence Architecture:\n• Dynamic Strategy Calibration: Governance-Systeme für kontinuierliche Strategy-Review, Market-Adaptation und Strategic-Course-Correction basierend auf changing Market-Conditions.\n• Performance-Driven Strategy Execution: Governance-Frameworks für Strategy-Implementation-Tracking, Milestone-Monitoring und Strategic-Initiative-Performance-Management.\n• Board-Level Strategic Oversight: Governance-Strukturen für Board-Level-Strategic-Review, Strategic-Decision-Making und Strategic-Risk-Assessment.\n• Competitive Intelligence Integration: Governance für Market-Intelligence-Gathering, Competitive-Analysis und Strategic-Positioning-Decisions.\n• Legacy-Transformation Strategy: Governance-Prozesse für Strategic-Transformation von Legacy-Systems, Traditional-Processes und Established-Business-Models zur Zukunftsfähigkeit des Institutes."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie integriert ADVISORI Sustainability und Future-Readiness in die Governance-Architektur, um sicherzustellen, dass das Institut für zukünftige Herausforderungen und Chancen optimal positioniert ist?",
        answer: "Zukunftsfähige Banking-Governance muss über aktuelle Anforderungen hinausdenken und das Institut für emerging Challenges und Opportunities positionieren. ADVISORI entwickelt Forward-Looking-Governance-Architectures, die Sustainability, Adaptability und Innovation als fundamentale Organizational-Capabilities etablieren.\n\n🌱 Future-Ready Governance Design:\n• Sustainability-Integrated Governance: Governance-Strukturen, die Environmental-Sustainability, Social-Responsibility und Economic-Sustainability als integrierte Business-Principles etablieren.\n• Adaptive Governance Capabilities: Governance-Systeme mit built-in Flexibility für zukünftige Regulatory-Changes, Market-Disruptions und Technology-Shifts.\n• Innovation-Ecosystem Governance: Governance für External-Innovation-Partnerships, Startup-Incubation, Venture-Capital-Activities und Technology-Scouting.\n• Next-Generation Workforce Governance: Governance für Future-Skills-Development, Digital-Natives-Integration und Generational-Change-Management.\n\n🔮 ADVISORI's Sustainability Excellence Framework:\n• Climate-Resilient Business Strategy: Governance für Climate-Risk-Integration, Transition-Planning und Green-Finance-Strategy-Development.\n• Circular Economy Integration: Governance für Resource-Efficiency, Waste-Reduction und Sustainable-Business-Model-Innovation.\n• Stakeholder Capitalism Governance: Governance-Frameworks, die Multiple-Stakeholder-Value-Creation und Long-term-Sustainable-Growth priorisieren.\n• Intergenerational Value Creation: Governance-Systeme, die Current-Performance und Long-term-Legacy-Building balancieren für Sustainable-Institution-Building.\n• Future-Proofing Investment Strategy: Governance für Strategic-Investment-Decisions, die Current-ROI und Future-Optionality optimieren und das Institut für zukünftige Market-Leadership positionieren."
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
