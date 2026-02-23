// Modellentwicklung EN - FAQ Batch 4 (FAQs 16-20)

const timestamp = Date.now()
const genKey = (prefix: string, index: number) => `${prefix}_${timestamp}_${index}`

export const faqsBatch4 = [
  {
    _key: genKey('faq_modellentwicklung_en', 16),
    _type: 'object',
    question: 'How do you integrate model risk management into the overall risk strategy?',
    answer: `Integrating model risk management into the overall risk strategy is critical for systematically addressing risks from complex models.

🎯 Strategic Anchoring:
• Definition of model risk
• Integration into Risk Appetite Framework
• Alignment with business strategy
• Consistent risk principles

🏗️ Governance Structures:
• Three Lines of Defense
• Model Risk Management Function
• Model Risk Committee

📋 Framework Components:
• Model Lifecycle Management
• Model Inventory and Classification
• Validation Framework
• Performance Monitoring
• Change Management

📊 Risk Quantification:
• Model risk capital
• Scenario analyses
• Sensitivity assessments
• Aggregation approaches

🔄 Continuous Improvement:
• Regular framework reviews
• Benchmarking against best practices
• Integration of new developments
• Training and awareness programs`
  },
  {
    _key: genKey('faq_modellentwicklung_en', 17),
    _type: 'object',
    question: 'How do you develop neural network models for risk management?',
    answer: `Neural networks offer particular advantages for risk management through their ability to capture complex non-linear relationships.

🧠 Architecture Design:
• Feedforward Networks for credit scoring
• CNNs for spatial patterns
• RNN/LSTM/GRU for time series
• Attention-based Models
• Autoencoders for anomaly detection

📊 Data Preparation:
• Normalization and Standardization
• Missing Value Treatment
• Feature Creation
• Data Augmentation
• Embedding Techniques

🔄 Training and Optimization:
• Loss Functions for risk questions
• Regularization Techniques
• Transfer Learning
• Ensemble Methods
• Cross-Validation strategies

🔬 Validation and Interpretability:
• Performance Metrics
• Sensitivity Analyses
• Attention Visualization
• Explainable AI (SHAP, LIME)
• Adversarial Testing

⚙️ Production Deployment:
• Model Serving Infrastructure
• Real-time Inference
• Monitoring and Alerting
• Version Control
• A/B Testing Frameworks`
  },
  {
    _key: genKey('faq_modellentwicklung_en', 18),
    _type: 'object',
    question: 'How do you successfully implement and operationalize risk models?',
    answer: `Successful implementation and operationalization of risk models requires a systematic approach integrating technical, organizational, and cultural aspects.

🏗️ Implementation Architecture:
• Modular System Architecture
• API Design
• Data Integration
• Technology Stack selection
• Parallel Operation planning

🚀 Deployment Strategies:
• Containerization with Docker
• CI/CD pipelines
• Infrastructure-as-Code
• Feature Stores
• Model Registry

📊 Operational Monitoring:
• Performance Monitoring
• Data Drift Detection
• A/B Testing Framework
• Audit Trails
• Incident Management

🤝 Organizational Integration:
• Stakeholder Engagement
• Training Programs
• Process Adaptation
• Role Definition
• Cultural Change

🔄 Continuous Improvement:
• Feedback Loops
• Version Planning
• Knowledge Management
• Collaborative Development
• Benchmarking`
  },
  {
    _key: genKey('faq_modellentwicklung_en', 19),
    _type: 'object',
    question: 'What best practices should be observed in model development?',
    answer: `Proven practices in risk model development ensure both methodological quality and practical applicability.

🎯 Strategic Alignment:
• Business-first approach
• Proportionality principle
• Early stakeholder involvement
• Clear success criteria
• Feasibility analysis

📊 Data Management:
• Data Lineage documentation
• Exploratory Data Analysis
• Data Separation
• Data Bias Assessment
• Data Quality Controls

🧪 Modeling and Validation:
• Methodological Pluralism
• Domain Knowledge Integration
• Feature Engineering
• Rigorous Cross-Validation
• Transparency and Interpretability

⚖️ Governance:
• Comprehensive Documentation
• Version Control
• Peer Review
• Model Risk Assessment
• Change Management

🚀 Implementation:
• Modular Design
• Performance Optimization
• Fallback Strategies
• Intuitive Interfaces
• Production Tests

🔄 Monitoring:
• Automated Performance Monitoring
• Regular Recalibration
• Impact Assessment
• Competitive Intelligence
• Knowledge Transfer`
  },
  {
    _key: genKey('faq_modellentwicklung_en', 20),
    _type: 'object',
    question: 'What ethical aspects must be considered in risk modeling?',
    answer: `The ethical dimensions of risk modeling are gaining increasing importance as models increasingly influence decisions with direct impacts on individuals and society.

⚖️ Fairness and Non-Discrimination:
• Bias Detection
• Fairness Metrics (Statistical Parity, Equal Opportunity)
• De-biasing Techniques
• Proxy Variable Analysis
• Group-differentiated Evaluation

🔍 Transparency and Explainability:
• Method Transparency
• Interpretable Models
• Post-hoc Explainability (SHAP, LIME)
• Process Transparency
• Accessible Documentation

🛡️ Data Protection:
• Privacy by Design
• Data Minimization
• Anonymization Techniques
• Informed Consent
• Data Security

🌐 Societal Impacts:
• Impact Assessment
• Avoiding Harmful Incentives
• Stakeholder Consultation
• Systemic Risks consideration
• Sustainability Aspects

⚙️ Governance:
• Ethics Guidelines
• Independent Review
• Escalation Paths
• Documentation of Ethical Decisions
• Responsibility Assignment

🔄 Continuous Monitoring:
• Ethics by Design
• Regular Audits
• Feedback Mechanisms
• Adaptive Management
• Ethical Training`
  }
]
