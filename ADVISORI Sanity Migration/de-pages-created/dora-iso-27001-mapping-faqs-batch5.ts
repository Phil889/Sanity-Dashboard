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
    console.log('Updating DORA ISO 27001 Mapping page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-iso-27001-mapping' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-iso-27001-mapping" not found')
    }
    
    // Create new FAQs for practical implementation and timeline considerations
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche praktischen Schritte sollte ich bei der Implementierung einer integrierten ISO 27001 und DORA-Compliance-Strategie befolgen?',
        answer: "Die praktische Implementierung einer integrierten ISO 27001 und DORA-Compliance-Strategie erfordert einen strukturierten, phasenweisen Ansatz, der sowohl die Komplexität der Integration als auch die spezifischen Anforderungen beider Standards berücksichtigt. Eine systematische Herangehensweise minimiert Risiken, maximiert Synergien und gewährleistet nachhaltigen Erfolg.\n\n📋 Phase 1: Assessment und Strategische Planung:\n• Führen Sie eine umfassende Current-State-Analyse Ihrer bestehenden ISO 27001 Implementierung durch, einschließlich Dokumentation, Prozesse und technischer Systeme\n• Entwickeln Sie eine detaillierte Gap-Analyse, die spezifische DORA-Anforderungen gegen bestehende ISO 27001 Controls mappt\n• Erstellen Sie eine integrierte Compliance-Roadmap mit klaren Meilensteinen, Abhängigkeiten und Ressourcenanforderungen\n• Etablieren Sie ein Projekt-Governance-Framework mit definierten Rollen, Verantwortlichkeiten und Entscheidungsstrukturen\n• Entwickeln Sie eine Change-Management-Strategie, die organisatorische Auswirkungen der Integration systematisch adressiert\n\n🔧 Phase 2: Grundlagen-Integration und Quick Wins:\n• Beginnen Sie mit der Harmonisierung bestehender ISO 27001 Dokumentation um DORA-spezifische Anforderungen\n• Implementieren Sie erweiterte Risikomanagement-Prozesse, die beide Standards in einheitlichen Workflows abbilden\n• Schaffen Sie integrierte Incident-Response-Verfahren, die sowohl ISO 27001 als auch DORA-Berichtspflichten erfüllen\n• Etablieren Sie erweiterte Drittanbieter-Management-Prozesse für kritische IKT-Service-Provider\n• Entwickeln Sie integrierte Schulungs- und Awareness-Programme für alle betroffenen Mitarbeiter\n\n⚙️ Phase 3: Technische Integration und Automatisierung:\n• Implementieren Sie integrierte Monitoring- und Alerting-Systeme, die beide Compliance-Bereiche abdecken\n• Schaffen Sie einheitliche Dashboard-Lösungen für Real-Time-Visibility in beide Standards\n• Etablieren Sie automatisierte Compliance-Reporting-Systeme für beide Framework-Anforderungen\n• Entwickeln Sie integrierte Audit-Management-Systeme, die Evidence-Collection für beide Standards optimieren\n• Implementieren Sie Workflow-Automation für repetitive Compliance-Aufgaben in beiden Bereichen\n\n🎯 Phase 4: Validierung und kontinuierliche Verbesserung:\n• Führen Sie umfassende Testing- und Validation-Aktivitäten durch, um die Effektivität der integrierten Lösung zu verifizieren\n• Implementieren Sie kontinuierliche Monitoring-Prozesse für beide Compliance-Bereiche\n• Etablieren Sie regelmäßige Review- und Optimization-Zyklen für die integrierte Compliance-Landschaft\n• Schaffen Sie Feedback-Mechanismen für kontinuierliche Verbesserung basierend auf operativen Erfahrungen\n• Entwickeln Sie Maintenance- und Update-Strategien für die langfristige Nachhaltigkeit der Integration"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Zeitrahmen und Meilensteine sind für eine erfolgreiche Integration von ISO 27001 und DORA-Compliance realistisch?',
        answer: "Die Zeitplanung für eine erfolgreiche Integration von ISO 27001 und DORA-Compliance hängt von verschiedenen Faktoren ab, einschließlich der Reife der bestehenden ISO 27001 Implementierung, der Organisationsgröße und der verfügbaren Ressourcen. Eine realistische Zeitplanung berücksichtigt sowohl die Komplexität der Integration als auch die Notwendigkeit gründlicher Validierung.\n\n⏱️ Kurzfristige Meilensteine (Monate 1-3):\n• Abschluss der umfassenden Current-State-Analyse und Gap-Assessment für beide Standards\n• Entwicklung der integrierten Compliance-Strategie und detaillierten Implementierungsroadmap\n• Etablierung des Projekt-Governance-Frameworks und Ressourcen-Allokation\n• Beginn der Dokumentations-Harmonisierung für kritische Prozesse und Verfahren\n• Implementierung erster Quick-Win-Maßnahmen, die sofortige Synergien zwischen beiden Standards schaffen\n\n📅 Mittelfristige Ziele (Monate 4-9):\n• Vollständige Integration der Risikomanagement-Frameworks und -Prozesse für beide Standards\n• Implementierung erweiterter Incident-Response-Verfahren mit DORA-spezifischen Berichtspflichten\n• Etablierung integrierter Drittanbieter-Management-Prozesse für kritische IKT-Service-Provider\n• Deployment der technischen Integration einschließlich Monitoring-, Dashboard- und Reporting-Systeme\n• Durchführung umfassender Schulungs- und Change-Management-Programme für alle betroffenen Teams\n\n🎯 Langfristige Implementierung (Monate 10-18):\n• Vollständige Automatisierung repetitiver Compliance-Aufgaben und Workflow-Integration\n• Implementierung fortgeschrittener Analytics- und Predictive-Monitoring-Capabilities\n• Etablierung kontinuierlicher Verbesserungs- und Optimization-Prozesse\n• Durchführung umfassender Testing- und Validation-Aktivitäten für die gesamte integrierte Lösung\n• Vorbereitung auf externe Audits und regulatorische Assessments für beide Standards\n\n🔄 Kontinuierliche Weiterentwicklung (Monate 19+):\n• Regelmäßige Maturity-Assessments und Performance-Reviews der integrierten Compliance-Landschaft\n• Anpassung an sich entwickelnde regulatorische Anforderungen und Industry-Best-Practices\n• Expansion der Integration auf zusätzliche Geschäftsbereiche oder Tochtergesellschaften\n• Innovation-Scouting und Implementierung neuer Technologien zur weiteren Optimization\n• Entwicklung von Thought-Leadership und Best-Practice-Sharing mit der Industry-Community\n\n⚠️ Kritische Erfolgsfaktoren für Zeitplanung:\n• Verfügbarkeit qualifizierter Ressourcen mit Expertise in beiden Standards\n• Unterstützung des Senior Managements und angemessene Budget-Allokation\n• Effektive Change-Management-Strategien zur Minimierung organisatorischer Widerstände\n• Realistische Erwartungen bezüglich Komplexität und Implementierungsaufwand\n• Flexibilität zur Anpassung der Zeitplanung basierend auf Lessons Learned und sich ändernden Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie kann ich den ROI und Business Value einer integrierten ISO 27001 und DORA-Compliance-Strategie messen und kommunizieren?',
        answer: "Die Messung und Kommunikation des ROI und Business Value einer integrierten ISO 27001 und DORA-Compliance-Strategie erfordert einen strukturierten Ansatz, der sowohl quantitative als auch qualitative Vorteile erfasst und diese in geschäftsrelevanten Metriken darstellt. Eine effektive Value-Demonstration unterstützt kontinuierliche Investitionen und organisatorische Unterstützung.\n\n💰 Quantitative ROI-Metriken und Kosteneinsparungen:\n• Berechnen Sie direkte Kosteneinsparungen durch Eliminierung von Redundanzen in Personal, Systemen und Prozessen zwischen beiden Standards\n• Quantifizieren Sie Effizienzgewinne durch automatisierte Workflows und integrierte Reporting-Systeme\n• Messen Sie reduzierte Audit-Kosten durch kombinierte Assessment-Zyklen und gemeinsame Evidence-Collection\n• Bewerten Sie vermiedene Compliance-Risiken und potenzielle regulatorische Strafen durch verbesserte Compliance-Positionierung\n• Kalkulieren Sie Zeitersparnis durch streamlined Prozesse und Self-Service-Capabilities für Compliance-Aktivitäten\n\n📊 Qualitative Business-Value-Indikatoren:\n• Dokumentieren Sie verbesserte Risikomanagement-Capabilities und erhöhte operative Resilienz\n• Bewerten Sie gesteigerte Stakeholder-Confidence durch demonstrierte Compliance-Exzellenz\n• Messen Sie verbesserte Vendor-Relationships durch integrierte Drittanbieter-Management-Prozesse\n• Quantifizieren Sie erhöhte Employee-Satisfaction durch klarere Prozesse und reduzierte Compliance-Komplexität\n• Bewerten Sie strategische Competitive-Advantages durch Vorreiterrolle in integrierter Compliance\n\n🎯 Stakeholder-spezifische Value-Kommunikation:\n• Entwickeln Sie Executive-Dashboards, die strategische KPIs und Business-Impact in verständlichen Visualisierungen darstellen\n• Schaffen Sie Department-spezifische Reports, die relevante Vorteile für verschiedene Organisationsbereiche hervorheben\n• Implementieren Sie Regular-Update-Zyklen, die Fortschritte und Erfolge kontinuierlich an relevante Stakeholder kommunizieren\n• Etablieren Sie Success-Story-Documentation, die konkrete Beispiele für Value-Realization sammelt und teilt\n• Entwickeln Sie Benchmark-Vergleiche gegen Industry-Standards und Peer-Organizations zur Kontextualisierung der Erfolge\n\n📈 Langfristige Value-Tracking und Optimization:\n• Implementieren Sie kontinuierliche Value-Measurement-Systeme, die ROI und Business-Impact über Zeit verfolgen\n• Schaffen Sie Predictive-Analytics-Capabilities, die zukünftige Value-Potenziale und Optimization-Möglichkeiten identifizieren\n• Etablieren Sie Regular-Value-Reviews mit Senior Management zur strategischen Bewertung der Integration\n• Entwickeln Sie Continuous-Improvement-Prozesse, die Value-Erkenntnisse in weitere Optimierungen überführen\n• Schaffen Sie External-Communication-Strategien, die Erfolge als Thought-Leadership und Competitive-Differentiation nutzen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche häufigen Fallstricke sollte ich bei der Integration von ISO 27001 und DORA vermeiden und wie kann ich diese proaktiv adressieren?',
        answer: "Die Integration von ISO 27001 und DORA birgt verschiedene potenzielle Fallstricke, die den Erfolg des Projekts gefährden können. Eine proaktive Identifikation und Adressierung dieser Risiken ist entscheidend für eine erfolgreiche Integration und nachhaltige Compliance in beiden Bereichen.\n\n⚠️ Strategische und Governance-Fallstricke:\n• Vermeiden Sie unzureichende Senior-Management-Unterstützung durch frühzeitige Stakeholder-Engagement und klare Business-Case-Kommunikation\n• Adressieren Sie Scope-Creep proaktiv durch detaillierte Projektdefinition und rigoroses Change-Management\n• Verhindern Sie Ressourcen-Konflikte durch realistische Planung und angemessene Budget-Allokation für beide Standards\n• Vermeiden Sie organisatorische Silos durch Cross-funktionale Teams und integrierte Governance-Strukturen\n• Adressieren Sie Change-Resistance durch umfassende Communication- und Training-Programme\n\n🔧 Technische und Implementierungs-Fallstricke:\n• Vermeiden Sie Over-Engineering durch fokussierte Implementierung auf kritische Integration-Points\n• Adressieren Sie System-Integration-Komplexität durch phasenweise Deployment und gründliches Testing\n• Verhindern Sie Data-Quality-Probleme durch robuste Data-Governance und Validation-Prozesse\n• Vermeiden Sie Vendor-Lock-in durch strategische Technology-Selection und Interoperability-Standards\n• Adressieren Sie Performance-Degradation durch angemessenes Capacity-Planning und Monitoring\n\n📋 Compliance und Regulatorische Fallstricke:\n• Vermeiden Sie Compliance-Gaps durch detaillierte Mapping-Analysen und regelmäßige Gap-Assessments\n• Adressieren Sie regulatorische Interpretation-Unsicherheiten durch proaktive Engagement mit Aufsichtsbehörden\n• Verhindern Sie Audit-Readiness-Probleme durch kontinuierliche Evidence-Collection und Mock-Audit-Programme\n• Vermeiden Sie Documentation-Inconsistencies durch standardisierte Templates und Review-Prozesse\n• Adressieren Sie Regulatory-Change-Impacts durch systematisches Monitoring und Impact-Assessment-Verfahren\n\n👥 Organisatorische und kulturelle Fallstricke:\n• Vermeiden Sie Skills-Gaps durch frühzeitige Kompetenz-Assessments und gezielte Training-Programme\n• Adressieren Sie Communication-Breakdowns durch strukturierte Information-Sharing und Regular-Updates\n• Verhindern Sie Burnout durch realistische Workload-Planung und angemessene Ressourcen-Allokation\n• Vermeiden Sie Knowledge-Silos durch Documentation-Standards und Knowledge-Transfer-Prozesse\n• Adressieren Sie Cultural-Resistance durch Incentive-Alignment und Success-Recognition-Programme\n\n🔄 Proaktive Risikomanagement-Strategien:\n• Implementieren Sie regelmäßige Risk-Assessments und Mitigation-Planning für alle identifizierten Fallstricke\n• Schaffen Sie Early-Warning-Systeme, die potenzielle Probleme frühzeitig identifizieren\n• Etablieren Sie Escalation-Prozesse für schnelle Problem-Resolution bei auftretenden Issues\n• Entwickeln Sie Contingency-Plans für kritische Risiko-Szenarien\n• Implementieren Sie Lessons-Learned-Prozesse, die Erkenntnisse aus Problemen in zukünftige Verbesserungen überführen"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
