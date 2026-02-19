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
    console.log('Updating Beratung KI-Sicherheit page with FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: 'Warum ist KI-Sicherheit mehr als nur traditionelle Cybersecurity und wie adressiert ADVISORI die einzigartigen Herausforderungen von AI-Systemen?',
        answer: "KI-Sicherheit unterscheidet sich fundamental von herkömmlicher Cybersecurity, da AI-Systeme völlig neue Angriffsvektoren und Schwachstellen einführen, die mit traditionellen Sicherheitsmaßnahmen nicht abgedeckt werden können. Während klassische IT-Sicherheit primär auf den Schutz von Daten und Systemen vor externen Bedrohungen fokussiert, müssen AI-Sicherheitsstrategien auch die inhärenten Risiken intelligenter Algorithmen, Modellmanipulation und unvorhersehbare Systemverhalten berücksichtigen.\n\n🎯 Einzigartige AI-Sicherheitsherausforderungen:\n• Adversarial Attacks: Gezielte Manipulation von Eingabedaten, um AI-Modelle zu täuschen oder falsche Entscheidungen zu provozieren, ohne dass traditionelle Sicherheitssysteme diese Angriffe erkennen.\n• Model Poisoning: Kompromittierung der Trainingsdaten oder des Lernprozesses, um das Verhalten des AI-Systems dauerhaft zu beeinflussen und Backdoors zu implementieren.\n• Data Leakage: Unbeabsichtigte Preisgabe sensibler Informationen durch AI-Modelle, die während des Trainings auf vertrauliche Daten zugegriffen haben.\n• Explainability und Transparenz: Schwierigkeit, die Entscheidungsfindung komplexer AI-Systeme nachzuvollziehen und potenzielle Sicherheitslücken zu identifizieren.\n\n🛡️ ADVISORI's ganzheitlicher AI-Security-Ansatz:\n• Multi-Layer Defense Architecture: Implementierung spezialisierter Sicherheitsschichten, die sowohl traditionelle als auch AI-spezifische Bedrohungen abwehren.\n• Proaktive Threat Modeling: Entwicklung umfassender Bedrohungsmodelle, die alle Phasen des AI-Lebenszyklus von der Datensammlung bis zum Deployment abdecken.\n• Continuous Security Validation: Etablierung kontinuierlicher Überwachungs- und Validierungsprozesse für AI-Modelle in Produktionsumgebungen.\n• DSGVO-Integration: Nahtlose Integration von Datenschutzanforderungen in AI-Sicherheitsarchitekturen für vollständige Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie können Unternehmen ihre bestehenden AI-Systeme gegen Adversarial Attacks absichern und welche präventiven Maßnahmen empfiehlt ADVISORI?',
        answer: "Adversarial Attacks stellen eine der sophistiziertesten Bedrohungen für AI-Systeme dar, da sie die fundamentalen Schwächen maschineller Lernalgorithmen ausnutzen. Diese Angriffe können bestehende AI-Systeme kompromittieren, ohne dass herkömmliche Sicherheitsmaßnahmen Alarm schlagen. ADVISORI entwickelt mehrschichtige Verteidigungsstrategien, die sowohl reaktive als auch proaktive Schutzmaßnahmen kombinieren.\n\n🔍 Comprehensive Adversarial Defense Strategy:\n• Input Sanitization und Validation: Implementierung robuster Eingabevalidierung, die verdächtige oder manipulierte Daten erkennt, bevor sie das AI-Modell erreichen.\n• Adversarial Training: Systematisches Training von AI-Modellen mit adversarialen Beispielen, um ihre Robustheit gegen bekannte Angriffsmuster zu erhöhen.\n• Ensemble Methods: Einsatz mehrerer AI-Modelle mit unterschiedlichen Architekturen, um die Wahrscheinlichkeit erfolgreicher Angriffe zu reduzieren.\n• Real-time Anomaly Detection: Kontinuierliche Überwachung von Modellverhalten und -ausgaben zur Erkennung ungewöhnlicher Muster oder Abweichungen.\n\n🛠️ ADVISORI's Präventive Schutzmaßnahmen:\n• Model Hardening: Systematische Stärkung von AI-Modellen durch spezialisierte Trainingsmethoden und Architekturoptimierungen.\n• Defense-in-Depth Architecture: Implementierung mehrschichtiger Sicherheitsarchitekturen, die verschiedene Verteidigungslinien gegen adversariale Angriffe etablieren.\n• Threat Intelligence Integration: Kontinuierliche Aktualisierung der Verteidigungsstrategien basierend auf neuesten Erkenntnissen über adversariale Angriffstechniken.\n• Incident Response Planning: Entwicklung spezialisierter Reaktionspläne für den Fall erfolgreicher adversarialer Angriffe, einschließlich Schadensbegrenzung und Systemwiederherstellung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche DSGVO-spezifischen Anforderungen gelten für AI-Systeme und wie stellt ADVISORI sicher, dass KI-Implementierungen vollständig datenschutzkonform sind?',
        answer: "Die DSGVO stellt besondere Herausforderungen für AI-Systeme dar, da viele traditionelle Datenschutzprinzipien nicht direkt auf maschinelles Lernen anwendbar sind. KI-Systeme verarbeiten oft große Mengen personenbezogener Daten auf komplexe Weise, was spezielle Compliance-Strategien erfordert. ADVISORI entwickelt maßgeschneiderte DSGVO-Compliance-Frameworks, die sowohl rechtliche Anforderungen erfüllen als auch die Innovationskraft der KI erhalten.\n\n📋 DSGVO-Kernprinzipien für AI-Systeme:\n• Rechtmäßigkeit und Transparenz: Etablierung klarer Rechtsgrundlagen für AI-Datenverarbeitung und Gewährleistung nachvollziehbarer Entscheidungsprozesse durch Explainable AI-Technologien.\n• Zweckbindung und Datenminimierung: Sicherstellung, dass AI-Systeme nur für definierte Zwecke eingesetzt werden und ausschließlich notwendige Daten verarbeiten.\n• Richtigkeit und Speicherbegrenzung: Implementierung von Mechanismen zur Gewährleistung der Datenqualität und automatischen Löschung nicht mehr benötigter Informationen.\n• Betroffenenrechte: Technische Umsetzung von Auskunfts-, Berichtigungs- und Löschungsrechten in AI-Systemen.\n\n🔒 ADVISORI's Privacy-by-Design für AI:\n• Differential Privacy: Implementierung mathematischer Verfahren, die Datenschutz auf algorithmischer Ebene gewährleisten, ohne die Modellleistung zu beeinträchtigen.\n• Federated Learning: Entwicklung dezentraler Lernansätze, die es ermöglichen, AI-Modelle zu trainieren, ohne sensible Daten zu zentralisieren.\n• Data Anonymization: Einsatz fortschrittlicher Anonymisierungstechniken, die auch bei komplexen AI-Anwendungen wirksam bleiben.\n• Consent Management: Implementierung granularer Einwilligungssysteme, die dynamische Anpassungen der Datenverarbeitung basierend auf Nutzerpräferenzen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickelt ADVISORI eine umfassende AI Governance-Strategie, die sowohl technische Sicherheit als auch ethische Verantwortung gewährleistet?',
        answer: "AI Governance ist ein multidimensionales Framework, das technische Exzellenz, ethische Verantwortung und regulatorische Compliance in einem kohärenten System vereint. ADVISORI versteht AI Governance nicht als nachgelagerte Compliance-Übung, sondern als strategischen Enabler für verantwortungsvolle Innovation. Unser Ansatz integriert Governance-Prinzipien von der Konzeption bis zur Implementierung und darüber hinaus.\n\n🏛️ Fundamentale Governance-Dimensionen:\n• Ethical AI Framework: Entwicklung unternehmensweiter Ethik-Richtlinien, die Fairness, Transparenz und Verantwortlichkeit in allen AI-Anwendungen gewährleisten.\n• Risk Management Integration: Systematische Integration von AI-Risiken in bestehende Enterprise Risk Management-Systeme und Governance-Strukturen.\n• Stakeholder Engagement: Etablierung von Prozessen zur Einbindung aller relevanten Stakeholder in AI-Entscheidungen, von Entwicklern bis zu Endnutzern.\n• Continuous Monitoring: Implementierung kontinuierlicher Überwachungssysteme für AI-Performance, Bias-Erkennung und Compliance-Validierung.\n\n⚖️ ADVISORI's Responsible AI Implementation:\n• Multi-Stakeholder Governance Boards: Einrichtung interdisziplinärer Gremien, die technische, ethische und geschäftliche Perspektiven in AI-Entscheidungen einbringen.\n• Algorithmic Auditing: Entwicklung systematischer Audit-Prozesse zur regelmäßigen Überprüfung von AI-Systemen auf Bias, Fairness und Performance.\n• Transparency Mechanisms: Implementierung von Systemen zur Dokumentation und Kommunikation von AI-Entscheidungen gegenüber internen und externen Stakeholdern.\n• Adaptive Governance Frameworks: Schaffung flexibler Governance-Strukturen, die sich an evolvierende Technologien, Regulierungen und gesellschaftliche Erwartungen anpassen können."
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
