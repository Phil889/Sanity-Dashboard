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
    console.log('Updating NIS2 Security Measures page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-security-measures' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-security-measures" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie gewährleistet ADVISORI eine kosteneffiziente NIS2-Implementierung ohne Kompromisse bei der Sicherheitsqualität?",
        answer: "Kosteneffizienz bei NIS2-Implementierung erfordert intelligente Strategien, die Sicherheitsexzellenz mit wirtschaftlicher Optimierung verbinden. ADVISORI entwickelt maßgeschneiderte Ansätze, die durch clevere Architekturentscheidungen, Automatisierung und Synergieeffekte maximalen Schutz bei minimalen Gesamtkosten erzielen.\n\n💰 Strategische Kostenoptimierung:\n• Risk-Based Investment Allocation: Priorisierung von Sicherheitsinvestitionen basierend auf quantifizierten Risikobewertungen, wodurch Budget auf die kritischsten Schutzmaßnahmen fokussiert wird.\n• Multi-Purpose Security Solutions: Implementierung von Sicherheitslösungen, die mehrere NIS2-Anforderungen gleichzeitig erfüllen und Redundanzen eliminieren.\n• Cloud-First Cost Models: Nutzung skalierbarer Cloud-Sicherheitsdienste mit Pay-as-you-Scale-Modellen statt kapitalintensiver On-Premise-Investitionen.\n• Automation-Driven Efficiency: Reduzierung operativer Kosten durch Automatisierung routinemäßiger Sicherheitsaufgaben und Compliance-Prozesse.\n\n⚡ Intelligente Ressourcennutzung:\n• Shared Security Services: Entwicklung zentralisierter Sicherheitsdienste, die von verschiedenen Geschäftsbereichen gemeinsam genutzt werden können.\n• Legacy System Integration: Optimierung bestehender Sicherheitsinfrastrukturen durch intelligente Integration statt kompletter Ersetzung.\n• Vendor Consolidation: Strategische Reduzierung der Anzahl von Sicherheitsanbietern zur Erzielung von Volume-Discounts und vereinfachter Verwaltung.\n• Skills-Based Resource Planning: Optimale Allokation interner und externer Expertise zur Minimierung von Beratungskosten.\n\n🎯 ADVISORIs Value Engineering:\n• Total Cost of Ownership Optimization: Ganzheitliche Betrachtung aller direkten und indirekten Kosten über den gesamten Lebenszyklus der Sicherheitslösungen.\n• Phased Implementation Strategy: Stufenweise Umsetzung zur Verteilung der Investitionen über mehrere Budgetzyklen bei kontinuierlicher Risikoreduktion.\n• Business Case Development: Entwicklung überzeugender Business Cases, die nicht nur Compliance-Nutzen, sondern auch operative Effizienzgewinne demonstrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt Supply Chain Security in der NIS2-Strategie und wie managt ADVISORI komplexe Lieferanten-Ökosysteme?",
        answer: "Supply Chain Security bildet einen kritischen Pfeiler der NIS2-Strategie, da moderne Unternehmen zunehmend von komplexen Lieferantennetzwerken abhängig sind. ADVISORI entwickelt umfassende Supply Chain Security-Programme, die nicht nur regulatorische Anforderungen erfüllen, sondern auch die Resilienz des gesamten Geschäftsökosystems stärken.\n\n🔗 Strategic Supply Chain Risk Management:\n• Third-Party Risk Assessment: Systematische Bewertung aller kritischen Lieferanten und Partner mit kontinuierlicher Überwachung ihrer Cybersicherheitsposition und Compliance-Status.\n• Tiered Security Requirements: Entwicklung differenzierter Sicherheitsanforderungen basierend auf der Kritikalität und dem Risikoprofil verschiedener Lieferantenkategorien.\n• Contractual Security Integration: Integration umfassender Cybersicherheitsklauseln in Lieferantenverträge mit klaren Service Level Agreements und Haftungsregeln.\n• Supply Chain Mapping: Vollständige Transparenz über mehrstufige Lieferantenketten zur Identifikation von Risiko-Konzentrationen und Single Points of Failure.\n\n🛡️ Resilience-Focused Ecosystem Design:\n• Supplier Diversification Strategies: Strategische Diversifizierung kritischer Lieferanten zur Reduzierung von Abhängigkeiten und Erhöhung der Supply Chain-Resilienz.\n• Incident Response Coordination: Integration von Lieferanten in Incident Response-Pläne mit koordinierten Kommunikations- und Eskalationsprozessen.\n• Continuous Monitoring Programs: Implementierung kontinuierlicher Überwachungssysteme für die Cybersicherheitsperformance kritischer Lieferanten.\n• Recovery and Continuity Planning: Entwicklung alternativer Sourcing-Strategien und Notfallpläne für kritische Lieferantenausfälle.\n\n🎯 ADVISORIs Ecosystem Excellence:\n• Digital Supply Chain Security: Implementierung moderner Technologien wie Blockchain und IoT-Security für durchgängige Supply Chain-Transparenz.\n• Collaborative Security Programs: Entwicklung gemeinsamer Sicherheitsinitiativen mit Schlüssellieferanten zur Stärkung des gesamten Ökosystems.\n• Regulatory Coordination: Unterstützung bei der Navigation komplexer regulatorischer Anforderungen across verschiedene Jurisdiktionen und Branchen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie entwickelt ADVISORI eine zukunftssichere NIS2-Sicherheitsstrategie, die auch aufkommende Bedrohungen und Technologien berücksichtigt?",
        answer: "Eine zukunftssichere NIS2-Sicherheitsstrategie muss nicht nur aktuelle regulatorische Anforderungen erfüllen, sondern auch auf zukünftige Bedrohungslandschaften und technologische Entwicklungen vorbereitet sein. ADVISORI entwickelt adaptive Sicherheitsstrategien, die Resilienz gegenüber noch unbekannten Risiken schaffen und gleichzeitig Innovation ermöglichen.\n\n🔮 Future-Ready Security Architecture:\n• Emerging Threat Intelligence: Kontinuierliche Analyse globaler Bedrohungstrends und Integration von Threat Intelligence in strategische Sicherheitsplanung zur proaktiven Risikomitigation.\n• Technology Roadmap Integration: Alignment der Sicherheitsstrategie mit technologischen Entwicklungsroadmaps zur nahtlosen Integration neuer Technologien wie Quantum Computing, IoT, und AI.\n• Adaptive Security Frameworks: Entwicklung flexibler Sicherheitsarchitekturen, die sich automatisch an neue Bedrohungen und Geschäftsanforderungen anpassen können.\n• Zero-Day Preparedness: Etablierung von Sicherheitssystemen, die auch gegen bisher unbekannte Angriffsvektoren schützen können.\n\n⚡ Innovation-Enabling Security:\n• Secure Innovation Labs: Aufbau kontrollierter Umgebungen für sichere Erprobung neuer Technologien ohne Gefährdung der Produktionsumgebung.\n• DevSecOps Evolution: Kontinuierliche Weiterentwicklung von Development-Security-Practices zur Integration modernster Sicherheitsstandards in Innovationsprozesse.\n• Quantum-Ready Cryptography: Proaktive Vorbereitung auf Quantum Computing durch Migration zu quantum-resistenten Verschlüsselungsverfahren.\n• AI Security Integration: Nutzung künstlicher Intelligenz sowohl als Sicherheitstool als auch als Schutzgegenstand vor AI-basierten Angriffen.\n\n🎯 ADVISORIs Anticipatory Approach:\n• Scenario Planning: Entwicklung multipler Sicherheitsszenarien basierend auf verschiedenen Technologie- und Bedrohungsentwicklungen.\n• Continuous Evolution Programs: Etablierung systematischer Prozesse zur kontinuierlichen Anpassung der Sicherheitsstrategie an veränderte Rahmenbedingungen.\n• Innovation-Security Balance: Optimierung zwischen Sicherheitsanforderungen und Innovationsgeschwindigkeit für nachhaltige Wettbewerbsfähigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie misst und optimiert ADVISORI kontinuierlich die Effektivität von NIS2-Sicherheitsmaßnahmen für nachhaltigen Geschäftserfolg?",
        answer: "Die kontinuierliche Messung und Optimierung von NIS2-Sicherheitsmaßnahmen ist entscheidend für nachhaltigen Geschäftserfolg und regulatory compliance. ADVISORI implementiert datengetriebene Performance-Management-Systeme, die nicht nur Sicherheitseffektivität messen, sondern auch den Business Value von Cybersicherheitsinvestitionen demonstrieren.\n\n📊 Comprehensive Security Metrics:\n• Business-Aligned KPIs: Entwicklung von Sicherheitskennzahlen, die direkt mit Geschäftszielen verknüpft sind, wie beispielsweise Geschäftskontinuität, Kundenvertrauen und Operational Excellence.\n• Risk Reduction Quantification: Messbare Darstellung der Risikoreduktion durch implementierte Sicherheitsmaßnahmen mit quantifizierten finanziellen Auswirkungen.\n• Compliance Coverage Metrics: Kontinuierliche Überwachung des NIS2-Compliance-Status mit automatisiertem Reporting und Trend-Analysen.\n• Security ROI Measurement: Präzise Berechnung des Return on Investment für verschiedene Sicherheitsinitiativen zur optimierten Budgetallokation.\n\n⚡ Real-Time Security Intelligence:\n• Security Operations Dashboards: Echtzeitüberwachung kritischer Sicherheitsparameter mit Executive-Level-Dashboards für strategische Entscheidungsfindung.\n• Predictive Analytics: Nutzung von Machine Learning zur Vorhersage potenzieller Sicherheitsrisiken und proaktiven Optimierung von Schutzmaßnahmen.\n• Benchmarking Programs: Regelmäßiger Vergleich mit Industry Best Practices und Peer-Organisationen zur kontinuierlichen Verbesserung.\n• Automated Optimization: KI-gestützte Optimierung von Sicherheitsparametern basierend auf Performance-Daten und Threat Intelligence.\n\n🎯 ADVISORIs Continuous Improvement:\n• Adaptive Security Strategies: Dynamische Anpassung der Sicherheitsstrategie basierend auf Performance-Daten und veränderten Geschäftsanforderungen.\n• Innovation Integration: Systematische Integration neuer Sicherheitstechnologien und -methoden basierend auf nachgewiesener Effektivität.\n• Stakeholder Value Communication: Regelmäßige Kommunikation des Business Value von Cybersicherheitsinvestitionen an verschiedene Stakeholder-Gruppen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
