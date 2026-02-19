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
    console.log('Updating Explainable AI page with Industry Applications FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'explainable-ai' })
    
    if (!existingDoc) {
      throw new Error('Document "explainable-ai" not found')
    }
    
    // Create new Industry Applications FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "How does ADVISORI implement explainable AI solutions for highly regulated industries like finance, healthcare, and automotive, where transparency is critical for safety and compliance?",
        answer: "Highly regulated industries require specialized explainable AI approaches that meet stringent safety, compliance, and transparency requirements. ADVISORI develops industry-specific XAI solutions that address unique regulatory frameworks while maintaining the highest standards of accuracy and reliability for mission-critical applications.\n\n🏥 Healthcare and Life Sciences XAI:\n• Clinical decision support transparency: Implementation of explainable AI systems for medical diagnosis and treatment recommendations that provide clear reasoning for healthcare professionals.\n• Regulatory compliance for medical devices: Development of XAI solutions that meet FDA and EMA requirements for AI-based medical devices and diagnostic tools.\n• Patient safety and liability protection: Creation of audit trails and explanation systems that support clinical decision-making while protecting against malpractice risks.\n• Ethical AI for healthcare: Implementation of bias detection and fairness mechanisms to ensure equitable treatment recommendations across diverse patient populations.\n\n🏦 Financial Services and Banking XAI:\n• Credit scoring transparency: Development of explainable credit risk models that meet fair lending regulations and provide clear reasoning for loan decisions.\n• Algorithmic trading explanations: Implementation of transparent trading algorithms that can explain investment decisions to regulators and stakeholders.\n• Anti-money laundering compliance: Creation of explainable fraud detection systems that provide clear evidence for suspicious activity reporting.\n• Basel III and regulatory capital: Development of transparent risk models that meet regulatory requirements for internal risk assessment and capital allocation.\n\n🚗 Automotive and Autonomous Systems XAI:\n• Safety-critical decision explanation: Implementation of real-time explainable AI for autonomous vehicle decision-making that can be analyzed in case of incidents.\n• Regulatory approval support: Development of transparent AI systems that meet automotive safety standards and support regulatory approval processes.\n• Liability and insurance considerations: Creation of explanation systems that support legal and insurance frameworks for autonomous vehicle deployment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "What role does explainable AI play in building stakeholder trust and user acceptance, and how does ADVISORI design XAI interfaces for different user groups?",
        answer: "Building stakeholder trust through explainable AI requires sophisticated user experience design that delivers appropriate levels of transparency to different audiences. ADVISORI creates multi-layered explanation systems that provide relevant insights to technical teams, business users, regulators, and end customers while maintaining usability and comprehension.\n\n👥 Stakeholder-Specific Explanation Design:\n• Executive dashboards: High-level explanation interfaces that provide strategic insights about AI performance, risk indicators, and business impact without overwhelming technical detail.\n• Technical team interfaces: Detailed explanation tools for data scientists and engineers that provide deep insights into model behavior, feature importance, and performance metrics.\n• End-user explanations: Simple, intuitive explanations for customers and end-users that build confidence in AI-driven decisions without requiring technical expertise.\n• Regulatory reporting interfaces: Comprehensive explanation systems designed specifically for audit and regulatory review with complete documentation and traceability.\n\n🎨 User Experience Excellence in XAI:\n• Progressive disclosure: Interface design that allows users to drill down from high-level explanations to detailed technical insights based on their needs and expertise.\n• Visual explanation methods: Implementation of intuitive visualizations, charts, and interactive elements that make complex AI decisions understandable to non-technical users.\n• Contextual explanations: Dynamic explanation systems that adapt content and detail level based on user role, decision context, and risk level.\n• Multi-modal explanation delivery: Integration of text, visual, and interactive explanation methods to accommodate different learning styles and preferences.\n\n🤝 Trust Building Through Transparency:\n• Confidence indicators: Implementation of uncertainty quantification and confidence scores that help users understand the reliability of AI recommendations.\n• Bias and fairness transparency: Clear communication about AI system limitations, potential biases, and fairness considerations to build informed trust.\n• Performance transparency: Regular reporting on AI system accuracy, reliability, and improvement over time to demonstrate ongoing value and trustworthiness.\n• Human oversight integration: Clear indication of when and how human experts are involved in AI decision-making processes to maintain appropriate human control."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "How does ADVISORI address the challenge of explaining complex ensemble models and deep learning systems while maintaining accuracy and business value?",
        answer: "Explaining complex AI systems like ensemble models and deep neural networks requires sophisticated approaches that balance technical accuracy with business comprehension. ADVISORI employs advanced explanation techniques that preserve model performance while providing meaningful insights into complex decision-making processes.\n\n🧠 Deep Learning Explainability Strategies:\n• Attention mechanism visualization: Implementation of attention maps and saliency techniques that highlight which input features most influence neural network decisions.\n• Layer-wise relevance propagation: Advanced techniques that trace decision-making through neural network layers to identify critical pathways and feature interactions.\n• Gradient-based explanations: Implementation of gradient analysis methods that show how small input changes affect model outputs and decision boundaries.\n• Surrogate model approaches: Development of simpler, interpretable models that approximate complex neural network behavior for explanation purposes.\n\n🔗 Ensemble Model Transparency:\n• Individual model contribution analysis: Breakdown of how different models within an ensemble contribute to final decisions and identification of consensus patterns.\n• Voting and weighting transparency: Clear explanation of how ensemble voting mechanisms work and why certain models receive higher weights in specific scenarios.\n• Disagreement analysis: Identification and explanation of cases where ensemble models disagree, providing insights into decision uncertainty and edge cases.\n• Model diversity explanation: Communication of how different models in the ensemble capture different aspects of the problem and contribute unique perspectives.\n\n⚖️ Balancing Complexity and Comprehension:\n• Hierarchical explanation structures: Multi-level explanation systems that provide simple summaries for business users and detailed technical insights for specialists.\n• Feature interaction modeling: Advanced techniques that explain how combinations of features influence decisions in complex models.\n• Temporal explanation for sequential models: Specialized approaches for explaining time-series and sequential decision-making in recurrent neural networks and transformers.\n• Counterfactual explanation generation: Development of what-if scenarios that show how different inputs would change complex model outputs."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "What are the key performance indicators and metrics ADVISORI uses to measure the effectiveness of explainable AI implementations, and how do you ensure continuous improvement?",
        answer: "Measuring explainable AI effectiveness requires comprehensive metrics that evaluate both technical performance and business impact. ADVISORI implements sophisticated measurement frameworks that track explanation quality, user satisfaction, compliance effectiveness, and business value to ensure continuous improvement of XAI systems.\n\n📊 Technical Explanation Quality Metrics:\n• Faithfulness measurement: Quantitative assessment of how accurately explanations represent actual model behavior through perturbation testing and correlation analysis.\n• Stability evaluation: Measurement of explanation consistency across similar inputs and model updates to ensure reliable and predictable explanation behavior.\n• Completeness assessment: Evaluation of whether explanations capture all significant factors influencing model decisions without overwhelming users with irrelevant details.\n• Computational efficiency tracking: Monitoring of explanation generation time and resource usage to ensure scalable performance in production environments.\n\n👤 User Experience and Adoption Metrics:\n• User comprehension testing: Regular assessment of how well different user groups understand and can act upon provided explanations through surveys and usability studies.\n• Trust and confidence measurement: Tracking of user trust levels in AI systems before and after explanation implementation through behavioral analysis and feedback collection.\n• Decision-making improvement: Measurement of how explanations improve user decision quality, speed, and confidence in AI-assisted scenarios.\n• Adoption and engagement rates: Monitoring of how frequently users access and interact with explanation features to identify areas for improvement.\n\n🎯 Business Impact and Compliance Metrics:\n• Regulatory compliance effectiveness: Assessment of how well explanations meet regulatory requirements and support successful audits and regulatory reviews.\n• Risk reduction measurement: Quantification of how explainable AI reduces operational, legal, and reputational risks compared to black-box alternatives.\n• Business value realization: Tracking of concrete business benefits such as improved decision accuracy, reduced manual review time, and increased operational efficiency.\n• Continuous improvement tracking: Implementation of feedback loops that identify explanation weaknesses and drive iterative improvements to XAI systems."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Industry Applications FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Industry Applications FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
