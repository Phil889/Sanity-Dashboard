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
    console.log('Updating NIS2 Risk Management Framework page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-risk-management-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-risk-management-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum erfordert NIS2 ein strukturiertes Risikomanagement-Framework und welchen strategischen Vorteil bietet ADVISORI's Ansatz für die Geschäftsführung?",
        answer: "Die NIS2-Richtlinie stellt Risikomanagement in den Mittelpunkt der Cyber-Sicherheitsstrategie, da traditionelle punktuelle Sicherheitsmaßnahmen den komplexen und sich ständig verändernden Bedrohungslandschaften nicht mehr gewachsen sind. Für die C-Suite bedeutet dies, dass Cyber-Risiken systematisch identifiziert, bewertet und gesteuert werden müssen, um sowohl regulatorische Compliance als auch operative Resilienz zu gewährleisten.\n\n🎯 Strategische Imperative für ein NIS2-Risikomanagement-Framework:\n• Proaktive Risikosteuerung: Übergang von reaktiven Sicherheitsmaßnahmen zu einem vorausschauenden, datengetriebenen Ansatz zur Risikoidentifikation und -behandlung.\n• Regulatory Compliance: Erfüllung der spezifischen NIS2-Anforderungen an systematisches Risikomanagement zur Vermeidung von Sanktionen und Reputationsschäden.\n• Strategische Entscheidungsfindung: Bereitstellung klarer, quantifizierbarer Risikoinformationen, die fundierte Investitionsentscheidungen in Cyber-Sicherheit ermöglichen.\n• Operative Effizienz: Optimierung der Ressourcenallokation durch Priorisierung von Risiken nach Geschäftsauswirkungen und Eintrittswahrscheinlichkeit.\n\n🛡️ Der ADVISORI-Ansatz für strategisches NIS2-Risikomanagement:\n• Business-integrierte Risikomodellierung: Wir entwickeln Risikomanagement-Frameworks, die sich nahtlos in Ihre Geschäftsstrategie und operative Prozesse integrieren, anstatt isolierte IT-Sicherheitsinitiativen zu schaffen.\n• Quantitative und qualitative Risikobewertung: Kombination moderner analytischer Methoden mit bewährten qualitativen Bewertungsansätzen zur Schaffung eines umfassenden Risikoverständnisses.\n• Skalierbare Framework-Architektur: Design flexibler und anpassungsfähiger Risikomanagement-Strukturen, die mit Ihrem Unternehmenswachstum und sich verändernden Bedrohungslagen mithalten können.\n• Kontinuierliches Risiko-Intelligence: Integration von Threat Intelligence und automatisierten Monitoring-Systemen zur Gewährleistung aktueller und relevanter Risikobewertungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert ein systematisches NIS2-Risikomanagement-Framework die Investitionsentscheidungen der C-Suite und welchen messbaren Business Value liefert ADVISORI?",
        answer: "Ein strukturiertes NIS2-Risikomanagement-Framework revolutioniert die Art und Weise, wie C-Level-Führungskräfte Cyber-Sicherheitsinvestitionen bewerten und priorisieren. Durch die systematische Quantifizierung von Risiken können Geschäftsentscheidungen auf datenbasierten Erkenntnissen basieren, was zu optimierter Ressourcenallokation und verbessertem Return on Security Investment (ROSI) führt.\n\n💰 Direkte Auswirkungen auf Investitionsentscheidungen:\n• Risiko-basierte Budgetierung: Präzise Allokation von Cyber-Sicherheitsbudgets basierend auf quantifizierten Risikobewertungen und potentiellen Geschäftsauswirkungen.\n• Prioritätenmatrix für Sicherheitsmaßnahmen: Systematische Bewertung und Priorisierung von Sicherheitsinvestitionen nach Risikoreduktion und Kosten-Nutzen-Verhältnis.\n• Business Case Development: Entwicklung fundierter Business Cases für Cyber-Sicherheitsinvestitionen mit klaren ROI-Projektionen und Risiko-Mitigation-Metriken.\n• Strategische Portfolio-Optimierung: Balancierung zwischen präventiven Sicherheitsmaßnahmen, Risikotransfer (Versicherungen) und Akzeptanz kalkulierter Restrisiken.\n\n📈 Messbarer Business Value durch ADVISORI's Framework:\n• Reduzierte Cyber-Versicherungsprämien: Nachweisbare Risikomanagement-Prozesse führen häufig zu Prämieneinsparungen von 15-25% bei Cyber-Versicherungen.\n• Optimierte Compliance-Kosten: Strukturierte Dokumentation und Prozesse reduzieren den Aufwand für regulatorische Audits und Compliance-Nachweise erheblich.\n• Verbesserte Entscheidungsgeschwindigkeit: Klare Risikobewertungsmetriken ermöglichen schnellere und fundiertere Entscheidungen bei Sicherheitsinvestitionen und Technologie-Implementierungen.\n• Stakeholder-Vertrauen: Demonstrierte Risikomanagement-Kompetenz stärkt das Vertrauen von Investoren, Kunden und Partnern und kann sich positiv auf Unternehmensbewertungen auswirken.\n• Proaktive Kostenoptimierung: Frühzeitige Risikoidentifikation vermeidet kostspielige Notfallmaßnahmen und reaktive Sicherheitsinvestitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Angesichts der sich schnell entwickelnden Cyber-Bedrohungslandschaft - wie stellt ADVISORI sicher, dass unser NIS2-Risikomanagement-Framework dynamisch und zukunftssicher bleibt?",
        answer: "In einer Zeit, in der Cyber-Bedrohungen sich mit unprecedented Geschwindigkeit entwickeln - von KI-gestützten Angriffen bis hin zu neuen APT-Techniken - ist ein statisches Risikomanagement-Framework unzureichend. ADVISORI entwickelt adaptive, selbstlernende Risikomanagement-Systeme, die kontinuierlich auf neue Bedrohungen reagieren und sich an verändernde Geschäftsumgebungen anpassen können.\n\n🔄 Adaptive Risikomanagement-Mechanismen:\n• Continuous Threat Intelligence Integration: Automatisierte Einbindung aktueller Threat Intelligence Feeds und Vulnerability Databases zur kontinuierlichen Aktualisierung von Risikomodellen.\n• Machine Learning-gestützte Risikobewertung: Einsatz von KI-Algorithmen zur Mustererkennung in Bedrohungsdaten und zur Vorhersage neuer Risikovektoren basierend auf historischen Daten und Trends.\n• Dynamic Risk Scoring: Implementierung flexibler Bewertungsalgorithmen, die Risikoscores automatisch anpassen, wenn neue Informationen über Bedrohungen oder Schwachstellen verfügbar werden.\n• Scenario-based Planning: Entwicklung multipler Zukunftsszenarien und entsprechender Risikomanagement-Strategien zur Vorbereitung auf verschiedene Bedrohungsentwicklungen.\n\n🛡️ Zukunftssichere Framework-Architektur:\n• Modulare Risikomanagement-Komponenten: Design eines Framework-Systems mit austauschbaren Modulen, die schnell an neue regulatorische Anforderungen oder Bedrohungstypen angepasst werden können.\n• API-basierte Integration: Entwicklung offener, API-basierter Architekturen, die nahtlose Integration neuer Sicherheitstools und Datenquellen ermöglichen.\n• Predictive Risk Analytics: Implementierung vorausschauender Analysemethoden zur Identifikation aufkommender Risiken und Trends, bevor sie zu signifikanten Bedrohungen werden.\n• Continuous Improvement Cycles: Etablierung regelmäßiger Review- und Optimierungszyklen, die sicherstellen, dass das Framework kontinuierlich an neue Erkenntnisse und Best Practices angepasst wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie integriert ADVISORI das NIS2-Risikomanagement-Framework in unsere bestehende Governance-Struktur und welche organisatorischen Veränderungen sind erforderlich?",
        answer: "Die erfolgreiche Implementierung eines NIS2-Risikomanagement-Frameworks erfordert mehr als nur technische Maßnahmen - es ist eine fundamentale organisatorische Transformation, die neue Governance-Strukturen, Rollen und Verantwortlichkeiten mit sich bringt. ADVISORI entwickelt maßgeschneiderte Integrationsstrategien, die das Risikomanagement nahtlos in bestehende Unternehmensstrukturen einbetten und dabei Disruption minimieren.\n\n🏗️ Organisatorische Integration und Governance-Anpassungen:\n• Risk Governance Struktur: Etablierung klarer Berichtswege und Entscheidungskompetenzen für Cyber-Risiken, einschließlich der Definition von Rollen für Chief Risk Officer, CISO und Geschäftsbereichsleiter.\n• Cross-funktionale Risk Committees: Aufbau interdisziplinärer Risikomanagement-Teams, die IT-Sicherheit, Business Operations, Legal und Compliance umfassen, um holistische Risikobewertungen zu gewährleisten.\n• Escalation und Decision-Making Frameworks: Design klarer Eskalationspfade und Entscheidungsmatrizen für verschiedene Risikokategorien und -schweregrade.\n• Board-Level Reporting: Entwicklung aussagekräftiger Risiko-Dashboards und Executive Reports, die der Geschäftsführung und dem Aufsichtsrat präzise, actionable Informationen liefern.\n\n⚙️ Change Management und Capability Building:\n• Phased Implementation Approach: Strukturierte Einführung des Frameworks in kontrollierten Phasen, um organisatorische Überforderung zu vermeiden und Lernerfahrungen zu integrieren.\n• Role Definition und Training: Klare Definition neuer Rollen und Verantwortlichkeiten sowie umfassende Schulungsprogramme für alle beteiligten Stakeholder.\n• Cultural Transformation: Entwicklung einer risikobewussten Unternehmenskultur durch Awareness-Programme und Incentive-Strukturen, die risikobewusstes Verhalten fördern.\n• Technology-enabled Governance: Integration von Governance-Anforderungen in technische Systeme und Workflows, um manuelle Prozesse zu automatisieren und Compliance zu erleichtern."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
