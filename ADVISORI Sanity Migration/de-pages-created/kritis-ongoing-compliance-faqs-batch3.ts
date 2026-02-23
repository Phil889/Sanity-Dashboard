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
    console.log('Updating KRITIS Ongoing Compliance page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-ongoing-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie kann KRITIS Ongoing Compliance zur Stärkung der Stakeholder-Beziehungen und zur Verbesserung unseres ESG-Profils beitragen?",
        answer: "KRITIS Ongoing Compliance ist ein mächtiger Hebel für die Stärkung von Stakeholder-Beziehungen und die Verbesserung des ESG-Profils (Environmental, Social, Governance). In einer Zeit, in der Nachhaltigkeit und verantwortungsvolle Unternehmensführung zunehmend geschäftskritisch werden, positioniert robuste Compliance-Exzellenz Ihr Unternehmen als vertrauenswürdigen Partner und verantwortungsbewussten Akteur im kritischen Infrastruktursegment.\n\n🤝 Stakeholder-Value durch Excellence in Compliance:\n• Investor Relations und Kapitalkosten: Institutionelle Investoren bewerten KRITIS-Compliance-Exzellenz zunehmend als Indikator für Managementqualität und langfristige Risikominimierung, was zu besseren Finanzierungskonditionen führen kann.\n• Kunden- und Partnervertrauen: Nachweisbare, kontinuierliche Compliance-Überwachung schafft Vertrauen bei Geschäftspartnern und kann zum entscheidenden Faktor bei Ausschreibungen und Vertragsverhandlungen werden.\n• Regulatorische Beziehungen: Proaktive Compliance-Kommunikation und transparente Reporting-Praktiken etablieren vertrauensvolle Beziehungen zu Aufsichtsbehörden.\n• Talent Attraction: Moderne Fachkräfte bevorzugen Arbeitgeber mit nachweislich verantwortungsvollen Geschäftspraktiken und robusten Compliance-Kulturen.\n\n🌱 ESG-Integration durch strategische Compliance:\n• Governance Excellence: KRITIS Compliance demonstriert höchste Standards in Corporate Governance und Risikomanagement, zentrale Elemente des G-Faktors im ESG-Rating.\n• Social Impact: Schutz kritischer Infrastrukturen trägt direkt zum gesellschaftlichen Wohlergehen bei und unterstützt soziale Nachhaltigkeit.\n• Environmental Stewardship: Effiziente, automatisierte Compliance-Systeme reduzieren Ressourcenverbrauch und unterstützen Umweltziele.\n• Sustainable Operations: Langfristige Compliance-Planung fördert nachhaltige Geschäftspraktiken und reduziert kurzfristige, ressourcenintensive Krisenreaktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche strategischen Partnerschaften und Technologie-Ökosysteme empfiehlt ADVISORI für ein zukunftsfähiges KRITIS Ongoing Compliance Management?",
        answer: "Ein zukunftsfähiges KRITIS Ongoing Compliance Management erfordert strategische Partnerschaften und ein intelligentes Technologie-Ökosystem, das Best-of-Breed-Lösungen integriert und gleichzeitig Vendor-Lock-in vermeidet. ADVISORI entwickelt und orchestriert solche Ökosysteme, die maximale Flexibilität, Innovation und Wertschöpfung ermöglichen.\n\n🔗 Strategische Partnership-Dimensionen:\n• Technology Partners: Enge Zusammenarbeit mit führenden Cybersecurity-, Cloud- und Analytics-Anbietern für privilegierten Zugang zu neuesten Technologien und Beta-Programmen.\n• Regulatory Bodies: Direkte Kommunikationskanäle zu BSI, BNetzA und anderen Regulierungsbehörden für frühzeitige Einblicke in regulatorische Entwicklungen.\n• Industry Consortiums: Mitgliedschaft in Branchenverbänden und Standardisierungsorganisationen für kollaborative Lösungsentwicklung und Best-Practice-Austausch.\n• Academic Institutions: Forschungspartnerschaften mit Universitäten für Zugang zu cutting-edge Forschung und Nachwuchstalenten.\n\n🛠️ Integriertes Technologie-Ökosystem:\n• Cloud-Native Platforms: Strategische Nutzung von Hyperscaler-Capabilities (AWS, Azure, GCP) für Skalierbarkeit und Innovation bei gleichzeitiger Multi-Cloud-Strategie zur Risikominimierung.\n• Open Source Integration: Strategischer Einsatz von Open Source-Komponenten für Flexibilität und Community-getriebene Innovation, ergänzt durch kommerzielle Support-Strukturen.\n• API-First Architecture: Konsequente API-Strategie ermöglicht nahtlose Integration neuer Technologien und verhindert Technologie-Silos.\n• Zero-Trust Security: Integration modernster Zero-Trust-Prinzipien in alle Compliance-Systeme für maximale Sicherheit ohne Kompromisse bei der Benutzerfreundlichkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir KRITIS Ongoing Compliance nutzen, um neue Geschäftsmöglichkeiten zu erschließen und Marktführerschaft in unserem Segment zu etablieren?",
        answer: "KRITIS Ongoing Compliance kann von einer defensiven Notwendigkeit zu einem offensiven Geschäftsinstrument transformiert werden, das neue Marktchancen erschließt und Marktführerschaft etabliert. Unternehmen, die Compliance-Exzellenz als strategischen Differentiator nutzen, können neue Geschäftsfelder entwickeln und ihre Marktposition signifikant stärken.\n\n🚀 Geschäftschancen durch Compliance-Excellence:\n• Compliance-as-a-Service: Monetarisierung Ihrer Compliance-Expertise durch Angebot von Beratungs- und Technologiedienstleistungen an andere Marktakteure.\n• Premium-Positioning: Nutzen Sie nachweisbare Compliance-Exzellenz für Premium-Preisgestaltung und bevorzugte Behandlung bei Ausschreibungen.\n• Strategic Partnerships: Compliance-Führerschaft qualifiziert für strategische Partnerschaften mit Technologieführern und internationalen Konzernen.\n• Market Expansion: Robuste Compliance-Infrastrukturen ermöglichen Expansion in neue Märkte und Jurisdiktionen mit minimalen zusätzlichen Investitionen.\n\n🏆 Marktführerschaft durch Compliance-Innovation:\n• Thought Leadership: Positionierung als Vordenker in Compliance-Innovation durch Veröffentlichungen, Konferenzen und Standardisierungsarbeit.\n• First-Mover Advantage: Frühzeitige Adoption neuer Compliance-Technologien schafft Wettbewerbsvorsprung und Marktdifferenzierung.\n• Innovation Partnerships: Zusammenarbeit mit Technologieanbietern bei der Entwicklung neuer Compliance-Lösungen für Joint-Go-to-Market-Strategien.\n• Ecosystem Leadership: Aufbau und Führung von Branchenkoalitionen und Standards-Initiativen etabliert Marktführerschaft und beeinflusst Branchenentwicklung.\n\n💡 ADVISORIs Ansatz zur Geschäftswertmaximierung:\n• Business Model Innovation: Entwicklung neuer Geschäftsmodelle, die Compliance-Capabilities als Kernwertversprechen integrieren.\n• Value Chain Integration: Strategische Integration von Compliance-Exzellenz in alle Aspekte der Wertschöpfungskette für umfassende Differenzierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt internationale Compliance-Harmonisierung in ADVISORIs KRITIS Ongoing Compliance-Strategie für global agierende Unternehmen?",
        answer: "Internationale Compliance-Harmonisierung ist ein kritischer Erfolgsfaktor für global agierende Unternehmen, die kritische Infrastrukturen betreiben oder unterstützen. ADVISORI entwickelt harmonisierte Compliance-Strategien, die lokale Anforderungen erfüllen und gleichzeitig globale Effizienz und Konsistenz gewährleisten, um internationale Geschäftstätigkeit zu erleichtern und Compliance-Kosten zu optimieren.\n\n🌍 Globale Compliance-Herausforderungen:\n• Regulatorische Fragmentierung: Verschiedene Jurisdiktionen haben unterschiedliche KRITIS-Definitionen, Anforderungen und Enforcement-Ansätze, die koordiniert werden müssen.\n• Cross-Border Data Flows: Compliance mit unterschiedlichen Datenschutz- und Lokalisierungsanforderungen bei gleichzeitiger Aufrechterhaltung operativer Effizienz.\n• Multi-Jurisdictional Reporting: Harmonisierung verschiedener Reporting-Anforderungen zur Vermeidung redundanter Prozesse und Systeme.\n• Cultural and Language Barriers: Anpassung von Compliance-Prozessen an lokale Geschäftskulturen und Sprachanforderungen.\n\n🔄 ADVISORIs Harmonisierungsansatz:\n• Global Framework Development: Entwicklung eines übergeordneten Compliance-Frameworks, das als gemeinsame Basis für alle Jurisdiktionen dient und lokale Anpassungen ermöglicht.\n• Standardized Technology Platforms: Implementierung globaler Technologieplattformen mit lokalen Anpassungsmodulen für konsistente Prozesse bei jurisdiktionaler Flexibilität.\n• Cross-Border Expertise Networks: Aufbau internationaler Expertennetzwerke für lokale Compliance-Unterstützung und globalen Wissenstransfer.\n• Regulatory Intelligence Hubs: Etablierung regionaler Intelligence-Zentren für kontinuierliche Überwachung lokaler Regulierungsentwicklungen und deren globale Integration.\n\n📈 Strategische Vorteile harmonisierter Compliance:\n• Operational Efficiency: Reduzierte Komplexität und Kosten durch standardisierte Prozesse und geteilte Ressourcen.\n• Risk Mitigation: Konsistente globale Standards minimieren Compliance-Risiken und erleichtern Risikomanagement.\n• Business Agility: Schnellere internationale Expansion durch vorbereite Compliance-Frameworks und bewährte Implementierungsprozesse."
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
