import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 5-8 for KPI Management EN
export const faqsBatch2 = [
  {
    _key: 'faq_kpi_en_5',
    _type: 'object',
    question: 'How do you integrate KPIs into existing business processes?',
    answer: `Successfully integrating KPIs into existing business processes is crucial to generating actual business value from metrics. Systematic anchoring of KPIs in decision-making and management processes ensures that performance measurement doesn't become an end in itself but drives continuous improvements.

🔄 Process-Oriented KPI Integration
• Process Analysis: Identification of critical process steps and performance drivers
• Process-Accompanying Measurement Points: Embedding KPI collection into the process flow
• Process Responsibility: Assignment of clear KPI ownership to process owners
• Process Improvement: Establishment of KPI-based optimization cycles

📋 Structured Performance Review Processes
• Regular review meetings at various organizational levels
• Standardized agenda with focus on deviation analysis and action derivation
• Clear escalation paths for critical target deviations
• Documentation of decisions and actions with responsibilities

👥 Leadership System and Incentive Structures
• Integration of KPIs into target agreement processes and employee discussions
• Linking relevant KPIs with compensation and incentive systems
• Development of a balanced KPI scorecard for executives
• Balance between individual and team-based performance targets

🚀 Change Management and Cultural Anchoring
• Transparent communication of purpose and benefits of the KPI system
• Training and empowerment of all participants for effective KPI usage
• Development of a data-driven decision culture
• Promotion of personal responsibility and continuous improvement thinking

The following best practices have proven effective for integrating KPIs into business processes:

• Pragmatic Approach: Start with few but relevant KPIs and gradual expansion
• Involvement of Operational Levels: Participatory design of KPI usage in daily business
• Automation: Reduction of manual effort for data collection and reporting
• Regular Reflection: Periodic review of relevance and effectiveness of KPIs

Particularly important is a balanced approach to KPIs as a leadership instrument. While they should communicate clear performance expectations and create transparency on one hand, they must not become a rigid control system that restricts creativity and personal responsibility on the other. The art lies in using KPIs as a compass for continuous improvement without creating excessive "number orientation."`
  },
  {
    _key: 'faq_kpi_en_6',
    _type: 'object',
    question: 'What role do data quality and data governance play in KPI management?',
    answer: `Data quality and data governance are fundamental success factors for effective KPI management. Only on the basis of trustworthy, consistent data can KPIs develop their management effect and serve as a reliable foundation for business-critical decisions.

🎯 Importance of Data Quality for KPIs
• Trustworthiness: Reliable data as the basis for acceptance and use of KPIs
• Decision Relevance: Precise data for informed strategic and operational decisions
• Comparability: Consistent data collection for valid time series and benchmarks
• Resource Efficiency: Avoidance of rework and discussions about data correctness

📊 Central Dimensions of Data Quality
• Correctness: Agreement of data with actual values
• Completeness: Availability of all data required for KPI calculation
• Timeliness: Timely availability of data for current decisions
• Consistency: Freedom from contradictions in data from different sources
• Granularity: Appropriate level of detail for different analysis needs

🔍 Effective Data Governance for KPIs
• Clear data definitions and calculation rules for all KPIs
• Unambiguous responsibilities for data quality and data delivery
• Documented data processes from collection to KPI calculation
• Transparent rules for data access, usage, and security
• Regular review and improvement of data quality

⚙️ Measures to Ensure Data Quality
• Implementation of automated data validations and plausibility checks
• Establishment of systematic processes for error correction and data cleansing
• Training of all participants in correct data collection and maintenance
• Regular data quality audits and continuous improvement processes

Successful approaches for data-based KPI management include:

• Single Source of Truth: Establishment of a unified, binding data source for KPIs
• Metadata Management: Systematic documentation of data definitions and origins
• Data Consistency Checks: Regular cross-validation between different systems
• Feedback Loops: Systematic feedback processes for identified data quality problems

Particularly important is an appropriate, risk-oriented approach to data quality and governance. The effort for data quality assurance should be in reasonable proportion to the importance of the respective KPIs. Stricter quality requirements are justified for highly critical strategic metrics than for operational indicators with less significance. A pragmatic approach prevents excessive bureaucracy and focuses resources on the truly decisive data points.`
  },
  {
    _key: 'faq_kpi_en_7',
    _type: 'object',
    question: 'How do strategic, tactical, and operational KPIs differ?',
    answer: `An effective KPI system encompasses different metric levels that address different organizational levels, time horizons, and decision types. The distinction between strategic, tactical, and operational KPIs is crucial for a coherent, end-to-end performance management system.

🔝 Strategic KPIs
• Focus: Long-term corporate goals and strategic competitive position
• Time Horizon: Multi-year (3-5 years) with quarterly or annual measurement
• Target Group: Top management, board, supervisory bodies
• Characteristics: Highly aggregated, company-wide perspective, mostly outcome-oriented
• Examples: EBITDA margin, market share, Customer Lifetime Value, innovation rate

⚙️ Tactical KPIs
• Focus: Medium-term goals and initiatives for strategy implementation
• Time Horizon: Monthly to annually, with monthly or quarterly measurement
• Target Group: Middle management, division and department heads
• Characteristics: Area-related, balanced mix of result and driver metrics
• Examples: Sales pipeline, productivity metrics, quality metrics, project milestones

🔧 Operational KPIs
• Focus: Daily business and short-cycle process control
• Time Horizon: Daily to monthly, with daily or weekly measurement
• Target Group: Operational managers, team leaders, process owners
• Characteristics: Process-oriented, detailed, strongly action-oriented, real-time character
• Examples: Throughput times, error rates, utilization metrics, service level metrics

🔄 Relationships and Cascading
• Vertical Integration: Consistent derivation of operational KPIs from tactical and strategic goals
• Causal Relationships: Understanding of cause-effect relationships between different KPI levels
• Aggregation Paths: Clear rules for consolidating operational data to higher management levels
• Time Horizon Alignment: Coordination of different measurement frequencies and review cycles

When designing a multi-level KPI system, the following best practices should be observed:

• Consistency: Contradiction-free goals and KPIs across all levels
• Completeness: Coverage of all relevant performance dimensions at each level
• Proportionality: Appropriate number of KPIs for each management level
• Traceability: Transparent relationships between metric levels

Particularly important is a balanced relationship between strategic coherence and operational flexibility. While clear alignment of all KPIs with corporate strategy must be ensured on one hand, the different organizational levels need sufficient design freedom for their specific management requirements on the other. A good KPI system creates orientation without overly narrow specifications and enables self-responsible management within strategic guidelines.`
  },
  {
    _key: 'faq_kpi_en_8',
    _type: 'object',
    question: 'How do you establish a continuous improvement process for KPIs?',
    answer: `A KPI system is never static but requires continuous adaptation and development. A systematic improvement process ensures that your KPI management remains permanently relevant and optimally aligned with changed business requirements and market conditions.

🔄 Fundamentals of the KPI Improvement Process
• Regular Evaluation: Systematic review of KPI relevance and effectiveness
• Feedback Integration: Structured capture and evaluation of user feedback
• Adaptability: Established processes for the evolution of the KPI system
• Learning Orientation: Open error culture and continuous knowledge building

📋 Structured Review Process
• Quarterly review of operational and tactical KPIs for timeliness and usefulness
• Annual strategic KPI review as part of strategy planning
• Formalized criteria for KPI evaluation (relevance, measurement quality, usage)
• Balanced Scorecard approach for holistic consideration of the KPI portfolio

🛠️ Methodological Approaches to KPI Optimization
• KPI Audit: Systematic analysis of metric quality and usage
• Root Cause Analysis for problematic or underutilized KPIs
• Benchmarking with best practices from the industry and other companies
• Design Thinking Workshops for redesigning KPIs and dashboards

📈 Evolution Stages of KPI Management
• Reactive Phase: Initial introduction of basic KPIs and reporting structures
• Stabilization Phase: Standardization and improvement of data quality
• Proactive Phase: Forward-looking KPIs and trending analyses
• Strategic Phase: Complete integration into strategic decision processes
• Innovative Phase: Use of advanced analytics and AI for predictive KPIs

Proven practices for a successful KPI improvement process include:

• Dedicated Responsibility: Clear assignment of responsibility for KPI development
• Participatory Approach: Involvement of various stakeholders in the improvement process
• Empirical Validation: Data-driven verification of the effectiveness of KPI adjustments
• Incremental Change: Preference for gradual improvements over radical changes

Particularly important is the balance between stability and change. On one hand, KPIs need a certain constancy to capture long-term trends and enable meaningful comparisons. On the other hand, they must be flexible enough to respond to changed business priorities and new strategic challenges. A well-designed improvement process creates this balance by ensuring stability at the core while enabling continuous optimization.`
  }
]

export async function getFaqsBatch2() {
  return faqsBatch2
}
