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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI Unternehmen bei der Entwicklung einer zukunftssicheren BSI IT-Grundschutz Strategie für Remote Work und hybride Arbeitsmodelle?",
        answer: "Die Transformation zu flexiblen Arbeitsmodellen erfordert eine grundlegende Neuausrichtung traditioneller Sicherheitskonzepte. ADVISORI entwickelt moderne IT-Grundschutz Implementierungen, die die Sicherheit dezentraler Arbeitsumgebungen gewährleisten und gleichzeitig die Produktivität und Flexibilität moderner Belegschaften unterstützen.\n\n🏠 Future-of-Work Security Architecture:\n• Zero-Trust-Network-Access: Implementierung von vertrauensfreien Netzwerkzugängen, die IT-Grundschutz Prinzipien in Cloud- und Remote-Umgebungen umsetzen.\n• Endpoint-Protection-Excellence: Umfassende Absicherung aller Endgeräte unabhängig von deren Standort oder Netzwerkanbindung.\n• Identity-Centric-Security: Robuste Identitäts- und Zugriffsmanagement-Systeme als Kernkomponente der IT-Grundschutz Architektur.\n• Cloud-Workload-Protection: Sichere Integration von Cloud-Services und SaaS-Anwendungen in die Unternehmens-IT-Landschaft.\n\n🔄 ADVISORI's Hybrid-Work-Security-Strategy:\n• Adaptive-Policy-Framework: Dynamische Sicherheitsrichtlinien, die sich automatisch an wechselnde Arbeitsumgebungen und Bedrohungslagen anpassen.\n• User-Experience-Optimization: Balance zwischen maximaler Sicherheit und minimaler Benutzerbeeinträchtigung für optimale Adoption.\n• Continuous-Monitoring: Echtzeitüberwachung und -analyse von Sicherheitsereignissen in verteilten Arbeitsumgebungen.\n• Digital-Workplace-Integration: Nahtlose Integration von Sicherheitsmaßnahmen in moderne Collaboration-Tools und Workflows.\n\n💼 Strategische Vorteile für C-Level:\n• Talent Acquisition: Attraktive, sichere Remote-Work-Möglichkeiten als Wettbewerbsvorteil im Kampf um Top-Talente.\n• Operational Resilience: Aufrechterhaltung der Geschäftstätigkeit unabhängig von physischen Standortbeschränkungen.\n• Global Scalability: Sichere Expansion ohne geografische Limitierungen durch robuste Remote-Security-Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt ADVISORI bei der Integration von BSI IT-Grundschutz in Supply Chain Security und Third-Party Risk Management für vernetzte Geschäftsökosysteme?",
        answer: "Moderne Geschäftsökosysteme sind hochgradig vernetzt und voneinander abhängig, was erweiterte Sicherheitsansätze erfordert. ADVISORI entwickelt umfassende Supply Chain Security Strategien, die BSI IT-Grundschutz Prinzipien auf das gesamte Partnernetzwerk ausweiten und dabei sowohl Risiken minimieren als auch Geschäftsinnovationen ermöglichen.\n\n🌐 Extended Enterprise Security:\n• Third-Party-Risk-Assessment: Systematische Bewertung der Cybersecurity-Posture aller Geschäftspartner und Lieferanten nach IT-Grundschutz Kriterien.\n• Supply-Chain-Mapping: Vollständige Transparenz über alle digitalen Abhängigkeiten und Datenflüsse im Geschäftsökosystem.\n• Vendor-Security-Standards: Etablierung einheitlicher Sicherheitsanforderungen für alle Drittanbieter basierend auf IT-Grundschutz Prinzipien.\n• Continuous-Monitoring: Permanente Überwachung der Sicherheitslage im erweiterten Unternehmensnetzwerk.\n\n🎯 ADVISORI's Ecosystem-Security-Approach:\n• Risk-Tiering-Strategy: Kategorisierung von Partnern basierend auf Kritikalität und Risikoexposition für maßgeschneiderte Sicherheitsanforderungen.\n• Collaborative-Security-Framework: Entwicklung gemeinsamer Sicherheitsstandards und -prozesse mit strategischen Partnern.\n• Incident-Response-Coordination: Orchestrierte Reaktion auf Sicherheitsvorfälle über Unternehmensgrenzen hinweg.\n• Digital-Trust-Platform: Aufbau vertrauensvoller digitaler Beziehungen durch nachweisbare Sicherheitsexzellenz.\n\n📈 Business Value durch Extended Security:\n• Partner Confidence: Stärkung der Geschäftsbeziehungen durch demonstrierte Cybersecurity-Leadership.\n• Market Access: Qualifizierung für komplexe B2B-Geschäfte mit hohen Sicherheitsanforderungen.\n• Innovation Enablement: Sichere Grundlage für digitale Partnerschaften und Ecosystem-Innovation.\n• Regulatory Compliance: Erfüllung von Supply Chain Security Anforderungen (NIS2, DORA, etc.)."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie entwickelt ADVISORI eine datengetriebene BSI IT-Grundschutz Strategie, die Security Analytics und Threat Intelligence für proaktive Risikominimierung nutzt?",
        answer: "Moderne Cybersecurity erfordert einen datengestützten Ansatz, der über reaktive Maßnahmen hinausgeht. ADVISORI integriert Advanced Analytics und Threat Intelligence in BSI IT-Grundschutz Implementierungen, um C-Level-Führungskräften präzise, actionable Insights für strategische Sicherheitsentscheidungen zu liefern.\n\n📊 Data-Driven Security Intelligence:\n• Predictive-Risk-Modeling: Nutzung von Machine Learning für die Vorhersage und Prävention von Sicherheitsbedrohungen.\n• Behavioral-Analytics: Erkennung anomaler Aktivitäten durch kontinuierliche Analyse von Nutzer- und Systemverhalten.\n• Threat-Intelligence-Integration: Einbindung externer Bedrohungsdaten für kontextuelle Risikobewertung.\n• Security-KPI-Dashboards: C-Suite-gerechte Visualisierung von Sicherheitsmetriken und Trend-Analysen.\n\n🔍 ADVISORI's Intelligence-Led Security:\n• Threat-Landscape-Analysis: Kontinuierliche Bewertung der spezifischen Bedrohungslage für Ihre Branche und Region.\n• Risk-Quantification: Präzise finanzielle Bewertung von Cyber-Risiken für fundierte Investitionsentscheidungen.\n• Automated-Response-Capabilities: Intelligente Automatisierung für schnelle Reaktion auf erkannte Bedrohungen.\n• Strategic-Security-Planning: Datenbasierte Entwicklung mehrjähriger Sicherheitsstrategien und Budget-Allokationen.\n\n🎯 Executive Decision Support:\n• Real-Time-Risk-Visibility: Kontinuierliche Übersicht über die aktuelle Bedrohungslage und Sicherheitsposture.\n• Investment-ROI-Analysis: Quantifizierung der Wirksamkeit von Sicherheitsinvestitionen und Maßnahmen.\n• Competitive-Intelligence: Benchmarking der eigenen Sicherheitsstandards gegen Branchenführer.\n• Board-Level-Reporting: Professionelle Aufbereitung komplexer Sicherheitsdaten für strategische Entscheidungsträger."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie stellt ADVISORI sicher, dass BSI IT-Grundschutz Implementierungen die digitale Customer Experience verbessern und gleichzeitig höchste Datenschutzstandards gewährleisten?",
        answer: "Exzellente Customer Experience und robuste Cybersecurity sind keine Gegensätze, sondern strategische Enabler für nachhaltigen Geschäftserfolg. ADVISORI entwickelt IT-Grundschutz Architekturen, die Kundendaten optimal schützen und gleichzeitig nahtlose, vertrauensvolle digitale Erlebnisse schaffen, die Kundenbindung und Geschäftswachstum fördern.\n\n🎨 Security-Enhanced Customer Experience:\n• Privacy-by-Design: Integration von Datenschutz- und Sicherheitsprinzipien bereits in die Konzeption neuer digitaler Services.\n• Frictionless-Security: Entwicklung von Sicherheitsmaßnahmen, die im Hintergrund arbeiten und die User Journey nicht beeinträchtigen.\n• Trust-Building-Mechanisms: Transparente Kommunikation von Sicherheitsmaßnahmen als Vertrauensbildungsmaßnahme gegenüber Kunden.\n• Personalized-Security: Adaptive Sicherheitskontrollen, die sich an individuelle Kundenprofile und Risikokontext anpassen.\n\n🔐 ADVISORI's Customer-Centric Security Design:\n• Data-Minimization-Strategies: Optimierung der Datenerhebung und -verarbeitung für maximale Effizienz bei minimaler Exposition.\n• Consent-Management-Excellence: Moderne Lösungen für transparente und benutzerfreundliche Einwilligungsmanagement-Prozesse.\n• Security-UX-Integration: Nahtlose Integration von Sicherheitsfeatures in die Customer Journey ohne Benutzererfahrungs-Verluste.\n• Incident-Communication: Professionelle Kommunikationsstrategien für den Fall von Sicherheitsvorfällen zum Erhalt des Kundenvertrauens.\n\n📈 Business Impact durch Security Excellence:\n• Customer Trust Premium: Höhere Kundenloyalität und Bereitschaft zur Datenteilung durch nachweisbare Sicherheitsstandards.\n• Competitive Differentiation: Datenschutz und Sicherheit als USP in datensensitiven Märkten und Branchen.\n• Regulatory Confidence: Proaktive Compliance mit DSGVO und anderen Datenschutzbestimmungen als Marktvorsprung.\n• Digital Innovation Enablement: Vertrauensvolle Basis für datenintensive Geschäftsmodelle und KI-basierte Services."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
