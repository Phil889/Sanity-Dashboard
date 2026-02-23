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
    console.log('Updating EU CRA page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie entwickeln wir eine effektive Change Management Strategie für EU CRA Transformation in multinationalen Organisationen?',
        answer: "Eine effektive Change Management Strategie für EU CRA Transformation in multinationalen Organisationen erfordert kulturell sensible Ansätze, die sowohl zentrale Koordination als auch lokale Anpassung ermöglichen. Diese Strategie muss die Komplexität verschiedener Märkte, Kulturen und Geschäftspraktiken berücksichtigen und gleichzeitig einheitliche Compliance-Standards gewährleisten.\n\n🌍 Kulturell-adaptive Transformation:\n• Entwicklung kulturspezifischer Change Management Ansätze, die lokale Geschäftspraktiken, Kommunikationsstile und Entscheidungsprozesse respektieren und integrieren.\n• Aufbau lokaler Change Champions und Botschafter-Netzwerke, die als Brücke zwischen zentralen Anforderungen und lokalen Gegebenheiten fungieren.\n• Implementation von Multi-Language Communication Strategien mit kulturell angepassten Botschaften und Materialien für verschiedene EU-Märkte.\n• Berücksichtigung unterschiedlicher Regulatorik-Kulturen und Compliance-Traditionen in verschiedenen Mitgliedstaaten bei der Transformationsplanung.\n• Aufbau von Cross-Cultural Competence in zentralen Teams für effektive Zusammenarbeit mit lokalen Organisationen.\n\n📚 Strukturierte Kompetenzentwicklung:\n• Entwicklung umfassender Training- und Entwicklungsprogramme, die sowohl technische EU CRA Expertise als auch kulturelle Sensibilität vermitteln.\n• Aufbau von Centers of Excellence in verschiedenen Regionen für lokale Expertise-Entwicklung und Best Practice Sharing.\n• Implementation von Mentoring- und Coaching-Programmen für Wissenstransfer zwischen erfahrenen und neuen Mitarbeitern.\n• Etablierung von Cross-Border Rotation und Exchange Programmen für praktische Erfahrung in verschiedenen EU-Märkten.\n• Integration von EU CRA Kompetenz-Anforderungen in Rekrutierungs-, Performance Management und Karriereentwicklungs-Prozesse.\n\n🔄 Kontinuierliche Engagement und Kommunikation:\n• Aufbau von Multi-Channel Communication Strategien, die verschiedene Stakeholder-Gruppen und Kommunikationspräferenzen berücksichtigen.\n• Implementation von Regular Feedback Mechanismen und Pulse Surveys für kontinuierliche Messung des Transformationsfortschritts.\n• Entwicklung von Success Story Sharing und Recognition Programmen für Motivation und Engagement-Steigerung.\n• Etablierung von Town Halls und Interactive Sessions für direkte Kommunikation zwischen Leadership und Mitarbeitern.\n• Integration von Change Management Metriken in reguläre Business Reviews und Performance Dashboards."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Schulungs- und Kompetenzentwicklungsprogramme sind für nachhaltige EU CRA Compliance erforderlich?',
        answer: "Nachhaltige EU CRA Compliance erfordert umfassende Schulungs- und Kompetenzentwicklungsprogramme, die sowohl technische Expertise als auch regulatorisches Verständnis vermitteln. Diese Programme müssen kontinuierlich aktualisiert und an sich ändernde Anforderungen angepasst werden, um langfristige Compliance-Exzellenz zu gewährleisten.\n\n🎓 Strukturierte Lernarchitektur:\n• Entwicklung von Role-based Learning Paths für verschiedene Funktionen und Verantwortungsebenen, von technischen Spezialisten bis hin zu C-Level Executives.\n• Aufbau einer EU CRA Academy mit modularen Kursen, die sowohl Grundlagen als auch spezialisierte Themen abdecken.\n• Implementation von Blended Learning Ansätzen, die Online-Module, Präsenztrainings, Workshops und praktische Übungen kombinieren.\n• Integration von Simulation und Gamification Elementen für interaktives und engagiertes Lernen.\n• Entwicklung von Micro-Learning Formaten für kontinuierliche Kompetenzentwicklung im Arbeitsalltag.\n\n🔧 Praktische Kompetenzentwicklung:\n• Aufbau von Hands-on Labs und Sandbox Environments für praktische Erfahrung mit EU CRA Tools und Technologien.\n• Implementation von Case Study basierten Lernansätzen mit realen EU CRA Implementierungsszenarien.\n• Entwicklung von Cross-functional Project Teams für praktische Anwendung erlernter Konzepte.\n• Etablierung von Mentoring und Job Shadowing Programmen für Erfahrungsaustausch und Wissenstransfer.\n• Integration von External Expert Sessions und Industry Best Practice Sharing für erweiterte Perspektiven.\n\n📊 Kontinuierliche Bewertung und Zertifizierung:\n• Entwicklung von Competency Assessment Frameworks für objektive Messung von EU CRA Kenntnissen und Fähigkeiten.\n• Implementation von Certification Programs mit verschiedenen Spezialisierungsrichtungen und Kompetenzstufen.\n• Aufbau von Continuous Learning Tracking Systemen für individuelle Lernfortschritte und Entwicklungspläne.\n• Etablierung von Regular Refresher Training und Update Sessions für aktuelle regulatorische Entwicklungen.\n• Integration von Learning Analytics für datengetriebene Optimierung der Trainingsprogramme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie schaffen wir eine sicherheitsbewusste Unternehmenskultur, die EU CRA Compliance als strategischen Wert verankert?',
        answer: "Die Schaffung einer sicherheitsbewussten Unternehmenskultur, die EU CRA Compliance als strategischen Wert verankert, erfordert einen ganzheitlichen Ansatz, der über traditionelle Compliance-Programme hinausgeht. Diese Kulturentwicklung muss Cybersicherheit als integralen Bestandteil der Geschäftsstrategie und Unternehmensidentität etablieren.\n\n🏛️ Kulturelle Grundlagen und Werte:\n• Entwicklung einer klaren Vision und Mission für Cybersicherheit, die EU CRA Compliance als Ausdruck von Kundenverantwortung und Geschäftsexzellenz positioniert.\n• Integration von Sicherheitswerten in Unternehmensleitbild, Verhaltenskodex und Performance-Kriterien auf allen Organisationsebenen.\n• Aufbau von Security Champions Netzwerken, die als Multiplikatoren und Vorbilder für sicherheitsbewusstes Verhalten fungieren.\n• Etablierung von Ritualen und Traditionen, die Cybersicherheit als gemeinsame Verantwortung und Stolz der Organisation feiern.\n• Implementation von Storytelling und Narrative Building für emotionale Verbindung zu Sicherheitszielen und EU CRA Compliance.\n\n💡 Engagement und Partizipation:\n• Entwicklung von Innovation Challenges und Hackathons für kreative Lösungsansätze zu EU CRA Herausforderungen.\n• Aufbau von Employee-driven Security Initiatives und Bottom-up Verbesserungsvorschlägen.\n• Implementation von Cross-departmental Security Projects für organisationsweite Zusammenarbeit und Ownership.\n• Etablierung von Regular Security Awareness Events, Lunch-and-Learns und Knowledge Sharing Sessions.\n• Integration von Gamification Elementen für spielerisches Lernen und Engagement in Sicherheitsthemen.\n\n🎯 Führung und Vorbildfunktion:\n• Demonstration von Leadership Commitment durch sichtbare Investitionen in Cybersicherheit und EU CRA Compliance.\n• Aufbau von Security Leadership Development Programmen für Führungskräfte auf allen Ebenen.\n• Implementation von Regular Communication von C-Level über Sicherheitserfolge, Herausforderungen und strategische Bedeutung.\n• Etablierung von Transparent Decision Making Prozessen, die Sicherheitsaspekte in Geschäftsentscheidungen sichtbar machen.\n• Integration von Security Metrics in Executive Dashboards und Board Reporting für kontinuierliche Aufmerksamkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche organisatorischen Strukturen unterstützen effektive Cross-Border Zusammenarbeit für EU CRA Compliance?',
        answer: "Effektive Cross-Border Zusammenarbeit für EU CRA Compliance erfordert spezialisierte organisatorische Strukturen, die sowohl zentrale Koordination als auch lokale Autonomie ermöglichen. Diese Strukturen müssen die Komplexität multinationaler Operationen bewältigen und gleichzeitig einheitliche Compliance-Standards gewährleisten.\n\n🏗️ Matrix-Organisationsstrukturen:\n• Entwicklung von Dual-Reporting Strukturen, die sowohl funktionale Expertise als auch regionale Verantwortung berücksichtigen.\n• Aufbau von Cross-Border Project Teams mit klaren Rollen, Verantwortlichkeiten und Entscheidungskompetenzen.\n• Implementation von Regional Compliance Hubs, die als Koordinationszentren für mehrere Länder oder Märkte fungieren.\n• Etablierung von Center of Excellence Netzwerken für Expertise-Sharing und Best Practice Entwicklung.\n• Integration von Virtual Team Structures für flexible und effiziente Zusammenarbeit über Grenzen hinweg.\n\n🤝 Kollaborative Governance-Mechanismen:\n• Aufbau von Cross-Border Steering Committees mit Vertretern aus allen relevanten Märkten und Funktionen.\n• Implementation von Regular Coordination Meetings und Sync-up Sessions für kontinuierliche Abstimmung.\n• Entwicklung von Shared Decision Making Frameworks für komplexe Cross-Border Entscheidungen.\n• Etablierung von Conflict Resolution Mechanismen für Interessenskonflikte zwischen verschiedenen Märkten.\n• Integration von Collaborative Planning Prozesse für koordinierte EU CRA Implementierung.\n\n📱 Technologie-unterstützte Zusammenarbeit:\n• Implementation von Collaboration Platforms und Digital Workspaces für nahtlose Cross-Border Kommunikation.\n• Aufbau von Shared Knowledge Repositories und Documentation Systems für zentrale Informationsverteilung.\n• Entwicklung von Real-time Dashboards und Reporting Tools für transparente Performance-Überwachung.\n• Etablierung von Video Conferencing und Virtual Meeting Infrastrukturen für regelmäßige Face-to-Face Interaktion.\n• Integration von Project Management Tools und Workflow Systems für koordinierte Aktivitäten und Deliverables."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
