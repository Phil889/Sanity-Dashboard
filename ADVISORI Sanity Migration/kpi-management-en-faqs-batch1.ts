import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 1-4 for KPI Management EN
export const faqsBatch1 = [
  {
    _key: 'faq_kpi_en_1',
    _type: 'object',
    question: 'What makes an effective KPI management system?',
    answer: `An effective KPI management system is characterized by strategic alignment, precision, and practical applicability. It forms the foundation for data-driven decisions and continuous performance improvements across all business areas.

🎯 Fundamental Elements and Structure
• Strategic Anchoring: Direct derivation of KPIs from corporate goals and strategy
• Balanced KPI Portfolio: Balance between financial and non-financial metrics
• Hierarchical Structure: Consistent cascading from top-level KPIs to operational level
• Cause-Effect Relationships: Clear connections between different performance indicators

📊 Characteristics of Effective Metrics
• Specificity: Clear definition and precise calculation methodology
• Measurability: Objective, traceable capture and quantification
• Action-Orientation: Direct action impulses for improvements
• Relevance: Focus on management-relevant aspects instead of data overload
• Time Reference: Clear temporal dimension and appropriate measurement intervals

🔄 Integration into Management Processes
• Structured performance review processes at all organizational levels
• Clear responsibilities and ownership for individual KPIs
• Linkage with target agreement and incentive systems
• Continuous improvement process for the KPIs themselves

📈 Visualization and Communication
• Intuitive, target-group-specific dashboards and reports
• Effective visual representation of trends, deviations, and relationships
• Contextualization through benchmarks, target values, and historical comparisons
• Accessibility of information for relevant decision-makers

Particularly important for the effectiveness of a KPI system is the right balance between stability and flexibility. On one hand, KPIs need a certain constancy to track long-term developments. On the other hand, they must be regularly reviewed and adjusted to respond to changed business requirements or market conditions.

The key to success ultimately lies in usage: A KPI system only creates value when it is actively used for decision-making and actually triggers actions. The best metric is worthless if it doesn't contribute to continuous improvement of company performance.`
  },
  {
    _key: 'faq_kpi_en_2',
    _type: 'object',
    question: 'How do you select the right KPIs for your company?',
    answer: `Selecting the right Key Performance Indicators is crucial for the success of your performance management system. The selection process should be methodical and strategy-driven to identify KPIs that have real management value for your company.

📋 Strategic Selection Approach
• Alignment with Corporate Goals: Direct derivation of KPIs from strategic and operational objectives
• Top-Down & Bottom-Up: Combination of management-level targets and departmental expertise
• Value Creation Focus: Concentration on performance drivers and critical success factors
• Stakeholder Perspectives: Consideration of various interest groups (customers, employees, owners)

🔍 Evaluation Criteria for Potential KPIs
• Strategic Relevance: Direct linkage with strategic goals and priorities
• Influenceability: Ability to actively control and improve through actions
• Data Availability: Practical measurability with reasonable effort
• Understandability: Clarity and traceability for all participants
• Manipulation Resistance: Robustness against unwanted optimizations at the expense of other areas

📊 Balanced KPI Portfolio
• Balance of Leading (forward-looking) and Lagging (backward-looking) indicators
• Mix of financial and non-financial metrics
• Combination of effectiveness and efficiency metrics
• Consideration of different time horizons (short-term vs. long-term impact)

🔄 Systematic Selection Process
• Goal Definition: Clarification of strategic objectives pursued with the KPIs
• Brainstorming: Collection of potential metrics in cross-functional workshops
• Prioritization: Evaluation and filtering based on defined criteria
• Validation: Review for practicability and meaningfulness

For KPI selection, the general rule is: Less is more. Most companies achieve the best results with 5-7 strategic top KPIs, which can be further differentiated at deeper organizational levels if needed. Overloading with too many metrics often leads to information overload and diminishes management effectiveness.

Equally important is regular review of the KPI portfolio. What was relevant yesterday may not be today. Periodic evaluation (at least annually or during major strategic changes) ensures your KPIs keep pace with corporate strategy and market requirements.`
  },
  {
    _key: 'faq_kpi_en_3',
    _type: 'object',
    question: 'What typical challenges exist when implementing a KPI system?',
    answer: `Introducing a KPI management system is a complex undertaking that can be associated with numerous challenges. Awareness of these potential pitfalls and proactive solution approaches are crucial for successful implementation.

🎯 Strategic Challenges
• Missing linkage with corporate strategy and business objectives
• Difficulties in identifying truly relevant performance drivers
• Unclear prioritization and too many metrics ("KPI inflation")
• Insufficient coordination between different organizational levels and areas

📊 Methodological and Technical Challenges
• Complex or inconsistent calculation methods for metrics
• Data quality problems and insufficient data integrity
• Lack of integrated data infrastructure for KPI reporting
• Too much manual effort for data collection and report creation

👥 Organizational and Cultural Challenges
• Resistance to transparency and performance-oriented management
• Insufficient management commitment ("Tone from the Top")
• Lack of clarity about responsibilities and ownership for KPIs
• Missing know-how and insufficient training of participants

🔄 Implementation and Usage Challenges
• Too complex or technocratic implementation approach
• Insufficient involvement of later users in the design
• Difficulties integrating into existing management processes
• Missing consequences for target deviations ("KPIs as an end in themselves")

Successful approaches to overcoming these challenges include:

• Strong leadership and clear commitment from management for the KPI system
• Participatory approach with early involvement of all relevant stakeholders
• Iterative implementation with pilot phases and continuous improvement
• Investment in user-friendly visualization and reporting tools
• Comprehensive communication and training on purpose and benefits of the KPI system

Particularly important is a balanced approach between top-down specifications and bottom-up participation. Strategic alignment must be specified by corporate management, while concrete design and implementation should be supported by the departments. Only when all participants recognize the benefits of the KPI system and can actively contribute to its design will it be successful in the long term.`
  },
  {
    _key: 'faq_kpi_en_4',
    _type: 'object',
    question: 'How do you design effective KPI dashboards and reports?',
    answer: `Effective KPI dashboards and reports are crucial for the usability and effectiveness of a KPI management system. Through intuitive visualization and target-group-appropriate preparation, they transform data into action-relevant information that enables informed decisions.

📊 Basic Principles of Dashboard Design
• Clarity: Focus on essential information without overload
• Hierarchy: Intuitive visual organization with clear prioritization
• Context: Classification through benchmarks, target values, and historical comparisons
• Consistency: Uniform design principles and presentation formats

👥 Target Group Orientation
• Board Level: Highly aggregated strategic KPIs with focus on deviations
• Middle Management: More detailed tactical metrics with root cause analyses
• Operational Level: Granular real-time indicators with direct action reference
• Adaptation of detail level, update frequency, and presentation format to user needs

🎨 Effective Visualization Techniques
• Targeted selection of appropriate chart types for different data types
• Use of colors and visual accents for status indication (e.g., traffic light system)
• Use of sparklines for compact trend representations
• Balance between information density and clarity

🔄 Interactivity and Drill-Down Functions
• Ability to deepen overview information as needed
• Filter options for different analysis levels (time, region, product)
• Customizable dashboards for individual information needs
• Prominent visualization of threshold exceedances and deviations

When designing effective dashboards and reports, the following best practices should be observed:

• Involvement of later users in the design process
• Focus on action relevance rather than pure data visualization
• Continuous optimization based on user feedback
• Consideration of technical framework conditions and access options

Particularly important is that dashboards not only inform but also encourage action. This can be supported through clear visual hierarchies, explicit action recommendations, and highlighting of deviations or anomalies. A well-designed dashboard should convey essential information at a glance while also offering the ability to dive deeper into details when needed.`
  }
]

export async function getFaqsBatch1() {
  return faqsBatch1
}
