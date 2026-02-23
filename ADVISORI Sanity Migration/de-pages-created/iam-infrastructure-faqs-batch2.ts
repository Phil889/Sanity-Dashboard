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
    console.log('Updating IAM Infrastructure page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-infrastructure' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-infrastructure" not found')
    }
    
    // Create new FAQs for IAM Infrastructure security and compliance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie implementiert man Security-by-Design-Prinzipien in IAM-Infrastructure-Architekturen und welche kritischen Sicherheitsebenen müssen berücksichtigt werden?',
        answer: "Security-by-Design in IAM-Infrastructure bedeutet, Sicherheit als fundamentales Architekturprinzip zu etablieren, nicht als nachträgliche Ergänzung. Diese Philosophie erfordert eine ganzheitliche Betrachtung aller Infrastructure-Ebenen und die Integration von Sicherheitskontrollen in jeden Aspekt der Systemarchitektur, von der Hardware bis zur Anwendungsschicht.\n\n🛡️ Multi-Layer Security Architecture:\n• Network Security mit Micro-Segmentation und Zero-Trust-Prinzipien für granulare Traffic-Kontrolle\n• Infrastructure Security mit Hardware Security Modules und Trusted Platform Modules für Root-of-Trust\n• Container Security mit Image-Scanning, Runtime-Protection und Admission-Controllers\n• Application Security mit Secure Coding Practices und Vulnerability-Management\n• Data Security mit Encryption-at-Rest, in-Transit und in-Processing für umfassenden Datenschutz\n\n🔐 Identity-Centric Security Framework:\n• Certificate-based Authentication mit PKI-Infrastructure für starke Identitätsverifikation\n• Mutual TLS für sichere Service-to-Service-Communication in Microservices-Architekturen\n• Service Mesh Security mit Automatic Certificate Rotation und Traffic-Encryption\n• API Security mit OAuth, JWT und Rate-Limiting für sichere Service-Exposition\n• Secrets Management mit Vault-Integration und Automatic Secret-Rotation\n\n🔍 Continuous Security Monitoring und Threat Detection:\n• Security Information and Event Management mit Real-time Correlation und Alerting\n• Behavioral Analytics für Anomaly Detection und Insider-Threat-Identification\n• Vulnerability Scanning mit Automated Remediation und Patch-Management\n• Penetration Testing und Red Team Exercises für proaktive Security-Validation\n• Compliance Monitoring mit Automated Policy-Enforcement und Audit-Trail-Generation\n\n⚡ Incident Response und Recovery Capabilities:\n• Automated Incident Response mit Playbooks und Orchestration für schnelle Reaktion\n• Forensic Capabilities mit Immutable Logging und Chain-of-Custody-Procedures\n• Disaster Recovery mit Encrypted Backups und Geographic Distribution\n• Business Continuity Planning mit RTO/RPO-Optimization und Failover-Automation\n• Security Orchestration mit SOAR-Integration für koordinierte Response-Aktivitäten\n\n🏗️ Secure Development und Deployment Practices:\n• DevSecOps-Integration mit Security-Testing in CI/CD-Pipelines\n• Infrastructure-as-Code Security mit Policy-as-Code und Compliance-Validation\n• Secure Container Images mit Minimal Base Images und Vulnerability-Free Dependencies\n• Immutable Infrastructure mit Read-only File Systems und Stateless Services\n• Security-First Configuration Management mit Hardened Defaults und Least-Privilege-Principles"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt Infrastructure-as-Code in modernen IAM-Deployments und wie gewährleistet es Konsistenz, Skalierbarkeit und Compliance?',
        answer: "Infrastructure-as-Code revolutioniert IAM-Deployments durch die Transformation von manuellen, fehleranfälligen Prozessen zu automatisierten, reproduzierbaren und versionierten Infrastructure-Definitionen. Diese Methodik ermöglicht es, komplexe IAM-Landschaften mit derselben Präzision und Kontrolle zu verwalten wie Anwendungscode.\n\n🏗️ Declarative Infrastructure Definition:\n• Terraform und CloudFormation für Cloud-agnostic Infrastructure-Provisioning\n• Ansible und Puppet für Configuration-Management und System-Hardening\n• Kubernetes Manifests für Container-Orchestrierung und Service-Deployment\n• Helm Charts für Package-Management und Template-basierte Deployments\n• GitOps-Workflows für Git-basierte Infrastructure-Verwaltung und Deployment-Automation\n\n🔄 Version Control und Change Management:\n• Git-basierte Versionierung für vollständige Infrastructure-History und Rollback-Capabilities\n• Pull Request Workflows für Peer-Review und Approval-Prozesse\n• Branching-Strategies für Environment-spezifische Konfigurationen\n• Semantic Versioning für Infrastructure-Releases und Dependency-Management\n• Automated Testing mit Infrastructure-Tests und Compliance-Validation\n\n⚙️ Automated Deployment und Orchestration:\n• CI/CD-Pipeline-Integration für Continuous Infrastructure Delivery\n• Blue-Green Deployments für Zero-Downtime Infrastructure-Updates\n• Canary Releases für Risk-minimized Infrastructure-Changes\n• Automated Rollback bei Failed Deployments und Health-Check-Failures\n• Multi-Environment Promotion mit Automated Testing und Validation\n\n📊 Compliance und Governance Automation:\n• Policy-as-Code mit Open Policy Agent für Automated Compliance-Checking\n• Security Scanning mit Infrastructure-Security-Tools und Vulnerability-Assessment\n• Cost Management mit Resource-Tagging und Budget-Enforcement\n• Resource Governance mit Naming Conventions und Organizational Policies\n• Audit Trails mit Complete Change-History und Approval-Documentation\n\n🚀 Scalability und Multi-Environment Management:\n• Environment-agnostic Templates für Consistent Deployments across Stages\n• Parameter-driven Configuration für Environment-specific Customization\n• Module-based Architecture für Reusable Infrastructure-Components\n• Cross-Cloud Deployment für Multi-Cloud und Hybrid-Strategies\n• Automated Scaling mit Infrastructure-Metrics und Predictive-Analytics"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestaltet man eine effektive Disaster Recovery und Business Continuity Strategie für kritische IAM-Infrastructure-Komponenten?',
        answer: "Disaster Recovery und Business Continuity für IAM-Infrastructure erfordern eine strategische, multi-dimensionale Herangehensweise, die technische Resilienz mit Business-Anforderungen verbindet. Eine effektive Strategie gewährleistet, dass Identitätsdienste auch bei schwerwiegenden Störungen verfügbar bleiben und Geschäftsprozesse ohne Unterbrechung fortgesetzt werden können.\n\n🎯 Strategic Business Impact Assessment:\n• Recovery Time Objective und Recovery Point Objective Definition für verschiedene Service-Tiers\n• Business Impact Analysis mit Priorisierung kritischer IAM-Services und Dependencies\n• Risk Assessment mit Threat-Modeling und Vulnerability-Analysis\n• Cost-Benefit-Analysis für verschiedene DR-Strategien und Investment-Levels\n• Stakeholder-Alignment mit Business-Continuity-Requirements und Compliance-Mandates\n\n🏗️ Multi-Region Architecture und Geographic Distribution:\n• Active-Active Deployment mit Load-Balancing und Automatic Failover\n• Data Replication mit Synchronous und Asynchronous Replication-Strategies\n• Cross-Region Networking mit VPN-Connections und Direct-Connect-Links\n• DNS-based Failover mit Health-Checks und Automatic Traffic-Routing\n• Edge-Location-Deployment für Improved Performance und Reduced Latency\n\n💾 Comprehensive Backup und Recovery Strategies:\n• Automated Backup mit Point-in-Time Recovery und Incremental Backups\n• Cross-Region Backup-Replication für Geographic Redundancy\n• Backup-Encryption mit Key-Management und Secure Storage\n• Backup-Testing mit Regular Restore-Tests und Recovery-Validation\n• Immutable Backups mit Write-Once-Read-Many Storage für Ransomware-Protection\n\n⚡ Automated Failover und Recovery Orchestration:\n• Health-Check-Automation mit Multi-Level Monitoring und Alerting\n• Automated Failover mit Predefined Runbooks und Decision-Trees\n• Service-Discovery-Integration für Dynamic Service-Registration\n• Database-Failover mit Master-Slave-Promotion und Connection-Redirection\n• Application-Level Failover mit Circuit-Breakers und Retry-Logic\n\n🧪 Testing und Validation Framework:\n• Disaster Recovery Testing mit Regular DR-Drills und Scenario-Simulation\n• Chaos Engineering mit Controlled Failure-Injection und Resilience-Testing\n• Recovery-Time-Testing mit Performance-Measurement und Optimization\n• End-to-End Testing mit User-Journey-Validation und Business-Process-Testing\n• Documentation und Lessons-Learned mit Continuous Improvement und Process-Refinement"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche modernen Container-Orchestrierung und Microservices-Patterns sind optimal für skalierbare IAM-Infrastructure-Deployments?',
        answer: "Container-Orchestrierung und Microservices-Patterns transformieren IAM-Infrastructure von monolithischen Systemen zu agilen, skalierbaren und wartbaren Service-Architekturen. Diese moderne Herangehensweise ermöglicht es, IAM-Services granular zu skalieren, unabhängig zu deployen und optimal zu verwalten.\n\n🐳 Advanced Container-Orchestrierung mit Kubernetes:\n• Pod-Design-Patterns mit Sidecar, Ambassador und Adapter-Patterns für Service-Enhancement\n• Horizontal Pod Autoscaling mit Custom Metrics und Predictive Scaling\n• Vertical Pod Autoscaling für optimale Resource-Allocation und Cost-Efficiency\n• Cluster Autoscaling mit Node-Pool-Management und Multi-Zone-Distribution\n• Service Mesh Integration mit Istio oder Linkerd für Advanced Traffic-Management\n\n⚙️ Microservices Architecture Patterns:\n• Domain-Driven Design mit Bounded Contexts für Service-Boundaries\n• API Gateway Pattern mit Centralized Routing und Security-Enforcement\n• Circuit Breaker Pattern für Fault-Tolerance und Cascading-Failure-Prevention\n• Saga Pattern für Distributed Transaction-Management und Data-Consistency\n• Event-Driven Architecture mit Message-Queues und Event-Sourcing\n\n🔄 Service Communication und Integration:\n• gRPC für High-Performance Inter-Service Communication\n• Message Brokers mit Kafka oder RabbitMQ für Asynchronous Communication\n• Service Discovery mit Consul oder Kubernetes-native Discovery\n• Load Balancing mit Envoy Proxy und Advanced Routing-Strategies\n• API Versioning mit Backward-Compatibility und Graceful Migration\n\n📊 Observability und Monitoring Patterns:\n• Distributed Tracing mit Jaeger oder Zipkin für End-to-End Request-Tracking\n• Metrics Collection mit Prometheus und Custom Application-Metrics\n• Centralized Logging mit ELK Stack oder Fluentd for Log-Aggregation\n• Health Check Patterns mit Liveness, Readiness und Startup-Probes\n• Alerting und Notification mit PagerDuty-Integration und Escalation-Policies\n\n🚀 Deployment und Release Patterns:\n• Blue-Green Deployment für Zero-Downtime Releases\n• Canary Deployment mit Gradual Traffic-Shifting und A/B-Testing\n• Rolling Updates mit Controlled Rollout und Automatic Rollback\n• Feature Flags für Runtime Feature-Control und Risk-Mitigation\n• GitOps mit ArgoCD oder Flux für Declarative Deployment-Management"
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
