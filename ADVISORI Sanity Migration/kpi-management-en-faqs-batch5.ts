import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 17-20 for KPI Management EN
export const faqsBatch5 = [
  {
    _key: 'faq_kpi_en_17',
    _type: 'object',
    question: 'How do you integrate KPIs into change management processes?',
    answer: `Integrating KPIs into change management processes is crucial for the success of organizational changes. Well-designed metrics increase transparency, create orientation, and enable objective evaluation of transformation progress in a complex, often emotionally charged change landscape.

🔄 Phase-Oriented Change KPIs
• Preparation Phase: Readiness indices, stakeholder engagement scores, change impact assessments
• Implementation Phase: Milestone achievement, change adoption rates, training completion rates
• Stabilization Phase: Performance dips, time-to-proficiency, productivity metrics
• Sustainability Phase: Regression rates, continuous improvement metrics, long-term adoption

👥 Stakeholder-Related Measurement
• Executives: Leadership alignment scores, role-modeling indices, commitment indicators
• Employees: Engagement metrics, change fatigue indices, resistance indicators
• Change Agents: Activity metrics, influence scores, feedback channel usage
• External Stakeholders: Customer perception, partner alignment, public perception

📊 Balanced Change Scorecard
• Process Dimension: Progress in milestones, speed of implementation
• People Dimension: Engagement, competency development, behavioral changes
• System Dimension: Infrastructure readiness, interface functionality, technical adoption
• Results Dimension: Realized benefits, productivity development, customer satisfaction

📈 KPI-Supported Management Mechanisms
• Change Control Boards: Data-driven decision-making about adjustments
• Pulse Checks: Regular short surveys to measure soft factors
• Early Indicator Monitoring: Proactive identification of risks and resistance
• Benefits Tracking: Continuous measurement of goal achievement and value creation

Effective approaches to integrating KPIs into change management processes include:

• Focus on Behavioral Changes: Measurement of actual behavioral adoption rather than just awareness
• Change Journey Mapping: Linking KPIs with emotional phases of the change curve
• Storytelling with Data: Using KPI developments for motivating change communication
• Adaptive Measurement: Adjustment of KPIs to changing change requirements

Particularly important is the balance between hard and soft factors. While quantitative KPIs (such as productivity metrics or process throughput times) measure objective aspects of change, qualitative indicators (such as engagement scores or cultural fit indices) capture the emotional and cultural dimensions of change, which are often decisive for sustainable success.`
  },
  {
    _key: 'faq_kpi_en_18',
    _type: 'object',
    question: 'How do you develop KPIs for sustainability and ESG goals?',
    answer: `Developing meaningful KPIs for sustainability and ESG goals (Environmental, Social, Governance) is becoming increasingly important for companies, both from a regulatory perspective and as a strategic competitive factor. A well-thought-out system of ESG KPIs enables the integration of sustainability aspects into corporate management and creates transparency for internal and external stakeholders.

🌍 Environmental KPIs (Environmental)
• Climate Protection: CO₂ footprint (Scope 1-3), energy efficiency, share of renewable energy
• Resource Conservation: Material efficiency, water consumption, waste volume and recycling
• Biodiversity: Land use, biodiversity indices, ecosystem impact scores
• Product Ecology: Life cycle assessment (LCA), circularity, environmentally friendly product design

👥 Social KPIs (Social)
• Working Conditions: Occupational safety (LTIR), employee satisfaction, turnover rate
• Diversity & Inclusion: Gender distribution, age structure, inclusion indices
• Supply Chain: Social compliance rate, fair trade shares, human rights assessments
• Community Engagement: Community investments, volunteer work, social value creation

⚖️ Governance KPIs (Governance)
• Corporate Leadership: Board diversity, compensation transparency, independence ratios
• Compliance: Training rates, reports to whistleblower systems, incident response times
• Ethics: Code of conduct approval, ethics hotline usage, ethical risk assessments
• Transparency: ESG reporting quality, stakeholder dialogue intensity, data availability

📊 Methodological Approaches to ESG KPI Development
• Materiality Analysis: Focus on topics most relevant to stakeholders and company
• Reference Frameworks: Orientation to standards (GRI, SASB, TCFD) and industry benchmarks
• Double Materiality: Consideration of both financial and non-financial materiality
• Science-Based Targets: Alignment of environmental KPIs with scientifically based target paths

When developing effective sustainability KPIs, the following aspects should be considered:

• Balance: Balance between E, S, and G dimensions depending on industry and business model
• Linkage: Integration of ESG KPIs into existing performance management systems
• Credibility: Transparent methodology, external verification, avoidance of greenwashing
• Future Orientation: Forward-looking indicators for long-term sustainability trends

Particularly important is the distinction between compliance-oriented and value-creation-oriented ESG KPIs. While the former ensure compliance with regulatory requirements, the latter support strategic positioning and differentiation of the company in competition. A successful ESG KPI strategy combines both perspectives and makes sustainability an integral part of corporate management.`
  },
  {
    _key: 'faq_kpi_en_19',
    _type: 'object',
    question: 'How do you develop predictive KPIs for future-oriented decisions?',
    answer: `Predictive KPIs extend classic performance management with a future-oriented dimension. Unlike retrospective metrics, they enable forward-looking decisions by making patterns, trends, and potential developments recognizable early. Developing such early indicators requires specific methodology and advanced analytical procedures.

🔮 Basic Principles of Predictive KPIs
• Lead Character: Sufficient time distance between indication and actual event
• Causality: Proven cause-effect relationship to the result to be predicted
• Signal Strength: Sufficient correlation with future performance developments
• Actionability: Ability to influence through targeted measures
• Timeliness: Timely availability of indicator data for timely reactions

📊 Types of Predictive Indicators
• Market-Sensing KPIs: Early market indicators, trend analyses, competitive monitoring
• Behavior-Based KPIs: Usage patterns, engagement metrics, purchase interest indicators
• Process Early Indicators: Throughput times, quality precursors, capacity utilizations
• Risk KPIs: Early warning indicators, volatility metrics, stress test results
• Innovation Metrics: Technology readiness indices, patent analyses, adoption forecasts

🧠 Analytical Methods for KPI Forecasting
• Statistical Methods: Time series analyses, multivariate statistics, regression models
• Machine Learning: Supervised learning algorithms, neural networks, anomaly detection
• Scenarios and Simulations: Monte Carlo simulation, what-if analyses, stress tests
• Combined Methods: Hybrid models, ensemble methods, multi-layer forecasts
• Qualitative Supplements: Expert estimates, Delphi methods, structured expert judgments

🔄 Implementation in Decision Processes
• Decision Cockpits: Integration of predictive and retrospective KPIs in management information systems
• Alert Mechanisms: Automatic notifications for significant trend changes
• Scenario Planning: Development of action options for various forecast scenarios
• Closed-Loop Learning: Continuous calibration of forecast models through feedback
• Probabilistic Thinking: Inclusion of probabilities and confidence intervals

The following best practices have proven effective for developing predictive KPIs:

• Validation: Systematic verification of predictive power based on historical data
• Transparency: Traceable methodology and assumptions behind predictive models
• Supplement Rather Than Replace: Combination with traditional KPIs for a complete picture
• Continuous Improvement: Regular review and adjustment of predictors

Particularly important is a balanced approach to predictive KPIs. They significantly expand the decision-making toolkit but do not replace human judgment and strategic intuition. The art lies in combining data-driven forecasts and qualitative assessments into a coherent decision framework that enables both analytical precision and forward-thinking.`
  },
  {
    _key: 'faq_kpi_en_20',
    _type: 'object',
    question: 'How do you integrate KPIs into customer experience management?',
    answer: `Integrating KPIs into customer experience management enables systematic control and continuous optimization of customer experience across all touchpoints. A well-designed CX KPI system captures both objective service delivery and subjective customer perception, thus creating the foundation for customer-centric corporate management.

🔍 Holistic Customer Experience Metrics
• Overarching CX Indices: Net Promoter Score (NPS), Customer Satisfaction (CSAT), Customer Effort Score (CES)
• Customer Retention Metrics: Customer Lifetime Value (CLV), Retention Rate, Churn Rate, Repeat Purchase Rate
• Customer Behavior Indicators: Share of Wallet, Cross-Buying Rate, Referral Rate
• Customer Vitality: Engagement Score, Active User Rate, Usage Intensity, Feedback Willingness

🛣️ Journey-Based CX Metrics
• Touchpoint-Specific KPIs: Conversion rates, success rates, satisfaction scores per contact point
• Cross-Touchpoint Metrics: Channel switching rate, journey completion rate, drop-off points
• Journey Flow Indicators: First-time resolution, time-to-resolution, handoff efficiency
• Momentum Metrics: Next-step likelihood, journey stage conversion, buying readiness score

📊 Operationalization of CX KPIs
• Real-Time Dashboards: Live monitoring of critical customer experience dimensions
• Drill-Down Capability: Flexible deepening from aggregated KPIs to individual transactions
• Root Cause Analysis: Linking CX metrics with operational performance data
• Closed-Loop Feedback: Systematic feedback of customer responses into improvement measures

🔄 Organizational Integration
• CX Governance: Clear responsibilities for CX KPIs at all organizational levels
• Incentive Systems: Linking compensation components with customer experience metrics
• Change Management: Cultural change toward consistent customer centricity
• Cross-Functional Alignment: Harmonization of CX KPIs across departmental boundaries

Successful approaches to integrating KPIs into customer experience management are characterized by the following features:

• Voice-of-Customer Integration: Systematic inclusion of direct customer feedback
• Predictive CX Analytics: Early identification of CX problems through forward-looking indicators
• Omnichannel Perspective: Integrated view of customer experience across all channels
• Economic Linkage: Quantification of CX ROI through connection with financial metrics

Particularly important is the balance between operational CX metrics (such as response times or first-contact resolution rates) and strategic CX metrics (such as customer value or loyalty indices). The former enable tactical optimizations in daily business, while the latter make the long-term effectiveness of the CX strategy measurable. A balanced CX KPI system considers both perspectives and thus creates a comprehensive management framework for customer experience management.`
  }
]

export async function getFaqsBatch5() {
  return faqsBatch5
}
