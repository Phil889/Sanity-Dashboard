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
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie adressiert ADVISORI die kritischen Herausforderungen bei der Integration von Legacy-Systemen in eine moderne CIS Controls Implementation und welche Migrationsstrategie minimiert Business Risk?",
        answer: "Legacy-Systeme repräsentieren oft das größte Hindernis für comprehensive cybersecurity, da sie nicht für moderne Bedrohungen konzipiert wurden und kritische Geschäftsprozesse unterstützen. ADVISORI hat eine specialized legacy integration methodology entwickelt, die schrittweise Modernisierung mit immediate security enhancement kombiniert und business continuity während der gesamten Transformation gewährleistet.\n\n🏗️ Risk-Aware Legacy System Assessment:\n• Comprehensive Legacy Inventory: Detaillierte Dokumentation aller legacy systems mit business criticality assessment und technical debt analysis.\n• Security Gap Analysis: Systematische Bewertung der security vulnerabilities mit quantified risk scoring und business impact assessment.\n• Modernization Roadmap Development: Strategic planning für phased legacy system modernization mit clear security milestones und business case development.\n• Compensating Controls Strategy: Implementation temporärer security measures für legacy systems während der Modernisierungsphase.\n\n🔧 Adaptive Security Implementation:\n• Network Segmentation für Legacy Protection: Micro-segmentation strategies, die legacy systems von modernen Infrastrukturen isolieren ohne business functionality zu beeinträchtigen.\n• Proxy-Based Security Enhancement: Implementation von security proxies und gateways für enhanced monitoring und protection von legacy communications.\n• Behavioral Monitoring Integration: Advanced analytics für legacy system behavior monitoring mit anomaly detection für unusual activities.\n• Emergency Response Planning: Specialized incident response procedures für legacy-specific security events mit rapid containment strategies.\n\n⚡ Business Continuity während Migration:\n• Parallel System Operation: Gradual migration mit parallel running systems für risk mitigation und business continuity assurance.\n• Data Migration Security: Secure data transfer processes mit encryption und integrity verification für sensitive information protection.\n• User Training und Change Management: Comprehensive training programs für employees transitioning from legacy zu modern systems.\n• Rollback Planning: Detailed contingency plans für unsuccessful migrations mit rapid system restoration capabilities.\n\n📊 Strategic Legacy Modernization:\n• Cloud-First Migration Strategy: Systematic migration zu cloud-native solutions mit enhanced security capabilities und scalability.\n• API-ization von Legacy Services: Development von secure APIs für legacy system integration mit modern security standards.\n• Data Modernization und Governance: Implementation von modern data governance practices während der legacy data migration.\n• Vendor Partnership Optimization: Strategic relationships mit technology vendors für legacy system support und modernization assistance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt Zero Trust Architecture bei ADVISORI's CIS Controls Implementation und wie wird diese transformative Sicherheitsphilosophie in bestehende IT-Landschaften integriert?",
        answer: "Zero Trust Architecture revolutioniert traditional perimeter-based security durch das Prinzip 'Never Trust, Always Verify' und transformiert die CIS Controls Implementation zu einer identity-centric, context-aware security strategy. ADVISORI integriert Zero Trust Principles systematisch in die CIS Controls, wodurch adaptive, resilient security architectures entstehen, die modern threat landscapes effektiv adressieren.\n\n🔐 Identity-Centric Security Transformation:\n• Comprehensive Identity Governance: Implementation von advanced identity and access management mit continuous authentication und risk-based access controls.\n• Privileged Access Management Enhancement: Zero Trust PAM implementation mit just-in-time access und session recording für administrative activities.\n• Device Trust Verification: Continuous device health assessment mit automated compliance checking und dynamic access adjustment.\n• User Behavior Analytics Integration: Machine learning-enhanced user behavior monitoring für anomaly detection und threat identification.\n\n🌐 Network Architecture Modernization:\n• Micro-Segmentation Implementation: Granular network segmentation mit software-defined perimeters für every workload und application.\n• Software-Defined Perimeter (SDP): Implementation von SDP technologies für secure, encrypted connections zwischen trusted entities.\n• Least Privilege Network Access: Dynamic network access control basierend auf user identity, device trust und application requirements.\n• East-West Traffic Inspection: Comprehensive monitoring und analysis von internal network traffic für lateral movement detection.\n\n📱 Application und Data Protection:\n• Application-Layer Security: Zero Trust principles applied to application access mit continuous authorization und session management.\n• Data Classification und Protection: Comprehensive data governance mit dynamic access controls basierend auf data sensitivity und user clearance.\n• API Security Enhancement: Zero Trust API management mit comprehensive authentication, authorization und monitoring.\n• Cloud-Native Zero Trust: Implementation von Zero Trust principles in cloud environments mit native security service integration.\n\n🔄 Continuous Verification und Adaptation:\n• Real-Time Risk Assessment: Continuous evaluation von user, device und environmental risk factors für dynamic access decisions.\n• Contextual Access Control: Intelligent access decisions basierend auf location, time, device status und behavioral patterns.\n• Automated Threat Response: Zero Trust-aligned incident response mit automated isolation und containment capabilities.\n• Compliance Integration: Zero Trust architecture designed für regulatory compliance mit audit trails und access documentation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Zukunftssicherheit einer CIS Controls Implementation bei rapidem Unternehmenswachstum und sich verändernden Geschäftsanforderungen?",
        answer: "Rapid business growth und evolving market conditions erfordern cybersecurity architectures, die nicht nur current requirements erfüllen, sondern auch seamless scaling und adaptation ermöglichen. ADVISORI designt CIS Controls Implementations als flexible, modular security platforms, die organic growth unterstützen und future business requirements without architectural overhaul adressieren können.\n\n📈 Scalable Security Architecture Design:\n• Modular Control Implementation: Design der CIS Controls als independent, interoperable modules, die individual scaling und enhancement ermöglichen.\n• Cloud-Native Scalability: Implementation von cloud-first security solutions mit elastic resource allocation und automatic scaling capabilities.\n• API-Driven Integration: Development von comprehensive APIs für seamless integration neuer security tools und business applications.\n• Infrastructure as Code: Automated deployment und management von security controls durch Infrastructure-as-Code für consistent, repeatable implementations.\n\n🔄 Adaptive Security Operations:\n• Dynamic Resource Allocation: Intelligent resource management mit automatic scaling basierend auf business growth und threat landscape changes.\n• Flexible Policy Management: Policy frameworks, die rapid business changes accommodieren ohne security compromise.\n• Automated Onboarding: Streamlined processes für new employee, device und application onboarding mit consistent security application.\n• Multi-Tenant Security: Security architectures, die multiple business units, subsidiaries oder customer segments efficiently unterstützen.\n\n🚀 Future-Ready Technology Integration:\n• Emerging Technology Readiness: Security frameworks designed für integration von AI, IoT, edge computing und other emerging technologies.\n• Vendor-Agnostic Design: Technology-independent security implementations, die vendor changes und technology evolution accommodieren.\n• Standards-Based Implementation: Adherence zu open standards für long-term compatibility und integration flexibility.\n• Continuous Innovation Integration: Systematic processes für evaluation und integration von new security technologies und methodologies.\n\n💡 Business Growth Enablement:\n• Acquisition Integration Framework: Standardized processes für security integration von acquired companies und business units.\n• Global Expansion Support: Security architectures designed für multi-national operations mit varying regulatory requirements.\n• Digital Transformation Acceleration: Security platforms, die aggressive digitalization initiatives ohne proportional security risk increase unterstützen.\n• Partner Ecosystem Integration: Secure frameworks für partner, vendor und customer integrations mit appropriate access controls und monitoring."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen strategischen Vorteile generiert eine professionelle CIS Controls Top 20 Implementation durch ADVISORI für die Unternehmenspositionierung und den Shareholder Value?",
        answer: "Eine strategisch implementierte CIS Controls Top 20 Initiative durch ADVISORI transcendiert traditional cybersecurity benefits und schafft sustainable competitive advantages, die direkt zu enhanced market positioning, increased shareholder value und long-term business resilience beitragen. Die Investment wird zu einem strategic asset, das multiple business objectives simultaneously erfüllt.\n\n🏆 Market Leadership und Competitive Advantage:\n• Trust-Based Market Differentiation: Nachgewiesene cybersecurity excellence schafft customer confidence und enables premium pricing für security-sensitive services.\n• Industry Leadership Positioning: Comprehensive CIS Controls implementation positioniert das Unternehmen als thought leader und preferred partner für security-conscious organizations.\n• Regulatory Leadership: Proactive compliance excellence schafft first-mover advantages bei new regulatory requirements und market opportunities.\n• Innovation Acceleration: Secure foundation enables aggressive digital transformation und innovation initiatives ohne proportional risk increase.\n\n💰 Financial Value Creation:\n• Insurance Premium Optimization: Documented security excellence führt zu substantially reduced cyber insurance costs und improved coverage terms.\n• Operational Efficiency Gains: Automated security processes und reduced manual interventions generieren sustainable cost savings und productivity improvements.\n• M&A Value Enhancement: Security-mature organizations command higher valuations und attract premium acquirers in competitive markets.\n• Capital Access Improvement: Strong cybersecurity posture improves credit ratings und reduces cost of capital für business expansion.\n\n🛡️ Organizational Resilience Building:\n• Crisis Management Excellence: Proven incident response capabilities ensure business continuity während cyber events und minimize business disruption.\n• Supply Chain Trust: Robust security controls enable secure partnerships und integration mit high-value customers und strategic partners.\n• Talent Attraction: Security-forward organizations attract top-tier talent und improve employee retention durch demonstrated commitment to excellence.\n• Board Confidence: Comprehensive cybersecurity governance provides board members mit confidence für strategic decision-making und risk taking.\n\n🚀 Strategic Business Enablement:\n• Digital Transformation Acceleration: Secure foundation enables rapid adoption von new technologies, cloud services und digital business models.\n• Global Expansion Support: Consistent security standards facilitate international expansion und multi-jurisdictional operations.\n• Partnership Ecosystem Development: Security excellence enables strategic partnerships mit industry leaders und access to exclusive business opportunities.\n• Future-Proofing Investment: Adaptive security architecture ensures continued relevance und effectiveness trotz evolving threat landscape und business requirements."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
