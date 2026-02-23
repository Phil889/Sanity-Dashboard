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
    console.log('Updating DORA Timeline & Fristen page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-timeline-fristen' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-timeline-fristen" not found')
    }
    
    // Create new FAQs for phased compliance approach
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickle ich einen phasenweisen Ansatz für die DORA-Implementierung und welche Prioritäten sollte ich setzen?',
        answer: "Ein phasenweiser Implementierungsansatz ist entscheidend für den Erfolg Ihrer DORA-Compliance-Strategie. Durch strategische Priorisierung und strukturierte Phasenplanung können Sie Ressourcen optimal einsetzen, Risiken minimieren und gleichzeitig schnelle Erfolge erzielen, die Momentum für das gesamte Programm schaffen.\n\n🎯 Strategische Phasenplanung-Prinzipien:\n• Beginnen Sie mit Fundamenten wie Governance-Strukturen und Risikomanagement-Frameworks, bevor Sie zu komplexeren operativen Bereichen übergehen\n• Priorisieren Sie Bereiche mit hohem regulatorischen Risiko und gleichzeitig realisierbaren Quick-Wins\n• Berücksichtigen Sie Abhängigkeiten zwischen verschiedenen DORA-Anforderungen bei der Sequenzierung\n• Planen Sie Phasen so, dass jede Phase eigenständige Werte liefert und das Risikoprofil der Organisation verbessert\n• Integrieren Sie Lernzyklen zwischen den Phasen für kontinuierliche Optimierung des Implementierungsansatzes\n\n🏗️ Phase-Eins-Prioritäten - Governance und Grundlagen:\n• Etablierung von IKT-Risikomanagement-Frameworks und entsprechenden Governance-Strukturen\n• Definition von Rollen, Verantwortlichkeiten und Berichtswegen für digitale operationelle Resilienz\n• Implementierung grundlegender Incident-Response-Prozesse und Eskalationsmechanismen\n• Aufbau von Awareness und Kompetenz in der Organisation für DORA-relevante Themen\n• Schaffung der organisatorischen Voraussetzungen für nachfolgende Implementierungsphasen\n\n⚡ Phase-Zwei-Fokus - Drittanbieter und Verträge:\n• Systematische Erfassung und Bewertung aller IKT-Drittanbieter und deren Services\n• Anpassung bestehender Verträge an DORA-Anforderungen und Verhandlung neuer Vereinbarungen\n• Implementierung von Due-Diligence-Prozessen für neue und bestehende Drittanbieter-Beziehungen\n• Entwicklung von Monitoring- und Überwachungsmechanismen für kritische Drittanbieter\n• Aufbau von Alternativen und Exit-Strategien für kritische Services\n\n🔧 Phase-Drei-Schwerpunkte - Testing und Resilienz:\n• Implementierung umfassender Testing-Programme einschließlich Penetrationstests und Resilienz-Assessments\n• Entwicklung und Testing von Business-Continuity- und Disaster-Recovery-Plänen\n• Aufbau von Monitoring- und Alerting-Systemen für kontinuierliche Überwachung der IT-Resilienz\n• Implementierung von Threat-Intelligence-Capabilities und Advanced-Threat-Detection\n• Integration aller Resilienz-Maßnahmen in ein kohärentes operationelles Framework\n\n📊 Phase-Vier-Vollendung - Monitoring und Optimierung:\n• Implementierung umfassender Reporting- und Dashboard-Lösungen für kontinuierliches Monitoring\n• Etablierung von Prozessen für regelmäßige Reviews und Updates der DORA-Compliance-Maßnahmen\n• Integration von DORA-Anforderungen in bestehende Audit- und Assurance-Prozesse\n• Aufbau von Capabilities für proaktive Anpassung an sich entwickelnde regulatorische Anforderungen\n• Schaffung einer Kultur kontinuierlicher Verbesserung für digitale operationelle Resilienz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Quick-Wins kann ich in den ersten Monaten der DORA-Implementierung erzielen?',
        answer: "Quick-Wins sind entscheidend für den Aufbau von Momentum und organisatorischer Unterstützung für Ihr DORA-Implementierungsprogramm. Durch strategische Fokussierung auf realisierbare Erfolge in den ersten Monaten können Sie Vertrauen schaffen, Ressourcen sichern und eine solide Grundlage für komplexere Implementierungsschritte legen.\n\n🚀 Sofort umsetzbare Governance-Quick-Wins:\n• Etablierung eines DORA-Steering-Committees mit klaren Mandaten und regelmäßigen Meeting-Zyklen\n• Entwicklung einer DORA-Kommunikationsstrategie und Awareness-Kampagne für die gesamte Organisation\n• Erstellung einer ersten DORA-Compliance-Roadmap mit groben Meilensteinen und Verantwortlichkeiten\n• Implementierung grundlegender Dokumentationsstrukturen für DORA-relevante Prozesse und Entscheidungen\n• Aufbau eines zentralen DORA-Knowledge-Repositories für Standards, Guidelines und Best Practices\n\n📋 Schnell realisierbare Assessment-Erfolge:\n• Durchführung einer High-Level-Gap-Analyse zur Identifikation der größten Compliance-Lücken\n• Erstellung eines umfassenden Inventars aller IKT-Services und Drittanbieter-Beziehungen\n• Bewertung bestehender Incident-Response-Prozesse und Identifikation von Verbesserungspotenzialen\n• Analyse aktueller Testing-Praktiken und Entwicklung eines erweiterten Testing-Frameworks\n• Mapping bestehender Risikomanagement-Prozesse auf DORA-Anforderungen\n\n🔍 Praktische Monitoring-Verbesserungen:\n• Implementierung grundlegender Dashboards für IKT-Risiko-Monitoring mit verfügbaren Datenquellen\n• Verbesserung bestehender Incident-Tracking-Systeme um DORA-spezifische Kategorien und Metriken\n• Etablierung regelmäßiger Reporting-Zyklen für IKT-Risiken an das Management\n• Aufbau automatisierter Alerting-Mechanismen für kritische IKT-Incidents\n• Integration DORA-relevanter KPIs in bestehende Management-Reporting-Strukturen\n\n🤝 Drittanbieter-Management-Sofortmaßnahmen:\n• Kategorisierung aller IKT-Drittanbieter nach Kritikalität und DORA-Relevanz\n• Initiierung von Gesprächen mit kritischen Drittanbietern über deren DORA-Compliance-Pläne\n• Überprüfung bestehender Verträge auf DORA-relevante Klauseln und Identifikation von Anpassungsbedarfen\n• Entwicklung standardisierter Due-Diligence-Fragebögen für DORA-Compliance-Bewertungen\n• Aufbau eines zentralen Drittanbieter-Registers mit DORA-spezifischen Attributen\n\n💡 Kulturelle und organisatorische Quick-Wins:\n• Durchführung von DORA-Awareness-Sessions für Führungskräfte und Schlüsselpersonal\n• Integration von DORA-Zielen in individuelle Leistungsziele relevanter Mitarbeiter\n• Schaffung von DORA-Champions-Netzwerken in verschiedenen Geschäftsbereichen\n• Etablierung regelmäßiger DORA-Updates in bestehenden Kommunikationsformaten\n• Anerkennung und Belohnung früher DORA-Implementierungserfolge zur Motivation der Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie plane ich die Ressourcenallokation über verschiedene DORA-Implementierungsphasen hinweg?',
        answer: "Effektive Ressourcenplanung ist kritisch für den Erfolg Ihrer DORA-Implementierung. Eine durchdachte Allokationsstrategie berücksichtigt sowohl die schwankenden Anforderungen verschiedener Implementierungsphasen als auch die Notwendigkeit, operative Geschäftstätigkeiten aufrechtzuerhalten und andere strategische Initiativen zu unterstützen.\n\n📊 Strategische Ressourcenplanung-Prinzipien:\n• Entwickeln Sie eine rollierende Ressourcenplanung, die sich an den spezifischen Anforderungen jeder Implementierungsphase orientiert\n• Berücksichtigen Sie sowohl interne Kapazitäten als auch externe Expertise-Anforderungen bei der Planung\n• Planen Sie Pufferkapazitäten für unvorhergesehene Herausforderungen und Scope-Erweiterungen ein\n• Schaffen Sie Flexibilität für Ressourcenumverteilung zwischen verschiedenen Workstreams basierend auf Prioritätsänderungen\n• Integrieren Sie DORA-Ressourcenanforderungen in Ihre gesamte Unternehmensressourcenplanung\n\n👥 Phasenspezifische Personalanforderungen:\n• Frühe Phasen erfordern primär Senior-Expertise für strategische Planung, Governance-Design und Stakeholder-Management\n• Mittlere Phasen benötigen verstärkt operative Ressourcen für Implementierung, Testing und Prozessoptimierung\n• Spätere Phasen fokussieren auf Spezialisten für Monitoring, Reporting und kontinuierliche Verbesserung\n• Berücksichtigen Sie den Bedarf an Change-Management-Expertise während aller Phasen\n• Planen Sie Wissenstransfer und Kompetenzaufbau für langfristige interne Capabilities\n\n💰 Budgetplanung und Kostenverteilung:\n• Frontload-Investitionen in den frühen Phasen für Grundlagen und Infrastruktur, die langfristige Effizienz ermöglichen\n• Planen Sie höhere externe Beratungskosten in komplexen Bereichen wie Drittanbieter-Management und Testing\n• Berücksichtigen Sie Technologie-Investitionen für Monitoring, Reporting und Automatisierung\n• Schaffen Sie Contingency-Budgets für unvorhergesehene Anforderungen oder regulatorische Änderungen\n• Entwickeln Sie Business Cases, die sowohl Compliance-Kosten als auch geschäftliche Vorteile berücksichtigen\n\n⚖️ Balance zwischen internen und externen Ressourcen:\n• Nutzen Sie externe Expertise für spezialisierte Bereiche und Spitzenlasten, während Sie interne Capabilities aufbauen\n• Investieren Sie in Training und Entwicklung interner Teams für langfristige Selbstständigkeit\n• Schaffen Sie Hybrid-Teams aus internen und externen Ressourcen für optimalen Wissenstransfer\n• Planen Sie schrittweise Reduzierung externer Abhängigkeiten durch Kompetenzaufbau\n• Berücksichtigen Sie kulturelle und organisatorische Faktoren bei der Ressourcenmischung\n\n🔄 Adaptive Ressourcenmanagement-Strategien:\n• Implementieren Sie regelmäßige Ressourcen-Reviews zur Anpassung an sich ändernde Anforderungen\n• Entwickeln Sie Szenarien für verschiedene Implementierungsgeschwindigkeiten und entsprechende Ressourcenanforderungen\n• Schaffen Sie Mechanismen für schnelle Ressourcenumverteilung bei kritischen Engpässen\n• Nutzen Sie Projektmanagement-Tools für Echtzeit-Visibility in Ressourcennutzung und -verfügbarkeit\n• Etablieren Sie Lessons-Learned-Prozesse für kontinuierliche Optimierung der Ressourcenplanung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie integriere ich DORA-Meilensteine in meine bestehende Unternehmensplanung und Governance?',
        answer: "Die Integration von DORA-Meilensteinen in bestehende Unternehmensstrukturen ist entscheidend für nachhaltigen Erfolg und organisatorische Akzeptanz. Durch strategische Einbettung in etablierte Planungs- und Governance-Prozesse schaffen Sie Synergien, reduzieren Komplexität und gewährleisten langfristige Compliance-Nachhaltigkeit.\n\n🏢 Integration in Corporate-Governance-Strukturen:\n• Verankern Sie DORA-Oversight in bestehenden Board- und Ausschuss-Strukturen anstatt separate Governance-Ebenen zu schaffen\n• Integrieren Sie DORA-Berichterstattung in regelmäßige Risikomanagement- und Compliance-Reports an das Management\n• Schaffen Sie klare Verbindungen zwischen DORA-Zielen und strategischen Unternehmenszielen\n• Nutzen Sie bestehende Entscheidungsgremien für DORA-relevante Investitions- und Ressourcenentscheidungen\n• Etablieren Sie DORA-KPIs als Teil der regulären Management-Dashboards und Scorecards\n\n📅 Strategische Planungsintegration:\n• Synchronisieren Sie DORA-Meilensteine mit bestehenden Budgetplanungs- und Geschäftsplanungszyklen\n• Integrieren Sie DORA-Anforderungen in Ihre mittelfristige Unternehmensplanung und strategische Roadmaps\n• Berücksichtigen Sie DORA-Compliance bei der Bewertung und Priorisierung anderer strategischer Initiativen\n• Schaffen Sie Verbindungen zwischen DORA-Implementierung und anderen Transformationsprogrammen\n• Nutzen Sie bestehende Portfolio-Management-Prozesse für DORA-Projekt-Oversight\n\n🔄 Operative Planungsintegration:\n• Integrieren Sie DORA-Aktivitäten in bestehende Projektmanagement-Frameworks und -Tools\n• Synchronisieren Sie DORA-Timelines mit anderen regulatorischen und Compliance-Projekten\n• Nutzen Sie etablierte Change-Management-Prozesse für DORA-bedingte organisatorische Veränderungen\n• Integrieren Sie DORA-Testing-Anforderungen in bestehende IT- und Risikomanagement-Zyklen\n• Schaffen Sie Verbindungen zwischen DORA-Monitoring und bestehenden operationellen Überwachungssystemen\n\n📊 Performance-Management-Integration:\n• Integrieren Sie DORA-Ziele in individuelle und Team-Leistungsziele relevanter Mitarbeiter\n• Schaffen Sie DORA-spezifische KPIs, die in bestehende Balanced-Scorecard-Frameworks passen\n• Nutzen Sie bestehende Incentive-Strukturen zur Förderung von DORA-Compliance-Verhalten\n• Integrieren Sie DORA-Erfolge in Mitarbeiteranerkennung und -belohnungsprogramme\n• Schaffen Sie Karriereentwicklungspfade, die DORA-Expertise und -Erfahrung wertschätzen\n\n🎯 Kommunikations- und Stakeholder-Management:\n• Nutzen Sie bestehende Kommunikationskanäle und -formate für DORA-Updates und -Kommunikation\n• Integrieren Sie DORA-Themen in regelmäßige All-Hands-Meetings und Townhalls\n• Schaffen Sie DORA-Inhalte für bestehende interne Newsletter und Kommunikationsplattformen\n• Nutzen Sie etablierte Stakeholder-Management-Prozesse für DORA-relevante externe Kommunikation\n• Integrieren Sie DORA-Erfolgsgeschichten in bestehende interne Erfolgs- und Best-Practice-Sharing-Formate"
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
