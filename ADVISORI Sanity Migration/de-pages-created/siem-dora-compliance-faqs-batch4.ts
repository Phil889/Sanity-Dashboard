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
    console.log('Updating SIEM DORA Compliance page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-dora-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-dora-compliance" not found')
    }
    
    // Create new FAQs for SIEM DORA Compliance specialized topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche spezifischen Anforderungen stellt DORA an die Datenqualität und -integrität in SIEM-Systemen und wie werden diese gewährleistet?',
        answer: "DORA stellt strenge Anforderungen an die Datenqualität und -integrität in SIEM-Systemen, da diese die Grundlage für zuverlässige Sicherheitsüberwachung und regulatorische Berichterstattung bilden. Die Gewährleistung hoher Datenqualität erfordert eine systematische Herangehensweise, die technische Controls, Prozess-Governance und kontinuierliche Überwachung umfasst.\n\n🔍 DORA-spezifische Datenqualitäts-Standards:\n• Vollständigkeit aller sicherheitsrelevanten Events aus kritischen IKT-Systemen mit lückenloser Erfassung und Dokumentation von Datenquellen\n• Accuracy und Konsistenz von Log-Daten durch standardisierte Parsing-Regeln und Normalisierungs-Prozesse\n• Timeliness von Security Event Processing mit definierten Latenz-Schwellenwerten für verschiedene Incident-Kategorien\n• Eindeutige Identifikation und Korrelation von Events durch konsistente Timestamping und Event-ID-Management\n• Strukturierte Kategorisierung von Security Events entsprechend DORA-spezifischer Taxonomien und Klassifikationsschemata\n\n🛡️ Datenintegritäts-Mechanismen und Controls:\n• Implementierung kryptographischer Hash-Funktionen zur Gewährleistung der Unveränderlichkeit historischer Security Events\n• Etablierung von Chain-of-Custody-Protokollen für alle SIEM-Daten mit vollständiger Nachverfolgbarkeit von Datenmodifikationen\n• Integration von Digital Signatures für kritische Security Reports und Compliance-Dokumentation\n• Implementierung von Access Controls und Segregation of Duties für SIEM-Datenmanagement-Funktionen\n• Regelmäßige Integrity Checks und Validation Procedures zur Identifikation potenzieller Datenkorruption oder -manipulation\n\n📊 Automated Data Quality Monitoring:\n• Kontinuierliche Überwachung von Data Quality Metrics einschließlich Completeness Ratios, Accuracy Scores und Timeliness Indicators\n• Automatisierte Alerting bei Data Quality Threshold-Verletzungen mit sofortiger Eskalation an relevante Teams\n• Implementation von Data Profiling und Anomaly Detection zur Identifikation ungewöhnlicher Datenpatterns\n• Regelmäßige Data Quality Assessments mit Trend-Analysen und Improvement-Tracking\n• Integration von Data Lineage Tracking zur Nachverfolgung von Datenflüssen und Transformations-Prozessen\n\n🔄 Governance und Continuous Improvement:\n• Etablierung von Data Governance Committees mit spezifischer Verantwortung für SIEM-Datenqualität unter DORA-Gesichtspunkten\n• Entwicklung standardisierter Data Quality Policies und Procedures mit regelmäßigen Reviews und Updates\n• Implementation von Data Quality Training Programmen für SIEM-Operatoren und Security Analysten\n• Kontinuierliche Verbesserung von Data Collection und Processing-Mechanismen basierend auf Quality-Metriken\n• Integration von Data Quality Considerations in SIEM-Vendor-Evaluations und Technology-Entscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie werden SIEM-Systeme unter DORA für die Überwachung von Outsourcing und Cloud-Services konfiguriert und welche besonderen Compliance-Aspekte sind zu beachten?',
        answer: "Die Konfiguration von SIEM-Systemen für die Überwachung von Outsourcing und Cloud-Services unter DORA erfordert eine erweiterte Monitoring-Strategie, die über traditionelle Perimeter-basierte Sicherheitsüberwachung hinausgeht. Diese Konfiguration muss sowohl die technischen Herausforderungen verteilter Infrastrukturen als auch die komplexen Compliance-Anforderungen für kritische IKT-Drittanbieter berücksichtigen.\n\n☁️ Extended Monitoring Architecture für Cloud und Outsourcing:\n• Integration von Cloud-nativen Logging-Services und APIs zur umfassenden Erfassung von Security Events aus externen Infrastrukturen\n• Implementierung von Hybrid-SIEM-Architekturen die On-Premises und Cloud-basierte Security Monitoring nahtlos verbinden\n• Entwicklung spezialisierter Connectors für verschiedene Cloud-Provider und Outsourcing-Partner mit standardisierten Event-Formaten\n• Etablierung sicherer Datenübertragungskanäle für Security Event Streaming zwischen verschiedenen Umgebungen\n• Integration von Container und Serverless Monitoring Capabilities für moderne Cloud-Architekturen\n\n🔍 Third-Party Risk Monitoring und Compliance:\n• Kontinuierliche Überwachung der Security Posture kritischer IKT-Drittanbieter durch automatisierte Risk Scoring und Threat Intelligence Integration\n• Implementation von SLA-Monitoring für Outsourcing-Partner mit automatisierten Alerts bei Compliance-Verletzungen\n• Entwicklung spezialisierter Detection Rules für Third-Party-spezifische Bedrohungsszenarien und Incident-Patterns\n• Integration von Vendor Security Assessments und Audit-Ergebnissen in SIEM-basierte Risk Dashboards\n• Automatisierte Überwachung von Third-Party Access Patterns und Privileged Account Activities\n\n📋 Regulatory Compliance und Reporting Integration:\n• Entwicklung DORA-spezifischer Reporting-Templates für Third-Party-bezogene Security Incidents und Compliance-Violations\n• Integration von Outsourcing-Register-Daten in SIEM-Korrelations-Engines zur kontextualisierten Event-Bewertung\n• Automatisierte Generierung von Third-Party Risk Reports für regulatorische Berichterstattung und Management-Oversight\n• Implementation von Cross-Border Data Flow Monitoring zur Gewährleistung der Compliance mit Datenschutzbestimmungen\n• Etablierung von Incident Attribution Mechanisms zur Identifikation Third-Party-verursachter Security Events\n\n🛡️ Security Controls und Access Management:\n• Implementation von Zero-Trust-Prinzipien für Third-Party-Zugriffe mit kontinuierlicher Authentifizierung und Autorisierung\n• Entwicklung granularer Access Controls für verschiedene Outsourcing-Szenarien und Service-Level\n• Integration von Privileged Access Management Systemen für Third-Party-Administratoren und Service-Provider\n• Kontinuierliche Überwachung von Data Exfiltration Risks und Insider Threat Indicators bei Outsourcing-Partnern\n• Implementation von Encryption und Data Loss Prevention Controls für Third-Party-Datenübertragungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Rolle spielt Künstliche Intelligenz und Machine Learning in DORA-konformen SIEM-Systemen und welche regulatorischen Überlegungen sind dabei relevant?',
        answer: "Künstliche Intelligenz und Machine Learning spielen eine zunehmend wichtige Rolle in DORA-konformen SIEM-Systemen, bringen jedoch spezifische regulatorische Überlegungen mit sich, die sorgfältig adressiert werden müssen. Die Integration von KI/ML-Technologien muss sowohl die Vorteile für erweiterte Threat Detection als auch die Anforderungen an Transparenz, Nachvollziehbarkeit und Governance unter DORA berücksichtigen.\n\n🤖 KI/ML-Integration in DORA-konforme SIEM-Systeme:\n• Implementierung von Supervised Learning Algorithmen für verbesserte Anomalie-Detection mit spezifischem Fokus auf finanzspezifische Bedrohungsszenarien\n• Entwicklung von Unsupervised Learning Capabilities zur Identifikation unbekannter Attack Patterns und Zero-Day-Threats\n• Integration von Natural Language Processing für automatisierte Analyse von Threat Intelligence Reports und Security Advisories\n• Implementation von Behavioral Analytics zur Erkennung von Insider Threats und Advanced Persistent Threats\n• Entwicklung von Predictive Analytics für proaktive Risk Assessment und Threat Forecasting\n\n⚖️ Regulatorische Compliance und AI Governance:\n• Etablierung von AI Governance Frameworks die DORA-Anforderungen mit emerging AI-Regulierungen wie dem EU AI Act verknüpfen\n• Implementation von Explainable AI Mechanismen zur Gewährleistung der Nachvollziehbarkeit von ML-basierten Security Decisions\n• Entwicklung von Model Validation und Testing Procedures zur kontinuierlichen Bewertung der AI/ML-Performance\n• Integration von Bias Detection und Fairness Monitoring zur Gewährleistung ethischer AI-Anwendungen\n• Etablierung von Human-in-the-Loop Processes für kritische Security Decisions basierend auf AI/ML-Empfehlungen\n\n🔍 Transparency und Auditability Requirements:\n• Umfassende Dokumentation aller AI/ML-Modelle einschließlich Training Data, Feature Engineering und Model Architecture\n• Implementation von Model Lineage Tracking zur Nachverfolgung von AI/ML-Entwicklungs- und Deployment-Prozessen\n• Entwicklung von Audit-Trails für alle AI/ML-basierten Security Decisions mit vollständiger Nachvollziehbarkeit\n• Integration von Model Performance Monitoring mit kontinuierlicher Bewertung der Accuracy und Reliability\n• Etablierung von Model Versioning und Rollback Capabilities für kritische AI/ML-Komponenten\n\n🛡️ Risk Management und Operational Resilience:\n• Entwicklung von AI/ML-spezifischen Risk Assessments mit Fokus auf Model Drift, Adversarial Attacks und Data Poisoning\n• Implementation von Robust AI Mechanisms zur Gewährleistung der Resilienz gegen AI-spezifische Bedrohungen\n• Etablierung von Fallback-Mechanismen für Situationen mit AI/ML-System-Ausfällen oder -Degradation\n• Integration von AI/ML-Performance-Metriken in übergeordnete DORA-Compliance-Dashboards\n• Kontinuierliche Bewertung der AI/ML-Auswirkungen auf die digitale operationelle Resilienz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie werden SIEM-Systeme für die Unterstützung von DORA-Stresstests und Resilienz-Assessments konfiguriert und welche Metriken sind dabei entscheidend?',
        answer: "Die Konfiguration von SIEM-Systemen zur Unterstützung von DORA-Stresstests und Resilienz-Assessments erfordert eine strategische Herangehensweise, die sowohl die technischen Monitoring-Capabilities als auch die analytischen Funktionen für umfassende Resilienz-Bewertungen umfasst. Diese Konfiguration muss verschiedene Stress-Szenarien abdecken und aussagekräftige Metriken für die Bewertung der digitalen operationellen Resilienz liefern.\n\n🎯 Stresstest-spezifische SIEM-Konfiguration:\n• Entwicklung spezialisierter Monitoring-Dashboards für verschiedene Stresstest-Szenarien einschließlich Cyber-Attacks, System-Ausfälle und Operational Disruptions\n• Implementation von Scenario-based Detection Rules die spezifische Stresstest-Bedingungen identifizieren und dokumentieren\n• Integration von Load Testing und Performance Monitoring Capabilities zur Bewertung der SIEM-Resilienz unter Stress-Bedingungen\n• Entwicklung automatisierter Data Collection Mechanisms für Stresstest-relevante Metriken und Performance-Indikatoren\n• Etablierung von Real-time Alerting für kritische Threshold-Verletzungen während Stresstest-Durchführung\n\n📊 Kritische Resilienz-Metriken und KPIs:\n• Recovery Time Objective Compliance Tracking zur Messung der Wiederherstellungszeiten nach simulierten Incidents\n• Business Continuity Impact Assessment Metriken zur Bewertung der Auswirkungen von Stress-Szenarien auf kritische Geschäftsprozesse\n• System Availability und Performance Degradation Metrics während verschiedener Stress-Bedingungen\n• Incident Response Effectiveness Indicators einschließlich Mean Time to Detection und Mean Time to Resolution\n• Cross-System Dependency Mapping und Failure Cascade Analysis zur Identifikation von Schwachstellen\n\n🔄 Automated Stress Testing Integration:\n• Integration von Chaos Engineering Tools zur automatisierten Durchführung von Resilienz-Tests\n• Implementation von Synthetic Transaction Monitoring zur kontinuierlichen Bewertung der System-Performance\n• Entwicklung von Automated Failover Testing Capabilities mit dokumentierter Impact-Bewertung\n• Integration von Red Team Exercise Monitoring zur Bewertung der Detection und Response Capabilities\n• Etablierung von Continuous Resilience Testing mit regelmäßigen Mini-Stresstests\n\n📋 Comprehensive Reporting und Analysis:\n• Entwicklung standardisierter Stresstest-Reports die DORA-spezifische Anforderungen erfüllen und regulatorische Transparenz gewährleisten\n• Implementation von Trend Analysis Capabilities zur Bewertung der Resilienz-Entwicklung über Zeit\n• Integration von Comparative Analysis Tools zur Bewertung der Performance gegen Industry Benchmarks\n• Entwicklung von Executive Dashboards für Management-Oversight über Stresstest-Ergebnisse und Resilienz-Status\n• Etablierung von Lessons Learned Documentation mit automatisierter Integration in Improvement-Pläne"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
