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
    console.log('Updating DSGVO für KI page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen DSGVO-Anforderungen gelten für KI-Systeme und wie unterscheiden sich diese von herkömmlichen Datenverarbeitungsprozessen?',
        answer: "KI-Systeme unterliegen besonderen DSGVO-Anforderungen, die über die standardmäßigen Datenschutzbestimmungen hinausgehen. Die Komplexität und Autonomie von AI-Systemen erfordern spezielle Compliance-Maßnahmen, insbesondere bei automatisierten Entscheidungsprozessen und der Verarbeitung personenbezogener Daten. ADVISORI unterstützt Sie dabei, diese komplexen Anforderungen zu verstehen und umzusetzen.\n\n⚖️ Artikel 22 DSGVO - Automatisierte Entscheidungsfindung:\n• KI-Systeme, die automatisierte Entscheidungen treffen, die rechtliche Wirkung entfalten oder betroffene Personen erheblich beeinträchtigen, sind grundsätzlich untersagt, es sei denn, es liegt eine der gesetzlichen Ausnahmen vor.\n• Erforderlich sind ausdrückliche Einwilligung, Vertragserfüllung oder gesetzliche Ermächtigung als Rechtsgrundlage.\n• Betroffene haben das Recht auf menschliche Intervention, Darlegung des eigenen Standpunkts und Anfechtung der Entscheidung.\n• Transparenz über die verwendete Logik und die Tragweite sowie angestrebte Auswirkungen der Verarbeitung müssen gewährleistet werden.\n\n🔍 Privacy by Design für KI-Systeme:\n• Datenschutz muss bereits in der Entwicklungsphase von KI-Algorithmen berücksichtigt werden, nicht erst bei der Implementierung.\n• Datenminimierung ist besonders herausfordernd, da KI-Systeme oft große Datenmengen für Training und Betrieb benötigen.\n• Zweckbindung muss auch bei adaptiven Lernalgorithmen gewährleistet bleiben, die sich über die Zeit weiterentwickeln.\n• Technische und organisatorische Maßnahmen müssen die Besonderheiten von Machine Learning-Prozessen berücksichtigen.\n\n📋 Datenschutz-Folgenabschätzung für KI:\n• DPIA ist bei KI-Systemen fast immer erforderlich, da sie typischerweise ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen darstellen.\n• Besondere Berücksichtigung von Profiling, automatisierten Entscheidungen und der Verarbeitung sensibler Daten.\n• Bewertung der Auswirkungen auf Transparenz, Fairness und Diskriminierungsrisiken.\n• Kontinuierliche Überwachung und Anpassung der DPIA bei sich entwickelnden KI-Systemen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie implementiert ADVISORI Privacy by Design in KI-Architekturen und welche technischen Maßnahmen gewährleisten DSGVO-Konformität von der Entwicklung bis zum Betrieb?',
        answer: "Privacy by Design ist nicht nur ein regulatorisches Erfordernis, sondern ein strategischer Ansatz, der Datenschutz als Grundprinzip in die DNA von KI-Systemen einbettet. ADVISORI entwickelt datenschutzfreundliche KI-Architekturen, die von Grund auf DSGVO-konform sind und gleichzeitig optimale Performance und Funktionalität bieten.\n\n🏗️ Architektonische Privacy-Prinzipien:\n• Federated Learning-Ansätze ermöglichen KI-Training ohne zentrale Datensammlung, wodurch Datenschutzrisiken minimiert werden.\n• Differential Privacy-Techniken fügen kontrollierten Rauschen hinzu, um individuelle Datenpunkte zu schützen, während statistische Erkenntnisse erhalten bleiben.\n• Homomorphe Verschlüsselung erlaubt Berechnungen auf verschlüsselten Daten, ohne diese zu entschlüsseln.\n• Secure Multi-Party Computation ermöglicht gemeinsame Berechnungen mehrerer Parteien ohne Preisgabe der zugrundeliegenden Daten.\n\n🔐 Technische Schutzmaßnahmen im KI-Lebenszyklus:\n• Datenminimierung durch intelligente Feature-Selection und dimensionale Reduktion bereits in der Trainingsphase.\n• Anonymisierung und Pseudonymisierung von Trainingsdaten mit robusten Verfahren, die Re-Identifikationsrisiken minimieren.\n• Sichere Datenräume und isolierte Trainingsumgebungen mit strikter Zugriffskontrolle und Audit-Trails.\n• Kontinuierliche Überwachung von Datenflüssen und automatische Erkennung von Datenschutzverletzungen.\n\n🎯 ADVISORI's Privacy-Engineering-Ansatz:\n• Entwicklung maßgeschneiderter Privacy-Frameworks für spezifische KI-Anwendungsfälle und Branchen.\n• Integration von Privacy-Metriken in KI-Performance-Bewertungen für ausgewogene Optimierung.\n• Implementierung von Privacy-Dashboards für kontinuierliche Transparenz und Compliance-Monitoring.\n• Schulung von Entwicklungsteams in Privacy-Engineering-Prinzipien und -Praktiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Herausforderungen entstehen bei der Umsetzung von Betroffenenrechten in KI-Systemen und wie gewährleistet ADVISORI die praktische Durchsetzbarkeit von Auskunft, Berichtigung und Löschung?',
        answer: "Die Durchsetzung von Betroffenenrechten in KI-Systemen stellt eine der komplexesten Herausforderungen im Datenschutz dar. Traditionelle Ansätze zur Umsetzung von DSGVO-Rechten müssen für die Besonderheiten von Machine Learning-Systemen adaptiert werden. ADVISORI entwickelt innovative Lösungen, die sowohl die technischen Realitäten von KI als auch die rechtlichen Anforderungen der DSGVO berücksichtigen.\n\n🔍 Auskunftsrecht bei KI-Systemen:\n• Herausforderung der Erklärbarkeit: KI-Entscheidungen müssen in verständlicher Form kommuniziert werden, auch wenn die zugrundeliegenden Algorithmen komplex sind.\n• Entwicklung von Explainable AI-Komponenten, die automatisch verständliche Erklärungen für Entscheidungen generieren.\n• Bereitstellung von Informationen über die verwendete Logik, Tragweite und angestrebte Auswirkungen der automatisierten Verarbeitung.\n• Implementierung von User-Dashboards, die Betroffenen Einblick in ihre Datenverarbeitung und erhaltene Bewertungen geben.\n\n✏️ Berichtigung in lernenden Systemen:\n• Komplexität der Datenkorrektur in bereits trainierten Modellen, da einzelne Datenpunkte oft nicht isoliert korrigiert werden können.\n• Entwicklung von Incremental Learning-Ansätzen, die Korrekturen ohne vollständiges Neutraining ermöglichen.\n• Implementierung von Versionskontrolle für Trainingsdaten und Modelle zur Nachverfolgung von Änderungen.\n• Etablierung von Feedback-Schleifen, die Korrekturen in zukünftige Modelliterationen einbeziehen.\n\n🗑️ Löschung und das 'Right to be Forgotten':\n• Machine Unlearning-Techniken ermöglichen die selektive Entfernung spezifischer Dateneinflüsse aus trainierten Modellen.\n• Entwicklung von Löschungsprotokollen, die sowohl Rohdaten als auch deren Einfluss auf Modellparameter berücksichtigen.\n• Implementierung von Data Lineage-Systemen zur Verfolgung von Datenflüssen durch komplexe KI-Pipelines.\n• Bereitstellung von Löschungsbestätigungen und Nachweis der vollständigen Entfernung von Dateneinflüssen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie führt ADVISORI Datenschutz-Folgenabschätzungen für KI-Projekte durch und welche spezifischen Risikofaktoren werden bei der DPIA-Erstellung für AI-Systeme berücksichtigt?',
        answer: "Die Datenschutz-Folgenabschätzung für KI-Systeme erfordert einen spezialisierten Ansatz, der die einzigartigen Risiken und Komplexitäten von Artificial Intelligence berücksichtigt. ADVISORI hat einen umfassenden DPIA-Framework für KI entwickelt, der sowohl aktuelle als auch zukünftige Datenschutzrisiken systematisch identifiziert und bewertet.\n\n📊 KI-spezifische Risikobewertung:\n• Automatisierte Entscheidungsfindung und deren Auswirkungen auf Betroffene, einschließlich Diskriminierungsrisiken und Fairness-Aspekte.\n• Profiling-Risiken durch umfassende Datenanalyse und Mustererkennung, die zu unerwünschten Kategorisierungen führen können.\n• Transparenz- und Erklärbarkeitsdefizite bei komplexen Machine Learning-Modellen, die das Verständnis für Betroffene erschweren.\n• Datenqualität und Bias-Risiken, die zu unfairen oder diskriminierenden Entscheidungen führen können.\n\n🔄 Dynamische DPIA für adaptive Systeme:\n• Berücksichtigung der Tatsache, dass KI-Systeme sich durch kontinuierliches Lernen verändern und neue Risiken entwickeln können.\n• Implementierung von kontinuierlichen Monitoring-Mechanismen zur Früherkennung neuer Datenschutzrisiken.\n• Entwicklung von Trigger-Mechanismen, die automatisch DPIA-Updates auslösen, wenn sich Systemverhalten oder Datenverarbeitung ändern.\n• Etablierung von Feedback-Schleifen zwischen Betrieb und Risikobewertung für proaktive Risikominimierung.\n\n🛡️ ADVISORI's DPIA-Methodik für KI:\n• Strukturierte Bewertung von Datenflüssen, Verarbeitungszwecken und Entscheidungslogiken in KI-Systemen.\n• Stakeholder-Analyse einschließlich Betroffener, Entwickler, Betreiber und regulatorischer Anforderungen.\n• Technische Risikobewertung von Algorithmen, Datenqualität, Sicherheitsmaßnahmen und Systemarchitektur.\n• Entwicklung spezifischer Schutzmaßnahmen und Governance-Strukturen für identifizierte Risiken.\n\n📋 Compliance-Integration und Dokumentation:\n• Erstellung umfassender Dokumentation, die sowohl technische als auch rechtliche Aspekte abdeckt.\n• Integration der DPIA-Ergebnisse in Entwicklungs- und Betriebsprozesse für kontinuierliche Compliance.\n• Bereitstellung von Templates und Checklisten für wiederkehrende KI-Projekte zur Effizienzsteigerung.\n• Schulung von internen Teams in KI-spezifischer DPIA-Durchführung für nachhaltige Compliance-Fähigkeiten."
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
