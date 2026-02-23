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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine maßgeschneiderte BSI IT-Grundschutz Roadmap, die mit den strategischen Wachstumsplänen und M&A-Aktivitäten des Unternehmens synchronisiert ist?",
        answer: "Strategische C-Level-Planung erfordert eine enge Verzahnung zwischen Cybersecurity-Initiativen und Unternehmenswachstum. ADVISORI entwickelt BSI IT-Grundschutz Roadmaps, die nicht nur aktuelle Sicherheitsanforderungen erfüllen, sondern auch zukünftige Geschäftsentwicklungen, Akquisitionen und Marktexpansionen nahtlos unterstützen.\n\n🎯 Strategic Alignment und Geschäftswachstum:\n• M&A-Due-Diligence: IT-Grundschutz Bewertung von Akquisitionszielen und Integration von Sicherheitsstandards in Post-Merger-Pläne.\n• Scalability-Design: Entwicklung von Sicherheitsarchitekturen, die mit organischem Wachstum und neuen Geschäftsbereichen mitwachsen.\n• Geographic-Expansion-Support: Anpassung der IT-Grundschutz Implementierung an neue Märkte und rechtliche Rahmenbedingungen.\n• Business-Model-Evolution: Flexible Sicherheitsframeworks, die sich an verändernde Geschäftsmodelle und Kundenanforderungen anpassen.\n\n🔄 ADVISORI's Growth-Integrated Security Planning:\n• Strategic-Roadmap-Development: Mehrjährige Sicherheitsplanung, die mit Ihren Geschäftszielen und Investitionszyklen abgestimmt ist.\n• Phased-Implementation-Approach: Priorisierung von Sicherheitsmaßnahmen basierend auf Geschäftskritikalität und Wachstumsphasen.\n• Risk-Appetite-Calibration: Anpassung der Sicherheitsinvestitionen an Ihre Risikotoleranz und Wachstumsgeschwindigkeit.\n• Continuous-Strategy-Refinement: Regelmäßige Anpassung der IT-Grundschutz Strategie an sich ändernde Geschäftsprioritäten.\n\n💼 Value Creation durch strategische Security Integration:\n• Faster Market Entry: Beschleunigte Expansion durch bereits etablierte, skalierbare Sicherheitsstandards.\n• Enhanced Valuation: Robuste Cybersecurity als Werttreiber bei Unternehmenstransaktionen und Investorengesprächen.\n• Operational Synergies: Integration von Sicherheitsprozessen in bestehende Geschäftsprozesse für maximale Effizienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung einer Board-Level Cybersecurity Governance, die BSI IT-Grundschutz in die strategische Unternehmensführung integriert?",
        answer: "Moderne Corporate Governance erfordert Cybersecurity als integralen Bestandteil der strategischen Entscheidungsfindung. ADVISORI unterstützt C-Level-Teams dabei, BSI IT-Grundschutz nicht nur als operatives Framework zu implementieren, sondern als strategisches Governance-Instrument zu etablieren, das Board-Level-Oversight und Executive-Accountability sicherstellt.\n\n🏢 Board-Level Cybersecurity Governance:\n• Executive-Risk-Dashboards: C-Suite-gerechte Berichterstattung über IT-Grundschutz Compliance, Risikoexposition und strategische Sicherheitsinitiativen.\n• Board-Education-Programs: Schulung von Aufsichtsräten und Vorständen über Cybersecurity-Risiken und IT-Grundschutz Prinzipien.\n• Strategic-Decision-Support: Integration von Sicherheitsaspekten in strategische Geschäftsentscheidungen und Investitionsplanungen.\n• Regulatory-Compliance-Oversight: Board-Level-Überwachung der Einhaltung von IT-Grundschutz und anderen Sicherheitsstandards.\n\n🎯 ADVISORI's Governance-Excellence-Approach:\n• Three-Lines-of-Defense-Integration: Klare Zuordnung von IT-Grundschutz Verantwortlichkeiten zwischen operativen Teams, Risikomanagement und interner Revision.\n• Executive-Accountability-Framework: Entwicklung von KPIs und Incentive-Strukturen, die Cybersecurity-Performance an Executive-Compensation koppeln.\n• Crisis-Management-Preparedness: Board-Level-Prozesse für Cyber-Incident-Response und Business-Continuity-Management.\n• Stakeholder-Communication-Excellence: Professionelle Kommunikation von Cybersecurity-Initiativen gegenüber Investoren, Regulatoren und Kunden.\n\n📊 Strategische Governance Outcomes:\n• Enhanced Board Effectiveness: Verbesserte Entscheidungsfindung durch besseres Verständnis von Cyber-Risiken und -Chancen.\n• Regulatory Confidence: Demonstrierte Governance-Exzellenz bei Audits und regulatorischen Überprüfungen.\n• Investor Relations: Stärkung des Vertrauens von Investoren durch transparente und professionelle Cybersecurity-Governance.\n• Strategic Competitive Advantage: Überlegene Governance als Differenzierungsmerkmal bei Geschäftspartnerschaften und Marktpositionierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie optimiert ADVISORI die Total Cost of Ownership (TCO) für BSI IT-Grundschutz Implementierungen und welche langfristigen Kosteneinsparungen sind realistisch erreichbar?",
        answer: "CFO-orientierte Entscheidungsfindung erfordert eine präzise TCO-Analyse, die sowohl direkte Implementierungskosten als auch langfristige operative Einsparungen und Risikominimierung berücksichtigt. ADVISORI entwickelt kostenoptimierte IT-Grundschutz Strategien, die maximale Sicherheit bei minimalen Gesamtkosten gewährleisten und messbare finanzielle Vorteile liefern.\n\n💰 TCO-Optimierung und Kostenstruktur-Analyse:\n• Lifecycle-Cost-Analysis: Vollständige Bewertung aller IT-Grundschutz bezogenen Kosten über den gesamten Implementierungs- und Betriebszyklus.\n• Resource-Efficiency-Optimization: Maximale Nutzung vorhandener IT-Ressourcen und Vermeidung redundanter Investitionen.\n• Automation-ROI: Strategische Automatisierung von Compliance-Prozessen zur Reduktion manueller Arbeitskosten.\n• Vendor-Consolidation: Optimierung der Lieferantenlandschaft für Sicherheitslösungen zur Erzielung von Skaleneffekten.\n\n📈 Quantifizierbare langfristige Einsparungen:\n• Incident-Response-Costs: Reduktion der durchschnittlichen Kosten pro Sicherheitsvorfall um 60-80% durch proaktive Prävention.\n• Compliance-Efficiency: Senkung der jährlichen Audit- und Compliance-Kosten um 40-50% durch strukturierte Dokumentation.\n• Insurance-Premium-Reduction: Durchschnittlich 25-35% niedrigere Cyber-Versicherungskosten durch nachweisbare Sicherheitsstandards.\n• Operational-Downtime-Minimization: Vermeidung von Produktivitätsverlusten durch robuste Business-Continuity-Planung.\n\n🔧 ADVISORI's Cost-Optimization-Methodology:\n• Phased-Investment-Strategy: Verteilung der IT-Grundschutz Investitionen über mehrere Budgetzyklen zur Cash-Flow-Optimierung.\n• Shared-Service-Models: Entwicklung von unternehmensweiten Sicherheitsservices zur Kostendegression.\n• Cloud-Native-Efficiency: Nutzung von Cloud-basierten Sicherheitslösungen für variable Kostenstrukturen und Skalierbarkeit.\n• Performance-Based-Partnerships: Entwicklung von Erfolgs-basierten Partnerschaften mit Technologie-Anbietern zur Risikoteilung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie positioniert ADVISORI BSI IT-Grundschutz als Katalysator für ESG-Compliance und nachhaltige Unternehmensführung aus Investor- und Stakeholder-Perspektive?",
        answer: "Moderne Investor Relations und ESG-Compliance erfordern eine ganzheitliche Betrachtung von Cybersecurity als integralen Bestandteil nachhaltiger Unternehmensführung. ADVISORI positioniert BSI IT-Grundschutz nicht nur als technisches Framework, sondern als strategischen Baustein für Environmental, Social und Governance Excellence, der sowohl Risiken minimiert als auch positive Stakeholder-Wahrnehmung fördert.\n\n🌱 ESG-Integration und Nachhaltigkeits-Framework:\n• Environmental Impact: Energieeffiziente IT-Grundschutz Implementierungen, die zu Corporate Carbon Footprint Zielen beitragen.\n• Social Responsibility: Cybersecurity als Schutz für Kunden-, Mitarbeiter- und Partnerdaten im Sinne sozialer Verantwortung.\n• Governance Excellence: IT-Grundschutz als Demonstration von Risk Management Maturity und Corporate Governance Best Practices.\n• Sustainable Technology: Integration von nachhaltigen Technologien und Praktiken in die Sicherheitsarchitektur.\n\n📊 Stakeholder-Value-Creation durch Cybersecurity Excellence:\n• Investor Confidence: IT-Grundschutz Zertifizierung als Indikator für Management-Qualität und Risk-Awareness bei Investitionsentscheidungen.\n• Customer Trust: Nachweisbare Datensicherheit als Competitive Advantage und Kundenbindungsinstrument.\n• Partner Ecosystem: Sicherheitsstandards als Grundlage für vertrauensvolle B2B-Partnerschaften und Supply Chain Integration.\n• Regulatory Relationships: Proaktive Compliance als Basis für konstruktive Beziehungen zu Aufsichtsbehörden.\n\n🎯 ADVISORI's ESG-Aligned Security Strategy:\n• Sustainability-Integrated-Design: Entwicklung von IT-Grundschutz Lösungen, die sowohl Sicherheits- als auch Nachhaltigkeitsziele unterstützen.\n• Stakeholder-Reporting-Excellence: Professionelle Kommunikation von Cybersecurity-Initiativen in ESG-Berichten und Investor-Präsentationen.\n• Impact-Measurement: Quantifizierung der positiven Auswirkungen von IT-Grundschutz auf ESG-KPIs und Stakeholder-Zufriedenheit.\n• Future-Ready-Positioning: Vorbereitung auf kommende ESG-Regulierungen und Reporting-Standards im Cybersecurity-Bereich."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
