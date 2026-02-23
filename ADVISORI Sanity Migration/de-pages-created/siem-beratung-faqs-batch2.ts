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
    console.log('Updating SIEM Beratung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-beratung" not found')
    }
    
    // Create new FAQs for SIEM Beratung technology selection and integration
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie wählt man die richtige SIEM-Technologie aus und welche Kriterien sind bei der Vendor-Evaluation entscheidend?',
        answer: "Die Auswahl der richtigen SIEM-Technologie ist eine strategische Entscheidung, die langfristige Auswirkungen auf die Cybersecurity-Posture und operative Effizienz hat. Eine strukturierte Vendor-Evaluation berücksichtigt technische, wirtschaftliche und strategische Faktoren für optimale Entscheidungsfindung.\n\n🔍 Anforderungsanalyse und Use Case Definition:\n• Comprehensive Requirements Gathering zur Definition spezifischer funktionaler und nicht-funktionaler Anforderungen\n• Use Case Prioritization basierend auf Bedrohungslandschaft und Business-Kritikalität\n• Scalability Requirements Definition für zukünftiges Wachstum und Datenvolumen\n• Integration Requirements Assessment für bestehende Security-Tools und IT-Infrastruktur\n• Compliance Requirements Mapping für regulatorische Anforderungen und Audit-Fähigkeiten\n\n⚖️ Technische Evaluationskriterien:\n• Detection Capabilities Assessment für verschiedene Angriffsvektoren und Threat-Typen\n• Analytics und Machine Learning Capabilities für Advanced Threat Detection\n• Performance und Scalability Testing unter realistischen Lastbedingungen\n• Integration Capabilities und API-Verfügbarkeit für Ecosystem-Integration\n• User Experience und Interface Design für operative Effizienz und Analyst-Produktivität\n\n💼 Wirtschaftliche und strategische Bewertung:\n• Total Cost of Ownership Calculation inklusive Lizenz-, Implementation- und Betriebskosten\n• ROI Projection basierend auf erwarteten Effizienzgewinnen und Risikoreduktion\n• Vendor Stability und Market Position Assessment für langfristige Partnerschaft\n• Support Quality und Service Level Agreements für operative Kontinuität\n• Innovation Roadmap und Future Development Plans des Vendors\n\n🧪 Proof of Concept und Pilotierung:\n• Structured PoC Design mit realistischen Testszenarien und Bewertungskriterien\n• Multi-vendor Comparison unter identischen Testbedingungen\n• Stakeholder Involvement für verschiedene Perspektiven und Anforderungen\n• Performance Benchmarking gegen definierte KPIs und Erfolgskriterien\n• Risk Assessment für Implementation-Risiken und Mitigation-Strategien\n\n📋 Entscheidungsframework und Governance:\n• Weighted Scoring Model für objektive Vendor-Bewertung\n• Decision Matrix mit klaren Kriterien und Gewichtungen\n• Stakeholder Consensus Building für organisatorische Akzeptanz\n• Risk-Benefit Analysis für verschiedene Optionen und Szenarien\n• Implementation Roadmap Planning für ausgewählte Lösung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Herausforderungen gibt es bei der Integration von SIEM-Systemen in komplexe IT-Landschaften und wie löst man diese?',
        answer: "Die Integration von SIEM-Systemen in komplexe IT-Landschaften bringt vielfältige technische, organisatorische und operative Herausforderungen mit sich. Erfolgreiche Integration erfordert systematische Planung, strukturierte Herangehensweise und kontinuierliche Optimierung.\n\n🔗 Technische Integrations-Herausforderungen:\n• Data Source Diversity mit unterschiedlichen Log-Formaten, Protokollen und Datenstrukturen\n• Network Complexity und Segmentierung mit verschiedenen Sicherheitszonen und Firewall-Regeln\n• Legacy System Integration mit veralteten Systemen ohne moderne API-Unterstützung\n• Real-time Data Processing Requirements für zeitkritische Security-Events\n• Bandwidth und Performance Constraints bei großen Datenvolumen und geografisch verteilten Standorten\n\n🏗️ Architektur und Design-Lösungsansätze:\n• Standardized Data Collection Framework mit einheitlichen Agents und Collectors\n• Event Normalization und Parsing-Strategien für konsistente Datenverarbeitung\n• Distributed Architecture Design für optimale Performance und Skalierbarkeit\n• API Gateway Implementation für sichere und kontrollierte System-Integration\n• Data Pipeline Optimization für effiziente Datenübertragung und Processing\n\n🔄 Prozess und Workflow-Integration:\n• Incident Response Workflow Integration mit bestehenden ITSM-Prozessen\n• Automated Ticketing und Escalation-Mechanismen für nahtlose Operationen\n• Change Management Processes für SIEM-Konfigurationsänderungen\n• Compliance Reporting Integration mit bestehenden GRC-Systemen\n• Knowledge Management Integration für Threat Intelligence und Playbooks\n\n👥 Organisatorische und kulturelle Aspekte:\n• Cross-team Collaboration zwischen Security, IT-Operations und Business-Teams\n• Skills Development für neue Tools und Prozesse\n• Resistance Management bei Änderungen etablierter Arbeitsweisen\n• Communication Strategy für transparente Information über Änderungen\n• Training und Support für verschiedene Nutzergruppen und Rollen\n\n🎯 Best Practices für erfolgreiche Integration:\n• Phased Implementation Approach mit schrittweiser Einführung und Validierung\n• Comprehensive Testing Strategy für alle Integrationspunkte und Szenarien\n• Monitoring und Alerting für Integration-Health und Performance\n• Documentation und Knowledge Transfer für nachhaltige Wartbarkeit\n• Continuous Improvement Process für laufende Optimierung und Anpassung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie misst man den ROI von SIEM-Investitionen und welche Metriken sind für die Erfolgsbewertung relevant?',
        answer: "Die ROI-Messung von SIEM-Investitionen erfordert eine ganzheitliche Betrachtung quantitativer und qualitativer Faktoren. Erfolgreiche ROI-Bewertung kombiniert finanzielle Metriken mit operativen Verbesserungen und strategischen Vorteilen für umfassende Wertschöpfungsanalyse.\n\n💰 Finanzielle ROI-Komponenten:\n• Cost Avoidance durch verhinderte Security-Incidents und Datenschutzverletzungen\n• Operational Efficiency Gains durch Automatisierung und Prozessoptimierung\n• Compliance Cost Reduction durch automatisierte Reporting und Audit-Unterstützung\n• Resource Optimization durch verbesserte Analyst-Produktivität und Tool-Konsolidierung\n• Risk Mitigation Value durch reduzierte Cyber-Risiken und Versicherungsprämien\n\n📊 Operative Performance-Metriken:\n• Mean Time to Detection für verschiedene Threat-Kategorien und Angriffsvektoren\n• Mean Time to Response für Incident-Behandlung und Containment\n• False Positive Rate und Alert-Qualität für Analyst-Effizienz\n• Investigation Time Reduction durch verbesserte Analytics und Automation\n• Threat Detection Coverage für verschiedene Angriffstechniken und Taktiken\n\n🎯 Strategische Wertschöpfungs-Indikatoren:\n• Security Posture Improvement durch Enhanced Visibility und Detection\n• Compliance Readiness und Audit-Effizienz für regulatorische Anforderungen\n• Business Enablement durch reduzierte Security-Friction und verbesserte Agilität\n• Stakeholder Confidence durch transparente Security-Reporting und Kommunikation\n• Innovation Capability durch moderne Security-Technologien und Prozesse\n\n📈 Measurement Framework und Methodologie:\n• Baseline Establishment vor SIEM-Implementation für Vergleichswerte\n• Regular Assessment Cycles für kontinuierliche ROI-Überwachung\n• Benchmarking gegen Industry Standards und Peer-Organisationen\n• Cost-Benefit Analysis mit verschiedenen Zeiträumen und Szenarien\n• Sensitivity Analysis für verschiedene Annahmen und Risikofaktoren\n\n🔄 Continuous Value Optimization:\n• Regular ROI Review und Adjustment basierend auf aktuellen Erfahrungen\n• Value Stream Mapping für Identifikation von Optimierungspotenzialen\n• Stakeholder Feedback Integration für qualitative Wertbewertung\n• Investment Prioritization basierend auf ROI-Erkenntnissen\n• Long-term Value Planning für nachhaltige Wertschöpfung und Innovation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie stellt man sicher, dass SIEM-Implementierungen den aktuellen Compliance-Anforderungen entsprechen?',
        answer: "Compliance-konforme SIEM-Implementierungen erfordern systematische Berücksichtigung regulatorischer Anforderungen von der Planungsphase bis zum laufenden Betrieb. Erfolgreiche Compliance-Integration kombiniert technische Capabilities mit prozessualen Kontrollen und kontinuierlicher Überwachung.\n\n📋 Regulatory Requirements Mapping:\n• Comprehensive Compliance Framework Analysis für alle relevanten Regulierungen und Standards\n• Specific Control Requirements Identification für SIEM-relevante Compliance-Kontrollen\n• Data Protection und Privacy Requirements Integration für DSGVO und andere Datenschutzgesetze\n• Industry-specific Regulations Consideration für Branchen-spezifische Anforderungen\n• International Compliance Harmonization für global agierende Organisationen\n\n🔒 Technical Compliance Implementation:\n• Audit Trail und Logging Requirements für vollständige Nachverfolgbarkeit aller Aktivitäten\n• Data Retention Policies Implementation entsprechend regulatorischer Vorgaben\n• Access Control und Segregation of Duties für angemessene Berechtigungskontrollen\n• Encryption und Data Protection für Schutz sensibler Compliance-relevanter Daten\n• Automated Compliance Reporting für effiziente und konsistente Nachweisführung\n\n📊 Monitoring und Continuous Compliance:\n• Real-time Compliance Monitoring für kontinuierliche Überwachung der Einhaltung\n• Compliance Dashboard und KPI-Tracking für transparente Compliance-Posture\n• Regular Compliance Assessment und Gap-Analysis für proaktive Risikominimierung\n• Change Impact Assessment für Compliance-Auswirkungen von System-Änderungen\n• Incident Response Integration für Compliance-relevante Security-Events\n\n🎯 Process Integration und Governance:\n• Compliance-by-Design Principles in allen SIEM-Prozessen und Workflows\n• Regular Training und Awareness für Compliance-Anforderungen und Verantwortlichkeiten\n• Documentation Standards für Compliance-konforme Prozess- und Verfahrensdokumentation\n• Third-party Risk Management für Compliance-Risiken bei externen Service-Providern\n• Regular Compliance Review und Update-Prozesse für sich ändernde Anforderungen\n\n🔍 Audit Readiness und Support:\n• Audit Trail Completeness für lückenlose Nachweisführung aller relevanten Aktivitäten\n• Evidence Collection und Management für effiziente Audit-Unterstützung\n• Auditor Collaboration und Communication für konstruktive Audit-Prozesse\n• Remediation Planning und Tracking für identifizierte Compliance-Gaps\n• Continuous Improvement basierend auf Audit-Erkenntnissen und Feedback"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
