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
    console.log('Updating SIEM DORA Compliance page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-dora-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-dora-compliance" not found')
    }
    
    // Create new FAQs for SIEM DORA Compliance fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen SIEM-Anforderungen definiert DORA für Finanzinstitute und wie unterscheiden sie sich von allgemeinen Cybersecurity-Standards?',
        answer: "DORA etabliert spezifische Anforderungen an SIEM-Systeme, die weit über herkömmliche Cybersecurity-Standards hinausgehen und speziell auf die Bedürfnisse des Finanzsektors zugeschnitten sind. Diese Anforderungen reflektieren die kritische Rolle von Finanzdienstleistern in der europäischen Wirtschaft und die Notwendigkeit einer robusten digitalen operationellen Resilienz.\n\n🎯 DORA-spezifische SIEM-Compliance-Anforderungen:\n• Kontinuierliche Echtzeit-Überwachung aller kritischen IKT-Systeme mit automatisierter Incident Detection und sofortiger Eskalation bei Anomalien\n• Umfassende Dokumentation und Audit-Trail-Funktionalität für alle Security Events mit vollständiger Nachverfolgbarkeit für regulatorische Prüfungen\n• Integration mit DORA-konformen Incident Response Workflows einschließlich automatisierter Berichterstattung an Aufsichtsbehörden\n• Spezifische Log-Retention-Anforderungen mit definierten Aufbewahrungszeiten für verschiedene Arten von Security Events und Compliance-Daten\n• Robuste Governance-Strukturen mit klaren Verantwortlichkeiten und Management-Oversight für SIEM-Operations\n\n🔍 Erweiterte Detection und Response Capabilities:\n• Implementierung fortschrittlicher Threat Detection Mechanismen mit Machine Learning und Behavioral Analytics für finanzspezifische Bedrohungsszenarien\n• Korrelation von Security Events mit Business Impact Assessment zur Priorisierung von Incidents basierend auf operationellen Risiken\n• Integration von Threat Intelligence mit Fokus auf finanzspezifische Bedrohungsakteure und Attack Patterns\n• Automatisierte Forensik-Capabilities für detaillierte Post-Incident-Analysen und regulatorische Berichterstattung\n• Proaktive Threat Hunting mit speziellem Fokus auf Advanced Persistent Threats gegen Finanzinstitute\n\n📊 Regulatorische Integration und Reporting:\n• Automatisierte Generierung DORA-konformer Incident Reports mit allen erforderlichen Details und Zeitstempeln für Aufsichtsbehörden\n• Integration mit Risk Management Systemen zur Bewertung der Auswirkungen von Security Incidents auf die Geschäftskontinuität\n• Umfassende Management-Dashboards für Executive Oversight und Board-Level Reporting über SIEM-Performance und Incident-Trends\n• Compliance-Monitoring-Capabilities zur kontinuierlichen Überwachung der Einhaltung DORA-spezifischer Anforderungen\n• Dokumentation aller SIEM-Konfigurationsänderungen und deren Auswirkungen auf die Compliance-Posture\n\n🛡️ Operational Resilience Focus:\n• Monitoring der digitalen operationellen Resilienz mit spezifischen KPIs und Metriken für Finanzdienstleistungen\n• Bewertung der Auswirkungen von Security Incidents auf kritische Geschäftsprozesse und Kundenservices\n• Integration mit Business Continuity Planning und Disaster Recovery Systemen für ganzheitliche Resilienz-Überwachung\n• Kontinuierliche Bewertung der Wirksamkeit von Sicherheitsmaßnahmen und deren Beitrag zur operationellen Stabilität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie müssen SIEM-Governance-Strukturen unter DORA organisiert werden und welche Management-Verantwortlichkeiten entstehen?',
        answer: "DORA verlangt eine robuste Governance-Struktur für SIEM-Systeme, die eine klare Verantwortlichkeitshierarchie vom operativen Level bis zur Geschäftsleitung etabliert. Diese Governance-Anforderungen reflektieren die strategische Bedeutung von SIEM für die digitale operationelle Resilienz und erfordern eine strukturierte Integration in bestehende Unternehmensführungs-Frameworks.\n\n👔 Geschäftsleitung und Board-Level Verantwortlichkeiten:\n• Die Geschäftsleitung trägt die ultimative Verantwortung für die Wirksamkeit der SIEM-basierten Sicherheitsüberwachung und muss regelmäßige Berichte über SIEM-Performance erhalten\n• Aufsichtsrat und Board-Level Committees müssen über SIEM-Strategien, Investitionen und kritische Incidents informiert und in Entscheidungsprozesse eingebunden werden\n• Definition von SIEM-spezifischen Risk Appetite Statements und Toleranz-Schwellenwerten für verschiedene Arten von Security Events\n• Genehmigung von SIEM-Budgets, Technologie-Investitionen und strategischen Initiativen mit direkter Auswirkung auf die digitale Resilienz\n• Oversight über SIEM-bezogene Compliance-Aktivitäten und Verantwortung für regulatorische Berichterstattung an Aufsichtsbehörden\n\n🏗️ Organisatorische Governance-Strukturen:\n• Etablierung eines SIEM Steering Committees mit Vertretern aus IT, Security, Risk Management, Compliance und relevanten Geschäftsbereichen\n• Definition klarer Governance-Hierarchien mit eskalierenden Entscheidungsbefugnissen für verschiedene Arten von SIEM-bezogenen Entscheidungen\n• Implementierung von SIEM-spezifischen Policies, Standards und Procedures die regelmäßig überprüft und an regulatorische Entwicklungen angepasst werden\n• Etablierung von Risk und Compliance Committees mit spezifischer SIEM-Oversight-Verantwortung und direkter Berichtslinie zur Geschäftsleitung\n• Integration von SIEM-Governance in bestehende IT-Governance und Enterprise Risk Management Frameworks\n\n📋 Operative Governance und Verantwortlichkeiten:\n• Definition klarer Rollen und Verantwortlichkeiten für SIEM Operations einschließlich SOC-Personal, Security Analysten und Incident Response Teams\n• Etablierung von SIEM-spezifischen Job Descriptions und Kompetenzanforderungen mit regelmäßigen Schulungs- und Zertifizierungsprogrammen\n• Implementierung von Change Management Prozessen für SIEM-Konfigurationsänderungen mit entsprechenden Approval-Workflows\n• Regelmäßige Review und Approval Prozesse für neue Detection Rules, Use Cases und Threat Intelligence Integration\n• Etablierung von Incident Escalation Procedures mit klaren Verantwortlichkeiten und Zeitvorgaben für verschiedene Incident-Kategorien\n\n🔄 Kontinuierliche Governance-Verbesserung:\n• Implementierung regelmäßiger Governance-Reviews zur Bewertung der Wirksamkeit von SIEM-Oversight-Strukturen\n• Etablierung von Feedback-Loops zwischen operativen SIEM-Teams und strategischem Management\n• Kontinuierliche Anpassung der Governance-Strukturen an sich ändernde regulatorische Anforderungen und Geschäftsanforderungen\n• Integration von Lessons Learned aus Security Incidents in Governance-Prozesse und -Strukturen\n• Benchmarking der SIEM-Governance gegen Industry Best Practices und regulatorische Erwartungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Herausforderungen entstehen bei der Implementierung DORA-konformer SIEM-Reporting und Documentation-Anforderungen?',
        answer: "Die Implementierung DORA-konformer SIEM-Reporting und Documentation-Anforderungen stellt Finanzinstitute vor komplexe technische und organisatorische Herausforderungen. Diese Anforderungen gehen weit über traditionelle Security Reporting hinaus und erfordern eine ganzheitliche Integration von technischen Capabilities, Prozess-Standardisierung und regulatorischer Compliance-Expertise.\n\n📊 Technische Reporting-Herausforderungen:\n• Automatisierte Generierung strukturierter DORA-konformer Reports erfordert komplexe Datenmodellierung und Template-Entwicklung für verschiedene Incident-Kategorien\n• Integration heterogener Datenquellen aus verschiedenen SIEM-Komponenten, Security Tools und Business-Systemen für umfassende Incident-Dokumentation\n• Real-time Reporting-Capabilities für kritische Incidents mit automatisierter Eskalation und Benachrichtigung relevanter Stakeholder\n• Skalierbare Reporting-Infrastruktur zur Bewältigung großer Datenmengen ohne Performance-Einbußen bei gleichzeitiger Gewährleistung der Datenqualität\n• Komplexe Korrelations- und Aggregations-Logik zur Erstellung aussagekräftiger Management-Reports und Executive Dashboards\n\n🗂️ Documentation und Audit-Trail-Komplexität:\n• Umfassende Dokumentation aller SIEM-Aktivitäten einschließlich Configuration Changes, Rule Updates und Analyst-Aktivitäten mit vollständiger Nachverfolgbarkeit\n• Strukturierte Incident-Dokumentation mit standardisierten Templates und Workflows zur Gewährleistung der Konsistenz und Vollständigkeit\n• Langfristige Archivierung und Retrieval-Capabilities für historische Security Events und Compliance-Daten unter Berücksichtigung von Retention-Anforderungen\n• Version Control und Change Management für alle SIEM-Dokumentation mit Approval-Workflows und Audit-Trails\n• Integration von Documentation-Workflows in operative SIEM-Prozesse ohne Beeinträchtigung der Response-Zeiten\n\n⚖️ Regulatorische Compliance-Herausforderungen:\n• Interpretation und Umsetzung sich entwickelnder DORA-Guidance und regulatorischer Erwartungen in konkrete SIEM-Reporting-Anforderungen\n• Mapping von SIEM-Events und -Metriken auf spezifische DORA-Compliance-Kriterien und Reporting-Kategorien\n• Gewährleistung der Konsistenz und Vergleichbarkeit von Reports über verschiedene Zeiträume und Incident-Kategorien hinweg\n• Balance zwischen detaillierter Dokumentation für Compliance-Zwecke und operationeller Effizienz bei der Report-Generierung\n• Vorbereitung auf regulatorische Prüfungen mit umfassender Dokumentation aller SIEM-Compliance-Aktivitäten\n\n🔄 Prozess-Integration und Workflow-Management:\n• Nahtlose Integration von Reporting-Workflows in bestehende Incident Response und Security Operations Prozesse\n• Automatisierung von Reporting-Triggern basierend auf Incident-Severity und Business Impact ohne manuelle Intervention\n• Koordination zwischen verschiedenen Teams und Abteilungen für umfassende Incident-Dokumentation und Cross-functional Reporting\n• Etablierung von Quality Assurance Prozessen für Report-Accuracy und Compliance-Konformität\n• Kontinuierliche Verbesserung von Reporting-Prozessen basierend auf Feedback und regulatorischen Entwicklungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie erfolgt die Integration von Third-Party SIEM-Anbietern in DORA-Compliance-Frameworks und welche Vendor-Management-Anforderungen entstehen?',
        answer: "Die Integration von Third-Party SIEM-Anbietern in DORA-Compliance-Frameworks erfordert eine strategische Herangehensweise an Vendor Management, die über traditionelle IT-Outsourcing hinausgeht. DORA stellt spezifische Anforderungen an die Überwachung und das Management kritischer IKT-Drittanbieter, die eine umfassende Due Diligence und kontinuierliche Oversight-Mechanismen erfordern.\n\n🔍 DORA-spezifische Vendor Assessment und Due Diligence:\n• Umfassende Bewertung der DORA-Compliance-Capabilities von SIEM-Anbietern einschließlich deren eigener Governance-Strukturen und Sicherheitsmaßnahmen\n• Detaillierte Analyse der Vendor-Infrastruktur und -Prozesse zur Gewährleistung der Erfüllung DORA-spezifischer Anforderungen an digitale operationelle Resilienz\n• Assessment der Vendor-Fähigkeiten zur Unterstützung regulatorischer Reporting-Anforderungen und Compliance-Dokumentation\n• Bewertung der Vendor-Stabilität und -Kontinuität zur Gewährleistung langfristiger Service-Verfügbarkeit für kritische SIEM-Funktionen\n• Prüfung der Vendor-Compliance mit relevanten Standards und Zertifizierungen sowie deren Alignment mit DORA-Anforderungen\n\n📋 Vertragsgestaltung und SLA-Definition:\n• Entwicklung DORA-spezifischer Vertragsklauseln die explizite Compliance-Verpflichtungen und Reporting-Anforderungen für SIEM-Anbieter definieren\n• Definition detaillierter Service Level Agreements mit spezifischen Metriken für SIEM-Performance, Availability und Response-Zeiten\n• Implementierung von Compliance-Monitoring-Klauseln die regelmäßige Audits und Assessments der Vendor-Performance ermöglichen\n• Etablierung von Incident-Management-Vereinbarungen mit klaren Eskalations-Procedures und Kommunikations-Protokollen\n• Integration von Right-to-Audit-Klauseln und Transparenz-Anforderungen für kontinuierliche Vendor-Oversight\n\n🔄 Kontinuierliche Vendor-Performance-Überwachung:\n• Implementierung regelmäßiger Performance-Reviews und Compliance-Assessments zur Bewertung der Vendor-Leistung gegen DORA-Kriterien\n• Etablierung von Key Performance Indicators und Metriken zur kontinuierlichen Überwachung der SIEM-Service-Qualität\n• Monitoring der Vendor-Compliance mit regulatorischen Anforderungen und proaktive Identifikation potenzieller Compliance-Risiken\n• Regelmäßige Business Continuity und Disaster Recovery Tests zur Gewährleistung der Vendor-Resilienz\n• Kontinuierliche Bewertung der Vendor-Roadmap und -Strategie zur Sicherstellung der langfristigen DORA-Compliance\n\n⚠️ Risk Management und Contingency Planning:\n• Entwicklung umfassender Risk Assessments für Third-Party SIEM-Dependencies mit Fokus auf operationelle und Compliance-Risiken\n• Implementierung von Contingency Plans und Exit-Strategien für kritische SIEM-Services zur Gewährleistung der Business Continuity\n• Etablierung von Multi-Vendor-Strategien zur Reduzierung von Concentration Risk und Single Points of Failure\n• Regelmäßige Stress-Tests und Scenario-Analysen zur Bewertung der Auswirkungen von Vendor-Ausfällen auf die DORA-Compliance\n• Integration von Vendor-Risk-Management in das übergeordnete Enterprise Risk Management Framework"
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
