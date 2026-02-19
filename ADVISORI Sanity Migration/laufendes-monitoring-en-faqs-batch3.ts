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

const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'How can you automate the ICS monitoring process?',
    answer: `Automating the ICS monitoring process offers significant potential for efficiency gains, error reduction, and expansion of control coverage. Through targeted use of technology, manual testing activities can be reduced and monitoring quality improved.

🔄 Areas with high automation potential:
• Routine data reconciliations and alignments between systems
• Completeness and plausibility checks for transactions
• Monitoring of authorizations and segregation of duties
• Continuous monitoring of limits and thresholds
• Automated creation and distribution of standard reports

💻 Technological approaches and tools:
• Rule-based analysis tools for automated control testing
• Process mining for data-based process and control analysis
• Robotic Process Automation (RPA) for repeatable test activities
• Business intelligence and visualization tools for automated dashboards
• Workflow management systems for follow-up processes

⚙️ Implementation steps and success factors:
• Prioritization of automation candidates by cost-benefit ratio
• Ensuring required data availability and quality
• Iterative implementation with regular validation and calibration
• Clear definition of responsibilities despite automation
• Training users in handling automated monitoring tools`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'How do you handle identified control weaknesses?',
    answer: `Systematic handling of identified control weaknesses is crucial for continuous improvement of the internal control system. A structured process for managing control weaknesses ensures they are sustainably addressed and do not recur.

🔍 Fundamental process steps for handling control weaknesses:
• Systematic capture and classification by severity and urgency
• Root cause analysis to identify underlying problems
• Development of effective measures for remediation
• Assignment of clear responsibilities and timelines
• Follow-up and validation of implementation

⚖️ Prioritization and risk-oriented approach:
• Risk-oriented assessment of control weakness criticality
• Focus on systematic rather than isolated weaknesses
• Consideration of compensating controls in prioritization
• Balancing short-term remedial measures and sustainable solutions
• Resource allocation according to risk relevance

🔄 Governance and reporting:
• Regular status reports to relevant stakeholders
• Escalation mechanisms for critical or delayed measures
• Periodic aggregation and trend analysis of identified weaknesses
• Management involvement for serious control deficits
• Sustainability review of implemented solutions after appropriate time`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'How do you design a risk-oriented sampling concept?',
    answer: `A risk-oriented sampling concept is crucial for efficient ICS monitoring that optimally deploys limited testing resources. A systematic approach ensures that sample size and testing depth are appropriate to the respective risk.

🎯 Fundamental principles of risk-oriented sample selection:
• Graduated sample sizes based on risk relevance of controls
• Consideration of control frequency when determining sample size
• Higher testing intensity for manual versus automated controls
• Adjustment of sample sizes based on historical error experience
• Consideration of control type in sampling methodology

📊 Methodological approaches to sample determination:
• Statistical sampling methods for quantitative statements on control effectiveness
• Attribute sampling to verify presence of control attributes
• Monetary unit sampling with focus on value-significant elements
• Stratified sampling to account for different risk categories
• Discovery sampling for suspected control weaknesses

⚙️ Practical implementation aspects:
• Documented methodology with clear rules for sample determination
• Flexibility to adjust sample sizes with new risk information
• Consideration of cost-benefit aspects in sample planning
• Combination of standardized and case-specific sampling techniques
• Regular evaluation and refinement of sampling strategy`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'What requirements apply to ICS monitoring documentation?',
    answer: `Appropriate documentation of ICS monitoring is essential for traceability, knowledge transfer, and as evidence for internal and external auditors. A systematic documentation strategy ensures that all relevant aspects of the monitoring process are transparent and verifiable.

📋 Core elements of complete monitoring documentation:
• Monitoring concept with objectives, scope, and methodological approach
• Test plans with information on test objects, scope, and frequency
• Detailed test procedures and testing activities
• Test results with traceable assessment
• Measure management and follow-up processes

🔍 Requirements for documentation quality:
• Completeness of essential information about the testing process
• Traceability of testing activities and results
• Appropriate level of detail based on risk relevance
• Uniform structure and terminology for consistent documentation
• Currency and timely creation of documentation

💻 Practical documentation approaches:
• Standardized templates for recurring monitoring activities
• Integrated GRC tools with documentation functionalities
• Central storage of documentation with appropriate access rights
• Clear versioning for changes to the monitoring approach
• Efficient documentation approach focusing on relevant information`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQ batch 3 to Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client
    .patch('laufendes-monitoring-risk-assessment-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch3)
    .commit()
  
  console.log(`Added ${faqsBatch3.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch3().catch(console.error)
