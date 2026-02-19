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

// FAQs 9-12 (translated from German source)
const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'How can financial institutions integrate MiFID II product governance requirements into their existing development and approval processes?',
    answer: `Integrating MiFID II product governance requirements into existing product development and approval processes represents a complex transformation task. Successful integration requires systematic redesign of processes considering regulatory requirements without compromising efficiency and innovation capability.

🔄 Core Aspects of Process Integration:
• End-to-End Process Design: Development of a holistic product governance architecture covering the entire product lifecycle – from ideation through development, approval, and distribution to regular review and adjustment.
• Stage-Gate Model: Implementation of a structured approval process with clearly defined milestones and go/no-go decisions that integrate regulatory reviews without unnecessarily slowing the process flow.
• Responsibility Matrix: Establishment of a clear governance structure with defined roles, responsibilities, and decision-making authorities for all product governance-relevant aspects.
• Information Management: Building a systematic information architecture for documenting all relevant product information, decisions, and justifications throughout the product lifecycle.

🛠️ The ADVISORI Integration Approach:
• As-Is Analysis and Gap Assessment: Detailed analysis of your existing processes and identification of specific adjustment needs to meet MiFID II requirements.
• Customized Process Design: Development of an individualized product governance process that considers your specific organizational structures, product types, and existing workflows.
• Balanced Integration: Design of a balanced approach that ensures regulatory compliance without creating unnecessary bureaucracy or inhibiting innovation.
• Digitization Strategy: Conception and implementation of digital solutions for efficient process support and documentation throughout the product lifecycle.`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'What specific requirements does MiFID II place on documentation of suitability assessments and how does ADVISORI support efficient implementation?',
    answer: `Documentation of suitability assessments is a central component of MiFID II requirements and serves both to demonstrate regulatory compliance and to protect against potential liability risks. Systematic, efficient documentation requires well-thought-out processes and supporting technologies that meet regulatory requirements without burdening the advisory process.

📝 Documentation Requirements under MiFID II:
• Complete Customer Profile Capture: Comprehensive documentation of all relevant customer information on knowledge, experience, financial situation, risk tolerance, and investment objectives with traceable methodology for capture and assessment.
• Advisory Process Documentation: Complete recording of the entire advisory process, including discussed options, customer decisions, and specific justifications for product recommendations in relation to the individual customer profile.
• Suitability Assessment: Explicit documentation of the suitability assessment for each recommended transaction with clear presentation of why the recommended product corresponds to the customer's objectives, needs, and characteristics.
• Long-term Evidence Management: Ensuring long-term availability and integrity of all relevant documentation for regulatory audits and potential disputes with customers.

📋 The ADVISORI Documentation Approach:
• Documentation Framework: Development of a structured documentation framework that covers all regulatory requirements while being practical in day-to-day advisory work.
• Digital Documentation Solutions: Conception and implementation of digital tools for efficient, structured capture and management of all relevant information with minimal burden on advisors and customers.
• Integrated Advisory Journey: Design of a seamless advisory process that organically integrates regulatory required documentation and serves as support rather than obstacle for advisors.
• Audit-Ready Archives: Building a robust archiving solution that ensures long-term availability and integrity of all documentation and enables efficient retrieval for audits.`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'How can financial institutions ensure their product monitoring processes meet ongoing MiFID II requirements?',
    answer: `Ongoing product monitoring represents a critical, often underestimated aspect of MiFID II product governance. It requires systematic, proactive monitoring that goes far beyond a mere compliance exercise and should serve as a strategic instrument for product optimization and risk minimization.

🔍 Core Elements of a MiFID II-Compliant Product Monitoring Process:
• Systematic Monitoring Framework: Establishment of a structured framework for regular monitoring of all relevant product aspects – from target market conformity through product performance to distribution activities and customer feedback.
• Event and Time-Based Review: Implementation of a dual approach with both regular, schedule-based reviews and event-triggered reviews upon significant market changes or other relevant events.
• Distribution Feedback Integration: Building systematic processes for capturing and analyzing feedback from distribution about product suitability, customer acceptance, and potential problems.
• Escalation and Action Processes: Development of clear procedures for escalating identified problems and initiating appropriate measures – from product adjustments to distribution stops or product recalls.

📊 The ADVISORI Monitoring Approach:
• Risk-Oriented Monitoring: Conception of a risk-based monitoring approach that adapts monitoring intensity and frequency to product complexity, target group vulnerability, and potential risks.
• KPI-Supported System: Development of a meaningful KPI set for objective assessment of product suitability and performance with clear thresholds for further analyses or measures.
• Automated Monitoring Solutions: Implementation of digital tools for automating routine aspects of product monitoring, such as data capture, threshold monitoring, and standard reporting.
• Proactive Issue Management: Establishment of a structured process for early identification and proactive management of potential product or distribution problems before they become critical.`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'What challenges and best practices exist in implementing MiFID II requirements in robo-advice and digital advisory models?',
    answer: `Implementing MiFID II requirements in digital advisory models and robo-advisory solutions presents specific challenges but also offers unique opportunities. Digitizing investor protection processes requires a careful balance between regulatory compliance, technological innovation, and user-centered design.

💻 Specific Challenges with Digital Advisory Models:
• Algorithm Transparency: Necessity to make the decision logic and parameters of algorithms used transparent, traceable, and auditable to meet regulatory requirements.
• Digital Suitability Assessment: Challenge of ensuring a comprehensive, in-depth suitability assessment in a digital, often self-service format that is both regulatory robust and user-friendly.
• Complete Customer Profiling: Complexity of capturing all relevant customer information in a digital process without overwhelming users with excessively long questionnaires or overlooking important nuances.
• Hybrid Advisory Models: Necessity to create seamless transitions between automated and human advisory elements, especially for more complex advisory situations or vulnerable customer groups.

🚀 Best Practices and ADVISORI Approach:
• User-Centered Compliance Design: Development of digital investor protection processes that meet regulatory requirements while providing an optimal user experience through iterative testing and user feedback.
• Intelligent Questionnaire Technique: Implementation of adaptive questioning techniques that dynamically adjust follow-up questions to previous answers, thus increasing relevance and minimizing scope.
• Digital Advisory Documentation: Conception of automated yet comprehensive documentation solutions that meet all regulatory requirements while being understandable and traceable for customers.
• Escalation to Human Advice: Design of intelligent escalation mechanisms that automatically identify situations requiring human advisory support and enable seamless handover.`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQ batch 3 (FAQs 9-12) to MiFID Product Investor Protection EN...')
  
  try {
    const result = await client
      .patch('mifid-product-investor-protection-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log('Successfully added FAQ batch 3')
    return result
  } catch (error) {
    console.error('Error adding FAQ batch 3:', error)
    throw error
  }
}

export { faqsBatch3 }
