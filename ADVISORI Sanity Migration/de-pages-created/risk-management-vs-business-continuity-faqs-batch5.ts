import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Risk Management vs Business Continuity page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'risk-management-vs-business-continuity' })
    
    if (!existingDoc) {
      throw new Error('Document "risk-management-vs-business-continuity" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie können Unternehmen die Wirksamkeit ihrer integrierten Risk Management und Business Continuity Programme messen und kontinuierlich verbessern?',
        answer: "Wirksamkeitsmessung integrierter RM/BC Programme erfordert ganzheitliche Bewertungsansätze, die quantitative Metriken mit qualitativen Assessments kombinieren. Kontinuierliche Verbesserung basiert auf systematischer Performance-Analyse und adaptiven Optimierungszyklen.\n\n📊 Integrated Performance Measurement:\n• Entwickeln Sie Balanced Scorecards mit Risk-Continuity Perspektiven für ganzheitliche Performance-Bewertung\n• Implementieren Sie Leading und Lagging Indicators für proaktive und reaktive Performance-Messung\n• Nutzen Sie Risk-adjusted Performance Metriken für Value-based Assessment\n• Etablieren Sie Benchmark-Vergleiche mit Industry Best Practices\n• Schaffen Sie Real-time Dashboards für kontinuierliche Performance-Überwachung\n\n🎯 Effectiveness Assessment Framework:\n• Führen Sie regelmäßige Maturity Assessments für beide Bereiche durch\n• Implementieren Sie Scenario-based Testing für Integrated Response Capabilities\n• Nutzen Sie Stakeholder Satisfaction Surveys für User Experience Bewertung\n• Etablieren Sie Cost-Benefit Analysis für Investment Optimization\n• Entwickeln Sie Risk-Continuity Return on Investment Calculations\n\n🔄 Continuous Improvement Cycles:\n• Implementieren Sie Plan-Do-Check-Act Zyklen für systematische Verbesserung\n• Etablieren Sie Lessons Learned Processes nach Incidents und Exercises\n• Nutzen Sie Root Cause Analysis für Performance Gap Identification\n• Schaffen Sie Innovation Labs für Emerging Practice Development\n• Entwickeln Sie Feedback Loops zwischen allen Stakeholder-Gruppen\n\n💡 Advanced Analytics für Improvement:\n• Nutzen Sie Predictive Analytics für Performance Forecasting\n• Implementieren Sie Machine Learning für Pattern Recognition\n• Etablieren Sie Network Analysis für Interdependency Optimization\n• Verwenden Sie Simulation Models für What-if Analysis\n• Schaffen Sie AI-driven Recommendation Engines für Improvement Actions"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Governance-Strukturen und Entscheidungsprozesse sind für eine erfolgreiche Integration von Risk Management und Business Continuity erforderlich?',
        answer: "Erfolgreiche RM/BC Integration erfordert adaptive Governance-Strukturen, die klare Verantwortlichkeiten, effiziente Entscheidungsprozesse und strategische Ausrichtung gewährleisten. Moderne Governance kombiniert traditionelle Oversight mit agilen Entscheidungsmechanismen.\n\n🏛️ Integrated Governance Architecture:\n• Etablieren Sie Unified Risk-Continuity Committees mit Executive Sponsorship\n• Schaffen Sie Cross-functional Steering Groups für operative Koordination\n• Implementieren Sie Matrix Reporting Structures für flexible Zusammenarbeit\n• Entwickeln Sie Clear Escalation Pathways für kritische Entscheidungen\n• Nutzen Sie Advisory Boards mit externen Experten für Strategic Guidance\n\n⚖️ Decision-Making Frameworks:\n• Implementieren Sie Risk-informed Decision Processes mit Continuity Considerations\n• Etablieren Sie Delegated Authority Structures für verschiedene Risk-Continuity Levels\n• Nutzen Sie Data-driven Decision Support Systems\n• Schaffen Sie Rapid Response Mechanisms für Crisis Situations\n• Entwickeln Sie Consensus-building Processes für Strategic Decisions\n\n📋 Accountability und Responsibility:\n• Definieren Sie Clear Role Definitions mit integrierten Verantwortlichkeiten\n• Implementieren Sie Performance-based Incentive Structures\n• Etablieren Sie Regular Review und Assessment Processes\n• Nutzen Sie Three Lines of Defense Model für Integrated Assurance\n• Schaffen Sie Transparent Reporting Mechanisms für alle Stakeholder\n\n🔄 Adaptive Governance Mechanisms:\n• Implementieren Sie Agile Governance Practices für Dynamic Environments\n• Etablieren Sie Continuous Learning Integration in Governance Processes\n• Nutzen Sie Technology-enabled Governance für Efficiency\n• Schaffen Sie Flexible Structures für Changing Business Needs\n• Entwickeln Sie Innovation-friendly Governance für Emerging Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie können Unternehmen Stakeholder-Erwartungen und Kommunikation bei der Integration von Risk Management und Business Continuity effektiv managen?',
        answer: "Effektives Stakeholder Management für RM/BC Integration erfordert strategische Kommunikation, die verschiedene Interessensgruppen anspricht und deren spezifische Bedürfnisse berücksichtigt. Erfolgreiche Ansätze schaffen Vertrauen, Transparenz und kontinuierliches Engagement.\n\n👥 Stakeholder Mapping und Segmentation:\n• Identifizieren Sie alle relevanten Stakeholder-Gruppen mit unterschiedlichen Risk-Continuity Interessen\n• Entwickeln Sie Stakeholder Influence-Interest Matrices für prioritized Engagement\n• Segmentieren Sie Audiences nach Information Needs und Communication Preferences\n• Etablieren Sie Stakeholder Journey Maps für Touchpoint Optimization\n• Nutzen Sie Persona Development für targeted Communication Strategies\n\n📢 Strategic Communication Framework:\n• Entwickeln Sie Integrated Messaging Strategies mit consistent Value Propositions\n• Implementieren Sie Multi-channel Communication Approaches\n• Schaffen Sie Storytelling Frameworks für Complex Risk-Continuity Concepts\n• Etablieren Sie Regular Communication Rhythms und Cadences\n• Nutzen Sie Visual Communication Tools für Enhanced Understanding\n\n🎯 Expectation Management:\n• Führen Sie Stakeholder Expectation Assessments durch\n• Entwickeln Sie Clear Service Level Agreements für verschiedene Stakeholder-Gruppen\n• Implementieren Sie Transparent Progress Reporting\n• Etablieren Sie Feedback Mechanisms für Continuous Alignment\n• Schaffen Sie Realistic Timeline Communication für Integration Milestones\n\n💬 Engagement und Participation:\n• Implementieren Sie Co-creation Processes für Stakeholder Input\n• Etablieren Sie Advisory Groups für Strategic Guidance\n• Nutzen Sie Workshops und Collaborative Sessions\n• Schaffen Sie Digital Engagement Platforms für Continuous Interaction\n• Entwickeln Sie Recognition Programmes für Stakeholder Contributions\n\n🔄 Crisis Communication Integration:\n• Entwickeln Sie Integrated Crisis Communication Plans\n• Implementieren Sie Stakeholder-specific Communication Protocols\n• Etablieren Sie Real-time Communication Capabilities\n• Nutzen Sie Social Media und Digital Channels für Rapid Response\n• Schaffen Sie Post-incident Communication Strategies für Learning Sharing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche praktischen Schritte sollten Unternehmen unternehmen, um mit der Integration von Risk Management und Business Continuity zu beginnen?',
        answer: "Der Beginn einer RM/BC Integration erfordert strukturierte, schrittweise Herangehensweise mit klaren Meilensteinen und Quick Wins. Erfolgreiche Implementierung startet mit Assessment, Planung und pilotbasierten Ansätzen für nachhaltigen Wandel.\n\n🎯 Phase 1 - Assessment und Baseline:\n• Führen Sie Current State Assessment für beide Bereiche durch\n• Dokumentieren Sie bestehende Processes, Systems und Capabilities\n• Identifizieren Sie Integration Opportunities und Synergien\n• Bewerten Sie Organizational Readiness für Change\n• Entwickeln Sie Business Case mit quantifizierten Benefits\n• Etablieren Sie Baseline Metrics für Progress Measurement\n\n📋 Phase 2 - Strategic Planning:\n• Definieren Sie Integration Vision und Strategic Objectives\n• Entwickeln Sie Detailed Implementation Roadmap mit Prioritäten\n• Identifizieren Sie Required Resources und Budget Allocation\n• Etablieren Sie Governance Structure und Decision-making Processes\n• Schaffen Sie Change Management Strategy\n• Planen Sie Communication und Stakeholder Engagement\n\n🚀 Phase 3 - Pilot Implementation:\n• Wählen Sie High-impact, Low-risk Pilot Areas\n• Implementieren Sie Quick Wins für Early Success\n• Testen Sie Integrated Processes und Workflows\n• Sammeln Sie Feedback und Lessons Learned\n• Validieren Sie Technology Solutions\n• Messen Sie Pilot Performance gegen Baseline\n\n🔄 Phase 4 - Scaled Rollout:\n• Erweitern Sie erfolgreiche Pilot Approaches\n• Implementieren Sie Full-scale Integration Programme\n• Etablieren Sie Training und Development Initiatives\n• Integrieren Sie Technology Platforms\n• Schaffen Sie Performance Monitoring Systems\n• Entwickeln Sie Continuous Improvement Processes\n\n💡 Critical Success Factors:\n• Sichern Sie Executive Sponsorship und Leadership Commitment\n• Investieren Sie in Change Management und People Development\n• Starten Sie mit Business-critical Areas für Maximum Impact\n• Nutzen Sie External Expertise für Acceleration\n• Planen Sie für Long-term Sustainability\n• Feiern Sie Milestones und Success Stories für Momentum"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
