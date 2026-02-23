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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie gestaltet ADVISORI einen nachhaltigen Change Management Prozess für die BSI IT-Grundschutz Transformation, der sowohl technische als auch kulturelle Aspekte berücksichtigt?",
        answer: "Erfolgreiche IT-Grundschutz Implementierung ist primär eine Change Management Herausforderung, die weit über technische Konfigurationen hinausgeht. ADVISORI entwickelt ganzheitliche Transformationsstrategien, die sowohl die technologischen als auch die menschlichen Dimensionen der Cybersecurity-Excellence adressieren und nachhaltige Verhaltensänderungen in der gesamten Organisation bewirken.\n\n🔄 Holistic Transformation Management:\n• Cultural-Assessment: Systematische Analyse der aktuellen Sicherheitskultur und Identifikation von Change-Widerständen und -Enablers.\n• Leadership-Alignment: Sicherstellung der vollständigen C-Level-Unterstützung und Entwicklung von Executive-Sponsorship für die IT-Grundschutz Initiative.\n• Communication-Strategy: Entwicklung zielgruppenspezifischer Kommunikationskanäle und -botschaften für alle Organisationsebenen.\n• Training-Excellence: Moderne Lernformate und adaptive Schulungsprogramme, die IT-Grundschutz Prinzipien praxisnah vermitteln.\n\n🎯 ADVISORI's Sustainable Change Approach:\n• Phased-Adoption-Model: Stufenweise Einführung von IT-Grundschutz Maßnahmen mit kontinuierlicher Erfolgs- und Akzeptanzmessung.\n• Champion-Network: Aufbau eines Netzwerks interner Sicherheitsbotschafter, die als Multiplikatoren und Change-Agents fungieren.\n• Feedback-Integration: Systematische Einbindung von Mitarbeiterfeedback in die kontinuierliche Verbesserung der Sicherheitsprozesse.\n• Recognition-Programs: Incentivierung und Anerkennung von sicherheitsbewusstem Verhalten zur Verstärkung positiver Veränderungen.\n\n💼 Strategische Change Outcomes:\n• Sustainable Adoption: Langfristige Verankerung von IT-Grundschutz Prinzipien in der Unternehmens-DNA statt oberflächlicher Compliance.\n• Innovation Culture: Transformation von Sicherheit als Hindernis zu Sicherheit als Enabler für Innovation und Wachstum.\n• Resilient Organization: Aufbau einer selbstlernenden Organisation, die proaktiv auf neue Sicherheitsherausforderungen reagiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung einer Business Intelligence Strategie für Cybersecurity, die BSI IT-Grundschutz Compliance in messbare Geschäftsergebnisse übersetzt?",
        answer: "C-Level-Entscheidungsträger benötigen präzise, geschäftsorientierte Metriken, um den Wert von Cybersecurity-Investitionen zu verstehen und zu kommunizieren. ADVISORI entwickelt umfassende Business Intelligence Frameworks, die IT-Grundschutz Compliance nicht nur messen, sondern auch deren direkten Beitrag zu Geschäftsergebnissen und strategischen Zielen transparent machen.\n\n📊 Cybersecurity Business Intelligence:\n• Strategic-KPI-Development: Entwicklung geschäftsrelevanter Kennzahlen, die IT-Grundschutz Performance mit Unternehmenserfolg verknüpfen.\n• Real-Time-Dashboards: Executive-Dashboard-Systeme für kontinuierliche Übersicht über Sicherheitsposture und Business Impact.\n• Predictive-Analytics: Nutzung von Datenanalyse für die Vorhersage von Sicherheitsrisiken und deren Auswirkungen auf Geschäftsziele.\n• ROI-Measurement: Präzise Quantifizierung des Return on Investment für IT-Grundschutz Maßnahmen.\n\n🎯 ADVISORI's Data-Driven Excellence:\n• Business-Context-Integration: Verknüpfung von Sicherheitsmetriken mit Geschäftsprozessen und Performance-Indikatoren.\n• Stakeholder-Specific-Reporting: Maßgeschneiderte Berichte für verschiedene Zielgruppen (Board, Investoren, Regulatoren, Kunden).\n• Trend-Analysis: Langfristige Analyse von Sicherheitstrends und deren Auswirkungen auf Geschäftsstrategie.\n• Benchmark-Intelligence: Vergleichsanalysen mit Branchenstandards und Best-Practice-Unternehmen.\n\n💡 Strategic Decision Support:\n• Investment-Optimization: Datenbasierte Empfehlungen für die optimale Allokation von Cybersecurity-Budgets.\n• Risk-Appetite-Calibration: Quantitative Unterstützung bei der Definition angemessener Risikotoleranz und Sicherheitsinvestitionen.\n• Performance-Management: Kontinuierliche Überwachung und Optimierung der IT-Grundschutz Implementierung basierend auf Geschäftsergebnissen.\n• Strategic-Planning: Integration von Cybersecurity-Insights in die langfristige Unternehmensplanung und -strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie unterstützt ADVISORI Unternehmen bei der Entwicklung einer crisis-resilient BSI IT-Grundschutz Architektur, die sowohl Cyber-Angriffe als auch Business Disruptions bewältigen kann?",
        answer: "In einer Ära multipler Krisen erfordert strategische Führung robuste Resilienz-Architekturen, die verschiedene Störungsszenarien bewältigen können. ADVISORI entwickelt crisis-resilient IT-Grundschutz Implementierungen, die nicht nur Cyber-Bedrohungen abwehren, sondern auch Business Continuity bei komplexen, miteinander verflochtenen Krisen gewährleisten.\n\n🛡️ Multi-Crisis Resilience Architecture:\n• Scenario-Based-Planning: Entwicklung von Resilienz-Strategien für komplexe Krisenszenarien (Cyber + Pandemie, Naturkatastrophen + Supply Chain Disruption).\n• Adaptive-Response-Capabilities: Flexible Sicherheitsarchitekturen, die sich dynamisch an sich verändernde Bedrohungslagen anpassen.\n• Cross-Domain-Coordination: Integration von IT-Grundschutz mit Business Continuity, Crisis Management und Disaster Recovery.\n• Stakeholder-Communication: Robuste Kommunikationsstrategien für Krisensituationen mit Kunden, Partnern und Regulatoren.\n\n🔄 ADVISORI's Crisis-Ready Security Design:\n• Distributed-Resilience: Aufbau dezentraler Sicherheitsarchitekturen, die einzelne Ausfälle kompensieren können.\n• Rapid-Recovery-Mechanisms: Entwicklung von Schnellwiederherstellungs-Prozessen für kritische Geschäftsfunktionen.\n• Intelligence-Sharing: Etablierung von Threat-Intelligence-Netzwerken für frühzeitige Warnung vor entstehenden Krisen.\n• Simulation-Excellence: Regelmäßige Krisenübungen und Stress-Tests der gesamten Resilienz-Architektur.\n\n⚡ Strategic Crisis Preparedness:\n• Executive-Decision-Support: Klare Entscheidungsstrukturen und Eskalationswege für Krisensituationen.\n• Regulatory-Compliance: Sicherstellung der Einhaltung aller relevanten Meldepflichten und regulatorischen Anforderungen auch in Krisenzeiten.\n• Reputation-Management: Integrierte Strategien zum Schutz und zur Wiederherstellung des Unternehmensrufs nach Sicherheitsvorfällen.\n• Learning-Organization: Systematische Analyse und Integration von Krisenerfahrungen in die kontinuierliche Verbesserung der Resilienz-Strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie positioniert ADVISORI BSI IT-Grundschutz als strategischen Enabler für die Transformation zu einem cyber-resilient, zukunftsfähigen Unternehmen der nächsten Generation?",
        answer: "Die Zukunft gehört Unternehmen, die Cybersecurity als strategischen Differenzierungsfaktor und Innovationstreiber verstehen. ADVISORI positioniert BSI IT-Grundschutz nicht als defensive Maßnahme, sondern als offensiven Baustein für die Transformation zu einem cyber-resilient, zukunftsfähigen Unternehmen, das in einer digitalen Welt führend agiert.\n\n🚀 Next-Generation Enterprise Transformation:\n• Digital-First-Security: Integration von IT-Grundschutz Prinzipien in die DNA digitaler Geschäftsmodelle und Innovationsprozesse.\n• Ecosystem-Leadership: Positionierung als vertrauensvoller Anker in digitalen Geschäftsökosystemen durch überlegene Cybersecurity.\n• Innovation-Acceleration: Nutzung robuster Sicherheitsgrundlagen für mutige Experimente mit neuen Technologien und Geschäftsmodellen.\n• Market-Making: Erschließung neuer Märkte und Kundensegmente durch demonstrierte Cyber-Excellence.\n\n🎯 ADVISORI's Future-State Vision:\n• Autonomous-Security: Entwicklung selbstheilender und selbstlernender Sicherheitssysteme basierend auf IT-Grundschutz Prinzipien.\n• Quantum-Ready-Architecture: Vorbereitung auf Post-Quantum-Kryptografie und next-generation Bedrohungen.\n• AI-Augmented-Defense: Integration von Künstlicher Intelligenz in IT-Grundschutz Frameworks für präventive Bedrohungsabwehr.\n• Sustainable-Cybersecurity: Entwicklung umweltfreundlicher und energieeffizienter Sicherheitslösungen.\n\n💡 Strategic Competitive Advantages:\n• Digital Trust Leadership: Etablierung als Branchenführer für Vertrauen und Sicherheit in der digitalen Wirtschaft.\n• Innovation Velocity: Beschleunigte Innovation durch solide Sicherheitsgrundlagen und reduzierte Risiko-Aversion.\n• Global Scalability: Internationale Expansion auf Basis bewährter, skalierbarer Sicherheitsstandards.\n• Future-Readiness: Proaktive Vorbereitung auf kommende technologische Disruptions und regulatorische Entwicklungen durch zukunftsorientierte IT-Grundschutz Implementierung."
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
