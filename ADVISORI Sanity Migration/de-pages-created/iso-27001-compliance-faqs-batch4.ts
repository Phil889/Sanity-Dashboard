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
    console.log('Updating ISO 27001 Compliance page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-compliance" not found')
    }
    
    // Create new FAQs for ISO 27001 Compliance specialized topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie können Unternehmen ihre ISO 27001 Compliance bei Remote Work und verteilten Teams sicherstellen?',
        answer: "Die Sicherstellung von ISO 27001 Compliance bei Remote Work und verteilten Teams erfordert eine Neuausrichtung traditioneller Sicherheitskonzepte auf dezentrale Arbeitsmodelle. Die Herausforderung liegt in der Aufrechterhaltung einheitlicher Sicherheitsstandards über verschiedene Standorte, Geräte und Netzwerke hinweg.\n\n🏠 Remote Work Security Framework:\n• Entwicklung spezifischer Sicherheitsrichtlinien für Heimarbeitsplätze und mobile Arbeitsumgebungen\n• Implementierung von Endpoint Detection and Response Lösungen für alle Remote-Geräte\n• Etablierung sicherer VPN-Verbindungen mit Multi-Faktor-Authentifizierung\n• Aufbau von Zero Trust Network Access Architekturen für granulare Zugriffskontrolle\n• Implementierung von Cloud Access Security Brokers für sichere Cloud-Nutzung\n\n📱 Device Management und Kontrolle:\n• Mobile Device Management für alle Unternehmensgeräte und BYOD-Szenarien\n• Automatisierte Patch-Management-Systeme für verteilte Endpunkte\n• Verschlüsselung aller Daten auf Geräten und in der Übertragung\n• Remote Wipe Funktionalitäten für verlorene oder gestohlene Geräte\n• Kontinuierliche Compliance-Überwachung aller Remote-Endpoints\n\n🔐 Identity und Access Management:\n• Erweiterte Multi-Faktor-Authentifizierung für alle Remote-Zugriffe\n• Privileged Access Management für administrative Tätigkeiten\n• Just-in-Time Access Provisioning für temporäre Berechtigungen\n• Continuous Authentication basierend auf Verhaltensmustern\n• Single Sign-On Lösungen für nahtlose und sichere Anmeldeprozesse\n\n📊 Monitoring und Compliance-Überwachung:\n• Security Information and Event Management für verteilte Umgebungen\n• User and Entity Behavior Analytics für Anomalie-Erkennung\n• Cloud-basierte Logging und Monitoring-Lösungen\n• Automated Compliance Reporting für Remote Work Aktivitäten\n• Real-time Security Dashboards für IT-Teams und Management\n\n🎓 Training und Awareness:\n• Spezielle Schulungsprogramme für Remote Work Security\n• Regelmäßige Phishing-Simulationen und Security Awareness Tests\n• Aufbau einer Remote Security Culture mit klaren Verhaltensrichtlinien\n• Peer-to-Peer Learning Programme für verteilte Teams\n• Kontinuierliche Kommunikation über neue Bedrohungen und Schutzmaßnahmen\n\n🔄 Incident Response für Remote Teams:\n• Angepasste Incident Response Prozesse für Remote-Szenarien\n• Remote Forensics Capabilities für Sicherheitsvorfälle\n• Koordinierte Kommunikationskanäle für Notfälle\n• Backup und Recovery Strategien für Remote-Arbeitsplätze\n• Business Continuity Planning für verteilte Arbeitsmodelle"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielen Drittanbieter und Supply Chain Security bei der ISO 27001 Compliance?',
        answer: "Drittanbieter und Supply Chain Security sind kritische Komponenten der ISO 27001 Compliance, da moderne Unternehmen zunehmend auf externe Partner, Lieferanten und Service Provider angewiesen sind. Die Herausforderung liegt in der Ausdehnung der eigenen Sicherheitsstandards auf das gesamte Ökosystem von Geschäftspartnern.\n\n🔗 Supply Chain Risk Assessment:\n• Umfassende Bewertung aller Drittanbieter hinsichtlich ihrer Sicherheitsreife und Compliance-Position\n• Kategorisierung von Lieferanten basierend auf Kritikalität und Risikopotenzial\n• Kontinuierliche Überwachung der Sicherheitslage bei kritischen Partnern\n• Entwicklung von Risikoprofilen für verschiedene Arten von Drittanbietern\n• Integration von Cyber Security Ratings in Lieferantenbewertungen\n\n📋 Vendor Management Framework:\n• Etablierung standardisierter Sicherheitsanforderungen für alle Drittanbieter\n• Implementierung von Security Questionnaires und Assessment-Prozessen\n• Aufbau von Vendor Security Scorecards für kontinuierliche Bewertung\n• Entwicklung von Service Level Agreements mit spezifischen Sicherheitsklauseln\n• Regelmäßige Security Reviews und Audits bei kritischen Partnern\n\n🛡️ Contractual Security Controls:\n• Integration spezifischer Sicherheitsanforderungen in alle Verträge mit Drittanbietern\n• Right-to-Audit Klauseln für kritische Service Provider\n• Incident Notification und Response Verpflichtungen\n• Data Protection und Privacy Anforderungen gemäß GDPR\n• Liability und Insurance Regelungen für Sicherheitsvorfälle\n\n🔍 Continuous Monitoring:\n• Implementierung von Third-Party Risk Management Plattformen\n• Automated Security Monitoring für kritische Lieferanten\n• Threat Intelligence Sharing mit Geschäftspartnern\n• Supply Chain Attack Detection und Response Capabilities\n• Regular Security Posture Assessments für alle kritischen Partner\n\n📊 Governance und Oversight:\n• Aufbau einer zentralen Third-Party Risk Management Funktion\n• Board-Level Oversight für kritische Supply Chain Risiken\n• Integration von Supply Chain Security in Enterprise Risk Management\n• Regular Reporting über Third-Party Security Status\n• Escalation Prozesse für kritische Sicherheitsvorfälle bei Partnern\n\n🚨 Incident Response und Business Continuity:\n• Koordinierte Incident Response Pläne mit kritischen Drittanbietern\n• Supply Chain Disruption Response Strategien\n• Alternative Supplier Identification und Qualification\n• Business Continuity Testing mit Einbeziehung von Drittanbietern\n• Crisis Communication Protocols für Supply Chain Incidents"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie können Organisationen ihre ISO 27001 Compliance für IoT und OT-Umgebungen gewährleisten?',
        answer: "Die Gewährleistung von ISO 27001 Compliance für IoT und OT-Umgebungen stellt besondere Herausforderungen dar, da diese Systeme oft nicht für traditionelle IT-Sicherheitsmaßnahmen konzipiert wurden. Ein spezialisierter Ansatz ist erforderlich, der die einzigartigen Eigenschaften und Beschränkungen dieser Technologien berücksichtigt.\n\n🏭 OT/IoT Security Architecture:\n• Implementierung von Network Segmentation zwischen IT, OT und IoT-Netzwerken\n• Aufbau von Industrial DMZ Zonen für sichere Kommunikation\n• Zero Trust Architekturen speziell für OT und IoT-Umgebungen\n• Micro-Segmentation für granulare Zugriffskontrolle\n• Secure Remote Access Lösungen für OT-Wartung und Support\n\n🔒 Device Security und Management:\n• Asset Discovery und Inventory Management für alle IoT/OT-Geräte\n• Device Authentication und Certificate Management\n• Firmware Update Management und Patch-Strategien\n• Secure Boot und Hardware Security Module Integration\n• End-of-Life Management für Legacy-Systeme\n\n📡 Communication Security:\n• Verschlüsselung aller Kommunikation zwischen IoT/OT-Geräten\n• Secure Protocols für Industrial Communication\n• Network Access Control für alle verbundenen Geräte\n• Intrusion Detection Systeme speziell für OT-Netzwerke\n• Anomalie-Erkennung für ungewöhnliche Gerätekommunikation\n\n🛠️ Operational Technology Governance:\n• Entwicklung spezifischer Sicherheitsrichtlinien für OT-Umgebungen\n• Change Management Prozesse für kritische Industriesysteme\n• Incident Response Pläne für OT-spezifische Bedrohungen\n• Business Continuity Planning für Produktionsausfälle\n• Koordination zwischen IT und OT-Sicherheitsteams\n\n📊 Monitoring und Compliance:\n• Specialized SIEM Lösungen für OT und IoT-Umgebungen\n• Continuous Asset Monitoring und Vulnerability Assessment\n• Compliance Dashboards für IoT/OT-spezifische Anforderungen\n• Automated Compliance Reporting für regulatorische Anforderungen\n• Integration von OT-Security in Enterprise Risk Management\n\n🔄 Lifecycle Management:\n• Secure Development Lifecycle für IoT-Geräte und OT-Systeme\n• Security by Design Prinzipien für neue Implementierungen\n• Regular Security Assessments und Penetration Testing\n• Vendor Management für IoT/OT-Lieferanten\n• Technology Refresh Strategien für veraltete Systeme"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie können Unternehmen ihre ISO 27001 Compliance bei der digitalen Transformation aufrechterhalten?',
        answer: "Die Aufrechterhaltung von ISO 27001 Compliance während der digitalen Transformation erfordert einen proaktiven Ansatz, der Sicherheit als integralen Bestandteil aller Transformationsinitiativen betrachtet. Die Herausforderung liegt in der Balance zwischen Innovation und Sicherheit sowie der Anpassung von Compliance-Frameworks an neue Technologien und Geschäftsmodelle.\n\n🚀 Security-First Transformation:\n• Integration von Security by Design Prinzipien in alle Digitalisierungsprojekte\n• Aufbau von DevSecOps Praktiken für kontinuierliche Sicherheitsintegration\n• Privacy by Design Implementierung für neue digitale Services\n• Risk Assessment für alle neuen Technologien und Plattformen\n• Agile Security Frameworks für schnelle Entwicklungszyklen\n\n🏗️ Architecture und Governance:\n• Enterprise Security Architecture für digitale Plattformen\n• API Security Frameworks für Microservices und Cloud-native Anwendungen\n• Data Governance Strategien für Big Data und Analytics\n• Identity and Access Management für neue digitale Identitäten\n• Cloud Security Posture Management für Multi-Cloud-Umgebungen\n\n📱 Emerging Technology Integration:\n• AI/ML Security Frameworks für künstliche Intelligenz Anwendungen\n• Blockchain Security Considerations für Distributed Ledger Technologien\n• Edge Computing Security für dezentrale Datenverarbeitung\n• Quantum-Safe Cryptography Vorbereitung für zukünftige Bedrohungen\n• Extended Reality Security für AR/VR Anwendungen\n\n🔄 Agile Compliance Management:\n• Continuous Compliance Monitoring für sich schnell ändernde Umgebungen\n• Automated Compliance Testing in CI/CD Pipelines\n• Real-time Risk Assessment für neue Deployments\n• Dynamic Policy Enforcement basierend auf Kontext und Risiko\n• Adaptive Security Controls für verschiedene Betriebsmodi\n\n👥 Cultural Transformation:\n• Digital Security Awareness Programme für alle Mitarbeiter\n• Aufbau einer Security-First Kultur in agilen Teams\n• Cross-funktionale Security Champions in Entwicklungsteams\n• Continuous Learning Programme für neue Technologien\n• Innovation Labs mit integrierten Sicherheitsexperten\n\n📊 Measurement und Optimization:\n• Security Metrics für digitale Transformation Projekte\n• ROI Measurement für Security Investments\n• Continuous Improvement basierend auf Lessons Learned\n• Benchmarking gegen Digital Security Maturity Models\n• Predictive Analytics für zukünftige Sicherheitsanforderungen"
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
