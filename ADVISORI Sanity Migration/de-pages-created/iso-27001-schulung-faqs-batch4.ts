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
    console.log('Updating ISO 27001 Schulung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-schulung" not found')
    }
    
    // Create new FAQs for specialized training and industry applications
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie passt ADVISORI ISO 27001 Schulungen an branchenspezifische Anforderungen an?',
        answer: "ADVISORI entwickelt maßgeschneiderte ISO 27001 Schulungsprogramme, die spezifisch auf die einzigartigen Herausforderungen, regulatorischen Anforderungen und Geschäftsmodelle verschiedener Branchen zugeschnitten sind. Unser branchenspezifischer Ansatz gewährleistet maximale Relevanz und praktische Anwendbarkeit.\n\n🏦 Finanzdienstleistungen und Banking:\n• Integration von DORA, PCI DSS und anderen finanzspezifischen Compliance-Anforderungen\n• Schulung in der Bewertung von Fintech-Innovationen und deren Sicherheitsimplikationen\n• Training in der Anwendung von ISO 27001 auf Zahlungsverkehrssysteme und Kryptowährungen\n• Vermittlung von Kompetenzen für Cyber Resilience und Operational Resilience\n• Spezielle Fokussierung auf Outsourcing-Risiken und Third-Party-Risk-Management\n\n🏥 Gesundheitswesen und Medizintechnik:\n• Integration von GDPR-Anforderungen für Gesundheitsdaten und Patientenschutz\n• Schulung in der Sicherheit von Medizingeräten und IoT-Systemen im Gesundheitswesen\n• Training in der Anwendung von ISO 27001 auf Telemedizin und Digital Health Lösungen\n• Vermittlung von Kompetenzen für die Sicherheit von Forschungsdaten und klinischen Studien\n• Spezielle Berücksichtigung von Verfügbarkeitsanforderungen in kritischen Gesundheitssystemen\n\n🏭 Industrie und Manufacturing:\n• Integration von IEC 62443 und anderen industriespezifischen Sicherheitsstandards\n• Schulung in der Sicherheit von Industrial IoT und Industry 4.0 Umgebungen\n• Training in der Anwendung von ISO 27001 auf Produktionssysteme und Supply Chain\n• Vermittlung von Kompetenzen für die Sicherheit von Intellectual Property und Produktionsdaten\n• Spezielle Fokussierung auf die Integration von IT und OT Security\n\n🛡️ Kritische Infrastrukturen und Energie:\n• Integration von NIS2 und anderen Anforderungen für kritische Infrastrukturen\n• Schulung in der Sicherheit von SCADA-Systemen und Energieversorgungsnetzen\n• Training in der Anwendung von ISO 27001 auf Smart Grid und erneuerbare Energien\n• Vermittlung von Kompetenzen für Incident Response in kritischen Systemen\n• Spezielle Berücksichtigung von nationalen Sicherheitsaspekten und Bedrohungsszenarien\n\n☁️ Cloud und Technologie-Anbieter:\n• Integration von ISO 27017, ISO 27018 und anderen Cloud-spezifischen Standards\n• Schulung in der Sicherheit von Multi-Tenant-Umgebungen und Shared Responsibility Models\n• Training in der Anwendung von ISO 27001 auf DevOps und Continuous Deployment\n• Vermittlung von Kompetenzen für die Sicherheit von APIs und Microservices\n• Spezielle Fokussierung auf Compliance-as-a-Service und automatisierte Sicherheitskontrollen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche innovativen Lernmethoden und Technologien setzt ADVISORI in ISO 27001 Schulungen ein?',
        answer: "ADVISORI nutzt modernste Lernmethoden und innovative Technologien, um ISO 27001 Schulungen interaktiver, effektiver und nachhaltiger zu gestalten. Unser technologiegestützter Ansatz kombiniert bewährte pädagogische Prinzipien mit cutting-edge Lerntools.\n\n🎮 Gamification und Interactive Learning:\n• Entwicklung von ISO 27001 Serious Games, die komplexe Sicherheitskonzepte spielerisch vermitteln\n• Einsatz von Leaderboards, Achievements und Progress-Tracking zur Steigerung der Lernmotivation\n• Interactive Simulations von Sicherheitsvorfällen und deren Management\n• Rollenspiel-basierte Szenarien für Audit-Training und Stakeholder-Kommunikation\n• Collaborative Problem-Solving Challenges mit Peer-Learning-Elementen\n\n🥽 Virtual und Augmented Reality Experiences:\n• VR-basierte Touren durch virtuelle Rechenzentren zur Veranschaulichung physischer Sicherheitskontrollen\n• Augmented Reality Overlays für die Visualisierung von Netzwerkarchitekturen und Datenflüssen\n• Immersive Incident Response Simulationen in virtuellen Unternehmensumgebungen\n• VR-Training für Audit-Situationen mit realistischen Gesprächspartnern\n• Mixed Reality Workshops für kollaborative ISMS-Planung und Risikobewertung\n\n🤖 Künstliche Intelligenz und Adaptive Learning:\n• AI-gestützte Personalisierung von Lerninhalten basierend auf individuellem Fortschritt\n• Intelligente Chatbots für 24/7 Unterstützung bei Fragen zu ISO 27001 Themen\n• Adaptive Prüfungssysteme, die sich an das Kompetenzniveau der Teilnehmer anpassen\n• Machine Learning basierte Empfehlungen für weiterführende Lernmodule\n• Automatisierte Analyse von Lernmustern zur kontinuierlichen Verbesserung der Schulungsinhalte\n\n📱 Mobile Learning und Microlearning:\n• Entwicklung einer umfassenden ISO 27001 Learning App für flexibles Lernen unterwegs\n• Bite-sized Learning Modules für kontinuierliche Kompetenzentwicklung\n• Push-Notifications für regelmäßige Wissensauffrischung und Updates\n• Offline-Verfügbarkeit von Lerninhalten für ortsunabhängiges Lernen\n• Social Learning Features für Erfahrungsaustausch zwischen Lernenden\n\n🔬 Hands-on Labs und Simulation Environments:\n• Cloud-basierte Laborumgebungen für praktische Übungen mit realen Tools\n• Sandbox-Umgebungen für sicheres Experimentieren mit Sicherheitskontrollen\n• Simulation von Cyber-Angriffen und deren Abwehr in kontrollierten Umgebungen\n• Virtual Machines mit vorkonfigurierten ISMS-Tools und Dokumentationsvorlagen\n• Collaborative Workspaces für Teamübungen und Projektarbeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie unterstützt ADVISORI Organisationen bei der Entwicklung interner ISO 27001 Schulungskapazitäten?',
        answer: "ADVISORI entwickelt nachhaltige interne Schulungskapazitäten in Organisationen durch Train-the-Trainer Programme und den Aufbau interner Expertise. Unser Ansatz schafft langfristige Unabhängigkeit und kontinuierliche Kompetenzentwicklung.\n\n👨‍🏫 Train-the-Trainer Programme:\n• Umfassende Ausbildung interner Mitarbeiter zu qualifizierten ISO 27001 Trainern\n• Vermittlung von didaktischen Fähigkeiten und modernen Schulungsmethoden\n• Training in der Entwicklung und Anpassung von Schulungsinhalten an organisationsspezifische Bedürfnisse\n• Schulung in der Nutzung verschiedener Lernmedien und Präsentationstechniken\n• Entwicklung von Kompetenzen zur Bewertung von Lernerfolg und kontinuierlicher Verbesserung\n\n📚 Curriculum Development und Content Creation:\n• Unterstützung bei der Entwicklung maßgeschneiderter Schulungscurricula\n• Bereitstellung von Templates, Präsentationen und Übungsmaterialien\n• Training in der Erstellung interaktiver und engagierender Lerninhalte\n• Entwicklung von Assessment-Tools und Bewertungskriterien\n• Integration von organisationsspezifischen Fallstudien und Beispielen\n\n🎯 Zielgruppenspezifische Schulungskonzepte:\n• Entwicklung differenzierter Schulungsprogramme für verschiedene Organisationsebenen\n• Training in der Anpassung von Inhalten an unterschiedliche Rollen und Verantwortlichkeiten\n• Schulung in der Gestaltung von Awareness-Programmen für alle Mitarbeiter\n• Entwicklung spezialisierter Module für technische Teams und Management\n• Integration von Compliance-spezifischen Anforderungen in Schulungsprogramme\n\n🔄 Kontinuierliche Verbesserung und Updates:\n• Etablierung von Prozessen zur regelmäßigen Aktualisierung von Schulungsinhalten\n• Training in der Integration neuer regulatorischer Anforderungen und Standards\n• Entwicklung von Feedback-Mechanismen und Qualitätssicherungsprozessen\n• Schulung in der Messung und Bewertung von Schulungseffektivität\n• Aufbau von Netzwerken für kontinuierlichen Erfahrungsaustausch\n\n🤝 Mentoring und Ongoing Support:\n• Langfristige Begleitung und Coaching der internen Trainer\n• Regelmäßige Review-Sessions und Feedback zur Schulungsqualität\n• Unterstützung bei der Lösung spezifischer Schulungsherausforderungen\n• Zugang zu aktuellen Materialien und Best Practices\n• Möglichkeit zur Teilnahme an ADVISORI Trainer-Communities und Fachveranstaltungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Rolle spielt praktische Erfahrung in ADVISORI ISO 27001 Schulungen und wie wird sie vermittelt?',
        answer: "Praktische Erfahrung steht im Zentrum aller ADVISORI ISO 27001 Schulungen. Wir verstehen, dass theoretisches Wissen allein nicht ausreicht, um ISO 27001 erfolgreich zu implementieren und zu betreiben. Deshalb integrieren wir umfangreiche praktische Elemente in alle unsere Schulungsprogramme.\n\n🛠️ Real-World Case Studies und Projektarbeit:\n• Verwendung echter Implementierungsprojekte als Grundlage für Lernübungen\n• Analyse von Success Stories und Lessons Learned aus verschiedenen Branchen\n• Bearbeitung realer Herausforderungen und Problemstellungen aus der Praxis\n• Entwicklung konkreter Lösungsansätze für typische ISMS-Implementierungshürden\n• Integration von aktuellen Marktentwicklungen und Technologietrends\n\n🎭 Immersive Simulation und Rollenspiele:\n• Simulation kompletter ISMS-Implementierungsprojekte von der Planung bis zur Zertifizierung\n• Rollenspiele für verschiedene Stakeholder-Perspektiven und Interessenskonflikte\n• Nachstellung von Audit-Situationen mit realistischen Herausforderungen\n• Simulation von Sicherheitsvorfällen und deren Management\n• Training von Kommunikations- und Verhandlungssituationen\n\n🔧 Hands-on Tool Training:\n• Praktische Arbeit mit realen ISMS-Tools und Software-Lösungen\n• Training in der Anwendung von Risk Assessment und Management Tools\n• Übungen mit Dokumentationssystemen und Workflow-Management\n• Praktische Erfahrung mit Monitoring- und Audit-Tools\n• Integration von Automatisierungstools und deren praktischer Anwendung\n\n📊 Live-Projekte und Consulting Shadowing:\n• Möglichkeit zur Teilnahme an realen ADVISORI Implementierungsprojekten\n• Shadowing erfahrener Berater bei Kundenterminen und Audits\n• Praktische Mitarbeit bei Risikobewertungen und Gap-Analysen\n• Teilnahme an Management-Präsentationen und Stakeholder-Meetings\n• Erfahrung in der praktischen Anwendung von Beratungsmethoden\n\n🎯 Outcome-orientierte Lernziele:\n• Entwicklung konkreter Deliverables und Arbeitsergebnisse während der Schulung\n• Erstellung von ISMS-Dokumentation und Prozessbeschreibungen\n• Durchführung echter Risikobewertungen für Teilnehmer-Organisationen\n• Entwicklung von Implementierungsplänen für reale Projekte\n• Präsentation von Ergebnissen vor Fachexperten und Peers für direktes Feedback"
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
