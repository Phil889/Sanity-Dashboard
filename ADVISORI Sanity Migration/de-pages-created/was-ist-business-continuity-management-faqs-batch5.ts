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
    console.log('Updating Business Continuity Management page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-business-continuity-management" not found')
    }
    
    // Create new FAQs for future trends and strategic considerations
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche zukünftigen Trends und Entwicklungen prägen das Business Continuity Management?',
        answer: "Das Business Continuity Management entwickelt sich kontinuierlich weiter, getrieben von technologischen Innovationen, veränderten Bedrohungslandschaften und neuen Geschäftsmodellen. Zukunftsorientierte BCM-Strategien müssen diese Trends antizipieren und proaktiv integrieren, um nachhaltige Resilienz zu gewährleisten.\n\n🤖 Künstliche Intelligenz und Automatisierung:\n• Integration von KI-basierten Systemen für predictive analytics und Früherkennung von Störungsrisiken\n• Automatisierte Incident Response und Recovery-Prozesse durch intelligente Orchestrierung\n• Machine Learning für kontinuierliche Optimierung von BCM-Strategien basierend auf historischen Daten\n• Chatbots und virtuelle Assistenten für BCM-Support und Mitarbeiterschulungen\n• Automatisierte Compliance-Überwachung und Reporting durch intelligente Systeme\n\n🌐 Hypervernetzte und digitale Ökosysteme:\n• Zunehmende Komplexität durch Cloud-native Architekturen und Microservices\n• BCM für Internet of Things und Edge Computing Umgebungen\n• Resilienz in hybriden und Multi-Cloud-Infrastrukturen\n• Abhängigkeitsmanagement in komplexen digitalen Lieferketten\n• Cyber-physische Systeme und deren spezifische BCM-Anforderungen\n\n🔮 Emerging Risks und Black Swan Events:\n• Klimawandel und extreme Wetterereignisse als neue Normalität\n• Geopolitische Instabilität und deren Auswirkungen auf globale Lieferketten\n• Pandemien und andere Gesundheitskrisen als permanente Risikofaktoren\n• Cyber-Warfare und staatlich gesponserte Angriffe auf kritische Infrastrukturen\n• Quantencomputing und dessen Auswirkungen auf Verschlüsselung und Sicherheit\n\n📱 Neue Arbeitsmodelle und Organisationsformen:\n• Permanente Remote- und Hybrid-Arbeitsmodelle in BCM-Strategien\n• Resilienz für dezentrale und agile Organisationsstrukturen\n• BCM für Gig Economy und flexible Arbeitsverträge\n• Kontinuität in virtuellen Teams und digitalen Kollaborationsumgebungen\n• Neue Herausforderungen für Unternehmenskultur und Mitarbeiterbindung\n\n🌱 Nachhaltigkeit und ESG-Integration:\n• Integration von Environmental, Social und Governance Faktoren in BCM\n• Nachhaltige Resilienz und Circular Economy Prinzipien\n• Klimaresilienz als integraler Bestandteil von BCM-Strategien\n• Stakeholder-Erwartungen bezüglich nachhaltiger Geschäftspraktiken\n• Regulatorische Entwicklungen zu Nachhaltigkeitsberichterstattung und BCM"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie kann man BCM-Kosten optimieren und den Return on Investment maximieren?',
        answer: "Die Optimierung von BCM-Kosten und Maximierung des Return on Investment erfordert einen strategischen, datenbasierten Ansatz, der Geschäftswert, Risikominimierung und operative Effizienz in Einklang bringt. Erfolgreiche BCM-Investitionen schaffen messbaren Mehrwert und rechtfertigen sich durch vermiedene Verluste und Wettbewerbsvorteile.\n\n💰 Strategische Investitionsplanung:\n• Risikobasierte Priorisierung von BCM-Investitionen basierend auf Business Impact Analysis\n• Entwicklung eines mehrjährigen BCM-Investitionsplans mit klaren Meilensteinen und ROI-Zielen\n• Integration von BCM-Budgetierung in strategische Unternehmensplanung und Kapitalallokation\n• Berücksichtigung von Total Cost of Ownership für verschiedene BCM-Lösungen und Ansätze\n• Aufbau eines Business Case mit quantifizierten Nutzen und Kosteneinsparungen\n\n📊 Kostenoptimierung durch Effizienz:\n• Standardisierung und Automatisierung von BCM-Prozessen zur Reduzierung manueller Aufwände\n• Konsolidierung von BCM-Tools und Plattformen zur Vermeidung von Redundanzen\n• Outsourcing nicht-kritischer BCM-Aktivitäten an spezialisierte Dienstleister\n• Shared Services Modelle für BCM-Funktionen in größeren Organisationen\n• Lean BCM Ansätze zur Eliminierung von Verschwendung und ineffizienten Prozessen\n\n🔄 Synergien und Integration:\n• Integration von BCM mit bestehenden Managementsystemen zur Kostenteilung\n• Nutzung bestehender IT-Infrastrukturen und Sicherheitssysteme für BCM-Zwecke\n• Kombination von BCM-Tests mit anderen Compliance-Aktivitäten und Audits\n• Cross-funktionale Teams zur Maximierung von Expertise und Ressourcennutzung\n• Gemeinsame Nutzung von BCM-Ressourcen zwischen verschiedenen Geschäftsbereichen\n\n📈 Messbare Wertschöpfung:\n• Quantifizierung vermiedener Verluste durch effektive BCM-Maßnahmen\n• Dokumentation von Kosteneinsparungen durch reduzierte Ausfallzeiten und verbesserte Recovery-Zeiten\n• Positive Auswirkungen auf Versicherungsprämien und Finanzierungskonditionen\n• Wettbewerbsvorteile durch demonstrierte Resilienz und Zuverlässigkeit\n• Kundenbindung und Neukundengewinnung durch BCM-basierte Differenzierung\n\n🎯 Performance-basierte Optimierung:\n• Kontinuierliches Monitoring von BCM-KPIs und Kostenkennzahlen\n• Benchmarking gegen Branchenstandards und Best Practices\n• Regelmäßige ROI-Analysen und Anpassung der BCM-Investitionsstrategie\n• Value Engineering Ansätze zur kontinuierlichen Kostenoptimierung\n• Agile BCM-Implementierung mit iterativen Verbesserungen und schnellen Erfolgen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Herausforderungen gibt es bei der globalen BCM-Implementierung in multinationalen Unternehmen?',
        answer: "Die globale BCM-Implementierung in multinationalen Unternehmen bringt komplexe Herausforderungen mit sich, die kulturelle, regulatorische, operative und technische Aspekte umfassen. Erfolgreiche globale BCM-Programme erfordern einen ausgewogenen Ansatz zwischen Standardisierung und lokaler Anpassung.\n\n🌍 Regulatorische und rechtliche Komplexität:\n• Unterschiedliche BCM-Anforderungen und Standards in verschiedenen Jurisdiktionen\n• Compliance mit lokalen Gesetzen, Vorschriften und Aufsichtsbehörden\n• Datenschutz und grenzüberschreitende Datenübertragung in BCM-Kontexten\n• Unterschiedliche Haftungs- und Versicherungsanforderungen in verschiedenen Ländern\n• Koordination mit lokalen Behörden und Notfalldiensten in verschiedenen Regionen\n\n🏛️ Kulturelle und organisatorische Vielfalt:\n• Unterschiedliche Risikokulturen und Einstellungen zu Geschäftskontinuität\n• Sprachbarrieren und Kommunikationsherausforderungen in globalen Teams\n• Verschiedene Geschäftspraktiken und Arbeitsweisen in lokalen Märkten\n• Zeitzonenunterschiede und deren Auswirkungen auf Koordination und Response\n• Lokale Feiertage, Arbeitszeiten und kulturelle Besonderheiten\n\n🔧 Operative und logistische Komplexität:\n• Koordination von BCM-Aktivitäten über verschiedene Standorte und Regionen\n• Standardisierung vs. Lokalisierung von BCM-Prozessen und Verfahren\n• Globale Lieferketten und deren komplexe Abhängigkeiten\n• Unterschiedliche Infrastrukturen und technische Möglichkeiten in verschiedenen Ländern\n• Herausforderungen bei der globalen Ressourcenallokation und Kostenteilung\n\n💻 Technische und IT-Herausforderungen:\n• Integration verschiedener IT-Systeme und Plattformen über Ländergrenzen hinweg\n• Unterschiedliche Technologiestandards und IT-Infrastrukturen\n• Netzwerklatenz und Konnektivitätsprobleme in globalen Systemen\n• Cybersecurity-Herausforderungen in heterogenen IT-Landschaften\n• Backup- und Recovery-Strategien für global verteilte Daten und Systeme\n\n🎯 Governance und Koordination:\n• Etablierung einheitlicher BCM-Governance-Strukturen über alle Standorte\n• Balance zwischen zentraler Kontrolle und lokaler Autonomie\n• Koordination zwischen regionalen BCM-Teams und globaler BCM-Funktion\n• Einheitliche Berichterstattung und Performance-Messung über alle Regionen\n• Change Management für globale BCM-Initiativen und kulturelle Transformation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickelt sich die Rolle des Chief Resilience Officers und BCM-Professionals?',
        answer: "Die Rolle des Chief Resilience Officers und anderer BCM-Professionals entwickelt sich von traditionellen Notfallplanern zu strategischen Beratern und Resilienz-Architekten. Diese Evolution spiegelt die wachsende Bedeutung von Geschäftskontinuität als strategischer Wettbewerbsvorteil und integraler Bestandteil der Unternehmensführung wider.\n\n🎯 Strategische Transformation der Rolle:\n• Entwicklung von operativen Planern zu strategischen Beratern für Geschäftsresilienz\n• Integration in Executive-Teams und Teilnahme an strategischen Entscheidungsprozessen\n• Verantwortung für organisationsweite Resilienz-Kultur und Change Management\n• Koordination zwischen verschiedenen Risiko- und Compliance-Funktionen\n• Aufbau von Resilienz als Kernkompetenz und Wettbewerbsdifferenzierung\n\n📚 Erweiterte Kompetenzanforderungen:\n• Technische BCM-Expertise kombiniert mit Geschäftsstrategie und Führungskompetenzen\n• Verständnis für digitale Transformation und emerging technologies\n• Kenntnisse in Datenanalyse, Risikoquantifizierung und Performance Management\n• Kommunikations- und Stakeholder-Management-Fähigkeiten\n• Projektmanagement und Change Management Expertise\n\n🔄 Neue Verantwortungsbereiche:\n• Enterprise Risk Management und integrierte Risikobetrachtung\n• Cyber-Resilienz und digitale Sicherheitsstrategien\n• Supply Chain Resilienz und Lieferantenmanagement\n• Klimaresilienz und Nachhaltigkeitsintegration\n• Krisenmanagement und Reputationsschutz\n\n🌐 Organisatorische Integration:\n• Direkte Berichtslinie an CEO oder COO für strategische Relevanz\n• Matrix-Organisation mit Verbindungen zu IT, Risk, Legal und Operations\n• Aufbau von BCM-Centers of Excellence und Kompetenznetzwerken\n• Integration in Governance-Strukturen und Board-Reporting\n• Koordination mit externen Partnern und Branchennetzwerken\n\n🚀 Zukunftsorientierte Entwicklung:\n• Aufbau von Antizipationsfähigkeiten für emerging risks und Megatrends\n• Integration von KI und Analytics in BCM-Entscheidungsfindung\n• Entwicklung von Resilienz-Innovationen und neuen BCM-Ansätzen\n• Thought Leadership und Beitrag zur Weiterentwicklung der BCM-Disziplin\n• Mentoring und Entwicklung der nächsten Generation von BCM-Professionals"
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
