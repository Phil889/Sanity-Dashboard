import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Cloud page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-cloud' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-cloud" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie können Organisationen Zero Trust Architecture in Cloud-Umgebungen für ISO 27001 Compliance implementieren?',
        answer: "Zero Trust Architecture revolutioniert traditionelle Sicherheitsansätze und ist besonders relevant für Cloud-basierte ISO 27001 Implementierungen. Das Prinzip 'Never Trust, Always Verify' erfordert eine fundamentale Neuausrichtung der Sicherheitskontrollen und -prozesse.\n\n🔐 Identity-Centric Security Model:\n• Comprehensive Identity Verification für alle Benutzer, Geräte und Services\n• Multi-Factor Authentication als Standard für alle Zugriffe\n• Continuous Authentication und Risk-based Access Controls\n• Privileged Access Management mit Just-in-Time Principles\n• Device Trust und Endpoint Security Integration\n\n🌐 Network Micro-Segmentation:\n• Software-Defined Perimeters für granulare Network Controls\n• Application-Level Segmentation mit Service Mesh Architecture\n• East-West Traffic Inspection und Monitoring\n• Dynamic Security Policies basierend auf Context und Risk\n• Encrypted Communication für alle Service-to-Service Interactions\n\n📊 Continuous Monitoring und Analytics:\n• Real-time Behavior Analysis für Anomaly Detection\n• User and Entity Behavior Analytics Integration\n• Automated Threat Response und Incident Containment\n• Security Orchestration für Rapid Response Capabilities\n• Comprehensive Audit Logging für Compliance Documentation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Herausforderungen gibt es bei der Implementierung von ISO 27001 in Serverless und Edge Computing Umgebungen?',
        answer: "Serverless und Edge Computing bringen einzigartige Sicherheitsherausforderungen mit sich, die traditionelle ISO 27001 Ansätze erweitern müssen. Die ephemere Natur von Serverless Functions und die verteilte Architektur von Edge Computing erfordern innovative Sicherheitsstrategien.\n\n⚡ Serverless Security Challenges:\n• Function-Level Security Controls und Isolation\n• Event-Driven Security Monitoring und Logging\n• Dependency Management und Supply Chain Security\n• Cold Start Security Implications und Performance\n• Stateless Security Design und Session Management\n\n🌍 Edge Computing Security Considerations:\n• Distributed Security Management über geografische Standorte\n• Limited Physical Security an Edge Locations\n• Network Connectivity und Bandwidth Constraints\n• Local Data Processing und Privacy Requirements\n• Remote Management und Update Mechanisms\n\n🔄 Operational Security Adaptations:\n• Automated Security Deployment und Configuration\n• Centralized Security Policy Management\n• Distributed Monitoring und Log Aggregation\n• Edge-to-Cloud Security Integration\n• Compliance Validation in Distributed Environments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie sollten Organisationen Cloud Cost Optimization mit ISO 27001 Security Requirements balancieren?',
        answer: "Die Balance zwischen Cloud Cost Optimization und ISO 27001 Security Requirements erfordert einen strategischen Ansatz, der sowohl finanzielle Effizienz als auch umfassende Sicherheit gewährleistet. Erfolgreiche Organisationen integrieren Security-by-Design Prinzipien in ihre Cost Optimization Strategien.\n\n💰 Security-Aware Cost Management:\n• Right-Sizing von Security Controls basierend auf Risk Assessment\n• Automated Resource Scaling mit Security Constraints\n• Reserved Instance Planning für Security Infrastructure\n• Cost-Effective Security Tool Consolidation\n• Shared Security Services für Multi-Account Environments\n\n🔧 Efficient Security Architecture:\n• Native Cloud Security Services vs Third-Party Solutions\n• Automation zur Reduktion von Operational Overhead\n• Centralized Security Management für Economies of Scale\n• Open Source Security Tools Integration\n• Security as Code für Consistent und Efficient Deployment\n\n📊 ROI-Focused Security Investments:\n• Risk-Based Security Investment Prioritization\n• Security Metrics und KPIs für Cost-Benefit Analysis\n• Preventive Security Measures vs Reactive Incident Response Costs\n• Compliance Automation zur Reduktion von Manual Effort\n• Long-term Security Strategy Alignment mit Business Objectives"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Rolle spielt Artificial Intelligence und Machine Learning bei der Verbesserung von ISO 27001 Compliance in Cloud-Umgebungen?',
        answer: "Artificial Intelligence und Machine Learning transformieren ISO 27001 Compliance in Cloud-Umgebungen durch intelligente Automatisierung, proaktive Bedrohungserkennung und adaptive Sicherheitskontrollen. Diese Technologien ermöglichen eine neue Generation von selbstlernenden Sicherheitssystemen.\n\n🤖 Intelligent Threat Detection:\n• Machine Learning-basierte Anomaly Detection für unbekannte Bedrohungen\n• Behavioral Analytics für User und Entity Behavior Monitoring\n• Predictive Security Analytics für Proactive Threat Hunting\n• Automated Threat Intelligence Integration und Correlation\n• AI-Powered Incident Classification und Prioritization\n\n🔄 Adaptive Security Controls:\n• Dynamic Risk Assessment mit Real-time Context Analysis\n• Automated Policy Adjustment basierend auf Threat Landscape\n• Self-Healing Security Infrastructure mit AI-Driven Remediation\n• Intelligent Access Controls mit Continuous Risk Evaluation\n• Automated Compliance Monitoring mit Machine Learning Validation\n\n📈 Enhanced Compliance Management:\n• AI-Assisted Audit Preparation und Evidence Collection\n• Automated Compliance Gap Analysis und Remediation Recommendations\n• Intelligent Risk Scoring und Prioritization\n• Natural Language Processing für Policy und Procedure Analysis\n• Predictive Compliance Forecasting für Proactive Management\n\n⚠️ AI Security Considerations:\n• AI Model Security und Adversarial Attack Protection\n• Data Privacy und Ethics in AI-Powered Security Systems\n• Explainable AI für Audit Trail und Compliance Documentation\n• AI Governance Framework für Responsible AI Implementation\n• Continuous AI Model Validation und Performance Monitoring"
      }
    ]
    
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
