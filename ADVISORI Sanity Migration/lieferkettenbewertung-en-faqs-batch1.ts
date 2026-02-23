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

// FAQ Batch 1 - FAQs 1-4 (English translations)
const faqsBatch1 = [
  {
    _key: `faq_${timestamp}_1`,
    _type: 'object',
    question: 'How can a comprehensive Supply Chain Risk Assessment be conducted?',
    answer: `A comprehensive Supply Chain Risk Assessment requires a structured, risk-oriented approach that considers both operational and strategic aspects. The systematic identification, assessment, and prioritization of risks forms the foundation for effective measures to minimize risks and strengthen resilience.

🔍 Preparation Phase:
• Define the scope of the analysis – determine which parts of the supply chain should be assessed (end-to-end or focused on critical segments)
• Form an interdisciplinary team with experts from procurement, logistics, quality management, compliance, and risk management
• Develop a risk-based assessment model with weighted criteria that aligns with your strategic goals
• Identify relevant data sources and ensure their accessibility
• Develop a clear methodology for assessing and prioritizing risks with defined thresholds

📊 Risk Identification and Mapping:
• Create a detailed visualization of your supply chain (Supply Chain Mapping) that includes suppliers of various tiers, production sites, transport routes, and storage locations
• Identify potential risk categories: geopolitical risks, natural disasters, supplier insolvency, quality problems, compliance violations, logistical bottlenecks, etc.
• Analyze historical data points on failures, delays, and quality problems
• Conduct structured stakeholder interviews with experts from various departments
• Use external data sources and risk indices to assess country, industry, and market risks

⚖️ Risk Assessment and Analysis:
• Assess identified risks based on probability of occurrence and potential damage extent
• Develop a risk matrix for visual representation and prioritization of risks
• Conduct scenario analyses for high-risk elements to understand impacts and cascade effects
• Identify single points of failure and critical dependencies within the supply chain
• Evaluate the effectiveness of existing controls and risk mitigation measures

📈 Measure Development and Implementation:
• Develop customized risk minimization strategies for prioritized risks
• Define clear measures with responsibilities, deadlines, and required resources
• Implement a monitoring system for continuous monitoring of risk indicators
• Develop contingency plans and escalation processes for critical risk scenarios
• Define KPIs to measure the effectiveness of risk management measures

♻️ Continuous Improvement:
• Establish a regular review process to verify and update the Risk Assessment
• Integrate lessons learned from occurred disruptions into the risk management process
• Implement systematic tracking of near-miss incidents
• Conduct regular stress tests and simulations to verify the effectiveness of measures
• Develop a culture of continuous improvement in risk management through regular training and knowledge sharing`
  },
  {
    _key: `faq_${timestamp}_2`,
    _type: 'object',
    question: 'What role does transparency play in the assessment and optimization of supply chains?',
    answer: `Transparency is a fundamental success factor for effective assessment and sustainable optimization of supply chains. It forms the basis for informed decisions, risk management, and continuous improvement. In an increasingly complex and volatile business world, supply chain transparency becomes a decisive competitive advantage.

🌐 Fundamentals of Supply Chain Transparency:
• Transparency means complete visibility across all stages of the supply chain – from raw material suppliers (Tier-n) to the end customer
• It encompasses knowledge of actors, processes, locations, transport routes, inventory levels, and dependencies
• Modern transparency goes beyond operational aspects and includes ecological, social, and governance factors (ESG)
• The degree of transparency can range from basic visibility (Who are my direct suppliers?) to complete end-to-end transparency in real-time
• Creating transparency is a continuous process, not a one-time initiative

💼 Strategic Significance:
• Transparency enables the identification of hidden risks, dependencies, and bottlenecks that would not be recognizable in isolated consideration
• It forms the basis for effective performance management and continuous improvement through fact-based decisions
• Transparent supply chains foster trust with customers, investors, and regulatory authorities and increasingly become a competitive advantage
• It enables faster responses to disruptions and changes through better predictability and adaptability
• Transparency is a prerequisite for compliance with growing regulatory requirements (LkSG, CSRD, etc.)

🛠️ Implementation Approaches:
• Development of a clear strategy with defined goals for different transparency levels and time horizons
• Building an integrated data architecture that consolidates and makes accessible information from various sources
• Implementation of modern technologies such as IoT, blockchain, and AI for data collection, validation, and analysis
• Establishment of collaboration platforms for secure and standardized information exchange with suppliers
• Use of advanced visualization tools for intuitive representation of complex supply chain structures

📊 Measurability and Benefits:
• Reduction of supply chain costs through identification of inefficiencies and optimization opportunities
• Improved planning reliability through more precise forecasts and reduced uncertainties
• Faster response capability to disruptions through real-time information and better predictability
• Strengthening brand image and customer trust through demonstrable responsibility in the supply chain
• Improved compliance and reduced liability risks through traceable due diligence processes

🔗 Challenges and Success Factors:
• Balance between detailed transparency and sensitive business information through appropriate data protection concepts
• Overcoming cultural and technical barriers with suppliers through training and supportive measures
• Development of a clear business case for transparency initiatives with measurable ROI metrics
• Creating a company-wide transparency culture through continuous communication and training
• Implementation of agile approaches with gradual improvements instead of unrealistic big-bang transformations`
  },
  {
    _key: `faq_${timestamp}_3`,
    _type: 'object',
    question: 'How can companies identify their critical suppliers and improve their resilience?',
    answer: `The identification and strengthening of critical suppliers is a central building block of every Supply Chain Resilience strategy. Unlike traditional supplier management approaches, this is not just about cost optimization or quality assurance, but about the systematic building of resilience along the entire value chain. A strategic approach encompasses both the precise identification of critical suppliers and their active development into more resilient partners.

🔍 Multi-Criteria Analysis:
• Critical suppliers should not only be identified by purchasing volume, but based on multiple factors: uniqueness of the delivered product/service, availability of alternatives, impact of a failure on operational capability, strategic importance for future developments and competitive advantages.
• A weighted scoring matrix can systematize this assessment.
• The application of network analysis techniques helps identify hidden dependencies and bottlenecks.
• Regular reassessment of criticality is necessary as business models and market conditions change.
• Cross-functional teams should be involved in the assessment to consider all perspectives.

📊 In-depth Analysis of Supplier Resilience:
• Conduct detailed assessments of identified critical suppliers that go beyond standard supplier evaluations.
• Examine their own supply chains (Tier-2/Tier-3), financial stability, business continuity plans, quality management, and capacity flexibility.
• Assess the geographic concentration of production and logistics capacities.
• Analyze historical performance during previous disruptions or crises.
• Also consider soft factors such as corporate culture, innovation capability, and willingness to cooperate.

🤝 Collaborative Development Programs:
• Develop partnership programs for joint improvement of resilience.
• This can include technical support, process optimization, joint contingency planning, or in some cases even financial support for resilience investments.
• Focus on knowledge transfer and best practice sharing between different suppliers.
• Create incentives for suppliers to improve their own resilience, such as longer-term contracts or preferred supplier status.
• Invest in relationship building at strategic and operational levels for trustful collaboration.

🔗 Contractual Safeguards:
• Integrate specific resilience requirements into supplier contracts, such as transparency obligations, stocking of critical components, definition of escalation processes, and contingency planning obligations.
• However, avoid overly restrictive conditions that could burden the supplier relationship.
• Use flexible contract structures that allow adjustments to changed circumstances.
• Implement clear KPIs and reporting requirements for continuous monitoring.
• Define processes for regular resilience reviews and joint improvement measures.

📱 Technological Integration:
• Implement shared technology platforms for improved transparency and collaborative planning.
• Advanced Supplier Relationship Management systems enable real-time insights into inventory levels, production capacities, and potential risks.
• Use IoT and sensors for real-time monitoring of critical parameters.
• Establish data exchange standards and API integrations for seamless collaboration.
• Invest in shared analytics capabilities for early detection of potential problems.`
  },
  {
    _key: `faq_${timestamp}_4`,
    _type: 'object',
    question: 'What regulatory requirements must companies consider in supply chain assessment?',
    answer: `Regulatory requirements for supply chains have increased significantly in recent years and will continue to grow in complexity. Companies must develop a systematic approach to meet these requirements while ensuring operational excellence. A proactive compliance strategy can help minimize risks and secure competitive advantages.

📜 Overview of Key Regulations:
• The German Supply Chain Due Diligence Act (LkSG) has required large companies since 2023 to comply with human rights and environmental due diligence obligations along their supply chain
• The EU Corporate Sustainability Due Diligence Directive (CSDDD) extends these requirements Europe-wide and includes additional aspects such as climate protection and good governance
• The Corporate Sustainability Reporting Directive (CSRD) requires comprehensive sustainability reporting including supply chain information
• Industry-specific regulations such as the EU Conflict Minerals Regulation or the EU Timber Regulation (EUTR) set additional requirements
• National regulations such as the UK Modern Slavery Act, the French Duty of Vigilance Law, or the US Uyghur Forced Labor Prevention Act must be considered for international supply chains

🔍 Essential Due Diligence Obligations:
• Establishment of appropriate and effective risk management for the entire supply chain
• Conducting regular risk analyses to identify potential human rights and environmental risks
• Adoption of preventive measures to avoid identified risks
• Implementation of remedial measures for occurred violations
• Establishment of a complaints procedure for potentially affected parties and whistleblowers
• Documentation and regular reporting on the fulfillment of due diligence obligations
• Development and implementation of a policy statement on the company's human rights strategy

📊 Implementation Approaches:
• Development of an integrated compliance strategy that connects supply chain regulation with other compliance areas such as corruption prevention and data protection
• Building a central supply chain register with comprehensive information on all suppliers and sub-suppliers
• Implementation of systematic due diligence processes for new and existing suppliers with risk-adjusted scope
• Use of modern technologies such as AI-supported screening tools, blockchain for traceability, and data analytics for risk assessments
• Establishment of a supplier onboarding process with clear ESG requirements and verification mechanisms

💡 Best Practices for Effective Compliance:
• Building a central governance structure with clear responsibilities for supply chain compliance
• Integration of compliance aspects into existing procurement and risk management processes
• Development of tiered approaches for different risk classes of suppliers and markets
• Use of industry initiatives and standards (e.g., Responsible Business Alliance, Together for Sustainability)
• Continuous training and awareness-raising of employees and suppliers

🤝 Collaborative Approaches:
• Participation in industry initiatives and certification systems to standardize requirements
• Collaboration with NGOs, government agencies, and other stakeholders for improved due diligence processes
• Development of joint audit programs with other industry participants to reduce multiple audits
• Promoting capacity building at suppliers in high-risk regions through training and technical support
• Establishing transparent communication with investors, customers, and other stakeholders about progress and challenges`
  }
]

export async function addFaqsBatch1() {
  console.log('Adding FAQ Batch 1 (FAQs 1-4) to Supply Chain Assessment EN...')
  
  try {
    const result = await client
      .patch('lieferkettenbewertung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch1)
      .commit()
    
    console.log(`✅ Added ${faqsBatch1.length} FAQs in batch 1`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 1:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch1().catch(console.error)
