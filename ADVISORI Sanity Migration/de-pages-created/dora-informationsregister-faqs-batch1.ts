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
    console.log('Updating DORA Informationsregister page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-informationsregister' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-informationsregister" not found')
    }
    
    // Create new FAQs for DORA information register fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen Informationen müssen in einem DORA-konformen Informationsregister erfasst werden?',
        answer: "DORA verlangt die systematische Erfassung umfassender Informationen über alle kritischen IKT-Assets und -Services, die weit über traditionelle IT-Inventare hinausgehen. Ein DORA-konformes Informationsregister bildet das Fundament für effektives Risikomanagement und regulatorische Compliance und erfordert strukturierte Dokumentation aller relevanten technischen, operationellen und geschäftlichen Aspekte der IKT-Landschaft.\n\n🏗️ IKT-Asset-Grunddaten und technische Spezifikationen:\n• Vollständige Inventarisierung aller IKT-Systeme, Anwendungen, Datenbanken und Infrastrukturkomponenten mit eindeutigen Identifikatoren\n• Technische Spezifikationen einschließlich Hardware-Konfigurationen, Software-Versionen, Betriebssysteme und Patch-Level\n• Netzwerk-Topologie und Interconnection-Details zwischen verschiedenen Systemkomponenten\n• Kapazitäts- und Performance-Parameter sowie aktuelle Auslastungsgrade\n• Sicherheitskonfigurationen, Verschlüsselungsstandards und Authentifizierungsmechanismen\n\n📊 Geschäftskritikalität und Impact-Bewertung:\n• Klassifizierung der Geschäftskritikalität basierend auf operationellen Auswirkungen bei Systemausfällen\n• Detaillierte Business-Impact-Analysen mit quantifizierten finanziellen und operationellen Konsequenzen\n• Recovery-Time-Objectives und Recovery-Point-Objectives für jedes kritische System\n• Abhängigkeitsmatrizen zwischen verschiedenen IKT-Services und Geschäftsprozessen\n• Identifikation von Single Points of Failure und kritischen Pfaden in der IKT-Architektur\n\n🔗 Drittanbieter-Services und externe Abhängigkeiten:\n• Vollständige Dokumentation aller IKT-Drittanbieter mit Kontaktdaten, Vertragsdetails und Service-Level-Agreements\n• Risikobewertungen für jeden Drittanbieter einschließlich finanzieller Stabilität und operationeller Zuverlässigkeit\n• Dokumentation von Sub-Contractors und deren Rolle in der IKT-Service-Bereitstellung\n• Geografische Verteilung von Drittanbieter-Services und damit verbundene Jurisdiktionsrisiken\n• Exit-Strategien und Alternative-Provider-Optionen für kritische Services\n\n🛡️ Sicherheits- und Compliance-Informationen:\n• Aktuelle Schwachstellen-Assessments und Penetration-Test-Ergebnisse für alle kritischen Systeme\n• Compliance-Status bezüglich relevanter Standards wie ISO 27001, SOC 2 oder branchenspezifischer Anforderungen\n• Incident-Historie mit Details zu vergangenen Sicherheitsvorfällen und deren Auflösung\n• Backup- und Disaster-Recovery-Konfigurationen mit regelmäßigen Test-Ergebnissen\n• Zugriffs- und Berechtigungsmatrizen für alle kritischen Systeme und Daten\n\n📋 Governance- und Verantwortlichkeits-Strukturen:\n• Klare Zuordnung von System-Ownership und Verantwortlichkeiten auf Personen- und Organisationsebene\n• Eskalationspfade und Kontaktinformationen für verschiedene Incident-Szenarien\n• Change-Management-Prozesse und Genehmigungsworkflows für System-Modifikationen\n• Dokumentation von Service-Level-Agreements und operationellen Metriken\n• Integration mit bestehenden ITSM-Prozessen und Governance-Frameworks"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie implementiere ich eine automatisierte Datenerfassung für mein DORA-Informationsregister?',
        answer: "Die Automatisierung der Datenerfassung ist entscheidend für die Aufrechterhaltung eines aktuellen und genauen DORA-Informationsregisters. Manuelle Prozesse sind fehleranfällig und skalieren nicht mit der Komplexität moderner IKT-Landschaften. Eine effektive Automatisierungsstrategie kombiniert verschiedene Technologien und Ansätze, um kontinuierliche Datenqualität und Compliance-Readiness zu gewährleisten.\n\n🔍 Asset-Discovery und automatische Inventarisierung:\n• Implementierung von Network-Discovery-Tools zur automatischen Erkennung aller verbundenen Geräte und Services\n• Integration mit bestehenden Configuration Management Databases für kontinuierliche Asset-Synchronisation\n• Verwendung von Agent-basierten Monitoring-Lösungen für detaillierte System-Informationen und Real-Time-Updates\n• API-Integration mit Cloud-Providern für automatische Erfassung von Cloud-Ressourcen und deren Konfigurationen\n• Vulnerability-Scanner-Integration für kontinuierliche Sicherheitsbewertungen und Patch-Status-Updates\n\n⚙️ Datenintegration und Workflow-Automatisierung:\n• Entwicklung von ETL-Prozessen zur Konsolidierung von Daten aus verschiedenen Quellsystemen\n• Implementierung von Event-driven Architectures für Real-Time-Updates bei System-Änderungen\n• Workflow-Engine-Integration für automatisierte Genehmigungsprozesse bei kritischen Änderungen\n• Machine-Learning-basierte Anomalie-Erkennung zur Identifikation ungewöhnlicher Konfigurationsänderungen\n• Robotic Process Automation für die Automatisierung repetitiver Datensammlung- und Validierungsaufgaben\n\n📊 Datenqualität und Validierung:\n• Implementierung von Data-Quality-Rules und automatischen Konsistenzprüfungen\n• Duplicate-Detection-Algorithmen zur Vermeidung redundanter Einträge\n• Automated-Testing-Frameworks für regelmäßige Validierung der Datenintegrität\n• Exception-Handling und Alert-Mechanismen bei Datenqualitätsproblemen\n• Historische Datenanalyse zur Identifikation von Trends und Mustern in der IKT-Landschaft\n\n🔄 Change-Management und Lifecycle-Tracking:\n• Automatische Erkennung und Dokumentation von System-Änderungen durch Integration mit Change-Management-Tools\n• Lifecycle-Management für IKT-Assets mit automatischen Alerts bei End-of-Life oder End-of-Support\n• Version-Control-Integration für Software-Assets und Konfigurationsdateien\n• Automated-Compliance-Checking gegen definierte Standards und Policies\n• Predictive-Analytics für proaktive Identifikation potenzieller Risiken und Wartungsbedarfe\n\n🛠️ Tool-Integration und Plattform-Architektur:\n• Master-Data-Management-Plattformen für zentrale Datenverwaltung und Governance\n• API-First-Ansätze für nahtlose Integration mit bestehenden Enterprise-Systemen\n• Cloud-native Architekturen für Skalierbarkeit und Flexibilität\n• Microservices-basierte Datensammlung für modulare und wartbare Lösungen\n• Real-Time-Dashboards und Reporting-Engines für kontinuierliche Überwachung der Datenqualität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielt das Informationsregister bei der DORA-Incident-Response und wie kann es die Reaktionszeiten verbessern?',
        answer: "Das DORA-Informationsregister ist ein kritischer Enabler für effektive Incident-Response und kann die Reaktionszeiten erheblich verkürzen, indem es sofortigen Zugang zu allen relevanten Informationen über betroffene Systeme und deren Abhängigkeiten bietet. In Krisensituationen ist Zeit der entscheidende Faktor, und ein gut strukturiertes Informationsregister kann den Unterschied zwischen einer schnellen Wiederherstellung und einem langwierigen Ausfall bedeuten.\n\n⚡ Sofortige Situationsbewertung und Impact-Analyse:\n• Real-Time-Zugriff auf kritische System-Informationen ermöglicht schnelle Bewertung der Ausfallschwere\n• Automatische Impact-Berechnung basierend auf vordefinierten Business-Criticality-Ratings und Abhängigkeitsmatrizen\n• Sofortige Identifikation aller betroffenen nachgelagerten Services und Geschäftsprozesse\n• Geografische und organisatorische Auswirkungsanalyse für koordinierte Response-Maßnahmen\n• Historische Incident-Daten für Pattern-Recognition und Lessons-Learned-Integration\n\n🎯 Präzise Eskalation und Ressourcen-Mobilisierung:\n• Automatische Identifikation der richtigen Ansprechpartner basierend auf System-Ownership und Expertise-Bereichen\n• Vordefinierte Eskalationsmatrizen mit Kontaktdaten und Verfügbarkeitsinformationen\n• Skill-basierte Routing von Incidents an die am besten qualifizierten Response-Teams\n• Integration mit On-Call-Systemen für automatische Benachrichtigung relevanter Experten\n• Vendor-Kontaktinformationen und Support-Level-Details für externe Unterstützung\n\n🔧 Beschleunigte Diagnose und Troubleshooting:\n• Sofortiger Zugriff auf System-Konfigurationen, Abhängigkeiten und bekannte Schwachstellen\n• Historische Performance-Daten und Baseline-Metriken für Anomalie-Identifikation\n• Dokumentierte Troubleshooting-Procedures und bewährte Lösungsansätze für ähnliche Incidents\n• Integration mit Monitoring-Tools für Real-Time-System-Status und Diagnostic-Informationen\n• Automated-Runbook-Execution basierend auf Incident-Typ und betroffenen Systemen\n\n🛡️ Koordinierte Recovery und Business-Continuity:\n• Sofortiger Zugriff auf Disaster-Recovery-Pläne und Backup-Konfigurationen\n• Priorisierte Recovery-Sequenzen basierend auf Business-Impact und Abhängigkeiten\n• Alternative-Service-Provider und Failover-Optionen für kritische Services\n• Kommunikationspläne und Stakeholder-Benachrichtigungsmatrizen\n• Post-Incident-Review-Templates und Lessons-Learned-Dokumentation\n\n📈 Kontinuierliche Verbesserung und Preparedness:\n• Incident-Response-Metriken und Performance-Tracking für kontinuierliche Optimierung\n• Simulation und Tabletop-Exercises basierend auf aktuellen Register-Daten\n• Proaktive Schwachstellen-Identifikation und Präventionsmaßnahmen\n• Integration mit Threat-Intelligence für kontextuelle Risikobewertung\n• Automated-Reporting für regulatorische Anforderungen und Management-Updates"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleiste ich die Datenqualität und Konsistenz in meinem DORA-Informationsregister über verschiedene Datenquellen hinweg?',
        answer: "Die Gewährleistung hoher Datenqualität und Konsistenz in DORA-Informationsregistern ist eine komplexe Herausforderung, die systematische Governance, technische Kontrollen und organisatorische Prozesse erfordert. Inkonsistente oder ungenaue Daten können zu fehlerhaften Risikobewertungen und ineffektiven Incident-Response-Maßnahmen führen, was die Compliance und operative Resilienz gefährdet.\n\n🎯 Master-Data-Management und Datengovernance:\n• Etablierung einer Single Source of Truth für alle kritischen IKT-Asset-Informationen\n• Definition klarer Data-Ownership und Verantwortlichkeiten für verschiedene Datenkategorien\n• Implementierung von Data-Stewardship-Rollen mit spezifischen Qualitätssicherungsaufgaben\n• Entwicklung umfassender Data-Dictionaries und Standardisierung von Terminologie\n• Regelmäßige Data-Governance-Reviews und Qualitäts-Audits\n\n🔍 Automatisierte Datenvalidierung und Qualitätskontrolle:\n• Implementierung von Business-Rules-Engines für kontinuierliche Datenvalidierung\n• Automated-Data-Profiling zur Identifikation von Anomalien und Inkonsistenzen\n• Cross-Reference-Validation zwischen verschiedenen Datenquellen\n• Statistical-Analysis für Outlier-Detection und Plausibilitätsprüfungen\n• Real-Time-Monitoring von Datenqualitäts-KPIs und Alert-Mechanismen\n\n⚙️ Datenintegration und Harmonisierung:\n• ETL-Prozesse mit robusten Datenbereinigung- und Transformationsregeln\n• API-basierte Integration für Real-Time-Synchronisation zwischen Systemen\n• Data-Mapping und Schema-Harmonisierung für konsistente Datenstrukturen\n• Conflict-Resolution-Mechanismen für widersprüchliche Informationen aus verschiedenen Quellen\n• Version-Control und Change-Tracking für alle Datenmodifikationen\n\n📊 Kontinuierliche Überwachung und Verbesserung:\n• Implementierung von Data-Quality-Dashboards für kontinuierliche Transparenz\n• Automated-Reconciliation-Prozesse für regelmäßige Konsistenzprüfungen\n• Exception-Reporting und Workflow-basierte Fehlerbehandlung\n• Trend-Analyse zur Identifikation systematischer Datenqualitätsprobleme\n• Feedback-Loops für kontinuierliche Verbesserung der Datensammlung- und Validierungsprozesse\n\n🛠️ Technische Infrastruktur und Tools:\n• Data-Lineage-Tracking für vollständige Nachvollziehbarkeit von Datenflüssen\n• Automated-Testing-Frameworks für regelmäßige Validierung der Datenintegrität\n• Machine-Learning-basierte Anomalie-Erkennung für proaktive Qualitätssicherung\n• Blockchain-basierte Audit-Trails für unveränderliche Dokumentation von Datenänderungen\n• Cloud-native Data-Quality-Plattformen für Skalierbarkeit und Performance"
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
