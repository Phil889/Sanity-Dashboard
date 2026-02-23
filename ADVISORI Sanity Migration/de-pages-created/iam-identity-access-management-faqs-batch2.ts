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
    console.log('Updating IAM Identity Access Management page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-identity-access-management' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-identity-access-management" not found')
    }
    
    // Create new FAQs for IAM implementation and best practices
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche bewährten Implementierungsstrategien und Methodologien führen zu erfolgreichen IAM-Transformationen und wie vermeidet man typische Fallstricke?',
        answer: "Erfolgreiche IAM-Transformationen erfordern eine strategische, phasenweise Herangehensweise, die technische Exzellenz mit Change Management und Business-Alignment verbindet. Die häufigsten Fallstricke entstehen durch unzureichende Planung, mangelnde Stakeholder-Einbindung und unterschätzte Komplexität bestehender Systeme. Eine methodische Implementierung mit bewährten Praktiken minimiert Risiken und maximiert den Geschäftswert.\n\n🎯 Strategic Planning und Assessment-Phase:\n• Comprehensive Current-State-Analysis mit detaillierter Inventarisierung aller Identitäts- und Zugriffssysteme\n• Business-Impact-Assessment für Priorisierung kritischer Anwendungen und Benutzergruppen\n• Risk Assessment mit Identifikation von Sicherheitslücken und Compliance-Gaps\n• Stakeholder-Mapping und Requirements-Gathering für alle betroffenen Geschäftsbereiche\n• ROI-Kalkulation und Business-Case-Entwicklung für Investitionsentscheidungen\n\n🏗️ Architecture-Design und Technology-Selection:\n• Future-State-Architecture-Design mit Berücksichtigung von Skalierbarkeit und Flexibilität\n• Technology-Evaluation mit Proof-of-Concept und Vendor-Assessment\n• Integration-Strategy für nahtlose Anbindung bestehender Systeme\n• Security-by-Design-Prinzipien mit Zero-Trust-Architektur-Integration\n• Cloud-first-Approach mit Hybrid-Deployment-Optionen\n\n⚙️ Phased Implementation und Rollout-Strategy:\n• Pilot-Implementation mit ausgewählten Anwendungen und Benutzergruppen\n• Iterative Deployment mit kontinuierlichem Feedback und Anpassung\n• Risk-based Priorisierung für kritische Systeme und High-Value-Anwendungen\n• Parallel-Run-Strategien für minimale Disruption bestehender Prozesse\n• Rollback-Pläne und Contingency-Strategien für Notfallsituationen\n\n👥 Change Management und User-Adoption:\n• Comprehensive Training-Programme für verschiedene Benutzergruppen\n• Communication-Strategy mit regelmäßigen Updates und Erfolgsgeschichten\n• Champion-Programme für Early-Adopters und Multiplikatoren\n• User-Experience-Optimierung für maximale Akzeptanz\n• Feedback-Loops und kontinuierliche Verbesserung\n\n🔍 Testing und Quality-Assurance:\n• Comprehensive Testing-Strategy mit funktionalen und Performance-Tests\n• Security-Testing mit Penetration-Tests und Vulnerability-Assessments\n• User-Acceptance-Testing mit realistischen Szenarien\n• Load-Testing für Performance-Validierung unter realen Bedingungen\n• Disaster-Recovery-Testing für Business-Continuity-Sicherstellung\n\n📊 Monitoring und Continuous-Improvement:\n• Performance-Monitoring mit Key-Performance-Indicators und Dashboards\n• Security-Monitoring mit Real-time-Alerting und Incident-Response\n• User-Satisfaction-Surveys und Feedback-Analyse\n• Regular-Reviews und Optimization-Cycles\n• Innovation-Integration für kontinuierliche Weiterentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie wählt man die optimale IAM-Technologie aus und welche Kriterien sind entscheidend für eine zukunftssichere Lösung?',
        answer: "Die Auswahl der optimalen IAM-Technologie ist eine strategische Entscheidung, die langfristige Auswirkungen auf Sicherheit, Produktivität und Geschäftserfolg hat. Eine systematische Evaluierung basierend auf technischen, geschäftlichen und strategischen Kriterien gewährleistet eine zukunftssichere Lösung, die mit dem Unternehmen wächst und sich an verändernde Anforderungen anpasst.\n\n🎯 Business-Requirements und Strategic-Alignment:\n• Business-Objectives-Mapping für Alignment mit strategischen Unternehmenszielen\n• Scalability-Requirements für zukünftiges Wachstum und Expansion\n• Integration-Requirements für bestehende und geplante Systemlandschaften\n• Compliance-Requirements für regulatorische Anforderungen und Standards\n• Budget-Constraints und Total-Cost-of-Ownership-Überlegungen\n\n🏗️ Technical-Architecture und Platform-Capabilities:\n• Cloud-native-Architecture mit Multi-Cloud und Hybrid-Support\n• API-first-Design für moderne Integration und Microservices-Unterstützung\n• Scalability und Performance für Enterprise-Grade-Anforderungen\n• Security-Features mit Zero-Trust-Prinzipien und Advanced-Threat-Protection\n• Extensibility und Customization-Möglichkeiten für spezifische Anforderungen\n\n🔐 Security und Compliance-Features:\n• Multi-Factor-Authentication mit adaptiven und risikobasierten Optionen\n• Privileged-Access-Management mit umfassenden PAM-Capabilities\n• Identity-Governance mit automatisierten Compliance-Funktionen\n• Audit-Trail und Reporting-Capabilities für regulatorische Anforderungen\n• Threat-Detection und Response-Capabilities für proaktive Sicherheit\n\n⚙️ Integration und Interoperability:\n• Standards-Compliance mit SAML, OAuth, OpenID Connect und SCIM\n• Connector-Ecosystem für breite Anwendungsunterstützung\n• Legacy-System-Integration ohne Disruption bestehender Prozesse\n• API-Quality und Documentation für Entwickler-Freundlichkeit\n• Migration-Tools und Support für nahtlose Überführung bestehender Daten\n\n👥 User-Experience und Adoption-Factors:\n• Intuitive-User-Interface für optimale Benutzerfreundlichkeit\n• Self-Service-Capabilities für reduzierte IT-Belastung\n• Mobile-Support für moderne Arbeitsplätze\n• Single-Sign-On-Experience für nahtlose Anwendungsnutzung\n• Customization-Options für Corporate-Branding und User-Preferences\n\n🚀 Vendor-Evaluation und Partnership-Criteria:\n• Vendor-Stability und Market-Position für langfristige Partnerschaft\n• Innovation-Roadmap und R&D-Investment für Zukunftssicherheit\n• Support-Quality und Professional-Services für erfolgreiche Implementierung\n• Community und Ecosystem für Knowledge-Sharing und Best-Practices\n• Reference-Customers und Success-Stories für Proof-of-Concept\n\n📊 Evaluation-Process und Decision-Framework:\n• Structured-RFP-Process mit detaillierten Requirements und Bewertungskriterien\n• Proof-of-Concept mit realistischen Use-Cases und Performance-Tests\n• Total-Cost-of-Ownership-Analysis mit versteckten Kosten und Lifecycle-Betrachtung\n• Risk-Assessment mit Vendor-Lock-in und Technology-Obsolescence-Risiken\n• Stakeholder-Consensus-Building für organisationsweite Akzeptanz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Identity Governance in einer modernen IAM-Strategie und wie automatisiert man Compliance-Prozesse effektiv?',
        answer: "Identity Governance ist das strategische Rückgrat moderner IAM-Systeme und transformiert Compliance von einer reaktiven Belastung zu einem proaktiven Wettbewerbsvorteil. Durch intelligente Automatisierung und datengetriebene Entscheidungsfindung ermöglicht Identity Governance kontinuierliche regulatorische Exzellenz, während sie gleichzeitig Geschäftsprozesse beschleunigt und Sicherheitsrisiken minimiert.\n\n🎯 Strategic Identity Governance Framework:\n• Policy-driven Access Management mit automatisierten Regelwerken und Ausnahmebehandlung\n• Risk-based Decision Making mit intelligenten Algorithmen und Machine Learning\n• Continuous Compliance Monitoring mit Real-time Überwachung und Alerting\n• Segregation of Duties mit automatischer Erkennung und Verhinderung von Konflikten\n• Data-driven Insights für strategische Entscheidungen und Optimierungen\n\n🔍 Automated Access Reviews und Recertification:\n• Intelligent Recertification mit risikobasierten Priorisierungen und Empfehlungen\n• Role Mining und Analytics für Optimierung von Rollenmodellen\n• Outlier Detection für Identifikation anomaler Zugriffsmuster\n• Automated Remediation für Standard-Compliance-Verstöße\n• Predictive Analytics für proaktive Governance-Maßnahmen\n\n⚙️ Policy Management und Enforcement:\n• Dynamic Policy Engine mit kontextbasierten Regeln und Anpassungen\n• Business-Rule-Integration für automatisierte Entscheidungsfindung\n• Exception Management mit kontrollierten Genehmigungsprozessen\n• Policy Simulation für Impact-Assessment vor Implementierung\n• Continuous Policy Optimization basierend auf Performance-Daten\n\n📊 Compliance Automation und Reporting:\n• Automated Compliance Dashboards mit Real-time Status und Trends\n• Regulatory Reporting mit vorkonfigurierten Templates für verschiedene Standards\n• Audit Trail Management mit umfassender Protokollierung und Forensik-Capabilities\n• Evidence Collection für Audit-Bereitschaft und Compliance-Nachweise\n• Risk Scoring und Heat Maps für visuelle Risikobewertung\n\n🛡️ Risk Management und Threat Detection:\n• Identity Risk Scoring mit kontinuierlicher Bewertung und Anpassung\n• Behavioral Analytics für Erkennung anomaler Aktivitätsmuster\n• Insider Threat Detection mit Machine Learning und Pattern Recognition\n• Access Risk Assessment für datengetriebene Sicherheitsentscheidungen\n• Threat Intelligence Integration für proaktive Risikominimierung\n\n🚀 Business Process Integration:\n• Workflow Automation für nahtlose Integration in Geschäftsprozesse\n• Self-Service Capabilities für beschleunigte Benutzer-Requests\n• Approval Orchestration mit intelligenten Routing und Eskalation\n• Business Context Integration für kontextbasierte Entscheidungen\n• Performance Optimization für maximale Effizienz und Benutzerfreundlichkeit\n\n🌐 Enterprise-Scale Governance:\n• Multi-Domain Governance für komplexe Organisationsstrukturen\n• Cross-System Visibility für ganzheitliche Governance-Sicht\n• Global Policy Management für internationale Compliance-Anforderungen\n• Federated Governance für dezentrale Organisationen\n• Cloud Governance für Hybrid und Multi-Cloud Umgebungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie integriert man IAM erfolgreich in Cloud-native und Hybrid-Umgebungen und welche besonderen Herausforderungen sind zu beachten?',
        answer: "Die Integration von IAM in Cloud-native und Hybrid-Umgebungen erfordert eine fundamentale Neuausrichtung traditioneller Identitätskonzepte und die Adoption moderner Architekturprinzipien. Erfolgreiche Cloud-IAM-Strategien müssen Skalierbarkeit, Elastizität und Agilität gewährleisten, während sie gleichzeitig Sicherheit, Compliance und Governance über alle Umgebungen hinweg aufrechterhalten.\n\n🌐 Cloud-native IAM Architecture Principles:\n• API-first Design für nahtlose Integration in Cloud-Services und Microservices\n• Stateless Authentication mit Token-basierten Systemen und JWT-Integration\n• Elastic Scalability für dynamische Lastanpassung und Performance-Optimierung\n• Multi-Tenancy Support für sichere Isolation verschiedener Organisationseinheiten\n• Event-driven Architecture für Real-time Synchronisation und Benachrichtigungen\n\n🔗 Hybrid Identity Federation und Integration:\n• Cross-Cloud Identity Federation für nahtlose Authentifizierung über alle Umgebungen\n• On-Premises Integration mit sicheren Konnektoren und Hybrid-Gateways\n• Directory Synchronization mit bidirektionaler Datenreplikation und Conflict Resolution\n• Legacy System Integration ohne Disruption bestehender Geschäftsprozesse\n• Network Security Integration mit VPN, Zero-Trust und Micro-Segmentierung\n\n☁️ Multi-Cloud Identity Management:\n• Cloud-agnostic Architecture für Vendor-Unabhängigkeit und Flexibilität\n• Cross-Cloud Policy Management für konsistente Sicherheitsrichtlinien\n• Unified Identity Namespace für nahtlose Benutzerführung über alle Clouds\n• Cloud-specific Optimizations für maximale Performance und Kosteneffizienz\n• Disaster Recovery und Business Continuity über Cloud-Grenzen hinweg\n\n🔐 Cloud Security und Compliance Challenges:\n• Shared Responsibility Model mit klarer Abgrenzung von Verantwortlichkeiten\n• Data Sovereignty und Residency für regulatorische Compliance\n• Encryption in Transit und at Rest für umfassenden Datenschutz\n• Cloud Security Posture Management für kontinuierliche Sicherheitsüberwachung\n• Compliance Automation für Cloud-spezifische regulatorische Anforderungen\n\n⚙️ DevOps und CI/CD Integration:\n• Infrastructure as Code für automatisierte IAM-Deployment und -Konfiguration\n• Secret Management für sichere Verwaltung von API-Keys und Credentials\n• Pipeline Security mit automatisierten Security-Checks und Vulnerability-Scanning\n• Container Security für sichere Containerisierung und Kubernetes-Integration\n• Automated Testing für kontinuierliche Validierung von IAM-Funktionalitäten\n\n📊 Monitoring und Observability:\n• Cloud-native Monitoring mit Distributed Tracing und Metrics Collection\n• Log Aggregation für zentrale Analyse und Forensik-Capabilities\n• Performance Analytics für Optimierung von Latenz und Durchsatz\n• Cost Optimization durch intelligente Ressourcennutzung und Rightsizing\n• Predictive Scaling für proaktive Kapazitätsplanung\n\n🚀 Innovation und Future-Readiness:\n• Serverless Integration für Event-driven IAM-Funktionalitäten\n• Edge Computing Support für IoT und Mobile-Device-Management\n• AI/ML Integration für intelligente Anomaly Detection und Automation\n• Blockchain Integration für dezentrale Identity-Lösungen\n• Quantum-Ready Cryptography für zukünftige Sicherheitsanforderungen"
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
