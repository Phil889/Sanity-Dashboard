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
    console.log('Updating NIS2 Supply Chain Security page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-supply-chain-security' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-supply-chain-security" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie hilft ADVISORI bei der Entwicklung einer NIS2-konformen Supply Chain Crisis Communication-Strategie für kritische Stakeholder?",
        answer: "Supply Chain-Vorfälle können erhebliche Auswirkungen auf multiple Stakeholder haben und erfordern eine koordinierte, transparente Kommunikationsstrategie. Die NIS2-Richtlinie fordert zeitnahe Meldung an Behörden und betroffene Parteien. ADVISORI entwickelt umfassende Crisis Communication-Frameworks, die sowohl regulatorische Anforderungen erfüllen als auch Vertrauen und Reputation schützen.\n\n📢 Strategische Crisis Communication für Supply Chain-Vorfälle:\n• Multi-Stakeholder Communication Matrix: Entwicklung gezielter Kommunikationsstrategien für verschiedene Stakeholder-Gruppen wie Regulatoren, Kunden, Investoren, Partner und Medien.\n• Real-time Information Management: Implementierung von Systemen zur schnellen Sammlung, Validierung und Verbreitung von Vorfallsinformationen entlang der Lieferkette.\n• Regulatory Reporting Automation: Automatisierte Systeme zur NIS2-konformen Meldung von Supply Chain-Vorfällen an zuständige Behörden innerhalb der vorgeschriebenen Fristen.\n• Reputation Protection Strategies: Entwicklung von Kommunikationsansätzen, die Transparenz fördern und gleichzeitig Vertrauen und Markenimage schützen.\n\n🛡️ ADVISORI's Crisis Communication Excellence:\n• Pre-scripted Communication Templates: Vorbereitung standardisierter, aber anpassbarer Kommunikationsvorlagen für verschiedene Vorfallstypen und Stakeholder-Gruppen.\n• Cross-functional Crisis Teams: Etablierung interdisziplinärer Teams aus Legal, PR, IT und Business-Experten für koordinierte Krisenkommunikation.\n• Stakeholder Sentiment Monitoring: Implementierung von Tools zur Überwachung der Stakeholder-Reaktionen und Anpassung der Kommunikationsstrategie in Echtzeit.\n• Post-Incident Communication Analysis: Systematische Bewertung der Kommunikationseffektivität nach Vorfällen zur kontinuierlichen Verbesserung der Crisis Communication-Kapazitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Quantum-resistant Cryptography in der zukünftigen NIS2-Supply Chain Security und wie bereitet ADVISORI Organisationen darauf vor?",
        answer: "Die Bedrohung durch Quantencomputer für aktuelle kryptographische Verfahren erfordert proaktive Vorbereitung auf post-quantum cryptography. Im Kontext der NIS2-Supply Chain Security bedeutet dies, dass alle kryptographischen Komponenten in der Lieferkette zukunftssicher gestaltet werden müssen. ADVISORI entwickelt Quantum-ready Security-Architekturen, die sowohl aktuelle als auch zukünftige Bedrohungen adressieren.\n\n🔮 Quantum Threat Assessment für Supply Chains:\n• Cryptographic Inventory und Risk Assessment: Umfassende Bewertung aller kryptographischen Implementierungen in Ihrer Lieferkette und deren Vulnerabilität gegenüber Quantum-Angriffen.\n• Migration Roadmap zu Post-Quantum Cryptography: Entwicklung schrittweiser Migrationspläne für den Übergang zu quantum-resistenten Verschlüsselungsverfahren.\n• Hybrid Cryptographic Approaches: Implementierung von Übergangslösungen, die sowohl klassische als auch post-quantum kryptographische Verfahren kombinieren.\n• Supply Chain Crypto-Agility: Entwicklung flexibler kryptographischer Architekturen, die schnelle Anpassungen an neue Standards ermöglichen.\n\n⚡ ADVISORI's Quantum-Ready Supply Chain Strategy:\n• Early Adoption Programs: Pilotprojekte zur Erprobung von NIST-standardisierten post-quantum Algorithmen in kontrollierten Supply Chain-Umgebungen.\n• Vendor Quantum Readiness Assessment: Bewertung der Quantum-Preparedness von kritischen Lieferanten und Entwicklung von Upgrade-Plänen.\n• Quantum-Safe Communication Protocols: Implementierung quantum-resistenter Kommunikationsprotokolle für kritische Supplier-Interaktionen.\n• Future-proof Security Architecture: Design von Supply Chain Security-Systemen, die flexibel auf zukünftige kryptographische Entwicklungen reagieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI bei der Implementierung von NIS2-konformen Supply Chain Security-Schulungen und Awareness-Programmen für alle Stakeholder?",
        answer: "Human Factors sind oft das schwächste Glied in der Supply Chain Security. Die NIS2-Richtlinie erkennt die Bedeutung von Awareness und Training für alle Beteiligten in der Lieferkette an. ADVISORI entwickelt umfassende Schulungsprogramme, die sowohl interne Teams als auch externe Partner über Supply Chain Security-Risiken und Best Practices aufklären.\n\n👥 Comprehensive Supply Chain Security Education:\n• Role-specific Training Programs: Entwicklung zielgruppenspezifischer Schulungen für verschiedene Rollen wie Procurement, IT, Management und operative Teams.\n• Supplier Security Awareness: Schulungsprogramme für Lieferanten zur Sensibilisierung für NIS2-Anforderungen und Supply Chain Security Best Practices.\n• Gamified Learning Approaches: Einsatz interaktiver und spielerischer Lernmethoden zur Steigerung der Engagement und Retention von Security-Wissen.\n• Continuous Learning Platforms: Implementierung von Lernplattformen für kontinuierliche Weiterbildung und regelmäßige Updates zu neuen Bedrohungen und Praktiken.\n\n🎯 ADVISORI's Training Excellence Framework:\n• Real-world Scenario Simulations: Entwicklung realistischer Supply Chain Security-Szenarien für hands-on Training und Übungen.\n• Multilingual und Cultural Adaptation: Anpassung von Schulungsinhalten an verschiedene Sprachen und Kulturen in globalen Lieferketten.\n• Performance Assessment und Certification: Implementierung von Bewertungssystemen zur Messung der Lernfortschritte und Ausstellung von Zertifizierungen.\n• Train-the-Trainer Programs: Ausbildung interner Champions, die Supply Chain Security-Wissen in ihren Organisationen multiplizieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche innovativen Technologien nutzt ADVISORI für Predictive Supply Chain Risk Analytics im Kontext der NIS2-Compliance?",
        answer: "Predictive Analytics revolutioniert die Art, wie Supply Chain-Risiken identifiziert und gemitigt werden. Durch den Einsatz fortgeschrittener Technologien können Organisationen proaktiv auf potenzielle Bedrohungen reagieren, bevor sie zu Vorfällen werden. ADVISORI implementiert cutting-edge Analytics-Lösungen, die sowohl technische als auch geschäftliche Risikoindikatoren in der Lieferkette kontinuierlich überwachen und bewerten.\n\n🔍 Advanced Predictive Risk Technologies:\n• Machine Learning Risk Modeling: Einsatz von ML-Algorithmen zur Analyse historischer Daten und Identifikation von Mustern, die auf zukünftige Supply Chain-Risiken hindeuten.\n• Graph Analytics für Supply Chain Mapping: Verwendung von Graph-Datenbanken und -Analytics zur Visualisierung komplexer Lieferkettenabhängigkeiten und Risikokaskaden.\n• Natural Language Processing für Threat Intelligence: Automatisierte Analyse von News, Social Media und anderen Quellen zur Früherkennung von Risiken bei Lieferanten.\n• Geopolitical Risk Integration: Einbeziehung geopolitischer Daten und Ereignisse in Risikomodelle zur Bewertung von regionalen und globalen Supply Chain-Risiken.\n\n📊 ADVISORI's Predictive Analytics Excellence:\n• Real-time Risk Scoring: Kontinuierliche Neubewertung von Lieferantenrisiken basierend auf sich ändernden Marktbedingungen und Bedrohungslagen.\n• Anomaly Detection Systems: Implementation von KI-gestützten Systemen zur Erkennung ungewöhnlicher Verhaltensweisen oder Veränderungen bei Lieferanten.\n• Scenario Planning und Stress Testing: Entwicklung von What-if-Szenarien zur Bewertung der Supply Chain-Resilienz unter verschiedenen Stressbedingungen.\n• Collaborative Risk Intelligence: Aufbau von Plattformen für den sicheren Austausch von Risikoinformationen zwischen Lieferkettenpartnern."
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
