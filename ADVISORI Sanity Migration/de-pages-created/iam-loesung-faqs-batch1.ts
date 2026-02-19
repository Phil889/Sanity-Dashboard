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
    console.log('Updating IAM-Lösung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-loesung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-loesung" not found')
    }
    
    // Create new FAQs for IAM-Lösung fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was macht eine maßgeschneiderte IAM-Lösung zu einem strategischen Erfolgsfaktor und wie unterscheidet sie sich von Standard-Implementierungen?',
        answer: "Eine maßgeschneiderte IAM-Lösung ist weit mehr als eine technische Implementation – sie ist ein strategischer Business-Enabler, der perfekt auf die spezifischen Anforderungen, Prozesse und Ziele Ihres Unternehmens abgestimmt ist. Anders als Standard-Implementierungen berücksichtigt eine maßgeschneiderte Lösung nicht nur aktuelle Bedürfnisse, sondern auch zukünftige Entwicklungen und schafft eine flexible, skalierbare Architektur, die mit Ihrem Unternehmen wächst.\n\n🎯 Strategische Business-Alignment und Wertschöpfung:\n• Comprehensive Business-Process-Integration mit nahtloser Einbindung in bestehende Workflows und Organisationsstrukturen\n• Custom Solution Architecture die spezifische Branchenanforderungen und regulatorische Vorgaben optimal adressiert\n• ROI-optimierte Implementierung mit messbaren Geschäftsvorteilen und klaren Performance-Indikatoren\n• Future-ready Design das Flexibilität für Geschäftswachstum und technologische Evolution bietet\n• Stakeholder-zentrierte Entwicklung mit kontinuierlichem Feedback und iterativer Verbesserung\n\n🚀 Technische Excellence und Innovation-Integration:\n• Herstellerunabhängige Architektur mit Best-of-Breed-Komponenten für optimale Funktionalität\n• Cloud-native Design mit Multi-Cloud-Unterstützung und elastischer Skalierbarkeit\n• API-first Approach für nahtlose Integration mit modernen Anwendungslandschaften\n• Microservices-Architektur für modulare Entwicklung und flexible Deployment-Optionen\n• AI-powered Analytics für intelligente Automatisierung und prädiktive Sicherheitsentscheidungen\n\n🛡️ Advanced Security und Compliance-Integration:\n• Zero-Trust-Architektur mit kontinuierlicher Verifikation und adaptiven Sicherheitskontrollen\n• Compliance-by-Design für automatisierte Erfüllung regulatorischer Anforderungen\n• Risk-based Authentication mit intelligenter Anpassung an Bedrohungslandschaft\n• Comprehensive Audit-Capabilities für lückenlose Nachverfolgung und Forensik\n• Threat Intelligence Integration für proaktive Abwehr bekannter Angriffsmuster\n\n📊 Data-driven Optimization und Performance-Excellence:\n• Real-time Analytics für kontinuierliche Überwachung und Optimierung der Systemperformance\n• User Experience Optimization mit intuitiven Interfaces und nahtlosen Workflows\n• Capacity Planning mit prädiktiven Modellen für optimale Ressourcennutzung\n• Performance Metrics und KPI-Dashboards für datengetriebene Entscheidungsfindung\n• Continuous Improvement Processes für nachhaltige Wertschöpfung und Innovation\n\n🌐 Enterprise-Scale Integration und Ecosystem-Enablement:\n• Legacy System Integration ohne Disruption kritischer Geschäftsprozesse\n• Partner Ecosystem Support für sichere B2B-Collaboration und Supply Chain Integration\n• Global Deployment mit lokaler Compliance für internationale Geschäftstätigkeit\n• Disaster Recovery und Business Continuity für kritische Geschäftsprozesse\n• Change Management und User Adoption für nachhaltige Transformation und Akzeptanz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen die Auswahl und Implementierung der optimalen IAM-Lösung für ein Unternehmen?',
        answer: "Die Auswahl und Implementierung der optimalen IAM-Lösung erfordert eine strategische Herangehensweise, die technische Excellence mit geschäftlicher Pragmatik verbindet. Erfolgreiche IAM-Lösungen entstehen durch die sorgfältige Berücksichtigung multipler Faktoren, die von organisatorischen Anforderungen über technische Constraints bis hin zu regulatorischen Vorgaben reichen.\n\n🎯 Strategic Business Assessment und Requirements-Engineering:\n• Comprehensive Stakeholder Analysis mit Identifikation aller betroffenen Geschäftsbereiche und deren spezifischen Anforderungen\n• Current State Assessment für detaillierte Analyse bestehender Identitäts- und Zugriffsstrukturen\n• Future State Vision mit klarer Definition strategischer Ziele und gewünschter Geschäftsergebnisse\n• Gap Analysis für systematische Identifikation von Verbesserungspotenzialen und Handlungsfeldern\n• Business Case Development mit ROI-Kalkulation und Investitionsrechtfertigung\n\n🚀 Technology Evaluation und Architecture-Design:\n• Vendor-agnostic Technology Assessment für objektive Bewertung verfügbarer Lösungsoptionen\n• Scalability Requirements mit Berücksichtigung zukünftiger Wachstumspläne und Kapazitätsanforderungen\n• Integration Complexity Analysis für realistische Einschätzung von Implementierungsaufwand und -risiken\n• Security Architecture Review mit Fokus auf Zero-Trust-Prinzipien und moderne Bedrohungslandschaft\n• Performance Requirements Definition für optimale User Experience und Systemperformance\n\n🛡️ Risk Management und Compliance-Alignment:\n• Regulatory Compliance Mapping für systematische Berücksichtigung aller relevanten Vorschriften\n• Risk Assessment mit Identifikation und Bewertung potenzieller Sicherheits- und Geschäftsrisiken\n• Data Protection Requirements für DSGVO-konforme und datenschutzrechtlich sichere Implementation\n• Audit Readiness Planning für kontinuierliche Compliance-Überwachung und Berichterstattung\n• Incident Response Integration für schnelle Reaktion auf Sicherheitsvorfälle\n\n📊 Implementation Strategy und Change Management:\n• Phased Rollout Planning mit risikominimierten Implementierungsphasen und Meilenstein-Definition\n• User Adoption Strategy für erfolgreiche Einführung und nachhaltige Akzeptanz\n• Training und Communication Planning für umfassende Vorbereitung aller Beteiligten\n• Success Metrics Definition für messbare Erfolgskontrolle und kontinuierliche Optimierung\n• Contingency Planning für Risikominimierung und alternative Handlungsoptionen\n\n🌐 Operational Excellence und Continuous Improvement:\n• Support Model Definition für nachhaltigen Betrieb und kontinuierliche Weiterentwicklung\n• Monitoring und Alerting Strategy für proaktive Systemüberwachung und Problemerkennung\n• Backup und Recovery Planning für Geschäftskontinuität und Disaster Recovery\n• Innovation Roadmap für Integration zukünftiger Technologien und Funktionalitäten\n• Vendor Relationship Management für optimale Partnerschaft und Support-Qualität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie gewährleistet eine professionelle IAM-Lösung nahtlose Integration in bestehende IT-Landschaften ohne Geschäftsunterbrechung?',
        answer: "Eine professionelle IAM-Lösung zeichnet sich durch ihre Fähigkeit aus, sich nahtlos in komplexe, gewachsene IT-Landschaften zu integrieren, ohne kritische Geschäftsprozesse zu unterbrechen. Dies erfordert eine durchdachte Integrationsstrategie, die technische Expertise mit operativer Exzellenz verbindet und dabei höchste Sicherheits- und Verfügbarkeitsstandards aufrechterhält.\n\n🎯 Strategic Integration Planning und Architecture-Design:\n• Comprehensive Legacy Assessment für detaillierte Analyse bestehender Systeme und Abhängigkeiten\n• Integration Architecture Design mit modularen Ansätzen und standardisierten Schnittstellen\n• Phased Migration Strategy für risikominimierten Übergang ohne Geschäftsunterbrechung\n• Compatibility Matrix Development für systematische Bewertung von Integrationsmöglichkeiten\n• Rollback Planning für sichere Rückkehr zu vorherigen Zuständen bei unvorhergesehenen Problemen\n\n🚀 Advanced Integration Technologies und Methodologies:\n• API-first Integration mit RESTful Services und standardisierten Protokollen für maximale Kompatibilität\n• Middleware-basierte Connectivity für sichere und skalierbare Systemverbindungen\n• Event-driven Architecture für Real-time Synchronisation und asynchrone Datenverarbeitung\n• Federation Services für sichere Cross-Domain-Authentifizierung ohne Systemmodifikationen\n• Connector Framework für standardisierte Integration verschiedener Anwendungstypen\n\n🛡️ Zero-Downtime Implementation und Business Continuity:\n• Blue-Green Deployment Strategies für unterbrechungsfreie Systemaktualisierungen\n• Parallel System Operation während Migrationsphasen für kontinuierliche Verfügbarkeit\n• Gradual Cutover Processes mit schrittweiser Überführung einzelner Systemkomponenten\n• Real-time Monitoring während Integration für sofortige Erkennung und Behebung von Problemen\n• Emergency Procedures für schnelle Reaktion auf unvorhergesehene Situationen\n\n📊 Data Migration und Synchronization Excellence:\n• Intelligent Data Mapping für akkurate Übertragung von Identitäts- und Zugriffsdaten\n• Incremental Synchronization für kontinuierliche Datenaktualisierung ohne Performance-Impact\n• Data Validation Processes für Sicherstellung von Datenintegrität und -qualität\n• Conflict Resolution Mechanisms für automatische Behandlung von Dateninkonsistenzen\n• Audit Trail Maintenance für lückenlose Nachverfolgung aller Datenänderungen\n\n🌐 Testing und Quality Assurance für Production-Ready Integration:\n• Comprehensive Integration Testing in isolierten Umgebungen vor Produktionseinführung\n• Load Testing für Validierung der Systemperformance unter realistischen Bedingungen\n• Security Testing für Überprüfung aller Sicherheitsaspekte der Integration\n• User Acceptance Testing für Bestätigung der Funktionalität aus Anwendersicht\n• Performance Benchmarking für Vergleich mit vorherigen Systemzuständen und Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Cloud-native Architektur in modernen IAM-Lösungen und welche Vorteile bietet sie für Unternehmen?',
        answer: "Cloud-native Architektur revolutioniert moderne IAM-Lösungen durch ihre inhärente Skalierbarkeit, Flexibilität und Innovationsfähigkeit. Diese Architektur-Philosophie ermöglicht es Unternehmen, IAM als strategischen Service zu nutzen, der sich dynamisch an verändernde Geschäftsanforderungen anpasst und dabei höchste Sicherheits- und Performance-Standards aufrechterhält.\n\n🎯 Cloud-native Fundamentals und Strategic Advantages:\n• Microservices Architecture für modulare, unabhängig skalierbare IAM-Komponenten\n• Container-based Deployment für konsistente, portable und effiziente Anwendungsbereitstellung\n• API-first Design für nahtlose Integration und Ecosystem-Konnektivität\n• DevOps-Integration für automatisierte Entwicklung, Testing und Deployment-Prozesse\n• Infrastructure as Code für reproduzierbare, versionierte und automatisierte Infrastruktur-Management\n\n🚀 Scalability und Performance Excellence:\n• Elastic Auto-scaling für automatische Anpassung an schwankende Benutzerlasten\n• Global Distribution mit Edge-Computing für optimale Performance weltweit\n• Load Balancing und Traffic Management für gleichmäßige Ressourcenverteilung\n• Caching Strategies für beschleunigte Antwortzeiten und reduzierte Backend-Belastung\n• Performance Monitoring mit Real-time Metrics für kontinuierliche Optimierung\n\n🛡️ Enhanced Security und Resilience:\n• Zero-Trust Network Architecture mit kontinuierlicher Verifikation aller Zugriffe\n• Immutable Infrastructure für erhöhte Sicherheit durch unveränderliche Systemkomponenten\n• Automated Security Patching für zeitnahe Behebung von Sicherheitslücken\n• Distributed Security Controls für mehrschichtige Verteidigung gegen Cyber-Bedrohungen\n• Disaster Recovery Automation für schnelle Wiederherstellung bei Systemausfällen\n\n📊 Operational Excellence und Cost Optimization:\n• Pay-as-you-use Modelle für kosteneffiziente Ressourcennutzung basierend auf tatsächlichem Bedarf\n• Automated Resource Management für optimale Auslastung und Kostenkontrolle\n• Multi-Cloud Strategies für Vendor-Lock-in-Vermeidung und Risikodiversifikation\n• Observability und Monitoring für umfassende Einblicke in Systemverhalten und Performance\n• Continuous Optimization durch Machine Learning für selbstlernende Systemverbesserung\n\n🌐 Innovation Enablement und Future-Readiness:\n• Rapid Feature Development durch agile Entwicklungsmethoden und kontinuierliche Integration\n• AI und Machine Learning Integration für intelligente Automatisierung und Anomaly Detection\n• Serverless Computing für event-getriebene Funktionalitäten ohne Infrastruktur-Management\n• Edge Computing Support für IoT-Integration und lokale Datenverarbeitung\n• Blockchain Integration für dezentrale Identitätsverifikation und Trust-Management"
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
