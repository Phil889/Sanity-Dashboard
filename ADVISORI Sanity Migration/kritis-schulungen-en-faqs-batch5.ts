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

const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_17`,
    _type: 'object',
    question: 'How can KRITIS training programs contribute to developing an organization-wide Security-First mentality and proactive risk culture?',
    answer: `Developing an organization-wide Security-First mentality requires more than pure knowledge transfer – it demands a fundamental cultural transformation that anchors security as an integral component of all business processes. ADVISORI develops comprehensive cultural change programs that transform security awareness from a reactive compliance topic to a proactive value creation driver.

🧠 Cultural Transformation and Mindset Development:
• Security-as-Value-Driver Positioning: Conveying the understanding that security does not cause costs but creates business value and enables competitive advantages.
• Proactive Risk Ownership: Developing a culture where every employee takes responsibility for risk management and proactively drives security improvements.
• Innovation-Security Integration: Training in seamless integration of security aspects into innovation processes without hindering creativity.
• Psychological Safety for Security Reporting: Creating a trust culture where employees report security incidents and concerns without fear of sanctions.

🎯 Organizational Behavior Change and Habit Formation:
• Behavioral Science-based Interventions: Using behavioral science insights for sustainable behavioral changes and habit formation.
• Positive Reinforcement Systems: Developing incentive systems that reward and reinforce security-conscious behavior.
• Social Learning and Peer Influence: Using social learning mechanisms and peer pressure for organization-wide behavioral changes.
• Continuous Feedback Loops: Implementing continuous feedback mechanisms for steady improvement of security culture.

🚀 Excellence Culture Development:
• Security Champions Network: Building a network of security champions at all organizational levels as multipliers of security culture.
• Cross-functional Security Integration: Integrating security thinking into all business functions and decision-making processes.
• Recognition and Celebration: Establishing recognition programs that celebrate security successes and positive behaviors.`
  },
  {
    _key: `faq_${timestamp}_18`,
    _type: 'object',
    question: 'What role do simulation and practical exercises play in increasing the effectiveness of KRITIS training programs?',
    answer: `Simulation and practical exercises are crucial for transforming theoretical knowledge into practical action competence. In critical infrastructures, theoretical knowledge alone can fail in stressful situations – only through realistic simulation and regular exercises do employees develop the necessary reflexes and decision-making abilities for effective crisis response. ADVISORI develops highly realistic exercise scenarios that create genuine action competence.

🎮 Immersive Simulation Technologies and Realistic Scenarios:
• High-Fidelity Cyber Range Exercises: Use of specialized cyber ranges for realistic simulation of complex attack scenarios without real risks to critical systems.
• Crisis Simulation and Decision-Making under Stress: Development of highly realistic crisis simulations that train decision-making under time pressure and stress.
• Multi-stakeholder Tabletop Exercises: Complex tabletop exercises with various internal and external stakeholders for realistic crisis coordination.
• Virtual Reality Incident Response: VR-based incident response simulations for immersive, risk-free practice of critical action sequences.

⚡ Progressive Skill Building and Competency Development:
• Graduated Complexity Training: Systematic building of competencies through progressively more complex exercise scenarios from individual cases to organization-wide crises.
• Real-time Performance Analytics: Continuous assessment of performance during exercises with immediate feedback for optimal learning.
• Muscle Memory Development: Repeated practice of critical action sequences until automatic response in stressful situations.
• Cross-functional Team Exercises: Interdisciplinary exercises to strengthen collaboration between different areas during security incidents.

📊 Assessment and Continuous Improvement:
• Evidence-based Performance Measurement: Systematic measurement of exercise effectiveness and learning progress through objective metrics.
• After-Action Reviews: Structured debriefings after exercises to identify lessons learned and improvement opportunities.
• Continuous Scenario Development: Regular updating and expansion of exercise scenarios based on current threats and organizational changes.`
  },
  {
    _key: `faq_${timestamp}_19`,
    _type: 'object',
    question: 'How can ADVISORI ensure the sustainability and long-term effectiveness of KRITIS training investments?',
    answer: `Ensuring sustainable effectiveness of KRITIS training investments requires systematic approaches to learning transfer optimization, continuous reinforcement, and organizational anchoring. Many training programs fail not due to content quality but due to insufficient integration into daily work and lack of long-term reinforcement. ADVISORI develops sustainability frameworks that ensure lasting success.

🔄 Sustainability Framework and Long-term Impact:
• Learning Transfer Optimization: Systematic design of training programs for maximum transfer from learning environment to daily work practice with structured follow-up activities.
• Spaced Repetition and Reinforcement: Scientifically based repetition cycles and reinforcement measures for long-term knowledge retention and behavioral change.
• Integration in Performance Management: Anchoring security competencies in performance evaluations, career development, and incentive systems.
• Organizational Memory Systems: Building systematic organizational memories that preserve knowledge and experiences beyond personnel changes.

📈 Continuous Learning Ecosystem Development:
• Self-sustaining Learning Communities: Developing internal learning communities that independently evolve and mutually support each other.
• Knowledge Management Integration: Linking training content with organizational knowledge management systems for continuous availability and updating.
• Mentoring and Peer Learning Networks: Building sustainable mentoring structures and peer learning networks for continuous knowledge exchange.
• Innovation Labs for Security Learning: Establishing internal innovation labs that continuously develop and test new learning formats and methods.

🎯 ROI Maximization and Value Creation:
• Multi-year Impact Tracking: Long-term tracking of training effects over multiple years to demonstrate sustainable value creation.
• Continuous Optimization Cycles: Regular review and optimization of training programs based on performance data and feedback.
• Stakeholder Value Communication: Regular communication of training ROI and value creation to all relevant stakeholders.`
  },
  {
    _key: `faq_${timestamp}_20`,
    _type: 'object',
    question: 'What forward-looking trends and developments should be considered in the strategic planning of KRITIS training programs?',
    answer: `Strategic planning of KRITIS training programs must anticipate forward-looking trends and developments to remain relevant and effective long-term. The cyber threat landscape, technologies, and regulatory requirements are developing exponentially, and training programs must be designed agilely and forward-looking. ADVISORI systematically integrates trend analysis and future-readiness into all training strategies.

🚀 Technology Evolution and Future Learning Modalities:
• Artificial Intelligence Integration: Use of AI for personalized learning paths, adaptive content, and predictive learning analytics to optimize training effectiveness.
• Quantum Computing Implications: Forward-looking training on quantum threats, post-quantum cryptography, and the impacts of quantum computing on KRITIS security.
• Extended Reality (XR) Learning Environments: Integration of AR, VR, and Mixed Reality for immersive, highly realistic training environments of the next generation.
• Blockchain-based Certification and Credentialing: Use of blockchain technology for tamper-proof certification and skill verification.

🌐 Regulatory Evolution and Compliance Future:
• AI Act and Algorithmic Accountability: Preparation for new regulatory requirements for AI systems in critical infrastructures.
• Climate Security Integration: Consideration of climate-related security risks and resilience requirements in training programs.
• Global Regulatory Harmonization: Anticipation of increasing international coordination and harmonization of KRITIS standards.
• ESG Integration and Sustainable Security: Linking security training with ESG goals and sustainable development.

🔮 Organizational Future and Workforce Evolution:
• Remote and Hybrid Work Security: Development of specialized training modules for decentralized work models and their specific security challenges.
• Generational Workforce Changes: Adaptation of training approaches to different generational preferences and learning styles.
• Gig Economy and Flexible Workforce: Development of training concepts for flexible workforce models and temporary employees.
• Human-Machine Collaboration: Training in secure collaboration with AI systems and automated processes in critical infrastructures.`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQs batch 5 to KRITIS Schulungen English page...')
  
  try {
    const result = await client
      .patch('kritis-schulungen-awareness-kampagnen-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log(`✅ Added ${faqsBatch5.length} FAQs (batch 5)`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 5:', error)
    throw error
  }
}
