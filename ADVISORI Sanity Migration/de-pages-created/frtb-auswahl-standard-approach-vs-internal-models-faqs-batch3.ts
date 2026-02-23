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
    console.log('Updating FRTB Auswahl Standard Approach vs. Internal Models page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-auswahl-standard-approach-vs-internal-models' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-auswahl-standard-approach-vs-internal-models" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Governance-Strukturen und Risikomanagement-Prozesse sind für die erfolgreiche Implementierung des gewählten FRTB-Ansatzes erforderlich?",
        answer: "Eine robuste Governance-Struktur und effektive Risikomanagement-Prozesse sind nicht nur regulatorische Anforderungen, sondern kritische Erfolgsfaktoren für die nachhaltige FRTB-Compliance und die optimale Ausschöpfung der gewählten Methodik. Dies gilt insbesondere für den Internal Models Approach, aber auch der Standardansatz erfordert signifikante Anpassungen in Governance und Prozessen.\n\n🏛️ Essentielle Governance-Komponenten für eine erfolgreiche FRTB-Implementierung:\n• Board-Level-Oversight: Etablierung klarer Verantwortlichkeiten auf Vorstands- und Senior-Management-Ebene für die FRTB-Implementierung, mit regelmäßigem Reporting und strategischer Steuerung.\n• Three-Lines-of-Defense-Modell: Implementation eines robusten Kontrollrahmens mit klarer Trennung zwischen operativer Verantwortung (1st Line), unabhängiger Kontrolle (2nd Line) und interner Revision (3rd Line).\n• Comprehensive Policy Framework: Entwicklung detaillierter Richtlinien und Verfahren, die alle Aspekte der FRTB-Implementierung abdecken – von Modellentwicklung und -validierung über Datenmanagement bis hin zu Berichtsprozessen.\n• Model Governance Committee: Etablierung eines spezialisierten Gremiums zur Überwachung aller modellbezogenen Aspekte, einschließlich Modellentwicklung, -validierung, -änderungen und -monitoring.\n\n🔄 Transformative Risikomanagement-Prozesse:\n• Integriertes Limit-Management: Entwicklung eines mehrstufigen Limit-Frameworks, das FRTB-Kapitalanforderungen direkt mit operativen Handelsaktivitäten verknüpft und eine granulare Risikosteuerung ermöglicht.\n• Continuous Model Monitoring: Implementation eines proaktiven Monitoring-Systems, das die Performance kritischer Modellkomponenten kontinuierlich überwacht und frühzeitige Warnsignale für potenzielle Compliance-Issues liefert.\n• Scenario Analysis und Stress Testing: Etablierung eines robusten Frameworks für Szenarioanalysen und Stresstests, das die Auswirkungen extremer Marktbewegungen auf FRTB-Kapitalanforderungen quantifiziert.\n• Integrated Capital Planning: Integration der FRTB-Kapitalanforderungen in Ihre übergreifenden Kapitalplanungs- und -allokationsprozesse, um eine strategische Steuerung der Kapitaleffizienz zu ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute die Daten- und Systemanforderungen für die FRTB-Implementierung bewältigen und welche architektonischen Ansätze empfiehlt ADVISORI?",
        answer: "Die FRTB-Implementierung stellt beispiellose Anforderungen an die Daten- und System-Infrastruktur von Finanzinstituten, die weit über traditionelle Marktrisiko-Frameworks hinausgehen. Eine strategische, zukunftsorientierte Architektur ist entscheidend, um nicht nur regulatorische Compliance zu erreichen, sondern auch die Grundlage für operative Effizienz und strategische Flexibilität zu schaffen.\n\n📊 Transformative Daten- und Systemanforderungen unter FRTB:\n• Datenintegration und -harmonisierung: FRTB erfordert eine nahtlose Integration von Marktdaten, Positionsdaten und Bewertungsdaten aus unterschiedlichen Quellsystemen, mit konsistenten Definitionen und Taxonomien über alle Systeme hinweg.\n• Datenqualität und -governance: Die stringenten Anforderungen an Risikofaktor-Modellierbarkeit und P&L-Attribution erfordern ein robustes Datenqualitätsmanagement mit klaren Verantwortlichkeiten und automatisierten Validierungsprozessen.\n• Berechnungskapazität und Performance: Die rechenintensiven FRTB-Anforderungen – insbesondere für den IMA mit Expected Shortfall über multiple Liquiditätshorizonte – stellen extreme Anforderungen an die Berechnungsinfrastruktur.\n• Flexibilität und Skalierbarkeit: Die kontinuierliche Evolution der regulatorischen Anforderungen und Marktpraktiken erfordert eine flexible, skalierbare Architektur, die schnelle Anpassungen und Erweiterungen ermöglicht.\n\n🔧 ADVISORI's architektonische Lösungsansätze:\n• Hub-and-Spoke Data Architecture: Wir empfehlen eine zentralisierte Datenarchitektur mit einem Golden Source Repository für alle FRTB-relevanten Daten, das als Single Point of Truth für alle downstream Prozesse dient.\n• Microservices-basierte Berechnungsarchitektur: Unsere Referenzarchitektur nutzt einen Microservices-Ansatz, der modulare, skalierbare Komponenten für verschiedene Berechnungsschritte kombiniert und horizontale Skalierung ermöglicht.\n• Hybrid-Computing-Strategien: Wir haben spezialisierte Lösungen entwickelt, die On-Premise-Hochleistungsrechner mit Cloud-basierten Ressourcen für Spitzenlasten kombinieren, um Kosteneffizienz und Performance zu optimieren.\n• Data Lineage und Auditability: Unsere Architekturansätze integrieren end-to-end Data Lineage, die vollständige Transparenz und Nachvollziehbarkeit von Datenquellen bis zu finalen Kapitalberechnungen sicherstellt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Herausforderungen stellt FRTB für verschiedene Assetklassen und wie variieren die Auswirkungen der Standardansatz- vs. IMA-Entscheidung je nach Handelsstrategie?",
        answer: "Die Auswirkungen von FRTB variieren erheblich zwischen verschiedenen Assetklassen und Handelsstrategien, was zu fundamentalen Unterschieden in der optimalen Methodenwahl führen kann. Ein differenzierter, assetklassen-spezifischer Ansatz ist entscheidend, um die Kapitaleffizienz zu maximieren und strategische Geschäftsentscheidungen zu unterstützen.\n\n📈 Assetklassen-spezifische FRTB-Implikationen:\n• Fixed Income und Zinsderivate: Diese Assetklasse ist besonders betroffen durch die verschärften FRTB-Anforderungen für Basisrisiken und Credit Spread-Risiken. Der Standardansatz führt oft zu signifikanten Kapitalaufschlägen für komplexe Zinsderivate, während der IMA Diversifikationsvorteile bieten kann, aber mit erheblichen Herausforderungen bei der Modellierbarkeit illiquider Risikofaktoren verbunden ist.\n• Credit Trading: Die Behandlung von Kreditrisiken unter FRTB stellt eine fundamentale Veränderung dar, mit signifikanten Kapitalaufschlägen besonders für illiquide Kredite und strukturierte Kreditprodukte. Der Standardansatz kann für bestimmte Kreditstrategien prohibitiv teuer sein, während der IMA-Ansatz komplex in der Implementierung ist.\n• FX und Commodities: Diese Assetklassen weisen tendenziell eine höhere Risikofaktor-Modellierbarkeit auf, was den IMA attraktiver macht. Jedoch können bestimmte Emerging Markets-Währungen und illiquide Commodity-Exposures erhebliche NMRF-Aufschläge unter dem IMA generieren.\n• Equity-Derivate und strukturierte Produkte: Komplexe Equity-Derivate erfahren unter dem Standardansatz oft signifikante Kapitalaufschläge, insbesondere durch die konservative Behandlung von Vega- und Curvature-Risiken. Der IMA kann für diese Produkte erhebliche Vorteile bieten, sofern die zugrundeliegenden Risikofaktoren modellierbar sind.\n\n🧩 Handelsstrategie-spezifische Methodenimplikationen:\n• Market-Making vs. Directional Trading: Market-Making-Strategien mit diversen, oft offsettenden Positionen profitieren tendenziell stärker vom IMA durch Diversifikationseffekte, während direktionale Strategien auch unter dem Standardansatz effizient sein können.\n• Komplexität vs. Standardisierung: Händler komplexer, strukturierter Produkte sehen oft dramatisch unterschiedliche Kapitalanforderungen zwischen SA und IMA, während Händler standardisierter Produkte geringere Differenzen erfahren.\n• Liquiditätsspektrum: Strategien, die sich auf hochliquide Märkte konzentrieren, haben typischerweise eine höhere Risikofaktor-Modellierbarkeit und sind damit besser für den IMA geeignet, während Strategien in illiquiden Nischenmärkten unter dem IMA durch NMRF-Aufschläge benachteiligt sein können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Integration der FRTB-Anforderungen in die übergreifende Geschäfts- und Risikostrategie eines Finanzinstituts?",
        answer: "Die erfolgreiche Integration der FRTB-Anforderungen in Ihre übergreifende Geschäfts- und Risikostrategie geht weit über regulatorische Compliance hinaus – sie erfordert eine strategische Neuausrichtung, die regulatorische Anforderungen mit Ihren Geschäftszielen harmonisiert und FRTB als strategischen Enabler positioniert, nicht als regulatorisches Hindernis.\n\n🔄 Strategische Integrationsansätze für FRTB:\n• Business Impact Analysis: Umfassende Bewertung der Auswirkungen verschiedener FRTB-Implementierungsszenarien auf Ihre Geschäftsstrategie, Produktangebot, Kundenbeziehungen und Wettbewerbsposition als Grundlage für strategische Entscheidungen.\n• Strategic Portfolio Optimization: Entwicklung einer optimierten Portfoliostrategie, die FRTB-Kapitaleffizienz mit Ihren strategischen Geschäftszielen in Einklang bringt und kapitalintensive Aktivitäten gezielt auf Bereiche mit hohem strategischem Wert fokussiert.\n• Integrated Capital Allocation Framework: Implementation eines kapitalbasierten Steuerungsrahmens, der FRTB-Kapitalanforderungen direkt in Ihre Ressourcenallokation, Performancemessung und Vergütungssysteme integriert.\n• Proactive Regulatory Strategy: Entwicklung einer proaktiven regulatorischen Strategie, die Ihre FRTB-Implementierung als Teil einer umfassenderen regulatorischen Positionierung betrachtet und gezielt regulatorische Dialoge und Brancheninitiativen nutzt.\n\n🛠️ ADVISORI's ganzheitlicher Unterstützungsansatz:\n• Executive Alignment Workshops: Wir führen spezialisierte Workshops mit Ihrem Executive Team durch, um ein gemeinsames Verständnis der strategischen FRTB-Implikationen zu entwickeln und Ihre FRTB-Strategie mit der Unternehmensstrategie zu harmonisieren.\n• Integrated Implementation Roadmap: Wir entwickeln eine integrierte Implementierungs-Roadmap, die technische, methodische und strategische Aspekte kombiniert und eine phasenweise Transformation mit klaren Meilensteinen und Entscheidungspunkten definiert.\n• Strategic Communication Support: Wir unterstützen Sie bei der Entwicklung einer effektiven Kommunikationsstrategie für interne und externe Stakeholder, einschließlich Mitarbeiter, Kunden, Investoren und Aufsichtsbehörden.\n• Ongoing Strategic Advisory: Über die initiale Implementierung hinaus bieten wir kontinuierliche strategische Beratung, die sicherstellt, dass Ihre FRTB-Strategie mit sich ändernden regulatorischen Anforderungen, Marktbedingungen und strategischen Prioritäten Schritt hält."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
