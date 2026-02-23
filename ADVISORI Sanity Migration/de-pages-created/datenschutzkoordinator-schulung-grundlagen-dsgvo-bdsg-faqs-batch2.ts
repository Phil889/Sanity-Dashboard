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
    console.log('Updating Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-grundlagen-dsgvo-bdsg" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können Datenschutzkoordinatoren durch eine fundierte Grundausbildung zur digitalen Transformation ihres Unternehmens beitragen?",
        answer: "Datenschutzkoordinatoren mit einer soliden DSGVO/BDSG-Grundausbildung werden zu Schlüsselakteuren der digitalen Transformation, da sie die rechtlichen Rahmenbedingungen für datengetriebene Innovationen schaffen und gleichzeitig Compliance-Risiken minimieren. Ihre Expertise ermöglicht es Unternehmen, digitale Chancen zu nutzen, ohne rechtliche Fallstricke zu übersehen.\n\n🚀 Datenschutz als Enabler der digitalen Transformation:\n• Innovation unter Rechtssicherheit: Kompetente Datenschutzkoordinatoren ermöglichen datenbasierte Geschäftsmodelle durch frühzeitige Risikobewertung und Compliance-Design.\n• Vertrauensaufbau bei Stakeholdern: Professioneller Datenschutz schafft Vertrauen bei Kunden, Partnern und Investoren und erleichtert digitale Geschäftsentwicklung.\n• Internationale Marktfähigkeit: DSGVO-Compliance als Türöffner für europäische und globale Märkte mit hohen Datenschutzstandards.\n• Competitive Advantage: Datenschutz-Excellence als Differenzierungsmerkmal gegenüber weniger professionell aufgestellten Wettbewerbern.\n\n💡 ADVISORIs transformationsorientierter Schulungsansatz:\n• Digital-First Mindset: Vermittlung eines Verständnisses für digitale Geschäftsmodelle und deren datenschutzrechtliche Implikationen.\n• Agile Compliance-Methoden: Training in flexiblen Compliance-Ansätzen, die mit der Geschwindigkeit digitaler Innovation Schritt halten.\n• Cross-funktionale Zusammenarbeit: Entwicklung von Kommunikations- und Kollaborationsfähigkeiten für die Arbeit mit IT, Marketing und Produktentwicklung.\n• Technology Assessment: Befähigung zur Bewertung neuer Technologien hinsichtlich ihrer datenschutzrechtlichen Auswirkungen und Gestaltungsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche praktischen Herausforderungen entstehen bei der Implementierung von Privacy by Design und wie unterstützt ADVISORI dabei?",
        answer: "Privacy by Design stellt einen Paradigmenwechsel dar, der von Datenschutzkoordinatoren verlangt, Datenschutzprinzipien bereits in der Konzeptionsphase von Produkten und Prozessen zu verankern. Diese proaktive Herangehensweise erfordert neue Kompetenzen und Arbeitsweisen, die über traditionelle Compliance hinausgehen.\n\n🔧 Praktische Herausforderungen bei Privacy by Design:\n• Frühe Einbindung in Entwicklungsprozesse: Integration von Datenschutzüberlegungen in agile Entwicklungszyklen und kontinuierliche Beratung von Produktteams.\n• Technisches Verständnis: Bewertung von Systemarchitekturen, Verschlüsselungsverfahren und anderen technischen Datenschutzmaßnahmen.\n• Business-Relevanz kommunizieren: Übersetzung technischer Datenschutzanforderungen in verständliche Geschäftsvorteile und Risikominderungen.\n• Ressourcenallokation: Rechtfertigung von Datenschutzinvestitionen gegenüber anderen Geschäftsprioritäten.\n\n⚙️ ADVISORIs praxisorientierter Privacy by Design Ansatz:\n• Design Thinking für Datenschutz: Vermittlung kreativer Problemlösungsmethoden zur Integration von Datenschutz in Innovationsprozesse.\n• Technical Literacy: Aufbau grundlegender technischer Kenntnisse für die kompetente Bewertung und Gestaltung datenschutzfreundlicher Systeme.\n• Stakeholder Management: Training in der Führung multidisziplinärer Teams und der Moderation zwischen verschiedenen Interessensgruppen.\n• ROI-Argumentation: Entwicklung von Business Cases für Datenschutzinvestitionen mit quantifizierbaren Nutzenargumenten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können Datenschutzkoordinatoren effektive Schulungs- und Awareness-Programme für verschiedene Zielgruppen im Unternehmen entwickeln?",
        answer: "Die Entwicklung zielgruppenspezifischer Datenschutz-Schulungsprogramme ist eine Kernkompetenz erfolgreicher Datenschutzkoordinatoren. Verschiedene Unternehmensbereiche haben unterschiedliche Berührungspunkte mit Datenschutz und benötigen daher maßgeschneiderte Bildungsansätze für maximale Wirksamkeit.\n\n🎯 Zielgruppenspezifische Schulungsherausforderungen:\n• Führungsebene: Fokus auf strategische Risiken, Compliance-Kosten und Geschäftschancen durch professionellen Datenschutz.\n• IT-Abteilung: Technische Implementierung von Datenschutzmaßnahmen, Systemsicherheit und Privacy-Engineering.\n• Marketing und Vertrieb: Rechtskonforme Datennutzung für Kundenakquise und -betreuung unter Wahrung der Betroffenenrechte.\n• HR-Bereich: Mitarbeiterdatenschutz, Bewerbermanagement und arbeitsrechtliche Besonderheiten.\n\n📚 ADVISORIs didaktisches Schulungskonzept:\n• Lerntyp-gerechte Methoden: Kombination verschiedener Lernformate (E-Learning, Workshops, Simulationen) für optimale Wissensvermittlung.\n• Gamification-Elemente: Integration spielerischer Elemente zur Steigerung von Engagement und Lernmotivation.\n• Microlearning-Ansätze: Aufbereitung komplexer Inhalte in verdauliche Lerneinheiten für nachhaltigen Wissenstransfer.\n• Kontinuierliche Evaluation: Messung der Schulungseffektivität durch Assessments und Verhaltensbeobachtung mit kontinuierlicher Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt die internationale Dimension des Datenschutzes in der Grundausbildung von Datenschutzkoordinatoren?",
        answer: "Die Globalisierung der Geschäftstätigkeit macht internationale Datenschutzkompetenzen für Datenschutzkoordinatoren unerlässlich. Grenzüberschreitende Datenflüsse, verschiedene Rechtssysteme und kulturelle Unterschiede im Datenschutzverständnis erfordern eine erweiterte Perspektive über nationale Grenzen hinaus.\n\n🌍 Internationale Datenschutz-Dimensionen:\n• Adequacy Decisions: Verständnis der EU-Angemessenheitsbeschlüsse und deren Auswirkungen auf internationale Datentransfers.\n• Standard Contractual Clauses: Praktische Anwendung und Verhandlung von Standardvertragsklauseln für sichere Datenübermittlungen.\n• Multi-jurisdiktionale Compliance: Navigation zwischen verschiedenen nationalen Datenschutzgesetzen bei internationaler Geschäftstätigkeit.\n• Cultural Sensitivity: Berücksichtigung kultureller Unterschiede im Datenschutzverständnis bei globalen Implementierungen.\n\n🗺️ ADVISORIs internationale Perspektive:\n• Comparative Law Approach: Systematischer Vergleich verschiedener Datenschutzregime für fundierte Compliance-Entscheidungen.\n• Global Best Practices: Integration internationaler Erfahrungen und bewährter Praktiken in die deutsche Datenschutzpraxis.\n• Cross-Border Collaboration: Training in der Zusammenarbeit mit internationalen Teams und Aufsichtsbehörden.\n• Future-Proofing: Vorbereitung auf kommende internationale Entwicklungen und deren potenzielle Auswirkungen auf die Datenschutzpraxis."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
