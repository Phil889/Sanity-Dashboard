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
    console.log('Updating On-Premises IAM-Lösung page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'on-premises-iam-loesung' })
    
    if (!existingDoc) {
      throw new Error('Document "on-premises-iam-loesung" not found')
    }
    
    // Create new FAQs for On-Premises IAM security and best practices
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche fortschrittlichen Sicherheitstechnologien und -praktiken sind für moderne On-Premises IAM-Systeme unverzichtbar und wie implementiert man sie effektiv?',
        answer: "Moderne On-Premises IAM-Systeme erfordern eine Kombination aus bewährten Sicherheitspraktiken und innovativen Technologien, um den sich entwickelnden Bedrohungslandschaften standzuhalten. Diese Systeme müssen nicht nur aktuelle Angriffsvektoren abwehren, sondern auch zukunftssicher gegen neue Bedrohungen sein.\n\n🔐 Advanced Authentication Technologies:\n• Hardware Security Modules für kryptographische Operationen und sichere Schlüsselverwaltung\n• Biometric Authentication mit Liveness Detection und Anti-Spoofing-Technologien\n• Certificate-based Authentication mit PKI-Integration und automatischem Lifecycle Management\n• Risk-based Authentication mit Machine Learning für intelligente Sicherheitsentscheidungen\n• Passwordless Authentication mit FIDO2 und WebAuthn Standards\n\n🛡️ Zero-Trust Security Architecture:\n• Continuous Identity Verification mit Real-time Risk Assessment für jeden Zugriff\n• Micro-Segmentation mit granularen Netzwerkkontrollen und Isolation\n• Least Privilege Access mit Just-in-Time Elevation und automatischer Revokation\n• Device Trust mit Endpoint Compliance Verification und Certificate-based Device Authentication\n• Behavioral Analytics mit AI-gestützter Anomaly Detection und Threat Intelligence\n\n🔍 Advanced Threat Detection und Response:\n• User and Entity Behavior Analytics mit Machine Learning für Insider Threat Detection\n• Threat Intelligence Integration mit Real-time Feed Updates und Automated Response\n• Deception Technology mit Honeypots und Canary Tokens für Early Warning\n• Security Orchestration mit Automated Incident Response und Playbook Execution\n• Forensic Capabilities mit Chain-of-Custody und Evidence Management\n\n🔒 Encryption und Data Protection:\n• End-to-End Encryption für alle Identitätsdaten mit Hardware-backed Key Management\n• Homomorphic Encryption für Privacy-preserving Analytics und Processing\n• Quantum-resistant Cryptography für Future-proofing gegen Quantum Computing Threats\n• Data Loss Prevention mit Content Inspection und Policy Enforcement\n• Secure Multi-party Computation für Privacy-preserving Identity Verification\n\n📊 Security Monitoring und Analytics:\n• Security Information and Event Management mit Real-time Correlation und Alerting\n• Continuous Security Assessment mit Automated Vulnerability Scanning\n• Threat Hunting mit Proactive Search für Advanced Persistent Threats\n• Security Metrics und KPIs mit Executive Dashboard und Trend Analysis\n• Compliance Monitoring mit Automated Evidence Collection und Reporting\n\n⚙️ Operational Security Excellence:\n• Secure Development Lifecycle mit Security-by-Design und Code Review\n• Configuration Management mit Hardening Standards und Drift Detection\n• Patch Management mit Automated Testing und Rollback Capabilities\n• Incident Response mit Defined Procedures und Regular Tabletop Exercises\n• Security Training mit Role-based Programs und Awareness Campaigns"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie entwickelt man eine umfassende Kostenoptimierungsstrategie für On-Premises IAM-Systeme ohne Kompromittierung der Sicherheit oder Funktionalität?',
        answer: "Kostenoptimierung für On-Premises IAM-Systeme erfordert einen strategischen Ansatz, der Total Cost of Ownership, Performance-Effizienz und langfristige Skalierbarkeit berücksichtigt. Diese Optimierung muss Sicherheitsstandards und Funktionalität erhalten, während operative Kosten minimiert werden.\n\n💰 Total Cost of Ownership Analysis:\n• Comprehensive Cost Assessment mit Hardware, Software, Personal und Betriebskosten\n• Lifecycle Cost Modeling für langfristige Budgetplanung und ROI-Berechnung\n• Hidden Cost Identification wie Compliance, Training und Downtime-Kosten\n• Vendor Cost Analysis mit Lizenzoptimierung und Verhandlungsstrategien\n• Cloud Comparison Analysis für Hybrid-Deployment-Entscheidungen\n\n🏗️ Infrastructure Optimization:\n• Hardware Consolidation mit Virtualisierung und Container-Technologien\n• Resource Utilization Optimization mit Load Balancing und Auto-Scaling\n• Storage Optimization mit Tiered Storage und Data Lifecycle Management\n• Network Optimization mit Bandwidth Management und Traffic Shaping\n• Energy Efficiency mit Green IT Practices und Power Management\n\n⚡ Performance und Efficiency Improvements:\n• Database Optimization mit Query Tuning und Index Management\n• Caching Strategies mit Intelligent Cache Management und Hit Rate Optimization\n• Process Automation mit Workflow Optimization und Manual Task Elimination\n• Monitoring Optimization mit Intelligent Alerting und Noise Reduction\n• Capacity Planning mit Predictive Analytics für Right-sizing\n\n👥 Operational Cost Reduction:\n• Automation Implementation mit Self-Service Capabilities und Workflow Automation\n• Staff Optimization mit Cross-training und Skill Development\n• Vendor Management mit Consolidated Purchasing und Strategic Partnerships\n• Maintenance Optimization mit Predictive Maintenance und Preventive Measures\n• Training Efficiency mit Online Learning und Knowledge Management\n\n📊 Strategic Cost Management:\n• Budget Planning mit Multi-year Forecasting und Scenario Analysis\n• Cost Allocation mit Chargeback Models und Department-level Accountability\n• Investment Prioritization mit Business Value Assessment und ROI Analysis\n• Risk-based Spending mit Security Investment Optimization\n• Continuous Improvement mit Regular Cost Reviews und Optimization Cycles\n\n🔄 Long-term Sustainability:\n• Technology Roadmap Planning mit Future-proofing und Migration Strategies\n• Scalability Planning mit Growth Accommodation und Elastic Architectures\n• Innovation Investment mit Emerging Technology Evaluation\n• Partnership Strategy mit Strategic Vendor Relationships und Ecosystem Development\n• Knowledge Management mit Documentation und Best Practice Sharing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Skalierung von On-Premises IAM-Systemen für globale Unternehmen und wie bewältigt man diese erfolgreich?',
        answer: "Die Skalierung von On-Premises IAM-Systemen für globale Unternehmen bringt komplexe Herausforderungen mit sich, die technische, regulatorische und operative Aspekte umfassen. Diese Systeme müssen lokale Compliance-Anforderungen erfüllen, während sie gleichzeitig globale Konsistenz und Performance gewährleisten.\n\n🌍 Global Architecture Design:\n• Multi-Region Deployment mit geografisch verteilten Rechenzentren für optimale Latenz\n• Data Residency Compliance mit lokaler Datenhaltung für regulatorische Anforderungen\n• Network Topology Optimization mit Private Connectivity und Redundant Links\n• Time Zone Management mit Global Operations und Follow-the-Sun Support\n• Cultural Adaptation mit lokalen Sprachen und regionalen Anpassungen\n\n📋 Regulatory und Compliance Challenges:\n• Multi-Jurisdiction Compliance mit verschiedenen nationalen und regionalen Gesetzen\n• Data Transfer Regulations mit Cross-Border Data Flow Management\n• Local Privacy Laws mit GDPR, CCPA und anderen regionalen Datenschutzgesetzen\n• Industry-Specific Regulations mit Finanzdienstleistungen, Gesundheitswesen und anderen Branchen\n• Audit Coordination mit verschiedenen Aufsichtsbehörden und Standards\n\n⚡ Performance und Scalability Solutions:\n• Distributed Architecture mit Load Balancing und Geographic Load Distribution\n• Caching Strategies mit Regional Cache Deployment und Intelligent Invalidation\n• Database Sharding mit Geographic Partitioning und Cross-Region Replication\n• CDN Integration für Static Content Delivery und Performance Optimization\n• Bandwidth Optimization mit Compression und Protocol Optimization\n\n🔄 Operational Excellence at Scale:\n• Global Operations Center mit Follow-the-Sun Support und Escalation Procedures\n• Standardized Processes mit Global Consistency und Local Adaptation\n• Change Management mit Coordinated Deployments und Rollback Procedures\n• Monitoring Integration mit Global Dashboard und Regional Alerting\n• Knowledge Management mit Global Best Practices und Local Expertise\n\n👥 Organizational Challenges:\n• Global Team Coordination mit Cross-Cultural Communication und Collaboration\n• Skill Development mit Global Training Programs und Knowledge Transfer\n• Vendor Management mit Global Contracts und Local Support Requirements\n• Budget Management mit Global Budgeting und Local Cost Allocation\n• Governance Structure mit Global Policies und Local Implementation\n\n🔧 Technical Implementation Strategies:\n• Microservices Architecture mit Independent Scaling und Regional Deployment\n• API Management mit Global API Gateway und Regional Endpoints\n• Identity Federation mit Cross-Region Trust Relationships\n• Disaster Recovery mit Global Backup and Recovery Strategies\n• Security Consistency mit Global Security Policies und Local Implementation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie implementiert man effektive Governance und Change Management Prozesse für kritische On-Premises IAM-Systeme in Enterprise-Umgebungen?',
        answer: "Effektive Governance und Change Management für On-Premises IAM-Systeme sind entscheidend für die Aufrechterhaltung von Sicherheit, Compliance und operativer Exzellenz. Diese Prozesse müssen Risikomanagement, Stakeholder-Alignment und kontinuierliche Verbesserung integrieren.\n\n🏛️ IAM Governance Framework:\n• Executive Sponsorship mit C-Level Commitment und Strategic Alignment\n• Governance Committee mit Cross-functional Representation und Decision Authority\n• Policy Framework mit Comprehensive Policies und Regular Reviews\n• Risk Management mit Continuous Risk Assessment und Mitigation Strategies\n• Compliance Oversight mit Regular Audits und Corrective Action Plans\n\n📋 Change Management Process:\n• Change Advisory Board mit Technical und Business Representatives\n• Risk Assessment mit Impact Analysis und Mitigation Planning\n• Testing Requirements mit Comprehensive Test Plans und Validation Criteria\n• Approval Workflows mit Multi-level Approvals und Emergency Procedures\n• Implementation Planning mit Detailed Schedules und Rollback Plans\n\n🔄 Operational Governance:\n• Service Level Management mit Defined SLAs und Performance Monitoring\n• Incident Management mit Escalation Procedures und Root Cause Analysis\n• Problem Management mit Proactive Problem Identification und Resolution\n• Capacity Management mit Performance Monitoring und Scaling Decisions\n• Availability Management mit Uptime Targets und Disaster Recovery Planning\n\n📊 Performance und Quality Management:\n• Key Performance Indicators mit Regular Reporting und Trend Analysis\n• Quality Assurance mit Testing Standards und Code Review Processes\n• Continuous Improvement mit Regular Process Reviews und Optimization\n• Benchmarking mit Industry Standards und Best Practice Adoption\n• Maturity Assessment mit Regular Capability Evaluations\n\n👥 Stakeholder Management:\n• Communication Strategy mit Regular Updates und Stakeholder Engagement\n• Training Programs mit Role-based Training und Certification Requirements\n• User Feedback mit Regular Surveys und Improvement Initiatives\n• Business Alignment mit Regular Business Reviews und Strategy Updates\n• Vendor Management mit Performance Reviews und Contract Management\n\n🔧 Technical Governance:\n• Architecture Review mit Design Standards und Technical Debt Management\n• Security Governance mit Security Reviews und Vulnerability Management\n• Configuration Management mit Change Control und Drift Detection\n• Documentation Management mit Current Documentation und Knowledge Transfer\n• Technology Roadmap mit Future Planning und Innovation Integration"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
