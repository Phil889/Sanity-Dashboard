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
    console.log('Updating Risk Management vs Business Continuity page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'risk-management-vs-business-continuity' })
    
    if (!existingDoc) {
      throw new Error('Document "risk-management-vs-business-continuity" not found')
    }
    
    // Create new FAQs for RM vs BC industry applications and maturity
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie unterscheiden sich die Ansätze zur Integration von Risk Management und Business Continuity in verschiedenen Branchen und Sektoren?',
        answer: "Branchenspezifische Ansätze zur RM/BC Integration reflektieren unterschiedliche Risikoprofile, regulatorische Anforderungen und operative Charakteristika. Erfolgreiche Integration berücksichtigt sektorspezifische Besonderheiten und nutzt branchenerprobte Best Practices für optimale Resilienz.\n\n🏦 Financial Services Integration:\n• Regulatory-driven Integration durch Basel III, DORA und nationale Aufsichtsanforderungen\n• Capital-centric Approach mit Risk-adjusted Performance und Continuity Cost Integration\n• Real-time Risk Monitoring mit sofortiger Continuity Response für Trading und Payment Systems\n• Systemic Risk Considerations mit Market-wide Impact Assessment\n• Third-Party Risk Integration mit Supplier Continuity für kritische Finanzinfrastruktur\n\n🏥 Healthcare Sector Approaches:\n• Patient Safety-focused Integration mit Life-critical System Continuity\n• Regulatory Compliance Integration für HIPAA, FDA und Patientensicherheitsstandards\n• Clinical Risk Assessment mit Operational Continuity für medizinische Geräte\n• Supply Chain Resilience für kritische Medikamente und medizinische Supplies\n• Emergency Response Integration mit Hospital Disaster Planning\n\n🏭 Manufacturing Industry Models:\n• Supply Chain-centric Integration mit Supplier Risk und Production Continuity\n• Operational Risk Focus mit Equipment Failure und Production Disruption Management\n• Quality Risk Integration mit Product Safety und Recall Management\n• Environmental Risk Considerations mit Sustainability und Compliance Integration\n• Just-in-Time Production Resilience mit Inventory und Logistics Continuity\n\n⚡ Energy & Utilities Frameworks:\n• Critical Infrastructure Protection mit National Security Considerations\n• Grid Resilience Integration mit Cyber Risk und Physical Security\n• Environmental Risk Management mit Climate Change Adaptation\n• Regulatory Compliance für NERC CIP und andere Sector-specific Standards\n• Public Safety Integration mit Community Impact Assessment\n\n💻 Technology Sector Approaches:\n• Cyber-centric Integration mit Information Security und Data Continuity\n• Agile Risk Management mit DevOps und Continuous Deployment Continuity\n• Intellectual Property Protection mit Business Continuity für R&D\n• Platform Resilience für Cloud Services und SaaS Continuity\n• Rapid Innovation Cycles mit Risk-Continuity Balance für Time-to-Market\n\n🚛 Transportation & Logistics Models:\n• Network Resilience Integration mit Route Optimization und Alternative Capacity\n• Regulatory Compliance für Safety Standards und International Trade Requirements\n• Asset Risk Management mit Fleet Continuity und Maintenance Integration\n• Weather Risk Integration mit Seasonal Planning und Climate Adaptation\n• Cross-border Risk Considerations mit Geopolitical und Trade Continuity"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Maturity-Modelle und Entwicklungsstufen gibt es für die Integration von Risk Management und Business Continuity?',
        answer: "Maturity-Modelle für RM/BC Integration bieten strukturierte Entwicklungspfade von grundlegender Koordination bis zu fortgeschrittener, adaptiver Resilienz. Diese Modelle ermöglichen systematische Capability-Entwicklung und Benchmarking gegen Industry Best Practices.\n\n📊 Integration Maturity Levels:\n• Level 1 - Initial: Separate RM und BC Funktionen mit minimaler Koordination und Ad-hoc Kommunikation\n• Level 2 - Developing: Formalisierte Koordinationsmechanismen mit gemeinsamen Meetings und Information Sharing\n• Level 3 - Defined: Integrierte Prozesse mit standardisierten Workflows und gemeinsamen Assessments\n• Level 4 - Managed: Quantitative Performance Management mit integrierten Metriken und kontinuierlicher Optimierung\n• Level 5 - Optimizing: Adaptive Integration mit AI-gestützter Optimization und predictive Capabilities\n\n🎯 Capability Dimensions:\n• Governance Integration: Von separaten Committees zu unified Resilience Governance\n• Process Integration: Von isolierten Workflows zu seamless End-to-End Prozessen\n• Technology Integration: Von Silo-Systemen zu unified Platforms und shared Analytics\n• People Integration: Von separaten Teams zu hybrid Roles und cross-functional Expertise\n• Performance Integration: Von separaten KPIs zu holistic Resilience Metrics\n\n📈 Maturity Assessment Framework:\n• Strategic Alignment: Integration von RM/BC in Unternehmensstrategie und Board Oversight\n• Organizational Design: Strukturelle Integration und Role Definition\n• Process Maturity: Workflow Integration und Automation Level\n• Technology Sophistication: Platform Integration und Analytics Capabilities\n• Cultural Integration: Shared Values und collaborative Mindset\n• Performance Excellence: Measurement Integration und Continuous Improvement\n\n🔄 Development Pathways:\n• Foundation Building: Etablierung grundlegender Koordinationsmechanismen\n• Process Integration: Entwicklung integrierter Workflows und Assessments\n• Technology Convergence: Platform Consolidation und Data Integration\n• Advanced Analytics: Predictive Capabilities und AI Integration\n• Adaptive Resilience: Self-optimizing Systems und autonomous Response\n\n💡 Maturity Acceleration Strategies:\n• Quick Wins Identification für frühe Integration Success\n• Pilot Programme für schrittweise Capability Development\n• Change Management für Cultural Transformation\n• Technology Investment für Platform Modernization\n• External Partnerships für Expertise und Best Practice Access\n\n🎨 Industry Benchmarking:\n• Peer Comparison für Maturity Level Assessment\n• Best Practice Identification für Capability Gap Closure\n• Regulatory Alignment für Compliance-driven Maturity\n• Innovation Adoption für Competitive Advantage\n• Continuous Learning für Maturity Sustainability"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie können Unternehmen die Kosten-Nutzen-Analyse für die Integration von Risk Management und Business Continuity durchführen?',
        answer: "Eine strukturierte Kosten-Nutzen-Analyse für RM/BC Integration erfordert quantitative Bewertung von Integration Benefits gegen Implementierungskosten. Erfolgreiche Analyse berücksichtigt sowohl direkte als auch indirekte Wertschöpfung und nutzt moderne Bewertungsmethoden für fundierte Investitionsentscheidungen.\n\n💰 Cost Categories:\n• Technology Integration Costs: Platform Consolidation, System Integration und Data Migration\n• Organizational Change Costs: Training, Change Management und Restructuring\n• Process Redesign Costs: Workflow Integration, Documentation und Testing\n• Consulting und External Support: Expertise, Implementation Support und Best Practice Transfer\n• Ongoing Operational Costs: Maintenance, Support und Continuous Improvement\n\n📈 Benefit Quantification:\n• Cost Avoidance: Reduced Duplication, Shared Resources und Efficiency Gains\n• Risk Reduction Benefits: Lower Expected Losses, Improved Recovery Times und Enhanced Resilience\n• Compliance Efficiency: Streamlined Audit, Reduced Regulatory Costs und Faster Reporting\n• Strategic Value Creation: Better Decision Making, Competitive Advantage und Stakeholder Confidence\n• Innovation Enablement: Faster Time-to-Market, Enhanced Agility und Digital Transformation\n\n🔍 Valuation Methodologies:\n• Net Present Value Analysis für Long-term Investment Assessment\n• Return on Investment Calculations für Short-term Payback Evaluation\n• Real Options Valuation für Flexibility und Future Opportunity Assessment\n• Monte Carlo Simulation für Risk-adjusted Benefit Modeling\n• Balanced Scorecard Approach für Multi-dimensional Value Assessment\n\n📊 Quantitative Metrics:\n• Total Cost of Risk Reduction durch integrierte Ansätze\n• Operational Efficiency Gains durch Process Consolidation\n• Compliance Cost Savings durch Unified Audit und Reporting\n• Recovery Time Improvement und Associated Business Value\n• Resource Utilization Optimization und Productivity Gains\n\n🎯 Business Case Development:\n• Baseline Assessment der Current State Costs und Performance\n• Future State Modeling mit Integration Scenarios\n• Sensitivity Analysis für Key Assumptions und Variables\n• Risk Assessment der Implementation und Operational Risks\n• Stakeholder Value Proposition für verschiedene Interessensgruppen\n\n💡 Value Realization Tracking:\n• Implementation Milestone Tracking gegen Planned Benefits\n• Performance Metrics Monitoring für Benefit Validation\n• Continuous Optimization für Value Maximization\n• Lessons Learned Integration für Future Business Cases\n• Stakeholder Communication für Value Demonstration"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche kritischen Erfolgsfaktoren und häufigen Fallstricke gibt es bei der Integration von Risk Management und Business Continuity?',
        answer: "Erfolgreiche RM/BC Integration hängt von kritischen Erfolgsfaktoren ab, während häufige Fallstricke vermieden werden müssen. Systematische Berücksichtigung dieser Faktoren erhöht die Wahrscheinlichkeit erfolgreicher Transformation und nachhaltiger Integration.\n\n✅ Critical Success Factors:\n• Executive Sponsorship mit klarem Commitment und ausreichender Ressourcenallokation\n• Clear Vision und Strategy mit definierten Zielen und Erfolgskriterien\n• Strong Change Management mit strukturiertem Approach und Stakeholder Engagement\n• Adequate Resources mit Budget, Personnel und Technology Investment\n• Cultural Alignment mit Shared Values und collaborative Mindset\n• Phased Implementation mit Pilot Programmes und schrittweiser Rollout\n\n⚠️ Common Pitfalls:\n• Underestimating Complexity der Integration und Required Effort\n• Insufficient Stakeholder Buy-in und Resistance Management\n• Technology-first Approach ohne Process und People Considerations\n• Lack of Clear Governance für Integration Oversight und Decision Making\n• Inadequate Training und Skill Development für neue integrierte Rollen\n• Poor Communication Strategy mit unklaren Messages und Expectations\n\n🎯 Implementation Best Practices:\n• Start with Quick Wins für Early Success und Momentum Building\n• Establish Clear Metrics für Progress Tracking und Success Measurement\n• Invest in People Development für Capability Building\n• Maintain Focus on Business Value während der gesamten Transformation\n• Plan for Continuous Improvement nach Initial Implementation\n• Build Flexibility für Adaptation und Course Correction\n\n🔄 Risk Mitigation Strategies:\n• Comprehensive Risk Assessment der Integration Initiative\n• Contingency Planning für Critical Implementation Risks\n• Regular Checkpoint Reviews für Progress Assessment\n• Stakeholder Feedback Loops für Early Issue Identification\n• External Expert Support für Complex Technical Challenges\n• Pilot Testing für Validation vor Full-scale Rollout\n\n📊 Success Measurement:\n• Integration Milestone Achievement gegen Planned Timeline\n• Stakeholder Satisfaction Surveys für User Acceptance\n• Performance Improvement Metrics für Business Value\n• Cost Savings Realization gegen Business Case Projections\n• Cultural Change Indicators für Sustainable Transformation\n• Continuous Learning Integration für Future Improvements\n\n💡 Sustainability Factors:\n• Embedded Governance für Long-term Integration Oversight\n• Continuous Training Programme für Skill Maintenance\n• Regular Process Reviews für Optimization Opportunities\n• Technology Evolution Planning für Platform Modernization\n• Performance Monitoring für Value Preservation\n• Innovation Integration für Competitive Advantage Maintenance"
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
