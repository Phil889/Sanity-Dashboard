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
    console.log('Updating CRR/CRD RWA Berechnung Methodik page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-rwa-berechnung-methodik' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-rwa-berechnung-methodik" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche grundlegenden Berechnungsmethoden für RWA existieren unter CRR/CRD und wie unterscheiden sie sich hinsichtlich Komplexität und Kapitaleffizienz?",
        answer: "Die Berechnung risikogewichteter Aktiva (RWA) unter dem CRR/CRD-Regelwerk folgt einem abgestuften Methodenspektrum, das von standardisierten bis hin zu hochentwickelten internen Modellansätzen reicht. Die Wahl der geeigneten Methodik beeinflusst direkt die Kapitalanforderungen und kann erhebliche Auswirkungen auf die strategische Positionierung eines Finanzinstituts haben.\n\n🔍 Grundlegende RWA-Berechnungsmethoden im Überblick:\n• Kreditrisiko-Standardansatz (KSA): Anwendung regulatorisch vorgegebener Risikogewichte basierend auf Exposureklassen und externen Ratings. Zeichnet sich durch Einfachheit in der Implementierung aus, führt jedoch häufig zu höheren Kapitalanforderungen durch konservative Risikogewichtung.\n• Internal Ratings-Based Approach (IRBA): Differenziert in Foundation-IRBA (F-IRBA) mit teilweiser und Advanced-IRBA (A-IRBA) mit vollständiger Nutzung bankinterner Risikoparameter. Ermöglicht risikosensitivere Kapitalunterlegung bei erhöhten Anforderungen an Datenqualität und Validierungsprozesse.\n• Marktrisiko-Ansätze: Reichen vom einfachen Standardansatz bis zum Internal Model Approach (IMA) mit VaR/ES-Modellen nach FRTB-Standards. Die internen Modelle erfordern umfangreiche Backtesting-Prozesse und Validierungen, können aber zu signifikanter Kapitaleffizienz führen.\n• Operationelles Risiko: Der Standardmessansatz (SMA) nach Basel III ersetzt frühere Ansätze und kombiniert einen bilanzkennzahlenbasierten Business Indicator mit einem institutsspezifischen Verlustmultiplikator.\n\n📊 Komplexitäts-Kapitaleffizienz-Matrix:\n• Standardansätze: Geringere Implementierungskomplexität (60-80% weniger Ressourcenaufwand als interne Modelle), aber typischerweise 20-40% höhere Kapitalanforderungen durch konservative Kalibrierung.\n• Interne Modelle: Erhöhte Komplexität durch umfangreiche Daten-, Modellierungs- und Governance-Anforderungen, können jedoch zu 15-35% niedrigeren RWA führen bei Portfolios mit günstiger Risikodiversifikation.\n• Hybride Ansätze: Selektive Anwendung interner Modelle für Kernportfolios bei gleichzeitiger Nutzung von Standardansätzen für weniger materieller Exposures, um Implementierungsaufwand und Kapitaleffizienz zu optimieren.\n\n🛠️ Strategische Auswahlkriterien:\n• Portfoliocharakteristika: Analyse der Risikoprofile und Datenqualität verschiedener Geschäftsbereiche zur Identifikation jener Portfolios, die den größten Nutzen aus fortgeschrittenen Ansätzen ziehen können.\n• Implementierungskosten vs. Kapitalersparnis: Durchführung einer detaillierten Kosten-Nutzen-Analyse unter Berücksichtigung von IT-Infrastruktur, Personalressourcen und Validierungsaufwand im Verhältnis zur potenziellen Kapitalersparnis.\n• Regulatorische Entwicklungsperspektive: Berücksichtigung künftiger Änderungen wie Output-Floor und Basel IV-Finalisierungen, die den Kapitalvorteil interner Modelle potenziell begrenzen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute ihre RWA-Berechnungsmethodiken optimal an institutsindividuelle Risikoprofile anpassen und gleichzeitig regulatorische Konformität gewährleisten?",
        answer: "Die Optimierung von RWA-Berechnungsmethodiken erfordert einen balancierten Ansatz, der die individuellen Risikoeigenschaften eines Instituts adäquat abbildet und gleichzeitig vollständige regulatorische Konformität sicherstellt. Dieser Prozess ist weniger eine Standardimplementierung als vielmehr eine strategische Kalibrierung, die erhebliches Optimierungspotenzial bieten kann, ohne regulatorische Grenzen zu überschreiten.\n\n🎯 Strategische Methodikenoptimierung für institutsindividuelle Risikoprofile:\n• Granulare Segmentierung: Entwicklung einer präzisen, risikodifferenzierenden Segmentierungslogik, die homogene Risikogruppen identifiziert und dadurch eine risikogenauere Kapitalallokation ermöglicht als die breiteren regulatorischen Standardkategorien.\n• Parameteroptimierung: Sorgfältige Kalibrierung von PD-, LGD- und EAD-Modellen basierend auf institutsindividuellen historischen Daten unter strenger Einhaltung regulatorischer Mindestanforderungen für Konservativität und Marginzuschläge.\n• Methodik-Hybridisierung: Strategische Kombination verschiedener Ansätze für unterschiedliche Portfoliosegmente basierend auf Datenqualität, Risikomateriabilität und potenzieller Kapitaleffizienz.\n• Berücksichtigung von Risikominderungstechniken: Präzise Modellierung und Dokumentation von Sicherheiten, Garantien und Netting-Vereinbarungen zur optimalen Anerkennung innerhalb der RWA-Berechnung.\n\n⚖️ Regulatorische Compliance-Sicherstellung:\n• Methodenbuch-Management: Etablierung eines umfassenden, laufend aktualisierten Methodenbuchs, das alle Berechnungsansätze, Annahmen, Validierungsergebnisse und Parameteranpassungen transparent dokumentiert.\n• Multi-Layer-Validierungsansatz: Implementierung eines dreistufigen Validierungsprozesses mit (1) kontinuierlichem Backtesting, (2) unabhängiger interner Validierung und (3) periodischen externen Reviews.\n• Regulatorischer Dialog: Proaktive Kommunikation mit Aufsichtsbehörden bei methodischen Anpassungen, um frühzeitig Feedback zu erhalten und potenzielle Compliance-Risiken zu minimieren.\n• Change-Impact-Assessment: Systematische Analyse der Auswirkungen von Methodenanpassungen auf RWA, Kapitalquoten und Stresstestergebnisse vor der finalen Implementierung.\n\n🔄 Kontinuierlicher Optimierungszyklus:\n• Jährliche End-to-End-Methodenüberprüfung: Systematische Evaluation aller Methoden und Parameter auf Aktualität, Performance und Konformität mit aktuellen regulatorischen Anforderungen.\n• Portfolioentwicklungs-Monitoring: Laufende Analyse von Portfolioveränderungen und Geschäftsmodellentwicklungen, die Anpassungen der Methodiken erfordern könnten.\n• Benchmarking: Regelmäßiger Vergleich der eigenen RWA-Intensität mit Peer-Instituten, um Optimierungspotenziale und Best Practices zu identifizieren.\n• Regulatorisches Horizont-Scanning: Fortlaufende Beobachtung regulatorischer Entwicklungen und frühzeitige Anpassung der Methodiken an kommende Anforderungen wie Basel IV-Finalisierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Governance-Strukturen und Validierungsprozesse empfiehlt ADVISORI für ein robustes RWA-Berechnungsframework?",
        answer: "Ein robustes RWA-Berechnungsframework erfordert eine durchdachte Governance-Struktur und stringente Validierungsprozesse, die weit über die reine Erfüllung regulatorischer Mindestanforderungen hinausgehen. Die richtige Balance zwischen technischer Präzision, methodischer Integrität und organisatorischer Einbettung ist entscheidend für zuverlässige, auditfähige RWA-Berechnungen, die sowohl für regulatorische Compliance als auch für die interne Steuerung vertrauenswürdige Ergebnisse liefern.\n\n🏛️ Governance-Framework für RWA-Methodiken:\n• RWA-Steuerungskomitee: Etablierung eines spezialisierten Gremiums auf Führungsebene mit Vertretern aus Risikomanagement, Finanzen, IT und relevanten Geschäftsbereichen, das methodische Entscheidungen trifft, Modelländerungen genehmigt und die RWA-Entwicklung überwacht.\n• Klare Drei-Linien-Verteilung: Präzise Verantwortungszuweisung entlang des Three-Lines-of-Defense-Modells mit (1) Modellentwicklung und -betrieb, (2) unabhängiger Validierung und (3) interner Revision, jeweils mit spezifischen Kompetenzen und Ressourcen.\n• Methodik-Eignerstrategie: Benennung dedizierter Methodology Owners für jede Risikokategorie, die für die Aktualität, Performance und regulatorische Konformität ihrer Methodiken persönlich verantwortlich sind.\n• Eskalationswege: Definition klarer Eskalationspfade und Entscheidungsprozesse für methodische Konflikte, Validierungsbeanstandungen und aufsichtsrechtliche Findings.\n\n🔍 Umfassende Validierungsarchitektur:\n• Mehrstufiges Validierungskonzept: Implementation eines ganzheitlichen Validierungsansatzes, der konzeptionelle Validierung (Methodendesign), quantitative Validierung (Kalibrierung, Diskriminanzfähigkeit) und qualitative Validierung (Prozesse, Datenqualität) umfasst.\n• Unabhängigkeitsprinzip: Strukturelle und organisatorische Trennung zwischen Modellentwicklung und -validierung mit separaten Reporting-Linien, um Interessenkonflikte zu vermeiden und unvoreingenommene Validierungsergebnisse zu gewährleisten.\n• Validierungsfrequenzmatrix: Etablierung eines risikobasierten Validierungszeitplans, der kritische Modelle und Parameter häufiger überprüft als weniger materielle Komponenten.\n• Challenger-Modell-Ansatz: Entwicklung unabhängiger Benchmark-Modelle durch die Validierungseinheit als alternative Perspektive zur Bewertung der Hauptmodellperformance.\n\n📊 Qualitätssicherung und Kontrolle:\n• Automatisierte Plausibilitätschecks: Integration von systemischen Kontrollen, die unplausible Eingabedaten, unrealistische Parameterwerte oder ungewöhnliche RWA-Sprünge automatisch identifizieren.\n• Vier-Augen-Prinzip: Konsequente Anwendung des Vier-Augen-Prinzips bei allen kritischen Berechnungsschritten, Parameteränderungen und Methodikanpassungen.\n• End-to-End-Prozessdokumentation: Etablierung einer lückenlosen Dokumentation des gesamten RWA-Berechnungsprozesses von der Datenerfassung bis zur finalen Berichterstellung, die vollständige Nachvollziehbarkeit gewährleistet.\n• Interne Audit-Zyklen: Regelmäßige, vertiefte Prüfung des gesamten RWA-Frameworks durch die interne Revision mit Fokus auf Governance, Methodenkonsistenz und Validierungseffektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute ihre Datenarchitektur für präzise und effiziente RWA-Berechnungen optimieren?",
        answer: "Die Datenarchitektur bildet das Fundament jeder erfolgreichen RWA-Berechnungsstrategie. Eine optimale Datenarchitektur für RWA-Zwecke verbindet höchste Datenqualität mit effizienten Verarbeitungsprozessen und flexiblen Analysemöglichkeiten. Sie ist nicht nur ein technisches Konstrukt, sondern ein strategischer Vermögenswert, der sowohl die regulatorische Compliance als auch die Kapitaleffizienz maßgeblich beeinflusst.\n\n🌐 Architekturprinzipien für RWA-optimierte Datensysteme:\n• Single Source of Truth: Entwicklung eines zentralen Risikodatenrepositories, das eine einheitliche, konsistente Datenbasis für alle RWA-relevanten Berechnungen bereitstellt und Datensilos zwischen verschiedenen Systemen eliminiert.\n• Granularität vs. Aggregation: Speicherung von Daten auf höchstmöglicher Granularitätsebene (Einzelgeschäftsebene), um flexible Aggregationen, detaillierte Analysen und methodische Anpassungen ohne neue Datenerhebungen zu ermöglichen.\n• Historisierung und Versionierung: Implementierung eines umfassenden Historisierungskonzepts, das sowohl Datenveränderungen als auch Methodenwechsel transparent nachvollziehbar macht und Point-in-Time-Analysen ermöglicht.\n• Metadatenmanagement: Etablierung eines robusten Metadatenrahmens, der alle RWA-relevanten Datenelemente mit präzisen Definitionen, Quellsystemen, Transformationsregeln und regulatorischen Anforderungen dokumentiert.\n\n⚙️ Technische Implementierungsstrategien:\n• Modulare Datenarchitektur: Entwicklung einer flexiblen, mehrschichtigen Datenarchitektur mit klarer Trennung von Datenerfassung, -speicherung, -verarbeitung und -analyse, die agile Anpassungen an regulatorische Änderungen ermöglicht.\n• Calculation Engine Design: Implementation spezialisierter Berechnungsmodule mit paralleler Verarbeitungsfähigkeit, die verschiedene Methoden (Standardansatz, IRB) simultan auf demselben Datenbestand ausführen können.\n• Data Lineage und Audit Trail: Lückenlose Verfolgung des Datenflusses von der Quelle bis zum finalen RWA-Ergebnis mit vollständiger Dokumentation aller Transformationen, Anreicherungen und Berechnungsschritte.\n• In-Memory-Prozessierung: Nutzung moderner In-Memory-Technologien für zeitkritische RWA-Berechnungen, insbesondere für ad-hoc Simulationen und What-if-Analysen im Rahmen der Kapitalplanung.\n\n🔄 Datenprozessoptimierung:\n• Automatisierte Datenqualitätsprüfungen: Integration systematischer DQ-Checks in den gesamten Datenprozess mit regelbasierten Validierungen, Vollständigkeitsprüfungen und Plausibilitätskontrollen.\n• Selbstlernende Ausreißererkennung: Implementierung KI-gestützter Anomaliedetektionssysteme, die ungewöhnliche Datenmuster erkennen und potenzielle Qualitätsprobleme frühzeitig identifizieren.\n• Parallelisierte Verarbeitungspipelines: Entwicklung effizienter, parallelisierter ETL-Prozesse, die große Datenmengen schnell verarbeiten und Berechnungszeiten signifikant reduzieren können.\n• Reconciliation-Framework: Etablierung automatisierter Abstimmungsprozesse zwischen verschiedenen Aggregationsebenen und Systemen, um Konsistenz zwischen regulatorischen Reports und internem Reporting sicherzustellen."
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
