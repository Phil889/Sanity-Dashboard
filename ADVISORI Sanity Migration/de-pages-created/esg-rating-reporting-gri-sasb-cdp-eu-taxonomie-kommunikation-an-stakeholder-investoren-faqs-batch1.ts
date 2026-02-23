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
    console.log('Updating ESG Rating Reporting page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-rating-reporting-gri-sasb-cdp-eu-taxonomie-kommunikation-an-stakeholder-investoren' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-rating-reporting-gri-sasb-cdp-eu-taxonomie-kommunikation-an-stakeholder-investoren" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG-Berichterstattung nach GRI, SASB und CDP für die C-Suite heute ein strategischer Imperativ und wie positioniert ADVISORI Ihr Unternehmen optimal?",
        answer: "Für die C-Suite repräsentiert professionelle ESG-Berichterstattung heute weit mehr als regulatorische Compliance – sie ist ein entscheidender Faktor für Unternehmensbewertung, Kapitalkosten und strategische Marktpositionierung. Rating-Agenturen wie MSCI, Sustainalytics und S&P Global bewerten Unternehmen zunehmend nach ihrer ESG-Performance, was direkten Einfluss auf Investitionsentscheidungen und Finanzierungskonditionen hat. ADVISORI versteht diese Dynamik und hilft Ihnen dabei, ESG von einem Compliance-Thema zu einem strategischen Wertschöpfungsinstrument zu transformieren.\n\n🎯 Strategische Vorteile erstklassiger ESG-Berichterstattung:\n• Verbesserter Kapitalmarktzugang: Institutionelle Investoren mit über €30 Billionen Assets under Management bevorzugen ESG-konforme Investments, was zu besseren Finanzierungskonditionen und erhöhter Liquidität führt.\n• Risikominimierung und Compliance: Proaktive Erfüllung der EU-Taxonomie und CSRD-Anforderungen reduziert regulatorische Risiken und vermeidet kostspielige Nachbesserungen.\n• Marktdifferenzierung und Wettbewerbsvorteile: Transparente ESG-Kommunikation stärkt die Marktposition und eröffnet neue Geschäftschancen in nachhaltigkeitsorientierten Märkten.\n• Stakeholder-Vertrauen und Reputation: Glaubwürdige ESG-Berichterstattung erhöht das Vertrauen von Kunden, Mitarbeitern und Geschäftspartnern.\n\n🏆 Der ADVISORI-Ansatz für ESG-Excellence:\n• Strategische Integration: Wir verknüpfen ESG-Metriken direkt mit Ihren Geschäftszielen und KPIs, um nachhaltigen Unternehmenswert zu schaffen.\n• Multi-Standard-Expertise: Unsere Beratung umfasst alle relevanten Frameworks (GRI, SASB, CDP, EU-Taxonomie) und optimiert Ihre Performance across verschiedenen Rating-Systemen.\n• Datenqualität und Glaubwürdigkeit: Wir implementieren robuste Datensammlung- und Validierungsprozesse, die den höchsten Transparenz- und Genauigkeitsstandards entsprechen.\n• Kommunikationsexzellenz: Entwicklung einer überzeugenden ESG-Narrative, die Ihre Nachhaltigkeitsleistung optimal an verschiedene Stakeholder-Gruppen kommuniziert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Return on Investment unserer ESG-Berichterstattung und welche direkten Auswirkungen hat dies auf unsere Finanzierungskosten und Unternehmensbewertung?",
        answer: "Die Investition in professionelle ESG-Berichterstattung durch ADVISORI generiert messbare, quantifizierbare Renditen, die sich direkt in Ihren Finanzkennzahlen widerspiegeln. Studien zeigen, dass Unternehmen mit Top-Quartile ESG-Ratings durchschnittlich 20-40 Basispunkte niedrigere Finanzierungskosten erzielen und eine um 10-15% höhere Unternehmensbewertung aufweisen. Unsere datengetriebene Herangehensweise macht diese Vorteile für Ihr Unternehmen konkret messbar und planbar.\n\n💰 Direkte finanzielle Vorteile durch ESG-Excellence:\n• Reduzierte Kapitalkosten: Verbesserte ESG-Ratings führen zu niedrigeren Zinssätzen bei Krediten und Anleihen. Bloomberg-Studien zeigen Einsparungen von 10-50 Basispunkten bei Investment-Grade-Unternehmen.\n• Erhöhte Unternehmensbewertung: ESG-führende Unternehmen handeln mit durchschnittlich 10-15% höheren Bewertungsmultiplen, was bei M&A-Transaktionen oder IPOs erheblichen Mehrwert generiert.\n• Erweiterte Investorenbasis: Zugang zu ESG-fokussierten Fonds und nachhaltigen Investmentprodukten, die über €35 Billionen Assets under Management repräsentieren.\n• Versicherungsvorteile: Bessere Konditionen bei Directors & Officers Insurance und anderen Unternehmensversicherungen aufgrund demonstrierter Governance-Qualität.\n\n📊 ADVISORI's ROI-Messrahmen:\n• Baseline-Assessment: Wir etablieren klare Ausgangswerte für Ihre aktuellen Finanzierungskosten, Rating-Positionen und Marktbewertung.\n• Performance-Tracking: Kontinuierliche Überwachung von ESG-Rating-Verbesserungen und deren Korrelation zu finanziellen Kennzahlen.\n• Benchmark-Analysen: Vergleich Ihrer ESG-Performance mit Peer-Unternehmen und Quantifizierung des Verbesserungspotentials.\n• Stakeholder-Value-Messung: Analyse der Auswirkungen auf Kundenbindung, Talentakquisition und Lieferantenbeziehungen.\n• C-Level-Dashboards: Regelmäßige Reports, die ESG-Investments direkt mit finanziellen Outcomes verknüpfen und ROI transparent darstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die EU-Taxonomie und CSRD stellen neue regulatorische Herausforderungen dar. Wie positioniert ADVISORI unser Unternehmen proaktiv für diese Anforderungen und welche Wettbewerbsvorteile entstehen?",
        answer: "Die EU-Taxonomie und Corporate Sustainability Reporting Directive (CSRD) repräsentieren die größte Transformation in der europäischen Nachhaltigkeitsregulierung seit Jahrzehnten. Für die C-Suite bedeutet dies sowohl erhebliche Compliance-Herausforderungen als auch einzigartige Chancen zur Marktdifferenzierung. ADVISORI positioniert Ihr Unternehmen nicht nur compliant, sondern als Marktführer in der nachhaltigen Transformation, wodurch Sie von First-Mover-Vorteilen profitieren.\n\n🏛️ Regulatorische Komplexität meistern:\n• EU-Taxonomie-Konformität: Detaillierte Analyse Ihrer Geschäftstätigkeiten gegen die sechs Umweltziele und technischen Bewertungskriterien, um maximale Taxonomie-Eligibility und -Alignment zu erreichen.\n• CSRD-Implementierung: Vollständige Vorbereitung auf die erweiterten Berichtspflichten mit doppelter Wesentlichkeitsanalyse und standardisierten Nachhaltigkeitsinformationen.\n• ESRS-Standards: Expertise in allen 12 European Sustainability Reporting Standards für konsistente und vergleichbare Berichterstattung.\n• Prüfungsbereitschaft: Strukturierung Ihrer ESG-Daten und -Prozesse für die obligatorische externe Prüfung der Nachhaltigkeitsberichterstattung.\n\n🚀 Wettbewerbsvorteile durch proaktive Positionierung:\n• Market Leadership: Als einer der ersten in Ihrer Branche CSRD-konform zu berichten, etabliert Sie als Nachhaltigkeitsführer und zieht ESG-bewusste Kunden und Partner an.\n• Operational Excellence: Die Implementierung robuster ESG-Datenmanagement-Systeme verbessert interne Effizienz und Entscheidungsfindung.\n• Supply Chain Leverage: Ihre ESG-Excellence befähigt Sie, höhere Standards von Lieferanten zu fordern und nachhaltige Lieferketten aufzubauen.\n• Innovation Catalyst: ESG-Fokus treibt Innovation in Produkten, Services und Geschäftsmodellen voran, eröffnet neue Marktsegmente.\n\n⚡ ADVISORI's Proaktiv-Strategie:\n• Regulatory Intelligence: Kontinuierliches Monitoring regulatorischer Entwicklungen und frühzeitige Anpassung Ihrer Strategien.\n• Technology Integration: Implementierung modernster ESG-Management-Plattformen für automatisierte Datensammlung und -berichterstattung.\n• Stakeholder Alignment: Vorbereitung aller internen Teams und externen Partner auf die neuen Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie entwickelt ADVISORI eine überzeugende ESG-Kommunikationsstrategie, die verschiedene Stakeholder-Gruppen optimal anspricht und unser Unternehmen differenziert?",
        answer: "Effektive ESG-Kommunikation ist eine Kunst, die weit über die reine Datenübermittlung hinausgeht. Für die C-Suite ist es entscheidend, eine kohärente und überzeugende Narrative zu entwickeln, die Ihre Nachhaltigkeitsleistung authentisch vermittelt und gleichzeitig verschiedene Stakeholder-Gruppen mit ihren spezifischen Erwartungen und Informationsbedürfnissen adressiert. ADVISORI entwickelt maßgeschneiderte Kommunikationsstrategien, die Ihre ESG-Performance optimal positionieren und nachhaltigen Stakeholder-Value schaffen.\n\n🎭 Stakeholder-spezifische Kommunikationsexzellenz:\n• Investoren und Analysten: Datengetriebene, quantitative ESG-Metriken mit klaren Performance-Trends und Forward-Looking-Statements, die Investment-Thesen unterstützen.\n• Regulatoren und Aufsichtsbehörden: Präzise, compliance-fokussierte Berichterstattung, die Transparenz demonstriert und regulatorische Risiken minimiert.\n• Kunden und Verbraucher: Emotionale, wertebasierte Kommunikation, die Ihre Nachhaltigkeitsbemühungen in verständliche, relevante Botschaften übersetzt.\n• Mitarbeiter und Talente: Authentische Darstellung Ihrer Purpose-driven-Kultur und konkreter ESG-Initiativen, die Mitarbeiterstolz und -engagement fördern.\n\n📱 Multi-Channel-Kommunikationsstrategie:\n• Integrierte Berichterstattung: Entwicklung von Nachhaltigkeitsberichten, die ESG-Performance nahtlos mit finanzieller Performance verknüpfen.\n• Digital Storytelling: Moderne, interaktive Online-Plattformen und Social Media Strategien für erhöhte Reichweite und Engagement.\n• Investor Relations Integration: Einbindung von ESG-Metriken in Earnings Calls, Investor Days und Roadshows für konsistente Messaging.\n• Crisis Communication Preparedness: Proaktive Entwicklung von Kommunikationsprotokollen für ESG-bezogene Herausforderungen oder Kontroversen.\n\n🏆 ADVISORI's Kommunikations-Framework:\n• Materiality-driven Messaging: Fokussierung auf die für Ihr Unternehmen und Ihre Stakeholder wichtigsten ESG-Themen.\n• Authenticity Validation: Sicherstellung, dass alle Kommunikation durch solide Daten und glaubwürdige Nachweise untermauert ist.\n• Competitive Differentiation: Identifikation und Hervorhebung Ihrer einzigartigen ESG-Stärken gegenüber Wettbewerbern.\n• Continuous Optimization: Regelmäßige Analyse der Kommunikationseffektivität und Anpassung basierend auf Stakeholder-Feedback und Marktentwicklungen."
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
