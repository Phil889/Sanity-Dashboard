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
    console.log('Updating Business Continuity Management Training page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-training' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-training" not found')
    }
    
    // Create new FAQs for final BCM Training topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie entwickle ich ein zukunftssicheres BCM-Schulungsprogramm für die nächste Dekade?',
        answer: "Die Entwicklung zukunftssicherer BCM-Schulungsprogramme erfordert eine strategische Vorausschau auf technologische, gesellschaftliche und regulatorische Entwicklungen. Ein adaptives Curriculum muss sowohl aktuelle Anforderungen erfüllen als auch auf zukünftige Herausforderungen vorbereiten.\n\n🔮 Emerging Technologies und Future Trends:\n• Quantum Computing und Post-Quantum Cryptography Implications\n• Artificial General Intelligence und Autonomous Systems\n• Extended Reality und Metaverse Business Continuity\n• Internet of Things und Edge Computing Resilience\n• Biotechnology und Synthetic Biology Risk Management\n\n🌍 Gesellschaftliche und demografische Veränderungen:\n• Generation Z und Alpha Workplace Expectations\n• Remote-First und Distributed Organizations\n• Gig Economy und Flexible Workforce Models\n• Aging Population und Knowledge Transfer Challenges\n• Social Media und Digital Native Communication Styles\n\n📊 Regulatorische Evolution und Compliance:\n• AI Act und Algorithmic Accountability\n• Data Governance und Privacy by Design\n• ESG Reporting und Sustainability Mandates\n• Cyber Resilience Act und Product Liability\n• Space Law und Satellite Infrastructure Protection\n\n🎯 Adaptive Curriculum Design:\n• Modular Learning Architecture mit austauschbaren Komponenten\n• Continuous Content Updates und Version Control\n• Scenario-based Learning mit Multiple Future Pathways\n• Cross-disciplinary Integration und Interdisciplinary Approaches\n• Personalized Learning Paths basierend auf Role Evolution\n\n🔄 Agile Training Methodologies:\n• Rapid Prototyping von Schulungsinhalten\n• A/B Testing verschiedener Lernansätze\n• Feedback Loops und Continuous Improvement Cycles\n• Crowdsourced Content Development\n• Open Source Training Materials und Community Contributions\n\n📈 Future Skills Development:\n• Systems Thinking und Complexity Management\n• Ethical Decision Making in Uncertain Environments\n• Cross-cultural Competence für Global Operations\n• Innovation Management und Creative Problem Solving\n• Emotional Intelligence und Human-AI Collaboration\n\n🛠️ Technology-Enhanced Learning:\n• AI-powered Personalized Learning Assistants\n• Blockchain-based Credential Verification\n• Immersive Simulation Environments\n• Predictive Analytics für Skill Gap Identification\n• Automated Content Generation und Curation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Rolle spielen Partnerschaften und Kooperationen bei der Entwicklung von BCM-Schulungsprogrammen?',
        answer: "Strategische Partnerschaften und Kooperationen sind entscheidend für die Entwicklung hochwertiger, praxisrelevanter und kosteneffizienter BCM-Schulungsprogramme. Durch die Zusammenarbeit mit verschiedenen Stakeholdern können Organisationen Expertise bündeln, Ressourcen teilen und innovative Lernansätze entwickeln.\n\n🎓 Akademische Partnerschaften:\n• Universitäten und Business Schools für Forschung und Curriculum-Entwicklung\n• Fachhochschulen für praxisorientierte Ausbildungsprogramme\n• Internationale Bildungseinrichtungen für globale Perspektiven\n• Online-Universitäten für digitale Lernplattformen\n• Forschungsinstitute für Evidence-based Training Approaches\n\n🏢 Industrielle Kooperationen:\n• Branchenverbände für Standards und Best Practices\n• Technologieunternehmen für innovative Lerntools\n• Beratungsunternehmen für Expertise und Case Studies\n• Versicherungsgesellschaften für Risk Assessment Insights\n• Compliance-Anbieter für Regulatory Updates\n\n🌐 Internationale Zusammenarbeit:\n• Globale BCM-Organisationen wie BCI und DRI\n• Regierungsbehörden für Regulatory Guidance\n• Internationale Standards-Organisationen\n• Cross-border Emergency Response Networks\n• Multinational Corporate Learning Consortiums\n\n💡 Innovation und Technologie-Partnerschaften:\n• EdTech-Startups für Cutting-edge Learning Solutions\n• VR/AR-Entwickler für Immersive Training Experiences\n• AI-Unternehmen für Personalized Learning Systems\n• Simulation Software-Anbieter für Realistic Scenarios\n• Cybersecurity-Firmen für Threat Intelligence Integration\n\n🤝 Community und Peer Networks:\n• Professional BCM Communities für Peer Learning\n• Industry User Groups für Shared Experiences\n• Alumni Networks für Continuous Engagement\n• Mentorship Programs für Knowledge Transfer\n• Cross-industry Learning Exchanges\n\n📋 Strukturierte Kooperationsmodelle:\n• Joint Venture Training Programs\n• Shared Resource Pools und Cost Sharing\n• Cross-licensing von Training Content\n• Collaborative Research Projects\n• Standardized Certification Programs\n\n🎯 Erfolgsfaktoren für Partnerschaften:\n• Clear Governance Structures und Roles\n• Intellectual Property Agreements\n• Quality Assurance Standards\n• Performance Metrics und Success Measurement\n• Long-term Commitment und Sustainability Planning"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie integriere ich psychologische Sicherheit und Trauma-informierte Ansätze in BCM-Schulungen?',
        answer: "Die Integration psychologischer Sicherheit und trauma-informierter Ansätze in BCM-Schulungen ist essentiell, da Krisen erhebliche psychologische Auswirkungen auf Individuen und Teams haben können. Ein empathischer, unterstützender Schulungsansatz verbessert nicht nur das Lernergebnis, sondern bereitet auch auf die emotionalen Herausforderungen realer Krisensituationen vor.\n\n🧠 Grundlagen psychologischer Sicherheit:\n• Vertrauensvolle Lernumgebung ohne Angst vor Fehlern\n• Offene Kommunikation und konstruktives Feedback\n• Respekt für diverse Perspektiven und Erfahrungen\n• Ermutigung zu Fragen und kritischem Denken\n• Unterstützung bei Vulnerabilität und Unsicherheit\n\n💔 Trauma-informierte Schulungsprinzipien:\n• Anerkennung der Prävalenz von Trauma-Erfahrungen\n• Verständnis für Trauma-Auswirkungen auf Lernen und Verhalten\n• Integration von Trauma-Wissen in Schulungsdesign\n• Vermeidung von Re-Traumatisierung durch Inhalte oder Methoden\n• Förderung von Heilung und Resilienz-Aufbau\n\n🎯 Praktische Implementierung:\n• Content Warnings für potenziell triggernde Inhalte\n• Flexible Teilnahmeoptionen und Ausstiegsmöglichkeiten\n• Peer Support Systems und Buddy-Programme\n• Professionelle Beratungsressourcen und Employee Assistance Programs\n• Mindfulness und Stress-Reduction Techniken\n\n🔍 Erkennung von Trauma-Reaktionen:\n• Hypervigilance und erhöhte Angst\n• Dissoziation und emotionale Taubheit\n• Flashbacks und intrusive Gedanken\n• Vermeidungsverhalten und sozialer Rückzug\n• Körperliche Symptome und Schlafstörungen\n\n🛡️ Schutzfaktoren und Resilienz-Förderung:\n• Soziale Unterstützung und Gemeinschaftsgefühl\n• Selbstwirksamkeit und Kontrollgefühl\n• Sinnfindung und Purpose-driven Learning\n• Adaptive Coping-Strategien und Problemlösungsfähigkeiten\n• Post-traumatic Growth und Meaning-Making\n\n👥 Trainer-Qualifikation und Support:\n• Trauma-informierte Schulung für Trainer\n• Mental Health First Aid Zertifizierung\n• Supervision und Peer Support für Trainer\n• Selbstfürsorge und Burnout-Prävention\n• Kontinuierliche Weiterbildung in psychologischen Ansätzen\n\n🌱 Langfristige Auswirkungen:\n• Verbesserte Teamkohäsion und Vertrauen\n• Erhöhte Resilienz und Anpassungsfähigkeit\n• Reduzierte Stigmatisierung von Mental Health Issues\n• Bessere Crisis Response und Recovery Outcomes\n• Nachhaltige Organisationskultur der Fürsorge"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie schaffe ich eine nachhaltige Lernkultur für kontinuierliche BCM-Kompetenzentwicklung?',
        answer: "Eine nachhaltige Lernkultur für BCM-Kompetenzentwicklung erfordert systematische Veränderungen in Organisationsstrukturen, Prozessen und Mindsets. Es geht darum, Lernen als kontinuierlichen, integrierten Bestandteil der Arbeitskultur zu etablieren, nicht als isolierte Schulungsveranstaltung.\n\n🌱 Kulturelle Transformation:\n• Growth Mindset und kontinuierliche Verbesserung als Grundwerte\n• Fehlertoleranz und Experimentierfreudigkeit\n• Wissensaustausch und kollaboratives Lernen\n• Innovation und Kreativität in BCM-Ansätzen\n• Langfristige Perspektive statt kurzfristiger Fixes\n\n🏗️ Strukturelle Verankerung:\n• Learning und Development als strategische Priorität\n• Dedicated Learning Time und Protected Learning Hours\n• Communities of Practice und Fachgruppen\n• Mentoring-Programme und Knowledge Transfer Systems\n• Integration in Performance Management und Karriereentwicklung\n\n📚 Vielfältige Lernformate:\n• Microlearning und Just-in-Time Training\n• Peer-to-Peer Learning und Knowledge Sharing Sessions\n• Action Learning Projects und Real-world Applications\n• Reverse Mentoring und Cross-generational Learning\n• External Conferences und Industry Networking\n\n🔄 Kontinuierliche Verbesserung:\n• Regular Learning Needs Assessments\n• Feedback-Schleifen und Iterative Curriculum-Entwicklung\n• Learning Analytics und Data-driven Insights\n• Benchmarking gegen Industry Best Practices\n• Innovation Labs für neue Lernansätze\n\n🎯 Motivation und Engagement:\n• Intrinsische Motivation durch Autonomie und Mastery\n• Recognition und Reward Systems für Lernerfolge\n• Career Pathways und Advancement Opportunities\n• Personal Development Plans und Individual Learning Goals\n• Social Learning und Community Building\n\n📊 Messung und Evaluation:\n• Learning Culture Maturity Assessments\n• Knowledge Retention und Application Metrics\n• Business Impact Measurements\n• Employee Engagement und Satisfaction Surveys\n• Return on Learning Investment Calculations\n\n🚀 Technologie-Enabler:\n• Learning Management Systems und Knowledge Repositories\n• Social Learning Platforms und Collaboration Tools\n• AI-powered Learning Recommendations\n• Mobile Learning Apps und Accessibility Features\n• Virtual Reality und Immersive Learning Experiences\n\n👑 Leadership und Governance:\n• Executive Sponsorship und Visible Commitment\n• Learning Champions und Change Agents\n• Cross-functional Learning Committees\n• Budget Allocation und Resource Commitment\n• Strategic Alignment mit Business Objectives"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
