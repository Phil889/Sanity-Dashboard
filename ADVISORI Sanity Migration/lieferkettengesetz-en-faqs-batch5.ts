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

// Lieferkettengesetz English FAQs - Batch 5 (FAQs 17-20)
// Source: lieferkettengesetz-source.json

const faqsBatch5 = [
  {
    _key: `faq_${timestamp}_17`,
    _type: 'object',
    question: 'How does ADVISORI support the development of a future-proof LkSG strategy that also anticipates upcoming EU supply chain directives and international developments?',
    answer: `The regulatory landscape in supply chain responsibility is evolving rapidly, from the upcoming EU Supply Chain Directive to tightened ESG requirements to new international standards. ADVISORI develops adaptive, future-proof LkSG strategies that not only meet current German requirements but also proactively anticipate upcoming regulatory developments and position your company as a first mover and compliance leader.

🔮 Future-Proof Strategy Development:
• Regulatory Horizon Scanning: Continuous analysis of international regulatory developments (EU Corporate Sustainability Due Diligence Directive, UN Treaty on Business and Human Rights, national legislative developments) for proactive strategy adaptation.
• Scenario Planning Excellence: Development of multiple future scenarios and corresponding compliance strategies for various regulatory development paths and their impacts on your business model.
• Modular Compliance Architecture: Design of flexible compliance systems that can be quickly adapted and expanded to new requirements without fundamental realignment of the due diligence infrastructure.
• Early Adopter Advantage: Strategic positioning as a pioneer through voluntary implementation of upcoming standards before their legal binding for competitive advantage.

🌍 International Alignment Strategy:
• Cross-Jurisdictional Harmonization: Development of unified standards that integrate both German LkSG requirements and upcoming EU directives and international best practices.
• Global Standard Integration: Proactive alignment with evolving international standards (ISO 20400, OECD Guidelines, UN Guiding Principles) for seamless integration into a global compliance landscape.
• Multi-Stakeholder Anticipation: Early integration of evolving stakeholder expectations and ESG rating criteria into your compliance strategy.
• Technology Readiness: Building technological capabilities that can adapt to new reporting requirements and data standards.

📋 Continuous Adaptation:
• Regular Strategy Reviews: Systematic review and updating of compliance strategies based on regulatory developments.
• Stakeholder Dialogue: Ongoing engagement with regulators, industry associations, and civil society to anticipate changing expectations.`
  },
  {
    _key: `faq_${timestamp}_18`,
    _type: 'object',
    question: 'What role do data analysis and AI-based solutions play in ADVISORI\'s approach to optimizing LkSG compliance efficiency and risk detection?',
    answer: `Modern LkSG compliance requires the intelligent use of data analysis and artificial intelligence to manage the complexity of global supply chains. ADVISORI uses cutting-edge analytics and AI not only to increase efficiency but to fundamentally transform your due diligence capabilities from reactive compliance to proactive risk prevention and continuous optimization of supply chain responsibility.

🤖 Advanced AI & Machine Learning Applications:
• Predictive Risk Modeling: Development of sophisticated algorithms that combine historical data, market indicators, and external data sources to identify human rights and environmental risks before they occur.
• Supplier Behavior Analytics: AI-powered analysis of supplier behavior, compliance patterns, and performance trends for precise risk assessment and proactive intervention.
• Anomaly Detection: Implementation of intelligent systems for automatic detection of unusual patterns or deviations in supplier data that indicate potential compliance problems.
• Natural Language Processing: Automated analysis of news sources, social media, NGO reports, and other text data sources for real-time intelligence on supplier risks.

📊 Data-Driven Decision Excellence:
• Integrated Data Ecosystems: Building comprehensive data architectures that integrate internal supplier data with external ESG databases, satellite data, and third-party intelligence.
• Real-Time Analytics Dashboards: Provision of intelligent dashboards with AI-generated insights, trend analyses, and automated action recommendations for management decisions.
• Dynamic Risk Scoring: Development of adaptive risk scoring models that continuously update and refine based on new data and insights.
• Performance Optimization: AI-powered analysis of the effectiveness of various due diligence measures for data-based resource allocation and strategy optimization.

🔐 Data Governance:
• Data Quality Management: Ensuring high data quality through automated validation and cleansing processes.
• Privacy Compliance: Implementing robust data protection measures in compliance with GDPR and other regulations.`
  },
  {
    _key: `faq_${timestamp}_19`,
    _type: 'object',
    question: 'How does ADVISORI develop an authentic and credible communication strategy for LkSG compliance that convinces both internal and external stakeholders?',
    answer: `Authentic LkSG communication is crucial for the credibility of your sustainability strategy and requires a differentiated approach that addresses various stakeholder groups with tailored, transparent, and honest messages. ADVISORI develops integrated communication strategies that not only demonstrate compliance but position your company as an authentic leader in supply chain responsibility while avoiding greenwashing accusations.

📢 Multi-Stakeholder Communication Excellence:
• Audience-Specific Messaging: Development of differentiated communication approaches for various stakeholder groups (investors, customers, employees, NGOs, regulators) with relevant focus areas and adapted language.
• Transparency-First Approach: Building a communication strategy that honestly addresses both successes and challenges and presents continuous improvement as an authentic sustainability journey.
• Data-Driven Storytelling: Integration of precise metrics, KPIs, and impact measurements into narrative structures that combine emotional connection with factual credibility.
• Proactive Issue Management: Development of forward-looking communication strategies for potential criticism or compliance challenges.

🎯 Internal Engagement & Culture Building:
• Employee Ambassador Programs: Building internal ambassador programs that make employees authentic advocates of your LkSG strategy and create internal credibility.
• Leadership Communication Excellence: Training and support for leadership in convincing, knowledgeable, and authentic communication about LkSG topics.
• Cultural Integration Strategies: Development of approaches for integrating LkSG values into corporate culture and internal communication.
• Feedback & Dialog Mechanisms: Establishment of bidirectional communication channels for continuous dialogue and employee engagement.

🌐 External Communication:
• Media Relations: Strategic media engagement to communicate your LkSG achievements and sustainability leadership.
• Stakeholder Reporting: Development of comprehensive, accessible reports that meet diverse stakeholder information needs.
• Crisis Communication Preparedness: Building capabilities for effective communication during compliance incidents or challenges.`
  },
  {
    _key: `faq_${timestamp}_20`,
    _type: 'object',
    question: 'What long-term competitive advantages arise from ADVISORI\'s holistic LkSG implementation approach and how can these be sustainably secured?',
    answer: `A strategically thought-out LkSG implementation with ADVISORI creates sustainable competitive advantages that go far beyond mere compliance and establish your company as a leader in responsible corporate governance. These advantages manifest in improved market access, strengthened stakeholder relationships, operational excellence, and increased resilience to ESG-related business risks.

🏆 Sustainable Competitive Advantages:
• Market Leadership Position: Establishment as an industry leader in supply chain responsibility with increased credibility among customers, investors, and business partners, leading to premium pricing and preferred partner status.
• Resilient Supply Chain Architecture: Building robust, diversified, and transparent supply chains that are less susceptible to disruptions and enable faster recovery times during crises.
• Enhanced Stakeholder Capital: Systematic building of trust and reputation with all stakeholder groups, translating into improved access to capital, talent, and markets.
• Innovation Ecosystem Access: Privileged access to sustainable innovations, technologies, and partnerships through reputation as a responsible and future-oriented actor.

💰 Financial & Operational Value Creation:
• Risk-Adjusted Returns: Reduction of ESG-related business risks leads to more stable, predictable cash flows and improved risk-adjusted returns for investors.
• Cost Optimization: Efficient, transparent supply chain processes reduce transaction costs, improve supplier relationships, and enable better negotiating positions.
• Access to ESG Capital: Preferred access to sustainable financing instruments (green bonds, ESG loans) with more favorable terms and expanded financing options.
• Talent Acquisition Advantage: Strengthening of employer brand for sustainable talent management and reduced recruiting and turnover costs.

🔒 Securing Long-Term Advantages:
• Continuous Innovation: Ongoing investment in compliance capabilities and sustainable practices to maintain leadership position.
• Stakeholder Relationship Management: Systematic nurturing of relationships with all stakeholder groups to sustain trust and credibility.
• Adaptive Strategy: Regular review and adaptation of compliance strategies to maintain competitive edge in evolving regulatory landscape.`
  }
]

export async function addFaqsBatch5() {
  console.log('Adding FAQs batch 5 to ESG Supply Chain Due Diligence Act EN...')
  
  try {
    const result = await client
      .patch('esg-lieferkettengesetz-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('Added FAQs batch 5:', faqsBatch5.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 5:', error)
    throw error
  }
}

export { faqsBatch5 }
