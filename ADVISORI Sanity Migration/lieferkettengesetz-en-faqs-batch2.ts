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

// Lieferkettengesetz English FAQs - Batch 2 (FAQs 5-8)
// Source: lieferkettengesetz-source.json

const faqsBatch2 = [
  {
    _key: `faq_${timestamp}_5`,
    _type: 'object',
    question: 'How does ADVISORI design the practical implementation of an LkSG-compliant due diligence organization that is both legally secure and operationally efficient?',
    answer: `The implementation of an LkSG-compliant due diligence organization requires a careful balance between legal compliance, operational efficiency, and strategic integration into existing business processes. ADVISORI develops customized organizational structures that not only meet legal requirements but also serve as a catalyst for improved supply chain performance and sustainable value creation.

🏗️ Structural Setup of the Due Diligence Organization:
• Governance Integration: Establishment of an LkSG governance structure with clear responsibilities from management to operational level, including a dedicated human rights officer.
• Cross-functional Task Forces: Building interdisciplinary teams from Legal, Procurement, Risk Management, Sustainability, and Operations for holistic due diligence implementation.
• Escalation and Decision-Making: Definition of clear escalation paths and decision processes for various risk scenarios and compliance deviations.
• Performance Management: Integration of LkSG KPIs into existing management dashboards and incentive systems to ensure sustainable compliance motivation.

⚙️ Operational Excellence in Implementation:
• Digital Due Diligence Platforms: Implementation of technology-supported solutions for supplier assessment, risk monitoring, and documentation that maximize efficiency and traceability.
• Risk-Based Prioritization: Development of intelligent algorithms for identifying and prioritizing high-risk suppliers and regions for focused due diligence measures.
• Standardized Process Workflows: Design of uniform, scalable processes for supplier qualification, contract creation, and ongoing monitoring.
• Supplier Engagement Excellence: Building constructive cooperation models with suppliers that promote compliance rather than relying solely on sanction-oriented approaches.`
  },
  {
    _key: `faq_${timestamp}_6`,
    _type: 'object',
    question: 'What specific technologies and digital solutions does ADVISORI recommend for effective LkSG monitoring and how do these integrate into existing enterprise systems?',
    answer: `Modern LkSG compliance requires sophisticated technological support that goes beyond traditional ERP systems. ADVISORI recommends an integrated Digital Compliance Ecosystem strategy that combines AI-powered risk analysis, blockchain-based transparency, and advanced analytics to enable proactive and precise due diligence while maximizing operational efficiency.

💻 Core Technologies for LkSG Excellence:
• AI-powered Risk Intelligence: Use of machine learning algorithms for automated analysis of news sources, sanctions lists, and ESG databases for real-time risk assessment of your suppliers.
• Blockchain-based Supply Chain Transparency: Implementation of immutable audit trails for critical supply chain steps, creating traceability and trust in data integrity.
• Satellite Monitoring and Geospatial Analytics: Use of satellite data to monitor environmental risks and labor standards in geographically critical regions.
• Natural Language Processing (NLP): Automated analysis of supplier contracts and compliance documents to identify risk indicators and contract deviations.

🔗 Seamless Enterprise Integration:
• API-First Architecture: Development of flexible interfaces for integration with existing SAP, Oracle, or Microsoft systems without disrupting ongoing processes.
• Data Lake Integration: Harmonization of LkSG data with existing Business Intelligence and Analytics platforms for unified reporting dashboards.
• Workflow Automation: Integration into existing procurement and supply chain management systems for automated due diligence triggers and approval workflows.
• Single Sign-On and Identity Management: Seamless integration into existing security architectures and user rights management systems.

📊 Advanced Analytics and Reporting:
• Predictive Risk Modeling: Development of algorithms that predict future compliance risks based on historical data and market trends.
• Real-time Dashboard Excellence: Provision of executive dashboards with real-time insights into LkSG KPIs and risk indicators for rapid decision-making.`
  },
  {
    _key: `faq_${timestamp}_7`,
    _type: 'object',
    question: 'How does ADVISORI develop an effective supplier engagement and capacity building approach that makes suppliers proactive partners in LkSG implementation?',
    answer: `Successful LkSG management goes far beyond mere compliance control and requires the transformation of supplier relationships from transactional to strategic partnerships. ADVISORI develops innovative Supplier Engagement programs that position suppliers not as risk factors but as active partners in creating sustainable value chains, thereby optimizing both compliance goals and business results.

🤝 Strategic Partnership Approach:
• Collaborative Risk Assessment: Joint development of risk assessment models with key suppliers that integrate their specific market and regional knowledge.
• Shared Value Creation: Identification of win-win scenarios where sustainable practices achieve both compliance goals and operational efficiency and cost savings.
• Long-term Partnership Agreements: Development of long-term contract structures that incentivize investments in sustainable practices and create planning security for both parties.
• Innovation Co-Development: Building joint innovation programs for sustainable technologies and processes that generate competitive advantages for the entire value chain.

📚 Comprehensive Capacity Building:
• Customized Training Programs: Development of tailored training programs suited to the specific needs and capabilities of different supplier categories.
• Digital Learning Platforms: Provision of scalable online training modules in various languages for efficient and cost-effective knowledge transfer.
• Best Practice Sharing: Establishment of peer-learning networks between suppliers for exchanging proven practices and lessons learned.
• Technical Assistance and Consulting: Provision of targeted consulting services for suppliers in implementing compliance systems and sustainable operating practices.

🚀 Performance-Driven Supplier Development:
• Continuous Improvement Programs: Structured programs for systematic improvement of supplier compliance performance with clear milestones and success metrics.
• Recognition and Incentive Systems: Development of reward systems that recognize and incentivize outstanding compliance performance.`
  },
  {
    _key: `faq_${timestamp}_8`,
    _type: 'object',
    question: 'How does ADVISORI design LkSG crisis management and what processes ensure that potential human rights or environmental violations are addressed quickly and effectively?',
    answer: `Effective LkSG crisis management requires a proactive, systematic, and stakeholder-oriented approach that ensures both immediate damage limitation and long-term reputation and compliance security. ADVISORI develops robust Crisis Response Frameworks that enable rapid decision-making, minimize legal risks, and simultaneously preserve the trust of all stakeholders.

🚨 Rapid Response Framework:
• 24/7 Monitoring and Alerting: Implementation of continuous monitoring systems for critical suppliers and risk regions with automatic escalation mechanisms for risk indicators.
• Crisis Response Team (CRT): Establishment of a multidisciplinary crisis team with predefined roles, responsibilities, and decision-making authority for various escalation levels.
• Immediate Assessment Protocols: Development of standardized assessment procedures for rapid evaluation of the severity and scope of potential violations.
• Stakeholder Communication Matrix: Predefined communication strategies for various stakeholder groups (regulators, media, investors, customers) to ensure consistent and transparent information delivery.

🔧 Remediation and Corrective Action:
• Immediate Containment: Immediate measures to interrupt potential violations, including temporary supplier suspension or enhanced monitoring.
• Root Cause Analysis: Systematic investigation of underlying causes to develop sustainable corrective measures and prevention strategies.
• Victim Support and Remediation: Building support mechanisms for affected persons or communities, including financial compensation or other remediation measures.
• Supplier Rehabilitation: Development of structured programs to support suppliers in addressing compliance problems and restoring compliance status.

📋 Documentation and Learning:
• Comprehensive Case Documentation: Complete documentation of all crisis response activities for regulatory compliance and continuous improvement.
• Lessons Learned Integration: Systematic integration of insights from crisis situations into prevention strategies and compliance processes.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding FAQs batch 2 to ESG Supply Chain Due Diligence Act EN...')
  
  try {
    const result = await client
      .patch('esg-lieferkettengesetz-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('Added FAQs batch 2:', faqsBatch2.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 2:', error)
    throw error
  }
}

export { faqsBatch2 }
