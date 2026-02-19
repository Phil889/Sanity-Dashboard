// Modellentwicklung EN - FAQ Batch 1 (FAQs 1-5)

const timestamp = Date.now()
const genKey = (prefix: string, index: number) => `${prefix}_${timestamp}_${index}`

export const faqsBatch1 = [
  {
    _key: genKey('faq_modellentwicklung_en', 1),
    _type: 'object',
    question: 'What are the core components of a robust risk model?',
    answer: `A robust risk model must encompass several core components to deliver reliable and meaningful results. These components form the foundation for precise risk measurement and management in modern risk management.

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
    _key: genKey('faq_modellentwicklung_en', 2),
    _type: 'object',
    question: 'How do you integrate traditional statistical methods with modern machine learning approaches?',
    answer: `Integrating traditional statistical methods with modern machine learning approaches enables combining the strengths of both worlds to develop more robust, higher-performing risk models.

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
    _key: genKey('faq_modellentwicklung_en', 3),
    _type: 'object',
    question: 'What data quality requirements are critical for reliable risk models?',
    answer: `Data quality forms the foundation of every reliable risk model. Without high-quality data, even the most advanced modeling techniques cannot deliver reliable results.

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
    _key: genKey('faq_modellentwicklung_en', 4),
    _type: 'object',
    question: 'How do you select the appropriate modeling methodology for different risk types?',
    answer: `Selecting the appropriate modeling methodology for different risk types is a critical strategic decision in risk management.

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
    _key: genKey('faq_modellentwicklung_en', 5),
    _type: 'object',
    question: 'How do you develop robust credit risk models for different exposure classes?',
    answer: `Developing robust credit risk models for different exposure classes requires a tailored approach that considers the specific characteristics of each class.

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
  }
]
