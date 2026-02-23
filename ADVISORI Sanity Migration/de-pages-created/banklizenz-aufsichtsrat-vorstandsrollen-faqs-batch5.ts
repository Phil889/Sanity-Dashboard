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
    console.log('Updating Banklizenz Aufsichtsrat & Vorstandsrollen page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI Compensation- und Incentive-Strukturen für Aufsichtsrat und Vorstand, die Performance maximieren und gleichzeitig regulatorische Compliance gewährleisten?",
        answer: "Strategische Compensation-Design ist ein kritischer Erfolgsfaktor für Board-Excellence und regulatory Compliance. ADVISORI entwickelt innovative Vergütungsstrukturen, die Top-Talent anziehen, Performance incentivieren und gleichzeitig alle BaFin-Anforderungen und prudential Standards erfüllen.\n\n💰 Strategic Compensation Excellence Framework:\n• Performance-Linked Compensation Design: Sophisticated Vergütungssysteme, die Long-term Value Creation, Risk-adjusted Returns und Stakeholder-Value-Maximierung incentivieren.\n• Regulatory Compliance Integration: Compensation-Strukturen, die alle CRR/CRD-Anforderungen, MaRisk-Standards und BaFin-Expectations vollständig erfüllen.\n• Market Competitiveness Analysis: Benchmark-basierte Compensation-Levels, die Top-Talent-Attraction und -Retention in competitive Banking-Markets ermöglichen.\n• ESG and Sustainability Integration: Integration von ESG-Metriken und Sustainability-KPIs in Performance-Measurement und Compensation-Calculations.\n\n🎯 ADVISORI's Value-Aligned Incentivization:\n• Multi-Dimensional Performance Metrics: Balanced Scorecards mit Financial-, Risk-, Customer- und Innovation-KPIs für holistische Performance-Bewertung.\n• Long-term Value Creation Focus: Compensation-Designs mit Multi-Year Performance-Periods und Clawback-Mechanisms für nachhaltige Value Creation.\n• Risk-Adjusted Performance Measurement: Integration von Risk-Metrics und Capital-Efficiency in Performance-Assessment zur Alignment mit prudential Banking-Principles.\n• Cultural and Behavioral Incentives: Incentivierung von Collaboration, Innovation und Ethical Leadership durch qualitative Performance-Assessments.\n• Stakeholder Value Optimization: Compensation-Alignment mit Shareholder Returns, Customer Satisfaction und Regulatory Compliance-Excellence."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "In welcher Weise strukturiert ADVISORI Board-Education und Continuous Learning-Programme, um Aufsichtsrat und Vorstand für evolvierende Banking-Herausforderungen zu rüsten?",
        answer: "Die Banking-Landschaft wandelt sich kontinuierlich durch Regulatorik, Technologie und Marktdynamik. ADVISORI entwickelt comprehensive Education- und Development-Programme, die Board-Members mit cutting-edge Knowledge und Skills ausstatten für Superior Decision-Making in komplexen Banking-Environments.\n\n🎓 Advanced Board Education Excellence:\n• Regulatory Intelligence Updates: Kontinuierliche Education über emerging Regulations, BaFin-Expectations und EU-wide Banking-Developments.\n• Technology and Innovation Training: Specialized Education in Fintech-Trends, Digital Banking-Innovations und Technology-Risk-Management.\n• Strategic Business Development: Advanced Training in Banking-Strategy, Market-Analysis und Competitive-Positioning für Strategic Leadership.\n• Risk and Crisis Management Excellence: Expertise-Building in Advanced Risk-Management, Crisis-Leadership und Business-Continuity-Planning.\n\n📈 ADVISORI's Learning Excellence Framework:\n• Personalized Development Pathways: Individualized Learning-Programmes basierend auf Individual Competency-Gaps und Career-Development-Objectives.\n• Industry Expert Network: Access zu Leading Industry-Experts, Thought-Leaders und Best-Practice-Sharing durch Exclusive Networks und Events.\n• Peer Learning and Benchmarking: Cross-Industry Learning-Opportunities mit Top-Performing Banking-Boards und Excellence-Sharing-Initiatives.\n• Practical Application Integration: Hands-on Learning durch Case-Studies, Simulation-Exercises und Real-World Problem-Solving-Workshops.\n• Continuous Assessment and Optimization: Regular Learning-Effectiveness-Assessment und Programme-Optimization für Maximum Impact und ROI."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie optimiert ADVISORI die Cultural Integration und Team-Dynamics von Aufsichtsrat und Vorstand für maximale Collaboration und Decision-Quality?",
        answer: "Exzellente Board-Performance basiert nicht nur auf individueller Kompetenz, sondern auch auf effektiver Team-Dynamik und Cultural Alignment. ADVISORI entwickelt Team-Excellence-Strategien, die individuelle Stärken in kollektive Superior Performance transformieren.\n\n🤝 Team Excellence and Cultural Integration:\n• Cultural Fit Assessment: Systematische Evaluation von Cultural Compatibility und Value-Alignment bei Board-Member-Selection für optimale Team-Chemistry.\n• Team Dynamics Optimization: Professional Team-Building und Collaboration-Enhancement für effective Group Decision-Making und Conflict-Resolution.\n• Communication Excellence Development: Advanced Communication-Skills-Training für Clear Articulation, Active Listening und Constructive Dialogue.\n• Diversity and Inclusion Excellence: Leveraging Cultural-, Gender- und Experience-Diversity für Enhanced Creativity und Decision-Quality.\n\n⚡ ADVISORI's Collaboration Excellence Framework:\n• Group Decision-Making Optimization: Structured Decision-Processes, die Individual Insights in Collective Wisdom transformieren und Group-Think vermeiden.\n• Conflict Resolution and Consensus Building: Professional Mediation-Skills und Consensus-Building-Techniques für Productive Disagreement und Resolution.\n• Trust and Psychological Safety: Creating Safe Environments für Open Discussion, Challenge und Innovation ohne Personal oder Professional Risk.\n• Collective Intelligence Maximization: Frameworks für Knowledge-Sharing, Expertise-Leveraging und Collaborative Problem-Solving.\n• Cultural Evolution and Adaptation: Continuous Cultural-Development und Adaptation an changing Business-Environments und Strategic-Priorities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie transformiert ADVISORI Board-Legacy und Institutional Knowledge in sustainable Competitive Advantages für langfristige Banking-Excellence?",
        answer: "Institutional Knowledge und Board-Legacy sind strategische Assets, die über Jahrzehnte aufgebaut werden und nachhaltigen Competitive Advantage schaffen. ADVISORI entwickelt Knowledge-Management-Systeme, die Board-Wisdom systematisch capture, preserve und optimize für Long-term Banking-Excellence.\n\n🏛️ Institutional Knowledge Excellence Framework:\n• Knowledge Capture and Documentation: Systematic Documentation von Decision-Rationales, Strategic-Insights und Lessons-Learned für Institutional Memory-Building.\n• Wisdom Transfer Architecture: Structured Knowledge-Transfer zwischen Senior- und Junior-Board-Members für Continuity und Skill-Development.\n• Best Practice Institutionalization: Transformation von Successful Approaches und Winning-Strategies in Standard-Operating-Procedures und Governance-Frameworks.\n• Historical Intelligence Integration: Leveraging Historical Banking-Cycles, Crisis-Experiences und Market-Insights für Predictive Decision-Making.\n\n🌟 ADVISORI's Legacy Excellence Strategy:\n• Strategic Memory Building: Creation von Institutional Knowledge-Repositories, die Strategic-Intelligence und Decision-Wisdom für Future-Generations zugänglich machen.\n• Mentoring and Apprenticeship Programs: Formal Mentoring-Relationships zwischen Experienced- und Emerging-Leaders für Knowledge-Transfer und Skill-Development.\n• Culture and Values Preservation: Systematic Preservation und Evolution von Organizational-Culture und Core-Values durch Leadership-Transitions.\n• Innovation on Foundation: Building Innovation und Change-Capability auf Foundation von Proven-Principles und Institutional-Wisdom.\n• Competitive Intelligence Legacy: Transformation von Market-Intelligence und Competitive-Insights in Sustainable-Competitive-Advantages und Strategic-Positioning."
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
