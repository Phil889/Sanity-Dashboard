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
    console.log('Updating Business Continuity Management Training page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-training' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-training" not found')
    }
    
    // Create new FAQs for advanced BCM Training topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie messe und bewerte ich die Effektivität von BCM-Schulungsprogrammen?',
        answer: "Die systematische Messung und Bewertung von BCM-Schulungsprogrammen ist entscheidend für kontinuierliche Verbesserung und Nachweis des Return on Investment. Ein mehrdimensionaler Ansatz erfasst sowohl quantitative als auch qualitative Aspekte der Schulungseffektivität.\n\n📊 Kirkpatrick-Modell für BCM-Training:\n• Reaction Level: Teilnehmerzufriedenheit und unmittelbares Feedback\n• Learning Level: Wissenszuwachs und Kompetenzentwicklung\n• Behavior Level: Verhaltensänderungen im Arbeitsalltag\n• Results Level: Geschäftsauswirkungen und organisationale Verbesserungen\n• ROI Level: Finanzielle Bewertung des Schulungsinvestments\n\n🎯 Quantitative Metriken und KPIs:\n• Training Completion Rates und Zertifizierungsquoten\n• Pre- und Post-Training Assessment Scores\n• Time-to-Competency für neue BCM-Rollen\n• Incident Response Times und Recovery Performance\n• Compliance Audit Ergebnisse und Regulatory Findings\n\n📈 Qualitative Bewertungsmethoden:\n• 360-Grad-Feedback von Vorgesetzten, Kollegen und Stakeholdern\n• Behavioral Event Interviews zur Kompetenzanwendung\n• Focus Groups mit Schulungsteilnehmern\n• Case Study Analysen realer BCM-Situationen\n• Peer Review und Best Practice Sharing Sessions\n\n🔍 Langzeit-Impact Assessment:\n• Longitudinal Studies über mehrere Jahre\n• Career Progression und Beförderungsraten von Schulungsteilnehmern\n• Organizational Resilience Maturity Assessments\n• Crisis Performance Evaluations während realer Ereignisse\n• Cultural Change Indicators und Employee Engagement Scores\n\n💰 ROI-Berechnung für BCM-Training:\n• Cost Avoidance durch verbesserte Incident Response\n• Reduced Downtime und Business Interruption Costs\n• Compliance Cost Savings und Penalty Avoidance\n• Insurance Premium Reductions durch nachgewiesene Resilienz\n• Productivity Gains durch effizientere BCM-Prozesse\n\n🔄 Kontinuierliche Verbesserung:\n• Regular Review Cycles und Curriculum Updates\n• Feedback Integration und Adaptive Learning Paths\n• Benchmarking gegen Industry Standards\n• Technology Enhancement und Innovation Integration\n• Stakeholder Satisfaction Surveys und Improvement Planning\n\n📱 Moderne Assessment-Technologien:\n• Learning Analytics und AI-powered Performance Tracking\n• Simulation-based Assessments und Virtual Reality Testing\n• Mobile Learning Apps mit Real-time Progress Monitoring\n• Blockchain-based Credential Verification\n• Predictive Analytics für Training Needs Identification"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielt Gamification in modernen BCM-Schulungskonzepten?',
        answer: "Gamification revolutioniert BCM-Schulungen durch die Integration spielerischer Elemente, die Engagement, Motivation und Lerneffektivität erheblich steigern. Besonders bei komplexen und oft als trocken empfundenen BCM-Themen kann Gamification die Lernbereitschaft und Wissensretention dramatisch verbessern.\n\n🎮 Grundprinzipien der BCM-Gamification:\n• Points und Scoring-Systeme für Lernfortschritte\n• Badges und Achievements für erreichte Meilensteine\n• Leaderboards für gesunden Wettbewerb zwischen Teilnehmern\n• Progressive Levels und Unlock-Mechanismen\n• Narrative Storytelling und immersive Szenarien\n\n🏆 Spezifische BCM-Gaming-Elemente:\n• Crisis Simulation Games mit realistischen Entscheidungsszenarien\n• Risk Assessment Challenges und Vulnerability Hunts\n• Team-based Incident Response Competitions\n• Business Impact Analysis Puzzles und Dependency Mapping Games\n• Recovery Strategy Building und Resource Allocation Simulations\n\n📱 Technologische Umsetzung:\n• Mobile Gaming Apps für kontinuierliches Micro-Learning\n• Virtual Reality Crisis Simulations für immersive Erfahrungen\n• Augmented Reality für kontextuelle Lernhilfen\n• Social Gaming Platforms für kollaboratives Lernen\n• AI-powered Adaptive Gaming für personalisierte Herausforderungen\n\n🎯 Psychologische Wirkungsmechanismen:\n• Intrinsische Motivation durch Autonomie und Mastery\n• Flow-State Erreichung durch optimale Challenge-Skill Balance\n• Social Recognition und Peer Validation\n• Immediate Feedback und Positive Reinforcement\n• Safe-to-Fail Environment für experimentelles Lernen\n\n🌟 Erfolgreiche BCM-Gaming-Formate:\n• Escape Room Scenarios für Crisis Decision Making\n• Business Continuity Hackathons und Innovation Challenges\n• Role-Playing Games für Stakeholder Communication\n• Strategy Games für Long-term Resilience Planning\n• Trivia und Quiz Competitions für Knowledge Reinforcement\n\n📊 Messung von Gamification-Erfolg:\n• Engagement Metrics wie Session Duration und Return Rates\n• Learning Outcomes und Knowledge Retention Tests\n• Behavioral Change Indicators im realen Arbeitsumfeld\n• Participant Satisfaction und Net Promoter Scores\n• Business Impact Measurements und Performance Improvements\n\n⚠️ Potenzielle Herausforderungen:\n• Over-Gamification und Ablenkung vom Lernziel\n• Cultural Resistance und generational Differences\n• Technical Complexity und Implementation Costs\n• Maintenance und Content Update Requirements\n• Balance zwischen Fun und Professional Seriousness"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie entwickle ich spezialisierte BCM-Schulungen für C-Level Executives und Board Members?',
        answer: "BCM-Schulungen für C-Level Executives und Board Members erfordern einen grundlegend anderen Ansatz als operative Trainings. Diese Zielgruppe benötigt strategische, governance-fokussierte Inhalte, die Geschäftsauswirkungen, Haftungsrisiken und Stakeholder-Erwartungen in den Vordergrund stellen.\n\n👔 Executive-spezifische Lernziele:\n• Strategic Risk Oversight und Board Governance Responsibilities\n• Regulatory Compliance und Legal Liability Implications\n• Stakeholder Communication und Crisis Leadership\n• Investment Decisions für Resilience und Business Continuity\n• Reputation Management und Brand Protection\n\n📋 Governance und Compliance Fokus:\n• Fiduciary Duties und Director Responsibilities\n• Regulatory Requirements und Aufsichtsbehörden-Erwartungen\n• ESG Integration und Sustainability Reporting\n• Cyber Governance und Digital Risk Oversight\n• Third-Party Risk Management und Supply Chain Governance\n\n💼 Business-orientierte Inhaltsgestaltung:\n• High-level Business Impact Scenarios statt technischer Details\n• Financial Implications und Cost-Benefit Analysen\n• Competitive Advantage durch Superior Resilience\n• Market Confidence und Investor Relations\n• Strategic Planning Integration und Long-term Vision\n\n🎯 Angepasste Lernformate:\n• Executive Briefings und High-level Overviews\n• Board Simulation Exercises und Crisis Decision Games\n• Peer Learning Sessions mit anderen C-Level Executives\n• Expert Panels und Industry Leader Discussions\n• Customized Case Studies aus der eigenen Branche\n\n⏰ Zeit-effiziente Delivery-Methoden:\n• Intensive Half-day oder Full-day Workshops\n• Executive Retreats mit BCM-Integration\n• Just-in-time Briefings vor kritischen Entscheidungen\n• Mobile Learning für Travel Time Utilization\n• Quarterly Update Sessions und Trend Briefings\n\n🔍 Kritische Erfolgsfaktoren:\n• Senior Facilitators mit C-Level Credibility\n• Real-world Examples und Lessons Learned\n• Interactive Discussions statt Frontal-Präsentationen\n• Actionable Takeaways und Implementation Roadmaps\n• Follow-up Support und Ongoing Advisory Services\n\n📈 Spezielle Themenfelder:\n• Crisis Communication und Media Management\n• Stakeholder Engagement und Public Relations\n• Insurance und Risk Transfer Strategies\n• Merger & Acquisition Due Diligence\n• Digital Transformation Risk Management\n\n🤝 Stakeholder Integration:\n• Joint Sessions mit Risk Committees\n• Integration in Board Meeting Agendas\n• Collaboration mit Legal und Compliance Teams\n• Engagement mit External Auditors und Consultants\n• Coordination mit Insurance Brokers und Risk Advisors"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie integriere ich Lessons Learned aus realen Krisen in BCM-Schulungsprogramme?',
        answer: "Die Integration von Lessons Learned aus realen Krisen ist einer der wertvollsten Aspekte effektiver BCM-Schulungen. Authentische Erfahrungen bieten unvergleichliche Lernmöglichkeiten und machen abstrakte Konzepte greifbar und relevant für die Teilnehmer.\n\n📚 Systematische Lessons Learned Sammlung:\n• Post-Incident Reviews und After Action Reports\n• Structured Debriefing Sessions mit allen Beteiligten\n• Root Cause Analysis und Contributing Factors Identification\n• Best Practice Extraction und Improvement Opportunities\n• Documentation und Knowledge Management Systems\n\n🎯 Kategorisierung und Strukturierung:\n• Crisis Type Classification und Scenario Mapping\n• Industry-specific und Cross-sector Lessons\n• Organizational Size und Complexity Considerations\n• Geographic und Cultural Context Factors\n• Timeline-based Learning und Evolution of Response\n\n💡 Effektive Integration in Schulungen:\n• Case Study Development mit anonymisierten Details\n• Interactive Workshops mit Crisis Veterans\n• Simulation Exercises basierend auf realen Ereignissen\n• Video Testimonials und First-hand Accounts\n• Role-playing Scenarios mit authentischen Herausforderungen\n\n🔍 Kritische Lernbereiche:\n• Decision-making unter Unsicherheit und Zeitdruck\n• Communication Failures und Success Stories\n• Resource Allocation und Priority Setting\n• Stakeholder Management und Expectation Handling\n• Recovery Strategies und Business Resumption\n\n🌐 Globale Krisenerfahrungen nutzen:\n• COVID-19 Pandemic Response Lessons\n• Cyber Attack Recovery Experiences\n• Natural Disaster Response und Climate Adaptation\n• Supply Chain Disruption Management\n• Geopolitical Crisis Navigation\n\n📖 Storytelling und Narrative Techniken:\n• Compelling Crisis Narratives mit emotionaler Resonanz\n• Hero's Journey Framework für Resilience Stories\n• Multi-perspective Accounts verschiedener Stakeholder\n• Timeline Reconstruction und Critical Decision Points\n• Outcome Analysis und Long-term Implications\n\n🔄 Kontinuierliche Aktualisierung:\n• Regular Content Refresh mit neuen Krisenerfahrungen\n• Industry Network Collaboration für Lesson Sharing\n• Academic Research Integration und Trend Analysis\n• Technology Evolution und Digital Crisis Lessons\n• Regulatory Changes und Compliance Learnings\n\n⚖️ Ethische Überlegungen:\n• Anonymization und Privacy Protection\n• Sensitive Information Handling\n• Victim Impact Consideration\n• Competitive Intelligence Boundaries\n• Legal Liability und Disclosure Restrictions"
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
