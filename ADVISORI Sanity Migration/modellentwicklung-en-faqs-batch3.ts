// Modellentwicklung EN - FAQ Batch 3 (FAQs 11-15)

const timestamp = Date.now()
const genKey = (prefix: string, index: number) => `${prefix}_${timestamp}_${index}`

export const faqsBatch3 = [
  {
    _key: genKey('faq_modellentwicklung_en', 11),
    _type: 'object',
    question: 'How do you integrate expert knowledge into quantitative risk models?',
    answer: `Integrating expert knowledge into quantitative risk models connects human experience and judgment with data-driven approaches.

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
    _key: genKey('faq_modellentwicklung_en', 12),
    _type: 'object',
    question: 'How do you optimize the balance between model complexity and practical applicability?',
    answer: `The optimal balance between model complexity and practical applicability is a central challenge in risk modeling.

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
    _key: genKey('faq_modellentwicklung_en', 13),
    _type: 'object',
    question: 'How do you implement advanced modeling techniques for emerging risks?',
    answer: `Emerging risks such as climate risks, cyber threats, or disruptive technologies pose particular challenges for risk modeling.

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
    _key: genKey('faq_modellentwicklung_en', 14),
    _type: 'object',
    question: 'How do you develop effective models for liquidity risks?',
    answer: `Developing effective models for liquidity risks requires a holistic approach considering both idiosyncratic and market-wide liquidity drivers.

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
    _key: genKey('faq_modellentwicklung_en', 15),
    _type: 'object',
    question: 'How do you develop advanced AI-based credit risk models?',
    answer: `Developing advanced AI-based credit risk models offers significant potential for improving risk assessment.

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
  }
]
