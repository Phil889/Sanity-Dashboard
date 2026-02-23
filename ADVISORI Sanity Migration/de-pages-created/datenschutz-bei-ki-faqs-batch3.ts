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
    console.log('Updating Datenschutz bei KI page with Compliance and Regulatory FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutz-bei-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutz-bei-ki" not found')
    }
    
    // Create new Compliance and Regulatory FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie führt ADVISORI Datenschutz-Folgenabschätzungen für KI-Systeme durch und welche spezifischen DSFA-Methoden werden für verschiedene AI-Anwendungstypen angewendet?',
        answer: "Die Datenschutz-Folgenabschätzung für KI-Systeme ist ein hochkomplexer Prozess, der weit über traditionelle DSFA-Ansätze hinausgeht. ADVISORI entwickelt maßgeschneiderte DSFA-Methodologien, die die einzigartigen Risiken und Herausforderungen von Künstlicher Intelligenz adressieren und gleichzeitig praktikable Lösungsansätze für verschiedene AI-Anwendungsdomänen bieten.\n\n📋 KI-spezifische DSFA-Methodologie:\n• Algorithmic Impact Assessment: Umfassende Bewertung der Auswirkungen von KI-Algorithmen auf Betroffenenrechte, einschließlich automatisierter Entscheidungsfindung und Profilbildung.\n• Data Flow Mapping für AI: Detaillierte Analyse der Datenflüsse in KI-Systemen, von der Datensammlung über Training bis zur Inferenz und Ergebnisverwendung.\n• Bias und Fairness Assessment: Systematische Evaluierung von Diskriminierungsrisiken und Fairness-Aspekten in KI-Modellen und deren Auswirkungen auf verschiedene Bevölkerungsgruppen.\n• Privacy Risk Quantification: Entwicklung quantitativer Methoden zur Messung und Bewertung von Datenschutzrisiken in komplexen KI-Systemen.\n\n🔍 Anwendungsspezifische DSFA-Ansätze:\n• Machine Learning DSFA: Spezialisierte Bewertungsverfahren für überwachtes, unüberwachtes und verstärkendes Lernen mit fokussierten Risikobewertungen.\n• Deep Learning Assessment: Erweiterte DSFA-Methoden für neuronale Netzwerke mit besonderem Fokus auf Interpretierbarkeit und Nachvollziehbarkeit.\n• Natural Language Processing DSFA: Spezifische Bewertungsansätze für NLP-Systeme, die Textdaten verarbeiten und potenzielle Sensitivitäten berücksichtigen.\n• Computer Vision Privacy Assessment: Maßgeschneiderte DSFA-Verfahren für bildverarbeitende KI-Systeme mit Fokus auf biometrische Daten und Gesichtserkennung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche konkreten Maßnahmen implementiert ADVISORI zur Gewährleistung der Betroffenenrechte in KI-Systemen und wie wird das Recht auf Erklärung technisch umgesetzt?',
        answer: "Die Gewährleistung von Betroffenenrechten in KI-Systemen erfordert innovative technische und organisatorische Lösungen, die über traditionelle Datenschutzmaßnahmen hinausgehen. ADVISORI entwickelt umfassende Frameworks zur Implementierung aller DSGVO-Betroffenenrechte in AI-Kontexten, mit besonderem Fokus auf das Recht auf Erklärung und nachvollziehbare Entscheidungsfindung.\n\n⚖️ Technische Umsetzung von Betroffenenrechten:\n• Automated Subject Access Requests: Entwicklung von Systemen zur automatischen Bearbeitung von Auskunftsersuchen, die KI-spezifische Informationen über Datenverarbeitung und Entscheidungslogik bereitstellen.\n• Right to Explanation Implementation: Technische Umsetzung des Rechts auf Erklärung durch integrierte Explainable AI-Systeme, die verständliche Begründungen für automatisierte Entscheidungen liefern.\n• AI-Aware Data Portability: Entwicklung von Datenportabilitätslösungen, die nicht nur Rohdaten, sondern auch KI-generierte Insights und Profilierungsergebnisse umfassen.\n• Intelligent Rectification Systems: Implementierung von Systemen zur Berichtigung von Daten in KI-Modellen, einschließlich Model-Retraining und Bias-Korrektur.\n\n🔧 ADVISORI's Rights Management Framework:\n• Dynamic Consent Management: Entwicklung granularer Einwilligungssysteme, die spezifische KI-Anwendungen und Verarbeitungszwecke abdecken und dynamische Anpassungen ermöglichen.\n• Automated Erasure in AI: Technische Implementierung des Rechts auf Vergessenwerden in KI-Systemen, einschließlich selektiver Datenentfernung aus Trainingssets.\n• Objection Handling für AI: Entwicklung von Systemen zur Bearbeitung von Widersprüchen gegen automatisierte Entscheidungsfindung und Profilierung.\n• Transparent Decision Logging: Implementierung umfassender Audit-Trails, die alle KI-Entscheidungen nachvollziehbar dokumentieren und Betroffenenrechte unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie stellt ADVISORI die Compliance mit dem EU AI Act in Verbindung mit DSGVO-Anforderungen sicher und welche integrierten Governance-Frameworks werden entwickelt?',
        answer: "Die Konvergenz von DSGVO und EU AI Act schafft komplexe Compliance-Anforderungen, die eine integrierte Governance-Strategie erfordern. ADVISORI entwickelt umfassende Multi-Regulierungs-Frameworks, die sowohl Datenschutz- als auch AI-spezifische Anforderungen nahtlos erfüllen und Synergien zwischen beiden Regulierungsrahmen maximieren.\n\n🔄 Integrierte DSGVO-AI-Act-Compliance:\n• Unified Risk Assessment: Entwicklung kombinierter Risikobewertungsverfahren, die sowohl Datenschutz- als auch AI-Risiken in einem kohärenten Framework adressieren.\n• Harmonized Documentation: Schaffung integrierter Dokumentationssysteme, die gleichzeitig DSGVO-Verarbeitungsverzeichnisse und AI-Act-Konformitätsbewertungen erfüllen.\n• Cross-Regulatory Governance: Etablierung von Governance-Strukturen, die beide Regulierungsrahmen koordiniert überwachen und Compliance-Konflikte vermeiden.\n• Integrated Audit Frameworks: Entwicklung von Audit-Verfahren, die sowohl Datenschutz- als auch AI-Compliance in einem einheitlichen Prozess bewerten.\n\n🛡️ ADVISORI's Dual-Compliance-Strategie:\n• High-Risk AI System Management: Spezialisierte Compliance-Verfahren für Hochrisiko-KI-Systeme, die sowohl AI-Act-Anforderungen als auch DSGVO-Bestimmungen erfüllen.\n• Fundamental Rights Impact Assessment: Entwicklung erweiterter Impact-Assessments, die sowohl Datenschutz- als auch Grundrechtsauswirkungen von KI-Systemen bewerten.\n• Continuous Monitoring Integration: Implementierung von Überwachungssystemen, die kontinuierlich beide Compliance-Dimensionen verfolgen und frühzeitig Abweichungen erkennen.\n• Stakeholder Communication: Entwicklung von Kommunikationsstrategien, die sowohl Datenschutzbehörden als auch AI-Regulatoren angemessen adressieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche branchenspezifischen Datenschutz-Compliance-Ansätze entwickelt ADVISORI für KI-Systeme in regulierten Sektoren wie Finanzdienstleistungen und Gesundheitswesen?',
        answer: "Regulierte Branchen stellen besondere Herausforderungen für KI-Datenschutz dar, die über allgemeine DSGVO-Compliance hinausgehen. ADVISORI entwickelt branchenspezifische Compliance-Frameworks, die sektorale Regulierungsanforderungen mit KI-Datenschutz harmonisieren und gleichzeitig Innovation und Geschäftswert maximieren.\n\n🏦 Finanzdienstleistungen KI-Datenschutz:\n• Banking AI Privacy Frameworks: Entwicklung spezialisierter Datenschutzansätze für KI in Kreditentscheidungen, Risikobewertung und Betrugserkennung unter Berücksichtigung von Basel-Anforderungen.\n• Insurance AI Compliance: Maßgeschneiderte Lösungen für KI-gestützte Versicherungsprodukte, die Datenschutz mit aktuariellen Anforderungen und Solvency-Bestimmungen vereinbaren.\n• Investment AI Governance: Entwicklung von Governance-Frameworks für KI in Anlageentscheidungen, die Datenschutz mit MiFID-Anforderungen und Fiduciary Duties harmonisieren.\n• RegTech Privacy Integration: Implementierung datenschutzkonformer KI-Lösungen für regulatorisches Reporting und Compliance-Monitoring.\n\n🏥 Gesundheitswesen KI-Datenschutz:\n• Medical AI Privacy by Design: Entwicklung spezialisierter Privacy-by-Design-Ansätze für medizinische KI-Systeme, die Patientendatenschutz mit klinischer Effektivität optimieren.\n• Clinical Trial AI Compliance: Maßgeschneiderte Datenschutzlösungen für KI in klinischen Studien, die GCP-Anforderungen mit DSGVO-Bestimmungen vereinbaren.\n• Healthcare Data Federation: Entwicklung föderierter KI-Ansätze für Gesundheitsdaten, die institutionsübergreifende Zusammenarbeit ohne Datenschutzkompromisse ermöglichen.\n• Pharmaceutical AI Governance: Spezialisierte Compliance-Frameworks für KI in der Arzneimittelentwicklung, die Datenschutz mit regulatorischen Zulassungsanforderungen harmonisieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Compliance and Regulatory FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Compliance and Regulatory FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
