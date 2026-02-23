import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const faqsBatch5 = [
  {
    _key: `faq_en_${Date.now()}_17`,
    _type: 'object',
    question: 'How can financial institutions establish a sustainable MiFID II compliance culture and what change management approaches does ADVISORI recommend?',
    answer: `Sustainable anchoring of MiFID II compliance requires more than just technical solutions and process adjustments – it demands profound cultural change. Without an established compliance culture, adherence to complex MiFID II requirements remains fragile and dependent on individual controls. Creating such a culture is a long-term leadership task that requires systematic change management and continuous attention.

🌱 Key elements of a sustainable MiFID II compliance culture:
• Leadership responsibility: Active role model function and clear commitment from leadership to MiFID II principles, not just as a regulatory obligation but as a fundamental component of business strategy.
• Value anchoring: Integration of transparency, fairness, and customer focus as core values of the organization that reflect the MiFID II philosophy and are anchored in mission statements, target systems, and decision processes.
• Empowerment and ownership: Systematic empowerment of all employees to understand and implement MiFID II requirements, with clear responsibility assignment and ownership in all affected functions.
• Continuous learning: Establishment of a learning culture that promotes continuous improvement, learns from mistakes, and shares best practices across departmental boundaries.

🔄 The ADVISORI approach to MiFID II change management:
• Cultural readiness assessment: Conducting a comprehensive cultural analysis to identify strengths, weaknesses, and barriers to establishing a MiFID II-compliant working method.
• Leadership alignment program: Development and implementation of a structured program for aligning leaders across all levels, with clear behavioral expectations and communication messages.
• Integrated communication strategy: Design of a multi-stage, target group-specific communication strategy that conveys the meaning and benefits of MiFID II requirements and promotes acceptance.
• Sustainable capability building: Development and implementation of comprehensive training programs that not only convey knowledge but also promote understanding and acceptance of MiFID II requirements.`
  },
  {
    _key: `faq_en_${Date.now()}_18`,
    _type: 'object',
    question: 'What role do RegTech solutions play in MiFID II compliance and how does ADVISORI support their selection and implementation?',
    answer: `RegTech solutions have become an indispensable enabler for efficient and sustainable compliance with MiFID II. The complexity and data volume of the requirements make manual processes or generic IT solutions impractical in many areas. Specialized RegTech tools offer significant advantages through automation, advanced analytics, and regulatory expertise, but must be carefully selected and implemented to realize their full value.

💻 Key areas for RegTech deployment in MiFID II:
• Transaction reporting: Automated solutions for data extraction, validation, and transmission to ARMs with integrated rule sets for correct field population and continuous regulatory update management.
• Record-keeping obligations: Modern communication recording systems with automated tagging, intelligent search, and compliant archiving for telephone calls, emails, and other electronic communications.
• Cost transparency: Specialized tools for automated calculation, aggregation, and presentation of all direct and indirect costs for ex-ante and ex-post disclosures across various products and services.
• Best execution: Advanced analytics tools for continuous monitoring of execution quality with automated comparisons, exception reporting, and documentation functions.

⚙️ The ADVISORI approach to RegTech selection and implementation:
• Requirements-based evaluation methodology: Development of a structured, requirements-based framework for objective evaluation and selection of RegTech solutions that considers both functional and non-functional criteria.
• Vendor due diligence: Conducting comprehensive due diligence review of potential RegTech providers regarding market position, innovation capability, support model, and regulatory expertise.
• Integration architecture: Design of a robust integration architecture that seamlessly embeds RegTech solutions into your existing IT landscape and ensures efficient data flows.
• Implementation support: Comprehensive support in implementing RegTech solutions, from requirements specification through configuration to testing and go-live.`
  },
  {
    _key: `faq_en_${Date.now()}_19`,
    _type: 'object',
    question: 'How can financial institutions integrate MiFID II requirements into their digitalization strategy and what synergies does ADVISORI identify?',
    answer: `Integrating MiFID II requirements into the digitalization strategy offers financial institutions the opportunity to use regulatory investments as a catalyst for digital transformation. Instead of treating MiFID II as an isolated compliance initiative, forward-thinking institutions can unlock significant synergies by bringing together regulatory and strategic digitalization initiatives. This integrated approach maximizes return on investment and creates sustainable competitive advantages.

🔄 Key synergies between MiFID II and digitalization:
• Customer interaction digitalization: MiFID II requirements for advisory documentation, suitability assessment, and cost transparency can serve as drivers for introducing digital customer interaction platforms that improve both compliance and customer experience.
• Data-driven organization: The extensive data requirements of MiFID II can be used as an occasion to develop an enterprise-wide data strategy that connects regulatory requirements with analytical and business use cases.
• Process automation: The necessity to revise manual processes due to MiFID II offers the opportunity to introduce advanced automation technologies such as RPA, workflow management, and AI that create efficiency beyond pure compliance.
• API ecosystem: Requirements for data exchange and integration for MiFID II can serve as the foundation for a modern API ecosystem that forms the basis for future digital innovations and partnerships.

🚀 The ADVISORI approach to integrated transformation:
• Digital synergy mapping: Systematic identification and prioritization of synergy potentials between MiFID II requirements and digitalization projects with quantitative assessment of value contribution.
• Integrated roadmap development: Creation of a consolidated transformation roadmap that combines regulatory and strategic initiatives and enables efficient resource utilization.
• Technology platform strategy: Development of a technology platform strategy that creates shared foundations for compliance and digital innovation and avoids redundant investments.
• Agile delivery model: Implementation of an agile delivery model that enables flexible prioritization between regulatory and strategic initiatives while maintaining overall program coherence.`
  },
  {
    _key: `faq_en_${Date.now()}_20`,
    _type: 'object',
    question: 'What best practices does ADVISORI recommend for a cost-efficient and sustainable MiFID II implementation?',
    answer: `Implementing MiFID II presents financial institutions with significant challenges regarding costs, resource deployment, and sustainability. Without a strategic, well-thought-out approach, budget overruns, inefficient resource allocation, and suboptimal solutions that cause high operating costs in the long term threaten. Based on our experience from numerous successful implementation projects, we have identified best practices that enable cost-efficient and future-proof implementation.

💰 Best practices for cost-efficient MiFID II implementation:
• Prioritization-based implementation approach: Development of a risk-based prioritization that evaluates compliance requirements by regulatory urgency, business relevance, and implementation complexity and allocates resources in a targeted manner.
• Reuse of existing solutions: Systematic identification of opportunities to use and extend existing systems and processes instead of implementing completely new solutions, wherever sensibly possible.
• Industry standards and shared services: Use of industry standards, industry solutions, and shared service approaches for non-differentiating compliance functions to reduce development costs and benefit from economies of scale.
• Phased implementation with quick wins: Design of a phased implementation approach that identifies early quick wins, creates value quickly, and simultaneously minimizes the risk of large big-bang introductions.

🛠️ ADVISORI's recommended implementation approach:
• Modular compliance architecture: Development of a modular, flexible compliance architecture that enables incremental implementation, can cost-effectively integrate future regulatory changes, and avoids unnecessary redundancies.
• Agile delivery model: Use of agile implementation methods with short iteration cycles, continuous feedback, and rapid adaptation to changing requirements.
• Sustainable operating model: Design of a sustainable operating model that ensures long-term compliance with manageable operating costs and enables continuous adaptation to regulatory developments.
• Knowledge transfer and capability building: Systematic knowledge transfer to your teams to reduce long-term dependency on external support and build internal compliance competence.`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQ batch 5 to MiFID II Readiness EN...')
  
  try {
    const result = await client
      .patch('mifid-ii-readiness-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('Added FAQ batch 5:', result._id)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

export { faqsBatch5 }
