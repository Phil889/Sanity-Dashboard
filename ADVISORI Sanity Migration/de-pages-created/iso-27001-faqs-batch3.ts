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
    console.log('Updating ISO 27001 page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001" not found')
    }
    
    // Create new FAQs for ISO 27001 audit and certification aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie läuft ein ISO 27001 Zertifizierungsaudit ab und wie kann man sich optimal darauf vorbereiten?',
        answer: "Ein ISO 27001 Zertifizierungsaudit ist ein strukturierter, mehrstufiger Prozess, der die Konformität und Wirksamkeit des implementierten ISMS bewertet. Eine systematische Vorbereitung und professionelle Durchführung sind entscheidend für den Zertifizierungserfolg und die nachhaltige ISMS-Etablierung.\n\n📋 Zweistufiger Auditprozess:\n• Stage 1 Audit (Dokumentenprüfung): Bewertung der ISMS-Dokumentation, Richtlinien und Verfahren auf Vollständigkeit und Konformität\n• Überprüfung der Anwendungsbereichsdefinition und Risikobehandlungspläne\n• Bewertung der Audit-Bereitschaft und Identifikation potenzieller Problembereiche\n• Planung des Stage 2 Audits basierend auf den Erkenntnissen aus Stage 1\n• Möglichkeit zur Behebung identifizierter Dokumentationslücken vor dem Hauptaudit\n\n🔍 Stage 2 Audit (Hauptaudit):\n• Umfassende Bewertung der ISMS-Implementierung und operativen Wirksamkeit\n• Interviews mit Mitarbeitern auf allen Organisationsebenen zur Überprüfung des Sicherheitsbewusstseins\n• Stichprobenhafte Überprüfung von Kontrollmaßnahmen und deren praktischer Umsetzung\n• Bewertung der Management Review Prozesse und kontinuierlichen Verbesserung\n• Überprüfung der Behandlung von Sicherheitsvorfällen und Nonkonformitäten\n\n📚 Systematische Audit-Vorbereitung:\n• Durchführung interner Audits zur Identifikation und Behebung von Schwachstellen\n• Schulung aller Mitarbeiter über ihre Rollen im ISMS und mögliche Audit-Fragen\n• Vorbereitung einer vollständigen und aktuellen Dokumentation mit einfachem Zugriff\n• Simulation von Audit-Situationen durch Mock-Audits mit externen Beratern\n• Aufbau eines kompetenten Audit-Teams mit klaren Rollen und Verantwortlichkeiten\n\n✅ Erfolgsfaktoren für das Audit:\n• Transparente und offene Kommunikation mit den Auditoren\n• Demonstration der gelebten Sicherheitskultur durch alle Mitarbeiter\n• Nachweis der kontinuierlichen Verbesserung und Lernfähigkeit der Organisation\n• Professionelle Behandlung identifizierter Nonkonformitäten mit konkreten Korrekturmaßnahmen\n• Fokus auf die Wirksamkeit des ISMS statt nur auf formale Compliance\n\n🎯 Nach dem Audit:\n• Behandlung von Audit-Findings und Implementierung erforderlicher Korrekturmaßnahmen\n• Vorbereitung auf jährliche Überwachungsaudits zur Aufrechterhaltung der Zertifizierung\n• Kontinuierliche ISMS-Verbesserung basierend auf Audit-Erkenntnissen\n• Planung der Rezertifizierung alle drei Jahre\n• Nutzung der Zertifizierung für Marketing und Geschäftsentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Kontrollmaßnahmen aus Anhang A der ISO 27001 sind besonders kritisch und wie werden sie implementiert?',
        answer: "Anhang A der ISO 27001 enthält 93 Kontrollmaßnahmen in 14 Kategorien, die als bewährte Praktiken für Informationssicherheit gelten. Die Auswahl und Implementierung der relevanten Kontrollmaßnahmen basiert auf der individuellen Risikoanalyse und den spezifischen Geschäftsanforderungen der Organisation.\n\n🔐 Zugangskontrollen (A.9):\n• Implementierung robuster Benutzeridentifikation und Authentifizierung mit Multi-Faktor-Authentifizierung\n• Etablierung des Prinzips der minimalen Berechtigung und regelmäßige Zugriffsrechte-Reviews\n• Sichere Verwaltung privilegierter Zugangsrechte mit separaten administrativen Konten\n• Automatisierte Deaktivierung von Benutzerkonten bei Personalwechsel\n• Implementierung von Netzwerksegmentierung und Zugangskontrollen für kritische Systeme\n\n📊 Kryptografie (A.10):\n• Entwicklung einer umfassenden Kryptografie-Politik mit definierten Standards und Algorithmen\n• Implementierung von Verschlüsselung für Daten in Ruhe und während der Übertragung\n• Sichere Schlüsselverwaltung mit Hardware Security Modules für kritische Anwendungen\n• Regelmäßige Überprüfung und Aktualisierung kryptografischer Verfahren\n• Berücksichtigung von Quantum-resistenten Algorithmen für zukunftssichere Implementierungen\n\n🛡️ Physische und umgebungsbezogene Sicherheit (A.11):\n• Etablierung sicherer Bereiche mit mehrstufigen Zugangskontrollen und Überwachung\n• Implementierung von Umweltkontrollen für kritische IT-Infrastrukturen\n• Sichere Entsorgung oder Wiederverwendung von Geräten mit zertifizierter Datenvernichtung\n• Schutz vor Umweltbedrohungen wie Feuer, Wasser und Stromausfall\n• Clear Desk und Clear Screen Policies für den Schutz sensibler Informationen\n\n💻 Betriebssicherheit (A.12):\n• Implementierung umfassender Logging und Monitoring Systeme für Sicherheitsereignisse\n• Etablierung von Change Management Prozessen für alle IT-Systeme\n• Regelmäßige Sicherheitsupdates und Patch Management mit definierten SLAs\n• Backup und Recovery Verfahren mit regelmäßigen Wiederherstellungstests\n• Malware-Schutz mit mehrschichtigen Sicherheitslösungen\n\n🌐 Kommunikationssicherheit (A.13):\n• Implementierung von Netzwerksicherheitskontrollen wie Firewalls und Intrusion Detection\n• Sichere Konfiguration von Netzwerkdiensten mit Deaktivierung unnötiger Services\n• Segregation von Netzwerken basierend auf Sicherheitsanforderungen\n• Sichere Übertragung von Informationen mit Verschlüsselung und Integritätsprüfung\n• Monitoring von Netzwerkaktivitäten zur Erkennung anomaler Verhaltensweisen\n\n🔄 Kontinuierliche Überwachung und Verbesserung:\n• Regelmäßige Bewertung der Kontrollwirksamkeit durch interne Audits\n• Anpassung der Kontrollmaßnahmen an veränderte Bedrohungslandschaften\n• Integration neuer Technologien und Sicherheitslösungen\n• Messung der Sicherheitsleistung durch definierte KPIs\n• Kontinuierliche Schulung und Sensibilisierung der Mitarbeiter"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie integriert sich ISO 27001 mit anderen Compliance-Anforderungen wie GDPR, DORA oder NIS2?',
        answer: "ISO 27001 bildet eine solide Grundlage für die Erfüllung verschiedener Compliance-Anforderungen und kann strategisch mit anderen Regulierungen integriert werden. Diese Integration schafft Synergien, reduziert Compliance-Aufwände und gewährleistet eine ganzheitliche Governance-Struktur für Informationssicherheit und Datenschutz.\n\n🔗 Integration mit GDPR (Datenschutz-Grundverordnung):\n• ISO 27001 Kontrollmaßnahmen unterstützen die technischen und organisatorischen Maßnahmen der GDPR\n• Risikobasierter Ansatz von ISO 27001 ergänzt die Datenschutz-Folgenabschätzung der GDPR\n• ISMS-Dokumentation kann als Nachweis für GDPR-Compliance-Maßnahmen dienen\n• Incident Management Prozesse erfüllen gleichzeitig GDPR-Meldepflichten\n• Privacy by Design Prinzipien können in das ISMS-Design integriert werden\n\n🏦 Synergie mit DORA (Digital Operational Resilience Act):\n• ISO 27001 Risikomanagement-Prozesse erfüllen DORA-Anforderungen für operationelle Resilienz\n• ISMS-Kontrollmaßnahmen decken viele DORA-Sicherheitsanforderungen ab\n• Business Continuity Planning aus ISO 27001 unterstützt DORA-Resilienz-Anforderungen\n• Incident Response Prozesse können für beide Frameworks genutzt werden\n• Third-party Risk Management aus ISO 27001 erfüllt DORA-Anforderungen für Drittanbieter\n\n🛡️ Komplementarität mit NIS2 (Network and Information Security Directive):\n• ISO 27001 ISMS erfüllt die Cybersecurity-Governance-Anforderungen von NIS2\n• Risikomanagement-Prozesse decken NIS2-Anforderungen für Risikobewertung ab\n• Supply Chain Security Maßnahmen aus ISO 27001 unterstützen NIS2-Lieferkettenanforderungen\n• Incident Reporting Prozesse können für beide Frameworks harmonisiert werden\n• Kontinuierliche Überwachung erfüllt NIS2-Monitoring-Anforderungen\n\n📋 Strategische Integrationsansätze:\n• Entwicklung einer einheitlichen Governance-Struktur für alle Compliance-Anforderungen\n• Harmonisierung von Risikobewertungsmethoden und -kriterien\n• Integration von Audit-Zyklen und Berichterstattung für Effizienzsteigerung\n• Gemeinsame Schulungs- und Awareness-Programme für alle Frameworks\n• Einheitliche Dokumentationsstruktur mit Framework-spezifischen Ergänzungen\n\n🎯 Praktische Umsetzungsempfehlungen:\n• Mapping von Kontrollmaßnahmen zwischen verschiedenen Frameworks zur Identifikation von Überschneidungen\n• Entwicklung integrierter Compliance-Dashboards für ganzheitliche Übersicht\n• Etablierung cross-funktionaler Teams für koordinierte Compliance-Aktivitäten\n• Nutzung von GRC-Tools für automatisierte Compliance-Überwachung\n• Regelmäßige Gap-Analysen zur Identifikation von Optimierungspotenzialen\n\n💡 Zusätzliche Compliance-Frameworks:\n• Integration mit branchenspezifischen Standards wie PCI DSS, HIPAA oder SOX\n• Berücksichtigung nationaler Cybersecurity-Frameworks wie BSI IT-Grundschutz\n• Alignment mit internationalen Standards wie NIST Cybersecurity Framework\n• Vorbereitung auf zukünftige Regulierungen wie EU Cyber Resilience Act\n• Harmonisierung mit ESG-Anforderungen und Nachhaltigkeitsberichterstattung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielen Mitarbeiterschulungen und Awareness-Programme in der ISO 27001 Implementierung?',
        answer: "Mitarbeiterschulungen und Awareness-Programme sind fundamentale Erfolgsfaktoren für jede ISO 27001 Implementierung, da Informationssicherheit letztendlich von den Menschen in der Organisation gelebt werden muss. Eine systematische Kompetenzentwicklung und kontinuierliche Sensibilisierung schaffen die notwendige Sicherheitskultur für nachhaltigen ISMS-Erfolg.\n\n👥 Strategische Bedeutung der Human Factors:\n• Mitarbeiter sind sowohl das größte Sicherheitsrisiko als auch die wichtigste Verteidigungslinie\n• Erfolgreiche ISMS-Implementierung erfordert Verhaltensänderungen auf allen Organisationsebenen\n• Sicherheitsbewusstsein muss in die Unternehmenskultur integriert und kontinuierlich gefördert werden\n• Kompetente Mitarbeiter können Sicherheitsvorfälle verhindern und angemessen darauf reagieren\n• Engagement und Akzeptanz der Mitarbeiter bestimmen die praktische Wirksamkeit aller Kontrollmaßnahmen\n\n📚 Strukturierte Schulungsprogramme:\n• Entwicklung rollenbasierter Schulungsinhalte entsprechend den spezifischen Verantwortlichkeiten\n• Grundlagen-Schulungen für alle Mitarbeiter zu Informationssicherheit und ISMS-Prinzipien\n• Spezialisierte Schulungen für IT-Personal, Sicherheitsverantwortliche und Führungskräfte\n• Regelmäßige Auffrischungsschulungen zur Vertiefung und Aktualisierung des Wissens\n• Praktische Übungen und Simulationen für realitätsnahe Sicherheitsszenarien\n\n🎯 Zielgruppenspezifische Awareness-Maßnahmen:\n• Führungsebene: Strategische Bedeutung von Informationssicherheit und Governance-Verantwortung\n• IT-Abteilung: Technische Implementierung von Kontrollmaßnahmen und Incident Response\n• Fachabteilungen: Sichere Arbeitsweisen und Erkennung von Sicherheitsbedrohungen\n• Neue Mitarbeiter: Onboarding-Programme mit Sicherheitsschulungen als Pflichtbestandteil\n• Externe Partner: Sicherheitsanforderungen und Compliance-Verpflichtungen\n\n🔄 Kontinuierliche Awareness-Aktivitäten:\n• Regelmäßige Kommunikation über aktuelle Bedrohungen und Sicherheitstrends\n• Phishing-Simulationen und andere praktische Sicherheitstests\n• Sicherheitsnewsletter und interne Kommunikationskanäle\n• Gamification-Ansätze zur spielerischen Wissensvermittlung\n• Anerkennung und Belohnung sicherheitsbewussten Verhaltens\n\n📊 Messung der Schulungseffektivität:\n• Regelmäßige Wissenstests und Kompetenzbeurteilungen\n• Monitoring von Sicherheitsvorfällen und deren Ursachen\n• Feedback-Mechanismen zur kontinuierlichen Verbesserung der Schulungsprogramme\n• Analyse des Sicherheitsverhaltens durch Beobachtung und Audits\n• KPIs für Sicherheitsbewusstsein und Compliance-Rate\n\n🚀 Innovative Schulungsansätze:\n• E-Learning-Plattformen für flexible und skalierbare Wissensvermittlung\n• Virtual Reality Simulationen für immersive Sicherheitstrainings\n• Microlearning-Konzepte für kontinuierliche Wissensvermittlung\n• Peer-to-Peer Learning und Sicherheitsbotschafter-Programme\n• Integration von Sicherheitsschulungen in bestehende Entwicklungsprogramme"
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
