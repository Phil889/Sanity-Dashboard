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
    console.log('Updating Banklizenz Kontroll- & Steuerungsprozesse page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-kontroll-steuerungsprozesse' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-kontroll-steuerungsprozesse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind strategisch entwickelte Kontroll- und Steuerungsprozesse für die C-Suite mehr als nur BaFin-Compliance und wie transformiert ADVISORI diese zu einem Wettbewerbsvorteil?",
        answer: "Für die C-Suite repräsentieren erstklassige Kontroll- und Steuerungsprozesse weit mehr als die Erfüllung regulatorischer Mindestanforderungen - sie sind strategische Enabler für operative Exzellenz, Risikominimierung und nachhaltigen Geschäftserfolg. ADVISORI positioniert Internal Controls als Business Intelligence-System, das nicht nur Compliance sicherstellt, sondern auch die Grundlage für datengetriebene Entscheidungsfindung und operative Optimierung schafft.\n\n🎯 Strategische Control-Dimensionen für die Führungsebene:\n• Operative Transparenz und Performance Optimization: Professionelle Kontrollsysteme liefern Real-time Business Intelligence, ermöglichen präzise Performance-Messung und schaffen die Datenbasis für strategische Entscheidungen und Ressourcenallokation.\n• Risk-adjusted Decision Making: Integrierte Risikokontrollprozesse ermöglichen es der C-Suite, kalkulierte Risiken einzugehen, während gleichzeitig unerwünschte Risikoexpositionen proaktiv identifiziert und mitigiert werden.\n• Regulatory Capital Efficiency: Exzellente Internal Controls reduzieren Aufsichtskapitalanforderungen, ermöglichen günstigere SREP-Bewertungen und schaffen Spielraum für Geschäftswachstum und Profitabilitätssteigerung.\n• Stakeholder Confidence und Market Positioning: Überlegene Kontrollqualität signalisiert professionelles Management und schafft Vertrauen bei Investoren, Partnern und Aufsichtsbehörden für strategische Initiativen.\n\n🛡️ Der ADVISORI Control-Excellence-Ansatz:\n• Business-Integrated Design: Wir entwickeln Kontrollsysteme, die nahtlos in Ihre Geschäftsprozesse integriert sind und operative Effizienz fördern, anstatt sie zu behindern.\n• Intelligence-Driven Controls: Implementation von Smart Controls, die nicht nur Compliance überwachen, sondern auch Business Insights generieren und Optimierungspotentiale identifizieren.\n• Automated Efficiency: Nutzung modernster RegTech-Lösungen zur Automatisierung von Routinekontrollen und Fokussierung auf strategische Oversight-Aktivitäten.\n• Competitive Advantage Creation: Transformation von Compliance-Kosten in strategische Assets, die Operational Excellence und Market Differentiation ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie optimiert ADVISORI die Balance zwischen umfassender Risikokontrolle und operativer Agilität, um C-Level-Führungskräften maximale Geschäftsflexibilität bei gleichzeitiger BaFin-Compliance zu ermöglichen?",
        answer: "Die kritische Herausforderung moderner Banking-Kontrollen liegt in der Harmonisierung zwischen rigoroser Risikokontrolle und der für Wettbewerbsfähigkeit essentiellen operativen Agilität. ADVISORI hat einen innovativen Risk-Smart Control-Ansatz entwickelt, der diese Balance optimiert und C-Level-Führungskräften maximale strategische Flexibilität bei vollständiger regulatorischer Compliance ermöglicht.\n\n⚖️ Smart Control Design für operative Exzellenz:\n• Risk-Proportionate Controls: Entwicklung von Controls, die Intensität und Granularität an das tatsächliche Risikoprofil anpassen - intensive Oversight bei High-Risk-Aktivitäten, streamlined Prozesse bei Low-Risk-Bereichen.\n• Dynamic Control Frameworks: Flexible Kontrollmechanismen, die sich automatisch an Marktbedingungen, Geschäftsvolumen und Risikoparameter anpassen, ohne manuelle Intervention der C-Suite.\n• Automated Exception Management: Intelligente Systeme, die nur bei materiellen Abweichungen oder kritischen Risiken C-Level-Eskalation erfordern und Routine-Kontrollen automatisiert abwickeln.\n• Real-time Risk Intelligence: Kontinuierliche Risiko-Monitoring-Systeme, die proaktive Interventionen ermöglichen, bevor sich Probleme zu kritischen Issues entwickeln.\n\n🚀 ADVISORI's Agile Control Architecture:\n• Technology-Enabled Oversight: Integration von AI und Machine Learning für predictive Risk Detection, Anomaly Identification und automatisierte Control-Execution.\n• Business-Aligned Control Rhythms: Abstimmung von Kontrollzyklen auf Geschäftsrhythmen und Strategic Planning-Zyklen, um maximale Business-Relevanz und minimale Disruption zu gewährleisten.\n• Intelligent Escalation Matrices: Entwicklung von Context-Aware Escalation-Mechanismen, die Business-Impact, Zeitkritikalität und verfügbare Management-Kapazitäten berücksichtigen.\n• Continuous Control Optimization: Etablierung von Data-driven Feedback-Loops zur kontinuierlichen Verbesserung der Control-Effectiveness und -Efficiency.\n• Strategic Control Integration: Einbettung von Kontrollprozessen in strategische Entscheidungsfindung, sodass Controls Business-Enabler anstatt Business-Inhibitoren werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise entwickelt ADVISORI zukunftssichere Kontroll- und Steuerungsprozesse, die nicht nur aktuelle MaRisk-Anforderungen erfüllen, sondern auch emerging Risks und technologische Disruption antizipieren?",
        answer: "Moderne Banking-Kontrollen müssen über die Erfüllung aktueller MaRisk-Standards hinausgehen und proaktiv zukünftige Risikodimensionen und technologische Entwicklungen antizipieren. ADVISORI entwickelt adaptive Control-Architekturen, die nicht nur heutige regulatorische Anforderungen übertreffen, sondern auch als resiliente Plattform für emerging Challenges und Business Model Innovation dienen.\n\n🔮 Future-Proofing Control Architecture:\n• Emerging Risk Integration: Proaktive Berücksichtigung von Cyber-Risiken, Climate Risk, Model Risk und Fintech-Disruption in Control-Design und Risk-Assessment-Prozessen.\n• Technology-Native Controls: Entwicklung von Control-Systemen, die für Cloud-Native Architectures, API-based Banking und Real-time-Processing optimiert sind.\n• RegTech and SupTech Readiness: Vorbereitung auf automatisierte Regulatory Reporting, Real-time Supervision und AI-basierte Aufsichtsmechanismen.\n• ESG and Sustainability Controls: Integration von Environmental, Social und Governance-Kontrollen in traditionelle Risikomanagement-Frameworks.\n\n🏗️ ADVISORI's Adaptive Control Framework:\n• Modular Control Design: Aufbau von Control-Systemen mit modularen Komponenten, die bei neuen Risikodimensionen oder regulatorischen Anforderungen erweitert werden können, ohne Kernsysteme zu destabilisieren.\n• AI and Machine Learning Integration: Implementation von Machine Learning-Algorithmen für Predictive Risk Analytics, Behavioral Pattern Recognition und Automated Anomaly Detection.\n• API-First Control Architecture: Entwicklung von Control-Systemen mit nativen API-Interfaces für seamless Integration mit Fintech-Partnern, Third-Party-Providers und regulatorischen Reporting-Plattformen.\n• Scenario-Based Control Stress Testing: Regelmäßige Überprüfung der Control-Effectiveness unter verschiedenen Stress-Szenarien, Marktdisruptionen und Geschäftsmodell-Evolutionen.\n• Continuous Control Learning: Etablierung von Self-Improving Control-Systemen, die aus Historical Data, Market Events und Regulatory Changes lernen und sich automatisch optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie maximiert ADVISORI durch Control-Excellence die Attraktivität für Investoren und M&A-Targets und transformiert Compliance-Investitionen in strategische Vermögenswerte und Bewertungsprämien?",
        answer: "Erstklassige Kontroll- und Steuerungsprozesse sind ein mächtiger, aber oft unterschätzter Werttreiber, der weit über Compliance-Erfüllung hinausgeht. ADVISORI transformiert Control-Investitionen in strategische Assets, die Unternehmensbewertungen steigern, Kapitalkosten senken und neue Geschäftsmöglichkeiten erschließen. Unsere Control-Excellence-Strategie positioniert Ihr Institut als Premium-Player mit überlegener Risikomanagement-Kompetenz.\n\n💎 Controls als Werttreiber und Investment-Magnet:\n• Valuation Premium durch Control-Sophistication: Institutionelle Investoren bewerten Banken mit überlegenen Control-Systemen mit 10-20% höheren Multiples, da sie geringere Operational Risk und höhere Predictability von Cash Flows signalisieren.\n• Reduced Regulatory Capital Requirements: Exzellente Internal Controls ermöglichen günstigere SREP-Scores, reduzierte Pillar 2-Anforderungen und optimierte Kapitalallokation für Geschäftswachstum.\n• M&A Premium und Due Diligence Advantage: Professionelle Control-Systeme sind ein Key Success Factor bei Akquisitionsverhandlungen und können Deal-Valuations um 15-25% steigern.\n• Partnership und Alliance Attraction: Erstklassige Controls öffnen Türen zu strategischen Partnerschaften mit Top-Tier-Institutionen, die nur mit Control-exzellenten Partnern kooperieren.\n\n🏆 Der ADVISORI Control-to-Value-Ansatz:\n• Investor Relations Optimization: Entwicklung von Control-Excellence-Narratives, die in Investor Presentations, ESG-Ratings und Due Diligence-Prozessen überzeugen.\n• Operational Alpha Generation: Control-Systeme, die nicht nur Risiken managen, sondern auch Operational Efficiency, Process Optimization und Cost Reduction ermöglichen.\n• Regulatory Relationship Capital: Aufbau von Supervisor Confidence durch Control-Excellence, was zu erweiterten Business Permissions, reduzierten Audit-Intensitäten und Strategic Flexibility führt.\n• IP and Methodology Monetization: Transformation von proprietary Control-Methodologien in lizenzierbare Assets, Consulting-Services oder White-Label-Lösungen für Revenue-Diversification.\n• Strategic Optionality Creation: Control-Plattformen, die neue Geschäftsfelder ermöglichen, internationale Expansion erleichtern und als Foundation für Fintech-Innovation dienen."
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
