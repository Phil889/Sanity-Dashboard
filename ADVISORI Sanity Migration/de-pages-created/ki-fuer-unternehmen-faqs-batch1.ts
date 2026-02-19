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
    console.log('Updating KI für Unternehmen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-fuer-unternehmen' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-fuer-unternehmen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie entwickelt ADVISORI strategische AI-Roadmaps für Unternehmen und welche Faktoren bestimmen den Erfolg einer Enterprise AI-Transformation?',
        answer: "Die Entwicklung einer strategischen AI-Roadmap ist der Grundstein für erfolgreiche Enterprise AI-Transformation. ADVISORI verfolgt einen ganzheitlichen Ansatz, der Geschäftsstrategie, technische Machbarkeit und organisatorische Readiness systematisch miteinander verknüpft. Unsere AI-Roadmaps schaffen nicht nur technische Klarheit, sondern auch strategische Ausrichtung und nachhaltigen Geschäftswert für langfristige Wettbewerbsvorteile.\n\n🎯 Strategische AI-Roadmap-Entwicklung:\n• Umfassende Business-Impact-Analyse: Wir identifizieren die wertvollsten AI-Anwendungsfälle durch systematische Bewertung von Geschäftsprozessen, Datenqualität und Automatisierungspotenzialen, um maximalen ROI zu gewährleisten.\n• Technologie-Readiness-Assessment: Detaillierte Bewertung der bestehenden IT-Infrastruktur, Datenarchitektur und technischen Kompetenzen zur Identifikation von Gaps und Entwicklungsbedarfen.\n• Stakeholder-Alignment und Vision-Development: Entwicklung einer gemeinsamen AI-Vision mit klaren Zielen, Erfolgskennzahlen und Kommunikationsstrategien für organisationsweite Unterstützung.\n• Phasenweise Implementierungsplanung: Strukturierte Roadmap mit Quick Wins, mittelfristigen Meilensteinen und langfristigen Transformationszielen für kontinuierliche Wertschöpfung.\n• Risk-Assessment und Mitigation-Strategien: Proaktive Identifikation und Bewältigung von technischen, organisatorischen und regulatorischen Risiken.\n\n💼 Erfolgsfaktoren für Enterprise AI-Transformation:\n• Executive Sponsorship und Leadership Commitment: Starke Führungsunterstützung und klare Verantwortlichkeiten schaffen die notwendige organisatorische Dynamik für erfolgreiche AI-Adoption.\n• Datenqualität und Data Governance: Hochwertige, gut strukturierte Daten sind die Grundlage für effektive AI-Systeme und erfordern systematische Data Management-Strategien.\n• Change Management und Skill Development: Proaktive Vorbereitung der Organisation auf AI-Integration durch Schulungen, Kommunikation und kulturelle Transformation.\n• Agile Implementierung mit kontinuierlicher Optimierung: Iterative Entwicklung und kontinuierliche Verbesserung basierend auf Feedback und Lernerfahrungen.\n\n🔍 ADVISORI AI-Roadmap-Excellence:\n• Entwicklung maßgeschneiderter AI-Strategien, die perfekt auf Ihre Branche, Unternehmensgröße und spezifische Geschäftsziele abgestimmt sind.\n• Integration von Emerging Technologies und Future-Proofing-Strategien für langfristige Wettbewerbsfähigkeit.\n• Kontinuierliche Roadmap-Optimierung basierend auf Marktentwicklungen, technologischen Fortschritten und Geschäftsergebnissen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welchen messbaren ROI können Unternehmen durch strategische KI-Implementierung erwarten und wie quantifiziert ADVISORI den Geschäftswert von AI-Investitionen?',
        answer: "Die ROI-Quantifizierung von AI-Investitionen erfordert einen systematischen Ansatz, der sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen erfasst. ADVISORI entwickelt umfassende ROI-Modelle, die alle Dimensionen der AI-Wertschöpfung transparent machen und Unternehmen dabei helfen, fundierte Investitionsentscheidungen zu treffen und den Erfolg ihrer AI-Initiativen kontinuierlich zu messen.\n\n💰 Direkte ROI-Komponenten von Enterprise AI:\n• Operative Effizienzsteigerung: Automatisierung repetitiver Aufgaben und Prozessoptimierung führen zu direkten Kosteneinsparungen bei Personal, Zeit und Ressourcen.\n• Qualitätsverbesserung und Fehlerreduktion: AI-Systeme reduzieren menschliche Fehler und verbessern Konsistenz, was zu geringeren Nacharbeitskosten und höherer Kundenzufriedenheit führt.\n• Beschleunigte Entscheidungsfindung: Datengetriebene Insights ermöglichen schnellere und bessere Geschäftsentscheidungen, was Time-to-Market verkürzt und Marktchancen optimiert.\n• Skalierungseffekte: AI-Systeme ermöglichen Geschäftswachstum ohne proportionale Kostensteigerung, was zu verbesserten Margen und Profitabilität führt.\n\n📈 Indirekte Wertsteigerung durch strategische AI:\n• Innovation und neue Geschäftsmodelle: AI eröffnet neue Produkt- und Servicemöglichkeiten, die zusätzliche Umsatzströme und Marktdifferenzierung schaffen.\n• Verbesserte Kundenerfahrung: Personalisierung und proaktiver Service steigern Kundenzufriedenheit, Loyalität und Lifetime Value.\n• Risikominimierung: Predictive Analytics und intelligente Monitoring-Systeme reduzieren Geschäftsrisiken und vermeiden kostspielige Probleme.\n• Talentattraktivität und Mitarbeiterzufriedenheit: Moderne AI-Tools verbessern Arbeitsplatzattraktivität und Produktivität, was Recruitment und Retention optimiert.\n\n🔍 ADVISORI ROI-Quantifizierung und Value Tracking:\n• Entwicklung maßgeschneiderter ROI-Modelle mit branchenspezifischen Benchmarks und KPIs für präzise Wertmessung.\n• Implementierung von Real-time Value Dashboards für kontinuierliche ROI-Überwachung und Optimierung.\n• Before-After-Analysen und Controlled Testing für objektive Wertnachweis und Erfolgsvalidierung.\n• Langfristige Value Forecasting und Investment Planning für strategische AI-Portfolio-Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie gestaltet ADVISORI effektives Change Management für AI-Transformation und welche Strategien gewährleisten nachhaltige Mitarbeiterakzeptanz?',
        answer: "Erfolgreiches Change Management ist entscheidend für nachhaltige AI-Transformation, da technologische Exzellenz allein nicht ausreicht. ADVISORI entwickelt umfassende Change-Strategien, die menschliche Faktoren, organisatorische Dynamiken und kulturelle Aspekte systematisch adressieren. Unser Ansatz schafft nicht nur Akzeptanz, sondern echte Begeisterung für AI-gestützte Arbeitsweisen und nachhaltigen Kulturwandel.\n\n🌟 Strategisches Change Management für AI-Adoption:\n• Stakeholder-Mapping und Influence-Analyse: Systematische Identifikation von Schlüsselpersonen, Meinungsführern und Change Champions für gezielte Kommunikations- und Engagement-Strategien.\n• Personalisierte Communication-Journeys: Maßgeschneiderte Botschaften und Formate für verschiedene Zielgruppen, die Ängste adressieren und Vorteile konkret aufzeigen.\n• Hands-on Training und Skill Development: Praxisorientierte Schulungsprogramme, die Mitarbeiter befähigen, AI-Tools effektiv zu nutzen und Mehrwert zu schaffen.\n• Quick Wins und Success Stories: Frühe Erfolge kommunizieren und feiern, um Momentum aufzubauen und Skeptiker zu überzeugen.\n• Kontinuierliches Feedback und Iteration: Regelmäßige Pulse-Checks und Anpassungen der Change-Strategie basierend auf Mitarbeiter-Feedback.\n\n🤝 Nachhaltige Mitarbeiterakzeptanz und Engagement:\n• Partizipative Entwicklung: Einbindung von Mitarbeitern in AI-Entwicklungsprozesse und Entscheidungsfindung für Ownership und Commitment.\n• Transparente Kommunikation über AI-Auswirkungen: Offene Diskussion über Veränderungen, neue Rollen und Karrieremöglichkeiten für Vertrauen und Klarheit.\n• Empowerment durch AI-Augmentation: Fokus auf AI als Verstärkung menschlicher Fähigkeiten statt Ersatz, um Ängste zu reduzieren und Potenziale zu betonen.\n• Recognition und Incentive-Systeme: Belohnung von AI-Adoption und Innovation für positive Verstärkung und Motivationssteigerung.\n• Peer-to-Peer Learning und Communities: Aufbau interner AI-Communities und Wissensaustausch für organische Verbreitung und Unterstützung.\n\n🔍 ADVISORI Change Excellence für AI-Transformation:\n• Entwicklung kulturspezifischer Change-Strategien, die Unternehmenskultur, Branchendynamiken und individuelle Bedürfnisse berücksichtigen.\n• Implementierung von Change-Analytics für datengetriebene Optimierung der Transformation und frühzeitige Problemerkennung.\n• Aufbau nachhaltiger Change-Kapazitäten und interner Change-Champions für kontinuierliche Organisationsentwicklung.\n• Integration von Change Management in alle AI-Projekte für ganzheitliche und konsistente Transformation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen die Skalierung von AI-Initiativen im Unternehmen und wie vermeidet man typische Fallstricke bei der Enterprise AI-Implementierung?',
        answer: "Die Skalierung von AI-Initiativen von Pilotprojekten zu unternehmensweiten Lösungen ist eine der größten Herausforderungen in der Enterprise AI-Transformation. ADVISORI hat systematische Ansätze entwickelt, die kritische Erfolgsfaktoren adressieren und typische Fallstricke vermeiden. Unser Skalierungs-Framework gewährleistet nachhaltigen Erfolg und maximiert den Geschäftswert von AI-Investitionen.\n\n🚀 Kritische Erfolgsfaktoren für AI-Skalierung:\n• Robuste Data Infrastructure und Governance: Skalierbare Datenarchitekturen mit einheitlichen Standards, Qualitätssicherung und Governance-Frameworks sind fundamental für erfolgreiche AI-Skalierung.\n• Standardisierte AI-Entwicklungsprozesse: MLOps-Pipelines, automatisierte Testing-Verfahren und einheitliche Deployment-Strategien ermöglichen konsistente und effiziente AI-Entwicklung.\n• Cross-funktionale AI-Teams und Kompetenzen: Interdisziplinäre Teams mit Data Scientists, Engineers, Domain Experts und Business Stakeholdern schaffen optimale Voraussetzungen für erfolgreiche AI-Projekte.\n• Executive Sponsorship und strategische Ausrichtung: Starke Führungsunterstützung und klare Verbindung zu Geschäftszielen gewährleisten Ressourcen und organisatorische Priorität.\n• Agile Governance und Compliance-Integration: Flexible aber robuste Governance-Strukturen, die Innovation ermöglichen und gleichzeitig Risiken und Compliance-Anforderungen adressieren.\n\n⚠️ Typische Fallstricke und Vermeidungsstrategien:\n• Pilot-Purgatory vermeiden: Systematische Transition von Proof-of-Concepts zu produktiven Systemen durch klare Skalierungs-Kriterien und Roadmaps.\n• Data Silos und Integration-Challenges: Proaktive Datenintegration und einheitliche Data Platforms für nahtlose AI-Entwicklung und -Deployment.\n• Skill Gaps und Ressourcen-Engpässe: Strategische Talent-Entwicklung, externe Partnerschaften und schrittweise Kompetenz-Aufbau für nachhaltige AI-Kapazitäten.\n• Unrealistische Erwartungen und Timeline-Druck: Realistische Zielsetzung, iterative Entwicklung und kontinuierliche Stakeholder-Kommunikation für nachhaltigen Erfolg.\n• Technische Schulden und Legacy-Integration: Systematische Modernisierung und API-first Architekturen für zukunftssichere AI-Infrastrukturen.\n\n🔍 ADVISORI Skalierungs-Excellence:\n• Entwicklung maßgeschneiderter Skalierungs-Strategien mit klaren Meilensteinen, Erfolgskennzahlen und Risk-Mitigation-Plänen.\n• Implementierung von AI-Centers-of-Excellence für zentrale Kompetenz-Entwicklung und Best-Practice-Sharing.\n• Kontinuierliche Optimierung und Lessons-Learned-Integration für iterative Verbesserung der Skalierungs-Prozesse.\n• End-to-End-Unterstützung von Pilot-Entwicklung bis Enterprise-Rollout für konsistente und erfolgreiche AI-Transformation."
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
