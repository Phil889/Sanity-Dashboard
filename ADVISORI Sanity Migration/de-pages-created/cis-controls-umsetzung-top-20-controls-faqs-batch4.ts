import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-umsetzung-top-20-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-umsetzung-top-20-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie gewährleistet ADVISORI die nachhaltige Organisationsintegration der CIS Controls Implementation über die technische Umsetzung hinaus und welche Cultural Transformation Prozesse sind erforderlich?",
        answer: "Die nachhaltige Wirksamkeit der CIS Controls hängt nicht nur von technischer Implementation ab, sondern erfordert eine fundamentale Cultural Transformation zur Security-First-Mentalität. ADVISORI entwickelt comprehensive Change Management Strategien, die cybersecurity von einer IT-Abteilungsverantwortung zu einer unternehmensweiten Cultural Value transformieren und sustainable security behaviors auf allen Organisationsebenen etablieren.\n\n👥 Executive Leadership Alignment:\n• C-Level Security Champions Program: Entwicklung von executive security advocates, die cybersecurity in strategic business discussions integrieren und organizational commitment demonstrieren.\n• Board-Level Cybersecurity Governance: Etablierung strukturierter Board-Reporting für cybersecurity metrics mit clear accountability und decision-making frameworks.\n• Risk-Aware Business Strategy Integration: Embedding von cybersecurity considerations in alle major business decisions und strategic planning processes.\n• Executive Incident Response Training: Hands-on crisis management exercises für C-Level leadership mit realistic cyber incident scenarios.\n\n🎯 Department-Wide Security Integration:\n• Security-by-Function Training: Customized security training für jeden Fachbereich mit job-specific threat scenarios und relevant security practices.\n• Cross-Functional Security Teams: Etablierung interdisciplinary security working groups für collaborative approach zu organizational cyber resilience.\n• Performance Metrics Integration: Incorporation von security KPIs in individual und team performance evaluations für measurable accountability.\n• Innovation-Security Balance: Training für balance zwischen innovation velocity und security requirements ohne business inhibition.\n\n📚 Continuous Learning und Development:\n• Gamified Security Education: Interactive security training platforms mit competitive elements für enhanced engagement und knowledge retention.\n• Real-World Simulation Exercises: Regular tabletop exercises und business-focused incident response simulations für practical preparedness.\n• Security Career Development Paths: Clear advancement opportunities für security-focused roles across different business functions.\n• External Threat Intelligence Sharing: Regular communication von current threat landscape developments für informed organizational awareness.\n\n🔄 Sustainable Behavior Reinforcement:\n• Positive Security Recognition Programs: Recognition und rewards für exemplary security behavior zur reinforcement of desired cultural norms.\n• Feedback Loop Mechanisms: Systematic collection und implementation von employee feedback für continuous security process improvement.\n• Security Innovation Encouragement: Platforms für employee-driven security improvement suggestions mit implementation rewards.\n• Regular Culture Assessment: Periodic evaluation von security culture maturity mit targeted improvement initiatives."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Herausforderungen entstehen bei der Multi-Cloud CIS Controls Implementation und wie adressiert ADVISORI die Komplexität heterogener Cloud-Umgebungen?",
        answer: "Multi-Cloud-Umgebungen exponentiieren die Komplexität der CIS Controls Implementation durch diverse security models, inconsistent APIs und fragmentierte management tools. ADVISORI hat eine cloud-agnostic implementation methodology entwickelt, die unified security governance across AWS, Azure, Google Cloud und private clouds ermöglicht, während gleichzeitig cloud-native security features optimal genutzt werden.\n\n☁️ Unified Multi-Cloud Security Architecture:\n• Cloud Security Posture Management (CSPM) Integration: Centralized monitoring und compliance checking across alle cloud platforms mit unified policy enforcement.\n• Cross-Cloud Identity und Access Management: Federated identity solutions mit consistent RBAC implementation across heterogeneous cloud environments.\n• Multi-Cloud Network Security: Software-defined security perimeters mit consistent micro-segmentation across cloud boundaries.\n• Unified Logging und Monitoring: Centralized SIEM integration für comprehensive security event correlation across multi-cloud infrastructures.\n\n🔧 Cloud-Native Security Optimization:\n• Platform-Specific Control Adaptation: Optimierung der CIS Controls für cloud-native services wie AWS Lambda, Azure Functions und Google Cloud Run.\n• Container und Kubernetes Security: Comprehensive security für containerized workloads mit service mesh integration und runtime protection.\n• Serverless Security Implementation: Specialized controls für function-as-a-service architectures mit event-driven security monitoring.\n• API Gateway Security: Unified API security management across cloud platforms mit consistent authentication und rate limiting.\n\n📊 Multi-Cloud Compliance Management:\n• Automated Compliance Reporting: Unified compliance dashboards mit cloud-specific regulatory requirement mapping.\n• Cross-Platform Policy Enforcement: Consistent security policy implementation trotz unterschiedlicher cloud provider capabilities.\n• Multi-Cloud Incident Response: Coordinated incident response procedures für cross-cloud security events mit unified forensic capabilities.\n• Vendor Risk Management: Comprehensive assessment und monitoring von cloud provider security postures und SLA compliance.\n\n🚀 Operational Excellence across Clouds:\n• Infrastructure as Code Security: Security scanning und compliance checking für Terraform, CloudFormation und ARM templates.\n• Multi-Cloud Cost Optimization: Security-aware cloud resource optimization mit cost-benefit analysis für security tool consolidation.\n• Cross-Cloud Disaster Recovery: Coordinated backup und recovery strategies mit security-first approaches zu business continuity.\n• DevOps Integration: Seamless security integration in multi-cloud CI/CD pipelines mit automated security testing und deployment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie strukturiert ADVISORI die CIS Controls Implementation für hochregulierte Industrien und welche besonderen Compliance-Anforderungen müssen berücksichtigt werden?",
        answer: "Hochregulierte Industrien wie Banking, Healthcare und Energy erfordern specialized approaches zur CIS Controls Implementation, die nicht nur cybersecurity excellence liefern, sondern auch strict regulatory compliance gewährleisten. ADVISORI hat industry-specific implementation frameworks entwickelt, die CIS Controls mit regulatorischen Anforderungen harmonisieren und competitive advantages durch compliance excellence schaffen.\n\n🏛️ Regulatory Framework Integration:\n• Multi-Regulatory Compliance Mapping: Comprehensive mapping der CIS Controls gegen DORA, BAIT, TISAX, SOX, HIPAA und weitere industry-specific regulations.\n• Audit-Ready Documentation: Automated generation von audit trails und compliance documentation mit regulatory requirement traceability.\n• Regulatory Change Management: Proactive monitoring von regulatory updates mit automated impact assessment auf existing CIS implementations.\n• Cross-Jurisdictional Compliance: Harmonisierung von CIS Controls für multi-national operations mit varying regional requirements.\n\n🔒 Enhanced Security für Critical Infrastructure:\n• Critical Asset Protection: Specialized controls für business-critical systems mit heightened security measures und monitoring.\n• Operational Technology (OT) Security: Extension der CIS Controls auf industrial control systems und SCADA environments.\n• Supply Chain Security Enhancement: Rigorous third-party security assessment mit continuous monitoring für vendor compliance.\n• Incident Response für Regulated Environments: Specialized incident response procedures mit regulatory notification requirements und forensic preservation.\n\n📋 Compliance Automation und Efficiency:\n• Automated Regulatory Reporting: Real-time compliance monitoring mit automated report generation für regulatory submissions.\n• Continuous Control Assessment: Ongoing evaluation der control effectiveness mit automated compliance scoring.\n• Exception Management für Regulated Environments: Structured processes für security exceptions mit compensating controls und regulatory approval workflows.\n• Risk Assessment Integration: Quantitative risk assessment mit regulatory risk appetite alignment und board-level reporting.\n\n🛡️ Industry-Specific Security Enhancements:\n• Financial Services Security: Enhanced controls für payment processing, trading systems und customer data protection.\n• Healthcare Security: HIPAA-aligned implementation mit patient data protection und medical device security.\n• Energy Sector Security: Critical infrastructure protection mit NERC CIP compliance und operational continuity focus.\n• Government Contractor Security: CMMC alignment mit controlled unclassified information protection und supply chain requirements."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Metriken und KPIs verwendet ADVISORI zur Bewertung des Erfolgs einer CIS Controls Implementation und wie wird continuous improvement gewährleistet?",
        answer: "Effective measurement ist fundamental für sustainable cybersecurity improvement und business value demonstration. ADVISORI hat ein comprehensive metrics framework entwickelt, das technical security improvements mit business outcomes verknüpft und data-driven continuous improvement durch quantitative performance assessment und strategic optimization ermöglicht.\n\n📊 Multi-Dimensional Success Metrics:\n• Security Posture Improvement: Quantitative assessment der overall security posture durch risk scoring, vulnerability reduction und control maturity measurement.\n• Business Impact Metrics: Financial quantification der security improvements durch cost avoidance, insurance premium reduction und operational efficiency gains.\n• Compliance Effectiveness: Automated compliance scoring mit regulatory requirement fulfillment tracking und audit readiness assessment.\n• Operational Resilience: Measurement von system availability, incident response times und business continuity capability improvements.\n\n🎯 Technical Performance Indicators:\n• Mean Time to Detection (MTTD): Continuous improvement der threat detection capabilities mit benchmark comparison und trend analysis.\n• Mean Time to Response (MTTR): Optimization der incident response effectiveness mit automated response capability measurement.\n• False Positive Reduction: Assessment der security tool effectiveness durch false positive rate monitoring und accuracy improvement.\n• Patch Management Efficiency: Tracking von vulnerability remediation times mit risk-based prioritization effectiveness.\n\n💰 Business Value Quantification:\n• Return on Security Investment (ROSI): Comprehensive ROI calculation mit quantified risk reduction und cost-benefit analysis.\n• Productivity Impact Assessment: Measurement der user productivity impact durch security controls mit optimization opportunities identification.\n• Customer Trust Metrics: Assessment der customer confidence improvement durch security certifications und transparency initiatives.\n• Market Competitiveness: Evaluation der competitive advantages gained durch superior cybersecurity posture.\n\n🔄 Continuous Improvement Framework:\n• Quarterly Security Reviews: Regular assessment der implementation progress mit strategic adjustment recommendations.\n• Threat Landscape Adaptation: Dynamic control adjustment basierend auf emerging threats und attack pattern evolution.\n• Benchmarking gegen Industry Best Practices: Regular comparison mit industry leaders für identification von improvement opportunities.\n• Innovation Integration: Systematic evaluation und integration von new security technologies und methodologies für sustained competitive advantage."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
