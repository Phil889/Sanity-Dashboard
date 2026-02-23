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
    console.log('Updating Basel III Einführung neuer Kennzahlen page with FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann der Countercyclical Capital Buffer (CCyB) als strategisches Instrument für Finanzinstitute genutzt werden und welche Rolle spielt ADVISORI bei seiner Implementierung?",
        answer: "Der Countercyclical Capital Buffer (CCyB) ist mehr als nur eine regulatorische Anforderung – er kann als strategisches Instrument zur Stärkung der finanziellen Resilienz und zur proaktiven Steuerung in verschiedenen Wirtschaftszyklen genutzt werden. Als antizyklisches Element soll der CCyB exzessive Kreditvergabe in Hochkonjunkturphasen dämpfen und in Abschwungphasen Puffer für die Kreditvergabe bereitstellen. Für Finanzinstitute liegt die strategische Bedeutung nicht nur in der Compliance, sondern in der Integration in die langfristige Kapitalplanung und Geschäftsstrategie.\n\n🔄 Strategische Implikationen des CCyB für Ihr Institut:\n• Vorausschauende Kapitalplanung: Der CCyB erfordert einen proaktiven Ansatz zur Kapitalallokation, der wirtschaftliche Zyklen und regulatorische Veränderungen antizipiert und in die strategische Planung integriert.\n• Differenziertes Kreditwachstum: Durch die Berücksichtigung des CCyB können Sie Ihre Kreditvergabestrategie in verschiedenen Märkten gezielt steuern und risikooptimiert ausrichten.\n• Wettbewerbsvorteile: Institute mit einer effizienten CCyB-Implementierung können bei Änderungen der regulatorischen Anforderungen schneller reagieren und Marktchancen nutzen.\n• Optimierte Eigenkapitalrendite: Eine strategische Integration des CCyB ermöglicht die Balance zwischen regulatorischen Anforderungen und Profitabilitätszielen.\n\n🛠️ ADVISORIs Implementierungsansatz für den CCyB:\n• Globale Perspektive: Wir analysieren die länderspezifischen CCyB-Anforderungen in allen relevanten Jurisdiktionen und deren Auswirkungen auf Ihr Gesamtportfolio.\n• Automatisierte Überwachung: Implementierung von Systemen zur kontinuierlichen Beobachtung der CCyB-Anforderungen und frühzeitigen Erkennung von Änderungen.\n• Integration in die Kapitalplanung: Entwicklung eines dynamischen Kapitalplanungsmodells, das CCyB-Änderungen antizipiert und in verschiedenen Szenarien berücksichtigt.\n• Strategische Bilanzsteuerung: Beratung zur Optimierung Ihrer Bilanzstruktur unter Berücksichtigung der CCyB-Anforderungen und deren Auswirkungen auf die Kapitalkosten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche quantifizierbaren wirtschaftlichen Vorteile bietet eine optimierte Implementierung der Leverage Ratio im Vergleich zu einer minimalistischen Compliance-Lösung?",
        answer: "Die Leverage Ratio als nicht-risikobasierte Kennzahl wird oft als einfache Compliance-Anforderung betrachtet. Tatsächlich bietet eine strategisch optimierte Implementierung jedoch erhebliche wirtschaftliche Vorteile gegenüber einem minimalistischen Ansatz. Während die reine Compliance-Lösung kurzfristig weniger Ressourcen beansprucht, ermöglicht ein optimierter Ansatz langfristige Effizienzgewinne, strategische Flexibilität und verbesserte Marktpositionierung.\n\n💹 Quantifizierbare Vorteile einer optimierten Leverage Ratio Implementierung:\n• Kapitaleffizienz: Eine granulare Analyse und Optimierung der Leverage Ratio kann zu einer Reduktion der Kapitalunterlegung um 10-15% führen, was die Eigenkapitalrendite direkt verbessert.\n• Bilanzoptimierung: Durch gezielte Maßnahmen zur Bilanzoptimierung können die Compliance-Kosten um 20-30% gesenkt werden, ohne das Geschäftsmodell wesentlich einzuschränken.\n• Reduzierte Opportunitätskosten: Ein strategischer Ansatz minimiert die negativen Auswirkungen auf profitable Geschäftsfelder und kann die Opportunitätskosten um bis zu 25% reduzieren.\n• Datenmanagement-Effizienz: Automatisierte und integrierte Reporting-Prozesse können den operativen Aufwand für die kontinuierliche Überwachung und Berichterstattung um 30-40% senken.\n\n🔍 ADVISORIs Mehrwert bei der Leverage Ratio Optimierung:\n• Ganzheitliche Bilanzanalyse: Wir analysieren Ihre gesamte Bilanz auf Optimierungspotenziale und identifizieren Geschäftsbereiche, bei denen eine Anpassung den größten Mehrwert schafft.\n• Maßgeschneiderte Optimierungsstrategien: Entwicklung spezifischer Strategien zur Verbesserung der Leverage Ratio unter Berücksichtigung Ihres Geschäftsmodells und strategischer Prioritäten.\n• Implementierung effizienter Prozesse: Etablierung automatisierter Prozesse zur kontinuierlichen Überwachung und Steuerung der Leverage Ratio mit minimalen operativen Kosten.\n• Strategische Integration: Beratung zur Integration der Leverage Ratio in Ihre Geschäfts- und Risikosteuerung, um langfristige Wettbewerbsvorteile zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann eine Bank die Liquiditätskennzahlen LCR und NSFR als strategische Differenzierungsfaktoren nutzen, und welche innovativen Ansätze bietet ADVISORI?",
        answer: "Die Liquiditätskennzahlen LCR (Liquidity Coverage Ratio) und NSFR (Net Stable Funding Ratio) wurden primär als regulatorische Instrumente zur Stärkung der Bankenliquidität konzipiert. Vorausschauende Institute nutzen diese Kennzahlen jedoch zunehmend als strategische Differenzierungsfaktoren, die über die reine Compliance hinaus Wettbewerbsvorteile und Geschäftschancen erschließen. ADVISORI unterstützt Sie dabei, diese transformative Perspektive zu realisieren.\n\n🌊 Strategische Nutzung von LCR und NSFR als Differenzierungsfaktoren:\n• Produktinnovation und Pricing-Optimierung: Die präzise Quantifizierung der LCR- und NSFR-Auswirkungen verschiedener Produkte ermöglicht die Entwicklung innovativer Angebote mit optimiertem regulatorischem Fußabdruck bei gleichzeitig attraktiver Preisgestaltung.\n• Kundensegmentierung und Relationship-Management: Eine differenzierte Analyse des Kundenverhaltens in Bezug auf Liquiditätskennzahlen erlaubt eine strategische Kundensegmentierung und gezieltes Cross-Selling von Produkten mit positiven Liquiditätseffekten.\n• Treasury-Transformation: Die Integration von LCR und NSFR in ein holistisches Treasury-Management ermöglicht eine effizientere Steuerung der Bilanzstruktur und Optimierung der Refinanzierungskosten.\n• Investor Relations und Marktpositionierung: Überdurchschnittliche Liquiditätskennzahlen und deren transparente Kommunikation stärken das Vertrauen von Investoren und Rating-Agenturen und verbessern die Refinanzierungskonditionen.\n\n💡 ADVISORIs innovative Ansätze zur Optimierung von LCR und NSFR:\n• KI-gestützte Liquiditätssimulation: Einsatz fortschrittlicher KI-Algorithmen zur dynamischen Simulation von Liquiditätsszenarien und Optimierung der Bilanzstruktur unter verschiedenen Marktbedingungen.\n• Verhaltensbasierte Modellierung: Entwicklung präziser Modelle zum Kundenverhalten in Stressszenarien, die über standardisierte regulatorische Annahmen hinausgehen und eine realistische Abbildung Ihres spezifischen Geschäftsmodells ermöglichen.\n• Integrierte Kennzahlensteuerung: Etablierung eines integrierten Steuerungsansatzes, der LCR, NSFR und weitere Kennzahlen (z.B. MREL, TLAC) gemeinsam optimiert und Zielkonflikte minimiert.\n• Dynamische Liquiditätssteuerung: Implementierung eines vorausschauenden Liquiditätsmanagements, das proaktiv auf Marktveränderungen und regulatorische Entwicklungen reagiert und strategische Flexibilität sichert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Synergien können durch die integrierte Implementierung aller Basel III Kennzahlen erschlossen werden, und wie maximiert ADVISORI diesen ganzheitlichen Mehrwert?",
        answer: "Die isolierte Betrachtung und Implementierung einzelner Basel III Kennzahlen führt häufig zu Ineffizienzen, Inkonsistenzen und verpassten Optimierungschancen. Ein integrierter Ansatz hingegen ermöglicht die Erschließung bedeutender Synergien, die sowohl die Compliance-Kosten reduzieren als auch strategische Vorteile generieren. ADVISORI verfolgt konsequent diese ganzheitliche Perspektive, um den maximalen Mehrwert für Ihr Institut zu schaffen.\n\n🔄 Synergiepotenziale durch integrierte Implementierung:\n• Daten- und Systemintegration: Eine einheitliche Datenbasis und integrierte Systemarchitektur für alle Basel III Kennzahlen reduziert Redundanzen, minimiert Inkonsistenzen und senkt die IT-Kosten um 25-35% gegenüber Silo-Lösungen.\n• Harmonisierte Prozesse: Koordinierte Berechnungs-, Validierungs- und Reporting-Prozesse für alle Kennzahlen optimieren den Ressourceneinsatz und verkürzen die Durchlaufzeiten um bis zu 40%.\n• Kohärente Steuerungslogik: Ein integriertes Steuerungsframework für Kapital- und Liquiditätskennzahlen ermöglicht die simultane Optimierung aller regulatorischen Anforderungen und verhindert kontraproduktive Einzelmaßnahmen.\n• Strategische Entscheidungsunterstützung: Die ganzheitliche Betrachtung aller Kennzahlen liefert ein vollständiges Bild der regulatorischen Auswirkungen strategischer Entscheidungen und ermöglicht fundierte Abwägungen.\n\n🛠️ ADVISORIs Ansatz zur Maximierung ganzheitlicher Synergien:\n• Integriertes Target Operating Model: Entwicklung eines ganzheitlichen Betriebsmodells, das Prozesse, Systeme, Daten und Governance für alle Basel III Kennzahlen harmonisiert und Synergien systematisch erschließt.\n• Cross-Impact-Analyse: Durchführung detaillierter Analysen zu den Wechselwirkungen zwischen verschiedenen Kennzahlen und Identifikation von Win-win-Optimierungsmöglichkeiten.\n• Mehrdimensionale Simulationsmodelle: Implementierung fortschrittlicher Simulationsmodelle, die die simultanen Auswirkungen von Geschäftsentscheidungen auf alle relevanten Kennzahlen quantifizieren.\n• Integriertes Regulatory Reporting Framework: Etablierung eines konsistenten und effizienten Reporting-Frameworks, das alle Basel III Anforderungen abdeckt und Dateninkonsistenzen eliminiert."
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
    console.log('✅ FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
