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
    console.log('Updating DORA Schwachstellen-Scanning page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-schwachstellen-scanning' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-schwachstellen-scanning" not found')
    }
    
    // Create new FAQs for DORA vulnerability scanning fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen Schwachstellen-Scanning-Anforderungen stellt DORA an Finanzinstitute und wie unterscheiden sie sich von herkömmlichen Cybersecurity-Standards?',
        answer: "DORA etabliert einen umfassenden, regulatorisch verankerten Rahmen für Schwachstellen-Scanning, der weit über traditionelle Cybersecurity-Praktiken hinausgeht. Die Regulierung fordert nicht nur technische Scanning-Aktivitäten, sondern deren systematische Integration in das Gesamtrisikomanagement von Finanzinstituten mit spezifischen Dokumentations-, Berichts- und Governance-Anforderungen.\n\n🎯 DORA-spezifische Scanning-Anforderungen:\n• Kontinuierliche, risikobasierte Schwachstellen-Identifikation als integraler Bestandteil des IKT-Risikomanagements, nicht als isolierte Sicherheitsaktivität\n• Systematische Bewertung aller kritischen IKT-Systeme, einschließlich Cloud-Services, Drittanbieter-Lösungen und Legacy-Infrastrukturen\n• Verpflichtende Integration von Threat-Intelligence und aktuellen Bedrohungslandschaften in Scanning-Prozesse\n• Dokumentierte Risikobewertung jeder identifizierten Schwachstelle mit Bezug auf Geschäftskritikalität und potenzielle Auswirkungen auf die operative Resilienz\n• Etablierung klarer Remediation-Timelines basierend auf Risikoeinstufung und regulatorischen Erwartungen\n\n📊 Unterschiede zu herkömmlichen Standards:\n• DORA verlangt explizite Verknüpfung von Scanning-Ergebnissen mit Business-Impact-Analysen und operationellen Resilienz-Zielen\n• Regulatorische Berichtspflichten erfordern standardisierte Dokumentation und Nachverfolgung aller Scanning-Aktivitäten\n• Integration in DORA-konforme Incident-Response-Prozesse mit spezifischen Meldepflichten bei kritischen Schwachstellen\n• Erweiterte Anforderungen an Drittanbieter-Scanning und Supply-Chain-Risikobewertung\n• Verpflichtende regelmäßige Penetrationstests als Validierung der Scanning-Effektivität\n\n🔍 Governance und Dokumentationsanforderungen:\n• Etablierung dedizierter Vulnerability-Management-Governance mit klaren Rollen und Verantwortlichkeiten\n• Entwicklung DORA-konformer Policies und Prozeduren für alle Aspekte des Schwachstellen-Managements\n• Implementierung von Metriken und KPIs zur Messung der Scanning-Effektivität und Remediation-Performance\n• Regelmäßige Berichterstattung an Geschäftsleitung und Aufsichtsgremien über Schwachstellen-Status und Risikopositionen\n• Aufrechterhaltung vollständiger Audit-Trails für alle Scanning-Aktivitäten und Remediation-Maßnahmen\n\n⚡ Technische Implementierungsanforderungen:\n• Deployment automatisierter Scanning-Tools mit kontinuierlicher Monitoring-Capability\n• Integration verschiedener Scanning-Technologien für umfassende Abdeckung aller IKT-Assets\n• Etablierung von Real-time-Alerting für kritische Schwachstellen mit automatisierten Eskalationsprozessen\n• Implementierung von Patch-Management-Systemen mit DORA-konformer Dokumentation und Tracking\n• Entwicklung von Dashboards und Reporting-Tools für Management-Visibility und regulatorische Berichterstattung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickle ich eine DORA-konforme Vulnerability-Management-Strategie, die sowohl technische Effektivität als auch regulatorische Compliance gewährleistet?',
        answer: "Eine DORA-konforme Vulnerability-Management-Strategie erfordert die strategische Verschmelzung technischer Exzellenz mit regulatorischen Anforderungen. Der Schlüssel liegt in der Entwicklung eines ganzheitlichen Frameworks, das operative Sicherheit, Geschäftskontinuität und Compliance-Anforderungen nahtlos integriert.\n\n🏗️ Strategische Framework-Entwicklung:\n• Aufbau einer risikobasierten Vulnerability-Management-Architektur, die Geschäftskritikalität, Asset-Wert und Bedrohungslandschaft systematisch berücksichtigt\n• Integration des Vulnerability-Managements in bestehende IKT-Risikomanagement-Frameworks und Business-Continuity-Planungen\n• Entwicklung klarer Governance-Strukturen mit definierten Rollen, Verantwortlichkeiten und Eskalationswegen\n• Etablierung von Service-Level-Agreements für verschiedene Schwachstellen-Kategorien basierend auf Risikoeinstufung\n• Schaffung von Verbindungen zwischen Vulnerability-Management und anderen DORA-Compliance-Bereichen wie Incident-Management und Drittanbieter-Risikomanagement\n\n📋 Prozess-Design und Operationalisierung:\n• Entwicklung standardisierter Workflows für Schwachstellen-Identifikation, Bewertung, Priorisierung und Remediation\n• Implementierung automatisierter Prozesse für Routine-Aktivitäten bei gleichzeitiger Beibehaltung manueller Oversight für kritische Entscheidungen\n• Etablierung von Change-Management-Prozessen, die Vulnerability-Remediation mit bestehenden IT-Operations koordinieren\n• Schaffung von Feedback-Loops zwischen Scanning-Aktivitäten und strategischer Risikobewertung\n• Integration von Lessons-Learned-Prozessen zur kontinuierlichen Verbesserung der Strategie\n\n🎯 Risikoorientierte Priorisierung:\n• Entwicklung mehrdimensionaler Risiko-Scoring-Systeme, die technische Schwere, Business-Impact und Exploit-Wahrscheinlichkeit berücksichtigen\n• Integration von Threat-Intelligence zur dynamischen Anpassung von Prioritäten basierend auf aktuellen Bedrohungen\n• Berücksichtigung von Asset-Kritikalität und Abhängigkeiten bei der Remediation-Planung\n• Etablierung von Ausnahme-Management-Prozessen für Fälle, in denen sofortige Remediation nicht möglich ist\n• Implementierung von Kompensationskontrollen als temporäre Risikominderung\n\n📊 Metriken und Performance-Management:\n• Definition von KPIs, die sowohl technische Effektivität als auch regulatorische Compliance messen\n• Implementierung von Dashboards für verschiedene Stakeholder-Gruppen mit angemessenen Detailgraden\n• Etablierung von Benchmarking-Prozessen zur kontinuierlichen Verbesserung der Strategie\n• Entwicklung von Trend-Analysen zur proaktiven Identifikation von Risiko-Entwicklungen\n• Schaffung von Reporting-Mechanismen, die sowohl interne Governance als auch regulatorische Anforderungen erfüllen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen automatisierte Scanning-Tools und kontinuierliches Monitoring in einer DORA-konformen Schwachstellen-Management-Architektur?',
        answer: "Automatisierte Scanning-Tools und kontinuierliches Monitoring bilden das technische Rückgrat einer DORA-konformen Schwachstellen-Management-Architektur. Sie ermöglichen die systematische, skalierbare und konsistente Identifikation von Sicherheitslücken, während sie gleichzeitig die für DORA erforderliche Dokumentation und Nachverfolgbarkeit gewährleisten.\n\n🔧 Automatisierte Tool-Integration und -Orchestrierung:\n• Deployment einer integrierten Tool-Suite, die verschiedene Scanning-Technologien wie Netzwerk-Scanner, Web-Application-Scanner, Container-Scanner und Cloud-Security-Tools umfasst\n• Implementierung von Tool-Orchestrierung zur koordinierten Ausführung verschiedener Scanning-Aktivitäten ohne Konflikte oder Performance-Beeinträchtigungen\n• Etablierung von API-basierten Integrationen zwischen verschiedenen Tools für nahtlosen Datenaustausch und Workflow-Automatisierung\n• Konfiguration automatisierter Scanning-Schedules basierend auf Asset-Kritikalität, Änderungsfrequenz und Risikoprofilen\n• Implementierung von Scanning-Policies, die verschiedene Umgebungen und Asset-Typen angemessen berücksichtigen\n\n📡 Kontinuierliches Monitoring und Real-time-Detection:\n• Aufbau kontinuierlicher Monitoring-Capabilities, die über traditionelle periodische Scans hinausgehen und Echtzeit-Erkennung neuer Schwachstellen ermöglichen\n• Integration von Threat-Intelligence-Feeds zur automatischen Aktualisierung von Scanning-Parametern basierend auf aktuellen Bedrohungen\n• Implementierung von Event-driven Scanning, das bei Systemänderungen, neuen Deployments oder Sicherheitsereignissen automatisch ausgelöst wird\n• Etablierung von Anomalie-Detection zur Identifikation ungewöhnlicher Netzwerk- oder System-Aktivitäten, die auf neue Schwachstellen hinweisen könnten\n• Entwicklung von Correlation-Engines, die Scanning-Ergebnisse mit anderen Sicherheitsdaten verknüpfen\n\n⚙️ DORA-konforme Automatisierung und Compliance:\n• Konfiguration automatisierter Dokumentations- und Reporting-Prozesse, die DORA-Anforderungen für Audit-Trails und regulatorische Berichterstattung erfüllen\n• Implementierung automatisierter Risikobewertung und Priorisierung basierend auf vordefinierten Kriterien und Business-Impact-Analysen\n• Etablierung automatisierter Eskalationsprozesse für kritische Schwachstellen mit Integration in Incident-Response-Workflows\n• Entwicklung automatisierter Remediation-Workflows für Standard-Schwachstellen bei gleichzeitiger Beibehaltung manueller Approval-Prozesse für kritische Systeme\n• Implementierung automatisierter Compliance-Checks zur Sicherstellung, dass alle Scanning-Aktivitäten DORA-Anforderungen entsprechen\n\n🔍 Advanced Analytics und Intelligence:\n• Integration von Machine-Learning-Algorithmen zur Verbesserung der Schwachstellen-Priorisierung und False-Positive-Reduktion\n• Implementierung von Predictive Analytics zur Vorhersage wahrscheinlicher Angriffsvektoren und Schwachstellen-Trends\n• Entwicklung von Behavioral Analytics zur Identifikation von Schwachstellen-Mustern und Risiko-Hotspots\n• Etablierung von Threat-Modeling-Integration zur kontextuellen Bewertung von Schwachstellen\n• Implementierung von Risk-Scoring-Algorithmen, die multiple Faktoren für präzise Risikobewertung berücksichtigen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie integriere ich Threat-Intelligence und Advanced-Threat-Detection in meine DORA-Schwachstellen-Scanning-Prozesse?',
        answer: "Die Integration von Threat-Intelligence und Advanced-Threat-Detection in DORA-Schwachstellen-Scanning-Prozesse transformiert reaktive Sicherheitsmaßnahmen in proaktive, kontextuelle Risikomanagement-Strategien. Diese Integration ermöglicht es, Schwachstellen nicht isoliert zu betrachten, sondern im Kontext aktueller Bedrohungslandschaften und spezifischer Risikoprofile zu bewerten.\n\n🌐 Threat-Intelligence-Integration und -Orchestrierung:\n• Etablierung von Multi-Source-Threat-Intelligence-Feeds, die kommerzielle, Open-Source und branchenspezifische Bedrohungsdaten kombinieren\n• Implementierung von Intelligence-Processing-Pipelines, die rohe Threat-Daten in actionable Insights für Vulnerability-Management transformieren\n• Entwicklung von Correlation-Engines, die Schwachstellen-Daten mit aktuellen Threat-Campaigns, Exploit-Verfügbarkeit und Angreifer-TTPs verknüpfen\n• Integration von Geopolitical-Risk-Intelligence zur Bewertung von staatlich gesponserten Bedrohungen und deren Relevanz für spezifische Schwachstellen\n• Aufbau von Feedback-Loops zwischen internen Security-Incidents und externen Threat-Intelligence zur Verbesserung der Relevanz und Genauigkeit\n\n🔍 Advanced-Threat-Detection und Behavioral Analytics:\n• Implementierung von User-and-Entity-Behavior-Analytics zur Identifikation anomaler Aktivitäten, die auf Schwachstellen-Exploitation hinweisen könnten\n• Deployment von Network-Traffic-Analysis-Tools zur Erkennung von Lateral-Movement und Advanced-Persistent-Threat-Aktivitäten\n• Integration von Endpoint-Detection-and-Response-Systemen zur Identifikation von Zero-Day-Exploits und unbekannten Schwachstellen\n• Etablierung von Deception-Technologies zur proaktiven Erkennung von Angreifern und deren Exploitation-Techniken\n• Implementierung von Threat-Hunting-Capabilities zur proaktiven Suche nach Indikatoren für Schwachstellen-Missbrauch\n\n⚡ Kontextuelle Risikobewertung und Priorisierung:\n• Entwicklung dynamischer Risiko-Scoring-Algorithmen, die Threat-Intelligence-Daten in Echtzeit in Schwachstellen-Bewertungen integrieren\n• Implementierung von Exploit-Prediction-Models, die die Wahrscheinlichkeit einer Schwachstellen-Exploitation basierend auf aktuellen Bedrohungen bewerten\n• Etablierung von Industry-Specific-Threat-Profiling zur Anpassung von Schwachstellen-Prioritäten an branchenspezifische Risiken\n• Integration von Attack-Surface-Management zur kontinuierlichen Bewertung der Exposition gegenüber spezifischen Bedrohungen\n• Entwicklung von Threat-Actor-Attribution zur Bewertung von Schwachstellen im Kontext spezifischer Angreifer-Capabilities\n\n🎯 Proaktive Threat-Response und Mitigation:\n• Implementierung automatisierter Response-Workflows, die bei Threat-Intelligence-Matches sofortige Schutzmaßnahmen auslösen\n• Etablierung von Threat-Intelligence-driven Patch-Priorisierung zur beschleunigten Remediation hochriskanter Schwachstellen\n• Entwicklung von Compensating-Controls-Strategien für Schwachstellen, die aktiv von Bedrohungsakteuren ausgenutzt werden\n• Integration von Threat-Intelligence in Incident-Response-Prozesse zur verbesserten Attribution und Impact-Assessment\n• Aufbau von Threat-Intelligence-Sharing-Mechanismen mit Branchenpartnern und Behörden zur kollektiven Verteidigung"
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
