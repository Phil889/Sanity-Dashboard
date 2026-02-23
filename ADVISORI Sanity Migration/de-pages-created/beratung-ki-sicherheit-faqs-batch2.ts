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
    console.log('Updating Beratung KI-Sicherheit page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: 'Wie können Unternehmen ihre AI-Modelle vor Data Poisoning und Model Manipulation schützen und welche Erkennungsverfahren empfiehlt ADVISORI?',
        answer: "Data Poisoning und Model Manipulation gehören zu den heimtückischsten Bedrohungen für AI-Systeme, da sie oft unbemerkt bleiben und langfristige Schäden verursachen können. Diese Angriffe zielen darauf ab, die Integrität von Trainingsdaten oder Modellen zu kompromittieren, um das Verhalten des AI-Systems zu manipulieren. ADVISORI entwickelt mehrschichtige Schutzstrategien, die sowohl präventive als auch detektive Maßnahmen umfassen.\n\n🔍 Comprehensive Data Integrity Protection:\n• Data Provenance Tracking: Implementierung lückenloser Nachverfolgung der Datenherkunft und -verarbeitung, um manipulierte oder kompromittierte Datenquellen zu identifizieren.\n• Statistical Anomaly Detection: Einsatz fortschrittlicher statistischer Verfahren zur Erkennung ungewöhnlicher Muster in Trainingsdaten, die auf Poisoning-Angriffe hindeuten könnten.\n• Cryptographic Data Validation: Verwendung kryptographischer Signaturen und Hashing-Verfahren zur Gewährleistung der Datenintegrität während des gesamten ML-Lebenszyklus.\n• Multi-Source Validation: Kreuzvalidierung von Trainingsdaten aus verschiedenen unabhängigen Quellen zur Identifikation inkonsistenter oder manipulierter Informationen.\n\n🛡️ ADVISORI's Model Protection Framework:\n• Secure Model Training: Implementierung isolierter und überwachter Trainingsumgebungen, die unbefugten Zugriff auf Modelle und Trainingsprozesse verhindern.\n• Model Versioning und Integrity Checks: Systematische Versionierung von AI-Modellen mit kryptographischen Integritätsprüfungen zur Erkennung unautorisierten Modifikationen.\n• Behavioral Baseline Monitoring: Kontinuierliche Überwachung des Modellverhaltens gegen etablierte Baselines zur frühzeitigen Erkennung von Anomalien oder Manipulationen.\n• Federated Learning Security: Spezielle Sicherheitsmaßnahmen für dezentrale Lernszenarien, um Poisoning-Angriffe in verteilten Umgebungen zu verhindern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Sicherheitsherausforderungen entstehen beim Deployment von AI-Modellen in Produktionsumgebungen und wie adressiert ADVISORI diese?',
        answer: "Das Deployment von AI-Modellen in Produktionsumgebungen bringt einzigartige Sicherheitsherausforderungen mit sich, die über traditionelle Software-Deployment-Risiken hinausgehen. AI-Systeme in Produktion sind dynamischen Bedrohungen ausgesetzt und müssen gleichzeitig Performance, Sicherheit und Compliance gewährleisten. ADVISORI entwickelt spezialisierte Deployment-Strategien, die diese komplexen Anforderungen erfüllen.\n\n🚀 Production AI Security Challenges:\n• Model Drift und Performance Degradation: Kontinuierliche Überwachung der Modellleistung zur Erkennung von Concept Drift oder schleichender Performance-Verschlechterung, die Sicherheitslücken schaffen könnte.\n• Real-time Threat Detection: Implementierung von Echtzeit-Monitoring-Systemen, die verdächtige Eingaben oder Anomalien im Modellverhalten sofort erkennen und darauf reagieren.\n• Scalability und Security Trade-offs: Balancierung zwischen Performance-Anforderungen und Sicherheitsmaßnahmen in hochskalierten Produktionsumgebungen.\n• API Security und Access Control: Absicherung von AI-Model-APIs gegen unbefugten Zugriff, Missbrauch und Reverse Engineering-Versuche.\n\n🔒 ADVISORI's Secure Deployment Architecture:\n• Zero-Trust AI Infrastructure: Implementierung von Zero-Trust-Prinzipien für AI-Infrastrukturen, bei denen jede Komponente kontinuierlich validiert und überwacht wird.\n• Containerized Security: Einsatz sicherer Container-Technologien mit spezialisierten Security-Policies für AI-Workloads und Isolation kritischer Modellkomponenten.\n• Automated Security Testing: Integration automatisierter Sicherheitstests in CI/CD-Pipelines für AI-Modelle, einschließlich Adversarial Testing und Vulnerability Scanning.\n• Incident Response Automation: Entwicklung automatisierter Reaktionsmechanismen für Sicherheitsvorfälle, die schnelle Isolation und Wiederherstellung kompromittierter AI-Systeme ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie implementiert ADVISORI Explainable AI und Transparency-Mechanismen als Sicherheitsfeatures für kritische Geschäftsentscheidungen?',
        answer: "Explainable AI ist nicht nur eine ethische Anforderung, sondern ein kritisches Sicherheitsfeature, das Transparenz, Vertrauen und Nachvollziehbarkeit in AI-gestützten Geschäftsentscheidungen gewährleistet. ADVISORI versteht Explainability als fundamentalen Baustein für sichere und verantwortungsvolle AI-Implementierungen, der sowohl technische Robustheit als auch regulatorische Compliance ermöglicht.\n\n🔍 Explainability als Security Layer:\n• Decision Audit Trails: Implementierung umfassender Audit-Mechanismen, die jeden Schritt der AI-Entscheidungsfindung dokumentieren und nachvollziehbar machen.\n• Bias Detection und Mitigation: Einsatz von Explainability-Tools zur Identifikation und Korrektur von Bias in AI-Modellen, der zu diskriminierenden oder fehlerhaften Entscheidungen führen könnte.\n• Anomaly Explanation: Entwicklung von Systemen, die nicht nur Anomalien erkennen, sondern auch verständliche Erklärungen für ungewöhnliche AI-Entscheidungen liefern.\n• Stakeholder Communication: Schaffung von Mechanismen zur verständlichen Kommunikation von AI-Entscheidungen an verschiedene Stakeholder-Gruppen.\n\n💡 ADVISORI's Transparency Framework:\n• Multi-Level Explainability: Implementierung verschiedener Erklärungsebenen, von technischen Details für Entwickler bis zu verständlichen Zusammenfassungen für Geschäftsnutzer.\n• Real-time Explanation Generation: Entwicklung von Systemen, die in Echtzeit verständliche Erklärungen für AI-Entscheidungen generieren, ohne die Performance zu beeinträchtigen.\n• Regulatory Compliance Integration: Anpassung von Explainability-Mechanismen an spezifische regulatorische Anforderungen verschiedener Branchen und Jurisdiktionen.\n• Interactive Explanation Interfaces: Schaffung benutzerfreundlicher Interfaces, die es Stakeholdern ermöglichen, AI-Entscheidungen zu verstehen und bei Bedarf zu hinterfragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielt Continuous Security Monitoring bei AI-Systemen und wie etabliert ADVISORI effektive Überwachungsstrategien?',
        answer: "Continuous Security Monitoring ist für AI-Systeme noch kritischer als für traditionelle IT-Infrastrukturen, da AI-Modelle dynamisch lernen und sich entwickeln, was neue Sicherheitsrisiken schaffen kann. ADVISORI entwickelt adaptive Monitoring-Strategien, die sowohl technische Performance als auch Sicherheitsaspekte kontinuierlich überwachen und proaktiv auf Bedrohungen reagieren.\n\n📊 AI-Specific Monitoring Dimensions:\n• Model Performance Tracking: Kontinuierliche Überwachung von Modellgenauigkeit, Latenz und Ressourcenverbrauch zur Erkennung von Performance-Anomalien, die auf Sicherheitsprobleme hindeuten könnten.\n• Input Data Quality Monitoring: Real-time Analyse eingehender Daten auf Qualität, Integrität und potenzielle Manipulationsversuche.\n• Behavioral Pattern Analysis: Überwachung von AI-Entscheidungsmustern zur Identifikation ungewöhnlicher oder verdächtiger Verhaltensweisen.\n• Security Event Correlation: Integration von AI-spezifischen Security Events in bestehende SIEM-Systeme für ganzheitliche Bedrohungserkennung.\n\n🔄 ADVISORI's Adaptive Monitoring Architecture:\n• Machine Learning für Security Monitoring: Einsatz von ML-Algorithmen zur automatischen Erkennung von Sicherheitsanomalien und zur kontinuierlichen Verbesserung der Monitoring-Effektivität.\n• Multi-Dimensional Alerting: Implementierung intelligenter Alerting-Systeme, die verschiedene Sicherheitsindikatoren korrelieren und False Positives minimieren.\n• Automated Response Mechanisms: Entwicklung automatisierter Reaktionssysteme, die bei erkannten Bedrohungen sofortige Schutzmaßnahmen einleiten können.\n• Compliance Monitoring Integration: Kontinuierliche Überwachung der Einhaltung von Datenschutz- und Compliance-Anforderungen in AI-Systemen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
