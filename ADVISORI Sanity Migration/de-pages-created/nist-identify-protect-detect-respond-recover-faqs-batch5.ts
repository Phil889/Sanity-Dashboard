import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating NIST Identify, Protect, Detect, Respond, Recover page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-identify-protect-detect-respond-recover' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-identify-protect-detect-respond-recover" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie etabliert ADVISORI ein integriertes Cyber Risk Quantification-Framework innerhalb der NIST CSF-Kernfunktionen, um Cybersicherheitsinvestitionen zu optimieren und ROI transparent zu machen?",
        answer: "Cyber Risk Quantification ist essentiell für strategische Entscheidungsfindung und optimale Allokation von Cybersicherheitsressourcen. ADVISORI entwickelt umfassende Quantification-Frameworks, die Cybersicherheitsrisiken in finanzielle Begriffe übersetzen und über alle fünf NIST CSF-Kernfunktionen hinweg quantifizierbare Geschäftswerte schaffen.\n\n📊 Advanced Risk Quantification Methodologies:\n• Monte Carlo Risk Modeling: Probabilistische Risikomodelle, die Threat Likelihood, Vulnerability Exploitability und Business Impact für präzise Financial Risk-Calculations kombinieren.\n• Value at Risk (VaR) Calculations: Statistische Methoden zur Quantifizierung des maximalen erwarteten Verlusts über definierte Zeiträume mit verschiedenen Confidence-Levels.\n• Expected Loss Modeling: Systematic Calculation von Expected Annual Loss (EAL) basierend auf Asset Value, Exposure Factor und Annualized Rate of Occurrence.\n• Real Options Valuation: Financial Engineering-Approaches zur Bewertung von Cybersicherheitsinvestitionen als Strategic Options mit Flexibility-Value.\n\n💰 IDENTIFY-basierte Financial Risk Assessment:\n• Asset Valuation Framework: Comprehensive Financial Valuation aller IT-Assets basierend auf Replacement Cost, Business Value und Revenue-Generation-Capability.\n• Risk Exposure Quantification: Mathematical Modeling der Financial Exposure für verschiedene Threat-Scenarios mit Industry-specific Loss-Data.\n• Business Impact Quantification: Detailed Financial Impact-Analysis von Downtime, Data Loss, Reputation Damage und Regulatory Fines.\n• Third-Party Risk Economics: Quantification der Financial Impact von Supply Chain-Disruptions und Vendor-Security-Incidents.\n\n🎯 ROI-Optimization über alle NIST CSF-Funktionen:\n• PROTECT-Investment Analysis: Cost-Benefit-Analysis verschiedener Schutzmaßnahmen mit Prevention-Cost vs. Expected Loss-Calculations.\n• DETECT-Efficiency Metrics: Quantification der Financial Benefits von Early Detection mit Mean Time to Detection (MTTD)-Improvement-Valuations.\n• RESPOND-Cost Optimization: Financial Analysis von Response-Capabilities mit Incident-Cost-Reduction und Business Continuity-Value-Calculations.\n• RECOVER-Investment Justification: ROI-Analysis von Business Continuity-Investments mit Downtime-Cost-Avoidance und Market Position-Protection-Valuations.\n\n📈 Strategic Investment Decision Support:\n• Portfolio Risk Management: Application von Modern Portfolio Theory auf Cybersicherheitsinvestitionen mit Risk-Return-Optimization.\n• Capital Allocation Optimization: Data-driven Capital Allocation-Decisions mit Risk-Adjusted Returns und Strategic Value-Considerations.\n• Investment Prioritization Matrix: Multi-criteria Decision-Analysis für Cybersicherheitsinvestitionen mit Quantified Risk-Reduction und Business-Value-Scoring.\n• Executive Investment Dashboards: C-Level-Dashboards mit Real-time ROI-Tracking und Investment-Performance-Analytics für Strategic Decision-Making."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche innovativen Metriken und KPIs entwickelt ADVISORI zur Messung der NIST CSF-Performance und wie werden diese in Executive Reporting und Board-Kommunikation integriert?",
        answer: "Effektive Messung der NIST CSF-Performance erfordert innovative Metriken, die sowohl technische Effectiveness als auch Geschäftswert transparent machen. ADVISORI entwickelt umfassende KPI-Frameworks, die C-Level-Führungskräften und Board-Members datenbasierte Einblicke in die Cybersicherheits-Performance ermöglichen und strategische Entscheidungen unterstützen.\n\n📊 Advanced Performance Metrics Framework:\n• Cybersecurity Maturity Index (CMI): Composite-Index, der die Maturity über alle fünf NIST CSF-Kernfunktionen aggregiert und Trend-Analysis ermöglicht.\n• Business-Aligned Security Metrics: KPIs, die Cybersicherheits-Performance direkt mit Geschäftszielen verknüpfen, wie Revenue Protection Rate und Customer Trust Index.\n• Risk-Adjusted Performance Metrics: Metriken, die Cybersicherheits-Investments im Kontext des Risk-Reduction-Achievements bewerten.\n• Threat Landscape Adaptation Rate: Measurement der Organizational Agility bei der Anpassung an evolvierende Bedrohungen und neue Attack-Vectors.\n\n🎯 NIST CSF Function-Specific KPIs:\n• IDENTIFY-Metrics: Asset Discovery Completeness Rate, Risk Assessment Accuracy Score, Compliance Posture Index und Third-Party Risk Exposure-Levels.\n• PROTECT-Metrics: Security Control Effectiveness Rate, Access Management Efficiency Score, Data Protection Level und Training Completion-Impact-Measurements.\n• DETECT-Metrics: Mean Time to Detection (MTTD), False Positive Rate Optimization, Threat Coverage Completeness und Anomaly Detection-Accuracy.\n• RESPOND-Metrics: Mean Time to Response (MTTR), Incident Classification Accuracy, Stakeholder Communication Effectiveness und Response-Cost-Efficiency.\n• RECOVER-Metrics: Recovery Time Objective (RTO) Achievement, Business Continuity Success Rate, Reputation Recovery Index und Lessons Learned-Implementation-Rate.\n\n💼 Executive Reporting und Strategic Communication:\n• Executive Security Scorecards: Quarterly Executive Scorecards mit Red/Yellow/Green-Status-Indicators für alle NIST CSF-Funktionen und Strategic Recommendations.\n• Board-Level Cyber Risk Dashboards: High-Level Dashboards mit Financial Risk-Metrics, Regulatory Compliance-Status und Strategic Cybersecurity-Initiatives-Progress.\n• Trend Analysis und Forecasting: Predictive Analytics für Cybersecurity-Trends mit Future Risk-Projections und Investment-Requirement-Forecasts.\n• Benchmark und Peer-Comparison: Industry Benchmark-Comparisons mit Peer-Performance-Analysis für Strategic Positioning-Assessment.\n\n📈 Business Value Demonstration und ROI-Reporting:\n• Cybersecurity Business Case Metrics: Quantified Business Value-Metrics wie Prevented Loss-Calculations, Productivity Improvement-Measurements und Competitive Advantage-Indicators.\n• Investment Performance Tracking: Real-time Tracking von Cybersecurity-Investment-Performance mit ROI-Calculations und Payback-Period-Analysis.\n• Stakeholder Value Communication: Stakeholder-specific Value Propositions mit Customer Trust-Metrics, Partner Confidence-Scores und Investor Relations-Indicators.\n• Strategic Initiative Impact-Measurement: Assessment der Business Impact von Strategic Cybersecurity-Initiatives mit Growth Enablement und Market Expansion-Metrics."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie adressiert ADVISORI die Integration von ESG (Environmental, Social, Governance)-Kriterien in die NIST CSF-Implementierung für nachhaltige und verantwortungsvolle Cybersicherheit?",
        answer: "Die Integration von ESG-Kriterien in Cybersicherheitsstrategien wird zunehmend wichtiger für nachhaltiges Geschäftswachstum und Stakeholder-Value. ADVISORI entwickelt ESG-konforme NIST CSF-Implementierungen, die Environmental Responsibility, Social Impact und Governance Excellence in allen Cybersicherheitsaktivitäten verankern.\n\n🌱 Environmental Sustainability in Cybersecurity:\n• Energy-Efficient Security Architecture: Implementation von Green IT-Prinzipien in Cybersicherheitsinfrastrukturen mit Fokus auf Energy Consumption-Optimization und Carbon Footprint-Reduction.\n• Sustainable Cloud Security: Bevorzugung von Cloud-Providern mit Renewable Energy-Commitments und Carbon-Neutral-Certifications für Environmental Impact-Minimization.\n• Circular Economy Cybersecurity: Lifecycle-Management von Security-Hardware mit Focus auf Reuse, Refurbishment und Responsible Disposal für Waste-Reduction.\n• Environmental Impact Metrics: Tracking der Environmental Impact von Cybersicherheitsaktivitäten mit Carbon Footprint-Measurements und Sustainability KPIs.\n\n👥 Social Responsibility und Digital Inclusion:\n• Inclusive Cybersecurity Design: Development von Cybersicherheitslösungen, die Accessibility-Standards erfüllen und Digital Inclusion für alle User-Groups fördern.\n• Community Cybersecurity Outreach: Corporate Social Responsibility-Initiativen zur Cybersecurity Awareness-Bildung in underserved Communities.\n• Diverse Supplier Engagement: Prioritization von Diverse Suppliers und Minority-Owned Businesses in Cybersecurity-Procurement-Processes.\n• Employee Social Impact: Measurement und Reporting des Social Impact von Cybersecurity-Initiativen auf Employee Well-being und Work-Life-Balance.\n\n🏛️ Governance Excellence und Ethical Cybersecurity:\n• Ethical AI in Cybersecurity: Implementation von Ethical AI-Frameworks für Machine Learning-basierte Security-Solutions mit Bias-Prevention und Fairness-Assurance.\n• Transparent Security Governance: Establishment von Transparent Governance-Processes für Cybersecurity-Decision-Making mit Stakeholder-Engagement und Public Accountability.\n• Privacy-by-Design Integration: Systematic Integration von Privacy-by-Design-Prinzipien in alle NIST CSF-Funktionen für Enhanced Data Protection und User Rights-Respect.\n• Cybersecurity Ethics Committee: Establishment von Ethics Committees für Cybersecurity-Governance mit Multi-Stakeholder-Representation und Ethical Decision-Making-Frameworks.\n\n📊 ESG Reporting und Stakeholder Communication:\n• ESG-Cybersecurity Metrics: Development spezialisierter ESG-Metrics für Cybersecurity mit Focus auf Sustainability, Social Impact und Governance-Quality.\n• Stakeholder ESG-Reporting: Regular ESG-Reporting zu Cybersecurity-Aktivitäten für Investors, Customers und Regulatory Bodies mit Transparency und Accountability-Focus.\n• ESG-Integration in Risk Assessment: Integration von ESG-Factors in Cybersecurity Risk-Assessments mit Long-term Sustainability-Considerations.\n• Sustainable Cybersecurity Innovation: Investment in Cybersecurity-Innovations, die ESG-Objectives unterstützen und Long-term Value für alle Stakeholders schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie entwickelt ADVISORI eine zukunftsorientierte NIST CSF-Roadmap, die aufkommende Technologien, sich ändernde Bedrohungslandschaften und evolvierende Business-Models antizipiert?",
        answer: "Eine zukunftsorientierte NIST CSF-Roadmap muss die dynamische Natur von Technologie, Bedrohungen und Geschäftsmodellen antizipieren. ADVISORI entwickelt adaptive Roadmaps, die nicht nur current Best Practices implementieren, sondern auch Future-Ready Capabilities aufbauen und Strategic Flexibility für unvorhersehbare Entwicklungen gewährleisten.\n\n🔮 Future Technology Integration und Innovation:\n• Emerging Technology Radar: Systematic Monitoring von Emerging Technologies (6G, Extended Reality, Brain-Computer Interfaces) mit Security Implications-Assessment und Early Adoption-Strategies.\n• Quantum-Ready Security Evolution: Roadmap für Post-Quantum Cryptography-Migration mit Timeline-Planning und Risk-Mitigation für Quantum Computing-Threats.\n• AI/ML Security Evolution: Progressive Integration fortgeschrittener AI/ML-Technologies in alle NIST CSF-Funktionen mit Continuous Learning und Adaptation-Capabilities.\n• Autonomous Systems Security: Future-Ready Security-Architectures für Autonomous Vehicles, Drones und Robotic Systems mit Safety-Critical Security-Requirements.\n\n⚡ Adaptive Threat Landscape Navigation:\n• Predictive Threat Modeling: Machine Learning-basierte Prediction von Future Threat-Trends mit Scenario Planning und Preparedness-Strategies.\n• Nation-State Evolution Tracking: Monitoring der Evolution nation-state Cyber-Capabilities mit Geopolitical Risk-Assessment und Strategic Response-Planning.\n• Cybercrime Innovation Analysis: Analysis cybercriminal Innovation-Patterns mit Economic Modeling und Counter-Innovation-Strategies.\n• Hybrid Warfare Preparedness: Security-Strategies für Hybrid Warfare-Scenarios mit Physical-Cyber Convergence und Multi-Domain Defense-Approaches.\n\n🚀 Business Model Evolution und Digital Transformation:\n• Platform Economy Security: Security-Frameworks für Platform-based Business Models mit Multi-Sided Market-Security und Ecosystem-Protection.\n• Subscription Economy Cybersecurity: Specialized Security-Approaches für Subscription-based und As-a-Service Business Models mit Customer Data-Protection-Focus.\n• Metaverse Business Security: Future-Ready Security für Virtual Worlds und Metaverse Business-Activities mit Virtual Asset-Protection und Avatar-Security.\n• Decentralized Business Models: Security-Strategies für Blockchain-based und Decentralized Autonomous Organization (DAO)-Business-Models.\n\n🔄 Continuous Roadmap Evolution und Strategic Agility:\n• Dynamic Roadmap Adjustment: Agile Roadmap-Management mit Quarterly Reviews und Strategic Pivot-Capabilities basierend auf Technology- und Threat-Evolution.\n• Innovation Lab Integration: Establishment von Cybersecurity Innovation Labs für Experimentation mit Future Technologies und Security-Approaches.\n• Strategic Partnership Ecosystem: Development von Strategic Partnerships mit Technology-Innovators, Research Institutions und Security-Startups für Early Access zu Future Capabilities.\n• Future Skills Development: Workforce Development-Strategies für Future Cybersecurity-Skills mit Continuous Learning und Adaptation-Programs für Evolving Technology-Landscapes."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
