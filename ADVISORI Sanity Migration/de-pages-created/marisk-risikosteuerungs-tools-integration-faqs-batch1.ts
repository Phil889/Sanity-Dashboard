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
    console.log('Updating MaRisk Risikosteuerungs-Tools Integration page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-risikosteuerungs-tools-integration' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-risikosteuerungs-tools-integration" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die Integration spezialisierter Tools für die MaRisk-Compliance mehr als nur eine technische Implementierung und wie unterstützt ADVISORI bei diesem strategischen Prozess?",
        answer: "Für Finanzinstitute ist die Integration von Risikosteuerungs-Tools keine rein technologische Herausforderung, sondern ein strategischer Transformationsprozess mit weitreichenden Auswirkungen auf die Governance, Prozesse und Kultur des Risikomanagements. Die wachsende Komplexität der MaRisk-Anforderungen und das ansteigende Risikospektrum erfordern einen ganzheitlichen Integrationsansatz, der über einfache System-Implementierungen hinausgeht.\n\n🔄 Strategische Dimensionen der Tool-Integration:\n• Prozessharmonisierung: Die Integration spezialisierter Tools erfordert eine Neuausrichtung und Standardisierung von Risikomanagement-Prozessen über verschiedene Abteilungen und Risikoarten hinweg.\n• Datenmanagement: Die Schaffung einer einheitlichen Datenbasis (Single Source of Truth) für alle Risikoinformationen ist fundamentaler Bestandteil einer erfolgreichen Tool-Integration.\n• Governance-Transformation: Neue Tools verändern Entscheidungswege, Verantwortlichkeiten und Eskalationsprozesse im Risikomanagement.\n• Kulturwandel: Die Einführung integrierter Tools verändert die Arbeitsweise der Risikomanager und erfordert neue Kompetenzen und Denkweisen.\n\n🛠️ Der ADVISORI-Ansatz für ganzheitliche Tool-Integration:\n• Business-IT-Alignment: Wir betrachten Risikosteuerungs-Tools nicht isoliert, sondern als Enabler für MaRisk-konforme Geschäftsprozesse und strategische Ziele.\n• Prozessorientierte Integration: Statt Tools an bestehende Prozesse anzupassen, gestalten wir gemeinsam optimierte End-to-End-Risikoprozesse, die durch die Tools unterstützt werden.\n• Change Management: Wir begleiten den organisatorischen Wandel mit gezielten Maßnahmen zur Akzeptanzsteigerung und Kompetenzentwicklung.\n• Iteratives Vorgehen: Anstelle von Big-Bang-Implementierungen setzen wir auf schrittweise Integration mit schnellen Mehrwerten und kontinuierlichen Verbesserungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die Investitionen in Risikosteuerungs-Tools konkret rechtfertigen und welchen ROI können wir durch eine optimierte MaRisk-Toollandschaft erwarten?",
        answer: "Die Investition in eine integrierte Risikosteuerungs-Toollandschaft ist als strategischer Werttreiber zu betrachten, der sowohl direkte Kosteneinsparungen als auch indirekte strategische Vorteile bietet. ADVISORI unterstützt Sie dabei, den Business Case für Ihre Tool-Integration mit konkreten Kennzahlen und qualitativen Vorteilen zu untermauern.\n\n💹 Quantitative Werttreiber und ROI-Faktoren:\n• Prozesseffizienz: Reduzierung des manuellen Aufwands für Risikodatenerhebung, -konsolidierung und -reporting um typischerweise 40-60%, was direkte Personalkosteneinsparungen bedeutet.\n• Vermeidung regulatorischer Bußgelder: Die systematische Minimierung von Compliance-Lücken reduziert das Risiko kostspieliger aufsichtsrechtlicher Maßnahmen.\n• Reduktion von Datenqualitätskosten: Integrierte Tools senken nachweislich den Aufwand für Datenbereinigung, Fehlersuche und Nacharbeiten um bis zu 35%.\n• IT-Kostenoptimierung: Die Konsolidierung der Toollandschaft reduziert Lizenz-, Wartungs- und Schnittstellenkosten und kann die TCO um 20-30% senken.\n\n🌟 Strategische Wertsteigerung durch Tool-Integration:\n• Agilität und Time-to-Compliance: Verkürzte Reaktionszeit bei regulatorischen Änderungen von Monaten auf Wochen durch flexible, gut integrierte Systeme.\n• Datengetriebene Entscheidungsfindung: Verbesserte Risikoeinschätzung und strategische Entscheidungen durch konsistente, zeitnahe Risikoinformationen.\n• Mitarbeiterzufriedenheit und -bindung: Moderne, integrierte Tools steigern erwiesenermaßen die Arbeitszufriedenheit und helfen, Fachkräfte zu gewinnen und zu halten.\n• Wettbewerbsvorteil: Institute mit ausgereifter, integrierter Risikotechnologie können neue Geschäftsfelder schneller und sicherer erschließen.\n\n📊 ADVISORI's Vorgehen zur ROI-Quantifizierung:\n• Baseline-Erfassung: Detaillierte Analyse der aktuellen Kosten- und Leistungsstruktur Ihres Risikomanagements.\n• Nutzwertanalyse: Bewertung sowohl quantitativer als auch qualitativer Vorteile der Tool-Integration.\n• ROI-Modellierung: Entwicklung eines mehrjährigen Modells zur Darstellung von Investitionskosten und -erträgen.\n• Metriken-Framework: Etablierung von KPIs zur kontinuierlichen Messung und Nachverfolgung des Integrationserfolgs."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie gestaltet ADVISORI die Transition von einer fragmentierten zu einer integrierten MaRisk-Toollandschaft ohne den laufenden Betrieb zu gefährden?",
        answer: "Die Transformation einer gewachsenen, heterogenen Toollandschaft zu einer integrierten MaRisk-konformen Architektur ist ein komplexes Vorhaben, das sowohl technische als auch organisatorische Risiken birgt. ADVISORI hat einen bewährten Transitionsansatz entwickelt, der die Betriebskontinuität sicherstellt und gleichzeitig eine schrittweise, kontrollierte Evolution Ihrer Risikomanagement-Infrastruktur ermöglicht.\n\n🔁 Grundprinzipien unseres Transitionsansatzes:\n• Parallelstrukturen statt Big Bang: Wir implementieren neue Systeme parallel zu bestehenden Lösungen und migrieren schrittweise Funktionen und Daten.\n• Risikoorientierte Priorisierung: Die Umstellung erfolgt nach einer Risikobewertung, beginnend mit weniger kritischen Bereichen.\n• Testgetriebene Implementierung: Jede Integration wird umfassend getestet, bevor sie in die Produktivumgebung überführt wird.\n• Reversibilität: Für jede Migrationsphase existieren Fallback-Szenarien, um bei unvorhergesehenen Problemen schnell zum Ausgangszustand zurückkehren zu können.\n\n🏗️ Architekturmodelle für die Transition:\n• Fassaden-Ansatz: Einführung einer Integrationsschicht, die bestehende Systeme mit einer einheitlichen Benutzeroberfläche verbindet.\n• Hub-and-Spoke-Modell: Implementierung einer zentralen Datenplattform, die schrittweise an bestehende Systeme angebunden wird.\n• Modulare Ablösung: Systematischer Ersatz einzelner Tool-Komponenten durch integrierte Lösungen bei Beibehaltung der Gesamtarchitektur.\n• Daten-ETL-Ansatz: Aufbau eines konsolidierten Data Warehouse parallel zur bestehenden Systemlandschaft für Reporting-Zwecke.\n\n📋 Konkrete Transitional Governance Maßnahmen:\n• Dual Operation Teams: Spezialisierte Teams, die sowohl die alten als auch die neuen Systeme während der Übergangsphase betreuen.\n• Quality Gates: Klar definierte Qualitätskriterien, die erfüllt sein müssen, bevor der nächste Transitionsschritt eingeleitet wird.\n• Erhöhtes Monitoring: Verstärkte Überwachung kritischer Prozesse und Systeme während der Transitionsphase.\n• Beschleunigte Eskalationswege: Verkürzte Entscheidungsprozesse bei Problemen während der Migration."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche aktuellen Trends in der Risikosteuerungs-Technologie sollten wir bei unserer MaRisk-Tool-Strategie berücksichtigen, um zukunftssicher zu bleiben?",
        answer: "Die Technologielandschaft für Risikosteuerung und MaRisk-Compliance befindet sich in einem tiefgreifenden Wandel. Eine zukunftssichere Tool-Strategie muss sowohl aktuelle technologische Entwicklungen als auch regulatorische Trends antizipieren. ADVISORI unterstützt Sie dabei, Ihre Risikosteuerungs-Infrastruktur so zu gestalten, dass sie nicht nur heutige Anforderungen erfüllt, sondern auch flexibel genug für zukünftige Entwicklungen ist.\n\n🚀 Transformative Technologietrends für MaRisk-konforme Tools:\n• KI und Advanced Analytics: Machine Learning zur Früherkennung von Risikoindikatoren, Anomalien und Mustern in Risikodaten ermöglicht proaktives statt reaktives Risikomanagement.\n• Risiko-API-Architektur: Microservice-basierte Architekturen mit standardisierten APIs ersetzen monolithische Risikosteuerungssysteme und schaffen flexible, erweiterbare Plattformen.\n• Integrierte GRC-Plattformen: Konvergenz von Governance, Risk und Compliance in umfassenden Lösungen, die bereichsübergreifende Risikosicht ermöglichen.\n• Echtzeit-Risikodashboards: Von statischen Berichten zu dynamischen, interaktiven Visualisierungen mit Drill-Down-Funktionalität und Echtzeitdaten.\n\n📱 Neue Nutzungsmodelle und Zukunftsfaktoren:\n• Cloud-native Risikolösungen: Skalierbare, flexible und kosteneffiziente Modelle, die regulatorischen Cloud-Anforderungen entsprechen (z.B. gemäß BAIT).\n• Collaborative Risk Management: Tools mit integrierten Kollaborationsfunktionen für verteilte Teams und Stakeholder.\n• No-Code/Low-Code Konfiguration: Anpassbare Risikoprozesse und -berichte ohne umfangreiche Entwicklungsarbeiten.\n• Embedded Risk Controls: Integration von Risikokontrollen direkt in operative Systeme und Geschäftsprozesse.\n\n🔮 Regulatorische Zukunftssignale für die Tool-Strategie:\n• Erweiterte Datengranularität: Neue aufsichtsrechtliche Anforderungen verlangen zunehmend granulare, transaktionsbasierte Datenhaltung statt aggregierter Risikowerte.\n• Integriertes ESG-Risikomanagement: Die Verschmelzung von Nachhaltigkeitsrisiken mit traditionellen Risikoarten erfordert erweiterte Tool-Funktionen.\n• Automatisierte Regulatory Reporting: Direkte Schnittstellenfähigkeit zu aufsichtsrechtlichen Plattformen wird zum Standard.\n• Erweiterte BCM-Integration: Stärkere Verknüpfung von Risikomanagement und Business Continuity Management gemäß aktueller MaRisk-Novellen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
