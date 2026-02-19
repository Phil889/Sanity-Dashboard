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
    console.log('Updating ISO 27001 Rechenzentrum page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-rechenzentrum' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-rechenzentrum" not found')
    }
    
    // Create new FAQs for physical security and access controls
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt ADVISORI mehrstufige physische Sicherheitskonzepte für kritische Rechenzentrum-Infrastrukturen?',
        answer: "Mehrstufige physische Sicherheitskonzepte bilden das Rückgrat effektiver Rechenzentrum-Sicherheit und erfordern eine systematische Herangehensweise, die verschiedene Schutzebenen intelligent miteinander verknüpft. ADVISORI entwickelt maßgeschneiderte Sicherheitsarchitekturen, die sowohl gegen externe Bedrohungen als auch interne Risiken schützen.\n\n🏗️ Perimeter-Sicherheit und Außenschutz:\n• Entwicklung robuster Perimeter-Sicherheitskonzepte mit physischen Barrieren, Zäunen und Sicherheitszonen\n• Integration intelligenter Überwachungssysteme mit Bewegungsmeldern, Infrarotkameras und Perimeter-Intrusion-Detection\n• Strategische Platzierung von Sicherheitsposten und Kontrollpunkten für optimale Überwachung\n• Koordination mit lokalen Sicherheitsdiensten und Notfalldiensten für schnelle Reaktionszeiten\n• Berücksichtigung geografischer und umweltbedingter Risikofaktoren bei der Perimeter-Gestaltung\n\n🚪 Mehrstufige Zugangskontrollen:\n• Design gestaffelter Sicherheitszonen mit unterschiedlichen Zugangsberechtigungen und Kontrollmechanismen\n• Implementation biometrischer Authentifizierungssysteme kombiniert mit Kartenzugang und PIN-Codes\n• Entwicklung von Mantrap-Systemen und Vereinzelungsanlagen für kritische Bereiche\n• Integration von Besuchermanagement-Systemen mit Escort-Verfahren für externe Personen\n• Etablierung zeitbasierter Zugangskontrollen mit automatischer Sperrung außerhalb der Geschäftszeiten\n\n📹 Intelligente Überwachung und Monitoring:\n• Deployment umfassender Videoüberwachungssysteme mit hochauflösenden Kameras und Nachtsichtfähigkeiten\n• Integration von KI-gestützten Analysesystemen für automatische Anomalieerkennung und Verhaltensmuster\n• Entwicklung zentraler Überwachungsleitstellen mit Echtzeit-Monitoring und Alarmmanagement\n• Implementation von Audio-Überwachung in kritischen Bereichen mit Datenschutz-konformen Lösungen\n• Aufbau redundanter Überwachungsinfrastrukturen für kontinuierliche Betriebsfähigkeit\n\n🔐 Physische Asset-Sicherheit:\n• Entwicklung spezieller Sicherheitsmaßnahmen für Server-Racks, Netzwerk-Equipment und Storage-Systeme\n• Implementation von Rack-Level-Sicherheit mit individuellen Zugangskontrollen und Überwachung\n• Design sicherer Verkabelungskonzepte mit Schutz vor Manipulation und unbefugtem Zugriff\n• Etablierung sicherer Bereiche für Backup-Medien und kritische Dokumentation\n• Integration von Asset-Tracking-Systemen für kontinuierliche Inventarisierung und Standortverfolgung\n\n⚡ Integrierte Sicherheitssysteme:\n• Koordination aller Sicherheitssysteme in einer zentralen Management-Plattform\n• Entwicklung automatisierter Reaktionsprozeduren für verschiedene Bedrohungsszenarien\n• Integration mit Brandschutz-, Klima- und Stromversorgungssystemen für ganzheitliche Sicherheit\n• Etablierung von Backup-Kommunikationssystemen für Notfallsituationen\n• Aufbau redundanter Kontrollsysteme für höchste Verfügbarkeit und Ausfallsicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche innovativen Zugangsmanagement-Technologien integriert ADVISORI für maximale Rechenzentrum-Sicherheit?',
        answer: "ADVISORI integriert modernste Zugangsmanagement-Technologien, die höchste Sicherheitsstandards mit operativer Effizienz verbinden. Innovative Technologien ermöglichen präzise Kontrolle, umfassende Nachverfolgung und proaktive Sicherheitsmaßnahmen für kritische Rechenzentrum-Bereiche.\n\n🔬 Biometrische Authentifizierungssysteme:\n• Implementation fortschrittlicher Fingerabdruck-Scanner mit Lebenderkennung und Anti-Spoofing-Technologien\n• Integration von Iris-Scanning-Systemen für höchste Sicherheitsanforderungen in kritischen Bereichen\n• Deployment von Gesichtserkennung mit KI-gestützter Analyse und Maskenerkennung\n• Entwicklung multimodaler biometrischer Systeme für redundante Authentifizierung\n• Berücksichtigung von Datenschutz-Anforderungen und GDPR-Compliance bei biometrischen Daten\n\n📱 Smart Card und Mobile Technologien:\n• Integration hochsicherer Smart Cards mit verschlüsselten Zertifikaten und PKI-Infrastruktur\n• Deployment von NFC-basierten Zugangskontrollen mit verschlüsselter Kommunikation\n• Implementation mobiler Zugangskontrollen über sichere Smartphone-Apps mit Push-Benachrichtigungen\n• Entwicklung von Bluetooth-Low-Energy-Lösungen für berührungslose Zugangskontrollen\n• Integration von QR-Code-basierten temporären Zugangssystemen für Besucher und Wartungspersonal\n\n🤖 KI-gestützte Zugangsanalyse:\n• Deployment intelligenter Systeme zur Erkennung ungewöhnlicher Zugangsverhalten und Anomalien\n• Integration von Machine Learning für adaptive Sicherheitsrichtlinien basierend auf Verhaltensmustern\n• Entwicklung prädiktiver Analysen für proaktive Sicherheitsmaßnahmen und Risikobewertung\n• Implementation von Echtzeit-Risikoanalysen für dynamische Zugangsberechtigungen\n• Aufbau intelligenter Alarmierungssysteme mit kontextbezogenen Benachrichtigungen\n\n🔄 Zero-Trust-Zugangsarchitektur:\n• Implementation kontinuierlicher Authentifizierung und Autorisierung für alle Zugangsversuche\n• Entwicklung granularer Berechtigungskonzepte mit Least-Privilege-Prinzipien\n• Integration von Mikrosegmentierung für isolierte Zugangskontrollen zu verschiedenen Infrastrukturbereichen\n• Etablierung dynamischer Vertrauensbewertungen basierend auf Kontext und Verhalten\n• Aufbau adaptiver Sicherheitsrichtlinien, die sich automatisch an Bedrohungslagen anpassen\n\n📊 Umfassende Audit-Trails und Compliance:\n• Entwicklung detaillierter Protokollierungssysteme für alle Zugangsaktivitäten mit Zeitstempel und Kontext\n• Integration von Blockchain-Technologien für manipulationssichere Audit-Logs\n• Implementation automatisierter Compliance-Berichte für verschiedene regulatorische Anforderungen\n• Aufbau von Echtzeit-Dashboards für kontinuierliche Überwachung und Analyse\n• Etablierung von Data Analytics für Trend-Analysen und Sicherheitsoptimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleistet ADVISORI die Balance zwischen maximaler Sicherheit und operativer Effizienz im Rechenzentrum?',
        answer: "Die Balance zwischen maximaler Sicherheit und operativer Effizienz ist entscheidend für erfolgreiche Rechenzentrum-Operationen. ADVISORI entwickelt intelligente Lösungen, die höchste Sicherheitsstandards mit reibungslosen Betriebsabläufen verbinden und dabei die Produktivität der IT-Teams maximieren.\n\n⚖️ Intelligente Sicherheitsautomatisierung:\n• Entwicklung automatisierter Sicherheitsprozesse, die manuellen Aufwand minimieren und menschliche Fehler reduzieren\n• Integration von KI-gestützten Systemen für selbstlernende Sicherheitskontrollen und adaptive Bedrohungserkennung\n• Implementation von Workflow-Automatisierung für Routine-Sicherheitsaufgaben und Compliance-Prozesse\n• Deployment intelligenter Alarmfilterung zur Reduzierung von False Positives und Alarm-Fatigue\n• Entwicklung selbstheilender Sicherheitssysteme mit automatischer Problemerkennung und -behebung\n\n🚀 Benutzerfreundliche Sicherheitsinterfaces:\n• Design intuitiver Benutzeroberflächen für Sicherheitssysteme mit minimaler Lernkurve\n• Integration von Single-Sign-On-Lösungen für nahtlose Authentifizierung über verschiedene Systeme\n• Entwicklung mobiler Apps für Remote-Zugang und Notfall-Management mit sicherer Verschlüsselung\n• Implementation von Self-Service-Portalen für Benutzer zur eigenständigen Verwaltung von Berechtigungen\n• Aufbau kontextueller Hilfesysteme und Guided Workflows für komplexe Sicherheitsprozeduren\n\n📈 Performance-optimierte Sicherheitsarchitektur:\n• Design hochperformanter Sicherheitssysteme mit minimaler Latenz und maximaler Durchsatzrate\n• Integration von Edge-Computing für lokale Sicherheitsentscheidungen ohne zentrale Verzögerungen\n• Entwicklung skalierbarer Sicherheitsinfrastrukturen, die mit wachsenden Anforderungen mitwachsen\n• Implementation von Load-Balancing für Sicherheitssysteme zur Vermeidung von Engpässen\n• Optimierung von Netzwerk-Sicherheitskontrollen für minimale Auswirkungen auf die Datenübertragung\n\n🔄 Adaptive Sicherheitsrichtlinien:\n• Entwicklung flexibler Sicherheitsrichtlinien, die sich automatisch an operative Anforderungen anpassen\n• Integration von Kontext-bewussten Sicherheitskontrollen basierend auf Zeit, Ort und Benutzerverhalten\n• Implementation von Notfall-Zugangsprozeduren für kritische Situationen mit erhöhter Überwachung\n• Aufbau von Eskalationsmechanismen für schnelle Entscheidungsfindung bei Sicherheitskonflikten\n• Etablierung von Feedback-Loops für kontinuierliche Optimierung der Sicherheits-Effizienz-Balance\n\n🎯 Kontinuierliche Optimierung und Monitoring:\n• Implementation von Performance-Metriken für Sicherheitssysteme mit Echtzeit-Überwachung\n• Entwicklung von Benchmarking-Prozessen für kontinuierliche Verbesserung der Systemeffizienz\n• Integration von User Experience Monitoring für Sicherheitsprozesse und Identifikation von Verbesserungspotenzialen\n• Aufbau von Predictive Analytics für proaktive Optimierung und Kapazitätsplanung\n• Etablierung regelmäßiger Reviews und Anpassungen basierend auf operativen Erfahrungen und Feedback"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Besuchermanagement und Escort-Verfahren in der ganzheitlichen Rechenzentrum-Sicherheitsstrategie?',
        answer: "Besuchermanagement und Escort-Verfahren sind kritische Komponenten einer ganzheitlichen Rechenzentrum-Sicherheitsstrategie, da externe Personen potenzielle Sicherheitsrisiken darstellen können. ADVISORI entwickelt umfassende Systeme, die Sicherheit mit Geschäftsanforderungen und Servicequalität in Einklang bringen.\n\n👥 Strukturiertes Besuchermanagement-System:\n• Entwicklung digitaler Voranmeldungssysteme mit umfassender Hintergrundprüfung und Risikobewertung\n• Integration von Identitätsverifikationssystemen mit Dokumentenprüfung und biometrischer Erfassung\n• Implementation von Besucherkategorisierung basierend auf Zweck, Dauer und Sicherheitsanforderungen\n• Aufbau automatisierter Genehmigungsworkflows mit mehrstufigen Freigabeprozessen\n• Etablierung von Blacklist-Management und Sicherheitsalerts für problematische Personen\n\n🛡️ Professionelle Escort-Verfahren:\n• Entwicklung qualifizierter Escort-Teams mit spezieller Sicherheitsschulung und Zertifizierung\n• Integration von Echtzeit-Tracking-Systemen für kontinuierliche Überwachung von Besucherbewegungen\n• Implementation von Kommunikationssystemen für sofortige Alarmierung bei Sicherheitsvorfällen\n• Aufbau von Eskalationsprozeduren für verschiedene Bedrohungsszenarien und Notfallsituationen\n• Etablierung von Dokumentationspflichten für alle Escort-Aktivitäten und Besucherinteraktionen\n\n📱 Technologiegestützte Besucherkontrollen:\n• Deployment von Smart Badges mit GPS-Tracking und automatischer Deaktivierung nach Besuchsende\n• Integration von Geofencing-Technologien für automatische Alarmierung bei Verlassen erlaubter Bereiche\n• Implementation von Augmented Reality Systemen für Escort-Personal zur Anzeige von Sicherheitsinformationen\n• Entwicklung mobiler Apps für Besucher mit digitalen Wegweisern und Sicherheitsrichtlinien\n• Aufbau von IoT-Sensoren für kontinuierliche Überwachung von Besucherbereichen\n\n🔍 Risikobewertung und Compliance:\n• Entwicklung umfassender Risikobewertungsverfahren für verschiedene Besucherkategorien\n• Integration von Threat Intelligence für Bewertung potenzieller Sicherheitsrisiken\n• Implementation von Compliance-Checks für regulatorische Anforderungen und Branchenstandards\n• Aufbau von Audit-Trails für alle Besucheraktivitäten mit detaillierter Dokumentation\n• Etablierung von regelmäßigen Sicherheitsreviews und Verfahrensoptimierungen\n\n🚨 Notfall- und Incident-Management:\n• Entwicklung spezifischer Notfallprozeduren für Besuchersituationen mit klaren Verantwortlichkeiten\n• Integration von Evakuierungsverfahren mit Besucherverfolgung und Anwesenheitskontrolle\n• Implementation von Incident-Response-Protokollen für Sicherheitsvorfälle mit Besucherbeteiligung\n• Aufbau von Kommunikationssystemen für schnelle Information und Koordination\n• Etablierung von Post-Incident-Analysen für kontinuierliche Verbesserung der Sicherheitsverfahren"
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
