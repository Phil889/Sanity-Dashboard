import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
})

// FAQ Batch 2 (FAQs 5-8) for Employee Training EN
// Source: mitarbeiterschulungen
// Target: employee-training-en

const faqsBatch2 = [
  {
    _key: `faq_${Date.now()}_5`,
    _type: 'object',
    question: 'How are employee training programs differentiated for various hierarchy levels and departments?',
    answer: `🧩 Target Group-Specific Differentiation:
• Analysis of training needs by roles, tasks, and access permissions.
• Development of different training modules for basic, advanced, and expert knowledge.
• Adaptation of training depth to specific threat scenarios of the respective department.
• Consideration of industry-specific requirements and compliance regulations.
• Integration into existing personnel development concepts and career paths.

📊 Management & Executives:
• Focus on strategic importance of information security and risk management.
• Training on governance aspects, compliance requirements, and responsibilities.
• Teaching competencies for role model function and promotion of security culture.
• Decision support for resource allocation and prioritization of security measures.
• Integration of security topics into performance management and strategy development.

💻 IT & Technical Departments:
• In-depth technical training on current threats and defense measures.
• Hands-on training on secure system development, configuration, and maintenance.
• Teaching skills for detecting and handling security incidents.
• Specific training on tools, frameworks, and best practices for secure IT.
• Continuous updates on new technologies and vulnerabilities.

👥 Business Departments & Employees:
• Practical training on everyday security risks and correct behavior.
• Focus on department-specific risks (e.g., HR: personnel data, Finance: payment fraud).
• Exercises on typical attack vectors such as phishing, social engineering, or malware.
• Teaching clear action instructions for daily work and emergency scenarios.
• Low-threshold, frequent training instead of rare, complex sessions.

💡 Expert Tip:
Effective differentiation of employee training means not only different content for different groups, but also adapted formats, practical examples, and teaching methods. Training should be understood as part of a holistic security concept, not as an isolated measure.`
  },
  {
    _key: `faq_${Date.now()}_6`,
    _type: 'object',
    question: 'What role do training programs play in developing a sustainable security culture?',
    answer: `🏛️ Cultural Foundations:
• Training conveys shared values, norms, and behavioral standards for information security.
• Promotion of a common understanding of risks, responsibilities, and protection goals.
• Development of a common language and awareness for security topics.
• Reduction of barriers and resistance to security measures through understanding promotion.
• Creation of a foundation for continuous improvement and willingness to learn.

👥 Behavioral Change & Motivation:
• Promotion of intrinsic motivation by conveying the personal relevance of security.
• Development of self-efficacy and action competence in security topics.
• Reduction of uncertainties and fears in dealing with security threats.
• Establishment of security behavior as a natural part of work routine.
• Promotion of teamwork and mutual support in security topics.

👑 Leadership & Role Model Function:
• Training of managers to fulfill their role model function in security matters.
• Empowerment to promote and demand security-conscious behavior in the team.
• Development of competencies for integrating security topics into team meetings and communication.
• Teaching methods for recognizing and rewarding security-conscious behavior.
• Empowerment for constructive error culture and learning from security incidents.

🔄 Continuous Improvement Process:
• Establishment of feedback mechanisms for continuous optimization of security culture.
• Integration of lessons learned from incidents and near-misses into training content.
• Promotion of active engagement of all employees in security topics.
• Development of security champions and multipliers in all departments.
• Creation of a learning organization with continuous adaptation to new threats.

💡 Expert Tip:
Sustainable security culture does not develop through one-time training, but through continuous learning and reflection processes. Security training should therefore be embedded in a holistic concept that also includes informal learning processes, communication, incentives, and leadership behavior.`
  },
  {
    _key: `faq_${Date.now()}_7`,
    _type: 'object',
    question: 'How are training contents kept current and relevant?',
    answer: `🔍 Continuous Threat Analysis:
• Systematic monitoring of current threats and attack patterns in the own industry.
• Regular evaluation of vulnerability databases and security advisories.
• Analysis of incident reports and case studies on successful attacks.
• Integration of threat intelligence and information from CERTs and security authorities.
• Continuous assessment of relevance for the own organization and employees.

📊 Performance and Impact Measurement:
• Data-based analysis of effectiveness of existing training content and formats.
• Evaluation of simulation tests, assessments, and behavioral observations.
• Correlation of training successes with actual reduction of security incidents.
• Systematic collection and analysis of participant feedback.
• Identification of knowledge and competency gaps for targeted updates.

🔄 Agile Training Development:
• Quick integration of current incidents, threats, and learnings into training content.
• Modularization of content for flexible adaptation and targeted updates.
• Use of agile development methods for continuous improvement of training.
• Regular reviews and retrospectives for optimization of content and formats.
• Involvement of target group in further development of training content.

🗣️ Knowledge Management & Communication:
• Establishment of effective processes for knowledge transfer on new threats.
• Integration of current knowledge via internal communication channels and knowledge platforms.
• Use of micro-formats such as security tips, alerts, or short videos for current topics.
• Building a community of practice for continuous knowledge exchange.
• Networking with external experts and organizations for early access to new insights.

💡 Expert Tip:
The currency of training content is a decisive success factor - especially in the rapidly changing field of information security. Focus on a continuous learning approach with short feedback cycles, instead of static, rarely updated training programs.`
  },
  {
    _key: `faq_${Date.now()}_8`,
    _type: 'object',
    question: 'What psychological factors should be considered when designing employee training?',
    answer: `🧠 Learning Psychology Foundations:
• Application of proven learning principles such as spaced repetition for better memory performance.
• Use of different learning modalities (visual, auditory, kinesthetic) for different learning types.
• Consideration of attention span through short, focused learning units.
• Creation of emotional anchors and relevant contexts for better retention.
• Integration of feedback loops and active practice phases for deeper understanding.

🎯 Motivation & Engagement:
• Promotion of intrinsic motivation by highlighting the personal relevance of security.
• Use of gamification elements such as challenges, points, and level systems.
• Creation of positive learning experiences instead of fear and threat scenarios.
• Promotion of autonomy and self-efficacy through choices and success experiences.
• Integration of social dynamics such as team competitions and peer learning.

🛡️ Risk Perception & Decision Making:
• Consideration of cognitive biases and heuristics in risk assessment.
• Development of realistic risk assessments through concrete examples and case studies.
• Training for recognizing manipulative tactics such as social engineering.
• Promotion of critical thinking and conscious decision processes in security matters.
• Teaching methods for dealing with uncertainty and time pressure in security decisions.

👥 Cultural & Social Factors:
• Consideration of cultural differences in designing international training programs.
• Adaptation to organizational subcultures and department-specific contexts.
• Use of social influences such as group conformity and role model function.
• Promotion of team cohesion and shared responsibility for security.
• Integration into existing social norms and values of the organization.

💡 Expert Tip:
Successful employee training considers not only the 'what' (content), but also the 'how' (psychological delivery). A psychologically sound design leads to more sustainable behavioral changes than pure knowledge transfer. Particularly effective are positive approaches that empower and motivate employees, rather than demotivating them through fear and control scenarios.`
  }
]

async function addFaqsBatch2() {
  console.log('Adding FAQ Batch 2 to Employee Training EN...')
  
  try {
    const result = await client
      .patch('employee-training-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('Successfully added FAQ Batch 2:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQ Batch 2:', error)
    throw error
  }
}

addFaqsBatch2()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed:', error)
    process.exit(1)
  })
