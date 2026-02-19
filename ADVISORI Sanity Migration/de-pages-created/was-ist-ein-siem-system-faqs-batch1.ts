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
    console.log('Updating Was ist ein SIEM-System page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-ein-siem-system' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-ein-siem-system" not found')
    }
    
    // Create new FAQs for SIEM fundamentals and core concepts
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was genau ist ein SIEM-System und wie unterscheidet es sich von herkömmlichen Monitoring-Tools?',
        answer: "Ein Security Information and Event Management (SIEM) System ist eine zentrale Sicherheitsplattform, die weit über traditionelle Monitoring-Tools hinausgeht. Während herkömmliche Überwachungssysteme meist isoliert arbeiten und nur spezifische Metriken erfassen, fungiert ein SIEM als intelligente Korrelations- und Analyseplattform, die Sicherheitsdaten aus der gesamten IT-Infrastruktur sammelt, normalisiert und in einen aussagekräftigen Kontext bringt.\n\n🔍 Zentrale Datensammlung und Normalisierung:\n• SIEM-Systeme aggregieren Logs und Events aus allen relevanten Quellen wie Firewalls, Intrusion Detection Systemen, Servern, Anwendungen, Datenbanken und Netzwerkgeräten\n• Intelligente Normalisierung unterschiedlicher Log-Formate in ein einheitliches Schema für konsistente Analyse\n• Real-time Datenverarbeitung mit der Fähigkeit, Millionen von Events pro Sekunde zu verarbeiten\n• Langzeit-Speicherung für forensische Analysen und Compliance-Anforderungen\n• Automatische Erkennung neuer Log-Quellen und dynamische Integration in die Überwachung\n\n🧠 Intelligente Korrelation und Analyse:\n• Fortschrittliche Korrelationsregeln, die scheinbar unzusammenhängende Events zu bedeutsamen Sicherheitsvorfällen verknüpfen\n• Machine Learning Algorithmen zur Erkennung von Anomalien und unbekannten Bedrohungsmustern\n• Behavioral Analytics zur Identifikation verdächtiger Nutzer- und Systemaktivitäten\n• Threat Intelligence Integration für kontextualisierte Bedrohungsbewertung\n• Automatische Priorisierung von Alerts basierend auf Risikobewertung und Business Impact\n\n📊 Umfassende Visualisierung und Reporting:\n• Intuitive Dashboards mit Real-time Sicherheitsstatus und Trend-Analysen\n• Anpassbare Berichte für verschiedene Stakeholder von technischen Teams bis zum Management\n• Forensische Analysewerkzeuge für detaillierte Incident Investigation\n• Compliance-Reporting für regulatorische Anforderungen und Audit-Zwecke\n• Executive Summaries mit geschäftsrelevanten Sicherheitsmetriken\n\n🚨 Proaktive Bedrohungserkennung:\n• Echtzeit-Alerting bei kritischen Sicherheitsereignissen mit automatischer Eskalation\n• Predictive Analytics zur Vorhersage potenzieller Sicherheitsrisiken\n• Integration mit Threat Hunting Aktivitäten für proaktive Bedrohungssuche\n• Automatisierte Response-Capabilities für schnelle Incident-Eindämmung\n• Kontinuierliche Verbesserung der Detection-Fähigkeiten durch Feedback-Loops"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Kernkomponenten und Funktionalitäten sind für ein effektives SIEM-System unverzichtbar?',
        answer: "Ein effektives SIEM-System besteht aus mehreren integrierten Komponenten, die zusammenarbeiten, um eine umfassende Sicherheitsüberwachung zu gewährleisten. Diese Komponenten müssen nahtlos integriert sein und sowohl technische als auch organisatorische Anforderungen erfüllen, um maximale Sicherheitswirksamkeit zu erzielen.\n\n📥 Log Collection und Data Ingestion:\n• Universelle Log-Sammlung mit Unterstützung für alle gängigen Log-Formate und Protokolle\n• Agenten-basierte und agenten-lose Datensammlung für maximale Flexibilität\n• Sichere und verschlüsselte Datenübertragung zum Schutz sensibler Informationen\n• Hochverfügbare Sammlung mit Failover-Mechanismen und Pufferung bei Netzwerkausfällen\n• Automatische Erkennung und Integration neuer Datenquellen\n\n🔄 Event Processing und Normalisierung:\n• Echtzeit-Verarbeitung großer Datenmengen mit skalierbarer Architektur\n• Intelligente Parsing-Engines für die Extraktion relevanter Informationen aus rohen Log-Daten\n• Normalisierung unterschiedlicher Datenformate in ein einheitliches Schema\n• Enrichment von Events mit zusätzlichen Kontextinformationen wie Geolocation oder Asset-Informationen\n• Deduplizierung und Filterung zur Reduzierung von Datenrauschen\n\n🧮 Correlation Engine und Analytics:\n• Regelbasierte Korrelation für bekannte Angriffsmuster und Compliance-Verletzungen\n• Statistische Analyse zur Erkennung von Anomalien und Abweichungen vom Normalverhalten\n• Machine Learning Algorithmen für die Identifikation neuer und unbekannter Bedrohungen\n• User and Entity Behavior Analytics (UEBA) für die Erkennung von Insider-Bedrohungen\n• Threat Intelligence Integration für kontextualisierte Bedrohungsbewertung\n\n💾 Data Storage und Management:\n• Hochperformante Speicherlösungen für Real-time Queries und historische Analysen\n• Skalierbare Architektur für wachsende Datenmengen und Retention-Anforderungen\n• Komprimierung und Archivierung für kosteneffiziente Langzeitspeicherung\n• Backup und Disaster Recovery Mechanismen für Datenschutz und Verfügbarkeit\n• Granulare Zugriffskontrolle und Verschlüsselung für Datensicherheit\n\n🎛️ Management Interface und Dashboards:\n• Intuitive Benutzeroberfläche für effiziente Bedienung durch Security Analysten\n• Anpassbare Dashboards für verschiedene Rollen und Verantwortlichkeiten\n• Real-time Monitoring mit automatischen Refresh-Funktionen\n• Mobile Unterstützung für Incident Response auch außerhalb des Büros\n• Integration mit bestehenden IT-Service-Management-Tools"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie funktioniert die Datensammlung und Log-Aggregation in einem SIEM-System und welche Herausforderungen gibt es dabei?',
        answer: "Die Datensammlung und Log-Aggregation bilden das Fundament jedes SIEM-Systems und stellen gleichzeitig eine der komplexesten technischen Herausforderungen dar. Ein effektives SIEM muss in der Lage sein, Daten aus heterogenen Quellen zu sammeln, zu normalisieren und in Echtzeit zu verarbeiten, während gleichzeitig Integrität, Verfügbarkeit und Performance gewährleistet werden.\n\n🌐 Vielfältige Datenquellen und Protokolle:\n• Integration verschiedenster Log-Quellen wie Betriebssysteme, Anwendungen, Netzwerkgeräte, Sicherheitstools und Cloud-Services\n• Unterstützung multipler Übertragungsprotokolle wie Syslog, SNMP, WMI, REST APIs und proprietäre Formate\n• Agenten-basierte Sammlung für detaillierte Systemeinblicke und erweiterte Funktionalitäten\n• Agenten-lose Sammlung für Systeme, auf denen keine Software installiert werden kann\n• Cloud-native Integration für moderne Infrastrukturen und SaaS-Anwendungen\n\n⚡ Real-time Processing und Skalierung:\n• Hochperformante Datenverarbeitung mit der Fähigkeit, Millionen von Events pro Sekunde zu verarbeiten\n• Horizontale Skalierung zur Bewältigung wachsender Datenmengen ohne Performance-Einbußen\n• Load Balancing und Clustering für Hochverfügbarkeit und Ausfallsicherheit\n• Intelligente Priorisierung kritischer Events für sofortige Verarbeitung\n• Adaptive Ressourcenallokation basierend auf aktueller Last und Systemanforderungen\n\n🔧 Normalisierung und Parsing-Herausforderungen:\n• Komplexe Parsing-Regeln für die Extraktion relevanter Informationen aus unterschiedlichen Log-Formaten\n• Umgang mit inkonsistenten Zeitstempeln und Zeitzonen-Problemen\n• Behandlung von Multi-Line-Logs und strukturierten Datenformaten\n• Automatische Erkennung und Anpassung an sich ändernde Log-Formate\n• Fehlerbehandlung bei unvollständigen oder korrupten Log-Einträgen\n\n🛡️ Sicherheit und Integrität der Datensammlung:\n• Verschlüsselte Übertragung aller Log-Daten zum Schutz vor Manipulation und Abhörung\n• Authentifizierung und Autorisierung von Log-Quellen zur Verhinderung von Dateninjektionen\n• Integritätsprüfungen zur Erkennung von Datenverlusten oder Manipulationen\n• Sichere Speicherung mit Zugriffskontrolle und Audit-Trails\n• Compliance mit Datenschutzbestimmungen und regulatorischen Anforderungen\n\n📊 Performance und Ressourcen-Management:\n• Intelligente Filterung und Sampling zur Reduzierung irrelevanter Daten\n• Komprimierung und Deduplizierung für effiziente Speichernutzung\n• Monitoring der Sammlung-Performance mit Alerting bei Problemen\n• Kapazitätsplanung für zukünftiges Wachstum und Spitzenlasten\n• Optimierung der Netzwerkbandbreite durch intelligente Datenübertragung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielen Korrelationsregeln und Machine Learning in modernen SIEM-Systemen?',
        answer: "Korrelationsregeln und Machine Learning bilden das analytische Herzstück moderner SIEM-Systeme und transformieren rohe Log-Daten in verwertbare Sicherheitserkenntnisse. Diese Technologien arbeiten komplementär zusammen, um sowohl bekannte Bedrohungsmuster zu erkennen als auch neue, bisher unbekannte Angriffe zu identifizieren.\n\n🎯 Regelbasierte Korrelation für bekannte Bedrohungen:\n• Vordefinierte Regeln für die Erkennung etablierter Angriffsmuster wie Brute-Force-Attacken, Malware-Signaturen und Compliance-Verletzungen\n• Komplexe Multi-Stage-Korrelation zur Identifikation fortgeschrittener Angriffsketten über mehrere Systeme und Zeiträume hinweg\n• Zeitbasierte Korrelation für die Erkennung von Angriffsmustern, die sich über längere Zeiträume entwickeln\n• Threshold-basierte Regeln für die Identifikation abnormaler Aktivitätslevel\n• Anpassbare Regel-Templates für branchenspezifische Bedrohungsszenarien\n\n🤖 Machine Learning für Anomalie-Erkennung:\n• Unsupervised Learning Algorithmen zur Etablierung von Baseline-Verhalten für Benutzer, Systeme und Netzwerkaktivitäten\n• Supervised Learning für die Klassifikation von Events basierend auf historischen Incident-Daten\n• Deep Learning Modelle für die Analyse komplexer Muster in großen Datenmengen\n• Reinforcement Learning für die kontinuierliche Verbesserung der Detection-Genauigkeit\n• Ensemble-Methoden zur Kombination verschiedener ML-Ansätze für robuste Ergebnisse\n\n📈 Behavioral Analytics und UEBA:\n• User Behavior Analytics zur Erkennung von Insider-Bedrohungen und kompromittierten Accounts\n• Entity Behavior Analytics für die Überwachung von Systemen, Anwendungen und Netzwerkgeräten\n• Peer Group Analysis zur Identifikation von Abweichungen innerhalb ähnlicher Benutzergruppen\n• Risk Scoring basierend auf kombinierten Verhaltensmustern und Kontextinformationen\n• Adaptive Modelle, die sich an sich ändernde Organisationsstrukturen und Arbeitsweisen anpassen\n\n🔄 Kontinuierliche Optimierung und Tuning:\n• Feedback-Loops zur Verbesserung der Regel-Genauigkeit basierend auf Analyst-Bewertungen\n• Automatisches Tuning von ML-Modellen zur Reduzierung von False Positives\n• A/B Testing verschiedener Korrelationsansätze zur Optimierung der Detection-Performance\n• Threat Intelligence Integration zur Aktualisierung von Regeln und Modellen\n• Performance-Monitoring zur Sicherstellung effizienter Verarbeitung auch bei hohen Datenvolumen\n\n🎛️ Orchestrierung und Integration:\n• Intelligente Priorisierung von Alerts basierend auf Confidence-Scores und Business Impact\n• Integration mit SOAR-Plattformen für automatisierte Response-Aktivitäten\n• Contextual Enrichment von Alerts mit zusätzlichen Informationen für bessere Entscheidungsfindung\n• Eskalations-Workflows basierend auf Severity und organisatorischen Richtlinien\n• Reporting und Metriken zur Bewertung der Effektivität verschiedener Korrelationsansätze"
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
