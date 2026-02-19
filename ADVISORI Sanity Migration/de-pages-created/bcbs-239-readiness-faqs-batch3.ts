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
    console.log('Updating BCBS-239 Readiness page with Implementation Strategy FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-readiness" not found')
    }
    
    // Create new Implementation Strategy FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Projektstrategie empfiehlt ADVISORI für die Implementierung der im Readiness Assessment identifizierten BCBS-239 Maßnahmen?",
        answer: "Die Umsetzung der BCBS-239 Anforderungen stellt für viele Finanzinstitute ein komplexes Transformationsprogramm dar, das weit über ein reines IT-Projekt hinausgeht. Basierend auf den Ergebnissen des Readiness Assessments entwickeln wir eine maßgeschneiderte Implementierungsstrategie, die sowohl die regulatorischen Anforderungen erfüllt als auch die spezifischen Rahmenbedingungen Ihres Instituts berücksichtigt.\n\n📈 Strategische Implementierungsansätze nach dem Readiness Assessment:\n• Iterative Wertlieferung: Wir strukturieren die Implementierung in überschaubare Releases mit eigenständigem Geschäftswert, statt auf einen Big-Bang-Ansatz zu setzen, der erst spät Mehrwert liefert.\n• Priorisierte Maßnahmenkaskade: Sequenzierung von Maßnahmen nach einer strategischen Logik – von fundamentalen Grundlagen (Datenmodelle, Governance) über technische Enabler (Architekturen, Infrastruktur) bis zu spezifischen Anwendungsfällen.\n• Agile Hybridmethodik: Kombination agiler Methoden für Entwicklungsaspekte mit klassischem Projektmanagement für übergreifende Steuerung und Koordination komplexer Abhängigkeiten.\n• Integriertes Workstream-Modell: Parallelisierung komplementärer Arbeitspakete in koordinierten Workstreams (z.B. Datengovernance, Architektur, Reporting, Datenqualität).\n\n🛠️ Erfolgsfaktoren für die BCBS-239 Implementierung:\n• Dedizierte Programmorganisation: Etablierung einer schlagkräftigen Programmstruktur mit klaren Entscheidungswegen und ausreichenden Ressourcen.\n• Business-IT-Alignment: Enge Verzahnung von Fachbereichen und IT durch gemeinsame Teams und kollaborative Arbeitsmodelle.\n• Stakeholder-Management: Systematische Einbindung aller relevanten Interessengruppen, insbesondere der Führungsebene und aufsichtsrechtlichen Ansprechpartner.\n• Kontinuierliche Erfolgsmessung: Etablierung eines aussagekräftigen Fortschrittsreportings mit KPIs, die sowohl die Implementierungsfortschritte als auch die tatsächliche Compliance-Verbesserung messen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie integriert ein BCBS-239 Readiness Assessment die Anforderungen an Reporting-Prozesse und welche Optimierungspotenziale werden typischerweise identifiziert?",
        answer: "Das Risikoreporting steht im Zentrum der BCBS-239 Richtlinien, da es die Schnittstelle zwischen Dateninfrastruktur und Entscheidungsträgern bildet. Unser Readiness Assessment analysiert detailliert Ihre Reporting-Prozesse und identifiziert Optimierungspotenziale, die nicht nur zur regulatorischen Compliance beitragen, sondern auch den strategischen Mehrwert Ihrer Risikoberichterstattung steigern.\n\n📑 Schlüsselaspekte der Reporting-Analyse im BCBS-239 Assessment:\n• Prozesseffizienz: Evaluierung der End-to-End-Reportingprozesse hinsichtlich Durchlaufzeiten, Automatisierungsgrad und manueller Interventionen bei der Berichterstellung.\n• Datenkonsistenz: Bewertung der Konsistenz zwischen verschiedenen Risikoberichten, insbesondere bei überlappenden Kennzahlen und Dimensionen.\n• Aggregationsfähigkeiten: Analyse der Möglichkeiten zur flexiblen Aggregation und Drill-Down-Analyse von Risikodaten über verschiedene Dimensionen (z.B. Rechtseinheiten, Geschäftsfelder, Risikoarten).\n• Dokumentation und Nachvollziehbarkeit: Prüfung der Dokumentation von Reportingprozessen, Berechnungsmethoden und Validierungsschritten.\n\n📊 Typische Optimierungspotenziale in Reporting-Prozessen:\n• Automatisierung manueller Prozessbrüche: Identifikation und Beseitigung manueller Eingriffe und Excel-basierter Zwischenschritte in der Berichtserstellung.\n• Harmonisierung von Berichtsdefinitionen: Vereinheitlichung von Metriken, Dimensionen und Berechnungsmethoden über verschiedene Risikoberichte hinweg.\n• Self-Service-Reporting-Fähigkeiten: Implementierung flexibler Analysewerkzeuge, die es Entscheidungsträgern ermöglichen, Risikodaten nach eigenen Anforderungen zu analysieren, ohne auf vordefinierte Berichte beschränkt zu sein.\n• Integrierte Datenvalidierung: Etablierung von systematischen Validierungsprozessen, die bereits während der Datenaggregation stattfinden, statt als separate, nachgelagerte Aktivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI nach dem BCBS-239 Readiness Assessment bei der Vorbereitung auf regulatorische Prüfungen und Reviews?",
        answer: "Die regulatorische Überprüfung der BCBS-239 Compliance stellt für viele Finanzinstitute eine erhebliche Herausforderung dar. Nach Abschluss des Readiness Assessments unterstützen wir Sie gezielt bei der Vorbereitung auf aufsichtsrechtliche Prüfungen und Reviews, um Ihre Compliance-Fortschritte optimal zu präsentieren und potenzielle Schwachstellen proaktiv zu adressieren.\n\n🔍 Systematische Vorbereitung auf regulatorische Prüfungen:\n• Gap-Priorisierung aus Aufsichtsperspektive: Bewertung und Priorisierung identifizierter Gaps aus Sicht der Aufsichtsbehörden, um kritische Handlungsfelder mit erhöhtem Prüfungsfokus zu identifizieren.\n• Aufbau einer Evidence Library: Systematische Zusammenstellung und Organisation aller relevanten Nachweise und Dokumentationen, die die BCBS-239 Compliance Ihres Instituts belegen.\n• Mock-Audits und Readiness-Tests: Durchführung simulierter Prüfungen mit erfahrenen Ex-Regulatoren, um potenzielle Schwachstellen frühzeitig zu identifizieren und zu adressieren.\n• Stakeholder-Coaching: Vorbereitung Ihrer Fach- und Führungskräfte auf aufsichtliche Interviews und Präsentationen mit gezieltem Coaching zu typischen Prüfungsschwerpunkten.\n\n📋 Schlüsselelemente einer erfolgreichen Prüfungsvorbereitung:\n• Vollständige Linienverfolgung (Traceability): Sicherstellung einer lückenlosen Nachvollziehbarkeit von den aufsichtlichen Anforderungen über Ihre Implementierungsmaßnahmen bis zu den konkreten Nachweisen.\n• Narrativ-Entwicklung: Ausarbeitung eines kohärenten Narrativs, das Ihre BCBS-239 Compliance-Journey, erreichte Meilensteine und strategische Vision überzeugend darstellt.\n• Schwachstellenmanagement: Proaktive Identifikation und Adressierung potenzieller Kritikpunkte mit klaren Maßnahmenplänen für noch offene Compliance-Lücken.\n• Stakeholder-Alignment: Sicherstellung eines einheitlichen Verständnisses und konsistenter Kommunikation über alle involvierten Bereiche hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Inwiefern berücksichtigt ein BCBS-239 Readiness Assessment die Anforderungen an IT-Architektur und Data Lineage und welche Lösungsansätze empfiehlt ADVISORI?",
        answer: "Die IT-Architektur und die lückenlose Datenlinienverfolgung (Data Lineage) sind fundamentale Enabler für eine nachhaltige BCBS-239 Compliance. Unser Readiness Assessment evaluiert systematisch Ihre bestehenden Architekturen und Lineage-Fähigkeiten und identifiziert zielgerichtete Optimierungspotenziale für eine effiziente Risikodaten-Aggregation und -Nachverfolgung.\n\n🔄 Kernaspekte der Architektur- und Lineage-Bewertung:\n• End-to-End-Datenflussanalyse: Bewertung der Vollständigkeit und Transparenz der Datenflüsse von Quellsystemen bis zu Risikoberichten, einschließlich aller Transformations- und Aggregationsschritte.\n• Architekturreife: Analyse der Fähigkeit Ihrer IT-Architektur, die BCBS-239 Anforderungen hinsichtlich Schnelligkeit, Flexibilität und Konsistenz der Risikodatenaggregation zu unterstützen.\n• Technische Datenintegrität: Evaluierung der technischen Maßnahmen zur Sicherstellung der Datenintegrität über den gesamten Datenlebenszyklus hinweg.\n• Metadatenmanagement: Bewertung Ihrer Fähigkeiten zur systematischen Erfassung, Verwaltung und Nutzung von Metadaten für Risikodaten.\n\n🛠️ Moderne Lösungsansätze für optimierte Architektur und Lineage:\n• Modulare Datenarchitektur: Entwurf einer flexiblen, servicorientierten Architektur, die Datensilos überwindet und eine nahtlose Integration heterogener Datenquellen ermöglicht.\n• Automatisierte Data Lineage: Implementierung von Tools und Technologien zur automatisierten Erfassung und Visualisierung von Datenflüssen, sowohl auf technischer als auch auf fachlicher Ebene.\n• Semantische Datenschicht: Etablierung einer einheitlichen semantischen Schicht, die konsistente Definitionen und Interpretationen von Risikometriken über verschiedene Anwendungen hinweg gewährleistet.\n• Integriertes Metadaten-Repository: Aufbau eines zentralen Metadaten-Hubs, der sowohl technische als auch fachliche Metadaten erfasst und als Single Source of Truth für die Datengovernance dient."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Implementation Strategy FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Implementation Strategy FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
