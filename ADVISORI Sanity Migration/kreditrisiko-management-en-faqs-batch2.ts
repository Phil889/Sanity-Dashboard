import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 6-9 for Kreditrisiko Management EN
export const faqsBatch2 = [
  {
    _key: 'faq_kreditrisiko_en_6',
    _type: 'object',
    question: 'How do you integrate ESG factors into credit risk management?',
    answer: `The integration of ESG factors (Environmental, Social, Governance) into credit risk management encompasses several dimensions:

🔍 ESG Risk Assessment
• ESG Scoring: Development of specific assessment models for sustainability risks
• Sector-Specific Analysis: Differentiated consideration depending on industry and business model
• Physical Risks: Assessment of extreme weather events, water scarcity, biodiversity loss
• Transition Risks: Analysis of regulatory changes, technology shifts, market shifts
• Reputational Risks: Assessment of potential image damage from ESG controversies

📊 Integration into Credit Processes
• Credit Application Phase: ESG due diligence and risk assessment
• Pricing: Consideration of ESG risks in credit pricing
• Covenants: Integration of sustainability criteria into credit agreements
• Monitoring: Continuous monitoring of ESG risk indicators
• Reporting: Transparent reporting on ESG risks in the credit portfolio

🔄 Methodological Approaches
• Qualitative Overlays: Expert-based adjustment of existing rating models
• Quantitative Integration: Direct incorporation of ESG factors into PD and LGD models
• Scenario Analyses: Assessment of climate scenarios (e.g., 1.5°C, 2°C, 3°C warming)
• Stress Tests: Simulation of ESG shocks and their impact on the portfolio
• Heatmaps: Visualization of ESG risk concentrations

⚙️ Governance and Infrastructure
• ESG Risk Strategy: Definition of risk appetite and tolerances
• Data Management: Building ESG data pipelines and quality assurance
• Method Development: Continuous improvement of ESG risk models
• Competency Building: Training employees in ESG risk assessment
• External Validation: Independent review of ESG risk assessment`
  },
  {
    _key: 'faq_kreditrisiko_en_7',
    _type: 'object',
    question: 'What role does AI play in modern credit risk management?',
    answer: `Artificial Intelligence (AI) is transforming credit risk management in several key areas:

🔍 Creditworthiness Assessment
• Alternative Data Sources: Analysis of payment behavior, social media, mobile data
• Extended Modeling: Deep Learning for complex, non-linear relationships
• Real-Time Scoring: Immediate credit decisions through automated processes
• Behavioral Analysis: More precise prediction of customer behavior and default risks
• Unstructured Data: Processing of texts, images, and other complex data types

⚠️ Early Warning Systems
• Anomaly Detection: Identification of unusual patterns in payment behavior
• Predictive Monitoring: Prediction of credit quality deterioration
• Natural Language Processing: Analysis of news reports and business reports
• Sentiment Analysis: Assessment of market sentiment towards companies and industries
• Network Analysis: Detection of contagion effects between borrowers

📊 Portfolio Management
• Optimization Algorithms: AI-supported portfolio allocation and limit management
• Scenario Generation: Machine learning for realistic stress scenarios
• Dynamic Adjustment: Automatic recalibration of models during market changes
• Granular Segmentation: More precise customer segmentation for targeted strategies
• Simulation Techniques: Agent-based models for systemic risk analyses

🔄 Process Automation
• Robotic Process Automation (RPA): Automation of repetitive tasks
• Intelligent Document Processing: Automatic extraction of relevant information
• Chatbots and Virtual Assistants: Support for credit applications and advice
• Workflow Optimization: AI-supported prioritization and resource allocation
• Quality Assurance: Automatic checking for inconsistencies and errors`
  },
  {
    _key: 'faq_kreditrisiko_en_8',
    _type: 'object',
    question: 'How do you effectively manage non-performing loans (NPLs)?',
    answer: `Effective management of non-performing loans (NPLs) encompasses several key components:

🔍 Early Identification
• Early Warning Systems: Detection of warning signals before default
• Behavioral Analysis: Monitoring of payment behavior and account activities
• Regular Credit Review: Continuous assessment of borrower quality
• Industry Monitoring: Observation of sectors with elevated default risk
• Macroeconomic Indicators: Consideration of economic developments

🛠️ Strategic Segmentation
• Portfolio Analysis: Segmentation by default causes and recovery potential
• Individual Case Assessment: Detailed analysis of the borrower's situation
• Prioritization: Focus on cases with high recovery potential
• Cost-Benefit Analysis: Evaluation of various action options
• Scenario Analysis: Simulation of various workout strategies

🔄 Workout Strategies
• Restructuring: Adjustment of credit terms (maturity, interest rate, repayment structure)
• Forbearance: Temporary deferral or reduction of payments
• Debt-Equity Swaps: Conversion of debt into equity
• Collateral Realization: Efficient realization of collateral
• Loan Sales: Disposal to specialized investors or servicers

📊 Organizational Implementation
• Specialized Workout Teams: Dedicated units with specific expertise
• Clear Processes: Standardized procedures for different NPL categories
• IT Support: Specialized systems for NPL management
• Performance Measurement: KPIs for recovery rates and speed
• Knowledge Management: Documentation of best practices and lessons learned

⚙️ Regulatory Compliance
• NPL Definition: Compliance with EBA criteria (90 days past due, Unlikely-to-Pay)
• Provisioning: Appropriate impairments according to IFRS 9
• NPL Backstop: Compliance with minimum coverage requirements
• Disclosure: Transparent reporting on NPL holdings
• NPL Strategy: Development and implementation of a supervisory-compliant NPL strategy`
  },
  {
    _key: 'faq_kreditrisiko_en_9',
    _type: 'object',
    question: 'What trends are shaping the future of credit risk management?',
    answer: `The future of credit risk management is shaped by several trends:

🤖 Technological Innovation
• Advanced Analytics: Use of Big Data and AI for more precise risk models
• Alternative Data: Integration of non-traditional data sources
• Real-Time Risk Management: Continuous monitoring and immediate adjustment
• Blockchain: Transparent and tamper-proof credit documentation
• Cloud Computing: Scalable infrastructure for complex risk calculations

🌱 ESG Integration
• Climate Risk Management: Assessment of physical and transitional climate risks
• ESG Scoring: Integration of sustainability factors into credit ratings
• Green Financing: Specific risk models for sustainable loans
• Regulatory Pressure: Increasing requirements for ESG risk transparency
• Reputational Risks: Increased consideration of ESG controversies

🔄 Regulatory Evolution
• Basel IV: Full implementation by 2028
• Harmonization: Global convergence of regulatory standards
• Proportionality: Differentiated requirements depending on institution size
• Digital Supervision: Automated reporting and real-time monitoring
• Macroprudential Perspective: Stronger focus on systemic risks

📊 Market Dynamics
• Platform Economy: New business models and risk profiles
• Disintermediation: Increasing importance of non-bank lenders
• Digital Assets: Risk management for cryptocurrencies and tokenization
• Open Banking: New data sources and cooperation models
• Global Fragmentation: Geopolitical risks and regional differences

👥 Organizational Transformation
• Agile Methods: Flexible and adaptive risk organizations
• Skill Transformation: New competency requirements (Data Science, AI)
• Integrated Risk Management: Overcoming silo structures
• Automation: Focus on value-adding activities
• Cultural Change: Risk awareness as part of corporate culture`
  }
]

export async function getFaqsBatch2() {
  return faqsBatch2
}
