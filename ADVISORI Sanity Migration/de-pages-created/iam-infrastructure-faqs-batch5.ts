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
    console.log('Updating IAM Infrastructure page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-infrastructure' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-infrastructure" not found')
    }
    
    // Create new FAQs for IAM Infrastructure team management and skills development
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Team-Strukturen und Skill-Development-Strategien sind erforderlich für den erfolgreichen Betrieb moderner IAM-Infrastructure?',
        answer: "Erfolgreiche IAM-Infrastructure erfordert interdisziplinäre Teams mit spezialisierten Fähigkeiten und kontinuierlicher Weiterbildung. Die Komplexität moderner Identity-Systeme macht es notwendig, sowohl technische Expertise als auch strategisches Verständnis zu entwickeln und dabei agile Arbeitsweisen zu etablieren.\n\n👥 Cross-functional Team Architecture:\n• DevOps Engineers mit Infrastructure-as-Code und Container-Orchestrierung-Expertise\n• Security Specialists mit Identity-Security und Compliance-Knowledge\n• Cloud Architects mit Multi-Cloud und Hybrid-Infrastructure-Experience\n• Site Reliability Engineers mit Monitoring und Performance-Optimization-Skills\n• Product Owners mit Business-Alignment und Stakeholder-Management-Capabilities\n\n🎓 Continuous Learning und Certification Programs:\n• Cloud Provider Certifications mit AWS, Azure und Google Cloud-Specializations\n• Security Certifications mit CISSP, CISM und Identity-specific Credentials\n• DevOps Certifications mit Kubernetes, Docker und CI/CD-Platform-Expertise\n• Vendor-specific Training mit IAM-Platform und Tool-Certifications\n• Industry Conference Participation für Trend-Awareness und Network-Building\n\n⚙️ Technical Skill Development Framework:\n• Infrastructure-as-Code Mastery mit Terraform, CloudFormation und Ansible\n• Container Technology Expertise mit Kubernetes, Docker und Service-Mesh\n• Programming Skills mit Python, Go und Infrastructure-Automation-Languages\n• Monitoring und Observability mit Prometheus, Grafana und Distributed-Tracing\n• Security Engineering mit Penetration-Testing und Vulnerability-Assessment\n\n🤝 Collaboration und Communication Excellence:\n• Agile Methodologies mit Scrum und Kanban für Iterative-Development\n• Cross-team Communication mit Regular Sync-Meetings und Knowledge-Sharing\n• Documentation Standards mit Comprehensive Runbooks und Architecture-Diagrams\n• Incident Response Training mit Coordinated Emergency-Response-Procedures\n• Stakeholder Management mit Business-Alignment und Executive-Communication\n\n🚀 Innovation und Future-Readiness:\n• Emerging Technology Research mit Proof-of-Concept-Development\n• Innovation Time Allocation mit Dedicated Research und Experimentation-Periods\n• Open Source Contribution für Community-Engagement und Skill-Enhancement\n• Internal Tech Talks mit Knowledge-Sharing und Best-Practice-Dissemination\n• Mentorship Programs für Junior-Developer-Growth und Knowledge-Transfer"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie etabliert man effektive Change Management und Release Engineering Prozesse für kritische IAM-Infrastructure-Updates?',
        answer: "Change Management für IAM-Infrastructure erfordert rigorose Prozesse, die Sicherheit und Stabilität gewährleisten, während sie gleichzeitig Innovation und kontinuierliche Verbesserung ermöglichen. Diese Prozesse müssen sowohl technische als auch organisatorische Aspekte berücksichtigen und dabei Risiken minimieren.\n\n📋 Structured Change Management Framework:\n• Change Advisory Board mit Cross-functional Stakeholder-Representation\n• Risk Assessment Matrix mit Impact und Probability-Evaluation\n• Change Classification mit Emergency, Standard und Normal-Change-Categories\n• Approval Workflows mit Automated und Manual-Approval-Gates\n• Rollback Planning mit Predefined Procedures und Success-Criteria\n\n🔄 Release Engineering und Deployment Automation:\n• CI/CD Pipeline Integration mit Automated Testing und Quality-Gates\n• Blue-Green Deployment für Zero-Downtime Infrastructure-Updates\n• Canary Releases mit Gradual Rollout und Performance-Monitoring\n• Feature Flags für Runtime-Control und Risk-Mitigation\n• Automated Rollback mit Health-Check-Failures und Performance-Degradation-Detection\n\n🧪 Comprehensive Testing und Validation:\n• Infrastructure Testing mit Automated Compliance und Security-Scanning\n• Performance Testing mit Load-Testing und Stress-Testing-Scenarios\n• Integration Testing mit End-to-End User-Journey-Validation\n• Disaster Recovery Testing mit Failover und Recovery-Procedure-Validation\n• Security Testing mit Penetration-Testing und Vulnerability-Assessment\n\n📊 Monitoring und Observability During Changes:\n• Real-time Monitoring mit Enhanced Alerting während Change-Windows\n• Performance Baseline Comparison mit Pre und Post-Change-Metrics\n• User Experience Monitoring mit Synthetic-Transactions und Real-User-Monitoring\n• Business Impact Tracking mit Service-Level-Objective-Measurement\n• Incident Detection mit Automated Anomaly-Detection und Escalation\n\n📝 Documentation und Communication Excellence:\n• Change Documentation mit Detailed Implementation-Plans und Procedures\n• Stakeholder Communication mit Proactive Updates und Status-Reporting\n• Post-Implementation Reviews mit Lessons-Learned und Process-Improvement\n• Knowledge Base Updates mit Procedure-Documentation und Troubleshooting-Guides\n• Training Material Updates mit Process-Changes und New-Feature-Documentation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Business Continuity und Service Level Management Strategien gewährleisten optimale IAM-Infrastructure-Verfügbarkeit?',
        answer: "Business Continuity für IAM-Infrastructure erfordert eine ganzheitliche Strategie, die technische Resilienz mit organisatorischen Prozessen verbindet. Diese Strategien müssen sicherstellen, dass kritische Identitätsdienste auch bei schwerwiegenden Störungen verfügbar bleiben und dabei definierte Service-Level-Objectives erfüllen.\n\n🎯 Service Level Management und SLA-Definition:\n• Service Level Objectives mit messbaren Availability, Performance und Recovery-Targets\n• Service Level Agreements mit Business-Stakeholder-Alignment und Penalty-Clauses\n• Service Level Indicators mit Real-time Measurement und Trend-Analysis\n• Capacity Management mit Proactive Resource-Planning und Scaling-Strategies\n• Performance Benchmarking mit Industry-Standards und Best-Practice-Comparisons\n\n🏗️ High Availability Architecture und Redundancy:\n• Multi-Zone Deployment mit Automatic Failover und Load-Distribution\n• Database Clustering mit Master-Slave-Replication und Automatic-Promotion\n• Load Balancer Redundancy mit Health-Checks und Traffic-Routing\n• Network Redundancy mit Multiple-Path-Routing und Bandwidth-Aggregation\n• Geographic Distribution mit Cross-Region-Replication und Disaster-Recovery-Sites\n\n⚡ Incident Management und Emergency Response:\n• Incident Response Team mit Defined Roles und Escalation-Procedures\n• Emergency Communication mit Automated Alerting und Stakeholder-Notification\n• War Room Procedures mit Coordinated Response und Decision-Making-Authority\n• Incident Classification mit Priority-Levels und Response-Time-Requirements\n• Post-Incident Analysis mit Root-Cause-Investigation und Prevention-Measures\n\n📊 Continuous Monitoring und Proactive Management:\n• 24/7 Monitoring mit Follow-the-Sun-Support und Global-Coverage\n• Predictive Analytics mit Trend-Analysis und Proactive-Issue-Identification\n• Health Check Automation mit Synthetic-Transactions und Service-Validation\n• Performance Trending mit Historical-Analysis und Capacity-Planning\n• Alerting Optimization mit Intelligent-Thresholds und Noise-Reduction\n\n🔄 Business Continuity Planning und Testing:\n• Business Impact Analysis mit Critical-Process-Identification und Dependency-Mapping\n• Recovery Time Objectives mit Realistic-Targets und Resource-Requirements\n• Disaster Recovery Testing mit Regular-Drills und Scenario-Simulation\n• Business Continuity Training mit Staff-Preparation und Procedure-Familiarization\n• Vendor Continuity Planning mit Supplier-Risk-Assessment und Alternative-Sourcing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickelt man eine strategische IAM-Infrastructure-Governance, die Innovation ermöglicht und gleichzeitig Risiken kontrolliert?',
        answer: "Strategische IAM-Infrastructure-Governance balanciert Innovation mit Risikokontrolle durch etablierte Frameworks, die Flexibilität und Sicherheit optimal vereinen. Diese Governance-Strukturen müssen sowohl technische als auch geschäftliche Anforderungen berücksichtigen und dabei kontinuierliche Verbesserung fördern.\n\n🏛️ Governance Framework und Organizational Structure:\n• IAM Steering Committee mit Executive-Sponsorship und Strategic-Direction\n• Architecture Review Board mit Technical-Standards und Design-Approval\n• Risk Management Committee mit Risk-Assessment und Mitigation-Oversight\n• Change Advisory Board mit Change-Approval und Impact-Assessment\n• Security Council mit Security-Policy und Compliance-Oversight\n\n📋 Policy Framework und Standards Management:\n• Enterprise Architecture Standards mit Technology-Selection und Design-Principles\n• Security Policies mit Identity-Security-Requirements und Control-Frameworks\n• Operational Procedures mit Standard-Operating-Procedures und Best-Practices\n• Compliance Framework mit Regulatory-Requirements und Audit-Procedures\n• Innovation Guidelines mit Emerging-Technology-Evaluation und Adoption-Criteria\n\n⚖️ Risk Management und Control Framework:\n• Risk Register mit Identified-Risks und Mitigation-Strategies\n• Control Assessment mit Regular-Evaluation und Effectiveness-Measurement\n• Third-Party Risk Management mit Vendor-Assessment und Due-Diligence\n• Operational Risk Monitoring mit Key-Risk-Indicators und Threshold-Management\n• Business Continuity Risk mit Scenario-Planning und Contingency-Preparation\n\n🚀 Innovation Enablement und Technology Adoption:\n• Innovation Sandbox mit Safe-Environment für Technology-Experimentation\n• Proof-of-Concept Framework mit Structured-Evaluation und Decision-Criteria\n• Technology Radar mit Emerging-Technology-Tracking und Assessment\n• Pilot Program Management mit Controlled-Rollout und Success-Measurement\n• Knowledge Sharing mit Best-Practice-Dissemination und Lessons-Learned\n\n📊 Performance Management und Continuous Improvement:\n• Governance Metrics mit Effectiveness-Measurement und Performance-Tracking\n• Regular Governance Reviews mit Process-Evaluation und Improvement-Identification\n• Stakeholder Feedback mit Satisfaction-Surveys und Process-Enhancement\n• Benchmarking mit Industry-Standards und Best-Practice-Comparison\n• Maturity Assessment mit Capability-Evaluation und Development-Planning"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
