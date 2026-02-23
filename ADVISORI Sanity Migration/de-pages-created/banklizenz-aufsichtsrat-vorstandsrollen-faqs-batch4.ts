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
    console.log('Updating Banklizenz Aufsichtsrat & Vorstandsrollen page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-aufsichtsrat-vorstandsrollen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-aufsichtsrat-vorstandsrollen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI Performance-Management-Systeme für Aufsichtsrat und Vorstand, die sowohl individuelle Excellence als auch kollektive Board-Effectiveness maximieren?",
        answer: "Erstklassige Board-Performance erfordert systematische Measurement, kontinuierliche Optimization und Performance-orientierte Entwicklung. ADVISORI entwickelt wissenschaftlich fundierte Performance-Management-Systeme, die individuelle Führungsexzellenz mit kollektiver Board-Effectiveness verbinden und messbare Value Creation sicherstellen.\n\n📊 Advanced Performance Excellence Framework:\n• Individual Competency Assessment: 360-Grad-Bewertungssysteme für Board-Members mit Banking-spezifischen KPIs, Leadership-Metriken und Stakeholder-Feedback-Integration.\n• Collective Board-Effectiveness Measurement: Systematische Evaluation von Group Dynamics, Decision Quality, Strategic Impact und Governance-Outcomes auf Gremienebene.\n• Performance-Based Development Planning: Individualisierte Development-Pläne basierend auf Performance-Gaps, Skill-Enhancement-Opportunities und Career-Progression-Zielen.\n• ROI-Measurement von Board-Investments: Quantifizierung des Financial Impact von Board-Decisions auf Unternehmenswert, Risk Mitigation und Strategic Success.\n\n🎯 ADVISORI's Excellence Optimization System:\n• Data-Driven Performance Analytics: Advanced Analytics zur Identification von Performance-Patterns, Success-Faktoren und Optimization-Opportunities auf Individual- und Board-Level.\n• Peer Benchmarking Intelligence: Vergleich mit Industry Best Practices und Top-Performing Banking-Boards zur Identification von Excellence-Standards und Improvement-Areas.\n• Continuous Feedback Integration: Real-time Feedback-Systeme für ongoing Performance-Optimization und Rapid Course-Correction bei Performance-Issues.\n• Performance-Linked Incentivization: Alignment von Board-Compensation und Recognition mit Performance-Outcomes und Value Creation-Metriken.\n• Excellence Recognition Programs: Systematic Recognition und Celebration von Outstanding Performance zur Motivation und Retention von Top-Performers."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "In welcher Weise optimiert ADVISORI die Technology-Integration und Digital-Governance-Capabilities von Aufsichtsrat und Vorstand für moderne Banking-Realitäten?",
        answer: "Die digitale Transformation des Banking-Sektors erfordert Board-Members mit nativer Digital-Kompetenz und Technology-Leadership-Fähigkeiten. ADVISORI entwickelt Technology-native Governance-Strukturen, die nicht nur Digital Banking verstehen, sondern auch als Strategic Driver für Innovation und Competitive Advantage fungieren.\n\n💻 Digital Governance Excellence Architecture:\n• Technology Leadership Integration: Board-Members mit proven Track Record in Fintech, Digital Banking und Technology-driven Business Transformation.\n• AI and Analytics Governance: Specialized Expertise in AI-Risk-Management, Algorithmic Decision-Making und Data-Governance für AI-powered Banking-Services.\n• Cybersecurity and Digital Risk Oversight: Advanced Competencies in Cyber-Risk-Management, Data Protection und Digital-Operational-Resilience.\n• Innovation and Disruption Management: Strategic Understanding von Fintech-Trends, Blockchain-Applications und emerging Technology-Impacts auf Banking.\n\n🚀 ADVISORI's Digital Excellence Framework:\n• Technology Investment Optimization: Board-Guidance für Technology-Investment-Decisions, Digital-Platform-Strategies und Innovation-Portfolio-Management.\n• Digital Customer Experience Oversight: Strategic Oversight von Digital-Customer-Journeys, UX-Excellence und Technology-enabled Service-Innovation.\n• RegTech and Compliance Automation: Leadership in Regulatory Technology-Implementation, Automated Compliance-Monitoring und Digital-Regulatory-Reporting.\n• Data Strategy and Analytics Leadership: Strategic Direction für Data-Monetization, Advanced Analytics-Capabilities und Data-driven Business-Model-Innovation.\n• Digital Ecosystem Partnership: Governance von Fintech-Allianzen, API-Banking-Strategies und Platform-Economy-Participation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie strukturiert ADVISORI Crisis-Management und Business-Continuity-Capabilities von Aufsichtsrat und Vorstand für resiliente Governance in volatilen Zeiten?",
        answer: "Moderne Banking-Umgebungen sind geprägt von Volatilität, Uncertainty und potentiellen Disruptions. ADVISORI entwickelt Crisis-resiliente Governance-Strukturen, die nicht nur auf Krisen reagieren, sondern proaktiv Resilience aufbauen und Crisis-Management als Competitive Advantage nutzen.\n\n🛡️ Crisis-Resilient Governance Architecture:\n• Crisis Leadership Preparedness: Board-Members mit bewährter Crisis-Management-Experience in Banking, Financial Services oder systemkritischen Industrien.\n• Business Continuity Integration: Governance-Frameworks mit embedded Business-Continuity-Planning, Crisis-Communication-Protocols und Rapid-Response-Mechanisms.\n• Stakeholder Crisis Communication: Professional Crisis-Communication-Capabilities für Investor-Relations, Regulatory-Interface und Public-Relations während Stress-Situationen.\n• Financial Stress Management: Expertise in Stress-Testing, Capital-Planning und Financial-Restructuring für Crisis-Scenarios.\n\n⚡ ADVISORI's Resilience Excellence Framework:\n• Predictive Crisis Intelligence: Early-Warning-Systems und Scenario-Planning-Capabilities zur Anticipation potentieller Crisis-Triggers und Preparation von Response-Strategies.\n• Rapid Decision-Making Protocols: Streamlined Decision-Making-Processes für Crisis-Situations mit Clear Authority-Lines und Accelerated Approval-Mechanisms.\n• Crisis Value Creation: Transformation von Crisis-Situations in Strategic-Opportunities durch Counter-Cyclical-Investments, Market-Share-Gains und Competitive-Repositioning.\n• Recovery and Growth Planning: Post-Crisis-Recovery-Strategies mit Focus auf Resilience-Building, Competitive-Advantage-Creation und Stakeholder-Confidence-Restoration.\n• Crisis Learning Integration: Systematic Learning aus Crisis-Experiences zur kontinuierlichen Improvement von Crisis-Preparedness und Resilience-Capabilities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie transformiert ADVISORI Traditional Board-Strukturen zu Innovation-Enablers, die Fintech-Integration und Banking-Innovation strategisch vorantreiben?",
        answer: "Die Zukunft des Banking wird durch Innovation und Fintech-Integration definiert. ADVISORI transformiert traditionelle Board-Strukturen zu Innovation-Catalysts, die nicht nur neue Technologien verstehen, sondern aktiv Innovation-Strategies entwickeln und Fintech-Partnerschaften orchestrieren.\n\n🚀 Innovation-Driven Governance Transformation:\n• Innovation Leadership Integration: Board-Members mit hands-on Experience in Fintech-Ventures, Innovation-Labs und Technology-Startup-Ecosystems.\n• Fintech Partnership Excellence: Strategic Expertise in Fintech-Due-Diligence, Partnership-Structuring und Integration-Management für Banking-Fintech-Allianzen.\n• Venture Capital and Investment Insight: Board-Capabilities in Venture-Investing, Corporate-Venture-Capital und Strategic-Investment-Evaluation.\n• Disruptive Business Model Assessment: Understanding von Platform-Business-Models, API-Economy und Ecosystem-Strategy-Development.\n\n💡 ADVISORI's Innovation Excellence Strategy:\n• Innovation Portfolio Management: Strategic Oversight von Innovation-Investments, R&D-Priorities und Technology-Development-Roadmaps.\n• Startup Ecosystem Integration: Active Participation in Fintech-Hubs, Accelerator-Programs und Innovation-Networks für Deal-Flow und Technology-Intelligence.\n• Corporate Innovation Culture: Leadership in Building Innovation-Culture, Risk-Taking-Appetite und Entrepreneurial-Mindset innerhalb Traditional Banking-Structures.\n• Technology Commercialization: Expertise in IP-Development, Technology-Licensing und Innovation-Monetization-Strategies.\n• Future Banking Vision: Strategic Visioning für Next-Generation-Banking, Digital-First-Strategies und Customer-Experience-Innovation."
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
