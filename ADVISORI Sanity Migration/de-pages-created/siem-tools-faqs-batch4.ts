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
    console.log('Updating SIEM Tools page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-tools' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-tools" not found')
    }
    
    // Create new FAQs for advanced SIEM tool capabilities
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche fortgeschrittenen Analytics-Capabilities sollten moderne SIEM Tools bieten und wie evaluiert man deren Qualität?',
        answer: "Moderne SIEM Tools müssen über traditionelle Log-Korrelation hinausgehen und fortgeschrittene Analytics-Capabilities bieten, die komplexe Bedrohungen erkennen und proaktive Security Operations ermöglichen. Die Evaluierung dieser Capabilities erfordert strukturierte Ansätze und realistische Testing-Szenarien.\n\n🧠 Machine Learning und AI-Integration:\n• Unsupervised Learning für Anomaly Detection und unbekannte Bedrohungsmuster\n• Supervised Learning für präzise Klassifikation bekannter Angriffsvektoren\n• Deep Learning für komplexe Pattern Recognition in großen Datenmengen\n• Natural Language Processing für Threat Intelligence und Unstructured Data Analysis\n• Reinforcement Learning für adaptive Response-Strategien und Continuous Improvement\n\n📊 Behavioral Analytics und UEBA:\n• User Behavior Analytics für Insider Threat Detection und Account Compromise\n• Entity Behavior Analytics für Asset und Application Monitoring\n• Peer Group Analysis für Context-aware Anomaly Detection\n• Risk Scoring und Dynamic Risk Assessment für prioritized Response\n• Baseline Learning und Adaptive Profiling für evolvierende Behavior Patterns\n\n🔍 Advanced Threat Detection:\n• Multi-stage Attack Detection für komplexe Kill Chain Analysis\n• Lateral Movement Detection für Advanced Persistent Threat Identification\n• Data Exfiltration Detection für Intellectual Property Protection\n• Command and Control Communication Detection für Malware Identification\n• Zero-day Attack Detection durch Behavioral und Heuristic Analysis\n\n📈 Predictive Analytics und Forecasting:\n• Threat Landscape Prediction für proaktive Defense Planning\n• Risk Forecasting für Strategic Security Investment Planning\n• Capacity Forecasting für Infrastructure Planning und Scaling\n• Incident Prediction für Proactive Response Preparation\n• Vulnerability Exploitation Prediction für Prioritized Patching\n\n🔗 Graph Analytics und Relationship Analysis:\n• Network Relationship Mapping für Complex Attack Path Analysis\n• Entity Relationship Analysis für Comprehensive Threat Context\n• Social Network Analysis für Insider Threat und Collaboration Patterns\n• Attack Graph Construction für Vulnerability Chain Analysis\n• Impact Analysis für Business Risk Assessment und Prioritization\n\n⚡ Real-time Analytics und Stream Processing:\n• High-velocity Data Processing für Immediate Threat Detection\n• Complex Event Processing für Multi-source Correlation\n• Real-time Scoring und Alerting für Time-critical Response\n• Streaming Analytics für Continuous Monitoring und Assessment\n• Edge Analytics für Distributed Processing und Reduced Latency"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie bewertet man die Automation-Fähigkeiten von SIEM Tools und welche Prozesse lassen sich am effektivsten automatisieren?',
        answer: "Automation-Fähigkeiten sind entscheidend für skalierbare und effiziente SIEM Operations, da sie menschliche Analysten von repetitiven Aufgaben befreien und konsistente Response-Qualität gewährleisten. Die Bewertung und Implementierung von Automation erfordert strategische Planung und schrittweise Umsetzung.\n\n🤖 Automation Capability Assessment:\n• Workflow Engine Evaluation für komplexe Multi-step Automation\n• API Integration Quality für nahtlose Tool-Orchestrierung\n• Scripting und Custom Logic Support für spezifische Automation-Anforderungen\n• Decision Tree und Rule Engine Capabilities für intelligente Automation\n• Error Handling und Exception Management für robuste Automation-Prozesse\n\n🔄 Incident Response Automation:\n• Automated Triage und Initial Classification für effiziente Alert-Verarbeitung\n• Evidence Collection Automation für Forensic Readiness\n• Containment Action Automation für Immediate Threat Mitigation\n• Notification und Escalation Automation für Stakeholder Communication\n• Documentation Automation für Compliance und Audit Requirements\n\n📊 Data Processing Automation:\n• Automated Data Enrichment durch External Intelligence Sources\n• Log Parsing und Normalization Automation für Consistent Data Format\n• Correlation Rule Management Automation für Dynamic Rule Updates\n• Report Generation Automation für Regular Compliance und Management Reporting\n• Data Retention und Archive Automation für Lifecycle Management\n\n🛡️ Threat Response Automation:\n• Automated Threat Hunting basierend auf Intelligence Feeds\n• IOC Deployment Automation für Rapid Threat Signature Updates\n• Vulnerability Response Automation für Coordinated Patching\n• User Account Management Automation für Compromise Response\n• Network Segmentation Automation für Threat Containment\n\n⚙️ Operational Automation:\n• System Health Monitoring Automation für Proactive Maintenance\n• Performance Optimization Automation für Self-tuning Systems\n• Backup und Recovery Automation für Business Continuity\n• Configuration Management Automation für Consistent System State\n• Capacity Management Automation für Resource Optimization\n\n📈 Quality Assurance und Validation:\n• Automated Testing für Automation Workflow Validation\n• Performance Monitoring für Automation Effectiveness Measurement\n• Error Rate Tracking für Automation Quality Assessment\n• Human Oversight Integration für Critical Decision Points\n• Continuous Improvement durch Automation Analytics und Feedback"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Compliance-Features sind in SIEM Tools essentiell und wie unterstützen sie verschiedene regulatorische Anforderungen?',
        answer: "Compliance-Features in SIEM Tools sind kritisch für regulierte Industrien und müssen verschiedene Standards und Frameworks unterstützen. Effektive Compliance-Integration automatisiert Reporting, gewährleistet Audit-Readiness und reduziert den manuellen Aufwand für regulatorische Anforderungen.\n\n📋 Regulatory Framework Support:\n• GDPR Compliance Features für Data Protection und Privacy Requirements\n• SOX Compliance Support für Financial Controls und Audit Trails\n• HIPAA Compliance Capabilities für Healthcare Data Protection\n• PCI DSS Support für Payment Card Industry Security Standards\n• ISO Standards Integration für International Security Management\n\n🔍 Audit Trail und Evidence Management:\n• Immutable Audit Logs für Tamper-proof Evidence Collection\n• Chain of Custody Management für Forensic Evidence Integrity\n• Automated Evidence Collection für Compliance Investigations\n• Retention Policy Management für Regulatory Data Requirements\n• Digital Signatures und Timestamping für Legal Admissibility\n\n📊 Automated Compliance Reporting:\n• Pre-built Report Templates für verschiedene Regulatory Standards\n• Scheduled Report Generation für Regular Compliance Submissions\n• Real-time Compliance Dashboards für Continuous Monitoring\n• Exception Reporting für Non-compliance Identification\n• Executive Summary Reports für Management Oversight\n\n🛡️ Data Protection und Privacy:\n• Data Classification und Labeling für Sensitive Information Protection\n• Data Loss Prevention Integration für Compliance Monitoring\n• Encryption Management für Data Protection Requirements\n• Access Control Monitoring für Privileged User Activity\n• Data Residency Compliance für Geographic Data Requirements\n\n⚖️ Risk Management Integration:\n• Risk Assessment Automation für Compliance Risk Identification\n• Control Effectiveness Monitoring für Regulatory Control Validation\n• Gap Analysis Automation für Compliance Deficiency Identification\n• Remediation Tracking für Compliance Issue Resolution\n• Risk Scoring für Compliance Priority Management\n\n📈 Continuous Compliance Monitoring:\n• Real-time Compliance Status Monitoring für Immediate Issue Detection\n• Policy Violation Detection für Automated Compliance Enforcement\n• Change Impact Assessment für Compliance Risk Evaluation\n• Compliance Metrics Tracking für Performance Measurement\n• Regulatory Update Integration für Current Compliance Requirements"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie evaluiert man die Threat Intelligence Integration von SIEM Tools und welche Quellen sollten unterstützt werden?',
        answer: "Threat Intelligence Integration transformiert SIEM Tools von reaktiven zu proaktiven Security-Plattformen und ermöglicht Context-aware Detection und Response. Die Evaluierung der Integration-Qualität und Quellenunterstützung ist entscheidend für effektive Threat Detection und Attribution.\n\n🌐 Threat Intelligence Source Integration:\n• Commercial Threat Intelligence Feeds für Premium Intelligence und Attribution\n• Open Source Intelligence Integration für Community-based Threat Sharing\n• Government Intelligence Feeds für Nation-state Threat Information\n• Industry-specific Intelligence für Sector-targeted Threat Information\n• Internal Intelligence Generation für Organization-specific Threat Context\n\n🔄 Intelligence Processing und Enrichment:\n• Automated IOC Extraction und Processing für Rapid Intelligence Deployment\n• Intelligence Correlation und Cross-referencing für Enhanced Context\n• False Positive Filtering für High-quality Intelligence Selection\n• Intelligence Aging und Expiration Management für Current Relevance\n• Custom Intelligence Creation für Organization-specific Indicators\n\n📊 Intelligence Application und Utilization:\n• Real-time Intelligence Matching für Immediate Threat Detection\n• Historical Intelligence Analysis für Threat Pattern Identification\n• Predictive Intelligence für Proactive Threat Hunting\n• Attribution Intelligence für Attack Source Identification\n• Campaign Intelligence für Advanced Persistent Threat Tracking\n\n🔍 Intelligence Quality Assessment:\n• Source Reliability Scoring für Intelligence Confidence Assessment\n• Intelligence Accuracy Tracking für Source Quality Evaluation\n• Timeliness Assessment für Intelligence Freshness Validation\n• Relevance Scoring für Organization-specific Intelligence Filtering\n• Completeness Evaluation für Comprehensive Intelligence Coverage\n\n⚙️ Intelligence Automation und Orchestration:\n• Automated Intelligence Ingestion für Seamless Feed Integration\n• Intelligence-driven Automation für Threat Response Orchestration\n• Dynamic Rule Generation basierend auf Intelligence Updates\n• Automated Threat Hunting mit Intelligence-guided Searches\n• Intelligence Sharing Automation für Community Contribution\n\n📈 Intelligence Effectiveness Measurement:\n• Detection Rate Improvement durch Intelligence Integration\n• False Positive Reduction durch Context-aware Intelligence\n• Response Time Improvement durch Automated Intelligence Application\n• Threat Attribution Accuracy für Investigation Enhancement\n• Intelligence ROI Measurement für Investment Justification"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
