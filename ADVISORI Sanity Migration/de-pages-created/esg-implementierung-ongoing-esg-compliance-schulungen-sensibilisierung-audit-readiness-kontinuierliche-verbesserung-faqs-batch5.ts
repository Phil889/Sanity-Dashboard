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
    console.log('Updating ESG Implementierung page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie strukturiert ADVISORI ESG-Investment-Strategy und Capital-Allocation-Optimization für C-Level-Value-Maximization, um nicht nur Compliance-Costs zu minimieren, sondern auch ESG-ROI und Strategic-Investment-Returns zu maximieren?",
        answer: "ESG-Investment-Strategy erfordert sophistizierte Capital-Allocation-Frameworks, die nicht nur Compliance-Requirements erfüllen, sondern auch maximale Business-Value und Strategic-Returns generieren. ADVISORI entwickelt innovative Investment-Optimization-Strategies, die ESG von Cost-Center zu Profit-Center transformieren.\n\n💰 Strategic ESG-Investment-Architecture:\n• ROI-Optimized Portfolio Management: Systematische Analyse und Priorisierung von ESG-Investments basierend auf Multi-Criteria-Decision-Analysis mit Financial-, Strategic- und Impact-Returns.\n• Capital Efficiency Maximization: Advanced Financial-Modeling für ESG-Investment-Optimization mit NPV-Analysis, Risk-Adjusted-Returns und Strategic-Option-Valuation.\n• Synergy-Driven Investment Planning: Identification und Maximization von Cross-Investment-Synergies für Enhanced-Returns und Accelerated-Impact-Achievement.\n• Dynamic Resource Allocation: Agile Investment-Reallocation basierend auf Performance-Data und Market-Opportunity-Changes für Optimal-Capital-Utilization.\n\n📈 ADVISORI's Value-Creation-Investment-Methodology:\n• Strategic Investment Laddering: Phased Investment-Approaches mit Early-Wins, Medium-term-Gains und Long-term-Value-Creation für Continuous-ROI-Generation.\n• ESG-Investment Tax Optimization: Maximization von ESG-related Tax-Benefits, Incentives und Regulatory-Advantages für Enhanced-Net-Returns.\n• Impact-to-Revenue Conversion: Systematic Strategies für Converting-ESG-Impact in Measurable-Business-Value durch Market-Premium-Capture und Efficiency-Gains.\n• Innovation Investment Excellence: Strategic Allocation zu High-Potential ESG-Innovations für Breakthrough-Return-Generation und Market-Leadership-Creation.\n• Partnership Investment Leverage: Strategic Co-Investments und Partnership-Structures für Risk-Sharing und Return-Amplification in ESG-Initiatives."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "In welcher Weise entwickelt ADVISORI ESG-Talent-Management und Leadership-Development für C-Level-Organizational-Excellence, um nicht nur ESG-Competencies zu entwickeln, sondern auch Next-Generation-Leaders und Innovation-Champions zu schaffen?",
        answer: "ESG-Talent-Management ist entscheidend für nachhaltige Organizational-Excellence und Future-Leadership-Development. ADVISORI entwickelt comprehensive Talent-Development-Frameworks, die nicht nur Current-ESG-Competencies aufbauen, sondern auch Next-Generation-Leaders mit Innovation-Mindset und Change-Leadership-Capabilities schaffen.\n\n🎯 Advanced ESG-Talent-Excellence-Framework:\n• ESG-Leadership Competency Development: Systematic Development von ESG-specific Leadership-Skills mit Strategic-Thinking, Stakeholder-Management und Innovation-Leadership-Capabilities.\n• High-Potential Identification und Acceleration: Strategic Identification und Fast-Track-Development von ESG-Talents mit High-Leadership-Potential für Future-C-Level-Pipeline-Building.\n• Cross-Functional ESG-Expert Development: Creation von ESG-Expertise across alle Business-Functions für Integrated-ESG-Thinking und Holistic-Performance-Excellence.\n• External Talent Acquisition Excellence: Strategic Recruitment von ESG-Expertise und Industry-Leaders für Immediate-Capability-Enhancement und Knowledge-Transfer.\n\n🚀 ADVISORI's Leadership-Innovation-Methodology:\n• ESG-Innovation Champions Program: Specialized Development-Programs für Innovation-Leaders mit Entrepreneurial-Mindset und Change-Agent-Capabilities.\n• Reverse-Mentoring Integration: Innovative Learning-Approaches mit Young-Talent-zu-Senior-Leadership Knowledge-Transfer für Digital-ESG-Innovation.\n• Global ESG-Leadership Networks: Access zu International-ESG-Leadership-Communities für Best-Practice-Learning und Strategic-Partnership-Development.\n• Leadership Succession Planning: Long-term ESG-Leadership-Pipeline-Development mit Clear-Career-Paths und Strategic-Development-Roadmaps.\n• Performance-Driven Leadership Evaluation: Advanced Assessment-Systems für ESG-Leadership-Performance mit Multi-Stakeholder-Feedback und Continuous-Development-Planning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie optimiert ADVISORI ESG-Regulatory-Anticipation und Future-Compliance-Readiness für C-Level-Strategic-Advantage, um nicht nur Current-Regulations zu erfüllen, sondern auch Regulatory-Changes zu antizipieren und First-Mover-Advantages zu schaffen?",
        answer: "ESG-Regulatory-Anticipation ist ein strategischer Imperativ für Future-Readiness und Competitive-Advantage-Creation. ADVISORI entwickelt predictive Regulatory-Intelligence-Systems, die nicht nur Current-Compliance sicherstellen, sondern auch Future-Regulatory-Developments antizipieren und Strategic-Advantages schaffen.\n\n🔮 Predictive ESG-Regulatory-Intelligence:\n• Advanced Regulatory Trend Analysis: Sophisticated Monitoring von Policy-Developments, Legislative-Trends und Regulatory-Signals für Early-Identification von Future-Requirements.\n• Multi-Jurisdiction Intelligence Integration: Comprehensive Analysis von Global-Regulatory-Developments für International-Strategy-Alignment und Cross-Border-Compliance-Excellence.\n• Stakeholder Influence Mapping: Strategic Analysis von Regulatory-Stakeholder-Networks und Influence-Patterns für Policy-Development-Prediction.\n• Scenario-Based Compliance Planning: Development verschiedener Compliance-Scenarios für Alternative-Regulatory-Futures mit Preparation-Strategies.\n\n⚡ ADVISORI's Strategic Regulatory-Excellence:\n• Pre-Emptive Compliance Implementation: Strategic Implementation von Best-Practice-Standards vor Regulatory-Requirements für Market-Leadership-Positioning.\n• Regulatory Innovation Partnerships: Strategic Collaboration mit Regulators und Policy-Makers für Industry-Standard-Influence und Compliance-Advantage-Creation.\n• Adaptive Compliance Architecture: Flexible Compliance-Systems, die sich rapidly an neue Regulatory-Requirements anpassen können ohne Major-Restructuring.\n• Regulatory Capital Efficiency: Optimization von Compliance-Investments für Maximum-Regulatory-Benefit und Minimum-Resource-Utilization.\n• Industry Leadership Positioning: Strategic Positioning als ESG-Regulatory-Thought-Leader für Influence-Building und Standard-Setting-Participation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "In welcher Weise etabliert ADVISORI ESG-Value-Communication und Stakeholder-Engagement-Excellence für C-Level-Market-Influence, um nicht nur ESG-Performance zu kommunizieren, sondern auch Market-Narratives zu beeinflussen und Industry-Standards zu setzen?",
        answer: "ESG-Value-Communication transzendiert Basic-Reporting und wird zu einem strategischen Tool für Market-Influence und Industry-Leadership. ADVISORI entwickelt innovative Communication-Strategies, die nicht nur ESG-Performance kommunizieren, sondern auch Market-Narratives beeinflussen und Industry-Standards setzen.\n\n📢 Strategic ESG-Communication-Excellence:\n• Market-Narrative Development: Creation überzeugender ESG-Narratives, die nicht nur Company-Performance darstellen, sondern auch Industry-Vision und Future-Direction definieren.\n• Multi-Stakeholder Orchestration: Coordinated Communication-Strategies für verschiedene Stakeholder-Groups mit Tailored-Messages und Optimal-Channel-Selection.\n• Thought-Leadership Platform Creation: Development von Content-Strategies und Communication-Platforms für Industry-Authority-Building und Market-Influence-Maximization.\n• Crisis-Proof Communication Architecture: Robust Communication-Frameworks, die auch in challenging ESG-Situations Credibility und Trust-Maintenance ermöglichen.\n\n🌟 ADVISORI's Market-Influence-Maximization:\n• Industry Standard-Setting Communication: Strategic Communication-Initiatives für Industry-Standard-Influence und Best-Practice-Definition through Thought-Leadership.\n• Strategic Partnership Communication: Joint-Communication-Initiatives mit Industry-Leaders und Stakeholders für Amplified-Message-Reach und Enhanced-Credibility.\n• Data-Driven Communication Impact: Systematic Measurement von Communication-Effectiveness mit Advanced-Analytics und Continuous-Message-Optimization.\n• Future-Vision Communication: Forward-looking ESG-Communication für Market-Anticipation-Leadership und Strategic-Direction-Setting.\n• Global Communication Scaling: International Communication-Strategies für Global-Market-Influence und Cross-Cultural-Stakeholder-Engagement-Excellence."
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
