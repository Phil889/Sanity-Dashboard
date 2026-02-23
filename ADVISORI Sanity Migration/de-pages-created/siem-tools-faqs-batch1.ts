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
    console.log('Updating SIEM Tools page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-tools' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-tools" not found')
    }
    
    // Create new FAQs for SIEM Tools selection and evaluation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Faktoren sind bei der Auswahl von SIEM Tools entscheidend und wie entwickelt man einen strukturierten Evaluierungsprozess?',
        answer: "Die strategische Auswahl von SIEM Tools erfordert einen ganzheitlichen Ansatz, der weit über technische Spezifikationen hinausgeht und Business-Ziele, organisatorische Anforderungen und langfristige Cybersecurity-Strategien miteinander verbindet. Ein strukturierter Evaluierungsprozess schafft die Grundlage für fundierte Entscheidungen, die nachhaltigen Wert generieren.\n\n🎯 Strategische Anforderungsanalyse:\n• Umfassende Analyse der aktuellen und zukünftigen Cybersecurity-Anforderungen basierend auf Bedrohungslandschaft und Business-Kontext\n• Definition kritischer Use Cases und Prioritäten für verschiedene Stakeholder-Gruppen\n• Assessment der organisatorischen Reife und verfügbaren Ressourcen für SIEM Operations\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Integration in die übergeordnete IT-Architektur und Sicherheitsstrategie\n\n📊 Multi-Kriterien Bewertungsframework:\n• Entwicklung gewichteter Bewertungskriterien für funktionale und nicht-funktionale Anforderungen\n• Technische Capabilities Assessment einschließlich Analytics, Skalierbarkeit und Performance\n• Usability und User Experience Evaluation für verschiedene Benutzergruppen\n• Integration-Fähigkeiten und API-Qualität für nahtlose Ecosystem-Einbindung\n• Vendor-Stabilität und Support-Qualität als langfristige Erfolgsfaktoren\n\n🔍 Marktanalyse und Technology Scouting:\n• Comprehensive Market Landscape Analysis aller verfügbaren SIEM Plattformen und Nischenlösungen\n• Technology Trend Assessment und Future Roadmap Evaluation der verschiedenen Anbieter\n• Competitive Analysis und Positioning der verschiedenen Tools im Marktumfeld\n• Innovation Assessment und Bewertung emerging Technologies wie AI und Cloud-native Capabilities\n• Total Cost of Ownership Modellierung für realistische Budgetplanung\n\n⚖️ Strukturierter Evaluierungsprozess:\n• Phased Approach mit klaren Meilensteinen und Entscheidungspunkten\n• Stakeholder-Alignment und Change Management von Beginn an\n• Proof-of-Concept Design mit realistischen Test-Szenarien und Erfolgskriterien\n• Risk Assessment und Mitigation-Strategien für verschiedene Tool-Optionen\n• Documentation und Knowledge Transfer für nachhaltige Entscheidungsfindung\n\n🚀 Zukunftssicherheit und Skalierbarkeit:\n• Assessment der Roadmap-Kompatibilität mit zukünftigen Cybersecurity-Trends\n• Evaluierung von Cloud-Migration-Fähigkeiten und Hybrid-Deployment-Optionen\n• Bewertung der Flexibilität für sich ändernde Anforderungen und Wachstum\n• Integration-Potenzial mit emerging Technologies und Security-Innovationen\n• Vendor-Ecosystem und Partner-Netzwerk für erweiterte Capabilities"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie führt man eine objektive Bewertung verschiedener SIEM Plattformen durch und welche Methoden gewährleisten eine herstellerunabhängige Evaluierung?',
        answer: "Eine objektive SIEM Plattform-Bewertung erfordert systematische Methoden und strukturierte Prozesse, die persönliche Präferenzen und Vendor-Bias eliminieren. Herstellerunabhängige Evaluierung schafft die Grundlage für Entscheidungen, die ausschließlich auf Merit und Anforderungserfüllung basieren.\n\n📋 Strukturierte Bewertungsmethodik:\n• Multi-Criteria Decision Analysis mit quantifizierbaren und gewichteten Kriterien\n• Blind-Evaluation Ansätze zur Minimierung von Vendor-Bias und subjektiven Einflüssen\n• Standardisierte Test-Protokolle für konsistente und vergleichbare Bewertungen\n• Cross-functional Evaluation Teams mit verschiedenen Perspektiven und Expertisen\n• Dokumentierte Bewertungsraster für transparente und nachvollziehbare Entscheidungen\n\n🔬 Technical Deep-Dive Assessment:\n• Architecture Review und Technical Due Diligence für alle evaluierten Plattformen\n• Performance Benchmarking unter realistischen Bedingungen und Datenvolumen\n• Security Assessment der SIEM Tools selbst einschließlich Vulnerability Management\n• Scalability Testing und Capacity Planning für zukünftige Anforderungen\n• Integration Testing mit bestehenden Tools und Systemen in der IT-Landschaft\n\n💰 Total Cost of Ownership Analysis:\n• Comprehensive Cost Modeling einschließlich aller direkten und indirekten Kosten\n• Lifecycle Cost Analysis über mehrere Jahre mit verschiedenen Wachstumsszenarien\n• Hidden Cost Identification wie Training, Professional Services und Maintenance\n• ROI-Modellierung basierend auf quantifizierbaren Security-Verbesserungen\n• Cost-Benefit Analysis für verschiedene Deployment-Optionen und Konfigurationen\n\n🏢 Vendor Assessment und Due Diligence:\n• Financial Stability Analysis und Business Continuity Assessment der Anbieter\n• Support-Qualität Evaluation durch Reference Checks und Service Level Agreements\n• Innovation Track Record und R&D Investment Assessment\n• Market Position und Strategic Direction Analysis für langfristige Partnerschaften\n• Compliance und Certification Status für regulierte Umgebungen\n\n🧪 Proof-of-Concept Management:\n• Structured PoC Design mit realistischen Use Cases und Datensets\n• Controlled Testing Environment für faire und vergleichbare Evaluierung\n• User Acceptance Testing mit verschiedenen Stakeholder-Gruppen\n• Performance Monitoring und Metrics Collection während der PoC-Phase\n• Lessons Learned Documentation für zukünftige Evaluierungen\n\n📊 Objektive Scoring und Ranking:\n• Weighted Scoring Models mit transparenten Kriterien und Gewichtungen\n• Statistical Analysis für robuste und reliable Bewertungsergebnisse\n• Sensitivity Analysis für verschiedene Gewichtungsszenarien\n• Risk-adjusted Scoring für verschiedene Implementation-Risiken\n• Final Recommendation basierend auf objektiven Daten und strukturierter Analyse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen Integration-Fähigkeiten bei der SIEM Tool-Auswahl und wie bewertet man die Kompatibilität mit bestehenden Security-Landschaften?',
        answer: "Integration-Fähigkeiten sind oft der entscheidende Erfolgsfaktor für SIEM Implementierungen, da sie bestimmen, wie effektiv das Tool in die bestehende Security-Landschaft eingebettet werden kann. Eine umfassende Integration-Bewertung verhindert kostspielige Kompatibilitätsprobleme und schafft die Grundlage für nahtlose Security Operations.\n\n🔗 Integration Architecture Assessment:\n• Comprehensive Mapping der bestehenden Security-Tools und deren Integration-Anforderungen\n• API-Qualität und Standards-Compliance Bewertung für verschiedene Integration-Szenarien\n• Data Format Compatibility und Normalization-Fähigkeiten für einheitliche Analytics\n• Real-time Integration Capabilities für zeitkritische Security-Prozesse\n• Bidirectional Communication Assessment für vollständige Ecosystem-Orchestrierung\n\n📡 Connectivity und Protocol Support:\n• Native Connector Availability für kritische Security-Tools und IT-Systeme\n• Standard Protocol Support wie SYSLOG, SNMP, REST APIs und Message Queues\n• Custom Integration Development Capabilities und SDK-Verfügbarkeit\n• Cloud Integration Support für hybride und Multi-Cloud-Umgebungen\n• Legacy System Integration für bestehende Infrastructure-Komponenten\n\n🔄 Data Flow und Processing:\n• Data Ingestion Capabilities für verschiedene Datenquellen und Formate\n• Real-time Processing und Streaming Analytics für zeitkritische Use Cases\n• Data Enrichment und Contextualization durch externe Datenquellen\n• Data Export und Sharing Capabilities für Compliance und Reporting\n• Backup und Archive Integration für langfristige Datenspeicherung\n\n⚙️ Orchestration und Automation:\n• SOAR Platform Integration für automatisierte Incident Response\n• Workflow Engine Capabilities für komplexe Security-Prozesse\n• Ticketing System Integration für Incident Management und Tracking\n• Identity Management System Integration für User Context und Access Control\n• Threat Intelligence Platform Integration für Enhanced Detection Capabilities\n\n🛡️ Security und Compliance Integration:\n• Compliance Framework Integration für automatisierte Reporting und Audit-Trails\n• Risk Management Platform Integration für Risk-based Security Operations\n• Vulnerability Management Integration für Threat Context und Prioritization\n• Asset Management Integration für Complete Visibility und Context\n• Business Application Integration für Business-aligned Security Monitoring\n\n🧪 Integration Testing und Validation:\n• Comprehensive Integration Testing mit allen kritischen Systemen\n• Performance Impact Assessment auf bestehende Systeme und Netzwerke\n• Data Quality Validation nach Integration-Implementierung\n• End-to-End Workflow Testing für komplette Use Case Abdeckung\n• Rollback und Recovery Testing für Business Continuity Sicherstellung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet man einen effektiven Proof-of-Concept für SIEM Tools und welche Erfolgskriterien sollten definiert werden?',
        answer: "Ein effektiver SIEM Tool Proof-of-Concept ist entscheidend für validierte Entscheidungen und minimiert das Risiko kostspieliger Fehlentscheidungen. Strukturierte PoC-Planung mit klaren Erfolgskriterien schafft objektive Bewertungsgrundlagen und realistische Erwartungen für alle Stakeholder.\n\n🎯 PoC-Strategie und Zielsetzung:\n• Klare Definition der PoC-Ziele und erwarteten Outcomes für alle Stakeholder\n• Realistic Scope Definition basierend auf kritischen Use Cases und Anforderungen\n• Success Criteria Definition mit messbaren und objektiven Metriken\n• Timeline und Milestone Planning für strukturierte PoC-Durchführung\n• Resource Allocation und Responsibility Matrix für alle beteiligten Teams\n\n🏗️ PoC-Umgebung und Setup:\n• Representative Test Environment mit realistischen Datenvolumen und Systemen\n• Production-like Data Sources für authentische Testing-Bedingungen\n• Controlled Environment Setup für faire Vergleiche zwischen verschiedenen Tools\n• Security und Compliance Considerations für PoC-Umgebung\n• Monitoring und Logging Setup für comprehensive Performance-Analyse\n\n📊 Test-Szenarien und Use Cases:\n• Critical Use Case Implementation mit realistischen Daten und Szenarien\n• Performance Testing unter verschiedenen Load-Bedingungen\n• User Experience Testing mit verschiedenen Stakeholder-Gruppen\n• Integration Testing mit kritischen bestehenden Systemen\n• Failure Scenario Testing für Resilience und Recovery-Capabilities\n\n📈 Metriken und KPIs:\n• Technical Performance Metrics wie Response Time, Throughput und Resource Utilization\n• Functional Metrics wie Detection Accuracy, False Positive Rates und Coverage\n• Usability Metrics durch User Feedback und Task Completion Rates\n• Integration Success Metrics für Connectivity und Data Quality\n• Business Value Metrics wie Time-to-Value und Operational Efficiency\n\n👥 Stakeholder Engagement:\n• Multi-disciplinary Evaluation Teams mit verschiedenen Perspektiven\n• Regular Checkpoint Meetings für Feedback und Adjustments\n• Hands-on Training Sessions für realistic User Experience Assessment\n• Executive Briefings für Strategic Alignment und Buy-in\n• Vendor Interaction Management für objektive und faire Evaluierung\n\n📋 Documentation und Evaluation:\n• Comprehensive Test Results Documentation mit objektiven Daten\n• Lessons Learned Capture für zukünftige PoCs und Implementierungen\n• Risk Assessment und Mitigation Strategies für identifizierte Issues\n• Cost-Benefit Analysis basierend auf PoC-Ergebnissen\n• Final Recommendation mit klarer Begründung und Next Steps"
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
