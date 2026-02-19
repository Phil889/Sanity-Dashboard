// Marktrisiko Bewertung & Limitsysteme - English FAQs Batch 1 (FAQs 1-3)
// Market Risk Assessment & Limit Systems

export const marktrisikoBewertungEnFaqsBatch1 = [
  {
    _key: 'faq_en_1739456789001_1',
    _type: 'object',
    question: 'What does market risk assessment encompass?',
    answer: `Market risk assessment encompasses several key components:

🔍 Risk Identification and Classification
• Systematic risks: Market-wide factors such as interest rate changes, currency fluctuations, or geopolitical shocks
• Unsystematic risks: Company-specific factors that can be reduced through diversification
• Beta (β) as sensitivity measure: Quantifies the sensitivity of an asset to market movements

📊 Quantification Methods
• Value at Risk (VaR): Maximum expected loss over a defined time horizon at a given confidence level
• Expected Shortfall: Average loss in the worst scenarios (tail risk)
• Sensitivity analyses: Delta, Gamma, Vega, Theta for options and derivatives
• Stress tests: Simulation of extreme market movements and their impacts

⚙️ Modeling Approaches
• Historical simulation: Using historical data to estimate potential losses
• Monte Carlo simulation: Stochastic modeling with thousands of scenarios
• Parametric models: Assumption of certain statistical distributions
• Regime-Switching-GARCH: Consideration of changing market volatility regimes

🔄 Validation and Backtesting
• Backtesting: Comparison of VaR forecasts with actual losses
• Outlier analysis: Investigation of cases where losses exceed VaR
• Model risk assessment: Identification of weaknesses and limitations of models
• Regulatory requirements: Compliance with CRR Art. 363-369 for internal models`
  },
  {
    _key: 'faq_en_1739456789001_2',
    _type: 'object',
    question: 'What regulatory requirements exist for market risk assessment?',
    answer: `The regulatory requirements for market risk assessment are extensive and based on various frameworks:

📜 Capital Requirements Regulation (CRR)
• Art. 363-369: Requirements for internal models for market risks
• Standard approach (MRSA): Standardized method for calculating capital requirements
• Delta-Plus method: Specific requirements for options (Art. 278 CRR)
• Backtesting criteria: Maximum 4 outliers per year for use of internal models

🏦 Minimum Requirements for Risk Management (MaRisk)
• AT 7.2.2: Detailed specifications for limit setting and risk aggregation
• BTR 2.1: Specific requirements for market risk management
• Stress tests: Regular execution and integration into risk management
• Risk-bearing capacity concept: Linking market risks with capital planning

🌐 International Standards
• Basel Committee on Banking Supervision (BCBS): Fundamental Review of the Trading Book (FRTB)
• Expected Shortfall as new standard: Replaces VaR as primary risk measure
• Liquidity Horizons: Differentiated consideration of liquidity of various risk factors
• P&L Attribution: Strict tests for validation of internal models

📊 Reporting Obligations
• MELBA reporting requirements: Standardized reporting to BaFin
• Disclosure requirements: Transparency about risk methods and results
• Internal reporting: Regular information to management and supervisory bodies
• Documentation requirements: Comprehensive documentation of models and processes`
  },
  {
    _key: 'faq_en_1739456789001_3',
    _type: 'object',
    question: 'What is Value at Risk (VaR) and how is it calculated?',
    answer: `Value at Risk (VaR) is a central metric in market risk assessment:

🎯 Definition and Concept
• Maximum expected loss over a defined time horizon at a given confidence level
• Typical parameters: 99% or 99.9% confidence level, 1-day or 10-day horizon
• Interpretation: "With 99% probability, the loss in the next X days will not be greater than Y euros"
• Aggregation capability: Enables summarization of various risk positions

📊 Calculation Methods
• Historical Simulation
  - Using historical returns to estimate the loss distribution
  - Sorting historical scenarios by losses
  - Determining VaR as the corresponding quantile (e.g., 99% quantile)
  - Advantages: No distribution assumptions, simple implementation

• Parametric Method (Variance-Covariance Approach)
  - Assumption of normally distributed returns
  - Calculation using formula: VaR = μ + σ · z_α
  - Where μ = expected value, σ = standard deviation, z_α = z-value for confidence level
  - Advantages: Computational efficiency, easy scaling across different time horizons

• Monte Carlo Simulation
  - Generating thousands of random scenarios based on statistical properties
  - Valuing the portfolio under each scenario
  - Determining VaR as the corresponding quantile of the simulated distribution
  - Advantages: Flexibility with complex instruments, consideration of non-linear effects

⚙️ Practical Aspects
• Square root of time rule: Scaling 1-day VaR to longer horizons (VaR_T = VaR_1 · √T)
• Backtesting: Comparison of VaR forecasts with actual losses
• Limitation: Integration into limit systems as upper bound for risk exposure
• Supplementation: Combination with stress tests to cover extreme events`
  }
]
