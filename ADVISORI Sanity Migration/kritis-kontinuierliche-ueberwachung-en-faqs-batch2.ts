import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const faqsBatch2 = [
  {
    _type: 'object',
    _key: generateKey('faq', 5),
    question: "How does ADVISORI integrate threat intelligence and competitive intelligence for strategic CRITIS security positioning?",
    answer: `Threat intelligence integration represents a critical success factor for strategic CRITIS security positioning. ADVISORI develops comprehensive intelligence frameworks that combine external threat data with internal security insights for proactive, intelligence-driven security management.

🔍 Multi-Source Threat Intelligence:
• Commercial Threat Feeds: Integration of leading commercial threat intelligence providers for comprehensive coverage of known threats and indicators of compromise.
• Open Source Intelligence (OSINT): Systematic collection and analysis of publicly available threat information from security communities, research publications, and dark web monitoring.
• Industry-Specific Intelligence: Specialized threat intelligence for CRITIS sectors including energy, water, healthcare, and transportation with sector-specific threat actor profiles.
• Government Intelligence Sharing: Participation in government-sponsored information sharing programs (ISACs) for early warning of nation-state threats.

📊 Intelligence Operationalization:
• Automated IOC Integration: Real-time integration of Indicators of Compromise (IOCs) into SIEM and security tools for immediate threat detection.
• Threat Actor Profiling: Development of detailed profiles of threat actors targeting CRITIS infrastructure with TTPs (Tactics, Techniques, Procedures) mapping.
• Attack Pattern Recognition: Machine learning-based identification of attack patterns and campaign attribution for proactive defense.
• Vulnerability Intelligence: Correlation of threat intelligence with vulnerability data for risk-based prioritization of patching and remediation.

🎯 Strategic Intelligence Applications:
• Executive Threat Briefings: Regular C-level briefings on relevant threats with business impact assessments and recommended actions.
• Board Risk Reporting: Integration of threat intelligence into board-level risk reports for informed governance decisions.
• Investment Prioritization: Intelligence-driven prioritization of security investments based on actual threat landscape.
• Competitive Positioning: Analysis of industry peer security incidents for competitive benchmarking and differentiation opportunities.`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 6),
    question: "What SOC-as-a-Service models and OpEx/CapEx strategies does ADVISORI develop for cost-optimized CRITIS monitoring?",
    answer: `SOC-as-a-Service models offer CRITIS operators flexible, cost-optimized alternatives to traditional in-house Security Operations Centers. ADVISORI develops customized service models that balance operational requirements with financial optimization and strategic flexibility.

💼 Flexible Service Models:
• Full Managed SOC: Complete outsourcing of security operations with 24/7 monitoring, incident response, and threat hunting by ADVISORI experts.
• Co-Managed SOC: Hybrid model combining internal security teams with ADVISORI expertise for specialized functions and overflow capacity.
• Virtual SOC: Cloud-based SOC services with on-demand scaling for organizations with variable security monitoring needs.
• Augmented SOC: Enhancement of existing internal SOC capabilities with specialized ADVISORI services for advanced threat detection and response.

📈 Financial Optimization Strategies:
• OpEx vs CapEx Analysis: Comprehensive analysis of total cost of ownership for different SOC models with clear ROI projections.
• Scalable Pricing Models: Flexible pricing structures that scale with organizational growth and changing security requirements.
• Technology Consolidation: Optimization of security tool portfolios to reduce licensing costs while maintaining comprehensive coverage.
• Shared Services Efficiency: Leveraging economies of scale through shared infrastructure and expertise across multiple clients.

🔧 Operational Excellence:
• SLA-Driven Performance: Clear service level agreements with measurable KPIs for response times, detection rates, and incident resolution.
• Continuous Improvement: Regular service reviews and optimization recommendations based on performance data and evolving threats.
• Knowledge Transfer: Structured knowledge transfer programs to build internal capabilities alongside managed services.
• Exit Strategy Planning: Clear transition plans for organizations that may want to bring services in-house in the future.`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 7),
    question: "How does ADVISORI prepare CRITIS monitoring systems for quantum-ready security and post-quantum cryptography?",
    answer: `Quantum computing poses significant future threats to current cryptographic systems protecting CRITIS infrastructure. ADVISORI develops forward-looking quantum-ready security strategies that prepare organizations for the post-quantum era while maintaining current operational security.

🔐 Quantum Threat Assessment:
• Cryptographic Inventory: Comprehensive inventory of all cryptographic systems and algorithms used in CRITIS infrastructure.
• Quantum Vulnerability Analysis: Assessment of which systems and data are most vulnerable to quantum attacks and require priority migration.
• Timeline Risk Assessment: Evaluation of "harvest now, decrypt later" risks for sensitive data that must remain confidential for extended periods.
• Regulatory Compliance Mapping: Analysis of emerging quantum security regulations and their implications for CRITIS operators.

🛡️ Post-Quantum Cryptography Migration:
• Algorithm Selection: Evaluation and selection of NIST-approved post-quantum cryptographic algorithms suitable for CRITIS applications.
• Hybrid Cryptography Implementation: Deployment of hybrid cryptographic systems combining classical and post-quantum algorithms for transitional security.
• Key Management Evolution: Development of quantum-safe key management systems and protocols for long-term security.
• Performance Optimization: Optimization of post-quantum implementations to minimize performance impacts on critical systems.

🔮 Future-Ready Architecture:
• Crypto-Agility Design: Implementation of cryptographic agility in monitoring systems to enable rapid algorithm updates as standards evolve.
• Quantum Key Distribution Readiness: Preparation for future quantum key distribution (QKD) integration where applicable.
• Continuous Monitoring Updates: Regular updates to monitoring systems to detect quantum-related threats and vulnerabilities.
• Research Partnership Integration: Collaboration with academic and industry research partners to stay ahead of quantum security developments.`
  },
  {
    _type: 'object',
    _key: generateKey('faq', 8),
    question: "What digital forensics methodologies does ADVISORI implement for CRITIS incident investigation and evidence preservation?",
    answer: `Digital forensics capabilities are essential for CRITIS incident investigation, regulatory compliance, and potential legal proceedings. ADVISORI implements comprehensive forensics methodologies that ensure evidence integrity while enabling rapid incident understanding and response.

🔬 Forensic Investigation Framework:
• Chain of Custody Protocols: Rigorous evidence handling procedures that maintain legal admissibility and regulatory compliance.
• Live Forensics Capabilities: Real-time forensic analysis of running systems without disrupting critical operations.
• Memory Forensics: Advanced analysis of volatile memory for detection of fileless malware and sophisticated attack techniques.
• Network Forensics: Comprehensive capture and analysis of network traffic for attack reconstruction and lateral movement detection.

📋 Evidence Preservation:
• Automated Evidence Collection: Systematic collection of forensic artifacts from endpoints, servers, and network devices.
• Forensic Image Creation: Bit-for-bit copies of storage media with cryptographic verification for evidence integrity.
• Cloud Forensics: Specialized procedures for evidence collection from cloud environments and SaaS applications.
• Timeline Reconstruction: Detailed reconstruction of attack timelines using multiple data sources and correlation techniques.

⚖️ Legal and Regulatory Compliance:
• Court-Ready Documentation: Forensic reports prepared to legal standards for potential litigation or regulatory proceedings.
• Expert Witness Support: Availability of certified forensic experts for testimony in legal proceedings.
• Regulatory Reporting: Forensic findings formatted for BSI and other regulatory authority reporting requirements.
• International Standards Compliance: Adherence to ISO 27037 and other international digital forensics standards.

🔄 Continuous Forensic Readiness:
• Proactive Evidence Collection: Continuous collection of forensic-relevant data for rapid incident investigation.
• Forensic Tool Integration: Integration of forensic capabilities into standard monitoring and incident response workflows.
• Staff Training: Regular training for security teams on forensic procedures and evidence handling.
• Forensic Playbook Development: Predefined forensic procedures for common incident types to accelerate investigation.`
  }
]

export async function addFaqsBatch2() {
  console.log('Adding CRITIS Continuous Monitoring Incident Management English FAQs batch 2...')
  
  const documentId = 'kritis-kontinuierliche-ueberwachung-incident-management-en'
  
  const result = await client
    .patch(documentId)
    .setIfMissing({ faq: [] })
    .append('faq', faqsBatch2)
    .commit()
  
  console.log(`✅ Added ${faqsBatch2.length} FAQs to ${documentId}`)
  return result
}

// Only run if executed directly
if (require.main === module) {
  addFaqsBatch2().catch(console.error)
}
