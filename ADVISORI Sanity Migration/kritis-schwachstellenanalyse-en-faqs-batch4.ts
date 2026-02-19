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

// FAQs 13-16 for KRITIS Vulnerability Analysis & Risk Assessment
const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'How does ADVISORI support the quantification of cyber risks for insurance contracts and how can this optimize our insurance costs?',
    answer: `The precise quantification of cyber risks is becoming increasingly decisive for negotiating favorable cyber insurance terms. ADVISORI supports you in documenting and communicating your risk profiles so that insurers understand your actual risk situation and can offer correspondingly fair premiums.

💰 Insurance Optimization through Precise Risk Quantification:
• Actuarial-Grade Risk Assessment: Development of risk assessments that meet the standards of insurance actuaries and provide detailed probability models for various damage scenarios.
• Loss Expectancy Modeling: Precise calculation of Single Loss Expectancy (SLE) and Annual Loss Expectancy (ALE) for various threat scenarios based on your specific infrastructure.
• Control Effectiveness Quantification: Measurable assessment of the effectiveness of implemented security controls and their impacts on damage probability.
• Residual Risk Documentation: Clear documentation of remaining risks after implementation of protective measures for precise insurance coverage.

📋 Insurance-Ready Documentation and Negotiation Support:
• Insurance Application Support: Support in answering detailed insurance questionnaires with precise, traceable risk data.
• Claims Prevention Evidence: Documentation of proactive measures for damage prevention that demonstrate the reduced risk of claims to insurers.
• Incident Response Capability Assessment: Assessment and documentation of your capabilities for rapid incident response that can reduce damage amounts.
• Business Continuity Quantification: Quantification of your business continuity capabilities and their impacts on potential business interruption damages.`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'What role does vulnerability analysis play in M&A transactions in critical infrastructures and how does ADVISORI support due diligence processes?',
    answer: `In M&A transactions in critical infrastructures, cyber risks are often decisive value factors that can significantly influence deal value. ADVISORI supports both buyers and sellers in transparently assessing cyber risks and integrating them into transaction decisions.

🔍 M&A-Focused Cyber Due Diligence:
• Asset Valuation Impact Analysis: Assessment of how identified vulnerabilities affect enterprise value and what investments are required for remediation.
• Integration Risk Assessment: Analysis of cyber risks in integrating IT systems and business processes after an acquisition.
• Regulatory Compliance Transfer: Assessment of the transferability of compliance status and regulatory approvals in ownership changes.
• Hidden Liability Identification: Identification of potential hidden cyber liabilities that could affect transaction valuation.

💼 Strategic Transaction Support:
• Deal Structure Optimization: Consulting on optimal structuring of transactions considering cyber risks and compliance requirements.
• Warranty and Indemnity Support: Support in formulating appropriate cybersecurity warranties and indemnities in purchase agreements.
• Post-Merger Integration Planning: Development of integration plans that consider cybersecurity from the start and minimize risks.
• Synergy Realization Security: Assessment of how cybersecurity improvements can contribute to realizing transaction synergies.`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How does ADVISORI address the special challenges of vulnerability analysis in cloud-hybrid environments of critical infrastructures?',
    answer: `The migration of critical infrastructures to cloud-hybrid environments creates new complexities in vulnerability management. ADVISORI has specialized expertise in assessing multi-cloud and hybrid architectures considering the special requirements of critical infrastructures.

☁️ Cloud-Hybrid Security Architecture Assessment:
• Multi-Cloud Security Posture Assessment: Comprehensive assessment of security posture across different cloud providers with focus on consistent security standards.
• Shared Responsibility Model Analysis: Clear delineation and assessment of security responsibilities between cloud providers and your organization.
• Data Sovereignty Risk Assessment: Assessment of risks regarding data sovereignty and regulatory compliance in different cloud jurisdictions.
• Cloud-Native Security Integration: Analysis of the integration of cloud-native security tools with existing on-premise security architectures.

🔗 Hybrid Connectivity and Integration Security:
• Network Segmentation Effectiveness: Assessment of the effectiveness of network segmentation between cloud and on-premise environments.
• Identity and Access Management Continuity: Analysis of seamless and secure integration of IAM systems across hybrid environments.
• Data Flow Security Analysis: Detailed assessment of the security of data flows between different environments and their encryption.
• Disaster Recovery Cloud Integration: Assessment of the integration of cloud-based disaster recovery solutions with critical on-premise systems.`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'What innovative technologies and methods does ADVISORI use to identify even hard-to-detect and latent vulnerabilities in complex infrastructures?',
    answer: `The identification of latent and hard-to-detect vulnerabilities requires advanced technologies and innovative approaches. ADVISORI combines cutting-edge tools with proven methods to uncover even hidden risks in complex infrastructures.

🤖 Advanced Technology Integration:
• AI-Enhanced Vulnerability Discovery: Use of machine learning algorithms to identify anomalous behavior patterns and potential zero-day vulnerabilities.
• Behavioral Analysis Systems: Implementation of User and Entity Behavior Analytics (UEBA) to detect subtle signs of compromise.
• Graph-Based Attack Path Analysis: Use of graph algorithms to visualize complex attack paths and identify non-obvious vulnerability combinations.
• Quantum Resilience Assessment: Proactive assessment of resistance against future quantum computing threats.

🔬 Innovative Assessment Methodologies:
• Purple Team Continuous Assessment: Integration of Red Team attack simulations with Blue Team defense analytics for continuous vulnerability discovery.
• Digital Twin Security Modeling: Use of digital twins of your infrastructure for safe vulnerability testing without production impact.
• Chaos Engineering Security: Application of chaos engineering principles to identify security weaknesses under stress conditions.
• Supply Chain Deep Dive Analysis: In-depth analysis of software and hardware supply chains down to component and code level.`
  }
]

export async function addFaqsBatch4() {
  const documentId = 'kritis-schwachstellenanalyse-risikobewertung-en'
  
  console.log('Adding FAQs batch 4 (13-16) to KRITIS Vulnerability Analysis & Risk Assessment EN...')
  
  try {
    const result = await client
      .patch(documentId)
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log(`✅ Added ${faqsBatch4.length} FAQs to ${documentId}`)
    return result
  } catch (error) {
    console.error('Error adding FAQs:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch4()
