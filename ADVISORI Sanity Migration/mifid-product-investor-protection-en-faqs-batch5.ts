import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const timestamp = Date.now()

// FAQs 17-20 (translated from German source)
const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_17`,
    _type: 'object',
    question: 'How can financial institutions cost-efficiently implement growing regulatory requirements in investor protection and what support does ADVISORI offer?',
    answer: `The steadily growing regulatory requirements in investor protection present financial institutions with the challenge of ensuring compliance without causing disproportionate costs. A strategic, future-oriented implementation can not only optimize compliance costs but also generate business value.

💰 Strategies for Cost-Efficient MiFID II Implementation:
• Integrated Regulatory Approach: Development of a holistic strategy that considers various regulatory requirements (MiFID II, GDPR, IDD, etc.) together and identifies and leverages synergies in implementation.
• Risk-Oriented Prioritization: Focusing resources on areas with high regulatory risk or particular business relevance, while using standardized solutions in other areas.
• Digitization and Automation: Strategic use of digital technologies to automate regulatory processes, from data capture through analysis to documentation and reporting.
• Modular Implementation Approach: Step-by-step implementation in modular building blocks that build on each other and successively form a complete compliance solution without disrupting day-to-day business.

🛠️ The ADVISORI Efficiency Approach:
• Business Case Orientation: Every compliance measure is evaluated not only for regulatory necessity but also for potential business benefits and cost efficiency.
• Technology Assessment: Systematic evaluation of technology options for MiFID II implementation with clear focus on long-term cost efficiency, scalability, and adaptability.
• Make-or-Buy Evaluation: Structured analysis of which compliance functions should be developed internally and which should be covered through external solutions or shared services.
• Lean Governance: Development of an efficient governance structure with clear responsibilities and decision-making processes that ensures compliance without creating unnecessary bureaucracy.`
  },
  {
    _key: `faq_${timestamp}_18`,
    _type: 'object',
    question: 'What typical implementation hurdles occur when implementing MiFID II investor protection requirements and how can they be overcome?',
    answer: `Implementing MiFID II investor protection requirements presents financial institutions with complex challenges that can be both technical and organizational in nature. Proactive management of these hurdles is crucial for successful, timely, and cost-efficient implementation.

🚧 Typical Implementation Hurdles and Solution Approaches:
• Data Management Complexity: The requirements for comprehensive customer data, product information, and transaction documentation present many institutions with significant data integration and quality problems.
  → Solution Approach: Development of a holistic data strategy with clear focus on data quality, governance, and integration across silos.
• Silo Thinking and Departmental Boundaries: The cross-functional nature of investor protection requirements often collides with traditional organizational structures and isolated responsibilities.
  → Solution Approach: Establishment of cross-functional teams and governance structures with clear end-to-end responsibilities for investor protection processes.
• IT Legacy Systems: Existing legacy systems are often not flexible enough to support new requirements without significant adjustments.
  → Solution Approach: Development of a multi-layered IT architecture that implements new compliance functionalities as an additional layer over existing systems.
• Cultural Resistance: The shift from product-oriented to customer-oriented advisory processes often meets resistance from employees accustomed to established working methods.
  → Solution Approach: Comprehensive change management with focus on communication, training, and involvement of key persons as role models and multipliers.

🔄 The ADVISORI Implementation Approach:
• Pragmatic Realism: We pursue a pragmatic approach that meets regulatory requirements without creating unnecessary complexity and considers the specific circumstances and capabilities of your organization.
• Agile Implementation: Use of agile methods for flexible, iterative implementation that enables rapid value creation and continuous adaptation to changing requirements.
• Stakeholder Management: Systematic involvement of all relevant stakeholders – from management through specialist departments to IT – to ensure broad support and successful implementation.
• Knowledge Transfer: Targeted transfer of knowledge and skills to your employees to ensure long-term independence and sustainable compliance capability.`
  },
  {
    _key: `faq_${timestamp}_19`,
    _type: 'object',
    question: 'How can financial institutions future-proof their MiFID II product governance and suitability assessments and prepare for upcoming regulatory developments?',
    answer: `The regulatory landscape in investor protection is continuously evolving, with regular clarifications and extensions of existing requirements as well as new regulatory initiatives. Future-proof design of investor protection processes requires a forward-looking, adaptive approach that considers not only current but also potential future requirements.

🔮 Central Aspects of Future-Proof MiFID II Implementation:
• Regulatory Foresight: Systematic observation of regulatory developments and early analysis of potential impacts on existing investor protection processes and systems.
• Flexible Process Architecture: Design of processes with inherent flexibility that enables adjustments to new regulatory requirements with minimal effort.
• Future-Ready Technology Platform: Implementation of a technology architecture that is scalable, extensible, and adaptable to efficiently integrate future regulatory requirements.
• Data-Oriented Approach: Building a comprehensive, granular data foundation that goes beyond current requirements and can serve as a foundation for potential future reporting and analysis obligations.

🚀 Expected Regulatory Developments and ADVISORI Approach:
• ESG Integration: The integration of sustainability preferences into suitability assessments and product governance will continue to gain importance and bring more detailed requirements.
  → ADVISORI Approach: Development of a robust ESG framework that already goes beyond minimum requirements today and is flexible for future extensions.
• Digital Financial Services: New regulations for digital financial services and robo-advisory will place more specific requirements on algorithm-based advice and digital customer interactions.
  → ADVISORI Approach: Conception of digital investor protection processes with built-in transparency, explainability, and auditability that anticipate future regulatory expectations.
• Cross-Border Harmonization: Efforts toward greater harmonization of MiFID II implementation across EU member states will lead to adjustments and potentially stricter requirements.
  → ADVISORI Approach: Design of a modular compliance architecture that can efficiently adapt to changing national requirements while maintaining a consistent core.`
  },
  {
    _key: `faq_${timestamp}_20`,
    _type: 'object',
    question: 'What success factors are decisive for sustainable MiFID II compliance in product governance and investor protection?',
    answer: `Sustainable MiFID II compliance in product governance and investor protection requires more than one-time implementation of regulatory requirements. It requires systematic anchoring in organizational and process structures as well as continuous development and optimization. The following success factors are decisive for a long-term successful compliance strategy.

🔑 Critical Success Factors for Sustainable MiFID II Compliance:
• Strategic Anchoring: Integration of investor protection principles into corporate strategy and culture so that they are perceived not as an external requirement but as an integral part of the business model.
• Clear Governance Structures: Establishment of unambiguous responsibilities and decision-making processes for all aspects of product governance and investor protection, with direct connection to corporate leadership.
• Systematic Monitoring: Implementation of a comprehensive monitoring system that continuously monitors both compliance with regulatory requirements and the effectiveness and efficiency of processes.
• Competence Development: Continuous investment in training and development of all involved employees to promote both regulatory knowledge and customer orientation.

🌟 The ADVISORI Excellence Approach:
• Compliance Excellence Framework: Development of a holistic framework that positions compliance not as an isolated function but as an integral part of excellent customer management.
• Operational Excellence: Focus on optimizing the operational efficiency of compliance processes to meet regulatory requirements with minimal resource expenditure.
• Digital Compliance Transformation: Strategic use of digital technologies to automate and improve compliance processes, from data capture through analysis to documentation.
• Sustainable Value Creation: Orientation of all compliance measures toward long-term value creation – for customers through better protection and advice, for the company through reduced risks and improved customer relationships.

📊 Measuring Success and Continuous Improvement:
• KPI-Based Success Measurement: Definition and regular monitoring of meaningful key performance indicators for all relevant aspects of investor protection compliance.
• Regular Maturity Assessments: Conducting periodic assessments of compliance maturity to identify improvement potential and track progress.
• Benchmarking: Comparison with industry standards and best practices to ensure competitive compliance capability.
• Feedback Loops: Establishment of systematic feedback mechanisms to continuously capture and integrate insights from practice into process improvements.`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQ batch 5 (FAQs 17-20) to MiFID Product Investor Protection EN...')
  
  try {
    const result = await client
      .patch('mifid-product-investor-protection-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('Successfully added FAQ batch 5')
    return result
  } catch (error) {
    console.error('Error adding FAQ batch 5:', error)
    throw error
  }
}

export { faqsBatch5 }
