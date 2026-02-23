import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 13-16 for KPI Management EN
export const faqsBatch4 = [
  {
    _key: 'faq_kpi_en_13',
    _type: 'object',
    question: 'How do you design industry-specific KPI systems?',
    answer: `Developing industry-specific KPI systems requires a deep understanding of the respective business models, value chains, and critical success factors. While basic KPI principles are valid across industries, the relevant performance metrics and their prioritization vary considerably depending on the industry context.

🏭 Manufacturing Industry and Production
• Productivity Metrics: OEE (Overall Equipment Effectiveness), throughput times, setup times
• Quality Metrics: First Pass Yield, scrap and rework rates, product defect rates
• Supply Chain KPIs: Delivery reliability, inventory coverage, throughput time, On-Time-In-Full (OTIF)
• Cost Efficiency: Material utilization, energy consumption per unit, maintenance costs

🏦 Financial Services and Banks
• Portfolio Performance: Risk-Adjusted Return on Capital (RAROC), Non-Performing Loan Ratio
• Customer Metrics: Customer Lifetime Value, cross-selling rate, Digital Adoption Rate
• Efficiency Indicators: Cost-Income Ratio, processing times, Straight-Through-Processing Rate
• Risk Metrics: Liquidity coverage ratio, default rates, capitalization level

🛒 Retail and Consumer Goods
• Space Productivity: Revenue per square meter, conversion rate, basket size
• Inventory Management: Inventory turnover, out-of-stock rate, overstock
• Sales Metrics: Same-Store-Sales Growth, revenue per employee, promotion effectiveness
• Customer Metrics: Customer retention rate, Net Promoter Score, Repeat Purchase Rate

💻 Technology and Software
• SaaS Metrics: Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Churn Rate
• Product Development: Time-to-Market, Feature Adoption Rate, Defect Density
• Usage Metrics: Daily Active Users (DAU), User Engagement, Retention Rate
• DevOps KPIs: Deployment Frequency, Lead Time for Changes, Mean Time to Recovery

When developing industry-specific KPI systems, the following aspects should be considered:

• Industry Standards: Orientation to established benchmarks and best practices of the respective industry
• Competitive Differentiation: Identification and focus on specific competitive advantages
• Value Chain: Coverage of all critical areas of industry-specific value creation
• Disruption Risks: Consideration of potential market changes and innovation trends

Particularly important is the balance between industry-standard standards and company-specific characteristics. Standard metrics enable benchmarking and comparability, while individual KPIs should reflect the specific success factors and differentiating features of one's own business model. A well-designed industry-specific KPI system combines both and thus creates a meaningful basis for corporate management.`
  },
  {
    _key: 'faq_kpi_en_14',
    _type: 'object',
    question: 'What role do KPIs play in digital transformation processes?',
    answer: `Key Performance Indicators play a crucial role in managing and measuring the success of digital transformation processes. They create transparency, focus the organization on the most important change goals, and enable objective evaluation of transformation progress in a highly complex, multi-layered change landscape.

🎯 Strategic Alignment of Digital Transformation
• Transformation Goal KPIs: Metrics for overarching digitalization goals (e.g., share of digital revenues)
• Digital Maturity Metrics: Indices for measuring digital maturity of various business areas
• Innovation Metrics: Capture of innovation rate, time-to-market of new digital offerings
• Cultural Change Indicators: Measurement of cultural change toward more agile, digital ways of working

👥 Customer-Oriented Digitalization Metrics
• Digital Customer Experience: CSAT, NPS, and CES for digital customer interfaces
• Channel Migration Rates: Shift of customer interactions to digital channels
• Conversion Metrics: Effectiveness of digital touchpoints in the customer journey
• Adoption KPIs: Usage rates of digital services and self-service offerings

⚙️ Process and Efficiency Metrics
• Automation Level: Share of fully automated process steps
• Process Speed: Reduction of end-to-end throughput times through digitalization
• Paperlessness Index: Reduction of physical documents and manual signatures
• Flexibility Metrics: Adaptability and scalability of digitalized processes

💡 Technology and Data Metrics
• Legacy Replacement: Progress in modernizing outdated systems
• API Ecosystem: Number and usage of APIs for internal and external integration
• Data Utilization Level: Extent of active use of available data for business decisions
• Cloud Migration Rate: Progress in moving applications and data to the cloud

Successful approaches for KPI management in digitalization projects are characterized by the following features:

• Balanced Transformation Scorecard: Balanced consideration of different dimensions of digital transformation
• Sprint-Oriented Measurement: Regular review and adjustment of KPIs in the agile transformation process
• Linked Metrics: Visualization of relationships between digital enabler KPIs and business results
• Transformation Roadmap Alignment: Linking KPIs with milestones of the digitalization roadmap

Particularly important is the right balance between result KPIs (What was achieved?) and transformation KPIs (How well does the change process work?). While the former measure business benefits and ROI of digitalization, the latter capture the speed, quality, and sustainability of the change process itself. Both together provide a complete picture of the success of digital transformation.`
  },
  {
    _key: 'faq_kpi_en_15',
    _type: 'object',
    question: 'How can KPIs be effectively combined with OKRs (Objectives and Key Results)?',
    answer: `The combination of KPIs (Key Performance Indicators) and OKRs (Objectives and Key Results) enables a particularly effective performance management system that encompasses both stable metrics for operational business and focused, ambitious goals for change and innovation.

🔄 Complementary Roles in Performance Management
• KPIs: Continuous measurement of core performance in established business areas and processes
• OKRs: Focused, time-limited goal setting for change, innovation, and strategic initiatives
• KPIs show "Business as Usual": Performance in daily business and long-term trends
• OKRs define "Change the Business": Transformative goals and their concrete measurement

📊 Differences and Synergies
• Time Horizon: KPIs are permanent, OKRs typically quarterly or for a project period
• Ambition Level: KPIs with realistic target values, OKRs deliberately challenging ("stretch goals")
• Coverage: KPIs for all core processes, OKRs selectively for strategic priorities
• Measurement Approach: KPIs mostly with absolute targets, OKRs with percentage goal achievement (0-100%)

🎯 Integrated Management Approach
• KPIs as Starting Point: Identification of improvement needs based on KPI development
• OKRs as Improvement Lever: Targeted initiatives to improve underperforming KPIs
• Impact Measurement: Tracking of OKR effects on underlying KPIs
• Life Cycles: Transfer of successful OKR metrics to permanent KPIs after project completion

👥 Organizational Integration
• Governance: Clear responsibilities and processes for KPI and OKR management
• Review Cycles: Coordinated rhythms for KPI monitoring and OKR check-ins
• Cascading: Consistent linking of company, division, and team OKRs with relevant KPIs
• Incentive Systems: Balanced consideration of KPI results and OKR progress

An effective approach to combining KPIs and OKRs includes the following elements:

• Strategic Dashboard: Integrated view of long-term KPI development and current OKR progress
• "North Star" Metrics: Overarching metrics that guide both KPI monitoring and OKR definition
• Aligned Autonomy: Common understanding of KPIs with simultaneous freedom in OKR definition
• Retrospectives: Regular reflection on interactions between KPIs and OKRs

Particularly important is clear communication of the different roles and expectations for KPIs and OKRs. While full goal achievement (100%) or overachievement is often expected for KPIs, achievement of 60-70% is often already considered success for OKRs due to their deliberately ambitious character. This different "success logic" must be understood and accepted in the organization to avoid misunderstandings and frustration.`
  },
  {
    _key: 'faq_kpi_en_16',
    _type: 'object',
    question: 'How do you develop an ROI-based business case for KPI management initiatives?',
    answer: `Developing a convincing, ROI-based business case for KPI management initiatives is crucial to justify the necessary investments and gain management support. A systematic approach to quantifying expected benefits and comparing them with required investments creates a solid decision basis.

💰 Identification and Quantification of Benefits
• Quality Improvements: Reduction of errors, scrap, complaints, and their financial consequences
• Efficiency Gains: Process optimizations through data-based decisions and early problem detection
• Revenue Growth: Better customer orientation and more targeted market development through meaningful KPIs
• Risk Minimization: Early detection and avoidance of compliance violations, quality problems, or market risks
• Resource Optimization: More targeted use of personnel, capital, and other resources

📊 Cost Components of KPI Management
• Implementation Costs: Software, consulting, internal resources for introduction
• Ongoing Operating Costs: Licenses, support, maintenance, data management
• Personnel Effort: Time for data collection, analysis, reporting, and action derivation
• Change Management: Training, communication, overcoming resistance
• Opportunity Costs: Alternative uses for deployed resources

📝 Structured ROI Calculation Approach
• Baseline Determination: Capture of status quo as starting point for benefit calculation
• Benefit Quantification: Monetary valuation of expected improvements in various areas
• Cost Compilation: Complete capture of all direct and indirect cost components
• ROI Calculation: Determination of payback period, Return on Investment, and Net Present Value
• Sensitivity Analysis: Verification of business case robustness under changed assumptions

🔍 Evidence-Based Argumentation
• Internal Reference Projects: Documented successes of similar initiatives in own company
• External Benchmarks: Industry studies and success examples from comparable companies
• Pilot Projects: Targeted validation of assumptions through smaller preliminary implementations
• Expert Assessments: Evaluations from departments, consultants, or analysts
• Scientific Studies: Research results on benefits of effective performance measurement systems

Successful business cases for KPI management initiatives are characterized by the following features:

• Phase Orientation: Gradual approach with early quick wins to finance later phases
• Realistic Assumptions: Conservative estimates of benefits and complete cost capture
• Qualitative Supplement: Consideration of hard-to-quantify advantages like better decision quality
• Risk Transparency: Open communication of assumptions, dependencies, and success prerequisites

Particularly important is linking the KPI business case with the overarching strategic priorities and business goals of the company. The clearer the contribution of the KPI system to central corporate goals such as growth, profitability, or customer satisfaction is elaborated, the more convincing the investment logic appears to decision-makers.`
  }
]

export async function getFaqsBatch4() {
  return faqsBatch4
}
