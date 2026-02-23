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

// FAQs 13-16 for KRITIS Protection Concepts Physical Digital
const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'How does ADVISORI develop incident response and crisis management strategies for coordinated physical-digital security incidents in critical infrastructures?',
    answer: `Security incidents in critical infrastructures can affect both physical and digital components and require coordinated response strategies. ADVISORI develops integrated incident response frameworks that enable rapid, effective responses to complex cyber-physical threats while ensuring business continuity and public safety.

🚨 Integrated incident detection and classification:
• Unified threat correlation: Development of systems that correlate physical security events (intrusion, sabotage) with digital anomalies (cyber attacks, system failures) and create comprehensive threat pictures.
• Multi-domain alert fusion: Integration of various alerting systems (SIEM, physical surveillance, IoT sensors) into central command and control systems for holistic situational awareness.
• Automated incident classification: Implementation of AI-powered classification systems that automatically categorize incidents by severity, impact area, and required response measures.
• Real-time impact assessment: Development of tools for immediate assessment of the impacts of security incidents on critical services and dependent infrastructures.

⚡ Coordinated crisis response orchestration:
• Cross-functional response teams: Building specialized teams that combine both technical IT security expertise and physical security and facility management competencies.
• Escalation frameworks: Development of clear escalation paths that automatically involve relevant stakeholders (internal teams, external partners, authorities) based on incident type and severity.
• Automated response orchestration: Implementation of automated response mechanisms that initiate immediate protective measures (system isolation, physical lockdowns) and support human decisions.
• Communication management: Building robust communication systems for internal coordination and external communication with stakeholders, media, and authorities.

🔄 Post-incident recovery and learning:
• Coordinated recovery processes: Development of recovery processes that synchronize physical and digital system restoration.
• Forensic investigation: Comprehensive forensic analysis of incidents covering both digital and physical evidence.
• Lessons learned integration: Systematic integration of incident insights into continuous improvement of protection concepts.`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'What specific challenges arise when implementing Zero Trust architectures in physical-digital KRITIS environments and how does ADVISORI solve these?',
    answer: `Zero Trust implementation in critical infrastructures brings unique challenges as traditional perimeter-based security concepts can conflict with operational requirements and legacy systems. ADVISORI develops pragmatic Zero Trust strategies that combine maximum security with operational efficiency and system compatibility.

🏗️ Architectural Zero Trust challenges:
• Legacy system integration: Critical infrastructures often use decades-old systems (SCADA, PLC) that were not designed for Zero Trust design and require special adaptation strategies.
• Operational Technology (OT) constraints: OT systems have unique requirements (real-time performance, availability) that challenge traditional Zero Trust implementations.
• Physical-digital boundary management: Definition and enforcement of Zero Trust principles at the interface between physical and digital assets.
• Network segmentation complexity: Implementation of microsecond-fast segmentation in complex, interconnected critical infrastructure networks.

🔐 ADVISORI's Zero Trust implementation strategy:
• Gradual Zero Trust adoption: Development of phased implementation strategies that do not impair critical systems and gradually introduce Zero Trust principles.
• Hybrid trust models: Building hybrid models that implement Zero Trust for new systems while maintaining pragmatic security measures for legacy systems.
• Identity-centric security: Focus on robust identity and access management systems that manage both human and machine identities in critical infrastructures.
• Behavioral analytics integration: Use of continuous behavioral analysis to validate trust decisions and detect anomalous activities.

⚡ Operational Zero Trust excellence:
• Dynamic risk assessment: Continuous assessment of trust levels based on context, behavior, and current threat intelligence.
• Micro-segmentation: Implementation of granular network segmentation that limits lateral movement even within trusted zones.
• Continuous verification: Establishment of continuous verification processes for all access requests, regardless of source or location.
• Policy automation: Automated enforcement of Zero Trust policies across physical and digital domains.`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How does ADVISORI consider human factors and insider threat management in integrated physical-digital protection concepts?',
    answer: `People are both the greatest strength and the greatest vulnerability in any security system. ADVISORI develops human-centric security strategies that address both unintentional errors and malicious insider activities while maintaining operational efficiency and employee satisfaction.

👥 Comprehensive human risk assessment:
• Behavioral baseline establishment: Development of individual behavioral baselines for employees in critical positions to detect abnormal activity patterns.
• Psychosocial risk factors: Consideration of psychosocial factors (stress, dissatisfaction, life crises) that can increase insider threat risks.
• Access pattern analysis: Continuous analysis of access patterns for both physical and digital systems to identify risky behaviors.
• Cross-domain activity correlation: Correlation of activities between physical and digital domains to detect coordinated insider threats.

🛡️ Proactive insider threat prevention:
• Least privilege implementation: Strict enforcement of least privilege principles for both physical and digital access with regular review and adjustment.
• Segregation of duties: Implementation of robust segregation of duties frameworks that distribute critical activities across multiple people.
• Continuous monitoring: Building non-invasive monitoring systems that monitor both digital and physical activities and identify anomalies.
• Buddy system implementation: Introduction of buddy system protocols for critical activities that reduce potential insider threats through peer oversight.

🎓 Human-centric security culture:
• Security awareness excellence: Development of continuous, role-specific security awareness programs that cover both physical and digital security aspects.
• Positive security incentives: Building incentive systems that reward security-conscious behavior and encourage reporting of security concerns.
• Psychological safety: Creating an environment where employees feel safe reporting security concerns without fear of retaliation.
• Work-life balance consideration: Recognition that overworked or stressed employees pose higher security risks.`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'How does ADVISORI ensure the scalability and performance of integrated protection concepts for growing critical infrastructures?',
    answer: `Critical infrastructures are continuously growing and integrating new technologies, which poses scaling and performance challenges for security architectures. ADVISORI develops scalable security frameworks that grow with the infrastructure while maintaining constant security standards and performance.

📈 Scalable security architecture design:
• Modular security frameworks: Development of modular security architectures that can seamlessly integrate new components without disrupting existing systems.
• Cloud-native security services: Implementation of cloud-native security services that automatically scale and support geographically distributed infrastructures.
• Microservices security architecture: Building microservices-based security solutions that enable independent scaling and flexible deployment strategies.
• Edge computing integration: Strategic placement of security services at edge locations for reduced latency and improved performance.

⚡ Performance optimization strategies:
• Intelligent load balancing: Implementation of intelligent load balancing algorithms that optimally distribute security processing across available resources.
• Caching and optimization: Strategic caching of security data and decisions to reduce processing overhead and latency.
• Parallel processing: Building parallelized security processing pipelines for simultaneous analysis of physical and digital security data.
• Hardware acceleration: Integration of specialized hardware (GPUs, FPGAs) for performance-critical security functions such as encryption and ML inference.

🔄 Dynamic resource management:
• Auto-scaling security services: Implementation of automatic scaling mechanisms that adjust security resources based on current load and threat situation.
• Predictive capacity planning: Use of machine learning to predict future capacity requirements and proactively scale resources.
• Resource optimization: Continuous optimization of resource utilization through intelligent workload distribution and prioritization.
• Cost-effective scaling: Balancing security requirements with cost efficiency through smart resource allocation strategies.`
  }
]

export async function addFaqsBatch4() {
  const documentId = 'kritis-schutzkonzepte-physisch-digital-en'
  
  console.log('Adding FAQs batch 4 (13-16) to KRITIS Protection Concepts Physical Digital EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log(`✅ Added ${faqsBatch4.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch4()
