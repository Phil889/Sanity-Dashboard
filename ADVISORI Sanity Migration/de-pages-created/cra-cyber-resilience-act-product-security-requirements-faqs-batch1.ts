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
    console.log('Updating CRA Product Security Requirements page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-product-security-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-product-security-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie wird der EU Cyber Resilience Act (CRA) die strategischen Entscheidungen unserer C-Suite bezüglich Produktentwicklung und Marktpositionierung fundamental beeinflussen?",
        answer: "Der EU Cyber Resilience Act (CRA) stellt einen Paradigmenwechsel für die strategische Unternehmensführung dar und transformiert Cybersicherheit von einer nachgelagerten Compliance-Anforderung zu einem zentralen Wettbewerbsfaktor und Innovationstreiber. Für die C-Suite bedeutet dies eine fundamentale Neuausrichtung der Produktstrategie, da Cybersicherheit nun integraler Bestandteil des Produktdesigns und der Marktpositionierung wird.\n\n🎯 Strategische Paradigmenwechsel für die Führungsebene:\n• Produktentwicklung als Security-First-Ansatz: Security-by-Design wird zur Grundvoraussetzung für alle digitalen Produkte und Connected Devices, was neue Entwicklungszyklen und Investitionsstrukturen erfordert.\n• Marktdifferenzierung durch Compliance-Exzellenz: Frühe CRA-Konformität wird zum entscheidenden Wettbewerbsvorteil und Markteintrittskriterium für digitale Produkte in der EU.\n• Risikomanagement-Integration: CRA-Compliance wird integraler Bestandteil der Unternehmensstrategie und beeinflusst M&A-Entscheidungen, Partnerschaften und Produktportfolio-Strategien.\n• Investitionspriorisierung: Budgetallokation für Cybersicherheits-Infrastruktur wird von der Cost-Center-Logik zum strategischen Investment-Fokus transformiert.\n\n💼 ADVISORI's strategische C-Level-Unterstützung:\n• Executive Strategy Workshops: Wir facilitieren C-Level-Strategiesitzungen zur Integration von CRA-Anforderungen in Ihre langfristige Unternehmensstrategie und Produktroadmap.\n• Business Case Development: Entwicklung überzeugender ROI-Modelle für CRA-Investitionen, die sowohl Compliance-Kosten als auch Marktchancen und Risikominimierung quantifizieren.\n• Competitive Intelligence: Marktanalysen zur CRA-Readiness Ihrer Wettbewerber und Identifikation von First-Mover-Advantages durch frühzeitige Compliance-Implementierung.\n• Board-Level Reporting: Erstellung von Board-Ready-Präsentationen und KPI-Dashboards für die transparente Kommunikation des CRA-Compliance-Status und strategischen Impacts an Aufsichtsräte und Investoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen Auswirkungen und ROI-Potenziale ergeben sich für unsere Organisation durch proaktive CRA-Compliance-Investitionen?",
        answer: "Die Investition in proaktive CRA-Compliance generiert messbare finanzielle Renditen durch Risikominimierung, Marktchancenerschließung und operative Effizienzsteigerungen. Für die C-Suite ist es entscheidend, CRA-Compliance nicht als reine Kostenposition, sondern als strategische Investition mit quantifizierbarem ROI zu verstehen, die sowohl defensive als auch offensive Geschäftswerte schafft.\n\n💰 Direkte finanzielle Erträge und Kostenminimierung:\n• Vermeidung von EU-Marktausschluss: Nicht-konforme Produkte können ab 2025 nicht mehr in der EU vermarktet werden, was bei einem durchschnittlichen EU-Marktanteil von 25-40% erhebliche Umsatzausfälle bedeuten würde.\n• Reduktion von Nachbesserungskosten: Proaktive Security-by-Design-Implementierung ist 60-80% kosteneffizienter als nachträgliche Sicherheitsnachrüstungen bei bereits eingesetzten Produkten.\n• Versicherungsprämienoptimierung: CRA-konforme Produkte qualifizieren sich für günstigere Cyber-Versicherungstarife und reduzierte Haftungsrisiken bei Sicherheitsvorfällen.\n• Minimierung von Compliance-Bußgeldern: Vermeidung potenzieller EU-Strafen von bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes bei schwerwiegenden CRA-Verstößen.\n\n📈 Strategische Geschäftschancen und Marktvorteile:\n• Premium-Pricing für sichere Produkte: CRA-konforme Produkte können mit 15-25% Preisaufschlag positioniert werden, da Kunden zunehmend Wert auf nachweisbare Cybersicherheit legen.\n• Accelerated Market Access: Frühzeitige CRA-Compliance ermöglicht schnelleren Marktzugang und First-Mover-Advantages bei neuen Produktkategorien.\n• B2B-Kundenakquisition: Enterprise-Kunden bevorzugen zunehmend CRA-konforme Lösungen, was neue Geschäftschancen in regulierten Industrien eröffnet.\n• Investoren- und Stakeholder-Confidence: Nachweisbare Compliance-Exzellenz stärkt ESG-Ratings und kann zu besseren Finanzierungskonditionen und höheren Unternehmensbewertungen führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir CRA-Compliance als strategischen Enabler für digitale Transformation und Innovation nutzen, anstatt es als regulatorische Belastung zu betrachten?",
        answer: "Die intelligente Nutzung der CRA-Anforderungen als Innovationskatalysator transformiert regulatorische Compliance von einer Belastung zu einem strategischen Enabler für digitale Exzellenz und Marktführerschaft. Für die C-Suite eröffnet dies die Möglichkeit, Compliance-Investitionen direkt in Wettbewerbsvorteile und Innovationskapazitäten umzuwandeln, die über die reine Regelkonformität hinaus nachhaltigen Geschäftswert generieren.\n\n🚀 Innovation durch CRA-getriebene Modernisierung:\n• Security-First-Architektur als Differentiator: Die CRA-erforderliche Security-by-Design-Implementierung zwingt zu modernen, robusten Systemarchitekturen, die gleichzeitig Innovationsgeschwindigkeit und -qualität erhöhen.\n• Datengetriebene Produktoptimierung: CRA-konforme Monitoring- und Logging-Systeme generieren wertvolle Insights über Produktnutzung und -performance, die für datengetriebene Produktinnovationen genutzt werden können.\n• Automatisierung und DevSecOps-Excellence: Die Integration von Security-Testing in CI/CD-Pipelines beschleunigt nicht nur Compliance, sondern auch generelle Entwicklungszyklen und Deployment-Qualität.\n• Ecosystem-Partnerships: CRA-Compliance öffnet Türen zu strategischen Partnerschaften mit anderen konformen Anbietern und ermöglicht die Entwicklung sichererer, integrierter Produktökosysteme.\n\n💡 ADVISORI's Innovation-Enablement-Ansatz:\n• Digital Twin für Security: Wir entwickeln digitale Sicherheitsmodelle Ihrer Produkte, die gleichzeitig CRA-Compliance sicherstellen und als Basis für kontinuierliche Produktverbesserungen dienen.\n• AI-Powered Compliance Automation: Implementation von Machine Learning-Systemen für automatisierte Vulnerability Detection und Response, die über Compliance hinaus Produktqualität und -sicherheit kontinuierlich optimieren.\n• Innovation Lab Integration: Beratung zur Integration von CRA-Requirements in Ihre Innovation Labs und R&D-Prozesse, sodass neue Technologien von Beginn an compliant und marktfähig entwickelt werden.\n• Cross-Industry Knowledge Transfer: Leveraging von CRA-Implementierungen in anderen Industrien zur Identifikation von Best Practices und innovativen Ansätzen, die auf Ihr Geschäftsmodell übertragbar sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Entscheidungen muss unsere C-Suite jetzt treffen, um bis zum CRA-Inkrafttreten 2025 optimal positioniert zu sein?",
        answer: "Die verbleibende Zeit bis zum CRA-Inkrafttreten erfordert strategische Entscheidungen mit langfristigen Auswirkungen auf Ihre Marktposition und Wettbewerbsfähigkeit. Die C-Suite muss jetzt die Weichen für eine erfolgreiche CRA-Transformation stellen, die sowohl Compliance sicherstellt als auch strategische Geschäftschancen maximiert. Zeitkritische Entscheidungen heute bestimmen Ihren Markterfolg von morgen.\n\n⏰ Kritische strategische Entscheidungen mit Deadline-Charakter:\n• Produktportfolio-Priorisierung: Festlegung, welche Produkte prioritär CRA-konform gemacht werden und welche möglicherweise aus dem EU-Markt zurückgezogen werden müssen.\n• Organisationsstruktur-Anpassung: Etablierung einer Chief Security Officer (CSO) oder Chief Compliance Officer (CCO) Position mit direkter C-Level-Berichtslinie und Budget-Verantwortung.\n• Make-or-Buy-Entscheidungen: Strategische Festlegung, ob CRA-Compliance-Kapazitäten intern aufgebaut oder über Partnerschaften und Outsourcing realisiert werden.\n• Ressourcenallokation: Budgetfreigabe für CRA-Implementierung - Experten empfehlen 3-7% des Jahresumsatzes für umfassende Compliance-Transformation.\n\n🎯 ADVISORI's Executive Decision Support:\n• C-Level Readiness Assessment: 48-Stunden-Executive-Assessment zur Bewertung Ihres aktuellen CRA-Readiness-Status und Identifikation kritischer Entscheidungsbedarfe.\n• Strategic Roadmap Development: Entwicklung einer präzisen 18-Monats-Roadmap mit Meilensteinen, Ressourcenanforderungen und Entscheidungspunkten für erfolgreiche CRA-Implementierung.\n• Risk-Reward-Modellierung: Quantitative Modelle zur Bewertung verschiedener Compliance-Strategien hinsichtlich Kosten, Risiken und Marktchancen.\n• Executive Crisis Simulation: Durchführung von Tabletop-Exercises mit Ihrer C-Suite zur Simulation von CRA-Compliance-Krisen und Entwicklung optimaler Entscheidungsstrukturen und Reaktionszeiten."
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
