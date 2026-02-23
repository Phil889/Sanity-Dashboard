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
    console.log('Updating ISO 27001 Schulung page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-schulung" not found')
    }
    
    // Create new FAQs for ISO 27001 auditor and assessment training
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie qualifiziert ADVISORI Teilnehmer zu kompetenten ISO 27001 Lead Auditoren?',
        answer: "ADVISORI bietet eine umfassende Lead Auditor Ausbildung, die weit über die reine Zertifizierungsvorbereitung hinausgeht. Unser Programm entwickelt sowohl die technischen Audit-Kompetenzen als auch die praktischen Fähigkeiten, die für erfolgreiche ISO 27001 Audits erforderlich sind.\n\n🎓 Strukturierte Auditor-Ausbildung:\n• Systematische Vermittlung der ISO 19011 Audit-Prinzipien und deren Anwendung auf ISO 27001\n• Tiefgreifende Schulung in Audit-Methoden, Techniken und Best Practices\n• Entwicklung von Kompetenzen in Audit-Planung, Durchführung und Nachbereitung\n• Training in der Anwendung verschiedener Audit-Ansätze und Bewertungsmethoden\n• Vermittlung von Leadership-Fähigkeiten für die Führung von Audit-Teams\n\n🔍 Praktische Audit-Erfahrung:\n• Intensive Rollenspiele und Simulationen realer Audit-Situationen\n• Praktische Übungen zur Durchführung von Interviews und Dokumentenprüfungen\n• Training in der Bewertung von ISMS-Wirksamkeit und Compliance\n• Entwicklung von Fähigkeiten zur Identifikation und Bewertung von Nonkonformitäten\n• Übungen zur professionellen Kommunikation von Audit-Ergebnissen\n\n📋 Audit-Dokumentation und Berichtswesen:\n• Schulung in der Erstellung professioneller Audit-Berichte und Dokumentation\n• Training in der Entwicklung von Audit-Checklisten und Bewertungskriterien\n• Vermittlung von Techniken zur strukturierten Erfassung und Bewertung von Audit-Evidenz\n• Entwicklung von Kompetenzen in der Nachverfolgung von Korrekturmaßnahmen\n• Training in der Kommunikation mit verschiedenen Stakeholder-Gruppen\n\n💼 Business-orientierte Audit-Kompetenz:\n• Entwicklung von Verständnis für Geschäftsprozesse und deren Sicherheitsanforderungen\n• Training in der Bewertung von Risikomanagement-Ansätzen und deren Wirksamkeit\n• Schulung in der Beurteilung von Management-Commitment und Governance-Strukturen\n• Vermittlung von Kompetenzen zur Bewertung der strategischen Ausrichtung von ISMS\n• Entwicklung von Fähigkeiten zur Identifikation von Verbesserungspotenzialen\n\n🌟 Zertifizierungsvorbereitung und Akkreditierung:\n• Intensive Vorbereitung auf international anerkannte Lead Auditor Zertifizierungen\n• Training in den Anforderungen verschiedener Zertifizierungsstellen und Akkreditierungsstandards\n• Simulation von Zertifizierungsprüfungen und praktischen Bewertungen\n• Unterstützung bei der Auswahl der geeigneten Zertifizierungsstelle\n• Kontinuierliche Begleitung auch nach der Zertifizierung für Weiterentwicklung und Rezertifizierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche speziellen Kompetenzen entwickeln interne Auditoren in ADVISORI Schulungen?',
        answer: "ADVISORI entwickelt interne Auditoren zu kompetenten und unabhängigen Bewertern ihres eigenen ISMS. Unser Training fokussiert auf die besonderen Herausforderungen und Chancen interner Audits und schafft die Grundlage für eine effektive interne Überwachung.\n\n🏢 Interne Audit-Expertise:\n• Verständnis für die Rolle und Verantwortlichkeiten interner Auditoren im ISMS-Kontext\n• Entwicklung von Unabhängigkeit und Objektivität trotz organisatorischer Zugehörigkeit\n• Training in der Balance zwischen konstruktiver Kritik und organisatorischer Loyalität\n• Schulung in der Kommunikation mit Kollegen und Vorgesetzten in Audit-Situationen\n• Vermittlung von Techniken zur Wahrung der Audit-Integrität in vertrauten Umgebungen\n\n📊 Systematische Audit-Planung und Durchführung:\n• Entwicklung von Kompetenzen in der strategischen Audit-Planung und Jahresplanung\n• Training in der risikobasierten Auswahl von Audit-Bereichen und Schwerpunkten\n• Schulung in der effizienten Vorbereitung und Durchführung interner Audits\n• Vermittlung von Methoden zur strukturierten Erfassung und Bewertung von Audit-Evidenz\n• Training in der Anwendung verschiedener Audit-Techniken je nach Audit-Gegenstand\n\n🔍 Bewertung und Analyse von ISMS-Komponenten:\n• Schulung in der Bewertung der Wirksamkeit von Sicherheitskontrollen und Prozessen\n• Training in der Analyse von Risikomanagement-Prozessen und deren Angemessenheit\n• Entwicklung von Kompetenzen zur Bewertung von Management-Commitment und Governance\n• Vermittlung von Techniken zur Identifikation von Verbesserungspotenzialen\n• Schulung in der Bewertung der kontinuierlichen Verbesserung des ISMS\n\n💬 Kommunikation und Stakeholder-Management:\n• Training in der professionellen Kommunikation von Audit-Ergebnissen an verschiedene Zielgruppen\n• Entwicklung von Fähigkeiten zur konstruktiven Präsentation von Nonkonformitäten\n• Schulung in der Moderation von Audit-Nachbesprechungen und Follow-up-Aktivitäten\n• Vermittlung von Techniken zur Motivation von Mitarbeitern für Verbesserungsmaßnahmen\n• Training in der Zusammenarbeit mit externen Auditoren und Zertifizierungsstellen\n\n🔄 Kontinuierliche Verbesserung und Entwicklung:\n• Schulung in der Identifikation und Verfolgung von Trends und wiederkehrenden Problemen\n• Training in der Entwicklung von Empfehlungen für strategische ISMS-Verbesserungen\n• Vermittlung von Kompetenzen zur Unterstützung des Management Reviews\n• Entwicklung von Fähigkeiten zur Bewertung der Audit-Programm-Wirksamkeit\n• Training in der kontinuierlichen Weiterentwicklung der eigenen Audit-Kompetenzen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie bereitet ADVISORI auf die praktischen Herausforderungen von ISO 27001 Audits vor?',
        answer: "ADVISORI bereitet Auditoren systematisch auf die vielfältigen praktischen Herausforderungen vor, die in realen ISO 27001 Audit-Situationen auftreten können. Unser Training basiert auf umfangreicher Praxiserfahrung und vermittelt bewährte Lösungsansätze.\n\n🎭 Realistische Audit-Simulationen:\n• Durchführung komplexer Audit-Szenarien mit verschiedenen Organisationstypen und Branchen\n• Simulation schwieriger Audit-Situationen wie unkooperative Auditees oder unvollständige Dokumentation\n• Training in der Bewältigung von Zeitdruck und unerwarteten Herausforderungen während Audits\n• Übungen zur Anpassung von Audit-Plänen an veränderte Umstände\n• Rollenspiele zur Entwicklung von Flexibilität und Problemlösungskompetenz\n\n🔧 Technische Audit-Herausforderungen:\n• Training in der Bewertung komplexer IT-Infrastrukturen und Cloud-Umgebungen\n• Schulung in der Audit-Durchführung in hybriden und Remote-Arbeitsumgebungen\n• Vermittlung von Kompetenzen zur Bewertung neuer Technologien und deren Sicherheitsimplikationen\n• Training in der Anwendung von Computer-Assisted Audit Techniques\n• Entwicklung von Fähigkeiten zur Bewertung von Automatisierung und KI-Systemen\n\n👥 Zwischenmenschliche und kommunikative Herausforderungen:\n• Training in der Bewältigung von Widerstand und defensivem Verhalten von Auditees\n• Schulung in der Kommunikation mit verschiedenen Hierarchieebenen und Kulturen\n• Entwicklung von Deeskalationstechniken für konfliktreiche Audit-Situationen\n• Vermittlung von Techniken zur Motivation und Einbindung von Auditees\n• Training in der professionellen Kommunikation schwieriger Audit-Ergebnisse\n\n📋 Dokumentations- und Bewertungsherausforderungen:\n• Schulung in der Bewertung unvollständiger oder unstrukturierter Dokumentation\n• Training in der Identifikation von Dokumentations-Gaps und deren Bewertung\n• Entwicklung von Kompetenzen zur Bewertung der Angemessenheit von Sicherheitsmaßnahmen\n• Vermittlung von Techniken zur objektiven Bewertung subjektiver Audit-Evidenz\n• Training in der Unterscheidung zwischen Minor und Major Nonkonformitäten\n\n⚖️ Compliance und regulatorische Komplexität:\n• Schulung in der Integration verschiedener Compliance-Anforderungen in ISO 27001 Audits\n• Training in der Bewertung von DORA, NIS2 und anderen regulatorischen Überschneidungen\n• Entwicklung von Kompetenzen zur Bewertung branchenspezifischer Anforderungen\n• Vermittlung von Techniken zur Bewältigung sich ändernder regulatorischer Landschaften\n• Training in der Kommunikation komplexer Compliance-Sachverhalte an verschiedene Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Zertifizierungen und Anerkennungen können Teilnehmer durch ADVISORI Schulungen erlangen?',
        answer: "ADVISORI bietet Zugang zu einer breiten Palette international anerkannter Zertifizierungen und Qualifikationen im ISO 27001 Bereich. Unsere Schulungen bereiten optimal auf diese Zertifizierungen vor und unterstützen Teilnehmer bei der Auswahl der für ihre Karriereziele geeigneten Qualifikationen.\n\n🏆 International anerkannte Lead Auditor Zertifizierungen:\n• IRCA zertifizierte ISO 27001 Lead Auditor Qualifikation mit weltweiter Anerkennung\n• PECB ISO 27001 Lead Auditor Zertifizierung für umfassende Audit-Kompetenz\n• BSI ISO 27001 Lead Auditor Qualifikation mit hohem Marktansehen\n• TÜV ISO 27001 Lead Auditor Zertifizierung für deutsche und europäische Märkte\n• Vorbereitung auf Zertifizierungen verschiedener akkreditierter Anbieter je nach Präferenz\n\n📜 Spezialisierte Practitioner Zertifizierungen:\n• ISO 27001 Foundation Zertifikate für Einsteiger und Awareness-Level\n• ISO 27001 Implementation Zertifizierungen für ISMS-Verantwortliche\n• ISO 27001 Internal Auditor Qualifikationen für interne Audit-Funktionen\n• Risk Management Spezialisierungen im Kontext von ISO 27001\n• Business Continuity und Incident Response Zertifizierungen\n\n🎓 ADVISORI eigene Qualifikationsnachweise:\n• ADVISORI Certified ISO 27001 Specialist für umfassende Fachkompetenz\n• ADVISORI Certified ISMS Consultant für Beratungsqualifikationen\n• ADVISORI Certified Trainer Qualifikationen für Multiplikatoren\n• Branchenspezifische Spezialisierungszertifikate\n• Kontinuierliche Weiterbildungsnachweise und CPD Credits\n\n🌍 Internationale und branchenspezifische Anerkennungen:\n• CPE Credits für verschiedene professionelle Organisationen\n• ISACA, ISC2 und andere Fachverbände anerkannte Weiterbildungspunkte\n• EU-weite Anerkennung durch akkreditierte Bildungsanbieter\n• Branchenspezifische Qualifikationen für Finanzdienstleistungen, Gesundheitswesen und Industrie\n• Integration mit anderen Managementsystem-Standards und Zertifizierungen\n\n🔄 Kontinuierliche Qualifikationsentwicklung:\n• Unterstützung bei der Aufrechterhaltung und Erneuerung von Zertifizierungen\n• Zugang zu kontinuierlichen Weiterbildungsprogrammen und Updates\n• Mentoring und Coaching für Karriereentwicklung im Informationssicherheitsbereich\n• Networking-Möglichkeiten mit anderen zertifizierten Fachkräften\n• Unterstützung bei der Entwicklung spezialisierter Expertise und Nischenkompetenz"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
