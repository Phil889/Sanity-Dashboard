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
    console.log('Updating Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page with FAQs batch 4...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie können Datenschutzkoordinatoren die Zusammenarbeit mit externen Dienstleistern und Auftragsverarbeitern optimieren?",
        answer: "Die Koordination mit externen Dienstleistern und Auftragsverarbeitern ist ein kritischer Aspekt moderner Datenschutzkoordination. In einer zunehmend vernetzten Geschäftswelt müssen Datenschutzkoordinatoren komplexe Dienstleisterketten verwalten und dabei durchgängige Compliance gewährleisten, ohne die Geschäftsflexibilität zu beeinträchtigen.\n\n🤝 Herausforderungen der Dienstleister-Koordination:\n• Due Diligence Prozesse: Systematische Bewertung der Datenschutzfähigkeiten und -standards potenzieller Partner vor Vertragsabschluss.\n• Auftragsverarbeitungsverträge: Gestaltung rechtssicherer und praktikable AVV, die sowohl rechtliche Anforderungen als auch operative Realitäten berücksichtigen.\n• Monitoring und Kontrolle: Etablierung effektiver Überwachungsmechanismen für laufende Dienstleisterverhältnisse ohne übermäßige administrative Belastung.\n• Incident Management: Koordination von Datenschutzverletzungen in komplexen Dienstleisterketten mit klaren Verantwortlichkeiten.\n\n🔗 ADVISORIs strukturierter Dienstleister-Managementansatz:\n• Vendor Risk Assessment: Entwicklung risikobasierter Bewertungsframeworks für die systematische Evaluation von Datenschutzrisiken bei Dienstleistern.\n• Contract Templates: Bereitstellung standardisierter, aber flexibler Vertragsvorlagen für verschiedene Dienstleistertypen und Risikoprofile.\n• Continuous Monitoring: Implementierung automatisierter Überwachungssysteme für die kontinuierliche Bewertung der Dienstleister-Performance.\n• Relationship Management: Training in der Entwicklung langfristiger, vertrauensvoller Partnerschaften, die Compliance und Innovation gleichermaßen fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Change Management bei der Implementierung neuer Datenschutzprozesse und wie können Datenschutzkoordinatoren Widerstand überwinden?",
        answer: "Change Management ist eine kritische, oft unterschätzte Kompetenz für Datenschutzkoordinatoren. Die erfolgreiche Implementierung von Datenschutzmaßnahmen hängt maßgeblich davon ab, wie gut organisatorische Veränderungen gemanagt und Mitarbeiter für neue Prozesse gewonnen werden können.\n\n🔄 Change Management Herausforderungen im Datenschutz:\n• Kultureller Wandel: Transformation von einer compliance-getriebenen zu einer datenschutz-bewussten Unternehmenskultur.\n• Prozessintegration: Einbettung neuer Datenschutzprozesse in bestehende Arbeitsabläufe ohne Produktivitätsverluste.\n• Stakeholder Buy-In: Gewinnung von Unterstützung auf verschiedenen Hierarchieebenen für Datenschutzinitiativen.\n• Kontinuierliche Motivation: Aufrechterhaltung des Engagements für Datenschutz über den initialen Implementierungszeitraum hinaus.\n\n🎯 ADVISORIs Change Management Methodik:\n• Stakeholder Mapping: Systematische Identifikation und Analyse aller betroffenen Interessensgruppen mit individuellen Kommunikationsstrategien.\n• Communication Strategy: Entwicklung zielgruppenspezifischer Kommunikationsansätze, die Nutzen und Notwendigkeit von Datenschutzmaßnahmen überzeugend vermitteln.\n• Quick Wins Strategy: Identifikation und Umsetzung schnell erreichbarer Erfolge zur Glaubwürdigkeitssteigerung und Momentum-Aufbau.\n• Feedback Integration: Etablierung systematischer Feedback-Mechanismen zur kontinuierlichen Anpassung und Verbesserung der Change-Strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können Datenschutzkoordinatoren emerging Technologies wie KI und IoT datenschutzkonform gestalten?",
        answer: "Die rasante Entwicklung neuer Technologien wie Künstliche Intelligenz und Internet of Things stellt Datenschutzkoordinatoren vor beispiellose Herausforderungen. Diese Technologien bieten enormes Geschäftspotenzial, erfordern aber gleichzeitig innovative Datenschutzansätze, die über traditionelle Compliance-Modelle hinausgehen.\n\n🤖 Datenschutzherausforderungen bei emerging Technologies:\n• Algorithmische Transparenz: Nachvollziehbarkeit und Erklärbarkeit automatisierter Entscheidungsprozesse für Betroffene und Aufsichtsbehörden.\n• Datenhunger vs. Datenminimierung: Balance zwischen dem Datenbedarf lernender Systeme und dem Grundsatz der Datenminimierung.\n• Zweckbindung bei adaptiven Systemen: Gewährleistung der Zweckbindung bei Systemen, die sich selbstständig weiterentwickeln.\n• Consent Management: Entwicklung praktikabler Einwilligungsmodelle für komplexe, sich verändernde Datenverarbeitungen.\n\n🚀 ADVISORIs Innovation-orientierter Datenschutzansatz:\n• Privacy by Design für AI/IoT: Entwicklung spezifischer Privacy-Engineering-Methoden für emerging Technologies.\n• Regulatory Sandboxing: Zusammenarbeit mit Aufsichtsbehörden zur Entwicklung innovationsfreundlicher Compliance-Ansätze.\n• Ethics Framework: Integration ethischer Überlegungen in technische Datenschutzentscheidungen für nachhaltige Innovation.\n• Future-Proofing: Entwicklung adaptiver Datenschutzstrategien, die mit der technologischen Entwicklung Schritt halten können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Bedeutung hat die kontinuierliche Weiterbildung für Datenschutzkoordinatoren und wie strukturiert ADVISORI diesen Prozess?",
        answer: "Kontinuierliche Weiterbildung ist für Datenschutzkoordinatoren nicht optional, sondern essentiell für die Aufrechterhaltung ihrer Fachkompetenz in einem sich rasant wandelnden rechtlichen und technologischen Umfeld. Die Geschwindigkeit regulatorischer Änderungen und technologischer Innovation erfordert systematische, lebenslange Lernansätze.\n\n📚 Dimensionen kontinuierlicher Datenschutz-Weiterbildung:\n• Rechtsentwicklung: Verfolgung aktueller Gerichtsentscheidungen, Behördeninterpretationen und Gesetzesänderungen.\n• Technologische Trends: Verständnis neuer Technologien und deren Datenschutzimplikationen für proaktive Beratung.\n• Best Practices: Integration bewährter Praktiken aus anderen Organisationen und Branchen.\n• Soft Skills: Entwicklung von Kommunikations-, Führungs- und Projektmanagementfähigkeiten.\n\n🎓 ADVISORIs strukturiertes Weiterbildungskonzept:\n• Personalized Learning Paths: Individuelle Lernpfade basierend auf Rollenanforderungen, Erfahrungsstand und Karrierezielen.\n• Blended Learning: Kombination verschiedener Lernformate für optimale Wissensvermittlung und Anwendung.\n• Peer Learning Networks: Aufbau professioneller Netzwerke für Erfahrungsaustausch und gemeinsames Lernen.\n• Competency Assessment: Regelmäßige Bewertung und Zertifizierung von Kompetenzen mit gezielten Entwicklungsmaßnahmen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
