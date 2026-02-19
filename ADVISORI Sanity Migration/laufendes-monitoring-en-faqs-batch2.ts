import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

const timestamp = Date.now()

const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'What are best practices for Continuous Control Monitoring?',
    answer: `Continuous Control Monitoring (CCM) enables ongoing, often automated oversight of controls and offers significant advantages over purely periodic audits. An effective CCM approach can detect control weaknesses early and significantly increase the efficiency of ICS monitoring.

🔄 Fundamental principles of Continuous Control Monitoring:
• Near real-time or high-frequency oversight of critical controls
• Automated testing against defined rules and thresholds
• Comprehensive analysis of complete datasets instead of samples
• Proactive identification of deviations and control weaknesses
• Integration into existing business processes and IT systems

💻 Technological approaches and tools:
• Process-integrated monitoring routines in operational systems
• Data analysis tools for systematic evaluation of large data volumes
• Dashboard solutions for visualization of monitoring results
• Workflow tools for managing identified control weaknesses
• Rule-based alerting systems when thresholds are exceeded

🛠️ Implementation steps and success factors:
• Prioritization of controls to be monitored by risk relevance
• Concrete definition of parameters and thresholds to be monitored
• Ensuring data availability and quality as a critical foundation
• Gradual implementation with initial focus on quick wins
• Continuous calibration of monitoring parameters to avoid false alarms`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'How do you integrate ICS monitoring with other oversight functions?',
    answer: `Integrating ICS monitoring with other oversight functions such as internal audit, compliance, and risk management is crucial for an efficient overall corporate oversight system. A coordinated approach avoids duplication, leverages synergies, and creates a holistic risk and control picture.

🔄 Coordination with internal audit:
• Alignment of audit plans and activities to avoid overlaps
• Exchange of audit results and identified control weaknesses
• Use of audit reports as input for ICS development
• Joint follow-up of measures to address control weaknesses
• Integrated reporting to relevant governance bodies

🤝 Collaboration with risk management:
• Harmonization of risk assessment methods and criteria
• Shared use of risk information and early warning indicators
• Coordination of risk reporting and risk monitoring
• Coordinated assessment of control effectiveness regarding identified risks
• Integrated risk culture with common fundamental principles

📋 Alignment with the compliance function:
• Coordinated oversight of controls with compliance relevance
• Shared use of monitoring tools and resources
• Alignment of regulatory requirements and their implementation in the ICS
• Integrated follow-up processes for identified deficiencies
• Harmonized reporting to avoid contradictions`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'What methods exist for assessing ICS effectiveness?',
    answer: `Systematic assessment of ICS effectiveness is crucial for evaluating and continuously improving the quality and functionality of the control system. A structured assessment approach combines various methods to gain a comprehensive picture of control effectiveness.

📊 Qualitative assessment methods:
• Structured self-assessments by control and process owners
• Expert interviews and moderated workshops for effectiveness evaluation
• Process walkthroughs to verify practical control implementation
• Benchmarking with internal or external best practices
• Detailed analysis of individual control failure cases

🔍 Quantitative assessment approaches:
• Statistical evaluation of control exceptions and violations
• Metric-based assessment of control performance (KPIs)
• Trend analyses of control weakness development over time
• Correlation analyses between controls and risk indicators
• Cost-benefit analyses for assessing control efficiency

🧪 Practical test procedures:
• Design tests to verify conceptual adequacy
• Effectiveness tests to verify operational functionality
• System tests to validate automated control functions
• Sample testing based on statistical methods
• End-to-end tests to assess control chains in process context`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How do you design effective ICS reporting?',
    answer: `Effective ICS reporting is crucial for providing relevant stakeholders with the right information about risk and control situations and enabling fact-based decisions. A target group-oriented reporting approach ensures that each recipient receives relevant information in an appropriate format.

📈 Core elements of effective ICS reporting:
• Focus on significant risks and critical controls
• Differentiated report formats for different target groups
• Balance between detail depth and clear summary
• Clear trend presentations and comparisons to previous periods
• Traceable assessment and classification of control weaknesses

👥 Target group-specific reporting concepts:
• Board/Executive Management: Strategic overview with focus on significant risks
• Supervisory bodies: Summary reports on overall system effectiveness
• Department heads: Detailed information on controls in their area of responsibility
• Process owners: Operational reports on specific control activities
• External auditors: Evidence documentation on ICS effectiveness

🎯 Practical design aspects:
• Development of meaningful dashboards with traffic light systems
• Integration of drill-down functionalities for deeper analyses
• Automation of recurring reporting processes
• Clear responsibilities for report creation and approval
• Regular review and adjustment of report formats`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQ batch 2 to Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client
    .patch('laufendes-monitoring-risk-assessment-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch2)
    .commit()
  
  console.log(`Added ${faqsBatch2.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch2().catch(console.error)
