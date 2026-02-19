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
    console.log('Updating Was ist IAM page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-iam' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-iam" not found')
    }
    
    // Create new FAQs for IAM fundamentals and definitions
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist Identity & Access Management und warum ist es das strategische Fundament moderner Unternehmenssicherheit?',
        answer: "Identity & Access Management ist weit mehr als nur Benutzerverwaltung – es ist das strategische Rückgrat digitaler Transformation und der Schlüssel zu sicherer, effizienter Geschäftsführung in einer vernetzten Welt. IAM orchestriert die komplexe Balance zwischen maximaler Sicherheit und optimaler Benutzerfreundlichkeit und ermöglicht es Unternehmen, ihre digitalen Assets zu schützen, während sie gleichzeitig Innovation und Produktivität fördern.\n\n🎯 Strategische Definition und Kernfunktionen:\n• Zentrale Identitätsverwaltung für alle digitalen Entitäten im Unternehmen\n• Granulare Zugriffskontrolle basierend auf Rollen, Kontext und Risikobewertung\n• Automatisierte Provisioning- und Deprovisioning-Prozesse für Lifecycle-Management\n• Single Sign-On und nahtlose Authentifizierung für optimale User Experience\n• Comprehensive Audit-Trails und Compliance-Reporting für regulatorische Anforderungen\n\n🛡️ Sicherheits-Architektur und Schutzfunktionen:\n• Zero-Trust-Prinzipien mit kontinuierlicher Verifikation und Risikobewertung\n• Multi-Faktor-Authentifizierung und adaptive Authentifizierungsstrategien\n• Privileged Access Management für kritische Systemzugriffe und administrative Funktionen\n• Threat Detection und Anomaly Detection für proaktive Sicherheitsüberwachung\n• Identity Governance für kontinuierliche Überwachung und Optimierung von Zugriffsrechten\n\n🚀 Business-Enablement und Produktivitätssteigerung:\n• Nahtlose Integration in Cloud-Services und moderne Arbeitsplatz-Technologien\n• Self-Service-Funktionen für Benutzer zur Reduzierung von IT-Support-Anfragen\n• Automated Workflows für effiziente Genehmigungsprozesse und Rechteverwaltung\n• Mobile und Remote Access Enablement für flexible Arbeitsmodelle\n• API-basierte Integration für moderne Anwendungslandschaften und Microservices\n\n📊 Compliance und Governance-Integration:\n• Automated Compliance-Reporting für regulatorische Anforderungen wie DSGVO, SOX, HIPAA\n• Risk-based Access Controls für dynamische Sicherheitsanpassungen\n• Segregation of Duties und Conflict of Interest Detection\n• Data Classification und Access Controls basierend auf Datensensitivität\n• Continuous Monitoring und Real-time Alerting für Compliance-Verstöße\n\n🔄 Moderne IAM-Evolution und Innovation:\n• Cloud-native Architekturen für Skalierbarkeit und Flexibilität\n• AI und Machine Learning Integration für intelligente Anomaly Detection\n• Biometrische Authentifizierung und passwordless Authentication\n• Blockchain-basierte Identity Solutions für dezentrale Identitätsverwaltung\n• IoT Device Identity Management für das Internet der Dinge"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Komponenten bilden ein modernes IAM-System und wie arbeiten sie zusammen für maximale Sicherheit und Effizienz?',
        answer: "Ein modernes IAM-System ist ein komplexes Ökosystem ineinandergreifender Komponenten, die gemeinsam eine robuste, skalierbare und benutzerfreundliche Identitäts- und Zugriffsverwaltung ermöglichen. Diese Komponenten müssen nahtlos zusammenarbeiten, um sowohl Sicherheitsanforderungen als auch Geschäftsziele zu erfüllen.\n\n🏗️ Core Identity Management Komponenten:\n• Identity Repository als zentrale Datenbank für alle Benutzeridentitäten und Attribute\n• Directory Services für hierarchische Organisation und Verwaltung von Identitätsinformationen\n• Identity Lifecycle Management für automatisierte Erstellung, Änderung und Löschung von Identitäten\n• Identity Federation für sichere Identitätsaustausch zwischen verschiedenen Domänen und Organisationen\n• Identity Synchronization für konsistente Identitätsdaten über alle verbundenen Systeme\n\n🔐 Authentication und Authorization Engine:\n• Multi-Factor Authentication mit verschiedenen Authentifizierungsmethoden und Risikobewertung\n• Single Sign-On für nahtlose Anmeldung bei allen autorisierten Anwendungen\n• Adaptive Authentication mit kontextbasierter Risikobewertung und dynamischen Sicherheitsanforderungen\n• Policy Engine für granulare Autorisierungsregeln und Zugriffskontrollen\n• Session Management für sichere und effiziente Verwaltung von Benutzersitzungen\n\n⚙️ Provisioning und Workflow Management:\n• Automated Provisioning für schnelle und konsistente Bereitstellung von Zugriffsrechten\n• Role-Based Access Control mit hierarchischen Rollenmodellen und Vererbungsstrukturen\n• Approval Workflows für kontrollierte Genehmigungsprozesse bei kritischen Zugriffsanfragen\n• Segregation of Duties für automatische Erkennung und Verhinderung von Interessenkonflikten\n• Recertification Processes für regelmäßige Überprüfung und Validierung von Zugriffsrechten\n\n🛡️ Privileged Access Management Komponenten:\n• Privileged Account Management für sichere Verwaltung administrativer und Service-Accounts\n• Password Vaulting für zentrale und sichere Speicherung privilegierter Credentials\n• Session Recording und Monitoring für umfassende Überwachung privilegierter Aktivitäten\n• Just-in-Time Access für temporäre Erhöhung von Berechtigungen bei Bedarf\n• Privileged Analytics für Erkennung anomaler Aktivitäten und Risikobewertung\n\n📊 Governance und Compliance Module:\n• Access Governance für kontinuierliche Überwachung und Optimierung von Zugriffsrechten\n• Risk Analytics für datengetriebene Risikobewertung und Entscheidungsfindung\n• Compliance Reporting für automatisierte Erstellung regulatorischer Berichte\n• Audit Trail Management für umfassende Protokollierung aller IAM-Aktivitäten\n• Identity Analytics für Erkennung von Mustern und Anomalien in Identitätsdaten\n\n🔗 Integration und API Management:\n• API Gateway für sichere und skalierbare Integration mit Anwendungen und Services\n• Connector Framework für standardisierte Anbindung verschiedener Zielsysteme\n• Event-driven Architecture für Real-time Synchronisation und Benachrichtigungen\n• Cloud Integration für nahtlose Anbindung von Cloud-Services und SaaS-Anwendungen\n• Legacy System Integration für Einbindung bestehender Altsysteme ohne Disruption"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie unterscheidet sich modernes IAM von traditioneller Benutzerverwaltung und welche strategischen Vorteile bietet es Unternehmen?',
        answer: "Modernes IAM revolutioniert die Art, wie Unternehmen Identitäten und Zugriffe verwalten, und geht weit über traditionelle Benutzerverwaltung hinaus. Es transformiert Sicherheit von einem reaktiven Kostenfaktor zu einem proaktiven Business-Enabler, der Innovation fördert und gleichzeitig Risiken minimiert.\n\n🔄 Evolution von traditioneller zu moderner Identitätsverwaltung:\n• Von manueller zu automatisierter Verwaltung mit intelligenten Workflows und Self-Service-Funktionen\n• Von isolierten Silos zu zentralisierter, einheitlicher Identitätsverwaltung über alle Systeme\n• Von statischen Berechtigungen zu dynamischen, kontextbasierten Zugriffskontrollen\n• Von reaktiver zu proaktiver Sicherheit mit kontinuierlicher Risikobewertung und Anomaly Detection\n• Von Compliance-Belastung zu automatisierter Governance mit Real-time Monitoring\n\n🎯 Strategische Business-Vorteile und ROI-Faktoren:\n• Signifikante Reduzierung von IT-Betriebskosten durch Automatisierung und Self-Service\n• Beschleunigte Onboarding-Prozesse für neue Mitarbeiter und Partner\n• Verbesserte Produktivität durch nahtlose Single Sign-On Erfahrungen\n• Reduzierte Sicherheitsrisiken und potenzielle Schadensbegrenzung bei Incidents\n• Optimierte Compliance-Kosten durch automatisierte Reporting und Audit-Bereitschaft\n\n🛡️ Erweiterte Sicherheits-Capabilities:\n• Zero-Trust-Architektur mit kontinuierlicher Verifikation statt perimeter-basierter Sicherheit\n• Behavioral Analytics für Erkennung subtiler Bedrohungen und Insider-Threats\n• Risk-based Authentication mit dynamischen Sicherheitsanforderungen basierend auf Kontext\n• Threat Intelligence Integration für proaktive Abwehr bekannter Angriffsmuster\n• Automated Incident Response für schnelle Reaktion auf Sicherheitsvorfälle\n\n🚀 Innovation und Digital Transformation Enablement:\n• Cloud-first Strategien mit nahtloser Integration von SaaS und Cloud-Services\n• API-driven Architecture für moderne Anwendungsentwicklung und Microservices\n• Mobile und Remote Work Enablement für flexible Arbeitsmodelle\n• IoT und Device Management für das Internet der Dinge und Edge Computing\n• AI und Machine Learning Integration für intelligente Automatisierung und Entscheidungsfindung\n\n📈 Skalierbarkeit und Zukunftssicherheit:\n• Elastische Cloud-Architekturen für dynamisches Wachstum und Lastverteilung\n• Modulare Komponenten für flexible Anpassung an sich ändernde Anforderungen\n• Standards-basierte Integration für Vendor-Unabhängigkeit und Zukunftssicherheit\n• Continuous Improvement durch Analytics und Performance-Monitoring\n• Innovation-Ready Platform für Integration neuer Technologien und Geschäftsmodelle\n\n🌐 Globale und Multi-Cloud Capabilities:\n• Multi-Region Deployment für globale Unternehmen mit lokalen Compliance-Anforderungen\n• Cross-Cloud Identity Federation für Hybrid und Multi-Cloud Strategien\n• Disaster Recovery und Business Continuity für kritische Geschäftsprozesse\n• Geo-distributed Architecture für optimale Performance und Ausfallsicherheit\n• Cultural und Regulatory Adaptation für internationale Geschäftstätigkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt IAM bei der digitalen Transformation und wie ermöglicht es neue Geschäftsmodelle und Innovationen?',
        answer: "IAM ist der unsichtbare Katalysator digitaler Transformation und ermöglicht es Unternehmen, innovative Geschäftsmodelle sicher zu realisieren, neue Märkte zu erschließen und gleichzeitig höchste Sicherheits- und Compliance-Standards zu gewährleisten. Es verwandelt Sicherheit von einem Hindernis zu einem strategischen Wettbewerbsvorteil.\n\n🚀 Digital Transformation Enablement:\n• Sichere Cloud-Migration mit nahtloser Integration bestehender und neuer Systeme\n• API-Economy Enablement für Ecosystem-basierte Geschäftsmodelle und Partnerschaften\n• Microservices-Architektur Support für agile Entwicklung und schnelle Innovation\n• DevSecOps Integration für Security-by-Design in modernen Entwicklungsprozessen\n• Data-driven Decision Making durch umfassende Identity Analytics und Insights\n\n🌐 Neue Geschäftsmodell-Möglichkeiten:\n• Customer Identity Management für direkte Kundenbeziehungen und personalisierte Services\n• Partner Ecosystem Integration für erweiterte Wertschöpfungsketten und Collaboration\n• Platform Business Models mit sicherer Third-Party Integration und API-Management\n• Subscription und SaaS Models mit flexibler Zugriffsverwaltung und Billing-Integration\n• Marketplace und Multi-Tenant Architectures für skalierbare B2B und B2C Plattformen\n\n🔗 Innovation durch sichere Konnektivität:\n• IoT und Edge Computing Integration für Smart Products und Connected Services\n• Mobile-first Strategies mit nahtloser Cross-Device Identity und Access Management\n• AI und Machine Learning Enablement durch sichere Datenintegration und -zugriff\n• Blockchain Integration für dezentrale Identity Solutions und Trust Networks\n• Augmented und Virtual Reality Support für immersive Geschäftserfahrungen\n\n📊 Datengetriebene Geschäftsinnovation:\n• Customer Journey Analytics durch sichere Identity-basierte Tracking und Personalisierung\n• Predictive Analytics für proaktive Kundenbetreuung und Service-Optimierung\n• Real-time Personalization durch kontextbasierte Identity-Informationen\n• Cross-Channel Integration für nahtlose Omnichannel-Erfahrungen\n• Privacy-preserving Analytics für DSGVO-konforme Datennutzung und Insights\n\n🛡️ Sicherheit als Wettbewerbsvorteil:\n• Trust-as-a-Service für Kunden und Partner durch transparente Sicherheitsstandards\n• Compliance-by-Design für schnelle Markteinführung in regulierten Industrien\n• Zero-Trust Architecture für sichere Remote Work und globale Collaboration\n• Incident Response Excellence für Reputation Management und Kundenvertrauen\n• Privacy Engineering für differenzierende Datenschutz-Capabilities\n\n⚡ Agilität und Time-to-Market Beschleunigung:\n• Self-Service Capabilities für schnelle Benutzer-Onboarding und Service-Aktivierung\n• Automated Provisioning für rapid Scaling und elastische Ressourcen-Nutzung\n• API-first Design für schnelle Integration neuer Services und Partner\n• Cloud-native Deployment für globale Verfügbarkeit und Performance\n• Continuous Delivery Support für agile Produktentwicklung und -deployment\n\n🎯 Strategische Differenzierung:\n• Customer Experience Excellence durch frictionless Authentication und Personalization\n• Operational Excellence durch automatisierte Prozesse und reduzierte manuelle Eingriffe\n• Innovation Speed durch sichere Experimentier-Umgebungen und Sandbox-Capabilities\n• Global Reach durch Multi-Region Identity Services und lokale Compliance\n• Ecosystem Leadership durch offene Standards und Partner-freundliche Integration"
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
