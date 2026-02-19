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
    console.log('Updating IAM IT page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-it' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-it" not found')
    }
    
    // Create new FAQs for IAM IT fundamentals and architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche kritischen Architektur-Entscheidungen bestimmen den Erfolg einer IAM IT-Infrastruktur und wie können diese optimal getroffen werden?',
        answer: "Die Architektur-Entscheidungen für IAM IT-Infrastrukturen sind fundamentale Weichenstellungen, die langfristig über Performance, Skalierbarkeit, Sicherheit und Betriebskosten entscheiden. Diese Entscheidungen müssen sowohl aktuelle Anforderungen erfüllen als auch zukünftige Entwicklungen antizipieren, da nachträgliche Änderungen oft kostspielig und komplex sind.\n\n🏗️ Fundamentale Architektur-Prinzipien:\n• Cloud-native Design für maximale Skalierbarkeit und Flexibilität\n• Microservices-Architektur für modulare Entwicklung und unabhängige Skalierung\n• API-first Approach für nahtlose Integration und Zukunftssicherheit\n• Event-driven Architecture für Real-time Processing und lose Kopplung\n• Immutable Infrastructure für konsistente und reproduzierbare Deployments\n\n🔧 Technologie-Stack Entscheidungen:\n• Container-Orchestrierung mit Kubernetes für portable und skalierbare Deployments\n• Service Mesh für sichere Service-to-Service-Kommunikation und Observability\n• Database-Strategie mit polyglotter Persistierung für optimale Performance\n• Caching-Layer mit Redis oder Memcached für niedrige Latenz\n• Message Queuing mit Apache Kafka oder RabbitMQ für asynchrone Verarbeitung\n\n⚡ Performance und Skalierungs-Strategien:\n• Horizontal Scaling Design für elastische Kapazitätserweiterung\n• Load Balancing Strategien für optimale Traffic-Verteilung\n• Database Sharding und Read Replicas für Datenbank-Performance\n• CDN Integration für globale Content-Delivery und reduzierte Latenz\n• Auto-Scaling Policies für dynamische Ressourcen-Anpassung\n\n🛡️ Sicherheits-Architektur Integration:\n• Zero Trust Network Architecture für perimeter-lose Sicherheit\n• Encryption at Rest und in Transit für umfassenden Datenschutz\n• Secrets Management mit HashiCorp Vault oder AWS Secrets Manager\n• Network Segmentation für Isolation kritischer Komponenten\n• Security Monitoring Integration für kontinuierliche Threat Detection\n\n☁️ Multi-Cloud und Hybrid Strategien:\n• Cloud-agnostic Design für Vendor-Lock-in Vermeidung\n• Hybrid Connectivity für nahtlose On-Premise Integration\n• Data Residency Compliance für regulatorische Anforderungen\n• Disaster Recovery über mehrere Availability Zones\n• Cost Optimization durch intelligente Workload-Platzierung\n\n📊 Observability und Monitoring Design:\n• Distributed Tracing für End-to-End Visibility\n• Metrics Collection mit Prometheus und Grafana\n• Centralized Logging mit ELK Stack oder Splunk\n• Application Performance Monitoring für User Experience Optimization\n• Infrastructure Monitoring für proaktive Incident Prevention"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie dimensioniert man IAM IT-Infrastrukturen für Enterprise-Skalierung und welche Performance-Metriken sind dabei entscheidend?',
        answer: "Die Dimensionierung von IAM IT-Infrastrukturen für Enterprise-Anforderungen erfordert eine wissenschaftliche Herangehensweise, die sowohl aktuelle Lasten als auch zukünftiges Wachstum berücksichtigt. Dabei müssen komplexe Interdependenzen zwischen verschiedenen Systemkomponenten verstanden und optimiert werden.\n\n📊 Capacity Planning Methodologie:\n• Baseline Performance Measurement für aktuelle System-Auslastung\n• Growth Projection basierend auf Business-Plänen und historischen Daten\n• Peak Load Analysis für Worst-Case-Szenarien und Spitzenlasten\n• Resource Utilization Patterns für optimale Hardware-Dimensionierung\n• Cost-Performance Optimization für wirtschaftliche Effizienz\n\n⚡ Kritische Performance-Metriken für IAM-Systeme:\n• Authentication Response Time unter 200ms für optimale User Experience\n• Authorization Latency unter 50ms für nahtlose Anwendungsintegration\n• Throughput Capacity für gleichzeitige Benutzer und Transaktionen\n• Database Query Performance für Identity Store Operations\n• API Response Times für alle IAM-Services und Endpoints\n\n🔄 Skalierungs-Strategien und Patterns:\n• Horizontal Pod Autoscaling in Kubernetes für dynamische Skalierung\n• Database Connection Pooling für optimale Ressourcen-Nutzung\n• Caching Strategies mit Multi-Level Caching für Performance-Boost\n• Load Balancing Algorithms für optimale Traffic-Verteilung\n• Circuit Breaker Patterns für Resilience bei Überlastung\n\n💾 Storage und Database Dimensionierung:\n• Identity Store Sizing basierend auf User-Anzahl und Attribut-Komplexität\n• Transaction Log Capacity für Audit und Compliance-Anforderungen\n• Backup Storage Requirements für Disaster Recovery\n• Archive Strategy für langfristige Datenaufbewahrung\n• IOPS Requirements für High-Performance Database Operations\n\n🌐 Network und Connectivity Planning:\n• Bandwidth Requirements für Peak Traffic und geografische Verteilung\n• Latency Optimization für globale User-Verteilung\n• Network Redundancy für High Availability\n• CDN Strategy für Content Delivery und Performance\n• VPN und Private Connectivity für Hybrid Deployments\n\n🔧 Infrastructure Monitoring und Optimization:\n• Real-time Performance Dashboards für kontinuierliche Überwachung\n• Automated Alerting für Performance-Degradation\n• Capacity Forecasting für proaktive Skalierung\n• Resource Optimization für Cost-Efficiency\n• Performance Tuning basierend auf Monitoring-Daten\n\n📈 Continuous Performance Engineering:\n• Load Testing mit realistischen User-Szenarien\n• Stress Testing für Breaking Point Identification\n• Performance Regression Testing für Release-Validierung\n• Chaos Engineering für Resilience Testing\n• Performance Benchmarking für kontinuierliche Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche DevOps-Praktiken und CI/CD-Strategien sind für IAM IT-Infrastrukturen besonders kritisch und wie implementiert man diese effektiv?',
        answer: "DevOps-Praktiken für IAM IT-Infrastrukturen erfordern besondere Aufmerksamkeit für Sicherheit, Compliance und Zero-Downtime-Deployments, da Identity Management Systeme kritische Unternehmensinfrastruktur darstellen. Die Integration von Security-by-Design und Compliance-Automation ist dabei essentiell.\n\n🔄 Infrastructure-as-Code (IaC) Best Practices:\n• Terraform für deklarative Infrastructure-Definition und State Management\n• Ansible für Configuration Management und Application Deployment\n• GitOps Workflows für versionierte Infrastructure-Changes\n• Environment Parity für konsistente Dev/Test/Prod Umgebungen\n• Immutable Infrastructure für reproduzierbare und sichere Deployments\n\n🚀 CI/CD Pipeline Design für IAM-Systeme:\n• Multi-Stage Pipelines mit Security Gates und Compliance Checks\n• Automated Testing mit Unit, Integration und Security Tests\n• Blue-Green Deployments für Zero-Downtime Updates\n• Canary Releases für risikoarme Feature-Rollouts\n• Rollback Strategies für schnelle Recovery bei Problemen\n\n🛡️ Security Integration in DevOps (DevSecOps):\n• Static Application Security Testing (SAST) in Build-Pipelines\n• Dynamic Application Security Testing (DAST) für Runtime-Vulnerabilities\n• Container Security Scanning für Image-Vulnerabilities\n• Secrets Management mit automatischer Rotation\n• Compliance-as-Code für automatisierte Audit-Bereitschaft\n\n📦 Container und Kubernetes Strategies:\n• Multi-Stage Docker Builds für optimierte Container-Images\n• Kubernetes Operators für IAM-spezifische Deployment-Automation\n• Helm Charts für parametrisierte Application-Deployments\n• Pod Security Policies für Container-Sicherheit\n• Resource Quotas und Limits für Performance-Isolation\n\n🔍 Monitoring und Observability Integration:\n• Prometheus Metrics für Infrastructure und Application Monitoring\n• Distributed Tracing mit Jaeger oder Zipkin\n• Centralized Logging mit Fluentd und Elasticsearch\n• Custom Dashboards für IAM-spezifische KPIs\n• Automated Alerting für proaktive Incident Response\n\n⚙️ Configuration Management und Environment Consistency:\n• Environment-specific Configuration mit ConfigMaps und Secrets\n• Feature Flags für controlled Feature Rollouts\n• Database Migration Automation für Schema-Updates\n• Environment Promotion Workflows für Change Management\n• Configuration Drift Detection für Compliance-Sicherstellung\n\n🔧 Automation und Orchestration:\n• Automated Backup und Recovery Procedures\n• Self-Healing Infrastructure mit Kubernetes Health Checks\n• Automated Scaling basierend auf Performance-Metriken\n• Incident Response Automation für schnelle Problem-Resolution\n• Compliance Reporting Automation für regulatorische Anforderungen\n\n📊 Continuous Improvement und Optimization:\n• Performance Metrics Collection für Optimization-Opportunities\n• Cost Optimization durch Resource-Usage-Analysis\n• Security Posture Assessment für kontinuierliche Verbesserung\n• Developer Experience Optimization für Produktivitätssteigerung\n• Process Automation für Operational Efficiency"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet man High Availability und Disaster Recovery für IAM IT-Infrastrukturen in Multi-Cloud-Umgebungen?',
        answer: "High Availability und Disaster Recovery für IAM IT-Infrastrukturen in Multi-Cloud-Umgebungen erfordern eine durchdachte Strategie, die sowohl technische Redundanz als auch operative Prozesse umfasst. Die kritische Natur von Identity Management Systemen macht robuste HA/DR-Konzepte unerlässlich für Business Continuity.\n\n🏗️ Multi-Cloud HA Architecture Design:\n• Active-Active Deployment über mehrere Cloud-Provider für maximale Verfügbarkeit\n• Geographic Distribution für Disaster Recovery und Latency-Optimization\n• Cross-Cloud Load Balancing für intelligente Traffic-Verteilung\n• Data Replication Strategies für konsistente Identity-Daten\n• Network Redundancy mit mehreren Connectivity-Optionen\n\n🔄 Data Consistency und Synchronization:\n• Eventually Consistent Replication für globale Identity Stores\n• Conflict Resolution Strategies für Multi-Master Scenarios\n• Data Integrity Checks für Corruption Detection\n• Automated Failover mit Data Consistency Validation\n• Cross-Region Backup Synchronization für Disaster Recovery\n\n⚡ Automated Failover und Recovery:\n• Health Check Automation für proaktive Failure Detection\n• Automated DNS Failover für Traffic Redirection\n• Database Failover mit minimal Data Loss (RPO < 1 minute)\n• Application-Level Failover für Service Continuity\n• Automated Recovery Testing für Procedure Validation\n\n🛡️ Security in HA/DR Scenarios:\n• Encryption in Transit für Cross-Cloud Data Replication\n• Key Management für Multi-Cloud Encryption\n• Identity Federation für Cross-Cloud Authentication\n• Security Monitoring für Anomaly Detection während Failover\n• Compliance Maintenance während Disaster Recovery\n\n📊 Monitoring und Alerting für HA/DR:\n• Real-time Health Monitoring für alle kritischen Komponenten\n• Predictive Analytics für Failure Prevention\n• Automated Alerting mit Escalation Procedures\n• Performance Monitoring während Failover-Szenarien\n• Capacity Monitoring für Surge-Handling\n\n🔧 Recovery Time und Recovery Point Objectives:\n• RTO (Recovery Time Objective) unter 5 Minuten für kritische Services\n• RPO (Recovery Point Objective) unter 1 Minute für Identity-Daten\n• Tiered Recovery Strategies für verschiedene Service-Levels\n• Automated Recovery Procedures für schnelle Wiederherstellung\n• Manual Override Capabilities für komplexe Failure-Szenarien\n\n🧪 Testing und Validation:\n• Regular Disaster Recovery Drills für Procedure-Validation\n• Chaos Engineering für Resilience Testing\n• Failover Testing ohne Service-Unterbrechung\n• Recovery Time Measurement für SLA-Compliance\n• Documentation Updates basierend auf Test-Ergebnissen\n\n📋 Business Continuity Planning:\n• Communication Plans für Stakeholder-Information\n• Escalation Procedures für kritische Incidents\n• Vendor Coordination für Multi-Cloud Support\n• Regulatory Compliance während Disaster Scenarios\n• Post-Incident Analysis für kontinuierliche Verbesserung\n\n💰 Cost Optimization für HA/DR:\n• Right-Sizing von Standby-Resources\n• Automated Scaling für Disaster Recovery Scenarios\n• Cost-Benefit Analysis für verschiedene HA/DR-Strategien\n• Reserved Instance Optimization für Standby-Capacity\n• Cross-Cloud Cost Management für optimale Resource-Allocation"
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
