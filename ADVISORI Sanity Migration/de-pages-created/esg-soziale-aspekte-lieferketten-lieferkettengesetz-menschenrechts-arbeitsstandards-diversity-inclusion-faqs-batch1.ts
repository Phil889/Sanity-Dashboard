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
    console.log('Updating ESG Soziale Aspekte page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die Integration sozialer ESG-Aspekte für die C-Suite heute mehr als nur Risikomanagement und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte stellen soziale ESG-Aspekte eine fundamentale Neuausrichtung der Unternehmensführung dar, die weit über klassisches Risikomanagement hinausgeht. In einer Zeit, in der gesellschaftliche Erwartungen, regulatorische Anforderungen und Investorenpräferenzen konvergieren, werden soziale Verantwortung und nachhaltige Geschäftspraktiken zu entscheidenden Werttreibern. ADVISORI positioniert diese Transformation als strategischen Imperativ für zukunftsfähige Unternehmen.\n\n🎯 Strategische Dimensionen sozialer ESG-Excellence:\n• Talent-Magnetismus und Retention: Unternehmen mit starken sozialen ESG-Praktiken ziehen Top-Talente an und reduzieren Mitarbeiterfluktuation um durchschnittlich 25%, was direkten Einfluss auf Produktivität und Innovationskraft hat.\n• Kapitalmarktzugang und Bewertungsprämien: Institutionelle Investoren allokieren zunehmend Kapital basierend auf ESG-Performance, wodurch Unternehmen mit excellenter sozialer Performance Zugang zu günstigerem Kapital und höheren Bewertungen erhalten.\n• Marktpositionierung und Kundenloyalität: Konsumenten und B2B-Kunden bevorzugen zunehmend Unternehmen mit authentischen sozialen Werten, was sich in höheren Margen und stärkerer Kundenbindung niederschlägt.\n• Regulatorische Antizipation: Proaktive soziale ESG-Implementierung positioniert Unternehmen als Vorreiter und reduziert Compliance-Risiken bei sich verschärfenden Regularien wie dem Lieferkettengesetz.\n\n🚀 ADVISORI's transformativer Ansatz für soziale ESG-Excellence:\n• Value Creation Framework: Wir entwickeln maßgeschneiderte Frameworks, die soziale ESG-Initiativen direkt mit Geschäftswert verknüpfen und messbare Beiträge zu EBITDA, Marktanteil und Unternehmensbewertung demonstrieren.\n• Stakeholder Ecosystem Design: Aufbau integrierter Stakeholder-Ökosysteme, die Mitarbeiter, Kunden, Lieferanten und Gemeinschaften als strategische Partner für nachhaltiges Wachstum einbinden.\n• Cultural Transformation Leadership: Begleitung der C-Suite bei der Entwicklung authentischer Führungskultur, die soziale Werte als Kern der Unternehmensstrategie verankert und als Differenzierungsmerkmal im Markt etabliert.\n• Innovation durch Purpose: Integration sozialer Impact-Ziele in Innovationsprozesse, wodurch neue Geschäftsmodelle, Märkte und Wertschöpfungsketten erschlossen werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert und maximiert ADVISORI den ROI sozialer ESG-Investitionen und welche konkreten finanziellen Auswirkungen können Vorstände erwarten?",
        answer: "Die Quantifizierung des Return on Investment (ROI) sozialer ESG-Maßnahmen erfordert einen sophistizierten Ansatz, der sowohl direkte finanzielle Effekte als auch indirekte Werttreiber erfasst. ADVISORI hat methodische Frameworks entwickelt, die soziale ESG-Investitionen in messbare Geschäftsergebnisse übersetzen und C-Level-Entscheidern datenbasierte Grundlagen für strategische Allokationsentscheidungen liefern.\n\n💰 Direkte finanzielle Werttreiber sozialer ESG-Excellence:\n• Operative Effizienzgewinne: Diversity & Inclusion-Programme steigern Teamproduktivität um 15-25%, während verbesserte Arbeitsbedingungen Krankenstand und Fehlerquoten signifikant reduzieren.\n• Talentakquisitions- und Retentionskostenreduktion: Starke soziale ESG-Performance reduziert Rekrutierungskosten um 30-40% und Fluktuationskosten um 25-35% durch erhöhte Arbeitgeberattraktivität.\n• Risikokostenminimierung: Proaktives Lieferkettenmanagement und Menschenrechts-Due-Diligence reduzieren Reputationsrisiken, potenzielle Bußgelder und Litigationskosten um durchschnittlich 60-80%.\n• Premium-Pricing-Möglichkeiten: Nachweisbare soziale Verantwortung ermöglicht 5-15% höhere Preisdurchsetzung bei B2B- und B2C-Kunden.\n\n📈 Indirekte Wertsteigerung und strategische Vorteile:\n• Kapitalkosten-Optimierung: ESG-führende Unternehmen profitieren von 0,5-1,5 Prozentpunkten niedrigeren Kapitalkosten durch bevorzugte Behandlung bei ESG-fokussierten Investoren.\n• Marktwertsteigerung: Studien zeigen 10-20% höhere Marktbewertungen für Unternehmen mit excellenter sozialer ESG-Performance im Vergleich zu Branchendurchschnitt.\n• Innovationskapazität: Diverse, inklusive Teams generieren 25-40% mehr innovative Lösungen und erschließen neue Marktsegmente durch besseres Verständnis unterschiedlicher Kundenbedürfnisse.\n• Resilienz und Krisenresistenz: Unternehmen mit starken sozialen Bindungen zu Stakeholdern zeigen 15-30% bessere Performance in Krisenzeiten.\n\n🔬 ADVISORI's ROI-Quantifizierungsansatz:\n• Multi-Horizon Value Modeling: Entwicklung dynamischer Bewertungsmodelle, die kurzfristige Investitionskosten mit mittel- und langfristigen Wertschöpfungseffekten verknüpfen und verschiedene Szenarien durchspielen.\n• Stakeholder Value Mapping: Systematische Erfassung und Monetarisierung aller Stakeholder-bezogenen Werteffekte von Mitarbeiterproduktivität über Kundenloyalität bis zu Investorenvertrauen.\n• Benchmark-basierte Performance-Messung: Vergleichsanalysen mit Best-in-Class-Unternehmen und Branchen-Peers zur Identifikation von Performance-Gaps und Verbesserungspotenzialen.\n• Integrierte ESG-Financial-Analytics: Kombination traditioneller Finanzkennzahlen mit ESG-Metriken in einem ganzheitlichen Dashboard für fundierte C-Level-Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Das Lieferkettengesetz und die EU-Lieferkettenrichtlinie schaffen neue Compliance-Realitäten. Wie unterstützt ADVISORI dabei, diese Herausforderungen in strategische Marktchancen zu verwandeln?",
        answer: "Das deutsche Lieferkettengesetz (LkSG) und die kommende EU-Lieferkettenrichtlinie (CSDDD) schaffen eine neue regulatorische Landschaft, die fundamentale Veränderungen in der Art erfordert, wie Unternehmen ihre Lieferketten verstehen, steuern und verantworten. ADVISORI transformiert diese regulatorischen Anforderungen von Compliance-Belastungen zu strategischen Differenzierungsmerkmalen und Marktchancen.\n\n⚖️ Regulatorische Transformation als Wettbewerbsvorteil:\n• First-Mover-Excellence: Unternehmen, die proaktiv über die Mindestanforderungen hinausgehen, etablieren sich als Industrieführer und setzen neue Standards, die kleinere Wettbewerber unter Druck setzen.\n• Supply Chain Resilience: Intensive Due-Diligence-Prozesse identifizieren nicht nur Risiken, sondern auch Optimierungspotenziale, alternative Lieferanten und innovative Beschaffungsstrategien.\n• Stakeholder Trust Premium: Transparente, nachweisbare Lieferketten-Governance generiert Vertrauen bei Kunden, Investoren und Regulatoren, was sich in besseren Geschäftskonditionen niederschlägt.\n• Innovation Catalyst: Menschenrechts- und Umweltstandards in der Lieferkette treiben Innovationen in Produktdesign, Herstellungsprozessen und Geschäftsmodellen voran.\n\n🔄 ADVISORI's strategischer Compliance-to-Opportunity-Ansatz:\n• Value Chain Reimagining: Vollständige Neukonzeption der Wertschöpfungskette mit sozialen und ökologischen Kriterien als Designparametern, die neue Effizienz- und Differenzierungspotenziale erschließen.\n• Supplier Partnership Excellence: Transformation traditioneller Lieferantenbeziehungen zu strategischen Partnerschaften, die gemeinsame Nachhaltigkeitsziele verfolgen und Innovationen co-entwickeln.\n• Digital Supply Chain Intelligence: Implementation fortschrittlicher Technologien (Blockchain, IoT, AI) für Echtzeit-Transparenz und vorausschauende Risikoerkennung in globalen Lieferketten.\n• Circular Economy Integration: Nutzung der Lieferkettenanalyse als Basis für Kreislaufwirtschafts-Initiativen, die Kosten reduzieren und neue Umsatzquellen schaffen.\n\n🌍 Marktpositionierung durch soziale Lieferketten-Excellence:\n• Premium Brand Building: Nachweisbare ethische Lieferketten als Kern der Markenpositionierung, die Premium-Pricing und Kundenloyalität unterstützen.\n• B2B-Marktdifferenzierung: Compliance-Excellence als Verkaufsargument bei Unternehmenskunden, die selbst regulatorischen Anforderungen unterliegen.\n• Neue Markterschließung: Zugang zu Märkten und Kundensegmenten, die hohe soziale und ökologische Standards voraussetzen.\n• Partnership-Attraktivität: Erhöhte Attraktivität für strategische Partnerschaften und Joint Ventures mit führenden Unternehmen und Organisationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Diversity & Inclusion wird oft als HR-Initiative missverstanden. Wie positioniert ADVISORI D&I als strategischen Business Driver für die gesamte C-Suite?",
        answer: "Diversity & Inclusion (D&I) transzendiert die traditionelle HR-Perspektive und entwickelt sich zu einem fundamentalen Business Driver, der alle Aspekte der Unternehmensstrategie beeinflusst. ADVISORI positioniert D&I als strategischen Imperativ für die gesamte C-Suite, der Innovation, Markterschließung, Risikomanagement und Wertschöpfung nachhaltig transformiert.\n\n💡 D&I als strategischer Business Catalyst:\n• Innovation durch Diversität: Diverse Teams generieren 25-40% mehr innovative Ideen und Lösungsansätze, da unterschiedliche Perspektiven zu kreativeren Problem-solving-Ansätzen führen.\n• Marktverständnis und Kundenzentrierung: Diverse Belegschaften spiegeln die Vielfalt der Kundenbasis wider und ermöglichen authentischere Produktentwicklung und Marktansprache.\n• Entscheidungsqualität: Inklusive Entscheidungsprozesse reduzieren Groupthink und Cognitive Biases, was zu besseren strategischen Entscheidungen und reduzierten Fehlern führt.\n• Talentpool-Maximierung: Inklusiver Ansatz erschließt den gesamten verfügbaren Talentpool und sichert Zugang zu den besten Köpfen unabhängig von Hintergrund oder Identität.\n\n🎯 C-Suite-spezifische D&I-Strategien:\n• CEO-Leadership: D&I als persönliche CEO-Agenda mit direkter Verbindung zu Unternehmensvision und -mission, die authentische Führung und kulturelle Transformation vorantreibt.\n• CFO-Value-Perspective: Quantifizierung der finanziellen Auswirkungen von D&I-Initiativen auf Umsatz, Kosten, Risiko und Kapitaleffizienz mit klaren KPIs und ROI-Metriken.\n• COO-Operational-Excellence: Integration von D&I-Prinzipien in operative Prozesse, Systeme und Strukturen, die Effizienz und Qualität in allen Geschäftsbereichen steigern.\n• CMO-Market-Connection: Nutzung von D&I für authentische Markenpositionierung und differenzierte Marktansprache, die Kundenbindung und Marktanteile stärkt.\n\n🌐 ADVISORI's ganzheitlicher D&I-Business-Ansatz:\n• D&I Business Case Development: Entwicklung spezifischer Business Cases für D&I-Initiativen mit klaren Verbindungen zu Unternehmensstrategie, Marktzielen und finanziellen Ergebnissen.\n• Inclusive Leadership Development: Befähigung der gesamten Führungsebene zu inklusivem Leadership, das diverse Potenziale freisetzt und als Wettbewerbsvorteil nutzt.\n• Data-Driven D&I Analytics: Implementation sophistizierter Analysetools, die D&I-Progress mit Business-Performance verknüpfen und datenbasierte Optimierung ermöglichen.\n• Stakeholder Ecosystem Engagement: Integration von D&I in alle Stakeholder-Beziehungen von Lieferanten über Kunden bis zu Investoren, wodurch umfassende Wertnetzwerke entstehen."
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
