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
    console.log('Updating Datensicherheit für KI page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datensicherheit-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datensicherheit-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist Datensicherheit in KI-Systemen komplexer als traditioneller Datenschutz und welche spezifischen Herausforderungen entstehen durch Machine Learning?',
        answer: "Datensicherheit in KI-Systemen bringt einzigartige Komplexitäten mit sich, die weit über traditionelle Datenschutzmaßnahmen hinausgehen. Machine Learning Systeme verarbeiten nicht nur große Datenmengen, sondern können auch unbeabsichtigt sensible Informationen durch Modellverhalten preisgeben oder durch adversarielle Angriffe kompromittiert werden. Die dynamische Natur von KI-Systemen erfordert kontinuierliche Sicherheitsüberwachung und adaptive Schutzmaßnahmen.\n\n🔍 Spezifische Herausforderungen in KI-Datensicherheit:\n• Model Inversion Attacks: Angreifer können aus Modellausgaben auf Trainingsdaten schließen und sensible Informationen extrahieren, selbst wenn die ursprünglichen Daten nie direkt zugänglich waren.\n• Membership Inference: Bestimmung, ob bestimmte Datenpunkte im Trainingsdatensatz enthalten waren, was Rückschlüsse auf Personen oder vertrauliche Informationen ermöglicht.\n• Data Poisoning: Manipulation von Trainingsdaten kann zu kompromittierten Modellen führen, die falsche oder schädliche Entscheidungen treffen.\n• Gradient Leakage: In Federated Learning Szenarien können Gradienten-Updates unbeabsichtigt private Informationen über lokale Daten preisgeben.\n\n🛡️ ADVISORI's Comprehensive Security Framework:\n• Privacy-by-Design Integration: Wir implementieren Datenschutzprinzipien bereits in der Architekturphase, nicht als nachträgliche Ergänzung.\n• Multi-Layer Defense: Kombination aus technischen, organisatorischen und rechtlichen Schutzmaßnahmen für umfassende Sicherheit.\n• Continuous Monitoring: Etablierung von Systemen zur kontinuierlichen Überwachung von Modellverhalten und Anomalieerkennung.\n• Adaptive Security: Entwicklung von Sicherheitsmaßnahmen, die sich an neue Bedrohungen und Angriffsvektoren anpassen können.\n\n🔐 Advanced Privacy-Preserving Techniques:\n• Differential Privacy: Mathematisch garantierte Privatsphäre durch kontrollierte Rauschzugabe zu Daten oder Modellausgaben.\n• Homomorphic Encryption: Berechnungen auf verschlüsselten Daten ohne Entschlüsselung, um Datenschutz während der Verarbeitung zu gewährleisten.\n• Secure Multi-Party Computation: Ermöglicht kollaborative KI-Entwicklung ohne Preisgabe sensibler Daten zwischen Parteien.\n• Federated Learning: Dezentrales Training, bei dem Daten nie die ursprünglichen Standorte verlassen müssen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie implementiert ADVISORI DSGVO-konforme KI-Systeme und welche spezifischen Anforderungen gelten für die Verarbeitung personenbezogener Daten in Machine Learning?',
        answer: "Die DSGVO-konforme Implementierung von KI-Systemen erfordert eine durchdachte Balance zwischen innovativer Technologie und rigoroser Compliance. ADVISORI entwickelt KI-Lösungen, die nicht nur den Buchstaben, sondern auch den Geist der DSGVO erfüllen, indem wir Privacy-by-Design-Prinzipien von Anfang an integrieren und transparente, nachvollziehbare Datenverarbeitungsprozesse schaffen.\n\n📋 DSGVO-Kernprinzipien in KI-Implementierung:\n• Rechtmäßigkeit und Transparenz: Klare Rechtsgrundlagen für jede Datenverarbeitung und verständliche Erklärungen der KI-Entscheidungsprozesse für Betroffene.\n• Zweckbindung: Sicherstellung, dass KI-Systeme nur für die ursprünglich definierten und kommunizierten Zwecke verwendet werden.\n• Datenminimierung: Verwendung nur der minimal notwendigen Daten für effektive KI-Funktionalität ohne Übersammlung.\n• Richtigkeit: Implementierung von Mechanismen zur Gewährleistung der Datenqualität und -aktualität in ML-Pipelines.\n• Speicherbegrenzung: Automatisierte Löschung von Daten nach Ablauf der Aufbewahrungsfristen.\n\n🔒 Technische DSGVO-Compliance-Maßnahmen:\n• Privacy-by-Design Architecture: Entwicklung von KI-Systemen mit eingebauten Datenschutzfunktionen, die standardmäßig aktiviert sind.\n• Pseudonymisierung und Anonymisierung: Implementierung robuster Verfahren zur Entfernung oder Verschleierung personenbezogener Identifikatoren.\n• Consent Management: Entwicklung granularer Einverständnissysteme, die dynamische Zustimmung für verschiedene KI-Anwendungen ermöglichen.\n• Right to Explanation: Schaffung interpretierbarer KI-Modelle, die nachvollziehbare Erklärungen für automatisierte Entscheidungen liefern können.\n• Data Subject Rights: Technische Implementierung von Betroffenenrechten wie Auskunft, Berichtigung, Löschung und Datenübertragbarkeit.\n\n⚖️ Rechtliche und Organisatorische Compliance:\n• Datenschutz-Folgenabschätzung: Systematische Bewertung von Datenschutzrisiken vor der Implementierung neuer KI-Systeme.\n• Auftragsverarbeitung: Strukturierung von KI-Projekten mit klaren Verantwortlichkeiten zwischen Verantwortlichen und Auftragsverarbeitern.\n• Internationale Datenübermittlung: Sicherstellung angemessener Schutzmaßnahmen bei grenzüberschreitender KI-Datenverarbeitung.\n• Dokumentation und Audit-Trails: Umfassende Protokollierung aller Datenverarbeitungsaktivitäten für Compliance-Nachweise."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Privacy-by-Design-Prinzipien wendet ADVISORI bei der Entwicklung sicherer KI-Architekturen an und wie werden diese technisch umgesetzt?',
        answer: "Privacy-by-Design ist nicht nur ein Compliance-Ansatz, sondern ein fundamentales Designprinzip, das Datenschutz als integralen Bestandteil der KI-Architektur verankert. ADVISORI implementiert diese Prinzipien durch eine Kombination aus technischen Innovationen, architektonischen Entscheidungen und organisatorischen Prozessen, die Datenschutz zur Standardfunktion machen, nicht zur nachträglichen Ergänzung.\n\n🏗️ Architektonische Privacy-by-Design-Umsetzung:\n• Data Minimization by Design: KI-Systeme werden so entwickelt, dass sie nur die minimal notwendigen Daten sammeln und verarbeiten, mit automatischen Mechanismen zur Identifikation und Eliminierung redundanter Informationen.\n• Decentralized Processing: Implementierung von Edge-Computing und Federated Learning Ansätzen, die Datenverarbeitung näher zur Quelle bringen und zentrale Datenspeicherung minimieren.\n• Modular Security Architecture: Entwicklung modularer Systeme mit isolierten Komponenten, die unabhängige Sicherheitskontrollen und granulare Zugriffsbeschränkungen ermöglichen.\n• Automated Privacy Controls: Integration automatisierter Systeme zur kontinuierlichen Überwachung und Durchsetzung von Datenschutzrichtlinien ohne manuellen Eingriff.\n\n🔐 Technische Privacy-Preserving-Implementierung:\n• Differential Privacy Integration: Systematische Anwendung von Differential Privacy Techniken in allen Phasen des ML-Lebenszyklus, von der Datensammlung bis zur Modellausgabe.\n• Homomorphic Encryption Deployment: Implementierung von Verschlüsselungsverfahren, die Berechnungen auf verschlüsselten Daten ermöglichen, ohne diese jemals zu entschlüsseln.\n• Secure Aggregation: Entwicklung von Protokollen für sichere Aggregation von Daten aus mehreren Quellen ohne Preisgabe individueller Beiträge.\n• Zero-Knowledge Proofs: Anwendung kryptographischer Verfahren, die die Richtigkeit von Berechnungen beweisen können, ohne die zugrundeliegenden Daten preiszugeben.\n\n🛡️ Proactive Privacy Protection:\n• Privacy Impact Assessment Automation: Entwicklung automatisierter Tools zur kontinuierlichen Bewertung von Datenschutzauswirkungen während der Systementwicklung.\n• Dynamic Consent Management: Implementierung flexibler Einverständnissysteme, die sich an veränderte Nutzungsszenarien anpassen können.\n• Privacy-Preserving Analytics: Entwicklung von Analyseverfahren, die wertvolle Erkenntnisse liefern, ohne individuelle Privatsphäre zu kompromittieren.\n• Continuous Privacy Monitoring: Etablierung von Systemen zur kontinuierlichen Überwachung der Datenschutz-Performance und automatischen Anpassung bei Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie schützt ADVISORI vor Data Poisoning und Adversarial Attacks in KI-Systemen und welche präventiven Sicherheitsmaßnahmen werden implementiert?',
        answer: "Data Poisoning und Adversarial Attacks stellen ernsthafte Bedrohungen für die Integrität und Sicherheit von KI-Systemen dar. Diese Angriffe können nicht nur die Funktionalität von Modellen beeinträchtigen, sondern auch zu Datenschutzverletzungen und Sicherheitslücken führen. ADVISORI entwickelt mehrschichtige Verteidigungsstrategien, die sowohl präventive als auch reaktive Maßnahmen umfassen, um die Robustheit und Sicherheit von KI-Systemen zu gewährleisten.\n\n🛡️ Multi-Layer Defense Against Data Poisoning:\n• Input Validation and Sanitization: Implementierung robuster Datenvalidierungssysteme, die anomale oder verdächtige Datenpunkte vor der Integration in Trainingsdatensätze identifizieren und isolieren.\n• Statistical Anomaly Detection: Entwicklung fortschrittlicher statistischer Verfahren zur Erkennung von Datenmustern, die auf Manipulation oder Poisoning hindeuten könnten.\n• Federated Learning Security: Spezielle Schutzmaßnahmen für dezentrale Lernszenarien, einschließlich Byzantine-fault-toleranter Aggregationsverfahren und Reputation-basierter Teilnehmervalidierung.\n• Data Provenance Tracking: Implementierung umfassender Systeme zur Nachverfolgung der Datenherkunft und -integrität durch die gesamte ML-Pipeline.\n\n⚔️ Adversarial Attack Mitigation Strategies:\n• Adversarial Training: Systematische Integration adversarieller Beispiele in den Trainingsprozess, um Modellrobustheit gegen bekannte Angriffsmuster zu erhöhen.\n• Input Preprocessing: Entwicklung spezialisierter Vorverarbeitungstechniken, die adversarielle Perturbationen neutralisieren können, ohne die Datenqualität zu beeinträchtigen.\n• Ensemble Defense: Verwendung mehrerer diverser Modelle mit unterschiedlichen Architekturen und Trainingsdaten, um die Wahrscheinlichkeit erfolgreicher Angriffe zu reduzieren.\n• Gradient Masking Prevention: Implementierung von Techniken zur Verhinderung von Gradient Masking, das falsche Sicherheit gegen adversarielle Angriffe vortäuschen kann.\n\n🔍 Continuous Security Monitoring:\n• Real-time Threat Detection: Entwicklung von Systemen zur kontinuierlichen Überwachung von Modelleingaben und -ausgaben auf Anzeichen adversarieller Aktivitäten.\n• Behavioral Analysis: Implementierung von Verfahren zur Analyse des Modellverhaltens und Erkennung ungewöhnlicher Muster, die auf Kompromittierung hindeuten könnten.\n• Automated Response Systems: Entwicklung automatisierter Reaktionssysteme, die bei Erkennung von Angriffen sofortige Schutzmaßnahmen einleiten können.\n• Security Audit Trails: Umfassende Protokollierung aller sicherheitsrelevanten Ereignisse für forensische Analyse und Compliance-Nachweise."
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
