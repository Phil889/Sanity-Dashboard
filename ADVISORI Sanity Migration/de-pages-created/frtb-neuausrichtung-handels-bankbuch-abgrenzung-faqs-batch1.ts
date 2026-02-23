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
    console.log('Updating FRTB Neuausrichtung Handels-Bankbuch-Abgrenzung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-neuausrichtung-handels-bankbuch-abgrenzung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-neuausrichtung-handels-bankbuch-abgrenzung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind die verschärften FRTB-Abgrenzungsregeln zwischen Handels- und Bankbuch ein strategisches Thema für Finanzinstitute und wie unterstützt ADVISORI bei der optimalen Neuausrichtung?",
        answer: "Die FRTB-Abgrenzungsregeln stellen mehr als nur einen technischen Aspekt der Regulierung dar – sie sind ein fundamentaler Paradigmenwechsel mit tiefgreifenden strategischen Implikationen für Ihr gesamtes Geschäftsmodell. Die Neuausrichtung Ihrer Handels- und Bankbuchabgrenzung beeinflusst direkt Ihre Kapitalkosten, Handelsstrategien, Produktangebot und letztlich Ihre Wettbewerbsfähigkeit im Markt.\n\n🔍 Strategische Dimensionen der FRTB-Abgrenzungsregeln:\n• Kapitalallokation und -effizienz: Die verschärften Abgrenzungskriterien können zu erheblichen Kapitalverschiebungen zwischen Handels- und Bankbuch führen – mit potenziellen Kapitalaufschlägen von 30-60% bei suboptimaler Strukturierung.\n• Geschäftsmodell-Transformation: Die strikte Auslegung des Handelsbuchs zwingt Institute, ihre Geschäftsaktivitäten neu zu bewerten und strategisch zu positionieren, um Kapitalineffizienzen zu vermeiden.\n• Produktstrategie und Innovation: Die Abgrenzungsregeln beeinflussen direkt, welche Produkte unter welchen Bedingungen angeboten werden können und welche Kapitalkosten damit verbunden sind.\n• Wettbewerbsdynamik: Institute, die ihre Abgrenzung strategisch optimieren, können signifikante Kostenvorteile gegenüber Wettbewerbern erzielen und dadurch Marktanteile gewinnen.\n\n🛡️ ADVISORI's differenzierter Ansatz zur strategischen Neuausrichtung:\n• Business-Impact-zentrierte Analyse: Wir betrachten nicht nur die regulatorischen Anforderungen, sondern analysieren umfassend die Auswirkungen verschiedener Abgrenzungsoptionen auf Ihre Geschäftsstrategie und Profitabilität.\n• Strategische Simulationsmodelle: Unsere proprietären Modelle ermöglichen eine präzise Quantifizierung der Kapitalauswirkungen verschiedener Abgrenzungsszenarien und identifizieren optimale Positionierungen.\n• Ganzheitliche Transformationsbegleitung: Wir unterstützen Sie nicht nur bei der technischen Implementation, sondern begleiten die gesamte Transformation – von der Strategie über Prozesse und Systeme bis hin zur Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterscheiden sich die FRTB-Abgrenzungskriterien von bisherigen Regeln und welche Positionen sind besonders von Reklassifizierungen betroffen?",
        answer: "Die FRTB-Abgrenzungskriterien markieren einen grundlegenden Wandel in der regulatorischen Philosophie – von einer primär absichtsbasierten hin zu einer objektiveren, evidenzbasierten Klassifikation mit strengen Überwachungsmechanismen. Diese Neuausrichtung hat weitreichende Implikationen für nahezu alle Handelsbuchinstrumente und erfordert eine tiefgreifende Neubewertung Ihrer Portfoliostruktur.\n\n📋 Fundamentale Änderungen in den Abgrenzungskriterien:\n• Präsumtionsbasierter Ansatz: Die neuen Regeln etablieren klare Präsumtionen für die Zuordnung von Instrumenten zum Handels- oder Bankbuch, was den Ermessensspielraum der Institute erheblich einschränkt.\n• Strikte Definition der Handelbarkeit: Instrumente müssen nun spezifische, objektive Kriterien zur Handelbarkeit erfüllen, um dem Handelsbuch zugeordnet werden zu können.\n• Restriktive Transferregeln: Transfers zwischen Handels- und Bankbuch werden stark eingeschränkt und unterliegen strenger aufsichtlicher Kontrolle, wobei unangemessene Transfers mit Kapitalaufschlägen bestraft werden können.\n• Erweiterte Dokumentationsanforderungen: Institute müssen umfassende Policies und Prozesse zur Buchzuordnung etablieren und dokumentieren, einschließlich detaillierter Begründungen für die Klassifikation von Instrumenten.\n\n🔄 Besonders betroffene Positionen und Instrumente:\n• Illiquide und exotische Derivate: Instrumente mit eingeschränkter Marktliquidität oder komplexen Bewertungsmodellen werden wahrscheinlich vom Handelsbuch ins Bankbuch transferiert werden müssen.\n• Strategische Hedges: Langfristige Absicherungspositionen, die bisher im Handelsbuch gehalten wurden, müssen unter FRTB neu bewertet und potenziell reklassifiziert werden.\n• Strukturierte Produkte und hybride Instrumente: Komplexe Produkte mit eingebetteten Derivaten erfordern eine detaillierte Analyse und könnten je nach ihren spezifischen Eigenschaften eine Reklassifizierung erfordern.\n• Credit Valuation Adjustments (CVA): Die Behandlung von CVA-Hedges unter FRTB erfordert besondere Aufmerksamkeit und könnte zu signifikanten Kapitalauswirkungen führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Methoden verwendet ADVISORI zur Quantifizierung der Kapitalauswirkungen verschiedener Abgrenzungsstrategien und wie optimieren Sie die Kapitaleffizienz?",
        answer: "Die präzise Quantifizierung der Kapitalauswirkungen verschiedener Abgrenzungsstrategien erfordert einen hochgradig spezialisierten, multidimensionalen Ansatz, der weit über vereinfachte Schätzungen hinausgeht. ADVISORI hat eine umfassende Methodik entwickelt, die tiefgreifende regulatorische Expertise mit fortschrittlichen quantitativen Modellen und praxiserprobten Optimierungsstrategien verbindet.\n\n📊 ADVISORI's fortschrittliche Quantifizierungsmethodik:\n• Instrument-Level-Simulation: Unsere Modelle analysieren die Kapitalanforderungen auf Ebene einzelner Instrumente unter Berücksichtigung aller relevanten FRTB-Parameter (Sensitivitäten, Risikofaktoren, Liquidity Horizons, etc.).\n• Multi-Methoden-Ansatz: Wir kombinieren verschiedene Berechnungsmethoden (Standardized Approach, Internal Models Approach, CVA-Kapital) für eine ganzheitliche Kapitalprojektion.\n• Kontrafaktische Analyse: Durch simultane Berechnung der Kapitalanforderungen für alternative Zuordnungsszenarien identifizieren wir präzise die Kapitalauswirkungen verschiedener Abgrenzungsstrategien.\n• Stresstest-Integration: Unsere Modelle berücksichtigen auch Kapitalauswirkungen unter Stressszenarien, um die Robustheit verschiedener Abgrenzungsstrategien zu bewerten.\n\n⚡ Strategische Hebel zur Kapitaloptimierung:\n• Trading Desk-Struktur: Optimierung der Trading Desk-Struktur unter Berücksichtigung der FRTB-Kriterien für die Desk-Anerkennung und P&L-Attribution.\n• Risikokonzentrations-Management: Strategische Reallokation von Risikopositionen zur Reduzierung von Kapitalanforderungen durch Diversifikationseffekte.\n• Produktmix-Optimierung: Analyse der Kapitaleffizienz verschiedener Produkte und Identifikation optimaler Produktkombinationen.\n• Netting-Set-Optimierung: Strategische Neuorganisation von Netting-Sets zur Maximierung regulatorischer Netting-Vorteile."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gestaltet ADVISORI den Implementierungsprozess für die neue Handels- und Bankbuchabgrenzung und welche Governance-Strukturen sind für die nachhaltige Compliance erforderlich?",
        answer: "Die erfolgreiche Implementierung einer FRTB-konformen Handels- und Bankbuchabgrenzung erfordert einen holistischen Transformationsansatz, der weit über technische Anpassungen hinausgeht und tiefgreifende organisatorische, prozessuale und governance-bezogene Veränderungen umfasst. ADVISORI begleitet Sie durch diesen komplexen Prozess mit einem strukturierten, praxiserprobten Vorgehen.\n\n🔄 ADVISORI's integrierter Implementierungsansatz:\n• Phasenbasierte Transformation: Wir strukturieren die Implementierung in klar definierte, manageable Phasen – von der initialen Gap-Analyse über die Konzeption und Pilotierung bis zur vollständigen Implementierung und kontinuierlichen Optimierung.\n• Cross-funktionale Orchestrierung: Unsere Implementierungsmethodik integriert alle relevanten Funktionen – Handel, Risikomanagement, Finance, IT, Compliance und Interne Revision – für ein kohärentes Vorgehen.\n• Change Management & Kommunikation: Wir begleiten den Transformationsprozess mit gezielten Change-Management-Maßnahmen, um die notwendige Akzeptanz und Verhaltensänderung in der Organisation zu fördern.\n• Agile Implementierungsstrategie: Flexible Anpassung der Implementierung an sich ändernde regulatorische Interpretationen und interne Rahmenbedingungen durch regelmäßige Review-Zyklen.\n\n🏛️ Robuste Governance-Strukturen für nachhaltige Compliance:\n• Mehrstufiges Kontrollsystem: Etablierung eines robusten Three-Lines-of-Defense-Modells mit klaren Rollen und Verantwortlichkeiten für die Handels-Bankbuch-Abgrenzung.\n• Dokumentierte Policies und Verfahren: Entwicklung umfassender Richtlinien und detaillierter Verfahrensdokumentationen, die alle Aspekte der Handels-Bankbuch-Abgrenzung präzise regeln.\n• Eskalations- und Entscheidungsprozesse: Implementation klar definierter Eskalationswege und Entscheidungsprozesse für Grenzfälle und außergewöhnliche Situationen.\n• Monitoring- und Reporting-Framework: Etablierung eines umfassenden Monitoring-Systems mit regelmäßigen Reports an relevante Stakeholder und Management-Gremien."
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
