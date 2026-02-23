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
    console.log('Updating EU AI Act AI Risk Classification page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ai-risk-classification' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ai-risk-classification" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI dynamische AI-Risk-Assessment-Methodologien, die C-Level-Führungskräften ermöglichen, sich schnell an evolvierende EU AI Act-Interpretationen anzupassen ohne grundlegende System-Redesigns?",
        answer: "Die AI-Regulierungslandschaft entwickelt sich rasant, und statische Risk-Assessment-Ansätze werden schnell obsolet. ADVISORI hat adaptive Assessment-Frameworks entwickelt, die nicht nur aktuelle EU AI Act-Anforderungen erfüllen, sondern auch Future-Ready-Flexibility bieten und Continuous Evolution ermöglichen. Unsere Methodology schafft Regulatory Resilience bei maximaler Business-Agility.\n\n🔄 Adaptive AI-Risk-Assessment-Architecture:\n• Modular Framework-Design: Entwicklung componentisierter Risk-Assessment-Systeme, die selective Updates ermöglichen ohne komplette Framework-Overhauls bei Regulatory-Changes.\n• Scenario-Based Risk-Modeling: Multi-Scenario-Assessment-Capabilities, die verschiedene Regulatory-Evolution-Pfade antizipieren und entsprechende Risk-Mitigation-Strategien vorbereiten.\n• Real-time Regulatory-Intelligence-Integration: Automated Monitoring von EU AI Act-Updates und Impact-Assessment auf bestehende Risk-Classifications mit Adaptation-Recommendations.\n• Cross-Jurisdiction-Compatibility: Risk-Assessment-Frameworks, die nicht nur EU AI Act-konform sind, sondern auch Compatibility mit anderen AI-Regulations (US, UK, Asien) für Global Operations bieten.\n\n⚡ ADVISORI's Future-Ready Assessment-Excellence:\n• Predictive Regulatory-Modeling: Nutzung von Regulatory-Trend-Analysis und Policy-Intelligence zur Antizipation zukünftiger AI-Act-Entwicklungen und proaktiver Framework-Anpassung.\n• Agile Risk-Boundary-Management: Dynamic Risk-Category-Definitions, die sich automatisch an neue EU AI Act-Guidance anpassen ohne Manual Recalibration-Overhead.\n• Stakeholder-Impact-Optimization: Assessment-Methodologies, die nicht nur Regulatory-Compliance sicherstellen, sondern auch Stakeholder-Expectations und Market-Best-Practices integrieren.\n• Innovation-Velocity-Protection: Adaptive Frameworks, die Regulatory-Changes absorbieren ohne Innovation-Speed zu beeinträchtigen oder Development-Pipelines zu disruption.\n• Excellence-Benchmarking-Integration: Continuous Comparison mit Industry-Leaders und Best-Practice-Adoption für sustained Competitive-Advantage trotz Regulatory-Evolution."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welcher Weise strukturiert ADVISORI Cross-Functional AI-Risk-Teams, um C-Suite-Entscheidungen mit multidimensionaler Risk-Intelligence zu unterstützen und Silos zwischen Technical-, Legal- und Business-Teams zu eliminieren?",
        answer: "Effektives AI-Risk-Management erfordert nahtlose Collaboration zwischen verschiedenen Expertise-Bereichen. ADVISORI entwickelt innovative Cross-Functional-Team-Strukturen, die Technical Excellence, Legal Precision und Business Acumen integrieren für Holistic Risk-Intelligence und Accelerated Decision-Making. Unser Ansatz eliminiert Organizational Silos und maximiert Collective Intelligence.\n\n🤝 Integrated AI-Risk-Team-Architecture:\n• Multi-Disciplinary Risk-Councils: Strukturierte Team-Formations mit Technical AI-Experts, Legal Compliance-Specialists und Business Strategy-Leaders für 360-Degree Risk-Assessment.\n• Cross-Functional Risk-Communication-Protocols: Standardisierte Communication-Frameworks, die Complex Technical Risks in Business-accessible Language übersetzen und Strategic Decision-Support optimieren.\n• Unified Risk-Reporting-Systems: Integrated Dashboards, die Technical Risk-Metrics, Legal Compliance-Status und Business Impact-Analysis in Comprehensive Executive-Reports vereinen.\n• Agile Risk-Response-Teams: Rapid-Response-Capabilities für Emerging AI-Risks mit Pre-defined Escalation-Paths und Cross-Functional Decision-Authority für Speed-optimized Risk-Mitigation.\n\n🎯 ADVISORI's Collaborative Excellence-Framework:\n• Expertise-Optimization-Mapping: Strategic Alignment verschiedener Skill-Sets für Maximum Risk-Coverage bei Minimum Resource-Overlap und Optimal Team-Efficiency.\n• Knowledge-Transfer-Acceleration: Systematic Cross-Training-Programme, die Technical Teams Legal-Awareness und Legal Teams Technical-Understanding vermitteln für Enhanced Collaboration.\n• Decision-Velocity-Optimization: Streamlined Decision-Processes, die alle Stakeholder-Perspectives integrieren ohne Decision-Speed zu kompromittieren oder Accountability zu verwässern.\n• Innovation-Risk-Balance-Councils: Specialized Teams, die Innovation-Opportunities mit Risk-Considerations balancieren und Strategic Recommendations für Aggressive-but-Safe AI-Deployment entwickeln.\n• Performance-Measurement-Integration: Cross-Functional KPIs, die Team-Collaboration-Quality, Risk-Response-Speed und Decision-Accuracy messen für Continuous Team-Excellence-Improvement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie implementiert ADVISORI AI-Risk-Classification-Automation, die C-Level-Führungskräften Real-time Risk-Visibility ermöglicht und gleichzeitig Manual Assessment-Overhead eliminiert ohne Accuracy zu kompromittieren?",
        answer: "Manuelle AI-Risk-Assessments sind zeitaufwändig und fehleranfällig. ADVISORI hat Advanced Automation-Systeme entwickelt, die nicht nur Assessment-Speed dramatisch steigern, sondern auch Accuracy verbessern und C-Level-Führungskräften Real-time Risk-Intelligence bieten. Unsere Automation-Excellence schafft Scalable Risk-Management bei Superior Quality-Standards.\n\n🤖 Intelligent Risk-Classification-Automation:\n• AI-Powered Risk-Detection-Systems: Machine Learning-Algorithmen, die AI-System-Characteristics analysieren und Automatic Risk-Classification mit High Accuracy und Regulatory-Compliance durchführen.\n• Real-time Risk-Scoring-Engines: Dynamic Risk-Assessment-Platforms, die Continuous Monitoring ermöglichen und Automatic Risk-Score-Updates bei System-Changes oder Regulatory-Updates liefern.\n• Automated Compliance-Validation: Intelligent Systems, die EU AI Act-Compliance automatisch verifizieren und Non-Compliance-Risks mit Specific Remediation-Recommendations identifizieren.\n• Predictive Risk-Evolution-Modeling: Advanced Analytics, die Risk-Trajectory-Predictions ermöglichen und Proactive Risk-Mitigation-Alerts vor Problem-Materialization generieren.\n\n⚡ ADVISORI's Automation-Excellence-Architecture:\n• Human-AI-Collaboration-Optimization: Hybrid Systems, die Automation-Efficiency mit Human-Expertise-Validation kombinieren für Maximum Accuracy bei Optimal Speed und Regulatory-Confidence.\n• Exception-Based Manual-Review: Intelligent Triage-Systems, die nur Complex oder High-Stakes-Cases für Manual Expert-Review routen und Routine-Assessments vollständig automatisieren.\n• Audit-Trail-Automation: Comprehensive Documentation-Systems, die alle Assessment-Decisions automatic tracken für Regulatory-Audit-Readiness und Compliance-Verification.\n• Continuous Learning-Integration: Self-Improving Automation-Systems, die aus Assessment-Outcomes lernen und Classification-Accuracy kontinuierlich steigern durch Experience-Integration.\n• Stakeholder-Specific-Automation: Customized Automation-Outputs für verschiedene Audiences - Technical Details für Engineering-Teams, Executive Summaries für C-Level, Compliance-Reports für Legal-Teams."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Auf welche Weise optimiert ADVISORI AI-Risk-Classification für Multi-Stakeholder-Communication, um C-Level-Führungskräften ermöglichen, Risk-Narratives effektiv an Investors, Regulators und Customers zu kommunizieren?",
        answer: "AI-Risk-Communication erfordert stakeholder-spezifische Narratives, die Complex Technical Risks in überzeugende Business-Stories transformieren. ADVISORI entwickelt sophisticated Communication-Frameworks, die AI-Risk-Classifications in Powerful Stakeholder-Messages übersetzen und Trust-Building, Compliance-Demonstration und Investment-Attraction optimieren.\n\n📢 Strategic Risk-Communication-Excellence:\n• Investor-Focused Risk-Narratives: Transformation von Technical Risk-Data in Investment-relevante Stories, die Risk-Mitigation-Competence demonstrieren und Growth-Potential bei Controlled-Risk kommunizieren.\n• Regulatory-Confidence-Building: Professional Risk-Documentation und -Presentation, die Regulatory-Excellence signalisiert und Supervisor-Trust für Extended-Permissions und Reduced-Oversight aufbaut.\n• Customer-Trust-Optimization: Risk-Communication-Strategies, die AI-Safety und Reliability kommunizieren ohne Innovation-Excitement zu reduzieren oder Competitive-Differentiation zu verwässern.\n• Media-Proactive-Messaging: Prepared Communication-Frameworks für AI-Risk-Related-Media-Inquiries mit Consistent Messaging und Reputation-Protection bei Crisis-Situations.\n\n🎯 ADVISORI's Multi-Channel-Communication-Framework:\n• Audience-Tailored-Risk-Translation: Specialized Communication-Approaches für verschiedene Stakeholder-Groups mit Appropriate Technical-Depth und Relevant Business-Context für Maximum Impact.\n• Visual Risk-Communication-Excellence: Advanced Data-Visualization und Infographic-Development, die Complex Risk-Landscapes in Accessible und Compelling Visual-Narratives transformieren.\n• Proactive-Transparency-Strategies: Strategic Risk-Disclosure-Approaches, die Proactive-Communication nutzen für Trust-Building und Competitive-Advantage-Creation durch Transparency-Leadership.\n• Crisis-Communication-Preparedness: Pre-developed Communication-Strategies für AI-Risk-Related-Issues mit Rapid-Response-Capabilities und Reputation-Protection-Mechanisms.\n• Success-Story-Development: Risk-Management-Excellence-Cases und Achievement-Narratives, die AI-Governance-Leadership demonstrieren und Market-Positioning für Premium-Partnerships optimieren."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
