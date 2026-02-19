import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'b0o7vqwz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 1-4 for Model Governance EN
const faqsBatch1 = [
  {
    _key: `faq_${Date.now()}_1`,
    _type: 'object',
    question: 'What is Model Governance and why is it important?',
    answer: `Model Governance encompasses the principles, processes, and controls for the responsible development, implementation, and monitoring of analytical and AI/ML models. In a data-driven business world, Model Governance is indispensable for the following reasons:

🔍 Definition and Scope
• Systematic approach to managing the entire model lifecycle: from conception through development to operation and decommissioning
• Establishment of a framework of policies, standards, and processes for consistent model management
• Integration of risk management, compliance, and ethical principles into all phases of model development and usage
• Clear responsibilities and accountabilities for all parties involved in model development and usage
• Central platform for documentation, validation, and continuous monitoring of all models

⚠️ Risk Aspects and Challenges
• Model risk: Danger of financial losses or wrong decisions due to unsuitable models
• Compliance risk: Non-compliance with regulatory requirements (e.g., GDPR, BDSG, MaRisk)
• Reputational risk: Loss of trust due to erroneous or discriminatory model decisions
• Transparency deficit: Lack of traceability of model decisions ("black box" problem)
• Scaling problems: Exponential increase in complexity with growing number of models

💼 Business Benefits
• Increased model quality and precision through standardized development and validation processes
• Accelerated time-to-market through efficient approval procedures and clear responsibilities
• Cost reduction through avoidance of redundancies and efficient resource utilization
• Improved risk management through systematic identification and mitigation of model risks
• Sustainable value creation through responsible and ethical use of analytical models

📋 Regulatory Requirements
• Increasing regulatory focus on model risk management across all industries
• Specific requirements for financial institutions (SR 11-7, TRIM, MaRisk)
• Data protection regulations with implications for model usage (GDPR, CCPA)
• Emerging AI regulations (EU AI Act) with specific governance requirements
• Industry-specific standards and best practices for model management`
  },
  {
    _key: `faq_${Date.now()}_2`,
    _type: 'object',
    question: 'What key components does a Model Governance Framework include?',
    answer: `An effective Model Governance Framework consists of several interconnected components that together provide a structured approach for managing, monitoring, and controlling models:

📜 Policies and Standards
• Model Risk Management Policy: Overarching principles and guidelines for handling model risks
• Model categorization: Systematic classification of models by risk, complexity, and business relevance
• Development standards: Binding methodological and technical specifications for model development
• Documentation standards: Uniform requirements for model description and documentation
• Ethics guidelines: Principles for fair, transparent, and responsible model usage

🔄 Processes and Workflows
• Model lifecycle management: End-to-end processes from conception to decommissioning
• Model Request and Approval: Structured request and approval process for new models
• Validation process: Independent review of methodological correctness and implementation
• Change Management: Controlled introduction of model changes and improvements
• Incidents and Issues Management: Systematic handling of model errors and problems

👥 Roles and Responsibilities
• Three Lines of Defense: Clear separation between model development, independent validation, and audit
• Model Owner: Business responsibility for model usage and business performance
• Model Developer: Technical responsibility for model development and implementation
• Model Validator: Independent review and assessment of model properties and risks
• Model Risk Officer: Oversight of the overall framework and reporting to management

🔍 Control and Monitoring Mechanisms
• Model risk inventory: Central register of all models with status monitoring
• Continuous Monitoring: Ongoing monitoring of model performance and quality
• Backtesting: Regular comparison of model predictions with actual outcomes
• Stress Testing: Assessment of model behavior under extreme conditions
• Audit Trail: Complete documentation of all model-related activities and decisions`
  },
  {
    _key: `faq_${Date.now()}_3`,
    _type: 'object',
    question: 'What roles and responsibilities are crucial in Model Governance?',
    answer: `An effective Model Governance system requires a clear definition and separation of roles and responsibilities. The Three Lines of Defense model provides a proven foundation for this:

🏢 Leadership and Management Level
• Chief Risk Officer (CRO): Overall responsibility for model risk management at the enterprise level
• Model Risk Committee: Decision-making body for strategic governance questions and risk appetite
• Chief Data Officer (CDO): Ensuring data quality and availability for model development
• Chief Analytics Officer (CAO): Strategic alignment of model development with corporate objectives
• Executive Sponsors: Support for Model Governance initiatives at the highest management level

🧪 First Line of Defense
• Model Owner: Business-side responsibility for the model, its usage, and results
  - Definition of model requirements and business objectives
  - Decision on model deployment based on validation results
  - Budget and resource responsibility for the model
  - Escalation and reporting of model problems
• Model Developer/Data Scientist: Technical development and implementation of the model
  - Method selection and algorithmic implementation
  - Data preparation and feature engineering
  - Documentation of technical model aspects
  - Execution of initial model tests and performance measurement
• Business User: Application of the model in operational business
  - Correct interpretation and application of model results
  - Feedback on practical model usefulness
  - Reporting of unusual or implausible model predictions

🔍 Second Line of Defense
• Model Validator: Independent review of model quality and suitability
  - Assessment of methodological correctness and statistical validity
  - Review of model implementation and code quality
  - Analysis of model assumptions and limitations
  - Recommendation for model approval or rejection
• Model Risk Manager: Oversight of the overall model risk framework
  - Monitoring of model risk across the organization
  - Development and maintenance of governance policies
  - Reporting to senior management and committees
  - Coordination of model risk activities

🛡️ Third Line of Defense
• Internal Audit: Independent assurance of governance effectiveness
  - Periodic review of Model Governance processes
  - Assessment of compliance with policies and regulations
  - Identification of control weaknesses and improvement areas
  - Reporting to Audit Committee and Board`
  },
  {
    _key: `faq_${Date.now()}_4`,
    _type: 'object',
    question: 'How does Model Governance relate to AI Ethics and regulatory compliance?',
    answer: `Model Governance, AI Ethics, and regulatory compliance are closely interconnected and together form a holistic framework for the responsible development and use of models.

⚖️ Relationship between Model Governance and AI Ethics
• Complementary approaches: Model Governance provides the operational framework, while AI Ethics supplies the normative principles
• Principles integration: Ethical principles such as fairness, transparency, and non-discrimination are operationalized in governance processes
• Chain of responsibility: Governance structures define who is responsible for compliance with ethical standards
• Bias management: The ethical postulate of fairness is implemented through governance controls for bias detection and mitigation
• Cultural alignment: Model Governance promotes a corporate culture that considers ethical aspects in model decisions

📋 Regulatory Requirements for Model Governance
• Industry-specific requirements: Different requirements depending on sector (financial services, healthcare, etc.)
• SR 11-7 (Fed): Fundamental framework for banks on model risk management
• GDPR/DSGVO: Requirements regarding automated decisions and right to explanation
• EU AI Act: Risk-based regulation of AI systems with specific governance requirements
• Sector-specific regulations: Basel III/IV for banks, MDR for medical devices, etc.

🔄 Integration of Ethics into Model Governance Processes
• Ethics assessment: Systematic evaluation of ethical implications in early phases of model development
• Fairness metrics: Integration of quantitative metrics for measuring model fairness
• Ethics-by-Design: Embedding ethical considerations into the development process
• Diverse teams: Promotion of diverse development teams to minimize unconscious biases
• Stakeholder involvement: Participation of potentially affected groups in model design

🛡️ Compliance Framework Integration
• Unified governance: Integration of model governance into enterprise-wide compliance framework
• Regulatory mapping: Clear assignment of regulatory requirements to governance controls
• Audit readiness: Continuous preparation for regulatory examinations and audits
• Documentation requirements: Comprehensive documentation meeting regulatory standards
• Reporting obligations: Timely and accurate reporting to regulators as required`
  }
]

async function addFaqsBatch1() {
  console.log('Adding FAQs batch 1 to Model Governance EN...')
  
  try {
    const result = await client
      .patch('model-governance-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log('FAQs batch 1 added successfully')
    console.log('Total FAQs now:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 1:', error)
    throw error
  }
}

addFaqsBatch1().catch(console.error)
