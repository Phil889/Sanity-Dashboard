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
    console.log('Updating NIS2 Scope Assessment page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-scope-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-scope-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie beeinflusst die NIS2-Richtlinie unsere Lieferketten und Partnerschaften, und welche strategischen Entscheidungen müssen wir bezüglich Vendor-Management treffen?",
        answer: "Die NIS2-Richtlinie erweitert den traditionellen Compliance-Fokus von internen Systemen auf das gesamte Ökosystem von Lieferanten und Partnern. Dies erfordert fundamentale Überlegungen zur Lieferkettenarchitektur und kann strategische Neuausrichtungen in Vendor-Beziehungen erforderlich machen. Die Scope Assessment muss daher nicht nur interne Systeme, sondern auch externe Abhängigkeiten systematisch evaluieren.\n\n🔗 Lieferketten-Implikationen der NIS2-Richtlinie:\n• Erweiterte Verantwortlichkeit: Organisationen müssen Cybersicherheitsrisiken ihrer Lieferanten bewerten und managen, was traditionelle Vendor-Management-Prozesse transformiert.\n• Kaskadeffekte: NIS2-Compliance eines Lieferanten kann Auswirkungen auf die eigene Compliance-Position haben, insbesondere bei kritischen Services.\n• Kontraktuelle Anpassungen: Neue Sicherheitsanforderungen müssen in Lieferantenverträge integriert werden, was bestehende Vereinbarungen obsolet machen kann.\n• Due-Diligence-Intensivierung: Vendor-Onboarding wird komplexer und ressourcenintensiver, da Cybersicherheitsstandards detailliert geprüft werden müssen.\n\n⚖️ Strategische Vendor-Management-Entscheidungen:\n• Lieferanten-Segmentierung: Kategorisierung von Vendors basierend auf ihrer Kritikalität für NIS2-relevante Systeme und entsprechende Differenzierung der Sicherheitsanforderungen.\n• Make-or-Buy-Reevaluierung: Überprüfung, ob kritische Services internalisiert werden sollten, um Compliance-Kontrolle zu maximieren.\n• Geographical Considerations: Bewertung von Lieferanten in verschiedenen Jurisdiktionen bezüglich ihrer NIS2-Compliance-Fähigkeiten.\n• Technology Stack Implications: Überprüfung von Cloud-Services und SaaS-Lösungen bezüglich ihrer NIS2-Konformität.\n\n🛠️ ADVISORIs Lieferketten-Assessment-Methodik:\n• Dependency Mapping: Systematische Kartierung aller kritischen Vendor-Beziehungen und deren Auswirkungen auf NIS2-Scope.\n• Risk Categorization: Klassifikation von Lieferanten basierend auf Kritikalität, Ersetzbarkeit und Compliance-Status.\n• Contractual Framework Development: Entwicklung standardisierter Vertragsklauseln und SLAs für NIS2-konforme Vendor-Beziehungen.\n• Continuous Monitoring Strategy: Implementierung von Prozessen zur laufenden Überwachung der Lieferanten-Compliance und Risikobewertung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche organisatorischen Veränderungen sind für eine effektive NIS2-Compliance erforderlich und wie können wir diese Change-Prozesse strategisch gestalten?",
        answer: "NIS2-Compliance erfordert tiefgreifende organisatorische Transformation, die über technische Implementierungen hinausgeht und Governance-Strukturen, Rollen und Verantwortlichkeiten sowie Unternehmenskultur fundamental verändert. Eine strategische Gestaltung dieser Veränderungen kann Compliance-Erfolg sicherstellen und gleichzeitig organisatorische Reife fördern, die langfristige Wettbewerbsvorteile schafft.\n\n🏛️ Organisatorische Transformationsanforderungen durch NIS2:\n• Governance-Neustrukturierung: Etablierung klarer Cybersicherheitsverantwortlichkeiten auf Vorstandsebene und Integration in bestehende Risikomanagement-Strukturen.\n• Rollenklarstellung: Definition neuer Rollen wie Chief Information Security Officer (CISO) oder Cybersecurity Manager mit entsprechenden Befugnissen und Budgetverantwortung.\n• Prozessintegration: Verankerung von Cybersicherheitsaspekten in alle relevanten Geschäftsprozesse, von der Produktentwicklung bis zum Kundenservice.\n• Kulturwandel: Entwicklung einer sicherheitsbewussten Organisationskultur, die Cybersicherheit als Geschäftsenabler und nicht als Hindernis betrachtet.\n\n📋 Strategische Change-Management-Komponenten:\n• Executive Sponsorship: Sicherstellung sichtbarer und konsistenter Führungsunterstützung für die NIS2-Transformation auf allen Ebenen.\n• Capability Development: Systematischer Aufbau interner Cybersicherheitskompetenzen durch Training, Rekrutierung und Knowledge Transfer.\n• Communication Strategy: Entwicklung gezielter Kommunikationspläne für verschiedene Stakeholder-Gruppen zur Erklärung der Business-Relevanz von NIS2.\n• Performance Integration: Verankerung von Cybersicherheitszielen in Leistungsbewertungen und Anreizsystemen auf allen Organisationsebenen.\n\n🚀 Transformations-Enabler für nachhaltigen Erfolg:\n• Quick Wins Identification: Identifikation früher Erfolge, die Momentum für breitere organisatorische Veränderungen schaffen.\n• Cross-functional Integration: Aufbau interdisziplinärer Teams, die Cybersicherheit mit Business-Expertise verbinden.\n• Continuous Learning: Etablierung von Lernmechanismen, die organisatorische Anpassungsfähigkeit an sich ändernde Bedrohungslandschaften fördern.\n• Innovation Culture: Nutzung der NIS2-Transformation als Katalysator für breitere Innovationsinitiativen und digitale Reifegradverbesserung.\n\n💡 ADVISORIs organisatorischer Transformationsansatz:\n• Maturity Assessment: Bewertung der aktuellen organisatorischen Cybersicherheitsreife und Identifikation spezifischer Entwicklungsbedarfe.\n• Tailored Operating Model: Entwicklung eines maßgeschneiderten Betriebsmodells, das NIS2-Anforderungen mit organisatorischen Realitäten und Zielen verbindet.\n• Change Readiness Evaluation: Systematische Bewertung der Veränderungsbereitschaft und -fähigkeit verschiedener Organisationsbereiche.\n• Success Measurement Framework: Etablierung von KPIs und Metriken zur Messung des Transformationserfolgs und kontinuierlichen Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir die Erkenntnisse aus der NIS2 Scope Assessment nutzen, um unsere IT-Infrastruktur und Digitalisierungsstrategie zu optimieren?",
        answer: "Die NIS2 Scope Assessment liefert wertvolle Einblicke in kritische IT-Systeme, Datenflüsse und Infrastrukturen, die als strategische Grundlage für umfassende IT-Modernisierung und beschleunigte Digitalisierung genutzt werden können. Diese Erkenntnisse ermöglichen datengetriebene Entscheidungen über Technologie-Investitionen und schaffen Synergien zwischen Compliance und Innovation.\n\n🔍 IT-Infrastruktur-Einblicke aus der Scope Assessment:\n• Asset Inventory und Criticality: Vollständige Inventarisierung aller IT-Assets mit präziser Bewertung ihrer Geschäftskritikalität und Interdependenzen.\n• Architecture Gaps: Identifikation veralteter Systeme, Sicherheitslücken und Architektur-Schwächen, die sowohl Compliance als auch Performance beeinträchtigen.\n• Data Flow Mapping: Detaillierte Kartierung von Datenflüssen, die Optimierungspotenziale und Redundanzen aufdeckt.\n• Security Posture Evaluation: Umfassende Bewertung des aktuellen Sicherheitsstatus als Basis für strategische Modernisierungsentscheidungen.\n\n🚀 Digitalisierungsstrategie-Optimierung durch NIS2-Erkenntnisse:\n• Cloud-First Strategy: Nutzung der Compliance-Anforderungen als Katalysator für Migration zu sicheren, skalierbaren Cloud-Architekturen.\n• API-Economy Enablement: Entwicklung sicherer API-Strategien, die sowohl NIS2-Compliance als auch digitale Geschäftsmodelle unterstützen.\n• Data Strategy Enhancement: Aufbau robuster Data-Governance-Frameworks, die regulatorische Anforderungen mit Analytics- und KI-Initiativen verbinden.\n• Automation Acceleration: Implementierung automatisierter Sicherheits- und Compliance-Prozesse als Grundlage für breitere Digitalisierungsautomatisierung.\n\n💰 ROI-Maximierung durch integrierte IT-Modernisierung:\n• Dual-Purpose Investments: Identifikation von IT-Investitionen, die sowohl Compliance als auch Business-Innovation vorantreiben.\n• Technical Debt Reduction: Nutzung der NIS2-Compliance als Rechtfertigung für längst überfällige System-Modernisierungen.\n• Operational Excellence: Implementierung von IT-Service-Management-Praktiken, die Sicherheit und Effizienz gleichermaßen fördern.\n• Innovation Platform: Aufbau moderner IT-Plattformen, die als Fundament für zukünftige digitale Initiativen dienen.\n\n🔧 ADVISORIs IT-Strategieoptimierung:\n• Technology Roadmap Integration: Verbindung von NIS2-Compliance-Anforderungen mit strategischen IT-Modernisierungszielen in einer kohärenten Roadmap.\n• Architecture Optimization: Design zukunftssicherer IT-Architekturen, die Sicherheit, Skalierbarkeit und Agilität integrieren.\n• Vendor Strategy Alignment: Optimierung der Technology-Vendor-Landschaft basierend auf Compliance-, Performance- und Innovationskriterien.\n• Digital Transformation Acceleration: Nutzung der NIS2-Implementation als Sprungbrett für beschleunigte Digitalisierungsinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt die NIS2 Scope Assessment bei der Vorbereitung auf zukünftige regulatorische Entwicklungen und wie können wir Regulatory Agility aufbauen?",
        answer: "Die NIS2 Scope Assessment fungiert als strategisches Fundament für die Entwicklung organisatorischer Regulatory Agility – der Fähigkeit, schnell und effektiv auf neue regulatorische Anforderungen zu reagieren. Durch den Aufbau robuster Assessment-Capabilities und adaptiver Compliance-Frameworks können Organisationen nicht nur NIS2-konform werden, sondern sich auch optimal für die sich rapidly entwickelnde regulatorische Landschaft positionieren.\n\n🔮 Antizipation zukünftiger regulatorischer Entwicklungen:\n• Regulatory Convergence: NIS2 ist Teil eines breiteren Trends zu harmonisierten Cybersicherheitsregulierungen (DORA, CRA, AI Act), dessen Verstehen strategische Vorteile schafft.\n• International Alignment: Entwicklungen in anderen Jurisdiktionen (US NIST Framework, ISO 27001 Updates) beeinflussen europäische Standards und sollten proaktiv berücksichtigt werden.\n• Technology Evolution Impact: Neue Technologien wie KI, IoT und Quantum Computing werden zusätzliche regulatorische Frameworks erforderlich machen.\n• Sector-Specific Extensions: Erwartung branchenspezifischer Ergänzungen und Präzisierungen der NIS2-Anforderungen basierend auf Implementierungserfahrungen.\n\n🏗️ Aufbau von Regulatory Agility:\n• Flexible Compliance Architecture: Entwicklung modularer Compliance-Frameworks, die schnell an neue Anforderungen adaptiert werden können.\n• Continuous Monitoring Capabilities: Implementierung von Systemen zur laufenden Überwachung regulatorischer Entwicklungen und deren Geschäftsauswirkungen.\n• Cross-Regulatory Competency: Aufbau interner Expertise, die regulatorische Interdependenzen versteht und ganzheitliche Compliance-Strategien entwickeln kann.\n• Stakeholder Network: Etablierung von Beziehungen zu Regulatoren, Branchenverbänden und Beratungsorganisationen für frühzeitige Einblicke.\n\n⚡ Strategische Vorteile einer agilen Regulatory Posture:\n• First-Mover Benefits: Frühzeitige Adoption neuer Standards schafft Wettbewerbsvorteile und Marktführerschaft.\n• Cost Optimization: Proaktive Compliance-Vorbereitung reduziert Last-Minute-Implementierungskosten erheblich.\n• Innovation Enablement: Verstehen regulatorischer Trends ermöglicht die Entwicklung konformer Innovationen.\n• Stakeholder Confidence: Regulatory Leadership stärkt Vertrauen bei Kunden, Investoren und Partnern.\n\n🎯 ADVISORIs Regulatory Agility Framework:\n• Predictive Regulatory Intelligence: Systematische Analyse globaler regulatorischer Trends und deren Wahrscheinlichkeit der EU-Implementierung.\n• Adaptive Governance Design: Entwicklung von Governance-Strukturen, die flexibel auf neue regulatorische Anforderungen reagieren können.\n• Scenario Planning: Aufbau von Planungskapazitäten für verschiedene regulatorische Entwicklungsszenarien.\n• Continuous Capability Building: Etablierung von Lernprogrammen, die organisatorische Regulatory Competence kontinuierlich weiterentwickeln."
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
