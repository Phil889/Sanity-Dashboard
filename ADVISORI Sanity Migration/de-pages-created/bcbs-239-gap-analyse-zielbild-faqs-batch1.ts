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
    console.log('Updating BCBS-239 Gap-Analyse & Zielbild page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-gap-analyse-zielbild' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-gap-analyse-zielbild" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strukturierte Gap-Analyse essenziell für eine erfolgreiche BCBS-239 Implementierung und welchen Mehrwert bietet der ADVISORI-Ansatz?",
        answer: "Eine strukturierte Gap-Analyse bildet das unverzichtbare Fundament jeder erfolgreichen BCBS-239 Implementierung – sie ist weit mehr als eine reine Compliance-Übung. Unsere Erfahrung zeigt, dass ohne präzise Identifikation bestehender Lücken und ein klar definiertes Zielbild BCBS-239 Projekte häufig über Budget geraten, Zeitpläne sprengen und letztendlich nur oberflächliche Compliance erreichen.\n\n🔍 Strategische Bedeutung der Gap-Analyse:\n• Transparenzschaffung: Schafft vollständige Klarheit über den Status quo Ihrer Risikodaten-Governance, -Architektur und -Prozesse im Vergleich zu den regulatorischen Anforderungen.\n• Ressourcenoptimierung: Ermöglicht die präzise Priorisierung von Handlungsfeldern und verhindert kostspielige Fehlallokationen von Budget und Ressourcen.\n• Strategische Planungsgrundlage: Liefert das notwendige Fundament für eine realistische Projektplanung und Roadmap-Entwicklung.\n• Regulatorische Sicherheit: Dokumentiert den systematischen Compliance-Ansatz als Nachweis gegenüber Aufsichtsbehörden.\n\n🌟 Der ADVISORI-Mehrwert:\n• Tiefgreifende Expertise: Unser Experten-Team verfügt über spezifisches Fachwissen aus zahlreichen erfolgreichen BCBS-239 Implementierungen bei verschiedenen Finanzinstituten.\n• Bewährte Methodik: Wir nutzen ein proprietäres Assessment-Framework mit über 200 detaillierten Bewertungskriterien, die alle 14 BCBS-239 Prinzipien abdecken.\n• Benchmarking: Wir reichern Ihre Analyse mit anonymisierten Vergleichsdaten aus unserem Branchen-Benchmarking an, um Best Practices zu identifizieren.\n• Dual-Track-Ansatz: Wir verfolgen parallel die Compliance-Perspektive (Erfüllung regulatorischer Anforderungen) und die Wertsteigerungsperspektive (Optimierung der Datennutzung für geschäftliche Entscheidungen)."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie entwickelt ADVISORI ein maßgeschneidertes Zielbild, das sowohl regulatorische Anforderungen erfüllt als auch die spezifischen Gegebenheiten unseres Instituts berücksichtigt?",
        answer: "Die Entwicklung eines maßgeschneiderten Zielbilds für Ihre BCBS-239 Compliance ist ein hochgradig individueller Prozess, der weit über einen generischen Compliance-Ansatz hinausgeht. ADVISORI verfolgt dabei eine Balance zwischen regulatorischer Präzision und Anpassung an Ihre spezifische Organisationsstruktur, IT-Landschaft und strategische Ausrichtung.\n\n🎯 Unser Ansatz zur Zielbild-Entwicklung:\n• Institutsspezifische Analyse: Wir berücksichtigen Ihre Größe, Komplexität, Geschäftsmodell und Risikoexposition als Grundlage für das Zielbild – ein Tier-1-Institut benötigt andere Lösungen als eine Regionalbank.\n• IT-Architektur-Integration: Das Zielbild wird harmonisch in Ihre bestehende IT-Landschaft integriert, mit klarer Identifikation notwendiger Anpassungen und Erweiterungen.\n• Governance-Alignment: Wir entwickeln Dateneigentümerschafts- und Governance-Modelle, die zu Ihren bestehenden Organisationsstrukturen passen und gleichzeitig die BCBS-239 Anforderungen erfüllen.\n• Praxisorientierte Lösungen: Unsere Zielbilder sind keine theoretischen Konstrukte, sondern praxisorientierte Lösungen, die tatsächlich implementierbar sind.\n\n💡 Komponenten eines vollständigen Zielbilds:\n• Target Operating Model: Definition optimaler Datenmanagement-Prozesse, Verantwortlichkeiten und Governance-Strukturen.\n• Ziel-Datenarchitektur: Konzeption einer effizienten Risikodaten-Infrastruktur mit definierten Datenflüssen, Schnittstellen und Qualitätssicherungsmechanismen.\n• Reporting-Framework: Entwicklung eines integrierten Ansatzes für ein effizientes, automatisiertes und auditfähiges Risikoreporting.\n• Implementierungs-Roadmap: Priorisierte, phasenweise Umsetzungsplanung mit klaren Meilensteinen und Ressourcenplanung.\n\n🔄 Evolutionäre Weiterentwicklung:\n• Skalierbare Lösungen: Unsere Zielbilder berücksichtigen zukünftiges Wachstum und sich verändernde Anforderungen.\n• Technologische Zukunftssicherheit: Integration neuer Technologien wie KI-gestützte Datenvalidierung oder Cloud-basierte Risikodaten-Plattformen.\n• Flexibilität für regulatorische Änderungen: Zukunftssichere Architektur, die an neue regulatorische Anforderungen anpassbar ist."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Schritte umfasst die BCBS-239 Gap-Analyse von ADVISORI und wie wird dabei die Qualität und Vollständigkeit sichergestellt?",
        answer: "Die BCBS-239 Gap-Analyse von ADVISORI folgt einer systematischen, mehrschichtigen Methodik, die weit über eine einfache Checklisten-Abarbeitung hinausgeht. Unser Ziel ist eine tiefgreifende, evidenzbasierte Bewertung, die alle Facetten der BCBS-239 Compliance erfasst und eine solide Grundlage für Ihre Transformationsreise bildet.\n\n📊 Systematischer Analyseprozess in 5 Phasen:\n• Vorbereitungsphase: Abstimmung des Assessment-Frameworks, Identifikation relevanter Stakeholder und Dokumentation, Festlegung des Assessmentumfangs und Zeitplans.\n• Dokumentenanalyse: Tiefgreifende Analyse existierender Dokumentation zu Datengovernance, Architektur, Prozessen und Kontrollen gegen definierte Assessment-Kriterien.\n• Stakeholder-Interviews: Strukturierte Befragungen mit Schlüsselpersonen aus Risikomanagement, IT, Data Governance und Fachbereichen zur Validierung der Dokumentenanalyse und Erfassung impliziten Wissens.\n• Prozess- und Systemanalyse: Praktische Beobachtung und Analysis ausgewählter Schlüsselprozesse, Datenflüsse und Systeme zur Validierung der bisherigen Erkenntnisse.\n• Konsolidierung und Bewertung: Zusammenführung aller Erkenntnisse, Bewertung gegen das BCBS-239 Framework und Identifikation der Compliance-Lücken.\n\n🔍 Qualitätssicherung durch mehrdimensionale Bewertung:\n• Prinzipienbasiertes Assessment: Detaillierte Bewertung gegen alle 14 BCBS-239 Prinzipien mit spezifischen Unterkategorien und messbaren Kriterien.\n• Prozessorientierte Analyse: Betrachtung des vollständigen Risikodaten-Lebenszyklus von der Erfassung bis zum Reporting.\n• Architektur-Assessment: Evaluierung der IT-Systeme, Datenflüsse, Schnittstellen und Datenmodelle.\n• Governance-Bewertung: Analyse von Verantwortlichkeiten, Kontrollen, Richtlinien und Datenqualitätsprozessen.\n\n📈 Ergebnisse mit Tiefe und Präzision:\n• Heatmap-Darstellung: Visuelle Repräsentation der Compliance-Lücken nach Schweregrad und Handlungsbedarf.\n• Gap-Register: Detaillierte Dokumentation aller identifizierten Lücken mit Ursachenanalyse.\n• Priorisierungsmatrix: Bewertung der Gaps nach Kritikalität, Implementierungsaufwand und Abhängigkeiten.\n• Benchmarking: Einordnung Ihres Status im Vergleich zu anderen Instituten ähnlicher Größe und Komplexität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welchen ROI können wir von einer professionellen BCBS-239 Gap-Analyse und Zielbild-Entwicklung erwarten und wie zahlt sich die Investition konkret aus?",
        answer: "Die Investition in eine professionelle BCBS-239 Gap-Analyse und Zielbild-Entwicklung erzielt einen quantifizierbaren ROI durch signifikante Kosten- und Risikoreduktion sowie strategische Wertsteigerungen. Basierend auf unserer Erfahrung mit zahlreichen Implementierungsprojekten lassen sich konkrete wirtschaftliche Vorteile nachweisen.\n\n💰 Quantifizierbare Kosteneinsparungen:\n• Reduktion der Implementierungskosten: Projekte mit strukturierter Gap-Analyse und Zielbild verzeichnen durchschnittlich 25-40% geringere Gesamtkosten durch vermiedene Fehlentwicklungen und effizientere Ressourcenallokation.\n• Verkürzte Projektlaufzeiten: Die durchschnittliche Implementierungszeit verkürzt sich um 30%, da Rework-Schleifen vermieden und Abhängigkeiten frühzeitig erkannt werden.\n• Optimierung der IT-Investitionen: Präzise Identifikation notwendiger Systemanpassungen verhindert kostspielige Überspezifikationen oder unzureichende Lösungen.\n• Reduzierte Betriebskosten: Effizienzsteigerung durch optimierte Prozesse und Automatisierung führt zu nachhaltigen Einsparungen im laufenden Betrieb von 15-20%.\n\n🛡️ Risikominimierung mit finanziellem Impact:\n• Vermeidung regulatorischer Strafen: Proaktive, nachweisbare Compliance-Bemühungen reduzieren das Risiko aufsichtsrechtlicher Sanktionen (die in Millionenhöhe liegen können).\n• Reputation Protection: Schutz vor Reputationsschäden durch Compliance-Versäumnisse, die Aktienkurse und Kundenvertrauen beeinträchtigen können.\n• Datensicherheit: Verbesserte Datenprozesse reduzieren das Risiko von Datenschutzverletzungen und damit verbundenen finanziellen und rechtlichen Konsequenzen.\n• Prüfungssicherheit: Reduzierte Findings in internen und externen Audits durch professionelle Compliance-Implementierung.\n\n🚀 Strategische Wertsteigerungen:\n• Verbesserte Entscheidungsgrundlagen: Höhere Datenqualität führt zu fundierteren Risikoentscheidungen und optimierter Kapitalallokation.\n• Wettbewerbsvorteile: Effiziente Risikodatenprozesse ermöglichen schnellere Marktreaktionen und innovativere Produkte.\n• Skalierbarkeit: Zukunftssichere Architektur reduziert Kosten für zukünftige Anpassungen an neue regulatorische oder geschäftliche Anforderungen.\n• Digitalisierungskatalysator: Die implementierten Data Governance Strukturen bilden das Fundament für weitergehende Digitalisierungsinitiativen."
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
