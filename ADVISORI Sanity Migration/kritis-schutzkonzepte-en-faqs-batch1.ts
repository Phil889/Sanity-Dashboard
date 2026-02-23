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

// FAQs 1-4 for KRITIS Protection Concepts Physical Digital
const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'Why is an integrated physical-digital protection concept essential for critical infrastructures and how does ADVISORI create synergistic security architectures?',
    answer: `Modern critical infrastructures are exposed to both physical and digital threats due to their increasing digitalization and networking. A fragmented view of physical and digital security creates dangerous vulnerabilities that can be exploited by attackers. ADVISORI develops integrated protection concepts that seamlessly connect both dimensions and achieve synergistic security effects.

🔒 Why integrated protection concepts are indispensable:
• Modern attack vectors: Cyber attacks often begin with physical access to systems or use physical vulnerabilities to bypass digital security measures.
• Operational interdependencies: Physical infrastructures are increasingly dependent on digital control systems, making physical and digital security inseparably connected.
• Complex threat landscape: APT groups and state actors use hybrid attack methods that include both physical and digital components.
• Regulatory requirements: KRITIS regulation and BSI IT-Grundschutz explicitly require consideration of physical and digital security aspects.

🛡️ ADVISORI's integrated security approach:
• Holistic risk analysis: We assess physical and digital threats in their interaction and identify overarching vulnerabilities and attack paths.
• Synergistic security architectures: Development of protection concepts that strengthen physical and digital security measures and create redundancies.
• Integrated monitoring: Implementation of monitoring systems that correlate physical and digital anomalies and create holistic threat pictures.
• Unified incident response: Building response processes that handle both physical and digital security incidents in a coordinated and effective manner.`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'How does ADVISORI develop customized protection concepts that meet current KRITIS requirements while creating future-proof security architectures?',
    answer: `Developing effective protection concepts for critical infrastructures requires in-depth analysis of specific threat landscapes and operational requirements. ADVISORI combines proven methodologies with innovative approaches to create protection concepts that not only defend against current threats but are also equipped for future challenges.

🎯 Customized protection concept development:
• Comprehensive asset inventory: Systematic capture and classification of all physical and digital assets by criticality and protection requirements.
• Threat modeling: Development of detailed threat models that consider both known and emerging threats and incorporate sector-specific risks.
• Risk-based security design: Prioritization of protective measures based on risk analyses and business impact assessments for optimal resource allocation.
• Layered defense strategies: Implementation of multi-layered security architectures that include preventive, detective, and responsive elements.

🔮 Future-oriented security architectures:
• Adaptive security systems: Development of protection concepts that integrate machine learning and AI-based anomaly detection and continuously adapt to new threats.
• Zero Trust principles: Implementation of Zero Trust architectures that enforce strict verification and minimal privileges for both physical and digital access.
• Resilience engineering: Building systems that not only defend against attacks but also ensure rapid recovery and continuous operational capability.
• Future-ready technologies: Integration of emerging technologies such as quantum-resistant cryptography, edge security, and IoT security frameworks into long-term security strategies.

🏗️ ADVISORI's structured development process:
• Baseline security assessment: Comprehensive evaluation of current security posture and identification of gaps and improvement opportunities.`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'What specific challenges arise when integrating physical and digital security measures and how does ADVISORI solve these technical and organizational complexities?',
    answer: `The integration of physical and digital security measures brings unique challenges that encompass both technical and organizational dimensions. ADVISORI has developed specialized solution approaches to manage these complexities and create coherent security architectures.

⚡ Technical integration challenges:
• Heterogeneous system landscapes: Physical security systems (access controls, CCTV, sensors) and IT security systems often use different protocols, standards, and architectures.
• Latency and real-time requirements: Physical security systems often require real-time responses, while IT security systems are designed for data analysis and pattern recognition.
• Legacy system integration: Critical infrastructures often use decades-old physical security systems that must be integrated with modern digital security solutions.
• Scalability challenges: Security solutions must be scalable for both small local installations and large-scale, distributed critical infrastructures.

🏢 Organizational integration complexities:
• Siloed security teams: Physical and IT security teams traditionally work separately with different processes, responsibilities, and reporting structures.
• Compliance fragmentation: Different regulatory requirements for physical (e.g., building security) and digital (e.g., IT-Grundschutz) security must be harmonized.
• Budget and resource allocation: Coordination of investments and resources between traditionally separate physical and IT security areas.
• Change management: Integration often requires significant changes in established workflows and organizational structures.

🔧 ADVISORI's solution approaches:
• Unified security platforms: Development of integrated security platforms that consolidate physical and digital security data into unified dashboards and analytics systems.
• API-based integration: Implementation of standardized APIs for seamless communication between physical and digital security systems.
• Cross-functional teams: Building interdisciplinary security teams that combine both physical and digital security competencies.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How does ADVISORI ensure that integrated protection concepts not only meet compliance but also increase operational efficiency and create business value?',
    answer: `Effective protection concepts should go beyond pure compliance and actively contribute to operational excellence and business value creation. ADVISORI develops security architectures that view compliance as a minimum standard and build upon it to create operational efficiency, cost optimization, and strategic advantages.

💼 From compliance to business value:
• Security as a business enabler: Transformation of security from a cost factor to a strategic enabler for new business models and market opportunities.
• Operational intelligence: Use of security data for operational insights, predictive maintenance, and performance optimization of critical infrastructures.
• Risk-adjusted decision making: Provision of data-driven decision bases for strategic investments and operational optimizations.
• Competitive advantage: Above-average security standards as a differentiating feature in tenders and partnerships.

📊 Measurable operational efficiency improvements:
• Automated compliance reporting: Reduction of manual compliance efforts by up to 70% through automated data collection and report generation.
• Integrated incident response: Shortening of Mean Time to Resolution (MTTR) for security incidents through coordinated physical and digital response processes.
• Predictive security analytics: Early detection of security risks and system anomalies to avoid unplanned outages and maintenance costs.
• Resource optimization: Optimization of security personnel and resources through intelligent automation and prioritized alerting.

🚀 Strategic business value generation:
• Enhanced service reliability: Improved service quality and availability as a direct competitive advantage and basis for premium pricing.
• Insurance premium optimization: Demonstrable security measures lead to reduced insurance costs and improved conditions.
• Stakeholder confidence: Strengthened trust from customers, partners, and regulators through transparent security governance.`
  }
]

export async function addFaqsBatch1() {
  const documentId = 'kritis-schutzkonzepte-physisch-digital-en'
  
  console.log('Adding FAQs batch 1 (1-4) to KRITIS Protection Concepts Physical Digital EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log(`✅ Added ${faqsBatch1.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch1()
