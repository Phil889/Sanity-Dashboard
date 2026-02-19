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
    console.log('Updating ESG-Strategie page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche Rolle spielt ESG bei M&A-Transaktionen und wie unterstützt ADVISORI bei der Integration von Nachhaltigkeitsfaktoren in Due Diligence und Post-Merger-Integration?",
        answer: "ESG-Faktoren sind zu einem kritischen Werttreiber bei M&A-Transaktionen geworden, der sowohl Deal-Bewertungen als auch Integrationserfolg maßgeblich beeinflusst. ADVISORI hat spezialisierte ESG-M&A-Frameworks entwickelt, die Nachhaltigkeitsrisiken und -chancen systematisch in alle Transaktionsphasen integrieren und so sowohl Deal-Value als auch langfristige Synergien maximieren.\n\n🔍 ESG-Enhanced Due Diligence:\n• Comprehensive ESG Risk Assessment: Tiefgreifende Analyse von ESG-Risiken des Zielunternehmens, einschließlich regulatorischer Compliance, Reputationsrisiken, Stranded Assets und zukünftiger Nachhaltigkeitsanforderungen.\n• ESG Value Creation Opportunities: Systematische Identifikation von ESG-basierten Wertschöpfungspotenzialen wie Effizienzsteigerungen, neue Marktzugänge oder Kosteneinsparungen durch nachhaltige Praktiken.\n• Cultural ESG Fit Analysis: Bewertung der ESG-Kulturkompatibilität zwischen Acquirer und Target zur Vorhersage von Integrationschancen und -herausforderungen.\n• ESG Data Room Enhancement: Etablierung spezialisierter ESG-Datenräume mit standardisierten Nachhaltigkeitsmetriken und -dokumentationen für effiziente Buyer-Evaluierung.\n\n🤝 Post-Merger ESG Integration Excellence:\n• ESG Integration Playbooks: Entwicklung detaillierter Integrationshandbücher, die ESG-spezifische Workstreams, Meilensteine und Erfolgsmetriken für die Post-Merger-Phase definieren.\n• Synergy Realization through ESG: Identifikation und Realisierung von ESG-basierten Synergien wie gemeinsame Nachhaltigkeitsinitiativen, Lieferketten-Optimierung oder geteilte ESG-Technologien.\n• Cultural Integration Programs: Spezialisierte Change-Management-Programme zur harmonischen Integration unterschiedlicher ESG-Kulturen und -Praktiken.\n• Stakeholder Communication Strategy: Entwicklung koordinierter Kommunikationsstrategien für ESG-Stakeholder während und nach der Transaktion zur Aufrechterhaltung von Vertrauen und Engagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie entwickelt ADVISORI zukunftsfähige ESG-Strategien, die aufkommende Megatrends wie Klimawandel, demografischen Wandel und Digitalisierung antizipieren?",
        answer: "Zukunftsfähige ESG-Strategien müssen über aktuelle Anforderungen hinausblicken und sich intensiv wandelnde Megatrends antizipieren. ADVISORI entwickelt adaptive ESG-Strategien, die nicht nur heutige Herausforderungen adressieren, sondern Unternehmen auch für zukünftige Nachhaltigkeitsanforderungen und gesellschaftliche Entwicklungen positionieren. Unser Futures-thinking-Ansatz macht ESG-Strategien resilient gegen unvorhersehbare Veränderungen.\n\n🔮 Megatrend-Integration in ESG-Strategien:\n• Climate Adaptation Strategies: Entwicklung umfassender Klimaanpassungsstrategien, die physische und transitorische Klimarisiken antizipieren und Geschäftsmodelle entsprechend ausrichten.\n• Demographic Shift Preparedness: Integration demografischer Entwicklungen in ESG-Strategien, einschließlich alternder Gesellschaften, verändernder Arbeitsmodelle und Generationenwechsel in der Belegschaft.\n• Digital-ESG Convergence: Strategische Verknüpfung von Digitalisierungsinitiativen mit ESG-Zielen zur Erschließung von Synergien und Vermeidung von Trade-offs.\n• Circular Economy Transition: Proaktive Vorbereitung auf den Übergang zur Kreislaufwirtschaft durch Geschäftsmodell-Innovation und Infrastruktur-Anpassungen.\n\n🌟 Future-Proofing ESG Excellence:\n• Scenario-Based Strategy Development: Entwicklung von ESG-Strategien basierend auf verschiedenen Zukunftsszenarien zur Sicherstellung der Robustheit gegenüber unvorhersehbaren Entwicklungen.\n• Innovation Pipeline für Sustainability: Aufbau systematischer Innovationspipelines, die aufkommende Nachhaltigkeitstechnologien und -trends frühzeitig identifizieren und integrieren.\n• Adaptive Governance Frameworks: Etablierung flexibler Governance-Strukturen, die schnelle Anpassungen an neue ESG-Anforderungen und gesellschaftliche Erwartungen ermöglichen.\n• Stakeholder Futures Engagement: Systematische Einbindung von Stakeholdern in die Entwicklung zukunftsorientierter ESG-Visionen und -Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie gestaltet ADVISORI ESG-Finanzierungsstrategien und unterstützt beim Zugang zu nachhaltigen Finanzierungsinstrumenten wie Green Bonds und Sustainability-Linked Loans?",
        answer: "Nachhaltige Finanzierung ist zu einem strategischen Instrument geworden, das nicht nur Kapitalkosten senkt, sondern auch ESG-Commitments glaubwürdig demonstriert. ADVISORI entwickelt umfassende ESG-Finanzierungsstrategien, die den Zugang zu günstigen grünen Kapitalquellen erschließen und gleichzeitig die Nachhaltigkeitstransformation finanzieren. Unser Ansatz verknüpft Finanzstrategie mit ESG-Performance.\n\n💚 Innovative ESG-Finanzierungsinstrumente:\n• Green Bond Strukturierung: Entwicklung maßgeschneiderter Green-Bond-Programme mit klaren Use-of-Proceeds-Frameworks, Impact-Reporting und Third-Party-Verification für optimale Marktakzeptanz.\n• Sustainability-Linked Financing: Gestaltung innovativer nachhaltigkeitsverknüpfter Finanzierungen, die Zinssätze an ESG-KPI-Performance koppeln und kontinuierliche Verbesserungsanreize schaffen.\n• Transition Finance Solutions: Entwicklung spezialisierter Übergangsfinanzierungen für Unternehmen in traditionellen Industrien, die ihre Transformation zu nachhaltigen Geschäftsmodellen finanzieren müssen.\n• ESG-Impact-Investment-Attraction: Strategien zur Anziehung von Impact-Investoren und ESG-fokussierten institutionellen Anlegern durch überzeugende Nachhaltigkeits-Narrative.\n\n📊 ESG-Finance-Excellence-Framework:\n• ESG-Investment-Readiness: Umfassende Vorbereitung auf ESG-orientierte Finanzierungen durch Entwicklung robuster Nachhaltigkeitsmetriken, Governance-Strukturen und Reporting-Frameworks.\n• Sustainable Finance Taxonomy Alignment: Strategische Ausrichtung von Finanzierungsprojekten an EU-Taxonomie und anderen regulatorischen Frameworks für optimale Investorenerkennung.\n• Impact Measurement & Verification: Implementation wissenschaftsbasierter Impact-Measurement-Systeme, die glaubwürdige und transparente Nachweise für die Verwendung nachhaltiger Finanzierungsmittel liefern.\n• Investor Relations für ESG: Spezialisierte IR-Strategien zur effektiven Kommunikation von ESG-Performance und -Zielen an nachhaltigkeitsorientierte Investoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer ESG-Krisenresilienz-Strategie, die Unternehmen gegen unvorhergesehene Nachhaltigkeitsrisiken wappnet?",
        answer: "ESG-Krisen können Unternehmen existenziell bedrohen – von Klimaextremen über Lieferketten-Kollaps bis zu sozialen Verwerfungen. ADVISORI entwickelt umfassende ESG-Krisenresilienz-Strategien, die Unternehmen nicht nur vor bekannten Risiken schützen, sondern auch gegen unvorhersehbare Black-Swan-Ereignisse wappnen. Unser Ansatz macht Nachhaltigkeit zum strategischen Schutzschild.\n\n🛡️ Multi-Dimensionale ESG-Risikoabwehr:\n• Comprehensive Risk Horizon Scanning: Systematische Überwachung und Analyse aufkommender ESG-Risiken aus verschiedenen Quellen, einschließlich Klimawissenschaft, geopolitischen Entwicklungen und gesellschaftlichen Trends.\n• ESG Stress Testing & Scenario Analysis: Regelmäßige Durchführung von Stress-Tests und Szenarioanalysen zur Bewertung der Unternehmensresilienz gegen verschiedene ESG-Schock-Szenarien.\n• Adaptive Risk Management Systems: Implementierung flexibler Risikomanagement-Systeme, die sich schnell an neue oder sich verändernde ESG-Bedrohungen anpassen können.\n• Crisis Response Protocols: Entwicklung spezialisierter Krisenreaktions-Protokolle für ESG-spezifische Notfälle mit klaren Verantwortlichkeiten und Kommunikationsstrategien.\n\n🔄 Proaktive Resilienz-Architekturen:\n• Diversified ESG Portfolio Approach: Strategische Diversifikation von ESG-Risiken durch geografische, sektorale und operationale Streuung zur Minimierung von Konzentrationsrisiken.\n• Antifragile Business Model Design: Neugestaltung von Geschäftsmodellen nach Antifragilitäts-Prinzipien, die aus ESG-Störungen gestärkt hervorgehen statt nur zu überleben.\n• Stakeholder Alliance Building: Aufbau strategischer Allianzen mit Stakeholdern für kollektive Krisenbewältigung und geteilte Resilienz-Ressourcen.\n• Technology-Enabled Early Warning: Implementation KI-gestützter Frühwarnsysteme, die ESG-Risiken automatisch überwachen und rechtzeitig vor potenziellen Krisen warnen."
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
