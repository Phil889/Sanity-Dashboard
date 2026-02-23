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
    console.log('Updating ISO 27001 TISAX page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-tisax' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-tisax" not found')
    }
    
    // Create new FAQs for TISAX technical and operational aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche technischen Sicherheitsmaßnahmen sind für TISAX besonders wichtig?',
        answer: "TISAX erfordert umfassende technische Sicherheitsmaßnahmen, die speziell auf die Anforderungen der Automobilindustrie zugeschnitten sind. Diese Maßnahmen müssen sowohl traditionelle IT-Sicherheit als auch automotive-spezifische Technologien wie Connected Car Services und IoT-Anwendungen abdecken.\n\n🔐 Automotive-spezifische IT-Sicherheit:\n• Sichere Entwicklungsumgebungen für Fahrzeugsoftware und Connected Car Anwendungen\n• Verschlüsselung von Fahrzeugdaten und Entwicklungsinformationen in Übertragung und Speicherung\n• Sichere Over-the-Air Update Systeme für Fahrzeugkomponenten\n• Netzwerksegmentierung zwischen Entwicklungs-, Test- und Produktionsumgebungen\n• Endpoint Protection für automotive-spezifische Entwicklungstools und CAD-Systeme\n\n🚗 Connected Car und IoT Security:\n• Sichere Kommunikationsprotokolle für Vehicle-to-Everything Verbindungen\n• Automotive Intrusion Detection Systeme für vernetzte Fahrzeugkomponenten\n• Sichere Authentifizierung und Autorisierung für Connected Car Services\n• Monitoring und Logging von automotive-spezifischen Netzwerkaktivitäten\n• Schutz vor Automotive-spezifischen Cyberbedrohungen wie CAN-Bus Angriffen\n\n🏭 Produktions- und Entwicklungssicherheit:\n• Sichere PLM-Systeme für Fahrzeugentwicklung und Produktionsplanung\n• Schutz von CAD-Daten und Konstruktionszeichnungen durch spezialisierte DLP-Lösungen\n• Sichere Collaboration-Plattformen für internationale Automotive-Entwicklungsteams\n• Backup und Recovery Systeme für kritische Automotive-Entwicklungsdaten\n• Sichere Integration von Lieferanten-Systemen in die Entwicklungsumgebung\n\n🔍 Monitoring und Incident Response:\n• SIEM-Systeme mit automotive-spezifischen Use Cases und Bedrohungsszenarien\n• Automated Threat Detection für automotive-typische Angriffsmuster\n• Forensik-Fähigkeiten für automotive-spezifische Sicherheitsvorfälle\n• Integration von Threat Intelligence für die Automobilindustrie\n• Incident Response Playbooks für automotive-spezifische Szenarien\n\n🛡️ Physische und Umgebungssicherheit:\n• Sichere Bereiche für Prototypenentwicklung und Fahrzeugtests\n• Zugangskontrollen für automotive-spezifische Entwicklungs- und Testbereiche\n• Überwachung und Schutz von Fahrzeugprototypen und sensiblen Komponenten\n• Sichere Entsorgung von automotive-spezifischen Entwicklungsmaterialien\n• Umgebungskontrollen für automotive-spezifische Test- und Entwicklungseinrichtungen\n\n📱 Mobile und Remote Access Security:\n• Sichere mobile Zugriffe auf automotive-spezifische Entwicklungssysteme\n• VPN-Lösungen für verteilte Automotive-Entwicklungsteams\n• Mobile Device Management für automotive-spezifische Anwendungen\n• Sichere Remote-Diagnose und -wartung von Fahrzeugsystemen\n• Zero Trust Architekturen für automotive-spezifische Cloud-Services"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie wird die Dokumentation für TISAX strukturiert und welche Nachweise sind erforderlich?',
        answer: "Die TISAX-Dokumentation folgt einer strukturierten Herangehensweise, die sowohl die allgemeinen ISO 27001 Anforderungen als auch die automotive-spezifischen VDA ISA Kontrollziele abdeckt. Eine systematische Dokumentationsstruktur ist entscheidend für ein erfolgreiches Assessment und die kontinuierliche Compliance-Überwachung.\n\n📋 Grundlegende Dokumentationsstruktur:\n• TISAX-spezifische Informationssicherheitsrichtlinie mit automotive-spezifischen Anforderungen\n• Risikoregister mit automotive-spezifischen Bedrohungsszenarien und Schutzbedarfen\n• Statement of Applicability mit VDA ISA Kontrollzielen und deren Implementierungsstatus\n• Verfahrensanweisungen für automotive-spezifische Sicherheitsprozesse\n• Incident Response Pläne für automotive-spezifische Sicherheitsvorfälle\n\n🚗 Automotive-spezifische Dokumentation:\n• Klassifizierungsschema für automotive-spezifische Informationsassets wie Fahrzeugdaten und Entwicklungsinformationen\n• Prozessbeschreibungen für den Umgang mit Prototypen und sensiblen Automotive-Entwicklungsdaten\n• Lieferantenmanagement-Verfahren mit TISAX-spezifischen Sicherheitsanforderungen\n• Connected Car Security Konzepte und Implementierungsleitfäden\n• Supply Chain Security Richtlinien für automotive-spezifische Partnerschaften\n\n📊 Nachweisführung und Evidenz:\n• Implementierungsnachweise für alle relevanten VDA ISA Kontrollziele\n• Audit-Logs und Monitoring-Berichte für automotive-spezifische Systeme\n• Schulungsnachweise für Mitarbeiter zu automotive-spezifischen Sicherheitsanforderungen\n• Penetrationstests und Vulnerability Assessments für automotive-spezifische Infrastrukturen\n• Incident Response Dokumentation für automotive-spezifische Sicherheitsvorfälle\n\n🔍 Assessment-spezifische Dokumentation:\n• Selbstbewertung basierend auf dem VDA ISA Katalog mit detaillierter Begründung\n• Gap-Analyse zwischen aktueller Implementierung und TISAX-Anforderungen\n• Maßnahmenpläne zur Schließung identifizierter Lücken\n• Kontinuierliche Verbesserungspläne für automotive-spezifische Sicherheitsmaßnahmen\n• Management Review Protokolle mit Fokus auf automotive-spezifische Risiken\n\n📝 Operative Dokumentation:\n• Betriebshandbücher für automotive-spezifische Sicherheitssysteme\n• Change Management Verfahren für automotive-spezifische Systeme und Prozesse\n• Business Continuity Pläne für automotive-spezifische Geschäftsprozesse\n• Disaster Recovery Verfahren für automotive-kritische Systeme\n• Supplier Security Assessment Dokumentation für automotive-spezifische Lieferanten\n\n🎯 Best Practices für TISAX-Dokumentation:\n• Verwendung standardisierter Templates und Checklisten für konsistente Dokumentation\n• Regelmäßige Aktualisierung der Dokumentation entsprechend sich ändernder automotive-spezifischer Anforderungen\n• Zentrale Dokumentenverwaltung mit Versionskontrolle und Zugriffsberechtigung\n• Integration der TISAX-Dokumentation in bestehende ISMS-Strukturen\n• Kontinuierliche Überprüfung der Dokumentation auf Vollständigkeit und Aktualität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Herausforderungen gibt es bei der TISAX Implementierung in internationalen Automotive-Unternehmen?',
        answer: "Die TISAX Implementierung in internationalen Automotive-Unternehmen bringt spezifische Herausforderungen mit sich, die über die üblichen Compliance-Anforderungen hinausgehen. Diese umfassen kulturelle, rechtliche, technische und organisatorische Aspekte, die eine koordinierte und strategische Herangehensweise erfordern.\n\n🌍 Internationale Compliance-Harmonisierung:\n• Unterschiedliche nationale Datenschutzgesetze und deren Auswirkungen auf automotive-spezifische Datenverarbeitung\n• Varying regulatory requirements für Connected Car Services in verschiedenen Märkten\n• Harmonisierung von TISAX-Anforderungen mit lokalen Automotive-Sicherheitsstandards\n• Cross-border data transfer Regelungen für automotive-spezifische Entwicklungsdaten\n• Integration verschiedener nationaler Cybersecurity-Frameworks in die TISAX-Implementierung\n\n🏢 Organisatorische Komplexität:\n• Koordination zwischen verschiedenen Standorten mit unterschiedlichen Sicherheitsreifen\n• Einheitliche Governance-Strukturen für TISAX-Compliance über mehrere Länder hinweg\n• Standardisierung von automotive-spezifischen Sicherheitsprozessen in verschiedenen Kulturen\n• Management von Zeitzonendifferenzen bei globalen TISAX-Projekten\n• Aufbau einheitlicher Kommunikationskanäle für automotive-spezifische Sicherheitsthemen\n\n🔧 Technische Integration:\n• Harmonisierung verschiedener IT-Infrastrukturen und automotive-spezifischer Systeme\n• Einheitliche SIEM-Implementierung für globale automotive-spezifische Bedrohungsüberwachung\n• Standardisierung von automotive-spezifischen Entwicklungstools und Sicherheitsmaßnahmen\n• Integration verschiedener Legacy-Systeme in einheitliche TISAX-konforme Architekturen\n• Aufbau globaler Incident Response Fähigkeiten für automotive-spezifische Bedrohungen\n\n👥 Kulturelle und sprachliche Herausforderungen:\n• Übersetzung und Lokalisierung von TISAX-Dokumentation und Schulungsmaterialien\n• Anpassung von automotive-spezifischen Sicherheitsschulungen an lokale Kulturen\n• Aufbau einheitlichen Sicherheitsbewusstseins trotz kultureller Unterschiede\n• Management verschiedener Arbeitsweisen und Kommunikationsstile\n• Integration lokaler automotive-spezifischer Sicherheitspraktiken in globale Standards\n\n📊 Ressourcen- und Kostenmanagement:\n• Optimierung von TISAX-Implementierungskosten über mehrere Standorte hinweg\n• Effiziente Nutzung von automotive-spezifischen Sicherheitsexperten in verschiedenen Regionen\n• Koordination von Assessment-Terminen und -kosten für mehrere Standorte\n• Aufbau lokaler TISAX-Expertise zur Reduzierung von Beratungskosten\n• Balance zwischen globaler Standardisierung und lokaler Flexibilität\n\n🎯 Strategische Lösungsansätze:\n• Entwicklung einer globalen TISAX-Roadmap mit lokalen Anpassungsmöglichkeiten\n• Aufbau von Centers of Excellence für automotive-spezifische Sicherheit in verschiedenen Regionen\n• Implementierung globaler Governance-Strukturen mit lokaler Verantwortung\n• Nutzung von Cloud-basierten Lösungen für einheitliche automotive-spezifische Sicherheitsservices\n• Etablierung regelmäßiger globaler TISAX-Reviews und Best-Practice-Sharing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie unterstützt TISAX die digitale Transformation in der Automobilindustrie?',
        answer: "TISAX spielt eine zentrale Rolle bei der sicheren digitalen Transformation der Automobilindustrie, indem es einen strukturierten Rahmen für die Informationssicherheit in einer zunehmend vernetzten und digitalisierten Automotive-Landschaft bietet. Der Standard ermöglicht es Unternehmen, innovative Technologien sicher zu implementieren und gleichzeitig das Vertrauen in der Supply Chain zu stärken.\n\n🚗 Enabler für Connected Car Innovation:\n• Sicherheitsframework für die Entwicklung und Implementierung von Connected Car Services\n• Strukturierte Herangehensweise an Vehicle-to-Everything Kommunikation und deren Absicherung\n• Vertrauensbildung bei Kunden durch nachgewiesene Sicherheitsstandards für vernetzte Fahrzeuge\n• Grundlage für sichere Over-the-Air Updates und Remote-Diagnose-Services\n• Unterstützung bei der Entwicklung sicherer Automotive-Cloud-Services und -plattformen\n\n🔄 Digitale Supply Chain Transformation:\n• Standardisierte Sicherheitsanforderungen für digitale Lieferanten-Integration\n• Vertrauensvolle Basis für digitale Collaboration-Plattformen in der Automotive-Entwicklung\n• Sichere Implementierung von IoT-Lösungen in der Automotive-Produktion\n• Grundlage für digitale Twin-Technologien und deren sichere Datennutzung\n• Unterstützung bei der Implementierung von Blockchain-Lösungen für Supply Chain Transparency\n\n📱 Neue Geschäftsmodelle und Services:\n• Sicherheitsrahmen für Mobility-as-a-Service und Car-Sharing-Plattformen\n• Vertrauensbildung für neue digitale Automotive-Services und Ökosysteme\n• Grundlage für sichere Datenmonetarisierung in der Automobilindustrie\n• Unterstützung bei der Entwicklung sicherer Autonomous Vehicle Services\n• Framework für sichere Integration von Third-Party Services in Fahrzeuge\n\n🏭 Industrie 4.0 und Smart Manufacturing:\n• Sicherheitsstandards für vernetzte Produktionsanlagen und Smart Factory Konzepte\n• Sichere Integration von AI und Machine Learning in Automotive-Produktionsprozesse\n• Grundlage für sichere Predictive Maintenance und Quality Management Systeme\n• Unterstützung bei der Implementierung von Digital Manufacturing Platforms\n• Framework für sichere Robotics und Automation in der Automotive-Produktion\n\n🔍 Data Analytics und AI Innovation:\n• Sicherheitsrahmen für Big Data Analytics in der Automotive-Entwicklung\n• Vertrauensvolle Basis für AI-basierte Fahrzeugentwicklung und -optimierung\n• Sichere Implementierung von Machine Learning für Autonomous Driving Systeme\n• Grundlage für sichere Customer Analytics und Personalization Services\n• Unterstützung bei der Entwicklung sicherer AI-basierter Automotive-Services\n\n🌐 Globale Digitalisierung und Standardisierung:\n• Internationale Harmonisierung von Sicherheitsstandards für digitale Automotive-Services\n• Vertrauensbildung für grenzüberschreitende digitale Automotive-Partnerschaften\n• Grundlage für sichere globale Automotive-Plattformen und -ökosysteme\n• Unterstützung bei der Entwicklung einheitlicher digitaler Automotive-Standards\n• Framework für sichere Integration verschiedener nationaler Automotive-Systeme"
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
