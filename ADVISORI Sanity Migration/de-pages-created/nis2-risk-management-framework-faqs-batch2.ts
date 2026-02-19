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
    console.log('Updating NIS2 Risk Management Framework page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-risk-management-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-risk-management-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie kann ADVISORI's NIS2-Risikomanagement-Framework die Cyber-Versicherungsstrategie optimieren und welche finanziellen Vorteile ergeben sich daraus?",
        answer: "Ein strukturiertes NIS2-Risikomanagement-Framework ist nicht nur eine regulatorische Notwendigkeit, sondern auch ein strategischer Hebel zur Optimierung Ihrer Cyber-Versicherungsstrategie. Versicherer bewerten Unternehmen mit nachweisbaren Risikomanagement-Prozessen als geringeres Risiko, was zu erheblichen Prämieneinsparungen und besseren Versicherungskonditionen führen kann.\n\n💰 Direkte finanzielle Auswirkungen auf Cyber-Versicherungen:\n• Prämieneinsparungen: Dokumentierte NIS2-Risikomanagement-Prozesse können zu Prämieneinsparungen von 15-30% führen, da Versicherer das reduzierte Risikoprofil anerkennen.\n• Erweiterte Deckungsumfänge: Bessere Verhandlungsposition für umfassendere Deckungen, einschließlich Business Interruption, Reputationsschäden und regulatorische Strafen.\n• Reduzierte Selbstbehalte: Nachweisbare Risikomanagement-Kapazitäten können zu niedrigeren Selbstbehalten und besseren Schadensschwellen führen.\n• Optimierte Risikoübertragung: Strategische Allokation zwischen Risikominimierung, Risikoakzeptanz und Risikotransfer durch Versicherungen.\n\n🛡️ ADVISORI's strategischer Ansatz zur Versicherungsoptimierung:\n• Risk-Versicherung Alignment: Wir entwickeln Risikomanagement-Dokumentationen, die explizit auf Versichereranforderungen ausgerichtet sind und deren Due-Diligence-Prozesse unterstützen.\n• Quantitative Risikobewertung für Underwriting: Bereitstellung präziser, quantifizierbarer Risikometriken, die Versicherern bei der Bewertung und Preisgestaltung helfen.\n• Incident Response Integration: Nahtlose Integration von Incident Response Plänen in Versicherungsklauseln zur Beschleunigung von Schadensprozessen.\n• Continuous Risk Monitoring für Versicherer: Implementierung von Monitoring-Systemen, die Versicherern kontinuierliche Einblicke in das Risikoprofil Ihres Unternehmens bieten.\n• Pre-Loss Services: Entwicklung proaktiver Risikominimierungsmaßnahmen, die von Versicherern als Wertschöpfung anerkannt und belohnt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen KPIs und Metriken etabliert ADVISORI für ein NIS2-Risikomanagement-Framework und wie unterstützen diese die strategische Entscheidungsfindung der C-Suite?",
        answer: "Effektives NIS2-Risikomanagement erfordert präzise, actionable Metriken, die der C-Suite klare Einblicke in das Cyber-Risikoprofil des Unternehmens geben. ADVISORI entwickelt mehrdimensionale KPI-Frameworks, die sowohl technische als auch geschäftliche Perspektiven integrieren und fundierte strategische Entscheidungen ermöglichen.\n\n📊 Strategische Risk KPIs für die C-Suite:\n• Risk Exposure Score (RES): Quantifizierte Bewertung des Gesamt-Cyber-Risikos basierend auf Asset-Kritikalität, Bedrohungslandschaft und Schwachstellenexposure.\n• Business Impact Potential (BIP): Monetäre Bewertung potentieller Geschäftsauswirkungen verschiedener Cyber-Szenarien, einschließlich direkter und indirekter Kosten.\n• Risk Velocity Indicator (RVI): Messung der Geschwindigkeit, mit der sich das Risikoprofil verändert, um proaktive Anpassungen zu ermöglichen.\n• Compliance Readiness Index (CRI): Bewertung der NIS2-Compliance-Bereitschaft mit detaillierten Aufschlüsselungen nach Anforderungsbereichen.\n\n🎯 Operative Excellence Metriken:\n• Mean Time to Risk Detection (MTTRD): Durchschnittliche Zeit zur Identifikation neuer oder sich verändernder Risiken in Ihrem Umfeld.\n• Risk Treatment Effectiveness (RTE): Bewertung der Wirksamkeit implementierter Risikominimierungsmaßnahmen durch Before-After-Vergleiche.\n• Threat Intelligence Integration Rate (TIIR): Geschwindigkeit und Vollständigkeit der Integration neuer Threat Intelligence in Risikobewertungen.\n• Stakeholder Risk Awareness Level (SRAL): Messung des Risikobewusstseins in verschiedenen Organisationsebenen durch Assessments und Simulationen.\n\n💡 ADVISORI's KPI-Dashboard für Executive Decision Making:\n• Real-time Risk Visualization: Dynamische Dashboards, die komplexe Risikodaten in verständliche, actionable Visualisierungen für die C-Suite transformieren.\n• Predictive Risk Modeling: Zukunftsgerichtete Risikomodelle, die potentielle Entwicklungen und deren Geschäftsauswirkungen projizieren.\n• Benchmark-Integration: Vergleich Ihrer Risikometriken mit Branchen-Benchmarks und Best-Practice-Standards zur Kontextualisierung der Performance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert ADVISORI die Herausforderung der Risikoquantifizierung in komplexen, vernetzten IT-Landschaften und welche methodischen Ansätze werden verwendet?",
        answer: "Die Quantifizierung von Cyber-Risiken in modernen, hochvernetzten IT-Umgebungen ist eine der komplexesten Herausforderungen im Risikomanagement. Traditionelle qualitative Ansätze reichen nicht mehr aus, um der Komplexität von Cloud-Hybridarchitekturen, IoT-Ökosystemen und interdependenten Geschäftsprozessen gerecht zu werden. ADVISORI nutzt fortschrittliche quantitative Methoden und analytische Frameworks zur präzisen Risikobewertung.\n\n🔬 Advanced Quantitative Risk Modeling:\n• Monte Carlo Simulationen: Probabilistische Risikomodellierung zur Berechnung von Risikobandbreiten und Confidence-Intervallen für verschiedene Bedrohungsszenarien.\n• Network Effect Analysis: Systematische Analyse von Risikokaskaden und Interdependenzen zwischen vernetzten Systemen und Geschäftsprozessen.\n• FAIR-basierte Quantifizierung: Implementation des Factor Analysis of Information Risk (FAIR) Frameworks zur strukturierten, quantitativen Risikobewertung.\n• Graph-basierte Risikomodellierung: Nutzung von Graph-Theorien zur Visualisierung und Analyse komplexer Abhängigkeiten und Angriffspfade.\n\n📈 Datengestützte Risikobewertung:\n• Historical Loss Data Analysis: Systematische Analyse historischer Verlustdaten zur Kalibrierung von Risikomodellen und Validierung von Annahmen.\n• Threat Intelligence Integration: Automatisierte Einbindung aktueller Bedrohungsdaten und Vulnerability-Informationen in quantitative Risikomodelle.\n• Business Process Impact Modeling: Detaillierte Modellierung der Auswirkungen von IT-Störungen auf spezifische Geschäftsprozesse und Revenue-Streams.\n• Asset Criticality Scoring: Mehrdimensionale Bewertung der Kritikalität von IT-Assets basierend auf Geschäftsauswirkungen, Interdependenzen und Wiederherstellungskosten.\n\n🛠️ ADVISORI's methodischer Ansatz:\n• Hybrid Quantitative-Qualitative Frameworks: Kombination quantitativer Modelle mit qualitativen Expertenbewertungen zur Kompensation von Datenlücken und Unsicherheiten.\n• Continuous Model Calibration: Regelmäßige Anpassung und Verfeinerung von Risikomodellen basierend auf neuen Daten und Erfahrungen.\n• Scenario-based Stress Testing: Durchführung regelmäßiger Stress-Tests der Risikomodelle unter verschiedenen Extremszenarien zur Validierung der Robustheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Anpassungsfähigkeit des NIS2-Risikomanagement-Frameworks bei Unternehmenswachstum und M&A-Aktivitäten?",
        answer: "Unternehmenswachstum, Akquisitionen und strukturelle Veränderungen stellen traditionelle Risikomanagement-Ansätze vor erhebliche Herausforderungen. ADVISORI entwickelt inherent skalierbare und adaptive Frameworks, die mit Ihrem Unternehmen mitwachsen und sich nahtlos an verändernde Organisationsstrukturen anpassen können.\n\n🚀 Skalierbare Framework-Architektur:\n• Modular Risk Components: Design modularer Risikomanagement-Komponenten, die unabhängig skaliert und an neue Geschäftsbereiche oder Akquisitionen angepasst werden können.\n• API-first Approach: Entwicklung API-basierter Risikomanagement-Systeme, die nahtlose Integration neuer Systeme, Datenquellen und Organisationseinheiten ermöglichen.\n• Federated Risk Management: Implementierung föderierter Ansätze, die lokale Risikomanagement-Autonomie mit zentraler Governance und Reporting kombinieren.\n• Cloud-native Scalability: Nutzung cloud-nativer Technologien zur automatischen Skalierung von Risikomanagement-Kapazitäten entsprechend dem Unternehmenswachstum.\n\n🔄 M&A Integration und Due Diligence:\n• Rapid Risk Assessment Methodologies: Entwicklung beschleunigter Risikobewertungsverfahren für die schnelle Integration akquirierter Unternehmen in bestehende Frameworks.\n• Cultural Risk Integration: Spezielle Ansätze zur Integration unterschiedlicher Risikokulturen und -praktiken bei Fusionen und Übernahmen.\n• Legacy System Risk Mapping: Systematische Bewertung und Integration von Legacy-Risiken aus akquirierten Systemen und Prozessen.\n• Harmonized Risk Taxonomy: Entwicklung einheitlicher Risikotaxonomien und -klassifikationen zur konsistenten Risikobewertung über verschiedene Organisationseinheiten hinweg.\n\n🎯 Adaptive Governance Mechanismen:\n• Dynamic Risk Appetite Adjustment: Flexible Anpassung von Risikobereitschaft und -toleranzen an veränderte Geschäftsstrategien und Marktbedingungen.\n• Organizational Change Impact Assessment: Systematische Bewertung der Auswirkungen organisatorischer Veränderungen auf das Risikoprofil und entsprechende Framework-Anpassungen.\n• Cross-border Compliance Integration: Nahtlose Integration verschiedener regulatorischer Anforderungen bei internationalen Expansionen oder Akquisitionen."
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
