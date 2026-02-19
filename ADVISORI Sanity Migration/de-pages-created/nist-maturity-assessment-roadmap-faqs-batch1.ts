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
    console.log('Updating NIST Maturity Assessment Roadmap page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-maturity-assessment-roadmap' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-maturity-assessment-roadmap" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strukturierte NIST Maturity Assessment Roadmap für die strategische Cybersecurity-Governance unserer Organisation entscheidend und wie unterstützt ADVISORI bei der Entwicklung eines nachhaltigen Transformation?",
        answer: "Eine NIST Maturity Assessment Roadmap ist weit mehr als ein technisches Assessment-Tool; sie bildet das strategische Fundament für eine systematische Cybersecurity-Transformation, die Cyber-Resilienz messbar macht und in Geschäftswert überführt. Für C-Level-Führungskräfte stellt sie ein kritisches Instrument dar, um Cybersecurity-Investitionen zu rechtfertigen, Risiken zu quantifizieren und Wettbewerbsvorteile durch überlegene Cyber-Capabilities zu erzielen.\n\n🎯 Strategische Bedeutung einer NIST Maturity Roadmap für die Führungsebene:\n• Messbare Cyber-Resilienz: Transformation von abstrakte Cybersecurity-Konzepten in konkrete, messbare Kennzahlen, die direkt mit Geschäftszielen und Risikotoleranz korrelieren.\n• Investitionsoptimierung: Datengestützte Priorisierung von Cybersecurity-Investitionen mit klarem ROI und Business Case für jede Verbesserungsmaßnahme.\n• Regulatory Readiness: Proaktive Vorbereitung auf regulatorische Anforderungen wie NIS2, DORA oder branchenspezifische Compliance-Standards.\n• Stakeholder-Kommunikation: Klare, verständliche Darstellung der Cybersecurity-Posture für Aufsichtsrat, Investoren und externe Partner.\n\n🚀 ADVISORIs strategischer Ansatz für nachhaltige Transformation:\n• Executive-orientierte Roadmap-Entwicklung: Wir entwickeln Roadmaps, die Cybersecurity-Verbesserungen direkt mit strategischen Geschäftszielen verknüpfen und messbare Wertbeiträge demonstrieren.\n• Adaptive Frameworks: Unsere Roadmaps sind flexibel gestaltet, um sich an verändernde Bedrohungslandschaften, Geschäftsmodelle und regulatorische Anforderungen anzupassen.\n• Integration in Unternehmensplanung: Vollständige Integration der Cybersecurity-Roadmap in strategische Unternehmensplanung, Budgetzyklen und Governance-Prozesse.\n• Kontinuierliche Wertschöpfung: Etablierung von Mechanismen zur kontinuierlichen Bewertung und Optimierung der Cyber-Capabilities mit regelmäßigen Business Impact Assessments."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir durch eine strategische NIST Maturity Assessment Roadmap Cybersecurity-Investitionen rechtfertigen und gleichzeitig messbare Geschäftswerte erzielen?",
        answer: "Eine strategisch entwickelte NIST Maturity Assessment Roadmap transformiert Cybersecurity von einem Kostenfaktor zu einem Wertschöpfungstreiber, indem sie konkrete Business Cases etabliert und messbare Renditen auf Cybersecurity-Investitionen demonstriert. Für die C-Suite wird dadurch eine evidenzbasierte Entscheidungsgrundlage geschaffen, die Cybersecurity-Ausgaben als strategische Investitionen positioniert.\n\n💼 Business Value durch strategische NIST Maturity Roadmaps:\n• ROI-Quantifizierung: Entwicklung von Metriken, die direkt zeigen, wie Cybersecurity-Verbesserungen Geschäftsrisiken reduzieren, operative Effizienz steigern und neue Geschäftsmöglichkeiten ermöglichen.\n• Kostenoptimierung: Identifikation von Synergien zwischen Cybersecurity-Maßnahmen und anderen Geschäftsprozessen, die Doppelausgaben vermeiden und Operational Excellence fördern.\n• Revenue Enablement: Nutzung verbesserter Cybersecurity-Capabilities für neue Geschäftsmodelle, Premium-Serviceofferings oder Marktzugang in regulierten Industrien.\n• Insurance und Capital Benefits: Verhandlung besserer Cyber-Versicherungskonditionen und Kapitalkosten durch nachweislich verbesserte Risikoprofile.\n\n📊 ADVISORIs Business-orientierter Roadmap-Ansatz:\n• Value Stream Mapping: Detaillierte Analyse, wie jede Cybersecurity-Verbesserung direkt oder indirekt zu Geschäftswerten beiträgt, von Kostenreduktion bis Revenue Generation.\n• Phased Investment Planning: Strukturierte Investitionsphasen mit klaren Meilensteinen und messbaren Business Outcomes für jede Phase der Maturity-Entwicklung.\n• Risk-Adjusted Business Cases: Entwicklung von Business Cases, die nicht nur Kosten und Nutzen betrachten, sondern auch Risikoreduktion und vermiedene Schäden quantifizieren.\n• Stakeholder-spezifische Metriken: Anpassung der Erfolgsmessung an verschiedene Stakeholder-Perspektiven, von operativen KPIs bis zu strategischen Board-Level-Kennzahlen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche strategischen Wettbewerbsvorteile entstehen durch eine systematische NIST Framework Maturity-Entwicklung und wie positioniert uns dies am Markt?",
        answer: "Eine systematische NIST Framework Maturity-Entwicklung schafft nachhaltige Wettbewerbsvorteile, die weit über reine Risikominimierung hinausgehen. Sie etabliert Ihre Organisation als vertrauenswürdigen, resilient Partner und öffnet neue Marktchancen durch demonstrierte Cybersecurity-Exzellenz. Für strategisch denkende Führungskräfte wird Cybersecurity-Maturity zu einem differenzierenden Faktor im Wettbewerb.\n\n🏆 Strategische Wettbewerbsvorteile durch NIST Maturity Excellence:\n• Market Access und Premium Positioning: Höhere Cybersecurity-Maturity ermöglicht Zugang zu regulierten Märkten, Regierungsaufträgen und anspruchsvollen Enterprise-Kunden mit strengen Sicherheitsanforderungen.\n• Partner und Ecosystem Advantage: Bevorzugte Partnerschaftsstatus mit führenden Technologieunternehmen und Finanzinstituten, die nur mit cyber-resilient Partnern zusammenarbeiten.\n• Customer Trust und Retention: Nachweislich höhere Kundenloyalität und -bindung durch transparente Kommunikation der Cybersecurity-Capabilities und Maturity-Levels.\n• Operational Resilience: Überlegene Fähigkeit zur Geschäftskontinuität während Cyber-Incidents, was zu Marktanteilsgewinnen in Krisenzeiten führen kann.\n\n🚀 ADVISORIs Competitive Advantage Framework:\n• Market Differentiation Strategy: Entwicklung einer Cybersecurity-Positionierung, die Ihre Maturity-Vorteile in überzeugende Marktbotschaften und Competitive Intelligence überführt.\n• Stakeholder Communication Excellence: Aufbau von Kommunikationsstrategien, die Ihre Cybersecurity-Maturity gegenüber Kunden, Partnern und Investoren als Wettbewerbsvorteil präsentieren.\n• Innovation Enablement: Nutzung hoher Cybersecurity-Maturity als Enabler für digitale Innovation und neue Geschäftsmodelle, die weniger reife Wettbewerber nicht umsetzen können.\n• Industry Leadership: Positionierung als Thought Leader und Best Practice Benchmark in Ihrer Branche durch demonstrierte NIST Framework Excellence."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie integrieren wir eine NIST Maturity Assessment Roadmap strategisch in unsere digitale Transformation und langfristige Unternehmensstrategie?",
        answer: "Die Integration einer NIST Maturity Assessment Roadmap in die digitale Transformation und Unternehmensstrategie erfordert einen ganzheitlichen Ansatz, der Cybersecurity als strategischen Enabler positioniert. Anstatt Cybersecurity als isolierte Funktion zu betrachten, wird sie zum integralen Bestandteil der digitalen DNA Ihres Unternehmens und zum Katalysator für nachhaltige Geschäftsinnovation.\n\n🔄 Strategische Integration von NIST Maturity in die Digitale Transformation:\n• Digital Foundation Building: NIST Framework Capabilities bilden das Sicherheitsfundament für Cloud-Migration, IoT-Integration, KI-Implementierung und andere digitale Initiativen.\n• Agile Security Integration: Entwicklung von Security-by-Design-Prinzipien, die NIST Framework Requirements nahtlos in agile Entwicklungsprozesse und DevSecOps-Pipelines integrieren.\n• Data-Driven Decision Making: Nutzung der NIST Maturity-Metriken als Teil des strategischen Performance Managements mit direkter Verknüpfung zu digitalen Transformationszielen.\n• Innovation Enablement: Höhere Cybersecurity-Maturity ermöglicht risikoreichere, aber wertvollere digitale Innovationen und neue Geschäftsmodelle.\n\n🎯 ADVISORIs Integrated Strategy Approach:\n• Enterprise Architecture Alignment: Vollständige Integration der NIST Framework Requirements in die Enterprise Architecture, sodass jede technologische Entscheidung automatisch Maturity-Verbesserungen berücksichtigt.\n• Strategic Roadmap Synchronization: Harmonisierung der Cybersecurity-Roadmap mit IT-Modernisierung, Business Process Reengineering und Organisationsentwicklung in einem kohärenten Transformationsplan.\n• Value Stream Optimization: Identifikation und Optimierung von Wertschöpfungsketten, wo verbesserte Cybersecurity-Maturity direkt zu verbesserter Geschäftsperformance führt.\n• Future-Ready Foundation: Aufbau einer adaptiven Cybersecurity-Architektur, die nicht nur aktuelle NIST Requirements erfüllt, sondern auch für zukünftige Entwicklungen in Regulierung, Technologie und Bedrohungslandschaft vorbereitet ist."
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
