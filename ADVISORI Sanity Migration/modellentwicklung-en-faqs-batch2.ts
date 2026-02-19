// Modellentwicklung EN - FAQ Batch 2 (FAQs 6-10)

const timestamp = Date.now()
const genKey = (prefix: string, index: number) => `${prefix}_${timestamp}_${index}`

export const faqsBatch2 = [
  {
    _key: genKey('faq_modellentwicklung_en', 6),
    _type: 'object',
    question: 'How do you integrate macroeconomic factors into risk models?',
    answer: `Integrating macroeconomic factors into risk models is critical for capturing systematic risks and developing forward-looking forecasts.

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
    _key: genKey('faq_modellentwicklung_en', 7),
    _type: 'object',
    question: 'How do you develop advanced market price risk models?',
    answer: `Developing advanced market price risk models requires deep financial economic knowledge, mathematical-statistical expertise, and practical implementation competence.

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
    _key: genKey('faq_modellentwicklung_en', 8),
    _type: 'object',
    question: 'What role do stress tests play in risk modeling?',
    answer: `Stress tests play a central role in modern risk modeling and form an essential complement to statistical models.

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
    _key: genKey('faq_modellentwicklung_en', 9),
    _type: 'object',
    question: 'How do you develop effective early warning systems in risk management?',
    answer: `Effective Early Warning Systems (EWS) are essential for anticipating risks before they materialize.

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
    _key: genKey('faq_modellentwicklung_en', 10),
    _type: 'object',
    question: 'How do you validate complex risk models?',
    answer: `Validating complex risk models requires a systematic, multidimensional approach that considers both quantitative and qualitative aspects.

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
  }
]
