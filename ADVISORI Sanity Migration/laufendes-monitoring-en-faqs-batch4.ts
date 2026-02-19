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

const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'How do you use Process Mining for ICS monitoring?',
    answer: `Process Mining offers innovative possibilities for data-based ICS monitoring by analyzing and visualizing actual process flows based on system data. This technology enables a new approach to identifying control weaknesses and process deviations.

🔍 Fundamental application areas in the ICS context:
• Comparison of actual processes with defined target processes and controls
• Identification of circumvention of existing controls (Control Circumvention)
• Detection of unwanted process variants and deviations
• Analysis of actual segregation of duties based on real transaction data
• Data-based identification of process and control risks

📊 Methodological advantages over classic monitoring approaches:
• Analysis of complete datasets instead of samples
• Objective, data-supported process and control analysis
• Discovery of unknown or undocumented process variants
• Continuous monitoring instead of point-in-time audits
• Identification of inefficiencies in control processes

⚙️ Success factors for implementation:
• Ensuring sufficient data quality and completeness
• Correct interpretation of process mining results in control context
• Integration into existing ICS governance and monitoring processes
• Combination with classic testing methods for holistic approach
• Focus on control-relevant process areas and attributes`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'How do you develop a monitoring strategy for decentralized organizations?',
    answer: `Developing a monitoring strategy for decentralized organizations requires a balanced approach that considers both uniform standards and local specifics. A flexible but coherent monitoring concept ensures that holistic ICS oversight is possible despite organizational complexity.

🌐 Fundamental design principles:
• Balance between central requirements and decentralized implementation responsibility
• Risk-oriented differentiation of monitoring intensity by unit
• Uniform framework with adaptation options for local specifics
• Clear roles and responsibilities between headquarters and decentralized units
• Scalable approaches for different organization sizes and types

🔄 Governance and coordination:
• Central specification of methodological standards and minimum requirements
• Local responsibility for operational monitoring implementation
• Central quality assurance and coordination concept
• Regular knowledge exchange and best practice sharing between units
• Coordinated escalation paths and processes across organizational boundaries

📈 Reporting and information flow:
• Standardized report formats for uniform aggregation
• Cascading reporting system with appropriate detail level per tier
• Central consolidation of essential monitoring results
• Transparency about status and development in all organizational units
• Use of digital platforms for efficient information distribution`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How can analytics methods support ICS monitoring?',
    answer: `Analytics methods offer significant potential for improving ICS monitoring by analyzing large data volumes, recognizing patterns, and identifying anomalies. A data-driven approach enables deeper insights into risks and controls and supports proactive monitoring.

📊 Application areas of analytics in ICS monitoring:
• Anomaly detection to identify unusual transactions or patterns
• Trend analyses for early detection of developing risks
• Correlation analyses between risk indicators and control failures
• Predictive models for forecasting potential control weaknesses
• Pattern recognition algorithms to identify systematic problems

🔍 Analytical techniques and their application:
• Descriptive analytics for systematic evaluation of control data
• Diagnostic analytics for root cause determination in control deviations
• Predictive analytics for early detection of potential control problems
• Prescriptive analytics for deriving optimal measures for weaknesses
• Visual analytics for intuitive presentation of complex monitoring results

💻 Implementation approaches and success factors:
• Integration of analytics into existing monitoring processes and tools
• Focus on control-relevant data and analysis objectives
• Scaling of analytics approach according to risk relevance
• Combination of automated analyses with human expertise
• Continuous calibration and refinement of analytical models`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'How do you measure the success of ICS monitoring?',
    answer: `Measuring the success of ICS monitoring is important for assessing its effectiveness and continuously improving it. A systematic assessment approach with meaningful metrics creates transparency about the quality and added value of the monitoring process.

📈 Quantitative success indicators:
• Number of identified control weaknesses and their development over time
• Ratio between proactively detected and reactively reported control problems
• Average time to identification of control weaknesses
• Implementation rate and speed for improvement measures
• Monitoring efficiency (ratio between effort and results)

🎯 Qualitative success characteristics:
• Relevance and practicality of monitoring results
• Integration of monitoring into operational processes and decisions
• Acceptance and use of monitoring results by stakeholders
• Contribution to continuous improvement of the control system
• Alignment of monitoring with risk strategy and tolerance

⚖️ Assessment approaches and reporting:
• Regular self-evaluation of monitoring process and its results
• Feedback collection from stakeholders on usefulness of monitoring information
• Benchmarking with internal or external best practices
• Balanced reporting with successes and improvement potential
• Regular review and adjustment of success metrics`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQ batch 4 to Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client
    .patch('laufendes-monitoring-risk-assessment-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch4)
    .commit()
  
  console.log(`Added ${faqsBatch4.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch4().catch(console.error)
