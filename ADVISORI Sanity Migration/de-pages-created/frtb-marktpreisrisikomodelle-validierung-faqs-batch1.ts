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
    console.log('Updating FRTB Marktpreisrisikomodelle Validierung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-marktpreisrisikomodelle-validierung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-marktpreisrisikomodelle-validierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Implikationen haben die FRTB-Modellvalidierungsanforderungen für unser Handelsgeschäft, und wie unterstützt ADVISORI einen wertschöpfenden Ansatz?",
        answer: "Die FRTB-Modellvalidierungsanforderungen stellen nicht nur technische Hürden dar, sondern haben tiefgreifende strategische Implikationen für Ihr gesamtes Handelsgeschäft. Für die Führungsebene bedeutet dies eine fundamentale Neuausrichtung der Risikomanagement-Governance mit direkten Auswirkungen auf Handelsstrategien, Kapitalallokation und letztlich die Profitabilität des Handelsbuches.\n\n🔍 Strategische Dimensionen der FRTB-Modellvalidierung:\n• Kapitaleffizienz als Wettbewerbsvorteil: Die Qualität der Modellvalidierung entscheidet über die regulatorische Akzeptanz interner Modelle, was signifikante Kapitalvorteile gegenüber dem Standardansatz bieten kann – bis zu 30-40% niedrigere RWAs in bestimmten Handelsbereichen.\n• Neupositionierung des Handelsgeschäfts: Die strengeren Validierungsanforderungen erfordern eine strategische Neubewertung und möglicherweise Umstrukturierung des Handelsportfolios, um die Trading Desks zu optimieren, die für interne Modelle in Frage kommen.\n• Risk Appetite Framework: Die FRTB-Validierung erfordert eine Neukalibrierung Ihres Risikoappetits und der Handelslimits, da sich die Risikosensitivitäten und -metriken fundamental ändern.\n• Data Governance als strategischer Enabler: Die umfangreichen Datenanforderungen für die Modellvalidierung erfordern ein unternehmensweites Data-Governance-Framework, das weit über Compliance hinausgeht und als Grundlage für datengetriebene Handelsentscheidungen dienen kann.\n\n💡 Der ADVISORI-Ansatz für wertschöpfende FRTB-Modellvalidierung:\n• Geschäftsstrategie-orientierte Validierung: Wir betrachten Modellvalidierung nicht isoliert, sondern als integralen Bestandteil Ihrer Handelsstrategie und optimieren Modelle für spezifische Geschäftsziele und Portfoliostrukturen.\n• Trading Desk-spezifisches Kosten-Nutzen-Assessment: Für jeden Trading Desk evaluieren wir präzise den Trade-off zwischen internen Modellen und dem Standardansatz, um strategische Entscheidungen auf Basis von Kapitaleffizienz zu ermöglichen.\n• Validierung als kontinuierlichen Wertschöpfungsprozess: Wir etablieren Validierungsprozesse, die über regulatorische Anforderungen hinausgehen und kontinuierliche Modellverbesserungen ermöglichen, die direkt zur Handelsperformance beitragen.\n• Strategische Technologieintegration: Unsere Validierungslösungen integrieren modernste Technologien wie Machine Learning und Cloud Computing, um nicht nur Compliance zu gewährleisten, sondern auch operationelle Effizienz zu steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die P&L Attribution Test Anforderungen unter FRTB erfolgreich umsetzen und welche Strategien empfiehlt ADVISORI zur Optimierung der Testergebnisse?",
        answer: "Der P&L Attribution Test (PLAT) stellt einen zentralen und besonders anspruchsvollen Bestandteil der FRTB-Modellvalidierung dar. Sein Bestehen ist entscheidend für die regulatorische Anerkennung interner Modelle und damit für die Kapitaleffizienz. Die erfolgreiche Umsetzung erfordert einen ganzheitlichen Ansatz, der weit über reine Compliance-Überlegungen hinausgeht.\n\n📊 Kernherausforderungen bei der PLAT-Implementierung:\n• Methodische Komplexität: Die Zerlegung der P&L in Risk Factors und die Abstimmung zwischen hypothetischer und risikobasierter P&L erfordert sophisticated Ansätze und tiefes methodisches Verständnis.\n• Datenintegritäts-Anforderungen: Die Qualität der Eingangsdaten beeinflusst direkt die Testergebnisse, wobei Marktdaten, Positionsdaten und Modellparameter konsistent sein müssen.\n• Performanz unter Stress: Die PLAT-Anforderungen müssen auch unter volatilen Marktbedingungen erfüllt werden, was besondere Herausforderungen an die Modellrobustheit stellt.\n• Governance-Integration: Die Tests müssen in bestehende Modell-Governance-Frameworks integriert werden, mit klaren Eskalationswegen und Verantwortlichkeiten.\n\n🔧 ADVISORIs strategischer Optimierungsansatz:\n• Granulare Desk-Struktur-Optimierung: Wir analysieren und optimieren die Trading Desk-Struktur spezifisch für PLAT-Anforderungen, um Desk-Aufteilungen zu identifizieren, die die Erfolgswahrscheinlichkeit maximieren.\n• Risk Factor Alignment: Entwicklung fortschrittlicher Mapping-Verfahren zwischen Front-Office-Bewertungsmodellen und Risikomodellen, um die Varianzkomponente (Spearman Korrelation) zu optimieren.\n• Bias-Komponentenoptimierung: Implementierung von Kalibrierungsmethoden für Risikomodelle, die systematische Verzerrungen reduzieren und die Mean-Komponente des PLAT verbessern.\n• Dynamisches PLAT-Monitoring: Etablierung von Echtzeit-Monitoring-Lösungen, die frühzeitig potenzielle PLAT-Probleme identifizieren und proaktive Maßnahmen ermöglichen.\n• Remediation Playbooks: Entwicklung vordefinierter Handlungsstrategien für verschiedene PLAT-Failure-Szenarien, um schnelle und effektive Reaktionen auf Testprobleme zu ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Strategien empfiehlt ADVISORI zur effektiven Behandlung von Non-Modellable Risk Factors (NMRFs) und wie können wir deren Kapitalauswirkungen minimieren?",
        answer: "Die Behandlung von Non-Modellable Risk Factors (NMRFs) stellt eine der größten Herausforderungen unter FRTB dar und kann signifikante Auswirkungen auf die Kapitalanforderungen haben. Eine strategische Herangehensweise an NMRFs kann einen entscheidenden Wettbewerbsvorteil darstellen und die Kapitaleffizienz substantiell verbessern.\n\n🔄 Strategische Dimensionen der NMRF-Behandlung:\n• Kapitalimpakt-Dimension: NMRFs können 30% oder mehr der gesamten FRTB-Kapitalanforderungen ausmachen, mit besonders hohen Auswirkungen auf exotische Produkte und Emerging Markets.\n• Datenstrategische Dimension: Die Modellierbarkeit von Risikofaktoren hängt direkt von der Verfügbarkeit und Qualität von Real Price Observations (RPOs) ab, was eine strategische Herangehensweise an Datenmanagement erfordert.\n• Geschäftsmodell-Implikationen: Die NMRF-Klassifizierung kann direkten Einfluss auf die Rentabilität bestimmter Handelsstrategien und Produktkategorien haben, was strategische Portfolio-Entscheidungen erfordert.\n• Wettbewerbsdimension: Institute mit überlegenen NMRF-Strategien können signifikante Wettbewerbsvorteile durch niedrigere Kapitalkosten erzielen.\n\n💼 ADVISORIs umfassender NMRF-Optimierungsansatz:\n• Strategische Datenakquisition: Entwicklung maßgeschneiderter Strategien zur Beschaffung von RPOs, einschließlich Datenpooling-Lösungen, Vendor-Strategien und internen Datenqualitätsverbesserungen.\n• Proxy-Methodologie-Entwicklung: Implementation fortschrittlicher statistischer Methoden zur Ableitung von Proxies für schwer beobachtbare Risikofaktoren, die regulatorischen Anforderungen entsprechen.\n• Risikofaktor-Mapping-Optimierung: Analyse und Optimierung der Granularität von Risikofaktoren, um die Balance zwischen Modellgenauigkeit und NMRF-Klassifizierungsrisiko zu optimieren.\n• Kapitaleffiziente Produktstrukturen: Entwicklung alternativer Produktstrukturen und Hedging-Strategien, die ähnliche Marktexpositionen mit einem höheren Anteil modellierbarer Risikofaktoren erreichen.\n• Dynamisches NMRF-Management: Implementation von Monitoring-Tools und Prozessen, die kontinuierlich die Modellierbarkeit von Risikofaktoren überwachen und proaktive Maßnahmen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollten wir unsere Modellvalidierungsgovernance und -prozesse umgestalten, um den erhöhten Anforderungen von FRTB gerecht zu werden?",
        answer: "Die FRTB-Anforderungen stellen einen Paradigmenwechsel für die Modellvalidierung dar und erfordern eine fundamentale Neugestaltung der Governance-Strukturen und Validierungsprozesse. Diese Transformation bietet jedoch auch die Chance, das Risikomanagement strategisch zu stärken und effizientere, wertschöpfende Prozesse zu etablieren.\n\n🏛️ Kernelemente einer FRTB-konformen Validierungsgovernance:\n• Erhöhte Unabhängigkeit: FRTB fordert eine noch stärkere Trennung zwischen Modellentwicklung und -validierung, was organisatorische Anpassungen und klare Verantwortungsbereiche erfordert.\n• Board-Level-Oversight: Die Komplexität und der strategische Impakt von FRTB-Modellen erfordern eine direktere Einbindung der obersten Führungsebene in die Modell-Governance.\n• Integrierte Berichtswege: Validierungsergebnisse müssen systematisch in die Entscheidungsprozesse des Handelsgeschäfts und des übergreifenden Risikomanagements einfließen.\n• End-to-End-Prozessverantwortung: Die Validierungsverantwortung erstreckt sich auf den gesamten Modelllebenszyklus, von der Konzeption bis zur Außerbetriebnahme, mit besonderem Fokus auf kontinuierliches Monitoring.\n\n⚙️ ADVISORIs Framework für eine transformative Validierungsgovernance:\n• Strategische Governance-Neuausrichtung: Wir unterstützen Sie bei der Entwicklung einer Governance-Struktur, die regulatorische Anforderungen erfüllt und gleichzeitig die strategische Entscheidungsfindung verbessert.\n• Prozessautomatisierung und -digitalisierung: Implementation digitaler Workflows und automatisierter Validierungsprozesse, die Effizienz steigern und menschliche Fehler reduzieren.\n• Dynamische Ressourcenallokation: Entwicklung eines risikobasierten Ansatzes, der Validierungsressourcen auf Basis der Modellrisiken und -auswirkungen priorisiert.\n• Kompetenzaufbau und Change Management: Schulungsprogramme und Wissenstransfer zur Entwicklung des erforderlichen Skill-Sets für FRTB-Modellvalidierung auf allen relevanten Ebenen.\n• Kulturelle Transformation: Förderung einer Risikokultur, die Modellvalidierung nicht als Compliance-Übung, sondern als strategischen Wertbeitrag versteht und kritisches Denken sowie transparente Kommunikation fördert."
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
