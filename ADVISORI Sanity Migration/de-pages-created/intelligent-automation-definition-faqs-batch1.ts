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
    console.log('Updating Intelligent Automation Definition page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-definition' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-definition" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was genau versteht man unter Intelligent Automation und wie unterscheidet sie sich von traditioneller Prozessautomatisierung?',
        answer: "Intelligent Automation (IA) repräsentiert einen fundamentalen Paradigmenwechsel in der Automatisierungstechnologie, der weit über die Grenzen traditioneller regelbasierter Systeme hinausgeht. Während herkömmliche Automatisierung auf vordefinierte Regeln und strukturierte Daten angewiesen ist, integriert IA künstliche Intelligenz, maschinelles Lernen und kognitive Technologien zu selbstlernenden, adaptiven Systemen. Diese Evolution ermöglicht es Unternehmen, komplexe, unstrukturierte Prozesse zu automatisieren und dabei kontinuierlich zu lernen und sich zu verbessern.\n\n🧠 Kernkomponenten der Intelligent Automation:\n• Künstliche Intelligenz und Machine Learning: Ermöglichen Mustererkennung, Vorhersagen und autonome Entscheidungsfindung basierend auf historischen Daten und kontinuierlichem Lernen.\n• Natural Language Processing: Verarbeitung und Verstehen menschlicher Sprache in Text und Sprache für intelligente Dokumentenverarbeitung und Kommunikation.\n• Computer Vision: Automatische Interpretation visueller Informationen für Bildverarbeitung, Dokumentenerkennung und Qualitätskontrolle.\n• Robotic Process Automation: Grundlage für die Automatisierung repetitiver Aufgaben, erweitert durch kognitive Fähigkeiten.\n• Process Mining und Analytics: Kontinuierliche Analyse und Optimierung von Geschäftsprozessen durch datengetriebene Erkenntnisse.\n\n⚡ Unterschiede zur traditionellen Automatisierung:\n• Adaptive Lernfähigkeit: IA-Systeme verbessern ihre Performance kontinuierlich durch Erfahrung und neue Daten, während traditionelle Systeme statisch bleiben.\n• Unstrukturierte Datenverarbeitung: Fähigkeit zur Verarbeitung von E-Mails, Dokumenten, Bildern und anderen unstrukturierten Datenquellen.\n• Kontextuelle Entscheidungsfindung: Berücksichtigung komplexer Zusammenhänge und Ausnahmen statt starrer Regelanwendung.\n• Proaktive Optimierung: Selbstständige Identifikation von Verbesserungsmöglichkeiten und Anpassung an veränderte Bedingungen.\n\n🎯 Strategische Vorteile für Unternehmen:\n• Skalierbare Komplexitätsbewältigung: Automatisierung auch hochkomplexer, wissensintensiver Prozesse mit variablen Anforderungen.\n• Kontinuierliche Wertschöpfung: Selbstoptimierende Systeme, die ihren Beitrag zur Geschäftsperformance stetig steigern.\n• Resiliente Prozessarchitektur: Adaptive Systeme, die sich an veränderte Geschäftsanforderungen und Marktbedingungen anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche technologischen Komponenten bilden das Fundament von Intelligent Automation und wie interagieren sie miteinander?',
        answer: "Das technologische Fundament von Intelligent Automation basiert auf der orchestrierten Integration verschiedener fortschrittlicher Technologien, die synergetisch zusammenwirken, um intelligente, selbstlernende Automatisierungslösungen zu schaffen. Diese Komponenten bilden ein kohärentes Ökosystem, das über die Summe seiner Einzelteile hinausgeht und neue Möglichkeiten für Geschäftsprozessoptimierung eröffnet. Das Verständnis dieser Architektur ist essentiell für strategische Entscheidungen und erfolgreiche Implementierungen.\n\n🔧 Zentrale Technologie-Komponenten:\n• Machine Learning Engines: Herzstück der Intelligenz mit Algorithmen für Supervised, Unsupervised und Reinforcement Learning zur kontinuierlichen Verbesserung der Systemperformance.\n• Natural Language Processing Frameworks: Ermöglichen das Verstehen, Interpretieren und Generieren menschlicher Sprache für intelligente Dokumentenverarbeitung und Kommunikation.\n• Computer Vision Systeme: Automatische Analyse und Interpretation visueller Informationen für Dokumentenerkennung, Qualitätskontrolle und Bildverarbeitung.\n• Decision Engines: Regelbasierte und KI-gestützte Entscheidungssysteme für komplexe Geschäftslogik und adaptive Prozesssteuerung.\n• Process Orchestration Platforms: Koordination und Management komplexer Workflows mit intelligenter Ressourcenallokation und Ausnahmebehandlung.\n\n🌐 Integrations- und Interaktionsebenen:\n• API-basierte Konnektivität: Nahtlose Integration verschiedener Systemkomponenten durch standardisierte Schnittstellen und Microservices-Architektur.\n• Event-driven Architecture: Reaktive Systemarchitektur, die auf Ereignisse und Datenänderungen in Echtzeit reagiert und entsprechende Aktionen auslöst.\n• Data Pipeline Management: Intelligente Datenverarbeitung und -transformation zwischen verschiedenen Systemkomponenten mit Qualitätssicherung.\n• Feedback Loop Mechanismen: Kontinuierliche Rückkopplung zwischen Systemkomponenten für selbstlernende Optimierung und Anpassung.\n\n🏗️ Architektur-Prinzipien und Design-Patterns:\n• Modulare Skalierbarkeit: Flexible Systemarchitektur, die es ermöglicht, einzelne Komponenten unabhängig zu skalieren und zu erweitern.\n• Cloud-native Design: Optimierung für Cloud-Umgebungen mit Containerisierung, Microservices und serverless Computing-Ansätzen.\n• Security by Design: Integrierte Sicherheitsmaßnahmen auf allen Architekturebenen mit Verschlüsselung, Authentifizierung und Autorisierung.\n• Observability und Monitoring: Umfassende Überwachung und Analyse der Systemperformance mit Real-time Dashboards und Alerting-Mechanismen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie definiert der EU AI Act Intelligent Automation Systeme und welche Compliance-Anforderungen ergeben sich daraus?',
        answer: "Der EU AI Act stellt einen wegweisenden regulatorischen Rahmen dar, der Intelligent Automation Systeme nach ihrem Risikopotenzial klassifiziert und entsprechende Compliance-Anforderungen definiert. Diese Regulierung erfordert eine präzise Einordnung von IA-Systemen und die Implementierung angemessener Governance-Strukturen. Für Unternehmen bedeutet dies sowohl Herausforderungen als auch Chancen, da Compliance-konforme Systeme Vertrauen schaffen und Wettbewerbsvorteile generieren können.\n\n⚖️ EU AI Act Klassifizierung von IA-Systemen:\n• Hochrisiko-KI-Systeme: IA-Anwendungen in kritischen Bereichen wie Personalwesen, Kreditvergabe oder Sicherheitssystemen unterliegen strengen Anforderungen an Transparenz, Dokumentation und Überwachung.\n• Begrenzte Risiko-Systeme: Chatbots und interaktive IA-Systeme müssen Nutzer über die Interaktion mit KI informieren und Transparenz gewährleisten.\n• Minimales Risiko: Viele Standard-IA-Anwendungen fallen in diese Kategorie mit grundlegenden Transparenz- und Dokumentationsanforderungen.\n• Verbotene KI-Praktiken: Bestimmte manipulative oder diskriminierende IA-Anwendungen sind grundsätzlich untersagt.\n\n📋 Zentrale Compliance-Anforderungen:\n• Risikomanagement-Systeme: Implementierung umfassender Prozesse zur Identifikation, Bewertung und Minderung von KI-Risiken während des gesamten Systemlebenszyklus.\n• Datengovernance und Qualitätssicherung: Etablierung robuster Datenmanagement-Prozesse mit Fokus auf Datenqualität, Bias-Vermeidung und Repräsentativität.\n• Transparenz und Erklärbarkeit: Bereitstellung verständlicher Informationen über Systemfunktionalität, Entscheidungslogik und Limitationen für Nutzer und Aufsichtsbehörden.\n• Menschliche Aufsicht: Integration von Human-in-the-Loop Mechanismen für kritische Entscheidungen und kontinuierliche Überwachung der Systemperformance.\n• Dokumentation und Audit-Trail: Umfassende Dokumentation aller Entwicklungs-, Implementierungs- und Betriebsprozesse für Compliance-Nachweise.\n\n🛡️ Strategische Compliance-Umsetzung:\n• Compliance by Design: Integration regulatorischer Anforderungen bereits in der Systemarchitektur und Entwicklungsphase zur Vermeidung nachträglicher Anpassungen.\n• Kontinuierliches Monitoring: Implementierung automatisierter Überwachungssysteme für laufende Compliance-Überprüfung und Risikobewertung.\n• Stakeholder-Engagement: Einbindung von Legal-, Compliance- und Business-Teams in die IA-Entwicklung für ganzheitliche Lösungsansätze.\n• Zukunftssichere Governance: Aufbau flexibler Compliance-Strukturen, die sich an evolvierende regulatorische Anforderungen anpassen lassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielen Daten in Intelligent Automation Systemen und wie wird Datenqualität und -governance sichergestellt?',
        answer: "Daten bilden das Lebenselixier von Intelligent Automation Systemen und bestimmen maßgeblich deren Effektivität, Zuverlässigkeit und Compliance-Konformität. Die Qualität, Verfügbarkeit und Governance von Daten entscheiden über Erfolg oder Misserfolg von IA-Implementierungen. Moderne IA-Systeme benötigen nicht nur große Datenmengen, sondern vor allem hochwertige, repräsentative und ethisch einwandfreie Datengrundlagen für optimale Performance und regulatorische Konformität.\n\n📊 Datentypen und ihre Bedeutung in IA-Systemen:\n• Strukturierte Transaktionsdaten: Grundlage für Machine Learning Modelle und Predictive Analytics mit klaren Datenformaten und Beziehungen.\n• Unstrukturierte Inhalte: Texte, E-Mails, Dokumente und Bilder, die durch NLP und Computer Vision verarbeitet und in verwertbare Erkenntnisse transformiert werden.\n• Verhaltensdaten: Nutzerinteraktionen und Prozessdaten, die kontinuierliches Lernen und Systemoptimierung ermöglichen.\n• Externe Datenquellen: Marktdaten, regulatorische Informationen und Branchenbenchmarks für kontextuelle Intelligenz und erweiterte Analysefähigkeiten.\n• Feedback-Daten: Kontinuierliche Rückmeldungen über Systemperformance und Nutzerzufriedenheit für adaptive Verbesserungen.\n\n🔍 Datenqualitäts-Management:\n• Datenvalidierung und Bereinigung: Automatisierte Prozesse zur Identifikation und Korrektur von Datenfehlern, Duplikaten und Inkonsistenzen vor der Verarbeitung.\n• Bias-Erkennung und Mitigation: Systematische Analyse von Datenverzerrungen und Implementierung von Korrekturmaßnahmen für faire und repräsentative Ergebnisse.\n• Datenlineage und Provenance: Vollständige Nachverfolgung der Datenherkunft und Transformationsprozesse für Transparenz und Audit-Fähigkeit.\n• Kontinuierliche Qualitätsüberwachung: Real-time Monitoring von Datenqualitätsmetriken mit automatischen Alerts bei Qualitätsverschlechterungen.\n\n🛡️ Data Governance und Compliance:\n• Privacy by Design: Integration von Datenschutzprinzipien in alle Datenverarbeitungsprozesse mit Minimierung, Zweckbindung und Transparenz.\n• Zugriffskontrollen und Berechtigungen: Granulare Steuerung des Datenzugriffs basierend auf Rollen, Verantwortlichkeiten und Geschäftsanforderungen.\n• Datenaufbewahrung und Löschung: Automatisierte Lifecycle-Management-Prozesse für compliance-konforme Datenaufbewahrung und rechtzeitige Löschung.\n• Cross-Border Data Transfer: Sicherstellung regulatorischer Konformität bei internationalen Datentransfers mit angemessenen Schutzmaßnahmen."
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
