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
    console.log('Updating EU AI Act Risk Management System page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-management-system' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-management-system" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie sollten wir als C-Suite die Kommunikation über unser KI-Risikomanagementsystem gegenüber verschiedenen Stakeholder-Gruppen gestalten?",
        answer: "Die strategische Kommunikation über KI-Risikomanagement erfordert eine differenzierte, stakeholder-spezifische Herangehensweise, die sowohl Vertrauen aufbaut als auch strategische Vorteile maximiert. Für die C-Suite ist es entscheidend, eine kohärente Kommunikationsstrategie zu entwickeln, die verschiedene Interessensgruppen anspricht und das Risikomanagement als Wettbewerbsvorteil positioniert.\n\n🎯 Stakeholder-spezifische Kommunikationsstrategien:\n• Investoren und Analysten: Fokus auf langfristige Werttreiber, Risikominderung und regulatorische Compliance als Stabilitätsfaktoren für nachhaltige Renditen.\n• Kunden und Geschäftspartner: Betonung von Vertrauenswürdigkeit, Qualität und ethischen Standards der KI-Systeme als Grundlage für sichere Geschäftsbeziehungen.\n• Regulierungsbehörden: Demonstrieren proaktiver Compliance-Ansätze und konstruktiver Zusammenarbeit bei der Entwicklung von Branchenstandards.\n• Mitarbeiter und interne Teams: Aufbau von Verständnis für die strategische Bedeutung und Rolle jedes Einzelnen im Risikomanagement-Ökosystem.\n• Medien und Öffentlichkeit: Positionierung als verantwortungsvoller Technologieführer mit gesellschaftlichem Bewusstsein.\n\n📢 ADVISORIs Strategic-Communication-Framework:\n• Einheitliche Narrative-Entwicklung: Aufbau einer konsistenten Geschichte über die Rolle von KI-Risikomanagement in der Unternehmensstrategie, die über alle Kommunikationskanäle hinweg kohärent ist.\n• Evidence-based Messaging: Entwicklung datengestützter Kommunikation, die konkrete Erfolge und Verbesserungen demonstriert statt nur Absichten zu kommunizieren.\n• Proaktive Transparency: Aufbau von Kommunikationsformaten, die proaktiv über Herausforderungen, Lernprozesse und Verbesserungen informieren.\n• Multi-Channel-Integration: Koordination der Kommunikation über verschiedene Kanäle und Touchpoints zur Maximierung der Reichweite und Konsistenz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche kritischen Erfolgsfaktoren sollten wir als Führungsebene im Auge behalten, um sicherzustellen, dass unser KI-Risikomanagementsystem langfristig erfolgreich ist?",
        answer: "Der langfristige Erfolg eines KI-Risikomanagementsystems hängt von verschiedenen kritischen Erfolgsfaktoren ab, die kontinuierliche Aufmerksamkeit und strategische Steuerung durch die C-Suite erfordern. Diese Faktoren gehen weit über die initiale Implementierung hinaus und umfassen organisatorische, technologische und strategische Dimensionen.\n\n🔑 Kritische Erfolgsfaktoren für nachhaltiges KI-Risikomanagement:\n• Kulturelle Verankerung: Entwicklung einer Unternehmenskultur, in der Risikobewusstsein und verantwortungsvolle KI-Entwicklung als Kernwerte etabliert sind.\n• Kontinuierliche Kompetenzentwicklung: Systematischer Aufbau und Erhalt von internen Fähigkeiten, die mit der Geschwindigkeit technologischer Entwicklung Schritt halten.\n• Adaptive Governance: Flexibilität der Governance-Strukturen, um sich an verändernde Risikoprofile und regulatorische Landschaften anzupassen.\n• Technologische Evolution: Kontinuierliche Modernisierung der Risikomanagement-Tools und -Methoden entsprechend dem Stand der Technik.\n• Stakeholder-Engagement: Aufrechterhaltung aktiver Beziehungen zu allen relevanten Stakeholder-Gruppen und Integration ihrer Erwartungen.\n\n💡 ADVISORIs Success-Monitoring-Framework:\n• Leading-Indicator-Tracking: Entwicklung von Frühwarnsystemen, die potenzielle Probleme identifizieren, bevor sie kritisch werden.\n• Competitive-Intelligence: Systematische Überwachung von Marktentwicklungen und Best Practices zur Sicherstellung der Wettbewerbsfähigkeit.\n• Innovation-Integration: Sicherstellung, dass neue KI-Technologien und -Anwendungen nahtlos in bestehende Risikomanagement-Frameworks integriert werden können.\n• Performance-Benchmarking: Regelmäßiger Vergleich mit Branchenführern und internationalen Standards zur Identifikation von Verbesserungspotenzialen.\n• Strategic-Alignment-Reviews: Periodische Überprüfung der Ausrichtung des Risikomanagements auf sich entwickelnde Geschäftsstrategien und Marktbedingungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir als Unternehmen von unserem KI-Risikomanagementsystem lernen, um unsere gesamte Organisationsresilienz zu stärken?",
        answer: "Die Erkenntnisse und Methoden aus dem KI-Risikomanagement können als strategischer Baustein für die Stärkung der gesamten Organisationsresilienz dienen. Für die C-Suite bietet dies die Möglichkeit, die Investitionen in KI-Risikomanagement zu nutzen, um breitere organisatorische Fähigkeiten aufzubauen, die das Unternehmen widerstandsfähiger gegen verschiedene Arten von Disruption machen.\n\n🔄 Übertragbare Resilienz-Prinzipien aus KI-Risikomanagement:\n• Systematische Risikoidentifikation: Methoden zur proaktiven Erkennung emerging risks können auf andere Geschäftsbereiche und Technologien angewendet werden.\n• Adaptive Response-Capabilities: Flexible Reaktionsmechanismen auf unvorhergesehene Entwicklungen als Blaupause für allgemeine Krisenresilienz.\n• Stakeholder-Integration: Erfahrungen bei der Koordination verschiedener interner und externer Akteure für komplexe Herausforderungen.\n• Evidenzbasierte Entscheidungsfindung: Datengetriebene Bewertungs- und Entscheidungsprozesse als Grundlage für andere strategische Bereiche.\n• Kontinuierliches Lernen: Systematische Erfassung und Integration von Erfahrungen als Grundlage für organisatorische Lernfähigkeit.\n\n🛡️ ADVISORIs Resilience-Transfer-Strategie:\n• Cross-Domain-Application: Systematische Analyse von KI-Risikomanagement-Praktiken auf ihre Anwendbarkeit in anderen Bereichen wie Cybersecurity, regulatorische Compliance oder operative Risiken.\n• Organizational Learning Integration: Aufbau von Mechanismen, die Erkenntnisse aus dem KI-Risikomanagement systematisch in andere Organisationsbereiche übertragen.\n• Capability-Generalization: Entwicklung generischer Fähigkeiten und Kompetenzen, die über KI-spezifische Anwendungen hinaus wertvoll sind.\n• Resilience-Architecture: Design organisatorischer Strukturen und Prozesse, die verschiedene Arten von Risiken und Disruptionen bewältigen können.\n• Strategic Preparedness: Aufbau von Antizipations- und Vorbereitungskapazitäten für zukünftige technologische und gesellschaftliche Veränderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristige Vision sollten wir als C-Suite für die Evolution unseres KI-Risikomanagementsystems in den nächsten 5-10 Jahren entwickeln?",
        answer: "Die Entwicklung einer langfristigen Vision für KI-Risikomanagement erfordert eine vorausschauende Perspektive, die technologische Entwicklungen, regulatorische Evolution und Geschäftsstrategie integriert. Für die C-Suite ist es entscheidend, ein zukunftssicheres Framework zu schaffen, das nicht nur heute relevant ist, sondern auch die Grundlage für zukünftige Herausforderungen und Chancen bildet.\n\n🔮 Zukunftsperspektiven für KI-Risikomanagement 2030+:\n• Autonome Risiko-Governance: Evolution zu selbstadaptierenden Systemen, die Risiken automatisch identifizieren, bewerten und Minderungsmaßnahmen vorschlagen.\n• Ecosystem-Integration: Nahtlose Integration von Risikomanagement über Unternehmensgrenzen hinweg in Branchen-Ökosysteme und Wertschöpfungsketten.\n• Predictive Risk Intelligence: Einsatz fortschrittlicher KI zur Vorhersage und Prävention von Risiken, bevor sie sich manifestieren.\n• Real-time Stakeholder-Transparency: Kontinuierliche, transparente Kommunikation von Risikostatus und -maßnahmen an alle relevanten Stakeholder.\n• Adaptive Regulatory-Compliance: Systeme, die sich automatisch an neue regulatorische Anforderungen anpassen und proaktiv Compliance sicherstellen.\n\n🚀 ADVISORIs Future-Vision-Framework:\n• Scenario-Planning-Integration: Entwicklung multipler Zukunftsszenarien und entsprechender strategischer Optionen für verschiedene technologische und regulatorische Entwicklungspfade.\n• Innovation-Roadmap-Alignment: Synchronisation der Risikomanagement-Evolution mit geplanten technologischen Innovationen und Geschäftsentwicklungen.\n• Capability-Evolution-Path: Definition klarer Entwicklungsstufen für organisatorische und technologische Fähigkeiten über die nächste Dekade.\n• Strategic-Partnership-Vision: Langfristige Partnerschaften und Allianzen zur gemeinsamen Entwicklung von Risikomanagement-Standards und -Innovationen.\n• Value-Creation-Trajectory: Kontinuierliche Evolution des Risikomanagements von Compliance-Tool zu strategischem Wertschöpfungsinstrument und Wettbewerbsdifferentiator."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
