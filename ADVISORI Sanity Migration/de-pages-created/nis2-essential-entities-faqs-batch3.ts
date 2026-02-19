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
    console.log('Updating NIS2 Essential Entities page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-essential-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-essential-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI Essential Entities dabei, ihre kritischen Infrastrukturen gegen Advanced Persistent Threats (APTs) und staatlich gesponserte Cyberangriffe zu schützen, die speziell auf wesentliche Einrichtungen abzielen?",
        answer: "Essential Entities stehen im Fokus hochentwickelter Cyber-Bedrohungen, insbesondere APTs und staatlich gesponserter Angriffe, die gezielt auf kritische Infrastrukturen abzielen. ADVISORI entwickelt für die C-Suite mehrschichtige Verteidigungsstrategien, die nicht nur technische Exzellenz bieten, sondern auch strategische Resilienz gegen persistente und ressourcenstarke Angreifer gewährleisten.\n\n🛡️ Advanced Threat Defense für Essential Entities:\n• Zero Trust Architecture Implementation: Aufbau von Sicherheitsarchitekturen, die grundsätzlich niemandem vertrauen und jeden Zugriff kontinuierlich verifizieren, wodurch laterale Bewegungen von APTs effektiv verhindert werden.\n• AI-Powered Threat Detection: Deployment intelligenter Systeme, die abnormale Verhaltensmuster in Echtzeit erkennen und auch sophisticated Angriffe identifizieren können, die traditionelle signaturbasierte Systeme umgehen.\n• Deception Technology Integration: Implementierung von Honeypots und Deception-Systemen, die Angreifer in kontrollierte Umgebungen locken und wertvolle Intelligence über Angriffsmethoden und -ziele sammeln.\n• Threat Intelligence Fusion: Integration multipler Threat Intelligence Quellen, einschließlich staatlicher und privater Feeds, um proaktive Erkenntnisse über speziell auf Essential Entities gerichtete Bedrohungen zu erhalten.\n\n🎯 Strategic APT Resilience Framework:\n• Crown Jewel Protection: Identifikation und besondere Absicherung der wertvollsten und kritischsten Datenbestände und Systeme mit zusätzlichen Sicherheitsschichten und Zugriffskontrollen.\n• Threat Actor Profiling: Entwicklung detaillierter Profile relevanter Threat Actors und ihrer spezifischen Methoden, um gezielteAbwehrmaßnahmen zu entwickeln und Angriffspfade zu antizipieren.\n• National Security Coordination: Aufbau von Kommunikationskanälen mit nationalen Cybersicherheitsbehörden und Intelligence Services für den Austausch kritischer Bedrohungsinformationen.\n• Crisis Communication with Government: Etablierung vordefinierter Protokolle für die Kommunikation mit Regierungsstellen bei Verdacht auf staatlich gesponserte Angriffe, um nationale Sicherheitsinteressen zu berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Maßnahmen ergreift ADVISORI, um Essential Entities bei der Bewältigung der Herausforderungen durch Operational Technology (OT) und Industrial Control Systems (ICS) unter NIS2 zu unterstützen?",
        answer: "Essential Entities in kritischen Sektoren wie Energie, Wasser und Transport sind stark abhängig von Operational Technology (OT) und Industrial Control Systems (ICS), die unter NIS2 besonderen Cybersicherheitsanforderungen unterliegen. ADVISORI entwickelt für die C-Suite spezialisierte OT/ICS-Sicherheitsstrategien, die operative Kontinuität mit regulatorischer Compliance und Cybersicherheitsexzellenz verbinden.\n\n⚙️ OT/ICS-spezifische NIS2-Compliance Strategien:\n• OT/IT Convergence Security: Entwicklung integrierter Sicherheitskonzepte für die zunehmende Vernetzung von Operational Technology mit IT-Systemen, die sowohl OT-spezifische Anforderungen als auch NIS2-Compliance erfüllen.\n• Legacy System Protection: Implementierung spezieller Sicherheitsmaßnahmen für ältere ICS-Systeme, die nicht für moderne Cybersicherheitsanforderungen konzipiert wurden, aber kritisch für Essential Services sind.\n• Real-Time Monitoring Without Disruption: Aufbau von Überwachungssystemen, die kontinuierliche Sicherheitsüberwachung ermöglichen, ohne die Echtzeitanforderungen und Stabilität kritischer Industrieprozesse zu beeinträchtigen.\n• OT-Specific Incident Response: Entwicklung spezialisierter Incident Response Pläne, die die besonderen Anforderungen von OT-Umgebungen berücksichtigen, einschließlich Safety-Considerations und Produktionskontinuität.\n\n🏭 Operative Exzellenz in kritischen Infrastrukturen:\n• Safety-Security Integration: Harmonisierung von Safety (Betriebssicherheit) und Security (Cybersicherheit) Anforderungen, um sowohl physische Sicherheit als auch Cyber-Resilienz zu gewährleisten.\n• Predictive Maintenance Security: Integration von Cybersicherheitsüberlegungen in Predictive Maintenance Systeme, um sowohl operative Effizienz als auch Sicherheit zu optimieren.\n• Supply Chain OT Security: Spezielle Bewertung und Absicherung der OT-spezifischen Lieferketten, einschließlich Hardware, Firmware und spezialisierter Software-Komponenten.\n• Regulatory OT Reporting: Entwicklung spezifischer Berichterstattungsframeworks für OT-Incidents, die sowohl NIS2-Anforderungen als auch sektorspezifische Regulierungen (z.B. in der Energiebranche) erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie positioniert ADVISORI Essential Entities strategisch als Cybersicherheits-Champions in ihren jeweiligen Sektoren und welche Wettbewerbsvorteile entstehen daraus?",
        answer: "Essential Entities haben die einzigartige Gelegenheit, ihre NIS2-Compliance als Sprungbrett für Marktführerschaft in Cybersicherheit zu nutzen. ADVISORI unterstützt die C-Suite dabei, von reaktiver Compliance zu proaktiver Cybersicherheits-Innovation zu wechseln und dabei sowohl regulatorische Exzellenz als auch Wettbewerbsvorteile zu erzielen.\n\n🏆 Market Leadership durch Cybersicherheits-Excellence:\n• Sector Cybersecurity Advocacy: Positionierung als Thought Leader und Advocate für erhöhte Cybersicherheitsstandards in der gesamten Branche, wodurch Vertrauen und Reputation gestärkt werden.\n• Best Practice Sharing Leadership: Aufbau von Branchennetzwerken und Initiativen zum Austausch von Cybersicherheits-Best Practices, wodurch das Unternehmen als Innovator und verantwortungsvoller Marktführer wahrgenommen wird.\n• Regulatory Shaping Participation: Aktive Beteiligung an der Entwicklung zukünftiger Cybersicherheitsstandards und -regulierungen, um Einfluss auf die Gestaltung des regulatorischen Umfelds zu nehmen.\n• Public-Private Partnership Excellence: Aufbau vorbildlicher Partnerschaften mit Regierungsstellen und anderen Essential Entities, die als Modell für effektive Cybersicherheits-Kooperation dienen.\n\n💎 Competitive Advantage durch Cybersicherheits-Innovation:\n• Premium Service Differentiation: Entwicklung cybersicherheits-gestützter Premium-Services, die höhere Margen ermöglichen und Kunden mit besonderen Sicherheitsanforderungen ansprechen.\n• Trust-Based Customer Acquisition: Nutzung demonstrierter Cybersicherheitsexzellenz als primären Differenzierungsfaktor bei der Gewinnung sicherheitsbewusster Kunden und Partner.\n• Innovation Ecosystem Leadership: Aufbau von Cybersicherheits-Innovationspartnerschaften mit Startups, Universitäten und Technologieunternehmen, um Zugang zu neuesten Entwicklungen zu erhalten.\n• International Expansion Enablement: Nutzung überlegener Cybersicherheits-Compliance als Türöffner für internationale Märkte und grenzüberschreitende Geschäftsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche innovativen Ansätze verfolgt ADVISORI bei der Integration von Künstlicher Intelligenz und Machine Learning in die Cybersicherheitsstrategien von Essential Entities unter NIS2?",
        answer: "Die Integration von KI und Machine Learning in die Cybersicherheit bietet Essential Entities die Möglichkeit, nicht nur NIS2-Anforderungen zu erfüllen, sondern auch die nächste Generation der Cyber-Resilienz zu erreichen. ADVISORI entwickelt für die C-Suite KI-gestützte Cybersicherheitsstrategien, die gleichzeitig regulatorische Compliance, operative Effizienz und strategische Innovation fördern.\n\n🤖 AI-Powered Cybersecurity für Essential Entities:\n• Intelligent Threat Prediction: Implementierung von ML-Algorithmen, die historische Angriffsdaten und aktuelle Bedrohungsinformationen analysieren, um proaktive Vorhersagen über wahrscheinliche Angriffsvektoren und -zeitpunkte zu treffen.\n• Automated Incident Classification: Entwicklung KI-gestützter Systeme, die Cybersicherheitsvorfälle automatisch nach Schweregrad und Meldepflichtigkeit klassifizieren, wodurch NIS2-Compliance-Prozesse beschleunigt und Fehlerrisiken reduziert werden.\n• Adaptive Security Posture: Aufbau lernender Sicherheitssysteme, die sich kontinuierlich an neue Bedrohungsmuster anpassen und Sicherheitsmaßnahmen dynamisch optimieren, ohne menschliche Intervention.\n• AI-Enhanced Compliance Monitoring: Einsatz intelligenter Überwachungssysteme, die kontinuierlich alle Compliance-relevanten Aktivitäten analysieren und proaktiv auf potenzielle Verstöße oder Schwachstellen hinweisen.\n\n🧠 Strategic AI Integration für nachhaltige Cyber-Exzellenz:\n• Human-AI Collaboration Frameworks: Entwicklung optimaler Zusammenarbeitsmodelle zwischen menschlichen Cybersicherheitsexperten und KI-Systemen, die die Stärken beider Ansätze maximieren.\n• Explainable AI für Regulatory Compliance: Implementierung transparenter KI-Systeme, die ihre Entscheidungsprozesse nachvollziehbar dokumentieren und damit regulatorische Anforderungen an Nachweisbarkeit erfüllen.\n• AI Ethics in Cybersecurity: Etablierung ethischer Guidelines für den Einsatz von KI in Cybersicherheitskontext, um Vertrauen von Stakeholdern zu gewinnen und verantwortungsvolle Innovation zu demonstrieren.\n• Continuous Learning Infrastructure: Aufbau von Systemen, die aus jeder Bedrohung und jedem Incident lernen und diese Erkenntnisse zur kontinuierlichen Verbesserung der gesamten Cybersicherheitsarchitektur nutzen."
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
