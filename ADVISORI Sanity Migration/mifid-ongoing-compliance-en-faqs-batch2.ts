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
    question: 'What technological innovations does ADVISORI employ to automate continuous MiFID compliance, and what efficiency gains result from this?',
    answer: `The complex and constantly evolving MiFID requirements demand a fundamentally new technological approach that goes far beyond manual processes and isolated compliance tools. ADVISORI integrates cutting-edge technologies in a holistic MiFID compliance tech stack that not only automates compliance processes but also maximizes their strategic value creation.

🔧 Our Technological MiFID Innovations:
• Intelligent Suitability Engine: AI-powered platform for automated assessment of the appropriateness and suitability of financial instruments for individual customer profiles, equally enhancing advisory quality and compliance security – with reduction of manual reviews by up to 85%.
• Regulatory Pattern Recognition: Advanced NLP algorithms (Natural Language Processing) that analyze and interpret new ESMA and BaFin publications and automatically identify their implications for existing processes – with an accuracy rate of over 92% in detecting compliance-relevant changes.
• MiFID Process Automation Suite: Integrated process automation solution for the entire MiFID lifecycle, from product approval processes through target market definitions to cost transparency documentation – with an average process acceleration of 60-70%.
• Real-time Compliance Monitoring Dashboard: Real-time monitoring system for MiFID-relevant KPIs that proactively identifies potential compliance gaps and generates automated alerts – with an early detection rate of up to 95% for potential compliance violations.

📈 Resulting Efficiency Gains:
• Time Savings: Reduction of manual effort for MiFID compliance processes by 65-75%, freeing thousands of work hours annually in sales and compliance areas and increasing capacity for value-adding customer interactions.
• Error Reduction: Decrease in human errors in compliance-relevant processes by over 90%, significantly reducing the risk of regulatory objections and associated costs.
• Scalability: Ability to handle growing transaction volumes and product complexity without proportional increase in compliance resources.`
  },
  {
    _key: `faq_en_${Date.now()}_6`,
    _type: 'object',
    question: 'How does ADVISORI support financial institutions in managing the specific challenges in the area of MiFID product approval processes and target market definitions?',
    answer: `The MiFID requirements for product approval processes (Product Governance) and target market definitions present a particular challenge as they require complex interfaces between product development, sales, and compliance. ADVISORI has developed a specialized approach that uses these requirements not as a regulatory burden but as an opportunity to optimize the product portfolio and sales efficiency.

🔍 Our Expertise in MiFID Product Governance:
• Holistic Process Optimization: Development of integrated product approval procedures that harmonize regulatory requirements with business objectives and cover the entire product lifecycle – from conception through market launch to monitoring and potential product withdrawal.
• Data-Driven Target Market Modeling: Implementation of advanced data analysis methods for precise definition and continuous validation of product target markets that both meet regulatory requirements and maximize sales opportunities – with demonstrably 35-45% higher accuracy in customer targeting.
• Automated Compatibility Check: Development of intelligent systems for automated matching between customer characteristics and target market definitions that both support sales staff and minimize compliance risks – with a reduction of misplacements by up to 70%.
• Evidence-Based Monitoring: Establishment of systematic processes for continuous monitoring of product performance and target market validation that enable well-founded adjustments and fulfill regulatory documentation requirements.

💡 Concrete Support Services:
• Assessment & Roadmap: Comprehensive analysis of existing product approval processes and target market definitions with identification of optimization potentials and development of a structured transformation roadmap.
• Process Design & Implementation: Conception and implementation of optimized product governance processes that meet both regulatory requirements and business needs.
• Technology Integration: Selection and implementation of suitable technology solutions for automated target market matching and product monitoring.`
  },
  {
    _key: `faq_en_${Date.now()}_7`,
    _type: 'object',
    question: 'What best practices does ADVISORI recommend for effective integration of MiFID transparency requirements into existing customer advisory and reporting processes?',
    answer: `The extensive MiFID transparency requirements regarding costs, fees, and inducements present many institutions with the challenge of reconciling regulatory compliance with positive customer experience. Based on our experience from numerous successful implementation projects, ADVISORI has developed a best practice catalog that transforms transparency requirements from a regulatory obligation into a strategic differentiator.

📋 Best Practices for MiFID Transparency Integration:
• Customer Experience Design: Conception of transparency information according to customer experience principles that not only formally fulfill regulatory requirements but create genuine customer value through visualization, layering, and context-sensitive presentation – with demonstrable increase in customer satisfaction by 20-30%.
• Omnichannel Consistency: Ensuring consistent transparency information across all customer channels (personal advisory, online banking, mobile apps, documentation) that guarantee a uniform customer experience and minimize regulatory risks.
• Automated Cost Aggregation: Implementation of intelligent systems for automated capture, calculation, and aggregation of all relevant cost information from various product systems that eliminate manual errors and ensure information currency.
• Contextualized Advisory Integration: Development of advisory guidelines and tools that present transparency information not in isolation but in the context of customer benefits, risk-return profile, and investment alternatives.

🛠️ Implementation Recommendations:
• Process-Integrated Approach: Integration of transparency requirements into the natural flow of customer advisory and product presentation instead of isolated compliance checkpoints, which increases both customer acceptance and advisor efficiency.
• Digitalized Solutions: Use of digital tools for interactive, personalized presentation of cost information that enables customers to understand and compare different scenarios.
• Advisor Empowerment: Training and tools that enable advisors to present transparency information confidently and use it as a trust-building element in customer conversations.`
  },
  {
    _key: `faq_en_${Date.now()}_8`,
    _type: 'object',
    question: 'How does ADVISORI design compliance training and awareness programs for MiFID requirements to achieve sustainable behavioral changes among sales employees?',
    answer: `Even the most sophisticated MiFID compliance processes and systems can only be sustainably effective when employees – especially in customer-facing functions – internalize regulatory requirements and implement them in their daily actions. ADVISORI has developed a transformative approach for MiFID awareness and training programs that goes beyond traditional compliance training and effects profound, sustainable behavioral changes.

🎓 Innovative MiFID Training Design:
• Behavioral Science Approach: Integration of behavioral economics insights into the design of training content and formats that promote intrinsic motivation and address unconscious behavioral patterns – with demonstrably 3-4 times higher implementation rate compared to traditional training.
• Adaptive Learning Pathways: Development of personalized, role-specific learning paths that automatically adapt to the prior knowledge, learning speed, and application context of individual employees and are continuously optimized.
• Microlearning & Just-in-Time Support: Implementation of a system of short, focused learning units and context-sensitive support tools that are available exactly when employees need them in the customer advisory process – with a reduction of application errors by 60-70%.
• Immersive Simulation Techniques: Use of advanced simulation technologies that make realistic advisory situations and complex MiFID compliance scenarios experiential and convey practical action knowledge instead of theoretical rule knowledge.

🌱 Cultural Change Elements:
• Purpose-Driven Messaging: Development of a communication strategy that foregrounds the deeper meaning of MiFID requirements (investor protection, market integrity, trust building) and thereby promotes personal identification rather than mere rule compliance.
• Peer Learning Networks: Establishment of structured peer learning networks that enable knowledge exchange between experienced and newer employees and anchor best practices in daily practice.
• Leadership Role Modeling: Programs for managers that enable them to serve as role models for compliance-conscious behavior and create a supportive environment for their teams.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQs batch 2 to MiFID Ongoing Compliance EN...')
  
  const result = await client
    .patch('mifid-ongoing-compliance-en')
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch2)
    .commit()
  
  console.log('Added FAQs batch 2:', faqsBatch2.length, 'FAQs')
  return result
}

addFaqsBatch2()
