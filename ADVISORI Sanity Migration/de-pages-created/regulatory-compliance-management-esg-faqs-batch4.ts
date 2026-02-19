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
    console.log('Updating ESG page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-esg' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-esg" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI die C-Suite bei der Integration von ESG-Faktoren in strategische Entscheidungsprozesse und Corporate Governance?",
        answer: "Die Integration von ESG-Faktoren in die strategische Entscheidungsfindung und Corporate Governance ist für moderne C-Suite-Führung unerlässlich geworden. Stakeholder erwarten, dass ESG-Überlegungen systematisch in alle wesentlichen Geschäftsentscheidungen einfließen. ADVISORI entwickelt ESG-integrierte Governance-Frameworks, die strategische Klarheit mit operativer Exzellenz verbinden.\n\n🎯 ESG-Integrierte Strategic Decision Making:\n• Board-Level ESG Integration: Etablierung von ESG-Expertise auf Board-Ebene durch gezieltes Director Training und Recruitment spezialisierter Non-Executive Directors.\n• Strategic Planning Enhancement: Integration von ESG-Scenario-Planning in strategische Planungsprozesse für robustere Langzeit-Strategien.\n• Investment Decision Frameworks: ESG-erweiterte Capital Allocation-Modelle, die Nachhaltigkeitsimpacts in traditionelle ROI-Kalkulationen integrieren.\n• Risk Management Evolution: Transformation von Enterprise Risk Management zur systematischen Berücksichtigung von ESG-Risiken und -Chancen.\n\n🛡️ Next-Generation Corporate Governance:\n• ESG Governance Architecture: Design spezialisierter Board Committees und Management-Strukturen für effective ESG Oversight und Decision Support.\n• Performance Management Integration: ESG-KPIs werden nahtlos in Executive Compensation, Performance Reviews und Strategic KPI-Frameworks integriert.\n• Stakeholder Governance: Entwicklung systematischer Stakeholder-Engagement-Prozesse, die External Perspectives in Internal Decision-Making einbinden.\n• Transparency & Accountability: Implementation robuster ESG-Reporting und Disclosure-Praktiken, die Stakeholder Trust und Regulatory Compliance sichern.\n\n⚡ ADVISORI's Governance Transformation Methodology:\n• Governance Maturity Assessment: Systematische Evaluation der current Governance-Praktiken und Identification von ESG-Integration-Opportunities.\n• Custom Framework Development: Entwicklung maßgeschneiderter ESG-Governance-Frameworks, die organizational Culture und Industry Dynamics berücksichtigen.\n• Change Management Excellence: Strukturierte Transformation von Decision-Making-Prozessen mit Executive Coaching und Organizational Development.\n• Continuous Improvement: Etablierung systematischer Governance Reviews und Adaptive Learning für kontinuierliche ESG-Excellence."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Stakeholder Engagement in ADVISORI's ESG-Strategien und wie wird authentische Stakeholder Value Creation erreicht?",
        answer: "Authentisches Stakeholder Engagement ist das Fundament nachhaltiger ESG-Excellence und unterscheidet echte Value Creation von oberflächlichen PR-Aktivitäten. Für die C-Suite bedeutet dies systematische, outcome-orientierte Stakeholder-Beziehungen, die mutual Value schaffen. ADVISORI entwickelt comprehensive Stakeholder Engagement-Strategien, die langfristige Partnerships und shared Value Creation ermöglichen.\n\n🤝 Multi-Stakeholder Value Ecosystem:\n• Investor Relations Evolution: Proaktive ESG-Investor-Communication, die über Compliance hinausgeht und strategic ESG-Narratives für Long-term Value Creation entwickelt.\n• Customer Co-Creation: Systematic Customer Engagement in ESG-Innovation und Sustainable Product Development für Enhanced Customer Loyalty.\n• Employee Empowerment: Comprehensive Workforce Engagement in ESG-Initiatives, die Purpose-driven Culture und Talent Retention fördern.\n• Community Partnerships: Strategic Community Investment und Local Stakeholder Engagement für Sustainable Business License-to-Operate.\n\n💡 Authentic Engagement Framework:\n• Materiality-Driven Prioritization: Fokussierung auf Stakeholder-Issues mit highest Business Impact und genuine Influence auf Strategic Decisions.\n• Two-Way Communication: Establishment of genuine Dialogue-Mechanismen, die Input sammeln, Process und demonstrable Action-Taking zeigen.\n• Co-Creation Opportunities: Development of Collaboration-Plattformen, wo Stakeholder aktiv zur ESG-Strategy und Implementation beitragen können.\n• Impact Measurement: Systematic Tracking von Stakeholder-Satisfaction, Engagement-Quality und mutual Value Creation-Outcomes.\n\n🚀 Value Creation Through Engagement:\n• Innovation Partnerships: Stakeholder-driven Innovation-Processes, die External Expertise und Perspectives für Competitive Advantage nutzen.\n• Risk Intelligence: Stakeholder Engagement als Early Warning System für Emerging Risks und Reputation-Threats.\n• Market Intelligence: Systematic Stakeholder Feedback für Market Trend-Identification und Strategic Opportunity-Assessment.\n• License to Grow: Strong Stakeholder Relationships als Foundation für Expansion, New Market Entry und Strategic Initiatives.\n\n🌐 ADVISORI's Stakeholder Excellence Approach:\n• Stakeholder Mapping & Analysis: Comprehensive Identification und Prioritization aller relevanten Stakeholder-Gruppen mit Impact-Assessment.\n• Engagement Strategy Design: Development maßgeschneiderter Engagement-Strategien für verschiedene Stakeholder-Segmente und Communication-Channels.\n• Platform Development: Creation digitaler und physischer Engagement-Plattformen für Scalable, Authentic Stakeholder Interaction."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI ESG-Reporting und Kommunikation für maximale Stakeholder Impact und Competitive Positioning?",
        answer: "ESG-Reporting und -Kommunikation sind für die C-Suite kritische Tools zur Stakeholder-Beeinflussung und Strategic Positioning geworden. Über regulatorische Compliance hinaus ermöglicht excellence ESG-Communication Thought Leadership, Investor Attraction und Customer Engagement. ADVISORI entwickelt impactful ESG-Communication-Strategien, die authentic Storytelling mit data-driven Credibility verbinden.\n\n📊 Strategic ESG Storytelling:\n• Narrative Architecture: Development compelling ESG-Narratives, die Business Strategy, Impact Achievements und Future Vision authentisch verbinden.\n• Audience Segmentation: Maßgeschneiderte Messaging für verschiedene Stakeholder-Gruppen (Investors, Customers, Employees, Regulators) mit relevanten Value Propositions.\n• Multi-Channel Strategy: Integrated Communication über Digital Platforms, Traditional Media, Industry Forums und Direct Stakeholder Engagement.\n• Thought Leadership: Positioning als ESG-Vordenker durch Original Research, Industry Insights und Public Speaking-Opportunities.\n\n🎯 Data-Driven Credibility:\n• Performance Metrics Excellence: Development aussagekräftiger ESG-KPIs, die genuine Business Impact demonstrieren und Stakeholder-Concerns addressieren.\n• Third-Party Validation: Strategic Use von External Assurance, Ratings und Certifications für Enhanced Credibility und Benchmarking.\n• Transparency Standards: Implementation höchster Transparency-Standards, die Stakeholder Trust durch Open, Honest Communication aufbauen.\n• Progress Tracking: Systematic Documentation von ESG-Improvements mit Clear Baselines, Targets und Achievement-Evidence.\n\n⚡ Communication Excellence Framework:\n• Content Strategy: Development von High-Quality ESG-Content, der Educational Value bietet und Stakeholder Engagement fördert.\n• Digital Transformation: Leverage moderne Digital-Tools für Interactive ESG-Reporting, Real-Time Updates und Enhanced User Experience.\n• Crisis Communication: Proactive Preparation für ESG-related Crisis-Situations mit Clear Protocols und Response-Strategies.\n• Feedback Integration: Systematic Collection und Integration von Stakeholder-Feedback in ESG-Communication für Continuous Improvement.\n\n🚀 Competitive Positioning Through Communication:\n• Market Differentiation: ESG-Communication als Tool für Clear Market Positioning und Competitive Advantage-Demonstration.\n• Industry Leadership: Use von ESG-Communication für Industry Standard-Setting und Peer-Influence.\n• Investor Attraction: Strategic ESG-Messaging für Enhanced Investor Appeal und Access zu Sustainable Finance-Opportunities.\n• Talent Branding: ESG-Communication als Employer Branding-Tool für Top-Talent Attraction und Employee Pride-Building."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie entwickelt ADVISORI ESG-Performance-Management-Systeme, die operative Excellence mit strategischer Zielerreichung verbinden?",
        answer: "Effektives ESG-Performance-Management erfordert sophisticierte Systeme, die operationale Daten mit strategischen Zielen verknüpfen und actionable Insights für C-Level Decision-Making liefern. ADVISORI entwickelt integrierte Performance-Management-Architekturen, die Real-Time ESG-Monitoring mit Strategic Planning und Continuous Improvement verbinden.\n\n📈 Integrated Performance Architecture:\n• Multi-Level KPI Framework: Development hierarchischer ESG-Metriken von Strategic Board-Level bis zu Operational Team-Level mit Clear Alignment und Cascade.\n• Real-Time Dashboards: Implementation Executive-Grade ESG-Dashboards mit Live Data, Trend Analysis und Predictive Insights für Dynamic Decision-Making.\n• Performance Analytics: Advanced Analytics-Capabilities für Deep-Dive Analysis, Root-Cause Identification und Performance Optimization-Opportunities.\n• Benchmark Integration: Systematic Benchmarking gegen Industry Peers, Best Practices und Regulatory Standards für Competitive Intelligence.\n\n⚙️ Operational Excellence Integration:\n• Process Integration: Seamless Integration von ESG-Metriken in existing Business Processes, Quality Management und Operational Reviews.\n• Automated Data Collection: Implementation automatisierter Data-Collection-Systeme, die Manual Effort reduzieren und Data Quality verbessern.\n• Exception Management: Smart Alert-Systeme für Automatic Identification von Performance-Deviations und Risk-Indicators.\n• Continuous Monitoring: Establishment kontinuierlicher Monitoring-Prozesse für Proactive Issue-Identification und Rapid Response.\n\n🎯 Strategic Alignment & Governance:\n• Target Setting Excellence: Scientific, Ambitious Target-Setting basierend auf Business Strategy, Stakeholder Expectations und Industry Benchmarks.\n• Performance Reviews: Regular Performance Review-Cycles mit C-Level Involvement, Strategic Adjustments und Resource Allocation-Decisions.\n• Incentive Alignment: Integration von ESG-Performance in Compensation Systems, Performance Reviews und Career Development-Criteria.\n• Strategic Learning: Systematic Learning von Performance-Data für Strategic Planning, Risk Management und Innovation-Priorities.\n\n🚀 ADVISORI's Performance Excellence Methodology:\n• System Design & Implementation: Development custom ESG-Performance-Management-Systeme, die organizational Needs und Industry Requirements berücksichtigen.\n• Data Architecture: Creation robuster Data-Management-Infrastruktur für Accurate, Timely und Actionable ESG-Information.\n• Change Management: Comprehensive Change Management für successful Performance-System-Adoption und User Engagement.\n• Continuous Optimization: Ongoing System Optimization basierend auf User Feedback, Regulatory Changes und Business Evolution."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
