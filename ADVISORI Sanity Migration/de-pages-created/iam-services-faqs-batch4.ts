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
    console.log('Updating IAM Services page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-services' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-services" not found')
    }
    
    // Create new FAQs for IAM Services advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützen IAM Services bei der Implementierung von Privileged Access Management und welche speziellen Sicherheitskontrollen werden eingesetzt?',
        answer: "Privileged Access Management ist eine kritische Komponente jeder IAM-Strategie und erfordert spezialisierte Sicherheitskontrollen, die weit über traditionelle Zugriffsverwaltung hinausgehen. IAM Services implementieren umfassende PAM-Lösungen, die Zero-Trust-Prinzipien, kontinuierliche Überwachung und intelligente Automatisierung kombinieren, um kritische Assets vor Advanced Persistent Threats und Insider-Bedrohungen zu schützen.\n\n🎯 Strategic PAM Architecture und Design:\n• Privileged Account Discovery für systematische Identifikation aller administrativen und Service-Accounts\n• Risk-based Classification für Priorisierung kritischer Accounts und Assets\n• Zero-Trust PAM Architecture mit kontinuierlicher Verifikation und Least-Privilege-Prinzipien\n• Segregation of Duties für Interessenkonflikt-Vermeidung und Compliance\n• Emergency Access Procedures für kontrollierte Break-Glass-Szenarien\n\n🔐 Advanced Credential Management:\n• Password Vaulting mit hochsicherer Speicherung und automatischer Rotation\n• Certificate-based Authentication für PKI-gestützte Sicherheit\n• API Key Management für sichere Service-to-Service-Kommunikation\n• SSH Key Management mit zentralisierter Kontrolle und Lifecycle-Management\n• Dynamic Credential Generation für temporäre Zugriffe ohne persistente Credentials\n\n⚡ Just-in-Time Access und Elevation:\n• Temporary Privilege Elevation mit automatischer Revokation nach definierten Zeitfenstern\n• Approval Workflows für kontrollierte Genehmigung kritischer Zugriffe\n• Risk-based Approval mit intelligenten Empfehlungen basierend auf Kontext\n• Time-based Access Controls mit intelligenten Zeitfenstern und Ausnahmebehandlung\n• Automated Cleanup für nicht mehr benötigte privilegierte Berechtigungen\n\n🔍 Comprehensive Session Monitoring:\n• Session Recording mit vollständiger Aufzeichnung aller privilegierten Aktivitäten\n• Real-time Monitoring mit sofortiger Erkennung verdächtiger Aktivitäten\n• Keystroke Analysis mit intelligenter Erkennung von Malware und unautorisierten Aktivitäten\n• Command Filtering mit Blockierung gefährlicher Befehle und Aktionen\n• Behavioral Analytics für Erkennung anomaler Verhaltensmuster privilegierter Benutzer\n\n🛡️ Advanced Threat Protection:\n• Insider Threat Detection mit Machine Learning für Erkennung kompromittierter Accounts\n• Lateral Movement Prevention durch Segmentierung und Micro-Perimeter\n• Threat Intelligence Integration für proaktive Abwehr bekannter Angriffsmuster\n• Automated Incident Response mit sofortiger Isolation kompromittierter Accounts\n• Forensic Capabilities für detaillierte Analyse von Sicherheitsvorfällen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielen IAM Services bei der Unterstützung von Remote Work und hybriden Arbeitsmodellen mit sicherer Identitätsverwaltung?',
        answer: "Remote Work und hybride Arbeitsmodelle stellen neue Herausforderungen an die Identitätsverwaltung und erfordern adaptive Sicherheitsstrategien, die Flexibilität mit robustem Schutz kombinieren. IAM Services entwickeln spezialisierte Lösungen für verteilte Arbeitsumgebungen, die nahtlose Benutzererfahrungen ermöglichen, während gleichzeitig höchste Sicherheitsstandards aufrechterhalten werden.\n\n🌐 Secure Remote Access Architecture:\n• Zero-Trust Network Access für sichere Verbindungen unabhängig vom Standort\n• VPN-less Connectivity mit direkter Anwendungsanbindung und Micro-Tunneling\n• Cloud-based Identity Services für globale Verfügbarkeit und Skalierbarkeit\n• Multi-Cloud Integration für konsistente Sicherheit über alle Umgebungen\n• Edge Computing Support für optimale Performance bei verteilten Teams\n\n📱 Device Trust und Endpoint Security:\n• Device Registration und Trust Assessment für sichere Geräteverwaltung\n• Mobile Device Management Integration für BYOD-Unterstützung\n• Certificate-based Device Authentication für starke Geräteverifikation\n• Endpoint Compliance Monitoring für kontinuierliche Sicherheitsbewertung\n• Remote Device Wipe und Lock für Schutz bei Geräteverlust\n\n🔐 Adaptive Authentication für Remote Scenarios:\n• Location-based Authentication mit Geo-Fencing und Anomaly Detection\n• Risk-based Multi-Factor Authentication mit dynamischen Sicherheitsanforderungen\n• Behavioral Biometrics für kontinuierliche Benutzerverifikation\n• Contextual Authentication basierend auf Gerät, Standort und Verhalten\n• Passwordless Authentication für verbesserte Sicherheit und Benutzerfreundlichkeit\n\n⚡ Seamless User Experience:\n• Single Sign-On für alle Cloud und On-Premises Anwendungen\n• Self-Service Password Reset für autonome Problemlösung\n• Mobile-First Design für optimale Smartphone und Tablet-Nutzung\n• Offline Authentication Capabilities für eingeschränkte Konnektivität\n• Progressive Web Apps für plattformübergreifende Kompatibilität\n\n📊 Remote Work Analytics und Monitoring:\n• User Activity Monitoring für Einblicke in Remote-Work-Patterns\n• Productivity Analytics für Optimierung von Arbeitsabläufen\n• Security Metrics für Remote-Work-spezifische Risikobewertung\n• Compliance Reporting für regulatorische Anforderungen im Remote-Work-Kontext\n• Performance Monitoring für Optimierung der Remote-Access-Infrastruktur\n\n🔄 Collaboration und Communication Security:\n• Secure Video Conferencing Integration für sichere virtuelle Meetings\n• Document Sharing Controls für Schutz sensibler Informationen\n• Chat und Messaging Security für sichere Team-Kommunikation\n• Cloud Storage Integration mit granularen Zugriffskontrollen\n• Digital Workspace Security für umfassende Collaboration-Platform-Sicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie gestalten IAM Services die Integration mit IoT-Geräten und Edge-Computing-Umgebungen für sichere Device-Identity-Management?',
        answer: "IoT-Geräte und Edge-Computing-Umgebungen erweitern die Identitätslandschaft erheblich und erfordern spezialisierte IAM-Ansätze, die Skalierbarkeit, Sicherheit und Performance für Millionen von Geräten gewährleisten. IAM Services entwickeln innovative Lösungen für Device-Identity-Management, die traditionelle Identitätskonzepte auf die IoT-Welt übertragen und dabei neue Sicherheitsparadigmen etablieren.\n\n🌐 Scalable IoT Identity Architecture:\n• Device Identity Lifecycle Management für automatisierte Registrierung, Verwaltung und Deaktivierung\n• Hierarchical Device Organization mit Gruppierung nach Funktion, Standort und Sicherheitsanforderungen\n• Edge-based Identity Services für lokale Authentifizierung und reduzierte Latenz\n• Distributed Identity Management für autonome Edge-Cluster und Offline-Betrieb\n• Cloud-to-Edge Identity Synchronization für konsistente Governance\n\n🔐 Device Authentication und Trust:\n• Certificate-based Device Authentication mit PKI-Integration für starke Geräteverifikation\n• Hardware Security Module Integration für tamper-resistant Credential-Speicherung\n• Device Attestation für Verifikation von Geräteintegrität und Firmware-Authentizität\n• Mutual Authentication für bidirektionale Vertrauensbeziehungen\n• Dynamic Trust Scoring basierend auf Geräteverhalten und Umgebungskontext\n\n⚡ Lightweight Security Protocols:\n• Resource-constrained Authentication für Geräte mit begrenzten Rechenressourcen\n• Efficient Cryptography mit optimierten Algorithmen für IoT-Hardware\n• Compressed Token Formats für minimalen Overhead bei der Kommunikation\n• Battery-aware Security mit energieeffizienten Authentifizierungsverfahren\n• Offline Authentication Capabilities für intermittent connectivity scenarios\n\n🛡️ IoT-specific Security Controls:\n• Device Behavior Analytics für Erkennung kompromittierter oder anomaler Geräte\n• Firmware Integrity Monitoring für Schutz vor Manipulation und Malware\n• Network Segmentation für Isolation kritischer IoT-Systeme\n• Over-the-Air Update Security für sichere Firmware und Software-Updates\n• Incident Response für IoT-spezifische Sicherheitsvorfälle\n\n📊 Edge Computing Integration:\n• Edge Identity Gateways für lokale Authentifizierung und Autorisierung\n• Distributed Policy Enforcement für konsistente Sicherheitsrichtlinien\n• Local Data Processing mit Privacy-preserving Identity-Technologien\n• Edge-to-Cloud Identity Federation für nahtlose Hybrid-Operationen\n• Autonomous Edge Operations für selbstverwaltende Edge-Cluster\n\n🔄 Industrial IoT und Critical Infrastructure:\n• OT-IT Convergence mit sicherer Integration von Operational Technology\n• Safety-critical System Integration für Industrie und Infrastruktur\n• Real-time Authentication für zeitkritische industrielle Prozesse\n• Redundant Identity Services für High-Availability-Anforderungen\n• Regulatory Compliance für industrielle Standards und Vorschriften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Strategien verwenden IAM Services für die Kostenoptimierung und ROI-Maximierung bei Identity & Access Management Investitionen?',
        answer: "Kostenoptimierung und ROI-Maximierung sind kritische Erfolgsfaktoren für IAM-Investitionen und erfordern strategische Ansätze, die kurzfristige Effizienzgewinne mit langfristiger Wertschöpfung kombinieren. IAM Services entwickeln datengetriebene Optimierungsstrategien, die Technologie-Investments, operative Effizienz und Business-Value-Generation optimal balancieren für nachhaltige Geschäftsergebnisse.\n\n💰 Strategic Cost Management Framework:\n• Total Cost of Ownership Modeling für umfassende Kostentransparenz über den gesamten IAM-Lifecycle\n• Cost Center Allocation für präzise Zuordnung von IAM-Kosten zu Geschäftsbereichen\n• Budget Planning und Forecasting mit prädiktiven Analysen für zukünftige Anforderungen\n• Vendor Cost Optimization durch strategische Verhandlungen und Contract-Management\n• Cloud Cost Management für optimale Nutzung von Cloud-basierten IAM-Services\n\n📊 ROI Measurement und Value Realization:\n• Quantifiable Business Benefits durch Automatisierung manueller Prozesse\n• Productivity Gains durch Single Sign-On und Self-Service-Capabilities\n• Compliance Cost Reduction durch automatisierte Audit-Bereitschaft und Reporting\n• Security Incident Cost Avoidance durch verbesserte Zugriffskontrollen\n• Time-to-Market Acceleration für neue Geschäftsinitiativen und Produkte\n\n⚡ Operational Efficiency Optimization:\n• Process Automation für Reduktion manueller IAM-Aufgaben und Fehlerminimierung\n• Self-Service Capabilities für Entlastung von IT-Support und Help-Desk\n• Automated Provisioning für beschleunigte Benutzer-Onboarding-Prozesse\n• Intelligent Analytics für proaktive Problemerkennung und Ressourcenoptimierung\n• Workflow Optimization für streamlined Approval-Prozesse und reduzierte Durchlaufzeiten\n\n🔧 Technology Investment Optimization:\n• Right-sizing von IAM-Infrastruktur basierend auf tatsächlichen Nutzungsmustern\n• License Optimization durch intelligente Nutzungsanalyse und Rightsizing\n• Cloud Migration Strategies für Kosteneinsparungen und Skalierbarkeitsvorteile\n• Open Source Integration für Reduktion von Lizenzkosten bei geeigneten Use Cases\n• Technology Consolidation für Vereinfachung der IAM-Landschaft und Kostensenkung\n\n📈 Continuous Value Enhancement:\n• Performance Monitoring für kontinuierliche Optimierung von IAM-Services\n• User Satisfaction Tracking für Verbesserung der Benutzerfreundlichkeit\n• Innovation Integration für Nutzung neuer Technologien und Capabilities\n• Benchmarking gegen Industry Standards für kontinuierliche Verbesserung\n• Strategic Roadmap Planning für langfristige Wertmaximierung\n\n🎯 Business-aligned Investment Strategies:\n• Business Case Development für ROI-optimierte IAM-Investitionen\n• Phased Implementation für gestaffelte Wertrealisierung und Risikominimierung\n• Quick Wins Identification für sofortige Wertdemonstration\n• Long-term Value Planning für nachhaltige Geschäftsvorteile\n• Executive Reporting für transparente Kommunikation von IAM-Wertbeiträgen"
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
