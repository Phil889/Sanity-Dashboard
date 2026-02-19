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
    console.log('Updating BSI Standards Kompendium page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-bsi-standards-kompendium' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-bsi-standards-kompendium" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist das BSI Standards Kompendium für die C-Suite der strategische Schlüssel zu umfassender Cyber-Resilienz und wie positioniert ADVISORI dies als Wettbewerbsdifferenzierung?",
        answer: "Für C-Level-Führungskräfte repräsentiert das BSI Standards Kompendium mehr als nur eine Sammlung von Sicherheitsstandards – es ist das strategische Fundament für eine ganzheitliche Cyber-Resilienz-Strategie, die gleichzeitig operative Exzellenz und Marktführerschaft ermöglicht. Als vollständiges Framework (BSI 200-1, 200-2, 200-3) bietet es der Geschäftsleitung einen systematischen Ansatz zur Transformation von Informationssicherheit von einem Kostenfaktor zu einem strategischen Wertschöpfungstreiber.\n\n🎯 Strategische Geschäftsimplikationen für die C-Suite:\n• Comprehensive Risk Management: Vollständige Abdeckung aller Sicherheitsaspekte von Management-Systemen über Methodik bis hin zu Risikoanalyse.\n• Regulatory Excellence: Proaktive Erfüllung aktueller und zukünftiger regulatorischer Anforderungen (NIS2, EU Cyber Resilience Act, DORA).\n• Market Leadership: Positionierung als vertrauensvoller, sicherheitsbewusster Partner in einem zunehmend risikoaversen Marktumfeld.\n• Innovation Enablement: Sichere Grundlage für digitale Transformation und neue Geschäftsmodelle.\n\n🛡️ ADVISORI's strategischer BSI Kompendium-Ansatz:\n• Executive-Level Integration: Wir positionieren das BSI Kompendium als integralen Bestandteil Ihrer Corporate Governance und strategischen Planung.\n• Business-Value-Mapping: Direkte Verknüpfung jedes BSI Standards mit konkreten Geschäftszielen und messbaren KPIs.\n• Stakeholder-Communication: Entwicklung überzeugender Narratives für Investoren, Kunden und Partner über Ihre Sicherheitsexzellenz.\n• Competitive Intelligence: Analyse der Sicherheitslandschaft Ihrer Branche zur Identifikation von Differenzierungsmöglichkeiten durch überlegene Cyber-Resilienz.\n\n💼 Transformative Geschäftsvorteile:\n• Premium-Positioning: Möglichkeit zur Premiumpreisgestaltung durch nachweisbare Sicherheitsexzellenz.\n• Risk-adjusted Growth: Sichere Expansion in neue Märkte und Geschäftsbereiche durch robuste Sicherheitsgrundlage.\n• Investor Confidence: Erhöhte Unternehmensbewertung durch reduzierte Cyber-Risiken und nachweisbare Governance-Qualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie demonstriert ADVISORI den ROI einer vollständigen BSI Standards Kompendium Implementierung und welche quantifizierbaren Geschäftsvorteile können CFOs erwarten?",
        answer: "Aus CFO-Perspektive ist das BSI Standards Kompendium eine strategische Investition mit außergewöhnlich starkem ROI-Profil, das sowohl defensive Risikominimierung als auch offensive Wachstumschancen bietet. ADVISORI hilft dabei, diese Investition als Portfolio-optimierenden Asset zu positionieren, der sowohl Shareholder Value schützt als auch neue Ertragspotenziale erschließt.\n\n💰 Quantifizierbare Kosteneinsparungen und defensive Vorteile:\n• Cyber-Incident Prevention: Vermeidung von durchschnittlich 4,24 Millionen Euro Kosten pro Cybervorfall durch präventive Maßnahmen.\n• Insurance Premium Optimization: Bis zu 40% Reduktion der Cyber-Versicherungskosten durch nachweisbare Sicherheitsstandards.\n• Compliance Efficiency: Reduktion der Audit- und Compliance-Kosten um bis zu 60% durch standardisierte, dokumentierte Prozesse.\n• Operational Risk Reduction: Minimierung ungeplanter Ausfallzeiten und damit verbundener Umsatzverluste um bis zu 85%.\n\n📈 Offensive Wachstums- und Revenue-Potenziale:\n• Public Procurement Access: Qualifikation für öffentliche Aufträge im Wert von über 500 Milliarden Euro jährlich in der EU.\n• Premium Service Positioning: Möglichkeit zur Preispremium von 20-35% für sicherheitszertifizierte Services.\n• International Market Entry: BSI-Standards als Türöffner für deutsche und europäische B2B-Märkte.\n• Strategic Partnership Qualification: Erfüllung der Sicherheitsanforderungen für Tier-1-Partnerschaften mit DAX-Konzernen.\n\n🔧 ADVISORI's ROI-maximierende Implementierungsstrategie:\n• Phased Investment Approach: Optimale Verteilung der Implementierungskosten über 24-36 Monate zur Cashflow-Optimierung.\n• Quick-Win Identification: Priorisierung von Maßnahmen mit sofortigen messbaren Kosteneinsparungen.\n• Business Case Development: Kontinuierliche Dokumentation und Kommunikation der realisierten finanziellen Vorteile.\n• Capital Efficiency: Maximale Nutzung vorhandener IT-Infrastruktur und Prozesse zur Minimierung von Zusatzinvestitionen.\n\n📊 Messbare KPIs und Financial Metrics:\n• Time-to-ROI: Typischerweise 18-24 Monate bis zur vollständigen Amortisation der Implementierungskosten.\n• Risk-adjusted EBITDA: Verbesserung um 15-25% durch reduzierte Risikoaufschläge und operative Effizienzgewinne."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass die BSI Standards Kompendium Implementierung die operative Agilität und Innovationsfähigkeit des Unternehmens verstärkt statt hemmt?",
        answer: "Moderne C-Level-Führung erfordert ein Gleichgewicht zwischen robuster Sicherheit und operativer Agilität. ADVISORI's Ansatz zur BSI Standards Kompendium Implementierung ist darauf ausgelegt, Sicherheit als Innovation-Enabler zu positionieren, der gleichzeitig höchste Standards und maximale Geschäftsflexibilität gewährleistet. Wir schaffen einen Rahmen, der Sicherheit von einem Bremsklotz zu einem Turbo für Ihr Unternehmenswachstum macht.\n\n🚀 Agilität durch systematische Sicherheitsexzellenz:\n• DevSecOps-Integration: Nahtlose Einbettung aller BSI Standards in agile Entwicklungsprozesse ohne Geschwindigkeitsverlust.\n• Automated Compliance: Intelligent automatisierte Monitoring- und Reporting-Systeme reduzieren manuelle Compliance-Aufwände um bis zu 80%.\n• Risk-based Agility: Differenzierte Sicherheitsansätze ermöglichen schnelle Entscheidungen bei nicht-kritischen Systemen.\n• Scalable Architecture: Design von Sicherheitsframeworks, die mit Hyperwachstum und Marktexpansion mitwachsen.\n\n💡 Innovation durch Sicherheits-Leadership:\n• Trusted Innovation Platform: Robuste Sicherheitsgrundlage ermöglicht mutige Experimente mit KI, Quantum Computing und emerging Technologies.\n• Customer Trust Advantage: Sicherheitszertifizierung als Basis für datenintensive und vertrauenssensitive Geschäftsmodelle.\n• Competitive Intelligence: Sicherheitsmonitoring liefert wertvolle Market Intelligence und Trend-Insights.\n• Ecosystem Enablement: BSI-Standards als Grundlage für sichere API-Ökonomie und Platform-as-a-Service-Geschäftsmodelle.\n\n🎯 ADVISORI's Agility-Security-Balance-Approach:\n• Business-First-Design: Alle Sicherheitsmaßnahmen werden primär nach ihrem Beitrag zur Geschäftswertschöpfung bewertet.\n• Continuous Optimization: Regelmäßige Bewertung und Anpassung der Sicherheitsprozesse zur Maximierung der operativen Effizienz.\n• Innovation Sandboxing: Sichere Testumgebungen für die risikofreie Erprobung neuer Technologien und Geschäftsmodelle.\n• Cross-functional Excellence: Integration von Sicherheits-, IT- und Business-Teams zur Optimierung von Security und Agility.\n\n⚡ Operative Excellence durch Standards-Integration:\n• Process Automation: BSI-Standards als Framework für die Automatisierung repetitiver Sicherheitsaufgaben.\n• Decision Speed: Klare Sicherheitsrichtlinien ermöglichen schnellere strategische Entscheidungen ohne Sicherheitsrisiken.\n• Resource Optimization: Effiziente Allokation von Sicherheitsressourcen basierend auf Risk-Priority-Matrizen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI das BSI Standards Kompendium als strategisches Fundament für die digitale Transformation und die Erschließung neuer digitaler Geschäftsmodelle?",
        answer: "Für visionäre C-Level-Führungskräfte ist das BSI Standards Kompendium der strategische Katalysator für erfolgreiche digitale Transformation und innovative Geschäftsmodelle. ADVISORI positioniert die vollständige BSI-Standards-Familie als Digital-Trust-Platform, die das Vertrauen schafft, das für disruptive digitale Innovationen und neue Marktchancen unerlässlich ist.\n\n🔄 Digital Transformation durch Security Excellence:\n• Cloud-Native-Strategies: BSI-Standards als Rahmen für sichere Cloud-First-Architekturen und Multi-Cloud-Strategien.\n• Data-Driven-Business-Models: Sichere Datenverarbeitung als Grundlage für Data-as-a-Product und Analytics-as-a-Service.\n• IoT und Industry 4.0: Strukturierte Sicherheitsansätze für die Integration vernetzter Produktionsumgebungen und Smart Manufacturing.\n• AI/ML-Excellence: Vertrauensvolle KI-Implementierung durch robuste Daten-, Modell- und Algorithmus-Sicherheit.\n\n🌐 Neue Geschäftsmodell-Opportunities:\n• Platform Economy Leadership: BSI-Standards als Basis für sichere API-Ökosysteme und digitale Marktplätze.\n• Everything-as-a-Service: Sicherheitszertifizierung als Differenzierungsmerkmal für XaaS-Angebote.\n• Blockchain und Web3: Strukturierte Sicherheitsframeworks für dezentrale Technologien und Digital Assets.\n• RegTech und FinTech: Compliance-ready Infrastrukturen für hochregulierte digitale Financial Services.\n\n🎯 ADVISORI's Digital-First BSI Kompendium Approach:\n• Agile Security Architecture: Design von Sicherheitsframeworks, die digitale Innovation unterstützen statt behindern.\n• Zero-Trust-Integration: Moderne Sicherheitskonzepte für remote-first und cloud-native Arbeitsmodelle.\n• API-Security-Excellence: Spezialisierte Sicherheitskonzepte für API-Economy und Microservices-Architekturen.\n• Digital Identity Mastery: Robuste Identitäts- und Zugriffsmanagement-Systeme als Basis für nahtlose Customer und Employee Experiences.\n\n💼 Strategic Market Positioning und Competitive Advantage:\n• Digital Trust Leadership: Positionierung als vertrauensvoller Digital-Partner in einer zunehmend unsicheren Cyber-Welt.\n• Regulatory Readiness: Proaktive Vorbereitung auf kommende EU-Regulierungen und internationale Standards.\n• Innovation Partnerships: Sicherheitsexzellenz als Basis für strategische Allianzen mit Technology Leaders und Unicorn-Startups.\n• Market Expansion: BSI-Zertifizierung als Qualitätsmerkmal für internationale Markterschließung und M&A-Aktivitäten."
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
