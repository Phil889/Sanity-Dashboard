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

// FAQs 1-4 (translated from German source)
const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'What fundamental changes does MiFID II product governance bring for financial institutions and how does ADVISORI support strategic transformation?',
    answer: `The MiFID II product governance requirements represent a paradigm shift that goes far beyond technical compliance measures. They require a fundamental realignment of product development and distribution processes with the explicit goal of placing customer interests at the center. This transformation offers strategic opportunities for financial institutions that pursue a proactive approach.

🔄 Fundamental Changes through MiFID II Product Governance:
• Product Lifecycle Responsibility: Manufacturers and distributors of financial products now share responsibility for product suitability – from conception through distribution to regular review.
• Target Market Centricity: Products must be developed for a specific, positively defined target market, with negative target markets also to be explicitly identified.
• Distributed Responsibilities: Clear division of tasks between product manufacturers and distributors with comprehensive information flows and systematic feedback.
• Continuous Monitoring: Obligation for ongoing assessment and adjustment of products and distribution strategies based on market developments and actual customer usage.

🛠️ The ADVISORI Transformation Approach:
• Strategic Positioning: We help you use product governance not as a regulatory burden but as a catalyst for product innovation and improved customer focus.
• Integrated Governance Model: Development of a customized governance structure that aligns regulatory requirements with your specific business models and product portfolios.
• Digital Transformation: Use of innovative technologies to automate and scale product governance processes, from target market definition to continuous monitoring.
• Change Management: Accompanying the cultural change in your organization to embed the new thinking and working methods sustainably.`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'How can financial institutions develop an effective target market concept that is both regulatory robust and commercially valuable?',
    answer: `A strategic target market concept forms the heart of MiFID II product governance and is crucial for meeting regulatory requirements as well as optimizing your business processes. The challenge is to develop a concept that fulfills compliance requirements while also providing real business value.

🎯 Core Elements of an Effective Target Market Concept:
• Multi-dimensional Criteria Framework: Development of a structured framework for target market definition that encompasses all relevant ESMA criteria – customer category, knowledge and experience, financial situation, risk tolerance, investment objectives and needs.
• Granularity and Flexibility: Balance between sufficient detail depth for regulatory conformity and appropriate flexibility for practical applicability in the distribution process.
• Negative Target Market Definition: Clear identification of customer groups for whom a product is not suitable, with particular focus on protecting vulnerable customer groups.
• Distribution Strategy Integration: Systematic linking of target market definitions with concrete distribution strategies and channels.

💡 The ADVISORI Approach for Value-Adding Target Market Concepts:
• Data-Driven Methodology: Use of existing customer data and market analyses for empirically founded definition of target markets that reflect real customer needs.
• Business Model Integration: Development of a target market approach that considers your specific product range, customer segmentation, and distribution structure.
• Digitized Toolkit: Provision of digital tools for efficient target market definition, validation, and review that can be integrated into your existing systems.
• Sales Enablement: Empowering your sales team to use the target market concept as a valuable instrument for better customer advice and targeted distribution.`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'What methodology should be applied when implementing robust suitability and appropriateness assessments and how does ADVISORI support this process?',
    answer: `Suitability and appropriateness assessments are central mechanisms in the MiFID II investor protection concept and crucial for preventing mis-selling. A methodically sound implementation of these assessments is essential for regulatory compliance, but also for improving advisory quality and customer satisfaction.

📋 Methodological Foundations for Robust Suitability Assessments:
• Comprehensive Customer Profiling: Development of a structured approach for complete capture of all relevant customer characteristics – knowledge and experience, financial situation and loss-bearing capacity, investment objectives and risk tolerance.
• Objectified Assessment System: Establishment of a consistent, rule-based system for assessing product suitability for individual customer profiles that minimizes subjective judgment margins.
• Total Wealth Consideration: Integration of a holistic wealth view into the suitability assessment that considers existing investments, liabilities, and other relevant financial aspects.
• Dynamic Updating: Implementation of a systematic process for regular updating and review of customer profiles and suitability assessments.

🔍 The ADVISORI Implementation Approach:
• End-to-End Process Design: Development of a seamless process from customer data capture through suitability assessment to documentation and regular review.
• Digital Transformation: Conception and implementation of digital solutions for efficient suitability assessments with minimal administrative effort and optimized customer experience.
• Regulatory Robust Documentation: Building a comprehensive documentation system that meets all regulatory requirements while serving as a valuable information source for customer advisory.
• Advisor Enablement: Training and supporting your advisors in effectively conducting and communicating suitability assessments to customers.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How can an effective product monitoring system be designed that meets regulatory requirements while providing valuable business insights?',
    answer: `A strategic product monitoring system is more than a regulatory obligation – it is a valuable instrument for continuous product optimization and forward-looking risk management. The challenge is to establish a system that efficiently fulfills regulatory requirements while delivering valuable insights for your business development.

🔄 Key Components of a Strategic Product Monitoring System:
• Holistic Monitoring Framework: Development of a comprehensive framework for monitoring all relevant product and distribution aspects – from target market conformity through product performance to customer complaints and market developments.
• KPI-Based Management: Definition of meaningful KPIs and thresholds that provide early warning of potential problems or optimization needs.
• Information Flow Architecture: Establishment of efficient information channels between product manufacturers, distribution, and customers that ensure a continuous feedback loop.
• Escalation and Adjustment Processes: Implementation of clear procedures for escalating critical findings and systematically adjusting products or distribution strategies.

📈 The ADVISORI Value-Add in Product Monitoring:
• Data-Driven Analysis Approach: Use of advanced data analysis techniques to identify patterns, trends, and deviations in product usage and performance.
• Integrated System Architecture: Development of a monitoring solution that seamlessly integrates into your existing IT systems and overcomes data silos.
• Automated Reporting: Implementation of automated reporting systems that meet regulatory documentation requirements while delivering management-relevant insights.
• Continuous Improvement Loop: Establishment of a structured process for systematically using monitoring results for continuous product and process improvement.`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQ batch 1 (FAQs 1-4) to MiFID Product Investor Protection EN...')
  
  try {
    const result = await client
      .patch('mifid-product-investor-protection-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log('Successfully added FAQ batch 1')
    return result
  } catch (error) {
    console.error('Error adding FAQ batch 1:', error)
    throw error
  }
}

export { faqsBatch1 }
