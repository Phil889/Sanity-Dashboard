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
    console.log('Updating Datenschutz für KI page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutz-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutz-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie implementiert ADVISORI Privacy-by-Design in KI-Systemen und welche strategischen Vorteile entstehen für Unternehmen durch datenschutzkonforme AI-Architekturen?',
        answer: "Privacy-by-Design in KI-Systemen ist weit mehr als eine technische Anforderung – es ist ein strategischer Ansatz, der Datenschutz als fundamentales Designprinzip in jede Phase der AI-Entwicklung integriert. ADVISORI entwickelt KI-Architekturen, die von Grund auf datenschutzkonform sind und gleichzeitig maximale Leistung und Innovation ermöglichen. Unser Ansatz schafft nachhaltigen Wettbewerbsvorteile durch Vertrauensbildung und Risikominimierung.\n\n🔒 Fundamentale Privacy-by-Design Prinzipien für KI:\n• Proaktiver Datenschutz: Integration von Datenschutzmaßnahmen bereits in der Konzeptionsphase von KI-Systemen, bevor Daten verarbeitet oder Modelle trainiert werden.\n• Datenschutz als Standardeinstellung: KI-Systeme werden so entwickelt, dass sie automatisch die höchsten Datenschutzstandards erfüllen, ohne dass Benutzer oder Administratoren zusätzliche Konfigurationen vornehmen müssen.\n• Vollständige Funktionalität: Datenschutzmaßnahmen werden so implementiert, dass sie die Leistungsfähigkeit und Innovationskraft der KI-Systeme nicht beeinträchtigen.\n• End-to-End-Sicherheit: Umfassender Schutz personenbezogener Daten während des gesamten Lebenszyklus der KI-Anwendung.\n• Transparenz und Sichtbarkeit: Alle Datenschutzmaßnahmen sind dokumentiert und für Stakeholder nachvollziehbar.\n\n🏗️ ADVISORI's technische Implementierungsstrategien:\n• Datenminimierung durch intelligente Algorithmen: Entwicklung von KI-Modellen, die mit minimalen Datenmengen maximale Ergebnisse erzielen.\n• Anonymisierung und Pseudonymisierung: Fortschrittliche Techniken zur Entfernung oder Verschleierung personenbezogener Identifikatoren in Trainingsdaten.\n• Differential Privacy: Mathematische Garantien für Datenschutz durch kontrollierte Hinzufügung von Rauschen zu Datensätzen.\n• Federated Learning: Dezentrale KI-Trainingsansätze, die Daten lokal belassen und nur Modellparameter austauschen.\n• Sichere Multi-Party-Computation: Ermöglicht KI-Training auf verteilten Datensätzen ohne Preisgabe der zugrundeliegenden Daten.\n\n📈 Strategische Geschäftsvorteile durch Privacy-by-Design:\n• Vertrauensbildung und Marktdifferenzierung: Unternehmen mit nachweislich datenschutzkonformen KI-Systemen genießen höheres Kundenvertrauen und können sich als verantwortungsvolle Innovatoren positionieren.\n• Regulatorische Compliance und Risikominimierung: Proaktive Einhaltung von DSGVO und anderen Datenschutzgesetzen reduziert das Risiko kostspieliger Bußgelder und rechtlicher Auseinandersetzungen.\n• Internationale Markterschließung: Datenschutzkonforme KI-Systeme ermöglichen die Expansion in Märkte mit strengen Datenschutzanforderungen.\n• Operative Effizienz: Integrierte Datenschutzmaßnahmen reduzieren den Aufwand für nachträgliche Compliance-Anpassungen und Audit-Vorbereitungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Datenschutz-Folgenabschätzung für KI-Systeme und wie unterstützt ADVISORI Unternehmen bei der DSFA-Durchführung?',
        answer: "Die Datenschutz-Folgenabschätzung für KI-Systeme ist ein hochkomplexer Prozess, der weit über traditionelle DSFA-Verfahren hinausgeht. KI-Systeme bringen einzigartige Risiken mit sich, die spezielle Bewertungsmethoden und Schutzmaßnahmen erfordern. ADVISORI hat spezialisierte DSFA-Frameworks für KI entwickelt, die alle relevanten Risikodimensionen abdecken und praktikable Lösungsansätze bieten.\n\n🔍 KI-spezifische DSFA-Herausforderungen:\n• Algorithmische Transparenz und Erklärbarkeit: KI-Systeme, insbesondere Deep Learning-Modelle, sind oft als \"Black Boxes\" konzipiert, was die Bewertung ihrer Auswirkungen auf Betroffenenrechte erschwert.\n• Dynamische Datenverarbeitung: Machine Learning-Systeme können ihre Verarbeitungslogik durch kontinuierliches Lernen verändern, was eine statische Risikobewertung unzureichend macht.\n• Indirekte Identifizierung: KI-Systeme können durch Mustererkennung und Inferenz personenbezogene Informationen ableiten, auch wenn die ursprünglichen Daten anonymisiert waren.\n• Bias und Diskriminierung: Algorithmen können unbeabsichtigt diskriminierende Entscheidungen treffen, die bestimmte Personengruppen benachteiligen.\n• Skalierungseffekte: KI-Systeme können massive Datenmengen verarbeiten, was die potenzielle Auswirkung von Datenschutzverletzungen exponentiell erhöht.\n\n📋 ADVISORI's strukturierter DSFA-Ansatz für KI:\n• Umfassende Systemanalyse: Detaillierte Untersuchung der KI-Architektur, Datenflüsse, Algorithmen und Entscheidungsprozesse.\n• Stakeholder-Mapping: Identifikation aller betroffenen Personen, Datenquellen und Verarbeitungszwecke im KI-Ökosystem.\n• Risikobewertungsmatrix: Entwicklung spezifischer Bewertungskriterien für KI-Risiken wie algorithmische Fairness, Transparenz und Datenqualität.\n• Schutzmaßnahmen-Katalog: Erstellung maßgeschneiderter technischer und organisatorischer Maßnahmen zur Risikominimierung.\n• Kontinuierliche Überwachung: Implementierung von Monitoring-Systemen zur laufenden Bewertung und Anpassung der Datenschutzmaßnahmen.\n\n🛡️ Technische und organisatorische Schutzmaßnahmen:\n• Explainable AI-Integration: Implementierung von Technologien zur Nachvollziehbarkeit von KI-Entscheidungen für Betroffene und Aufsichtsbehörden.\n• Bias-Detection und Fairness-Monitoring: Kontinuierliche Überwachung von KI-Systemen auf diskriminierende Muster und automatische Korrekturmechanismen.\n• Data Governance-Frameworks: Etablierung klarer Verantwortlichkeiten und Prozesse für den Umgang mit personenbezogenen Daten in KI-Systemen.\n• Privacy-Preserving Technologies: Integration fortschrittlicher Datenschutztechnologien wie Homomorphic Encryption und Secure Aggregation.\n• Incident Response-Pläne: Entwicklung spezifischer Notfallpläne für KI-bedingte Datenschutzverletzungen und Algorithmus-Fehlfunktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie gewährleistet ADVISORI die Balance zwischen KI-Performance und Datenschutz bei Anonymisierung und Pseudonymisierung von Trainingsdaten?',
        answer: "Die Anonymisierung und Pseudonymisierung von KI-Trainingsdaten erfordert einen hochspezialisierten Ansatz, der sowohl rechtliche Anforderungen erfüllt als auch die Qualität und Aussagekraft der Daten für Machine Learning-Zwecke erhält. ADVISORI hat fortschrittliche Techniken entwickelt, die maximalen Datenschutz bei optimaler KI-Performance gewährleisten. Unser Ansatz kombiniert mathematische Präzision mit praktischer Anwendbarkeit.\n\n🔬 Wissenschaftlich fundierte Anonymisierungsstrategien:\n• Differential Privacy-Implementierung: Mathematisch beweisbare Datenschutzgarantien durch kontrollierte Hinzufügung von statistischem Rauschen, das die Gesamtverteilung der Daten erhält.\n• K-Anonymität und L-Diversität: Sicherstellung, dass jede Person in einem Datensatz nicht von mindestens k anderen Personen unterscheidbar ist, mit zusätzlicher Diversität in sensiblen Attributen.\n• Synthetische Datengeneration: Erstellung künstlicher Datensätze, die die statistischen Eigenschaften der Originaldaten bewahren, ohne echte Personendaten zu enthalten.\n• Homomorphic Encryption: Ermöglicht Berechnungen auf verschlüsselten Daten, sodass KI-Modelle trainiert werden können, ohne dass die zugrundeliegenden Daten jemals entschlüsselt werden.\n• Secure Multi-Party Computation: Verteilte Berechnungen, die es mehreren Parteien ermöglichen, gemeinsam KI-Modelle zu trainieren, ohne ihre Daten preiszugeben.\n\n⚖️ Optimierung der Datenqualität für KI-Training:\n• Utility-Privacy Trade-off-Analyse: Systematische Bewertung des Verhältnisses zwischen Datenschutzniveau und Datennutzbarkeit für spezifische KI-Anwendungen.\n• Adaptive Anonymisierungsverfahren: Dynamische Anpassung der Anonymisierungsintensität basierend auf der Sensitivität der Daten und den Anforderungen des KI-Modells.\n• Feature Engineering für anonymisierte Daten: Entwicklung neuer Merkmale und Repräsentationen, die auch nach der Anonymisierung aussagekräftige Muster für das Machine Learning bewahren.\n• Qualitätssicherung und Validierung: Umfassende Tests zur Sicherstellung, dass anonymisierte Daten sowohl datenschutzkonform als auch für KI-Training geeignet sind.\n• Kontinuierliche Optimierung: Iterative Verbesserung der Anonymisierungsverfahren basierend auf KI-Performance-Metriken und Datenschutz-Audits.\n\n🎯 ADVISORI's maßgeschneiderte Lösungsansätze:\n• Branchenspezifische Anonymisierung: Entwicklung spezialisierter Verfahren für verschiedene Industrien wie Gesundheitswesen, Finanzdienstleistungen und Telekommunikation.\n• Mehrstufige Anonymisierungsarchitekturen: Implementierung gestaffelter Datenschutzmaßnahmen, die verschiedene Anonymisierungsebenen für unterschiedliche Anwendungszwecke bieten.\n• Real-time Anonymisierung: Entwicklung von Systemen, die Daten in Echtzeit anonymisieren können, um kontinuierliches KI-Learning zu ermöglichen.\n• Cross-border Compliance: Sicherstellung, dass Anonymisierungsverfahren internationale Datenschutzstandards erfüllen und grenzüberschreitende KI-Projekte ermöglichen.\n• Audit-Trail und Nachweisbarkeit: Vollständige Dokumentation aller Anonymisierungsschritte für Compliance-Nachweise und regulatorische Audits."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Explainable AI bei der DSGVO-Compliance und wie implementiert ADVISORI Transparenz und Nachvollziehbarkeit in komplexen KI-Systemen?',
        answer: "Explainable AI ist ein fundamentaler Baustein für DSGVO-Compliance in KI-Systemen, da sie die in der Verordnung geforderte Transparenz und Nachvollziehbarkeit algorithmischer Entscheidungen gewährleistet. ADVISORI entwickelt XAI-Lösungen, die nicht nur rechtliche Anforderungen erfüllen, sondern auch das Vertrauen in KI-Systeme stärken und bessere Geschäftsentscheidungen ermöglichen. Unser Ansatz macht komplexe KI-Modelle für alle Stakeholder verständlich und nachprüfbar.\n\n⚖️ DSGVO-Anforderungen an KI-Transparenz:\n• Recht auf Auskunft: Betroffene haben das Recht zu erfahren, ob und wie ihre Daten in KI-Systemen verarbeitet werden, einschließlich der Logik automatisierter Entscheidungsfindung.\n• Recht auf Erklärung: Bei automatisierten Entscheidungen müssen Betroffene verständliche Informationen über die zugrundeliegende Logik und die Tragweite solcher Verarbeitungen erhalten.\n• Widerspruchsrecht: Betroffene müssen in der Lage sein, automatisierte Entscheidungen zu verstehen, um fundierte Widersprüche einlegen zu können.\n• Datenminimierung und Zweckbindung: Transparenz über die spezifischen Zwecke der KI-Verarbeitung und die verwendeten Datentypen.\n• Rechenschaftspflicht: Unternehmen müssen nachweisen können, dass ihre KI-Systeme DSGVO-konform arbeiten und faire Entscheidungen treffen.\n\n🔍 ADVISORI's mehrdimensionaler XAI-Ansatz:\n• Local Explainability: Erklärung einzelner KI-Entscheidungen durch Techniken wie LIME, SHAP oder Counterfactual Explanations, die zeigen, welche Faktoren zu einer spezifischen Entscheidung geführt haben.\n• Global Explainability: Verständnis des gesamten KI-Modellverhaltens durch Feature Importance-Analysen, Modell-Visualisierungen und statistische Zusammenfassungen.\n• Contrastive Explanations: Erklärungen, die zeigen, was anders hätte sein müssen, um zu einer anderen Entscheidung zu gelangen.\n• Exemplar-based Explanations: Verwendung ähnlicher Fälle aus den Trainingsdaten zur Veranschaulichung von KI-Entscheidungen.\n• Natural Language Explanations: Automatische Generierung verständlicher, natürlichsprachlicher Erklärungen für technische Laien.\n\n🛠️ Technische Implementierungsstrategien:\n• Interpretable Machine Learning: Entwicklung von KI-Modellen, die von Natur aus interpretierbar sind, wie Decision Trees, Linear Models oder Rule-based Systems für kritische Anwendungen.\n• Post-hoc Explanation Methods: Integration von Erklärungsalgorithmen in bestehende komplexe KI-Systeme ohne Beeinträchtigung der Performance.\n• Interactive Explanation Interfaces: Entwicklung benutzerfreundlicher Dashboards und Tools, die es verschiedenen Stakeholdern ermöglichen, KI-Entscheidungen zu verstehen und zu analysieren.\n• Explanation Quality Metrics: Etablierung von Metriken zur Bewertung der Qualität und Verständlichkeit von KI-Erklärungen.\n• Multi-Stakeholder Explanations: Anpassung von Erklärungen an verschiedene Zielgruppen, von technischen Experten bis hin zu Endnutzern und Regulierungsbehörden.\n\n📊 Governance und Compliance-Integration:\n• Explanation Audit Trails: Vollständige Dokumentation aller Erklärungsprozesse für regulatorische Nachweise und interne Qualitätssicherung.\n• Bias Detection durch Explainability: Nutzung von XAI-Techniken zur Identifikation und Korrektur diskriminierender Muster in KI-Entscheidungen.\n• Stakeholder Communication: Entwicklung standardisierter Kommunikationsformate für die Übermittlung von KI-Erklärungen an Betroffene, Aufsichtsbehörden und interne Teams.\n• Continuous Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung der Erklärungsqualität und -konsistenz in produktiven KI-Anwendungen."
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
