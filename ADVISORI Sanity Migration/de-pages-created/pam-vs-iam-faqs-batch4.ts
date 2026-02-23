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
    console.log('Updating PAM vs IAM page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pam-vs-iam' })
    
    if (!existingDoc) {
      throw new Error('Document "pam-vs-iam" not found')
    }
    
    // Create new FAQs for PAM vs IAM specialized topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche spezifischen Herausforderungen entstehen bei der PAM-IAM-Integration in stark regulierten Branchen wie Finanzdienstleistungen oder Gesundheitswesen?',
        answer: "Stark regulierte Branchen stellen einzigartige Anforderungen an PAM-IAM-Integration, die über Standard-Sicherheitskontrollen hinausgehen und branchenspezifische Compliance-Frameworks, Audit-Anforderungen und Risikomanagement-Praktiken erfordern. Diese Umgebungen verlangen nach hochspezialisierten Ansätzen, die sowohl technische Exzellenz als auch tiefgreifendes Verständnis regulatorischer Nuancen kombinieren.\n\n🏦 Finanzdienstleistungs-spezifische Compliance-Herausforderungen:\n• Basel III und CRR/CRD IV Anforderungen für Operational Risk Management und IT-Governance\n• MiFID II Compliance für Investor Protection und Transaction Reporting\n• PCI DSS Level One Zertifizierung für Payment Card Industry Standards\n• SWIFT Customer Security Programme für sichere Finanzmarkt-Kommunikation\n• Anti-Money Laundering Regulations mit erweiterten Know-Your-Customer-Anforderungen\n\n🏥 Healthcare-spezifische Datenschutz- und Sicherheitsanforderungen:\n• HIPAA Compliance für Protected Health Information mit granularen Access Controls\n• FDA 21 CFR Part 11 für Electronic Records und Electronic Signatures\n• HITECH Act Anforderungen für Breach Notification und Audit Logging\n• Medical Device Regulation für Connected Healthcare Equipment\n• Clinical Trial Data Integrity Standards für Pharmaceutical Research\n\n⚖️ Erweiterte Audit- und Dokumentationsanforderungen:\n• Immutable Audit Trails mit forensischer Qualität für regulatorische Untersuchungen\n• Real-time Compliance Monitoring mit automatisierter Violation Detection\n• Segregation of Duties Enforcement über komplexe Geschäftsprozesse hinweg\n• Data Lineage Tracking für vollständige Nachverfolgbarkeit von Informationsflüssen\n• Regulatory Reporting Automation mit standardisierten Templates und Validierung\n\n🔐 Enhanced Security Controls für kritische Infrastrukturen:\n• Multi-Factor Authentication mit Hardware Security Modules für privilegierte Zugriffe\n• Biometric Authentication für hochsensitive Bereiche und Notfallzugriffe\n• Network Segmentation mit Zero Trust Architecture für kritische Systeme\n• Encryption at Rest und in Transit mit regulatorisch anerkannten Algorithmen\n• Incident Response Procedures mit regulatorischen Meldepflichten\n\n📊 Risk-based Governance für komplexe Compliance-Landschaften:\n• Integrated Risk Assessment über Cyber-, Operational- und Compliance-Risiken\n• Third-Party Risk Management für Vendor Due Diligence und Ongoing Monitoring\n• Business Continuity Planning mit regulatorischen Recovery Time Objectives\n• Stress Testing für IT-Systeme und Sicherheitskontrollen\n• Board-Level Reporting für IT-Risk und Cyber-Security-Posture\n\n🌐 Cross-Border Compliance für internationale Operationen:\n• Data Sovereignty Requirements für grenzüberschreitende Datenübertragungen\n• Multi-Jurisdictional Regulatory Mapping für konsistente Compliance\n• Cultural und Legal Considerations für globale Identity Management\n• Local Data Protection Laws Integration in globale PAM-IAM-Architekturen\n• Regulatory Change Management für sich entwickelnde internationale Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie können Organisationen PAM und IAM für Zero Trust Architekturen optimieren und welche spezifischen Design-Prinzipien sind dabei zu beachten?',
        answer: "Zero Trust Architekturen erfordern eine fundamentale Neugestaltung traditioneller PAM-IAM-Ansätze, bei der kontinuierliche Verifikation, kontextbasierte Entscheidungen und Micro-Segmentierung im Mittelpunkt stehen. Diese Transformation geht über technische Implementierung hinaus und erfordert kulturelle Veränderungen, neue Governance-Modelle und adaptive Sicherheitsstrategien, die traditionelle Perimeter-basierte Denkweisen überwinden.\n\n🔍 Continuous Verification als Kern-Prinzip:\n• Never Trust, Always Verify Philosophie für alle Identitäten und Geräte\n• Real-time Risk Assessment basierend auf Benutzerverhalten, Geräte-Posture und Kontext\n• Dynamic Authentication mit adaptiven Sicherheitskontrollen je nach Risikobewertung\n• Session-based Security mit kontinuierlicher Re-Evaluation von Zugriffsberechtigungen\n• Behavioral Biometrics für passive kontinuierliche Authentifizierung\n\n🎯 Context-Aware Access Controls für intelligente Entscheidungsfindung:\n• Multi-Dimensional Risk Scoring basierend auf Benutzer, Gerät, Standort, Zeit und Anwendung\n• Geolocation Intelligence für Anomaly Detection und Risk-based Blocking\n• Device Trust Assessment mit Hardware-based Attestation und Compliance Validation\n• Application-specific Security Policies mit granularen Berechtigungsmodellen\n• Network Context Integration für Micro-Segmentation und Traffic Analysis\n\n🔒 Micro-Segmentation für granulare Zugriffskontrolle:\n• Software-Defined Perimeters für dynamische Netzwerk-Segmentierung\n• Application-Level Segmentation mit API-Gateway-Integration\n• Identity-based Network Access Control statt traditioneller VLAN-Segmentierung\n• Workload Protection mit Container- und Serverless-Security-Integration\n• East-West Traffic Inspection für Lateral Movement Prevention\n\n⚡ Just-in-Time Access für minimale Angriffsfläche:\n• Temporal Access Controls mit automatischer Rechteerweiterung und Revocation\n• Workflow-based Approval Processes für privilegierte Zugriffe\n• Emergency Access Procedures mit erhöhtem Monitoring und Logging\n• Resource-specific Permissions mit granularen Scope-Definitionen\n• Automated Cleanup für abgelaufene Berechtigungen und Sessions\n\n🤖 AI-Enhanced Security für adaptive Bedrohungsabwehr:\n• Machine Learning für User Behavior Analytics und Anomaly Detection\n• Predictive Risk Modeling für proaktive Sicherheitsmaßnahmen\n• Automated Threat Response mit orchestrierten Countermeasures\n• Intelligent Policy Recommendation basierend auf Nutzungsmustern\n• Continuous Learning für Verbesserung von Detection-Algorithmen\n\n🏗️ Architecture Patterns für Zero Trust Implementation:\n• API-first Design für nahtlose Integration verschiedener Security-Services\n• Event-driven Architecture für Real-time Security-Orchestration\n• Microservices-based Security Functions für modulare und skalierbare Deployment\n• Cloud-native Patterns für elastische und globale Zero Trust Services\n• Edge Computing Integration für lokale Security-Entscheidungen mit geringer Latenz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Best Practices existieren für die Migration von Legacy-Systemen zu modernen integrierten PAM-IAM-Lösungen?',
        answer: "Die Migration von Legacy-Systemen zu modernen PAM-IAM-Lösungen erfordert einen strategischen, phasenweisen Ansatz, der Business-Kontinuität gewährleistet, während gleichzeitig Sicherheitsverbesserungen und moderne Capabilities eingeführt werden. Erfolgreiche Migrationen kombinieren technische Expertise mit Change Management und Risikominimierung durch bewährte Transformations-Methodologien.\n\n📋 Strategic Migration Planning für risikoarme Transformation:\n• Comprehensive Legacy Assessment mit Inventarisierung aller Identitäts-Touchpoints\n• Business Impact Analysis für Priorisierung kritischer Systeme und Workflows\n• Risk-based Migration Roadmap mit Parallel-Running-Strategien\n• Stakeholder Alignment für Executive Support und Resource Commitment\n• Success Criteria Definition mit messbaren Milestones und KPIs\n\n🔄 Phased Migration Approach für kontrollierte Transformation:\n• Discovery Phase mit detaillierter Analyse bestehender Identitäts-Landschaften\n• Pilot Implementation mit nicht-kritischen Systemen für Proof-of-Concept\n• Incremental Rollout mit schrittweiser Integration kritischer Anwendungen\n• Parallel Operations für sichere Transition ohne Service-Unterbrechung\n• Final Cutover mit koordinierter Decommissioning alter Systeme\n\n🛡️ Security-First Migration für kontinuierlichen Schutz:\n• Security Gap Analysis zwischen Legacy- und Target-Architekturen\n• Interim Security Measures für Schutz während der Migrationsphase\n• Data Protection Strategies für sichere Migration sensitiver Identitätsdaten\n• Access Control Continuity für unterbrechungsfreie Benutzer-Workflows\n• Incident Response Planning für Migration-spezifische Sicherheitsrisiken\n\n🔧 Technical Integration Strategies für nahtlose Konnektivität:\n• API-based Integration für moderne Connectivity zwischen Legacy- und neuen Systemen\n• Identity Federation für schrittweise Migration ohne Benutzer-Impact\n• Data Synchronization Tools für konsistente Identitätsdaten über alle Systeme\n• Protocol Translation für Kompatibilität zwischen verschiedenen Authentication-Standards\n• Middleware Solutions für Bridging zwischen Legacy-Protokollen und modernen Standards\n\n📊 Data Migration Excellence für Datenintegrität:\n• Data Quality Assessment mit Cleansing und Normalization-Strategien\n• Identity Mapping für Konsolidierung fragmentierter Benutzer-Accounts\n• Attribute Standardization für konsistente Datenmodelle\n• Historical Data Preservation für Audit-Compliance und Forensic-Capabilities\n• Validation und Testing für Datenintegrität nach Migration\n\n🎯 Change Management für erfolgreiche Adoption:\n• User Training Programs für neue Workflows und Self-Service-Capabilities\n• Communication Strategy für transparente Information über Migration-Fortschritt\n• Support Structure für Migration-spezifische Benutzer-Anfragen\n• Feedback Mechanisms für kontinuierliche Verbesserung des Migration-Prozesses\n• Success Celebration für Motivation und Stakeholder-Engagement"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie können Unternehmen PAM-IAM-Integration für Multi-Cloud und Hybrid-Cloud-Umgebungen optimieren?',
        answer: "Multi-Cloud und Hybrid-Cloud-Umgebungen erfordern sophisticated PAM-IAM-Integrationsstrategien, die Cloud-Provider-übergreifende Konsistenz, nahtlose Workload-Portabilität und einheitliche Sicherheitsrichtlinien gewährleisten. Diese komplexen Umgebungen verlangen nach innovativen Ansätzen für Identity Federation, Cross-Cloud-Governance und adaptive Sicherheitskontrollen, die sowohl Cloud-native Capabilities als auch On-Premises-Integration unterstützen.\n\n☁️ Cloud-Provider-agnostic Architecture für Vendor-Neutralität:\n• Abstraction Layer für einheitliche Identity-Services über verschiedene Cloud-Plattformen\n• Standardized APIs für konsistente Integration unabhängig vom Cloud-Provider\n• Portable Identity Policies mit Cloud-Provider-spezifischer Implementierung\n• Multi-Cloud Identity Federation für nahtlose Cross-Cloud-Authentication\n• Vendor-neutral Monitoring und Analytics für ganzheitliche Visibility\n\n🔗 Cross-Cloud Identity Federation für nahtlose Konnektivität:\n• SAML und OIDC Federation für standardbasierte Cross-Cloud-Authentication\n• Trust Relationship Management zwischen verschiedenen Cloud-Identity-Providern\n• Token Translation Services für Kompatibilität zwischen verschiedenen Authentication-Protokollen\n• Cross-Cloud Single Sign-On für einheitliche Benutzer-Experience\n• Identity Mapping für konsistente Benutzer-Repräsentation über Cloud-Grenzen hinweg\n\n🛡️ Unified Security Policies für konsistente Governance:\n• Policy-as-Code für versionierte und testbare Sicherheitsrichtlinien\n• Cloud Security Posture Management für kontinuierliche Compliance-Überwachung\n• Centralized Policy Engine mit dezentraler Enforcement für optimale Performance\n• Risk-based Policy Adaptation basierend auf Cloud-spezifischen Bedrohungen\n• Automated Compliance Validation für verschiedene Cloud-Compliance-Frameworks\n\n⚡ Dynamic Workload Protection für elastische Umgebungen:\n• Container Security mit Kubernetes-native Identity und Access Management\n• Serverless Security für Function-as-a-Service-Workloads\n• Auto-Scaling Security Controls für dynamische Ressourcen-Anpassung\n• Ephemeral Workload Protection für kurzlebige Cloud-Ressourcen\n• Edge Computing Security für verteilte Cloud-Edge-Architekturen\n\n📊 Centralized Visibility für Multi-Cloud-Governance:\n• Unified Dashboard für Cloud-übergreifende Identity und Access Analytics\n• Cross-Cloud Audit Trails für ganzheitliche Compliance-Dokumentation\n• Integrated Threat Intelligence für Cloud-spezifische Bedrohungsanalyse\n• Performance Monitoring für Cloud-Provider-übergreifende Service-Qualität\n• Cost Optimization Analytics für Identity-Service-Nutzung über verschiedene Clouds\n\n🔄 Disaster Recovery und Business Continuity für Cloud-Resilience:\n• Multi-Cloud Failover Strategies für Identity-Service-Hochverfügbarkeit\n• Cross-Cloud Data Replication für Identity-Repository-Redundanz\n• Geographic Distribution für Latency-Optimization und Disaster-Recovery\n• Cloud-Burst Scenarios für temporäre Kapazitätserweiterung\n• Automated Recovery Procedures für schnelle Service-Wiederherstellung"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
