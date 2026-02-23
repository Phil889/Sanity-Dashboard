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
    console.log('Updating EU AI Act Data Governance page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-data-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-data-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können wir unsere KI-Data Governance-Investitionen mit ESG-Zielen und nachhaltigen Geschäftspraktiken strategisch verknüpfen?",
        answer: "Die Integration von KI-Data Governance in ESG-Strategien (Environmental, Social, Governance) schafft erhebliche Synergien und Wettbewerbsvorteile. ADVISORI unterstützt Sie dabei, Governance-Initiativen strategisch mit Nachhaltigkeitszielen zu verknüpfen und dadurch sowohl regulatorische Excellence als auch ESG-Performance zu maximieren.\n\n🌱 Strategische ESG-Data Governance-Synergien:\n• Environmental Impact: Optimierung von Datenverarbeitungseffizienz zur Reduzierung des CO2-Fußabdrucks von KI-Systemen und Unterstützung von Klimazielen.\n• Social Responsibility: Verwendung von Data Governance für faire, inklusive KI-Systeme, die gesellschaftliche Verantwortung demonstrieren und Social Impact maximieren.\n• Governance Excellence: Positionierung von Data Governance als Beispiel für überlegene Unternehmensführung und Transparenz gegenüber Stakeholdern.\n• Investor Relations: Nutzung von Governance-Metriken zur Demonstration von ESG-Commitment und Attraktivität für nachhaltigkeitsorientierte Investoren.\n\n🎯 ADVISORIs ESG-integrierte Governance-Strategie:\n• Sustainability-by-Design: Entwicklung von Data Governance-Prozessen, die automatisch Nachhaltigkeitsziele unterstützen und ESG-Metriken verbessern.\n• Impact-Measurement: Aufbau von Systemen zur Quantifizierung des ESG-Impacts von Data Governance-Initiativen für Reporting und Optimierung.\n• Stakeholder-Engagement: Design von Governance-Kommunikationsstrategien, die ESG-Commitment demonstrieren und Stakeholder-Vertrauen stärken.\n• Sustainable Innovation: Integration von ESG-Kriterien in datengetriebene Innovationsprozesse für nachhaltige Geschäftsmodell-Entwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche strategischen Board-Level-Governance-Strukturen sollten wir etablieren, um KI-Data Governance effektiv zu steuern und zu überwachen?",
        answer: "Effektive Board-Level-Governance für KI-Data Management erfordert spezialisierte Strukturen, Kompetenzen und Prozesse, die strategische Oversight mit operativer Excellence verbinden. ADVISORI unterstützt bei der Entwicklung von Board-Governance-Frameworks, die Aufsichtsverantwortung erfüllen und gleichzeitig strategische Wertschöpfung maximieren.\n\n🏛️ Strategische Board-Governance-Komponenten:\n• Data Governance Committee: Etablierung spezialisierter Aufsichtsgremien mit angemessener Expertise und Entscheidungsbefugnis für strategische Data Governance-Fragen.\n• Executive Accountability: Klare Zuordnung von Data Governance-Verantwortlichkeiten auf C-Level-Ebene mit entsprechenden Incentive-Strukturen.\n• Risk Oversight: Integration von Data Governance-Risiken in Enterprise Risk Management und Board-level Risikobewertung.\n• Performance Monitoring: Aufbau systematischer Reporting-Strukturen für Board-level Überwachung von Governance-Performance und -Impact.\n\n🎯 ADVISORIs Board-Governance-Framework:\n• Governance-Struktur-Design: Entwicklung optimaler Organisationsstrukturen für effektive Board-level Data Governance-Oversight.\n• Kompetenz-Assessment: Bewertung und Entwicklung erforderlicher Board-Kompetenzen für effektive Data Governance-Aufsicht.\n• Reporting-Excellence: Aufbau prägnanter, aussagekräftiger Board-Reports für fundierte strategische Entscheidungen.\n• Compliance-Integration: Verknüpfung von Data Governance-Oversight mit bestehenden Compliance- und Audit-Strukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir unsere Data Governance-Expertise strategisch nutzen, um als Thought Leader in der Branche zu agieren und neue Partnerschaften zu entwickeln?",
        answer: "Thought Leadership in KI-Data Governance kann erhebliche strategische Vorteile schaffen, von Marktpositionierung über Talentakquisition bis hin zu Partnerschaften und Geschäftschancen. ADVISORI unterstützt Sie dabei, Governance-Expertise in marktführende Thought Leadership zu transformieren und dadurch nachhaltigen Wettbewerbsvorsprung zu schaffen.\n\n🌟 Strategische Thought Leadership-Dimensionen:\n• Industry Standard-Setting: Aktive Mitgestaltung von Branchenstandards und Best Practices für Data Governance in Ihrer Industrie.\n• Regulatory Influence: Proaktive Zusammenarbeit mit Regulierungsbehörden zur Mitgestaltung zukünftiger Governance-Anforderungen.\n• Innovation Showcase: Demonstration führender Governance-Praktiken als Referenz für Markt und Wettbewerber.\n• Partnership Magnetism: Nutzung von Thought Leadership zur Attraktion strategischer Partner und Kunden.\n\n🎯 ADVISORIs Thought Leadership-Strategie:\n• Content-Excellence: Entwicklung hochwertiger, innovativer Governance-Inhalte für verschiedene Stakeholder-Gruppen und Kommunikationskanäle.\n• Platform-Building: Aufbau und Nutzung verschiedener Plattformen für Thought Leadership-Kommunikation und Community-Building.\n• Industry-Engagement: Strategische Teilnahme an relevanten Branchenveranstaltungen, Gremien und Standardisierungsorganisationen.\n• Partnership-Development: Nutzung von Thought Leadership-Position für Entwicklung strategischer Allianzen und Geschäftschancen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche strategischen Exit-Strategien und Transformationsoptionen sollten wir für veraltete Data Governance-Systeme entwickeln, um kontinuierliche Innovation zu ermöglichen?",
        answer: "Strategisches Management von Legacy-Data Governance-Systemen ist entscheidend für kontinuierliche Innovation und Wettbewerbsfähigkeit. ADVISORI entwickelt systematische Transformations- und Exit-Strategien, die veraltete Systeme effizient ablösen und gleichzeitig Geschäftskontinuität und Compliance gewährleisten.\n\n🔄 Strategische Transformation-Dimensionen:\n• Legacy-Assessment: Systematische Bewertung bestehender Governance-Systeme bezüglich Zukunftsfähigkeit, Kosten und strategischer Relevanz.\n• Migration-Strategies: Entwicklung risikoarmer Übergangsstrategien für nahtlose Ablösung veralteter Systeme ohne Geschäftsunterbrechung.\n• Innovation-Enablement: Design neuer Governance-Architekturen, die zukünftige Innovation und Anpassungsfähigkeit maximieren.\n• Value-Preservation: Sicherstellung der Übertragung und Optimierung wertvollen Governance-Wissens und -Erfahrungen.\n\n🎯 ADVISORIs Transformations-Framework:\n• Strategic Roadmapping: Entwicklung langfristiger Transformationspläne mit klaren Meilensteinen und Erfolgskennzahlen.\n• Risk-Mitigation: Comprehensive Risikomanagement für Legacy-System-Ablösung mit Fokus auf Compliance-Kontinuität.\n• Change-Management: Systematische Begleitung organisatorischer Veränderungen für erfolgreiche Governance-Transformation.\n• Innovation-Integration: Nahtlose Integration neuer Governance-Technologien und -Methoden in bestehende Geschäftsprozesse."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
