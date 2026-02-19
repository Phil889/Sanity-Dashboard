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
    console.log('Updating SIEM Managed Services page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-managed-services' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-managed-services" not found')
    }
    
    // Create new FAQs for implementation and transition
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie plant und implementiert man den Übergang zu SIEM Managed Services erfolgreich?',
        answer: "Der Übergang zu SIEM Managed Services ist ein komplexer Transformationsprozess, der strategische Planung, sorgfältige Koordination und strukturiertes Change Management erfordert. Erfolgreiche Transitionen minimieren Risiken, gewährleisten Kontinuität und maximieren die Realisierung der angestrebten Benefits.\n\n📋 Transition Planning Framework:\n• Comprehensive Current State Assessment mit detaillierter Dokumentation bestehender Systeme und Prozesse\n• Future State Vision Definition mit klaren Zielen und Erfolgskriterien\n• Gap Analysis und Requirement Mapping für präzise Transition Scope Definition\n• Risk Assessment und Mitigation Planning für alle kritischen Transition Risks\n• Timeline Development mit realistischen Milestones und Dependency Management\n\n🔄 Phased Implementation Approach:\n• Pilot Phase mit Non-critical Systems für Learning und Process Refinement\n• Gradual Rollout nach Business Criticality und Risk Assessment\n• Parallel Operations Period für Validation und Confidence Building\n• Cutover Planning mit Detailed Rollback Procedures\n• Post-Implementation Stabilization und Performance Validation\n\n👥 Stakeholder Management und Communication:\n• Executive Sponsorship und Governance Structure Establishment\n• Cross-functional Team Formation mit klaren Rollen und Verantwortlichkeiten\n• Regular Communication Cadence für alle Stakeholder Groups\n• Training Program Development für betroffene Teams\n• Change Management Strategy für Cultural und Process Adaptations\n\n🔧 Technical Transition Considerations:\n• Data Migration Planning mit Integrity Validation und Backup Procedures\n• System Integration Testing für alle kritischen Interfaces\n• Performance Baseline Establishment und Monitoring Setup\n• Security Controls Validation und Compliance Verification\n• Documentation Transfer und Knowledge Management Setup\n\n📊 Success Metrics und Validation:\n• Service Level Achievement Tracking gegen definierte SLAs\n• Performance Comparison mit Pre-transition Baselines\n• User Satisfaction Assessment und Feedback Collection\n• Cost Realization Validation gegen Business Case Projections\n• Risk Mitigation Effectiveness und Incident Response Capability\n\n🛡️ Risk Mitigation Strategies:\n• Comprehensive Backup und Recovery Planning\n• Vendor Lock-in Prevention durch Contract Terms und Data Portability\n• Service Continuity Assurance während Transition Periods\n• Quality Assurance Procedures für Service Delivery Validation\n• Escalation Procedures für Critical Issues und Emergency Response"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Governance-Strukturen sind für SIEM Managed Services erforderlich und wie implementiert man diese?',
        answer: "Effektive Governance-Strukturen für SIEM Managed Services gewährleisten strategische Ausrichtung, operative Exzellenz und kontinuierliche Wertschöpfung. Sie schaffen die notwendigen Frameworks für Entscheidungsfindung, Performance Management und Risk Oversight in komplexen Service-Partnerschaften.\n\n🏛️ Governance Framework Architecture:\n• Executive Steering Committee für strategische Oversight und Escalation Resolution\n• Operational Management Board für Day-to-day Service Management und Performance Review\n• Technical Working Groups für spezifische Fachbereiche und Integration Challenges\n• Risk und Compliance Committee für Regulatory Oversight und Risk Management\n• Innovation Council für Technology Evolution und Future State Planning\n\n📊 Performance Management Structure:\n• Regular Service Reviews mit KPI Tracking und Trend Analysis\n• Monthly Business Reviews für Strategic Alignment und Value Realization\n• Quarterly Strategic Assessments für Long-term Planning und Optimization\n• Annual Contract Reviews für Performance Evaluation und Renewal Planning\n• Continuous Improvement Programs mit Structured Feedback Loops\n\n⚖️ Decision Making Frameworks:\n• Clear Authority Matrix für verschiedene Decision Categories und Approval Levels\n• Escalation Procedures für Complex Issues und Conflict Resolution\n• Change Management Processes für Service Modifications und Scope Changes\n• Investment Decision Criteria für Additional Services oder Technology Upgrades\n• Risk Tolerance Definition und Risk-based Decision Making Guidelines\n\n🔍 Oversight und Monitoring Mechanisms:\n• Regular Audit Programs für Service Quality und Compliance Verification\n• Third-Party Assessments für Independent Performance Validation\n• Customer Satisfaction Surveys und Stakeholder Feedback Collection\n• Vendor Performance Scorecards mit Multi-dimensional Assessment Criteria\n• Benchmarking Studies für Market Comparison und Best Practice Identification\n\n📋 Documentation und Reporting Standards:\n• Governance Charter mit Roles, Responsibilities und Operating Procedures\n• Regular Reporting Templates für Consistent Information Flow\n• Meeting Protocols und Decision Documentation für Transparency und Accountability\n• Performance Dashboards für Real-time Visibility und Trend Monitoring\n• Annual Governance Review für Framework Effectiveness und Improvement Opportunities\n\n🤝 Partnership Management Approach:\n• Strategic Partnership Development über transactional Vendor Relationships hinaus\n• Joint Innovation Programs für Mutual Value Creation\n• Knowledge Sharing Initiatives für Capability Building und Best Practice Transfer\n• Collaborative Problem Solving für Complex Challenges und Optimization Opportunities\n• Long-term Relationship Planning für Sustainable Partnership Success"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie gewährleistet man Business Continuity und Disaster Recovery bei SIEM Managed Services?',
        answer: "Business Continuity und Disaster Recovery für SIEM Managed Services erfordern umfassende Planung, die sowohl Provider-seitige als auch kundenseitige Risiken adressiert. Robuste BC/DR-Strategien gewährleisten kontinuierliche Cybersecurity-Capabilities auch bei schwerwiegenden Störungen oder Ausfällen.\n\n🛡️ Business Continuity Planning Framework:\n• Comprehensive Risk Assessment für alle Service Dependencies und Single Points of Failure\n• Business Impact Analysis für verschiedene Outage Scenarios und Service Degradation Levels\n• Recovery Time Objectives und Recovery Point Objectives Definition für kritische Services\n• Alternative Service Delivery Options für verschiedene Disruption Scenarios\n• Regular BC Testing und Validation für Plan Effectiveness und Team Readiness\n\n🔄 Provider Resilience Requirements:\n• Geographic Redundancy für SOC Operations und Data Processing Capabilities\n• Technology Redundancy mit Multiple Data Centers und Backup Systems\n• Staff Redundancy und Cross-training für Critical Roles und Expertise\n• Vendor Diversification für Critical Technology Components und Dependencies\n• Financial Stability Assessment und Insurance Coverage Verification\n\n📊 Service Continuity Mechanisms:\n• Real-time Service Monitoring mit Automated Failover Capabilities\n• Backup Service Delivery Options für Emergency Situations\n• Data Replication und Backup Strategies für Critical Information Protection\n• Communication Protocols für Outage Notification und Status Updates\n• Service Restoration Procedures mit Prioritized Recovery Sequences\n\n🚨 Incident Response Integration:\n• Coordinated Incident Response zwischen Provider und Customer Teams\n• Emergency Escalation Procedures für Critical Service Disruptions\n• Alternative Communication Channels für Primary System Outages\n• Backup Analysis Capabilities für Continued Threat Detection\n• Forensic Data Preservation für Post-incident Analysis und Learning\n\n🔍 Testing und Validation Programs:\n• Regular DR Testing mit Realistic Scenarios und Full-scale Exercises\n• Tabletop Exercises für Team Coordination und Decision Making\n• Technology Failover Testing für System Reliability Validation\n• Communication Testing für Emergency Notification Effectiveness\n• Lessons Learned Integration für Continuous Plan Improvement\n\n📋 Contractual Protections und Guarantees:\n• Service Level Guarantees für BC/DR Capabilities und Response Times\n• Financial Penalties für Extended Outages oder Service Failures\n• Data Recovery Guarantees mit Specific RTO/RPO Commitments\n• Alternative Service Provider Options für Extended Outages\n• Insurance Requirements und Liability Coverage für Business Disruption"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielt Threat Intelligence in SIEM Managed Services und wie maximiert man deren Wert?',
        answer: "Threat Intelligence ist ein kritischer Differentiator in SIEM Managed Services, der die Qualität der Threat Detection, die Relevanz der Alerts und die Effektivität der Response-Maßnahmen erheblich verbessert. Maximaler Wert entsteht durch strategische Integration, kontinuierliche Anreicherung und intelligente Automatisierung.\n\n🧠 Threat Intelligence Integration Levels:\n• Strategic Intelligence für Long-term Threat Landscape Understanding und Risk Assessment\n• Tactical Intelligence für Campaign Tracking und Adversary Behavior Analysis\n• Operational Intelligence für Real-time Threat Detection und Alert Enrichment\n• Technical Intelligence für IOC Integration und Automated Response Triggering\n• Contextual Intelligence für Business-specific Risk Assessment und Prioritization\n\n📊 Intelligence Sources und Quality:\n• Commercial Threat Intelligence Feeds mit High-quality, Curated Content\n• Open Source Intelligence Collection und Analysis\n• Industry-specific Intelligence Sharing Communities\n• Government und Law Enforcement Intelligence Feeds\n• Provider Proprietary Intelligence aus Multi-customer Insights\n\n🔍 Intelligence Application Mechanisms:\n• Real-time IOC Matching für Automated Threat Detection\n• Behavioral Analytics Enhancement durch Threat Pattern Recognition\n• Alert Prioritization basierend auf Threat Actor Sophistication und Intent\n• Attribution Analysis für Understanding Adversary Capabilities und Motivations\n• Predictive Analytics für Proactive Threat Hunting und Prevention\n\n⚡ Automated Intelligence Processing:\n• Machine Learning für Pattern Recognition und Anomaly Detection\n• Natural Language Processing für Unstructured Intelligence Analysis\n• Automated IOC Extraction und Normalization\n• Dynamic Rule Generation basierend auf Emerging Threats\n• Intelligent Alert Correlation für Reduced False Positives\n\n🎯 Business Context Integration:\n• Industry-specific Threat Landscape Mapping\n• Business Asset Prioritization für Risk-based Alert Handling\n• Geopolitical Context Integration für Enhanced Threat Assessment\n• Supply Chain Risk Intelligence für Third-party Threat Evaluation\n• Regulatory Intelligence für Compliance-relevant Threat Monitoring\n\n📈 Value Maximization Strategies:\n• Regular Intelligence Briefings für Strategic Awareness und Planning\n• Custom Intelligence Requirements Definition für Business-specific Needs\n• Intelligence Sharing Participation für Enhanced Community Protection\n• Feedback Loops für Intelligence Quality Improvement\n• ROI Measurement für Intelligence Investment Optimization"
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
