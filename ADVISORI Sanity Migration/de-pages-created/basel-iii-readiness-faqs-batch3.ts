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
    console.log('Updating Basel III Readiness page with FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-readiness" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollten wir unsere internen Ressourcen und externe Beratungsunterstützung für eine Basel III-Readiness-Bewertung optimal strukturieren?",
        answer: "Die effektive Strukturierung von internen und externen Ressourcen ist ein kritischer Erfolgsfaktor für eine wertschöpfende Basel III-Readiness-Bewertung. Ein durchdachter Ressourcenmix maximiert den Wissenstransfer, stellt die Nachhaltigkeit der Ergebnisse sicher und optimiert das Kosten-Nutzen-Verhältnis des Projekts.\n\n🔄 Optimale Rollenverteilung zwischen internen Teams und externen Beratern:\n• Strategische Projektsteuerung: Etablierung eines gemischten Steering Committees aus C-Level-Vertretern und ADVISORI-Experten zur Sicherstellung der strategischen Ausrichtung und Executive-Sponsorship.\n• Kernteam-Konfiguration: Bildung eines interdisziplinären Kernteams mit internen Experten aus Risikomanagement, Treasury, IT und Business sowie ADVISORI-Spezialisten mit komplementären Kompetenzen.\n• Dedizierte Arbeitsstreams: Organisation der Readiness-Bewertung in thematische Arbeitsstreams (z.B. Kapital, Liquidität, Risikomanagement, Datenarchitektur), jeweils mit einer ausgewogenen Mischung aus internen und externen Ressourcen.\n• Wissenstransfer-Mechanismen: Implementation strukturierter Prozesse zur kontinuierlichen Wissensvermittlung von externen Beratern an interne Teams, um langfristige Expertise aufzubauen.\n\n📋 Konkrete Ressourcenplanung für die Readiness-Bewertung:\n• Interne Schlüsselrollen: Identifikation und frühzeitige Einbindung interner Schlüsselressourcen mit tiefem Verständnis der Geschäftsprozesse, Systemlandschaft und bestehenden Risikomanagement-Praktiken.\n• Externe Expertise: Strategischer Einsatz von ADVISORI-Spezialisten für methodische Expertise, regulatorisches Fachwissen, Best-Practice-Benchmarks und unabhängige Bewertung.\n• Agile Projektorganisation: Implementierung einer agilen Projektstruktur mit kurzen Iterationszyklen, regelmäßigen Checkpoints und flexibler Ressourcenanpassung basierend auf Zwischenergebnissen.\n• Nachhaltigkeitsfokus: Planung von Wissenstransfer und Dokumentation von Beginn an, um die langfristige Verankerung der Erkenntnisse im Institut sicherzustellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche typischen Herausforderungen und Fallstricke gilt es bei einer Basel III-Readiness-Bewertung zu vermeiden und wie unterstützt ADVISORI dabei?",
        answer: "Eine Basel III-Readiness-Bewertung birgt zahlreiche potenzielle Herausforderungen und Fallstricke, die den Wert und die Effektivität des Projekts erheblich beeinträchtigen können. ADVISORIs Erfahrung aus zahlreichen erfolgreichen Implementierungsprojekten ermöglicht die frühzeitige Identifikation und proaktive Vermeidung dieser typischen Problemfelder.\n\n⚠️ Kritische Fallstricke bei der Basel III-Readiness-Bewertung:\n• Isolierte Compliance-Perspektive: Beschränkung der Bewertung auf reine Compliance-Aspekte ohne Berücksichtigung der strategischen und geschäftlichen Implikationen führt zu unvollständigen Ergebnissen.\n• Technologie-Fokussierung: Übermäßige Konzentration auf technologische Lösungen ohne ausreichende Berücksichtigung von Prozessen, Governance und Change-Management-Aspekten.\n• Datenkomplexität unterschätzen: Unzureichende Bewertung der Datenqualitäts- und Datenverfügbarkeitsanforderungen, die für eine vollständige Basel III-Compliance erforderlich sind.\n• Silodenken: Isolierte Betrachtung einzelner Regulierungskomponenten ohne Berücksichtigung der Interdependenzen zwischen Kapital-, Liquiditäts- und Risikomanagementanforderungen.\n\n🛡️ ADVISORIs Ansatz zur Vermeidung kritischer Fallstricke:\n• Holistisches Assessment-Framework: Verwendung eines ganzheitlichen Bewertungsrahmens, der alle relevanten Dimensionen (regulatorisch, technisch, prozessual, organisatorisch) umfasst und deren Interdependenzen berücksichtigt.\n• Prioritätsbasierte Gap-Analyse: Differenzierte Bewertung identifizierter Lücken nach regulatorischer Kritikalität, Implementierungskomplexität und geschäftlichem Impact für eine effektive Priorisierung.\n• Transformationsorientierter Ansatz: Integration der Readiness-Bewertung in bestehende Transformationsinitiativen, um Synergien zu nutzen und Doppelarbeit zu vermeiden.\n• Change-Management von Beginn an: Frühzeitige Berücksichtigung organisatorischer und kultureller Aspekte, um Akzeptanz und nachhaltige Veränderung zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir den ROI unserer Basel III-Readiness-Bewertung maximieren und messbar machen?",
        answer: "Die Maximierung und Messung des Return on Investment (ROI) einer Basel III-Readiness-Bewertung erfordert einen strategischen Ansatz, der weit über die bloße Erfüllung regulatorischer Anforderungen hinausgeht. ADVISORI implementiert ein mehrdimensionales ROI-Framework, das sowohl quantitative als auch qualitative Wertbeiträge erfasst und messbar macht.\n\n📊 Mehrdimensionales ROI-Framework für die Basel III-Readiness:\n• Kosteneffizienz der Implementierung: Quantifizierung der Kosteneinsparungen durch frühzeitige Gap-Identifikation, priorisierte Maßnahmenplanung und Vermeidung von Doppelarbeit oder fehlgeleiteten Investitionen.\n• Kapitaleffizienzsteigerung: Monetarisierung der Vorteile durch optimierte Kapitalallokation, RWA-Optimierung und verbesserte Eigenkapitalrendite als direkte Folge der strategischen Implementierung.\n• Betriebskostensenkung: Messung der operativen Kosteneinsparungen durch effizientere Prozesse, Automatisierung und verbesserte Datenqualität im Risiko- und Regulatorik-Umfeld.\n• Vermiedene Kosten: Quantifizierung potenzieller Strafzahlungen, Kapitalzuschläge oder Reputationsschäden, die durch proaktive Compliance-Maßnahmen vermieden werden.\n\n🔍 Konkrete Ansätze zur ROI-Maximierung:\n• Strategische Implementierungssequenzierung: Entwicklung einer Implementierungsroadmap, die Quick Wins und hohe ROI-Maßnahmen priorisiert, um frühzeitige Wertbeiträge zu generieren.\n• Synergieoptimierung: Systematische Identifikation und Nutzung von Synergien mit anderen strategischen Initiativen wie Digitalisierung, Prozessoptimierung oder Datenmanagement.\n• Technologiehebel: Strategischer Einsatz von Technologielösungen, die sowohl regulatorische Anforderungen erfüllen als auch operative Effizienz steigern und neue Geschäftsmöglichkeiten erschließen.\n• Capability Building: Aufbau interner Expertise und Kapazitäten während der Readiness-Bewertung, um langfristige Abhängigkeiten von externen Beratern zu reduzieren und nachhaltige Wertschöpfung zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollte der ideale Zeitplan für eine Basel III-Readiness-Bewertung aussehen und welche Faktoren beeinflussen die Projektdauer?",
        answer: "Die Planung eines optimalen Zeitplans für eine Basel III-Readiness-Bewertung erfordert eine sorgfältige Abwägung zwischen Gründlichkeit, Effizienz und strategischem Timing. ADVISORI entwickelt maßgeschneiderte Zeitpläne, die sowohl die spezifischen Gegebenheiten Ihres Instituts als auch regulatorische Fristen und strategische Entscheidungszyklen berücksichtigen.\n\n⏱️ Typische Phasen und Zeitrahmen einer umfassenden Readiness-Bewertung:\n• Vorbereitungs- und Scoping-Phase (2-3 Wochen): Definition des Projektumfangs, Zusammenstellung des Projektteams, Festlegung der Methodik und Sammlung initialer Dokumentation.\n• Datenerhebung und Ist-Analyse (4-6 Wochen): Umfassende Bestandsaufnahme der aktuellen Systeme, Prozesse und Governance-Strukturen durch Interviews, Dokumentenanalyse und Systemreviews.\n• Gap-Analyse und Impact-Assessment (3-4 Wochen): Detaillierte Bewertung der Abweichungen zu Basel III-Anforderungen und Quantifizierung der Auswirkungen auf Kapital, Liquidität und Geschäftsmodell.\n• Roadmap-Entwicklung und Priorisierung (3-4 Wochen): Erarbeitung einer detaillierten Implementierungsroadmap mit priorisierten Maßnahmen, Ressourcenplanung und Kostenschätzung.\n• Finalisierung und Management-Präsentation (2 Wochen): Konsolidierung der Ergebnisse, Entwicklung von Executive Summaries und Vorbereitung der Management-Präsentation.\n\n⚙️ Einflussfaktoren auf die Projektdauer:\n• Komplexität und Größe des Instituts: Die Komplexität der Organisationsstruktur, Geschäftsmodelle und Systemlandschaft hat direkten Einfluss auf den Umfang der Analyse.\n• Datenverfügbarkeit und -qualität: Die Verfügbarkeit und Qualität relevanter Daten und Dokumentation kann die Datenerhebungs- und Analysephase erheblich beeinflussen.\n• Interne Ressourcenverfügbarkeit: Die Kapazität und Verfügbarkeit interner Schlüsselressourcen für Interviews, Workshops und Reviews wirkt sich direkt auf den Zeitplan aus.\n• Entscheidungsprozesse: Die Effizienz interner Entscheidungs- und Genehmigungsprozesse beeinflusst insbesondere die Roadmap-Entwicklung und Finalisierungsphase."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
