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
    console.log('Updating CRA Cyber Resilience Act page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickeln wir eine CRA-konforme Produktarchitektur, die sowohl aktuelle Anforderungen erfüllt als auch zukunftsfähig für kommende Cybersicherheits-Entwicklungen ist?",
        answer: "Die Entwicklung einer zukunftsfähigen, CRA-konformen Produktarchitektur erfordert eine strategische Herangehensweise, die über die Erfüllung aktueller Mindestanforderungen hinausgeht. Für die Führungsebene bedeutet dies eine fundamentale Neuausrichtung der Produktentwicklungsphilosophie hin zu einem adaptiven, sicherheitszentrierten Design-Thinking. Eine vorausschauende Architektur kann nicht nur heutige CRA-Anforderungen erfüllen, sondern auch als Plattform für kontinuierliche Innovation und Marktführerschaft dienen.\n\n🏗️ Strategische Architektur-Prinzipien für CRA-Excellence:\n• Security-First-Architecture: Entwicklung von Grundarchitekturen, die Cybersicherheit als primäres Design-Prinzip verankern und nicht als nachträgliche Ergänzung betrachten.\n• Adaptive Security Frameworks: Implementation modularer Sicherheitsarchitekturen, die flexibel auf neue Bedrohungen und regulatorische Entwicklungen reagieren können.\n• Zero-Trust-by-Design: Integration von Zero-Trust-Prinzipien in alle Produktkomponenten für maximale Resilienz gegen moderne Cyberbedrohungen.\n• Continuous Security Evolution: Aufbau von Produktarchitekturen, die kontinuierliche Sicherheitsupdates und -verbesserungen ohne Funktionsbeeinträchtigung ermöglichen.\n\n🚀 ADVISORIs Future-Ready Architecture Framework:\n• Anticipatory Compliance Design: Entwicklung von Architektur-Frameworks, die nicht nur aktuelle CRA-Anforderungen erfüllen, sondern auch wahrscheinliche zukünftige Regulierungsentwicklungen antizipieren.\n• Scalable Security Infrastructure: Aufbau skalierbarer Sicherheitsinfrastrukturen, die mit Produktwachstum und sich ändernden Anforderungen mitwachsen können.\n• Innovation-enablee Security Platforms: Gestaltung von Sicherheitsarchitekturen, die als Enabler für neue Produktfeatures und Geschäftsmodelle fungieren, statt als Limitierung.\n• Ecosystem-ready Architecture: Entwicklung offener, standardbasierter Architekturen, die nahtlose Integration mit Partner-Ökosystemen und Third-Party-Services ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt Künstliche Intelligenz bei der CRA-Compliance und wie können wir AI strategisch für automatisierte Cybersicherheit und Compliance-Monitoring einsetzen?",
        answer: "Künstliche Intelligenz transformiert fundamentale Ansätze zur CRA-Compliance und bietet unprecedented Möglichkeiten für automatisierte, intelligente Cybersicherheit. Für strategisch denkende Führungskräfte bedeutet dies die Chance, AI nicht nur als Compliance-Tool zu nutzen, sondern als strategischen Enabler für kontinuierliche Sicherheitsverbesserung und Wettbewerbsvorteile. Der intelligente Einsatz von AI kann CRA-Compliance von einer reaktiven zu einer proaktiven, selbstlernenden Capability transformieren.\n\n🤖 AI-getriebene CRA-Compliance-Transformation:\n• Predictive Threat Intelligence: Einsatz von Machine Learning für die Vorhersage und präventive Abwehr neuer Cyberbedrohungen basierend auf globalen Threat-Daten und Produktverhalten.\n• Automated Compliance Monitoring: Implementation intelligenter Überwachungssysteme, die kontinuierlich CRA-Konformität prüfen und automatisch auf Abweichungen reagieren.\n• Adaptive Security Response: Entwicklung selbstlernender Sicherheitssysteme, die sich automatisch an neue Bedrohungslandschaften anpassen und optimieren.\n• Intelligent Vulnerability Management: Nutzung von AI für die priorisierte Identifikation und Behebung von Sicherheitslücken basierend auf Risikobewertung und Business-Impact.\n\n🧠 ADVISORIs AI-Powered Security Strategy:\n• Strategic AI Architecture: Entwicklung umfassender AI-Strategien, die Cybersicherheit mit Geschäftsintelligenz verbinden und kontinuierliche Optimierung ermöglichen.\n• Federated Learning für Security: Implementation verteilter Lernansätze, die Sicherheitsintelligenz über Produktportfolios hinweg teilen, ohne sensitive Daten zu kompromittieren.\n• AI-driven Compliance Automation: Aufbau intelligenter Compliance-Systeme, die nicht nur überwachen, sondern auch proaktiv Verbesserungsvorschläge generieren und implementieren.\n• Human-AI Collaboration Frameworks: Entwicklung optimaler Zusammenarbeit zwischen menschlicher Expertise und AI-Kapazitäten für maximale Sicherheitseffektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir CRA-Compliance nutzen, um Kundenvertrauen zu stärken und neue Marktpositionen in sicherheitskritischen Branchen zu erschließen?",
        answer: "CRA-Compliance bietet eine einzigartige Gelegenheit, Cybersicherheit als strategischen Wertschöpfungs- und Vertrauensbildner zu nutzen, der neue Marktchancen in sicherheitskritischen Industrien erschließt. Für die Unternehmensführung bedeutet dies die Transformation von Compliance-Ausgaben in Marketing- und Vertriebsvorteile mit messbarem Business-Impact. Vertrauen wird in der digitalen Ökonomie zu einem der wertvollsten Competitive Assets.\n\n🔒 Trust-basierte Marktpositionierung durch CRA-Excellence:\n• Premium Security Branding: Entwicklung einer Markenidentität, die CRA-Compliance als Qualitäts- und Vertrauenssiegel positioniert und Premium-Pricing rechtfertigt.\n• Security-as-a-Differentiator: Nutzung überlegener Cybersicherheit als primärer Differenzierungsfaktor in kommunitierten Märkten und bei Ausschreibungen.\n• Trust-driven Customer Acquisition: Entwicklung gezielter Akquisitionsstrategien für sicherheitsbewusste Kunden und Branchen mit hohen Compliance-Anforderungen.\n• Regulatory Leadership Positioning: Etablierung als Thought Leader und Standardsetter in Cybersicherheit für erhöhte Marktwahrnehmung und Glaubwürdigkeit.\n\n🎯 ADVISORIs Trust-centric Market Strategy:\n• Security-first Go-to-Market: Entwicklung von Vertriebs- und Marketingstrategien, die Cybersicherheit als Hauptverkaufsargument und Kundennutzen positionieren.\n• Industry-specific Trust Building: Maßgeschneiderte Ansätze für verschiedene sicherheitskritische Branchen (Gesundheitswesen, Finanzdienstleistungen, kritische Infrastruktur).\n• Transparent Security Communication: Aufbau transparenter Kommunikationsstrategien, die Kunden und Stakeholdern Sicherheitsmaßnahmen und -erfolge verständlich vermitteln.\n• Partnership Ecosystem Development: Schaffung strategischer Allianzen mit anderen vertrauenswürdigen Anbietern für erweiterte Marktreichweite und Glaubwürdigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche strategischen Partnerships und Ecosystem-Strategien sind erforderlich, um CRA-Compliance kosteneffizient zu skalieren und Marktvorteile zu maximieren?",
        answer: "Die kosteneffiziente Skalierung von CRA-Compliance erfordert strategische Partnerships und Ecosystem-Ansätze, die Ressourcen optimieren und gleichzeitig Marktvorteile maximieren. Für visionäre Führungskräfte bedeutet dies die Entwicklung von Win-Win-Partnerschaften, die Compliance-Kosten reduzieren, Expertise erweitern und neue Geschäftsmöglichkeiten erschließen. Ein durchdachtes Ecosystem kann aus Compliance-Herausforderungen strategische Chancen schaffen.\n\n🤝 Strategic Partnership Framework für CRA-Excellence:\n• Technology Alliance Partnerships: Strategische Allianzen mit Cybersicherheits-Technologieanbietern für Zugang zu modernsten Sicherheitslösungen und geteilte F&E-Kosten.\n• Compliance-as-a-Service Consortiums: Bildung von Branchenkonsortien zur gemeinsamen Entwicklung und Nutzung von CRA-Compliance-Infrastrukturen und -Expertise.\n• Supply Chain Security Partnerships: Aufbau vertrauensvoller Partnerschaften mit Schlüssellieferanten für gemeinsame Sicherheitsstandards und geteilte Compliance-Kosten.\n• Academic Research Collaborations: Strategische Partnerschaften mit Universitäten und Forschungseinrichtungen für Innovation in Cybersicherheit und frühzeitigen Zugang zu neuen Technologien.\n\n🌐 ADVISORIs Ecosystem Strategy für skalierbare CRA-Compliance:\n• Platform Ecosystem Development: Aufbau digitaler Plattformen, die Partner und Kunden in ein gemeinsames CRA-Compliance-Ecosystem integrieren und Netzwerkeffekte schaffen.\n• Shared Security Infrastructure: Entwicklung gemeinsam genutzter Sicherheitsinfrastrukturen mit Partnern für Kostenreduzierung und Skalierungsvorteile.\n• Innovation Hub Strategy: Etablierung von Innovation-Hubs, die interne Teams mit externen Partnern für beschleunigte CRA-Innovation und Best-Practice-Entwicklung verbinden.\n• Strategic M&A for Compliance: Gezielte Akquisitions- und Investitionsstrategien für den Aufbau von CRA-Compliance-Kapazitäten und Marktpositionen."
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
