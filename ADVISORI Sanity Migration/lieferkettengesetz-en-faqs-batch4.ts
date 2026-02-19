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

// Lieferkettengesetz English FAQs - Batch 4 (FAQs 13-16)
// Source: lieferkettengesetz-source.json

const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'How does ADVISORI design the establishment of effective grievance procedures under LkSG and what role do these play for proactive stakeholder management?',
    answer: `Effective grievance procedures are the heart of authentic LkSG compliance and transform potential reputational risks into opportunities for continuous improvement and stakeholder engagement. ADVISORI develops innovative grievance systems that not only meet regulatory requirements but function as strategic early warning systems and trust-building measures that position your company as a responsible and responsive actor.

🔊 Comprehensive Grievance System Design:
• Multi-Channel Accessibility: Development of diverse access channels (online portals, hotlines, local trusted persons, mobile apps) that overcome cultural and linguistic barriers and provide all stakeholders with low-threshold access.
• Anonymous & Secure Reporting: Implementation of secure, anonymous reporting options with robust data protection and confidentiality guarantees that build trust and minimize fears of retaliation.
• Local Context Integration: Consideration of local conditions, cultural norms, and legal frameworks in various regions for culturally sensitive and effective grievance mechanisms.
• Stakeholder Co-Design: Involvement of local communities, unions, and NGOs in designing grievance procedures for maximum acceptance and effectiveness.

⚡ Rapid Response & Case Management:
• Immediate Acknowledgment Protocols: Systematic confirmation of incoming complaints within defined timeframes with clear communication about next steps and expectation management.
• Risk-Based Prioritization: Intelligent classification of complaints by severity and urgency for appropriate resource allocation and rapid response to critical cases.
• Cross-Functional Response Teams: Establishment of interdisciplinary teams with clear roles and escalation paths for effective handling of complex or sensitive complaints.
• Remedy & Resolution Framework: Development of structured processes for fair and effective resolution of complaints with appropriate remediation measures.

📊 Continuous Improvement:
• Trend Analysis: Systematic analysis of complaint patterns to identify systemic issues and improvement opportunities.
• Feedback Integration: Using insights from grievance processes to continuously improve compliance systems and supplier relationships.`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'What approach does ADVISORI pursue for LkSG compliance in complex international corporate structures and how are subsidiaries effectively integrated?',
    answer: `International corporate structures require a sophisticated LkSG compliance architecture that ensures both uniform standards and local flexibility. ADVISORI develops harmonized governance frameworks that navigate complex organizational structures, respect cultural differences, and simultaneously ensure consistent, risk-based compliance across all jurisdictions and subsidiaries.

🌍 Global Governance Architecture:
• Centralized Standards, Localized Implementation: Development of uniform LkSG standards and processes at group level with flexible implementation approaches that consider local conditions, risk profiles, and regulatory requirements.
• Matrix Responsibility Framework: Building clear responsibility structures between corporate headquarters and local units with defined escalation paths and decision-making authority for various compliance scenarios.
• Cross-Border Coordination Mechanisms: Establishment of systematic coordination structures between different jurisdictions and subsidiaries for coherent due diligence and consistent stakeholder communication.
• Subsidiary Risk Assessment: Development of differentiated risk assessment models for various subsidiaries based on business activity, geographic location, and local supply chain complexity.

🔗 Integration & Harmonization Excellence:
• Unified Technology Platforms: Implementation of integrated IT systems that connect all group entities and enable uniform data standards, reporting formats, and compliance monitoring.
• Standardized Training & Capability Building: Development of group-wide training and qualification programs with local adaptations for cultural sensitivity and language requirements.
• Harmonized Supplier Management: Building uniform supplier assessment and management processes that consider both local specifics and group-wide standards.
• Consolidated Reporting: Development of integrated reporting structures that aggregate local compliance data into group-wide reports while maintaining local detail.

⚖️ Legal and Regulatory Alignment:
• Multi-Jurisdictional Compliance: Ensuring compliance with both German LkSG requirements and local regulations in all operating countries.
• Legal Entity Coordination: Clear definition of responsibilities and liabilities across different legal entities within the group.`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How does ADVISORI develop sustainable business relationships with suppliers in high-risk regions that balance both compliance goals and economic interests?',
    answer: `Business activities in high-risk regions require a nuanced approach that pursues neither naive ignorance nor blanket withdrawal, but enables both compliance goals and sustainable business development through strategic engagement and constructive partnership. ADVISORI develops sophisticated risk mitigation strategies that harmonize responsible business practices with economic goals while creating positive impacts in critical regions.

⚖️ Balanced Risk-Opportunity Assessment:
• Nuanced Risk Mapping: Development of granular risk assessments that go beyond blanket country or regional assessments and differentiate specific suppliers, product categories, and local contexts.
• Impact vs. Influence Analysis: Systematic assessment of your potential positive influence versus the risks of engagement for informed decisions about continuation, intensification, or termination of business relationships.
• Economic Dependency Evaluation: Analysis of the economic importance of high-risk suppliers for your value chain and development of risk minimization versus diversification strategies.
• Local Stakeholder Consultation: Involvement of local expert assessments, civil society organizations, and community representatives for comprehensive context analysis.

🛡️ Enhanced Due Diligence & Monitoring:
• Intensified Supplier Engagement: Implementation of enhanced due diligence measures with more frequent audits, continuous monitoring, and direct technical support for compliance improvements.
• Third-Party Verification: Use of independent local auditors and international certification organizations for objective assessment and verification of improvement measures.
• Graduated Response Framework: Development of graduated measure catalogs from intensified support through temporary restrictions to controlled exit strategies.
• Capacity Building Focus: Prioritization of supplier development and capability building over immediate termination to create sustainable improvements.

🌱 Positive Impact Creation:
• Community Development Programs: Integration of community development initiatives that create positive impacts beyond direct supplier relationships.
• Local Partnership Building: Development of partnerships with local organizations to support sustainable development in high-risk regions.`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'How does ADVISORI position LkSG compliance as a differentiating factor in competition for ESG-conscious investors and business partners?',
    answer: `In an increasingly ESG-driven market environment, LkSG excellence becomes a critical differentiating factor that determines access to capital, premium partnerships, and sustainable growth opportunities. ADVISORI develops strategic positioning approaches that establish your LkSG compliance not only as risk minimization but as a proactive value driver and competitive advantage that attracts sophisticated investors and strategic partners.

💼 Investor Relations Excellence:
• ESG Storytelling Mastery: Development of coherent, data-driven narratives that embed your LkSG excellence in the context of a comprehensive ESG strategy and create clear value propositions for ESG-focused investors.
• Quantified Impact Demonstration: Building precise metrics and KPIs that document the measurable business impact of your LkSG measures and enable ROI-oriented investor arguments.
• Benchmark Positioning: Strategic positioning of your LkSG performance in the context of peer comparisons and industry best practices for competitive differentiation.
• Proactive Disclosure Strategy: Development of transparent, proactive communication strategies that build trust and address potential risks through authentic, forward-looking information.

🤝 Strategic Partnership Enablement:
• Partnership Credentialing: Using your LkSG excellence as a qualification criterion for partnerships with other ESG-leading companies and access to exclusive business networks.
• Supply Chain Leadership: Positioning as a preferred partner for companies looking to improve their own supply chain compliance and benefit from your expertise.
• Innovation Collaboration: Establishing your LkSG capabilities as a basis for innovative partnerships in sustainable technologies and business models.
• Market Access Facilitation: Using your compliance excellence for privileged access to markets with high ESG requirements.

📈 Value Creation Metrics:
• ESG Rating Optimization: Strategic management of ESG ratings through demonstrated LkSG excellence.
• Sustainable Finance Access: Leveraging compliance credentials for access to green bonds and sustainable financing instruments.`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQs batch 4 to ESG Supply Chain Due Diligence Act EN...')
  
  try {
    const result = await client
      .patch('esg-lieferkettengesetz-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('Added FAQs batch 4:', faqsBatch4.length, 'FAQs')
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 4:', error)
    throw error
  }
}

export { faqsBatch4 }
