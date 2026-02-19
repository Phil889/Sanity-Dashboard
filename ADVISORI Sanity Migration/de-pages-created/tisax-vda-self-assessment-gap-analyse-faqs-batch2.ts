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
    console.log('Updating TISAX VDA Self-Assessment Gap Analyse page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'tisax-vda-self-assessment-gap-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "tisax-vda-self-assessment-gap-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Herausforderungen adressiert ADVISORI bei der TISAX Gap Analyse in Bezug auf die Integration neuer Automotive-Technologien wie Connected Car und Autonomous Driving?",
        answer: "Die Integration neuer Automotive-Technologien bringt fundamentale Veränderungen in der Informationssicherheitslandschaft mit sich, die über traditionelle VDA ISA-Assessments hinausgehen. Connected Car, Autonomous Driving und Over-the-Air Updates schaffen neue Angriffsvektoren und erfordern erweiterte TISAX-Compliance-Strategien. ADVISORI hat spezialisierte Methoden entwickelt, um diese emerging Technologies in die Gap-Analyse zu integrieren und zukunftssichere Sicherheitsarchitekturen zu gestalten.\n\n🚗 Neue Technologie-spezifische Sicherheitsherausforderungen:\n• Vehicle-to-Everything (V2X) Kommunikation: Bewertung der Sicherheitsrisiken bei der Vernetzung von Fahrzeugen mit Infrastruktur, anderen Fahrzeugen und Cloud-Services unter Berücksichtigung der VDA ISA Kontrollziele.\n• Over-the-Air (OTA) Update Security: Entwicklung sicherer Update-Mechanismen für Fahrzeugsoftware mit entsprechenden TISAX-konformen Autorisierungs- und Integritätsprüfungen.\n• Sensor Data Protection: Schutz hochsensibler Fahrzeug- und Umgebungsdaten von Kameras, LiDAR und anderen Sensoren entsprechend den VDA ISA Datenklassifizierungsanforderungen.\n• Edge Computing Integration: Sicherheitsarchitekturen für verteilte Automotive-Computing-Umgebungen mit lokaler Datenverarbeitung und Cloud-Anbindung.\n\n🔬 ADVISORI's Advanced Technology Assessment Framework:\n• Future-Ready Gap Analysis: Erweiterte Bewertungsmethodik, die traditionelle VDA ISA-Kontrollziele um technologiespezifische Sicherheitsanforderungen für Connected und Autonomous Vehicles ergänzt.\n• Threat Modeling für Automotive Innovation: Systematische Identifikation und Bewertung neuer Bedrohungsszenarien, die durch Connected Car Technologien entstehen, und deren Integration in die TISAX-Compliance-Strategie.\n• Regulatory Compliance Mapping: Berücksichtigung kommender Automotive-Cybersecurity-Regulatorik (UNECE WP.29, ISO/SAE 21434) und deren Auswirkungen auf TISAX-Anforderungen.\n• Technology Integration Roadmap: Entwicklung stufenweiser Implementierungsstrategien, die sowohl aktuelle TISAX-Compliance als auch Readiness für zukünftige Automotive-Technologien sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gewährleistet ADVISORI bei der TISAX Gap Analyse die angemessene Berücksichtigung branchenspezifischer Compliance-Anforderungen jenseits der VDA ISA Standards?",
        answer: "Die Automotive-Industrie unterliegt einem komplexen Geflecht aus branchenspezifischen Regulierungen, OEM-spezifischen Anforderungen und internationalen Standards, die über die VDA ISA-Basis hinausgehen. Eine isolierte TISAX-Betrachtung kann zu Compliance-Lücken und ineffizienten Parallelstrukturen führen. ADVISORI entwickelt integrierte Assessment-Ansätze, die TISAX-Compliance nahtlos mit anderen kritischen Automotive-Compliance-Anforderungen harmonisieren.\n\n🔄 Integrierte Multi-Standard Compliance-Herausforderungen:\n• ISO/TS 16949 und IATF 16949: Integration von Qualitätsmanagementsystem-Anforderungen mit TISAX-Informationssicherheitskontrollen für ganzheitliche Automotive-Excellence.\n• UNECE WP.29 Cybersecurity: Harmonisierung von TISAX-Anforderungen mit den neuen UN-Regelungen für Cybersecurity Management Systems (CSMS) in Fahrzeugen.\n• OEM-spezifische Security Requirements: Berücksichtigung individueller Sicherheitsanforderungen verschiedener OEMs (BMW, Mercedes, VW, etc.) und deren Integration in eine einheitliche TISAX-Strategie.\n• Export Control und ITAR: Bewertung der Auswirkungen von Exportkontrollbestimmungen auf TISAX-Compliance bei internationalen Automotive-Projekten.\n\n🎯 ADVISORI's Holistic Compliance Integration Approach:\n• Multi-Standard Mapping Matrix: Entwicklung einer umfassenden Übersichtsmatrix, die TISAX VDA ISA-Kontrollziele mit anderen relevanten Automotive-Standards verknüpft und Synergien identifiziert.\n• Harmonisierte Audit-Strategien: Design integrierter Assessment-Prozesse, die multiple Compliance-Anforderungen parallel bewerten und Audit-Effizienz maximieren.\n• Cross-Compliance Risk Assessment: Systematische Bewertung von Compliance-Interdependenzen und deren Auswirkungen auf Geschäftsprozesse und Lieferantenbeziehungen.\n• Unified Governance Framework: Entwicklung einheitlicher Governance-Strukturen, die TISAX-Compliance nahtlos in bestehende Automotive-Compliance-Programme integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Rolle spielt die Supply-Chain-Sicherheit in ADVISORI's TISAX Gap Analyse und wie wird die Compliance-Kaskadierung zu Sublieferanten strukturiert?",
        answer: "Die Automotive Supply-Chain ist eine der komplexesten industriellen Wertschöpfungsketten mit mehreren Tier-Ebenen und globaler Vernetzung. TISAX-Compliance endet nicht an den Unternehmensgrenzen, sondern muss systematisch durch die gesamte Lieferkette kaskadiert werden. ADVISORI hat spezialisierte Methoden entwickelt, um Supply-Chain-Risiken zu bewerten und strukturierte Compliance-Kaskadierungsstrategien zu implementieren, die sowohl praktikabel als auch wirksam sind.\n\n🔗 Supply-Chain TISAX-Komplexitäten:\n• Multi-Tier Supplier Management: Koordination von TISAX-Anforderungen über mehrere Lieferantenebenen hinweg ohne direkte Kontrollmöglichkeiten über Tier-2 und Tier-3 Lieferanten.\n• Global Sourcing Challenges: Bewertung und Management von TISAX-Compliance bei internationalen Lieferanten mit unterschiedlichen rechtlichen und kulturellen Rahmenbedingungen.\n• Information Flow Security: Sicherstellung des Schutzes kritischer Entwicklungs- und Produktionsinformationen entlang der gesamten Wertschöpfungskette.\n• Supplier Onboarding und Monitoring: Entwicklung effizienter Prozesse für TISAX-Assessment und kontinuierliche Überwachung von Lieferanten ohne übermäßige administrative Belastung.\n\n⚡ ADVISORI's Strategic Supply-Chain Integration:\n• Tiered Compliance Strategy: Entwicklung differenzierter TISAX-Anforderungen basierend auf Supplier-Kategorisierung, Kritikalität der gelieferten Komponenten und Zugang zu sensiblen Informationen.\n• Automated Supplier Assessment: Implementierung digitaler Tools für effiziente TISAX-Bewertung von Lieferanten mit standardisierten Fragebögen und automatisierten Scoring-Systemen.\n• Collaborative Security Programs: Aufbau von Programmen zur gemeinsamen Entwicklung von TISAX-Compliance-Fähigkeiten mit strategischen Lieferanten und Branchenpartnern.\n• Supply-Chain Resilience Planning: Integration von TISAX-Compliance in Business Continuity Planning zur Sicherstellung unterbrechungsfreier Lieferfähigkeit auch bei Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie adressiert ADVISORI in der TISAX Gap Analyse die besonderen Herausforderungen von Joint Ventures und strategischen Partnerschaften in der Automotive-Industrie?",
        answer: "Joint Ventures und strategische Partnerschaften sind charakteristisch für die moderne Automotive-Industrie, insbesondere bei der Entwicklung neuer Technologien wie Elektroantrieben und autonomem Fahren. Diese kollaborativen Strukturen schaffen einzigartige TISAX-Compliance-Herausforderungen, da Informationssicherheitsverantwortlichkeiten und -kontrollen zwischen mehreren Organisationen geteilt werden müssen. ADVISORI hat spezialisierte Frameworks entwickelt, um diese komplexen Multi-Party-Szenarien zu bewerten und zu steuern.\n\n🤝 Joint Venture TISAX-Komplexitäten:\n• Shared Security Governance: Entwicklung einheitlicher TISAX-Governance-Strukturen zwischen Partnern mit unterschiedlichen Sicherheitskulturen und -standards.\n• Cross-Company Information Sharing: Sichere Gestaltung von Informationsaustausch zwischen JV-Partnern unter Berücksichtigung von Intellectual Property-Schutz und VDA ISA-Anforderungen.\n• Dual Reporting Requirements: Management von TISAX-Compliance-Verpflichtungen gegenüber verschiedenen OEM-Kunden durch verschiedene JV-Partner.\n• Technology Integration Security: Sicherheitsarchitekturen für die Integration verschiedener IT-Systeme und Entwicklungsumgebungen der JV-Partner.\n\n🛡️ ADVISORI's Multi-Party Compliance Framework:\n• Collaborative Security Architecture: Design von TISAX-konformen Sicherheitsarchitekturen, die geteilte Verantwortlichkeiten klar definieren und gleichzeitig Flexibilität für unterschiedliche Partner-Anforderungen bieten.\n• Unified Audit und Assessment: Entwicklung gemeinsamer TISAX-Assessment-Prozesse, die beiden JV-Partnern gleichzeitig dienen und Doppelaudits vermeiden.\n• Information Barrier Management: Implementierung technischer und organisatorischer Maßnahmen zum Schutz vertraulicher Informationen zwischen JV-Partnern bei gleichzeitiger Projektkooperation.\n• Scalable Partnership Integration: Entwicklung wiederverwendbarer TISAX-Compliance-Templates und -Prozesse für die effiziente Integration neuer strategischer Partnerschaften und Kooperationen."
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
