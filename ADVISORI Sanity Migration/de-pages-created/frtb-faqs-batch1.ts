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
    console.log('Updating FRTB page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Implikationen hat die FRTB-Regulierung für unsere Bank und wie unterstützt ADVISORI bei deren effektiven Bewältigung?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) geht weit über eine technische Compliance-Übung hinaus – sie repräsentiert einen grundlegenden Paradigmenwechsel im Marktrisikomanagement mit erheblichen strategischen Auswirkungen für Ihr Institut. Für die C-Suite bedeutet dies, nicht nur regulatorische Anforderungen zu erfüllen, sondern die Handelsbuch-Strategie neu zu überdenken und optimal zu positionieren.\n\n🔍 Strategische Dimensionen der FRTB-Implementierung:\n• Kapitalallokation und -effizienz: Die signifikant höheren Kapitalanforderungen (oft 40-60% mehr als unter Basel 2.5) erfordern eine grundlegende Neubewertung und Optimierung Ihrer Handelsaktivitäten, um die Kapitaleffizienz zu maximieren.\n• Geschäftsmodell-Transformation: Die Neuklassifizierung von Positionen zwischen Handels- und Bankbuch sowie die Überprüfung der Handelsbuch-Grenzen bietet die Chance, Ihr Geschäftsmodell strategisch anzupassen und zu optimieren.\n• Wettbewerbspositionierung: Institute, die FRTB frühzeitig und effizient implementieren, können sich signifikante Wettbewerbsvorteile sichern, während andere mit höheren Kapitalkosten kämpfen oder Geschäftsbereiche einschränken müssen.\n• Technologische Transformation: Die Anforderungen an Datenqualität, Rechenleistung und Risikomodellierung bieten die Chance, Ihre IT-Infrastruktur grundlegend zu modernisieren und für zukünftige regulatorische Herausforderungen vorzubereiten.\n\n🛡️ Der ADVISORI-Ansatz für strategischen FRTB-Erfolg:\n• Ganzheitliche Impact-Analyse: Wir bewerten nicht nur die regulatorischen Lücken, sondern quantifizieren präzise die geschäftlichen Auswirkungen auf Kapital, Liquidität, Profitabilität und Wettbewerbsposition.\n• Strategische Optionsanalyse: Entwicklung verschiedener Implementierungsszenarien (vom Standardansatz bis zum IMA) mit klarer Kosten-Nutzen-Bewertung als Entscheidungsgrundlage für die C-Suite.\n• Integrierter Transformationsansatz: Synchronisation der FRTB-Implementierung mit anderen strategischen Initiativen (z.B. Digitalisierung, Datenmanagement) für maximale Synergien und Kosteneffizienz.\n• Stakeholder-Management: Unterstützung bei der zielgruppengerechten Kommunikation der FRTB-Strategie an Aufsichtsbehörden, Investoren und interne Stakeholder."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir durch die FRTB-Implementierung nicht nur Compliance sicherstellen, sondern auch einen Wettbewerbsvorteil erzielen und unsere Kapitaleffizienz optimieren?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) stellt für vorausschauende Institute nicht nur eine regulatorische Verpflichtung dar, sondern eine einzigartige Chance, die eigene Marktposition zu stärken und die Kapitaleffizienz signifikant zu verbessern. Für die C-Suite bedeutet dies, über die reine Compliance hinauszudenken und FRTB als strategischen Katalysator zu nutzen.\n\n💡 Strategische Potenziale für überlegene Kapitaleffizienz:\n• Portfoliooptimierung und Hedging-Strategien: Durch fortschrittliche FRTB-konforme Modellierung können Sie Ihre Handelsstrategien neu kalibrieren, um die Kapitalanforderungen zu minimieren, ohne die Risiko-Ertrags-Profile zu beeinträchtigen.\n• Trading-Desk-Reorganisation: Die unter FRTB erforderliche Desk-Struktur ermöglicht eine strategische Neuausrichtung, die nicht nur regulatorische Anforderungen erfüllt, sondern auch operative Ineffizienzen beseitigt und Synergien schafft.\n• Differenzierte Produktstrategien: Eine detaillierte Analyse der FRTB-Auswirkungen auf verschiedene Produktklassen ermöglicht die strategische Fokussierung auf kapitaleffiziente Instrumente und die Neugestaltung oder Reduzierung kapitalintensiver Produkte.\n• Preisgestaltungsvorteile: Ein frühes und tiefes Verständnis der FRTB-Kapitalkosten ermöglicht eine wettbewerbsfähigere Preisgestaltung durch präzisere Einpreisung von Kapitalkosten, während Wettbewerber möglicherweise mit pauschalen Aufschlägen arbeiten müssen.\n\n🚀 Der ADVISORI-Ansatz zur Wettbewerbsdifferenzierung:\n• Kapitaloptimierungsmodelle: Wir entwickeln hochentwickelte Simulationsmodelle, die verschiedene Handelsstrategien und ihre Kapitalauswirkungen unter FRTB analysieren, um optimale Szenarien zu identifizieren.\n• Strategische Modellauswahl: Unterstützung bei der Entscheidung zwischen Standardansatz (SA) und Internal Models Approach (IMA) auf Desk-Ebene, basierend auf einer rigorosen Kosten-Nutzen-Analyse.\n• Wettbewerbsbenchmarking: Kontinuierliche Analyse der Branchentrends und Peer-Group-Strategien, um Ihre relative Position zu bewerten und neue Marktchancen zu identifizieren.\n• Implementierungsbeschleunigung: Unsere bewährten Methoden und Tools ermöglichen eine schnellere Time-to-Compliance, was Ihnen einen First-Mover-Vorteil verschafft, während Wettbewerber noch mit grundlegenden Implementierungsfragen kämpfen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Governance- und Betriebsmodelle empfiehlt ADVISORI für eine nachhaltige FRTB-Compliance, die sowohl regulatorische Anforderungen erfüllt als auch betriebliche Effizienz gewährleistet?",
        answer: "Die nachhaltige Einhaltung der FRTB-Anforderungen erfordert mehr als nur die initiale Implementierung – sie verlangt ein robustes, zukunftssicheres Governance- und Betriebsmodell. Für die C-Suite geht es darum, ein Gleichgewicht zwischen regulatorischer Compliance, betrieblicher Effizienz und strategischer Flexibilität zu finden.\n\n🔄 Schlüsselelemente eines erfolgreichen FRTB-Governance-Modells:\n• Integrierte Risiko-Governance: Etablierung eines übergreifenden Rahmenwerks, das FRTB-Compliance nahtlos in bestehende Risikomanagement-Strukturen integriert und klare Verantwortlichkeiten auf allen Ebenen definiert.\n• Dynamische Handelsbuch-Governance: Implementierung eines robusten Prozesses zur kontinuierlichen Überprüfung und Überwachung der Handelsbuch-/Bankbuch-Grenzen gemäß den strengen FRTB-Kriterien.\n• Modellrisikomanagement: Entwicklung eines umfassenden Frameworks für die Validierung, Überwachung und kontinuierliche Verbesserung der FRTB-Modelle, insbesondere für Institute, die den IMA-Ansatz verfolgen.\n• Datenqualitätsmanagement: Etablierung eines End-to-End-Datenmanagementsystems, das die hohen Anforderungen an Datenqualität, -granularität und -verfügbarkeit unter FRTB sicherstellt.\n\n⚙️ Effiziente Betriebsmodelle für FRTB-Excellence:\n• Automatisierungspotenziale: Identifikation und Implementierung von Automatisierungsmöglichkeiten in den rechenintensiven FRTB-Prozessen, um operative Kosten zu senken und die Zuverlässigkeit zu erhöhen.\n• Zentralisierte vs. dezentrale Strukturen: Entwicklung eines optimalen Balances zwischen zentralen Kontrollfunktionen und dezentraler Umsetzung in den Handelseinheiten.\n• Kontinuierlicher Verbesserungszyklus: Etablierung eines strukturierten Prozesses zur regelmäßigen Überprüfung und Optimierung der FRTB-Implementierung, um auf neue regulatorische Entwicklungen und Marktveränderungen reagieren zu können.\n• Wissensdatenbank und Kompetenzentwicklung: Aufbau interner Expertise durch gezielte Schulungen und Wissenstransfer, um langfristig die Abhängigkeit von externen Beratern zu reduzieren.\n\n🛠️ ADVISORI's praxiserprobter Implementierungsansatz:\n• Maßgeschneiderte Governance-Blaupausen: Wir entwickeln spezifische Governance-Modelle, die optimal auf Ihre Organisationsstruktur, Risikokultur und strategischen Prioritäten abgestimmt sind.\n• Technologiegestützte Betriebsmodelle: Integration modernster Technologien (Cloud Computing, KI/ML, Prozessautomatisierung) in Ihre FRTB-Betriebsabläufe für maximale Effizienz.\n• Change-Management-Unterstützung: Begleitung des kulturellen und organisatorischen Wandels, der für eine erfolgreiche FRTB-Implementation unerlässlich ist.\n• Regulatorische Beziehungspflege: Unterstützung bei der proaktiven Kommunikation mit Aufsichtsbehörden und der Vorbereitung auf regulatorische Prüfungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Integration von FRTB in unsere bestehende Risikoinfrastruktur und welchen ROI können wir von verschiedenen Implementierungsstrategien erwarten?",
        answer: "Die Integration der FRTB-Anforderungen in Ihre bestehende Risikoinfrastruktur stellt eine komplexe, aber strategisch wichtige Investitionsentscheidung dar. Für die C-Suite ist es essentiell, den Return on Investment verschiedener Implementierungsansätze zu verstehen und eine fundierte Entscheidung zwischen kurzfristiger Compliance und langfristiger strategischer Transformation zu treffen.\n\n💼 ROI-Treiber verschiedener FRTB-Implementierungsstrategien:\n• Minimaler Compliance-Ansatz: Fokus auf die Erfüllung der Mindestanforderungen durch den Standardansatz (SA) mit begrenzten Investitionen in Infrastruktur – geringere initiale Kosten, aber höhere laufende Kapitalbelastung und eingeschränkte strategische Flexibilität.\n• Selektiver IMA-Ansatz: Anwendung des Internal Models Approach für ausgewählte Trading Desks mit signifikantem Kapitaloptimierungspotenzial – mittlere Investitionen mit gezielter Kapitalreduktion für relevante Portfolios.\n• Transformativer Ansatz: Umfassende Modernisierung der Risikoinfrastruktur mit IMA-Implementierung und Integration in eine unternehmensweite Daten- und Analyseplattform – höhere initiale Investitionen, aber signifikante langfristige Kapitalersparnis und strategische Wettbewerbsvorteile.\n• Hybride Cloud-Strategie: Nutzung von Cloud-basierten Lösungen für die rechenintensiven FRTB-Prozesse – optimierte Kostenstruktur mit Umwandlung von Investitionsausgaben in operative Kosten und erhöhter Skalierbarkeit.\n\n📊 Quantifizierung des FRTB-Investitionswerts:\n• Kapitalersparnis-Potenzial: Je nach Portfolio und Modellierungsansatz können fortgeschrittene FRTB-Implementierungen die Kapitalanforderungen um 15-30% gegenüber dem Standardansatz reduzieren – mit direkten Auswirkungen auf die Rentabilität und Wettbewerbsfähigkeit.\n• Operative Effizienzgewinne: Automatisierte und integrierte FRTB-Prozesse können den manuellen Aufwand um bis zu 40% reduzieren und gleichzeitig die Genauigkeit und Zuverlässigkeit erhöhen.\n• Strategische Flexibilitätsvorteile: Eine fortschrittliche FRTB-Infrastruktur ermöglicht schnellere Reaktionen auf Marktveränderungen und neue Geschäftsmöglichkeiten sowie eine agilere Anpassung an zukünftige regulatorische Entwicklungen.\n• Reputations- und Compliance-Sicherheit: Minimierung des Risikos regulatorischer Strafen, Kapitalaufschläge oder Handelsbeschränkungen durch robuste FRTB-Compliance.\n\n🧩 ADVISORI's Integrationsansatz für maximalen ROI:\n• Ganzheitliche Infrastrukturbewertung: Detaillierte Analyse Ihrer bestehenden Risikoinfrastruktur zur Identifikation von Synergiepotenzialen und Vermeidung von Redundanzen.\n• Modulare Implementierungsstrategie: Priorisierung von Maßnahmen mit dem höchsten ROI und stufenweiser Ausbau gemäß Ihren strategischen Prioritäten und budgetären Möglichkeiten.\n• Technologiepartner-Ökosystem: Zugang zu unserem Netzwerk spezialisierter Technologieanbieter für FRTB-Lösungen, die optimal auf Ihre spezifischen Anforderungen abgestimmt sind.\n• Continuous Value Tracking: Implementierung von KPIs und Monitoring-Tools, die den realisierten Wert Ihrer FRTB-Investitionen kontinuierlich messen und Optimierungspotenziale aufzeigen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
