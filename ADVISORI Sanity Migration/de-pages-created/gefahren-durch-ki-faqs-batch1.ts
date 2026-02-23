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
    console.log('Updating Gefahren durch KI page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'gefahren-durch-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "gefahren-durch-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche konkreten KI-Bedrohungen stellen das größte Risiko für Unternehmen dar und wie identifiziert ADVISORI diese proaktiv?',
        answer: "Die Bedrohungslandschaft für KI-Systeme ist komplex und entwickelt sich kontinuierlich weiter. Für C-Level-Führungskräfte ist es entscheidend zu verstehen, dass KI-Gefahren nicht nur technische Risiken darstellen, sondern fundamentale Geschäftsrisiken, die Reputation, Compliance und Wettbewerbsfähigkeit bedrohen können. ADVISORI verfolgt einen systematischen Ansatz zur Identifikation und Bewertung dieser Bedrohungen, der weit über traditionelle IT-Sicherheit hinausgeht.\n\n🎯 Kritische KI-Bedrohungskategorien:\n• Adversarial Attacks: Gezielte Manipulation von KI-Eingaben zur Täuschung von Modellen, die zu falschen Entscheidungen oder Sicherheitslücken führen können.\n• Data Poisoning: Kontamination von Trainingsdaten mit manipulierten Informationen, die die Modellleistung systematisch beeinträchtigen oder Backdoors schaffen.\n• Model Extraction und IP-Diebstahl: Unbefugte Rekonstruktion proprietärer KI-Modelle durch gezielte Abfragen oder Reverse Engineering.\n• Privacy Leakage: Unbeabsichtigte Preisgabe sensibler Trainingsdaten durch Modellinferenz oder Membership Inference Attacks.\n• Bias Amplification: Verstärkung gesellschaftlicher oder geschäftlicher Vorurteile durch unausgewogene Trainingsdaten oder fehlerhafte Algorithmen.\n\n🔍 ADVISORI's proaktiver Threat Intelligence Ansatz:\n• Kontinuierliche Bedrohungsanalyse: Wir überwachen aktuelle Forschung, Sicherheitsvorfälle und emerging threats in der KI-Sicherheitslandschaft.\n• Spezifische Risikomodellierung: Entwicklung maßgeschneiderter Bedrohungsmodelle basierend auf Ihrer spezifischen KI-Architektur und Anwendungsfällen.\n• Red Team Assessments: Durchführung kontrollierter Angriffssimulationen zur Identifikation von Schwachstellen vor deren Ausnutzung.\n• Branchenspezifische Threat Intelligence: Berücksichtigung sektorspezifischer Bedrohungen und regulatorischer Anforderungen.\n\n🛡️ Strategische Risikobewertung und Priorisierung:\n• Business Impact Analysis: Bewertung der potentiellen Auswirkungen verschiedener KI-Bedrohungen auf Ihre Geschäftsprozesse und strategischen Ziele.\n• Likelihood Assessment: Einschätzung der Wahrscheinlichkeit verschiedener Angriffszenarien basierend auf Ihrer spezifischen Bedrohungslandschaft.\n• Risk Appetite Alignment: Anpassung der Sicherheitsmaßnahmen an Ihre Risikotoleranz und Geschäftsstrategie.\n• Continuous Threat Landscape Monitoring: Regelmäßige Aktualisierung der Bedrohungsbewertung basierend auf neuen Entwicklungen und Erkenntnissen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie können Adversarial Attacks unsere KI-Systeme kompromittieren und welche Schutzmaßnahmen implementiert ADVISORI dagegen?',
        answer: "Adversarial Attacks stellen eine der sophistiziertesten und gefährlichsten Bedrohungen für KI-Systeme dar. Diese gezielten Angriffe nutzen die inhärenten Schwächen von Machine Learning-Modellen aus, um durch minimal veränderte Eingaben drastisch falsche Ausgaben zu erzeugen. Für Unternehmen können solche Angriffe katastrophale Folgen haben, von fehlerhaften Geschäftsentscheidungen bis hin zu Sicherheitsverletzungen. ADVISORI entwickelt mehrschichtige Verteidigungsstrategien, die sowohl präventive als auch reaktive Maßnahmen umfassen.\n\n⚔️ Adversarial Attack Mechanismen und Geschäftsrisiken:\n• Evasion Attacks: Manipulation von Eingabedaten zur Laufzeit, um Klassifikationsfehler zu provozieren, beispielsweise bei Betrugserkennungssystemen oder Sicherheitsscannern.\n• Poisoning Attacks: Einschleusung manipulierter Daten während des Trainingsprozesses, um systematische Schwachstellen oder Backdoors zu schaffen.\n• Model Inversion: Rekonstruktion sensibler Trainingsdaten durch gezielte Abfragen, was zu Datenschutzverletzungen führen kann.\n• Membership Inference: Bestimmung, ob spezifische Daten im Trainingssatz enthalten waren, was Rückschlüsse auf vertrauliche Informationen ermöglicht.\n\n🛡️ ADVISORI's Multi-Layer Defense Strategy:\n• Adversarial Training: Implementierung robuster Trainingsverfahren, die Modelle gegen bekannte Angriffsmuster immunisieren.\n• Input Sanitization und Validation: Entwicklung intelligenter Eingabefilter, die verdächtige oder manipulierte Daten vor der Verarbeitung erkennen und neutralisieren.\n• Ensemble Methods: Einsatz mehrerer diverser Modelle zur Kreuzvalidierung von Entscheidungen und Erkennung von Anomalien.\n• Gradient Masking und Obfuscation: Verschleierung der Modellarchitektur und -parameter, um Angreifern die Entwicklung gezielter Adversarial Examples zu erschweren.\n\n🔬 Proaktive Robustness Testing und Validation:\n• Automated Adversarial Testing: Kontinuierliche Generierung und Testung von Adversarial Examples zur Bewertung der Modellrobustheit.\n• Certified Defense Mechanisms: Implementierung mathematisch beweisbarer Verteidigungsverfahren mit garantierten Robustheitseigenschaften.\n• Real-time Anomaly Detection: Überwachung von Modelleingaben und -ausgaben zur Erkennung verdächtiger Muster oder ungewöhnlicher Verhaltensweisen.\n• Continuous Model Monitoring: Langfristige Überwachung der Modellleistung zur Früherkennung von Performance-Degradation oder Kompromittierung.\n\n📊 Business Continuity und Incident Response:\n• Graceful Degradation Strategies: Entwicklung von Fallback-Mechanismen, die bei erkannten Angriffen sichere Standardverhalten aktivieren.\n• Rapid Response Protocols: Etablierung schneller Reaktionsverfahren zur Isolation kompromittierter Systeme und Wiederherstellung des sicheren Betriebs.\n• Forensic Capabilities: Implementierung umfassender Logging- und Audit-Funktionen zur Nachverfolgung und Analyse von Sicherheitsvorfällen.\n• Stakeholder Communication: Vorbereitung transparenter Kommunikationsstrategien für den Fall von Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielt Data Poisoning bei KI-Angriffen und wie schützt ADVISORI die Integrität unserer Trainingsdaten?',
        answer: "Data Poisoning stellt eine besonders heimtückische Bedrohung dar, da es die Grundlage jedes KI-Systems - die Trainingsdaten - kompromittiert. Im Gegensatz zu anderen Angriffsformen, die zur Laufzeit stattfinden, erfolgt Data Poisoning bereits während der Modellentwicklung und kann daher schwer zu erkennen sein. Die Auswirkungen können verheerend sein, da kompromittierte Modelle systematisch falsche Entscheidungen treffen oder versteckte Backdoors enthalten können. ADVISORI implementiert umfassende Datenintegritäts- und Validierungsframeworks, die diese Bedrohung von der Datensammlung bis zum Modelldeployment adressieren.\n\n🧬 Data Poisoning Angriffsvektoren und Geschäftsauswirkungen:\n• Label Flipping: Systematische Manipulation von Datenklassifikationen, die zu grundlegend fehlerhaften Modellentscheidungen führen können.\n• Feature Poisoning: Subtile Veränderungen in Eingabemerkmalen, die Modelle für spezifische Trigger-Patterns anfällig machen.\n• Backdoor Injection: Einbettung versteckter Trigger in Trainingsdaten, die später zur Aktivierung unerwünschter Modellverhalten genutzt werden können.\n• Distribution Shift Attacks: Gezielte Verzerrung der Datenverteilung, um Modellleistung in kritischen Bereichen zu degradieren.\n\n🔍 ADVISORI's Comprehensive Data Integrity Framework:\n• Multi-Source Data Validation: Implementierung redundanter Datenquellen und Kreuzvalidierung zur Erkennung von Inkonsistenzen oder Manipulationen.\n• Statistical Anomaly Detection: Einsatz fortschrittlicher statistischer Methoden zur Identifikation ungewöhnlicher Muster oder Ausreißer in Trainingsdaten.\n• Provenance Tracking: Vollständige Nachverfolgung der Datenherkunft und -verarbeitung zur Sicherstellung der Datenintegrität entlang der gesamten Pipeline.\n• Automated Data Quality Assessment: Kontinuierliche Bewertung der Datenqualität durch automatisierte Metriken und Qualitätsindikatoren.\n\n🛡️ Proaktive Schutzmaßnahmen und Robust Training:\n• Differential Privacy: Implementierung von Datenschutztechniken, die die Auswirkungen einzelner manipulierter Datenpunkte begrenzen.\n• Robust Aggregation Methods: Einsatz von Trainingsverfahren, die gegenüber einer begrenzten Anzahl kompromittierter Datenpunkte resilient sind.\n• Data Sanitization Pipelines: Entwicklung automatisierter Bereinigungsverfahren zur Entfernung verdächtiger oder inkonsistenter Daten.\n• Federated Learning Security: Implementierung sicherer verteilter Lernverfahren, die lokale Datenmanipulation erkennen und neutralisieren können.\n\n📈 Continuous Monitoring und Adaptive Defense:\n• Model Performance Monitoring: Kontinuierliche Überwachung der Modellleistung zur Früherkennung von Performance-Degradation durch Data Poisoning.\n• Drift Detection: Implementierung von Verfahren zur Erkennung unerwarteter Änderungen in Datenverteilungen oder Modellverhalten.\n• Incremental Learning Security: Sichere Verfahren für die kontinuierliche Modellaktualisierung ohne Risiko der Kontamination durch neue Daten.\n• Threat Intelligence Integration: Einbindung aktueller Threat Intelligence zur Anpassung der Schutzmaßnahmen an neue Angriffsmethoden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet ADVISORI DSGVO-Compliance bei gleichzeitiger Implementierung effektiver KI-Sicherheitsmaßnahmen?',
        answer: "Die Herausforderung, KI-Sicherheit und DSGVO-Compliance zu vereinen, erfordert einen integrierten Ansatz, der Datenschutz nicht als Hindernis, sondern als fundamentalen Baustein sicherer KI-Systeme betrachtet. ADVISORI entwickelt Privacy-by-Design-Architekturen, die sowohl höchste Sicherheitsstandards als auch vollständige DSGVO-Konformität gewährleisten. Unser Ansatz zeigt, dass Datenschutz und Sicherheit sich gegenseitig verstärken können, anstatt in Konflikt zu stehen.\n\n🔒 Privacy-by-Design für KI-Sicherheit:\n• Differential Privacy Implementation: Einsatz mathematisch beweisbarer Datenschutztechniken, die gleichzeitig vor Membership Inference Attacks und anderen Privacy-Verletzungen schützen.\n• Federated Learning Architectures: Implementierung verteilter Lernverfahren, die Daten lokal belassen und dennoch robuste, sichere Modelle ermöglichen.\n• Homomorphic Encryption: Nutzung verschlüsselter Berechnungen für KI-Inferenz, die sowohl Datenschutz als auch Schutz vor Datenextraktion gewährleisten.\n• Secure Multi-Party Computation: Ermöglichung kollaborativer KI-Entwicklung ohne Preisgabe sensibler Daten zwischen Parteien.\n\n⚖️ DSGVO-konforme Sicherheitsgovernance:\n• Data Minimization Strategies: Implementierung von Verfahren, die nur die minimal notwendigen Daten für KI-Training und -Betrieb verwenden.\n• Purpose Limitation Enforcement: Technische Maßnahmen zur Sicherstellung, dass KI-Systeme nur für ihre deklarierten Zwecke verwendet werden können.\n• Consent Management Integration: Entwicklung von Systemen, die Einwilligungen granular verwalten und bei Widerruf entsprechende Sicherheitsmaßnahmen aktivieren.\n• Right to Explanation Implementation: Bereitstellung erklärbarer KI-Entscheidungen, die gleichzeitig Transparenz und Schutz vor Model Extraction bieten.\n\n🛡️ Integrierte Sicherheits- und Datenschutzarchitekturen:\n• Privacy-Preserving Anomaly Detection: Entwicklung von Sicherheitsüberwachungssystemen, die Bedrohungen erkennen, ohne personenbezogene Daten zu kompromittieren.\n• Pseudonymization und Anonymization: Implementierung fortschrittlicher Anonymisierungstechniken, die sowohl DSGVO-Anforderungen erfüllen als auch Sicherheitsanalysen ermöglichen.\n• Secure Data Deletion: Entwicklung von Verfahren für das sichere und nachweisbare Löschen von Daten aus KI-Systemen bei Ausübung des Rechts auf Vergessenwerden.\n• Cross-Border Data Protection: Implementierung von Sicherheitsmaßnahmen, die internationale Datentransfers DSGVO-konform absichern.\n\n📊 Compliance Monitoring und Audit Readiness:\n• Automated Compliance Checking: Kontinuierliche Überwachung der DSGVO-Konformität durch automatisierte Systeme, die gleichzeitig Sicherheitsverletzungen erkennen.\n• Comprehensive Audit Trails: Implementierung lückenloser Protokollierung, die sowohl Sicherheits- als auch Datenschutz-Audits unterstützt.\n• Impact Assessment Integration: Entwicklung von Verfahren, die Datenschutz-Folgenabschätzungen mit Sicherheitsrisikoanalysen kombinieren.\n• Incident Response Coordination: Etablierung von Prozessen, die sowohl Sicherheitsvorfälle als auch Datenschutzverletzungen koordiniert behandeln."
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
