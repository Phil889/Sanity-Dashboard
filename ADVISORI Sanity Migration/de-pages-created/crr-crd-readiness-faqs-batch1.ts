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
    console.log('Updating CRR/CRD Readiness page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Was umfasst ein umfassendes CRR/CRD-Readiness Assessment und welche spezifischen Bereiche sollten Finanzinstitute besonders beachten?",
        answer: "Ein effektives CRR/CRD-Readiness Assessment ist ein mehrdimensionales Evaluierungsinstrument, das weit über eine einfache Checkliste hinausgeht. Es handelt sich um eine strukturierte, tiefgreifende Analyse aller regulatorischen Dimensionen, die von den Eigenkapitalanforderungen betroffen sind, mit dem Ziel, nicht nur Compliance-Lücken zu identifizieren, sondern auch strategische Optimierungspotenziale aufzuzeigen.\n\n🔍 Kernbereiche eines ganzheitlichen Readiness Assessments:\n• Kapitalstruktur und -qualität: Detaillierte Analyse der Eigenkapitalbestandteile nach CRR-Kategorien (CET1, AT1, T2) sowie Bewertung der Anrechnungsfähigkeit und Übergangsbestimmungen für bestehende Kapitalinstrumente.\n• Risikomessmethoden und -modelle: Evaluation der eingesetzten Risikomessverfahren (Standardansätze vs. interne Modelle) für Kredit-, Markt- und operationelle Risiken unter Berücksichtigung der Output-Floor-Bestimmungen und neuer FRTB-Anforderungen.\n• Governance und Prozessarchitektur: Überprüfung der Risikomanagement-Prozesse, Aufbau- und Ablauforganisation sowie Verantwortlichkeiten im Hinblick auf CRR/CRD-Anforderungen und die Three Lines of Defense.\n• Datenmanagement und -qualität: Bewertung der Datenverfügbarkeit, -granularität und -qualität für regulatorische Berechnungen und Reporting, insbesondere im Hinblick auf die erhöhten Transparenzanforderungen.\n\n📈 Priorisierte Fokusfelder für Finanzinstitute:\n• Strategische Kapitalplanung: Entwicklung einer zukunftsorientierten Kapitalstrategie, die regulatorische Entwicklungen antizipiert und die Kapitaleffizienz optimiert.\n• Integrierte Risikodatenarchitektur: Etablierung einer zentralen, konsistenten Datenbasis für alle regulatorischen und internen Risikokennzahlen als Grundlage für effiziente Compliance.\n• Regulatorische Technologie (RegTech): Implementierung fortschrittlicher technologischer Lösungen zur Automatisierung und Optimierung regulatorischer Prozesse.\n• Stress-Testing-Frameworks: Aufbau robuster Stresstestmethoden, die sowohl aufsichtsrechtliche Anforderungen erfüllen als auch wertvolle Einblicke für die strategische Steuerung liefern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute die Implementierung neuer CRR/CRD-Anforderungen mit ihrer strategischen Geschäftsplanung in Einklang bringen?",
        answer: "Die Integration von CRR/CRD-Anforderungen in die strategische Geschäftsplanung repräsentiert einen Paradigmenwechsel: weg von einer isolierten Compliance-Funktion hin zu einem integrierten Steuerungsansatz, der regulatorische Anforderungen als strategischen Input für Geschäftsentscheidungen nutzt. Erfolgreiche Institute betrachten Regulierung nicht als Hindernis, sondern als Katalysator für nachhaltige Geschäftsmodelle und Wettbewerbsvorteile.\n\n🔄 Integrationsstrategien für CRR/CRD und Geschäftsplanung:\n• Kapitaloptimierte Geschäftsmodellausrichtung: Systematische Analyse der RWA-Intensität verschiedener Geschäftsfelder und Produkte als Grundlage für Portfolio-Optimierungen und strategische Ressourcenallokation.\n• Regulatorischer Radar im Strategieprozess: Integration eines formalen Prozesses zur Bewertung regulatorischer Entwicklungen in den strategischen Planungszyklus, um frühzeitig Anpassungsbedarfe und Opportunitäten zu identifizieren.\n• Risikoadjustierte Performancemessung: Implementation von RAROC (Risk-Adjusted Return on Capital) und ähnlichen Kennzahlen als Basis für Portfolioentscheidungen und Vergütungssysteme.\n• Regulatorische Stresstests als strategisches Tool: Nutzung von Stresstest-Ergebnissen für die strategische Planung, um Vulnerabilitäten zu identifizieren und die Resilienz des Geschäftsmodells zu erhöhen.\n\n🧩 Konkrete Implementierungsansätze:\n• Governance-Integration: Etablierung eines interdisziplinären Steuerungskreises, der regulatorische, finanzielle und geschäftsstrategische Perspektiven vereint und eine konsistente Entscheidungsfindung sicherstellt.\n• Strategische Kapitalallokation: Entwicklung eines Kapitalallokationsrahmens, der regulatorische Kosten explizit berücksichtigt und in die Entscheidungen zur Ressourcenverteilung zwischen Geschäftsfeldern einfließen lässt.\n• Produktentwicklungsprozesse: Verankerung regulatorischer Parameter (RWA-Intensität, Liquiditätsanforderungen) bereits in der Konzeptionsphase neuer Produkte und Dienstleistungen.\n• Digitale Transformation: Nutzung von Advanced Analytics und KI zur Simulation regulatorischer Auswirkungen verschiedener Geschäftsstrategien und zur Identifikation optimaler Handlungsoptionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Technologielösungen und Datenarchitekturen empfiehlt ADVISORI für eine effiziente und zukunftssichere CRR/CRD-Compliance?",
        answer: "Die technologische Dimension ist ein kritischer Erfolgsfaktor für eine nachhaltige CRR/CRD-Compliance. Die richtigen Technologielösungen und Datenarchitekturen ermöglichen nicht nur eine effiziente Erfüllung der aktuellen Anforderungen, sondern schaffen auch die Flexibilität, auf zukünftige regulatorische Änderungen agil zu reagieren. ADVISORI verfolgt einen ganzheitlichen Technologieansatz, der Datenmanagement, Berechnungslogik und Reporting integriert.\n\n🔧 Fundamentale Technologiekomponenten für CRR/CRD-Excellence:\n• Integriertes Regulatorisches Datenwarehouse: Implementierung einer zentralen, granularen Datenbasis, die alle relevanten Risikoparameter in konsistenter Qualität für regulatorische und interne Zwecke bereitstellt.\n• Modulare Berechnungsengines: Entwicklung flexibler Berechnungsmotor-Architekturen, die parallele Methodenansätze (z.B. Standard- vs. interne Modelle) unterstützen und einfach an neue regulatorische Anforderungen angepasst werden können.\n• Regulatorische Reporting-Plattform: Integration von hochautomatisierten Reporting-Lösungen, die den gesamten Prozess vom Datenimport bis zur Einreichung bei den Aufsichtsbehörden abdecken und eine lückenlose Prüfspur (Audit Trail) gewährleisten.\n• Simulationsumgebungen und Sandbox: Bereitstellung von Simulationstools, mit denen die Auswirkungen von Geschäftsentscheidungen und Portfolioänderungen auf regulatorische Kennzahlen vorab getestet werden können.\n\n🌐 Innovative Technologieansätze für die nächste Generation der Compliance:\n• API-basierte Microservices-Architektur: Umstellung monolithischer Compliance-Systeme auf flexible, modulare Microservices, die über standardisierte APIs kommunizieren und eine agile Anpassung an regulatorische Änderungen ermöglichen.\n• Regulatory-as-a-Service: Cloud-basierte Lösungen, die regulatorische Berechnungen und Updates als Service bereitstellen und die operativen Belastungen reduzieren.\n• Machine Learning für Datenqualität: Einsatz von KI-Algorithmen zur automatisierten Identifikation von Datenanomalien, Inkonsistenzen und Qualitätsproblemen in regulatorischen Datensätzen.\n• Blockchain für Audit-Sicherheit: Nutzung von Distributed-Ledger-Technologien für die manipulationssichere Dokumentation regulatorischer Entscheidungen, Modellannahmen und Berechnungsparameter."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollten Finanzinstitute ihr CRR/CRD-Governance-Framework gestalten, um sowohl Compliance zu gewährleisten als auch strategische Entscheidungsprozesse zu unterstützen?",
        answer: "Ein effektives CRR/CRD-Governance-Framework bildet das Fundament für nachhaltige Compliance und strategische Wertschöpfung. Es geht weit über die formale Erfüllung aufsichtsrechtlicher Anforderungen hinaus und etabliert eine Organisationsstruktur, die regulatorische Überlegungen in alle relevanten Geschäftsprozesse integriert und klare Verantwortlichkeiten definiert. ADVISORI empfiehlt einen Governance-Ansatz, der Compliance, Risikomanagement und strategische Steuerung nahtlos verbindet.\n\n🏛️ Kernelemente eines optimalen CRR/CRD-Governance-Frameworks:\n• CRR/CRD-Steuerungskomitee: Etablierung eines hochrangigen, bereichsübergreifenden Gremiums mit Vertretern aus Risikomanagement, Treasury, Finance und den Geschäftsbereichen, das die strategischen Implikationen der Kapitalanforderungen bewertet und Leitlinien für die gesamte Organisation entwickelt.\n• Dreilinienmodell mit regulatorischem Fokus: Klare Zuordnung von CRR/CRD-spezifischen Verantwortlichkeiten entlang des Three-Lines-of-Defense-Modells, mit besonderem Augenmerk auf die Schnittstellen zwischen den Linien.\n• Regulatorisches Kompetenzmodell: Definition der erforderlichen Qualifikationen und Expertise für alle Funktionen mit CRR/CRD-Bezug, verbunden mit gezielten Schulungs- und Entwicklungsprogrammen.\n• Anreizstrukturen und Vergütungssysteme: Integration von Compliance-KPIs in die Leistungsbewertung und variable Vergütung, um eine nachhaltige Compliance-Kultur zu fördern.\n\n📋 Praktische Implementierungsschritte:\n• Regulatory Ownership Matrix (ROM): Entwicklung einer detaillierten Matrix, die für jede CRR/CRD-Anforderung klar definiert, wer verantwortlich (Responsible), rechenschaftspflichtig (Accountable), zu konsultieren (Consulted) und zu informieren (Informed) ist.\n• Policy-Architektur: Etablierung einer hierarchischen, kohärenten Struktur von Richtlinien und Verfahrensanweisungen, die alle regulatorischen Anforderungen abdeckt und in die operative Praxis übersetzt.\n• Integriertes Compliance-Monitoring: Implementierung eines systematischen Überwachungssystems, das die Einhaltung der CRR/CRD-Anforderungen kontinuierlich überprüft und frühzeitig auf potenzielle Verstöße hinweist.\n• Regulatorische Change-Management-Prozesse: Einrichtung strukturierter Prozesse zur Bewertung, Planung und Umsetzung regulatorischer Änderungen, die eine reibungslose Anpassung an neue Anforderungen gewährleisten."
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
