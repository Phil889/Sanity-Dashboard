import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
})

const timestamp = Date.now()

// FAQ Batch 3 - FAQs 9-12 (English translations)
const faqsBatch3 = [
  {
    _key: `faq_${timestamp}_9`,
    _type: 'object',
    question: 'How can companies build a resilient supply chain that withstands disruptions?',
    answer: `Building a resilient supply chain has become a strategic priority given increasing global uncertainties. Resilience means not only returning quickly to normality after disruptions, but also the ability to actively adapt to changed conditions and emerge stronger from crises.

🏗️ Basic Principles of Resilient Supply Chains:
• Development of a balanced balance between efficiency and redundancy, with critical components and processes secured by strategic buffers
• Implementation of flexibility through modular structures that enable rapid reconfigurations of the supply chain
• Creating transparency along the entire value chain for quick decision-making and responsiveness
• Promoting collaboration and integration with key suppliers and partners through joint planning and risk management processes
• Development of a resilience culture that promotes continuous learning and adaptability at all levels

🔄 Diversification Strategies:
• Implementation of a multi-sourcing strategy for critical components with deliberate geographic distribution
• Development of near-shoring and friend-shoring concepts to reduce geopolitical risks
• Promotion of alternative transport routes and modes to minimize logistical bottlenecks
• Building dual-tooling capacities for critical production processes and components
• Implementation of flexible product designs that enable rapid material substitutions

📋 Risk Management and Planning:
• Conducting regular end-to-end risk assessments with detailed analysis of cascade effects
• Development and regular testing of contingency plans for various disruption scenarios
• Implementation of Advanced Planning Systems with integrated risk factors and scenario analyses
• Building strategic inventory of critical components based on systematic risk analysis
• Promoting financial hedging mechanisms such as insurance or hedging strategies

⚡ Rapid Response Capability:
• Implementation of a proactive early warning system for timely detection of potential disruptions
• Building a central crisis management structure with clear decision-making authority and escalation paths
• Development of predefined response protocols for typical disruption scenarios
• Establishment of flexible capacity adjustment mechanisms in production and logistics
• Creating fast communication channels with all relevant supply chain stakeholders

🚀 Long-term Resilience Strengthening:
• Integration of resilience criteria into strategic decision processes such as site selection and supplier selection
• Promoting continuous innovation and digitalization to increase adaptability
• Development of collaborative ecosystems with suppliers, customers, and even competitors for joint resilience strengthening
• Building a learning organization with systematic evaluation and integration of lessons learned
• Measurement and continuous improvement of resilience capability based on defined KPIs and metrics`
  },
  {
    _key: `faq_${timestamp}_10`,
    _type: 'object',
    question: 'What strategic approaches exist for supplier diversification and when are they appropriate?',
    answer: `Supplier diversification is a central element of modern risk management strategies in procurement. However, it should not be implemented across the board, but rather differentiated and strategically. The right balance between diversification and bundling requires a nuanced consideration of various factors and procurement categories.

🎯 Strategic Basic Principles:
• Development of a differentiated diversification strategy based on critical factors such as material availability, market structure, strategic importance, and risk exposure
• Segmentation of the supplier portfolio by strategic importance and risk profile as a basis for specific diversification approaches
• Consideration of various diversification dimensions: geographic distribution, size structure, technology platforms, business models
• Integration of the diversification strategy into overall procurement and risk management
• Weighing diversification benefits against increased complexity and potential efficiency losses

🌐 Geographic Diversification:
• Systematic analysis of country risks considering political stability, legal frameworks, infrastructure quality, and natural disaster potential
• Strategic distribution of the supplier base across different regions to minimize common risk exposures
• Implementation of region-for-region strategies to reduce logistical risks and CO2 footprint
• Consideration of free trade agreements and customs regimes in geographic diversification
• Integration of near-shoring and friend-shoring concepts to reduce geopolitical risks

🔀 Multi-Sourcing Strategies:
• Dual/Multiple Sourcing: Distribution of demand across two or more suppliers with actively maintained business relationships
• Parallel Sourcing: Procurement of different variants or components from different suppliers
• Backup Sourcing: Maintaining inactive relationships with alternative suppliers for emergency situations
• Hybrid Sourcing: Combination of internal manufacturing with external purchasing for risk minimization
• Development of optimal allocation strategies considering supplier performance and strategic goals

⚖️ Implementation Approaches:
• Conducting a detailed should-cost analysis to evaluate the financial implications of various diversification options
• Development of a structured onboarding process for new suppliers with clear qualification requirements
• Implementation of a systematic qualification and validation process for alternative suppliers
• Establishment of dynamic allocation models with flexible adjustment of supplier shares based on performance and risk assessment
• Building the necessary internal resources and competencies for effective management of a diversified supplier portfolio

🔍 Case-specific Assessment:
• High-technology markets with few specialized providers: Focus on deep partnership with leading providers supplemented by development of alternative technology paths
• Commodity markets with many interchangeable providers: Implementation of Dynamic Sourcing and spot-buying strategies for optimal market utilization
• Critical components with complex qualification: Dual sourcing with clear primary/secondary role definition and regular rotation
• Strategic innovation partners: Selective single-sourcing strategy with intensive hedging mechanisms and joint risk minimization
• New or volatile markets: Gradual diversification with continuous market observation and flexible adjustment`
  },
  {
    _key: `faq_${timestamp}_11`,
    _type: 'object',
    question: 'How should companies design change management in the context of a supply chain transformation?',
    answer: `The transformation of supply chains requires, in addition to technical and process changes, particularly systematic change management. The success of profound transformation initiatives depends significantly on how well it succeeds in taking the affected people along and anchoring the changes in the organizational culture.

🧭 Strategic Foundation:
• Development of a clear, compelling vision for the transformed supply chain with concrete benefits for all stakeholders
• Creating a deep understanding of the need for change through transparent communication of drivers and risks
• Establishment of a strong leadership coalition with representatives from all affected functions and hierarchy levels
• Integration of change management as an integral part of transformation planning from the beginning
• Consideration of cultural differences in international supply chain transformations

👥 Stakeholder Management:
• Conducting a comprehensive stakeholder analysis to identify key actors, their interests, and potential resistance
• Development of target group-specific communication and engagement strategies for different stakeholder groups
• Focusing special attention on middle management as a critical interface between strategic vision and operational implementation
• Early involvement of external partners such as suppliers, logistics service providers, and customers in the transformation process
• Creating platforms for continuous dialogue and feedback throughout the entire transformation process

📣 Communication and Engagement:
• Implementation of a multi-level communication strategy with consistent core messages and target group-specific elements
• Use of various communication channels and formats for maximum reach and effectiveness
• Establishment of a regular rhythm of communication with transparent progress reporting
• Promoting active co-creation opportunities through participative formats such as workshops, focus groups, and innovation competitions
• Building internal success stories and their active dissemination to strengthen willingness to change

🎓 Competence Building and Enablement:
• Conducting a detailed skills gap analysis to identify competency gaps in the transformed supply chain
• Development of comprehensive training and development programs with various learning formats and paths
• Promoting peer learning and knowledge transfer through Communities of Practice and mentoring programs
• Implementation of Performance Support Tools to support the application phase of new processes and systems
• Creating special development paths for talent pools with key competencies for the future supply chain

📊 Measuring and Securing Transformation Success:
• Development of specific KPIs to measure change readiness and transformation progress
• Conducting regular pulse checks and more comprehensive Change Readiness Assessments
• Identification and special support of Change Agents and Early Adopters in the organization
• Implementation of a structured approach to anchoring new behaviors in daily routines
• Establishment of mechanisms for continuous learning and adaptation of the transformation strategy`
  },
  {
    _key: `faq_${timestamp}_12`,
    _type: 'object',
    question: 'How can ESG criteria be effectively integrated into supply chain assessment?',
    answer: `The integration of ESG criteria (Environmental, Social, Governance) into supply chain assessment has evolved from a compliance obligation to a strategic imperative. A systematic integration of these factors not only enables the minimization of risks but also creates competitive advantages through differentiation and innovation.

🧩 Strategic Integration:
• Development of a clear ESG strategy for the supply chain that is aligned with the overarching corporate strategy and stakeholder expectations
• Definition of specific, measurable ESG goals for the supply chain with clear responsibilities and timelines
• Integration of ESG criteria into strategic procurement decisions and category management processes
• Differentiation of ESG requirements by supplier categories, risk profiles, and development potentials
• Establishment of a Cross-Functional ESG Steering Committee with representatives from procurement, sustainability, compliance, and operational functions

📋 Assessment Framework and Methodology:
• Development of a structured ESG assessment framework with specific criteria for all three dimensions (Environment, Social, Governance)
• Environment: CO2 footprint, energy efficiency, water consumption, waste management, biodiversity, chemical management
• Social: Working conditions, health protection, human rights, diversity, community engagement, fair trade practices
• Governance: Compliance systems, anti-corruption, transparency, risk management, data protection, ethics programs
• Application of a risk-based approach with differentiated audit depths depending on supplier category and risk exposure
• Definition of clear assessment methods and scoring models with transparent weighting factors

🔍 Data Collection and Validation:
• Implementation of a multi-stage data collection process with self-disclosures, document review, and on-site audits
• Development of standardized questionnaires and assessment tools for efficient data collection
• Use of third-party providers and platforms for independent validation and benchmarking
• Integration of AI-based tools for analysis of unstructured data and automated plausibility checking
• Implementation of robust data management with clear responsibilities for data quality and timeliness

📈 Supplier Development and Collaboration:
• Development of differentiated supplier development programs based on ESG assessment results
• Promotion of collaborative approaches for joint improvement of ESG performance
• Implementation of incentive programs for demonstrable ESG improvements
• Development of capacity-building programs for smaller suppliers with limited resources
• Promotion of best practice sharing and peer learning within the supplier network

🔄 Continuous Improvement and Reporting:
• Establishment of regular monitoring and review processes for ESG performance in the supply chain
• Integration of ESG KPIs into existing performance management systems and executive dashboards
• Development of structured reporting for internal and external communication of ESG performance
• Use of international standards and frameworks (GRI, SASB, TCFD) for consistent and comparable reporting
• Implementation of continuous improvement processes with feedback loops and adjustment mechanisms`
  }
]

export async function addFaqsBatch3() {
  console.log('Adding FAQ Batch 3 (FAQs 9-12) to Supply Chain Assessment EN...')
  
  try {
    const result = await client
      .patch('lieferkettenbewertung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch3)
      .commit()
    
    console.log(`✅ Added ${faqsBatch3.length} FAQs in batch 3`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 3:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch3().catch(console.error)
