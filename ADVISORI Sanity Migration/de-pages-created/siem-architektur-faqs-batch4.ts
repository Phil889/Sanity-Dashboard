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
    console.log('Updating SIEM Architektur page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-architektur' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-architektur" not found')
    }
    
    // Create new FAQs for SIEM Architecture security and governance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Security-by-Design Prinzipien sind für SIEM Architekturen essentiell und wie implementiert man Zero-Trust Konzepte?',
        answer: "Security-by-Design ist fundamental für SIEM Architekturen, da diese Systeme selbst hochwertige Ziele für Angreifer darstellen. Zero-Trust Prinzipien gewährleisten, dass SIEM Infrastrukturen nicht nur Sicherheit überwachen, sondern auch selbst maximal sicher sind und als vertrauenswürdige Basis für Cybersecurity Operations fungieren.\n\n🛡️ Zero-Trust Architecture Principles:\n• Never Trust, Always Verify für alle System-Komponenten und Benutzer\n• Least Privilege Access für minimale Berechtigungen und Risikoreduktion\n• Assume Breach Mentality für proaktive Sicherheitsmaßnahmen\n• Continuous Verification für dynamische Vertrauensbewertung\n• Micro-segmentation für granulare Zugriffskontrolle\n\n🔐 Identity und Access Management:\n• Multi-factor Authentication für alle privilegierten Zugriffe\n• Role-based Access Control für strukturierte Berechtigungsverwaltung\n• Privileged Access Management für Administrative Accounts\n• Just-in-time Access für temporäre Berechtigungserteilung\n• Identity Federation für Single Sign-On und Centralized Management\n\n🔒 Data Protection Architecture:\n• Encryption-at-Rest für alle gespeicherten Daten\n• Encryption-in-Transit für alle Datenübertragungen\n• Key Management Systems für sichere Schlüsselverwaltung\n• Data Loss Prevention für Schutz vor Datenexfiltration\n• Data Classification für risikobasierte Schutzmaßnahmen\n\n🌐 Network Security Design:\n• Network Segmentation für Isolation kritischer Komponenten\n• Firewall Architecture für Traffic Control und Filtering\n• Intrusion Detection für Network-level Threat Monitoring\n• VPN Integration für sichere Remote-Verbindungen\n• Network Access Control für Device Authentication\n\n🔍 Security Monitoring und Logging:\n• Comprehensive Audit Logging für alle System-Aktivitäten\n• Security Information Correlation für Threat Detection\n• Behavioral Analytics für Anomaly Detection\n• Threat Intelligence Integration für Proactive Defense\n• Incident Response Automation für schnelle Reaktion\n\n⚙️ Secure Development und Operations:\n• Secure Coding Practices für Custom Components\n• Vulnerability Management für Continuous Security Assessment\n• Security Testing Integration für Quality Assurance\n• Configuration Management für Secure System Setup\n• Change Management für Controlled Security Updates"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie gestaltet man eine DevOps-integrierte SIEM Architektur und welche Infrastructure-as-Code Strategien sind optimal?',
        answer: "DevOps-Integration revolutioniert SIEM Architekturen durch Automatisierung, Konsistenz und Agilität. Infrastructure-as-Code ermöglicht reproduzierbare, versionierte und skalierbare SIEM Deployments, die sich nahtlos in moderne Entwicklungs- und Operations-Workflows integrieren lassen.\n\n🚀 DevOps Integration Patterns:\n• Continuous Integration für Automated Testing und Validation\n• Continuous Deployment für Streamlined Release Management\n• GitOps Workflows für Version-controlled Infrastructure Management\n• Pipeline Automation für Consistent Deployment Processes\n• Feedback Loops für Continuous Improvement und Optimization\n\n📜 Infrastructure-as-Code Implementation:\n• Declarative Configuration für Predictable Infrastructure State\n• Version Control Integration für Change Tracking und Rollback\n• Template-based Deployment für Standardized Infrastructure\n• Environment Parity für Consistent Development und Production\n• Automated Provisioning für Rapid Environment Creation\n\n🔧 Configuration Management:\n• Immutable Infrastructure für Consistent und Secure Deployments\n• Configuration Drift Detection für Compliance Assurance\n• Automated Configuration Updates für Security Patch Management\n• Environment-specific Configurations für Flexible Deployments\n• Secret Management Integration für Secure Credential Handling\n\n📊 Monitoring und Observability Integration:\n• Infrastructure Monitoring für DevOps Pipeline Visibility\n• Application Performance Monitoring für End-to-end Observability\n• Log Aggregation für Centralized Troubleshooting\n• Metrics Collection für Performance Optimization\n• Alerting Integration für Proactive Issue Resolution\n\n🧪 Testing und Quality Assurance:\n• Infrastructure Testing für Validation vor Deployment\n• Security Testing Integration für Continuous Security Assessment\n• Performance Testing für Scalability Validation\n• Chaos Engineering für Resilience Testing\n• Compliance Testing für Regulatory Adherence\n\n⚡ Automation und Orchestration:\n• Deployment Automation für Error-free Releases\n• Scaling Automation für Dynamic Resource Management\n• Backup Automation für Data Protection\n• Recovery Automation für Business Continuity\n• Maintenance Automation für Operational Efficiency"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Governance-Frameworks sind für Enterprise SIEM Architekturen erforderlich und wie implementiert man effektive Architecture Governance?',
        answer: "Architecture Governance ist entscheidend für Enterprise SIEM Systeme, da sie Konsistenz, Compliance und strategische Ausrichtung gewährleistet. Ein strukturiertes Governance-Framework schafft die Grundlage für nachhaltige, skalierbare und business-aligned SIEM Architekturen.\n\n🏛️ Architecture Governance Framework:\n• Architecture Review Boards für Strategic Decision Making\n• Architecture Standards Definition für Consistency Assurance\n• Compliance Monitoring für Regulatory Adherence\n• Risk Management Integration für Risk-informed Decisions\n• Stakeholder Alignment für Business-IT Coordination\n\n📋 Standards und Guidelines:\n• Architecture Principles Definition für Design Guidance\n• Technology Standards für Vendor und Tool Selection\n• Security Standards für Consistent Security Implementation\n• Integration Standards für Seamless System Connectivity\n• Documentation Standards für Knowledge Management\n\n🔍 Architecture Assessment und Review:\n• Regular Architecture Reviews für Continuous Improvement\n• Compliance Audits für Regulatory Validation\n• Performance Assessments für Optimization Opportunities\n• Security Reviews für Threat Landscape Adaptation\n• Technology Assessments für Innovation Integration\n\n📊 Metrics und KPIs:\n• Architecture Maturity Metrics für Progress Tracking\n• Compliance Metrics für Regulatory Performance\n• Performance Metrics für Technical Excellence\n• Cost Metrics für Financial Optimization\n• Risk Metrics für Security Posture Assessment\n\n⚙️ Change Management:\n• Architecture Change Control für Controlled Evolution\n• Impact Assessment für Change Risk Evaluation\n• Approval Processes für Governance Compliance\n• Communication Strategies für Stakeholder Engagement\n• Training Programs für Knowledge Transfer\n\n🎯 Strategic Alignment:\n• Business Strategy Integration für Value Creation\n• Technology Roadmap Alignment für Future-proofing\n• Investment Planning für Resource Optimization\n• Vendor Management für Strategic Partnerships\n• Innovation Management für Competitive Advantage"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie entwickelt man eine Disaster Recovery und Business Continuity Architektur für kritische SIEM Infrastrukturen?',
        answer: "Disaster Recovery und Business Continuity sind essentiell für kritische SIEM Infrastrukturen, da Ausfälle zu Security Blind Spots und Compliance-Verletzungen führen können. Eine umfassende DR/BC Architektur gewährleistet kontinuierliche Cybersecurity Operations auch bei schwerwiegenden Störungen oder Katastrophen.\n\n🏢 Business Continuity Planning:\n• Business Impact Analysis für Criticality Assessment\n• Recovery Time Objectives Definition für Service Level Requirements\n• Recovery Point Objectives für Data Loss Tolerance\n• Continuity Strategies für Different Disaster Scenarios\n• Stakeholder Communication Plans für Crisis Management\n\n🔄 Disaster Recovery Architecture:\n• Hot Site Configuration für Immediate Failover Capability\n• Warm Site Setup für Balanced Cost und Recovery Time\n• Cold Site Planning für Cost-effective Long-term Recovery\n• Cloud-based DR für Scalable und Flexible Recovery\n• Hybrid DR Strategies für Optimal Cost-Performance Balance\n\n📊 Data Protection und Replication:\n• Real-time Data Replication für Minimal Data Loss\n• Incremental Backup Strategies für Efficient Storage Utilization\n• Cross-site Data Synchronization für Geographic Redundancy\n• Data Integrity Verification für Reliable Recovery\n• Retention Policy Management für Compliance und Storage Optimization\n\n🧪 Testing und Validation:\n• Regular DR Drills für Team Preparedness\n• Automated Testing Frameworks für Continuous Validation\n• Scenario-based Testing für Comprehensive Coverage\n• Recovery Time Testing für RTO Validation\n• Data Recovery Testing für RPO Verification\n\n📋 Documentation und Procedures:\n• Detailed Recovery Procedures für Step-by-step Guidance\n• Contact Lists und Escalation Procedures für Crisis Communication\n• Vendor Contact Information für External Support\n• System Dependencies Mapping für Recovery Prioritization\n• Lessons Learned Documentation für Continuous Improvement\n\n⚡ Automation und Orchestration:\n• Automated Failover Mechanisms für Rapid Recovery\n• Recovery Orchestration für Coordinated System Restoration\n• Health Check Automation für System Status Monitoring\n• Notification Automation für Stakeholder Communication\n• Recovery Validation Automation für Quality Assurance"
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
