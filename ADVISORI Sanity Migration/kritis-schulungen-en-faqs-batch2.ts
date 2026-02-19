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

const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'How can ADVISORI develop customized KRITIS training programs that consider industry-specific threat landscapes and operational characteristics?',
    answer: `Effective KRITIS training must consider the specific threat landscapes, operational characteristics, and regulatory requirements of different infrastructure sectors. ADVISORI develops highly specialized training programs that not only convey general security principles but specifically address the unique challenges and risk profiles of different KRITIS sectors.

🏭 Sector-specific Training Approaches:
• Energy Sector: Focus on ICS/SCADA security, grid resilience, and cyber-physical security with specialized simulations of blackout scenarios and critical infrastructure failures.
• Financial Sector: Integration of DORA compliance, payment system security, and fraud prevention with practical exercises on APT attacks and insider threats.
• Telecommunications: Emphasis on network security, 5G-specific vulnerabilities, and supply chain security with scenarios for large-scale communication outages.
• Healthcare: Specialization in medical device security, patient data protection, and healthcare-specific ransomware threats.

🎯 ADVISORI's Differentiated Development Approach:
• Threat Intelligence Integration: Continuous incorporation of current, sector-specific threat intelligence and attack patterns into training content.
• Operational Realism: Development of exercise scenarios based on real incident cases and industry-specific vulnerabilities.
• Regulatory Compliance Integration: Linking security training with sector-specific compliance requirements and audit preparation.
• Technology-specific Modules: Customized training modules for industry-specific technologies, protocols, and systems.

🔧 Customization and Localization:
• Cultural Fit and Organizational Culture: Adaptation of training approaches to specific corporate culture and existing work practices.
• Role-based Learning Paths: Development of differentiated learning paths for different roles, responsibilities, and competency levels within the organization.`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'What innovative training methods and technologies does ADVISORI use to effect sustainable behavioral changes in KRITIS employees?',
    answer: `Sustainable behavioral changes in critical infrastructures require innovative training methods that go beyond traditional presentations and e-learning modules. ADVISORI employs cutting-edge learning psychology, immersive technologies, and gamified approaches to achieve profound, lasting learning effects and create genuine security culture.

🚀 Innovative Training Technologies and Methods:
• Virtual Reality (VR) Incident Simulation: Immersive VR environments enable realistic simulation of critical security incidents without real risks – employees can experience cyber attacks, system failures, and emergency situations in a safe environment and learn to respond optimally.
• Gamification and Competitive Learning: Game-based learning approaches with leaderboards, achievements, and team challenges create intrinsic motivation and promote continuous engagement with security topics.
• Microlearning and Just-in-Time Training: Short, contextual learning modules are integrated directly into the workflow and provide relevant security information exactly when needed.
• Social Learning Platforms: Peer-to-peer learning and knowledge sharing through internal communities and expert networks promote organization-wide knowledge transfer.

🧠 Learning Psychology-based Approaches:
• Behavioral Nudging: Subtle behavioral prompts and reminders are integrated into daily workflows to make security-conscious behavior a habit.
• Spaced Repetition and Adaptive Learning: Algorithmically optimized repetition and personalized learning paths maximize retention rates and transfer effects.
• Scenario-based Learning: Realistic, contextual learning scenarios based on actual threats and incident cases from the industry.
• Peer Feedback and Mentoring: Structured peer review processes and internal security champion programs create sustainable learning communities.`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'How can ADVISORI measure and continuously optimize the effectiveness of KRITIS training programs to ensure sustainable ROI?',
    answer: `Measuring and continuously optimizing KRITIS training programs is essential for sustainable ROI and genuine behavioral changes. ADVISORI implements comprehensive metrics frameworks that not only document learning progress but also demonstrate real security improvements and business value increases.

📊 Multi-dimensional Success Measurement:
• Knowledge Retention Analytics: Continuous measurement of knowledge level and competency development through adaptive assessments, practical simulations, and real-world testing.
• Behavioral Change Metrics: Quantification of actual behavioral changes through observation of security practices, incident reporting rates, and proactive security measures.
• Business Impact Measurement: Direct linking of training effectiveness with measurable business results such as reduced incident costs, improved audit results, and increased operational resilience.
• Security Culture Assessment: Regular evaluation of organizational security culture through surveys, focus groups, and cultural indicators.

🔄 Continuous Optimization Strategies:
• Data-driven Program Enhancement: Use of learning analytics and performance data for continuous improvement of training content and methods.
• A/B Testing and Experimental Design: Systematic testing of different training approaches to identify the most effective methods for specific target groups.
• Feedback Loops and Iterative Development: Regular incorporation of participant feedback and stakeholder input into program development.
• Predictive Analytics for Risk Minimization: Use of machine learning to predict security risks and proactively adjust training programs.

📈 ROI Optimization and Value Demonstration:
• Cost-Benefit Analysis: Detailed analysis of training costs versus avoided incident costs and productivity increases.
• Long-term Impact Tracking: Long-term tracking of training effects over multiple years to demonstrate sustainable value creation.`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How can KRITIS training and awareness campaigns contribute to strengthening cyber resilience and business continuity?',
    answer: `KRITIS training and awareness campaigns are fundamental building blocks for organizational cyber resilience and business continuity. While technical security measures are important, the human element often forms the last and decisive line of defense. ADVISORI develops training programs that not only create awareness but actively contribute to resilience enhancement and continuity assurance.

🛡️ Resilience Building through Strategic Training Components:
• Incident Response Preparedness: Intensive training of all employee levels in incident detection, reporting, and response to minimize response times and limit damage.
• Crisis Leadership Development: Specialized programs for executives on effective crisis leadership, stakeholder communication, and business continuity management.
• Cross-functional Collaboration Training: Strengthening cross-departmental collaboration during security incidents through joint exercises and simulations.
• Recovery and Post-Incident Learning: Training in post-incident analysis, lessons learned, and continuous improvement of resilience capacities.

⚡ Business Continuity Enhancement:
• Operational Continuity Awareness: Training employees in critical business processes and alternative procedures during system failures or security incidents.
• Supply Chain Security Education: Sensitization to supply chain risks and training in secure vendor management practices.
• Regulatory Continuity Compliance: Integration of regulatory continuity requirements into daily work practices through targeted awareness measures.
• Stakeholder Communication Skills: Development of communication competencies for effective stakeholder information during continuity events.

🔄 Adaptive Resilience and Continuous Improvement:
• Learning Organization Development: Building a learning organization that learns from security incidents and near-misses and continuously improves its resilience capabilities.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQs batch 2 to KRITIS Schulungen English page...')
  
  try {
    const result = await client
      .patch('kritis-schulungen-awareness-kampagnen-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log(`✅ Added ${faqsBatch2.length} FAQs (batch 2)`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 2:', error)
    throw error
  }
}
