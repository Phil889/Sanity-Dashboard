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
    console.log('Updating ESG Rating page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-rating' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-rating" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum werden ESG Ratings für die C-Suite zu einem kritischen Geschäftsfaktor und wie transformiert ADVISORI unsere ESG Performance strategisch?",
        answer: "ESG Ratings sind längst kein Nice-to-have mehr, sondern ein strategischer Imperativ, der direkten Einfluss auf Kapitalkosten, Investorenzugang und Marktbewertung hat. Für die C-Suite bedeuten bessere ESG Scores nicht nur bessere Compliance, sondern auch konkrete Wettbewerbsvorteile und nachhaltiges Geschäftswachstum. ADVISORI versteht ESG Rating-Optimierung als ganzheitlichen Transformationsprozess.\n\n🎯 Strategische Relevanz für die Unternehmensführung:\n• Kapitalkosten-Optimierung: Unternehmen mit besseren ESG Ratings erhalten Zugang zu günstigerer Finanzierung, Green Bonds und nachhaltigkeitsorientierten Investmentfonds mit über 30 Billionen USD verwalteten Vermögen.\n• Risikomanagement: ESG Ratings spiegeln operative, regulatorische und reputative Risiken wider, die direkte Auswirkungen auf die Unternehmensbewertung und langfristige Profitabilität haben.\n• Marktzugang und Partnerschaften: Viele Großkunden und strategische Partner machen Geschäftsbeziehungen zunehmend von ESG Performance abhängig.\n• Talentgewinnung: Top-Talente bevorzugen Arbeitgeber mit starker ESG Performance, was sich direkt auf Innovationskraft und Wettbewerbsfähigkeit auswirkt.\n\n🚀 ADVISORI's strategischer Transformationsansatz:\n• Rating-Agency-Intelligence: Wir verstehen die spezifischen Methoden und Gewichtungen der wichtigsten Rating-Agenturen (MSCI, Sustainalytics, CDP, etc.) und entwickeln zielgerichtete Verbesserungsstrategien.\n• Business-Case-Entwicklung: Jede ESG-Maßnahme wird mit klaren ROI-Metriken und geschäftlichen Auswirkungen verknüpft, um C-Level-Entscheidungen zu unterstützen.\n• Integrierte Umsetzung: ESG wird nicht als Silo betrachtet, sondern in bestehende Geschäftsprozesse, Risikomanagement und strategische Planung integriert.\n• Stakeholder-Kapitalisierung: Systematische Kommunikation der ESG-Fortschritte an Investoren, Kunden und andere Stakeholder zur Maximierung des reputativen und finanziellen Nutzens."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI von ESG Rating-Verbesserungen und welche direkten finanziellen Auswirkungen sind für unsere Bilanz zu erwarten?",
        answer: "ESG Rating-Verbesserungen haben messbare, direkte finanzielle Auswirkungen, die sich sowohl in Cost-Savings als auch in Revenue-Enhancement manifestieren. ADVISORI entwickelt datengestützte ROI-Modelle, die C-Level-Entscheidern klare Einblicke in die finanzielle Wertschöpfung durch ESG-Exzellenz bieten und fundierte Investitionsentscheidungen ermöglichen.\n\n💰 Direkte finanzielle Werttreiber:\n• Kapitalkosten-Reduktion: Unternehmen mit Top-ESG-Ratings zahlen im Durchschnitt 10-40 Basispunkte weniger für Fremdkapital und erhalten bessere Konditionen bei Kreditlinien und Anleiheemissionen.\n• Versicherungskostenoptimierung: Bessere ESG Scores führen zu reduzierten Prämien bei D&O-, Cyber- und Umweltversicherungen, da geringere Risikoprofile anerkannt werden.\n• Operational Excellence: ESG-fokussierte Prozessoptimierungen (Energieeffizienz, Abfallreduktion, Supply Chain-Optimierung) generieren direkte Kosteneinsparungen von typischerweise 5-15% in relevanten Bereichen.\n• Premium Pricing: Nachhaltigkeitsführer können für ESG-konforme Produkte und Services Premium-Preise durchsetzen und neue Marktsegmente erschließen.\n\n📈 Revenue-Enhancement und Marktchancen:\n• Zugang zu ESG-Investmentfonds: Mit über 30 Billionen USD Assets under Management weltweit eröffnen bessere ESG Ratings Zugang zu diesem wachstumsstarken Kapitalpool.\n• Green Finance Opportunities: Qualifikation für Green Bonds, Sustainability-linked Loans und andere innovative Finanzierungsinstrumente mit attraktiven Konditionen.\n• Marktführerschaft: First-Mover-Advantages in nachhaltigkeitsgetriebenen Märkten und Geschäftsmodellen, die überdurchschnittliche Wachstumsraten versprechen.\n• Kundenloyalität und -gewinnung: 73% der globalen Verbraucher sind bereit, mehr für nachhaltige Produkte zu zahlen, was sich direkt in höheren Margen niederschlägt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die ESG Rating-Landschaft ist komplex und fragmentiert. Wie navigiert ADVISORI durch die verschiedenen Rating-Methoden und maximiert unsere Performance über alle relevanten Agenturen hinweg?",
        answer: "Die ESG Rating-Landschaft ist ein komplexes Ökosystem mit über 600 verschiedenen Rating-Agenturen und Bewertungsmethoden. Jede Agentur hat eigene Methoden, Gewichtungen und Fokusgebiete. ADVISORI bringt Deep-Domain-Expertise mit, um eine kohärente Multi-Rating-Strategie zu entwickeln, die Ihre ESG Performance systematisch über alle relevanten Bewertungsrahmen hinweg optimiert.\n\n🔍 Rating-Agency-Landschaft verstehen und nutzen:\n• Methoden-Mapping: Detaillierte Analyse der spezifischen Bewertungskriterien, Datenquellen und Gewichtungen der für Sie relevanten Rating-Agenturen (MSCI, Sustainalytics, CDP, ISS ESG, Refinitiv, etc.).\n• Impact-Priorisierung: Identifikation der Rating-Agenturen mit der größten Auswirkung auf Ihre Stakeholder (Investoren, Kunden, Regulatoren) und strategische Fokussierung der Verbesserungsmaßnahmen.\n• Cross-Agency-Synergien: Entwicklung von ESG-Maßnahmen, die multiple Rating-Verbesserungen gleichzeitig erzielen und Effizienz maximieren.\n• Timing-Optimierung: Strategische Planung von ESG-Initiativen basierend auf Rating-Update-Zyklen für maximale Sichtbarkeit und Impact.\n\n⚡ ADVISORI's Multi-Rating-Exzellenz-Ansatz:\n• Unified ESG Data Platform: Aufbau eines zentralen ESG-Datenmanagement-Systems, das alle Rating-Anforderungen effizient bedient und Konsistenz über alle Bewertungen gewährleistet.\n• Materiality-Matrix-Optimierung: Entwicklung einer unternehmensspezifischen Materialitäts-Matrix, die sowohl Business-Relevanz als auch Rating-Impact berücksichtigt.\n• Proactive Engagement: Strukturierter Dialog mit Rating-Agenturen zur optimalen Darstellung Ihrer ESG-Performance und proaktive Klärung von Bewertungsfragen.\n• Kontinuierliches Monitoring: Real-time Tracking Ihrer ESG Scores über alle relevanten Agenturen mit sofortiger Identifikation von Verbesserungspotenzialen und Benchmark-Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet ADVISORI, dass unsere ESG Rating-Verbesserungen nicht nur kurzfristige Score-Optimierung sind, sondern nachhaltige Transformation und langfristigen Geschäftswert schaffen?",
        answer: "Authentische ESG-Exzellenz kann nicht durch oberflächliche Score-Hacking erzielt werden. Rating-Agenturen werden immer sophistizierter in der Erkennung von Greenwashing und oberflächlichen Maßnahmen. ADVISORI fokussiert auf systemische Transformation, die sowohl Rating-Verbesserungen als auch operative Exzellenz und langfristige Wertschöpfung ermöglicht.\n\n🌱 Authentic ESG Transformation statt Score-Engineering:\n• Business-Integration: ESG wird nicht als separates Projekt behandelt, sondern als integraler Bestandteil von Geschäftsstrategie, Risikomanagement und operativen Prozessen entwickelt.\n• Systemic Impact: Fokus auf Maßnahmen, die sowohl ESG Scores verbessern als auch operative Effizienz, Innovationskraft und Wettbewerbsfähigkeit stärken.\n• Stakeholder Value Creation: Entwicklung von ESG-Initiativen, die gleichzeitig Mehrwert für Kunden, Mitarbeiter, Gemeinden und Umwelt schaffen.\n• Evidenz-basierte Umsetzung: Alle ESG-Maßnahmen werden mit robusten KPIs, Messsystemen und Reporting-Frameworks unterlegt für maximale Glaubwürdigkeit.\n\n🔄 Langfristige Value-Creation-Mechanismen:\n• Cultural Transformation: Aufbau einer ESG-bewussten Unternehmenskultur, die nachhaltige Entscheidungsfindung auf allen Ebenen fördert und verankert.\n• Innovation-Catalyst: ESG als Treiber für Produktinnovation, neue Geschäftsmodelle und Erschließung zukunftsorientierter Märkte.\n• Risk-Resilience: Entwicklung von ESG-Capabilities, die das Unternehmen widerstandsfähiger gegen klimatische, soziale und governance-bezogene Risiken machen.\n• Competitive Moats: Aufbau von ESG-basierten Wettbewerbsvorteilen, die schwer kopierbar sind und langfristige Marktführerschaft sichern."
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
