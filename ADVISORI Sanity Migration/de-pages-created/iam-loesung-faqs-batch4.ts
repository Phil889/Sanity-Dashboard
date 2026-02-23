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
    console.log('Updating IAM-Lösung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-loesung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-loesung" not found')
    }
    
    // Create new FAQs for IAM-Lösung advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützt eine moderne IAM-Lösung DevOps und agile Entwicklungsprozesse bei der sicheren Softwareentwicklung?',
        answer: "Moderne IAM-Lösungen sind essentiell für DevOps und agile Entwicklungsprozesse, da sie Sicherheit nahtlos in schnelle Entwicklungszyklen integrieren und dabei sowohl Developer Experience als auch Security-by-Design-Prinzipien optimieren. Eine DevOps-orientierte IAM-Lösung ermöglicht es Entwicklungsteams, sicher und effizient zu arbeiten, ohne dass Sicherheitskontrollen die Agilität beeinträchtigen.\n\n🎯 DevOps-Integration und CI/CD Pipeline Security:\n• Automated Identity Provisioning für schnelle Bereitstellung von Entwickler-Accounts und Berechtigungen\n• Pipeline-integrated Authentication für sichere Zugriffe auf Code-Repositories und Deployment-Umgebungen\n• Secret Management Integration für sichere Verwaltung von API-Keys, Zertifikaten und Credentials\n• Environment-based Access Controls für rollenbasierte Zugriffe auf verschiedene Entwicklungsumgebungen\n• Automated Deprovisioning bei Projektende oder Rollenwechsel für minimale Sicherheitsrisiken\n\n🚀 API-first Security und Microservices Authentication:\n• Service-to-Service Authentication mit OAuth und JWT für sichere Microservices-Kommunikation\n• API Gateway Integration für zentrale Authentifizierung und Autorisierung aller Services\n• Dynamic Service Discovery mit automatischer Registrierung und Authentifizierung neuer Services\n• Container Security Integration für sichere Identitätsverwaltung in containerisierten Umgebungen\n• Kubernetes RBAC Integration für native Kubernetes-Sicherheitskontrollen\n\n🛡️ Infrastructure as Code und Security Automation:\n• IAM as Code für versionierte und reproduzierbare Identitäts- und Zugriffskonfigurationen\n• Automated Compliance Scanning in CI/CD-Pipelines für kontinuierliche Sicherheitsvalidierung\n• Policy as Code für programmierbare Sicherheitsrichtlinien und automatisierte Durchsetzung\n• Shift-Left Security mit früher Integration von Sicherheitskontrollen in den Entwicklungsprozess\n• Automated Security Testing für kontinuierliche Überprüfung von Authentifizierung und Autorisierung\n\n📊 Developer Experience und Self-Service Capabilities:\n• Self-Service Portals für Entwickler zur eigenständigen Verwaltung von Zugriffen und Berechtigungen\n• Just-in-Time Access für temporäre Erhöhung von Berechtigungen bei Bedarf\n• Integrated Development Environment Support für nahtlose IAM-Integration in IDEs\n• Automated Onboarding für schnelle Integration neuer Entwickler in Projekte\n• Real-time Access Analytics für Transparenz über Zugriffsmuster und Berechtigungsnutzung\n\n🌐 Cloud-native Development und Multi-Environment Management:\n• Multi-Cloud Development Support für konsistente Identitätsverwaltung über verschiedene Cloud-Provider\n• Environment Promotion mit automatischer Übertragung von Berechtigungen zwischen Entwicklungsumgebungen\n• Feature Flag Integration für sichere Rollouts neuer Funktionalitäten\n• Blue-Green Deployment Support für unterbrechungsfreie Updates mit Sicherheitsvalidierung\n• Canary Release Security für schrittweise Einführung neuer Features mit Risikominimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Herausforderungen entstehen bei der IAM-Integration in IoT-Umgebungen und wie löst eine professionelle IAM-Lösung diese?',
        answer: "IoT-Umgebungen stellen einzigartige Herausforderungen für IAM-Systeme dar, da sie Millionen von Geräten mit begrenzten Ressourcen, unterschiedlichen Kommunikationsprotokollen und variierenden Sicherheitsanforderungen umfassen können. Eine professionelle IAM-Lösung muss diese Komplexität bewältigen und dabei Skalierbarkeit, Sicherheit und operative Effizienz gewährleisten.\n\n🎯 Massive Scale Identity Management und Device Lifecycle:\n• Automated Device Registration für nahtlose Onboarding-Prozesse von IoT-Geräten\n• Scalable Certificate Management für PKI-basierte Geräteauthentifizierung bei Millionen von Devices\n• Device Identity Lifecycle Management von der Herstellung bis zur Entsorgung\n• Bulk Operations Support für effiziente Verwaltung großer Gerätemengen\n• Hierarchical Device Organization für strukturierte Verwaltung komplexer IoT-Topologien\n\n🚀 Lightweight Authentication und Resource-Constrained Devices:\n• Optimized Authentication Protocols für Geräte mit begrenzten Rechenressourcen\n• Certificate-based Authentication mit minimalen Overhead für Embedded Systems\n• Token-based Access Control mit effizienten Validierungsmechanismen\n• Edge-based Authentication für lokale Identitätsverifikation ohne Cloud-Abhängigkeit\n• Adaptive Security Levels basierend auf Gerätekategorien und Risikoprofilen\n\n🛡️ IoT-specific Security Challenges und Threat Mitigation:\n• Device Tampering Detection für Erkennung physischer Manipulation von IoT-Geräten\n• Secure Boot und Attestation für Verifikation der Geräteintegrität\n• Over-the-Air Update Security für sichere Firmware-Updates mit Identitätsvalidierung\n• Network Segmentation Integration für Isolation kompromittierter Geräte\n• Anomaly Detection für IoT-spezifische Bedrohungsmuster und ungewöhnliches Geräteverhalten\n\n📊 Data Privacy und Regulatory Compliance für IoT:\n• Privacy-preserving Identity Management für Schutz sensibler IoT-Daten\n• Consent Management für datensammelnde IoT-Geräte und DSGVO-Compliance\n• Data Minimization Strategies für Reduzierung übertragener Identitätsinformationen\n• Cross-Border Data Flow Management für internationale IoT-Deployments\n• Audit Trail Optimization für effiziente Protokollierung bei hohem Datenvolumen\n\n🌐 Edge Computing Integration und Hybrid Architectures:\n• Edge-based Identity Services für lokale Authentifizierung ohne Internet-Konnektivität\n• Fog Computing Integration für verteilte Identitätsverwaltung in IoT-Netzwerken\n• Offline Authentication Capabilities für Geräte mit intermittierender Konnektivität\n• Synchronization Mechanisms für Konsistenz zwischen Edge und Cloud-basierten Identitätsdaten\n• Hybrid Trust Models für flexible Sicherheitsarchitekturen in komplexen IoT-Umgebungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie ermöglicht eine IAM-Lösung sichere Remote-Arbeit und unterstützt moderne Arbeitsplatzkonzepte?',
        answer: "Remote-Arbeit und moderne Arbeitsplatzkonzepte erfordern IAM-Lösungen, die Sicherheit und Benutzerfreundlichkeit in verteilten, heterogenen Umgebungen gewährleisten. Eine professionelle IAM-Lösung muss dabei traditionelle Perimeter-basierte Sicherheitsmodelle durch adaptive, kontextbasierte Ansätze ersetzen, die überall und jederzeit sicheren Zugriff ermöglichen.\n\n🎯 Zero-Trust Remote Access und Contextual Security:\n• Location-independent Authentication für sicheren Zugriff von jedem Standort aus\n• Device Trust Assessment mit kontinuierlicher Bewertung der Gerätesicherheit\n• Network-agnostic Security für Schutz unabhängig von der verwendeten Internetverbindung\n• Behavioral Analytics für Erkennung anomaler Remote-Aktivitäten\n• Adaptive Risk Assessment basierend auf Standort, Zeit und Zugriffsmustern\n\n🚀 Seamless User Experience und Productivity Enablement:\n• Single Sign-On für alle Cloud- und On-Premises-Anwendungen ohne VPN-Abhängigkeit\n• Mobile-first Authentication mit biometrischen Verfahren und Push-Benachrichtigungen\n• Offline Authentication Capabilities für Arbeiten ohne Internetverbindung\n• Cross-Platform Compatibility für konsistente Erfahrung auf verschiedenen Geräten\n• Self-Service Password Reset und Account Recovery für autonome Problemlösung\n\n🛡️ BYOD Security und Personal Device Management:\n• Device Registration und Trust Establishment für private Geräte\n• Containerization für Trennung von geschäftlichen und privaten Daten\n• Mobile Application Management mit selektiver Zugriffskontrolle\n• Remote Wipe Capabilities für Schutz bei Geräteverlust oder -diebstahl\n• Privacy-preserving Monitoring für Sicherheitsüberwachung ohne Verletzung der Privatsphäre\n\n📊 Collaboration Security und Team-based Access:\n• Dynamic Team Formation mit automatischer Bereitstellung von Collaboration-Tools\n• Project-based Access Controls für temporäre Zugriffe auf spezifische Ressourcen\n• Guest Access Management für sichere Einbindung externer Partner\n• Real-time Collaboration Monitoring für Überwachung geteilter Arbeitsbereiche\n• Data Loss Prevention für Schutz sensibler Informationen in Collaboration-Umgebungen\n\n🌐 Global Workforce Support und Compliance:\n• Multi-Timezone Authentication mit zeitbasierten Zugriffskontrollen\n• Geo-distributed Identity Services für optimale Performance weltweit\n• Local Compliance Support für länderspezifische Datenschutzanforderungen\n• Cross-Border Data Protection für internationale Remote-Teams\n• Cultural Adaptation für benutzerfreundliche Interfaces in verschiedenen Regionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Rolle spielt Identity Analytics in modernen IAM-Lösungen und wie trägt es zur Risikominimierung bei?',
        answer: "Identity Analytics ist ein kritischer Baustein moderner IAM-Lösungen, der durch datengetriebene Einblicke und intelligente Mustererkennung proaktive Sicherheitsentscheidungen ermöglicht. Diese Technologie transformiert reaktive Sicherheitsansätze in prädiktive, adaptive Systeme, die Risiken frühzeitig erkennen und automatisiert darauf reagieren können.\n\n🎯 Advanced Pattern Recognition und Behavioral Analysis:\n• User Behavior Analytics für Erstellung individueller Verhaltensprofile und Erkennung von Abweichungen\n• Access Pattern Mining für Identifikation ungewöhnlicher Zugriffsmuster und potenzieller Bedrohungen\n• Temporal Analysis für zeitbasierte Anomalieerkennung und Arbeitszeit-Validierung\n• Peer Group Analysis für Vergleich mit ähnlichen Benutzern und Rollen\n• Contextual Correlation für Verknüpfung verschiedener Identitätsereignisse und Aktivitäten\n\n🚀 Predictive Risk Assessment und Proactive Security:\n• Risk Scoring Algorithms für dynamische Bewertung von Benutzer- und Zugriffsrisiken\n• Threat Prediction Models für Vorhersage potenzieller Sicherheitsvorfälle\n• Anomaly Forecasting für frühzeitige Warnung vor ungewöhnlichen Aktivitäten\n• Compliance Risk Assessment für proaktive Identifikation von Compliance-Verstößen\n• Business Impact Analysis für Bewertung der Auswirkungen von Identitätsrisiken\n\n🛡️ Automated Threat Detection und Response:\n• Real-time Anomaly Detection für sofortige Erkennung verdächtiger Aktivitäten\n• Intelligent Alerting mit priorisierten Benachrichtigungen basierend auf Risikobewertung\n• Automated Response Triggers für selbständige Reaktion auf identifizierte Bedrohungen\n• Forensic Data Collection für detaillierte Analyse von Sicherheitsvorfällen\n• Threat Intelligence Integration für Korrelation mit externen Bedrohungsdaten\n\n📊 Identity Governance Optimization und Access Intelligence:\n• Role Mining und Optimization für intelligente Identifikation und Verbesserung von Rollenmodellen\n• Access Certification Intelligence für datengetriebene Empfehlungen bei Zugriffszertifizierungen\n• Orphaned Account Detection für automatische Identifikation ungenutzter oder verwaister Accounts\n• Privilege Creep Analysis für Erkennung schleichender Rechteerweiterungen\n• Segregation of Duties Monitoring für kontinuierliche Überwachung von Interessenkonflikten\n\n🌐 Business Intelligence Integration und Strategic Insights:\n• Identity Metrics Dashboards für umfassende Visualisierung von Identitäts- und Zugriffsdaten\n• Compliance Reporting Analytics für automatisierte Erstellung regulatorischer Berichte\n• Cost Optimization Insights für Identifikation von Einsparpotentialen bei Lizenzen und Zugriffen\n• Performance Analytics für Optimierung von IAM-Prozessen und Benutzerfreundlichkeit\n• Strategic Planning Support für datengetriebene Entscheidungen bei IAM-Investitionen"
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
