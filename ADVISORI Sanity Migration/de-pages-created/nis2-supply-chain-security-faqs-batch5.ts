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
    console.log('Updating NIS2 Supply Chain Security page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-supply-chain-security' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-supply-chain-security" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer NIS2-konformen Supply Chain Resilience-Strategie für Post-Pandemic Business Continuity?",
        answer: "Die COVID-19-Pandemie hat die Vulnerabilität globaler Lieferketten offengelegt und neue Resilienz-Anforderungen geschaffen. Die NIS2-Richtlinie berücksichtigt diese Lehren und fordert robuste Business Continuity-Pläne, die auch externe Schocks bewältigen können. ADVISORI entwickelt pandemic-resistant Supply Chain Security-Strategien, die sowohl Cyber-Risiken als auch physische Disruptions adressieren.\n\n🦠 Post-Pandemic Supply Chain Resilience:\n• Multi-Modal Risk Assessment: Bewertung von Cyber-, physischen und pandemiebedingten Risiken in einem integrierten Framework für ganzheitliche Resilienzplanung.\n• Distributed Supply Network Design: Entwicklung diversifizierter Liefernetze, die sowohl geografische als auch technologische Redundanzen schaffen und Single Points of Failure eliminieren.\n• Remote Work Security Integration: Sicherstellung, dass Supply Chain Security auch bei remote arbeitenden Teams und digitalen Kollaborationsplattformen gewährleistet ist.\n• Crisis-Mode Operation Protocols: Etablierung von Notfallprotokollen für den Übergang zu pandemiebedingten Betriebsmodi ohne Kompromittierung der Supply Chain Security.\n\n⚡ ADVISORI's Pandemic-Resilient Security Architecture:\n• Hybrid Physical-Digital Security Models: Integration von physischen und Cyber-Sicherheitsmaßnahmen für robuste Schutzkonzepte in allen Betriebsmodi.\n• Contactless Supply Chain Operations: Entwicklung berührungsloser Verfahren für kritische Supply Chain-Interaktionen und -Überwachung.\n• Emergency Supplier Activation: Aufbau von Notfall-Lieferantennetzwerken mit vorqualifizierten Security-Standards für schnelle Aktivierung in Krisenzeiten.\n• Adaptive Security Monitoring: Implementierung flexibler Überwachungssysteme, die sich an veränderte Betriebsbedingungen anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt Regulatory Technology (RegTech) in der NIS2-Supply Chain Security und wie implementiert ADVISORI automatisierte Compliance-Lösungen?",
        answer: "Regulatory Technology revolutioniert die Art, wie Organisationen Compliance-Anforderungen verwalten und überwachen. Im Kontext der NIS2-Supply Chain Security ermöglicht RegTech die Automatisierung komplexer Compliance-Prozesse und die kontinuierliche Überwachung der regulatorischen Konformität aller Lieferkettenpartner. ADVISORI implementiert cutting-edge RegTech-Lösungen für effiziente und effektive NIS2-Compliance.\n\n🤖 RegTech für automatisierte NIS2-Compliance:\n• Automated Regulatory Mapping: KI-gestützte Systeme zur automatischen Zuordnung von NIS2-Anforderungen zu spezifischen Supply Chain-Aktivitäten und -Partnern.\n• Real-time Compliance Monitoring: Kontinuierliche Überwachung der Compliance-Status aller Lieferanten mit automatischen Alerts bei Abweichungen oder Risiken.\n• Regulatory Change Management: Automatische Aktualisierung von Compliance-Frameworks bei Änderungen der NIS2-Richtlinie oder verwandter Regulierungen.\n• Intelligent Risk Scoring: Machine Learning-basierte Bewertung von Compliance-Risiken basierend auf Lieferantenverhalten und regulatorischen Anforderungen.\n\n⚡ ADVISORI's RegTech Integration Excellence:\n• API-based Compliance Orchestration: Entwicklung von API-Schnittstellen für seamlose Integration von RegTech-Lösungen in bestehende Supply Chain Management-Systeme.\n• Automated Documentation und Reporting: Automatische Generierung von Compliance-Berichten und Dokumentationen für Aufsichtsbehörden und interne Stakeholder.\n• Predictive Compliance Analytics: Vorhersage zukünftiger Compliance-Herausforderungen basierend auf regulatorischen Trends und Lieferantenentwicklungen.\n• RegTech Vendor Assessment: Bewertung und Auswahl der optimalen RegTech-Lösungen für Ihre spezifischen NIS2-Supply Chain Security-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie gewährleistet ADVISORI die Integration von NIS2-Supply Chain Security mit Circular Economy-Prinzipien und nachhaltigen Geschäftsmodellen?",
        answer: "Die Circular Economy erfordert neue Ansätze für Supply Chain Management, da Produkte und Materialien in geschlossenen Kreisläufen zirkulieren. Dies bringt einzigartige Security-Herausforderungen mit sich, da traditionelle lineare Supply Chain Security-Modelle nicht ausreichen. ADVISORI entwickelt innovative Sicherheitskonzepte für zirkuläre Lieferketten, die sowohl NIS2-Compliance als auch Nachhaltigkeitsziele unterstützen.\n\n♻️ Circular Supply Chain Security Challenges:\n• Extended Product Lifecycle Security: Sicherstellung der Security über den gesamten Produktlebenszyklus, einschließlich Recycling, Refurbishment und Remarketing-Phasen.\n• Multi-Stakeholder Ecosystem Security: Management der Security-Komplexität in zirkulären Ökosystemen mit multiplen Akteuren wie Herstellern, Refurbishern, Recyclern und Sekundärmärkten.\n• Data Security in Circular Flows: Schutz sensibler Daten während des gesamten zirkulären Prozesses, einschließlich Product Passports und Lifecycle-Informationen.\n• Reverse Logistics Security: Spezielle Sicherheitsmaßnahmen für Rückführungslogistik und End-of-Life-Produktmanagement.\n\n🌱 ADVISORI's Sustainable Security Innovation:\n• Circular Security-by-Design: Integration von Security-Prinzipien in die Gestaltung zirkulärer Geschäftsmodelle und Produktdesign.\n• Blockchain für Circular Transparency: Einsatz von Blockchain-Technologie für transparente und sichere Verfolgung von Produkten und Materialien durch zirkuläre Prozesse.\n• Green Security Technologies: Implementierung energieeffizienter Security-Technologien, die sowohl Umweltauswirkungen minimieren als auch Security-Ziele erreichen.\n• Sustainable Partner Assessment: Integration von Nachhaltigkeitskriterien in Security-Bewertungen für ganzheitliche Partner-Evaluierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Zukunftstrends in der Supply Chain Security antizipiert ADVISORI und wie bereiten wir Organisationen auf die nächste Generation von NIS2-Anforderungen vor?",
        answer: "Die Landschaft der Supply Chain Security entwickelt sich rasant weiter, getrieben von technologischen Innovationen, sich ändernden Bedrohungslandschaften und evolierenden regulatorischen Anforderungen. ADVISORI antizipiert zukünftige Entwicklungen und bereitet Organisationen proaktiv auf die nächste Generation von Security-Herausforderungen und regulatorischen Anforderungen vor.\n\n🔮 Future Trends in Supply Chain Security:\n• Autonomous Supply Chain Security: Entwicklung selbstverwaltender Security-Systeme, die automatisch auf Bedrohungen reagieren und sich kontinuierlich an neue Risiken anpassen.\n• Quantum-Enhanced Threat Detection: Einsatz von Quantencomputing für fortgeschrittene Threat Detection und Kryptanalyse in Supply Chain-Kontexten.\n• Neural Network Supply Chain Modeling: Verwendung künstlicher neuronaler Netze für präzise Modellierung und Vorhersage komplexer Supply Chain-Dynamiken.\n• Metaverse Supply Chain Integration: Sicherheitskonzepte für Supply Chain-Aktivitäten in virtuellen und augmented reality-Umgebungen.\n\n⚡ ADVISORI's Future-Ready Preparation Strategy:\n• Innovation Labs für Emerging Technologies: Etablierung von Forschungs- und Entwicklungskapazitäten für cutting-edge Supply Chain Security-Technologien.\n• Regulatory Foresight Programs: Proaktive Analyse zukünftiger regulatorischer Entwicklungen und Vorbereitung auf NIS3 und darüber hinaus.\n• Skills Development für Next-Gen Security: Aufbau von Kompetenzen und Fähigkeiten für zukünftige Supply Chain Security-Anforderungen.\n• Ecosystem Partnership für Innovation: Aufbau strategischer Partnerschaften mit Technologieanbietern, Forschungseinrichtungen und Regulatoren für kontinuierliche Innovation."
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
