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
    console.log('Updating DSGVO Implementation page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-implementation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie unterstützt ADVISORI beim Aufbau einer Privacy-First Corporate Culture und welche Leadership-Strategien sind für nachhaltige DSGVO-Compliance entscheidend?",
        answer: "Nachhaltige DSGVO-Compliance erfordert mehr als nur technische Implementierung – sie benötigt eine fundamental privacy-bewusste Unternehmenskultur. ADVISORI entwickelt Change Management-Strategien, die Privacy als Kernwert in der DNA des Unternehmens verankern und C-Level-Führung für langfristige Compliance-Excellence befähigen.\n\n🎯 Cultural Transformation Leadership:\n• Privacy Champion Networks: Aufbau interner Privacy-Advocate-Netzwerke, die Datenschutz-Bewusstsein in alle Unternehmensbereiche tragen und als Multiplikatoren für Best Practices fungieren.\n• Executive Privacy Leadership Training: Spezialisierte Führungskräfte-Entwicklung, die C-Suite-Mitglieder zu Privacy-thought-leaders macht und ihre Kommunikationsfähigkeiten in Datenschutz-Themen stärkt.\n• Privacy-by-Design Mindset: Integration von Privacy-Thinking in alle Geschäftsprozesse und Entscheidungsfindungen, sodass Datenschutz zum natürlichen Reflex wird.\n• Cultural Assessment und Monitoring: Systematische Messung und Überwachung der Privacy-Kultur-Entwicklung durch KPIs und Mitarbeiterfeedback.\n\n💪 Sustainable Compliance Excellence:\n• Privacy Governance Integration: Vollständige Integration von Privacy-Governance in bestehende Corporate Governance-Strukturen und Board-Level Oversight.\n• Continuous Learning Ecosystems: Aufbau kontinuierlicher Lern- und Entwicklungsprogramme, die mit der sich ändernden Datenschutz-Landschaft Schritt halten.\n• Innovation-Privacy Balance: Entwicklung von Frameworks, die Innovation fördern, während sie gleichzeitig sicherstellen, dass Privacy-Prinzipien nicht kompromittiert werden.\n• Cross-functional Collaboration: Schaffung effektiver Zusammenarbeit zwischen Legal, IT, Marketing und anderen Bereichen für ganzheitliche Privacy-Lösungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt ADVISORI bei der Vorbereitung auf die nächste Generation von Datenschutz-Gesetzen (ePrivacy-Verordnung, AI Act) und wie wird die DSGVO-Implementierung zukunftssicher gestaltet?",
        answer: "Die Datenschutz-Regulierung entwickelt sich kontinuierlich weiter. ADVISORI gestaltet DSGVO-Implementierungen mit einer zukunftsorientierten Perspektive, die auf kommende Regelwerke vorbereitet ist und adaptive Compliance-Architekturen schafft.\n\n🔮 Future-Ready Privacy Architecture:\n• Regulatory Horizon Scanning: Kontinuierliche Analyse kommender Datenschutz-Gesetzgebungen (ePrivacy, AI Act, Data Governance Act) und deren Auswirkungen auf Ihre Compliance-Strategie.\n• Adaptive Compliance Frameworks: Entwicklung flexibler Datenschutz-Systeme, die sich schnell an neue regulatorische Anforderungen anpassen können, ohne grundlegende Neugestaltung zu erfordern.\n• AI-Ready Privacy Infrastructure: Vorbereitung auf AI Act-Anforderungen durch Integration von Algorithmic Accountability und Transparency-Mechanismen in bestehende DSGVO-Prozesse.\n• Cross-Regulation Harmonization: Entwicklung integrierter Compliance-Ansätze, die DSGVO, ePrivacy, AI Act und sektorspezifische Regelungen harmonisch verbinden.\n\n⚡ Next-Generation Privacy Excellence:\n• Automated Compliance Evolution: Implementation KI-gestützter Systeme, die automatisch neue regulatorische Anforderungen identifizieren und entsprechende Anpassungen vorschlagen.\n• Digital Rights Management 2.0: Vorbereitung auf erweiterte digitale Rechte und neue Kategorien von Betroffenenrechten, die in zukünftigen Gesetzgebungen entstehen könnten.\n• Quantum-Safe Privacy Practices: Entwicklung quantenresistenter Verschlüsselungs- und Sicherheitsmaßnahmen für langfristige Datenschutz-Sicherheit.\n• Global Privacy Coordination: Aufbau von Compliance-Strukturen, die verschiedene internationale Datenschutz-Jurisdiktionen koordiniert adressieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie entwickelt ADVISORI eine Business Continuity-integrierte DSGVO-Strategie, die auch in Krisensituationen und Notfällen robuste Datenschutz-Compliance gewährleistet?",
        answer: "Krisensituationen testen die Robustheit von Datenschutz-Systemen. ADVISORI entwickelt krisenresistente DSGVO-Compliance-Architekturen, die auch unter extremen Bedingungen funktionieren und dabei Business Continuity unterstützen statt zu behindern.\n\n🛡️ Crisis-Resilient Privacy Operations:\n• Emergency Privacy Protocols: Entwicklung spezifischer Datenschutz-Notfallpläne für verschiedene Krisenszenarien (Cyber-Angriffe, Pandemien, Naturkatastrophen), die schnelle Entscheidungen ermöglichen.\n• Disaster Recovery Privacy Integration: Vollständige Integration von Datenschutz-Anforderungen in Business Continuity und Disaster Recovery Planning.\n• Crisis Communication Privacy: Vorbereitung rechtssicherer Krisenkommunikation, die sowohl Transparenz als auch Datenschutz-Compliance in kritischen Situationen gewährleistet.\n• Rapid Response Privacy Teams: Aufbau spezialisierter Teams für schnelle Datenschutz-Entscheidungen in Notfallsituationen.\n\n🔄 Adaptive Crisis Management:\n• Dynamic Privacy Risk Assessment: Entwicklung von Systemen zur schnellen Neubewertung von Datenschutzrisiken basierend auf sich ändernden Krisenbedingungen.\n• Emergency Data Processing Justification: Rechtskonforme Frameworks für erweiterte Datenverarbeitungen in Notfällen, die regulatorische Akzeptanz finden.\n• Stakeholder Privacy Coordination: Koordination von Datenschutz-Maßnahmen mit anderen Krisenstäben und externen Partnern unter Wahrung der Compliance.\n• Post-Crisis Privacy Recovery: Strukturierte Rückkehr zur normalen Datenschutz-Operations nach Krisenende mit Lessons Learned Integration."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Expertise bietet ADVISORI für die Integration von DSGVO-Compliance in komplexe IT-Transformationsprojekte und Digital Transformation Initiativen?",
        answer: "Digital Transformation und DSGVO-Compliance müssen hand in hand gehen. ADVISORI bietet spezialisierte Beratung für die nahtlose Integration von Datenschutz-Anforderungen in umfassende IT-Transformationsprojekte, sodass Innovation und Compliance sich gegenseitig verstärken.\n\n🚀 Transformation-integrated Privacy Excellence:\n• Digital Transformation Privacy Roadmapping: Integration von Privacy-Meilensteinen in Digital Transformation Roadmaps mit klaren Abhängigkeiten und Synergien.\n• Legacy System Privacy Migration: Spezialisierte Strategien für die datenschutzkonforme Migration von Legacy-Systemen zu modernen, cloud-basierten Architekturen.\n• API Economy Privacy Design: Datenschutz-by-Design für API-first Architekturen und Platform Economy-Geschäftsmodelle.\n• Cloud Transformation Privacy: Comprehensive Privacy-Frameworks für Cloud-Migration und Multi-Cloud-Strategien.\n\n⚡ Innovation-Enabling Privacy:\n• Agile Privacy Integration: Anpassung von Datenschutz-Prozessen an agile Entwicklungsmethoden und DevOps-Praktiken ohne Verlangsamung der Innovation.\n• Digital Platform Privacy: Datenschutz-Architekturen für digitale Plattformen, Marktplätze und Ecosystem-Geschäftsmodelle.\n• IoT und Edge Computing Privacy: Spezialisierte Datenschutz-Lösungen für Internet of Things und Edge Computing-Implementierungen.\n• Zero-Downtime Privacy Upgrades: Strategien für kontinuierliche Privacy-Verbesserungen ohne Unterbrechung laufender Geschäftsprozesse."
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
