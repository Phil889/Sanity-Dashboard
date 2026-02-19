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
    console.log('Updating NIS2 Important Entities page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-important-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-important-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterscheidet sich die strategische Positionierung als Important Entity unter NIS2 von Essential Entities und welche Chancen eröffnet dies für mittelständische Unternehmen?",
        answer: "Die Klassifikation als Important Entity unter NIS2 bietet mittelständischen Unternehmen eine einzigartige strategische Position – sie sind groß genug, um von robuster Cybersicherheit zu profitieren, aber klein genug, um proportionale und kosteneffiziente Lösungen zu implementieren. Diese Position ermöglicht es der C-Suite, Cybersicherheit als Wettbewerbsvorteil zu nutzen, ohne die operative Flexibilität zu beeinträchtigen.\n\n🎯 Strategische Vorteile der Important Entity Position:\n• Proportionale Compliance-Anforderungen: Im Gegensatz zu Essential Entities unterliegen Important Entities weniger strengen Aufsichtsmaßnahmen, was mehr Flexibilität bei der Umsetzung und geringere regulatorische Belastungen bedeutet.\n• Kosteneffiziente Cybersicherheit: Möglichkeit zur Implementierung skalierbarer Sicherheitslösungen, die mit dem Unternehmenswachstum mitwachsen können, ohne überdimensionierte Investitionen zu erfordern.\n• Marktdifferenzierung durch Sicherheit: Ability to position the company as security-conscious without the heavyweight compliance burden of Essential Entities, appealing to security-minded customers and partners.\n• Agile Response-Fähigkeiten: Kleinere, wendigere Organisationsstrukturen ermöglichen schnellere Anpassungen an neue Bedrohungen und regulatorische Änderungen.\n\n💼 Geschäftliche Chancen für Important Entities:\n• Premium-Partnerschaften: Zugang zu Geschäftspartnerschaften mit größeren Organisationen, die Cybersicherheits-Compliance als Voraussetzung haben.\n• Neue Marktsegmente: Erschließung von Geschäftsmöglichkeiten in sicherheitskritischen Bereichen, die kleineren Unternehmen ohne entsprechende Compliance verschlossen bleiben.\n• Investoren-Attraktivität: Erhöhte Attraktivität für Investoren, die zunehmend Cybersicherheits-Readiness als Bewertungskriterium heranziehen.\n• Operative Effizienz: Implementierung von Cybersicherheitsmaßnahmen, die gleichzeitig operative Prozesse verbessern und digitale Transformation unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kostenoptimierten Ansätze empfiehlt ADVISORI für Important Entities, um NIS2-Compliance zu erreichen ohne das Budget zu sprengen oder die Agilität zu beeinträchtigen?",
        answer: "ADVISORI entwickelt für Important Entities maßgeschneiderte, ressourcenschonende NIS2-Compliance-Strategien, die maximale Sicherheit bei minimalen Kosten und operativen Störungen gewährleisten. Unser Ansatz fokussiert auf intelligente Automatisierung, cloudbasierte Lösungen und risikobasierte Priorisierung, um auch mit begrenzten Budgets robuste Cybersicherheit zu erreichen.\n\n💰 Kostenoptimierte Compliance-Strategien:\n• Cloud-First Security Architecture: Nutzung kostengünstiger Cloud-basierter Sicherheitsdienste anstelle teurer On-Premise-Infrastrukturen, wodurch Capex zu Opex wird und Skalierbarkeit ermöglicht wird.\n• Automated Compliance Monitoring: Implementierung automatisierter Überwachungssysteme, die manuelle Compliance-Aufwände um 60-70% reduzieren und gleichzeitig kontinuierliche Compliance gewährleisten.\n• Risk-Based Investment Prioritization: Fokussierung der Sicherheitsinvestitionen auf die kritischsten Assets und höchsten Risiken, wodurch maximaler Schutz mit minimalem Budget erreicht wird.\n• Shared Security Services: Nutzung von Managed Security Services und geteilten Threat Intelligence-Plattformen, die Enterprise-Grade-Sicherheit zu Bruchteilskosten bieten.\n\n🚀 Agilitätserhaltende Implementierungsansätze:\n• Phased Rollout Strategy: Schrittweise Implementierung von Sicherheitsmaßnahmen, die Geschäftsprozesse nicht unterbricht und kontinuierliche Optimierung ermöglicht.\n• Integration mit bestehenden Systemen: Maximale Nutzung vorhandener IT-Infrastruktur und -Prozesse, um Disruption zu minimieren und Lernkurven zu reduzieren.\n• Employee-Centric Security Design: Entwicklung von Sicherheitsmaßnahmen, die Mitarbeiterproduktivität unterstützen anstatt zu behindern, wodurch Akzeptanz und Effektivität steigen.\n• Scalable Architecture Planning: Aufbau flexibler Sicherheitsarchitekturen, die mit dem Unternehmenswachstum mitwachsen können, ohne komplette Neuinvestitionen zu erfordern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Important Entities ihre NIS2-Compliance als strategischen Enabler für digitale Transformation und Geschäftswachstum nutzen, anstatt sie nur als regulatorische Belastung zu sehen?",
        answer: "ADVISORI unterstützt Important Entities dabei, NIS2-Compliance als Katalysator für digitale Innovation und nachhaltiges Wachstum zu positionieren. Durch strategische Integration von Cybersicherheitsmaßnahmen in Geschäftsprozesse entstehen Synergien, die sowohl Compliance gewährleisten als auch neue Geschäftsmöglichkeiten schaffen und operative Exzellenz fördern.\n\n🌟 Transformation von Compliance zu Business Enablement:\n• Digital Trust Foundation: Robuste Cybersicherheit schafft das Vertrauen, das für ambitionierte Digitalisierungsprojekte erforderlich ist – von IoT-Integration bis hin zu datengetriebenen Geschäftsmodellen.\n• Process Optimization durch Security: Implementierung von Sicherheitsmaßnahmen, die gleichzeitig Geschäftsprozesse standardisieren, automatisieren und optimieren, wodurch operative Effizienz gesteigert wird.\n• Innovation Security Framework: Entwicklung von Cybersicherheitsrahmen, die Innovation fördern anstatt zu behindern, indem sie sichere Experimentierräume für neue Technologien schaffen.\n• Customer Confidence Builder: Nachgewiesene Cybersicherheits-Compliance wird zum Verkaufsargument und Vertrauensbildner bei sicherheitsbewussten Kunden und Partnern.\n\n💡 Konkrete Wachstumschancen durch NIS2-Compliance:\n• New Market Access: Compliance öffnet Türen zu Märkten und Kunden, die strenge Cybersicherheitsanforderungen haben, wodurch neue Revenue-Streams entstehen.\n• Premium Service Positioning: Möglichkeit zur Positionierung als Premium-Anbieter mit überlegener Cybersicherheit, was höhere Margen und Kundenbindung ermöglicht.\n• Strategic Partnership Opportunities: Zugang zu strategischen Partnerschaften mit größeren Organisationen, die Cybersicherheits-Compliance als Voraussetzung haben.\n• Investment Readiness: Cybersicherheits-Compliance erhöht die Attraktivität für Investoren und erleichtert Finanzierungsrunden oder Exit-Strategien.\n• Operational Intelligence: Implementierung von Cybersicherheits-Monitoring schafft wertvolle Dateneinblicke in Geschäftsprozesse und Kundenverhalten, die für strategische Entscheidungen genutzt werden können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche spezifischen Governance-Strukturen und Entscheidungsprozesse empfiehlt ADVISORI für Important Entities, um NIS2-Compliance effizient zu steuern und langfristig aufrechtzuerhalten?",
        answer: "ADVISORI entwickelt für Important Entities schlanke, aber effektive Governance-Strukturen, die NIS2-Compliance ohne bureaucratic overhead gewährleisten. Unser Ansatz kombiniert agile Entscheidungsprozesse mit robusten Kontrollmechanismen, um sowohl regulatorische Anforderungen zu erfüllen als auch geschäftliche Flexibilität zu erhalten.\n\n🏛️ Optimierte Governance-Architektur für Important Entities:\n• Executive Cyber Committee: Etablierung eines schlanken, entscheidungsfähigen Gremiums auf C-Level, das quartalsweise strategische Cybersicherheitsentscheidungen trifft und dabei geschäftliche und compliance-relevante Aspekte integriert.\n• Distributed Security Ownership: Verteilung von Cybersicherheitsverantwortlichkeiten auf verschiedene Geschäftsbereiche, um Expertise zu nutzen und Ownership zu schaffen, ohne eine schwerfällige zentrale Bürokratie aufzubauen.\n• Risk-Based Decision Framework: Implementierung datengetriebener Entscheidungsprozesse, die es ermöglichen, Cybersicherheitsinvestitionen direkt mit Geschäftsrisiken und -chancen zu verknüpfen.\n• Agile Compliance Monitoring: Aufbau kontinuierlicher Überwachungssysteme, die proaktive Anpassungen ermöglichen, bevor Compliance-Probleme entstehen.\n\n⚡ Effiziente Steuerungs- und Kontrollmechanismen:\n• Automated Compliance Dashboards: Bereitstellung von Echtzeit-Einblicken in den Compliance-Status für die Geschäftsleitung, wodurch datenbasierte Entscheidungen ermöglicht und administrative Aufwände minimiert werden.\n• Integrated Business-Security Planning: Integration von Cybersicherheitsplanung in reguläre Geschäftsplanungsprozesse, um Synergien zu schaffen und doppelte Arbeit zu vermeiden.\n• Stakeholder Communication Framework: Entwicklung klarer Kommunikationsprozesse zwischen verschiedenen Stakeholdern (IT, Legal, Operations, Management), um effiziente Entscheidungsfindung zu gewährleisten.\n• Continuous Improvement Loops: Etablierung regelmäßiger Review- und Optimierungszyklen, die es ermöglichen, Governance-Strukturen kontinuierlich an sich ändernde Geschäfts- und Bedrohungslagen anzupassen."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
