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
    console.log('Updating DORA SIEM Monitoring page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-siem-monitoring' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-siem-monitoring" not found')
    }
    
    // Create new FAQs for SIEM fundamentals and DORA requirements
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche SIEM-Capabilities sind unter DORA verpflichtend und wie unterscheiden sie sich von herkömmlichen Security Monitoring Ansätzen?',
        answer: "DORA definiert spezifische Anforderungen an Security Information and Event Management Systeme, die weit über traditionelle Monitoring-Ansätze hinausgehen. Die Regulierung verlangt eine ganzheitliche, risikoorientierte Herangehensweise an die Sicherheitsüberwachung, die sowohl technische als auch organisatorische Aspekte umfasst und speziell auf die Bedürfnisse des Finanzsektors zugeschnitten ist.\n\n🎯 DORA-spezifische SIEM-Anforderungen:\n• Kontinuierliche Echtzeit-Überwachung aller kritischen IKT-Systeme und -Prozesse mit automatisierter Anomalie-Erkennung\n• Umfassende Log-Aggregation und -Korrelation aus allen relevanten Quellen einschließlich Anwendungen, Infrastruktur, Netzwerk und Sicherheitssystemen\n• Automatisierte Incident Detection mit präziser Klassifizierung und Priorisierung basierend auf Geschäftsauswirkungen\n• Integration mit DORA-konformen Incident Response und Reporting Workflows\n• Forensische Analysefähigkeiten für detaillierte Post-Incident-Untersuchungen und regulatorische Berichterstattung\n\n🔍 Erweiterte Detection und Analytics:\n• Implementierung fortschrittlicher Threat Detection Mechanismen einschließlich Machine Learning und Behavioral Analytics\n• Entwicklung DORA-spezifischer Use Cases und Detection Rules für finanzspezifische Bedrohungsszenarien\n• Korrelation von Security Events mit Business Context und operationellen Risiken\n• Proaktive Threat Hunting Capabilities zur Identifikation fortgeschrittener persistenter Bedrohungen\n• Integration von Threat Intelligence für kontextualisierte Bedrohungsbewertung\n\n📊 Compliance und Reporting Integration:\n• Automatisierte Generierung DORA-konformer Incident Reports mit allen erforderlichen Details und Zeitstempeln\n• Umfassende Audit Trail Funktionalität für regulatorische Prüfungen und Compliance Nachweise\n• Dashboard und Reporting Capabilities für Executive Management und Aufsichtsbehörden\n• Integration mit Risk Management Systemen für ganzheitliche Risikobewertung\n• Dokumentation aller Security Events und Response Aktivitäten für regulatorische Transparenz\n\n🛡️ Operational Resilience Focus:\n• Monitoring der digitalen operationellen Resilienz mit spezifischen KPIs und Metriken\n• Überwachung kritischer Geschäftsprozesse und deren IKT-Abhängigkeiten\n• Bewertung der Auswirkungen von Security Incidents auf die Geschäftskontinuität\n• Integration mit Business Continuity und Disaster Recovery Systemen\n• Kontinuierliche Bewertung der Wirksamkeit von Sicherheitsmaßnahmen und Controls"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie integriert sich SIEM in das DORA IKT-Risikomanagement-Framework und welche Governance-Strukturen sind erforderlich?',
        answer: "Die Integration von SIEM in das DORA IKT-Risikomanagement-Framework erfordert eine strategische Herangehensweise, die technische Capabilities mit organisatorischen Governance-Strukturen verbindet. SIEM fungiert dabei als zentrales Nervensystem für die Überwachung und das Management digitaler operationeller Risiken und muss nahtlos in bestehende Risikomanagement-Prozesse eingebettet werden.\n\n🏗️ Framework-Integration und Architektur:\n• SIEM als integraler Bestandteil des IKT-Risikomanagement-Frameworks mit direkter Anbindung an Risk Assessment und Mitigation Prozesse\n• Etablierung klarer Schnittstellen zwischen SIEM und anderen Risikomanagement-Systemen wie GRC-Plattformen und Operational Risk Systemen\n• Definition von SIEM-basierten Risk Indicators und deren Integration in das übergeordnete Risk Dashboard\n• Automatisierte Eskalation von Security Events basierend auf definierten Risk Thresholds und Business Impact Kriterien\n• Kontinuierliche Bewertung und Anpassung der SIEM-Konfiguration basierend auf sich ändernden Risikoprofilen\n\n👥 Governance-Strukturen und Verantwortlichkeiten:\n• Etablierung eines SIEM Governance Committees mit Vertretern aus IT, Security, Risk Management und Business Units\n• Definition klarer Rollen und Verantwortlichkeiten für SIEM Operations, einschließlich SOC-Personal, Security Analysten und Incident Response Teams\n• Implementierung von SIEM-spezifischen Policies und Procedures die mit DORA-Anforderungen und organisatorischen Standards aligned sind\n• Regelmäßige Review und Approval Prozesse für SIEM-Konfigurationsänderungen und neue Detection Rules\n• Etablierung von Performance Management und KPI-Tracking für SIEM-Effektivität\n\n📋 Prozess-Integration und Workflows:\n• Nahtlose Integration von SIEM-Alerts in bestehende Incident Management und Response Workflows\n• Automatisierte Erstellung von Risk Assessments basierend auf SIEM-Erkenntnissen und Threat Intelligence\n• Integration mit Change Management Prozessen zur Bewertung von Sicherheitsauswirkungen bei Systemänderungen\n• Verbindung zu Business Continuity Planning für Impact Assessment und Recovery Priorisierung\n• Einbindung in reguläre Risk Reporting Zyklen und Management Dashboards\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Implementierung von Feedback-Loops zwischen SIEM Operations und strategischem Risikomanagement\n• Regelmäßige Bewertung der SIEM-Effektivität durch Risk-based Metriken und Outcome-orientierte KPIs\n• Anpassung von Detection Capabilities basierend auf sich entwickelnden Bedrohungslandschaften und Geschäftsanforderungen\n• Integration von Lessons Learned aus Security Incidents in SIEM-Tuning und Rule Development\n• Kontinuierliche Alignment mit regulatorischen Entwicklungen und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Herausforderungen entstehen bei der Integration bestehender Security Monitoring Infrastrukturen mit DORA-konformen SIEM-Anforderungen?',
        answer: "Die Integration bestehender Security Monitoring Infrastrukturen mit DORA-konformen SIEM-Anforderungen stellt Finanzinstitute vor komplexe technische und organisatorische Herausforderungen. Diese Transformation erfordert eine sorgfältige Balance zwischen der Nutzung vorhandener Investitionen und der Erfüllung neuer regulatorischer Anforderungen, während gleichzeitig die operative Kontinuität gewährleistet werden muss.\n\n🔧 Technische Integrations-Herausforderungen:\n• Legacy-Systeme und veraltete Security Tools müssen mit modernen SIEM-Plattformen integriert werden, oft ohne standardisierte APIs oder Datenformate\n• Heterogene Log-Formate und Datenstrukturen erfordern umfangreiche Normalisierung und Parsing-Regeln für einheitliche Analyse\n• Skalierbarkeits-Probleme bei der Aggregation großer Datenmengen aus verschiedenen Quellen ohne Performance-Einbußen\n• Netzwerk-Segmentierung und Sicherheitsrichtlinien können die Datensammlung und -übertragung zwischen Systemen einschränken\n• Komplexe Korrelationsregeln müssen entwickelt werden, um False Positives zu minimieren und relevante Threats zu identifizieren\n\n📊 Datenqualität und -konsistenz:\n• Inkonsistente Zeitstempel und Zeitzonen-Probleme erschweren die präzise Event-Korrelation und forensische Analyse\n• Unvollständige oder fehlende Log-Daten aus kritischen Systemen schaffen Blind Spots in der Sicherheitsüberwachung\n• Datenqualitätsprobleme wie duplizierte Events, fehlende Kontextinformationen oder inkorrekte Klassifizierungen\n• Herausforderungen bei der Retention und Archivierung großer Datenmengen unter Berücksichtigung von Compliance-Anforderungen\n• Schwierigkeiten bei der Korrelation von strukturierten und unstrukturierten Daten aus verschiedenen Quellen\n\n🏢 Organisatorische und Prozess-Herausforderungen:\n• Bestehende SOC-Prozesse und Workflows müssen an DORA-spezifische Anforderungen angepasst werden\n• Skill Gaps bei Security Analysten bezüglich DORA-Compliance und finanzspezifischer Bedrohungsszenarien\n• Widerstand gegen Veränderungen bei etablierten Teams und Prozessen\n• Koordination zwischen verschiedenen Abteilungen wie IT, Security, Risk Management und Compliance\n• Herausforderungen bei der Definition neuer KPIs und Metriken für DORA-konforme Sicherheitsüberwachung\n\n💰 Kosten und Ressourcen-Management:\n• Hohe Investitionskosten für neue SIEM-Technologien und Infrastruktur-Upgrades\n• Laufende Betriebskosten für erweiterte Monitoring-Capabilities und Datenverarbeitung\n• Personalkosten für Schulungen, neue Mitarbeiter und externe Beratung\n• Opportunity Costs durch Ressourcen-Umverteilung von anderen IT-Projekten\n• ROI-Rechtfertigung für SIEM-Investitionen gegenüber dem Management und Stakeholdern"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie werden SIEM-Governance und Oversight-Anforderungen unter DORA strukturiert und welche Rolle spielt das Management?',
        answer: "DORA verlangt eine robuste Governance-Struktur für SIEM-Systeme, die weit über traditionelle IT-Governance hinausgeht und eine direkte Verbindung zwischen technischen Security Operations und strategischem Management herstellt. Diese Governance-Anforderungen reflektieren die kritische Rolle von SIEM in der digitalen operationellen Resilienz und erfordern eine strukturierte Herangehensweise an Oversight, Accountability und kontinuierliche Verbesserung.\n\n👔 Management-Verantwortlichkeiten und Oversight:\n• Die Geschäftsleitung trägt die ultimative Verantwortung für die Wirksamkeit der SIEM-basierten Sicherheitsüberwachung und muss regelmäßige Berichte über SIEM-Performance und Incident-Trends erhalten\n• Aufsichtsrat und Board-Level Committees müssen über SIEM-Capabilities, Investitionen und strategische Entwicklungen informiert werden\n• Definition von SIEM-spezifischen Risk Appetite Statements und Toleranz-Schwellenwerten für verschiedene Arten von Security Events\n• Genehmigung von SIEM-Budgets, Technologie-Investitionen und strategischen Initiativen\n• Oversight über SIEM-bezogene Compliance-Aktivitäten und regulatorische Berichterstattung\n\n🏗️ Organisatorische Governance-Strukturen:\n• Etablierung eines SIEM Steering Committees mit Vertretern aus verschiedenen Geschäftsbereichen und Funktionen\n• Definition klarer Governance-Hierarchien mit eskalierenden Entscheidungsbefugnissen für verschiedene Arten von SIEM-bezogenen Entscheidungen\n• Implementierung von SIEM-spezifischen Policies, Standards und Procedures die regelmäßig überprüft und aktualisiert werden\n• Etablierung von Risk und Compliance Committees mit spezifischer SIEM-Oversight-Verantwortung\n• Integration von SIEM-Governance in bestehende IT-Governance und Risk-Management-Frameworks\n\n📊 Performance Management und Metriken:\n• Definition und Tracking von SIEM-spezifischen KPIs wie Mean Time to Detection, False Positive Rates und Incident Response Zeiten\n• Regelmäßige Bewertung der SIEM-Effektivität durch Risk-based Metriken und Business Impact Assessments\n• Implementierung von Balanced Scorecards für SIEM-Performance mit technischen und geschäftlichen Perspektiven\n• Benchmarking gegen Industry Standards und Best Practices für kontinuierliche Verbesserung\n• Quarterly und Annual Reviews der SIEM-Strategie und -Performance mit Management und Board\n\n🔍 Audit und Compliance Oversight:\n• Regelmäßige interne und externe Audits der SIEM-Systeme, -Prozesse und -Controls\n• Compliance-Monitoring für DORA-spezifische Anforderungen und andere relevante Regulierungen\n• Dokumentation und Nachweis der SIEM-Governance-Aktivitäten für regulatorische Prüfungen\n• Management von SIEM-bezogenen Audit-Findings und Corrective Action Plans\n• Kontinuierliche Bewertung der Angemessenheit von SIEM-Controls und Governance-Strukturen"
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
