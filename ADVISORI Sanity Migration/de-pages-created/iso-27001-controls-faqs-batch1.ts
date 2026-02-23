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
    console.log('Updating ISO 27001 Controls page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-controls" not found')
    }
    
    // Create new FAQs for ISO 27001 Controls fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die ISO 27001 Annex A Controls und warum sind sie für die Informationssicherheit unverzichtbar?',
        answer: "Die ISO 27001 Annex A Controls bilden das operative Herzstück jedes Informationssicherheitsmanagementsystems und definieren konkrete Sicherheitsmaßnahmen, die Organisationen zum Schutz ihrer Informationsassets implementieren können. Diese 114 Kontrollen in der aktuellen Version ISO 27001:2022 stellen einen umfassenden Katalog bewährter Sicherheitspraktiken dar, der auf jahrzehntelanger Erfahrung und kontinuierlicher Weiterentwicklung basiert.\n\n🏗️ Struktureller Aufbau der Controls:\n• Organisatorische Kontrollen umfassen 37 Maßnahmen für Governance, Richtlinien und Managementprozesse\n• Personelle Kontrollen beinhalten 8 Maßnahmen für Human Resource Security und Mitarbeitersensibilisierung\n• Physische Kontrollen definieren 14 Maßnahmen für Umgebungssicherheit und Anlagenschutz\n• Technologische Kontrollen spezifizieren 34 Maßnahmen für IT-Sicherheit und Systemschutz\n• Jede Kategorie adressiert spezifische Sicherheitsaspekte und ergänzt sich zu einem ganzheitlichen Schutzkonzept\n\n🎯 Risikobasierte Anwendung:\n• Die Controls sind nicht als Checkliste zu verstehen, sondern müssen basierend auf der individuellen Risikoanalyse ausgewählt werden\n• Die Statement of Applicability dokumentiert, welche Kontrollen anwendbar sind und wie sie implementiert werden\n• Nicht anwendbare Kontrollen müssen begründet ausgeschlossen werden\n• Die Implementierung erfolgt entsprechend der Risikobewertung und Geschäftsanforderungen\n• Kontinuierliche Überprüfung und Anpassung der Kontrollauswahl ist erforderlich\n\n🔄 Kontinuierliche Verbesserung:\n• Die Controls unterstützen den PDCA-Zyklus durch systematische Implementierung und Überwachung\n• Regelmäßige Wirksamkeitsprüfungen stellen sicher, dass die Kontrollen ihre Schutzziele erreichen\n• Anpassungen an veränderte Bedrohungslandschaften und Geschäftsanforderungen sind vorgesehen\n• Integration mit anderen Managementsystemen und Compliance-Frameworks wird ermöglicht\n• Lessons Learned aus Sicherheitsvorfällen fließen in die Kontrolloptimierung ein\n\n💼 Geschäftswert und Compliance:\n• Die Controls schaffen nachweisbare Sicherheitsstandards, die Vertrauen bei Stakeholdern aufbauen\n• Erfüllung regulatorischer Anforderungen und Branchenstandards wird systematisch unterstützt\n• Reduzierung von Cyber-Risiken und potenziellen Geschäftsschäden durch präventive Maßnahmen\n• Optimierung von Sicherheitsinvestitionen durch fokussierte, risikobasierte Implementierung\n• Aufbau einer robusten Sicherheitskultur, die alle Organisationsebenen durchdringt\n\n🌐 Internationale Anerkennung:\n• Die Controls basieren auf internationalen Best Practices und sind weltweit anerkannt\n• Kompatibilität mit anderen Standards wie NIST, COBIT und branchenspezifischen Frameworks\n• Unterstützung bei der Erfüllung von Kundenanforderungen und Vertragsverhandlungen\n• Grundlage für Zertifizierungen und externe Audits\n• Benchmark für die Bewertung der eigenen Sicherheitsreife im Vergleich zu Branchenstandards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie erfolgt die risikobasierte Auswahl und Priorisierung der ISO 27001 Controls?',
        answer: "Die risikobasierte Auswahl der ISO 27001 Controls ist ein systematischer Prozess, der die individuellen Risiken einer Organisation mit den verfügbaren Sicherheitsmaßnahmen abgleicht. Dieser Ansatz gewährleistet, dass Sicherheitsinvestitionen dort getätigt werden, wo sie den größten Schutzwert bieten und gleichzeitig die Geschäftsanforderungen optimal unterstützen.\n\n🔍 Systematische Risikoanalyse:\n• Identifikation und Bewertung aller Informationsassets und deren Schutzbedarf\n• Analyse der Bedrohungslandschaft und Schwachstellen in der aktuellen Sicherheitsarchitektur\n• Bewertung der potenziellen Auswirkungen von Sicherheitsvorfällen auf Geschäftsprozesse\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Einbeziehung von Branchenspezifika und organisationsspezifischen Risikofaktoren\n\n📊 Control-Mapping und Priorisierung:\n• Systematische Zuordnung der identifizierten Risiken zu den entsprechenden Annex A Controls\n• Bewertung der Wirksamkeit einzelner Controls zur Risikominimierung\n• Analyse von Abhängigkeiten und Synergien zwischen verschiedenen Kontrollen\n• Priorisierung basierend auf Risikohöhe, Implementierungsaufwand und verfügbaren Ressourcen\n• Entwicklung einer phasenweisen Implementierungsroadmap\n\n⚖️ Kosten-Nutzen-Bewertung:\n• Analyse der Implementierungskosten für jede Kontrolle einschließlich Personal, Technologie und Prozesse\n• Bewertung des erwarteten Risikoreduktionspotenzials und Geschäftsnutzens\n• Berücksichtigung von Opportunitätskosten und alternativen Sicherheitsmaßnahmen\n• Einbeziehung von Compliance-Anforderungen als nicht verhandelbare Mindeststandards\n• Entwicklung von Business Cases für kritische Sicherheitsinvestitionen\n\n📋 Statement of Applicability Entwicklung:\n• Dokumentation der Anwendbarkeitsentscheidung für jede der 114 Annex A Controls\n• Begründung für die Auswahl oder den Ausschluss spezifischer Kontrollen\n• Definition der Implementierungsansätze und Verantwortlichkeiten\n• Festlegung von Messgrößen und Erfolgskriterien für die Kontrollwirksamkeit\n• Regelmäßige Überprüfung und Aktualisierung der Anwendbarkeitsentscheidungen\n\n🔄 Kontinuierliche Optimierung:\n• Regelmäßige Neubewertung der Risikolandschaft und Anpassung der Kontrollauswahl\n• Integration von Lessons Learned aus Sicherheitsvorfällen und Audit-Ergebnissen\n• Berücksichtigung technologischer Entwicklungen und neuer Bedrohungen\n• Anpassung an veränderte Geschäftsanforderungen und Organisationsstrukturen\n• Benchmarking mit Branchenstandards und Best Practices\n\n🎯 Implementierungsstrategie:\n• Entwicklung einer phasenweisen Umsetzungsstrategie mit klaren Meilensteinen\n• Berücksichtigung von Ressourcenverfügbarkeit und organisatorischen Kapazitäten\n• Integration in bestehende Geschäftsprozesse und IT-Landschaften\n• Change Management und Mitarbeitersensibilisierung für neue Sicherheitsmaßnahmen\n• Etablierung von Governance-Strukturen für die kontinuierliche Kontrollüberwachung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche organisatorischen Controls sind besonders kritisch und wie werden sie effektiv implementiert?',
        answer: "Die organisatorischen Controls bilden das Fundament jedes erfolgreichen ISMS und umfassen 37 Maßnahmen, die Governance-Strukturen, Richtlinien und Managementprozesse definieren. Diese Controls sind besonders kritisch, da sie die strategische Ausrichtung der Informationssicherheit bestimmen und die Basis für alle anderen Sicherheitsmaßnahmen schaffen.\n\n📋 Kritische Governance Controls:\n• Informationssicherheitsrichtlinien etablieren die strategische Ausrichtung und Grundprinzipien\n• Organisationsstrukturen definieren Rollen, Verantwortlichkeiten und Berichtswege\n• Risikomanagement-Prozesse gewährleisten systematische Identifikation und Behandlung von Risiken\n• Compliance-Überwachung stellt die Einhaltung regulatorischer Anforderungen sicher\n• Management Review Prozesse gewährleisten kontinuierliche Verbesserung und strategische Steuerung\n\n🏢 Organisationsstruktur und Verantwortlichkeiten:\n• Etablierung einer klaren ISMS-Governance mit definierten Rollen und Verantwortlichkeiten\n• Benennung eines Information Security Officers oder CISO mit entsprechenden Befugnissen\n• Einrichtung von Sicherheitsgremien und Entscheidungsstrukturen\n• Definition von Eskalationswegen und Kommunikationskanälen\n• Integration der Informationssicherheit in bestehende Managementstrukturen\n\n📖 Richtlinien und Verfahrensentwicklung:\n• Entwicklung einer umfassenden Informationssicherheitsrichtlinie als Grundlagendokument\n• Erstellung spezifischer Verfahrensanweisungen für kritische Sicherheitsprozesse\n• Berücksichtigung regulatorischer Anforderungen und Branchenstandards\n• Regelmäßige Überprüfung und Aktualisierung der Dokumentation\n• Kommunikation und Schulung aller Mitarbeiter zu den geltenden Richtlinien\n\n🤝 Lieferanten und Drittparteien Management:\n• Systematische Bewertung und Klassifizierung von Lieferanten und Dienstleistern\n• Entwicklung von Sicherheitsanforderungen für Verträge und Service Level Agreements\n• Regelmäßige Überwachung und Bewertung der Lieferantenperformance\n• Incident Management und Eskalationsprozesse für Drittparteien\n• Due Diligence Prozesse für neue Geschäftspartner\n\n🔄 Kontinuierliche Verbesserung:\n• Etablierung von Metriken und KPIs zur Messung der ISMS-Wirksamkeit\n• Regelmäßige interne Audits und Management Reviews\n• Korrektur und Präventivmaßnahmen basierend auf Audit-Ergebnissen\n• Integration von Lessons Learned aus Sicherheitsvorfällen\n• Benchmarking mit Branchenstandards und Best Practices\n\n📊 Implementierungsstrategie:\n• Phasenweise Einführung beginnend mit kritischen Governance-Elementen\n• Change Management Programme zur Unterstützung der organisatorischen Transformation\n• Schulungs und Awareness Programme für alle Organisationsebenen\n• Integration in bestehende Managementsysteme und Geschäftsprozesse\n• Regelmäßige Kommunikation des Fortschritts und der Erfolge an alle Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie werden technologische Controls systematisch implementiert und in moderne IT-Landschaften integriert?',
        answer: "Die technologischen Controls umfassen 34 Maßnahmen, die den Kern der IT-Sicherheit bilden und sich mit Zugangsmanagement, Kryptographie, Systemsicherheit und Netzwerkschutz befassen. Ihre systematische Implementierung erfordert eine durchdachte Architektur, die sowohl aktuelle Bedrohungen als auch zukünftige technologische Entwicklungen berücksichtigt.\n\n🔐 Zugangsmanagement und Identitätskontrolle:\n• Implementierung von Identity and Access Management Systemen mit zentraler Benutzerverwaltung\n• Etablierung von Multi-Faktor-Authentifizierung für kritische Systeme und privilegierte Zugriffe\n• Entwicklung von rollenbasierten Zugriffskonzepten mit dem Prinzip der minimalen Berechtigung\n• Regelmäßige Überprüfung und Zertifizierung von Benutzerrechten\n• Automatisierte Provisionierung und Deprovisionierung von Benutzerkonten\n\n🛡️ Systemsicherheit und Härtung:\n• Systematische Härtung von Betriebssystemen, Anwendungen und Netzwerkkomponenten\n• Implementierung von Patch Management Prozessen mit risikobasierten Priorisierung\n• Konfigurationsmanagement und Baseline-Überwachung für kritische Systeme\n• Schwachstellenmanagement mit regelmäßigen Scans und Penetrationstests\n• Endpoint Protection und Advanced Threat Detection Lösungen\n\n🔒 Kryptographie und Datenschutz:\n• Entwicklung einer umfassenden Kryptographie-Strategie mit definierten Standards und Algorithmen\n• Implementierung von Verschlüsselung für Daten in Ruhe und in Bewegung\n• Schlüsselmanagement-Systeme mit sicherer Generierung, Verteilung und Speicherung\n• Public Key Infrastructure für digitale Zertifikate und Signaturen\n• Regelmäßige Überprüfung und Aktualisierung kryptographischer Verfahren\n\n🌐 Netzwerksicherheit und Segmentierung:\n• Implementierung von Netzwerksegmentierung und Mikrosegmentierung\n• Firewall-Architekturen mit Defense-in-Depth Prinzipien\n• Intrusion Detection und Prevention Systeme für Echtzeit-Bedrohungserkennung\n• Network Access Control für die Überwachung und Kontrolle von Netzwerkzugriffen\n• Sichere Fernzugriffslösungen und VPN-Technologien\n\n📊 Monitoring und Incident Response:\n• Security Information and Event Management Systeme für zentrale Protokollierung\n• Automatisierte Bedrohungserkennung und Response-Mechanismen\n• Forensik-Fähigkeiten für die Analyse von Sicherheitsvorfällen\n• Incident Response Playbooks und automatisierte Reaktionsprozesse\n• Kontinuierliche Überwachung und Threat Intelligence Integration\n\n☁️ Cloud und moderne Technologien:\n• Cloud Security Posture Management für Multi-Cloud-Umgebungen\n• Container-Sicherheit und DevSecOps-Integration\n• API-Sicherheit und Microservices-Schutz\n• Zero Trust Architektur-Prinzipien\n• Integration von KI und Machine Learning für erweiterte Bedrohungserkennung"
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
