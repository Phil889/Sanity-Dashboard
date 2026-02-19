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
    console.log('Updating DORA ISO 27001 Mapping page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-iso-27001-mapping' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-iso-27001-mapping" not found')
    }
    
    // Create new FAQs for implementation strategies and audit considerations
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie kann ich meine bestehenden ISO 27001 Audit-Prozesse für DORA-Compliance erweitern?',
        answer: "Die Erweiterung bestehender ISO 27001 Audit-Prozesse für DORA-Compliance bietet erhebliche Effizienzgewinne und ermöglicht eine integrierte Herangehensweise an beide Compliance-Bereiche. Eine strategische Audit-Integration reduziert Redundanzen, optimiert Ressourceneinsatz und schafft konsistente Bewertungsstandards.\n\n🔍 Audit-Scope-Erweiterung und Integration:\n• Erweitern Sie bestehende ISO 27001 Audit-Pläne um DORA-spezifische Prüfbereiche und Kontrollpunkte\n• Integrieren Sie DORA-Anforderungen in bestehende Audit-Checklisten und Bewertungskriterien\n• Entwickeln Sie kombinierte Audit-Methoden, die beide Standards gleichzeitig und effizient prüfen\n• Schaffen Sie einheitliche Evidence-Collection-Prozesse, die sowohl ISO 27001 als auch DORA-Nachweise erfassen\n• Etablieren Sie integrierte Sampling-Strategien, die repräsentative Prüfungen für beide Compliance-Bereiche gewährleisten\n\n📊 Erweiterte Prüfmethoden und -techniken:\n• Implementieren Sie DORA-spezifische Testing-Anforderungen wie Threat-Led Penetration Testing in bestehende Audit-Zyklen\n• Erweitern Sie Vulnerability-Assessments um kontinuierliche Threat-Intelligence und erweiterte Monitoring-Prüfungen\n• Integrieren Sie spezifische Drittanbieter-Audits und kritische Service-Provider-Bewertungen\n• Entwickeln Sie erweiterte Incident-Response-Testing-Verfahren, die DORA-spezifische Szenarien abdecken\n• Schaffen Sie integrierte Business-Continuity-Tests, die sowohl ISO 27001 als auch DORA-Resilienz-Anforderungen validieren\n\n📋 Dokumentation und Berichtswesen-Integration:\n• Erweitern Sie bestehende Audit-Berichtstrukturen um DORA-spezifische Findings und Empfehlungen\n• Entwickeln Sie integrierte Management-Reports, die beide Compliance-Bereiche in einer kohärenten Sicht darstellen\n• Schaffen Sie einheitliche Corrective-Action-Tracking-Systeme für beide Standards\n• Implementieren Sie kombinierte Risk-Rating-Systeme, die sowohl ISO 27001 als auch DORA-Risiken bewerten\n• Etablieren Sie integrierte Follow-up-Prozesse, die Remediation-Aktivitäten für beide Bereiche koordinieren\n\n🎯 Auditor-Qualifikation und Ressourcenoptimierung:\n• Erweitern Sie bestehende Auditor-Qualifikationen um DORA-spezifische Kenntnisse und Zertifizierungen\n• Entwickeln Sie integrierte Audit-Teams, die sowohl ISO 27001 als auch DORA-Expertise kombinieren\n• Schaffen Sie effiziente Audit-Scheduling-Strategien, die beide Compliance-Bereiche optimal abdecken\n• Implementieren Sie Cross-Training-Programme für Audit-Teams zur Maximierung der Flexibilität\n• Etablieren Sie Qualitätssicherungsprozesse, die sowohl ISO 27001 als auch DORA-Audit-Standards erfüllen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche technischen Tools und Systeme kann ich nutzen, um ISO 27001 und DORA-Compliance zu integrieren?',
        answer: "Die technische Integration von ISO 27001 und DORA-Compliance durch geeignete Tools und Systeme schafft erhebliche Effizienzgewinne und ermöglicht eine automatisierte, konsistente Überwachung beider Compliance-Bereiche. Eine strategische Tool-Integration reduziert manuelle Aufwände und verbessert die Qualität der Compliance-Überwachung.\n\n🛠️ Integrierte Governance, Risk und Compliance Plattformen:\n• Implementieren Sie umfassende GRC-Plattformen, die sowohl ISO 27001 als auch DORA-Anforderungen in einer einheitlichen Umgebung verwalten\n• Nutzen Sie Policy-Management-Systeme, die automatische Compliance-Mapping und Gap-Analyse für beide Standards bieten\n• Etablieren Sie integrierte Risk-Assessment-Tools, die einheitliche Risikobewertungen für beide Frameworks ermöglichen\n• Implementieren Sie Audit-Management-Systeme, die kombinierte Audit-Zyklen und Evidence-Collection unterstützen\n• Schaffen Sie einheitliche Dashboard-Lösungen, die KPIs und Metriken für beide Compliance-Bereiche visualisieren\n\n📊 Monitoring und Alerting-Systeme:\n• Erweitern Sie bestehende SIEM-Systeme um DORA-spezifische Use Cases und Alerting-Regeln\n• Implementieren Sie integrierte Log-Management-Lösungen, die sowohl ISO 27001 als auch DORA-Monitoring-Anforderungen erfüllen\n• Nutzen Sie Network-Monitoring-Tools, die kontinuierliche Überwachung kritischer IKT-Services und -Infrastrukturen ermöglichen\n• Etablieren Sie automatisierte Vulnerability-Scanning-Systeme mit erweiterten Threat-Intelligence-Integration\n• Schaffen Sie integrierte Incident-Response-Plattformen, die beide Standards in einheitlichen Workflows abbilden\n\n🔄 Automatisierung und Workflow-Integration:\n• Implementieren Sie Robotic Process Automation für repetitive Compliance-Aufgaben in beiden Bereichen\n• Nutzen Sie API-basierte Integrationen zwischen verschiedenen Compliance-Tools und -Systemen\n• Etablieren Sie automatisierte Reporting-Pipelines, die regelmäßige Compliance-Reports für beide Standards generieren\n• Schaffen Sie Workflow-Automation für Change-Management-Prozesse, die beide Compliance-Bereiche berücksichtigen\n• Implementieren Sie automatisierte Evidence-Collection und -Archivierung für beide Standards\n\n💾 Datenmanagement und Analytics:\n• Nutzen Sie Data-Lake-Architekturen für die zentrale Sammlung und Analyse von Compliance-Daten beider Standards\n• Implementieren Sie Business-Intelligence-Tools für erweiterte Analytics und Trend-Analyse\n• Etablieren Sie Master-Data-Management für einheitliche Datenqualität und -konsistenz\n• Schaffen Sie Predictive-Analytics-Capabilities für proaktive Compliance-Überwachung\n• Implementieren Sie Data-Governance-Frameworks, die sowohl ISO 27001 als auch DORA-Datenanforderungen erfüllen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestalte ich Change-Management-Prozesse, die sowohl ISO 27001 als auch DORA-Anforderungen berücksichtigen?',
        answer: "Die Entwicklung integrierter Change-Management-Prozesse für ISO 27001 und DORA erfordert eine strategische Herangehensweise, die beide Standards harmonisch verbindet und gleichzeitig die spezifischen Anforderungen jedes Frameworks erfüllt. Effektives Change-Management ist entscheidend für die Aufrechterhaltung der Compliance in beiden Bereichen.\n\n🔄 Integrierte Change-Governance und -Kontrolle:\n• Erweitern Sie bestehende Change-Advisory-Boards um DORA-spezifische Expertise und Bewertungskriterien\n• Entwickeln Sie einheitliche Change-Kategorisierung-Systeme, die sowohl ISO 27001 als auch DORA-Risikobewertungen berücksichtigen\n• Implementieren Sie integrierte Approval-Workflows, die beide Compliance-Bereiche in Entscheidungsprozessen einbeziehen\n• Schaffen Sie erweiterte Impact-Assessment-Verfahren, die spezifische DORA-Resilienz-Anforderungen bewerten\n• Etablieren Sie einheitliche Change-Documentation-Standards, die beide Standards effizient bedienen\n\n📋 Erweiterte Risikobewertung und Impact-Analyse:\n• Integrieren Sie DORA-spezifische Risikokategorien in bestehende Change-Risk-Assessment-Prozesse\n• Entwickeln Sie erweiterte Business-Impact-Analysen, die kritische IKT-Services und -Abhängigkeiten berücksichtigen\n• Implementieren Sie spezifische Bewertungskriterien für Changes an kritischen Drittanbieter-Services\n• Schaffen Sie integrierte Testing-Anforderungen, die sowohl ISO 27001 als auch DORA-Validierung umfassen\n• Etablieren Sie erweiterte Rollback-Planungen, die DORA-spezifische Recovery-Anforderungen berücksichtigen\n\n🎯 Spezifische DORA-Change-Kontrollen:\n• Implementieren Sie erweiterte Kontrollen für Changes an kritischen IKT-Systemen und -Infrastrukturen\n• Entwickeln Sie spezifische Approval-Prozesse für Changes, die kritische Drittanbieter-Services betreffen\n• Schaffen Sie erweiterte Testing-Verfahren für Changes mit potenziellem Impact auf operative Resilienz\n• Etablieren Sie spezifische Kommunikationsprozesse für regulatorisch relevante Changes\n• Implementieren Sie erweiterte Monitoring-Anforderungen für Post-Implementation-Überwachung\n\n🔍 Kontinuierliche Verbesserung und Optimierung:\n• Entwickeln Sie integrierte Metriken und KPIs, die die Effektivität von Change-Prozessen in beiden Compliance-Bereichen messen\n• Implementieren Sie regelmäßige Reviews und Lessons-Learned-Prozesse für beide Standards\n• Schaffen Sie Feedback-Mechanismen, die kontinuierliche Verbesserungen in beiden Bereichen fördern\n• Etablieren Sie Benchmarking-Prozesse, die Best Practices für integrierte Change-Management-Ansätze identifizieren\n• Implementieren Sie Automation-Strategien, die repetitive Change-Management-Aufgaben für beide Standards optimieren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie kann ich meine ISO 27001 Schulungs- und Awareness-Programme für DORA-Anforderungen erweitern?',
        answer: "Die Erweiterung bestehender ISO 27001 Schulungs- und Awareness-Programme für DORA-Anforderungen bietet eine kosteneffiziente Möglichkeit, Mitarbeiter auf beide Compliance-Bereiche vorzubereiten. Eine integrierte Herangehensweise maximiert Synergien und schafft ein kohärentes Verständnis für beide Standards.\n\n📚 Curriculum-Integration und Inhaltsharmonisierung:\n• Erweitern Sie bestehende ISO 27001 Schulungsinhalte um DORA-spezifische Module und Schwerpunkte\n• Entwickeln Sie integrierte Lernpfade, die beide Standards in logischer Abfolge und mit klaren Verbindungen vermitteln\n• Schaffen Sie Mapping-Übungen, die Teilnehmern die Verbindungen zwischen ISO 27001 und DORA-Anforderungen verdeutlichen\n• Implementieren Sie praktische Fallstudien, die integrierte Compliance-Szenarien für beide Standards abbilden\n• Etablieren Sie Cross-Reference-Materialien, die Überschneidungen und Unterschiede zwischen beiden Frameworks erklären\n\n🎯 Zielgruppenspezifische Schulungsansätze:\n• Entwickeln Sie rollenspezifische Schulungsprogramme, die sowohl ISO 27001 als auch DORA-Verantwortlichkeiten abdecken\n• Schaffen Sie erweiterte Management-Briefings, die strategische Aspekte beider Compliance-Bereiche vermitteln\n• Implementieren Sie technische Deep-Dive-Sessions für IT-Teams, die beide Standards in praktischen Kontexten erklären\n• Etablieren Sie Audit-spezifische Schulungen, die integrierte Prüfansätze für beide Frameworks vermitteln\n• Entwickeln Sie Vendor-Management-Schulungen, die erweiterte DORA-Anforderungen für Drittanbieter-Oversight abdecken\n\n💡 Innovative Schulungsmethoden und -formate:\n• Nutzen Sie E-Learning-Plattformen mit interaktiven Modulen, die beide Standards in gamifizierten Ansätzen vermitteln\n• Implementieren Sie Simulation-basierte Trainings, die integrierte Incident-Response-Szenarien für beide Bereiche abbilden\n• Schaffen Sie Peer-Learning-Programme, die Erfahrungsaustausch zwischen verschiedenen Compliance-Bereichen fördern\n• Etablieren Sie regelmäßige Webinar-Serien, die aktuelle Entwicklungen in beiden Standards vermitteln\n• Entwickeln Sie Mobile-Learning-Ansätze für kontinuierliche Awareness-Aktivitäten\n\n📊 Effektivitätsmessung und kontinuierliche Verbesserung:\n• Implementieren Sie integrierte Assessment-Verfahren, die Kenntnisse in beiden Compliance-Bereichen bewerten\n• Entwickeln Sie KPIs und Metriken, die die Effektivität integrierter Schulungsprogramme messen\n• Schaffen Sie Feedback-Mechanismen, die kontinuierliche Verbesserungen der Schulungsinhalte ermöglichen\n• Etablieren Sie regelmäßige Kompetenz-Reviews, die Schulungsbedarfe in beiden Bereichen identifizieren\n• Implementieren Sie Zertifizierungsprogramme, die integrierte Expertise in beiden Standards anerkennen"
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
