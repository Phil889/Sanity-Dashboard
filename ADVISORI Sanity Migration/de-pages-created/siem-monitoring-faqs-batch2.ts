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
    console.log('Updating SIEM Monitoring page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-monitoring' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-monitoring" not found')
    }
    
    // Create new FAQs for Alert management and false positive reduction
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt man eine effektive Strategie zur Reduzierung von False Positives in SIEM Monitoring ohne kritische Bedrohungen zu übersehen?',
        answer: "Die Reduzierung von False Positives ist eine der kritischsten Herausforderungen im SIEM Monitoring und erfordert einen systematischen, datengetriebenen Ansatz, der Präzision mit umfassender Threat Coverage verbindet. Eine effektive Strategie muss sowohl technische als auch prozessuale Optimierungen umfassen.\n\n📊 Statistical Analysis und Baseline Optimization:\n• Comprehensive Baseline Establishment für normale Aktivitätsmuster in verschiedenen Umgebungen und Zeiträumen\n• Statistical Process Control für dynamische Threshold-Anpassung basierend auf historischen Daten und Trends\n• Seasonal Pattern Recognition für zeitabhängige Aktivitätsvariationen und Business-Zyklen\n• Outlier Detection und Anomaly Scoring für präzise Abgrenzung zwischen legitimen und verdächtigen Aktivitäten\n• Confidence Interval Calculation für Risk-based Alert Generation und Severity Assignment\n\n🎯 Contextual Enrichment und Environmental Awareness:\n• Asset Classification und Criticality Mapping für Business-aligned Alert Prioritization\n• User Behavior Profiling und Role-based Activity Modeling für Insider Threat Detection\n• Network Topology Awareness für Legitimate Traffic Pattern Recognition\n• Application Context Integration für Business Process Understanding\n• Geolocation und Time Zone Analysis für Travel Pattern Validation\n\n🔍 Advanced Correlation Techniques:\n• Multi-dimensional Event Correlation für Related Activity Clustering\n• Temporal Pattern Analysis für Attack Sequence Detection und Legitimate Workflow Recognition\n• Cross-platform Correlation für Holistic Security Event Understanding\n• Threat Intelligence Integration für Known-Good und Known-Bad Classification\n• Behavioral Analytics für User und Entity Relationship Modeling\n\n⚙️ Intelligent Suppression und Exception Management:\n• Dynamic Suppression Rules für Recurring False Positives mit Automatic Expiration\n• Exception Handling für Known-Good Activities mit Regular Review Cycles\n• Whitelist Management für Trusted Sources und Legitimate Communications\n• Maintenance Window Integration für Planned Activity Suppression\n• Business Process Alignment für Operational Activity Recognition\n\n🔄 Continuous Learning und Feedback Integration:\n• Analyst Feedback Loop für Rule Refinement und Threshold Optimization\n• Machine Learning Integration für Adaptive False Positive Reduction\n• A/B Testing für Alert Logic Optimization und Performance Comparison\n• Historical Analysis für Pattern Recognition und Trend Identification\n• Regular Review Cycles für Strategic False Positive Reduction Planning\n\n🛡️ Risk-balanced Approach:\n• Risk Assessment für Alert Suppression Decisions und Impact Analysis\n• Layered Detection Strategy für Redundant Coverage und Backup Detection\n• Critical Asset Monitoring für High-priority System Protection\n• Escalation Pathways für Uncertain Cases und Edge Scenarios\n• Regular Validation für Suppression Rule Effectiveness und Security Coverage"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Methoden sind am effektivsten für Real-time Alert Correlation und wie implementiert man diese in hochvolumigen SIEM-Umgebungen?',
        answer: "Real-time Alert Correlation in hochvolumigen SIEM-Umgebungen erfordert sophisticated Processing-Techniken, optimierte Algorithmen und skalierbare Architekturen. Effektive Correlation reduziert Alert-Fatigue und ermöglicht präzise Incident Detection auch bei großen Datenmengen.\n\n⚡ High-Performance Processing Architecture:\n• Stream Processing Frameworks für Real-time Event Correlation mit minimaler Latenz\n• In-Memory Computing für schnelle Pattern Matching und Relationship Analysis\n• Distributed Processing für Horizontal Scaling und Load Distribution\n• Parallel Processing für Concurrent Correlation Workflows\n• Edge Computing Integration für Lokalized Correlation und Bandwidth Optimization\n\n🔗 Multi-dimensional Correlation Algorithms:\n• Temporal Correlation für Time-based Event Sequencing und Attack Timeline Reconstruction\n• Spatial Correlation für Network-based Relationship Analysis und Lateral Movement Detection\n• Behavioral Correlation für User und Entity Activity Pattern Matching\n• Semantic Correlation für Content-based Event Relationship Identification\n• Statistical Correlation für Anomaly Clustering und Pattern Recognition\n\n📈 Scalable Data Management:\n• Time-series Database Optimization für Efficient Historical Data Access\n• Data Partitioning Strategies für Performance Optimization und Resource Management\n• Indexing Optimization für Fast Query Performance und Real-time Access\n• Data Compression Techniques für Storage Efficiency und Transfer Optimization\n• Caching Strategies für Frequently Accessed Correlation Data\n\n🧠 Intelligent Correlation Logic:\n• Rule-based Correlation für Known Attack Patterns und Signature-based Detection\n• Machine Learning Correlation für Unknown Pattern Discovery und Adaptive Learning\n• Graph-based Correlation für Complex Relationship Analysis und Network Visualization\n• Fuzzy Logic Integration für Uncertain Relationship Handling\n• Probabilistic Correlation für Risk-based Event Association\n\n⚖️ Performance Optimization Techniques:\n• Sliding Window Algorithms für Efficient Time-based Correlation\n• Bloom Filters für Fast Membership Testing und Memory Optimization\n• Approximate Algorithms für Trade-off zwischen Accuracy und Performance\n• Priority Queues für Critical Event Processing und Resource Allocation\n• Load Balancing für Optimal Resource Utilization und System Stability\n\n🎛️ Adaptive Correlation Management:\n• Dynamic Threshold Adjustment für Changing Environment Conditions\n• Correlation Rule Optimization basierend auf Performance Metrics und Effectiveness\n• Resource Monitoring für System Performance und Capacity Planning\n• Alert Volume Management für Sustainable Operations und Analyst Productivity\n• Continuous Tuning für Optimal Correlation Performance und Accuracy"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestaltet man effektive Escalation-Workflows für SIEM Alerts und welche Automatisierungsgrade sind optimal für verschiedene Incident-Typen?',
        answer: "Effektive Escalation-Workflows sind entscheidend für zeitgerechte Incident Response und erfordern intelligente Automatisierung, die menschliche Expertise optimal ergänzt. Die richtige Balance zwischen Automation und Human Oversight gewährleistet sowohl Effizienz als auch Accuracy in der Incident Response.\n\n🎯 Risk-based Escalation Matrix:\n• Severity Classification basierend auf Asset Criticality, Threat Impact und Business Consequences\n• Dynamic Priority Assignment durch Real-time Risk Assessment und Contextual Analysis\n• Business Impact Scoring für Escalation Priority und Resource Allocation\n• Regulatory Compliance Integration für Compliance-critical Incident Handling\n• SLA-based Escalation für Time-sensitive Response Requirements\n\n⏰ Time-based Escalation Logic:\n• Progressive Escalation Timers für verschiedene Severity Levels und Incident Types\n• Business Hours Integration für Appropriate Response Team Availability\n• Holiday und Maintenance Window Considerations für Realistic Response Expectations\n• Geographic Distribution für Follow-the-Sun Operations und Continuous Coverage\n• Emergency Escalation Pathways für Critical Security Incidents\n\n🤖 Intelligent Automation Levels:\n• Level 1 Automation für Standard Alert Triage und Initial Classification\n• Level 2 Automation für Evidence Gathering und Preliminary Investigation\n• Level 3 Automation für Response Action Execution und Containment Measures\n• Human-in-the-Loop für Complex Decision Making und Strategic Response\n• Full Automation für Well-defined, Low-risk Response Scenarios\n\n👥 Role-based Escalation Pathways:\n• Tier-based Escalation für Skill-appropriate Incident Assignment\n• Subject Matter Expert Integration für Specialized Threat Analysis\n• Management Escalation für High-impact Incidents und Strategic Decisions\n• External Partner Integration für Third-party Expertise und Vendor Support\n• Legal und Compliance Team Integration für Regulatory Incident Handling\n\n📱 Multi-channel Communication:\n• Primary und Secondary Notification Channels für Reliable Alert Delivery\n• Mobile Integration für On-call Response und Remote Accessibility\n• Collaboration Platform Integration für Team Coordination und Information Sharing\n• Status Update Automation für Stakeholder Communication und Transparency\n• Escalation Acknowledgment Tracking für Response Verification\n\n🔄 Continuous Workflow Optimization:\n• Escalation Effectiveness Metrics für Performance Measurement und Improvement\n• Response Time Analysis für SLA Compliance und Process Optimization\n• False Escalation Tracking für Workflow Refinement und Efficiency\n• Feedback Integration für Continuous Process Improvement\n• Regular Workflow Review für Strategic Escalation Strategy Evolution"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Behavioral Analytics im modernen SIEM Monitoring und wie integriert man diese effektiv in bestehende Detection-Strategien?',
        answer: "Behavioral Analytics revolutionieren SIEM Monitoring durch die Fähigkeit, subtile Anomalien und Advanced Persistent Threats zu erkennen, die traditionelle Signature-based Detection umgehen. Effektive Integration erfordert strategische Planung, qualitativ hochwertige Baselines und kontinuierliche Optimierung.\n\n🧠 User Behavior Analytics Implementation:\n• Comprehensive User Profiling basierend auf Historical Activity Patterns und Role-based Expectations\n• Anomaly Detection für Unusual Access Patterns, Privilege Escalation und Data Exfiltration\n• Peer Group Analysis für Comparative Behavior Assessment und Outlier Identification\n• Risk Scoring für Dynamic User Risk Assessment und Adaptive Access Control\n• Insider Threat Detection für Malicious und Negligent Insider Activity\n\n🌐 Entity Behavior Analytics:\n• Device Behavior Profiling für Endpoint Anomaly Detection und Compromise Identification\n• Network Entity Analysis für Infrastructure Component Monitoring und Lateral Movement Detection\n• Application Behavior Monitoring für Software Anomaly Detection und Zero-Day Exploit Identification\n• Service Account Monitoring für Automated System Behavior und Abuse Detection\n• Cloud Resource Behavior für Dynamic Infrastructure Monitoring\n\n📊 Advanced Analytics Techniques:\n• Machine Learning Models für Pattern Recognition und Predictive Anomaly Detection\n• Statistical Analysis für Baseline Establishment und Deviation Measurement\n• Time Series Analysis für Temporal Pattern Recognition und Trend Identification\n• Graph Analytics für Relationship Modeling und Network Effect Analysis\n• Ensemble Methods für Robust Detection durch Multiple Algorithm Combination\n\n🔗 Integration mit Traditional Detection:\n• Layered Detection Strategy für Comprehensive Threat Coverage und Redundancy\n• Correlation Engine Integration für Behavioral und Signature-based Alert Fusion\n• Context Enrichment für Enhanced Alert Information und Investigation Support\n• Priority Adjustment für Behavioral Analytics-informed Alert Scoring\n• Feedback Loop für Continuous Improvement und Model Refinement\n\n⚙️ Implementation Best Practices:\n• Baseline Period Definition für Accurate Normal Behavior Establishment\n• Data Quality Assurance für Reliable Analytics Input und Model Training\n• Privacy Protection für Compliant Behavioral Monitoring und Data Handling\n• Performance Optimization für Real-time Analytics und Scalable Processing\n• Model Validation für Accuracy Verification und False Positive Minimization\n\n🎯 Use Case Optimization:\n• Privileged User Monitoring für High-risk Account Activity und Administrative Abuse\n• Remote Access Analytics für VPN und Remote Desktop Anomaly Detection\n• Data Access Patterns für Sensitive Information Protection und Exfiltration Prevention\n• Authentication Behavior für Account Compromise Detection und Credential Abuse\n• Application Usage Analytics für Software Misuse und Unauthorized Tool Detection"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
