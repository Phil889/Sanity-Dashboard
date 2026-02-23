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
    console.log('Updating Beratung KI-Sicherheit page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'beratung-ki-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "beratung-ki-sicherheit" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie können Unternehmen ihre AI-Teams und Mitarbeiter für Sicherheitsrisiken sensibilisieren und welche Schulungsansätze empfiehlt ADVISORI?',
        answer: "Human Factor Security ist ein kritischer, oft unterschätzter Aspekt der AI-Sicherheit, da selbst die fortschrittlichsten technischen Schutzmaßnahmen durch menschliche Fehler oder mangelndes Bewusstsein kompromittiert werden können. ADVISORI entwickelt umfassende AI-Security-Awareness-Programme, die sowohl technische Teams als auch Geschäftsnutzer für die einzigartigen Sicherheitsherausforderungen von AI-Systemen sensibilisieren.\n\n👥 AI-Security Awareness Dimensionen:\n• Technical Team Education: Spezialisierte Schulungen für Entwickler, Data Scientists und AI-Engineers über sichere AI-Entwicklungspraktiken, Threat Modeling und Secure Coding für ML-Systeme.\n• Business User Training: Sensibilisierung von Geschäftsnutzern für AI-Sicherheitsrisiken, verantwortungsvolle AI-Nutzung und Erkennung verdächtiger AI-Verhaltensweisen.\n• Executive Awareness: C-Level-Briefings über strategische AI-Sicherheitsrisiken, Governance-Anforderungen und Investitionsprioritäten für AI-Security.\n• Cross-Functional Collaboration: Förderung der Zusammenarbeit zwischen Security-, AI- und Business-Teams für ganzheitliche Sicherheitskultur.\n\n🎓 ADVISORI's Training Framework:\n• Hands-On Security Labs: Praktische Übungen mit realistischen AI-Sicherheitsszenarien, einschließlich Adversarial Attack Simulations und Incident Response Drills.\n• Role-Based Learning Paths: Maßgeschneiderte Lernpfade für verschiedene Rollen und Verantwortlichkeiten im AI-Ökosystem des Unternehmens.\n• Continuous Learning Programs: Etablierung kontinuierlicher Weiterbildungsprogramme, die mit der schnellen Entwicklung von AI-Sicherheitsbedrohungen Schritt halten.\n• Security Culture Integration: Integration von AI-Sicherheitsbewusstsein in die Unternehmenskultur durch regelmäßige Kommunikation, Gamification und Incentive-Programme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Herausforderungen entstehen bei der Sicherung von Edge AI und IoT-integrierten AI-Systemen und wie adressiert ADVISORI diese?',
        answer: "Edge AI und IoT-integrierte AI-Systeme stellen einzigartige Sicherheitsherausforderungen dar, da sie oft in ungeschützten Umgebungen operieren, begrenzte Rechenressourcen haben und schwer zu überwachen sind. ADVISORI entwickelt spezialisierte Sicherheitsstrategien für Edge AI-Deployments, die sowohl die physischen als auch die digitalen Sicherheitsaspekte berücksichtigen.\n\n🌐 Edge AI Security Challenges:\n• Physical Security Constraints: Schutz von AI-Modellen und -Daten in physisch zugänglichen Edge-Geräten, die Diebstahl, Manipulation oder Reverse Engineering ausgesetzt sein können.\n• Resource-Constrained Security: Implementierung effektiver Sicherheitsmaßnahmen unter den Beschränkungen von Rechenleistung, Speicher und Energieverbrauch von Edge-Geräten.\n• Distributed Attack Surface: Management der erweiterten Angriffsfläche durch Tausende oder Millionen von Edge-Geräten mit AI-Funktionalitäten.\n• Connectivity und Update Challenges: Sicherstellung sicherer Kommunikation und regelmäßiger Security Updates für Edge AI-Systeme mit intermittierender Konnektivität.\n\n🔒 ADVISORI's Edge AI Security Framework:\n• Lightweight Security Protocols: Entwicklung ressourceneffizienter Sicherheitsprotokolle, die speziell für die Beschränkungen von Edge AI-Geräten optimiert sind.\n• Hardware-Based Security: Integration von Hardware Security Modules und Trusted Execution Environments für Edge AI-Anwendungen.\n• Federated Security Management: Implementierung dezentraler Sicherheitsmanagement-Ansätze, die lokale Autonomie mit zentraler Überwachung und Kontrolle kombinieren.\n• Resilient Edge Architectures: Entwicklung selbstheilender Edge AI-Systeme, die auch bei partiellen Kompromittierungen oder Ausfällen funktionsfähig bleiben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie können Unternehmen AI-Sicherheit in ihre bestehenden Security Operations Centers integrieren und welche Tools empfiehlt ADVISORI?',
        answer: "Die Integration von AI-Sicherheit in bestehende Security Operations Centers erfordert sowohl technologische Erweiterungen als auch organisatorische Anpassungen. AI-Systeme generieren einzigartige Security Events und erfordern spezialisierte Monitoring- und Response-Fähigkeiten. ADVISORI entwickelt maßgeschneiderte SOC-Integration-Strategien, die AI-Security nahtlos in bestehende Sicherheitsoperationen einbetten.\n\n🏢 SOC Integration Challenges:\n• AI-Specific Event Correlation: Entwicklung von Korrelationsregeln und Playbooks für AI-spezifische Security Events, die sich von traditionellen IT-Sicherheitsereignissen unterscheiden.\n• Skill Gap Management: Aufbau von AI-Security-Expertise innerhalb bestehender SOC-Teams und Integration spezialisierter AI-Security-Analysten.\n• Tool Integration: Nahtlose Integration von AI-Security-Tools in bestehende SIEM-, SOAR- und Threat Intelligence-Plattformen.\n• Alert Fatigue Prevention: Intelligente Filterung und Priorisierung von AI-Security-Alerts zur Vermeidung von Überlastung der SOC-Analysten.\n\n🛠️ ADVISORI's SOC Enhancement Framework:\n• AI-Aware SIEM Configuration: Anpassung bestehender SIEM-Systeme für die Erfassung, Analyse und Korrelation von AI-spezifischen Log-Daten und Security Events.\n• Specialized AI Security Tools: Integration führender AI-Security-Lösungen für Model Monitoring, Adversarial Attack Detection und AI Governance.\n• Automated Response Orchestration: Entwicklung automatisierter Response-Workflows für häufige AI-Sicherheitsvorfälle zur Entlastung der SOC-Teams.\n• Threat Intelligence Enhancement: Erweiterung bestehender Threat Intelligence-Feeds um AI-spezifische Bedrohungsinformationen und Indicators of Compromise."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Rolle spielt Privacy-Preserving AI bei der Sicherheitsstrategie und wie implementiert ADVISORI diese Technologien?',
        answer: "Privacy-Preserving AI ist nicht nur eine Compliance-Anforderung, sondern ein fundamentaler Sicherheitsbaustein, der es ermöglicht, die Vorteile der KI zu nutzen, ohne sensible Daten zu gefährden. ADVISORI implementiert fortschrittliche Privacy-Preserving-Technologien, die sowohl Datenschutz als auch AI-Performance optimieren und gleichzeitig neue Sicherheitsdimensionen erschließen.\n\n🔐 Privacy-Preserving AI Technologies:\n• Differential Privacy: Implementierung mathematischer Garantien für Datenschutz, die es ermöglichen, nützliche Insights aus Daten zu gewinnen, ohne individuelle Datenpunkte preiszugeben.\n• Federated Learning: Entwicklung dezentraler Lernansätze, bei denen AI-Modelle trainiert werden, ohne dass sensible Daten das lokale Umfeld verlassen müssen.\n• Homomorphic Encryption: Einsatz von Verschlüsselungstechnologien, die Berechnungen auf verschlüsselten Daten ermöglichen, ohne diese zu entschlüsseln.\n• Secure Multi-Party Computation: Implementierung von Protokollen, die es mehreren Parteien ermöglichen, gemeinsam AI-Modelle zu trainieren, ohne ihre Daten zu teilen.\n\n🛡️ ADVISORI's Privacy-First AI Architecture:\n• Privacy Budget Management: Systematische Verwaltung von Privacy-Budgets in Differential Privacy-Systemen zur Optimierung des Trade-offs zwischen Datenschutz und Modellgenauigkeit.\n• Secure Aggregation Protocols: Entwicklung sicherer Aggregationsverfahren für Federated Learning, die sowohl gegen externe Angriffe als auch gegen malicious Participants schützen.\n• Privacy-Preserving Model Sharing: Implementierung sicherer Verfahren für das Teilen von AI-Modellen zwischen Organisationen, ohne sensible Trainingsdaten preiszugeben.\n• Continuous Privacy Monitoring: Etablierung kontinuierlicher Überwachung der Privacy-Garantien in produktiven AI-Systemen zur Sicherstellung dauerhafter Datenschutz-Compliance."
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
