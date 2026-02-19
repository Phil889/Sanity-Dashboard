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
    console.log('Updating DORA Informationsregister page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-informationsregister' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-informationsregister" not found')
    }
    
    // Create new FAQs for DORA information register advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie integriere ich mein DORA-Informationsregister mit bestehenden ITSM- und CMDB-Systemen?',
        answer: "Die Integration von DORA-Informationsregistern mit bestehenden IT Service Management und Configuration Management Database Systemen ist entscheidend für operative Effizienz und Datenqualität. Eine nahtlose Integration eliminiert Datensilos, reduziert manuellen Aufwand und gewährleistet konsistente Informationen über alle IT-Governance-Prozesse hinweg.\n\n🔗 CMDB-Integration und Datenharmonisierung:\n• Mapping bestehender CMDB-Datenstrukturen auf DORA-spezifische Anforderungen und Erweiterung um fehlende Attribute\n• Implementierung bidirektionaler Synchronisation zwischen CMDB und Informationsregister für konsistente Datenhaltung\n• Entwicklung von Transformation-Rules für unterschiedliche Datenformate und Klassifizierungsschemata\n• Etablierung von Master-Data-Management-Prinzipien zur Vermeidung von Duplikaten und Inkonsistenzen\n• Integration von CMDB-Relationship-Modellen für umfassende Abhängigkeitsanalysen\n\n⚙️ ITSM-Workflow-Integration und Prozessautomatisierung:\n• Automatische Aktualisierung des Informationsregisters bei Change-Requests und Incident-Management-Aktivitäten\n• Integration von Service-Level-Management-Daten für Business-Impact-Bewertungen\n• Workflow-basierte Genehmigungsprozesse für kritische Register-Änderungen\n• Automated-Ticket-Generation bei Compliance-Abweichungen oder Datenqualitätsproblemen\n• Integration mit Problem-Management für Root-Cause-Analysen und kontinuierliche Verbesserung\n\n📊 API-basierte Integration und Real-Time-Synchronisation:\n• RESTful-API-Entwicklung für standardisierte Datenintegration zwischen verschiedenen Systemen\n• Event-driven Architecture für Real-Time-Updates bei kritischen System-Änderungen\n• Message-Queue-Integration für zuverlässige Datenübertragung und Fehlerbehandlung\n• Webhook-basierte Benachrichtigungen für zeitkritische Informationsregister-Updates\n• GraphQL-Integration für flexible und effiziente Datenabfragen\n\n🛠️ Legacy-System-Integration und Modernisierung:\n• ETL-Pipeline-Entwicklung für Datenextraktion aus Legacy-Systemen ohne native API-Unterstützung\n• Database-Connector-Implementation für direkte Integration mit bestehenden Datenquellen\n• File-based Integration für Systeme mit begrenzten Integrationsmöglichkeiten\n• Graduelle Modernisierung bestehender Systeme zur Verbesserung der Integrationsfähigkeiten\n• Hybrid-Ansätze für schrittweise Migration zu modernen Integration-Architekturen\n\n🔍 Monitoring und Governance der Integration:\n• Comprehensive-Logging und Audit-Trails für alle Integrations-Aktivitäten\n• Data-Quality-Monitoring für kontinuierliche Überwachung der Integrations-Performance\n• Exception-Handling und Alerting bei Integrations-Fehlern oder Dateninkonsistenzen\n• Performance-Monitoring und Optimierung der Integrations-Workflows\n• Compliance-Reporting für regulatorische Anforderungen bezüglich Datenintegrität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Herausforderungen gibt es bei der Führung von Informationsregistern in hybriden und Multi-Cloud-Umgebungen?',
        answer: "Die Führung von DORA-Informationsregistern in hybriden und Multi-Cloud-Umgebungen bringt einzigartige Komplexitäten mit sich, die traditionelle On-Premises-Ansätze übersteigen. Die dynamische Natur von Cloud-Services, unterschiedliche Provider-APIs und verteilte Governance-Modelle erfordern spezialisierte Strategien für vollständige Transparenz und Compliance.\n\n☁️ Cloud-Provider-spezifische Herausforderungen:\n• Unterschiedliche API-Standards und Datenformate zwischen verschiedenen Cloud-Providern erfordern individuelle Integrations-Ansätze\n• Dynamische Ressourcen-Allokation und Auto-Scaling führen zu kontinuierlichen Änderungen in der IKT-Landschaft\n• Provider-spezifische Service-Kategorisierungen und Naming-Conventions erschweren einheitliche Klassifizierung\n• Verschiedene Sicherheits- und Compliance-Standards zwischen Providern erfordern differenzierte Bewertungsansätze\n• Vendor-Lock-in-Risiken und begrenzte Portabilität von Konfigurationsdaten zwischen Plattformen\n\n🌐 Governance und Compliance in verteilten Umgebungen:\n• Jurisdiktionale Komplexitäten durch geografisch verteilte Cloud-Services und unterschiedliche Datenschutzbestimmungen\n• Herausforderungen bei der einheitlichen Anwendung von Governance-Policies über verschiedene Cloud-Umgebungen hinweg\n• Schwierigkeiten bei der Nachverfolgung von Datenflüssen und -speicherorten in Multi-Cloud-Architekturen\n• Komplexe Verantwortlichkeits-Zuordnungen zwischen internen Teams und verschiedenen Cloud-Providern\n• Herausforderungen bei der Auditierbarkeit und Nachweisführung für regulatorische Anforderungen\n\n🔄 Dynamische Ressourcen-Verwaltung und Lifecycle-Management:\n• Ephemere Ressourcen und Container-basierte Services erschweren traditionelle Asset-Tracking-Ansätze\n• Infrastructure-as-Code-Deployments führen zu schnellen und häufigen Konfigurationsänderungen\n• Serverless-Computing und Function-as-a-Service-Modelle erfordern neue Kategorisierungs- und Bewertungsansätze\n• Auto-Scaling und Load-Balancing führen zu variablen Ressourcen-Konfigurationen\n• DevOps-Praktiken und Continuous-Deployment-Pipelines erhöhen die Änderungsfrequenz erheblich\n\n🛡️ Sicherheit und Risikomanagement in hybriden Umgebungen:\n• Komplexe Netzwerk-Topologien mit VPNs, Private-Links und Hybrid-Connectivity erschweren Abhängigkeits-Mapping\n• Unterschiedliche Sicherheits-Postures zwischen On-Premises und verschiedenen Cloud-Umgebungen\n• Herausforderungen bei der einheitlichen Identitäts- und Zugriffsverwaltung über verschiedene Plattformen hinweg\n• Schwierigkeiten bei der Korrelation von Sicherheitsereignissen über verteilte Infrastrukturen\n• Komplexe Backup- und Disaster-Recovery-Szenarien mit verschiedenen Recovery-Strategien pro Umgebung\n\n📈 Technologische Lösungsansätze und Best Practices:\n• Cloud-Management-Plattformen für einheitliche Sicht auf Multi-Cloud-Ressourcen\n• Infrastructure-Discovery-Tools mit Cloud-nativen Integrations-Capabilities\n• Policy-as-Code-Ansätze für konsistente Governance über verschiedene Umgebungen hinweg\n• Cloud-Security-Posture-Management-Tools für kontinuierliche Compliance-Überwachung\n• Federated-Identity-Management für einheitliche Zugriffskontrolle und Audit-Trails"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie entwickle ich effektive Metriken und KPIs zur Messung der Qualität und Vollständigkeit meines DORA-Informationsregisters?',
        answer: "Die Entwicklung aussagekräftiger Metriken und KPIs für DORA-Informationsregister ist entscheidend für kontinuierliche Verbesserung und Compliance-Nachweis. Effektive Metriken müssen sowohl quantitative Aspekte der Datenqualität als auch qualitative Dimensionen der Nutzbarkeit und Geschäftsrelevanz erfassen, um ein vollständiges Bild der Register-Performance zu liefern.\n\n📊 Datenqualitäts-Metriken und Vollständigkeits-Indikatoren:\n• Completeness-Rate für kritische Datenfelder mit gewichteter Bewertung basierend auf Geschäftskritikalität\n• Data-Freshness-Metriken zur Messung der Aktualität von Informationen mit differenzierten Schwellenwerten für verschiedene Asset-Kategorien\n• Accuracy-Scores durch automatisierte Validierung gegen authoritative Datenquellen\n• Consistency-Metriken für Datenharmonisierung zwischen verschiedenen Systemen und Datenquellen\n• Duplicate-Detection-Rates und Data-Deduplication-Effektivität\n\n🎯 Compliance und Governance-KPIs:\n• DORA-Readiness-Score basierend auf Vollständigkeit regulatorisch relevanter Informationen\n• Audit-Trail-Completeness für Nachverfolgbarkeit aller Datenänderungen\n• Policy-Compliance-Rate für Einhaltung interner Datengovernance-Standards\n• Regulatory-Reporting-Readiness-Metriken für zeitnahe Bereitstellung aufsichtsrechtlicher Informationen\n• Risk-Coverage-Ratio zur Bewertung der Abdeckung aller identifizierten IKT-Risiken\n\n⚡ Operational-Excellence und Performance-Indikatoren:\n• Mean-Time-to-Update für kritische Asset-Änderungen\n• User-Adoption-Rates und System-Utilization-Metriken\n• Query-Response-Times und System-Performance-Benchmarks\n• Incident-Response-Effectiveness basierend auf Register-Informationen\n• Change-Management-Efficiency durch automatisierte Register-Updates\n\n🔍 Business-Value und Impact-Metriken:\n• Risk-Mitigation-Effectiveness durch verbesserte Asset-Transparenz\n• Cost-Avoidance durch proaktive Asset-Management-Maßnahmen\n• Decision-Making-Speed-Improvement durch bessere Informationsverfügbarkeit\n• Stakeholder-Satisfaction-Scores für Register-Nutzer\n• Business-Continuity-Preparedness basierend auf Register-Informationen\n\n📈 Kontinuierliche Verbesserung und Trend-Analyse:\n• Data-Quality-Trend-Analysen für Identifikation systematischer Verbesserungsmöglichkeiten\n• Predictive-Analytics für proaktive Identifikation potenzieller Datenqualitätsprobleme\n• Benchmark-Vergleiche mit Industry-Standards und Best-Practices\n• ROI-Metriken für Investitionen in Register-Verbesserungen\n• Maturity-Assessment-Scores für kontinuierliche Capability-Entwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen künstliche Intelligenz und Machine Learning bei der Optimierung von DORA-Informationsregistern?',
        answer: "Künstliche Intelligenz und Machine Learning revolutionieren die Verwaltung von DORA-Informationsregistern durch Automatisierung komplexer Aufgaben, proaktive Anomalie-Erkennung und intelligente Datenanalyse. Diese Technologien ermöglichen es, die Qualität, Vollständigkeit und Nutzbarkeit von Informationsregistern erheblich zu verbessern und gleichzeitig den manuellen Aufwand zu reduzieren.\n\n🤖 Intelligente Datenklassifizierung und Asset-Kategorisierung:\n• Natural Language Processing für automatische Klassifizierung von Asset-Beschreibungen und Dokumentationen\n• Computer Vision für automatische Erkennung und Kategorisierung von Netzwerk-Diagrammen und Infrastruktur-Dokumentationen\n• Supervised Learning für kontinuierliche Verbesserung der Klassifizierungsgenauigkeit basierend auf Experten-Feedback\n• Unsupervised Learning für Entdeckung neuer Asset-Kategorien und Muster in der IKT-Landschaft\n• Transfer Learning für Anwendung bewährter Klassifizierungsmodelle auf neue Umgebungen\n\n🔍 Proaktive Anomalie-Erkennung und Qualitätssicherung:\n• Anomaly Detection für Identifikation ungewöhnlicher Konfigurationsänderungen oder Dateninkonsistenzen\n• Predictive Analytics für Vorhersage potenzieller Asset-Ausfälle oder Wartungsbedarfe\n• Pattern Recognition für Identifikation wiederkehrender Datenqualitätsprobleme\n• Outlier Detection für Identifikation von Assets mit ungewöhnlichen Eigenschaften oder Risikoprofilen\n• Time Series Analysis für Trend-Erkennung in Asset-Performance und Nutzungsmustern\n\n📊 Intelligente Datenintegration und Harmonisierung:\n• Entity Resolution für automatische Identifikation und Verknüpfung verwandter Assets über verschiedene Datenquellen hinweg\n• Schema Matching für automatische Zuordnung von Datenfeldern zwischen verschiedenen Systemen\n• Data Fusion für intelligente Kombination von Informationen aus mehreren Quellen\n• Conflict Resolution für automatische Auflösung widersprüchlicher Informationen\n• Semantic Analysis für besseres Verständnis von Datenbeziehungen und Kontexten\n\n🎯 Risikobewertung und Impact-Analyse:\n• Risk Scoring Models für automatische Bewertung von Asset-Risiken basierend auf historischen Daten und Umgebungsfaktoren\n• Dependency Analysis für intelligente Identifikation kritischer Pfade und Single Points of Failure\n• Impact Simulation für Vorhersage der Auswirkungen potenzieller Asset-Ausfälle\n• Vulnerability Assessment für automatische Bewertung von Sicherheitsrisiken\n• Business Impact Modeling für quantitative Bewertung der Geschäftsauswirkungen\n\n🚀 Automatisierung und Workflow-Optimierung:\n• Intelligent Process Automation für automatisierte Datensammlung und Validierung\n• Chatbot-Integration für natürlichsprachliche Abfragen des Informationsregisters\n• Automated Report Generation für intelligente Erstellung regulatorischer Berichte\n• Smart Alerting für kontextuelle Benachrichtigungen basierend auf Benutzerverhalten und Prioritäten\n• Recommendation Engines für Vorschläge zur Verbesserung der Register-Qualität und Compliance"
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
