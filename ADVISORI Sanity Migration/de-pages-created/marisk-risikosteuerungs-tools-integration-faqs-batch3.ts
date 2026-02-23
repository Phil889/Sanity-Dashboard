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
    console.log('Updating MaRisk Risikosteuerungs-Tools Integration page with FAQs batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI bei der Integration unserer Risikosteuerungs-Tools in die bestehende IT-Sicherheitsarchitektur unter Berücksichtigung der MaRisk-Anforderungen?",
        answer: "Die Integration von Risikosteuerungs-Tools in die IT-Sicherheitsarchitektur stellt eine besondere Herausforderung dar, da diese Systeme hochsensible Risikodaten verarbeiten und gleichzeitig besonderen regulatorischen Anforderungen gemäß MaRisk AT 7.2 (Technisch-organisatorische Ausstattung) unterliegen. ADVISORI bietet einen ganzheitlichen Ansatz, der Compliance, Sicherheit und Benutzerfreundlichkeit in Einklang bringt.\n\n🔒 MaRisk-konforme Sicherheitsintegration:\n• Risikobasiertes Security-by-Design: Wir integrieren Sicherheitsanforderungen bereits in der Konzeptionsphase Ihrer Tool-Landschaft, um nachträgliche kostspielige Anpassungen zu vermeiden.\n• Schutzbedarf-Assessment: Systematische Bewertung des Schutzbedarfs von Risikosteuerungs-Tools und -Daten nach den Dimensionen Vertraulichkeit, Integrität und Verfügbarkeit gemäß AT 7.2.\n• Defense-in-Depth-Strategie: Implementierung mehrschichtiger Sicherheitsmaßnahmen, die speziell auf die Absicherung von Risikomanagement-Funktionen ausgerichtet sind.\n• Privileged Access Management: Entwicklung eines rollenbasierten Zugriffskonzepts, das die Trennung von Funktionen im Risikomanagement (Vier-Augen-Prinzip, Segregation of Duties) technisch umsetzt.\n\n🛡️ Spezifische Sicherheitsmaßnahmen für Risikosteuerungs-Tools:\n• Daten-Klassifizierung und -Schutz: Implementierung einer Klassifizierung für Risikodaten und darauf abgestimmter Schutzmaßnahmen, wie differenzierte Verschlüsselungskonzepte.\n• Audit-Trail und Unveränderbarkeit: Sicherstellung der Nachvollziehbarkeit aller Änderungen an risikorelevanten Daten und Parametern durch lückenlose Protokollierung.\n• Secure API Gateway: Absicherung der Schnittstellen zwischen Risikosteuerungs-Tools und anderen Systemen durch zentrale API-Sicherheitskontrollen.\n• Notfallmanagement: Integration der Risikosteuerungs-Tools in die BCM- und Notfallkonzepte gemäß AT 7.3 mit definierten Recovery-Prozessen und -Zielen.\n\n🔍 Compliance-Monitoring und Sicherheits-Governance:\n• Kontinuierliches Compliance-Monitoring: Implementierung automatisierter Kontrollen zur fortlaufenden Überprüfung der Einhaltung von MaRisk-Anforderungen.\n• Vulnerability Management: Etablierung eines spezialisierten Schwachstellenmanagements für Risikosteuerungs-Tools mit priorisierter Behebung kritischer Sicherheitslücken.\n• Sicherheits-KPIs: Entwicklung spezifischer Kennzahlen zur Messung und Steuerung des Sicherheitsniveaus Ihrer Risikosteuerungs-Toollandschaft.\n• Sicherheitsreviews und Penetrationstests: Regelmäßige unabhängige Überprüfung der Sicherheit Ihrer Risikosteuerungs-Tools gemäß den Anforderungen der MaRisk an die Prüfung der IT-Systeme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie gewährleisten wir die kontinuierliche Weiterentwicklung unserer integrierten Risikosteuerungs-Tools im Kontext regelmäßiger MaRisk-Novellierungen?",
        answer: "Die MaRisk unterliegen einer kontinuierlichen Weiterentwicklung, um auf neue Risiken und Anforderungen im Finanzsektor zu reagieren. Eine zukunftssichere Integration von Risikosteuerungs-Tools muss daher agil und anpassungsfähig sein. ADVISORI unterstützt Sie mit einem nachhaltigen Evolutionskonzept, das regulatorische Änderungen proaktiv antizipiert und Ihre Toollandschaft flexibel hält.\n\n🔄 Regulatory Change Management für MaRisk-konforme Tools:\n• Regulatorisches Radar: Wir etablieren einen systematischen Prozess zur frühzeitigen Identifikation relevanter Änderungen in MaRisk und verwandten Regularien (BAIT, ZAIT, etc.).\n• Impact-Analyse-Framework: Strukturierte Methodik zur Bewertung der Auswirkungen regulatorischer Änderungen auf Ihre Risikosteuerungs-Tools und -Prozesse.\n• Roadmap-Synchronisation: Abstimmung der Tool-Entwicklungszyklen mit dem regulatorischen Änderungskalender zur Minimierung von Compliance-Lücken.\n• Modulare Anpassungsstrategie: Entwicklung eines flexiblen Anpassungskonzepts, das punktuelle Änderungen ermöglicht, ohne die Gesamtarchitektur zu destabilisieren.\n\n🔧 Technische Flexibilität für regulatorische Anpassungsfähigkeit:\n• Parametrisierbare Lösungen: Präferenz für konfigurierbare statt hart-codierte Risikosteuerungsfunktionen, die ohne Programmieranpassungen aktualisiert werden können.\n• Business Rules Engine: Implementierung eines regelbasierten Ansatzes, der die Anpassung von Risikologiken und -kontrollen ohne Codeänderungen ermöglicht.\n• API-First-Strategie: Fokus auf offene, standardisierte Schnittstellen, die die Integration neuer regulatorisch erforderlicher Funktionen erleichtern.\n• Continuous Integration/Continuous Deployment: Etablierung von DevOps-Praktiken, die schnelle, sichere Updates von Risikosteuerungsfunktionen ermöglichen.\n\n📊 Mehrwert durch strategische Weiterentwicklung:\n• Benchmark-orientierte Optimierung: Kontinuierlicher Abgleich Ihrer Tool-Landschaft mit Best Practices und Branchenstandards im Risikomanagement.\n• Funktionale Erweiterungen mit Business Case: Identifikation von Tool-Erweiterungen, die sowohl die Compliance verbessern als auch messbare Geschäftsvorteile bieten.\n• Integration neuer Risikomanagement-Methoden: Proaktive Einbindung innovativer Ansätze wie Advanced Analytics oder ESG-Risikobewertung.\n• Effizienzsteigerung durch Prozessautomatisierung: Kontinuierliche Identifikation von Automatisierungspotentialen in Risikoprozessen und deren Umsetzung in den Tools."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie unterstützt ADVISORI bei der Validierung und dem Testing unserer integrierten Risikosteuerungs-Tools, um die MaRisk-Konformität nachzuweisen?",
        answer: "Die Validierung und das Testing von Risikosteuerungs-Tools sind gemäß MaRisk AT 7.2 Tz. 2 und AT 4.3.2 entscheidende Anforderungen, um die Zuverlässigkeit und Angemessenheit der eingesetzten Methoden und Verfahren nachzuweisen. ADVISORI bietet einen umfassenden Validierungs- und Testansatz, der sowohl technische als auch fachliche Aspekte abdeckt und den Nachweis der MaRisk-Konformität sicherstellt.\n\n🧪 Mehrstufiges Validierungs- und Testkonzept:\n• Methodenvalidierung: Überprüfung der in den Tools implementierten Risikobewertungs- und -steuerungsmethoden auf mathematische Korrektheit, konzeptionelle Angemessenheit und regulatorische Konformität.\n• Ergebnisvalidierung: Systematischer Vergleich der Tool-Ergebnisse mit Referenzwerten und alternativen Berechnungsmethoden (Benchmarking, Back-Testing, Parallelrechnungen).\n• End-to-End-Prozesstests: Durchführung integrierter Tests, die den gesamten Risikomanagementprozess von der Dateneingabe bis zur Berichtserstellung abdecken.\n• Annahmestresstest: Prüfung der Robustheit und Plausibilität der Tool-Ergebnisse unter extremen Szenarien und bei Grenzbedingungen.\n\n📝 Dokumentations- und Nachweiskonzept für Aufsichtszwecke:\n• Validierungshandbuch: Erstellung einer umfassenden Dokumentation der Validierungsmethodik, -durchführung und -ergebnisse gemäß den aufsichtsrechtlichen Anforderungen.\n• Change Validation Matrix: Dokumentation der Validierungsaktivitäten bei Änderungen an den Tools oder den zugrundeliegenden Modellen gemäß dem Wesentlichkeitsprinzip.\n• MaRisk-Mapping: Detaillierte Zuordnung der implementierten Kontrollen und Funktionen zu den spezifischen MaRisk-Anforderungen für Prüfungszwecke.\n• Validierungsberichte: Erstellung strukturierter Berichte, die die Ergebnisse der Validierung transparent darstellen und für Prüfungen durch Interne Revision und Aufsicht geeignet sind.\n\n🔍 Spezifische Testverfahren für Risikosteuerungs-Tools:\n• Datenqualitätstests: Überprüfung der Datenvalidierungsregeln und -kontrollen, die die Integrität und Korrektheit der Risikodaten sicherstellen.\n• Berechtigungstests: Validierung der korrekten Implementierung des Berechtigungskonzepts und der Einhaltung des Vier-Augen-Prinzips.\n• Performance- und Stresstests: Bewertung der Systemleistung unter normalen und erhöhten Lastbedingungen, insbesondere für Ad-hoc-Analysen und Stress-Szenarien.\n• Schnittstellentests: Überprüfung der korrekten Datenübertragung zwischen den verschiedenen Komponenten der Risikosteuerungs-Toollandschaft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Besonderheiten ergeben sich bei der Integration von Risikosteuerungs-Tools für kleinere und mittelgroße Institute, und wie unterstützt ADVISORI dabei?",
        answer: "Kleinere und mittelgroße Institute stehen bei der Integration von MaRisk-konformen Risikosteuerungs-Tools vor besonderen Herausforderungen. Sie müssen einerseits die gleichen regulatorischen Anforderungen erfüllen wie Großbanken, verfügen andererseits aber oft über begrenztere Ressourcen. ADVISORI bietet speziell auf diese Institute zugeschnittene Integrationskonzepte, die Proportionalität, Effizienz und Kostenoptimierung in den Fokus stellen.\n\n🏦 Proportionalitätsgerechte Integrationsansätze:\n• MaRisk-konforme Minimalarchitektur: Wir entwickeln schlanke Tool-Integrationskonzepte, die exakt auf den Proportionalitätsprinzipien der MaRisk basieren und die wesentlichen Anforderungen erfüllen, ohne überdimensioniert zu sein.\n• Modulare Skalierung: Aufbau einer evolutionären Architektur, die mit dem Institut wächst und jederzeit um zusätzliche Funktionen erweitert werden kann, wenn neue Geschäftsfelder oder regulatorische Anforderungen dies erfordern.\n• Multi-Purpose-Tools: Fokus auf flexible Werkzeuge, die mehrere Risikoarten und -prozesse abdecken können, statt spezialisierter Einzellösungen für jede Risikodimension.\n• Cloud-basierte Lösungen: Nutzung moderner SaaS- und Cloud-Angebote, die geringere Vorabinvestitionen erfordern und flexible Skalierbarkeit bieten.\n\n💰 Kostenoptimierte Implementierungsstrategien:\n• Shared Service Modelle: Entwicklung von Kooperationskonzepten mit anderen Instituten für gemeinsame Tool-Nutzung oder geteiltes Expertenwissen.\n• Standardisierte Implementierungspakete: Vorkonfigurierte Lösungen mit bewährten Templates, die den Implementierungsaufwand minimieren und schnellere Time-to-Compliance ermöglichen.\n• Open Source Integration: Evaluation und Integration qualitativ hochwertiger Open-Source-Komponenten in die Risikosteuerungs-Architektur, wo sinnvoll und sicher möglich.\n• Fokus auf Kernfunktionen: Priorisierung der kritischen Risikofunktionen mit dem höchsten Mehrwert und regulatorischen Stellenwert.\n\n👥 Expertise-Management bei begrenzten Ressourcen:\n• Kompetenzaufbau: Gezielte Schulung von Schlüsselpersonen, die als interne Multiplikatoren und erste Ansprechpartner für die Tools fungieren.\n• Unterstützungsmodelle: Flexible Support- und Managed-Service-Optionen, von punktueller Expertise bis hin zu umfassender Betreuung.\n• Knowledge-Transfer-Programme: Strukturierte Wissensvermittlung, die sicherstellt, dass das Institut langfristig selbständig mit den Tools arbeiten kann.\n• Dokumentationskonzepte: Entwicklung maßgeschneiderter, kompakter Dokumentationslösungen, die dennoch allen aufsichtsrechtlichen Anforderungen genügen."
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
