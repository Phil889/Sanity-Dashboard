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
    console.log('Updating ESG Due Diligence page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-due-diligence' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-due-diligence" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine professionelle ESG Due Diligence für die C-Suite strategisch entscheidend und wie transformiert ADVISORI diesen Prozess zu einem Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte ist ESG Due Diligence längst kein optionaler Compliance-Prozess mehr, sondern ein strategischer Imperativ zur Sicherung langfristiger Wertschöpfung und Risikominimierung. In einer Zeit verschärfter regulatorischer Anforderungen (EU-Taxonomie, CSRD, SFDR) und steigender Investoren-Erwartungen wird die professionelle Bewertung von Environmental, Social und Governance-Faktoren zum entscheidenden Differenzierungsmerkmal am Markt.\n\n🎯 Strategische Relevanz für die Führungsebene:\n• Risikominimierung und Wertsicherung: Frühzeitige Identifikation von ESG-Risiken, die zu erheblichen finanziellen Verlusten, Reputationsschäden oder regulatorischen Sanktionen führen können.\n• Kapitalzugang und Finanzierungskonditionen: ESG-konforme Unternehmen erhalten bessere Konditionen bei nachhaltigen Finanzierungen und Zugang zu einem wachsenden Pool von ESG-fokussierten Investoren.\n• Marktpositionierung und Stakeholder-Vertrauen: Nachweisbare ESG-Performance stärkt das Vertrauen von Kunden, Partnern und Investoren und eröffnet neue Marktchancen.\n• Regulatory Compliance und Zukunftssicherheit: Proaktive Erfüllung aktueller und zukünftiger ESG-Regulatorik vermeidet kostspielige Nachbesserungen und Strafzahlungen.\n\n🔍 Der ADVISORI-Ansatz für strategische ESG Due Diligence:\n• Ganzheitliche Bewertungsframework: Wir entwickeln maßgeschneiderte ESG-Bewertungsrahmen, die über standardisierte Checklisten hinausgehen und die spezifischen Geschäftsmodelle, Branchen-Eigenheiten und strategischen Ziele Ihres Unternehmens berücksichtigen.\n• Datengestützte Entscheidungsfindung: Unsere Due Diligence Prozesse liefern quantifizierbare ESG-Metriken und Scorings, die eine objektive Bewertung und Vergleichbarkeit ermöglichen.\n• Integration in M&A und Investitionsprozesse: Wir integrieren ESG-Bewertungen nahtlos in Ihre bestehenden Due Diligence und Investitionsprozesse, ohne diese zu verlangsamen.\n• Kontinuierliche Wertsteigerung: Über die reine Bewertung hinaus entwickeln wir konkrete Roadmaps zur ESG-Performance-Verbesserung, die direkten Einfluss auf Unternehmenswert und Marktposition haben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den finanziellen Impact von ESG-Faktoren in Due Diligence Prozessen und welchen direkten Einfluss hat dies auf Investitionsrenditen und Unternehmensbewertungen?",
        answer: "Die Quantifizierung des finanziellen Impacts von ESG-Faktoren ist eine der komplexesten Herausforderungen moderner Due Diligence. ADVISORI nutzt fortschrittliche Bewertungsmodelle und proprietäre Methodiken, um ESG-Risiken und -Chancen in konkrete finanzielle Kennzahlen zu übersetzen, die direkt in Investitionsentscheidungen und Unternehmensbewertungen einfließen können.\n\n💰 Finanzielle Quantifizierung von ESG-Faktoren:\n• ESG-Risk-Adjusted Returns: Wir entwickeln adjustierte Renditemodelle, die ESG-Risiken als Abschläge und ESG-Chancen als Werttreiber in die Bewertung integrieren, wodurch realistische und nachhaltige Investitionsrenditen ermittelt werden.\n• Szenario-basierte Cashflow-Modellierung: Durch die Modellierung verschiedener ESG-Szenarien (z.B. Klimarisiken, regulatorische Änderungen, Reputationsereignisse) quantifizieren wir potenzielle Auswirkungen auf zukünftige Cashflows.\n• ESG-Premium und -Discount Bewertung: Unternehmen mit überdurchschnittlicher ESG-Performance erzielen nachweislich Bewertungsprämien von 10-20%, während ESG-Laggards entsprechende Abschläge hinnehmen müssen.\n• Total Cost of ESG-Non-Compliance: Wir kalkulieren die Gesamtkosten mangelnder ESG-Compliance, einschließlich regulatorischer Strafen, Reputationsschäden, erhöhter Kapitalkosten und Talentfluktuation.\n\n📊 ADVISORI's Quantifizierungs-Framework:\n• Materiality-basierte Bewertung: Wir priorisieren ESG-Faktoren nach ihrer finanziellen Materialität für das jeweilige Geschäftsmodell und die Branche, um Ressourcen auf die wertrelevantesten Aspekte zu fokussieren.\n• Integrierte ESG-DCF-Modelle: Unsere Discounted Cash Flow Modelle integrieren ESG-Faktoren als separate Bewertungskomponenten, wodurch der direkte Beitrag zur Unternehmensbewertung transparent wird.\n• ESG-Performance Tracking und Benchmarking: Kontinuierliche Messung der ESG-Performance gegen Branchenvergleichswerte und deren Korrelation mit finanziellen Kennzahlen.\n• ROI-Kalkulation für ESG-Investitionen: Wir berechnen den Return on Investment für geplante ESG-Verbesserungsmaßnahmen und deren Amortisationszeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Angesichts der rapiden Entwicklung der ESG-Regulatorik und unterschiedlicher globaler Standards – wie stellt ADVISORI sicher, dass unsere Due Diligence Prozesse zukunftssicher und international kompatibel sind?",
        answer: "Die ESG-Regulatorik entwickelt sich mit beispielloser Geschwindigkeit und Komplexität. Von der EU-Taxonomie über die CSRD bis hin zu den SEC-Klimaoffenlegungsregeln – Unternehmen müssen sich in einem fragmentierten regulatorischen Umfeld zurechtfinden. ADVISORI's Ansatz berücksichtigt diese Dynamik durch zukunftsorientierte, adaptierbare Due Diligence Frameworks, die globale Kompatibilität und regulatorische Compliance sicherstellen.\n\n🌍 Globale Regulatorik-Navigation:\n• Multi-jurisdiktionelle Compliance-Matrix: Wir entwickeln umfassende Mapping-Tools, die die Anforderungen verschiedener Rechtsräume (EU, US, UK, APAC) systematisch erfassen und deren Überschneidungen und Divergenzen identifizieren.\n• Regulatory Horizon Scanning: Kontinuierliche Überwachung und Antizipation kommender ESG-Regulatorik durch spezialisierte Legal- und Regulatory-Teams, um proaktive Anpassungen zu ermöglichen.\n• Harmonized Standards Integration: Wir orientieren uns an global anerkannten Standards (TCFD, GRI, SASB, ISSB) und integrieren diese in unsere Due Diligence Prozesse, um maximale internationale Kompatibilität zu gewährleisten.\n• Future-Proof Assessment Frameworks: Unsere Bewertungsmodelle sind modular aufgebaut und können flexibel an neue regulatorische Anforderungen angepasst werden, ohne den gesamten Prozess zu überarbeiten.\n\n🔮 ADVISORI's Zukunftssicherungsstrategien:\n• Adaptive Due Diligence Architecture: Entwicklung von flexiblen, modularen Due Diligence Prozessen, die neue ESG-Kriterien und -Metriken nahtlos integrieren können, ohne bestehende Bewertungen zu invalidieren.\n• Regulatory Change Management: Etablierung von systematischen Prozessen zur Überwachung, Bewertung und Integration regulatorischer Änderungen in laufende und zukünftige Due Diligence Projekte.\n• Cross-Border ESG Harmonization: Beratung zur Entwicklung von ESG-Strategien, die sowohl lokale Spezifika als auch globale Standards berücksichtigen und somit grenzüberschreitende Geschäftstätigkeiten unterstützen.\n• Digital ESG Intelligence Platform: Nutzung fortschrittlicher Technologien (AI, Machine Learning) zur automatisierten Überwachung regulatorischer Entwicklungen und deren Impact-Assessment auf bestehende ESG-Bewertungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI ESG Due Diligence von einem defensiven Compliance-Tool zu einem proaktiven Instrument für Wertschöpfung und strategische Chancenidentifikation?",
        answer: "Traditionelle ESG Due Diligence fokussiert sich primär auf Risikominimierung und Compliance-Erfüllung. ADVISORI revolutioniert diesen Ansatz durch die Transformation von ESG Due Diligence zu einem strategischen Wertschöpfungsinstrument, das systematisch Chancen für nachhaltiges Wachstum, operative Exzellenz und Marktdifferenzierung identifiziert und realisiert.\n\n🚀 Von Risikomanagement zu Wertschöpfung:\n• ESG Value Creation Mapping: Systematische Identifikation von ESG-getriebenen Wertschöpfungspotenzialen, von Kosteneinsparungen durch Ressourceneffizienz bis hin zu Umsatzsteigerungen durch nachhaltige Produktinnovationen.\n• Sustainable Business Model Innovation: Analyse und Entwicklung neuer Geschäftsmodelle, die ESG-Prinzipien als Kernelemente integrieren und damit neue Marktchancen erschließen.\n• ESG-driven M&A und Strategic Partnerships: Nutzung von ESG Due Diligence zur Identifikation von Akquisitions- und Partnerschaftsmöglichkeiten, die synergistische ESG-Vorteile und Wettbewerbsvorteile schaffen.\n• Operational Excellence durch ESG: Aufdeckung von operativen Verbesserungspotenzialen durch ESG-Optimierung, von Energieeffizienz-Maßnahmen bis zu Supply Chain-Optimierungen.\n\n💡 ADVISORI's Wertschöpfungs-Framework:\n• ESG Innovation Labs: Entwicklung und Durchführung von strukturierten Innovationsprozessen, die ESG-Herausforderungen in Geschäftschancen transformieren und neue Produkte, Services oder Betriebsmodelle generieren.\n• Stakeholder Value Optimization: Analyse und Optimierung der Wertschöpfung für alle Stakeholder-Gruppen (Kunden, Mitarbeiter, Investoren, Gesellschaft) durch ESG-Maßnahmen, wodurch langfristige Loyalität und Unterstützung gesichert wird.\n• ESG Technology Integration: Beratung zur strategischen Integration von ESG-relevanten Technologien (Clean Tech, Social Impact Tech, Governance Automation) in bestehende Geschäftsprozesse zur Steigerung von Effizienz und Innovation.\n• Circular Economy Transformation: Entwicklung von Strategien zur Transformation linearer Geschäftsmodelle in zirkuläre Ansätze, die Ressourceneffizienz maximieren und neue Einnahmequellen erschließen."
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
