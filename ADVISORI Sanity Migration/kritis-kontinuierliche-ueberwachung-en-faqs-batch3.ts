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

const faqsBatch3 = [
  {
    _type: 'object',
    _key: generateKey('faq', 9),
    question: "How does ADVISORI develop OT/IT convergence monitoring strategies for integrated CRITIS security architectures?",
    answer: `OT/IT convergence in CRITIS environments creates unique security challenges that require specialized monitoring approaches. ADVISORI develops integrated monitoring strategies that bridge the gap between operational technology and information technology while maintaining the safety and reliability requirements of critical infrastructure.

🏭 OT/IT Convergence Architecture:
• Unified Visibility Platform: Development of integrated monitoring platforms that provide comprehensive visibility across both OT and IT environments.
• Protocol-Aware Monitoring: Specialized monitoring capabilities for industrial protocols (Modbus, DNP3, IEC 61850, OPC UA) alongside traditional IT protocols.
• Asset Discovery and Classification: Automated discovery and classification of OT assets with integration into IT asset management systems.
• Network Segmentation Monitoring: Continuous monitoring of network segmentation between OT and IT zones to detect unauthorized cross-zone communication.

⚡ Industrial Control System Security:
• SCADA/DCS Monitoring: Specialized monitoring of Supervisory Control and Data Acquisition (SCADA) and Distributed Control Systems (DCS) for anomalous behavior.
• PLC/RTU Security: Detection of unauthorized changes to Programmable Logic Controllers (PLCs) and Remote Terminal Units (RTUs).
• Safety System Protection: Monitoring of Safety Instrumented Systems (SIS) to detect tampering or manipulation attempts.
• Process Anomaly Detection: Machine learning-based detection of process anomalies that may indicate cyber attacks or equipment failures.

🔗 Integration Challenges and Solutions:
• Legacy System Integration: Specialized approaches for integrating legacy OT systems that lack modern security capabilities.
• Real-Time Requirements: Monitoring solutions designed to meet the real-time requirements of industrial control systems without introducing latency.
• Vendor Coordination: Coordination with OT vendors to ensure monitoring solutions don't void warranties or violate support agreements.
• Compliance Alignment: Alignment of OT/IT monitoring with both IT security standards (ISO 27001) and industrial standards (IEC 62443).`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 10),
    question: "What automated response and self-healing mechanisms does ADVISORI implement for CRITIS incident management?",
    answer: `Automated response and self-healing mechanisms are critical for CRITIS environments where rapid response can prevent cascading failures and minimize operational impact. ADVISORI implements intelligent automation that balances speed with safety and maintains human oversight for critical decisions.

🤖 Intelligent Automation Framework:
• SOAR Integration: Implementation of Security Orchestration, Automation, and Response (SOAR) platforms for coordinated incident response.
• Playbook Automation: Development of automated playbooks for common incident types with predefined response actions and escalation triggers.
• Conditional Response Logic: Sophisticated decision trees that consider context, asset criticality, and potential impact before executing automated responses.
• Human-in-the-Loop Controls: Mandatory human approval for high-impact automated actions to prevent unintended consequences.

🔄 Self-Healing Capabilities:
• Automatic Isolation: Automated isolation of compromised systems to prevent lateral movement while maintaining critical operations.
• Configuration Rollback: Automatic rollback of unauthorized configuration changes to known-good states.
• Service Recovery: Automated restart and recovery of failed services with health verification before returning to production.
• Backup Activation: Automatic failover to backup systems when primary systems are compromised or unavailable.

⚡ Response Time Optimization:
• Pre-Staged Responses: Pre-configured response actions ready for immediate execution upon threat detection.
• Parallel Processing: Simultaneous execution of multiple response actions to minimize total response time.
• Priority-Based Queuing: Intelligent queuing of response actions based on threat severity and asset criticality.
• Performance Monitoring: Continuous monitoring of automation performance with optimization recommendations.

🛡️ Safety and Reliability:
• Fail-Safe Design: Automation designed to fail safely without causing additional harm to critical operations.
• Testing and Validation: Comprehensive testing of automated responses in isolated environments before production deployment.
• Audit Trail: Complete logging of all automated actions for compliance and forensic purposes.
• Continuous Improvement: Regular review and optimization of automation based on incident outcomes and lessons learned.`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 11),
    question: "How does ADVISORI implement supply chain security monitoring for CRITIS vendor and partner ecosystems?",
    answer: `Supply chain security has become a critical concern for CRITIS operators following high-profile supply chain attacks. ADVISORI implements comprehensive supply chain monitoring that extends security visibility beyond organizational boundaries to include vendors, partners, and service providers.

🔗 Supply Chain Visibility:
• Vendor Risk Assessment: Continuous assessment of vendor security posture using automated scanning, questionnaires, and third-party intelligence.
• Third-Party Access Monitoring: Real-time monitoring of all third-party access to CRITIS systems with behavioral analysis and anomaly detection.
• Software Supply Chain: Monitoring of software dependencies and components for vulnerabilities and malicious code injection.
• Hardware Supply Chain: Verification of hardware integrity and detection of counterfeit or tampered components.

📊 Vendor Security Scoring:
• Automated Risk Scoring: Continuous calculation of vendor risk scores based on security posture, incident history, and compliance status.
• Tiered Vendor Management: Classification of vendors by criticality with appropriate monitoring intensity and security requirements.
• Contractual Compliance: Monitoring of vendor compliance with contractual security requirements and SLAs.
• Incident Notification: Automated alerts when vendors experience security incidents that may impact CRITIS operations.

🛡️ Supply Chain Attack Detection:
• Software Integrity Verification: Cryptographic verification of software updates and patches before deployment.
• Behavioral Baseline Monitoring: Detection of anomalous behavior in vendor-supplied software or services.
• Lateral Movement Detection: Monitoring for attackers using vendor access as entry points for lateral movement.
• Data Exfiltration Prevention: Detection and prevention of data exfiltration through vendor connections.

🤝 Collaborative Security:
• Information Sharing: Structured information sharing with vendors about threats and vulnerabilities.
• Joint Incident Response: Coordinated incident response procedures with critical vendors.
• Security Improvement Programs: Collaborative programs to improve vendor security capabilities.
• Industry Collaboration: Participation in industry-wide supply chain security initiatives and information sharing.`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 12),
    question: "What behavioral analytics and UEBA capabilities does ADVISORI deploy for insider threat detection in CRITIS environments?",
    answer: `Insider threats represent one of the most challenging security risks for CRITIS operators due to legitimate access and knowledge of systems. ADVISORI deploys advanced User and Entity Behavior Analytics (UEBA) to detect insider threats while respecting privacy and maintaining employee trust.

👤 User Behavior Analytics:
• Baseline Development: Machine learning-based development of individual user behavior baselines across multiple dimensions.
• Anomaly Detection: Real-time detection of deviations from established behavioral patterns that may indicate insider threats.
• Peer Group Analysis: Comparison of user behavior with peer groups to identify outliers and suspicious activities.
• Temporal Analysis: Detection of unusual access patterns based on time of day, day of week, and historical patterns.

🔍 Entity Behavior Analytics:
• Device Behavior Monitoring: Analysis of device behavior patterns to detect compromised or misused endpoints.
• Application Usage Analysis: Monitoring of application usage patterns to detect unauthorized or suspicious activities.
• Data Access Patterns: Analysis of data access patterns to detect potential data theft or unauthorized access.
• Network Behavior Analysis: Detection of unusual network communication patterns that may indicate data exfiltration.

⚠️ Risk Scoring and Alerting:
• Dynamic Risk Scores: Continuous calculation of user and entity risk scores based on multiple behavioral indicators.
• Contextual Alerting: Alerts enriched with context to enable rapid investigation and reduce false positives.
• Threshold Management: Configurable thresholds that balance detection sensitivity with operational practicality.
• Escalation Workflows: Automated escalation workflows for high-risk alerts requiring immediate attention.

🔒 Privacy and Compliance:
• Privacy-by-Design: UEBA implementation designed to respect employee privacy while maintaining security effectiveness.
• Data Minimization: Collection of only necessary behavioral data with appropriate retention policies.
• Transparency: Clear communication with employees about monitoring practices and purposes.
• Works Council Coordination: Coordination with works councils and employee representatives as required by German law.`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding CRITIS Continuous Monitoring Incident Management English FAQs batch 3...')
  
  const documentId = 'kritis-kontinuierliche-ueberwachung-incident-management-en'
  
  const result = await client
    .patch(documentId)
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch3)
    .commit()
  
  console.log(`✅ Added ${faqsBatch3.length} FAQs to ${documentId}`)
  return result
}

// Only run if executed directly
if (require.main === module) {
  addFaqsBatch3().catch(console.error)
}
