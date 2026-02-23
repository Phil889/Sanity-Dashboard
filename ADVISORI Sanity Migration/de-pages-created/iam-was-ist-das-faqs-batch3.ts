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
    console.log('Updating IAM Was ist das page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-was-ist-das" not found')
    }
    
    // Create new FAQs for IAM technologies and standards
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Standards und Protokolle sind für IAM-Systeme relevant und wie gewährleisten sie Interoperabilität zwischen verschiedenen Systemen?',
        answer: "IAM-Standards und Protokolle bilden das technische Fundament für interoperable, sichere und skalierbare Identitätsverwaltung. Diese Standards ermöglichen es verschiedenen Systemen, Anwendungen und Organisationen, nahtlos zusammenzuarbeiten, während sie gleichzeitig höchste Sicherheits- und Compliance-Standards gewährleisten.\n\n🔗 Fundamentale Authentication Standards:\n• SAML für XML-basierte Authentifizierung und Autorisierung in Enterprise-Umgebungen\n• OAuth für sichere API-Autorisierung und delegierte Zugriffskontrolle\n• OpenID Connect für moderne Identity Layer über OAuth mit standardisierter Benutzerinformation\n• Kerberos für netzwerkbasierte Authentifizierung in Windows-Domänen\n• LDAP für Directory Services und hierarchische Identitätsverwaltung\n\n🌐 Federation und Cross-Domain Standards:\n• WS-Federation für Web Services basierte Identitätsföderation\n• SCIM für standardisierte Benutzer- und Gruppenverwaltung über Systemgrenzen\n• SPML für Service Provisioning und Lifecycle Management\n• Liberty Alliance Standards für föderierte Identitätsverwaltung\n• Shibboleth für akademische und Forschungseinrichtungen\n\n🔐 Security und Cryptographic Standards:\n• PKI Standards für Public Key Infrastructure und Certificate Management\n• X.509 für digitale Zertifikate und Certificate Authority Hierarchien\n• JWT für sichere Token-basierte Informationsübertragung\n• FIDO für passwordlose Authentifizierung und Hardware Security Keys\n• WebAuthn für Web-basierte starke Authentifizierung\n\n📋 Governance und Compliance Standards:\n• ISO 27001 für Information Security Management Systems\n• NIST Cybersecurity Framework für umfassende Sicherheitskontrollen\n• COBIT für IT Governance und Management\n• SOX Compliance für finanzielle Berichterstattung und Kontrollen\n• GDPR Requirements für Datenschutz und Privacy Management\n\n🏗️ Architecture und Integration Standards:\n• REST APIs für moderne, skalierbare Systemintegration\n• GraphQL für flexible Datenabfragen und API-Optimierung\n• JSON Standards für Datenformat und Strukturierung\n• XML Standards für strukturierte Datenübertragung\n• SOAP für Web Services und Enterprise Integration\n\n🔄 Emerging Standards und Future Technologies:\n• Zero Trust Architecture Standards für moderne Sicherheitsmodelle\n• Blockchain Identity Standards für dezentrale Identitätsverwaltung\n• AI/ML Standards für intelligente Identitätsanalyse\n• IoT Identity Standards für Internet of Things Geräte\n• Cloud Security Standards für Multi-Cloud Identitätsverwaltung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie unterscheiden sich verschiedene IAM-Deployment-Modelle und welche Vor- und Nachteile haben On-Premises, Cloud und Hybrid-Ansätze?',
        answer: "Die Wahl des richtigen IAM-Deployment-Modells ist eine strategische Entscheidung, die weitreichende Auswirkungen auf Sicherheit, Kosten, Skalierbarkeit und operative Effizienz hat. Jedes Modell bietet spezifische Vorteile und Herausforderungen, die sorgfältig gegen die individuellen Unternehmensanforderungen abgewogen werden müssen.\n\n🏢 On-Premises IAM-Deployment:\n• Vollständige Kontrolle über Infrastruktur, Daten und Sicherheitsrichtlinien\n• Maximale Anpassungsfähigkeit für spezifische Geschäftsanforderungen und Compliance-Vorgaben\n• Direkte Integration mit bestehenden Legacy-Systemen und Unternehmensanwendungen\n• Höhere initiale Investitionskosten für Hardware, Software und Infrastruktur\n• Interne Expertise erforderlich für Installation, Konfiguration und kontinuierlichen Betrieb\n• Längere Implementierungszeiten und komplexere Upgrade-Prozesse\n• Skalierungsherausforderungen bei wachsenden Benutzer- und Anwendungszahlen\n\n☁️ Cloud-basierte IAM-Lösungen:\n• Schnelle Bereitstellung und Time-to-Value durch vorkonfigurierte Services\n• Automatische Skalierung und elastische Ressourcennutzung basierend auf Bedarf\n• Reduzierte Infrastrukturkosten und vorhersagbare Betriebsausgaben\n• Kontinuierliche Updates und Sicherheits-Patches durch Cloud-Provider\n• Globale Verfügbarkeit und integrierte Disaster Recovery Mechanismen\n• Potenzielle Vendor Lock-in Risiken und Abhängigkeit von Cloud-Provider\n• Compliance-Herausforderungen bei regulierten Industrien und Datenschutzbestimmungen\n• Begrenzte Anpassungsmöglichkeiten im Vergleich zu On-Premises-Lösungen\n\n🔄 Hybrid IAM-Architekturen:\n• Optimale Balance zwischen Kontrolle und Flexibilität durch Kombination beider Ansätze\n• Schrittweise Cloud-Migration ohne Disruption bestehender Geschäftsprozesse\n• Sensitive Daten On-Premises bei gleichzeitiger Cloud-Skalierbarkeit für Standard-Workloads\n• Komplexere Architektur mit erhöhten Integrations- und Management-Anforderungen\n• Konsistente Sicherheitsrichtlinien über verschiedene Umgebungen hinweg erforderlich\n• Höhere operative Komplexität durch Management multipler Infrastrukturen\n• Erweiterte Monitoring- und Governance-Anforderungen für einheitliche Übersicht\n\n💡 Multi-Cloud und Federated Approaches:\n• Vendor-Diversifikation zur Risikominimierung und Vermeidung von Lock-in\n• Best-of-Breed Ansatz durch Nutzung spezialisierter Services verschiedener Provider\n• Erhöhte Komplexität bei Integration und einheitlicher Governance\n• Erweiterte Sicherheitsanforderungen für Cross-Cloud Communication\n• Spezialisierte Expertise erforderlich für Multi-Cloud Management\n\n🎯 Entscheidungskriterien und Best Practices:\n• Business Requirements Analysis für Alignment mit strategischen Zielen\n• Compliance und Regulatory Considerations für regulierte Industrien\n• Total Cost of Ownership Bewertung über den gesamten Lebenszyklus\n• Risk Assessment für Sicherheits- und Verfügbarkeitsrisiken\n• Scalability Requirements für zukünftiges Wachstum und Expansion\n• Integration Complexity mit bestehenden Systemen und Anwendungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen APIs in modernen IAM-Systemen und wie ermöglichen sie Integration mit verschiedenen Anwendungen und Services?',
        answer: "APIs sind das technische Rückgrat moderner IAM-Systeme und ermöglichen nahtlose Integration, Automatisierung und Skalierbarkeit in komplexen Unternehmenslandschaften. Sie transformieren IAM von isolierten Systemen zu intelligenten, vernetzten Plattformen, die als strategische Enabler für digitale Transformation fungieren.\n\n🔗 API-First Architecture Principles:\n• RESTful Design für standardisierte, skalierbare und wartbare Schnittstellen\n• GraphQL Integration für flexible Datenabfragen und optimierte Performance\n• Microservices Architecture für modulare, unabhängig deploybare IAM-Komponenten\n• Event-driven Communication für Real-time Synchronisation und Benachrichtigungen\n• Stateless Design für horizontale Skalierbarkeit und Cloud-native Deployment\n\n🛡️ Security und Authentication APIs:\n• OAuth Endpoints für sichere Autorisierung und Token-Management\n• OpenID Connect APIs für standardisierte Benutzerauthentifizierung\n• SAML Assertion APIs für Enterprise Federation und Single Sign-On\n• Multi-Factor Authentication APIs für erweiterte Sicherheitskontrollen\n• Risk Assessment APIs für dynamische Sicherheitsbewertung\n\n👥 Identity Management APIs:\n• User Provisioning APIs für automatisierte Benutzerkonten-Verwaltung\n• Directory Services APIs für Zugriff auf Identitätsdaten und Attribute\n• Group Management APIs für dynamische Gruppenzugehörigkeit\n• Role Assignment APIs für flexible Berechtigungsverwaltung\n• Profile Management APIs für Self-Service Funktionalitäten\n\n📊 Governance und Analytics APIs:\n• Access Review APIs für automatisierte Compliance-Prozesse\n• Audit Trail APIs für umfassende Protokollierung und Forensik\n• Risk Analytics APIs für datengetriebene Sicherheitsentscheidungen\n• Reporting APIs für Executive Dashboards und Compliance-Berichte\n• Policy Management APIs für zentrale Richtlinienverwaltung\n\n🔄 Integration und Automation APIs:\n• Webhook Integration für Event-basierte Automatisierung\n• Workflow APIs für Business Process Integration\n• Connector APIs für Legacy System Integration\n• Synchronization APIs für Multi-System Datenabgleich\n• Bulk Operations APIs für effiziente Massenoperationen\n\n🌐 Modern Application Integration:\n• Mobile App APIs für native Anwendungsintegration\n• Single Page Application Support für moderne Web-Frameworks\n• Container und Kubernetes Integration für Cloud-native Deployments\n• Serverless Function Integration für ereignisgesteuerte Architekturen\n• IoT Device APIs für Internet of Things Identitätsverwaltung\n\n🚀 Developer Experience und Ecosystem:\n• Comprehensive API Documentation für einfache Integration\n• SDK und Libraries für verschiedene Programmiersprachen\n• Sandbox Environments für sichere Entwicklung und Testing\n• Rate Limiting und Throttling für Performance-Optimierung\n• Versioning Strategies für Backward Compatibility"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie wird die Sicherheit von IAM-Systemen selbst gewährleistet und welche Maßnahmen schützen vor Angriffen auf die Identitätsinfrastruktur?',
        answer: "Die Sicherheit von IAM-Systemen ist von kritischer Bedeutung, da sie das Herzstück der gesamten Unternehmenssicherheit bilden. Ein kompromittiertes IAM-System kann katastrophale Auswirkungen haben, weshalb mehrschichtige Sicherheitsmaßnahmen, kontinuierliche Überwachung und proaktive Bedrohungsabwehr unerlässlich sind.\n\n🛡️ Infrastructure Security und Hardening:\n• Secure System Architecture mit Defense-in-Depth Prinzipien\n• Network Segmentation für Isolation kritischer IAM-Komponenten\n• Endpoint Protection für alle IAM-Server und Workstations\n• Regular Security Patching und Vulnerability Management\n• Secure Configuration Management nach Industry Best Practices\n• Physical Security Controls für On-Premises Infrastruktur\n• Backup und Disaster Recovery für Business Continuity\n\n🔐 Cryptographic Protection und Key Management:\n• End-to-End Encryption für alle Datenübertragungen und Speicherung\n• Hardware Security Modules für sichere Schlüsselverwaltung\n• Certificate Management und PKI Integration\n• Secure Token Generation und Validation\n• Cryptographic Agility für zukünftige Algorithmus-Updates\n• Key Rotation Policies für regelmäßige Schlüsselerneuerung\n• Secure Random Number Generation für kryptographische Operationen\n\n🔍 Monitoring und Threat Detection:\n• Security Information and Event Management Integration\n• Real-time Anomaly Detection für ungewöhnliche Aktivitätsmuster\n• Behavioral Analytics für Insider Threat Detection\n• Threat Intelligence Integration für proaktive Bedrohungsabwehr\n• Automated Incident Response für schnelle Reaktion auf Sicherheitsvorfälle\n• Forensic Capabilities für detaillierte Sicherheitsanalysen\n• Continuous Security Assessment und Penetration Testing\n\n🎯 Access Control und Privilege Management:\n• Principle of Least Privilege für alle IAM-Administratoren\n• Privileged Access Management für kritische IAM-Funktionen\n• Multi-Factor Authentication für alle administrativen Zugriffe\n• Just-in-Time Access für temporäre Berechtigungserweiterung\n• Segregation of Duties für kritische IAM-Operationen\n• Regular Access Reviews für administrative Berechtigungen\n• Emergency Access Procedures mit umfassender Protokollierung\n\n🔄 Operational Security und Governance:\n• Change Management Processes für alle IAM-Modifikationen\n• Configuration Management für konsistente Sicherheitseinstellungen\n• Security Awareness Training für IAM-Administratoren\n• Incident Response Procedures für Sicherheitsvorfälle\n• Business Continuity Planning für IAM-Services\n• Vendor Security Assessment für Third-Party Komponenten\n• Regular Security Audits und Compliance Assessments\n\n🚨 Advanced Threat Protection:\n• Zero Trust Architecture für IAM-Infrastruktur\n• Deception Technology für frühe Angriffserkennung\n• Machine Learning basierte Threat Detection\n• Advanced Persistent Threat Protection\n• Supply Chain Security für IAM-Komponenten\n• Cloud Security Posture Management für Cloud-basierte IAM\n• Container Security für containerisierte IAM-Deployments"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
