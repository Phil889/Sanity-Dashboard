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
    console.log('Updating IAM Was ist das page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-was-ist-das" not found')
    }
    
    // Create new FAQs for IAM implementation and governance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie funktioniert Identity Governance in IAM-Systemen und warum ist sie für Compliance und Risikomanagement entscheidend?',
        answer: "Identity Governance ist das strategische Framework für kontinuierliche Überwachung, Kontrolle und Optimierung aller Identitäts- und Zugriffsprozesse in einer Organisation. Es geht weit über traditionelle Zugriffsverwaltung hinaus und etabliert ein intelligentes System für Risikomanagement, Compliance-Automatisierung und strategische Entscheidungsfindung basierend auf Identitätsdaten.\n\n🎯 Fundamentale Governance-Prinzipien und Frameworks:\n• Continuous Monitoring für permanente Überwachung aller Identitäts- und Zugriffsaktivitäten\n• Risk-based Decision Making mit datengetriebener Bewertung von Sicherheitsrisiken\n• Policy-driven Automation für konsistente Durchsetzung von Sicherheitsrichtlinien\n• Segregation of Duties zur Verhinderung von Interessenkonflikten und Compliance-Verstößen\n• Least Privilege Enforcement für minimale Berechtigungen und Just-in-Time-Zugriffe\n\n📊 Access Analytics und Intelligence:\n• Identity Analytics für tiefe Einblicke in Benutzerverhalten und Zugriffsmuster\n• Anomaly Detection mit Machine Learning für Erkennung ungewöhnlicher Aktivitäten\n• Risk Scoring für dynamische Bewertung von Benutzern und Zugriffsanfragen\n• Behavioral Analysis zur Identifizierung von Insider-Threats und kompromittierten Accounts\n• Predictive Analytics für proaktive Risikobewertung und präventive Maßnahmen\n\n🔍 Access Reviews und Recertification:\n• Automated Access Reviews für regelmäßige Überprüfung und Validierung von Zugriffsrechten\n• Risk-based Recertification mit Priorisierung kritischer Zugriffe und Benutzer\n• Manager-driven Reviews für geschäftsorientierte Genehmigungsprozesse\n• Exception Handling für strukturierte Behandlung von Compliance-Abweichungen\n• Remediation Workflows für automatisierte Behebung identifizierter Probleme\n\n📋 Compliance Automation und Reporting:\n• Regulatory Compliance Monitoring für automatisierte Überprüfung gesetzlicher Anforderungen\n• Audit Trail Management mit umfassender Protokollierung aller Governance-Aktivitäten\n• Compliance Dashboards für Real-time Überwachung und Executive Reporting\n• Violation Detection für sofortige Identifizierung von Richtlinienverstößen\n• Automated Reporting für effiziente Erstellung regulatorischer Berichte\n\n🛡️ Risk Management und Threat Response:\n• Identity Risk Assessment für kontinuierliche Bewertung identitätsbezogener Risiken\n• Threat Intelligence Integration für proaktive Anpassung von Sicherheitsmaßnahmen\n• Incident Response Automation für schnelle Reaktion auf Sicherheitsvorfälle\n• Forensic Capabilities für detaillierte Analyse von Sicherheitsereignissen\n• Business Impact Analysis für Bewertung der Auswirkungen von Sicherheitsmaßnahmen\n\n🔄 Lifecycle Governance und Optimization:\n• Identity Lifecycle Management mit automatisierter Verwaltung von Identitäten\n• Role Optimization für kontinuierliche Verbesserung von Rollenmodellen\n• Policy Refinement basierend auf Analytics und Compliance-Anforderungen\n• Performance Monitoring für Optimierung von Governance-Prozessen\n• Continuous Improvement durch datengetriebene Erkenntnisse und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt Single Sign-On in modernen IAM-Architekturen und wie verbessert es sowohl Sicherheit als auch Benutzerfreundlichkeit?',
        answer: "Single Sign-On ist eine fundamentale IAM-Technologie, die es Benutzern ermöglicht, sich einmal zu authentifizieren und dann nahtlos auf alle autorisierten Anwendungen und Ressourcen zuzugreifen. SSO revolutioniert die Benutzerfreundlichkeit, während es gleichzeitig die Sicherheit durch zentrale Kontrolle und erweiterte Authentifizierungsmechanismen erhöht.\n\n🔐 SSO-Architektur und Funktionsweise:\n• Identity Provider als zentrale Authentifizierungsinstanz für alle verbundenen Anwendungen\n• Service Provider Integration für nahtlose Anbindung verschiedener Anwendungen und Services\n• Token-based Authentication mit sicheren Tokens für Benutzerverifikation\n• Session Management für intelligente Verwaltung von Benutzersitzungen über alle Anwendungen\n• Federation Protocols wie SAML, OAuth und OpenID Connect für standardisierte Integration\n\n🚀 Benutzerfreundlichkeit und Produktivitätssteigerung:\n• Password Fatigue Reduction durch Eliminierung multipler Anmeldeprozesse\n• Seamless User Experience mit nahtlosen Übergängen zwischen Anwendungen\n• Reduced Login Time für signifikante Zeitersparnis bei täglichen Arbeitsabläufen\n• Mobile Optimization für konsistente Erfahrungen über alle Geräte hinweg\n• Self-Service Capabilities für Benutzer-initiierte Aktionen ohne IT-Unterstützung\n\n🛡️ Erweiterte Sicherheitsfeatures:\n• Centralized Authentication für einheitliche Sicherheitskontrollen und Überwachung\n• Multi-Factor Authentication Integration für erhöhte Sicherheit bei kritischen Anwendungen\n• Adaptive Authentication mit risikobasisierter Anpassung der Sicherheitsanforderungen\n• Session Security mit intelligenter Timeout-Steuerung und Anomaly Detection\n• Centralized Logout für sichere Beendigung aller Benutzersitzungen\n\n📊 Monitoring und Analytics:\n• Access Analytics für detaillierte Einblicke in Benutzerverhalten und Anwendungsnutzung\n• Security Monitoring mit Real-time Überwachung verdächtiger Aktivitäten\n• Performance Metrics für Optimierung der SSO-Infrastruktur\n• Compliance Reporting für Nachweis von Zugriffskontrolle und Benutzeraktivitäten\n• User Behavior Analysis für Erkennung anomaler Nutzungsmuster\n\n🌐 Enterprise Integration und Skalierbarkeit:\n• Cloud Integration für nahtlose Anbindung von SaaS-Anwendungen\n• On-Premises Integration für bestehende Legacy-Systeme und Anwendungen\n• API-driven Architecture für moderne Anwendungsentwicklung\n• Scalable Infrastructure für wachsende Benutzer- und Anwendungszahlen\n• High Availability Design für kontinuierliche Verfügbarkeit kritischer Services\n\n🔧 Implementation Best Practices:\n• Phased Rollout für schrittweise Einführung und Risikominimierung\n• Application Assessment für Bewertung der SSO-Kompatibilität\n• User Training für erfolgreiche Adoption und Change Management\n• Security Testing für Validierung der Sicherheitskontrollen\n• Continuous Optimization basierend auf Benutzer-Feedback und Performance-Daten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie werden IAM-Systeme in Cloud-Umgebungen implementiert und welche besonderen Herausforderungen gibt es bei Multi-Cloud-Strategien?',
        answer: "Cloud-IAM erfordert einen fundamentalen Paradigmenwechsel von traditionellen On-Premises-Ansätzen hin zu dynamischen, skalierbaren und API-getriebenen Identitätsverwaltungsmodellen. Multi-Cloud-Strategien verstärken diese Komplexität durch die Notwendigkeit konsistenter Identitätsverwaltung über verschiedene Cloud-Provider und Hybrid-Umgebungen hinweg.\n\n☁️ Cloud-native IAM-Architektur:\n• Identity as a Service für vollständig verwaltete Identitätsdienste ohne Infrastruktur-Overhead\n• API-first Design für nahtlose Integration mit Cloud-nativen Anwendungen\n• Microservices Architecture für skalierbare und flexible IAM-Komponenten\n• Container-based Deployment für moderne DevOps-Workflows und CI/CD-Integration\n• Serverless Integration für ereignisgesteuerte Identitätsprozesse\n\n🌐 Multi-Cloud Identity Federation:\n• Cross-Cloud Authentication für einheitliche Benutzerfreundlichkeit über alle Cloud-Provider\n• Federated Identity Management mit standardisierten Protokollen für Provider-übergreifende Integration\n• Cloud-agnostic Policies für konsistente Sicherheitsrichtlinien unabhängig vom Provider\n• Centralized Identity Store als Single Source of Truth für alle Cloud-Umgebungen\n• Inter-Cloud Communication für sichere Datenübertragung zwischen verschiedenen Clouds\n\n🔄 Hybrid Cloud Integration:\n• On-Premises to Cloud Bridge für nahtlose Verbindung bestehender Systeme\n• Directory Synchronization für konsistente Identitätsdaten über alle Umgebungen\n• Hybrid Authentication mit flexiblen Authentifizierungsoptionen\n• Legacy System Integration ohne Disruption bestehender Geschäftsprozesse\n• Gradual Migration Strategies für schrittweise Cloud-Transformation\n\n⚡ Skalierbarkeit und Performance:\n• Auto-scaling Capabilities für dynamische Anpassung an Lastspitzen\n• Global Distribution für optimale Performance in verschiedenen geografischen Regionen\n• Caching Strategies für reduzierte Latenz und verbesserte Benutzerfreundlichkeit\n• Load Balancing für gleichmäßige Verteilung der Authentifizierungslasten\n• Performance Monitoring für kontinuierliche Optimierung der Cloud-IAM-Services\n\n🛡️ Cloud Security und Compliance:\n• Shared Responsibility Model für klare Abgrenzung der Sicherheitsverantwortlichkeiten\n• Data Residency Compliance für Einhaltung geografischer Datenschutzbestimmungen\n• Encryption in Transit und at Rest für umfassenden Datenschutz\n• Cloud Security Posture Management für kontinuierliche Sicherheitsüberwachung\n• Multi-tenancy Security für sichere Isolation verschiedener Organisationseinheiten\n\n🔧 DevOps und Automation Integration:\n• Infrastructure as Code für automatisierte IAM-Bereitstellung\n• CI/CD Pipeline Integration für kontinuierliche Deployment-Prozesse\n• Configuration Management für konsistente IAM-Konfigurationen\n• Automated Testing für Validierung von IAM-Funktionalitäten\n• GitOps Workflows für versionskontrollierte IAM-Konfigurationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Was sind die wichtigsten Schritte bei der Implementierung eines IAM-Systems und wie kann man häufige Fallstricke vermeiden?',
        answer: "Eine erfolgreiche IAM-Implementierung erfordert einen strukturierten, phasenweisen Ansatz, der technische Exzellenz mit strategischem Change Management verbindet. Die meisten Implementierungsfehler entstehen durch unzureichende Planung, mangelnde Stakeholder-Einbindung oder unterschätzte Komplexität bestehender Systemlandschaften.\n\n📋 Strategische Planungsphase:\n• Business Case Development mit klarer ROI-Bewertung und Stakeholder-Alignment\n• Current State Assessment für umfassende Analyse bestehender Identitäts- und Zugriffsstrukturen\n• Requirements Gathering mit detaillierter Erfassung funktionaler und nicht-funktionaler Anforderungen\n• Risk Assessment für Identifizierung potenzieller Implementierungsrisiken\n• Success Criteria Definition mit messbaren KPIs und Erfolgsindikatoren\n\n🏗️ Architektur und Design:\n• Solution Architecture Design mit Berücksichtigung aktueller und zukünftiger Anforderungen\n• Technology Selection basierend auf objektiver Bewertung verschiedener IAM-Lösungen\n• Integration Planning für nahtlose Anbindung bestehender Systeme und Anwendungen\n• Security Framework Definition für umfassende Sicherheitskontrollen\n• Scalability Planning für zukünftiges Wachstum und Erweiterungen\n\n🚀 Implementierungsstrategie:\n• Phased Rollout mit schrittweiser Einführung und Risikominimierung\n• Pilot Implementation für Validierung des Konzepts mit ausgewählten Benutzergruppen\n• Iterative Development mit kontinuierlichem Feedback und Anpassungen\n• Testing Strategy für umfassende Validierung aller IAM-Funktionalitäten\n• Rollback Planning für Notfallszenarien und Risikominimierung\n\n👥 Change Management und Adoption:\n• Stakeholder Engagement für kontinuierliche Einbindung aller relevanten Parteien\n• User Training Programs für erfolgreiche Adoption und Kompetenzaufbau\n• Communication Strategy für transparente Information über Änderungen und Vorteile\n• Support Structure für effektive Unterstützung während der Übergangsphase\n• Feedback Mechanisms für kontinuierliche Verbesserung basierend auf Benutzererfahrungen\n\n⚠️ Häufige Fallstricke und Vermeidungsstrategien:\n• Scope Creep Prevention durch klare Abgrenzung und Change Control Prozesse\n• Legacy Integration Challenges durch frühzeitige Analyse und Proof-of-Concept-Tests\n• Performance Issues durch angemessene Kapazitätsplanung und Load Testing\n• Security Gaps durch umfassende Security Reviews und Penetration Testing\n• User Resistance durch proaktives Change Management und Schulungsprogramme\n\n🔄 Post-Implementation Optimization:\n• Performance Monitoring für kontinuierliche Überwachung der System-Performance\n• User Feedback Integration für iterative Verbesserungen\n• Security Assessments für regelmäßige Validierung der Sicherheitskontrollen\n• Process Optimization basierend auf operativen Erfahrungen\n• Continuous Innovation durch Integration neuer Technologien und Best Practices"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
