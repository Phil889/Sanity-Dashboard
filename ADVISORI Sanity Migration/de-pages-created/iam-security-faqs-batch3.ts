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
    console.log('Updating IAM Security page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-security' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-security" not found')
    }
    
    // Create new FAQs for compliance and regulatory requirements
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie gewährleistet man IAM Security Compliance für DORA, NIS2 und GDPR und welche spezifischen Anforderungen müssen dabei erfüllt werden?',
        answer: "IAM Security Compliance für moderne Regulierungsrahmen wie DORA, NIS2 und GDPR erfordert eine ganzheitliche Herangehensweise, die technische Sicherheitsmaßnahmen mit robusten Governance-Strukturen und kontinuierlichen Überwachungsprozessen kombiniert. Diese Regulierungen stellen spezifische Anforderungen an die Identitätsverwaltung, die über traditionelle Sicherheitskontrollen hinausgehen.\n\n📋 DORA Compliance für IAM Security:\n• Operational Resilience Framework für kritische IAM-Funktionen und Geschäftsprozesse\n• ICT Risk Management für systematische Bewertung und Behandlung von IAM-Risiken\n• Incident Reporting für zeitnahe Meldung identitätsbezogener Sicherheitsvorfälle\n• Third-party Risk Management für Bewertung und Überwachung von IAM-Service-Providern\n• Digital Operational Resilience Testing für regelmäßige Tests der IAM-Widerstandsfähigkeit\n\n🛡️ NIS2 Directive Requirements für Identity Security:\n• Cybersecurity Risk Management für umfassende Bewertung von Identitätsrisiken\n• Security Measures Implementation für angemessene technische und organisatorische Maßnahmen\n• Supply Chain Security für Sicherheit der IAM-Lieferkette und Dienstleister\n• Incident Handling für strukturierte Behandlung von Cybersicherheitsvorfällen\n• Business Continuity für Aufrechterhaltung kritischer IAM-Funktionen\n\n🔐 GDPR Privacy-by-Design für IAM Systeme:\n• Data Minimization für Beschränkung der Verarbeitung auf notwendige Identitätsdaten\n• Purpose Limitation für klare Definition und Begrenzung der Verarbeitungszwecke\n• Storage Limitation für angemessene Aufbewahrungszeiten von Identitätsdaten\n• Data Subject Rights für Implementierung von Auskunfts-, Berichtigungs- und Löschungsrechten\n• Privacy Impact Assessment für systematische Bewertung von Datenschutzrisiken\n\n⚖️ Cross-Regulatory Compliance Framework:\n• Unified Governance Structure für koordinierte Compliance-Aktivitäten\n• Risk Assessment Harmonization für einheitliche Risikobewertungsmethoden\n• Policy Integration für konsistente Sicherheitsrichtlinien über alle Regulierungen\n• Audit Coordination für effiziente Prüfungsaktivitäten und Nachweisführung\n• Continuous Monitoring für laufende Überwachung der Compliance-Konformität\n\n📊 Documentation und Evidence Management:\n• Comprehensive Documentation für vollständige Dokumentation aller IAM-Prozesse\n• Evidence Collection für systematische Sammlung von Compliance-Nachweisen\n• Audit Trail Management für lückenlose Protokollierung aller relevanten Aktivitäten\n• Reporting Automation für automatisierte Generierung von Compliance-Berichten\n• Change Documentation für Nachverfolgung aller Änderungen an IAM-Systemen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Strategien gibt es für die Implementierung von Privacy-by-Design in IAM Security Systemen und wie kann man Datenschutz und Sicherheit optimal balancieren?',
        answer: "Privacy-by-Design in IAM Security Systemen erfordert eine fundamentale Integration von Datenschutzprinzipien in alle Aspekte der Identitätsverwaltung. Diese Herangehensweise gewährleistet, dass Datenschutz nicht als nachträgliche Ergänzung, sondern als integraler Bestandteil der Sicherheitsarchitektur behandelt wird.\n\n🏗️ Architectural Privacy Principles:\n• Privacy by Default für automatische Aktivierung der datenschutzfreundlichsten Einstellungen\n• Data Minimization für Beschränkung auf absolut notwendige Identitätsdaten\n• Purpose Specification für klare Definition und Begrenzung der Datenverwendung\n• Use Limitation für Beschränkung der Datennutzung auf definierte Zwecke\n• Transparency für nachvollziehbare und verständliche Datenverarbeitungsprozesse\n\n🔐 Technical Privacy Controls:\n• Pseudonymization für Ersetzung direkter Identifikatoren durch Pseudonyme\n• Anonymization für irreversible Entfernung personenbezogener Merkmale\n• Encryption at Rest und in Transit für Schutz sensibler Identitätsdaten\n• Tokenization für Ersetzung sensibler Daten durch nicht-sensitive Token\n• Differential Privacy für statistische Analyse ohne Preisgabe individueller Daten\n\n📊 Data Lifecycle Management:\n• Data Classification für systematische Kategorisierung von Identitätsdaten\n• Retention Policies für angemessene Aufbewahrungszeiten verschiedener Datentypen\n• Automated Deletion für automatische Löschung abgelaufener Daten\n• Data Portability für Übertragbarkeit von Benutzerdaten zwischen Systemen\n• Right to be Forgotten für sichere und vollständige Löschung auf Anfrage\n\n🛡️ Access Control und Authorization:\n• Attribute-based Access Control für granulare Zugriffskontrolle basierend auf Datenschutzrichtlinien\n• Dynamic Consent Management für flexible Verwaltung von Einwilligungen\n• Purpose-based Access für Zugriffsbeschränkung basierend auf Verarbeitungszwecken\n• Contextual Authorization für kontextabhängige Autorisierungsentscheidungen\n• Privacy-aware Logging für datenschutzkonforme Protokollierung von Zugriffsereignissen\n\n⚙️ Privacy Engineering Practices:\n• Privacy Impact Assessment für systematische Bewertung von Datenschutzrisiken\n• Privacy Threat Modeling für Identifikation potenzieller Datenschutzbedrohungen\n• Privacy Testing für Validierung der Wirksamkeit von Datenschutzmaßnahmen\n• Privacy Metrics für Messung und Überwachung der Datenschutzkonformität\n• Privacy-preserving Analytics für Analyse ohne Kompromittierung der Privatsphäre\n\n🔄 Governance und Compliance:\n• Privacy Governance Framework für strukturierte Verwaltung von Datenschutzanforderungen\n• Data Protection Officer Integration für fachliche Beratung und Überwachung\n• Vendor Privacy Assessment für Bewertung der Datenschutzpraktiken von Dienstleistern\n• Cross-border Data Transfer Controls für sichere internationale Datenübertragung\n• Regulatory Compliance Monitoring für kontinuierliche Überwachung der Regelkonformität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie entwickelt man eine robuste IAM Security Governance Struktur und welche Rollen und Verantwortlichkeiten sind dabei entscheidend?',
        answer: "Eine robuste IAM Security Governance Struktur bildet das Fundament für effektive Identitätssicherheit und gewährleistet, dass alle Aspekte der IAM-Sicherheit strategisch geplant, systematisch implementiert und kontinuierlich überwacht werden. Diese Struktur muss klare Verantwortlichkeiten, Entscheidungsprozesse und Kontrollmechanismen etablieren.\n\n🏛️ Governance Framework und Organisationsstruktur:\n• Executive Sponsorship für strategische Unterstützung und Ressourcenbereitstellung\n• IAM Security Steering Committee für strategische Entscheidungen und Richtungsvorgaben\n• Cross-functional Working Groups für operative Umsetzung und Koordination\n• Center of Excellence für Expertise-Aufbau und Best Practice Entwicklung\n• Federated Governance Model für dezentrale Verantwortung bei zentraler Koordination\n\n👥 Rollen und Verantwortlichkeiten Definition:\n• Chief Information Security Officer für strategische Sicherheitsverantwortung\n• IAM Security Manager für operative Leitung der IAM-Sicherheitsprogramme\n• Identity Architects für Design und Architektur von IAM-Sicherheitslösungen\n• Security Operations Team für tägliche Überwachung und Incident Response\n• Compliance Officers für Sicherstellung regulatorischer Anforderungen\n\n📋 Policy und Standards Management:\n• IAM Security Policy Framework für umfassende Sicherheitsrichtlinien\n• Standards und Guidelines für technische Implementierungsstandards\n• Procedure Documentation für detaillierte Verfahrensanweisungen\n• Exception Management für kontrollierte Behandlung von Policy-Ausnahmen\n• Regular Policy Reviews für kontinuierliche Aktualisierung und Verbesserung\n\n🔍 Risk Management und Assessment:\n• Risk Assessment Framework für systematische Bewertung von IAM-Sicherheitsrisiken\n• Risk Register Management für zentrale Erfassung und Verfolgung von Risiken\n• Risk Mitigation Strategies für strukturierte Behandlung identifizierter Risiken\n• Risk Monitoring und Reporting für kontinuierliche Überwachung der Risikolage\n• Business Impact Analysis für Bewertung der Auswirkungen von Sicherheitsvorfällen\n\n📊 Performance Management und Metrics:\n• Key Performance Indicators für Messung der IAM Security Effectiveness\n• Security Metrics Dashboard für Visualisierung der Sicherheitslage\n• Benchmarking und Maturity Assessment für Vergleich mit Industry Standards\n• Continuous Improvement Prozesse für systematische Optimierung\n• Regular Reporting für Information der Stakeholder und Entscheidungsträger\n\n🔄 Change Management und Communication:\n• Change Advisory Board für Bewertung und Genehmigung von Sicherheitsänderungen\n• Communication Strategy für effektive Information aller Stakeholder\n• Training und Awareness Programme für Kompetenzaufbau und Sensibilisierung\n• Stakeholder Engagement für aktive Einbindung aller relevanten Parteien\n• Knowledge Management für Sammlung und Verteilung von Expertise"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Herausforderungen bestehen bei der IAM Security in Multi-Cloud und Hybrid-Umgebungen und wie kann man diese erfolgreich bewältigen?',
        answer: "IAM Security in Multi-Cloud und Hybrid-Umgebungen bringt einzigartige Herausforderungen mit sich, die traditionelle Sicherheitsansätze überfordern können. Die Komplexität verschiedener Cloud-Provider, unterschiedlicher Sicherheitsmodelle und verteilter Infrastrukturen erfordert innovative Lösungsansätze und spezialisierte Expertise.\n\n☁️ Multi-Cloud Identity Challenges:\n• Identity Federation zwischen verschiedenen Cloud-Providern und Plattformen\n• Inconsistent Security Models und unterschiedliche Authentifizierungsstandards\n• Cross-Cloud Access Management für nahtlose Benutzererfahrung\n• Vendor Lock-in Vermeidung durch portable Identity-Lösungen\n• Compliance Complexity durch verschiedene Jurisdiktionen und Regulierungen\n\n🔗 Hybrid Infrastructure Complexity:\n• On-Premise zu Cloud Identity Bridging für nahtlose Integration\n• Network Connectivity und Latency Considerations für Performance\n• Legacy System Integration mit modernen Cloud-Identity-Services\n• Data Residency und Sovereignty Requirements für sensible Identitätsdaten\n• Disaster Recovery und Business Continuity über verschiedene Umgebungen\n\n🛡️ Security Architecture Strategies:\n• Unified Identity Plane für zentrale Verwaltung über alle Umgebungen\n• Zero Trust Network Access für sichere Verbindungen unabhängig vom Standort\n• Identity-as-a-Service für skalierbare und flexible Identity-Bereitstellung\n• API Gateway Integration für sichere Service-to-Service-Kommunikation\n• Centralized Policy Management für konsistente Sicherheitsrichtlinien\n\n🔐 Technical Implementation Approaches:\n• SAML und OAuth Federation für standardbasierte Identity-Integration\n• Just-in-Time Provisioning für dynamische Account-Erstellung\n• Attribute-based Access Control für granulare Zugriffskontrolle\n• Token-based Authentication für stateless und skalierbare Authentifizierung\n• Encrypted Identity Stores für Schutz sensibler Identitätsinformationen\n\n📊 Monitoring und Visibility:\n• Centralized Logging für einheitliche Sicht auf alle Identity-Ereignisse\n• Cross-Platform Analytics für Korrelation von Sicherheitsereignissen\n• Real-time Threat Detection über alle Cloud-Umgebungen\n• Compliance Reporting für regulatorische Anforderungen\n• Performance Monitoring für Optimierung der Identity-Services\n\n⚙️ Operational Excellence:\n• Automation und Orchestration für effiziente Verwaltung komplexer Umgebungen\n• DevSecOps Integration für Security-by-Design in Cloud-Deployments\n• Incident Response Coordination über verschiedene Plattformen\n• Capacity Planning für skalierbare Identity-Services\n• Cost Optimization für effiziente Nutzung von Cloud-Identity-Services\n\n🎯 Strategic Considerations:\n• Vendor Relationship Management für optimale Verhandlungsposition\n• Technology Roadmap Planning für zukunftssichere Identity-Architekturen\n• Skills Development für Multi-Cloud Identity Expertise\n• Risk Assessment für Cloud-spezifische Sicherheitsrisiken\n• Business Alignment für Unterstützung der Geschäftsziele durch Identity-Strategie"
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
