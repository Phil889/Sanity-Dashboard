import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const timestamp = Date.now()

// FAQs 5-8 for KRITIS Vulnerability Analysis & Risk Assessment
const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'How does ADVISORI ensure that our vulnerability analysis fully captures the complex interdependencies between IT and OT systems in critical infrastructures?',
    answer: `The convergence of IT and OT systems in critical infrastructures creates unique security challenges that traditional vulnerability analyses often overlook. ADVISORI has specialized expertise in the holistic analysis of these hybrid environments and understands the complex interactions between classic IT systems and industrial control systems.

⚙️ Holistic IT/OT Convergence Analysis:
• Cross-Domain Asset Mapping: Complete mapping of all IT and OT assets with documentation of their dependencies and communication paths.
• Protocol-Specific Security Analysis: Expertise in industrial protocols (Modbus, DNP3, IEC 61850) and their specific vulnerabilities and security implications.
• Air Gap Analysis: Assessment of the effectiveness of network segmentation and identification of unintended bridges between IT and OT networks.
• Legacy System Integration: Special consideration of old industrial systems that were not designed for cybersecurity but fulfill critical functions.

🔬 Specialized ADVISORI Methods for Critical Infrastructures:
• Operational Impact Assessment: Analysis of the potential impacts of IT security incidents on critical operational processes and service delivery.
• Safety-Security Convergence: Integration of safety and security aspects, as cyber attacks in critical infrastructures can cause physical hazards.
• Supply Chain Resilience: Assessment of the security of third-party components and their integration into the overall architecture.
• Incident Response Planning: Development of specific response plans for scenarios where IT security incidents threaten operational continuity.`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'To what extent can ADVISORI link vulnerability analysis with strategic business objectives and which KPIs demonstrate the success of our investments?',
    answer: `ADVISORI transforms traditional vulnerability analyses from technical reports to strategic business intelligence tools that are directly linked to your business objectives. We develop customized KPI frameworks that make the success of your security investments measurable and comprehensible for the C-Suite.

📊 Strategic KPI Integration and Business Value Measurement:
• Business Impact Quantification: Direct linking of identified vulnerabilities with potential business disruptions, revenue losses, and reputational damage.
• Service Level Correlation: Analysis of the impacts of security vulnerabilities on critical service level agreements and customer satisfaction.
• Compliance ROI Tracking: Measurement of the efficiency of compliance investments through reduction of audit findings and regulatory risks.
• Operational Efficiency Metrics: Quantification of the improvement in operational efficiency through systematic vulnerability remediation.

💼 C-Level Dashboard and Strategic Reporting:
• Executive Risk Scorecards: Development of understandable risk dashboards with clear trend indicators and action recommendations for executive management.
• Investment Prioritization Matrix: Provision of data-driven decision bases for prioritizing security investments based on business impact.
• Competitive Advantage Tracking: Measurement of how security improvements strengthen market position and open new business opportunities.
• Stakeholder Confidence Indices: Development of metrics to measure the confidence of customers, partners, and regulatory authorities in your security capabilities.`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'How does ADVISORI ensure that our vulnerability analysis also considers emerging technologies and their security implications for critical infrastructures?',
    answer: `The rapid development of emerging technologies such as IoT, AI/ML, 5G, and Edge Computing is fundamentally changing the threat landscape for critical infrastructures. ADVISORI combines deep expertise in traditional infrastructures with cutting-edge knowledge of new technologies to provide you with a future-proof security approach.

🚀 Future-Ready Technology Assessment:
• IoT/IIoT Security Analysis: Comprehensive assessment of the security implications of connected sensors and devices in critical infrastructures, including device management and patch strategies.
• AI/ML Security Assessment: Analysis of the risks and opportunities of AI systems in critical applications, including adversarial attack resistance and explainability.
• 5G Network Security: Specialized assessment of the security implications of 5G implementations, network slicing, and edge computing in critical infrastructures.
• Cloud-Edge Hybrid Architectures: Analysis of security challenges in integrating cloud services with edge computing in security-critical environments.

🔮 Proactive Technology Roadmap Integration:
• Technology Radar Integration: Continuous monitoring of emerging technologies and their potential security implications for your specific infrastructure.
• Future Threat Modeling: Development of threat models for planned technology implementations before they are deployed in production.
• Innovation Security Framework: Building processes for secure integration of new technologies without compromising existing security architecture.
• Standards Evolution Tracking: Proactive monitoring of evolving security standards and their impacts on your technology roadmap.`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'What role does vulnerability analysis play in preparing for regulatory inspections and how does ADVISORI support communication with regulatory authorities?',
    answer: `Regulatory inspections in critical infrastructures require not only technical compliance but also the ability to clearly communicate security measures and processes to regulatory authorities. ADVISORI comprehensively prepares you for inspections and supports the professional presentation of your security posture to regulators.

📋 Inspection-Ready Documentation and Compliance Preparation:
• Audit Trail Documentation: Complete, traceable documentation of all vulnerability analysis activities with clear timestamps and responsibilities.
• Compliance Gap Mapping: Systematic mapping of identified vulnerabilities to relevant regulatory requirements (KRITIS-V, IT-SiG 2.0, NIS2).
• Evidence Collection Framework: Structured collection and preparation of evidence for implemented security measures and their effectiveness.
• Remediation Tracking: Detailed tracking and documentation of vulnerability remediation measures with status updates and timelines.

🏛️ Authority Communication and Stakeholder Management:
• Regulator-Ready Reports: Preparation of technical vulnerability analysis results in understandable, regulatorily relevant reports for regulatory authorities.
• Expert Witness Support: Provision of subject matter experts for direct communication with regulatory authorities during inspections and inquiries.
• Continuous Compliance Demonstration: Development of processes for continuous demonstration of compliance beyond regular reporting cycles.
• Incident Communication Preparedness: Preparation of communication strategies in case vulnerabilities lead to reportable incidents.`
  }
]

export async function addFaqsBatch2() {
  const documentId = 'kritis-schwachstellenanalyse-risikobewertung-en'
  
  console.log('Adding FAQs batch 2 (5-8) to KRITIS Vulnerability Analysis & Risk Assessment EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log(`✅ Added ${faqsBatch2.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch2()
