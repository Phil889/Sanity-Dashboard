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
    console.log('Updating Banklizenz Beantragen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-beantragen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-beantragen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die strategische Beantragung einer Banklizenz für die C-Suite mehr als nur eine regulatorische Formalität und wie positioniert ADVISORI dies als Wachstumstreiber?",
        answer: "Für die C-Suite repräsentiert eine Banklizenz weit mehr als die bloße Erfüllung regulatorischer Vorschriften - sie ist ein strategischer Vermögenswert, der neue Geschäftsfelder erschließt, Wettbewerbsvorteile schafft und nachhaltige Wertschöpfung ermöglicht. ADVISORI versteht die Banklizenzierung als fundamentalen Baustein für Geschäftserweiterung und Marktpositionierung in einer zunehmend digitalisierten Finanzlandschaft.\n\n🎯 Strategische Dimensionen der Banklizenzierung:\n• Marktexpansion und neue Geschäftsfelder: Eine Banklizenz eröffnet Zugang zu bisher verschlossenen Märkten, ermöglicht die Entwicklung innovativer Finanzprodukte und schafft direkte Kundenbeziehungen ohne Zwischenhändler.\n• Erhöhte Glaubwürdigkeit und Vertrauen: Regulatorische Zulassung signalisiert institutionelle Stärke gegenüber Investoren, Partnern und Kunden, was zu besseren Konditionen und strategischen Allianzen führt.\n• Operative Unabhängigkeit: Eliminierung der Abhängigkeit von Banking-Partnern reduziert Kostenstrukturen und erhöht die Kontrolle über kritische Geschäftsprozesse.\n• Kapitaleffizienz: Direkter Zugang zu Finanzierungsquellen und Refinanzierungsmöglichkeiten optimiert die Kapitalkosten und verbessert die Liquiditätsposition.\n\n🏦 Der ADVISORI-Ansatz zur strategischen Lizenzierung:\n• Geschäftsmodell-Integration: Wir entwickeln Lizenzstrategien, die nahtlos in Ihre übergeordneten Unternehmensziele und Wachstumspläne integriert sind, anstatt isolierte Compliance-Übungen durchzuführen.\n• Zukunftsorientierte Positionierung: Unsere Beratung berücksichtigt zukünftige regulatorische Entwicklungen und Markttrends, um sicherzustellen, dass Ihre Lizenz langfristig strategischen Wert generiert.\n• Stakeholder-Management: Professionelle Kommunikation mit Aufsichtsbehörden, die nicht nur Compliance sicherstellt, sondern auch Vertrauen aufbaut und zukünftige Geschäftserweiterungen erleichtert.\n• ROI-Optimierung: Strukturierung des Lizenzierungsprozesses zur Minimierung von Zeit-zu-Markt-Verzögerungen und Maximierung der geschäftlichen Wertschöpfung ab dem ersten Tag der Betriebsaufnahme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie minimiert ADVISORI die erheblichen Kosten und Zeitrisiken der Banklizenzierung und welcher ROI kann realistisch für die C-Suite-Investition erwartet werden?",
        answer: "Die Banklizenzierung stellt eine der komplexesten und kostenintensivsten regulatorischen Herausforderungen dar, die ein Unternehmen bewältigen kann. Fehlkalkulationen in Zeit oder Kosten können Millionen von Euro verschlingen und strategische Marktchancen zunichte machen. ADVISORI hat einen systematischen Ansatz entwickelt, der diese Risiken minimiert und eine klare ROI-Perspektive für C-Level-Entscheidungsträger schafft.\n\n💰 Kostenoptimierung und Risikoreduzierung:\n• Strukturierte Projektplanung: Unsere bewährte Methodik reduziert unvorhergesehene Verzögerungen um durchschnittlich 40% und minimiert kostspielige Nachforderungen der Aufsichtsbehörden.\n• Präventive Compliance-Architektur: Frühzeitige Identifikation und Behebung potenzieller Compliance-Lücken verhindert teure Nachbesserungen und Verfahrensverzögerungen.\n• Effiziente Ressourcennutzung: Parallelisierung von Arbeitsströmen und intelligente Aufgabenverteilung optimieren den Einsatz interner und externer Ressourcen.\n• Regulatorische Beziehungen: Etablierte Kontakte zu Aufsichtsbehörden beschleunigen Kommunikationsprozesse und reduzieren Missverständnisse, die zu Verzögerungen führen könnten.\n\n📈 ROI-Dimensionen und Wertschöpfung:\n• Direkte Kosteneinsparungen: Eliminierung von Banking-Partner-Margen kann jährlich 2-5% der verarbeiteten Transaktionsvolumina einsparen, was bei größeren Unternehmen schnell Millioneneinsparungen bedeutet.\n• Neue Umsatzströme: Eigene Finanzprodukte und -dienstleistungen können Margen von 15-25% generieren, die zuvor an externe Banking-Partner flossen.\n• Kapitaleffizienz: Verbesserte Refinanzierungskonditionen und direkter Marktzugang können die Kapitalkosten um 1-3 Prozentpunkte senken, was bei größeren Kreditportfolios erhebliche Zinsersparnisse bedeutet.\n• Strategische Optionalität: Eine Banklizenz schafft Flexibilität für zukünftige Akquisitionen, Partnerschaften und Geschäftsmodell-Innovationen, deren Wert schwer quantifizierbar, aber strategisch unermesslich ist."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer sich rasant wandelnden Fintech- und Regulatory-Landschaft - wie stellt ADVISORI sicher, dass unsere Banklizenz zukunftssicher ist und emerging Technologien unterstützt?",
        answer: "Die moderne Banklizenzierung muss über traditionelle Banking-Services hinausdenken und die Integration von Blockchain, KI, Open Banking und digitalen Währungen antizipieren. ADVISORI positioniert Ihre Lizenzstrategie an der Spitze der Fintech-Evolution, um sicherzustellen, dass regulatorische Investitionen nicht nur aktuellen, sondern auch zukünftigen Geschäftsanforderungen gerecht werden.\n\n🚀 Zukunftsorientierte Lizenzarchitektur:\n• Digital-First-Compliance-Framework: Entwicklung von Governance-Strukturen, die von Anfang an für digitale Geschäftsmodelle, API-basierte Services und automatisierte Finanzprozesse konzipiert sind.\n• Technologie-agnostische Regulatorik: Strukturierung der Lizenzanträge in einer Weise, die Flexibilität für emerging Technologies wie DeFi-Integration, Blockchain-basierte Settlements und KI-gesteuerte Kreditentscheidungen bietet.\n• Skalierbare Compliance-Infrastruktur: Aufbau von Monitoring- und Reporting-Systemen, die mit dem Wachstum digitaler Transaktionsvolumina und der Komplexität neuer Finanzprodukte mithalten können.\n• Regulatory Sandboxing: Strategische Nutzung von Regulatory Sandbox-Programmen zur Erprobung innovativer Geschäftsmodelle innerhalb kontrollierter regulatorischer Umgebungen.\n\n🔮 ADVISORI's Forward-Looking-Ansatz:\n• Regulatory Horizon Scanning: Kontinuierliche Überwachung sich entwickelnder Regulierungslandschaften in EU, UK und anderen Schlüsselmärkten, um proaktiv auf kommende Änderungen zu reagieren.\n• Technologie-Roadmap-Integration: Enge Abstimmung zwischen Ihren Technologie-Entwicklungsplänen und regulatorischen Anforderungen, um nahtlose Innovation zu ermöglichen.\n• Internationale Skalierbarkeit: Strukturierung der Lizenz zur Erleichterung zukünftiger Expansionen in andere Jurisdiktionen durch Passport-Rechte und Äquivalenz-Regelungen.\n• Partnerships und Ecosystem-Entwicklung: Strategische Beratung zu Partnerschaften mit Fintech-Unternehmen, Technologie-Anbietern und anderen lizenzierten Instituten zur Beschleunigung der Markteinführung neuer Services."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI die Banklizenzierung von einem regulatorischen Hindernis zu einem strategischen Differentiator und Wettbewerbsvorteil für die C-Suite?",
        answer: "Für visionäre C-Level-Führungskräfte stellt die Banklizenzierung eine einmalige Gelegenheit dar, nicht nur Marktzugang zu erhalten, sondern auch nachhaltige Wettbewerbsvorteile zu schaffen. ADVISORI transformiert den traditionell defensiven Lizenzierungsansatz in eine offensive Strategie, die Ihr Unternehmen als Marktführer und Innovator positioniert.\n\n🏆 Von Compliance zu Competitive Advantage:\n• First-Mover-Vorteile: Strategische Zeitplanung der Lizenzierung zur Nutzung von Marktlücken und zur Etablierung als Early Adopter in emerging Fintech-Segmenten.\n• Premium-Positioning: Nutzung der regulatorischen Expertise und Compliance-Exzellenz als Qualitätsmerkmal zur Rechtfertigung von Premium-Pricing bei Finanzdienstleistungen.\n• Ecosystem-Leadership: Aufbau einer Position als vertrauenswürdiger Partner für andere Fintech-Unternehmen, die Regulatory-as-a-Service-Lösungen suchen.\n• Investor-Appeal: Demonstration von Execution-Fähigkeiten in komplexen regulatorischen Umgebungen als starkes Signal an Investoren und Kreditgeber für zukünftige Finanzierungsrunden.\n\n💡 Der ADVISORI Differentiator-Ansatz:\n• Thought Leadership Development: Positionierung Ihres Unternehmens als Vordenker in regulatorischen Best Practices durch strategische Kommunikation und Industry-Engagement.\n• Intellectual Property Entwicklung: Transformation von Compliance-Prozessen in proprietary Methodologien und IP, die als eigenständige Geschäftsfelder monetarisiert werden können.\n• Strategic Alliance Facilitation: Nutzung des Lizenzierungsprozesses zum Aufbau strategischer Beziehungen zu Aufsichtsbehörden, anderen lizenzierten Instituten und Technologie-Partnern.\n• Market Intelligence Integration: Umwandlung von regulatorischen Insights in actionable Market Intelligence für strategische Geschäftsentscheidungen und Competitive Positioning.\n• Operational Excellence: Entwicklung von Governance- und Risk-Management-Capabilities, die über regulatorische Anforderungen hinausgehen und operative Effizienz steigern."
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
