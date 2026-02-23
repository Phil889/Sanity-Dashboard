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
    console.log('Updating KRITIS page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-kritis' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-kritis" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können wir als KRITIS-Betreiber von der Konvergenz zwischen KRITIS-Verordnung und NIS2-Richtlinie profitieren und Synergien nutzen?",
        answer: "Die Konvergenz zwischen KRITIS-Verordnung und NIS2-Richtlinie bietet strategische Gelegenheiten für Betreiber kritischer Infrastrukturen, durch integrierte Compliance-Ansätze Effizienzgewinne zu erzielen und gleichzeitig ihre Sicherheitsposture zu stärken. Für C-Level-Führungskräfte ist es entscheidend, diese regulatorischen Frameworks nicht als separate Anforderungen, sondern als komplementäre Elemente einer ganzheitlichen Cyber-Resilienz-Strategie zu verstehen.\n\n🔄 Strategische Synergien zwischen KRITIS und NIS2:\n• Harmonisierte Risikomanagement-Frameworks: Entwicklung integrierter Ansätze, die sowohl KRITIS- als auch NIS2-Anforderungen durch ein einheitliches Risikomanagement-Framework adressieren.\n• Optimierte Meldeprozesse: Koordination von Incident-Reporting-Prozessen für beide Regulierungen zur Vermeidung von Doppelarbeit und Inkonsistenzen.\n• Gemeinsame Governance-Strukturen: Etablierung von Governance-Mechanismen, die beide regulatorischen Frameworks unter einem einheitlichen Führungsansatz integrieren.\n• Supply Chain Security Integration: Nutzung der NIS2-Supply Chain-Anforderungen zur Stärkung der KRITIS-spezifischen Lieferkettenresilienz.\n\n🎯 Operative Effizienzgewinne durch integrierte Compliance:\n• Einheitliche Sicherheitsarchitekturen: Design von Cybersecurity-Lösungen, die simultanean KRITIS- und NIS2-Anforderungen erfüllen und dabei Investitionssynergien schaffen.\n• Konsolidierte Audit-Prozesse: Entwicklung von Audit-Frameworks, die beide Regulierungen abdecken und Prüfungsaufwände optimieren.\n• Shared Training und Awareness: Implementation gemeinsamer Schulungsprogramme, die sowohl KRITIS- als auch NIS2-spezifische Anforderungen adressieren.\n• Cross-regulatory Innovation: Nutzung von Innovationsräumen in beiden Frameworks zur Entwicklung zukunftsweisender Sicherheitslösungen.\n\n🚀 ADVISORIs integrierter Compliance-Ansatz:\n• Regulatory Mapping und Gap-Analyse: Comprehensive Analyse der Überschneidungen und Unterschiede zwischen beiden Frameworks zur Identifikation von Optimierungspotenzialen.\n• Unified Implementation Roadmap: Entwicklung koordinierter Implementierungspläne, die beide Regulierungen simultan addressieren und Ressourceneffizienz maximieren.\n• Cross-framework Risk Assessment: Integration beider regulatorischen Perspektiven in einheitliche Risikobewertungsprozesse.\n• Future-proof Compliance Architecture: Design anpassungsfähiger Compliance-Systeme, die auch zukünftige regulatorische Entwicklungen antizipieren und integrieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche strategischen Überlegungen sind bei der Entwicklung einer KRITIS-konformen Zero Trust-Architektur für kritische Infrastrukturen zu beachten?",
        answer: "Die Implementierung einer Zero Trust-Architektur in kritischen Infrastrukturen unter KRITIS-Compliance erfordert eine fundamentale Neubetrachtung traditioneller Sicherheitsparadigmen. Für Führungskräfte bedeutet dies, ein Sicherheitsmodell zu entwickeln, das sowohl die besonderen Anforderungen kritischer Systeme als auch die Prinzipien kontinuierlicher Verifikation und minimaler Privilegien harmonisch integriert.\n\n🔐 KRITIS-spezifische Zero Trust-Designprinzipien:\n• Critical Asset Segmentation: Entwicklung granularer Mikrosegmentierung, die kritische OT-Systeme von weniger kritischen IT-Systemen isoliert, ohne dabei operative Effizienz zu beeinträchtigen.\n• Continuous Authentication for Critical Systems: Implementierung kontinuierlicher Authentifizierungsmechanismen, die die besonderen Anforderungen industrieller Kontrolsysteme und deren Performance-Kritikalität berücksichtigen.\n• Resilient Identity Management: Aufbau redundanter und hochverfügbarer Identity-Management-Systeme, die auch bei partiellen Systemausfällen die Zugangskontrolle zu kritischen Systemen gewährleisten.\n• Context-aware Access Controls: Integration von operationalen Kontextinformationen (Betriebszustand, Notfallsituationen, Wartungsmodi) in Zugangsentscheidungen.\n\n🛡️ Operational Continuity in Zero Trust-Umgebungen:\n• Emergency Access Protocols: Entwicklung sicherer Notfallzugangsverfahren, die auch bei Zero Trust-Systemausfällen den Zugang zu kritischen Systemen ermöglichen.\n• Performance-optimized Security: Design von Zero Trust-Komponenten, die minimale Latenz und maximale Verfügbarkeit für zeitkritische Steuerungssysteme gewährleisten.\n• Legacy System Integration: Strategien zur Integration älterer kritischer Systeme in Zero Trust-Frameworks ohne komplette Systemerneuerung.\n• Incident Response Integration: Nahtlose Integration von Zero Trust-Monitoring in KRITIS-konforme Incident Response-Prozesse.\n\n🌐 ADVISORIs Zero Trust-Enablement für KRITIS:\n• Risk-based Zero Trust Design: Entwicklung von Zero Trust-Architekturen, die Sicherheitsmaßnahmen proportional zur Kritikalität der geschützten Assets skalieren.\n• Hybrid Trust Models: Implementation flexibler Trust-Modelle, die zwischen verschiedenen Vertrauensebenen für unterschiedliche Systemkategorien wechseln können.\n• Automated Policy Management: Entwicklung intelligenter Systeme zur automatischen Anpassung von Zero Trust-Policies basierend auf operationalen Anforderungen und Bedrohungslagen.\n• Comprehensive Testing Frameworks: Etablierung spezialisierter Testing-Verfahren zur Validierung von Zero Trust-Implementierungen in kritischen Umgebungen ohne Beeinträchtigung der Betriebssicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir als kritische Infrastruktur eine effektive Cyber Threat Intelligence-Strategie entwickeln und dabei KRITIS-spezifische Bedrohungen adressieren?",
        answer: "Eine effektive Cyber Threat Intelligence (CTI)-Strategie für KRITIS-Betreiber muss über generische Bedrohungsinformationen hinausgehen und spezifisch auf die einzigartigen Risikoprofile kritischer Infrastrukturen zugeschnitten sein. Die Herausforderung liegt darin, actionable Intelligence zu generieren, die sowohl strategische Entscheidungsfindung als auch operative Sicherheitsmaßnahmen informiert und dabei die besonderen Schutzbedürfnisse kritischer Systeme berücksichtigt.\n\n🎯 KRITIS-fokussierte Threat Intelligence-Dimensionen:\n• Sector-specific Threat Landscapes: Entwicklung detaillierter Bedrohungsprofile für spezifische KRITIS-Sektoren unter Berücksichtigung von Angreiferkapazitäten, Motivationen und bevorzugten Angriffsvektoren.\n• Geopolitical Risk Integration: Integration geopolitischer Analysen zur Antizipation staatlich unterstützter Bedrohungen gegen kritische Infrastrukturen.\n• Supply Chain Threat Intelligence: Spezifische Fokussierung auf Bedrohungen in komplexen Lieferketten kritischer Infrastrukturen einschließlich Third-Party- und Fourth-Party-Risiken.\n• Operational Technology (OT) Threat Analysis: Entwicklung spezialisierter Intelligence-Kapazitäten für industrielle Kontrollsysteme und SCADA-Umgebungen.\n\n🔍 Strategische CTI-Integration in KRITIS-Operations:\n• Executive Threat Briefings: Entwicklung C-Level-gerechter Threat Intelligence-Berichte, die komplexe Bedrohungen in strategische Geschäftsrisiken übersetzen.\n• Predictive Threat Modeling: Implementierung von Modellen zur Vorhersage wahrscheinlicher Angriffsentwicklungen gegen kritische Infrastrukturen.\n• Threat-informed Defense: Integration von Threat Intelligence in die strategische Planung von Sicherheitsinvestitionen und -prioritäten.\n• Crisis Intelligence Support: Entwicklung beschleunigter Intelligence-Prozesse zur Unterstützung von Incident Response und Krisenmanagement.\n\n🌟 ADVISORIs strategischer CTI-Ansatz für kritische Infrastrukturen:\n• Multi-source Intelligence Fusion: Integration verschiedener Intelligence-Quellen (kommerziell, governmental, Open Source, proprietär) zu einem kohärenten Bedrohungsbild.\n• Automated Threat Correlation: Implementierung von AI/ML-gestützten Systemen zur automatischen Korrelation und Priorisierung von Bedrohungsinformationen.\n• Collaborative Intelligence Networks: Aufbau von Austauschbeziehungen mit anderen KRITIS-Betreibern und Sicherheitsbehörden für erweiterte Threat Visibility.\n• Custom Intelligence Development: Entwicklung proprietärer Intelligence-Kapazitäten speziell für die einzigartigen Bedrohungsprofile Ihrer kritischen Infrastruktur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen strategischen Überlegungen sollten bei der Entwicklung einer KRITIS-Roadmap für die nächsten 5-10 Jahre berücksichtigt werden?",
        answer: "Die Entwicklung einer langfristigen KRITIS-Roadmap erfordert strategische Weitsicht, die über aktuelle regulatorische Anforderungen hinausgeht und zukünftige technologische, geopolitische und gesellschaftliche Entwicklungen antizipiert. Für C-Level-Führungskräfte ist es entscheidend, eine adaptive Strategie zu entwickeln, die sowohl Planungssicherheit als auch Flexibilität für unvorhersehbare Entwicklungen bietet.\n\n🔮 Zukunftsorientierte Strategiedimensionen für KRITIS:\n• Technological Evolution Anticipation: Berücksichtigung emergierender Technologien (Quantum Computing, 6G, Extended Reality) und deren potenzielle Auswirkungen auf kritische Infrastrukturen und Sicherheitsanforderungen.\n• Regulatory Evolution Modeling: Antizipation zukünftiger regulatorischer Entwicklungen auf nationaler und europäischer Ebene sowie deren Integration in langfristige Compliance-Strategien.\n• Climate Change Adaptation: Integration von Klimawandel-bedingten Risiken in die langfristige Resilienz-Planung kritischer Infrastrukturen.\n• Demographic und Social Changes: Berücksichtigung gesellschaftlicher Veränderungen (Urbanisierung, demografischer Wandel, veränderte Arbeitsmodelle) in der strategischen Infrastrukturplanung.\n\n🚀 Strategische Capability-Entwicklung für die Zukunft:\n• Next-Generation Workforce: Entwicklung von Talentstrategien für zukünftige Kompetenzanforderungen in Cybersecurity, OT-Security und Hybrid-Umgebungen.\n• Adaptive Infrastructure Design: Aufbau flexibler Infrastrukturen, die sich an veränderte Bedrohungslagen und technologische Entwicklungen anpassen können.\n• Innovation Ecosystem Development: Etablierung von Innovationspartnerschaften und -prozessen zur kontinuierlichen Modernisierung der Sicherheitskapazitäten.\n• Resilience-as-a-Service Models: Entwicklung skalierbarer Resilienz-Services, die sowohl interne Anforderungen erfüllen als auch externe Partnerschaften ermöglichen.\n\n🎯 ADVISORIs langfristige KRITIS-Strategieentwicklung:\n• Scenario Planning und Stress Testing: Entwicklung multipler Zukunftsszenarien und regelmäßige Validierung der strategischen Robustheit unter verschiedenen Bedingungen.\n• Investment Portfolio Optimization: Strategische Allokation von Sicherheitsinvestitionen zur Balance zwischen aktuellen Anforderungen und zukünftigen Kapazitäten.\n• Strategic Partnership Development: Aufbau langfristiger Kooperationen mit Technologieanbietern, anderen KRITIS-Betreibern und Forschungseinrichtungen.\n• Continuous Strategy Evolution: Implementation agiler Strategieprozesse, die regelmäßige Anpassung und Optimierung der langfristigen Roadmap ermöglichen."
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
