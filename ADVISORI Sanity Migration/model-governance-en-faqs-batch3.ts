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

// FAQs 9-12 for Model Governance EN
const faqsBatch3 = [
  {
    _key: `faq_${Date.now()}_9`,
    _type: 'object',
    question: 'What are best practices in Model Risk Management?',
    answer: `Model Risk Management (MRM) has established itself as an independent discipline to address the specific risks associated with the development and use of models. The following best practices have proven effective:

🏗️ Sound Framework
• Risk-based tiering structure: Classification of models according to their risk potential and business criticality
• Clear governance structure: Unambiguous assignment of responsibilities and decision-making authority
• Three Lines of Defense: Separation of model development, independent validation, and audit
• Comprehensive model risk policy: Documentation of binding principles and procedures
• Control mechanisms: Implementation of effective controls in all phases of the model lifecycle

📋 Thorough Model Documentation
• Complete specification: Detailed description of model purpose, methodology, and assumptions
• Transparent data foundation: Documentation of all data sources, transformations, and quality controls
• Traceable development steps: Justification of methodological decisions and rejected alternatives
• Implementation details: Documentation of technical implementation and system integration
• Usage guidelines: Clear description of permissible application scenarios and boundaries

🔍 Robust Validation
• Independent validation function: Organizational separation of development and validation
• Multi-dimensional validation: Review of conceptual correctness, implementation, and performance
• Rigorous testing procedures: Application of systematic testing approaches such as back-testing and stress testing
• Challenger models: Development of alternative models for benchmarking and validation
• Regular recertification: Periodic review of model suitability and performance

📊 Continuous Monitoring
• Real-time monitoring: Ongoing control of model performance and data quality
• Automated alerting mechanisms: Early warning of deviations and anomalies
• Drift detection: Identification of data and concept drift affecting model performance
• Performance tracking: Regular measurement and reporting of key model metrics
• Outcome analysis: Comparison of model predictions with actual business outcomes

🔄 Lifecycle Management
• Structured development process: Defined stages from conception to deployment
• Change management: Controlled introduction of model changes with appropriate review
• Version control: Systematic tracking of model versions and their characteristics
• Retirement planning: Proactive planning for model replacement or decommissioning
• Knowledge transfer: Documentation and handover processes for model transitions`
  },
  {
    _key: `faq_${Date.now()}_10`,
    _type: 'object',
    question: 'How do you ensure model transparency and explainability?',
    answer: `Model transparency and explainability are central requirements for modern analytical and AI/ML models, especially in regulated industries and critical decision processes. They enable trust, traceability, and responsible model usage.

🔍 Fundamentals of Model Transparency
• Method transparency: Disclosure of algorithms and mathematical procedures used
• Data transparency: Documentation of training data, their origin, quality, and limitations
• Process transparency: Traceable description of the development and validation process
• Usage transparency: Clarity about application scenarios and deployment boundaries of the model
• Decision transparency: Disclosure of how model outputs flow into business decisions

⚙️ Methods for Explainable AI (XAI)
• Intrinsically interpretable models: Preference for inherently explainable algorithms such as decision trees, linear models, or rule-based systems
• Post-hoc explainability methods: Application of techniques for subsequent explanation of complex models
• Local explanations: Explanation of individual predictions through methods like LIME or SHAP
• Global explanations: Overarching explanation of model behavior through Feature Importance, Partial Dependence Plots, or Global Surrogate Models
• Counterfactual explanations: Showing what changes would lead to a different model result

📊 Visualization Techniques for Model Understanding
• Feature importance plots: Visual representation of the influence of different features
• Partial dependence plots: Visualization of the relationship between features and model results
• SHAP value visualizations: Graphical representation of the contribution of individual features
• Decision tree visualizations: Graphical representation of decision trees
• Activation maps: Visualization of activations in neural networks (for image or text data)

📋 Documentation for Transparency
• Model cards: Standardized documentation of model characteristics and limitations
• Datasheets for datasets: Comprehensive documentation of training data
• Explanation templates: Standardized formats for explaining model decisions
• Audit trails: Complete logging of model development and deployment decisions
• User documentation: Clear guidance for model users on interpretation and limitations

🎯 Stakeholder-Specific Explanations
• Technical explanations: Detailed methodological explanations for data scientists
• Business explanations: Impact-focused explanations for business stakeholders
• Regulatory explanations: Compliance-oriented documentation for regulators
• End-user explanations: Simple, actionable explanations for model consumers
• Executive summaries: High-level overviews for senior management`
  },
  {
    _key: `faq_${Date.now()}_11`,
    _type: 'object',
    question: 'How do you validate and test AI/ML models?',
    answer: `Validation and testing of AI/ML models requires a comprehensive, multi-dimensional approach that goes beyond traditional testing procedures. A structured framework for model validation includes the following key elements:

🔍 Conceptual Validation
• Theoretical foundation: Review of the scientific and mathematical foundations of the model
• Assumption validation: Assessment of the appropriateness and validity of all model assumptions
• Method adequacy: Evaluation of the suitability of chosen algorithms for the use case
• Conceptual limitations: Identification of conceptual boundaries and constraints
• Alternative approaches: Comparison with other methodological approaches

📊 Input Validation and Data Quality
• Data quality metrics: Systematic assessment of completeness, correctness, timeliness, etc.
• Data coverage: Verification of the representativeness of training data for the target domain
• Distribution analysis: Examination of distribution properties and changes
• Bias detection: Identification of unwanted biases in training data
• Data lineage: Traceability of data origin and transformations

⚙️ Implementation Validation
• Code review: Systematic review of implementation for errors and vulnerabilities
• Unit tests: Isolated tests of individual model components and functions
• Integration tests: Verification of correct collaboration of all model components
• Reproducibility: Verification of consistency of results upon repeated execution
• Performance tests: Review of efficiency and scalability of implementation

📈 Output Validation and Performance Measurement
• Statistical metrics: Application of use-case-specific performance indicators (Accuracy, Precision, Recall, etc.)
• Cross-validation: Use of k-fold cross-validation for robust performance assessment
• Hold-out validation: Verification with separate test datasets
• Temporal validation: Testing on data from different time periods
• Segment analysis: Performance evaluation across different data segments

🧪 Specialized Testing Approaches
• Stress testing: Assessment of model behavior under extreme conditions
• Sensitivity analysis: Testing of model robustness to input variations
• Adversarial testing: Evaluation of model resilience to adversarial inputs
• Fairness testing: Assessment of model behavior across protected groups
• Edge case testing: Verification of model behavior at boundary conditions

🔄 Ongoing Validation
• Backtesting: Regular comparison of predictions with actual outcomes
• Champion-challenger testing: Comparison of production model with alternatives
• A/B testing: Controlled experiments in production environment
• Shadow mode testing: Parallel running of new models without affecting decisions
• Continuous monitoring: Real-time tracking of model performance metrics`
  },
  {
    _key: `faq_${Date.now()}_12`,
    _type: 'object',
    question: 'What regulatory requirements exist for Model Governance?',
    answer: `Regulatory requirements for Model Governance have increased significantly in recent years, especially for the use of AI/ML models in critical application areas. These requirements vary by industry and region, with some central regulatory approaches emerging:

🏦 Financial Sector-Specific Regulation
• SR 11-7 (USA): The Federal Reserve guideline on model risk management as a fundamental standard
  - Comprehensive definition of model risk and its components
  - Requirements for robustly documented development processes
  - Necessity of independent validation and effective governance
  - Regular monitoring and continuous improvement
• TRIM Guide (EU): Targeted Review of Internal Models by the European Central Bank
  - Harmonized assessment of internal models of banks
  - Detailed requirements for model validation and documentation
  - Focus on consistent and risk-appropriate model application
• MaRisk (Germany): Minimum Requirements for Risk Management with specific provisions for model validation
• PRA SS3/18 (UK): Supervisory Statement on model risk management in the banking sector
• OSFI E-23 (Canada): Guidelines on Enterprise-wide Model Risk Management

🇪🇺 EU AI Act and Related Regulations
• Risk-based approach: Categorization of AI systems into different risk classes
• Prohibited AI applications: Prohibition of AI systems with unacceptable risks
• Requirements for high-risk AI:
  - Robust risk management systems
  - Data quality controls and governance
  - Technical documentation and audit trails
  - Human oversight and transparency
  - Accuracy, robustness, and cybersecurity
• Transparency obligations: Information duties towards users of AI systems
• Conformity assessment: Procedures for verifying compliance with requirements

🔒 Data Protection Regulation Related to Models
• GDPR/DSGVO: Requirements for automated decision-making
  - Right to explanation of automated decisions
  - Right to human intervention
  - Data minimization and purpose limitation
  - Privacy by design requirements
• CCPA (California): Consumer rights regarding automated profiling
• Sector-specific data protection: HIPAA (healthcare), GLBA (financial services)

📋 Industry-Specific Standards
• Basel III/IV: Capital requirements with model-based calculations
• Solvency II: Insurance regulation with internal model requirements
• MDR/IVDR: Medical device regulations for AI in healthcare
• FDA guidance: Requirements for AI/ML in medical devices
• IOSCO principles: Securities regulation for algorithmic trading`
  }
]

async function addFaqsBatch3() {
  console.log('Adding FAQs batch 3 to Model Governance EN...')
  
  try {
    const result = await client
      .patch('model-governance-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log('FAQs batch 3 added successfully')
    console.log('Total FAQs now:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 3:', error)
    throw error
  }
}

addFaqsBatch3().catch(console.error)
