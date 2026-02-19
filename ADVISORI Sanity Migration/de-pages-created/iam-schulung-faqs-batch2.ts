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
    console.log('Updating IAM Schulung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-schulung" not found')
    }
    
    // Create new FAQs for IAM Schulung training methodologies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche innovativen Lernmethoden und Technologien werden in modernen IAM-Schulungen eingesetzt?',
        answer: "Moderne IAM-Schulungen nutzen innovative Lernmethoden und fortschrittliche Technologien, um effektiven Wissenstransfer und nachhaltiges Lernen zu gewährleisten. Diese Ansätze berücksichtigen verschiedene Lerntypen und ermöglichen personalisierte, praxisorientierte Weiterbildung, die den Anforderungen moderner IT-Professionals gerecht wird.\n\n🎮 Immersive Learning und Simulation:\n• Virtual Reality Umgebungen für realistische IAM-Implementierungsszenarien ohne Risiko für Produktivsysteme\n• Augmented Reality für interaktive Visualisierung komplexer IAM-Architekturen und Datenflüsse\n• Gamification-Elemente mit Achievement-Systemen und Leaderboards für erhöhte Motivation\n• Cyber Range Simulationen für praktische Erfahrung mit Incident Response und Threat Detection\n• Interactive Sandboxes mit realen IAM-Tools für experimentelles Lernen\n\n🤖 Adaptive Learning und KI-gestützte Personalisierung:\n• Machine Learning Algorithmen für individualisierte Lernpfad-Anpassung basierend auf Fortschritt und Präferenzen\n• Intelligente Content-Empfehlungen für optimale Kompetenzentwicklung\n• Automated Assessment mit sofortigem Feedback und Verbesserungsvorschlägen\n• Predictive Analytics für Identifikation von Lernlücken und proaktive Unterstützung\n• Natural Language Processing für intelligente Chatbots und virtuelle Tutoren\n\n📱 Mobile Learning und Micro-Learning:\n• Responsive Learning-Plattformen für nahtloses Lernen auf verschiedenen Geräten\n• Bite-sized Learning-Module für kontinuierliche Kompetenzentwicklung im Arbeitsalltag\n• Push-Notifications für regelmäßige Lernimpulse und Erinnerungen\n• Offline-Capabilities für flexibles Lernen ohne Internetverbindung\n• Social Learning Features für Peer-to-Peer Wissensaustausch\n\n🔬 Hands-on Labs und praktische Anwendung:\n• Cloud-basierte Lab-Umgebungen mit sofortiger Verfügbarkeit und automatischer Konfiguration\n• Container-basierte Übungsumgebungen für konsistente und skalierbare Lernerfahrungen\n• Real-world Scenarios mit aktuellen Bedrohungslagen und Compliance-Anforderungen\n• Collaborative Labs für Teamwork und gemeinsame Problemlösung\n• Automated Grading und Performance-Tracking für objektive Bewertung\n\n🎯 Blended Learning und flexible Delivery:\n• Synchrone und asynchrone Lernkomponenten für maximale Flexibilität\n• Live Virtual Classrooms mit interaktiven Whiteboards und Breakout-Sessions\n• Self-paced Learning-Tracks mit individueller Zeitplanung\n• Hybrid-Formate mit Kombination aus Online- und Präsenz-Elementen\n• Just-in-Time Learning für bedarfsgerechte Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie werden praktische Übungen und Hands-on Labs in IAM-Schulungen gestaltet und welchen Mehrwert bieten sie?',
        answer: "Praktische Übungen und Hands-on Labs sind das Herzstück effektiver IAM-Schulungen und ermöglichen es Teilnehmern, theoretisches Wissen in realen Anwendungsszenarien zu vertiefen. Diese praxisorientierten Lernkomponenten simulieren komplexe Enterprise-Umgebungen und bieten sichere Experimentierräume für die Entwicklung praktischer Fertigkeiten.\n\n🏗️ Realistische Lab-Umgebungen und Infrastruktur:\n• Enterprise-grade IAM-Plattformen mit vollständiger Funktionalität für authentische Lernerfahrungen\n• Multi-Tenant-Architekturen für individuelle Übungsumgebungen ohne gegenseitige Beeinflussung\n• Vorkonfigurierte Szenarien mit typischen Unternehmensstrukturen und Compliance-Anforderungen\n• Integration verschiedener IAM-Tools und -Technologien für ganzheitliche Praxiserfahrung\n• Automated Provisioning und Teardown für effiziente Ressourcennutzung\n\n🎯 Szenario-basierte Übungen und Case Studies:\n• Realistische Implementierungsherausforderungen basierend auf echten Kundenprojekten\n• Progressive Komplexität von grundlegenden Konfigurationen bis zu fortgeschrittenen Architekturen\n• Incident Response Simulationen mit typischen IAM-Sicherheitsvorfällen\n• Compliance-Audit-Szenarien für praktische Erfahrung mit regulatorischen Anforderungen\n• Migration-Projekte für Hands-on Erfahrung mit Legacy-System-Integration\n\n⚡ Interaktive Problemlösung und Troubleshooting:\n• Guided Troubleshooting-Sessions mit systematischen Problemlösungsansätzen\n• Root Cause Analysis Übungen für tieferes Verständnis von IAM-Systemen\n• Performance-Optimierung und Tuning-Workshops\n• Security Assessment und Penetration Testing Simulationen\n• Disaster Recovery und Business Continuity Übungen\n\n🤝 Collaborative Learning und Team-Projekte:\n• Gruppen-basierte Implementierungsprojekte für Teamwork-Entwicklung\n• Peer-Review-Prozesse für gegenseitiges Lernen und Qualitätssicherung\n• Cross-functional Collaboration zwischen verschiedenen Rollen und Spezialisierungen\n• Mentoring-Programme mit erfahrenen Praktikern\n• Knowledge Sharing Sessions und Best Practice Workshops\n\n📊 Assessment und Kompetenz-Validierung:\n• Praktische Prüfungen mit realen Implementierungsaufgaben\n• Portfolio-basierte Bewertung mit dokumentierten Projektergebnissen\n• Continuous Assessment während der Übungsphasen\n• Peer-Assessment und 360-Grad-Feedback\n• Industry-standard Zertifizierungsvorbereitung mit Praxis-Fokus\n\n🚀 Innovation und Emerging Technologies:\n• Experimentelle Labs mit neuesten IAM-Technologien und -Trends\n• Proof-of-Concept Entwicklung für innovative Lösungsansätze\n• Integration von AI und Machine Learning in IAM-Kontexten\n• Cloud-native und Container-basierte IAM-Implementierungen\n• Zero-Trust-Architektur-Design und -Implementation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie wird der Lernerfolg in IAM-Schulungen gemessen und kontinuierlich verbessert?',
        answer: "Die Messung und kontinuierliche Verbesserung des Lernerfolgs in IAM-Schulungen erfolgt durch ein mehrdimensionales Assessment-System, das sowohl quantitative als auch qualitative Metriken umfasst. Dieser datengetriebene Ansatz ermöglicht es, Lernprogramme kontinuierlich zu optimieren und individuellen Lernbedürfnissen gerecht zu werden.\n\n📊 Comprehensive Assessment-Framework:\n• Multi-Level Evaluation nach dem Kirkpatrick-Modell für ganzheitliche Erfolgsmessung\n• Pre- und Post-Training Assessments für objektive Kompetenzentwicklung-Messung\n• Skill-Gap-Analyse für individualisierte Lernpfad-Anpassung\n• Competency-based Evaluation mit branchenspezifischen Standards\n• Long-term Impact Assessment für nachhaltige Lerneffekte\n\n🎯 Praktische Kompetenz-Validierung:\n• Hands-on Prüfungen mit realen IAM-Implementierungsaufgaben\n• Simulation komplexer Troubleshooting-Szenarien\n• Portfolio-basierte Bewertung mit dokumentierten Projektergebnissen\n• Peer-Review-Prozesse für qualitative Kompetenz-Einschätzung\n• Industry-standard Zertifizierungsprüfungen als externe Validierung\n\n📈 Continuous Learning Analytics:\n• Real-time Learning Analytics für sofortiges Feedback und Anpassung\n• Engagement-Metriken für Optimierung der Lernmotivation\n• Progress-Tracking mit individuellen Lernkurven und Meilenstein-Monitoring\n• Predictive Analytics für frühzeitige Identifikation von Lernherausforderungen\n• Adaptive Testing für personalisierte Schwierigkeitsanpassung\n\n🔄 Feedback-Loops und kontinuierliche Verbesserung:\n• 360-Grad-Feedback von Teilnehmern, Trainern und Vorgesetzten\n• Regular Retrospectives für Programm-Optimierung\n• Industry Expert Reviews für Aktualität und Relevanz der Inhalte\n• Employer Feedback für Business-Impact-Messung\n• Alumni-Tracking für langfristige Karriereentwicklung-Analyse\n\n🎓 Personalisierte Entwicklungspfade:\n• Individual Development Plans basierend auf Assessment-Ergebnissen\n• Adaptive Learning Paths für optimale Kompetenzentwicklung\n• Mentoring-Programme für kontinuierliche Unterstützung\n• Micro-Credentialing für granulare Kompetenz-Anerkennung\n• Career Progression Mapping für strategische Weiterbildungsplanung\n\n🌐 Benchmarking und Industry Standards:\n• Vergleich mit Industry-Benchmarks für objektive Leistungseinschätzung\n• Best Practice Sharing zwischen verschiedenen Organisationen\n• Continuous Curriculum Updates basierend auf Marktentwicklungen\n• Integration aktueller Bedrohungslagen und Compliance-Anforderungen\n• Alignment mit führenden IAM-Frameworks und -Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Mentoring und kontinuierliche Lernbegleitung in professionellen IAM-Schulungsprogrammen?',
        answer: "Mentoring und kontinuierliche Lernbegleitung sind essenzielle Komponenten erfolgreicher IAM-Schulungsprogramme, die über traditionelle Trainingsansätze hinausgehen und nachhaltige Kompetenzentwicklung fördern. Diese personalisierten Unterstützungsstrukturen beschleunigen den Lernprozess und gewährleisten erfolgreiche Anwendung des erworbenen Wissens in der Praxis.\n\n🎯 Strukturierte Mentoring-Programme:\n• Pairing mit erfahrenen IAM-Praktikern für praxisnahe Wissensvermittlung\n• Individualisierte Mentoring-Pläne basierend auf Karrierezielen und Lernbedürfnissen\n• Regular One-on-One Sessions für persönliche Entwicklungsberatung\n• Project-based Mentoring für reale Implementierungserfahrung\n• Cross-functional Mentoring für ganzheitliche Perspektiven\n\n🤝 Peer-Learning und Community Building:\n• Alumni-Netzwerke für kontinuierlichen Wissensaustausch und Networking\n• Study Groups und Learning Circles für kollaboratives Lernen\n• Expert Communities of Practice für spezialisierte Themengebiete\n• Peer Mentoring Programme für gegenseitige Unterstützung\n• Knowledge Sharing Plattformen für Best Practice Austausch\n\n📚 Kontinuierliche Lernressourcen und Support:\n• Access zu aktuellen Ressourcen und Dokumentationen\n• Regular Update Sessions für neue Technologien und Trends\n• On-demand Expert Consultations für spezifische Herausforderungen\n• Curated Learning Paths für kontinuierliche Spezialisierung\n• Micro-Learning Modules für Just-in-Time Kompetenzentwicklung\n\n🚀 Career Development und Progression Support:\n• Individual Career Planning mit strategischer Weiterbildungsberatung\n• Skill Gap Analysis für gezielte Kompetenzentwicklung\n• Certification Roadmaps für strukturierte Qualifikationsentwicklung\n• Industry Networking Events und Professional Development Opportunities\n• Leadership Development für Senior-Level Karrierewege\n\n🔄 Adaptive Support und personalisierte Betreuung:\n• Regular Check-ins für Fortschritts-Monitoring und Anpassung\n• Flexible Support-Modelle für verschiedene Lerntypen und -geschwindigkeiten\n• Crisis Support für Herausforderungen bei der praktischen Anwendung\n• Success Coaching für Motivation und Zielerreichung\n• Transition Support für Rollenwechsel und neue Verantwortlichkeiten\n\n🌐 Global Community und Knowledge Network:\n• International Expert Network für globale Perspektiven\n• Cross-cultural Learning Opportunities für internationale Zusammenarbeit\n• Industry Thought Leadership Exposure für strategische Einblicke\n• Research Collaboration für Innovation und Emerging Technologies\n• Professional Recognition und Public Speaking Opportunities"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
