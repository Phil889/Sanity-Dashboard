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
    console.log('Updating Regulatory Change Coaching page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-change-coaching' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-change-coaching" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie bewertet ADVISORI die organisatorische Readiness für regulatorische Transformationen und welche kritischen Erfolgsfaktoren werden dabei identifiziert?',
        answer: "Die Bewertung der organisatorischen Readiness ist ein fundamentaler Baustein erfolgreicher regulatorischer Transformationen. ADVISORI hat ein mehrdimensionales Assessment-Framework entwickelt, das sowohl harte Faktoren wie Prozesse und Systeme als auch weiche Faktoren wie Kultur und Führungsbereitschaft systematisch evaluiert. Diese ganzheitliche Betrachtung ermöglicht es, präzise Entwicklungsbedarfe zu identifizieren und maßgeschneiderte Transformationsstrategien zu entwickeln.\n\n🔍 Mehrdimensionales Readiness Assessment:\n• Strukturelle Readiness: Bewertung der organisatorischen Strukturen, Governance-Mechanismen und Entscheidungsprozesse auf ihre Fähigkeit, regulatorische Veränderungen effektiv zu bewältigen.\n• Prozessuale Readiness: Analyse bestehender Compliance-Prozesse, deren Flexibilität und Anpassungsfähigkeit an neue regulatorische Anforderungen.\n• Technologische Readiness: Evaluation der IT-Infrastruktur, Datenmanagement-Kapazitäten und digitalen Tools zur Unterstützung regulatorischer Compliance.\n• Kulturelle Readiness: Untersuchung der Unternehmenskultur, Veränderungsbereitschaft und des Mindsets gegenüber regulatorischen Herausforderungen.\n\n🎯 Kritische Erfolgsfaktoren für regulatorische Transformationen:\n• Leadership Commitment: Sichtbare und nachhaltige Unterstützung der Führungsebene für regulatorische Veränderungsinitiativen.\n• Change Champions Network: Etablierung eines Netzwerks von Veränderungsbotschaftern in allen relevanten Geschäftsbereichen.\n• Kommunikationsexzellenz: Klare, konsistente und motivierende Kommunikation über Ziele, Fortschritte und Erfolge der Transformation.\n• Kompetenzentwicklung: Systematischer Aufbau der erforderlichen Fähigkeiten und Kenntnisse in der gesamten Organisation.\n\n📊 ADVISORI Readiness Diagnostic Tools:\n• Maturity Assessment Models: Strukturierte Bewertung des aktuellen Reifegrads in verschiedenen Dimensionen regulatorischer Compliance.\n• Stakeholder Readiness Mapping: Identifikation und Bewertung der Bereitschaft verschiedener Stakeholder-Gruppen für Veränderungen.\n• Cultural Assessment Surveys: Tiefgreifende Analyse der Unternehmenskultur und ihrer Auswirkungen auf Veränderungsfähigkeit.\n• Gap Analysis Frameworks: Systematische Identifikation von Lücken zwischen aktueller Situation und gewünschtem Zielzustand.\n\n🚀 Entwicklung von Readiness-Strategien:\n• Individualisierte Entwicklungspläne: Maßgeschneiderte Strategien zur Schließung identifizierter Readiness-Lücken.\n• Quick Wins Identification: Identifikation schnell realisierbarer Verbesserungen zur Stärkung des Veränderungsmomentums.\n• Long-term Capability Building: Langfristige Programme zur nachhaltigen Stärkung der organisatorischen Anpassungsfähigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Kompetenzen und Fähigkeiten entwickelt ADVISORI in Organisationen, um sie für zukünftige regulatorische Herausforderungen zu rüsten?',
        answer: "ADVISORI fokussiert auf den systematischen Aufbau zukunftsorientierter Kompetenzen, die Organisationen befähigen, nicht nur aktuelle regulatorische Anforderungen zu erfüllen, sondern auch proaktiv auf zukünftige Entwicklungen vorbereitet zu sein. Unser Capability Building Ansatz kombiniert technische Expertise mit strategischen Führungskompetenzen und organisatorischen Lernfähigkeiten.\n\n🧠 Strategische Regulatory Intelligence Kompetenzen:\n• Horizon Scanning Fähigkeiten: Entwicklung der Kompetenz zur frühzeitigen Identifikation und Bewertung aufkommender regulatorischer Trends und deren potenzieller Auswirkungen.\n• Regulatory Impact Assessment: Befähigung zur systematischen Analyse und Quantifizierung der Auswirkungen regulatorischer Veränderungen auf Geschäftsprozesse und Strategien.\n• Stakeholder Intelligence: Aufbau von Fähigkeiten zur Analyse und Antizipation der Positionen und Strategien verschiedener regulatorischer Stakeholder.\n• Scenario Planning Expertise: Entwicklung der Kompetenz zur Erstellung und Bewertung verschiedener regulatorischer Zukunftsszenarien.\n\n🔄 Adaptive Change Management Kompetenzen:\n• Agile Transformation Skills: Befähigung zur Anwendung agiler Methodologien in regulatorischen Veränderungsprozessen.\n• Cross-functional Collaboration: Entwicklung der Fähigkeit zur effektiven Zusammenarbeit zwischen verschiedenen Fachbereichen bei regulatorischen Projekten.\n• Rapid Prototyping: Kompetenz zur schnellen Entwicklung und Testung von Compliance-Lösungen vor der vollständigen Implementierung.\n• Continuous Improvement Mindset: Etablierung einer Kultur der kontinuierlichen Verbesserung und Anpassung regulatorischer Prozesse.\n\n💡 Technologische und Digitale Kompetenzen:\n• RegTech Integration: Befähigung zur Bewertung, Auswahl und Implementierung regulatorischer Technologielösungen.\n• Data Analytics für Compliance: Entwicklung von Fähigkeiten zur Nutzung von Datenanalyse für regulatorische Überwachung und Berichterstattung.\n• Automation Capabilities: Kompetenz zur Identifikation und Umsetzung von Automatisierungsmöglichkeiten in Compliance-Prozessen.\n• Digital Compliance Design: Fähigkeit zur Integration regulatorischer Anforderungen in digitale Geschäftsprozesse von Beginn an.\n\n🎯 Führungs- und Kommunikationskompetenzen:\n• Regulatory Leadership: Entwicklung der Fähigkeit zur inspirierenden Führung in regulatorischen Transformationsprozessen.\n• Stakeholder Engagement: Kompetenz zur effektiven Kommunikation und Zusammenarbeit mit internen und externen Stakeholdern.\n• Change Communication: Befähigung zur überzeugenden Kommunikation regulatorischer Veränderungen und deren Notwendigkeit.\n• Conflict Resolution: Entwicklung von Fähigkeiten zur Bewältigung von Widerständen und Konflikten in Veränderungsprozessen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestaltet ADVISORI effektive Change Management Methodologien speziell für komplexe Compliance-Transformationen?',
        answer: "Compliance-Transformationen erfordern spezialisierte Change Management Ansätze, die die einzigartigen Herausforderungen regulatorischer Veränderungen berücksichtigen. ADVISORI hat bewährte Change Management Prinzipien für den regulatorischen Kontext adaptiert und erweitert, um die besonderen Anforderungen von Compliance-Transformationen zu adressieren.\n\n🏗️ Spezialisierte Compliance Change Methodologie:\n• Regulatory Change Canvas: Ein strukturiertes Framework zur Visualisierung und Planung komplexer regulatorischer Veränderungen, das alle relevanten Dimensionen und Abhängigkeiten erfasst.\n• Phased Implementation Approach: Entwicklung stufenweiser Implementierungsstrategien, die Risiken minimieren und kontinuierliches Lernen ermöglichen.\n• Stakeholder-specific Change Strategies: Maßgeschneiderte Ansätze für verschiedene Stakeholder-Gruppen, die deren spezifische Bedürfnisse und Widerstände berücksichtigen.\n• Compliance Impact Mapping: Systematische Analyse und Visualisierung der Auswirkungen regulatorischer Veränderungen auf alle Geschäftsbereiche.\n\n🔄 Adaptive Change Execution:\n• Iterative Development Cycles: Anwendung agiler Prinzipien zur kontinuierlichen Verbesserung und Anpassung der Transformationsstrategie.\n• Real-time Feedback Integration: Etablierung von Mechanismen zur kontinuierlichen Erfassung und Integration von Feedback aus der Organisation.\n• Risk-based Change Prioritization: Priorisierung von Veränderungsmaßnahmen basierend auf Risikobewertungen und Compliance-Kritikalität.\n• Flexible Resource Allocation: Dynamische Anpassung von Ressourcen und Kapazitäten basierend auf sich ändernden Anforderungen.\n\n📊 Messung und Steuerung des Change-Erfolgs:\n• Compliance Change Metrics: Entwicklung spezifischer KPIs zur Messung des Fortschritts und Erfolgs regulatorischer Transformationen.\n• Behavioral Change Indicators: Überwachung von Verhaltensänderungen und kulturellen Verschiebungen in der Organisation.\n• Resistance Monitoring: Systematische Identifikation und Bewältigung von Widerständen gegen regulatorische Veränderungen.\n• Success Story Documentation: Erfassung und Kommunikation von Erfolgsgeschichten zur Stärkung des Veränderungsmomentums.\n\n🎯 Nachhaltigkeits-orientierte Change Strategien:\n• Embedding Mechanisms: Integration von Veränderungen in bestehende Prozesse, Systeme und Strukturen für nachhaltige Wirkung.\n• Knowledge Transfer Systems: Aufbau von Systemen zur Übertragung und Bewahrung von Wissen über erfolgreiche Veränderungspraktiken.\n• Continuous Learning Culture: Etablierung einer Kultur des kontinuierlichen Lernens und der Anpassung an neue regulatorische Herausforderungen.\n• Change Capability Institutionalization: Verankerung von Change Management Fähigkeiten als Kernkompetenz der Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche innovativen Trainings- und Entwicklungsstrategien nutzt ADVISORI, um nachhaltige Lerneffekte bei regulatorischen Veränderungen zu erzielen?',
        answer: "ADVISORI setzt auf innovative, erfahrungsbasierte Lernansätze, die über traditionelle Compliance-Schulungen hinausgehen und nachhaltige Verhaltensänderungen sowie tiefgreifendes Verständnis für regulatorische Zusammenhänge schaffen. Unser Ansatz kombiniert modernste Lernmethodologien mit praktischer Anwendung und kontinuierlicher Verstärkung.\n\n🎓 Innovative Lernmethodologien:\n• Experiential Learning Workshops: Praxisorientierte Workshops, in denen Teilnehmer regulatorische Herausforderungen in simulierten Umgebungen erleben und bewältigen.\n• Gamification Approaches: Einsatz spielerischer Elemente zur Steigerung der Motivation und des Engagements bei der Vermittlung komplexer regulatorischer Inhalte.\n• Case-based Learning: Verwendung realer Fallstudien und Szenarien zur Veranschaulichung regulatorischer Prinzipien und deren praktischer Anwendung.\n• Peer-to-Peer Learning Networks: Etablierung von Lerngemeinschaften, in denen Erfahrungen und Best Practices zwischen Kollegen ausgetauscht werden.\n\n🔄 Adaptive Learning Pathways:\n• Personalized Learning Journeys: Entwicklung individueller Lernpfade basierend auf Rolle, Erfahrung und spezifischen Entwicklungsbedarfen.\n• Microlearning Modules: Aufbereitung komplexer regulatorischer Themen in kurze, leicht verdauliche Lerneinheiten für bessere Retention.\n• Just-in-Time Learning: Bereitstellung relevanter Lerninhalte genau dann, wenn sie für aktuelle Herausforderungen benötigt werden.\n• Progressive Skill Building: Stufenweiser Aufbau von Kompetenzen vom Grundverständnis bis zur Expertenebene.\n\n💡 Technologie-unterstützte Lernlösungen:\n• Virtual Reality Compliance Simulations: Einsatz von VR-Technologie zur Simulation komplexer regulatorischer Szenarien und Entscheidungssituationen.\n• AI-powered Learning Analytics: Nutzung künstlicher Intelligenz zur Analyse von Lernfortschritten und Optimierung der Lernerfahrung.\n• Mobile Learning Platforms: Entwicklung mobiler Lernlösungen für flexibles, ortsunabhängiges Lernen.\n• Interactive Digital Dashboards: Bereitstellung interaktiver Tools zur Visualisierung und Exploration regulatorischer Zusammenhänge.\n\n🎯 Nachhaltigkeits- und Transferstrategien:\n• Action Learning Projects: Integration von Lernaktivitäten in reale Arbeitsprojekte zur direkten Anwendung erworbener Kenntnisse.\n• Mentoring und Coaching Programme: Etablierung von Mentoring-Beziehungen zur kontinuierlichen Unterstützung und Entwicklung.\n• Communities of Practice: Aufbau dauerhafter Lerngemeinschaften zur kontinuierlichen Weiterentwicklung und Wissensaustausch.\n• Reflection und Feedback Cycles: Regelmäßige Reflexions- und Feedback-Zyklen zur Verstärkung des Gelernten und kontinuierlichen Verbesserung."
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
