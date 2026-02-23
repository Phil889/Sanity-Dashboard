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
    console.log('Updating Business Continuity Management Certification page with FAQ batch 3...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-certification" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Prüfungsformate gibt es bei BCM-Zertifizierungen und wie bereite ich mich optimal darauf vor?',
        answer: "BCM-Zertifizierungsprüfungen verwenden verschiedene Formate, die unterschiedliche Kompetenzen und Wissensebenen bewerten. Eine gezielte Vorbereitung auf das jeweilige Prüfungsformat ist entscheidend für den Erfolg und erfordert spezifische Strategien und Techniken.\n\n📝 Multiple Choice Prüfungen:\n• Fokus auf Faktenwissen und Verständnis von BCM-Standards und Prinzipien\n• Strategisches Ausschlussverfahren bei unsicheren Antworten\n• Zeitmanagement durch gleichmäßige Verteilung auf alle Fragen\n• Wiederholung von Schlüsselkonzepten und Definitionen\n• Übung mit Mock-Exams zur Gewöhnung an Fragestellungen\n\n💼 Fallstudienbasierte Prüfungen:\n• Anwendung von BCM-Prinzipien auf realistische Geschäftsszenarien\n• Analytisches Denken und Problemlösungsfähigkeiten\n• Strukturierte Herangehensweise an komplexe Situationen\n• Integration verschiedener BCM-Disziplinen in ganzheitliche Lösungen\n• Praktische Erfahrung mit ähnlichen Situationen als Vorbereitung\n\n📊 Projektbasierte Assessments:\n• Entwicklung vollständiger BCM-Implementierungspläne\n• Dokumentation von Prozessen und Verfahren\n• Nachweis praktischer Anwendung in realen Organisationen\n• Langfristige Vorbereitung durch kontinuierliche Projektarbeit\n• Mentoring und Feedback von erfahrenen Praktikern\n\n🎯 Mündliche Prüfungen und Präsentationen:\n• Kommunikationsfähigkeiten und Stakeholder-Management\n• Verteidigung von BCM-Strategien und Entscheidungen\n• Interaktion mit Prüfern und Beantwortung spontaner Fragen\n• Präsentationstechniken und professionelle Darstellung\n• Übung durch Peer-Präsentationen und Feedback-Sessions"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie halte ich meine BCM-Zertifizierung aktuell und erfülle Continuing Professional Development Anforderungen?',
        answer: "Die Aufrechterhaltung von BCM-Zertifizierungen erfordert kontinuierliche professionelle Entwicklung und Engagement für lebenslanges Lernen. CPD-Programme stellen sicher, dass zertifizierte Professionals mit aktuellen Entwicklungen, Standards und Best Practices Schritt halten.\n\n📚 Strukturierte Weiterbildungsaktivitäten:\n• Teilnahme an akkreditierten Schulungen und Workshops\n• Besuch von Fachkonferenzen und Branchenveranstaltungen\n• Online-Kurse und Webinare zu aktuellen BCM-Themen\n• Universitäre Weiterbildungsprogramme und Zertifikatskurse\n• Selbststudium mit anerkannten Fachpublikationen\n\n🤝 Professionelle Aktivitäten und Engagement:\n• Mitgliedschaft in professionellen Verbänden und Arbeitsgruppen\n• Mentoring von Nachwuchskräften und Wissenstransfer\n• Ehrenamtliche Tätigkeiten in BCM-Organisationen\n• Peer-Review und Bewertung von BCM-Projekten\n• Networking und Erfahrungsaustausch mit Branchenkollegen\n\n✍️ Thought Leadership und Wissensaustausch:\n• Verfassen von Fachartikeln und Whitepapers\n• Sprechen auf Konferenzen und Fachveranstaltungen\n• Beitrag zu Branchenpublikationen und Standards\n• Entwicklung von Schulungsmaterialien und Curricula\n• Teilnahme an Forschungsprojekten und Studien\n\n📊 Dokumentation und Nachweis:\n• Systematische Erfassung aller CPD-Aktivitäten\n• Portfolio-Entwicklung für Recertification-Prozesse\n• Reflexion über Lernfortschritte und Kompetenzentwicklung\n• Regelmäßige Selbstbewertung und Zielsetzung\n• Compliance mit spezifischen Anbieter-Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen Simulationen und praktische Übungen in der BCM-Zertifizierungsvorbereitung?',
        answer: "Simulationen und praktische Übungen sind unverzichtbare Komponenten der BCM-Zertifizierungsvorbereitung, da sie theoretisches Wissen in anwendbare Fähigkeiten transformieren. Diese experientiellen Lernmethoden bereiten Kandidaten auf reale Herausforderungen vor und entwickeln kritische Entscheidungsfähigkeiten.\n\n🎭 Desktop-Übungen und Tabletop-Simulationen:\n• Sichere Lernumgebung für Krisenszenario-Training\n• Entwicklung von Entscheidungsfindungsprozessen unter Zeitdruck\n• Team-basierte Problemlösung und Kommunikation\n• Kostengünstige Alternative zu Live-Übungen\n• Wiederholbare Szenarien für kontinuierliches Lernen\n\n🚨 Live-Simulationen und Vollübungen:\n• Realistische Stressfaktoren und Zeitdruck\n• Integration verschiedener Stakeholder und Abteilungen\n• Test von Kommunikationssystemen und Verfahren\n• Identifikation von Schwachstellen in Plänen und Prozessen\n• Aufbau von Vertrauen und Kompetenz in Krisensituationen\n\n💻 Technologie-basierte Simulationen:\n• IT-Disaster Recovery und Cyber-Incident Response\n• Virtuelle Umgebungen für sichere Experimente\n• Skalierbare Szenarien für verschiedene Organisationsgrößen\n• Integration von modernen Tools und Technologien\n• Messbare Leistungsindikatoren und Feedback\n\n🔄 Kontinuierliche Verbesserung durch Übungen:\n• After Action Reviews und Lessons Learned\n• Iterative Verbesserung von Plänen und Verfahren\n• Entwicklung von Muscle Memory für Krisenreaktionen\n• Aufbau von organisationaler Resilienz-Kultur\n• Vorbereitung auf unvorhergesehene Szenarien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie kann ich BCM-Zertifizierungen strategisch für internationale Karrieremöglichkeiten nutzen?',
        answer: "BCM-Zertifizierungen öffnen Türen zu globalen Karrieremöglichkeiten, erfordern aber strategische Planung und kulturelle Sensibilität. Internationale Mobilität in der BCM-Branche bietet einzigartige Chancen für berufliche Entwicklung und Expertise-Aufbau.\n\n🌍 Globale Anerkennung und Standards:\n• ISO-basierte Zertifikate genießen weltweite Anerkennung\n• BCI-Qualifikationen sind besonders in Commonwealth-Ländern geschätzt\n• Regionale Spezialisierungen für spezifische Märkte\n• Verständnis kultureller Unterschiede in BCM-Ansätzen\n• Mehrsprachige Fähigkeiten als Wettbewerbsvorteil\n\n🏢 Internationale Organisationen und Märkte:\n• Multinationale Konzerne mit globalen BCM-Anforderungen\n• Internationale Beratungsunternehmen und Dienstleister\n• Entwicklungsorganisationen und NGOs\n• Regierungsbehörden und diplomatische Dienste\n• Emerging Markets mit wachsenden BCM-Anforderungen\n\n📈 Strategische Karriereplanung:\n• Aufbau internationaler Netzwerke und Kontakte\n• Erfahrung in verschiedenen regulatorischen Umgebungen\n• Kulturelle Kompetenz und Anpassungsfähigkeit\n• Spezialisierung auf globale Risiken und Trends\n• Entwicklung von Change Management Fähigkeiten\n\n🎯 Nischenmärkte und Spezialisierungen:\n• Klimarisiken und Nachhaltigkeits-BCM\n• Cyber-Resilienz und digitale Transformation\n• Supply Chain Resilience in globalen Netzwerken\n• Humanitarian Response und Disaster Management\n• Emerging Technologies und Innovation Management"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
