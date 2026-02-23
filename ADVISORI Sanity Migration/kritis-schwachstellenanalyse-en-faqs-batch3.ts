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

// FAQs 9-12 for KRITIS Vulnerability Analysis & Risk Assessment
const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'How does ADVISORI integrate vulnerability analysis into our existing governance and risk management frameworks and what board-level reporting is supported?',
    answer: `Effective vulnerability analysis must be seamlessly integrated into existing governance structures to create strategic value. ADVISORI understands the complexity of modern corporate governance and develops integration approaches that establish vulnerability management as an integral part of enterprise risk management.

🏛️ Governance Integration and Strategic Embedding:
• Board-Ready Risk Reporting: Development of executive summaries and board presentations that place vulnerability risks in the context of business risks and strategic objectives.
• Risk Appetite Alignment: Integration of vulnerability assessments into existing risk appetite frameworks and risk tolerance definitions.
• Three Lines of Defense Integration: Embedding vulnerability management processes into existing three lines of defense models with clear roles and responsibilities.
• Audit Committee Support: Provision of specialized reporting for audit committees with focus on compliance risks and regulatory impacts.

📊 Strategic Risk Intelligence and Decision Support:
• Enterprise Risk Dashboard Integration: Seamless integration of vulnerability metrics into existing ERM dashboards and risk heat maps.
• Scenario Planning Support: Support in developing risk scenarios for strategic planning and stress testing.
• Investment Committee Reporting: Preparation of vulnerability analysis results for investment decisions and budget allocation.
• Crisis Management Integration: Linking vulnerability management with existing crisis management and business continuity frameworks.`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'What expertise does ADVISORI bring in assessing vulnerabilities in highly specialized critical infrastructures such as power plants, water supply, or financial infrastructures?',
    answer: `Critical infrastructures are highly specialized environments with unique technical challenges and regulatory requirements. ADVISORI has deep, industry-specific expertise and understands the special security requirements of various critical sectors.

⚡ Sector-Specific Expertise and Method Sets:
• Energy Sector Specialization: Deep knowledge of SCADA systems, smart grid technologies, and IEC 61850 protocols in power plant and grid infrastructures.
• Water Supply Security: Expertise in water management systems, SCADA protocols for water utilities, and specific compliance requirements for utility companies.
• Financial Infrastructure Security: Specialized knowledge in payment systems, trading infrastructures, and financial market-specific compliance frameworks (DORA, PCI-DSS).
• Transport and Logistics Systems: Analysis of traffic control systems, logistics infrastructures, and connected vehicle technologies.

🔬 Advanced Technical Assessment Capabilities:
• Industrial Protocol Analysis: Deep-dive analysis of industrial communication protocols and their specific vulnerabilities and attack vectors.
• Legacy System Integration: Specialized assessment of legacy systems that are often deployed for decades in critical infrastructures.
• Safety-Security Convergence: Integration of functional safety requirements (ISO 26262, IEC 61508) with cybersecurity assessments.
• Regulatory Compliance Mapping: Detailed knowledge of sector-specific regulations and their impacts on vulnerability management strategies.`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'How does ADVISORI ensure that vulnerability analysis also considers global supply chain risks and geopolitical factors that threaten critical infrastructures?',
    answer: `Modern critical infrastructures are characterized by complex, global supply chains that create new risk dimensions. ADVISORI integrates geopolitical intelligence and supply chain risk assessment into comprehensive vulnerability analyses to create a complete picture of the threat landscape.

🌍 Geopolitical Risk Integration and Threat Intelligence:
• Nation-State Threat Modeling: Analysis of state-sponsored threat actors and their specific tactics against critical infrastructures in your region.
• Geopolitical Risk Assessment: Assessment of geopolitical tensions and their potential impacts on your infrastructure and supply chains.
• Sanctions Impact Analysis: Analysis of the impacts of international sanctions on your technology supply chains and vendor relationships.
• Economic Warfare Preparedness: Assessment of resilience against economic attacks and disruption of critical supply chains.

🔗 Supply Chain Security and Vendor Risk Management:
• Third-Party Risk Assessment: Comprehensive assessment of the security posture of all critical suppliers and service providers.
• Software Supply Chain Analysis: Specialized analysis of software supply chains, including open-source components and their vulnerabilities.
• Hardware Integrity Verification: Assessment of the integrity of critical hardware components and identification of potential backdoors or manipulations.
• Vendor Concentration Risk: Analysis of single-point-of-failure risks through dependencies on individual critical suppliers or regions.`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'What long-term partnership does ADVISORI offer after the initial vulnerability analysis and how is continuous improvement and adaptation to new threats ensured?',
    answer: `ADVISORI understands vulnerability management as a continuous strategic process, not a one-time exercise. We develop long-term partnerships that ensure your security posture is continuously adapted to evolving threats and business requirements.

🔄 Continuous Improvement and Adaptive Security:
• Continuous Monitoring Framework: Implementation of systems for continuous monitoring and automated detection of new vulnerabilities and threats.
• Threat Intelligence Integration: Regular updates on new threat vectors and their specific impacts on your infrastructure.
• Quarterly Risk Reviews: Regular strategic reviews to assess the development of your risk posture and adjust protective measures.
• Technology Evolution Tracking: Proactive assessment of new technologies and their security implications for your infrastructure.

🤝 Strategic Partnership and Capability Building:
• Security Maturity Roadmap: Development of long-term roadmaps for continuous improvement of your security maturity and capabilities.
• Internal Team Development: Training and mentoring of your internal security teams to strengthen independent vulnerability management capabilities.
• Crisis Response Partnership: 24/7 availability for critical security incidents and rapid response support.
• Strategic Advisory Services: Regular strategic consulting on emerging threats, new compliance requirements, and best practice evolution.`
  }
]

export async function addFaqsBatch3() {
  const documentId = 'kritis-schwachstellenanalyse-risikobewertung-en'
  
  console.log('Adding FAQs batch 3 (9-12) to KRITIS Vulnerability Analysis & Risk Assessment EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log(`✅ Added ${faqsBatch3.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch3()
