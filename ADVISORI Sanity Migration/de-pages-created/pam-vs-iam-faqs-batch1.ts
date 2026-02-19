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
    console.log('Updating PAM vs IAM page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pam-vs-iam' })
    
    if (!existingDoc) {
      throw new Error('Document "pam-vs-iam" not found')
    }
    
    // Create new FAQs for PAM vs IAM fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die fundamentalen Unterschiede zwischen PAM und IAM und wann sollte ein Unternehmen welche Technologie priorisieren?',
        answer: "PAM und IAM adressieren unterschiedliche Aspekte der Identitätssicherheit und ergänzen sich strategisch in einer ganzheitlichen Sicherheitsarchitektur. Während IAM die breite Identitätsverwaltung für alle Benutzer orchestriert, fokussiert PAM auf den hochspezialisierten Schutz privilegierter Zugriffe. Die Entscheidung zwischen beiden ist keine Entweder-oder-Frage, sondern eine strategische Frage der optimalen Ressourcenallokation und Risikosegmentierung.\n\n🎯 IAM als Foundation-Layer für Enterprise-Identitätsverwaltung:\n• Umfassende Benutzer-Lifecycle-Verwaltung für alle Mitarbeiter, Partner und Service-Accounts\n• Skalierbare Authentifizierung und Autorisierung für Standard-Geschäftsprozesse\n• Self-Service-Funktionalitäten für Produktivitätssteigerung und IT-Entlastung\n• Integration in alle Unternehmensanwendungen für nahtlose Benutzererfahrung\n• Compliance-Management für regulatorische Anforderungen und Audit-Bereitschaft\n\n🔐 PAM als Specialized Security-Layer für kritische Assets:\n• Hochspezialisierter Schutz für administrative Accounts und privilegierte Service-Accounts\n• Advanced Security-Controls wie Session-Recording und Real-time Monitoring\n• Just-in-Time-Access mit temporärer Rechteerweiterung für minimale Angriffsfläche\n• Credential-Vaulting mit automatischer Rotation für maximale Sicherheit\n• Threat Analytics für Erkennung von Advanced Persistent Threats und Insider-Bedrohungen\n\n⚖️ Strategische Priorisierung basierend auf Unternehmenskontext:\n• Unternehmen mit breiter Benutzerbasis sollten IAM als Foundation etablieren\n• Organisationen mit kritischen Infrastrukturen benötigen PAM für Tiefenschutz\n• Regulierte Industrien profitieren von integrierter PAM-IAM-Architektur\n• Cloud-first Unternehmen können mit Cloud-nativen IAM-Lösungen beginnen\n• Legacy-Umgebungen erfordern oft PAM-Priorisierung für kritische Systemzugriffe\n\n🔄 Komplementäre Integration für maximale Sicherheitseffektivität:\n• IAM liefert Identitätskontext und Baseline-Sicherheit für PAM-Entscheidungen\n• PAM erweitert IAM um spezialisierte Kontrollen für hochprivilegierte Zugriffe\n• Unified Analytics kombinieren Daten beider Systeme für ganzheitliche Threat Detection\n• Gemeinsame Governance-Frameworks gewährleisten konsistente Sicherheitsrichtlinien\n• Integrierte Workflows ermöglichen nahtlose Eskalation zwischen Standard- und privilegierten Zugriffen\n\n📊 ROI-Optimierung durch strategische Technologie-Segmentierung:\n• IAM maximiert Produktivität und Benutzerfreundlichkeit für die Masse der Anwender\n• PAM konzentriert Sicherheitsinvestitionen auf die kritischsten Risikobereiche\n• Kombinierte Ansätze reduzieren Gesamtbetriebskosten durch Synergie-Effekte\n• Risk-based Budgetierung ermöglicht optimale Ressourcenverteilung\n• Skalierbare Architekturen wachsen mit Unternehmensanforderungen mit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie können PAM und IAM technisch integriert werden und welche Architektur-Patterns gewährleisten optimale Synergie zwischen beiden Systemen?',
        answer: "Die technische Integration von PAM und IAM erfordert eine durchdachte Architektur-Strategie, die sowohl die spezialisierten Anforderungen beider Systeme respektiert als auch deren Synergie-Potentiale maximiert. Moderne Integrationsansätze nutzen API-basierte Architekturen, Event-driven Patterns und Unified Data Models für nahtlose Zusammenarbeit bei optimaler Performance und Skalierbarkeit.\n\n🏗️ API-first Integration-Architecture für nahtlose Datenflüsse:\n• RESTful APIs ermöglichen Real-time Synchronisation von Identitätsdaten zwischen PAM und IAM\n• GraphQL-Interfaces bieten flexible Datenabfragen für komplexe Integrations-Szenarien\n• Webhook-basierte Event-Notifications gewährleisten sofortige Updates bei Änderungen\n• Rate-Limiting und Circuit-Breaker-Patterns sichern Systemstabilität bei hoher Last\n• API-Gateway-Integration ermöglicht zentrale Authentifizierung und Autorisierung\n\n🔄 Event-driven Architecture für Real-time Orchestration:\n• Message-Queue-Systeme koordinieren komplexe Workflows zwischen PAM und IAM\n• Event-Sourcing ermöglicht vollständige Audit-Trails über beide Systeme hinweg\n• Asynchrone Verarbeitung gewährleistet Performance auch bei komplexen Integrations-Logiken\n• Dead-Letter-Queues sichern Datenintegrität bei temporären Systemausfällen\n• Event-Schema-Registry gewährleistet Kompatibilität bei System-Updates\n\n📊 Unified Identity Data Model für konsistente Datenstrukturen:\n• Gemeinsame Identitäts-Attribute reduzieren Datenredundanz und Inkonsistenzen\n• Hierarchische Rollenmodelle ermöglichen granulare Berechtigungsvererbung\n• Standardisierte Metadaten-Schemas erleichtern Cross-System-Analytics\n• Versionierte Datenmodelle gewährleisten Backward-Compatibility bei Updates\n• Master-Data-Management eliminiert Datensilos und Single Points of Truth\n\n🛡️ Security-by-Design für Integration-Layer:\n• Mutual TLS Authentication sichert alle Inter-System-Kommunikation\n• Token-basierte Autorisierung mit kurzen Lebensdauern minimiert Sicherheitsrisiken\n• End-to-End-Encryption schützt sensitive Daten während der Übertragung\n• Zero-Trust-Prinzipien gelten auch für System-zu-System-Kommunikation\n• Security-Monitoring überwacht alle Integration-Touchpoints kontinuierlich\n\n⚡ Performance-Optimization für Enterprise-Scale:\n• Caching-Strategien reduzieren Latenz bei häufigen Datenabfragen\n• Connection-Pooling optimiert Ressourcennutzung bei hohem Durchsatz\n• Load-Balancing gewährleistet Hochverfügbarkeit der Integration-Services\n• Asynchrone Batch-Processing für nicht-zeitkritische Synchronisations-Tasks\n• Performance-Monitoring identifiziert Bottlenecks proaktiv\n\n🔗 Hybrid-Cloud Integration-Patterns für moderne Deployment-Szenarien:\n• Multi-Cloud-Federation ermöglicht konsistente Integration über Cloud-Grenzen hinweg\n• Edge-Computing-Support für IoT und Remote-Access-Szenarien\n• Container-basierte Integration-Services für skalierbare Microservices-Architekturen\n• Service-Mesh-Integration für erweiterte Traffic-Management-Capabilities\n• Cloud-native Monitoring und Observability für End-to-End-Visibility"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Governance-Strukturen und Compliance-Frameworks sind erforderlich für eine erfolgreiche PAM-IAM-Integration in regulierten Industrien?',
        answer: "Erfolgreiche PAM-IAM-Integration in regulierten Industrien erfordert robuste Governance-Strukturen, die sowohl die spezifischen Compliance-Anforderungen verschiedener Regulierungsrahmen als auch die operativen Komplexitäten integrierter Identitätssysteme adressieren. Ein strategischer Governance-Ansatz kombiniert Risk-based Controls, Automated Compliance-Monitoring und Cross-functional Oversight für nachhaltige regulatorische Exzellenz.\n\n📋 Unified Governance-Framework für integrierte PAM-IAM-Landschaften:\n• Cross-functional Governance-Committees mit Vertretern aus IT, Security, Compliance und Business\n• Einheitliche Policy-Frameworks die sowohl PAM- als auch IAM-spezifische Anforderungen abdecken\n• Risk-based Governance mit differenzierten Kontrollen basierend auf Privilegien-Level\n• Standardisierte Approval-Workflows für konsistente Entscheidungsfindung\n• Regular Governance-Reviews für kontinuierliche Anpassung an neue Anforderungen\n\n🔍 Compliance-by-Design für regulatorische Exzellenz:\n• Automated Compliance-Monitoring mit Real-time Alerting bei Policy-Verletzungen\n• Segregation-of-Duties-Controls die sowohl PAM- als auch IAM-Bereiche umfassen\n• Comprehensive Audit-Trails mit unveränderlichen Logs für forensische Analysen\n• Regular Compliance-Assessments mit standardisierten Reporting-Frameworks\n• Proactive Risk-Assessments für neue Technologien und Integrations-Szenarien\n\n⚖️ Regulierungs-spezifische Compliance-Mappings:\n• SOX-Compliance durch robuste Financial-System-Access-Controls und Segregation-of-Duties\n• GDPR-Konformität mit Privacy-by-Design und umfassenden Data-Protection-Measures\n• HIPAA-Compliance für Healthcare-Organisationen mit speziellen PHI-Schutzmaßnahmen\n• PCI-DSS-Anforderungen für Payment-Card-Industry mit erweiterten Access-Controls\n• Industry-spezifische Standards wie NERC-CIP für Energieversorger oder FFIEC für Finanzinstitute\n\n📊 Risk-based Access-Governance für optimale Sicherheits-Compliance-Balance:\n• Dynamic Risk-Scoring basierend auf Benutzerverhalten und Zugriffskontexten\n• Adaptive Controls die sich automatisch an Risikobewertungen anpassen\n• Continuous Monitoring mit Machine-Learning-gestützter Anomaly-Detection\n• Risk-based Recertification mit intelligenter Priorisierung kritischer Zugriffe\n• Threat-Intelligence-Integration für proaktive Risikobewertung\n\n🔄 Continuous Compliance-Optimization:\n• Automated Compliance-Reporting mit Real-time Dashboards für Management-Visibility\n• Regular Internal-Audits mit standardisierten Checklists und Assessment-Frameworks\n• External-Audit-Preparation mit umfassender Dokumentation und Evidence-Collection\n• Compliance-Gap-Analysis für proaktive Identifikation von Verbesserungspotenzialen\n• Regulatory-Change-Management für schnelle Anpassung an neue Anforderungen\n\n🎯 Business-Alignment für nachhaltige Governance-Akzeptanz:\n• Business-Impact-Assessment für alle Governance-Entscheidungen\n• Stakeholder-Engagement für breite Akzeptanz und Unterstützung\n• Training-und-Awareness-Programme für alle betroffenen Mitarbeiter\n• Performance-Metrics die sowohl Compliance- als auch Business-Ziele messen\n• Regular Governance-Effectiveness-Reviews für kontinuierliche Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickelt sich die Zukunft von PAM und IAM und welche Technologie-Trends werden die Integration beider Ansätze in den nächsten Jahren prägen?',
        answer: "Die Zukunft von PAM und IAM wird durch Konvergenz-Trends geprägt, die beide Disziplinen näher zusammenbringen und neue Möglichkeiten für intelligente, adaptive Sicherheitsökosysteme schaffen. Künstliche Intelligenz, Zero-Trust-Architekturen und Cloud-native Technologien transformieren traditionelle Grenzen zwischen PAM und IAM zu fließenden, kontextbasierten Sicherheitsebenen.\n\n🤖 AI-driven Convergence für intelligente Identitätssicherheit:\n• Machine-Learning-Algorithmen analysieren Verhaltensmuster über PAM- und IAM-Systeme hinweg\n• Predictive Analytics ermöglichen proaktive Sicherheitsmaßnahmen vor Bedrohungsmaterialisierung\n• Natural-Language-Processing automatisiert Policy-Erstellung und Compliance-Dokumentation\n• Automated-Decision-Making reduziert manuelle Interventionen bei Routine-Zugriffsanfragen\n• Intelligent-Orchestration koordiniert komplexe Workflows zwischen verschiedenen Sicherheitssystemen\n\n🌐 Cloud-native Integration-Platforms für nahtlose Orchestrierung:\n• Serverless-Architectures ermöglichen event-driven Integration ohne Infrastruktur-Overhead\n• Container-basierte Microservices bieten modulare, skalierbare Integration-Komponenten\n• API-Mesh-Technologien vereinfachen komplexe Multi-System-Integrationen\n• Edge-Computing bringt Identitätssicherheit näher an Benutzer und Anwendungen\n• Multi-Cloud-Federation ermöglicht konsistente Sicherheitsrichtlinien über Cloud-Grenzen hinweg\n\n🔐 Zero-Trust-Evolution für adaptive Sicherheitsarchitekturen:\n• Continuous-Authentication ersetzt traditionelle Session-basierte Sicherheitsmodelle\n• Context-aware-Access-Controls berücksichtigen dynamische Risikofaktoren in Echtzeit\n• Micro-Segmentation erweitert sich von Netzwerk- auf Identitäts- und Anwendungsebene\n• Risk-based-Automation passt Sicherheitskontrollen automatisch an Bedrohungslagen an\n• Behavioral-Biometrics ermöglichen kontinuierliche Benutzerverifikation ohne Produktivitätsverlust\n\n📱 Identity-as-a-Service-Evolution für demokratisierte Sicherheit:\n• Low-Code-Platforms ermöglichen Business-Anwendern die Konfiguration von Identitätsworkflows\n• Self-Service-Capabilities erweitern sich auf komplexere PAM-Funktionalitäten\n• Mobile-first-Design macht erweiterte Sicherheitsfeatures überall verfügbar\n• Citizen-Developer-Tools demokratisieren die Erstellung von Identitäts-Anwendungen\n• API-Economy ermöglicht nahtlose Integration in Business-Anwendungen\n\n🔬 Emerging-Technologies für Next-Generation-Capabilities:\n• Quantum-Cryptography bereitet Identitätssysteme auf Post-Quantum-Bedrohungen vor\n• Blockchain-Integration ermöglicht dezentralisierte Identitätsverifikation\n• Biometric-Advancement erweitert Authentifizierungsmöglichkeiten um neue Modalitäten\n• IoT-Integration bringt Identitätssicherheit in Edge-Computing-Szenarien\n• Augmented-Reality-Interfaces revolutionieren Benutzerinteraktionen mit Sicherheitssystemen\n\n🎯 Business-Outcome-focused-Evolution:\n• Security-as-a-Business-Enabler statt traditioneller Compliance-fokussierter Ansätze\n• Real-time-Business-Impact-Assessment für alle Sicherheitsentscheidungen\n• Adaptive-Security-Posture die sich automatisch an Geschäftsanforderungen anpasst\n• Innovation-friendly-Security die neue Technologien und Geschäftsmodelle unterstützt\n• Ecosystem-Security für sichere Collaboration in digitalen Business-Ökosystemen"
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
