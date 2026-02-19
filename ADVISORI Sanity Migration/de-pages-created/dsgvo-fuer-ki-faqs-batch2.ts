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
    console.log('Updating DSGVO für KI page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: 'Wie gewährleistet ADVISORI die Transparenz und Erklärbarkeit von KI-Entscheidungen gemäß DSGVO-Anforderungen und welche Explainable AI-Techniken kommen zum Einsatz?',
        answer: "Transparenz und Erklärbarkeit sind fundamentale DSGVO-Anforderungen für KI-Systeme, die automatisierte Entscheidungen treffen. ADVISORI entwickelt umfassende Explainable AI-Lösungen, die nicht nur regulatorische Compliance gewährleisten, sondern auch das Vertrauen von Nutzern und Stakeholdern in KI-Systeme stärken.\n\n🔍 DSGVO-konforme Transparenzanforderungen:\n• Artikel 13 und 14 DSGVO verlangen umfassende Informationen über automatisierte Entscheidungsfindung, einschließlich der verwendeten Logik und der Tragweite sowie angestrebten Auswirkungen.\n• Betroffene müssen verstehen können, wie KI-Entscheidungen zustande kommen und welche Faktoren diese beeinflussen.\n• Transparenz muss in verständlicher und zugänglicher Form bereitgestellt werden, nicht nur in technischer Dokumentation.\n• Kontinuierliche Verfügbarkeit von Erklärungen während des gesamten Lebenszyklus des KI-Systems.\n\n🧠 ADVISORI's Explainable AI-Framework:\n• LIME (Local Interpretable Model-agnostic Explanations) für lokale Erklärungen einzelner Entscheidungen durch Approximation des Modellverhaltens.\n• SHAP (SHapley Additive exPlanations) für konsistente und theoretisch fundierte Feature-Importance-Bewertungen.\n• Attention-Mechanismen in Deep Learning-Modellen zur Visualisierung relevanter Eingabebereiche.\n• Counterfactual Explanations, die zeigen, welche Änderungen zu anderen Entscheidungen geführt hätten.\n\n📊 Benutzerfreundliche Erklärungsschnittstellen:\n• Entwicklung intuitiver Dashboards, die komplexe KI-Entscheidungen in verständlicher Form darstellen.\n• Adaptive Erklärungstiefe je nach Zielgruppe: von einfachen Zusammenfassungen für Endnutzer bis zu detaillierten technischen Analysen für Experten.\n• Interaktive Visualisierungen, die es Nutzern ermöglichen, verschiedene Szenarien zu erkunden und deren Auswirkungen zu verstehen.\n• Mehrsprachige Unterstützung und barrierefreie Gestaltung für umfassende Zugänglichkeit.\n\n🔄 Kontinuierliche Transparenz-Governance:\n• Implementierung von Monitoring-Systemen, die die Qualität und Konsistenz von Erklärungen überwachen.\n• Regelmäßige Validierung der Erklärungsgenauigkeit durch Human-in-the-Loop-Verfahren.\n• Dokumentation von Erklärungsmethoden und deren Limitationen für Audit-Zwecke.\n• Schulung von Mitarbeitern in der Kommunikation von KI-Entscheidungen gegenüber Betroffenen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche besonderen Herausforderungen entstehen bei grenzüberschreitenden KI-Systemen und wie unterstützt ADVISORI bei der DSGVO-konformen Gestaltung internationaler AI-Deployments?',
        answer: "Grenzüberschreitende KI-Systeme stellen komplexe datenschutzrechtliche Herausforderungen dar, die über nationale DSGVO-Implementierungen hinausgehen. ADVISORI entwickelt internationale Compliance-Strategien, die sowohl europäische als auch globale Datenschutzanforderungen berücksichtigen und gleichzeitig die operative Effizienz von KI-Systemen gewährleisten.\n\n🌍 Internationale Datentransfer-Compliance:\n• Angemessenheitsbeschlüsse der EU-Kommission bieten den sichersten Rahmen für Datentransfers, sind aber nur für wenige Länder verfügbar.\n• Standardvertragsklauseln müssen für KI-spezifische Datenverarbeitungen angepasst und durch zusätzliche Schutzmaßnahmen ergänzt werden.\n• Binding Corporate Rules für multinationale Unternehmen ermöglichen konzernweite KI-Datenverarbeitung unter einheitlichen Datenschutzstandards.\n• Transfer Impact Assessments bewerten länderspezifische Risiken und erforderliche Zusatzmaßnahmen für sichere Datentransfers.\n\n🔐 Technische Schutzmaßnahmen für internationale KI-Systeme:\n• End-to-End-Verschlüsselung für alle grenzüberschreitenden Datenflüsse mit KI-optimierten Verschlüsselungsverfahren.\n• Federated Learning-Architekturen minimieren Datentransfers durch lokales Training und nur Modell-Parameter-Austausch.\n• Edge Computing-Lösungen verarbeiten sensible Daten lokal und übertragen nur aggregierte, anonymisierte Erkenntnisse.\n• Multi-Region-Deployment mit datenresidenz-konformen Architekturen für verschiedene Jurisdiktionen.\n\n🏛️ Jurisdiktionale Compliance-Koordination:\n• Mapping internationaler Datenschutzgesetze und deren Interaktion mit der DSGVO für umfassende Compliance.\n• Entwicklung harmonisierter Datenschutz-Governance-Frameworks, die verschiedene nationale Anforderungen berücksichtigen.\n• Koordination mit lokalen Datenschutzbehörden und Rechtsberatern in verschiedenen Jurisdiktionen.\n• Kontinuierliche Überwachung regulatorischer Entwicklungen in relevanten Märkten für proaktive Anpassungen.\n\n📋 ADVISORI's Global AI Compliance Framework:\n• Entwicklung länderspezifischer Compliance-Matrizen für KI-Deployments in verschiedenen Märkten.\n• Implementierung flexibler Systemarchitekturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen.\n• Etablierung von Cross-Border-Incident-Response-Prozessen für grenzüberschreitende Datenschutzverletzungen.\n• Schulung internationaler Teams in einheitlichen Datenschutz-Standards und lokalen Besonderheiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie adressiert ADVISORI die Herausforderungen von Bias und Diskriminierung in KI-Systemen aus DSGVO-Perspektive und welche Fairness-Mechanismen werden implementiert?',
        answer: "Bias und Diskriminierung in KI-Systemen stellen nicht nur ethische, sondern auch rechtliche Herausforderungen dar, die unter der DSGVO besondere Beachtung finden. ADVISORI entwickelt umfassende Fairness-Frameworks, die sowohl technische als auch rechtliche Aspekte der Diskriminierungsvermeidung in AI-Systemen adressieren.\n\n⚖️ DSGVO-relevante Diskriminierungsrisiken:\n• Artikel 22 DSGVO verbietet automatisierte Entscheidungen, die zu Diskriminierung führen, insbesondere bei besonderen Kategorien personenbezogener Daten.\n• Profiling-Aktivitäten dürfen nicht zu unfairer Behandlung oder Benachteiligung bestimmter Personengruppen führen.\n• Transparenzpflichten erfordern die Offenlegung von Faktoren, die zu unterschiedlichen Behandlungen führen können.\n• Betroffenenrechte umfassen das Recht auf Erklärung und Anfechtung diskriminierender Entscheidungen.\n\n🔍 Bias-Detection und -Monitoring:\n• Implementierung kontinuierlicher Fairness-Metriken, die verschiedene Formen von Bias in KI-Entscheidungen identifizieren.\n• Statistische Parität-Tests überprüfen, ob verschiedene Gruppen gleiche Behandlung erfahren.\n• Equalized Odds-Analysen bewerten, ob Fehlerquoten zwischen verschiedenen Gruppen ausgeglichen sind.\n• Individual Fairness-Bewertungen stellen sicher, dass ähnliche Individuen ähnlich behandelt werden.\n\n🛠️ Technische Fairness-Interventionen:\n• Pre-Processing-Techniken entfernen oder reduzieren Bias in Trainingsdaten durch intelligente Sampling- und Augmentationsverfahren.\n• In-Processing-Methoden integrieren Fairness-Constraints direkt in den Lernalgorithmus für ausgewogene Modellentwicklung.\n• Post-Processing-Kalibrierung adjustiert Modelloutputs zur Gewährleistung fairer Ergebnisse über verschiedene Gruppen hinweg.\n• Adversarial Debiasing nutzt gegnerische Netzwerke zur Entfernung diskriminierender Muster aus Modellrepräsentationen.\n\n📊 ADVISORI's Comprehensive Fairness Framework:\n• Entwicklung gruppenspezifischer Fairness-Definitionen basierend auf Anwendungskontext und rechtlichen Anforderungen.\n• Implementierung von Multi-Stakeholder-Bewertungsprozessen zur Definition akzeptabler Fairness-Trade-offs.\n• Etablierung von Fairness-Governance-Strukturen mit regelmäßigen Reviews und Anpassungen.\n• Dokumentation von Fairness-Entscheidungen und deren Begründungen für Compliance- und Audit-Zwecke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielt die Einwilligung bei KI-Systemen und wie gestaltet ADVISORI DSGVO-konforme Consent-Mechanismen für komplexe AI-Anwendungen?',
        answer: "Einwilligung in KI-Systemen ist besonders komplex, da die dynamische Natur von AI-Anwendungen traditionelle Consent-Modelle herausfordert. ADVISORI entwickelt innovative Einwilligungskonzepte, die sowohl die DSGVO-Anforderungen an informierte Einwilligung erfüllen als auch die technischen Realitäten moderner KI-Systeme berücksichtigen.\n\n📜 DSGVO-Anforderungen an KI-Einwilligung:\n• Einwilligung muss freiwillig, spezifisch, informiert und unmissverständlich sein, was bei komplexen KI-Systemen besondere Herausforderungen darstellt.\n• Granularität der Einwilligung muss verschiedene Verarbeitungszwecke und KI-Funktionen differenziert abdecken.\n• Widerrufbarkeit muss technisch implementiert werden, ohne die Funktionsfähigkeit des gesamten Systems zu beeinträchtigen.\n• Nachweis der Einwilligung erfordert umfassende Dokumentation und Audit-Trails für alle Consent-Interaktionen.\n\n🎯 Adaptive Consent-Management für KI:\n• Dynamic Consent-Plattformen ermöglichen es Nutzern, ihre Einwilligungen für verschiedene KI-Funktionen granular zu verwalten.\n• Contextual Consent berücksichtigt sich ändernde Nutzungskontexte und passt Einwilligungsanfragen entsprechend an.\n• Progressive Disclosure präsentiert Einwilligungsinformationen schrittweise, um Überforderung zu vermeiden und Verständnis zu fördern.\n• Just-in-Time-Consent holt Einwilligungen zum optimalen Zeitpunkt ein, wenn der Nutzen für den Betroffenen klar erkennbar ist.\n\n🔄 Technische Implementierung von Consent-Systemen:\n• Blockchain-basierte Consent-Records gewährleisten Unveränderlichkeit und Transparenz von Einwilligungsentscheidungen.\n• API-gestützte Consent-Propagation stellt sicher, dass Einwilligungsänderungen in Echtzeit an alle relevanten KI-Komponenten übertragen werden.\n• Privacy-Preserving Consent-Verification ermöglicht die Überprüfung von Einwilligungen ohne Preisgabe zusätzlicher persönlicher Informationen.\n• Automated Consent-Renewal-Systeme erinnern Nutzer an ablaufende Einwilligungen und erleichtern deren Erneuerung.\n\n🎨 User Experience für KI-Consent:\n• Entwicklung intuitiver Consent-Interfaces, die komplexe KI-Verarbeitungen in verständlicher Form darstellen.\n• Visualisierung von Datenflüssen und KI-Entscheidungsprozessen zur Förderung des Nutzerverständnisses.\n• Personalisierte Consent-Empfehlungen basierend auf Nutzerpräferenzen und Risikoprofilen.\n• Mehrsprachige und barrierefreie Consent-Gestaltung für umfassende Zugänglichkeit und Verständlichkeit."
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
