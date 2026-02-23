import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Microsoft Cloud PKI page with FAQ batch 3...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'microsoft-cloud-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "microsoft-cloud-pki" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche DevOps und CI/CD Integration-Möglichkeiten gibt es für Microsoft Cloud PKI und wie wird Certificate-as-Code implementiert?',
        answer: "DevOps und CI/CD Integration für Microsoft Cloud PKI ermöglicht die Behandlung von Zertifikaten als Code-Artefakte, wodurch moderne Software-Entwicklungspraktiken auf PKI-Management angewendet werden können. Diese Herangehensweise revolutioniert traditionelle Certificate Management-Prozesse durch Automatisierung, Versionskontrolle und kontinuierliche Integration.\n\n🔄 Azure DevOps Pipeline Integration:\n• Certificate Deployment Tasks automatisieren Zertifikatsverteilung in Build und Release Pipelines\n• Certificate Validation Steps überprüfen Certificate Health vor Production Deployments\n• Certificate Rotation Workflows integrieren automatische Renewal Processes in DevOps Cycles\n• Certificate Testing Frameworks validieren Certificate Functionality in verschiedenen Umgebungen\n• Certificate Rollback Mechanisms ermöglichen sichere Rückkehr zu vorherigen Certificate Versionen\n\n📦 Infrastructure as Code (IaC):\n• ARM Templates definieren Certificate Infrastructure deklarativ und wiederholbar\n• Terraform Providers ermöglichen Multi-Cloud Certificate Management\n• Bicep Templates vereinfachen Azure Certificate Resource Definitions\n• Pulumi Integration unterstützt Certificate Infrastructure in verschiedenen Programmiersprachen\n• CloudFormation Cross-Stack References verbinden Certificate Resources mit anderen AWS Services\n\n🔧 GitOps Certificate Management:\n• Git Repository Certificate Policies ermöglichen Versionskontrolle für Certificate Configurations\n• Pull Request Workflows implementieren Peer Review für Certificate Changes\n• Branch Protection Rules kontrollieren Certificate Policy Modifications\n• Automated Testing validiert Certificate Configurations vor Merge\n• Git Hooks triggern Certificate Deployment Processes bei Code Changes\n\n🚀 Container und Kubernetes Integration:\n• Certificate Operator für Kubernetes automatisiert Certificate Lifecycle in Container Environments\n• Helm Charts kapseln Certificate Deployment Patterns für wiederverwendbare Installationen\n• Secret Management integriert Certificates sicher in Container Workloads\n• Service Mesh Certificate Integration automatisiert mTLS für Microservice Communication\n• Certificate Rotation ohne Downtime durch Rolling Updates und Health Checks"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie wird Zero Trust Architecture mit Microsoft Cloud PKI implementiert und welche Certificate-basierte Authentifizierung Strategien gibt es?',
        answer: "Zero Trust Architecture mit Microsoft Cloud PKI implementiert das Prinzip \"Never Trust, Always Verify\" durch umfassende Certificate-basierte Authentifizierung und kontinuierliche Verifikation. Diese Architektur eliminiert implizites Vertrauen und erfordert explizite Validierung für jeden Zugriff auf Ressourcen.\n\n🛡️ Certificate-based Identity Verification:\n• Device Certificate Authentication validiert Geräte-Identitäten vor Netzwerkzugriff\n• User Certificate Authentication implementiert starke Benutzer-Authentifizierung ohne Passwörter\n• Application Certificate Authentication sichert Service-to-Service Kommunikation\n• API Certificate Authentication schützt REST und GraphQL Endpoints\n• Certificate Pinning verhindert Man-in-the-Middle Angriffe durch Certificate Validation\n\n🔐 Conditional Access Integration:\n• Certificate-based Conditional Access Policies definieren granulare Zugriffsbedingungen\n• Risk-based Authentication nutzt Certificate Attributes für Risikobewertung\n• Location-based Certificate Validation implementiert geografische Zugriffsbeschränkungen\n• Time-based Certificate Access kontrolliert zeitliche Zugriffsfenster\n• Compliance-based Certificate Requirements erzwingen Device Compliance vor Zugriff\n\n🌐 Network Segmentation:\n• Certificate-based Network Access Control (NAC) segmentiert Netzwerke basierend auf Certificate Attributes\n• Software-Defined Perimeter (SDP) nutzt Certificates für dynamische Netzwerk-Segmentierung\n• Micro-Segmentation implementiert granulare Netzwerk-Isolation durch Certificate Policies\n• VLAN Assignment basierend auf Certificate Eigenschaften automatisiert Netzwerk-Platzierung\n• Network Policy Enforcement Points (PEP) validieren Certificates für Netzwerkzugriff\n\n📱 Endpoint Protection:\n• Certificate-based Endpoint Detection and Response (EDR) identifiziert Geräte durch Certificate Fingerprints\n• Mobile Device Management (MDM) Certificate Enrollment automatisiert sichere Device Onboarding\n• Certificate Health Attestation validiert kontinuierlich Endpoint Security Posture\n• Device Certificate Lifecycle Management automatisiert Enrollment, Renewal und Revocation\n• Certificate-based Device Compliance überprüft Security Policies vor Ressourcenzugriff"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Multi-Cloud und Hybrid-Cloud PKI Strategien gibt es und wie wird Cross-Cloud Certificate Management implementiert?',
        answer: "Multi-Cloud und Hybrid-Cloud PKI Strategien ermöglichen konsistente Certificate Management-Praktiken across verschiedene Cloud-Anbieter und On-Premises-Umgebungen. Diese Ansätze adressieren die Komplexitäten moderner IT-Landschaften durch einheitliche PKI-Governance und interoperable Certificate Services.\n\n☁️ Cross-Cloud Certificate Synchronization:\n• Certificate Replication Services synchronisieren Certificates zwischen Azure, AWS und Google Cloud\n• Cross-Cloud Certificate Authority Hierarchien etablieren Vertrauen zwischen verschiedenen Cloud-Anbietern\n• Certificate Federation ermöglicht Single Sign-On across Multi-Cloud Environments\n• Cross-Cloud Certificate Validation Services überprüfen Certificate Authenticity unabhängig vom Ursprung\n• Certificate Translation Services konvertieren zwischen verschiedenen Certificate Formaten und Standards\n\n🔗 Hybrid Certificate Authority Architectures:\n• Root CA On-Premises mit Subordinate CAs in verschiedenen Clouds optimiert Sicherheit und Performance\n• Certificate Authority Load Balancing verteilt Certificate Requests optimal across verfügbare CAs\n• Cross-Cloud Certificate Chain Validation gewährleistet End-to-End Trust\n• Certificate Authority Failover Mechanisms implementieren Hochverfügbarkeit across Cloud-Grenzen\n• Certificate Authority Geo-Distribution optimiert Latency für globale Organisationen\n\n🌐 Multi-Cloud Certificate Governance:\n• Unified Certificate Policy Management definiert konsistente Policies across alle Cloud-Umgebungen\n• Cross-Cloud Certificate Compliance Monitoring überwacht Adherence zu organisatorischen Standards\n• Multi-Cloud Certificate Audit Trails konsolidieren Certificate Activities für Compliance Reporting\n• Certificate Cost Optimization across Clouds analysiert und optimiert PKI-Ausgaben\n• Cross-Cloud Certificate Risk Management identifiziert und mitigiert Multi-Cloud spezifische Risiken\n\n🔧 Interoperability und Standards:\n• PKCS Standards Compliance gewährleistet Certificate Interoperability zwischen verschiedenen Systemen\n• X.509 Certificate Profile Standardization ermöglicht konsistente Certificate Structures\n• Certificate Transparency Integration bietet Visibility in Multi-Cloud Certificate Issuance\n• Cross-Cloud Certificate Revocation List (CRL) Distribution synchronisiert Revocation Information\n• Certificate Status Protocol (OCSP) Integration ermöglicht Real-time Certificate Validation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie wird Disaster Recovery und Business Continuity für Microsoft Cloud PKI implementiert und welche Backup-Strategien gibt es?',
        answer: "Disaster Recovery und Business Continuity für Microsoft Cloud PKI erfordern umfassende Planung und Implementierung robuster Backup- und Recovery-Strategien. Diese Maßnahmen gewährleisten kontinuierliche PKI-Services auch bei schwerwiegenden Störungen oder Ausfällen.\n\n🔄 Certificate Authority Backup Strategies:\n• Root CA Key Escrow implementiert sichere Offline-Backups kritischer CA-Schlüssel\n• Certificate Authority Database Replication synchronisiert CA-Daten across geografische Regionen\n• Certificate Template Backup preserviert Certificate Policy Configurations\n• Certificate Revocation List (CRL) Backup gewährleistet kontinuierliche Revocation Services\n• Certificate Authority Configuration Backup dokumentiert alle CA-Settings für schnelle Recovery\n\n🌐 Multi-Region Deployment:\n• Active-Active Certificate Authority Deployment ermöglicht Load Distribution und Redundancy\n• Active-Passive Certificate Authority Failover implementiert automatische Disaster Recovery\n• Cross-Region Certificate Synchronization repliziert Certificate Data zwischen Azure Regions\n• Geographic Certificate Distribution optimiert Performance und Availability\n• Regional Certificate Authority Isolation verhindert Cascade Failures\n\n📊 Recovery Time und Recovery Point Objectives:\n• RTO (Recovery Time Objective) Definition für verschiedene Certificate Services\n• RPO (Recovery Point Objective) Planning minimiert Certificate Data Loss\n• Certificate Service Priority Classification definiert Recovery Reihenfolge\n• Automated Recovery Procedures reduzieren Manual Intervention Requirements\n• Recovery Testing Schedules validieren regelmäßig Disaster Recovery Capabilities\n\n🔐 Security während Disaster Recovery:\n• Certificate Authority Emergency Procedures definieren sichere Recovery Processes\n• Certificate Validation während Outages durch Cached Certificate Information\n• Emergency Certificate Issuance Procedures für kritische Business Continuity\n• Certificate Authority Compromise Recovery Procedures für Security Incidents\n• Certificate Trust Chain Restoration nach Major Disasters\n\n📈 Monitoring und Alerting:\n• Certificate Service Health Monitoring identifiziert proaktiv potenzielle Ausfälle\n• Automated Disaster Recovery Triggering basierend auf Service Health Metrics\n• Certificate Service Performance Baselines für Anomaly Detection\n• Recovery Progress Monitoring und Reporting für Stakeholder Communication\n• Post-Recovery Certificate Service Validation gewährleistet vollständige Funktionalität"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
