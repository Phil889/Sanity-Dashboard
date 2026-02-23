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
    console.log('Updating IAM System Definition page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-system-definition' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-system-definition" not found')
    }
    
    // Create new FAQs for IAM System Definition implementation and deployment
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche kritischen Sicherheitsanforderungen müssen in einer IAM System Definition spezifiziert werden und wie implementiert man Defense-in-Depth-Strategien?',
        answer: "Die Spezifikation von Sicherheitsanforderungen in einer IAM System Definition erfordert eine systematische Analyse aller Bedrohungsszenarien und die Implementation mehrschichtiger Sicherheitskontrollen. Diese Defense-in-Depth-Strategie muss sowohl präventive als auch reaktive Sicherheitsmaßnahmen umfassen und dabei moderne Bedrohungslandschaften sowie regulatorische Anforderungen berücksichtigen.\n\n🛡️ Multi-Layer Security Architecture und Threat Modeling:\n• Perimeter Security mit Next-Generation Firewalls und Intrusion Detection Systems\n• Network Segmentation mit Micro-Segmentation und Zero-Trust-Network-Access\n• Application Security mit Web Application Firewalls und Runtime Application Self-Protection\n• Data Security mit Field-Level-Encryption und Database Activity Monitoring\n• Endpoint Security mit Endpoint Detection and Response und Device Trust Verification\n\n🔐 Identity-Centric Security Controls und Authentication Hardening:\n• Multi-Factor Authentication mit Hardware-Token und Biometric-Verification\n• Adaptive Authentication mit Risk-based Decision Making und Behavioral Analytics\n• Privileged Access Management mit Just-in-Time-Access und Session Recording\n• Certificate-based Authentication mit Public-Key-Infrastructure und Hardware-Security-Modules\n• Passwordless Authentication mit FIDO Alliance Standards und WebAuthn Integration\n\n🔍 Continuous Monitoring und Threat Detection:\n• Security Information and Event Management mit Real-time Correlation und Alert-Generation\n• User and Entity Behavior Analytics mit Machine Learning für Anomaly Detection\n• Threat Intelligence Integration mit Indicators of Compromise und Attack Pattern Recognition\n• Security Orchestration mit Automated Incident Response und Playbook Execution\n• Vulnerability Management mit Continuous Scanning und Risk-based Prioritization\n\n📊 Data Protection und Privacy Engineering:\n• Data Classification mit Automated Discovery und Sensitivity Labeling\n• Data Loss Prevention mit Content Inspection und Policy Enforcement\n• Encryption Key Management mit Hardware Security Modules und Key Rotation\n• Privacy by Design mit Data Minimization und Purpose Limitation\n• Data Residency Controls mit Geographic Restrictions und Compliance Mapping\n\n🔄 Security Governance und Compliance Automation:\n• Policy as Code mit Version Control und Automated Deployment\n• Compliance Monitoring mit Continuous Assessment und Gap Analysis\n• Risk Management mit Quantitative Risk Assessment und Mitigation Planning\n• Security Metrics mit Key Performance Indicators und Executive Dashboards\n• Incident Response mit Forensic Capabilities und Lessons Learned Integration\n\n⚡ Resilience und Business Continuity:\n• Disaster Recovery mit Recovery Time Objectives und Recovery Point Objectives\n• High Availability mit Active-Active Configuration und Automatic Failover\n• Backup and Recovery mit Immutable Backups und Point-in-Time Recovery\n• Chaos Engineering mit Failure Injection und Resilience Testing\n• Business Continuity Planning mit Crisis Management und Communication Protocols"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie definiert man Datenmodelle und Schema-Design für IAM-Systeme, die sowohl strukturierte als auch unstrukturierte Identitätsdaten effizient verwalten können?',
        answer: "Die Definition von Datenmodellen und Schema-Design für IAM-Systeme erfordert eine ausgewogene Architektur, die sowohl strukturierte Identitätsdaten als auch flexible Attribute und Metadaten effizient verwalten kann. Diese Hybrid-Ansätze müssen Skalierbarkeit, Performance und Datenintegrität gewährleisten, während sie gleichzeitig Flexibilität für zukünftige Anforderungen bieten.\n\n📊 Hybrid Data Architecture und Schema-Design-Prinzipien:\n• Relational Core für strukturierte Identitätsdaten mit ACID-Compliance und Referential Integrity\n• Document Store für flexible Attribute mit JSON Schema Validation und Dynamic Schema Evolution\n• Graph Database für Relationship Modeling mit Complex Queries und Path Analysis\n• Time-Series Database für Audit Trails mit High-Volume Ingestion und Retention Policies\n• Search Engine für Full-Text Search mit Faceted Navigation und Real-time Indexing\n\n🏗️ Entity Relationship Design und Normalization Strategy:\n• Identity Entity mit Core Attributes und Unique Identifiers\n• Role and Permission Modeling mit Hierarchical Structures und Inheritance Patterns\n• Group and Organization Mapping mit Nested Sets und Adjacency Lists\n• Attribute Value Pairs für Dynamic Properties mit Type Safety und Validation Rules\n• Temporal Data Modeling für Historical Tracking mit Effective Dating und Versioning\n\n🔗 Data Integration Patterns und Synchronization:\n• Master Data Management mit Golden Record Creation und Conflict Resolution\n• Change Data Capture für Real-time Synchronization mit Event Sourcing und CQRS\n• Data Federation mit Virtual Views und Query Optimization\n• ETL Pipelines für Batch Processing mit Data Quality Checks und Error Handling\n• API-driven Integration mit RESTful Services und GraphQL Endpoints\n\n⚡ Performance Optimization und Scalability Design:\n• Database Sharding mit Consistent Hashing und Automatic Rebalancing\n• Read Replicas für Query Distribution mit Eventual Consistency und Lag Monitoring\n• Caching Strategies mit Multi-Level Caching und Cache Invalidation\n• Index Optimization mit Composite Indexes und Query Plan Analysis\n• Connection Pooling mit Load Balancing und Circuit Breaker Patterns\n\n🛡️ Data Security und Privacy Controls:\n• Field-Level Encryption mit Key Management und Selective Decryption\n• Data Masking für Non-Production Environments mit Format-Preserving Encryption\n• Access Control Lists mit Row-Level Security und Column-Level Permissions\n• Audit Logging mit Immutable Records und Tamper Detection\n• Data Retention Policies mit Automated Purging und Legal Hold Management\n\n🌐 Multi-Tenant Architecture und Data Isolation:\n• Tenant Isolation Strategies mit Schema Separation und Row-Level Security\n• Resource Allocation with Quotas und Fair Sharing Algorithms\n• Cross-Tenant Analytics mit Data Aggregation und Privacy Preservation\n• Tenant Onboarding mit Automated Provisioning und Configuration Management\n• Compliance Boundaries mit Jurisdiction-specific Data Handling"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt API-Design und Microservices-Architektur in modernen IAM System Definitionen und wie gewährleistet man Service-Interoperabilität?',
        answer: "API-Design und Microservices-Architektur sind fundamentale Bausteine moderner IAM System Definitionen und ermöglichen es, komplexe Identitätsverwaltungs-Funktionalitäten in modulare, skalierbare und wartbare Services zu zerlegen. Diese Architektur-Patterns fördern Agilität, Technologie-Diversität und ermöglichen es, verschiedene IAM-Komponenten unabhängig zu entwickeln, zu deployen und zu skalieren.\n\n🏗️ Microservices Decomposition und Domain-driven Design:\n• Identity Service für Core Identity Management mit User Lifecycle und Profile Management\n• Authentication Service für Multi-Factor Authentication mit Protocol Support und Session Management\n• Authorization Service für Policy Evaluation mit Fine-grained Permissions und Context-aware Decisions\n• Provisioning Service für Account Management mit Workflow Orchestration und Approval Processes\n• Audit Service für Compliance Logging mit Event Correlation und Reporting Capabilities\n\n🔗 API-first Design und Contract-driven Development:\n• OpenAPI Specification für Standardized Interface Definition mit Code Generation und Documentation\n• GraphQL Schema für Flexible Data Queries mit Type Safety und Real-time Subscriptions\n• Event-driven APIs für Asynchronous Communication mit Message Schemas und Event Sourcing\n• Versioning Strategy für Backward Compatibility mit Semantic Versioning und Deprecation Policies\n• API Gateway für Centralized Management mit Rate Limiting und Protocol Translation\n\n⚙️ Service Communication Patterns und Integration:\n• Synchronous Communication mit RESTful APIs und Circuit Breaker Patterns\n• Asynchronous Messaging mit Event Buses und Message Queues\n• Service Mesh für Traffic Management mit Load Balancing und Fault Injection\n• Saga Pattern für Distributed Transactions mit Compensation Logic und State Management\n• CQRS Implementation für Read-Write Separation mit Event Sourcing und Projection Updates\n\n🛡️ Security und Cross-cutting Concerns:\n• Service-to-Service Authentication mit mTLS und JWT Token Validation\n• API Security mit OAuth Scopes und Rate Limiting\n• Distributed Tracing für Request Correlation mit Span Context Propagation\n• Centralized Logging mit Structured Logging und Log Aggregation\n• Configuration Management mit External Configuration und Secret Management\n\n📊 Observability und Monitoring:\n• Health Checks mit Liveness und Readiness Probes\n• Metrics Collection mit Prometheus und Custom Business Metrics\n• Distributed Tracing mit Jaeger und Performance Analysis\n• Error Tracking mit Centralized Error Reporting und Alert Management\n• Service Dependency Mapping mit Topology Visualization und Impact Analysis\n\n🚀 Deployment und DevOps Integration:\n• Container Orchestration mit Kubernetes und Helm Charts\n• CI/CD Pipelines mit Automated Testing und Blue-Green Deployment\n• Infrastructure as Code mit Terraform und Environment Consistency\n• Service Discovery mit DNS-based Discovery und Health-aware Load Balancing\n• Auto-scaling mit Horizontal Pod Autoscaling und Predictive Scaling"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickelt man eine umfassende Testing-Strategie für IAM-Systeme, die sowohl funktionale als auch nicht-funktionale Anforderungen validiert?',
        answer: "Eine umfassende Testing-Strategie für IAM-Systeme muss alle Aspekte der Identitätsverwaltung abdecken, von grundlegenden Authentifizierungs-Funktionen bis hin zu komplexen Sicherheits- und Performance-Szenarien. Diese Strategie erfordert eine systematische Herangehensweise mit automatisierten Tests, kontinuierlicher Integration und speziellen Sicherheitstests, um die Robustheit und Zuverlässigkeit des Systems zu gewährleisten.\n\n🧪 Test Pyramid und Automation Strategy:\n• Unit Tests für Individual Components mit Mock Dependencies und Isolated Testing\n• Integration Tests für Service Interactions mit Contract Testing und API Validation\n• End-to-End Tests für Complete User Journeys mit Browser Automation und Scenario Testing\n• Component Tests für Microservices mit In-Memory Databases und Test Containers\n• Contract Tests für API Compatibility mit Consumer-driven Contracts und Schema Validation\n\n🔐 Security Testing und Penetration Testing:\n• Authentication Testing mit Credential Stuffing und Brute Force Attacks\n• Authorization Testing mit Privilege Escalation und Access Control Bypass\n• Session Management Testing mit Session Fixation und Hijacking Scenarios\n• Input Validation Testing mit SQL Injection und Cross-Site Scripting\n• Cryptographic Testing mit Key Management und Encryption Strength Validation\n\n⚡ Performance und Load Testing:\n• Stress Testing mit Peak Load Simulation und Resource Exhaustion\n• Volume Testing mit Large Dataset Processing und Bulk Operations\n• Endurance Testing mit Long-running Sessions und Memory Leak Detection\n• Spike Testing mit Sudden Load Increases und Auto-scaling Validation\n• Capacity Testing mit Scalability Limits und Bottleneck Identification\n\n🌐 Multi-Environment Testing und Data Management:\n• Test Data Management mit Synthetic Data Generation und Data Masking\n• Environment Provisioning mit Infrastructure as Code und Automated Setup\n• Configuration Testing mit Environment-specific Settings und Feature Flags\n• Disaster Recovery Testing mit Failover Scenarios und Recovery Validation\n• Cross-Browser Testing mit Multiple Browsers und Device Compatibility\n\n📊 Compliance und Regulatory Testing:\n• GDPR Compliance Testing mit Data Subject Rights und Consent Management\n• Audit Trail Testing mit Log Integrity und Tamper Detection\n• Retention Policy Testing mit Automated Purging und Legal Hold Scenarios\n• Access Review Testing mit Periodic Certification und Approval Workflows\n• Segregation of Duties Testing mit Conflict Detection und Prevention\n\n🔄 Continuous Testing und Quality Gates:\n• Pipeline Integration mit Automated Test Execution und Quality Gates\n• Test Result Analysis mit Trend Monitoring und Failure Classification\n• Risk-based Testing mit Priority-based Test Selection und Coverage Analysis\n• Shift-Left Testing mit Early Defect Detection und Developer Feedback\n• Production Testing mit Canary Deployments und Feature Toggle Validation"
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
