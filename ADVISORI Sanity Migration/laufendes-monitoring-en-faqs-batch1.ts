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

const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'What are the core elements of effective ICS monitoring?',
    answer: `Effective ICS monitoring comprises various elements that together ensure continuous oversight and improvement of the internal control system. A systematic monitoring approach ensures that controls permanently fulfill their protective function and adapt to changing conditions.

🔍 Fundamental components of ICS monitoring:
• Ongoing oversight through process-integrated control mechanisms
• Periodic evaluations through independent audits and self-assessments
• Regular effectiveness tests with appropriate testing depth and frequency
• Systematic management of control weaknesses and improvement measures
• Risk-oriented reporting with clear escalation paths for control failures

📊 Key success factors for effective monitoring:
• Appropriate balance between continuous monitoring and periodic tests
• Clear governance with defined roles and responsibilities
• Risk-oriented prioritization of monitoring activities
• Integration of automated monitoring techniques for routine controls
• Embedding in an overarching ICS governance model

🛠️ Practical implementation aspects:
• Definition of meaningful Key Risk Indicators (KRIs) for key risks
• Development of standardized test methods and documentation
• Establishment of a structured follow-up process for identified weaknesses
• Use of appropriate tools for efficient monitoring activities
• Regular review and adjustment of the monitoring concept`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'How do you conduct a systematic risk assessment for the ICS?',
    answer: `A systematic risk assessment forms the foundation for an effective internal control system by identifying, evaluating, and prioritizing significant risks. A structured assessment approach ensures that controls are implemented where they provide the greatest benefit.

🎯 Core steps of an ICS-related risk assessment:
• Identification of relevant business processes and activities
• Systematic capture of potential risks within these processes
• Evaluation of risks by probability of occurrence and potential impact
• Prioritization of risks by their significance for the organization
• Assignment of existing controls to identified risks

⚖️ Methodological approaches and best practices:
• Use of standardized risk categories and taxonomies
• Application of qualitative and quantitative assessment methods
• Development of process-specific risk scenarios and indicators
• Conducting moderated workshops with relevant stakeholders
• Combination of top-down and bottom-up approaches for holistic perspective

🔄 Regular updates and continuous improvement:
• Establishment of a process for periodic risk assessments (e.g., annually)
• Integration of event-driven risk assessments for significant changes
• Continuous adjustment of risk assessments based on monitoring results
• Consideration of trends and external developments in risk identification
• Regular validation of risk assessment methodology and criteria`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'What role do Key Risk Indicators (KRIs) play in ICS monitoring?',
    answer: `Key Risk Indicators (KRIs) are measurable metrics that serve as an early warning system for changing risk situations and play a central role in continuous ICS monitoring. They enable data-based, proactive oversight of critical risk areas and support risk-oriented decisions.

📈 Fundamental functions of KRIs in ICS monitoring:
• Early warning indicators for developing or intensifying risks
• Objective metrics for tracking risk situation development over time
• Basis for risk-oriented prioritization of monitoring activities
• Foundation for data-based risk and control reporting
• Connection between operational controls and overarching risk objectives

🎯 Criteria for effective KRIs:
• Relevance: Direct connection to significant risks and controls
• Measurability: Objective and consistent data collection capability
• Predictive power: Ability to indicate future risk changes
• Action orientation: Possibility to derive concrete measures
• Cost-effectiveness: Appropriate ratio between collection effort and benefit

⚙️ Practical implementation in the ICS context:
• Definition of thresholds and escalation levels for each metric
• Integration into an overarching KRI dashboard for transparency
• Regular monitoring and evaluation of metric development
• Linking with concrete action options when thresholds are exceeded
• Continuous review and refinement of KRIs based on their effectiveness`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How do you design an effective ICS test program?',
    answer: `An effective ICS test program is crucial for regularly verifying the effectiveness of internal controls and forms a central building block of ICS monitoring. A systematic testing methodology ensures that controls fulfill their intended function and control weaknesses are detected early.

🧪 Core elements of an effective test program:
• Risk-based test planning with focus on critical controls
• Appropriate test depth and frequency based on risk relevance
• Mix of different test methods and approaches
• Standardized test procedures with clear expected values
• Documented test execution and results for traceability

🔄 Typical test methods and their application:
• Design tests: Review of conceptual adequacy of controls
• Effectiveness tests: Verification of operational effectiveness in practice
• Sample-based tests: Testing of selected control instances
• End-to-end tests: Verification of controls in process context
• Automated tests: Systematic verification of large data volumes

📋 Organization and governance of the test program:
• Clear assignment of responsibilities for test planning and execution
• Coordination of test activities across different oversight functions
• Standardized evaluation criteria for test results
• Structured process for managing identified control weaknesses
• Regular reporting on test results and improvement measures`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQ batch 1 to Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client
    .patch('laufendes-monitoring-risk-assessment-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch1)
    .commit()
  
  console.log(`Added ${faqsBatch1.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch1().catch(console.error)
