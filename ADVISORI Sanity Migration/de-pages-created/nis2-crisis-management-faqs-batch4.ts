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
    console.log('Updating NIS2 Crisis Management page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-crisis-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-crisis-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI Dynamic Crisis Response-Strategien für C-Level-Führungskräfte, um NIS2-Vorfälle unterschiedlicher Severity-Level optimal zu bewältigen und Strategic Impact zu minimieren?",
        answer: "Verschiedene Crisis-Szenarien erfordern maßgeschneiderte Response-Strategien und differenzierte C-Level-Involvement. ADVISORI entwickelt intelligente Dynamic Response-Frameworks, die automatisch Crisis-Severity bewerten und angemessene Response-Protokolle aktivieren, um Strategic Impact zu minimieren und optimale Resource-Allocation sicherzustellen.\n\n🎚️ Adaptive Crisis Response Architecture:\n• Intelligent Severity Classification: KI-basierte Systeme zur automatischen Bewertung von Incident-Severity basierend auf Business Impact, Technical Complexity und Regulatory Implications für angemessene Response-Skalierung.\n• Graduated Response Protocols: Gestaffelte Eskalationsstufen mit klar definierten C-Level-Involvement-Triggern zur Optimierung von Leadership-Ressourcen und Decision-Making-Effizienz.\n• Resource Allocation Optimization: Dynamic Assignment von Human Resources, Technical Assets und External Support basierend auf Crisis-Charakteristika und Available Capabilities.\n• Strategic Priority Protection: Intelligente Priorisierung kritischer Business Functions und Revenue Streams während verschiedener Crisis-Intensitätsstufen.\n\n⚡ ADVISORI's Dynamic Excellence Framework:\n• Contextual Decision Support: Crisis-spezifische Decision Trees und Strategic Options-Entwicklung, die C-Level-Führungskräften optimale Response-Strategien für verschiedene Scenario-Types liefern.\n• Adaptive Stakeholder Communication: Maßgeschneiderte Communication-Strategien für verschiedene Crisis-Levels mit angemessenen Transparency-Levels und Stakeholder-Expectations-Management.\n• Flexible Recovery Planning: Modulare Recovery-Strategien, die an Crisis-Severity und Available Resources angepasst werden können für optimale Recovery-Time und Cost-Optimization.\n• Performance-Based Escalation: Evidence-basierte Escalation-Criteria, die auf Actual Crisis-Development und Response-Effectiveness basieren statt auf starren Time-based Rules.\n• Strategic Opportunity Recognition: Frameworks zur Identification von Strategic Opportunities während verschiedener Crisis-Phases für Value Creation durch Superior Crisis Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie strukturiert ADVISORI Multi-Stakeholder Crisis Communication für C-Level-Teams, um während NIS2-Vorfällen Stakeholder-Confidence zu erhalten und Reputational Risk zu minimieren?",
        answer: "Effektive Crisis Communication ist kritisch für Reputation Protection und Stakeholder-Confidence während Cybersecurity-Vorfällen. ADVISORI entwickelt sophisticated Communication-Frameworks, die nicht nur NIS2-Meldepflichten erfüllen, sondern auch Strategic Communication-Excellence für maximale Stakeholder-Trust und Reputational Resilience schaffen.\n\n📢 Strategic Communication Excellence Architecture:\n• Stakeholder-Segmented Messaging: Maßgeschneiderte Communication-Strategien für verschiedene Stakeholder-Gruppen (Customers, Investors, Regulators, Partners) mit angemessenen Detail-Levels und Timing-Optimization.\n• Proactive Transparency Management: Intelligente Balance zwischen Regulatory Transparency-Anforderungen und Strategic Information-Protection für optimale Stakeholder-Relations.\n• Real-time Message Coordination: Centralized Message-Control-Systeme zur Sicherstellung konsistenter Communication across alle Kanäle und Stakeholder-Touchpoints.\n• Crisis Narrative Development: Strategic Storytelling-Frameworks, die Crisis-Response-Excellence und Organizational Competence betonen für Confidence-Building.\n\n🎯 ADVISORI's Communication Excellence Methodology:\n• Executive Spokesperson Training: C-Level Media-Training und Crisis Communication-Coaching für authentische, confident Crisis-Leadership-Representation in Public Communications.\n• Multi-Channel Message Orchestration: Koordinierte Distribution von Crisis-Updates across verschiedene Communication-Channels (Press, Social Media, Direct Stakeholder-Communication) für maximale Reach und Consistency.\n• Sentiment Monitoring Integration: Real-time Tracking von Stakeholder-Sentiment und Public Perception während Crisis für adaptive Message-Optimization und Reputational Risk-Mitigation.\n• Regulatory Communication Excellence: Specialized Communication-Protocols für Regulatory Authorities mit Fokus auf Cooperation, Transparency und Professional Excellence für Enhanced Regulatory Relations.\n• Post-Crisis Reputation Recovery: Strategic Communication-Campaigns zur Demonstration von Organizational Learning und Enhanced Security-Posture für Long-term Reputation-Enhancement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "In welcher Weise optimiert ADVISORI Crisis-driven Innovation-Prozesse für C-Level-Entscheidungsträger, um NIS2-Compliance-Herausforderungen in Strategic Innovation-Opportunities zu transformieren?",
        answer: "Crisis-Situationen sind potente Katalysatoren für Strategic Innovation und Organizational Transformation. ADVISORI entwickelt innovative Crisis-to-Innovation-Frameworks, die C-Level-Führungskräften ermöglichen, NIS2-Compliance-Herausforderungen in wertstiftende Innovation-Projekte und Competitive Advantages zu transformieren.\n\n🚀 Crisis Innovation Catalyst Architecture:\n• Innovation Opportunity Scanning: Systematic Identification von Innovation-Potentialen während Crisis-Response für Strategic Technology-Advancement und Process-Innovation.\n• Accelerated Innovation Cycles: Crisis-driven Fast-Track Innovation-Prozesse, die Urgency und Resource-Focus für beschleunigte Innovation-Development nutzen.\n• Cross-Functional Innovation Teams: Crisis-induced Collaboration-Models, die Silos durchbrechen und Cross-Department Innovation für Enhanced Organizational Capabilities fördern.\n• External Innovation Integration: Strategic Partnerships und Technology-Adoption-Acceleration während Crisis-Zeiten für Competitive Advantage-Development.\n\n💡 ADVISORI's Innovation Excellence Framework:\n• Strategic Innovation Portfolio: Crisis-informed Innovation-Investment-Strategien, die Short-term Crisis-Response mit Long-term Strategic Innovation-Goals integrieren.\n• Innovation-Driven Recovery: Recovery-Strategien, die nicht nur Restoration sondern auch Enhancement und Innovation-Integration für Superior Post-Crisis-Capabilities ermöglichen.\n• Technology Adoption Acceleration: Crisis-driven Digital Transformation und Advanced Technology-Integration für Enhanced Operational Resilience und Competitive Position.\n• Innovation Culture Development: Crisis-to-Innovation Mindset-Entwicklung auf C-Level und Enterprise-Level für nachhaltige Innovation-Excellence.\n• Innovation ROI Optimization: Measurement und Optimization des Innovation-ROI von Crisis-driven Innovation-Initiatives für Strategic Value-Creation und Competitive Advantage-Sustainability."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie entwickelt ADVISORI Continuous Crisis Readiness-Systeme für C-Level-Teams, um NIS2-Compliance kontinuierlich zu gewährleisten und organisationale Resilienz systematisch zu steigern?",
        answer: "Continuous Crisis Readiness ist essentiell für nachhaltige NIS2-Compliance und organisationale Excellence. ADVISORI entwickelt innovative Continuous Improvement-Frameworks, die Crisis Management von periodischen Exercises zu kontinuierlichen Readiness-Systemen transformieren und C-Level-Teams persistent optimale Crisis-Preparedness ermöglichen.\n\n🔄 Continuous Readiness Excellence Architecture:\n• Always-On Crisis Monitoring: 24/7-Monitoring-Systeme für kontinuierliche Threat-Detection und Readiness-Assessment mit Real-time Capability-Validation und Gap-Identification.\n• Dynamic Readiness Optimization: Adaptive Improvement-Prozesse, die Crisis-Preparedness basierend auf emerging Threats, Technology-Changes und Organizational Evolution kontinuierlich optimieren.\n• Continuous Learning Integration: Systematic Integration von Industry-Learnings, Best Practice-Evolution und Technology-Advancement in Crisis-Preparedness für state-of-the-art Readiness.\n• Readiness Performance Analytics: Quantitative Measurement von Crisis-Preparedness-Levels mit KPI-Tracking und Benchmarking für evidenzbasierte Readiness-Optimization.\n\n🎯 ADVISORI's Continuous Excellence Methodology:\n• Micro-Simulation Integration: Frequent, low-impact Crisis-Simulations und Readiness-Tests, die Continuous Learning ermöglichen ohne Business-Disruption oder Resource-Intensity.\n• Readiness Culture Development: Systematic Development einer Crisis-Readiness-Culture auf allen Organizational-Levels mit C-Level-Leadership und Enterprise-wide Engagement.\n• Technology-Enhanced Preparedness: Integration von AI, Automation und Advanced Analytics für Enhanced Crisis-Detection, Response-Optimization und Continuous Capability-Enhancement.\n• Strategic Readiness Investment: ROI-optimized Investment-Strategien für Continuous Readiness-Enhancement, die Business Value und Competitive Advantage durch Superior Preparedness schaffen.\n• Ecosystem Readiness Coordination: Integration mit Partner, Supplier und Industry-Networks für Enhanced Collective Resilience und Competitive Crisis-Response-Capabilities."
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
