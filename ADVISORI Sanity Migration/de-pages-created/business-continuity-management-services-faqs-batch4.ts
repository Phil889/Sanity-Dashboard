import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Business Continuity Management Services page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-services' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-services" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützt ADVISORI bei der Entwicklung von Crisis Communication Strategien?',
        answer: "Crisis Communication ist ein kritischer Erfolgsfaktor für effektives BCM und erfordert strategische Planung, klare Prozesse und koordinierte Umsetzung. ADVISORI entwickelt umfassende Communication-Strategien, die alle Stakeholder-Gruppen berücksichtigen und sowohl interne als auch externe Kommunikation optimieren.\n\n📢 Strategic Communication Planning:\n• Stakeholder Mapping und Audience Segmentation für zielgerichtete Botschaften\n• Message Development und Key Messaging Framework für konsistente Kommunikation\n• Communication Channel Strategy für optimale Reichweite und Wirksamkeit\n• Timing und Sequencing Planning für koordinierte Information Delivery\n• Brand Protection und Reputation Management Integration\n\n👥 Internal Communication Systems:\n• Employee Communication Protocols für schnelle und effektive interne Updates\n• Management Communication Hierarchies für strukturierte Entscheidungskommunikation\n• Cross-Functional Team Coordination für operative Zusammenarbeit\n• Remote Communication Enablement für verteilte Teams\n• Feedback und Two-Way Communication Mechanisms\n\n🌐 External Communication Management:\n• Customer Communication Strategies für Service Continuity Information\n• Media Relations und Press Communication für öffentliche Wahrnehmung\n• Regulatory Communication für Compliance und Transparenz\n• Supplier und Partner Communication für Supply Chain Coordination\n• Community und Public Relations für gesellschaftliche Verantwortung\n\n📱 Technology-Enabled Communication:\n• Multi-Channel Communication Platforms für redundante Erreichbarkeit\n• Automated Notification Systems für schnelle Alert Distribution\n• Social Media Management für moderne Kommunikationskanäle\n• Mobile Communication Solutions für ubiquitäre Zugänglichkeit\n• Real-Time Collaboration Tools für operative Koordination"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielt Incident Management in ADVISORI BCM-Services?',
        answer: "Incident Management ist das operative Herzstück von BCM-Systemen und erfordert strukturierte Prozesse, klare Verantwortlichkeiten und schnelle Entscheidungsfindung. ADVISORI entwickelt robuste Incident Management Capabilities, die effektive Response und schnelle Recovery ermöglichen.\n\n🚨 Incident Detection und Assessment:\n• Early Warning Systems für proaktive Threat Identification\n• Multi-Source Monitoring für umfassende Situational Awareness\n• Impact Assessment Frameworks für schnelle Severity Determination\n• Escalation Triggers und Thresholds für automatisierte Response Activation\n• Real-Time Dashboards für kontinuierliche Situation Monitoring\n\n⚡ Response Activation und Coordination:\n• Incident Response Team Activation für strukturierte Krisenreaktion\n• Command und Control Structures für effektive Leadership\n• Resource Mobilization Processes für schnelle Capability Deployment\n• Cross-Functional Coordination für organisationsweite Response\n• External Support Integration für zusätzliche Capabilities\n\n📊 Incident Tracking und Documentation:\n• Comprehensive Incident Logging für vollständige Nachverfolgung\n• Status Tracking und Progress Monitoring für Transparency\n• Decision Documentation für Accountability und Learning\n• Timeline Management für koordinierte Activities\n• Evidence Preservation für Post-Incident Analysis\n\n🔄 Recovery Coordination:\n• Recovery Strategy Implementation für systematische Wiederherstellung\n• Resource Allocation Management für optimale Utilization\n• Progress Monitoring und Milestone Tracking\n• Quality Assurance für Service Level Maintenance\n• Stakeholder Communication während Recovery Phase\n\n📈 Post-Incident Activities:\n• Comprehensive After Action Reviews für systematisches Learning\n• Root Cause Analysis für Problem Prevention\n• Lessons Learned Integration für kontinuierliche Verbesserung\n• Process Improvement Recommendations\n• Knowledge Management für Organizational Memory"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie adressiert ADVISORI Cyber Resilience in ihren BCM-Services?',
        answer: "Cyber Resilience ist ein kritischer Aspekt moderner BCM-Strategien, da digitale Bedrohungen zunehmend Geschäftskontinuität gefährden. ADVISORI integriert umfassende Cyber Resilience Capabilities in alle BCM-Services für ganzheitlichen Schutz und schnelle Recovery.\n\n🛡️ Cyber Risk Assessment:\n• Comprehensive Threat Landscape Analysis für aktuelle Bedrohungsszenarien\n• Vulnerability Assessment für System und Process Weaknesses\n• Attack Vector Analysis für potenzielle Infiltration Points\n• Business Impact Assessment für Cyber-Incident Consequences\n• Risk Prioritization für fokussierte Mitigation Efforts\n\n🔒 Preventive Security Measures:\n• Multi-Layered Defense Architecture für umfassenden Schutz\n• Access Control und Identity Management für Authorized Access\n• Data Protection und Encryption für Information Security\n• Network Segmentation für Containment Capabilities\n• Security Awareness Training für Human Factor Mitigation\n\n🚨 Cyber Incident Response:\n• Cyber-Specific Incident Response Procedures für schnelle Reaktion\n• Forensic Capabilities für Evidence Collection und Analysis\n• Containment Strategies für Damage Limitation\n• Communication Protocols für Stakeholder Information\n• Legal und Regulatory Compliance für Reporting Requirements\n\n💻 Technology Recovery:\n• Backup und Recovery Systems für Data Restoration\n• Alternative System Activation für Service Continuity\n• Clean System Deployment für Malware-Free Operations\n• Network Restoration für Communication Capabilities\n• Application Recovery für Business Function Restoration\n\n🤝 Collaborative Cyber Defense:\n• Threat Intelligence Sharing für Enhanced Awareness\n• Industry Collaboration für Collective Defense\n• Government Agency Coordination für National Security\n• Vendor Security Management für Supply Chain Protection\n• Third-Party Security Assessment für Partner Risk Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Unterstützung bietet ADVISORI für BCM Performance Measurement und KPIs?',
        answer: "Performance Measurement ist essentiell für effektives BCM und erfordert systematische Metriken, regelmäßige Bewertung und kontinuierliche Optimierung. ADVISORI entwickelt umfassende Performance Management Systeme, die sowohl quantitative als auch qualitative Aspekte der BCM-Wirksamkeit messen.\n\n📊 KPI Framework Development:\n• Strategic KPI Alignment mit Geschäftszielen und Stakeholder Expectations\n• Operational Metrics für tägliche BCM Performance Monitoring\n• Leading Indicators für proaktive Performance Prediction\n• Lagging Indicators für Historical Performance Analysis\n• Balanced Scorecard Integration für ganzheitliche Performance View\n\n📈 Measurement Methodologies:\n• Quantitative Metrics für objektive Performance Assessment\n• Qualitative Assessments für subjective Effectiveness Evaluation\n• Benchmarking gegen Industry Standards und Best Practices\n• Trend Analysis für Performance Development Tracking\n• Root Cause Analysis für Performance Gap Identification\n\n🎯 Performance Targets:\n• SMART Goal Setting für achievable Performance Objectives\n• Risk-Based Target Definition für appropriate Performance Levels\n• Stakeholder-Aligned Expectations für relevant Performance Standards\n• Continuous Improvement Targets für ongoing Enhancement\n• Maturity-Based Progression für systematic Capability Development\n\n📋 Reporting und Dashboards:\n• Executive Dashboards für Strategic Performance Overview\n• Operational Dashboards für Real-Time Performance Monitoring\n• Automated Reporting für Efficient Information Distribution\n• Exception Reporting für Performance Deviation Alerts\n• Trend Reporting für Long-Term Performance Analysis\n\n🔄 Performance Optimization:\n• Regular Performance Reviews für systematic Assessment\n• Gap Analysis für Performance Improvement Opportunities\n• Action Plan Development für Performance Enhancement\n• Resource Allocation Optimization für Performance Improvement\n• Continuous Monitoring für Sustained Performance Excellence"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
