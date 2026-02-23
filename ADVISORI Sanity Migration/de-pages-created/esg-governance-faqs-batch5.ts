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
    console.log('Updating ESG Governance page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie unterstützt ADVISORI bei der Entwicklung von ESG-Governance für Familienunternehmen und Mittelstand, wo langfristige Wertorientierung besonders relevant ist?",
        answer: "Familienunternehmen und Mittelstand besitzen oft natürliche Affinität zu langfristiger Wertorientierung und nachhaltiger Geschäftsführung, benötigen aber spezialisierte ESG-Governance-Ansätze, die ihre einzigartigen Strukturen und Werte respektieren. ADVISORI entwickelt maßgeschneiderte ESG-Governance-Systeme, die traditionelle Familienunternehmenswerte mit modernen Nachhaltigkeitsanforderungen verbinden und dabei Generationenkontinuität sicherstellen.\n\n👨‍👩‍👧‍👦 Familienunternehmen-spezifische ESG-Governance-Besonderheiten:\n• Generational-Value-Alignment: Integration von ESG-Prinzipien in Familienverfassungen und Governance-Strukturen, die generationenübergreifende Nachhaltigkeitsverpflichtungen verankern.\n• Stakeholder-Capitalism mit persönlicher Note: Entwicklung von ESG-Ansätzen, die die enge Verbindung zu lokalen Gemeinschaften, Mitarbeitern und langfristigen Partnerschaften nutzen und stärken.\n• Legacy-Protection und Future-Proofing: ESG-Strategien, die sowohl den Schutz des Familienerbes als auch die Zukunftsfähigkeit für nachfolgende Generationen sicherstellen.\n• Flexible-Governance-Strukturen: Anpassung von ESG-Governance an informellere Entscheidungsstrukturen, während gleichzeitig Professionalität und Transparenz gewährleistet werden.\n\n🏆 ADVISORI's Family-Business-ESG-Excellence-Approach:\n• Family-Charter-Integration: Entwicklung von ESG-Komponenten für Familienverfassungen, die Nachhaltigkeitscommitments dauerhaft in der DNA des Unternehmens verankern.\n• Next-Generation-ESG-Leadership-Development: Spezialisierte Programme zur Befähigung der nächsten Generation, ESG-Leadership zu übernehmen und moderne Nachhaltigkeitsansätze zu implementieren.\n• Local-Community-Engagement-Frameworks: Systematisierung traditioneller Community-Verbindungen in moderne Stakeholder-Engagement-Strategien mit messbaren ESG-Auswirkungen.\n• Pragmatic-Implementation-Roadmaps: Entwicklung praktikabler ESG-Umsetzungspläne, die limitierte Ressourcen optimal nutzen und quick Wins mit langfristigen Transformationszielen verbinden.\n• Authentic-Storytelling für Familienunternehmen: Kommunikationsstrategien, die authentische Nachhaltigkeitsgeschichten von Familienunternehmen effektiv vermitteln und Competitive Advantage schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie adressiert ADVISORI die Integration von ESG-Governance in digitale Transformation und Industrie 4.0-Initiativen?",
        answer: "Die Konvergenz von ESG-Governance und digitaler Transformation schafft einzigartige Opportunitäten für nachhaltige Innovation und operative Excellence. ADVISORI entwickelt integrierte Digital-ESG-Governance-Frameworks, die digitale Technologies als Enabler für ESG-Ziele nutzen und dabei sicherstellen, dass Digitalisierung selbst nachhaltigen Prinzipien folgt.\n\n🔬 Digital-ESG-Konvergenz-Potenziale:\n• AI-powered-ESG-Optimization: Einsatz künstlicher Intelligenz für Ressourcenoptimierung, Energieeffizienz und Predictive-Sustainability-Analytics zur systematischen Verbesserung der ESG-Performance.\n• IoT-basiertes-ESG-Monitoring: Implementation von Internet-of-Things-Lösungen für Real-time-Monitoring von Umweltauswirkungen, Energieverbrauch und sozialen Indikatoren.\n• Blockchain für ESG-Transparency: Nutzung von Blockchain-Technologie für unveränderliche ESG-Datenaufzeichnung, Supply-Chain-Transparency und Stakeholder-Trust-Building.\n• Digital-Twin für Sustainability-Simulation: Entwicklung digitaler Zwillinge für die Simulation und Optimierung von Nachhaltigkeitsmaßnahmen vor deren physischer Implementierung.\n\n⚡ ADVISORI's Digital-ESG-Integration-Methodology:\n• Digital-ESG-Maturity-Assessment: Comprehensive Bewertung der digitalen Reife im Kontext von ESG-Zielen und Identifikation von Technology-Enablement-Opportunitäten.\n• Sustainable-Digital-Architecture-Design: Entwicklung digitaler Infrastrukturen, die sowohl ESG-Ziele unterstützen als auch selbst nachhaltige Prinzipien befolgen (Green IT, Energy-efficient Computing).\n• Data-Driven-ESG-Decision-Making: Implementierung von Analytics-Plattformen, die ESG-relevante Daten in Echtzeit verarbeiten und actionable Insights für Management-Entscheidungen liefern.\n• Digital-ESG-Skills-Development: Aufbau digitaler Kompetenzen in ESG-Teams und ESG-Awareness in Digital-Teams für erfolgreiche Cross-functional-Collaboration.\n• Cyber-Security für ESG-Data: Entwicklung robuster Sicherheitsarchitekturen zum Schutz sensitiver ESG-Daten und Sicherstellung von Data-Integrity für Compliance und Reporting."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche Rolle spielt ESG-Governance bei der Transformation von Geschäftsmodellen und wie unterstützt ADVISORI bei sustainable Business-Model-Innovation?",
        answer: "ESG-Governance fungiert als Katalysator für fundamentale Geschäftsmodell-Innovation und ermöglicht Unternehmen, nachhaltige Wertschöpfung als Competitive Advantage zu etablieren. ADVISORI entwickelt transformative ESG-Business-Model-Frameworks, die traditionelle Wertschöpfungslogiken hinterfragen und dabei neue sustainable Revenue-Streams und Market-Opportunities schaffen.\n\n🔄 ESG-driven Business-Model-Transformation-Dimensionen:\n• Circular-Economy-Business-Models: Transformation linearer Geschäftsmodelle in Kreislaufwirtschafts-Ansätze, die Waste-to-Value-Conversion und Resource-Efficiency maximieren.\n• Servitization und ESG-as-a-Service: Entwicklung service-orientierter Geschäftsmodelle, die Nachhaltigkeits-Outcomes statt nur Produkte verkaufen und dabei Customer-Success mit ESG-Impact verknüpfen.\n• Platform-based-Sustainability-Ecosystems: Design von Plattform-Geschäftsmodellen, die verschiedene Stakeholder für kollektive ESG-Impact-Generierung zusammenbringen.\n• Impact-Investment und Shared-Value-Creation: Integration von Impact-Measurement in Core-Business-Modelle zur Demonstration von Shared-Value für alle Stakeholder.\n\n🚀 ADVISORI's Sustainable-Business-Model-Innovation-Framework:\n• Business-Model-ESG-Assessment: Systematic Evaluation bestehender Geschäftsmodelle auf ESG-Alignment und Identifikation von Transformation-Opportunitäten.\n• Value-Proposition-Redesign: Neugestaltung von Wertversprechen, die ESG-Benefits explizit integrieren und dabei neue Customer-Segments erschließen.\n• Revenue-Model-Innovation: Entwicklung innovativer Erlösmodelle, die ESG-Performance monetarisieren und dabei Win-Win-Situationen für Business und Sustainability schaffen.\n• Stakeholder-Ecosystem-Design: Aufbau von Partnernetzwerken und Ökosystemen, die kollektive ESG-Impact-Generierung ermöglichen und dabei Network-Effects nutzen.\n• Transition-Risk-Management: Systematische Planung und Management von Risiken, die mit Geschäftsmodell-Transformation verbunden sind, einschließlich Change-Management und Market-Education."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie entwickelt ADVISORI zukunftssichere ESG-Governance-Strategien, die sich an kommende regulatorische und gesellschaftliche Entwicklungen anpassen können?",
        answer: "Zukunftssichere ESG-Governance erfordert anticipatory Frameworks, die nicht nur current Best Practices implementieren, sondern auch proaktiv auf emerging Trends, regulatorische Entwicklungen und gesellschaftliche Shifts reagieren. ADVISORI entwickelt adaptive ESG-Governance-Systeme mit built-in Flexibilität und Lernfähigkeit, die Unternehmen dabei helfen, ESG-Trends zu antizipieren und als First-Mover-Advantage zu nutzen.\n\n🔮 Future-Proofing-Dimensionen für ESG-Governance:\n• Regulatory-Anticipation und Early-Adoption: Systematische Analyse emerging Regulations und proaktive Implementierung zukünftiger Standards für Competitive-Advantage-Generierung.\n• Societal-Trend-Integration: Continuous-Monitoring gesellschaftlicher Entwicklungen und Integration changing Stakeholder-Expectations in ESG-Governance-Evolution.\n• Technology-Enabled-Adaptability: Nutzung fortgeschrittener Technologien für flexible, skalierbare ESG-Governance-Systeme, die sich schnell an neue Anforderungen anpassen können.\n• Scenario-Planning und Strategic-Optionality: Entwicklung multipler ESG-Governance-Szenarien für verschiedene Zukunfts-Pathways und Erhaltung strategischer Flexibilität.\n\n🎯 ADVISORI's Future-Ready-ESG-Governance-Methodology:\n• Horizon-Scanning und Trend-Intelligence: Etablierung systematischer Processes für Early-Detection von ESG-relevanten Trends, Regulations und Stakeholder-Expectation-Shifts.\n• Adaptive-Governance-Architecture: Design modularer ESG-Governance-Strukturen, die rapid Reconfiguration ermöglichen, ohne Core-Functionality zu beeinträchtigen.\n• Continuous-Learning-Systems: Implementierung von Feedback-Loops und Learning-Mechanisms, die ESG-Governance kontinuierlich basierend auf new Insights und Experience optimieren.\n• Innovation-Incubation für ESG: Aufbau von Innovation-Capabilities speziell für ESG-Governance-Innovation, einschließlich Experimentation-Frameworks und Fail-Fast-Approaches.\n• Cross-Industry-Learning und Best-Practice-Sharing: Etablierung von Networks und Communities-of-Practice für continuous Benchmarking und Knowledge-Transfer zwischen Vorreitern verschiedener Branchen."
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
