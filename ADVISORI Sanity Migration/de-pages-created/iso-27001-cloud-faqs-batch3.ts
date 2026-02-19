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
    console.log('Updating ISO 27001 Cloud page with FAQ batch 3...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-cloud' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-cloud" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie können Organisationen Data Governance und Privacy Controls in Multi-Cloud-Umgebungen für ISO 27001 Compliance implementieren?',
        answer: "Data Governance und Privacy Controls in Multi-Cloud-Umgebungen erfordern einen strategischen, koordinierten Ansatz, der sowohl technische als auch organisatorische Maßnahmen umfasst. Die Herausforderung liegt in der einheitlichen Durchsetzung von Datenschutz- und Governance-Richtlinien über verschiedene Cloud-Plattformen und Jurisdiktionen hinweg.\n\n🗂️ Unified Data Classification und Labeling:\n• Implementierung eines einheitlichen Datenklassifikationsschemas über alle Cloud-Umgebungen hinweg\n• Automatisierte Datenklassifikation mit Machine Learning und Content Analysis Tools\n• Konsistente Labeling-Standards für Datensensitivität und Compliance-Anforderungen\n• Integration von Datenklassifikation in Cloud-native Services und APIs\n• Real-time Data Discovery und Classification für dynamische Cloud-Workloads\n\n🔐 Cross-Cloud Encryption und Key Management:\n• Einheitliche Verschlüsselungsstandards für Data at Rest und in Transit über alle Cloud-Provider\n• Centralized Key Management mit Hardware Security Modules und Customer-Managed Keys\n• End-to-End Encryption für Multi-Cloud Data Flows und Service Integration\n• Key Rotation und Lifecycle Management mit automatisierten Prozessen\n• Quantum-resistant Encryption Strategies für langfristige Datensicherheit\n\n🌍 Data Residency und Sovereignty Management:\n• Comprehensive Data Mapping für Verständnis von Datenflüssen und Storage-Locations\n• Automated Data Residency Controls mit Policy-based Data Placement\n• Cross-Border Data Transfer Agreements und Technical Safeguards Implementation\n• Real-time Monitoring von Datenstandorten und automatische Compliance-Validierung\n• Emergency Data Repatriation Procedures für Compliance-kritische Szenarien\n\n📊 Privacy by Design Implementation:\n• Integration von Privacy Controls in Cloud Architecture und Service Design\n• Automated Privacy Impact Assessments für neue Cloud-Services und Data Processing\n• Data Minimization Strategies mit automatischer Data Lifecycle Management\n• Consent Management Platforms mit Multi-Cloud Integration\n• Privacy-preserving Technologies wie Differential Privacy und Homomorphic Encryption"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielen Automation und Infrastructure as Code bei der Aufrechterhaltung von ISO 27001 Compliance in Cloud-Umgebungen?',
        answer: "Automation und Infrastructure as Code sind fundamentale Enabler für nachhaltige ISO 27001 Compliance in Cloud-Umgebungen. Sie ermöglichen konsistente, wiederholbare und auditierbare Sicherheitsimplementierungen, die mit der Geschwindigkeit und Skalierung moderner Cloud-Operationen Schritt halten können.\n\n🔧 Infrastructure as Code Security Integration:\n• Security Controls als Code mit Terraform, CloudFormation und anderen IaC-Tools\n• Automated Security Baseline Deployment für konsistente Konfigurationen\n• Version Control für Infrastructure Code mit Security Review Processes\n• Immutable Infrastructure Patterns für Drift Prevention und Consistency\n• Security Testing Integration in IaC Development Pipelines\n\n🤖 Automated Compliance Monitoring:\n• Continuous Configuration Monitoring mit Cloud Security Posture Management\n• Real-time Policy Violation Detection und Automated Remediation\n• Compliance Dashboard Automation für Executive Reporting\n• Automated Evidence Collection für Audit Readiness\n• Drift Detection und Automatic Correction für Security Configurations\n\n🔄 Policy as Code Implementation:\n• Codified Security Policies mit Open Policy Agent und similar Frameworks\n• Automated Policy Enforcement in CI/CD Pipelines\n• Dynamic Policy Updates basierend auf Threat Intelligence\n• Cross-Cloud Policy Consistency mit Unified Policy Management\n• Automated Policy Testing und Validation Processes\n\n📋 Automated Documentation und Audit Trails:\n• Automatic Generation von Compliance Documentation\n• Real-time Audit Trail Collection und Correlation\n• Automated Change Management Documentation\n• Self-Service Compliance Reporting für verschiedene Stakeholder\n• Integration mit GRC Platforms für Unified Risk Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie sollten Organisationen Business Continuity und Disaster Recovery für ISO 27001 Compliance in Cloud-Umgebungen planen?',
        answer: "Business Continuity und Disaster Recovery in Cloud-Umgebungen erfordern eine Neuausrichtung traditioneller Ansätze, um die einzigartigen Möglichkeiten und Herausforderungen der Cloud zu nutzen. ISO 27001 Compliance verlangt robuste, getestete und dokumentierte Verfahren für die Aufrechterhaltung kritischer Geschäftsprozesse.\n\n🏗️ Cloud-Native BC/DR Architecture:\n• Multi-Region und Multi-Cloud Deployment Strategies für maximale Resilienz\n• Automated Failover Mechanisms mit Health Checks und Load Balancing\n• Microservices Architecture für granulare Recovery Capabilities\n• Containerized Applications für schnelle Recovery und Portability\n• Serverless Computing für automatische Skalierung und Verfügbarkeit\n\n💾 Advanced Backup und Recovery Strategies:\n• Automated Backup Orchestration über multiple Cloud-Services\n• Cross-Region Backup Replication mit Encryption und Integrity Verification\n• Point-in-Time Recovery Capabilities für verschiedene Recovery Objectives\n• Automated Backup Testing und Validation Processes\n• Immutable Backup Storage für Ransomware Protection\n\n⚡ Rapid Recovery und Orchestration:\n• Infrastructure as Code für schnelle Environment Recreation\n• Automated Recovery Playbooks mit Orchestration Tools\n• Database Replication und Synchronization Strategies\n• Application State Management für Stateful Services\n• Network Connectivity Restoration mit Software-Defined Networking\n\n🧪 Comprehensive Testing und Validation:\n• Regular Disaster Recovery Testing mit verschiedenen Failure Scenarios\n• Automated Testing Integration in CI/CD Pipelines\n• Chaos Engineering für Proactive Resilience Testing\n• Business Impact Analysis für Recovery Time und Point Objectives\n• Stakeholder Communication und Coordination Testing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche spezifischen Audit-Strategien und -Tools sind für ISO 27001 Compliance in Cloud-Umgebungen am effektivsten?',
        answer: "Effektive Audit-Strategien für Cloud-basierte ISO 27001 Compliance erfordern spezialisierte Ansätze, Tools und Methoden, die die Komplexität und Dynamik von Cloud-Umgebungen berücksichtigen. Moderne Audit-Praktiken nutzen Automation, kontinuierliche Überwachung und Cloud-native Tools für umfassende Compliance-Validierung.\n\n🔍 Continuous Audit und Real-time Monitoring:\n• Automated Compliance Scanning mit Cloud Security Posture Management Tools\n• Real-time Control Effectiveness Monitoring mit KPI Dashboards\n• Continuous Evidence Collection für Audit Readiness\n• Automated Risk Assessment Updates basierend auf Configuration Changes\n• Integration mit SIEM Systems für Security Event Correlation\n\n📊 Cloud-Native Audit Tools und Platforms:\n• Multi-Cloud Compliance Platforms für Unified Audit Management\n• API-based Audit Data Collection für Comprehensive Coverage\n• Cloud Provider Native Audit Tools Integration\n• Third-Party Audit Automation Platforms\n• Custom Audit Scripts und Tools für Specific Requirements\n\n🎯 Risk-Based Audit Approaches:\n• Dynamic Audit Scope Adjustment basierend auf Risk Assessment\n• Threat-informed Audit Planning mit Threat Intelligence Integration\n• Business Impact-driven Audit Prioritization\n• Automated Risk Scoring für Audit Focus Areas\n• Predictive Analytics für Proactive Audit Planning\n\n📋 Evidence Management und Documentation:\n• Automated Evidence Collection und Correlation\n• Blockchain-based Evidence Integrity für Tamper-proof Audit Trails\n• Real-time Audit Documentation Generation\n• Collaborative Audit Platforms für Multi-stakeholder Engagement\n• Integration mit GRC Platforms für Unified Compliance Management"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
