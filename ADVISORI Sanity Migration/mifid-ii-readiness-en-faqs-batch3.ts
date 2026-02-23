import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const faqsBatch3 = [
  {
    _key: `faq_en_${Date.now()}_9`,
    _type: 'object',
    question: 'How does MiFID II affect product governance and what best practices does ADVISORI recommend for effective implementation?',
    answer: `The product governance requirements represent one of the most far-reaching paradigm shifts under MiFID II. They shift the focus from pure distribution to comprehensive product responsibility throughout the entire lifecycle. These new requirements affect both manufacturers and distributors of financial products and require fundamental redesign of internal processes and controls to ensure that products meet the needs of clearly defined target markets.

📦 Central dimensions of MiFID II product governance:
• End-to-end product responsibility: Obligation to monitor and manage the entire product lifecycle from conception through approval, distribution to regular review with clear responsibilities in each phase.
• Target market definition and monitoring: Obligation to precisely define suitable target markets for each product based on multiple criteria and continuous monitoring of actual target market development.
• Distribution strategy alignment: Necessity to align all distribution activities with defined target markets, including appropriate controls to prevent mis-selling.
• Product monitoring and adjustment: Obligation for continuous monitoring of product performance and taking appropriate measures in case of significant deviations from expected results.

🔍 ADVISORI best practices for effective product governance:
• Integrated product lifecycle management: Implementation of a comprehensive, digital product lifecycle framework that involves all relevant stakeholders and ensures consistent documentation across all phases.
• Data-driven target market framework: Development of a systematic, data-based methodology for target market definition with precise, measurable criteria and automated monitoring mechanisms.
• Digitalized control mechanisms: Introduction of digital controls in the distribution process that automatically check target market conformity and document deviations.
• Continuous improvement process: Establishment of a structured process for regular review and optimization of product governance processes based on experience and regulatory developments.`
  },
  {
    _key: `faq_en_${Date.now()}_10`,
    _type: 'object',
    question: 'What challenges does MiFID II bring for change management in financial institutions and how does ADVISORI support their management?',
    answer: `MiFID II presents not only a massive challenge in regulatory and technical terms but also requires profound cultural and organizational change. The regulation touches virtually all business areas and employee groups of a financial institution and fundamentally changes working methods – from client advisory through product development to trading. These far-reaching changes require thoughtful change management to prevent resistance and ensure sustainable anchoring.

🔄 Central change management challenges with MiFID II:
• Comprehensive impact: MiFID II affects virtually all business areas with different requirements and impacts, requiring a differentiated change concept.
• Cultural paradigm shift: The strengthened investor protection and transparency requirements demand fundamental rethinking, particularly in client-facing areas and trading.
• Complex stakeholder management: The multitude of affected stakeholders with sometimes divergent interests requires careful expectation management and coordinated communication.
• Continuous adaptability: The ongoing concretization process by supervisory authorities demands high adaptability and flexibility in the implementation process.

🌱 The ADVISORI approach to effective MiFID II change management:
• Integrated change impact assessment: Systematic analysis of impacts on processes, systems, organizational structures, and roles with precise identification of necessary behavioral changes.
• Segmented change strategy: Development of target group-specific change strategies tailored to the different impacts and needs of various stakeholder groups.
• Multi-level communication concept: Design of a multi-stage communication approach that combines strategic messages from leadership with practical guidance for operational implementation.
• Sustainable capability building: Development and implementation of comprehensive training programs that not only convey knowledge but also promote understanding and acceptance of MiFID II requirements.`
  },
  {
    _key: `faq_en_${Date.now()}_11`,
    _type: 'object',
    question: 'How can financial institutions sustainably ensure MiFID II compliance and what governance structures does ADVISORI recommend?',
    answer: `Sustainably ensuring MiFID II compliance is not a one-time implementation task but requires a continuous governance and monitoring process. The complexity and regular evolution of the regulation as well as high fines for violations make systematic compliance management essential. Effective governance structures are the key to identifying compliance risks early and managing them appropriately.

🏛️ Core elements of robust MiFID II governance:
• Clear responsibility structures: Establishment of unambiguous responsibilities for MiFID II compliance at all levels, from executive management through dedicated compliance functions to operational units with the three lines of defense model as the basis.
• Integrated policies & procedures framework: Development of a comprehensive, consistent rulebook covering all MiFID II requirements and providing clear instructions for all affected employees.
• Systematic monitoring & testing: Implementation of a structured monitoring and testing program for continuous assessment of compliance adherence with risk-oriented prioritization.
• Regulatory change management: Building a process for early identification and assessment of regulatory changes with clear responsibilities for implementation.

⚙️ ADVISORI's recommended governance structures for sustainable MiFID II compliance:
• MiFID II steering committee: Establishment of a high-level steering committee with representatives from all relevant business areas and central functions for strategic management of MiFID II compliance.
• Thematic compliance hubs: Creation of specialized competence centers for core areas such as investor protection, best execution, cost transparency, and transaction reporting as a bridge between central and decentralized units.
• Automated compliance controls: Integration of automated compliance controls into business processes that enable real-time monitoring and early warning of potential violations.
• Continuous improvement cycle: Establishment of a structured process for regular review and optimization of MiFID II governance based on audit findings, regulatory developments, and best practices.`
  },
  {
    _key: `faq_en_${Date.now()}_12`,
    _type: 'object',
    question: 'What role does data management play in MiFID II compliance and how does ADVISORI support the development of an effective data strategy?',
    answer: `Data management is a central success factor for MiFID II compliance, as the regulation places extensive and high-quality data requirements in virtually all areas. From transaction reporting through best execution to cost transparency and product governance – everywhere precise, complete, and consistent data is needed. Many financial institutions face the challenge of meeting these data requirements across various systems, business areas, and sometimes external sources.

🔢 Data management challenges under MiFID II:
• Data identification and consolidation: Necessity to identify all MiFID II-relevant data and consolidate it from various, often isolated source systems, sometimes enriching with external data.
• Data quality management: Requirement to continuously ensure and monitor the completeness, consistency, accuracy, and timeliness of all reporting-relevant data.
• Data transformations: Complex requirements for data transformations to comply with regulatory specifications, requiring consistent calculation methods and logic across various processes.
• Data archiving and retrievability: Obligation for secure, long-term storage of large data volumes while ensuring rapid retrievability for supervisory authorities and internal controls.

📊 The ADVISORI approach to effective MiFID II data management:
• Data impact assessment: Systematic analysis of all MiFID II data requirements and their mapping to existing data sources with identification of gaps and quality risks.
• Integrated data architecture: Development of a MiFID II-compliant target data architecture that meets regulatory requirements while ensuring operational efficiency and scalability.
• Data quality framework: Implementation of a comprehensive data quality framework with clear ownership structures, automated quality checks, and continuous monitoring.
• Data governance model: Establishment of a robust data governance model with clear roles, responsibilities, and processes for managing MiFID II-relevant data across the organization.`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQ batch 3 to MiFID II Readiness EN...')
  
  try {
    const result = await client
      .patch('mifid-ii-readiness-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log('Added FAQ batch 3:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

export { faqsBatch3 }
