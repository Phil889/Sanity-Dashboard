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
    console.log('Updating Intelligent Automation Definition page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-definition' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-definition" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Architektur-Prinzipien sind für die erfolgreiche Implementierung von Intelligent Automation Systemen entscheidend?',
        answer: "Die Architektur von Intelligent Automation Systemen erfordert einen durchdachten, zukunftsorientierten Ansatz, der Flexibilität, Skalierbarkeit und Sicherheit in den Mittelpunkt stellt. Erfolgreiche IA-Implementierungen basieren auf bewährten Architektur-Prinzipien, die es ermöglichen, komplexe Automatisierungslösungen zu entwickeln, die sich an verändernde Geschäftsanforderungen anpassen können. Diese Prinzipien bilden das Fundament für nachhaltige, wartbare und erweiterbare Systeme.\n\n🏗️ Fundamentale Architektur-Prinzipien:\n• Modulare Systemarchitektur: Aufbau von IA-Systemen aus unabhängigen, wiederverwendbaren Komponenten, die einzeln entwickelt, getestet und skaliert werden können.\n• API-First Design: Entwicklung aller Systemkomponenten mit standardisierten Schnittstellen für nahtlose Integration und Interoperabilität zwischen verschiedenen Services.\n• Event-Driven Architecture: Implementierung reaktiver Systeme, die auf Ereignisse und Datenänderungen in Echtzeit reagieren und entsprechende Automatisierungsaktionen auslösen.\n• Microservices-Ansatz: Zerlegung komplexer IA-Funktionalitäten in kleinere, spezialisierte Services für bessere Wartbarkeit und unabhängige Skalierung.\n• Cloud-Native Design: Optimierung für Cloud-Umgebungen mit Containerisierung, Orchestrierung und serverless Computing-Paradigmen.\n\n🔒 Sicherheits- und Compliance-Architektur:\n• Security by Design: Integration von Sicherheitsmaßnahmen auf allen Architekturebenen mit Zero-Trust-Prinzipien und Defense-in-Depth-Strategien.\n• Privacy by Design: Einbettung von Datenschutzprinzipien in die Systemarchitektur mit Datenminimierung, Zweckbindung und Transparenz.\n• Identity and Access Management: Implementierung granularer Zugriffskontrolle mit rollenbasierter Autorisierung und Multi-Faktor-Authentifizierung.\n• Audit und Compliance: Architektonische Unterstützung für umfassende Logging, Monitoring und Compliance-Reporting-Funktionalitäten.\n\n📊 Daten- und Analytics-Architektur:\n• Data Lake und Data Warehouse Integration: Hybride Datenarchitektur für strukturierte und unstrukturierte Datenverarbeitung mit optimaler Performance.\n• Real-Time Data Processing: Stream-Processing-Architekturen für kontinuierliche Datenverarbeitung und sofortige Reaktionsfähigkeit.\n• ML Pipeline Integration: Nahtlose Integration von Machine Learning Workflows in die Gesamtarchitektur für kontinuierliches Lernen und Modell-Updates.\n• Data Governance Framework: Architektonische Unterstützung für Datenqualität, Lineage-Tracking und Compliance-Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie unterscheiden sich kognitive Fähigkeiten in Intelligent Automation von herkömmlichen regelbasierten Ansätzen?',
        answer: "Kognitive Fähigkeiten repräsentieren den entscheidenden Unterschied zwischen Intelligent Automation und traditionellen regelbasierten Systemen. Während herkömmliche Automatisierung auf vordefinierte Regeln und deterministische Logik angewiesen ist, ermöglichen kognitive Technologien Systemen, zu verstehen, zu lernen, zu schlussfolgern und sich an neue Situationen anzupassen. Diese Evolution von starren zu adaptiven Systemen eröffnet völlig neue Möglichkeiten für die Automatisierung komplexer Geschäftsprozesse.\n\n🧠 Kognitive Kernfähigkeiten in IA-Systemen:\n• Natürliche Sprachverarbeitung: Verstehen und Generieren menschlicher Sprache für intelligente Dokumentenverarbeitung, Kundeninteraktion und Wissensextraktion aus unstrukturierten Texten.\n• Computer Vision und Bilderkennung: Automatische Interpretation visueller Informationen für Dokumentenanalyse, Qualitätskontrolle und Objekterkennung.\n• Mustererkennung und Anomalieerkennung: Identifikation komplexer Muster in Daten und Erkennung von Abweichungen für proaktive Problemlösung.\n• Kontextuelle Entscheidungsfindung: Berücksichtigung situativer Faktoren und historischer Erfahrungen für adaptive Entscheidungen.\n• Kontinuierliches Lernen: Selbstständige Verbesserung der Systemperformance durch Erfahrung und Feedback.\n\n⚡ Unterschiede zu regelbasierten Systemen:\n• Adaptive vs. statische Logik: Kognitive Systeme passen ihre Entscheidungslogik basierend auf neuen Erfahrungen an, während regelbasierte Systeme unveränderliche Wenn-Dann-Regeln befolgen.\n• Probabilistische vs. deterministische Entscheidungen: IA-Systeme arbeiten mit Wahrscheinlichkeiten und Unsicherheiten, traditionelle Systeme mit binären Entscheidungen.\n• Unstrukturierte vs. strukturierte Datenverarbeitung: Kognitive Fähigkeiten ermöglichen die Verarbeitung von E-Mails, Dokumenten und Bildern, nicht nur strukturierte Datenbankeinträge.\n• Selbstlernende vs. programmierte Verbesserung: Automatische Optimierung durch Machine Learning statt manueller Regelanpassungen.\n\n🎯 Geschäftliche Auswirkungen kognitiver Fähigkeiten:\n• Erweiterte Automatisierungsmöglichkeiten: Automatisierung wissensintensiver Prozesse, die bisher menschliche Expertise erforderten.\n• Verbesserte Ausnahmebehandlung: Intelligente Reaktion auf unvorhergesehene Situationen statt starrer Fehlermeldungen.\n• Proaktive Prozessoptimierung: Selbstständige Identifikation von Verbesserungsmöglichkeiten und Implementierung von Optimierungen.\n• Personalisierte Automatisierung: Anpassung von Automatisierungsprozessen an individuelle Nutzer- und Kontextanforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Human-in-the-Loop in Intelligent Automation Systemen und wie wird die Balance zwischen Automatisierung und menschlicher Kontrolle gewährleistet?',
        answer: "Human-in-the-Loop (HITL) ist ein fundamentales Konzept in Intelligent Automation, das die optimale Balance zwischen maschineller Effizienz und menschlicher Expertise schafft. Dieses Paradigma erkennt an, dass auch die fortschrittlichsten IA-Systeme von menschlicher Aufsicht, Validierung und strategischer Führung profitieren. HITL-Ansätze gewährleisten nicht nur bessere Ergebnisse, sondern auch Compliance, Ethik und kontinuierliche Verbesserung der Automatisierungslösungen.\n\n👥 HITL-Implementierungsmodelle:\n• Supervisory Control: Menschen überwachen automatisierte Prozesse und greifen bei kritischen Entscheidungen oder Ausnahmen ein, während Routineaufgaben vollständig automatisiert ablaufen.\n• Collaborative Processing: Nahtlose Zusammenarbeit zwischen Menschen und IA-Systemen, wobei jede Partei ihre Stärken einbringt und komplexe Aufgaben gemeinsam bewältigt werden.\n• Exception Handling: Automatische Eskalation komplexer oder ungewöhnlicher Fälle an menschliche Experten für Entscheidung und Lernfeedback.\n• Quality Assurance: Menschliche Validierung kritischer Automatisierungsergebnisse für Qualitätssicherung und Compliance-Gewährleistung.\n• Strategic Oversight: Kontinuierliche Bewertung und Anpassung von Automatisierungsstrategien durch menschliche Führungskräfte.\n\n⚖️ Balance-Mechanismen und Governance:\n• Risikoadaptive Kontrolle: Dynamische Anpassung des menschlichen Eingriffsniveaus basierend auf Risikobewertung und Kritikalität der Prozesse.\n• Transparenz und Erklärbarkeit: Bereitstellung verständlicher Informationen über Systementscheidungen für informierte menschliche Überwachung.\n• Feedback-Integration: Systematische Erfassung und Integration menschlichen Feedbacks für kontinuierliche Systemverbesserung.\n• Eskalationsprotoklle: Klare Definitionen, wann und wie menschliche Intervention erforderlich ist, mit entsprechenden Workflow-Mechanismen.\n\n🎯 Strategische Vorteile des HITL-Ansatzes:\n• Verbesserte Entscheidungsqualität: Kombination maschineller Datenverarbeitung mit menschlicher Intuition und Erfahrung für optimale Ergebnisse.\n• Compliance und Ethik: Menschliche Überwachung gewährleistet ethische Standards und regulatorische Konformität in kritischen Bereichen.\n• Kontinuierliches Lernen: Menschliches Feedback ermöglicht kontinuierliche Verbesserung und Anpassung der IA-Systeme.\n• Vertrauen und Akzeptanz: Beibehaltung menschlicher Kontrolle fördert Vertrauen und Akzeptanz von Automatisierungslösungen bei Stakeholdern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickelt sich die Definition von Intelligent Automation mit neuen Technologien wie Generative AI und Large Language Models?',
        answer: "Die Definition von Intelligent Automation erfährt durch den Aufstieg von Generative AI und Large Language Models (LLMs) eine fundamentale Erweiterung und Transformation. Diese Technologien erweitern die Grenzen dessen, was als automatisierbar gilt, und ermöglichen neue Formen der Mensch-Maschine-Kollaboration. Die Integration generativer KI in IA-Systeme schafft Möglichkeiten für kreative, kontextuelle und hochgradig personalisierte Automatisierungslösungen, die über traditionelle Prozessautomatisierung hinausgehen.\n\n🚀 Generative AI als IA-Katalysator:\n• Content-Generierung und Kreativität: Automatische Erstellung von Texten, Bildern, Code und anderen kreativen Inhalten als integraler Bestandteil von Geschäftsprozessen.\n• Konversationelle Automatisierung: Natürliche Sprachinteraktionen für Kundenservice, interne Kommunikation und Wissensmanagement mit menschenähnlicher Qualität.\n• Code-Generierung und Entwicklung: Automatisierte Softwareentwicklung und Systemkonfiguration durch KI-gestützte Programmierung.\n• Personalisierte Prozessadaption: Dynamische Anpassung von Automatisierungsworkflows basierend auf individuellen Nutzeranforderungen und Kontexten.\n• Intelligente Dokumentenverarbeitung: Erweiterte Fähigkeiten zur Analyse, Zusammenfassung und Transformation komplexer Dokumente.\n\n🧠 LLM-Integration in IA-Architekturen:\n• Multimodale Verarbeitung: Integration von Text, Bild, Audio und anderen Datentypen für umfassende Automatisierungslösungen.\n• Kontextuelle Intelligenz: Tieferes Verständnis von Geschäftskontexten und Nuancen für präzisere Automatisierungsentscheidungen.\n• Adaptive Benutzeroberflächen: Dynamische Anpassung von Systeminteraktionen basierend auf Nutzerverhalten und Präferenzen.\n• Wissensextraktion und -synthese: Automatische Gewinnung und Kombination von Erkenntnissen aus verschiedenen Datenquellen.\n\n🔮 Zukunftsperspektiven der IA-Definition:\n• Agentic AI: Entwicklung autonomer KI-Agenten, die komplexe Aufgaben selbstständig planen und ausführen können.\n• Multiagent-Systeme: Koordination mehrerer spezialisierter KI-Agenten für komplexe Geschäftsprozesse.\n• Kontinuierliche Selbstoptimierung: Systeme, die ihre eigenen Prozesse und Algorithmen kontinuierlich verbessern.\n• Ethische und verantwortungsvolle Automatisierung: Integration von Fairness, Transparenz und Nachhaltigkeit als Kernprinzipien der IA-Definition."
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
