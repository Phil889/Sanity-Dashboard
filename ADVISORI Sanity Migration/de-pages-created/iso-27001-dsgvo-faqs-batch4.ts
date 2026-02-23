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
    console.log('Updating ISO 27001 DSGVO page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-dsgvo" not found')
    }
    
    // Create new FAQs for ISO 27001 & DSGVO Audit and certification coordination
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie können Audits für ISO 27001 und DSGVO koordiniert und optimiert werden?',
        answer: "Die Koordination von Audits für ISO 27001 und DSGVO schafft erhebliche Effizienzgewinne und reduziert den Aufwand für Organisationen. Eine strategische Herangehensweise ermöglicht es, beide Standards gleichzeitig zu prüfen und dabei Synergien optimal zu nutzen.\n\n📅 Integrierte Audit-Planung:\n• Koordinierte Jahresplanung für beide Standards mit abgestimmten Audit-Zyklen\n• Gemeinsame Vorbereitung und Dokumentensammlung für beide Compliance-Bereiche\n• Synchronisierte Surveillance-Audits und Management-Reviews\n• Optimierte Ressourcenallokation für interne und externe Audit-Aktivitäten\n• Einheitliche Audit-Kalender mit Berücksichtigung beider Standards\n\n🔍 Harmonisierte Audit-Methodik:\n• Entwicklung integrierter Audit-Checklisten, die beide Standards abdecken\n• Gemeinsame Audit-Kriterien und Bewertungsmaßstäbe\n• Einheitliche Sampling-Methoden für Dokumenten- und Prozessprüfungen\n• Koordinierte Interviews mit Schlüsselpersonal für beide Bereiche\n• Integrierte Evidenz-Sammlung und Dokumentation\n\n👥 Auditor-Qualifikation und Teams:\n• Aufbau von Audit-Teams mit Dual-Expertise in beiden Standards\n• Weiterbildung bestehender Auditoren in beiden Compliance-Bereichen\n• Koordination zwischen verschiedenen Audit-Dienstleistern\n• Entwicklung interner Audit-Kompetenzen für beide Standards\n• Regelmäßige Schulungen zu Änderungen in beiden Frameworks\n\n📊 Integrierte Audit-Durchführung:\n• Gemeinsame Eröffnungs- und Abschlussbesprechungen für beide Standards\n• Koordinierte Prozessbegehungen und Systemprüfungen\n• Einheitliche Dokumentation von Audit-Feststellungen\n• Harmonisierte Bewertung von Nonkonformitäten und Verbesserungspotenzialen\n• Integrierte Berichterstattung mit Dual-Compliance-Fokus\n\n🔄 Koordinierte Nachverfolgung:\n• Einheitliche Korrekturmaßnahmen-Pläne für beide Standards\n• Gemeinsame Wirksamkeitsprüfung implementierter Maßnahmen\n• Koordinierte Follow-up-Audits und Überwachungsaktivitäten\n• Integrierte Lessons Learned Prozesse\n• Harmonisierte Kontinuierliche Verbesserung\n\n📈 Effizienzoptimierung:\n• Reduzierung der Audit-Tage durch koordinierte Prüfungen\n• Minimierung von Doppelarbeiten und redundanten Aktivitäten\n• Optimierte Vorbereitung durch gemeinsame Dokumentation\n• Effiziente Ressourcennutzung für beide Standards\n• Kosteneinsparungen durch integrierte Audit-Ansätze\n\n⚖️ Compliance-Sicherstellung:\n• Vollständige Abdeckung aller Anforderungen beider Standards\n• Koordinierte Zertifizierungszyklen und Überwachungsaudits\n• Einheitliche Compliance-Nachweise für beide Bereiche\n• Harmonisierte Berichterstattung an Stakeholder\n• Vorbereitung auf regulatorische Prüfungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Schulungs- und Awareness-Programme sind für integrierte ISO 27001 und DSGVO Systeme erforderlich?',
        answer: "Effektive Schulungs- und Awareness-Programme für integrierte ISO 27001 und DSGVO Systeme schaffen das notwendige Bewusstsein und die Kompetenzen für erfolgreiche Dual-Compliance. Diese Programme müssen zielgruppenspezifisch gestaltet und kontinuierlich aktualisiert werden.\n\n🎯 Zielgruppenspezifische Schulungskonzepte:\n• Management-Schulungen zu strategischen Aspekten beider Standards\n• Fachbereichs-spezifische Trainings für IT, HR, Vertrieb und andere Bereiche\n• Technische Tiefenschulungen für IT-Administratoren und Sicherheitsexperten\n• Grundlagen-Awareness für alle Mitarbeiter\n• Spezialisierte Schulungen für Datenschutzbeauftragte und CISO\n\n📚 Integrierte Curriculum-Entwicklung:\n• Harmonisierte Lernziele für beide Standards\n• Gemeinsame Grundlagen zu Informationssicherheit und Datenschutz\n• Spezifische Module zu Überschneidungen und Synergien\n• Praktische Fallstudien und Szenarien aus beiden Bereichen\n• Regelmäßige Aktualisierung basierend auf neuen Entwicklungen\n\n🔧 Praktische Trainingskomponenten:\n• Hands-on Workshops zu technischen Kontrollmaßnahmen\n• Simulation von Incident Response Szenarien\n• Praktische Übungen zu Datenschutz-Folgenabschätzungen\n• Role-Playing für Betroffenenanfragen und Audit-Situationen\n• Tabletop-Übungen für integrierte Compliance-Szenarien\n\n💻 Moderne Lernmethoden:\n• E-Learning-Plattformen mit interaktiven Modulen\n• Microlearning-Ansätze für kontinuierliche Weiterbildung\n• Gamification-Elemente zur Steigerung der Motivation\n• Virtual Reality Trainings für komplexe Szenarien\n• Mobile Learning Apps für flexibles Lernen\n\n📊 Awareness-Kampagnen:\n• Regelmäßige Kommunikation zu aktuellen Bedrohungen und Entwicklungen\n• Newsletter und Intranet-Artikel zu beiden Standards\n• Poster und visuelle Hilfsmittel für wichtige Konzepte\n• Lunch-and-Learn Sessions zu spezifischen Themen\n• Awareness-Events und Sicherheitstage\n\n🔍 Kompetenzentwicklung und Zertifizierung:\n• Aufbau interner Trainer mit Dual-Expertise\n• Externe Zertifizierungen für Schlüsselpersonal\n• Mentoring-Programme für neue Mitarbeiter\n• Kontinuierliche Weiterbildung für Compliance-Teams\n• Karriereentwicklungspfade in beiden Bereichen\n\n📈 Erfolgsmessung und Optimierung:\n• Regelmäßige Wissenstests und Kompetenzbewertungen\n• Feedback-Sammlung zu Schulungseffektivität\n• Messung von Verhaltensänderungen und Compliance-Verbesserungen\n• Anpassung der Programme basierend auf Audit-Ergebnissen\n• Kontinuierliche Verbesserung der Trainingsmethoden\n\n🌐 Kulturelle Integration:\n• Aufbau einer integrierten Compliance-Kultur\n• Förderung von Verantwortungsbewusstsein für beide Standards\n• Integration in Onboarding-Prozesse für neue Mitarbeiter\n• Regelmäßige Auffrischung und Vertiefung\n• Anerkennung und Belohnung für vorbildliches Verhalten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie können Lieferanten und Drittparteien in ein integriertes ISO 27001 und DSGVO System eingebunden werden?',
        answer: "Die Einbindung von Lieferanten und Drittparteien in ein integriertes ISO 27001 und DSGVO System ist entscheidend für eine ganzheitliche Compliance-Strategie. Diese Integration erfordert systematische Ansätze für Auswahl, Bewertung und kontinuierliche Überwachung aller externen Partner.\n\n🔍 Integrierte Lieferantenbewertung:\n• Dual-Compliance-Kriterien in Auswahlprozessen für neue Lieferanten\n• Bewertung der Informationssicherheits- und Datenschutz-Reifegrade\n• Due Diligence Prozesse, die beide Standards berücksichtigen\n• Risikobewertung basierend auf Art und Umfang der Datenverarbeitung\n• Regelmäßige Neubewertung bestehender Lieferantenbeziehungen\n\n📋 Harmonisierte Vertragsgestaltung:\n• Einheitliche Sicherheits- und Datenschutzklauseln in allen Verträgen\n• Spezifische Anforderungen für beide Standards in Service Level Agreements\n• Klare Definition von Verantwortlichkeiten und Haftungen\n• Audit-Rechte und Compliance-Überwachungsklauseln\n• Incident Response und Breach Notification Verpflichtungen\n\n🛡️ Technische und organisatorische Anforderungen:\n• Mindeststandards für Verschlüsselung und Zugangskontrollen\n• Anforderungen an Backup und Disaster Recovery Verfahren\n• Vorgaben für Mitarbeiterschulungen und Background Checks\n• Standards für physische und logische Sicherheitsmaßnahmen\n• Compliance mit Privacy by Design Prinzipien\n\n📊 Kontinuierliche Überwachung:\n• Regelmäßige Compliance-Assessments und Audits\n• Monitoring von Sicherheitsvorfällen und Datenschutzverletzungen\n• Bewertung von Zertifizierungen und externen Audit-Berichten\n• Tracking von Compliance-KPIs und Performance-Metriken\n• Eskalationsprozesse bei Compliance-Abweichungen\n\n🤝 Kollaborative Compliance-Programme:\n• Gemeinsame Schulungs- und Awareness-Initiativen\n• Koordinierte Incident Response Übungen\n• Best Practice Sharing und Lessons Learned Austausch\n• Gemeinsame Entwicklung von Sicherheitsstandards\n• Regelmäßige Compliance-Meetings und Reviews\n\n🔄 Lifecycle-Management:\n• Onboarding-Prozesse mit Compliance-Integration\n• Regelmäßige Performance-Reviews und Verbesserungsmaßnahmen\n• Managed Exit-Strategien mit sicherer Datenrückgabe oder -vernichtung\n• Kontinuierliche Anpassung an neue regulatorische Anforderungen\n• Dokumentation aller Compliance-Aktivitäten\n\n⚖️ Rechtliche und regulatorische Koordination:\n• Compliance mit internationalen Datentransfer-Bestimmungen\n• Angemessenheitsbeschlüsse und Standard Contractual Clauses\n• Koordination mit lokalen Datenschutzbehörden\n• Vorbereitung auf regulatorische Prüfungen\n• Dokumentation für Compliance-Nachweise\n\n🌐 Globale Lieferantennetzwerke:\n• Harmonisierte Standards für internationale Lieferanten\n• Berücksichtigung lokaler Datenschutzgesetze und Sicherheitsanforderungen\n• Koordination zwischen verschiedenen Rechtsräumen\n• Einheitliche Governance für globale Lieferantenbeziehungen\n• Skalierbare Compliance-Prozesse für verschiedene Lieferantentypen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Metriken und KPIs sind für die Überwachung integrierter ISO 27001 und DSGVO Systeme geeignet?',
        answer: "Die Entwicklung geeigneter Metriken und KPIs für integrierte ISO 27001 und DSGVO Systeme ermöglicht eine datengetriebene Überwachung der Compliance-Performance und kontinuierliche Verbesserung. Diese Kennzahlen müssen beide Standards abdecken und actionable Insights liefern.\n\n📊 Strategische Compliance-KPIs:\n• Gesamte Compliance-Rate für beide Standards kombiniert\n• Zeit bis zur Behebung von Compliance-Abweichungen\n• Anzahl und Schweregrad von Audit-Findings für beide Bereiche\n• Erfolgsrate bei externen Audits und Zertifizierungen\n• ROI der integrierten Compliance-Investitionen\n\n🔒 Sicherheits- und Datenschutz-Metriken:\n• Anzahl und Art von Sicherheitsvorfällen und Datenschutzverletzungen\n• Mean Time to Detection und Mean Time to Response\n• Erfolgsrate bei Penetration Tests und Vulnerability Assessments\n• Anzahl erfolgreich abgewehrter Cyber-Angriffe\n• Compliance-Rate bei Datenschutz-Folgenabschätzungen\n\n👥 Mitarbeiter- und Awareness-KPIs:\n• Teilnahmerate an Schulungs- und Awareness-Programmen\n• Erfolgsrate bei Compliance-Tests und Zertifizierungen\n• Anzahl gemeldeter Sicherheitsvorfälle durch Mitarbeiter\n• Phishing-Simulation Erfolgsraten\n• Mitarbeiterzufriedenheit mit Compliance-Programmen\n\n🔄 Prozess-Performance-Indikatoren:\n• Durchschnittliche Zeit für Incident Response und Breach Notification\n• Effizienz von Change Management Prozessen\n• Qualität und Vollständigkeit der Dokumentation\n• Automatisierungsgrad von Compliance-Prozessen\n• Anzahl und Wirksamkeit implementierter Verbesserungsmaßnahmen\n\n🤝 Lieferanten- und Drittpartei-Metriken:\n• Compliance-Rate bei Lieferanten-Assessments\n• Anzahl und Schweregrad von Lieferanten-Incidents\n• Erfolgsrate bei Lieferanten-Audits\n• Zeit bis zur Behebung von Lieferanten-Compliance-Issues\n• Qualität der Lieferanten-Compliance-Dokumentation\n\n💰 Kosten- und Effizienz-KPIs:\n• Gesamtkosten der integrierten Compliance pro Jahr\n• Kosteneinsparungen durch integrierte Ansätze\n• Effizienzgewinne bei Audit- und Assessment-Aktivitäten\n• Return on Investment für Compliance-Technologien\n• Produktivitätssteigerungen durch automatisierte Prozesse\n\n📈 Kontinuierliche Verbesserungs-Metriken:\n• Anzahl implementierter Verbesserungsvorschläge\n• Reduzierung von Compliance-Gaps über Zeit\n• Verbesserung der Audit-Ergebnisse Jahr über Jahr\n• Steigerung der Mitarbeiter-Compliance-Kompetenz\n• Innovation in Compliance-Technologien und -Prozessen\n\n🎯 Risiko- und Impact-Indikatoren:\n• Residualrisiko-Level für beide Standards\n• Potenzielle finanzielle Auswirkungen von Compliance-Verstößen\n• Reputationsrisiko-Bewertungen\n• Business Impact von Compliance-Aktivitäten\n• Vorhersagegenauigkeit von Risikobewertungen\n\n📋 Reporting und Dashboard-Metriken:\n• Aktualität und Vollständigkeit von Compliance-Reports\n• Nutzung von Self-Service-Analytics durch Stakeholder\n• Qualität der Management-Dashboards\n• Automatisierungsgrad der Berichterstattung\n• Stakeholder-Zufriedenheit mit Compliance-Reporting"
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
