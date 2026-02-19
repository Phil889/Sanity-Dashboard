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
    console.log('Updating Intelligent Automation Partner page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-partner' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-partner" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützt ADVISORI die digitale Transformation über Intelligent Automation hinaus?',
        answer: "Intelligent Automation ist ein zentraler Baustein der digitalen Transformation, aber erfolgreiche Digitalisierung erfordert einen ganzheitlichen Ansatz, der Technologie, Menschen und Prozesse gleichermaßen umfasst. ADVISORI entwickelt umfassende Digital Transformation Strategien, die Automatisierung als Katalysator für organisatorischen Wandel und Geschäftsinnovation nutzen.\n\n🌐 Ganzheitliche Digital Transformation Strategie:\n• Entwicklung integrierter Digitalisierungsroadmaps, die Automatisierung mit anderen digitalen Initiativen wie Cloud Migration, Data Analytics und Customer Experience Transformation verbinden.\n• Aufbau von Digital Operating Models, die neue Arbeitsweisen, Organisationsstrukturen und Governance-Ansätze für das digitale Zeitalter definieren.\n• Implementierung von Digital Culture Change Programmen zur Förderung digitaler Kompetenzen und Mindsets in der gesamten Organisation.\n• Etablierung von Digital Innovation Ecosystems für kontinuierliche Erneuerung und Anpassung an digitale Trends.\n\n📊 Data-Driven Business Transformation:\n• Aufbau umfassender Data Strategies, die Automatisierung mit Advanced Analytics, Machine Learning und Business Intelligence integrieren.\n• Implementierung von Data Governance Frameworks für qualitativ hochwertige, vertrauenswürdige Datengrundlagen.\n• Entwicklung von Self-Service Analytics Capabilities zur Demokratisierung von Dateninsights in der Organisation.\n• Etablierung von Real-Time Decision Making Systeme für agile, datengetriebene Geschäftsentscheidungen.\n\n🚀 Innovation und Geschäftsmodell-Transformation:\n• Unterstützung bei der Entwicklung neuer digitaler Geschäftsmodelle und Revenue Streams durch Automatisierungstechnologien.\n• Aufbau von Digital Product Development Capabilities für innovative Kundenangebote und Services.\n• Implementierung von Platform Business Models zur Skalierung digitaler Wertschöpfung.\n• Etablierung von Ecosystem Partnership Strategien für erweiterte digitale Wertschöpfungsnetzwerke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Branchen-spezifischen Ansätze verfolgt ADVISORI in Intelligent Automation Partnerschaften?',
        answer: "Jede Branche hat einzigartige Herausforderungen, regulatorische Anforderungen und Geschäftsmodelle, die spezifische Automatisierungsansätze erfordern. ADVISORI entwickelt branchenspezifische Expertise und maßgeschneiderte Lösungsansätze, die sowohl Best Practices als auch individuelle Anforderungen berücksichtigen und nachhaltigen Wettbewerbsvorteil schaffen.\n\n🏦 Finanzdienstleistungen und Banking:\n• Entwicklung spezialisierter RegTech-Lösungen für automatisierte Compliance-Überwachung und Reporting unter Berücksichtigung von Basel III, MiFID II und anderen Finanzregulierungen.\n• Implementierung von Fraud Detection und Anti-Money-Laundering-Systemen mit KI-gestützter Anomalieerkennung.\n• Aufbau von Customer Onboarding Automation für verbesserte Customer Experience bei gleichzeitiger KYC-Compliance.\n• Etablierung von Risk Management Automation für Echtzeit-Risikobewertung und -steuerung.\n\n🏭 Manufacturing und Industrie:\n• Implementierung von Smart Manufacturing Konzepten mit IoT-Integration und Predictive Maintenance Systemen.\n• Aufbau von Supply Chain Automation für optimierte Beschaffung, Produktion und Logistik.\n• Entwicklung von Quality Management Automation mit Computer Vision und Machine Learning für Qualitätskontrolle.\n• Etablierung von Digital Twin Technologien für virtuelle Produktions- und Prozessoptimierung.\n\n🏥 Healthcare und Life Sciences:\n• Entwicklung von Clinical Trial Automation für beschleunigte Forschung und Entwicklung unter Einhaltung von GCP-Standards.\n• Implementierung von Patient Care Automation für verbesserte Behandlungsqualität und Effizienz.\n• Aufbau von Regulatory Compliance Automation für FDA, EMA und andere Gesundheitsbehörden.\n• Etablierung von Medical Data Analytics für personalisierte Medizin und Behandlungsoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie gewährleistet ADVISORI Nachhaltigkeit und ESG-Compliance in Automatisierungspartnerschaften?',
        answer: "Nachhaltigkeit und ESG-Compliance sind zunehmend kritische Erfolgsfaktoren für Unternehmen und erfordern Integration in alle Geschäftsprozesse, einschließlich Automatisierungsstrategien. ADVISORI entwickelt nachhaltige Automatisierungslösungen, die nicht nur operative Effizienz steigern, sondern auch positive Umwelt- und Gesellschaftsauswirkungen generieren.\n\n🌱 Environmental Sustainability Integration:\n• Entwicklung von Green Automation Strategien zur Minimierung des Energieverbrauchs und CO2-Fußabdrucks von Automatisierungssystemen.\n• Implementierung von Sustainable Computing Practices mit energieeffizienten Algorithmen und Cloud-Optimierung.\n• Aufbau von Environmental Impact Monitoring Systemen zur kontinuierlichen Überwachung und Verbesserung der Umweltauswirkungen.\n• Etablierung von Circular Economy Prinzipien in Automatisierungsprozessen für Ressourcenoptimierung und Abfallreduzierung.\n\n👥 Social Responsibility und Mitarbeiterwohlbefinden:\n• Entwicklung von Human-Centric Automation Ansätzen, die Mitarbeiter unterstützen statt ersetzen und neue Karrieremöglichkeiten schaffen.\n• Implementierung von Diversity und Inclusion Prinzipien in Automatisierungsteams und -entscheidungen.\n• Aufbau von Skills Development Programme zur Vorbereitung der Belegschaft auf die automatisierte Zukunft.\n• Etablierung von Work-Life-Balance Verbesserungen durch intelligente Automatisierung repetitiver Aufgaben.\n\n🏛️ Governance und Ethical AI:\n• Implementierung von Ethical AI Frameworks zur Sicherstellung fairer, transparenter und verantwortungsvoller Automatisierung.\n• Aufbau von ESG Reporting Automation für transparente Nachhaltigkeitsberichterstattung.\n• Entwicklung von Stakeholder Engagement Systeme für kontinuierliche Kommunikation über Automatisierungsauswirkungen.\n• Etablierung von Impact Measurement Frameworks zur Quantifizierung positiver gesellschaftlicher und umweltbezogener Auswirkungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Exit-Strategien und Transition-Pläne bietet ADVISORI für Partnerschaftsbeendigungen?',
        answer: "Auch die beste Partnerschaft kann sich aufgrund sich ändernder Geschäftsanforderungen oder strategischer Neuausrichtungen entwickeln. ADVISORI entwickelt von Beginn an transparente Exit-Strategien und Transition-Pläne, die eine reibungslose Übergabe gewährleisten und die Kontinuität kritischer Automatisierungssysteme sicherstellen, ohne Geschäftsunterbrechungen zu verursachen.\n\n📋 Strukturierte Exit-Planung:\n• Entwicklung detaillierter Transition Roadmaps mit klaren Meilensteinen, Verantwortlichkeiten und Zeitplänen für verschiedene Exit-Szenarien.\n• Implementierung von Knowledge Transfer Protokollen zur vollständigen Dokumentation und Übergabe aller Automatisierungssysteme und -prozesse.\n• Aufbau von Handover Checklists und Validation Procedures zur Sicherstellung vollständiger und korrekter Systemübergaben.\n• Etablierung von Post-Transition Support Strukturen für temporäre Unterstützung während der Übergangsphase.\n\n🔄 Kontinuitätssicherung und Risikominimierung:\n• Implementierung von Business Continuity Plänen zur Aufrechterhaltung kritischer Automatisierungsfunktionen während der Transition.\n• Aufbau von Backup und Recovery Strategien für alle Automatisierungssysteme und Datenbestände.\n• Entwicklung von Vendor Transition Support für nahtlose Übergabe von Drittanbieter-Beziehungen und Lizenzen.\n• Etablierung von Performance Monitoring während der Übergangsphase zur frühzeitigen Identifikation potenzieller Probleme.\n\n🤝 Partnerschaftliche Transition-Unterstützung:\n• Bereitstellung umfassender Training und Coaching Programme für interne Teams zur Übernahme der Automatisierungsverantwortung.\n• Implementierung von Gradual Handover Modellen für schrittweise Verantwortungsübertragung ohne abrupte Änderungen.\n• Aufbau von Alumni Networks und Beratungsoptionen für langfristige Unterstützung auch nach Partnerschaftsende.\n• Etablierung von Success Metrics und Follow-up Prozesse zur Bewertung der Transition-Qualität und kontinuierlichen Verbesserung."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
