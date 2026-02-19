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

// FAQs 13-16 for Model Governance EN
const faqsBatch4 = [
  {
    _key: `faq_${Date.now()}_13`,
    _type: 'object',
    question: 'How do you monitor models in production?',
    answer: `Effective monitoring of models in production is crucial for long-term model quality and risk minimization. A comprehensive monitoring framework encompasses several dimensions:

📊 Statistical Performance Monitoring
• Model accuracy metrics: Continuous measurement of Accuracy, Precision, Recall, F1-Score, etc.
• Population stability: Monitoring of target variable distribution stability over time
• Discrimination capability: Control of model discriminatory power (e.g., AUC, Gini)
• Calibration: Verification of agreement between predicted and actual probabilities
• Confidence intervals: Calculation and monitoring of uncertainty measures for model predictions

🔍 Drift Monitoring
• Input drift: Detection of changes in input data distributions
• Concept drift: Identification of changes in the relationship between input and output variables
• Feature importance drift: Monitoring of shifts in relative influence of features
• Segment-specific drift: Analysis of drift phenomena in specific customer segments
• Threshold-based alerts: Automatic warnings when defined drift thresholds are exceeded

⚙️ Operational Monitoring
• Runtime performance: Monitoring of response times, throughput, and resource utilization
• Availability: Control of model availability and downtime
• Error detection: Identification and tracking of runtime errors and exceptions
• API usage patterns: Analysis of request frequency, patterns, and volume
• Infrastructure monitoring: Monitoring of underlying infrastructure and system resources

🔄 Business-Oriented Monitoring
• Business value: Measurement of actual business value and ROI of the model
• Usage analysis: Monitoring of how and by whom the model is used
• Outcome analysis: Comparison of model predictions with actual business results
• Decision tracking: Tracking of decisions made based on model outputs
• Customer impact: Assessment of model impact on customer experience and satisfaction

📈 Alerting and Response
• Tiered alerting: Different alert levels based on severity and urgency
• Escalation procedures: Clear paths for escalating critical issues
• Automated responses: Automatic actions for certain types of alerts
• On-call procedures: Defined responsibilities for responding to alerts
• Incident management: Structured process for handling model incidents

📋 Reporting and Documentation
• Regular performance reports: Scheduled reporting on model performance
• Trend analysis: Identification of performance trends over time
• Stakeholder dashboards: Customized views for different audiences
• Audit trails: Complete logging of monitoring activities and findings
• Regulatory reporting: Compliance with regulatory reporting requirements`
  },
  {
    _key: `faq_${Date.now()}_14`,
    _type: 'object',
    question: 'How do you handle Model Drift and model degradation?',
    answer: `Model Drift and model degradation are inevitable challenges in the lifecycle of AI/ML models. Effective handling of these phenomena requires a systematic approach to detection, analysis, and countermeasures:

🔍 Detection of Drift and Degradation
• Statistical drift detection: Use of distribution tests (KS test, PSI, JS divergence) to compare training and production data
• Performance monitoring: Continuous monitoring of model performance metrics (Accuracy, F1-Score, etc.)
• Concept drift detection: Detection of changes in the relationship between input and output
• Segment analysis: Identification of drift in specific data segments or user groups
• Early warning system: Implementation of thresholds and alerting mechanisms for early drift detection

📊 Classification and Analysis of Causes
• Data drift: Changes in the distribution of input data without change in underlying relationships
• Concept drift: Changes in the fundamental relationships between input and output variables
• Gradual vs. abrupt drift: Distinction between slow changes and sudden shifts
• Cyclical drift: Detection of seasonal or periodic patterns in model degradation
• Root cause analysis: Systematic investigation of possible reasons for observed drift
  - External factors: Market changes, regulatory adjustments, consumer behavior
  - Internal factors: Changes in business processes, data collection, or processing
  - Technical factors: Changes in IT infrastructure or data sources

⚙️ Strategies for Drift Management
• Adaptive models: Implementation of online learning or regular incremental training
• Ensemble methods: Combination of multiple models to increase robustness against drift
• Windowing techniques: Training with sliding time windows of recent data
• Weighting approaches: Higher weighting of recent data in model training
• Trigger-based retraining: Automatic retraining when drift thresholds are exceeded

🔄 Retraining and Model Updates
• Scheduled retraining: Regular model updates on defined schedules
• Event-driven retraining: Updates triggered by specific events or drift detection
• Incremental learning: Continuous model updates with new data
• Full retraining: Complete model rebuild when necessary
• A/B testing: Controlled rollout of updated models

📋 Governance of Model Updates
• Change management: Controlled process for model changes
• Validation requirements: Re-validation of updated models
• Documentation: Recording of all changes and their justification
• Rollback procedures: Ability to revert to previous model versions
• Stakeholder communication: Informing relevant parties of model changes`
  },
  {
    _key: `faq_${Date.now()}_15`,
    _type: 'object',
    question: 'How do you conduct Model Audits and Reviews?',
    answer: `Model audits and reviews are crucial mechanisms for quality assurance, risk minimization, and compliance assurance within the Model Governance framework. A systematic approach includes the following elements:

📋 Types of Model Reviews
• Initial validation: Thorough review of new models before production deployment
• Regular reviews: Periodic review at defined time intervals
• Trigger-based reviews: Unscheduled reviews upon significant events
  - Performance degradation: Review when defined performance thresholds are breached
  - Significant changes: Review after substantial model or data changes
  - External factors: Review after relevant market or regulatory changes
• Compliance audits: Specific review of compliance with regulatory requirements
• Thematic reviews: Focused review of specific aspects (e.g., fairness, security)

🔍 Key Components of a Model Audit
• Methodological assessment: Review of conceptual correctness and method suitability
• Implementation validation: Verification of correct technical implementation
• Data quality review: Assessment of data used and data preparation processes
• Performance evaluation: Analysis of model performance based on relevant metrics
• Governance review: Verification of compliance with internal policies and processes
• Documentation review: Assessment of completeness and quality of model documentation
• Risk assessment: Identification and evaluation of model-specific risks
• Compliance check: Verification of compliance with regulatory requirements

👥 Roles and Responsibilities
• Independent reviewers: Ensuring organizational separation between development and audit
• Subject matter experts: Involvement of domain experts for assessing technical appropriateness
• Technical specialists: Review of technical aspects and implementation details
• Model Risk Officers: Oversight of audit process and findings
• Internal Audit: Independent assurance of governance effectiveness
• External auditors: Third-party review for regulatory or assurance purposes

📊 Audit Process and Methodology
• Planning: Definition of audit scope, objectives, and timeline
• Information gathering: Collection of relevant documentation and data
• Testing: Execution of audit procedures and tests
• Analysis: Evaluation of findings against criteria and standards
• Reporting: Documentation of findings, conclusions, and recommendations
• Follow-up: Tracking of remediation actions and closure of findings

📝 Documentation and Reporting
• Audit reports: Comprehensive documentation of audit findings
• Finding classification: Categorization of issues by severity and risk
• Remediation tracking: Monitoring of corrective actions
• Management reporting: Summary reports for senior management
• Regulatory reporting: Documentation for regulatory examinations
• Lessons learned: Capture of insights for process improvement`
  },
  {
    _key: `faq_${Date.now()}_16`,
    _type: 'object',
    question: 'What KPIs should be monitored for Model Governance?',
    answer: `Effective Model Governance requires systematic monitoring of specific Key Performance Indicators (KPIs) that make the quality, risks, and value contribution of models measurable. A comprehensive KPI framework for Model Governance encompasses various dimensions:

📊 Model Quality and Performance KPIs
• Statistical performance metrics: Accuracy, Precision, Recall, F1-Score, AUC, RMSE, etc.
• Model stability: Population Stability Index (PSI), Characteristic Stability Index (CSI)
• Calibration: Brier Score, Expected Calibration Error (ECE)
• Discrimination capability: Gini coefficient, Kolmogorov-Smirnov statistic
• Robustness: Performance variance across different data segments and time periods
• Comparison metrics: Performance relative to benchmark or predecessor models
• Degradation rate: Speed of performance decline over time

🔍 Risk and Compliance KPIs
• Model risk score: Aggregated assessment of overall risk of a model
• Validation quality: Scope and depth of validations performed
• Compliance rate: Degree of compliance with relevant regulatory requirements
• Documentation quality: Completeness and timeliness of model documentation
• Override rate: Frequency of manual overrides of model decisions
• Incident rate: Number of model-related incidents and problems
• Time-to-resolution: Duration until resolution of identified model problems

⚖️ Fairness and Ethics KPIs
• Demographic parity: Equality of outcome distribution across different groups
• Equal opportunity: Equality of True Positive Rate across different groups
• Disparate impact: Ratio of positive outcomes between different groups
• Group fairness metrics: Statistical Parity, Equalized Odds, etc.
• Explainability score: Degree of interpretability and explainability of the model
• Bias metrics: Quantification of unwanted biases in model predictions
• Fairness monitoring: Tracking of fairness metrics over time

⚙️ Operational KPIs
• Model availability: Uptime and availability of models in production
• Response time: Latency of model predictions
• Throughput: Number of predictions processed per time unit
• Resource utilization: CPU, memory, and storage usage
• Error rate: Frequency of technical errors and exceptions
• Deployment frequency: Rate of model updates and deployments
• Rollback rate: Frequency of model rollbacks due to issues

💼 Business Value KPIs
• ROI: Return on investment for model development and operation
• Business impact: Measurable business outcomes attributed to models
• Decision quality: Improvement in decision quality through model usage
• Cost savings: Reduction in costs through model automation
• Revenue impact: Revenue contribution from model-driven decisions
• Customer satisfaction: Impact on customer experience metrics
• Time-to-value: Time from model development to business value realization

📈 Governance Process KPIs
• Validation cycle time: Duration of validation processes
• Approval turnaround: Time from submission to approval
• Documentation completeness: Percentage of models with complete documentation
• Training coverage: Percentage of staff trained on governance requirements
• Audit findings: Number and severity of audit findings
• Remediation rate: Speed of addressing identified issues`
  }
]

async function addFaqsBatch4() {
  console.log('Adding FAQs batch 4 to Model Governance EN...')
  
  try {
    const result = await client
      .patch('model-governance-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log('FAQs batch 4 added successfully')
    console.log('Total FAQs now:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 4:', error)
    throw error
  }
}

addFaqsBatch4().catch(console.error)
