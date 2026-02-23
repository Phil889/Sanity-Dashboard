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
    console.log('Updating SIEM Managed Services page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-managed-services' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-managed-services" not found')
    }
    
    // Create new FAQs for service models and SLAs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie gestaltet man effektive Service Level Agreements für SIEM Managed Services und welche KPIs sind kritisch?',
        answer: "Effektive Service Level Agreements für SIEM Managed Services sind das Fundament für erfolgreiche Partnerschaften und messbare Cybersecurity-Exzellenz. Sie müssen präzise, messbar und geschäftsrelevant sein, während sie gleichzeitig realistische Erwartungen setzen und Anreize für kontinuierliche Verbesserung schaffen.\n\n📊 Performance Metrics und KPIs:\n• Mean Time to Detection für verschiedene Threat Categories und Severity Levels\n• Mean Time to Response mit differenzierten Zielen basierend auf Incident Criticality\n• False Positive Rate Targets mit kontinuierlichen Verbesserungszielen\n• Alert Quality Metrics inklusive Actionability und Context Richness\n• Availability Targets für Service Delivery und System Uptime\n\n🎯 Service Quality Indicators:\n• Threat Detection Coverage Metrics für verschiedene Attack Vectors\n• Incident Classification Accuracy und Severity Assessment Quality\n• Escalation Timeliness und Communication Effectiveness\n• Customer Satisfaction Scores und Feedback Response Times\n• Knowledge Transfer Effectiveness und Documentation Quality\n\n⚡ Response Time Requirements:\n• Critical Incident Response innerhalb definierter Zeitfenster\n• High Priority Alert Investigation und Initial Assessment Timelines\n• Escalation Procedures mit klaren Timeframes für verschiedene Severity Levels\n• Communication Requirements für Status Updates und Progress Reports\n• Resolution Timelines mit Interim Mitigation und Final Resolution Targets\n\n📈 Continuous Improvement Commitments:\n• Regular Service Reviews und Performance Analysis Sessions\n• Trend Analysis und Proactive Improvement Recommendations\n• Technology Updates und Capability Enhancement Timelines\n• Training und Certification Requirements für Service Teams\n• Innovation Integration und Emerging Threat Response Capabilities\n\n💰 Financial und Commercial Terms:\n• Service Credit Structures für SLA Breaches mit angemessenen Penalties\n• Performance Bonus Mechanisms für Exceptional Service Delivery\n• Cost Transparency und Billing Accuracy Requirements\n• Change Management Procedures für Service Scope Modifications\n• Termination Clauses und Data Return Procedures\n\n🔒 Security und Compliance Obligations:\n• Data Protection und Privacy Compliance Requirements\n• Incident Notification Timelines und Communication Protocols\n• Audit Rights und Third-Party Assessment Permissions\n• Compliance Reporting und Documentation Standards\n• Business Continuity und Disaster Recovery Commitments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Herausforderungen entstehen bei der Integration von SIEM Managed Services und wie löst man diese?',
        answer: "Die Integration von SIEM Managed Services bringt komplexe technische, organisatorische und kulturelle Herausforderungen mit sich, die proaktive Planung und strukturiertes Change Management erfordern. Erfolgreiche Integration erfordert mehr als nur technische Konnektivität und umfasst People, Process und Technology Aspekte.\n\n🔧 Technische Integrationshürden:\n• Legacy System Compatibility und API-Verfügbarkeit für nahtlose Datenintegration\n• Network Connectivity und Security Requirements für sichere Datenübertragung\n• Data Format Standardization und Normalization Challenges\n• Real-time Data Streaming und Latency Management\n• Backup und Redundancy Planning für kritische Datenflows\n\n👥 Organisatorische Anpassungen:\n• Role Definition und Responsibility Mapping zwischen internen Teams und Provider\n• Communication Protocols und Escalation Procedures\n• Change Management für betroffene Teams und Stakeholder\n• Training Requirements für neue Prozesse und Interfaces\n• Governance Structure Anpassungen für Hybrid Service Delivery\n\n📋 Prozess-Integration Komplexitäten:\n• Incident Response Workflow Integration mit bestehenden ITSM Processes\n• Compliance Reporting Alignment mit internen Audit Requirements\n• Documentation Standards und Knowledge Management Integration\n• Quality Assurance Procedures für Service Delivery Validation\n• Performance Monitoring Integration mit bestehenden Dashboards\n\n🛡️ Security und Compliance Considerations:\n• Data Classification und Handling Procedures für sensitive Information\n• Access Control Management und Privileged Account Governance\n• Audit Trail Maintenance und Forensic Readiness\n• Regulatory Compliance Mapping und Responsibility Assignment\n• Third-Party Risk Management und Vendor Assessment Integration\n\n🔄 Lösungsansätze für erfolgreiche Integration:\n• Phased Implementation Approach mit Pilot Programs und Gradual Rollout\n• Dedicated Integration Team mit Cross-functional Expertise\n• Comprehensive Testing Procedures für alle Integration Points\n• Regular Checkpoint Reviews und Adjustment Mechanisms\n• Continuous Monitoring und Performance Validation\n\n📈 Best Practices für nachhaltige Integration:\n• Clear Communication Strategy für alle Stakeholder Groups\n• Comprehensive Documentation und Knowledge Transfer Programs\n• Regular Training Updates und Skill Development Initiatives\n• Feedback Loops für Continuous Improvement und Optimization\n• Strategic Partnership Development für Long-term Success"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie stellt man Datenqualität und Compliance bei SIEM Managed Services sicher?',
        answer: "Datenqualität und Compliance bei SIEM Managed Services erfordern rigorose Governance-Strukturen, kontinuierliche Überwachung und proaktive Qualitätssicherung. Diese Aspekte sind kritisch für die Effektivität der Security Operations und regulatorische Compliance-Sicherstellung.\n\n📊 Data Quality Management Framework:\n• Data Source Validation und Integrity Checking für alle eingehenden Log-Streams\n• Data Completeness Monitoring mit Alerting für Missing oder Delayed Data\n• Data Accuracy Verification durch Sampling und Cross-Reference Validation\n• Data Consistency Checks für Format Standardization und Normalization\n• Data Timeliness Monitoring für Real-time Processing Requirements\n\n🔍 Quality Assurance Processes:\n• Regular Data Quality Audits mit statistischen Sampling Methoden\n• Automated Quality Checks und Exception Reporting\n• Data Lineage Tracking für Transparency und Troubleshooting\n• Performance Baseline Establishment und Deviation Detection\n• Continuous Improvement Programs basierend auf Quality Metrics\n\n⚖️ Compliance Governance Structure:\n• Regulatory Mapping und Requirement Tracking für relevante Standards\n• Data Classification und Handling Procedures entsprechend Compliance Anforderungen\n• Audit Trail Maintenance mit Tamper-proof Logging und Retention Policies\n• Regular Compliance Assessments und Gap Analysis\n• Documentation Standards für Audit Readiness und Regulatory Reporting\n\n🛡️ Data Protection und Privacy Safeguards:\n• Data Minimization Principles für Collection und Processing\n• Encryption Standards für Data in Transit und at Rest\n• Access Control Mechanisms mit Role-based Permissions\n• Data Anonymization und Pseudonymization wo erforderlich\n• Cross-border Data Transfer Compliance für internationale Operations\n\n📋 Monitoring und Reporting Mechanisms:\n• Real-time Quality Dashboards für Stakeholder Visibility\n• Regular Quality Reports mit Trend Analysis und Recommendations\n• Compliance Status Reporting für Management und Audit Purposes\n• Exception Handling Procedures für Quality Issues und Compliance Breaches\n• Escalation Protocols für Critical Quality oder Compliance Problems\n\n🔄 Continuous Improvement Approach:\n• Regular Review Cycles für Quality Standards und Compliance Requirements\n• Feedback Integration von Audit Findings und Regulatory Updates\n• Technology Updates für Enhanced Quality Monitoring Capabilities\n• Training Programs für Quality Awareness und Compliance Understanding\n• Best Practice Sharing zwischen Provider und Customer Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Kostenmodelle gibt es für SIEM Managed Services und wie optimiert man die Kosteneffizienz?',
        answer: "SIEM Managed Services Kostenmodelle variieren erheblich in Struktur und Vorhersagbarkeit, was strategische Planung und aktives Cost Management erfordert. Die Auswahl des optimalen Kostenmodells und dessen kontinuierliche Optimierung sind entscheidend für nachhaltigen ROI und Budget-Kontrolle.\n\n💰 Pricing Model Varianten:\n• Fixed Monthly Fee für predictable Budgeting mit definierten Service Levels\n• Per-Device oder Per-Endpoint Pricing basierend auf überwachten Assets\n• Data Volume-based Pricing nach GB/TB processed oder stored Data\n• Hybrid Models mit Base Fee plus Usage-based Components\n• Tiered Service Models mit verschiedenen Service Levels und Pricing\n\n📊 Cost Structure Components:\n• Base Service Fee für Core SIEM Operations und Standard Monitoring\n• Additional Services Charges für Premium Features oder Custom Requirements\n• Data Storage Costs für Long-term Retention und Compliance Requirements\n• Professional Services Fees für Implementation, Training oder Consulting\n• Technology Licensing Costs für SIEM Platform und Additional Tools\n\n🎯 Cost Optimization Strategies:\n• Data Lifecycle Management für intelligente Retention und Archiving\n• Log Source Prioritization basierend auf Risk Assessment und Business Value\n• Service Level Optimization durch Right-sizing von Service Requirements\n• Volume Discounts Negotiation für Multi-year Commitments\n• Shared Services Utilization für Non-critical oder Standard Functions\n\n📈 ROI Maximization Approaches:\n• Clear Value Metrics Definition für Measurable Business Impact\n• Cost Avoidance Calculation durch Prevented Security Incidents\n• Efficiency Gains Measurement durch Reduced Internal Resource Requirements\n• Compliance Cost Savings durch Automated Reporting und Audit Support\n• Innovation Access Value durch Latest Technology und Expertise\n\n🔍 Cost Monitoring und Control:\n• Regular Cost Reviews mit Detailed Usage Analysis\n• Budget Variance Tracking und Forecasting\n• Service Utilization Optimization für Maximum Value Extraction\n• Contract Terms Optimization bei Renewal Negotiations\n• Alternative Provider Evaluation für Competitive Benchmarking\n\n⚖️ Total Cost of Ownership Considerations:\n• Hidden Costs Identification wie Integration, Training oder Change Management\n• Opportunity Costs Assessment für Internal Resource Allocation\n• Risk Costs Evaluation für Service Interruption oder Quality Issues\n• Scaling Costs Planning für Business Growth oder Changing Requirements\n• Exit Costs Consideration für Service Transition oder Termination"
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
