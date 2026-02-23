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
    console.log('Updating Azure PKI page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'azure-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "azure-pki" not found')
    }
    
    // Create new FAQs for advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Rolle spielt Azure PKI in der digitalen Transformation und Cloud-First Strategien?',
        answer: "Azure PKI fungiert als fundamentaler Enabler für digitale Transformation und Cloud-First Strategien, indem es sichere, skalierbare und moderne Certificate Management Lösungen bereitstellt. Diese Rolle ist entscheidend für Unternehmen, die ihre IT-Infrastrukturen modernisieren und gleichzeitig höchste Sicherheitsstandards aufrechterhalten möchten.\n\n🚀 Digital Transformation Enablement:\n• Cloud-native Certificate Management für moderne Application Architectures und Microservices\n• API-first Approach für nahtlose Integration in DevOps Workflows und Automation Pipelines\n• Containerization Support für Docker und Kubernetes Environments mit automatischem Certificate Provisioning\n• Serverless Computing Integration für Event-driven Certificate Management und Scaling\n• Modern Authentication Patterns für Single Sign-On und Identity Federation Scenarios\n\n☁️ Cloud-First Strategy Support:\n• Multi-cloud Certificate Management für Hybrid und Multi-cloud Deployments\n• Cloud-native Security Services Integration für comprehensive Security Posture Management\n• Elastic Scaling für Dynamic Certificate Demand basierend auf Business Growth\n• Global Distribution für Worldwide Application Deployment und Performance Optimization\n• Cost-effective Pricing Models für Predictable Certificate Management Costs\n\n🔄 Legacy System Modernization:\n• Migration Tools für Smooth Transition von On-premises PKI zu Cloud-based Solutions\n• Hybrid Integration Patterns für Gradual Migration ohne Service Disruption\n• Legacy Application Support durch Certificate Compatibility und Protocol Support\n• Modernization Roadmaps für Step-by-step Cloud Adoption Planning\n• Risk Mitigation Strategies für Secure Legacy System Integration\n\n📊 Business Agility Enhancement:\n• Rapid Certificate Provisioning für Fast Time-to-Market von New Applications\n• Self-service Capabilities für Developer Teams zur Acceleration von Development Cycles\n• Automated Compliance für Reduced Manual Overhead und Improved Accuracy\n• Scalable Architecture für Business Growth Support ohne Infrastructure Constraints\n• Innovation Enablement durch Modern Security Capabilities und Advanced Features"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie erfolgt die Migration von bestehenden PKI-Systemen zu Azure PKI?',
        answer: "Die Migration zu Azure PKI erfordert eine strukturierte Herangehensweise, die technische, organisatorische und sicherheitsbezogene Aspekte berücksichtigt. Ein erfolgreicher Migrationsprozess minimiert Risiken und gewährleistet Geschäftskontinuität während des Übergangs.\n\n📋 Migration Assessment und Planning:\n• Comprehensive Inventory aller bestehenden Certificates, Keys und PKI-Components\n• Dependency Mapping für Applications und Services die auf bestehende PKI angewiesen sind\n• Risk Assessment für Critical Certificate Dependencies und Potential Impact Analysis\n• Migration Timeline Planning mit Milestones und Rollback Procedures\n• Resource Planning für Technical Teams und Budget Allocation\n\n🔄 Phased Migration Approach:\n• Pilot Phase mit Non-critical Applications für Testing und Validation\n• Gradual Rollout für Production Systems mit Careful Monitoring und Validation\n• Parallel Operation Phase für Risk Mitigation und Smooth Transition\n• Final Cutover mit Comprehensive Testing und Validation Procedures\n• Post-migration Optimization für Performance und Cost Efficiency\n\n🛠️ Technical Migration Tools:\n• Certificate Export und Import Tools für Bulk Certificate Transfer\n• Automated Migration Scripts für Large-scale Certificate Movement\n• Validation Tools für Certificate Integrity und Functionality Verification\n• Monitoring Tools für Migration Progress Tracking und Issue Detection\n• Rollback Mechanisms für Emergency Recovery Scenarios\n\n🔐 Security Considerations:\n• Key Escrow Procedures für Secure Key Transfer und Storage\n• Certificate Chain Validation für Trust Relationship Maintenance\n• Security Assessment für New Azure PKI Configuration\n• Access Control Migration für User Permissions und Role Assignments\n• Audit Trail Preservation für Compliance und Regulatory Requirements"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Best Practices gibt es für Azure PKI Governance und Policy Management?',
        answer: "Effektive Azure PKI Governance und Policy Management sind entscheidend für die Aufrechterhaltung von Sicherheit, Compliance und operativer Effizienz. Diese Best Practices helfen Organisationen dabei, ihre PKI-Infrastrukturen professionell zu verwalten und zu steuern.\n\n📋 Governance Framework Development:\n• PKI Governance Committee Establishment mit Cross-functional Representation\n• Policy Development für Certificate Lifecycle Management und Security Standards\n• Role-based Access Control Definition für Administrative Functions und Operations\n• Change Management Processes für PKI Configuration und Policy Updates\n• Regular Governance Reviews für Continuous Improvement und Adaptation\n\n🔒 Security Policy Implementation:\n• Certificate Template Policies für Standardized Certificate Issuance\n• Key Length und Cryptographic Algorithm Standards für Future-proof Security\n• Certificate Validity Period Policies für Optimal Security und Operational Balance\n• Revocation Policies für Compromised oder Expired Certificates\n• Multi-factor Authentication Requirements für Administrative Access\n\n📊 Operational Excellence:\n• Automated Policy Enforcement für Consistent Application across Environments\n• Regular Policy Compliance Audits für Verification und Gap Identification\n• Documentation Standards für Policy Maintenance und Knowledge Transfer\n• Training Programs für Staff Education und Skill Development\n• Incident Response Procedures für Policy Violations und Security Events\n\n🔄 Continuous Improvement:\n• Regular Policy Reviews für Relevance und Effectiveness Assessment\n• Stakeholder Feedback Integration für Policy Optimization\n• Industry Best Practice Adoption für Competitive Advantage\n• Technology Evolution Adaptation für Modern Security Requirements\n• Performance Metrics Tracking für Policy Effectiveness Measurement"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie unterstützt Azure PKI Compliance mit internationalen Standards und Regulierungen?',
        answer: "Azure PKI bietet umfassende Compliance-Unterstützung für internationale Standards und Regulierungen, die es Unternehmen ermöglicht, ihre regulatorischen Verpflichtungen zu erfüllen und gleichzeitig von modernen Cloud-basierten PKI-Services zu profitieren.\n\n🌍 International Standards Compliance:\n• ISO 27001 Compliance für Information Security Management Systems\n• Common Criteria Certification für High-assurance Security Requirements\n• FIPS Validation für US Government und Defense Applications\n• eIDAS Compliance für European Digital Identity und Trust Services\n• WebTrust Certification für Public Certificate Authorities\n\n🏛️ Regulatory Framework Support:\n• GDPR Compliance für European Data Protection Requirements\n• HIPAA Support für Healthcare Information Protection\n• SOX Compliance für Financial Reporting und Internal Controls\n• PCI DSS Support für Payment Card Industry Security\n• Industry-specific Regulations für Specialized Compliance Requirements\n\n📋 Audit und Documentation Support:\n• Comprehensive Audit Trails für Regulatory Reporting Requirements\n• Automated Compliance Reporting für Regular Regulatory Submissions\n• Evidence Collection für Audit Preparation und Regulatory Inspections\n• Documentation Templates für Compliance Policy Development\n• Regular Compliance Assessments für Ongoing Regulatory Adherence\n\n🔍 Continuous Compliance Monitoring:\n• Real-time Compliance Dashboards für Status Visibility und Management\n• Automated Compliance Checks für Proactive Issue Detection\n• Policy Violation Alerts für Immediate Response und Remediation\n• Compliance Metrics Tracking für Performance Measurement\n• Regular Compliance Reviews für Continuous Improvement"
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
