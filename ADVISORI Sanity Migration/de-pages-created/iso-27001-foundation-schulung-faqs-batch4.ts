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
    console.log('Updating ISO 27001 Foundation Schulung page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-schulung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche technischen Voraussetzungen sind für Foundation Schulungen erforderlich?',
        answer: "Die technischen Voraussetzungen für ISO 27001 Foundation Schulungen sind bewusst niedrig gehalten, um eine breite Teilnahme zu ermöglichen. Moderne Schulungskonzepte nutzen flexible Technologien, die verschiedene Lernumgebungen und Teilnehmerprofile unterstützen.\n\n💻 Grundlegende IT-Ausstattung:\n• Standard-Computer oder Laptop mit aktueller Internetverbindung für Online-Komponenten\n• Moderne Webbrowser für den Zugang zu E-Learning-Plattformen und digitalen Ressourcen\n• Audio- und Videofähigkeiten für interaktive Webinare und Multimedia-Inhalte\n• Grundlegende Office-Software für Übungen und Dokumentation\n• Mobile Geräte für flexible Lernmöglichkeiten und Micro-Learning-Einheiten\n\n🌐 Digitale Lernplattformen:\n• Zugang zu Learning Management Systemen für strukturierte Kursinhalte\n• Kollaborationstools für Gruppenarbeiten und Peer-Learning\n• Video-Konferenz-Software für virtuelle Klassenzimmer und Diskussionen\n• Cloud-basierte Dokumentenbearbeitung für gemeinsame Projekte\n• Mobile Apps für kontinuierliches Lernen und Wissensabfragen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie können Foundation Schulungen in Remote-Arbeitsumgebungen durchgeführt werden?',
        answer: "Die Durchführung von ISO 27001 Foundation Schulungen in Remote-Arbeitsumgebungen erfordert angepasste didaktische Konzepte und technologische Lösungen. Moderne virtuelle Lernformate können die Effektivität traditioneller Präsenzschulungen erreichen oder sogar übertreffen.\n\n🎥 Virtuelle Klassenzimmer und Interaktion:\n• Live-Webinare mit interaktiven Elementen wie Umfragen, Breakout-Rooms und Chat-Funktionen\n• Aufgezeichnete Sessions für asynchrones Lernen und Wiederholung\n• Virtuelle Whiteboards für kollaborative Übungen und Brainstorming\n• Screen-Sharing für praktische Demonstrationen und Fallstudien\n• Gamification-Elemente zur Steigerung des Engagements in virtuellen Umgebungen\n\n📱 Flexible Lernformate:\n• Modulare Online-Kurse für selbstbestimmtes Lernen\n• Micro-Learning-Einheiten für beschäftigte Remote-Arbeiter\n• Mobile-optimierte Inhalte für Lernen unterwegs\n• Offline-verfügbare Materialien für unstabile Internetverbindungen\n• Hybride Formate mit Kombination aus synchronen und asynchronen Elementen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Kosten sind mit Foundation Schulungen verbunden?',
        answer: "Die Kosten für ISO 27001 Foundation Schulungen variieren je nach Format, Anbieter und Umfang der Schulung. Eine strategische Betrachtung der Investition zeigt jedoch den langfristigen Wert für die Organisation.\n\n💰 Kostenkomponenten und Faktoren:\n• Schulungsgebühren variieren je nach Anbieter, Format und Dauer der Schulung\n• Zusätzliche Kosten für Materialien, Zertifizierungen und Follow-up-Sessions\n• Interne Kosten für Arbeitszeit der Teilnehmer und organisatorischen Aufwand\n• Technische Infrastruktur für Online-Schulungen und E-Learning-Plattformen\n• Reise- und Unterkunftskosten bei Präsenzschulungen\n\n📊 Return on Investment:\n• Reduzierung von Sicherheitsvorfällen durch erhöhtes Bewusstsein und bessere Praktiken\n• Verbesserte Compliance und Vermeidung von Sanktionen und Strafen\n• Erhöhte Effizienz durch standardisierte Sicherheitsprozesse und Verfahren\n• Stärkung der Unternehmensreputation und des Kundenvertrauens\n• Langfristige Kosteneinsparungen durch präventive Sicherheitsmaßnahmen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie wird die Qualität von Foundation Schulungsanbietern bewertet?',
        answer: "Die Bewertung der Qualität von ISO 27001 Foundation Schulungsanbietern erfordert eine systematische Analyse verschiedener Qualitätskriterien. Eine sorgfältige Auswahl stellt sicher, dass die Schulung den gewünschten Lernerfolg und nachhaltigen Wert liefert.\n\n🏆 Akkreditierungen und Zertifizierungen:\n• Anerkennung durch internationale Zertifizierungsstellen wie PECB, EXIN oder ISACA\n• Akkreditierung der Schulungsprogramme durch relevante Fachorganisationen\n• Zertifizierung der Trainer und deren kontinuierliche Weiterbildung\n• Compliance mit Bildungsstandards und Qualitätsmanagementsystemen\n• Mitgliedschaft in Fachverbänden und professionellen Organisationen\n\n👨‍🏫 Trainer-Qualifikationen und Expertise:\n• Praktische Erfahrung in ISO 27001 Implementierung und Beratung\n• Pädagogische Qualifikationen und Schulungserfahrung\n• Aktuelle Zertifizierungen und kontinuierliche Weiterbildung\n• Branchenkenntnisse und Verständnis für spezifische Herausforderungen\n• Referenzen und Bewertungen von früheren Schulungsteilnehmern\n\n📈 Schulungsqualität und Methodik:\n• Strukturierte Curricula mit klaren Lernzielen und Kompetenzstandards\n• Vielfältige Lernmethoden und interaktive Schulungsformate\n• Aktuelle und praxisrelevante Schulungsmaterialien\n• Effektive Bewertungs- und Feedback-Mechanismen\n• Nachhaltige Unterstützung und Follow-up-Services"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
