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
    console.log('Updating IAM Compliance page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-compliance" not found')
    }
    
    // Create new FAQs for IAM Compliance fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was macht IAM Compliance zu einem strategischen Erfolgsfaktor für moderne Unternehmen und wie unterscheidet es sich von traditionellen Compliance-Ansätzen?',
        answer: "IAM Compliance ist das strategische Rückgrat vertrauensvoller Geschäftsbeziehungen und transformiert regulatorische Anforderungen von kostspieligen Belastungen zu wertvollen Wettbewerbsvorteilen. Anders als traditionelle, reaktive Compliance-Ansätze orchestriert modernes IAM Compliance eine intelligente, proaktive Governance-Architektur, die regulatorische Exzellenz als kontinuierlichen Geschäftsprozess etabliert und dabei Stakeholder-Vertrauen, Marktfähigkeit und operative Effizienz maximiert.\n\n🎯 Strategische Transformation und Business-Value:\n• Compliance-as-a-Service-Mentalität für kontinuierliche regulatorische Exzellenz statt punktueller Audit-Vorbereitung\n• Multi-Framework-Integration für GDPR, SOX, HIPAA, PCI-DSS und ISO 27001 in einer einheitlichen Governance-Architektur\n• Risk-based Compliance-Orchestration mit intelligenter Priorisierung und Resource-Allocation\n• Stakeholder-Trust-Building durch transparente, nachvollziehbare Compliance-Prozesse\n• Market-Access-Enablement für regulierte Märkte und internationale Expansion\n\n🚀 Innovation-Enablement und Competitive Advantage:\n• Compliance-by-Design-Prinzipien für beschleunigte Produktentwicklung und Time-to-Market\n• Automated Regulatory-Intelligence für proaktive Anpassung an sich ändernde Anforderungen\n• Data-driven Compliance-Optimization mit KI-gestützten Insights und Predictive Analytics\n• Ecosystem-Integration für vertrauensvolle Partner- und Lieferantenbeziehungen\n• Innovation-Sandbox-Capabilities für sichere Exploration neuer Geschäftsmodelle\n\n🛡️ Advanced Governance Framework:\n• Real-time Compliance-Monitoring mit kontinuierlicher Risikobewertung und Anomaly Detection\n• Evidence-based Audit-Bereitschaft mit automatisierter Documentation und Artifact-Management\n• Cross-functional Compliance-Orchestration für nahtlose Integration in Geschäftsprozesse\n• Regulatory-Change-Management mit Impact-Assessment und Adaptation-Strategies\n• Incident-Response-Integration für schnelle Reaktion auf Compliance-Verletzungen\n\n📊 Data-driven Decision Making:\n• Compliance-Performance-Analytics für kontinuierliche Verbesserung und ROI-Maximierung\n• Risk-Scoring-Engines mit Machine Learning für intelligente Compliance-Entscheidungen\n• Regulatory-Trend-Analysis für strategische Planung und Future-Readiness\n• Cost-Benefit-Optimization für effiziente Compliance-Investitionen\n• Stakeholder-Reporting-Automation für transparente Kommunikation und Trust-Building\n\n🌐 Enterprise-Scale Integration:\n• Multi-Jurisdiction-Compliance für globale Geschäftstätigkeit und Cross-Border-Operations\n• Cloud-native Compliance-Architecture für Skalierbarkeit und Flexibilität\n• Third-Party-Risk-Management für sichere Ecosystem-Integration\n• Business-Continuity-Integration für resiliente Compliance-Prozesse\n• Digital-Transformation-Alignment für zukunftsfähige Compliance-Strategien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Compliance-Frameworks und regulatorischen Anforderungen müssen in einer modernen IAM-Architektur berücksichtigt werden?',
        answer: "Moderne IAM-Architekturen müssen ein komplexes Geflecht internationaler, nationaler und branchenspezifischer Compliance-Frameworks navigieren, die sich kontinuierlich weiterentwickeln und verschärfen. Eine strategische IAM-Compliance-Architektur integriert diese verschiedenen Anforderungen in ein kohärentes, effizientes System, das nicht nur aktuelle Compliance gewährleistet, sondern auch für zukünftige regulatorische Entwicklungen gerüstet ist.\n\n🌍 Internationale Privacy und Data Protection Frameworks:\n• GDPR als globaler Gold-Standard für Datenschutz mit strengen Anforderungen an Consent-Management, Data-Minimization und Right-to-be-Forgotten\n• CCPA und CPRA für kalifornische Datenschutzanforderungen mit Consumer-Rights und Transparency-Obligations\n• LGPD für brasilianische Datenschutzbestimmungen mit ähnlichen Prinzipien wie GDPR\n• PIPEDA für kanadische Privacy-Anforderungen mit Fokus auf Reasonable-Purposes und Consent\n• Emerging Privacy-Laws in verschiedenen Jurisdiktionen mit zunehmend harmonisierten Anforderungen\n\n🏦 Financial Services und Banking Regulations:\n• SOX für US-amerikanische börsennotierte Unternehmen mit strengen Internal-Controls und Financial-Reporting-Requirements\n• PCI-DSS für Kreditkartenverarbeitung mit detaillierten Security-Standards und Regular-Assessments\n• Basel III für Bankenregulierung mit Kapital- und Liquiditätsanforderungen\n• MiFID II für europäische Finanzdienstleistungen mit Investor-Protection und Market-Transparency\n• DORA für digitale operative Resilienz im Finanzsektor mit ICT-Risk-Management\n\n🏥 Healthcare und Life Sciences Compliance:\n• HIPAA für US-amerikanische Gesundheitsdaten mit Privacy-Rule und Security-Rule\n• FDA-Validierung für pharmazeutische und medizinische Geräte mit GxP-Compliance\n• EU-MDR für Medizinprodukte mit Clinical-Evidence und Post-Market-Surveillance\n• GDPR-Spezialanforderungen für Gesundheitsdaten mit Enhanced-Consent und Special-Categories\n• Clinical-Trial-Regulations mit Data-Integrity und Audit-Trail-Requirements\n\n🔒 Cybersecurity und Information Security Standards:\n• ISO 27001 für Information-Security-Management-Systems mit Risk-based Approach\n• NIST-Framework für Cybersecurity mit Identify, Protect, Detect, Respond, Recover\n• SOC 2 für Service-Organizations mit Trust-Services-Criteria\n• FedRAMP für US-Government-Cloud-Services mit Continuous-Monitoring\n• NIS2-Directive für kritische Infrastrukturen mit Incident-Reporting und Risk-Management\n\n⚖️ Industry-Specific und Emerging Regulations:\n• FERPA für Bildungseinrichtungen mit Student-Privacy-Protection\n• GLBA für Finanzinstitute mit Customer-Information-Protection\n• COPPA für Kinder-Online-Privacy mit Parental-Consent-Requirements\n• AI-Act für künstliche Intelligenz mit Risk-based Classification\n• Digital-Services-Act für Online-Platforms mit Content-Moderation und Transparency\n\n🔄 Cross-Framework Integration Strategies:\n• Unified-Compliance-Architecture für effiziente Multi-Framework-Abdeckung\n• Common-Controls-Mapping für Synergien zwischen verschiedenen Standards\n• Risk-based Prioritization für optimale Resource-Allocation\n• Continuous-Compliance-Monitoring für Real-time Regulatory-Adherence\n• Future-Readiness-Planning für emerging Regulations und Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie implementiert man eine effektive Audit-Bereitschaft-Strategie für IAM-Systeme und welche Dokumentations- und Evidence-Management-Prozesse sind erforderlich?',
        answer: "Eine effektive Audit-Bereitschaft-Strategie transformiert IAM-Systeme von reaktiven Compliance-Tools zu proaktiven Evidence-Generation-Engines, die kontinuierlich audit-ready sind und Prüfungsprozesse von stressigen, zeitaufwändigen Ereignissen zu routinemäßigen, effizienten Validierungen verwandeln. Diese Strategie erfordert eine durchdachte Kombination aus automatisierter Documentation, intelligenter Evidence-Collection und strategischer Auditor-Collaboration.\n\n📋 Comprehensive Documentation Framework:\n• Policy-and-Procedure-Documentation mit versionierter Kontrolle und Regular-Updates\n• Technical-Architecture-Documentation mit Detailed-System-Diagrams und Data-Flow-Maps\n• Risk-Assessment-Documentation mit Threat-Modeling und Mitigation-Strategies\n• Change-Management-Documentation mit Impact-Analysis und Approval-Workflows\n• Training-and-Awareness-Documentation mit Completion-Records und Competency-Assessments\n\n🔍 Automated Evidence Collection Systems:\n• Real-time Audit-Trail-Generation mit Comprehensive-Logging und Tamper-Proof-Storage\n• Automated-Control-Testing mit Continuous-Validation und Exception-Reporting\n• Evidence-Aggregation-Platforms mit Intelligent-Categorization und Search-Capabilities\n• Compliance-Dashboard-Integration mit Real-time Status-Monitoring und Trend-Analysis\n• Artifact-Lifecycle-Management mit Retention-Policies und Secure-Disposal\n\n⚡ Continuous Monitoring und Assessment:\n• Real-time Compliance-Monitoring mit Automated-Alerting für Control-Failures\n• Periodic-Self-Assessments mit Gap-Analysis und Remediation-Planning\n• Third-Party-Assessment-Integration mit Vendor-Risk-Management\n• Penetration-Testing-Coordination mit Vulnerability-Assessment und Remediation-Tracking\n• Business-Continuity-Testing mit Disaster-Recovery-Validation\n\n🤝 Auditor Collaboration und Communication:\n• Pre-Audit-Preparation mit Scope-Definition und Resource-Planning\n• Auditor-Portal-Access mit Secure-Document-Sharing und Progress-Tracking\n• Interview-Preparation mit Subject-Matter-Expert-Coordination\n• Finding-Response-Management mit Root-Cause-Analysis und Corrective-Action-Plans\n• Post-Audit-Follow-up mit Implementation-Tracking und Validation\n\n📊 Evidence Quality und Integrity Management:\n• Data-Integrity-Controls mit Checksums und Digital-Signatures\n• Evidence-Validation-Processes mit Independent-Review und Approval\n• Retention-and-Disposal-Policies mit Legal-Hold-Management\n• Access-Controls für Evidence-Repositories mit Need-to-Know-Principles\n• Backup-and-Recovery-Procedures für Critical-Evidence-Protection\n\n🔄 Continuous Improvement und Optimization:\n• Audit-Feedback-Integration mit Process-Improvement-Initiatives\n• Efficiency-Metrics-Tracking mit Time-and-Cost-Optimization\n• Technology-Enhancement-Planning mit Automation-Opportunities\n• Stakeholder-Satisfaction-Measurement mit Service-Level-Agreements\n• Best-Practice-Sharing mit Industry-Benchmarking und Knowledge-Transfer"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Risk-based Access Control in der IAM-Compliance und wie kann es zur Erfüllung verschiedener regulatorischer Anforderungen beitragen?',
        answer: "Risk-based Access Control ist das intelligente Herzstück moderner IAM-Compliance-Strategien und ermöglicht es Organisationen, dynamische, kontextuelle Sicherheitsentscheidungen zu treffen, die sowohl höchste Sicherheitsstandards als auch optimale Benutzerfreundlichkeit gewährleisten. Diese adaptive Technologie transformiert statische Compliance-Kontrollen in intelligente, selbstlernende Systeme, die kontinuierlich Risiken bewerten und entsprechende Schutzmaßnahmen implementieren.\n\n🎯 Strategic Risk Assessment und Contextual Intelligence:\n• Multi-dimensional Risk-Scoring mit User-Behavior, Device-Trust, Location-Analysis und Time-Patterns\n• Threat-Intelligence-Integration für Real-time Risk-Adjustment basierend auf aktuellen Bedrohungslagen\n• Business-Context-Awareness mit Application-Sensitivity und Data-Classification-Integration\n• Historical-Pattern-Analysis mit Machine-Learning für Predictive-Risk-Assessment\n• Compliance-Context-Integration mit Regulatory-Requirement-Mapping und Control-Objectives\n\n🛡️ Adaptive Authentication und Authorization:\n• Step-up Authentication mit Risk-triggered Multi-Factor-Requirements\n• Conditional-Access-Policies mit Dynamic-Permission-Adjustment\n• Session-Risk-Monitoring mit Real-time Behavior-Analysis und Anomaly-Detection\n• Privilege-Escalation-Controls mit Just-in-Time-Access und Approval-Workflows\n• Continuous-Authentication mit Biometric-Validation und Device-Fingerprinting\n\n📊 Compliance Framework Integration:\n• GDPR-Compliance durch Data-Minimization und Purpose-Limitation-Enforcement\n• SOX-Compliance durch Segregation-of-Duties und Financial-Control-Validation\n• HIPAA-Compliance durch Minimum-Necessary-Access und Audit-Trail-Generation\n• PCI-DSS-Compliance durch Cardholder-Data-Protection und Access-Restriction\n• ISO-27001-Compliance durch Risk-based Security-Controls und Continuous-Monitoring\n\n⚡ Real-time Decision Making und Automation:\n• Policy-Engine-Integration mit Complex-Rule-Processing und Exception-Handling\n• Automated-Remediation mit Risk-Mitigation-Actions und Incident-Response\n• Workflow-Integration mit Business-Process-Alignment und Approval-Automation\n• Alert-and-Notification-Systems mit Stakeholder-Communication und Escalation\n• Performance-Optimization mit Load-Balancing und Response-Time-Management\n\n🔍 Advanced Analytics und Reporting:\n• Risk-Trend-Analysis mit Historical-Data-Mining und Pattern-Recognition\n• Compliance-Reporting-Automation mit Regulatory-Template-Generation\n• Audit-Evidence-Collection mit Detailed-Logging und Forensic-Capabilities\n• Business-Intelligence-Integration mit Executive-Dashboards und KPI-Tracking\n• Predictive-Analytics mit Future-Risk-Projection und Proactive-Mitigation\n\n🌐 Enterprise Integration und Scalability:\n• Multi-Cloud-Risk-Assessment mit Hybrid-Environment-Support\n• Third-Party-Integration mit Vendor-Risk-Assessment und Supply-Chain-Security\n• Global-Deployment-Support mit Regional-Compliance-Adaptation\n• High-Availability-Architecture mit Disaster-Recovery und Business-Continuity\n• API-driven Integration mit Modern-Application-Architectures und Microservices"
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
