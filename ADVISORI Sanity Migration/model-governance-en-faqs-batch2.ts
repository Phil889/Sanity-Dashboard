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

// FAQs 5-8 for Model Governance EN
const faqsBatch2 = [
  {
    _key: `faq_${Date.now()}_5`,
    _type: 'object',
    question: 'How do you implement a Model Governance Framework?',
    answer: `Implementing a Model Governance Framework requires a structured approach that considers both organizational and technical dimensions. A successful implementation typically proceeds in several phases:

🔍 Assessment and Preparation
• Inventory: Capture of all existing models and their current governance status
• Gap analysis: Identification of gaps between current state and regulatory/best practice requirements
• Stakeholder mapping: Identification of all relevant actors and their interests/concerns
• Risk appetite definition: Determination of organization-wide tolerance for model risks
• Business case: Development of a compelling justification for investments in Model Governance

📝 Strategy and Framework
• Governance principles: Definition of fundamental guidelines and principles for model management
• Roles and responsibilities: Clear assignment of tasks and decision-making authority
• Policies and standards: Development of binding specifications for model development and usage
• Process design: Definition of end-to-end processes for the entire model lifecycle
• Escalation paths: Establishment of mechanisms for problem handling and conflict resolution

🏗️ Operational Implementation
• Pilot project: Testing of the framework on selected models with high importance or visibility
• Rollout plan: Phased expansion to additional models and business areas
• Training program: Systematic education of all participants on their roles and duties
• Governance technology: Introduction of supporting tools for documentation, validation, and monitoring
• Change management: Accompanying organizational changes through targeted measures

📊 Control and Continuous Improvement
• Performance measurement: Development of KPIs for assessing governance effectiveness
• Regular reviews: Periodic review of framework effectiveness and compliance
• Feedback loops: Systematic collection and incorporation of stakeholder feedback
• Regulatory updates: Continuous adaptation to changing regulatory requirements
• Maturity assessment: Regular evaluation of governance maturity and improvement planning`
  },
  {
    _key: `faq_${Date.now()}_6`,
    _type: 'object',
    question: 'What documentation is required for Model Governance?',
    answer: `Comprehensive documentation is a central component of every Model Governance Framework. It serves not only regulatory compliance but also knowledge preservation, quality assurance, and facilitates collaboration between different stakeholders.

📑 Model-Specific Documentation
• Model specification: Detailed description of model purpose, assumptions, and limitations
• Data specification: Documentation of data sources used, data transformations, and data quality
• Method documentation: Description of mathematical/statistical methods and algorithms
• Development documentation: Recording of the development process including rejected alternatives
• Implementation documentation: Technical details on model implementation in code
• Test documentation: Description of tests performed and their results
• Performance documentation: Evidence of model performance based on relevant metrics

🔄 Lifecycle Documentation
• Change history: Complete record of all model changes and updates
• Validation reports: Results of independent model reviews and their implications
• Monitoring reports: Regular documentation of model performance in production
• Issue tracking: Tracking of identified problems and their resolution
• Usage documentation: Recording of business usage and use cases
• End-of-life documentation: Justification and process for model replacement or decommissioning
• Review cycles: Documentation of regular model reviews and recertifications

🧪 Validation and Risk Documentation
• Assumption validation: Review and confirmation of model assumptions and boundaries
• Conceptual validation: Assessment of theoretical foundation and methodological correctness
• Implementation validation: Verification of correct model implementation in code
• Performance validation: Statistical analysis of model performance against benchmarks
• Risk assessment: Identification and quantification of model-specific risks
• Limitation documentation: Clear description of model boundaries and constraints
• Remediation tracking: Documentation of identified issues and corrective actions

📋 Governance Documentation
• Policy documents: Overarching governance policies and standards
• Process documentation: Detailed description of governance processes and workflows
• Committee minutes: Records of governance committee meetings and decisions
• Audit reports: Results of internal and external audits
• Regulatory correspondence: Documentation of regulatory interactions and responses`
  },
  {
    _key: `faq_${Date.now()}_7`,
    _type: 'object',
    question: 'What tools support Model Governance?',
    answer: `Modern Model Governance is supported by specialized technology solutions that cover various aspects of the model lifecycle and facilitate compliance with governance requirements. These tools can be categorized into several groups:

📊 Model Inventory and Cataloging
• Central model registers: Capture and management of all models in the organization
• Metadata management: Structured capture of model-related metadata
• Version control: Tracking of different model versions and iterations
• Dependency tracking: Mapping of dependencies between models and components
• Tagging and classification: Systematic categorization by risk classes and application areas
• Status tracking: Monitoring of the current lifecycle status of each model
• Integrated approval processes: Workflow management for model approvals

🔍 Validation and Risk Assessment
• Automated validation tools: Standardized tests for different model types
• Bias detection: Detection of unwanted biases in models
• Sensitivity analysis: Tools for testing model robustness
• Explainability tools: Solutions for increasing model interpretability
• Risk scoring: Automated assessment of model risks
• Compliance checkers: Automatic verification against regulatory requirements
• Code review tools: Support for reviewing model implementations

📈 Monitoring and Performance Tracking
• Real-time monitoring: Real-time monitoring of models in production
• Drift detection: Detection of data and concept drift in models
• Performance dashboards: Visualization of model metrics and performance
• Alerting systems: Automatic warnings for deviations and anomalies
• A/B testing tools: Comparative analyses for different model versions
• Batch validation: Regular verification against historical datasets
• Outcome analysis: Tools for comparing predictions with actual results

🔧 MLOps and Deployment
• CI/CD pipelines: Automated build, test, and deployment processes
• Model serving platforms: Infrastructure for model deployment and scaling
• Feature stores: Centralized management of model features
• Experiment tracking: Documentation of model experiments and results
• Model registries: Versioned storage of trained models
• Container orchestration: Management of model containers in production
• Infrastructure as Code: Automated provisioning of model infrastructure`
  },
  {
    _key: `faq_${Date.now()}_8`,
    _type: 'object',
    question: 'How do you balance innovation and governance in model development?',
    answer: `The balance between innovation and governance is a central challenge for organizations developing analytical and AI/ML models. Too much governance can inhibit innovation, while too little control poses significant risks. An intelligent balancing of these apparent opposites is crucial for sustainable success.

⚖️ Core Principles for Balancing
• Risk-based approach: Graduation of governance intensity according to model risk and criticality
• Early integration: Incorporation of governance aspects already in early development phases
• Common language: Establishment of a unified understanding between Business, Data Science, and Risk
• Agile governance: Flexible, iterative processes instead of rigid gate structures
• Continuous learning: Systematic derivation of lessons learned from governance processes

🚀 Promoting Innovation within the Governance Framework
• Sandbox environments: Protected spaces for experiments with reduced governance requirements
• Fast-track processes: Accelerated approval procedures for prototypes and proof-of-concepts
• Innovation labs: Dedicated teams with greater degrees of freedom while limiting risk
• Template-based approaches: Predefined, tested building blocks for faster development
• Reuse: Utilization of already validated components to accelerate new developments

🛡️ Efficient Governance without Inhibiting Innovation
• Automation: Use of tools to reduce manual governance effort
• Self-validation: Enabling developers to independently perform basic validations
• Early feedback loops: Continuous rather than point-in-time validation
• Modularity: Decomposition of complex models into separately validatable components
• Risk budgeting: Allocation of "risk budgets" for innovative projects with higher uncertainty

🤝 Organizational Aspects
• Cross-functional teams: Integration of governance expertise into development teams
• Governance champions: Advocates for governance within innovation teams
• Executive sponsorship: Leadership support for balanced approach
• Cultural change: Fostering a culture that values both innovation and responsibility
• Incentive alignment: Reward structures that recognize both innovation and compliance

📊 Measuring Success
• Innovation metrics: Time-to-market, number of new models, experimentation velocity
• Governance metrics: Compliance rates, validation coverage, issue resolution time
• Balanced scorecards: Combined view of innovation and governance performance
• Feedback mechanisms: Regular assessment of balance effectiveness from all stakeholders`
  }
]

async function addFaqsBatch2() {
  console.log('Adding FAQs batch 2 to Model Governance EN...')
  
  try {
    const result = await client
      .patch('model-governance-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch2)
      .commit()
    
    console.log('FAQs batch 2 added successfully')
    console.log('Total FAQs now:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 2:', error)
    throw error
  }
}

addFaqsBatch2().catch(console.error)
