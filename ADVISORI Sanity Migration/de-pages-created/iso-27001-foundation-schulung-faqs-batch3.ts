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
    console.log('Updating ISO 27001 Foundation Schulung page with FAQ batch 3...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-foundation-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-foundation-schulung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie wird der Lernerfolg in Foundation Schulungen gemessen und bewertet?',
        answer: "Die Messung und Bewertung des Lernerfolgs in ISO 27001 Foundation Schulungen erfordert einen mehrdimensionalen Ansatz, der über traditionelle Prüfungsformate hinausgeht und sowohl quantitative als auch qualitative Aspekte des Lernens erfasst. Eine effektive Bewertung stellt sicher, dass die Lernziele erreicht werden und nachhaltiger Wissenstransfer stattfindet.\n\n📊 Mehrstufige Bewertungsansätze:\n• Kombination verschiedener Bewertungsmethoden zur umfassenden Erfassung des Lernerfolgs\n• Pre- und Post-Assessments zur Messung des Wissenszuwachses und der Kompetenzentwicklung\n• Kontinuierliche Bewertung während der Schulung durch Beobachtung und Feedback\n• Praktische Demonstrationen und Anwendungsübungen zur Überprüfung der Handlungskompetenz\n• Langfristige Follow-up-Bewertungen zur Messung der nachhaltigen Anwendung im Arbeitsalltag\n\n🎯 Kompetenzbasierte Bewertungskriterien:\n• Bewertung anhand klar definierter Lernziele und Kompetenzstandards\n• Messung des Verständnisses für ISO 27001 Grundprinzipien und deren praktische Anwendung\n• Bewertung der Fähigkeit zur Risikoidentifikation und angemessenen Reaktion\n• Überprüfung der Kommunikationsfähigkeiten in sicherheitsrelevanten Kontexten\n• Assessment der Problemlösungskompetenz bei typischen Sicherheitsherausforderungen\n\n💡 Innovative Bewertungsformate:\n• Portfolio-basierte Bewertung mit Sammlung praktischer Arbeiten und Reflexionen\n• Peer-Assessment und gegenseitige Bewertung zur Förderung des kollaborativen Lernens\n• Selbstbewertung und Reflexion zur Entwicklung von Selbsteinschätzungsfähigkeiten\n• Szenario-basierte Bewertungen mit realistischen Fallstudien und Problemstellungen\n• Gamification-Elemente zur motivierenden und engaging Gestaltung der Bewertung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Zertifizierungsmöglichkeiten gibt es nach einer Foundation Schulung?',
        answer: "Nach einer ISO 27001 Foundation Schulung eröffnen sich verschiedene Zertifizierungswege, die eine formale Anerkennung der erworbenen Kompetenzen bieten und als Sprungbrett für weiterführende Spezialisierungen dienen. Diese Zertifizierungen validieren das Grundlagenwissen und schaffen Vertrauen bei Arbeitgebern und Kunden.\n\n🏆 Anerkannte Foundation Zertifizierungen:\n• ISO 27001 Foundation Zertifizierung durch akkreditierte Zertifizierungsstellen\n• PECB ISO 27001 Foundation Certificate als international anerkannte Qualifikation\n• EXIN Information Security Foundation basierend auf ISO 27001 Prinzipien\n• ISACA Cybersecurity Fundamentals Certificate mit ISO 27001 Komponenten\n• Herstellerspezifische Zertifizierungen von Schulungsanbietern und Beratungsunternehmen\n\n📈 Weiterführende Zertifizierungspfade:\n• ISO 27001 Lead Implementer für die praktische Umsetzung von ISMS\n• ISO 27001 Lead Auditor für die Durchführung von Audits und Bewertungen\n• ISO 27001 Risk Manager für spezialisierte Risikomanagement-Kompetenzen\n• Certified Information Security Manager für Führungsrollen in der Informationssicherheit\n• Certified Information Systems Auditor für Audit- und Compliance-Spezialisierung\n\n🎓 Vorbereitung und Prüfungsformate:\n• Strukturierte Prüfungsvorbereitung mit Übungstests und Beispielprüfungen\n• Multiple-Choice-Prüfungen zur Überprüfung des theoretischen Verständnisses\n• Praktische Assessments und Fallstudien-basierte Bewertungen\n• Online-Prüfungen für flexible Termingestaltung und ortsunabhängige Durchführung\n• Kontinuierliche Weiterbildungsanforderungen zur Aufrechterhaltung der Zertifizierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie können Foundation Schulungen an branchenspezifische Anforderungen angepasst werden?',
        answer: "Die Anpassung von ISO 27001 Foundation Schulungen an branchenspezifische Anforderungen ist entscheidend für die Relevanz und Wirksamkeit des Lernens. Jede Branche hat einzigartige Herausforderungen, regulatorische Anforderungen und Bedrohungslandschaften, die in der Schulungsgestaltung berücksichtigt werden müssen.\n\n🏥 Gesundheitswesen und Medizintechnik:\n• Integration von HIPAA, GDPR und medizinspezifischen Datenschutzanforderungen\n• Fokus auf Patientendatenschutz und medizinische Geräte-Sicherheit\n• Berücksichtigung von FDA-Anforderungen für Medizinprodukte\n• Spezielle Bedrohungsszenarien wie Ransomware-Angriffe auf Krankenhäuser\n• Notfallmanagement und Business Continuity in kritischen Gesundheitssituationen\n\n🏦 Finanzdienstleistungen und Banking:\n• Einbindung von PCI DSS, Basel III und anderen Finanzregulierungen\n• Fokus auf Zahlungsverkehrssicherheit und Fraud Prevention\n• Anti-Geldwäsche und Know Your Customer Anforderungen\n• Hochfrequenzhandel und algorithmische Trading-Sicherheit\n• Regulatorische Berichterstattung und Compliance-Dokumentation\n\n🏭 Produktion und Industrie:\n• Integration von IEC 62443 für industrielle Cybersicherheit\n• Operational Technology und SCADA-Systeme Sicherheit\n• Supply Chain Security und Lieferantenmanagement\n• Intellectual Property Protection und Trade Secret Management\n• Safety-Security Integration in kritischen Infrastrukturen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielt kontinuierliche Weiterbildung nach der Foundation Schulung?',
        answer: "Kontinuierliche Weiterbildung nach einer ISO 27001 Foundation Schulung ist essentiell für die Aufrechterhaltung und Weiterentwicklung der Sicherheitskompetenzen. Die sich schnell verändernde Bedrohungslandschaft und evolvierende Standards erfordern einen lebenslangen Lernansatz.\n\n🔄 Aktualität und Relevanz:\n• Regelmäßige Updates zu neuen Bedrohungen und Angriffsvektoren\n• Anpassung an Änderungen in ISO 27001 und verwandten Standards\n• Integration neuer Technologien und deren Sicherheitsimplikationen\n• Berücksichtigung sich ändernder regulatorischer Anforderungen\n• Aufbau von Expertise in emerging Technologies wie Cloud, IoT und KI\n\n📚 Strukturierte Lernpfade:\n• Modulare Aufbaukurse für spezifische Fachbereiche und Rollen\n• Spezialisierungsprogramme für Risk Management, Audit oder Implementation\n• Leadership-Programme für Sicherheitsverantwortliche und Manager\n• Technische Vertiefungen für IT-Sicherheitsspezialisten\n• Branchenspezifische Weiterbildungen für sektorale Anforderungen\n\n🌐 Flexible Lernformate:\n• Webinare und Online-Kurse für kontinuierliche Wissensaktualisierung\n• Konferenzen und Fachveranstaltungen für Networking und Wissensaustausch\n• Mentoring-Programme und Peer-Learning-Gruppen\n• Selbststudium mit aktuellen Publikationen und Forschungsergebnissen\n• Praktische Projekte und Hands-on-Erfahrungen in realen Umgebungen"
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
