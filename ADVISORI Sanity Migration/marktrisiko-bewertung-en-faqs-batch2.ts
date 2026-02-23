// Marktrisiko Bewertung & Limitsysteme - English FAQs Batch 2 (FAQs 4-6)
// Market Risk Assessment & Limit Systems

export const marktrisikoBewertungEnFaqsBatch2 = [
  {
    _key: 'faq_en_1739456789001_4',
    _type: 'object',
    question: 'How do stress tests work in market risk management?',
    answer: `Stress tests are an essential instrument in market risk management and complement Value-at-Risk models:

🎯 Purpose and Significance
• Overcoming VaR limitations: Capturing extreme events beyond historical experience
• Identifying vulnerabilities: Uncovering weaknesses in the risk profile
• Quantifying extreme risks: Measuring potential losses in crisis scenarios
• Regulatory requirement: Mandatory component of risk management according to MaRisk and CRR

📊 Types of Stress Tests
• Sensitivity Analyses
  - Variation of individual risk factors (e.g., 200 basis point interest rate shock)
  - Simple execution and interpretation
  - Focus on specific vulnerabilities

• Historical Scenarios
  - Replication of past crises (e.g., 2008 financial crisis, COVID-19 shock 2020)
  - Realistic correlation structures between risk factors
  - Limited to historical experience

• Hypothetical Scenarios
  - Simulation of plausible but not yet occurred events
  - Consideration of current market conditions and vulnerabilities
  - Flexibility in scenario design

• Reverse Stress Tests
  - Identification of scenarios that would lead to predefined critical losses
  - Focus on existentially threatening events
  - Analysis of the plausibility of such scenarios

⚙️ Implementation and Governance
• Scenario development: Process for defining plausible stress scenarios
• Valuation methodology: Revaluation of positions under stress conditions
• Aggregation: Summarization of impacts at portfolio and enterprise level
• Reporting: Communication of results to decision-makers
• Integration: Linking with limit systems and capital planning

🔄 Advanced Techniques
• Macroprudential stress tests: Consideration of systemic risks and contagion effects
• Multi-period stress tests: Simulation of development over multiple periods with feedback effects
• Climate stress tests: Integration of physical and transitional climate risks`
  },
  {
    _key: 'faq_en_1739456789001_5',
    _type: 'object',
    question: 'What are limit systems and how are they implemented?',
    answer: `Limit systems are a central instrument for managing market risks:

🎯 Basic Principles and Structure
• Definition: Setting upper bounds for risk exposures at various levels
• Hierarchical structure: Cascading limits from the overall bank to individual trading desks
• Risk appetite: Deriving limits from the overarching risk appetite of the company
• Consistency: Coordination of different limit types to avoid contradictions

📊 Types of Limits
• Position limits: Limiting the nominal volume or market value of positions
• Sensitivity limits: Limiting sensitivity to risk factors (Delta, Gamma, Vega)
• VaR limits: Limiting Value at Risk at various levels
• Loss limits: Limiting realized or unrealized losses (stop-loss limits)
• Stress limits: Limiting potential losses under stress scenarios

⚙️ Implementation and Governance
• Limit setting: Process for determining appropriate limit values
• Limit allocation: Distribution of total risk to various business areas
• Limit monitoring: Continuous monitoring of utilization and compliance
• Escalation processes: Defined procedures for limit breaches
• Regular review: Adjustment of limits to changed market conditions and business strategies

🔄 Advanced Concepts
• Dynamic limit systems: Automatic adjustment of limits based on market conditions
• Correlation-adjusted limits: Consideration of diversification effects
• Risk budgeting: Allocation of risk capital based on risk-return ratios
• AI-supported early warning systems: Detection of potential limit breaches before they occur

🛠️ Technological Implementation
• Real-time monitoring: Continuous monitoring of limit utilization
• Integrated dashboards: Visualization of limit utilizations and trends
• Automated alerts: Notification of approaching or exceeded limits
• Audit trail: Complete documentation of limit changes and breaches`
  },
  {
    _key: 'faq_en_1739456789001_6',
    _type: 'object',
    question: 'What is risk-bearing capacity analysis and how does it relate to market risks?',
    answer: `Risk-bearing capacity analysis (RBCA) is a central element of overall risk management with close connection to market risk management:

🎯 Basic Concept and Significance
• Definition: Ability of a company to absorb potential losses from risks through available risk coverage potential
• Regulatory basis: MaRisk AT 4.1 requires an appropriate risk-bearing capacity concept
• Strategic relevance: Linking risk appetite, capital planning, and business strategy
• Limitation: Derivation of overall bank limits from risk-bearing capacity

📊 Components and Methodology
• Risk Coverage Potential (RCP): Available resources for absorbing losses
  - Going-concern approach: Focus on continuation of business operations
  - Gone-concern approach: Focus on creditor protection in liquidation case
  - Normative perspective: Compliance with regulatory capital requirements
  - Economic perspective: Consideration of all material risks

• Risk Identification and Quantification
  - Risk inventory: Systematic capture of all relevant risks
  - Risk quantification: Measurement of risks with uniform confidence level (typically 99.9%)
  - Diversification effects: Consideration of correlations between risks
  - Aggregation: Consolidation of different risk types to total risk

• Limitation and Monitoring
  - Risk limitation: Setting limits based on risk coverage potential
  - Risk allocation: Distribution of risk budget to various risk types and business areas
  - Regular monitoring: Continuous monitoring of risk situation
  - Reporting: Regular information to management and supervisory bodies

🔄 Connection to Market Risk Management
• Market risks as component: Integral part of the overall risk profile
• Consistent methodology: Use of compatible risk measures (e.g., VaR with 99.9% confidence level)
• Limit derivation: Derivation of market risk limits from overall risk-bearing capacity
• Stress integration: Consideration of market risk stress scenarios in overall stress tests`
  }
]
