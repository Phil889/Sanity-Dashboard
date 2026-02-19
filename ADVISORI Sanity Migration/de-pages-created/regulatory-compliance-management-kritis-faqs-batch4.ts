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
    console.log('Updating KRITIS page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie können wir als KRITIS-Betreiber eine effektive Business Continuity-Strategie entwickeln, die sowohl Cyber-Bedrohungen als auch physische Risiken berücksichtigt?",
        answer: "Eine ganzheitliche Business Continuity-Strategie für KRITIS-Betreiber muss die Konvergenz von Cyber- und physischen Bedrohungen adressieren, da moderne kritische Infrastrukturen zunehmend durch die Digitalisierung von OT-Systemen verwundbar werden. Die strategische Herausforderung liegt darin, traditionelle Kontinuitätsplanung mit modernen Cyber-Resilience-Anforderungen zu einem kohärenten Framework zu integrieren.\n\n🔄 Integrierte Kontinuitätsplanung für kritische Infrastrukturen:\n• Cyber-Physical Systems Integration: Entwicklung von Kontinuitätsplänen, die die Interdependenzen zwischen IT-, OT- und physischen Systemen berücksichtigen und cascade-artige Ausfälle verhindern.\n• Multi-Hazard Risk Assessment: Comprehensive Risikobewertung, die sowohl traditionelle Bedrohungen (Naturkatastrophen, Sabotage) als auch moderne Cyber-Bedrohungen in einem integrierten Framework analysiert.\n• Adaptive Response Capabilities: Aufbau flexibler Response-Mechanismen, die je nach Art und Umfang der Störung zwischen verschiedenen Kontinuitätsmodi wechseln können.\n• Cross-functional Coordination: Etablierung übergreifender Koordinationsmechanismen zwischen Cybersecurity-, Physical Security-, Operations- und Business Continuity-Teams.\n\n🛡️ KRITIS-spezifische Kontinuitätskomponenten:\n• Essential Services Prioritization: Systematic Priorisierung kritischer Services basierend auf ihrer gesellschaftlichen Bedeutung und regulatorischen Anforderungen.\n• Redundanz und Diversifikation: Strategische Implementierung von Backup-Systemen und alternativen Betriebsmodi, die verschiedene Failure-Szenarien abdecken.\n• Rapid Recovery Protocols: Entwicklung beschleunigter Wiederherstellungsprozesse, die die besonderen Zeitanforderungen kritischer Infrastrukturen berücksichtigen.\n• Stakeholder Communication: Etablierung von Kommunikationsprotokollen für verschiedene Stakeholder-Gruppen während Kontinuitätsereignissen.\n\n🚀 ADVISORIs ganzheitlicher BCM-Ansatz:\n• Scenario-based Planning: Entwicklung und regelmäßige Aktualisierung von Kontinuitätsplänen basierend auf realistischen, sektor-spezifischen Bedrohungsszenarien.\n• Technology-enhanced BCM: Integration moderner Technologien (IoT-Monitoring, Predictive Analytics, Automated Failover) zur Verbesserung der Kontinuitätsfähigkeiten.\n• Inter-organizational Coordination: Aufbau von Kooperationsmechanismen mit anderen KRITIS-Betreibern und Behörden für koordinierte Kontinuitätsmaßnahmen.\n• Continuous Testing und Improvement: Implementierung regelmäßiger Tests und Übungen zur Validierung und kontinuierlichen Verbesserung der Kontinuitätspläne."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche strategischen Überlegungen sind bei der Cloud-Migration kritischer Systeme unter KRITIS-Gesichtspunkten zu beachten?",
        answer: "Die Cloud-Migration kritischer Systeme unter KRITIS-Compliance stellt eine komplexe strategische Entscheidung dar, die traditionelle Sicherheitsparadigmen herausfordert und neue Chancen für Resilienz und Effizienz eröffnet. Für C-Level-Entscheidungsträger ist es essentiell, sowohl die Potenziale als auch die Risiken systematisch zu bewerten und eine Cloud-Strategie zu entwickeln, die regulatorische Anforderungen mit geschäftlichen Vorteilen ausbalanciert.\n\n☁️ Strategische Bewertungsdimensionen für KRITIS-Cloud-Migration:\n• Regulatory Compliance Assessment: Comprehensive Bewertung der Vereinbarkeit verschiedener Cloud-Modelle mit KRITIS-Verordnung und anderen relevanten regulatorischen Anforderungen.\n• Data Sovereignty und Jurisdiction: Sicherstellung, dass Datenverarbeitung und -speicherung in rechtlich akzeptablen Jurisdiktionen erfolgt und nationale Souveränitätsanforderungen erfüllt werden.\n• Vendor Lock-in Mitigation: Entwicklung von Strategien zur Vermeidung kritischer Abhängigkeiten von einzelnen Cloud-Providern durch Multi-Cloud-Ansätze oder Exit-Strategien.\n• Performance und Latency Requirements: Bewertung der Kompatibilität von Cloud-Services mit den strengen Performance-Anforderungen kritischer Infrastrukturen.\n\n🔒 KRITIS-spezifische Cloud-Security-Anforderungen:\n• Enhanced Security Controls: Implementierung zusätzlicher Sicherheitskontrollen, die über Standard-Cloud-Security hinausgehen und KRITIS-spezifische Bedrohungen addressieren.\n• Incident Response Integration: Sicherstellung, dass Cloud-basierte Incident Response-Prozesse KRITIS-Meldepflichten und -zeitanforderungen erfüllen.\n• Business Continuity in the Cloud: Entwicklung von Cloud-nativen Kontinuitätsstrategien, die die Vorteile der Cloud-Elastizität nutzen, ohne kritische Abhängigkeiten zu schaffen.\n• Audit und Compliance Monitoring: Implementierung kontinuierlicher Compliance-Überwachung in Cloud-Umgebungen mit automatisierten Reporting-Mechanismen.\n\n🌐 ADVISORIs Cloud-Enablement für kritische Infrastrukturen:\n• Risk-based Cloud Strategy: Entwicklung differenzierter Cloud-Strategien, die verschiedene Kritikalitätsstufen von Systemen und Daten berücksichtigen.\n• Hybrid Cloud Architectures: Design von Hybrid-Cloud-Lösungen, die sensitive kritische Komponenten on-premise belassen, während nicht-kritische Services in die Cloud migriert werden.\n• Cloud Provider Assessment: Systematic Bewertung und Auswahl von Cloud-Providern basierend auf KRITIS-spezifischen Anforderungen und Sicherheitsstandards.\n• Governance Framework für Cloud Operations: Entwicklung von Governance-Strukturen, die Cloud-Operations mit bestehenden KRITIS-Compliance-Prozessen integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können wir Artificial Intelligence und Machine Learning sicher in kritische Infrastrukturen integrieren und dabei KRITIS-Compliance gewährleisten?",
        answer: "Die Integration von AI/ML in kritische Infrastrukturen bietet enormes Potenzial für Effizienzsteigerungen und verbesserte Sicherheit, bringt jedoch auch neue Risikodimensionen mit sich, die unter KRITIS-Gesichtspunkten sorgfältig bewertet werden müssen. Für Führungskräfte ist es entscheidend, einen ausgewogenen Ansatz zu entwickeln, der Innovation ermöglicht, ohne die Stabilität und Sicherheit kritischer Systeme zu gefährden.\n\n🤖 Strategische AI/ML-Integration in KRITIS-Umgebungen:\n• Risk-stratified AI Deployment: Entwicklung eines gestuften Ansatzes, der AI/ML-Systeme entsprechend ihrer potenziellen Auswirkungen auf kritische Funktionen klassifiziert und entsprechende Sicherheitsmaßnahmen implementiert.\n• Human-in-the-Loop Governance: Sicherstellung, dass kritische Entscheidungen immer menschliche Oversight und Validierung durchlaufen, auch bei hochautomatisierten AI-Systemen.\n• Explainable AI Requirements: Implementierung von AI-Systemen, die ihre Entscheidungsprozesse transparent machen und Audit-Trail-Anforderungen erfüllen.\n• Fail-Safe Design Principles: Entwicklung von AI-Systemen mit inherenten Fail-Safe-Mechanismen, die bei Funktionsstörungen automatisch in sichere Zuständen übergehen.\n\n🛡️ KRITIS-konforme AI/ML-Sicherheitsframework:\n• AI Security Testing: Implementierung spezialisierter Testing-Verfahren für AI-Systeme, einschließlich Adversarial Testing und Robustness Validation.\n• Data Quality und Integrity: Sicherstellung höchster Datenqualitätsstandards für AI-Training und -Operation, da schlechte Datenqualität in kritischen Systemen katastrophale Folgen haben kann.\n• Model Governance und Versioning: Etablierung strenger Governance-Prozesse für AI-Model-Development, -Deployment und -Updates mit vollständiger Nachverfolgbarkeit.\n• Bias Detection und Mitigation: Implementierung systematischer Verfahren zur Erkennung und Minderung von AI-Bias, der zu diskriminierenden oder gefährlichen Entscheidungen führen könnte.\n\n🚀 ADVISORIs AI-Enablement für kritische Infrastrukturen:\n• AI Risk Assessment Framework: Entwicklung spezialisierter Risikobewertungsverfahren für AI-Systeme in kritischen Infrastrukturen.\n• Regulatory-compliant AI Architecture: Design von AI-Systemen, die von Beginn an KRITIS-Compliance-Anforderungen berücksichtigen und entsprechende Audit- und Monitoring-Capabilities integrieren.\n• AI Incident Response: Entwicklung spezieller Incident Response-Prozeduren für AI-bezogene Störungen oder Sicherheitsvorfälle.\n• Continuous AI Monitoring: Implementierung kontinuierlicher Überwachungssysteme für AI-Performance und -Sicherheit mit Echtzeitalarmen bei Anomalien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt die Integration von KRITIS-Compliance in ESG-Strategien und wie kann dies zur Steigerung des Unternehmenswerts beitragen?",
        answer: "Die Integration von KRITIS-Compliance in ESG-Strategien (Environmental, Social, Governance) repräsentiert eine strategische Gelegenheit für kritische Infrastrukturen, regulatorische Anforderungen als Treiber für nachhaltigen Unternehmenswert zu positionieren. Diese Konvergenz ermöglicht es, Cybersecurity und Resilienz-Investitionen als Teil einer umfassenden Nachhaltigkeitsstrategie zu kommunizieren und dabei Stakeholder-Vertrauen zu stärken.\n\n🌱 ESG-Integration strategischer KRITIS-Compliance:\n• Environmental Dimension: Nutzung von KRITIS-Cybersecurity-Maßnahmen zur Verbesserung der Energieeffizienz und Reduzierung des ökologischen Fußabdrucks durch optimierte Systemsteuerung und predictive Maintenance.\n• Social Responsibility: Positionierung von KRITIS-Compliance als gesellschaftlichen Beitrag zur Versorgungssicherheit und zum Schutz der kritischen Infrastruktur-Dienstleistungen.\n• Governance Excellence: Integration von Cybersecurity-Governance in übergeordnete Corporate Governance-Strukturen als Demonstration verantwortungsvoller Unternehmensführung.\n• Stakeholder Engagement: Entwicklung von Kommunikationsstrategien, die KRITIS-Aktivitäten als Teil der ESG-Verpflichtungen gegenüber Investoren, Kunden und der Gesellschaft positionieren.\n\n📊 Unternehmenswert-Steigerung durch ESG-KRITIS-Integration:\n• Enhanced Investor Confidence: Demonstrierte KRITIS-Compliance stärkt das Vertrauen von ESG-orientierten Investoren in die langfristige Stabilität und Nachhaltigkeit des Unternehmens.\n• Risk Premium Reduction: Verbesserte Cybersecurity-Posture kann zu niedrigeren Kapitalkosten und besseren Finanzierungskonditionen führen.\n• Regulatory Future-Proofing: Proaktive KRITIS-Compliance positioniert das Unternehmen als vorausschauend für zukünftige ESG-Regulierungen im Cybersecurity-Bereich.\n• Brand Value Enhancement: Stärkung der Unternehmensmarke als verantwortungsvoller und zuverlässiger Betreiber kritischer Infrastrukturen.\n\n🎯 ADVISORIs ESG-KRITIS-Integrations-Framework:\n• ESG-Metrics Integration: Entwicklung von KPIs, die KRITIS-Compliance-Leistung in ESG-Reporting-Standards integrieren und messbar machen.\n• Stakeholder-Value Proposition: Entwicklung differenzierter Value Propositions für verschiedene Stakeholder-Gruppen (Investoren, Regulatoren, Kunden, Community).\n• Sustainability-oriented Cybersecurity: Implementierung von Cybersecurity-Lösungen, die gleichzeitig Nachhaltigkeitsziele unterstützen (z.B. durch Energieeffizienz oder papierlose Prozesse).\n• Integrated Reporting: Entwicklung von Reporting-Frameworks, die KRITIS-Compliance nahtlos in ESG-Berichte und Nachhaltigkeitskommunikation integrieren."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
