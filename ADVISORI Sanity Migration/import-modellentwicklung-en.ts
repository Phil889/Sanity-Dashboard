import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '.env') })

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const timestamp = Date.now()

// Generate unique keys
const genKey = (prefix: string, index: number) => `${prefix}_${timestamp}_${index}`

// All 20 FAQs
const faqs = [
  {
    q: 'What are the core components of a robust risk model?',
    a: `A robust risk model must encompass several core components to deliver reliable and meaningful results. These components form the foundation for precise risk measurement and management in modern risk management.

🧩 Conceptual Framework:
• A clear definition of the scope and model objectives
• A consistent methodological concept
• A systematic risk taxonomy
• Clearly defined risk drivers
• Comprehensive documentation

📊 Data Foundation and Quality:
• Representative and sufficiently comprehensive datasets
• Rigorous data quality assurance
• Effective data transformations and feature engineering
• Appropriate procedures for handling missing values
• Regular update cycles

⚙️ Statistical Methodology:
• Appropriate statistical procedures
• Robust parameter estimation procedures
• Comprehensive variable selection
• Appropriate complexity
• Precise calibration

🔄 Validation and Review:
• Rigorous out-of-sample tests
• Regular backtesting
• Sensitivity analyses
• Stress tests
• Independent model reviews

🛡️ Implementation and Governance:
• Efficient technical implementation
• Clear responsibilities and processes
• Regular review and further development
• Comprehensive model risk management processes
• Appropriate contingency plans for model failure`
  },
  {
    q: 'How do you integrate traditional statistical methods with modern machine learning approaches?',
    a: `Integrating traditional statistical methods with modern machine learning approaches enables combining the strengths of both worlds to develop more robust, higher-performing risk models.

🔄 Complementary Strengths:
• Traditional methods offer solid mathematical foundation with clear interpretability
• ML methods capture non-linear relationships and hidden patterns
• Combination enables balance between interpretable core drivers and subtle relationships
• Hybrid models integrate both causal relationships and data-driven insights

🏗️ Architecture Models:
• Two-Stage Models using traditional methods for core modeling and ML for refinement
• Ensemble Methods combining multiple model types
• Feature Engineering Integration using ML for feature identification
• Segmentation Approaches using ML for group identification
• Hierarchical Model Structures combining top-down and bottom-up approaches

📊 Methodological Integration:
• Prefer interpretable ML algorithms like LIME, SHAP
• Establish systematic benchmarking processes
• Develop hybrid validation approaches
• Apply regularization techniques from ML domain

🧪 Practical Examples:
• Credit risk models with logistic regression and gradient boosting
• Market price risk models combining VaR with ML volatility estimates
• Early warning systems combining rules with neural networks`
  },
  {
    q: 'What data quality requirements are critical for reliable risk models?',
    a: `Data quality forms the foundation of every reliable risk model. Without high-quality data, even the most advanced modeling techniques cannot deliver reliable results.

🎯 Core Aspects:
• Completeness - covering all relevant risk dimensions
• Accuracy - correctly reflecting actual conditions
• Consistency - uniform definitions across sources
• Timeliness - reflecting current state
• Relevance - demonstrable relationship with risks
• Granularity - sufficient detail level

📋 Specific Requirements:
• Sufficient historical depth (5-10 years)
• Representative samples
• Stable capture context
• Demonstrable data provenance
• Appropriate volume
• Balanced target distributions

🔍 Quality Assurance Processes:
• Systematic data validation
• Explicit missing value management
• Extensive descriptive statistics
• Plausibility checks by domain experts
• Data cleansing processes
• Documented data transformations

⚙️ Governance Requirements:
• Established data ownership structures
• Formalized data quality standards
• Regular independent reviews
• Robust Data Governance Frameworks
• Continuous monitoring with KQIs`
  },
  {
    q: 'How do you select the appropriate modeling methodology for different risk types?',
    a: `Selecting the appropriate modeling methodology for different risk types is a critical strategic decision in risk management.

🧩 Systematic Selection Process:
• Conduct thorough requirements analysis
• Identify risk-specific characteristics
• Evaluate various methodological options
• Conduct pilot implementations
• Weight decision criteria
• Consider method mix

📊 Methodology by Risk Types:

• Credit Risk: Logistic regression for PD, Gradient Boosting for complex portfolios, Survival analysis, Copula models, Structural models

• Market Price Risk: Parametric models, Historical Simulation, Monte Carlo, GARCH models, Extreme Value Theory

• Liquidity Risk: Cash flow matching, Stochastic process models, Stress tests, Network models

• Operational Risks: Loss Distribution Approach, Scenario analyses, Bayesian networks, KRIs and scorecards

🔄 Application Context:
• Regulatory Models: Established, interpretable methods
• Internal Models: Focus on forecast accuracy
• Pricing Models: Detailed risk consideration
• Early Warning Systems: Sensitivity focus
• Stress Tests: Scenario-based approaches

⚖️ Balancing Complexity and Practicality:
• Consider model risk
• Evaluate interpretation requirements
• Include data quality and availability
• Consider implementation effort
• Note scalability and performance`
  },
  {
    q: 'How do you develop robust credit risk models for different exposure classes?',
    a: `Developing robust credit risk models for different exposure classes requires a tailored approach that considers the specific characteristics of each class.

🏦 Corporate Exposures:
• Financial ratios as core predictors
• Market-based indicators
• Industry-specific factors
• Statistical procedures with econometric models
• Expert knowledge for low-default portfolios

🏠 Retail Mortgage Financing:
• LTV and DSCR as central risk drivers
• Behavioral factors integration
• Regional real estate market indicators
• Survival analysis techniques
• Prepayment risk modeling

💳 Consumer Loans and Credit Cards:
• Behavioral scoring models
• Sociodemographic factors with digital footprints
• High-frequency data points
• Machine learning methods
• Separate models for new and existing accounts

🏭 Specialized Financing:
• Cash flow-oriented modeling
• Scenario analyses and stress tests
• Expert-based slotting criteria
• Sector-specific risk factors
• Monte Carlo simulations

🏢 Commercial Real Estate:
• Multi-factor models
• Property-related metrics
• Market and location analyses
• Refinancing risk modeling
• Forward-looking components

🏛️ Public Institutions:
• Fiscal indicators
• Political and institutional factors
• International comparative analyses
• Rating agency methodologies
• Scenario-based approaches`
  },
  {
    q: 'How do you integrate macroeconomic factors into risk models?',
    a: `Integrating macroeconomic factors into risk models is critical for capturing systematic risks and developing forward-looking forecasts.

🔍 Relevant Factors:
• Economic growth and business cycle (GDP, industrial production)
• Labor market indicators (unemployment, employment growth)
• Price development (inflation, CPI)
• Interest and money market (key rates, yield curve)
• Real estate market (prices, vacancy rates)
• Exchange rates
• Industry-specific indicators

🔄 Methodological Approaches:
• Satellite models quantifying relationships
• Direct input variables in risk models
• Multi-stage modeling with overlays
• Scenario technique
• Bayesian approaches

📊 Quantification Methods:
• Econometric models (VAR, VECM)
• Machine learning approaches
• Panel data analyses
• Quantile regression
• Rolling window analyses

⚙️ Implementation by Risk Type:
• Credit risk: Through-the-Cycle to Point-in-Time conversion
• Market price risk: Volatility and correlation estimation
• Liquidity risk: Stress scenario modeling
• Operational risk: Loss frequency and severity models

🛠️ Practical Applications:
• IFRS 9 / CECL impairment models
• Stress tests
• Capital planning
• Early Warning Systems
• Risk Appetite Framework`
  },
  {
    q: 'How do you develop advanced market price risk models?',
    a: `Developing advanced market price risk models requires deep financial economic knowledge, mathematical-statistical expertise, and practical implementation competence.

📊 Evolution Stages:
• Variance-Covariance approach (traditional)
• Historical Simulation (non-parametric)
• Monte Carlo Simulation (flexible)
• Hybrid approaches
• AI-based models (newest)

🔄 Non-linear Market Dynamics:
• GARCH models for time-variable volatilities
• Regime-switching models for market phases
• Jump-diffusion processes
• Stochastic volatility models
• Local volatility models

🔗 Advanced Dependency Modeling:
• Copula methods for complex dependencies
• Dynamic correlation models (DCC, BEKK)
• Factor models with time-variable loadings
• Structural network models
• Hierarchical correlation structures

📏 Advanced Risk Measures:
• Expected Shortfall (ES)
• Spectral risk measures
• Conditional risk measures
• Component VaR/ES
• Multi-periodic risk measures

🔬 Extreme Risks and Stress Scenarios:
• Extreme Value Theory (EVT)
• Stress testing frameworks
• Reverse Stress Tests
• Scenario generators
• Amplification mechanisms modeling`
  },
  {
    q: 'What role do stress tests play in risk modeling?',
    a: `Stress tests play a central role in modern risk modeling and form an essential complement to statistical models.

🎯 Functions and Objectives:
• Overcoming limitations of statistical models
• Identification of vulnerabilities and concentration risks
• Quantification of risk-bearing capacity
• Support for strategic planning
• Fulfillment of regulatory requirements

🔄 Typology and Methodology:
• Historical scenarios (2008 crisis, COVID-19)
• Hypothetical scenarios
• Sensitivity analyses
• Reverse stress tests
• Systemic stress tests

⚙️ Framework Elements:
• Clearly defined governance structures
• Scenario definition and calibration
• Model infrastructure
• Aggregation mechanisms
• Reporting and analysis tools

📊 Integration into Risk Modeling:
• Complementary application with VaR/ES models
• Validation of statistical models
• Calibration of risk appetite and limits
• Development of Early Warning Systems
• Communication instrument for decision-makers

🔄 Continuous Development:
• Regular scenario review and updating
• Backtesting against actual crises
• Integration of new methodological approaches
• Benchmarking against industry practice
• Climate Stress Tests development`
  },
  {
    q: 'How do you develop effective early warning systems in risk management?',
    a: `Effective Early Warning Systems (EWS) are essential for anticipating risks before they materialize.

🔍 Fundamental Components:
• Signal identification with leading indicators
• Threshold definition with trigger points
• Escalation mechanisms
• Reporting framework
• Governance structure

📊 Signal Identification Methods:
• Statistical procedures (time series analyses)
• Machine Learning (Random Forests, Gradient Boosting)
• Expert knowledge integration
• Network analysis
• Scenario-based approaches

🔢 Indicators by Risk Domain:
• Credit risks: Behavioral, market, financial indicators
• Market risks: Volatility indices, liquidity metrics
• Liquidity risks: Funding spreads, deposit volatility
• Operational risks: Process quality, system stability

⚙️ Business Process Integration:
• Calibration with risk appetite
• Integration into capital planning
• Strategic business use
• Credit portfolio management
• Treasury management

📈 Continuous Improvement:
• Performance monitoring
• Adaptive learning
• Regular backtesting
• Methodological development
• Scenario expansion`
  },
  {
    q: 'How do you validate complex risk models?',
    a: `Validating complex risk models requires a systematic, multidimensional approach that considers both quantitative and qualitative aspects.

🎯 Validation Objectives:
• Verification of conceptual appropriateness
• Assessment of statistical performance
• Identification of model limits
• Verification of implementation fidelity
• Ensuring governance conformity

🔍 Validation Dimensions:
• Conceptual Validation: theoretical foundation, assumptions
• Data Quality Validation: origin, quality, representativeness
• Methodological Validation: statistical methods, complexity
• Empirical Validation: backtesting, benchmarking
• Process Validation: implementation, documentation

⚙️ Methods by Model Type:
• Credit Risk: AUC/AUROC, Gini, calibration tests, PSI
• Market Price Risk: VaR backtesting, stress testing
• Machine Learning: Cross-validation, SHAP, LIME

🛠️ Framework Implementation:
• Validation planning with risk-based strategy
• Independent execution by qualified experts
• Comprehensive reporting and follow-up

📋 Governance Aspects:
• Clear separation between development and validation
• Model Risk Management Framework
• Escalation paths for critical findings
• Transparent documentation`
  },
  {
    q: 'How do you integrate expert knowledge into quantitative risk models?',
    a: `Integrating expert knowledge into quantitative risk models connects human experience and judgment with data-driven approaches.

🧠 Value Contribution:
• Supplementation of limited data
• Identification of forward-looking factors
• Contextualization of statistical patterns
• Plausibility checking and validation
• Contribution of implicit knowledge

🔄 Methodological Approaches:
• Bayesian Modeling with informative priors
• Delphi Methods and structured surveys
• Rule-based Systems and Fuzzy Logic
• Scenario-based Methods

⚙️ Knowledge Extraction Processes:
• Expert selection and diversification
• Structured interviews and workshops
• Calibration exercises
• Bias minimization techniques

🔬 Application Examples:
• Credit Risk: Override mechanisms, PD adjustments
• Operational Risks: Scenario analyses, self-assessments
• Emerging Risks: Bayesian networks, hybrid scorecards`
  },
  {
    q: 'How do you optimize the balance between model complexity and practical applicability?',
    a: `The optimal balance between model complexity and practical applicability is a central challenge in risk modeling.

⚖️ Fundamental Principles:
• Purpose orientation
• Data availability consideration
• Transparency requirements
• Robustness priority
• Maintainability focus

🔍 Complexity Dimensions:
• Statistical/Algorithmic: Linear vs non-linear, parametric vs non-parametric
• Data and Input: Variables, granularity, frequency
• Implementation: Computing resources, infrastructure, maintenance

🛠️ Optimization Approaches:
• Hierarchical Modeling with modular structure
• Regularization and Dimension Reduction
• Hybrid Modeling Approaches
• Explainable AI (XAI) techniques

💼 Practical Decision Aids:
• Systematic complexity analysis
• Stakeholder-oriented approach
• Iterative development and refinement

🔄 Continuous Evaluation:
• Performance monitoring
• Regular balance review
• Benchmark comparisons
• Adaptation to new developments`
  },
  {
    q: 'How do you implement advanced modeling techniques for emerging risks?',
    a: `Emerging risks such as climate risks, cyber threats, or disruptive technologies pose particular challenges for risk modeling.

🔍 Particular Challenges:
• Data limitations
• Uncertainty rather than risk
• Non-linear dynamics
• Structural discontinuities

🌐 Advanced Modeling Approaches:
• Bayesian Networks for causal relationships
• Agent-based Modeling for system dynamics
• System Dynamics for feedback loops
• Scenario Planning for future scenarios
• Hybrid AI Models combining ML with domain models

🌍 Climate Risk Modeling:
• Physical risk models for acute and chronic impacts
• Transition risk models for policy and technology changes
• Integrated Assessment Models
• Scenario-based approaches (NGFS scenarios)
• Carbon pricing models

🔒 Cyber Risk Modeling:
• Attack tree models
• Network vulnerability models
• Loss distribution approaches
• Scenario-based quantification
• Systemic risk models

🚀 Technology Disruption Risks:
• Technology adoption curves
• Competitive dynamics models
• Business model impact assessments
• Strategic option valuation`
  },
  {
    q: 'How do you develop effective models for liquidity risks?',
    a: `Developing effective models for liquidity risks requires a holistic approach considering both idiosyncratic and market-wide liquidity drivers.

🌊 Fundamental Dimensions:
• Funding Liquidity Risk
• Market Liquidity Risk
• Intraday Liquidity Risk
• Structural Liquidity Risk

📊 Modeling Approaches:
• Cash Flow Projections and Gap Analyses
• Behavioral Modeling for Liabilities
• Asset Liquidity Modeling
• Stochastic Liquidity Models
• Network-based Approaches

💰 Funding Liquidity Models:
• Deposit stability models
• Wholesale funding models
• Contingent liquidity models
• Funding concentration analysis
• Stress-dependent funding costs

📈 Market Liquidity Models:
• Bid-ask spread models
• Market depth models
• Price impact models
• Liquidation time models
• Fire sale models

⚡ Intraday Liquidity:
• Payment flow models
• Intraday stress scenarios
• Collateral optimization
• Real-time monitoring systems

🔗 Integration Aspects:
• Liquidity-at-Risk (LaR) models
• Combined stress testing
• Liquidity transfer pricing
• Contingency funding plans`
  },
  {
    q: 'How do you develop advanced AI-based credit risk models?',
    a: `Developing advanced AI-based credit risk models offers significant potential for improving risk assessment.

🧠 Application Areas:
• Credit assessment and scoring
• Early warning systems
• Portfolio monitoring
• Loss estimation (LGD, EAD)

📊 AI Methods:
• Gradient Boosting Machines (XGBoost, LightGBM)
• Neural Networks and Deep Learning
• Natural Language Processing (NLP)
• Graph Neural Networks
• Reinforcement Learning

🎯 Advantages over Traditional Methods:
• Capture of non-linear relationships
• Automatic feature engineering
• Processing of unstructured data
• Improved discrimination power
• Adaptive learning

⚠️ Challenges and Solutions:
• Interpretability: SHAP, LIME, attention mechanisms
• Regulatory acceptance: Model documentation, validation
• Data requirements: Transfer learning, synthetic data
• Overfitting: Regularization, cross-validation
• Bias: Fairness metrics, de-biasing techniques

🔄 Implementation Best Practices:
• Hybrid approaches combining ML with traditional methods
• Robust validation frameworks
• Continuous monitoring and recalibration
• Clear governance structures
• Comprehensive documentation`
  },
  {
    q: 'How do you integrate model risk management into the overall risk strategy?',
    a: `Integrating model risk management into the overall risk strategy is critical for systematically addressing risks from complex models.

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
    q: 'How do you develop neural network models for risk management?',
    a: `Neural networks offer particular advantages for risk management through their ability to capture complex non-linear relationships.

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
    q: 'How do you successfully implement and operationalize risk models?',
    a: `Successful implementation and operationalization of risk models requires a systematic approach integrating technical, organizational, and cultural aspects.

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
    q: 'What best practices should be observed in model development?',
    a: `Proven practices in risk model development ensure both methodological quality and practical applicability.

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
    q: 'What ethical aspects must be considered in risk modeling?',
    a: `The ethical dimensions of risk modeling are gaining increasing importance as models increasingly influence decisions with direct impacts on individuals and society.

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
].map((faq, index) => ({
  _key: genKey('faq_modellentwicklung_en', index + 1),
  _type: 'object',
  question: faq.q,
  answer: faq.a
}))

// Main document
const modellentwicklungEnDocument = {
  _id: 'modellentwicklung-en',
  _type: 'servicePage',
  title: 'Model Development',
  language: 'en',
  __i18n_lang: 'en',
  __i18n_base: {
    _type: 'reference',
    _ref: 'modellentwicklung'
  },
  slug: {
    _type: 'slug',
    current: 'risk-management/financial-risk/model-development-en'
  },
  parent: {
    _ref: 'financial-risk',
    _type: 'reference'
  },
  seo: {
    _type: 'seo',
    title: 'Model Development | ADVISORI',
    description: 'Customized development, validation, and optimization of risk models for financial institutions and companies. Benefit from our expertise in risk modeling and quantitative methods.',
    keywords: 'Model Development, Risk Models, Credit Risk Models, Market Price Risk Models, Liquidity Risk Models, Operational Risk Models, Quantitative Modeling, Statistical Models, PD Models, LGD Models, EAD Models, Validation'
  },
  heroSection: {
    _type: 'object',
    heading: 'Model Development',
    tagline: 'Precise Risk Modeling for Informed Decisions',
    description: 'Our customized modeling solutions combine statistical expertise, industry knowledge, and advanced technologies. We develop, validate, and optimize risk models that not only meet regulatory requirements but also serve as strategic tools for value-oriented business decisions.',
    heroImage: {
      _type: 'image',
      alt: 'Model Development',
      asset: {
        _ref: 'image-88620cd67ae6797e9f92ec838be2237b98f2d0dd-1024x768-jpg',
        _type: 'reference'
      }
    },
    benefits: [
      { _key: genKey('benefit', 1), _type: 'object', text: 'Customized models for your specific risk profiles' },
      { _key: genKey('benefit', 2), _type: 'object', text: 'Optimized Risk-Weighted Assets (RWA) and capital allocation' },
      { _key: genKey('benefit', 3), _type: 'object', text: 'Sound risk assessment for better business decisions' },
      { _key: genKey('benefit', 4), _type: 'object', text: 'Complete regulatory compliance and transparency' }
    ]
  },
  overview: {
    _type: 'object',
    heading: 'Holistic Model Development for Differentiated Risk Management',
    description: 'The increasing complexity of risk management requires differentiated, precise, and at the same time practically applicable models. Our expertise in model development encompasses the entire lifecycle – from conceptual design through statistical implementation to continuous validation and further development. We combine advanced mathematical methods with sound domain knowledge and practical application competence.',
    additionalInfo: 'According to a recent study, optimized risk models can reduce risk-weighted assets (RWA) by 8-15% without worsening the actual risk profile. At the same time, the forecast accuracy of default probabilities increases by an average of 25%, leading to more precise risk assessments and more informed business decisions.',
    alert: {
      title: 'Expert Tip',
      content: 'Combining classical statistical methods with modern machine learning approaches can improve the forecast accuracy of risk models by up to 35%. Especially in identifying non-linear relationships and complex interaction effects, hybrid models show clear advantages over purely traditional approaches.'
    },
    points: [
      { _key: genKey('point', 1), _type: 'object', text: 'Development of statistically sound and methodologically robust risk models' },
      { _key: genKey('point', 2), _type: 'object', text: 'Integration of traditional and innovative modeling approaches' },
      { _key: genKey('point', 3), _type: 'object', text: 'Comprehensive validation and continuous optimization' },
      { _key: genKey('point', 4), _type: 'object', text: 'Documentation and implementation support' },
      { _key: genKey('point', 5), _type: 'object', text: 'Training and knowledge transfer for sustainable model use' }
    ],
    serviceDescription: 'Our model development offering encompasses the conception, implementation, validation, and optimization of various risk model types. We support you in developing methodologically robust and regulatory-compliant models that are simultaneously practical in application and deliver measurable added value for your business processes.',
    servicePoints: [
      { _key: genKey('servicePoint', 1), _type: 'object', text: 'Conception of individual modeling approaches based on your specific requirements' },
      { _key: genKey('servicePoint', 2), _type: 'object', text: 'Data analysis, preparation, and feature engineering' },
      { _key: genKey('servicePoint', 3), _type: 'object', text: 'Statistical implementation and calibration of models' },
      { _key: genKey('servicePoint', 4), _type: 'object', text: 'Comprehensive validation and documentation' },
      { _key: genKey('servicePoint', 5), _type: 'object', text: 'Implementation support and knowledge transfer' }
    ],
    whyUs: {
      title: 'Our Strengths',
      points: [
        { _key: genKey('whyUs', 1), _type: 'object', text: 'Comprehensive expertise in classical statistical methods and innovative modeling techniques' },
        { _key: genKey('whyUs', 2), _type: 'object', text: 'Sound understanding of regulatory requirements and best practices' },
        { _key: genKey('whyUs', 3), _type: 'object', text: 'Proven success in optimizing risk models and RWA reduction' },
        { _key: genKey('whyUs', 4), _type: 'object', text: 'Practice-oriented approach with focus on applicability and added value' }
      ]
    }
  },
  approach: {
    _type: 'object',
    title: 'Our Approach',
    description: 'We pursue a structured yet flexible approach to model development that ensures both methodological rigor and practical applicability. Our proven methodology ensures that your models are not only statistically sound but also optimally tailored to your individual requirements.',
    points: [
      { _key: genKey('approach', 1), _type: 'object', text: 'Phase 1: Requirements Analysis & Conception - Identification of specific requirements, data availability, and suitable modeling approaches' },
      { _key: genKey('approach', 2), _type: 'object', text: 'Phase 2: Data Preparation & Analysis - Careful preparation, quality assurance, and exploratory analysis of model data' },
      { _key: genKey('approach', 3), _type: 'object', text: 'Phase 3: Model Development - Iterative implementation, calibration, and optimization of the model considering statistical and professional criteria' },
      { _key: genKey('approach', 4), _type: 'object', text: 'Phase 4: Validation - Rigorous examination of conceptual appropriateness, methodological implementation, and empirical performance' },
      { _key: genKey('approach', 5), _type: 'object', text: 'Phase 5: Implementation & Knowledge Transfer - Support with integration into existing systems and processes as well as comprehensive knowledge transfer' }
    ]
  },
  services: [
    {
      _key: genKey('service', 1),
      _type: 'object',
      title: 'Credit Risk Models',
      description: 'Development and optimization of advanced models for measuring, quantifying, and managing credit risks. Our solutions encompass both parameter and portfolio models and consider regulatory requirements as well as economic objectives.',
      features: [
        { _key: genKey('feature', 1), _type: 'object', text: 'PD Models (Probability of Default) for various exposure classes' },
        { _key: genKey('feature', 2), _type: 'object', text: 'LGD Models (Loss Given Default) with differentiated collateral valuations' },
        { _key: genKey('feature', 3), _type: 'object', text: 'EAD Models (Exposure at Default) with precise CCF modeling' },
        { _key: genKey('feature', 4), _type: 'object', text: 'Integrated credit portfolio models and concentration risk analyses' }
      ]
    },
    {
      _key: genKey('service', 2),
      _type: 'object',
      title: 'Market Price Risk Models',
      description: 'Conception and implementation of differentiated models for quantifying market price risks. We develop solutions that are optimally suited for both regulatory reporting and internal risk management.',
      features: [
        { _key: genKey('feature', 5), _type: 'object', text: 'Value-at-Risk (VaR) and Expected Shortfall models' },
        { _key: genKey('feature', 6), _type: 'object', text: 'Sensitivity analyses and stress tests' },
        { _key: genKey('feature', 7), _type: 'object', text: 'Interest rate risk models for banking and trading books' },
        { _key: genKey('feature', 8), _type: 'object', text: 'Advanced models for non-linear risks and volatility clusters' }
      ]
    },
    {
      _key: genKey('service', 3),
      _type: 'object',
      title: 'Liquidity Risk Models',
      description: 'Development and validation of quantitative models for measuring and managing liquidity risks. Our solutions encompass both short-term liquidity forecasts and structural liquidity analyses.',
      features: [
        { _key: genKey('feature', 9), _type: 'object', text: 'Cash flow forecast models and gap analyses' },
        { _key: genKey('feature', 10), _type: 'object', text: 'Modeling of payment flows under stress' },
        { _key: genKey('feature', 11), _type: 'object', text: 'LCR and NSFR forecast models' },
        { _key: genKey('feature', 12), _type: 'object', text: 'Liquidity buffer optimization models' }
      ]
    },
    {
      _key: genKey('service', 4),
      _type: 'object',
      title: 'AI-based Risk Models',
      description: 'Use of innovative machine learning and AI technologies for more precise and differentiated risk modeling. We develop advanced models that can capture complex, non-linear relationships without sacrificing transparency and explainability.',
      features: [
        { _key: genKey('feature', 13), _type: 'object', text: 'Gradient Boosting and Random Forest for high-dimensional problems' },
        { _key: genKey('feature', 14), _type: 'object', text: 'Neural networks for complex patterns in financial data' },
        { _key: genKey('feature', 15), _type: 'object', text: 'Explainable AI approaches for transparency and traceability' },
        { _key: genKey('feature', 16), _type: 'object', text: 'Hybrid models combining classical and ML approaches' }
      ]
    }
  ],
  testimonial: {
    _type: 'object',
    quote: 'Successful risk modeling is far more than the mere application of statistical methods – it is the art of recognizing complex relationships, mapping them in a coherent mathematical framework, and at the same time making them practical. Only when these three dimensions are optimally balanced does a model emerge that is both analytically robust and commercially valuable.',
    name: 'Asan Stefanski',
    position: 'Director',
    company: 'ADVISORI DE'
  },
  faq: faqs
}

async function importModellentwicklungEn() {
  console.log('Importing Modellentwicklung EN document...')
  
  try {
    // Use createOrReplace to handle existing documents with references
    const result = await client.createOrReplace(modellentwicklungEnDocument)
    
    console.log('✅ Successfully created Modellentwicklung EN document')
    console.log(`Document ID: ${result._id}`)
    console.log(`Title: ${result.title}`)
    console.log(`Language: ${result.language}`)
    console.log(`Slug: ${result.slug.current}`)
    console.log(`FAQs: ${result.faq.length}`)
    console.log(`Services: ${result.services.length}`)
    
  } catch (error) {
    console.error('Error creating document:', error)
  }
}

// Run the script
importModellentwicklungEn()