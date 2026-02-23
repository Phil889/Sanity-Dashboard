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
    console.log('Updating IAM Manager page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-manager' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-manager" not found')
    }
    
    // Create new FAQs for IAM Manager fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was macht eine IAM Manager Plattform zu einem strategischen Erfolgsfaktor für moderne Unternehmen und wie unterscheidet sie sich von traditionellen Identitätsverwaltungsansätzen?',
        answer: "Eine IAM Manager Plattform ist das strategische Nervensystem moderner Identitätsverwaltung und transformiert fragmentierte, manuelle Prozesse in eine zentrale, intelligente Orchestrierungsebene für alle identitätsbezogenen Aktivitäten. Anders als traditionelle, isolierte Ansätze schafft ein moderner IAM Manager eine einheitliche Governance-Schicht, die Identitäten als strategische Assets behandelt und dabei Geschäftsprozesse beschleunigt statt behindert.\n\n🎯 Zentrale Orchestrierung und Business-Enablement:\n• Unified Identity Repository als Single Source of Truth für alle Benutzer-, Service- und Geräte-Identitäten\n• Intelligent Workflow Automation für nahtlose Integration in Geschäftsprozesse und HR-Systeme\n• Business-driven Governance mit automatischer Anpassung an organisatorische Veränderungen\n• Self-Service Capabilities für erhöhte Benutzerproduktivität und reduzierte IT-Belastung\n• Real-time Compliance Monitoring für kontinuierliche regulatorische Exzellenz\n\n🚀 Advanced Automation und Efficiency-Maximierung:\n• Intelligent Provisioning mit Machine Learning für optimierte Rollenzuweisungen\n• Automated Lifecycle Management von Onboarding bis Offboarding mit Zero-Touch-Prozessen\n• Dynamic Role Mining für kontinuierliche Optimierung von Zugriffsstrukturen\n• Exception-based Management mit automatischer Eskalation kritischer Ereignisse\n• Predictive Analytics für proaktive Identitätsverwaltung und Kapazitätsplanung\n\n🛡️ Enterprise-Grade Security und Risk Management:\n• Risk-based Access Controls mit kontinuierlicher Bewertung von Benutzerverhalten\n• Segregation of Duties Enforcement mit automatischer Konfliktdetektion\n• Comprehensive Audit Trails für lückenlose Nachverfolgung aller Identitätsaktivitäten\n• Threat Intelligence Integration für proaktive Abwehr identitätsbezogener Angriffe\n• Behavioral Analytics für Erkennung anomaler Aktivitätsmuster und Insider-Threats\n\n📊 Data-driven Decision Making und Analytics:\n• Identity Analytics Dashboard für Echtzeit-Einblicke in Identitätslandschaften\n• Access Pattern Analysis für Optimierung von Berechtigungsstrukturen\n• Compliance Reporting mit automatischer Generierung regulatorischer Berichte\n• Performance Metrics für kontinuierliche Verbesserung von IAM-Prozessen\n• Cost Optimization durch intelligente Ressourcenallokation und Lizenzmanagement\n\n🌐 Cloud-native Architecture und Scalability:\n• Multi-Cloud Identity Federation für konsistente Identitätsverwaltung über alle Umgebungen\n• API-first Design für nahtlose Integration in moderne Anwendungsarchitekturen\n• Microservices-based Architecture für flexible Deployment-Optionen und Skalierbarkeit\n• Container-native Deployment für DevOps-Integration und CI/CD-Workflows\n• Global Deployment mit lokaler Compliance für internationale Geschäftstätigkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Komponenten und Architekturen bilden eine enterprise-grade IAM Manager Plattform und wie arbeiten sie zusammen für optimale Identitätsverwaltung?',
        answer: "Eine enterprise-grade IAM Manager Plattform ist ein hochkomplexes Ökosystem intelligenter Komponenten, die nahtlos zusammenarbeiten, um eine robuste, skalierbare und adaptive Identitätsverwaltung zu ermöglichen. Diese Architektur muss sowohl höchste Governance-Standards als auch optimale Benutzerfreundlichkeit gewährleisten, während sie gleichzeitig Geschäftsprozesse beschleunigt und Compliance-Anforderungen automatisiert erfüllt.\n\n🏗️ Core Identity Management Infrastructure:\n• Central Identity Repository als hochverfügbare, skalierbare Datenbank für alle Identitätsinformationen\n• Identity Synchronization Engine für Real-time Updates zwischen verschiedenen Systemen\n• Attribute Management System für flexible Schema-Definition und Datenqualitätssicherung\n• Identity Federation Services für sichere Cross-Domain-Authentifizierung\n• Data Governance Framework für Privacy-by-Design und Datenschutz-Compliance\n\n⚙️ Intelligent Workflow und Automation Engine:\n• Business Process Integration für nahtlose Anbindung an HR- und Geschäftssysteme\n• Automated Provisioning Engine mit Rule-based und AI-gestützter Entscheidungsfindung\n• Approval Workflow Management mit flexiblen Eskalations- und Delegationsmechanismen\n• Exception Handling System für intelligente Behandlung von Edge-Cases\n• Lifecycle Management Automation für End-to-End Identitätsverwaltung\n\n🔐 Advanced Access Control und Governance Framework:\n• Role-based Access Control mit dynamischen Rollenmodellen und Vererbungsstrukturen\n• Attribute-based Access Control für granulare, kontextbasierte Zugriffskontrollen\n• Segregation of Duties Engine mit automatischer Konfliktdetektion und -auflösung\n• Access Certification Platform für regelmäßige Überprüfung und Rezertifizierung\n• Risk Assessment Engine mit Machine Learning für kontinuierliche Risikobewertung\n\n📊 Analytics und Intelligence Platform:\n• Identity Analytics Engine für datengetriebene Einblicke in Identitätslandschaften\n• Behavioral Analytics für Erkennung anomaler Benutzeraktivitäten\n• Compliance Monitoring Dashboard für Real-time Überwachung regulatorischer Anforderungen\n• Performance Analytics für kontinuierliche Optimierung von IAM-Prozessen\n• Predictive Intelligence für proaktive Identitätsverwaltung und Kapazitätsplanung\n\n🌐 Integration und API Management Layer:\n• RESTful API Gateway für sichere und skalierbare Systemintegration\n• Event-driven Architecture für Real-time Synchronisation und Benachrichtigungen\n• Connector Framework für Out-of-the-box Integration mit Standard-Anwendungen\n• Custom Integration Tools für Legacy-System-Anbindung und spezielle Anforderungen\n• Message Queue System für asynchrone Verarbeitung und Fehlerbehandlung\n\n🖥️ User Experience und Self-Service Portal:\n• Intuitive Web-based Portal mit responsive Design für alle Gerätetypen\n• Mobile Applications für moderne Arbeitsplätze und Remote-Access\n• Personalized Dashboards mit rollenbasierten Ansichten und Funktionen\n• Self-Service Request Management für autonome Benutzeraktivitäten\n• Contextual Help und Guided Workflows für optimale Benutzerfreundlichkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie implementiert man eine zentrale Identity Repository Lösung erfolgreich und welche strategischen Vorteile bietet sie für die Unternehmensgovernance?',
        answer: "Eine zentrale Identity Repository Lösung ist das strategische Fundament moderner Identitätsverwaltung und schafft eine einheitliche, vertrauenswürdige Datenquelle für alle identitätsbezogenen Informationen im Unternehmen. Diese zentrale Orchestrierung eliminiert Datensilos, reduziert Inkonsistenzen und ermöglicht eine ganzheitliche Sicht auf die Identitätslandschaft für optimierte Governance und Compliance.\n\n🎯 Strategic Repository Design und Architecture:\n• Master Data Management für einheitliche Identitätsdefinitionen und Datenstandards\n• Hierarchical Data Structure mit flexiblen Organisationsmodellen und Vererbungsregeln\n• Multi-tenant Architecture für sichere Trennung verschiedener Geschäftsbereiche\n• Scalable Database Design für Performance-Optimierung bei großen Datenmengen\n• Disaster Recovery und High Availability für Business Continuity\n\n🔄 Intelligent Data Synchronization und Quality Management:\n• Real-time Synchronization mit Event-driven Updates zwischen allen angeschlossenen Systemen\n• Data Quality Engine für automatische Validierung, Bereinigung und Anreicherung\n• Conflict Resolution Mechanisms für intelligente Behandlung von Dateninkonsistenzen\n• Change Detection und Audit Logging für lückenlose Nachverfolgung aller Datenänderungen\n• Data Lineage Tracking für Transparenz über Datenherkunft und -verarbeitung\n\n🛡️ Advanced Security und Privacy Framework:\n• Encryption at Rest und in Transit für umfassenden Datenschutz\n• Granular Access Controls für rollenbasierte Repository-Zugriffe\n• Data Masking und Anonymization für Entwicklungs- und Testumgebungen\n• Privacy-by-Design Implementation für GDPR und andere Datenschutzregulierungen\n• Secure API Layer für kontrollierte Datenexposition und Integration\n\n📊 Comprehensive Governance und Compliance Capabilities:\n• Data Governance Framework für einheitliche Datenrichtlinien und -standards\n• Automated Compliance Monitoring für kontinuierliche Überwachung regulatorischer Anforderungen\n• Data Retention Policies mit automatischer Archivierung und Löschung\n• Audit Trail Management für umfassende Dokumentation aller Repository-Aktivitäten\n• Regulatory Reporting mit automatischer Generierung compliance-relevanter Berichte\n\n🚀 Business-Enablement und Operational Excellence:\n• Self-Service Data Access für autorisierte Benutzer und Anwendungen\n• API-driven Integration für nahtlose Anbindung an Geschäftsprozesse\n• Real-time Analytics für datengetriebene Entscheidungsfindung\n• Performance Optimization mit intelligenter Caching und Indexierung\n• Scalability Planning für zukünftiges Wachstum und Expansion\n\n🌐 Cloud-native und Hybrid-Integration:\n• Multi-Cloud Deployment für Flexibilität und Vendor-Independence\n• Hybrid Architecture Support für On-Premises und Cloud-Integration\n• Container-based Deployment für moderne DevOps-Workflows\n• Global Distribution mit lokaler Compliance für internationale Anforderungen\n• Edge Computing Support für optimierte Performance in verteilten Umgebungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Workflow-Automation in einer modernen IAM Manager Strategie und wie optimiert sie Provisioning- und Lifecycle-Management-Prozesse?',
        answer: "Workflow-Automation ist das Herzstück einer modernen IAM Manager Strategie und transformiert manuelle, fehleranfällige Prozesse in intelligente, selbstoptimierende Systeme, die Geschäftsgeschwindigkeit erhöhen und gleichzeitig Compliance und Sicherheit gewährleisten. Diese Automatisierung ermöglicht es Unternehmen, von reaktiver zu proaktiver Identitätsverwaltung überzugehen und dabei operative Exzellenz zu erreichen.\n\n🎯 Intelligent Provisioning Automation und Business Integration:\n• Business-Rule-driven Provisioning mit automatischer Rollenzuweisung basierend auf Organisationsstrukturen\n• HR-System-Integration für nahtloses Onboarding neuer Mitarbeiter ohne manuelle Intervention\n• Dynamic Role Assignment mit Machine Learning für optimierte Berechtigungsverteilung\n• Exception-based Processing für intelligente Behandlung von Sonderfällen und Abweichungen\n• Bulk Operations Support für effiziente Massenverarbeitung bei Organisationsänderungen\n\n⚡ Advanced Lifecycle Management und Automation:\n• Automated Onboarding Workflows mit personalisierten Welcome-Prozessen und Schulungsintegration\n• Intelligent Role Transitions bei Positionswechseln mit automatischer Berechtigungsanpassung\n• Proactive Deprovisioning bei Austritten mit sicherer Datenübertragung und Account-Deaktivierung\n• Temporary Access Management für Projektarbeit und befristete Zugriffe\n• Dormant Account Detection mit automatischer Bereinigung inaktiver Identitäten\n\n🔄 Sophisticated Approval und Delegation Mechanisms:\n• Multi-level Approval Workflows mit flexiblen Eskalationspfaden und Zeitlimits\n• Delegation Management für Urlaubsvertretungen und Organisationsänderungen\n• Risk-based Approval mit automatischer Weiterleitung kritischer Anfragen\n• Parallel Processing für zeitkritische Genehmigungsprozesse\n• Audit-compliant Documentation aller Genehmigungsschritte und Entscheidungen\n\n📊 Process Optimization und Continuous Improvement:\n• Workflow Analytics für Identifikation von Engpässen und Optimierungspotenzialen\n• Performance Metrics mit SLA-Monitoring und automatischen Benachrichtigungen\n• Process Mining für datengetriebene Analyse und Verbesserung von Workflows\n• A/B Testing für kontinuierliche Optimierung von Automatisierungsregeln\n• Feedback Loops für selbstlernende Systeme und adaptive Prozessverbesserung\n\n🛡️ Security und Compliance Integration:\n• Segregation of Duties Enforcement mit automatischer Konfliktprävention\n• Compliance Checkpoints in allen Workflow-Stufen für regulatorische Sicherheit\n• Risk Assessment Integration für risikobasierte Entscheidungsfindung\n• Fraud Detection mit Anomaly Detection in Provisioning-Mustern\n• Incident Response Integration für schnelle Reaktion auf Sicherheitsereignisse\n\n🌐 Cloud-native und API-driven Architecture:\n• Microservices-based Workflow Engine für Skalierbarkeit und Flexibilität\n• Event-driven Processing für Real-time Reaktion auf Geschäftsereignisse\n• API-first Design für nahtlose Integration in moderne Anwendungslandschaften\n• Container-based Deployment für DevOps-Integration und CI/CD-Workflows\n• Multi-Cloud Support für Hybrid- und Multi-Cloud-Strategien"
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
