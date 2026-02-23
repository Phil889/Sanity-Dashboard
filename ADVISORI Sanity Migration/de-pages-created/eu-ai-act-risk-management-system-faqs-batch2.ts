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
    console.log('Updating EU AI Act Risk Management System page with C-Level FAQs batch 2 (German)...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie können wir als Führungsebene sicherstellen, dass unser KI-Risikomanagementsystem nicht nur compliant ist, sondern auch als Innovationstreiber fungiert?",
        answer: "Die Herausforderung für die C-Suite besteht darin, KI-Risikomanagement nicht als Innovationsbremse, sondern als strategischen Enabler zu positionieren. Ein vorausschauend gestaltetes Risikomanagementsystem kann Innovation beschleunigen, indem es strukturierte Entscheidungsprozesse, klare Risikoparameter und effiziente Genehmigungsverfahren etabliert, die schnelle, aber verantwortungsvolle KI-Entwicklung ermöglichen.\n\n💡 Strategische Ansätze zur Innovation-Risiko-Integration:\n• Agile Risikobewertung: Implementierung schneller, iterativer Risikobewertungsprozesse, die sich an den Entwicklungszyklen von KI-Projekten orientieren und Innovation nicht verlangsamen.\n• Risikoappetit-Frameworks: Definition klarer Risikoparameter für verschiedene Innovationsbereiche, die Teams befähigen, autonom innerhalb definierter Grenzen zu experimentieren.\n• Sandbox-Umgebungen: Aufbau kontrollierter Testumgebungen für KI-Innovationen, die sicheres Experimentieren ermöglichen und Risiken minimieren.\n• Präventive Risikominderung: Entwicklung von Standardlösungen und Best Practices, die Risiken von vornherein reduzieren und Entwicklungsteams entlasten.\n\n🚀 Der ADVISORI-Ansatz für innovationsförderndes Risikomanagement:\n• Innovation-Governance-Integration: Wir gestalten Risikomanagementprozesse, die nahtlos in Ihre Innovationspipeline integriert sind und Entwicklungsgeschwindigkeit erhöhen statt reduzieren.\n• Automatisierte Risikobewertung: Implementierung von Tools und Systemen, die Routinerisikobewertungen automatisieren und menschliche Expertise für komplexe Entscheidungen freisetzen.\n• Risiko-Innovation-Dashboards: Entwicklung von Steuerungsinstrumenten, die der Führungsebene Echtzeiteinblicke in das Risiko-Innovation-Verhältnis ihrer KI-Projekte geben.\n• Kontinuierliches Lernen: Aufbau von Feedback-Mechanismen, die Risikomanagementprozesse basierend auf Innovationserfahrungen kontinuierlich optimieren und anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche organisatorischen Veränderungen sind erforderlich, um ein effektives KI-Risikomanagementsystem zu implementieren, und wie minimieren wir dabei Widerstände?",
        answer: "Die erfolgreiche Implementierung eines KI-Risikomanagementsystems erfordert fundamentale organisatorische Veränderungen, die über technische Anpassungen hinausgehen. Für die Führungsebene ist es entscheidend, diese Transformation strategisch zu orchestrieren und dabei Change-Management-Prinzipien anzuwenden, die Widerstände minimieren und Akzeptanz maximieren.\n\n🔄 Erforderliche organisatorische Transformationen:\n• Neue Rollen und Verantwortlichkeiten: Schaffung spezialisierter KI-Risikomanagement-Funktionen, die zwischen technischen Teams und Geschäftsführung vermitteln und Expertise aufbauen.\n• Cross-funktionale Governance: Etablierung interdisziplinärer Gremien, die KI-Risiken ganzheitlich bewerten und Entscheidungen koordinieren.\n• Prozessintegration: Überarbeitung bestehender Entwicklungs-, Deployment- und Überwachungsprozesse zur nahtlosen Integration von Risikomanagement-Aktivitäten.\n• Kompetenzvermittlung: Systematischer Aufbau von KI-Risikokompetenz auf allen relevanten Organisationsebenen durch gezielte Schulungs- und Entwicklungsprogramme.\n\n🎯 ADVISORIs Change-Management-Ansatz:\n• Stakeholder-zentrierte Kommunikation: Entwicklung maßgeschneiderter Kommunikationsstrategien, die den Wert von Risikomanagement für verschiedene Zielgruppen demonstrieren und Befürchtungen adressieren.\n• Schrittweise Implementierung: Design einer phasenweisen Einführung, die Quick Wins generiert und Vertrauen in das neue System aufbaut, bevor umfassendere Veränderungen implementiert werden.\n• Incentive-Alignment: Anpassung von Leistungsmessungen und Anreizsystemen, um risikobewusstes Verhalten zu fördern und Widerstände durch Belohnungsstrukturen zu reduzieren.\n• Champions-Programme: Identifikation und Entwicklung interner Befürworter, die als Multiplikatoren fungieren und Veränderungen von innen heraus vorantreiben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir die Investitionen in KI-Risikomanagement quantifizieren und den Return on Investment für Stakeholder demonstrieren?",
        answer: "Die Quantifizierung des ROI von KI-Risikomanagement stellt eine komplexe, aber entscheidende Aufgabe für die Führungsebene dar. Während traditionelle Risikomanagement-Investments oft schwer zu messen sind, bietet ein systematischer Ansatz zur Wertmessung die Möglichkeit, sowohl quantitative als auch qualitative Vorteile zu demonstrieren und Stakeholder von der strategischen Bedeutung zu überzeugen.\n\n📊 Quantifizierbare Wertdimensionen des KI-Risikomanagements:\n• Vermiedene Kosten: Reduzierung von Compliance-Strafen, Rechtsstreitigkeiten, Reputationsschäden und operationellen Ausfällen durch proaktive Risikoidentifikation und -minderung.\n• Effizienzgewinne: Beschleunigte KI-Entwicklungszyklen, reduzierte Nacharbeiten und optimierte Ressourcenallokation durch strukturierte Risikoprozesse.\n• Umsatzsteigerungen: Schnellere Markteinführung neuer KI-Produkte, erhöhtes Kundenvertrauen und Wettbewerbsvorteile durch überlegene Risikokontrolle.\n• Kapitaleffizienz: Optimierte Investitionsentscheidungen, reduzierte Risikokapitalkosten und verbesserte Investorenbewertungen.\n\n💰 ADVISORIs ROI-Messungsframework:\n• Baseline-Etablierung: Systematische Erfassung der aktuellen Kosten und Risiken Ihrer KI-Operationen als Ausgangspunkt für Vergleichsmessungen.\n• Multi-dimensionale Bewertung: Entwicklung von KPIs, die sowohl harte finanzielle Kennzahlen als auch weiche Faktoren wie Vertrauen und Reputation erfassen.\n• Szenario-Modellierung: Aufbau von Simulationsmodellen, die den potenziellen Wert verschiedener Risikomanagement-Investitionen unter verschiedenen Zukunftsszenarien bewerten.\n• Kontinuierliches Monitoring: Implementierung von Dashboards und Berichtssystemen, die den laufenden Wert und ROI des Risikomanagements transparent machen und optimierungsmöglichkeiten identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können wir unser KI-Risikomanagementsystem so gestalten, dass es mit unserem Unternehmenswachstum und der Entwicklung neuer KI-Technologien skaliert?",
        answer: "Die Skalierbarkeit des KI-Risikomanagementsystems ist eine kritische strategische Überlegung für die C-Suite, da sich sowohl die technologische Landschaft als auch die Geschäftsanforderungen kontinuierlich weiterentwickeln. Ein zukunftssicheres System muss nicht nur mit dem Unternehmenswachstum Schritt halten, sondern auch flexibel genug sein, um neue KI-Technologien und veränderte Risikoprofile zu bewältigen.\n\n🔧 Designprinzipien für skalierbares KI-Risikomanagement:\n• Modulare Architektur: Aufbau eines komponentenbasierten Systems, das neue Risikodomänen, Bewertungsmethoden und Technologien ohne grundlegende Systemänderungen integrieren kann.\n• Automatisierung und Standardisierung: Implementierung automatisierter Prozesse für Routineaktivitäten, die Skalierung ohne proportionale Ressourcenerhöhung ermöglichen.\n• Adaptive Governance: Entwicklung flexibler Governance-Strukturen, die sich an veränderte Organisationsgrößen, -strukturen und -komplexität anpassen können.\n• Technologie-Agnostik: Design von Risikomanagementprozessen, die unabhängig von spezifischen KI-Technologien funktionieren und neue Entwicklungen problemlos aufnehmen können.\n\n🚀 ADVISORIs Skalierungsstrategie:\n• Future-Proof-Architektur: Entwicklung einer technischen und organisatorischen Architektur, die bekannte zukünftige Entwicklungen antizipiert und Flexibilität für unvorhergesehene Veränderungen bietet.\n• Kontinuierliche Anpassungsmechanismen: Implementierung von Feedback-Schleifen und Bewertungsprozessen, die das System kontinuierlich an neue Anforderungen anpassen.\n• Skalierungsplanung: Entwicklung detaillierter Roadmaps für verschiedene Wachstumsszenarien, die proaktive Systemerweiterungen ermöglichen.\n• Partnerschaften und Ökosystem: Aufbau strategischer Allianzen mit Technologieanbietern und Beratungspartnern, die zusätzliche Expertise und Kapazitäten für Skalierungsherausforderungen bereitstellen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
