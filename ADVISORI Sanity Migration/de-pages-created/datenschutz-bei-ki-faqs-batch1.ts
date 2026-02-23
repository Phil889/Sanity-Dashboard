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
    console.log('Updating Datenschutz bei KI page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutz-bei-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutz-bei-ki" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist Privacy-by-Design bei KI-Systemen mehr als nur eine Compliance-Anforderung und wie positioniert ADVISORI Datenschutz als strategischen Wettbewerbsvorteil?',
        answer: "Privacy-by-Design in KI-Systemen repräsentiert einen fundamentalen Paradigmenwechsel von reaktiver Compliance zu proaktiver Wertschöpfung. Für C-Level-Führungskräfte bedeutet dies nicht nur die Erfüllung regulatorischer Anforderungen, sondern die Schaffung nachhaltiger Wettbewerbsvorteile durch vertrauensvolle Kundenbeziehungen und risikominimierte AI-Innovation. ADVISORI versteht Datenschutz als strategischen Enabler für verantwortungsvolle KI-Adoption.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Vertrauensaufbau und Marktdifferenzierung: Datenschutzkonforme KI-Systeme schaffen Vertrauen bei Kunden und Stakeholdern, was zu stärkerer Marktpositionierung und Premium-Pricing führt.\n• Risikominimierung und Compliance-Sicherheit: Proaktive Privacy-by-Design-Ansätze reduzieren regulatorische Risiken und vermeiden kostspielige Datenschutzverletzungen oder Bußgelder.\n• Innovation ohne Kompromisse: Ermöglichung fortschrittlicher KI-Anwendungen unter Wahrung höchster Datenschutzstandards für nachhaltige Geschäftsentwicklung.\n• Zukunftssichere Investitionen: Privacy-by-Design-Architekturen sind flexibel genug, um sich an evolvierende Datenschutzanforderungen anzupassen.\n\n🛡️ Der ADVISORI-Ansatz für strategischen AI-Datenschutz:\n• Integrierte Datenschutz-Governance: Wir entwickeln KI-Systeme, die Datenschutz nicht als nachträgliche Ergänzung, sondern als fundamentales Designprinzip behandeln.\n• Geschäftswert-orientierte Compliance: Unsere Privacy-by-Design-Implementierungen maximieren sowohl Datenschutz als auch Geschäftsnutzen durch intelligente Architekturentscheidungen.\n• Stakeholder-Vertrauen als Asset: Transformation von Datenschutz-Compliance in einen messbaren Geschäftswert durch erhöhtes Kundenvertrauen und Marktglaubwürdigkeit.\n• Kontinuierliche Innovation: Entwicklung datenschutzfreundlicher KI-Lösungen, die technologische Führerschaft mit ethischer Verantwortung verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir die Investition in datenschutzkonforme KI-Systeme und welchen direkten Einfluss hat ADVISORI\'s Privacy-by-Design-Ansatz auf Unternehmenswert und Risikominimierung?',
        answer: "Die Investition in datenschutzkonforme KI-Systeme von ADVISORI ist ein strategischer Wertschöpfungshebel, der sowohl direkte Kosteneinsparungen als auch langfristige Wertsteigerungen generiert. Der Return on Investment manifestiert sich in reduzierten Compliance-Kosten, vermiedenen Bußgeldern, gesteigertem Kundenvertrauen und der Erschließung neuer Geschäftsmöglichkeiten durch vertrauensvolle AI-Innovation.\n\n💰 Direkter Einfluss auf Unternehmenswert und finanzielle Performance:\n• Risikominimierung und Kostenvermeidung: Privacy-by-Design-KI-Systeme reduzieren das Risiko kostspieliger Datenschutzverletzungen und regulatorischer Bußgelder erheblich.\n• Operational Excellence: Integrierte Datenschutzmaßnahmen optimieren Datenverarbeitungsprozesse und reduzieren operative Komplexität und Compliance-Overhead.\n• Marktpremium und Kundenbindung: Vertrauensvolle KI-Systeme ermöglichen Premium-Pricing und stärkere Kundenbindung durch nachweisbare Datenschutz-Excellence.\n• Investoren-Vertrauen: Demonstrierte Privacy-by-Design-Kompetenz stärkt ESG-Ratings und kann Unternehmensbewertungen positiv beeinflussen.\n\n📈 Strategische Werttreiber und Marktpositionierung:\n• Competitive Advantage: Unternehmen mit nachweislich datenschutzkonformen KI-Systemen können sich deutlich von Wettbewerbern differenzieren und Marktführerschaft etablieren.\n• Neue Geschäftsmöglichkeiten: Privacy-by-Design ermöglicht die Erschließung regulierter Märkte und sensibler Anwendungsbereiche, die anderen verschlossen bleiben.\n• Skalierbare Compliance: Einmal implementierte Privacy-by-Design-Architekturen skalieren kosteneffizient mit dem Geschäftswachstum.\n• Zukunftssichere Investitionen: Proaktive Datenschutz-Implementierungen sind weniger anfällig für regulatorische Änderungen und bieten langfristige Investitionssicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Die DSGVO und der EU AI Act schaffen komplexe Compliance-Anforderungen für KI-Systeme. Wie stellt ADVISORI sicher, dass unsere AI-Datenschutzstrategie sowohl aktuell compliant als auch zukunftssicher ist?',
        answer: "In einer sich schnell entwickelnden Regulierungslandschaft ist proaktive Multi-Regulierungs-Compliance nicht nur eine rechtliche Notwendigkeit, sondern ein strategischer Wettbewerbsvorteil. ADVISORI verfolgt einen vorausschauenden Ansatz, der nicht nur DSGVO und EU AI Act erfüllt, sondern auch zukünftige regulatorische Entwicklungen antizipiert und Ihr Unternehmen für eine sich wandelnde Rechtslandschaft optimal positioniert.\n\n🔄 Adaptive Multi-Regulierungs-Compliance als Kernprinzip:\n• Integrierte DSGVO-AI-Act-Compliance: Wir entwickeln KI-Systeme, die sowohl Datenschutz- als auch AI-spezifische Anforderungen nahtlos erfüllen und Synergien zwischen beiden Regulierungsrahmen nutzen.\n• Zukunftssichere Architektur-Prinzipien: Unsere Privacy-by-Design-Implementierungen basieren auf flexiblen, modularen Architekturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen.\n• Proaktive Governance-Integration: Etablierung robuster Datenschutz- und AI-Governance-Strukturen, die über Mindestanforderungen hinausgehen und als Best-Practice-Standard fungieren.\n• Kontinuierliche Compliance-Evolution: Implementierung von Systemen für kontinuierliche Überwachung und Anpassung an evolvierende Regulierungsanforderungen.\n\n🔍 ADVISORI's Regulatory Excellence Framework:\n• Regulatorische Früherkennung: Wir analysieren regulatorische Trends und Konsultationspapiere, um Ihnen einen Vorsprung bei der Compliance-Vorbereitung zu verschaffen.\n• Cross-Regulierungs-Optimierung: Entwicklung von Lösungen, die multiple Compliance-Anforderungen effizient erfüllen und Redundanzen vermeiden.\n• Stakeholder-Engagement: Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden für frühzeitige Einblicke in regulatorische Entwicklungen.\n• Internationale Harmonisierung: Unterstützung bei der Navigation komplexer internationaler Datenschutz- und AI-Regulierungslandschaften für global agierende Unternehmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI KI-Datenschutz von einem Kostenfaktor zu einem strategischen Geschäftsenablement und welche konkreten Wettbewerbsvorteile entstehen durch unsere Privacy-by-Design-Implementierung?',
        answer: "ADVISORI positioniert KI-Datenschutz nicht als regulatorische Belastung, sondern als fundamentalen Geschäftstransformations-Katalysator. Unser Ansatz verwandelt Privacy-by-Design-Investitionen in strategische Wachstumsmotoren, die neue Geschäftsmöglichkeiten erschließen, Marktvertrauen schaffen und nachhaltige Wettbewerbsvorteile generieren, während gleichzeitig höchste Datenschutzstandards gewährleistet werden.\n\n🚀 Von Compliance zu Geschäftsinnovation:\n• Vertrauensbasierte Geschäftsmodelle: Privacy-by-Design ermöglicht völlig neue Geschäftsmodelle, die auf Vertrauen und Datenschutz-Excellence basieren und Premium-Positionierung im Markt ermöglichen.\n• Marktexpansion durch Compliance: Datenschutzkonforme KI-Systeme erschließen regulierte Märkte und sensible Anwendungsbereiche, die Wettbewerbern verschlossen bleiben.\n• Innovation durch Constraint: Datenschutz-Constraints fördern kreative technische Lösungen, die oft zu überlegenen und effizienteren KI-Architekturen führen.\n• Stakeholder-Vertrauen als Asset: Nachweisbare Datenschutz-Excellence wird zu einem messbaren Unternehmenswert, der Kundenakquisition und -bindung stärkt.\n\n💡 ADVISORI's Business-Value-Privacy Framework:\n• Wertschöpfungsketten-Integration: Analyse und Optimierung Ihrer gesamten Wertschöpfungskette durch datenschutzkonforme KI-Integration, die neue Effizienz- und Qualitätspotenziale erschließt.\n• Datenvertrauen-Monetarisierung: Entwicklung von Ansätzen zur Monetarisierung des durch Privacy-by-Design geschaffenen Datenvertrauens und der Compliance-Excellence.\n• Partnerschafts-Enablement: Datenschutzkonforme KI-Systeme ermöglichen vertrauensvolle Datenpartnerschaften und Kooperationen, die neue Geschäftsmöglichkeiten schaffen.\n• Kontinuierliche Wertschöpfungs-Innovation: Etablierung von Prozessen für die kontinuierliche Identifikation und Entwicklung neuer datenschutzbasierter Geschäftsmöglichkeiten."
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
