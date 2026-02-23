import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

const timestamp = Date.now()

const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'How can regular KRITIS tests and audits be used as a strategic instrument for risk minimization and value creation for the C-Suite?',
    answer: `Regular KRITIS tests and audits are strategic investments that go far beyond mere compliance fulfillment and generate direct business value. For leadership, systematic test and audit programs provide a data-based foundation for risk-informed decisions and proactive value preservation of critical business assets.

🎯 Strategic Added Value for the C-Suite:
• Risk Transparency as Decision Basis: Regular tests provide quantifiable risk indicators that enable precise assessment of cyber risk exposure and its potential business impacts.
• Proactive Damage Prevention: Early detection of security gaps prevents costly incidents and protects against reputational damage that could affect market trust and company value.
• Investment Optimization: Test results enable data-driven prioritization of security investments and maximize ROI of IT security budgets.
• Stakeholder Trust: Demonstrable, regular validation of security measures strengthens the trust of investors, regulatory authorities, and business partners.

🛡️ ADVISORI's Value-Creating Test Approach:
• Business-Impact-Oriented Test Planning: We focus our tests on the most business-critical assets and processes to ensure maximum relevance for strategic decisions.
• Quantified Risk Assessment: Our test results are translated into business terminology, including potential financial impacts and probabilities.
• Strategic Roadmap Development: Based on test findings, we develop long-term security strategies that support business objectives and create competitive advantages.
• Continuous Intelligence: Establishing continuous test cycles that enable permanent monitoring of the risk situation and agile adaptation of security strategy.`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'What specific cost advantages and ROI measurements do systematic KRITIS tests and audits enable compared to ad-hoc security reviews?',
    answer: `Systematic KRITIS tests and audits generate measurable cost advantages and demonstrable ROI potential through proactive risk minimization and operational efficiency improvement. Unlike reactive ad-hoc reviews, scheduled test programs enable a cost-optimized, strategic approach to IT security with quantifiable business benefits.

💰 Quantifiable Cost Optimizations:
• Incident Cost Avoidance: Systematic tests can reduce the costs of security incidents by up to 85%, as critical vulnerabilities are detected before they lead to costly outages or data breaches.
• Optimized Remediation Costs: Scheduled identification of security gaps enables cost-efficient remediation within regular maintenance cycles instead of expensive emergency interventions.
• Reduced Compliance Risks: Continuous validation minimizes the risk of regulatory fines and shortens audit cycles through already available compliance documentation.
• Insurance Optimization: Demonstrable, systematic security tests can lead to significant reductions in cyber insurance premiums and enable better coverage conditions.

📊 ROI Dimensions and Measurability:
• Availability Gain: Every day of downtime avoided through proactive tests can represent millions in value depending on the industry – systematic tests demonstrably minimize this risk.
• Efficiency Improvement: Automated test components reduce manual effort for security validation by up to 70% and create capacity for strategic initiatives.
• Competitive Advantage: Companies with demonstrably robust test programs win tenders more frequently and can enforce premium prices for secure services.
• Innovation Enablement: Confidence in security architecture through regular validation enables lower-risk digitalization and new business models.`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'How can ADVISORI support using KRITIS tests and audits as enablers for continuous business improvement and innovation promotion?',
    answer: `KRITIS tests and audits are not only compliance instruments but strategic levers for continuous business improvement and innovation promotion. ADVISORI helps design test programs that simultaneously minimize security risks, increase operational efficiency, and open up new business opportunities.

🚀 Innovation through Systematic Security Validation:
• Data-Driven Business Intelligence: Test results provide valuable insights into system performance and user behavior that can be used for business optimization and product development.
• Technology Modernization: Security tests identify outdated systems and create business cases for strategic IT modernization and cloud migration.
• Process Optimization: Audit findings uncover efficiency potential in business processes and enable data-based improvement measures.
• Competitive Intelligence: Regular threat analyses provide market insights and identify new business risks and opportunities.

🔧 ADVISORI's Integrated Improvement Approach:
• Dual-Purpose Test Design: We design tests to simultaneously uncover security gaps and identify business improvement potential.
• Continuous Improvement Integration: Establishing systematic feedback loops that directly incorporate test findings into business process optimization and strategic planning.
• Innovation-Safe Testing: Development of test environments that enable safe testing of new technologies and business models without endangering production systems.
• Cross-functional Value Creation: Linking security tests with other business functions such as quality management, customer service, and product development for maximum synergy effect.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'What strategic risks arise from inadequate or superficial KRITIS test and audit programs and how does ADVISORI address these challenges?',
    answer: `Inadequate or superficial KRITIS test and audit programs create a dangerous false sense of security that leads to serious strategic risks for corporate management. These risks often only manifest during critical events and can then have existential impacts. ADVISORI develops thorough, methodically sound test programs that create genuine security transparency.

⚠️ Critical Risk Dimensions of Superficial Tests:
• False Security through Check-Box Compliance: Superficial tests may meet formal requirements but overlook critical vulnerabilities that can be exploited in real attacks.
• Regulatory Blind Spots: Incomplete audit programs can lead to compliance gaps that result in significant sanctions and business restrictions during regulatory audits.
• Incident Escalation Risk: Undetected security gaps can lead to uncontrolled escalations during incidents that go far beyond the original damage.
• Stakeholder Trust Loss: When superficial tests overlook critical problems that later become public, this can lead to lasting reputational damage and loss of trust.

🔍 ADVISORI's Methodical Depth Approach:
• Multi-Layer Security Validation: We conduct tests at all architecture levels, from physical infrastructure to application logic and organizational processes.
• Real-World Attack Simulation: Using current attack techniques and threat intelligence for realistic threat simulation instead of theoretical checklists.
• Business-Context Testing: Tests are conducted in the context of actual business processes to understand the real impacts of potential incidents.
• Continuous Evolution: Regular adaptation of test methods to new threats and technologies to ensure lasting relevance and effectiveness.`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQs batch 1 to KRITIS Tests & Audits English page...')
  
  try {
    const result = await client
      .patch('kritis-regelmaessige-tests-audits-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log(`✅ Added ${faqsBatch1.length} FAQs (batch 1)`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 1:', error)
    throw error
  }
}
