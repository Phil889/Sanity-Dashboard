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
    console.log('Updating CRR/CRD Offenlegungsanforderungen Pillar III page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-offenlegungsanforderungen-pillar-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-offenlegungsanforderungen-pillar-iii" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können Finanzinstitute die Synergiepotenziale zwischen Pillar III Offenlegung und anderen regulatorischen Berichtspflichten optimal nutzen?",
        answer: "Die Pillar III Offenlegung steht nicht isoliert, sondern weist signifikante inhaltliche und prozessuale Überschneidungen mit anderen regulatorischen Berichtspflichten auf. Finanzinstitute, die diese Synergien systematisch nutzen, können erhebliche Effizienzgewinne erzielen und gleichzeitig die Konsistenz ihrer Berichterstattung verbessern. ADVISORI unterstützt bei der Identifikation und Realisierung dieser Synergiepotenziale durch einen integrierten Berichtsansatz.\n\n🔄 Schlüssel-Synergien zwischen regulatorischen Frameworks:\n• Pillar III und FINREP/COREP: Zahlreiche Offenlegungstabellen basieren auf denselben Datenpunkten und Berechnungen wie FINREP/COREP-Meldungen, was eine koordinierte Datenversorgung ermöglicht.\n• Pillar III und ICAAP/ILAAP: Die Risikomanagementstrategien und -prozesse, die im ICAAP/ILAAP dokumentiert werden, bilden eine wesentliche Grundlage für die qualitativen Offenlegungen unter Pillar III.\n• Pillar III und Stresstests: Die Ergebnisse und Methoden aufsichtlicher Stresstests können für die Offenlegung von Stressszenarien und deren Auswirkungen genutzt werden.\n• Pillar III und Nachhaltigkeitsberichterstattung: Zunehmende Überschneidungen zwischen ESG-Offenlegungsanforderungen und Nachhaltigkeitsberichten nach CSRD/NFRD.\n• Pillar III und Recovery Planning: Synergien bei der Offenlegung von Krisenszenarien, Notfallplänen und Governance-Aspekten.\n\n📊 ADVISORIs Ansatz zur Synergieerschließung:\n• Integrierte Datenstrategie: Entwicklung eines zentralen Datenmodells, das alle regulatorischen Anforderungen abdeckt und Datenredundanzen minimiert.\n• Harmonisierte Prozesslandschaft: Koordination von Zeitplänen, Verantwortlichkeiten und Freigabeprozessen über verschiedene Berichtsformate hinweg.\n• Übergreifendes Metadatenmanagement: Einheitliche Definition und Dokumentation von Kennzahlen, Berechnungsmethoden und regulatorischen Referenzen.\n• Konsolidierte IT-Architektur: Implementierung einer technischen Plattform, die verschiedene regulatorische Anforderungen aus einem gemeinsamen Datenpool bedient.\n• Synchronized Change Management: Koordinierte Analyse und Umsetzung regulatorischer Änderungen über alle betroffenen Berichtsformate hinweg.\n\n💡 Konkrete Umsetzungsschritte für maximale Effizienz:\n• Regulatorischer Mapping-Layer: Entwicklung einer detaillierten Zuordnungsmatrix zwischen Pillar III Offenlegungsanforderungen und anderen regulatorischen Vorgaben.\n• Prozessintegration: Abstimmung von Berichtszeitplänen und -prozessen zur Vermeidung von Doppelarbeit und zur Sicherstellung konsistenter Daten.\n• Common Data Dictionary: Etablierung eines einheitlichen Verständnisses regulatorischer Konzepte und Kennzahlen über alle Berichtsformate hinweg.\n• Modulare Berichtskomponenten: Entwicklung wiederverwendbarer Textbausteine und Tabellenformate für verschiedene regulatorische Anforderungen.\n• Integrierte Validierungsregeln: Implementierung übergreifender Plausibilitätsprüfungen zur Sicherstellung der Konsistenz zwischen verschiedenen Berichtsformaten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Governance-Strukturen und Verantwortlichkeiten empfiehlt ADVISORI für eine effektive Steuerung des Pillar III Offenlegungsprozesses?",
        answer: "Eine robuste Governance-Struktur mit klar definierten Verantwortlichkeiten ist entscheidend für die effektive Steuerung des Pillar III Offenlegungsprozesses. Die Komplexität und Sensibilität der offenzulegenden Informationen erfordert ein durchdachtes Kontroll- und Freigabeframework, das sowohl die regulatorische Compliance als auch die Datenqualität sicherstellt. ADVISORI unterstützt bei der Entwicklung und Implementierung maßgeschneiderter Governance-Strukturen, die den spezifischen Anforderungen Ihres Instituts gerecht werden.\n\n🏛️ Empfohlene Governance-Strukturen für Pillar III:\n• Executive Ownership: Klare Zuweisung der Gesamtverantwortung auf Vorstandsebene, typischerweise beim CRO oder CFO, mit regelmäßiger Berichterstattung an das Management Board.\n• Pillar III Committee: Etablierung eines interdisziplinären Ausschusses mit Vertretern aus Risikomanagement, Finanzen, Compliance, IT und fachlich betroffenen Bereichen.\n• Three Lines of Defense: Konsequente Anwendung des 3LoD-Modells mit klarer Trennung zwischen operativer Berichtserstellung, unabhängiger Qualitätssicherung und interner Revision.\n• Regulatory Reporting Office: Zentrale Koordinationsstelle für alle regulatorischen Berichtspflichten mit Fokus auf Konsistenz und Effizienz.\n• Data Governance Board: Übergreifendes Gremium zur Sicherstellung der Datenqualität und zur Koordination von Datenlieferungen aus verschiedenen Quellsystemen.\n\n📝 Rollen und Verantwortlichkeiten im Offenlegungsprozess:\n• Content Owners: Fachliche Verantwortliche für spezifische Offenlegungsinhalte (z.B. Kreditrisiko, Marktrisiko, Vergütung), die für die Richtigkeit und Vollständigkeit der Daten und Erläuterungen verantwortlich sind.\n• Disclosure Coordinator: Zentrale Rolle für die Prozesssteuerung, Terminüberwachung und Konsolidierung der Beiträge aus verschiedenen Bereichen.\n• Validation Officers: Unabhängige Prüfer, die die Qualität, Plausibilität und Konsistenz der offengelegten Informationen validieren.\n• Approval Authorities: Klar definierte Freigabeinstanzen mit gestaffelten Befugnissen je nach Wesentlichkeit der Informationen.\n• Disclosure Committee: Entscheidungsgremium für wesentliche Offenlegungsfragen, methodische Ansätze und Interpretationen regulatorischer Anforderungen.\n\n⚙️ Prozesssteuerung und Kontrollmechanismen:\n• Pillar III Policy: Umfassende Richtlinie, die Grundsätze, Verantwortlichkeiten und Prozesse für die Offenlegung festlegt.\n• Standardized Workflows: Definierte Arbeitsabläufe mit klaren Übergabepunkten, Fristen und Eskalationswegen.\n• Materiality Framework: Strukturierte Bewertung der Wesentlichkeit von Informationen als Grundlage für Offenlegungsentscheidungen und Prüfungsintensität.\n• Audit Trail: Lückenlose Dokumentation aller Prozessschritte, Entscheidungen und Änderungen für Nachvollziehbarkeit und Prüfungssicherheit.\n• Performance Metrics: KPIs zur Messung und kontinuierlichen Verbesserung der Effizienz und Qualität des Offenlegungsprozesses."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie unterstützt ADVISORI bei der Migration zu den neuen Pillar III Anforderungen unter CRR III/CRD VI und welche Vorbereitungen sollten Finanzinstitute jetzt treffen?",
        answer: "Die kommenden Änderungen durch CRR III/CRD VI werden die Pillar III Anforderungen erheblich erweitern und vertiefen, was für Finanzinstitute einen umfassenden Transformationsbedarf bedeutet. Eine frühzeitige und strukturierte Vorbereitung ist entscheidend, um die Implementierung effizient zu gestalten und Risiken zu minimieren. ADVISORI unterstützt mit einem ganzheitlichen Migrationsansatz, der sowohl die technischen als auch die organisatorischen Aspekte dieser Transformation adressiert.\n\n🔍 Wesentliche Änderungen durch CRR III/CRD VI:\n• Erweiterte ESG-Offenlegungen: Umfassendere Anforderungen zur Offenlegung von Nachhaltigkeitsrisiken, insbesondere zu Klimarisiken und deren Integration in das Risikomanagement.\n• Überarbeitete Marktrisiko-Offenlegungen: Neue Tabellen und Kennzahlen im Zusammenhang mit dem Fundamental Review of the Trading Book (FRTB).\n• Kreditrisiko-Modifikationen: Anpassungen bei der Offenlegung von Kreditrisikominderungstechniken, Non-Performing Exposures und Forbearance-Maßnahmen.\n• Granularere Liquiditätsoffenlegungen: Detailliertere Anforderungen zur Offenlegung von Liquiditätsrisiken und entsprechenden Steuerungsmaßnahmen.\n• Erweiterte Governance-Offenlegungen: Vertiefte Informationen zu Risikomanagement-Strukturen, Entscheidungsprozessen und Kontrollfunktionen.\n\n⏱️ Empfohlener Zeitplan für die Migration:\n• Frühe Analyse-Phase: Detaillierte Gap-Analyse zwischen bestehenden Offenlegungspraktiken und neuen Anforderungen, idealerweise bereits während der Konsultationsphase.\n• Konzeptionsphase: Entwicklung einer umfassenden Implementierungsstrategie mit priorisierter Roadmap und klaren Verantwortlichkeiten.\n• Vorbereitungsphase: Anpassung von Datenmodellen, Prozessen und Systemlandschaften an die neuen Anforderungen noch vor Inkrafttreten der Verordnung.\n• Parallelbetrieb: Temporäre Durchführung alter und neuer Offenlegungsformate während der Übergangsphase zur Sicherstellung der Datenqualität und Prozessstabilität.\n• Stabilisierungsphase: Optimierung und Feinabstimmung der implementierten Lösungen nach den ersten Offenlegungszyklen unter dem neuen Regime.\n\n🛠️ ADVISORIs Unterstützungsleistungen für die Migration:\n• Regulatory Impact Assessment: Frühzeitige und detaillierte Analyse der neuen Anforderungen und deren spezifische Auswirkungen auf Ihr Institut.\n• Data Gap Analysis: Identifikation zusätzlich benötigter Datenpunkte und Bewertung der Verfügbarkeit in bestehenden Systemen.\n• Migration Roadmap: Entwicklung eines strukturierten und priorisierten Implementierungsplans mit realistischen Zeitvorgaben und Ressourcenplanung.\n• System & Process Design: Konzeption angepasster Datenmodelle, Prozesse und Systemarchitekturen für die effiziente Umsetzung der neuen Anforderungen.\n• Change Management: Unterstützung bei der organisatorischen Transformation, einschließlich Schulungen, Kommunikation und Stakeholder-Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Best Practices für die digitale Transformation des Pillar III Offenlegungsprozesses hat ADVISORI identifiziert und wie kann KI die Effizienz steigern?",
        answer: "Die digitale Transformation des Pillar III Offenlegungsprozesses bietet erhebliche Potenziale zur Effizienzsteigerung, Qualitätsverbesserung und Risikominimierung. Insbesondere der Einsatz moderner Technologien wie künstlicher Intelligenz kann repetitive Aufgaben automatisieren und wertvolle Insights liefern. ADVISORI hat durch zahlreiche Implementierungsprojekte Best Practices identifiziert, die eine erfolgreiche digitale Transformation dieses komplexen regulatorischen Prozesses ermöglichen.\n\n🔄 Kernelemente der digitalen Transformation von Pillar III:\n• End-to-End-Automatisierung: Durchgängige Digitalisierung von der Datenextraktion bis zur finalen Berichtsgenerierung mit minimalen manuellen Eingriffen.\n• Self-Service-Analytics: Implementierung intuitiver Analyse-Tools, die es Fachbereichen ermöglichen, selbstständig Auswertungen durchzuführen und Daten zu validieren.\n• Dynamische Berichtsformate: Flexible digitale Publikationsformate, die interaktive Analysen und benutzergeführte Exploration der offengelegten Daten ermöglichen.\n• Real-Time Monitoring: Echtzeitüberwachung von Datenverfügbarkeit, Prozessfortschritt und Qualitätskennzahlen durch integrierte Dashboards.\n• Collaborative Workflows: Digitale Kollaborationsplattformen für die effiziente Abstimmung zwischen verschiedenen Abteilungen und externen Dienstleistern.\n\n🤖 KI-Anwendungsfälle zur Effizienzsteigerung:\n• Automatisierte Datenkontrolle: Einsatz von Machine Learning für die Erkennung von Anomalien, Ausreißern und Inkonsistenzen in den Offenlegungsdaten.\n• Natural Language Generation: Automatisierte Erstellung von Erläuterungstexten für standardisierte Offenlegungselemente auf Basis vordefinierter Templates und aktueller Daten.\n• Predictive Analytics: Vorhersage potenzieller Problembereiche im Offenlegungsprozess auf Basis historischer Daten und Muster.\n• Intelligente Prozessautomatisierung: Kombination von RPA (Robotic Process Automation) und KI für die adaptive Automatisierung komplexer Prozessschritte.\n• Cognitive Compliance Checking: KI-gestützte Prüfung der Vollständigkeit und Konformität der Offenlegung mit aktuellen regulatorischen Anforderungen.\n\n📱 Technologische Komponenten einer modernen Offenlegungsplattform:\n• Regulatory Knowledge Engine: Zentrale Wissensdatenbank für regulatorische Anforderungen, Interpretationen und Implementierungsrichtlinien.\n• Smart Data Layer: Intelligente Datenschicht mit automatisierten Mapping-, Transformations- und Qualitätssicherungsfunktionen.\n• Dynamic Document Generation: Flexible Berichtsgenerierungsmodule, die verschiedene Ausgabeformate (PDF, HTML, XBRL, etc.) aus einer zentralen Datenbasis erzeugen können.\n• Integrated Workflow Management: Digitale Steuerung von Arbeitsprozessen mit automatischen Benachrichtigungen, Eskalationsmechanismen und Statusverfolgung.\n• Compliance Cockpit: Zentrale Steuerungsplattform mit Echtzeit-Einblick in den Offenlegungsprozess, Qualitätsindikatoren und regulatorische Änderungen."
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
