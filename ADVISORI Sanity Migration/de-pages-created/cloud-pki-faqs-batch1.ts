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
    console.log('Updating Cloud PKI page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cloud-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "cloud-pki" not found')
    }
    
    // Create new FAQs for Cloud PKI fundamentals and benefits
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist Cloud PKI und welche Vorteile bietet es gegenüber traditionellen PKI-Implementierungen?',
        answer: "Cloud PKI repräsentiert die nächste Generation der Public Key Infrastructure, die speziell für moderne Cloud-Umgebungen entwickelt wurde. Anders als traditionelle PKI-Systeme, die oft monolithisch und schwer skalierbar sind, nutzt Cloud PKI die inhärenten Vorteile von Cloud-Technologien wie elastische Skalierung, globale Verfügbarkeit und API-first Architekturen.\n\n☁️ Cloud-native Architektur und Skalierbarkeit:\n• Microservices-basierte PKI-Komponenten ermöglichen horizontale Skalierung basierend auf tatsächlichem Bedarf\n• Serverless Functions für kostenoptimierte PKI-Operationen ohne Infrastruktur-Overhead\n• Auto-scaling Mechanismen passen sich automatisch an schwankende Zertifikatsanforderungen an\n• Event-driven Workflows nutzen Cloud-native Messaging-Services für asynchrone PKI-Prozesse\n• Globale Verfügbarkeit durch Multi-Region-Deployments ohne komplexe Replikationslogik\n\n🚀 Operative Exzellenz und Agilität:\n• API-first Design ermöglicht nahtlose Integration in moderne Entwicklungsworkflows und DevOps-Pipelines\n• Infrastructure as Code Prinzipien für reproduzierbare und versionierte PKI-Deployments\n• Kontinuierliche Integration und Deployment von PKI-Konfigurationen durch GitOps-Workflows\n• Automatisierte Testing und Validation von PKI-Änderungen vor Produktionsdeployment\n• Schnelle Iteration und Anpassung an neue Geschäftsanforderungen ohne langwierige Change-Prozesse\n\n💰 Kosteneffizienz und Ressourcenoptimierung:\n• Pay-as-you-use Modelle reduzieren Fixkosten und ermöglichen bedarfsgerechte Abrechnung\n• Eliminierung von Hardware-Investitionen und Wartungskosten für PKI-Infrastrukturen\n• Optimierte Ressourcennutzung durch Cloud-native Load Balancing und Auto-scaling\n• Reduzierte operative Kosten durch Automatisierung und Self-Service-Funktionalitäten\n• Transparente Kostenstrukturen mit detailliertem Usage-Tracking und Budgetkontrollen\n\n🔧 Entwicklerfreundlichkeit und Integration:\n• RESTful APIs und SDKs für alle gängigen Programmiersprachen und Frameworks\n• Umfassende Dokumentation und Code-Beispiele für schnelle Implementierung\n• Webhook-basierte Notifications für Echtzeit-Integration in bestehende Systeme\n• Container-native PKI-Services für Kubernetes und andere Orchestrierungsplattformen\n• Nahtlose Integration in CI/CD-Pipelines für automatisierte Certificate Lifecycle Management\n\n🌐 Multi-Cloud und Hybrid-Strategien:\n• Herstellerunabhängige Implementierungen vermeiden Vendor Lock-in Risiken\n• Cross-Cloud PKI-Governance für einheitliche Sicherheitsrichtlinien über verschiedene Cloud-Anbieter\n• Hybrid Cloud PKI für nahtlose Integration von On-Premises und Cloud-Infrastrukturen\n• Disaster Recovery und Business Continuity durch Multi-Cloud-Redundanz\n• Flexible Migration zwischen Cloud-Anbietern ohne Unterbrechung der PKI-Services"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich Cloud PKI von traditionellen On-Premises PKI-Lösungen in Bezug auf Skalierbarkeit und Performance?',
        answer: "Cloud PKI transformiert die Art, wie PKI-Infrastrukturen skalieren und performen, durch die Nutzung moderner Cloud-Technologien und Architekturen. Der Unterschied zu traditionellen On-Premises Lösungen ist fundamental und betrifft alle Aspekte der PKI-Operations.\n\n📈 Elastische Skalierung vs. statische Kapazitäten:\n• Cloud PKI skaliert automatisch basierend auf tatsächlichem Bedarf ohne manuelle Intervention oder Kapazitätsplanung\n• Horizontale Skalierung durch Hinzufügung zusätzlicher Compute-Instanzen bei Lastspitzen\n• Vertikale Skalierung durch dynamische Anpassung von CPU und Memory-Ressourcen\n• On-Premises PKI erfordert Vorab-Investitionen in Hardware basierend auf Peak-Load Schätzungen\n• Eliminierung von Über- oder Unterkapazitäten durch bedarfsgerechte Ressourcenzuteilung\n\n⚡ Performance-Optimierung durch Cloud-native Technologien:\n• Content Delivery Networks für globale Verteilung von PKI-Services mit minimaler Latenz\n• Edge Computing für lokale PKI-Operationen näher zu den Endnutzern\n• In-Memory Caching und Redis-basierte Session-Stores für schnelle Certificate Lookups\n• Load Balancing mit intelligenten Routing-Algorithmen für optimale Ressourcenverteilung\n• Database Sharding und Read-Replicas für hochperformante Certificate Store Operations\n\n🔄 Event-driven vs. synchrone Architekturen:\n• Asynchrone PKI-Workflows durch Cloud-native Messaging-Services wie AWS SQS oder Azure Service Bus\n• Event-sourcing für auditierbare und replay-fähige PKI-Operationen\n• Microservices-Architektur ermöglicht unabhängige Skalierung einzelner PKI-Komponenten\n• Circuit Breaker Patterns für Resilience bei Teilausfällen einzelner Services\n• Eventual Consistency Modelle für hochverfügbare PKI-Operations\n\n🌍 Globale Verfügbarkeit und Multi-Region-Deployments:\n• Automatische Failover-Mechanismen zwischen verschiedenen Cloud-Regionen\n• Cross-Region Replikation von Certificate Stores für Disaster Recovery\n• Geo-distributed PKI-Services für compliance-konforme Datenresidenz\n• Active-Active Deployments für kontinuierliche Verfügbarkeit ohne Single Points of Failure\n• Intelligent DNS-Routing für optimale Performance basierend auf Nutzerstandort\n\n📊 Monitoring und Observability:\n• Real-time Metriken und Dashboards für PKI-Performance und Ressourcennutzung\n• Distributed Tracing für End-to-End Visibility in komplexen PKI-Workflows\n• Predictive Analytics für proaktive Skalierungsentscheidungen\n• Automated Alerting bei Performance-Degradation oder Kapazitätsengpässen\n• Custom Metrics und KPIs für business-spezifische PKI-Anforderungen\n\n🔧 Automatisierung vs. manuelle Prozesse:\n• Infrastructure as Code für reproduzierbare und versionierte PKI-Deployments\n• Automated Scaling Policies basierend auf definierten Metriken und Schwellwerten\n• Self-healing Systeme für automatische Recovery bei Komponentenausfällen\n• Continuous Deployment von PKI-Updates ohne Service-Unterbrechungen\n• Automated Testing und Validation für alle PKI-Konfigurationsänderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche spezifischen Cloud-Plattformen und Services unterstützt Cloud PKI und wie erfolgt die Integration?',
        answer: "Cloud PKI ist darauf ausgelegt, nahtlos mit allen führenden Cloud-Plattformen zu integrieren und deren native Services optimal zu nutzen. Die Integration erfolgt durch spezialisierte Adapter und APIs, die die spezifischen Stärken jeder Cloud-Plattform ausschöpfen.\n\n🔶 Amazon Web Services Integration:\n• AWS Certificate Manager für automatisierte SSL/TLS Certificate Provisioning und Renewal\n• AWS Private Certificate Authority für interne PKI-Hierarchien mit AWS-nativer Skalierung\n• AWS CloudHSM Integration für FIPS-konforme Hardware Security Module Services\n• AWS Secrets Manager für sichere Speicherung und Rotation von PKI-Schlüsselmaterial\n• AWS Lambda Functions für serverless PKI-Workflows und Event-Processing\n• AWS API Gateway für sichere und skalierbare PKI-API Endpoints\n\n🔷 Microsoft Azure Integration:\n• Azure Key Vault für zentrale Verwaltung von Zertifikaten, Schlüsseln und Secrets\n• Azure Managed HSM für dedizierte Hardware Security Module Services\n• Azure Active Directory für Identity-basierte PKI-Governance und Access Control\n• Azure Functions für event-driven PKI-Automatisierung und Workflows\n• Azure Application Gateway für SSL/TLS Termination mit automatischem Certificate Management\n• Azure DevOps Integration für CI/CD-basierte PKI-Deployments\n\n🟡 Google Cloud Platform Integration:\n• Google Cloud Certificate Authority Service für vollständig verwaltete Private CAs\n• Google Cloud KMS für Hardware Security Module Services und Key Management\n• Google Cloud Identity für föderierte PKI-Authentifizierung und Authorization\n• Google Cloud Functions für serverless PKI-Event-Processing\n• Google Cloud Load Balancer für automatisches SSL Certificate Management\n• Google Cloud Build für kontinuierliche PKI-Integration und Deployment\n\n🔗 Multi-Cloud und Hybrid-Integrationen:\n• Kubernetes-native PKI-Services für Container-Orchestrierung über verschiedene Cloud-Anbieter\n• Terraform Provider für Infrastructure as Code Deployments über Multi-Cloud-Umgebungen\n• Helm Charts für standardisierte PKI-Deployments in Kubernetes-Clustern\n• Istio Service Mesh Integration für automatische mTLS und Certificate Rotation\n• HashiCorp Vault Integration für erweiterte Secrets Management Funktionalitäten\n\n🛠️ Integration-Patterns und Best Practices:\n• RESTful APIs mit OpenAPI Spezifikationen für standardisierte Integration\n• Webhook-basierte Event Notifications für Real-time Integration in bestehende Systeme\n• SDK und Client Libraries für alle gängigen Programmiersprachen\n• SCEP und EST Protocol Support für Legacy-System Integration\n• ACME Protocol Implementation für automatisierte Certificate Lifecycle Management\n\n🔄 DevOps und CI/CD Integration:\n• GitOps-Workflows für versionierte PKI-Konfiguration und Deployment\n• Jenkins, GitLab CI und GitHub Actions Plugins für PKI-Pipeline Integration\n• Docker Container Images für konsistente PKI-Deployments über verschiedene Umgebungen\n• Ansible und Puppet Modules für Configuration Management und Automation\n• Monitoring Integration mit Prometheus, Grafana und ELK Stack für umfassende Observability"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet Cloud PKI Sicherheit und Compliance in Multi-Cloud-Umgebungen?',
        answer: "Cloud PKI implementiert umfassende Sicherheits- und Compliance-Frameworks, die speziell für die Herausforderungen von Multi-Cloud-Umgebungen entwickelt wurden. Die Sicherheitsarchitektur basiert auf Zero-Trust-Prinzipien und Defense-in-Depth-Strategien.\n\n🛡️ Zero-Trust Security Architecture:\n• Kontinuierliche Authentifizierung und Authorization für alle PKI-Operationen ohne implizites Vertrauen\n• Micro-Segmentierung von PKI-Services mit granularen Access Controls und Network Policies\n• Least Privilege Access Prinzipien für minimale Berechtigungen basierend auf tatsächlichen Anforderungen\n• Multi-Factor Authentication für alle administrativen PKI-Zugriffe und kritischen Operationen\n• Continuous Security Monitoring mit Behavioral Analytics für Anomalie-Erkennung\n\n🔐 Kryptographische Sicherheit und Key Management:\n• Hardware Security Modules mit FIPS 140-2 Level 3/4 Zertifizierung für Root Key Protection\n• Quantum-resistant Kryptographie-Algorithmen für zukunftssichere PKI-Implementierungen\n• Key Escrow und Split-Knowledge Verfahren für sichere Key Recovery Prozesse\n• Automated Key Rotation mit konfigurierbaren Zyklen für alle PKI-Komponenten\n• Secure Key Distribution über verschlüsselte Kanäle mit Perfect Forward Secrecy\n\n📋 Multi-Cloud Compliance Management:\n• Einheitliche Compliance-Frameworks über verschiedene Cloud-Anbieter hinweg\n• Automated Compliance Monitoring mit Real-time Alerting bei Policy-Verletzungen\n• Audit Trail Aggregation aus verschiedenen Cloud-Umgebungen für zentrale Compliance-Berichte\n• Data Residency Controls für geografische Compliance-Anforderungen\n• Regulatory Mapping für automatische Anpassung an lokale Gesetze und Vorschriften\n\n🌐 Cross-Cloud Security Governance:\n• Unified Policy Management für konsistente Sicherheitsrichtlinien über alle Cloud-Umgebungen\n• Federated Identity Management für sichere Cross-Cloud PKI-Operationen\n• Encrypted Inter-Cloud Communication für sichere PKI-Datenübertragung zwischen Clouds\n• Centralized Security Information and Event Management für holistische Threat Detection\n• Cross-Cloud Incident Response Procedures für koordinierte Sicherheitsereignis-Behandlung\n\n🔍 Continuous Security Assessment:\n• Automated Vulnerability Scanning für alle PKI-Komponenten und Dependencies\n• Penetration Testing und Red Team Exercises für proaktive Sicherheitsbewertung\n• Security Configuration Baselines mit Continuous Compliance Monitoring\n• Threat Intelligence Integration für proaktive Bedrohungserkennung und Mitigation\n• Security Metrics und KPIs für messbare Sicherheitsverbesserungen\n\n📊 Audit und Forensics:\n• Immutable Audit Logs mit kryptographischer Integrität für forensische Untersuchungen\n• Blockchain-basierte Audit Trails für manipulationssichere Compliance-Nachweise\n• Real-time Compliance Dashboards für kontinuierliche Überwachung des Compliance-Status\n• Automated Compliance Reporting für regulatorische Anforderungen\n• Digital Forensics Capabilities für detaillierte Incident Investigation und Root Cause Analysis"
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
