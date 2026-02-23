import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Risikomanagement page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikomanagement' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikomanagement" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie wird Human Factor Risk Management in das ISO 27001 Risikomanagement integriert?',
        answer: "Human Factor Risk Management adressiert die größte Schwachstelle in der Informationssicherheit: den Menschen. Die Integration menschlicher Faktoren in das Risikomanagement erfordert einen ganzheitlichen Ansatz, der Psychologie, Verhalten und organisatorische Kultur berücksichtigt.\n\n👥 Behavioral Risk Assessment:\n• Entwicklung von Behavioral Risk Profiling für verschiedene Mitarbeitergruppen und Rollen\n• Implementierung von Phishing-Simulationen und Social Engineering Tests zur Bewertung der menschlichen Anfälligkeit\n• Aufbau von Insider Threat Detection Programmen für frühzeitige Erkennung problematischer Verhaltensweisen\n• Etablierung von Stress und Workload Assessments, da überlastete Mitarbeiter höhere Sicherheitsrisiken darstellen\n• Integration von Cultural Assessment Tools zur Bewertung der Sicherheitskultur\n\n🧠 Psychologische Sicherheitsfaktoren:\n• Berücksichtigung kognitiver Verzerrungen und Entscheidungsfehler in Risikobewertungen\n• Entwicklung von Awareness-Programmen, die auf psychologischen Prinzipien basieren\n• Aufbau von Positive Security Culture Initiativen, die Sicherheit als gemeinsamen Wert fördern\n• Implementierung von Gamification-Ansätzen für nachhaltiges Sicherheitslernen\n• Etablierung von Feedback-Mechanismen, die positives Sicherheitsverhalten verstärken\n\n📚 Kontinuierliche Schulung und Entwicklung:\n• Entwicklung personalisierter Schulungsprogramme basierend auf individuellen Risikoprofilen\n• Implementierung von Micro-Learning-Ansätzen für kontinuierliche Sicherheitsbildung\n• Aufbau von Simulation-based Training für realistische Sicherheitsszenarien\n• Etablierung von Peer-to-Peer Learning und Security Champions Programmen\n• Integration von VR und AR Technologien für immersive Sicherheitsschulungen\n\n🔍 Monitoring und Intervention:\n• Aufbau von Behavioral Analytics für kontinuierliche Überwachung von Nutzerverhalten\n• Implementierung von Just-in-Time Interventionen bei riskanten Verhaltensweisen\n• Entwicklung von Coaching und Mentoring Programmen für Hochrisiko-Mitarbeiter\n• Etablierung von Employee Assistance Programs für persönliche und berufliche Unterstützung\n• Integration von Performance Management Systemen mit Sicherheitszielen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Rolle spielt Quantum Computing Risk Assessment im zukunftsorientierten Risikomanagement?',
        answer: "Quantum Computing stellt eine fundamentale Bedrohung für aktuelle Verschlüsselungsstandards dar und erfordert proaktive Risikobewertung und Vorbereitung. Organisationen müssen heute beginnen, sich auf die Post-Quantum-Ära vorzubereiten, um zukünftige Sicherheitsrisiken zu minimieren.\n\n🔮 Quantum Threat Timeline Assessment:\n• Entwicklung von Quantum Computing Readiness Assessments zur Bewertung der organisatorischen Vorbereitung\n• Implementierung von Cryptographic Inventory Management für vollständige Übersicht über verwendete Verschlüsselungsverfahren\n• Aufbau von Quantum Risk Scoring Modellen für verschiedene Datentypen und Systeme\n• Etablierung von Timeline-based Risk Planning für schrittweise Migration zu Post-Quantum-Kryptographie\n• Integration von Threat Intelligence über Quantum Computing Entwicklungen\n\n🛡️ Post-Quantum Cryptography Migration:\n• Entwicklung von Crypto-Agility Strategien für flexible Anpassung an neue Verschlüsselungsstandards\n• Implementierung von Hybrid Cryptographic Approaches während der Übergangsphase\n• Aufbau von Testing und Validation Frameworks für Post-Quantum-Algorithmen\n• Etablierung von Performance Impact Assessments für neue Verschlüsselungsverfahren\n• Integration von Compliance Mapping für regulatorische Anforderungen\n\n📊 Data Classification und Prioritization:\n• Entwicklung von Quantum-Risk-based Data Classification Schemas\n• Implementierung von Long-term Value Assessments für Daten, die auch in Zukunft schützenswert sind\n• Aufbau von Criticality Matrices für verschiedene Informationstypen\n• Etablierung von Retention Policy Reviews unter Quantum-Gesichtspunkten\n• Integration von Business Impact Analysis für Quantum-bedrohte Assets\n\n🔄 Continuous Monitoring und Adaptation:\n• Aufbau von Quantum Computing Intelligence Monitoring für aktuelle Entwicklungen\n• Implementierung von Research und Development Tracking in der Quantum-Technologie\n• Entwicklung von Scenario Planning für verschiedene Quantum-Breakthrough-Szenarien\n• Etablierung von Vendor Assessment Frameworks für Quantum-sichere Lösungen\n• Integration von Standards Monitoring für Post-Quantum-Kryptographie-Entwicklungen\n\n🚀 Strategic Planning und Investment:\n• Entwicklung von Quantum-Readiness Roadmaps für systematische Vorbereitung\n• Implementierung von Budget Planning für Post-Quantum-Migration\n• Aufbau von Skills Development Programmen für Quantum-Sicherheit\n• Etablierung von Partnership Strategies mit Quantum-Sicherheitsanbietern\n• Integration von Innovation Labs für Quantum-Sicherheitsforschung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie wird ESG Risk Management in das strategische Informationssicherheits-Risikomanagement integriert?',
        answer: "ESG-Faktoren werden zunehmend zu kritischen Geschäftsrisiken, die auch die Informationssicherheit betreffen. Die Integration von Environmental, Social und Governance Aspekten in das Risikomanagement schafft nachhaltige und verantwortungsvolle Sicherheitsstrategien.\n\n🌱 Environmental Risk Integration:\n• Bewertung der Umweltauswirkungen von IT-Infrastruktur und Sicherheitstechnologien\n• Implementierung von Green IT Strategien, die Sicherheitsanforderungen mit Nachhaltigkeitszielen vereinen\n• Aufbau von Carbon Footprint Assessments für Sicherheitsoperationen\n• Entwicklung von Sustainable Security Architectures mit reduziertem Energieverbrauch\n• Integration von Climate Risk Assessments für physische IT-Infrastruktur\n\n👥 Social Responsibility und Stakeholder Impact:\n• Entwicklung von Digital Rights und Privacy-by-Design Ansätzen\n• Implementierung von Inclusive Security Designs, die verschiedene Nutzergruppen berücksichtigen\n• Aufbau von Community Impact Assessments für Sicherheitsmaßnahmen\n• Etablierung von Ethical AI und Algorithm Governance für verantwortungsvolle Technologienutzung\n• Integration von Human Rights Impact Assessments in Sicherheitsentscheidungen\n\n🏛️ Governance und Transparenz:\n• Aufbau von ESG-integrated Risk Governance Strukturen\n• Implementierung von Transparency Reporting für Sicherheits- und Datenschutzpraktiken\n• Entwicklung von Stakeholder Engagement Prozessen für Sicherheitsentscheidungen\n• Etablierung von Ethics Committees für Technologie- und Sicherheitsentscheidungen\n• Integration von Whistleblower Protection in Sicherheits-Governance\n\n📊 ESG Risk Metrics und Reporting:\n• Entwicklung von ESG-Security KPIs für integrierte Performance-Messung\n• Implementierung von Sustainability Reporting für Sicherheitsoperationen\n• Aufbau von Impact Measurement Frameworks für gesellschaftliche Auswirkungen\n• Etablierung von Third-Party ESG Assessments für Lieferanten und Partner\n• Integration von ESG Ratings in Vendor Risk Management\n\n🎯 Strategic ESG-Security Alignment:\n• Entwicklung von Purpose-driven Security Strategies, die gesellschaftlichen Nutzen schaffen\n• Implementierung von Long-term Value Creation Ansätzen in der Sicherheitsplanung\n• Aufbau von Stakeholder Capitalism Prinzipien in Sicherheitsentscheidungen\n• Etablierung von Sustainable Innovation Labs für verantwortungsvolle Sicherheitstechnologien\n• Integration von ESG Considerations in Mergers und Acquisitions"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche Bedeutung hat Crisis Communication und Reputation Risk Management im integrierten Risikomanagement?',
        answer: "Crisis Communication und Reputation Risk Management sind kritische Komponenten des modernen Risikomanagements, da Sicherheitsvorfälle nicht nur technische, sondern auch erhebliche Reputations- und Vertrauensschäden verursachen können. Eine proaktive Kommunikationsstrategie minimiert langfristige Geschäftsauswirkungen.\n\n📢 Proaktive Kommunikationsplanung:\n• Entwicklung von Crisis Communication Playbooks für verschiedene Incident-Szenarien\n• Implementierung von Stakeholder Mapping und Message Frameworks für zielgruppenspezifische Kommunikation\n• Aufbau von Media Relations Strategien für transparente und vertrauensvolle Berichterstattung\n• Etablierung von Social Media Crisis Management für schnelle Response in digitalen Kanälen\n• Integration von Legal und Compliance Considerations in Kommunikationsstrategien\n\n🎯 Reputation Risk Assessment:\n• Entwicklung von Reputation Impact Scoring für verschiedene Risikoszenarien\n• Implementierung von Brand Value Protection Strategien\n• Aufbau von Customer Trust Metrics und Monitoring-Systemen\n• Etablierung von Competitive Intelligence für Reputationsvergleiche\n• Integration von ESG Reputation Factors in Risikobewertungen\n\n🔄 Real-Time Communication Management:\n• Aufbau von Crisis Communication Centers für koordinierte Response\n• Implementierung von Automated Alerting und Notification Systeme\n• Entwicklung von Multi-Channel Communication Strategies\n• Etablierung von Spokesperson Training und Media Preparation\n• Integration von Translation und Localization für globale Kommunikation\n\n📊 Stakeholder Engagement und Feedback:\n• Entwicklung von Stakeholder Sentiment Monitoring und Analysis\n• Implementierung von Customer Communication Portals für transparente Updates\n• Aufbau von Investor Relations Strategies für Sicherheitskommunikation\n• Etablierung von Employee Communication Frameworks für interne Transparenz\n• Integration von Regulatory Communication Protocols\n\n🚀 Recovery und Vertrauenswiederherstellung:\n• Entwicklung von Trust Rebuilding Strategies nach Sicherheitsvorfällen\n• Implementierung von Transparency Initiatives für langfristige Vertrauensbildung\n• Aufbau von Community Engagement Programmen\n• Etablierung von Continuous Improvement Communication für Lessons Learned\n• Integration von Brand Recovery Metrics und Success Indicators"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
