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
    console.log('Updating SIEM Managed Services page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-managed-services' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-managed-services" not found')
    }
    
    // Create new FAQs for ROI and future trends
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie berechnet man den ROI von SIEM Managed Services und welche Faktoren sind entscheidend?',
        answer: "ROI-Berechnung für SIEM Managed Services erfordert eine ganzheitliche Betrachtung direkter und indirekter Benefits sowie versteckter Kosten. Erfolgreiche ROI-Messung kombiniert quantifizierbare Einsparungen mit strategischen Wertbeiträgen und langfristigen Capability-Gewinnen.\n\n💰 Direct Cost Savings Calculation:\n• Personnel Cost Avoidance durch Elimination interner SOC-Aufbau und -Betrieb\n• Technology Cost Reduction durch Shared Infrastructure und Licensing\n• Training Cost Elimination für spezialisierte Cybersecurity-Skills\n• Operational Cost Savings durch Automated Processes und Efficiency Gains\n• Compliance Cost Reduction durch Automated Reporting und Audit Support\n\n📊 Indirect Value Quantification:\n• Risk Mitigation Value durch Enhanced Threat Detection und Response\n• Business Continuity Protection durch Reduced Downtime und Service Disruption\n• Reputation Protection Value durch Prevented Security Incidents\n• Productivity Gains durch Reduced False Positives und Improved Alert Quality\n• Innovation Enablement durch Access to Latest Security Technologies\n\n🎯 Strategic Value Assessment:\n• Time-to-Market Acceleration für Security Capabilities\n• Scalability Value für Business Growth Support\n• Expertise Access Value für Specialized Knowledge und Skills\n• Competitive Advantage durch Advanced Security Posture\n• Regulatory Compliance Assurance und Associated Risk Reduction\n\n📈 ROI Measurement Methodology:\n• Baseline Cost Establishment für Current Security Operations\n• Total Cost of Ownership Calculation für Managed Services\n• Benefit Quantification mit Conservative und Optimistic Scenarios\n• Payback Period Analysis für Investment Recovery Timeline\n• Net Present Value Calculation für Long-term Investment Assessment\n\n🔍 Hidden Cost Considerations:\n• Integration Costs für Service Setup und System Connectivity\n• Change Management Costs für Process Adaptation und Training\n• Governance Overhead für Service Management und Oversight\n• Exit Costs für Potential Service Termination oder Transition\n• Opportunity Costs für Alternative Investment Options\n\n📋 ROI Optimization Strategies:\n• Service Scope Optimization für Maximum Value Extraction\n• Performance Incentive Alignment für Provider Motivation\n• Continuous Improvement Investment für Enhanced Capabilities\n• Strategic Partnership Development für Additional Value Creation\n• Regular ROI Review und Adjustment für Sustained Value Realization"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Zukunftstrends prägen SIEM Managed Services und wie bereitet man sich darauf vor?',
        answer: "SIEM Managed Services entwickeln sich rasant weiter, getrieben von technologischen Innovationen, sich ändernden Bedrohungslandschaften und neuen Business-Anforderungen. Strategische Vorbereitung auf Zukunftstrends gewährleistet, dass Service-Investitionen auch langfristig wertvoll und relevant bleiben.\n\n🤖 AI und Machine Learning Evolution:\n• Advanced Behavioral Analytics für Sophisticated Threat Detection\n• Autonomous Threat Hunting mit Minimal Human Intervention\n• Predictive Security Analytics für Proactive Threat Prevention\n• Natural Language Processing für Enhanced Incident Analysis\n• Explainable AI für Transparent Decision Making und Compliance\n\n☁️ Cloud-native Service Transformation:\n• Serverless SIEM Architectures für Cost-effective Operations\n• Multi-cloud Security Monitoring für Distributed Infrastructure\n• Edge Computing Integration für Distributed Security Analytics\n• Container Security Integration für Modern Application Protection\n• Hybrid Cloud Service Models für Flexible Deployment Options\n\n🔗 Extended Detection und Response Integration:\n• XDR Platform Evolution für Unified Security Operations\n• Network Detection und Response Convergence\n• Endpoint Detection und Response Integration\n• Identity Threat Detection und Response Capabilities\n• Application Security Monitoring Integration\n\n🌐 Zero Trust Architecture Alignment:\n• Identity-centric Security Monitoring für Zero Trust Implementation\n• Micro-segmentation Monitoring für Granular Security Control\n• Continuous Verification Analytics für Dynamic Trust Assessment\n• Behavioral Trust Scoring für Risk-based Access Control\n• Zero Trust Network Access Integration\n\n📱 Modern Workplace Security Evolution:\n• Remote Work Security Monitoring für Distributed Workforce\n• IoT Security Integration für Connected Device Protection\n• Mobile Device Security Monitoring für BYOD Environments\n• Collaboration Platform Security für Modern Communication Tools\n• Supply Chain Security Monitoring für Third-party Risk Management\n\n🚀 Preparation Strategies für Future Readiness:\n• Technology Roadmap Alignment mit Provider Innovation Plans\n• Skill Development Investment für Future Capability Requirements\n• Architecture Flexibility Planning für Technology Evolution\n• Strategic Partnership Development für Innovation Access\n• Continuous Learning Culture für Adaptation und Growth"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie entwickelt man eine langfristige SIEM Managed Services Strategie und welche Faktoren bestimmen den Erfolg?',
        answer: "Eine langfristige SIEM Managed Services Strategie erfordert strategisches Denken, das aktuelle Anforderungen mit zukünftigen Entwicklungen in Einklang bringt. Erfolgreiche Strategieentwicklung antizipiert technologische Trends, Business-Evolution und sich ändernde Bedrohungslandschaften.\n\n🎯 Strategic Vision Development:\n• Long-term Security Vision Alignment mit Business-Strategie und Digital Transformation\n• Technology Roadmap Integration für Consistent IT-Architecture Evolution\n• Threat Landscape Evolution Assessment für Proactive Security Planning\n• Regulatory Trend Analysis für Future Compliance Requirements\n• Industry Benchmark Analysis für Competitive Security Positioning\n\n📊 Capability Maturity Planning:\n• Current State Assessment und Maturity Level Evaluation\n• Target State Definition für Desired Security Capabilities\n• Gap Analysis und Priority Setting für Strategic Investment Planning\n• Capability Development Roadmap für Systematic Skill Building\n• Technology Adoption Lifecycle Planning für Smooth Evolution\n\n🔄 Adaptive Strategy Framework:\n• Flexible Service Architecture für Future Technology Integration\n• Modular Service Approach für Incremental Capability Building\n• Provider Strategy Development für Strategic Partnership Management\n• Innovation Pipeline Management für Emerging Technology Evaluation\n• Risk Management Integration für Strategic Decision Making\n\n💡 Innovation und Research Strategy:\n• Emerging Technology Monitoring für Early Adoption Opportunities\n• Pilot Programme Development für Low-risk Innovation Testing\n• Academic Partnership für Cutting-edge Research Access\n• Industry Collaboration für Best Practice Sharing und Learning\n• Internal Innovation Culture für Continuous Improvement\n\n📈 Investment Planning und Budgeting:\n• Multi-year Budget Planning für Strategic Investment Allocation\n• ROI Projection und Value Realization Planning\n• Resource Allocation Strategy für Optimal Capability Development\n• Cost Optimization Planning für Sustainable Operations\n• Funding Strategy Development für Strategic Initiative Support\n\n🌐 Ecosystem Strategy Development:\n• Partner Ecosystem Planning für Extended Capability Access\n• Vendor Relationship Strategy für Long-term Partnership Value\n• Community Engagement Strategy für Knowledge Sharing\n• Standards Participation für Industry Influence\n• Talent Strategy Development für Capability Building"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Best Practices gewährleisten nachhaltigen Erfolg bei SIEM Managed Services und wie vermeidet man häufige Fallstricke?',
        answer: "Nachhaltiger SIEM Managed Services Erfolg erfordert mehr als technische Exzellenz und umfasst organisatorische, prozessuale und kulturelle Aspekte. Best Practices basieren auf bewährten Erfahrungen und helfen dabei, häufige Implementierungsfehler zu vermeiden.\n\n🏗️ Foundation Best Practices:\n• Clear Objective Definition und Success Criteria Establishment vor Service-Beginn\n• Stakeholder Alignment und Executive Sponsorship für Strategic Support\n• Realistic Expectation Setting mit ausreichenden Puffern für Unvorhergesehenes\n• Comprehensive Resource Planning für alle Service-Phasen und Dependencies\n• Risk Management Integration von Anfang an für Proactive Issue Prevention\n\n👥 Organizational Success Factors:\n• Cross-functional Team Building mit verschiedenen Expertisen und Perspektiven\n• Change Management Integration für User Adoption und Cultural Transformation\n• Training und Skill Development für Sustainable Capability Building\n• Communication Strategy für Transparent Information und Expectation Management\n• Feedback Loop Establishment für Continuous Learning und Improvement\n\n⚙️ Service Management Excellence:\n• Phased Service Implementation für Manageable Complexity und Risk Reduction\n• Proof-of-Value Validation vor Full-scale Service Deployment\n• Integration Testing für All Critical Service Interfaces\n• Performance Baseline Establishment für Objective Success Measurement\n• Documentation und Knowledge Management für Sustainable Operations\n\n🚫 Common Pitfall Avoidance:\n• Scope Creep Prevention durch Clear Service Definition und Change Control\n• Over-reliance Avoidance durch Balanced Internal Capability Maintenance\n• Vendor Lock-in Prevention durch Strategic Contract Terms und Exit Planning\n• Communication Gap Mitigation durch Regular Reviews und Feedback Sessions\n• Quality Drift Prevention durch Continuous Monitoring und Improvement\n\n🔄 Continuous Improvement Framework:\n• Regular Service Review und Optimization Planning\n• User Feedback Integration für Practical Improvement Identification\n• Technology Refresh Planning für Long-term Relevance\n• Lessons Learned Documentation für Future Service Enhancement\n• Best Practice Sharing für Organizational Learning\n\n📊 Success Measurement und Validation:\n• KPI Definition und Regular Monitoring für Objective Success Assessment\n• ROI Tracking und Value Realization Measurement\n• User Satisfaction Assessment für Service Quality Validation\n• Business Impact Measurement für Strategic Value Demonstration\n• Continuous Benchmarking für Industry-standard Performance Comparison"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
