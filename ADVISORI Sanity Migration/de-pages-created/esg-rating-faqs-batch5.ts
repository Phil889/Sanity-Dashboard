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
    console.log('Updating ESG Rating page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-rating' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-rating" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI eine ESG-Kommunikationsstrategie, die authentisch ist und gleichzeitig Rating-Agenturen und Stakeholder optimal anspricht?",
        answer: "Authentische ESG-Kommunikation ist ein strategischer Balanceakt zwischen Transparency, Ambition und Glaubwürdigkeit. Übertreibung führt zu Greenwashing-Vorwürfen, während Understatement wertvolle Rating-Improvements verschenkt. ADVISORI entwickelt evidenz-basierte ESG-Communication-Strategien, die Ihre Performance optimal positionieren und Stakeholder-Vertrauen nachhaltig stärken.\n\n📢 Strategic ESG Communication Excellence:\n• Evidence-Based Storytelling: Entwicklung datengestützter ESG-Narrative, die konkrete Achievements, Measurable Impacts und Transparent Challenges kommunizieren.\n• Audience-Specific Messaging: Maßgeschneiderte Communication-Frameworks für Rating-Agenturen, Investoren, Kunden, Mitarbeiter und Regulatoren mit jeweils relevanten Schwerpunkten.\n• Materiality-Focused Communication: Konzentration auf ESG-Themen mit der höchsten Business-Relevance und Stakeholder-Interest für maximale Message-Impact.\n• Progress-Oriented Transparency: Kommunikation von ESG-Journeys statt Perfect Outcomes für Enhanced Authenticity und Continuous Improvement-Mindset.\n\n🎯 ADVISORI's Communication Mastery Framework:\n• Multi-Channel Integration: Kohärente ESG-Communication über alle Touchpoints hinweg - von Annual Reports über Investor Relations bis zu Social Media und Employee Communication.\n• Real-Time Performance Communication: Aufbau von Digital-Platforms für kontinuierliche ESG-Progress-Updates und Stakeholder-Engagement.\n• Crisis Communication Preparedness: Entwicklung proaktiver Communication-Strategien für ESG-Challenges und Controversy-Management.\n• Thought Leadership Positioning: Etablierung Ihrer Führungskräfte als ESG-Thought-Leaders durch Strategic Content Creation und Industry Engagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Technologien und Digital-Tools nutzt ADVISORI für ESG Rating-Optimierung und wie integrieren wir diese in unsere bestehenden Systeme?",
        answer: "Die Digitalisierung der ESG-Landschaft beschleunigt sich rasant. Von AI-powered Rating-Predictions über Blockchain-basierte Supply Chain-Tracking bis zu IoT-enabled Environmental Monitoring - moderne ESG-Excellence erfordert sophisticated Technology-Stacks. ADVISORI bringt cutting-edge ESG-Tech-Expertise mit, um Ihre Digital ESG Infrastructure zu optimieren und Competitive Advantages zu schaffen.\n\n💻 Next-Generation ESG Technology Stack:\n• AI-Powered ESG Analytics: Machine Learning-Algorithmen für Predictive ESG-Performance-Modeling, Automated Risk-Detection und Intelligent Rating-Optimization.\n• Integrated ESG Management Platforms: Unified Digital-Ecosystems für End-to-End ESG-Data-Management, Performance-Tracking und Stakeholder-Reporting.\n• Blockchain-Based Transparency: Distributed Ledger-Technologies für Tamper-Proof ESG-Reporting, Supply Chain-Traceability und Enhanced Credibility.\n• IoT-Enabled Real-Time Monitoring: Smart Sensor-Networks für Continuous Environmental Impact-Tracking und Automated Data-Collection.\n\n🚀 ADVISORI's Digital ESG Transformation:\n• Seamless System Integration: Expertise in der Integration von ESG-Technologies in bestehende ERP-, CRM- und Business Intelligence-Systeme ohne Operational Disruption.\n• Custom ESG Dashboard Development: Aufbau Executive-Level ESG-Dashboards mit Real-Time KPIs, Predictive Analytics und Actionable Insights.\n• Automated Reporting & Compliance: Implementation von Digital-Workflows für Automated ESG-Reporting an Rating-Agenturen, Regulatoren und Stakeholder.\n• Advanced Data Analytics: Nutzung von Big Data-Technologien für Deep ESG-Performance-Insights und Strategic Decision-Support."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie misst ADVISORI den Erfolg unserer ESG Rating-Initiativen und welche KPIs verwenden wir für kontinuierliche Verbesserung?",
        answer: "Erfolgreiche ESG Rating-Optimierung erfordert systematic Performance-Measurement über Multiple Dimensions hinweg. Von direkten Rating-Improvements über Financial Impact bis zu Stakeholder-Sentiment - ADVISORI entwickelt comprehensive KPI-Frameworks, die sowohl Leading als auch Lagging Indicators erfassen und Continuous Improvement-Cycles ermöglichen.\n\n📊 Comprehensive ESG Success Measurement:\n• Direct Rating Performance: Systematisches Tracking aller relevanten ESG-Ratings (MSCI, Sustainalytics, CDP, etc.) mit Trend-Analysis und Peer-Benchmarking.\n• Financial Impact Metrics: Quantifizierung der Business-Value-Creation durch ESG-Excellence, inkl. Cost of Capital-Reduction, Revenue-Enhancement und Risk-Mitigation.\n• Stakeholder Engagement Quality: Measurement von Investor-Confidence, Customer-Satisfaction, Employee-Engagement und Community-Support.\n• Operational Excellence Indicators: Tracking von ESG-Integration in Business-Processes, Decision-Making-Quality und Cultural-Transformation-Progress.\n\n⚡ ADVISORI's Performance Excellence Framework:\n• Real-Time Performance Dashboards: Implementation von Live-KPI-Monitoring für kontinuierliche Visibility und Proactive Adjustment-Capabilities.\n• Predictive Performance Modeling: AI-powered Forecasting von ESG-Rating-Trajectories basierend auf Current Initiatives und Market-Trends.\n• Multi-Stakeholder Impact Assessment: 360-Degree Performance-Evaluation aus Perspektive aller relevanten Stakeholder-Groups.\n• Continuous Improvement Integration: Systematische Translation von Performance-Insights in Actionable Improvement-Strategies und Strategic Pivots."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie positioniert ADVISORI unser Unternehmen als ESG-Leader in unserer Branche und welche langfristigen Strategien sichern unsere Marktführerschaft?",
        answer: "ESG-Leadership ist mehr als Superior Ratings - es bedeutet, Industry-Standards zu setzen, Innovation zu treiben und als Vorbild für nachhaltige Geschäftspraktiken zu fungieren. ADVISORI entwickelt transformative ESG-Leadership-Strategien, die nicht nur Current Performance optimieren, sondern auch Future-Ready Capabilities aufbauen und Sustainable Competitive Advantages schaffen.\n\n🏆 ESG-Leadership-Excellence-Strategy:\n• Industry Standard-Setting: Proaktive Gestaltung von Branchenstandards durch Thought Leadership, Best Practice-Sharing und Regulatory-Engagement.\n• Innovation-Driven Differentiation: Entwicklung breakthrough ESG-Innovations, die neue Maßstäbe setzen und First-Mover-Advantages sichern.\n• Ecosystem-Leadership: Aufbau von Partnerships und Alliances für Collective Impact und Enhanced Industry-Transformation.\n• Future-Readiness Building: Anticipation zukünftiger ESG-Trends und proaktive Capability-Development für Sustained Leadership-Position.\n\n🌟 ADVISORI's Market Leadership Framework:\n• Reputation-Capital Maximization: Systematischer Aufbau von ESG-Reputation als Strategic Asset für Enhanced Market-Position und Stakeholder-Attraction.\n• Competitive Intelligence & Strategy: Kontinuierliches Monitoring von Competitor-ESG-Strategies und Development defensiver sowie offensiver Counter-Strategies.\n• Sustainable Innovation Pipeline: Establishment einer Culture of Continuous ESG-Innovation für Long-Term Differentiation und Market-Leadership.\n• Legacy-Building Vision: Development einer Long-Term ESG-Vision, die über Current Business-Cycles hinausgeht und Generational-Impact schafft."
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
