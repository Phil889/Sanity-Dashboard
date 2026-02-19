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
    console.log('Updating IAM Architektur page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-architektur' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-architektur" not found')
    }
    
    // Create new FAQs for IAM Architecture fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche fundamentalen Architekturprinzipien bilden das Fundament einer enterprise-grade IAM-Architektur und wie gewährleisten sie langfristige Skalierbarkeit und Wartbarkeit?',
        answer: "Eine enterprise-grade IAM-Architektur basiert auf bewährten Architekturprinzipien, die Skalierbarkeit, Wartbarkeit und Zukunftssicherheit gewährleisten. Diese Prinzipien bilden das strategische Fundament für robuste Identitätssysteme, die komplexe Unternehmensanforderungen erfüllen und gleichzeitig Flexibilität für zukünftige Entwicklungen bewahren.\n\n🏗️ Layered Architecture und Separation of Concerns:\n• Presentation Layer für Benutzerinterfaces und API-Gateways mit konsistenter User Experience\n• Business Logic Layer für Identitätsverarbeitung, Autorisierungsregeln und Workflow-Orchestrierung\n• Data Access Layer für sichere Datenpersistierung und Repository-Pattern-Implementation\n• Infrastructure Layer für Systemintegration, Monitoring und operative Unterstützung\n• Cross-cutting Concerns wie Logging, Security und Performance-Monitoring durchgängig integriert\n\n🔧 Modularity und Loose Coupling:\n• Domain-driven Design für fachliche Abgrenzung und klare Verantwortlichkeiten\n• Service-oriented Architecture mit definierten Schnittstellen und Vertragsmodellen\n• Dependency Injection für testbare und austauschbare Komponenten\n• Event-driven Communication für asynchrone Verarbeitung und Entkopplung\n• Plugin-Architecture für erweiterbare Funktionalitäten ohne Kernmodifikationen\n\n⚡ Scalability und Performance Design:\n• Horizontal Scaling durch stateless Services und Load Distribution\n• Caching Strategies auf verschiedenen Architekturebenen für optimale Performance\n• Database Sharding und Read-Replica-Strategien für Datenbank-Skalierung\n• Asynchronous Processing für zeitaufwändige Operationen und Batch-Verarbeitung\n• Resource Pooling und Connection Management für effiziente Ressourcennutzung\n\n🛡️ Security-by-Design und Defense-in-Depth:\n• Zero-Trust-Prinzipien mit kontinuierlicher Verifikation auf allen Architekturebenen\n• Encryption-at-Rest und Encryption-in-Transit für umfassenden Datenschutz\n• Secure Communication Channels mit Mutual TLS und Certificate Management\n• Input Validation und Output Encoding für Schutz vor Injection-Angriffen\n• Audit Logging und Forensic Capabilities für Compliance und Incident Response\n\n🔄 Resilience und Fault Tolerance:\n• Circuit Breaker Pattern für graceful Degradation bei Systemausfällen\n• Retry Mechanisms mit Exponential Backoff für transiente Fehlerbehandlung\n• Bulkhead Pattern für Isolation kritischer Systemkomponenten\n• Health Checks und Self-Healing Capabilities für proaktive Systemüberwachung\n• Disaster Recovery und Business Continuity Planning für Notfallszenarien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine zukunftssichere IAM-Architektur, die sowohl aktuelle Geschäftsanforderungen erfüllt als auch Flexibilität für emerging Technologies und sich ändernde Compliance-Anforderungen bietet?',
        answer: "Eine zukunftssichere IAM-Architektur erfordert strategische Voraussicht und adaptive Design-Prinzipien, die sowohl aktuelle Anforderungen erfüllen als auch Flexibilität für zukünftige Entwicklungen gewährleisten. Der Schlüssel liegt in der Balance zwischen bewährten Architekturmustern und innovativen Technologieansätzen, die Raum für Evolution schaffen.\n\n🎯 Strategic Architecture Planning und Future-State-Vision:\n• Technology Radar und Innovation Scouting für frühzeitige Identifikation relevanter Trends\n• Architecture Roadmap mit definierten Evolutionspfaden und Migrationsphasen\n• Capability-based Planning für funktionale Erweiterbarkeit ohne Architektur-Disruption\n• Vendor-agnostic Design für Flexibilität bei Technologie-Entscheidungen\n• Standards-based Integration für Interoperabilität und Ecosystem-Konnektivität\n\n🔧 Modular und Extensible Architecture Design:\n• Microservices Architecture mit Domain-driven Decomposition für granulare Skalierung\n• API-first Design mit versionierten Schnittstellen für Backward-Compatibility\n• Plugin Architecture für dynamische Funktionserweiterung ohne Core-Modifikationen\n• Event-driven Architecture für lose gekoppelte Systemintegration\n• Container-based Deployment für Portabilität und Infrastructure-as-Code\n\n☁️ Cloud-native und Multi-Cloud Readiness:\n• Cloud-agnostic Architecture Patterns für Vendor-Lock-in-Vermeidung\n• Serverless Integration für elastische Skalierung und Cost-Optimization\n• Edge Computing Readiness für IoT und Distributed Identity Scenarios\n• Hybrid Cloud Support für graduelle Migration und Legacy-Integration\n• Infrastructure Abstraction für Deployment-Flexibilität\n\n🤖 AI und Machine Learning Integration:\n• ML-Pipeline-Integration für Behavioral Analytics und Anomaly Detection\n• AI-powered Decision Engines für adaptive Autorisierung und Risk Assessment\n• Natural Language Processing für intelligente Policy-Definition\n• Predictive Analytics für Capacity Planning und Performance Optimization\n• AutoML Capabilities für kontinuierliche Modell-Verbesserung\n\n📊 Data Architecture und Analytics Readiness:\n• Data Lake Architecture für umfassende Identity Analytics\n• Real-time Streaming für Event-driven Security Responses\n• Graph Database Integration für komplexe Relationship-Modellierung\n• Data Mesh Principles für dezentrale Datenverantwortung\n• Privacy-preserving Analytics für GDPR-konforme Datennutzung\n\n🔐 Emerging Security Paradigms:\n• Quantum-resistant Cryptography Readiness für Post-Quantum-Sicherheit\n• Decentralized Identity Support für Self-Sovereign Identity Scenarios\n• Blockchain Integration für Audit-Trails und Tamper-proof Logging\n• Biometric Authentication Integration für passwordless Futures\n• Continuous Authentication für Dynamic Trust Assessment"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Designentscheidungen müssen bei der Konzeption einer IAM-Architektur getroffen werden und wie beeinflussen sie Performance, Sicherheit und Betriebskosten?',
        answer: "Kritische Designentscheidungen in der IAM-Architektur haben weitreichende Auswirkungen auf Performance, Sicherheit und Betriebskosten. Diese Entscheidungen müssen strategisch getroffen werden, da sie die langfristige Erfolg und Wirtschaftlichkeit des Systems maßgeblich bestimmen. Eine systematische Bewertung von Trade-offs ist essentiell für optimale Architekturentscheidungen.\n\n🏛️ Deployment Architecture und Infrastructure Decisions:\n• On-Premises vs. Cloud vs. Hybrid Deployment mit Auswirkungen auf Kontrolle, Skalierbarkeit und Kosten\n• Single-Tenant vs. Multi-Tenant Architecture für Isolation, Sicherheit und Resource-Sharing\n• Monolithic vs. Microservices vs. Modular Monolith für Komplexität, Skalierung und Wartung\n• Synchronous vs. Asynchronous Processing für Performance, Resilience und User Experience\n• Centralized vs. Distributed Architecture für Latency, Availability und Governance\n\n💾 Data Architecture und Persistence Strategies:\n• SQL vs. NoSQL vs. Graph Databases für Datenmodellierung, Performance und Skalierung\n• Data Replication Strategies für Availability, Consistency und Geographic Distribution\n• Caching Architecture für Performance-Optimierung und Resource-Utilization\n• Data Partitioning und Sharding für horizontale Skalierung und Load Distribution\n• Backup und Recovery Strategies für Business Continuity und RTO/RPO-Anforderungen\n\n🔐 Security Architecture und Trust Models:\n• Zero-Trust vs. Perimeter-based Security für Threat Protection und User Experience\n• Centralized vs. Federated Identity für Governance, Skalierung und Partner-Integration\n• Token-based vs. Session-based Authentication für Statelessness und Scalability\n• Encryption Key Management für Security, Performance und Compliance\n• Multi-Factor Authentication Strategies für Security, Usability und Cost Balance\n\n⚡ Performance Architecture und Optimization:\n• Caching Strategies auf verschiedenen Ebenen für Response Time und Resource Efficiency\n• Load Balancing Algorithms für Traffic Distribution und High Availability\n• Database Connection Pooling für Resource Management und Concurrency\n• Asynchronous Processing für Throughput und User Experience\n• Content Delivery Networks für Global Performance und Bandwidth Optimization\n\n🔄 Integration Architecture und Interoperability:\n• API Design Patterns für Flexibility, Versioning und Backward Compatibility\n• Message Queue vs. Event Streaming für Decoupling und Reliability\n• Protocol Selection für Interoperability, Security und Performance\n• Legacy System Integration für Migration Path und Coexistence\n• Third-party Service Integration für Build-vs-Buy Decisions\n\n💰 Cost Architecture und Resource Optimization:\n• Resource Sizing und Auto-scaling für Cost Efficiency und Performance\n• Licensing Models und Vendor Selection für Total Cost of Ownership\n• Operational Overhead für Maintenance, Monitoring und Support\n• Development und Deployment Complexity für Time-to-Market und Team Productivity\n• Compliance und Audit Costs für Regulatory Requirements und Risk Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie implementiert man eine event-driven IAM-Architektur erfolgreich und welche Vorteile bietet sie für Real-time Security Responses und System-Integration?',
        answer: "Eine event-driven IAM-Architektur revolutioniert die Art, wie Identitätssysteme auf Änderungen reagieren und mit anderen Systemen interagieren. Durch die Entkopplung von Ereignisproduktion und -verarbeitung entstehen hochflexible, skalierbare Systeme, die Real-time Security Responses ermöglichen und nahtlose Integration in komplexe Enterprise-Landschaften bieten.\n\n⚡ Event-driven Architecture Fundamentals:\n• Event Sourcing für vollständige Audit-Trails und State Reconstruction\n• Command Query Responsibility Segregation für optimierte Read/Write-Performance\n• Event Streaming Platforms für Real-time Data Processing und Analytics\n• Saga Pattern für Distributed Transaction Management über Service-Grenzen\n• Event Choreography vs. Orchestration für Service Coordination und Workflow Management\n\n🔄 Real-time Event Processing und Response:\n• Complex Event Processing für Pattern Recognition und Anomaly Detection\n• Stream Processing für kontinuierliche Datenanalyse und Threat Intelligence\n• Event-driven Alerting für sofortige Security Incident Notification\n• Adaptive Authentication basierend auf Real-time Risk Events\n• Dynamic Policy Enforcement durch Event-triggered Rule Updates\n\n🛡️ Security Event Integration und Threat Response:\n• Security Information und Event Management Integration für Correlation\n• Behavioral Analytics durch Event Pattern Analysis\n• Automated Incident Response durch Event-triggered Workflows\n• Threat Intelligence Feed Integration für Proactive Defense\n• Forensic Event Reconstruction für Post-Incident Analysis\n\n🌐 System Integration und Ecosystem Connectivity:\n• API Gateway Integration für Event-driven Service Mesh\n• Message Broker Selection für Reliability, Scalability und Performance\n• Event Schema Evolution für Backward Compatibility und Versioning\n• Cross-system Event Propagation für Enterprise-wide Synchronization\n• Legacy System Integration durch Event Adapters und Bridges\n\n📊 Event Analytics und Business Intelligence:\n• Real-time Dashboards für Operational Visibility und KPI Monitoring\n• Event-driven Reporting für Compliance und Audit Requirements\n• Predictive Analytics basierend auf Historical Event Patterns\n• User Behavior Analytics für Security und User Experience Insights\n• Performance Metrics und SLA Monitoring durch Event Tracking\n\n🔧 Implementation Best Practices und Patterns:\n• Event Store Design für Durability, Performance und Queryability\n• Dead Letter Queue Handling für Failed Event Processing\n• Event Replay Capabilities für System Recovery und Testing\n• Circuit Breaker Pattern für Event Processing Resilience\n• Event Versioning Strategies für Schema Evolution und Compatibility"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
