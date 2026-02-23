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
    console.log('Updating ESG Strategie & Governance page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie-governance-leitbildentwicklung-stakeholder-dialog-verankerung-in-unternehmenszielen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir ESG-Transformation als Innovationsmotor nutzen und dabei neue Geschäftsmodelle und Marktchancen entwickeln?",
        answer: "ESG-Transformation bietet einzigartige Möglichkeiten zur Geschäftsmodellinnovation und Erschließung neuer Märkte. Anstatt Nachhaltigkeit als Kostenfaktor zu betrachten, können Unternehmen ESG-Anforderungen als Katalysator für Innovation nutzen und dabei Wettbewerbsvorteile sowie neue Wertschöpfungsquellen schaffen.\n\n🚀 ESG als Innovationstreiber:\n• Circular Economy Opportunities: Entwicklung von Kreislaufwirtschaftsmodellen, die Abfall zu Ressourcen transformieren und neue Revenue Streams generieren.\n• Sustainable Technology Development: Innovation in Clean Tech, GreenTech und nachhaltige Materialien als Basis für neue Produktlinien und Marktpositionen.\n• Purpose-driven Customer Engagement: Entwicklung nachhaltiger Produkte und Services, die steigender Kundennachfrage nach verantwortungsvollem Konsum entsprechen.\n• ESG-enabled Partnerships: Neue Kooperationsformen mit Startups, NGOs und anderen Unternehmen zur gemeinsamen Entwicklung nachhaltiger Lösungen.\n\n💡 ADVISORIs Innovation-through-ESG-Framework:\n• ESG-Innovation-Pipeline: Systematische Identifikation und Bewertung von Innovationsmöglichkeiten, die aus ESG-Anforderungen entstehen.\n• Sustainability-Business-Model-Canvas: Angepasste Business Model Entwicklung, die ESG-Wertschöpfung in den Kern des Geschäftsmodells integriert.\n• Market-Entry-Strategy: Strategische Planung für Markteintritt in aufkommende nachhaltige Märkte mit First-Mover-Advantages.\n• Innovation-Partnerships: Aufbau strategischer Allianzen zur gemeinsamen Entwicklung und Skalierung nachhaltiger Innovationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen entstehen bei der ESG-Integration in Familienunternehmen und mittelständische Betriebe, und wie können wir maßgeschneiderte Lösungen entwickeln?",
        answer: "Familienunternehmen und mittelständische Betriebe stehen vor einzigartigen ESG-Herausforderungen, die sich von denen großer Konzerne unterscheiden. Begrenzte Ressourcen, persönliche Beziehungen und langfristige Perspektiven schaffen spezifische Anforderungen, die maßgeschneiderte ESG-Ansätze erfordern, die gleichzeitig pragmatisch und ambitioniert sind.\n\n🏘️ Spezifika von ESG in Familienunternehmen:\n• Ressourcen-Constraints: Begrenzte finanzielle und personelle Ressourcen erfordern effiziente, kostengünstige ESG-Lösungen mit hoher Wirkung.\n• Generationenübergreifende Perspektiven: Balance zwischen traditionellen Werten und modernen Nachhaltigkeitsanforderungen über verschiedene Generationen hinweg.\n• Stakeholder-Proximity: Enge Beziehungen zu lokalen Gemeinschaften, Mitarbeitern und Kunden schaffen besondere Verantwortung und Möglichkeiten.\n• Agile Decision-Making: Kürzere Entscheidungswege ermöglichen schnellere ESG-Implementation, erfordern aber klare Strukturen.\n\n🎯 ADVISORIs Mittelstand-ESG-Strategie:\n• Pragmatic-Materiality-Assessment: Fokussierung auf ESG-Themen mit höchster Relevanz und Umsetzbarkeit für mittelständische Ressourcensituation.\n• Family-Values-Integration: Verknüpfung bestehender Familienunternehmenswerte mit ESG-Zielen zur Schaffung authentischer Nachhaltigkeitsstrategien.\n• Community-Centric-Approach: Entwicklung von ESG-Initiativen, die lokale Verankerung stärken und regionale Wertschöpfung fördern.\n• Scalable-Implementation: Stufenweise ESG-Einführung beginnend mit Quick Wins und gradueller Ausweitung basierend auf verfügbaren Kapazitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir ESG-Compliance proaktiv managen und dabei regulatorische Entwicklungen antizipieren, statt nur reaktiv zu agieren?",
        answer: "Proaktives ESG-Compliance-Management erfordert systematische Überwachung regulatorischer Entwicklungen, szenariobasierte Planung und adaptive Compliance-Frameworks. Anstatt auf neue Regelungen zu reagieren, können Unternehmen durch vorausschauende Compliance Wettbewerbsvorteile erzielen und Implementierungskosten reduzieren.\n\n📡 Elemente proaktiven ESG-Compliance-Managements:\n• Regulatory Intelligence Systems: Kontinuierliche Überwachung und Analyse emerging Regulations in verschiedenen Jurisdiktionen mit Impact-Assessment.\n• Scenario-based Compliance Planning: Entwicklung von Compliance-Strategien für verschiedene regulatorische Entwicklungsszenarien.\n• Early-Adoption-Strategy: Freiwillige Implementierung best practices vor verbindlichen Anforderungen zur Vorbereitung und Wettbewerbsdifferenzierung.\n• Cross-functional Compliance Teams: Integration von Legal, Risk, Operations und Strategy Teams für ganzheitliches Compliance-Management.\n\n⚡ ADVISORIs Proactive-Compliance-Framework:\n• Regulatory-Radar-System: Aufbau systematischer Monitoring-Prozesse für ESG-Regulierungen mit automatisierten Alerts und Impact-Bewertungen.\n• Forward-Looking-Gap-Analysis: Bewertung aktueller ESG-Capabilities gegen erwartete zukünftige Anforderungen zur frühzeitigen Identifikation von Handlungsbedarfen.\n• Adaptive-Compliance-Architecture: Design flexibler Compliance-Strukturen, die schnelle Anpassung an neue regulatorische Anforderungen ermöglichen.\n• Industry-Leadership-Positioning: Strategische Positionierung als ESG-Vorreiter durch proaktive Compliance und thought leadership in regulatorischen Diskussionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt Boardroom-Governance bei der ESG-Transformation, und wie können wir Aufsichtsräte und Vorstände optimal einbinden?",
        answer: "Effektive ESG-Transformation erfordert starke Boardroom-Governance mit klaren Rollen, Verantwortlichkeiten und Kompetenzen auf höchster Führungsebene. Aufsichtsräte und Vorstände müssen von passiven Überwachern zu aktiven Gestaltern der ESG-Strategie werden, was strukturelle und kulturelle Veränderungen in der Corporate Governance erfordert.\n\n🏛️ Kritische Boardroom-ESG-Governance-Elemente:\n• ESG-Kompetenz-Development: Systematische Weiterbildung von Board-Mitgliedern in ESG-Themen zur Befähigung fundierter strategischer Entscheidungen.\n• ESG-Committee-Strukturen: Etablierung spezialisierter Board-Komitees für ESG-Themen mit definierten Mandaten und Berichtslinien.\n• Executive-Compensation-Integration: Verknüpfung von ESG-Performance mit Executive Vergütung zur Sicherstellung strategischer Prioritätensetzung.\n• Stakeholder-Governance: Strukturierte Integration von Stakeholder-Perspektiven in Board-Entscheidungsprozesse.\n\n🎯 ADVISORIs Boardroom-ESG-Excellence-Ansatz:\n• Board-ESG-Readiness-Assessment: Bewertung aktueller ESG-Kompetenzen und -Strukturen auf Board-Ebene mit Entwicklungsempfehlungen.\n• Executive-Education-Programme: Maßgeschneiderte ESG-Schulungen für Board-Mitglieder zur Entwicklung strategischer ESG-Führungskapazitäten.\n• Governance-Structure-Optimization: Design optimaler Board-Strukturen für ESG-Oversight mit klaren Rollen und Verantwortlichkeiten.\n• Performance-Integration-Framework: Entwicklung von Systemen zur Integration von ESG-Performance in Board-Reporting und Executive-Bewertung."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
