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
    console.log('Updating Datenschutz bei KI page with Operational and Governance FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutz-bei-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutz-bei-ki" not found')
    }
    
    // Create new Operational and Governance FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie entwickelt ADVISORI organisatorische Datenschutz-Governance-Strukturen für KI-Teams und welche Rollen und Verantwortlichkeiten werden für AI-Privacy-Management definiert?',
        answer: "Die Etablierung effektiver Datenschutz-Governance für KI-Teams erfordert spezialisierte organisatorische Strukturen, die sowohl technische Expertise als auch regulatorische Compliance vereinen. ADVISORI entwickelt maßgeschneiderte AI-Privacy-Governance-Frameworks, die klare Verantwortlichkeiten definieren und nahtlose Zusammenarbeit zwischen verschiedenen Stakeholdern ermöglichen.\n\n👥 AI-Privacy-Governance-Strukturen:\n• AI Privacy Officer Rollen: Definition spezialisierter Datenschutzbeauftragter für KI-Projekte mit technischer Expertise und regulatorischem Verständnis für AI-spezifische Datenschutzherausforderungen.\n• Cross-Functional Privacy Teams: Etablierung interdisziplinärer Teams aus Data Scientists, Privacy Engineers, Legal Experts und Business Stakeholdern für ganzheitliche Datenschutz-Governance.\n• AI Ethics Committees: Implementierung von Ethik-Komitees, die Datenschutz- und Fairness-Aspekte von KI-Projekten bewerten und strategische Entscheidungen unterstützen.\n• Privacy-by-Design Champions: Ausbildung und Etablierung von Privacy-Champions in KI-Teams, die Datenschutzprinzipien in tägliche Entwicklungsarbeit integrieren.\n\n🔧 Operative Governance-Mechanismen:\n• AI Privacy Decision Frameworks: Entwicklung strukturierter Entscheidungsprozesse für datenschutzrelevante Aspekte in KI-Projekten, von Datenauswahl bis Modell-Deployment.\n• Privacy Impact Integration: Integration von Datenschutz-Impact-Assessments in Standard-KI-Entwicklungsprozesse und Projektmanagement-Workflows.\n• Continuous Training Programs: Implementierung kontinuierlicher Schulungsprogramme für KI-Teams zu evolvierende Datenschutzanforderungen und Best Practices.\n• Performance Metrics und KPIs: Entwicklung messbarer Datenschutz-KPIs für KI-Teams und Integration in Performance-Management-Systeme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Schulungs- und Awareness-Programme entwickelt ADVISORI für Mitarbeiter im Bereich KI-Datenschutz und wie wird Privacy-Kompetenz in AI-Teams aufgebaut?',
        answer: "Der Aufbau von KI-Datenschutz-Kompetenz in Organisationen erfordert umfassende Bildungs- und Awareness-Programme, die sowohl technische als auch regulatorische Aspekte abdecken. ADVISORI entwickelt maßgeschneiderte Schulungsframeworks, die verschiedene Rollen und Kompetenzniveaus adressieren und kontinuierliche Weiterentwicklung der Privacy-Expertise fördern.\n\n📚 Rollenspezifische Schulungsprogramme:\n• Data Scientist Privacy Training: Spezialisierte Schulungen für Data Scientists zu Privacy-Preserving Machine Learning, Differential Privacy und datenschutzfreundlichen Algorithmen.\n• Developer Privacy Engineering: Technische Schulungen für Entwickler zu Privacy-by-Design-Implementierung, Secure Coding für AI und Privacy-Testing-Methodologien.\n• Management AI Privacy Leadership: Executive-Level-Schulungen zu strategischen Datenschutzaspekten von KI, Risikomanagement und regulatorischen Anforderungen.\n• Legal Team AI Literacy: Juristische Schulungen zu technischen Aspekten von KI-Systemen und deren Auswirkungen auf Datenschutzrecht und Compliance.\n\n🎯 Praktische Kompetenzentwicklung:\n• Hands-on Privacy Labs: Praktische Workshops zu Privacy-Preserving AI-Techniken mit realen Datensätzen und Anwendungsszenarien.\n• Case Study Analysis: Analyse realer Datenschutzvorfälle in KI-Systemen und Entwicklung von Lösungsstrategien in Gruppenarbeit.\n• Privacy Design Challenges: Gamifizierte Lernansätze, bei denen Teams datenschutzfreundliche Lösungen für komplexe KI-Herausforderungen entwickeln.\n• Continuous Learning Platforms: Implementierung digitaler Lernplattformen mit aktuellen Inhalten zu evolvierende KI-Datenschutzlandschaft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Wie implementiert ADVISORI Change Management für die Einführung datenschutzkonformer KI-Praktiken und welche Strategien werden für organisatorische Transformation eingesetzt?',
        answer: "Die Einführung datenschutzkonformer KI-Praktiken erfordert umfassende organisatorische Transformation, die über technische Implementierung hinausgeht. ADVISORI entwickelt strategische Change Management-Ansätze, die kulturelle Veränderung, Prozessoptimierung und nachhaltige Adoption von Privacy-by-Design-Prinzipien in KI-Organisationen fördern.\n\n🔄 Strategisches Change Management für AI Privacy:\n• Cultural Transformation: Entwicklung von Strategien zur Verankerung von Datenschutz als Kernwert in KI-Organisationen, von Leadership-Commitment bis zu Team-Level-Praktiken.\n• Process Reengineering: Neugestaltung bestehender KI-Entwicklungsprozesse zur Integration von Privacy-by-Design-Prinzipien ohne Beeinträchtigung von Innovation und Agilität.\n• Stakeholder Alignment: Koordination verschiedener Organisationsebenen und Funktionen zur Schaffung einheitlicher Vision für datenschutzkonforme KI-Entwicklung.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen gegen neue Datenschutzpraktiken durch gezielte Kommunikation und Incentivierung.\n\n📈 Nachhaltige Adoption-Strategien:\n• Phased Implementation: Entwicklung gestufter Einführungsstrategien, die schrittweise Adoption ermöglichen und Quick Wins für Momentum schaffen.\n• Success Metrics und Feedback: Implementierung messbarer Erfolgsmetriken für Privacy-Adoption und kontinuierliche Feedback-Schleifen für Verbesserung.\n• Champion Networks: Aufbau von Netzwerken interner Privacy-Champions, die als Multiplikatoren und Change Agents fungieren.\n• Continuous Improvement: Etablierung von Mechanismen für kontinuierliche Verbesserung und Anpassung von Privacy-Praktiken basierend auf Erfahrungen und evolvierende Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Welche langfristigen Strategien entwickelt ADVISORI für die Evolution von KI-Datenschutz-Praktiken und wie wird Zukunftssicherheit in sich wandelnden regulatorischen Landschaften gewährleistet?',
        answer: "Die langfristige Nachhaltigkeit von KI-Datenschutz-Praktiken erfordert vorausschauende Strategien, die sich an evolvierende Technologien und regulatorische Anforderungen anpassen können. ADVISORI entwickelt zukunftssichere Privacy-Frameworks, die Flexibilität, Skalierbarkeit und kontinuierliche Innovation in KI-Datenschutz ermöglichen.\n\n🔮 Zukunftsorientierte Privacy-Evolution:\n• Emerging Technology Integration: Proaktive Bewertung und Integration neuer Privacy-Preserving-Technologien wie Quantum-Safe Cryptography, Advanced Homomorphic Encryption und Next-Generation Federated Learning.\n• Regulatory Anticipation: Entwicklung von Frameworks zur Antizipation zukünftiger regulatorischer Entwicklungen und proaktive Anpassung von Privacy-Praktiken.\n• Scalable Architecture Design: Implementierung modularer und erweiterbarer Privacy-Architekturen, die mit wachsenden Datenvolumen und komplexeren KI-Systemen skalieren können.\n• Innovation-Privacy Balance: Entwicklung von Strategien zur Aufrechterhaltung der Balance zwischen technologischer Innovation und Datenschutz-Compliance über Zeit.\n\n🌐 Adaptive Governance-Frameworks:\n• Dynamic Policy Management: Implementierung adaptiver Policy-Management-Systeme, die automatische Anpassung an neue regulatorische Anforderungen ermöglichen.\n• Continuous Learning Organizations: Aufbau von Lernorganisationen, die kontinuierlich neue Privacy-Erkenntnisse integrieren und Best Practices weiterentwickeln.\n• Ecosystem Collaboration: Entwicklung von Strategien für Zusammenarbeit mit Regulatoren, Branchenverbänden und Forschungseinrichtungen zur Mitgestaltung zukünftiger Privacy-Standards.\n• Future-Ready Talent Development: Langfristige Talententwicklungsstrategien zur Sicherstellung verfügbarer Expertise für evolvierende KI-Datenschutzanforderungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Operational and Governance FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Operational and Governance FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
