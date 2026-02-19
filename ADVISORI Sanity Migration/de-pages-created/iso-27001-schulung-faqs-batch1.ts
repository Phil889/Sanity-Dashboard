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
    console.log('Updating ISO 27001 Schulung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-schulung" not found')
    }
    
    // Create new FAQs for ISO 27001 training fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist eine strukturierte ISO 27001 Schulung entscheidend für den Implementierungserfolg?',
        answer: "Eine strukturierte ISO 27001 Schulung bildet das Fundament für eine erfolgreiche ISMS-Implementierung und geht weit über die reine Wissensvermittlung hinaus. Sie schafft das notwendige Verständnis für die Prinzipien der Informationssicherheit und entwickelt die praktischen Kompetenzen, die für eine nachhaltige Umsetzung des Standards erforderlich sind.\n\n🎯 Strategische Bedeutung für die Organisation:\n• Schaffung eines einheitlichen Verständnisses von Informationssicherheit und deren Bedeutung für das Unternehmen\n• Entwicklung einer sicherheitsbewussten Unternehmenskultur, die über technische Maßnahmen hinausgeht\n• Befähigung der Mitarbeiter, ihre Rolle im ISMS zu verstehen und aktiv zur Informationssicherheit beizutragen\n• Reduzierung von Implementierungsrisiken durch qualifizierte und vorbereitete Teams\n• Gewährleistung einer konsistenten und standardkonformen Umsetzung aller ISMS-Komponenten\n\n📚 Kompetenzentwicklung auf allen Ebenen:\n• Management-Ebene: Verständnis für strategische Bedeutung, Verantwortlichkeiten und Business Case von ISO 27001\n• ISMS-Verantwortliche: Tiefgreifende Kenntnisse in Implementierung, Betrieb und kontinuierlicher Verbesserung\n• Operative Mitarbeiter: Praktische Fähigkeiten zur Umsetzung von Sicherheitsmaßnahmen im Arbeitsalltag\n• Auditoren: Spezialisierte Kompetenzen für die Bewertung und Überwachung der ISMS-Wirksamkeit\n• IT-Teams: Technische Expertise für die Implementierung von Sicherheitskontrollen und Monitoring-Systemen\n\n🛡️ Risikominimierung und Compliance-Sicherheit:\n• Vermeidung kostspieliger Implementierungsfehler durch fundierte Vorbereitung und Planung\n• Sicherstellung der Compliance mit allen relevanten ISO 27001 Anforderungen von Beginn an\n• Reduzierung von Audit-Risiken durch gut vorbereitete und kompetente Mitarbeiter\n• Minimierung von Sicherheitsvorfällen durch erhöhtes Bewusstsein und korrekte Anwendung von Sicherheitsmaßnahmen\n• Gewährleistung einer effizienten Zertifizierungsvorbereitung mit höheren Erfolgsaussichten\n\n💡 Nachhaltige Wertschöpfung:\n• Aufbau interner Expertise, die langfristig zur Verfügung steht und kontinuierlich weiterentwickelt werden kann\n• Schaffung von Multiplikatoren, die ihr Wissen an andere Mitarbeiter weitergeben können\n• Entwicklung einer lernenden Organisation, die sich kontinuierlich an neue Bedrohungen und Anforderungen anpassen kann\n• Stärkung der Wettbewerbsfähigkeit durch demonstrierte Kompetenz in Informationssicherheit\n• Verbesserung der Mitarbeiterzufriedenheit durch klare Rollen, Verantwortlichkeiten und Entwicklungsmöglichkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Schulungsformate bietet ADVISORI für verschiedene Zielgruppen und Lernbedürfnisse?',
        answer: "ADVISORI bietet ein umfassendes Portfolio flexibler Schulungsformate, die optimal auf die unterschiedlichen Bedürfnisse, Rollen und Lernpräferenzen der Teilnehmer abgestimmt sind. Unser modularer Ansatz ermöglicht eine bedarfsgerechte Kompetenzentwicklung für alle Organisationsebenen.\n\n🏢 Präsenz-Schulungen und Workshops:\n• Intensive Face-to-Face Trainings in unseren modernen Schulungsräumen oder bei Ihnen vor Ort\n• Maximale Interaktion zwischen Trainern und Teilnehmern für optimalen Wissenstransfer\n• Praktische Übungen und Gruppenarbeiten zur Vertiefung des Gelernten\n• Networking-Möglichkeiten mit anderen Fachexperten und Teilnehmern\n• Sofortiges Feedback und individuelle Betreuung durch erfahrene Trainer\n\n💻 Online-Trainings und Webinare:\n• Flexible Live-Online-Schulungen mit interaktiven Elementen und virtuellen Breakout-Sessions\n• Zeitersparnis durch Wegfall von Reisezeiten bei gleichzeitig hoher Lernqualität\n• Aufzeichnung der Sessions für spätere Wiederholung und Vertiefung\n• Einsatz modernster E-Learning-Plattformen mit integrierten Collaboration-Tools\n• Möglichkeit zur Teilnahme von geografisch verteilten Teams\n\n🏭 Maßgeschneiderte Inhouse-Trainings:\n• Vollständig angepasste Schulungsprogramme, die spezifisch auf Ihre Organisationsstruktur und Branche zugeschnitten sind\n• Integration Ihrer realen Geschäftsprozesse, Systeme und Herausforderungen in die Schulungsinhalte\n• Flexible Terminplanung, die sich an Ihren Betriebsabläufen orientiert\n• Kosteneffiziente Lösung für die Schulung größerer Mitarbeitergruppen\n• Möglichkeit zur Kombination verschiedener Schulungsmodule in einem zusammenhängenden Programm\n\n🎓 Blended Learning Konzepte:\n• Optimale Kombination aus Präsenz- und Online-Elementen für maximale Lerneffizienz\n• Selbstlernphasen mit E-Learning-Modulen ergänzt durch intensive Präsenz-Workshops\n• Kontinuierliche Betreuung und Coaching über den gesamten Lernprozess\n• Flexible Anpassung an individuelle Lerngeschwindigkeiten und Verfügbarkeiten\n• Nachhaltige Verankerung des Gelernten durch verschiedene Lernkanäle und Wiederholungszyklen\n\n🔄 Modulare Lernpfade und Zertifizierungsprogramme:\n• Strukturierte Lernpfade, die systematisch von Grundlagen zu Expertenwissen führen\n• Möglichkeit zur individuellen Zusammenstellung von Modulen je nach Rolle und Verantwortungsbereich\n• Anerkannte Zertifizierungen, die die erworbenen Kompetenzen formal bestätigen\n• Kontinuierliche Weiterbildungsmöglichkeiten durch Aufbau- und Spezialisierungsmodule\n• Integration von Praxisprojekten und realen Implementierungsaufgaben in den Lernprozess"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass ISO 27001 Schulungen praxisrelevant und aktuell bleiben?',
        answer: "ADVISORI gewährleistet die Praxisrelevanz und Aktualität unserer ISO 27001 Schulungen durch einen systematischen Ansatz, der kontinuierliche Marktbeobachtung, praktische Implementierungserfahrung und innovative Lernmethoden kombiniert. Unsere Schulungen spiegeln stets die neuesten Entwicklungen und bewährten Praktiken wider.\n\n🔄 Kontinuierliche Inhaltsaktualisierung:\n• Regelmäßige Überarbeitung aller Schulungsmaterialien basierend auf neuesten Standards, Richtlinien und Best Practices\n• Integration aktueller regulatorischer Entwicklungen wie DORA, NIS2 und EU-Cybersecurity-Strategien\n• Berücksichtigung neuer Bedrohungslandschaften und Sicherheitstechnologien\n• Einarbeitung von Feedback aus aktuellen Implementierungsprojekten und Auditerfahrungen\n• Anpassung an veränderte Geschäftsumgebungen und technologische Entwicklungen\n\n👨‍💼 Trainer mit aktiver Praxiserfahrung:\n• Alle Trainer sind aktive Berater und Auditoren mit laufenden ISO 27001 Projekten\n• Direkter Transfer von Erfahrungen aus aktuellen Implementierungen in die Schulungsinhalte\n• Verwendung realer Fallstudien und Praxisbeispiele aus verschiedenen Branchen und Organisationsgrößen\n• Kontinuierliche Weiterbildung unserer Trainer durch Zertifizierungen und Fachkonferenzen\n• Regelmäßiger Austausch im Trainer-Team zur Qualitätssicherung und Wissenstransfer\n\n🏭 Branchenspezifische Anpassungen:\n• Entwicklung spezialisierter Schulungsmodule für verschiedene Branchen wie Finanzdienstleistungen, Gesundheitswesen oder Industrie\n• Integration branchenspezifischer Compliance-Anforderungen und Sicherheitsherausforderungen\n• Verwendung von Fallstudien und Beispielen aus dem jeweiligen Branchenkontext\n• Berücksichtigung spezifischer Risikoprofile und Bedrohungsszenarien\n• Anpassung der Schulungssprache und Beispiele an die Zielgruppe\n\n💡 Innovative Lernmethoden und Technologien:\n• Einsatz interaktiver Simulationen und Planspiele zur praktischen Anwendung des Gelernten\n• Verwendung von Virtual Reality und Augmented Reality für immersive Lernerfahrungen\n• Integration von Gamification-Elementen zur Steigerung der Lernmotivation\n• Nutzung adaptiver Lernsysteme, die sich an den individuellen Lernfortschritt anpassen\n• Entwicklung mobiler Lern-Apps für flexibles Lernen unterwegs\n\n🔍 Qualitätssicherung und Feedback-Integration:\n• Systematische Evaluation aller Schulungen durch Teilnehmer-Feedback und Lernerfolgskontrollen\n• Regelmäßige Überprüfung der Schulungseffektivität durch Follow-up-Befragungen\n• Kontinuierliche Verbesserung basierend auf Teilnehmer-Feedback und Lernergebnissen\n• Externe Qualitätsbewertungen durch unabhängige Bildungsexperten\n• Benchmarking mit internationalen Best Practices in der ISO 27001 Ausbildung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Voraussetzungen sollten Teilnehmer für verschiedene ISO 27001 Schulungsebenen mitbringen?',
        answer: "Die Voraussetzungen für ISO 27001 Schulungen variieren je nach Schulungsebene und Zielgruppe. ADVISORI hat ein gestuftes Konzept entwickelt, das es ermöglicht, Teilnehmer mit unterschiedlichen Vorkenntnissen optimal abzuholen und systematisch zu qualifizieren.\n\n📚 Foundation und Awareness Level:\n• Keine spezifischen Vorkenntnisse erforderlich - ideal für Einsteiger und alle Mitarbeiter\n• Grundlegendes Verständnis für IT-Systeme und Geschäftsprozesse ist hilfreich\n• Bereitschaft zur aktiven Teilnahme und Umsetzung von Sicherheitsmaßnahmen im Arbeitsalltag\n• Interesse an Informationssicherheit und deren Bedeutung für das Unternehmen\n• Keine formalen Qualifikationen notwendig, jedoch Offenheit für neue Konzepte und Arbeitsweisen\n\n🔧 Implementation und Practitioner Level:\n• Grundkenntnisse in Informationssicherheit oder verwandten Bereichen wie IT, Qualitätsmanagement oder Compliance\n• Berufserfahrung in projektorientierten Tätigkeiten oder Prozessmanagement\n• Verständnis für Managementsysteme und deren Funktionsweise\n• Analytische Denkweise und Problemlösungskompetenz\n• Kommunikationsfähigkeiten für die Zusammenarbeit mit verschiedenen Stakeholdern\n\n👨‍💼 Management und Executive Level:\n• Führungserfahrung und Verständnis für strategische Unternehmensführung\n• Grundkenntnisse in Risikomanagement und Corporate Governance\n• Erfahrung in der Implementierung von Managementsystemen oder Compliance-Programmen\n• Verständnis für regulatorische Anforderungen und deren Auswirkungen auf das Unternehmen\n• Bereitschaft zur Übernahme von Verantwortung für Informationssicherheit auf strategischer Ebene\n\n🔍 Auditor und Assessment Level:\n• Fundierte Kenntnisse in ISO 27001 oder vergleichbaren Managementstandards\n• Erfahrung in Audit-Tätigkeiten oder Qualitätsbewertungen\n• Analytische Fähigkeiten und Detailgenauigkeit\n• Kommunikationsstärke für die Durchführung von Interviews und Präsentation von Ergebnissen\n• Objektivität und Unabhängigkeit im Urteilsvermögen\n\n🎓 Spezialist und Expert Level:\n• Mehrjährige Erfahrung in der praktischen Anwendung von ISO 27001\n• Vertiefte Kenntnisse in spezifischen Bereichen wie Risikomanagement, Incident Response oder Business Continuity\n• Erfahrung in der Beratung oder Schulung anderer Personen\n• Kontinuierliche Weiterbildung und Interesse an neuesten Entwicklungen\n• Bereitschaft zur Übernahme von Mentoring-Rollen und Wissenstransfer\n\n🔄 Flexible Einstiegsmöglichkeiten:\n• Individuelle Vorkenntnisse-Assessments zur optimalen Einstufung\n• Möglichkeit zum Quereinstieg bei entsprechender Vorerfahrung\n• Brückenkurse für Teilnehmer mit Kenntnissen in verwandten Standards\n• Anpassung der Schulungsinhalte an die spezifischen Bedürfnisse der Teilnehmergruppe\n• Kontinuierliche Unterstützung und Coaching auch nach Abschluss der Schulung"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
