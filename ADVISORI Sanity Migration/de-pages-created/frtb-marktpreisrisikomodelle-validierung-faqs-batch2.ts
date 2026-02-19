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
    console.log('Updating FRTB Marktpreisrisikomodelle Validierung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-marktpreisrisikomodelle-validierung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-marktpreisrisikomodelle-validierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche technologischen Innovationen sollten wir für die FRTB-Modellvalidierung einsetzen und wie unterstützt ADVISORI bei deren Integration?",
        answer: "Die FRTB-Modellvalidierung stellt durch ihre Komplexität und Datenintensität eine ideale Kandidatin für den Einsatz moderner Technologien dar. Die richtigen technologischen Lösungen können nicht nur die Compliance sicherstellen, sondern auch signifikante Effizienzgewinne und strategische Vorteile generieren.\n\n🚀 Transformative Technologien für die FRTB-Modellvalidierung:\n• Cloud Computing & Elastic Compute: Die massiven Rechenanforderungen für FRTB-Simulationen und Backtest-Berechnungen erfordern skalierbare Rechenkapazitäten, die durch Cloud-Lösungen kosteneffizient bereitgestellt werden können – mit Rechenzeit-Reduktionen von bis zu 80%.\n• Big Data Architekturen: Die Verarbeitung und Analyse der umfangreichen historischen Markt- und Positionsdaten für FRTB erfordert moderne Data-Lake-Konzepte und verteilte Datenverarbeitungstechnologien.\n• Machine Learning für Validierung: Fortschrittliche Algorithmen können Muster in Modellabweichungen identifizieren, Ausreißer erkennen und Validierungsprozesse automatisieren, was die Qualität und Effizienz der Validierung erheblich steigert.\n• Automatisierte Reporting-Pipelines: End-to-End-Daten-Pipelines, die Rohdaten in regulatorische Berichte transformieren, reduzieren manuelle Eingriffe und damit verbundene Fehlerrisiken.\n\n💻 ADVISORIs integrierter Technologie-Ansatz:\n• Technologiestrategie-Entwicklung: Wir entwickeln eine maßgeschneiderte Technologie-Roadmap, die Ihre bestehende IT-Landschaft berücksichtigt und schrittweise Transformationen ermöglicht, ohne den laufenden Betrieb zu gefährden.\n• Modulare Microservice-Architekturen: Implementation von flexiblen, modularen Validierungslösungen, die kontinuierliche Innovation ermöglichen und leicht an regulatorische Änderungen angepasst werden können.\n• Integration bestehender Systeme: Nahtlose Verbindung neuer Technologielösungen mit Ihren bestehenden Systemen durch moderne API-Konzepte und Middleware-Lösungen.\n• Agile Delivery-Methoden: Umsetzung in iterativen Sprints mit kontinuierlicher Wertschöpfung, anstatt monolithischer Projekte mit langen Entwicklungszyklen und spätem Return-on-Investment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die Backtesting-Anforderungen unter FRTB effektiv umsetzen und welche Best Practices empfiehlt ADVISORI zur Optimierung der Testergebnisse?",
        answer: "Das FRTB-Backtesting stellt erweiterte Anforderungen, die weit über die VaR-basierten Tests unter Basel 2.5 hinausgehen. Es ist ein kritischer Erfolgsfaktor für die regulatorische Anerkennung interner Modelle und hat direkte Auswirkungen auf die Kapitalanforderungen. Eine strategische Herangehensweise kann die Erfolgswahrscheinlichkeit maximieren und regulatorische Aufschläge minimieren.\n\n📈 Erweiterte Anforderungen des FRTB-Backtestings:\n• Dual-Level-Backtesting: Validierung sowohl auf Trading-Desk-Ebene als auch auf Gesamtbankebene, was unterschiedliche methodische Ansätze und Governance-Strukturen erfordert.\n• Expected Shortfall statt VaR: Der Übergang zu Expected Shortfall als primäre Risikomaßzahl erfordert angepasste Backtesting-Methoden, da ES nicht direkt überprüfbar ist wie VaR.\n• Höhere Frequenz und Granularität: Tägliche Tests mit detaillierten Analysen und spezifischen Anforderungen an Dokumentation und Eskalationsprozesse.\n• Strikte Konsequenzen: Fehlgeschlagene Tests können direkt zum Verlust der IMA-Zulassung für einen Desk führen, mit erheblichen Kapitalauswirkungen.\n\n🔬 ADVISORIs Best-Practice-Framework für FRTB-Backtesting:\n• Proaktives Backtesting-Design: Entwicklung von Testverfahren, die über die Mindestanforderungen hinausgehen und frühzeitig potenzielle Probleme identifizieren, bevor sie regulatorisch relevant werden.\n• Erklärbare Risikomodelle: Implementation von Modellen, deren Ergebnisse transparent und nachvollziehbar sind, was die Analyse und Erklärung von Ausreißern erheblich erleichtert.\n• Integrierte Überschreitungsanalyse: Aufbau eines strukturierten Frameworks zur tiefgreifenden Analyse jeder Überschreitung, das regulatorischen Anforderungen entspricht und kontinuierliche Modellverbesserungen ermöglicht.\n• Stressperioden-Integration: Systematische Einbeziehung historischer Stressperioden in das Backtesting, um die Modellrobustheit unter extremen Marktbedingungen zu validieren.\n• Backtesting-Governance: Etablierung klarer Verantwortlichkeiten, Eskalationswege und Entscheidungsprozesse für den Umgang mit Testüberschreitungen und Modellschwächen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Auswirkungen hat die FRTB-Modellvalidierung auf unsere Trading-Desk-Struktur und wie sollten wir diese strategisch anpassen?",
        answer: "Die FRTB-Anforderungen, insbesondere die Modellvalidierungskomponenten, haben tiefgreifende Implikationen für Ihre Trading-Desk-Struktur. Eine strategische Neuausrichtung kann erhebliche Kapitalvorteile bieten und gleichzeitig die Wahrscheinlichkeit einer erfolgreichen regulatorischen Anerkennung interner Modelle maximieren.\n\n🔄 Strukturelle Implikationen von FRTB für Trading Desks:\n• Desk-Level-Genehmigung: Die IMA-Genehmigung erfolgt auf Desk-Ebene, was die Desk-Struktur zu einer strategischen Variable für die Kapitaloptimierung macht.\n• P&L Attribution als Strukturtreiber: Die Fähigkeit eines Desks, den PLAT zu bestehen, hängt stark von seiner Zusammensetzung und der Homogenität seiner Handelsinstrumente ab.\n• Risikofaktor-Abdeckung: Die Modellierbarkeit von Risikofaktoren variiert zwischen verschiedenen Assetklassen, was die optimale Desk-Aggregation beeinflusst.\n• Managementinformations-Anforderungen: Die granulare Berichterstattung und Überwachung erfordert klare Verantwortlichkeiten und Datenflüsse innerhalb der Desk-Struktur.\n\n🏗️ ADVISORIs Framework für strategische Desk-Restrukturierung:\n• Datengestützte Strukturanalyse: Wir führen eine umfassende Analyse Ihrer aktuellen Desk-Struktur durch, basierend auf historischen Daten, Risikofaktormodellierbarkeit und P&L-Attributionsmetriken.\n• Simulationsbasierte Optimierung: Entwicklung verschiedener Strukturszenarien und Simulation ihrer Auswirkungen auf Kapitalanforderungen und regulatorische Compliance-Wahrscheinlichkeit.\n• Governance-integrierte Implementierung: Unterstützung bei der Umsetzung der optimierten Struktur unter Berücksichtigung von Governance, Reporting und IT-Implikationen.\n• Change-Management: Begleitung des Transformationsprozesses mit Fokus auf Mitarbeiterakzeptanz, Schulung und kulturelle Integration.\n• Kontinuierliche Überwachung: Etablierung von KPIs und Monitoring-Prozessen zur laufenden Evaluation der Desk-Struktur-Effektivität und frühzeitigen Identifikation von Anpassungsbedarf."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Datenqualitätsanforderungen für die FRTB-Modellvalidierung erfüllen und welche strategischen Vorteile bietet ein fortschrittliches Datenmanagement?",
        answer: "Die Datenqualität ist ein fundamentaler Erfolgsfaktor für die FRTB-Modellvalidierung und geht weit über reine Compliance-Aspekte hinaus. Eine strategische Herangehensweise an das Datenmanagement kann sowohl regulatorische Anforderungen erfüllen als auch signifikante geschäftliche Mehrwerte generieren.\n\n📊 Kritische Datenqualitätsanforderungen unter FRTB:\n• Marktdaten-Vollständigkeit: Umfassende historische Zeitreihen für alle relevanten Risikofaktoren mit ausreichender Granularität und Tiefe für Modellkalibrierung und Backtesting.\n• Datenlineage und Nachvollziehbarkeit: Lückenlose Dokumentation der Datenherkunft, -transformation und -verwendung, um regulatorische Transparenzanforderungen zu erfüllen.\n• Zeitliche Konsistenz: Synchronisierte Erfassung von Marktdaten, Positionsdaten und Modellparametern zur Gewährleistung konsistenter Point-in-Time-Analysen.\n• Governance und Kontrollen: Robuste Datenqualitätskontrollen und klare Verantwortlichkeiten für Datenqualität auf allen Ebenen.\n\n💾 ADVISORIs strategischer Datenmanagement-Ansatz:\n• Data Maturity Assessment: Umfassende Bewertung Ihrer aktuellen Datenfähigkeiten entlang der Dimensionen Datenarchitektur, Governance, Qualität und Nutzung als Basis für einen zielgerichteten Transformationsplan.\n• Datenqualitäts-Framework: Implementierung eines ganzheitlichen Frameworks mit automatisierten Kontrollen, Eskalationswegen und kontinuierlichem Monitoring der Datenqualität.\n• Metadaten-Management: Aufbau eines umfassenden Metadaten-Repositories, das regulatorische Anforderungen an Nachvollziehbarkeit erfüllt und gleichzeitig die Datennutzung und -analyse erleichtert.\n• Data-Governance-Integration: Verankerung der Datenqualitätsverantwortung in bestehenden Governance-Strukturen mit klaren Rollen und Verantwortlichkeiten.\n• Strategische Datennutzung: Entwicklung von Ansätzen, die über die regulatorische Compliance hinausgehen und die verbesserte Datenqualität für geschäftliche Entscheidungen und Wettbewerbsvorteile nutzen."
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
