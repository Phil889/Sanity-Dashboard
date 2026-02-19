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
    console.log('Updating IAM Plattform Erstellen page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-plattform-erstellen' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-plattform-erstellen" not found')
    }
    
    // Create new FAQs for IAM Platform Creation fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die strategische Entwicklung einer IAM Plattform mehr als nur technische Implementation und wie positioniert ADVISORI diesen kritischen Unternehmensbaustein?',
        answer: "Die Entwicklung einer IAM Plattform ist eine der strategisch wichtigsten technologischen Investitionen moderner Unternehmen und geht weit über die reine technische Implementation hinaus. Eine professionell entwickelte IAM Plattform wird zum zentralen Nervensystem der digitalen Unternehmensinfrastruktur und entscheidet maßgeblich über Sicherheit, Skalierbarkeit und Innovationsfähigkeit der gesamten Organisation. ADVISORI versteht IAM Plattform-Entwicklung als ganzheitlichen Transformationsprozess, der Business-Strategie, Sicherheitsarchitektur und operative Exzellenz vereint.\n\n🎯 Strategische Business-Transformation durch IAM Plattformen:\n• Zentrale Identity Governance als Enabler für digitale Geschäftsmodelle und Cloud-first Strategien\n• Zero-Trust-Security-Framework für moderne Bedrohungslandschaften und Remote-Work-Szenarien\n• API-first Architecture für nahtlose Integration in digitale Ecosysteme und Partner-Netzwerke\n• Compliance-by-Design für automatisierte Erfüllung regulatorischer Anforderungen und Audit-Bereitschaft\n• Scalable Enterprise-Architecture für globale Expansion und M&A-Integration\n\n🛡️ ADVISORI Platform-Excellence und Differenzierung:\n• End-to-End Plattform-Entwicklung von strategischer Konzeption bis produktivem Betrieb\n• Cloud-native Expertise mit Multi-Cloud und Hybrid-Integration für maximale Flexibilität\n• Security-by-Design mit Zero-Trust-Prinzipien und KI-gestützter Threat Detection\n• DevOps-Integration für kontinuierliche Delivery und agile Weiterentwicklung\n• Enterprise-grade Performance-Engineering für mission-critical Workloads\n\n🚀 Innovation-Enablement und Future-Readiness:\n• Microservices-basierte Architektur für modulare Erweiterbarkeit und Technology-Evolution\n• Container-Orchestrierung mit Kubernetes für Cloud-native Deployment und Auto-Scaling\n• Event-driven Architecture für Real-time Synchronisation und responsive User Experience\n• AI/ML-Integration für intelligente Automatisierung und prädiktive Sicherheitsanalysen\n• Open Standards und API-Gateway für Vendor-Independence und Ecosystem-Connectivity\n\n📊 Business-Impact und ROI-Maximierung:\n• Operational Excellence durch Automatisierung manueller Prozesse und Self-Service-Capabilities\n• Risk Mitigation durch robuste Sicherheitsarchitekturen und Compliance-Automation\n• Cost Optimization durch Cloud-native Effizienz und Resource-Optimization\n• Innovation Acceleration durch Platform-as-a-Service Capabilities für interne Entwicklerteams\n• Competitive Advantage durch schnellere Time-to-Market und digitale Differenzierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Architektur-Entscheidungen bestimmen den Erfolg einer enterprise-grade IAM Plattform und wie gewährleistet man Skalierbarkeit für globale Deployment-Szenarien?',
        answer: "Die Architektur-Entscheidungen in der frühen Entwicklungsphase einer IAM Plattform sind fundamental für deren langfristigen Erfolg und bestimmen maßgeblich Skalierbarkeit, Performance, Sicherheit und Wartbarkeit. Enterprise-grade IAM Plattformen erfordern eine durchdachte Architektur, die nicht nur aktuelle Anforderungen erfüllt, sondern auch für zukünftige Herausforderungen und Technologie-Evolution gerüstet ist. Globale Deployment-Szenarien stellen zusätzliche Anforderungen an Latenz, Compliance und Disaster Recovery.\n\n🏗️ Fundamentale Architektur-Patterns für Enterprise-Scale:\n• Microservices-Architecture mit Domain-Driven Design für modulare Entwicklung und unabhängige Skalierung\n• Event-Driven Architecture mit Message-Queuing für lose Kopplung und asynchrone Verarbeitung\n• API-Gateway-Pattern für zentrale Authentifizierung, Rate-Limiting und Service-Discovery\n• CQRS und Event-Sourcing für Performance-Optimierung und Audit-Trail-Compliance\n• Circuit-Breaker-Pattern für Resilience und Graceful Degradation bei Teilausfällen\n\n☁️ Cloud-native Design-Prinzipien für globale Skalierung:\n• Container-Orchestrierung mit Kubernetes für elastische Skalierung und Multi-Region-Deployment\n• Service-Mesh-Integration für Traffic-Management, Security und Observability\n• Infrastructure-as-Code mit Terraform für konsistente Deployment-Automation\n• GitOps-Workflows für Continuous Deployment und Configuration-Management\n• Multi-Cloud-Strategy für Vendor-Independence und Geographic Distribution\n\n🔐 Security-by-Design für Zero-Trust-Architecture:\n• Defense-in-Depth mit mehrschichtigen Sicherheitskontrollen auf allen Architektur-Ebenen\n• Encryption-at-Rest und Encryption-in-Transit für umfassenden Datenschutz\n• Secrets-Management mit Hardware Security Modules für kritische Credentials\n• Network-Segmentation mit Micro-Perimeters für Lateral-Movement-Prevention\n• Security-Monitoring mit SIEM-Integration für Real-time Threat Detection\n\n📊 Performance-Engineering für Enterprise-Workloads:\n• Horizontal Scaling mit Load-Balancing und Auto-Scaling für variable Workloads\n• Caching-Strategies mit Redis und CDN für Latency-Optimization\n• Database-Sharding und Read-Replicas für High-Availability und Performance\n• Asynchronous Processing für Resource-intensive Operations\n• Performance-Monitoring mit APM-Tools für kontinuierliche Optimierung\n\n🌐 Global Deployment und Multi-Region-Architecture:\n• Geographic Load-Balancing für optimale User Experience und Disaster Recovery\n• Data-Residency-Compliance für GDPR und lokale Regulierungsanforderungen\n• Edge-Computing-Integration für reduzierte Latenz und lokale Processing\n• Cross-Region-Replication für Business Continuity und Backup-Strategien\n• Time-Zone-aware Processing für globale Workflow-Orchestrierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie implementiert man eine cloud-native IAM Plattform mit DevOps-Integration und welche Rolle spielen Container-Orchestrierung und CI/CD-Pipelines für kontinuierliche Innovation?',
        answer: "Cloud-native IAM Plattform-Entwicklung mit DevOps-Integration repräsentiert den modernsten Ansatz für enterprise-grade Identity Management und ermöglicht es Organisationen, von traditionellen monolithischen Systemen zu agilen, skalierbaren und wartbaren Plattformen zu migrieren. Container-Orchestrierung und CI/CD-Pipelines sind dabei nicht nur technische Enabler, sondern strategische Differenziatoren, die kontinuierliche Innovation und rapid Response auf sich ändernde Geschäftsanforderungen ermöglichen.\n\n🐳 Container-Orchestrierung mit Kubernetes für IAM-Workloads:\n• Microservices-Deployment mit Kubernetes für granulare Skalierung einzelner IAM-Komponenten\n• Service-Discovery und Load-Balancing für dynamische Service-Kommunikation\n• ConfigMaps und Secrets für sichere Configuration-Management ohne Code-Changes\n• Persistent Volumes für stateful IAM-Services wie Identity Stores und Session Management\n• Namespace-Isolation für Multi-Tenancy und Environment-Separation\n\n🔄 CI/CD-Pipeline-Design für kontinuierliche IAM-Innovation:\n• Git-based Workflows mit Feature-Branches und Pull-Request-Reviews für Code-Quality\n• Automated Testing mit Unit-Tests, Integration-Tests und Security-Scans\n• Blue-Green-Deployment für Zero-Downtime-Updates kritischer IAM-Services\n• Canary-Releases für Risk-Mitigation bei neuen Feature-Rollouts\n• Rollback-Strategien für schnelle Recovery bei Production-Issues\n\n☁️ Cloud-native Development-Practices für IAM-Plattformen:\n• Twelve-Factor-App-Methodology für Cloud-optimierte Anwendungsentwicklung\n• Stateless-Design für horizontale Skalierbarkeit und Container-Portabilität\n• Health-Checks und Readiness-Probes für Self-Healing-Capabilities\n• Graceful-Shutdown-Handling für unterbrechungsfreie Service-Updates\n• Resource-Limits und Quality-of-Service für predictable Performance\n\n🛠️ DevOps-Toolchain für IAM-Platform-Engineering:\n• Infrastructure-as-Code mit Terraform für reproduzierbare Environment-Provisioning\n• Configuration-Management mit Ansible für konsistente System-Configuration\n• Monitoring-Stack mit Prometheus, Grafana und ELK für Observability\n• Security-Scanning mit SAST, DAST und Container-Image-Scanning\n• Artifact-Management mit Container-Registries und Dependency-Scanning\n\n🚀 Continuous Innovation durch Platform-Engineering:\n• Feature-Flags für graduelle Feature-Rollouts und A/B-Testing\n• API-Versioning für Backward-Compatibility und smooth Migrations\n• Documentation-as-Code für automatisch generierte API-Documentation\n• Performance-Testing-Integration für Regression-Detection\n• Chaos-Engineering für Resilience-Testing und Failure-Preparation\n\n📊 Observability und Continuous Improvement:\n• Distributed-Tracing für End-to-End-Visibility in Microservices-Architectures\n• Metrics-Collection für Performance-Monitoring und Capacity-Planning\n• Log-Aggregation für Centralized Logging und Security-Event-Analysis\n• Alerting-Strategies für Proactive Incident-Management\n• SLI/SLO-Definition für Service-Level-Management und Customer-Experience-Optimization"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Integration von Zero-Trust-Security-Frameworks in IAM Plattformen und wie adressiert man Performance-Anforderungen bei kontinuierlicher Verifikation?',
        answer: "Die Integration von Zero-Trust-Security-Frameworks in IAM Plattformen stellt eine der komplexesten Herausforderungen moderner Cybersecurity dar und erfordert eine fundamentale Neugestaltung traditioneller Sicherheitsarchitekturen. Zero-Trust-Prinzipien wie kontinuierliche Verifikation und Least-Privilege-Access müssen dabei mit enterprise-grade Performance-Anforderungen und Benutzerfreundlichkeit in Einklang gebracht werden. Diese Balance zwischen maximaler Sicherheit und optimaler Performance erfordert innovative Architektur-Ansätze und intelligente Optimierungsstrategien.\n\n🛡️ Zero-Trust-Architecture-Integration in IAM-Plattformen:\n• Never-Trust-Always-Verify-Prinzip mit kontinuierlicher Identity-Validation bei jedem Request\n• Micro-Segmentation mit granularen Network-Policies und Application-Level-Controls\n• Least-Privilege-Access mit Just-in-Time-Elevation und Time-based Access-Controls\n• Continuous-Risk-Assessment mit Real-time Threat-Intelligence und Behavioral-Analytics\n• Assume-Breach-Mentality mit Lateral-Movement-Prevention und Containment-Strategies\n\n⚡ Performance-Optimization für kontinuierliche Verifikation:\n• Intelligent-Caching-Strategies für Authentication-Tokens und Authorization-Decisions\n• Asynchronous-Verification mit Background-Processing für Non-Critical-Checks\n• Risk-based-Authentication mit adaptiven Verification-Requirements\n• Edge-Computing-Integration für lokale Policy-Enforcement und Latency-Reduction\n• Machine-Learning-Optimization für Predictive-Caching und Pre-Authentication\n\n🔍 Advanced Threat-Detection ohne Performance-Impact:\n• Behavioral-Analytics mit User-Entity-Behavior-Analytics für Anomaly-Detection\n• Stream-Processing für Real-time Security-Event-Analysis ohne Batch-Delays\n• AI-powered-Risk-Scoring mit kontinuierlicher Risikobewertung im Hintergrund\n• Threat-Intelligence-Integration mit automatischer IOC-Matching und Response\n• Deception-Technology für Early-Warning bei Advanced-Persistent-Threats\n\n🚀 Scalable Security-Architecture für Enterprise-Workloads:\n• Distributed-Policy-Enforcement mit Edge-Gateways und Local-Decision-Points\n• Event-driven-Security mit Real-time Policy-Updates und Dynamic-Response\n• Security-Service-Mesh für Transparent-Security ohne Application-Changes\n• Hardware-Security-Module-Integration für High-Performance-Cryptographic-Operations\n• GPU-Acceleration für Machine-Learning-basierte Security-Analytics\n\n📊 Monitoring und Continuous Security-Improvement:\n• Security-Metrics-Collection für Threat-Landscape-Analysis und Risk-Quantification\n• Automated-Incident-Response mit Playbook-Execution und Containment-Actions\n• Security-Posture-Assessment mit kontinuierlicher Vulnerability-Analysis\n• Compliance-Monitoring für Real-time Regulatory-Adherence und Audit-Readiness\n• Threat-Hunting-Capabilities mit Proactive-Security-Investigation und Intelligence-Gathering\n\n🔧 Implementation-Strategies für Zero-Trust-IAM-Integration:\n• Phased-Rollout mit Pilot-Groups und Gradual-Expansion für Risk-Mitigation\n• Legacy-Integration mit Adapter-Patterns und Gradual-Migration-Strategies\n• User-Experience-Optimization mit Transparent-Security und Minimal-Friction\n• Performance-Testing mit Load-Simulation und Bottleneck-Identification\n• Disaster-Recovery-Planning mit Security-Incident-Response und Business-Continuity"
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
