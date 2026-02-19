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
    console.log('Updating ISO 27001 Maturity Assessment & Continuous Improvement page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine systematische Reifegradbewertung für die C-Suite mehr als nur eine technische Bewertung und wie transformiert ADVISORI diese zu strategischen Geschäftsentscheidungen?",
        answer: "Für Führungskräfte ist eine ISMS-Reifegradbewertung ein fundamentales strategisches Instrument zur datengetriebenen Steuerung der Informationssicherheitsinvestitionen und Risikomanagement-Prioritäten. Sie transcendiert die reine technische Bewertung und wird zu einem essentiellen Baustein der Corporate Governance und strategischen Planung. ADVISORI transformiert Reifegradbewertungen zu actionable Intelligence für die Geschäftsführung.\n\n🎯 Strategischer Mehrwert von Reifegradbewertungen für die C-Suite:\n• Investitionssteuerung: Objektive Datenbasis für strategische Entscheidungen über Informationssicherheits-Budgets und Ressourcenallokation zur Maximierung des Return on Security Investment.\n• Risikotransparenz: Klare Sichtbarkeit auf aktuelle Sicherheitsrisiken und deren potenzielle Geschäftsauswirkungen für fundierte Risikobereitschaftsentscheidungen der Geschäftsleitung.\n• Compliance-Assurance: Systematische Überwachung der regulatorischen Konformität und frühzeitige Identifikation von Compliance-Risiken zur Vermeidung von Sanktionen und Reputationsschäden.\n• Competitive Advantage: Benchmarking gegen Branchenstandards zur Identifikation von Differenzierungspotenzialen und Wettbewerbsvorteilen durch überlegene Informationssicherheit.\n\n🚀 ADVISORIs strategischer Reifegradbewertungsansatz:\n• Business-Impact-orientierte Bewertung: Wir evaluieren nicht nur technische Compliance, sondern auch den Beitrag der Informationssicherheit zu Geschäftszielen und strategischen Initiativen.\n• ROI-fokussierte Empfehlungen: Entwicklung priorisierter Verbesserungsmaßnahmen mit klarem Geschäftswert und messbaren Erfolgskriterien für optimale Investitionsentscheidungen.\n• Strategische Roadmap-Entwicklung: Transformation von Bewertungsergebnissen in umsetzbare, zeitlich strukturierte Verbesserungspläne, die mit Unternehmensstrategie und Wachstumszielen aligniert sind.\n• Executive Dashboards: Bereitstellung von KPI-basierten Management-Cockpits zur kontinuierlichen Überwachung der ISMS-Performance und strategischen Steuerung der Informationssicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Geschäftsrisiken entstehen durch mangelnde kontinuierliche Verbesserung von ISMS und wie minimiert ADVISORI diese strategisch?",
        answer: "Die Vernachlässigung kontinuierlicher ISMS-Verbesserung kann erhebliche strategische und operative Risiken verursachen, die die langfristige Wettbewerbsfähigkeit und Marktposition des Unternehmens gefährden. Diese Risiken manifestieren sich oft schleichend, haben aber potenziell dramatische Auswirkungen auf Geschäftswert und Stakeholder-Vertrauen. ADVISORI entwickelt proaktive Strategien zur Risikominimierung und nachhaltigen ISMS-Optimierung.\n\n⚠️ Kritische Geschäftsrisiken mangelnder ISMS-Weiterentwicklung:\n• Sicherheitserosion: Schleichende Degradation der Sicherheitseffektivität durch veraltete Prozesse, neue Bedrohungslandschaften und technologische Veränderungen ohne entsprechende ISMS-Anpassung.\n• Compliance-Gaps: Entstehung von regulatorischen Lücken durch sich verändernde Anforderungen (DORA, NIS2, DSGVO-Updates) ohne systematische ISMS-Evolution und Anpassung.\n• Innovationshemmnisse: Starre, nicht-adaptive ISMS-Strukturen behindern digitale Transformation, Cloud-Adoption und agile Geschäftsmodelle, was Wettbewerbsnachteile verursacht.\n• Ineffiziente Ressourcennutzung: Fehlende Optimierung führt zu überdimensionierten Sicherheitsmaßnahmen in unwichtigen Bereichen und Unterinvestition in kritischen Risikobereichen.\n• Talent-Retention-Probleme: Veraltete Sicherheitspraktiken demotivieren qualifizierte IT-Security-Fachkräfte und erschweren die Rekrutierung von Top-Talenten.\n\n🛡️ ADVISORIs strategische Risikominimierungsansätze:\n• Predictive ISMS-Evolution: Entwicklung zukunftsorientierter Verbesserungsstrategien, die emerging Threats, regulatorische Trends und technologische Entwicklungen antizipieren.\n• Adaptive Governance-Frameworks: Implementierung flexibler ISMS-Strukturen, die sich dynamisch an veränderte Geschäftsanforderungen und Risikolandschaften anpassen können.\n• Kontinuierliches Threat Intelligence: Integration aktueller Bedrohungsanalysen und Branchenerfahrungen in die ISMS-Optimierung für proaktive Risikominimierung.\n• Agile Verbesserungszyklen: Etablierung iterativer Optimierungsprozesse mit kurzen Feedback-Loops und schneller Anpassungsfähigkeit an neue Anforderungen und Erkenntnisse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ADVISORI unsere ISMS-Reifegradbewertung so strukturieren, dass sie nachhaltige Wertschöpfung generiert und nicht nur Compliance-Dokumentation produziert?",
        answer: "Die Transformation einer ISMS-Reifegradbewertung von einer regulatorischen Pflichtübung zu einem wertschöpfenden strategischen Instrument erfordert einen ganzheitlichen Ansatz, der Geschäftswert, operative Exzellenz und strategische Weitsicht integriert. ADVISORI entwickelt Bewertungsframeworks, die konkrete Geschäftsvorteile generieren und nachhaltige Verbesserungen ermöglichen.\n\n💎 Wertschöpfungsorientierte Reifegradbewertungsstrategien:\n• Business-Value-Mapping: Direkte Verknüpfung von ISMS-Komponenten mit messbaren Geschäftswerten wie Umsatzschutz, Kosteneinsparungen, Effizienzsteigerungen und Marktdifferenzierung.\n• Stakeholder-Value-Analyse: Bewertung des ISMS-Beitrags zur Stakeholder-Zufriedenheit, Kundenvertrauen, Partnerbeziehungen und Investoren-Confidence für umfassende Wertschöpfung.\n• Innovation-Enablement-Assessment: Evaluierung, wie das ISMS digitale Transformation, neue Geschäftsmodelle und technologische Innovationen unterstützt oder behindert.\n• Operational Excellence-Integration: Identifikation von Synergien zwischen Informationssicherheit und operativen Verbesserungspotenzialen zur Doppelnutzung von Investitionen.\n\n🚀 ADVISORIs nachhaltigkeitsorientierter Bewertungsansatz:\n• Zukunftsorientierte Bewertungskriterien: Entwicklung von Reifegradstufen, die nicht nur aktuelle Compliance messen, sondern auch Bereitschaft für zukünftige Anforderungen und Marktentwicklungen.\n• Continuous Improvement-Integration: Aufbau von Bewertungszyklen, die kontinuierliche Lernprozesse fördern und iterative Optimierung als integralen Bestandteil der ISMS-Governance etablieren.\n• Cultural Maturity-Assessment: Bewertung der Sicherheitskultur und organisatorischen Lernfähigkeit als Grundlage für nachhaltige Verbesserungen und Change-Readiness.\n• Ecosystem-Thinking: Berücksichtigung von Lieferantenbeziehungen, Partnerintegration und Branchenstandards für ganzheitliche ISMS-Optimierung und Wettbewerbspositionierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Erfolgsfaktoren sind entscheidend für die nachhaltige Etablierung einer kontinuierlichen Verbesserungskultur im ISMS und wie implementiert ADVISORI diese systematisch?",
        answer: "Die Etablierung einer nachhaltigen Verbesserungskultur im ISMS transcendiert technische Prozesse und erfordert eine fundamentale organisatorische Transformation, die Menschen, Prozesse und Technologie integriert. Eine erfolgreiche kontinuierliche Verbesserungskultur wird zum strategischen Differenzierungsfaktor und Innovationsmotor für die gesamte Organisation. ADVISORI entwickelt ganzheitliche Kulturwandel-Strategien für nachhaltige ISMS-Excellence.\n\n🌟 Kritische Erfolgsfaktoren für nachhaltige Verbesserungskultur:\n• Leadership Commitment: Authentische und kontinuierliche Führungsunterstützung, die kontinuierliche Verbesserung als Kernwert der Unternehmenskultur etabliert und vorlebt.\n• Empowerment-Strukturen: Schaffung von Entscheidungskompetenzen und Handlungsfreiräumen für alle Organisationsebenen zur eigenverantwortlichen Identifikation und Umsetzung von Verbesserungen.\n• Learning Organization-Prinzipien: Aufbau einer Lernkultur, die Fehler als Verbesserungschancen betrachtet und experimentelles Lernen sowie Innovation fördert.\n• Anreizsystem-Alignment: Integration von kontinuierlicher Verbesserung in Performance-Management, Belohnungssysteme und Karriereentwicklungspfade.\n• Transparenz und Kommunikation: Offene Kommunikation über Verbesserungsziele, Fortschritte und Lernerfahrungen zur Förderung von Engagement und Kollaboration.\n\n🔄 ADVISORIs systematischer Kulturwandel-Implementierungsansatz:\n• Kulturanalyse und Change-Readiness-Assessment: Bewertung der aktuellen Organisationskultur und Identifikation von Veränderungsbarrieren und -potenzialen für maßgeschneiderte Change-Strategien.\n• Mehrstufiges Change Management: Strukturierter Kulturwandelprozess mit klaren Phasen, Meilensteinen und Erfolgsmetriken zur nachhaltigen Transformation der Organisationskultur.\n• Communities of Practice: Aufbau von interdisziplinären Verbesserungsgemeinschaften und Knowledge-Sharing-Plattformen zur Förderung von Kollaboration und Wissenstransfer.\n• Kontinuierliches Feedback und Adaptation: Etablierung von Feedback-Mechanismen und iterativen Anpassungsprozessen zur kontinuierlichen Optimierung der Verbesserungskultur selbst."
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
