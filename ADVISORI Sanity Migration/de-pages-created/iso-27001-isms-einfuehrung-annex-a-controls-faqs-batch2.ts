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
    console.log('Updating ISO 27001 ISMS Annex A Controls page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-isms-einfuehrung-annex-a-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-isms-einfuehrung-annex-a-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir technische Controls (A.9-A.14) strategisch implementieren, um sowohl Cyber-Resilienz als auch digitale Innovation zu fördern?",
        answer: "Die technischen Controls der ISO 27001 bilden das technologische Rückgrat moderner Informationssicherheit und sind gleichzeitig Enabler für digitale Transformation. ADVISORI entwickelt Implementierungsstrategien, die robuste Sicherheit mit innovativer Technologienutzung harmonisch verbinden und dabei strategische Geschäftsziele unterstützen.\n\n🔧 Strategische Implementierung technischer Sicherheitskontrollen:\n• Access Control Management (A.9): Implementierung von Zero-Trust-Architekturen und Identity-as-a-Service-Lösungen, die sowohl höchste Sicherheit als auch flexible, cloudbasierte Geschäftsmodelle ermöglichen.\n• Cryptography Controls (A.10): Aufbau einer Enterprise-Verschlüsselungsstrategie mit Quantum-Ready-Algorithmen, die langfristige Datensicherheit gewährleistet und gleichzeitig Performance optimiert.\n• System Security (A.12): Implementierung von DevSecOps-Praktiken und Security-by-Design-Prinzipien, die Sicherheit in den Entwicklungszyklus integrieren ohne Innovation zu bremsen.\n• Network Security (A.13): Aufbau von Software-Defined-Perimetern und intelligenten Threat-Detection-Systemen für dynamische, cloud-native Infrastrukturen.\n\n🚀 Technologie als strategischer Differentiator:\n• AI-gestützte Security Operations: Implementierung von Machine Learning-basierten Security Information and Event Management (SIEM) Systemen für proaktive Bedrohungserkennung.\n• Automated Compliance Monitoring: Entwicklung automatisierter Compliance-Dashboards, die Echtzeitüberwachung aller technischen Controls ermöglichen.\n• Cloud-Native Security: Strategische Migration zu cloud-nativen Sicherheitslösungen, die Skalierbarkeit und Kosteneffizienz maximieren.\n• Integration Platform Excellence: Aufbau einheitlicher Security-APIs, die nahtlose Integration verschiedener Sicherheitstools ermöglichen.\n\n💡 ADVISORIs Technology-Forward Approach:\n• Future-Proof Architecture Design: Entwicklung flexibler Sicherheitsarchitekturen, die sich an evolvierende Bedrohungslandschaften und Technologietrends anpassen können.\n• Vendor-Agnostic Solutions: Strategische Technologieauswahl, die Vendor Lock-in vermeidet und maximale Flexibilität bei zukünftigen Technologieentscheidungen bewahrt.\n• Performance-Security Balance: Optimierung der technischen Controls für minimale Auswirkungen auf System-Performance und User Experience."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielen Supplier Security Controls (A.15) in unserer digitalen Lieferkette und wie können wir Third-Party-Risiken strategisch managen?",
        answer: "In der modernen, vernetzten Geschäftswelt sind Supplier Security Controls entscheidend für die Absicherung der erweiterten digitalen Lieferkette. ADVISORI entwickelt comprehensive Third-Party-Risk-Management-Strategien, die nicht nur Sicherheitsrisiken minimieren, sondern auch strategische Partnerschaften stärken und Innovationspotenziale erschließen.\n\n🔗 Strategische Bedeutung von Supplier Security Management:\n• Extended Enterprise Security: Ihre Sicherheit ist nur so stark wie das schwächste Glied in Ihrer Lieferkette - strategisches Supplier Management schützt Ihr gesamtes Ökosystem.\n• Regulatory Compliance: Compliance-Anforderungen erstrecken sich zunehmend auf Ihre gesamte Lieferkette, making robust supplier controls essential for regulatory adherence.\n• Innovation Enablement: Sichere Supplier-Integrationen ermöglichen vertrauensvolle Partnerschaften und gemeinsame Innovationsprojekte ohne Sicherheitskompromisse.\n• Reputational Protection: Sicherheitsvorfälle bei Lieferanten können erhebliche Reputationsschäden verursachen - proaktives Management minimiert diese Risiken.\n\n🛡️ ADVISORIs 360-Grad-Supplier-Security-Framework:\n• Risk-Based Supplier Categorization: Entwicklung einer intelligenten Klassifizierungsmatrix, die Lieferanten basierend auf Criticality, Data Access und Risk Profile kategorisiert.\n• Continuous Security Monitoring: Implementierung automatisierter Überwachungssysteme für kontinuierliche Assessment der Supplier-Security-Posture.\n• Contract Security Integration: Entwicklung standardisierter Security Clauses und SLAs, die in alle Lieferantenverträge integriert werden.\n• Incident Response Coordination: Aufbau von Joint-Incident-Response-Prozessen für koordinierte Reaktion auf Sicherheitsvorfälle in der Lieferkette.\n\n📊 Technology-Enabled Supplier Risk Management:\n• Vendor Risk Assessment Platforms: Implementierung automatisierter Plattformen für kontinuierliche Bewertung und Monitoring von Lieferantenrisiken.\n• Security Questionnaire Automation: Digitalisierung und Automatisierung von Security Assessments für effiziente Due-Diligence-Prozesse.\n• Real-Time Threat Intelligence: Integration von Threat-Intelligence-Feeds für proaktive Identifikation von Sicherheitsbedrohungen bei Lieferanten.\n• Blockchain-Based Attestation: Nutzung von Blockchain-Technologie für unveränderliche Dokumentation von Supplier-Security-Zertifizierungen und -Audits."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir Incident Management Controls (A.16) nutzen, um nicht nur auf Sicherheitsvorfälle zu reagieren, sondern auch strategische Cyber-Resilienz aufzubauen?",
        answer: "Modernes Incident Management transcendiert die reine Reaktion auf Sicherheitsvorfälle und wird zu einem strategischen Instrument für den Aufbau organisationaler Cyber-Resilienz. ADVISORI entwickelt Incident-Management-Frameworks, die aus jedem Sicherheitsvorfall lernen und die defensive Posture kontinuierlich stärken.\n\n🚨 Strategische Evolution des Incident Management:\n• Proactive Threat Hunting: Transformation von reaktiven zu proaktiven Sicherheitsoperationen durch kontinuierliche Bedrohungsjagd und -analyse.\n• Business Impact Minimization: Entwicklung von Incident-Response-Strategien, die Geschäftsunterbrechungen minimieren und Business Continuity sicherstellen.\n• Regulatory Compliance Integration: Automatisierte Compliance-Reporting-Mechanismen, die regulatorische Meldepflichten effizient erfüllen.\n• Stakeholder Communication Excellence: Strukturierte Kommunikationsprozesse für transparente und vertrauensbildende Kommunikation mit Kunden, Partnern und Regulatoren.\n\n🔄 ADVISORIs Resilience-by-Design Incident Management:\n• Continuous Learning Framework: Implementierung systematischer Lessons-Learned-Prozesse, die aus jedem Incident strategische Verbesserungen ableiten.\n• Automated Response Orchestration: Entwicklung intelligenter Playbooks mit automatisierten Responsen für bekannte Incident-Typen zur Minimierung der Mean Time to Recovery.\n• Cross-Functional Integration: Aufbau interdisziplinärer Incident-Response-Teams, die IT-Security, Legal, HR, und Communications nahtlos koordinieren.\n• Simulation and Tabletop Exercises: Regelmäßige Krisenübungen und Red-Team-Exercises zur kontinuierlichen Verbesserung der Incident-Response-Capabilities.\n\n📈 Strategic Value Creation durch Advanced Incident Management:\n• Threat Intelligence Generation: Transformation von Incident-Daten in actionable Threat Intelligence für proaktive Defensive Maßnahmen.\n• Risk Quantification: Entwicklung von Metriken zur quantitativen Bewertung von Cyber-Risiken basierend auf Incident-Erfahrungen.\n• Insurance and Legal Optimization: Nutzung dokumentierter Incident-Response-Capabilities für verbesserte Cyber-Insurance-Konditionen und Legal-Risk-Mitigation.\n• Competitive Advantage: Demonstration überlegener Cyber-Resilienz als Differentiator gegenüber Wettbewerbern und Vertrauensbildner bei Kunden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie integrieren wir Business Continuity Controls (A.17) strategisch in unsere Gesamtstrategie für operative Resilienz und Wachstum?",
        answer: "Business Continuity Management ist weit mehr als Disaster Recovery - es ist ein strategisches Framework für operative Exzellenz und nachhaltiges Wachstum. ADVISORI entwickelt integrierte BCM-Strategien, die nicht nur Kontinuität sicherstellen, sondern auch Wachstumschancen schaffen und Wettbewerbsvorteile generieren.\n\n🏢 Strategische Integration von Business Continuity in Corporate Strategy:\n• Resilience as Competitive Advantage: BCM wird zum strategischen Differentiator, der Kundenvertrauen stärkt und neue Marktchancen erschließt.\n• Growth Enablement: Robuste BCM-Frameworks ermöglichen aggressivere Wachstumsstrategien durch reduzierte operative Risiken bei Expansion und Innovation.\n• Stakeholder Confidence: Demonstrierte Business Continuity Capabilities erhöhen das Vertrauen von Investoren, Kunden und Partnern in die Zukunftsfähigkeit des Unternehmens.\n• Regulatory Readiness: Proaktive BCM-Strategien erfüllen nicht nur aktuelle, sondern auch zukünftige regulatorische Anforderungen in verschiedenen Jurisdiktionen.\n\n🔄 ADVISORIs Integrierte Resilienz-Architektur:\n• Dynamic Risk Assessment: Kontinuierliche Bewertung und Anpassung der BCM-Strategien basierend auf sich ändernden Geschäftsmodellen und Risikoprofilen.\n• Technology-Enabled Resilience: Nutzung von Cloud-Computing, Automatisierung und KI zur Schaffung selbstheilender und adaptiver Geschäftsprozesse.\n• Supply Chain Resilience: Integration von BCM-Anforderungen in die gesamte Lieferkette für Ende-zu-Ende-Kontinuitätssicherung.\n• Crisis Leadership Development: Aufbau von Krisenmanagement-Kompetenzen auf Führungsebene für effektive Entscheidungsfindung unter Stress.\n\n💼 Strategic Value Creation durch Advanced BCM:\n• Operational Efficiency: BCM-Prozesse identifizieren und eliminieren Single Points of Failure, was zu insgesamt effizienteren Operationen führt.\n• Innovation Acceleration: Robuste Kontinuitätsframeworks ermöglichen mutiges Experimentieren mit neuen Geschäftsmodellen und Technologien.\n• Market Expansion: Bewiesene Resilienz-Capabilities ermöglichen Expansion in risikobehaftete aber lukrative Märkte.\n• M&A Readiness: Starke BCM-Frameworks erleichtern Integrations- und Akquisitionsprozesse durch reduzierte operative Risiken."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
