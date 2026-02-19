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
    console.log('Updating SIEM Software page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-software' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-software" not found')
    }
    
    // Create new FAQs for SIEM Software evaluation and vendor comparison
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt man eine strukturierte Methodik für die SIEM Software Evaluierung und Vendor-Vergleich?',
        answer: "Eine systematische SIEM Software Evaluierung ist entscheidend für eine fundierte Investitionsentscheidung und erfordert eine strukturierte Herangehensweise, die sowohl quantitative als auch qualitative Bewertungskriterien berücksichtigt. Eine durchdachte Evaluierungsmethodik minimiert das Risiko von Fehlentscheidungen und stellt sicher, dass die ausgewählte Lösung optimal zu den organisatorischen Anforderungen passt.\n\n📋 Anforderungsanalyse und Kriterien-Definition:\n• Umfassende Stakeholder-Interviews zur Erfassung funktionaler und nicht-funktionaler Anforderungen\n• Priorisierung der Anforderungen basierend auf Business Impact und strategischer Bedeutung\n• Definition messbarer Bewertungskriterien mit klaren Gewichtungen für verschiedene Kategorien\n• Berücksichtigung zukünftiger Anforderungen und Wachstumsszenarien in der Kriterien-Matrix\n• Compliance-Mapping für regulatorische Anforderungen und Audit-Standards\n\n🔍 Marktanalyse und Vendor-Screening:\n• Systematische Marktforschung zur Identifikation aller relevanten SIEM Software Anbieter\n• Erstellung detaillierter Vendor-Profile mit Unternehmensinformationen, Produktportfolio und Marktpositionierung\n• Analyse von Analyst-Reports, Kundenbewertungen und Industry-Benchmarks\n• Bewertung der finanziellen Stabilität und langfristigen Viabilität der Anbieter\n• Screening basierend auf Must-Have Kriterien zur Erstellung einer Short List\n\n📊 Strukturierte Bewertungsmatrix:\n• Multi-Kriterien-Bewertungsmodell mit gewichteten Scoring-Kategorien\n• Funktionale Bewertung basierend auf Feature-Checklisten und Capability-Assessments\n• Technische Evaluierung von Performance, Skalierbarkeit und Architektur-Eigenschaften\n• Usability-Assessment durch User Experience Tests und Interface-Bewertungen\n• Vendor-Bewertung bezüglich Support-Qualität, Professional Services und Community\n\n🧪 Proof-of-Concept Design und Durchführung:\n• Definition realistischer Test-Szenarien basierend auf Ihren spezifischen Use Cases\n• Bereitstellung repräsentativer Testdaten aus Ihrer aktuellen IT-Umgebung\n• Strukturierte PoC-Durchführung mit standardisierten Testprotokollen\n• Performance-Benchmarking unter realistischen Lastbedingungen\n• Dokumentation aller Testergebnisse für objektive Vergleichbarkeit\n\n💰 Total Cost of Ownership Analyse:\n• Detaillierte Kostenmodellierung für verschiedene Deployment-Szenarien\n• Berücksichtigung aller direkten und indirekten Kosten über den gesamten Lifecycle\n• Sensitivitätsanalyse für verschiedene Wachstums- und Nutzungsszenarien\n• ROI-Berechnung basierend auf quantifizierbaren Nutzenpotenzialen\n• Vergleichende TCO-Analyse zwischen verschiedenen Vendor-Optionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche technischen Anforderungen und Performance-Kriterien sind bei der SIEM Software Auswahl besonders kritisch?',
        answer: "Die technischen Anforderungen und Performance-Kriterien bilden das Fundament für eine erfolgreiche SIEM Software Implementierung und müssen sorgfältig an die spezifischen Charakteristika Ihrer IT-Umgebung angepasst werden. Eine unzureichende technische Evaluierung kann zu Performance-Problemen, Skalierungsengpässen und operativen Herausforderungen führen.\n\n⚡ Event Processing und Durchsatz-Anforderungen:\n• Events per Second Kapazität basierend auf aktuellen und prognostizierten Datenvolumen\n• Real-time Processing Latenz für zeitkritische Security Events und Alerting\n• Batch Processing Capabilities für historische Datenanalyse und Compliance-Reporting\n• Peak Load Handling für Spitzenlasten und unvorhergesehene Event-Spitzen\n• Queuing und Buffering Mechanismen für die Bewältigung temporärer Überlastungen\n\n🏗️ Architektur und Skalierbarkeits-Eigenschaften:\n• Horizontale Skalierung durch Cluster-Architekturen und Load Distribution\n• Vertikale Skalierung durch Hardware-Upgrades und Ressourcen-Erweiterung\n• Microservices-Architektur für modulare Skalierung einzelner Komponenten\n• Auto-Scaling Capabilities in Cloud-Deployments für elastische Ressourcen-Anpassung\n• Multi-Site Deployment für geografisch verteilte Organisationen\n\n💾 Storage und Datenmanagement-Anforderungen:\n• Hot Storage für Real-time Queries und aktuelle Datenanalyse\n• Warm Storage für regelmäßig abgerufene historische Daten\n• Cold Storage für Langzeit-Archivierung und Compliance-Anforderungen\n• Komprimierung und Deduplizierung für optimierte Storage-Effizienz\n• Backup und Disaster Recovery Strategien für Datenschutz und Verfügbarkeit\n\n🔗 Integration und Konnektivitäts-Anforderungen:\n• Native Konnektoren für alle relevanten Log-Quellen und Sicherheitstools\n• API-Verfügbarkeit für Custom Integrationen und Workflow-Automatisierung\n• Protokoll-Unterstützung für Syslog, SNMP, REST APIs und proprietäre Formate\n• Agenten-basierte und agenten-lose Datensammlung für verschiedene Umgebungen\n• Cloud-Integration für SaaS-Anwendungen und Cloud-Infrastrukturen\n\n🛡️ Sicherheits- und Compliance-Features:\n• Encryption für Data in Transit und Data at Rest\n• Role-based Access Control für granulare Berechtigungsverwaltung\n• Audit Trails für alle System-Aktivitäten und Konfigurationsänderungen\n• Compliance-Templates für verschiedene regulatorische Standards\n• Data Loss Prevention für den Schutz sensibler Informationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie bewertet man die Integrationsfähigkeiten und Interoperabilität verschiedener SIEM Software Lösungen?',
        answer: "Die Integrationsfähigkeiten einer SIEM Software sind entscheidend für den operativen Erfolg und die Wertschöpfung der Lösung. Eine SIEM Plattform, die sich nicht nahtlos in die bestehende IT- und Sicherheitslandschaft integrieren lässt, kann ihre volle Wirksamkeit nicht entfalten und führt zu Datensilos und operativen Ineffizienzen.\n\n🔌 Native Konnektoren und Out-of-the-Box Integrationen:\n• Umfassende Bibliothek vorkonfigurierter Konnektoren für gängige Sicherheitstools und IT-Systeme\n• Cloud-native Integrationen für AWS, Azure, Google Cloud und andere Cloud-Plattformen\n• Enterprise-Anwendungs-Konnektoren für ERP, CRM und Business-kritische Systeme\n• Netzwerk-Equipment Integration für Firewalls, Switches, Router und Wireless-Infrastrukturen\n• Endpoint-Security Integration für Antivirus, EDR und Mobile Device Management\n\n🔧 API-Capabilities und Custom Integration-Möglichkeiten:\n• RESTful APIs für bidirektionale Datenintegration und Workflow-Automatisierung\n• GraphQL Support für flexible und effiziente Datenabfragen\n• Webhook-Unterstützung für Event-driven Integrationen und Real-time Notifications\n• SDK-Verfügbarkeit für die Entwicklung custom Konnektoren und Erweiterungen\n• API-Dokumentation und Developer-Support für Integration-Projekte\n\n📡 Protokoll-Unterstützung und Datenformat-Kompatibilität:\n• Syslog-Unterstützung in verschiedenen RFC-Standards und Vendor-spezifischen Formaten\n• SNMP-Integration für Netzwerk-Monitoring und Infrastructure-Management\n• JSON, XML und CSV Parsing für strukturierte und semi-strukturierte Daten\n• Binary Log Format Support für spezielle Anwendungen und Legacy-Systeme\n• Real-time Streaming Protocols für High-Volume Data Ingestion\n\n🔄 SOAR und Orchestration-Integration:\n• Native SOAR-Plattform Integration für Security Orchestration und Automated Response\n• Playbook-Integration für standardisierte Incident Response Workflows\n• Case Management System Konnektivität für Ticket-Management und Tracking\n• Threat Intelligence Platform Integration für IOC-Management und Enrichment\n• ITSM-Integration für Service Management und Change Control Prozesse\n\n🌐 Multi-Vendor Ecosystem und Interoperabilität:\n• Vendor-agnostische Datenmodelle für konsistente Integration verschiedener Tools\n• Standards-Compliance für STIX/TAXII, CEF, LEEF und andere Industry-Standards\n• Federation-Capabilities für Multi-SIEM Umgebungen und Hybrid-Architekturen\n• Cross-Platform Compatibility für heterogene IT-Umgebungen\n• Migration-Tools für den Wechsel zwischen verschiedenen SIEM-Plattformen\n\n🎯 Integration-Assessment und Validierung:\n• Proof-of-Concept Tests für kritische Integrationen mit Ihren spezifischen Systemen\n• Performance-Testing der Integrations-Layer unter realistischen Lastbedingungen\n• Data Quality Assessment für Vollständigkeit und Konsistenz integrierter Daten\n• Latenz-Messung für Real-time Integrationen und kritische Datenflüsse\n• Fehlerbehandlung und Resilience-Testing für robuste Integration-Architekturen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Usability und User Experience bei der SIEM Software Auswahl und wie bewertet man diese Faktoren?',
        answer: "Usability und User Experience sind oft unterschätzte, aber kritische Erfolgsfaktoren bei der SIEM Software Auswahl. Eine technisch leistungsfähige SIEM Lösung kann ihr volles Potenzial nur entfalten, wenn sie von den Security Analysten effizient und intuitiv bedient werden kann. Schlechte Usability führt zu längeren Trainingszeiten, höheren Fehlerquoten und reduzierter Produktivität.\n\n🎨 Interface Design und Benutzerfreundlichkeit:\n• Intuitive Navigation und logische Informationsarchitektur für effiziente Workflows\n• Responsive Design für verschiedene Bildschirmgrößen und mobile Zugriffe\n• Customizable Dashboards für rollenspezifische Informationsdarstellung\n• Dark Mode und Light Mode Optionen für verschiedene Arbeitsumgebungen\n• Accessibility Features für Benutzer mit besonderen Bedürfnissen\n\n📊 Dashboard und Visualisierung-Capabilities:\n• Real-time Dashboards mit automatischen Refresh-Funktionen und Live-Updates\n• Interaktive Visualisierungen für Drill-Down Analysen und explorative Datenuntersuchung\n• Customizable Widgets für personalisierte Informationsdarstellung\n• Executive Dashboards mit High-Level KPIs und Business-relevanten Metriken\n• Alerting-Integration direkt in Dashboard-Ansichten für sofortige Reaktionsmöglichkeiten\n\n🔍 Search und Query-Interface:\n• Intuitive Search-Syntax mit Auto-Complete und Syntax-Highlighting\n• Natural Language Query Support für weniger technische Benutzer\n• Saved Searches und Query-Templates für wiederkehrende Analysen\n• Advanced Filtering und Faceted Search für präzise Datenexploration\n• Query Performance Optimization mit Execution Plan Anzeige\n\n👥 Multi-User und Role-Based Experience:\n• Rollenbasierte Benutzeroberflächen mit angepassten Funktionalitäten\n• Collaborative Features für Team-basierte Incident Investigation\n• User Preference Management für personalisierte Arbeitsumgebungen\n• Multi-Tenancy Support für verschiedene Organisationseinheiten\n• Single Sign-On Integration für nahtlose Authentifizierung\n\n📱 Mobile und Remote Access Capabilities:\n• Native Mobile Apps für iOS und Android mit vollständiger Funktionalität\n• Progressive Web App Support für plattformübergreifende mobile Nutzung\n• Offline-Capabilities für kritische Funktionen ohne Internetverbindung\n• Push Notifications für kritische Alerts und Incident Updates\n• Touch-optimierte Interfaces für Tablet und Smartphone-Nutzung\n\n🎓 Learning Curve und Training-Anforderungen:\n• Onboarding-Prozess und Getting Started Guides für neue Benutzer\n• Contextual Help und In-App Guidance für komplexe Funktionen\n• Training-Materialien und Dokumentation in verschiedenen Formaten\n• Community-Support und User Forums für Peer-to-Peer Learning\n• Certification-Programme für Advanced User Skills\n\n⚡ Performance und Responsiveness:\n• Page Load Times und Application Responsiveness unter verschiedenen Lastbedingungen\n• Caching-Strategien für häufig abgerufene Daten und Dashboards\n• Progressive Loading für große Datenmengen und komplexe Visualisierungen\n• Background Processing für zeitaufwändige Operationen\n• Error Handling und User Feedback für System-Probleme und Wartungsarbeiten"
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
