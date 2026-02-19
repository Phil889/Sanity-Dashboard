import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const faqsBatch2 = [
  {
    _key: `faq_en_${Date.now()}_5`,
    _type: 'object',
    question: 'How can financial institutions efficiently implement the cost transparency and record-keeping obligations of MiFID II and what innovative solutions does ADVISORI offer?',
    answer: `The comprehensive cost transparency and record-keeping obligations under MiFID II present many financial institutions with significant challenges. They require not only complete disclosure of all direct and indirect costs but also seamless documentation of customer interactions and advisory processes. Successful implementation requires both deep regulatory understanding and innovative technological solutions.

📋 Core challenges of cost transparency and record-keeping obligations:
• Complex cost aggregation: Capture and consolidation of all direct and indirect costs, fees, and inducements from various systems and product categories for consistent ex-ante and ex-post presentation.
• Comprehensive communication recording: Obligation for systematic recording of all client-related communications across diverse channels (telephone, email, personal meetings) while maintaining data protection.
• Structured advisory documentation: Requirement for detailed, standardized documentation of the entire advisory process, including suitability assessment and justification of investment recommendations.
• Long-term data retention: Secure storage and retrievability of large data volumes over several years while ensuring data integrity and data protection.

🔧 The ADVISORI approach for innovative solutions:
• Integrated cost architecture: Development of a central cost database and calculation logic that aggregates product, service, and transaction costs from all relevant systems and presents them consistently.
• Digital recording solutions: Implementation of modern, compliance-compliant recording technologies for all communication channels with automated tagging and intelligent search functionality.
• Advisory process digitalization: Digitalization and standardization of the advisory process through intuitive advisor tools that ensure compliance requirements while increasing advisor productivity.
• Scalable archiving solutions: Implementation of scalable, secure archiving solutions that meet regulatory requirements and enable efficient retrieval for audits and inquiries.`
  },
  {
    _key: `faq_en_${Date.now()}_6`,
    _type: 'object',
    question: 'What significance does MiFID II have for transaction reporting and how does ADVISORI support efficient implementation of these complex requirements?',
    answer: `Transaction reporting under MiFID II represents one of the most complex and data-intensive elements of the regulation. With up to 65 data fields to be reported per transaction, strict time requirements, and significant sanctions for non-compliance, it is among the most demanding regulatory obligations for financial institutions. Successful implementation requires a combination of regulatory know-how, process expertise, and technological solutions.

📊 Central challenges of MiFID II transaction reporting:
• Extensive data requirements: Necessity to capture up to 65 different data fields per transaction, including complex information such as LEIs, ISINs, trader IDs, and detailed customer information.
• Data quality management: Ensuring completeness, consistency, and accuracy of all reporting-relevant data across various systems and business areas.
• Strict time requirements: Obligation to report transactions by the end of the following business day (T+1) at the latest with minimal tolerance for delays.
• Complex decision logic: Necessity for precise decision logic to determine reporting obligations for various transaction types, instruments, and counterparties.

📡 The ADVISORI approach to effective transaction reporting:
• End-to-end reporting architecture: Development of an integrated reporting architecture that connects all relevant data sources, performs necessary transformations, and ensures reliable transmission to ARMs (Approved Reporting Mechanisms).
• Data quality framework: Implementation of a robust data quality framework with automated validation rules, exception handling, and monitoring of reporting completeness.
• Automated decision logic: Development of precise, rule-based decision algorithms for automated determination of reporting obligations and correct population of all required fields.
• Continuous regulatory monitoring: Establishment of a process for continuous monitoring of regulatory changes and timely adaptation of reporting processes and systems.`
  },
  {
    _key: `faq_en_${Date.now()}_7`,
    _type: 'object',
    question: 'How should financial institutions design their MiFID II implementation strategy and what success factors are particularly important?',
    answer: `A successful MiFID II implementation requires far more than isolated consideration of individual regulatory requirements. It demands a holistic, strategic approach that considers the complexity and interactions of various requirements while keeping business strategy and operational efficiency in view. Experience shows that the implementation approach significantly determines costs, time requirements, and ultimate success.

🔑 Critical success factors for MiFID II implementation:
• Holistic governance: Establishment of a clear, cross-departmental governance structure with unambiguous responsibilities, decision paths, and escalation mechanisms across all MiFID II workstreams.
• Integrated program approach: Coordinated management of all MiFID II sub-projects considering dependencies, resource conflicts, and overarching impacts, rather than isolated individual initiatives.
• Business model integration: Consistent alignment of implementation measures with business strategy and customer needs to use compliance requirements as a catalyst for business improvements.
• Proactive stakeholder management: Early and continuous involvement of all relevant stakeholders, from executive management through business units to IT and external service providers.

🛠️ The ADVISORI approach to strategic MiFID II implementation:
• Modular implementation architecture: We develop a modular, phased implementation strategy that enables quick wins while not losing sight of the long-term compliance vision.
• Impact-based prioritization: Our prioritization methodology considers not only regulatory deadlines but also business impacts, resource availability, and implementation complexity.
• Change impact network: We create a detailed change impact network that makes dependencies between different implementation measures visible and enables efficient sequencing.
• Agile delivery model: We employ agile implementation methods that enable rapid adaptation to changing requirements and regulatory clarifications while maintaining overall program control.`
  },
  {
    _key: `faq_en_${Date.now()}_8`,
    _type: 'object',
    question: 'What role does technology play in MiFID II compliance and how can ADVISORI support the development of an optimal IT strategy?',
    answer: `Technology is a central success factor for efficient and sustainable implementation of MiFID II. The requirements for data capture, processing, storage, and reporting are so extensive and complex that manual processes or isolated system solutions are hardly practicable. A well-thought-out IT strategy is therefore crucial to ensure both compliance and maintain operational efficiency. Financial institutions face the challenge of adapting existing systems or implementing new solutions.

💻 Key areas of technological MiFID II support:
• Data management architecture: Building an integrated data architecture that consolidates and harmonizes all regulatorily relevant data from various source systems and provides consistent governance.
• Reporting automation: Implementation of automated reporting solutions for transaction reporting, best execution reporting, and cost transparency that automatically extract, transform, and transmit data.
• Recording and archiving systems: Integration of modern recording technologies for all communication channels with intelligent search and retrieval functions and compliant archiving.
• Advisory and documentation tools: Digitalization of the advisory process through integrated advisory tools that seamlessly support suitability assessment, product information, and documentation.

🔧 The ADVISORI approach to technological MiFID II support:
• Technology gap assessment: We analyze your existing IT landscape regarding MiFID II readiness and precisely identify areas requiring adaptations or new solutions.
• Integrated architecture development: Development of a MiFID II-compliant target architecture that meets regulatory requirements while optimally utilizing existing systems and avoiding unnecessary redundancies.
• Make-vs-buy analysis: Objective evaluation of build vs. buy options for various MiFID II technology components, considering total cost of ownership, implementation risk, and strategic fit.
• Implementation support: Comprehensive support in implementing technology solutions, from requirements specification through vendor selection to implementation and testing.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQ batch 2 to MiFID II Readiness EN...')
  
  try {
    const result = await client
      .patch('mifid-ii-readiness-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('Added FAQ batch 2:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

export { faqsBatch2 }
