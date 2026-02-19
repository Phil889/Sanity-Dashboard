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
    console.log('Updating FRTB Gap-Analyse Daten & Prozesse page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-gap-analyse-daten-prozesse' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-gap-analyse-daten-prozesse" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine umfassende Daten- und Prozess-Gap-Analyse für die FRTB-Implementierung aus C-Level-Perspektive strategisch entscheidend?",
        answer: "Für die oberste Führungsebene von Finanzinstituten ist die FRTB-Implementierung weit mehr als ein regulatorisches Projekt – es ist eine strategische Initiative mit tiefgreifenden Auswirkungen auf Geschäftsmodelle, Kapitaleffizienz und Wettbewerbsfähigkeit. Eine fundierte Daten- und Prozess-Gap-Analyse bildet dabei das kritische Fundament für strategische Entscheidungen und nachhaltige Implementierung.\n\n🔍 Strategische Bedeutung für die C-Suite:\n• Geschäftsmodell-Implikationen: Die FRTB-Anforderungen können fundamentale Auswirkungen auf die Profitabilität bestimmter Handelsaktivitäten haben. Eine präzise Gap-Analyse identifiziert frühzeitig, welche Geschäftsbereiche unter Druck geraten und ermöglicht strategische Anpassungen vor der vollen regulatorischen Wirkung.\n• Kapitaleffizienz und -planung: Die datenbasierte Bewertung der Kapitalisierungsauswirkungen unter verschiedenen Implementierungsszenarien (Standardansatz vs. interne Modelle) liefert der Führungsebene entscheidungsrelevante Grundlagen für die strategische Kapitalallokation.\n• Strategischer Wettbewerbsvorteil: Institute, die frühzeitig eine präzise Gap-Analyse durchführen, können gezielter und effizienter implementieren und schaffen sich dadurch einen strategischen Vorsprung im sich konsolidierenden Markt.\n• Risikominimierung bei Transformation: Die umfassende Analyse minimiert das Risiko kostspieliger Fehlentscheidungen bei der technologischen und prozessualen Transformation, die für FRTB erforderlich ist.\n\n📈 ADVISORI's strategischer Mehrwert im Gap-Analyse-Prozess:\n• Geschäftsorientierte Perspektive: Unsere Gap-Analyse fokussiert nicht nur auf technische Compliance, sondern stellt die Geschäftsauswirkungen und strategischen Optionen in den Vordergrund.\n• Szenariobasierte Entscheidungsunterstützung: Entwicklung verschiedener Implementierungsszenarien mit detaillierter Kosten-Nutzen-Analyse für fundierte C-Level-Entscheidungen zwischen Standardansatz und internen Modellen.\n• Priorisierungsframework: Systematische Bewertungsmethodik zur Priorisierung von Handlungsfeldern nach regulatorischer Dringlichkeit, Implementierungskomplexität und strategischem Geschäftswert.\n• Zukunftssichere Architekturkonzepte: Entwicklung von Daten- und Prozessarchitekturen, die nicht nur FRTB-Compliance sicherstellen, sondern auch die Grundlage für künftige geschäftliche und regulatorische Anforderungen bilden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Daten- und Prozessanforderungen stellt FRTB an Banken und wie unterstützt ADVISORI bei der systematischen Identifikation von Lücken?",
        answer: "Die FRTB-Regulierung stellt außergewöhnlich komplexe und umfangreiche Anforderungen an die Dateninfrastruktur und Prozesslandschaft von Banken. Diese übersteigen in ihrer Granularität, Vollständigkeit und Qualität typischerweise bei weitem die bestehenden Fähigkeiten vieler Institute. ADVISORI unterstützt mit einer methodischen Herangehensweise bei der präzisen Identifikation und Priorisierung dieser Lücken.\n\n📊 Kritische FRTB-Datenanforderungen:\n• Marktdatengranularität und -historisierung: Erfordernis hochgranularer Marktdaten mit 10+ Jahren Historisierung für Modellvalidierung und Risikoberechnung, einschließlich vollständiger Kurven und Volatilitätsoberflächen für alle relevanten Risikoparameter.\n• Risikofaktor-Modellierbarkeit: Notwendigkeit der kontinuierlichen Bewertung und Dokumentation der Modellierbarkeit von Risikofaktoren anhand strenger Kriterien für die Anzahl und Verteilung 'echter' Preisbeobachtungen.\n• Attributionsanforderungen: Umfassende Datenintegration zwischen Front Office und Risikomanagement für detaillierte P&L-Attribution auf Desk-Ebene mit extrem hohen Erklärungsanforderungen.\n• Non-Modellable Risk Factors (NMRFs): Identifikation, Dokumentation und spezifische Kapitalisierung von nicht modellierbaren Risikofaktoren erfordert neue Datenerfassungs- und Verarbeitungsprozesse.\n• Sensitivitätsberechnungen: Strukturierte Erfassung und Speicherung tausender Delta-, Vega- und Curvature-Sensitivitäten für den standardisierten Ansatz.\n\n⚙️ Kritische FRTB-Prozessanforderungen:\n• Trading Desk-Definition und -Struktur: Neuorganisation der Handelsaktivitäten gemäß regulatorischen Anforderungen an Trading Desks, inklusive Dokumentation und Genehmigungsprozessen.\n• Tägliche P&L-Erklärung: Etablierung täglicher Prozesse zur detaillierten Erklärung der Handelsgewinne und -verluste auf Desk-Ebene mit direkter Anbindung an die Risikosysteme.\n• Modellvalidierung und Backtesting: Implementation strenger Validierungsprozesse mit täglichem Backtesting auf Risk-Charge und Trading-Desk-Ebene.\n• Fallback-Prozesse: Etablierung robuster Prozesse für den Übergang zwischen internen Modellen und Standardansatz bei Nichteinhaltung der Modellanforderungen.\n\n🛠️ ADVISORI's methodischer Gap-Analyse-Ansatz:\n• Systematisches Assessment-Framework: Anwendung eines strukturierten Bewertungsrahmens mit über 300 spezifischen Prüfpunkten zur präzisen Identifikation von Datenlücken und Prozessschwachstellen.\n• Heatmap-Methodik: Visualisierung der Lücken nach Kritikalität und Aufwand in einer detaillierten Heatmap zur Unterstützung der Priorisierung und Ressourcenplanung.\n• Integrierte Handlungsempfehlungen: Konkrete, praxiserprobte Lösungsansätze für jede identifizierte Lücke, die auf unserer Erfahrung aus zahlreichen FRTB-Implementierungsprojekten basieren.\n• Benchmarking: Einordnung der identifizierten Lücken im Vergleich zu Peer-Instituten zur realistischen Einschätzung der eigenen Position und Identifikation von Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche typischen Herausforderungen entstehen bei der FRTB-Datenintegration zwischen Front Office und Risikomanagement und wie können diese überwunden werden?",
        answer: "Die FRTB-Regulierung erfordert eine beispiellos enge Integration zwischen Front Office und Risikomanagement, insbesondere bei Nutzung interner Modelle. Diese tiefgreifende Integration stellt viele Banken vor erhebliche technische, organisatorische und kulturelle Herausforderungen, die weit über klassische Risikoprojekte hinausgehen.\n\n🔄 Zentrale Herausforderungen der FRTB-Datenintegration:\n• Divergierende Systeme und Bewertungsmethoden: Front-Office-Systeme und Risikomanagementsysteme verwenden typischerweise unterschiedliche Bewertungsmethoden, Marktdatenquellen und Modellierungsansätze, was zu signifikanten P&L-Unterschieden führt und die strengen FRTB-Attributionsanforderungen gefährdet.\n• Zeitliche Synchronisation: FRTB verlangt eine tägliche zeitlich synchronisierte Bewertung zwischen Handels- und Risikosystemen mit minimalen Abweichungen, was in verteilten Systemlandschaften mit unterschiedlichen Bewertungszeitpunkten und Datenabzügen eine große Herausforderung darstellt.\n• Granularitätsunterschiede: Front-Office-Systeme arbeiten typischerweise auf Einzeltransaktionsebene, während Risikosysteme oft auf aggregierter Portfolioebene operieren – FRTB erfordert eine konsistente Granularität über alle Systeme hinweg.\n• Unvollständige Transaktionsattribute: Häufig fehlen in Front-Office-Systemen für FRTB relevante Risikoattribute oder sie werden inkonsistent erfasst, was die korrekte Risikofaktor-Zuordnung und Sensitivitätsberechnung erschwert.\n• Governance-Konflikte: Unterschiedliche Verantwortlichkeiten und Anreizstrukturen zwischen Handel und Risikomanagement führen zu Konfliktpotenzial bei der Modell- und Datenharmonisierung.\n\n🛠️ ADVISORI's bewährte Lösungsansätze:\n• Strategisches Target Operating Model: Entwicklung eines ganzheitlichen Zielbilds für die Daten- und Systemintegration zwischen Front Office und Risikomanagement mit klaren Verantwortlichkeiten und Governance-Strukturen.\n• Golden Source-Konzept: Etablierung einer gemeinsamen Bewertungs- und Dateninfrastruktur für Front Office und Risikomanagement, die als primäre Quelle für alle FRTB-relevanten Berechnungen dient und Inkonsistenzen eliminiert.\n• Schrittweise Systemkonvergenz: Pragmatischer Ansatz zur schrittweisen Konvergenz der Bewertungsmethoden zwischen Front Office und Risikomanagement, beginnend mit den kritischsten Produktklassen und Risikofaktoren.\n• Automatisierte Reconciliation: Implementierung automatisierter Prozesse zur täglichen Abstimmung und Erklärung von Unterschieden zwischen Front-Office- und Risikobewertungen, mit klaren Eskalationspfaden bei signifikanten Abweichungen.\n• Cross-funktionale Ownership: Etablierung gemeinsamer Verantwortlichkeit für den FRTB-Datenintegrationsprozess durch cross-funktionale Teams aus Handel, Risikomanagement und IT mit gemeinsamen Zielen und Anreizstrukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Banken von einer FRTB Gap-Analyse profitieren, um über die reine Compliance hinaus strategische Vorteile zu erzielen?",
        answer: "Eine strategisch konzipierte FRTB Gap-Analyse bietet Banken die Möglichkeit, weit über die bloße Erfüllung regulatorischer Anforderungen hinauszugehen. Sie kann als Katalysator für eine umfassende Transformation der Daten- und Prozesslandschaft dienen und dadurch signifikante strategische Vorteile in einem wettbewerbsintensiven Marktumfeld erschließen.\n\n🚀 Strategische Transformationschancen durch FRTB:\n• Datengetriebene Geschäftsoptimierung: Die für FRTB erforderliche Konsolidierung und Qualitätssteigerung der Markt- und Positionsdaten schafft die Grundlage für präzisere und granularere Geschäftsanalysen, die zu besseren Handels- und Investitionsentscheidungen führen.\n• Front-to-Risk Integration als Wettbewerbsvorteil: Die Überwindung des klassischen Siloansatzes zwischen Front Office und Risikomanagement ermöglicht eine agilere Produktentwicklung, schnellere Time-to-Market und präziseres Risiko-basiertes Pricing.\n• Kosteneffiziente IT-Architektur: Die Konsolidierung und Modernisierung der Systemlandschaft im Rahmen der FRTB-Implementierung kann die IT-Betriebskosten signifikant reduzieren und gleichzeitig die Skalierbarkeit und Flexibilität erhöhen.\n• Analytische Exzellenz: Die verbesserten Datenmodelle und fortschrittlichen Analysefähigkeiten, die für FRTB entwickelt werden, bilden die Grundlage für erweiterte Anwendungen von Machine Learning und KI in Handel und Risikomanagement.\n\n💡 ADVISORI's wertsteigernder Analyse-Ansatz:\n• Potenzialorientierte Gap-Analyse: Unser Ansatz identifiziert nicht nur Compliance-Lücken, sondern systematisch auch damit verbundene Geschäftspotenziale und Transformationschancen für die Bank.\n• Business Case Integration: Für jedes größere Handlungsfeld entwickeln wir quantifizierte Business Cases, die sowohl Compliance-Aspekte als auch strategische Vorteile und Kosteneinsparungen berücksichtigen.\n• Synergieorientierte Roadmap: Unsere Implementierungsroadmaps sind so konzipiert, dass sie Synergien mit anderen strategischen Initiativen (z.B. Digitalisierung, Kostenoptimierung, Data Analytics) maximieren.\n• Flexibles Zielbild: Wir entwickeln flexible Zielarchitekturen, die nicht nur FRTB-Anforderungen erfüllen, sondern auch zukünftige regulatorische Änderungen und Geschäftsanforderungen mit minimalen Anpassungen adressieren können.\n• Change-Management-Integration: Unsere Gap-Analyse berücksichtigt von Beginn an die organisatorischen und kulturellen Veränderungsaspekte und integriert diese in die Umsetzungsplanung, um den transformativen Wert vollständig zu realisieren."
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
