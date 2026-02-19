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
    console.log('Updating Was ist ein SIEM-System page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-ein-siem-system' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-ein-siem-system" not found')
    }
    
    // Create new FAQs for SIEM implementation and architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Architektur-Modelle gibt es für SIEM-Systeme und wie wählt man das richtige für sein Unternehmen aus?',
        answer: "Die Wahl der richtigen SIEM-Architektur ist entscheidend für den langfristigen Erfolg der Sicherheitsüberwachung. Verschiedene Architektur-Modelle bieten unterschiedliche Vorteile und eignen sich für verschiedene Unternehmensgrößen, Compliance-Anforderungen und technische Gegebenheiten. Eine durchdachte Architektur-Entscheidung berücksichtigt sowohl aktuelle als auch zukünftige Anforderungen.\n\n🏢 On-Premises SIEM-Architektur:\n• Vollständige Kontrolle über Hardware, Software und Daten innerhalb der eigenen Infrastruktur\n• Optimale Performance durch dedizierte Ressourcen und lokale Datenverarbeitung\n• Maximale Anpassungsfähigkeit für spezifische Unternehmensanforderungen und Compliance-Vorgaben\n• Höhere Anfangsinvestitionen für Hardware, Lizenzen und spezialisiertes Personal\n• Eigene Verantwortung für Wartung, Updates, Backup und Disaster Recovery\n\n☁️ Cloud-basierte SIEM-Lösungen:\n• Schnelle Implementierung ohne umfangreiche Hardware-Investitionen\n• Automatische Skalierung basierend auf aktuellen Datenvolumen und Verarbeitungsanforderungen\n• Integrierte Hochverfügbarkeit und Disaster Recovery durch Cloud-Provider\n• Regelmäßige Updates und neue Features ohne eigenen Wartungsaufwand\n• Potenzielle Bedenken bezüglich Datenhoheit und Compliance in regulierten Branchen\n\n🔄 Hybrid SIEM-Architekturen:\n• Kombination aus On-Premises und Cloud-Komponenten für optimale Flexibilität\n• Kritische Daten bleiben lokal, während weniger sensible Daten in der Cloud verarbeitet werden\n• Möglichkeit zur schrittweisen Migration und Risikominimierung\n• Komplexere Verwaltung und Integration zwischen verschiedenen Umgebungen\n• Optimale Balance zwischen Kontrolle, Skalierbarkeit und Kosteneffizienz\n\n🏗️ Distributed SIEM-Architekturen:\n• Verteilte Sammlung und Verarbeitung für große, geografisch verteilte Organisationen\n• Lokale Vorverarbeitung reduziert Bandbreitenanforderungen und Latenz\n• Zentrale Korrelation und Reporting für einheitliche Sicherheitssicht\n• Erhöhte Komplexität bei Management und Synchronisation\n• Bessere Performance und Ausfallsicherheit durch Redundanz\n\n📊 Entscheidungskriterien für die Architektur-Wahl:\n• Datenvolumen und erwartetes Wachstum der zu überwachenden Infrastruktur\n• Compliance-Anforderungen und regulatorische Vorgaben für Datenverarbeitung und -speicherung\n• Verfügbare IT-Ressourcen und Expertise für Betrieb und Wartung\n• Budget für Anfangsinvestitionen und laufende Betriebskosten\n• Integration mit bestehenden Sicherheits- und IT-Management-Tools"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie plant und implementiert man ein SIEM-System erfolgreich und welche häufigen Fallstricke sollte man vermeiden?',
        answer: "Eine erfolgreiche SIEM-Implementierung erfordert eine strukturierte Herangehensweise, die technische, organisatorische und strategische Aspekte gleichermaßen berücksichtigt. Viele SIEM-Projekte scheitern nicht an der Technologie, sondern an unzureichender Planung, unrealistischen Erwartungen oder mangelnder organisatorischer Vorbereitung.\n\n📋 Strategische Planungsphase:\n• Klare Definition von Geschäftszielen und Erfolgsmetriken für das SIEM-Projekt\n• Umfassende Bestandsaufnahme der aktuellen IT-Infrastruktur und Sicherheitstools\n• Identifikation kritischer Assets und Priorisierung der zu überwachenden Systeme\n• Realistische Zeitplanung mit ausreichenden Puffern für unvorhergesehene Herausforderungen\n• Stakeholder-Alignment und Sicherstellung des Management-Commitments\n\n🔍 Requirements Engineering und Use Case Definition:\n• Detaillierte Analyse der Compliance-Anforderungen und regulatorischen Vorgaben\n• Entwicklung spezifischer Use Cases basierend auf Bedrohungsmodellierung und Risikobewertung\n• Definition von Service Level Agreements und Performance-Erwartungen\n• Berücksichtigung zukünftiger Anforderungen und Skalierungsszenarien\n• Integration mit bestehenden Incident Response und Security Operations Prozessen\n\n🛠️ Technische Implementierungsstrategie:\n• Phased Rollout beginnend mit kritischen Systemen und schrittweise Erweiterung\n• Proof of Concept mit repräsentativen Datenquellen zur Validierung der Lösung\n• Sorgfältige Planung der Netzwerkintegration und Bandbreitenanforderungen\n• Implementierung robuster Backup und Disaster Recovery Mechanismen\n• Umfassende Dokumentation aller Konfigurationen und Prozesse\n\n⚠️ Häufige Fallstricke und deren Vermeidung:\n• Unterschätzung des Datenvolumens und unzureichende Kapazitätsplanung führen zu Performance-Problemen\n• Mangelnde Datenqualität durch unvollständige oder inkonsistente Log-Konfiguration\n• Übermäßige Fokussierung auf Technologie ohne ausreichende Berücksichtigung von Prozessen und Personal\n• Unrealistische Erwartungen an sofortige Ergebnisse ohne angemessene Tuning-Phase\n• Vernachlässigung der Change Management Aspekte und Widerstand der Benutzer\n\n👥 Organisatorische Erfolgsfaktoren:\n• Aufbau eines kompetenten SIEM-Teams mit angemessenen Fähigkeiten und Ressourcen\n• Etablierung klarer Rollen und Verantwortlichkeiten für SIEM-Operations\n• Kontinuierliche Schulung und Weiterbildung des Security-Personals\n• Regelmäßige Review und Optimierung der SIEM-Konfiguration und Prozesse\n• Messung und Kommunikation des SIEM-Werts an das Management und Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Integration und Interoperabilität ist zwischen SIEM und anderen Sicherheitstools erforderlich?',
        answer: "Die Integration von SIEM-Systemen in die bestehende Sicherheitslandschaft ist entscheidend für eine effektive und koordinierte Cybersecurity-Strategie. Moderne Sicherheitsarchitekturen bestehen aus verschiedenen spezialisierten Tools, die nahtlos zusammenarbeiten müssen, um maximale Sicherheitswirksamkeit zu erzielen und Silos zu vermeiden.\n\n🛡️ Integration mit Endpoint Security Lösungen:\n• Sammlung detaillierter Endpoint-Logs von Antivirus, EDR und Endpoint Protection Plattformen\n• Korrelation von Endpoint-Events mit Netzwerk- und Server-Aktivitäten für ganzheitliche Bedrohungserkennung\n• Automatische Enrichment von SIEM-Alerts mit Endpoint-Kontext wie Prozessinformationen und Dateihashes\n• Bidirektionale Integration für automatisierte Response-Aktionen wie Quarantäne oder Isolation\n• Threat Intelligence Sharing zwischen SIEM und Endpoint-Tools für verbesserte Detection\n\n🌐 Netzwerk-Security-Integration:\n• Einbindung von Firewall-Logs, IDS/IPS-Alerts und Network Traffic Analysis für umfassende Netzwerksicht\n• Integration mit Network Access Control Systemen für Benutzer- und Geräte-Kontext\n• Korrelation von Netzwerk-Anomalien mit Host-basierten Events\n• Automatisierte Firewall-Regel-Updates basierend auf SIEM-Erkenntnissen\n• Integration mit DNS-Security-Tools für erweiterte Threat Detection\n\n🔐 Identity und Access Management Integration:\n• Sammlung von Authentifizierungs- und Autorisierungs-Events aus Active Directory, LDAP und IAM-Systemen\n• Korrelation von Anmeldeversuchen mit anderen Sicherheitsereignissen\n• Integration mit Privileged Access Management für Überwachung administrativer Aktivitäten\n• Automatische Benutzerkontext-Enrichment für bessere Incident-Analyse\n• Single Sign-On Integration für SIEM-Zugriff und Benutzerfreundlichkeit\n\n🤖 SOAR und Orchestration Integration:\n• Automatisierte Incident Response durch Integration mit Security Orchestration Plattformen\n• Playbook-basierte Response-Aktionen basierend auf SIEM-Alert-Klassifikation\n• Bidirektionale Kommunikation für Status-Updates und Feedback-Loops\n• Integration mit Ticketing-Systemen für Incident-Tracking und -Management\n• Workflow-Automatisierung für repetitive Security-Aufgaben\n\n📊 Threat Intelligence und Vulnerability Management:\n• Integration externer Threat Intelligence Feeds für kontextualisierte Bedrohungsbewertung\n• Korrelation von Vulnerability Scan-Ergebnissen mit aktuellen Bedrohungen\n• Automatische IOC-Updates und Blacklist-Management\n• Integration mit Threat Hunting Plattformen für proaktive Bedrohungssuche\n• Vulnerability Prioritization basierend auf aktueller Bedrohungslandschaft\n\n🔧 API-basierte Integration und Standards:\n• RESTful APIs für flexible Integration mit verschiedenen Security-Tools\n• STIX/TAXII Standards für Threat Intelligence Sharing\n• CEF und LEEF Formate für standardisierte Log-Übertragung\n• MITRE ATT&CK Framework Integration für strukturierte Bedrohungsanalyse\n• OpenAPI Spezifikationen für einfache Drittanbieter-Integration"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie dimensioniert und skaliert man SIEM-Infrastrukturen für wachsende Datenmengen und Anforderungen?',
        answer: "Die richtige Dimensionierung und Skalierung von SIEM-Infrastrukturen ist entscheidend für langfristige Performance und Kosteneffizienz. Moderne Unternehmen generieren exponentiell wachsende Datenmengen, und SIEM-Systeme müssen in der Lage sein, diese Herausforderung zu bewältigen, ohne dabei Performance oder Funktionalität zu beeinträchtigen.\n\n📊 Kapazitätsplanung und Sizing:\n• Detaillierte Analyse aktueller Log-Volumina aus allen relevanten Quellen\n• Projektion zukünftigen Wachstums basierend auf Geschäftsplänen und IT-Expansion\n• Berücksichtigung von Spitzenlasten und saisonalen Schwankungen\n• Planung für Retention-Anforderungen und historische Datenanalyse\n• Dimensionierung von Compute-, Storage- und Netzwerk-Ressourcen\n\n⚡ Horizontale Skalierungsstrategien:\n• Cluster-basierte Architekturen für verteilte Datenverarbeitung und Load Distribution\n• Microservices-Ansätze für granulare Skalierung einzelner SIEM-Komponenten\n• Container-basierte Deployments für flexible Ressourcenallokation\n• Auto-Scaling Mechanismen für dynamische Anpassung an schwankende Lasten\n• Geographic Distribution für globale Organisationen mit lokalen Datenverarbeitungsanforderungen\n\n💾 Storage-Optimierung und Tiered Architecture:\n• Hot-Warm-Cold Storage Strategien für kosteneffiziente Langzeitspeicherung\n• Intelligente Datenarchivierung basierend auf Zugriffshäufigkeit und Compliance-Anforderungen\n• Komprimierung und Deduplizierung für Speicherplatz-Optimierung\n• SSD-basierte Storage für kritische Real-time Analysen\n• Cloud-Storage Integration für praktisch unbegrenzte Skalierung\n\n🔄 Performance-Optimierung und Monitoring:\n• Kontinuierliches Monitoring von System-Performance und Ressourcenverbrauch\n• Proaktive Identifikation von Bottlenecks und Performance-Problemen\n• Query-Optimierung für effiziente Datenabfragen und Reporting\n• Indexing-Strategien für schnelle Suchoperationen\n• Caching-Mechanismen für häufig abgerufene Daten\n\n🏗️ Architektur-Patterns für Skalierbarkeit:\n• Event-driven Architectures für asynchrone Datenverarbeitung\n• Stream Processing für Real-time Analytics bei hohen Datenvolumen\n• Data Lake Integration für Big Data Analytics und Machine Learning\n• Edge Computing für lokale Vorverarbeitung und Bandbreiten-Optimierung\n• Hybrid Cloud Strategien für flexible Kapazitätserweiterung\n\n📈 Kostenoptimierung bei Skalierung:\n• Right-Sizing von Infrastruktur-Komponenten basierend auf tatsächlicher Nutzung\n• Reserved Instance Strategien für vorhersagbare Workloads\n• Spot Instance Nutzung für nicht-kritische Batch-Verarbeitung\n• Lifecycle Management für automatische Datenarchivierung und -löschung\n• Multi-Cloud Strategien für Kostenoptimierung und Vendor Lock-in Vermeidung"
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
