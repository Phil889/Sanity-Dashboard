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
    console.log('Updating NIS2 Security Measures page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-security-measures' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-security-measures" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI eine integrierte NIS2-Sicherheitsarchitektur, die technische Exzellenz mit Business Agility verbindet?",
        answer: "Eine erfolgreiche NIS2-Sicherheitsarchitektur muss die Balance zwischen rigoroser Compliance und organisatorischer Agilität meistern. ADVISORI entwickelt adaptive Sicherheitssysteme, die nicht nur regulatorische Anforderungen erfüllen, sondern auch als Enabler für Geschäftsflexibilität und Innovation fungieren.\n\n🏗️ Integrierte Architektur-Designprinzipien:\n• Zero-Trust-by-Design: Implementierung einer grundlegend sicheren Architektur, die Vertrauen kontinuierlich verifiziert statt vorauszusetzen, wodurch sichere Skalierung und flexible Geschäftsmodelle ermöglicht werden.\n• Defense-in-Depth mit Business-Fokus: Mehrschichtige Sicherheitskonzepte, die kritische Geschäftsprozesse priorisieren und gleichzeitig umfassenden Schutz gewährleisten.\n• Adaptive Security Posture: Intelligente Sicherheitssysteme, die sich automatisch an veränderte Bedrohungslagen und Geschäftsanforderungen anpassen können.\n• Compliance-by-Design: Integration regulatorischer Anforderungen in die Grundarchitektur, um kontinuierliche Compliance ohne operative Einschränkungen zu gewährleisten.\n\n⚡ Business Agility durch Security Excellence:\n• API-First Security: Sichere, standardisierte Schnittstellen ermöglichen schnelle Integration neuer Services und Partner ohne Kompromisse bei der Sicherheit.\n• Cloud-Native Security: Moderne, skalierbare Sicherheitslösungen, die elastisches Wachstum und geografische Expansion unterstützen.\n• DevSecOps-Integration: Automatisierte Sicherheitsprozesse in der Entwicklung reduzieren Time-to-Market und gewährleisten gleichzeitig höchste Sicherheitsstandards.\n• Risk-Adaptive Controls: Intelligente Sicherheitskontrollen, die sich basierend auf Risikobewertungen und Geschäftskontext dynamisch anpassen.\n\n🎯 ADVISORIs Architectural Excellence:\n• Business-Driven Security Design: Architekturentscheidungen werden primär von Geschäftszielen getrieben, wobei Sicherheit als Enabler und nicht als Hindernis positioniert wird.\n• Future-Ready Infrastructure: Anticipative Architektur-Planung, die zukünftige Technologien und regulatorische Entwicklungen berücksichtigt.\n• Performance-Security-Optimierung: Intelligente Balance zwischen Sicherheitsanforderungen und System-Performance durch moderne Technologien und Architekturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Incident Response und Business Continuity Management in der NIS2-Strategie und wie optimiert ADVISORI diese Prozesse?",
        answer: "Incident Response und Business Continuity Management bilden das Rückgrat einer robusten NIS2-Strategie und entscheiden über die Überlebensfähigkeit von Organisationen in Krisenzeiten. ADVISORI entwickelt integrierte Response-Systeme, die nicht nur regulatorische Meldepflichten erfüllen, sondern auch die operative Resilienz und Wettbewerbsfähigkeit in Krisenzeiten sicherstellen.\n\n🚨 Strategische Incident Response Excellence:\n• Executive Crisis Management: C-Level-integrierte Krisensteuerung, die strategische Entscheidungsfindung auch unter extremem Zeitdruck ermöglicht und Reputationsschäden minimiert.\n• Automated Response Orchestration: Intelligente Automatisierung kritischer Response-Prozesse reduziert Reaktionszeiten von Stunden auf Minuten und minimiert human error.\n• Stakeholder Communication Management: Professionelle Kommunikationsstrategien für Kunden, Partner, Aufsichtsbehörden und Medien zur Schadensbegrenzung.\n• Legal and Regulatory Compliance: Automatisierte Erfüllung aller NIS2-Meldepflichten und regulatorischen Anforderungen während Incident-Situationen.\n\n🛡️ Business Continuity als Wettbewerbsvorteil:\n• Mission-Critical Process Protection: Prioritätenbasierte Wiederherstellungsstrategien, die Kerngeschäftsprozesse bevorzugt schützen und schnellstmöglich wiederherstellen.\n• Supply Chain Resilience: Integrierte Kontinuitätsplanung für kritische Lieferanten und Partner zur Vermeidung von Dominoeffekten.\n• Recovery Time Optimization: Minimierung von Recovery Point Objectives (RPO) und Recovery Time Objectives (RTO) durch moderne Backup- und Replikationsstrategien.\n• Alternative Operational Models: Entwicklung von Notfallbetriebsmodi, die Geschäftskontinuität auch bei schwerwiegenden Systemausfällen ermöglichen.\n\n🎯 ADVISORIs Resilience-Optimierung:\n• Continuous Improvement Cycles: Regelmäßige Testing- und Optimierungszyklen basierend auf Lessons Learned und Threat Landscape-Entwicklungen.\n• Cross-Functional Response Teams: Integration verschiedener Unternehmensbereiche in Response-Teams für ganzheitliche Krisenbearbeitung.\n• Simulation-Based Training: Realitätsnahe Krisenübungen zur Verbesserung der Response-Fähigkeiten und Identifikation von Schwachstellen.\n• Metrics-Driven Optimization: KPI-basierte Verbesserung der Response-Prozesse mit klaren Erfolgsmessungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie implementiert ADVISORI eine effektive Cybersecurity Governance, die NIS2-Compliance mit strategischer Unternehmensführung verbindet?",
        answer: "Cybersecurity Governance unter NIS2 erfordert eine fundamentale Neuausrichtung der Unternehmensführung, bei der Cybersicherheit von einer IT-Funktion zu einer strategischen Geschäftsfunktion transformiert wird. ADVISORI entwickelt Governance-Strukturen, die regulatorische Compliance nahtlos in strategische Entscheidungsprozesse integrieren.\n\n👥 Executive-Level Security Governance:\n• Board-Level Cybersecurity Integration: Etablierung von Cybersicherheit als regelmäßiger Vorstandsagenda-Punkt mit strukturiertem Reporting und Entscheidungsvorlagen für strategische Cyber-Investitionen.\n• CISO-C-Suite-Alignment: Direkte Berichtslinie zwischen Chief Information Security Officer und C-Level mit entsprechenden Entscheidungskompetenzen und Budgetverantwortung.\n• Risk Appetite Framework: Entwicklung klarer Risikotoleranz-Parameter für verschiedene Geschäftsbereiche mit quantifizierten Acceptable Risk Levels.\n• Strategic Security Planning: Integration von Cybersicherheitsplanung in strategische Unternehmensplanung mit mehrjährigen Roadmaps und Investitionszyklen.\n\n📊 Performance-Driven Security Management:\n• Executive Security Dashboards: Real-time Visibility in kritische Sicherheitskennzahlen für C-Level-Entscheidungen mit business-relevanten Metriken statt rein technischen KPIs.\n• ROI-basierte Security Investments: Quantifizierung des Returns on Security Investments mit klaren Business Case-Analysen für jede Sicherheitsmaßnahme.\n• Compliance Automation: Automatisierte Überwachung und Reporting aller NIS2-relevanten Compliance-Parameter zur Reduzierung manueller Aufwände.\n• Third-Party Risk Governance: Systematisches Management von Lieferanten- und Partner-Risiken mit integrierten Due-Diligence-Prozessen.\n\n🎯 ADVISORIs Governance Excellence:\n• Policy-to-Practice Translation: Übersetzung abstrakter Sicherheitsrichtlinien in konkrete, umsetzbare Geschäftsprozesse mit klaren Verantwortlichkeiten.\n• Cultural Transformation Management: Systematische Entwicklung einer Sicherheitskultur, die von der Führungsebene vorgelebt und organisationsweit implementiert wird.\n• Continuous Governance Optimization: Regelmäßige Bewertung und Anpassung der Governance-Strukturen basierend auf regulatorischen Änderungen und Geschäftsentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche innovativen Technologien und Ansätze nutzt ADVISORI zur Optimierung von NIS2-Sicherheitsmaßnahmen und deren wirtschaftlicher Effizienz?",
        answer: "ADVISORI nutzt modernste Technologien und innovative Ansätze, um NIS2-Sicherheitsmaßnahmen nicht nur compliance-konform, sondern auch wirtschaftlich optimal zu implementieren. Durch den strategischen Einsatz von AI, Automation und Cloud-nativen Lösungen schaffen wir Sicherheitssysteme, die sich selbst optimieren und kontinuierlich an neue Bedrohungen anpassen.\n\n🤖 AI-Powered Security Excellence:\n• Machine Learning Threat Detection: Intelligente Bedrohungserkennung, die anomales Verhalten automatisch identifiziert und False Positives drastisch reduziert, wodurch Security Teams auf echte Bedrohungen fokussiert werden können.\n• Predictive Risk Analytics: Vorhersagemodelle für Cyber-Risiken basierend auf internen Daten und externen Threat Intelligence zur proaktiven Risikomitigation.\n• Automated Incident Classification: AI-gestützte Kategorisierung und Priorisierung von Sicherheitsvorfällen zur optimierten Ressourcenallokation.\n• Intelligent Compliance Monitoring: Automatisierte Überwachung aller NIS2-Compliance-Parameter mit selbstlernenden Systemen zur kontinuierlichen Optimierung.\n\n☁️ Cloud-Native Security Innovation:\n• Zero-Trust Architecture: Moderne, cloud-native Implementierung von Zero-Trust-Prinzipien mit mikrosegmentierten Netzwerken und kontinuierlicher Authentifizierung.\n• Container Security Orchestration: Automatisierte Sicherheit für containerisierte Anwendungen mit DevSecOps-Integration und kontinuierlicher Vulnerability-Scans.\n• Serverless Security Models: Innovative Sicherheitsansätze für serverlose Architekturen mit Function-Level-Security und Event-driven Protection.\n• Multi-Cloud Security Management: Einheitliche Sicherheitssteuerung über verschiedene Cloud-Provider hinweg mit zentralisierter Policy-Durchsetzung.\n\n🔧 Automation-First Approach:\n• Security Orchestration Platforms: Vollautomatisierte Response-Prozesse, die von Detection bis Remediation ohne menschliche Intervention ablaufen können.\n• Compliance-as-Code: Programmatische Definition und Durchsetzung von Compliance-Regeln mit automatischer Drift-Detection und -Korrektur.\n• Cost Optimization Engines: AI-gestützte Optimierung der Sicherheitsinfrastruktur zur Minimierung von Betriebskosten bei maximaler Schutzwirkung.\n• Self-Healing Systems: Automatische Wiederherstellung kompromittierter Systeme mit Minimal-Downtime und kontinuierlicher Service-Verfügbarkeit."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
