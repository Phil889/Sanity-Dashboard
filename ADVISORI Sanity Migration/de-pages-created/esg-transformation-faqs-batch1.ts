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
    console.log('Updating ESG Transformation page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-transformation' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-transformation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG Transformation für die C-Suite eine strategische Notwendigkeit und wie unterstützt ADVISORI bei der Schaffung von nachhaltigem Unternehmenswert?",
        answer: "ESG Transformation ist heute für die C-Suite weit mehr als eine Compliance-Anforderung – sie ist ein fundamentaler Werttreiber und strategischer Imperativ. Für CEOs, CFOs und andere Führungskräfte bedeutet eine erfolgreiche ESG-Integration die Sicherung der langfristigen Wettbewerbsfähigkeit und die Erschließung neuer Wachstumschancen in einer sich wandelnden Geschäftswelt. ADVISORI versteht ESG als strategischen Hebel zur nachhaltigen Wertsteigerung.\n\n🎯 Strategische Imperative für die C-Suite:\n• Zugang zu Kapital und bessere Finanzierungskonditionen: Investoren und Kreditgeber bewerten ESG-Performance zunehmend als Risikofaktor und Wertindikator\n• Regulatorische Compliance und Risikominimierung: Proaktive Erfüllung sich verschärfender ESG-Regulierung (EU-Taxonomie, CSRD, SFDR) zur Vermeidung von Strafen und Reputationsschäden\n• Marktdifferenzierung und Kundengewinnung: Verbraucher und B2B-Kunden bevorzugen zunehmend nachhaltige Anbieter\n• Talentgewinnung und -bindung: Top-Talente wählen Arbeitgeber basierend auf deren ESG-Reputation und Purpose\n\n🌟 Der ADVISORI-Ansatz für strategische ESG-Transformation:\n• Integrierte Wertschöpfungsbetrachtung: Wir entwickeln ESG-Strategien, die unmittelbar mit Ihren Geschäftszielen und Wertschöpfungsmodellen verknüpft sind\n• Datengetriebene Entscheidungsfindung: Implementierung von ESG-Analytics und KPI-Systemen, die der C-Suite klare Einblicke in Performance und ROI liefern\n• Stakeholder-zentrierte Herangehensweise: Systematisches Engagement mit Investoren, Kunden, Mitarbeitern und Regulatoren zur Maximierung des ESG-Impacts\n• Innovation durch Nachhaltigkeit: Identifikation und Entwicklung neuer Geschäftsmodelle und Einnahmequellen durch ESG-fokussierte Innovation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir den ROI unserer ESG-Investitionen messen und welche konkreten finanziellen Vorteile bietet ADVISORI's ESG Transformation für unsere EBITDA-Performance?",
        answer: "Die Messung des ROI von ESG-Investitionen erfordert einen multidimensionalen Ansatz, der sowohl quantitative finanzielle Metriken als auch qualitative Werttreiber berücksichtigt. ADVISORI entwickelt maßgeschneiderte ESG-ROI-Frameworks, die der C-Suite klare Sichtbarkeit über die finanziellen Auswirkungen nachhaltiger Geschäftspraktiken bieten und direkte Verbindungen zur EBITDA-Performance herstellen.\n\n💰 Direkte finanzielle Auswirkungen auf EBITDA:\n• Kosteneinsparungen durch Effizienzsteigerungen: Energieoptimierung, Abfallreduzierung und Ressourceneffizienz können die operativen Kosten um 10-25% senken\n• Premiumpreisgestaltung: Nachhaltige Produkte und Services erzielen durchschnittlich 15-20% höhere Margen als konventionelle Alternativen\n• Reduzierte Kapitalkosten: Unternehmen mit starker ESG-Performance profitieren von 0,5-1% niedrigeren Finanzierungskosten\n• Vermeidung von Strafzahlungen und Compliance-Kosten: Proaktive ESG-Compliance verhindert kostspielige Regulierungsstrafen und Rechtsstreitigkeiten\n\n📊 ADVISORI's ESG-ROI-Measurement-Framework:\n• Baseline-Assessment und Zielsetzung: Etablierung messbarer ESG-KPIs mit direktem Bezug zu finanziellen Kennzahlen\n• Integrierte Reporting-Systeme: Entwicklung von Dashboards, die ESG-Metriken mit traditionellen Finanzmetriken verknüpfen\n• Szenario-Modellierung: Quantifizierung verschiedener ESG-Investitionsszenarien und deren Auswirkungen auf Unternehmenswert\n• Stakeholder-Value-Assessment: Bewertung der Auswirkungen von ESG-Maßnahmen auf Kundenzufriedenheit, Mitarbeiterbindung und Investorenwahrnehmung\n• Benchmark-Analyse: Vergleich der ESG-Performance mit Branchenführern zur Identifikation von Wertschöpfungspotenzialen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unsere ESG-Transformation authentisch ist und nicht als 'Greenwashing' wahrgenommen wird, während sie gleichzeitig messbare Geschäftsergebnisse liefert?",
        answer: "Authentizität in der ESG-Transformation ist entscheidend für den langfristigen Erfolg und das Vertrauen der Stakeholder. ADVISORI verfolgt einen evidenzbasierten Ansatz, der auf substanziellen Veränderungen in Geschäftspraktiken und -modellen basiert, nicht nur auf Marketing-Kommunikation. Wir helfen Unternehmen dabei, glaubwürdige und messbare ESG-Fortschritte zu erzielen, die sowohl ethischen Standards als auch Geschäftszielen entsprechen.\n\n🔍 ADVISORI's Authentizitäts-Framework:\n• Materialitätsbasierte Strategieentwicklung: Fokussierung auf ESG-Themen, die für Ihr Geschäftsmodell und Ihre Stakeholder tatsächlich relevant und einflussreich sind\n• Science-based Targets: Entwicklung von ESG-Zielen, die auf wissenschaftlichen Erkenntnissen und international anerkannten Standards basieren\n• Transparente Berichterstattung: Implementation von robusten Mess- und Berichtssystemen, die sowohl Fortschritte als auch Herausforderungen offen kommunizieren\n• Third-Party-Verifizierung: Etablierung unabhängiger Prüfungs- und Zertifizierungsprozesse zur externen Validierung der ESG-Performance\n\n⚖️ Balance zwischen Authentizität und Geschäftsergebnissen:\n• Integrierte Geschäftsmodell-Innovation: Entwicklung nachhaltiger Geschäftsmodelle, die inherent profitabel und umweltfreundlich sind\n• Stakeholder-Engagement-Programme: Systematische Einbindung von Kunden, Mitarbeitern und Gemeinden in ESG-Initiativen zur Erhöhung der Glaubwürdigkeit\n• Langfristige Commitment-Strukturen: Etablierung von Governance-Mechanismen, die ESG-Ziele in Vergütungssysteme und strategische Planung einbetten\n• Kontinuierliche Verbesserung: Implementation von Feedback-Schleifen und Anpassungsmechanismen, die eine authentische und evolutionäre ESG-Entwicklung ermöglichen\n• Branchenführerschaft: Positionierung als Vorreiter in nachhaltigen Praktiken durch innovative Lösungen und Best-Practice-Sharing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI dabei, ESG-Transformation als Wettbewerbsvorteil zu nutzen und neue Marktchancen zu erschließen, anstatt sie nur als Kostenfaktor zu betrachten?",
        answer: "ESG-Transformation bietet enormes Potenzial für Wettbewerbsdifferenzierung und Marktexpansion, wenn sie strategisch als Wachstumstreiber positioniert wird. ADVISORI hilft Unternehmen dabei, Nachhaltigkeit von einem Kostenzentrum zu einem Profit-Center zu transformieren, indem wir innovative Geschäftsmodelle entwickeln und neue Einnahmequellen durch ESG-Excellence erschließen.\n\n🚀 ESG als strategischer Wachstumstreiber:\n• Neue Produkt- und Serviceinnovationen: Entwicklung nachhaltiger Lösungen, die neue Kundensegmente erschließen und Premium-Pricing ermöglichen\n• Marktführerschaft in Zukunftsmärkten: Frühzeitige Positionierung in wachsenden Segmenten wie Clean Tech, Circular Economy und Impact Investing\n• Supply Chain Optimization: Transformation der Lieferkette als Quelle für Kosteneinsparungen und Risikominimierung\n• Digital ESG Solutions: Nutzung von Technologie (IoT, AI, Blockchain) zur Skalierung nachhaltiger Geschäftspraktiken\n\n💡 ADVISORI's Opportunity-Identification-Framework:\n• Market Intelligence und Trendanalyse: Identifikation aufkommender ESG-getriebener Marktchancen und Geschäftsmodelle\n• Customer Journey Mapping: Analyse sich wandelnder Kundenbedürfnisse und Zahlungsbereitschaft für nachhaltige Lösungen\n• Partnership Ecosystem Development: Aufbau strategischer Allianzen mit ESG-fokussierten Unternehmen und Organisationen\n• Innovation Labs für Nachhaltigkeit: Etablierung interner Inkubatoren für die Entwicklung nachhaltiger Geschäftsideen\n• ESG-driven M&A Strategy: Identifikation von Akquisitionsmöglichkeiten, die sowohl ESG-Ziele als auch Wachstumsambitionen unterstützen\n• Stakeholder Monetization: Entwicklung von Geschäftsmodellen, die positive ESG-Auswirkungen direkt monetarisieren"
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
