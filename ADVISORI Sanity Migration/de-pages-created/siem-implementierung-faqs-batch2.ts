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
    console.log('Updating SIEM Implementierung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-implementierung' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-implementierung" not found')
    }
    
    // Create new FAQs for SIEM Implementation technical deployment and configuration
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie gestaltet man eine optimale SIEM Infrastruktur-Architektur und welche Faktoren sind bei der technischen Dimensionierung entscheidend?',
        answer: "Die Infrastruktur-Architektur bildet das technische Fundament für erfolgreiche SIEM Implementierungen und entscheidet maßgeblich über Performance, Skalierbarkeit und Verfügbarkeit. Eine durchdachte Architektur berücksichtigt aktuelle Anforderungen und zukünftige Wachstumsszenarien gleichermaßen.\n\n🏗️ Architektur-Design und Komponenten-Planung:\n• Multi-Tier Architecture mit separaten Ebenen für Data Ingestion, Processing, Storage und Presentation\n• Microservices-basierte Architektur für Flexibilität und unabhängige Skalierung einzelner Komponenten\n• Load Balancer und Clustering-Strategien für optimale Performance-Verteilung und Ausfallsicherheit\n• Separation of Concerns zwischen Hot Data, Warm Data und Cold Storage für kostenoptimierte Datenhaltung\n• API Gateway und Service Mesh für sichere und performante Inter-Service Communication\n\n📊 Capacity Planning und Sizing-Strategien:\n• Datenvolumen-Prognosen basierend auf aktuellen Log-Quellen und geplanten Erweiterungen\n• Peak Load Analysis und Burst Capacity Planning für unvorhersehbare Datenspitzen\n• Storage Growth Modeling mit verschiedenen Retention-Szenarien und Compliance-Anforderungen\n• Compute Resource Planning für CPU-intensive Analytics und Real-time Processing\n• Network Bandwidth Requirements für verschiedene Datenquellen und geografische Standorte\n\n🔄 High Availability und Disaster Recovery:\n• Active-Active oder Active-Passive Clustering für kontinuierliche Verfügbarkeit\n• Geographic Redundancy und Multi-Site Deployments für Disaster Recovery\n• Automated Failover und Recovery-Mechanismen für minimale Downtime\n• Data Replication Strategies für konsistente Datenverfügbarkeit\n• Backup und Restore-Prozeduren für verschiedene Recovery-Szenarien\n\n⚡ Performance-Optimierung und Skalierung:\n• Horizontal und Vertical Scaling-Strategien für verschiedene Workload-Typen\n• Caching-Strategien und In-Memory Computing für beschleunigte Query-Performance\n• Index-Optimierung und Data Partitioning für effiziente Datenabfragen\n• Query Optimization und Resource Allocation für verschiedene Use Cases\n• Real-time Monitoring und Auto-Scaling für dynamische Ressourcenanpassung\n\n🛡️ Security-by-Design und Compliance:\n• Network Segmentation und Micro-Segmentation für Defense-in-Depth\n• Encryption at Rest und in Transit für umfassenden Datenschutz\n• Identity und Access Management Integration für granulare Zugriffskontrolle\n• Audit Logging und Compliance Monitoring der SIEM-Infrastruktur selbst\n• Vulnerability Management und Security Hardening aller Komponenten\n\n☁️ Cloud und Hybrid-Deployment Considerations:\n• Cloud-native Services Integration für Skalierbarkeit und Kostenoptimierung\n• Hybrid Cloud Strategies für Compliance und Data Sovereignty\n• Container Orchestration und Kubernetes für moderne Deployment-Flexibilität\n• Infrastructure as Code für reproduzierbare und versionierte Deployments\n• Cost Optimization Strategies für Cloud-basierte SIEM-Deployments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Best Practices gelten für die SIEM Konfiguration und wie entwickelt man effektive Detection Rules und Correlation Logic?',
        answer: "Die SIEM Konfiguration ist der kritische Schritt, der aus einer technischen Plattform ein effektives Cybersecurity-Tool macht. Expertenkonfiguration und durchdachte Rule-Development sind entscheidend für optimale Threat Detection bei minimalen False Positives.\n\n🎯 Use Case-basierte Konfigurationsstrategie:\n• Priorisierung kritischer Use Cases basierend auf Bedrohungslandschaft und Risikoprofil\n• MITRE ATT&CK Framework Integration für comprehensive Threat Coverage\n• Kill Chain-basierte Detection Logic für verschiedene Attack-Phasen\n• Business-kritische Asset-fokussierte Monitoring-Strategien\n• Compliance-driven Use Cases für regulatorische Anforderungen\n\n🔍 Advanced Detection Rule Development:\n• Behavioral Analytics und Machine Learning-basierte Anomaly Detection\n• Signature-based Detection für bekannte Threat Patterns und IOCs\n• Statistical Analysis und Threshold-basierte Alerting für quantitative Anomalien\n• Context-aware Rules mit Enrichment aus externen Datenquellen\n• Multi-stage Correlation für komplexe Attack-Szenarien und Campaign-Detection\n\n⚙️ Correlation Engine Optimization:\n• Event Correlation Windows und Time-based Aggregation für temporale Analyse\n• Cross-source Correlation für umfassende Attack-Visibility\n• Risk Scoring und Priority-basierte Alert-Klassifikation\n• Deduplication und Event-Clustering für Alert-Fatigue Reduction\n• Real-time und Batch-Processing Balance für verschiedene Detection-Anforderungen\n\n📊 Data Normalization und Parsing:\n• Universal Event Format Definition für konsistente Datenstrukturen\n• Custom Parser Development für proprietäre Log-Formate\n• Field Mapping und Taxonomy-Standardisierung für einheitliche Analytics\n• Data Quality Validation und Cleansing für reliable Detection\n• Timezone Normalization und Timestamp-Standardisierung für accurate Correlation\n\n🎛️ Alert Tuning und False Positive Management:\n• Baseline-Establishment und Normal Behavior Profiling\n• Iterative Tuning-Prozesse basierend auf Analyst-Feedback\n• Whitelist und Exception-Management für bekannte False Positives\n• Dynamic Threshold Adjustment basierend auf historischen Daten\n• A/B Testing für Rule-Effectiveness und Performance-Impact\n\n📈 Performance und Scalability Considerations:\n• Query Optimization und Index-Strategien für schnelle Rule-Execution\n• Resource-intensive Rule Scheduling und Load-Balancing\n• Memory und CPU-Usage Monitoring für Rule-Performance\n• Parallel Processing und Distributed Computing für Large-Scale Analytics\n• Rule Lifecycle Management und Deprecation-Strategien für System-Health"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie implementiert man eine umfassende Datenquellen-Integration und gewährleistet optimale Data Pipeline Performance?',
        answer: "Die Datenquellen-Integration ist das Herzstück jeder SIEM Implementierung und bestimmt maßgeblich die Qualität und Vollständigkeit der Security Analytics. Eine strategische Integration-Architektur gewährleistet umfassende Visibility bei optimaler Performance.\n\n🔗 Comprehensive Data Source Strategy:\n• Asset Inventory und Data Source Mapping für vollständige Visibility-Abdeckung\n• Critical Data Source Prioritization basierend auf Security-Value und Risk-Impact\n• Legacy System Integration mit modernen API-Bridges und Protocol-Adaptern\n• Cloud Service Integration für hybride und Multi-Cloud-Umgebungen\n• Third-party Security Tool Integration für Enhanced Detection Capabilities\n\n📡 Data Collection und Ingestion Architecture:\n• Agent-based und Agentless Collection-Strategien für verschiedene Umgebungen\n• Real-time Streaming und Batch Processing für unterschiedliche Datentypen\n• Message Queue und Buffer-Systeme für Resilient Data Ingestion\n• Protocol Diversity Support von Syslog über REST APIs bis hin zu proprietären Formaten\n• Data Compression und Optimization für Bandwidth-effiziente Übertragung\n\n⚡ Data Pipeline Optimization:\n• Stream Processing und Event-driven Architecture für Low-Latency Analytics\n• Data Partitioning und Sharding für Parallel Processing\n• Caching-Strategien und In-Memory Processing für Performance-kritische Workflows\n• Load Balancing und Auto-Scaling für dynamische Workload-Anpassung\n• Circuit Breaker Patterns für Resilient Data Processing\n\n🔄 Data Transformation und Enrichment:\n• ETL Pipeline Design für strukturierte Datenaufbereitung\n• Real-time Enrichment mit Threat Intelligence und Context-Daten\n• Data Validation und Quality Assurance für reliable Analytics\n• Schema Evolution und Backward Compatibility für sich ändernde Datenstrukte\n• Custom Transformation Logic für spezifische Business-Anforderungen\n\n📊 Data Quality und Monitoring:\n• Data Completeness Monitoring und Gap-Detection\n• Latency Tracking und SLA-Monitoring für verschiedene Datenquellen\n• Data Freshness Validation und Staleness-Alerting\n• Volume Anomaly Detection für ungewöhnliche Datenmengen\n• Error Rate Monitoring und Automatic Retry-Mechanismen\n\n🛡️ Security und Compliance für Data Pipelines:\n• End-to-End Encryption für sensitive Datenübertragung\n• Data Masking und Anonymization für Privacy-Compliance\n• Access Control und Audit Logging für Data Pipeline Operations\n• Data Lineage Tracking für Compliance und Forensic Analysis\n• Retention Policy Enforcement und Automated Data Lifecycle Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Testing-Strategien und Validierungsmethoden sind für SIEM Implementierungen kritisch und wie gewährleistet man Operational Readiness?',
        answer: "Umfassendes Testing und systematische Validierung sind entscheidend für erfolgreiche SIEM Go-Lives und nachhaltige Operations. Eine strukturierte Testing-Strategie minimiert Risiken und gewährleistet, dass das SIEM System die erwarteten Sicherheitsziele erfüllt.\n\n🧪 Multi-Level Testing Framework:\n• Unit Testing für individuelle Rules und Detection Logic\n• Integration Testing für End-to-End Data Flow und System-Interoperabilität\n• Performance Testing unter realistischen Load-Bedingungen und Stress-Szenarien\n• Security Testing der SIEM-Implementation für Vulnerability Assessment\n• User Acceptance Testing mit realen Szenarien und Stakeholder-Involvement\n\n📊 Data Quality und Detection Validation:\n• Historical Data Replay für Rule-Effectiveness Testing\n• Synthetic Attack Simulation für Detection Coverage Validation\n• False Positive Rate Analysis und Baseline-Establishment\n• Alert Response Time Measurement und SLA-Validation\n• Detection Gap Analysis für Threat Coverage Assessment\n\n⚡ Performance und Scalability Testing:\n• Load Testing mit verschiedenen Datenvolumen und Ingestion-Raten\n• Stress Testing für System-Limits und Breaking-Point Analysis\n• Endurance Testing für Long-term Stability und Memory-Leak Detection\n• Scalability Testing für Horizontal und Vertical Scaling-Scenarios\n• Disaster Recovery Testing für Business Continuity Validation\n\n🔄 Operational Readiness Assessment:\n• Process Validation und Workflow-Testing für SOC Operations\n• Runbook Testing und Incident Response Procedure Validation\n• Team Readiness Assessment und Skill-Gap Analysis\n• Tool Integration Testing für SOAR und Ticketing-System Connectivity\n• Escalation Path Testing und Communication-Flow Validation\n\n📋 Go-Live Preparation und Cutover:\n• Phased Rollout Strategy mit Pilot Groups und Gradual Expansion\n• Parallel Running und Shadow Mode für Risk-free Transition\n• Rollback Planning und Emergency Procedures für Contingency Scenarios\n• Monitoring und Alerting Setup für Post-Go-Live Health Checks\n• Success Criteria Definition und Go/No-Go Decision Framework\n\n🎯 Post-Implementation Validation:\n• Business Value Measurement und ROI-Tracking\n• User Satisfaction Surveys und Feedback Collection\n• Performance Baseline Establishment für Continuous Improvement\n• Lessons Learned Capture und Best Practice Documentation\n• Continuous Monitoring und Health Check Automation für Sustained Operations"
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
