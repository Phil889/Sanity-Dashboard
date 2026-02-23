import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// MiFID Regular Controls & Audits EN - FAQs Batch 4 (FAQs 13-16)
const faqsBatch4 = [
  {
    _key: `faq_mifid_rca_en_${Date.now()}_13`,
    _type: 'object',
    question: 'What role do controls and audits play in the MiFID compliance strategy for cross-border financial services in the EU?',
    answer: `Cross-border financial services within the EU present particular challenges for MiFID compliance that require specific control and audit approaches. ADVISORI has developed a Cross-Border MiFID Control Framework that systematically addresses the complex requirements and ensures sustainable compliance in multinational contexts.

🌐 Particular Compliance Challenges in the Cross-border Context:
• Regulatory Divergences: Despite harmonized MiFID frameworks, significant national differences exist in interpretation, implementation, and enforcement – these divergences require differentiated control approaches that consider both EU-wide consistency and national particularities.
• Cultural and Linguistic Barriers: Different business cultures, communication styles, and language barriers increase the risk of misunderstandings and misinterpretations – particularly for customer-facing MiFID requirements such as information obligations and suitability assessments.
• Cross-jurisdictional Data Flow Issues: Complex legal requirements for cross-border data flows that are necessary for effective controls on one hand but present data protection challenges on the other.
• Supervisory Cooperation Mechanisms: Necessity to interact with multiple supervisory authorities that pursue different audit approaches, interpretations, and priorities – this regulatory complexity requires particularly robust control and evidence systems.

🛡️ Integrated Control Strategies for Cross-border MiFID Compliance:
• Multi-jurisdictional Control Architecture: Development of a multi-level control architecture with (1) harmonized basic controls for EU-wide uniform MiFID requirements, (2) jurisdiction-specific additional controls for national particularities, and (3) cross-border interface controls for activities spanning multiple jurisdictions.
• Centralized Oversight with Local Execution: Establishment of a governance model that combines central oversight and standards with local control execution and expertise.
• Harmonized Documentation Standards: Implementation of consistent documentation requirements that meet the expectations of multiple supervisory authorities.
• Cross-border Audit Coordination: Systematic coordination of audit activities across jurisdictions to ensure comprehensive coverage and avoid duplication.

📊 Practical Implementation:
• Regulatory Mapping: Comprehensive mapping of MiFID requirements across all relevant jurisdictions to identify commonalities and differences.
• Local Compliance Networks: Establishment of local compliance contacts who understand jurisdiction-specific requirements and practices.
• Unified Reporting Framework: Development of reporting structures that can be adapted to meet different supervisory expectations.`
  },
  {
    _key: `faq_mifid_rca_en_${Date.now()}_14`,
    _type: 'object',
    question: 'How does ADVISORI support financial institutions in preparing for and accompanying MiFID-related examinations by supervisory authorities?',
    answer: `Effective preparation for and professional accompaniment of regulatory MiFID examinations is a critical success factor for financial institutions. ADVISORI has developed a comprehensive Regulatory Examination Support Framework that accompanies companies through the entire examination cycle and enables optimal examination results.

🔍 Strategic Examination Preparation:
• Proactive Examination Readiness: Development of a continuous readiness program that begins well before concrete examination announcements and systematically builds examination readiness – unlike reactive ad-hoc preparations, this preventive approach ensures sustainable examination resilience.
• Regulatory Intelligence & Anticipation: Continuous analysis of regulatory developments, examination focus areas, and enforcement trends to anticipate upcoming examination topics early and address them specifically – this forward-looking approach provides decisive time advantage in preparation.
• Thematic Self-Assessment: Conducting focused self-assessments on current regulatory focus topics that systematically identify strengths and improvement potential – this structured self-evaluation enables targeted optimizations before external examinations.
• Benchmarking & Peer Comparison: Integration of external comparative perspectives through systematic benchmarking with peer institutions, known examination findings, and regulatory expectation horizons – this comparative approach prevents operationally blind self-assessments and sharpens the view for critical gaps.

📋 Operational Examination Management:
• Dedicated Examination War Room: Establishment of a specialized examination core team with clear responsibilities, escalation paths, and decision processes – this dedicated structure ensures efficient coordination and consistent communication during the examination.
• Strategic Communication Planning: Development of communication strategies for interaction with examiners that ensure professional, transparent, and consistent messaging.
• Document Management System: Implementation of systematic document organization and retrieval capabilities to respond efficiently to examiner requests.
• Real-time Issue Tracking: Establishment of mechanisms to track examination findings and coordinate responses in real-time.

🎯 Post-Examination Excellence:
• Finding Remediation Planning: Systematic development of action plans to address examination findings.
• Root Cause Analysis: Deep investigation of underlying causes to prevent recurrence of identified issues.
• Lessons Learned Integration: Capture and application of examination insights to strengthen future compliance.`
  },
  {
    _key: `faq_mifid_rca_en_${Date.now()}_15`,
    _type: 'object',
    question: 'How does ADVISORI support financial institutions in documenting and evidencing their MiFID compliance to supervisory authorities and internal stakeholders?',
    answer: `Robust documentation and traceable evidence are fundamental elements of an effective MiFID compliance strategy. ADVISORI has developed a comprehensive MiFID Documentation & Evidence Framework that not only meets regulatory requirements but also creates strategic added value for internal governance and decision-making processes.

📑 Strategic Documentation Architecture:
• Integrated Documentation Framework: Development of a holistic documentation architecture that integrates various MiFID compliance aspects (policies, processes, controls, training, monitoring) in a coherent framework – this networking ensures consistency and completeness across different documentation levels.
• Multi-level Documentation Hierarchy: Implementation of a multi-level documentation hierarchy with clear connections between strategic policies, operational process descriptions, and detailed work instructions – this structured hierarchy creates traceability from overarching principles to concrete action instructions.
• Stakeholder-specific Documentation Views: Design of target group-specific documentation views that specifically address the information needs of different stakeholders (supervisory authorities, board, departments, control functions) – this differentiated preparation maximizes relevance and utility of documentation for specific application contexts.
• Dynamic Documentation Management: Establishment of a dynamic documentation system that ensures continuous currency through systematic update processes, version control, and change management – unlike static documents that quickly become outdated and lose relevance.

🔍 Evidence-based Proof Strategies:
• Evidence-centric Control Design: Reconception of control processes with systematic integration of evidence production – unlike retrospective evidence collection, this approach generates robust proof as a natural byproduct of control activities.
• Automated Evidence Capture: Implementation of systems that automatically capture and organize compliance evidence throughout business processes.
• Chain of Custody Management: Establishment of clear audit trails that demonstrate the integrity and authenticity of compliance evidence.
• Evidence Quality Assurance: Regular validation of evidence completeness, accuracy, and relevance to regulatory requirements.

📊 Practical Implementation:
• Documentation Standards: Definition of clear standards for document format, content, and maintenance.
• Retention Management: Systematic approach to evidence retention that meets regulatory requirements while managing storage efficiently.
• Accessibility and Retrieval: Ensuring documentation can be quickly located and provided when needed for audits or examinations.`
  },
  {
    _key: `faq_mifid_rca_en_${Date.now()}_16`,
    _type: 'object',
    question: 'What strategies does ADVISORI recommend for coordination between different control functions (Compliance, Risk Management, Internal Audit) in the MiFID context?',
    answer: `Effective coordination between the various control functions is a critical success factor for sustainable MiFID compliance. ADVISORI has developed an integrated Integrated Assurance Framework that optimizes the interplay of control functions and creates a seamless assurance continuum.

🔄 Strategic Coordination Approaches:
• Three Lines Integration Model: Development of an integrated model that transforms the traditional three lines of defense (operational controls, independent risk and compliance functions, internal audit) into a coherent overall system – this integrated approach overcomes typical silos and friction losses at interfaces.
• Joint Assurance Planning: Implementation of a joint planning process for all control functions that coordinates and harmonizes MiFID-related control and audit activities – this coordinated planning prevents both control gaps and inefficient overlaps.
• Integrated Risk Assessment: Establishment of a cross-functional risk assessment process that creates a shared understanding of MiFID risk priorities and systematically aligns resource allocation of all control functions – unlike isolated risk considerations that can lead to divergent priorities.
• Harmonized Assurance Taxonomy: Development of a unified taxonomy for MiFID risks, controls, and audit findings that is consistently used by all control functions – this common language is fundamental for effective coordination and prevents misunderstandings and misinterpretations.

🛠️ Operational Coordination Mechanisms:
• Integrated Assurance Forums: Establishment of cross-functional governance forums that ensure regular exchange, coordination, and joint decision-making between control functions – these institutionalized exchange formats catalyze collaboration and prevent silo thinking.
• Shared Workpaper Repository: Implementation of common documentation systems that enable knowledge sharing and avoid duplication of effort.
• Coordinated Testing Schedules: Alignment of control testing and audit schedules to minimize business disruption and maximize coverage efficiency.
• Joint Issue Resolution: Collaborative approaches to addressing identified compliance issues that leverage expertise across functions.

📊 Benefits of Integrated Assurance:
• Comprehensive Coverage: Elimination of gaps and overlaps in control and audit activities.
• Resource Efficiency: Optimal allocation of limited assurance resources across functions.
• Consistent Messaging: Unified communication to business units and senior management.
• Enhanced Insights: Richer understanding of compliance risks through multiple perspectives.`
  }
]

async function addFaqsBatch4() {
  console.log('Adding FAQs Batch 4 (13-16) to MiFID Regular Controls & Audits EN...')
  
  try {
    const result = await client
      .patch('mifid-regular-controls-audits-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('✅ FAQs Batch 4 added successfully!')
    console.log(`Document ID: ${result._id}`)
    console.log(`Total FAQs now: ${result.faq?.length || 0}`)
  } catch (error) {
    console.error('Error adding FAQs batch 4:', error)
    throw error
  }
}

addFaqsBatch4()
