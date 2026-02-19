import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
})

// FAQs 1-5 for Kreditrisiko Management EN
export const faqsBatch1 = [
  {
    _key: 'faq_kreditrisiko_en_1',
    _type: 'object',
    question: 'What are the core components of credit risk management?',
    answer: `Credit risk management comprises several core components:

🔍 Risk Identification
• Counterparty default risk: Risk of a counterparty defaulting
• Settlement risk: Technical risks in transaction settlement
• Migration risk: Risk of credit quality deterioration of a debtor

📊 Risk Quantification
• PD (Probability of Default): Default probability of a debtor
• LGD (Loss Given Default): Loss rate in case of default
• EAD (Exposure at Default): Exposure amount at default
• Expected Loss (EL): Expected loss, calculated as PD × LGD × EAD

🛡️ Risk Control
• Credit granting policies and limit structures
• Collateral management and covenants
• Risk transfer through credit derivatives and securitizations
• Portfolio diversification and optimization

📈 Risk Monitoring
• Regular borrower monitoring
• Early warning systems for credit quality deterioration
• Stress tests and scenario analyses
• Regular reporting to management and supervisory bodies`
  },
  {
    _key: 'faq_kreditrisiko_en_2',
    _type: 'object',
    question: 'What regulatory requirements exist for credit risk management?',
    answer: `The regulatory requirements for credit risk management are extensive and continuously evolving:

📜 Basel Framework
• Basel III/IV: Comprehensive regulations for capital requirements for credit risks
• Output Floor: Limitation of RWA reduction via IRB to 72.5% of the standardized approach from 2025
• CVA Risk: Extended requirements for measuring Counterparty Credit Risk

🏦 European Regulation
• CRR/CRD: Capital Requirements Regulation and Directive as EU implementation of Basel
• EBA Guidelines: Detailed requirements for credit granting, NPL management, and stress tests
• IFRS 9: Accounting treatment of credit risks with Expected Credit Loss model

🇩🇪 German Specifics
• MaRisk: Minimum requirements for risk management for German institutions
• Large exposure regulations: Limitation of concentration risks
• BaFin circulars: Specific requirements for rating procedures and credit processes

📊 Disclosure Requirements
• Pillar 3: Extensive transparency requirements for credit risks
• ESG Risks: Increasing requirements for integration of sustainability risks
• Stress Tests: Regular participation in supervisory stress tests (EBA, ECB)`
  },
  {
    _key: 'faq_kreditrisiko_en_3',
    _type: 'object',
    question: 'What is the difference between the Standardized Approach and the IRB Approach?',
    answer: `The Standardized Approach and the IRB Approach (Internal Ratings-Based Approach) differ fundamentally in their methodology for calculating capital requirements for credit risks:

🔍 Standardized Approach
• External Ratings: Use of ratings from external agencies (e.g., S&P, Moody's)
• Fixed Risk Weights: Predetermined risk weights depending on exposure class and rating
• Simple Application: Lower complexity and lower implementation costs
• Lower Risk Sensitivity: Less differentiated representation of actual risks
• Standardized Collateral Recognition: Limited recognition of risk mitigation techniques

📊 IRB Approach
• Internal Ratings: Use of institution-specific rating models
• Risk-Sensitive Parameters: Institution-specific estimation of PD, LGD, and EAD
• Higher Complexity: Extensive requirements for data, models, and processes
• Differentiated Risk Assessment: More precise representation of actual risks
• Potential Capital Savings: Possible reduction of RWA with good portfolio quality

⚙️ IRB Variants
• Foundation IRB: Only PD is estimated internally, LGD and EAD are supervisory prescribed
• Advanced IRB: All parameters (PD, LGD, EAD) are estimated internally

🔄 Basel IV Changes
• Output Floor: Limitation of RWA reduction via IRB to 72.5% of the standardized approach
• Input Floors: Minimum requirements for PD, LGD, and EAD
• Restrictions: No more IRB application for certain portfolios (e.g., large corporates)`
  },
  {
    _key: 'faq_kreditrisiko_en_4',
    _type: 'object',
    question: 'How do you develop an effective rating model?',
    answer: `Developing an effective rating model involves several key steps:

🎯 Conceptual Foundations
• Segmentation: Division of the portfolio into homogeneous risk groups
• Rating Philosophy: Point-in-Time (PiT) vs. Through-the-Cycle (TTC) approach
• Rating Architecture: Modular structure with financial, business, and qualitative factors
• Time Horizon: Definition of the forecast period (typically 1 year)

📊 Model Development
• Data Preparation: Collection and cleansing of historical data
• Variable Selection: Identification of significant risk drivers
• Statistical Methods: Logistic regression, Random Forest, Neural Networks
• Calibration: Assignment of scores to default probabilities (PDs)
• Macroeconomic Adjustment: Integration of economic factors

🔍 Validation
• Discriminatory Power: Measurement via AUC, Gini coefficient, KS statistic
• Calibration Accuracy: Binomial test, Hosmer-Lemeshow test
• Stability Analysis: Population Stability Index (PSI)
• Benchmarking: Comparison with external ratings and market data
• Stress Tests: Verification of model robustness under extreme scenarios

⚙️ Implementation
• IT Integration: Integration into credit processes and risk systems
• Governance: Clear responsibilities and control mechanisms
• Documentation: Comprehensive model description and methodology explanation
• Training: Training of users and decision-makers
• Monitoring: Continuous monitoring and regular re-validation`
  },
  {
    _key: 'faq_kreditrisiko_en_5',
    _type: 'object',
    question: 'What methods exist for credit portfolio optimization?',
    answer: `Credit portfolio optimization encompasses various advanced methods:

📊 Quantitative Analysis Techniques
• Correlation Analysis: Measurement of dependencies between borrowers
• Concentration Measurement: Herfindahl-Hirschman Index (HHI), Granularity Adjustment
• Value-at-Risk (VaR): Quantification of potential portfolio losses
• Expected Shortfall: Average loss in the worst scenarios
• Copula Models: Representation of complex dependency structures

🎯 Optimization Strategies
• Risk-Return Optimization: Maximization of risk-adjusted return (RAROC)
• Limit Structures: Limitation of industry, country, and single-name concentrations
• Portfolio Diversification: Spreading across different risk classes and sectors
• Active Portfolio Management: Buying and selling of credit positions
• Strategic Allocation: Alignment with growth segments with attractive risk profiles

🛠️ Risk Mitigation Techniques
• Credit Derivatives: Credit Default Swaps (CDS), Total Return Swaps
• Securitizations: Traditional and synthetic securitization
• Credit Insurance: Protection against payment defaults
• Netting Agreements: Offsetting of mutual claims
• Collateral Management: Optimization of collateral structures

🔄 Dynamic Management
• Early Warning Systems: Early detection of credit quality deterioration
• Workout Strategies: Efficient management of non-performing loans
• Scenario Analyses: Adjustment of strategy to changed market conditions
• Stress Tests: Identification of weaknesses in the portfolio
• Continuous Monitoring: Regular review of portfolio quality`
  }
]

export async function getFaqsBatch1() {
  return faqsBatch1
}
