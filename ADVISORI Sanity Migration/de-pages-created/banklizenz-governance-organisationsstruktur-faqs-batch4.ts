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
    console.log('Updating Banklizenz Governance & Organisationsstruktur page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie etabliert ADVISORI Performance-Management und Incentive-Strukturen innerhalb der Governance-Architektur, die sowohl regulatorische Compliance als auch High-Performance-Culture fördern?",
        answer: "Moderne Banking-Governance erfordert sophisticated Performance-Management-Systeme, die regulatorische Anforderungen an Risk-adjusted Compensation mit High-Performance-Culture und Talent-Retention verbinden. ADVISORI entwickelt Incentive-Architekturen, die alle Stakeholder-Interests balancieren und nachhaltigen Business-Erfolg fördern.\n\n🎯 Strategic Performance Governance:\n• Risk-Adjusted Incentive Design: Compensation-Strukturen, die nicht nur Short-term-Performance belohnen, sondern auch Long-term-Risk-Considerations und Regulatory-Compliance integrieren.\n• Multi-Stakeholder Performance Metrics: KPI-Frameworks, die Financial-Performance, Risk-Management, Customer-Satisfaction, Employee-Engagement und ESG-Goals balancieren.\n• Regulatory-Compliant Clawback Mechanisms: Sophisticated Clawback- und Malus-Provisions, die Regulatory-Requirements erfüllen und Risk-Taking-Behavior moderieren.\n• Culture-Driven Performance Management: Performance-Systeme, die Ethical-Behavior, Collaboration und Innovation fördern, anstatt nur Financial-Metrics zu optimieren.\n\n🏆 ADVISORI's Performance Excellence Framework:\n• Dynamic Performance Calibration: Adaptive Performance-Standards, die sich mit Business-Cycle, Regulatory-Environment und Strategic-Priorities entwickeln.\n• Technology-Enhanced Performance Monitoring: Real-time Performance-Dashboards und Predictive-Analytics für Proactive-Performance-Management und Early-Warning-Systems.\n• Cross-Functional Performance Integration: Performance-Management, das Silo-Denken verhindert und Cross-Departmental-Collaboration und Shared-Accountability fördert.\n• Leadership Development Integration: Performance-Prozesse, die High-Potential-Identification, Succession-Planning und Leadership-Development integrieren.\n• Board-Level Performance Oversight: Governance-Strukturen für Board-Level-Review von Executive-Performance, Compensation-Decisions und Organizational-Health-Metrics."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "In welcher Weise strukturiert ADVISORI Change-Management und Organizational-Development innerhalb der Governance-Architektur, um kontinuierliche Innovation bei regulatorischer Stabilität zu ermöglichen?",
        answer: "Banking-Institutionen müssen gleichzeitig Innovation vorantreiben und regulatorische Stabilität aufrechterhalten - eine komplexe Balance, die strukturiertes Change-Management erfordert. ADVISORI entwickelt Governance-Frameworks, die Organizational-Agility und Regulatory-Compliance harmonisieren und nachhaltige Transformation ermöglichen.\n\n🔄 Strategic Change Governance:\n• Innovation-Enabling Change Frameworks: Governance-Strukturen, die kontrollierte Innovation und Experimentation ermöglichen, während Regulatory-Boundaries und Risk-Limits respektiert werden.\n• Risk-Managed Transformation: Change-Management-Prozesse mit integrierten Risk-Assessments, Compliance-Reviews und Impact-Evaluations für Safe-Innovation.\n• Stakeholder-Aligned Change Communication: Change-Communication-Strategies, die Internal-Teams, External-Stakeholders und Regulatory-Authorities informiert und Confidence aufbaut.\n• Cultural Change Integration: Change-Management, das nicht nur Process-Changes implementiert, sondern auch Cultural-Shifts und Mindset-Transformations fördert.\n\n🚀 ADVISORI's Transformation Excellence Approach:\n• Agile Governance for Change: Governance-Prozesse, die Agile-Methodologies und Iterative-Development unterstützen, während Compliance-Standards aufrechterhalten werden.\n• Technology-Enabled Change Management: Digital-Tools für Change-Tracking, Impact-Measurement und Stakeholder-Engagement während Transformation-Prozessen.\n• Learning Organization Governance: Governance-Strukturen, die Continuous-Learning, Knowledge-Sharing und Organizational-Memory-Building fördern.\n• Future-Ready Change Capability: Change-Management-Capabilities, die das Unternehmen für zukünftige Regulatory-Changes, Market-Disruptions und Technology-Shifts vorbereiten.\n• Performance-Driven Change Metrics: KPIs und Dashboards für Change-Effectiveness-Measurement, Adoption-Tracking und ROI-Validation von Transformation-Initiatives."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie entwickelt ADVISORI Governance-Strukturen für Strategic-Partnerships und Ecosystem-Collaboration, die regulatorische Oversight mit Business-Agility in Fintech-Partnerschaften verbinden?",
        answer: "Die moderne Banking-Landschaft erfordert extensive Partnerships mit Fintech-Unternehmen, Technology-Providers und anderen Financial-Services-Players. ADVISORI entwickelt Governance-Frameworks für Partnership-Management, die Regulatory-Compliance mit Business-Innovation und Ecosystem-Value-Creation verbinden.\n\n🤝 Strategic Partnership Governance:\n• Third-Party Risk Management Integration: Comprehensive Governance für Partner-Due-Diligence, Ongoing-Monitoring und Risk-Assessment von Fintech-Partnerships und Technology-Vendors.\n• Regulatory-Compliant Partnership Structures: Partnership-Governance, die Outsourcing-Regulations, Data-Privacy-Requirements und Supervisory-Expectations für Third-Party-Relationships erfüllt.\n• Innovation-Partnership Frameworks: Governance-Strukturen für Controlled-Innovation mit Fintech-Partners, einschließlich Sandbox-Participation und Pilot-Program-Management.\n• Ecosystem Value Creation: Partnership-Management, das nicht nur Risk-Mitigation betreibt, sondern auch Synergy-Realization und Mutual-Value-Creation optimiert.\n\n🌐 ADVISORI's Ecosystem Governance Architecture:\n• Dynamic Partnership Assessment: Adaptive Governance-Intensity basierend auf Partner-Risk-Profile, Business-Criticality und Regulatory-Sensitivity der Partnership.\n• Technology-Enabled Partner Monitoring: Digital-Platforms für Real-time-Partner-Performance-Monitoring, SLA-Tracking und Automated-Alert-Systems bei Partner-Issues.\n• Cross-Border Partnership Governance: Governance-Strukturen für International-Partnerships, Cross-Jurisdictional-Compliance und Global-Vendor-Management.\n• Strategic Alliance Management: Governance-Prozesse für Strategic-Partnerships, Joint-Ventures und Ecosystem-Participation, die Business-Strategy und Regulatory-Requirements balancieren.\n• Partnership Innovation Labs: Governance-Frameworks für Innovation-Partnerships, Proof-of-Concept-Development und Controlled-Technology-Experimentation mit External-Partners."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie integriert ADVISORI Talent-Management und Human-Capital-Development in die Governance-Struktur, um sowohl Regulatory-Expertise als auch Innovation-Capabilities zu entwickeln?",
        answer: "Banking-Success hängt fundamentally von Human-Capital ab, das sowohl Deep-Regulatory-Expertise als auch Innovation-Capabilities vereint. ADVISORI entwickelt Talent-Governance-Strukturen, die Strategic-Workforce-Planning, Capability-Development und Succession-Management in ein integriertes Human-Capital-Management-System integrieren.\n\n👥 Strategic Talent Governance:\n• Regulatory-Expertise Development: Structured-Learning-Paths und Certification-Programs für Critical-Regulatory-Roles, einschließlich Ongoing-Education und Regulatory-Update-Training.\n• Innovation-Capability Building: Talent-Development-Programs, die Digital-Skills, Design-Thinking und Innovation-Methodologies fördern für Future-Ready-Workforce.\n• Succession Planning Integration: Governance-Processes für Leadership-Succession, Critical-Role-Identification und Talent-Pipeline-Development für Business-Continuity.\n• Cross-Functional Talent Mobility: Talent-Management, das Cross-Departmental-Movement, Skill-Diversification und Organizational-Knowledge-Sharing fördert.\n\n🎓 ADVISORI's Human Capital Excellence Framework:\n• Competency-Based Talent Architecture: Skill-Frameworks und Competency-Models, die Current-Requirements und Future-Needs für Regulatory-Compliance und Business-Innovation balancieren.\n• Technology-Enhanced Talent Development: Digital-Learning-Platforms, AI-powered-Skill-Assessment und Personalized-Development-Paths für Scalable-Talent-Growth.\n• Cultural Integration and Diversity: Talent-Governance, die Diversity-and-Inclusion fördert, Cultural-Integration unterstützt und Collaborative-High-Performance-Teams aufbaut.\n• Performance-Driven Talent Management: Talent-Processes, die High-Performance identifizieren, fördern und retainieren, während sie Regulatory-Risk-Awareness und Ethical-Behavior verstärken.\n• External Talent Ecosystem: Governance für External-Talent-Acquisition, Consultant-Management und Strategic-Talent-Partnerships für Access-to-Specialized-Expertise."
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
