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
    console.log('Updating KI-Datenvorbereitung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-datenvorbereitung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-datenvorbereitung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche konkreten Herausforderungen löst ADVISORI bei der Implementierung automatisierter Datenvorbereitungspipelines und wie gewährleisten wir Skalierbarkeit ohne Qualitätsverluste?',
        answer: "Die Automatisierung von Datenvorbereitungsprozessen ist ein komplexes Unterfangen, das weit über einfache Skriptierung hinausgeht. ADVISORI entwickelt intelligente, selbstadaptive Pipelines, die nicht nur aktuelle Datenanforderungen erfüllen, sondern auch flexibel auf sich ändernde Geschäftsanforderungen und Datenstrukturen reagieren können, während sie gleichzeitig höchste Qualitäts- und Compliance-Standards aufrechterhalten.\n\n⚙️ Intelligente Automatisierung mit adaptiver Logik:\n• Selbstlernende Datenvalidierung: Implementierung von Machine Learning-basierten Validierungsalgorithmen, die automatisch Anomalien erkennen und Qualitätsstandards kontinuierlich anpassen.\n• Dynamische Schema-Evolution: Entwicklung von Pipelines, die automatisch auf Änderungen in Datenstrukturen reagieren und sich ohne manuelle Intervention anpassen können.\n• Kontextuelle Datenbereinigung: Intelligente Bereinigungslogik, die den Geschäftskontext versteht und datenspezifische Bereinigungsstrategien automatisch auswählt.\n• Predictive Quality Management: Vorhersage potenzieller Datenqualitätsprobleme basierend auf historischen Mustern und proaktive Gegenmaßnahmen.\n\n🔄 Skalierbarkeits-Framework für Enterprise-Anforderungen:\n• Mikroservice-Architektur: Modulare Pipeline-Komponenten, die unabhängig skaliert und optimiert werden können, ohne das Gesamtsystem zu beeinträchtigen.\n• Cloud-native Elastizität: Automatische Ressourcenskalierung basierend auf Datenvolumen und Verarbeitungsanforderungen für kostenoptimierte Performance.\n• Parallelisierung und Distributed Computing: Intelligente Verteilung von Datenverarbeitungslasten für maximale Effizienz bei großen Datenmengen.\n• Quality-at-Scale Monitoring: Kontinuierliche Überwachung der Datenqualität auch bei exponentiell wachsenden Datenvolumen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie adressiert ADVISORI die komplexen Herausforderungen des Feature Engineering für verschiedene KI-Anwendungsfälle und welche Strategien nutzen wir für optimale Modell-Performance?',
        answer: "Feature Engineering ist die Kunst und Wissenschaft, aus Rohdaten die wertvollsten Informationen für KI-Modelle zu extrahieren. ADVISORI verfolgt einen datengetriebenen und domänenspezifischen Ansatz, der sowohl automatisierte Techniken als auch tiefes Geschäftsverständnis kombiniert, um Features zu entwickeln, die nicht nur statistisch relevant, sondern auch geschäftlich bedeutsam sind.\n\n🧠 Strategisches Feature Engineering für maximale Wertschöpfung:\n• Domain-Driven Feature Discovery: Entwicklung von Features basierend auf tiefem Verständnis Ihrer Geschäftsprozesse und Branchendynamiken, nicht nur auf statistischen Korrelationen.\n• Automated Feature Generation: Einsatz fortschrittlicher Algorithmen zur automatischen Generierung und Bewertung von Feature-Kombinationen für optimale Modell-Performance.\n• Temporal und Sequential Features: Spezialisierte Techniken für zeitbasierte Daten, die Trends, Saisonalität und sequenzielle Muster erfassen.\n• Cross-Domain Feature Transfer: Wiederverwendung und Anpassung erfolgreicher Features aus ähnlichen Anwendungsfällen für beschleunigte Entwicklung.\n\n📊 Performance-Optimierung durch intelligente Feature-Selektion:\n• Multi-Objective Feature Selection: Balancierung zwischen Modell-Genauigkeit, Interpretierbarkeit und Recheneffizienz bei der Feature-Auswahl.\n• Dimensionalitätsreduktion mit Geschäftslogik: Intelligente Reduktion der Feature-Anzahl unter Beibehaltung geschäftskritischer Informationen.\n• Feature Interaction Mining: Identifikation und Modellierung komplexer Interaktionen zwischen Features für verbesserte Vorhersagekraft.\n• Continuous Feature Evolution: Kontinuierliche Überwachung und Optimierung von Features basierend auf Modell-Performance und sich ändernden Geschäftsanforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche fortschrittlichen Techniken nutzt ADVISORI für die Behandlung von unvollständigen, inkonsistenten oder verrauschten Daten, und wie gewährleisten wir dabei die Integrität der ursprünglichen Informationen?',
        answer: "Reale Daten sind selten perfekt – sie enthalten Lücken, Inkonsistenzen und Rauschen, die die Qualität von KI-Modellen erheblich beeinträchtigen können. ADVISORI entwickelt sophisticated Strategien für den Umgang mit Datenqualitätsproblemen, die nicht nur technische Exzellenz, sondern auch die Bewahrung der ursprünglichen Datenintelligenz und -integrität gewährleisten.\n\n🔍 Intelligente Datenbereinigung mit Kontext-Awareness:\n• Adaptive Imputation Strategies: Entwicklung kontextspezifischer Strategien für fehlende Werte, die Geschäftslogik und Datenverteilungen berücksichtigen, anstatt einfache statistische Methoden zu verwenden.\n• Anomalie-Detection mit Business Logic: Implementierung von Anomalie-Erkennungsalgorithmen, die zwischen echten Ausreißern und wertvollen Edge Cases unterscheiden können.\n• Probabilistic Data Cleaning: Verwendung probabilistischer Modelle zur Schätzung der Wahrscheinlichkeit von Datenfehlern und intelligente Korrekturstrategien.\n• Temporal Consistency Validation: Spezielle Techniken für zeitbasierte Daten zur Erkennung und Korrektur von zeitlichen Inkonsistenzen.\n\n🛡️ Integritäts-Preservation und Audit-Fähigkeit:\n• Reversible Data Transformations: Implementierung von Datenbereinigungsprozessen, die bei Bedarf rückgängig gemacht werden können, um ursprüngliche Informationen zu bewahren.\n• Confidence Scoring: Bewertung der Zuverlässigkeit jeder Datenbereinigungsoperation mit Confidence-Scores für transparente Qualitätsbewertung.\n• Multi-Source Validation: Kreuzvalidierung von Datenbereinigungen durch Abgleich mit externen Datenquellen und Geschäftsregeln.\n• Comprehensive Data Lineage: Vollständige Dokumentation aller Bereinigungsschritte für Audit-Zwecke und Nachvollziehbarkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickelt ADVISORI maßgeschneiderte Datenvalidierungs- und Qualitätssicherungsframeworks, die sowohl technische Exzellenz als auch Geschäftsanforderungen erfüllen?',
        answer: "Datenvalidierung ist mehr als nur technische Prüfung – sie ist ein strategischer Prozess, der Geschäftslogik, Compliance-Anforderungen und technische Standards harmonisch vereint. ADVISORI entwickelt umfassende Validierungsframeworks, die nicht nur Datenqualität gewährleisten, sondern auch als frühes Warnsystem für Geschäftsanomalien und Compliance-Risiken fungieren.\n\n✅ Multi-Layer Validation Architecture:\n• Business Rule Validation: Implementierung geschäftsspezifischer Validierungsregeln, die über einfache Datentyp-Prüfungen hinausgehen und Geschäftslogik und Branchenstandards berücksichtigen.\n• Statistical Quality Monitoring: Kontinuierliche Überwachung statistischer Eigenschaften der Daten zur Erkennung von Drift, Bias und Qualitätsverschlechterung.\n• Cross-Reference Validation: Validierung durch Abgleich mit externen Referenzdatenquellen und Master Data Management Systemen.\n• Temporal Validation: Spezielle Prüfungen für zeitbasierte Konsistenz und logische Sequenzen in historischen Daten.\n\n🎯 Adaptive Quality Frameworks für dynamische Anforderungen:\n• Self-Learning Validation Rules: Entwicklung von Validierungsregeln, die sich basierend auf historischen Datenmustern und Geschäftsentwicklungen automatisch anpassen.\n• Risk-Based Quality Scoring: Priorisierung von Validierungsaktivitäten basierend auf Geschäftsrisiko und Auswirkungen auf nachgelagerte KI-Modelle.\n• Real-Time Quality Dashboards: Entwicklung interaktiver Dashboards für kontinuierliche Überwachung der Datenqualität mit actionable Insights für Geschäftsentscheidungen.\n• Predictive Quality Analytics: Vorhersage zukünftiger Datenqualitätsprobleme basierend auf Trends und Mustern für proaktive Qualitätssicherung."
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
