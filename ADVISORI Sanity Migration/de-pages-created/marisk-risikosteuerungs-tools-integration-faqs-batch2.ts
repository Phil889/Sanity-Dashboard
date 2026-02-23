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
    console.log('Updating MaRisk Risikosteuerungs-Tools Integration page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie unterstützt ADVISORI bei der Identifizierung der kritischen Anforderungen an unsere Risikosteuerungs-Tools, und wie wird dabei die Einhaltung der neuesten MaRisk-Novellen sichergestellt?",
        answer: "Die Definition der Anforderungen an Risikosteuerungs-Tools ist ein entscheidender Schritt, der die Grundlage für eine erfolgreiche MaRisk-konforme Tool-Integration bildet. ADVISORI verfolgt einen mehrdimensionalen Anforderungsansatz, der regulatorische Vorgaben, geschäftliche Ziele und technische Rahmenbedingungen gleichermaßen berücksichtigt.\n\n📋 Ganzheitlicher Anforderungsmanagement-Prozess:\n• Regulatorische Anforderungsanalyse: Wir identifizieren systematisch alle relevanten MaRisk-Vorgaben und deren Auswirkungen auf Ihre Risikosteuerungs-Tools, mit besonderem Fokus auf die aktuellsten Novellierungen und BaFin-Rundschreiben.\n• Stakeholder-basierte Bedarfsermittlung: Durch strukturierte Workshops mit allen relevanten Fachbereichen (Risikocontrolling, Compliance, Interne Revision, etc.) erfassen wir die unterschiedlichen fachlichen Anforderungen.\n• Process-to-Tool Mapping: Wir leiten Tool-Anforderungen direkt aus Ihren Risikomanagement-Prozessen ab und identifizieren Automatisierungs- und Optimierungspotenziale.\n• IT-Architektur-Alignment: Analyse der Integrationsfähigkeit in Ihre bestehende IT-Landschaft und Definition von Schnittstellenanforderungen.\n\n🔍 Spezifische MaRisk-Fokusthemen in der Anforderungsanalyse:\n• Risikosteuerungsfunktionen: Identifikation der spezifischen Tools für verschiedene Risikoarten (Adressrisiken, Marktpreisrisiken, Liquiditätsrisiken, operationelle Risiken) gemäß BTR-Anforderungen.\n• Datenqualitätsmanagement: Definition von Anforderungen an Datenqualitätsprozesse und -kontrollen gemäß AT 4.3.4.\n• Risikoreporting: Spezifikation der Berichtsanforderungen für Risikoberichte an Vorstand und Aufsichtsrat gemäß BT 3.\n• Stresstesting-Funktionalität: Anforderungen an Werkzeuge für Stresstests und Szenarioanalysen gemäß AT 4.3.3.\n\n📐 Priorisierungsmethodik für Anforderungen:\n• Must-Have-Anforderungen: Direkt aus regulatorischen Vorgaben abgeleitete, für die Compliance unverzichtbare Funktionen.\n• Should-Have-Anforderungen: Funktionen, die die Effizienz und Effektivität des Risikomanagements signifikant verbessern.\n• Nice-to-Have-Anforderungen: Ergänzende Funktionalitäten, die zusätzlichen Mehrwert bieten, aber nicht unmittelbar compliance-relevant sind.\n• Future-Ready-Anforderungen: Zukunftsorientierte Funktionen, die kommende regulatorische Entwicklungen antizipieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie kann ADVISORI uns konkret bei der Integration von Daten aus verschiedenen Risikosteuerungs-Tools zu einer konsistenten Gesamtrisikoposition gemäß MaRisk unterstützen?",
        answer: "Die Konsolidierung von Risikodaten aus unterschiedlichen Quellsystemen zu einer konsistenten Gesamtrisikoposition stellt eine der größten Herausforderungen in der MaRisk-konformen Risikosteuerung dar. ADVISORI hat spezialisierte Methoden und Konzepte entwickelt, um diese Datenintegration technisch robust und fachlich präzise zu gestalten.\n\n🧩 Architekturkonzepte für integrierte Risikodaten:\n• Risiko-Data-Hub: Implementierung einer zentralen Datendrehscheibe, die als Single Point of Truth für alle Risikodaten fungiert und die Konsistenz über verschiedene Risikoarten hinweg sicherstellt.\n• Metadaten-Management: Einführung eines unternehmensweit einheitlichen Risikodaten-Glossars und taxonomischer Standards, um semantische Konsistenz zu gewährleisten.\n• Golden Source-Prinzip: Etablierung verbindlicher Primärquellen für kritische Risikodatenelemente (z.B. Kontrahentendaten, Marktdaten, Risikoparameter).\n• Reconciliation-Framework: Entwicklung automatisierter Abstimmungsprozesse zwischen verschiedenen Risikodomänen und Quellsystemen.\n\n🔄 Datenintegrationsprozess in der Praxis:\n• Datenqualitätsprüfung: Implementierung automatisierter Validierungsregeln und Datenqualitätskontrollen an den Schnittstellen zwischen Tools.\n• Data Lineage: Aufbau einer durchgängigen Nachvollziehbarkeit des Datenflusses von der Quelle bis zur finalen Risikoberichterstattung.\n• Timing-Konzepte: Harmonisierung unterschiedlicher Datenaktualisierungszyklen und Stichtagslogiken für eine zeitlich konsistente Risikosicht.\n• Dimensionsmanagement: Sicherstellung konsistenter Aggregations- und Analysedimensionen (z.B. Organisationseinheiten, Produkte, Regionen) über alle Risikoarten hinweg.\n\n📊 Umsetzungsbeispiele für konsolidierte Risikoberichte:\n• Executive Risk Dashboard: Implementierung einer Management-Cockpit-Lösung, die alle wesentlichen Risikokennzahlen integriert und MaRisk-konforme Gesamtbankrisikoberichte ermöglicht.\n• Regulatorisches Reporting: Konsolidierung der relevanten Datenpunkte aus verschiedenen Risikodomänen für aufsichtsrechtliche Meldungen (SREP, ICAAP, ILAAP).\n• Integriertes Stress Testing: Verknüpfung von Stress-Test-Ergebnissen aus verschiedenen Risikotools zu einer konsistenten Gesamtbankstress-Sicht.\n• Risk Appetite Monitoring: Etablierung eines toolübergreifenden Limit-Monitoring-Systems mit Eskalationsmechanismen und ganzheitlicher Limitauslastungsübersicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Ansätze verfolgt ADVISORI bei der Auswahl und dem Vergleich verschiedener Risikosteuerungs-Tools, und wie wird dabei ein optimales Kosten-Nutzen-Verhältnis sichergestellt?",
        answer: "Die Auswahl der richtigen Risikosteuerungs-Tools ist eine strategische Entscheidung mit langfristigen Auswirkungen auf Ihre MaRisk-Compliance und die Effektivität Ihres Risikomanagements. ADVISORI unterstützt Sie mit einem strukturierten, herstellerunabhängigen Evaluierungsprozess, der sowohl fachliche als auch wirtschaftliche Aspekte berücksichtigt.\n\n🔎 Mehrstufiger Tool-Evaluierungsprozess:\n• Marktanalyse und Tool-Screening: Umfassende Analyse des relevanten Marktes für Risikosteuerungs-Tools mit Fokus auf MaRisk-Konformität und Eignung für Ihr Institutsprofil.\n• Anforderungs-Mapping: Systematischer Abgleich der erfassten fachlichen und technischen Anforderungen mit den Funktionen der Tool-Kandidaten.\n• Proof-of-Concept: Durchführung fokussierter Tests mit realen Daten und Use Cases, um die praktische Anwendbarkeit und Integrierbarkeit zu validieren.\n• Referenzanalyse: Strukturierte Interviews mit bestehenden Anwendern, insbesondere solchen mit ähnlichem Institutsprofil und regulatorischen Anforderungen.\n\n⚖️ Multi-Kriterien-Bewertungssystem für optimale Tool-Auswahl:\n• Funktionale Abdeckung: Bewertung des Erfüllungsgrads der Must-Have-, Should-Have- und Nice-to-Have-Anforderungen mit gewichteten Scoring-Modellen.\n• Total Cost of Ownership: Ganzheitliche Kostenbetrachtung über den gesamten Lebenszyklus, inklusive Lizenz-, Implementierungs-, Wartungs- und Schulungskosten.\n• Zukunftssicherheit: Bewertung der Produktstrategie, Entwicklungsroadmap und Anpassungsfähigkeit an regulatorische Änderungen.\n• Integrationsaufwand: Analyse der erforderlichen Anpassungen, Schnittstellen und Migrationspfade für die Einbindung in Ihre bestehende Systemlandschaft.\n\n📈 Optimierung des Kosten-Nutzen-Verhältnisses:\n• Modulare Beschaffungsstrategie: Entwicklung eines stufenweisen Implementierungsplans, der mit kritischen Funktionen beginnt und schrittweise erweitert wird.\n• Szenario-basierte ROI-Analyse: Berechnung verschiedener Business-Case-Szenarien mit unterschiedlichen Annahmen zu quantifizierbaren Nutzeneffekten.\n• Lizenzmodell-Optimierung: Vergleich verschiedener Lizenzmodelle (Perpetual, Subscription, User-based, Volume-based) hinsichtlich ihrer finanziellen Auswirkungen.\n• Build-vs-Buy-Bewertung: Objektive Analyse, ob für spezifische Funktionen eine Eigenentwicklung wirtschaftlich sinnvoller ist als der Einkauf einer Standardlösung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "In welchem Umfang unterstützt ADVISORI bei der Schulung unserer Mitarbeiter im Umgang mit den implementierten Risikosteuerungs-Tools und wie wird der Wissenstransfer nachhaltig gesichert?",
        answer: "Die erfolgreiche Integration von Risikosteuerungs-Tools erfordert nicht nur die technische Implementierung, sondern auch die Befähigung der Mitarbeiter, diese Tools effektiv und MaRisk-konform zu nutzen. ADVISORI bietet ein umfassendes Change Management und Schulungskonzept, das den nachhaltigen Wissenstransfer sicherstellt und die Akzeptanz der neuen Tools fördert.\n\n🎓 Mehrdimensionales Schulungs- und Befähigungskonzept:\n• Zielgruppenspezifische Schulungsformate: Wir entwickeln maßgeschneiderte Schulungsprogramme für verschiedene Anwendergruppen - von technischen Administratoren über Risikomanager bis hin zu Führungskräften und Entscheidungsträgern.\n• Learning Journey Ansatz: Statt isolierter Trainingseinheiten setzen wir auf einen kontinuierlichen Lernpfad mit aufeinander aufbauenden Modulen, der dem Anwendungskontext und der Lernkurve der Mitarbeiter gerecht wird.\n• Blended Learning: Kombination verschiedener Lernformate wie Präsenzschulungen, Webinare, E-Learning-Module und On-the-Job-Training für maximale Lernerfolge.\n• Praxisfokussierte Workshops: Durchführung abteilungsübergreifender End-to-End-Prozess-Workshops, die den gesamten Risikosteuerungsprozess mit den neuen Tools abbilden.\n\n📚 Nachhaltige Wissenssicherung und -dokumentation:\n• Erstellung institutsspezifischer Tool-Handbücher: Entwicklung maßgeschneiderter Dokumentation, die sowohl die technische Bedienung als auch die fachlichen Zusammenhänge und MaRisk-relevanten Aspekte abdeckt.\n• Knowledge Base: Aufbau einer digitalen Wissensdatenbank mit Anleitungen, FAQ, Best Practices und Use Cases, die kontinuierlich erweitert wird.\n• Expert User Programm: Identifikation und gezielte Förderung interner Experten, die als Multiplikatoren und erste Ansprechpartner in ihren Abteilungen fungieren.\n• Prozessintegrierte Hilfestellungen: Implementation kontextsensitiver Hilfe und Prozessguidelines direkt in die Tools, die bei der täglichen Arbeit unterstützen.\n\n🤝 Change Management für nachhaltige Adoption:\n• Stakeholder-Analyse und Change-Impact-Assessment: Systematische Identifikation der von Veränderungen betroffenen Gruppen und deren spezifischen Bedürfnisse.\n• Kommunikationsstrategie: Entwicklung eines transparenten Kommunikationsplans mit regelmäßigen Updates zum Implementierungsfortschritt und kommenden Veränderungen.\n• Early Adopter Program: Frühzeitige Einbindung ausgewählter Anwender in den Implementierungsprozess, um Feedback zu sammeln und Akzeptanz zu fördern.\n• Erfolgsmonitoring: Etablierung von KPIs zur Messung der Tool-Adoption und Nutzerakzeptanz mit regelmäßigem Feedback-Prozess."
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
