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
    console.log('Updating DORA SIEM Monitoring page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-siem-monitoring' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-siem-monitoring" not found')
    }
    
    // Create new FAQs for technical implementation and architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie sollte eine SIEM-Architektur für DORA-Compliance designed werden und welche technischen Komponenten sind essentiell?',
        answer: "Das Design einer DORA-konformen SIEM-Architektur erfordert eine durchdachte Balance zwischen technischer Leistungsfähigkeit, Skalierbarkeit und regulatorischer Compliance. Die Architektur muss nicht nur aktuelle Anforderungen erfüllen, sondern auch flexibel genug sein, um sich an evolvierende Bedrohungslandschaften und regulatorische Entwicklungen anzupassen.\n\n🏗️ Kern-Architektur-Komponenten:\n• Zentrale SIEM-Plattform mit hochverfügbarer, redundanter Infrastruktur für kontinuierliche Überwachung ohne Single Points of Failure\n• Distributed Log Collection Layer mit intelligenten Forwardern und Aggregatoren für effiziente Datensammlung aus heterogenen Quellen\n• Hochperformante Datenverarbeitungs-Engine mit Real-time Stream Processing und Batch Analytics Capabilities\n• Skalierbare Datenspeicher-Architektur mit Hot, Warm und Cold Storage Tiers für optimierte Performance und Kosteneffizienz\n• Integrierte Threat Intelligence Platform für kontextualisierte Bedrohungsanalyse und IOC-Management\n\n🔄 Data Pipeline und Processing:\n• Robuste ETL-Prozesse für Normalisierung, Enrichment und Korrelation von Security Events aus verschiedenen Datenquellen\n• Event Processing Engine mit Complex Event Processing Capabilities für sophisticated Pattern Recognition\n• Machine Learning und AI-Integration für Advanced Threat Detection und Anomalie-Erkennung\n• Real-time Alerting und Notification System mit intelligenter Priorisierung und Eskalation\n• Automated Response und Orchestration Capabilities für immediate Threat Mitigation\n\n🛡️ Security und Compliance Integration:\n• End-to-End Verschlüsselung für Data in Transit und Data at Rest mit Enterprise-grade Schlüsselmanagement\n• Role-based Access Control mit granularen Berechtigungen und Multi-Factor Authentication\n• Comprehensive Audit Logging für alle SIEM-Aktivitäten und Konfigurationsänderungen\n• Data Loss Prevention Integration für Schutz sensibler Informationen in Log-Daten\n• Compliance Reporting Engine für automatisierte Generierung regulatorischer Reports\n\n📊 Analytics und Visualization:\n• Interactive Dashboards mit Real-time Visualisierung von Security Metrics und KPIs\n• Advanced Analytics Workbench für Deep-Dive Investigations und Forensic Analysis\n• Executive Reporting Suite mit Business-oriented Security Metrics und Trend Analysis\n• Custom Query Interface für Ad-hoc Analysis und Threat Hunting Activities\n• Integration mit Business Intelligence Tools für holistische Risk Assessment"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Datensammlung und Log-Management-Strategien sind für DORA-konforme SIEM-Implementierungen erforderlich?',
        answer: "Eine effektive Datensammlung und Log-Management-Strategie bildet das Fundament jeder DORA-konformen SIEM-Implementierung. Die Herausforderung liegt darin, umfassende Visibility über alle kritischen Systeme zu gewährleisten, während gleichzeitig Datenqualität, Performance und Compliance-Anforderungen erfüllt werden.\n\n📡 Comprehensive Data Source Coverage:\n• Vollständige Abdeckung aller kritischen IKT-Systeme einschließlich Core Banking Systeme, Trading Platforms, Risk Management Systeme und Customer-facing Applications\n• Integration von Infrastruktur-Logs aus Servern, Netzwerk-Equipment, Datenbanken, Middleware und Cloud-Services\n• Security-spezifische Datenquellen wie Firewalls, IDS/IPS, Endpoint Detection and Response Systeme und Identity Management Plattformen\n• Business Application Logs mit Fokus auf kritische Geschäftsprozesse und Transaktions-Daten\n• External Threat Intelligence Feeds und Vulnerability Scanners für proaktive Threat Detection\n\n🔄 Intelligent Log Processing und Normalization:\n• Automated Log Parsing und Normalization für konsistente Datenstrukturen und einheitliche Analyse\n• Content-based Routing und Filtering für optimierte Datenverarbeitung und Speicher-Effizienz\n• Data Enrichment mit Kontextinformationen wie Asset Information, User Details und Business Criticality\n• Deduplication und Aggregation für Reduzierung von Datenvolumen ohne Verlust kritischer Informationen\n• Quality Assurance Prozesse für Identifikation und Behandlung von Datenqualitätsproblemen\n\n💾 Strategische Datenretention und Archivierung:\n• DORA-konforme Retention Policies mit unterschiedlichen Aufbewahrungszeiten basierend auf Datentyp und regulatorischen Anforderungen\n• Tiered Storage Architektur mit automatischem Data Lifecycle Management für Kostenoptimierung\n• Compressed und Encrypted Archivierung für langfristige Speicherung ohne Compliance-Risiken\n• Rapid Retrieval Capabilities für forensische Analysen und regulatorische Anfragen\n• Backup und Disaster Recovery Strategien für kritische Log-Daten und SIEM-Konfigurationen\n\n⚡ Performance Optimization und Skalierung:\n• Load Balancing und Distributed Processing für Handling großer Datenvolumen ohne Performance-Degradation\n• Intelligent Sampling und Filtering Strategien für Fokussierung auf sicherheitsrelevante Events\n• Caching und Indexing Optimierung für schnelle Query Performance und Interactive Analysis\n• Horizontal Scaling Capabilities für Anpassung an wachsende Datenanforderungen\n• Resource Monitoring und Capacity Planning für proaktive Infrastruktur-Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie werden Real-time Monitoring und Alerting-Mechanismen in DORA-konformen SIEM-Systemen implementiert?',
        answer: "Real-time Monitoring und intelligente Alerting-Mechanismen sind kritische Komponenten einer DORA-konformen SIEM-Implementierung. Diese Systeme müssen nicht nur technische Anomalien erkennen, sondern auch den Business Context verstehen und angemessene Response-Aktivitäten auslösen, um die digitale operationelle Resilienz zu gewährleisten.\n\n⚡ Real-time Event Processing und Detection:\n• Stream Processing Architecture für kontinuierliche Analyse eingehender Security Events ohne Latenz\n• Complex Event Processing für Erkennung sophistizierter Attack Patterns und Multi-stage Threats\n• Behavioral Analytics für Identifikation von Anomalien in User Behavior und System Activities\n• Machine Learning-basierte Detection für Zero-day Threats und Advanced Persistent Threats\n• Correlation Rules Engine für Verknüpfung scheinbar unabhängiger Events zu kohärenten Threat Scenarios\n\n🎯 Intelligent Alerting und Priorisierung:\n• Risk-based Alert Scoring mit Berücksichtigung von Asset Criticality, Threat Severity und Business Impact\n• Dynamic Thresholding basierend auf Historical Baselines und Contextual Factors\n• Alert Aggregation und Deduplication für Reduzierung von Alert Fatigue und Fokussierung auf kritische Threats\n• Escalation Workflows mit automatischer Benachrichtigung relevanter Stakeholder basierend auf Alert Severity\n• False Positive Reduction durch kontinuierliches Tuning und Feedback-Integration\n\n📊 Contextual Enrichment und Intelligence:\n• Automatic Asset Discovery und Classification für präzise Impact Assessment\n• Threat Intelligence Integration für Contextualization von Alerts mit aktuellen Threat Landscapes\n• User und Entity Behavior Analytics für Baseline-Establishment und Anomalie-Detection\n• Geolocation und Network Context Analysis für Enhanced Threat Attribution\n• Business Process Mapping für Understanding der Auswirkungen von Security Events auf kritische Geschäftsfunktionen\n\n🔔 Multi-channel Notification und Communication:\n• Flexible Notification Channels einschließlich Email, SMS, Mobile Push, SIEM Console und Integration mit Collaboration Tools\n• Role-based Notification Routing für Delivery relevanter Alerts an appropriate Personnel\n• Escalation Timers und Acknowledgment Tracking für Ensuring timely Response to critical Alerts\n• Integration mit Incident Management Systemen für Seamless Workflow Transition\n• Executive Dashboards für High-level Visibility in Security Posture und Alert Trends\n\n🤖 Automated Response und Orchestration:\n• SOAR Integration für Automated Response Actions wie Account Lockouts, Network Isolation und Threat Containment\n• Playbook-driven Response für Consistent und Repeatable Incident Handling\n• API Integration mit Security Tools für Automated Threat Mitigation und Evidence Collection\n• Workflow Automation für Routine Tasks und Initial Response Activities\n• Human-in-the-loop Controls für Critical Decisions und Complex Response Scenarios"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Integrations-Strategien sind erforderlich für die Anbindung von SIEM an andere DORA-relevante Systeme?',
        answer: "Die Integration von SIEM-Systemen mit anderen DORA-relevanten Systemen ist entscheidend für die Schaffung eines kohärenten Ökosystems der digitalen operationellen Resilienz. Diese Integrationen müssen technische Interoperabilität mit strategischen Business Objectives verbinden und dabei Sicherheit, Performance und Compliance gewährleisten.\n\n🔗 Core System Integrations:\n• GRC-Plattformen für bidirektionale Integration von Security Events mit Risk Assessments und Compliance Monitoring\n• Incident Management Systeme für automatisierte Ticket-Erstellung und Workflow-Integration bei Security Events\n• Business Continuity und Disaster Recovery Systeme für Impact Assessment und Recovery Priorisierung\n• Identity und Access Management für User Context und Privileged Account Monitoring\n• Vulnerability Management Systeme für Correlation von Security Events mit Known Vulnerabilities\n\n📊 Risk Management Integration:\n• Operational Risk Systeme für Integration von Cyber Risk Metrics in übergeordnete Risk Frameworks\n• Risk Dashboards für Real-time Visibility in Security Posture und Risk Exposure\n• Regulatory Reporting Systeme für automatisierte Compliance Dokumentation und Incident Reporting\n• Business Intelligence Plattformen für Strategic Analysis und Trend Identification\n• Key Risk Indicator Systeme für Proactive Risk Monitoring und Early Warning\n\n🛡️ Security Ecosystem Integration:\n• Endpoint Detection und Response Systeme für Enhanced Threat Visibility und Coordinated Response\n• Network Security Tools für Comprehensive Traffic Analysis und Threat Detection\n• Cloud Security Posture Management für Multi-cloud Environment Monitoring\n• Threat Intelligence Platforms für Contextual Threat Information und IOC Sharing\n• Security Orchestration Tools für Automated Response und Workflow Coordination\n\n💼 Business Application Integration:\n• Core Banking Systeme für Transaction Monitoring und Fraud Detection\n• Trading Platforms für Market Abuse Detection und Operational Risk Monitoring\n• Customer Relationship Management für Customer Impact Assessment und Communication\n• Enterprise Resource Planning für Business Process Monitoring und Operational Intelligence\n• Communication und Collaboration Tools für Incident Communication und Stakeholder Notification\n\n🔄 API Management und Data Exchange:\n• RESTful API Design für Standardized Integration Patterns und Scalable Connectivity\n• Message Queue Integration für Asynchronous Data Exchange und High-volume Processing\n• Data Lake Integration für Long-term Analytics und Historical Trend Analysis\n• Real-time Streaming Integration für Low-latency Event Processing und Immediate Response\n• Secure Data Exchange Protocols für Protection of Sensitive Information during Integration"
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
