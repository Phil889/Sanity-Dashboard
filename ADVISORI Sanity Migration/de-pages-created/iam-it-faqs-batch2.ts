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
    console.log('Updating IAM IT page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-it' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-it" not found')
    }
    
    // Create new FAQs for IAM IT implementation and integration challenges
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche technischen Herausforderungen entstehen bei der Integration von IAM-Systemen in bestehende Legacy-Infrastrukturen und wie löst man diese systematisch?',
        answer: "Die Integration von modernen IAM-Systemen in gewachsene Legacy-Infrastrukturen stellt eine der komplexesten technischen Herausforderungen dar, da dabei unterschiedliche Technologie-Generationen, Protokolle und Architektur-Paradigmen harmonisiert werden müssen. Ein systematischer Ansatz erfordert sowohl technische Expertise als auch strategische Planung.\n\n🔧 Legacy System Assessment und Mapping:\n• Comprehensive Inventory aller bestehenden Identity Stores und Authentication-Systeme\n• Protocol Analysis für LDAP, Kerberos, NTLM und proprietäre Authentication-Mechanismen\n• Data Schema Mapping für User Attributes und Organizational Structures\n• Dependency Analysis für kritische Business Applications\n• Security Posture Assessment der bestehenden Infrastruktur\n\n🌉 Integration Architecture Patterns:\n• Federation Strategies für schrittweise Migration ohne Service-Unterbrechung\n• Identity Bridging mit Protocol Translation für heterogene Systeme\n• Hybrid Authentication Flows für parallelen Betrieb alter und neuer Systeme\n• Data Synchronization Patterns für konsistente Identity-Informationen\n• Gradual Migration Strategies mit Rollback-Capabilities\n\n📊 Data Migration und Transformation:\n• Identity Data Cleansing für Datenqualität und Konsistenz\n• Attribute Mapping zwischen verschiedenen Schema-Definitionen\n• Bulk Migration Tools für große User-Populationen\n• Delta Synchronization für kontinuierliche Datenabgleichung\n• Data Validation und Integrity Checks während der Migration\n\n🔐 Security und Compliance Considerations:\n• Privilege Escalation Prevention während Migration-Phasen\n• Audit Trail Continuity für Compliance-Anforderungen\n• Encryption Key Management für Legacy und moderne Systeme\n• Access Control Mapping für bestehende Berechtigungsstrukturen\n• Security Gap Analysis und Remediation Planning\n\n⚙️ Technical Integration Challenges:\n• API Gateway Implementation für Legacy System Integration\n• Protocol Adapters für SAML, OAuth, OpenID Connect zu Legacy-Protokollen\n• Custom Connectors für proprietäre Systeme und Datenbanken\n• Performance Optimization für zusätzliche Integration-Layer\n• Error Handling und Resilience für komplexe Integration-Szenarien\n\n🧪 Testing und Validation Strategies:\n• Integration Testing mit realistischen Legacy-Szenarien\n• Performance Testing unter Legacy-Constraints\n• Security Testing für neue Attack Vectors\n• User Acceptance Testing für veränderte Authentication-Flows\n• Rollback Testing für kritische Failure-Szenarien\n\n📋 Change Management und Operational Considerations:\n• Phased Rollout Planning für minimale Business-Disruption\n• Training für IT-Teams und End-Users\n• Documentation Updates für neue Integration-Architektur\n• Monitoring und Alerting für Integration-Points\n• Incident Response Procedures für Integration-spezifische Issues"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie implementiert man Container-basierte IAM-Infrastrukturen mit Kubernetes und welche spezifischen Sicherheits- und Performance-Optimierungen sind dabei erforderlich?',
        answer: "Container-basierte IAM-Infrastrukturen mit Kubernetes erfordern spezialisierte Ansätze für Sicherheit, Performance und Orchestrierung, da Identity Management Systeme besonders hohe Anforderungen an Verfügbarkeit, Latenz und Sicherheit stellen. Die Container-native Architektur ermöglicht dabei neue Optimierungsmöglichkeiten.\n\n🐳 Container Architecture Design für IAM:\n• Microservices Decomposition für Authentication, Authorization und User Management\n• Stateless Service Design für horizontale Skalierbarkeit\n• Sidecar Patterns für Cross-Cutting Concerns wie Logging und Monitoring\n• Init Containers für Database Migrations und Configuration Setup\n• Multi-Stage Builds für optimierte Container-Images und Security\n\n☸️ Kubernetes-spezifische IAM Optimierungen:\n• Custom Resource Definitions (CRDs) für IAM-spezifische Konfigurationen\n• Operators für automatisierte Lifecycle-Management von IAM-Komponenten\n• Horizontal Pod Autoscaler (HPA) für dynamische Skalierung basierend auf Authentication-Load\n• Pod Disruption Budgets für High Availability während Updates\n• Affinity Rules für optimale Pod-Platzierung und Performance\n\n🔒 Container Security Best Practices für IAM:\n• Pod Security Standards für minimale Privilegien und Security Contexts\n• Network Policies für Micro-Segmentation zwischen IAM-Services\n• Service Mesh Integration für mTLS und Traffic Encryption\n• Secrets Management mit External Secrets Operator\n• Image Scanning und Vulnerability Management in CI/CD-Pipelines\n\n⚡ Performance Optimization Strategies:\n• Resource Requests und Limits für predictable Performance\n• CPU und Memory Profiling für Container-optimierte Konfiguration\n• JVM Tuning für Java-basierte IAM-Anwendungen in Containern\n• Connection Pooling Optimization für Database-Connections\n• Caching Strategies mit Redis oder Hazelcast in Kubernetes\n\n🌐 Service Discovery und Load Balancing:\n• Kubernetes Services für interne Service-to-Service-Kommunikation\n• Ingress Controllers für externe Traffic-Management\n• Service Mesh für advanced Traffic Management und Observability\n• DNS-based Service Discovery für dynamische Endpoint-Resolution\n• Circuit Breaker Patterns für Resilience\n\n💾 Persistent Storage für IAM Data:\n• StatefulSets für Database-Workloads mit persistenten Identitäten\n• Persistent Volume Claims für Database Storage\n• Storage Classes für verschiedene Performance-Anforderungen\n• Backup Strategies für Kubernetes-native Workloads\n• Data Encryption at Rest für sensitive Identity-Daten\n\n📊 Monitoring und Observability:\n• Prometheus Metrics für Kubernetes und Application-Level Monitoring\n• Distributed Tracing mit Jaeger für Request-Flow-Visibility\n• Centralized Logging mit Fluentd und Elasticsearch\n• Custom Dashboards für IAM-spezifische KPIs\n• Alerting Rules für proaktive Incident Detection\n\n🔄 GitOps und Deployment Automation:\n• Helm Charts für parametrisierte IAM-Deployments\n• ArgoCD oder Flux für GitOps-basierte Deployment-Automation\n• Kustomize für Environment-spezifische Konfigurationen\n• Blue-Green Deployments für Zero-Downtime Updates\n• Canary Releases für risikoarme Feature-Rollouts"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Database-Strategien und Performance-Optimierungen sind für hochskalierbare IAM-Systeme entscheidend und wie implementiert man diese effektiv?',
        answer: "Database-Strategien für hochskalierbare IAM-Systeme erfordern durchdachte Architektur-Entscheidungen, die sowohl ACID-Eigenschaften für kritische Identity-Daten als auch Performance für Millionen von Authentication-Requests gewährleisten. Die Wahl der richtigen Database-Technologien und Optimierungsstrategien ist dabei entscheidend.\n\n🗄️ Database Architecture Patterns für IAM:\n• Polyglot Persistence für verschiedene Datentypen und Access-Patterns\n• Read Replicas für Skalierung von Authentication-Queries\n• Write-Through Caching für häufig abgerufene Identity-Daten\n• Event Sourcing für Audit-Trails und Compliance-Anforderungen\n• CQRS (Command Query Responsibility Segregation) für optimierte Read/Write-Performance\n\n⚡ Performance Optimization Techniques:\n• Database Indexing Strategies für schnelle User-Lookups\n• Query Optimization für komplexe Authorization-Abfragen\n• Connection Pooling für effiziente Database-Resource-Nutzung\n• Prepared Statements für SQL Injection Prevention und Performance\n• Batch Processing für Bulk-Operations wie User-Provisioning\n\n🔄 Scaling Strategies für Identity Stores:\n• Horizontal Sharding basierend auf User-ID oder Organizational Units\n• Vertical Partitioning für Trennung von häufig und selten genutzten Attributen\n• Database Clustering für High Availability und Load Distribution\n• Auto-Scaling für dynamische Kapazitätserweiterung\n• Geographic Distribution für globale Performance-Optimierung\n\n💾 Data Modeling Best Practices:\n• Normalized Schema für Konsistenz kritischer Identity-Daten\n• Denormalized Views für Performance-kritische Read-Operations\n• Attribute-based Schema Design für flexible User-Profile\n• Hierarchical Data Structures für Organizational Relationships\n• Temporal Data Modeling für historische Identity-Informationen\n\n🔐 Security und Compliance in Database Design:\n• Encryption at Rest für sensitive Identity-Attributes\n• Column-Level Encryption für PII und sensitive Daten\n• Database Access Controls mit Least Privilege Principles\n• Audit Logging für alle Database-Modifications\n• Data Masking für Non-Production Environments\n\n📊 Monitoring und Performance Tuning:\n• Database Performance Metrics Collection und Analysis\n• Slow Query Analysis für Optimization-Opportunities\n• Index Usage Statistics für Index-Optimization\n• Connection Pool Monitoring für Resource-Utilization\n• Deadlock Detection und Resolution Strategies\n\n🌐 Multi-Database Integration Patterns:\n• Database Federation für verteilte Identity-Stores\n• Data Synchronization zwischen verschiedenen Database-Systemen\n• Conflict Resolution für Multi-Master Scenarios\n• Cross-Database Transactions für Consistency\n• API-based Data Access für Database-Abstraction\n\n🔧 Technology-specific Optimizations:\n• PostgreSQL-specific Tuning für LDAP-ähnliche Queries\n• MongoDB Optimization für flexible Schema-Requirements\n• Redis Configuration für High-Performance Caching\n• Elasticsearch Tuning für Full-Text Search in User-Attributes\n• Graph Database Optimization für Complex Relationship Queries"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie gestaltet man API-Management und Service Mesh Architekturen für IAM-Systeme und welche Sicherheits- und Performance-Aspekte sind dabei kritisch?',
        answer: "API-Management und Service Mesh Architekturen für IAM-Systeme erfordern spezialisierte Ansätze, da sie sowohl als Sicherheits-Gateway als auch als Performance-kritische Infrastruktur fungieren. Die richtige Implementierung ist entscheidend für Skalierbarkeit, Sicherheit und Observability der gesamten IAM-Landschaft.\n\n🌐 API Gateway Architecture für IAM:\n• Centralized API Gateway für einheitliche Authentication und Authorization\n• Rate Limiting und Throttling für DDoS-Protection und Fair Usage\n• API Versioning Strategies für Backward Compatibility\n• Request/Response Transformation für Legacy System Integration\n• Circuit Breaker Patterns für Resilience gegen Backend-Failures\n\n🔒 Security Patterns im API-Management:\n• OAuth Token Validation und JWT Processing\n• API Key Management für Service-to-Service Authentication\n• Mutual TLS (mTLS) für sichere Service-Kommunikation\n• Request Signing und Verification für Message Integrity\n• IP Whitelisting und Geo-blocking für zusätzliche Sicherheitsebenen\n\n🕸️ Service Mesh Implementation für IAM:\n• Istio oder Linkerd für Traffic Management und Security\n• Automatic mTLS für alle Service-to-Service-Kommunikation\n• Traffic Splitting für Canary Deployments und A/B Testing\n• Fault Injection für Chaos Engineering und Resilience Testing\n• Policy Enforcement für fine-grained Access Control\n\n⚡ Performance Optimization in Service Mesh:\n• Sidecar Proxy Tuning für minimale Latency-Overhead\n• Connection Pooling und Keep-Alive Optimization\n• Load Balancing Algorithms für optimale Traffic-Verteilung\n• Retry Policies und Timeout Configuration\n• Compression und Protocol Optimization\n\n📊 Observability und Monitoring:\n• Distributed Tracing für End-to-End Request Visibility\n• Metrics Collection für API Performance und Error Rates\n• Service Topology Visualization für Dependency Mapping\n• Custom Dashboards für IAM-spezifische KPIs\n• Automated Alerting für SLA Violations und Anomalies\n\n🔄 Traffic Management Strategies:\n• Intelligent Routing basierend auf Request-Eigenschaften\n• Blue-Green Deployments für Zero-Downtime Updates\n• Canary Releases mit automatischem Rollback\n• Geographic Traffic Routing für Performance-Optimization\n• Failover Strategies für High Availability\n\n🛡️ Advanced Security Features:\n• Web Application Firewall (WAF) Integration\n• Bot Detection und Mitigation\n• Anomaly Detection für ungewöhnliche API-Usage-Patterns\n• Data Loss Prevention (DLP) für sensitive Identity-Daten\n• Compliance Enforcement für regulatorische Anforderungen\n\n⚙️ Operational Excellence:\n• API Documentation und Developer Portal\n• Automated Testing für API Contracts und Performance\n• Configuration Management für Service Mesh Policies\n• Disaster Recovery für API Gateway und Service Mesh\n• Cost Optimization für Cloud-native Service Mesh Deployments\n\n🔧 Integration Patterns:\n• Legacy System Integration über API Adapters\n• Event-driven Architecture für Asynchronous Processing\n• GraphQL Federation für unified API Experiences\n• gRPC Support für High-Performance Internal APIs\n• WebSocket Support für Real-time Identity Events"
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
