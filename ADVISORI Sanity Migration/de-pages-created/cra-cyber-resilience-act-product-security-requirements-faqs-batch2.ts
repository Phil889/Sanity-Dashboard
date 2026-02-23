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
    console.log('Updating CRA Product Security Requirements page with C-Level FAQs batch 2 (German)...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie kann unsere C-Suite die CRA-Compliance-Kosten optimieren und gleichzeitig maximalen Geschäftswert aus den Security-Investitionen generieren?",
        answer: "Die strategische Optimierung von CRA-Compliance-Investitionen erfordert einen ganzheitlichen Ansatz, der sowohl Kosteneffizienz als auch Wertmaximierung in den Fokus stellt. Für die C-Suite geht es darum, CRA-Compliance nicht als isolierte Ausgabe zu betrachten, sondern als Katalysator für operative Exzellenz, Innovationsbeschleunigung und nachhaltige Wettbewerbsvorteile, die über die reine Regelkonformität hinausgehen.\n\n💰 Kostenoptimierungsstrategien mit direktem ROI:\n• Shared Security Infrastructure: Entwicklung wiederverwendbarer Security-Komponenten und -Services, die produktübergreifend eingesetzt werden können und Skaleneffekte maximieren.\n• Automated Compliance Monitoring: Investition in KI-gestützte Compliance-Überwachungssysteme, die manuelle Audit-Kosten um 60-80% reduzieren und kontinuierliche Konformität sicherstellen.\n• Risk-Based Prioritization: Fokussierung der Investitionen auf High-Impact-Bereiche durch quantitative Risikobewertungen anstatt Gießkannenprinzip-Ansätze.\n• Vendor Consolidation: Strategische Partnerschaften mit Compliance-Spezialisten zur Bündelung von Services und Reduktion von Management-Overhead.\n\n📈 Wertgenerierung durch intelligente CRA-Implementation:\n• Security as a Product Feature: Transformation von Compliance-Anforderungen in vermarktbare Produktfeatures, die Premium-Pricing ermöglichen und Kundenbindung stärken.\n• Data-Driven Business Intelligence: Nutzung von CRA-konformen Monitoring-Daten für Business Analytics und Produktoptimierung, wodurch Security-Investitionen zu Revenue-Generatoren werden.\n• Operational Efficiency Gains: CRA-getriebene Prozessautomatisierung führt zu 25-40% Effizienzsteigerungen in Entwicklung und Operations.\n• Insurance and Risk Transfer: Optimierte Cyber-Versicherungskonditionen durch nachweisbare CRA-Compliance können Prämien um 20-35% reduzieren.\n\n🎯 ADVISORI's Value Engineering Approach: Wir entwickeln maßgeschneiderte ROI-Maximierungsstrategien, die Compliance-Kosten in Business-Value transformieren und langfristige Wettbewerbsvorteile sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche organisatorischen und personellen Veränderungen muss unsere C-Suite implementieren, um eine erfolgreiche CRA-Transformation zu gewährleisten?",
        answer: "Die erfolgreiche CRA-Transformation erfordert fundamentale organisatorische Restrukturierungen und eine strategische Neuausrichtung der Personalstrategie. Für die C-Suite bedeutet dies nicht nur die Integration neuer Rollen und Verantwortlichkeiten, sondern die Entwicklung einer Unternehmenskultur, die Security-by-Design als Kernkompetenz verankert und Compliance-Exzellenz zu einem nachhaltigen Wettbewerbsvorteil macht.\n\n🏢 Strategische Organisationsstrukturen für CRA-Erfolg:\n• Chief Security Officer (CSO) mit C-Level-Authority: Etablierung einer CSO-Position mit direkter Board-Berichtslinie, Budget-Verantwortung und Veto-Recht bei sicherheitskritischen Produktentscheidungen.\n• Cross-Functional Security Champions Network: Integration von Security-Experten in alle Produktentwicklungsteams zur Sicherstellung von Security-by-Design-Prinzipien von der Konzeption bis zur Markteinführung.\n• Compliance Center of Excellence: Aufbau einer zentralen Competence Unit für CRA-Expertise, die als interne Beratung für alle Geschäftsbereiche fungiert und Best Practices unternehmensweit skaliert.\n• DevSecOps Transformation Teams: Spezialisierte Teams für die Integration von Security-Prozessen in agile Entwicklungszyklen und CI/CD-Pipelines.\n\n👥 Strategische Personalentwicklung und Talent Acquisition:\n• Executive Security Education: Implementierung von C-Level-Weiterbildungsprogrammen zu CRA-Anforderungen, Cyber-Risk-Management und Security-Investment-Strategien.\n• Security-First Hiring Strategy: Neudefinition von Job-Profilen in Entwicklung, Product Management und QA mit verpflichtenden Security-Kompetenzen als Grundqualifikation.\n• Retention und Incentivierung: Entwicklung von Vergütungs- und Karrieremodellen, die Security-Expertise belohnen und Top-Talente in Compliance-kritischen Rollen halten.\n• External Advisory Board: Etablierung eines externen Expertenbeirats mit CRA-Spezialisten für strategische Guidance und Marktintelligenz.\n\n🚀 ADVISORI's Organizational Excellence Support: Wir unterstützen Sie bei der Entwicklung optimaler Organisationsstrukturen, Talent-Strategien und Change-Management-Prozessen für nachhaltige CRA-Compliance-Exzellenz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir unsere Supply Chain und Vendor-Partnerships CRA-konform gestalten und dabei Lieferkettenrisiken minimieren?",
        answer: "Die CRA-konforme Gestaltung von Supply Chains und Vendor-Partnerships stellt eine der komplexesten strategischen Herausforderungen für die C-Suite dar, da sie sowohl operative Kontinuität als auch regulatorische Compliance sicherstellen muss. Eine durchdachte Vendor-Management-Strategie wird zum entscheidenden Wettbewerbsfaktor und Risk-Mitigation-Instrument in der CRA-Ära.\n\n🔗 Strategische Supply Chain Transformation:\n• Vendor Risk Classification: Entwicklung eines mehrstufigen Risikobewertungssystems für Lieferanten basierend auf CRA-Kritikalität ihrer Komponenten und Services.\n• Contractual Security Requirements: Integration bindender CRA-Compliance-Klauseln in alle Vendor-Verträge mit definierten SLAs, Audit-Rechten und Penalty-Strukturen bei Non-Compliance.\n• Dual-Source-Strategien: Aufbau redundanter Lieferantennetzwerke mit CRA-konformen Backup-Anbietern zur Minimierung von Single-Point-of-Failure-Risiken.\n• Continuous Vendor Monitoring: Implementation automatisierter Compliance-Überwachungssysteme für kontinuierliche Bewertung der Vendor-Conformity.\n\n⚡ Proaktive Vendor Partnership Excellence:\n• Co-Innovation mit Security-First-Partnern: Strategische Allianzen mit Vendors, die CRA-Compliance als Innovationstreiber nutzen und gemeinsame Produktentwicklung ermöglichen.\n• Vendor Development Programs: Investition in die CRA-Readiness Ihrer Key-Supplier durch Schulungen, Tools und Best-Practice-Sharing zur Sicherung der Lieferkette.\n• Supply Chain Visibility Platforms: Deployment von End-to-End-Transparenz-Lösungen für Real-Time-Monitoring von Compliance-Status und Security-Posture aller Supply Chain Participants.\n• Emergency Response Protocols: Entwicklung detaillierter Notfallpläne für den Ausfall CRA-non-konformer Supplier mit vordefinierten Eskalations- und Substitute-Strategien.\n\n🛡️ ADVISORI's Supply Chain Security Excellence: Wir entwickeln maßgeschneiderte Vendor-Management-Frameworks und Supply Chain Security-Strategien, die CRA-Compliance mit operativer Exzellenz und strategischer Flexibilität verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt CRA-Compliance bei M&A-Transaktionen und wie sollte unsere C-Suite dies in ihre Wachstumsstrategie integrieren?",
        answer: "CRA-Compliance entwickelt sich zu einem kritischen Faktor in M&A-Bewertungen und Wachstumsstrategien, der sowohl Deal-Strukturierung als auch Post-Merger-Integration fundamental beeinflusst. Für die C-Suite wird CRA-Readiness zu einem entscheidenden Due-Diligence-Kriterium und Wertschöpfungshebel, der strategische Akquisitionsentscheidungen und Unternehmensbewertungen maßgeblich prägt.\n\n🎯 CRA als strategischer M&A-Value-Driver:\n• Valuation Impact Assessment: CRA-Compliance kann Unternehmensbewertungen um 15-25% beeinflussen, da konforme Unternehmen niedrigere Risikoprofile und bessere Marktaussichten aufweisen.\n• Acquisition Target Screening: Integration von CRA-Readiness-Bewertungen in die strategische Target-Identification zur Fokussierung auf zukunftsfähige Assets.\n• Deal Structure Optimization: Nutzung von CRA-Compliance-Gaps zur Preisverhandlung und Strukturierung von Earn-out-Klauseln basierend auf Compliance-Milestones.\n• Synergy Realization: Identifikation von Compliance-Synergien zwischen acquirer und target für beschleunigte Integration und Kosteneinsparungen.\n\n⚡ Strategic Integration und Portfolio Management:\n• Post-Merger Compliance Integration: Entwicklung beschleunigter Integration-Roadmaps für die Harmonisierung von Security-Standards und Compliance-Prozessen.\n• Portfolio Risk Management: Bewertung des CRA-Compliance-Status des gesamten Unternehmensportfolios zur Identifikation von Investitions- und Divestiture-Prioritäten.\n• Cross-Portfolio Learning: Leveraging von CRA-Best-Practices zwischen Portfolio-Unternehmen zur Maximierung von Compliance-Effizienz und -Exzellenz.\n• Strategic Divestiture Decisions: Proaktive Identifikation von Assets mit hohen CRA-Compliance-Kosten für strategische Portfolio-Optimierung.\n\n💼 ADVISORI's M&A Excellence Support: Wir unterstützen Sie mit spezialisierter CRA-Due-Diligence, Integration-Planning und Post-Merger-Compliance-Harmonisierung für maximale Deal-Value-Realization und beschleunigte Synergy-Capture."
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
