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
    console.log('Updating DORA SIEM Monitoring page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-siem-monitoring' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-siem-monitoring" not found')
    }
    
    // Create new FAQs for compliance and reporting
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche SIEM Audit Trails und Dokumentationsanforderungen sind für DORA-Compliance erforderlich?',
        answer: "DORA verlangt umfassende Audit Trails und Dokumentation aller SIEM-bezogenen Aktivitäten, um regulatorische Transparenz und Nachvollziehbarkeit zu gewährleisten. Diese Anforderungen gehen weit über traditionelle Logging-Praktiken hinaus und erfordern eine strategische Herangehensweise an Dokumentation und Evidence Management.\n\n📋 Comprehensive Audit Trail Requirements:\n• Vollständige Protokollierung aller SIEM-Konfigurationsänderungen einschließlich Detection Rules, Correlation Logic und System Settings\n• Detaillierte Dokumentation aller Security Events mit Timestamps, Source Systems, User Context und Response Actions\n• Immutable Logging für Sicherstellung der Integrität von Audit Trails und Verhinderung nachträglicher Manipulationen\n• Chain of Custody Documentation für alle Security Incidents und forensischen Untersuchungen\n• Access Logging für alle SIEM-Zugriffe einschließlich Administrative Activities und Query Executions\n\n🔍 Regulatory Documentation Standards:\n• DORA-konforme Incident Documentation mit allen erforderlichen Feldern und Klassifizierungen\n• Risk Assessment Documentation für alle identifizierten Security Threats und deren Business Impact\n• Change Management Documentation für alle SIEM-System-Modifikationen und Updates\n• Performance Metrics Documentation für Nachweis der SIEM-Effektivität und Compliance\n• Training und Competency Documentation für alle SIEM-Operatoren und Security Analysten\n\n📊 Evidence Management und Preservation:\n• Forensic Evidence Collection mit kryptographischen Hashes für Legal Admissibility\n• Long-term Retention Strategies für Compliance-relevante Daten und Audit Trails\n• Secure Storage und Backup Procedures für kritische Documentation und Evidence\n• Data Integrity Verification durch regelmäßige Checksums und Validation Procedures\n• Export und Reporting Capabilities für regulatorische Anfragen und Audit Purposes\n\n⚖️ Compliance Reporting Integration:\n• Automated Generation von Compliance Reports basierend auf SIEM-Daten und Audit Trails\n• Regulatory Template Mapping für verschiedene Aufsichtsbehörden und Reporting Requirements\n• Real-time Compliance Monitoring für kontinuierliche Überwachung der Einhaltung von DORA-Anforderungen\n• Exception Reporting für Identifikation und Dokumentation von Compliance Gaps\n• Management Dashboards für Executive Oversight und Strategic Decision Making\n\n🔒 Security und Privacy Considerations:\n• Data Classification und Handling Procedures für sensitive Audit Trail Information\n• Access Control und Role-based Permissions für Audit Trail Access und Modification\n• Encryption und Secure Transmission für alle Audit-related Data Exchanges\n• Privacy Protection für Personal Data in Audit Trails und Security Logs\n• Retention Policy Compliance für verschiedene Datentypen und regulatorische Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie wird regulatorisches Reporting durch SIEM-Daten automatisiert und welche Qualitätssicherungsmaßnahmen sind erforderlich?',
        answer: "Die Automatisierung regulatorischen Reportings durch SIEM-Daten ist entscheidend für die Effizienz und Genauigkeit der DORA-Compliance. Diese Automatisierung muss jedoch durch robuste Qualitätssicherungsmaßnahmen unterstützt werden, um die Integrität und Verlässlichkeit der Berichte zu gewährleisten.\n\n🤖 Automated Reporting Capabilities:\n• Template-based Report Generation für verschiedene regulatorische Anforderungen und Aufsichtsbehörden\n• Real-time Data Aggregation aus verschiedenen SIEM-Quellen für aktuelle und vollständige Berichterstattung\n• Intelligent Data Mapping für automatische Übertragung von SIEM-Events in regulatorische Reporting Formate\n• Scheduled Reporting für regelmäßige Compliance Reports und Periodic Submissions\n• Exception-based Reporting für automatische Benachrichtigung bei kritischen Incidents oder Compliance Violations\n\n📊 Data Quality und Validation:\n• Automated Data Validation für Sicherstellung der Completeness und Accuracy von Report Data\n• Cross-reference Checking für Konsistenz zwischen verschiedenen Data Sources und Systems\n• Statistical Analysis für Identifikation von Anomalien oder Inconsistencies in Report Data\n• Business Rule Validation für Compliance mit spezifischen regulatorischen Requirements\n• Data Lineage Tracking für Nachvollziehbarkeit der Datenherkunft und Transformation Processes\n\n🔍 Quality Assurance Processes:\n• Multi-level Review Workflows für Human Oversight kritischer Reports vor Submission\n• Automated Testing von Report Generation Processes für Sicherstellung der Functionality\n• Benchmark Comparison für Validation von Report Results gegen Historical Data und Industry Standards\n• Error Detection und Correction Mechanisms für Identification und Resolution von Data Quality Issues\n• Continuous Monitoring von Report Quality Metrics und Performance Indicators\n\n📋 Regulatory Compliance Integration:\n• Mapping zu spezifischen DORA Articles und Requirements für Targeted Compliance Reporting\n• Integration mit anderen Compliance Systems für Holistic Regulatory Reporting\n• Audit Trail Generation für alle Report Creation und Submission Activities\n• Version Control für Report Templates und Configuration Changes\n• Regulatory Change Management für Adaptation an evolvierende Requirements\n\n🔄 Continuous Improvement und Optimization:\n• Feedback Integration von Aufsichtsbehörden für Improvement von Report Quality und Relevance\n• Performance Metrics Tracking für Optimization von Report Generation Processes\n• Stakeholder Feedback Collection für Enhancement von Report Usability und Value\n• Technology Upgrade Planning für Maintenance von Current und Effective Reporting Capabilities\n• Best Practice Sharing für Learning von Industry Leaders und Regulatory Guidance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Performance Metriken und KPIs sind für SIEM-Systeme unter DORA-Gesichtspunkten relevant?',
        answer: "DORA-konforme SIEM-Systeme erfordern ein umfassendes Set von Performance Metriken und KPIs, die sowohl technische Leistungsfähigkeit als auch Business Value und regulatorische Compliance messen. Diese Metriken müssen strategische Entscheidungsfindung unterstützen und kontinuierliche Verbesserung ermöglichen.\n\n📊 Technical Performance Metrics:\n• Mean Time to Detection für Messung der Geschwindigkeit bei der Identifikation von Security Threats\n• Mean Time to Response für Bewertung der Effizienz von Incident Response Processes\n• False Positive Rate für Optimization der Detection Accuracy und Reduction von Alert Fatigue\n• System Availability und Uptime für Sicherstellung kontinuierlicher Security Monitoring Capabilities\n• Data Processing Throughput für Bewertung der Skalierbarkeit und Performance unter Load\n\n🎯 Business Impact Indicators:\n• Incident Impact Reduction für Messung der Effectiveness von SIEM-based Threat Mitigation\n• Business Continuity Metrics für Bewertung der Auswirkungen von Security Incidents auf Operations\n• Cost Avoidance Calculations für ROI-Demonstration von SIEM-Investitionen\n• Customer Impact Minimization für Messung des Schutzes von Customer-facing Services\n• Regulatory Compliance Score für Tracking der Adherence zu DORA Requirements\n\n🔍 Operational Excellence Metrics:\n• Alert Quality Score für Bewertung der Relevance und Actionability von SIEM-generated Alerts\n• Investigation Efficiency für Messung der Effectiveness von Threat Hunting und Analysis Activities\n• Automation Rate für Tracking der Degree of Automated Response und Process Optimization\n• Skill Development Metrics für Bewertung der Competency von Security Teams\n• Process Maturity Indicators für Assessment der Sophistication von SIEM Operations\n\n⚖️ Compliance und Risk Metrics:\n• Regulatory Reporting Timeliness für Messung der Adherence zu DORA Reporting Requirements\n• Audit Readiness Score für Bewertung der Preparedness für regulatorische Examinations\n• Risk Exposure Reduction für Quantification der Risk Mitigation durch SIEM Capabilities\n• Control Effectiveness Metrics für Assessment der Security Controls Performance\n• Governance Maturity Indicators für Evaluation der SIEM Governance Framework\n\n📈 Strategic Value Metrics:\n• Threat Intelligence Integration Effectiveness für Messung der Value von External Intelligence Sources\n• Cross-functional Collaboration Score für Assessment der Integration mit anderen Business Functions\n• Innovation Index für Tracking der Adoption neuer Technologies und Methodologies\n• Stakeholder Satisfaction Metrics für Evaluation der SIEM Service Quality\n• Future Readiness Indicators für Assessment der Adaptability zu evolving Threats und Requirements"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie wird Third-Party SIEM Provider Management unter DORA-Anforderungen strukturiert?',
        answer: "Das Management von Third-Party SIEM Providern unter DORA erfordert eine umfassende Herangehensweise, die über traditionelle Vendor Management hinausgeht. DORA klassifiziert kritische IKT-Drittanbieter als direkt regulierte Entitäten, was erhebliche Auswirkungen auf Vendor Selection, Contract Management und Ongoing Oversight hat.\n\n🔍 DORA-konforme Vendor Assessment:\n• Comprehensive Due Diligence für Bewertung der DORA-Compliance-Fähigkeiten potentieller SIEM-Provider\n• Critical IKT Third-party Classification für Determination ob ein Provider unter direkte DORA-Aufsicht fällt\n• Risk Assessment Framework für Evaluation der Operational Resilience von SIEM-Providern\n• Financial Stability Analysis für Sicherstellung der Long-term Viability kritischer Service Provider\n• Technical Capability Evaluation für Assessment der Provider's Ability zu meet DORA Requirements\n\n📋 Contract Management und SLAs:\n• DORA-spezifische Contract Clauses für Sicherstellung der Compliance mit regulatorischen Anforderungen\n• Service Level Agreements mit DORA-aligned Metrics und Performance Standards\n• Data Protection und Privacy Clauses für Compliance mit EU Data Protection Regulations\n• Incident Notification Requirements für Timely Reporting von Security Events und Service Disruptions\n• Audit Rights und Transparency Obligations für Regulatory Oversight und Compliance Verification\n\n🔄 Ongoing Monitoring und Oversight:\n• Continuous Performance Monitoring gegen DORA-spezifische KPIs und Service Standards\n• Regular Risk Assessments für Evaluation sich ändernder Risk Profiles von Third-party Providers\n• Compliance Monitoring für Sicherstellung der Ongoing Adherence zu DORA Requirements\n• Incident Management Coordination für Effective Response zu Provider-related Security Events\n• Business Continuity Testing für Validation der Provider's Resilience und Recovery Capabilities\n\n🛡️ Risk Mitigation Strategies:\n• Multi-vendor Strategies für Reduction der Concentration Risk bei kritischen SIEM Services\n• Exit Planning und Transition Strategies für Mitigation der Vendor Lock-in Risks\n• Data Portability Requirements für Sicherstellung der Ability zu switch Providers wenn necessary\n• Backup und Contingency Planning für Continuity bei Provider Service Disruptions\n• Insurance und Liability Management für Financial Protection gegen Provider-related Losses\n\n🤝 Collaborative Governance:\n• Joint Governance Committees für Ongoing Collaboration und Strategic Alignment\n• Shared Responsibility Models für Clear Definition von Roles und Responsibilities\n• Information Sharing Agreements für Effective Threat Intelligence und Best Practice Exchange\n• Innovation Partnerships für Collaborative Development neuer DORA-aligned Capabilities\n• Regulatory Liaison für Coordinated Interaction mit Aufsichtsbehörden und Compliance Activities"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
