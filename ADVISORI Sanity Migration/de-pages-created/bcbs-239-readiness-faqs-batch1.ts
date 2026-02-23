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
    console.log('Updating BCBS-239 Readiness page with Executive FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-readiness" not found')
    }
    
    // Create new Executive FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein umfassendes BCBS-239 Readiness Assessment für Finanzinstitute so geschäftskritisch und wie unterstützt uns ADVISORI dabei?",
        answer: "Die BCBS-239 Regulierung stellt nicht nur technische Anforderungen an Ihr Risikodatenmanagement, sondern transformiert fundamental die Art und Weise, wie Ihr Institut kritische Risikoentscheidungen trifft und steuert. Ein systematisches Readiness Assessment ist der Schlüssel zur erfolgreichen Compliance und liefert gleichzeitig strategische Vorteile, die weit über die bloße Regulierungserfüllung hinausgehen.\n\n🔍 Strategische Bedeutung eines BCBS-239 Readiness Assessments:\n• Fundamentale Ausgangsbasis: Eine präzise Standortbestimmung verhindert kostspielige Fehlentwicklungen und schafft Klarheit über Prioritäten und Ressourcenbedarf.\n• Risikominimierung: Frühzeitige Identifikation kritischer Compliance-Lücken ermöglicht proaktives Management regulatorischer Risiken und verhindert potenzielle Sanktionen.\n• Ressourcenoptimierung: Eine systematische Gap-Analyse ermöglicht die präzise Allokation von Budget und Ressourcen auf die kritischsten Handlungsfelder.\n• Change-Management-Vorbereitung: Die Identifikation notwendiger organisatorischer Veränderungen bereitet den Weg für nachhaltige kulturelle Transformation im Risikodatenmanagement.\n\n💼 Der ADVISORI-Ansatz zum BCBS-239 Readiness Assessment:\n• Holistische Perspektive: Wir betrachten nicht nur isolierte technische Systeme, sondern die gesamte Wertschöpfungskette Ihrer Risikodaten – von der Quelldatenerfassung bis zur Vorstandsberichterstattung.\n• Regulatorische Tiefenexpertise: Unsere Spezialisten verfügen über umfassende Erfahrung mit den Erwartungen der Aufsichtsbehörden und den 14 BCBS-239 Prinzipien und ihrer praktischen Interpretation.\n• Benchmark-Orientierung: Wir vergleichen Ihren Reifegrad mit Best Practices aus erfolgreichen Implementierungen und Industriestandards.\n• Praxisorientierte Roadmap: Das Ergebnis unseres Assessments ist kein theoretisches Dokument, sondern ein pragmatischer, priorisierter Implementierungsplan mit konkreten Handlungsempfehlungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den ROI eines BCBS-239 Readiness Assessments und welche nachhaltigen Wettbewerbsvorteile ergeben sich daraus?",
        answer: "Ein BCBS-239 Readiness Assessment ist weit mehr als ein regulatorisches Pflichtprogramm – es ist eine strategische Investition, die erhebliche quantifizierbare Vorteile und Kosteneinsparungen generiert. Unsere Erfahrung zeigt, dass Finanzinstitute, die in eine gründliche Readiness-Bewertung investieren, nicht nur effizienter compliant werden, sondern auch signifikante Geschäftsvorteile realisieren.\n\n💰 Quantifizierbarer ROI eines strukturierten Readiness Assessments:\n• Implementierungskostenreduktion: Instituten ohne strukturiertes Assessment entstehen durchschnittlich 30-45% höhere Gesamtimplementierungskosten durch nachträgliche Anpassungen, Fehlallokation von Ressourcen und ineffiziente Priorisierung.\n• Verkürzte Projektlaufzeiten: Eine klare Roadmap basierend auf fundierter Gap-Analyse kann die Implementierungszeit um 20-30% reduzieren und beschleunigt den Weg zur Compliance.\n• Vermeidung von Strafzahlungen: Die frühzeitige Identifikation kritischer Compliance-Lücken minimiert das Risiko regulatorischer Sanktionen, die leicht in die Millionen gehen können.\n• Reduzierte Kosten für manuelle Prozesse: Die Identifikation von Automatisierungspotenzialen im Rahmen des Assessments kann den manuellen Aufwand in der Risikodatenaggregation um bis zu 40% senken.\n\n🚀 Strategische Wettbewerbsvorteile über die Compliance hinaus:\n• Präzisere Risikosteuerung: Verbesserte Datenqualität und Aggregationsfähigkeiten führen zu genaueren Risikoanalysen und fundierteren strategischen Entscheidungen.\n• Agilitätssteigerung: Die Optimierung der Risikodatenarchitektur verbessert die Fähigkeit, schnell auf veränderte Marktbedingungen zu reagieren und neue regulatorische Anforderungen zu integrieren.\n• Stärkeres Stakeholder-Vertrauen: Nachweisbare Fortschritte in der BCBS-239 Compliance stärken das Vertrauen von Aufsichtsbehörden, Investoren und Rating-Agenturen.\n• Digitale Transformation: Die im Assessment identifizierten Daten- und Prozessoptimierungen bilden eine solide Grundlage für weitergehende Digitalisierungsinitiativen im Risikomanagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche kritischen Gap-Bereiche identifiziert ADVISORI typischerweise in einem BCBS-239 Readiness Assessment und wie werden diese priorisiert?",
        answer: "Unsere langjährige Erfahrung mit BCBS-239 Assessments bei führenden Finanzinstituten hat wiederkehrende Muster von Compliance-Lücken aufgezeigt. Diese Erkenntnisse ermöglichen uns, kritische Handlungsfelder zielgerichtet zu identifizieren und eine wirkungsvolle Priorisierung vorzunehmen, die sowohl regulatorische Anforderungen als auch betriebswirtschaftliche Realitäten berücksichtigt.\n\n🧩 Typische kritische Gap-Bereiche in BCBS-239 Assessments:\n• Datengovernance-Framework: Unzureichende Definition von Dateneigentümerschaft, Verantwortlichkeiten und Qualitätsstandards für Risikodaten über den gesamten Lebenszyklus.\n• Datenlinienverfolgung (Data Lineage): Mangelnde Transparenz über den vollständigen Weg der Risikodaten von der Quelle bis zur Berichtsebene, insbesondere bei manuellen Prozessschritten und komplexen Transformationen.\n• Manuelle Prozessbrüche: Übermäßiger Einsatz von manuellen Workarounds, Tabellenkalkulationen und isolierten Datensilos in kritischen Risikodatenprozessen.\n• IT-Architektur-Fragmentierung: Historisch gewachsene, heterogene Systemlandschaften ohne integrierten Ansatz für die Risikodatenaggregation.\n• Datenqualitätskontrollen: Fehlende systematische Mechanismen zur Messung, Überwachung und Verbesserung der Risikodatenqualität.\n\n📊 ADVISORIs methodischer Ansatz zur Gap-Priorisierung:\n• Regulatorisches Risiko: Bewertung der Compliance-Lücke hinsichtlich ihrer Kritikalität aus aufsichtsrechtlicher Perspektive und potentieller regulatorischer Konsequenzen.\n• Implementierungskomplexität: Analyse des erforderlichen Ressourcenaufwands, der technischen Komplexität und der organisatorischen Herausforderungen bei der Schließung spezifischer Gaps.\n• Business Impact: Beurteilung der Auswirkungen auf kritische Geschäftsprozesse, Risikomanagement-Entscheidungen und strategische Initiativen.\n• Quick Wins vs. strukturelle Maßnahmen: Identifikation schnell umsetzbarer Verbesserungen mit hoher Wirkung und Unterscheidung von fundamentalen, längerfristigen Transformationsbedarfen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gestaltet ADVISORI die Roadmap nach einem BCBS-239 Readiness Assessment und welche Change-Management-Aspekte sind entscheidend für den Implementierungserfolg?",
        answer: "Ein BCBS-239 Readiness Assessment mündet in eine strategische Roadmap, die weit mehr ist als eine bloße Auflistung technischer Maßnahmen. Für nachhaltigen Implementierungserfolg ist entscheidend, dass diese Roadmap sowohl technologische als auch organisatorische und kulturelle Veränderungen orchestriert und dabei die spezifische Ausgangssituation Ihres Instituts berücksichtigt.\n\n🗺️ Elemente einer effektiven BCBS-239 Implementierungs-Roadmap:\n• Maßnahmenpriorisierung mit klarer Sequenzierung: Wir strukturieren Maßnahmen in logische Abhängigkeiten und zeitliche Phasen – von Quick Wins über mittelfristige Optimierungen bis zu fundamentalen strukturellen Veränderungen.\n• Ressourcen- und Budgetplanung: Detaillierte Abschätzung des erforderlichen Investitionsbedarfs, der personellen Ressourcen und spezifischer Kompetenzen für jede Implementierungsphase.\n• Governance-Struktur: Definition klarer Verantwortlichkeiten, Entscheidungsprozesse und Eskalationswege für die BCBS-239 Implementierung.\n• Metriken und Erfolgsindikatoren: Entwicklung messbarer KPIs zur kontinuierlichen Überwachung des Implementierungsfortschritts und der Compliance-Verbesserung.\n\n🔄 Kritische Change-Management-Faktoren für erfolgreiche BCBS-239 Implementierung:\n• Executive Sponsorship: Verankerung der BCBS-239 Compliance als strategische Priorität auf höchster Führungsebene mit klarem C-Level-Commitment.\n• Cross-funktionale Zusammenarbeit: Etablierung wirksamer Kooperationsmodelle zwischen Risikomanagement, IT, Fachbereichen und Compliance, um Silodenken zu überwinden.\n• Kompetenzaufbau: Systematische Schulungs- und Awareness-Programme, um das Verständnis für die Prinzipien und Anforderungen der BCBS-239 in der Organisation zu verankern.\n• Kulturwandel im Risikodatenmanagement: Förderung einer Kultur der Datenqualität und -verantwortung über alle Hierarchieebenen hinweg, von der Datenerfassung bis zur Vorstandsebene."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Executive FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Executive FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
