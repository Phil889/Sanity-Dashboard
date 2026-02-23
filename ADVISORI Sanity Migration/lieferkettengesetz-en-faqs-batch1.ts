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

// Lieferkettengesetz English FAQs - Batch 1 (FAQs 1-4)
// Source: lieferkettengesetz-source.json

const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'Why is the German Supply Chain Due Diligence Act (LkSG) more than just a compliance requirement for the C-Suite and how does ADVISORI support strategic implementation?',
    answer: `The German Supply Chain Due Diligence Act (LkSG) represents a fundamental transformation of corporate governance for executive leadership that goes far beyond mere compliance measures. It is a strategic imperative for securing sustainable competitiveness and minimizing existential business risks. ADVISORI understands the LkSG as a catalyst for value-oriented corporate governance that combines long-term success with social responsibility.

🎯 Strategic Dimensions for Executive Leadership:
• Reputation Protection and Brand Value: Violations of human rights and environmental standards can lead to lasting reputational damage that significantly impairs company value.
• Financial Risk Minimization: Fines of up to 2% of global annual revenue and exclusions from public contracts can jeopardize financial stability.
• Investor Access and ESG Ratings: Institutional investors and rating agencies increasingly evaluate supply chain sustainability as a decisive factor for investment decisions.
• Operational Excellence: A transparent and responsible supply chain reduces disruption risks and strengthens value chain resilience.

🛡️ The ADVISORI Approach for Strategic LkSG Management:
• Holistic Risk Analysis: We assess not only legal risks but also their impacts on your business strategy, market position, and long-term growth objectives.
• Integrated Governance Structures: Development of due diligence systems that seamlessly integrate into existing governance processes and support C-Suite decision-making.
• Value-Oriented Corporate Governance: Positioning the LkSG as a building block of an authentic Corporate Social Responsibility strategy that strengthens the trust of all stakeholders.
• Data-Driven Decision Support: Provision of precise KPIs and dashboards for informed strategic decisions.`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'How do we quantify the investment in ADVISORI\'s LkSG compliance solutions and what measurable contribution does this make to sustainable profitability and shareholder value?',
    answer: `The investment in a professional LkSG compliance strategy from ADVISORI is a value-driving measure that creates both defensive and offensive business value. The return on investment manifests in avoiding significant compliance costs, unlocking new market opportunities, and strengthening long-term company valuation through sustainable business practices.

💰 Direct Financial Value Drivers:
• Avoidance of Fines: The LkSG provides for fines of up to 2% of global annual revenue – for a corporation with €5 billion in revenue, this means a maximum fine risk of €100 million.
• Protection Against Contract Losses: Exclusions from public contracts can mean revenue losses in the millions for large companies.
• Optimization of Procurement Costs: Transparent and sustainable supply chains enable better negotiating positions and long-term partnerships with quality-conscious suppliers.
• Reduction of Insurance Premiums: Demonstrable ESG compliance can lead to more favorable terms for Directors & Officers insurance and other corporate insurance.

📈 Strategic Value Enhancement and Market Advantages:
• ESG Premiums with Investors: Companies with demonstrable LkSG compliance achieve on average 5-15% higher valuations with ESG-focused investors.
• Access to Sustainable Financing: Green bonds and sustainable loans often offer 20-50 basis points more favorable terms.
• Market Expansion: Compliance with international standards opens access to markets with high ESG requirements (EU, North America).
• Talent Acquisition and Retention: Authentic sustainability strategies strengthen employer attractiveness and reduce recruiting and turnover costs by up to 20%.

🔄 ADVISORI's ROI Optimization:
• Efficient Implementation: Our proven methods reduce implementation time by 30-50% compared to internal solutions.
• Scalable Solutions: Modular approaches that grow with your company and adapt to changing requirements.`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'How does ADVISORI ensure that our LkSG compliance strategy keeps pace with dynamically evolving international ESG regulations and stakeholder expectations?',
    answer: `In a time of rapid regulatory developments – from the EU Supply Chain Directive to the Corporate Sustainability Reporting Directive (CSRD) to tightening US and Asian ESG requirements – an adaptive and future-proof LkSG strategy is vital for survival. ADVISORI develops compliance frameworks that not only meet current requirements but are also flexible enough to anticipate and integrate upcoming regulatory developments.

🔄 Proactive Regulatory Anticipation:
• Continuous Regulatory Monitoring: Our dedicated Regulatory Affairs Team continuously monitors international ESG developments and assesses their impacts on your specific industry and business activities.
• Future-Proof Compliance Design: Development of due diligence systems that can be flexibly expanded to integrate new requirements (e.g., EU Supply Chain Directive, Scope 3 emissions).
• Cross-Border Harmonization: Building unified standards that meet both German LkSG requirements and international best practices (UN Global Compact, OECD Guidelines).
• Technology Integration: Use of AI-powered monitoring tools for early detection of compliance risks and regulatory changes.

🌍 International Alignment Strategy:
• Multi-Jurisdictional Mapping: Systematic analysis and harmonization of various national and international ESG requirements for a unified global compliance strategy.
• Stakeholder Engagement Excellence: Building robust communication channels with investors, customers, NGOs, and regulators for early identification of changing expectations.
• Benchmark-Oriented Optimization: Continuous comparison with best-practice companies and integration of leading-practice approaches into your compliance strategy.
• Scenario Planning and Stress Testing: Regular assessment of your compliance strategy against various regulatory development scenarios.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How does ADVISORI transform the Supply Chain Due Diligence Act from a compliance burden to a strategic competitive advantage and enabler for sustainable business growth?',
    answer: `ADVISORI pursues a paradigmatic approach that transforms the LkSG from a defensive compliance measure to a proactive value creation and differentiation instrument. For progressive C-level executives, this means that excellent LkSG implementation not only minimizes risks but actively creates new business opportunities, promotes innovation, and positions the company as a leader in sustainable corporate governance.

🚀 From Compliance to Strategic Advantage:
• Supply Chain Innovation: Using due diligence processes to identify innovative, sustainable suppliers and technologies that enable cost savings and quality improvements.
• Market Differentiation: Building an authentic sustainability narrative that acts as a strong differentiating factor against competitors and enables premium positioning.
• Customer Co-Creation: Involving customers in sustainable value creation processes, creating deeper customer relationships and new business models.
• Ecosystem Leadership: Positioning as an industry leader in sustainable business practices, enabling partnerships with other market leaders and access to exclusive networks.

💡 Strategic Value Creation through ADVISORI:
• Intelligence-driven Supplier Selection: Development of data-driven selection criteria that ensure both compliance and performance excellence and create long-term competitive advantages.
• Circular Economy Integration: Consulting on integrating circular economy principles into your supply chain, increasing resource efficiency and unlocking new revenue streams.
• Digital Transformation Acceleration: Using LkSG implementation as a catalyst for digitizing procurement and supply chain processes.
• Stakeholder Capital Building: Systematic building of trust and credibility with all stakeholders, directly translating into improved access to capital, talent, and markets.`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQs batch 1 to ESG Supply Chain Due Diligence Act EN...')
  
  try {
    const result = await client
      .patch('esg-lieferkettengesetz-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log('Added FAQs batch 1:', faqsBatch1.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 1:', error)
    throw error
  }
}

export { faqsBatch1 }
