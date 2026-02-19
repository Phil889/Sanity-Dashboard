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
    console.log('Updating FRTB Readiness page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine FRTB-Readiness-Bewertung entscheidend für den langfristigen Erfolg unseres Instituts und wie unterscheidet sich der ADVISORI-Ansatz?",
        answer: "Eine FRTB-Readiness-Bewertung ist weit mehr als eine regulatorische Pflichtübung – sie ist ein strategisches Instrument, das Ihre Bank optimal auf eine der tiefgreifendsten Veränderungen im Marktrisikomanagement vorbereitet. Die Fundamental Review of the Trading Book (FRTB) stellt nicht nur technische Anforderungen, sondern erfordert eine grundlegende Neuausrichtung Ihrer Handelsaktivitäten, Risikomodelle und IT-Infrastruktur.\n\n🔍 Strategische Bedeutung einer umfassenden FRTB-Readiness-Bewertung:\n• Kapitaloptimierung: Eine präzise Readiness-Bewertung identifiziert frühzeitig Optimierungspotenziale und kann Ihre Kapitalanforderungen um 15-25% gegenüber einer reaktiven Implementierung reduzieren.\n• Wettbewerbsvorteil: Institute, die FRTB-Anforderungen proaktiv und strategisch angehen, sichern sich signifikante Vorteile in Bezug auf Handelsflexibilität und Kapitaleffizienz.\n• Kosten- und Ressourceneffizienz: Ein strukturierter, auf Ihre spezifischen Gegebenheiten zugeschnittener Implementierungsfahrplan minimiert Fehlentwicklungen und kostspielige Nachbesserungen.\n• Strategische Entscheidungsgrundlage: Die Bewertung liefert eine fundierte Basis für weitreichende Entscheidungen wie die Wahl zwischen Standardansatz und Internal Models Approach oder die Neuausrichtung des Handelsbuchs.\n\n🛡️ Der differenzierte ADVISORI-Ansatz:\n• Ganzheitliche Perspektive: Wir betrachten nicht nur regulatorische Lücken, sondern analysieren die Auswirkungen auf Ihre Geschäftsstrategie, Wettbewerbsposition und Profitabilität.\n• Quantitative Präzision: Unsere proprietären Simulationsmodelle quantifizieren die Kapitalauswirkungen verschiedener Implementierungsoptionen mit hoher Genauigkeit.\n• Praxisorientierte Umsetzbarkeit: Unsere Empfehlungen sind nicht nur theoretisch fundiert, sondern auch praktisch umsetzbar und berücksichtigen Ihre spezifischen organisatorischen Rahmenbedingungen.\n• Langfristige Perspektive: Wir gestalten den Implementierungsfahrplan so, dass er nicht nur aktuelle FRTB-Anforderungen erfüllt, sondern auch zukünftige regulatorische Entwicklungen antizipiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kritischen Elemente umfasst eine umfassende FRTB-Readiness-Bewertung und wie quantifiziert ADVISORI die potenziellen Kapitalauswirkungen?",
        answer: "Eine wirklich effektive FRTB-Readiness-Bewertung geht weit über eine oberflächliche Checklisten-Prüfung hinaus – sie durchleuchtet systematisch alle Dimensionen Ihrer Organisation, die von den tiefgreifenden FRTB-Veränderungen betroffen sind. Dies ermöglicht nicht nur ein präzises Verständnis der aktuellen Lücken, sondern auch eine exakte Quantifizierung der Kapitalauswirkungen und die Identifikation strategischer Handlungsoptionen.\n\n📊 Kritische Dimensionen einer umfassenden FRTB-Readiness-Bewertung:\n• Handelsbuch-Architektur und -Klassifizierung: Detaillierte Analyse der Handelsbuchstruktur unter Berücksichtigung der verschärften FRTB-Abgrenzungskriterien und Identifikation von Positionen, die potenziell reklassifiziert werden müssen.\n• Risikometriken und Modellierungsansätze: Bewertung der aktuellen Risikomodelle und -metriken im Hinblick auf die neuen Anforderungen (Expected Shortfall, Liquidity Horizons, Non-Modellable Risk Factors).\n• Dateninfrastruktur und -qualität: Detaillierte Gap-Analyse der Datenverfügbarkeit, -granularität und -qualität, insbesondere im Hinblick auf die anspruchsvollen Anforderungen des Internal Models Approach.\n• IT-Systeme und Berechnungskapazitäten: Evaluation der bestehenden IT-Infrastruktur hinsichtlich ihrer Fähigkeit, die rechenintensiven FRTB-Anforderungen zu bewältigen.\n• Governance- und Validierungsprozesse: Analyse der bestehenden Modellvalidierungs- und Governance-Strukturen im Kontext der strengen FRTB-Anforderungen, insbesondere für den IMA.\n\n🔬 ADVISORI's einzigartiger Ansatz zur Kapitalauswirkungsquantifizierung:\n• Multi-Szenario-Simulation: Entwicklung präziser Simulationsmodelle, die die Kapitalauswirkungen unter verschiedenen Implementierungsstrategien (SA vs. IMA, Trading Desk-Struktur, etc.) quantifizieren.\n• Granulare Portfolio-Analyse: Detaillierte Bewertung der Kapitalanforderungen auf Ebene einzelner Handelstische und Produktklassen zur Identifikation spezifischer Optimierungspotenziale.\n• Sensitivitätsanalysen: Durchführung umfassender Sensitivitätsanalysen, um die Haupttreiber der Kapitalanforderungen zu identifizieren und gezielte Optimierungsmaßnahmen abzuleiten.\n• Benchmarking: Vergleich Ihrer projizierten Kapitalanforderungen mit Peer-Instituten zur Einordnung Ihrer relativen Wettbewerbsposition und Identifikation von Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt uns ADVISORI bei der Entwicklung einer optimalen FRTB-Implementierungsstrategie, die sowohl regulatorische Anforderungen erfüllt als auch unsere geschäftlichen Ziele fördert?",
        answer: "Die Entwicklung einer optimalen FRTB-Implementierungsstrategie erfordert ein komplexes Gleichgewicht zwischen regulatorischer Compliance, Kapitaleffizienz, operativer Machbarkeit und strategischen Geschäftszielen. ADVISORI unterstützt Sie bei dieser anspruchsvollen Aufgabe mit einem strukturierten, multidimensionalen Ansatz, der weit über eine rein technische Implementierung hinausgeht.\n\n🧩 Schlüsselelemente unseres strategischen Implementierungsansatzes:\n• Maßgeschneiderte Implementierungsoptionen: Entwicklung mehrerer strategischer Optionen (vom reinen Standardansatz über hybride Modelle bis zum vollständigen IMA), die präzise auf Ihre spezifische Ausgangssituation, Ressourcenverfügbarkeit und Risikoappetit zugeschnitten sind.\n• Business-Impact-Analyse: Detaillierte Bewertung der Auswirkungen jeder Implementierungsoption auf Ihre Geschäftsstrategie, Produktpalette, Kundenbeziehungen und Wettbewerbsposition.\n• Kosten-Nutzen-Analyse: Rigorose Quantifizierung des ROI verschiedener Implementierungsoptionen unter Berücksichtigung direkter Implementierungskosten, laufender Betriebskosten und potenzieller Kapitalersparnisse.\n• Phasenbasierter Implementierungsfahrplan: Entwicklung eines realistischen, aber ambitionierten Zeitplans mit klar priorisierten Maßnahmenpaketen, Meilensteinen und Ressourcenanforderungen.\n\n🛤️ ADVISORI's bewährter Prozess zur Strategieentwicklung:\n• Strategieworkshops: Durchführung interaktiver Workshops mit Ihren Schlüsselstakeholdern aus Handel, Risikomanagement, IT und Compliance, um strategische Prioritäten zu definieren und Implementierungsoptionen zu evaluieren.\n• Szenario-Modellierung: Entwicklung quantitativer Modelle zur Simulation verschiedener Implementierungsszenarien und deren Auswirkungen auf Kapital, Kosten und operative Komplexität.\n• Governance-Design: Konzeption einer optimalen Governance-Struktur für die FRTB-Implementierung, einschließlich Projektorganisation, Entscheidungsprozesse und Eskalationswege.\n• Transformations-Roadmap: Erstellung einer detaillierten, praxisorientierten Roadmap, die nicht nur technische Implementierungsschritte, sondern auch notwendige organisatorische Veränderungen und Kulturwandel adressiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche typischen Herausforderungen und Fallstricke können bei der FRTB-Implementierung auftreten und wie hilft die ADVISORI-Readiness-Bewertung, diese zu vermeiden?",
        answer: "Die Implementierung der FRTB-Anforderungen ist mit zahlreichen komplexen Herausforderungen verbunden, die ohne eine umfassende Readiness-Bewertung und strategische Planung zu erheblichen Risiken führen können. Unsere Erfahrung aus zahlreichen FRTB-Projekten zeigt, dass eine frühzeitige Identifikation dieser Fallstricke entscheidend für eine erfolgreiche Umsetzung ist.\n\n⚠️ Kritische Herausforderungen und häufige Fallstricke:\n• Unterschätzte Kapitalauswirkungen: Viele Institute unterschätzen die potenziellen Kapitalerhöhungen (oft 40-60%) durch FRTB erheblich, insbesondere bei komplexen Portfolios oder bei Handelsbüchern mit illiquiden Instrumenten.\n• Datenqualitäts- und Verfügbarkeitsprobleme: Die strengen Datenanforderungen für den IMA, insbesondere bezüglich historischer Marktdaten und Risikofaktoren, überfordern häufig bestehende Dateninfrastrukturen.\n• Komplexe Modellvalidierung: Die rigorosen Anforderungen an Backtesting und P&L-Attribution stellen selbst für Institute mit fortschrittlichen Modellierungskapazitäten eine erhebliche Hürde dar.\n• Silodenken und mangelnde Abstimmung: Fehlende Koordination zwischen Handel, Risikomanagement, IT und Compliance führt oft zu inkonsistenten Implementierungsansätzen und verpassten Optimierungsmöglichkeiten.\n\n🛡️ Wie die ADVISORI-Readiness-Bewertung diese Risiken minimiert:\n• Frühwarnsystem: Unsere detaillierte Gap-Analyse identifiziert potenzielle Problembereiche lange bevor sie zu kritischen Engpässen werden und ermöglicht proaktives Handeln.\n• Realistische Kapitalprojektion: Unsere fortschrittlichen Simulationsmodelle liefern präzise Prognosen der Kapitalauswirkungen unter verschiedenen Szenarien und verhindern unangenehme Überraschungen.\n• Daten-Readiness-Framework: Wir entwickeln eine umfassende Bewertung Ihrer Dateninfrastruktur und einen priorisierten Maßnahmenplan zur Schließung kritischer Datenlücken.\n• Integrierter Change-Management-Ansatz: Unsere Readiness-Bewertung betrachtet nicht nur technische Aspekte, sondern auch organisatorische Strukturen, Prozesse und Kulturfaktoren, die für eine erfolgreiche Implementierung entscheidend sind."
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
