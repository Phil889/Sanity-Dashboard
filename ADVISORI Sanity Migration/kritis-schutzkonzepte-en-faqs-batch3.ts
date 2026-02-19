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

// FAQs 9-12 for KRITIS Protection Concepts Physical Digital
const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'How does ADVISORI address the complex regulatory requirements of different sectors when developing integrated protection concepts?',
    answer: `Critical infrastructures in different sectors are subject to different regulatory frameworks that define specific security requirements. ADVISORI develops sector-specific protection concepts that not only meet cross-sector KRITIS requirements but also seamlessly integrate sector-specific compliance obligations.

🏭 Sector-specific compliance integration:
• Energy sector: Integration of NERC CIP standards, EU Clean Energy Package, and national energy regulations into comprehensive cyber-physical security frameworks.
• Telecommunications: Compliance with TKG, NIS2 directive, and sector-specific BSI catalog measures for critical communication infrastructures.
• Water supply: Consideration of drinking water ordinance, EU Water Framework Directive, and specific physical security requirements for water infrastructures.
• Healthcare: Integration of data protection regulations (GDPR), medical device law, and hospital-specific security requirements.

📋 Multi-framework compliance management:
• Regulatory mapping: Systematic capture and correlation of all relevant regulatory requirements for specific infrastructures and business models.
• Gap analysis: Identification of overlaps, conflicts, and gaps between different regulatory frameworks for optimal compliance strategy.
• Unified compliance architecture: Development of integrated compliance architectures that meet multiple regulatory requirements with minimal redundancy.
• Continuous regulatory monitoring: Establishment of processes for continuous monitoring of regulatory changes and their impacts on existing protection concepts.

🔄 Adaptive compliance strategies:
• Cross-border considerations: Consideration of international standards and requirements for organizations with cross-border operations.
• Future-proofing: Anticipation of upcoming regulatory changes (NIS2, DORA) and proactive integration into protection concepts.
• Audit readiness: Continuous preparation for regulatory audits through comprehensive documentation and evidence management.`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'What role do supply chain security and third-party risk management play in integrated KRITIS protection concepts from ADVISORI?',
    answer: `Modern critical infrastructures are increasingly dependent on complex supply chains and third-party services, creating new attack vectors and risks. ADVISORI develops comprehensive supply chain security frameworks that address both physical and digital aspects of supply chain risks and implement integrated protective measures.

🔗 Comprehensive supply chain risk assessment:
• Third-party risk profiling: Development of detailed risk profiles for all critical suppliers, service providers, and partners based on their role in the critical infrastructure.
• Dependency mapping: Visualization and analysis of complex dependencies between internal systems and external providers to identify critical single points of failure.
• Vendor security assessment: Implementation of continuous security assessments for suppliers with standardized frameworks and automated monitoring tools.
• Supply chain threat intelligence: Integration of specialized threat intelligence for supply chain-specific threats and attack patterns.

🛡️ Integrated supply chain protection:
• Secure by design procurement: Development of procurement policies that integrate security requirements from the start in supplier selection and contract design.
• Zero Trust supply chain: Implementation of Zero Trust principles for all supplier interactions, including continuous verification and minimal privileges.
• Physical supply chain security: Securing physical supply chains through tracking, tamper detection, and secure logistics processes for critical components.
• Software supply chain security: Implementation of code signing, Software Bill of Materials (SBOM), and continuous vulnerability assessments for software components.

⚡ Continuous third-party monitoring:
• Real-time vendor monitoring: Building systems for continuous monitoring of the security posture of critical suppliers and service providers.
• Automated risk scoring: Implementation of automated risk scoring systems that continuously assess and update supplier risk profiles.
• Incident notification processes: Establishment of rapid notification processes for security incidents at suppliers that could affect your infrastructure.
• Contract security requirements: Integration of comprehensive security requirements and audit rights into supplier contracts.`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'How does ADVISORI integrate emerging technologies like AI, IoT, and 5G into secure KRITIS protection concepts without compromising security?',
    answer: `The integration of emerging technologies into critical infrastructures offers enormous potential for efficiency improvement and innovation but also brings new security risks. ADVISORI develops secure innovation frameworks that leverage the benefits of new technologies while maintaining robust security architectures.

🤖 Secure AI integration in critical infrastructures:
• AI security by design: Development of AI systems with integrated security measures, including adversarial attack protection and model poisoning prevention.
• Explainable AI for critical decisions: Implementation of explainable AI models for security-critical applications that ensure transparency and traceability.
• AI-powered security operations: Use of machine learning for enhanced threat detection, behavioral analytics, and predictive security management.
• Federated learning frameworks: Building secure federated learning systems that ensure data protection and security when using distributed data sources.

📡 IoT security excellence for KRITIS:
• Secure IoT device lifecycle: Implementation of comprehensive security measures for the entire IoT device lifecycle from procurement to disposal.
• Network segmentation for IoT: Development of specialized network architectures that isolate IoT devices and prevent lateral movement by attackers.
• Edge computing security: Implementation of secure edge computing solutions for IoT data processing with minimal latency and maximum security.
• IoT device identity management: Building robust identity and access management systems for massive IoT deployments in critical infrastructures.

🌐 5G security integration:
• Private 5G networks: Design and implementation of private 5G networks for critical infrastructures with enhanced security controls and isolation.
• Network slicing security: Development of secure network slicing strategies that ensure isolation and security for different use cases.
• 5G edge security: Implementation of security measures for 5G edge computing environments in critical infrastructures.
• Mobile device management: Comprehensive management and security of mobile devices in 5G-enabled critical infrastructure environments.`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'How does ADVISORI ensure business continuity and disaster recovery in integrated physical-digital protection concepts for critical infrastructures?',
    answer: `Business continuity and disaster recovery are fundamental components of any critical infrastructure and require seamless integration of physical and digital recovery strategies. ADVISORI develops resilient continuity frameworks that anticipate both planned and unplanned interruptions and ensure minimal recovery times.

🏗️ Integrated resilience architecture:
• Cyber-physical recovery planning: Development of coordinated recovery plans that synchronize both digital system restoration and physical infrastructure repairs.
• Redundancy design: Implementation of multi-layered redundancies for critical systems, including geographically distributed backup locations and failover mechanisms.
• Cross-domain impact analysis: Analysis of the impacts of physical damage on digital systems and vice versa for comprehensive recovery planning.
• Adaptive recovery strategies: Development of flexible recovery strategies that can adapt to different damage scenarios and available resources.

⚡ Real-time continuity management:
• Integrated monitoring for business continuity: Monitoring of critical indicators for both physical and digital systems for early detection of continuity risks.
• Automated failover systems: Implementation of intelligent failover systems that automatically switch to backup systems and maintain critical services.
• Dynamic resource allocation: Development of systems for automatic redistribution of resources during partial failures to maintain critical functions.
• Real-time recovery coordination: Building coordination systems that synchronize recovery teams and activities in real-time.

🎯 Testing and validation:
• Comprehensive DR testing: Regular testing of all recovery scenarios under realistic conditions, including coordinated physical and digital recovery exercises.
• Tabletop exercises: Regular tabletop exercises to test decision-making processes and communication during crisis situations.
• Lessons learned integration: Systematic integration of insights from tests and real incidents into continuous improvement of recovery capabilities.
• Third-party recovery coordination: Coordination of recovery activities with critical suppliers and service providers.`
  }
]

export async function addFaqsBatch3() {
  const documentId = 'kritis-schutzkonzepte-physisch-digital-en'
  
  console.log('Adding FAQs batch 3 (9-12) to KRITIS Protection Concepts Physical Digital EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log(`✅ Added ${faqsBatch3.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch3()
