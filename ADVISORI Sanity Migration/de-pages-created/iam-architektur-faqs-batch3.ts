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
    console.log('Updating IAM Architektur page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-architektur' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-architektur" not found')
    }
    
    // Create new FAQs for Security frameworks and Zero-Trust architectural integration
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie integriert man Zero-Trust-Prinzipien erfolgreich in eine IAM-Architektur und welche architektonischen Änderungen sind erforderlich, um kontinuierliche Verifikation zu gewährleisten?',
        answer: "Die Integration von Zero-Trust-Prinzipien in eine IAM-Architektur erfordert fundamentale architektonische Veränderungen, die über traditionelle perimeter-basierte Sicherheitsmodelle hinausgehen. Zero-Trust transformiert IAM von einem statischen Gatekeeper zu einem dynamischen, intelligenten Sicherheitsorchestrator, der kontinuierliche Verifikation und adaptive Autorisierung ermöglicht.\n\n🛡️ Zero-Trust Architecture Fundamentals:\n• Never Trust, Always Verify als Grundprinzip für alle Identitäts- und Zugriffsentscheidungen\n• Continuous Authentication mit Multi-Factor und Behavioral Verification\n• Least Privilege Access mit Just-in-Time und Just-Enough-Access Principles\n• Micro-Segmentation für granulare Netzwerk- und Anwendungssicherheit\n• Assume Breach Mentality mit kontinuierlicher Überwachung und Anomaly Detection\n\n🔍 Continuous Verification Architecture:\n• Real-time Risk Assessment mit Machine Learning und Behavioral Analytics\n• Context-aware Authentication basierend auf Benutzer, Gerät, Standort und Verhalten\n• Dynamic Policy Enforcement mit adaptiven Sicherheitsrichtlinien\n• Session Monitoring mit kontinuierlicher Vertrauensbewertung\n• Adaptive Multi-Factor Authentication basierend auf Risikobewertung\n\n🏗️ Architectural Components und Patterns:\n• Policy Decision Point für centralized Authorization Decisions\n• Policy Enforcement Points an allen kritischen Zugriffspunkten\n• Identity Verification Service mit Multi-Source Identity Validation\n• Risk Engine für Real-time Threat Assessment und Scoring\n• Audit und Analytics Engine für Compliance und Forensics\n\n🌐 Network und Application Integration:\n• Software-Defined Perimeter für sichere Netzwerksegmentierung\n• Service Mesh Integration für Service-to-Service Zero-Trust\n• API Gateway mit Zero-Trust Policy Enforcement\n• Cloud Access Security Broker für Cloud-Service-Protection\n• Endpoint Detection und Response für Device Trust Verification\n\n📊 Data-Centric Security Architecture:\n• Data Classification und Labeling für granulare Zugriffskontrollen\n• Encryption-at-Rest und Encryption-in-Transit für umfassenden Datenschutz\n• Data Loss Prevention mit Real-time Monitoring und Blocking\n• Rights Management für dokumentenbasierte Zugriffskontrollen\n• Privacy-preserving Analytics für GDPR-konforme Datennutzung\n\n🔄 Implementation Strategy und Migration:\n• Phased Rollout mit Pilot-Implementierung und graduelle Expansion\n• Legacy System Integration mit Adapter-Pattern und Proxy-Services\n• User Experience Optimization für nahtlose Zero-Trust-Adoption\n• Performance Optimization für minimale Latency-Impact\n• Change Management für organisatorische Zero-Trust-Transformation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielt Data Architecture in modernen IAM-Systemen und wie konzipiert man skalierbare Datenmodelle, die sowohl Performance als auch Compliance-Anforderungen optimal erfüllen?',
        answer: "Data Architecture bildet das Fundament moderner IAM-Systeme und bestimmt maßgeblich Performance, Skalierbarkeit und Compliance-Fähigkeiten. Eine durchdachte Datenarchitektur muss komplexe Identitätsbeziehungen modellieren, während sie gleichzeitig regulatorische Anforderungen erfüllt und extreme Skalierung ermöglicht.\n\n📊 Identity Data Modeling Strategies:\n• Graph Database Integration für komplexe Identitätsbeziehungen und Hierarchien\n• Polyglot Persistence mit verschiedenen Datenbanktechnologien für optimale Performance\n• Event Sourcing für vollständige Audit-Trails und State Reconstruction\n• CQRS Implementation für optimierte Read/Write-Performance\n• Data Partitioning und Sharding für horizontale Skalierung\n\n🔄 Real-time Data Processing Architecture:\n• Stream Processing für Event-driven Identity Updates\n• Change Data Capture für Real-time Synchronization\n• Event-driven Architecture für lose gekoppelte Datenverarbeitung\n• Message Queues für asynchrone Datenverarbeitung\n• Complex Event Processing für Pattern Recognition und Analytics\n\n🛡️ Data Security und Privacy-by-Design:\n• Encryption-at-Rest mit Advanced Key Management\n• Field-level Encryption für sensitive Identity Attributes\n• Data Masking und Tokenization für Privacy Protection\n• Right to be Forgotten Implementation für GDPR Compliance\n• Data Lineage Tracking für Compliance und Audit\n\n📈 Scalable Data Architecture Patterns:\n• Database Sharding Strategies für Multi-Tenant Environments\n• Read Replicas und Write-through Caching für Performance\n• Data Lake Integration für Analytics und Machine Learning\n• Time-series Databases für Audit und Behavioral Data\n• Distributed Caching für Low-latency Data Access\n\n🔍 Analytics und Intelligence Architecture:\n• Data Warehouse Integration für Business Intelligence\n• Real-time Analytics für Security Monitoring\n• Machine Learning Pipeline für Behavioral Analysis\n• Predictive Analytics für Risk Assessment\n• Identity Analytics für User Behavior Insights\n\n⚖️ Compliance und Governance Architecture:\n• Data Classification und Labeling für Regulatory Compliance\n• Retention Policies mit automatischer Data Lifecycle Management\n• Audit Trail Architecture für Compliance Reporting\n• Data Quality Management für Accurate Identity Information\n• Cross-border Data Transfer Compliance für Global Operations"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie entwickelt man eine resiliente IAM-Architektur, die High Availability gewährleistet und gleichzeitig Disaster Recovery und Business Continuity für kritische Identitätsdienste sicherstellt?',
        answer: "Eine resiliente IAM-Architektur ist essentiell für Business Continuity und muss sowohl geplante als auch ungeplante Ausfälle bewältigen können, ohne kritische Geschäftsprozesse zu beeinträchtigen. Resilienz erfordert durchdachte Redundanz, intelligente Failover-Mechanismen und robuste Recovery-Strategien auf allen Architekturebenen.\n\n🏗️ High Availability Architecture Design:\n• Multi-Zone Deployment für geografische Redundanz\n• Load Balancing mit Health Checks und Automatic Failover\n• Database Clustering mit Master-Slave und Master-Master Configurations\n• Stateless Service Design für horizontale Skalierung und Failover\n• Circuit Breaker Pattern für Graceful Degradation\n\n🔄 Disaster Recovery Architecture:\n• Hot-Standby Systems für minimale Recovery Time Objectives\n• Cross-Region Replication für geografische Disaster Protection\n• Backup und Recovery Automation mit Point-in-Time Recovery\n• Recovery Testing und Validation für Disaster Preparedness\n• Business Impact Analysis für Priority-based Recovery Planning\n\n📊 Data Resilience und Consistency:\n• Database Replication Strategies für Data Availability\n• Eventual Consistency Patterns für Distributed Systems\n• Conflict Resolution Mechanisms für Multi-Master Scenarios\n• Data Integrity Checks und Corruption Detection\n• Backup Verification und Recovery Testing\n\n🌐 Network Resilience und Connectivity:\n• Multi-Path Networking für Redundant Connectivity\n• DNS Failover für Automatic Service Redirection\n• Content Delivery Networks für Global Availability\n• Network Segmentation für Fault Isolation\n• Bandwidth Management für Performance under Load\n\n🔧 Operational Resilience Patterns:\n• Health Monitoring mit Proactive Alerting\n• Automated Recovery Procedures für Common Failure Scenarios\n• Capacity Planning für Peak Load Management\n• Performance Degradation Detection und Response\n• Incident Response Automation für Faster Recovery\n\n📋 Business Continuity Planning:\n• Recovery Time Objective und Recovery Point Objective Definition\n• Business Process Mapping für Critical Service Identification\n• Stakeholder Communication Plans für Incident Management\n• Regular Disaster Recovery Drills und Testing\n• Vendor Management für Third-party Service Continuity"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche architektonischen Überlegungen sind bei der Integration von Artificial Intelligence und Machine Learning in IAM-Systeme erforderlich und wie baut man intelligente, selbstlernende Identitätsarchitekturen?',
        answer: "Die Integration von AI und ML in IAM-Architekturen transformiert statische Sicherheitssysteme in intelligente, adaptive Plattformen, die kontinuierlich lernen und sich an neue Bedrohungen anpassen. Diese Integration erfordert spezialisierte architektonische Patterns, die Datenverarbeitung, Modell-Training und Real-time Inference nahtlos vereinen.\n\n🤖 AI-powered IAM Architecture Components:\n• Machine Learning Pipeline für Behavioral Analytics und Anomaly Detection\n• Real-time Inference Engine für Dynamic Risk Assessment\n• Model Training Infrastructure für Continuous Learning\n• Feature Engineering Pipeline für Identity Data Processing\n• A/B Testing Framework für Model Performance Validation\n\n📊 Data Architecture für Machine Learning:\n• Data Lake Integration für Historical Identity Data\n• Feature Store für Reusable ML Features\n• Real-time Streaming für Live Model Inference\n• Data Labeling und Annotation für Supervised Learning\n• Privacy-preserving ML für Sensitive Identity Data\n\n🧠 Intelligent Decision Making Architecture:\n• Risk Scoring Engine mit Multi-dimensional Analysis\n• Adaptive Authentication mit ML-based Challenge Selection\n• Behavioral Biometrics für Continuous User Verification\n• Fraud Detection mit Ensemble Learning Methods\n• Predictive Analytics für Proactive Security Measures\n\n🔄 Self-Learning und Adaptive Systems:\n• Online Learning für Real-time Model Updates\n• Feedback Loops für Continuous Model Improvement\n• Automated Model Retraining mit Performance Monitoring\n• Concept Drift Detection für Model Relevance\n• Explainable AI für Transparent Decision Making\n\n🛡️ AI Security und Model Protection:\n• Adversarial Attack Protection für ML Models\n• Model Versioning und Rollback Capabilities\n• Bias Detection und Fairness Monitoring\n• Model Interpretability für Compliance Requirements\n• Secure Model Deployment mit Encrypted Inference\n\n⚡ Performance und Scalability Considerations:\n• Edge Computing für Low-latency ML Inference\n• Model Optimization für Resource-efficient Deployment\n• Distributed Training für Large-scale Model Development\n• Caching Strategies für Frequent ML Predictions\n• Auto-scaling für Variable ML Workloads"
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
