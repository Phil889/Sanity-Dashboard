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
    console.log('Updating NIST Maturity Assessment Roadmap page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-maturity-assessment-roadmap' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-maturity-assessment-roadmap" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir die NIST Framework Core Functions strategisch priorisieren, um maximale Geschäftswirkung bei begrenzten Ressourcen zu erzielen?",
        answer: "Die strategische Priorisierung der NIST Framework Core Functions erfordert einen geschäftsorientierten Ansatz, der über technische Compliance hinausgeht und jeden Cyber-Dollar in messbaren Geschäftswert überführt. Für C-Level-Entscheider bedeutet dies eine evidenzbasierte Allokation knapper Ressourcen auf die Functions mit höchstem Business Impact und ROI-Potential.\n\n🎯 Strategische Priorisierung der NIST Core Functions:\n• Identify: Fundament für alle anderen Functions - Priorisierung von Asset Management und Cyber Risk Assessment als Basis für datengestützte Entscheidungen.\n• Protect: Fokus auf präventive Maßnahmen mit höchstem Wirkungsgrad - Identity Management, Access Control und Data Security als Kernelemente.\n• Detect: Investition in Advanced Threat Detection und Continuous Monitoring für frühe Problemerkennung und minimierte Schadenspotentiale.\n• Respond: Aufbau von Incident Response Capabilities, die Geschäftskontinuität sicherstellen und Reputationsschäden minimieren.\n• Recover: Entwicklung von Recovery-Strategien, die nicht nur Wiederherstellung, sondern auch Lessons Learned und Resilienz-Verbesserung umfassen.\n\n💼 Business-Impact-basierte Ressourcenallokation:\n• Revenue-kritische Assets: Priorisierung von Functions, die direkt umsatzgenerierende Systeme und Prozesse schützen.\n• Regulatory-kritische Bereiche: Fokus auf Functions, die regulatorische Compliance sicherstellen und Strafzahlungen vermeiden.\n• Innovation-Enabler: Investment in Functions, die digitale Transformation und neue Geschäftsmodelle ermöglichen.\n• Cost-Avoidance: Priorisierung von Functions mit höchstem Potential zur Vermeidung von Cyber-Schäden und operativen Störungen.\n\n🚀 ADVISORIs Strategic Function Prioritization:\n• Business Impact Assessment: Quantitative Bewertung des Geschäftsimpacts jeder Core Function durch Risk-Value-Analyse und ROI-Modellierung.\n• Maturity-Gap Mapping: Identifikation der Functions mit größten Maturity-Lücken und höchstem Verbesserungspotential.\n• Resource Optimization: Entwicklung von Investitionsstrategien, die synergistische Effects zwischen Functions maximieren und Doppelausgaben vermeiden.\n• Phased Implementation: Strukturierte Implementierungsphasen, die Quick Wins mit langfristigen strategischen Zielen balancieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielen externe Partner und Third-Party-Dienstleister in unserer NIST Maturity Assessment Roadmap und wie managen wir Supply Chain Cybersecurity-Risiken?",
        answer: "Externe Partner und Third-Party-Dienstleister sind integraler Bestandteil einer modernen NIST Maturity Strategy und können sowohl Risikoquelle als auch strategischer Enabler sein. Für die C-Suite erfordert dies einen ausgewogenen Ansatz, der Supply Chain Cybersecurity-Risiken minimiert, während gleichzeitig die Vorteile von Spezialisierung und Outsourcing realisiert werden.\n\n🔗 Strategisches Third-Party Risk Management im NIST Kontext:\n• Vendor Assessment Integration: Bewertung der NIST Maturity aller kritischen Dienstleister als Teil der Vendor Selection und Ongoing Management.\n• Supply Chain Mapping: Detaillierte Analyse der gesamten Cyber-Supply Chain mit Identifikation von Single Points of Failure und kritischen Dependencies.\n• Contractual Security Requirements: Integration von NIST Framework-basierten Sicherheitsanforderungen in alle Partnerschaften und Service Level Agreements.\n• Continuous Monitoring: Etablierung von kontinuierlichen Überwachungsmechanismen für die Cybersecurity-Performance externer Partner.\n\n🛡️ Transforming Third-Party Risks into Strategic Advantages:\n• Center of Excellence Partnerships: Aufbau strategischer Partnerschaften mit Cybersecurity-Experten, die interne NIST Capabilities erweitern und beschleunigen.\n• Shared Security Models: Entwicklung von gemeinsamen Sicherheitsarchitekturen mit Schlüsselpartnern für bessere Integration und geteilte Verantwortlichkeiten.\n• Innovation Collaboration: Nutzung von Partnerschaften für Zugang zu neuesten Cybersecurity-Technologien und Best Practices ohne interne Entwicklungskosten.\n• Risk Distribution: Strategische Verteilung von Cyber-Risiken durch diversifizierte Partnerlandschaften und angemessene Versicherungsmodelle.\n\n🎯 ADVISORIs Third-Party Cybersecurity Excellence:\n• Supply Chain Cyber Risk Assessment: Umfassende Bewertung der Cyber-Risiken in der gesamten Wertschöpfungskette mit quantitativer Risikomodellierung.\n• Partner Maturity Development: Programme zur gemeinsamen Entwicklung der NIST Maturity mit strategischen Partnern für gegenseitigen Nutzen.\n• Integrated Incident Response: Aufbau von gemeinsamen Incident Response Capabilities mit kritischen Partnern für koordinierte Threat Response.\n• Ecosystem Governance: Entwicklung von Governance-Modellen, die Cybersecurity-Standards across the entire Partner-Ecosystem durchsetzen und überwachen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie nutzen wir künstliche Intelligenz und Machine Learning zur Beschleunigung unserer NIST Maturity-Entwicklung und zur Automatisierung von Framework-Prozessen?",
        answer: "Künstliche Intelligenz und Machine Learning bieten transformative Möglichkeiten zur Beschleunigung der NIST Maturity-Entwicklung und können Framework-Prozesse von manuellen, ressourcenintensiven Aufgaben zu automatisierten, intelligenten Systemen revolutionieren. Für strategische Führungskräfte eröffnet dies neue Dimensionen der Cybersecurity-Effizienz und -Effektivität.\n\n🤖 AI-Driven NIST Framework Acceleration:\n• Automated Asset Discovery: KI-basierte Systeme zur kontinuierlichen Identifikation und Klassifikation von IT-Assets, Datenflüssen und Cyber-Risiken.\n• Intelligent Threat Detection: Machine Learning-Algorithmen, die Anomalien und potentielle Bedrohungen in Echtzeit erkennen und klassifizieren.\n• Predictive Risk Analytics: AI-Modelle zur Vorhersage von Cyber-Risiken und Optimierung präventiver Schutzmaßnahmen.\n• Automated Compliance Monitoring: Intelligente Systeme zur kontinuierlichen Überwachung der NIST Framework-Compliance mit automatisierter Berichterstattung.\n\n⚡ Strategic AI Implementation for Cybersecurity Excellence:\n• Decision Support Systems: KI-gestützte Entscheidungsunterstützung für C-Level-Cybersecurity-Entscheidungen mit Szenarioanalysen und ROI-Optimierung.\n• Adaptive Security Orchestration: Automatisierte Orchestrierung von Sicherheitsmaßnahmen basierend auf Echtzeit-Bedrohungslandschaft und NIST Framework-Prinzipien.\n• Intelligent Resource Allocation: Machine Learning-basierte Optimierung der Cybersecurity-Ressourcenallokation für maximale Wirksamkeit.\n• Continuous Learning Systems: Selbstlernende Systeme, die sich kontinuierlich an neue Bedrohungen und Geschäftsanforderungen anpassen.\n\n🚀 ADVISORIs AI-Enhanced NIST Implementation:\n• AI Strategy Development: Aufbau einer KI-Strategie für Cybersecurity, die technische Möglichkeiten mit Geschäftszielen und NIST Framework-Anforderungen harmonisiert.\n• Intelligent Automation Platform: Implementierung von AI/ML-Plattformen, die NIST Framework-Prozesse automatisieren und kontinuierlich optimieren.\n• Data-Driven Maturity Analytics: Entwicklung von AI-basierten Analytics, die NIST Maturity-Trends vorhersagen und Optimierungsempfehlungen generieren.\n• Human-AI Collaboration: Design von Mensch-KI-Kollaborationsmodellen, die menschliche Expertise mit AI-Capabilities für optimale Cybersecurity-Outcomes kombinieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie etablieren wir eine NIST-basierte Cybersecurity-Kultur, die Innovation fördert statt behindert und gleichzeitig robuste Sicherheit gewährleistet?",
        answer: "Die Etablierung einer NIST-basierten Cybersecurity-Kultur erfordert einen fundamentalen Paradigmenwechsel von Security als Hindernis zu Security als Enabler für Innovation und Geschäftswachstum. Für die C-Suite bedeutet dies die Schaffung einer Kultur, in der Cybersecurity-Excellence und innovative Geschäftsentwicklung sich gegenseitig verstärken.\n\n🌟 Innovation-Enabling Security Culture:\n• Security-by-Design Integration: Verankerung von NIST Framework-Prinzipien in alle Innovationsprozesse, sodass Sicherheit von Anfang an mitgedacht wird statt nachträglich hinzugefügt.\n• Risk-Informed Innovation: Kultureller Wandel hin zu intelligenter Risikoabwägung, die kalkulierte Risiken für Innovation akzeptiert, während kritische Assets geschützt bleiben.\n• Agile Security Mindset: Adoption agiler Sicherheitsmethoden, die schnelle Iteration und Innovation ermöglichen, ohne Sicherheitsstandards zu kompromittieren.\n• Continuous Learning Culture: Aufbau einer Lernkultur, die aus Sicherheitsereignissen lernt und diese als Innovationsmöglichkeiten betrachtet.\n\n🚀 Cultural Transformation Strategies:\n• Executive Leadership Modeling: C-Level-Führungskräfte als Vorbilder für innovation-orientierte Cybersecurity-Praktiken und intelligentes Risikomanagement.\n• Cross-Functional Collaboration: Aufbau interdisziplinärer Teams, die Cybersecurity-Experten mit Innovationsteams verbinden und gemeinsame Problemlösung fördern.\n• Innovation-Security KPIs: Entwicklung von Kennzahlen, die sowohl Sicherheitsexzellenz als auch Innovationsförderung messen und belohnen.\n• Fail-Safe Innovation: Schaffung von sicheren Experimentierräumen, in denen Innovation mit kalkulierten Risiken stattfinden kann.\n\n🎯 ADVISORIs Culture Transformation Approach:\n• Cultural Assessment und Design: Systematische Analyse der aktuellen Cybersecurity-Kultur und Design einer Zielkultur, die Innovation und Sicherheit harmonisiert.\n• Change Leadership Programs: Entwicklung von Leadership-Programmen, die Führungskräfte zu Champions einer innovation-fördernden Cybersecurity-Kultur machen.\n• Behavioral Design: Implementation von Anreizsystemen und Prozessen, die gewünschte Verhaltensweisen fördern und in der Organisation verankern.\n• Success Story Amplification: Systematische Identifikation und Kommunikation von Erfolgsgeschichten, die zeigen, wie NIST-basierte Cybersecurity Innovation ermöglicht hat."
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
