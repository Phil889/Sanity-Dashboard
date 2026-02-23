import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 17-20 for Model Governance EN
const faqsBatch5 = [
  {
    _key: `faq_${Date.now()}_17`,
    _type: 'object',
    question: 'What are the differences between traditional and AI/ML Model Governance?',
    answer: `The governance of AI/ML models differs in several essential aspects from traditional model governance, which was primarily oriented towards statistical and rule-based models. These differences require specific adaptations in the governance approach:

🔄 Development Process and Lifecycle
• Traditional models: Linear and largely deterministic development processes
  - Clearly defined requirements and specifications
  - Transparent and traceable mathematical methods
  - Stable model structures with infrequent changes
  - Focus on analytical validation and explicit rules
• AI/ML models: Iterative, experimental development processes
  - Exploratory approach with evolutionary requirement definition
  - Data-driven pattern discovery instead of explicit programming
  - Continuous learning and frequent model adjustments
  - Empirical validation and performance optimization

📊 Data Dependency and Complexity
• Traditional models: Limited, structured datasets
  - Focus on causal relationships and theoretical foundation
  - Manageable data volume with clear structuring
  - Data quality primarily ensured through manual processes
  - Low dependency on training data after model development
• AI/ML models: Massive, heterogeneous datasets
  - Recognition of complex correlations without explicit causality assumptions
  - Processing of large data volumes of varying structure
  - Automated data quality assurance with special challenges
  - Fundamental dependency on representativeness and quality of training data

🧠 Interpretability and Transparency
• Traditional models: Inherently traceable
  - Explicit mathematical formulas and rule logic
  - Direct traceability of results
  - Simple documentation of causal relationships
  - Clear attribution paths for decisions
• AI/ML models: Often opaque ("black box")
  - Complex, non-linear relationships difficult to interpret
  - Need for post-hoc explainability methods
  - Challenges in documenting decision logic
  - Requirement for specialized XAI techniques

⚙️ Validation Approaches
• Traditional models: Analytical validation
  - Mathematical proofs and theoretical analysis
  - Sensitivity analysis with clear parameter relationships
  - Deterministic testing with predictable outcomes
  - Focus on model specification correctness
• AI/ML models: Empirical validation
  - Statistical testing on held-out data
  - Cross-validation and bootstrapping techniques
  - Adversarial testing and robustness checks
  - Focus on generalization and real-world performance

🔄 Change Management
• Traditional models: Infrequent, controlled changes
  - Formal change request and approval process
  - Clear versioning with documented differences
  - Predictable impact of changes
• AI/ML models: Continuous evolution
  - Frequent retraining and model updates
  - Automated deployment pipelines
  - Need for continuous validation and monitoring
  - Complex version management with data and model versions`
  },
  {
    _key: `faq_${Date.now()}_18`,
    _type: 'object',
    question: 'How do you implement Model Governance in an agile environment?',
    answer: `The integration of Model Governance into agile development environments presents a particular challenge, as seemingly opposing principles must be reconciled: the flexibility and speed of agile methods on one hand and the control and structure of governance processes on the other. A successful integration is based on the following approaches:

🔄 Agile Model Governance Principles
• Shift-left approach: Integration of governance aspects from the beginning of the development process
• Incremental validation: Continuous verification in small, manageable steps
• Adaptive framework: Adaptable governance processes instead of rigid gate structures
• Risk proportionality: Alignment of governance intensity with model risk and complexity
• Collaborative model: Close cooperation between development and governance teams

📋 Integration into Agile Workflows
• Governance user stories: Inclusion of governance requirements as user stories in the backlog
• Definition of Done: Explicit integration of governance criteria in DoD checklists
• Governance epics: Overarching governance themes as separate epics in the agile framework
• Sprint planning: Consideration of governance activities in sprint planning
• Incremental documentation: Gradual development and completion of documentation

👥 Roles and Responsibilities
• Embedded governance champions: Governance experts as integrated team members
• Product Owner responsibility: Clear assignment of governance responsibility in the PO area
• Cross-functional teams: Involvement of various competencies (Data Science, Risk, Business)
• Agile Risk Officers: Risk managers with agile working methods and understanding
• Scrum Master as mediator: Support in integrating governance into agile processes

⚙️ Agile Validation and Review Processes
• Continuous validation: Integration of automated validation into CI/CD pipelines
• Sprint reviews with governance focus: Regular review of governance aspects
• Retrospectives for governance: Continuous improvement of governance processes
• Pair programming for compliance: Collaborative development with governance awareness
• Automated compliance checks: Integration of governance checks into build processes

🛠️ Tools and Automation
• Automated testing: Integration of model tests into CI/CD pipelines
• Documentation as code: Version-controlled documentation alongside model code
• Automated monitoring: Real-time tracking of model performance and compliance
• Self-service validation: Tools enabling developers to perform basic validations
• Governance dashboards: Real-time visibility into governance status

📊 Metrics and Measurement
• Velocity with governance: Tracking of development speed including governance activities
• Governance debt: Measurement of accumulated governance gaps
• Compliance rate: Percentage of models meeting governance requirements
• Time-to-compliance: Duration from development to full governance compliance
• Defect escape rate: Governance issues discovered post-deployment`
  },
  {
    _key: `faq_${Date.now()}_19`,
    _type: 'object',
    question: 'What challenges exist in Model Governance in large organizations?',
    answer: `Large organizations face specific challenges in implementing and maintaining effective Model Governance that result from their size, complexity, and organizational structure. Understanding these challenges and possible solutions is crucial for success.

🏢 Organizational Complexity and Silos
• Distributed model development: Uncoordinated development of models in different departments
• Inconsistent standards: Different practices and requirements in different business areas
• Coordination problems: Difficulties in coordination between Business, IT, Risk, and Compliance
• Knowledge islands: Isolated expertise without organization-wide exchange
• Matrix structures: Complex reporting lines and unclear responsibilities

🔄 Scaling Problems
• Model proliferation: Exponential increase in the number and variety of models
• Resource bottlenecks: Limited capacities for specialized validation and monitoring
• Bottlenecks: Delays due to centralized governance processes
• Diversity of model technologies: Broad spectrum of methods and technologies
• Legacy integration: Coexistence of new and old models with different standards

⚙️ Technical Infrastructure
• Fragmented systems: Heterogeneous IT landscape without unified governance platform
• Data silos: Isolated data stores with limited accessibility
• Integration problems: Difficulties in connecting different systems and platforms
• Technical debt accumulation: Accumulation of suboptimal technical solutions over time
• Security challenges: Complex requirements for data security and access management

📋 Standardization and Consistency
• Variety of use cases: Different requirements for different model types and purposes
• Global vs. local standards: Tension between global consistency and local adaptation
• Regulatory diversity: Different regulatory requirements across jurisdictions
• Cultural differences: Varying attitudes towards governance across regions
• Legacy practices: Established ways of working that resist standardization

👥 People and Culture
• Skill gaps: Shortage of personnel with combined governance and technical expertise
• Resistance to change: Reluctance to adopt new governance processes
• Training challenges: Difficulty in training large, distributed workforce
• Accountability diffusion: Unclear ownership in complex organizational structures
• Incentive misalignment: Reward structures that don't support governance objectives

🔧 Solutions and Best Practices
• Federated governance model: Balance between central standards and local flexibility
• Center of Excellence: Dedicated team for governance expertise and support
• Technology enablement: Investment in governance platforms and automation
• Clear escalation paths: Defined procedures for resolving governance conflicts
• Executive sponsorship: Strong leadership support for governance initiatives
• Phased implementation: Gradual rollout with pilot programs and learning cycles
• Community of practice: Networks for sharing knowledge and best practices
• Metrics and accountability: Clear KPIs and ownership for governance outcomes`
  },
  {
    _key: `faq_${Date.now()}_20`,
    _type: 'object',
    question: 'How can Model Governance be integrated into enterprise-wide risk management?',
    answer: `A successful integration of Model Governance into enterprise-wide risk management (Enterprise Risk Management, ERM) requires a systematic approach that treats model risks as an integral part of a company's overall risk profile. This integration offers comprehensive benefits for holistic risk management.

🔄 Strategic Alignment Principles
• Common risk appetite: Alignment of model risk tolerance with overarching risk appetite
• Integrated risk taxonomy: Embedding of model risks in the general risk categorization
• Consistent risk assessment: Harmonized methods for assessing different risk types
• Holistic risk aggregation: Consideration of model risks in the overall risk position
• Strategic value contribution: Alignment of Model Governance with overarching corporate objectives

⚙️ Organizational Integration
• Governance structures: Integration of Model Governance into existing risk governance bodies
• Reporting lines: Clear reporting paths from Model Risk Management to corporate leadership
• Committee structures: Integration of model risk topics into risk committees
• Clear responsibilities: Unambiguous assignment of responsibilities for model risks
• Three Lines of Defense: Embedding of Model Governance in the company's 3LoD model

📊 Integrated Risk Processes
• Risk inventory: Systematic capture of model risks in the enterprise-wide risk inventory
• Integrated risk identification: Consideration of model-related risks in general risk assessments
• Holistic risk analysis: Investigation of interactions between model and other risks
• Common risk assessment: Consistent methods for evaluating different risk types
• Unified risk monitoring: Integration of model risk indicators into general risk reporting

🔍 Interactions with Other Risk Areas
• Operational risk: Model failures as a source of operational risk
• Credit risk: Models for credit assessment and their inherent risks
• Market risk: Trading models and their validation requirements
• Compliance risk: Regulatory requirements for model usage
• Strategic risk: Model dependencies in strategic decision-making
• Reputational risk: Impact of model failures on company reputation

📈 Reporting and Communication
• Integrated risk reporting: Model risks as part of regular risk reports
• Board reporting: Escalation of significant model risks to board level
• Regulatory reporting: Compliance with regulatory reporting requirements
• Stakeholder communication: Transparent communication about model risks
• Risk dashboards: Integrated view of model and other risks

💼 Benefits of Integration
• Holistic risk view: Complete picture of organizational risk exposure
• Resource optimization: Efficient allocation of risk management resources
• Consistent decision-making: Aligned risk-based decisions across the organization
• Regulatory compliance: Meeting regulatory expectations for integrated risk management
• Strategic alignment: Risk management supporting business objectives
• Improved resilience: Better preparation for and response to risk events

🛠️ Implementation Approach
• Gap assessment: Evaluation of current integration level and improvement areas
• Roadmap development: Phased plan for achieving full integration
• Stakeholder engagement: Involvement of all relevant parties in integration efforts
• Technology enablement: Systems supporting integrated risk management
• Continuous improvement: Ongoing refinement of integration based on experience`
  }
]

async function addFaqsBatch5() {
  console.log('Adding FAQs batch 5 to Model Governance EN...')
  
  try {
    const result = await client
      .patch('model-governance-en')
      .setIfMissing({ faq: [] })
      .append('faq', faqsBatch5)
      .commit()
    
    console.log('FAQs batch 5 added successfully')
    console.log('Total FAQs now:', result.faq?.length || 0)
    return result
  } catch (error) {
    console.error('Error adding FAQs batch 5:', error)
    throw error
  }
}

addFaqsBatch5().catch(console.error)
