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
    console.log('Updating Intelligent Automation Partner page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-partner' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-partner" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie beginnt eine strategische Intelligent Automation Partnerschaft mit ADVISORI?',
        answer: "Der Beginn einer strategischen Partnerschaft erfordert sorgfältige Planung, gegenseitiges Verständnis und die Etablierung einer soliden Grundlage für langfristige Zusammenarbeit. ADVISORI entwickelt strukturierte Onboarding-Prozesse, die sowohl strategische Ausrichtung als auch operative Exzellenz von Anfang an sicherstellen und den Grundstein für nachhaltigen Partnerschaftserfolg legen.\n\n🎯 Strategische Partnerschaftsanalyse und Zielsetzung:\n• Durchführung umfassender Strategic Alignment Assessments zur Bewertung der Kompatibilität von Geschäftszielen, Unternehmenskulturen und strategischen Visionen.\n• Entwicklung gemeinsamer Vision Statements und Mission Definitions, die die Grundlage für alle zukünftigen Partnerschaftsaktivitäten bilden.\n• Etablierung von Partnership Success Metrics und KPIs zur Messung des Partnerschaftserfolgs auf verschiedenen Ebenen.\n• Aufbau von Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen für die Partnerschaftsführung.\n\n🔍 Umfassende Readiness und Capability Assessments:\n• Durchführung detaillierter Technology Readiness Assessments zur Bewertung der bestehenden IT-Infrastruktur und Automatisierungsreife.\n• Implementierung von Organizational Maturity Evaluations zur Einschätzung der Change-Bereitschaft und Transformationsfähigkeit.\n• Aufbau von Skills Gap Analysen zur Identifikation von Kompetenzlücken und Entwicklungsbedarfen.\n• Etablierung von Risk Assessment Frameworks zur frühzeitigen Identifikation potenzieller Herausforderungen und Risiken.\n\n🚀 Strukturiertes Partnership Launch und Quick Wins:\n• Entwicklung von Partnership Launch Roadmaps mit klaren Meilensteinen und Erfolgskriterien für die ersten Monate der Zusammenarbeit.\n• Implementierung von Quick Win Projekten zur Demonstration des Partnerschaftswerts und Aufbau von Momentum.\n• Aufbau von Communication Frameworks und Regular Touchpoints für kontinuierliche Abstimmung und Feedback.\n• Etablierung von Continuous Improvement Prozesse zur laufenden Optimierung der Partnerschaftsqualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Investitionen und Ressourcen sind für eine erfolgreiche Intelligent Automation Partnerschaft erforderlich?',
        answer: "Eine erfolgreiche strategische Partnerschaft erfordert angemessene Investitionen in Technologie, Menschen und Prozesse, um nachhaltigen Wert zu schaffen. ADVISORI entwickelt transparente Investment Frameworks und Ressourcenplanungsmodelle, die sowohl kurzfristige Implementierungskosten als auch langfristige Wertschöpfungspotenziale berücksichtigen und optimale ROI-Realisierung ermöglichen.\n\n💰 Strategische Investment Planning:\n• Entwicklung umfassender Total Cost of Ownership Modelle, die alle direkten und indirekten Kosten der Partnerschaft über den gesamten Lebenszyklus berücksichtigen.\n• Implementierung von ROI Forecasting Modelle zur Vorhersage finanzieller Auswirkungen und Wertschöpfungspotenziale verschiedener Investitionsszenarien.\n• Aufbau von Flexible Funding Models, die Anpassungen an sich ändernde Geschäftsanforderungen und Marktbedingungen ermöglichen.\n• Etablierung von Value-based Pricing Strukturen, die Investitionen an tatsächlich realisierten Geschäftswerten ausrichten.\n\n👥 Human Capital und Kompetenzinvestitionen:\n• Aufbau dedizierter Partnership Teams mit spezialisierten Rollen für verschiedene Aspekte der Automatisierungspartnerschaft.\n• Implementierung umfassender Training und Development Programme zur Qualifizierung interner Teams für die Zusammenarbeit mit Automatisierungstechnologien.\n• Entwicklung von Change Management Ressourcen zur Unterstützung der organisatorischen Transformation.\n• Etablierung von Leadership Development Programme für die Führung in automatisierten Arbeitsumgebungen.\n\n🏗️ Technologie und Infrastruktur-Investitionen:\n• Aufbau moderner IT-Infrastrukturen mit Cloud-Capabilities und Skalierbarkeit für wachsende Automatisierungsanforderungen.\n• Implementierung von Security und Compliance Infrastrukturen zur Sicherstellung regulatorischer Anforderungen.\n• Entwicklung von Integration Platforms für nahtlose Verbindung verschiedener Automatisierungskomponenten.\n• Etablierung von Monitoring und Analytics Capabilities für kontinuierliche Performance-Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie entwickelt sich eine Intelligent Automation Partnerschaft mit ADVISORI über die Zeit?',
        answer: "Strategische Partnerschaften sind dynamische Beziehungen, die sich kontinuierlich entwickeln und an veränderte Geschäftsanforderungen, Technologietrends und Marktbedingungen anpassen. ADVISORI entwickelt evolutionäre Partnerschaftsmodelle, die strukturierte Wachstumspfade und kontinuierliche Wertsteigerung über mehrere Jahre hinweg ermöglichen.\n\n📈 Phasenorientierte Partnerschaftsentwicklung:\n• Aufbau von Multi-Phase Partnership Roadmaps mit klaren Entwicklungsstufen von Initial Implementation über Optimization bis hin zu Innovation Leadership.\n• Implementierung von Maturity Assessment Frameworks zur regelmäßigen Bewertung des Partnerschaftsfortschritts und Identifikation nächster Entwicklungsschritte.\n• Entwicklung von Capability Building Pathways für kontinuierliche Erweiterung der Automatisierungskompetenzen und -möglichkeiten.\n• Etablierung von Strategic Review Cycles zur regelmäßigen Anpassung der Partnerschaftsstrategie an sich ändernde Anforderungen.\n\n🔄 Kontinuierliche Innovation und Expansion:\n• Aufbau von Innovation Pipeline Management für kontinuierliche Entwicklung neuer Automatisierungsmöglichkeiten und Geschäftschancen.\n• Implementierung von Technology Adoption Frameworks für strukturierte Integration emerging Technologies in die Partnerschaft.\n• Entwicklung von Market Expansion Strategien zur Ausweitung der Automatisierung auf neue Geschäftsbereiche und Märkte.\n• Etablierung von Ecosystem Partnership Networks für erweiterte Wertschöpfungsmöglichkeiten durch strategische Allianzen.\n\n🎯 Langfristige Wertschöpfung und Legacy Building:\n• Entwicklung von Sustainable Value Creation Modelle für kontinuierliche Wertgenerierung auch in reifen Partnerschaftsphasen.\n• Implementierung von Knowledge Legacy Systeme zur Sicherstellung nachhaltiger Kompetenzentwicklung und Wissensbewahrung.\n• Aufbau von Industry Leadership Positioning durch gemeinsame Thought Leadership und Best Practice Entwicklung.\n• Etablierung von Next Generation Partnership Models für zukünftige Automatisierungstrends und Technologieentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Erfolgsgeschichten und Referenzen kann ADVISORI als Intelligent Automation Partner vorweisen?',
        answer: "ADVISORI hat als strategischer Intelligent Automation Partner zahlreiche Unternehmen verschiedener Branchen bei ihrer digitalen Transformation begleitet und dabei messbare Geschäftsergebnisse sowie nachhaltige Wettbewerbsvorteile geschaffen. Unsere Erfolgsgeschichten demonstrieren die Wirksamkeit unseres partnerschaftlichen Ansatzes und die Vielfalt der realisierbaren Automatisierungspotenziale.\n\n🏆 Transformative Partnerschaftserfolge:\n• Begleitung eines führenden Finanzdienstleisters bei der Implementierung einer umfassenden RegTech-Automatisierung, die zu einer Reduzierung der Compliance-Kosten und gleichzeitiger Verbesserung der Risikotransparenz führte.\n• Strategische Partnerschaft mit einem globalen Fertigungsunternehmen zur Entwicklung einer Smart Manufacturing Plattform, die Produktionseffizienz steigerte und neue datengetriebene Geschäftsmodelle ermöglichte.\n• Langfristige Zusammenarbeit mit einem Healthcare-Konzern zur Automatisierung klinischer Prozesse, die Patientenversorgung verbesserte und gleichzeitig regulatorische Compliance sicherstellte.\n• Partnerschaft mit einem Technologieunternehmen zur Entwicklung einer KI-gestützten Customer Service Automation, die Kundenzufriedenheit erhöhte und operative Kosten reduzierte.\n\n🌟 Innovation und Thought Leadership:\n• Entwicklung branchenführender Best Practices für EU AI Act konforme Automatisierung, die als Referenz für andere Unternehmen dienen.\n• Aufbau von Innovation Labs und Proof-of-Concept Umgebungen, die zur Entwicklung mehrerer patentierter Automatisierungslösungen führten.\n• Etablierung von Industry Standards und Frameworks für sichere, skalierbare Intelligent Automation in kritischen Geschäftsbereichen.\n• Aufbau von Thought Leadership durch gemeinsame Publikationen, Konferenzbeiträge und Brancheninitialen zur Förderung verantwortungsvoller Automatisierung.\n\n🤝 Nachhaltige Partnerschaftsqualität:\n• Aufbau langfristiger Partnerschaften mit durchschnittlichen Laufzeiten von mehreren Jahren und kontinuierlicher Erweiterung der Zusammenarbeit.\n• Entwicklung von Alumni-Netzwerken ehemaliger Partnerunternehmen, die als Referenzen und Mentoren für neue Partnerschaften fungieren.\n• Etablierung von Customer Advisory Boards zur kontinuierlichen Verbesserung der Partnerschaftsqualität und Serviceexzellenz.\n• Aufbau von Industry Communities und Best Practice Sharing Netzwerken für gegenseitigen Erfahrungsaustausch und kontinuierliches Lernen."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
