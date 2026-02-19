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
    console.log('Updating Datenschutzkoordinator Schulung page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie strukturiert ADVISORI spezialisierte Schulungsmodule für Datenschutzkoordinatoren im Bereich Customer Experience und Privacy-by-Design für nahtlose Banking-Services?",
        answer: "Moderne Banking-Kunden erwarten frictionless Digital Experiences ohne Kompromisse bei Privacy und Security. ADVISORI entwickelt Customer-Centric Privacy Training-Programme, die Datenschutzkoordinatoren zu User Experience Privacy Experts ausbilden, die Datenschutz als Enabler für Superior Customer Journeys positionieren.\n\n🎨 Privacy-Enhanced Customer Experience Design:\n• Friction-Free Privacy Integration: Training in nahtloser Privacy-Integration in Customer Onboarding, Account Management und Service Delivery ohne User Experience-Degradation oder Abandonment Rate-Erhöhung.\n• Consent Management Excellence: Spezialisierte Schulung in Dynamic Consent Mechanisms, Granular Permission Controls und User-Friendly Privacy Dashboards für Enhanced Customer Control und Trust.\n• Personalization vs. Privacy Balance: Advanced Training in Privacy-Preserving Personalization-Techniques, Behavioral Analytics und Customer Insights-Generation ohne Privacy-Invasion.\n• Transparency-as-a-Service Development: Schulung in Customer-facing Privacy Communication, Real-time Data Usage Transparency und Interactive Privacy Education für Customer Empowerment.\n\n🔄 Seamless Privacy Journey Optimization:\n• Privacy-by-Design Implementation: Training in Privacy-First Service Design, Data Minimization Strategies und Purpose Limitation-Integration für Customer-Centric Banking Services.\n• Cross-Channel Privacy Consistency: Entwicklung von Koordinatoren, die Omnichannel Privacy Experiences kreieren mit consistent privacy standards across Digital, Mobile und Branch interactions.\n• Real-Time Privacy Adaptation: Schulung in Dynamic Privacy Settings, Context-Aware Privacy Controls und Adaptive Consent Management für Responsive Customer Experiences.\n• Customer Privacy Analytics: Training in Privacy Impact Measurement auf Customer Satisfaction, Retention Rates und Service Adoption für Data-driven Privacy Optimization.\n• Privacy Innovation Labs: Entwicklung von Koordinatoren zu Privacy Innovation Catalysts, die neue Privacy-Enhanced Services konzipieren und Customer Value Creation durch Privacy Excellence ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "In welcher Weise entwickelt ADVISORI Data Governance und Lifecycle Management-Kompetenzen bei Datenschutzkoordinatoren für optimierte Banking-Datenarchitekturen?",
        answer: "Strategische Data Governance ist das Rückgrat erfolgreicher Banking-Operationen und DSGVO-Compliance. ADVISORI entwickelt Data Architecture Excellence-Programme, die Datenschutzkoordinatoren zu Data Governance Leaders ausbilden, die komplexe Banking-Datenlandschaften optimieren und Compliance-by-Design implementieren.\n\n📊 Strategic Data Architecture Governance:\n• Enterprise Data Mapping Excellence: Training in comprehensive Data Discovery, Data Lineage Tracking und Impact Analysis für vollständige Transparenz über Banking-Datenflüsse und Abhängigkeiten.\n• Data Classification und Categorization: Spezialisierte Schulung in Risk-based Data Taxonomy, Sensitivity Labeling und Automated Data Classification für intelligente Schutzmaßnahmen und Resource Allocation.\n• Master Data Management Integration: Advanced Training in Customer Data Integration, Data Quality Management und Golden Record-Maintenance für Consistent Customer Views und Compliance-Excellence.\n• Data Lake und Warehouse Governance: Entwicklung von Expertise in Big Data-Privacy-Governance, Analytics-Compliance und Data Science-Ethics für Modern Banking Analytics.\n\n🔄 Intelligent Data Lifecycle Optimization:\n• Automated Retention Management: Schulung in Policy-driven Data Retention, Automated Deletion Workflows und Compliance-Verification für Effizienz und Risk Reduction.\n• Data Minimization Strategies: Training in Just-in-Time Data Collection, Purpose-Limited Processing und Smart Data Reduction-Techniques für Optimal Privacy-Performance Balance.\n• Data Archival Excellence: Entwicklung von Koordinatoren in Long-term Data Preservation, Compliance-Ready Archiving und Recovery-Optimization für Regulatory Requirements.\n• Cross-System Data Synchronization: Schulung in Data Consistency Management, Real-time Synchronization und Distributed Data Governance für Complex Banking-IT-Landscapes.\n• Legacy System Integration: Training in Privacy-Compliant Legacy System-Integration, Gradual Data Migration und Compliance-Bridge-Strategies für Digital Transformation-Support."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie optimiert ADVISORI Vendor Management und Third-Party Risk Assessment-Schulungen für Datenschutzkoordinatoren in komplexen Banking-Partnerschaften?",
        answer: "Banking-Ecosystems basieren auf komplexen Third-Party-Relationships, die sophisticated Privacy-Governance erfordern. ADVISORI entwickelt Vendor Privacy Management-Expertisen, die Datenschutzkoordinatoren zu Third-Party Risk Champions ausbilden, die Ecosystem-Privacy ohne Business-Limitation sicherstellen.\n\n🤝 Strategic Vendor Privacy Governance:\n• Comprehensive Vendor Risk Assessment: Training in Multi-dimensional Risk Evaluation-Frameworks, Due Diligence-Prozessen und Continuous Vendor Monitoring für Dynamic Risk Management.\n• Contractual Privacy Excellence: Spezialisierte Schulung in Privacy-centric Contract Negotiation, Data Processing Agreement-Optimization und Liability Distribution für Maximum Protection.\n• Vendor Onboarding Integration: Entwicklung von Koordinatoren in Streamlined Vendor Privacy-Assessments, Compliance-Verification und Efficient Approval-Processes für Business Velocity.\n• Performance Monitoring Frameworks: Training in Vendor Privacy-Performance-Tracking, SLA-Definition und Compliance-Reporting für Ongoing Assurance.\n\n🔍 Advanced Third-Party Risk Mitigation:\n• Supply Chain Privacy Governance: Advanced Training in Multi-tier Vendor Management, Subprocessor-Control und Extended Enterprise-Privacy für Complete Ecosystem Oversight.\n• Cross-Border Vendor Compliance: Schulung in International Vendor-Governance, Adequacy Decision-Impact und Global Privacy-Harmonization für Multi-Jurisdiction Operations.\n• Vendor Incident Response Integration: Entwicklung von Koordinatoren in Vendor-Incident-Coordination, Joint Response-Protocols und Shared Liability-Management für Crisis Preparedness.\n• Technology Vendor Specialization: Training in Cloud Provider-Privacy, SaaS-Compliance und Platform-Privacy für Modern Banking-Technology-Stacks.\n• Exit Strategy Privacy Management: Schulung in Vendor-Termination-Privacy-Protocols, Data Return-Verification und Transition-Risk-Mitigation für Safe Vendor Changes."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie entwickelt ADVISORI Audit-Readiness und Regulatory Interface-Kompetenzen bei Datenschutzkoordinatoren für proaktive Compliance-Exzellenz?",
        answer: "Regulatorische Audits können Geschäftsoperationen dramatisch beeinträchtigen, aber bei strategischer Vorbereitung transformieren sie sich zu Opportunities für Compliance-Excellence-Demonstration. ADVISORI entwickelt Audit Excellence-Programme, die Datenschutzkoordinatoren zu Regulatory Champions ausbilden, die Audits als Competitive Advantages nutzen.\n\n🔍 Proactive Audit Excellence Framework:\n• Audit-Ready Documentation Architecture: Training in Comprehensive Documentation-Systems, Evidence-Management und Audit-Trail-Optimization für Seamless Regulatory Reviews.\n• Regulatory Relationship Management: Spezialisierte Schulung in Proactive Regulator-Communication, Transparency-Strategies und Trust-Building für Positive Regulatory Relationships.\n• Mock Audit Programs: Entwicklung von Koordinatoren in Internal Audit-Simulation, Gap-Identification und Continuous Readiness-Testing für Permanent Audit-Preparedness.\n• Regulatory Intelligence Gathering: Training in Regulatory Trend-Monitoring, Policy-Evolution-Tracking und Proactive Compliance-Adaptation für Strategic Positioning.\n\n⚖️ Advanced Regulatory Interface Excellence:\n• Regulatory Reporting Optimization: Advanced Training in Strategic Regulatory-Communications, Report-Quality-Enhancement und Proactive Information-Sharing für Regulator-Satisfaction.\n• Compliance Storytelling Excellence: Schulung in Narrative-Development für Compliance-Achievements, Success-Story-Communication und Value-Demonstration gegenüber Regulators.\n• Multi-Regulator Coordination: Entwicklung von Expertise in Simultaneous Regulatory-Management, Cross-Jurisdiction-Compliance und Harmonized Reporting für Global Operations.\n• Regulatory Innovation Partnerships: Training in Regulatory-Sandbox-Participation, Innovation-Compliance-Collaboration und Future-Regulation-Shaping für Industry Leadership.\n• Post-Audit Optimization: Schulung in Audit-Learning-Integration, Compliance-Enhancement und Regulatory-Feedback-Implementation für Continuous Improvement und Excellence-Demonstration."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
