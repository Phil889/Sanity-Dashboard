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
    console.log('Updating Basel III Readiness page with FAQs batch 5 (German)...')
    
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
        question: "Wie können wir die Basel III-Readiness-Bewertung nutzen, um unsere Wettbewerbspositionierung gegenüber anderen Finanzinstituten zu stärken?",
        answer: "Eine strategisch konzipierte Basel III-Readiness-Bewertung bietet weit mehr als nur eine Vorbereitung auf regulatorische Compliance – sie kann als kraftvoller Hebel zur Differenzierung und Stärkung Ihrer Wettbewerbsposition im Markt dienen. Durch die systematische Nutzung der gewonnenen Erkenntnisse können Sie regulatorische Anforderungen in strategische Wettbewerbsvorteile transformieren.\n\n🏆 Strategische Differenzierungsmöglichkeiten durch Basel III-Readiness:\n• Überlegene Kapitaleffizienz: Entwicklung fortschrittlicher Kapitalallokationsmodelle und RWA-Optimierungsstrategien, die eine höhere Eigenkapitalrendite als Wettbewerber ermöglichen und Spielraum für kompetitivere Preisgestaltung schaffen.\n• Beschleunigte Time-to-Market: Implementierung agiler Compliance-Prozesse, die schnellere Produkteinführungen und Marktreaktionen ermöglichen als Wettbewerber mit schwerfälligeren regulatorischen Prozessen.\n• Risikoadjustierte Kundenansprache: Nutzung granularer RWA- und Kapitalanalysen für eine präzisere Kundensegmentierung und maßgeschneiderte Wertangebote, die profitablere Kundenbeziehungen schaffen.\n• Datengetriebene Geschäftssteuerung: Transformation regulatorischer Datenanforderungen in strategische Geschäftseinblicke, die fundierte Entscheidungen und eine proaktive statt reaktive Marktpositionierung ermöglichen.\n\n💼 Konkrete Wettbewerbsvorteile durch ADVISORIs Ansatz:\n• Strategische Roadmap mit Differenzierungsfokus: Entwicklung einer Implementierungsroadmap, die strategische Wettbewerbsvorteile und Quick Wins priorisiert, statt reiner Compliance-Fokussierung.\n• Benchmarking und Best Practices: Einbringung umfassender Benchmark-Daten und Best Practices aus erfolgreichen Basel III-Implementierungen, die Ihnen einen Vorsprung gegenüber Wettbewerbern ermöglichen.\n• Integrierte Geschäftsmodell-Optimierung: Systematische Analyse der Auswirkungen von Basel III auf verschiedene Geschäftsfelder und Entwicklung optimierter Geschäftsmodelle mit höherer Kapitaleffizienz.\n• Kapazitätsaufbau für kontinuierliche Optimierung: Etablierung der organisatorischen Fähigkeiten zur kontinuierlichen Optimierung und Anpassung Ihrer regulatorischen Prozesse, um langfristige Wettbewerbsvorteile zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kritischen Erfolgsfaktoren sind bei der Durchführung einer Basel III-Readiness-Bewertung zu berücksichtigen?",
        answer: "Der Erfolg einer Basel III-Readiness-Bewertung wird durch eine Reihe kritischer Faktoren bestimmt, die weit über technische und methodische Aspekte hinausgehen. ADVISORIs Erfahrung aus zahlreichen erfolgreichen Projekten zeigt, dass eine systematische Berücksichtigung dieser Erfolgsfaktoren den Unterschied zwischen einer oberflächlichen Compliance-Übung und einer wertschöpfenden strategischen Initiative ausmacht.\n\n🔑 Fundamentale Erfolgsfaktoren für die Basel III-Readiness-Bewertung:\n• Executive Sponsorship und Commitment: Aktive Unterstützung und Einbindung der Führungsebene ist essentiell, um die notwendigen Ressourcen zu sichern, Priorisierungskonflikte zu lösen und die strategische Ausrichtung zu gewährleisten.\n• Cross-funktionales Engagement: Effektive Einbindung aller relevanten Funktionsbereiche (Risikomanagement, Treasury, Finanzen, IT, Business) für eine ganzheitliche Betrachtung der Auswirkungen und Lösungsansätze.\n• Datengetriebener Ansatz: Basierung der Analyse auf belastbaren Daten statt Annahmen, mit systematischer Quantifizierung von Impacts, Kosten und Nutzen der identifizierten Maßnahmen.\n• Balancierte Perspektive: Ausgewogene Berücksichtigung regulatorischer, technischer, prozessualer und organisatorischer Dimensionen statt Überbetonung einzelner Aspekte.\n\n🛠️ Methodische Erfolgsfaktoren für nachhaltige Ergebnisse:\n• Konkrete Scope-Definition: Klare und präzise Definition des Bewertungsumfangs mit expliziter Abgrenzung von Out-of-Scope-Elementen, um Fokus und Effizienz zu gewährleisten.\n• Pragmatischer Detaillierungsgrad: Angemessenes Gleichgewicht zwischen Detailtiefe und Breitenwirkung, mit tiefergehenden Analysen in kritischen Bereichen und pragmatischeren Bewertungen in anderen.\n• Iteratives Vorgehen: Implementierung eines iterativen Ansatzes mit regelmäßigen Zwischenergebnissen und Anpassungsmöglichkeiten statt eines starren sequentiellen Prozesses.\n• Implementierungsorientierung: Konsequente Ausrichtung der Bewertung auf praktische Umsetzbarkeit mit konkreten, actionable Empfehlungen statt theoretischer Analysen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Ergebnisse der Basel III-Readiness-Bewertung optimal an verschiedene Stakeholder kommunizieren?",
        answer: "Die effektive Kommunikation der Ergebnisse einer Basel III-Readiness-Bewertung an unterschiedliche Stakeholdergruppen ist entscheidend für die erfolgreiche Umsetzung der daraus resultierenden Maßnahmen. Eine differenzierte, zielgruppengerechte Kommunikationsstrategie stellt sicher, dass alle relevanten Entscheidungsträger und Umsetzer die für sie relevanten Erkenntnisse verstehen und entsprechend handeln können.\n\n👥 Stakeholder-spezifische Kommunikationsansätze:\n• Vorstand und Aufsichtsrat: Fokussierung auf strategische Implikationen, Kapitalauswirkungen, Wettbewerbsvorteile und Top-Level-Risiken mit klaren Executive Summaries und Dashboard-Visualisierungen.\n• Bereichsleiter und mittleres Management: Betonung der operativen Implikationen, Ressourcenbedarfe, Veränderungen in Prozessen und Systemen sowie konkreter Implementierungsschritte in ihren Verantwortungsbereichen.\n• Fachexperten und Implementierungsteams: Detaillierte Darstellung technischer Anforderungen, methodischer Ansätze und spezifischer Umsetzungsschritte mit konkreten Handlungsanleitungen.\n• Aufsichtsbehörden und externe Stakeholder: Fokussierung auf Compliance-Strategie, Implementierungsroadmap und Governance-Mechanismen zur Sicherstellung nachhaltiger Compliance.\n\n📊 Effektive Kommunikationsinstrumente und -formate:\n• Mehrdimensionale Ergebnisaufbereitung: Entwicklung verschiedener Berichtsformate mit unterschiedlichen Detaillierungsgraden für verschiedene Stakeholdergruppen und Verwendungszwecke.\n• Visuelle Impact-Darstellung: Nutzung von Heat Maps, Dashboards und visuellen Scorecards zur intuitiven Darstellung von Lücken, Prioritäten und Fortschritten.\n• Interaktive Präsentationsformate: Einsatz interaktiver Formate wie Decision Workshops und Szenario-Simulationen, um Verständnis zu vertiefen und Entscheidungsfindung zu unterstützen.\n• Kontinuierlicher Kommunikationsansatz: Etablierung eines regelmäßigen Kommunikationsflusses mit Updates, Fortschrittsberichten und Anpassungen statt einmaliger Ergebnispräsentation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer maßgeschneiderten Basel III-Implementierungsstrategie basierend auf den Readiness-Ergebnissen?",
        answer: "Die Entwicklung einer maßgeschneiderten Basel III-Implementierungsstrategie auf Basis der Readiness-Ergebnisse ist ein kritischer Schritt, um den maximalen Wert aus der Bewertung zu ziehen. ADVISORI unterstützt Sie mit einem systematischen Ansatz, der regulatorische Anforderungen mit Ihren spezifischen Geschäftsprioritäten und -bedingungen in Einklang bringt und eine effiziente, wertschöpfende Implementation ermöglicht.\n\n🧩 Kernelemente unseres Strategieentwicklungsansatzes:\n• Gap-Priorisierungs-Framework: Systematische Bewertung und Priorisierung identifizierter Lücken nach Faktoren wie regulatorische Kritikalität, Implementierungskomplexität, Ressourcenaufwand und geschäftlicher Impact.\n• Szenariobasierte Optionsbewertung: Entwicklung und Bewertung verschiedener Implementierungsszenarien mit unterschiedlichen Schwerpunkten (z.B. Geschwindigkeit, Kosteneffizienz, strategischer Mehrwert) und transparenter Trade-off-Analyse.\n• Capability-basierte Implementierungsplanung: Analyse der erforderlichen Kapazitäten und Kompetenzen für die Umsetzung und Entwicklung einer integrierten Ressourcen- und Capability-Building-Strategie.\n• Integrierter Business Case: Erstellung eines umfassenden Business Case mit quantifizierten Kosten, Nutzen und ROI der Implementierungsstrategie als Grundlage für Investitionsentscheidungen.\n\n🗺️ Elemente einer umfassenden Implementierungsroadmap:\n• Phasierte Implementierungswellen: Strukturierung der Implementation in logische, aufeinander aufbauende Phasen mit klaren Meilensteinen, Abhängigkeiten und Entscheidungspunkten.\n• Integriertes Delivery-Modell: Entwicklung eines optimalen Mix aus internen und externen Ressourcen mit klaren Rollen, Verantwortlichkeiten und Governance-Strukturen.\n• Agiler Implementierungsansatz: Integration agiler Methoden für flexible Anpassung an sich ändernde Rahmenbedingungen, frühe Wertrealisierung und kontinuierliches Feedback.\n• Synchronisierung mit anderen Initiativen: Harmonisierung der Basel III-Implementation mit anderen strategischen Initiativen und Transformationsprogrammen für maximale Synergien und Effizienz."
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
    console.log('✅ FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
