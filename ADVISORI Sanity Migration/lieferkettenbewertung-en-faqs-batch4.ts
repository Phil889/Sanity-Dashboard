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

// FAQ Batch 4 - FAQs 13-16 (English translations)
const faqsBatch4 = [
  {
    _key: `faq_${timestamp}_13`,
    _type: 'object',
    question: 'What role does digitalization play in the optimization and assessment of supply chains?',
    answer: `Digitalization has evolved from an optional competitive advantage to a fundamental prerequisite for effective supply chain assessment and optimization. Modern digital technologies enable a paradigm shift from reactive to proactive and predictive supply chain management.

🔄 Transformative Effects of Digitalization:
• Transition from silo-based, historical views to integrated real-time analyses with forward-looking capabilities
• Change from manual, error-prone processes to automated, scalable, and consistent workflows
• Development of supply chain transparency across multiple tiers instead of fragmented visibility only on direct suppliers
• Shift from static, periodic assessments to continuous monitoring and dynamic adjustments
• Transformation of isolated optimization initiatives to holistic, data-driven improvements of the entire supply chain

📊 Core Areas of Digital Transformation:
• Data integration and management: Creating a unified data basis across heterogeneous systems, company boundaries, and supply chain stages
• Analytics and AI: Using advanced analysis methods for predictive insights, pattern recognition, and automated decision support
• Autonomous processes: Implementation of self-correcting, rule-based workflows with minimal manual intervention
• Collaborative platforms: Establishing digital ecosystems for seamless collaboration and information exchange between all supply chain partners
• Integrated control: Development of digital Supply Chain Twins and Control Towers for holistic monitoring and control

🛠️ Technology Basis for Digital Supply Chains:
• Internet of Things (IoT): Use of networked sensors for real-time tracking of goods, condition monitoring, and automated data collection
• Cloud Computing: Use of scalable infrastructures for flexible data processing, storage, and access across company boundaries
• Big Data Analytics: Application of advanced analysis methods for processing large, heterogeneous data volumes for valuable insights
• Artificial Intelligence: Use of Machine Learning and Deep Learning for forecasts, anomaly detection, and optimization algorithms
• Blockchain: Implementation of distributed ledger technologies for tamper-proof traceability and smart contracts

📱 Practical Application Areas:
• Risk management: Real-time monitoring of global risk factors, proactive risk identification, and automated risk assessment
• Supplier management: Digital onboarding processes, automated performance assessments, and AI-supported Supplier Intelligence
• Demand and capacity planning: More precise demand forecasts, automated capacity matching, and scenario simulations
• Quality management: Real-time quality monitoring, predictive quality problems, and digital audit trails
• Sustainability management: Automated ESG data collection, digital emission calculations, and sustainability dashboards

🚀 Success Factors for Digital Transformation:
• Development of a clear digital strategy with defined business case and measurable goals
• Focus on data quality and governance as a fundamental element of digital supply chains
• Phased implementation with quick wins and continuous value creation
• Building digital competencies and change management for successful adoption
• Establishing partnerships and ecosystems for access to innovative technologies and best practices`
  },
  {
    _key: `faq_${timestamp}_14`,
    _type: 'object',
    question: 'How can quality be systematically ensured and assessed in the supply chain?',
    answer: `Quality assurance in the supply chain has evolved from a downstream control function to an integrated, preventive management approach. Systematic quality assurance across the entire supply chain requires a holistic concept that encompasses both technical and organizational aspects.

🧩 Strategic Foundations:
• Development of a comprehensive quality strategy for the entire supply chain with clearly defined quality goals and standards
• Integration of quality aspects into supplier selection and development as a fundamental criterion
• Consideration of quality aspects in the design of products, processes, and supply chain structures (Quality by Design)
• Establishment of clear quality responsibilities and governance structures across company boundaries
• Development of a shared quality understanding with all supply chain partners through transparent communication and training

📋 Preventive Quality Assurance:
• Implementation of systematic quality planning with preventive measures such as FMEA, Design Reviews, and Process Capability Studies
• Development of robust specifications and standards with clear communication to all supply chain partners
• Conducting qualification measures for suppliers before series production, including Process Audits and Production Part Approval Processes
• Establishment of Supplier Quality Assurance Agreements with clear requirements, responsibilities, and escalation paths
• Implementation of Statistical Process Control and other preventive control mechanisms in critical processes

🔍 Control Mechanisms and Monitoring:
• Development of a multi-stage inspection concept with differentiated inspection depths depending on risk potential
• Implementation of continuous monitoring mechanisms for critical quality parameters through statistical process control
• Conducting regular, risk-based audits at key suppliers with standardized audit protocols
• Integration of IoT and sensor technologies for real-time monitoring of quality-relevant parameters
• Development of digital quality dashboards for transparent visualization of quality performance across the supply chain

⚙️ Problem Solving and Continuous Improvement:
• Implementation of structured problem-solving processes (e.g., 8D, A3) for systematic root cause analysis and sustainable problem resolution
• Establishment of cross-company improvement teams for joint quality optimization
• Development of a systematic lessons-learned process with integration of findings into preventive measures
• Promotion of a quality culture with continuous improvement as a core value
• Implementation of regular quality reviews and management reviews for strategic quality control

📊 Quality Metrics and Reporting:
• Definition of meaningful quality KPIs for the entire supply chain (e.g., PPM, DPMO, First Pass Yield, Cost of Poor Quality)
• Development of integrated quality reporting with differentiated views for various stakeholders
• Implementation of benchmarking processes for comparison with industry standards and best practices
• Integration of quality metrics into supplier scorecards and performance management systems
• Use of advanced analytics for identification of quality trends and predictive quality management`
  },
  {
    _key: `faq_${timestamp}_15`,
    _type: 'object',
    question: 'How can companies integrate Total Cost of Ownership into their supply chain assessment?',
    answer: `The integration of the Total Cost of Ownership (TCO) approach into supply chain assessment enables companies to look beyond the pure purchase price and consider all relevant costs over the entire lifecycle. Systematic TCO management leads to more informed decisions and sustainable cost savings.

🧮 Fundamentals of the TCO Approach:
• Expansion of the cost perspective from purchase price to all costs incurred during the entire lifecycle of a product or service
• Consideration of direct and indirect costs as well as quantifiable risks across all supply chain stages
• Development of a comprehensive cost model that integrates both financial and non-financial factors (e.g., time, quality, flexibility)
• Application of a dynamic time reference with appropriate discounting of future costs and consideration of volatilities
• Inclusion of opportunity costs and strategic implications in the overall assessment

📊 Cost Elements in the TCO Model:
• Procurement costs: Purchase price, negotiation costs, contract design, procurement market research, supplier management
• Logistics costs: Transport, customs, taxes, insurance, handling, packaging, storage, inventory costs
• Quality costs: Inspection costs, failure costs, warranty, recall actions, customer complaints, reputation damage
• Operational costs: Integration, complexity costs, process adjustments, training, technical support
• Risk and compliance costs: Failure risks, currency risks, reputation risks, regulatory requirements
• End-of-life costs: Disposal, recycling, dismantling, refurbishment, residual value proceeds

🛠️ TCO Modeling and Implementation:
• Development of a customized TCO model with relevant cost elements for specific procurement categories
• Definition of clear calculation methods and data inputs with standardized assumptions and parameters
• Integration of sensitivity analyses to assess the impact of uncertainties and assumptions
• Development of user-friendly tools and templates for practical application in procurement processes
• Training of procurement teams in TCO methodology and interpretation of results

📈 Strategic Application of TCO:
• Use of TCO analyses for make-or-buy decisions and outsourcing evaluations
• Integration of TCO into supplier selection and evaluation processes
• Application of TCO for comparison of different sourcing strategies and supply chain configurations
• Use of TCO for negotiation preparation and value argumentation with suppliers
• Integration of TCO into category strategies and long-term procurement planning

🔄 Continuous Improvement of TCO Management:
• Regular review and updating of TCO models based on actual cost data and new insights
• Development of TCO benchmarks for comparison across suppliers, categories, and time periods
• Integration of TCO into performance management and supplier development programs
• Promotion of cross-functional collaboration for comprehensive cost capture and optimization
• Use of advanced analytics and AI for improved cost forecasting and optimization`
  },
  {
    _key: `faq_${timestamp}_16`,
    _type: 'object',
    question: 'What significance do certifications and standards have in supply chain assessment?',
    answer: `Certifications and standards have become essential instruments in the systematic assessment and optimization of supply chains. They provide objective frameworks for evaluating suppliers, reduce information asymmetries, and promote continuous improvement along the entire value chain.

🏆 Strategic Significance of Certifications:
• Creating an objective assessment basis through standardized requirements and independent verification
• Reduction of transaction costs through simplified due diligence processes and more efficient supplier selection
• Minimization of risks through proven compliance with defined standards in critical areas
• Promotion of continuous improvement through regular re-certifications and further development of standards
• Support of market differentiation and strengthening of trust with customers and other stakeholders

📋 Relevant Standards and Certifications:
• Quality management: ISO 9001, IATF 16949 (Automotive), AS/EN 9100 (Aerospace), ISO 13485 (Medical technology)
• Environmental management: ISO 14001, EMAS, Product Carbon Footprint, Cradle to Cradle
• Social responsibility: SA 8000, ISO 26000, BSCI, Fair Trade, RBA (Responsible Business Alliance)
• Occupational health and safety: ISO 45001, OHSAS 18001, Safety Culture Ladder
• Information security: ISO 27001, TISAX (Automotive), SOC 2, NIST Cybersecurity Framework
• Industry-specific standards: GFSI standards (Food), GMP (Pharma), FSC/PEFC (Wood)

⚖️ Differentiated Assessment of Certifications:
• Consideration of the credibility and rigor of certification systems (e.g., requirement level, independence of audit)
• Distinction between process-oriented (e.g., ISO 9001) and result-oriented standards (e.g., specific performance levels)
• Assessment of geographic and industry-specific relevance of various certifications
• Evaluation of the maturity and market acceptance of different standards
• Consideration of the costs and effort for obtaining and maintaining certifications

🔍 Integration into Supplier Assessment:
• Definition of minimum certification requirements for different supplier categories and risk classes
• Development of weighted scoring models that consider certifications as one of several assessment criteria
• Implementation of verification processes for the validity and scope of claimed certifications
• Consideration of certification results in supplier development and risk management
• Use of certification databases and platforms for efficient verification and monitoring

🚀 Beyond Certifications:
• Development of company-specific standards and requirements that go beyond general certifications
• Implementation of own audit programs for in-depth verification of critical suppliers
• Promotion of collaborative approaches for joint development and implementation of industry standards
• Use of certifications as a starting point for continuous improvement and supplier development
• Integration of certifications into a holistic supplier assessment that also considers soft factors and strategic fit`
  }
]

export async function addFaqsBatch4() {
  console.log('Adding FAQ Batch 4 (FAQs 13-16) to Supply Chain Assessment EN...')
  
  try {
    const result = await client
      .patch('lieferkettenbewertung-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch4)
      .commit()
    
    console.log(`✅ Added ${faqsBatch4.length} FAQs in batch 4`)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 4:', error)
    throw error
  }
}

// Execute if run directly
addFaqsBatch4().catch(console.error)
