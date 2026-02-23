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

const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_17`,
    _type: 'object',
    question: 'What regulatory aspects must be considered in ICS monitoring?',
    answer: `Various regulatory requirements must be observed when designing and conducting ICS monitoring, which may vary depending on industry, legal form, and geographic environment. A compliance-conformant monitoring concept ensures that relevant regulations are adhered to.

📜 Relevant regulatory frameworks:
• IDW PS 340/981 for German companies on risk management and ICS
• Sarbanes-Oxley Act (SOX) for listed companies with US connection
• COSO Framework as international best practice standard
• Industry-specific regulations such as MaRisk for financial institutions
• Country-specific corporate governance codes and laws

🔍 Typical regulatory requirements for monitoring:
• Regular effectiveness testing of the internal control system
• Documentation of monitoring activities and results
• Independence of auditing bodies to an appropriate extent
• Risk orientation and appropriateness of the monitoring approach
• Reporting to relevant governance bodies

⚖️ Practical implementation aspects:
• Adaptation of monitoring design to specific regulatory requirements
• Coordination with external auditors to ensure acceptance
• Clear assignment of compliance responsibilities in monitoring
• Integration of regulatory changes into the monitoring concept
• Regular review of monitoring approach compliance`
  },
  {
    _key: `faq_${timestamp}_18`,
    _type: 'object',
    question: 'How do you integrate ICS monitoring into the IT development cycle?',
    answer: `Integrating ICS monitoring into the IT development cycle is crucial for implementing controls early in application systems and monitoring them efficiently. A proactive approach ensures that control aspects are considered from the beginning and do not need to be integrated later at high cost.

🔄 Early integration into the development process:
• Consideration of control requirements already in the requirements phase
• Integration of control design reviews into the development process
• Implementation of test cases for control mechanisms
• Systematic acceptance and validation of implemented controls
• Automatic generation of control evidence in application systems

💻 Technical aspects of monitoring integration:
• Implementation of standardized controls in application systems
• Use of logging and audit trail functionalities for monitoring purposes
• Integration of real-time monitoring functions in critical applications
• Creation of interfaces to central monitoring tools
• Automated extraction of control data for analysis purposes

🛠️ Success factors for implementation:
• Clear governance structures between IT, ICS, and risk management
• Standardized requirement catalogs for control mechanisms
• Training developers in ICS-relevant aspects
• Agile adaptation of controls when application system changes
• Regular review of effectiveness of implemented IT controls`
  },
  {
    _key: `faq_${timestamp}_19`,
    _type: 'object',
    question: 'What role do self-assessments play in ICS monitoring?',
    answer: `Self-assessments (Control Self Assessments, CSA) play an important role in ICS monitoring by incorporating the assessment of control owners into the oversight process. A balanced approach combines self-assessments with independent audits for an effective overall monitoring concept.

📋 Fundamental functions of self-assessments:
• Regular assessment of control effectiveness by those responsible
• Sensitization of process owners to control topics
• Early identification of control weaknesses or changes
• Promotion of ownership for control effectiveness
• Efficient coverage of a large number of controls

🔄 Design aspects of a CSA process:
• Clearly defined methodology with uniform assessment criteria
• Appropriate frequency of self-assessments (e.g., quarterly)
• Balanced level of detail in self-assessment formats
• Traceable documentation of assessment bases
• Validation mechanisms to ensure assessment quality

⚖️ Integration into the overall monitoring concept:
• Combination of self-assessments with independent test activities
• Risk-oriented validation of selected self-assessments
• Use of self-assessment results for further audit planning
• Consolidation of results in integrated reporting
• Continuous improvement of CSA process based on experience`
  },
  {
    _key: `faq_${timestamp}_20`,
    _type: 'object',
    question: 'How do you optimize the interplay between operational monitoring and internal audit?',
    answer: `The optimal interplay between operational ICS monitoring and internal audit is crucial for efficient overall oversight without duplication. A clear division of tasks and coordinated collaboration enable leveraging the respective strengths of both functions and establishing a comprehensive oversight system.

🔄 Fundamental role distribution:
• Operational monitoring: Continuous oversight of controls by business units and ICS function
• Internal audit: Independent review of controls and the monitoring system itself
• Operational monitoring as first and second line of defense
• Internal audit as third line of defense with independent perspective
• Common goal: Effective control with optimal resource utilization

🤝 Practical coordination aspects:
• Alignment of audit and monitoring plans to avoid overlaps
• Exchange of audit results and monitoring findings
• Use of uniform risk and control classifications
• Coordinated follow-up for identified control weaknesses
• Shared use of audit and monitoring tools where sensible

📋 Governance aspects of collaboration:
• Clear documentation of roles and responsibilities
• Regular exchange at operational and management level
• Coordinated reporting to management and supervisory bodies
• Joint evaluation of overall oversight system effectiveness
• Continuous optimization of interfaces based on experience`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQ batch 5 to Continuous Monitoring & Risk Assessment English page...')
  
  const result = await client
    .patch('laufendes-monitoring-risk-assessment-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch5)
    .commit()
  
  console.log(`Added ${faqsBatch5.length} FAQs to page: ${result._id}`)
  return result
}

addFaqsBatch5().catch(console.error)
