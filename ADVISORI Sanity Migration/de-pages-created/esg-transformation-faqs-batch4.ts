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
    console.log('Updating ESG Transformation page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer ESG-Performance-Messung, die sowohl kurzfristige Fortschritte als auch langfristige Ziele transparent macht?",
        answer: "Eine effektive ESG-Performance-Messung erfordert ein ausgewogenes System von Leading- und Lagging-Indikatoren, das der C-Suite sowohl operative Steuerungsinformationen als auch strategische Orientierung bietet. ADVISORI entwickelt maßgeschneiderte Performance-Management-Systeme, die ESG-Fortschritte messbar, vergleichbar und actionable machen.\n\n📊 Comprehensive Performance Framework:\n• Multi-dimensional KPI Architecture: Entwicklung von ESG-KPIs, die Environmental, Social und Governance-Aspekte ausgewogen abbilden\n• Leading vs. Lagging Indicators: Balance zwischen vorausschauenden Indikatoren (Investitionen, Initiativen) und Ergebnisindikatoren (Emissionen, Diversity-Raten)\n• Stakeholder-aligned Metrics: KPIs, die auf die Erwartungen verschiedener Stakeholder-Gruppen zugeschnitten sind\n• Benchmarking Integration: Vergleichbarkeit mit Branchenführern und Best-Practice-Standards\n\n⏱️ Short-term Progress Tracking:\n• Monthly ESG Scorecards: Regelmäßige Performance-Updates für operative Steuerung\n• Initiative-based Milestones: Messung des Fortschritts spezifischer ESG-Projekte und -Programme\n• Real-time Dashboard Integration: Live-Monitoring kritischer ESG-Metriken für proaktives Management\n• Corrective Action Triggers: Automatische Benachrichtigungen bei Abweichungen von Zielwerten\n\n🎯 Long-term Strategic Measurement:\n• Science-based Target Alignment: Verknüpfung langfristiger Ziele mit wissenschaftlich fundierten Standards\n• Scenario Planning Integration: Bewertung der ESG-Performance unter verschiedenen Zukunftsszenarien\n• Value Creation Metrics: Messung des direkten Beitrags von ESG-Maßnahmen zur Unternehmenswertschöpfung\n• Stakeholder Satisfaction Tracking: Langfristige Bewertung der Stakeholder-Wahrnehmung und -Zufriedenheit\n\n🔄 Continuous Improvement Mechanisms:\n• Performance Review Cycles: Strukturierte Überprüfung und Anpassung der ESG-Ziele und -Metriken\n• Learning Integration: Einbindung externer Benchmarks und Best Practices in die Performance-Bewertung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Branchen- und regionalen Herausforderungen adressiert ADVISORI bei der ESG-Transformation und wie werden kulturelle Unterschiede berücksichtigt?",
        answer: "ESG-Transformation erfordert eine nuancierte Herangehensweise, die branchenspezifische Risiken, regionale Regulierungslandschaften und kulturelle Kontexte berücksichtigt. ADVISORI kombiniert globale ESG-Expertise mit lokalem Marktverständnis, um authentische und effektive Transformationsstrategien zu entwickeln, die in verschiedenen Geschäftsumgebungen erfolgreich sind.\n\n🌍 Regional Compliance und Cultural Adaptation:\n• Multi-jurisdictional Regulatory Expertise: Tiefes Verständnis regionaler ESG-Regulierung von EU-Taxonomie bis zu US-SEC-Regeln\n• Cultural Sensitivity Integration: Berücksichtigung lokaler Werte, Traditionen und Geschäftspraktiken in ESG-Strategien\n• Local Stakeholder Engagement: Entwicklung regionsspezifischer Stakeholder-Ansätze und Kommunikationsstrategien\n• Cross-cultural Change Management: Anpassung von Change-Prozessen an verschiedene Unternehmenskulturen und Managementstile\n\n🏭 Industry-specific ESG Challenges:\n• Financial Services: Fokus auf Sustainable Finance, Climate Risk Assessment und Responsible Investment\n• Manufacturing: Schwerpunkt auf Circular Economy, Supply Chain Sustainability und Operational Efficiency\n• Technology: Emphasis auf Data Privacy, Digital Divide und Responsible AI Development\n• Energy: Transition Planning, Renewable Integration und Just Transition für Mitarbeiter\n\n📋 Sector-tailored Solutions:\n• Risk Materiality Mapping: Branchenspezifische Identifikation der kritischsten ESG-Risiken und -Chancen\n• Regulatory Roadmaps: Sektorspezifische Compliance-Strategien für kommende regulatorische Anforderungen\n• Peer Benchmarking: Vergleich mit Branchenführern und Best-Practice-Identifikation\n• Innovation Opportunities: Branchenspezifische Identifikation von ESG-getriebenen Geschäftschancen\n\n🤝 Global-Local Balance:\n• Standardization vs. Localization: Balance zwischen globaler Konsistenz und lokaler Relevanz\n• Cross-border Coordination: Koordination von ESG-Initiativen über verschiedene Länder und Kulturen hinweg\n• Local Partnership Development: Aufbau strategischer Partnerschaften mit lokalen Organisationen und Initiativen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie bewertet ADVISORI die Auswirkungen von ESG-Transformation auf unsere Kundenbeziehungen und Marktpositionierung, und welche Strategien gibt es zur Kundengewinnung?",
        answer: "ESG-Transformation kann ein mächtiger Differenzierungsfaktor sein, der neue Kundensegmente erschließt und bestehende Beziehungen vertieft. ADVISORI entwickelt ESG-getriebene Customer Value Propositions, die sowohl B2B- als auch B2C-Märkte ansprechen und nachhaltiges Geschäftswachstum durch authentische Werteorientierung ermöglichen.\n\n🎯 Customer-centric ESG Value Creation:\n• Customer Journey ESG Integration: Einbettung von ESG-Werten in alle Touchpoints der Customer Experience\n• Sustainable Product Development: Entwicklung von Produkten und Services, die sowohl Kundenbedürfnisse als auch ESG-Ziele erfüllen\n• Transparency und Trust Building: Aufbau von Vertrauen durch authentische und transparente ESG-Kommunikation\n• Co-creation Opportunities: Einbindung von Kunden in ESG-Initiativen und nachhaltige Innovationsprozesse\n\n💼 B2B Market Positioning:\n• ESG Due Diligence Readiness: Vorbereitung auf ESG-basierte Lieferantenbewertungen großer Unternehmenskunden\n• Partnership Value Enhancement: Positionierung als strategischer Partner für die ESG-Ziele Ihrer Kunden\n• Risk Mitigation für Kunden: Demonstration, wie Ihre ESG-Performance zur Risikominimierung Ihrer Kunden beiträgt\n• Innovation Collaboration: Gemeinsame Entwicklung nachhaltiger Lösungen mit Schlüsselkunden\n\n🛍️ B2C Market Differentiation:\n• Purpose-driven Brand Positioning: Entwicklung einer authentischen Brand Story, die ESG-Werte glaubwürdig vermittelt\n• Conscious Consumer Targeting: Identifikation und Ansprache von ESG-bewussten Verbrauchersegmenten\n• Premium Pricing Justification: Rechtfertigung höherer Preise durch nachweisbare ESG-Vorteile\n• Community Building: Aufbau einer Community von ESG-engagierten Kunden und Brand Advocates\n\n📈 Customer Acquisition Strategies:\n• ESG Storytelling Excellence: Entwicklung überzeugender Narratives, die ESG-Impact mit Customer Benefits verbinden\n• Digital Marketing Integration: Nutzung digitaler Kanäle für authentische ESG-Kommunikation und Kundengewinnung\n• Influencer und Partnership Marketing: Strategische Partnerschaften mit ESG-fokussierten Influencern und Organisationen\n• Customer Education Programs: Aufklärung und Befähigung von Kunden zu nachhaltigen Entscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie stellt ADVISORI sicher, dass unsere ESG-Transformation resilient gegenüber wirtschaftlichen Abschwüngen ist und auch in Krisenzeiten Bestand hat?",
        answer: "Eine resiliente ESG-Transformation muss auch unter wirtschaftlichem Druck und in Krisenzeiten Bestand haben. ADVISORI entwickelt antizyklische ESG-Strategien, die ESG-Investitionen als Stabilisierungsfaktor positionieren und dabei sowohl Kostendisziplin als auch langfristige Wertsteigerung ermöglichen.\n\n🛡️ Crisis-resilient ESG Framework:\n• Economic Stress Testing: Bewertung der ESG-Strategie unter verschiedenen wirtschaftlichen Szenarien\n• Priority-based Resource Allocation: Identifikation kritischer ESG-Initiativen, die auch bei Budgetkürzungen fortgeführt werden\n• ROI-focused ESG Investments: Priorisierung von ESG-Maßnahmen mit nachweisbarem kurz- bis mittelfristigem Return on Investment\n• Stakeholder Communication in Crisis: Strategien für transparente ESG-Kommunikation auch in schwierigen Zeiten\n\n💰 Value Preservation Strategies:\n• Cost-neutral ESG Implementation: Identifikation von ESG-Maßnahmen, die sich selbst finanzieren oder Kosteneinsparungen generieren\n• Efficiency-driven Sustainability: Fokus auf ESG-Initiativen, die gleichzeitig operative Effizienz steigern\n• Risk Mitigation Value: Demonstration des Werts von ESG-Maßnahmen für Risikominimierung in unsicheren Zeiten\n• Access to Crisis Funding: Nutzung ESG-orientierter Finanzierungsquellen und Fördergelder\n\n🔄 Adaptive Management Approach:\n• Flexible Implementation Roadmaps: Entwicklung anpassungsfähiger ESG-Pläne, die auf veränderte Umstände reagieren können\n• Scenario-based Decision Making: Vorbereitung alternativer ESG-Strategien für verschiedene Krisensituationen\n• Continuous Value Demonstration: Regelmäßige Dokumentation und Kommunikation des ESG-Werts auch in schwierigen Zeiten\n• Stakeholder Alignment Maintenance: Aufrechterhaltung des Stakeholder-Commitments für ESG auch unter Druck\n\n📊 Long-term Perspective Integration:\n• Counter-cyclical Investment Opportunities: Nutzung wirtschaftlicher Abschwünge für strategische ESG-Investitionen\n• Competitive Advantage Building: Positionierung für Marktführerschaft nach der Krise durch kontinuierliche ESG-Excellence"
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
