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
    console.log('Updating ISO 27001 DSGVO page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-dsgvo" not found')
    }
    
    // Create new FAQs for ISO 27001 & DSGVO Implementation strategies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Implementierungsstrategie ist für die Integration von ISO 27001 und DSGVO am effektivsten?',
        answer: "Eine erfolgreiche Implementierungsstrategie für die Integration von ISO 27001 und DSGVO erfordert einen strukturierten, phasenorientierten Ansatz, der die Synergien beider Standards optimal nutzt und gleichzeitig die spezifischen Anforderungen jedes Frameworks berücksichtigt. Die Strategie sollte sowohl technische als auch organisatorische Aspekte umfassen.\n\n📋 Strategische Planungsphase:\n• Umfassende Gap-Analyse zur Identifikation bestehender Compliance-Lücken in beiden Bereichen\n• Entwicklung einer integrierten Compliance-Roadmap mit klaren Meilensteinen und Abhängigkeiten\n• Stakeholder-Mapping und Aufbau eines interdisziplinären Projektteams\n• Definition gemeinsamer Ziele und KPIs für beide Standards\n• Erstellung eines Business Cases mit ROI-Betrachtung für die integrierte Lösung\n\n🏗️ Phasenweise Implementierung:\n• Phase eins fokussiert auf gemeinsame Grundlagen wie Governance-Strukturen und Risikomanagement\n• Phase zwei adressiert technische Maßnahmen und Systemintegration\n• Phase drei umfasst Prozessharmonisierung und Dokumentationserstellung\n• Phase vier beinhaltet Schulungen, Testing und Pilotierung\n• Phase fünf führt zur vollständigen Implementierung und Zertifizierungsvorbereitung\n\n🎯 Synergie-orientierter Ansatz:\n• Identifikation und Priorisierung von Überschneidungsbereichen zwischen beiden Standards\n• Entwicklung integrierter Kontrollmaßnahmen, die beide Frameworks gleichzeitig erfüllen\n• Harmonisierung von Risikobewertungsmethoden und Compliance-Prozessen\n• Aufbau einheitlicher Governance-Strukturen für beide Bereiche\n• Koordinierte Change Management Aktivitäten zur Minimierung von Widerständen\n\n🔧 Technologie-Integration:\n• Auswahl und Implementierung von Tools, die beide Standards unterstützen\n• Entwicklung integrierter Dashboards und Reporting-Systeme\n• Automatisierung gemeinsamer Compliance-Prozesse\n• Integration von Privacy by Design in alle technischen Implementierungen\n• Aufbau einheitlicher Monitoring- und Alerting-Systeme\n\n👥 Organisatorische Transformation:\n• Aufbau integrierter Teams mit Expertise in beiden Bereichen\n• Entwicklung neuer Rollen und Verantwortlichkeiten für die integrierte Compliance\n• Implementierung einheitlicher Schulungs- und Awareness-Programme\n• Etablierung gemeinsamer Kommunikations- und Eskalationswege\n• Schaffung einer Kultur der integrierten Compliance\n\n📊 Kontinuierliche Optimierung:\n• Regelmäßige Review-Zyklen zur Bewertung der Integrationserfolge\n• Anpassung der Strategie basierend auf Lessons Learned und neuen Anforderungen\n• Kontinuierliche Verbesserung der integrierten Prozesse und Systeme\n• Vorbereitung auf zukünftige regulatorische Entwicklungen\n• Aufbau einer lernenden Organisation für nachhaltige Compliance-Exzellenz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie können Datenschutz-Folgenabschätzungen in das ISO 27001 Risikomanagement integriert werden?',
        answer: "Die Integration von Datenschutz-Folgenabschätzungen in das ISO 27001 Risikomanagement schafft ein ganzheitliches Risikobewertungssystem, das sowohl Informationssicherheits- als auch Datenschutzrisiken systematisch erfasst und behandelt. Diese Harmonisierung optimiert Ressourcen und gewährleistet konsistente Risikobehandlung.\n\n🔍 Methodische Integration:\n• DSFA wird als spezieller Teilprozess der ISO 27001 Risikoanalyse etabliert\n• Entwicklung einheitlicher Bewertungskriterien für beide Risikotypen\n• Harmonisierte Risikoskalen und Toleranzgrenzen für Informationssicherheit und Datenschutz\n• Gemeinsame Risikoinventare mit vollständiger Abdeckung aller Assets und Verarbeitungstätigkeiten\n• Integrierte Dokumentationsstrukturen für beide Bewertungstypen\n\n📊 Prozessharmonisierung:\n• Einheitliche Trigger-Kriterien für DSFA und Sicherheitsrisikoanalyse\n• Koordinierte Durchführung beider Bewertungstypen bei neuen Projekten oder Änderungen\n• Gemeinsame Review-Zyklen und Aktualisierungsprozesse\n• Integrierte Eskalations- und Entscheidungswege\n• Harmonisierte Berichterstattung an Management und Stakeholder\n\n🎯 Asset-orientierte Betrachtung:\n• Vollständige Erfassung aller Informationsassets einschließlich personenbezogener Daten\n• Klassifikation von Assets nach Sicherheits- und Datenschutzkriterien\n• Berücksichtigung von Datenflüssen und Verarbeitungsprozessen in der Risikoanalyse\n• Integration von Systemlandschaften und Datenarchitekturen\n• Regelmäßige Aktualisierung des Asset-Inventars für beide Standards\n\n⚡ Bedrohungs- und Schwachstellenanalyse:\n• Umfassende Bedrohungslandschaft für beide Bereiche\n• Berücksichtigung spezifischer Datenschutzbedrohungen wie Profiling oder Diskriminierung\n• Integration von Cyber-Bedrohungen und Datenschutzverletzungsszenarien\n• Bewertung technischer und organisatorischer Schwachstellen\n• Kontinuierliche Threat Intelligence für beide Bereiche\n\n🛡️ Integrierte Risikobewertung:\n• Einheitliche Bewertungsmethodik für Eintrittswahrscheinlichkeit und Auswirkungen\n• Berücksichtigung rechtlicher Konsequenzen und Sanktionsrisiken\n• Integration von Reputationsrisiken und Geschäftsauswirkungen\n• Priorisierung basierend auf kombinierter Risikobewertung\n• Regelmäßige Neubewertung bei Änderungen in beiden Bereichen\n\n🔄 Risikobehhandlung und Kontrollen:\n• Gemeinsame Risikobehhandlungsstrategien für beide Standards\n• Koordinierte Implementierung von Kontrollmaßnahmen\n• Berücksichtigung von Privacy by Design in allen Sicherheitsmaßnahmen\n• Einheitliche Überwachung und Messung der Risikobehhandlung\n• Kontinuierliche Verbesserung basierend auf beiden Standards\n\n📈 Monitoring und Reporting:\n• Integrierte Risiko-Dashboards für beide Bereiche\n• Regelmäßige Review-Zyklen mit einheitlicher Methodik\n• Koordinierte Berichterstattung an Management und Aufsichtsbehörden\n• Kontinuierliche Anpassung an neue Bedrohungen und Anforderungen\n• Lessons Learned Integration aus beiden Compliance-Bereichen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Privacy by Design bei der Integration von ISO 27001 und DSGVO?',
        answer: "Privacy by Design spielt eine zentrale Rolle bei der Integration von ISO 27001 und DSGVO, da es die Brücke zwischen proaktivem Datenschutz und systematischem Informationssicherheitsmanagement bildet. Diese Designphilosophie ermöglicht es, beide Standards von Grund auf harmonisch zu implementieren und dabei höchste Schutzstandards zu gewährleisten.\n\n🏗️ Fundamentale Designprinzipien:\n• Proaktiver Ansatz statt reaktiver Maßnahmen in beiden Standards\n• Datenschutz und Sicherheit als Standardeinstellung in allen Systemen und Prozessen\n• Vollständige Funktionalität ohne Kompromisse bei Schutz oder Sicherheit\n• End-to-End-Sicherheit über den gesamten Datenlebenszyklus\n• Transparenz und Benutzerfreundlichkeit als Designkriterien\n\n🔧 Technische Implementierung:\n• Datenschutzfreundliche Systemarchitekturen als integraler Bestandteil des ISMS\n• Eingebaute Verschlüsselung und Pseudonymisierung in allen relevanten Systemen\n• Automatisierte Datenschutzkontrollen und Compliance-Überwachung\n• Minimierung der Datenverarbeitung durch Design und Konfiguration\n• Sichere Standardkonfigurationen für alle Systeme und Anwendungen\n\n📋 Prozessintegration:\n• Privacy by Design Bewertungen als Teil der ISO 27001 Risikoanalyse\n• Integrierte Entwicklungs- und Implementierungsprozesse für beide Standards\n• Automatisierte Compliance-Checks in allen Entwicklungs- und Änderungsprozessen\n• Einheitliche Governance-Strukturen für Datenschutz und Informationssicherheit\n• Koordinierte Incident Response Prozesse für beide Bereiche\n\n🎯 Strategische Ausrichtung:\n• Datenschutz und Sicherheit als Geschäftsenablement statt Hindernis\n• Integration in alle Geschäftsprozesse und strategischen Entscheidungen\n• Aufbau von Wettbewerbsvorteilen durch vertrauensvolle Datenverarbeitung\n• Vorbereitung auf zukünftige regulatorische Entwicklungen\n• Schaffung einer Kultur der verantwortungsvollen Datenverarbeitung\n\n🔍 Risikomanagement-Integration:\n• Privacy by Design Prinzipien in allen Risikobewertungen und Kontrollmaßnahmen\n• Proaktive Identifikation und Behandlung von Datenschutz- und Sicherheitsrisiken\n• Kontinuierliche Überwachung und Verbesserung der Schutzmaßnahmen\n• Integration von Privacy Impact Assessments in die Risikoanalyse\n• Harmonisierte Behandlung von Datenschutz- und Sicherheitsvorfällen\n\n📊 Governance und Compliance:\n• Einheitliche Verantwortlichkeiten für Datenschutz und Informationssicherheit\n• Integrierte Audit- und Review-Prozesse für beide Standards\n• Koordinierte Berichterstattung und Compliance-Überwachung\n• Gemeinsame Schulungs- und Awareness-Programme\n• Kontinuierliche Verbesserung durch integrierte Managementsysteme\n\n🚀 Innovation und Zukunftsfähigkeit:\n• Aufbau einer soliden Basis für digitale Transformation und Innovation\n• Vorbereitung auf neue Technologien wie KI und IoT\n• Schaffung vertrauensvoller Datenökosysteme\n• Etablierung als vertrauenswürdiger Partner in der digitalen Wirtschaft\n• Kontinuierliche Anpassung an sich ändernde Anforderungen und Technologien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie gestaltet sich die Dokumentation für ein integriertes ISO 27001 und DSGVO System?',
        answer: "Die Dokumentation für ein integriertes ISO 27001 und DSGVO System erfordert eine strategische Herangehensweise, die Redundanzen vermeidet, Synergien nutzt und gleichzeitig die spezifischen Anforderungen beider Standards vollständig erfüllt. Eine harmonisierte Dokumentationsstruktur schafft Effizienz und gewährleistet konsistente Compliance.\n\n📚 Integrierte Dokumentationsarchitektur:\n• Einheitliche Dokumentenhierarchie mit klarer Zuordnung zu beiden Standards\n• Gemeinsame Richtlinien und Verfahren, die beide Frameworks abdecken\n• Integrierte Verfahrensverzeichnisse mit Dual-Compliance-Mapping\n• Harmonisierte Vorlagen und Templates für beide Bereiche\n• Zentrale Dokumentenverwaltung mit Versionskontrolle und Zugriffsberechtigung\n\n🎯 Strategische Dokumentenplanung:\n• Mapping-Matrix zur Identifikation von Überschneidungen und Synergien\n• Entwicklung integrierter Richtlinien für gemeinsame Themenbereiche\n• Separate Dokumentation nur für spezifische Anforderungen einzelner Standards\n• Klare Referenzierung zwischen verwandten Dokumenten beider Standards\n• Regelmäßige Review-Zyklen für Aktualität und Konsistenz\n\n📋 Kernkomponenten der integrierten Dokumentation:\n• Integrierte Informationssicherheits- und Datenschutzrichtlinie als Grundlagendokument\n• Harmonisierte Risikomanagement-Verfahren für beide Bereiche\n• Einheitliche Incident Response Prozeduren für Sicherheits- und Datenschutzvorfälle\n• Gemeinsame Schulungs- und Awareness-Dokumentation\n• Integrierte Audit- und Review-Verfahren\n\n🔧 Technische Dokumentationsaspekte:\n• Systemdokumentation mit Fokus auf Sicherheits- und Datenschutzkontrollen\n• Integrierte Netzwerk- und Systemarchitekturdokumentation\n• Gemeinsame Backup- und Disaster Recovery Dokumentation\n• Harmonisierte Zugangskontrollen und Berechtigungskonzepte\n• Einheitliche Monitoring- und Logging-Dokumentation\n\n📊 Compliance-Nachweisdokumentation:\n• Integrierte Compliance-Matrix für beide Standards\n• Gemeinsame Audit-Trails und Evidenz-Sammlungen\n• Harmonisierte Berichterstattung an Management und Aufsichtsbehörden\n• Einheitliche Metriken und KPIs für beide Bereiche\n• Koordinierte Zertifizierungs- und Prüfungsdokumentation\n\n🔄 Dokumentenmanagement-Prozesse:\n• Einheitliche Erstellungs- und Genehmigungsprozesse\n• Koordinierte Review- und Aktualisierungszyklen\n• Gemeinsame Schulungs- und Kommunikationsprozesse\n• Integrierte Change Management Verfahren\n• Harmonisierte Archivierungs- und Aufbewahrungsrichtlinien\n\n📈 Kontinuierliche Verbesserung:\n• Regelmäßige Bewertung der Dokumentationseffizienz\n• Feedback-Integration aus Audits und Prüfungen beider Standards\n• Anpassung an neue regulatorische Anforderungen\n• Optimierung basierend auf Nutzererfahrungen\n• Kontinuierliche Harmonisierung und Standardisierung"
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
