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
    console.log('Updating NIS2 Business Continuity Management page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-business-continuity-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI ein NIS2-Business Continuity Management, das sowohl regulatorische Compliance als auch operative Kosteneffizienz maximiert?",
        answer: "Die Herausforderung für C-Level-Führungskräfte besteht darin, NIS2-Compliance zu erreichen ohne dabei operative Effizienz zu beeinträchtigen oder unnötige Kosten zu verursachen. ADVISORI entwickelt BCM-Strategien, die regulatorische Anforderungen nicht als Kostentreiber, sondern als Effizienz-Katalysator nutzen und dabei messbare betriebswirtschaftliche Vorteile generieren.\n\n💰 Cost-Optimized Compliance Excellence:\n• Synergistic Control Integration: Entwicklung von BCM-Maßnahmen, die gleichzeitig multiple regulatorische Anforderungen erfüllen und operative Redundanzen eliminieren.\n• Automation-First Approach: Maximaler Einsatz von Automatisierung zur Reduktion manueller Compliance-Aufwände und Minimierung menschlicher Fehlerquellen.\n• Risk-Based Resource Allocation: Intelligente Priorisierung von BCM-Investitionen basierend auf tatsächlichen Geschäftsrisiken anstatt generischer Compliance-Checklisten.\n• Shared Service Optimization: Entwicklung von BCM-Capabilities, die sowohl NIS2-Anforderungen erfüllen als auch andere Geschäftsfunktionen unterstützen.\n\n📊 ADVISORI's Value-Engineering BCM Ansatz:\n• Total Cost of Ownership Optimization: Ganzheitliche Betrachtung der BCM-Kosten über den gesamten Lebenszyklus zur Identifikation von Effizienzpotenzialen.\n• Performance-Based BCM Design: Entwicklung von BCM-Systemen, die kontinuierlich ihre eigene Effektivität messen und optimieren.\n• Vendor Consolidation Strategies: Strategische Partnerschaften und Technologie-Konsolidierung zur Reduktion von BCM-Komplexität und -Kosten.\n• Business Case Development: Entwicklung überzeugender Business Cases, die sowohl Compliance-Nutzen als auch operative Wertsteigerung quantifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie positioniert ADVISORI NIS2-Business Continuity Management als strategischen Enabler für grenzüberschreitende Expansion und internationale Markterschließung?",
        answer: "Für international tätige Unternehmen oder solche mit Expansionsplänen ist NIS2-konforme BCM-Expertise ein strategischer Wettbewerbsvorteil bei der Erschließung europäischer und globaler Märkte. ADVISORI entwickelt BCM-Frameworks, die nicht nur lokale Compliance sicherstellen, sondern auch als Plattform für internationale Geschäftsentwicklung dienen.\n\n🌍 Global Market Access through BCM Excellence:\n• Cross-Border Regulatory Harmonization: Entwicklung von BCM-Systemen, die sowohl NIS2-Anforderungen als auch andere internationale Cyber-Sicherheitsstandards erfüllen.\n• International Partnership Facilitation: BCM-Capabilities als Vertrauensgrundlage für strategische Partnerschaften und Joint Ventures in neuen Märkten.\n• Multi-Jurisdictional Crisis Management: Aufbau von BCM-Fähigkeiten für koordinierte Krisenreaktion über verschiedene Rechtssysteme und Zeitzonen hinweg.\n• Cultural Adaptability Framework: Integration kultureller und regulatorischer Besonderheiten verschiedener Märkte in die BCM-Strategie.\n\n🚀 ADVISORI's International Growth BCM Strategy:\n• Scalable Architecture Design: Entwicklung von BCM-Systemen, die sich schnell und kosteneffizient auf neue Märkte und Jurisdiktionen erweitern lassen.\n• Local Compliance Mapping: Systematische Analyse und Integration lokaler Cyber-Sicherheitsanforderungen in die übergeordnete BCM-Strategie.\n• Global Incident Response Coordination: Etablierung von 24/7-BCM-Capabilities, die verschiedene Zeitzonen und kulturelle Kontexte berücksichtigen.\n• Market Entry Risk Mitigation: Nutzung robuster BCM-Systeme zur Reduktion von Markteintrittrisiken und Beschleunigung internationaler Expansion."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie etabliert ADVISORI ein NIS2-Business Continuity Management, das auch disruptive Marktveränderungen und Geschäftsmodell-Transformation unterstützt?",
        answer: "In einer Ära beschleunigten Wandels müssen BCM-Systeme nicht nur Stabilität gewährleisten, sondern auch organisationale Transformation ermöglichen. ADVISORI entwickelt adaptive BCM-Frameworks, die sowohl als Sicherheitsnetz bei Disruption als auch als Enabler für strategische Neuausrichtung fungieren und dabei durchgehend NIS2-konform bleiben.\n\n🔄 Transformation-Ready BCM Architecture:\n• Business Model Resilience Design: Entwicklung von BCM-Systemen, die verschiedene Geschäftsmodell-Szenarien unterstützen und schnelle Pivots ermöglichen.\n• Innovation Sandbox Integration: Schaffung sicherer Umgebungen für Geschäftsmodell-Experimente ohne Gefährdung der Core-BCM-Funktionen.\n• Digital Transformation Support: BCM-Frameworks, die digitale Transformation beschleunigen anstatt sie zu behindern.\n• Market Disruption Preparedness: Entwicklung von Szenarien und Reaktionsplänen für verschiedene Disruption-Patterns in Ihrer Branche.\n\n⚡ ADVISORI's Adaptive Transformation BCM:\n• Modular BCM Architecture: Aufbau flexibler BCM-Komponenten, die sich schnell an neue Geschäftsanforderungen anpassen lassen.\n• Ecosystem Partnership Management: Integration von Partner-BCM-Systemen zur Unterstützung komplexer Wertschöpfungsnetzwerke.\n• Continuous Capability Evolution: Etablierung von Prozessen zur kontinuierlichen Weiterentwicklung von BCM-Fähigkeiten basierend auf Marktveränderungen.\n• Strategic Optionality Preservation: BCM-Design, das strategische Handlungsoptionen offen hält und zukünftige Anpassungen erleichtert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie transformiert ADVISORI NIS2-Business Continuity Management zu einem strategischen Leadership-Tool für nachhaltige Wettbewerbsvorteile und Marktführerschaft?",
        answer: "Die ultimative Zielsetzung für die C-Suite ist es, NIS2-BCM von einer regulatorischen Notwendigkeit zu einem strategischen Differenzierungsfaktor zu entwickeln, der nachhaltigen Wettbewerbsvorteile schafft und Marktführerschaft ermöglicht. ADVISORI positioniert BCM als integralen Bestandteil der Unternehmensstrategie und als Quelle nachhaltiger Wertschöpfung.\n\n👑 BCM als Strategic Leadership Instrument:\n• Market Leadership through Resilience: Positionierung Ihres Unternehmens als Resilienz-Marktführer, der auch in Krisenzeiten verlässlich liefert und dadurch Marktanteile gewinnt.\n• Industry Standard Setting: Nutzung überlegener BCM-Capabilities zur Definition neuer Industriestandards und Beeinflussung regulatorischer Entwicklungen.\n• Competitive Intelligence Integration: Einbindung von BCM-Erkenntnissen in die strategische Wettbewerbsanalyse und Marktpositionierung.\n• Thought Leadership Platform: Etablierung Ihres Unternehmens als Thought Leader im Bereich Cyber-Resilienz und Business Continuity.\n\n🏆 ADVISORI's Market Leadership BCM Framework:\n• Vision-Driven BCM Strategy: Entwicklung von BCM-Visionen, die über Compliance hinausgehen und Branchenführerschaft anstreben.\n• Innovation Catalyst Function: Positionierung von BCM als Katalysator für Geschäftsinnovation und neue Wertschöpfungsmodelle.\n• Stakeholder Value Maximization: Optimierung von BCM-Investitionen für maximalen Wert für alle Stakeholder-Gruppen.\n• Legacy Creation: Aufbau von BCM-Systemen, die als nachhaltige Grundlage für langfristige Unternehmensexzellenz dienen und organisationales Erbe schaffen."
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
