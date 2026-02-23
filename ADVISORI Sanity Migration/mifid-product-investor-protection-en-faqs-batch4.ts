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

// FAQs 13-16 (translated from German source)
const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'How should financial institutions align MiFID II requirements for target market and suitability assessment with the General Data Protection Regulation (GDPR)?',
    answer: `Simultaneous compliance with MiFID II and GDPR presents financial institutions with a particular challenge, as both regulatory frameworks place extensive, sometimes conflicting requirements on handling customer data. A well-thought-out, integrated compliance strategy is required to meet both regulatory requirements while maintaining operational efficiency.

🔄 Central Tension Fields between MiFID II and GDPR:
• Data Collection vs. Data Minimization: MiFID II requires comprehensive collection of customer data for suitability assessments, while GDPR pursues the principle of data minimization.
• Long-term Retention vs. Deletion Obligation: MiFID II demands long-term retention of advisory documentation, while GDPR prescribes deletion obligations and storage limitations.
• Data Sharing vs. Consent Requirement: MiFID II may require exchange of customer data between product manufacturers and distributors, while GDPR provides strict consent requirements for data transfers.
• Profiling vs. Automation Prohibition: Target market definitions and digital suitability assessments may constitute a form of profiling that is subject to special restrictions under GDPR.

⚖️ The ADVISORI Harmonization Approach:
• Legal Basis Framework: Development of a structured framework for identifying the appropriate legal bases for different data processing purposes in the MiFID II context.
• Transparent Customer Information: Design of clear, understandable information for customers about the processing of their data in investor protection processes that meets both MiFID II and GDPR requirements.
• Integrated Data Architecture: Conception of a data architecture that supports both comprehensive documentation obligations under MiFID II and deletion and access management functions under GDPR.
• Privacy by Design: Integration of data protection principles into the design of all investor protection processes and systems from the outset to ensure compliance with both regulatory frameworks.`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'What role do ESG criteria play in the context of MiFID II product governance and suitability assessments and how does ADVISORI support their integration?',
    answer: `The integration of ESG criteria (Environmental, Social, Governance) into MiFID II processes is gaining increasing importance and is being further strengthened by regulatory changes such as the amendment to the MiFID II Delegated Regulation. This development presents financial institutions with the challenge of systematically integrating sustainability preferences into their product governance and advisory processes.

🌱 Key Aspects of ESG Integration in MiFID II Processes:
• Sustainability Preferences in Customer Profiling: Extension of the suitability assessment to include structured capture and evaluation of customer sustainability preferences with differentiated gradations and clear definitions.
• ESG Factors in Target Market Definition: Integration of sustainability characteristics as an explicit dimension in the target market definition of financial products with clear criteria for sustainable, partially sustainable, and non-sustainable products.
• Product Classification by ESG Criteria: Development of a systematic methodology for classifying and labeling financial products regarding their sustainability characteristics based on regulatory requirements and market standards.
• Advisor Qualification for ESG: Ensuring that advisors have sufficient knowledge and skills to competently integrate sustainability aspects into customer advisory.

🔍 The ADVISORI Integration Approach for ESG:
• Holistic ESG Framework: Development of a comprehensive, regulatory robust framework for integrating sustainability aspects into all relevant MiFID II processes – from product development to customer documentation.
• Preference Capture Methodology: Conception of a structured, nuanced methodology for capturing and weighting various customer sustainability preferences that is both regulatory compliant and practically applicable.
• ESG Product Mapping: Creation of a systematic approach for mapping customer sustainability preferences to suitable products with clear decision logic and documentation.
• Advisor Enablement: Development and implementation of training programs that enable advisors to competently advise on sustainability aspects and integrate them into the suitability assessment.`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How can cross-border financial institutions deal with national differences in implementing MiFID II investor protection requirements?',
    answer: `MiFID II as a European directive allows member states certain leeway in national implementation, which can lead to differences in concrete requirements. For cross-border financial institutions, this regulatory fragmentation presents a particular challenge that requires thoughtful, strategic management.

🌍 Central Challenges of Cross-Border Compliance:
• National Gold-Plating Initiatives: Identification and management of additional requirements in individual countries that go beyond MiFID II minimum requirements and require specific local adjustments.
• Diverging Interpretations: Dealing with different interpretations and implementation practices of national supervisory authorities, even with identical legal texts.
• Procedural Peculiarities: Consideration of country-specific requirements for processes, documentation, and reporting that can vary significantly.
• Linguistic and Cultural Differences: Adaptation of customer communication and documentation to local linguistic and cultural circumstances while maintaining content consistency.

🔄 The ADVISORI Approach for Cross-Border Compliance:
• Regulatory Heat Map: Development of a detailed overview of national peculiarities in MiFID II implementation with focus on investor protection and product governance requirements.
• Modular Compliance Framework: Conception of a flexible compliance framework with a consistent core and modular extensions for country-specific requirements.
• Scalable Process Architecture: Design of scalable processes and systems that maintain central standards while efficiently supporting local variations.
• Coordinated Supervisory Authority Management: Establishment of a structured approach for proactive communication with various national supervisory authorities to ensure consistent interpretations and avoid regulatory surprises.`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'How can financial institutions effectively audit and continuously improve their MiFID II investor protection processes?',
    answer: `Successful implementation of MiFID II investor protection processes requires more than one-time implementation – it requires continuous review, assessment, and optimization. Systematic quality management is essential to ensure regulatory compliance as well as improve operational efficiency and customer orientation.

🔄 Core Elements of Effective Quality Management for MiFID II Processes:
• Multi-dimensional Monitoring Framework: Establishment of a comprehensive monitoring system that continuously captures and evaluates both compliance aspects and operational efficiency and customer satisfaction.
• Regular Compliance Reviews: Conducting structured, periodic reviews of all investor protection processes for conformity with current regulatory requirements and internal standards.
• Process Performance Measurement: Implementation of a KPI-based system for objective assessment of the efficiency and effectiveness of investor protection processes with clear target values and benchmarks.
• Feedback Integration: Systematic capture and analysis of feedback from various sources – from employees through customers to supervisory authorities – as a basis for continuous improvements.

📈 The ADVISORI Quality Management Approach:
• Integrated Assurance Model: Development of a holistic audit and quality assurance model that systematically coordinates various lines of defense – from self-controls through internal reviews to external audits.
• Data-Based Process Analysis: Use of advanced analysis techniques to identify patterns, trends, and anomalies in investor protection processes that indicate optimization potential or compliance risks.
• Continuous Improvement Framework: Establishment of a structured framework for continuous improvements with clear processes for identification, prioritization, implementation, and success measurement of improvement measures.
• Benchmarking and Best Practices: Systematic comparison with industry standards and best practices to identify improvement potential and learn from successful approaches of other institutions.`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQ batch 4 (FAQs 13-16) to MiFID Product Investor Protection EN...')
  
  try {
    const result = await client
      .patch('mifid-product-investor-protection-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('Successfully added FAQ batch 4')
    return result
  } catch (error) {
    console.error('Error adding FAQ batch 4:', error)
    throw error
  }
}

export { faqsBatch4 }
