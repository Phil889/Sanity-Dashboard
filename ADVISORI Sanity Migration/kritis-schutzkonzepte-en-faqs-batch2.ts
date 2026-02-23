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

// FAQs 5-8 for KRITIS Protection Concepts Physical Digital
const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'How does ADVISORI address the specific challenges of physical security in critical infrastructures and what innovative approaches are used?',
    answer: `Physical security in critical infrastructures goes far beyond traditional perimeter protection measures. ADVISORI develops multi-layered physical security concepts that integrate both proven practices and innovative technologies to ensure comprehensive protection against physical threats.

🏗️ Multi-layered physical security architecture:
• Next-generation perimeter protection: Integration of intelligent sensor systems, AI-based video analysis, and autonomous surveillance technologies for seamless outdoor area security.
• Zone-based access controls: Implementation of graduated security zones with biometric access systems, multi-factor authentication, and continuous behavioral analysis.
• Structural protection: Assessment and reinforcement of structural security measures including blast-resistant constructions and protection against electromagnetic attacks.
• Environmental monitoring: Monitoring of environmental conditions, vibrations, and other physical anomalies that could indicate attacks or sabotage.

🤖 Innovation in physical security technology:
• Predictive physical security: Use of machine learning to predict and prevent physical security incidents based on behavioral patterns and environmental data.
• Drone detection and defense: Implementation of anti-drone systems to protect against airborne attacks and surveillance.
• IoT-based sensor networks: Distribution of intelligent sensors for real-time monitoring of critical areas with automatic anomaly detection.
• Augmented reality security: AR-supported security control and incident response for improved situational awareness.

🔐 Specialized KRITIS requirements:
• Critical asset protection: Customized protective measures for specific critical components such as transformers, control rooms, or server locations.
• Insider threat mitigation: Development of systems to detect and prevent insider threats through behavioral analysis and access pattern monitoring.
• Physical penetration testing: Regular testing of physical security measures through simulated attacks and vulnerability assessments.`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'What role do digital security technologies play in modern KRITIS protection concepts and how does ADVISORI integrate these with physical measures?',
    answer: `Digital security technologies form the backbone of modern critical infrastructures and require seamless integration with physical protective measures. ADVISORI develops cyber-physical security architectures that proactively detect and defend against digital threats while simultaneously strengthening physical security systems.

💻 Comprehensive digital security architecture:
• Network segmentation excellence: Implementation of microsecond-fast network segmentation with Zero Trust principles for critical control systems and operational technologies.
• Advanced threat detection: Deployment of AI-powered SIEM systems that identify and classify both known and unknown threats in real-time.
• Industrial control system security: Specialized security measures for SCADA, PLC, and other industrial control systems with air-gapped architectures where required.
• Quantum-ready cryptography: Preparation for future quantum computer threats through implementation of quantum-resistant encryption algorithms.

🔗 Cyber-physical integration:
• Unified security orchestration: Development of central orchestration platforms that correlate physical sensor data with digital security events and trigger automated responses.
• Bidirectional information flow: Establishment of secure communication channels between physical security systems and IT infrastructure for holistic threat intelligence.
• Convergent incident response: Building integrated incident response teams that can handle both cyber and physical security incidents in a coordinated manner.
• Cross-domain analytics: Implementation of analytics platforms that jointly analyze physical and digital security data and generate new insights.

⚡ Innovative digital security technologies:
• Behavioral analytics for critical systems: Machine learning-based detection of abnormal system and user behavior patterns.
• Deception technologies: Deployment of honeypots and deception systems to detect and analyze attacker activities.
• Automated threat hunting: Proactive search for hidden threats and compromises in critical systems.`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'How does ADVISORI design continuous monitoring and adaptive adjustment of protection concepts to evolving threat landscapes?',
    answer: `The threat landscape for critical infrastructures is continuously evolving, making static protection concepts ineffective. ADVISORI implements adaptive security architectures that proactively adapt to new threats and continuously optimize to ensure lasting protection.

📡 Next-generation continuous monitoring:
• 24/7 cyber-physical SOC: Building specialized Security Operations Centers that monitor and correlate physical and digital security events around the clock.
• Threat intelligence integration: Real-time integration of global threat intelligence feeds with local security data for proactive threat detection.
• Predictive analytics: Use of machine learning to predict potential security incidents based on historical data and current trends.
• Automated response orchestration: Implementation of automated response mechanisms that initiate immediate protective measures for critical threats.

🔄 Adaptive security architectures:
• Dynamic risk assessment: Continuous reassessment of risk profiles based on current threat information and changes in infrastructure.
• Self-healing security systems: Development of security systems that repair themselves after attacks and implement improved protective measures.
• Agile security frameworks: Implementation of agile methodologies in security processes for rapid adaptation to new requirements.
• Continuous compliance monitoring: Automated monitoring of compliance with changing regulatory requirements and standards.

🎯 Proactive threat anticipation:
• Emerging threat research: Active research and monitoring of new attack vectors, vulnerabilities, and threat actors.
• Red team exercises: Regular red team exercises to identify vulnerabilities and improve defensive capabilities.
• Scenario planning: Development of detailed scenarios for various attack types and corresponding response strategies.
• Threat intelligence sharing: Participation in industry-specific threat intelligence sharing networks for early warning of sector-specific threats.`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How does ADVISORI support organizations in developing a security-conscious culture and change management for integrated protection concepts?',
    answer: `Successful implementation of integrated protection concepts requires more than just technical solutions - it needs a fundamental cultural transformation toward a security-conscious organization. ADVISORI develops holistic change management strategies that connect technical implementation with organizational transformation.

👥 Building a security-conscious culture:
• Security awareness programs: Development of sector-specific awareness programs that cover both physical and digital security aspects and involve all organizational levels.
• Leadership engagement: Strategic consulting for executives on role modeling and active promotion of a security culture.
• Behavioral security training: Implementation of behavior-based security training based on real threat scenarios that convey practical skills.
• Security champion networks: Building internal networks of security ambassadors who act as multipliers and first points of contact for security questions.

🔄 Structured change management:
• Stakeholder mapping and engagement: Identification and systematic involvement of all relevant stakeholders from operations to C-level in the transformation process.
• Phased implementation strategy: Development of phased implementation strategies that enable gradual change and minimize resistance.
• Communication strategy: Building comprehensive communication strategies that create transparency and clarify the benefits of integrated protection concepts.
• Resistance management: Proactive identification and addressing of resistance to change through targeted measures.

🎓 Competency development and training:
• Cross-functional security teams: Building interdisciplinary teams that combine both physical and digital security competencies.
• Continuous learning pathways: Development of continuous learning paths for security professionals covering both domains.
• Certification programs: Support for relevant certifications (CISSP, CPP, PSP) for security personnel.
• Tabletop exercises: Regular exercises to test and improve security awareness and response capabilities.`
  }
]

export async function addFaqsBatch2() {
  const documentId = 'kritis-schutzkonzepte-physisch-digital-en'
  
  console.log('Adding FAQs batch 2 (5-8) to KRITIS Protection Concepts Physical Digital EN...')
  
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
