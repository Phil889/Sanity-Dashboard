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
    console.log('Updating ISO 27001 Zertifizierung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-zertifizierung" not found')
    }
    
    // Create new FAQs for ISO 27001 certification industry-specific and advanced topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche branchenspezifischen Besonderheiten müssen bei der ISO 27001 Zertifizierung beachtet werden?',
        answer: "Branchenspezifische Besonderheiten bei der ISO 27001 Zertifizierung erfordern eine maßgeschneiderte Herangehensweise, die sowohl die universellen Standard-Anforderungen als auch die spezifischen regulatorischen und operativen Herausforderungen der jeweiligen Industrie berücksichtigt. Eine branchenorientierte Zertifizierungsstrategie maximiert Relevanz und Wirksamkeit.\n\n🏥 Gesundheitswesen und Medizintechnik:\n• Integration von HIPAA, GDPR und medizingerätespezifischen Regulierungen in die ISMS-Architektur\n• Besondere Berücksichtigung von Patientendatenschutz und medizinischer Vertraulichkeit\n• Spezifische Risikobewertung für medizinische Geräte und Telemedizin-Anwendungen\n• Compliance mit FDA-Anforderungen für Cybersecurity in medizinischen Geräten\n• Aufbau robuster Business Continuity für kritische Gesundheitsdienste\n\n🏦 Finanzdienstleistungen und Banking:\n• Harmonisierung mit PCI DSS, Basel III und anderen Finanzregulierungen\n• Spezielle Kontrollen für Zahlungsverkehr, Kreditrisiken und Marktdatenintegrität\n• Berücksichtigung von Anti-Geldwäsche und Know-Your-Customer Anforderungen\n• Integration von Operational Risk Management und Cyber Resilience\n• Compliance mit DORA und anderen EU-Finanzregulierungen\n\n🏭 Produktion und Industrie:\n• Integration von OT-Sicherheit und Industrial Control Systems in das ISMS\n• Berücksichtigung von Supply Chain Security und Lieferantenrisiken\n• Spezifische Kontrollen für Produktionsdaten und Intellectual Property\n• Compliance mit branchenspezifischen Standards wie TISAX oder IEC 62443\n• Aufbau resiliente Produktionssysteme gegen Cyber-Bedrohungen\n\n☁️ Cloud-Services und IT-Dienstleister:\n• Integration von SOC 2, ISO 27017 und Cloud-spezifischen Sicherheitsanforderungen\n• Multi-Tenant-Sicherheit und Datentrennungskonzepte\n• Compliance mit verschiedenen nationalen Datenschutzgesetzen\n• Aufbau transparenter Sicherheitsnachweise für Kunden\n• Kontinuierliche Anpassung an evolvierende Cloud-Bedrohungen\n\n🛡️ Kritische Infrastrukturen:\n• Integration von NIS2, KRITIS und sektorspezifischen Sicherheitsanforderungen\n• Besondere Berücksichtigung von nationaler Sicherheit und Verfügbarkeitsanforderungen\n• Aufbau robuster Incident Response für gesellschaftskritische Services\n• Compliance mit staatlichen Meldepflichten und Sicherheitsvorgaben\n• Koordination mit Behörden und Sicherheitsorganisationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie bereitet man sich auf Überwachungsaudits und Re-Zertifizierungen vor?',
        answer: "Die Vorbereitung auf Überwachungsaudits und Re-Zertifizierungen erfordert eine kontinuierliche und systematische Herangehensweise, die über die ursprüngliche Zertifizierung hinausgeht. Eine proaktive Audit-Bereitschaft demonstriert ISMS-Reife und sichert langfristige Zertifizierungserhaltung.\n\n📅 Kontinuierliche Audit-Bereitschaft:\n• Etablierung permanenter Audit-Readiness durch kontinuierliche Compliance-Überwachung\n• Aufbau systematischer Evidenz-Sammlung für alle ISMS-Aktivitäten und Verbesserungen\n• Regelmäßige interne Pre-Audits zur Identifikation potenzieller Schwachstellen\n• Kontinuierliche Aktualisierung der Dokumentation und Nachweisführung\n• Proaktive Kommunikation mit der Zertifizierungsstelle über Änderungen und Entwicklungen\n\n🔄 Systematische Verbesserungsdemonstration:\n• Dokumentation aller ISMS-Verbesserungen und deren Wirksamkeitsnachweis seit dem letzten Audit\n• Aufbau aussagekräftiger Metriken und KPIs zur Demonstration kontinuierlicher Entwicklung\n• Systematische Behandlung aller vorherigen Audit-Findings und deren nachhaltige Lösung\n• Nachweis der kontinuierlichen Anpassung an veränderte Bedrohungslandschaften\n• Demonstration der Integration neuer Technologien und Geschäftsprozesse in das ISMS\n\n📊 Erweiterte Compliance-Demonstration:\n• Nachweis der Wirksamkeit implementierter Sicherheitskontrollen durch messbare Ergebnisse\n• Demonstration der kontinuierlichen Risikobewertung und Anpassung von Sicherheitsmaßnahmen\n• Aufbau robuster Incident-Response-Nachweise und Lessons Learned Integration\n• Systematische Dokumentation von Management-Reviews und strategischen ISMS-Entscheidungen\n• Nachweis der kontinuierlichen Kompetenzentwicklung und Schulungsaktivitäten\n\n🎯 Strategische Audit-Vorbereitung:\n• Entwicklung einer mehrjährigen Audit-Strategie für optimale Zertifizierungserhaltung\n• Aufbau strategischer Beziehungen zur Zertifizierungsstelle für konstruktive Zusammenarbeit\n• Kontinuierliche Bewertung und Optimierung der Audit-Performance\n• Integration von Audit-Feedback in die strategische ISMS-Entwicklung\n• Vorbereitung auf erweiterte Audit-Scopes und zusätzliche Zertifizierungsanforderungen\n\n🚀 Innovation und Zukunftsorientierung:\n• Demonstration der Integration innovativer Sicherheitstechnologien und Methoden\n• Nachweis der Anpassungsfähigkeit an neue regulatorische Anforderungen\n• Aufbau zukunftsorientierter Sicherheitsarchitekturen für evolvierende Bedrohungen\n• Kontinuierliche Benchmarking gegen Industrie-Best-Practices\n• Positionierung als Vorreiter in Informationssicherheit und Compliance-Excellence"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Rolle spielt Change Management bei der ISO 27001 Zertifizierung?',
        answer: "Change Management ist ein kritischer Erfolgsfaktor für die ISO 27001 Zertifizierung, da es die menschliche Dimension der ISMS-Implementierung adressiert und nachhaltige Verhaltensänderungen ermöglicht. Ein strategisches Change Management transformiert Widerstand in Engagement und schafft eine positive Sicherheitskultur.\n\n👥 Stakeholder-Engagement und Kommunikation:\n• Entwicklung einer umfassenden Stakeholder-Map mit gezielten Kommunikationsstrategien für verschiedene Zielgruppen\n• Aufbau überzeugender Business Cases, die den Mehrwert der ISO 27001 Zertifizierung für alle Beteiligten verdeutlichen\n• Etablierung regelmäßiger Kommunikationsformate für Transparenz und kontinuierliches Engagement\n• Schaffung von Erfolgsgeschichten und Quick Wins zur Motivation und Glaubwürdigkeit\n• Proaktive Adressierung von Bedenken und Widerständen durch offenen Dialog\n\n🎯 Kulturwandel und Bewusstseinsbildung:\n• Systematische Entwicklung einer positiven Sicherheitskultur als Fundament für nachhaltige Compliance\n• Integration von Informationssicherheit in die Unternehmenswerte und täglichen Arbeitsabläufe\n• Aufbau von Sicherheitsbotschaftern und Champions in allen Organisationsbereichen\n• Entwicklung ansprechender Schulungs- und Sensibilisierungsprogramme\n• Etablierung von Belohnungs- und Anerkennungssystemen für sicherheitsbewusstes Verhalten\n\n📚 Kompetenzentwicklung und Befähigung:\n• Systematische Identifikation von Kompetenzlücken und Entwicklung gezielter Schulungsprogramme\n• Aufbau interner ISMS-Expertise für nachhaltige Eigenständigkeit\n• Entwicklung rollenspezifischer Trainings für verschiedene Verantwortlichkeiten\n• Etablierung kontinuierlicher Lernpfade für evolvierende Sicherheitsanforderungen\n• Schaffung von Mentoring- und Wissenstransfer-Programmen\n\n🔄 Prozessintegration und Workflow-Optimierung:\n• Nahtlose Integration von ISMS-Anforderungen in bestehende Geschäftsprozesse\n• Minimierung von Zusatzaufwand durch intelligente Prozessgestaltung\n• Aufbau benutzerfreundlicher Tools und Systeme für einfache Compliance\n• Entwicklung automatisierter Workflows für wiederkehrende Sicherheitsaufgaben\n• Kontinuierliche Optimierung basierend auf Nutzerfeedback und Erfahrungen\n\n⚡ Widerstandsmanagement und Konfliktlösung:\n• Proaktive Identifikation und Analyse von Widerstandsquellen und deren Ursachen\n• Entwicklung gezielter Interventionsstrategien für verschiedene Widerstandstypen\n• Aufbau von Vertrauen durch Transparenz und partizipative Entscheidungsfindung\n• Etablierung effektiver Konfliktlösungsmechanismen für Change-bezogene Herausforderungen\n• Kontinuierliche Anpassung der Change-Strategie basierend auf Feedback und Erfahrungen\n\n🚀 Nachhaltige Verankerung und kontinuierliche Entwicklung:\n• Aufbau robuster Governance-Strukturen für langfristige Change-Begleitung\n• Integration von Change Management in die kontinuierliche ISMS-Verbesserung\n• Entwicklung von Metriken und KPIs für Change-Erfolg und Kulturentwicklung\n• Etablierung von Feedback-Schleifen für kontinuierliche Anpassung und Optimierung\n• Schaffung einer adaptiven Organisation, die Change als Normalzustand akzeptiert"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie kann man den ROI einer ISO 27001 Zertifizierung messen und maximieren?',
        answer: "Die Messung und Maximierung des ROI einer ISO 27001 Zertifizierung erfordert einen systematischen Ansatz, der sowohl quantifizierbare als auch qualitative Vorteile berücksichtigt. Eine strategische ROI-Optimierung transformiert die Zertifizierung von einem Kostenfaktor zu einem Wertschöpfungsinstrument.\n\n💰 Quantifizierbare finanzielle Vorteile:\n• Reduzierung von Cyber-Versicherungsprämien durch nachweislich verbesserte Sicherheitslage\n• Vermeidung von Kosten durch Sicherheitsvorfälle, Datenschutzverletzungen und regulatorische Strafen\n• Effizienzsteigerungen durch optimierte Sicherheitsprozesse und Automatisierung\n• Kosteneinsparungen durch konsolidierte Compliance-Aktivitäten und integrierte Managementsysteme\n• Reduzierte Audit- und Compliance-Kosten durch etablierte Strukturen und Prozesse\n\n📈 Geschäftswachstum und Marktchancen:\n• Erschließung neuer Märkte und Kunden durch erfüllte Sicherheitsanforderungen\n• Erhöhte Erfolgsraten bei öffentlichen Ausschreibungen und B2B-Verträgen\n• Premium-Pricing für sicherheitszertifizierte Services und Produkte\n• Beschleunigte Vertragsabschlüsse durch reduzierte Due-Diligence-Zyklen\n• Strategische Partnerschaften mit anderen zertifizierten Organisationen\n\n🛡️ Risikoreduktion und Wertsicherung:\n• Quantifizierung der Risikoreduktion durch verbesserte Sicherheitskontrollen\n• Schutz von Intellectual Property und kritischen Geschäftsinformationen\n• Erhöhte Geschäftskontinuität und reduzierte Ausfallzeiten\n• Verbesserte Reputation und Markenwertsicherung\n• Reduzierte rechtliche und regulatorische Risiken\n\n📊 Operative Exzellenz und Effizienzgewinne:\n• Optimierung von IT-Prozessen und Sicherheitsoperationen\n• Verbesserte Incident-Response-Zeiten und Problemlösungseffizienz\n• Reduzierte Komplexität durch standardisierte Sicherheitsverfahren\n• Erhöhte Mitarbeiterproduktivität durch klare Sicherheitsrichtlinien\n• Automatisierung wiederkehrender Compliance-Aufgaben\n\n🎯 Strategische Wertschöpfung:\n• Aufbau einer robusten Basis für digitale Transformation und Innovation\n• Entwicklung von Sicherheit als Wettbewerbsvorteil und Differenzierungsmerkmal\n• Schaffung von Grundlagen für weitere Zertifizierungen und Compliance-Erweiterungen\n• Aufbau interner Kompetenzen für nachhaltige Wettbewerbsfähigkeit\n• Positionierung als vertrauenswürdiger Partner im digitalen Ökosystem\n\n📈 ROI-Messung und Optimierung:\n• Entwicklung umfassender KPIs und Metriken für alle ROI-Dimensionen\n• Etablierung von Baseline-Messungen vor der Zertifizierung für Vergleichbarkeit\n• Kontinuierliche Überwachung und Bewertung der Wertschöpfung\n• Regelmäßige ROI-Reviews und Optimierung der Zertifizierungsstrategie\n• Integration von ROI-Erkenntnissen in die strategische Unternehmensplanung"
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
