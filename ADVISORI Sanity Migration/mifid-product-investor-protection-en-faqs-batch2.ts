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

// FAQs 5-8 (translated from German source)
const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'What technological approaches does ADVISORI recommend for automating and digitizing MiFID II investor protection processes?',
    answer: `Technological support is a decisive success factor for efficient implementation and sustainable compliance with MiFID II investor protection requirements. A well-thought-out digitization strategy enables not only regulatory compliance with reduced operational effort but can also significantly improve the customer experience and generate valuable business insights.

💻 Key Technologies for MiFID II Digitization:
• Rule-Based Decision Systems: Implementation of intelligent algorithms for automated assessment of product suitability for specific customer profiles based on clearly defined rules and criteria.
• Digital Customer Profiling: Use of interactive, user-friendly tools for comprehensive capture of relevant customer information with automatic completeness and plausibility checks.
• Workflow Automation: End-to-end digitization of the advisory and documentation process with automated workflows, approval stages, and escalation paths.
• Integrated Data Architecture: Creation of a consolidated data foundation that links product, customer, and transaction data and makes it usable for compliance purposes and business analyses.

🚀 The ADVISORI Digitization Approach:
• Technology Strategy: Development of a customized digitization strategy that considers your existing IT landscape, business processes, and long-term digital goals.
• Modular Solution Approach: Design of modular technology components that can be implemented step by step and offer maximum flexibility with minimal implementation risks.
• System Integration: Seamless integration of new solutions into your existing IT infrastructure, CRM systems, and advisory tools with focus on consistent data flows.
• User Experience Design: Design of intuitive user interfaces that create a positive experience for both your advisors and customers and support the efficient execution of regulatory processes.`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'How can financial institutions effectively shape the cultural change toward more investor protection and what support does ADVISORI offer in this transformation process?',
    answer: `Successful implementation of MiFID II investor protection requirements requires far more than technical and procedural adjustments – it requires a fundamental cultural change within the organization. This cultural change particularly affects customer advisory, where genuine customer centricity and the highest ethical standards must become lived practice.

🔄 Dimensions of Cultural Change in the MiFID II Context:
• Paradigm Shift in Advisory Philosophy: Transformation from a product-oriented to a customer-oriented advisory approach with honest needs assessment and individual solution finding.
• New Role Understanding for Advisors: Development of a self-image as an independent financial advisor and trusted partner of the customer instead of a pure product seller.
• Compliance as Value Creation: Anchoring the understanding that regulatory requirements are not just an obligation but an opportunity for better customer relationships and sustainable business success.
• Transparency Culture: Establishment of a culture of openness and transparency in all aspects of customer interaction, from product risks through costs to potential conflicts of interest.

👥 The ADVISORI Change Management Approach:
• Holistic Transformation Strategy: Development of a comprehensive change strategy that addresses three levels – individual employees, teams, and the overall organization.
• Leaders as Change Champions: Targeted involvement and empowerment of leaders as role models and drivers of cultural change with clear messages and consistent action.
• Employee Activation: Implementation of interactive training and communication formats that not only convey knowledge but also positively influence attitudes and behaviors.
• Sustainable Incentive System: Redesign of incentive and compensation systems that reward customer-oriented behavior and support the new advisory philosophy.`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'What particular challenges arise in MiFID II-compliant advice on complex financial products and how does ADVISORI support in overcoming them?',
    answer: `MiFID II requirements place particularly high demands on advice regarding complex financial products that exhibit increased complexity through their structuring, risk characteristics, or embedded derivatives. These products require a specially adapted approach in both product governance and suitability assessment and customer education.

🧩 Specific Challenges with Complex Products:
• Comprehensive Risk Transparency: Necessity to present complex risk structures and potential loss scenarios completely yet understandably for different customer groups.
• Extended Suitability Assessment: Requirement for particularly in-depth assessments of the customer's knowledge, experience, and financial capacity with stricter documentation requirements.
• Restrictive Target Market Definition: Necessity for particularly precise and generally narrower target market definition with robust distribution restrictions for unsuitable customer groups.
• Increased Documentation Requirements: Need for particularly comprehensive and detailed documentation of all advisory and decision processes to demonstrate regulatory compliance.

📊 The ADVISORI Approach for Complex Products:
• Product Complexity Framework: Development of a structured framework for objective assessment and classification of product complexity as the basis for all further measures.
• Customer Understanding Validation: Conception of specific methods and tools for well-founded verification of actual customer knowledge about complex product features and risks.
• Extended Target Market Methodology: Implementation of a refined target market methodology for complex products with multi-dimensional suitability criteria and clear distribution guardrails.
• Enhanced Advisor Training: Conducting specialized training programs that enable advisors to correctly explain complex products and soundly assess their suitability.`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How can financial institutions successfully implement MiFID II cost transparency requirements and what methodology does ADVISORI recommend?',
    answer: `MiFID II cost transparency requirements represent a paradigm shift that demands from financial institutions complete, understandable disclosure of all direct and indirect costs over the entire investment period. This transparency is a key element of investor protection and requires both methodological and technical innovations.

💰 Core Challenges in Implementing Cost Transparency:
• Complete Cost Capture: Identification and aggregation of all relevant cost components across the entire value chain – from product costs through transaction costs to advisory and service fees.
• Ex-ante and Ex-post Presentation: Development of consistent methods for prior (ex-ante) cost estimation and subsequent (ex-post) cost reporting with traceable calculation logic.
• Customer-Understandable Communication: Transformation of complex cost information into understandable, meaningful presentations that enable customers to make informed decisions.
• Cost-Efficient Implementation: Establishment of processes and systems that meet regulatory requirements without causing disproportionate operational effort.

📈 The ADVISORI Methodology Approach for Cost Transparency:
• Integrated Cost Model: Development of a comprehensive cost model that systematically captures all relevant cost components and structures them according to MiFID II-compliant categories.
• Standardized Calculation Methodology: Implementation of a consistent, documented methodology for cost calculation and forecasting that is both regulatory robust and practically implementable.
• Visualization Concept: Design of intuitive visualizations and metrics that make cost information understandable and comparable for different customer groups.
• System Integration: Conception and implementation of an IT solution that consolidates cost data from various source systems and enables automated generation of cost disclosures.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQ batch 2 (FAQs 5-8) to MiFID Product Investor Protection EN...')
  
  try {
    const result = await client
      .patch('mifid-product-investor-protection-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('Successfully added FAQ batch 2')
    return result
  } catch (error) {
    console.error('Error adding FAQ batch 2:', error)
    throw error
  }
}

export { faqsBatch2 }
