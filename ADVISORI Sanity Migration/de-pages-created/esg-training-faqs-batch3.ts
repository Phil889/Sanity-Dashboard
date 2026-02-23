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
    console.log('Updating ESG Training page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-training' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-training" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI globale ESG Training-Standards, die kulturelle Diversität respektieren und internationale Compliance-Anforderungen erfüllen?",
        answer: "Multinationale Organisationen stehen vor der Herausforderung, einheitliche ESG-Standards zu etablieren, während sie gleichzeitig lokale kulturelle Besonderheiten und regionale Regulatorik berücksichtigen müssen. ADVISORI entwickelt kulturell-sensitive, global harmonisierte Training-Programme, die universelle ESG-Prinzipien mit lokaler Relevanz und kultureller Angemessenheit verbinden.\n\n🌍 Global ESG Training Harmonization:\n• Cultural Intelligence Integration: Systematische Integration kultureller Diversität und lokaler Wertesysteme in ESG-Training-Inhalte, um Akzeptanz und Verständnis in verschiedenen Regionen zu maximieren.\n• Multi-jurisdictional Compliance Mapping: Umfassende Berücksichtigung regionaler ESG-Regulatorik und Standards (EU, US, APAC, etc.) in einem kohärenten globalen Training-Framework.\n• Localized Content Adaptation: Anpassung von Fallstudien, Beispielen und praktischen Übungen an lokale Geschäftskontexte und kulturelle Normen ohne Kompromittierung der ESG-Kernprinzipien.\n• Multi-language Learning Platforms: Bereitstellung muttersprachlicher Training-Inhalte und kulturell angepasster Lernmethoden für maximale Verständlichkeit und Engagement.\n\n🎯 ADVISORI's Cross-Cultural ESG Excellence:\n• Regional Expert Networks: Aufbau regionaler Expertennetzwerke für kulturell-authentische Content-Entwicklung und lokale Best Practice-Integration.\n• Cultural Change Management: Spezialisierte Ansätze für ESG-Veränderungsprozesse in verschiedenen Kulturen, von kollektiven asiatischen Gesellschaften bis zu individualistischen westlichen Kulturen.\n• Global-Local Balance Framework: Entwicklung ausgewogener Ansätze, die globale ESG-Konsistenz mit lokaler Flexibilität und kultureller Sensitivität kombinieren.\n• Cross-Border Collaboration Tools: Implementierung digitaler Plattformen für den interkulturellen Erfahrungsaustausch und das Lernen voneinander zwischen verschiedenen Regionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie adressiert ADVISORI die spezifischen ESG Training-Bedürfnisse von KMUs und Start-ups mit begrenzten Ressourcen aber hohen Compliance-Anforderungen?",
        answer: "Kleine und mittlere Unternehmen sowie Start-ups stehen vor der paradoxen Situation, dass sie einerseits strenge ESG-Compliance-Anforderungen erfüllen müssen, andererseits aber über begrenzte Ressourcen für umfassende Training-Programme verfügen. ADVISORI entwickelt skalierbare, kosteneffiziente ESG Training-Lösungen, die speziell auf die Bedürfnisse ressourcenbeschränkter Organisationen zugeschnitten sind.\n\n💡 Resource-Optimized ESG Training Solutions:\n• Modular Micro-Learning Architecture: Entwicklung flexibler, modularer Training-Einheiten, die schrittweise implementiert werden können und sich an verfügbare Budgets und Zeitkapazitäten anpassen.\n• Shared Learning Consortiums: Etablierung branchenspezifischer Learning-Konsortien, in denen sich mehrere KMUs die Kosten für hochwertige ESG-Training-Programme teilen.\n• Digital-First Delivery Models: Schwerpunkt auf kostengünstigen digitalen Lernformaten mit interaktiven Online-Modulen, die physische Präsenz-Training ergänzen oder ersetzen.\n• Mentorship und Peer-Learning: Aufbau von Mentorship-Programmen, in denen ESG-erfahrene Unternehmen ihr Wissen mit weniger erfahrenen Organisationen teilen.\n\n🚀 ADVISORI's SME-Focused Training Innovation:\n• Just-Enough Learning Principles: Konzentration auf die wirklich kritischen ESG-Kompetenzen, die für Compliance und Geschäftserfolg unerlässlich sind, ohne überflüssige Komplexität.\n• Template und Toolkit Integration: Bereitstellung praktischer Tools, Templates und Checklisten, die sofortige Anwendung und Implementation ermöglichen.\n• Gradual Capability Building: Strukturierte Lernpfade, die mit grundlegenden ESG-Kompetenzen beginnen und sich je nach Unternehmenswachstum und verfügbaren Ressourcen erweitern lassen.\n• Community-Based Support: Aufbau von KMU-ESG-Communities für kontinuierlichen Erfahrungsaustausch, Problemlösung und gegenseitige Unterstützung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI Verhaltenspsychologie und Neurowissenschaft in ESG Training-Design für nachhaltige Verhaltensänderungen?",
        answer: "Nachhaltiges ESG-Verhalten erfordert mehr als reines Faktenwissen - es erfordert tiefgreifende Verhaltensänderungen, die nur durch wissenschaftlich fundierte Lernansätze erreicht werden können. ADVISORI integriert Erkenntnisse aus Verhaltenspsychologie, Neurowissenschaft und Behavioral Economics in das Training-Design, um langfristige, intrinsisch motivierte ESG-Verhaltensweisen zu fördern.\n\n🧠 Behavioral Science-Based Learning Design:\n• Cognitive Load Optimization: Anwendung kognitiver Wissenschaft zur Optimierung der Informationsverarbeitung und zur Vermeidung von Mental Overload bei komplexen ESG-Themen.\n• Nudging und Choice Architecture: Integration verhaltensökonomischer Nudging-Techniken zur Förderung nachhaltiger Entscheidungen in alltäglichen Arbeitssituationen.\n• Habit Formation Strategies: Systematische Anwendung der Gewohnheitsbildungsforschung zur Etablierung langfristiger ESG-Verhaltensweisen durch wiederholte positive Verstärkung.\n• Emotional Engagement Techniques: Nutzung emotionaler Intelligenz und Storytelling-Methoden zur Schaffung persönlicher Verbindungen zu ESG-Themen.\n\n🎯 ADVISORI's Neuroscience-Informed Training Methodology:\n• Spaced Repetition und Memory Consolidation: Implementierung wissenschaftlich optimierter Wiederholungszyklen zur Stärkung des Langzeitgedächtnisses und zur Verfestigung ESG-Kompetenzen.\n• Social Learning und Mirror Neuron Activation: Nutzung sozialer Lernprozesse und Peer-Modeling zur Aktivierung unbewusster Nachahmungstendenzen für ESG-Verhalten.\n• Intrinsic Motivation Enhancement: Entwicklung von Training-Ansätzen, die intrinsische Motivation durch Autonomie, Mastery und Purpose-Orientierung fördern.\n• Feedback Loop Optimization: Design wissenschaftlich fundierter Feedback-Mechanismen, die kontinuierliche Verbesserung und Selbstregulation unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie entwickelt ADVISORI zukunftsorientierte ESG Training-Programme, die auf kommende Technologien und Marktentwicklungen vorbereiten?",
        answer: "Die ESG-Landschaft entwickelt sich rasant weiter - von Blockchain-basierten Nachhaltigkeitsnachweisen bis zu KI-gestützten Klimamodellen. ADVISORI entwickelt zukunftsorientierte Training-Programme, die nicht nur aktuelle ESG-Anforderungen adressieren, sondern auch auf kommende technologische und gesellschaftliche Entwicklungen vorbereiten.\n\n🔮 Future-Ready ESG Training Innovation:\n• Emerging Technology Integration: Proaktive Integration aufkommender Technologien wie Blockchain für Supply Chain Transparency, IoT für Environmental Monitoring und AI für ESG Data Analytics in Training-Curricula.\n• Scenario-Based Future Planning: Entwicklung von Training-Modulen basierend auf verschiedenen Zukunftsszenarien für Klimawandel, regulatorische Entwicklungen und gesellschaftliche Veränderungen.\n• Digital Native Learning Approaches: Anpassung an die Lernpräferenzen zukünftiger Generationen durch immersive, interaktive und technologie-intensive Lernformate.\n• Circular Economy Mastery: Vorbereitung auf die vollständige Transformation zu Circular Economy-Geschäftsmodellen durch spezialisierte Training-Module.\n\n⚡ ADVISORI's Innovation-Driven Learning Ecosystem:\n• Technology Trend Monitoring: Kontinuierliche Überwachung technologischer Entwicklungen und deren potentielle Auswirkungen auf ESG-Praktiken und -Anforderungen.\n• Future Skills Anticipation: Identifikation und Entwicklung der ESG-Kompetenzen, die in 5-10 Jahren kritisch sein werden, von Advanced Analytics bis zu Stakeholder Engagement in virtuellen Räumen.\n• Cross-Industry Innovation Transfer: Übertragung innovativer ESG-Praktiken zwischen verschiedenen Branchen zur Beschleunigung des Lernens und der Adaptation neuer Ansätze.\n• Continuous Learning Architecture: Aufbau flexibler Lernarchitekturen, die schnelle Integration neuer Erkenntnisse und Entwicklungen ermöglichen, ohne bestehende Programme zu disrumpieren."
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
