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

// FAQs 1-4 for KRITIS Vulnerability Analysis & Risk Assessment
const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'How does a systematic vulnerability analysis ensure that our critical infrastructure withstands evolving cyber threats and what strategic advantages does ADVISORI offer the C-Suite?',
    answer: `A professional vulnerability analysis from ADVISORI is far more than a technical compliance exercise for the C-Suite – it is a strategic instrument for securing business continuity and enterprise value. In critical infrastructures, even the smallest vulnerabilities can lead to catastrophic failures that result not only in regulatory penalties but also massive reputational damage and loss of trust. ADVISORI transforms vulnerability analysis from a reactive to a proactive strategic measure.

🎯 Strategic Imperatives for Executive Management:
• Protection of Enterprise Value: Systematic identification and prioritization of risks that could threaten business operations and market position.
• Regulatory Compliance: Fulfillment of KRITIS regulation and BSI standards to avoid fines and regulatory sanctions.
• Operational Excellence: Minimization of unplanned downtime through proactive vulnerability remediation and optimized security architectures.
• Stakeholder Trust: Demonstration to customers, partners, and regulatory authorities that security is managed systematically and professionally.

🔍 The ADVISORI Approach for C-Level Decisions:
• Holistic Risk Assessment: We analyze not only technical vulnerabilities but also organizational and procedural risks that could impact your business objectives.
• Quantified Risk Assessment: Provision of concrete metrics and financial impact analyses that enable informed investment decisions.
• Strategic Roadmap Development: Derivation of prioritized action recommendations that ensure both short-term compliance and long-term resilience.
• Executive Reporting: Preparation of results in understandable management dashboards with clear action recommendations for executive leadership.`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'What measurable ROI does a professional vulnerability analysis by ADVISORI deliver and how does this affect operating costs and risk position?',
    answer: `A professional vulnerability analysis from ADVISORI is one of the most cost-effective investments in cybersecurity and compliance. The return on investment manifests in both direct cost savings and the avoidance of potentially catastrophic losses. For the C-Suite, this means a measurable improvement in risk position and operational efficiency gains.

💰 Direct Financial Impacts and ROI Factors:
• Avoidance of Compliance Penalties: KRITIS violations can result in fines of up to 20 million euros. A systematic vulnerability analysis significantly minimizes this risk.
• Reduction of Incident Response Costs: Proactive vulnerability remediation is up to 100 times more cost-effective than managing a security incident after it occurs.
• Optimization of Security Investments: Targeted deployment of security budgets through prioritized measures instead of unfocused security technology procurement.
• Improvement of Cyber Insurance Terms: Demonstrable vulnerability analyses can lead to more favorable premiums and better coverage limits.

📈 Long-term Strategic Value Drivers:
• Increased Operational Stability: Systematic vulnerability remediation reduces unplanned downtime and improves service availability for customers.
• Strengthening of Market Position: Demonstrated security excellence can be used as a competitive advantage in tenders and customer acquisition.
• Foundation for Digital Transformation: Solid security foundations enable the secure introduction of new technologies and business models.
• Risk Transparency for Investors: Clear risk identification and assessment strengthens stakeholder confidence and can positively impact company valuations.`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'The threat landscape for critical infrastructures is evolving exponentially – from APTs to hybrid warfare scenarios. How does ADVISORI ensure that our risk assessment addresses these dynamic threats?',
    answer: `The modern threat landscape for critical infrastructures is characterized by highly developed, persistent threats (APTs), state-sponsored actors, and hybrid warfare tactics. ADVISORI understands that static vulnerability analyses are insufficient in this environment. We implement adaptive, intelligence-driven analysis methods that meet the dynamics and complexity of modern cyber threats.

🌐 Adaptive Threat Modeling for Critical Infrastructures:
• Advanced Threat Intelligence Integration: Continuous incorporation of current threat intelligence feeds and analysis of attack campaigns against comparable infrastructures.
• Scenario-Based Risk Modeling: Development of realistic attack scenarios based on current tactics, techniques, and procedures (TTPs) of relevant threat actors.
• Geopolitical Risk Integration: Consideration of geopolitical tensions and their impacts on the threat situation for your specific industry and region.
• Supply Chain Risk Analysis: Comprehensive assessment of third-party risks and dependencies in complex supply chains.

🛡️ Proactive Security Architecture from ADVISORI:
• Purple Team Assessments: Combination of Red Team attack simulations and Blue Team defense analyses for realistic threat testing.
• Zero Trust Architecture Assessment: Analysis of current security architecture against Zero Trust principles and identification of improvement potentials.
• OT/IT Convergence Security: Special focus on the unique risks of Operational Technology in critical infrastructures.
• Continuous Monitoring Integration: Building capability frameworks for continuous threat detection and adaptive security measures.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'How does ADVISORI transform vulnerability analysis from a compliance-driven cost factor to a strategic business enabler for growth and innovation?',
    answer: `ADVISORI revolutionizes the traditional understanding of vulnerability analyses by positioning them as a strategic business enabler that actively supports growth and innovation. For the C-Suite, this means that security investments not only minimize risks but also open new business opportunities and strengthen market position.

🚀 From Compliance to Strategic Competitive Advantage:
• Security as Market Differentiator: Demonstrable security excellence becomes a USP in customer acquisition and partnership negotiations, especially in security-critical industries.
• Accelerated Digital Transformation: Solid security foundations enable accelerated digitalization projects as risks become calculable and manageable.
• New Business Models: Demonstrated cyber resilience opens doors to new markets and customer groups that require high security standards.
• Operational Efficiency: Systematic vulnerability remediation not only reduces security risks but also optimizes operational processes and system performance.

💡 Strategic Value Creation through ADVISORI:
• Business Impact Analysis: Direct linking of security measures with business objectives and quantifiable impacts on KPIs and revenue streams.
• Innovation-Security Integration: Consulting on seamless integration of security aspects into innovation processes without slowing time-to-market.
• Ecosystem Security: Development of security strategies that protect not only internal systems but also the entire partner and customer ecosystem.
• C-Level Security Governance: Building governance structures that establish security as a strategic business function and integrate it into all business decisions.`
  }
]

export async function addFaqsBatch1() {
  const documentId = 'kritis-schwachstellenanalyse-risikobewertung-en'
  
  console.log('Adding FAQs batch 1 (1-4) to KRITIS Vulnerability Analysis & Risk Assessment EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log(`✅ Added ${faqsBatch1.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch1()
