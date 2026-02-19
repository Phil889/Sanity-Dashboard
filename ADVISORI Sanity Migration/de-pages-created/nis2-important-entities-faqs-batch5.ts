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
    console.log('Updating NIS2 Important Entities page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-important-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-important-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Welche langfristigen Auswirkungen hat die NIS2-Compliance auf die Unternehmensbewertung und Exit-Strategien von Important Entities und wie positioniert ADVISORI diese Vorteile gegenüber Investoren?",
        answer: "ADVISORI unterstützt Important Entities dabei, NIS2-Compliance als wertsteigerenden Asset zu positionieren, der sowohl bei Investoren-Due-Diligence als auch bei Exit-Strategien erhebliche Vorteile bietet. Robuste Cybersicherheit wird zunehmend als kritischer Bewertungsfaktor angesehen, der das Risikoprofil reduziert und Zukunftsfähigkeit demonstriert.\n\n📈 Wertsteigerung durch strategische Cybersicherheit:\n• Risk Premium Reduction: Nachgewiesene NIS2-Compliance reduziert das wahrgenommene Cyber-Risiko und kann zu höheren Bewertungsmultiplikatoren führen, da Investoren weniger Risikoabschläge einpreisen.\n• Due Diligence Advantage: Umfassende Cybersicherheits-Dokumentation beschleunigt Due-Diligence-Prozesse und reduziert Transaktionskosten bei M&A-Aktivitäten oder Finanzierungsrunden.\n• Strategic Buyer Appeal: Essential Entities und große Unternehmen bevorzugen Akquisitionsziele mit robuster Cybersicherheit, um Integration-Risiken zu minimieren.\n• Future-Readiness Demonstration: NIS2-Compliance signalisiert Investoren, dass das Unternehmen für zukünftige regulatorische Entwicklungen gerüstet ist.\n\n💼 Investor-Relations-Optimierung durch Cybersicherheits-Excellence:\n• ESG Compliance Integration: Cybersicherheit als Teil der ESG-Strategie positionieren, um Zugang zu ESG-fokussierten Investoren und günstigeren Finanzierungskonditionen zu erhalten.\n• Operational Excellence Narrative: Demonstration, wie Cybersicherheitsmaßnahmen operative Effizienz steigern und Geschäftsprozesse optimieren.\n• Growth Enablement Story: Aufzeigen, wie robuste Cybersicherheit neue Marktsegmente erschließt und Skalierungsmöglichkeiten schafft.\n• Competitive Moat Development: Positionierung von Cybersicherheits-Compliance als nachhaltigen Wettbewerbsvorteil, der schwer zu replizieren ist.\n• Board-Level Governance: Etablierung von Cybersicherheits-Governance auf Vorstandsebene, die Investoren Vertrauen in professionelles Risikomanagement vermittelt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie unterstützt ADVISORI Important Entities bei der Entwicklung einer resilienten Cybersicherheits-Kultur, die auch bei Personalwechsel und Unternehmenswachstum Bestand hat?",
        answer: "ADVISORI erkennt, dass nachhaltige Cybersicherheit weit über Technologie hinausgeht und in der Unternehmens-DNA verankert werden muss. Wir entwickeln für Important Entities selbstverstärkende Cybersicherheitskulturen, die auch bei Personalfluktuation und Skalierung ihre Wirksamkeit behalten und kontinuierlich zur Organisationsstärke beitragen.\n\n🏛️ Kulturelle Verankerung von Cybersicherheit:\n• Values-Based Security Integration: Einbettung von Cybersicherheitsprinzipien in die Unternehmenswerke und -mission, so dass Sicherheitsbewusstsein zu einem natürlichen Teil der Organisationsidentität wird.\n• Leadership Modeling: Schulung von Führungskräften als Cybersicherheits-Vorbilder, die durch ihr Verhalten und ihre Entscheidungen Sicherheitsbewusstsein vorleben und verstärken.\n• Peer-to-Peer Learning Networks: Aufbau interner Netzwerke, in denen Mitarbeiter Cybersicherheitswissen untereinander teilen und dabei kollektive Expertise aufbauen.\n• Continuous Learning Ecosystems: Etablierung von Lernumgebungen, die sich selbst verstärken und kontinuierlich neues Cybersicherheitswissen generieren und verbreiten.\n\n🔄 Skalierbare und resiliente Sicherheitsstrukturen:\n• Decentralized Security Champions: Ausbildung von Cybersicherheits-Champions in verschiedenen Abteilungen und Hierarchieebenen, die Wissen multiplizieren und lokale Expertise aufbauen.\n• Onboarding Security Integration: Integration von Cybersicherheitstraining in standardisierte Onboarding-Prozesse, um neue Mitarbeiter sofort in die Sicherheitskultur einzubinden.\n• Knowledge Management Systems: Aufbau von Wissensdatenbanken und Best-Practice-Repositorien, die organisationales Cybersicherheitswissen bewahren und zugänglich machen.\n• Feedback-Driven Evolution: Etablierung von Mechanismen, die kontinuierliches Feedback zur Cybersicherheitskultur sammeln und darauf basierende Verbesserungen implementieren.\n• Succession Planning for Security: Integration von Cybersicherheits-Expertise in Nachfolgeplanung und Talententwicklung, um kritisches Wissen auch bei Personalwechsel zu erhalten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche spezifischen Metriken und KPIs empfiehlt ADVISORI für Important Entities, um den Erfolg ihrer NIS2-Compliance-Initiativen zu messen und kontinuierliche Verbesserung zu gewährleisten?",
        answer: "ADVISORI entwickelt für Important Entities umfassende Measurement-Frameworks, die sowohl quantitative Compliance-Kennzahlen als auch qualitative Business-Impact-Indikatoren umfassen. Unser Ansatz ermöglicht es der C-Suite, datengetrieben zu verstehen, wie Cybersicherheitsinvestitionen sowohl Risiken reduzieren als auch Geschäftswert schaffen.\n\n📊 Strategische Cybersicherheits-KPIs für C-Level-Entscheidungen:\n• Risk Reduction Metrics: Quantifizierung der Risikominimierung durch Messung von Vulnerability-Reduktion, Incident-Häufigkeit und -Schwere sowie Mean Time to Detection und Response.\n• Business Continuity Indicators: Bewertung der Geschäftskontinuität durch Messungen von Ausfallzeiten, Recovery Time Objectives und Business Impact Assessments.\n• Compliance Maturity Scoring: Entwicklung eines ganzheitlichen Compliance-Scores, der verschiedene NIS2-Anforderungen gewichtet und Fortschritte visualisiert.\n• Investment ROI Tracking: Quantifizierung der Rendite von Cybersicherheitsinvestitionen durch Kostenvergleiche vermiedener Incidents, Effizienzgewinne und Umsatzsteigerungen.\n\n⚡ Operative Excellence-Metriken für kontinuierliche Verbesserung:\n• Security Culture Assessment: Regelmäßige Bewertung der Cybersicherheitskultur durch Mitarbeiter-Surveys, Phishing-Simulation-Ergebnisse und Incident-Reporting-Raten.\n• Process Efficiency Metrics: Messung der Effizienz von Cybersicherheitsprozessen durch Automatisierungsgrade, Zeit-zu-Compliance und Ressourcenallokation.\n• Threat Landscape Adaptation: Bewertung der Anpassungsfähigkeit an neue Bedrohungen durch Threat Intelligence-Integration, Update-Zyklen und Präventionsraten.\n• Stakeholder Satisfaction Indicators: Messung der Zufriedenheit verschiedener Stakeholder (Mitarbeiter, Kunden, Partner, Aufsichtsbehörden) mit Cybersicherheitsmaßnahmen.\n• Future-Readiness Assessment: Bewertung der Vorbereitung auf zukünftige Herausforderungen durch Innovation-Integration, Skill-Development und Technologie-Adoption-Raten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie gestaltet ADVISORI für Important Entities einen nahtlosen Übergang von der initialen NIS2-Compliance-Implementierung zu einem dauerhaft selbsttragenden Cybersicherheits-Exzellenz-Programm?",
        answer: "ADVISORI konzipiert für Important Entities nachhaltige Transformationspfade, die von extern unterstützter Compliance-Implementierung zu intern getriebener Cybersicherheits-Exzellenz führen. Unser Ansatz fokussiert auf Wissenstransfer, Capability Building und die Entwicklung selbstverstärkender Verbesserungszyklen, die langfristige Autonomie und kontinuierliche Innovation ermöglichen.\n\n🎯 Strategischer Übergang zu selbsttragender Exzellenz:\n• Phased Autonomy Development: Strukturierte Übergabe von Verantwortlichkeiten in logischen Phasen, die internen Teams ermöglicht, schrittweise Expertise aufzubauen und Ownership zu übernehmen.\n• Knowledge Transfer Acceleration: Intensive Schulungs- und Mentoring-Programme, die kritisches Cybersicherheitswissen von ADVISORI-Experten an interne Teams transferieren.\n• Internal Champion Development: Identifikation und Entwicklung interner Cybersicherheits-Champions, die als change agents und Wissensmultiplikatoren fungieren.\n• Self-Assessment Capabilities: Aufbau interner Fähigkeiten zur kontinuierlichen Selbstbewertung und -verbesserung von Cybersicherheitsmaßnahmen.\n\n🔄 Nachhaltigkeit durch kontinuierliche Innovation:\n• Innovation Integration Processes: Etablierung von Prozessen, die es ermöglichen, neue Cybersicherheitstechnologien und -praktiken kontinuierlich zu evaluieren und zu integrieren.\n• External Partnership Management: Entwicklung von Fähigkeiten zur strategischen Auswahl und Steuerung externer Cybersicherheits-Partner und -dienstleister.\n• Regulatory Update Management: Aufbau interner Capabilities zur Überwachung regulatorischer Entwicklungen und proaktiven Anpassung von Compliance-Strategien.\n• Performance Optimization Cycles: Implementierung selbstlernender Systeme, die Cybersicherheitsmaßnahmen basierend auf Performance-Daten kontinuierlich optimieren.\n• Strategic Advisory Transition: Übergang von operativer Unterstützung zu strategischer Beratung, wobei ADVISORI als Sparringspartner für komplexe Cybersicherheitsentscheidungen verfügbar bleibt."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
