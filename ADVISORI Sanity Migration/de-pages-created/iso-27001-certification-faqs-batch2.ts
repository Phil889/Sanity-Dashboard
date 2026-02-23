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
    console.log('Updating ISO 27001 Certification page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-certification" not found')
    }
    
    // Create new FAQs for ISO 27001 certification implementation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie wählt man die richtige Zertifizierungsstelle für ISO 27001 aus und welche Kriterien sind entscheidend?',
        answer: "Die Auswahl der richtigen Zertifizierungsstelle ist ein kritischer Erfolgsfaktor für eine erfolgreiche ISO 27001 Zertifizierung. Eine strategische Entscheidung basiert auf umfassender Bewertung verschiedener Faktoren, die sowohl die Qualität des Zertifizierungsprozesses als auch den langfristigen Wert der Zertifizierung beeinflussen.\n\n🏛️ Akkreditierung und Anerkennung:\n• Überprüfung der Akkreditierung durch nationale Akkreditierungsstellen für internationale Anerkennung\n• Bestätigung der Berechtigung zur Ausstellung von ISO 27001 Zertifikaten in relevanten Märkten\n• Bewertung der internationalen Reputation und Glaubwürdigkeit der Zertifizierungsstelle\n• Prüfung der Mitgliedschaft in relevanten Branchenverbänden und Qualitätsnetzwerken\n• Sicherstellung der Kompatibilität mit spezifischen Markt- und Kundenanforderungen\n\n🎯 Branchenexpertise und Spezialisierung:\n• Bewertung der spezifischen Erfahrung in Ihrer Branche und Ihrem Geschäftsbereich\n• Prüfung der Kompetenz bei branchenspezifischen Sicherheitsanforderungen und Compliance-Themen\n• Analyse der Referenzen und Erfolgsgeschichten in vergleichbaren Organisationen\n• Bewertung des Verständnisses für branchenspezifische Risiken und Herausforderungen\n• Prüfung der Fähigkeit zur Beratung bei komplexen technischen und organisatorischen Fragestellungen\n\n👥 Auditor-Qualität und Kompetenz:\n• Bewertung der Qualifikationen und Zertifizierungen der Lead-Auditoren\n• Prüfung der praktischen Erfahrung und Expertise in relevanten Technologiebereichen\n• Analyse der Kommunikationsfähigkeiten und kulturellen Passung\n• Bewertung der Fähigkeit zur konstruktiven Beratung und Unterstützung während des Audit-Prozesses\n• Sicherstellung der Verfügbarkeit qualifizierter Auditoren für alle Projektphasen\n\n💼 Service-Qualität und Unterstützung:\n• Bewertung der Flexibilität bei Terminplanung und Audit-Durchführung\n• Prüfung der Qualität der Vor- und Nachbetreuung sowie des Kundenservice\n• Analyse der Transparenz bei Prozessen, Kosten und Zeitplänen\n• Bewertung der Unterstützung bei der Vorbereitung und Nachbereitung von Audits\n• Prüfung der Verfügbarkeit zusätzlicher Services wie Schulungen oder Beratung\n\n🔄 Langfristige Partnerschaft:\n• Bewertung der Stabilität und Zukunftsfähigkeit der Zertifizierungsstelle\n• Prüfung der Kontinuität bei Überwachungsaudits und Re-Zertifizierungen\n• Analyse der Entwicklungsfähigkeit bei sich ändernden Anforderungen und Standards\n• Bewertung der Möglichkeiten für Zertifizierungserweiterungen und zusätzliche Standards\n• Sicherstellung einer vertrauensvollen und konstruktiven langfristigen Zusammenarbeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt die Risikoanalyse bei der ISO 27001 Zertifizierung und wie wird sie optimal durchgeführt?',
        answer: "Die Risikoanalyse ist das Herzstück jedes ISO 27001 konformen Informationssicherheits-Managementsystems und bildet die Grundlage für alle Sicherheitsmaßnahmen und Kontrollen. Eine systematische und umfassende Risikoanalyse ist entscheidend für den Zertifizierungserfolg und die operative Wirksamkeit des ISMS.\n\n🎯 Strategische Bedeutung der Risikoanalyse:\n• Identifikation und Bewertung aller relevanten Informationssicherheitsrisiken für die Organisation\n• Schaffung einer objektiven Basis für Sicherheitsinvestitionen und Ressourcenallokation\n• Etablierung einer risikobasierten Herangehensweise an Informationssicherheit\n• Aufbau eines systematischen Verständnisses der Bedrohungslandschaft und Schwachstellen\n• Entwicklung einer fundierten Grundlage für strategische Sicherheitsentscheidungen\n\n📊 Systematische Durchführung der Risikoidentifikation:\n• Umfassende Inventarisierung aller Informationswerte und kritischen Geschäftsprozesse\n• Systematische Analyse der Bedrohungslandschaft unter Berücksichtigung interner und externer Faktoren\n• Identifikation technischer, organisatorischer und physischer Schwachstellen\n• Bewertung der Auswirkungen potenzieller Sicherheitsvorfälle auf Geschäftsziele\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n\n🔍 Methodische Risikobewertung:\n• Anwendung strukturierter Bewertungsmethoden für Eintrittswahrscheinlichkeit und Schadensausmaß\n• Entwicklung konsistenter Bewertungskriterien und Risikoskalen\n• Berücksichtigung qualitativer und quantitativer Bewertungsansätze\n• Integration von Expertenwissen und historischen Erfahrungen\n• Dokumentation nachvollziehbarer Bewertungsgrundlagen und Annahmen\n\n⚖️ Risikobehandlung und Maßnahmenplanung:\n• Entwicklung angemessener Behandlungsstrategien für identifizierte Risiken\n• Auswahl wirksamer Sicherheitskontrollen basierend auf Kosten-Nutzen-Analysen\n• Priorisierung von Maßnahmen nach Risikohöhe und Umsetzbarkeit\n• Integration von Sicherheitskontrollen in bestehende Geschäftsprozesse\n• Aufbau eines ausgewogenen Portfolios aus präventiven, detektiven und reaktiven Maßnahmen\n\n🔄 Kontinuierliche Überwachung und Aktualisierung:\n• Etablierung regelmäßiger Risikobewertungszyklen zur Berücksichtigung sich ändernder Bedrohungen\n• Implementierung von Monitoring-Systemen zur frühzeitigen Erkennung neuer Risiken\n• Integration von Incident-Erfahrungen und Lessons Learned in die Risikoanalyse\n• Anpassung der Risikobehandlung an veränderte Geschäftsanforderungen und Technologien\n• Sicherstellung der kontinuierlichen Verbesserung der Risikomanagement-Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie bereitet man sich optimal auf die verschiedenen Audit-Phasen vor und was erwarten Auditoren?',
        answer: "Eine optimale Audit-Vorbereitung ist entscheidend für den Zertifizierungserfolg und erfordert systematische Planung, umfassende Dokumentation und professionelle Durchführung. Auditoren bewerten nicht nur die Compliance, sondern auch die Reife und Wirksamkeit des implementierten ISMS.\n\n📋 Stage 1 Audit - Dokumentationsvorbereitung:\n• Vollständige und aktuelle ISMS-Dokumentation mit allen erforderlichen Richtlinien und Verfahren\n• Strukturierte Präsentation der Dokumente in logischer und nachvollziehbarer Reihenfolge\n• Nachweis der Vollständigkeit durch systematische Abdeckung aller ISO 27001 Anforderungen\n• Bereitstellung von Evidenzen für die praktische Anwendung dokumentierter Verfahren\n• Vorbereitung klarer Erläuterungen zu Dokumentenstrukturen und Zusammenhängen\n\n🏢 Stage 2 Audit - Implementierungsnachweis:\n• Demonstration der gelebten Sicherheitsprozesse durch konkrete Beispiele und Nachweise\n• Bereitstellung von Audit-Trails und Protokollen zur Dokumentation der kontinuierlichen Anwendung\n• Vorbereitung von Mitarbeitern auf Interviews und praktische Demonstrationen\n• Aufbau einer strukturierten Evidenz-Sammlung für alle implementierten Kontrollen\n• Sicherstellung der Verfügbarkeit aller relevanten Systeme und Dokumentationen\n\n👥 Mitarbeitervorbereitung und Schulung:\n• Systematische Schulung aller Audit-Teilnehmer zu ihren spezifischen Rollen und Verantwortlichkeiten\n• Training zu typischen Audit-Fragen und angemessenen Antwortstrategien\n• Entwicklung eines gemeinsamen Verständnisses der ISMS-Ziele und Implementierung\n• Aufbau von Selbstvertrauen durch Simulation von Audit-Situationen\n• Etablierung klarer Kommunikationsrichtlinien für die Interaktion mit Auditoren\n\n🔍 Auditor-Erwartungen verstehen:\n• Nachweis der kontinuierlichen Verbesserung und Weiterentwicklung des ISMS\n• Demonstration der Integration von Informationssicherheit in Geschäftsprozesse\n• Evidenz für die Wirksamkeit implementierter Kontrollen durch Messungen und Bewertungen\n• Aufzeigen einer reifen Sicherheitskultur und des Management-Commitments\n• Bereitstellung transparenter und ehrlicher Antworten auf alle Audit-Fragen\n\n📊 Praktische Audit-Durchführung:\n• Strukturierte Präsentation von Informationen und Nachweisen in logischer Reihenfolge\n• Proaktive Bereitstellung relevanter Dokumentationen und Evidenzen\n• Offene und konstruktive Kommunikation bei identifizierten Verbesserungspotenzialen\n• Professionelle Behandlung von Audit-Findings mit konkreten Verbesserungsmaßnahmen\n• Aufbau einer vertrauensvollen Arbeitsbeziehung mit dem Audit-Team für optimale Ergebnisse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Kosten sind mit einer ISO 27001 Zertifizierung verbunden und wie kann man sie optimieren?',
        answer: "Die Kosten einer ISO 27001 Zertifizierung variieren erheblich je nach Organisationsgröße, Komplexität und gewähltem Ansatz. Eine strategische Kostenplanung und -optimierung ermöglicht es, die Zertifizierung kosteneffizient zu erreichen und gleichzeitig maximalen Geschäftswert zu generieren.\n\n💰 Direkte Zertifizierungskosten:\n• Gebühren der Zertifizierungsstelle für Stage 1 und Stage 2 Audits sowie jährliche Überwachungsaudits\n• Kosten für Re-Zertifizierungsaudits alle drei Jahre zur Aufrechterhaltung der Zertifizierung\n• Zusätzliche Gebühren für Korrekturmaßnahmen-Verifikation bei Major Non-Conformities\n• Reise- und Aufenthaltskosten für Auditoren bei Vor-Ort-Audits\n• Zertifikatsgebühren und administrative Kosten der Zertifizierungsstelle\n\n🏗️ Implementierungskosten:\n• Interne Personalkosten für ISMS-Aufbau, Dokumentation und Projektmanagement\n• Externe Beratungskosten für Gap-Analyse, Implementierungsunterstützung und Audit-Vorbereitung\n• Technische Investitionen in Sicherheitstechnologien, Tools und Infrastruktur\n• Schulungs- und Weiterbildungskosten für Mitarbeiter und Führungskräfte\n• Kosten für Dokumentenmanagement-Systeme und Compliance-Software\n\n📚 Schulungs- und Kompetenzaufbau:\n• Zertifizierungskosten für interne ISO 27001 Lead Implementer oder Lead Auditor\n• Fachspezifische Schulungen zu Informationssicherheit und Risikomanagement\n• Awareness-Programme und Sicherheitsschulungen für alle Mitarbeiter\n• Kontinuierliche Weiterbildung zur Aufrechterhaltung der Kompetenz\n• Kosten für externe Expertise bei spezialisierten Sicherheitsthemen\n\n⚡ Kostenoptimierungsstrategien:\n• Strategische Nutzung interner Ressourcen und Kompetenzen zur Reduzierung externer Beratungskosten\n• Phasenweise Implementierung zur Verteilung der Investitionen über längere Zeiträume\n• Integration der ISO 27001 Implementierung in bestehende Compliance-Projekte\n• Auswahl kosteneffizienter Zertifizierungsstellen ohne Kompromisse bei der Qualität\n• Nutzung von Synergien mit anderen Managementsystemen und Zertifizierungen\n\n📈 Return on Investment maximieren:\n• Fokussierung auf geschäftswertorientierte Sicherheitsmaßnahmen mit messbarem Nutzen\n• Integration der Zertifizierung in Geschäftsentwicklung und Kundenakquisition\n• Nutzung der Zertifizierung für Wettbewerbsvorteile und Marktdifferenzierung\n• Aufbau nachhaltiger Sicherheitskompetenzen für langfristige Wertschöpfung\n• Entwicklung einer robusten Sicherheitsorganisation, die über die Zertifizierung hinaus Mehrwert schafft"
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
