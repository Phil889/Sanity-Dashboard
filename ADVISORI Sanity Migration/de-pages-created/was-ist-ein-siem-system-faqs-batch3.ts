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
    console.log('Updating Was ist ein SIEM-System page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-ein-siem-system' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-ein-siem-system" not found')
    }
    
    // Create new FAQs for SIEM operations and management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie etabliert man effektive SIEM-Operations und welche Rollen und Verantwortlichkeiten sind erforderlich?',
        answer: "Effektive SIEM-Operations erfordern eine durchdachte organisatorische Struktur mit klar definierten Rollen, Prozessen und Verantwortlichkeiten. Der Erfolg eines SIEM-Systems hängt nicht nur von der Technologie ab, sondern maßgeblich von den Menschen und Prozessen, die es betreiben. Eine professionelle SIEM-Operations-Organisation kombiniert technische Expertise mit strukturierten Arbeitsabläufen.\n\n👥 SIEM-Team-Struktur und Rollen:\n• SIEM-Administrator für die technische Verwaltung, Konfiguration und Wartung der SIEM-Plattform\n• Security Analysten für die Überwachung, Analyse und Bewertung von Sicherheitsereignissen\n• Incident Response Spezialisten für die Koordination und Durchführung von Incident-Response-Aktivitäten\n• Threat Hunter für proaktive Bedrohungssuche und erweiterte Analyse komplexer Angriffsmuster\n• SIEM-Architekt für strategische Planung, Use Case Development und kontinuierliche Optimierung\n\n🔄 Operative Prozesse und Workflows:\n• Strukturierte Schichtpläne für kontinuierliche Überwachung und schnelle Reaktionszeiten\n• Eskalationsprozeduren mit klaren Kriterien für verschiedene Incident-Schweregrade\n• Standardisierte Playbooks für häufige Incident-Typen und Response-Aktivitäten\n• Regelmäßige Briefings und Übergaben zwischen Schichten für Kontinuität\n• Dokumentation aller Aktivitäten für Audit-Zwecke und kontinuierliche Verbesserung\n\n📊 Performance Management und KPIs:\n• Mean Time to Detection (MTTD) für die Bewertung der Erkennungsgeschwindigkeit\n• Mean Time to Response (MTTR) für die Messung der Reaktionszeiten\n• False Positive Rate zur Bewertung der Regel-Qualität und Analyst-Effizienz\n• Alert Volume Trends für Kapazitätsplanung und Workload-Management\n• Incident Resolution Rate für die Bewertung der Team-Effektivität\n\n🎓 Kompetenzentwicklung und Training:\n• Kontinuierliche Weiterbildung in neuen Bedrohungsarten und Angriffstechniken\n• Hands-on Training mit SIEM-Tools und Analysemethoden\n• Zertifizierungsprogramme für Security-Analysten und SIEM-Spezialisten\n• Cross-Training zwischen verschiedenen Rollen für Flexibilität und Redundanz\n• Regelmäßige Tabletop-Übungen und Incident-Response-Simulationen\n\n🔧 Technische Operations-Aspekte:\n• Proaktive Systemüberwachung und Wartung der SIEM-Infrastruktur\n• Regelmäßige Backup-Verifikation und Disaster Recovery Tests\n• Performance-Tuning und Kapazitätsmanagement\n• Patch-Management und Security-Updates\n• Integration und Wartung von Log-Quellen und Datenfeeds"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie optimiert man SIEM-Performance und reduziert False Positives für effiziente Security Operations?',
        answer: "Die Optimierung von SIEM-Performance und die Reduzierung von False Positives sind kritische Erfolgsfaktoren für effektive Security Operations. Unoptimierte SIEM-Systeme können Security-Teams mit irrelevanten Alerts überlasten und gleichzeitig echte Bedrohungen übersehen. Eine systematische Herangehensweise an Tuning und Optimierung ist essentiell für nachhaltigen SIEM-Erfolg.\n\n🎯 Strategisches Alert-Tuning:\n• Baseline-Etablierung für normale Systemaktivitäten und Benutzerverhalten\n• Kontinuierliche Analyse von Alert-Patterns und Feedback-Integration von Security-Analysten\n• Risiko-basierte Priorisierung von Alerts basierend auf Asset-Kritikalität und Bedrohungskontext\n• Zeitbasierte Anpassungen für unterschiedliche Geschäftszeiten und saisonale Variationen\n• Regelmäßige Review und Deaktivierung veralteter oder ineffektiver Regeln\n\n🔍 Erweiterte Korrelationstechniken:\n• Multi-Stage-Korrelation für die Reduzierung isolierter False Positives\n• Contextual Enrichment mit Asset-Informationen, Benutzerrollen und Geschäftsprozessen\n• Threshold-Anpassung basierend auf historischen Daten und statistischen Analysen\n• Whitelist-Management für bekannte und genehmigte Aktivitäten\n• Suppression-Regeln für temporäre oder geplante Systemaktivitäten\n\n🤖 Machine Learning Integration:\n• Behavioral Analytics für die Erkennung subtiler Anomalien ohne starre Regeln\n• Adaptive Thresholds, die sich automatisch an sich ändernde Umgebungen anpassen\n• Clustering-Algorithmen für die Gruppierung ähnlicher Events und Reduzierung von Duplikaten\n• Predictive Analytics für die Vorhersage und Prävention von False Positive Trends\n• Feedback-Learning-Systeme, die aus Analyst-Bewertungen kontinuierlich lernen\n\n⚡ Performance-Optimierung:\n• Query-Optimierung für schnellere Datenabfragen und Real-time Analytics\n• Indexing-Strategien für häufig abgefragte Datenfelder\n• Data Partitioning für effiziente Speicherung und Retrieval\n• Caching-Mechanismen für wiederkehrende Abfragen und Berichte\n• Load Balancing für gleichmäßige Ressourcenverteilung\n\n📊 Kontinuierliches Monitoring und Metriken:\n• Alert Volume Tracking mit Trend-Analyse und Kapazitätsplanung\n• False Positive Rate Monitoring mit regelmäßiger Bewertung und Verbesserung\n• Response Time Metrics für die Bewertung der System-Performance\n• Resource Utilization Monitoring für proaktive Skalierung\n• Quality Metrics für die Bewertung der Alert-Relevanz und Analyst-Zufriedenheit\n\n🔄 Iterative Verbesserungsprozesse:\n• Regelmäßige Tuning-Zyklen mit strukturierter Bewertung und Anpassung\n• Analyst-Feedback-Integration für praxisnahe Optimierung\n• A/B Testing verschiedener Regel-Konfigurationen\n• Benchmarking gegen Industry Standards und Best Practices\n• Dokumentation aller Änderungen für Nachvollziehbarkeit und Rollback-Möglichkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Incident Response Integration und Workflow-Automatisierung sind in SIEM-Umgebungen möglich?',
        answer: "Die Integration von Incident Response Prozessen und Workflow-Automatisierung in SIEM-Umgebungen ist entscheidend für schnelle und effektive Reaktionen auf Sicherheitsvorfälle. Moderne SIEM-Systeme fungieren nicht nur als Detection-Plattformen, sondern als zentrale Orchestrierungstools, die automatisierte Response-Aktivitäten koordinieren und menschliche Analysten bei komplexen Entscheidungen unterstützen.\n\n🚨 Automatisierte Incident Classification:\n• Intelligente Kategorisierung von Alerts basierend auf Bedrohungstyp, Schweregrad und betroffenen Assets\n• Automatische Zuweisung von Incidents an spezialisierte Teams oder Analysten\n• Risk Scoring basierend auf kombinierten Faktoren wie Asset-Kritikalität und Angriffsschwere\n• Prioritätssetzung für optimale Ressourcenallokation bei gleichzeitigen Incidents\n• Eskalations-Trigger für kritische Vorfälle, die sofortige Aufmerksamkeit erfordern\n\n🔄 SOAR-Integration und Orchestrierung:\n• Nahtlose Integration mit Security Orchestration, Automation and Response Plattformen\n• Playbook-basierte Automatisierung für standardisierte Response-Aktivitäten\n• Conditional Logic für adaptive Workflows basierend auf Incident-Charakteristika\n• Human-in-the-Loop Prozesse für kritische Entscheidungen und Genehmigungen\n• Cross-Platform-Orchestrierung verschiedener Security-Tools und Systeme\n\n🛡️ Automatisierte Containment-Aktionen:\n• Automatische Isolation kompromittierter Systeme durch Netzwerk-Segmentierung\n• Account-Deaktivierung bei verdächtigen Authentifizierungs-Anomalien\n• Firewall-Regel-Updates für die Blockierung malicious IP-Adressen\n• DNS-Sinkholing für die Unterbrechung Command-and-Control-Kommunikation\n• Endpoint-Quarantäne durch Integration mit EDR-Lösungen\n\n📋 Workflow-Management und Ticketing:\n• Automatische Ticket-Erstellung in ITSM-Systemen mit vollständigen Incident-Details\n• Status-Tracking und Progress-Updates für alle Stakeholder\n• SLA-Monitoring und automatische Eskalation bei Zeitüberschreitungen\n• Collaboration-Tools Integration für Team-Kommunikation und Koordination\n• Audit-Trail-Generierung für Compliance und Post-Incident-Analysen\n\n🔍 Forensische Datensammlung:\n• Automatische Preservation kritischer Logs und Artefakte\n• Memory Dumps und System Snapshots für detaillierte Analyse\n• Network Packet Capture für Traffic-Analyse\n• Timeline-Generierung für chronologische Incident-Rekonstruktion\n• Chain-of-Custody-Dokumentation für rechtliche Verwertbarkeit\n\n📊 Reporting und Kommunikation:\n• Automatische Incident-Reports für Management und Stakeholder\n• Real-time Status-Dashboards für Incident-Tracking\n• Regulatory Notification Workflows für Compliance-Anforderungen\n• Customer Communication Templates für externe Stakeholder\n• Lessons Learned Dokumentation für kontinuierliche Verbesserung\n\n🔧 Integration mit externen Systemen:\n• Threat Intelligence Platforms für Kontext-Enrichment\n• Vulnerability Management Systeme für Risk Assessment\n• Asset Management Databases für Impact-Bewertung\n• Identity Management Systeme für User Context\n• Business Applications für Geschäftskontext und Impact-Analyse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie misst und bewertet man die Effektivität eines SIEM-Systems und welche Metriken sind entscheidend?',
        answer: "Die Messung und Bewertung der SIEM-Effektivität ist essentiell für kontinuierliche Verbesserung und ROI-Nachweis. Effektive SIEM-Metriken gehen über technische Performance-Indikatoren hinaus und umfassen geschäftsorientierte Kennzahlen, die den tatsächlichen Sicherheitswert demonstrieren. Eine ausgewogene Metrik-Strategie berücksichtigt sowohl quantitative als auch qualitative Aspekte der SIEM-Performance.\n\n⏱️ Detection und Response Metriken:\n• Mean Time to Detection (MTTD) für die Bewertung der Erkennungsgeschwindigkeit verschiedener Bedrohungstypen\n• Mean Time to Response (MTTR) für die Messung der Reaktionszeiten von Alert-Generierung bis zur ersten Response-Aktion\n• Mean Time to Resolution (MTTR) für die vollständige Incident-Abwicklung und Wiederherstellung\n• Detection Coverage Rate für die Bewertung der Abdeckung verschiedener Angriffsvektoren\n• True Positive Rate zur Messung der Genauigkeit der Bedrohungserkennung\n\n📊 Operational Excellence Indikatoren:\n• Alert Volume Trends und deren Entwicklung über Zeit\n• False Positive Rate mit Aufschlüsselung nach Regel-Kategorien und Datenquellen\n• Analyst Productivity Metrics wie bearbeitete Alerts pro Analyst und Schicht\n• System Availability und Uptime für kritische SIEM-Komponenten\n• Data Ingestion Rates und Processing Latency für Performance-Bewertung\n\n🎯 Security Effectiveness Kennzahlen:\n• Prevented Incidents durch proaktive SIEM-Detection und Response\n• Threat Hunting Success Rate bei der Identifikation fortgeschrittener Bedrohungen\n• Compliance Adherence Rate für regulatorische Anforderungen\n• Security Posture Improvement durch SIEM-basierte Erkenntnisse\n• Risk Reduction Metrics basierend auf identifizierten und behobenen Schwachstellen\n\n💰 Business Value und ROI Metriken:\n• Cost Avoidance durch verhinderte Sicherheitsvorfälle\n• Operational Cost Savings durch Automatisierung und Effizienzsteigerungen\n• Compliance Cost Reduction durch automatisierte Reporting und Dokumentation\n• Resource Optimization durch verbesserte Incident-Priorisierung\n• Business Continuity Metrics für minimierte Ausfallzeiten\n\n📈 Continuous Improvement Indikatoren:\n• Rule Effectiveness Scores für die Bewertung einzelner Detection-Regeln\n• Tuning Success Rate bei der Reduzierung von False Positives\n• Training Effectiveness durch verbesserte Analyst-Performance\n• Technology Integration Success bei neuen Tool-Integrationen\n• Process Maturity Advancement durch strukturierte Verbesserungsinitiativen\n\n🔍 Qualitative Bewertungskriterien:\n• Analyst Satisfaction und Feedback zur SIEM-Usability\n• Stakeholder Confidence in Security Operations\n• Audit Findings und Compliance Assessment Results\n• Peer Benchmarking gegen Industry Standards\n• Executive Dashboard Effectiveness für Management-Reporting\n\n📋 Reporting und Visualization:\n• Executive Dashboards mit geschäftsrelevanten Sicherheitsmetriken\n• Operational Dashboards für tägliche SOC-Aktivitäten\n• Trend Analysis Reports für strategische Planung\n• Compliance Reports für regulatorische Anforderungen\n• ROI Calculations und Business Case Updates für Budget-Rechtfertigung"
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
