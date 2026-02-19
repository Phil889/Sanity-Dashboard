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
    console.log('Updating Datenschutzkoordinator Schulung Grundlagen DSGVO/BDSG page with FAQs batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: "Wie können Datenschutzkoordinatoren den ROI ihrer Datenschutzmaßnahmen messen und kommunizieren?",
        answer: "Die Quantifizierung des Return on Investment (ROI) von Datenschutzmaßnahmen ist eine wesentliche Kompetenz für moderne Datenschutzkoordinatoren. Diese Fähigkeit ermöglicht es, Datenschutz nicht als Kostenfaktor, sondern als Wertschöpfungsbereich zu positionieren und nachhaltige Investitionen in die Datenschutz-Infrastruktur zu rechtfertigen.\n\n📊 Messbare Wertdimensionen des Datenschutzes:\n• Risikominderung: Quantifizierung vermiedener Bußgelder, Rechtskosten und Reputationsschäden durch proaktive Compliance-Maßnahmen.\n• Effizienzgewinne: Messung von Kosteneinsparungen durch automatisierte Datenschutzprozesse und reduzierte manuelle Compliance-Arbeiten.\n• Geschäftschancen: Bewertung neuer Geschäftsmöglichkeiten, die durch vertrauensvolle Datenschutzpraxis erschlossen werden.\n• Mitarbeiterproduktivität: Evaluation der Produktivitätssteigerung durch klare Datenschutzrichtlinien und -prozesse.\n\n💰 ADVISORIs ROI-Bewertungsframework:\n• Balanced Scorecard Ansatz: Entwicklung ausgewogener Kennzahlensysteme, die quantitative und qualitative Datenschutzwerte erfassen.\n• Benchmarking-Methoden: Vergleichsanalysen mit Branchenstandards und Best Practices zur Positionierung der eigenen Performance.\n• Stakeholder Value Mapping: Identifikation und Quantifizierung von Wertbeiträgen für verschiedene Interessensgruppen.\n• Predictive Analytics: Einsatz von Datenanalyse zur Vorhersage von Datenschutzrisiken und deren finanziellen Auswirkungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche technischen Grundkenntnisse sollten Datenschutzkoordinatoren in der DSGVO/BDSG-Grundausbildung erwerben?",
        answer: "Moderne Datenschutzkoordination erfordert ein grundlegendes technisches Verständnis, um in einer zunehmend digitalisierten Geschäftswelt effektiv zu agieren. Technische Kompetenz ermöglicht es Datenschutzkoordinatoren, fundierte Entscheidungen zu treffen und als kompetente Gesprächspartner für IT-Teams zu fungieren.\n\n🔧 Essenzielle technische Kompetenzbereiche:\n• Datenarchitekturen verstehen: Grundkenntnisse über Datenbanken, Cloud-Systeme und Datenflüsse für fundierte Risikoeinschätzungen.\n• Verschlüsselungstechnologien: Verständnis kryptografischer Verfahren und deren Anwendung zum Schutz personenbezogener Daten.\n• API-Security: Bewertung der Datenschutzimplikationen von Anwendungsschnittstellen und Datenintegration.\n• Privacy-Enhancing Technologies: Kenntnisse über Anonymisierung, Pseudonymisierung und andere technische Datenschutzmaßnahmen.\n\n⚙️ ADVISORIs praxisorientierte Technikschulung:\n• Learning by Doing: Hands-on Übungen mit realen Systemen und Technologien zur praktischen Erfahrungsbildung.\n• Use Case basiertes Lernen: Anwendung technischer Konzepte auf konkrete Datenschutzszenarien aus der Geschäftspraxis.\n• Tool-Training: Einführung in gängige Datenschutz-Tools und -Software für effiziente Compliance-Verwaltung.\n• Future Technologies: Vorbereitung auf emerging Technologies wie KI, IoT und Blockchain mit ihren spezifischen Datenschutzherausforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können Datenschutzkoordinatoren eine effektive Incident Response-Strategie für Datenschutzverletzungen entwickeln?",
        answer: "Die Entwicklung einer robusten Incident Response-Strategie ist eine kritische Kompetenz für Datenschutzkoordinatoren, da Datenschutzverletzungen trotz bester Präventionsmaßnahmen auftreten können. Eine effektive Reaktionsstrategie kann den Schaden begrenzen und die Compliance-Konformität auch in Krisensituationen gewährleisten.\n\n🚨 Kernkomponenten einer Datenschutz-Incident Response:\n• Früherkennung und Assessment: Etablierung von Monitoring-Systemen und Bewertungskriterien für die schnelle Identifikation von Datenschutzverletzungen.\n• Eskalationsprozesse: Definition klarer Verantwortlichkeiten und Kommunikationswege für verschiedene Incident-Kategorien.\n• Meldepflichten managen: Systematische Abarbeitung der 72-Stunden-Meldefrist und Betroffenenbenachrichtigung nach DSGVO-Vorgaben.\n• Schadensbegrenzung: Sofortmaßnahmen zur Eindämmung der Verletzung und zum Schutz weiterer Daten.\n\n🛡️ ADVISORIs strukturierter Response-Ansatz:\n• Tabletop Exercises: Simulation verschiedener Incident-Szenarien zur Erprobung und Verbesserung der Response-Prozesse.\n• Template-Entwicklung: Bereitstellung vorgefertigter Meldevorlagen und Kommunikationsbausteine für schnelle Reaktion.\n• Stakeholder Coordination: Training in der Koordination verschiedener interner und externer Stakeholder während eines Incidents.\n• Post-Incident Analysis: Systematische Aufarbeitung von Vorfällen zur kontinuierlichen Verbesserung der Präventions- und Response-Maßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Bedeutung haben Datenschutz-Folgenabschätzungen (DSFA) in der täglichen Arbeit von Datenschutzkoordinatoren?",
        answer: "Datenschutz-Folgenabschätzungen (DSFA) sind ein zentrales Instrument moderner Datenschutzkoordination und repräsentieren den systematischen Ansatz zur Risikoidentifikation und -minimierung. Sie transformieren reaktive Compliance in proaktive Risikosteuerung und schaffen gleichzeitig Transparenz über Datenschutzrisiken für alle Stakeholder.\n\n📋 Strategische Bedeutung der DSFA:\n• Präventive Risikosteuerung: Identifikation und Minimierung von Datenschutzrisiken bereits in der Planungsphase neuer Projekte.\n• Compliance-Nachweis: Dokumentation der systematischen Berücksichtigung von Datenschutzaspekten gegenüber Aufsichtsbehörden.\n• Stakeholder-Kommunikation: Strukturierte Aufbereitung von Datenschutzrisiken für Management-Entscheidungen.\n• Kontinuierliche Verbesserung: Systematische Evaluation und Optimierung bestehender Datenverarbeitungsprozesse.\n\n🔍 ADVISORIs DSFA-Methodologie:\n• Risk-based Approach: Entwicklung risikobasierter Bewertungskriterien für die systematische Priorisierung von DSFA-Maßnahmen.\n• Stakeholder Integration: Methoden zur effektiven Einbindung verschiedener Fachbereiche in den DSFA-Prozess.\n• Automation Tools: Einsatz technischer Hilfsmittel zur Effizienzsteigerung bei wiederkehrenden DSFA-Elementen.\n• Quality Assurance: Implementierung von Qualitätssicherungsprozessen zur Gewährleistung konsistent hoher DSFA-Standards."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
