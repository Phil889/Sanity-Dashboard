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
    console.log('Updating ISO 27001 DSGVO page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-dsgvo" not found')
    }
    
    // Create new FAQs for ISO 27001 & DSGVO Technical controls and security measures
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche technischen Kontrollmaßnahmen erfüllen sowohl ISO 27001 als auch DSGVO Anforderungen?',
        answer: "Die Implementierung technischer Kontrollmaßnahmen, die sowohl ISO 27001 als auch DSGVO Anforderungen erfüllen, schafft ein effizientes und kostenoptimiertes Sicherheitssystem. Diese Dual-Compliance-Kontrollen nutzen die natürlichen Überschneidungen beider Standards und gewährleisten gleichzeitig höchste Schutzstandards.\n\n🔐 Zugangskontrollen und Identitätsmanagement:\n• Multi-Faktor-Authentifizierung erfüllt sowohl ISO 27001 Kontrolle A.9.4.2 als auch DSGVO Artikel 32 Anforderungen\n• Rollenbasierte Zugangskontrollen gewährleisten Datenschutz durch Datenminimierung und Informationssicherheit durch Need-to-Know-Prinzip\n• Privileged Access Management schützt kritische Systeme und personenbezogene Daten gleichermaßen\n• Automatisierte Benutzerkonten-Verwaltung mit Lifecycle-Management für beide Standards\n• Single Sign-On Lösungen mit integrierter Protokollierung für Compliance-Nachweise\n\n🔒 Verschlüsselung und Kryptographie:\n• End-to-End-Verschlüsselung für Daten in Ruhe und in Bewegung erfüllt beide Standards\n• Schlüsselmanagement-Systeme mit Hardware Security Modules für höchste Sicherheit\n• Pseudonymisierung und Anonymisierung als DSGVO-konforme Sicherheitsmaßnahmen\n• Kryptographische Integrität und Authentizität für alle kritischen Datenverarbeitungen\n• Sichere Kommunikationsprotokolle mit Perfect Forward Secrecy\n\n🛡️ Netzwerksicherheit und Segmentierung:\n• Netzwerksegmentierung isoliert kritische Systeme und schützt personenbezogene Daten\n• Firewalls und Intrusion Detection Systeme überwachen beide Sicherheits- und Datenschutzverletzungen\n• Virtual Private Networks für sichere Remote-Zugriffe auf beide Arten von Assets\n• Network Access Control für granulare Zugriffskontrolle\n• Zero Trust Architektur als umfassender Schutzansatz\n\n📊 Monitoring und Logging:\n• Security Information and Event Management Systeme für beide Standards\n• Audit-Trails für alle Zugriffe auf Informationsassets und personenbezogene Daten\n• Real-time Monitoring mit automatisierten Alerting-Mechanismen\n• Log-Retention-Richtlinien, die beide Standards berücksichtigen\n• Forensische Analysefähigkeiten für Incident Response\n\n💾 Backup und Disaster Recovery:\n• Verschlüsselte Backup-Systeme mit geografischer Verteilung\n• Business Continuity Planning für beide Compliance-Bereiche\n• Recovery Time und Recovery Point Objectives für kritische Systeme\n• Regelmäßige Disaster Recovery Tests und Dokumentation\n• Sichere Datenvernichtung nach Aufbewahrungsfristen\n\n🔍 Vulnerability Management:\n• Regelmäßige Schwachstellen-Scans für alle Systeme\n• Patch Management mit priorisierten Sicherheitsupdates\n• Penetration Testing für kritische Anwendungen und Datenverarbeitungen\n• Security Configuration Management für konsistente Sicherheitsstandards\n• Threat Intelligence Integration für proaktive Bedrohungsabwehr"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie können Incident Response Prozesse für beide Standards harmonisiert werden?',
        answer: "Die Harmonisierung von Incident Response Prozessen für ISO 27001 und DSGVO schafft ein einheitliches, effizientes System zur Behandlung von Sicherheitsvorfällen und Datenschutzverletzungen. Diese Integration optimiert Reaktionszeiten, reduziert Komplexität und gewährleistet vollständige Compliance mit beiden Standards.\n\n🚨 Integrierte Incident-Klassifikation:\n• Einheitliche Kategorisierung von Vorfällen nach Schweregrad und Auswirkungen auf beide Standards\n• Spezielle Klassifikation für Datenschutzverletzungen mit DSGVO-spezifischen Kriterien\n• Automatisierte Eskalationspfade basierend auf Incident-Typ und Compliance-Anforderungen\n• Klare Definition von Meldepflichten für beide Standards\n• Priorisierung basierend auf kombinierter Risikobewertung\n\n⏱️ Koordinierte Response-Zeiten:\n• DSGVO-konforme Meldefristen von 72 Stunden für Aufsichtsbehörden\n• ISO 27001 konforme interne Eskalation und Management-Benachrichtigung\n• Betroffenen-Benachrichtigung nach DSGVO-Kriterien innerhalb angemessener Frist\n• Koordinierte Kommunikation mit allen relevanten Stakeholdern\n• Dokumentierte Zeitstempel für alle Response-Aktivitäten\n\n🔍 Einheitliche Untersuchungsmethoden:\n• Forensische Analyse mit Fokus auf beide Compliance-Bereiche\n• Root Cause Analysis für systematische Verbesserungen\n• Evidence Collection nach rechtlichen und technischen Standards\n• Impact Assessment für Informationssicherheit und Datenschutz\n• Lessons Learned Integration in beide Managementsysteme\n\n📋 Harmonisierte Dokumentation:\n• Einheitliche Incident-Dokumentation für beide Standards\n• Automatisierte Berichtsgenerierung für verschiedene Stakeholder\n• Compliance-Mapping für alle durchgeführten Maßnahmen\n• Audit-Trail für alle Response-Aktivitäten\n• Regelmäßige Review und Aktualisierung der Dokumentation\n\n🤝 Koordinierte Kommunikation:\n• Einheitliche Kommunikationsstrategie für interne und externe Stakeholder\n• Vordefinierte Templates für verschiedene Incident-Typen\n• Koordination zwischen IT-Sicherheit, Datenschutz und Management\n• Externe Kommunikation mit Aufsichtsbehörden und Betroffenen\n• Media Relations und Public Relations Koordination\n\n🔄 Kontinuierliche Verbesserung:\n• Post-Incident Reviews mit Fokus auf beide Standards\n• Aktualisierung von Prozessen basierend auf Lessons Learned\n• Regelmäßige Tabletop-Übungen für verschiedene Incident-Szenarien\n• Training und Awareness für alle beteiligten Teams\n• Metriken und KPIs für beide Compliance-Bereiche\n\n⚖️ Rechtliche und regulatorische Koordination:\n• Abstimmung mit Rechtsabteilung für beide Standards\n• Koordination mit Datenschutzbeauftragten und CISO\n• Externe Beratung bei komplexen Vorfällen\n• Dokumentation für potenzielle rechtliche Verfahren\n• Compliance-Nachweis für Aufsichtsbehörden und Auditoren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen Datenschutz-Folgenabschätzungen bei der ISO 27001 Kontrollauswahl?',
        answer: "Datenschutz-Folgenabschätzungen spielen eine zentrale Rolle bei der ISO 27001 Kontrollauswahl, da sie eine systematische Methode zur Identifikation und Bewertung von Datenschutzrisiken bieten, die direkt in die Sicherheitskontrollstrategie integriert werden können. Diese Integration schafft ein ganzheitliches Risikomanagement-System.\n\n🎯 Strategische Integration in die Kontrollauswahl:\n• DSFA-Ergebnisse fließen direkt in die ISO 27001 Risikoanalyse und Statement of Applicability ein\n• Identifizierte Datenschutzrisiken werden bei der Auswahl und Implementierung von Annex A Kontrollen berücksichtigt\n• Hohe Datenschutzrisiken führen zu verstärkten Sicherheitskontrollen in entsprechenden Bereichen\n• Privacy by Design Prinzipien werden in alle ausgewählten technischen Kontrollen integriert\n• Regelmäßige Neubewertung der Kontrolleffektivität basierend auf DSFA-Updates\n\n📊 Risikobewertung und Kontrollmapping:\n• Systematische Bewertung von Verarbeitungstätigkeiten im Kontext der ISO 27001 Asset-Inventarisierung\n• Mapping von Datenschutzrisiken auf entsprechende ISO 27001 Kontrollfamilien\n• Priorisierung von Sicherheitskontrollen basierend auf Datenschutz-Impact-Bewertungen\n• Integration von Betroffenenrechten in Zugangskontrollen und Datenmanagement-Prozesse\n• Berücksichtigung von Datenübertragungen und internationalen Transfers bei Netzwerkkontrollen\n\n🔧 Technische Kontrollauswahl:\n• Verschlüsselungsanforderungen basierend auf Sensitivität personenbezogener Daten\n• Zugangskontrollen mit Fokus auf Datenminimierung und Need-to-Know-Prinzip\n• Monitoring-Systeme mit speziellem Fokus auf Datenschutzverletzungen\n• Backup und Recovery Strategien unter Berücksichtigung von Aufbewahrungsfristen\n• Sichere Löschverfahren für personenbezogene Daten nach Zweckerfüllung\n\n📋 Organisatorische Kontrollintegration:\n• Schulungs- und Awareness-Programme mit Datenschutz-Komponenten\n• Incident Response Prozesse mit DSGVO-konformen Meldeverfahren\n• Lieferantenmanagement mit Datenschutz-Compliance-Anforderungen\n• Change Management Prozesse mit obligatorischen DSFA-Checks\n• Dokumentationsanforderungen für beide Standards\n\n🔍 Kontinuierliche Überwachung und Anpassung:\n• Regelmäßige Review der Kontrolleffektivität unter Datenschutzgesichtspunkten\n• Anpassung der Kontrollen bei Änderungen in Verarbeitungstätigkeiten\n• Integration von Datenschutz-Metriken in ISO 27001 Performance-Messung\n• Koordinierte Audit-Aktivitäten für beide Standards\n• Kontinuierliche Verbesserung basierend auf beiden Frameworks\n\n⚖️ Compliance und Rechtssicherheit:\n• Sicherstellung, dass alle ausgewählten Kontrollen DSGVO-konform sind\n• Dokumentation der Entscheidungsgrundlagen für Audit-Zwecke\n• Nachweis der Verhältnismäßigkeit von Sicherheitsmaßnahmen\n• Integration rechtlicher Anforderungen in technische Spezifikationen\n• Vorbereitung auf koordinierte Compliance-Prüfungen\n\n🚀 Innovation und Zukunftsfähigkeit:\n• Berücksichtigung neuer Technologien und deren Datenschutz-Implikationen\n• Vorbereitung auf zukünftige regulatorische Entwicklungen\n• Aufbau flexibler Kontrollarchitekturen für sich ändernde Anforderungen\n• Integration von Privacy-Enhancing Technologies\n• Kontinuierliche Anpassung an Best Practices und Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie gestaltet sich das Change Management für integrierte ISO 27001 und DSGVO Systeme?',
        answer: "Das Change Management für integrierte ISO 27001 und DSGVO Systeme erfordert einen systematischen Ansatz, der sowohl Informationssicherheits- als auch Datenschutzaspekte bei jeder Änderung berücksichtigt. Diese integrierte Herangehensweise gewährleistet kontinuierliche Compliance und minimiert Risiken bei Systemänderungen.\n\n📋 Integrierte Change-Bewertung:\n• Jede Änderung wird sowohl auf Informationssicherheits- als auch auf Datenschutz-Implikationen bewertet\n• Obligatorische DSFA-Checks bei Änderungen an Datenverarbeitungsprozessen\n• ISO 27001 Risikoanalyse für alle technischen und organisatorischen Änderungen\n• Kombinierte Impact-Assessment-Methodik für beide Standards\n• Automatisierte Compliance-Checks in Change-Management-Tools\n\n🔄 Harmonisierte Change-Prozesse:\n• Einheitliche Change Request Templates mit Feldern für beide Standards\n• Koordinierte Genehmigungsworkflows mit Datenschutz- und Sicherheitsexperten\n• Integrierte Testing-Verfahren für Sicherheits- und Datenschutzkontrollen\n• Rollback-Strategien, die beide Compliance-Bereiche berücksichtigen\n• Dokumentationsanforderungen für beide Standards\n\n🎯 Risikobewertung und Genehmigung:\n• Multi-dimensionale Risikobewertung für Informationssicherheit und Datenschutz\n• Eskalationspfade basierend auf kombinierter Risikoeinstufung\n• Change Advisory Board mit Vertretern beider Compliance-Bereiche\n• Automatisierte Genehmigungsworkflows für Low-Risk-Changes\n• Spezielle Verfahren für Emergency Changes mit Compliance-Nachverfolgung\n\n🔧 Technische Implementierung:\n• Staging-Umgebungen mit repräsentativen Datenschutz- und Sicherheitskontrollen\n• Automatisierte Compliance-Tests als Teil der CI/CD-Pipeline\n• Configuration Management mit Fokus auf beide Standards\n• Monitoring der Änderungsauswirkungen auf Compliance-Metriken\n• Rollback-Mechanismen mit Wiederherstellung aller Kontrollmaßnahmen\n\n📊 Dokumentation und Nachverfolgung:\n• Einheitliche Change-Dokumentation für beide Standards\n• Audit-Trails für alle Änderungsaktivitäten\n• Compliance-Mapping für implementierte Changes\n• Regelmäßige Review der Change-Effektivität\n• Lessons Learned Integration in beide Managementsysteme\n\n👥 Stakeholder-Management:\n• Koordinierte Kommunikation mit allen betroffenen Parteien\n• Training für Change-Manager in beiden Compliance-Bereichen\n• Klare Rollen und Verantwortlichkeiten für integrierte Changes\n• Eskalationspfade für komplexe oder kritische Änderungen\n• Feedback-Mechanismen für kontinuierliche Verbesserung\n\n🔍 Post-Implementation-Review:\n• Bewertung der Änderungseffektivität für beide Standards\n• Monitoring der Compliance-Auswirkungen nach Implementierung\n• Anpassung der Change-Prozesse basierend auf Erfahrungen\n• Integration von Lessons Learned in zukünftige Changes\n• Kontinuierliche Optimierung der integrierten Verfahren\n\n⚖️ Compliance und Governance:\n• Sicherstellung, dass alle Changes beide Standards erfüllen\n• Regelmäßige Audit der Change-Management-Prozesse\n• Compliance-Reporting für Management und Aufsichtsbehörden\n• Integration in übergeordnete Governance-Strukturen\n• Vorbereitung auf externe Audits und Prüfungen"
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
