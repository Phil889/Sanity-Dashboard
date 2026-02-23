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
    console.log('Updating BCBS-239 Ongoing Compliance page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche technologischen Innovationen können genutzt werden, um die BCBS-239 Ongoing Compliance zu optimieren und zukunftssicher zu gestalten?",
        answer: "Die kontinuierliche Evolution von BCBS-239 Compliance erfordert den strategischen Einsatz moderner Technologien, die nicht nur aktuelle Anforderungen erfüllen, sondern auch für zukünftige regulatorische Entwicklungen und Geschäftsmodelle gerüstet sind. ADVISORI empfiehlt einen innovationsorientierten, aber pragmatischen Technologieansatz.\n\n🔧 Transformative Technologien für zukunftssichere BCBS-239 Compliance:\n• Data Fabric & Data Mesh Architekturen: Implementation dezentraler, domänenorientierter Datenarchitekturen, die sowohl lokale Flexibilität als auch globale Governance-Standards ermöglichen.\n• Process Mining & Task Mining: Einsatz von KI-gestützter Prozessanalyse zur automatischen Identifikation von Ineffizienzen und manuellen Workarounds in Risikodaten-Prozessen.\n• Regulierungstechnologie (RegTech): Integration spezialisierter RegTech-Lösungen für automatisierte Compliance-Überwachung und dynamische Anpassung an neue regulatorische Anforderungen.\n• Graph-basierte Datenmodelle: Nutzung von Graphdatenbanken für die transparente Darstellung komplexer Datenbeziehungen und Lineage-Informationen über verschiedene Risikokategorien hinweg.\n• Kollaborative Data Governance Plattformen: Einsatz von Tools, die ein unternehmensweites, kollaboratives Daten- und Metadatenmanagement ermöglichen.\n\n🚀 Emerging Technologies mit hohem Potenzial:\n• Natural Language Processing (NLP): Automatisierung der Interpretation und Kategorisierung textueller Risikoinformationen, insbesondere für qualitative Risikofaktoren.\n• Explainable AI (XAI): Einsatz erklärbarer KI-Modelle für Datenqualitätsprüfungen und Anomalieerkennung mit regulatorisch erforderlicher Transparenz.\n• Distributed Ledger Technology (DLT): Nutzung von Blockchain-Technologie für unveränderliche Audit-Trails und transparente Datenlineage bei kritischen Risikodaten.\n• Continuous Intelligence: Implementierung von Real-time Analytics für kontinuierliche Überwachung und automatische Adjustierung von Risikodaten-Prozessen.\n• Self-service Analytics mit Governance-Guardrails: Bereitstellung flexibler Analysemöglichkeiten für Fachbereiche bei gleichzeitiger Sicherstellung regulatorischer Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterstützt ADVISORI bei der Integration von BCBS-239 Compliance in DevOps-Prozesse und die Entwicklung neuer Risikomanagement-Anwendungen?",
        answer: "Die Integration von BCBS-239 Compliance-Anforderungen in moderne DevOps-Prozesse ist entscheidend für eine nachhaltige Compliance, die mit der schnellen technologischen Evolution Schritt halten kann. Anstatt Compliance als nachträgliche Prüfung zu betrachten, sollte sie von Anfang an in den Entwicklungszyklus eingebettet werden – ein Ansatz, den wir als \"Compliance as Code\" bezeichnen.\n\n🔄 DevSecRegOps: Erweiterung des DevOps-Modells um Compliance:\n• Shift-Left Compliance: Integration von Compliance-Anforderungen und -Tests bereits in frühen Phasen des Entwicklungszyklus, parallel zu Security-Aspekten (DevSecRegOps).\n• Compliance Pipeline Integration: Automatisierte Compliance-Checks als fester Bestandteil der CI/CD-Pipeline, die Verstöße gegen BCBS-239 Anforderungen frühzeitig erkennen.\n• Infrastructure as Code (IaC) mit Compliance-Templates: Entwicklung von wiederverwendbaren, bereits compliance-konformen Infrastrukturvorlagen für Risikodaten-Systeme.\n• Regulatory Change Management: Automatisierte Workflows zur Bewertung und Integration neuer regulatorischer Anforderungen in bestehende Entwicklungsprozesse.\n• Compliance-Testing-Frameworks: Spezifische Testsuiten für die Validierung von BCBS-239 Anforderungen, die in automatisierte Testprozesse integriert werden können.\n\n📊 Best Practices für Compliance-orientierte Anwendungsentwicklung:\n• API-First Design mit Compliance-Attributen: Entwicklung von APIs mit integrierten Compliance-Metadaten und -Validierungen für Risikodaten.\n• Metadaten-gesteuerte Anwendungslogik: Implementierung von Anwendungen, die Compliance-Regeln und Datendefinitionen aus zentralen Repositories beziehen, statt sie hartkodiert zu implementieren.\n• Event-Driven Compliance Monitoring: Nutzung von Event-Sourcing und CQRS-Mustern für Echtzeit-Überwachung von Compliance-relevanten Vorgängen.\n• Feature Flags für Compliance-Funktionen: Kontrollierte Einführung neuer Compliance-Funktionalitäten mit Möglichkeit zum schnellen Rollback bei unerwarteten Problemen.\n• Continuous Compliance Documentation: Automatisierte Generierung und Aktualisierung von Compliance-Dokumentation direkt aus dem Code und den Entwicklungsartefakten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute ihre BCBS-239 Ongoing Compliance effektiv externen Prüfern und Aufsichtsbehörden nachweisen?",
        answer: "Der überzeugende Nachweis der BCBS-239 Compliance gegenüber externen Prüfern und Aufsichtsbehörden ist mehr als eine formale Notwendigkeit – er ist ein strategisches Element, das das Vertrauen in die Risk Governance des Instituts stärkt und regulatorischen Aufwand reduzieren kann. Ein strukturierter, evidenzbasierter Ansatz ist entscheidend für erfolgreiche Prüfungen.\n\n📋 Strategischer Ansatz für überzeugende Compliance-Nachweise:\n• Kontinuierliche Beweisführung statt punktueller Vorbereitung: Aufbau einer fortlaufenden Dokumentations- und Nachweiskultur, die nicht erst bei angekündigten Prüfungen aktiviert wird.\n• Mehrschichtige Evidenzhierarchie: Strukturierung von Nachweisen in strategische, taktische und operative Ebenen, um sowohl die Governance-Perspektive als auch die technische Implementierungstiefe abzudecken.\n• Prozessorientierte Nachweisführung: Darstellung der End-to-End-Prozesse anstelle isolierter Kontrollen, um den ganzheitlichen Compliance-Ansatz zu demonstrieren.\n• Präventive Aufsichtskommunikation: Proaktiver Dialog mit Aufsichtsbehörden über Compliance-Fortschritte und -Herausforderungen, um Vertrauen aufzubauen und Verbesserungsvorschläge zu erhalten.\n• Benchmark-orientierte Selbsteinschätzung: Nutzung branchenweiter Vergleichsmaßstäbe und Best Practices für eine realistische Einordnung der eigenen Compliance-Reife.\n\n🧾 Konkrete Nachweistypen und Dokumentationsstrategien:\n• Automatisierte Compliance-Dashboards: Entwicklung visualisierter Echtzeit-Darstellungen des Compliance-Status mit Drill-down-Möglichkeiten für Prüfer.\n• Regulatory Exam Management System: Implementierung einer zentralen Plattform zur Verwaltung aller prüfungsrelevanten Dokumente, Nachweise und Kommunikation.\n• Process Control Matrices: Detaillierte Zuordnung von BCBS-239 Prinzipien zu implementierten Kontrollen, Verantwortlichkeiten und Nachweisen.\n• Automated Test Evidence: Bereitstellung von Ergebnissen automatisierter Compliance-Tests mit nachvollziehbaren Prüfpfaden und historischer Entwicklung.\n• Compliance Improvement Tracking: Dokumentation identifizierter Schwachstellen, geplanter Maßnahmen und erzielter Fortschritte im zeitlichen Verlauf."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Ansätze empfiehlt ADVISORI zur Schulung und Bewusstseinsbildung für BCBS-239 bei verschiedenen Stakeholdern innerhalb der Organisation?",
        answer: "Eine nachhaltige BCBS-239 Compliance erfordert mehr als technische Implementierungen – sie verlangt ein tiefgreifendes Bewusstsein und Verständnis bei allen relevanten Stakeholdern. Eine strategische Kombination aus zielgruppenspezifischen Schulungen und kontinuierlicher Sensibilisierung ist entscheidend für die Verankerung der Compliance in der Organisationskultur.\n\n👩‍💼 Zielgruppenspezifische Schulungsstrategien:\n• Vorstand und C-Level: Executive Briefings mit Fokus auf strategische Implikationen, Governance-Verantwortung und Business Value der BCBS-239 Compliance.\n• Mittleres Management: Tiefergehende Schulungen zu Accountability, Ressourcenallokation und Leistungsmessung für nachhaltige Compliance-Integration.\n• Datenexperten und IT-Spezialisten: Technisch orientierte Deep-Dive-Workshops zu Datenarchitektur, Lineage-Tracking und automatisierten Kontrollen.\n• Fachbereichsmitarbeiter: Praxisnahe Schulungen zur Bedeutung von Datenqualität im täglichen Geschäft und zur korrekten Anwendung von Risikodaten-Prozessen.\n• Interne Revision und Control Functions: Spezialisierte Trainings zu Prüfungsmethodik, Compliance-Bewertung und Identifikation von Verbesserungspotenzialen.\n\n🎓 Innovative Schulungs- und Sensibilisierungsformate:\n• Mikrolerning und Just-in-Time-Schulungen: Kurze, themenfokussierte Lerneinheiten, die direkt am Arbeitsplatz und im Arbeitsablauf integriert werden können.\n• Gamification und Simulationen: Interaktive Lernformate wie BCBS-239 Business Games oder Risikodaten-Simulationen, die komplexe Zusammenhänge erfahrbar machen.\n• Communities of Practice: Etablierung von Expertengruppen und Austauschforen, die kontinuierliches Lernen und bereichsübergreifenden Wissenstransfer fördern.\n• Data Quality Champions: Aufbau eines Netzwerks von Multiplikatoren in allen Geschäftsbereichen, die als Ansprechpartner und Vorbilder fungieren.\n• Fallstudienbasiertes Lernen: Analyse realer Fallbeispiele von Compliance-Verstößen oder Risikodatenproblemen und deren Auswirkungen auf Geschäftsentscheidungen."
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
