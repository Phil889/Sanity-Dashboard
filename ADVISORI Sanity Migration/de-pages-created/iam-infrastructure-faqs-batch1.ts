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
    console.log('Updating IAM Infrastructure page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-infrastructure' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-infrastructure" not found')
    }
    
    // Create new FAQs for IAM Infrastructure fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist eine strategische IAM-Infrastructure-Architektur entscheidend für den Erfolg moderner Identitätsverwaltung und wie unterscheidet sie sich von traditionellen Ansätzen?',
        answer: "IAM Infrastructure ist das unsichtbare Fundament, das über Erfolg oder Misserfolg jeder Identitätsstrategie entscheidet. Anders als traditionelle monolithische Ansätze erfordert moderne IAM-Infrastructure eine strategische, cloud-native Architektur, die Skalierbarkeit, Performance und Sicherheit optimal vereint. Eine durchdachte Infrastructure-Strategie transformiert IAM von einem technischen Kostenfaktor zu einem strategischen Business-Enabler.\n\n🏗️ Strategische Infrastructure-Foundation:\n• Enterprise-Architektur-Design mit modularen, skalierbaren Komponenten für langfristige Flexibilität\n• Cloud-native Prinzipien mit Microservices-Architektur für optimale Ressourcennutzung und Wartbarkeit\n• Multi-Region-Deployment für globale Verfügbarkeit und Disaster Recovery ohne Performance-Einbußen\n• API-first Design für nahtlose Integration in moderne Anwendungslandschaften und Ecosystem-Connectivity\n• Infrastructure-as-Code für konsistente, reproduzierbare Deployments und Versionskontrolle\n\n🚀 Performance und Skalierbarkeits-Engineering:\n• Auto-Scaling-Mechanismen mit intelligenter Lastverteilung für dynamische Anpassung an Benutzeranforderungen\n• Caching-Strategien und Content Delivery Networks für minimale Latenz und optimale Benutzerfreundlichkeit\n• Database-Sharding und Read-Replicas für horizontale Skalierung bei wachsenden Identitätsvolumen\n• Load-Balancing mit Health-Checks für gleichmäßige Lastverteilung und Ausfallsicherheit\n• Performance-Monitoring mit Real-time Analytics für proaktive Optimierung und Bottleneck-Erkennung\n\n🛡️ Security-by-Design und Compliance-Integration:\n• Defense-in-Depth-Strategien mit mehrschichtigen Sicherheitskontrollen auf Infrastructure-Ebene\n• Network-Segmentation und Micro-Perimeter für granulare Zugriffskontrolle und Threat-Containment\n• Encryption-at-Rest und in-Transit für umfassenden Datenschutz auf allen Infrastructure-Ebenen\n• Compliance-Automation mit integrierten Audit-Trails und Regulatory-Reporting-Mechanismen\n• Threat-Detection und Incident-Response-Integration für proaktive Sicherheitsüberwachung\n\n⚡ DevOps-Integration und Operational Excellence:\n• CI/CD-Pipeline-Integration für automatisierte Testing und Deployment-Prozesse\n• Blue-Green und Canary-Deployment-Strategien für Zero-Downtime-Updates und Risk-Mitigation\n• Configuration-Management mit Version-Control für nachvollziehbare Änderungen und Rollback-Fähigkeiten\n• Monitoring und Alerting mit Machine Learning für prädiktive Wartung und proaktive Problemlösung\n• Disaster Recovery und Business Continuity Planning für minimale Ausfallzeiten und Datenintegrität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Komponenten und Architektur-Patterns bilden eine enterprise-grade IAM-Infrastructure und wie gewährleisten sie optimale Performance und Verfügbarkeit?',
        answer: "Eine enterprise-grade IAM-Infrastructure ist ein hochkomplexes Ökosystem spezialisierter Komponenten, die nahtlos zusammenarbeiten, um skalierbare, hochverfügbare und performante Identitätsdienste zu ermöglichen. Diese Architektur muss sowohl aktuelle Anforderungen erfüllen als auch zukünftiges Wachstum unterstützen, während sie gleichzeitig höchste Sicherheits- und Compliance-Standards gewährleistet.\n\n🏛️ Core Infrastructure-Komponenten:\n• Identity Data Layer mit hochverfügbaren, verteilten Datenbanken für sichere Speicherung aller Identitätsinformationen\n• Authentication Services mit Load-Balancing und Failover-Mechanismen für kontinuierliche Verfügbarkeit\n• Authorization Engine mit Policy-Decision-Points und distributed Caching für schnelle Entscheidungsfindung\n• API Gateway mit Rate-Limiting, Throttling und Security-Controls für sichere Service-Exposition\n• Message Queue Systems für asynchrone Verarbeitung und Event-driven Architecture\n\n⚙️ Cloud-native Orchestrierung und Container-Management:\n• Kubernetes-Orchestrierung mit Auto-Scaling und Self-Healing für resiliente Service-Delivery\n• Container-Registry mit Security-Scanning und Vulnerability-Management für sichere Image-Verwaltung\n• Service Mesh für Microservices-Communication mit Encryption und Traffic-Management\n• Ingress Controllers mit SSL-Termination und Traffic-Routing für optimale Request-Verteilung\n• Persistent Volume Management für stateful Services und Daten-Persistierung\n\n🔄 High-Availability und Disaster Recovery Architecture:\n• Multi-Zone Deployment mit automatischem Failover für kontinuierliche Service-Verfügbarkeit\n• Database Replication mit Master-Slave-Konfiguration für Datenredundanz und Read-Scaling\n• Backup-Strategien mit Point-in-Time Recovery für Datenintegrität und Business Continuity\n• Geographic Load Distribution für globale Performance-Optimierung und Latenz-Minimierung\n• Health-Check-Mechanismen mit automatischer Service-Recovery für proaktive Fehlerbehebung\n\n📊 Monitoring und Observability Infrastructure:\n• Distributed Tracing für End-to-End Request-Verfolgung und Performance-Analyse\n• Metrics Collection mit Time-Series-Databases für historische Performance-Trends\n• Log Aggregation und Centralized Logging für umfassende Audit-Trails und Troubleshooting\n• Alerting Systems mit Machine Learning für intelligente Anomaly Detection\n• Performance Dashboards mit Real-time Visualization für operative Transparenz\n\n🔐 Security Infrastructure und Compliance Framework:\n• Certificate Management mit Automated Rotation für PKI-basierte Sicherheit\n• Secrets Management mit Hardware Security Modules für sichere Credential-Verwaltung\n• Network Security Groups mit Micro-Segmentation für granulare Traffic-Kontrolle\n• Intrusion Detection Systems mit Behavioral Analytics für Advanced Threat Protection\n• Compliance Automation mit Policy-as-Code für kontinuierliche Regulatory Adherence"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie implementiert man erfolgreich eine cloud-native IAM-Infrastructure-Migration und welche strategischen Vorteile bietet sie für moderne Unternehmen?',
        answer: "Cloud-native IAM-Infrastructure-Migration ist eine strategische Transformation, die Unternehmen von traditionellen, monolithischen Systemen zu modernen, skalierbaren und agilen Identitätsplattformen führt. Diese Migration erfordert eine durchdachte Strategie, die technische Exzellenz mit Business-Kontinuität verbindet und dabei innovative Cloud-Technologien optimal nutzt.\n\n🎯 Strategic Migration Planning und Assessment:\n• Current-State-Analysis mit umfassender Bewertung bestehender Infrastructure-Komponenten und Dependencies\n• Future-State-Vision mit Cloud-native Architektur-Design und Technology-Stack-Selection\n• Migration-Roadmap mit Phasen-Ansatz für minimale Business-Disruption und Risk-Mitigation\n• Dependency-Mapping für Identifikation kritischer Integrationen und Datenflüsse\n• Cost-Benefit-Analysis mit ROI-Projektion für strategische Investment-Entscheidungen\n\n☁️ Cloud-native Architecture-Transformation:\n• Microservices-Decomposition mit Domain-driven Design für modulare, wartbare Services\n• Container-Orchestrierung mit Kubernetes für skalierbare, resiliente Deployment-Strategien\n• Serverless-Integration für Event-driven Processing und Cost-optimierte Ressourcennutzung\n• API-Gateway-Implementation für centralized Security und Traffic-Management\n• Service Mesh-Deployment für secure Inter-service Communication und Observability\n\n🔄 Migration-Execution und Data-Transition:\n• Strangler Fig Pattern für graduelle Legacy-System-Ablösung ohne Service-Unterbrechung\n• Blue-Green Deployment für Zero-Downtime Migration und Rollback-Fähigkeiten\n• Data Migration mit ETL-Pipelines für sichere, konsistente Datenübertragung\n• Identity Synchronization mit Real-time Replication für nahtlose User-Experience\n• Testing-Automation mit Comprehensive Test-Suites für Quality-Assurance und Regression-Prevention\n\n🚀 Performance-Optimierung und Skalierbarkeits-Enablement:\n• Auto-Scaling-Configuration mit Predictive Analytics für proaktive Kapazitätsanpassung\n• Global Load Balancing für optimale Geographic Distribution und Latenz-Minimierung\n• Caching-Strategies mit Redis und CDN-Integration für Performance-Maximierung\n• Database-Optimization mit Read-Replicas und Connection-Pooling für Throughput-Steigerung\n• Network-Optimization mit VPC-Peering und Direct-Connect für Bandwidth-Effizienz\n\n💡 Innovation-Enablement und Competitive Advantages:\n• DevOps-Integration mit CI/CD-Pipelines für beschleunigte Feature-Delivery\n• Infrastructure-as-Code für konsistente, reproduzierbare Environment-Provisioning\n• Machine Learning Integration für Intelligent Identity Analytics und Predictive Insights\n• Edge Computing Support für IoT-Integration und Low-Latency Applications\n• Multi-Cloud Strategy für Vendor-Independence und Best-of-Breed Technology-Adoption"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Performance-Optimierungsstrategien und Monitoring-Ansätze sind entscheidend für eine hochperformante IAM-Infrastructure in enterprise-Umgebungen?',
        answer: "Performance-Optimierung in IAM-Infrastructure ist ein kontinuierlicher Prozess, der technische Exzellenz mit strategischer Planung verbindet. Eine hochperformante IAM-Infrastructure gewährleistet nicht nur optimale Benutzerfreundlichkeit, sondern auch Geschäftskontinuität und Wettbewerbsvorteile durch schnelle, zuverlässige Identitätsdienste.\n\n⚡ Advanced Performance-Engineering und Optimization:\n• Database-Performance-Tuning mit Index-Optimization und Query-Optimization für minimale Response-Times\n• Connection-Pooling und Database-Sharding für horizontale Skalierung und Load-Distribution\n• Caching-Strategies mit Multi-Level Caching für häufig abgerufene Identitätsdaten\n• Content Delivery Networks für globale Performance-Optimierung und Latenz-Reduktion\n• Asynchronous Processing für Non-blocking Operations und verbesserte Throughput-Raten\n\n📊 Comprehensive Monitoring und Observability Framework:\n• Real-time Performance-Metrics mit Custom Dashboards für operative Transparenz\n• Application Performance Monitoring mit End-to-End Transaction-Tracing\n• Infrastructure Monitoring mit Resource-Utilization-Tracking und Capacity-Planning\n• User Experience Monitoring mit Synthetic Transactions und Real User Monitoring\n• Business Metrics Tracking für Performance-Impact auf Geschäftsprozesse\n\n🔍 Proactive Analytics und Predictive Optimization:\n• Machine Learning-basierte Anomaly Detection für frühzeitige Problem-Identifikation\n• Predictive Analytics für Capacity Planning und Resource-Allocation\n• Performance-Trend-Analysis für proaktive Optimierung und Bottleneck-Prevention\n• Automated Alerting mit Intelligent Thresholds für schnelle Incident-Response\n• Root Cause Analysis mit Correlation-Engines für effiziente Problem-Resolution\n\n🎛️ Dynamic Resource-Management und Auto-Scaling:\n• Horizontal Pod Autoscaling mit Custom Metrics für bedarfsgerechte Skalierung\n• Vertical Pod Autoscaling für optimale Resource-Allocation pro Service\n• Cluster Autoscaling für dynamische Node-Provisioning bei Lastspitzen\n• Load-based Scaling mit Predictive Algorithms für proaktive Kapazitätsanpassung\n• Cost-optimized Scaling mit Spot-Instance-Integration für Budget-Effizienz\n\n🛠️ Continuous Performance-Improvement und Optimization-Cycles:\n• Performance-Testing-Automation mit Load-Testing und Stress-Testing in CI/CD-Pipelines\n• Chaos Engineering für Resilience-Testing und Failure-Scenario-Validation\n• Performance-Regression-Testing für Quality-Assurance bei Code-Changes\n• Benchmark-Establishment mit Industry-Standard-Comparisons für Competitive-Analysis\n• Performance-Review-Cycles mit Stakeholder-Alignment für kontinuierliche Verbesserung"
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
