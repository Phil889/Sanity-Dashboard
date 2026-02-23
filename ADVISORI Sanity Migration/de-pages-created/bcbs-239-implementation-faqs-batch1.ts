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
    console.log('Updating BCBS-239 Implementation page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-implementation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Vorteile bietet ein gut strukturierter BCBS-239 Implementierungsansatz über die reine Compliance hinaus?",
        answer: "Eine strategische BCBS-239 Implementierung transzendiert die reine regulatorische Erfüllung und wird zu einem Katalysator für die umfassende Transformation des Risikomanagements und der Dateninfrastruktur. Der wahre Wert liegt nicht in der punktuellen Compliance, sondern in der fundamentalen Neuausrichtung der Risikodatenstrukturen, die weitreichende strategische Vorteile mit sich bringt.\n\n🔍 Strategische Werttreiber einer BCBS-239 Implementierung:\n• Datengetriebene Entscheidungsfindung: Durch konsistente, akkurate und zeitnahe Risikodaten können Führungskräfte fundierte Entscheidungen mit höherer Präzision und geringerer Latenz treffen, was die strategische Agilität und Wettbewerbsfähigkeit stärkt.\n• Operative Effizienz: Die Optimierung der Datenarchitektur und -prozesse reduziert manuelle Eingriffe, eliminiert Redundanzen und verkürzt Berichtszyklen, was zu signifikanten Kosteneinsparungen und beschleunigten Prozessen führt.\n• Risikominimierung: Die verbesserte Datenqualität und -transparenz ermöglicht eine präzisere Risikoidentifikation und -bewertung, was potenzielle Verluste reduziert und die Kapitalallokation optimiert.\n• Innovation und Wachstum: Eine moderne, skalierbare Dateninfrastruktur schafft die Voraussetzungen für die Integration fortschrittlicher Analysetechnologien wie KI und Machine Learning in das Risikomanagement.\n\n💡 Der ADVISORI-Ansatz zur Wertsteigerung:\n• Business-Case-orientierte Implementierung: Wir identifizieren und quantifizieren die spezifischen Werttreiber für Ihr Institut und optimieren die Implementierung entlang dieser Parameter.\n• Integration in bestehende Transformationsinitiativen: Die BCBS-239 Implementierung wird mit laufenden Digitalisierungs- und Modernisierungsprojekten synchronisiert, um Synergien zu maximieren und Doppelarbeit zu vermeiden.\n• Sukzessive Wertrealisierung: Unser Ansatz priorisiert Quick Wins und ermöglicht eine stufenweise Realisierung von Geschäftsvorteilen, anstatt auf das Projektende zu warten.\n• Nachhaltige Verankerung: Wir etablieren nicht nur technische Lösungen, sondern verankern datengetriebenes Denken und Handeln in der Unternehmenskultur, um langfristige Wertschöpfung zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie gehen wir bei ADVISORI mit den typischen Herausforderungen und Hürden im BCBS-239 Implementierungsprozess um?",
        answer: "Die Implementierung von BCBS-239 stellt Finanzinstitute vor komplexe Herausforderungen, die weit über die reine technische Umsetzung hinausgehen. Bei ADVISORI haben wir einen umfassenden Ansatz entwickelt, der diese vielschichtigen Hürden systematisch adressiert und die Erfolgswahrscheinlichkeit signifikant erhöht.\n\n🚧 Typische Herausforderungen und unsere Lösungsansätze:\n• Datensilos und fragmentierte Systemlandschaften: Viele Banken kämpfen mit historisch gewachsenen, isolierten Systemlandschaften, die eine konsistente Datenintegration erschweren.\n   → Unser Ansatz: Wir entwickeln eine Integrationsstrategie mit schrittweiser Konsolidierung und etablieren eine übergreifende Datenschicht, die heterogene Quellsysteme verbindet, ohne sofortige Großmigrationen zu erzwingen.\n• Datendefinitionen und -qualität: Inkonsistente Definitionen und Qualitätsprobleme bei Risikodaten sind ein Kernproblem bei der BCBS-239 Implementierung.\n   → Unser Ansatz: Etablierung eines zentralen Datenglossars mit einheitlichen Definitionen, ergänzt durch automatisierte Datenqualitätskontrollen und klare Eskalationsprozesse für identifizierte Qualitätsprobleme.\n• Governance-Herausforderungen: Unklare Verantwortlichkeiten und fehlende Ownership für Daten behindern nachhaltige Verbesserungen.\n   → Unser Ansatz: Implementierung eines strukturierten Data-Ownership-Modells mit klaren Rollen und Verantwortlichkeiten sowie Etablierung von Data Stewards als Brücke zwischen Business und IT.\n\n🛠️ Methodische Erfolgsfaktoren von ADVISORI:\n• Ganzheitlicher Transformationsansatz: Wir betrachten nicht nur technische, sondern auch prozessuale, organisatorische und kulturelle Aspekte als integralen Bestandteil der Transformation.\n• Adaptive Roadmap: Statt eines starren Plans verfolgen wir einen agilen, anpassungsfähigen Ansatz mit regelmäßigen Überprüfungs- und Anpassungszyklen.\n• Stakeholder-Management: Wir identifizieren und involvieren frühzeitig alle relevanten Stakeholder, um Widerstände zu minimieren und Akzeptanz zu schaffen.\n• Wissenstransfer und Befähigung: Nachhaltiger Erfolg erfordert den Aufbau interner Kompetenzen – wir arbeiten eng mit Ihren Teams zusammen, um Wissen zu transferieren und Selbstständigkeit zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie misst und demonstriert ADVISORI den Erfolg einer BCBS-239 Implementierung gegenüber Aufsichtsbehörden und internen Stakeholdern?",
        answer: "Der Nachweis einer erfolgreichen BCBS-239 Implementierung erfordert einen mehrdimensionalen Messansatz, der sowohl regulatorische Compliance als auch geschäftlichen Mehrwert transparent macht. ADVISORI hat ein umfassendes Framework entwickelt, das die Erfolgsmessung und -kommunikation sowohl gegenüber Aufsichtsbehörden als auch internen Stakeholdern systematisch unterstützt.\n\n📊 Mehrdimensionales Erfolgs-Messframework:\n• Compliance-Metriken: Systematische Erfassung und Dokumentation der Erfüllung spezifischer BCBS-239 Anforderungen mit quantitativen und qualitativen Indikatoren, die den Reifegrad in jedem der 14 BCBS-239 Prinzipien transparent machen.\n• Prozess-Performance-Indikatoren: Messung der Effizienzsteigerung in Risikodatenprozessen, wie Reduktion von Durchlaufzeiten für Risikoberichte, Verringerung manueller Eingriffe und Verbesserung der End-to-End-Datenverarbeitung.\n• Datenqualitätsmetriken: Quantifizierung der Verbesserung kritischer Datenqualitätsdimensionen wie Vollständigkeit, Genauigkeit, Konsistenz, Aktualität und Nachvollziehbarkeit von Risikodaten.\n• Business-Value-Indikatoren: Erfassung des geschäftlichen Mehrwerts durch verbesserte Entscheidungsfindung, optimierte Kapitalallokation und reduzierte operationelle Risiken.\n\n🔄 ADVISORI's Implementierungsansatz für die Erfolgsmessung:\n• Baseline-Erhebung: Zu Beginn des Projekts etablieren wir eine detaillierte Ausgangsmessung aller relevanten Metriken, um Fortschritte messbar zu machen.\n• Continuous Monitoring: Implementation eines fortlaufenden Überwachungssystems für Schlüsselindikatoren, das frühzeitige Interventionen bei Abweichungen ermöglicht.\n• Stakeholder-spezifische Dashboards: Entwicklung maßgeschneiderter Berichtsformate für unterschiedliche Zielgruppen – von technischen Details für Aufsichtsbehörden bis zu business-orientierten Kennzahlen für die Geschäftsleitung.\n• Evidenzbasierte Dokumentation: Aufbau einer strukturierten Nachweisdokumentation, die nicht nur den aktuellen Status, sondern auch den Transformationsprozess und die implementierten Kontrollen transparent macht.\n\nDieser mehrschichtige Ansatz stellt sicher, dass der Erfolg der BCBS-239 Implementierung nicht nur behauptet, sondern nachvollziehbar belegt werden kann – sowohl für regulatorische Zwecke als auch zur internen Legitimation der Investitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche technologischen Innovationen und Best Practices integriert ADVISORI in die BCBS-239 Implementierung, um zukunftssichere Lösungen zu schaffen?",
        answer: "Eine zukunftsfähige BCBS-239 Implementierung muss über die reine Compliance hinausblicken und moderne Technologien sowie fortschrittliche Methoden integrieren. ADVISORI verbindet regulatorisches Expertenwissen mit technologischer Innovation, um Lösungen zu schaffen, die nicht nur heutige Anforderungen erfüllen, sondern auch für zukünftige Entwicklungen gerüstet sind.\n\n🔮 Zukunftsorientierte technologische Ansätze:\n• Data Mesh & Data Fabric Architekturen: Implementation dezentraler, domänenorientierter Datenverantwortung bei gleichzeitiger Sicherstellung übergreifender Governance und Konsistenz durch eine flexible Dateninfrastruktur.\n• Graph-Datenbanken für Datenlineage: Einsatz spezialisierter Graphtechnologien zur Visualisierung und Analyse komplexer Datenflüsse, die eine lückenlose Rückverfolgbarkeit von Risikodaten vom Reporting bis zur Quelle ermöglichen.\n• KI-gestützte Datenqualitätssicherung: Integration von Machine Learning für anomaliebasierte Datenqualitätskontrollen, die selbstlernend Qualitätsprobleme identifizieren und kategorisieren können.\n• Event-Driven Architecture: Implementierung reaktiver Systeme, die Datenänderungen in Echtzeit erfassen und propagieren, um die Aktualität von Risikodaten signifikant zu verbessern.\n\n📈 Methodische Best Practices für nachhaltige Implementierung:\n• DataOps & Continuous Integration: Anwendung agiler Methoden auf Datenprozesse mit automatisierten Tests und Validierungsroutinen, die kontinuierliche Verbesserung und schnellere Implementierungszyklen ermöglichen.\n• Metadata-Driven Automation: Steuerung von Datenintegrations- und Transformationsprozessen durch Metadaten, was Flexibilität erhöht und manuelle Anpassungen minimiert.\n• Föderierte Governance-Modelle: Balance zwischen zentraler Steuerung und dezentraler Verantwortung durch klar definierte Standards bei gleichzeitiger Flexibilität in der Umsetzung.\n• Self-Service Analytics mit Governance-Guardrails: Befähigung von Fachbereichen zur selbstständigen Datenanalyse innerhalb klar definierter Governance-Leitplanken.\n\nDurch die Integration dieser zukunftsweisenden Technologien und Methoden schafft ADVISORI BCBS-239 Lösungen, die nicht nur kurzfristige Compliance sicherstellen, sondern langfristig Wert generieren und mit der dynamischen Entwicklung regulatorischer Anforderungen und technologischer Möglichkeiten Schritt halten können."
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
