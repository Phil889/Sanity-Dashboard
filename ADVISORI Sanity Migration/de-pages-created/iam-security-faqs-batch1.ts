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
    console.log('Updating IAM Security page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-security' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-security" not found')
    }
    
    // Create new FAQs for IAM Security fundamentals and frameworks
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist IAM Security das Fundament moderner Cybersicherheit und welche strategischen Herausforderungen müssen Unternehmen dabei bewältigen?',
        answer: "IAM Security bildet das kritische Fundament jeder modernen Cybersicherheitsstrategie, da Identitäten zum primären Angriffsziel für Cyberkriminelle geworden sind. Die zunehmende Digitalisierung, Remote-Arbeit und Cloud-Migration haben die traditionellen Perimeter-basierten Sicherheitsmodelle obsolet gemacht und erfordern einen fundamentalen Paradigmenwechsel hin zu identitätszentrierten Sicherheitsarchitekturen.\n\n🎯 Strategische Bedeutung von IAM Security:\n• Identitäten als neuer Sicherheitsperimeter in einer perimeterlosen Welt\n• Schutz vor privilegierten Zugriffsangriffen und Insider-Bedrohungen\n• Compliance-Erfüllung für regulatorische Anforderungen wie DORA, NIS2 und GDPR\n• Ermöglichung sicherer digitaler Transformation und Cloud-Adoption\n• Reduktion der Angriffsfläche durch Least Privilege und Zero Trust Prinzipien\n\n🛡️ Moderne Bedrohungslandschaft für Identitäten:\n• Credential Stuffing und Password Spraying Angriffe auf schwache Authentifizierung\n• Privileged Account Compromise für laterale Bewegung in Netzwerken\n• Social Engineering und Phishing für Credential Harvesting\n• Insider-Bedrohungen durch missbrauchte oder kompromittierte interne Accounts\n• Supply Chain Angriffe über kompromittierte Service-Accounts und API-Zugriffe\n\n🔧 Technologische Herausforderungen und Komplexität:\n• Integration heterogener Systeme und Legacy-Anwendungen in einheitliche IAM-Architekturen\n• Skalierung von Sicherheitskontrollen für wachsende User-Zahlen und Anwendungslandschaften\n• Balance zwischen Sicherheit und User Experience für optimale Produktivität\n• Real-time Threat Detection und Response in komplexen Multi-Cloud-Umgebungen\n• Automatisierung von Sicherheitsprozessen ohne Verlust der granularen Kontrolle\n\n📊 Organisatorische und Governance-Aspekte:\n• Entwicklung umfassender Identity Governance Frameworks für Risikomanagement\n• Etablierung klarer Rollen und Verantwortlichkeiten für Identity Security\n• Kontinuierliche Schulung und Awareness für sicherheitsbewusstes Verhalten\n• Incident Response Planung für identitätsbezogene Sicherheitsvorfälle\n• Messung und Monitoring von Security Metriken für kontinuierliche Verbesserung\n\n🚀 Zukunftsorientierte Sicherheitsstrategien:\n• Zero Trust Architecture Implementation für vertrauenslose Sicherheitsmodelle\n• KI-gestützte Behavioral Analytics für proaktive Anomalieerkennung\n• Adaptive Authentication für kontextbasierte Sicherheitsentscheidungen\n• Passwordless Authentication für verbesserte Sicherheit und User Experience\n• Continuous Compliance Monitoring für automatisierte Audit-Bereitschaft"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie implementiert man eine Zero Trust IAM Architektur und welche technischen und organisatorischen Voraussetzungen sind dabei entscheidend?',
        answer: "Zero Trust IAM Architekturen revolutionieren traditionelle Sicherheitsmodelle durch die fundamentale Annahme, dass kein Benutzer oder System standardmäßig vertrauenswürdig ist. Diese Architektur erfordert kontinuierliche Verifikation und Autorisierung für jeden Zugriff, unabhängig von der Netzwerkposition oder vorherigen Authentifizierung.\n\n🏗️ Architektonische Grundprinzipien von Zero Trust IAM:\n• Never Trust, Always Verify als fundamentales Sicherheitsprinzip\n• Least Privilege Access mit minimalen erforderlichen Berechtigungen\n• Assume Breach Mentalität für proaktive Sicherheitsmaßnahmen\n• Continuous Monitoring und Real-time Risk Assessment\n• Micro-Segmentation für granulare Zugriffskontrolle auf Ressourcenebene\n\n🔐 Technische Implementierungskomponenten:\n• Multi-Factor Authentication (MFA) als Mindeststandard für alle Zugriffe\n• Risk-based Authentication für adaptive Sicherheitsentscheidungen\n• Privileged Access Management (PAM) für Just-in-Time und Just-Enough-Access\n• User and Entity Behavior Analytics (UEBA) für Anomalieerkennung\n• Policy Engines für dynamische Autorisierungsentscheidungen basierend auf Kontext\n\n📋 Strategische Implementierungsphasen:\n• Assessment und Inventory aller Identitäten, Geräte und Ressourcen\n• Risk Classification und Priorisierung kritischer Assets und Workflows\n• Pilot Implementation mit ausgewählten High-Value-Anwendungen\n• Phased Rollout mit kontinuierlicher Überwachung und Anpassung\n• Full Scale Deployment mit umfassender Governance und Compliance\n\n🛠️ Technologie-Stack und Integration:\n• Identity Provider (IdP) als zentrale Authentifizierungsinstanz\n• Single Sign-On (SSO) für nahtlose User Experience bei erhöhter Sicherheit\n• API Gateways für sichere Service-to-Service-Kommunikation\n• Network Access Control (NAC) für gerätebasierte Zugriffskontrolle\n• Security Information and Event Management (SIEM) für zentrale Überwachung\n\n⚖️ Organisatorische Transformation und Change Management:\n• Executive Sponsorship für kulturellen Wandel und Ressourcenbereitstellung\n• Cross-functional Teams für ganzheitliche Implementierung\n• Training und Awareness Programme für User Adoption\n• Policy Development für klare Sicherheitsrichtlinien und Prozesse\n• Continuous Improvement Prozesse für adaptive Sicherheitsoptimierung\n\n📊 Monitoring und Compliance Framework:\n• Real-time Dashboards für Visibility in Zugriffsmuster und Anomalien\n• Automated Alerting für verdächtige Aktivitäten und Policy Violations\n• Audit Trails für Compliance und Forensic Analysis\n• Risk Scoring für kontinuierliche Bewertung der Sicherheitslage\n• Metrics und KPIs für Messung der Zero Trust Maturity und Effectiveness"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen KI und Machine Learning in modernen IAM Security Systemen und wie können diese Technologien proaktive Bedrohungserkennung ermöglichen?',
        answer: "Künstliche Intelligenz und Machine Learning transformieren IAM Security von reaktiven zu proaktiven Sicherheitsmodellen, die Bedrohungen erkennen und abwehren können, bevor sie Schäden verursachen. Diese Technologien ermöglichen es, komplexe Verhaltensmuster zu analysieren und Anomalien zu identifizieren, die für menschliche Analysten unmöglich zu erkennen wären.\n\n🧠 KI-gestützte Behavioral Analytics und Anomalieerkennung:\n• User and Entity Behavior Analytics (UEBA) für Baseline-Erstellung normaler Verhaltensweisen\n• Machine Learning Algorithmen für Erkennung subtiler Abweichungen von etablierten Mustern\n• Contextual Analysis für Bewertung von Zugriffsereignissen basierend auf Zeit, Ort und Gerät\n• Peer Group Analysis für Vergleich mit ähnlichen Benutzerprofilen und Rollen\n• Temporal Pattern Recognition für Identifikation ungewöhnlicher Aktivitätszeiten\n\n🔍 Advanced Threat Detection Capabilities:\n• Real-time Risk Scoring für kontinuierliche Bewertung der Benutzer- und Session-Risiken\n• Credential Stuffing Detection durch Analyse von Login-Mustern und Erfolgsraten\n• Insider Threat Detection für Identifikation potenziell bösartiger interner Aktivitäten\n• Account Takeover Prevention durch Erkennung kompromittierter Credentials\n• Lateral Movement Detection für Verfolgung verdächtiger Netzwerkbewegungen\n\n🚀 Adaptive Authentication und Dynamic Access Control:\n• Risk-based Authentication für automatische Anpassung der Sicherheitsanforderungen\n• Continuous Authentication für laufende Verifikation während aktiver Sessions\n• Contextual Access Decisions basierend auf Geräte-Fingerprinting und Geolocation\n• Dynamic Policy Enforcement für automatische Anpassung von Zugriffsrichtlinien\n• Predictive Access Control für proaktive Sicherheitsmaßnahmen basierend auf Risikovorhersagen\n\n🛡️ Automated Response und Orchestration:\n• Intelligent Incident Response für automatisierte Reaktionen auf erkannte Bedrohungen\n• Adaptive Session Management für dynamische Anpassung von Session-Parametern\n• Automated Account Lockdown bei Erkennung kompromittierter Identitäten\n• Smart Alerting für Reduzierung von False Positives und Alert Fatigue\n• Orchestrated Remediation für koordinierte Sicherheitsmaßnahmen über mehrere Systeme\n\n📊 Data Analytics und Intelligence Integration:\n• Threat Intelligence Feeds für Anreicherung von ML-Modellen mit aktuellen Bedrohungsdaten\n• Cross-Platform Correlation für ganzheitliche Sicht auf Sicherheitsereignisse\n• Predictive Analytics für Vorhersage potenzieller Sicherheitsrisiken\n• Forensic Analysis für detaillierte Untersuchung von Sicherheitsvorfällen\n• Continuous Learning für Verbesserung der Erkennungsgenauigkeit über Zeit\n\n⚙️ Implementation und Operational Considerations:\n• Model Training und Tuning für optimale Performance in spezifischen Umgebungen\n• Privacy-Preserving Analytics für Schutz sensibler Benutzerdaten\n• Explainable AI für Transparenz in automatisierten Sicherheitsentscheidungen\n• Bias Detection und Mitigation für faire und diskriminierungsfreie Sicherheitskontrollen\n• Continuous Model Validation für Sicherstellung der Erkennungsqualität und Anpassung an neue Bedrohungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet man Privileged Access Management (PAM) Security für moderne Hybrid- und Multi-Cloud-Umgebungen und welche Best Practices sind dabei essentiell?',
        answer: "Privileged Access Management Security in Hybrid- und Multi-Cloud-Umgebungen erfordert eine fundamentale Neugestaltung traditioneller PAM-Ansätze, da privilegierte Accounts in verteilten Infrastrukturen exponentiell komplexere Risiken darstellen. Moderne PAM-Strategien müssen Cloud-native Prinzipien mit robusten Sicherheitskontrollen kombinieren.\n\n🏗️ Cloud-native PAM Architecture Design:\n• Centralized PAM Platform für einheitliche Verwaltung über alle Cloud-Umgebungen\n• Federated Identity Management für nahtlose Integration verschiedener Cloud-Provider\n• API-first Approach für programmatische Verwaltung und Automatisierung\n• Microservices Architecture für Skalierbarkeit und Resilience\n• Zero Trust Network Access für sichere Verbindungen zu privilegierten Ressourcen\n\n🔐 Just-in-Time und Just-Enough-Access Implementation:\n• Temporal Access Controls für zeitlich begrenzte privilegierte Zugriffe\n• Workflow-based Approval Processes für kontrollierte Zugriffsgenehmigungen\n• Automated Provisioning und Deprovisioning für dynamische Rechteverwaltung\n• Role-based Access Control (RBAC) mit granularen Berechtigungsdefinitionen\n• Attribute-based Access Control (ABAC) für kontextuelle Zugriffsentscheidungen\n\n🛡️ Advanced Session Management und Monitoring:\n• Session Recording und Keystroke Logging für vollständige Audit-Trails\n• Real-time Session Monitoring mit Anomalieerkennung\n• Session Isolation für Schutz vor lateraler Bewegung\n• Concurrent Session Limits für Kontrolle gleichzeitiger privilegierter Zugriffe\n• Emergency Break-Glass Procedures für kritische Situationen mit vollständiger Protokollierung\n\n🔑 Secrets Management und Credential Security:\n• Automated Password Rotation für regelmäßige Credential-Erneuerung\n• Vault-based Secret Storage für sichere Aufbewahrung sensibler Informationen\n• Certificate Lifecycle Management für PKI-basierte Authentifizierung\n• API Key Management für sichere Service-to-Service-Kommunikation\n• Hardware Security Module (HSM) Integration für höchste Sicherheitsanforderungen\n\n☁️ Multi-Cloud und Hybrid Integration Strategies:\n• Cloud Service Provider (CSP) native IAM Integration für optimale Performance\n• Cross-Cloud Identity Federation für einheitliche Identitätsverwaltung\n• Hybrid Connectivity Solutions für sichere On-Premise zu Cloud-Verbindungen\n• Container und Kubernetes Security für moderne Anwendungsarchitekturen\n• Serverless Function Security für Event-driven Computing-Modelle\n\n📊 Compliance und Governance Framework:\n• Automated Compliance Reporting für regulatorische Anforderungen\n• Risk-based Access Reviews für kontinuierliche Rechteverwaltung\n• Segregation of Duties (SoD) Enforcement für Konfliktprävention\n• Audit Trail Centralization für forensische Analyse und Compliance\n• Policy as Code für konsistente Sicherheitsrichtlinien über alle Umgebungen\n\n🚨 Incident Response und Threat Mitigation:\n• Automated Threat Response für schnelle Reaktion auf Sicherheitsvorfälle\n• Privileged Account Compromise Detection für frühzeitige Bedrohungserkennung\n• Forensic Capabilities für detaillierte Incident Analysis\n• Recovery Procedures für schnelle Wiederherstellung nach Sicherheitsvorfällen\n• Continuous Security Assessment für proaktive Risikominimierung"
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
