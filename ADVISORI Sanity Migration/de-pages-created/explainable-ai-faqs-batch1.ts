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
    console.log('Updating Explainable AI page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'explainable-ai' })
    
    if (!existingDoc) {
      throw new Error('Document "explainable-ai" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Why is Explainable AI more than just a technical requirement for the C-Suite, and how does ADVISORI position XAI as a strategic competitive advantage?",
        answer: "For C-level executives, Explainable AI represents a fundamental paradigm shift from pure technology adoption to trust-based, sustainable AI transformation. In an era of increasing regulation and rising stakeholder expectations, XAI is not just a compliance requirement but a strategic enabler for sustainable business innovation and risk minimization.\n\n🎯 Strategic Imperatives for Leadership:\n• Trust building and stakeholder acceptance: Transparent AI systems create trust among customers, investors, and regulatory authorities, which is essential for long-term AI adoption.\n• Risk minimization and compliance security: Explainable AI proactively reduces regulatory risks and creates audit readiness for EU AI Act and GDPR requirements.\n• Business value through transparency: Traceable AI decisions enable better business decisions and optimized processes through understandable insights.\n• Competitive differentiation: Companies with transparent AI systems position themselves as responsible innovators in the market.\n\n🛡️ The ADVISORI Approach for Strategic XAI Adoption:\n• Business-first perspective: We develop XAI strategies that primarily support business objectives and use transparency as a value creation lever.\n• Compliance-by-design: Integration of regulatory requirements into XAI architecture from the beginning to minimize future compliance costs.\n• Stakeholder-centric implementation: Tailored transparency levels for different target groups from end users to regulatory authorities.\n• ROI-oriented XAI roadmap: Development of implementation strategies that create measurable business value through transparency."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "How do we quantify the business value of Explainable AI, and what direct impact does ADVISORI's XAI implementation have on enterprise value and risk minimization?",
        answer: "Investment in Explainable AI from ADVISORI is a strategic value creation lever that generates both direct cost savings and long-term value increases. Business value manifests in reduced compliance costs, increased stakeholder trust, and improved business decisions through traceable AI insights.\n\n💰 Direct Impact on Enterprise Value and Performance:\n• Compliance cost savings: Proactive XAI implementation significantly reduces future audit costs and avoids costly regulatory violations.\n• Risk minimization and insurance benefits: Transparent AI systems reduce operational risks and can lead to more favorable insurance conditions.\n• Improved decision quality: Traceable AI insights enable more precise business decisions and optimized resource allocation.\n• Stakeholder trust and market positioning: Transparent AI practices sustainably strengthen trust among investors, customers, and partners.\n\n📈 Strategic Value Drivers and Market Advantages:\n• Regulatory future-proofing: XAI systems are better prepared for future regulatory changes and reduce adaptation costs.\n• Customer retention through transparency: Traceable AI decisions increase customer trust and loyalty, leading to higher customer lifetime values.\n• Talent acquisition and retention: Companies with ethical AI practices attract top talent and reduce turnover.\n• Investor appeal: Transparent AI governance is increasingly evaluated as an ESG criterion and can positively influence company valuations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "The EU AI Act and GDPR set new standards for AI transparency. How does ADVISORI ensure that our XAI strategy is not only compliant but also future-proof for upcoming regulations?",
        answer: "In a rapidly evolving regulatory landscape, proactive XAI compliance is not just a legal necessity but a strategic competitive advantage. ADVISORI pursues a forward-looking approach that not only meets current EU AI Act and GDPR requirements but also anticipates future regulatory developments and positions your company for a changing legal landscape.\n\n🔄 Adaptive Compliance Strategy as Core Principle:\n• Continuous regulatory monitoring: We actively track EU AI Act implementation development, GDPR updates, and international XAI standards to keep your systems consistently compliant.\n• Future-proof XAI architecture: Our explainability frameworks are based on flexible, modular architectures that can quickly adapt to new transparency requirements.\n• Proactive governance integration: Establishment of robust XAI governance structures that go beyond minimum requirements and serve as best practice standards.\n• Comprehensive documentation and audit trails: Systematic capture of all AI decision processes for complete transparency and regulatory readiness.\n\n🔍 ADVISORI's Regulatory Excellence for XAI:\n• Regulatory early detection: We analyze consultation papers and industry trends to give you a head start in XAI compliance preparation.\n• International standards integration: Consideration of global XAI standards and best practices for internationally operating companies.\n• Industry-specific XAI requirements: Deep understanding of sector-specific transparency requirements in regulated industries.\n• Stakeholder engagement: Building relationships with regulatory authorities and standardization organizations for early insights into XAI developments."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "How does ADVISORI transform Explainable AI from a compliance cost factor to a strategic innovation driver, and what new business opportunities does transparent AI open up?",
        answer: "ADVISORI positions Explainable AI not as a regulatory burden but as a fundamental innovation catalyst and business transformation enabler. Our approach transforms XAI investments into strategic growth engines that enable new business models, strengthen customer trust, and create sustainable competitive advantages while proactively meeting compliance requirements.\n\n🚀 From Compliance to Business Innovation:\n• New service models through transparency: XAI enables completely new business models, from explainable AI-as-a-Service offerings to transparency premium services.\n• Customer trust as differentiation factor: Traceable AI decisions create unique value propositions and enable premium positioning in the market.\n• Data monetization through insights: Transparent AI systems generate valuable, traceable insights that can be marketed as standalone products.\n• Partnership ecosystems: XAI competence enables strategic alliances with other companies that need transparency standards.\n\n💡 ADVISORI's Innovation Framework for XAI:\n• Business model innovation through transparency: Development of new value creation models that use XAI as a core component and unlock market opportunities.\n• Customer experience enhancement: Integration of explainability into customer interfaces for improved user experience and higher satisfaction.\n• B2B opportunities: Positioning as a trusted AI partner for other companies that have transparency requirements.\n• Continuous innovation pipelines: Establishment of processes for continuous identification and development of new XAI-based business opportunities and market advantages."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
