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
    console.log('Updating ISO 27001 Kaufen page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-kaufen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-kaufen" not found')
    }
    
    // Create new FAQs for implementation planning and risk management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie plant man die optimale Implementierungsstrategie für ISO 27001 Service-Beschaffung?',
        answer: "Eine strategische Implementierungsplanung für ISO 27001 Services maximiert Projekterfolg, minimiert Risiken und gewährleistet nachhaltige Compliance-Ergebnisse. Durchdachte Planung berücksichtigt organisatorische Gegebenheiten, Ressourcenverfügbarkeit und Change-Management-Anforderungen für optimale Umsetzung.\n\n🎯 Strategische Roadmap-Entwicklung:\n• Umfassende Analyse der aktuellen Sicherheitslage und Identifikation von Gap-Bereichen für zielgerichtete Implementierung\n• Entwicklung phasenorientierter Umsetzungspläne mit klaren Meilensteinen und Erfolgskriterien\n• Priorisierung kritischer Compliance-Bereiche basierend auf Risikobewertung und Business-Impact\n• Integration der ISO 27001 Implementierung in bestehende Geschäftsprozesse und strategische Initiativen\n• Berücksichtigung regulatorischer Deadlines und Compliance-Anforderungen in der Zeitplanung\n\n📊 Ressourcen- und Kapazitätsplanung:\n• Realistische Bewertung interner Ressourcen und Identifikation von Skill-Gaps für externe Unterstützung\n• Optimale Allokation von Budget, Personal und Zeitressourcen über den gesamten Implementierungszeitraum\n• Entwicklung flexibler Ressourcen-Modelle für Anpassung an sich ändernde Anforderungen\n• Berücksichtigung von Seasonal-Faktoren und Business-Zyklen in der Ressourcenplanung\n• Aufbau interner Kompetenzen parallel zur externen Service-Nutzung für nachhaltige Capabilities\n\n🔄 Change-Management und Stakeholder-Engagement:\n• Entwicklung umfassender Change-Management-Strategien für organisatorische Transformation\n• Systematisches Stakeholder-Mapping und Engagement-Planung auf allen Organisationsebenen\n• Kommunikationsstrategien für Awareness-Building und Buy-in-Generierung\n• Training- und Schulungsprogramme für betroffene Mitarbeiter und Führungskräfte\n• Integration von Feedback-Mechanismen und kontinuierlicher Verbesserung in den Change-Prozess\n\n⚖️ Risikomanagement und Contingency-Planung:\n• Identifikation und Bewertung von Implementierungsrisiken mit entsprechenden Mitigation-Strategien\n• Entwicklung von Backup-Plänen und alternativen Umsetzungsszenarien\n• Kontinuierliches Monitoring von Projektrisiken und proaktive Anpassung der Implementierungsstrategie\n• Integration von Lessons-Learned aus ähnlichen Projekten und Best-Practice-Ansätzen\n• Aufbau von Resilienz und Adaptionsfähigkeit in der Implementierungsplanung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Risikofaktoren sind bei der Beschaffung von ISO 27001 Services zu beachten?',
        answer: "Systematisches Risikomanagement bei ISO 27001 Service-Beschaffung schützt vor kostspieligen Fehlentscheidungen und gewährleistet erfolgreiche Implementierung. Proaktive Risikoidentifikation und -bewertung ermöglicht fundierte Entscheidungen und effektive Mitigation-Strategien.\n\n⚠️ Vendor-spezifische Risiken:\n• Finanzielle Instabilität oder Geschäftsrisiken des Service-Providers mit potenziellen Auswirkungen auf Projektfortsetzung\n• Unzureichende fachliche Kompetenz oder Ressourcenengpässe beim Anbieter\n• Abhängigkeitsrisiken durch Single-Source-Strategien und mangelnde Vendor-Diversifikation\n• Kulturelle Inkompatibilität und Kommunikationsprobleme in der Zusammenarbeit\n• Reputationsrisiken durch Assoziation mit problematischen Service-Providern\n\n🔒 Compliance und Sicherheitsrisiken:\n• Unvollständige oder fehlerhafte Implementierung mit resultierenden Compliance-Gaps\n• Datenschutz- und Vertraulichkeitsrisiken durch externe Service-Provider\n• Cyber-Security-Risiken durch erweiterte Angriffsflächen\n• Regulatorische Risiken durch sich ändernde Compliance-Anforderungen\n• Audit-Risiken durch unzureichende Dokumentation oder Nachweisführung\n\n💰 Finanzielle und operative Risiken:\n• Kostenüberschreitungen durch Scope-Creep oder unvorhergesehene Komplexitäten\n• Zeitverzögerungen mit resultierenden Opportunity-Costs und Compliance-Risiken\n• Lock-in-Effekte durch proprietäre Lösungen oder langfristige Verträge\n• Hidden-Cost-Risiken durch unvollständige Kostentransparenz\n• ROI-Risiken durch unzureichende Wertrealisierung der Investition\n\n🎯 Strategische und organisatorische Risiken:\n• Misalignment zwischen Service-Angebot und tatsächlichen Geschäftsanforderungen\n• Change-Management-Risiken durch unzureichende organisatorische Vorbereitung\n• Wissenstransfer-Risiken mit resultierenden Abhängigkeiten\n• Skalierungsrisiken bei sich ändernden Geschäftsanforderungen\n• Integration-Risiken mit bestehenden Systemen und Prozessen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie entwickelt man effektive Governance-Strukturen für ISO 27001 Service-Partnerschaften?',
        answer: "Robuste Governance-Strukturen bilden das Fundament erfolgreicher ISO 27001 Service-Partnerschaften und gewährleisten strategische Alignment, operative Exzellenz und kontinuierliche Wertschöpfung. Durchdachte Governance schafft Transparenz, Accountability und effektive Entscheidungsprozesse.\n\n🏛️ Strategische Governance-Architektur:\n• Etablierung hierarchischer Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungskompetenzen\n• Definition von Executive-Level-Steering-Committees für strategische Oversight und Richtungsentscheidungen\n• Operative Governance-Gremien für tägliches Management und Problemlösung\n• Cross-funktionale Teams für spezifische Themen und Projekte\n• Integration in bestehende Corporate-Governance-Strukturen und Compliance-Frameworks\n\n📋 Entscheidungsprozesse und Eskalationsmechanismen:\n• Klare Definition von Entscheidungsauthoritäten und Approval-Prozessen\n• Strukturierte Eskalationspfade für verschiedene Arten von Issues und Entscheidungen\n• Standardisierte Meeting-Rhythmen und Reporting-Zyklen\n• Dokumentierte Entscheidungsprozesse für Transparenz und Nachvollziehbarkeit\n• Konfliktlösungsmechanismen für effektive Problembearbeitung\n\n📊 Performance-Management und Monitoring:\n• Umfassende KPI-Frameworks für kontinuierliche Performance-Überwachung\n• Regelmäßige Business-Reviews und Strategic-Alignment-Assessments\n• Balanced-Scorecard-Ansätze für ganzheitliche Performance-Bewertung\n• Trend-Analysen und Predictive-Indicators für proaktives Management\n• Benchmarking gegen Marktstandards und Best-Practice-Vergleiche\n\n🤝 Stakeholder-Management und Kommunikation:\n• Systematisches Stakeholder-Mapping und Engagement-Strategien\n• Strukturierte Kommunikationspläne für verschiedene Zielgruppen\n• Feedback-Mechanismen für bidirektionale Kommunikation\n• Change-Management-Integration für organisatorische Transformation\n• Transparenz-Initiativen für Vertrauen und Glaubwürdigkeit\n\n🔄 Kontinuierliche Verbesserung und Evolution:\n• Regelmäßige Governance-Reviews und Optimierungsinitiativen\n• Integration von Lessons-Learned und Best-Practice-Sharing\n• Anpassung an sich ändernde Geschäftsanforderungen und Marktbedingungen\n• Innovation-Förderung und Experimentier-Räume\n• Zukunftsorientierte Governance-Evolution für langfristige Relevanz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Best Practices gelten für die Verhandlung von ISO 27001 Service-Verträgen?',
        answer: "Erfolgreiche Vertragsverhandlungen für ISO 27001 Services erfordern strategische Vorbereitung, fachliche Expertise und geschickte Verhandlungsführung. Durchdachte Verhandlungsstrategien sichern optimale Konditionen, faire Risikoverteilung und langfristige Partnerschaftsqualität.\n\n🎯 Strategische Verhandlungsvorbereitung:\n• Umfassende Marktanalyse und Benchmarking für realistische Verhandlungsposition\n• Klare Definition von Must-Haves, Nice-to-Haves und No-Gos für fokussierte Verhandlungen\n• Entwicklung von BATNA-Strategien und alternativen Verhandlungsoptionen\n• Interne Alignment über Verhandlungsziele und Kompromissbereitschaft\n• Aufbau von Verhandlungsteams mit komplementären Expertisen und Rollen\n\n💼 Verhandlungstaktiken und Strategien:\n• Win-Win-Orientierung für nachhaltige Partnerschaftsqualität\n• Value-based-Negotiation mit Fokus auf Gesamtwert statt nur Preis\n• Paket-Verhandlungen für Synergieeffekte und bessere Konditionen\n• Zeitliche Staffelung von Verhandlungsthemen für optimale Ergebnisse\n• Kreative Lösungsansätze für scheinbar unvereinbare Positionen\n\n📋 Vertragsinhalte und Klauseln:\n• Präzise Service-Definitionen und Leistungsumfänge für Klarheit und Nachvollziehbarkeit\n• Ausgewogene SLA-Strukturen mit realistischen aber anspruchsvollen Performance-Standards\n• Flexible Change-Management-Klauseln für Anpassung an sich ändernde Anforderungen\n• Faire Risikoteilung und Haftungsregelungen\n• Intellectual-Property-Schutz und Vertraulichkeitsvereinbarungen\n\n⚖️ Risikomanagement und Absicherung:\n• Umfassende Force-Majeure-Klauseln für unvorhersehbare Ereignisse\n• Eskalations- und Konfliktlösungsmechanismen\n• Exit-Strategien und Transition-Pläne für verschiedene Szenarien\n• Compliance-Garantien und regulatorische Absicherung\n• Versicherungs- und Bonding-Anforderungen für zusätzliche Sicherheit\n\n🔄 Langfristige Partnerschaftsgestaltung:\n• Governance-Strukturen und Relationship-Management-Prozesse\n• Kontinuierliche Verbesserung und Innovation-Klauseln\n• Renewal- und Extension-Optionen für Flexibilität\n• Benchmarking- und Market-Adjustment-Mechanismen\n• Strategic-Partnership-Entwicklung und Collaboration-Frameworks"
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
