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
    console.log('Updating ISO 27001 Foundation Schulung page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-schulung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Trends und Entwicklungen prägen die Zukunft von Foundation Schulungen?',
        answer: "Die Zukunft von ISO 27001 Foundation Schulungen wird durch technologische Innovationen, veränderte Arbeitsweisen und neue Bedrohungslandschaften geprägt. Diese Entwicklungen erfordern kontinuierliche Anpassungen der Schulungskonzepte und Lernmethoden.\n\n🚀 Technologische Innovation:\n• Integration von Künstlicher Intelligenz für personalisierte Lernpfade und adaptive Inhalte\n• Virtual und Augmented Reality für immersive Lernerfahrungen und realistische Simulationen\n• Blockchain-Technologie für sichere und verifizierbare Zertifizierungen\n• Internet of Things Integration für praktische Sicherheitsübungen\n• Machine Learning für intelligente Bewertung und Feedback-Systeme\n\n🌐 Neue Arbeitsmodelle:\n• Hybride Lernformate für flexible Remote- und Präsenz-Kombinationen\n• Micro-Learning und Just-in-Time Training für beschäftigte Fachkräfte\n• Collaborative Learning Plattformen für globale Wissensgemeinschaften\n• Gamification und Social Learning für erhöhtes Engagement\n• Mobile-First Ansätze für ubiquitäres Lernen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie können Foundation Schulungen zur Entwicklung einer Sicherheitskultur beitragen?',
        answer: "Foundation Schulungen spielen eine zentrale Rolle bei der Entwicklung einer nachhaltigen Sicherheitskultur in Organisationen. Sie schaffen nicht nur Wissen, sondern formen Einstellungen, Verhaltensweisen und gemeinsame Werte im Umgang mit Informationssicherheit.\n\n🌱 Kultureller Wandel:\n• Entwicklung eines gemeinsamen Verständnisses für die Bedeutung von Informationssicherheit\n• Schaffung einer Kultur der Verantwortung und des proaktiven Sicherheitsbewusstseins\n• Integration von Sicherheitsdenken in alle Geschäftsprozesse und Entscheidungen\n• Förderung offener Kommunikation über Sicherheitsthemen und Herausforderungen\n• Aufbau von Vertrauen und Zusammenarbeit zwischen verschiedenen Organisationsebenen\n\n👥 Verhaltensänderung:\n• Transformation von Sicherheit als Hindernis zu Sicherheit als Enabler\n• Entwicklung intrinsischer Motivation für sicherheitsbewusstes Verhalten\n• Schaffung positiver Peer-Pressure und sozialer Normen für Sicherheit\n• Etablierung von Sicherheit als Kernwert und Qualitätsmerkmal\n• Aufbau von Resilienz und Anpassungsfähigkeit gegenüber neuen Bedrohungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielen Foundation Schulungen in der digitalen Transformation?',
        answer: "Foundation Schulungen sind ein kritischer Erfolgsfaktor für sichere digitale Transformation. Sie schaffen das notwendige Sicherheitsbewusstsein und die Kompetenzen, die für die erfolgreiche Einführung neuer Technologien und digitaler Geschäftsmodelle erforderlich sind.\n\n🔄 Digitale Readiness:\n• Vorbereitung der Mitarbeiter auf neue digitale Arbeitsweisen und Technologien\n• Entwicklung von Kompetenzen für sichere Cloud-Nutzung und Remote-Arbeit\n• Verständnis für Datenschutz und Privacy-by-Design Prinzipien\n• Awareness für neue Bedrohungen in digitalen Umgebungen\n• Aufbau von Vertrauen in digitale Technologien durch Sicherheitskompetenz\n\n⚡ Innovation Enablement:\n• Sicherheit als Enabler für Innovation statt als Hindernis\n• Entwicklung von Security-by-Design Denkweisen\n• Integration von Sicherheitsüberlegungen in Innovationsprozesse\n• Aufbau von Kompetenzen für agile und DevSecOps Ansätze\n• Förderung einer Kultur der sicheren Experimentation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie wird der Erfolg von Foundation Schulungsprogrammen langfristig gemessen?',
        answer: "Die langfristige Erfolgsmessung von ISO 27001 Foundation Schulungsprogrammen erfordert einen ganzheitlichen Ansatz, der über unmittelbare Lernziele hinausgeht und die nachhaltigen Auswirkungen auf die Organisation erfasst.\n\n📊 Quantitative Erfolgsindikatoren:\n• Reduzierung der Anzahl und Schwere von Sicherheitsvorfällen über Zeit\n• Verbesserung der Compliance-Bewertungen und Audit-Ergebnisse\n• Erhöhung der Melderate von Sicherheitsvorfällen als Indikator für gestiegenes Bewusstsein\n• Messung der Teilnahmequoten und Abschlussraten bei weiterführenden Schulungen\n• Tracking der Zertifizierungsraten und beruflichen Entwicklung der Teilnehmer\n\n🎯 Qualitative Bewertungskriterien:\n• Beobachtung von Verhaltensänderungen im täglichen Arbeitsumfeld\n• Bewertung der Qualität von Sicherheitsdiskussionen und Entscheidungsfindung\n• Analyse der kulturellen Veränderungen und Einstellungen zur Informationssicherheit\n• Feedback von Führungskräften über verbesserte Sicherheitskompetenzen ihrer Teams\n• Bewertung der Innovationsfähigkeit und Anpassung an neue Sicherheitsherausforderungen\n\n🔄 Kontinuierliche Verbesserung:\n• Regelmäßige Überprüfung und Anpassung der Schulungsinhalte basierend auf Ergebnissen\n• Integration von Lessons Learned in zukünftige Schulungsprogramme\n• Entwicklung von Benchmarks und Best Practices für die Branche\n• Aufbau einer Feedback-Kultur für kontinuierliche Optimierung\n• Langfristige Tracking-Systeme für nachhaltige Kompetenzentwicklung"
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
