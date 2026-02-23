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
    console.log('Updating IAM Architektur page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-architektur' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-architektur" not found')
    }
    
    // Create new FAQs for Enterprise scalability and cloud-native architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie konzipiert man eine cloud-native IAM-Architektur, die elastische Skalierung ermöglicht und gleichzeitig Multi-Cloud und Hybrid-Umgebungen optimal unterstützt?',
        answer: "Eine cloud-native IAM-Architektur erfordert fundamentale Designprinzipien, die über traditionelle On-Premises-Ansätze hinausgehen und die einzigartigen Eigenschaften von Cloud-Umgebungen optimal nutzen. Diese Architektur muss elastische Skalierung, Multi-Cloud-Flexibilität und Hybrid-Integration nahtlos vereinen, während sie gleichzeitig höchste Sicherheits- und Performance-Standards gewährleistet.\n\n☁️ Cloud-native Architecture Fundamentals:\n• Container-first Design mit Kubernetes-Orchestrierung für portable und skalierbare Deployments\n• Serverless Integration für event-driven Processing und automatische Skalierung\n• Infrastructure-as-Code für reproduzierbare und versionierte Infrastruktur-Deployments\n• Cloud-native Storage Solutions für hochverfügbare und skalierbare Datenpersistierung\n• Service Mesh Integration für sichere Service-to-Service-Kommunikation\n\n🔄 Elastic Scaling und Auto-scaling Patterns:\n• Horizontal Pod Autoscaling basierend auf CPU, Memory und Custom Metrics\n• Vertical Pod Autoscaling für optimale Resource-Allocation\n• Cluster Autoscaling für dynamische Node-Verwaltung\n• Application-level Scaling mit Load-based Triggers\n• Predictive Scaling basierend auf Historical Patterns und Machine Learning\n\n🌐 Multi-Cloud Architecture Strategies:\n• Cloud-agnostic Service Abstractions für Vendor-Lock-in-Vermeidung\n• Federated Identity Management über Cloud-Grenzen hinweg\n• Cross-Cloud Data Replication und Synchronization\n• Multi-Cloud Load Balancing und Traffic Distribution\n• Unified Monitoring und Observability über alle Cloud-Umgebungen\n\n🔗 Hybrid Integration und Edge Computing:\n• Edge Identity Services für IoT und Distributed Computing Scenarios\n• Hybrid Cloud Connectivity mit VPN und Private Network Integration\n• On-Premises zu Cloud Migration Patterns und Coexistence Strategies\n• Edge-to-Cloud Identity Synchronization und Policy Propagation\n• Latency-optimized Identity Resolution für geografisch verteilte Systeme\n\n📊 Cloud-native Data Architecture:\n• Distributed Database Patterns für Global Data Distribution\n• Event Sourcing mit Cloud-native Event Stores\n• CQRS Implementation mit Cloud-native Read/Write Separation\n• Data Lake Integration für Analytics und Machine Learning\n• Real-time Streaming mit Cloud-native Message Brokers\n\n🛡️ Cloud-native Security und Compliance:\n• Zero-Trust Network Architecture mit Service Mesh Security\n• Cloud-native Secret Management und Key Rotation\n• Policy-as-Code für Compliance Automation\n• Cloud Security Posture Management Integration\n• Continuous Compliance Monitoring mit Cloud-native Tools"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Architekturmuster und Design-Patterns sind essentiell für die Entwicklung hochperformanter IAM-Systeme, die Millionen von Benutzern und Transaktionen bewältigen können?',
        answer: "Hochperformante IAM-Systeme für Enterprise-Scale erfordern spezialisierte Architekturmuster und Design-Patterns, die weit über traditionelle Ansätze hinausgehen. Diese Patterns müssen extreme Skalierung, niedrige Latenz und hohe Verfügbarkeit gewährleisten, während sie gleichzeitig Konsistenz und Sicherheit in verteilten Umgebungen aufrechterhalten.\n\n⚡ High-Performance Architecture Patterns:\n• CQRS mit Event Sourcing für optimierte Read/Write-Performance und Audit-Trails\n• Database Sharding und Partitioning für horizontale Skalierung der Datenschicht\n• Read Replicas und Write-through Caching für optimierte Query-Performance\n• Asynchronous Processing mit Message Queues für Entkopplung und Throughput\n• Connection Pooling und Resource Management für effiziente Ressourcennutzung\n\n🔄 Distributed System Patterns:\n• Circuit Breaker Pattern für Resilience und Graceful Degradation\n• Bulkhead Pattern für Isolation kritischer Systemkomponenten\n• Saga Pattern für Distributed Transaction Management\n• Event-driven Architecture für lose gekoppelte Systemintegration\n• Eventual Consistency Patterns für CAP-Theorem-konforme Designs\n\n💾 Caching und Performance Optimization:\n• Multi-level Caching Strategy mit L1, L2 und Distributed Caches\n• Cache-aside, Write-through und Write-behind Patterns\n• Session Clustering und Distributed Session Management\n• Content Delivery Network Integration für Global Performance\n• Database Query Optimization und Index Strategies\n\n🌐 Load Distribution und Traffic Management:\n• Load Balancing Algorithms für optimale Traffic Distribution\n• Geographic Load Balancing für Global User Base\n• Rate Limiting und Throttling für System Protection\n• Traffic Shaping und Quality of Service Management\n• Canary Deployments und Blue-Green Deployment Patterns\n\n📊 Monitoring und Observability Patterns:\n• Distributed Tracing für End-to-End Performance Visibility\n• Metrics Collection und Real-time Alerting\n• Application Performance Monitoring Integration\n• Synthetic Monitoring für Proactive Issue Detection\n• Chaos Engineering für Resilience Testing\n\n🔧 Optimization und Tuning Strategies:\n• JVM Tuning und Garbage Collection Optimization\n• Database Connection Pool Tuning\n• Network Optimization und Protocol Selection\n• Memory Management und Resource Allocation\n• Performance Profiling und Bottleneck Analysis"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie implementiert man eine microservices-basierte IAM-Architektur erfolgreich und welche spezifischen Herausforderungen müssen bei der Service-Decomposition und Inter-Service-Kommunikation bewältigt werden?',
        answer: "Eine microservices-basierte IAM-Architektur bietet unparalleled Flexibilität und Skalierbarkeit, bringt jedoch komplexe Herausforderungen in Bezug auf Service-Design, Kommunikation und Datenmanagement mit sich. Der Erfolg hängt von durchdachter Service-Decomposition, robusten Kommunikationsmustern und intelligenten Data-Management-Strategien ab.\n\n🏗️ Service Decomposition Strategies:\n• Domain-driven Design für fachliche Service-Abgrenzung und Bounded Contexts\n• Single Responsibility Principle für fokussierte Service-Verantwortlichkeiten\n• Database-per-Service Pattern für Datenkapselung und Autonomie\n• API-first Design für klare Service-Contracts und Versionierung\n• Strangler Fig Pattern für graduelle Migration von Monolithen\n\n🔄 Inter-Service Communication Patterns:\n• Synchronous Communication mit REST APIs und GraphQL für Request-Response-Patterns\n• Asynchronous Messaging mit Event-driven Architecture für lose Kopplung\n• Service Mesh für sichere und observable Service-to-Service-Kommunikation\n• API Gateway für centralized Routing, Authentication und Rate Limiting\n• Circuit Breaker und Retry Patterns für Resilience\n\n📊 Data Management in Microservices:\n• Database-per-Service für Datenkapselung und Service Autonomie\n• Event Sourcing für Audit-Trails und State Reconstruction\n• Saga Pattern für Distributed Transaction Management\n• CQRS für optimierte Read/Write-Performance\n• Data Synchronization Patterns für Eventual Consistency\n\n🛡️ Security in Microservices Architecture:\n• Service-to-Service Authentication mit mTLS und JWT\n• Distributed Authorization mit Policy Engines\n• Secret Management und Key Distribution\n• Security Token Service für Token Issuance und Validation\n• Zero-Trust Network Architecture mit Service Mesh Security\n\n🔧 Operational Challenges und Solutions:\n• Service Discovery und Registration für Dynamic Service Location\n• Distributed Tracing für End-to-End Request Visibility\n• Centralized Logging und Log Aggregation\n• Health Checks und Service Monitoring\n• Configuration Management und Feature Flags\n\n📈 Scaling und Performance Considerations:\n• Independent Service Scaling basierend auf Load Patterns\n• Load Balancing Strategies für Service Distribution\n• Caching Strategies auf Service-Level\n• Performance Monitoring und SLA Management\n• Capacity Planning und Resource Optimization"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielt API-Design in der IAM-Architektur und wie entwickelt man robuste, versionierte APIs, die sowohl Developer Experience als auch Enterprise-Sicherheitsanforderungen optimal erfüllen?',
        answer: "API-Design ist das Herzstück moderner IAM-Architekturen und bestimmt maßgeblich die Benutzerfreundlichkeit, Sicherheit und Langlebigkeit des Systems. Robuste APIs müssen intuitive Developer Experience mit strengen Enterprise-Sicherheitsanforderungen vereinen und dabei Flexibilität für zukünftige Entwicklungen bewahren.\n\n🎯 API-first Architecture Principles:\n• Contract-first Design mit OpenAPI Specifications für klare API-Contracts\n• RESTful Design Principles mit konsistenten Resource-Modellen\n• GraphQL Integration für flexible Query-Capabilities\n• Hypermedia APIs für Self-describing und Discoverable Services\n• API Gateway Pattern für centralized Management und Governance\n\n🔐 Enterprise Security Integration:\n• OAuth und OpenID Connect für standardisierte Authorization\n• JWT Token Design mit Claims-based Authorization\n• API Key Management und Rotation Strategies\n• Rate Limiting und Throttling für DDoS Protection\n• Input Validation und Output Sanitization für Injection Prevention\n\n📋 API Versioning und Evolution:\n• Semantic Versioning für predictable API Evolution\n• Backward Compatibility Strategies und Deprecation Policies\n• API Versioning Patterns wie URL, Header oder Content Negotiation\n• Breaking Change Management und Migration Strategies\n• API Lifecycle Management von Design bis Retirement\n\n👨‍💻 Developer Experience Optimization:\n• Comprehensive API Documentation mit Interactive Examples\n• SDK Generation für Multiple Programming Languages\n• Sandbox Environments für API Testing und Prototyping\n• Error Handling mit Meaningful Error Messages und Codes\n• API Analytics und Usage Metrics für Developer Insights\n\n🔄 API Gateway und Management:\n• Request Routing und Load Balancing\n• Authentication und Authorization Enforcement\n• Request/Response Transformation und Protocol Translation\n• Caching und Performance Optimization\n• Monitoring und Analytics für API Usage\n\n📊 API Governance und Compliance:\n• API Design Standards und Style Guides\n• Automated API Testing und Quality Assurance\n• API Security Scanning und Vulnerability Assessment\n• Compliance Monitoring für Regulatory Requirements\n• API Catalog und Discovery für Enterprise API Management"
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
