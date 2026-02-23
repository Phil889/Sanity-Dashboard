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
    console.log('Updating SIEM Architektur page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-architektur' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-architektur" not found')
    }
    
    // Create new FAQs for SIEM Architecture design and planning
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Überlegungen sind bei der Planung einer Enterprise SIEM Architektur entscheidend und wie entwickelt man eine zukunftssichere Infrastruktur?',
        answer: "Die Planung einer Enterprise SIEM Architektur erfordert einen ganzheitlichen Ansatz, der aktuelle Anforderungen mit zukünftigen Herausforderungen in Einklang bringt. Eine strategische Architektur-Planung schafft das Fundament für skalierbare, resiliente und kosteneffiziente Cybersecurity-Infrastrukturen, die als Enabler für Business-Wachstum fungieren.\n\n🎯 Strategic Architecture Vision:\n• Comprehensive Business Alignment und Stakeholder Requirements Analysis für langfristige Architektur-Ziele\n• Future-State Architecture Definition mit klarer Roadmap und Meilenstein-Planung\n• Technology Trend Assessment und Innovation Integration für zukunftssichere Designs\n• Risk-based Architecture Planning mit Threat Landscape Considerations\n• ROI-optimierte Architektur-Entscheidungen mit Total Cost of Ownership Modellierung\n\n🏗️ Enterprise Architecture Framework:\n• Layered Architecture Design mit klarer Separation of Concerns und Modularity\n• Service-oriented Architecture Principles für Flexibilität und Wiederverwendbarkeit\n• API-first Design für nahtlose Integration und Ecosystem-Erweiterbarkeit\n• Microservices Architecture Patterns für Skalierbarkeit und Maintainability\n• Event-driven Architecture für Real-time Processing und Responsive Systems\n\n📊 Scalability und Performance Design:\n• Horizontal Scaling Architecture mit Load Distribution und Resource Optimization\n• Vertical Scaling Capabilities für Performance-intensive Workloads\n• Elastic Infrastructure Design für dynamische Kapazitätsanpassung\n• Performance Engineering mit Latency Optimization und Throughput Maximization\n• Capacity Planning Models für proaktive Resource Management\n\n🔒 Security-by-Design Principles:\n• Zero-Trust Architecture Integration mit Identity-centric Security Models\n• Defense-in-Depth Strategies mit Multi-layered Security Controls\n• Secure Communication Protocols und End-to-end Encryption\n• Access Control Architecture mit Principle of Least Privilege\n• Security Monitoring und Audit Trail Design für Compliance und Forensics\n\n☁️ Cloud-native und Hybrid Considerations:\n• Multi-Cloud Architecture Strategies für Vendor Independence und Resilience\n• Hybrid Cloud Integration für On-premises und Cloud Resource Optimization\n• Container Orchestration und Kubernetes-native Deployments\n• Infrastructure-as-Code für Consistent und Repeatable Deployments\n• Cloud Security Posture Management Integration für Continuous Compliance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie gestaltet man eine skalierbare SIEM Datenarchitektur, die massive Datenvolumen effizient verarbeiten kann und gleichzeitig Performance optimiert?',
        answer: "Eine skalierbare SIEM Datenarchitektur ist das Herzstück jeder leistungsfähigen Cybersecurity-Infrastruktur. Die Herausforderung liegt darin, exponentiell wachsende Datenvolumen zu bewältigen, während gleichzeitig Real-time Analytics und historische Analysen mit optimaler Performance ermöglicht werden.\n\n📈 Data Volume und Velocity Management:\n• Tiered Storage Architecture mit Hot, Warm und Cold Data Classification\n• Data Lifecycle Management für automatisierte Archivierung und Retention Policies\n• Compression und Deduplication Strategies für Storage Optimization\n• Parallel Processing Architecture für High-throughput Data Ingestion\n• Stream Processing Capabilities für Real-time Event Correlation\n\n🏗️ Distributed Architecture Patterns:\n• Horizontally Partitioned Databases für Massive Scale Data Distribution\n• Sharding Strategies basierend auf Time, Geography oder Data Type\n• Distributed Computing Frameworks für Parallel Analytics Processing\n• Load Balancing Algorithms für Optimal Resource Utilization\n• Fault-tolerant Design mit Automatic Failover und Recovery Mechanisms\n\n⚡ Performance Optimization Techniques:\n• In-memory Computing für Ultra-fast Query Processing\n• Indexing Strategies für Optimized Search und Retrieval Performance\n• Caching Layers für Frequently Accessed Data und Query Results\n• Query Optimization mit Intelligent Query Planning und Execution\n• Resource Allocation Algorithms für Dynamic Performance Tuning\n\n🔄 Real-time Processing Architecture:\n• Event Streaming Platforms für Continuous Data Flow Management\n• Complex Event Processing für Advanced Pattern Detection\n• Stream Analytics Engines für Real-time Threat Detection\n• Message Queue Systems für Reliable Event Delivery\n• Backpressure Handling für System Stability unter High Load\n\n📊 Analytics und Intelligence Layer:\n• Data Lake Architecture für Flexible Schema und Multi-format Support\n• Data Warehouse Integration für Structured Analytics und Reporting\n• Machine Learning Pipeline Integration für Predictive Analytics\n• Graph Database Capabilities für Relationship Analysis\n• Time-series Database Optimization für Temporal Data Analysis\n\n🔧 Operational Excellence:\n• Monitoring und Observability für Data Pipeline Health\n• Automated Scaling basierend auf Data Volume und Processing Demands\n• Data Quality Assurance mit Validation und Cleansing Processes\n• Disaster Recovery für Data Protection und Business Continuity\n• Performance Metrics und SLA Monitoring für Continuous Improvement"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Architektur-Patterns gewährleisten High Availability und Disaster Recovery für kritische SIEM Infrastrukturen?',
        answer: "High Availability und Disaster Recovery sind essentiell für kritische SIEM Infrastrukturen, da Ausfälle zu Security Blind Spots und Compliance-Verletzungen führen können. Eine durchdachte HA/DR Architektur gewährleistet kontinuierliche Cybersecurity Operations auch bei System-Ausfällen oder Katastrophen.\n\n🏢 High Availability Architecture Patterns:\n• Active-Active Cluster Configuration für Load Distribution und Redundancy\n• Active-Passive Failover Systems mit Automatic Switchover Capabilities\n• Geographic Distribution für Site-level Resilience und Disaster Protection\n• Load Balancer Integration mit Health Checks und Intelligent Routing\n• Stateless Service Design für Seamless Failover ohne Data Loss\n\n🔄 Redundancy und Failover Mechanisms:\n• Database Replication mit Synchronous und Asynchronous Options\n• Network Redundancy mit Multiple Paths und Automatic Rerouting\n• Storage Replication für Data Protection und Availability\n• Service Mesh Architecture für Resilient Inter-service Communication\n• Circuit Breaker Patterns für Graceful Degradation unter Stress\n\n⏱️ Recovery Time und Point Objectives:\n• RTO Optimization durch Automated Failover und Quick Recovery Procedures\n• RPO Minimization mit Continuous Data Replication und Backup Strategies\n• Tiered Recovery Strategies für Different Criticality Levels\n• Recovery Testing und Validation für Reliable Disaster Response\n• Business Impact Analysis für Priority-based Recovery Planning\n\n🌐 Multi-Site Architecture:\n• Primary und Secondary Site Configuration mit Data Synchronization\n• Cross-site Network Connectivity mit Secure VPN und Dedicated Links\n• Site Selection Criteria basierend auf Geographic und Risk Considerations\n• Disaster Declaration Procedures und Automated Site Switching\n• Split-brain Prevention Mechanisms für Data Consistency\n\n📦 Backup und Archive Strategies:\n• Incremental und Differential Backup Schedules für Efficient Storage\n• Offsite Backup Storage für Protection gegen Site-wide Disasters\n• Cloud Backup Integration für Scalable und Cost-effective Storage\n• Backup Validation und Restore Testing für Reliability Assurance\n• Long-term Archive Strategies für Compliance und Historical Analysis\n\n🧪 Testing und Validation:\n• Regular Disaster Recovery Drills für Team Preparedness\n• Automated Testing Frameworks für Continuous Validation\n• Chaos Engineering für Proactive Resilience Testing\n• Recovery Scenario Simulation für Comprehensive Preparedness\n• Documentation und Runbook Maintenance für Effective Response"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie integriert man moderne Cloud-native Technologien in SIEM Architekturen und welche Vorteile bieten Container und Microservices?',
        answer: "Cloud-native Technologien revolutionieren SIEM Architekturen durch erhöhte Flexibilität, Skalierbarkeit und Kosteneffizienz. Container und Microservices ermöglichen modulare, resiliente und agile Cybersecurity-Infrastrukturen, die sich dynamisch an verändernde Anforderungen anpassen können.\n\n🐳 Container Architecture Benefits:\n• Lightweight Virtualization für Resource-efficient Deployment\n• Consistent Runtime Environment für Reliable Application Behavior\n• Rapid Deployment und Scaling für Dynamic Workload Management\n• Isolation und Security Boundaries für Multi-tenant Environments\n• Portable Workloads für Multi-cloud und Hybrid Deployments\n\n🔧 Microservices Design Patterns:\n• Service Decomposition für Modular und Maintainable Architecture\n• API Gateway Pattern für Centralized Request Routing und Security\n• Event-driven Communication für Loose Coupling und Scalability\n• Database per Service für Data Ownership und Independence\n• Circuit Breaker Pattern für Fault Tolerance und Graceful Degradation\n\n☸️ Kubernetes Orchestration:\n• Automated Container Orchestration für Simplified Operations\n• Service Discovery und Load Balancing für Dynamic Service Management\n• Rolling Updates und Blue-Green Deployments für Zero-downtime Releases\n• Resource Management und Auto-scaling für Optimal Performance\n• Security Policies und Network Segmentation für Enhanced Protection\n\n🚀 DevOps Integration:\n• Infrastructure-as-Code für Consistent und Repeatable Deployments\n• CI/CD Pipeline Integration für Automated Testing und Deployment\n• GitOps Workflows für Version-controlled Infrastructure Management\n• Monitoring und Observability für Comprehensive System Visibility\n• Automated Security Scanning für Continuous Vulnerability Assessment\n\n☁️ Cloud-native Security:\n• Identity und Access Management Integration für Secure Service Communication\n• Secret Management für Secure Credential Handling\n• Network Policies für Micro-segmentation und Traffic Control\n• Runtime Security Monitoring für Container und Application Protection\n• Compliance Automation für Regulatory Requirement Adherence\n\n📊 Operational Advantages:\n• Elastic Scaling für Cost-optimized Resource Utilization\n• Faster Time-to-market für New Features und Capabilities\n• Improved Fault Isolation für Better System Resilience\n• Enhanced Developer Productivity durch Simplified Development Workflows\n• Vendor Independence für Reduced Lock-in und Increased Flexibility"
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
