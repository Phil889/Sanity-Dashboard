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
    console.log('Updating Business Continuity Management Training page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-training' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-training" not found')
    }
    
    // Create new FAQs for specialized BCM Training topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie gestalte ich effektive Remote- und Hybrid-BCM-Schulungen in der digitalen Arbeitswelt?',
        answer: "Die digitale Transformation der Arbeitswelt erfordert innovative Ansätze für BCM-Schulungen, die sowohl die Herausforderungen des Remote-Lernens als auch die spezifischen Risiken verteilter Arbeitsmodelle adressieren. Effektive virtuelle BCM-Schulungen müssen Interaktivität, Engagement und praktische Anwendbarkeit gewährleisten.\n\n💻 Technologische Infrastruktur und Plattformen:\n• Professionelle Videokonferenz-Systeme mit Breakout-Room-Funktionalität\n• Interaktive Whiteboards und Collaboration-Tools für gemeinsame Übungen\n• Learning Management Systeme mit Tracking und Assessment-Funktionen\n• Virtual Reality Plattformen für immersive Krisensimulationen\n• Mobile Apps für kontinuierliches Lernen und Just-in-Time Training\n\n🎯 Didaktische Anpassungen für virtuelles Lernen:\n• Kürzere Lerneinheiten zur Vermeidung von Zoom-Fatigue\n• Erhöhte Interaktivität durch Polls, Quizzes und Gamification\n• Asynchrone Lernkomponenten für flexible Zeiteinteilung\n• Peer-Learning und virtuelle Gruppenarbeiten\n• Multimediale Inhalte und abwechslungsreiche Präsentationsformate\n\n🌐 Hybrid-Schulungsmodelle:\n• Blended Learning mit Kombination aus Präsenz- und Online-Elementen\n• Synchrone und asynchrone Lernphasen für maximale Flexibilität\n• Lokale Facilitatoren für globale Schulungsprogramme\n• Cross-Location Collaboration und Erfahrungsaustausch\n• Adaptive Lernpfade basierend auf individuellen Bedürfnissen\n\n🔧 Praktische Übungen im virtuellen Raum:\n• Online-Tabletop-Übungen mit digitalen Collaboration-Tools\n• Virtuelle Krisenstäbe und Remote-Entscheidungsfindung\n• Simulation von Kommunikationsausfällen und technischen Störungen\n• Digital Incident Response und Cyber-Crisis Management\n• Remote-Koordination und verteilte Teamführung\n\n📱 Engagement und Motivation:\n• Gamification-Elemente und Leaderboards\n• Social Learning und Community-Building\n• Mentoring-Programme und Buddy-Systeme\n• Recognition und Zertifizierungsprogramme\n• Kontinuierliche Feedback-Schleifen und Verbesserung\n\n🎓 Spezifische Remote-Work BCM-Inhalte:\n• Home Office Continuity und persönliche Resilienz\n• Cybersecurity für Remote-Arbeitsplätze\n• Digitale Kommunikation und virtuelle Krisenmanagement\n• Cloud-basierte Backup und Recovery Strategien\n• Work-Life-Balance und mentale Gesundheit in Krisen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Zertifizierungen und Standards sollten in BCM-Schulungsprogrammen berücksichtigt werden?',
        answer: "Die Integration relevanter Zertifizierungen und Standards in BCM-Schulungsprogramme ist entscheidend für die Glaubwürdigkeit, Anerkennung und praktische Anwendbarkeit der erworbenen Kompetenzen. Ein strukturierter Ansatz zu Zertifizierungen schafft klare Entwicklungspfade und messbare Qualifikationen.\n\n🏆 Internationale BCM-Zertifizierungen:\n• Business Continuity Institute Zertifizierungen von Certificate bis Fellowship Level\n• Disaster Recovery Institute International Zertifizierungen\n• ISACA CISA und CISM für IT-orientierte BCM-Rollen\n• Project Management Professional für BCM-Projektleitung\n• CISSP für Security-fokussierte BCM-Positionen\n\n📋 Relevante Standards und Frameworks:\n• ISO 22301 Business Continuity Management Systems\n• ISO 27001 Information Security Management für BCM-Integration\n• NIST Cybersecurity Framework für Cyber-Resilienz\n• COBIT für IT Governance und Risk Management\n• COSO Enterprise Risk Management Framework\n\n🎯 Zielgruppenspezifische Zertifizierungspfade:\n• Entry-Level Professionals benötigen Foundation-Zertifizierungen\n• Experienced Practitioners profitieren von Advanced und Specialist-Zertifizierungen\n• Senior Leaders fokussieren auf Strategic und Executive-Level Qualifikationen\n• Technical Specialists erhalten IT-spezifische und Cyber-Resilienz Zertifizierungen\n• Consultants und Auditors benötigen Lead Auditor und Assessor-Qualifikationen\n\n📚 Curriculum-Integration:\n• Mapping von Schulungsinhalten zu Zertifizierungsanforderungen\n• Exam Preparation Workshops und Practice Tests\n• Continuing Professional Development Credits\n• Study Groups und Peer-Learning für Zertifizierungsvorbereitung\n• Mentoring durch bereits zertifizierte Professionals\n\n🌍 Regionale und branchenspezifische Standards:\n• European Standards wie EN 15221 für Facility Management\n• US-spezifische Standards wie NFPA 1600 für Emergency Management\n• Finanzdienstleistungen Standards wie Basel III und DORA\n• Healthcare Standards wie Joint Commission Requirements\n• Manufacturing Standards wie Lean Six Sigma für Operational Excellence\n\n🔄 Kontinuierliche Weiterbildung und Rezertifizierung:\n• Continuing Professional Education Requirements\n• Annual Conferences und Professional Development Events\n• Webinar-Serien und Online-Learning-Module\n• Professional Networking und Knowledge Sharing\n• Research und Best Practice Development\n\n💼 Organisationale Zertifizierungsstrategien:\n• Corporate Certification Programs für interne Anerkennung\n• Partnership mit Zertifizierungsorganisationen\n• Scholarship und Sponsorship-Programme für Mitarbeiter\n• Integration in Performance Management und Karriereentwicklung\n• ROI-Messung von Zertifizierungsinvestitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie integriere ich Klimarisiken und Nachhaltigkeit in moderne BCM-Schulungen?',
        answer: "Klimarisiken und Nachhaltigkeitsaspekte werden zunehmend zu kritischen Komponenten des Business Continuity Managements. Moderne BCM-Schulungen müssen diese Themen systematisch integrieren, um Organisationen auf die Herausforderungen des Klimawandels und die Anforderungen nachhaltiger Geschäftspraktiken vorzubereiten.\n\n🌡️ Klimarisiken und Extreme Wetterereignisse:\n• Physische Klimarisiken wie Überschwemmungen, Dürren und Stürme\n• Transitionsrisiken durch Klimapolitik und regulatorische Änderungen\n• Chronic Climate Risks und langfristige Umweltveränderungen\n• Supply Chain Vulnerabilities durch Klimaauswirkungen\n• Infrastructure Resilience und Anpassungsstrategien\n\n♻️ Nachhaltige BCM-Praktiken:\n• Green Recovery Strategien und umweltfreundliche Notfalllösungen\n• Circular Economy Prinzipien in Kontinuitätsplanung\n• Sustainable Supply Chain Management und lokale Sourcing\n• Energy Efficiency und Renewable Energy in Backup-Systemen\n• Waste Reduction und Resource Conservation während Störungen\n\n📊 ESG-Integration in BCM:\n• Environmental, Social und Governance Faktoren in Risikoanalysen\n• Stakeholder Engagement und Community Resilience\n• Social Impact Assessment von BCM-Maßnahmen\n• Governance Strukturen für nachhaltige Resilienz\n• Reporting und Disclosure von Klimarisiken und BCM-Performance\n\n🔬 Szenario-Planung und Klimamodellierung:\n• Climate Scenario Analysis und Stress Testing\n• Long-term Climate Projections und Adaptation Planning\n• Interdependency Analysis zwischen Klimarisiken und Geschäftsprozessen\n• Tipping Points und Non-linear Climate Impacts\n• Regional Climate Variations und lokale Anpassungsstrategien\n\n🤝 Stakeholder-Engagement und Partnerships:\n• Collaboration mit Umweltorganisationen und Klimaexperten\n• Public-Private Partnerships für Klimaresilienz\n• Community-based Disaster Risk Reduction\n• International Cooperation und Best Practice Sharing\n• Indigenous Knowledge und traditionelle Resilienz-Praktiken\n\n📈 Innovation und Technologie:\n• Climate Tech Solutions für BCM-Anwendungen\n• IoT und Sensor-Technologie für Umweltmonitoring\n• AI und Machine Learning für Klimarisikovorhersage\n• Blockchain für nachhaltige Supply Chain Transparency\n• Digital Twins für Climate Impact Simulation\n\n🎯 Praktische Schulungsansätze:\n• Case Studies erfolgreicher Klimaanpassung\n• Hands-on Workshops zu Green BCM-Strategien\n• Field Trips zu resilienten und nachhaltigen Infrastrukturen\n• Simulation von Klimakrisen und Anpassungsmaßnahmen\n• Cross-funktionale Teams für integrierte Nachhaltigkeits- und BCM-Planung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie entwickle ich kulturell sensitive BCM-Schulungen für globale und diverse Teams?',
        answer: "Kulturell sensitive BCM-Schulungen sind essentiell für globale Organisationen, da kulturelle Unterschiede erheblichen Einfluss auf Risikowahrnehmung, Kommunikationsstile, Entscheidungsfindung und Krisenreaktion haben. Ein inklusiver Ansatz maximiert die Effektivität und Akzeptanz von BCM-Programmen.\n\n🌍 Kulturelle Dimensionen im BCM:\n• Power Distance und hierarchische Entscheidungsstrukturen in Krisen\n• Individualismus vs. Kollektivismus in Teamarbeit und Verantwortung\n• Uncertainty Avoidance und Risikobereitschaft in verschiedenen Kulturen\n• Long-term vs. Short-term Orientation in Kontinuitätsplanung\n• Masculine vs. Feminine Societies und Führungsstile in Krisen\n\n💬 Kommunikation und Sprache:\n• Mehrsprachige Schulungsmaterialien und Simultanübersetzung\n• High-Context vs. Low-Context Kommunikationsstile\n• Non-verbale Kommunikation und kulturelle Missverständnisse\n• Direkte vs. indirekte Feedback-Kulturen\n• Religiöse und kulturelle Sensitivitäten in Krisenkommunikation\n\n🎯 Lokalisierung von Schulungsinhalten:\n• Regionale Risikoprofile und kulturspezifische Bedrohungen\n• Lokale Gesetze, Regulierungen und Compliance-Anforderungen\n• Traditionelle Resilienz-Praktiken und indigenes Wissen\n• Kulturelle Feiertage und religiöse Observanzen in Notfallplanung\n• Lokale Infrastruktur und verfügbare Ressourcen\n\n👥 Diverse Lernstile und Präferenzen:\n• Visual, Auditory und Kinesthetic Learning Preferences\n• Kollaborative vs. individuelle Lernansätze\n• Formelle vs. informelle Lernumgebungen\n• Generational Differences und Technologie-Adoption\n• Gender-spezifische Lernbedürfnisse und Barrieren\n\n🤝 Inklusive Trainingsmethoden:\n• Diverse Trainer-Teams und kulturelle Repräsentation\n• Peer-Learning und Cross-Cultural Mentoring\n• Storytelling und kulturspezifische Fallstudien\n• Flexible Schulungsformate und Zeitzonenbewusstsein\n• Accessibility und Unterstützung für Menschen mit Behinderungen\n\n🔄 Kontinuierliche Verbesserung:\n• Cultural Competency Assessment für Trainer\n• Feedback-Mechanismen für kulturelle Angemessenheit\n• Regular Review und Update von Schulungsinhalten\n• Diversity und Inclusion Metrics für Trainingsprogramme\n• Best Practice Sharing zwischen verschiedenen Regionen\n\n🎓 Spezielle Fokusthemen:\n• Unconscious Bias in Krisenentscheidungen\n• Cultural Intelligence für BCM-Professionals\n• Global vs. Local BCM-Standards und Praktiken\n• Cross-Cultural Crisis Leadership\n• Building Trust in diverse und verteilte Teams"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
