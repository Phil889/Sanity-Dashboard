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
    console.log('Updating EU AI Act Documentation Requirements page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-documentation-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-documentation-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir die technische Dokumentation für unsere Hochrisiko-KI-Systeme so gestalten, dass sie nicht nur EU AI Act-konform ist, sondern auch strategischen Geschäftswert schafft?",
        answer: "Die technische Dokumentation für Hochrisiko-KI-Systeme sollte über die reine Compliance-Erfüllung hinausgehen und als strategisches Instrument für Qualitätsverbesserung, Risikomanagement und Innovationsbeschleunigung konzipiert werden. Eine durchdachte Dokumentationsstrategie kann erhebliche operative und strategische Vorteile generieren.\n\n🎯 Strategische Prinzipien wertschöpfender KI-Dokumentation:\n• Performance-Optimierung: Systematische Dokumentation von Leistungsmetriken und Systemverhalten ermöglicht kontinuierliche Optimierung und Effizienzsteigerung.\n• Knowledge Management: Umfassende Dokumentation wird zur strategischen Wissensbasis für beschleunigte Entwicklung zukünftiger KI-Systeme und Vermeidung wiederholter Fehler.\n• Stakeholder Transparency: Transparente, verständliche Dokumentation schafft Vertrauen bei Kunden, Partnern und Regulatoren und erleichtert Geschäftsabschlüsse.\n• Risk Intelligence: Detaillierte Risikodokumentation ermöglicht proaktive Risikominimierung und fundierte strategische Entscheidungen.\n\n📈 ADVISORIs business-orientierter Dokumentationsansatz:\n• Value-Driven Documentation Design: Entwicklung von Dokumentationsstrukturen, die explizit auf Geschäftswertgenerierung ausgelegt sind und strategische Erkenntnisse liefern.\n• Automated Business Intelligence: Integration der technischen Dokumentation in Business Intelligence-Systeme für automatisierte Insights und datengestützte Entscheidungsfindung.\n• Stakeholder-Optimized Communication: Aufbau modularer Dokumentation, die automatisch zielgruppenspezifische Darstellungen für verschiedene Stakeholder generiert.\n• Innovation Catalyst Framework: Nutzung der Dokumentationsinfrastruktur als Grundlage für beschleunigte KI-Innovation und systematische Best Practice-Entwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Herausforderungen entstehen bei der Dokumentation von Foundation Models und GPAI-Systemen und wie können wir diese effektiv bewältigen?",
        answer: "Die Dokumentation von Foundation Models und General Purpose AI-Systemen stellt besondere Herausforderungen dar, da diese Systeme komplex, dynamisch und vielseitig einsetzbar sind. Die EU AI Act-Anforderungen für GPAI erfordern einen spezialisierten Ansatz, der sowohl technische Komplexität als auch regulatorische Präzision bewältigt.\n\n🔬 Spezifische GPAI-Dokumentationsherausforderungen:\n• Systemische Risikobewertung: Dokumentation der weitreichenden, oft unvorhersehbaren Auswirkungen von Foundation Models auf verschiedene Anwendungsdomänen und Gesellschaftsbereiche.\n• Emergent Behavior Documentation: Erfassung und Dokumentation emergenter Fähigkeiten, die während des Trainings oder der Nutzung auftreten können.\n• Multi-Modal Complexity: Umfassende Dokumentation komplexer Multi-Modal-Systeme mit verschiedenen Input- und Output-Modalitäten.\n• Downstream Impact Assessment: Bewertung und Dokumentation der Auswirkungen auf nachgelagerte Anwendungen und deren spezifische Risikoprofile.\n• Continuous Evolution: Dokumentation sich kontinuierlich entwickelnder Systeme mit regelmäßigen Updates und Capability-Erweiterungen.\n\n🚀 ADVISORIs spezialisierter GPAI-Dokumentationsansatz:\n• Systematic Risk Architecture: Entwicklung strukturierter Frameworks zur systematischen Erfassung und Bewertung systemischer Risiken von Foundation Models.\n• Dynamic Documentation Systems: Implementierung adaptiver Dokumentationssysteme, die mit der Evolution der GPAI-Systeme mithalten und automatisch aktualisiert werden.\n• Multi-Stakeholder Documentation: Aufbau differenzierter Dokumentationsebenen für verschiedene Stakeholder von Entwicklern bis Regulatoren.\n• Predictive Risk Modeling: Integration fortschrittlicher Modellierungstechniken zur Vorhersage und Dokumentation potentieller zukünftiger Risiken und Capabilities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir sicherstellen, dass unsere Dokumentationsprozesse mit den sich schnell entwickelnden KI-Technologien und regulatorischen Anforderungen Schritt halten?",
        answer: "Die Synchronisation von Dokumentationsprozessen mit der rasanten Entwicklung von KI-Technologien und sich entwickelnden regulatorischen Anforderungen erfordert einen adaptiven, zukunftsorientierten Ansatz. Eine proaktive Dokumentationsstrategie muss gleichzeitig Flexibilität und Compliance-Sicherheit gewährleisten.\n\n⚡ Prinzipien adaptiver KI-Dokumentation:\n• Regulatory Intelligence: Kontinuierliche Überwachung regulatorischer Entwicklungen und proaktive Anpassung der Dokumentationsstandards an kommende Anforderungen.\n• Technology-Agnostic Architecture: Entwicklung flexibler Dokumentationsframeworks, die unabhängig von spezifischen KI-Technologien funktionieren und neue Entwicklungen integrieren können.\n• Automated Adaptation: Implementierung intelligenter Systeme, die automatisch neue technologische Entwicklungen erkennen und entsprechende Dokumentationsanforderungen vorschlagen.\n• Future-Proofing Design: Aufbau von Dokumentationssystemen mit inhärenter Flexibilität für unvorhergesehene technologische und regulatorische Entwicklungen.\n\n🔄 ADVISORIs evolutionärer Dokumentationsansatz:\n• Predictive Compliance Framework: Entwicklung vorausschauender Systeme, die zukünftige regulatorische Anforderungen antizipieren und präventive Dokumentationsmaßnahmen implementieren.\n• Agile Documentation Methodology: Implementierung agiler Prinzipien in der Dokumentationsentwicklung für schnelle Anpassung an neue Anforderungen und Technologien.\n• Ecosystem Integration: Aufbau von Dokumentationssystemen, die nahtlos in sich entwickelnde KI-Entwicklungs-Ecosysteme integriert werden können.\n• Continuous Learning Systems: Etablierung von Systemen, die aus Erfahrungen lernen und Dokumentationsprozesse kontinuierlich optimieren und anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt die Automatisierung bei der Erfüllung der EU AI Act Dokumentationsanforderungen und wie können wir diese strategisch implementieren?",
        answer: "Automatisierung ist entscheidend für die effiziente, konsistente und nachhaltige Erfüllung der EU AI Act Dokumentationsanforderungen. Eine strategische Automatisierungsstrategie kann nicht nur Compliance-Kosten reduzieren, sondern auch die Dokumentationsqualität verbessern und strategische Vorteile schaffen.\n\n🤖 Strategische Automatisierungsbereiche für AI-Dokumentation:\n• Automated Data Lineage: Automatische Verfolgung und Dokumentation von Datenflüssen, Transformationen und Qualitätsmetriken durch das gesamte KI-System.\n• Model Lifecycle Documentation: Automatisierte Erfassung aller Entwicklungs-, Training- und Deployment-Schritte mit vollständiger Versionskontrolle und Audit-Trails.\n• Performance Monitoring Integration: Kontinuierliche automatische Dokumentation von Systemleistung, Bias-Metriken und Qualitätsindikatoren.\n• Compliance Validation: Automatisierte Überprüfung der Dokumentationsvollständigkeit gegen aktuelle EU AI Act Anforderungen mit Alert-Systemen.\n• Risk Assessment Automation: Intelligente Systeme zur kontinuierlichen Risikobewertung und automatischen Aktualisierung der Risikodokumentation.\n\n🎯 ADVISORIs automatisierungsorientierte Implementierungsstrategie:\n• AI-Powered Documentation: Einsatz fortschrittlicher KI-Technologien zur intelligenten Generierung, Aktualisierung und Qualitätssicherung von Dokumentation.\n• Pipeline Integration: Nahtlose Integration automatisierter Dokumentation in bestehende DevOps- und MLOps-Pipelines für kontinuierliche, integrierte Compliance.\n• Intelligent Templates: Entwicklung adaptiver Dokumentationsvorlagen, die sich automatisch an spezifische KI-Systeme und deren Anforderungen anpassen.\n• Predictive Maintenance: Implementierung vorausschauender Systeme, die potentielle Dokumentationslücken oder -probleme frühzeitig identifizieren und Lösungen vorschlagen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
